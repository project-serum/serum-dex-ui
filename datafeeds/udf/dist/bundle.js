!(function (e, s) {
  'object' == typeof exports && 'undefined' != typeof module
    ? s(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], s)
    : s(
        ((e =
          'undefined' != typeof globalThis
            ? globalThis
            : e || self).Datafeeds = {}),
      );
})(this, function (e) {
  'use strict';
  function s(e) {
    return void 0 === e ? '' : 'string' == typeof e ? e : e.message;
  }
  class t {
    constructor(e, s) {
      (this._datafeedUrl = e), (this._requester = s);
    }
    getBars(e, t, r) {
      const o = {
        symbol: e.ticker || '',
        resolution: t,
        from: r.from,
        to: r.to,
      };
      return (
        void 0 !== r.countBack && (o.countback = r.countBack),
        void 0 !== e.currency_code && (o.currencyCode = e.currency_code),
        void 0 !== e.unit_id && (o.unitId = e.unit_id),
        new Promise((e, t) => {
          this._requester
            .sendRequest(this._datafeedUrl, 'history', o)
            .then((s) => {
              if ('ok' !== s.s && 'no_data' !== s.s) return void t(s.errmsg);
              const r = [],
                o = { noData: !1 };
              if ('no_data' === s.s) (o.noData = !0), (o.nextTime = s.nextTime);
              else {
                const e = void 0 !== s.v,
                  t = void 0 !== s.o;
                for (let o = 0; o < s.t.length; ++o) {
                  const i = {
                    time: 1e3 * s.t[o],
                    close: parseFloat(s.c[o]),
                    open: parseFloat(s.c[o]),
                    high: parseFloat(s.c[o]),
                    low: parseFloat(s.c[o]),
                  };
                  t &&
                    ((i.open = parseFloat(s.o[o])),
                    (i.high = parseFloat(s.h[o])),
                    (i.low = parseFloat(s.l[o]))),
                    e && (i.volume = parseFloat(s.v[o])),
                    r.push(i);
                }
              }
              e({ bars: r, meta: o });
            })
            .catch((e) => {
              const r = s(e);
              console.warn(`HistoryProvider: getBars() failed, error=${r}`),
                t(r);
            });
        })
      );
    }
  }
  class r {
    constructor(e, s) {
      (this._subscribers = {}),
        (this._requestsPending = 0),
        (this._historyProvider = e),
        setInterval(this._updateData.bind(this), s);
    }
    subscribeBars(e, s, t, r) {
      this._subscribers.hasOwnProperty(r) ||
        ((this._subscribers[r] = {
          lastBarTime: null,
          listener: t,
          resolution: s,
          symbolInfo: e,
        }),
        e.name);
    }
    unsubscribeBars(e) {
      delete this._subscribers[e];
    }
    _updateData() {
      if (!(this._requestsPending > 0)) {
        this._requestsPending = 0;
        for (const e in this._subscribers)
          (this._requestsPending += 1),
            this._updateDataForSubscriber(e)
              .then(() => {
                (this._requestsPending -= 1), this._requestsPending;
              })
              .catch((e) => {
                (this._requestsPending -= 1), s(e), this._requestsPending;
              });
      }
    }
    _updateDataForSubscriber(e) {
      const s = this._subscribers[e],
        t = parseInt((Date.now() / 1e3).toString()),
        r =
          t -
          (function (e, s) {
            let t = 0;
            t =
              'D' === e || '1D' === e
                ? s
                : 'M' === e || '1M' === e
                ? 31 * s
                : 'W' === e || '1W' === e
                ? 7 * s
                : (s * parseInt(e)) / 1440;
            return 24 * t * 60 * 60;
          })(s.resolution, 10);
      return this._historyProvider
        .getBars(s.symbolInfo, s.resolution, {
          from: r,
          to: t,
          countBack: 2,
          firstDataRequest: !1,
        })
        .then((s) => {
          this._onSubscriberDataReceived(e, s);
        });
    }
    _onSubscriberDataReceived(e, s) {
      if (!this._subscribers.hasOwnProperty(e)) return;
      const t = s.bars;
      if (0 === t.length) return;
      const r = t[t.length - 1],
        o = this._subscribers[e];
      if (null !== o.lastBarTime && r.time < o.lastBarTime) return;
      if (null !== o.lastBarTime && r.time > o.lastBarTime) {
        if (t.length < 2)
          throw new Error(
            'Not enough bars in history for proper pulse update. Need at least 2.',
          );
        const e = t[t.length - 2];
        o.listener(e);
      }
      (o.lastBarTime = r.time), o.listener(r);
    }
  }
  class o {
    constructor(e) {
      (this._subscribers = {}),
        (this._requestsPending = 0),
        (this._quotesProvider = e),
        setInterval(this._updateQuotes.bind(this, 1), 1e4),
        setInterval(this._updateQuotes.bind(this, 0), 6e4);
    }
    subscribeQuotes(e, s, t, r) {
      this._subscribers[r] = { symbols: e, fastSymbols: s, listener: t };
    }
    unsubscribeQuotes(e) {
      delete this._subscribers[e];
    }
    _updateQuotes(e) {
      if (!(this._requestsPending > 0))
        for (const t in this._subscribers) {
          this._requestsPending++;
          const r = this._subscribers[t];
          this._quotesProvider
            .getQuotes(1 === e ? r.fastSymbols : r.symbols)
            .then((e) => {
              this._requestsPending--,
                this._subscribers.hasOwnProperty(t) &&
                  (r.listener(e), this._requestsPending);
            })
            .catch((e) => {
              this._requestsPending--, s(e), this._requestsPending;
            });
        }
    }
  }
  function i(e, s, t, r) {
    const o = e[s];
    return !Array.isArray(o) || (r && !Array.isArray(o[0])) ? o : o[t];
  }
  function n(e, s, t) {
    return (
      e +
      (void 0 !== s ? '_%|#|%_' + s : '') +
      (void 0 !== t ? '_%|#|%_' + t : '')
    );
  }
  class a {
    constructor(e, s, t) {
      (this._exchangesList = ['NYSE', 'FOREX', 'AMEX']),
        (this._symbolsInfo = {}),
        (this._symbolsList = []),
        (this._datafeedUrl = e),
        (this._datafeedSupportedResolutions = s),
        (this._requester = t),
        (this._readyPromise = this._init()),
        this._readyPromise.catch((e) => {
          console.error(`SymbolsStorage: Cannot init, error=${e.toString()}`);
        });
    }
    resolveSymbol(e, s, t) {
      return this._readyPromise.then(() => {
        const r = this._symbolsInfo[n(e, s, t)];
        return void 0 === r
          ? Promise.reject('invalid symbol')
          : Promise.resolve(r);
      });
    }
    searchSymbols(e, s, t, r) {
      return this._readyPromise.then(() => {
        const o = [],
          i = 0 === e.length;
        e = e.toUpperCase();
        for (const r of this._symbolsList) {
          const n = this._symbolsInfo[r];
          if (void 0 === n) continue;
          if (t.length > 0 && n.type !== t) continue;
          if (s && s.length > 0 && n.exchange !== s) continue;
          const a = n.name.toUpperCase().indexOf(e),
            u = n.description.toUpperCase().indexOf(e);
          if (i || a >= 0 || u >= 0) {
            if (!o.some((e) => e.symbolInfo === n)) {
              const e = a >= 0 ? a : 8e3 + u;
              o.push({ symbolInfo: n, weight: e });
            }
          }
        }
        const n = o
          .sort((e, s) => e.weight - s.weight)
          .slice(0, r)
          .map((e) => {
            const s = e.symbolInfo;
            return {
              symbol: s.name,
              full_name: s.full_name,
              description: s.description,
              exchange: s.exchange,
              params: [],
              type: s.type,
              ticker: s.name,
            };
          });
        return Promise.resolve(n);
      });
    }
    _init() {
      const e = [],
        s = {};
      for (const t of this._exchangesList)
        s[t] || ((s[t] = !0), e.push(this._requestExchangeData(t)));
      return Promise.all(e).then(() => {
        this._symbolsList.sort();
      });
    }
    _requestExchangeData(e) {
      return new Promise((t, r) => {
        this._requester
          .sendRequest(this._datafeedUrl, 'symbol_info', { group: e })
          .then((s) => {
            try {
              this._onExchangeDataReceived(e, s);
            } catch (o) {
              return void r(o);
            }
            t();
          })
          .catch((e) => {
            s(e), t();
          });
      });
    }
    _onExchangeDataReceived(e, s) {
      let t = 0;
      try {
        const e = s.symbol.length,
          r = void 0 !== s.ticker;
        for (; t < e; ++t) {
          const e = s.symbol[t],
            o = i(s, 'exchange-listed', t),
            a = i(s, 'exchange-traded', t),
            c = a + ':' + e,
            h = i(s, 'currency-code', t),
            l = i(s, 'unit-id', t),
            d = r ? i(s, 'ticker', t) : e,
            _ = {
              ticker: d,
              name: e,
              base_name: [o + ':' + e],
              full_name: c,
              listed_exchange: o,
              exchange: a,
              currency_code: h,
              original_currency_code: i(s, 'original-currency-code', t),
              unit_id: l,
              original_unit_id: i(s, 'original-unit-id', t),
              unit_conversion_types: i(s, 'unit-conversion-types', t, !0),
              description: i(s, 'description', t),
              has_intraday: u(i(s, 'has-intraday', t), !1),
              has_no_volume: u(i(s, 'has-no-volume', t), !1),
              minmov: i(s, 'minmovement', t) || i(s, 'minmov', t) || 0,
              minmove2: i(s, 'minmove2', t) || i(s, 'minmov2', t),
              fractional: i(s, 'fractional', t),
              pricescale: i(s, 'pricescale', t),
              type: i(s, 'type', t),
              session: i(s, 'session-regular', t),
              timezone: i(s, 'timezone', t),
              supported_resolutions: u(
                i(s, 'supported-resolutions', t, !0),
                this._datafeedSupportedResolutions,
              ),
              has_daily: u(i(s, 'has-daily', t), !0),
              intraday_multipliers: u(i(s, 'intraday-multipliers', t, !0), [
                '1',
                '5',
                '15',
                '30',
                '60',
              ]),
              has_weekly_and_monthly: i(s, 'has-weekly-and-monthly', t),
              has_empty_bars: i(s, 'has-empty-bars', t),
              volume_precision: u(i(s, 'volume-precision', t), 0),
              format: 'price',
            };
          (this._symbolsInfo[d] = _),
            (this._symbolsInfo[e] = _),
            (this._symbolsInfo[c] = _),
            (void 0 === h && void 0 === l) ||
              ((this._symbolsInfo[n(d, h, l)] = _),
              (this._symbolsInfo[n(e, h, l)] = _),
              (this._symbolsInfo[n(c, h, l)] = _)),
            this._symbolsList.push(e);
        }
      } catch (r) {
        throw new Error(
          `SymbolsStorage: API error when processing exchange ${e} symbol #${t} (${s.symbol[t]}): ${r.message}`,
        );
      }
    }
  }
  function u(e, s) {
    return void 0 !== e ? e : s;
  }
  function c(e, s, t) {
    const r = e[s];
    return Array.isArray(r) ? r[t] : r;
  }
  class h {
    constructor(e, s) {
      (this._datafeedUrl = e), (this._requester = s);
    }
    getQuotes(e) {
      return new Promise((t, r) => {
        this._requester
          .sendRequest(this._datafeedUrl, 'quotes', { symbols: e })
          .then((e) => {
            'ok' === e.s ? t(e.d) : r(e.errmsg);
          })
          .catch((e) => {
            const t = s(e);
            r(`network error: ${t}`);
          });
      });
    }
  }
  class l {
    constructor(e) {
      e && (this._headers = e);
    }
    sendRequest(e, s, t) {
      if (void 0 !== t) {
        const e = Object.keys(t);
        0 !== e.length && (s += '?'),
          (s += e
            .map(
              (e) =>
                `${encodeURIComponent(e)}=${encodeURIComponent(
                  t[e].toString(),
                )}`,
            )
            .join('&'));
      }
      const r = { credentials: 'same-origin' };
      return (
        void 0 !== this._headers && (r.headers = this._headers),
        fetch(`${e}/${s}`, r)
          .then((e) => e.text())
          .then((e) => JSON.parse(e))
      );
    }
  }
  (e.UDFCompatibleDatafeed = class extends (
    class {
      constructor(e, s, i, n = 1e4) {
        (this._configuration = {
          supports_search: !1,
          supports_group_request: !0,
          supported_resolutions: ['1', '5', '15', '30', '60', '1D', '1W', '1M'],
          supports_marks: !1,
          supports_timescale_marks: !1,
        }),
          (this._symbolsStorage = null),
          (this._datafeedURL = e),
          (this._requester = i),
          (this._historyProvider = new t(e, this._requester)),
          (this._quotesProvider = s),
          (this._dataPulseProvider = new r(this._historyProvider, n)),
          (this._quotesPulseProvider = new o(this._quotesProvider)),
          (this._configurationReadyPromise = this._requestConfiguration().then(
            (e) => {
              null === e &&
                (e = {
                  supports_search: !1,
                  supports_group_request: !0,
                  supported_resolutions: [
                    '1',
                    '5',
                    '15',
                    '30',
                    '60',
                    '1D',
                    '1W',
                    '1M',
                  ],
                  supports_marks: !1,
                  supports_timescale_marks: !1,
                }),
                this._setupWithConfiguration(e);
            },
          ));
      }
      onReady(e) {
        this._configurationReadyPromise.then(() => {
          e(this._configuration);
        });
      }
      getQuotes(e, s, t) {
        this._quotesProvider.getQuotes(e).then(s).catch(t);
      }
      subscribeQuotes(e, s, t, r) {
        this._quotesPulseProvider.subscribeQuotes(e, s, t, r);
      }
      unsubscribeQuotes(e) {
        this._quotesPulseProvider.unsubscribeQuotes(e);
      }
      getMarks(e, t, r, o, i) {
        if (!this._configuration.supports_marks) return;
        const n = { symbol: e.ticker || '', from: t, to: r, resolution: i };
        this._send('marks', n)
          .then((e) => {
            if (!Array.isArray(e)) {
              const s = [];
              for (let t = 0; t < e.id.length; ++t)
                s.push({
                  id: c(e, 'id', t),
                  time: c(e, 'time', t),
                  color: c(e, 'color', t),
                  text: c(e, 'text', t),
                  label: c(e, 'label', t),
                  labelFontColor: c(e, 'labelFontColor', t),
                  minSize: c(e, 'minSize', t),
                });
              e = s;
            }
            o(e);
          })
          .catch((e) => {
            s(e), o([]);
          });
      }
      getTimescaleMarks(e, t, r, o, i) {
        if (!this._configuration.supports_timescale_marks) return;
        const n = { symbol: e.ticker || '', from: t, to: r, resolution: i };
        this._send('timescale_marks', n)
          .then((e) => {
            if (!Array.isArray(e)) {
              const s = [];
              for (let t = 0; t < e.id.length; ++t)
                s.push({
                  id: c(e, 'id', t),
                  time: c(e, 'time', t),
                  color: c(e, 'color', t),
                  label: c(e, 'label', t),
                  tooltip: c(e, 'tooltip', t),
                });
              e = s;
            }
            o(e);
          })
          .catch((e) => {
            s(e), o([]);
          });
      }
      getServerTime(e) {
        this._configuration.supports_time &&
          this._send('time')
            .then((s) => {
              const t = parseInt(s);
              isNaN(t) || e(t);
            })
            .catch((e) => {
              s(e);
            });
      }
      searchSymbols(e, t, r, o) {
        if (this._configuration.supports_search) {
          const i = { limit: 30, query: e.toUpperCase(), type: r, exchange: t };
          this._send('search', i)
            .then((e) => {
              if (void 0 !== e.s) return e.errmsg, void o([]);
              o(e);
            })
            .catch((e) => {
              s(e), o([]);
            });
        } else {
          if (null === this._symbolsStorage)
            throw new Error(
              'UdfCompatibleDatafeed: inconsistent configuration (symbols storage)',
            );
          this._symbolsStorage
            .searchSymbols(e, t, r, 30)
            .then(o)
            .catch(o.bind(null, []));
        }
      }
      resolveSymbol(e, t, r, o) {
        const i = o && o.currencyCode,
          n = o && o.unitId;
        function a(e) {
          t(e);
        }
        if (this._configuration.supports_group_request) {
          if (null === this._symbolsStorage)
            throw new Error(
              'UdfCompatibleDatafeed: inconsistent configuration (symbols storage)',
            );
          this._symbolsStorage.resolveSymbol(e, i, n).then(a).catch(r);
        } else {
          const t = { symbol: e };
          void 0 !== i && (t.currencyCode = i),
            void 0 !== n && (t.unitId = n),
            this._send('symbols', t)
              .then((e) => {
                void 0 !== e.s ? r('unknown_symbol') : a(e);
              })
              .catch((e) => {
                s(e), r('unknown_symbol');
              });
        }
      }
      getBars(e, s, t, r, o) {
        this._historyProvider
          .getBars(e, s, t)
          .then((e) => {
            r(e.bars, e.meta);
          })
          .catch(o);
      }
      subscribeBars(e, s, t, r, o) {
        this._dataPulseProvider.subscribeBars(e, s, t, r);
      }
      unsubscribeBars(e) {
        this._dataPulseProvider.unsubscribeBars(e);
      }
      _requestConfiguration() {
        return this._send('config').catch((e) => (s(e), null));
      }
      _send(e, s) {
        return this._requester.sendRequest(this._datafeedURL, e, s);
      }
      _setupWithConfiguration(e) {
        if (
          ((this._configuration = e),
          void 0 === e.exchanges && (e.exchanges = []),
          !e.supports_search && !e.supports_group_request)
        )
          throw new Error(
            'Unsupported datafeed configuration. Must either support search, or support group request',
          );
        (!e.supports_group_request && e.supports_search) ||
          (this._symbolsStorage = new a(
            this._datafeedURL,
            e.supported_resolutions || [],
            this._requester,
          )),
          JSON.stringify(e);
      }
    }
  ) {
    constructor(e, s = 1e4) {
      const t = new l();
      super(e, new h(e, t), t, s);
    }
  }),
    Object.defineProperty(e, '__esModule', { value: !0 });
});
