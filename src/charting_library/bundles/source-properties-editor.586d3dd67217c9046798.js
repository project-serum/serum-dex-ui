(window.webpackJsonp = window.webpackJsonp || []).push([
  ['source-properties-editor'],
  {
    '2mql': function (e, t, o) {
      'use strict';
      var n = o('TOwV'),
        i = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        r = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      function c(e) {
        return n.isMemo(e) ? a : s[e.$$typeof] || i;
      }
      s[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      };
      var l = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        m = Object.getPrototypeOf,
        h = Object.prototype;
      e.exports = function e(t, o, n) {
        if ('string' != typeof o) {
          if (h) {
            var i = m(o);
            i && i !== h && e(t, i, n);
          }
          var a = u(o);
          d && (a = a.concat(d(o)));
          for (var s = c(t), f = c(o), _ = 0; _ < a.length; ++_) {
            var g = a[_];
            if (!(r[g] || (n && n[g]) || (f && f[g]) || (s && s[g]))) {
              var b = p(o, g);
              try {
                l(t, g, b);
              } catch (v) {}
            }
          }
          return t;
        }
        return t;
      };
    },
    CbZh: function (e, t, o) {
      'use strict';
      o.r(t);
      o('YFKU');
      var n = o('q1tI'),
        i = o.n(n),
        r = o('i8i4'),
        a = o('FQhm'),
        s = o('mrSG'),
        c = o('Eyy1'),
        l = (o('bSeV'), o('qFKp')),
        u = o('Vdly'),
        d = o.n(u),
        p = o('ycFu'),
        m = o('tWVy'),
        h = o('aDg1');
      o('17x9');
      o('wx14'),
        o('zLVn'),
        o('2mql'),
        o('TOwV'),
        'undefined' != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement
          ? n.useLayoutEffect
          : n.useEffect;
      o('ANjH');
      var f;
      f = r.unstable_batchedUpdates;
      var _ = o('Iivm'),
        g = o('H172'),
        b = o('/KDZ'),
        v = (o('bf9a'), o('N5tr')),
        y = o('i/MG'),
        P = o('8d0Q'),
        C = o('lpmA');
      function T(e) {
        var t = e.name,
          o = e.onRemove,
          i = e.onClick,
          r = Object(P.b)(),
          a = r[0],
          c = r[1],
          l = n.useCallback(
            function () {
              return i(t);
            },
            [i, t],
          ),
          u = n.useCallback(
            function () {
              o && o(t);
            },
            [o, t],
          );
        return n.createElement(
          'div',
          Object(s.__assign)({}, c),
          n.createElement(v.b, {
            className: C.defaultsButtonItem,
            isActive: !1,
            label: t,
            onClick: l,
            toolbox:
              o &&
              n.createElement(y.a, {
                hidden: !Modernizr.mobiletouch && !a,
                onClick: u,
              }),
          }),
        );
      }
      var w = o('HWhk');
      function I(e) {
        var t = e.model,
          o = e.source;
        return i.a.createElement(
          b.a,
          { rule: 'screen and (max-width: 768px)' },
          function (e) {
            return i.a.createElement(g.a, {
              className: !e && C.themesButtonText,
              items: [
                {
                  value: 'defaults',
                  readonly: !0,
                  content: '',
                  selectedContent: e
                    ? i.a.createElement(_.Icon, {
                        className: C.themesButtonIcon,
                        icon: w,
                      })
                    : window.t('Template'),
                },
                {
                  readonly: !0,
                  content: i.a.createElement(T, {
                    onClick: n,
                    name: window.t('Apply Defaults'),
                  }),
                },
              ],
              hideArrowButton: e,
              value: 'defaults',
            });
          },
        );
        function n() {
          t.restorePropertiesForSource(o);
        }
      }
      function S(e) {
        return i.a.createElement(I, Object(s.__assign)({}, e));
      }
      var x,
        E,
        A = o('tmL0'),
        D = o('CW80'),
        O = o('vHME'),
        B = o('3ClC'),
        k = o('qJq3'),
        j = o('Ss5c'),
        N = o('GVHu'),
        R = o('ybVX'),
        V =
          (((x = {})['Elliott Impulse Wave (12345)Degree'] = 'normal'),
          (x['Elliott Triangle Wave (ABCDE)Degree'] = 'normal'),
          (x['Elliott Triple Combo Wave (WXYXZ)Degree'] = 'normal'),
          (x['Elliott Correction Wave (ABC)Degree'] = 'normal'),
          (x['Elliott Double Combo Wave (WXY)Degree'] = 'normal'),
          (x.BarsPatternMode = 'normal'),
          (x.StudyInputSource = 'normal'),
          x),
        F =
          (((E = {}).TextText = 'big'),
          (E.AnchoredTextText = 'big'),
          (E.NoteText = 'big'),
          (E.AnchoredNoteText = 'big'),
          (E.CalloutText = 'big'),
          (E.BalloonText = 'big'),
          E),
        q = o('Q+1u'),
        K = o('bvfV');
      function L(e) {
        return n.createElement(
          R.a.Provider,
          { value: F },
          n.createElement(
            R.b.Provider,
            { value: V },
            e.page &&
              n.createElement(
                q.a,
                { reference: e.pageRef, key: e.tableKey },
                e.page.definitions.value().map(function (e) {
                  return n.createElement(K.a, { key: e.id, definition: e });
                }),
              ),
          ),
        );
      }
      var W = o('ttKw'),
        z = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            (o._activePageRef = n.createRef()),
              (o._getActionPageById = function (e) {
                if (e)
                  return o.props.pages.find(function (t) {
                    return t.id.toLowerCase() === e.toLowerCase();
                  });
              }),
              (o._onChangeActivePageDefinitions = function () {
                o.setState({ tableKey: Date.now() }, function () {
                  o._requestResize && o._requestResize();
                });
              }),
              (o._renderFooterLeft = function () {
                var e = o.props,
                  t = e.source,
                  i = e.model;
                return Object(D.isLineTool)(t)
                  ? n.createElement(S, { source: t, model: i })
                  : n.createElement(
                      b.a,
                      { rule: 'screen and (max-width: 419px)' },
                      function (e) {
                        return (
                          Object(B.isStudy)(t) &&
                          n.createElement(O.a, {
                            model: i,
                            source: t,
                            mode: e ? 'compact' : 'normal',
                          })
                        );
                      },
                    );
              }),
              (o._subscribe = function (e) {
                e && e.definitions.subscribe(o._onChangeActivePageDefinitions);
              }),
              (o._unsubscribe = function (e) {
                e &&
                  e.definitions.unsubscribe(o._onChangeActivePageDefinitions);
              }),
              (o._getActiveTabSettingsName = function () {
                var e = o.props.source;
                return e instanceof k.Series
                  ? 'properties_dialog.active_tab.chart'
                  : e instanceof j.LineDataSource
                  ? 'properties_dialog.active_tab.drawing'
                  : e instanceof N.Study
                  ? 'properties_dialog.active_tab.study'
                  : '';
              }),
              (o._handleSelectPage = function (e) {
                var t = o.state.activePageId,
                  n = o._getActionPageById(t),
                  i = o._getActionPageById(e),
                  r = o._getActiveTabSettingsName();
                t !== e &&
                  (o._unsubscribe(n),
                  r && d.a.setValue(r, e),
                  o._subscribe(i),
                  o.setState(
                    { activePageId: e, tableKey: Date.now() },
                    function () {
                      o._requestResize && o._requestResize(),
                        o._focusActivePageFirstTextInput();
                    },
                  ));
              }),
              (o._handleScroll = function () {
                m.a.fire();
              }),
              (o._handleSubmit = function () {
                o.props.onSubmit(), o._closePopupDialog();
              }),
              (o._closePopupDialog = function () {
                window.lineToolPropertiesToolbar &&
                  window.lineToolPropertiesToolbar.refresh(),
                  o.props.onClose();
              });
            var i,
              r = o.props.pages;
            if (o._getActionPageById(o.props.activePageId))
              i = Object(c.ensureDefined)(o.props.activePageId);
            else {
              var a = d.a.getValue(o._getActiveTabSettingsName(), ''),
                s = o._getActionPageById(a);
              i = s ? s.id : r[0].id;
            }
            return (
              (o.state = { activePageId: i, tableKey: Date.now() }),
              window.lineToolPropertiesToolbar &&
                window.lineToolPropertiesToolbar.hide(),
              o
            );
          }
          return (
            Object(s.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.state.activePageId,
                t = this._getActionPageById(e);
              this._focusActivePageFirstTextInput(), this._subscribe(t);
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.props.activePageId,
                t = this._getActionPageById(e);
              clearTimeout(this._timeout), this._unsubscribe(t);
            }),
            (t.prototype.render = function () {
              var e,
                t = this.props,
                o = t.source,
                i = t.onCancel,
                r = this.state.activePageId,
                a =
                  (null === (e = o.properties().title) || void 0 === e
                    ? void 0
                    : e.value()) || o.title();
              return n.createElement(p.a, {
                dataName: 'source-properties-editor',
                title: a,
                isOpened: !0,
                onSubmit: this._handleSubmit,
                onCancel: i,
                onClickOutside: this._handleSubmit,
                onClose: this._closePopupDialog,
                footerLeftRenderer: this._renderFooterLeft,
                render: this._renderChildren(r),
                submitOnEnterKey: !1,
              });
            }),
            (t.prototype._renderChildren = function (e) {
              var t = this;
              return function (o) {
                var i = o.requestResize;
                t._requestResize = i;
                var r = t.props.pages,
                  a = {
                    allIds: r.map(function (e) {
                      return e.id;
                    }),
                    byId: r.reduce(function (e, t) {
                      var o;
                      return Object(s.__assign)(
                        Object(s.__assign)({}, e),
                        (((o = {})[t.id] = { title: t.title }), o),
                      );
                    }, {}),
                  },
                  c = r.find(function (t) {
                    return t.id === e;
                  });
                return n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(h.a, {
                    activeTabId: e,
                    onSelect: t._handleSelectPage,
                    tabs: a,
                  }),
                  n.createElement(
                    A.a,
                    { className: W.scrollable, onScroll: t._handleScroll },
                    n.createElement(L, {
                      page: c,
                      pageRef: t._activePageRef,
                      tableKey: t.state.tableKey,
                    }),
                  ),
                );
              };
            }),
            (t.prototype._focusActivePageFirstTextInput = function () {
              if (!l.CheckMobile.any() && this._activePageRef.current) {
                var e = this._activePageRef.current.querySelector(
                  'input[type=text],textarea',
                );
                e &&
                  (this._timeout = setTimeout(function () {
                    e.focus();
                  }, 0));
              }
            }),
            t
          );
        })(n.PureComponent);
      o.d(t, 'SourcePropertiesEditorRenderer', function () {
        return M;
      });
      var M = (function () {
        function e(e) {
          var t = this;
          (this._container = document.createElement('div')),
            (this._isVisible = !1),
            (this._timeout = null),
            (this._handleClose = function () {
              r.unmountComponentAtNode(t._container),
                (t._isVisible = !1),
                t._onClose && t._onClose(),
                t._subscription.unsubscribe(t, t._handleCollectionChanged);
            }),
            (this._handleSubmit = function () {
              var e = t._source;
              Object(D.isLineTool)(e) &&
                e.hasAlert.value() &&
                setTimeout(function () {
                  e.localAndServerAlertsMismatch && e.synchronizeAlert(!0);
                });
            }),
            (this._handleCancel = function () {
              t._model.undoToCheckpoint(t._checkpoint);
            }),
            (this._propertyPages = e.propertyPages),
            (this._model = e.model),
            (this._activePageId = e.activePageId),
            (this._onClose = e.onClose),
            (this._source = e.source),
            (this._checkpoint = this._ensureCheckpoint(e.undoCheckPoint)),
            (this._subscription = this._model
              .model()
              .dataSourceCollectionChanged()),
            this._subscription.subscribe(this, this._handleCollectionChanged);
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
            r.render(
              n.createElement(z, {
                source: this._source,
                onSubmit: this._handleSubmit,
                onClose: this._handleClose,
                onCancel: this._handleCancel,
                pages: this._propertyPages,
                model: this._model,
                activePageId: this._activePageId,
              }),
              this._container,
            ),
              (this._isVisible = !0),
              a.emit('drawings_settings_dialog', {
                objectType: 'drawing',
                scriptTitle: this._source.title(),
              });
          }),
          (e.prototype._handleCollectionChanged = function () {
            var e = this;
            null === this._timeout &&
              (this._timeout = setTimeout(function () {
                e._closeDialogIfSourceIsDeleted(), (e._timeout = null);
              }));
          }),
          (e.prototype._closeDialogIfSourceIsDeleted = function () {
            null === this._model.model().dataSourceForId(this._source.id()) &&
              this._handleClose();
          }),
          (e.prototype._ensureCheckpoint = function (e) {
            return void 0 === e && (e = this._model.createUndoCheckpoint()), e;
          }),
          e
        );
      })();
    },
    lpmA: function (e, t, o) {
      e.exports = {
        themesButtonText: 'themesButtonText-2XRZOVS_',
        themesButtonIcon: 'themesButtonIcon-37H2TIZ0',
        defaultsButtonText: 'defaultsButtonText-3NI8VPPT',
        defaultsButtonItem: 'defaultsButtonItem-3mtq1Y8x',
      };
    },
    ttKw: function (e, t, o) {
      e.exports = { scrollable: 'scrollable-1DxdJw53' };
    },
  },
]);
