(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    '+l/S': function (e, t, n) {},
    '02pg': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var a = n('q1tI'),
        r = n('TSYQ'),
        o = n('XiJV');
      function i(e) {
        return a.createElement('div', {
          className: r(o.separator, e.className),
        });
      }
    },
    '2A9e': function (e) {
      e.exports = JSON.parse(
        '{"button":"button-1iktpaT1","content":"content-2PGssb8d","noOutline":"noOutline-d9Yp4qvi","appearance-default":"appearance-default-dMjF_2Hu","intent-primary":"intent-primary-1-IOYcbg","intent-success":"intent-success-25a4XZXM","intent-default":"intent-default-2ZbSqQDs","intent-warning":"intent-warning-24j5HMi0","intent-danger":"intent-danger-1EETHCla","appearance-stroke":"appearance-stroke-12lxiUSM","appearance-text":"appearance-text-DqKJVT3U","appearance-inverse":"appearance-inverse-r1Y2JQg_","size-s":"size-s-3mait84m","size-m":"size-m-2G7L7Qat","size-l":"size-l-2NEs9_xt","size-p":"size-p-3D4rn3v0","full-width":"full-width-1wU8ljjC","with-icon":"with-icon-yumghDr-","icon":"icon-1grlgNdV"}',
      );
    },
    '8NUT': function (e, t, n) {
      e.exports = {
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        footer: 'footer-1mvnCDqp',
        submitButton: 'submitButton-2lNICzl3',
        buttons: 'buttons-3yvtQ_uI',
      };
    },
    ItnF: function (e, t, n) {
      e.exports = {
        dialog: 'dialog-2QwUBM-N',
        wrapper: 'wrapper-3ePvQMAQ',
        separator: 'separator-1L40XQyb',
      };
    },
    XiJV: function (e, t, n) {
      e.exports = { separator: 'separator-1TZB5HZ-' };
    },
    g89m: function (e, t, n) {
      'use strict';
      var a = n('mrSG'),
        r = n('q1tI'),
        o = n.n(r),
        i = n('Eyy1'),
        l = n('TSYQ'),
        s = n.n(l),
        c = n('/3z9'),
        u = n('d700'),
        d = n('WXjp'),
        p = n('02pg'),
        m = n('uhCe'),
        f = n('/KDZ'),
        b = n('pafz'),
        h = n('ZjKI'),
        C = n('FQhm'),
        v = n('Iivm'),
        g = o.a.createContext({ setHideClose: function () {} }),
        w = n('zztK'),
        _ = n('px1m');
      function E(e) {
        var t = e.title,
          n = e.subtitle,
          a = e.showCloseIcon,
          i = void 0 === a || a,
          l = e.onClose,
          c = e.renderBefore,
          u = e.renderAfter,
          d = e.draggable,
          p = Object(r.useState)(!1),
          m = p[0],
          f = p[1];
        return o.a.createElement(
          g.Provider,
          { value: { setHideClose: f } },
          o.a.createElement(
            'div',
            { className: s()(_.container, n && _.unsetAlign) },
            c,
            o.a.createElement(
              'div',
              { 'data-dragg-area': d, className: _.title },
              o.a.createElement('div', { className: _.ellipsis }, t),
              n &&
                o.a.createElement(
                  'div',
                  { className: s()(_.ellipsis, _.subtitle) },
                  n,
                ),
            ),
            u,
            i &&
              !m &&
              o.a.createElement(v.a, {
                className: _.close,
                icon: w,
                onClick: l,
                'data-name': 'close',
                'data-role': 'button',
              }),
          ),
        );
      }
      var N = n('ItnF');
      n.d(t, 'a', function () {
        return x;
      });
      var O = { vertical: 20 },
        y = { vertical: 0 },
        x = (function (e) {
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
                    Object(c.hashFromEvent)(e))
                  ) {
                    case 27:
                      if (e.defaultPrevented) return;
                      if (t.props.forceCloseOnEsc && t.props.forceCloseOnEsc())
                        return void t._handleClose();
                      var n = document.activeElement,
                        a = Object(i.ensureNotNull)(t._reference);
                      if (null !== n) {
                        if ((e.preventDefault(), S(n)))
                          return void t._handleClose();
                        if (Object(u.b)(n)) return void a.focus();
                        if (a.contains(n)) return void t._handleClose();
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
            Object(a.c)(t, e),
            (t.prototype.componentDidMount = function () {
              C.subscribe(
                h.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this._handleClose,
                null,
              );
            }),
            (t.prototype.componentWillUnmount = function () {
              C.unsubscribe(
                h.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this._handleClose,
                null,
              );
            }),
            (t.prototype.focus = function () {
              Object(i.ensureNotNull)(this._reference).focus();
            }),
            (t.prototype.getElement = function () {
              return this._reference;
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.className,
                a = t.isOpened,
                r = t.title,
                i = t.dataName,
                l = t.onClickOutside,
                c = t.additionalElementPos,
                u = t.additionalHeaderElement,
                h = t.backdrop,
                C = t.shouldForceFocus,
                v = void 0 === C || C,
                g = t.showSeparator,
                w = t.subtitle,
                _ = t.draggable,
                x = void 0 === _ || _,
                S = t.fullScreen,
                D = void 0 !== S && S,
                A = t.showCloseIcon,
                F = void 0 === A || A,
                z = t.rounded,
                B = void 0 === z || z,
                T = t.isAnimationEnabled,
                k = t.growPoint,
                I = t.dialogTooltip,
                j = 'after' !== c ? u : void 0,
                K = 'after' === c ? u : void 0;
              return o.a.createElement(
                f.a,
                { rule: m.a.SmallHeight },
                function (t) {
                  return o.a.createElement(
                    f.a,
                    { rule: m.a.TabletSmall },
                    function (c) {
                      return o.a.createElement(
                        d.a,
                        {
                          rounded: !(c || D) && B,
                          className: s()(N.dialog, n),
                          isOpened: a,
                          reference: e._handleReference,
                          onKeyDown: e._handleKeyDown,
                          onClickOutside: l,
                          onClickBackdrop: l,
                          fullscreen: c || D,
                          guard: t ? y : O,
                          boundByScreen: c || D,
                          shouldForceFocus: v,
                          backdrop: h,
                          draggable: x,
                          isAnimationEnabled: T,
                          growPoint: k,
                          name: e.props.dataName,
                          dialogTooltip: I,
                        },
                        o.a.createElement(
                          'div',
                          {
                            className: N.wrapper,
                            'data-name': i,
                            'data-dialog-name': r,
                          },
                          o.a.createElement(E, {
                            draggable: x && !(c || D),
                            onClose: e._handleClose,
                            renderAfter: K,
                            renderBefore: j,
                            subtitle: w,
                            title: r,
                            showCloseIcon: F,
                          }),
                          g &&
                            o.a.createElement(p.a, { className: N.separator }),
                          o.a.createElement(b.a.Consumer, null, function (t) {
                            return e._renderChildren(t, c || D);
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
        })(o.a.PureComponent);
      function S(e) {
        return (
          'true' === e.getAttribute('data-haspopup') &&
          'true' !== e.getAttribute('data-expanded')
        );
      }
    },
    mwqF: function (e, t, n) {
      'use strict';
      var a = n('mrSG'),
        r = n('q1tI'),
        o = n('TSYQ');
      function i(e, t) {
        const {
          intent: n = 'primary',
          size: a = 'm',
          appearance: r = 'default',
          useFullWidth: i = !1,
          tabIndex: l = 0,
          icon: s,
          className: c,
        } = t;
        return o(
          c,
          e.button,
          e['size-' + a],
          e['intent-' + n],
          e['appearance-' + r],
          i && e['full-width'],
          -1 === l && e.noOutline,
          s && 's' !== a && e['with-icon'],
        );
      }
      var l = n('2A9e');
      n('+l/S');
      function s(e) {
        const {
            className: t,
            intent: n,
            size: s,
            appearance: c,
            disabled: u,
            useFullWidth: d,
            reference: p,
            icon: m,
            children: f,
            tabIndex: b,
          } = e,
          h = Object(a.e)(e, [
            'className',
            'intent',
            'size',
            'appearance',
            'disabled',
            'useFullWidth',
            'reference',
            'icon',
            'children',
            'tabIndex',
          ]),
          C = i(l, {
            intent: n,
            size: s,
            appearance: c,
            disabled: u,
            useFullWidth: d,
            tabIndex: b,
            icon: m,
          });
        return r.createElement(
          'button',
          Object.assign(
            { className: o(C, t), disabled: u, ref: p, tabIndex: b },
            h,
          ),
          m && 's' !== s && r.createElement('span', { className: l.icon }, m),
          r.createElement('span', { className: l.content }, f),
        );
      }
      n.d(t, 'a', function () {
        return s;
      });
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
    ycFu: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return f;
      });
      var a = n('mrSG'),
        r = n('q1tI'),
        o = n.n(r),
        i = n('TSYQ'),
        l = n.n(i),
        s = n('mwqF'),
        c = n('Eyy1'),
        u = (n('YFKU'), n('/3z9')),
        d = n('g89m'),
        p = n('8NUT'),
        m = { defaultActionOnClose: 'submit', submitOnEnterKey: !0 },
        f = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._dialogRef = o.a.createRef()),
              (t._handleClose = function () {
                var e = t.props,
                  n = e.defaultActionOnClose,
                  a = e.onSubmit,
                  r = e.onCancel,
                  o = e.onClose;
                switch (n) {
                  case 'submit':
                    a();
                    break;
                  case 'cancel':
                    r();
                }
                o();
              }),
              (t._handleCancel = function () {
                t.props.onCancel(), t.props.onClose();
              }),
              (t._handleKeyDown = function (e) {
                var n = t.props,
                  a = n.onSubmit,
                  r = n.submitButtonDisabled,
                  o = n.submitOnEnterKey;
                switch (Object(u.hashFromEvent)(e)) {
                  case 13:
                    !r && o && (e.preventDefault(), a());
                }
              }),
              t
            );
          }
          return (
            Object(a.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t =
                  (e.render,
                  e.onClose,
                  e.onSubmit,
                  e.onCancel,
                  e.footerLeftRenderer,
                  e.submitButtonText,
                  e.submitButtonDisabled,
                  e.defaultActionOnClose,
                  e.submitOnEnterKey,
                  Object(a.e)(e, [
                    'render',
                    'onClose',
                    'onSubmit',
                    'onCancel',
                    'footerLeftRenderer',
                    'submitButtonText',
                    'submitButtonDisabled',
                    'defaultActionOnClose',
                    'submitOnEnterKey',
                  ]));
              return o.a.createElement(
                d.a,
                Object(a.a)({}, t, {
                  ref: this._dialogRef,
                  onKeyDown: this._handleKeyDown,
                  render: this._renderChildren(),
                  onClose: this._handleClose,
                }),
              );
            }),
            (t.prototype.focus = function () {
              Object(c.ensureNotNull)(this._dialogRef.current).focus();
            }),
            (t.prototype._renderChildren = function () {
              var e = this;
              return function (t) {
                var n = e.props,
                  a = n.render,
                  r = n.footerLeftRenderer,
                  i = n.additionalButtons,
                  c = n.submitButtonText,
                  u = n.submitButtonDisabled,
                  d = n.onSubmit,
                  m = n.cancelButtonText,
                  f = n.showCancelButton,
                  b = void 0 === f || f,
                  h = n.submitButtonClassName,
                  C = n.cancelButtonClassName,
                  v = n.buttonsWrapperClassName;
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  a(t),
                  o.a.createElement(
                    'div',
                    { className: p.footer },
                    r && r(t.isSmallWidth),
                    o.a.createElement(
                      'div',
                      { className: l()(p.buttons, v) },
                      i,
                      b &&
                        o.a.createElement(
                          s.a,
                          {
                            className: C,
                            name: 'cancel',
                            appearance: 'stroke',
                            onClick: e._handleCancel,
                          },
                          null != m ? m : window.t('Cancel'),
                        ),
                      o.a.createElement(
                        'span',
                        { className: p.submitButton },
                        o.a.createElement(
                          s.a,
                          {
                            className: h,
                            disabled: u,
                            name: 'submit',
                            onClick: d,
                          },
                          null != c ? c : window.t('Ok'),
                        ),
                      ),
                    ),
                  ),
                );
              };
            }),
            (t.defaultProps = m),
            t
          );
        })(o.a.PureComponent);
    },
    zztK: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="none"><path stroke="currentColor" stroke-width="1.2" d="M1 1l15 15m0-15L1 16"/></svg>';
    },
  },
]);
