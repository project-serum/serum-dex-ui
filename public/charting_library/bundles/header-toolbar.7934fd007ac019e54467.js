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
        r = a('17x9'),
        o = a.n(r),
        s = i.a.createContext({});
      function l(e, t) {
        o.a.checkPropTypes(t, e, 'context', 'RegistryContext');
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
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor"><path fill-rule="nonzero" d="M4.034 14.18l-.07-.18.07-.18c1.535-3.975 5.645-6.82 9.966-6.82 4.32 0 8.431 2.845 9.966 6.82l.07.18-.07.18c-1.535 3.975-5.646 6.82-9.966 6.82-4.321 0-8.431-2.845-9.966-6.82zm9.966 5.82c3.84 0 7.521-2.503 8.962-6-1.441-3.497-5.122-6-8.962-6-3.841 0-7.521 2.503-8.962 6 1.441 3.497 5.121 6 8.962 6z"/><path d="M11 14.001c0 1.66 1.341 2.999 3.001 2.999s2.999-1.339 2.999-2.999c0-1.66-1.339-3.001-2.999-3.001-1.66 0-3.001 1.341-3.001 3.001z"/></g></svg>';
    },
    '8d0Q': function (e, t, a) {
      'use strict';
      a.d(t, 'b', function () {
        return i;
      }),
        a.d(t, 'a', function () {
          return r;
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
              r(e) && a(!0);
            },
            onMouseOut: function (e) {
              r(e) && a(!1);
            },
          },
        ];
      }
      function r(e) {
        return !e.currentTarget.contains(e.relatedTarget);
      }
    },
    KMbc: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a('mrSG'),
        i = a('q1tI'),
        r = a('i8i4'),
        o = a('Eyy1'),
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
      function _(e) {
        var t,
          a = e.children,
          n = e.className,
          r = e.noLeftDecoration,
          o = e.noRightDecoration,
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
              (t[b.noLeftDecoration] = r),
              (t[b.noRightDecoration] = o),
              t),
            ),
            onClick: c,
          },
          a,
        );
      }
      var S = a('tO+E'),
        g = (function (e) {
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
            Object(n.__extends)(t, e),
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
                i.createElement('div', { className: S.wrap }, t),
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
          Object(n.__assign)({}, e, { forceInteractive: !0, icon: C }),
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
          i.createElement(M.Icon, { className: O.icon, icon: I }),
          k.text,
        );
      }
      var x,
        W = a('4Cm8'),
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
      })(x || (x = {}));
      var A = a('8d0Q'),
        N = a('1TxM'),
        T = a('a8bL'),
        B = Object(y.isFeatureEnabled)('hide-copy-readonly'),
        P = Object(N.b)(),
        V = (function (e) {
          function t(t, a) {
            var r = e.call(this, t, a) || this;
            return (
              (r._handleMouseOver = function (e) {
                Object(A.a)(e) && r.setState({ isHovered: !0 });
              }),
              (r._handleMouseOut = function (e) {
                Object(A.a)(e) && r.setState({ isHovered: !1 });
              }),
              (r._activateSymbolSearchMode = function () {
                r._setMode(2);
              }),
              (r._activateNormalMode = function () {
                r._setMode(1);
              }),
              (r._handleInnerResize = function (e) {
                var t = r.props.onWidthChange;
                t && t(e);
              }),
              (r._handleMeasureAvailableSpace = function (e) {
                var t = e.width,
                  a = r.props.onAvailableSpaceChange;
                a && a(t);
              }),
              (r._processCustoms = function (e) {
                var t = r.props.isFake,
                  a = r.state.mode,
                  o = r.context.tools;
                return e.map(function (e) {
                  return i.createElement(
                    _,
                    { className: s(1 !== a && T.hidden) },
                    i.createElement(
                      o.Custom,
                      Object(n.__assign)({}, e, { isFake: t }),
                    ),
                  );
                });
              }),
              (r._fixLastGroup = function (e, t, a) {
                if (t === a.length - 1 && i.isValidElement(e) && e.type === _) {
                  var n =
                    void 0 !== r.context.tools.Publish && !r.props.readOnly;
                  return i.cloneElement(e, { noRightDecoration: n });
                }
                return e;
              }),
              Object(N.c)(a, { tools: p.any.isRequired }),
              (r.state = { isHovered: !1, mode: 1, isAuthenticated: void 0 }),
              r
            );
          }
          return (
            Object(n.__extends)(t, e),
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
                r = this.props,
                o = r.features,
                l = r.displayMode,
                c = r.chartSaver,
                d = r.studyMarket,
                u = r.readOnly,
                h = r.saveLoadSyncEmitter,
                v = r.leftCustomButtons,
                p = r.rightCustomButtons,
                y = r.showScrollbarWhen,
                b = r.width,
                S = void 0 === b ? 0 : b,
                E = r.isFake,
                C = void 0 !== E && E,
                M = this.state,
                O = M.isHovered,
                I = M.mode,
                k = (M.isAuthenticated, this._processCustoms(v)),
                A = this._processCustoms(p),
                N = y.includes(l);
              return i.createElement(
                'div',
                {
                  className: s(T.inner, ((e = {}), (e[T.fake] = C), e)),
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
                    W.a,
                    {
                      isVisibleFade: Modernizr.mobiletouch && N,
                      isVisibleButtons: !Modernizr.mobiletouch && N && O,
                      isVisibleScrollbar: !1,
                      shouldMeasure: N && !C,
                      onMouseOver: this._handleMouseOver,
                      onMouseOut: this._handleMouseOut,
                    },
                    i.createElement(
                      'div',
                      { className: T.content },
                      i.createElement(
                        g,
                        {
                          onWidthChange: this._handleInnerResize,
                          shouldMeasure: C,
                        },
                        i.createElement(
                          f.a,
                          {
                            map: this._fixLastGroup,
                          },
                          !u &&
                            i.Children.toArray(
                              Object(n.__spreadArrays)(
                                [
                                  a.SymbolSearch &&
                                    i.createElement(
                                      _,
                                      {
                                        key: 'symbol',
                                        className: 2 === I && T.symbolSearch,
                                      },
                                      i.createElement(a.SymbolSearch, {
                                        id: C ? void 0 : x.SymbolSearch,
                                        isActionsVisible:
                                          o.allowSymbolSearchSpread,
                                        isExpanded: 2 === I,
                                        onFocus: this._activateSymbolSearchMode,
                                        onBlur: this._activateNormalMode,
                                        maxWidth: S,
                                      }),
                                    ),
                                  a.DateRange &&
                                    i.createElement(
                                      _,
                                      { key: 'range' },
                                      i.createElement(a.DateRange, null),
                                    ),
                                  a.Intervals &&
                                    1 === I &&
                                    i.createElement(
                                      _,
                                      { key: 'intervals' },
                                      i.createElement(a.Intervals, {
                                        id: C ? void 0 : x.Intervals,
                                        isShownQuicks: o.allowFavoriting,
                                        isFavoritingAllowed: o.allowFavoriting,
                                        displayMode: l,
                                        isFake: C,
                                      }),
                                    ),
                                  a.Bars &&
                                    1 === I &&
                                    i.createElement(
                                      _,
                                      { key: 'styles' },
                                      i.createElement(a.Bars, {
                                        id: C ? void 0 : x.ChartStyles,
                                        isShownQuicks: o.allowFavoriting,
                                        isFavoritingAllowed: o.allowFavoriting,
                                        displayMode: l,
                                        isFake: C,
                                      }),
                                    ),
                                  a.Compare &&
                                    1 === I &&
                                    i.createElement(
                                      _,
                                      { key: 'compare' },
                                      i.createElement(a.Compare, {
                                        id: C ? void 0 : x.Compare,
                                        className: T.button,
                                        displayMode: l,
                                      }),
                                    ),
                                  a.Indicators &&
                                    1 === I &&
                                    i.createElement(
                                      _,
                                      { key: 'indicators' },
                                      i.createElement(a.Indicators, {
                                        id: C ? void 0 : x.Indicators,
                                        className: T.button,
                                        studyMarket: d,
                                        displayMode: l,
                                      }),
                                    ),
                                  a.Financials &&
                                    1 === I &&
                                    i.createElement(
                                      _,
                                      { key: 'financials' },
                                      i.createElement(a.Financials, {
                                        id: C ? void 0 : x.Financials,
                                        className: T.button,
                                        displayMode: l,
                                      }),
                                    ),
                                  a.Templates &&
                                    1 === I &&
                                    i.createElement(
                                      _,
                                      { key: 'templates' },
                                      i.createElement(a.Templates, {
                                        id: C ? void 0 : x.StudyTemplates,
                                        isShownQuicks: o.allowFavoriting,
                                        isFavoritingAllowed: o.allowFavoriting,
                                        displayMode: l,
                                      }),
                                    ),
                                  1 === I &&
                                    a.Alert &&
                                    i.createElement(
                                      _,
                                      { key: 'alert' },
                                      i.createElement(a.Alert, {
                                        id: C ? void 0 : x.Alerts,
                                        className: T.button,
                                        displayMode: l,
                                      }),
                                    ),
                                  1 === I &&
                                    a.AlertReferral &&
                                    i.createElement(
                                      _,
                                      { key: 'alert-referral' },
                                      i.createElement(a.AlertReferral, {
                                        className: T.button,
                                        displayMode: l,
                                      }),
                                    ),
                                  a.Replay &&
                                    1 === I &&
                                    i.createElement(
                                      _,
                                      { key: 'replay' },
                                      i.createElement(a.Replay, {
                                        id: C ? void 0 : x.Replay,
                                        className: T.button,
                                        displayMode: l,
                                      }),
                                    ),
                                  a.UndoRedo &&
                                    1 === I &&
                                    i.createElement(
                                      _,
                                      { key: 'undo-redo' },
                                      i.createElement(a.UndoRedo, {
                                        id: C ? void 0 : x.UndoRedo,
                                      }),
                                    ),
                                  a.ScalePercentage &&
                                    i.createElement(
                                      _,
                                      { key: 'percentage' },
                                      i.createElement(a.ScalePercentage, null),
                                    ),
                                  a.ScaleLogarithm &&
                                    i.createElement(
                                      _,
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
                                  Object(n.__spreadArrays)(
                                    [
                                      u &&
                                        i.createElement(
                                          _,
                                          { key: 'view-only-badge' },
                                          i.createElement(F, null),
                                        ),
                                      i.createElement(_, {
                                        key: 'gap',
                                        className: s(T.fill, C && T.collapse),
                                      }),
                                      !u &&
                                        a.Layout &&
                                        i.createElement(
                                          _,
                                          { key: 'layout' },
                                          i.createElement(a.Layout, {
                                            id: C ? void 0 : x.Layouts,
                                          }),
                                        ),
                                      this._isSaveLoadVisible() &&
                                        a.SaveLoad &&
                                        i.createElement(
                                          _,
                                          { key: 'save-load-right' },
                                          i.createElement(a.SaveLoad, {
                                            id: C ? void 0 : x.SaveLoad,
                                            chartSaver: c,
                                            isReadOnly: u,
                                            displayMode: l,
                                            isFake: C,
                                            stateSyncEmitter: h,
                                          }),
                                        ),
                                      a.SaveLoadReferral &&
                                        i.createElement(
                                          _,
                                          { key: 'save-load-referral' },
                                          i.createElement(a.SaveLoadReferral, {
                                            isReadOnly: u,
                                            displayMode: l,
                                          }),
                                        ),
                                      o.showLaunchInPopupButton &&
                                        a.OpenPopup &&
                                        i.createElement(
                                          _,
                                          { key: 'popup' },
                                          i.createElement(a.OpenPopup, null),
                                        ),
                                      !u &&
                                        a.Properties &&
                                        i.createElement(
                                          _,
                                          { key: 'properties' },
                                          i.createElement(a.Properties, {
                                            id: C ? void 0 : x.Properties,
                                            className: T.iconButton,
                                          }),
                                        ),
                                      !u &&
                                        a.Fullscreen &&
                                        i.createElement(
                                          _,
                                          {
                                            key: 'fullscreen',
                                            onClick: this
                                              ._trackFullscreenButtonClick,
                                          },
                                          i.createElement(a.Fullscreen, {
                                            id: C ? void 0 : x.Fullscreen,
                                          }),
                                        ),
                                      a.Screenshot &&
                                        i.createElement(
                                          _,
                                          { key: 'screenshot' },
                                          i.createElement(a.Screenshot, {
                                            id: C ? void 0 : x.Screenshot,
                                            className: T.iconButton,
                                          }),
                                        ),
                                      !u &&
                                        a.Publish &&
                                        i.createElement(
                                          _,
                                          {
                                            key: 'publish',
                                            className: T.mobilePublish,
                                          },
                                          i.createElement(a.Publish, {
                                            id: C ? void 0 : x.PublishMobile,
                                          }),
                                        ),
                                    ],
                                    A,
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
                                i.createElement(_, {
                                  key: 'gap',
                                  className: s(
                                    T.fill,
                                    2 === I && T.minimalPriority,
                                  ),
                                }),
                                i.createElement(
                                  _,
                                  { key: 'symbol-search-close' },
                                  i.createElement(w, {
                                    className: s(
                                      T.iconButton,
                                      T.symbolSearchClose,
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
                    id: x.PublishDesktop,
                    className: T.desktopPublish,
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
            (t.contextType = P),
            t
          );
        })(i.PureComponent);
      var j = a('hY0g'),
        D = a.n(j),
        L = a('ulZB'),
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
          return Object(n.__extends)(t, e), t;
        })(L.b),
        z = a('pPtI'),
        G = a('IVMC'),
        Q = a.n(G),
        U = (function (e) {
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
            Object(n.__extends)(t, e),
            (t.prototype._serialize = function (e) {
              return Q()(e.map(z.normalizeIntervalString));
            }),
            (t.prototype._deserialize = function (e) {
              return Q()(
                Object(z.convertResolutionsFromSettings)(e)
                  .filter(z.isResolutionMultiplierValid)
                  .map(z.normalizeIntervalString),
              );
            }),
            t
          );
        })(L.a),
        K =
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
              Object(n.__extends)(t, e),
              (t.prototype.set = function (t, a) {
                t.length, this.get().length, e.prototype.set.call(this, t, a);
              }),
              (t.prototype._serialize = function (e) {
                return Q()(e.map(z.normalizeIntervalString));
              }),
              (t.prototype._deserialize = function (e) {
                return Q()(
                  Object(z.convertResolutionsFromSettings)(e)
                    .filter(z.isResolutionMultiplierValid)
                    .map(z.normalizeIntervalString),
                );
              }),
              t
            );
          })(L.a)),
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
              this._favorites.push(oe(t)),
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
              return this._favorites.map(re);
            }),
            (e.prototype._loadFromState = function (e) {
              (this._favorites = e.map(function (e) {
                return oe(
                  (function (e) {
                    return e in ae ? ae[e] : e;
                  })(e),
                );
              })),
                this._favoritesChanged.fire();
            }),
            (e.prototype._findFavIndex = function (e) {
              return this._favorites.findIndex(function (t) {
                return e === re(t);
              });
            }),
            e
          );
        })();
      function re(e) {
        return 'java' === e.type ? e.studyId : e.pineId;
      }
      function oe(e) {
        return Object(Z.isPineIdString)(e)
          ? { type: 'pine', pineId: e }
          : { type: 'java', studyId: e };
      }
      var se,
        le = a('LxhU'),
        ce =
          (((se = {})[le.ResolutionKind.Seconds] = !1),
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
            Object(n.__extends)(t, e),
            (t.prototype.isAllowed = function (e) {
              return Object.keys(ce).includes(e);
            }),
            t
          );
        })(L.b),
        ue = { defaultsCollapsed: !1 },
        he =
          (L.b,
          {
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
          }),
        ve = a('6aN0'),
        pe = {
          Area: 3,
          Bars: 0,
          Candles: 1,
          'Heiken Ashi': 8,
          'Hollow Candles': 9,
          Line: 2,
        },
        me = ['1', '30', '60'];
      var fe = [],
        ye = ['full', 'medium'],
        be = (function (e) {
          function t(t) {
            var a,
              n = e.call(this, t) || this;
            (n._saveLoadSyncEmitter = new c.a()),
              (n._handleFullWidthChange = function (e) {
                (n._fullWidth = e),
                  n.setState({
                    measureValid: !1,
                  });
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
              r = t.windowMessageService,
              s = t.chartWidgetCollection,
              l = t.chartApiInstance,
              u = t.availableTimeFrames,
              h = t.isFundamental,
              p = t.favoriteStudyTemplatesService,
              m = t.studyTemplates,
              f = t.saveChartService,
              y = t.sharingChartService,
              b = t.loadChartService,
              _ = t.financialsDialogController;
            (n._showScrollbarWhen = Object(o.ensureDefined)(
              t.allowedModes,
            ).slice(-1)),
              (n._panelWidthChangeHandlers =
                (((a = {}).full = n._handleFullWidthChange),
                (a.medium = n._handleFavoritesWidthChange),
                (a.small = n._handleCollapseWidthChange),
                a));
            var S = t.chartChangesWatcher;
            n._chartChangesWatcher = S;
            var g = (function (e) {
              void 0 === e && (e = []);
              var t = e.map(function (e) {
                return pe[e];
              }) || [1, 4, 5, 6];
              return d.enabled('widget') && (t = [0, 1, 3]), t;
            })(n.props.defaultFavoriteStyles);
            n._favoriteChartStylesService = new H(X.TVXWindowEvents, Y, g);
            var E,
              C =
                (void 0 === (E = n.props.defaultFavoriteIntervals) && (E = []),
                Object(z.mergeResolutions)(
                  E,
                  d.enabled('star_some_intervals_by_default') ? me : [],
                ));
            return (
              (n._favoriteIntervalsService = new U(X.TVXWindowEvents, Y, C)),
              (n._intervalsMenuViewStateService = new de(X.TVXWindowEvents, Y)),
              (n._customIntervalsService = new K(X.TVXWindowEvents, Y)),
              (n._registry = {
                tools: i,
                isFundamental: h,
                chartWidgetCollection: s,
                windowMessageService: r,
                chartApiInstance: l,
                availableTimeFrames: u,
                favoriteStudyTemplatesService: p,
                studyTemplates: m,
                saveChartService: f,
                sharingChartService: y,
                loadChartService: b,
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
            Object(n.__extends)(t, e),
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
                r = (a.resizerBridge, a.allowedModes),
                l = Object(n.__rest)(a, ['resizerBridge', 'allowedModes']),
                c = this.state,
                d = c.displayMode,
                u = c.availableWidth,
                h = c.isVisible,
                v = c.leftCustomButtons,
                p = c.rightCustomButtons,
                m = Object(n.__assign)(
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
                f = Object(n.__assign)(Object(n.__assign)({}, m), {
                  isFake: !0,
                  showScrollbarWhen: fe,
                }),
                y = Object(o.ensureDefined)(r),
                b = this.props.tools.PublishButtonManager || i.Fragment;
              return i.createElement(
                N.a,
                { value: this._registry, validation: he },
                i.createElement(
                  b,
                  null,
                  i.createElement(
                    'div',
                    {
                      className: s(
                        ve.toolbar,
                        ((e = {}), (e[ve.isHidden] = !h), e),
                      ),
                      onClick: this.props.onClick,
                    },
                    i.createElement(
                      'div',
                      { className: ve.overflowWrap },
                      i.createElement(
                        V,
                        Object(n.__assign)(
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
                          V,
                          Object(n.__assign)(
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
              var t = new D.a(0),
                a = $(
                  '<div class="apply-common-tooltip ' + ve.customButton + '">',
                )[0],
                i = { key: Number(new Date()), element: a, width: t },
                r = this.state,
                o = r.leftCustomButtons,
                s = r.rightCustomButtons;
              return (
                'left' === e
                  ? this.setState({
                      leftCustomButtons: Object(n.__spreadArrays)(o, [i]),
                    })
                  : this.setState({
                      rightCustomButtons: Object(n.__spreadArrays)(s, [i]),
                    }),
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
                i = Object(o.ensureDefined)(a),
                r = i
                  .map(function (e) {
                    return n[e];
                  })
                  .findIndex(function (e) {
                    return t >= e;
                  });
              -1 === r && (r = i.length - 1);
              var s = i[r];
              this.setState({ measureValid: !0, displayMode: s });
            }),
            (t.defaultProps = { allowedModes: ye }),
            t
          );
        })(i.PureComponent);
      a.d(t, 'HeaderToolbarRenderer', function () {
        return _e;
      });
      var _e = (function () {
        function e(e, t) {
          var a = this;
          (this._component = null),
            (this._handleRef = function (e) {
              a._component = e;
            }),
            (this._container = e),
            r.render(
              i.createElement(
                be,
                Object(n.__assign)({}, t, { ref: this._handleRef }),
              ),
              this._container,
            );
        }
        return (
          (e.prototype.destroy = function () {
            r.unmountComponentAtNode(this._container);
          }),
          (e.prototype.getComponent = function () {
            return Object(o.ensureNotNull)(this._component);
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
        r = a('TSYQ'),
        o = a('Iivm'),
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
            _ = void 0 === b ? s : b,
            S = e.className,
            g = e.forceInteractive,
            E = Object(n.__rest)(e, [
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
            C = r(
              S,
              _.button,
              y && 'apply-common-tooltip',
              (((a = {})[_.isActive] = c),
              (a[_.isOpened] = d),
              (a[_.isInteractive] = (g || Boolean(p)) && !u),
              (a[_.isDisabled] = u),
              (a[_.isGrouped] = h),
              (a[_.hover] = v),
              a),
            ),
            w =
              l &&
              ('string' == typeof l
                ? i.createElement(o.Icon, { className: _.icon, icon: l })
                : i.cloneElement(l, {
                    className: r(_.icon, l.props.className),
                  }));
          return i.createElement(
            'div',
            Object(n.__assign)({}, E, {
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
                { className: r('js-button-text', _.text) },
                m,
              ),
            w,
            !f &&
              m &&
              i.createElement(
                'div',
                { className: r('js-button-text', _.text) },
                m,
              ),
          );
        });
    },
  },
]);
