(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    '1O6C': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return d;
      });
      var o = n('mrSG'),
        i = n('q1tI'),
        r = n('TSYQ'),
        a = n('+EG+'),
        s = n('jAh7'),
        l = n('QpNh'),
        c = n('aYmi'),
        d = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e._manager = new s.OverlapManager()),
              (e._handleSlot = function (t) {
                e._manager.setContainer(t);
              }),
              e
            );
          }
          return (
            Object(o.__extends)(e, t),
            (e.prototype.render = function () {
              var t = this.props,
                e = t.rounded,
                n = void 0 === e || e,
                s = t.shadowed,
                d = void 0 === s || s,
                u = t.fullscreen,
                h = void 0 !== u && u,
                p = t.darker,
                _ = void 0 !== p && p,
                g = t.className,
                f = t.backdrop,
                m = r(
                  g,
                  c.dialog,
                  n && c.rounded,
                  d && c.shadowed,
                  h && c.fullscreen,
                  _ && c.darker,
                ),
                v = Object(l.a)(this.props),
                y = this.props.style
                  ? Object(o.__assign)(
                      Object(o.__assign)({}, this._createStyles()),
                      this.props.style,
                    )
                  : this._createStyles();
              return i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  a.b.Provider,
                  { value: this._manager },
                  f &&
                    i.createElement('div', {
                      onClick: this.props.onClickBackdrop,
                      className: c.backdrop,
                    }),
                  i.createElement(
                    'div',
                    Object(o.__assign)({}, v, {
                      className: m,
                      style: y,
                      ref: this.props.reference,
                      onFocus: this.props.onFocus,
                      onMouseDown: this.props.onMouseDown,
                      onMouseUp: this.props.onMouseUp,
                      onClick: this.props.onClick,
                      onKeyDown: this.props.onKeyDown,
                      tabIndex: -1,
                    }),
                    this.props.children,
                  ),
                ),
                i.createElement(a.a, { reference: this._handleSlot }),
              );
            }),
            (e.prototype._createStyles = function () {
              var t = this.props,
                e = t.bottom,
                n = t.left,
                o = t.width;
              return {
                bottom: e,
                left: n,
                right: t.right,
                top: t.top,
                zIndex: t.zIndex,
                maxWidth: o,
                height: t.height,
              };
            }),
            e
          );
        })(i.PureComponent);
    },
    RgaO: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      var o = n('mrSG'),
        i = n('8Rai');
      function r(t) {
        var e = t.children,
          n = Object(o.__rest)(t, ['children']);
        return e(Object(i.a)(n));
      }
    },
    WXjp: function (t, e, n) {
      'use strict';
      var o = n('mrSG'),
        i = n('q1tI'),
        r = n('TSYQ'),
        a = n('Eyy1'),
        s = n('1O6C'),
        l = n('uqKQ'),
        c = n('RgaO'),
        d = n('Hr11');
      function u(t, e, n, o) {
        return t + e > o && (t = o - e), t < n && (t = n), t;
      }
      function h(t) {
        return {
          x: Object(d.clamp)(
            t.x,
            20,
            document.documentElement.clientWidth - 20,
          ),
          y: Object(d.clamp)(t.y, 20, window.innerHeight - 20),
        };
      }
      function p(t) {
        return { x: t.clientX, y: t.clientY };
      }
      function _(t) {
        return { x: t.touches[0].clientX, y: t.touches[0].clientY };
      }
      var g = (function () {
          function t(t, e, n) {
            var o = this;
            void 0 === n && (n = { boundByScreen: !0 }),
              (this._drag = null),
              (this._canBeTouchClick = !1),
              (this._frame = null),
              (this._onMouseDragStart = function (t) {
                if (0 === t.button) {
                  t.preventDefault(),
                    document.addEventListener('mousemove', o._onMouseDragMove),
                    document.addEventListener('mouseup', o._onMouseDragEnd);
                  var e = h(p(t));
                  o._dragStart(e);
                }
              }),
              (this._onTouchDragStart = function (t) {
                (o._canBeTouchClick = !0),
                  t.preventDefault(),
                  o._header.addEventListener('touchmove', o._onTouchDragMove, {
                    passive: !1,
                  });
                var e = h(_(t));
                o._dragStart(e);
              }),
              (this._onMouseDragEnd = function (t) {
                t.target instanceof Node &&
                  o._header.contains(t.target) &&
                  t.preventDefault(),
                  document.removeEventListener('mousemove', o._onMouseDragMove),
                  document.removeEventListener('mouseup', o._onMouseDragEnd),
                  o._onDragStop();
              }),
              (this._onTouchDragEnd = function (t) {
                o._header.removeEventListener('touchmove', o._onTouchDragMove),
                  o._onDragStop(),
                  o._canBeTouchClick &&
                    ((o._canBeTouchClick = !1),
                    (function (t) {
                      if (t instanceof SVGElement) {
                        var e = document.createEvent('SVGEvents');
                        e.initEvent('click', !0, !0), t.dispatchEvent(e);
                      }
                      t instanceof HTMLElement && t.click();
                    })(t.target));
              }),
              (this._onMouseDragMove = function (t) {
                var e = h(p(t));
                o._dragMove(e);
              }),
              (this._onTouchDragMove = function (t) {
                (o._canBeTouchClick = !1), t.preventDefault();
                var e = h(_(t));
                o._dragMove(e);
              }),
              (this._onDragStop = function () {
                (o._drag = null), o._header.classList.remove('dragging');
              }),
              (this._dialog = t),
              (this._header = e),
              (this._options = n),
              this._header.addEventListener(
                'mousedown',
                this._onMouseDragStart,
              ),
              this._header.addEventListener(
                'touchstart',
                this._onTouchDragStart,
              ),
              this._header.addEventListener('touchend', this._onTouchDragEnd);
          }
          return (
            (t.prototype.destroy = function () {
              null !== this._frame && cancelAnimationFrame(this._frame),
                this._header.removeEventListener(
                  'mousedown',
                  this._onMouseDragStart,
                ),
                document.removeEventListener('mouseup', this._onMouseDragEnd),
                this._header.removeEventListener(
                  'touchstart',
                  this._onTouchDragStart,
                ),
                this._header.removeEventListener(
                  'touchend',
                  this._onTouchDragEnd,
                ),
                document.removeEventListener(
                  'mouseleave',
                  this._onMouseDragEnd,
                );
            }),
            (t.prototype.updateOptions = function (t) {
              this._options = t;
            }),
            (t.prototype._dragStart = function (t) {
              var e = this._dialog.getBoundingClientRect();
              this._drag = {
                startX: t.x,
                startY: t.y,
                finishX: t.x,
                finishY: t.y,
                dialogX: e.left,
                dialogY: e.top,
              };
              var n = Math.round(e.left),
                o = Math.round(e.top);
              (this._dialog.style.transform =
                'translate(' + n + 'px, ' + o + 'px)'),
                this._header.classList.add('dragging');
            }),
            (t.prototype._dragMove = function (t) {
              var e = this;
              if (this._drag) {
                if (
                  ((this._drag.finishX = t.x),
                  (this._drag.finishY = t.y),
                  null !== this._frame)
                )
                  return;
                this._frame = requestAnimationFrame(function () {
                  if (e._drag) {
                    var n = t.x - e._drag.startX,
                      o = t.y - e._drag.startY;
                    e._moveDialog(e._drag.dialogX + n, e._drag.dialogY + o);
                  }
                  e._frame = null;
                });
              }
            }),
            (t.prototype._moveDialog = function (t, e) {
              var n = this._dialog.getBoundingClientRect(),
                o = this._options.boundByScreen,
                i = u(
                  t,
                  n.width,
                  o ? 0 : -1 / 0,
                  o ? window.innerWidth : 1 / 0,
                ),
                r = u(
                  e,
                  n.height,
                  o ? 0 : -1 / 0,
                  o ? window.innerHeight : 1 / 0,
                );
              this._dialog.style.transform =
                'translate(' + Math.round(i) + 'px, ' + Math.round(r) + 'px)';
            }),
            t
          );
        })(),
        f = (function () {
          function t(t, e) {
            var n = this;
            void 0 === e && (e = { vertical: 0 }),
              (this._frame = null),
              (this._isFullscreen = !1),
              (this._handleResize = function () {
                null === n._frame &&
                  (n._frame = requestAnimationFrame(function () {
                    n.recalculateBounds(), (n._frame = null);
                  }));
              }),
              (this._dialog = t),
              (this._options = e),
              (this._initialHeight = t.style.height),
              window.addEventListener('resize', this._handleResize);
          }
          return (
            (t.prototype.updateOptions = function (t) {
              void 0 === t && (t = { vertical: 0 }), (this._options = t);
            }),
            (t.prototype.setFullscreen = function (t) {
              this._isFullscreen !== t &&
                ((this._isFullscreen = t), this.recalculateBounds());
            }),
            (t.prototype.centerAndFit = function () {
              var t = this.getDialogsTopLeftCoordinates(),
                e = t.x,
                n = t.y,
                o = this._calcAvailableHeight(),
                i = this._calcDialogHeight();
              o === i && (this._dialog.style.height = i + 'px'),
                (this._dialog.style.top = '0px'),
                (this._dialog.style.left = '0px'),
                (this._dialog.style.transform =
                  'translate(' + e + 'px, ' + n + 'px)');
            }),
            (t.prototype.getDialogsTopLeftCoordinates = function () {
              var t = document.documentElement,
                e = t.clientHeight,
                n = t.clientWidth,
                o = this._calcDialogHeight(),
                i = n / 2 - this._dialog.clientWidth / 2,
                r = e / 2 - o / 2;
              return { x: Math.round(i), y: Math.round(r) };
            }),
            (t.prototype.recalculateBounds = function () {
              this._dialog.style.height = 'auto';
              var t = document.documentElement,
                e = t.clientHeight,
                n = t.clientWidth;
              if (this._isFullscreen)
                (this._dialog.style.top = '0px'),
                  (this._dialog.style.left = '0px'),
                  (this._dialog.style.width = n + 'px'),
                  (this._dialog.style.height = e + 'px'),
                  (this._dialog.style.transform = 'none');
              else {
                var o = this._options.vertical;
                (this._dialog.style.width = ''),
                  (this._dialog.style.height = '');
                var i = this._dialog.getBoundingClientRect(),
                  r = e - 2 * o,
                  a = u(i.left, i.width, 0, n),
                  s = u(i.top, i.height, o, e);
                (this._dialog.style.top = '0px'),
                  (this._dialog.style.left = '0px'),
                  (this._dialog.style.transform =
                    'translate(' +
                    Math.round(a) +
                    'px, ' +
                    Math.round(s) +
                    'px)'),
                  (this._dialog.style.height =
                    r < i.height ? r + 'px' : this._initialHeight);
              }
            }),
            (t.prototype.destroy = function () {
              window.removeEventListener('resize', this._handleResize),
                null !== this._frame &&
                  (cancelAnimationFrame(this._frame), (this._frame = null));
            }),
            (t.prototype._calcDialogHeight = function () {
              var t = this._calcAvailableHeight();
              return t < this._dialog.clientHeight
                ? t
                : this._dialog.clientHeight;
            }),
            (t.prototype._calcAvailableHeight = function () {
              return (
                document.documentElement.clientHeight -
                2 * this._options.vertical
              );
            }),
            t
          );
        })(),
        m = n('AiMB'),
        v = n('pafz'),
        y = n('Nkvk'),
        x = n('ZzSk');
      n.d(e, 'a', function () {
        return T;
      });
      x['tooltip-offset'];
      var S = { boundByScreen: !0, draggable: !0 },
        E = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n._dialog = null),
              (n._handleDialogRef = function (t) {
                var e = n.props.reference;
                (n._dialog = t), 'function' == typeof e && e(t);
              }),
              (n._handleFocus = function (t) {
                n._moveToTop();
              }),
              (n._handleMouseDown = function (t) {
                n._moveToTop();
              }),
              (n._handleTouchStart = function (t) {
                n._moveToTop();
              }),
              (n.state = { canFitTooltip: !1 }),
              n
            );
          }
          return (
            Object(o.__extends)(e, t),
            (e.prototype.render = function () {
              var t = this;
              return i.createElement(
                v.a.Provider,
                { value: this },
                i.createElement(
                  c.a,
                  {
                    mouseDown: !0,
                    touchStart: !0,
                    handler: this.props.onClickOutside,
                  },
                  function (e) {
                    return i.createElement(
                      'div',
                      {
                        ref: e,
                        'data-outside-boundary-for': t.props.name,
                        onFocus: t._handleFocus,
                        onMouseDown: t._handleMouseDown,
                        onTouchStart: t._handleTouchStart,
                        'data-dialog-name': t.props['data-dialog-name'],
                      },
                      i.createElement(
                        s.a,
                        Object(o.__assign)(
                          { style: t._applyAnimationCSSVariables() },
                          t.props,
                          {
                            reference: t._handleDialogRef,
                            className: r(x.dialog, t.props.className),
                          },
                        ),
                        !1,
                        t.props.children,
                      ),
                    );
                  },
                ),
              );
            }),
            (e.prototype.componentDidMount = function () {
              var t = Object(a.ensureNotNull)(this._dialog);
              if (this.props.draggable) {
                var e = t.querySelector('[data-dragg-area]');
                e &&
                  e instanceof HTMLElement &&
                  (this._drag = new g(t, e, {
                    boundByScreen: Boolean(this.props.boundByScreen),
                  }));
              }
              this.props.autofocus && t.focus(),
                this._isFullScreen() && Object(y.setFixedBodyState)(!0),
                (this._resize = new f(t, this.props.guard)),
                this.props.isAnimationEnabled &&
                  this.props.growPoint &&
                  this._applyAppearanceAnimation(this.props.growPoint),
                this._resize.centerAndFit(),
                this._resize.setFullscreen(this._isFullScreen()),
                this.props.shouldForceFocus && t.focus();
            }),
            (e.prototype.componentDidUpdate = function () {
              this._resize &&
                (this._resize.updateOptions(this.props.guard),
                this._resize.setFullscreen(this._isFullScreen())),
                this._drag &&
                  this._drag.updateOptions({
                    boundByScreen: Boolean(this.props.boundByScreen),
                  });
            }),
            (e.prototype.componentWillUnmount = function () {
              this._drag && this._drag.destroy(),
                this._resize && this._resize.destroy(),
                this._isFullScreen() && Object(y.setFixedBodyState)(!1);
            }),
            (e.prototype.centerAndFit = function () {
              this._resize && this._resize.centerAndFit();
            }),
            (e.prototype.recalculateBounds = function () {
              this._resize && this._resize.recalculateBounds();
            }),
            (e.prototype._moveToTop = function () {
              null !== this.context && this.context.moveToTop();
            }),
            (e.prototype._applyAnimationCSSVariables = function () {
              return {
                '--animationTranslateStartX': null,
                '--animationTranslateStartY': null,
                '--animationTranslateEndX': null,
                '--animationTranslateEndY': null,
              };
            }),
            (e.prototype._applyAppearanceAnimation = function (t) {
              if (this._resize && this._dialog) {
                var e = t.x,
                  n = t.y,
                  o = this._resize.getDialogsTopLeftCoordinates(),
                  i = o.x,
                  r = o.y;
                this._dialog.style.setProperty(
                  '--animationTranslateStartX',
                  e + 'px',
                ),
                  this._dialog.style.setProperty(
                    '--animationTranslateStartY',
                    n + 'px',
                  ),
                  this._dialog.style.setProperty(
                    '--animationTranslateEndX',
                    i + 'px',
                  ),
                  this._dialog.style.setProperty(
                    '--animationTranslateEndY',
                    r + 'px',
                  ),
                  this._dialog.classList.add(x.dialogAnimatedAppearance);
              }
            }),
            (e.prototype._handleTooltipFit = function () {}),
            (e.prototype._isFullScreen = function () {
              return Boolean(this.props.fullscreen);
            }),
            (e.contextType = m.b),
            (e.defaultProps = S),
            e
          );
        })(i.PureComponent),
        T = Object(l.a)(E);
    },
    ZzSk: function (t, e, n) {
      t.exports = {
        'tablet-normal-breakpoint': 'screen and (max-width: 768px)',
        'tooltip-offset': '20px',
        dialog: 'dialog-34XTwGTT',
        dragging: 'dragging-33JfMDO6',
        dialogAnimatedAppearance: 'dialogAnimatedAppearance-ByFJP_o1',
        dialogAnimation: 'dialogAnimation-3u2LnCGZ',
        dialogTooltip: 'dialogTooltip-C1Jm8akl',
      };
    },
    aYmi: function (t, e, n) {
      t.exports = {
        dialog: 'dialog-2APwxL3O',
        rounded: 'rounded-tXI9mwGE',
        shadowed: 'shadowed-2M13-xZa',
        fullscreen: 'fullscreen-2RqU2pqU',
        darker: 'darker-2nhdv2oS',
        backdrop: 'backdrop-1tKdKmN_',
      };
    },
    pafz: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var o = n('q1tI'),
        i = o.createContext(null);
    },
    uqKQ: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return a;
      });
      var o = n('mrSG'),
        i = n('q1tI'),
        r = n('AiMB');
      function a(t) {
        return (function (e) {
          function n() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.__extends)(n, e),
            (n.prototype.render = function () {
              var e = this.props,
                n = e.isOpened,
                a = e.root;
              if (!n) return null;
              var s = i.createElement(
                t,
                Object(o.__assign)({}, this.props, { zIndex: 150 }),
              );
              return 'parent' === a ? s : i.createElement(r.a, null, s);
            }),
            n
          );
        })(i.PureComponent);
      }
    },
  },
]);
