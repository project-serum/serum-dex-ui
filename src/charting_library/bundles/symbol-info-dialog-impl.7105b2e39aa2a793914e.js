(window.webpackJsonp = window.webpackJsonp || []).push([
  ['symbol-info-dialog-impl'],
  {
    '+EG+': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      }),
        n.d(t, 'b', function () {
          return u;
        });
      var r = n('mrSG'),
        o = n('q1tI'),
        i = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.shouldComponentUpdate = function () {
              return !1;
            }),
            (t.prototype.render = function () {
              return o.createElement('div', {
                style: { position: 'fixed', zIndex: 150, left: 0, top: 0 },
                ref: this.props.reference,
              });
            }),
            t
          );
        })(o.Component),
        u = o.createContext(null);
    },
    '1Z/g': function (e, t, n) {
      'use strict';
      (function (e, r) {
        var o,
          i = n('PT1i').linking,
          u = n('+6ja').availableTimezones,
          c = n('kcTO').PriceFormatter,
          a = n('e3/o'),
          s = n('q1tI'),
          l = n('i8i4'),
          p = n('ZzxF').SymbolInfoDialog,
          d = n('5mo2').SessionSpec,
          m = n('jCNj'),
          f = n('kcTO').numberToStringWithLeadingZero,
          v = n('Ialn'),
          y = n('IWXC').getQuoteSessionInstance,
          h = n('n5al').createSeriesFormatter,
          w = n('w3Pp').marketType,
          b = [
            m.MONDAY,
            m.TUESDAY,
            m.WEDNESDAY,
            m.THURSDAY,
            m.FRIDAY,
            m.SATURDAY,
            m.SUNDAY,
          ],
          g = b.reduce(function (t, n) {
            return (t[n < 7 ? n + 1 : 1] = e.weekdaysMin(n)), t;
          }, {});
        function _(e) {
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
        function E(e) {
          return e.minmove2 > 0 && !e.fractional && e.pricescale;
        }
        function S(e) {
          if (E(e))
            return new c(e.pricescale / e.minmove2).format(
              e.minmove2 / e.pricescale,
            );
        }
        function N(e) {
          return void 0 === e.minmov || void 0 === e.pricescale
            ? null
            : h(e).format(e.minmov / e.pricescale);
        }
        function D(e) {
          var t = e.typespecs && e.typespecs.includes('cfd');
          return w(e.type, t);
        }
        function O(e) {
          return e.original_currency_code || e.currency_code || null;
        }
        function C(e) {
          return e && e.type && 'futures' === e.type && e.front_contract;
        }
        function x(e) {
          o ||
            ((o = document.createElement('div')), document.body.appendChild(o)),
            l.render(s.createElement(p, e), o);
        }
        function k(e) {
          for (var t = u, n = 0; n < t.length; n++)
            if (t[n].id === e) return t[n].title;
          return e;
        }
        function T(e) {
          var t,
            n = new d('Etc/UTC', e);
          return ((t = n.entries()),
          b.reduce(function (e, n) {
            var r = t.filter(function (e) {
                return e.dayOfWeek() === n;
              }),
              o = g[n] + ' ';
            if (0 === r.length) return e.push(o + window.t('Closed')), e;
            var i = r.reduce(function (e, t) {
              var n = t.sessionStartDayOfWeek(),
                r = (function (e, t) {
                  for (var n = e + t; n > m.SATURDAY; ) n -= m.SATURDAY;
                  return n;
                })(n, t.sessionStartDaysOffset()),
                o = n !== t.dayOfWeek(),
                i = o && r !== t.dayOfWeek(),
                u = o ? g[n] : '',
                c = i ? g[r] : '',
                a = A(t.start()) + u + '-' + A(t.start() + t.length()) + c;
              return e.push(a), e;
            }, []);
            return e.push(o + i.join(', ')), e;
          }, [])).join('<br>');
        }
        function I(e) {
          return e || '-';
        }
        function j(e, t) {
          for (var n = 0, r = 0; r < t.length; r++)
            if (void 0 === t[r].getter) {
              var o = t[r].propName,
                i = t[r].altPropName,
                u = o in e ? o : void 0 !== i && i in e ? i : void 0;
              if (void 0 !== u) {
                var c = e[u];
                (t[r].value = (t[r].formatter || I)(c)), n++;
              }
            } else {
              var a = t[r].getter(e);
              null !== a && (t[r].value = a), n++;
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
        function A(e) {
          for (; e > m.minutesPerDay; ) e -= m.minutesPerDay;
          var t = e % 60,
            n = f((e - t) / 60, 2) + ':' + f(t, 2);
          return v.isRtl() ? v.startWithLTR(n) : n;
        }
        t.showSymbolInfoDialog = function (e, t) {
          if (
            (x({ isOpened: !1 }),
            null == e && (e = i.symbol.value()),
            null != e)
          ) {
            e += '';
            var n = t && t.symbolInfo,
              u = [
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
                { title: window.t('Exchange'), propName: 'exchange' },
                {
                  title: window.t('Listed Exchange'),
                  propName: 'listed_exchange',
                },
                {
                  title: window.t('Currency'),
                  getter: O,
                  formatter: function (e) {
                    return e || '';
                  },
                  defValue: '',
                },
                {
                  title: window.t('Pip Size'),
                  propName: 'pip_size',
                  getter: S,
                  visibility: E,
                },
                {
                  title: window.t('Tick Size'),
                  propName: 'tick_size',
                  getter: N,
                },
                { title: window.t('Sector'), propName: 'sector' },
                { title: window.t('Industry'), propName: 'industry' },
                {
                  title: window.t('Timezone'),
                  propName: 'timezone',
                  formatter: k,
                  visibility: _,
                },
                {
                  title: window.t('Session'),
                  propName: 'session_display',
                  altPropName: 'session',
                  formatter: T,
                  visibility: _,
                  setHtml: !0,
                },
              ],
              c = 0;
            if ((n && (c = j(n, u)), c < u.length)) {
              var s = 'symbolinfodialog.' + a.guid(),
                p = y('full');
              p.subscribe(s, e, function (t, n) {
                j(n.values, u), p.unsubscribe(s, e), x(d);
              });
            }
            var d = {
              isOpened: !0,
              onClose: function () {
                x({ isOpened: !1 }), l.unmountComponentAtNode(o), (o = null);
              },
              fields: u,
            };
            x(d);
          }
        };
      }.call(this, n('ldgD'), n('Kxc7')));
    },
    '8Rai': function (e, t, n) {
      'use strict';
      var r = n('q1tI'),
        o = function (e, t) {
          var n = void 0 === t ? {} : t,
            r = n.bubbles,
            o = void 0 !== r && r,
            i = n.cancelable,
            u = void 0 !== i && i,
            c = n.detail,
            a = void 0 === c ? null : c;
          try {
            return new window.CustomEvent(e, {
              bubbles: o,
              cancelable: u,
              detail: a,
            });
          } catch (l) {
            var s = document.createEvent('CustomEvent');
            return s.initCustomEvent(e, o, u, a), s;
          }
        },
        i = n('R5JZ');
      function u(e) {
        var t = e.click,
          n = e.mouseDown,
          u = e.touchEnd,
          c = e.touchStart,
          a = e.handler,
          s = e.reference,
          l = e.ownerDocument,
          p = void 0 === l ? document : l,
          d = Object(r.useRef)(null),
          m = Object(r.useRef)(new o('timestamp').timeStamp);
        return (
          Object(r.useLayoutEffect)(
            function () {
              var e = { click: t, mouseDown: n, touchEnd: u, touchStart: c },
                r = s ? s.current : d.current;
              return Object(i.a)(m.current, r, a, p, e);
            },
            [t, n, u, c, a],
          ),
          s || d
        );
      }
      n.d(t, 'a', function () {
        return u;
      });
    },
    AVTG: function (e, t, n) {
      'use strict';
      var r = n('q1tI'),
        o = n('TSYQ'),
        i = n('kgsH'),
        u = n('uo4K'),
        c = n('Iivm');
      function a(e) {
        var t = e.hideIcon
          ? null
          : r.createElement(c.Icon, {
              className: i.close,
              icon: u,
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
      function l(e) {
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
        var u = o(d.message, e.className, (((t = {})[d.error] = e.isError), t));
        return r.createElement(
          'div',
          { className: u, key: '0' },
          r.createElement('span', { ref: i }, n),
        );
      }
      n.d(t, 'b', function () {
        return a;
      }),
        n.d(t, 'a', function () {
          return l;
        }),
        n.d(t, 'c', function () {
          return m;
        });
    },
    AiMB: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      }),
        n.d(t, 'b', function () {
          return l;
        });
      var r = n('mrSG'),
        o = n('q1tI'),
        i = n('i8i4'),
        u = n('e3/o'),
        c = n('jAh7'),
        a = n('+EG+'),
        s = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t._uuid = Object(u.guid)()), t;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.componentWillUnmount = function () {
              this._manager().removeWindow(this._uuid);
            }),
            (t.prototype.render = function () {
              var e = this._manager().ensureWindow(
                this._uuid,
                this.props.layerOptions,
              );
              return (
                (e.style.top = this.props.top || ''),
                (e.style.bottom = this.props.bottom || ''),
                (e.style.left = this.props.left || ''),
                (e.style.right = this.props.right || ''),
                (e.style.pointerEvents = this.props.pointerEvents || ''),
                i.createPortal(
                  o.createElement(
                    l.Provider,
                    { value: this },
                    this.props.children,
                  ),
                  e,
                )
              );
            }),
            (t.prototype.moveToTop = function () {
              this._manager().moveToTop(this._uuid);
            }),
            (t.prototype._manager = function () {
              return null === this.context
                ? Object(c.getRootOverlapManager)()
                : this.context;
            }),
            (t.contextType = a.b),
            t
          );
        })(o.PureComponent),
        l = o.createContext(null);
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
        u = n('AVTG'),
        c = n('TSYQ'),
        a = n('ycI/'),
        s = n('FQhm'),
        l = n('ZjKI'),
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
                l.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this._close,
                null,
              );
            }),
            (t.prototype.componentWillUnmount = function () {
              s.unsubscribe(
                l.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
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
                  u.b,
                  { onClose: this.props.onClose },
                  window.t('Symbol Info'),
                ),
                o.createElement(
                  u.a,
                  null,
                  o.createElement(a.a, {
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
                        { className: c(p.column, p.columnTitle) },
                        o.createElement(
                          'span',
                          { className: p.title },
                          e.title,
                        ),
                      ),
                      o.createElement(
                        'div',
                        { className: c(p.column, p.columnValue) },
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
      e.exports = {
        header: 'header-dpl-vtN_',
        close: 'close-3kPn4OTV',
      };
    },
    uo4K: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="currentColor" d="M5.18 6.6L1.3 2.7.6 2 2 .59l.7.7 3.9 3.9 3.89-3.9.7-.7L12.61 2l-.71.7L8 6.6l3.89 3.89.7.7-1.4 1.42-.71-.71L6.58 8 2.72 11.9l-.71.7-1.41-1.4.7-.71 3.9-3.9z"/></svg>';
    },
    w3Pp: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'marketType', function () {
          return u;
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
      function u(e, t) {
        var n = e + '_' + t,
          u = r.get(n);
        if (void 0 !== u) return u;
        var c = t
          ? window.t('{market_type} cfd', o).format({ market_type: e })
          : i[e] || e;
        return r.set(n, c), c;
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
