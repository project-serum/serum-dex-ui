!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(
        ((e =
          'undefined' != typeof globalThis
            ? globalThis
            : e || self).Datafeeds = {}),
      );
})(this, function (e) {
  'use strict';
  var r = function (e, t) {
    return (r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      })(e, t);
  };
  function n(e) {
    return void 0 === e ? '' : 'string' == typeof e ? e : e.message;
  }
  var i =
    ((t.prototype.getBars = function (e, t, r) {
      var s = this,
        o = { symbol: e.ticker || '', resolution: t, from: r.from, to: r.to };
      return (
        void 0 !== r.countBack && (o.countback = r.countBack),
        void 0 !== e.currency_code && (o.currencyCode = e.currency_code),
        new Promise(function (a, u) {
          s._requester
            .sendRequest(s._datafeedUrl, 'history', o)
            .then(function (e) {
              if ('ok' === e.s || 'no_data' === e.s) {
                var t = [],
                  r = { noData: !1 };
                if ('no_data' === e.s)
                  (r.noData = !0), (r.nextTime = e.nextTime);
                else
                  for (
                    var s = void 0 !== e.v, o = void 0 !== e.o, n = 0;
                    n < e.t.length;
                    ++n
                  ) {
                    var i = {
                      time: 1e3 * e.t[n],
                      close: parseFloat(e.c[n]),
                      open: parseFloat(e.c[n]),
                      high: parseFloat(e.c[n]),
                      low: parseFloat(e.c[n]),
                    };
                    o &&
                      ((i.open = parseFloat(e.o[n])),
                      (i.high = parseFloat(e.h[n])),
                      (i.low = parseFloat(e.l[n]))),
                      s && (i.volume = parseFloat(e.v[n])),
                      t.push(i);
                  }
                a({ bars: t, meta: r });
              } else u(e.errmsg);
            })
            .catch(function (e) {
              e = n(e);
              console.warn('HistoryProvider: getBars() failed, error=' + e),
                u(e);
            });
        })
      );
    }),
    t);
  function t(e, t) {
    (this._datafeedUrl = e), (this._requester = t);
  }
  var a =
    ((s.prototype.subscribeBars = function (e, t, r, s) {
      this._subscribers.hasOwnProperty(s) ||
        ((this._subscribers[s] = {
          lastBarTime: null,
          listener: r,
          resolution: t,
          symbolInfo: e,
        }),
        e.name);
    }),
    (s.prototype.unsubscribeBars = function (e) {
      delete this._subscribers[e];
    }),
    (s.prototype._updateData = function () {
      var t = this;
      if (!(0 < this._requestsPending)) {
        this._requestsPending = 0;
        var e,
          r,
          s = this;
        for (e in this._subscribers)
          (r = e),
            (s._requestsPending += 1),
            s
              ._updateDataForSubscriber(r)
              .then(function () {
                --t._requestsPending, t._requestsPending;
              })
              .catch(function (e) {
                --t._requestsPending, n(e), t._requestsPending;
              });
      }
    }),
    (s.prototype._updateDataForSubscriber = function (t) {
      var r = this,
        e = this._subscribers[t],
        s = parseInt((Date.now() / 1e3).toString()),
        o =
          s -
          (function (e, t) {
            var r = 0;
            r =
              'D' === e || '1D' === e
                ? t
                : 'M' === e || '1M' === e
                ? 31 * t
                : 'W' === e || '1W' === e
                ? 7 * t
                : (t * parseInt(e)) / 1440;
            return 24 * r * 60 * 60;
          })(e.resolution, 10);
      return this._historyProvider
        .getBars(e.symbolInfo, e.resolution, {
          from: o,
          to: s,
          countBack: 2,
          firstDataRequest: !1,
        })
        .then(function (e) {
          r._onSubscriberDataReceived(t, e);
        });
    }),
    (s.prototype._onSubscriberDataReceived = function (e, t) {
      if (this._subscribers.hasOwnProperty(e)) {
        var r = t.bars;
        if (0 !== r.length) {
          (t = r[r.length - 1]), (e = this._subscribers[e]);
          if (!(null !== e.lastBarTime && t.time < e.lastBarTime)) {
            if (null !== e.lastBarTime && t.time > e.lastBarTime) {
              if (r.length < 2)
                throw new Error(
                  'Not enough bars in history for proper pulse update. Need at least 2.',
                );
              r = r[r.length - 2];
              e.listener(r);
            }
            (e.lastBarTime = t.time), e.listener(t);
          }
        }
      }
    }),
    s);
  function s(e, t) {
    (this._subscribers = {}),
      (this._requestsPending = 0),
      (this._historyProvider = e),
      setInterval(this._updateData.bind(this), t);
  }
  var u =
    ((o.prototype.subscribeQuotes = function (e, t, r, s) {
      this._subscribers[s] = { symbols: e, fastSymbols: t, listener: r };
    }),
    (o.prototype.unsubscribeQuotes = function (e) {
      delete this._subscribers[e];
    }),
    (o.prototype._updateQuotes = function (e) {
      var s = this;
      if (!(0 < this._requestsPending)) {
        var t,
          o = this;
        for (t in this._subscribers)
          !(function (t) {
            o._requestsPending++;
            var r = o._subscribers[t];
            o._quotesProvider
              .getQuotes(1 === e ? r.fastSymbols : r.symbols)
              .then(function (e) {
                s._requestsPending--,
                  s._subscribers.hasOwnProperty(t) &&
                    (r.listener(e), s._requestsPending);
              })
              .catch(function (e) {
                s._requestsPending--, n(e), s._requestsPending;
              });
          })(t);
      }
    }),
    o);
  function o(e) {
    (this._subscribers = {}),
      (this._requestsPending = 0),
      (this._quotesProvider = e),
      setInterval(this._updateQuotes.bind(this, 1), 1e4),
      setInterval(this._updateQuotes.bind(this, 0), 6e4);
  }
  function p(e, t, r, s) {
    t = e[t];
    return !Array.isArray(t) || (s && !Array.isArray(t[0])) ? t : t[r];
  }
  function f(e, t) {
    return e + (void 0 !== t ? '_%|#|%_' + t : '');
  }
  var c =
    ((h.prototype.resolveSymbol = function (t, r) {
      var s = this;
      return this._readyPromise.then(function () {
        var e = s._symbolsInfo[f(t, r)];
        return void 0 === e
          ? Promise.reject('invalid symbol')
          : Promise.resolve(e);
      });
    }),
    (h.prototype.searchSymbols = function (n, i, a, u) {
      var c = this;
      return this._readyPromise.then(function () {
        var s = [],
          o = 0 === n.length;
        n = n.toUpperCase();
        for (var e = 0, t = c._symbolsList; e < t.length; e++)
          !(function (e) {
            var t = c._symbolsInfo[e];
            if (void 0 === t) return;
            if (0 < a.length && t.type !== a) return;
            if (i && 0 < i.length && t.exchange !== i) return;
            var r = t.name.toUpperCase().indexOf(n),
              e = t.description.toUpperCase().indexOf(n);
            (o || 0 <= r || 0 <= e) &&
              (s.some(function (e) {
                return e.symbolInfo === t;
              }) ||
                s.push({ symbolInfo: t, weight: 0 <= r ? r : 8e3 + e }));
          })(t[e]);
        var r = s
          .sort(function (e, t) {
            return e.weight - t.weight;
          })
          .slice(0, u)
          .map(function (e) {
            e = e.symbolInfo;
            return {
              symbol: e.name,
              full_name: e.full_name,
              description: e.description,
              exchange: e.exchange,
              params: [],
              type: e.type,
              ticker: e.name,
            };
          });
        return Promise.resolve(r);
      });
    }),
    (h.prototype._init = function () {
      for (
        var e = this, t = [], r = {}, s = 0, o = this._exchangesList;
        s < o.length;
        s++
      ) {
        var n = o[s];
        r[n] || ((r[n] = !0), t.push(this._requestExchangeData(n)));
      }
      return Promise.all(t).then(function () {
        e._symbolsList.sort();
      });
    }),
    (h.prototype._requestExchangeData = function (s) {
      var o = this;
      return new Promise(function (t, r) {
        o._requester
          .sendRequest(o._datafeedUrl, 'symbol_info', { group: s })
          .then(function (e) {
            try {
              o._onExchangeDataReceived(s, e);
            } catch (e) {
              return void r(e);
            }
            t();
          })
          .catch(function (e) {
            n(e), t();
          });
      });
    }),
    (h.prototype._onExchangeDataReceived = function (t, r) {
      var s = 0;
      try {
        for (var e = r.symbol.length, o = void 0 !== r.ticker; s < e; ++s) {
          var n = r.symbol[s],
            i = p(r, 'exchange-listed', s),
            a = p(r, 'exchange-traded', s),
            u = a + ':' + n,
            c = p(r, 'currency-code', s),
            h = o ? p(r, 'ticker', s) : n,
            l = {
              ticker: h,
              name: n,
              base_name: [i + ':' + n],
              full_name: u,
              listed_exchange: i,
              exchange: a,
              currency_code: c,
              original_currency_code: p(r, 'original-currency-code', s),
              description: p(r, 'description', s),
              has_intraday: _(p(r, 'has-intraday', s), !1),
              has_no_volume: _(p(r, 'has-no-volume', s), !1),
              minmov: p(r, 'minmovement', s) || p(r, 'minmov', s) || 0,
              minmove2: p(r, 'minmove2', s) || p(r, 'minmov2', s),
              fractional: p(r, 'fractional', s),
              pricescale: p(r, 'pricescale', s),
              type: p(r, 'type', s),
              session: p(r, 'session-regular', s),
              timezone: p(r, 'timezone', s),
              supported_resolutions: _(
                p(r, 'supported-resolutions', s, !0),
                this._datafeedSupportedResolutions,
              ),
              has_daily: _(p(r, 'has-daily', s), !0),
              intraday_multipliers: _(p(r, 'intraday-multipliers', s, !0), [
                '1',
                '5',
                '15',
                '30',
                '60',
              ]),
              has_weekly_and_monthly: p(r, 'has-weekly-and-monthly', s),
              has_empty_bars: p(r, 'has-empty-bars', s),
              volume_precision: _(p(r, 'volume-precision', s), 0),
              format: 'price',
            };
          (this._symbolsInfo[h] = l),
            (this._symbolsInfo[n] = l),
            (this._symbolsInfo[u] = l),
            void 0 !== c &&
              ((this._symbolsInfo[f(h, c)] = l),
              (this._symbolsInfo[f(n, c)] = l),
              (this._symbolsInfo[f(u, c)] = l)),
            this._symbolsList.push(n);
        }
      } catch (e) {
        throw new Error(
          'SymbolsStorage: API error when processing exchange ' +
            t +
            ' symbol #' +
            s +
            ' (' +
            r.symbol[s] +
            '): ' +
            e.message,
        );
      }
    }),
    h);
  function h(e, t, r) {
    (this._exchangesList = ['NYSE', 'FOREX', 'AMEX']),
      (this._symbolsInfo = {}),
      (this._symbolsList = []),
      (this._datafeedUrl = e),
      (this._datafeedSupportedResolutions = t),
      (this._requester = r),
      (this._readyPromise = this._init()),
      this._readyPromise.catch(function (e) {
        console.error('SymbolsStorage: Cannot init, error=' + e.toString());
      });
  }
  function _(e, t) {
    return void 0 !== e ? e : t;
  }
  function l(e, t, r) {
    t = e[t];
    return Array.isArray(t) ? t[r] : t;
  }
  var d =
    ((m.prototype.onReady = function (e) {
      var t = this;
      this._configurationReadyPromise.then(function () {
        e(t._configuration);
      });
    }),
    (m.prototype.getQuotes = function (e, t, r) {
      this._quotesProvider.getQuotes(e).then(t).catch(r);
    }),
    (m.prototype.subscribeQuotes = function (e, t, r, s) {
      this._quotesPulseProvider.subscribeQuotes(e, t, r, s);
    }),
    (m.prototype.unsubscribeQuotes = function (e) {
      this._quotesPulseProvider.unsubscribeQuotes(e);
    }),
    (m.prototype.getMarks = function (e, t, r, s, o) {
      this._configuration.supports_marks &&
        ((o = { symbol: e.ticker || '', from: t, to: r, resolution: o }),
        this._send('marks', o)
          .then(function (e) {
            if (!Array.isArray(e)) {
              for (var t = [], r = 0; r < e.id.length; ++r)
                t.push({
                  id: l(e, 'id', r),
                  time: l(e, 'time', r),
                  color: l(e, 'color', r),
                  text: l(e, 'text', r),
                  label: l(e, 'label', r),
                  labelFontColor: l(e, 'labelFontColor', r),
                  minSize: l(e, 'minSize', r),
                });
              e = t;
            }
            s(e);
          })
          .catch(function (e) {
            n(e), s([]);
          }));
    }),
    (m.prototype.getTimescaleMarks = function (e, t, r, s, o) {
      this._configuration.supports_timescale_marks &&
        ((o = { symbol: e.ticker || '', from: t, to: r, resolution: o }),
        this._send('timescale_marks', o)
          .then(function (e) {
            if (!Array.isArray(e)) {
              for (var t = [], r = 0; r < e.id.length; ++r)
                t.push({
                  id: l(e, 'id', r),
                  time: l(e, 'time', r),
                  color: l(e, 'color', r),
                  label: l(e, 'label', r),
                  tooltip: l(e, 'tooltip', r),
                });
              e = t;
            }
            s(e);
          })
          .catch(function (e) {
            n(e), s([]);
          }));
    }),
    (m.prototype.getServerTime = function (t) {
      this._configuration.supports_time &&
        this._send('time')
          .then(function (e) {
            e = parseInt(e);
            isNaN(e) || t(e);
          })
          .catch(function (e) {
            n(e);
          });
    }),
    (m.prototype.searchSymbols = function (e, t, r, s) {
      if (this._configuration.supports_search) {
        var o = { limit: 30, query: e.toUpperCase(), type: r, exchange: t };
        this._send('search', o)
          .then(function (e) {
            return void 0 !== e.s ? (e.errmsg, void s([])) : void s(e);
          })
          .catch(function (e) {
            n(e), s([]);
          });
      } else {
        if (null === this._symbolsStorage)
          throw new Error(
            'UdfCompatibleDatafeed: inconsistent configuration (symbols storage)',
          );
        this._symbolsStorage
          .searchSymbols(e, t, r, 30)
          .then(s)
          .catch(s.bind(null, []));
      }
    }),
    (m.prototype.resolveSymbol = function (e, t, r, s) {
      s = s && s.currencyCode;
      function o(e) {
        t(e);
      }
      if (this._configuration.supports_group_request) {
        if (null === this._symbolsStorage)
          throw new Error(
            'UdfCompatibleDatafeed: inconsistent configuration (symbols storage)',
          );
        this._symbolsStorage.resolveSymbol(e, s).then(o).catch(r);
      } else {
        e = { symbol: e };
        void 0 !== s && (e.currencyCode = s),
          this._send('symbols', e)
            .then(function (e) {
              void 0 !== e.s ? r('unknown_symbol') : o(e);
            })
            .catch(function (e) {
              n(e), r('unknown_symbol');
            });
      }
    }),
    (m.prototype.getBars = function (e, t, r, s, o) {
      this._historyProvider
        .getBars(e, t, r)
        .then(function (e) {
          s(e.bars, e.meta);
        })
        .catch(o);
    }),
    (m.prototype.subscribeBars = function (e, t, r, s, o) {
      this._dataPulseProvider.subscribeBars(e, t, r, s);
    }),
    (m.prototype.unsubscribeBars = function (e) {
      this._dataPulseProvider.unsubscribeBars(e);
    }),
    (m.prototype._requestConfiguration = function () {
      return this._send('config').catch(function (e) {
        return n(e), null;
      });
    }),
    (m.prototype._send = function (e, t) {
      return this._requester.sendRequest(this._datafeedURL, e, t);
    }),
    (m.prototype._setupWithConfiguration = function (e) {
      if (
        (void 0 === (this._configuration = e).exchanges && (e.exchanges = []),
        !e.supports_search && !e.supports_group_request)
      )
        throw new Error(
          'Unsupported datafeed configuration. Must either support search, or support group request',
        );
      (!e.supports_group_request && e.supports_search) ||
        (this._symbolsStorage = new c(
          this._datafeedURL,
          e.supported_resolutions || [],
          this._requester,
        )),
        JSON.stringify(e);
    }),
    m);
  function m(e, t, r, s) {
    var o = this;
    void 0 === s && (s = 1e4),
      (this._configuration = y()),
      (this._symbolsStorage = null),
      (this._datafeedURL = e),
      (this._requester = r),
      (this._historyProvider = new i(e, this._requester)),
      (this._quotesProvider = t),
      (this._dataPulseProvider = new a(this._historyProvider, s)),
      (this._quotesPulseProvider = new u(this._quotesProvider)),
      (this._configurationReadyPromise = this._requestConfiguration().then(
        function (e) {
          null === e && (e = y()), o._setupWithConfiguration(e);
        },
      ));
  }
  function y() {
    return {
      supports_search: !1,
      supports_group_request: !0,
      supported_resolutions: ['1', '5', '15', '30', '60', '1D', '1W', '1M'],
      supports_marks: !1,
      supports_timescale_marks: !1,
    };
  }
  var b =
    ((g.prototype.getQuotes = function (e) {
      var s = this;
      return new Promise(function (t, r) {
        s._requester
          .sendRequest(s._datafeedUrl, 'quotes', { symbols: e })
          .then(function (e) {
            'ok' === e.s ? t(e.d) : r(e.errmsg);
          })
          .catch(function (e) {
            e = n(e);
            r('network error: ' + e);
          });
      });
    }),
    g);
  function g(e, t) {
    (this._datafeedUrl = e), (this._requester = t);
  }
  var v =
    ((P.prototype.sendRequest = function (e, t, r) {
      void 0 !== r &&
        (0 !== (s = Object.keys(r)).length && (t += '?'),
        (t += s
          .map(function (e) {
            return (
              encodeURIComponent(e) + '=' + encodeURIComponent(r[e].toString())
            );
          })
          .join('&')));
      var s = { credentials: 'same-origin' };
      return (
        void 0 !== this._headers && (s.headers = this._headers),
        fetch(e + '/' + t, s)
          .then(function (e) {
            return e.text();
          })
          .then(function (e) {
            return JSON.parse(e);
          })
      );
    }),
    P);
  function P(e) {
    e && (this._headers = e);
  }
  var q,
    w,
    S,
    k =
      (r((w = I), (S = q = d)),
      (w.prototype =
        null === S ? Object.create(S) : ((x.prototype = S.prototype), new x())),
      I);
  function x() {
    this.constructor = w;
  }
  function I(e, t) {
    void 0 === t && (t = 1e4);
    var r = new v(),
      s = new b(e, r);
    return q.call(this, e, s, r, t) || this;
  }
  (e.UDFCompatibleDatafeed = k),
    Object.defineProperty(e, '__esModule', { value: !0 });
});
