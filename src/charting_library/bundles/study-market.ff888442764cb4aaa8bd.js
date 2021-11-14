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
      var i = n('mrSG'),
        r = n('q1tI'),
        a = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(i.__extends)(t, e),
            (t.prototype.shouldComponentUpdate = function () {
              return !1;
            }),
            (t.prototype.render = function () {
              return r.createElement('div', {
                style: { position: 'fixed', zIndex: 150, left: 0, top: 0 },
                ref: this.props.reference,
              });
            }),
            t
          );
        })(r.Component),
        o = r.createContext(null);
    },
    '/KDZ': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var i = n('mrSG'),
        r = n('q1tI'),
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
            Object(i.__extends)(t, e),
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
    '0NLZ': function (e, t, n) {
      e.exports = { container: 'container-V40c9xRz' };
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
      var i = n('q1tI'),
        r = function (e, t) {
          var n = void 0 === t ? {} : t,
            i = n.bubbles,
            r = void 0 !== i && i,
            a = n.cancelable,
            o = void 0 !== a && a,
            c = n.detail,
            s = void 0 === c ? null : c;
          try {
            return new window.CustomEvent(e, {
              bubbles: r,
              cancelable: o,
              detail: s,
            });
          } catch (u) {
            var l = document.createEvent('CustomEvent');
            return l.initCustomEvent(e, r, o, s), l;
          }
        },
        a = n('R5JZ');
      function o(e) {
        var t = e.click,
          n = e.mouseDown,
          o = e.touchEnd,
          c = e.touchStart,
          s = e.handler,
          l = e.reference,
          u = e.ownerDocument,
          d = void 0 === u ? document : u,
          p = Object(i.useRef)(null),
          h = Object(i.useRef)(new r('timestamp').timeStamp);
        return (
          Object(i.useLayoutEffect)(
            function () {
              var e = { click: t, mouseDown: n, touchEnd: o, touchStart: c },
                i = l ? l.current : p.current;
              return Object(a.a)(h.current, i, s, d, e);
            },
            [t, n, o, c, s],
          ),
          l || p
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
        return l;
      }),
        n.d(t, 'b', function () {
          return u;
        });
      var i = n('mrSG'),
        r = n('q1tI'),
        a = n('i8i4'),
        o = n('e3/o'),
        c = n('jAh7'),
        s = n('+EG+'),
        l = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t._uuid = Object(o.guid)()), t;
          }
          return (
            Object(i.__extends)(t, e),
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
                  r.createElement(
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
            (t.contextType = s.b),
            t
          );
        })(r.PureComponent),
        u = r.createContext(null);
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
      var i = n('mrSG'),
        r = n('q1tI'),
        a = n.n(r),
        o = n('TSYQ'),
        c = n.n(o),
        s = n('Iivm'),
        l = n('++0f'),
        u = n('2x13');
      function d(e) {
        return { isMobile: 'mobile' === e, isTablet: 'tablet' === e };
      }
      function p(e) {
        var t = e.mode,
          n = e.className,
          r = Object(i.__rest)(e, ['mode', 'className']),
          o = d(t),
          s = o.isMobile,
          l = o.isTablet,
          p = c()(u.container, l && u.isTablet, s && u.isMobile, n);
        return a.a.createElement(
          'div',
          Object(i.__assign)({}, r, {
            className: p,
            'data-role': 'dialog-sidebar',
          }),
        );
      }
      function h(e) {
        return a.a.createElement(
          'div',
          Object(i.__assign)({ className: u.wrapper }, e),
        );
      }
      function f(e) {
        var t = e.mode,
          n = e.title,
          r = e.icon,
          o = e.isActive,
          p = e.onClick,
          h = Object(i.__rest)(e, [
            'mode',
            'title',
            'icon',
            'isActive',
            'onClick',
          ]),
          f = d(t),
          m = f.isMobile,
          v = f.isTablet;
        return a.a.createElement(
          'div',
          Object(i.__assign)({}, h, {
            className: c()(
              u.tab,
              v && u.isTablet,
              m && u.isMobile,
              o && u.active,
            ),
            onClick: p,
          }),
          a.a.createElement(s.Icon, { className: u.icon, icon: r }),
          !v &&
            a.a.createElement(
              'span',
              { className: u.title },
              a.a.createElement('span', { className: u.titleText }, n),
              m && a.a.createElement(s.Icon, { className: u.nested, icon: l }),
            ),
        );
      }
    },
    Iivm: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        n('mrSG').__exportStar(n('swCq'), t);
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
      var i = n('mrSG'),
        r = n('q1tI'),
        a = n.n(r),
        o = n('TSYQ'),
        c = n.n(o),
        s = n('YFKU'),
        l = n('Iivm'),
        u = n('hYdZ'),
        d = n('MyWJ');
      function p(e) {
        var t = e.children,
          n = e.renderInput,
          r = e.onCancel,
          o = Object(i.__rest)(e, ['children', 'renderInput', 'onCancel']);
        return a.a.createElement(
          'div',
          { className: d.container },
          a.a.createElement(
            'div',
            { className: c()(d.inputContainer, r && d.withCancel) },
            n || a.a.createElement(h, Object(i.__assign)({}, o)),
          ),
          t,
          a.a.createElement(l.Icon, { className: d.icon, icon: u }),
          r &&
            a.a.createElement(
              'div',
              { className: d.cancel, onClick: r },
              Object(s.t)('Cancel'),
            ),
        );
      }
      function h(e) {
        var t = e.className,
          n = e.reference,
          r = e.value,
          o = e.onChange,
          s = e.onFocus,
          l = e.onBlur,
          u = e.onKeyDown,
          p = e.onSelect,
          h = e.placeholder,
          f = Object(i.__rest)(e, [
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
          Object(i.__assign)({}, f, {
            ref: n,
            type: 'text',
            className: c()(t, d.input),
            autoComplete: 'off',
            'data-role': 'search',
            placeholder: h,
            value: r,
            onChange: o,
            onFocus: s,
            onBlur: l,
            onSelect: p,
            onKeyDown: u,
          }),
        );
      }
    },
    QpNh: function (e, t, n) {
      'use strict';
      function i(e) {
        for (
          var t = {}, n = 0, i = Object.entries(e).filter(r);
          n < i.length;
          n++
        ) {
          var a = i[n],
            o = a[0],
            c = a[1];
          t[o] = c;
        }
        return t;
      }
      function r(e) {
        var t = e[0],
          n = e[1];
        return 0 === t.indexOf('data-') && 'string' == typeof n;
      }
      n.d(t, 'a', function () {
        return i;
      });
    },
    R5JZ: function (e, t, n) {
      'use strict';
      function i(e, t, n, i, r) {
        function a(r) {
          if (!(e > r.timeStamp)) {
            var a = r.target;
            void 0 !== n &&
              null !== t &&
              null !== a &&
              a.ownerDocument === i &&
              (t.contains(a) || n(r));
          }
        }
        return (
          r.click && i.addEventListener('click', a, !1),
          r.mouseDown && i.addEventListener('mousedown', a, !1),
          r.touchEnd && i.addEventListener('touchend', a, !1),
          r.touchStart && i.addEventListener('touchstart', a, !1),
          function () {
            i.removeEventListener('click', a, !1),
              i.removeEventListener('mousedown', a, !1),
              i.removeEventListener('touchend', a, !1),
              i.removeEventListener('touchstart', a, !1);
          }
        );
      }
      n.d(t, 'a', function () {
        return i;
      });
    },
    XfUw: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>';
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
      var i = n('q1tI'),
        r = n('TSYQ'),
        a = n('Owlf');
      n('SzKR');
      function o(e) {
        var t = r(
          'tv-spinner',
          'tv-spinner--shown',
          'tv-spinner--size_' + (e.size || a.a),
        );
        return i.createElement(
          'div',
          { className: t, style: e.style, role: 'progressbar' },
          i.createElement(
            'div',
            { className: 'tv-spinner__spinner-layer' },
            i.createElement('div', {
              className: 'tv-spinner__background tv-spinner__width_element',
            }),
            i.createElement('div', {
              className:
                'tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--left',
            }),
            i.createElement('div', {
              className:
                'tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--right',
            }),
          ),
        );
      }
    },
    pr86: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return d;
      });
      var i = n('mrSG'),
        r = (n('YFKU'), n('q1tI')),
        a = n('TSYQ'),
        o = n('Iivm'),
        c = n('sg5d'),
        s = n('XfUw'),
        l = n('fEjm'),
        u = {
          add: window.t('Add to favorites'),
          remove: window.t('Remove from favorites'),
        };
      function d(e) {
        var t = e.className,
          n = e.isFilled,
          d = e.isActive,
          p = e.onClick,
          h = Object(i.__rest)(e, [
            'className',
            'isFilled',
            'isActive',
            'onClick',
          ]);
        return r.createElement(
          o.Icon,
          Object(i.__assign)({}, h, {
            className: a(
              l.favorite,
              'apply-common-tooltip',
              n && l.checked,
              d && l.active,
              t,
            ),
            icon: n ? c : s,
            onClick: p,
            title: n ? u.remove : u.add,
          }),
        );
      }
    },
    sg5d: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M9 1l2.35 4.76 5.26.77-3.8 3.7.9 5.24L9 13l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L9 1z"/></svg>';
    },
    swCq: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.Icon = void 0);
      var i = n('mrSG'),
        r = n('q1tI');
      t.Icon = r.forwardRef(function (e, t) {
        var n = e.icon,
          a = void 0 === n ? '' : n,
          o = i.__rest(e, ['icon']);
        return r.createElement(
          'span',
          i.__assign({}, o, { ref: t, dangerouslySetInnerHTML: { __html: a } }),
        );
      });
    },
    uhCe: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var i = n('ASyk'),
        r = {
          SmallHeight: i['small-height-breakpoint'],
          TabletSmall: i['tablet-small-breakpoint'],
          TabletNormal: i['tablet-normal-breakpoint'],
        };
    },
    vbTm: function (e, t, n) {
      e.exports = { container: 'container-2xksDfDy' };
    },
    vqb8: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var i = n('q1tI'),
        r = function (e) {
          var t = 'watchedValue' in e ? e.watchedValue : void 0,
            n = 'defaultValue' in e ? e.defaultValue : e.watchedValue.value(),
            r = Object(i.useState)(t ? t.value() : n),
            a = r[0],
            o = r[1];
          return (
            Object(i.useEffect)(
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
      var i = n('mrSG'),
        r = n('q1tI'),
        a = n.n(r),
        o = n('i8i4'),
        c = n.n(o),
        s = n('YFKU'),
        l = n('mMWL'),
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
          i = t.title.toLowerCase();
        return n < i ? -1 : n > i ? 1 : 0;
      }
      var g = {
        earning: new RegExp('EPS'),
        earnings: new RegExp('EPS'),
        'trailing twelve months': new RegExp('TTM'),
      };
      function b(e) {
        var t,
          n = e.id,
          i = e.description,
          r = e.shortDescription,
          a = e.description_localized,
          o = e.is_hidden_study,
          c = e.version,
          l =
            h.enabled('graying_disabled_tools_enabled') &&
            (null === (t = window.ChartApiInstance) || void 0 === t
              ? void 0
              : t.studiesAccessController.isToolGrayed(r));
        return {
          id: n,
          title: a || Object(s.t)(i, { context: 'study' }),
          shortDescription: r,
          isStrategy: p.a.isScriptStrategy(e),
          isHidden: o,
          descriptor: { type: 'java', studyId: e.id },
          packageName: p.a.getPackageName(n),
          isGrayed: l,
          version: c,
        };
      }
      var _ = n('TSYQ'),
        y = n.n(_),
        w = n('jPOK'),
        E = n('g89m'),
        C = n('qFKp'),
        x = n('QHWU'),
        O = n('An2S'),
        S = n('0NLZ');
      function j(e) {
        var t = e.reference,
          n = e.className,
          r = Object(i.__rest)(e, ['reference', 'className']);
        return a.a.createElement(
          'div',
          Object(i.__assign)({ ref: t, className: y()(S.container, n) }, r, {
            'data-role': 'dialog-content',
          }),
        );
      }
      var k = n('cu5P');
      function N(e) {
        var t = e.children,
          n = e.className,
          i = e.disabled;
        return a.a.createElement(
          'span',
          { className: y()(k.title, i && k.disabled, n) },
          t,
        );
      }
      var I = a.a.createContext(null);
      function R(e) {
        return e.replace(/[!-/[-^{-}]/g, '\\$&');
      }
      var P = n('PSOE');
      function M(e) {
        var t = e.queryString,
          n = e.rules,
          i = e.text,
          o = e.className,
          c = Object(r.useMemo)(
            function () {
              return (function (e, t, n) {
                var i = [];
                return e && n
                  ? (n.forEach(function (e) {
                      var n = e.fullMatch,
                        r = e.re,
                        a = e.reserveRe;
                      (n.lastIndex = 0), (r.lastIndex = 0);
                      var o = n.exec(t),
                        c = o || r.exec(t) || (a && a.exec(t));
                      if (((e.fuzzyHighlight = !o), c))
                        if (e.fuzzyHighlight)
                          for (var s = c.index, l = 1; l < c.length; l++) {
                            var u = c[l],
                              d = c[l].length;
                            if (l % 2) {
                              var p =
                                u.startsWith(' ') ||
                                u.startsWith('/') ||
                                u.startsWith('-');
                              i[p ? s + 1 : s] = !0;
                            }
                            s += d;
                          }
                        else
                          for (var h = 0; h < c[0].length; h++)
                            i[c.index + h] = !0;
                    }),
                    i)
                  : i;
              })(t, i, n);
            },
            [t, n, i],
          );
        return a.a.createElement(
          r.Fragment,
          null,
          c.length
            ? i.split('').map(function (e, t) {
                return a.a.createElement(
                  r.Fragment,
                  { key: t },
                  c[t]
                    ? a.a.createElement(
                        'span',
                        { className: _(P.highlighted, o) },
                        e,
                      )
                    : a.a.createElement('span', null, e),
                );
              })
            : i,
        );
      }
      var D = n('vqb8'),
        T = n('oiZD'),
        q = n('zM7N'),
        L = n('pr86'),
        F = n('/3z9'),
        A = n('PMRz');
      function W(e) {
        var t = Object(r.useContext)(I),
          n = e.style,
          i = e.layoutMode,
          o = e.item,
          c = e.query,
          s = e.regExpRules,
          l = e.isSelected,
          u = e.isHighlighted,
          d = e.reference,
          p = e.onClick,
          h = (e.renderActions, o.isFavorite),
          f = (o.isStrategy, o.isLocked, o.public),
          m = void 0 !== h,
          v = z(p, o),
          g = Object(r.useCallback)(function (e) {
            return e.stopPropagation();
          }, []),
          b = (null == t ? void 0 : t.toggleFavorite)
            ? z(t.toggleFavorite, o)
            : void 0,
          _ = C.CheckMobile.any() && A.isMobile,
          w =
            Object(D.a)({ watchedValue: T.watchedTheme }) === q.a.Dark
              ? A.dark
              : A.light,
          E = y()(
            A.container,
            o.isGrayed && A.disabled,
            l && A.selected,
            u && A.highlighted,
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
            { className: y()(A.main, !m && A.paddingLeft) },
            m &&
              a.a.createElement(L.a, {
                className: y()(A.favorite, h && A.isActive, _),
                isFilled: h,
                onClick: b,
              }),
            a.a.createElement(
              N,
              { disabled: o.isGrayed },
              a.a.createElement(M, { queryString: c, rules: s, text: o.title }),
            ),
            !1,
          ),
          f &&
            a.a.createElement(
              'a',
              {
                href: f.authorLink,
                className: A.author,
                target: '_blank',
                onClick: g,
              },
              f.authorName,
            ),
          'mobile' !== i &&
            f &&
            a.a.createElement('span', { className: A.likes }, f.likesCount),
          !1,
        );
      }
      function z(e, t) {
        return function (n) {
          var i = 0 === Object(F.modifiersFromEvent)(n) && 0 === n.button;
          !n.defaultPrevented && e && i && (n.preventDefault(), e(t));
        };
      }
      var K = n('iYOJ');
      function B(e) {
        var t = e.title,
          n = e.type,
          i = e.className;
        return a.a.createElement(
          'h3',
          {
            className: y()(
              K.title,
              'Small' === n && K.small,
              'Normal' === n && K.normal,
              'Large' === n && K.large,
              i,
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
      var U = n('Iivm'),
        Y = n('mwqF'),
        J = n('idtP');
      function V(e) {
        var t = e.className,
          n = e.icon,
          i = e.title,
          r = e.description,
          o = e.buttonText,
          c = e.buttonAction;
        return a.a.createElement(
          'div',
          { className: y()(J.container, t) },
          n && a.a.createElement(U.Icon, { icon: n, className: J.image }),
          i && a.a.createElement('h3', { className: J.title }, i),
          r && a.a.createElement('p', { className: J.description }, r),
          o && c && a.a.createElement(Y.Button, { onClick: c }, o),
        );
      }
      function Z(e) {
        var t = Object(r.useState)(null),
          n = t[0],
          i = t[1];
        function a(e) {
          return e.findIndex(function (e) {
            return (null == n ? void 0 : n.id) === e.id;
          });
        }
        return [
          n,
          i,
          function () {
            i(
              (function () {
                var t,
                  i = a(e),
                  r = i === e.length - 1;
                return null === n || -1 === i
                  ? null !== (t = e[0]) && void 0 !== t
                    ? t
                    : null
                  : r
                  ? e[i]
                  : e[i + 1];
              })(),
            );
          },
          function () {
            i(
              (function () {
                var t,
                  i = a(e);
                return null === n || 0 === i || -1 === i
                  ? null !== (t = e[0]) && void 0 !== t
                    ? t
                    : null
                  : e[i - 1];
              })(),
            );
          },
        ];
      }
      var Q = n('9DSJ');
      function X(e) {
        var t = e.reference,
          n = e.data,
          i = e.isOpened,
          o = e.onClose,
          c = e.applyStudy,
          l = Object(r.useState)(''),
          u = l[0],
          d = l[1],
          p = Object(r.useMemo)(
            function () {
              return (function (e, t) {
                var n = [],
                  i = e.toLowerCase(),
                  r =
                    e
                      .split('')
                      .map(function (e, t) {
                        return '(' + (0 !== t ? '[/\\s-]' + R(e) : R(e)) + ')';
                      })
                      .join('(.*?)') + '(.*)';
                return (
                  n.push({
                    fullMatch: new RegExp('(' + R(e) + ')', 'i'),
                    re: new RegExp('^' + r, 'i'),
                    reserveRe: new RegExp(r, 'i'),
                    fuzzyHighlight: !0,
                  }),
                  t &&
                    t.hasOwnProperty(i) &&
                    n.push({ fullMatch: t[i], re: t[i], fuzzyHighlight: !1 }),
                  n
                );
              })(u, g);
            },
            [u],
          ),
          h = Object(r.useMemo)(
            function () {
              return u
                ? (function (e) {
                    var t = e.data,
                      n = e.rules,
                      i = e.queryString,
                      r = e.isPreventedFromFiltering,
                      a = e.primaryKey,
                      o = e.secondaryKey,
                      c = void 0 === o ? a : o;
                    return t
                      .map(function (e) {
                        var t,
                          r = e[a],
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
                              r.toLowerCase() === i.toLowerCase()
                                ? ((s = 3),
                                  void (t =
                                    null === (n = r.match(d)) || void 0 === n
                                      ? void 0
                                      : n.index))
                                : d.test(r)
                                ? ((s = 2),
                                  void (t =
                                    null === (a = r.match(d)) || void 0 === a
                                      ? void 0
                                      : a.index))
                                : d.test(o)
                                ? ((s = 1),
                                  void (t =
                                    null === (c = r.match(d)) || void 0 === c
                                      ? void 0
                                      : c.index))
                                : void (
                                    u.test(o) &&
                                    ((s = 1),
                                    (t =
                                      null === (l = r.match(u)) || void 0 === l
                                        ? void 0
                                        : l.index))
                                  )
                            );
                          }),
                          { matchPriority: s, matchIndex: t, item: e }
                        );
                      })
                      .filter(function (e) {
                        return r || e.matchPriority;
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
                  })
                : n;
            },
            [u, p, n],
          ),
          f = (function (e, t, n, i) {
            var a = 0,
              o = Object(r.useState)(null),
              c = o[0],
              s = o[1],
              l = Object(r.useRef)(null),
              u = Object(r.useRef)(null),
              d = Z(t),
              p = d[0],
              h = d[1],
              f = d[2],
              m = d[3],
              v = Object(r.useRef)(null);
            return (
              Object(r.useEffect)(
                function () {
                  e ? g(0) : h(null);
                },
                [e],
              ),
              Object(r.useEffect)(
                function () {
                  void 0 !== i && (g(0), h(null));
                },
                [i],
              ),
              Object(r.useEffect)(
                function () {
                  return (
                    c &&
                      (a = setTimeout(function () {
                        s(null);
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
                scrollContainerRef: l,
                selectedNodeReference: u,
                selectedItem: p,
                searchInputRef: v,
                onClickStudy: function (e) {
                  if (!n) return;
                  n(e), h(e), s(e);
                },
                handleKeyDown: function (e) {
                  var t = (function (e, t) {
                      if (null === e.current || null === t.current)
                        return [0, 0];
                      var n = e.current.getBoundingClientRect(),
                        i = t.current.getBoundingClientRect(),
                        r = n.height,
                        a = n.top - i.top,
                        o = n.bottom - i.bottom + r < 0 ? 0 : r,
                        c = a - r > 0 ? 0 : r,
                        s = t.current.scrollTop;
                      return [s - c, s + o];
                    })(u, l),
                    i = t[0],
                    r = t[1];
                  40 === Object(F.hashFromEvent)(e) &&
                    (e.preventDefault(), f(), g(r));
                  38 === Object(F.hashFromEvent)(e) &&
                    (e.preventDefault(), m(), g(i));
                  if (13 === Object(F.hashFromEvent)(e) && p) {
                    if (!n) return;
                    n(p), s(p);
                  }
                },
              }
            );
            function g(e) {
              null !== l.current &&
                l.current.scrollTo &&
                l.current.scrollTo(0, e);
            }
          })(i, h, c),
          m = f.highlightedItem,
          v = f.selectedItem,
          b = f.selectedNodeReference,
          _ = f.scrollContainerRef,
          S = f.searchInputRef,
          k = f.onClickStudy,
          N = f.handleKeyDown,
          I = '' === u && !h.length;
        return (
          Object(r.useEffect)(
            function () {
              var e;
              i || d(''),
                C.CheckMobile.any() ||
                  null === (e = S.current) ||
                  void 0 === e ||
                  e.focus();
            },
            [i],
          ),
          a.a.createElement(E.a, {
            isOpened: i,
            onClose: o,
            onClickOutside: o,
            className: y()(Q.dialogLibrary),
            render: function () {
              return a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(x.a, {
                  reference: S,
                  placeholder: Object(s.t)('Search'),
                  onChange: P,
                  onFocus: M,
                }),
                a.a.createElement(
                  O.c,
                  null,
                  a.a.createElement(
                    j,
                    { reference: _, className: Q.scroll },
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
                              title: Object(s.t)('Script name'),
                            }),
                          ),
                          h.map(function (e) {
                            var t = (null == v ? void 0 : v.id) === e.id;
                            return a.a.createElement(W, {
                              key: e.id,
                              item: e,
                              onClick: function () {
                                return k(e);
                              },
                              query: u,
                              regExpRules: p,
                              reference: t ? b : void 0,
                              isSelected: (null == v ? void 0 : v.id) === e.id,
                              isHighlighted:
                                (null == m ? void 0 : m.id) === e.id,
                            });
                          }),
                        )
                      : a.a.createElement(V, {
                          className: Q.noContentBlock,
                          description: Object(s.t)(
                            'No indicators matched your criteria.',
                          ),
                        }),
                  ),
                ),
              );
            },
            title: Object(s.t)('Indicators'),
            dataName: 'indicators-dialog',
            onKeyDown: N,
            ref: t,
          })
        );
        function P(e) {
          d(e.target.value);
        }
        function M() {
          var e;
          u.length > 0 &&
            (null === (e = S.current) || void 0 === e || e.select());
        }
      }
      var $ = n('aIyQ'),
        ee = n.n($),
        te = n('FQhm'),
        ne = (function () {
          function e(e) {
            (this._searchInputRef = a.a.createRef()),
              (this._dialog = a.a.createRef()),
              (this._visibilityChanged = new ee.a()),
              (this._container = document.createElement('div')),
              (this._isForceRender = !1),
              (this._parentSource = null),
              (this._isDestroyed = !1),
              (this._chartWidgetCollection = e);
          }
          return (
            (e.prototype.isVisible = function () {
              return this._getProps().value().isOpened;
            }),
            (e.prototype.isDestroyed = function () {
              return this._isDestroyed;
            }),
            (e.prototype.getVisibilityChanged = function () {
              return this._visibilityChanged;
            }),
            (e.prototype.updateUserStudies = function () {}),
            (e.prototype.resetAllStudies = function () {}),
            (e.prototype.updateFavorites = function () {}),
            (e.prototype.open = function (e) {
              (this._parentSource = null != e ? e : null),
                this._setProps({ isOpened: !0 }),
                this._visibilityChanged.fire(!0),
                te.emit('indicators_dialog');
            }),
            (e.prototype.hide = function () {
              (this._parentSource = null),
                this._setProps({ isOpened: !1 }),
                this._visibilityChanged.fire(!1);
            }),
            (e.prototype.destroy = function () {
              (this._isDestroyed = !0),
                c.a.unmountComponentAtNode(this._container);
            }),
            (e.prototype._shouldPreventRender = function () {
              return (
                this._isDestroyed || (!this._isForceRender && !this.isVisible())
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
                r = this;
              e.isGrayed
                ? te.emit('onGrayedObjectClicked', {
                    type: 'study',
                    name: e.shortDescription,
                  })
                : (C.CheckMobile.any() ||
                    null === (t = this._searchInputRef.current) ||
                    void 0 === t ||
                    t.select(),
                  (function (e, t, n) {
                    return Object(i.__awaiter)(
                      this,
                      void 0,
                      void 0,
                      function () {
                        var r, a, o;
                        return Object(i.__generator)(this, function (i) {
                          return 'java' === (r = t.descriptor).type &&
                            null !==
                              (a = Object(u.tryFindStudyLineToolNameByStudyId)(
                                r.studyId,
                              ))
                            ? (l.tool.setValue(a), [2, null])
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
                      },
                    );
                  })(
                    this._chartWidgetCollection,
                    e,
                    null !== (n = this._parentSource) && void 0 !== n
                      ? n
                      : void 0,
                  ).then(function () {
                    var e;
                    C.CheckMobile.any() ||
                      null === (e = r._searchInputRef.current) ||
                      void 0 === e ||
                      e.focus();
                  }));
            }),
            (e.prototype._setProps = function (e) {
              var t = this._getProps().value(),
                n = t.isOpened;
              this._isForceRender = n && 'isOpened' in e && !e.isOpened;
              var r = Object(i.__assign)(Object(i.__assign)({}, t), e);
              this._getProps().setValue(r);
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
        })(),
        ie = n('hY0g'),
        re = n.n(ie);
      n.d(t, 'IndicatorsLibraryContainer', function () {
        return ae;
      });
      var ae = (function (e) {
        function t(t, n) {
          var i = e.call(this, t) || this;
          return (
            (i._studies = {}),
            (i._options = { onWidget: !1 }),
            (i._getStudies = function (e) {
              return i._studies[e] || [];
            }),
            n && (i._options = n),
            (i._props = new re.a({
              data: [],
              applyStudy: i._applyStudy.bind(i),
              isOpened: !1,
              reference: i._getDialog(),
              onClose: i.hide.bind(i),
            })),
            i._getProps().subscribe(i._render.bind(i)),
            i._init(),
            i
          );
        }
        return (
          Object(i.__extends)(t, e),
          (t.prototype._getProps = function () {
            return this._props;
          }),
          (t.prototype._init = function () {
            return Object(i.__awaiter)(this, void 0, void 0, function () {
              var e, t, n, r;
              return Object(i.__generator)(this, function (a) {
                switch (a.label) {
                  case 0:
                    return [4, this._requestBuiltInJavaStudies()];
                  case 1:
                    return (
                      (e = a.sent()), (this._studies = m(f(e.map(b)))), [3, 3]
                    );
                  case 2:
                    (t = a.sent().pineBuiltInStudies),
                      (n = m(f(t.map(mapPineStudy), !1))),
                      (this._studies = Object(i.__assign)(
                        Object(i.__assign)({}, this._studies),
                        n,
                      )),
                      (a.label = 3);
                  case 3:
                    return (
                      (r = Object(i.__spreadArrays)(
                        this._getStudies('tv-basicstudies'),
                        this._getStudies('Script$STD'),
                      )
                        .filter(function (e) {
                          return !e.isStrategy;
                        })
                        .sort(v)),
                      this._setProps({ data: r }),
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
              c.a.render(a.a.createElement(X, Object(i.__assign)({}, t)), n);
            }
          }),
          t
        );
      })(ne);
    },
  },
]);
