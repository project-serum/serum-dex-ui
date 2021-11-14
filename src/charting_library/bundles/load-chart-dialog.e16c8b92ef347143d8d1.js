(window.webpackJsonp = window.webpackJsonp || []).push([
  ['load-chart-dialog'],
  {
    '/KDZ': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var o = n('mrSG'),
        r = n('q1tI'),
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
            Object(o.__extends)(t, e),
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
        })(r.PureComponent);
    },
    '02pg': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var o = n('q1tI'),
        r = n('TSYQ'),
        i = n('XiJV');
      function a(e) {
        return o.createElement('div', {
          className: r(i.separator, e.className),
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
    '25b6': function (e, t, n) {
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
      var o = /[<"'&>]/g,
        r = function (e) {
          return '&#' + e.charCodeAt(0) + ';';
        };
      function i(e) {
        return e.replace(o, r);
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
    '8d0Q': function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return r;
      }),
        n.d(t, 'a', function () {
          return i;
        });
      var o = n('q1tI');
      function r() {
        var e = Object(o.useState)(!1),
          t = e[0],
          n = e[1];
        return [
          t,
          {
            onMouseOver: function (e) {
              i(e) && n(!0);
            },
            onMouseOut: function (e) {
              i(e) && n(!1);
            },
          },
        ];
      }
      function i(e) {
        return !e.currentTarget.contains(e.relatedTarget);
      }
    },
    '9dlw': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return f;
      });
      var o = n('mrSG'),
        r = n('q1tI'),
        i = n.n(r),
        a = n('i8i4'),
        c = n.n(a),
        l = (n('EsMY'), n('AiMB')),
        s = n('DTHj'),
        u = n('X0gx'),
        d = n('8Rai');
      function f(e) {
        var t = e.controller,
          n = e.children,
          a = e.isOpened,
          f = e.closeOnClickOutside,
          m = void 0 === f || f,
          v = e.doNotCloseOn,
          h = e.onClickOutside,
          b = e.onClose,
          p = Object(o.__rest)(e, [
            'controller',
            'children',
            'isOpened',
            'closeOnClickOutside',
            'doNotCloseOn',
            'onClickOutside',
            'onClose',
          ]),
          g = Object(r.useContext)(u.a),
          O = Object(d.a)({
            handler: function (e) {
              h && h(e);
              if (!m) return;
              if (v && e.target instanceof Node) {
                var t = c.a.findDOMNode(v);
                if (t instanceof Node && t.contains(e.target)) return;
              }
              b();
            },
            mouseDown: !0,
            touchStart: !0,
          });
        return a
          ? i.a.createElement(
              l.a,
              {
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                pointerEvents: 'none',
              },
              i.a.createElement(
                'span',
                { ref: O, style: { pointerEvents: 'auto' } },
                i.a.createElement(
                  s.a,
                  Object(o.__assign)({}, p, {
                    isOpened: a,
                    onClose: b,
                    onScroll: function (t) {
                      var n = e.onScroll;
                      n && n(t);
                      t.stopPropagation();
                    },
                    customCloseDelegate: g,
                    ref: t,
                  }),
                  n,
                ),
              ),
            )
          : null;
      }
    },
    AMW5: function (e, t, n) {
      'use strict';
      n.r(t);
      var o = n('q1tI'),
        r = n.n(o),
        i = n('i8i4'),
        a = n('mrSG'),
        c = n('Eyy1'),
        l = n('YFKU'),
        s = n('Vdly'),
        u = n('qFKp'),
        d = n('g89m'),
        f = n('TSYQ'),
        m = n.n(f),
        v = n('9dlw'),
        h = n('Iksw'),
        b = n('Iivm'),
        p = n('e5nO'),
        g = n('UjII'),
        O = n('HjiN');
      function w(e) {
        var t = e.sortDirection,
          n = e.children,
          i = Object(a.__rest)(e, ['sortDirection', 'children']),
          c = Object(o.useRef)(null),
          l = Object(o.useState)(!1),
          s = l[0],
          u = l[1];
        return r.a.createElement(
          'div',
          Object(a.__assign)({}, i, {
            ref: c,
            className: f(
              O.sortButton,
              'apply-common-tooltip',
              'common-tooltip-vertical',
            ),
            onClick: function () {
              u(!s);
            },
          }),
          r.a.createElement(b.Icon, {
            className: O.icon,
            icon: 0 === t ? p : g,
          }),
          r.a.createElement(
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
      var C = n('N5tr'),
        E = n('H2qI');
      function j(e) {
        var t = e.label,
          n = e.listSortField,
          r = e.itemSortField,
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
          d = r === n && c === i;
        return o.createElement(
          C.b,
          Object(a.__assign)({}, u, {
            className: f(E.container, s),
            label: o.createElement(
              'div',
              { className: E.labelWrap },
              o.createElement(b.Icon, {
                className: E.icon,
                icon: 0 === c ? p : g,
              }),
              o.createElement('span', { className: E.text }, t),
            ),
            isActive: d,
            onClick: function () {
              l(r, c);
            },
            'data-active': d.toString(),
            'data-sort-field': r,
            'data-sort-direction': 0 === c ? 'asc' : 'desc',
          }),
        );
      }
      var _ = n('QHWU'),
        y = n('IePd');
      function N(e) {
        var t = e.children,
          n = e.className;
        return r.a.createElement('div', { className: m()(y.container, n) }, t);
      }
      function S(e) {
        var t = e.title;
        return r.a.createElement('div', { className: y.title }, t);
      }
      var k = n('Hr11'),
        D = n('Ialn'),
        x = n('0lTl');
      function T(e) {
        var t,
          n,
          i = e.size,
          a = e.scrollSize,
          l = e.clientSize,
          s = e.scrollProgress,
          u = e.onScrollProgressChange,
          d = e.horizontal,
          f = e.theme,
          v = void 0 === f ? x : f,
          h = e.onDragStart,
          b = e.onDragEnd,
          p = e.minBarSize,
          g = void 0 === p ? 40 : p,
          O = Object(o.useRef)(null),
          w = Object(o.useRef)(null),
          C = Object(o.useState)(!1),
          E = C[0],
          j = C[1],
          _ = Object(o.useRef)(0);
        Object(o.useEffect)(
          function () {
            if (E) {
              h && h();
              var e = Object(c.ensureNotNull)(O.current).ownerDocument;
              e &&
                (e.addEventListener('mousemove', M),
                e.addEventListener('mouseup', I));
            } else b && b();
            return function () {
              var e = Object(c.ensureNotNull)(O.current).ownerDocument;
              e &&
                (e.removeEventListener('mousemove', M),
                e.removeEventListener('mouseup', I));
            };
          },
          [E],
        );
        var y = i / a || 0,
          N = l * y || 0,
          S = Math.max(N, g),
          T = (i - S) / (i - N),
          F = (function (e) {
            if (Object(D.isRtl)() && d) return e - a + l;
            return e;
          })(Object(k.clamp)(s, 0, a - i));
        return r.a.createElement(
          'div',
          {
            ref: O,
            className: m()(v.wrap, d && v['wrap--horizontal']),
            style: ((t = {}), (t[d ? 'width' : 'height'] = i), t),
            onMouseDown: function (e) {
              if (e.isDefaultPrevented()) return;
              e.preventDefault();
              var t = Object(c.ensureNotNull)(
                w.current,
              ).getBoundingClientRect();
              _.current = (d ? t.width : t.height) / 2;
              var n = a - i,
                o =
                  A(e.nativeEvent, Object(c.ensureNotNull)(O.current)) -
                  _.current;
              o < 0
                ? ((o = 0),
                  (_.current = A(
                    e.nativeEvent,
                    Object(c.ensureNotNull)(O.current),
                  )))
                : o > n * y * T &&
                  ((o = n * y * T),
                  (_.current =
                    A(e.nativeEvent, Object(c.ensureNotNull)(O.current)) - o));
              u(o / y / T), j(!0);
            },
          },
          r.a.createElement(
            'div',
            {
              ref: w,
              className: m()(v.bar, d && v['bar--horizontal']),
              style:
                ((n = {}),
                (n[d ? 'minWidth' : 'minHeight'] = g),
                (n[d ? 'width' : 'height'] = S),
                (n.transform =
                  'translate' +
                  (d ? 'X' : 'Y') +
                  '(' +
                  (F * y * T || 0) +
                  'px)'),
                n),
              onMouseDown: function (e) {
                e.preventDefault(),
                  (_.current = A(
                    e.nativeEvent,
                    Object(c.ensureNotNull)(w.current),
                  )),
                  j(!0);
              },
            },
            r.a.createElement('div', {
              className: m()(v.barInner, d && v['barInner--horizontal']),
            }),
          ),
        );
        function M(e) {
          var t = A(e, Object(c.ensureNotNull)(O.current)) - _.current;
          u(t / y / T);
        }
        function I(e) {
          j(!1);
        }
        function A(e, t) {
          var n = t.getBoundingClientRect();
          return d ? e.clientX - n.left : e.clientY - n.top;
        }
      }
      var F = n('8d0Q'),
        M = n('ya27');
      function I(e) {
        var t = e.reference,
          n = e.className,
          i = e.containerHeight,
          c = void 0 === i ? 0 : i,
          l = e.containerWidth,
          s = void 0 === l ? 0 : l,
          u = e.contentHeight,
          d = void 0 === u ? 0 : u,
          m = e.contentWidth,
          v = void 0 === m ? 0 : m,
          h = e.scrollPosTop,
          b = void 0 === h ? 0 : h,
          p = e.scrollPosLeft,
          g = void 0 === p ? 0 : p,
          O = e.onVerticalChange,
          w = e.onHorizontalChange,
          C = e.visible,
          E = Object(F.b)(),
          j = E[0],
          _ = E[1],
          y = Object(o.useState)(!1),
          N = y[0],
          S = y[1],
          k = c < d,
          D = s < v,
          x = k && D ? 8 : 0;
        return r.a.createElement(
          'div',
          Object(a.__assign)({}, _, {
            ref: t,
            className: f(n, M.scrollWrap),
            style: { visibility: C || j || N ? 'visible' : 'hidden' },
          }),
          k &&
            r.a.createElement(T, {
              size: c - x,
              scrollSize: d - x,
              clientSize: c - x,
              scrollProgress: b,
              onScrollProgressChange: function (e) {
                O && O(e);
              },
              onDragStart: I,
              onDragEnd: A,
            }),
          D &&
            r.a.createElement(T, {
              size: s - x,
              scrollSize: v - x,
              clientSize: s - x,
              scrollProgress: g,
              onScrollProgressChange: function (e) {
                w && w(e);
              },
              onDragStart: I,
              onDragEnd: A,
              horizontal: !0,
            }),
        );
        function I() {
          S(!0);
        }
        function A() {
          S(!1);
        }
      }
      function A(e) {
        var t = e.items,
          n = e.countPerRender,
          i = void 0 === n ? 25 : n,
          a = e.initCount,
          c = void 0 === a ? 25 : a,
          l = e.onUpdate,
          s = Object(o.useState)(c),
          u = s[0],
          d = s[1],
          f = Object(o.useRef)(l);
        f.current = l;
        var m = u;
        return (
          Object(o.useEffect)(
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
                o = e[1],
                r = function (e) {
                  for (
                    u < t.length &&
                    ((m += i),
                    d(function (e) {
                      return e + i;
                    }));
                    u < t.length && e.timeRemaining() > 0;

                  )
                    (m += i),
                      d(function (e) {
                        return e + i;
                      });
                  (a = t.length - m > 0 ? n(r, { timeout: 500 }) : null),
                    f.current && f.current();
                },
                a = n(r, { timeout: 500 });
              return function () {
                null !== a && o(a);
              };
            },
            [t.length],
          ),
          r.a.createElement(r.a.Fragment, null, t.slice(0, u))
        );
      }
      var L = n('tmL0'),
        B = { onMouseOver: function () {}, onMouseOut: function () {} };
      var R = n('ntBy');
      function z(e) {
        var t = e.className,
          n = e.listKey,
          i = e.data,
          l = e.renderItem,
          s = e.onScroll,
          d = e.onTouchStart,
          f = (function (e) {
            var t = Object(o.useRef)(null),
              n = e || Object(o.useRef)(null),
              r = Object(F.b)(),
              i = r[0],
              l = r[1],
              s = Object(o.useState)({
                reference: t,
                containerHeight: 0,
                containerWidth: 0,
                contentHeight: 0,
                contentWidth: 0,
                scrollPosTop: 0,
                scrollPosLeft: 0,
                onVerticalChange: function (e) {
                  f(function (t) {
                    return Object(a.__assign)(Object(a.__assign)({}, t), {
                      scrollPosTop: e,
                    });
                  }),
                    (Object(c.ensureNotNull)(n.current).scrollTop = e);
                },
                onHorizontalChange: function (e) {
                  f(function (t) {
                    return Object(a.__assign)(Object(a.__assign)({}, t), {
                      scrollPosLeft: e,
                    });
                  }),
                    (Object(c.ensureNotNull)(n.current).scrollLeft = e);
                },
                visible: i,
              }),
              d = s[0],
              f = s[1],
              m = Object(o.useCallback)(function () {
                if (n.current) {
                  var e = n.current,
                    o = e.clientHeight,
                    r = e.scrollHeight,
                    i = e.scrollTop,
                    c = e.clientWidth,
                    l = e.scrollWidth,
                    s = e.scrollLeft,
                    u = t.current ? t.current.offsetTop : 0;
                  f(function (e) {
                    return Object(a.__assign)(Object(a.__assign)({}, e), {
                      containerHeight: o - u,
                      contentHeight: r - u,
                      scrollPosTop: i,
                      containerWidth: c,
                      contentWidth: l,
                      scrollPosLeft: s,
                    });
                  });
                }
              }, []);
            function v() {
              f(function (e) {
                return Object(a.__assign)(Object(a.__assign)({}, e), {
                  scrollPosTop: Object(c.ensureNotNull)(n.current).scrollTop,
                  scrollPosLeft: Object(c.ensureNotNull)(n.current).scrollLeft,
                });
              });
            }
            return (
              Object(o.useEffect)(
                function () {
                  i && m(),
                    f(function (e) {
                      return Object(a.__assign)(Object(a.__assign)({}, e), {
                        visible: i,
                      });
                    });
                },
                [i],
              ),
              Object(o.useEffect)(
                function () {
                  return (
                    n.current && n.current.addEventListener('scroll', v),
                    function () {
                      n.current && n.current.removeEventListener('scroll', v);
                    }
                  );
                },
                [n],
              ),
              [d, u.CheckMobile.any() ? B : l, n, m]
            );
          })(e.reference),
          v = f[0],
          h = f[1],
          b = f[2],
          p = f[3],
          g = Object(o.useMemo)(
            function () {
              return i.map(l);
            },
            [i, l],
          );
        return r.a.createElement(
          L.a,
          Object(a.__assign)({}, h, {
            reference: b,
            className: m()(R.scrollContainer, t),
            onScroll: s,
            onTouchStart: d,
          }),
          r.a.createElement(
            'div',
            { className: R.overlapScrollWrap },
            r.a.createElement(I, Object(a.__assign)({}, v)),
          ),
          r.a.createElement(A, {
            key: n,
            initCount: 10,
            items: g,
            onUpdate: p,
          }),
        );
      }
      var P = n('ldgD'),
        W = n.n(P),
        q = n('BxxN'),
        H = n('dTSQ'),
        Q = n('pr86'),
        U = n('i/MG'),
        Y = n('xp8i');
      function K(e) {
        var t = e.searchString,
          n = e.text,
          i = e.isActive;
        if (!t) return r.a.createElement(r.a.Fragment, null, n);
        var a = Object(o.useMemo)(
          function () {
            return n.split(
              new RegExp('(' + Object(H.regExpEscape)(t) + ')', 'i'),
            );
          },
          [t],
        );
        return r.a.createElement(
          r.a.Fragment,
          null,
          a.map(function (e, t) {
            return t % 2
              ? r.a.createElement(
                  'span',
                  { key: t, className: m()(Y.highlight, i && Y.active) },
                  e,
                )
              : r.a.createElement(r.a.Fragment, { key: t }, e);
          }),
        );
      }
      function G(e) {
        var t = e.url,
          n = e.title,
          o = e.renderTitle,
          i = e.subtitle,
          c = e.removeBtnLabel,
          l = e.onClick,
          s = e.onClickFavorite,
          d = e.onClickRemove,
          f = e.isActive,
          v = e.isFavorite,
          h = e.isMobile,
          b = void 0 !== h && h,
          p = e.showFavorite,
          g = void 0 === p || p,
          O = Object(a.__rest)(e, [
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
        return r.a.createElement(
          'a',
          Object(a.__assign)({}, O, {
            className: m()(Y.itemRow, f && Y.active, b && Y.mobile),
            onClick: X.bind(null, l),
            href: t,
            'data-role': 'list-item',
            'data-active': f,
          }),
          g &&
            s &&
            r.a.createElement(Q.a, {
              className: m()(
                Y.favoriteButton,
                v && Y.favorite,
                u.CheckMobile.any() && Y.mobile,
              ),
              isActive: f,
              isFilled: v,
              onClick: X.bind(null, s),
              'data-name': 'list-item-favorite-button',
              'data-favorite': v,
            }),
          r.a.createElement(
            'div',
            { className: m()(Y.itemInfo, !g && Y.itemInfoWithPadding) },
            r.a.createElement(
              'div',
              {
                className: m()(Y.title, f && Y.active, b && Y.mobile),
                'data-name': 'list-item-title',
              },
              o || n,
            ),
            r.a.createElement(
              'div',
              { className: m()(Y.details, f && Y.active, b && Y.mobile) },
              i,
            ),
          ),
          r.a.createElement(U.a, {
            className: Y.removeButton,
            isActive: f,
            onClick: X.bind(null, d),
            'data-name': 'list-item-remove-button',
            title: c,
          }),
        );
      }
      function X(e, t) {
        t.defaultPrevented || (t.preventDefault(), e(t));
      }
      var J = n('pPtI'),
        Z = n('+EG+'),
        V = n('oNDq'),
        $ = n('25b6');
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
          u = Object(o.useState)(function () {
            return t.active();
          }),
          d = u[0],
          f = u[1],
          m = Object(q.a)({ chartId: t.url }),
          v = Object(o.useContext)(Z.b);
        return (
          Object(o.useEffect)(function () {
            return (
              n && n.metaInfo.id.subscribe(b),
              function () {
                n && n.metaInfo.id.unsubscribe(b);
              }
            );
          }, []),
          r.a.createElement(G, {
            url: m,
            title: r.a.createElement(K, {
              searchString: c,
              isActive: d,
              text: t.title,
            }),
            subtitle: r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(K, {
                searchString: c,
                isActive: d,
                text: t.symbol,
              }),
              ', ',
              r.a.createElement(K, {
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
              !(function (e, t, n, o) {
                Object(V.createConfirmDialog)({
                  content: Object($.b)(e),
                  manager: o || void 0,
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
        function b(e) {
          f(t.id === e);
        }
      }
      var oe = n('tWVy'),
        re = n('YCUu'),
        ie = { sortField: 'modified', sortDirection: 1 };
      function ae(e) {
        var t = e.charts,
          n = e.onClose,
          i = e.favoriteChartsService,
          l = e.chartWidgetCollection,
          f = Object(o.useState)(''),
          m = f[0],
          v = f[1],
          h = Object(o.useState)(m),
          b = h[0],
          p = h[1],
          g = Object(o.useState)([]),
          O = g[0],
          C = g[1],
          E = Object(o.useRef)(null),
          y = Object(o.useState)(function () {
            return i.get();
          }),
          k = y[0],
          D = y[1],
          x = Object(o.useState)(function () {
            return s.getJSON('loadChartDialog.viewState', ie);
          }),
          T = x[0],
          F = x[1],
          M = Object(o.useRef)(null);
        Object(o.useEffect)(function () {
          u.CheckMobile.any() || Object(c.ensureNotNull)(M.current).focus();
        }, []);
        var I = null;
        Object(o.useEffect)(
          function () {
            I && I();
          },
          [m, O],
        );
        var A = Object(o.useRef)();
        Object(o.useEffect)(
          function () {
            return (
              (A.current = setTimeout(function () {
                v(b);
              }, 300)),
              function () {
                clearTimeout(A.current);
              }
            );
          },
          [b],
        ),
          Object(o.useEffect)(function () {
            return (
              i.getOnChange().subscribe(null, q),
              function () {
                i.getOnChange().unsubscribe(null, q);
              }
            );
          }, []);
        var L = Object(o.useMemo)(
          function () {
            return Object(a.__spreadArrays)(t)
              .sort(
                ((e = T.sortDirection),
                function (t, n) {
                  if (k[t.id] && !k[n.id]) return -1;
                  if (!k[t.id] && k[n.id]) return 1;
                  var o = 0 === e ? 1 : -1;
                  return 'modified' === T.sortField
                    ? o * (t.modified - n.modified)
                    : o * t.title.localeCompare(n.title);
                }),
              )
              .filter(function (e) {
                return (
                  !O.includes(e.id) &&
                  (Q(e.title) || Q(e.symbol) || Q(te(e.interval)))
                );
              });
            var e;
          },
          [m, T, O, k],
        );
        return r.a.createElement(d.a, {
          ref: E,
          onClose: n,
          onClickOutside: n,
          isOpened: !0,
          title: window.t('Load layout'),
          dataName: 'load-layout-dialog',
          render: function (e) {
            var t = e.requestResize;
            return (
              (I = t),
              r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(_.a, {
                  reference: M,
                  onChange: R,
                  placeholder: window.t('Search'),
                }),
                r.a.createElement(
                  N,
                  null,
                  r.a.createElement(S, { title: window.t('Layout name') }),
                  r.a.createElement(
                    w,
                    {
                      sortDirection: T.sortDirection,
                      title: window.t('Sort by layout name, date changed'),
                      'data-name': 'load-chart-dialog-sort-button',
                    },
                    r.a.createElement(j, {
                      label: window.t('Layout name (A to Z)'),
                      listSortField: T.sortField,
                      itemSortField: 'title',
                      listSortDirection: T.sortDirection,
                      itemSortDirection: 0,
                      onClick: U,
                      'data-name': 'load-chart-dialog-sort-menu-item',
                    }),
                    r.a.createElement(j, {
                      label: window.t('Layout name (Z to A)'),
                      listSortField: T.sortField,
                      itemSortField: 'title',
                      listSortDirection: T.sortDirection,
                      itemSortDirection: 1,
                      onClick: U,
                      'data-name': 'load-chart-dialog-sort-menu-item',
                    }),
                    r.a.createElement(j, {
                      label: window.t('Date modified (oldest first)'),
                      listSortField: T.sortField,
                      itemSortField: 'modified',
                      listSortDirection: T.sortDirection,
                      itemSortDirection: 0,
                      onClick: U,
                      'data-name': 'load-chart-dialog-sort-menu-item',
                    }),
                    r.a.createElement(j, {
                      label: window.t('Date modified (newest first)'),
                      listSortField: T.sortField,
                      itemSortField: 'modified',
                      listSortDirection: T.sortDirection,
                      itemSortDirection: 1,
                      onClick: U,
                      'data-name': 'load-chart-dialog-sort-menu-item',
                    }),
                  ),
                ),
                r.a.createElement(z, {
                  listKey: [m, T.sortField, T.sortDirection].join('_'),
                  className: re.contentList,
                  data: L,
                  onScroll: B,
                  renderItem: function (e) {
                    return r.a.createElement(ne, {
                      key: (k[e.id] ? 'f_' : '') + e.id,
                      chart: e,
                      onClose: n,
                      chartWidgetCollection: l,
                      trackEvent: P,
                      onRemoveCanceled: H,
                      localFavorites: k,
                      searchString: m,
                      onClickRemove: W,
                    });
                  },
                }),
              )
            );
          },
        });
        function B() {
          oe.a.fire();
        }
        function R(e) {
          var t = e.currentTarget.value;
          p(t);
        }
        function P(e) {
          0;
        }
        function W(e) {
          C(Object(a.__spreadArrays)([e], O));
        }
        function q(e) {
          D(e);
        }
        function H() {
          Object(c.ensureNotNull)(E.current).focus();
        }
        function Q(e) {
          return e.toLowerCase().includes(m.toLowerCase());
        }
        function U(e, t) {
          var n = { sortField: e, sortDirection: t };
          F(n),
            s.setValue('loadChartDialog.viewState', JSON.stringify(n), {
              forceFlush: !0,
            }),
            P();
        }
      }
      function ce(e, t, n) {
        var r = document.createElement('div');
        i.render(
          o.createElement(ae, {
            charts: e,
            favoriteChartsService: t,
            chartWidgetCollection: n,
            onClose: function () {
              i.unmountComponentAtNode(r);
            },
          }),
          r,
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
        return o;
      }),
        n.d(t, 'b', function () {
          return i;
        }),
        n.d(t, 'c', function () {
          return s;
        });
      var o,
        r,
        i,
        a,
        c = n('Eyy1');
      !(function (e) {
        (e[(e.Top = 0)] = 'Top'), (e[(e.Bottom = 1)] = 'Bottom');
      })(o || (o = {})),
        (function (e) {
          (e[(e.Left = 0)] = 'Left'), (e[(e.Right = 1)] = 'Right');
        })(r || (r = {})),
        (function (e) {
          (e[(e.FromTopToBottom = 0)] = 'FromTopToBottom'),
            (e[(e.FromBottomToTop = 1)] = 'FromBottomToTop');
        })(i || (i = {})),
        (function (e) {
          (e[(e.FromLeftToRight = 0)] = 'FromLeftToRight'),
            (e[(e.FromRightToLeft = 1)] = 'FromRightToLeft');
        })(a || (a = {}));
      var l = {
        verticalAttachEdge: o.Bottom,
        horizontalAttachEdge: r.Left,
        verticalDropDirection: i.FromTopToBottom,
        horizontalDropDirection: a.FromLeftToRight,
        verticalMargin: 0,
        horizontalMargin: 0,
      };
      function s(e, t) {
        return function (n, s) {
          var u = Object(c.ensureNotNull)(e).getBoundingClientRect(),
            d = t.verticalAttachEdge,
            f = void 0 === d ? l.verticalAttachEdge : d,
            m = t.verticalDropDirection,
            v = void 0 === m ? l.verticalDropDirection : m,
            h = t.horizontalAttachEdge,
            b = void 0 === h ? l.horizontalAttachEdge : h,
            p = t.horizontalDropDirection,
            g = void 0 === p ? l.horizontalDropDirection : p,
            O = t.horizontalMargin,
            w = void 0 === O ? l.horizontalMargin : O,
            C = t.verticalMargin,
            E = void 0 === C ? l.verticalMargin : C,
            j = f === o.Top ? -1 * E : E,
            _ = b === r.Right ? u.right : u.left,
            y = f === o.Top ? u.top : u.bottom;
          return {
            x: _ - (g === a.FromRightToLeft ? n : 0) + w,
            y: y - (v === i.FromBottomToTop ? s : 0) + j,
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
    N5tr: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return d;
      }),
        n.d(t, 'b', function () {
          return v;
        });
      var o = n('mrSG'),
        r = n('q1tI'),
        i = n.n(r),
        a = n('TSYQ'),
        c = n('tWVy'),
        l = n('JWMC'),
        s = n('QpNh'),
        u = n('v1bN'),
        d = u;
      function f(e) {
        var t = e.reference,
          n = Object(o.__rest)(e, ['reference']),
          r = Object(o.__assign)(Object(o.__assign)({}, n), { ref: t });
        return i.a.createElement(e.href ? 'a' : 'div', r);
      }
      function m(e) {
        e.stopPropagation();
      }
      function v(e) {
        var t,
          n,
          d,
          v = e.className,
          h = e.title,
          b = e.labelRowClassName,
          p = e.shortcut,
          g = e.forceShowShortcuts,
          O = e.icon,
          w = e.isActive,
          C = e.isDisabled,
          E = e.isHovered,
          j = e.appearAsDisabled,
          _ = e.label,
          y = e.link,
          N = e.showToolboxOnHover,
          S = e.target,
          k = e.toolbox,
          D = e.reference,
          x = e.onMouseOut,
          T = e.onMouseOver,
          F = e.theme,
          M = void 0 === F ? u : F,
          I = Object(s.a)(e),
          A = Object(r.useRef)(null);
        return i.a.createElement(
          f,
          Object(o.__assign)({}, I, {
            className: a(
              v,
              M.item,
              O && M.withIcon,
              ((t = {}),
              (t[M.isActive] = w),
              (t[M.isDisabled] = C || j),
              (t[M.hovered] = E),
              t),
            ),
            title: h,
            href: y,
            target: S,
            reference: function (e) {
              (A.current = e), D && D(e);
            },
            onClick: function (t) {
              var n = e.dontClosePopup,
                o = e.onClick,
                r = e.onClickArg,
                i = e.trackEventObject;
              if (C) return;
              i && Object(l.trackEvent)(i.category, i.event, i.label);
              o && o(r, t);
              n || Object(c.b)();
            },
            onContextMenu: function (t) {
              var n = e.trackEventObject,
                o = e.trackRightClick;
              n &&
                o &&
                Object(l.trackEvent)(
                  n.category,
                  n.event,
                  n.label + '_rightClick',
                );
            },
            onMouseUp: function (t) {
              var n = e.trackEventObject,
                o = e.trackMouseWheelClick;
              if (1 === t.button && y && n) {
                var r = n.label;
                o && (r += '_mouseWheelClick'),
                  Object(l.trackEvent)(n.category, n.event, r);
              }
            },
            onMouseOver: T,
            onMouseOut: x,
          }),
          void 0 !== O &&
            i.a.createElement('div', {
              className: M.icon,
              dangerouslySetInnerHTML: { __html: O },
            }),
          i.a.createElement(
            'div',
            { className: a(M.labelRow, b) },
            i.a.createElement('div', { className: M.label }, _),
          ),
          (void 0 !== p || g) &&
            i.a.createElement(
              'div',
              { className: M.shortcut },
              (d = p) && d.split('+').join(' + '),
            ),
          void 0 !== k &&
            i.a.createElement(
              'div',
              {
                onClick: m,
                className: a(M.toolbox, ((n = {}), (n[M.showOnHover] = N), n)),
              },
              k,
            ),
        );
      }
    },
    QHWU: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return f;
      });
      var o = n('mrSG'),
        r = n('q1tI'),
        i = n.n(r),
        a = n('TSYQ'),
        c = n.n(a),
        l = n('YFKU'),
        s = n('Iivm'),
        u = n('hYdZ'),
        d = n('MyWJ');
      function f(e) {
        var t = e.children,
          n = e.renderInput,
          r = e.onCancel,
          a = Object(o.__rest)(e, ['children', 'renderInput', 'onCancel']);
        return i.a.createElement(
          'div',
          { className: d.container },
          i.a.createElement(
            'div',
            { className: c()(d.inputContainer, r && d.withCancel) },
            n || i.a.createElement(m, Object(o.__assign)({}, a)),
          ),
          t,
          i.a.createElement(s.Icon, { className: d.icon, icon: u }),
          r &&
            i.a.createElement(
              'div',
              { className: d.cancel, onClick: r },
              Object(l.t)('Cancel'),
            ),
        );
      }
      function m(e) {
        var t = e.className,
          n = e.reference,
          r = e.value,
          a = e.onChange,
          l = e.onFocus,
          s = e.onBlur,
          u = e.onKeyDown,
          f = e.onSelect,
          m = e.placeholder,
          v = Object(o.__rest)(e, [
            'className',
            'reference',
            'value',
            'onChange',
            'onFocus',
            'onBlur',
            'onKeyDown',
            'onSelect',
            'placeholder',
          ]);
        return i.a.createElement(
          'input',
          Object(o.__assign)({}, v, {
            ref: n,
            type: 'text',
            className: c()(t, d.input),
            autoComplete: 'off',
            'data-role': 'search',
            placeholder: m,
            value: r,
            onChange: a,
            onFocus: l,
            onBlur: s,
            onSelect: f,
            onKeyDown: u,
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
        disabled: 'disabled-3ebwimbb',
        active: 'active-3pQAvYvT',
        checked: 'checked-2bhy04CF',
      };
    },
    g89m: function (e, t, n) {
      'use strict';
      var o = n('mrSG'),
        r = n('q1tI'),
        i = n.n(r),
        a = n('Eyy1'),
        c = n('TSYQ'),
        l = n.n(c),
        s = n('/3z9'),
        u = n('d700'),
        d = n('WXjp'),
        f = n('02pg'),
        m = n('uhCe'),
        v = n('/KDZ'),
        h = n('pafz'),
        b = n('ZjKI'),
        p = n('FQhm'),
        g = n('Iivm'),
        O = n('zztK'),
        w = n('px1m');
      function C(e) {
        var t = e.title,
          n = e.subtitle,
          o = e.onClose,
          r = e.renderBefore,
          a = e.renderAfter,
          c = e.draggable;
        return i.a.createElement(
          'div',
          { className: l()(w.container, n && w.unsetAlign) },
          r,
          i.a.createElement(
            'div',
            { 'data-dragg-area': c, className: w.title },
            i.a.createElement('div', { className: w.ellipsis }, t),
            n &&
              i.a.createElement(
                'div',
                { className: l()(w.ellipsis, w.subtitle) },
                n,
              ),
          ),
          a,
          i.a.createElement(g.Icon, {
            className: w.close,
            icon: O,
            onClick: o,
            'data-name': 'close',
            'data-role': 'button',
          }),
        );
      }
      var E = n('ItnF');
      n.d(t, 'a', function () {
        return y;
      });
      var j = { vertical: 20 },
        _ = { vertical: 0 },
        y = (function (e) {
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
                      if (e.defaultPrevented) return;
                      if (t.props.forceCloseOnEsc && t.props.forceCloseOnEsc())
                        return void t._handleClose();
                      var n = document.activeElement,
                        o = Object(a.ensureNotNull)(t._reference);
                      if (null !== n) {
                        if ((e.preventDefault(), N(n)))
                          return void t._handleClose();
                        if (Object(u.b)(n)) return void o.focus();
                        if (o.contains(n)) return void t._handleClose();
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
            Object(o.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              p.subscribe(
                b.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this._handleClose,
                null,
              );
            }),
            (t.prototype.componentWillUnmount = function () {
              p.unsubscribe(
                b.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this._handleClose,
                null,
              );
            }),
            (t.prototype.focus = function () {
              Object(a.ensureNotNull)(this._reference).focus();
            }),
            (t.prototype.getElement = function () {
              return this._reference;
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.className,
                o = t.isOpened,
                r = t.title,
                a = t.dataName,
                c = t.onClickOutside,
                s = t.additionalElementPos,
                u = t.additionalHeaderElement,
                b = t.backdrop,
                p = t.shouldForceFocus,
                g = void 0 === p || p,
                O = t.showSeparator,
                w = t.subtitle,
                y = t.draggable,
                N = void 0 === y || y,
                S = t.fullScreen,
                k = void 0 !== S && S,
                D = t.isAnimationEnabled,
                x = t.growPoint,
                T = t.dialogTooltip,
                F = 'after' !== s ? u : void 0,
                M = 'after' === s ? u : void 0;
              return i.a.createElement(
                v.a,
                { rule: m.a.SmallHeight },
                function (t) {
                  return i.a.createElement(
                    v.a,
                    { rule: m.a.TabletSmall },
                    function (s) {
                      return i.a.createElement(
                        d.a,
                        {
                          className: l()(E.dialog, n),
                          isOpened: o,
                          reference: e._handleReference,
                          onKeyDown: e._handleKeyDown,
                          onClickOutside: c,
                          onClickBackdrop: c,
                          fullscreen: s || k,
                          guard: t ? _ : j,
                          boundByScreen: s || k,
                          shouldForceFocus: g,
                          backdrop: b,
                          draggable: N,
                          isAnimationEnabled: D,
                          growPoint: x,
                          name: e.props.dataName,
                          dialogTooltip: T,
                        },
                        i.a.createElement(
                          'div',
                          {
                            className: E.wrapper,
                            'data-name': a,
                            'data-dialog-name': r,
                          },
                          i.a.createElement(C, {
                            draggable: N && !(s || k),
                            onClose: e._handleClose,
                            renderAfter: M,
                            renderBefore: F,
                            subtitle: w,
                            title: r,
                          }),
                          O &&
                            i.a.createElement(f.a, { className: E.separator }),
                          i.a.createElement(h.a.Consumer, null, function (t) {
                            return e._renderChildren(t, s || k);
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
      function N(e) {
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
      var o = n('mrSG'),
        r = (n('YFKU'), n('q1tI')),
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
          f = e.hidden,
          m = e['data-name'],
          v = void 0 === m ? 'remove-button' : m,
          h = Object(o.__rest)(e, [
            'className',
            'isActive',
            'onClick',
            'title',
            'hidden',
            'data-name',
          ]);
        return r.createElement(
          a.Icon,
          Object(o.__assign)({}, h, {
            'data-name': v,
            className: i(
              l.button,
              'apply-common-tooltip',
              n && l.active,
              f && l.hidden,
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
        disabled: 'disabled-2eJ5fvUz',
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
      var o = n('mrSG'),
        r = (n('YFKU'), n('q1tI')),
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
          f = e.onClick,
          m = Object(o.__rest)(e, [
            'className',
            'isFilled',
            'isActive',
            'onClick',
          ]);
        return r.createElement(
          a.Icon,
          Object(o.__assign)({}, m, {
            className: i(
              s.favorite,
              'apply-common-tooltip',
              n && s.checked,
              d && s.active,
              t,
            ),
            icon: n ? c : l,
            onClick: f,
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
    tmL0: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      });
      var o = n('mrSG'),
        r = n('q1tI'),
        i = n.n(r),
        a = n('x0D+'),
        c = n('Eyy1'),
        l = n('qFKp');
      function s(e) {
        var t = e.reference,
          n = e.children,
          c = Object(o.__rest)(e, ['reference', 'children']),
          s = Object(r.useRef)(null),
          d = Object(r.useCallback)(
            function (e) {
              t && (t.current = e),
                l.CheckMobile.iOS() &&
                  (null !== s.current && Object(a.enableBodyScroll)(s.current),
                  (s.current = e),
                  null !== s.current &&
                    Object(a.disableBodyScroll)(s.current, {
                      allowTouchMove: u(s),
                    }));
            },
            [t],
          );
        return i.a.createElement('div', Object(o.__assign)({ ref: d }, c), n);
      }
      function u(e) {
        return function (t) {
          var n = Object(c.ensureNotNull)(e.current),
            o = document.activeElement;
          return (
            !n.contains(t) || (null !== o && n.contains(o) && o.contains(t))
          );
        };
      }
    },
    uhCe: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var o = n('ASyk'),
        r = {
          SmallHeight: o['small-height-breakpoint'],
          TabletSmall: o['tablet-small-breakpoint'],
          TabletNormal: o['tablet-normal-breakpoint'],
        };
    },
    v1bN: function (e, t, n) {
      e.exports = {
        'tablet-small-breakpoint': 'screen and (max-width: 419px)',
        item: 'item-2xPVYue0',
        hovered: 'hovered-1uf45E05',
        isDisabled: 'isDisabled-1wLqKupj',
        isActive: 'isActive-2j-GhQs_',
        shortcut: 'shortcut-30pveiCO',
        toolbox: 'toolbox-3ulPxfe-',
        withIcon: 'withIcon-1xBjf-oB',
        icon: 'icon-2Qm7YIcz',
        labelRow: 'labelRow-3Q0rdE8-',
        label: 'label-3Xqxy756',
        showOnHover: 'showOnHover-1q6ySzZc',
      };
    },
    'x0D+': function (e, t, n) {
      var o, r, i;
      (r = [t]),
        void 0 ===
          (i =
            'function' ==
            typeof (o = function (e) {
              'use strict';
              function t(e) {
                if (Array.isArray(e)) {
                  for (var t = 0, n = Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                  return n;
                }
                return Array.from(e);
              }
              Object.defineProperty(e, '__esModule', { value: !0 });
              var n = !1;
              if ('undefined' != typeof window) {
                var o = {
                  get passive() {
                    n = !0;
                  },
                };
                window.addEventListener('testPassive', null, o),
                  window.removeEventListener('testPassive', null, o);
              }
              var r =
                  'undefined' != typeof window &&
                  window.navigator &&
                  window.navigator.platform &&
                  /iP(ad|hone|od)/.test(window.navigator.platform),
                i = [],
                a = !1,
                c = -1,
                l = void 0,
                s = void 0,
                u = function (e) {
                  return i.some(function (t) {
                    return !(
                      !t.options.allowTouchMove || !t.options.allowTouchMove(e)
                    );
                  });
                },
                d = function (e) {
                  var t = e || window.event;
                  return (
                    !!u(t.target) ||
                    1 < t.touches.length ||
                    (t.preventDefault && t.preventDefault(), !1)
                  );
                },
                f = function () {
                  setTimeout(function () {
                    void 0 !== s &&
                      ((document.body.style.paddingRight = s), (s = void 0)),
                      void 0 !== l &&
                        ((document.body.style.overflow = l), (l = void 0));
                  });
                };
              (e.disableBodyScroll = function (e, o) {
                if (r) {
                  if (!e)
                    return void console.error(
                      'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.',
                    );
                  if (
                    e &&
                    !i.some(function (t) {
                      return t.targetElement === e;
                    })
                  ) {
                    var f = { targetElement: e, options: o || {} };
                    (i = [].concat(t(i), [f])),
                      (e.ontouchstart = function (e) {
                        1 === e.targetTouches.length &&
                          (c = e.targetTouches[0].clientY);
                      }),
                      (e.ontouchmove = function (t) {
                        var n, o, r, i;
                        1 === t.targetTouches.length &&
                          ((o = e),
                          (i = (n = t).targetTouches[0].clientY - c),
                          !u(n.target) &&
                            ((o && 0 === o.scrollTop && 0 < i) ||
                            ((r = o) &&
                              r.scrollHeight - r.scrollTop <= r.clientHeight &&
                              i < 0)
                              ? d(n)
                              : n.stopPropagation()));
                      }),
                      a ||
                        (document.addEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0,
                        ),
                        (a = !0));
                  }
                } else {
                  (v = o),
                    setTimeout(function () {
                      if (void 0 === s) {
                        var e = !!v && !0 === v.reserveScrollBarGap,
                          t =
                            window.innerWidth -
                            document.documentElement.clientWidth;
                        e &&
                          0 < t &&
                          ((s = document.body.style.paddingRight),
                          (document.body.style.paddingRight = t + 'px'));
                      }
                      void 0 === l &&
                        ((l = document.body.style.overflow),
                        (document.body.style.overflow = 'hidden'));
                    });
                  var m = { targetElement: e, options: o || {} };
                  i = [].concat(t(i), [m]);
                }
                var v;
              }),
                (e.clearAllBodyScrollLocks = function () {
                  r
                    ? (i.forEach(function (e) {
                        (e.targetElement.ontouchstart = null),
                          (e.targetElement.ontouchmove = null);
                      }),
                      a &&
                        (document.removeEventListener(
                          'touchmove',
                          d,
                          n
                            ? {
                                passive: !1,
                              }
                            : void 0,
                        ),
                        (a = !1)),
                      (i = []),
                      (c = -1))
                    : (f(), (i = []));
                }),
                (e.enableBodyScroll = function (e) {
                  if (r) {
                    if (!e)
                      return void console.error(
                        'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.',
                      );
                    (e.ontouchstart = null),
                      (e.ontouchmove = null),
                      (i = i.filter(function (t) {
                        return t.targetElement !== e;
                      })),
                      a &&
                        0 === i.length &&
                        (document.removeEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0,
                        ),
                        (a = !1));
                  } else
                    1 === i.length && i[0].targetElement === e
                      ? (f(), (i = []))
                      : (i = i.filter(function (t) {
                          return t.targetElement !== e;
                        }));
                });
            })
              ? o.apply(t, r)
              : o) || (e.exports = i);
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
