(window.webpackJsonp = window.webpackJsonp || []).push([
  ['header-toolbar'],
  {
    '+GaQ': function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return i;
      });
      var n = a('q1tI');
      function i(e) {
        return e.map ? n.Children.toArray(e.children).map(e.map) : e.children;
      }
    },
    '1TxM': function (e, t, a) {
      'use strict';
      a.d(t, 'c', function () {
        return l;
      }),
        a.d(t, 'a', function () {
          return c;
        }),
        a.d(t, 'b', function () {
          return d;
        });
      var n = a('q1tI'),
        i = a.n(n),
        o = a('17x9'),
        r = a.n(o),
        s = i.a.createContext({});
      function l(e, t) {
        r.a.checkPropTypes(t, e, 'context', 'RegistryContext');
      }
      function c(e) {
        var t = e.validation,
          a = e.value;
        return l(a, t), i.a.createElement(s.Provider, { value: a }, e.children);
      }
      function d() {
        return s;
      }
    },
    '6aN0': function (e, t, a) {
      e.exports = {
        'css-value-header-toolbar-height': '38px',
        toolbar: 'toolbar-2n2cwgp5',
        isHidden: 'isHidden-GTob3P_C',
        overflowWrap: 'overflowWrap-PWdgT-U_',
        customButton: 'customButton--jqJTfH5',
        hovered: 'hovered-1mGRUp3y',
      };
    },
    '6oLA': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M4.56 14a10.05 10.05 0 00.52.91c.41.69 1.04 1.6 1.85 2.5C8.58 19.25 10.95 21 14 21c3.05 0 5.42-1.76 7.07-3.58A17.18 17.18 0 0023.44 14a9.47 9.47 0 00-.52-.91c-.41-.69-1.04-1.6-1.85-2.5C19.42 8.75 17.05 7 14 7c-3.05 0-5.42 1.76-7.07 3.58A17.18 17.18 0 004.56 14zM24 14l.45-.21-.01-.03a7.03 7.03 0 00-.16-.32c-.11-.2-.28-.51-.5-.87-.44-.72-1.1-1.69-1.97-2.65C20.08 7.99 17.45 6 14 6c-3.45 0-6.08 2-7.8 3.92a18.18 18.18 0 00-2.64 3.84v.02h-.01L4 14l-.45-.21-.1.21.1.21L4 14l-.45.21.01.03a5.85 5.85 0 00.16.32c.11.2.28.51.5.87.44.72 1.1 1.69 1.97 2.65C7.92 20.01 10.55 22 14 22c3.45 0 6.08-2 7.8-3.92a18.18 18.18 0 002.64-3.84v-.02h.01L24 14zm0 0l.45.21.1-.21-.1-.21L24 14zm-10-3a3 3 0 100 6 3 3 0 000-6zm-4 3a4 4 0 118 0 4 4 0 01-8 0z"/></svg>';
    },
    '8d0Q': function (e, t, a) {
      'use strict';
      a.d(t, 'b', function () {
        return i;
      }),
        a.d(t, 'a', function () {
          return o;
        });
      var n = a('q1tI');
      function i() {
        var e = Object(n.useState)(!1),
          t = e[0],
          a = e[1];
        return [
          t,
          {
            onMouseOver: function (e) {
              o(e) && a(!0);
            },
            onMouseOut: function (e) {
              o(e) && a(!1);
            },
          },
        ];
      }
      function o(e) {
        return !e.currentTarget.contains(e.relatedTarget);
      }
    },
    KMbc: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a('mrSG'),
        i = a('q1tI'),
        o = a('i8i4'),
        r = a('Eyy1'),
        s = (a('P5fv'), a('TSYQ')),
        l = a('4O8T'),
        c = a.n(l),
        d = a('Kxc7'),
        u = a('FQhm'),
        h = a('PoSe'),
        v = a.n(h),
        p = a('17x9'),
        m = a('cvc5'),
        f = (a('EsMY'), a('+GaQ')),
        y = a('+GxX'),
        b = a('KrBX');
      function S(e) {
        var t,
          a = e.children,
          n = e.className,
          o = e.noLeftDecoration,
          r = e.noRightDecoration,
          l = e.noMinimalWidth,
          c = e.onClick;
        return i.createElement(
          'div',
          {
            className: s(
              n,
              b.group,
              ((t = {}),
              (t[b.noMinimalWidth] = l),
              (t[b.noLeftDecoration] = o),
              (t[b.noRightDecoration] = r),
              t),
            ),
            onClick: c,
          },
          a,
        );
      }
      var g = a('tO+E'),
        _ = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._handleMeasure = function (e) {
                var a = e.width;
                t.props.onWidthChange(a);
              }),
              t
            );
          }
          return (
            Object(n.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.children,
                a = e.shouldMeasure;
              return i.createElement(
                m,
                {
                  shouldMeasure: a,
                  onMeasure: this._handleMeasure,
                  whitelist: ['width'],
                },
                i.createElement('div', { className: g.wrap }, t),
              );
            }),
            t
          );
        })(i.PureComponent),
        E = a('tU7i'),
        C = a('Opoj');
      function w(e) {
        return i.createElement(
          E.b,
          Object(n.a)({}, e, { forceInteractive: !0, icon: C }),
        );
      }
      a('YFKU');
      var M = a('Iivm'),
        O = a('a+Yp'),
        I = a('6oLA'),
        k = { text: window.t('View Only Mode') };
      function F(e) {
        return i.createElement(
          'div',
          { className: O.wrap },
          i.createElement(M.a, { className: O.icon, icon: I }),
          k.text,
        );
      }
      var W,
        T = a('4Cm8'),
        R = a('XAms');
      !(function (e) {
        (e.SymbolSearch = 'header-toolbar-symbol-search'),
          (e.Intervals = 'header-toolbar-intervals'),
          (e.ChartStyles = 'header-toolbar-chart-styles'),
          (e.Compare = 'header-toolbar-compare'),
          (e.Indicators = 'header-toolbar-indicators'),
          (e.StudyTemplates = 'header-toolbar-study-templates'),
          (e.Alerts = 'header-toolbar-alerts'),
          (e.Layouts = 'header-toolbar-layouts'),
          (e.SaveLoad = 'header-toolbar-save-load'),
          (e.UndoRedo = 'header-toolbar-undo-redo'),
          (e.Properties = 'header-toolbar-properties'),
          (e.PublishDesktop = 'header-toolbar-publish-desktop'),
          (e.PublishMobile = 'header-toolbar-publish-mobile'),
          (e.Fullscreen = 'header-toolbar-fullscreen'),
          (e.Screenshot = 'header-toolbar-screenshot'),
          (e.Replay = 'header-toolbar-replay'),
          (e.Financials = 'header-toolbar-financials'),
          (e.StartTrial = 'header-toolbar-start-trial');
      })(W || (W = {}));
      var x = a('8d0Q'),
        A = a('1TxM'),
        N = a('a8bL'),
        B = Object(y.isFeatureEnabled)('hide-copy-readonly'),
        V = Object(A.b)(),
        L = (function (e) {
          function t(t, a) {
            var o = e.call(this, t, a) || this;
            return (
              (o._handleMouseOver = function (e) {
                Object(x.a)(e) && o.setState({ isHovered: !0 });
              }),
              (o._handleMouseOut = function (e) {
                Object(x.a)(e) && o.setState({ isHovered: !1 });
              }),
              (o._activateSymbolSearchMode = function () {
                o._setMode(2);
              }),
              (o._activateNormalMode = function () {
                o._setMode(1);
              }),
              (o._handleInnerResize = function (e) {
                var t = o.props.onWidthChange;
                t && t(e);
              }),
              (o._handleMeasureAvailableSpace = function (e) {
                var t = e.width,
                  a = o.props.onAvailableSpaceChange;
                a && a(t);
              }),
              (o._processCustoms = function (e) {
                var t = o.props.isFake,
                  a = o.state.mode,
                  r = o.context.tools;
                return e.map(function (e) {
                  return i.createElement(
                    S,
                    { className: s(1 !== a && N.hidden) },
                    i.createElement(
                      r.Custom,
                      Object(n.a)({}, e, { isFake: t }),
                    ),
                  );
                });
              }),
              (o._fixLastGroup = function (e, t, a) {
                if (t === a.length - 1 && i.isValidElement(e) && e.type === S) {
                  var n =
                    void 0 !== o.context.tools.Publish && !o.props.readOnly;
                  return i.cloneElement(e, { noRightDecoration: n });
                }
                return e;
              }),
              Object(A.c)(a, { tools: p.any.isRequired }),
              (o.state = { isHovered: !1, mode: 1, isAuthenticated: void 0 }),
              o
            );
          }
          return (
            Object(n.c)(t, e),
            (t.prototype.componentDidMount = function () {
              0;
            }),
            (t.prototype.componentWillUnmount = function () {
              0;
            }),
            (t.prototype.render = function () {
              var e,
                t,
                a = this.context.tools,
                o = this.props,
                r = o.features,
                l = o.displayMode,
                c = o.chartSaver,
                d = o.studyMarket,
                u = o.readOnly,
                h = o.saveLoadSyncEmitter,
                v = o.leftCustomButtons,
                p = o.rightCustomButtons,
                y = o.showScrollbarWhen,
                b = o.width,
                g = void 0 === b ? 0 : b,
                E = o.isFake,
                C = void 0 !== E && E,
                M = this.state,
                O = M.isHovered,
                I = M.mode,
                k = (M.isAuthenticated, this._processCustoms(v)),
                x = this._processCustoms(p),
                A = y.includes(l);
              return i.createElement(
                'div',
                {
                  className: s(N.inner, ((e = {}), (e[N.fake] = C), e)),
                  onContextMenu: R.b,
                },
                i.createElement(
                  m,
                  {
                    onMeasure: this._handleMeasureAvailableSpace,
                    whitelist: ['width'],
                    shouldMeasure: !C,
                  },
                  i.createElement(
                    T.a,
                    {
                      isVisibleFade: Modernizr.mobiletouch && A,
                      isVisibleButtons: !Modernizr.mobiletouch && A && O,
                      isVisibleScrollbar: !1,
                      shouldMeasure: A && !C,
                      onMouseOver: this._handleMouseOver,
                      onMouseOut: this._handleMouseOut,
                    },
                    i.createElement(
                      'div',
                      { className: N.content },
                      i.createElement(
                        _,
                        {
                          onWidthChange: this._handleInnerResize,
                          shouldMeasure: C,
                        },
                        i.createElement(
                          f.a,
                          { map: this._fixLastGroup },
                          !u &&
                            i.Children.toArray(
                              Object(n.f)(
                                [
                                  a.SymbolSearch &&
                                    i.createElement(
                                      S,
                                      {
                                        key: 'symbol',
                                        className: 2 === I && N.symbolSearch,
                                      },
                                      i.createElement(a.SymbolSearch, {
                                        id: C ? void 0 : W.SymbolSearch,
                                        isActionsVisible:
                                          r.allowSymbolSearchSpread,
                                        isExpanded: 2 === I,
                                        onFocus: this._activateSymbolSearchMode,
                                        onBlur: this._activateNormalMode,
                                        maxWidth: g,
                                      }),
                                    ),
                                  a.DateRange &&
                                    i.createElement(
                                      S,
                                      { key: 'range' },
                                      i.createElement(a.DateRange, null),
                                    ),
                                  a.Intervals &&
                                    1 === I &&
                                    i.createElement(
                                      S,
                                      { key: 'intervals' },
                                      i.createElement(a.Intervals, {
                                        id: C ? void 0 : W.Intervals,
                                        isShownQuicks: r.allowFavoriting,
                                        isFavoritingAllowed: r.allowFavoriting,
                                        displayMode: l,
                                        isFake: C,
                                      }),
                                    ),
                                  a.Bars &&
                                    1 === I &&
                                    i.createElement(
                                      S,
                                      { key: 'styles' },
                                      i.createElement(a.Bars, {
                                        id: C ? void 0 : W.ChartStyles,
                                        isShownQuicks: r.allowFavoriting,
                                        isFavoritingAllowed: r.allowFavoriting,
                                        displayMode: l,
                                        isFake: C,
                                      }),
                                    ),
                                  a.Compare &&
                                    1 === I &&
                                    i.createElement(
                                      S,
                                      { key: 'compare' },
                                      i.createElement(a.Compare, {
                                        id: C ? void 0 : W.Compare,
                                        className: N.button,
                                        displayMode: l,
                                      }),
                                    ),
                                  a.Indicators &&
                                    1 === I &&
                                    i.createElement(
                                      S,
                                      { key: 'indicators' },
                                      i.createElement(a.Indicators, {
                                        id: C ? void 0 : W.Indicators,
                                        className: N.button,
                                        studyMarket: d,
                                        displayMode: l,
                                      }),
                                    ),
                                  a.Financials &&
                                    1 === I &&
                                    i.createElement(
                                      S,
                                      { key: 'financials' },
                                      i.createElement(a.Financials, {
                                        id: C ? void 0 : W.Financials,
                                        className: N.button,
                                        displayMode: l,
                                      }),
                                    ),
                                  a.Templates &&
                                    1 === I &&
                                    i.createElement(
                                      S,
                                      { key: 'templates' },
                                      i.createElement(a.Templates, {
                                        id: C ? void 0 : W.StudyTemplates,
                                        isShownQuicks: r.allowFavoriting,
                                        isFavoritingAllowed: r.allowFavoriting,
                                        displayMode: l,
                                      }),
                                    ),
                                  1 === I &&
                                    a.Alert &&
                                    i.createElement(
                                      S,
                                      { key: 'alert' },
                                      i.createElement(a.Alert, {
                                        id: C ? void 0 : W.Alerts,
                                        className: N.button,
                                        displayMode: l,
                                      }),
                                    ),
                                  1 === I &&
                                    a.AlertReferral &&
                                    i.createElement(
                                      S,
                                      { key: 'alert-referral' },
                                      i.createElement(a.AlertReferral, {
                                        className: N.button,
                                        displayMode: l,
                                      }),
                                    ),
                                  a.Replay &&
                                    1 === I &&
                                    i.createElement(
                                      S,
                                      { key: 'replay' },
                                      i.createElement(a.Replay, {
                                        id: C ? void 0 : W.Replay,
                                        className: N.button,
                                        displayMode: l,
                                      }),
                                    ),
                                  a.UndoRedo &&
                                    1 === I &&
                                    i.createElement(
                                      S,
                                      { key: 'undo-redo' },
                                      i.createElement(a.UndoRedo, {
                                        id: C ? void 0 : W.UndoRedo,
                                      }),
                                    ),
                                  a.ScalePercentage &&
                                    i.createElement(
                                      S,
                                      { key: 'percentage' },
                                      i.createElement(a.ScalePercentage, null),
                                    ),
                                  a.ScaleLogarithm &&
                                    i.createElement(
                                      S,
                                      { key: 'logarithm' },
                                      i.createElement(a.ScaleLogarithm, null),
                                    ),
                                ],
                                k,
                              ),
                            ),
                          1 === I
                            ? ([
                                (t = i.Children.toArray(
                                  Object(n.f)(
                                    [
                                      u &&
                                        i.createElement(
                                          S,
                                          { key: 'view-only-badge' },
                                          i.createElement(F, null),
                                        ),
                                      i.createElement(S, {
                                        key: 'gap',
                                        className: s(N.fill, C && N.collapse),
                                      }),
                                      !u &&
                                        a.Layout &&
                                        i.createElement(
                                          S,
                                          { key: 'layout' },
                                          i.createElement(a.Layout, {
                                            id: C ? void 0 : W.Layouts,
                                          }),
                                        ),
                                      this._isSaveLoadVisible() &&
                                        a.SaveLoad &&
                                        i.createElement(
                                          S,
                                          { key: 'save-load-right' },
                                          i.createElement(a.SaveLoad, {
                                            id: C ? void 0 : W.SaveLoad,
                                            chartSaver: c,
                                            isReadOnly: u,
                                            displayMode: l,
                                            isFake: C,
                                            stateSyncEmitter: h,
                                          }),
                                        ),
                                      a.SaveLoadReferral &&
                                        i.createElement(
                                          S,
                                          { key: 'save-load-referral' },
                                          i.createElement(a.SaveLoadReferral, {
                                            isReadOnly: u,
                                            displayMode: l,
                                          }),
                                        ),
                                      r.showLaunchInPopupButton &&
                                        a.OpenPopup &&
                                        i.createElement(
                                          S,
                                          { key: 'popup' },
                                          i.createElement(a.OpenPopup, null),
                                        ),
                                      !u &&
                                        a.Properties &&
                                        i.createElement(
                                          S,
                                          { key: 'properties' },
                                          i.createElement(a.Properties, {
                                            id: C ? void 0 : W.Properties,
                                            className: N.iconButton,
                                          }),
                                        ),
                                      !u &&
                                        a.Fullscreen &&
                                        i.createElement(
                                          S,
                                          {
                                            key: 'fullscreen',
                                            onClick: this
                                              ._trackFullscreenButtonClick,
                                          },
                                          i.createElement(a.Fullscreen, {
                                            id: C ? void 0 : W.Fullscreen,
                                          }),
                                        ),
                                      a.Screenshot &&
                                        i.createElement(
                                          S,
                                          { key: 'screenshot' },
                                          i.createElement(a.Screenshot, {
                                            id: C ? void 0 : W.Screenshot,
                                            className: N.iconButton,
                                          }),
                                        ),
                                      !u &&
                                        a.Publish &&
                                        i.createElement(
                                          S,
                                          {
                                            key: 'publish',
                                            className: N.mobilePublish,
                                          },
                                          i.createElement(a.Publish, {
                                            id: C ? void 0 : W.PublishMobile,
                                          }),
                                        ),
                                    ],
                                    x,
                                  ),
                                )).findIndex(function (e) {
                                  return (
                                    i.isValidElement(e) &&
                                    !!e.key &&
                                    -1 !==
                                      e.key
                                        .toString()
                                        .indexOf('view-only-badge')
                                  );
                                }),
                              ]
                                .filter(function (e) {
                                  return e >= 0;
                                })
                                .forEach(function (e) {
                                  t = i.Children.map(t, function (t, a) {
                                    if (i.isValidElement(t))
                                      switch ([e - 1, e, e + 1].indexOf(a)) {
                                        case 0:
                                          t = i.cloneElement(t, {
                                            noRightDecoration: !0,
                                          });
                                          break;
                                        case 1:
                                          t = i.cloneElement(t, {
                                            noLeftDecoration: !0,
                                            noRightDecoration: !0,
                                          });
                                          break;
                                        case 2:
                                          t = i.cloneElement(t, {
                                            noLeftDecoration: !0,
                                          });
                                      }
                                    return t;
                                  });
                                }),
                              t)
                            : [
                                i.createElement(S, {
                                  key: 'gap',
                                  className: s(
                                    N.fill,
                                    2 === I && N.minimalPriority,
                                  ),
                                }),
                                i.createElement(
                                  S,
                                  { key: 'symbol-search-close' },
                                  i.createElement(w, {
                                    className: s(
                                      N.iconButton,
                                      N.symbolSearchClose,
                                    ),
                                  }),
                                ),
                              ],
                        ),
                      ),
                    ),
                  ),
                ),
                a.Publish &&
                  !u &&
                  !C &&
                  i.createElement(a.Publish, {
                    id: W.PublishDesktop,
                    className: N.desktopPublish,
                  }),
              );
            }),
            (t.prototype._onLoginStateChange = function () {
              0;
            }),
            (t.prototype._setMode = function (e) {
              this.setState({ mode: e });
            }),
            (t.prototype._trackFullscreenButtonClick = function () {
              0;
            }),
            (t.prototype._isSaveLoadVisible = function () {
              return !(this.props.readOnly && B);
            }),
            (t.contextType = V),
            t
          );
        })(i.PureComponent);
      var P = a('hY0g'),
        j = a.n(P),
        D = a('ulZB'),
        H = (function (e) {
          function t(t, a, n) {
            return (
              void 0 === n && (n = []),
              e.call(
                this,
                t,
                a,
                'FAVORITE_CHART_STYLES_CHANGED',
                'StyleWidget.quicks',
                n,
              ) || this
            );
          }
          return Object(n.c)(t, e), t;
        })(D.b),
        z = a('pPtI'),
        G = a('IVMC'),
        K = a.n(G),
        Q = (function (e) {
          function t(t, a, n) {
            return (
              e.call(
                this,
                t,
                a,
                'FAVORITE_INTERVALS_CHANGED',
                'IntervalWidget.quicks',
                n,
              ) || this
            );
          }
          return (
            Object(n.c)(t, e),
            (t.prototype._serialize = function (e) {
              return K()(e.map(z.normalizeIntervalString));
            }),
            (t.prototype._deserialize = function (e) {
              return K()(
                Object(z.convertResolutionsFromSettings)(e)
                  .filter(z.isResolutionMultiplierValid)
                  .map(z.normalizeIntervalString),
              );
            }),
            t
          );
        })(D.a),
        U =
          (a('bSeV'),
          (function (e) {
            function t(t, a, n) {
              return (
                void 0 === n && (n = []),
                e.call(
                  this,
                  t,
                  a,
                  'CUSTOM_INTERVALS_CHANGED',
                  'IntervalWidget.intervals',
                  n,
                ) || this
              );
            }
            return (
              Object(n.c)(t, e),
              (t.prototype.set = function (t, a) {
                t.length, this.get().length, e.prototype.set.call(this, t, a);
              }),
              (t.prototype._serialize = function (e) {
                return K()(e.map(z.normalizeIntervalString));
              }),
              (t.prototype._deserialize = function (e) {
                return K()(
                  Object(z.convertResolutionsFromSettings)(e)
                    .filter(z.isResolutionMultiplierValid)
                    .map(z.normalizeIntervalString),
                );
              }),
              t
            );
          })(D.a)),
        X = a('FBuY'),
        Y = a('Vdly'),
        q = a('yMne'),
        J = a('cBZt'),
        Z = a('TcSq'),
        ee = a('aIyQ'),
        te = a.n(ee),
        ae = {},
        ne = null,
        ie = (function () {
          function e(e) {
            var t = this;
            void 0 === e && (e = Y),
              (this._favorites = []),
              (this._favoritesChanged = new te.a()),
              (this._settings = e),
              X.TVXWindowEvents.on('StudyFavoritesChanged', function (e) {
                var a = JSON.parse(e);
                t._loadFromState(a.favorites || []);
              }),
              this._settings.onSync.subscribe(this, this._loadFavs),
              this._loadFavs();
          }
          return (
            (e.prototype.isFav = function (e) {
              var t = this.favId(e);
              return -1 !== this._findFavIndex(t);
            }),
            (e.prototype.toggleFavorite = function (e) {
              this.isFav(e) ? this.removeFavorite(e) : this.addFavorite(e);
            }),
            (e.prototype.addFavorite = function (e) {
              var t = this.favId(e);
              this._favorites.push(re(t)),
                this._favoritesChanged.fire(),
                this._saveFavs();
            }),
            (e.prototype.removeFavorite = function (e) {
              var t = this.favId(e),
                a = this._findFavIndex(t);
              -1 !== a &&
                (this._favorites.splice(a, 1), this._favoritesChanged.fire()),
                this._saveFavs();
            }),
            (e.prototype.favId = function (e) {
              return Object(Z.isPineIdString)(e)
                ? e
                : Object(Z.extractPineId)(e) || Object(J.extractStudyId)(e);
            }),
            (e.prototype.favorites = function () {
              return this._favorites;
            }),
            (e.prototype.favoritePineIds = function () {
              return this._favorites
                .filter(function (e) {
                  return 'pine' === e.type;
                })
                .map(function (e) {
                  return e.pineId;
                });
            }),
            (e.prototype.favoritesChanged = function () {
              return this._favoritesChanged;
            }),
            (e.getInstance = function () {
              return null === ne && (ne = new e()), ne;
            }),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.prototype._loadFavs = function () {
              var e = this._settings.getJSON('studyMarket.favorites', []);
              this._loadFromState(e);
            }),
            (e.prototype._saveFavs = function () {
              var e = this._stateToSave();
              this._settings.setJSON('studyMarket.favorites', e),
                X.TVXWindowEvents.emit(
                  'StudyFavoritesChanged',
                  JSON.stringify({ favorites: e }),
                );
            }),
            (e.prototype._stateToSave = function () {
              return this._favorites.map(oe);
            }),
            (e.prototype._loadFromState = function (e) {
              (this._favorites = e.map(function (e) {
                return re(
                  (function (e) {
                    return e in ae ? ae[e] : e;
                  })(e),
                );
              })),
                this._favoritesChanged.fire();
            }),
            (e.prototype._findFavIndex = function (e) {
              return this._favorites.findIndex(function (t) {
                return e === oe(t);
              });
            }),
            e
          );
        })();
      function oe(e) {
        return 'java' === e.type ? e.studyId : e.pineId;
      }
      function re(e) {
        return Object(Z.isPineIdString)(e)
          ? { type: 'pine', pineId: e }
          : { type: 'java', studyId: e };
      }
      var se,
        le = a('LxhU'),
        ce =
          (((se = {})[le.ResolutionKind.Ticks] = !1),
          (se[le.ResolutionKind.Seconds] = !1),
          (se[le.ResolutionKind.Minutes] = !1),
          (se[le.SpecialResolutionKind.Hours] = !1),
          (se[le.ResolutionKind.Days] = !1),
          (se[le.ResolutionKind.Range] = !1),
          se),
        de = (function (e) {
          function t(t, a, n) {
            return (
              void 0 === n && (n = ce),
              e.call(
                this,
                t,
                a,
                'INTERVALS_MENU_VIEW_STATE_CHANGED',
                'IntervalWidget.menu.viewState',
                n,
              ) || this
            );
          }
          return (
            Object(n.c)(t, e),
            (t.prototype.isAllowed = function (e) {
              return Object.keys(ce).includes(e);
            }),
            t
          );
        })(D.b),
        ue = { defaultsCollapsed: !1 },
        he = (D.b, a('54XG')),
        ve = {
          Area: 3,
          Bars: 0,
          Candles: 1,
          'Heiken Ashi': 8,
          'Hollow Candles': 9,
          Line: 2,
        },
        pe = ['1', '30', '60'];
      function me(e) {
        void 0 === e && (e = []);
        var t = e.map(function (e) {
          return ve[e];
        }) || [1, 4, 5, 6];
        return d.enabled('widget') && (t = [0, 1, 3]), t;
      }
      function fe(e) {
        return (
          void 0 === e && (e = []),
          Object(z.mergeResolutions)(
            e,
            d.enabled('star_some_intervals_by_default') ? pe : [],
          )
        );
      }
      new Q(X.TVXWindowEvents, Y, fe()),
        new H(X.TVXWindowEvents, Y, me()),
        new he.FavoriteStudyTemplateService(X.TVXWindowEvents, Y);
      var ye = {
          tools: p.any.isRequired,
          isFundamental: p.any,
          chartApiInstance: p.any,
          availableTimeFrames: p.any,
          chartWidgetCollection: p.any,
          windowMessageService: p.any,
          favoriteChartStylesService: p.any,
          favoriteIntervalsService: p.any,
          customIntervalsService: p.any,
          favoriteStudyTemplatesService: p.any,
          studyTemplates: p.any,
          chartChangesWatcher: p.any,
          saveChartService: p.any,
          sharingChartService: p.any,
          loadChartService: p.any,
          chartWidget: p.any,
          favoriteScriptsModel: p.any,
          intervalsMenuViewStateService: p.any,
          templatesMenuViewStateService: p.any,
          financialsDialogController: p.any,
        },
        be = a('6aN0'),
        Se = [],
        ge = ['full', 'medium'],
        _e = (function (e) {
          function t(t) {
            var a,
              n = e.call(this, t) || this;
            (n._saveLoadSyncEmitter = new c.a()),
              (n._handleFullWidthChange = function (e) {
                (n._fullWidth = e), n.setState({ measureValid: !1 });
              }),
              (n._handleFavoritesWidthChange = function (e) {
                (n._favoritesWidth = e), n.setState({ measureValid: !1 });
              }),
              (n._handleCollapseWidthChange = function (e) {
                (n._collapseWidth = e), n.setState({ measureValid: !1 });
              }),
              (n._handleMeasure = function (e) {
                n.setState({ availableWidth: e, measureValid: !1 });
              });
            var i = t.tools,
              o = t.windowMessageService,
              s = t.chartWidgetCollection,
              l = t.chartApiInstance,
              u = t.availableTimeFrames,
              h = t.isFundamental,
              p = t.favoriteIntervalsService,
              m = t.favoriteChartStylesService,
              f = t.favoriteStudyTemplatesService,
              y = t.studyTemplates,
              b = t.saveChartService,
              S = t.sharingChartService,
              g = t.loadChartService,
              _ = t.financialsDialogController;
            (n._showScrollbarWhen = Object(r.ensureDefined)(
              t.allowedModes,
            ).slice(-1)),
              (n._panelWidthChangeHandlers =
                (((a = {}).full = n._handleFullWidthChange),
                (a.medium = n._handleFavoritesWidthChange),
                (a.small = n._handleCollapseWidthChange),
                a));
            var E = t.chartChangesWatcher;
            n._chartChangesWatcher = E;
            var C = me(n.props.defaultFavoriteStyles);
            n._favoriteChartStylesService = m || new H(X.TVXWindowEvents, Y, C);
            var w = fe(n.props.defaultFavoriteIntervals);
            return (
              (n._favoriteIntervalsService =
                p || new Q(X.TVXWindowEvents, Y, w)),
              (n._intervalsMenuViewStateService = new de(X.TVXWindowEvents, Y)),
              (n._customIntervalsService = new U(X.TVXWindowEvents, Y)),
              (n._registry = {
                tools: i,
                isFundamental: h,
                chartWidgetCollection: s,
                windowMessageService: o,
                chartApiInstance: l,
                availableTimeFrames: u,
                favoriteStudyTemplatesService: f,
                studyTemplates: y,
                saveChartService: b,
                sharingChartService: S,
                loadChartService: g,
                intervalsMenuViewStateService: n._intervalsMenuViewStateService,
                favoriteChartStylesService: n._favoriteChartStylesService,
                favoriteIntervalsService: n._favoriteIntervalsService,
                customIntervalsService: n._customIntervalsService,
                chartChangesWatcher: n._chartChangesWatcher,
                chartWidget: s.activeChartWidget.value(),
                favoriteScriptsModel: ie.getInstance(),
                templatesMenuViewStateService: n._templatesMenuVuewStateService,
                financialsDialogController: _,
              }),
              (n.state = {
                isVisible: !0,
                availableWidth: 0,
                displayMode: 'full',
                measureValid: !1,
                leftCustomButtons: [],
                rightCustomButtons: [],
              }),
              (n._readOnly = s.readOnly()),
              (n._features = {
                allowFavoriting: d.enabled('items_favoriting'),
                showIdeasButton: Boolean(n.props.ideas),
                showLaunchInPopupButton: Boolean(n.props.popupButton),
                allowSymbolSearchSpread:
                  d.enabled('header_symbol_search') &&
                  !d.enabled('charting_library_base'),
                allowToolbarHiding: d.enabled('collapsible_header'),
              }),
              (n._setDisplayMode = v()(n._setDisplayMode, 100)),
              n._negotiateResizer(),
              n
            );
          }
          return (
            Object(n.c)(t, e),
            (t.prototype.componentDidUpdate = function (e, t) {
              var a = this.state,
                n = a.isVisible,
                i = a.measureValid;
              n !== t.isVisible &&
                (u.emit('toggle_header', n), this._negotiateResizer()),
                i || this._setDisplayMode();
            }),
            (t.prototype.render = function () {
              var e,
                t = this,
                a = this.props,
                o = (a.resizerBridge, a.allowedModes),
                l = Object(n.e)(a, ['resizerBridge', 'allowedModes']),
                c = this.state,
                d = c.displayMode,
                u = c.availableWidth,
                h = c.isVisible,
                v = c.leftCustomButtons,
                p = c.rightCustomButtons,
                m = Object(n.a)(
                  {
                    features: this._features,
                    readOnly: this._readOnly,
                    isFake: !1,
                    saveLoadSyncEmitter: this._saveLoadSyncEmitter,
                    width: u,
                    leftCustomButtons: v,
                    rightCustomButtons: p,
                  },
                  l,
                ),
                f = Object(n.a)(Object(n.a)({}, m), {
                  isFake: !0,
                  showScrollbarWhen: Se,
                }),
                y = Object(r.ensureDefined)(o),
                b = this.props.tools.PublishButtonManager || i.Fragment;
              return i.createElement(
                A.a,
                { value: this._registry, validation: ye },
                i.createElement(
                  b,
                  null,
                  i.createElement(
                    'div',
                    {
                      className: s(
                        be.toolbar,
                        ((e = {}), (e[be.isHidden] = !h), e),
                      ),
                      onClick: this.props.onClick,
                    },
                    i.createElement(
                      'div',
                      { className: be.overflowWrap },
                      i.createElement(
                        L,
                        Object(n.a)(
                          {
                            key: 'live',
                            showScrollbarWhen: this._showScrollbarWhen,
                            displayMode: d,
                            onAvailableSpaceChange: this._handleMeasure,
                          },
                          m,
                        ),
                      ),
                      y.map(function (e) {
                        return i.createElement(
                          L,
                          Object(n.a)(
                            {
                              key: e,
                              displayMode: e,
                              onWidthChange: t._panelWidthChangeHandlers[e],
                            },
                            f,
                          ),
                        );
                      }),
                    ),
                  ),
                ),
              );
            }),
            (t.prototype.addButton = function (e) {
              void 0 === e && (e = 'left');
              var t = new j.a(0),
                a = $(
                  '<div class="apply-common-tooltip ' + be.customButton + '">',
                )[0],
                i = { key: Number(new Date()), element: a, width: t },
                o = this.state,
                r = o.leftCustomButtons,
                s = o.rightCustomButtons;
              return (
                'left' === e
                  ? this.setState({ leftCustomButtons: Object(n.f)(r, [i]) })
                  : this.setState({ rightCustomButtons: Object(n.f)(s, [i]) }),
                a
              );
            }),
            (t.prototype._negotiateResizer = function () {
              this.props.resizerBridge.negotiateHeight(
                this.state.isVisible
                  ? q.HEADER_TOOLBAR_HEIGHT_EXPANDED
                  : q.HEADER_TOOLBAR_HEIGHT_COLLAPSED,
              );
            }),
            (t.prototype._setDisplayMode = function () {
              var e,
                t = this.state.availableWidth,
                a = this.props.allowedModes,
                n =
                  (((e = {}).full = this._fullWidth),
                  (e.medium = this._favoritesWidth),
                  (e.small = this._collapseWidth),
                  e),
                i = Object(r.ensureDefined)(a),
                o = i
                  .map(function (e) {
                    return n[e];
                  })
                  .findIndex(function (e) {
                    return t >= e;
                  });
              -1 === o && (o = i.length - 1);
              var s = i[o];
              this.setState({ measureValid: !0, displayMode: s });
            }),
            (t.defaultProps = { allowedModes: ge }),
            t
          );
        })(i.PureComponent);
      a.d(t, 'HeaderToolbarRenderer', function () {
        return Ee;
      });
      var Ee = (function () {
        function e(e, t) {
          var a = this;
          (this._component = null),
            (this._handleRef = function (e) {
              a._component = e;
            }),
            (this._container = e),
            o.render(
              i.createElement(_e, Object(n.a)({}, t, { ref: this._handleRef })),
              this._container,
            );
        }
        return (
          (e.prototype.destroy = function () {
            o.unmountComponentAtNode(this._container);
          }),
          (e.prototype.getComponent = function () {
            return Object(r.ensureNotNull)(this._component);
          }),
          e
        );
      })();
    },
    KrBX: function (e, t, a) {
      e.exports = {
        group: 'group-wWM3zP_M',
        noLeftDecoration: 'noLeftDecoration-15F5a1TB',
        noRightDecoration: 'noRightDecoration-2GcAAgVb',
        noMinimalWidth: 'noMinimalWidth-1sbl_ff5',
      };
    },
    Opoj: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17"><path fill="none" stroke="currentColor" d="M1 1l15 15M1 16L16 1"/></svg>';
    },
    'a+Yp': function (e, t, a) {
      e.exports = { wrap: 'wrap-3K4w_7te', icon: 'icon-1dNdRXKB' };
    },
    a8bL: function (e, t, a) {
      e.exports = {
        'css-value-header-toolbar-height': '38px',
        inner: 'inner-v8eiKwdM',
        fake: 'fake-37paHC6T',
        fill: 'fill-2axUON87',
        minimalPriority: 'minimalPriority-1MGEuVHu',
        collapse: 'collapse-17ig2Mxu',
        button: 'button-3xrjDzA4',
        iconButton: 'iconButton-3vyD3BPg',
        hidden: 'hidden-2kSvETGo',
        symbolSearch: 'symbolSearch-3I4QF1U_',
        symbolSearchClose: 'symbolSearchClose-3QSRPDvy',
        content: 'content-3mgFz85m',
        desktopPublish: 'desktopPublish-3xVralL7',
        mobilePublish: 'mobilePublish-v3HVdbH2',
      };
    },
    bQ7Y: function (e, t, a) {
      e.exports = {
        button: 'button-2ioYhFEY',
        hover: 'hover-yHQNmTbI',
        isInteractive: 'isInteractive-20uLObIc',
        isGrouped: 'isGrouped-2BBXQnbO',
        isActive: 'isActive-22S-lGpa',
        isOpened: 'isOpened-p-Ume5l9',
        isDisabled: 'isDisabled-1_tmrLfP',
        text: 'text-1sK7vbvh',
        icon: 'icon-beK_KS0k',
      };
    },
    'tO+E': function (e, t, a) {
      e.exports = {
        'css-value-header-toolbar-height': '38px',
        wrap: 'wrap-3tiHesTk',
      };
    },
    tU7i: function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return l;
      }),
        a.d(t, 'b', function () {
          return c;
        });
      var n = a('mrSG'),
        i = a('q1tI'),
        o = a('TSYQ'),
        r = a('Iivm'),
        s = a('bQ7Y'),
        l = s,
        c = i.forwardRef(function (e, t) {
          var a,
            l = e.icon,
            c = e.isActive,
            d = e.isOpened,
            u = e.isDisabled,
            h = e.isGrouped,
            v = e.isHovered,
            p = e.onClick,
            m = e.text,
            f = e.textBeforeIcon,
            y = e.title,
            b = e.theme,
            S = void 0 === b ? s : b,
            g = e.className,
            _ = e.forceInteractive,
            E = Object(n.e)(e, [
              'icon',
              'isActive',
              'isOpened',
              'isDisabled',
              'isGrouped',
              'isHovered',
              'onClick',
              'text',
              'textBeforeIcon',
              'title',
              'theme',
              'className',
              'forceInteractive',
            ]),
            C = o(
              g,
              S.button,
              y && 'apply-common-tooltip',
              (((a = {})[S.isActive] = c),
              (a[S.isOpened] = d),
              (a[S.isInteractive] = (_ || Boolean(p)) && !u),
              (a[S.isDisabled] = u),
              (a[S.isGrouped] = h),
              (a[S.hover] = v),
              a),
            ),
            w =
              l &&
              ('string' == typeof l
                ? i.createElement(r.a, { className: S.icon, icon: l })
                : i.cloneElement(l, {
                    className: o(S.icon, l.props.className),
                  }));
          return i.createElement(
            'div',
            Object(n.a)({}, E, {
              ref: t,
              'data-role': 'button',
              className: C,
              onClick: u ? void 0 : p,
              title: y,
            }),
            f &&
              m &&
              i.createElement(
                'div',
                { className: o('js-button-text', S.text) },
                m,
              ),
            w,
            !f &&
              m &&
              i.createElement(
                'div',
                { className: o('js-button-text', S.text) },
                m,
              ),
          );
        });
    },
  },
]);
