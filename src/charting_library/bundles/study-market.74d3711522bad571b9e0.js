(window.webpackJsonp = window.webpackJsonp || []).push([
  ['study-market'],
  {
    '++0f': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentcolor" stroke-width="1.3" d="M12 9l5 5-5 5"/></svg>';
    },
    '+EG+': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      }),
        n.d(t, 'b', function () {
          return o;
        });
      var r = n('mrSG'),
        i = n('q1tI'),
        a = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.shouldComponentUpdate = function () {
              return !1;
            }),
            (t.prototype.render = function () {
              return i.createElement('div', {
                style: { position: 'fixed', zIndex: 150, left: 0, top: 0 },
                ref: this.props.reference,
              });
            }),
            t
          );
        })(i.Component),
        o = i.createContext(null);
    },
    '+l/S': function (e, t, n) {},
    '/KDZ': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var r = n('mrSG'),
        i = n('q1tI'),
        a = (function (e) {
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
            Object(r.c)(t, e),
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
        })(i.PureComponent);
    },
    '02pg': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n('q1tI'),
        i = n('TSYQ'),
        a = n('XiJV');
      function o(e) {
        return r.createElement('div', {
          className: i(a.separator, e.className),
        });
      }
    },
    '0NLZ': function (e, t, n) {
      e.exports = { container: 'container-V40c9xRz' };
    },
    '2A9e': function (e) {
      e.exports = JSON.parse(
        '{"button":"button-1iktpaT1","content":"content-2PGssb8d","noOutline":"noOutline-d9Yp4qvi","appearance-default":"appearance-default-dMjF_2Hu","intent-primary":"intent-primary-1-IOYcbg","intent-success":"intent-success-25a4XZXM","intent-default":"intent-default-2ZbSqQDs","intent-warning":"intent-warning-24j5HMi0","intent-danger":"intent-danger-1EETHCla","appearance-stroke":"appearance-stroke-12lxiUSM","appearance-text":"appearance-text-DqKJVT3U","appearance-inverse":"appearance-inverse-r1Y2JQg_","size-s":"size-s-3mait84m","size-m":"size-m-2G7L7Qat","size-l":"size-l-2NEs9_xt","size-p":"size-p-3D4rn3v0","full-width":"full-width-1wU8ljjC","with-icon":"with-icon-yumghDr-","icon":"icon-1grlgNdV"}',
      );
    },
    '2x13': function (e, t, n) {
      e.exports = {
        wrapper: 'wrapper-1S1BAxTC',
        container: 'container-2mBp3oqG',
        tab: 'tab-1EqAs-Lb',
        active: 'active-3u5zV0YP',
        title: 'title-1SrCEkqk',
        icon: 'icon-2RKetbyG',
        titleText: 'titleText-QNKMAlbN',
        nested: 'nested-H6CeL6Wc',
        isTablet: 'isTablet-2Pl3hVJ9',
        isMobile: 'isMobile-2OnSZ08h',
      };
    },
    '8Rai': function (e, t, n) {
      'use strict';
      var r = n('q1tI'),
        i = function (e, t) {
          var n = void 0 === t ? {} : t,
            r = n.bubbles,
            i = void 0 !== r && r,
            a = n.cancelable,
            o = void 0 !== a && a,
            c = n.detail,
            l = void 0 === c ? null : c;
          try {
            return new window.CustomEvent(e, {
              bubbles: i,
              cancelable: o,
              detail: l,
            });
          } catch (u) {
            var s = document.createEvent('CustomEvent');
            return s.initCustomEvent(e, i, o, l), s;
          }
        },
        a = n('R5JZ');
      function o(e) {
        var t = e.click,
          n = e.mouseDown,
          o = e.touchEnd,
          c = e.touchStart,
          l = e.handler,
          s = e.reference,
          u = e.ownerDocument,
          d = void 0 === u ? document : u,
          p = Object(r.useRef)(null),
          h = Object(r.useRef)(new i('timestamp').timeStamp);
        return (
          Object(r.useLayoutEffect)(
            function () {
              var e = { click: t, mouseDown: n, touchEnd: o, touchStart: c },
                r = s ? s.current : p.current;
              return Object(a.a)(h.current, r, l, d, e);
            },
            [t, n, o, c, l],
          ),
          s || p
        );
      }
      n.d(t, 'a', function () {
        return o;
      });
    },
    '9DSJ': function (e, t, n) {
      e.exports = {
        'tablet-small-breakpoint': 'screen and (max-width: 419px)',
        dialog: 'dialog-12W2lAaB',
        dialogLibrary: 'dialogLibrary-11wUWBuU',
        listContainer: 'listContainer-313-x-WK',
        scroll: 'scroll-3Eu9HUkX',
        sidebarContainer: 'sidebarContainer-1lfmvpaZ',
        backButton: 'backButton-C9cNFJsB',
        noContentBlock: 'noContentBlock-Ly1pGn6p',
      };
    },
    ASyk: function (e, t, n) {
      e.exports = {
        'tablet-normal-breakpoint': 'screen and (max-width: 768px)',
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        'tablet-small-breakpoint': 'screen and (max-width: 419px)',
      };
    },
    AiMB: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      }),
        n.d(t, 'b', function () {
          return u;
        });
      var r = n('mrSG'),
        i = n('q1tI'),
        a = n('i8i4'),
        o = n('e3/o'),
        c = n('jAh7'),
        l = n('+EG+'),
        s = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t._uuid = Object(o.guid)()), t;
          }
          return (
            Object(r.c)(t, e),
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
                a.createPortal(
                  i.createElement(
                    u.Provider,
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
            (t.contextType = l.b),
            t
          );
        })(i.PureComponent),
        u = i.createContext(null);
    },
    An2S: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return p;
      }),
        n.d(t, 'c', function () {
          return h;
        }),
        n.d(t, 'b', function () {
          return f;
        });
      var r = n('mrSG'),
        i = n('q1tI'),
        a = n.n(i),
        o = n('TSYQ'),
        c = n.n(o),
        l = n('Iivm'),
        s = n('++0f'),
        u = n('2x13');
      function d(e) {
        return { isMobile: 'mobile' === e, isTablet: 'tablet' === e };
      }
      function p(e) {
        var t = e.mode,
          n = e.className,
          i = Object(r.e)(e, ['mode', 'className']),
          o = d(t),
          l = o.isMobile,
          s = o.isTablet,
          p = c()(u.container, s && u.isTablet, l && u.isMobile, n);
        return a.a.createElement(
          'div',
          Object(r.a)({}, i, { className: p, 'data-role': 'dialog-sidebar' }),
        );
      }
      function h(e) {
        return a.a.createElement(
          'div',
          Object(r.a)({ className: u.wrapper }, e),
        );
      }
      function f(e) {
        var t = e.mode,
          n = e.title,
          i = e.icon,
          o = e.isActive,
          p = e.onClick,
          h = Object(r.e)(e, ['mode', 'title', 'icon', 'isActive', 'onClick']),
          f = d(t),
          m = f.isMobile,
          v = f.isTablet;
        return a.a.createElement(
          'div',
          Object(r.a)({}, h, {
            className: c()(
              u.tab,
              v && u.isTablet,
              m && u.isMobile,
              o && u.active,
            ),
            onClick: p,
          }),
          a.a.createElement(l.a, { className: u.icon, icon: i }),
          !v &&
            a.a.createElement(
              'span',
              { className: u.title },
              a.a.createElement('span', { className: u.titleText }, n),
              m && a.a.createElement(l.a, { className: u.nested, icon: s }),
            ),
        );
      }
    },
    Iivm: function (e, t, n) {
      'use strict';
      var r = n('mrSG'),
        i = n('q1tI');
      const a = i.forwardRef((e, t) => {
        const { icon: n = '' } = e,
          a = Object(r.e)(e, ['icon']);
        return i.createElement(
          'span',
          Object.assign({}, a, {
            ref: t,
            dangerouslySetInnerHTML: { __html: n },
          }),
        );
      });
      n.d(t, 'a', function () {
        return a;
      });
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
    PMRz: function (e, t, n) {
      e.exports = {
        'tablet-small-breakpoint': 'screen and (max-width: 419px)',
        container: 'container-1e-eHKCj',
        selected: 'selected-ObuRahJa',
        disabled: 'disabled-3lywlGlv',
        favorite: 'favorite-PSp_jkxl',
        actions: 'actions-29vlkAXU',
        highlighted: 'highlighted-3YDl6jC6',
        light: 'light-2HF6Zxxl',
        'highlight-animation-theme-light':
          'highlight-animation-theme-light-1TIZ6Gga',
        dark: 'dark-1FO6oC-E',
        'highlight-animation-theme-dark':
          'highlight-animation-theme-dark-3xWPfm4R',
        main: 'main-34wD0nIh',
        paddingLeft: 'paddingLeft-1urwbIqx',
        isMobile: 'isMobile-2aXWDdT8',
        isActive: 'isActive-2O3vI4me',
        author: 'author-3sD2DZRV',
        likes: 'likes-17ztM5mP',
      };
    },
    PSOE: function (e, t, n) {
      e.exports = { highlighted: 'highlighted-3Ob1jr_R' };
    },
    QHWU: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return p;
      });
      var r = n('mrSG'),
        i = n('q1tI'),
        a = n.n(i),
        o = n('TSYQ'),
        c = n.n(o),
        l = n('YFKU'),
        s = n('Iivm'),
        u = n('hYdZ'),
        d = n('MyWJ');
      function p(e) {
        var t = e.children,
          n = e.renderInput,
          i = e.onCancel,
          o = Object(r.e)(e, ['children', 'renderInput', 'onCancel']);
        return a.a.createElement(
          'div',
          { className: d.container },
          a.a.createElement(
            'div',
            { className: c()(d.inputContainer, i && d.withCancel) },
            n || a.a.createElement(h, Object(r.a)({}, o)),
          ),
          t,
          a.a.createElement(s.a, { className: d.icon, icon: u }),
          i &&
            a.a.createElement(
              'div',
              { className: d.cancel, onClick: i },
              Object(l.t)('Cancel'),
            ),
        );
      }
      function h(e) {
        var t = e.className,
          n = e.reference,
          i = e.value,
          o = e.onChange,
          l = e.onFocus,
          s = e.onBlur,
          u = e.onKeyDown,
          p = e.onSelect,
          h = e.placeholder,
          f = Object(r.e)(e, [
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
        return a.a.createElement(
          'input',
          Object(r.a)({}, f, {
            ref: n,
            type: 'text',
            className: c()(t, d.input),
            autoComplete: 'off',
            'data-role': 'search',
            placeholder: h,
            value: i,
            onChange: o,
            onFocus: l,
            onBlur: s,
            onSelect: p,
            onKeyDown: u,
          }),
        );
      }
    },
    QpNh: function (e, t, n) {
      'use strict';
      function r(e) {
        for (
          var t = {}, n = 0, r = Object.entries(e).filter(i);
          n < r.length;
          n++
        ) {
          var a = r[n],
            o = a[0],
            c = a[1];
          t[o] = c;
        }
        return t;
      }
      function i(e) {
        var t = e[0],
          n = e[1];
        return 0 === t.indexOf('data-') && 'string' == typeof n;
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    R5JZ: function (e, t, n) {
      'use strict';
      function r(e, t, n, r, i) {
        function a(i) {
          if (!(e > i.timeStamp)) {
            var a = i.target;
            void 0 !== n &&
              null !== t &&
              null !== a &&
              a.ownerDocument === r &&
              (t.contains(a) || n(i));
          }
        }
        return (
          i.click && r.addEventListener('click', a, !1),
          i.mouseDown && r.addEventListener('mousedown', a, !1),
          i.touchEnd && r.addEventListener('touchend', a, !1),
          i.touchStart && r.addEventListener('touchstart', a, !1),
          function () {
            r.removeEventListener('click', a, !1),
              r.removeEventListener('mousedown', a, !1),
              r.removeEventListener('touchend', a, !1),
              r.removeEventListener('touchstart', a, !1);
          }
        );
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    XfUw: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>';
    },
    XiJV: function (e, t, n) {
      e.exports = { separator: 'separator-1TZB5HZ-' };
    },
    cu5P: function (e, t, n) {
      e.exports = {
        title: 'title-34aDs39w',
        disabled: 'disabled-17IgfIYd',
        icon: 'icon-2hTCJTIH',
        locked: 'locked-20ljjQkW',
        open: 'open-19XeUlGJ',
        actionIcon: 'actionIcon-3jB28-_s',
        selected: 'selected-lKkvzAlt',
        codeIcon: 'codeIcon-1DtZ78WN',
      };
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
      var r = n('mrSG'),
        i = n('q1tI'),
        a = n.n(i),
        o = n('Eyy1'),
        c = n('TSYQ'),
        l = n.n(c),
        s = n('/3z9'),
        u = n('d700'),
        d = n('WXjp'),
        p = n('02pg'),
        h = n('uhCe'),
        f = n('/KDZ'),
        m = n('pafz'),
        v = n('ZjKI'),
        b = n('FQhm'),
        g = n('Iivm'),
        y = a.a.createContext({ setHideClose: function () {} }),
        _ = n('zztK'),
        w = n('px1m');
      function E(e) {
        var t = e.title,
          n = e.subtitle,
          r = e.showCloseIcon,
          o = void 0 === r || r,
          c = e.onClose,
          s = e.renderBefore,
          u = e.renderAfter,
          d = e.draggable,
          p = Object(i.useState)(!1),
          h = p[0],
          f = p[1];
        return a.a.createElement(
          y.Provider,
          { value: { setHideClose: f } },
          a.a.createElement(
            'div',
            { className: l()(w.container, n && w.unsetAlign) },
            s,
            a.a.createElement(
              'div',
              { 'data-dragg-area': d, className: w.title },
              a.a.createElement('div', { className: w.ellipsis }, t),
              n &&
                a.a.createElement(
                  'div',
                  { className: l()(w.ellipsis, w.subtitle) },
                  n,
                ),
            ),
            u,
            o &&
              !h &&
              a.a.createElement(g.a, {
                className: w.close,
                icon: _,
                onClick: c,
                'data-name': 'close',
                'data-role': 'button',
              }),
          ),
        );
      }
      var C = n('ItnF');
      n.d(t, 'a', function () {
        return S;
      });
      var O = { vertical: 20 },
        x = { vertical: 0 },
        S = (function (e) {
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
                        r = Object(o.ensureNotNull)(t._reference);
                      if (null !== n) {
                        if ((e.preventDefault(), N(n)))
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
            Object(r.c)(t, e),
            (t.prototype.componentDidMount = function () {
              b.subscribe(
                v.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this._handleClose,
                null,
              );
            }),
            (t.prototype.componentWillUnmount = function () {
              b.unsubscribe(
                v.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this._handleClose,
                null,
              );
            }),
            (t.prototype.focus = function () {
              Object(o.ensureNotNull)(this._reference).focus();
            }),
            (t.prototype.getElement = function () {
              return this._reference;
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.className,
                r = t.isOpened,
                i = t.title,
                o = t.dataName,
                c = t.onClickOutside,
                s = t.additionalElementPos,
                u = t.additionalHeaderElement,
                v = t.backdrop,
                b = t.shouldForceFocus,
                g = void 0 === b || b,
                y = t.showSeparator,
                _ = t.subtitle,
                w = t.draggable,
                S = void 0 === w || w,
                N = t.fullScreen,
                j = void 0 !== N && N,
                k = t.showCloseIcon,
                I = void 0 === k || k,
                P = t.rounded,
                D = void 0 === P || P,
                T = t.isAnimationEnabled,
                M = t.growPoint,
                R = t.dialogTooltip,
                F = 'after' !== s ? u : void 0,
                z = 'after' === s ? u : void 0;
              return a.a.createElement(
                f.a,
                { rule: h.a.SmallHeight },
                function (t) {
                  return a.a.createElement(
                    f.a,
                    { rule: h.a.TabletSmall },
                    function (s) {
                      return a.a.createElement(
                        d.a,
                        {
                          rounded: !(s || j) && D,
                          className: l()(C.dialog, n),
                          isOpened: r,
                          reference: e._handleReference,
                          onKeyDown: e._handleKeyDown,
                          onClickOutside: c,
                          onClickBackdrop: c,
                          fullscreen: s || j,
                          guard: t ? x : O,
                          boundByScreen: s || j,
                          shouldForceFocus: g,
                          backdrop: v,
                          draggable: S,
                          isAnimationEnabled: T,
                          growPoint: M,
                          name: e.props.dataName,
                          dialogTooltip: R,
                        },
                        a.a.createElement(
                          'div',
                          {
                            className: C.wrapper,
                            'data-name': o,
                            'data-dialog-name': i,
                          },
                          a.a.createElement(E, {
                            draggable: S && !(s || j),
                            onClose: e._handleClose,
                            renderAfter: z,
                            renderBefore: F,
                            subtitle: _,
                            title: i,
                            showCloseIcon: I,
                          }),
                          y &&
                            a.a.createElement(p.a, { className: C.separator }),
                          a.a.createElement(m.a.Consumer, null, function (t) {
                            return e._renderChildren(t, s || j);
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
        })(a.a.PureComponent);
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
    iYOJ: function (e, t, n) {
      e.exports = {
        title: 'title-34kQlbrM',
        small: 'small-vZQvMj9o',
        normal: 'normal-2Xipsjws',
        large: 'large-3RKX3yN_',
      };
    },
    idtP: function (e, t, n) {
      e.exports = {
        container: 'container-1nR_bX0y',
        image: 'image-1upzSf_2',
        title: 'title-3EHABq-W',
        description: 'description-3sR4j2iN',
      };
    },
    jPOK: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n('q1tI'),
        i = n('TSYQ'),
        a = n('Owlf');
      n('SzKR');
      function o(e) {
        var t = i(
          'tv-spinner',
          'tv-spinner--shown',
          'tv-spinner--size_' + (e.size || a.a),
        );
        return r.createElement(
          'div',
          { className: t, style: e.style, role: 'progressbar' },
          r.createElement(
            'div',
            { className: 'tv-spinner__spinner-layer' },
            r.createElement('div', {
              className: 'tv-spinner__background tv-spinner__width_element',
            }),
            r.createElement('div', {
              className:
                'tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--left',
            }),
            r.createElement('div', {
              className:
                'tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--right',
            }),
          ),
        );
      }
    },
    mwqF: function (e, t, n) {
      'use strict';
      var r = n('mrSG'),
        i = n('q1tI'),
        a = n('TSYQ');
      function o(e, t) {
        const {
          intent: n = 'primary',
          size: r = 'm',
          appearance: i = 'default',
          useFullWidth: o = !1,
          tabIndex: c = 0,
          icon: l,
          className: s,
        } = t;
        return a(
          s,
          e.button,
          e['size-' + r],
          e['intent-' + n],
          e['appearance-' + i],
          o && e['full-width'],
          -1 === c && e.noOutline,
          l && 's' !== r && e['with-icon'],
        );
      }
      var c = n('2A9e');
      n('+l/S');
      function l(e) {
        const {
            className: t,
            intent: n,
            size: l,
            appearance: s,
            disabled: u,
            useFullWidth: d,
            reference: p,
            icon: h,
            children: f,
            tabIndex: m,
          } = e,
          v = Object(r.e)(e, [
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
          b = o(c, {
            intent: n,
            size: l,
            appearance: s,
            disabled: u,
            useFullWidth: d,
            tabIndex: m,
            icon: h,
          });
        return i.createElement(
          'button',
          Object.assign(
            { className: a(b, t), disabled: u, ref: p, tabIndex: m },
            v,
          ),
          h && 's' !== l && i.createElement('span', { className: c.icon }, h),
          i.createElement('span', { className: c.content }, f),
        );
      }
      n.d(t, 'a', function () {
        return l;
      });
    },
    pr86: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return d;
      });
      var r = n('mrSG'),
        i = (n('YFKU'), n('q1tI')),
        a = n('TSYQ'),
        o = n('Iivm'),
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
          p = e.onClick,
          h = Object(r.e)(e, ['className', 'isFilled', 'isActive', 'onClick']);
        return i.createElement(
          o.a,
          Object(r.a)({}, h, {
            className: a(
              s.favorite,
              'apply-common-tooltip',
              n && s.checked,
              d && s.active,
              t,
            ),
            icon: n ? c : l,
            onClick: p,
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
        return i;
      });
      var r = n('ASyk'),
        i = {
          SmallHeight: r['small-height-breakpoint'],
          TabletSmall: r['tablet-small-breakpoint'],
          TabletNormal: r['tablet-normal-breakpoint'],
        };
    },
    vbTm: function (e, t, n) {
      e.exports = { container: 'container-2xksDfDy' };
    },
    vqb8: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var r = n('q1tI'),
        i = function (e) {
          var t = 'watchedValue' in e ? e.watchedValue : void 0,
            n = 'defaultValue' in e ? e.defaultValue : e.watchedValue.value(),
            i = Object(r.useState)(t ? t.value() : n),
            a = i[0],
            o = i[1];
          return (
            Object(r.useEffect)(
              function () {
                if (t) {
                  o(t.value());
                  var e = function (e) {
                    return o(e);
                  };
                  return (
                    t.subscribe(e),
                    function () {
                      return t.unsubscribe(e);
                    }
                  );
                }
                return function () {};
              },
              [t],
            ),
            a
          );
        };
    },
    zbLM: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('mrSG'),
        i = n('q1tI'),
        a = n.n(i),
        o = n('i8i4'),
        c = n.n(o),
        l = n('YFKU'),
        s = n('mMWL'),
        u = (n('+GxX'), n('CW80')),
        d = n('0YCj'),
        p = n.n(d),
        h = n('Kxc7');
      function f(e, t) {
        return (
          void 0 === t && (t = !0),
          e.filter(function (e) {
            var n =
              !!t ||
              !(function (e) {
                return e.isStrategy;
              })(e);
            return (
              (function (e) {
                0;
                return !e.isHidden || !1;
              })(e) && n
            );
          })
        );
      }
      function m(e) {
        var t = {};
        return (
          e.forEach(function (e) {
            var n = e.packageName;
            n in t ? t[n].push(e) : (t[n] = [e]);
          }),
          t
        );
      }
      function v(e, t) {
        var n = e.title.toLowerCase(),
          r = t.title.toLowerCase();
        return n < r ? -1 : n > r ? 1 : 0;
      }
      var b = {
        earning: new RegExp('EPS'),
        earnings: new RegExp('EPS'),
        'trailing twelve months': new RegExp('TTM'),
      };
      function g(e) {
        var t,
          n = e.id,
          r = e.description,
          i = e.shortDescription,
          a = e.description_localized,
          o = e.is_hidden_study,
          c = e.version,
          s =
            h.enabled('graying_disabled_tools_enabled') &&
            (null === (t = window.ChartApiInstance) || void 0 === t
              ? void 0
              : t.studiesAccessController.isToolGrayed(i));
        return {
          id: n,
          title: a || Object(l.t)(r, { context: 'study' }),
          shortDescription: i,
          shortTitle: i,
          isStrategy: p.a.isScriptStrategy(e),
          isHidden: o,
          descriptor: { type: 'java', studyId: e.id },
          packageName: p.a.getPackageName(n),
          isGrayed: s,
          version: c,
        };
      }
      var y = n('TSYQ'),
        _ = n.n(y),
        w = n('jPOK'),
        E = n('g89m'),
        C = n('qFKp'),
        O = n('QHWU'),
        x = n('An2S'),
        S = n('0NLZ');
      function N(e) {
        var t = e.reference,
          n = e.className,
          i = Object(r.e)(e, ['reference', 'className']);
        return a.a.createElement(
          'div',
          Object(r.a)({ ref: t, className: _()(S.container, n) }, i, {
            'data-role': 'dialog-content',
          }),
        );
      }
      var j = n('cu5P');
      function k(e) {
        var t = e.children,
          n = e.className,
          r = e.disabled;
        return a.a.createElement(
          'span',
          { className: _()(j.title, r && j.disabled, n) },
          t,
        );
      }
      var I = a.a.createContext(null);
      function P(e) {
        return e.replace(/[!-/[-^{-}]/g, '\\$&');
      }
      var D = n('PSOE');
      function T(e) {
        var t = e.queryString,
          n = e.rules,
          r = e.text,
          o = e.className,
          c = Object(i.useMemo)(
            function () {
              return (function (e, t, n) {
                var r = [];
                return e && n
                  ? (n.forEach(function (e) {
                      var n = e.fullMatch,
                        i = e.re,
                        a = e.reserveRe;
                      (n.lastIndex = 0), (i.lastIndex = 0);
                      var o = n.exec(t),
                        c = o || i.exec(t) || (a && a.exec(t));
                      if (((e.fuzzyHighlight = !o), c))
                        if (e.fuzzyHighlight)
                          for (var l = c.index, s = 1; s < c.length; s++) {
                            var u = c[s],
                              d = c[s].length;
                            if (s % 2) {
                              var p =
                                u.startsWith(' ') ||
                                u.startsWith('/') ||
                                u.startsWith('-');
                              r[p ? l + 1 : l] = !0;
                            }
                            l += d;
                          }
                        else
                          for (var h = 0; h < c[0].length; h++)
                            r[c.index + h] = !0;
                    }),
                    r)
                  : r;
              })(t, r, n);
            },
            [t, n, r],
          );
        return a.a.createElement(
          i.Fragment,
          null,
          c.length
            ? r.split('').map(function (e, t) {
                return a.a.createElement(
                  i.Fragment,
                  { key: t },
                  c[t]
                    ? a.a.createElement(
                        'span',
                        { className: y(D.highlighted, o) },
                        e,
                      )
                    : a.a.createElement('span', null, e),
                );
              })
            : r,
        );
      }
      var M = n('vqb8'),
        R = n('oiZD'),
        F = n('zM7N'),
        z = n('pr86'),
        A = n('/3z9'),
        q = n('PMRz');
      function L(e) {
        var t = Object(i.useContext)(I),
          n = e.style,
          r = e.layoutMode,
          o = e.item,
          c = e.query,
          l = e.regExpRules,
          s = e.isSelected,
          u = e.isHighlighted,
          d = e.reference,
          p = e.onClick,
          h = (e.renderActions, o.isFavorite),
          f = (o.isStrategy, o.isLocked, o.public),
          m = void 0 !== h,
          v = K(p, o),
          b = Object(i.useCallback)(function (e) {
            return e.stopPropagation();
          }, []),
          g = (null == t ? void 0 : t.toggleFavorite)
            ? K(t.toggleFavorite, o)
            : void 0,
          y = C.CheckMobile.any() && q.isMobile,
          w =
            Object(M.a)({ watchedValue: R.watchedTheme }) === F.a.Dark
              ? q.dark
              : q.light,
          E = _()(
            q.container,
            o.isGrayed && q.disabled,
            s && q.selected,
            u && q.highlighted,
            u && w,
          );
        return a.a.createElement(
          'div',
          {
            ref: d,
            className: E,
            onClick: v,
            style: n,
            'data-role': 'list-item',
            'data-disabled': o.isGrayed,
            'data-title': o.title,
            'data-id': o.id,
          },
          a.a.createElement(
            'div',
            { className: _()(q.main, !m && q.paddingLeft) },
            m &&
              a.a.createElement(z.a, {
                className: _()(q.favorite, h && q.isActive, y),
                isFilled: h,
                onClick: g,
              }),
            a.a.createElement(
              k,
              { disabled: o.isGrayed },
              a.a.createElement(T, { queryString: c, rules: l, text: o.title }),
            ),
            !1,
          ),
          f &&
            a.a.createElement(
              'a',
              {
                href: f.authorLink,
                className: q.author,
                target: '_blank',
                onClick: b,
              },
              f.authorName,
            ),
          'mobile' !== r &&
            f &&
            a.a.createElement('span', { className: q.likes }, f.likesCount),
          !1,
        );
      }
      function K(e, t) {
        return function (n) {
          var r = 0 === Object(A.modifiersFromEvent)(n) && 0 === n.button;
          !n.defaultPrevented && e && r && (n.preventDefault(), e(t));
        };
      }
      var W = n('iYOJ');
      function B(e) {
        var t = e.title,
          n = e.type,
          r = e.className;
        return a.a.createElement(
          'h3',
          {
            className: _()(
              W.title,
              'Small' === n && W.small,
              'Normal' === n && W.normal,
              'Large' === n && W.large,
              r,
            ),
          },
          t,
        );
      }
      var G = n('vbTm');
      function H(e) {
        var t = e.style,
          n = e.children;
        return a.a.createElement(
          'div',
          { style: t, className: G.container },
          n,
        );
      }
      var Q = n('Iivm'),
        U = n('mwqF'),
        Y = n('idtP');
      function J(e) {
        var t = e.className,
          n = e.icon,
          r = e.title,
          i = e.description,
          o = e.buttonText,
          c = e.buttonAction;
        return a.a.createElement(
          'div',
          { className: _()(Y.container, t) },
          n && a.a.createElement(Q.a, { icon: n, className: Y.image }),
          r && a.a.createElement('h3', { className: Y.title }, r),
          i && a.a.createElement('p', { className: Y.description }, i),
          o && c && a.a.createElement(U.a, { onClick: c }, o),
        );
      }
      function Z(e) {
        var t = Object(i.useState)(null),
          n = t[0],
          r = t[1];
        function a(e) {
          return e.findIndex(function (e) {
            return (null == n ? void 0 : n.id) === e.id;
          });
        }
        return [
          n,
          r,
          function () {
            r(
              (function () {
                var t,
                  r = a(e),
                  i = r === e.length - 1;
                return null === n || -1 === r
                  ? null !== (t = e[0]) && void 0 !== t
                    ? t
                    : null
                  : i
                  ? e[r]
                  : e[r + 1];
              })(),
            );
          },
          function () {
            r(
              (function () {
                var t,
                  r = a(e);
                return null === n || 0 === r || -1 === r
                  ? null !== (t = e[0]) && void 0 !== t
                    ? t
                    : null
                  : e[r - 1];
              })(),
            );
          },
        ];
      }
      var V = n('9DSJ');
      function X(e) {
        var t = e.reference,
          n = e.data,
          r = e.isOpened,
          o = e.onClose,
          c = e.applyStudy,
          s = Object(i.useState)(''),
          u = s[0],
          d = s[1],
          p = Object(i.useMemo)(
            function () {
              return (function (e, t) {
                var n = [],
                  r = e.toLowerCase(),
                  i =
                    e
                      .split('')
                      .map(function (e, t) {
                        return '(' + (0 !== t ? '[/\\s-]' + P(e) : P(e)) + ')';
                      })
                      .join('(.*?)') + '(.*)';
                return (
                  n.push({
                    fullMatch: new RegExp('(' + P(e) + ')', 'i'),
                    re: new RegExp('^' + i, 'i'),
                    reserveRe: new RegExp(i, 'i'),
                    fuzzyHighlight: !0,
                  }),
                  t &&
                    t.hasOwnProperty(r) &&
                    n.push({ fullMatch: t[r], re: t[r], fuzzyHighlight: !1 }),
                  n
                );
              })(u, b);
            },
            [u],
          ),
          h = Object(i.useMemo)(
            function () {
              return u
                ? (function (e) {
                    var t = e.data,
                      n = e.rules,
                      r = e.queryString,
                      i = e.isPreventedFromFiltering,
                      a = e.primaryKey,
                      o = e.secondaryKey,
                      c = void 0 === o ? a : o,
                      l = e.optionalPrimaryKey;
                    return t
                      .map(function (e) {
                        var t,
                          i = l && e[l] ? e[l] : e[a],
                          o = e[c],
                          s = 0;
                        return (
                          n.forEach(function (e) {
                            var n,
                              a,
                              c,
                              l,
                              u = e.re,
                              d = e.fullMatch;
                            return (
                              (u.lastIndex = 0),
                              i.toLowerCase() === r.toLowerCase()
                                ? ((s = 3),
                                  void (t =
                                    null === (n = i.match(d)) || void 0 === n
                                      ? void 0
                                      : n.index))
                                : d.test(i)
                                ? ((s = 2),
                                  void (t =
                                    null === (a = i.match(d)) || void 0 === a
                                      ? void 0
                                      : a.index))
                                : d.test(o)
                                ? ((s = 1),
                                  void (t =
                                    null === (c = i.match(d)) || void 0 === c
                                      ? void 0
                                      : c.index))
                                : void (
                                    u.test(o) &&
                                    ((s = 1),
                                    (t =
                                      null === (l = i.match(u)) || void 0 === l
                                        ? void 0
                                        : l.index))
                                  )
                            );
                          }),
                          { matchPriority: s, matchIndex: t, item: e }
                        );
                      })
                      .filter(function (e) {
                        return i || e.matchPriority;
                      })
                      .sort(function (e, t) {
                        if (e.matchPriority < t.matchPriority) return 1;
                        if (e.matchPriority > t.matchPriority) return -1;
                        if (e.matchPriority === t.matchPriority) {
                          if (
                            void 0 === e.matchIndex ||
                            void 0 === t.matchIndex
                          )
                            return 0;
                          if (e.matchIndex > t.matchIndex) return 1;
                          if (e.matchIndex < t.matchIndex) return -1;
                        }
                        return 0;
                      })
                      .map(function (e) {
                        return e.item;
                      });
                  })({
                    data: n,
                    rules: p,
                    queryString: u,
                    primaryKey: 'shortDescription',
                    secondaryKey: 'title',
                    optionalPrimaryKey: 'shortTitle',
                  })
                : n;
            },
            [u, p, n],
          ),
          f = (function (e, t, n, r) {
            var a = 0,
              o = Object(i.useState)(null),
              c = o[0],
              l = o[1],
              s = Object(i.useRef)(null),
              u = Object(i.useRef)(null),
              d = Z(t),
              p = d[0],
              h = d[1],
              f = d[2],
              m = d[3],
              v = Object(i.useRef)(null);
            return (
              Object(i.useEffect)(
                function () {
                  e ? b(0) : h(null);
                },
                [e],
              ),
              Object(i.useEffect)(
                function () {
                  void 0 !== r && (b(0), h(null));
                },
                [r],
              ),
              Object(i.useEffect)(
                function () {
                  return (
                    c &&
                      (a = setTimeout(function () {
                        l(null);
                      }, 1500)),
                    function () {
                      clearInterval(a);
                    }
                  );
                },
                [c],
              ),
              {
                highlightedItem: c,
                scrollContainerRef: s,
                selectedNodeReference: u,
                selectedItem: p,
                searchInputRef: v,
                onClickStudy: function (e) {
                  if (!n) return;
                  n(e), h(e), l(e);
                },
                handleKeyDown: function (e) {
                  var t = (function (e, t) {
                      if (null === e.current || null === t.current)
                        return [0, 0];
                      var n = e.current.getBoundingClientRect(),
                        r = t.current.getBoundingClientRect(),
                        i = n.height,
                        a = n.top - r.top,
                        o = n.bottom - r.bottom + i < 0 ? 0 : i,
                        c = a - i > 0 ? 0 : i,
                        l = t.current.scrollTop;
                      return [l - c, l + o];
                    })(u, s),
                    r = t[0],
                    i = t[1];
                  40 === Object(A.hashFromEvent)(e) &&
                    (e.preventDefault(), f(), b(i));
                  38 === Object(A.hashFromEvent)(e) &&
                    (e.preventDefault(), m(), b(r));
                  if (13 === Object(A.hashFromEvent)(e) && p) {
                    if (!n) return;
                    n(p), l(p);
                  }
                },
              }
            );
            function b(e) {
              null !== s.current &&
                s.current.scrollTo &&
                s.current.scrollTo(0, e);
            }
          })(r, h, c),
          m = f.highlightedItem,
          v = f.selectedItem,
          g = f.selectedNodeReference,
          y = f.scrollContainerRef,
          S = f.searchInputRef,
          j = f.onClickStudy,
          k = f.handleKeyDown,
          I = '' === u && !h.length;
        return (
          Object(i.useEffect)(
            function () {
              var e;
              r || d(''),
                C.CheckMobile.any() ||
                  null === (e = S.current) ||
                  void 0 === e ||
                  e.focus();
            },
            [r],
          ),
          a.a.createElement(E.a, {
            isOpened: r,
            onClose: o,
            onClickOutside: o,
            className: _()(V.dialogLibrary),
            render: function () {
              return a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(O.a, {
                  reference: S,
                  placeholder: Object(l.t)('Search'),
                  onChange: D,
                  onFocus: T,
                }),
                a.a.createElement(
                  x.c,
                  null,
                  a.a.createElement(
                    N,
                    { reference: y, className: V.scroll },
                    I
                      ? a.a.createElement(w.a, null)
                      : h.length
                      ? a.a.createElement(
                          a.a.Fragment,
                          null,
                          a.a.createElement(
                            H,
                            null,
                            a.a.createElement(B, {
                              title: Object(l.t)('Script name'),
                            }),
                          ),
                          h.map(function (e) {
                            var t = (null == v ? void 0 : v.id) === e.id;
                            return a.a.createElement(L, {
                              key: e.id,
                              item: e,
                              onClick: function () {
                                return j(e);
                              },
                              query: u,
                              regExpRules: p,
                              reference: t ? g : void 0,
                              isSelected: (null == v ? void 0 : v.id) === e.id,
                              isHighlighted:
                                (null == m ? void 0 : m.id) === e.id,
                            });
                          }),
                        )
                      : a.a.createElement(J, {
                          className: V.noContentBlock,
                          description: Object(l.t)(
                            'No indicators matched your criteria.',
                          ),
                        }),
                  ),
                ),
              );
            },
            title: Object(l.t)('Indicators'),
            dataName: 'indicators-dialog',
            onKeyDown: k,
            ref: t,
          })
        );
        function D(e) {
          d(e.target.value);
        }
        function T() {
          var e;
          u.length > 0 &&
            (null === (e = S.current) || void 0 === e || e.select());
        }
      }
      var $ = n('FQhm'),
        ee = n('hY0g'),
        te = n.n(ee),
        ne = (function () {
          function e(e) {
            (this._searchInputRef = a.a.createRef()),
              (this._dialog = a.a.createRef()),
              (this._visibility = new te.a(!1)),
              (this._container = document.createElement('div')),
              (this._isForceRender = !1),
              (this._parentSource = null),
              (this._isDestroyed = !1),
              (this._chartWidgetCollection = e);
          }
          return (
            (e.prototype.isDestroyed = function () {
              return this._isDestroyed;
            }),
            (e.prototype.visible = function () {
              return this._visibility.readonly();
            }),
            (e.prototype.updateUserStudies = function () {}),
            (e.prototype.resetAllStudies = function () {}),
            (e.prototype.updateFavorites = function () {}),
            (e.prototype.open = function (e) {
              (this._parentSource = null != e ? e : null),
                this._setProps({ isOpened: !0 }),
                this._visibility.setValue(!0),
                $.emit('indicators_dialog');
            }),
            (e.prototype.show = function () {
              this.open();
            }),
            (e.prototype.hide = function () {
              (this._parentSource = null),
                this._setProps({ isOpened: !1 }),
                this._visibility.setValue(!1);
            }),
            (e.prototype.destroy = function () {
              (this._isDestroyed = !0),
                c.a.unmountComponentAtNode(this._container);
            }),
            (e.prototype._shouldPreventRender = function () {
              return (
                this._isDestroyed ||
                (!this._isForceRender && !this._getProps().value().isOpened)
              );
            }),
            (e.prototype._getRenderData = function () {
              return {
                props: this._getProps().value(),
                container: this._getContainer(),
              };
            }),
            (e.prototype._applyStudy = function (e) {
              var t,
                n,
                i = this;
              e.isGrayed
                ? $.emit('onGrayedObjectClicked', {
                    type: 'study',
                    name: e.shortDescription,
                  })
                : (C.CheckMobile.any() ||
                    null === (t = this._searchInputRef.current) ||
                    void 0 === t ||
                    t.select(),
                  (function (e, t, n) {
                    return Object(r.b)(this, void 0, void 0, function () {
                      var i, a, o;
                      return Object(r.d)(this, function (r) {
                        return 'java' === (i = t.descriptor).type &&
                          null !==
                            (a = Object(u.tryFindStudyLineToolNameByStudyId)(
                              i.studyId,
                            ))
                          ? (s.tool.setValue(a), [2, null])
                          : (o = e.activeChartWidget.value())
                          ? [
                              2,
                              o.insertStudy(
                                t.descriptor,
                                n,
                                t.shortDescription,
                              ),
                            ]
                          : [2, null];
                      });
                    });
                  })(
                    this._chartWidgetCollection,
                    e,
                    null !== (n = this._parentSource) && void 0 !== n
                      ? n
                      : void 0,
                  ).then(function () {
                    var e;
                    C.CheckMobile.any() ||
                      null === (e = i._searchInputRef.current) ||
                      void 0 === e ||
                      e.focus();
                  }));
            }),
            (e.prototype._setProps = function (e) {
              var t = this._getProps().value(),
                n = t.isOpened;
              this._isForceRender = n && 'isOpened' in e && !e.isOpened;
              var i = Object(r.a)(Object(r.a)({}, t), e);
              this._getProps().setValue(i);
            }),
            (e.prototype._requestBuiltInJavaStudies = function () {
              return this._chartWidgetCollection.activeChartWidget
                .value()
                .metaInfoRepository()
                .findAllJavaStudies();
            }),
            (e.prototype._focus = function () {
              var e;
              this._getProps().value().isOpened &&
                (null === (e = this._dialog.current) ||
                  void 0 === e ||
                  e.focus());
            }),
            (e.prototype._getContainer = function () {
              return this._container;
            }),
            (e.prototype._getDialog = function () {
              return this._dialog;
            }),
            e
          );
        })();
      n.d(t, 'IndicatorsLibraryContainer', function () {
        return re;
      });
      var re = (function (e) {
        function t(t, n) {
          var r = e.call(this, t) || this;
          return (
            (r._studies = {}),
            (r._options = { onWidget: !1 }),
            (r._getStudies = function (e) {
              return r._studies[e] || [];
            }),
            n && (r._options = n),
            (r._props = new te.a({
              data: [],
              applyStudy: r._applyStudy.bind(r),
              isOpened: !1,
              reference: r._getDialog(),
              onClose: r.hide.bind(r),
            })),
            r._getProps().subscribe(r._render.bind(r)),
            r._init(),
            r
          );
        }
        return (
          Object(r.c)(t, e),
          (t.prototype._getProps = function () {
            return this._props;
          }),
          (t.prototype._init = function () {
            return Object(r.b)(this, void 0, void 0, function () {
              var e, t, n, i;
              return Object(r.d)(this, function (a) {
                switch (a.label) {
                  case 0:
                    return [4, this._requestBuiltInJavaStudies()];
                  case 1:
                    return (
                      (e = a.sent()), (this._studies = m(f(e.map(g)))), [3, 3]
                    );
                  case 2:
                    (t = a.sent().pineBuiltInStudies),
                      (n = m(f(t.map(mapPineStudy), !1))),
                      (this._studies = Object(r.a)(
                        Object(r.a)({}, this._studies),
                        n,
                      )),
                      (a.label = 3);
                  case 3:
                    return (
                      (i = Object(r.f)(
                        this._getStudies('tv-basicstudies'),
                        this._getStudies('Script$STD'),
                      )
                        .filter(function (e) {
                          return !e.isStrategy;
                        })
                        .sort(v)),
                      this._setProps({ data: i }),
                      [2]
                    );
                }
              });
            });
          }),
          (t.prototype._render = function () {
            if (!this._shouldPreventRender()) {
              var e = this._getRenderData(),
                t = e.props,
                n = e.container;
              c.a.render(a.a.createElement(X, Object(r.a)({}, t)), n);
            }
          }),
          t
        );
      })(ne);
    },
    zztK: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="none"><path stroke="currentColor" stroke-width="1.2" d="M1 1l15 15m0-15L1 16"/></svg>';
    },
  },
]);
