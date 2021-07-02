(window.webpackJsonp = window.webpackJsonp || []).push([
  ['source-properties-editor'],
  {
    '/KDZ': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var o = n('mrSG'),
        i = n('q1tI'),
        r = (function (e) {
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
            Object(o.c)(t, e),
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
    '9dlw': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return h;
      });
      var o = n('mrSG'),
        i = n('q1tI'),
        r = n.n(i),
        a = n('i8i4'),
        s = n.n(a),
        c = (n('EsMY'), n('AiMB')),
        l = n('DTHj'),
        u = n('X0gx'),
        d = n('8Rai');
      function h(e) {
        var t = e.controller,
          n = e.children,
          a = e.isOpened,
          h = e.closeOnClickOutside,
          p = void 0 === h || h,
          m = e.doNotCloseOn,
          b = e.onClickOutside,
          f = e.onClose,
          v = Object(o.e)(e, [
            'controller',
            'children',
            'isOpened',
            'closeOnClickOutside',
            'doNotCloseOn',
            'onClickOutside',
            'onClose',
          ]),
          _ = Object(i.useContext)(u.a),
          g = Object(d.a)({
            handler: function (e) {
              b && b(e);
              if (!p) return;
              if (m && e.target instanceof Node) {
                var t = s.a.findDOMNode(m);
                if (t instanceof Node && t.contains(e.target)) return;
              }
              f();
            },
            mouseDown: !0,
            touchStart: !0,
          });
        return a
          ? r.a.createElement(
              c.a,
              {
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                pointerEvents: 'none',
              },
              r.a.createElement(
                'span',
                { ref: g, style: { pointerEvents: 'auto' } },
                r.a.createElement(
                  l.a,
                  Object(o.a)({}, v, {
                    isOpened: a,
                    onClose: f,
                    onScroll: function (t) {
                      var n = e.onScroll;
                      n && n(t);
                      t.stopPropagation();
                    },
                    customCloseDelegate: _,
                    ref: t,
                  }),
                  n,
                ),
              ),
            )
          : null;
      }
    },
    CbZh: function (e, t, n) {
      'use strict';
      n.r(t);
      n('YFKU');
      var o = n('q1tI'),
        i = n.n(o),
        r = n('i8i4'),
        a = n('FQhm'),
        s = n('mrSG'),
        c = n('Eyy1'),
        l = (n('bSeV'), n('qFKp')),
        u = n('Vdly'),
        d = n.n(u),
        h = n('ycFu'),
        p = n('tWVy'),
        m = n('aDg1'),
        b = (n('/MKj'), n('Iivm')),
        f = n('H172'),
        v = n('/KDZ'),
        _ = (n('EsMY'), n('N5tr')),
        g = n('i/MG'),
        C = n('8d0Q'),
        y = n('lpmA');
      function P(e) {
        var t = e.name,
          n = e.onRemove,
          i = e.onClick,
          r = Object(C.b)(),
          a = r[0],
          c = r[1],
          l = o.useCallback(
            function () {
              return i(t);
            },
            [i, t],
          ),
          u = o.useCallback(
            function () {
              n && n(t);
            },
            [n, t],
          );
        return o.createElement(
          'div',
          Object(s.a)({}, c),
          o.createElement(_.b, {
            className: y.defaultsButtonItem,
            isActive: !1,
            label: t,
            onClick: l,
            toolbox:
              n &&
              o.createElement(g.a, {
                hidden: !Modernizr.mobiletouch && !a,
                onClick: u,
              }),
          }),
        );
      }
      var E = n('HWhk');
      function O(e) {
        var t = e.model,
          n = e.source;
        return i.a.createElement(
          v.a,
          { rule: 'screen and (max-width: 768px)' },
          function (e) {
            return i.a.createElement(f.a, {
              className: !e && y.themesButtonText,
              items: [
                {
                  value: 'defaults',
                  readonly: !0,
                  content: '',
                  selectedContent: e
                    ? i.a.createElement(b.a, {
                        className: y.themesButtonIcon,
                        icon: E,
                      })
                    : window.t('Template'),
                },
                {
                  readonly: !0,
                  content: i.a.createElement(P, {
                    onClick: o,
                    name: window.t('Apply Defaults'),
                  }),
                },
              ],
              hideArrowButton: e,
              value: 'defaults',
            });
          },
        );
        function o() {
          t.restorePropertiesForSource(n);
        }
      }
      function w(e) {
        return i.a.createElement(O, Object(s.a)({}, e));
      }
      var I,
        S,
        T = n('tmL0'),
        x = n('CW80'),
        k = n('vHME'),
        D = n('3ClC'),
        A = n('qJq3'),
        j = n('Ss5c'),
        N = n('GVHu'),
        q = n('ybVX'),
        B =
          (((I = {})['Elliott Impulse Wave (12345)Degree'] = 'normal'),
          (I['Elliott Triangle Wave (ABCDE)Degree'] = 'normal'),
          (I['Elliott Triple Combo Wave (WXYXZ)Degree'] = 'normal'),
          (I['Elliott Correction Wave (ABC)Degree'] = 'normal'),
          (I['Elliott Double Combo Wave (WXY)Degree'] = 'normal'),
          (I.BarsPatternMode = 'normal'),
          (I.StudyInputSource = 'normal'),
          I),
        M =
          (((S = {}).TextText = 'big'),
          (S.AnchoredTextText = 'big'),
          (S.NoteText = 'big'),
          (S.AnchoredNoteText = 'big'),
          (S.CalloutText = 'big'),
          (S.BalloonText = 'big'),
          S),
        R = n('Q+1u'),
        V = n('bvfV');
      function W(e) {
        return o.createElement(
          q.a.Provider,
          { value: M },
          o.createElement(
            q.b.Provider,
            { value: B },
            e.page &&
              o.createElement(
                R.a,
                { reference: e.pageRef, key: e.tableKey },
                e.page.definitions.value().map(function (e) {
                  return o.createElement(V.a, { key: e.id, definition: e });
                }),
              ),
          ),
        );
      }
      var K = n('ttKw'),
        F = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            (n._activePageRef = o.createRef()),
              (n._getActionPageById = function (e) {
                if (e)
                  return n.props.pages.find(function (t) {
                    return t.id.toLowerCase() === e.toLowerCase();
                  });
              }),
              (n._onChangeActivePageDefinitions = function () {
                n.setState({ tableKey: Date.now() }, function () {
                  n._requestResize && n._requestResize();
                });
              }),
              (n._renderFooterLeft = function () {
                var e = n.props,
                  t = e.source,
                  i = e.model;
                return Object(x.isLineTool)(t)
                  ? o.createElement(w, { source: t, model: i })
                  : o.createElement(
                      v.a,
                      { rule: 'screen and (max-width: 419px)' },
                      function (e) {
                        return (
                          Object(D.isStudy)(t) &&
                          o.createElement(k.a, {
                            model: i,
                            source: t,
                            mode: e ? 'compact' : 'normal',
                          })
                        );
                      },
                    );
              }),
              (n._subscribe = function (e) {
                e && e.definitions.subscribe(n._onChangeActivePageDefinitions);
              }),
              (n._unsubscribe = function (e) {
                e &&
                  e.definitions.unsubscribe(n._onChangeActivePageDefinitions);
              }),
              (n._getActiveTabSettingsName = function () {
                var e = n.props.source;
                return e instanceof A.Series
                  ? 'properties_dialog.active_tab.chart'
                  : e instanceof j.LineDataSource
                  ? 'properties_dialog.active_tab.drawing'
                  : e instanceof N.Study
                  ? 'properties_dialog.active_tab.study'
                  : '';
              }),
              (n._handleSelectPage = function (e) {
                var t = n.state.activePageId,
                  o = n._getActionPageById(t),
                  i = n._getActionPageById(e),
                  r = n._getActiveTabSettingsName();
                t !== e &&
                  (n._unsubscribe(o),
                  r && d.a.setValue(r, e),
                  n._subscribe(i),
                  n.setState(
                    { activePageId: e, tableKey: Date.now() },
                    function () {
                      n._requestResize && n._requestResize(),
                        n._focusActivePageFirstTextInput();
                    },
                  ));
              }),
              (n._handleScroll = function () {
                p.a.fire();
              }),
              (n._handleSubmit = function () {
                n.props.onSubmit(), n._closePopupDialog();
              }),
              (n._closePopupDialog = function () {
                window.lineToolPropertiesToolbar &&
                  window.lineToolPropertiesToolbar.refresh(),
                  n.props.onClose();
              });
            var i,
              r = n.props.pages;
            if (n._getActionPageById(n.props.activePageId))
              i = Object(c.ensureDefined)(n.props.activePageId);
            else {
              var a = d.a.getValue(n._getActiveTabSettingsName(), ''),
                s = n._getActionPageById(a);
              i = s ? s.id : r[0].id;
            }
            return (
              (n.state = { activePageId: i, tableKey: Date.now() }),
              window.lineToolPropertiesToolbar &&
                window.lineToolPropertiesToolbar.hide(),
              n
            );
          }
          return (
            Object(s.c)(t, e),
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
                n = t.source,
                i = t.onCancel,
                r = this.state.activePageId,
                a =
                  (null === (e = n.properties().title) || void 0 === e
                    ? void 0
                    : e.value()) || n.title();
              return o.createElement(h.a, {
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
              return function (n) {
                var i = n.requestResize;
                t._requestResize = i;
                var r = t.props.pages,
                  a = {
                    allIds: r.map(function (e) {
                      return e.id;
                    }),
                    byId: r.reduce(function (e, t) {
                      var n;
                      return Object(s.a)(
                        Object(s.a)({}, e),
                        (((n = {})[t.id] = { title: t.title }), n),
                      );
                    }, {}),
                  },
                  c = r.find(function (t) {
                    return t.id === e;
                  });
                return o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(m.a, {
                    activeTabId: e,
                    onSelect: t._handleSelectPage,
                    tabs: a,
                  }),
                  o.createElement(
                    T.a,
                    { className: K.scrollable, onScroll: t._handleScroll },
                    o.createElement(W, {
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
        })(o.PureComponent);
      n.d(t, 'SourcePropertiesEditorRenderer', function () {
        return L;
      });
      var L = (function () {
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
              Object(x.isLineTool)(e) &&
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
              o.createElement(F, {
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
    N5tr: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return d;
      }),
        n.d(t, 'b', function () {
          return m;
        });
      var o = n('mrSG'),
        i = n('q1tI'),
        r = n.n(i),
        a = n('TSYQ'),
        s = n('tWVy'),
        c = n('JWMC'),
        l = n('QpNh'),
        u = n('v1bN'),
        d = u;
      function h(e) {
        var t = e.reference,
          n = Object(o.e)(e, ['reference']),
          i = Object(o.a)(Object(o.a)({}, n), { ref: t });
        return r.a.createElement(e.href ? 'a' : 'div', i);
      }
      function p(e) {
        e.stopPropagation();
      }
      function m(e) {
        var t,
          n,
          d,
          m = e.className,
          b = e.title,
          f = e.labelRowClassName,
          v = e.shortcut,
          _ = e.forceShowShortcuts,
          g = e.icon,
          C = e.isActive,
          y = e.isDisabled,
          P = e.isHovered,
          E = e.appearAsDisabled,
          O = e.label,
          w = e.link,
          I = e.showToolboxOnHover,
          S = e.target,
          T = e.toolbox,
          x = e.reference,
          k = e.onMouseOut,
          D = e.onMouseOver,
          A = e.theme,
          j = void 0 === A ? u : A,
          N = Object(l.a)(e),
          q = Object(i.useRef)(null);
        return r.a.createElement(
          h,
          Object(o.a)({}, N, {
            className: a(
              m,
              j.item,
              g && j.withIcon,
              ((t = {}),
              (t[j.isActive] = C),
              (t[j.isDisabled] = y || E),
              (t[j.hovered] = P),
              t),
            ),
            title: b,
            href: w,
            target: S,
            reference: function (e) {
              (q.current = e), x && x(e);
            },
            onClick: function (t) {
              var n = e.dontClosePopup,
                o = e.onClick,
                i = e.onClickArg,
                r = e.trackEventObject;
              if (y) return;
              r && Object(c.trackEvent)(r.category, r.event, r.label);
              o && o(i, t);
              n || Object(s.b)();
            },
            onContextMenu: function (t) {
              var n = e.trackEventObject,
                o = e.trackRightClick;
              n &&
                o &&
                Object(c.trackEvent)(
                  n.category,
                  n.event,
                  n.label + '_rightClick',
                );
            },
            onMouseUp: function (t) {
              var n = e.trackEventObject,
                o = e.trackMouseWheelClick;
              if (1 === t.button && w && n) {
                var i = n.label;
                o && (i += '_mouseWheelClick'),
                  Object(c.trackEvent)(n.category, n.event, i);
              }
            },
            onMouseOver: D,
            onMouseOut: k,
          }),
          void 0 !== g &&
            r.a.createElement('div', {
              className: j.icon,
              dangerouslySetInnerHTML: { __html: g },
            }),
          r.a.createElement(
            'div',
            { className: a(j.labelRow, f) },
            r.a.createElement('div', { className: j.label }, O),
          ),
          (void 0 !== v || _) &&
            r.a.createElement(
              'div',
              { className: j.shortcut },
              (d = v) && d.split('+').join(' + '),
            ),
          void 0 !== T &&
            r.a.createElement(
              'div',
              {
                onClick: p,
                className: a(j.toolbox, ((n = {}), (n[j.showOnHover] = I), n)),
              },
              T,
            ),
        );
      }
    },
    lpmA: function (e, t, n) {
      e.exports = {
        themesButtonText: 'themesButtonText-2XRZOVS_',
        themesButtonIcon: 'themesButtonIcon-37H2TIZ0',
        defaultsButtonText: 'defaultsButtonText-3NI8VPPT',
        defaultsButtonItem: 'defaultsButtonItem-3mtq1Y8x',
      };
    },
    ttKw: function (e, t, n) {
      e.exports = { scrollable: 'scrollable-1DxdJw53' };
    },
    v1bN: function (e, t, n) {
      e.exports = {
        'tablet-small-breakpoint': 'screen and (max-width: 419px)',
        item: 'item-2xPVYue0',
        hovered: 'hovered-1uf45E05',
        isDisabled: 'isDisabled-1wLqKupj',
        isActive: 'isActive-2j-GhQs_',
        shortcut: 'shortcut-30pveiCO',
        toolbox: 'toolbox-3ulPxfe-',
        withIcon: 'withIcon-1xBjf-oB',
        icon: 'icon-2Qm7YIcz',
        labelRow: 'labelRow-3Q0rdE8-',
        label: 'label-3Xqxy756',
        showOnHover: 'showOnHover-1q6ySzZc',
      };
    },
  },
]);
