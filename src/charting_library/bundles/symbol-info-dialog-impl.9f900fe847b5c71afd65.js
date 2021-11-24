(window.webpackJsonp = window.webpackJsonp || []).push([
  ['symbol-info-dialog-impl'],
  {
    '1Z/g': function (e, t, n) {
      'use strict';
      (function (e, r) {
        var o,
          i = n('PT1i').linking,
          a = n('+6ja').availableTimezones,
          l = n('kcTO').PriceFormatter,
          c = n('0waE'),
          s = n('q1tI'),
          u = n('i8i4'),
          p = n('ZzxF').SymbolInfoDialog,
          d = n('5mo2').SessionSpec,
          m = n('jCNj'),
          f = n('kcTO').numberToStringWithLeadingZero,
          v = n('Ialn'),
          y = n('IWXC').getQuoteSessionInstance,
          w = n('n5al').createSeriesFormatter,
          h = n('w3Pp').marketType,
          g = [
            m.MONDAY,
            m.TUESDAY,
            m.WEDNESDAY,
            m.THURSDAY,
            m.FRIDAY,
            m.SATURDAY,
            m.SUNDAY,
          ],
          _ = g.reduce(function (t, n) {
            return (t[n < 7 ? n + 1 : 1] = e.weekdaysMin(n)), t;
          }, {});
        function N(e) {
          return (
            !(function (e) {
              return e && e.type && 'economic' === e.type;
            })(e) &&
            !(function (e, t) {
              return (
                e && e.listed_exchange && t.indexOf(e.listed_exchange) >= 0
              );
            })(e, ['QUANDL', 'BSE_EOD', 'NSE_EOD', 'LSE_EOD'])
          );
        }
        function b(e) {
          return e.minmove2 > 0 && !e.fractional && e.pricescale;
        }
        function E(e) {
          if (b(e))
            return new l(e.pricescale / e.minmove2).format(
              e.minmove2 / e.pricescale,
            );
        }
        function S(e) {
          return void 0 === e.minmov || void 0 === e.pricescale
            ? null
            : w(e).format(e.minmov / e.pricescale);
        }
        function D(e) {
          var t = e.typespecs && e.typespecs.includes('cfd');
          return h(e.type, t);
        }
        function k(e) {
          return e.original_currency_code || e.currency_code || null;
        }
        function C(e) {
          return e && e.type && 'futures' === e.type && e.front_contract;
        }
        function O(e) {
          o ||
            ((o = document.createElement('div')), document.body.appendChild(o)),
            u.render(s.createElement(p, e), o);
        }
        function T(e) {
          for (var t = a, n = 0; n < t.length; n++)
            if (t[n].id === e) return t[n].title;
          return e;
        }
        function x(e) {
          var t,
            n = new d('Etc/UTC', e);
          return ((t = n.entries()),
          g.reduce(function (e, n) {
            var r = t.filter(function (e) {
                return e.dayOfWeek() === n;
              }),
              o = _[n] + ' ';
            if (0 === r.length) return e.push(o + window.t('Closed')), e;
            var i = r.reduce(function (e, t) {
              var n = t.sessionStartDayOfWeek(),
                r = (function (e, t) {
                  for (var n = e + t; n > m.SATURDAY; ) n -= m.SATURDAY;
                  return n;
                })(n, t.sessionStartDaysOffset()),
                o = n !== t.dayOfWeek(),
                i = o && r !== t.dayOfWeek(),
                a = o ? _[n] : '',
                l = i ? _[r] : '',
                c = P(t.start()) + a + '-' + P(t.start() + t.length()) + l;
              return e.push(c), e;
            }, []);
            return e.push(o + i.join(', ')), e;
          }, [])).join('<br>');
        }
        function I(e) {
          return e || '-';
        }
        function A(e, t) {
          for (var n = 0, r = 0; r < t.length; r++)
            if (void 0 === t[r].getter) {
              var o = t[r].propName,
                i = t[r].altPropName,
                a = o in e ? o : void 0 !== i && i in e ? i : void 0;
              if (void 0 !== a) {
                var l = e[a];
                (t[r].value = (t[r].formatter || I)(l)), n++;
              }
            } else {
              var c = t[r].getter(e);
              null !== c && (t[r].value = c), n++;
            }
          return (
            (function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                void 0 === r.visibility ||
                  r.visibility(e) ||
                  (t.splice(n, 1), n--);
              }
            })(e, t),
            n
          );
        }
        function P(e) {
          for (; e > m.minutesPerDay; ) e -= m.minutesPerDay;
          var t = e % 60,
            n = f((e - t) / 60, 2) + ':' + f(t, 2);
          return v.isRtl() ? v.startWithLTR(n) : n;
        }
        t.showSymbolInfoDialog = function (e, t) {
          if (
            (O({ isOpened: !1 }),
            null == e && (e = i.symbol.value()),
            null != e)
          ) {
            e += '';
            var n = t && t.symbolInfo,
              a = [
                {
                  title: window.t('Symbol Name'),
                  propName: r.enabled('charting_library_base')
                    ? 'name'
                    : 'pro_name',
                },
                {
                  title: window.t('Symbol Description'),
                  propName: 'description',
                },
                { title: window.t('Symbol Type'), propName: 'type', getter: D },
                {
                  title: window.t('Current Contract'),
                  propName: 'front_contract',
                  visibility: C,
                },
                { title: window.t('Point Value'), propName: 'pointvalue' },
                {
                  title: window.t('Exchange'),
                  propName: 'exchange',
                },
                {
                  title: window.t('Listed Exchange'),
                  propName: 'listed_exchange',
                },
                {
                  title: window.t('Currency'),
                  getter: k,
                  formatter: function (e) {
                    return e || '';
                  },
                  defValue: '',
                },
                {
                  title: window.t('Pip Size'),
                  propName: 'pip_size',
                  getter: E,
                  visibility: b,
                },
                {
                  title: window.t('Tick Size'),
                  propName: 'tick_size',
                  getter: S,
                },
                { title: window.t('Sector'), propName: 'sector' },
                { title: window.t('Industry'), propName: 'industry' },
                {
                  title: window.t('Timezone'),
                  propName: 'timezone',
                  formatter: T,
                  visibility: N,
                },
                {
                  title: window.t('Session'),
                  propName: 'session_display',
                  altPropName: 'session',
                  formatter: x,
                  visibility: N,
                  setHtml: !0,
                },
              ],
              l = 0;
            if ((n && (l = A(n, a)), l < a.length)) {
              var s = 'symbolinfodialog.' + c.guid(),
                p = y('full');
              p.subscribe(s, e, function (t, n) {
                A(n.values, a), p.unsubscribe(s, e), O(d);
              });
            }
            var d = {
              isOpened: !0,
              onClose: function () {
                O({ isOpened: !1 }), u.unmountComponentAtNode(o), (o = null);
              },
              fields: a,
            };
            O(d);
          }
        };
      }.call(this, n('ldgD'), n('Kxc7')));
    },
    AVTG: function (e, t, n) {
      'use strict';
      var r = n('q1tI'),
        o = n('TSYQ'),
        i = n('kgsH'),
        a = n('uo4K'),
        l = n('Iivm');
      function c(e) {
        var t = e.hideIcon
          ? null
          : r.createElement(l.Icon, {
              className: i.close,
              icon: a,
              onClick: e.onClose,
            });
        return r.createElement(
          'div',
          {
            className: o(i.header, e.className),
            'data-dragg-area': !0,
            ref: e.reference,
          },
          e.children,
          t,
        );
      }
      n('kQXJ');
      var s = n('XYXm');
      function u(e) {
        return r.createElement(
          'div',
          { className: o(s.body, e.className), ref: e.reference },
          e.children,
        );
      }
      var p = n('8Rai'),
        d = n('cJj4');
      function m(e) {
        var t, n;
        e.text
          ? (n = r.createElement('span', null, e.text))
          : e.html &&
            (n = r.createElement('span', {
              dangerouslySetInnerHTML: { __html: e.html },
            }));
        var i = Object(p.a)({
          mouseDown: !0,
          touchStart: !0,
          handler: e.onClickOutside,
        });
        if (!n) return null;
        var a = o(d.message, e.className, (((t = {})[d.error] = e.isError), t));
        return r.createElement(
          'div',
          { className: a, key: '0' },
          r.createElement('span', { ref: i }, n),
        );
      }
      n.d(t, 'b', function () {
        return c;
      }),
        n.d(t, 'a', function () {
          return u;
        }),
        n.d(t, 'c', function () {
          return m;
        });
    },
    XYXm: function (e, t, n) {
      e.exports = { body: 'body-2N-vuwQW' };
    },
    ZzxF: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'SymbolInfoDialog', function () {
          return d;
        });
      var r = n('mrSG'),
        o = (n('YFKU'), n('q1tI')),
        i = n('WXjp'),
        a = n('AVTG'),
        l = n('TSYQ'),
        c = n('ycI/'),
        s = n('FQhm'),
        u = n('ZjKI'),
        p = n('g9Yu'),
        d = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._close = function () {
                return t.props.onClose();
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              s.subscribe(
                u.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this._close,
                null,
              );
            }),
            (t.prototype.componentWillUnmount = function () {
              s.unsubscribe(
                u.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this._close,
                null,
              );
            }),
            (t.prototype.render = function () {
              return o.createElement(
                i.a,
                {
                  className: p.popupDialog,
                  isOpened: this.props.isOpened,
                  onClickOutside: this.props.onClose,
                },
                o.createElement(
                  a.b,
                  { onClose: this.props.onClose },
                  window.t('Symbol Info'),
                ),
                o.createElement(
                  a.a,
                  null,
                  o.createElement(c.a, {
                    keyCode: 27,
                    handler: this.props.onClose,
                  }),
                  o.createElement(
                    'div',
                    { className: p.content },
                    this._renderFields(),
                  ),
                ),
              );
            }),
            (t.prototype._renderFields = function () {
              return this.props.fields
                ? this.props.fields.map(function (e) {
                    return o.createElement(
                      'div',
                      { key: e.propName, className: p.row },
                      o.createElement(
                        'div',
                        { className: l(p.column, p.columnTitle) },
                        o.createElement(
                          'span',
                          { className: p.title },
                          e.title,
                        ),
                      ),
                      o.createElement(
                        'div',
                        { className: l(p.column, p.columnValue) },
                        o.createElement(
                          'span',
                          { className: p.value },
                          (function (e) {
                            var t = e.value || e.defValue || '-';
                            if (e.setHtml)
                              return o.createElement('span', {
                                dangerouslySetInnerHTML: { __html: t },
                              });
                            return t;
                          })(e),
                        ),
                      ),
                    );
                  })
                : [];
            }),
            t
          );
        })(o.PureComponent);
    },
    cJj4: function (e, t, n) {
      e.exports = { message: 'message-2o-rtQm0', error: 'error-2EW0C6z-' };
    },
    g9Yu: function (e, t, n) {
      e.exports = {
        popupDialog: 'popupDialog-2VK9ttEi',
        content: 'content-BtJ6qB4V',
        row: 'row-3iYHykfo',
        column: 'column-2FlX4ngi',
        title: 'title-22tx3Djt',
        value: 'value-2xvVEs1a',
        columnTitle: 'columnTitle-3ypCTDKd',
        columnValue: 'columnValue-Xr4j0qyI',
      };
    },
    kQXJ: function (e, t, n) {
      e.exports = { footer: 'footer-2Zoji8zg' };
    },
    kgsH: function (e, t, n) {
      e.exports = { header: 'header-dpl-vtN_', close: 'close-3kPn4OTV' };
    },
    uo4K: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="currentColor" d="M5.18 6.6L1.3 2.7.6 2 2 .59l.7.7 3.9 3.9 3.89-3.9.7-.7L12.61 2l-.71.7L8 6.6l3.89 3.89.7.7-1.4 1.42-.71-.71L6.58 8 2.72 11.9l-.71.7-1.41-1.4.7-.71 3.9-3.9z"/></svg>';
    },
    w3Pp: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'marketType', function () {
          return a;
        });
      n('YFKU'), n('HbRj');
      var r = new Map(),
        o = { context: 'market_type' },
        i = {
          cfd: window.t('cfd', o),
          bitcoin: window.t('crypto', o),
          crypto: window.t('crypto', o),
          dr: window.t('dr', o),
          forex: window.t('forex', o),
          futures: window.t('futures', o),
          index: window.t('index', o),
          stock: window.t('stock', o),
        };
      function a(e, t) {
        var n = e + '_' + t,
          a = r.get(n);
        if (void 0 !== a) return a;
        var l = t
          ? window.t('{market_type} cfd', o).format({ market_type: e })
          : i[e];
        return r.set(n, l), l;
      }
    },
    'ycI/': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var r = n('mrSG'),
        o = n('q1tI'),
        i = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._handleKeyDown = function (e) {
                e.keyCode === t.props.keyCode && t.props.handler(e);
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              document.addEventListener(
                this.props.eventType || 'keydown',
                this._handleKeyDown,
                !1,
              );
            }),
            (t.prototype.componentWillUnmount = function () {
              document.removeEventListener(
                this.props.eventType || 'keydown',
                this._handleKeyDown,
                !1,
              );
            }),
            (t.prototype.render = function () {
              return null;
            }),
            t
          );
        })(o.PureComponent);
    },
  },
]);
