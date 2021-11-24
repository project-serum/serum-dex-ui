(window.webpackJsonp = window.webpackJsonp || []).push([
  ['currency-label-menu'],
  {
    '9dlw': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return b;
      });
      var o = n('mrSG'),
        r = n('q1tI'),
        c = n.n(r),
        a = n('i8i4'),
        i = n.n(a),
        l = (n('bf9a'), n('AiMB')),
        s = n('DTHj'),
        u = n('X0gx'),
        d = n('8Rai');
      function b(e) {
        var t = e.controller,
          n = e.children,
          a = e.isOpened,
          b = e.closeOnClickOutside,
          p = void 0 === b || b,
          v = e.doNotCloseOn,
          f = e.onClickOutside,
          m = e.onClose,
          h = Object(o.__rest)(e, [
            'controller',
            'children',
            'isOpened',
            'closeOnClickOutside',
            'doNotCloseOn',
            'onClickOutside',
            'onClose',
          ]),
          O = Object(r.useContext)(u.a),
          C = Object(d.a)({
            handler: function (e) {
              f && f(e);
              if (!p) return;
              if (v && e.target instanceof Node) {
                var t = i.a.findDOMNode(v);
                if (t instanceof Node && t.contains(e.target)) return;
              }
              m();
            },
            mouseDown: !0,
            touchStart: !0,
          });
        return a
          ? c.a.createElement(
              l.a,
              {
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                pointerEvents: 'none',
              },
              c.a.createElement(
                'span',
                { ref: C, style: { pointerEvents: 'auto' } },
                c.a.createElement(
                  s.a,
                  Object(o.__assign)({}, h, {
                    isOpened: a,
                    onClose: m,
                    onScroll: function (t) {
                      var n = e.onScroll;
                      n && n(t);
                      t.stopPropagation();
                    },
                    customCloseDelegate: O,
                    ref: t,
                  }),
                  n,
                ),
              ),
            )
          : null;
      }
    },
    FO7Z: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'CurrencyLabelMenu', function () {
          return u;
        }),
        n.d(t, 'showCurrencyLabelMenu', function () {
          return d;
        });
      var o = n('mrSG'),
        r = n('q1tI'),
        c = n('i8i4'),
        a = n('9dlw'),
        i = n('N5tr'),
        l = n('7KDR'),
        s = n('Gwk6'),
        u = (function (e) {
          function t(t) {
            return e.call(this, t) || this;
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype.render = function () {
              return r.createElement(
                a.a,
                {
                  isOpened: !0,
                  onClose: this.props.onClose,
                  doNotCloseOn: this.props.element,
                  position: this.props.position,
                },
                this._menuItems(),
              );
            }),
            (t.prototype._menuItems = function () {
              return this.props.actions.map(function (e, t) {
                return e instanceof l.Separator
                  ? r.createElement('div', {
                      key: 'separator' + t,
                      className: s.currencyLabelMenuSeparator,
                    })
                  : r.createElement(i.b, {
                      key: e.getLabel(),
                      label: e.getLabel(),
                      isActive: e.isChecked(),
                      onClick: function () {
                        return e.execute();
                      },
                    });
              });
            }),
            t
          );
        })(r.PureComponent);
      function d(e, t, n) {
        var o = document.createElement('span');
        (o.className = 'currency-label-menu-wrapper'),
          document.body.appendChild(o);
        var a = function () {
            null !== o &&
              (c.unmountComponentAtNode(o),
              document.body.removeChild(o),
              (o = null));
          },
          i = { actions: e, position: t, element: n, onClose: a };
        return (
          c.render(r.createElement(u, i), o),
          {
            close: a,
            isOpened: function () {
              return null !== o;
            },
          }
        );
      }
    },
    Gwk6: function (e, t, n) {
      e.exports = {
        currencyLabelMenuSeparator: 'currencyLabelMenuSeparator-13pkukWx',
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
        c = n.n(r),
        a = n('TSYQ'),
        i = n('tWVy'),
        l = n('PC8g'),
        s = n('QpNh'),
        u = n('v1bN'),
        d = u;
      function b(e) {
        var t = e.reference,
          n = Object(o.__rest)(e, ['reference']),
          r = Object(o.__assign)(Object(o.__assign)({}, n), { ref: t });
        return c.a.createElement(e.href ? 'a' : 'div', r);
      }
      function p(e) {
        e.stopPropagation();
      }
      function v(e) {
        var t,
          n,
          d,
          v = e.className,
          f = e.title,
          m = e.labelRowClassName,
          h = e.shortcut,
          O = e.forceShowShortcuts,
          C = e.icon,
          k = e.isActive,
          w = e.isDisabled,
          E = e.isHovered,
          g = e.appearAsDisabled,
          j = e.label,
          y = e.link,
          N = e.showToolboxOnHover,
          x = e.target,
          _ = e.toolbox,
          M = e.reference,
          S = e.onMouseOut,
          I = e.onMouseOver,
          D = e.theme,
          A = void 0 === D ? u : D,
          L = Object(s.a)(e),
          R = Object(r.useRef)(null);
        return c.a.createElement(
          b,
          Object(o.__assign)({}, L, {
            className: a(
              v,
              A.item,
              C && A.withIcon,
              ((t = {}),
              (t[A.isActive] = k),
              (t[A.isDisabled] = w || g),
              (t[A.hovered] = E),
              t),
            ),
            title: f,
            href: y,
            target: x,
            reference: function (e) {
              (R.current = e), M && M(e);
            },
            onClick: function (t) {
              var n = e.dontClosePopup,
                o = e.onClick,
                r = e.onClickArg,
                c = e.trackEventObject;
              if (w) return;
              c && Object(l.trackEvent)(c.category, c.event, c.label);
              o && o(r, t);
              n || Object(i.b)();
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
            onMouseOver: I,
            onMouseOut: S,
          }),
          void 0 !== C &&
            c.a.createElement('div', {
              className: A.icon,
              dangerouslySetInnerHTML: { __html: C },
            }),
          c.a.createElement(
            'div',
            { className: a(A.labelRow, m) },
            c.a.createElement('div', { className: A.label }, j),
          ),
          (void 0 !== h || O) &&
            c.a.createElement(
              'div',
              { className: A.shortcut },
              (d = h) && d.split('+').join(' + '),
            ),
          void 0 !== _ &&
            c.a.createElement(
              'div',
              {
                onClick: p,
                className: a(A.toolbox, ((n = {}), (n[A.showOnHover] = N), n)),
              },
              _,
            ),
        );
      }
    },
    X0gx: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var o = n('q1tI'),
        r = n.n(o),
        c = n('tWVy'),
        a = r.a.createContext(c.a);
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
  },
]);
