(window.webpackJsonp = window.webpackJsonp || []).push([
  ['study-market'],
  {
    '++0f': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentcolor" stroke-width="1.3" d="M12 9l5 5-5 5"/></svg>';
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
    An2S: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return h;
      }),
        n.d(t, 'c', function () {
          return p;
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
      function h(e) {
        var t = e.mode,
          n = e.className,
          r = Object(i.__rest)(e, ['mode', 'className']),
          o = d(t),
          s = o.isMobile,
          l = o.isTablet,
          h = c()(u.container, l && u.isTablet, s && u.isMobile, n);
        return a.a.createElement(
          'div',
          Object(i.__assign)({}, r, {
            className: h,
            'data-role': 'dialog-sidebar',
          }),
        );
      }
      function p(e) {
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
          h = e.onClick,
          p = Object(i.__rest)(e, [
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
          Object(i.__assign)({}, p, {
            className: c()(
              u.tab,
              v && u.isTablet,
              m && u.isMobile,
              o && u.active,
            ),
            onClick: h,
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
        return h;
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
      function h(e) {
        var t = e.renderInput,
          n = e.onCancel,
          r = Object(i.__rest)(e, ['renderInput', 'onCancel']);
        return a.a.createElement(
          'div',
          { className: d.container },
          a.a.createElement(
            'div',
            { className: c()(d.inputContainer, n && d.withCancel) },
            t || a.a.createElement(p, Object(i.__assign)({}, r)),
          ),
          a.a.createElement(l.Icon, { className: d.icon, icon: u }),
          n &&
            a.a.createElement(
              'div',
              { className: d.cancel, onClick: n },
              Object(s.t)('Cancel'),
            ),
        );
      }
      function p(e) {
        var t = e.className,
          n = e.reference,
          r = e.value,
          o = e.onChange,
          s = e.onFocus,
          l = e.onKeyDown,
          u = e.onSelect,
          h = e.placeholder,
          p = Object(i.__rest)(e, [
            'className',
            'reference',
            'value',
            'onChange',
            'onFocus',
            'onKeyDown',
            'onSelect',
            'placeholder',
          ]);
        return a.a.createElement(
          'input',
          Object(i.__assign)({}, p, {
            ref: n,
            type: 'text',
            className: c()(t, d.input),
            autoComplete: 'off',
            'data-role': 'search',
            placeholder: h,
            value: r,
            onChange: o,
            onFocus: s,
            onSelect: u,
            onKeyDown: l,
          }),
        );
      }
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
          h = e.onClick,
          p = Object(i.__rest)(e, [
            'className',
            'isFilled',
            'isActive',
            'onClick',
          ]);
        return r.createElement(
          o.Icon,
          Object(i.__assign)({}, p, {
            className: a(
              l.favorite,
              'apply-common-tooltip',
              n && l.checked,
              d && l.active,
              t,
            ),
            icon: n ? c : s,
            onClick: h,
            title: n ? u.remove : u.add,
          }),
        );
      }
    },
    sg5d: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M9 1l2.35 4.76 5.26.77-3.8 3.7.9 5.24L9 13l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L9 1z"/></svg>';
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
        h = n.n(d),
        p = n('Kxc7');
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
            p.enabled('graying_disabled_tools_enabled') &&
            (null === (t = window.ChartApiInstance) || void 0 === t
              ? void 0
              : t.studiesAccessController.isToolGrayed(r));
        return {
          id: n,
          title: a || Object(s.t)(i, { context: 'study' }),
          shortDescription: r,
          isStrategy: h.a.isScriptStrategy(e),
          isHidden: o,
          descriptor: { type: 'java', studyId: e.id },
          packageName: h.a.getPackageName(n),
          isGrayed: l,
          version: c,
        };
      }
      var _ = n('TSYQ'),
        y = n.n(_),
        w = n('jPOK'),
        C = n('g89m'),
        E = n('qFKp'),
        O = n('QHWU'),
        x = n('An2S'),
        j = n('0NLZ');
      function N(e) {
        var t = e.reference,
          n = e.className,
          r = Object(i.__rest)(e, ['reference', 'className']);
        return a.a.createElement(
          'div',
          Object(i.__assign)({ ref: t, className: y()(j.container, n) }, r, {
            'data-role': 'dialog-content',
          }),
        );
      }
      var S = n('cu5P');
      function k(e) {
        var t = e.className,
          n = e.disabled,
          r = Object(i.__rest)(e, ['className', 'disabled']);
        return a.a.createElement(
          'span',
          Object(i.__assign)({}, r, {
            className: y()(S.title, n && S.disabled, t),
          }),
        );
      }
      var I = a.a.createContext(null);
      function P(e) {
        return e.replace(/[!-\/[-^{-}]/g, '\\$&');
      }
      var R = n('PSOE');
      function D(e) {
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
                              var h =
                                u.startsWith(' ') ||
                                u.startsWith('/') ||
                                u.startsWith('-');
                              i[h ? s + 1 : s] = !0;
                            }
                            s += d;
                          }
                        else
                          for (var p = 0; p < c[0].length; p++)
                            i[c.index + p] = !0;
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
                        { className: _(R.highlighted, o) },
                        e,
                      )
                    : e,
                );
              })
            : i,
        );
      }
      var M = n('vqb8'),
        F = n('oiZD'),
        T = n('zM7N'),
        z = n('pr86'),
        K = n('/3z9'),
        L = n('PMRz');
      function A(e) {
        var t = Object(r.useContext)(I),
          n = e.style,
          i = e.layoutMode,
          o = e.item,
          c = e.query,
          s = e.regExpRules,
          l = e.isSelected,
          u = e.isHighlighted,
          d = e.reference,
          h = e.onClick,
          p = (e.renderActions, o.isFavorite),
          f = (o.isStrategy, o.isLocked, o.public),
          m = void 0 !== p,
          v = W(h, o),
          g = Object(r.useCallback)(function (e) {
            return e.stopPropagation();
          }, []),
          b = (null == t ? void 0 : t.toggleFavorite)
            ? W(t.toggleFavorite, o)
            : void 0,
          _ = E.CheckMobile.any() && L.isMobile,
          w =
            Object(M.a)({ watchedValue: F.watchedTheme }) === T.a.Dark
              ? L.dark
              : L.light,
          C = y()(
            L.container,
            o.isGrayed && L.disabled,
            l && L.selected,
            u && L.highlighted,
            u && w,
          );
        return a.a.createElement(
          'div',
          {
            ref: d,
            className: C,
            onClick: v,
            style: n,
            'data-role': 'list-item',
            'data-disabled': o.isGrayed,
          },
          a.a.createElement(
            'div',
            { className: y()(L.main, !m && L.paddingLeft) },
            m &&
              a.a.createElement(z.a, {
                className: y()(L.favorite, p && L.isActive, _),
                isFilled: p,
                onClick: b,
              }),
            a.a.createElement(
              k,
              { title: o.title, disabled: o.isGrayed },
              a.a.createElement(D, { queryString: c, rules: s, text: o.title }),
            ),
            !1,
          ),
          f &&
            a.a.createElement(
              'a',
              {
                href: f.authorLink,
                className: L.author,
                target: '_blank',
                onClick: g,
              },
              f.authorName,
            ),
          'mobile' !== i &&
            f &&
            a.a.createElement('span', { className: L.likes }, f.likesCount),
          !1,
        );
      }
      function W(e, t) {
        return function (n) {
          var i = 0 === Object(K.modifiersFromEvent)(n) && 0 === n.button;
          !n.defaultPrevented && e && i && (n.preventDefault(), e(t));
        };
      }
      var q = n('iYOJ');
      function B(e) {
        var t = e.title,
          n = e.type,
          i = e.className;
        return a.a.createElement(
          'h3',
          {
            className: y()(
              q.title,
              'Small' === n && q.small,
              'Normal' === n && q.normal,
              'Large' === n && q.large,
              i,
            ),
          },
          t,
        );
      }
      var Y = n('vbTm');
      function G(e) {
        var t = e.style,
          n = e.children;
        return a.a.createElement(
          'div',
          { style: t, className: Y.container },
          n,
        );
      }
      var H = n('Iivm'),
        V = n('mwqF'),
        J = n('idtP');
      function Q(e) {
        var t = e.className,
          n = e.icon,
          i = e.title,
          r = e.description,
          o = e.buttonText,
          c = e.buttonAction;
        return a.a.createElement(
          'div',
          { className: y()(J.container, t) },
          n && a.a.createElement(H.Icon, { icon: n, className: J.image }),
          i && a.a.createElement('h3', { className: J.title }, i),
          r && a.a.createElement('p', { className: J.description }, r),
          o && c && a.a.createElement(V.Button, { onClick: c }, o),
        );
      }
      function U(e) {
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
      var Z = n('9DSJ');
      function X(e) {
        var t = e.reference,
          n = e.data,
          i = e.isOpened,
          o = e.onClose,
          c = e.applyStudy,
          l = Object(r.useState)(''),
          u = l[0],
          d = l[1],
          h = Object(r.useMemo)(
            function () {
              return (function (e, t) {
                var n = [],
                  i = e.toLowerCase(),
                  r =
                    e
                      .split('')
                      .map(function (e, t) {
                        return '(' + (0 !== t ? '[/\\s-]' + P(e) : P(e)) + ')';
                      })
                      .join('(.*?)') + '(.*)';
                return (
                  n.push({
                    fullMatch: new RegExp('(' + P(e) + ')', 'i'),
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
          p = Object(r.useMemo)(
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
                    rules: h,
                    queryString: u,
                    primaryKey: 'shortDescription',
                    secondaryKey: 'title',
                  })
                : n;
            },
            [u, h, n],
          ),
          f = (function (e, t, n, i) {
            var a = 0,
              o = Object(r.useState)(null),
              c = o[0],
              s = o[1],
              l = Object(r.useRef)(null),
              u = Object(r.useRef)(null),
              d = U(t),
              h = d[0],
              p = d[1],
              f = d[2],
              m = d[3],
              v = Object(r.useRef)(null);
            return (
              Object(r.useEffect)(
                function () {
                  e ? g(0) : p(null);
                },
                [e],
              ),
              Object(r.useEffect)(
                function () {
                  void 0 !== i && (g(0), p(null));
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
                selectedItem: h,
                searchInputRef: v,
                onClickStudy: function (e) {
                  if (!n) return;
                  n(e), p(e), s(e);
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
                  40 === Object(K.hashFromEvent)(e) &&
                    (e.preventDefault(), f(), g(r));
                  38 === Object(K.hashFromEvent)(e) &&
                    (e.preventDefault(), m(), g(i));
                  if (13 === Object(K.hashFromEvent)(e) && h) {
                    if (!n) return;
                    n(h), s(h);
                  }
                },
              }
            );
            function g(e) {
              null !== l.current &&
                l.current.scrollTo &&
                l.current.scrollTo(0, e);
            }
          })(i, p, c),
          m = f.highlightedItem,
          v = f.selectedItem,
          b = f.selectedNodeReference,
          _ = f.scrollContainerRef,
          j = f.searchInputRef,
          S = f.onClickStudy,
          k = f.handleKeyDown,
          I = '' === u && !p.length;
        return (
          Object(r.useEffect)(
            function () {
              var e;
              i || d(''),
                E.CheckMobile.any() ||
                  null === (e = j.current) ||
                  void 0 === e ||
                  e.focus();
            },
            [i],
          ),
          a.a.createElement(C.a, {
            isOpened: i,
            onClose: o,
            onClickOutside: o,
            className: y()(Z.dialogLibrary),
            render: function () {
              return a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(O.a, {
                  reference: j,
                  placeholder: Object(s.t)('Search'),
                  onChange: R,
                  onFocus: D,
                }),
                a.a.createElement(
                  x.c,
                  null,
                  a.a.createElement(
                    N,
                    { reference: _, className: Z.scroll },
                    I
                      ? a.a.createElement(w.a, null)
                      : p.length
                      ? a.a.createElement(
                          a.a.Fragment,
                          null,
                          a.a.createElement(
                            G,
                            null,
                            a.a.createElement(B, {
                              title: Object(s.t)('Script name'),
                            }),
                          ),
                          p.map(function (e) {
                            var t = (null == v ? void 0 : v.id) === e.id;
                            return a.a.createElement(A, {
                              key: e.id,
                              item: e,
                              onClick: function () {
                                return S(e);
                              },
                              query: u,
                              regExpRules: h,
                              reference: t ? b : void 0,
                              isSelected: (null == v ? void 0 : v.id) === e.id,
                              isHighlighted:
                                (null == m ? void 0 : m.id) === e.id,
                            });
                          }),
                        )
                      : a.a.createElement(Q, {
                          className: Z.noContentBlock,
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
            onKeyDown: k,
            ref: t,
          })
        );
        function R(e) {
          d(e.target.value);
        }
        function D() {
          var e;
          u.length > 0 &&
            (null === (e = j.current) || void 0 === e || e.select());
        }
      }
      var $ = n('aIyQ'),
        ee = n.n($),
        te = n('FQhm'),
        ne = (function () {
          function e(e) {
            (this._visibilityChanged = new ee.a()),
              (this._dialog = a.a.createRef()),
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
              var t;
              e.isGrayed
                ? te.emit('onGrayedObjectClicked', {
                    type: 'study',
                    name: e.shortDescription,
                  })
                : (function (e, t, n) {
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
                    null !== (t = this._parentSource) && void 0 !== t
                      ? t
                      : void 0,
                  ).then(this._focus.bind(this));
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
