(window.webpackJsonp = window.webpackJsonp || []).push([
  ['general-chart-properties-dialog'],
  {
    '++0f': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentcolor" stroke-width="1.3" d="M12 9l5 5-5 5"/></svg>';
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
    An2S: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return d;
      }),
        n.d(t, 'c', function () {
          return p;
        }),
        n.d(t, 'b', function () {
          return h;
        });
      var o = n('mrSG'),
        a = n('q1tI'),
        i = n.n(a),
        l = n('TSYQ'),
        r = n.n(l),
        s = n('Iivm'),
        c = n('++0f'),
        m = n('2x13');
      function u(e) {
        return { isMobile: 'mobile' === e, isTablet: 'tablet' === e };
      }
      function d(e) {
        var t = e.mode,
          n = e.className,
          a = Object(o.__rest)(e, ['mode', 'className']),
          l = u(t),
          s = l.isMobile,
          c = l.isTablet,
          d = r()(m.container, c && m.isTablet, s && m.isMobile, n);
        return i.a.createElement(
          'div',
          Object(o.__assign)({}, a, {
            className: d,
            'data-role': 'dialog-sidebar',
          }),
        );
      }
      function p(e) {
        return i.a.createElement(
          'div',
          Object(o.__assign)({ className: m.wrapper }, e),
        );
      }
      function h(e) {
        var t = e.mode,
          n = e.title,
          a = e.icon,
          l = e.isActive,
          d = e.onClick,
          p = Object(o.__rest)(e, [
            'mode',
            'title',
            'icon',
            'isActive',
            'onClick',
          ]),
          h = u(t),
          b = h.isMobile,
          f = h.isTablet;
        return i.a.createElement(
          'div',
          Object(o.__assign)({}, p, {
            className: r()(
              m.tab,
              f && m.isTablet,
              b && m.isMobile,
              l && m.active,
            ),
            onClick: d,
          }),
          i.a.createElement(s.Icon, { className: m.icon, icon: a }),
          !f &&
            i.a.createElement(
              'span',
              { className: m.title },
              i.a.createElement('span', { className: m.titleText }, n),
              b && i.a.createElement(s.Icon, { className: m.nested, icon: c }),
            ),
        );
      }
    },
    KKsp: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var o = n('q1tI'),
        a = n('TSYQ'),
        i = n.n(a),
        l = n('NOPy');
      function r(e) {
        var t = e.size,
          n = void 0 === t ? 'normal' : t,
          a = e.className;
        return o.createElement('div', {
          className: i()(
            l.separator,
            'small' === n && l.small,
            'normal' === n && l.normal,
            'large' === n && l.large,
            a,
          ),
        });
      }
    },
    NOPy: function (e, t, n) {
      e.exports = {
        separator: 'separator-25lkUpN-',
        small: 'small-1IE19htj',
        normal: 'normal-2jX5NqMI',
        large: 'large-3vmbMIE7',
      };
    },
    PI1I: function (e, t, n) {
      'use strict';
      n.r(t);
      n('YFKU');
      var o = n('q1tI'),
        a = n('i8i4'),
        i = n('mrSG'),
        l = n('mwqF'),
        r = n('Iivm'),
        s = n('bvfV'),
        c = n('ycFu'),
        m = n('ybVX'),
        u = n('Q+1u'),
        d = n('Vdly'),
        p = n.n(d),
        h = n('VNzU'),
        b = n('/KDZ'),
        f = (n('bSeV'), n('H172')),
        y = n('N5tr'),
        _ = n('KKsp'),
        g = n('EsvI'),
        v = (n('HbRj'), n('CLNU')),
        C = n('oNDq'),
        T = window.t("Do you really want to delete Color Theme '{0}' ?");
      var S = n('+EG+'),
        A = (n('bf9a'), n('i/MG')),
        k = n('PC8g'),
        w = n('8d0Q'),
        P = n('utEQ');
      function E(e) {
        var t = e.themeName,
          n = e.chartWidgetCollection,
          a = e.onRemove,
          l = e.manager,
          r = Object(w.b)(),
          s = r[0],
          c = r[1],
          m = o.useCallback(
            function () {
              return (function (e, t, n) {
                if (window.is_authenticated) {
                  var o = Object(v.clean)(T.format(e));
                  Object(C.createConfirmDialog)({
                    type: 'modal',
                    content: o,
                    manager: n || void 0,
                  }).then(function (n) {
                    n.on('action:yes', function (n) {
                      Object(g.removeTheme)(e), t && t(e), n.close();
                    }),
                      n.open();
                  });
                }
              })(t, a, l);
            },
            [t, a, l],
          ),
          u = o.useCallback(
            function () {
              Object(g.loadTheme)(t, !1, !1, n).then(function () {
                window.saver.saveChartSilently(),
                  Object(k.trackEvent)('GUI', 'Switch to custom theme');
              });
            },
            [t, n],
          );
        return o.createElement(
          'div',
          Object(i.__assign)({}, c),
          o.createElement(y.b, {
            className: P.defaultsButtonItem,
            isActive: !1,
            label: t,
            onClick: u,
            toolbox: o.createElement(A.a, {
              hidden: !Modernizr.mobiletouch && !s,
              onClick: m,
            }),
          }),
        );
      }
      var I = n('HWhk'),
        B = window.t('Template'),
        N = window.t('Apply Defaults'),
        x = (window.t('Save As...'), window.t('Apply to all')),
        M = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._manager = null),
              (n._handleApplyDefaults = function () {
                var e = n.props,
                  t = e.model,
                  o = e.chartWidgetCollection;
                t.restorePreferences();
                var a = Object(g.getCurrentTheme)().name;
                Object(g.loadTheme)(a, !0, !0, o, void 0, void 0, !0);
              }),
              (n._handleSaveAs = function () {}),
              (n._handleRemoveTheme = function (e) {
                n.setState({
                  themes: n.state.themes.filter(function (t) {
                    return t !== e;
                  }),
                });
              }),
              (n._syncThemeList = function () {
                0;
              }),
              (n._defaultDropdownItems = [
                {
                  value: 'apply',
                  readonly: !0,
                  content: o.createElement(y.b, {
                    className: P.defaultsButtonItem,
                    isActive: !1,
                    label: N,
                    onClick: n._handleApplyDefaults,
                  }),
                },
              ]),
              (n._applyToAllDropdownItem = {
                value: 'apply_to_all',
                readonly: !0,
                content: o.createElement(y.b, {
                  className: P.defaultsButtonItem,
                  isActive: !1,
                  label: x,
                  onClick: t.applyToAllCallback,
                }),
              }),
              (n.state = { themes: [] }),
              n._syncThemeList(),
              n
            );
          }
          return (
            Object(i.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this;
              return o.createElement(S.b.Consumer, null, function (t) {
                return (
                  (e._manager = t),
                  o.createElement(
                    b.a,
                    { rule: 'screen and (max-width: 768px)' },
                    function (t) {
                      return o.createElement(f.a, {
                        className: !t && P.themesButtonText,
                        items: e._getThemeItems(t),
                        hideArrowButton: t,
                        value: 'defaults',
                        'data-name': 'theme-select',
                      });
                    },
                  )
                );
              });
            }),
            (t.prototype._getThemeItems = function (e) {
              var t = this,
                n = this.props,
                a = n.isApplyToAllVisible,
                l = n.chartWidgetCollection,
                r =
                  e && a
                    ? Object(i.__spreadArrays)(
                        [
                          this._applyToAllDropdownItem,
                          this._getPlaceHolderItem(e),
                        ],
                        this._defaultDropdownItems,
                      )
                    : Object(i.__spreadArrays)(
                        [this._getPlaceHolderItem(e)],
                        this._defaultDropdownItems,
                      ),
                s = this.state.themes;
              if (!s.length) return r;
              var c = s.map(function (e) {
                return {
                  value: e,
                  readonly: !0,
                  content: o.createElement(E, {
                    themeName: e,
                    onRemove: t._handleRemoveTheme,
                    chartWidgetCollection: l,
                    manager: t._manager,
                  }),
                };
              });
              return (
                c.unshift({
                  readonly: !0,
                  content: o.createElement(_.a, null),
                }),
                r.concat(c)
              );
            }),
            (t.prototype._getPlaceHolderItem = function (e) {
              return {
                value: 'defaults',
                readonly: !0,
                content: '',
                selectedContent: e
                  ? o.createElement(r.Icon, {
                      className: P.themesButtonIcon,
                      icon: I,
                    })
                  : B,
              };
            }),
            t
          );
        })(o.PureComponent),
        O = n('tWVy'),
        z = n('yqnI'),
        V = n('uhCe'),
        j = n('An2S'),
        D = n('tmL0'),
        L = {
          areaSymbolMinTick: 'normal',
          areaSymbolTimezone: 'normal',
          barSymbolMinTick: 'normal',
          barSymbolTimezone: 'normal',
          baselineSymbolMinTick: 'normal',
          baselineSymbolTimezone: 'normal',
          candleSymbolMinTick: 'normal',
          candleSymbolTimezone: 'normal',
          dateFormat: 'normal',
          haSymbolMinTick: 'normal',
          haSymbolTimezone: 'normal',
          hiloSymbolMinTick: 'normal',
          hiloSymbolTimezone: 'normal',
          hollowCandleSymbolMinTick: 'normal',
          hollowCandleSymbolTimezone: 'normal',
          kagiAtrLength: 'normal',
          kagiReversalAmount: 'normal',
          kagiStyle: 'normal',
          kagiSymbolMinTick: 'normal',
          kagiSymbolTimezone: 'normal',
          lineSymbolMinTick: 'normal',
          lineSymbolTimezone: 'normal',
          lockScale: 'normal',
          mainSeriesSymbolAreaPriceSource: 'normal',
          mainSeriesSymbolBaseLevelPercentage: 'normal',
          mainSeriesSymbolBaseLinePriceSource: 'normal',
          mainSeriesSymbolLinePriceSource: 'normal',
          mainSeriesSymbolStyleType: 'normal',
          navButtons: 'big',
          paneButtons: 'big',
          pbLb: 'normal',
          pbSymbolMinTick: 'normal',
          pbSymbolTimezone: 'normal',
          pnfAtrLength: 'normal',
          pnfBoxSize: 'normal',
          pnfReversalAmount: 'normal',
          pnfSources: 'normal',
          pnfStyle: 'normal',
          pnfSymbolMinTick: 'normal',
          pnfSymbolTimezone: 'normal',
          rangeSymbolMinTick: 'normal',
          rangeSymbolTimezone: 'normal',
          renkoAtrLength: 'normal',
          renkoBoxSize: 'normal',
          renkoStyle: 'normal',
          renkoSymbolMinTick: 'normal',
          renkoSymbolTimezone: 'normal',
          scalesPlacement: 'normal',
          symbolLastValueLabel: 'big',
          symbolTextSource: 'normal',
        },
        W = n('U0JK'),
        q = n('sXZi'),
        R = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            (n._renderChildren = function (e) {
              var t = e.requestResize,
                a = e.isSmallWidth;
              return (
                (n._requestResize = t),
                o.createElement(
                  'div',
                  { className: q.content },
                  n._renderTabs(a),
                  n._renderTabContent(a),
                )
              );
            }),
              (n._renderApplyToAllButton = function () {
                return o.createElement(
                  b.a,
                  { rule: V.a.TabletNormal },
                  function (e) {
                    return n._renderApplyToAll(e);
                  },
                );
              }),
              (n._renderFooterLeft = function () {
                var e = n.props,
                  t = e.model,
                  a = e.chartWidgetCollection,
                  i = n.state.isApplyToAllVisible;
                return o.createElement(M, {
                  model: t,
                  isApplyToAllVisible: i,
                  applyToAllCallback: n._handleApplyToAll,
                  chartWidgetCollection: a,
                });
              }),
              (n._createTabClickHandler = function (e) {
                return function () {
                  return n._selectPage(e);
                };
              }),
              (n._selectPage = function (e) {
                var t = n.state.activePage;
                e !== t &&
                  (t &&
                    t.definitions.unsubscribe(n._onChangeActivePageDefinitions),
                  p.a.setValue('properties_dialog.last_page_id', e.id),
                  e.definitions.subscribe(n._onChangeActivePageDefinitions),
                  n.setState(
                    { activePage: e, tableKey: Date.now() },
                    function () {
                      n._requestResize && n._requestResize();
                    },
                  ));
              }),
              (n._onChangeActivePageDefinitions = function () {
                z.a.logNormal('Definition collection was updated'),
                  n.setState({ tableKey: Date.now() }, function () {
                    n._requestResize && n._requestResize();
                  });
              }),
              (n._handleCancel = function () {
                n.props.onCancel(), n.props.onClose();
              }),
              (n._handleSubmit = function () {
                n.props.onSubmit(), n.props.onClose();
              }),
              (n._handleScroll = function () {
                O.a.fire();
              }),
              (n._handleApplyToAll = function () {
                var e = n.props,
                  t = e.chartWidgetCollection,
                  o = e.model;
                n.state.isApplyToAllVisible && t.applyPreferencesToAllCharts(o);
              }),
              (n._syncApplyToAllVisibility = function () {
                var e = n.props.chartWidgetCollection;
                n.setState({
                  isApplyToAllVisible: Object(h.isMultipleLayout)(
                    e.layout.value(),
                  ),
                });
              }),
              (n._handleBackClick = function () {
                var e = n.state.activePage;
                e &&
                  e.definitions.unsubscribe(n._onChangeActivePageDefinitions),
                  n.setState({ activePage: null });
              });
            var a = t.pages,
              i = t.activePageId,
              l = a.find(function (e) {
                return e.id === i;
              });
            if (!l) {
              var r = p.a.getValue('properties_dialog.last_page_id'),
                s = a.find(function (e) {
                  return e.id === r;
                });
              l = s || a[0];
            }
            return (
              (n.state = {
                activePage: l,
                isApplyToAllVisible: Object(h.isMultipleLayout)(
                  t.chartWidgetCollection.layout.value(),
                ),
                tableKey: Date.now(),
              }),
              n
            );
          }
          return (
            Object(i.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.props.chartWidgetCollection,
                t = this.state.activePage;
              e.layout.subscribe(this._syncApplyToAllVisibility),
                t &&
                  t.definitions.subscribe(this._onChangeActivePageDefinitions);
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.props.chartWidgetCollection,
                t = this.state.activePage;
              t &&
                t.definitions.unsubscribe(this._onChangeActivePageDefinitions),
                e.layout.unsubscribe(this._syncApplyToAllVisibility);
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.isOpened,
                a = t.onClose,
                i = this.state.activePage;
              return o.createElement(
                b.a,
                { rule: V.a.TabletSmall },
                function (t) {
                  return o.createElement(c.a, {
                    className: q.withSidebar,
                    dataName: 'series-properties-dialog',
                    onClose: a,
                    isOpened: n,
                    title:
                      null !== i && t ? i.title : window.t('Chart settings'),
                    footerLeftRenderer: e._renderFooterLeft,
                    additionalButtons: e._renderApplyToAllButton(),
                    additionalHeaderElement:
                      null !== i && t
                        ? o.createElement(r.Icon, {
                            className: q.backButton,
                            icon: W,
                            onClick: e._handleBackClick,
                          })
                        : void 0,
                    onSubmit: e._handleSubmit,
                    onCancel: e._handleCancel,
                    render: e._renderChildren,
                    submitOnEnterKey: !1,
                  });
                },
              );
            }),
            (t.prototype._renderTabContent = function (e) {
              var t = this.props.pages,
                n = this._getCurrentPage(e);
              if (n) {
                var a = t.find(function (e) {
                    return e.id === n.id;
                  }),
                  i = a ? a.definitions.value() : [];
                return o.createElement(
                  D.a,
                  { className: q.tabContent, onScroll: this._handleScroll },
                  o.createElement(
                    m.b.Provider,
                    { value: L },
                    o.createElement(
                      u.a,
                      { key: this.state.tableKey },
                      i.map(function (e) {
                        return o.createElement(s.a, {
                          key: e.id,
                          definition: e,
                        });
                      }),
                    ),
                  ),
                );
              }
              return null;
            }),
            (t.prototype._renderTabs = function (e) {
              var t = this,
                n = this.props.pages;
              if (this.state.activePage && e) return null;
              var a = this._getCurrentPage(e);
              return o.createElement(
                b.a,
                { rule: V.a.TabletNormal },
                function (e) {
                  return o.createElement(
                    b.a,
                    { rule: V.a.TabletSmall },
                    function (i) {
                      var l = i ? 'mobile' : e ? 'tablet' : void 0;
                      return o.createElement(
                        j.a,
                        { mode: l, onScroll: t._handleScroll },
                        n.map(function (e) {
                          return o.createElement(j.b, {
                            key: e.id,
                            mode: l,
                            'data-name': e.id,
                            title: e.title,
                            icon: e.icon,
                            onClick: t._createTabClickHandler(e),
                            isActive: a ? e.id === a.id : void 0,
                          });
                        }),
                      );
                    },
                  );
                },
              );
            }),
            (t.prototype._renderApplyToAll = function (e) {
              var t = this.state.isApplyToAllVisible;
              return (
                !e &&
                t &&
                o.createElement(
                  'span',
                  { className: q.applyToAllButton },
                  o.createElement(
                    l.Button,
                    { appearance: 'stroke', onClick: this._handleApplyToAll },
                    window.t('Apply to all'),
                  ),
                )
              );
            }),
            (t.prototype._getCurrentPage = function (e) {
              var t = this.props.pages,
                n = this.state.activePage,
                o = null;
              return n ? (o = n) : !e && t.length && (o = t[0]), o;
            }),
            t
          );
        })(o.PureComponent),
        K = n('FQhm');
      n.d(t, 'GeneralChartPropertiesDialogRenderer', function () {
        return Q;
      });
      var H = window.t('Chart settings'),
        Q = (function () {
          function e(e) {
            var t = this;
            (this._container = document.createElement('div')),
              (this._isVisible = !1),
              (this._handleClose = function () {
                a.unmountComponentAtNode(t._container),
                  (t._isVisible = !1),
                  t._onClose && t._onClose();
              }),
              (this._handleSubmit = function () {}),
              (this._handleCancel = function () {
                t._model.undoToCheckpoint(t._checkpoint);
              }),
              (this._propertyPages = e.propertyPages),
              (this._model = e.model),
              (this._activePageId = e.activePageId),
              (this._onClose = e.onClose),
              (this._chartWidgetCollection = e.chartWidgetCollection),
              (this._checkpoint = this._ensureCheckpoint(e.undoCheckPoint));
          }
          return (
            (e.prototype.hide = function (e) {
              e ? this._handleCancel() : this._handleSubmit(),
                this._handleClose();
            }),
            (e.prototype.isVisible = function () {
              return this._isVisible;
            }),
            (e.prototype.focusOnText = function () {}),
            (e.prototype.show = function () {
              a.render(
                o.createElement(R, {
                  title: H,
                  isOpened: !0,
                  onSubmit: this._handleSubmit,
                  onClose: this._handleClose,
                  onCancel: this._handleCancel,
                  pages: this._propertyPages,
                  model: this._model,
                  activePageId: this._activePageId,
                  chartWidgetCollection: this._chartWidgetCollection,
                }),
                this._container,
              ),
                (this._isVisible = !0),
                K.emit('edit_object_dialog', {
                  objectType: 'mainSeries',
                  scriptTitle: this._model.mainSeries().title(),
                });
            }),
            (e.prototype._ensureCheckpoint = function (e) {
              return (
                void 0 === e && (e = this._model.createUndoCheckpoint()), e
              );
            }),
            e
          );
        })();
    },
    U0JK: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentcolor" stroke-width="1.2" d="M17 21l-7.5-7.5L17 6"/></svg>';
    },
    sXZi: function (e, t, n) {
      e.exports = {
        'tablet-normal-breakpoint': 'screen and (max-width: 768px)',
        'tablet-small-breakpoint': 'screen and (max-width: 419px)',
        withSidebar: 'withSidebar-1v16TX_2',
        content: 'content-1KOxICHZ',
        tabContent: 'tabContent-uYpWHhq0',
        backButton: 'backButton-1BRkbiCz',
        applyToAllButton: 'applyToAllButton-1mQDSNsO',
      };
    },
    utEQ: function (e, t, n) {
      e.exports = {
        themesButtonText: 'themesButtonText-2QMmFP4s',
        themesButtonIcon: 'themesButtonIcon-7BX3V6du',
        defaultsButtonText: 'defaultsButtonText-ezA5ZCBQ',
        defaultsButtonItem: 'defaultsButtonItem-3eSfgMfv',
      };
    },
  },
]);
