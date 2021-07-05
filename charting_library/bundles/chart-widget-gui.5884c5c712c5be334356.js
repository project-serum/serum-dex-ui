(window.webpackJsonp = window.webpackJsonp || []).push([
  ['chart-widget-gui'],
  {
    '+jnJ': function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return s;
      }),
        i.d(e, 'b', function () {
          return a;
        });
      i('YFKU'), i('bf9a');
      var s,
        o = i('m/cY'),
        n = i('Vdly');
      function l(t) {
        return t === s.AlwaysOn || t === s.AlwaysOff ? t : s.VisibleOnMouseOver;
      }
      function a(t, e) {
        var i, a;
        function r() {
          if (!i) {
            i = Object(o.a)();
            var s = n.getValue(t);
            void 0 === s && void 0 !== e && (s = n.getValue(e)),
              i.setValue(l(s)),
              i.subscribe(i, function (e) {
                n.setValue(t, l(e.value()));
              });
          }
          return i;
        }
        return {
          property: r,
          availableValues: function () {
            return [
              {
                value: s.VisibleOnMouseOver,
                title: window.t('Visible on Mouse Over'),
              },
              { value: s.AlwaysOn, title: window.t('Always Visible') },
              { value: s.AlwaysOff, title: window.t('Always Invisible') },
            ];
          },
          actualBehavior: function () {
            if (!a) {
              a = Object(o.a)();
              var t = r(),
                e = function () {
                  var e = t.value();
                  e !== s.AlwaysOn &&
                    e !== s.AlwaysOff &&
                    (e = Modernizr.mobiletouch
                      ? s.AlwaysOn
                      : s.VisibleOnMouseOver),
                    a && a.setValue(e);
                };
              t.subscribe(a, e), e();
            }
            return a;
          },
        };
      }
      !(function (t) {
        (t.AlwaysOn = 'alwaysOn'),
          (t.VisibleOnMouseOver = 'visibleOnMouseOver'),
          (t.AlwaysOff = 'alwaysOff');
      })(s || (s = {}));
    },
    '/NcV': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.5 1.5l5 5.5-5 5.5"/></svg>';
    },
    '0jws': function (t, e, i) {
      t.exports = {
        blockHidden: 'blockHidden-pECc1q1w',
        'pane-button': 'pane-button-3IbFaPrJ',
      };
    },
    '1ANp': function (t, e, i) {
      'use strict';
      i.r(e),
        i.d(e, 'navigationButtonsVisibilityKey', function () {
          return n;
        }),
        i.d(e, 'property', function () {
          return l;
        }),
        i.d(e, 'availableValues', function () {
          return a;
        }),
        i.d(e, 'actualBehavior', function () {
          return r;
        });
      var s,
        o = i('+jnJ'),
        n = 'NavigationButtons.visibility',
        l = (s = Object(o.b)(n)).property,
        a = s.availableValues,
        r = s.actualBehavior;
    },
    '1Wf8': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M3.5 2.8a.7.7 0 0 0-.7.7V6H1.2V3.5a2.3 2.3 0 0 1 2.3-2.3h11a2.3 2.3 0 0 1 2.3 2.3V6h-1.6V3.5a.7.7 0 0 0-.7-.7h-11z" class="bracket-up"/><path fill="currentColor" d="M3.5 15.2a.7.7 0 0 1-.7-.7V12H1.2v2.5a2.3 2.3 0 0 0 2.3 2.3h11a2.3 2.3 0 0 0 2.3-2.3V12h-1.6v2.5a.7.7 0 0 1-.7.7h-11z" class="bracket-down"/></svg>';
    },
    '2CEX': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6 6.5A2.5 2.5 0 0 1 8.5 4H10v1H8.5C7.67 5 7 5.67 7 6.5v1.15a3.5 3.5 0 0 1-1.93 3.13l-.45.22.45.22A3.5 3.5 0 0 1 7 14.35v1.15c0 .83.67 1.5 1.5 1.5H10v1H8.5A2.5 2.5 0 0 1 6 15.5v-1.15a2.5 2.5 0 0 0-1.38-2.23l-1.34-.67a.5.5 0 0 1 0-.9l1.34-.67A2.5 2.5 0 0 0 6 7.65V6.5zM15.5 5H14V4h1.5A2.5 2.5 0 0 1 18 6.5v1.15c0 .94.54 1.8 1.38 2.23l1.34.67a.5.5 0 0 1 0 .9l-1.34.67A2.5 2.5 0 0 0 18 14.35v1.15a2.5 2.5 0 0 1-2.5 2.5H14v-1h1.5c.83 0 1.5-.67 1.5-1.5v-1.15a3.5 3.5 0 0 1 1.93-3.13l.45-.22-.45-.22A3.5 3.5 0 0 1 17 7.65V6.5c0-.83-.67-1.5-1.5-1.5z"/></svg>';
    },
    '5Alx': function (t, e, i) {
      t.exports = {
        legend: 'legend-29zvAld0',
        item: 'item-3eXPhOmy',
        series: 'series-12hzsxbp',
        withAction: 'withAction-1y86Ymm9',
        selected: 'selected-2qw9PFUJ',
        last: 'last-3Xus0HXW',
        text: 'text-1pYqyE6B',
        noWrapWrapper: 'noWrapWrapper-AC879h-w',
        noWrap: 'noWrap-ODIQgNap',
        valuesAdditionalWrapper: 'valuesAdditionalWrapper-3BfAIuML',
        valueItem: 'valueItem-3JDGGSt_',
        valueTitle: 'valueTitle-1myNPdtH',
        valueValue: 'valueValue-3kA0oJs5',
        valuesWrapper: 'valuesWrapper-1ukbb5SP',
        directionColumn: 'directionColumn-abL_Vsle',
        titleWrapper: 'titleWrapper-1Zs2rjQ6',
        button: 'button-22Ex8G2W',
        statusesWrapper: 'statusesWrapper-GnubQvDb',
        buttonsWrapper: 'buttonsWrapper-3eBZpnXm',
        buttons: 'buttons-1-XhYDHM',
        study: 'study-lgC0tuTJ',
        disabled: 'disabled-3P6bUcMx',
        touchMode: 'touchMode-2jC98z1-',
        has5Buttons: 'has5Buttons-3tuydZU5',
        noActions: 'noActions-1D515O5o',
        title: 'title-bcHj6pEn',
        title2nd: 'title2nd-2igtq1cH',
        withCustomTextColor: 'withCustomTextColor-Pw_dabsC',
        title1st: 'title1st-2at68hKe',
        error: 'error-3bH8KJfF',
        stayInHoveredMode: 'stayInHoveredMode-3K55nNni',
        withTail: 'withTail-2tfD0t7T',
        loading: 'loading-37LPn65g',
        loader: 'loader-iCjkbLoX',
        withDot: 'withDot-VrJCTK--',
        title3rd: 'title3rd-2bpagZ7H',
        title4th: 'title4th-28_-ZX9R',
        miniHidden2Title: 'miniHidden2Title-1xHUL0G8',
        microHidden2Title: 'microHidden2Title-37EAZYGX',
        hidden3Title: 'hidden3Title-22u6NoOK',
        flagged: 'flagged-3lOrkL__',
        minimized: 'minimized-25_VM9I8',
        onlyOneButtonCanBeStick: 'onlyOneButtonCanBeStick-16Vrffc6',
        buttonIcon: 'buttonIcon-2lrp9MHZ',
        flag: 'flag-1kqFt7GH',
        eye: 'eye-3mqNMkLJ',
        hiddenLoading: 'hiddenLoading-hcuRRcWh',
        'eye-animation': 'eye-animation-1pyfCZvS',
        sourcesWrapper: 'sourcesWrapper-2JcXD9TK',
        newCollapser: 'newCollapser-1F6pNRDi',
        sources: 'sources-6Hp4M7li',
        toggler: 'toggler-_SUZ7r_5 pane-button-3IbFaPrJ',
        counter: 'counter-1hG1zy7A',
        iconArrow: 'iconArrow-3q7vxxnz',
        objectTree: 'objectTree-2tLil0dm',
        closed: 'closed-1Sz6CztG',
        micro: 'micro-1-90nTmg',
      };
    },
    '6dGu': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M3.5 5.58c.24-.28.65-.3.92-.07L7.5 8.14l3.08-2.63a.65.65 0 1 1 .84.98L7.5 9.86 3.58 6.49a.65.65 0 0 1-.07-.91z"/></svg>';
    },
    '94TV': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.5 1.5l5 5.5-5 5.5M3 4l2.5 3L3 10"/></svg>';
    },
    '956S': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><circle fill="currentColor" cx="15" cy="9" r="1.5"/><circle fill="currentColor" cx="9" cy="9" r="1.5"/><circle fill="currentColor" cx="3" cy="9" r="1.5"/></svg>';
    },
    '9Crk': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M14.12 5.27c-.49 1.89-1.36 2.83-2.63 2.83-.6 0-1.45-.17-2.55-.52a8.92 8.92 0 0 0-2.3-.53c-.65 0-1.14.35-1.48 1.05H3.92a4 4 0 0 1 .89-2c.46-.55 1-.83 1.62-.83.66 0 1.54.18 2.66.53 1.1.35 1.9.52 2.35.52.74 0 1.23-.35 1.47-1.05h1.2zm0 4.51c-.49 1.89-1.36 2.83-2.63 2.83-.6 0-1.45-.17-2.55-.52a8.92 8.92 0 0 0-2.3-.53c-.65 0-1.14.35-1.48 1.05H3.92a4 4 0 0 1 .89-2c.46-.55 1-.83 1.62-.83.66 0 1.54.18 2.66.54 1.1.34 1.9.51 2.35.51.74 0 1.23-.35 1.47-1.05h1.2z"/></svg>';
    },
    '9lPX': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><rect width="10" height="4" fill="currentColor" rx="2" x="4" y="7"/></svg>';
    },
    AH3n: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M13 12.78V5.22a.3.3 0 0 0-.51-.2L8.7 8.78a.3.3 0 0 0 0 .42L12.5 13a.3.3 0 0 0 .51-.21zM8 12.78V5.22a.3.3 0 0 0-.51-.2L3.7 8.78a.3.3 0 0 0 0 .42L7.5 13a.3.3 0 0 0 .51-.21z"/></svg>';
    },
    D8x7: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.35 6.35l-10 10-.7-.7 10-10 .7.7z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6.65 6.35l10 10 .7-.7-10-10-.7.7z"/></svg>';
    },
    EV8o: function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return o;
      });
      var s = i('ogJP');
      function o(t, e, i, o) {
        var n = document.createElement('div');
        (n.className = e),
          n.classList.toggle(o, !t.visible.value()),
          Object.assign(n.dataset, t.dataset),
          void 0 !== t.className && n.classList.add(t.className),
          void 0 !== t.title &&
            (n.classList.add('apply-common-tooltip'),
            n.setAttribute('title', t.title.value()),
            void 0 !== t.hotKeyTitle &&
              (n.dataset.tooltipHotkey = t.hotKeyTitle)),
          n.addEventListener('touchend', t.action),
          n.addEventListener('mousedown', function (e) {
            0 === e.button && t.action(e);
          });
        var l = document.createElement('div');
        return (
          l.classList.add(i),
          Object(s.isString)(t.icon)
            ? (l.innerHTML = t.icon)
            : l.appendChild(t.icon),
          n.appendChild(l),
          n
        );
      }
    },
    G2LI: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12.57 5.5h-.07a3.5 3.5 0 1 0 .07 7A4.98 4.98 0 0 1 4 9a5 5 0 0 1 8.57-3.5z"/></svg>';
    },
    'Gp/h': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12.22 11.78A3.47 3.47 0 0 0 9 6.98a3.48 3.48 0 0 0-3.22 4.8 6.97 6.97 0 0 1 6.44 0zM4.18 9.83L2.1 9.28l.33-1.24 2.07.55-.33 1.24zM6.38 6.36l-.9-1.94 1.16-.54.9 1.94-1.16.54zM10.46 5.82l.9-1.94 1.16.54-.9 1.94-1.16-.54zM13.49 8.6l2.07-.56.33 1.24-2.07.55-.33-1.24z"/></svg>';
    },
    H72D: function (t, e, i) {
      'use strict';
      !(function (t) {
        function e(t) {
          return t instanceof Node ? t : document.createTextNode(String(t));
        }
        for (
          var i = 0,
            s = [
              Element.prototype,
              Document.prototype,
              DocumentFragment.prototype,
            ];
          i < s.length;
          i++
        ) {
          var o = s[i];
          if (o.hasOwnProperty('append')) return;
          Object.defineProperty(o, 'append', {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function () {
              for (var t = [], i = 0; i < arguments.length; i++)
                t[i] = arguments[i];
              if (1 !== t.length) {
                for (
                  var s = document.createDocumentFragment(), o = 0, n = t;
                  o < n.length;
                  o++
                ) {
                  var l = n[o];
                  s.appendChild(e(l));
                }
                this.appendChild(s);
              } else this.appendChild(e(t[0]));
            },
          });
        }
      })();
    },
    Jjb7: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.5 4.5l-9 9M4.5 4.5l9 9"/></svg>';
    },
    JmzL: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9 4c-.79 0-1.38.7-1.25 1.48l.67 4.03a.59.59 0 0 0 1.16 0l.67-4.03A1.27 1.27 0 0 0 9 4zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>';
    },
    LIFs: function (t, e, i) {
      'use strict';
      i.d(e, 'b', function () {
        return n;
      }),
        i.d(e, 'c', function () {
          return l;
        }),
        i.d(e, 'a', function () {
          return a;
        });
      var s = /[<"'&>]/g,
        o = function (t) {
          return '&#' + t.charCodeAt(0) + ';';
        };
      function n(t) {
        return t.replace(s, o);
      }
      function l(t) {
        return void 0 === t && (t = ''), t.replace(/\s+/g, '');
      }
      function a(t) {
        return (
          void 0 === t && (t = ''),
          t.replace(/\b\w/g, function (t) {
            return t.toUpperCase();
          })
        );
      }
    },
    LIcf: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.9 5.87v2.17h3.07v1.4H7.9v2.8h4.22v1.46H6.25V4.4h5.94v1.47H7.9z"/></svg>';
    },
    M3mX: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9 2.5c-1.06 0-1.88.93-1.75 1.98l.63 5.03a1.13 1.13 0 0 0 2.25 0l.62-5.03A1.77 1.77 0 0 0 9 2.5zm0 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>';
    },
    MQEA: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 7" width="9" height="7"><path fill="currentColor" d="M8.5 3.5L5 0v3H0v1h5v3z"/></svg>';
    },
    MjtL: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.5 1.5L3.5 7l5 5.5"/></svg>';
    },
    'MyT/': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><circle fill="currentColor" cx="9" cy="9" r="4"/></svg>';
    },
    OJSF: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.65 12.35l-9-9 .7-.7 9 9-.7.7z"/><path fill="currentColor" d="M2.65 11.65l9-9 .7.7-9 9-.7-.7z"/></svg>';
    },
    PXSR: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.83 6.12l-.66.76L8 4.1V12H7V4.1L3.83 6.88l-.66-.76L7.5 2.34l4.33 3.78z"/></svg>';
    },
    QEZv: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.83 8.88l-.66-.76L8 10.9V3H7v7.9L3.83 8.12l-.66.76 4.33 3.78 4.33-3.78z"/></svg>';
    },
    QkND: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M13.29 4.8h-.09a4.2 4.2 0 1 0 .09 8.4 6 6 0 1 1 0-8.4z"/></svg>';
    },
    R5JZ: function (t, e, i) {
      'use strict';
      function s(t, e, i, s, o) {
        function n(o) {
          if (!(t > o.timeStamp)) {
            var n = o.target;
            void 0 !== i &&
              null !== e &&
              null !== n &&
              n.ownerDocument === s &&
              (e.contains(n) || i(o));
          }
        }
        return (
          o.click && s.addEventListener('click', n, !1),
          o.mouseDown && s.addEventListener('mousedown', n, !1),
          o.touchEnd && s.addEventListener('touchend', n, !1),
          o.touchStart && s.addEventListener('touchstart', n, !1),
          function () {
            s.removeEventListener('click', n, !1),
              s.removeEventListener('mousedown', n, !1),
              s.removeEventListener('touchend', n, !1),
              s.removeEventListener('touchstart', n, !1);
          }
        );
      }
      i.d(e, 'a', function () {
        return s;
      });
    },
    RgOa: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M8.63 1.08a2.04 2.04 0 0 1-3.26 0c-.51.14-1 .35-1.45.6l.01.2A2.05 2.05 0 0 1 1.7 3.93a6.1 6.1 0 0 0-.6 1.45 2.04 2.04 0 0 1 0 3.26c.13.51.34 1 .6 1.45l.2-.01a2.05 2.05 0 0 1 2.03 2.24c.45.26.94.47 1.45.6a2.04 2.04 0 0 1 3.26 0c.51-.13 1-.34 1.45-.6l-.01-.2a2.05 2.05 0 0 1 2.24-2.03c.26-.45.47-.94.6-1.45a2.04 2.04 0 0 1 0-3.26 6.1 6.1 0 0 0-.6-1.45 2.05 2.05 0 0 1-2.23-2.23 6.1 6.1 0 0 0-1.45-.6zM7.84.42c.17-.24.43-.47.72-.4.84.18 1.62.5 2.32.96.23.15.26.48.22.76a1.03 1.03 0 0 0 1.16 1.16c.28-.04.6-.01.76.22.45.7.78 1.48.97 2.32.06.29-.17.55-.41.72a1.02 1.02 0 0 0 0 1.68c.24.17.47.43.4.72a7.12 7.12 0 0 1-.96 2.32c-.15.23-.48.26-.76.22a1.03 1.03 0 0 0-1.17 1.01l.01.15c.04.28.01.6-.22.76-.7.45-1.48.78-2.32.97-.29.06-.55-.17-.72-.41a1.02 1.02 0 0 0-1.68 0c-.17.24-.43.47-.72.4a7.12 7.12 0 0 1-2.32-.96c-.23-.15-.26-.48-.22-.76v-.15a1.02 1.02 0 0 0-1.16-1c-.28.03-.6 0-.76-.23A7.12 7.12 0 0 1 0 8.56c-.06-.29.17-.55.41-.72a1.02 1.02 0 0 0 0-1.68c-.24-.17-.47-.43-.4-.72.18-.84.5-1.62.96-2.32.15-.23.48-.26.76-.22h.15a1.02 1.02 0 0 0 1-1.16c-.03-.28 0-.6.23-.76C3.82.53 4.6.2 5.44 0c.29-.06.55.17.72.41a1.02 1.02 0 0 0 1.68 0zM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>';
    },
    RspR: function (t, e, i) {
      'use strict';
      i.d(e, 'c', function () {
        return l;
      }),
        i.d(e, 'b', function () {
          return a;
        }),
        i.d(e, 'a', function () {
          return r;
        });
      var s,
        o = i('+jnJ'),
        n = i('1ANp'),
        l = (s = Object(o.b)(
          'PaneButtons.visibility',
          n.navigationButtonsVisibilityKey,
        )).property,
        a = s.availableValues,
        r = s.actualBehavior;
    },
    S48P: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12.58 12.1A3.86 3.86 0 0 0 9 6.75a3.87 3.87 0 0 0-3.58 5.33 7.74 7.74 0 0 1 7.16 0zM3.64 9.93l-2.3-.62.37-1.38 2.3.62-.37 1.38zM6.1 6.07L5.07 3.92l1.3-.6 1 2.15-1.29.6zM10.62 5.47l1-2.16 1.3.6-1.01 2.16-1.3-.6zM13.99 8.55l2.3-.62.36 1.38-2.3.62L14 8.55z"/></svg>';
    },
    TGRH: function (t, e, i) {
      'use strict';
      i.r(e),
        i.d(e, 'ControlBarNavigation', function () {
          return H;
        });
      var s,
        o = i('Eyy1'),
        n = (i('YFKU'), i('1ANp')),
        l = i('Ialn'),
        a = i('TzTt'),
        r = i('Tmoa'),
        u = i('ei7k'),
        d = i('qFKp'),
        h = (i('PC8g'), i('MjtL')),
        c = i('e8Rm'),
        p = i('e2QN'),
        _ = i('vg09'),
        b = i('/NcV'),
        m = i('94TV'),
        v = i('qfuz'),
        g = i('MQEA'),
        w = i('eYcT'),
        y = i('nFx7'),
        f = (i('jrhZ'), Object(u.b)({ keys: ['Alt', 'R'], text: '{0} + {1}' })),
        S = Object(u.b)({
          keys: ['Alt', 'Click', 'Alt', 'Enter'],
          text: '{0} + {1}, {2} + {3}',
        }),
        C = Object(u.b)({ keys: [v], text: '{0}' }),
        M = Object(u.b)({ keys: [g], text: '{0}' }),
        E =
          '<div class="control-bar-wrapper">\n\t<div class="control-bar control-bar--hidden">\n\t\t<div class="control-bar__group js-btn-group js-btn-group-zoom">\n\t\t\t<div class="control-bar__btn control-bar__btn--zoom-out apply-common-tooltip" title="' +
          window.t('Zoom Out') +
          '">\n\t\t\t\t' +
          c +
          '\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--zoom-in apply-common-tooltip" title="' +
          window.t('Zoom In') +
          '">\n\t\t\t\t' +
          _ +
          '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-maximize">\n\t\t\t<div class="control-bar__btn control-bar__btn--maximize apply-common-tooltip" title="' +
          window.t('Maximize chart') +
          '" data-tooltip-hotkey="' +
          S +
          '">\n\t\t\t\t' +
          w +
          '\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--minimize js-hidden apply-common-tooltip" title="' +
          window.t('Restore chart') +
          '" data-tooltip-hotkey="' +
          S +
          '">\n\t\t\t\t' +
          y +
          '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-scroll">\n\t\t\t<div class="control-bar__btn control-bar__btn--move-left apply-common-tooltip" title="' +
          window.t('Scroll to the Left') +
          '" data-tooltip-hotkey="' +
          C +
          '">\n\t\t\t\t' +
          h +
          '\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--move-right apply-common-tooltip" title="' +
          window.t('Scroll to the Right') +
          '" data-tooltip-hotkey="' +
          M +
          '">\n\t\t\t\t' +
          b +
          '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-reset-scale">\n\t\t\t<div class="control-bar__btn control-bar__btn--turn-button control-bar__btn--btn-hidden apply-common-tooltip js-btn-reset" title="' +
          window.t('Reset Chart') +
          '" data-tooltip-hotkey="' +
          f +
          '">\n\t\t\t\t' +
          p +
          '\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>',
        V =
          '<div class="control-bar control-bar__btn control-bar__btn--back-present control-bar__btn--btn-hidden apply-common-tooltip" title="' +
          window.t('Scroll to the Most Recent Bar') +
          '">\n\t' +
          m +
          '\n</div>',
        T = d.CheckMobile.any(),
        x =
          (((s = {}).moving = 'wait_finishing'),
          (s.wait_finishing = 'stop'),
          (s.stop = 'moving'),
          s),
        L = {
          zoomInOut: !0,
          maximize: !0,
          scrollLeftRight: !0,
          resetScale: !0,
          goToRealtime: !0,
        },
        H = (function () {
          function t(t, e, i) {
            (this._widget = Object(o.ensureNotNull)(
              Object(a.a)(E).querySelector('.control-bar-wrapper'),
            )),
              (this._controlBar = Object(o.ensureNotNull)(
                this._widget.querySelector('.control-bar'),
              )),
              (this._back = Object(o.ensureNotNull)(
                Object(a.a)(V).querySelector('.control-bar__btn--back-present'),
              )),
              (this._btnGroups = Array.from(
                this._controlBar.querySelectorAll('.js-btn-group'),
              )),
              (this._backButtonVisible = !1),
              (this._boundKeydownHandler = null),
              (this._boundKeyupHandler = null),
              (this._boundMouseHandler = null),
              (this._chartBackgroundProperty = null),
              (this._chartModel = null),
              (this._checkIntervalId = 0),
              (this._controlBarVisible = !1),
              (this._currentDistance = 0),
              (this._deferredFinishTimeout = 0),
              (this._finishingTimeout = 0),
              (this._moveType = ''),
              (this._movingTimeout = 0),
              (this._pressedKey = []),
              (this._priceAxisChanged = null),
              (this._resetAvailabilityChanged = null),
              (this._priceAxisName = ''),
              (this._rafId = 0),
              (this._startTime = 0),
              (this._state = 'stop'),
              (this._visibilityTypeProperty = null),
              (this._boundUpdateMaximizeButtonsVisibility = this._updateMaximizeButtonsVisibility.bind(
                this,
              )),
              (this._boundToggleFullscreenButtons = this._toggleFullscreenButtons.bind(
                this,
              )),
              (this._paneWidth = 0),
              (this._leftPriceScaleWidth = 0),
              (this._rightPriceScaleWidth = 0),
              (this._chart = t),
              (this._parent = e),
              (this._options = Object.assign({}, L, i)),
              (this._visibilityPrioritizedGroups = this._initGroupDescriptions()),
              this._init(),
              this._initHandlers(),
              this.updatePosition();
          }
          return (
            (t.prototype.destroy = function () {
              if (
                (null !== this._visibilityTypeProperty &&
                  (this._visibilityTypeProperty.unsubscribe(
                    this,
                    this._onVisibilityTypeChange,
                  ),
                  (this._visibilityTypeProperty = null)),
                null !== this._boundMouseHandler &&
                  (this._parent.removeEventListener(
                    'mousemove',
                    this._boundMouseHandler,
                    !1,
                  ),
                  this._parent.removeEventListener(
                    'mouseleave',
                    this._boundMouseHandler,
                    !1,
                  ),
                  (this._boundMouseHandler = null)),
                null !== this._boundKeydownHandler &&
                  (this._parent.ownerDocument.removeEventListener(
                    'keydown',
                    this._boundKeydownHandler,
                  ),
                  (this._boundKeydownHandler = null)),
                null !== this._boundKeyupHandler &&
                  (this._parent.ownerDocument.removeEventListener(
                    'keyup',
                    this._boundKeyupHandler,
                  ),
                  (this._boundKeyupHandler = null)),
                clearTimeout(this._movingTimeout),
                null !== this._priceAxisChanged &&
                  (this._priceAxisChanged.unsubscribe(
                    this,
                    this._updateBackBtnPosition,
                  ),
                  (this._priceAxisChanged = null)),
                null !== this._chartBackgroundProperty &&
                  (clearInterval(this._checkIntervalId),
                  this._chartBackgroundProperty.unsubscribe(
                    this,
                    this._updateBgBarStyle,
                  ),
                  (this._chartBackgroundProperty = null)),
                null !== this._resetAvailabilityChanged)
              ) {
                this._resetAvailabilityChanged.unsubscribe(
                  this,
                  this._updateResetScalesButtonVisibility,
                );
                var t = this._chart.getResizerDetacher();
                t.fullscreenable.unsubscribe(
                  this._boundUpdateMaximizeButtonsVisibility,
                ),
                  t.fullscreen.unsubscribe(this._boundToggleFullscreenButtons),
                  (this._resetAvailabilityChanged = null);
              }
              this._chart = null;
            }),
            (t.prototype.updatePosition = function () {
              var t = this._chart.paneWidgets();
              if (0 !== t.length) {
                (this._paneWidth = t[0].width()),
                  (this._leftPriceScaleWidth = this._chart.getPriceAxisMaxWidthByName(
                    'left',
                  )),
                  (this._rightPriceScaleWidth = this._chart.getPriceAxisMaxWidthByName(
                    'right',
                  ));
                var e = this._chart.timeAxisHeight() + this._bottomMargin();
                (this._widget.style.bottom = e + 'px'),
                  (this._back.style.bottom = e + 'px'),
                  this._updateBtnGroupVisibility();
              }
            }),
            (t.prototype._bottomMargin = function () {
              var t,
                e = this._chart.paneWidgets();
              return (null !== (t = this._chart.maximizedPaneWidget()) &&
              void 0 !== t
                ? t
                : e[e.length - 1]
              ).containsMainSeries()
                ? 32
                : 5;
            }),
            (t.prototype._init = function () {
              var t = this;
              if (d.CheckMobile.any())
                for (var e = 0, i = this._btnGroups; e < i.length; e++) {
                  i[e].classList.add('js-hidden');
                }
              (this._buttons = {
                zoomIn: this._widget.querySelector(
                  '.control-bar__btn--zoom-in',
                ),
                zoomOut: this._widget.querySelector(
                  '.control-bar__btn--zoom-out',
                ),
                moveLeft: this._widget.querySelector(
                  '.control-bar__btn--move-left',
                ),
                moveRight: this._widget.querySelector(
                  '.control-bar__btn--move-right',
                ),
                turn: this._widget.querySelector(
                  '.control-bar__btn--turn-button',
                ),
                maximize: this._widget.querySelector(
                  '.control-bar__btn--maximize',
                ),
                minimize: this._widget.querySelector(
                  '.control-bar__btn--minimize',
                ),
              }),
                this._initVisibility(),
                this._parent.appendChild(this._widget),
                this._parent.appendChild(this._back),
                (this._backButtonVisible = !1),
                (this._priceAxisName = Object(l.isRtl)() ? 'left' : 'right'),
                this._chart.withModel(this, function () {
                  (t._chartModel = t._chart.model()),
                    (t._priceAxisChanged = t._chart.getPriceAxisWidthChangedByName(
                      t._priceAxisName,
                    )),
                    (t._resetAvailabilityChanged = t._chartModel
                      .model()
                      .isScalesResetAvailableChanged()),
                    t._priceAxisChanged.subscribe(t, t._updateBackBtnPosition),
                    t._resetAvailabilityChanged.subscribe(
                      t,
                      t._updateResetScalesButtonVisibility,
                    );
                  var e = t._chart.getResizerDetacher();
                  e.fullscreenable.subscribe(
                    t._boundUpdateMaximizeButtonsVisibility,
                  ),
                    e.fullscreen.subscribe(t._boundToggleFullscreenButtons),
                    t._updateMaximizeButtonsVisibility(),
                    t._updateBackBtnPosition(),
                    t._back.addEventListener('click', function () {
                      null !== t._chartModel &&
                        t._chartModel.timeScale().scrollToRealtime(!0);
                    }),
                    (t._checkIntervalId = setInterval(function () {
                      return t._check();
                    }, 1e3)),
                    (t._chartBackgroundProperty = t._chartModel
                      .model()
                      .properties().paneProperties.background),
                    null !== t._chartBackgroundProperty &&
                      t._chartBackgroundProperty.subscribe(
                        t,
                        t._updateBgBarStyle,
                      ),
                    t._updateBgBarStyle();
                });
            }),
            (t.prototype._initHandlers = function () {
              var t = this,
                e = Modernizr.mobiletouch ? 'touchstart' : 'mousedown',
                i = Modernizr.mobiletouch
                  ? ['touchend']
                  : ['mouseup', 'mouseout'];
              this._buttons.moveLeft.addEventListener(e, function (e) {
                e.preventDefault(), t._moveByBar(1), t._trackEvent('Move Left');
              }),
                this._buttons.moveRight.addEventListener(e, function (e) {
                  e.preventDefault(),
                    t._moveByBar(-1),
                    t._trackEvent('Move Right');
                });
              for (var s = 0, o = i; s < o.length; s++) {
                var n = o[s];
                this._buttons.moveLeft.addEventListener(n, function () {
                  return t._stopMoveByBar();
                }),
                  this._buttons.moveRight.addEventListener(n, function () {
                    return t._stopMoveByBar();
                  });
              }
              this._buttons.turn.addEventListener('click', function (e) {
                e.preventDefault(),
                  t._chart.GUIResetScales(),
                  t._trackEvent('Reset to Default Settings');
              }),
                this._buttons.zoomOut.addEventListener('click', function (e) {
                  e.preventDefault(),
                    null !== t._chartModel && t._chartModel.zoomOut(),
                    t._trackEvent('Zoom Out');
                }),
                this._buttons.zoomIn.addEventListener('click', function (e) {
                  e.preventDefault(),
                    null !== t._chartModel && t._chartModel.zoomIn(),
                    t._trackEvent('Zoom In');
                }),
                this._buttons.maximize.addEventListener('click', function (e) {
                  e.preventDefault(),
                    t._chart.setActive(!0),
                    t._chart.getResizerDetacher().requestFullscreen(),
                    t._trackEvent(' Maximize Chart');
                }),
                this._buttons.minimize.addEventListener('click', function (e) {
                  e.preventDefault(),
                    t._chart.getResizerDetacher().exitFullscreen(),
                    t._trackEvent(' Restore Chart');
                }),
                (this._boundKeydownHandler = this._keydownHandler.bind(this)),
                (this._boundKeyupHandler = this._keyupHandler.bind(this)),
                this._parent.ownerDocument.addEventListener(
                  'keydown',
                  this._boundKeydownHandler,
                ),
                this._parent.ownerDocument.addEventListener(
                  'keyup',
                  this._boundKeyupHandler,
                );
            }),
            (t.prototype._initGroupDescriptions = function () {
              var t = this;
              return [
                {
                  shouldBeHiddenOnMobile: !1,
                  available: this._isMaximizeButtonAvailable.bind(this),
                  className: 'js-btn-group-maximize',
                  element: this._getBtnGroup('js-btn-group-maximize'),
                  totalWidth: 50,
                },
                {
                  shouldBeHiddenOnMobile: !1,
                  available: function () {
                    return t._options.resetScale;
                  },
                  className: 'js-btn-group-reset-scale',
                  element: this._getBtnGroup('js-btn-group-reset-scale'),
                  totalWidth: 50,
                },
                {
                  shouldBeHiddenOnMobile: !0,
                  available: function () {
                    return t._options.zoomInOut;
                  },
                  className: 'js-btn-group-zoom',
                  element: this._getBtnGroup('js-btn-group-zoom'),
                  totalWidth: 86,
                },
                {
                  shouldBeHiddenOnMobile: !0,
                  available: function () {
                    return t._options.scrollLeftRight;
                  },
                  className: 'js-btn-group-scroll',
                  element: this._getBtnGroup('js-btn-group-scroll'),
                  totalWidth: 86,
                },
              ];
            }),
            (t.prototype._check = function () {
              if (null !== this._chartModel && this._options.goToRealtime) {
                var t = this._chartModel.timeScale().rightOffset() < 0;
                t !== this._backButtonVisible &&
                  ((this._backButtonVisible = t),
                  this._back.classList.toggle(
                    'control-bar__btn--btn-hidden',
                    !this._backButtonVisible,
                  ));
              }
            }),
            (t.prototype._initVisibility = function () {
              (this._visibilityTypeProperty = Object(n.actualBehavior)()),
                this._visibilityTypeProperty.subscribe(
                  this,
                  this._onVisibilityTypeChange,
                ),
                this._onVisibilityTypeChange();
            }),
            (t.prototype._onVisibilityTypeChange = function () {
              if (null !== this._visibilityTypeProperty) {
                var t = this._visibilityTypeProperty.value();
                'alwaysOn' === t || 'alwaysOff' === t
                  ? ((this._controlBarVisible = 'alwaysOn' === t),
                    null !== this._boundMouseHandler &&
                      (this._parent.removeEventListener(
                        'mousemove',
                        this._boundMouseHandler,
                        !1,
                      ),
                      this._parent.removeEventListener(
                        'mouseleave',
                        this._boundMouseHandler,
                        !1,
                      ),
                      (this._boundMouseHandler = null)))
                  : ((this._controlBarVisible = !1),
                    this._boundMouseHandler ||
                      ((this._boundMouseHandler = this._visibilityMouseHandler.bind(
                        this,
                      )),
                      this._parent.addEventListener(
                        'mousemove',
                        this._boundMouseHandler,
                      ),
                      this._parent.addEventListener(
                        'mouseleave',
                        this._boundMouseHandler,
                      ))),
                  this._updateControlBarVisibility();
              }
            }),
            (t.prototype._visibilityMouseHandler = function (t) {
              if (
                !(
                  t.buttons ||
                  (null !== this._chartModel &&
                    this._chartModel.lineBeingCreated())
                )
              ) {
                var e = 'mouseleave' !== t.type;
                if ('mousemove' === t.type) {
                  var i = this._widget.getBoundingClientRect(),
                    s = 100 - this._bottomMargin();
                  e =
                    t.clientX >= i.left - 100 &&
                    t.clientX <= i.right + 100 &&
                    t.clientY >= i.top - s &&
                    t.clientY <= i.bottom + 100;
                }
                this._controlBarVisible !== e &&
                  ((this._controlBarVisible = e),
                  null === this._rafId &&
                    (this._rafId = this._controlBar.ownerDocument.defaultView.requestAnimationFrame(
                      this._updateControlBarVisibility.bind(this),
                    )));
              }
            }),
            (t.prototype._updateControlBarVisibility = function () {
              (this._rafId = null),
                this._controlBar.classList.toggle(
                  'control-bar--hidden',
                  !this._controlBarVisible,
                );
            }),
            (t.prototype._updateBackBtnPosition = function () {
              if (
                'left' === this._priceAxisName ||
                'right' === this._priceAxisName
              ) {
                var t =
                  this._chart.getPriceAxisMaxWidthByName(this._priceAxisName) +
                  14;
                t && (this._back.style.marginRight = t + 'px');
              }
            }),
            (t.prototype._updateBgBarStyle = function () {
              if (null !== this._chartModel) {
                for (
                  var t =
                      Object(r.getLuminance)(
                        this._chartModel
                          .model()
                          .properties()
                          .paneProperties.background.value(),
                      ) < 0.5,
                    e = 0,
                    i = Object.values(this._buttons);
                  e < i.length;
                  e++
                ) {
                  i[e].classList.toggle('control-bar__btn--dark', t);
                }
                this._back.classList.toggle('control-bar__btn--dark', t);
              }
            }),
            (t.prototype._updateBtnGroupVisibility = function () {
              for (
                var t = this._leftPriceScaleWidth + this._paneWidth,
                  e = (t + this._rightPriceScaleWidth) / 2,
                  i =
                    2 * Math.min(t - e, e - this._leftPriceScaleWidth) -
                    50 -
                    50,
                  s = !1,
                  o = 0,
                  n = this._visibilityPrioritizedGroups;
                o < n.length;
                o++
              ) {
                var l = n[o];
                (l.enoughSpaceForGroup = !1),
                  l.available() &&
                    (!T || !l.shouldBeHiddenOnMobile) &&
                    ((i -= l.totalWidth),
                    (l.enoughSpaceForGroup = i >= 0 && !s),
                    (s = s || !l.enoughSpaceForGroup)),
                  !l.enoughSpaceForGroup !==
                    l.element.classList.contains('js-hidden') &&
                    l.element.classList.toggle(
                      'js-hidden',
                      !l.enoughSpaceForGroup,
                    );
              }
              this._updateControlBarPosition();
            }),
            (t.prototype._getBtnGroup = function (t) {
              return Object(o.ensureDefined)(
                this._btnGroups.find(function (e) {
                  return e.classList.contains(t);
                }),
              );
            }),
            (t.prototype._updateControlBarPosition = function () {
              var t = this._visibilityPrioritizedGroups.reduce(function (t, e) {
                  return t + (e.enoughSpaceForGroup ? e.totalWidth : 0);
                }, 0),
                e =
                  (this._paneWidth +
                    this._leftPriceScaleWidth +
                    this._rightPriceScaleWidth) /
                    2 -
                  Math.ceil(t / 2);
              this._widget.style.left = e + 'px';
            }),
            (t.prototype._updateResetScalesButtonVisibility = function () {
              if (null !== this._chartModel) {
                var t = this._chartModel.model().isScalesResetAvailable();
                this._buttons.turn.classList.toggle(
                  'control-bar__btn--btn-hidden',
                  !t,
                );
              }
            }),
            (t.prototype._updateMaximizeButtonsVisibility = function () {
              this._updateBtnGroupVisibility();
            }),
            (t.prototype._toggleFullscreenButtons = function () {
              var t = this._chart.getResizerDetacher().fullscreen.value();
              this._buttons.maximize.classList.toggle('js-hidden', t),
                this._buttons.minimize.classList.toggle('js-hidden', !t);
            }),
            (t.prototype._isMaximizeButtonAvailable = function () {
              return this._options.maximize, !1;
            }),
            (t.prototype._move = function (t) {
              var e = this;
              if (
                (null !== this._chartModel &&
                  'stop' === this._state &&
                  this._chartModel.beginUndoMacro(
                    1 === t ? 'Move Left' : 'Move Right',
                  ),
                (this._state = x.stop),
                (this._moveType = 'animated'),
                this._deferredFinishTimeout &&
                  (clearTimeout(this._deferredFinishTimeout),
                  (this._deferredFinishTimeout = 0)),
                this._finishingTimeout &&
                  (clearTimeout(this._finishingTimeout),
                  (this._finishingTimeout = 0)),
                (this._startTime = Date.now()),
                0 === this._movingTimeout)
              ) {
                var i = this._startTime,
                  s = function () {
                    e._moveStep(i, 0, 50 * t, 1e3),
                      (e._movingTimeout = setTimeout(s, 10));
                  };
                this._movingTimeout = setTimeout(s, 10);
              }
            }),
            (t.prototype._moveStep = function (t, e, i, s) {
              if (
                null !== this._chartModel &&
                !this._chartModel.timeScale().isEmpty()
              ) {
                var o = Date.now();
                o < t && (t = o);
                var n = (o - t) / s;
                (n > 1 || !isFinite(n)) && (n = 1);
                var l = 1 - Math.pow(1 - n, 3);
                return (
                  (this._currentDistance = (i - e) * l + e),
                  this._chartModel.scrollChart(this._currentDistance),
                  n
                );
              }
            }),
            (t.prototype._finishMove = function () {
              var t = this;
              clearTimeout(this._movingTimeout),
                (this._movingTimeout = 0),
                (this._deferredFinishTimeout = 0);
              var e = this._currentDistance,
                i = Date.now(),
                s = function () {
                  var o = t._moveStep(i, e, 0, 700);
                  o && o < 1
                    ? (t._finishingTimeout = setTimeout(s, 10))
                    : null !== t._chartModel &&
                      ((t._state = x.wait_finishing),
                      (t._moveType = ''),
                      (t._movingTimeout = 0),
                      (t._currentDistance = 0),
                      t._chartModel.endUndoMacro());
                };
              this._finishingTimeout = setTimeout(s, 10);
            }),
            (t.prototype._stopMove = function () {
              'moving' === this._state &&
                ((this._state = x.moving),
                Date.now() - this._startTime < 200
                  ? (this._deferredFinishTimeout = setTimeout(
                      this._finishMove.bind(this),
                      200 - (Date.now() - this._startTime),
                    ))
                  : this._finishMove());
            }),
            (t.prototype._moveByBar = function (t) {
              var e = this;
              if (null !== this._chartModel) {
                var i = this._chartModel.timeScale();
                if (i.isEmpty()) return;
                if (
                  ('stop' === this._state &&
                    this._chartModel.beginUndoMacro(
                      1 === t ? 'Move Left' : 'Move Right',
                    ),
                  null !== i.visibleBarsStrictRange())
                ) {
                  var s =
                    i.indexToCoordinate(i.visibleBarsStrictRange().lastBar()) +
                    i.barSpacing() / 2;
                  Math.abs(i.width() - s) > i.barSpacing() / 6 &&
                    this._chartModel.scrollChart(i.width() - s);
                }
                if (
                  ((this._state = x.stop),
                  (this._moveType = 'by_bar'),
                  (this._startTime = Date.now()),
                  !this._movingTimeout)
                ) {
                  var o = 0,
                    n = 150,
                    l = function () {
                      e._moveByBarStep(t),
                        o++,
                        n > 100 && (n -= (o / 5) * 20),
                        (e._movingTimeout = setTimeout(l, n));
                    };
                  (this._movingTimeout = setTimeout(l, 400)),
                    this._moveByBarStep(t);
                }
              }
            }),
            (t.prototype._moveByBarStep = function (t) {
              if (null !== this._chartModel) {
                if (this._chartModel.timeScale().isEmpty()) return;
                this._chartModel.scrollChartByBar(t);
              }
            }),
            (t.prototype._stopMoveByBar = function () {
              'moving' === this._state &&
                (clearTimeout(this._movingTimeout),
                (this._movingTimeout = 0),
                (this._state = x.wait_finishing),
                (this._moveType = ''),
                (this._movingTimeout = 0),
                (this._currentDistance = 0),
                null !== this._chartModel && this._chartModel.endUndoMacro());
            }),
            (t.prototype._keydownHandler = function (t) {
              if (!t.metaKey) {
                var e = t.which;
                if (
                  !(
                    (37 !== e && 39 !== e) ||
                    this._pressedKey[e] ||
                    ((this._pressedKey[e] = !0),
                    t.target.closest('input, textarea'))
                  )
                ) {
                  var i = 37 === e ? 1 : -1;
                  t.ctrlKey || t.altKey ? this._move(i) : this._moveByBar(i),
                    t.preventDefault();
                }
              }
            }),
            (t.prototype._keyupHandler = function (t) {
              var e = t.which;
              (37 !== e && 39 !== e) ||
                t.target.closest('input, textarea') ||
                ((this._pressedKey[t.which] = !1),
                'by_bar' === this._moveType
                  ? this._stopMoveByBar()
                  : this._stopMove());
            }),
            (t.prototype._trackEvent = function (t) {
              0;
            }),
            t
          );
        })();
    },
    Tq3g: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M15.13 4.53c-.59 2.3-1.66 3.46-3.2 3.46-.74 0-1.78-.21-3.13-.64A10.9 10.9 0 0 0 6 6.7c-.8 0-1.4.43-1.81 1.29H2.67a4.9 4.9 0 0 1 1.08-2.44 2.53 2.53 0 0 1 2-1.02c.8 0 1.87.22 3.23.65 1.36.43 2.32.64 2.88.64.9 0 1.5-.43 1.8-1.29h1.47zm0 5.51c-.59 2.31-1.66 3.46-3.2 3.46-.74 0-1.78-.2-3.13-.63a10.9 10.9 0 0 0-2.8-.65c-.8 0-1.4.43-1.81 1.28H2.67a4.9 4.9 0 0 1 1.08-2.44 2.53 2.53 0 0 1 2-1.02c.8 0 1.87.22 3.23.66 1.36.42 2.32.63 2.88.63.9 0 1.5-.43 1.8-1.29h1.47z"/></svg>';
    },
    Uua9: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.65 5.16v2.68h3.78v1.73H7.65V13h5.19v1.8H5.62V3.35h7.3v1.8H7.65z"/></svg>';
    },
    VrXG: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.57 14.8H5.03V3.36c1.62-.05 2.64-.08 3.06-.08 1.66 0 2.98.49 3.96 1.47a5.23 5.23 0 0 1 1.47 3.88c0 4.11-1.99 6.17-5.95 6.17zm-.5-9.66v7.8c.32.04.67.06 1.05.06 1.03 0 1.83-.38 2.41-1.12.58-.75.88-1.79.88-3.13 0-2.44-1.14-3.67-3.42-3.67-.22 0-.53.02-.93.06z"/></svg>';
    },
    VrrN: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.84 13.7H5.78V4.4l2.48-.06c1.35 0 2.42.4 3.22 1.2.8.78 1.19 1.83 1.19 3.15 0 3.34-1.61 5.01-4.83 5.01zm-.41-7.85v6.35c.26.02.55.03.86.03.83 0 1.48-.3 1.95-.9.48-.6.72-1.46.72-2.54 0-2-.93-2.99-2.78-2.99-.18 0-.43.02-.75.05z"/></svg>';
    },
    WYzw: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M19.32 6H8.68A2.68 2.68 0 0 0 6 8.68V11h1V8.68C7 7.75 7.75 7 8.68 7h10.64c.93 0 1.68.75 1.68 1.68V11h1V8.68C22 7.2 20.8 6 19.32 6zM7 19.32c0 .93.75 1.68 1.68 1.68h10.64c.93 0 1.68-.75 1.68-1.68V17h1v2.32C22 20.8 20.8 22 19.32 22H8.68A2.68 2.68 0 0 1 6 19.32V17h1v2.32z"/></svg>';
    },
    'Y+EN': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M7.23 2.58a.5.5 0 0 1 .54 0l5.5 3.5a.5.5 0 0 1 0 .84l-5.5 3.5a.5.5 0 0 1-.54 0l-5.5-3.5a.5.5 0 0 1 0-.84l5.5-3.5zM2.93 6.5L7.5 9.4l4.57-2.9L7.5 3.6 2.93 6.5z"/><path fill="currentColor" d="M1.58 9.23a.5.5 0 0 1 .69-.15L7.5 12.4l5.23-3.33a.5.5 0 0 1 .54.84l-5.5 3.5a.5.5 0 0 1-.54 0l-5.5-3.5a.5.5 0 0 1-.15-.69z"/></svg>';
    },
    YGQl: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.7" d="M12.5 5.5l-7 7m0-7l7 7"/></svg>';
    },
    ZKFq: function (t, e, i) {
      t.exports = {
        'css-value-pane-controls-padding-left': '1px',
        'css-value-pane-controls-padding-right': '5px',
        paneControls: 'paneControls-3t_VmRy0',
        hasTopMargin: 'hasTopMargin-2samtQKI',
        hidden: 'hidden-3ndYaA31',
        forceHidden: 'forceHidden-2qoGxuLX',
        button: 'button-1T73noHe pane-button-3IbFaPrJ',
        buttonIcon: 'buttonIcon-1vsadlK4',
        minimize: 'minimize-UL6CPYKt',
        newButton: 'newButton-2UJTRB7V',
        touchMode: 'touchMode-33C2amJm',
        maximize: 'maximize-2gtRCsC0',
        'maximize-animation-up-bracket':
          'maximize-animation-up-bracket-PKA42SoI',
        'maximize-animation-down-bracket':
          'maximize-animation-down-bracket-6VpX9y4d',
        'minimize-animation-up-bracket':
          'minimize-animation-up-bracket-1ZcEx180',
        'minimize-animation-down-bracket':
          'minimize-animation-down-bracket-2sZM5-ln',
        up: 'up-3-Dp9Ytc',
        'up-animation': 'up-animation-2oGxHhg9',
        down: 'down-2qp_j-xN',
        'down-animation': 'down-animation-28i3s7Bs',
        buttonsWrapper: 'buttonsWrapper-326cDko9',
      };
    },
    cbig: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9.3 9l.9-4.53a1.23 1.23 0 1 0-2.4 0L8.7 9l-.9 4.53a1.23 1.23 0 1 0 2.4 0L9.3 9z"/><path fill="currentColor" d="M9.15 9.26l4.38-1.48a1.23 1.23 0 1 0-1.21-2.09L8.85 8.74l-4.38 1.48a1.23 1.23 0 1 0 1.21 2.09l3.47-3.05z"/><path fill="currentColor" d="M9.15 8.74L5.68 5.69a1.23 1.23 0 1 0-1.2 2.09l4.37 1.48 3.47 3.05a1.23 1.23 0 1 0 1.2-2.09L9.16 8.74z"/></svg>';
    },
    e2QN: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 18" width="14" height="18"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M1 10a6 6 0 1 0 6-6H3"/><path d="M5 1L2.5 4 5 7"/></g></svg>';
    },
    e8Rm: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M2 7h10"/></svg>';
    },
    eYcT: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g class="corner-left-top"><path fill="currentColor" d="M6 9C6 7.89543 6.89543 7 8 7H10C10.5523 7 11 7.44772 11 8C11 8.55228 10.5523 9 10 9H8V11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11V9Z"/></g><g class="corner-right-top"><path fill="currentColor" d="M17 8C17 7.44772 17.4477 7 18 7H20C21.1046 7 22 7.89543 22 9V11C22 11.5523 21.5523 12 21 12C20.4477 12 20 11.5523 20 11V9H18C17.4477 9 17 8.55228 17 8Z"/></g><g class="corner-right-bottom"><path fill="currentColor" d="M21 16C21.5523 16 22 16.4477 22 17V19C22 20.1046 21.1046 21 20 21H18C17.4477 21 17 20.5523 17 20C17 19.4477 17.4477 19 18 19H20V17C20 16.4477 20.4477 16 21 16Z"/></g><g class="corner-left-bottom"><path fill="currentColor" d="M7 16C7.55228 16 8 16.4477 8 17V19H10C10.5523 19 11 19.4477 11 20C11 20.5523 10.5523 21 10 21H8C6.89543 21 6 20.1046 6 19V17C6 16.4477 6.44772 16 7 16Z"/></g></svg>';
    },
    fBig: function (t, e, i) {
      t.exports = {
        loader: 'loader-1ON1rkY9',
        loaderItem: 'loaderItem-6asdclOe',
        'loader-animation': 'loader-animation-1vbmOmyN',
        shown: 'shown-1QFCxvPl',
        touchMode: 'touchMode-I-CBM3V3',
      };
    },
    fk9O: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M13.5 6.35l6.32 5.27-.64.76L14 8.07V21h-1V8.07l-5.18 4.31-.64-.76 6.32-5.27z"/></svg>';
    },
    gKdq: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M14 7v12.93l5.18-4.31.64.76-6.32 5.27-6.32-5.27.64-.76L13 19.93V7h1z"/></svg>';
    },
    i9xP: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><circle fill="currentColor" cx="12.75" cy="7.5" r="1.25"/><circle fill="currentColor" cx="7.5" cy="7.5" r="1.25"/><circle fill="currentColor" cx="2.25" cy="7.5" r="1.25"/></svg>';
    },
    jXu8: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><circle fill="currentColor" cx="9" cy="9" r="5"/></svg>';
    },
    jrhZ: function (t, e, i) {
      t.exports = {
        'animation-minimize-corner-left-top':
          'animation-minimize-corner-left-top-1QFR0TYG',
        'animation-minimize-corner-right-top':
          'animation-minimize-corner-right-top-2OigqFDd',
        'animation-minimize-corner-right-bottom':
          'animation-minimize-corner-right-bottom-171Xjuh0',
        'animation-minimize-corner-left-bottom':
          'animation-minimize-corner-left-bottom-Gj_EWVOk',
        'animation-maximize-corner-left-top':
          'animation-maximize-corner-left-top-1dOMET94',
        'animation-maximize-corner-right-top':
          'animation-maximize-corner-right-top-X6SjWmdM',
        'animation-maximize-corner-right-bottom':
          'animation-maximize-corner-right-bottom-2lZ_pYbV',
        'animation-maximize-corner-left-bottom':
          'animation-maximize-corner-left-bottom-28bRbB5v',
      };
    },
    ku84: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15" fill="none"><path fill="currentColor" d="M4.5 12A1.5 1.5 0 0 1 3 10.5V9H2v1.5A2.5 2.5 0 0 0 4.5 13h6a2.5 2.5 0 0 0 2.5-2.5V9h-1v1.5c0 .83-.67 1.5-1.5 1.5h-6z" class="bracket-up"/><path fill="currentColor" d="M4.5 3C3.67 3 3 3.67 3 4.5V6H2V4.5A2.5 2.5 0 0 1 4.5 2h6A2.5 2.5 0 0 1 13 4.5V6h-1V4.5c0-.83-.67-1.5-1.5-1.5h-6z" class="bracket-down"/></svg>';
    },
    lvAK: function (t, e, i) {
      'use strict';
      i.r(e);
      var s = i('RspR'),
        o = i('3ClC'),
        n = (i('H72D'), i('Eyy1')),
        l = (i('eJTA'), i('+jnJ')),
        a = i('Zo2/'),
        r = i('EV8o'),
        u = i('ZKFq'),
        d = i('0jws'),
        h = (function () {
          function t(t, e, i) {
            (this._parentEl = document.createElement('div')),
              (this._listActionsWrapperEl = null),
              (this._listActionsElements = {}),
              (this._actionsSpawns = {}),
              (this._onMouseEnterLeaveEventHandler = null),
              (this._mouseOverWidget = !1),
              (this._wrapEl = t),
              (this._onMouseEnterLeaveEventHandler = this._onMouseEnterLeaveEvent.bind(
                this,
              )),
              this._wrapEl.addEventListener(
                'mouseenter',
                this._onMouseEnterLeaveEventHandler,
              ),
              this._wrapEl.addEventListener(
                'mouseleave',
                this._onMouseEnterLeaveEventHandler,
              ),
              (this._actions = e),
              (this._globalVisibility = i.globalVisibility.spawn()),
              this._globalVisibility.subscribe(
                this._updatePaneControlsWidgetVisibility.bind(this),
              ),
              (this._visibilityType = i.visibilityType.spawn()),
              this._visibilityType.subscribe(
                this._updatePaneControlsWidgetVisibility.bind(this),
              ),
              (this._doNotSwitchToContextMenuMode =
                i.doNotSwitchToContextMenuMode),
              (this._themedColor = i.themedColor.spawn()),
              this._themedColor.subscribe(this._updateThemedColor.bind(this));
            for (
              var s = 0, o = Object.entries(this._actions);
              s < o.length;
              s++
            ) {
              var n = o[s],
                l = n[0],
                r = n[1],
                d = l;
              (this._actionsSpawns[d] = {
                visible: r.visible.spawn(),
                title: void 0 === r.title ? null : r.title.spawn(),
              }),
                this._actionsSpawns[d].visible.subscribe(
                  this._updateActionVisibilities.bind(this, d),
                );
              var h = this._actionsSpawns[d].title;
              null !== h && h.subscribe(this._updateActionTitle.bind(this, d));
            }
            this._render(),
              this._updatePaneControlsWidgetVisibility(),
              this._updateThemedColor(this._themedColor.value()),
              this._parentEl.classList.toggle(
                u.touchMode,
                a.trackingModeIsAvailable,
              ),
              this._parentEl.addEventListener('contextmenu', function (t) {
                return t.preventDefault();
              });
          }
          return (
            (t.prototype.destroy = function () {
              this._visibilityType.destroy(), this._themedColor.destroy();
              for (
                var t = 0, e = Object.keys(this._actionsSpawns);
                t < e.length;
                t++
              ) {
                var i = e[t];
                this._actionsSpawns[i].visible.destroy();
                var s = this._actionsSpawns[i].title;
                null !== s && s.destroy();
              }
              null !== this._onMouseEnterLeaveEventHandler &&
                (this._wrapEl.removeEventListener(
                  'mouseenter',
                  this._onMouseEnterLeaveEventHandler,
                ),
                this._wrapEl.removeEventListener(
                  'mouseleave',
                  this._onMouseEnterLeaveEventHandler,
                ),
                (this._onMouseEnterLeaveEventHandler = null)),
                (this._parentEl.innerHTML = ''),
                delete this._parentEl;
            }),
            (t.prototype.getElement = function () {
              return this._parentEl;
            }),
            (t.prototype.updateWidgetModeByWidth = function (t) {
              var e = t < 666.65;
              this._doNotSwitchToContextMenuMode.value() && e && (e = !1);
              var i = Object(n.ensureNotNull)(this._listActionsWrapperEl),
                s = Object(n.ensureNotNull)(this._listActionsElements.more);
              i.classList.toggle(d.blockHidden, e),
                s.classList.toggle(
                  d.blockHidden,
                  !e || !this._actions.more.visible.value(),
                );
            }),
            (t.prototype._render = function () {
              this._renderActions(),
                this._parentEl.classList.add(u.paneControls),
                this._wrapEl.append(this._parentEl);
            }),
            (t.prototype._renderActions = function () {
              null === this._listActionsWrapperEl &&
                ((this._listActionsWrapperEl = document.createElement('div')),
                this._listActionsWrapperEl.classList.add(u.buttonsWrapper),
                this._parentEl.append(this._listActionsWrapperEl)),
                (this._listActionsElements.up = Object(r.a)(
                  this._actions.up,
                  u.button,
                  u.buttonIcon,
                  d.blockHidden,
                )),
                (this._listActionsElements.down = Object(r.a)(
                  this._actions.down,
                  u.button,
                  u.buttonIcon,
                  d.blockHidden,
                )),
                (this._listActionsElements.close = Object(r.a)(
                  this._actions.close,
                  u.button,
                  u.buttonIcon,
                  d.blockHidden,
                )),
                (this._listActionsElements.maximize = Object(r.a)(
                  this._actions.maximize,
                  u.button,
                  u.buttonIcon,
                  d.blockHidden,
                )),
                (this._listActionsElements.minimize = Object(r.a)(
                  this._actions.minimize,
                  u.button,
                  u.buttonIcon,
                  d.blockHidden,
                )),
                this._listActionsWrapperEl.append(
                  this._listActionsElements.up,
                  this._listActionsElements.down,
                  this._listActionsElements.close,
                  this._listActionsElements.maximize,
                  this._listActionsElements.minimize,
                ),
                (this._listActionsElements.more = Object(r.a)(
                  this._actions.more,
                  u.button,
                  u.buttonIcon,
                  d.blockHidden,
                )),
                this._parentEl.append(this._listActionsElements.more);
            }),
            (t.prototype._updateActionVisibilities = function (t, e) {
              Object(n.ensureNotNull)(
                this._listActionsElements[t],
              ).classList.toggle(d.blockHidden, !e);
            }),
            (t.prototype._updateActionTitle = function (t, e) {
              Object(n.ensureNotNull)(
                this._listActionsElements[t],
              ).setAttribute('title', e);
            }),
            (t.prototype._onMouseEnterLeaveEvent = function (t) {
              (this._mouseOverWidget = 'mouseenter' === t.type),
                this._visibilityType.value() === l.a.VisibleOnMouseOver &&
                  this._updatePaneControlsWidgetVisibility();
            }),
            (t.prototype._updatePaneControlsWidgetVisibility = function () {
              var t,
                e = !1;
              switch (this._visibilityType.value()) {
                case l.a.AlwaysOff:
                  (t = !1), (e = !0);
                  break;
                case l.a.AlwaysOn:
                  t = this._globalVisibility.value();
                  break;
                case l.a.VisibleOnMouseOver:
                  t = this._globalVisibility.value() && this._mouseOverWidget;
              }
              this._parentEl.classList.toggle(u.hidden, !t),
                this._parentEl.classList.toggle(
                  u.forceHidden,
                  !this._globalVisibility.value() || e,
                );
            }),
            (t.prototype._updateThemedColor = function (t) {
              t.length > 0
                ? (this._parentEl.style.color = t)
                : this._parentEl.style.removeProperty('color');
            }),
            t
          );
        })(),
        c = i('7KDR'),
        p = i('5VQP'),
        _ = i('obM5'),
        b = i('fk9O'),
        m = i('gKdq'),
        v = i('WYzw');
      function g(t, e) {
        var i = Object(n.ensureNotNull)(e.target);
        return (function (t) {
          var e = [];
          if (t.maximize.visible.value()) {
            var i = Object(n.ensure)(t.maximize.title),
              s = Object(n.ensureNotNull)(t.maximize.action);
            e.push(
              new c.Action({
                icon: v,
                label: i.value(),
                statName: 'Maximize Pane',
                shortcutHint: w,
                onExecute: function () {
                  return s();
                },
              }),
            );
          } else if (t.minimize.visible.value()) {
            i = Object(n.ensure)(t.minimize.title);
            var o = Object(n.ensureNotNull)(t.minimize.action);
            e.push(
              new c.Action({
                icon: v,
                label: i.value(),
                statName: 'Minimize Pane',
                shortcutHint: w,
                onExecute: function () {
                  return o();
                },
              }),
            );
          }
          if (t.up.visible.value()) {
            i = Object(n.ensure)(t.up.title);
            var l = Object(n.ensureNotNull)(t.up.action);
            e.push(
              new c.Action({
                icon: b,
                label: i.value(),
                statName: 'Move pane up',
                onExecute: function () {
                  return l();
                },
              }),
            );
          }
          if (t.down.visible.value()) {
            i = Object(n.ensure)(t.down.title);
            var a = Object(n.ensureNotNull)(t.down.action);
            e.push(
              new c.Action({
                icon: m,
                label: i.value(),
                statName: 'Move pane down',
                onExecute: function () {
                  return a();
                },
              }),
            );
          }
          if (t.close.visible.value()) {
            i = Object(n.ensure)(t.close.title);
            var r = Object(n.ensureNotNull)(t.close.action);
            e.push(
              new c.Action({
                icon: _,
                label: i.value(),
                statName: 'Delete pane',
                onExecute: function () {
                  return r();
                },
              }),
            );
          }
          return p.ContextMenuManager.createMenu(e);
        })(t).then(function (t) {
          return (
            t.show(function (t) {
              var e = i.getBoundingClientRect();
              return { clientX: e.right - t, clientY: e.top + e.height + 3 };
            }),
            t
          );
        });
      }
      var w = window.t('Double click');
      var y = i('hY0g'),
        f = i.n(y),
        S = i('EsvI'),
        C = i('ei7k'),
        M = i('OJSF'),
        E = i('PXSR'),
        V = i('QEZv'),
        T = i('ku84'),
        x = i('i9xP'),
        L = i('1Wf8'),
        H = i('956S');
      i.d(e, 'PaneControlsWidget', function () {
        return I;
      });
      var k = Modernizr.mobiletouch,
        A = k ? L : T,
        O = k ? H : x,
        P = window.t('Delete pane'),
        B = window.t('Move pane up'),
        W = window.t('Move pane down'),
        D = window.t('Maximize pane'),
        z = window.t('Restore pane'),
        j = window.t('Manage panes'),
        N = window.t('Double click'),
        R = Object(C.b)({ keys: [''], text: N }),
        I = (function () {
          function t(t, e, i, o, n) {
            var l = this;
            (this._actions = {}),
              (this._moreActionCM = null),
              (this._themedColor = new f.a('')),
              (this._model = t),
              (this._paneWidget = e),
              (this._callbacks = o),
              (this._closeButtonVisibility = new f.a(
                this._getCloseButtonVisibility(),
              )),
              (this._upButtonVisibility = new f.a(
                this._getUpButtonVisibility(),
              )),
              (this._downButtonVisibility = new f.a(
                this._getDownButtonVisibility(),
              )),
              (this._maximizeButtonVisibility = new f.a(
                this._getMaximizeButtonVisibility(),
              )),
              (this._minimizeButtonVisibility = new f.a(
                this._getMinimizeButtonVisibility(),
              )),
              this._createActions(),
              (this._visibilityTypeProperty = Object(s.a)()),
              this._visibilityTypeProperty.subscribe(this, function (t) {
                l._visibilityType.setValue(t.value());
              }),
              (this._visibilityType = new f.a(
                this._visibilityTypeProperty.value(),
              )),
              (this._isPaneMaximize = new f.a(this._getIsPaneMaximizeValue())),
              (this._isWidgetShow = new f.a(this._getIsWidgetShow())),
              (this._backgroundThemeName = i.backgroundThemeName),
              (this._renderer = new h(n, this._actions, {
                visibilityType: this._visibilityType.readonly(),
                globalVisibility: this._isWidgetShow.readonly(),
                doNotSwitchToContextMenuMode: this._isPaneMaximize.readonly(),
                themedColor: this._themedColor.readonly(),
              }));
          }
          return (
            (t.prototype.destroy = function () {
              this._visibilityTypeProperty.unsubscribeAll(this),
                this._renderer.destroy();
            }),
            (t.prototype.getElement = function () {
              return this._renderer.getElement();
            }),
            (t.prototype.action = function () {
              return this._actions;
            }),
            (t.prototype.update = function () {
              this._updateButtonsVisibility(),
                this._isPaneMaximize.setValue(this._getIsPaneMaximizeValue()),
                this._isWidgetShow.setValue(this._getIsWidgetShow());
            }),
            (t.prototype.updateWidgetModeByWidth = function (t) {
              this._renderer.updateWidgetModeByWidth(t);
            }),
            (t.prototype.updateThemedColors = function (t) {
              null === t &&
                (t = Object(S.getStdThemedValue)(
                  'chartProperties.paneProperties.background',
                  this._backgroundThemeName.value(),
                )),
                this._themedColor.setValue(t || '');
            }),
            (t.prototype._updateButtonsVisibility = function () {
              this._closeButtonVisibility.setValue(
                this._getCloseButtonVisibility(),
              ),
                this._upButtonVisibility.setValue(
                  this._getUpButtonVisibility(),
                ),
                this._downButtonVisibility.setValue(
                  this._getDownButtonVisibility(),
                ),
                this._maximizeButtonVisibility.setValue(
                  this._getMaximizeButtonVisibility(),
                ),
                this._minimizeButtonVisibility.setValue(
                  this._getMinimizeButtonVisibility(),
                );
            }),
            (t.prototype._createActions = function () {
              (this._actions.up = {
                icon: E,
                action: this._onUpDownButton.bind(this, 'up'),
                visible: this._upButtonVisibility,
                title: new f.a(B),
                className: u.up,
                dataset: { name: 'pane-button-up' },
              }),
                (this._actions.down = {
                  icon: V,
                  action: this._onUpDownButton.bind(this, 'down'),
                  visible: this._downButtonVisibility,
                  title: new f.a(W),
                  className: u.down,
                  dataset: { name: 'pane-button-down' },
                }),
                (this._actions.close = {
                  icon: M,
                  action: this._onCloseButton.bind(this),
                  visible: this._closeButtonVisibility,
                  title: new f.a(P),
                  dataset: { name: 'pane-button-close' },
                }),
                (this._actions.maximize = {
                  icon: A,
                  action: this._onToggleMaximizeButton.bind(this),
                  visible: this._maximizeButtonVisibility,
                  title: new f.a(D),
                  hotKeyTitle: R,
                  className: u.maximize,
                  dataset: { name: 'pane-button-maximize' },
                }),
                (this._actions.minimize = {
                  icon: A,
                  action: this._onToggleMaximizeButton.bind(this),
                  visible: this._minimizeButtonVisibility,
                  title: new f.a(z),
                  hotKeyTitle: R,
                  className: u.minimize,
                  dataset: { name: 'pane-button-minimize' },
                }),
                (this._actions.more = {
                  icon: O,
                  action: this._showButtonsInContextMenu.bind(this),
                  visible: new f.a(!k),
                  title: new f.a(j),
                  dataset: { name: 'pane-button-more' },
                });
            }),
            (t.prototype._getCloseButtonVisibility = function () {
              var t = this._paneWidget.state(),
                e = !1;
              return (
                t.containsMainSeries() ||
                  t.isMaximized() ||
                  k ||
                  (e = t.dataSources().some(function (t) {
                    return Object(o.isStudy)(t);
                  })),
                e
              );
            }),
            (t.prototype._onCloseButton = function () {
              var t = this._model
                .model()
                .panes()
                .indexOf(this._paneWidget.state());
              this._model.removePane(t);
            }),
            (t.prototype._getUpButtonVisibility = function () {
              var t = this._paneWidget.state();
              return (
                this._model.model().panes().indexOf(t) > 0 &&
                !t.isMaximized() &&
                !k
              );
            }),
            (t.prototype._getDownButtonVisibility = function () {
              var t = this._paneWidget.state(),
                e = this._model.model().panes();
              return e.indexOf(t) < e.length - 1 && !t.isMaximized() && !k;
            }),
            (t.prototype._onUpDownButton = function (t) {
              var e = this._model
                .model()
                .panes()
                .indexOf(this._paneWidget.state());
              this._model.rearrangePanes(e, t);
            }),
            (t.prototype._getMaximizeButtonVisibility = function () {
              var t = this._paneWidget.state();
              return (
                this._model.model().panes().length > 1 && !t.isMaximized() && !k
              );
            }),
            (t.prototype._getMinimizeButtonVisibility = function () {
              var t = this._paneWidget.state();
              return this._model.model().panes().length > 1 && t.isMaximized();
            }),
            (t.prototype._onToggleMaximizeButton = function () {
              this._callbacks.toggleMaximizePane(this._paneWidget);
            }),
            (t.prototype._showButtonsInContextMenu = function (t) {
              var e = this;
              t.preventDefault(),
                null !== this._moreActionCM && this._moreActionCM.isShown()
                  ? (this._moreActionCM = null)
                  : g(this._actions, t).then(function (t) {
                      e._moreActionCM = t;
                    });
            }),
            (t.prototype._getIsPaneMaximizeValue = function () {
              return this._paneWidget.state().isMaximized();
            }),
            (t.prototype._getIsWidgetShow = function () {
              return this._model.model().panes().length > 1;
            }),
            t
          );
        })();
    },
    nFx7: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g class="corner-left-top"><path fill="currentColor" d="M10 7C10.5523 7 11 7.44772 11 8V10C11 11.1046 10.1046 12 9 12H7C6.44772 12 6 11.5523 6 11C6 10.4477 6.44772 10 7 10H9V8C9 7.44772 9.44772 7 10 7Z"/></g><g class="corner-right-top"><path fill="currentColor" d="M18 7C18.5523 7 19 7.44772 19 8V10H21C21.5523 10 22 10.4477 22 11C22 11.5523 21.5523 12 21 12H19C17.8954 12 17 11.1046 17 10V8C17 7.44772 17.4477 7 18 7Z"/></g><g class="corner-right-bottom"><path fill="currentColor" d="M17 18C17 16.8954 17.8954 16 19 16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H19V20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20V18Z"/></g><g class="corner-left-bottom"><path fill="currentColor" d="M6 17C6 16.4477 6.44772 16 7 16H9C10.1046 16 11 16.8954 11 18V20C11 20.5523 10.5523 21 10 21C9.44772 21 9 20.5523 9 20V18H7C6.44772 18 6 17.5523 6 17Z"/></g></svg>';
    },
    obM5: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M7.65 8.35l.7-.7 6.15 6.14 6.15-6.14.7.7-6.14 6.15 6.14 6.15-.7.7-6.15-6.14-6.15 6.14-.7-.7 6.14-6.15-6.14-6.15z"/></svg>';
    },
    qfuz: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 7" width="9" height="7"><path fill="currentColor" d="M.5 3.5L4 0v3h5v1H4v3z"/></svg>';
    },
    rGGD: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="currentColor" d="M2.4 5.46a.8.8 0 0 1 1.14-.05L8 9.42l4.46-4.01a.8.8 0 0 1 1.08 1.18L8 11.58 2.47 6.59a.8.8 0 0 1-.06-1.13z"/></svg>';
    },
    rh3U: function (t, e, i) {
      t.exports = {
        'css-value-medium-size': '18px',
        'css-value-border-radius-medium-size': '9px',
        'css-value-large-size': '22px',
        'css-value-border-radius-large-size': '11px',
        statuses: 'statuses-29yrFaoA',
        statusItem: 'statusItem-1gsKvHgg',
        medium: 'medium-zcMrbLxb',
        large: 'large-2E_Sb0cV',
        oneWidgetsVisible: 'oneWidgetsVisible-17p3P_dQ',
        twoWidgetsVisible: 'twoWidgetsVisible-3kEfsgAz',
        threeWidgetsVisible: 'threeWidgetsVisible-sIjrbNL1',
        marketStatusOpen: 'marketStatusOpen-2d8WAYHQ',
        marketStatusClose: 'marketStatusClose-2LgI3IBx',
        marketStatusPre: 'marketStatusPre-3tiNWinG',
        marketStatusPost: 'marketStatusPost-1wCjJrHi',
        marketStatusHoliday: 'marketStatusHoliday-HyAcvqXa',
        invalidSymbol: 'invalidSymbol-2tnvnmzm',
        replayMode: 'replayMode-2O_B03jx',
        delay: 'delay-NXuSKUfA',
        notAccurate: 'notAccurate-2qEIEgim',
        eod: 'eod-TNCDZArR',
        dataProblemHigh: 'dataProblemHigh-2SJE6Anp',
        dataProblemLow: 'dataProblemLow-iRGvvWWe',
      };
    },
    sAH5: function (t, e, i) {
      'use strict';
      i.r(e);
      var s = i('mrSG'),
        o = i('Eyy1'),
        n = i('eJTA'),
        l = i('bdgK'),
        a = (i('H72D'), i('EV8o')),
        r = i('S8xo'),
        u = i('GUQs'),
        d = i('fBig'),
        h = (function () {
          function t(t, e) {
            void 0 === e && (e = {}),
              (this._loadingEl = null),
              (this._parentEl = t),
              (this._options = e),
              this._renderLoading();
          }
          return (
            (t.prototype.toggleVisibility = function (t) {
              null !== this._loadingEl &&
                this._loadingEl.classList.toggle(d.shown, t);
            }),
            (t.prototype._renderLoading = function () {
              (this._loadingEl = document.createElement('span')),
                this._loadingEl.classList.add(d.loader),
                this._options.className &&
                  this._loadingEl.classList.add(this._options.className),
                (this._loadingEl.innerHTML =
                  '\n\t\t\t<span class="' +
                  d.loaderItem +
                  '"></span>\n\t\t\t<span class="' +
                  d.loaderItem +
                  '"></span>\n\t\t\t<span class="' +
                  d.loaderItem +
                  '"></span>\n\t\t'),
                this._parentEl.appendChild(this._loadingEl);
            }),
            t
          );
        })(),
        c = i('5Alx'),
        p = i('0jws'),
        _ = i('qFKp');
      function b(t, e) {
        if (null === t.firstChild) {
          var i = document.createTextNode(e);
          t.appendChild(i);
        } else t.firstChild.nodeValue = e;
      }
      var m = _.CheckMobile.any(),
        v = [c.title1st, c.title2nd, c.title3rd, c.title4th];
      var g = (function () {
          function t(t, e, i) {
            var s = this;
            (this._el = null),
              (this._firstLineWrapper = null),
              (this._titleParentEl = null),
              (this._titleElements = []),
              (this._valuesParentEl = null),
              (this._valuesAdditionalWrapperEl = null),
              (this._valuesElements = []),
              (this._actionsParentEl = null),
              (this._actionAdditionalWrapperEl = null),
              (this._stayInHoveredMode = !1),
              (this._showActionsHandler = null),
              (this._hideActionsHandler = null),
              (this._selectedSourceHandler = null),
              (this._mouseEventHandlers = []),
              (this._disableTimeout = null),
              (this._loader = null),
              (this._model = t),
              (this._parentEl = e),
              (this._disabled = this._model.disabled().spawn()),
              this._disabled.subscribe(this._updateDisabledState.bind(this)),
              (this._selected = this._model.selected().spawn()),
              this._selected.subscribe(this._updateSelectedState.bind(this)),
              (this._loading = this._model.loading().spawn()),
              this._loading.subscribe(
                (function (t, e) {
                  var i = 0;
                  return function (s) {
                    clearTimeout(i),
                      Boolean(s) ? t() : (i = setTimeout(t, e, !1));
                  };
                })(this._updateLoadingState.bind(this), 700),
              ),
              (this._isTitleHidden = this._model.isTitleHidden().spawn()),
              (this._isValuesHidden = this._model.isValuesHidden().spawn()),
              (this._isRowHidden = this._model.isRowHidden().spawn()),
              this._isTitleHidden.subscribe(this._updateShowTitles.bind(this)),
              this._isValuesHidden.subscribe(this._updateShowValues.bind(this)),
              this._isRowHidden.subscribe(this._updateShowLine.bind(this)),
              (this._titlesSpawns = this._model.titles().map(function (t) {
                return t.spawn();
              }));
            for (var n = 0; n < this._titlesSpawns.length; n++)
              this._titlesSpawns[n].subscribe(
                this._updateTitlesHandler.bind(this, n),
              );
            (this._values = this._model.values().spawn()),
              this._values.subscribe(this._updateValues.bind(this)),
              this._createValuesSpawns(),
              this._addValuesSpawnsSubscriptions(),
              (this._actionsSpawnArray = this._model
                .actions()
                .map(function (t) {
                  return {
                    visible: t.visible.spawn(),
                    title: void 0 === t.title ? null : t.title.spawn(),
                  };
                }));
            for (n = 0; n < this._actionsSpawnArray.length; n++) {
              this._actionsSpawnArray[n].visible.subscribe(
                this._updateActionVisibilities.bind(this, n),
              );
              var l = this._actionsSpawnArray[n].title;
              null !== l && l.subscribe(this._updateActionTitle.bind(this, n));
            }
            (this._withActions = i.withActions),
              this._render(),
              this._updateStates(),
              this._updateShowTitles(),
              this._updateShowValues(),
              this._updateShowLine(),
              null !== this._valuesParentEl &&
                (this._loader = new h(this._valuesParentEl, {
                  className: c.loader,
                })),
              (this._customTextColor = i.customTextColor.spawn()),
              this._customTextColor.subscribe(
                this._updateCustomTextColor.bind(this),
              ),
              this._updateCustomTextColor(),
              this._withActions &&
                ((this._showActionsHandler = Object(u.b)(
                  this._showActions.bind(this),
                )),
                (this._hideActionsHandler = Object(u.b)(
                  this._hideActions.bind(this),
                )),
                (this._selectedSourceHandler = Object(u.b)(
                  this._model.setSourceSelected.bind(this._model),
                )),
                null !== this._titleParentEl &&
                  (this._titleParentEl.addEventListener(
                    'touchend',
                    this._selectedSourceHandler,
                  ),
                  this._titleParentEl.addEventListener(
                    'mousedown',
                    this._selectedSourceHandler,
                  ),
                  m ||
                    (this._titleParentEl.addEventListener(
                      'mouseenter',
                      this._showActionsHandler,
                    ),
                    this._titleParentEl.addEventListener(
                      'mouseleave',
                      this._hideActionsHandler,
                    )),
                  this._mouseEventHandlers.push(
                    new r.MouseEventHandler(
                      Object(o.ensureNotNull)(this._el),
                      {
                        contextMenuEvent: function (t) {
                          Object(o.ensureNotNull)(s._actionsParentEl).contains(
                            t.target,
                          ) || s._model.onContextMenuShow(t);
                        },
                      },
                      {
                        treatVertTouchDragAsPageScroll: !1,
                        treatHorzTouchDragAsPageScroll: !1,
                      },
                    ),
                  ),
                  this._mouseEventHandlers.push(
                    new r.MouseEventHandler(
                      this._titleParentEl,
                      {
                        mouseDoubleClickEvent: this._model.onShowSettings.bind(
                          this._model,
                        ),
                      },
                      {
                        treatVertTouchDragAsPageScroll: !1,
                        treatHorzTouchDragAsPageScroll: !1,
                      },
                    ),
                  )),
                null === this._actionAdditionalWrapperEl ||
                  m ||
                  (this._actionAdditionalWrapperEl.addEventListener(
                    'mouseenter',
                    this._showActionsHandler,
                  ),
                  this._actionAdditionalWrapperEl.addEventListener(
                    'mouseleave',
                    this._hideActionsHandler,
                  )));
          }
          return (
            (t.prototype.destroy = function () {
              this._disabled.destroy(),
                this._selected.destroy(),
                this._loading.destroy(),
                this._isTitleHidden.destroy(),
                this._isValuesHidden.destroy(),
                this._isRowHidden.destroy(),
                this._customTextColor.destroy(),
                null !== this._disableTimeout &&
                  clearTimeout(this._disableTimeout);
              for (var t = 0, e = this._titlesSpawns; t < e.length; t++) {
                e[t].destroy();
              }
              if (null !== this._titleParentEl) {
                for (
                  var i = 0, s = this._mouseEventHandlers;
                  i < s.length;
                  i++
                ) {
                  s[i].destroy();
                }
                (this._titleElements = []),
                  this._withActions &&
                    null !== this._selectedSourceHandler &&
                    null !== this._showActionsHandler &&
                    null !== this._hideActionsHandler &&
                    (this._titleParentEl.removeEventListener(
                      'touchend',
                      this._selectedSourceHandler,
                    ),
                    this._titleParentEl.removeEventListener(
                      'mousedown',
                      this._selectedSourceHandler,
                    ),
                    m ||
                      (this._titleParentEl.removeEventListener(
                        'mouseenter',
                        this._showActionsHandler,
                      ),
                      this._titleParentEl.removeEventListener(
                        'mouseleave',
                        this._hideActionsHandler,
                      ))),
                  (this._titleParentEl = null);
              }
              for (var n = 0, l = this._actionsSpawnArray; n < l.length; n++) {
                var a = l[n];
                a.visible.destroy();
                var r = a.title;
                null !== r && r.destroy();
              }
              (null !== this._actionAdditionalWrapperEl &&
                (this._withActions &&
                  null !== this._showActionsHandler &&
                  null !== this._hideActionsHandler &&
                  !m &&
                  (this._actionAdditionalWrapperEl.removeEventListener(
                    'mouseenter',
                    this._showActionsHandler,
                  ),
                  this._actionAdditionalWrapperEl.removeEventListener(
                    'mouseleave',
                    this._hideActionsHandler,
                  )),
                (this._actionAdditionalWrapperEl = null)),
              (this._actionsParentEl = null),
              this._removeValuesSpawnsSubscriptions(),
              this._values.destroy(),
              null !== this._valuesParentEl &&
                ((this._valuesElements = []), (this._valuesParentEl = null)),
              null !== this._el) &&
                (Object(o.ensureNotNull)(this._el.parentNode).removeChild(
                  this._el,
                ),
                (this._el = null));
            }),
            (t.prototype.getHeight = function () {
              return null === this._el ? null : 24;
            }),
            (t.prototype._render = function () {
              this._renderTitle(), this._renderActions(), this._renderValues();
            }),
            (t.prototype._renderTitle = function () {
              null === this._titleParentEl &&
                ((this._titleParentEl = document.createElement('div')),
                this._titleParentEl.classList.add(c.titleWrapper));
              for (
                var t = this._titleParentEl, e = 0;
                e < this._titlesSpawns.length;
                e++
              ) {
                var i = document.createElement('div');
                i.classList.add(c.title, v[e], 'apply-overflow-tooltip'),
                  (i.dataset.name = 'legend-source-title');
                var s = this._titlesSpawns[e].value();
                s.length > 0
                  ? (i.appendChild(document.createTextNode(s)),
                    i.classList.add(c.withDot))
                  : i.classList.add(p.blockHidden),
                  t.appendChild(i),
                  this._titleElements.push(i);
              }
            }),
            (t.prototype._renderActions = function () {
              if (this._withActions) {
                null === this._actionsParentEl &&
                  ((this._actionsParentEl = document.createElement('div')),
                  this._actionsParentEl.classList.add(c.buttonsWrapper),
                  this._parentEl.append(this._actionsParentEl),
                  (this._actionAdditionalWrapperEl = document.createElement(
                    'div',
                  )),
                  this._actionAdditionalWrapperEl.classList.add(c.buttons),
                  this._actionsParentEl.appendChild(
                    this._actionAdditionalWrapperEl,
                  ));
                for (
                  var t = Object(o.ensureNotNull)(
                      this._actionAdditionalWrapperEl,
                    ),
                    e = 0,
                    i = this._model.actions();
                  e < i.length;
                  e++
                ) {
                  var s = i[e],
                    n = Object(a.a)(s, c.button, c.buttonIcon, p.blockHidden);
                  t.appendChild(n);
                }
              }
            }),
            (t.prototype._updateTitlesHandler = function (t, e) {
              var i = Object(o.ensureNotNull)(this._titleElements[t]),
                s = 0 === e.length;
              i.classList.toggle(p.blockHidden, s),
                i.classList.toggle(c.withDot, !s),
                b(i, e);
            }),
            (t.prototype._updateStates = function (t) {
              this._updateDisabledState(),
                this._updateSelectedState(),
                this._updateLoadingState(),
                t && this._clearDisableState();
            }),
            (t.prototype._updateValuesHTMLElHandler = function (t, e) {
              b(Object(o.ensure)(this._valuesElements[t].value), e),
                this._updateShowValues();
            }),
            (t.prototype._updateValueColorHandler = function (t, e) {
              void 0 === e && (e = ''),
                (Object(o.ensure)(
                  this._valuesElements[t].value,
                ).style.color = e);
            }),
            (t.prototype._updateValueVisibleHandler = function (t, e) {
              var i = Object(o.ensure)(this._valuesElements[t].value).closest(
                '.' + c.valueItem,
              );
              null !== i && i.classList.toggle(p.blockHidden, !e);
            }),
            (t.prototype._updateShowLine = function () {
              null !== this._el &&
                this._el.classList.toggle(
                  p.blockHidden,
                  this._isRowHidden.value(),
                );
            }),
            (t.prototype._createValuesSpawns = function () {
              this._valuesSpawnArray = this._values.value().map(function (t) {
                return {
                  value: t.value.spawn(),
                  color: t.color.spawn(),
                  visible: t.visible.spawn(),
                };
              });
            }),
            (t.prototype._removeValuesSpawnsSubscriptions = function () {
              for (var t = 0, e = this._valuesSpawnArray; t < e.length; t++) {
                var i = e[t];
                i.value.destroy(), i.color.destroy(), i.visible.destroy();
              }
              this._valuesSpawnArray = [];
            }),
            (t.prototype._addValuesSpawnsSubscriptions = function () {
              for (var t = 0; t < this._valuesSpawnArray.length; t++) {
                var e = this._valuesSpawnArray[t];
                e.value.subscribe(
                  this._updateValuesHTMLElHandler.bind(this, t),
                ),
                  e.color.subscribe(
                    this._updateValueColorHandler.bind(this, t),
                  ),
                  e.visible.subscribe(
                    this._updateValueVisibleHandler.bind(this, t),
                  );
              }
            }),
            (t.prototype._updateShowValues = function () {
              null !== this._valuesAdditionalWrapperEl &&
                this._valuesAdditionalWrapperEl.classList.toggle(
                  p.blockHidden,
                  this._isValuesShouldBeHidden(),
                );
            }),
            (t.prototype._isValuesShouldBeHidden = function () {
              return !this._valuesSpawnArray.some(function (t) {
                return t.value.value().length > 0;
              });
            }),
            (t.prototype._showActions = function () {
              if (null !== this._el && this._withActions) {
                this._el.classList.add(c.withAction);
                var t =
                  null !== this._valuesParentEl &&
                  null !== this._titleParentEl &&
                  this._valuesParentEl.offsetTop ===
                    this._titleParentEl.offsetTop;
                this._el.classList.toggle(c.withTail, t);
              }
            }),
            (t.prototype._hideActions = function () {
              null !== this._el &&
                this._withActions &&
                !this._stayInHoveredMode &&
                (this._el.classList.remove(c.withAction),
                null !== this._valuesParentEl &&
                  this._valuesParentEl.classList.remove(c.withTail));
            }),
            (t.prototype._updateDisabledState = function () {
              var t = this;
              null !== this._el &&
                (null !== this._disableTimeout &&
                  (clearTimeout(this._disableTimeout),
                  (this._disableTimeout = null),
                  this._el.classList.remove('tempDisabled'),
                  this._el.classList.remove(c.hiddenLoading)),
                this._disabled.value()
                  ? this._el.classList.add(c.disabled)
                  : (this._el.classList.add('tempDisabled'),
                    this._el.classList.add(c.hiddenLoading),
                    (this._disableTimeout = setTimeout(function () {
                      null !== t._el &&
                        !t._loading.value() &&
                        t._el.classList.contains('tempDisabled') &&
                        (t._el.classList.remove('tempDisabled'),
                        t._el.classList.remove(c.hiddenLoading),
                        t._el.classList.toggle(
                          c.disabled,
                          t._disabled.value(),
                        ));
                    }, 1e3))));
            }),
            (t.prototype._clearDisableState = function () {
              null !== this._el &&
                (this._el.classList.remove(c.hiddenLoading),
                this._el.classList.remove(c.disabled),
                this._el.classList.remove('tempDisabled'));
            }),
            (t.prototype._updateSelectedState = function () {
              null !== this._el &&
                this._withActions &&
                this._el.classList.toggle(c.selected, this._selected.value());
            }),
            (t.prototype._updateLoadingState = function () {
              if (null !== this._el) {
                this._el.classList.contains('tempDisabled') &&
                  (this._loading.value()
                    ? this._el.classList.add(c.hiddenLoading)
                    : this._clearDisableState());
                var t = this._loading.value();
                this._el.classList.toggle(c.loading, t),
                  null !== this._loader && this._loader.toggleVisibility(t);
              }
            }),
            (t.prototype._updateShowTitles = function () {
              null !== this._titleParentEl &&
                (this._titleParentEl.classList.toggle(
                  p.blockHidden,
                  this._isTitleHidden.value(),
                ),
                null !== this._actionsParentEl &&
                  this._actionsParentEl.classList.toggle(
                    p.blockHidden,
                    this._isTitleHidden.value(),
                  ));
            }),
            (t.prototype._updateValues = function () {
              this._removeValuesSpawnsSubscriptions(),
                this._createValuesSpawns(),
                null !== this._valuesParentEl &&
                  null !== this._valuesAdditionalWrapperEl &&
                  ((this._valuesElements = []),
                  (this._valuesAdditionalWrapperEl.innerHTML = '')),
                this._renderValues(),
                this._addValuesSpawnsSubscriptions(),
                this._updateShowValues();
            }),
            (t.prototype._updateActionVisibilities = function (t) {
              null !== this._actionsParentEl &&
                this._actionsParentEl
                  .querySelectorAll('.' + c.button)
                  [t].classList.toggle(
                    p.blockHidden,
                    !this._actionsSpawnArray[t].visible.value(),
                  );
            }),
            (t.prototype._updateActionTitle = function (t) {
              var e = this._actionsSpawnArray[t].title;
              null !== this._actionsParentEl &&
                null !== e &&
                this._actionsParentEl
                  .querySelectorAll('.' + c.button)
                  [t].setAttribute('title', e.value());
            }),
            (t.prototype._updateCustomTextColor = function () {
              for (
                var t = this._customTextColor.value() || '',
                  e = 0,
                  i = this._titleElements;
                e < i.length;
                e++
              ) {
                var s = i[e];
                null !== s && (s.style.color = t);
              }
              for (
                var n = Object(o.ensureNotNull)(
                    this._valuesParentEl,
                  ).querySelectorAll('.' + c.valueTitle),
                  l = 0;
                l < n.length;
                l++
              )
                n[l].style.color = t;
              Object(o.ensureNotNull)(this._el).classList.toggle(
                c.withCustomTextColor,
                Boolean(t),
              );
            }),
            t
          );
        })(),
        w = (function (t) {
          function e(e, i, s) {
            var o = t.call(this, e, i, s) || this;
            return (
              (o._clientHeight = null),
              (o._allButtonsWidth = null),
              (o._lastStatusesWrapperWidth = null),
              (o._lastActionWrapperWidth = null),
              (o._statusesWrapper = null),
              (o._resizeObserver = null),
              (o._flagged = o._model.flagged().spawn()),
              o._flagged.subscribe(o._updateFlaggedState.bind(o)),
              o._updateStates(),
              s.statusWidget &&
                (o._addStatusesWidget(s.statusWidget),
                (o._resizeObserver = new l.default(
                  o._handlerRestrictTitleWidth.bind(o),
                )),
                null !== o._actionsParentEl &&
                  o._resizeObserver.observe(o._actionsParentEl),
                null !== o._statusesWrapper &&
                  o._resizeObserver.observe(o._statusesWrapper)),
              o._selected.subscribe(o._updateTitleMaxWidth.bind(o)),
              o
            );
          }
          return (
            Object(s.__extends)(e, t),
            (e.prototype.destroy = function () {
              t.prototype.destroy.call(this),
                void 0 !== this._flagged && this._flagged.destroy(),
                null !== this._resizeObserver &&
                  (this._resizeObserver.disconnect(),
                  (this._resizeObserver = null));
            }),
            (e.prototype.getHeight = function () {
              return null === this._el
                ? null
                : (null === this._clientHeight &&
                    ((this._clientHeight = this._el.clientHeight),
                    0 === this._clientHeight && (this._clientHeight = null)),
                  this._clientHeight);
            }),
            (e.prototype._render = function () {
              t.prototype._render.call(this),
                (this._el = document.createElement('div')),
                this._el.classList.add(c.item, c.series),
                this._el.classList.toggle(
                  c.onlyOneButtonCanBeStick,
                  this._model.isOneButtonCanBeStick(),
                ),
                (this._el.dataset.name = 'legend-series-item'),
                (this._firstLineWrapper = document.createElement('div')),
                this._firstLineWrapper.classList.add(c.noWrapWrapper),
                this._el.appendChild(this._firstLineWrapper);
              var e = Object(o.ensureNotNull)(this._titleParentEl);
              this._firstLineWrapper.appendChild(e),
                null !== this._actionsParentEl &&
                  this._firstLineWrapper.appendChild(this._actionsParentEl);
              var i = Object(o.ensureNotNull)(this._valuesParentEl);
              this._el.appendChild(i), this._parentEl.append(this._el);
            }),
            (e.prototype._updateStates = function () {
              t.prototype._updateStates.call(this), this._updateFlaggedState();
            }),
            (e.prototype._renderValues = function () {
              null === this._valuesParentEl &&
                ((this._valuesParentEl = document.createElement('div')),
                this._valuesParentEl.classList.add(c.valuesWrapper),
                (this._valuesAdditionalWrapperEl = document.createElement(
                  'div',
                )),
                this._valuesAdditionalWrapperEl.classList.add(
                  c.valuesAdditionalWrapper,
                ),
                this._valuesParentEl.appendChild(
                  this._valuesAdditionalWrapperEl,
                ));
              for (
                var t = Object(o.ensureNotNull)(
                    this._valuesAdditionalWrapperEl,
                  ),
                  e = 0,
                  i = this._values.value();
                e < i.length;
                e++
              ) {
                var s = i[e],
                  n = document.createElement('div');
                n.classList.add(c.valueItem),
                  n.classList.toggle(p.blockHidden, !s.visible.value());
                var l = document.createElement('div'),
                  a = s.title.value() || '';
                l.classList.add(c.valueTitle),
                  l.classList.toggle(p.blockHidden, 0 === a.length),
                  l.appendChild(document.createTextNode(a)),
                  n.appendChild(l);
                var r = document.createElement('div');
                r.classList.add(c.valueValue),
                  (r.style.color = s.color.value() || ''),
                  r.appendChild(document.createTextNode(s.value.value())),
                  n.appendChild(r),
                  this._valuesElements.push({ title: l, value: r }),
                  t.appendChild(n);
              }
            }),
            (e.prototype._createValuesSpawns = function () {
              var e = this;
              t.prototype._createValuesSpawns.call(this),
                this._values.value().forEach(function (t, i) {
                  e._valuesSpawnArray[i].title = t.title.spawn();
                });
            }),
            (e.prototype._removeValuesSpawnsSubscriptions = function () {
              for (var e = 0, i = this._valuesSpawnArray; e < i.length; e++) {
                i[e].title.destroy();
              }
              t.prototype._removeValuesSpawnsSubscriptions.call(this);
            }),
            (e.prototype._addValuesSpawnsSubscriptions = function () {
              t.prototype._addValuesSpawnsSubscriptions.call(this);
              for (var e = 0; e < this._valuesSpawnArray.length; e++)
                this._valuesSpawnArray[e].title.subscribe(
                  this._updateValuesTitleHTMLElHandler.bind(this, e),
                );
            }),
            (e.prototype._isValuesShouldBeHidden = function () {
              return !this._valuesSpawnArray.some(function (t) {
                return (
                  t.value.value().length > 0 ||
                  (t.title.value() || '').length > 0
                );
              });
            }),
            (e.prototype._updateValuesTitleHTMLElHandler = function (t, e) {
              void 0 === e && (e = '');
              var i = Object(o.ensure)(this._valuesElements[t].title);
              b(i, e),
                i.classList.toggle(p.blockHidden, 0 === e.length),
                this._updateShowValues();
            }),
            (e.prototype._showActions = function () {
              t.prototype._showActions.call(this),
                this._updateTitleMaxWidthWithButton();
            }),
            (e.prototype._hideActions = function () {
              t.prototype._hideActions.call(this), this._updateTitleMaxWidth();
            }),
            (e.prototype._updateFlaggedState = function () {
              void 0 !== this._flagged &&
                (this._updateTitleMaxWidth(),
                Object(o.ensureNotNull)(this._el).classList.toggle(
                  c.flagged,
                  Boolean(this._flagged.value()),
                ));
            }),
            (e.prototype._addStatusesWidget = function (t) {
              (this._statusesWrapper = document.createElement('div')),
                this._statusesWrapper.classList.add(c.statusesWrapper),
                this._statusesWrapper.appendChild(t.getElement()),
                Object(o.ensureNotNull)(this._firstLineWrapper).appendChild(
                  this._statusesWrapper,
                );
            }),
            (e.prototype._handlerRestrictTitleWidth = function (t) {
              if (
                null !== this._actionsParentEl &&
                null !== this._firstLineWrapper
              ) {
                for (var e = null, i = null, s = 0, o = t; s < o.length; s++) {
                  var n = o[s];
                  n.target === this._statusesWrapper &&
                    (e = n.contentRect.width),
                    n.target === this._actionsParentEl &&
                      (i = n.contentRect.width);
                }
                (e === this._lastStatusesWrapperWidth &&
                  i === this._lastActionWrapperWidth) ||
                  (null !== e && (this._lastStatusesWrapperWidth = e),
                  null !== i && (this._lastActionWrapperWidth = i),
                  this._updateTitleMaxWidth());
              }
            }),
            (e.prototype._updateTitleMaxWidth = function () {
              if (null !== this._firstLineWrapper)
                if (this._isWidthButtonsMode())
                  this._updateTitleMaxWidthWithButton();
                else {
                  var t = this._lastActionWrapperWidth || 0,
                    e = (this._lastStatusesWrapperWidth || 0) + t;
                  this._firstLineWrapper.style.maxWidth =
                    e > 0 ? 'calc(100% - ' + e + 'px)' : '';
                }
            }),
            (e.prototype._updateTitleMaxWidthWithButton = function () {
              if (
                null !== this._firstLineWrapper &&
                null !== this._actionsParentEl
              ) {
                var t = this._lastActionWrapperWidth || 0,
                  e = (this._lastStatusesWrapperWidth || 0) + t;
                if (
                  null === this._allButtonsWidth &&
                  null !== this._lastActionWrapperWidth
                ) {
                  var i = this._actionsParentEl.querySelector('.' + c.buttons);
                  this._allButtonsWidth = Object(o.ensureNotNull)(
                    i,
                  ).clientWidth;
                }
                var s = this._allButtonsWidth || 0;
                this._firstLineWrapper.style.maxWidth =
                  'calc(100% - ' + Math.max(s, e) + 'px)';
              }
            }),
            (e.prototype._isWidthButtonsMode = function () {
              return (
                null !== this._el &&
                (this._el.classList.contains(c.withAction) ||
                  Object(o.ensureDefined)(this._flagged).value() ||
                  this._disabled.value() ||
                  this._selected.value() ||
                  this._stayInHoveredMode)
              );
            }),
            e
          );
        })(g),
        y = (function (t) {
          function e(e, i, s) {
            var o = t.call(this, e, i, s) || this;
            return (
              (o._globalRowVisibility = o._model.globalVisibility().spawn()),
              o._globalRowVisibility.subscribe(o._updateShowLine.bind(o)),
              (o._error = o._model.error().spawn()),
              o._error.subscribe(o._updateErrorState.bind(o)),
              (o._has5Buttons = o._model.isPineScriptDataSource().spawn()),
              o._has5Buttons.subscribe(o._update5ButtonsStyles.bind(o)),
              o._updateStates(!o._disabled.value()),
              o
            );
          }
          return (
            Object(s.__extends)(e, t),
            (e.prototype.destroy = function () {
              t.prototype.destroy.call(this),
                void 0 !== this._error && this._error.destroy(),
                this._has5Buttons.destroy(),
                this._globalRowVisibility &&
                  this._globalRowVisibility.destroy();
            }),
            (e.prototype._updateShowLine = function () {
              if (null !== this._el && void 0 !== this._globalRowVisibility) {
                var e = !this._globalRowVisibility.value();
                e
                  ? this._el.classList.toggle(p.blockHidden, e)
                  : t.prototype._updateShowLine.call(this);
              }
            }),
            (e.prototype._render = function () {
              t.prototype._render.call(this),
                (this._el = document.createElement('div')),
                this._el.classList.add(c.item, c.study),
                (this._el.dataset.name = 'legend-source-item');
              var e = Object(o.ensureNotNull)(this._titleParentEl);
              this._el.appendChild(e),
                null !== this._actionsParentEl &&
                  this._el.appendChild(this._actionsParentEl);
              var i = Object(o.ensureNotNull)(this._valuesParentEl);
              this._el.appendChild(i), this._parentEl.append(this._el);
            }),
            (e.prototype._renderValues = function () {
              null === this._valuesParentEl &&
                ((this._valuesParentEl = document.createElement('div')),
                this._valuesParentEl.classList.add(c.valuesWrapper),
                (this._valuesAdditionalWrapperEl = document.createElement(
                  'div',
                )),
                this._valuesAdditionalWrapperEl.classList.add(
                  c.valuesAdditionalWrapper,
                ),
                this._valuesParentEl.appendChild(
                  this._valuesAdditionalWrapperEl,
                ));
              for (
                var t = Object(o.ensureNotNull)(
                    this._valuesAdditionalWrapperEl,
                  ),
                  e = 0,
                  i = this._values.value();
                e < i.length;
                e++
              ) {
                var s = i[e],
                  n = document.createElement('div');
                n.classList.add(c.valueItem),
                  n.classList.toggle(p.blockHidden, !s.visible.value());
                var l = document.createElement('div');
                l.classList.add(c.valueValue),
                  (l.style.color = s.color.value() || ''),
                  l.appendChild(document.createTextNode(s.value.value())),
                  n.appendChild(l),
                  this._valuesElements.push({ value: l }),
                  t.appendChild(n);
              }
            }),
            (e.prototype._updateStates = function (e) {
              t.prototype._updateStates.call(this, e), this._updateErrorState();
            }),
            (e.prototype._updateErrorState = function () {
              void 0 !== this._error &&
                void 0 !== this._error.value() &&
                Object(o.ensureNotNull)(this._el).classList.toggle(
                  c.error,
                  this._error.value(),
                );
            }),
            (e.prototype._update5ButtonsStyles = function (t) {
              null !== this._el && this._el.classList.toggle(c.has5Buttons, t);
            }),
            e
          );
        })(g),
        f = i('Zo2/'),
        S = i('6dGu'),
        C = i('rGGD'),
        M = i('Y+EN'),
        E = i('vYP1'),
        V = window.t('Hide Indicator Legend'),
        T = window.t('Show Indicator Legend'),
        x = window.t('Show Object Tree'),
        L = (function () {
          function t(t, e, i) {
            (this._el = null),
              (this._counterEl = null),
              (this._arrowIconEL = null),
              (this._objectTreeEl = null),
              (this._mode = 0),
              (this._parentEl = t),
              (this._themedColor = e.spawn()),
              this._themedColor.subscribe(this._updateThemedColor.bind(this)),
              (this._sourceCount = i.visibleDataSourceCount.spawn()),
              this._sourceCount.subscribe(this._updateSourceCount.bind(this)),
              (this._isStateOpen = i.isDataSourcesCollapsed.spawn()),
              this._isStateOpen.subscribe(this._updateState.bind(this)),
              (this._showObjectsTree = i.showObjectsTree.spawn()),
              this._showObjectsTree.subscribe(
                this._updateObjectTreeVisibility.bind(this),
              ),
              this._render(),
              this._updateState(),
              this._updateThemedColor(this._themedColor.value()),
              this._updateObjectTreeVisibility(this._showObjectsTree.value()),
              (this._toggleStateHandler = Object(u.b)(i.onCollapseDataSources)),
              (this._showObjectTreeHandler = Object(u.b)(
                i.onShowObjectsTreeDialog,
              )),
              null !== this._el &&
                (this._el.addEventListener(
                  'touchend',
                  this._toggleStateHandler,
                ),
                this._el.addEventListener(
                  'mousedown',
                  this._toggleStateHandler,
                )),
              null !== this._objectTreeEl &&
                (this._objectTreeEl.addEventListener(
                  'touchend',
                  this._showObjectTreeHandler,
                ),
                this._objectTreeEl.addEventListener(
                  'mousedown',
                  this._showObjectTreeHandler,
                ));
          }
          return (
            (t.prototype.destroy = function () {
              this._sourceCount.destroy(),
                this._isStateOpen.destroy(),
                null !== this._objectTreeEl &&
                  (this._objectTreeEl.removeEventListener(
                    'touchend',
                    this._showObjectTreeHandler,
                  ),
                  this._objectTreeEl.removeEventListener(
                    'mousedown',
                    this._showObjectTreeHandler,
                  ),
                  (this._objectTreeEl = null)),
                (this._arrowIconEL = null),
                (this._counterEl = null),
                null !== this._el &&
                  (this._el.removeEventListener(
                    'touchend',
                    this._toggleStateHandler,
                  ),
                  this._el.removeEventListener(
                    'mousedown',
                    this._toggleStateHandler,
                  ),
                  (this._el.innerHTML = ''),
                  (this._el = null));
            }),
            (t.prototype.setMode = function (t) {
              (this._mode = t ? 1 : 0), this._updateTooltip();
            }),
            (t.prototype._render = function () {
              (this._el = document.createElement('div')),
                (this._el.className = c.toggler + ' apply-common-tooltip'),
                (this._arrowIconEL = document.createElement('div')),
                this._arrowIconEL.classList.add(c.iconArrow),
                (this._arrowIconEL.innerHTML = f.trackingModeIsAvailable
                  ? C
                  : S),
                this._el.appendChild(this._arrowIconEL),
                (this._objectTreeEl = document.createElement('div')),
                this._objectTreeEl.classList.add(c.objectTree),
                (this._objectTreeEl.innerHTML = f.trackingModeIsAvailable
                  ? E
                  : M),
                this._el.appendChild(this._objectTreeEl),
                (this._counterEl = document.createElement('div')),
                this._counterEl.classList.add(c.counter),
                this._counterEl.appendChild(
                  document.createTextNode(String(this._sourceCount.value())),
                ),
                this._el.appendChild(this._counterEl),
                this._parentEl.appendChild(this._el);
            }),
            (t.prototype._updateThemedColor = function (t) {
              null !== this._el &&
                (t.length > 0
                  ? (this._el.style.backgroundColor = t)
                  : this._el.style.removeProperty('background-color'));
            }),
            (t.prototype._updateSourceCount = function (t) {
              b(Object(o.ensureNotNull)(this._counterEl), String(t)),
                this._updateCounterVisibility(t);
            }),
            (t.prototype._updateCounterVisibility = function (t) {
              if (null !== this._counterEl) {
                var e = 1 === t;
                this._counterEl.classList.toggle(p.blockHidden, e);
              }
            }),
            (t.prototype._updateState = function () {
              var t = !this._isStateOpen.value();
              this._parentEl.classList.toggle(c.closed, t),
                this._updateTooltip(),
                vi((t ? 'Hide' : 'Show') + ' not main sources');
            }),
            (t.prototype._tooltip = function () {
              return 1 === this._mode ? x : this._isStateOpen.value() ? V : T;
            }),
            (t.prototype._updateTooltip = function () {
              null !== this._el &&
                this._el.setAttribute('title', this._tooltip());
            }),
            (t.prototype._updateObjectTreeVisibility = function (t) {
              null !== this._objectTreeEl &&
                this._objectTreeEl.classList.toggle(p.blockHidden, !t);
            }),
            t
          );
        })(),
        H = i('glKZ'),
        k = i('R5JZ'),
        A = (function () {
          function t(t, e) {
            (this._renderToggler = null),
              (this._mainDataSourceRenderer = null),
              (this._dataSourceRenderers = []),
              (this._wrapText = null),
              (this._parentEl = document.createElement('div')),
              (this._dataSourcesEl = null),
              (this._dataSourcesAdditionalWrapperEl = null),
              (this._collapsedDataSourcesWrapperEl = null),
              (this._collapsedDataSourcesEl = null),
              (this._outsideEventForCollapsedTooltip = null),
              (this._options = t),
              (this._togglerOptions = e),
              (this._isStudiesLegendHidden = t.isStudiesLegendHidden.spawn()),
              this._isStudiesLegendHidden.subscribe(
                this._updateLegendVisibility.bind(this),
              ),
              (this._isAllLegendHidden = t.isAllLegendHidden.spawn()),
              this._isAllLegendHidden.subscribe(
                this._updateLegendVisibility.bind(this),
              ),
              this._updateLegendVisibility(),
              (this._themedColor = t.themedColor.spawn()),
              this._themedColor.subscribe(this._setCustomBg.bind(this)),
              (this._showBackground = t.showBackground.spawn()),
              this._showBackground.subscribe(this._setCustomBg.bind(this)),
              (this._backgroundTransparency = t.backgroundTransparency.spawn()),
              this._backgroundTransparency.subscribe(
                this._setCustomBg.bind(this),
              ),
              (this._collapsedDataSourcesCountSpawn = t.collapsedDataSourcesCount.spawn()),
              this._collapsedDataSourcesCountSpawn.subscribe(
                this._updateCollapsedSourcesCount.bind(this),
              ),
              (this._showCollapsedDataSourcesTooltipHandler = this._showCollapsedDataSourcesTooltip.bind(
                this,
              )),
              f.trackingModeIsAvailable ||
                ((this._wrapText = t.wrapText.spawn()),
                this._wrapText.subscribe(this._updateWrapText.bind(this)),
                this._updateWrapText(this._wrapText.value())),
              this._parentEl.classList.add(c.legend),
              this._parentEl.classList.toggle(
                c.noActions,
                !this._options.withActions,
              ),
              this._parentEl.classList.toggle(
                c.touchMode,
                f.trackingModeIsAvailable,
              ),
              this._parentEl.classList.toggle(c.newCollapser, !1),
              (this._parentEl.dataset.name = 'legend'),
              this._parentEl.addEventListener('contextmenu', function (t) {
                return t.preventDefault();
              });
          }
          return (
            (t.prototype.destroy = function () {
              if (
                (this._isStudiesLegendHidden.destroy(),
                this._isAllLegendHidden.destroy(),
                this._themedColor.destroy(),
                this._showBackground.destroy(),
                this._backgroundTransparency.destroy(),
                this._collapsedDataSourcesCountSpawn.destroy(),
                f.trackingModeIsAvailable &&
                  null !== this._collapsedDataSourcesWrapperEl &&
                  this._collapsedDataSourcesWrapperEl.removeEventListener(
                    'touchend',
                    this._showCollapsedDataSourcesTooltipHandler,
                  ),
                this._outsideEventForCollapsedTooltip &&
                  this._outsideEventForCollapsedTooltip(),
                null !== this._wrapText && this._wrapText.destroy(),
                null !== this._dataSourcesAdditionalWrapperEl &&
                  ((this._dataSourcesAdditionalWrapperEl.innerHTML = ''),
                  (this._dataSourcesAdditionalWrapperEl = null)),
                null !== this._dataSourcesEl &&
                  ((this._dataSourcesEl.innerHTML = ''),
                  (this._dataSourcesEl = null)),
                null !== this._renderToggler &&
                  (this._renderToggler.destroy(), (this._renderToggler = null)),
                null !== this._mainDataSourceRenderer &&
                  (this._mainDataSourceRenderer.destroy(),
                  (this._mainDataSourceRenderer = null)),
                0 !== this._dataSourceRenderers.length)
              ) {
                for (
                  var t = 0, e = this._dataSourceRenderers;
                  t < e.length;
                  t++
                ) {
                  e[t].destroy();
                }
                this._dataSourceRenderers = [];
              }
              (this._parentEl.innerHTML = ''), delete this._parentEl;
            }),
            (t.prototype.addMainDataSource = function (t, e) {
              var i = this;
              if (null === this._mainDataSourceRenderer) {
                var s = document.createDocumentFragment();
                (this._mainDataSourceRenderer = new w(t, s, {
                  withActions: this._options.withActions,
                  customTextColor: this._options.customTextColor,
                  statusWidget: e,
                })),
                  this._parentEl.insertBefore(s, this._dataSourcesEl),
                  this._updateLegendVisibility();
              }
              t.onDestroy().subscribe(
                this,
                function () {
                  null !== i._mainDataSourceRenderer &&
                    (i._mainDataSourceRenderer.destroy(),
                    (i._mainDataSourceRenderer = null));
                },
                !0,
              );
            }),
            (t.prototype.addDataSources = function (t) {
              var e = this;
              null === this._dataSourcesEl &&
                ((this._dataSourcesEl = document.createElement('div')),
                this._dataSourcesEl.classList.add(c.sourcesWrapper),
                this._renderToggle(this._dataSourcesEl),
                (this._dataSourcesAdditionalWrapperEl = document.createElement(
                  'div',
                )),
                this._dataSourcesAdditionalWrapperEl.classList.add(c.sources),
                this._dataSourcesEl.appendChild(
                  this._dataSourcesAdditionalWrapperEl,
                ),
                this._renderCollapsedCounter(
                  this._dataSourcesAdditionalWrapperEl,
                ),
                this._parentEl.appendChild(this._dataSourcesEl));
              for (
                var i = Object(o.ensureNotNull)(
                    this._dataSourcesAdditionalWrapperEl,
                  ),
                  s = function (t) {
                    var s = new y(t, i, {
                      withActions: n._options.withActions,
                      customTextColor: n._options.customTextColor,
                    });
                    n._dataSourceRenderers.push(s),
                      n._updateLegendVisibility(),
                      t.onDestroy().subscribe(
                        n,
                        function () {
                          var t = e._dataSourceRenderers.indexOf(s);
                          -1 !== t &&
                            (e._dataSourceRenderers[t].destroy(),
                            e._dataSourceRenderers.splice(t, 1));
                        },
                        !0,
                      );
                  },
                  n = this,
                  l = 0,
                  a = t;
                l < a.length;
                l++
              ) {
                s(a[l]);
              }
            }),
            (t.prototype.firstTitle = function () {
              return this._parentEl.firstElementChild;
            }),
            (t.prototype.getElement = function () {
              return this._parentEl;
            }),
            (t.prototype.updateMode = function (t) {
              var e = t < 213,
                i = t < 120;
              this._parentEl.classList.toggle(c.minimized, e && !i),
                this._parentEl.classList.toggle(c.micro, i),
                null !== this._renderToggler && this._renderToggler.setMode(i);
              var s = f.trackingModeIsAvailable || t < 550;
              this._parentEl.classList.toggle(c.directionColumn, s);
            }),
            (t.prototype.getMainSourceHeight = function () {
              return null === this._mainDataSourceRenderer
                ? 0
                : this._mainDataSourceRenderer.getHeight();
            }),
            (t.prototype.getDataSourceHeight = function () {
              return 0 === this._dataSourceRenderers.length
                ? 0
                : this._dataSourceRenderers[0].getHeight();
            }),
            (t.prototype._renderToggle = function (t) {
              this._options.showToggleButton &&
                (this._renderToggler = new L(
                  t,
                  this._options.themedColor,
                  this._togglerOptions,
                ));
            }),
            (t.prototype._renderCollapsedCounter = function (t) {
              (this._collapsedDataSourcesWrapperEl = document.createElement(
                'div',
              )),
                (this._collapsedDataSourcesWrapperEl.className =
                  c.item + ' ' + c.last),
                (this._collapsedDataSourcesEl = document.createElement('span')),
                (this._collapsedDataSourcesEl.className =
                  c.text + ' apply-common-tooltip'),
                this._collapsedDataSourcesWrapperEl.append(
                  this._collapsedDataSourcesEl,
                ),
                t.append(this._collapsedDataSourcesWrapperEl),
                f.trackingModeIsAvailable &&
                  this._collapsedDataSourcesWrapperEl.addEventListener(
                    'touchend',
                    this._showCollapsedDataSourcesTooltipHandler,
                  ),
                this._updateCollapsedSourcesCount(
                  this._collapsedDataSourcesCountSpawn.value(),
                );
            }),
            (t.prototype._showCollapsedDataSourcesTooltip = function () {
              Object(H.showOnElement)(this._collapsedDataSourcesEl, {
                text: this._options.collapsedDataSourcesTitle.value(),
              }),
                this._addOutsideEventForHideTooltip();
            }),
            (t.prototype._addOutsideEventForHideTooltip = function () {
              var t = this;
              null !== this._outsideEventForCollapsedTooltip &&
                this._outsideEventForCollapsedTooltip(),
                (this._outsideEventForCollapsedTooltip = Object(k.a)(
                  new CustomEvent('timestamp').timeStamp,
                  this._collapsedDataSourcesWrapperEl,
                  function () {
                    null !== t._outsideEventForCollapsedTooltip &&
                      t._outsideEventForCollapsedTooltip(),
                      Object(H.hide)();
                  },
                  window.document,
                  { touchEnd: !0 },
                ));
            }),
            (t.prototype._updateCollapsedSourcesCount = function (t) {
              if (
                null !== this._collapsedDataSourcesWrapperEl &&
                null !== this._collapsedDataSourcesEl
              ) {
                var e = 0 === t;
                this._collapsedDataSourcesWrapperEl.classList.toggle(
                  p.blockHidden,
                  e,
                ),
                  e ||
                    (b(this._collapsedDataSourcesEl, '+' + t),
                    this._collapsedDataSourcesEl.setAttribute(
                      'title',
                      this._options.collapsedDataSourcesTitle.value(),
                    ));
              }
            }),
            (t.prototype._updateLegendVisibility = function () {
              this._parentEl.classList.toggle(
                p.blockHidden,
                this._isAllLegendHidden.value(),
              ),
                null !== this._dataSourcesEl &&
                  this._dataSourcesEl.classList.toggle(
                    p.blockHidden,
                    this._isStudiesLegendHidden.value(),
                  );
            }),
            (t.prototype._setCustomBg = function () {
              var t = this._showBackground.value(),
                e = this._themedColor.value(),
                i = this._backgroundTransparency.value(),
                s = '';
              if (t) {
                var o = Object(n.parseRgb)(e),
                  l = o[0],
                  a = o[1],
                  r = o[2];
                s = Object(n.rgbaToString)([
                  l,
                  a,
                  r,
                  Object(n.normalizeAlphaComponent)(1 - i / 100),
                ]);
              }
              this._parentEl.style.color = s;
            }),
            (t.prototype._updateWrapText = function (t) {
              this._parentEl.classList.toggle(c.noWrap, !t);
            }),
            t
          );
        })(),
        O = i('hY0g'),
        P = i.n(O),
        B = i('Tmoa'),
        W = i('aIyQ'),
        D = i.n(W),
        z = i('Ialn'),
        j = i('QloM'),
        N = i('1AAW'),
        R = i('CLNU');
      function I(t) {
        return void 0 !== t ? B.resetTransparency(t) : t;
      }
      var F = window.t('Show'),
        G = window.t('Hide'),
        U = (function () {
          function t(t, e, i, s, o) {
            var n = this;
            (this._values = new P.a([])),
              (this._actions = []),
              (this._onDestroy = new D.a()),
              (this._loading = new P.a(!1)),
              (this._moreActionCM = null),
              (this._model = t),
              (this._source = e),
              (this._options = i),
              (this._callbacks = s),
              (this._contextMenuOptions = o),
              (this._disabled = new P.a(this._getDisabledState())),
              (this._selected = new P.a(!1)),
              (this._isTitleHidden = new P.a(this._getTitleHiddenValue())),
              (this._isValuesHidden = new P.a(this._getValuesHiddenValue())),
              (this._isRowHidden = new P.a(this._getRowHiddenValue())),
              Object(N.a)(
                function () {
                  return {};
                },
                this._isTitleHidden,
                this._isValuesHidden,
                this._disabled,
              ).subscribe(this._updateRowVisibilities.bind(this)),
              this._values.subscribe(function () {
                n._isValuesHidden.setValue(n._getValuesHiddenValue());
              });
          }
          return (
            (t.prototype.destroy = function () {}),
            (t.prototype.onDestroy = function () {
              return this._onDestroy;
            }),
            (t.prototype.titles = function () {
              return this._titles.map(function (t) {
                return t.readonly();
              });
            }),
            (t.prototype.values = function () {
              return this._values.readonly();
            }),
            (t.prototype.actions = function () {
              return this._actions;
            }),
            (t.prototype.disabled = function () {
              return this._disabled.readonly();
            }),
            (t.prototype.selected = function () {
              return this._selected.readonly();
            }),
            (t.prototype.loading = function () {
              return this._loading.readonly();
            }),
            (t.prototype.isTitleHidden = function () {
              return this._isTitleHidden.readonly();
            }),
            (t.prototype.isValuesHidden = function () {
              return this._isValuesHidden.readonly();
            }),
            (t.prototype.isRowHidden = function () {
              return this._isRowHidden.readonly();
            }),
            (t.prototype.update = function () {
              this._updateTitle(), this._updateValues(), this._updateStates();
            }),
            (t.prototype.updateSource = function (t) {
              this._source !== t && ((this._source = t), this.update());
            }),
            (t.prototype.onToggleDisabled = function () {
              var t = this._source.properties().childs().visible,
                e = !t.value();
              this._model.setProperty(
                t,
                e,
                (e ? 'Show' : 'Hide') + ' ' + this._source.title(),
              ),
                vi((e ? 'Show' : 'Hide') + ' source');
            }),
            (t.prototype.onShowSettings = function () {
              this._source.userEditEnabled() &&
                (this.setSourceSelected(),
                this._callbacks.showChartPropertiesForSource(
                  this._source,
                  j.TabNames.style,
                ),
                vi('Settings for source'));
            }),
            (t.prototype.onShowMoreActions = function (t) {
              return this._options.readOnlyMode
                ? Promise.resolve(null)
                : (this._callbacks.updateActions(),
                  this._callbacks.showContextMenuForSources(
                    [this._source],
                    this._calcNewPosition(t),
                    this._contextMenuOptions,
                  ));
            }),
            (t.prototype.onContextMenuShow = function (t, e) {
              return this._options.readOnlyMode
                ? Promise.resolve(null)
                : (vi('Show legend context menu'),
                  this._callbacks.showLegendWidgetContextMenu(
                    this._calcNewPosition(t),
                    e,
                  ));
            }),
            (t.prototype.setSourceSelected = function () {
              var t = this;
              this._model.selectionMacro(function (e) {
                e.clearSelection(), e.addSourceToSelection(t._source);
              });
            }),
            (t.prototype._moreActionHandler = function (t) {
              var e = this;
              t.preventDefault(),
                null !== this._moreActionCM && this._moreActionCM.isShown()
                  ? (this._moreActionCM = null)
                  : (this.setSourceSelected(),
                    this.onShowMoreActions(t).then(function (t) {
                      e._moreActionCM = t;
                    }));
            }),
            (t.prototype._updateTitle = function () {
              var t = this._source.statusView();
              if (null !== t)
                for (
                  var e = t.getSplitTitle(), i = 0;
                  i < this._titles.length;
                  i++
                ) {
                  var s = e[i],
                    o = Object(R.clean)(
                      Array.isArray(s) ? s.join(' ') : s || '',
                      !0,
                    );
                  this._titles[i].setValue(o);
                }
            }),
            (t.prototype._updateStates = function () {
              this._disabled.setValue(this._getDisabledState()),
                this._selected.setValue(
                  this._model.selection().isSelected(this._source),
                ),
                this._loading.setValue(Boolean(this._source.isLoading()));
            }),
            (t.prototype._hasValues = function () {
              return this._values.value().length > 0;
            }),
            (t.prototype._getEyeTitle = function () {
              return this._disabled.value() ? F : G;
            }),
            (t.prototype._getDisabledState = function () {
              return !this._source.properties().visible.value();
            }),
            (t.prototype._updateRowVisibilities = function () {
              this._isRowHidden.setValue(this._getRowHiddenValue());
            }),
            (t.prototype._getRowHiddenValue = function () {
              return (
                (this._options.readOnlyMode && this._disabled.value()) ||
                (this._isTitleHidden.value() &&
                  (this._isValuesHidden.value() || this._disabled.value()))
              );
            }),
            (t.prototype._calcNewPosition = function (t) {
              var e = {};
              if (
                (function (t) {
                  return t.hasOwnProperty('touches');
                })(t) &&
                t.touches.length > 0
              )
                e = {
                  clientX: t.touches[0].clientX,
                  clientY: t.touches[0].clientY,
                };
              else if (null !== t.target) {
                var i = t.target.getBoundingClientRect();
                e = {
                  clientX: Object(z.isRtl)() ? i.right : i.left,
                  clientY: i.top + i.height + 3,
                };
              } else {
                var s = t;
                e = { clientX: s.clientX, clientY: s.clientY };
              }
              return e;
            }),
            t
          );
        })(),
        K = i('z4c1'),
        X = i('vWJB'),
        Z = i('Kxc7'),
        q = window.t('More'),
        Y = window.t('Flag Symbol'),
        J = window.t('Unflag Symbol'),
        Q = Z.enabled('show_hide_button_in_legend'),
        $ = (function (t) {
          function e(e, i, s, o, n) {
            var l = t.call(this, e, i, s, o, n) || this;
            (l._titles = [new P.a(''), new P.a(''), new P.a(''), new P.a('')]),
              (l._symbolMarker = null),
              (l._flagged = new P.a(null)),
              (l._symbolAction = null),
              (l._symbol = null),
              (l._isOneButtonCanBeStick = !1),
              l._createActions(),
              l._updateSymbolMarker(),
              l._model
                .model()
                .properties()
                .paneProperties.legendProperties.showSeriesTitle.subscribe(
                  l,
                  function () {
                    l._isTitleHidden.setValue(l._getTitleHiddenValue());
                  },
                );
            for (
              var a = 0,
                r = [
                  l._model.model().properties().paneProperties.legendProperties
                    .showSeriesOHLC,
                  l._model.model().properties().paneProperties.legendProperties
                    .showBarChange,
                ];
              a < r.length;
              a++
            ) {
              r[a].subscribe(l, function () {
                l._isValuesHidden.setValue(l._getValuesHiddenValue());
              });
            }
            return (
              l.update(),
              l._source.onStatusChanged().subscribe(l, function () {
                l._loading.setValue(l._source.isLoading());
              }),
              l
            );
          }
          return (
            Object(s.__extends)(e, t),
            (e.prototype.destroy = function () {
              t.prototype.destroy.call(this),
                this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showSeriesTitle.unsubscribeAll(
                    this,
                  ),
                this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showSeriesOHLC.unsubscribeAll(
                    this,
                  ),
                this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showBarChange.unsubscribeAll(
                    this,
                  ),
                this._source.onStatusChanged().unsubscribeAll(this),
                this._onDestroy.fire();
            }),
            (e.prototype.flagged = function () {
              return this._flagged.readonly();
            }),
            (e.prototype.onShowSettings = function () {
              this._source.userEditEnabled() &&
                this._callbacks.showGeneralChartProperties(j.TabNames.style);
            }),
            (e.prototype.isOneButtonCanBeStick = function () {
              return this._isOneButtonCanBeStick;
            }),
            (e.prototype._updateValues = function () {
              var t = this._source.legendView(),
                e = this._values.value(),
                i = t.marketTitle(),
                s = t.marketTitle().length > 0;
              if (0 === e.length) {
                var o = {
                    value: new P.a(''),
                    color: new P.a(''),
                    visible: new P.a(s),
                    title: new P.a(i),
                  },
                  n = t.items().map(function (t) {
                    return {
                      value: new P.a(t.value()),
                      color: new P.a(I(t.color())),
                      visible: new P.a(t.visible()),
                      title: new P.a(t.title()),
                    };
                  });
                this._values.setValue([o].concat(n));
              } else {
                e[0].title.setValue(i), e[0].visible.setValue(s);
                for (var l = t.items(), a = 0; a < l.length; a++) {
                  var r = l[a];
                  e[a + 1].value.setValue(r.value()),
                    e[a + 1].color.setValue(I(r.color())),
                    e[a + 1].visible.setValue(r.visible()),
                    e[a + 1].title.setValue(r.title());
                }
              }
            }),
            (e.prototype._updateStates = function () {
              t.prototype._updateStates.call(this), this._updateSymbolMarker();
            }),
            (e.prototype._getTitleHiddenValue = function () {
              return !this._model
                .model()
                .properties()
                .paneProperties.legendProperties.showSeriesTitle.value();
            }),
            (e.prototype._getValuesHiddenValue = function () {
              return (
                !this._hasValues() ||
                (!this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showSeriesOHLC.value() &&
                  !this._model
                    .model()
                    .properties()
                    .paneProperties.legendProperties.showBarChange.value())
              );
            }),
            (e.prototype._createActions = function () {
              var t = this;
              if (Q) {
                var e = {
                  icon: K,
                  action: Object(u.b)(this.onToggleDisabled.bind(this)),
                  visible: new P.a(!0),
                  className: c.eye,
                  title: new P.a(this._getEyeTitle()),
                  dataset: { name: 'legend-show-hide-action' },
                };
                this._actions.push(e),
                  this._disabled.subscribe(function () {
                    e.title.setValue(t._getEyeTitle());
                  });
              }
              this._actions.push({
                icon: X,
                action: this._moreActionHandler.bind(this),
                visible: new P.a(!0),
                title: new P.a(q),
                dataset: { name: 'legend-more-action' },
              });
            }),
            (e.prototype._getMarkerTitle = function () {
              return null !== this._symbolMarker
                ? this._symbolMarker.isMarked()
                  ? J
                  : Y
                : '';
            }),
            (e.prototype._symbolActionHandler = function () {
              null !== this._symbolMarker &&
                (this._updateSymbolMarker(), vi('Change flag state'));
            }),
            (e.prototype._updateSymbolMarker = function () {
              this._isOneButtonCanBeStick = !0;
            }),
            e
          );
        })(U),
        tt = i('3ClC'),
        et = i('oNDq');
      var it = i('z61+'),
        st = i('uOxu'),
        ot = i('RgOa'),
        nt = i('2CEX'),
        lt = i('D8x7'),
        at = (Object(st.getLogger)('Chart.LegendWidget'), window.t('Settings')),
        rt = window.t('Source code'),
        ut = window.t('Remove'),
        dt = window.t('More'),
        ht =
          (window.t('Error'),
          window.t('Could not get Pine source code.'),
          Z.enabled('study_buttons_in_legend'),
          Z.enabled('show_hide_button_in_legend')),
        ct = Z.enabled('property_pages'),
        pt = Z.enabled('format_button_in_legend'),
        _t = Z.enabled('delete_button_in_legend'),
        bt = (function (t) {
          function e(e, i, s, o, n) {
            var l = t.call(this, e, i, s, o, n) || this;
            return (
              (l._titles = [new P.a(''), new P.a('')]),
              (l._error = new P.a(!1)),
              (l._isPineScriptDataSource = new P.a(!1)),
              (l._pineAction = null),
              (l._globalVisibility = new P.a(!0)),
              l._createActions(),
              l._model
                .model()
                .properties()
                .paneProperties.legendProperties.showStudyTitles.subscribe(
                  l,
                  function () {
                    l._isTitleHidden.setValue(l._getTitleHiddenValue());
                  },
                ),
              l._model
                .model()
                .properties()
                .paneProperties.legendProperties.showStudyValues.subscribe(
                  l,
                  function () {
                    l._isValuesHidden.setValue(l._getValuesHiddenValue());
                  },
                ),
              l.update(),
              l
            );
          }
          return (
            Object(s.__extends)(e, t),
            (e.prototype.destroy = function () {
              t.prototype.destroy.call(this),
                this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showStudyTitles.unsubscribeAll(
                    this,
                  ),
                this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showStudyValues.unsubscribeAll(
                    this,
                  ),
                this._onDestroy.fire();
            }),
            (e.prototype.error = function () {
              return this._error.readonly();
            }),
            (e.prototype.isPineScriptDataSource = function () {
              return this._isPineScriptDataSource.readonly();
            }),
            (e.prototype.updateSource = function (e) {
              this._source !== e &&
                (this._values.setValue([]),
                t.prototype.updateSource.call(this, e),
                this._updateAbleShowSourceCode());
            }),
            (e.prototype.onRemoveSource = function () {
              var t;
              this._source.isUserDeletable() &&
                (this._source.hasChildren()
                  ? ((t = this._model.removeSource.bind(
                      this._model,
                      this._source,
                      !1,
                    )),
                    Object(et.createConfirmDialog)({
                      type: 'modal',
                      title: window.t('Confirm Remove Study Tree'),
                      content: window.t(
                        "Do you really want to delete study and all of it's children?",
                      ),
                    }).then(function (e) {
                      e.on('action:yes', function (e) {
                        t(), e.close();
                      }),
                        e.open();
                    }))
                  : this._model.removeSource(this._source, !1),
                vi('Remove sources'));
            }),
            (e.prototype.onShowSourceCode = function () {}),
            (e.prototype.setGlobalVisibility = function (t) {
              this._globalVisibility.setValue(t);
            }),
            (e.prototype.globalVisibility = function () {
              return this._globalVisibility.readonly();
            }),
            (e.prototype.getFullTitle = function () {
              return this._titles
                .map(function (t) {
                  return t.value();
                })
                .join(' ');
            }),
            (e.prototype._updateValues = function () {
              var t = this._source.legendView();
              if (null !== t && 0 !== t.items().length) {
                var e = this._values.value();
                if (0 === e.length) {
                  var i = t.items().map(function (t) {
                    return {
                      value: new P.a(t.value()),
                      color: new P.a(I(t.color())),
                      visible: new P.a(t.visible()),
                    };
                  });
                  this._values.setValue(i);
                } else
                  for (var s = t.items(), o = 0; o < s.length; o++) {
                    var n = e[o],
                      l = s[o];
                    n.value.setValue(l.value()),
                      n.color.setValue(I(l.color())),
                      n.visible.setValue(l.visible());
                  }
              }
            }),
            (e.prototype._updateStates = function () {
              t.prototype._updateStates.call(this),
                void 0 !== this._error &&
                  this._error.setValue(Boolean(this._source.isFailed()));
            }),
            (e.prototype._getTitleHiddenValue = function () {
              return !this._model
                .model()
                .properties()
                .paneProperties.legendProperties.showStudyTitles.value();
            }),
            (e.prototype._getValuesHiddenValue = function () {
              return (
                !this._hasValues() ||
                !this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showStudyValues.value()
              );
            }),
            (e.prototype._updateAbleShowSourceCode = function () {}),
            (e.prototype._updateVisibilityPineAction = function (t) {
              null !== this._pineAction &&
                (this._pineAction.visible.setValue(t),
                this._isPineScriptDataSource.setValue(t));
            }),
            (e.prototype._createActions = function () {
              var t = this;
              if (!this._options.readOnlyMode) {
                if (
                  ((this._pineAction = {
                    icon: nt,
                    action: Object(u.b)(this.onShowSourceCode.bind(this)),
                    visible: new P.a(!1),
                    title: new P.a(rt),
                    dataset: { name: 'legend-pine-action' },
                  }),
                  ht)
                ) {
                  var e = {
                    icon: K,
                    action: Object(u.b)(this.onToggleDisabled.bind(this)),
                    visible: new P.a(!0),
                    className: c.eye,
                    title: new P.a(this._getEyeTitle()),
                    dataset: { name: 'legend-show-hide-action' },
                  };
                  this._actions.push(e),
                    this._disabled.subscribe(function () {
                      e.title.setValue(t._getEyeTitle());
                    });
                }
                ct &&
                  pt &&
                  (!Object(tt.isStudy)(this._source) ||
                    new it.a(
                      this._source.metaInfo(),
                    ).hasUserEditableOptions()) &&
                  this._actions.push({
                    icon: ot,
                    action: Object(u.b)(this.onShowSettings.bind(this)),
                    visible: new P.a(!0),
                    title: new P.a(at),
                    dataset: { name: 'legend-settings-action' },
                  }),
                  _t &&
                    this._actions.push({
                      icon: lt,
                      action: Object(u.b)(this.onRemoveSource.bind(this)),
                      visible: new P.a(!0),
                      title: new P.a(ut),
                      dataset: { name: 'legend-delete-action' },
                    }),
                  this._actions.push({
                    icon: X,
                    action: this._moreActionHandler.bind(this),
                    visible: new P.a(!0),
                    title: new P.a(dt),
                    dataset: { name: 'legend-more-action' },
                  });
              }
            }),
            e
          );
        })(U),
        mt = i('EsvI'),
        vt = i('ogJP'),
        gt = i('+DwS'),
        wt = i('LIFs'),
        yt = i('rh3U'),
        ft = (function () {
          function t(t) {
            (this._status = new P.a(null)),
              (this._fullTooltip = new P.a(null)),
              (this._iconClassNames = new P.a(null)),
              (this._visible = new P.a(!1)),
              (this._tooltip = new P.a(null)),
              (this._icon = new P.a(null)),
              (this._className = new P.a(null)),
              (this._infoMaps = t),
              (this._size = t.size || 'medium'),
              this._status.subscribe(this._updateByStatus.bind(this), {
                callWithLast: !0,
              }),
              this._className.subscribe(this._updateIconClassName.bind(this));
          }
          return (
            (t.prototype.status = function () {
              return this._status;
            }),
            (t.prototype.tooltip = function () {
              return this._tooltip;
            }),
            (t.prototype.icon = function () {
              return this._icon;
            }),
            (t.prototype.className = function () {
              return this._className;
            }),
            (t.prototype.visible = function () {
              return this._visible;
            }),
            (t.prototype.size = function () {
              return this._size;
            }),
            (t.prototype.fullInfo = function () {
              return this._fullTooltip;
            }),
            (t.prototype._getTooltip = function (t) {
              var e, i;
              return null !==
                (i =
                  null === (e = this._infoMaps.tooltipMap) || void 0 === e
                    ? void 0
                    : e.get(t)) && void 0 !== i
                ? i
                : null;
            }),
            (t.prototype._getIcon = function (t) {
              var e,
                i = this._infoMaps.iconMap.get(t);
              return void 0 !== i && (e = i.get(this._size)), e || null;
            }),
            (t.prototype._getClassName = function (t) {
              return this._infoMaps.classNameMap.get(t) || null;
            }),
            (t.prototype._getTitle = function (t) {
              var e, i;
              return null !==
                (i =
                  null === (e = this._infoMaps.titleMap) || void 0 === e
                    ? void 0
                    : e.get(t)) && void 0 !== i
                ? i
                : null;
            }),
            (t.prototype._getTitleColor = function (t) {
              var e, i;
              return null !==
                (i =
                  null === (e = this._infoMaps.titleColorMap) || void 0 === e
                    ? void 0
                    : e.get(t)) && void 0 !== i
                ? i
                : null;
            }),
            (t.prototype._getHtml = function (t) {
              var e, i, o;
              return Object(s.__awaiter)(this, void 0, void 0, function () {
                return Object(s.__generator)(this, function (s) {
                  return [
                    2,
                    null !==
                      (o =
                        null ===
                          (i =
                            null === (e = this._infoMaps.htmlMap) ||
                            void 0 === e
                              ? void 0
                              : e.get(t)) || void 0 === i
                          ? void 0
                          : i.map(wt.b)) && void 0 !== o
                      ? o
                      : null,
                  ];
                });
              });
            }),
            (t.prototype._getAction = function (t) {
              var e, i;
              return null !==
                (i =
                  null === (e = this._infoMaps.actionMap) || void 0 === e
                    ? void 0
                    : e.get(t)) && void 0 !== i
                ? i
                : null;
            }),
            (t.prototype._updateFullTooltipByStatus = function (t) {
              return Object(s.__awaiter)(this, void 0, void 0, function () {
                var e;
                return Object(s.__generator)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return [4, this._getHtml(t)];
                    case 1:
                      return (
                        (e = i.sent()),
                        this._status.value() !== t
                          ? [2]
                          : (this._fullTooltip.setValue([
                              {
                                icon: this._icon.value(),
                                iconClassName: this._iconClassNames.value(),
                                title: this._getTitle(t),
                                titleColor: this._getTitleColor(t),
                                html: e,
                                size: this._size,
                                action: this._getAction(t),
                              },
                            ]),
                            [2])
                      );
                  }
                });
              });
            }),
            (t.prototype._updateByStatus = function (t) {
              null !== t
                ? (this._icon.setValue(this._getIcon(t)),
                  this._className.setValue(this._getClassName(t)),
                  this._tooltip.setValue(this._getTooltip(t)),
                  this._visible.setValue(!0),
                  this._updateFullTooltipByStatus(t))
                : this._visible.setValue(!1);
            }),
            (t.prototype._updateIconClassName = function (t) {
              null !== t
                ? this._iconClassNames.setValue([yt.statusItem, t])
                : this._iconClassNames.setValue(null);
            }),
            t
          );
        })(),
        St = i('PC8g'),
        Ct = i('HGP3'),
        Mt = i('Cf1E'),
        Et = i('VrrN'),
        Vt = i('VrXG'),
        Tt = i('LIcf'),
        xt = i('Uua9'),
        Lt = i('9Crk'),
        Ht = i('Tq3g'),
        kt = Object(st.getLogger)('Chart.LegendWidget'),
        At = new Map([
          [
            'DelayToRealtime',
            new Map([
              ['medium', Et],
              ['large', Vt],
            ]),
          ],
          [
            'DelayNoRealtime',
            new Map([
              ['medium', Et],
              ['large', Vt],
            ]),
          ],
          [
            'TFEXDelayForGuest',
            new Map([
              ['medium', Et],
              ['large', Vt],
            ]),
          ],
          [
            'MOEXDelayForGuest',
            new Map([
              ['medium', Et],
              ['large', Vt],
            ]),
          ],
          [
            'EOD',
            new Map([
              ['medium', Tt],
              ['large', xt],
            ]),
          ],
          [
            'TickByTick',
            new Map([
              ['medium', Lt],
              ['large', Ht],
            ]),
          ],
          [
            'BATSToRealtime',
            new Map([
              ['medium', Lt],
              ['large', Ht],
            ]),
          ],
        ]),
        Ot = new Map([
          ['DelayToRealtime', yt.delay],
          ['DelayNoRealtime', yt.delay],
          ['TFEXDelayForGuest', yt.delay],
          ['MOEXDelayForGuest', yt.delay],
          ['EOD', yt.eod],
          ['TickByTick', yt.notAccurate],
          ['BATSToRealtime', yt.notAccurate],
        ]),
        Pt = new Map([
          ['DelayToRealtime', Ct.colorsPalette['color-delay-mode']],
          ['DelayNoRealtime', Ct.colorsPalette['color-delay-mode']],
          ['TFEXDelayForGuest', Ct.colorsPalette['color-delay-mode']],
          ['MOEXDelayForGuest', Ct.colorsPalette['color-delay-mode']],
          ['EOD', Ct.colorsPalette['color-eod-mode']],
          ['TickByTick', Ct.colorsPalette['color-delay-mode']],
          ['BATSToRealtime', Ct.colorsPalette['color-delay-mode']],
        ]),
        Bt = window.t('Data is delayed'),
        Wt = window.t('End of day data'),
        Dt = window.t('One update per second'),
        zt = window.t('Cboe BZX'),
        jt = Object(wt.b)(
          window.t('{symbolName} data is delayed by {time} minutes.'),
        ),
        Nt = Object(wt.b)(
          window.t(
            '{listedExchange} real-time data is available for free to registered users.',
          ),
        ),
        Rt = Object(wt.b)(
          window.t(
            'To get real-time data for {description}, please buy the real-time data package.',
          ),
        ),
        It = Object(wt.b)(
          window.t(
            'Real-time data for {description} is not supported right now. We may support it in the future.',
          ),
        ),
        Ft = Object(wt.b)(window.t('Data is updated once a day.')),
        Gt = Object(wt.b)(
          window.t(
            'Data on our Basic plan is updated once per second, even if there are more updates on the market.',
          ),
        ),
        Ut = Object(wt.b)(
          window.t(
            'Data is updated once per second, even if there are more updates on the market.',
          ),
        ),
        Kt = Object(wt.b)(window.t('Paid plans feature faster data updates.')),
        Xt = Object(wt.b)(
          window.t(
            'Real-time data for {symbolName} is provided by {exchange} exchange.',
          ),
        ),
        Zt = Object(wt.b)(
          window.t(
            'This data is real-time, but it’s slightly different to its official counterpart coming from primary exchanges.',
          ),
        ),
        qt =
          (window.t('Create a free account'),
          window.t('Learn more'),
          (function (t) {
            function e(e, i, s) {
              var o =
                t.call(this, {
                  iconMap: At,
                  classNameMap: Ot,
                  titleColorMap: Pt,
                  size: i,
                }) || this;
              return (
                (o._options = s),
                (o._model = e),
                (o._dataUpdatedMode = e.status().spawn()),
                o._dataUpdatedMode.subscribe(o._updateStatus.bind(o), {
                  callWithLast: !0,
                }),
                o
              );
            }
            return (
              Object(s.__extends)(e, t),
              (e.prototype.destroy = function () {
                this._dataUpdatedMode.destroy();
              }),
              (e.prototype._getTooltip = function () {
                var t = this._getShortTexts();
                return null === t ? null : Object.values(t).join(' · ');
              }),
              (e.prototype._updateFullTooltipByStatus = function () {
                return Object(s.__awaiter)(this, void 0, void 0, function () {
                  var t, e, i, o, n, l, a, r;
                  return Object(s.__generator)(this, function (s) {
                    switch (s.label) {
                      case 0:
                        return null === (t = this._dataUpdatedMode.value())
                          ? (this._fullTooltip.setValue(null), [2])
                          : ((e = this._getShortTexts()),
                            [4, this._getHtmls()]);
                      case 1:
                        return (i = s.sent()), [4, this._getActions()];
                      case 2:
                        if (
                          ((o = s.sent()), t !== this._dataUpdatedMode.value())
                        )
                          return [2];
                        for (n = [], l = 0, a = t; l < a.length; l++)
                          (r = a[l]),
                            n.push({
                              icon: this._getIcon(r),
                              iconClassName: this._iconClassNames.value(),
                              title: e && e[r],
                              titleColor: this._getTitleColor(r),
                              html: i && i[r],
                              size: this._size,
                              action: o && o[r],
                            });
                        return this._fullTooltip.setValue(n), [2];
                    }
                  });
                });
              }),
              (e.prototype._updateStatus = function (e) {
                var i = null !== e ? e[0] : null;
                t.prototype._updateByStatus.call(this, i);
              }),
              (e.prototype._getHtmls = function () {
                return Object(s.__awaiter)(this, void 0, void 0, function () {
                  var t, e, i, o, n, l, a, r, u;
                  return Object(s.__generator)(this, function (s) {
                    switch (s.label) {
                      case 0:
                        if (null === (t = this._dataUpdatedMode.value()))
                          return [2, Promise.resolve(null)];
                        (e = {}),
                          (i = this._model.symbolName()),
                          (o = null),
                          (n = null),
                          (s.label = 1);
                      case 1:
                        return (
                          s.trys.push([1, 3, , 4]),
                          [4, this._model.description()]
                        );
                      case 2:
                        return (
                          (o = s.sent()), (n = this._model.exchange()), [3, 4]
                        );
                      case 3:
                        return (
                          (l = s.sent()),
                          kt.logError(
                            "Can't get exchange description, reason: " +
                              Object(Mt.a)(l),
                          ),
                          [3, 4]
                        );
                      case 4:
                        for (a = 0, r = t; a < r.length; a++)
                          (u = r[a]),
                            (e[u] = []),
                            ('DelayToRealtime' !== u &&
                              'DelayNoRealtime' !== u &&
                              'TFEXDelayForGuest' !== u &&
                              'MOEXDelayForGuest' !== u) ||
                              (e[u].push(
                                jt.format({
                                  symbolName: i,
                                  time: this._model.time().toString(),
                                }),
                              ),
                              this._options.subscriptionFullInfo &&
                                null !== o &&
                                'DelayToRealtime' === u &&
                                e[u].push(
                                  Rt.format({
                                    description: '<b>' + o + '</b>',
                                  }),
                                ),
                              null !== o &&
                                'DelayNoRealtime' === u &&
                                e[u].push(
                                  It.format({
                                    description: '<b>' + o + '</b>',
                                  }),
                                ),
                              this._options.subscriptionFullInfo &&
                                (u.includes('TFEXDelayForGuest') ||
                                  u.includes('MOEXDelayForGuest')) &&
                                e[u].push(
                                  Nt.format({
                                    listedExchange: this._model.listedExchange(),
                                  }),
                                )),
                            'EOD' === u && (e[u] = [Ft]),
                            'TickByTick' === u &&
                              (e[u].push(
                                this._options.subscriptionFullInfo ? Gt : Ut,
                              ),
                              this._options.subscriptionFullInfo &&
                                e[u].push(Kt)),
                            null !== n &&
                              'BATSToRealtime' === u &&
                              e[u].push(
                                Xt.format({ symbolName: i, exchange: n }),
                                Zt,
                              );
                        return Object.keys(e).length > 0 ? [2, e] : [2, null];
                    }
                  });
                });
              }),
              (e.prototype._getActions = function () {
                return Object(s.__awaiter)(this, void 0, void 0, function () {
                  var t, e, i, o, n;
                  return Object(s.__generator)(this, function (s) {
                    switch (s.label) {
                      case 0:
                        return null === this._dataUpdatedMode.value()
                          ? [2, null]
                          : ((t = {}), [3, 4]);
                      case 1:
                        return i < o.length ? ((n = o[i]), [5, e(n)]) : [3, 4];
                      case 2:
                        s.sent(), (s.label = 3);
                      case 3:
                        return i++, [3, 1];
                      case 4:
                        return Object.keys(t).length > 0 ? [2, t] : [2, null];
                    }
                  });
                });
              }),
              (e.prototype._getShortTexts = function () {
                var t = this._dataUpdatedMode.value();
                if (null === t) return null;
                for (var e = {}, i = 0, s = t; i < s.length; i++) {
                  var o = s[i];
                  ('DelayToRealtime' !== o &&
                    'DelayNoRealtime' !== o &&
                    'TFEXDelayForGuest' !== o &&
                    'MOEXDelayForGuest' !== o) ||
                    (e[o] = Bt),
                    'EOD' === o && (e[o] = Wt),
                    'TickByTick' === o && (e[o] = Dt),
                    'BATSToRealtime' === o && (e[o] = zt);
                }
                return Object.keys(e).length > 0 ? e : null;
              }),
              e
            );
          })(ft)),
        Yt = (i('YFKU'), i('JmzL')),
        Jt = i('M3mX'),
        Qt = window.t('Data problem'),
        $t = new Map([
          [
            'high',
            new Map([
              ['medium', Yt],
              ['large', Jt],
            ]),
          ],
          [
            'low',
            new Map([
              ['medium', Yt],
              ['large', Jt],
            ]),
          ],
        ]),
        te = new Map([
          ['high', yt.dataProblemHigh],
          ['low', yt.dataProblemLow],
        ]),
        ee = new Map([
          ['high', Qt],
          ['low', Qt],
        ]),
        ie = new Map([
          ['high', Ct.colorsPalette['color-data-problem']],
          ['low', Ct.colorsPalette['color-data-problem']],
        ]);
      var se = (function (t) {
          function e(e, i) {
            var s =
              t.call(this, {
                tooltipMap: ee,
                iconMap: $t,
                classNameMap: te,
                titleMap: ee,
                titleColorMap: ie,
                size: i,
              }) || this;
            return (
              (s._isDataProblemCritical = new P.a(!1)),
              (s._dataProblem = e.spawn()),
              s._dataProblem.subscribe(s._updateStatus.bind(s), {
                callWithLast: !0,
              }),
              s
            );
          }
          return (
            Object(s.__extends)(e, t),
            (e.prototype.destroy = function () {
              this._dataProblem.destroy();
            }),
            (e.prototype.isDataProblemCritical = function () {
              return this._isDataProblemCritical;
            }),
            (e.prototype._getHtml = function (t) {
              return Object(s.__awaiter)(this, void 0, void 0, function () {
                var t;
                return Object(s.__generator)(this, function (e) {
                  return null === (t = this._dataProblem.value())
                    ? [2, null]
                    : [2, [Object(wt.b)(t.text)]];
                });
              });
            }),
            (e.prototype._updateStatus = function (t) {
              var e,
                i =
                  null !== (e = null == t ? void 0 : t.severity) && void 0 !== e
                    ? e
                    : null;
              this._status.setValue(i),
                this._isDataProblemCritical.setValue(
                  (function (t) {
                    return 'high' === t;
                  })(i),
                );
            }),
            e
          );
        })(ft),
        oe = (function (t) {
          function e(e, i) {
            var s = t.call(this, i) || this;
            return (
              (s._booleanStatus = e.spawn()),
              s._booleanStatus.subscribe(s._updateStatus.bind(s), {
                callWithLast: !0,
              }),
              s
            );
          }
          return (
            Object(s.__extends)(e, t),
            (e.prototype.destroy = function () {
              this._booleanStatus.destroy();
            }),
            (e.prototype._updateStatus = function (t) {
              t ? this._status.setValue(!0) : this._status.setValue(null);
            }),
            e
          );
        })(ft),
        ne = i('YGQl'),
        le = i('Jjb7'),
        ae = window.t('Invalid Symbol'),
        re = window.t("This symbol doesn't exist, please pick another one."),
        ue = new Map([
          [
            !0,
            new Map([
              ['medium', ne],
              ['large', le],
            ]),
          ],
          [
            !1,
            new Map([
              ['medium', ''],
              ['large', ''],
            ]),
          ],
        ]),
        de = new Map([
          [!0, yt.invalidSymbol],
          [!1, null],
        ]),
        he = new Map([
          [!0, ae],
          [!1, null],
        ]),
        ce = new Map([
          [!0, ae],
          [!1, null],
        ]),
        pe = new Map([
          [!0, Ct.colorsPalette['color-invalid-symbol']],
          [!1, null],
        ]),
        _e = new Map([
          [!0, [re]],
          [!1, null],
        ]),
        be = new Map([
          [!0, null],
          [!1, null],
        ]),
        me = (function () {
          function t(t) {
            (this._el = document.createElement('div')),
              (this._prevCustomClass = null),
              (this._icon = t.icon.spawn()),
              this._icon.subscribe(this._updateIcon.bind(this), {
                callWithLast: !0,
              }),
              (this._className = t.className.spawn()),
              this._className.subscribe(this._updateClassName.bind(this), {
                callWithLast: !0,
              }),
              (this._visible = t.visible.spawn()),
              this._visible.subscribe(this._updateVisibility.bind(this), {
                callWithLast: !0,
              }),
              (this._size = t.size || 'medium'),
              this._render(t.parentEl);
          }
          return (
            (t.prototype.destroy = function () {
              this._visible.destroy(), this._icon.destroy();
            }),
            (t.prototype._render = function (t) {
              this._el.classList.add(yt.statusItem, yt[this._size]),
                t.appendChild(this._el);
            }),
            (t.prototype._updateVisibility = function (t) {
              this._el.classList.toggle('js-hidden', !t);
            }),
            (t.prototype._updateIcon = function (t) {
              null !== t && (this._el.innerHTML = t);
            }),
            (t.prototype._updateClassName = function (t) {
              this._prevCustomClass !== t &&
                (null !== this._prevCustomClass &&
                  this._el.classList.remove(this._prevCustomClass),
                null !== t && this._el.classList.add(t),
                (this._prevCustomClass = t));
            }),
            t
          );
        })();
      function ve(t) {
        return null !== t.value();
      }
      var ge = (function () {
          function t(t, e) {
            var i,
              o = this;
            (this.element = document.createElement('div')),
              (this._visibilitySpawns = []),
              (this._tooltipSpawns = []),
              (this._iconsRenderers = []);
            var n = [yt.statuses, 'apply-common-tooltip'];
            f.trackingModeIsAvailable && n.push(yt.touchMode),
              (i = this.element.classList).add.apply(
                i,
                Object(s.__spreadArrays)(n, [yt[t]]),
              ),
              (this._onClick = function (t) {
                t.preventDefault();
                var i = o.element.getBoundingClientRect(),
                  s = 14;
                o._visibleWidgetsCount() > 1 && (s -= 2);
                var n = { x: i.left - s, y: i.bottom + 4 };
                e.onClick(n);
              }),
              this.element.addEventListener('click', this._onClick);
          }
          return (
            (t.prototype.destroy = function () {
              for (var t = 0, e = this._iconsRenderers; t < e.length; t++) {
                e[t].destroy();
              }
              for (var i = 0, s = this._visibilitySpawns; i < s.length; i++) {
                s[i].destroy();
              }
              for (var o = 0, n = this._tooltipSpawns; o < n.length; o++) {
                n[o].destroy();
              }
              this.element.removeEventListener('click', this._onClick),
                this.element.remove();
            }),
            (t.prototype.addStatusModel = function (t) {
              this._iconsRenderers.push(
                new me({
                  visible: t.visible,
                  icon: t.model.icon(),
                  className: t.model.className(),
                  size: t.model.size(),
                  parentEl: this.element,
                }),
              );
              var e = t.visible.spawn();
              e.subscribe(this._updateSpecialClassAndTooltip.bind(this)),
                this._visibilitySpawns.push(e);
              var i = t.model.tooltip().spawn();
              i.subscribe(this._updateTooltip.bind(this)),
                this._tooltipSpawns.push(i);
            }),
            (t.prototype._getTooltip = function () {
              var t = this;
              return this._tooltipSpawns
                .filter(function (e, i) {
                  return t._visibilitySpawns[i].value();
                })
                .filter(ve)
                .map(function (t) {
                  return t.value();
                })
                .join(' · ');
            }),
            (t.prototype._updateTooltip = function () {
              this.element.setAttribute('title', this._getTooltip());
            }),
            (t.prototype._updateSpecialClassAndTooltip = function () {
              var t = this._visibleWidgetsCount();
              this.element.classList.toggle(yt.oneWidgetsVisible, 1 === t),
                this.element.classList.toggle(yt.twoWidgetsVisible, 2 === t),
                this.element.classList.toggle(yt.threeWidgetsVisible, 3 === t),
                this._updateTooltip();
            }),
            (t.prototype._visibleWidgetsCount = function () {
              return this._visibilitySpawns.filter(function (t) {
                return t.value();
              }).length;
            }),
            t
          );
        })(),
        we = i('9lPX'),
        ye = i('MyT/'),
        fe = i('jXu8'),
        Se = i('cbig'),
        Ce = i('G2LI'),
        Me = i('QkND'),
        Ee = i('Gp/h'),
        Ve = i('S48P'),
        Te = window.t('Market open'),
        xe = window.t('Pre-market'),
        Le = window.t('Post-market'),
        He = window.t('Market closed'),
        ke = window.t('Holiday'),
        Ae = window.t("All's well — Market is open."),
        Oe = window.t('Morning. Market is open for pre-market trading.'),
        Pe = window.t('Evening. Market is open for post-market trading.'),
        Be = window.t('Time for a walk — this market is closed.'),
        We = window.t('Market is currently on holiday. Lucky them.'),
        De = new Map([
          [
            'market',
            new Map([
              ['medium', ye],
              ['large', fe],
            ]),
          ],
          [
            'pre_market',
            new Map([
              ['medium', Ee],
              ['large', Ve],
            ]),
          ],
          [
            'post_market',
            new Map([
              ['medium', Ce],
              ['large', Me],
            ]),
          ],
          [
            'out_of_session',
            new Map([
              ['medium', we],
              ['large', we],
            ]),
          ],
          [
            'holiday',
            new Map([
              ['medium', Se],
              ['large', Se],
            ]),
          ],
        ]),
        ze = new Map([
          ['market', yt.marketStatusOpen],
          ['pre_market', yt.marketStatusPre],
          ['post_market', yt.marketStatusPost],
          ['out_of_session', yt.marketStatusClose],
          ['holiday', yt.marketStatusHoliday],
        ]),
        je = new Map([
          ['market', Te],
          ['pre_market', xe],
          ['post_market', Le],
          ['out_of_session', He],
          ['holiday', ke],
        ]),
        Ne = new Map([
          ['market', Te],
          ['pre_market', xe],
          ['post_market', Le],
          ['out_of_session', He],
          ['holiday', ke],
        ]),
        Re = new Map([
          ['market', Ct.colorsPalette['color-market-open']],
          ['pre_market', Ct.colorsPalette['color-pre-market']],
          ['post_market', Ct.colorsPalette['color-post-market']],
          ['out_of_session', Ct.colorsPalette['color-market-closed']],
          ['holiday', Ct.colorsPalette['color-market-holiday']],
        ]),
        Ie = new Map([
          ['market', [Ae]],
          ['pre_market', [Oe]],
          ['post_market', [Pe]],
          ['out_of_session', [Be]],
          ['holiday', [We]],
        ]),
        Fe = new Map([
          ['market', null],
          ['pre_market', null],
          ['post_market', null],
          ['out_of_session', null],
          ['holiday', null],
        ]),
        Ge = window.t('You can turn this data on or off.'),
        Ue = (function (t) {
          function e(e, i, s) {
            var o =
              t.call(this, {
                tooltipMap: je,
                iconMap: De,
                classNameMap: ze,
                titleMap: Ne,
                titleColorMap: Re,
                htmlMap: Ie,
                actionMap: Fe,
                size: i,
              }) || this;
            return (
              (o._options = s),
              (o._marketStatus = e.spawn()),
              o._marketStatus.subscribe(o._updateStatus.bind(o), {
                callWithLast: !0,
              }),
              o
            );
          }
          return (
            Object(s.__extends)(e, t),
            (e.prototype.destroy = function () {
              this._marketStatus.destroy();
            }),
            (e.prototype._getHtml = function (e) {
              return Object(s.__awaiter)(this, void 0, void 0, function () {
                var i;
                return Object(s.__generator)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return [4, t.prototype._getHtml.call(this, e)];
                    case 1:
                      return (
                        null !== (i = s.sent()) &&
                          (this._options.preMarketSolution ||
                            this._options.postMarketSolution) &&
                          ('pre_market' === e &&
                            this._options.preMarketSolution &&
                            i.push(Ge),
                          'post_market' === e &&
                            this._options.postMarketSolution &&
                            i.push(Ge)),
                        [2, i]
                      );
                  }
                });
              });
            }),
            (e.prototype._getAction = function (e) {
              return t.prototype._getAction.call(this, e);
            }),
            (e.prototype._updateStatus = function (t) {
              this._status.setValue(t);
            }),
            e
          );
        })(ft);
      var Ke = (function () {
          function t(t, e) {
            var i = this;
            if (
              ((this._size = f.trackingModeIsAvailable ? 'large' : 'medium'),
              (this._statusWidgetInfos = []),
              (this._renderer = new ge(this._size, {
                onClick: this._handleToggleDropdown.bind(this),
              })),
              (this._symbolInvalidShow = new P.a(!1)),
              (this._marketStatusShow = new P.a(!1)),
              (this._dataUpdatedModeShow = new P.a(!1)),
              (this._dataProblemShow = new P.a(!1)),
              (this._symbolInvalidVisibility = new P.a(!1)),
              (this._marketStatusVisibility = new P.a(!1)),
              (this._dataUpdatedModeVisibility = new P.a(!1)),
              (this._dataProblemVisibility = new P.a(!1)),
              (this._isDataProblemCritical = null),
              (this._container = document.createElement('div')),
              (this._menuOpened = !1),
              (this._menuPosition = null),
              (this._source = t),
              (this._options = e),
              this._options.sourceStatusesEnabled)
            ) {
              this._isSymbolInvalid = Object(gt.a)(
                t.isSymbolInvalid.bind(t),
                t.onStatusChanged(),
              );
              var s = new oe(this._isSymbolInvalid, {
                  tooltipMap: he,
                  iconMap: ue,
                  classNameMap: de,
                  titleMap: ce,
                  titleColorMap: pe,
                  htmlMap: _e,
                  actionMap: be,
                  size: this._size,
                }),
                o = { visible: this._symbolInvalidVisibility, model: s };
              this._statusWidgetInfos.push(o),
                this._renderer.addStatusModel(o),
                Object(N.a)(
                  function () {
                    return {};
                  },
                  this._symbolInvalidShow,
                  s.visible(),
                ).subscribe(function () {
                  i._symbolInvalidVisibility.setValue(
                    i._symbolInvalidShow.value() && s.visible().value(),
                  );
                });
            }
            if (this._options.marketStatusEnabled) {
              var n = t.marketStatusModel();
              if (null !== n) {
                var l = new Ue(
                    n.status(),
                    this._size,
                    this._options.marketStatus,
                  ),
                  a = { visible: this._marketStatusVisibility, model: l };
                this._statusWidgetInfos.push(a),
                  this._renderer.addStatusModel(a),
                  Object(N.a)(
                    function () {
                      return {};
                    },
                    this._marketStatusShow,
                    l.visible(),
                  ).subscribe(function () {
                    i._marketStatusVisibility.setValue(
                      i._marketStatusShow.value() && l.visible().value(),
                    );
                  });
              }
            }
            if (this._options.dataUpdateModeEnabled) {
              var r = t.dataUpdatedModeModel();
              if (null !== r) {
                var u = new qt(r, this._size, this._options.dataUpdateMode),
                  d = { visible: this._dataUpdatedModeVisibility, model: u };
                this._statusWidgetInfos.push(d),
                  this._renderer.addStatusModel(d),
                  Object(N.a)(
                    function () {
                      return {};
                    },
                    this._dataUpdatedModeShow,
                    u.visible(),
                  ).subscribe(function () {
                    i._dataUpdatedModeVisibility.setValue(
                      i._dataUpdatedModeShow.value() && u.visible().value(),
                    );
                  });
              }
            }
            if (this._options.dataUpdateModeEnabled) {
              var h = t.dataProblemModel();
              if (null !== h) {
                var c = new se(h.status(), this._size);
                this._isDataProblemCritical = c.isDataProblemCritical().spawn();
                d = { visible: this._dataProblemVisibility, model: c };
                this._statusWidgetInfos.push(d),
                  this._renderer.addStatusModel(d),
                  Object(N.a)(
                    function () {
                      return {};
                    },
                    this._dataProblemShow,
                    c.visible(),
                  ).subscribe(function () {
                    i._dataProblemVisibility.setValue(
                      i._dataProblemShow.value() && c.visible().value(),
                    );
                  });
              }
            }
            this._addVisibilitySubscriptions();
          }
          return (
            (t.prototype.destroy = function () {
              var t;
              Object(tt.isStudy)(this._source) ||
                this._source
                  .properties()
                  .symbol.listeners()
                  .unsubscribeAll(this),
                this._options.sourceStatusesEnabled &&
                  this._isSymbolInvalid.destroy(),
                null === (t = this._isDataProblemCritical) ||
                  void 0 === t ||
                  t.destroy();
              for (var e = 0, i = this._statusWidgetInfos; e < i.length; e++) {
                i[e].model.destroy();
              }
              this._renderer.destroy();
            }),
            (t.prototype.getElement = function () {
              return this._renderer.element;
            }),
            (t.prototype._addVisibilitySubscriptions = function () {
              var t;
              this._options.sourceStatusesEnabled &&
                (this._isSymbolInvalid.subscribe(
                  this._updateSymbolInvalidShow.bind(this),
                  { callWithLast: !0 },
                ),
                this._isSymbolInvalid.subscribe(
                  this._updateForceStatusActive.bind(this),
                  { callWithLast: !0 },
                )),
                this._options.dataProblemEnabled &&
                  (null === (t = this._isDataProblemCritical) ||
                    void 0 === t ||
                    t.subscribe(this._updateForceStatusActive.bind(this)));
            }),
            (t.prototype._updateForceStatusActive = function () {
              var t = this._isForceStatusActive();
              this._marketStatusShow.setValue(!t),
                this._dataUpdatedModeShow.setValue(!t),
                this._dataProblemShow.setValue(
                  !this._isDataProblemShouldBeHide(),
                );
            }),
            (t.prototype._isDataProblemShouldBeHide = function () {
              return this._isSymbolInvalid.value();
            }),
            (t.prototype._isForceStatusActive = function () {
              var t, e;
              return (
                this._isDataProblemShouldBeHide() ||
                (null !==
                  (e =
                    null === (t = this._isDataProblemCritical) || void 0 === t
                      ? void 0
                      : t.value()) &&
                  void 0 !== e &&
                  e)
              );
            }),
            (t.prototype._updateSymbolInvalidShow = function (t) {
              this._symbolInvalidShow.setValue(t);
            }),
            (t.prototype._getWidgetsTooltip = function () {
              for (
                var t = [], e = 0, i = this._statusWidgetInfos;
                e < i.length;
                e++
              ) {
                var s = i[e];
                if (s.visible.value()) {
                  var o = s.model.tooltip().value();
                  null !== o && t.push(o);
                }
              }
              return t.join(', ');
            }),
            (t.prototype._updateDropdownMenu = function () {
              var t = this;
              Promise.all([
                i.e('react'),
                i.e(2),
                i.e(23),
                i.e(89),
                i.e(1),
                i.e(10),
                i.e('full-tooltips-popup'),
              ])
                .then(i.bind(null, 'vR7+'))
                .then(function (e) {
                  e.render(
                    t._menuOpened,
                    t._container,
                    t._renderer.element,
                    t._statusWidgetInfos,
                    t._handleDropdownMenuClose.bind(t),
                    Object(o.ensureNotNull)(t._menuPosition),
                  );
                });
            }),
            (t.prototype._handleDropdownMenuClose = function () {
              (this._menuOpened = !1),
                Object(tt.isStudy)(this._source) ||
                  this._source
                    .properties()
                    .symbol.listeners()
                    .unsubscribeAll(this),
                this._updateDropdownMenu();
            }),
            (t.prototype._handleToggleDropdown = function (t) {
              var e;
              (this._menuPosition = t),
                (this._menuOpened = !this._menuOpened),
                this._menuOpened &&
                  (Object(tt.isStudy)(this._source) ||
                    this._source
                      .properties()
                      .symbol.listeners()
                      .subscribe(this, this._handleDropdownMenuClose),
                  (e =
                    'Open full tooltip for statuses: ' +
                    this._getWidgetsTooltip()),
                  Object(St.trackEvent)('GUI', "Statuses widget's action", e)),
                this._updateDropdownMenu();
            }),
            t
          );
        })(),
        Xe = i('AH3n'),
        Ze = window.t('Replay mode'),
        qe = window.t(
          "You're in Replay mode. You're in Replay mode. You're in Replay mode.",
        ),
        Ye =
          (new Map([
            [
              !0,
              new Map([
                ['medium', Xe],
                ['large', Xe],
              ]),
            ],
            [
              !1,
              new Map([
                ['medium', ''],
                ['large', ''],
              ]),
            ],
          ]),
          new Map([
            [!0, yt.replayMode],
            [!1, null],
          ]),
          new Map([
            [!0, Ze],
            [!1, null],
          ]),
          new Map([
            [!0, Ze],
            [!1, null],
          ]),
          new Map([
            [!0, Ct.colorsPalette['color-replay-mode']],
            [!1, null],
          ]),
          new Map([
            [!0, [qe]],
            [!1, null],
          ]),
          new Map([
            [!0, null],
            [!1, null],
          ]),
          (function (t) {
            function e(e, i, s) {
              var o = t.call(this, e, s) || this;
              return (
                (o._isInReplay = new P.a(!1).readonly().spawn()),
                (o._isInReplayShow = new P.a(!1)),
                (o._isInReplayVisibility = new P.a(!1)),
                o
              );
            }
            return (
              Object(s.__extends)(e, t),
              (e.prototype.destroy = function () {
                t.prototype.destroy.call(this);
              }),
              (e.prototype._isDataProblemShouldBeHide = function () {
                var e, i;
                return (
                  t.prototype._isDataProblemShouldBeHide.call(this) ||
                  (null !==
                    (i =
                      null === (e = this._isInReplay) || void 0 === e
                        ? void 0
                        : e.value()) &&
                    void 0 !== i &&
                    i)
                );
              }),
              (e.prototype._updateIsInReplay = function (t) {
                this._isInReplayShow.setValue(t),
                  this._updateForceStatusActive();
              }),
              e
            );
          })(Ke)),
        Je = i('7KDR'),
        Qe = i('5VQP'),
        $e = i('x2L+'),
        ti = i('MXV9');
      function ei(t, e, i) {
        t.setProperty(e, !e.value(), i);
      }
      function ii(t, e, i, s, o) {
        return (function (t, e, i, s) {
          var o = [],
            n = t.model().properties().paneProperties.legendProperties;
          o.push(
            new Je.Action({
              checkable: !0,
              checked: n.showSeriesTitle.value(),
              label: si,
              statName: 'Show Symbol',
              onExecute: function () {
                return ei(
                  t,
                  n.showSeriesTitle,
                  'Change Symbol Description Visibility',
                );
              },
            }),
          ),
            e.showOpenMarketStatus &&
              o.push(
                new Je.Action({
                  checkable: !0,
                  checked: $e.b.value(),
                  label: oi,
                  statName: 'Show Open market status',
                  onExecute: function () {
                    return ei(t, $e.b, 'Change open market status visibility');
                  },
                }),
              );
          o.push(
            new Je.Action({
              checkable: !0,
              checked: n.showSeriesOHLC.value(),
              label: ni,
              statName: 'Show OHLC Values',
              onExecute: function () {
                return ei(t, n.showSeriesOHLC, 'Change OHLC Values Visibility');
              },
            }),
          ),
            o.push(
              new Je.Action({
                checkable: !0,
                checked: n.showBarChange.value(),
                label: li,
                statName: 'Show Bar Change Values',
                onExecute: function () {
                  return ei(t, n.showBarChange, 'Change Bar Change Visibility');
                },
              }),
            ),
            o.push(new Je.Separator()),
            o.push(
              new Je.Action({
                checkable: !0,
                checked: n.showStudyTitles.value(),
                label: ai,
                statName: 'Show Indicator Titles',
                onExecute: function () {
                  return ei(
                    t,
                    n.showStudyTitles,
                    'Change Indicator Titles Visibility',
                  );
                },
              }),
            ),
            o.push(
              new Je.Action({
                checkable: !0,
                checked: n.showStudyArguments.value(),
                label: ri,
                statName: 'Show Indicator Arguments',
                onExecute: function () {
                  return ei(
                    t,
                    n.showStudyArguments,
                    'Change Indicator Arguments Visibility',
                  );
                },
              }),
            ),
            o.push(
              new Je.Action({
                checkable: !0,
                checked: n.showStudyValues.value(),
                label: ui,
                statName: 'Show Indicator Values',
                onExecute: function () {
                  return ei(
                    t,
                    n.showStudyValues,
                    'Change Indicator Values Visibility',
                  );
                },
              }),
            ),
            hi ||
              (o.push(new Je.Separator()),
              o.push(
                new Je.Action({
                  checkable: !0,
                  checked: n.wrapText.value(),
                  label: di,
                  statName: 'Wrap Text',
                  onExecute: function () {
                    ei(t, n.wrapText, 'Change wrap text'),
                      vi('Change wrap text ' + (n.wrapText ? 'on' : 'off'));
                  },
                }),
              ));
          e.settings &&
            (o.push(new Je.Separator()),
            o.push(
              new Je.Action({
                label: window.t('Settings...'),
                icon: ti,
                statName: 'Settings...',
                onExecute: function () {
                  return i(j.TabNames.legend);
                },
              }),
            ));
          return Qe.ContextMenuManager.createMenu(o, {}, s);
        })(t, e, i, o).then(function (t) {
          return t.show(s), t;
        });
      }
      var si = window.t('Show Symbol'),
        oi = window.t('Show Open market status'),
        ni = window.t('Show OHLC Values'),
        li = window.t('Show Bar Change Values'),
        ai = window.t('Show Indicator Titles'),
        ri = window.t('Show Indicator Arguments'),
        ui = window.t('Show Indicator Values'),
        di = window.t('Wrap text'),
        hi = _.CheckMobile.any();
      var ci = i('PoSe'),
        pi = i.n(ci);
      i('Vdly');
      i.d(e, 'trackLegendEvent', function () {
        return vi;
      }),
        i.d(e, 'LegendWidget', function () {
          return gi;
        });
      var _i = {
          readOnlyMode: !1,
          contextMenu: {
            settings: !0,
            mainSeries: !0,
            studies: !0,
            showOpenMarketStatus: !1,
          },
          symbolMarkerEnabled: !1,
          showToggleButton: !0,
          canShowSourceCode: !1,
          statusesWidgets: {
            sourceStatusesEnabled: !1,
            marketStatusEnabled: !1,
            marketStatus: { preMarketSolution: !0, postMarketSolution: !0 },
            dataUpdateMode: { subscriptionFullInfo: !0 },
            dataUpdateModeEnabled: !0,
            dataProblemEnabled: !0,
          },
        },
        bi =
          (Z.enabled('hide_legend_by_default'),
          Z.enabled('fundamental_widget')),
        mi = Z.enabled('legend_context_menu');
      function vi(t) {
        Object(St.trackEvent)('GUI', 'Legend action', t);
      }
      var gi = (function () {
        function t(t, e, i, o, n, l) {
          var a = this;
          (this._mainSeriesViewModel = null),
            (this._dataSourceViewModels = []),
            (this._visibleDataSourceCount = new P.a(0)),
            (this._themedColor = new P.a('')),
            (this._mainSeriesRowHidden = null),
            (this._dataSourceRowsHidden = []),
            (this._allLegendHidden = new P.a(!1)),
            (this._studiesLegendHidden = new P.a(!1)),
            (this._onLegendVisibilityToggled = null),
            (this._availableHeight = 0),
            (this._collapsedDataSourcesCount = new P.a(0)),
            (this._collapsedDataSourcesTitle = new P.a('')),
            (this._model = t),
            (this._paneWidget = e),
            (this._options = Object(vt.merge)(Object(vt.clone)(_i), n)),
            (this._callbacks = Object(s.__assign)(Object(s.__assign)({}, l), {
              showLegendWidgetContextMenu: this.onShowLegendWidgetContextMenu.bind(
                this,
              ),
            })),
            (this._mainSeriesViewModelsOptions = {
              readOnlyMode: this._options.readOnlyMode,
              symbolMarkerEnabled: this._options.symbolMarkerEnabled,
            }),
            (this._dataSourceViewModelsOptions = Object(s.__assign)(
              Object(s.__assign)({}, this._mainSeriesViewModelsOptions),
              { canShowSourceCode: this._options.canShowSourceCode },
            )),
            (this._backgroundThemeName = i);
          var r = this._showLegendCalculatedProperty();
          (this._isDataSourcesCollapsed = new P.a(r.value())),
            r.subscribe(this, function () {
              a._isDataSourcesCollapsed.setValue(r.value());
            });
          var u = new P.a(this._getCustomTextColorValue());
          this._model
            .model()
            .properties()
            .scalesProperties.textColor.subscribe(this, function () {
              u.setValue(a._getCustomTextColorValue());
            });
          var d = this._model.model().properties().paneProperties
              .legendProperties.showBackground,
            h = new P.a(d.value());
          d.subscribe(this, function () {
            h.setValue(d.value());
          });
          var c = this._model.model().properties().paneProperties
              .legendProperties.backgroundTransparency,
            p = new P.a(c.value());
          c.subscribe(this, function () {
            p.setValue(c.value());
          });
          var _ = this._model.model().properties().paneProperties
            .legendProperties.wrapText;
          (this._wrapText = new P.a(_.value())),
            _.subscribe(this, function () {
              a._wrapText.setValue(_.value()), a._updateCollapsedSourcesMode();
            }),
            (this._hideNotMainSources = o.spawn()),
            this._hideNotMainSources.subscribe(
              this._updateVisibilityNotMainSources.bind(this),
            ),
            (this._isPaneMain = new P.a(this._getIsPaneMainValue())),
            (this._updateCollapsedSourcesModeThrottle = pi()(
              this._updateCollapsedSourcesMode.bind(this),
              100,
            )),
            (this._renderer = new A(
              {
                withActions: !this._options.readOnlyMode,
                showToggleButton: this._options.showToggleButton,
                isStudiesLegendHidden: this._studiesLegendHidden.readonly(),
                isAllLegendHidden: this._allLegendHidden.readonly(),
                customTextColor: u.readonly(),
                themedColor: this._themedColor.readonly(),
                showBackground: h.readonly(),
                backgroundTransparency: p.readonly(),
                wrapText: this._wrapText.readonly(),
                collapsedDataSourcesCount: this._collapsedDataSourcesCount.readonly(),
                collapsedDataSourcesTitle: this._collapsedDataSourcesTitle.readonly(),
              },
              {
                visibleDataSourceCount: this._visibleDataSourceCount.readonly(),
                isDataSourcesCollapsed: this._isDataSourcesCollapsed.readonly(),
                showObjectsTree: this._isPaneMain.readonly(),
                onCollapseDataSources: this.onCollapseDataSources.bind(this),
                onShowObjectsTreeDialog: this._callbacks.showObjectsTreeDialog,
              },
            ));
        }
        return (
          (t.prototype.destroy = function () {
            this._hideNotMainSources.destroy(),
              null !== this._mainSeriesViewModel &&
                this._mainSeriesViewModel.destroy();
            for (var t = 0, e = this._dataSourceViewModels; t < e.length; t++) {
              e[t].destroy();
            }
            this._clearVisibilitiesSubscriptions(),
              this._renderer.destroy(),
              delete this._renderer,
              this._showLegendCalculatedProperty().unsubscribeAll(this),
              this._showLegendOriginalProperty().unsubscribeAll(this),
              this._model
                .model()
                .properties()
                .scalesProperties.textColor.unsubscribeAll(this),
              this._model
                .model()
                .properties()
                .paneProperties.legendProperties.showBackground.unsubscribeAll(
                  this,
                ),
              this._model
                .model()
                .properties()
                .paneProperties.legendProperties.backgroundTransparency.unsubscribeAll(
                  this,
                ),
              this._model
                .model()
                .properties()
                .paneProperties.legendProperties.wrapText.unsubscribeAll(this);
          }),
          (t.prototype.onShowLegendWidgetContextMenu = function (t, e) {
            return mi
              ? ii(
                  this._model,
                  this._options.contextMenu,
                  this._callbacks.showGeneralChartProperties,
                  t,
                  e,
                )
              : Promise.resolve(null);
          }),
          (t.prototype.onCollapseDataSources = function () {
            var t = this._showLegendOriginalProperty();
            t.setValue(!t.value());
          }),
          (t.prototype.updateLayout = function () {
            var t = this._paneWidget
                .state()
                .orderedSources()
                .filter(function (t) {
                  return null !== t.statusView();
                }),
              e = this._model.mainSeries(),
              i = t.indexOf(e);
            i > -1
              ? (t.splice(i, 1),
                bi ||
                  null !== this._mainSeriesViewModel ||
                  ((this._mainSeriesViewModel = new $(
                    this._model,
                    e,
                    this._mainSeriesViewModelsOptions,
                    this._callbacks,
                    this._options.contextMenu,
                  )),
                  this._renderer.addMainDataSource(
                    this._mainSeriesViewModel,
                    new Ye(
                      e,
                      this._model.model(),
                      this._options.statusesWidgets,
                    ),
                  )))
              : null !== this._mainSeriesViewModel &&
                (this._mainSeriesViewModel.destroy(),
                (this._mainSeriesViewModel = null));
            var s = [],
              o = this._dataSourceViewModels.length;
            if (0 === o)
              for (var n = t.length - 1; n >= 0; n--)
                s.push(
                  new bt(
                    this._model,
                    t[n],
                    this._dataSourceViewModelsOptions,
                    this._callbacks,
                    this._options.contextMenu,
                  ),
                );
            else {
              var l = 0;
              for (n = t.length - 1; n >= 0; n--)
                this._dataSourceViewModels[l]
                  ? this._dataSourceViewModels[l].updateSource(t[n])
                  : s.push(
                      new bt(
                        this._model,
                        t[n],
                        this._dataSourceViewModelsOptions,
                        this._callbacks,
                        this._options.contextMenu,
                      ),
                    ),
                  l++;
              for (n = l; n < this._dataSourceViewModels.length; n++)
                this._dataSourceViewModels[n].destroy();
              this._dataSourceViewModels.splice(
                l,
                this._dataSourceViewModels.length - l,
              );
            }
            0 !== s.length &&
              (this._renderer.addDataSources(s),
              (this._dataSourceViewModels = this._dataSourceViewModels.concat(
                s,
              ))),
              o !== this._dataSourceViewModels.length &&
                this._updateCollapsedSourcesMode(),
              this._recreateVisibilitiesSubscriptions(),
              this._isPaneMain.setValue(this._getIsPaneMainValue()),
              this.update();
          }),
          (t.prototype.update = function () {
            null !== this._mainSeriesViewModel &&
              this._mainSeriesViewModel.update();
            for (var t = 0, e = this._dataSourceViewModels; t < e.length; t++) {
              e[t].update();
            }
          }),
          (t.prototype.updateThemedColors = function (t) {
            null === t &&
              (t = Object(mt.getStdThemedValue)(
                'chartProperties.paneProperties.background',
                this._backgroundThemeName.value(),
              )),
              this._themedColor.setValue(t || '');
          }),
          (t.prototype.dataSourceAtPoint = function (t, e) {
            return null;
          }),
          (t.prototype.firstTitle = function () {
            return this._renderer.firstTitle();
          }),
          (t.prototype.getElement = function () {
            return this._renderer.getElement();
          }),
          (t.prototype.updateWidgetModeBySize = function (t) {
            this._updateWidgetModeByWidth(t.w),
              this._updateWidgetModeByHeight(t.h);
          }),
          (t.prototype._updateWidgetModeByWidth = function (t) {
            this._renderer.updateMode(t);
          }),
          (t.prototype._updateWidgetModeByHeight = function (t) {
            (this._availableHeight = 0.9 * t),
              this._updateCollapsedSourcesModeThrottle();
          }),
          (t.prototype._updateCollapsedSourcesMode = function () {
            var t = this._dataSourceViewModels.length;
            if (!this._wrapText.value() && this._availableHeight > 0 && t > 2) {
              var e = this._renderer.getMainSourceHeight(),
                i = this._renderer.getDataSourceHeight();
              if (null !== e && null !== i) {
                var s = Math.floor((this._availableHeight - e) / i),
                  o = Math.max(s, 2) - 1;
                if (t > o + 1) {
                  for (var n = '', l = 0; l < t; l++) {
                    var a = l < o;
                    this._dataSourceViewModels[l].setGlobalVisibility(a),
                      a ||
                        (n +=
                          (0 === n.length ? '' : ', ') +
                          this._dataSourceViewModels[l].getFullTitle());
                  }
                  return (
                    this._collapsedDataSourcesTitle.setValue(n),
                    void this._collapsedDataSourcesCount.setValue(t - o)
                  );
                }
              }
            }
            for (var r = 0, u = this._dataSourceViewModels; r < u.length; r++) {
              u[r].setGlobalVisibility(!0);
            }
            this._collapsedDataSourcesCount.setValue(0),
              this._collapsedDataSourcesTitle.setValue('');
          }),
          (t.prototype._getCustomTextColorValue = function () {
            var t = this._model
              .model()
              .properties()
              .scalesProperties.textColor.value();
            return Object(mt.isStdThemedDefaultValue)(
              'chartProperties.scalesProperties.textColor',
              t,
              Object(mt.getCurrentTheme)().name,
            )
              ? null
              : t;
          }),
          (t.prototype._clearVisibilitiesSubscriptions = function () {
            null !== this._mainSeriesRowHidden &&
              (this._mainSeriesRowHidden.destroy(),
              (this._mainSeriesRowHidden = null));
            for (var t = 0, e = this._dataSourceRowsHidden; t < e.length; t++) {
              e[t].destroy();
            }
            this._dataSourceRowsHidden = [];
          }),
          (t.prototype._recreateVisibilitiesSubscriptions = function () {
            this._clearVisibilitiesSubscriptions(),
              null !== this._mainSeriesViewModel &&
                ((this._mainSeriesRowHidden = this._mainSeriesViewModel
                  .isRowHidden()
                  .spawn()),
                this._mainSeriesRowHidden.subscribe(
                  this._updateLegendVisibilities.bind(this),
                ));
            for (var t = 0, e = this._dataSourceViewModels; t < e.length; t++) {
              var i = e[t];
              this._dataSourceRowsHidden.push(i.isRowHidden().spawn());
            }
            for (var s = 0, o = this._dataSourceRowsHidden; s < o.length; s++) {
              var n = o[s];
              n.subscribe(this._updateVisibleDataSourceCount.bind(this)),
                n.subscribe(this._updateLegendVisibilities.bind(this));
            }
            this._updateVisibleDataSourceCount(),
              this._updateLegendVisibilities();
          }),
          (t.prototype._updateLegendVisibilities = function () {
            var t = this._dataSourceRowsHidden.every(function (t) {
                return t.value();
              }),
              e = this._hideNotMainSources.value() || t;
            this._studiesLegendHidden.setValue(e);
            var i =
              null === this._mainSeriesRowHidden ||
              this._mainSeriesRowHidden.value();
            this._allLegendHidden.setValue(t && i);
          }),
          (t.prototype._updateVisibleDataSourceCount = function () {
            var t = this._dataSourceRowsHidden.filter(function (t) {
              return !t.value();
            }).length;
            this._visibleDataSourceCount.setValue(t);
          }),
          (t.prototype._setLegendVisibilityToggled = function () {}),
          (t.prototype._getIsPaneMainValue = function () {
            return this._paneWidget.containsMainSeries();
          }),
          (t.prototype._updateVisibilityNotMainSources = function () {
            this._updateLegendVisibilities(),
              this._hideNotMainSources.value() ||
                this._updateCollapsedSourcesMode();
          }),
          (t.prototype._showLegendCalculatedProperty = function () {
            return this._showLegendOriginalProperty();
          }),
          (t.prototype._showLegendOriginalProperty = function () {
            return this._model.model().properties().paneProperties
              .legendProperties.showLegend;
          }),
          t
        );
      })();
    },
    vWJB: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 4" width="16" height="4" fill="none"><circle stroke="currentColor" cx="2" cy="2" r="1.5"/><circle stroke="currentColor" cx="8" cy="2" r="1.5"/><circle stroke="currentColor" cx="14" cy="2" r="1.5"/></svg>';
    },
    vYP1: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M8.54.84a.8.8 0 0 1 .92 0l7.5 5.25a.8.8 0 0 1 0 1.32l-7.5 5.25a.8.8 0 0 1-.92 0L1.04 7.4a.8.8 0 0 1 0-1.32L8.54.84zM2.9 6.75L9 11.02l6.1-4.27L9 2.48 2.9 6.75z"/><path fill="currentColor" d="M.84 10.8a.8.8 0 0 1 1.12-.2L9 15.51l7.04-4.93a.8.8 0 0 1 .92 1.32l-7.5 5.25a.8.8 0 0 1-.92 0l-7.5-5.25a.8.8 0 0 1-.2-1.12z"/></svg>';
    },
    vg09: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 2v10M2 7h10"/></svg>';
    },
    z4c1: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><g class="normal-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.9948 7.91366C16.6965 6.48549 14.6975 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C7.30322 15.5145 9.30225 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366ZM6.74482 13.4137C7.94648 14.7355 9.69746 16 11.9999 16C14.3022 16 16.0532 14.7355 17.2549 13.4137C17.2549 13.4137 19 11.5 19 11C19 10.5 17.2549 8.58634 17.2549 8.58634C16.0532 7.26451 14.3022 6 11.9999 6C9.69746 6 7.94648 7.26451 6.74482 8.58634C6.74482 8.58634 5 10.5 5 11C5 11.5 6.74482 13.4137 6.74482 13.4137Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"/></g><g class="crossed-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8.8503 16.2712C9.76531 16.7135 10.8152 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366C17.8729 7.77954 17.7448 7.64491 17.6105 7.51105L16.9035 8.2181C17.0254 8.33968 17.1425 8.46276 17.2549 8.58634C17.2549 8.58634 19 10.5 19 11C19 11.5 17.2549 13.4137 17.2549 13.4137C16.0532 14.7355 14.3022 16 11.9999 16C11.1218 16 10.324 15.8161 9.60627 15.5153L8.8503 16.2712ZM7.09663 13.7823C6.97455 13.6606 6.85728 13.5374 6.74482 13.4137C6.74482 13.4137 5 11.5 5 11C5 10.5 6.74482 8.58634 6.74482 8.58634C7.94648 7.26451 9.69746 6 11.9999 6C12.8781 6 13.6761 6.18398 14.394 6.48495L15.1499 5.729C14.2348 5.28657 13.1847 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C6.12693 14.2206 6.25516 14.3553 6.38959 14.4893L7.09663 13.7823Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.2231 13.8984C11.4709 13.9647 11.7313 14 12 14C13.6569 14 15 12.6569 15 11C15 10.7313 14.9647 10.4709 14.8984 10.2231L13.9961 11.1254C13.934 12.1301 13.1301 12.934 12.1254 12.9961L11.2231 13.8984ZM11.8751 9.00384C10.87 9.06578 10.0658 9.87001 10.0038 10.8751L9.10166 11.7772C9.03535 11.5294 9 11.2688 9 11C9 9.34315 10.3431 8 12 8C12.2688 8 12.5294 8.03535 12.7772 8.10166L11.8751 9.00384Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.64648 16.6465L17.6465 4.64648L18.3536 5.35359L6.35359 17.3536L5.64648 16.6465Z"/></g><g class="loading-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.9948 7.91366C16.6965 6.48549 14.6975 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C7.30322 15.5145 9.30225 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366ZM6.74482 13.4137C7.94648 14.7355 9.69746 16 11.9999 16C14.3022 16 16.0532 14.7355 17.2549 13.4137C17.2549 13.4137 19 11.5 19 11C19 10.5 17.2549 8.58634 17.2549 8.58634C16.0532 7.26451 14.3022 6 11.9999 6C9.69746 6 7.94648 7.26451 6.74482 8.58634C6.74482 8.58634 5 10.5 5 11C5 11.5 6.74482 13.4137 6.74482 13.4137Z"/></g><g class="animated-loading-eye"><path stroke="currentColor" stroke-linecap="round" d="M14.5 11C14.5 9.61929 13.3807 8.5 12 8.5C10.6193 8.5 9.5 9.61929 9.5 11C9.5 12.3807 10.6193 13.5 12 13.5"/></g></svg>';
    },
  },
]);
