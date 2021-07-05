!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t((e.Datafeeds = {}));
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
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
      })(e, t);
  };
  var s = !1;
  function n(e) {
    var t;
    s &&
      ((t = new Date()),
      console.log(
        t.toLocaleTimeString() + '.' + t.getMilliseconds() + '> ' + e,
      ));
  }
  function c(e) {
    return void 0 === e ? '' : 'string' == typeof e ? e : e.message;
  }
  var i =
    ((t.prototype.getBars = function (e, t, r, s) {
      var o = this,
        i = { symbol: e.ticker || '', resolution: t, from: r, to: s };
      return (
        void 0 !== e.currency_code && (i.currencyCode = e.currency_code),
        new Promise(function (a, u) {
          o._requester
            .sendRequest(o._datafeedUrl, 'history', i)
            .then(function (e) {
              if ('ok' === e.s || 'no_data' === e.s) {
                var t = [],
                  r = { noData: !1 };
                if ('no_data' === e.s)
                  (r.noData = !0), (r.nextTime = e.nextTime);
                else
                  for (
                    var s = void 0 !== e.v, o = void 0 !== e.o, i = 0;
                    i < e.t.length;
                    ++i
                  ) {
                    var n = {
                      time: 1e3 * e.t[i],
                      close: parseFloat(e.c[i]),
                      open: parseFloat(e.c[i]),
                      high: parseFloat(e.c[i]),
                      low: parseFloat(e.c[i]),
                    };
                    o &&
                      ((n.open = parseFloat(e.o[i])),
                      (n.high = parseFloat(e.h[i])),
                      (n.low = parseFloat(e.l[i]))),
                      s && (n.volume = parseFloat(e.v[i])),
                      t.push(n);
                  }
                a({ bars: t, meta: r });
              } else u(e.errmsg);
            })
            .catch(function (e) {
              e = c(e);
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
    ((o.prototype.subscribeBars = function (e, t, r, s) {
      this._subscribers.hasOwnProperty(s)
        ? n('DataPulseProvider: already has subscriber with id=' + s)
        : ((this._subscribers[s] = {
            lastBarTime: null,
            listener: r,
            resolution: t,
            symbolInfo: e,
          }),
          n(
            'DataPulseProvider: subscribed for #' +
              s +
              ' - {' +
              e.name +
              ', ' +
              t +
              '}',
          ));
    }),
    (o.prototype.unsubscribeBars = function (e) {
      delete this._subscribers[e],
        n('DataPulseProvider: unsubscribed for #' + e);
    }),
    (o.prototype._updateData = function () {
      var r = this;
      if (!(0 < this._requestsPending)) {
        this._requestsPending = 0;
        var e,
          s = this;
        for (e in this._subscribers)
          !(function (t) {
            (s._requestsPending += 1),
              s
                ._updateDataForSubscriber(t)
                .then(function () {
                  --r._requestsPending,
                    n(
                      'DataPulseProvider: data for #' +
                        t +
                        ' updated successfully, pending=' +
                        r._requestsPending,
                    );
                })
                .catch(function (e) {
                  --r._requestsPending,
                    n(
                      'DataPulseProvider: data for #' +
                        t +
                        ' updated with error=' +
                        c(e) +
                        ', pending=' +
                        r._requestsPending,
                    );
                });
          })(e);
      }
    }),
    (o.prototype._updateDataForSubscriber = function (t) {
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
        .getBars(e.symbolInfo, e.resolution, o, s)
        .then(function (e) {
          r._onSubscriberDataReceived(t, e);
        });
    }),
    (o.prototype._onSubscriberDataReceived = function (e, t) {
      if (this._subscribers.hasOwnProperty(e)) {
        var r = t.bars;
        if (0 !== r.length) {
          var s = r[r.length - 1],
            t = this._subscribers[e];
          if (!(null !== t.lastBarTime && s.time < t.lastBarTime)) {
            if (null !== t.lastBarTime && s.time > t.lastBarTime) {
              if (r.length < 2)
                throw new Error(
                  'Not enough bars in history for proper pulse update. Need at least 2.',
                );
              r = r[r.length - 2];
              t.listener(r);
            }
            (t.lastBarTime = s.time), t.listener(s);
          }
        }
      } else
        n(
          'DataPulseProvider: Data comes for already unsubscribed subscription #' +
            e,
        );
    }),
    o);
  function o(e, t) {
    (this._subscribers = {}),
      (this._requestsPending = 0),
      (this._historyProvider = e),
      setInterval(this._updateData.bind(this), t);
  }
  var u =
    ((l.prototype.subscribeQuotes = function (e, t, r, s) {
      (this._subscribers[s] = { symbols: e, fastSymbols: t, listener: r }),
        n('QuotesPulseProvider: subscribed quotes with #' + s);
    }),
    (l.prototype.unsubscribeQuotes = function (e) {
      delete this._subscribers[e],
        n('QuotesPulseProvider: unsubscribed quotes with #' + e);
    }),
    (l.prototype._updateQuotes = function (s) {
      var o = this;
      if (!(0 < this._requestsPending)) {
        var e,
          i = this;
        for (e in this._subscribers)
          !(function (t) {
            i._requestsPending++;
            var r = i._subscribers[t];
            i._quotesProvider
              .getQuotes(1 === s ? r.fastSymbols : r.symbols)
              .then(function (e) {
                o._requestsPending--,
                  o._subscribers.hasOwnProperty(t) &&
                    (r.listener(e),
                    n(
                      'QuotesPulseProvider: data for #' +
                        t +
                        ' (' +
                        s +
                        ') updated successfully, pending=' +
                        o._requestsPending,
                    ));
              })
              .catch(function (e) {
                o._requestsPending--,
                  n(
                    'QuotesPulseProvider: data for #' +
                      t +
                      ' (' +
                      s +
                      ') updated with error=' +
                      c(e) +
                      ', pending=' +
                      o._requestsPending,
                  );
              });
          })(e);
      }
    }),
    l);
  function l(e) {
    (this._subscribers = {}),
      (this._requestsPending = 0),
      (this._quotesProvider = e),
      setInterval(this._updateQuotes.bind(this, 1), 1e4),
      setInterval(this._updateQuotes.bind(this, 0), 6e4);
  }
  function h(e, t, r, s) {
    t = e[t];
    return !Array.isArray(t) || (s && !Array.isArray(t[0])) ? t : t[r];
  }
  function f(e, t) {
    return e + (void 0 !== t ? '_%|#|%_' + t : '');
  }
  var d =
    ((p.prototype.resolveSymbol = function (t, r) {
      var s = this;
      return this._readyPromise.then(function () {
        var e = s._symbolsInfo[f(t, r)];
        return void 0 === e
          ? Promise.reject('invalid symbol')
          : Promise.resolve(e);
      });
    }),
    (p.prototype.searchSymbols = function (i, n, a, u) {
      var c = this;
      return this._readyPromise.then(function () {
        var s = [],
          o = 0 === i.length;
        i = i.toUpperCase();
        for (var e = 0, t = c._symbolsList; e < t.length; e++)
          !(function (e) {
            var t = c._symbolsInfo[e];
            if (void 0 === t) return;
            if (0 < a.length && t.type !== a) return;
            if (n && 0 < n.length && t.exchange !== n) return;
            var r = t.name.toUpperCase().indexOf(i),
              e = t.description.toUpperCase().indexOf(i);
            (o || 0 <= r || 0 <= e) &&
              (s.some(function (e) {
                return e.symbolInfo === t;
              }) ||
                ((e = 0 <= r ? r : 8e3 + e),
                s.push({ symbolInfo: t, weight: e })));
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
    (p.prototype._init = function () {
      for (
        var e = this, t = [], r = {}, s = 0, o = this._exchangesList;
        s < o.length;
        s++
      ) {
        var i = o[s];
        r[i] || ((r[i] = !0), t.push(this._requestExchangeData(i)));
      }
      return Promise.all(t).then(function () {
        e._symbolsList.sort(), n('SymbolsStorage: All exchanges data loaded');
      });
    }),
    (p.prototype._requestExchangeData = function (s) {
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
            n(
              "SymbolsStorage: Request data for exchange '" +
                s +
                "' failed, reason=" +
                c(e),
            ),
              t();
          });
      });
    }),
    (p.prototype._onExchangeDataReceived = function (t, r) {
      var e = this,
        s = 0;
      try {
        for (var o = r.symbol.length, i = void 0 !== r.ticker; s < o; ++s) {
          var n = r.symbol[s],
            a = h(r, 'exchange-listed', s),
            u = h(r, 'exchange-traded', s),
            c = u + ':' + n,
            l = h(r, 'currency-code', s),
            d = i ? h(r, 'ticker', s) : n,
            u = {
              ticker: d,
              name: n,
              base_name: [a + ':' + n],
              full_name: c,
              listed_exchange: a,
              exchange: u,
              currency_code: l,
              original_currency_code: h(r, 'original-currency-code', s),
              description: h(r, 'description', s),
              has_intraday: _(h(r, 'has-intraday', s), !1),
              has_no_volume: _(h(r, 'has-no-volume', s), !1),
              minmov: h(r, 'minmovement', s) || h(r, 'minmov', s) || 0,
              minmove2: h(r, 'minmove2', s) || h(r, 'minmov2', s),
              fractional: h(r, 'fractional', s),
              pricescale: h(r, 'pricescale', s),
              type: h(r, 'type', s),
              session: h(r, 'session-regular', s),
              timezone: h(r, 'timezone', s),
              supported_resolutions: _(
                h(r, 'supported-resolutions', s, !0),
                e._datafeedSupportedResolutions,
              ),
              force_session_rebuild: h(r, 'force-session-rebuild', s),
              has_daily: _(h(r, 'has-daily', s), !0),
              intraday_multipliers: _(h(r, 'intraday-multipliers', s, !0), [
                '1',
                '5',
                '15',
                '30',
                '60',
              ]),
              has_weekly_and_monthly: h(r, 'has-weekly-and-monthly', s),
              has_empty_bars: h(r, 'has-empty-bars', s),
              volume_precision: _(h(r, 'volume-precision', s), 0),
              format: 'price',
            };
          (e._symbolsInfo[d] = u),
            (e._symbolsInfo[n] = u),
            (e._symbolsInfo[c] = u),
            void 0 !== l &&
              ((e._symbolsInfo[f(d, l)] = u),
              (e._symbolsInfo[f(n, l)] = u),
              (e._symbolsInfo[f(c, l)] = u)),
            e._symbolsList.push(n);
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
    p);
  function p(e, t, r) {
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
  function m(e, t, r) {
    t = e[t];
    return Array.isArray(t) ? t[r] : t;
  }
  var b =
    ((y.prototype.onReady = function (e) {
      var t = this;
      this._configurationReadyPromise.then(function () {
        e(t._configuration);
      });
    }),
    (y.prototype.getQuotes = function (e, t, r) {
      this._quotesProvider.getQuotes(e).then(t).catch(r);
    }),
    (y.prototype.subscribeQuotes = function (e, t, r, s) {
      this._quotesPulseProvider.subscribeQuotes(e, t, r, s);
    }),
    (y.prototype.unsubscribeQuotes = function (e) {
      this._quotesPulseProvider.unsubscribeQuotes(e);
    }),
    (y.prototype.calculateHistoryDepth = function (e, t, r) {}),
    (y.prototype.getMarks = function (e, t, r, s, o) {
      this._configuration.supports_marks &&
        ((o = { symbol: e.ticker || '', from: t, to: r, resolution: o }),
        this._send('marks', o)
          .then(function (e) {
            if (!Array.isArray(e)) {
              for (var t = [], r = 0; r < e.id.length; ++r)
                t.push({
                  id: m(e, 'id', r),
                  time: m(e, 'time', r),
                  color: m(e, 'color', r),
                  text: m(e, 'text', r),
                  label: m(e, 'label', r),
                  labelFontColor: m(e, 'labelFontColor', r),
                  minSize: m(e, 'minSize', r),
                });
              e = t;
            }
            s(e);
          })
          .catch(function (e) {
            n('UdfCompatibleDatafeed: Request marks failed: ' + c(e)), s([]);
          }));
    }),
    (y.prototype.getTimescaleMarks = function (e, t, r, s, o) {
      this._configuration.supports_timescale_marks &&
        ((o = { symbol: e.ticker || '', from: t, to: r, resolution: o }),
        this._send('timescale_marks', o)
          .then(function (e) {
            if (!Array.isArray(e)) {
              for (var t = [], r = 0; r < e.id.length; ++r)
                t.push({
                  id: m(e, 'id', r),
                  time: m(e, 'time', r),
                  color: m(e, 'color', r),
                  label: m(e, 'label', r),
                  tooltip: m(e, 'tooltip', r),
                });
              e = t;
            }
            s(e);
          })
          .catch(function (e) {
            n('UdfCompatibleDatafeed: Request timescale marks failed: ' + c(e)),
              s([]);
          }));
    }),
    (y.prototype.getServerTime = function (t) {
      this._configuration.supports_time &&
        this._send('time')
          .then(function (e) {
            e = parseInt(e);
            isNaN(e) || t(e);
          })
          .catch(function (e) {
            n('UdfCompatibleDatafeed: Fail to load server time, error=' + c(e));
          });
    }),
    (y.prototype.searchSymbols = function (t, e, r, s) {
      if (this._configuration.supports_search) {
        var o = { limit: 30, query: t.toUpperCase(), type: r, exchange: e };
        this._send('search', o)
          .then(function (e) {
            return void 0 !== e.s
              ? (n('UdfCompatibleDatafeed: search symbols error=' + e.errmsg),
                void s([]))
              : void s(e);
          })
          .catch(function (e) {
            n(
              "UdfCompatibleDatafeed: Search symbols for '" +
                t +
                "' failed. Error=" +
                c(e),
            ),
              s([]);
          });
      } else {
        if (null === this._symbolsStorage)
          throw new Error(
            'UdfCompatibleDatafeed: inconsistent configuration (symbols storage)',
          );
        this._symbolsStorage
          .searchSymbols(t, e, r, 30)
          .then(s)
          .catch(s.bind(null, []));
      }
    }),
    (y.prototype.resolveSymbol = function (e, t, r, s) {
      n('Resolve requested');
      var s = s && s.currencyCode,
        o = Date.now();
      function i(e) {
        n('Symbol resolved: ' + (Date.now() - o) + 'ms'), t(e);
      }
      if (this._configuration.supports_group_request) {
        if (null === this._symbolsStorage)
          throw new Error(
            'UdfCompatibleDatafeed: inconsistent configuration (symbols storage)',
          );
        this._symbolsStorage.resolveSymbol(e, s).then(i).catch(r);
      } else {
        e = { symbol: e };
        void 0 !== s && (e.currencyCode = s),
          this._send('symbols', e)
            .then(function (e) {
              void 0 !== e.s ? r('unknown_symbol') : i(e);
            })
            .catch(function (e) {
              n('UdfCompatibleDatafeed: Error resolving symbol: ' + c(e)),
                r('unknown_symbol');
            });
      }
    }),
    (y.prototype.getBars = function (e, t, r, s, o, i) {
      this._historyProvider
        .getBars(e, t, r, s)
        .then(function (e) {
          o(e.bars, e.meta);
        })
        .catch(i);
    }),
    (y.prototype.subscribeBars = function (e, t, r, s, o) {
      this._dataPulseProvider.subscribeBars(e, t, r, s);
    }),
    (y.prototype.unsubscribeBars = function (e) {
      this._dataPulseProvider.unsubscribeBars(e);
    }),
    (y.prototype._requestConfiguration = function () {
      return this._send('config').catch(function (e) {
        return (
          n(
            'UdfCompatibleDatafeed: Cannot get datafeed configuration - use default, error=' +
              c(e),
          ),
          null
        );
      });
    }),
    (y.prototype._send = function (e, t) {
      return this._requester.sendRequest(this._datafeedURL, e, t);
    }),
    (y.prototype._setupWithConfiguration = function (e) {
      if (
        (void 0 === (this._configuration = e).exchanges && (e.exchanges = []),
        !e.supports_search && !e.supports_group_request)
      )
        throw new Error(
          'Unsupported datafeed configuration. Must either support search, or support group request',
        );
      (!e.supports_group_request && e.supports_search) ||
        (this._symbolsStorage = new d(
          this._datafeedURL,
          e.supported_resolutions || [],
          this._requester,
        )),
        n('UdfCompatibleDatafeed: Initialized with ' + JSON.stringify(e));
    }),
    y);
  function y(e, t, r, s) {
    var o = this;
    void 0 === s && (s = 1e4),
      (this._configuration = v()),
      (this._symbolsStorage = null),
      (this._datafeedURL = e),
      (this._requester = r),
      (this._historyProvider = new i(e, this._requester)),
      (this._quotesProvider = t),
      (this._dataPulseProvider = new a(this._historyProvider, s)),
      (this._quotesPulseProvider = new u(this._quotesProvider)),
      (this._configurationReadyPromise = this._requestConfiguration().then(
        function (e) {
          null === e && (e = v()), o._setupWithConfiguration(e);
        },
      ));
  }
  function v() {
    return {
      supports_search: !1,
      supports_group_request: !0,
      supported_resolutions: ['1', '5', '15', '30', '60', '1D', '1W', '1M'],
      supports_marks: !1,
      supports_timescale_marks: !1,
    };
  }
  var g =
    ((P.prototype.getQuotes = function (e) {
      var s = this;
      return new Promise(function (t, r) {
        s._requester
          .sendRequest(s._datafeedUrl, 'quotes', { symbols: e })
          .then(function (e) {
            'ok' === e.s ? t(e.d) : r(e.errmsg);
          })
          .catch(function (e) {
            e = c(e);
            n('QuotesProvider: getQuotes failed, error=' + e),
              r('network error: ' + e);
          });
      });
    }),
    P);
  function P(e, t) {
    (this._datafeedUrl = e), (this._requester = t);
  }
  var q =
    ((w.prototype.sendRequest = function (e, t, r) {
      void 0 !== r &&
        (0 !== (s = Object.keys(r)).length && (t += '?'),
        (t += s
          .map(function (e) {
            return (
              encodeURIComponent(e) + '=' + encodeURIComponent(r[e].toString())
            );
          })
          .join('&'))),
        n('New request: ' + t);
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
    w);
  function w(e) {
    e && (this._headers = e);
  }
  var D,
    S,
    x,
    C =
      (r((S = k), (x = D = b)),
      (S.prototype =
        null === x ? Object.create(x) : ((U.prototype = x.prototype), new U())),
      k);
  function U() {
    this.constructor = S;
  }
  function k(e, t) {
    void 0 === t && (t = 1e4);
    var r = new q(),
      s = new g(e, r);
    return D.call(this, e, s, r, t) || this;
  }
  (e.UDFCompatibleDatafeed = C),
    Object.defineProperty(e, '__esModule', { value: !0 });
});
