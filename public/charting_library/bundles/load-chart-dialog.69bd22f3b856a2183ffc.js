(window.webpackJsonp = window.webpackJsonp || []).push([
  ['load-chart-dialog'],
  {
    '8h+f': function (e, t, n) {
      e.exports = {
        container: 'container-3zkaVfyb',
        list: 'list-2s_2firj',
        overlayScrollWrap: 'overlayScrollWrap-2wJ_ktRm',
        scroll: 'scroll-2iY-wzg_',
      };
    },
    EgWQ: function (e, t, n) {
      'use strict';
      n.r(t);
      var o = n('mrSG'),
        r = n('q1tI'),
        i = n.n(r),
        a = n('i8i4'),
        c = n('Eyy1'),
        l = n('YFKU'),
        s = n('Vdly'),
        u = n('qFKp'),
        d = n('g89m'),
        m = n('TSYQ'),
        f = n.n(m),
        v = n('9dlw'),
        h = n('Iksw'),
        b = n('Iivm'),
        g = n('e5nO'),
        p = n('UjII'),
        E = n('HjiN');
      function S(e) {
        var t = e.sortDirection,
          n = e.children,
          a = Object(o.e)(e, ['sortDirection', 'children']),
          c = Object(r.useRef)(null),
          l = Object(r.useState)(!1),
          s = l[0],
          u = l[1];
        return i.a.createElement(
          'div',
          Object(o.a)({}, a, {
            ref: c,
            className: m(
              E.sortButton,
              'apply-common-tooltip',
              'common-tooltip-vertical',
            ),
            onClick: function () {
              u(!s);
            },
          }),
          i.a.createElement(b.a, { className: E.icon, icon: 0 === t ? g : p }),
          i.a.createElement(
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
        j = n('H2qI');
      function w(e) {
        var t = e.label,
          n = e.listSortField,
          i = e.itemSortField,
          a = e.listSortDirection,
          c = e.itemSortDirection,
          l = e.onClick,
          s = e.className,
          u = Object(o.e)(e, [
            'label',
            'listSortField',
            'itemSortField',
            'listSortDirection',
            'itemSortDirection',
            'onClick',
            'className',
          ]),
          d = i === n && c === a;
        return r.createElement(
          O.b,
          Object(o.a)({}, u, {
            className: m(j.container, s),
            label: r.createElement(
              'div',
              { className: j.labelWrap },
              r.createElement(b.a, {
                className: j.icon,
                icon: 0 === c ? g : p,
              }),
              r.createElement('span', { className: j.text }, t),
            ),
            isActive: d,
            onClick: function () {
              l(i, c);
            },
            'data-active': d.toString(),
            'data-sort-field': i,
            'data-sort-direction': 0 === c ? 'asc' : 'desc',
          }),
        );
      }
      var C = n('QHWU'),
        y = n('IePd');
      function D(e) {
        var t = e.children,
          n = e.className;
        return i.a.createElement('div', { className: f()(y.container, n) }, t);
      }
      function F(e) {
        var t = e.title;
        return i.a.createElement('div', { className: y.title }, t);
      }
      var N = n('ivNn');
      var k = n('iR1w'),
        T = n('cvc5'),
        x = n.n(T),
        I = n('Ialn'),
        L = n('9S1y'),
        R = n('n9z6');
      var M = n('0lNN'),
        B = n('8h+f');
      function A(e) {
        var t = e.className,
          n = e.onScroll,
          a = e.onTouchStart,
          c = e.reference,
          l = e.children,
          s = e.scrollbar,
          d = Object(o.e)(e, [
            'className',
            'onScroll',
            'onTouchStart',
            'reference',
            'children',
            'scrollbar',
          ]),
          m = Object(L.a)(),
          v = m[0],
          h = m[1],
          b = Object(R.a)(),
          g = b[0],
          p = b[1],
          E = b[2],
          S = b[3];
        return (
          Object(r.useEffect)(function () {
            var e = function () {};
            return u.isFF
              ? (document.addEventListener('wheel', function () {
                  return e;
                }),
                function () {
                  document.removeEventListener('wheel', e);
                })
              : e;
          }, []),
          i.a.createElement(
            x.a,
            { onMeasure: v },
            i.a.createElement(
              'div',
              Object(o.a)({}, 'overlay' === s && p, {
                className: f()(B.container, t),
                onTouchStart: a,
                onScroll: n,
              }),
              'overlay' === s &&
                i.a.createElement(
                  M.a,
                  Object(o.a)({}, g, { className: B.overlayScrollWrap }),
                ),
              i.a.createElement(
                k.a,
                Object(o.a)(
                  {
                    ref: c,
                    className: f()('native' === s ? B.scroll : B.list),
                    outerRef: 'overlay' === s ? E : void 0,
                    onItemsRendered: S,
                    layout: 'vertical',
                    width: '100%',
                    height: (null == h ? void 0 : h.height) || 0,
                    children: l,
                    direction: Object(I.isRtl)() ? 'rtl' : 'ltr',
                  },
                  d,
                ),
              ),
            ),
          )
        );
      }
      var z = n('ldgD'),
        W = n.n(z),
        Y = n('mNbo');
      var K = n('gM3K'),
        U = n('pPtI'),
        _ = n('+EG+'),
        H = n('fZEr');
      var J = Object(l.t)("Do you really want to delete Chart Layout '{0}' ?");
      function Q(e) {
        var t;
        try {
          t = Object(U.getTranslatedResolution)(e);
        } catch (n) {
          t = e;
        }
        return t;
      }
      function V(e) {
        var t = e.chart,
          n = e.chartWidgetCollection,
          a = (e.trackEvent, e.localFavorites),
          c = (e.onClose, e.searchString),
          l = e.onClickRemove,
          s = e.onRemoveCanceled,
          u = e.isSelected,
          d = Object(r.useState)(function () {
            return t.active();
          }),
          m = d[0],
          f = d[1],
          v = (function (e) {
            var t = e.chartId ? '/chart/' + e.chartId + '/' : '/chart/',
              n = new URL(t, location.href);
            return (
              e.symbol && n.searchParams.append('symbol', e.symbol),
              e.interval && n.searchParams.append('interval', e.interval),
              e.style && n.searchParams.append('style', e.style),
              Object(Y.b)(n.href)
            );
          })({ chartId: t.url }),
          h = Object(r.useContext)(_.b);
        return (
          Object(r.useEffect)(function () {
            return (
              n && n.metaInfo.id.subscribe(g),
              function () {
                n && n.metaInfo.id.unsubscribe(g);
              }
            );
          }, []),
          i.a.createElement(K.a, {
            url: v,
            title: i.a.createElement(K.b, {
              searchString: c,
              isActive: m,
              text: t.title,
            }),
            subtitle: i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(K.b, {
                searchString: c,
                isActive: m,
                text: t.symbol,
              }),
              ', ',
              i.a.createElement(K.b, {
                searchString: c,
                isActive: m,
                text: Q(t.interval),
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
              var e = Object(o.a)({}, a);
              e[t.id] ? delete e[t.id] : (e[t.id] = !0);
              t.favoriteAction(e);
            },
            onClickRemove: function () {
              !(function (e, t, n, o) {
                Object(H.a)(
                  {
                    text: e,
                    onConfirm: function (e) {
                      var n = e.dialogClose;
                      t(), n();
                    },
                    onClose: function () {
                      n();
                    },
                  },
                  o,
                );
              })(J.format(t.title), b, s, h);
            },
            isFavorite: Boolean(a[t.id]),
            isActive: m,
            isSelected: u,
            'data-name': 'load-chart-dialog-item',
          })
        );
        function b() {
          t.deleteAction().then(function () {
            return l(t.id);
          });
        }
        function g(e) {
          f(t.id === e);
        }
      }
      var q = n('tWVy'),
        P = n('/3z9');
      var Z,
        G,
        X,
        $,
        ee,
        te = n('YCUu'),
        ne = { sortField: 'modified', sortDirection: 1 },
        oe =
          ((G = (Z = { paddingBottom: 6 }).paddingTop),
          (X = void 0 === G ? 0 : G),
          ($ = Z.paddingBottom),
          (ee = void 0 === $ ? 0 : $),
          Object(r.forwardRef)(function (e, t) {
            var n = e.style,
              r = Object(o.e)(e, ['style']),
              a = n.height,
              c = void 0 === a ? 0 : a;
            return i.a.createElement(
              'div',
              Object(o.a)(
                {
                  ref: t,
                  style: Object(o.a)(Object(o.a)({}, n), {
                    height:
                      (Object(N.isNumber)(c) ? c : parseFloat(c)) +
                      X +
                      ee +
                      'px',
                  }),
                },
                r,
              ),
            );
          }));
      function re(e) {
        var t = e.charts,
          n = e.onClose,
          a = e.favoriteChartsService,
          l = e.chartWidgetCollection,
          m = Object(r.useState)(''),
          f = m[0],
          v = m[1],
          h = Object(r.useState)(f),
          b = h[0],
          g = h[1],
          p = Object(r.useState)([]),
          E = p[0],
          O = p[1],
          j = Object(r.useRef)(null),
          y = Object(r.useState)(function () {
            return a.get();
          }),
          N = y[0],
          k = y[1],
          T = Object(r.useState)(function () {
            return s.getJSON('loadChartDialog.viewState', ne);
          }),
          x = T[0],
          I = T[1],
          L = Object(r.useRef)(null),
          R = Object(r.useRef)(null);
        Object(r.useEffect)(function () {
          u.CheckMobile.any() || Object(c.ensureNotNull)(L.current).focus();
        }, []);
        var M = Object(r.useRef)();
        Object(r.useEffect)(
          function () {
            return (
              (M.current = setTimeout(function () {
                v(b);
              }, 300)),
              function () {
                clearTimeout(M.current);
              }
            );
          },
          [b],
        ),
          Object(r.useEffect)(function () {
            return (
              a.getOnChange().subscribe(null, G),
              function () {
                a.getOnChange().unsubscribe(null, G);
              }
            );
          }, []);
        var B = Object(r.useCallback)(function () {
            return !0;
          }, []),
          z = Object(r.useMemo)(
            function () {
              return Object(o.f)(t)
                .sort(
                  ((e = x.sortDirection),
                  function (t, n) {
                    if (N[t.id] && !N[n.id]) return -1;
                    if (!N[t.id] && N[n.id]) return 1;
                    var o = 0 === e ? 1 : -1;
                    return 'modified' === x.sortField
                      ? o * (t.modified - n.modified)
                      : o * t.title.localeCompare(n.title);
                  }),
                )
                .filter(function (e) {
                  return (
                    !E.includes(e.id) &&
                    ($(e.title) || $(e.symbol) || $(Q(e.interval)))
                  );
                });
              var e;
            },
            [f, x, E, N],
          ),
          W = (function (e, t, n) {
            var o = Object(r.useState)(-1),
              i = o[0],
              a = o[1];
            return (
              Object(r.useEffect)(
                function () {
                  var e;
                  -1 !== i &&
                    (null === (e = n.current) ||
                      void 0 === e ||
                      e.scrollToItem(i));
                },
                [i],
              ),
              {
                selectedItemIndex: i,
                setSelectedItemIndex: a,
                handleKeyboardSelection: function (n) {
                  switch (Object(P.hashFromEvent)(n)) {
                    case 40:
                      if (i === e - 1) return;
                      a(i + 1);
                      break;
                    case 38:
                      if (0 === i) return;
                      if (-1 === i) return void a(i + 1);
                      a(i - 1);
                      break;
                    case 13:
                      t(n);
                  }
                },
              }
            );
          })(
            z.length,
            function (e) {
              var t = z[Y];
              if (-1 === Y || !t) return;
              0;
              t.openAction(), !1;
            },
            R,
          ),
          Y = W.selectedItemIndex,
          K = W.setSelectedItemIndex,
          U = W.handleKeyboardSelection;
        return i.a.createElement(d.a, {
          ref: j,
          onClose: n,
          onClickOutside: n,
          onKeyDown: U,
          isOpened: !0,
          className: te.dialog,
          title: window.t('Load layout'),
          dataName: 'load-layout-dialog',
          render: function () {
            return i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(C.a, {
                reference: L,
                onChange: H,
                placeholder: window.t('Search'),
              }),
              i.a.createElement(
                D,
                null,
                i.a.createElement(F, { title: window.t('Layout name') }),
                i.a.createElement(
                  S,
                  {
                    sortDirection: x.sortDirection,
                    title: window.t('Sort by layout name, date changed'),
                    'data-name': 'load-chart-dialog-sort-button',
                  },
                  i.a.createElement(w, {
                    label: window.t('Layout name (A to Z)'),
                    listSortField: x.sortField,
                    itemSortField: 'title',
                    listSortDirection: x.sortDirection,
                    itemSortDirection: 0,
                    onClick: ee,
                    'data-name': 'load-chart-dialog-sort-menu-item',
                  }),
                  i.a.createElement(w, {
                    label: window.t('Layout name (Z to A)'),
                    listSortField: x.sortField,
                    itemSortField: 'title',
                    listSortDirection: x.sortDirection,
                    itemSortDirection: 1,
                    onClick: ee,
                    'data-name': 'load-chart-dialog-sort-menu-item',
                  }),
                  i.a.createElement(w, {
                    label: window.t('Date modified (oldest first)'),
                    listSortField: x.sortField,
                    itemSortField: 'modified',
                    listSortDirection: x.sortDirection,
                    itemSortDirection: 0,
                    onClick: ee,
                    'data-name': 'load-chart-dialog-sort-menu-item',
                  }),
                  i.a.createElement(w, {
                    label: window.t('Date modified (newest first)'),
                    listSortField: x.sortField,
                    itemSortField: 'modified',
                    listSortDirection: x.sortDirection,
                    itemSortDirection: 1,
                    onClick: ee,
                    'data-name': 'load-chart-dialog-sort-menu-item',
                  }),
                ),
              ),
              i.a.createElement(A, {
                scrollbar: 'native',
                reference: R,
                itemCount: z.length,
                itemSize: 52,
                className: te.contentList,
                onScroll: _,
                innerElementType: oe,
                itemKey: function (e) {
                  return (N[z[e].id] ? 'f_' : '') + z[e].id;
                },
                children: function (e) {
                  var t = e.style,
                    o = e.index;
                  return i.a.createElement(
                    'div',
                    { style: t },
                    i.a.createElement(V, {
                      chart: z[o],
                      onClose: n,
                      chartWidgetCollection: l,
                      trackEvent: J,
                      onRemoveCanceled: X,
                      localFavorites: N,
                      searchString: f,
                      onClickRemove: Z,
                      isSelected: o === Y,
                    }),
                  );
                },
              }),
            );
          },
          forceCloseOnEsc: B,
        });
        function _() {
          q.a.fire();
        }
        function H(e) {
          var t = e.currentTarget.value;
          g(t), K(-1);
        }
        function J(e) {
          0;
        }
        function Z(e) {
          O(Object(o.f)([e], E));
        }
        function G(e) {
          k(e);
        }
        function X() {
          Object(c.ensureNotNull)(j.current).focus();
        }
        function $(e) {
          return e.toLowerCase().includes(f.toLowerCase());
        }
        function ee(e, t) {
          var n = { sortField: e, sortDirection: t };
          I(n),
            s.setValue('loadChartDialog.viewState', JSON.stringify(n), {
              forceFlush: !0,
            }),
            J();
        }
      }
      var ie = n('sQaR');
      n.d(t, 'LoadChartDialogRenderer', function () {
        return ae;
      });
      var ae = (function (e) {
        function t(t) {
          var n = e.call(this) || this;
          return (n._options = t), n;
        }
        return (
          Object(o.c)(t, e),
          (t.prototype.show = function () {
            var e = this;
            a.render(
              r.createElement(
                re,
                Object(o.a)({}, this._options, {
                  onClose: function () {
                    return e.hide();
                  },
                }),
              ),
              this._container,
            ),
              this._setVisibility(!0);
          }),
          (t.prototype.hide = function () {
            a.unmountComponentAtNode(this._container), this._setVisibility(!1);
          }),
          t
        );
      })(ie.a);
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
            m = void 0 === d ? l.verticalAttachEdge : d,
            f = t.verticalDropDirection,
            v = void 0 === f ? l.verticalDropDirection : f,
            h = t.horizontalAttachEdge,
            b = void 0 === h ? l.horizontalAttachEdge : h,
            g = t.horizontalDropDirection,
            p = void 0 === g ? l.horizontalDropDirection : g,
            E = t.horizontalMargin,
            S = void 0 === E ? l.horizontalMargin : E,
            O = t.verticalMargin,
            j = void 0 === O ? l.verticalMargin : O,
            w = m === o.Top ? -1 * j : j,
            C = b === r.Right ? u.right : u.left,
            y = m === o.Top ? u.top : u.bottom;
          return {
            x: C - (p === a.FromRightToLeft ? n : 0) + S,
            y: y - (v === i.FromBottomToTop ? s : 0) + w,
          };
        };
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
      var o = n('mrSG'),
        r = n('q1tI'),
        i = n.n(r),
        a = n('TSYQ'),
        c = n.n(a),
        l = n('YFKU'),
        s = n('Iivm'),
        u = n('hYdZ'),
        d = n('MyWJ');
      function m(e) {
        var t = e.children,
          n = e.renderInput,
          r = e.onCancel,
          a = Object(o.e)(e, ['children', 'renderInput', 'onCancel']);
        return i.a.createElement(
          'div',
          { className: d.container },
          i.a.createElement(
            'div',
            { className: c()(d.inputContainer, r && d.withCancel) },
            n || i.a.createElement(f, Object(o.a)({}, a)),
          ),
          t,
          i.a.createElement(s.a, { className: d.icon, icon: u }),
          r &&
            i.a.createElement(
              'div',
              { className: d.cancel, onClick: r },
              Object(l.t)('Cancel'),
            ),
        );
      }
      function f(e) {
        var t = e.className,
          n = e.reference,
          r = e.value,
          a = e.onChange,
          l = e.onFocus,
          s = e.onBlur,
          u = e.onKeyDown,
          m = e.onSelect,
          f = e.placeholder,
          v = Object(o.e)(e, [
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
          Object(o.a)({}, v, {
            ref: n,
            type: 'text',
            className: c()(t, d.input),
            autoComplete: 'off',
            'data-role': 'search',
            placeholder: f,
            value: r,
            onChange: a,
            onFocus: l,
            onBlur: s,
            onSelect: m,
            onKeyDown: u,
          }),
        );
      }
    },
    QpNh: function (e, t, n) {
      'use strict';
      function o(e) {
        for (
          var t = {}, n = 0, o = Object.entries(e).filter(r);
          n < o.length;
          n++
        ) {
          var i = o[n],
            a = i[0],
            c = i[1];
          t[a] = c;
        }
        return t;
      }
      function r(e) {
        var t = e[0],
          n = e[1];
        return 0 === t.indexOf('data-') && 'string' == typeof n;
      }
      n.d(t, 'a', function () {
        return o;
      });
    },
    R5JZ: function (e, t, n) {
      'use strict';
      function o(e, t, n, o, r) {
        function i(r) {
          if (!(e > r.timeStamp)) {
            var i = r.target;
            void 0 !== n &&
              null !== t &&
              null !== i &&
              i.ownerDocument === o &&
              (t.contains(i) || n(r));
          }
        }
        return (
          r.click && o.addEventListener('click', i, !1),
          r.mouseDown && o.addEventListener('mousedown', i, !1),
          r.touchEnd && o.addEventListener('touchend', i, !1),
          r.touchStart && o.addEventListener('touchstart', i, !1),
          function () {
            o.removeEventListener('click', i, !1),
              o.removeEventListener('mousedown', i, !1),
              o.removeEventListener('touchend', i, !1),
              o.removeEventListener('touchstart', i, !1);
          }
        );
      }
      n.d(t, 'a', function () {
        return o;
      });
    },
    UjII: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 18.5h-3M21.5 13.5h-5M23.5 8.5h-7M8.5 7v13.5M4.5 16.5l4 4 4-4"/></svg>';
    },
    YCUu: function (e, t, n) {
      e.exports = {
        dialog: 'dialog-1M68axew',
        contentList: 'contentList-VpXJB1aY',
      };
    },
    e5nO: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 18.5h-3M21.5 13.5h-5M23.5 8.5h-7M8.5 20.5V7M12.5 11l-4-4-4 4"/></svg>';
    },
    hYdZ: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path stroke="currentColor" d="M12.4 12.5a7 7 0 1 0-4.9 2 7 7 0 0 0 4.9-2zm0 0l5.101 5"/></svg>';
    },
  },
]);
