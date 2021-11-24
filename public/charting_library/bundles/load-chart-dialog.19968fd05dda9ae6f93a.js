(window.webpackJsonp = window.webpackJsonp || []).push([
  ['load-chart-dialog'],
  {
    '/KDZ': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var r = n('mrSG'),
        o = n('q1tI'),
        i = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._handleChange = function () {
                n.forceUpdate();
              }),
              (n.state = { query: window.matchMedia(n.props.rule) }),
              n
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              this._subscribe(this.state.query);
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              this.state.query !== t.query &&
                (this._unsubscribe(t.query), this._subscribe(this.state.query));
            }),
            (t.prototype.componentWillUnmount = function () {
              this._unsubscribe(this.state.query);
            }),
            (t.prototype.render = function () {
              return this.props.children(this.state.query.matches);
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.rule !== t.query.media
                ? { query: window.matchMedia(e.rule) }
                : null;
            }),
            (t.prototype._subscribe = function (e) {
              e.addListener(this._handleChange);
            }),
            (t.prototype._unsubscribe = function (e) {
              e.removeListener(this._handleChange);
            }),
            t
          );
        })(o.PureComponent);
    },
    '02pg': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var r = n('q1tI'),
        o = n('TSYQ'),
        i = n('XiJV');
      function a(e) {
        return r.createElement('div', {
          className: o(i.separator, e.className),
        });
      }
    },
    '0lTl': function (e, t, n) {
      e.exports = {
        wrap: 'wrap-ghxWUnOu',
        'wrap--horizontal': 'wrap--horizontal-1sVOJLqZ',
        bar: 'bar-2ZGFe1r-',
        barInner: 'barInner-2f6z58Ci',
        'barInner--horizontal': 'barInner--horizontal-35zIxXob',
        'bar--horizontal': 'bar--horizontal-2ofOPj8L',
      };
    },
    AMW5: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('q1tI'),
        o = n.n(r),
        i = n('i8i4'),
        a = n('mrSG'),
        c = n('Eyy1'),
        l = n('YFKU'),
        s = n('Vdly'),
        u = n('qFKp'),
        d = n('g89m'),
        m = n('TSYQ'),
        f = n.n(m),
        v = n('9dlw'),
        h = n('Iksw'),
        p = n('Iivm'),
        b = n('e5nO'),
        g = n('UjII'),
        w = n('HjiN');
      function C(e) {
        var t = e.sortDirection,
          n = e.children,
          i = Object(a.__rest)(e, ['sortDirection', 'children']),
          c = Object(r.useRef)(null),
          l = Object(r.useState)(!1),
          s = l[0],
          u = l[1];
        return o.a.createElement(
          'div',
          Object(a.__assign)({}, i, {
            ref: c,
            className: m(
              w.sortButton,
              'apply-common-tooltip',
              'common-tooltip-vertical',
            ),
            onClick: function () {
              u(!s);
            },
          }),
          o.a.createElement(p.Icon, {
            className: w.icon,
            icon: 0 === t ? b : g,
          }),
          o.a.createElement(
            v.a,
            {
              doNotCloseOn: c.current,
              isOpened: s,
              onClose: function () {
                u(!1);
              },
              position: Object(h.c)(c.current, {
                verticalMargin: -35,
                verticalAttachEdge: 0,
              }),
            },
            n,
          ),
        );
      }
      var O = n('N5tr'),
        E = n('H2qI');
      function j(e) {
        var t = e.label,
          n = e.listSortField,
          o = e.itemSortField,
          i = e.listSortDirection,
          c = e.itemSortDirection,
          l = e.onClick,
          s = e.className,
          u = Object(a.__rest)(e, [
            'label',
            'listSortField',
            'itemSortField',
            'listSortDirection',
            'itemSortDirection',
            'onClick',
            'className',
          ]),
          d = o === n && c === i;
        return r.createElement(
          O.b,
          Object(a.__assign)({}, u, {
            className: m(E.container, s),
            label: r.createElement(
              'div',
              { className: E.labelWrap },
              r.createElement(p.Icon, {
                className: E.icon,
                icon: 0 === c ? b : g,
              }),
              r.createElement('span', { className: E.text }, t),
            ),
            isActive: d,
            onClick: function () {
              l(o, c);
            },
            'data-active': d.toString(),
            'data-sort-field': o,
            'data-sort-direction': 0 === c ? 'asc' : 'desc',
          }),
        );
      }
      var N = n('QHWU'),
        _ = n('IePd');
      function S(e) {
        var t = e.children,
          n = e.className;
        return o.a.createElement('div', { className: f()(_.container, n) }, t);
      }
      function y(e) {
        var t = e.title;
        return o.a.createElement('div', { className: _.title }, t);
      }
      var D = n('Hr11'),
        F = n('Ialn'),
        k = n('0lTl');
      function x(e) {
        var t,
          n,
          i = e.size,
          a = e.scrollSize,
          l = e.clientSize,
          s = e.scrollProgress,
          u = e.onScrollProgressChange,
          d = e.horizontal,
          m = e.theme,
          v = void 0 === m ? k : m,
          h = e.onDragStart,
          p = e.onDragEnd,
          b = e.minBarSize,
          g = void 0 === b ? 40 : b,
          w = Object(r.useRef)(null),
          C = Object(r.useRef)(null),
          O = Object(r.useState)(!1),
          E = O[0],
          j = O[1],
          N = Object(r.useRef)(0);
        Object(r.useEffect)(
          function () {
            if (E) {
              h && h();
              var e = Object(c.ensureNotNull)(w.current).ownerDocument;
              e &&
                (e.addEventListener('mousemove', I),
                e.addEventListener('mouseup', L));
            } else p && p();
            return function () {
              var e = Object(c.ensureNotNull)(w.current).ownerDocument;
              e &&
                (e.removeEventListener('mousemove', I),
                e.removeEventListener('mouseup', L));
            };
          },
          [E],
        );
        var _ = i / a || 0,
          S = l * _ || 0,
          y = Math.max(S, g),
          x = (i - y) / (i - S),
          T = (function (e) {
            if (Object(F.isRtl)() && d) return e - a + l;
            return e;
          })(Object(D.clamp)(s, 0, a - i));
        return o.a.createElement(
          'div',
          {
            ref: w,
            className: f()(v.wrap, d && v['wrap--horizontal']),
            style: ((t = {}), (t[d ? 'width' : 'height'] = i), t),
            onMouseDown: function (e) {
              if (e.isDefaultPrevented()) return;
              e.preventDefault();
              var t = Object(c.ensureNotNull)(
                C.current,
              ).getBoundingClientRect();
              N.current = (d ? t.width : t.height) / 2;
              var n = a - i,
                r =
                  M(e.nativeEvent, Object(c.ensureNotNull)(w.current)) -
                  N.current;
              r < 0
                ? ((r = 0),
                  (N.current = M(
                    e.nativeEvent,
                    Object(c.ensureNotNull)(w.current),
                  )))
                : r > n * _ * x &&
                  ((r = n * _ * x),
                  (N.current =
                    M(e.nativeEvent, Object(c.ensureNotNull)(w.current)) - r));
              u(r / _ / x), j(!0);
            },
          },
          o.a.createElement(
            'div',
            {
              ref: C,
              className: f()(v.bar, d && v['bar--horizontal']),
              style:
                ((n = {}),
                (n[d ? 'minWidth' : 'minHeight'] = g),
                (n[d ? 'width' : 'height'] = y),
                (n.transform =
                  'translate' +
                  (d ? 'X' : 'Y') +
                  '(' +
                  (T * _ * x || 0) +
                  'px)'),
                n),
              onMouseDown: function (e) {
                e.preventDefault(),
                  (N.current = M(
                    e.nativeEvent,
                    Object(c.ensureNotNull)(C.current),
                  )),
                  j(!0);
              },
            },
            o.a.createElement('div', {
              className: f()(v.barInner, d && v['barInner--horizontal']),
            }),
          ),
        );
        function I(e) {
          var t = M(e, Object(c.ensureNotNull)(w.current)) - N.current;
          u(t / _ / x);
        }
        function L(e) {
          j(!1);
        }
        function M(e, t) {
          var n = t.getBoundingClientRect();
          return d ? e.clientX - n.left : e.clientY - n.top;
        }
      }
      var T = n('8d0Q'),
        I = n('ya27');
      function L(e) {
        var t = e.reference,
          n = e.className,
          i = e.containerHeight,
          c = void 0 === i ? 0 : i,
          l = e.containerWidth,
          s = void 0 === l ? 0 : l,
          u = e.contentHeight,
          d = void 0 === u ? 0 : u,
          f = e.contentWidth,
          v = void 0 === f ? 0 : f,
          h = e.scrollPosTop,
          p = void 0 === h ? 0 : h,
          b = e.scrollPosLeft,
          g = void 0 === b ? 0 : b,
          w = e.onVerticalChange,
          C = e.onHorizontalChange,
          O = e.visible,
          E = Object(T.b)(),
          j = E[0],
          N = E[1],
          _ = Object(r.useState)(!1),
          S = _[0],
          y = _[1],
          D = c < d,
          F = s < v,
          k = D && F ? 8 : 0;
        return o.a.createElement(
          'div',
          Object(a.__assign)({}, N, {
            ref: t,
            className: m(n, I.scrollWrap),
            style: { visibility: O || j || S ? 'visible' : 'hidden' },
          }),
          D &&
            o.a.createElement(x, {
              size: c - k,
              scrollSize: d - k,
              clientSize: c - k,
              scrollProgress: p,
              onScrollProgressChange: function (e) {
                w && w(e);
              },
              onDragStart: L,
              onDragEnd: M,
            }),
          F &&
            o.a.createElement(x, {
              size: s - k,
              scrollSize: v - k,
              clientSize: s - k,
              scrollProgress: g,
              onScrollProgressChange: function (e) {
                C && C(e);
              },
              onDragStart: L,
              onDragEnd: M,
              horizontal: !0,
            }),
        );
        function L() {
          y(!0);
        }
        function M() {
          y(!1);
        }
      }
      function M(e) {
        var t = e.items,
          n = e.countPerRender,
          i = void 0 === n ? 25 : n,
          a = e.initCount,
          c = void 0 === a ? 25 : a,
          l = e.onUpdate,
          s = Object(r.useState)(c),
          u = s[0],
          d = s[1],
          m = Object(r.useRef)(l);
        m.current = l;
        var f = u;
        return (
          Object(r.useEffect)(
            function () {
              var e = [
                  window.requestIdleCallback ||
                    function (e) {
                      var t = Date.now();
                      return setTimeout(function () {
                        return e({
                          didTimeout: !1,
                          timeRemaining: function () {
                            return Math.max(0, 50 - (Date.now() - t));
                          },
                        });
                      }, 1);
                    },
                  window.cancelIdleCallback ||
                    function (e) {
                      return clearTimeout(e);
                    },
                ],
                n = e[0],
                r = e[1],
                o = function (e) {
                  for (
                    u < t.length &&
                    ((f += i),
                    d(function (e) {
                      return e + i;
                    }));
                    u < t.length && e.timeRemaining() > 0;

                  )
                    (f += i),
                      d(function (e) {
                        return e + i;
                      });
                  (a = t.length - f > 0 ? n(o, { timeout: 500 }) : null),
                    m.current && m.current();
                },
                a = n(o, { timeout: 500 });
              return function () {
                null !== a && r(a);
              };
            },
            [t.length],
          ),
          o.a.createElement(o.a.Fragment, null, t.slice(0, u))
        );
      }
      var z = n('tmL0'),
        A = { onMouseOver: function () {}, onMouseOut: function () {} };
      var R = n('ntBy');
      function B(e) {
        var t = e.className,
          n = e.listKey,
          i = e.data,
          l = e.renderItem,
          s = e.onScroll,
          d = e.onTouchStart,
          m = e.reference,
          v = (function () {
            var e = Object(r.useRef)(null),
              t = Object(r.useRef)(null),
              n = Object(T.b)(),
              o = n[0],
              i = n[1],
              l = Object(r.useState)({
                reference: e,
                containerHeight: 0,
                containerWidth: 0,
                contentHeight: 0,
                contentWidth: 0,
                scrollPosTop: 0,
                scrollPosLeft: 0,
                onVerticalChange: function (e) {
                  d(function (t) {
                    return Object(a.__assign)(Object(a.__assign)({}, t), {
                      scrollPosTop: e,
                    });
                  }),
                    (Object(c.ensureNotNull)(t.current).scrollTop = e);
                },
                onHorizontalChange: function (e) {
                  d(function (t) {
                    return Object(a.__assign)(Object(a.__assign)({}, t), {
                      scrollPosLeft: e,
                    });
                  }),
                    (Object(c.ensureNotNull)(t.current).scrollLeft = e);
                },
                visible: o,
              }),
              s = l[0],
              d = l[1],
              m = Object(r.useCallback)(function () {
                if (t.current) {
                  var n = t.current,
                    r = n.clientHeight,
                    o = n.scrollHeight,
                    i = n.scrollTop,
                    c = n.clientWidth,
                    l = n.scrollWidth,
                    s = n.scrollLeft,
                    u = e.current ? e.current.offsetTop : 0;
                  d(function (e) {
                    return Object(a.__assign)(Object(a.__assign)({}, e), {
                      containerHeight: r - u,
                      contentHeight: o - u,
                      scrollPosTop: i,
                      containerWidth: c,
                      contentWidth: l,
                      scrollPosLeft: s,
                    });
                  });
                }
              }, []);
            function f() {
              d(function (e) {
                return Object(a.__assign)(Object(a.__assign)({}, e), {
                  scrollPosTop: Object(c.ensureNotNull)(t.current).scrollTop,
                  scrollPosLeft: Object(c.ensureNotNull)(t.current).scrollLeft,
                });
              });
            }
            return (
              Object(r.useEffect)(
                function () {
                  o && m(),
                    d(function (e) {
                      return Object(a.__assign)(Object(a.__assign)({}, e), {
                        visible: o,
                      });
                    });
                },
                [o],
              ),
              Object(r.useEffect)(
                function () {
                  return (
                    t.current && t.current.addEventListener('scroll', f),
                    function () {
                      t.current && t.current.removeEventListener('scroll', f);
                    }
                  );
                },
                [t],
              ),
              [s, u.CheckMobile.any() ? A : i, t, m]
            );
          })(),
          h = v[0],
          p = v[1],
          b = v[2],
          g = v[3],
          w = m || b,
          C = Object(r.useMemo)(
            function () {
              return i.map(l);
            },
            [i, l],
          );
        return o.a.createElement(
          z.a,
          Object(a.__assign)({}, p, {
            reference: w,
            className: f()(R.scrollContainer, t),
            onScroll: s,
            onTouchStart: d,
          }),
          o.a.createElement(
            'div',
            { className: R.overlapScrollWrap },
            o.a.createElement(L, Object(a.__assign)({}, h)),
          ),
          o.a.createElement(M, {
            key: n,
            initCount: 10,
            items: C,
            onUpdate: g,
          }),
        );
      }
      var P = n('ldgD'),
        W = n.n(P),
        q = n('BxxN'),
        H = n('dTSQ'),
        U = n('pr86'),
        K = n('i/MG'),
        Q = n('xp8i');
      function Y(e) {
        var t = e.searchString,
          n = e.text,
          i = e.isActive;
        if (!t) return o.a.createElement(o.a.Fragment, null, n);
        var a = Object(r.useMemo)(
          function () {
            return n.split(
              new RegExp('(' + Object(H.regExpEscape)(t) + ')', 'i'),
            );
          },
          [t],
        );
        return o.a.createElement(
          o.a.Fragment,
          null,
          a.map(function (e, t) {
            return t % 2
              ? o.a.createElement(
                  'span',
                  { key: t, className: f()(Q.highlight, i && Q.active) },
                  e,
                )
              : o.a.createElement(o.a.Fragment, { key: t }, e);
          }),
        );
      }
      function X(e) {
        var t = e.url,
          n = e.title,
          r = e.renderTitle,
          i = e.subtitle,
          c = e.removeBtnLabel,
          l = e.onClick,
          s = e.onClickFavorite,
          d = e.onClickRemove,
          m = e.isActive,
          v = e.isFavorite,
          h = e.isMobile,
          p = void 0 !== h && h,
          b = e.showFavorite,
          g = void 0 === b || b,
          w = Object(a.__rest)(e, [
            'url',
            'title',
            'renderTitle',
            'subtitle',
            'removeBtnLabel',
            'onClick',
            'onClickFavorite',
            'onClickRemove',
            'isActive',
            'isFavorite',
            'isMobile',
            'showFavorite',
          ]);
        return o.a.createElement(
          'a',
          Object(a.__assign)({}, w, {
            className: f()(Q.itemRow, m && Q.active, p && Q.mobile),
            onClick: Z.bind(null, l),
            href: t,
            'data-role': 'list-item',
            'data-active': m,
          }),
          g &&
            s &&
            o.a.createElement(U.a, {
              className: f()(
                Q.favoriteButton,
                v && Q.favorite,
                u.CheckMobile.any() && Q.mobile,
              ),
              isActive: m,
              isFilled: v,
              onClick: Z.bind(null, s),
              'data-name': 'list-item-favorite-button',
              'data-favorite': v,
            }),
          o.a.createElement(
            'div',
            { className: f()(Q.itemInfo, !g && Q.itemInfoWithPadding) },
            o.a.createElement(
              'div',
              {
                className: f()(Q.title, m && Q.active, p && Q.mobile),
                'data-name': 'list-item-title',
              },
              r || n,
            ),
            o.a.createElement(
              'div',
              { className: f()(Q.details, m && Q.active, p && Q.mobile) },
              i,
            ),
          ),
          o.a.createElement(K.a, {
            className: Q.removeButton,
            isActive: m,
            onClick: Z.bind(null, d),
            'data-name': 'list-item-remove-button',
            title: c,
          }),
        );
      }
      function Z(e, t) {
        t.defaultPrevented || (t.preventDefault(), e(t));
      }
      var J = n('pPtI'),
        G = n('+EG+'),
        V = n('oNDq'),
        $ = n('LIFs');
      var ee = Object(l.t)("Do you really want to delete Chart Layout '{0}' ?");
      function te(e) {
        var t;
        try {
          t = Object(J.getTranslatedResolution)(e);
        } catch (n) {
          t = e;
        }
        return t;
      }
      function ne(e) {
        var t = e.chart,
          n = e.chartWidgetCollection,
          i = (e.trackEvent, e.localFavorites),
          c = (e.onClose, e.searchString),
          l = e.onClickRemove,
          s = e.onRemoveCanceled,
          u = Object(r.useState)(function () {
            return t.active();
          }),
          d = u[0],
          m = u[1],
          f = Object(q.a)({ chartId: t.url }),
          v = Object(r.useContext)(G.b);
        return (
          Object(r.useEffect)(function () {
            return (
              n && n.metaInfo.id.subscribe(p),
              function () {
                n && n.metaInfo.id.unsubscribe(p);
              }
            );
          }, []),
          o.a.createElement(X, {
            url: f,
            title: o.a.createElement(Y, {
              searchString: c,
              isActive: d,
              text: t.title,
            }),
            subtitle: o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(Y, {
                searchString: c,
                isActive: d,
                text: t.symbol,
              }),
              ', ',
              o.a.createElement(Y, {
                searchString: c,
                isActive: d,
                text: te(t.interval),
              }),
              ' ',
              '(',
              W.a.unix(t.modified).format('DD.MM.YYYY HH:mm'),
              ')',
            ),
            onClick: function (e) {
              0;
              t.openAction(), !1;
            },
            onClickFavorite: function () {
              0;
              var e = Object(a.__assign)({}, i);
              e[t.id] ? delete e[t.id] : (e[t.id] = !0);
              t.favoriteAction(e);
            },
            onClickRemove: function () {
              !(function (e, t, n, r) {
                Object(V.createConfirmDialog)({
                  content: Object($.b)(e),
                  manager: r || void 0,
                }).then(function (e) {
                  e.on('action:yes', function () {
                    t(), e.close();
                  }),
                    e.on('afterClose', function () {
                      return n();
                    }),
                    e.open();
                });
              })(ee.format(t.title), h, s, v);
            },
            isFavorite: Boolean(i[t.id]),
            isActive: d,
            'data-name': 'load-chart-dialog-item',
          })
        );
        function h() {
          t.deleteAction().then(function () {
            return l(t.id);
          });
        }
        function p(e) {
          m(t.id === e);
        }
      }
      var re = n('tWVy'),
        oe = n('YCUu'),
        ie = { sortField: 'modified', sortDirection: 1 };
      function ae(e) {
        var t = e.charts,
          n = e.onClose,
          i = e.favoriteChartsService,
          l = e.chartWidgetCollection,
          m = Object(r.useState)(''),
          f = m[0],
          v = m[1],
          h = Object(r.useState)(f),
          p = h[0],
          b = h[1],
          g = Object(r.useState)([]),
          w = g[0],
          O = g[1],
          E = Object(r.useRef)(null),
          _ = Object(r.useState)(function () {
            return i.get();
          }),
          D = _[0],
          F = _[1],
          k = Object(r.useState)(function () {
            return s.getJSON('loadChartDialog.viewState', ie);
          }),
          x = k[0],
          T = k[1],
          I = Object(r.useRef)(null);
        Object(r.useEffect)(function () {
          u.CheckMobile.any() || Object(c.ensureNotNull)(I.current).focus();
        }, []);
        var L = null;
        Object(r.useEffect)(
          function () {
            L && L();
          },
          [f, w],
        );
        var M = Object(r.useRef)();
        Object(r.useEffect)(
          function () {
            return (
              (M.current = setTimeout(function () {
                v(p);
              }, 300)),
              function () {
                clearTimeout(M.current);
              }
            );
          },
          [p],
        ),
          Object(r.useEffect)(function () {
            return (
              i.getOnChange().subscribe(null, q),
              function () {
                i.getOnChange().unsubscribe(null, q);
              }
            );
          }, []);
        var z = Object(r.useMemo)(
          function () {
            return Object(a.__spreadArrays)(t)
              .sort(
                ((e = x.sortDirection),
                function (t, n) {
                  if (D[t.id] && !D[n.id]) return -1;
                  if (!D[t.id] && D[n.id]) return 1;
                  var r = 0 === e ? 1 : -1;
                  return 'modified' === x.sortField
                    ? r * (t.modified - n.modified)
                    : r * t.title.localeCompare(n.title);
                }),
              )
              .filter(function (e) {
                return (
                  !w.includes(e.id) &&
                  (U(e.title) || U(e.symbol) || U(te(e.interval)))
                );
              });
            var e;
          },
          [f, x, w, D],
        );
        return o.a.createElement(d.a, {
          ref: E,
          onClose: n,
          onClickOutside: n,
          isOpened: !0,
          title: window.t('Load layout'),
          dataName: 'load-layout-dialog',
          render: function (e) {
            var t = e.requestResize;
            return (
              (L = t),
              o.a.createElement(
                o.a.Fragment,
                null,
                o.a.createElement(N.a, {
                  reference: I,
                  onChange: R,
                  placeholder: window.t('Search'),
                }),
                o.a.createElement(
                  S,
                  null,
                  o.a.createElement(y, { title: window.t('Layout name') }),
                  o.a.createElement(
                    C,
                    {
                      sortDirection: x.sortDirection,
                      title: window.t('Sort by layout name, date changed'),
                      'data-name': 'load-chart-dialog-sort-button',
                    },
                    o.a.createElement(j, {
                      label: window.t('Layout name (A to Z)'),
                      listSortField: x.sortField,
                      itemSortField: 'title',
                      listSortDirection: x.sortDirection,
                      itemSortDirection: 0,
                      onClick: K,
                      'data-name': 'load-chart-dialog-sort-menu-item',
                    }),
                    o.a.createElement(j, {
                      label: window.t('Layout name (Z to A)'),
                      listSortField: x.sortField,
                      itemSortField: 'title',
                      listSortDirection: x.sortDirection,
                      itemSortDirection: 1,
                      onClick: K,
                      'data-name': 'load-chart-dialog-sort-menu-item',
                    }),
                    o.a.createElement(j, {
                      label: window.t('Date modified (oldest first)'),
                      listSortField: x.sortField,
                      itemSortField: 'modified',
                      listSortDirection: x.sortDirection,
                      itemSortDirection: 0,
                      onClick: K,
                      'data-name': 'load-chart-dialog-sort-menu-item',
                    }),
                    o.a.createElement(j, {
                      label: window.t('Date modified (newest first)'),
                      listSortField: x.sortField,
                      itemSortField: 'modified',
                      listSortDirection: x.sortDirection,
                      itemSortDirection: 1,
                      onClick: K,
                      'data-name': 'load-chart-dialog-sort-menu-item',
                    }),
                  ),
                ),
                o.a.createElement(B, {
                  listKey: [f, x.sortField, x.sortDirection].join('_'),
                  className: oe.contentList,
                  data: z,
                  onScroll: A,
                  renderItem: function (e) {
                    return o.a.createElement(ne, {
                      key: (D[e.id] ? 'f_' : '') + e.id,
                      chart: e,
                      onClose: n,
                      chartWidgetCollection: l,
                      trackEvent: P,
                      onRemoveCanceled: H,
                      localFavorites: D,
                      searchString: f,
                      onClickRemove: W,
                    });
                  },
                }),
              )
            );
          },
        });
        function A() {
          re.a.fire();
        }
        function R(e) {
          var t = e.currentTarget.value;
          b(t);
        }
        function P(e) {
          0;
        }
        function W(e) {
          O(Object(a.__spreadArrays)([e], w));
        }
        function q(e) {
          F(e);
        }
        function H() {
          Object(c.ensureNotNull)(E.current).focus();
        }
        function U(e) {
          return e.toLowerCase().includes(f.toLowerCase());
        }
        function K(e, t) {
          var n = { sortField: e, sortDirection: t };
          T(n),
            s.setValue('loadChartDialog.viewState', JSON.stringify(n), {
              forceFlush: !0,
            }),
            P();
        }
      }
      function ce(e, t, n) {
        var o = document.createElement('div');
        i.render(
          r.createElement(ae, {
            charts: e,
            favoriteChartsService: t,
            chartWidgetCollection: n,
            onClose: function () {
              i.unmountComponentAtNode(o);
            },
          }),
          o,
        );
      }
      n.d(t, 'showLoadChartDialog', function () {
        return ce;
      });
    },
    ASyk: function (e, t, n) {
      e.exports = {
        'tablet-normal-breakpoint': 'screen and (max-width: 768px)',
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        'tablet-small-breakpoint': 'screen and (max-width: 419px)',
      };
    },
    H2qI: function (e, t, n) {
      e.exports = {
        container: 'container-3Qk84Vpk',
        labelWrap: 'labelWrap-1kffAsJL',
        icon: 'icon-3s9Fy0WO',
        text: 'text-1ie73mtL',
      };
    },
    HjiN: function (e, t, n) {
      e.exports = { sortButton: 'sortButton-16hjqEoU', icon: 'icon-2nbSQjFT' };
    },
    IePd: function (e, t, n) {
      e.exports = { container: 'container-1oGzHiUj', title: 'title-2FsC4R5h' };
    },
    Iksw: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      }),
        n.d(t, 'b', function () {
          return i;
        }),
        n.d(t, 'c', function () {
          return s;
        });
      var r,
        o,
        i,
        a,
        c = n('Eyy1');
      !(function (e) {
        (e[(e.Top = 0)] = 'Top'), (e[(e.Bottom = 1)] = 'Bottom');
      })(r || (r = {})),
        (function (e) {
          (e[(e.Left = 0)] = 'Left'), (e[(e.Right = 1)] = 'Right');
        })(o || (o = {})),
        (function (e) {
          (e[(e.FromTopToBottom = 0)] = 'FromTopToBottom'),
            (e[(e.FromBottomToTop = 1)] = 'FromBottomToTop');
        })(i || (i = {})),
        (function (e) {
          (e[(e.FromLeftToRight = 0)] = 'FromLeftToRight'),
            (e[(e.FromRightToLeft = 1)] = 'FromRightToLeft');
        })(a || (a = {}));
      var l = {
        verticalAttachEdge: r.Bottom,
        horizontalAttachEdge: o.Left,
        verticalDropDirection: i.FromTopToBottom,
        horizontalDropDirection: a.FromLeftToRight,
        verticalMargin: 0,
        horizontalMargin: 0,
      };
      function s(e, t) {
        return function (n, s) {
          var u = Object(c.ensureNotNull)(e).getBoundingClientRect(),
            d = t.verticalAttachEdge,
            m = void 0 === d ? l.verticalAttachEdge : d,
            f = t.verticalDropDirection,
            v = void 0 === f ? l.verticalDropDirection : f,
            h = t.horizontalAttachEdge,
            p = void 0 === h ? l.horizontalAttachEdge : h,
            b = t.horizontalDropDirection,
            g = void 0 === b ? l.horizontalDropDirection : b,
            w = t.horizontalMargin,
            C = void 0 === w ? l.horizontalMargin : w,
            O = t.verticalMargin,
            E = void 0 === O ? l.verticalMargin : O,
            j = m === r.Top ? -1 * E : E,
            N = p === o.Right ? u.right : u.left,
            _ = m === r.Top ? u.top : u.bottom;
          return {
            x: N - (g === a.FromRightToLeft ? n : 0) + C,
            y: _ - (v === i.FromBottomToTop ? s : 0) + j,
          };
        };
      }
    },
    ItnF: function (e, t, n) {
      e.exports = {
        dialog: 'dialog-2QwUBM-N',
        wrapper: 'wrapper-3ePvQMAQ',
        separator: 'separator-1L40XQyb',
      };
    },
    LIFs: function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return i;
      }),
        n.d(t, 'c', function () {
          return a;
        }),
        n.d(t, 'a', function () {
          return c;
        });
      var r = /[<"'&>]/g,
        o = function (e) {
          return '&#' + e.charCodeAt(0) + ';';
        };
      function i(e) {
        return e.replace(r, o);
      }
      function a(e) {
        return void 0 === e && (e = ''), e.replace(/\s+/g, '');
      }
      function c(e) {
        return (
          void 0 === e && (e = ''),
          e.replace(/\b\w/g, function (e) {
            return e.toUpperCase();
          })
        );
      }
    },
    MyWJ: function (e, t, n) {
      e.exports = {
        container: 'container-jKs34Xgq',
        inputContainer: 'inputContainer-1KMWEbBN',
        withCancel: 'withCancel-2WUzxNv9',
        input: 'input-2pz7DtzH',
        icon: 'icon-3SNZP2-_',
        cancel: 'cancel-CnoMjYid',
      };
    },
    QHWU: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return m;
      });
      var r = n('mrSG'),
        o = n('q1tI'),
        i = n.n(o),
        a = n('TSYQ'),
        c = n.n(a),
        l = n('YFKU'),
        s = n('Iivm'),
        u = n('hYdZ'),
        d = n('MyWJ');
      function m(e) {
        var t = e.renderInput,
          n = e.onCancel,
          o = Object(r.__rest)(e, ['renderInput', 'onCancel']);
        return i.a.createElement(
          'div',
          { className: d.container },
          i.a.createElement(
            'div',
            { className: c()(d.inputContainer, n && d.withCancel) },
            t || i.a.createElement(f, Object(r.__assign)({}, o)),
          ),
          i.a.createElement(s.Icon, { className: d.icon, icon: u }),
          n &&
            i.a.createElement(
              'div',
              { className: d.cancel, onClick: n },
              Object(l.t)('Cancel'),
            ),
        );
      }
      function f(e) {
        var t = e.className,
          n = e.reference,
          o = e.value,
          a = e.onChange,
          l = e.onFocus,
          s = e.onKeyDown,
          u = e.onSelect,
          m = e.placeholder,
          f = Object(r.__rest)(e, [
            'className',
            'reference',
            'value',
            'onChange',
            'onFocus',
            'onKeyDown',
            'onSelect',
            'placeholder',
          ]);
        return i.a.createElement(
          'input',
          Object(r.__assign)({}, f, {
            ref: n,
            type: 'text',
            className: c()(t, d.input),
            autoComplete: 'off',
            'data-role': 'search',
            placeholder: m,
            value: o,
            onChange: a,
            onFocus: l,
            onSelect: u,
            onKeyDown: s,
          }),
        );
      }
    },
    To8B: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>';
    },
    UjII: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 18.5h-3M21.5 13.5h-5M23.5 8.5h-7M8.5 7v13.5M4.5 16.5l4 4 4-4"/></svg>';
    },
    XfUw: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>';
    },
    XiJV: function (e, t, n) {
      e.exports = { separator: 'separator-1TZB5HZ-' };
    },
    YCUu: function (e, t, n) {
      e.exports = { contentList: 'contentList-VpXJB1aY' };
    },
    e5nO: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 18.5h-3M21.5 13.5h-5M23.5 8.5h-7M8.5 20.5V7M12.5 11l-4-4-4 4"/></svg>';
    },
    fEjm: function (e, t, n) {
      e.exports = {
        favorite: 'favorite-2V8VHwKe',
        active: 'active-3pQAvYvT',
        checked: 'checked-2bhy04CF',
      };
    },
    g89m: function (e, t, n) {
      'use strict';
      var r = n('mrSG'),
        o = n('q1tI'),
        i = n.n(o),
        a = n('Eyy1'),
        c = n('TSYQ'),
        l = n.n(c),
        s = n('/3z9'),
        u = n('d700'),
        d = n('WXjp'),
        m = n('02pg'),
        f = n('uhCe'),
        v = n('/KDZ'),
        h = n('pafz'),
        p = n('ZjKI'),
        b = n('FQhm'),
        g = n('Iivm'),
        w = n('zztK'),
        C = n('px1m');
      function O(e) {
        var t = e.title,
          n = e.subtitle,
          r = e.onClose,
          o = e.renderBefore,
          a = e.renderAfter;
        return i.a.createElement(
          'div',
          { className: l()(C.container, n && C.unsetAlign) },
          o,
          i.a.createElement(
            'div',
            { 'data-dragg-area': !0, className: C.title },
            i.a.createElement('div', { className: C.ellipsis }, t),
            n &&
              i.a.createElement(
                'div',
                { className: l()(C.ellipsis, C.subtitle) },
                n,
              ),
          ),
          a,
          i.a.createElement(g.Icon, {
            className: C.close,
            icon: w,
            onClick: r,
            'data-name': 'close',
            'data-role': 'button',
          }),
        );
      }
      var E = n('ItnF');
      n.d(t, 'a', function () {
        return _;
      });
      var j = { vertical: 20 },
        N = { vertical: 0 },
        _ = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._controller = null),
              (t._reference = null),
              (t._renderChildren = function (e, n) {
                return (
                  (t._controller = e),
                  t.props.render({
                    requestResize: t._requestResize,
                    centerAndFit: t._centerAndFit,
                    isSmallWidth: n,
                  })
                );
              }),
              (t._handleReference = function (e) {
                return (t._reference = e);
              }),
              (t._handleClose = function () {
                t.props.onClose();
              }),
              (t._handleKeyDown = function (e) {
                if (!e.defaultPrevented)
                  switch (
                    (t.props.onKeyDown && t.props.onKeyDown(e),
                    Object(s.hashFromEvent)(e))
                  ) {
                    case 27:
                      var n = document.activeElement,
                        r = Object(a.ensureNotNull)(t._reference);
                      if (null !== n) {
                        if ((e.preventDefault(), S(n)))
                          return void t._handleClose();
                        if (Object(u.b)(n)) return void r.focus();
                        if (r.contains(n)) return void t._handleClose();
                      }
                  }
              }),
              (t._requestResize = function () {
                null !== t._controller && t._controller.recalculateBounds();
              }),
              (t._centerAndFit = function () {
                null !== t._controller && t._controller.centerAndFit();
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              b.subscribe(
                p.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this._handleClose,
                null,
              );
            }),
            (t.prototype.componentWillUnmount = function () {
              b.unsubscribe(
                p.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this._handleClose,
                null,
              );
            }),
            (t.prototype.focus = function () {
              Object(a.ensureNotNull)(this._reference).focus();
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.className,
                r = t.isOpened,
                o = t.title,
                a = t.dataName,
                c = t.onClickOutside,
                s = t.additionalElementPos,
                u = t.additionalHeaderElement,
                p = t.backdrop,
                b = t.shouldForceFocus,
                g = void 0 === b || b,
                w = t.showSeparator,
                C = t.subtitle,
                _ = t.fullScreen,
                S = void 0 !== _ && _,
                y = 'after' !== s ? u : void 0,
                D = 'after' === s ? u : void 0;
              return i.a.createElement(
                v.a,
                { rule: f.a.SmallHeight },
                function (t) {
                  return i.a.createElement(
                    v.a,
                    { rule: f.a.TabletSmall },
                    function (s) {
                      return i.a.createElement(
                        d.a,
                        {
                          className: l()(E.dialog, n),
                          isOpened: r,
                          reference: e._handleReference,
                          onKeyDown: e._handleKeyDown,
                          onClickOutside: c,
                          fullscreen: s || S,
                          guard: t ? N : j,
                          boundByScreen: s || S,
                          shouldForceFocus: g,
                          backdrop: p,
                          name: e.props.dataName,
                        },
                        i.a.createElement(
                          'div',
                          {
                            className: E.wrapper,
                            'data-name': a,
                            'data-dialog-name': o,
                          },
                          i.a.createElement(O, {
                            onClose: e._handleClose,
                            renderAfter: D,
                            renderBefore: y,
                            subtitle: C,
                            title: o,
                          }),
                          w &&
                            i.a.createElement(m.a, { className: E.separator }),
                          i.a.createElement(h.a.Consumer, null, function (t) {
                            return e._renderChildren(t, s || S);
                          }),
                        ),
                      );
                    },
                  );
                },
              );
            }),
            t
          );
        })(i.a.PureComponent);
      function S(e) {
        return (
          'true' === e.getAttribute('data-haspopup') &&
          'true' !== e.getAttribute('data-expanded')
        );
      }
    },
    hYdZ: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path stroke="currentColor" d="M12.4 12.5a7 7 0 1 0-4.9 2 7 7 0 0 0 4.9-2zm0 0l5.101 5"/></svg>';
    },
    'i/MG': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return u;
      });
      var r = n('mrSG'),
        o = (n('YFKU'), n('q1tI')),
        i = n('TSYQ'),
        a = n('Iivm'),
        c = n('To8B'),
        l = n('kXJy'),
        s = { remove: window.t('Remove') };
      function u(e) {
        var t = e.className,
          n = e.isActive,
          u = e.onClick,
          d = e.title,
          m = e.hidden,
          f = e['data-name'],
          v = void 0 === f ? 'remove-button' : f,
          h = Object(r.__rest)(e, [
            'className',
            'isActive',
            'onClick',
            'title',
            'hidden',
            'data-name',
          ]);
        return o.createElement(
          a.Icon,
          Object(r.__assign)({}, h, {
            'data-name': v,
            className: i(
              l.button,
              'apply-common-tooltip',
              n && l.active,
              m && l.hidden,
              t,
            ),
            icon: c,
            onClick: u,
            title: d || s.remove,
          }),
        );
      }
    },
    kXJy: function (e, t, n) {
      e.exports = {
        button: 'button-1scLo53s',
        active: 'active-2T0ofIIp',
        hidden: 'hidden-2GRQzIQ1',
      };
    },
    ntBy: function (e, t, n) {
      e.exports = {
        overlapScrollWrap: 'overlapScrollWrap-236iNA0w',
        scrollContainer: 'scrollContainer-1OsLRrZC',
      };
    },
    pr86: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return d;
      });
      var r = n('mrSG'),
        o = (n('YFKU'), n('q1tI')),
        i = n('TSYQ'),
        a = n('Iivm'),
        c = n('sg5d'),
        l = n('XfUw'),
        s = n('fEjm'),
        u = {
          add: window.t('Add to favorites'),
          remove: window.t('Remove from favorites'),
        };
      function d(e) {
        var t = e.className,
          n = e.isFilled,
          d = e.isActive,
          m = e.onClick,
          f = Object(r.__rest)(e, [
            'className',
            'isFilled',
            'isActive',
            'onClick',
          ]);
        return o.createElement(
          a.Icon,
          Object(r.__assign)({}, f, {
            className: i(
              s.favorite,
              'apply-common-tooltip',
              n && s.checked,
              d && s.active,
              t,
            ),
            icon: n ? c : l,
            onClick: m,
            title: n ? u.remove : u.add,
          }),
        );
      }
    },
    px1m: function (e, t, n) {
      e.exports = {
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        container: 'container-12F9cTKw',
        unsetAlign: 'unsetAlign-39w7dDTj',
        title: 'title-TQFObfxW',
        subtitle: 'subtitle-EM1kLgFz',
        ellipsis: 'ellipsis-1PT8QOxq',
        close: 'close-3NTwKnT_',
      };
    },
    sg5d: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M9 1l2.35 4.76 5.26.77-3.8 3.7.9 5.24L9 13l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L9 1z"/></svg>';
    },
    uhCe: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n('ASyk'),
        o = {
          SmallHeight: r['small-height-breakpoint'],
          TabletSmall: r['tablet-small-breakpoint'],
          TabletNormal: r['tablet-normal-breakpoint'],
        };
    },
    xp8i: function (e, t, n) {
      e.exports = {
        itemRow: 'itemRow-3JQtg1cT',
        favoriteButton: 'favoriteButton-1yjXmqy0',
        active: 'active-2Ne8Zyok',
        mobile: 'mobile-3cRbBpAw',
        itemInfo: 'itemInfo-3NQvH05Z',
        title: 'title-utNMTX_N',
        details: 'details-1rOd8IMz',
        highlight: 'highlight-3BtgMHlt',
        itemInfoWithPadding: 'itemInfoWithPadding-2CZUseHM',
        favorite: 'favorite-3iQ0dczX',
        removeButton: 'removeButton-1FahXcg8',
      };
    },
    ya27: function (e, t, n) {
      e.exports = { scrollWrap: 'scrollWrap-2ycJ5xsk' };
    },
    zztK: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="none"><path stroke="currentColor" stroke-width="1.2" d="M1 1l15 15m0-15L1 16"/></svg>';
    },
  },
]);
