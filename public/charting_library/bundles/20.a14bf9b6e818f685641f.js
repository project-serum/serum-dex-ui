(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    'Db/h': function (t, e, o) {
      t.exports = {
        errors: 'errors-C3KBJakt',
        show: 'show-2G4PY7Uu',
        error: 'error-3G4k6KUC',
      };
    },
    kSQs: function (t, e, o) {
      'use strict';
      var r = o('mrSG'),
        i = o('q1tI'),
        s = o('TSYQ'),
        n = o('uqKQ'),
        h = o('i8i4');
      var a = o('Db/h'),
        p = o('Ialn');
      o.d(e, 'a', function () {
        return u;
      });
      var c,
        l,
        d = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(e, t),
            (e.prototype.render = function () {
              var t,
                e = this.props,
                o = e.children,
                n = void 0 === o ? [] : o,
                h = e.show,
                c = void 0 !== h && h,
                l = e.customErrorClass,
                d = s(a.errors, (((t = {})[a.show] = c), t), l),
                u = n.map(function (t, e) {
                  return i.createElement(
                    'div',
                    { className: a.error, key: e },
                    t,
                  );
                }),
                m = {
                  position: 'absolute',
                  top: this.props.top,
                  width: this.props.width,
                  height: this.props.height,
                  bottom:
                    void 0 !== this.props.bottom ? this.props.bottom : '100%',
                  right: void 0 !== this.props.right ? this.props.right : 0,
                  left: this.props.left,
                  zIndex: this.props.zIndex,
                  maxWidth: this.props.maxWidth,
                };
              if (Object(p.isRtl)()) {
                var f = m.left,
                  g = m.right;
                m = Object(r.__assign)(Object(r.__assign)({}, m), {
                  left: g,
                  right: f,
                });
              }
              return i.createElement('div', { style: m, className: d }, u);
            }),
            e
          );
        })(i.PureComponent),
        u = Object(n.a)(
          ((c = d),
          ((l = (function (t) {
            function e(e) {
              var o = t.call(this, e) || this;
              return (
                (o._getComponentInstance = function (t) {
                  o._instance = t;
                }),
                (o._throttleCalcProps = function () {
                  requestAnimationFrame(function () {
                    return o.setState(o._calcProps(o.props));
                  });
                }),
                (o.state = o._getStateFromProps()),
                o
              );
            }
            return (
              Object(r.__extends)(e, t),
              (e.prototype.componentDidMount = function () {
                (this._instanceElem = h.findDOMNode(this._instance)),
                  this.props.attachOnce || this._subscribe(),
                  this.setState(this._calcProps(this.props));
              }),
              (e.prototype.componentDidUpdate = function (t) {
                var e = this;
                (t.children === this.props.children &&
                  t.top === this.props.top &&
                  t.left === this.props.left &&
                  t.width === this.props.width) ||
                  this.setState(this._getStateFromProps(), function () {
                    return e.setState(e._calcProps(e.props));
                  });
              }),
              (e.prototype.render = function () {
                return i.createElement(
                  'div',
                  {
                    style: {
                      position: 'absolute',
                      width: '100%',
                      top: 0,
                      left: 0,
                    },
                  },
                  i.createElement(
                    c,
                    Object(r.__assign)({}, this.props, {
                      ref: this._getComponentInstance,
                      top: this.state.top,
                      bottom:
                        void 0 !== this.state.bottom
                          ? this.state.bottom
                          : 'auto',
                      right:
                        void 0 !== this.state.right ? this.state.right : 'auto',
                      left: this.state.left,
                      width: this.state.width,
                      maxWidth: this.state.maxWidth,
                    }),
                    this.props.children,
                  ),
                );
              }),
              (e.prototype.componentWillUnmount = function () {
                this._unsubsribe();
              }),
              (e.prototype._getStateFromProps = function () {
                return {
                  bottom: this.props.bottom,
                  left: this.props.left,
                  right: this.props.right,
                  top: void 0 !== this.props.top ? this.props.top : -1e4,
                  width: this.props.inheritWidthFromTarget
                    ? this.props.target &&
                      this.props.target.getBoundingClientRect().width
                    : this.props.width,
                  maxWidth:
                    this.props.inheritMaxWidthFromTarget &&
                    this.props.target &&
                    this.props.target.getBoundingClientRect().width,
                };
              }),
              (e.prototype._calcProps = function (t) {
                if (t.target && t.attachment && t.targetAttachment) {
                  var e = this._calcTargetProps(
                    t.target,
                    t.attachment,
                    t.targetAttachment,
                  );
                  if (null === e) return {};
                  var o = this.props,
                    r = o.width,
                    i = o.inheritWidthFromTarget,
                    s = void 0 === i || i,
                    n = o.inheritMaxWidthFromTarget,
                    h = void 0 !== n && n,
                    a = {
                      width: s ? e.width : r,
                      maxWidth: h ? e.width : void 0,
                    };
                  switch (t.attachment.vertical) {
                    case 'bottom':
                    case 'middle':
                      a.top = e.y;
                      break;
                    default:
                      a[t.attachment.vertical] = e.y;
                  }
                  switch (t.attachment.horizontal) {
                    case 'right':
                    case 'center':
                      a.left = e.x;
                      break;
                    default:
                      a[t.attachment.horizontal] = e.x;
                  }
                  return a;
                }
                return {};
              }),
              (e.prototype._calcTargetProps = function (t, e, o) {
                var r = t.getBoundingClientRect(),
                  i = this._instanceElem.getBoundingClientRect(),
                  s =
                    'parent' === this.props.root
                      ? this._getCoordsRelToParentEl(t, r)
                      : this._getCoordsRelToDocument(r);
                if (null === s) return null;
                var n = this._getDimensions(i),
                  h = this._getDimensions(r).width,
                  a = 0,
                  p = 0;
                switch (e.vertical) {
                  case 'top':
                    p = s[o.vertical];
                    break;
                  case 'bottom':
                    p = s[o.vertical] - n.height;
                    break;
                  case 'middle':
                    p = s[o.vertical] - n.height / 2;
                }
                switch (e.horizontal) {
                  case 'left':
                    a = s[o.horizontal];
                    break;
                  case 'right':
                    a = s[o.horizontal] - n.width;
                    break;
                  case 'center':
                    a = s[o.horizontal] - n.width / 2;
                }
                return (
                  'number' == typeof this.props.attachmentOffsetY &&
                    (p += this.props.attachmentOffsetY),
                  'number' == typeof this.props.attachmentOffsetX &&
                    (a += this.props.attachmentOffsetX),
                  { x: a, y: p, width: h }
                );
              }),
              (e.prototype._getCoordsRelToDocument = function (t) {
                var e = pageYOffset,
                  o = pageXOffset,
                  r = t.top + e,
                  i = t.bottom + e,
                  s = t.left + o;
                return {
                  top: r,
                  bottom: i,
                  left: s,
                  right: t.right + o,
                  middle: (r + t.height) / 2,
                  center: s + t.width / 2,
                };
              }),
              (e.prototype._getCoordsRelToParentEl = function (t, e) {
                var o = t.offsetParent;
                if (null === o) return null;
                var r = o.scrollTop,
                  i = o.scrollLeft,
                  s = t.offsetTop + r,
                  n = t.offsetLeft + i,
                  h = e.width + n;
                return {
                  top: s,
                  bottom: e.height + s,
                  left: n,
                  right: h,
                  middle: (s + e.height) / 2,
                  center: (n + e.width) / 2,
                };
              }),
              (e.prototype._getDimensions = function (t) {
                return { height: t.height, width: t.width };
              }),
              (e.prototype._subscribe = function () {
                'document' === this.props.root &&
                  (window.addEventListener(
                    'scroll',
                    this._throttleCalcProps,
                    !0,
                  ),
                  window.addEventListener('resize', this._throttleCalcProps));
              }),
              (e.prototype._unsubsribe = function () {
                window.removeEventListener(
                  'scroll',
                  this._throttleCalcProps,
                  !0,
                ),
                  window.removeEventListener('resize', this._throttleCalcProps);
              }),
              e
            );
          })(i.PureComponent)).displayName = 'Attachable Component'),
          l),
        );
    },
  },
]);
