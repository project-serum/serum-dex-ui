(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    '0W35': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = n('mrSG');
      o.__exportStar(n('OGHR'), t), o.__exportStar(n('O6kz'), t);
    },
    '8NUT': function (e, t, n) {
      e.exports = {
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        footer: 'footer-1mvnCDqp',
        submitButton: 'submitButton-2lNICzl3',
        buttons: 'buttons-3yvtQ_uI',
      };
    },
    E9Pn: function (e, t, n) {},
    O6kz: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = n('mrSG'),
        r = n('q1tI'),
        s = n('17x9');
      t.makeSwitchGroupItem = function (e) {
        var t;
        return (
          ((t = (function (t) {
            function n() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e._onChange = function (t) {
                  e.context.switchGroupContext.getOnChange()(t);
                }),
                (e._onUpdate = function (t) {
                  t.includes(e.props.value) && e.forceUpdate();
                }),
                e
              );
            }
            return (
              o.__extends(n, t),
              (n.prototype.componentDidMount = function () {
                this.context.switchGroupContext.subscribe(this._onUpdate);
              }),
              (n.prototype.render = function () {
                return r.createElement(
                  e,
                  o.__assign({}, this.props, {
                    name: this._getName(),
                    onChange: this._onChange,
                    checked: this._isChecked(),
                  }),
                );
              }),
              (n.prototype.componentWillUnmount = function () {
                this.context.switchGroupContext.unsubscribe(this._onUpdate);
              }),
              (n.prototype._getName = function () {
                return this.context.switchGroupContext.getName();
              }),
              (n.prototype._isChecked = function () {
                return this.context.switchGroupContext
                  .getValues()
                  .includes(this.props.value);
              }),
              n
            );
          })(r.PureComponent)).contextTypes = {
            switchGroupContext: s.any.isRequired,
          }),
          t
        );
      };
    },
    OGHR: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = n('mrSG'),
        r = n('q1tI'),
        s = n('17x9'),
        i = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._subscriptions = new Set()),
              (t._getName = function () {
                return t.props.name;
              }),
              (t._getValues = function () {
                return t.props.values;
              }),
              (t._getOnChange = function () {
                return t.props.onChange;
              }),
              (t._subscribe = function (e) {
                t._subscriptions.add(e);
              }),
              (t._unsubscribe = function (e) {
                t._subscriptions.delete(e);
              }),
              t
            );
          }
          return (
            o.__extends(t, e),
            (t.prototype.getChildContext = function () {
              return {
                switchGroupContext: {
                  getName: this._getName,
                  getValues: this._getValues,
                  getOnChange: this._getOnChange,
                  subscribe: this._subscribe,
                  unsubscribe: this._unsubscribe,
                },
              };
            }),
            (t.prototype.render = function () {
              return this.props.children;
            }),
            (t.prototype.componentDidUpdate = function (e) {
              this._notify(this._getUpdates(this.props.values, e.values));
            }),
            (t.prototype._notify = function (e) {
              this._subscriptions.forEach(function (t) {
                return t(e);
              });
            }),
            (t.prototype._getUpdates = function (e, t) {
              return o.__spreadArrays(t, e).filter(function (n) {
                return t.includes(n) ? !e.includes(n) : e.includes(n);
              });
            }),
            (t.childContextTypes = { switchGroupContext: s.any.isRequired }),
            t
          );
        })(r.PureComponent);
      t.SwitchGroup = i;
    },
    'R4+T': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>';
    },
    Zzxg: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = n('mrSG'),
        r = n('q1tI'),
        s = n('TSYQ'),
        i = n('0W35'),
        a = n('Iivm'),
        u = n('aJjg'),
        c = n('qibD');
      n('E9Pn');
      var p = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t._onChange = function () {
              t.props.onChange && t.props.onChange(t.props.value);
            }),
            t
          );
        }
        return (
          o.__extends(t, e),
          (t.prototype.render = function () {
            var e,
              t,
              n,
              o = s(
                this.props.className,
                c.checkbox,
                (((e = {})[c.reverse] = Boolean(
                  this.props.labelPositionReverse,
                )),
                (e[c.baseline] = Boolean(this.props.labelAlignBaseline)),
                e),
              ),
              i = s(
                c.box,
                (((t = {})[c.check] = !Boolean(this.props.indeterminate)),
                (t[c.dot] = Boolean(this.props.indeterminate)),
                (t[c.noOutline] = -1 === this.props.tabIndex),
                t),
              ),
              p = s(c.label, (((n = {})[c.disabled] = this.props.disabled), n)),
              l = null;
            return (
              this.props.label &&
                (l = r.createElement(
                  'span',
                  { className: p },
                  this.props.label,
                )),
              r.createElement(
                'label',
                { className: o },
                r.createElement(
                  'div',
                  { className: c.wrapper, title: this.props.title },
                  r.createElement('input', {
                    id: this.props.id,
                    tabIndex: this.props.tabIndex,
                    className: c.input,
                    type: 'checkbox',
                    name: this.props.name,
                    checked: this.props.checked,
                    disabled: this.props.disabled,
                    value: this.props.value,
                    autoFocus: this.props.autoFocus,
                    role: this.props.role,
                    onChange: this._onChange,
                    ref: this.props.reference,
                  }),
                  r.createElement(
                    'div',
                    { className: i },
                    r.createElement(a.Icon, { icon: u, className: c.icon }),
                  ),
                ),
                l,
              )
            );
          }),
          (t.defaultProps = { value: 'on' }),
          t
        );
      })(r.PureComponent);
      (t.Checkbox = p), (t.GroupedCheckbox = i.makeSwitchGroupItem(p));
    },
    aJjg: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9" fill="none"><path stroke-width="2" d="M0.999878 4L3.99988 7L9.99988 1"/></svg>';
    },
    fV0y: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        n('mrSG').__exportStar(n('Zzxg'), t);
    },
    qibD: function (e) {
      e.exports = JSON.parse(
        '{"checkbox":"checkbox-3xZUD-2M","input":"input-ly-CSnj5","box":"box-20C92a5S","reverse":"reverse-3xeTx96y","label":"label-cyItEVpF","baseline":"baseline-6TXKro4X","wrapper":"wrapper-1AZBBaMW","icon":"icon-3dOOKDQo","noOutline":"noOutline-3wgQ5xZI","check":"check-13mv3fTM","dot":"dot-3FRmUbXl"}',
      );
    },
    ycFu: function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return o;
      }),
        n.d(t, 'a', function () {
          return d;
        });
      var o,
        r = n('mrSG'),
        s = n('q1tI'),
        i = n.n(s),
        a = n('mwqF'),
        u = n('Eyy1'),
        c = (n('YFKU'), n('/3z9')),
        p = n('g89m'),
        l = n('8NUT');
      !(function (e) {
        (e.Submit = 'submit'), (e.Cancel = 'cancel'), (e.None = 'none');
      })(o || (o = {}));
      var h = { defaultActionOnClose: o.Submit, submitOnEnterKey: !0 },
        d = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._dialogRef = i.a.createRef()),
              (t._handleClose = function () {
                var e = t.props,
                  n = e.defaultActionOnClose,
                  r = e.onSubmit,
                  s = e.onCancel,
                  i = e.onClose;
                switch (n) {
                  case o.Submit:
                    r();
                    break;
                  case o.Cancel:
                    s();
                }
                i();
              }),
              (t._handleCancel = function () {
                t.props.onCancel(), t.props.onClose();
              }),
              (t._handleKeyDown = function (e) {
                var n = t.props,
                  o = n.onSubmit,
                  r = n.submitButtonDisabled,
                  s = n.submitOnEnterKey;
                switch (Object(c.hashFromEvent)(e)) {
                  case 13:
                    !r && s && (e.preventDefault(), o());
                }
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
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
                  Object(r.__rest)(e, [
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
              return i.a.createElement(
                p.a,
                Object(r.__assign)({}, t, {
                  ref: this._dialogRef,
                  onKeyDown: this._handleKeyDown,
                  render: this._renderChildren(),
                  onClose: this._handleClose,
                }),
              );
            }),
            (t.prototype.focus = function () {
              Object(u.ensureNotNull)(this._dialogRef.current).focus();
            }),
            (t.prototype._renderChildren = function () {
              var e = this;
              return function (t) {
                var n = e.props,
                  o = n.render,
                  r = n.footerLeftRenderer,
                  s = n.additionalButtons,
                  u = n.submitButtonText,
                  c = n.submitButtonDisabled,
                  p = n.onSubmit;
                return i.a.createElement(
                  i.a.Fragment,
                  null,
                  o(t),
                  i.a.createElement(
                    'div',
                    { className: l.footer },
                    r && r(t.isSmallWidth),
                    i.a.createElement(
                      'div',
                      { className: l.buttons },
                      s,
                      i.a.createElement(
                        a.Button,
                        {
                          name: 'cancel',
                          appearance: 'stroke',
                          onClick: e._handleCancel,
                        },
                        window.t('Cancel'),
                      ),
                      i.a.createElement(
                        'span',
                        { className: l.submitButton },
                        i.a.createElement(
                          a.Button,
                          { disabled: c, name: 'submit', onClick: p },
                          u || window.t('Ok'),
                        ),
                      ),
                    ),
                  ),
                );
              };
            }),
            (t.defaultProps = h),
            t
          );
        })(i.a.PureComponent);
    },
  },
]);
