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
            Object(o.__extends)(t, e),
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
    '2mql': function (e, t, n) {
      'use strict';
      var o = n('TOwV'),
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
        return o.isMemo(e) ? a : s[e.$$typeof] || i;
      }
      s[o.ForwardRef] = {
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
        f = Object.getPrototypeOf,
        h = Object.prototype;
      e.exports = function e(t, n, o) {
        if ('string' != typeof n) {
          if (h) {
            var i = f(n);
            i && i !== h && e(t, i, o);
          }
          var a = u(n);
          d && (a = a.concat(d(n)));
          for (var s = c(t), m = c(n), v = 0; v < a.length; ++v) {
            var b = a[v];
            if (!(r[b] || (o && o[b]) || (m && m[b]) || (s && s[b]))) {
              var g = p(n, b);
              try {
                l(t, b, g);
              } catch (_) {}
            }
          }
          return t;
        }
        return t;
      };
    },
    '9dlw': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return p;
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
      function p(e) {
        var t = e.controller,
          n = e.children,
          a = e.isOpened,
          p = e.closeOnClickOutside,
          f = void 0 === p || p,
          h = e.doNotCloseOn,
          m = e.onClickOutside,
          v = e.onClose,
          b = Object(o.__rest)(e, [
            'controller',
            'children',
            'isOpened',
            'closeOnClickOutside',
            'doNotCloseOn',
            'onClickOutside',
            'onClose',
          ]),
          g = Object(i.useContext)(u.a),
          _ = Object(d.a)({
            handler: function (e) {
              m && m(e);
              if (!f) return;
              if (h && e.target instanceof Node) {
                var t = s.a.findDOMNode(h);
                if (t instanceof Node && t.contains(e.target)) return;
              }
              v();
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
                { ref: _, style: { pointerEvents: 'auto' } },
                r.a.createElement(
                  l.a,
                  Object(o.__assign)({}, b, {
                    isOpened: a,
                    onClose: v,
                    onScroll: function (t) {
                      var n = e.onScroll;
                      n && n(t);
                      t.stopPropagation();
                    },
                    customCloseDelegate: g,
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
        p = n('ycFu'),
        f = n('tWVy'),
        h = n('aDg1');
      n('17x9');
      n('wx14'),
        n('zLVn'),
        n('2mql'),
        n('TOwV'),
        'undefined' != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement
          ? o.useLayoutEffect
          : o.useEffect;
      n('ANjH');
      var m;
      m = r.unstable_batchedUpdates;
      var v = n('Iivm'),
        b = n('H172'),
        g = n('/KDZ'),
        _ = (n('EsMY'), n('N5tr')),
        y = n('i/MG'),
        w = n('8d0Q'),
        C = n('lpmA');
      function E(e) {
        var t = e.name,
          n = e.onRemove,
          i = e.onClick,
          r = Object(w.b)(),
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
          Object(s.__assign)({}, c),
          o.createElement(_.b, {
            className: C.defaultsButtonItem,
            isActive: !1,
            label: t,
            onClick: l,
            toolbox:
              n &&
              o.createElement(y.a, {
                hidden: !Modernizr.mobiletouch && !a,
                onClick: u,
              }),
          }),
        );
      }
      var P = n('HWhk');
      function O(e) {
        var t = e.model,
          n = e.source;
        return i.a.createElement(
          g.a,
          { rule: 'screen and (max-width: 768px)' },
          function (e) {
            return i.a.createElement(b.a, {
              className: !e && C.themesButtonText,
              items: [
                {
                  value: 'defaults',
                  readonly: !0,
                  content: '',
                  selectedContent: e
                    ? i.a.createElement(v.Icon, {
                        className: C.themesButtonIcon,
                        icon: P,
                      })
                    : window.t('Template'),
                },
                {
                  readonly: !0,
                  content: i.a.createElement(E, {
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
      function S(e) {
        return i.a.createElement(O, Object(s.__assign)({}, e));
      }
      var T,
        x,
        I = n('tmL0'),
        D = n('CW80'),
        k = n('vHME'),
        j = n('3ClC'),
        A = n('qJq3'),
        N = n('Ss5c'),
        B = n('GVHu'),
        q = n('ybVX'),
        L =
          (((T = {})['Elliott Impulse Wave (12345)Degree'] = 'normal'),
          (T['Elliott Triangle Wave (ABCDE)Degree'] = 'normal'),
          (T['Elliott Triple Combo Wave (WXYXZ)Degree'] = 'normal'),
          (T['Elliott Correction Wave (ABC)Degree'] = 'normal'),
          (T['Elliott Double Combo Wave (WXY)Degree'] = 'normal'),
          (T.BarsPatternMode = 'normal'),
          (T.StudyInputSource = 'normal'),
          T),
        R =
          (((x = {}).TextText = 'big'),
          (x.AnchoredTextText = 'big'),
          (x.NoteText = 'big'),
          (x.AnchoredNoteText = 'big'),
          (x.CalloutText = 'big'),
          (x.BalloonText = 'big'),
          x),
        M = n('Q+1u'),
        V = n('bvfV');
      function W(e) {
        return o.createElement(
          q.a.Provider,
          { value: R },
          o.createElement(
            q.b.Provider,
            { value: L },
            e.page &&
              o.createElement(
                M.a,
                { reference: e.pageRef, key: e.tableKey },
                e.page.definitions.value().map(function (e) {
                  return o.createElement(V.a, { key: e.id, definition: e });
                }),
              ),
          ),
        );
      }
      var F = n('ttKw'),
        H = (function (e) {
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
                return Object(D.isLineTool)(t)
                  ? o.createElement(S, { source: t, model: i })
                  : o.createElement(
                      g.a,
                      { rule: 'screen and (max-width: 419px)' },
                      function (e) {
                        return (
                          Object(j.isStudy)(t) &&
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
                  : e instanceof N.LineDataSource
                  ? 'properties_dialog.active_tab.drawing'
                  : e instanceof B.Study
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
                f.a.fire();
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
                n = t.source,
                i = t.onCancel,
                r = this.state.activePageId,
                a =
                  (null === (e = n.properties().title) || void 0 === e
                    ? void 0
                    : e.value()) || n.title();
              return o.createElement(p.a, {
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
                      return Object(s.__assign)(
                        Object(s.__assign)({}, e),
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
                  o.createElement(h.a, {
                    activeTabId: e,
                    onSelect: t._handleSelectPage,
                    tabs: a,
                  }),
                  o.createElement(
                    I.a,
                    { className: F.scrollable, onScroll: t._handleScroll },
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
        return K;
      });
      var K = (function () {
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
              o.createElement(H, {
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
          return h;
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
      function p(e) {
        var t = e.reference,
          n = Object(o.__rest)(e, ['reference']),
          i = Object(o.__assign)(Object(o.__assign)({}, n), { ref: t });
        return r.a.createElement(e.href ? 'a' : 'div', i);
      }
      function f(e) {
        e.stopPropagation();
      }
      function h(e) {
        var t,
          n,
          d,
          h = e.className,
          m = e.title,
          v = e.labelRowClassName,
          b = e.shortcut,
          g = e.forceShowShortcuts,
          _ = e.icon,
          y = e.isActive,
          w = e.isDisabled,
          C = e.isHovered,
          E = e.appearAsDisabled,
          P = e.label,
          O = e.link,
          S = e.showToolboxOnHover,
          T = e.target,
          x = e.toolbox,
          I = e.reference,
          D = e.onMouseOut,
          k = e.onMouseOver,
          j = e.theme,
          A = void 0 === j ? u : j,
          N = Object(l.a)(e),
          B = Object(i.useRef)(null);
        return r.a.createElement(
          p,
          Object(o.__assign)({}, N, {
            className: a(
              h,
              A.item,
              _ && A.withIcon,
              ((t = {}),
              (t[A.isActive] = y),
              (t[A.isDisabled] = w || E),
              (t[A.hovered] = C),
              t),
            ),
            title: m,
            href: O,
            target: T,
            reference: function (e) {
              (B.current = e), I && I(e);
            },
            onClick: function (t) {
              var n = e.dontClosePopup,
                o = e.onClick,
                i = e.onClickArg,
                r = e.trackEventObject;
              if (w) return;
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
              if (1 === t.button && O && n) {
                var i = n.label;
                o && (i += '_mouseWheelClick'),
                  Object(c.trackEvent)(n.category, n.event, i);
              }
            },
            onMouseOver: k,
            onMouseOut: D,
          }),
          void 0 !== _ &&
            r.a.createElement('div', {
              className: A.icon,
              dangerouslySetInnerHTML: { __html: _ },
            }),
          r.a.createElement(
            'div',
            { className: a(A.labelRow, v) },
            r.a.createElement('div', { className: A.label }, P),
          ),
          (void 0 !== b || g) &&
            r.a.createElement(
              'div',
              { className: A.shortcut },
              (d = b) && d.split('+').join(' + '),
            ),
          void 0 !== x &&
            r.a.createElement(
              'div',
              {
                onClick: f,
                className: a(A.toolbox, ((n = {}), (n[A.showOnHover] = S), n)),
              },
              x,
            ),
        );
      }
    },
    QpNh: function (e, t, n) {
      'use strict';
      function o(e) {
        for (
          var t = {}, n = 0, o = Object.entries(e).filter(i);
          n < o.length;
          n++
        ) {
          var r = o[n],
            a = r[0],
            s = r[1];
          t[a] = s;
        }
        return t;
      }
      function i(e) {
        var t = e[0],
          n = e[1];
        return 0 === t.indexOf('data-') && 'string' == typeof n;
      }
      n.d(t, 'a', function () {
        return o;
      });
    },
    R5JZ: function (e, t, n) {
      'use strict';
      function o(e, t, n, o, i) {
        function r(i) {
          if (!(e > i.timeStamp)) {
            var r = i.target;
            void 0 !== n &&
              null !== t &&
              null !== r &&
              r.ownerDocument === o &&
              (t.contains(r) || n(i));
          }
        }
        return (
          i.click && o.addEventListener('click', r, !1),
          i.mouseDown && o.addEventListener('mousedown', r, !1),
          i.touchEnd && o.addEventListener('touchend', r, !1),
          i.touchStart && o.addEventListener('touchstart', r, !1),
          function () {
            o.removeEventListener('click', r, !1),
              o.removeEventListener('mousedown', r, !1),
              o.removeEventListener('touchend', r, !1),
              o.removeEventListener('touchstart', r, !1);
          }
        );
      }
      n.d(t, 'a', function () {
        return o;
      });
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
    'x0D+': function (e, t, n) {
      var o, i, r;
      (i = [t]),
        void 0 ===
          (r =
            'function' ==
            typeof (o = function (e) {
              'use strict';
              function t(e) {
                if (Array.isArray(e)) {
                  for (var t = 0, n = Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                  return n;
                }
                return Array.from(e);
              }
              Object.defineProperty(e, '__esModule', { value: !0 });
              var n = !1;
              if ('undefined' != typeof window) {
                var o = {
                  get passive() {
                    n = !0;
                  },
                };
                window.addEventListener('testPassive', null, o),
                  window.removeEventListener('testPassive', null, o);
              }
              var i =
                  'undefined' != typeof window &&
                  window.navigator &&
                  window.navigator.platform &&
                  /iP(ad|hone|od)/.test(window.navigator.platform),
                r = [],
                a = !1,
                s = -1,
                c = void 0,
                l = void 0,
                u = function (e) {
                  return r.some(function (t) {
                    return !(
                      !t.options.allowTouchMove || !t.options.allowTouchMove(e)
                    );
                  });
                },
                d = function (e) {
                  var t = e || window.event;
                  return (
                    !!u(t.target) ||
                    1 < t.touches.length ||
                    (t.preventDefault && t.preventDefault(), !1)
                  );
                },
                p = function () {
                  setTimeout(function () {
                    void 0 !== l &&
                      ((document.body.style.paddingRight = l), (l = void 0)),
                      void 0 !== c &&
                        ((document.body.style.overflow = c), (c = void 0));
                  });
                };
              (e.disableBodyScroll = function (e, o) {
                if (i) {
                  if (!e)
                    return void console.error(
                      'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.',
                    );
                  if (
                    e &&
                    !r.some(function (t) {
                      return t.targetElement === e;
                    })
                  ) {
                    var p = { targetElement: e, options: o || {} };
                    (r = [].concat(t(r), [p])),
                      (e.ontouchstart = function (e) {
                        1 === e.targetTouches.length &&
                          (s = e.targetTouches[0].clientY);
                      }),
                      (e.ontouchmove = function (t) {
                        var n, o, i, r;
                        1 === t.targetTouches.length &&
                          ((o = e),
                          (r = (n = t).targetTouches[0].clientY - s),
                          !u(n.target) &&
                            ((o && 0 === o.scrollTop && 0 < r) ||
                            ((i = o) &&
                              i.scrollHeight - i.scrollTop <= i.clientHeight &&
                              r < 0)
                              ? d(n)
                              : n.stopPropagation()));
                      }),
                      a ||
                        (document.addEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0,
                        ),
                        (a = !0));
                  }
                } else {
                  (h = o),
                    setTimeout(function () {
                      if (void 0 === l) {
                        var e = !!h && !0 === h.reserveScrollBarGap,
                          t =
                            window.innerWidth -
                            document.documentElement.clientWidth;
                        e &&
                          0 < t &&
                          ((l = document.body.style.paddingRight),
                          (document.body.style.paddingRight = t + 'px'));
                      }
                      void 0 === c &&
                        ((c = document.body.style.overflow),
                        (document.body.style.overflow = 'hidden'));
                    });
                  var f = { targetElement: e, options: o || {} };
                  r = [].concat(t(r), [f]);
                }
                var h;
              }),
                (e.clearAllBodyScrollLocks = function () {
                  i
                    ? (r.forEach(function (e) {
                        (e.targetElement.ontouchstart = null),
                          (e.targetElement.ontouchmove = null);
                      }),
                      a &&
                        (document.removeEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0,
                        ),
                        (a = !1)),
                      (r = []),
                      (s = -1))
                    : (p(), (r = []));
                }),
                (e.enableBodyScroll = function (e) {
                  if (i) {
                    if (!e)
                      return void console.error(
                        'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.',
                      );
                    (e.ontouchstart = null),
                      (e.ontouchmove = null),
                      (r = r.filter(function (t) {
                        return t.targetElement !== e;
                      })),
                      a &&
                        0 === r.length &&
                        (document.removeEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0,
                        ),
                        (a = !1));
                  } else
                    1 === r.length && r[0].targetElement === e
                      ? (p(), (r = []))
                      : (r = r.filter(function (t) {
                          return t.targetElement !== e;
                        }));
                });
            })
              ? o.apply(t, i)
              : o) || (e.exports = r);
    },
  },
]);
