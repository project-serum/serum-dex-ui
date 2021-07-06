(window.webpackJsonp = window.webpackJsonp || []).push([
  ['new-edit-object-dialog'],
  {
    '/YRR': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 16.5l5-5a1.414 1.414 0 0 1 2 0m11-1l-5 5a1.414 1.414 0 0 1-2 0"/><path fill="currentColor" d="M14 5h1v2h-1zM14 10h1v2h-1zM14 15h1v2h-1zM14 20h1v2h-1z"/></svg>';
    },
    '01Ho': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M14.354 6.646L14 6.293l-.354.353-7 7-.353.354.353.354 7 7 .354.353.354-.353 7-7 .353-.354-.353-.354-7-7z"/></svg>';
    },
    '4Njr': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M14 21l7.424-6.114a.5.5 0 0 0-.318-.886H18.5V7h-9v7H6.894a.5.5 0 0 0-.318.886L14 21z"/></svg>';
    },
    '4ZyK': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8.5 22v-5.5m0 0v-8L12 7l4 2.5 3.5-1v8l-3.5 1-4-2.5-3.5 1.5z"/></svg>';
    },
    '4pMH': function (e, t, n) {},
    '5ijr': function (e) {
      e.exports = JSON.parse(
        '{"switcherWrapper":"switcherWrapper-1wFH-_jm","size-small":"size-small-1gT-kZYO","size-large":"size-large-MOSirnj_","intent-select":"intent-select-2kut8F29","switcherThumbWrapper":"switcherThumbWrapper-2u191lDO","input":"input-J7QIcTTo","switcherTrack":"switcherTrack-2XruDVTa","intent-default":"intent-default-3soo5rvS","switcherThumb":"switcherThumb-2yuEucci","focus":"focus-uZMRkCO0"}',
      );
    },
    '9FXF': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M6.5 12.5v8h3v-8h-3zM12.5 7.5v13h3v-13h-3zM18.5 15.5v5h3v-5h-3z"/></svg>';
    },
    D2im: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M17 8.5h7M20.5 12V5M10 19.5h7M13.5 23v-7M3 12.5h7M6.5 16V9"/></svg>';
    },
    Dj0x: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M11 18.5h-.5V8.793l.146-.147 3-3L14 5.293l.354.353 3 3 .146.147V18.5H11z"/></svg>';
    },
    FzLb: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        n('mrSG').__exportStar(n('j3s+'), t);
    },
    KKsp: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var r = n('q1tI'),
        o = n('TSYQ'),
        a = n.n(o),
        l = n('NOPy');
      function i(e) {
        var t = e.size,
          n = void 0 === t ? 'normal' : t,
          o = e.className;
        return r.createElement('div', {
          className: a()(
            l.separator,
            'small' === n && l.small,
            'normal' === n && l.normal,
            'large' === n && l.large,
            o,
          ),
        });
      }
    },
    Ly1u: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M7.5 7.5h13v13h-13z"/></svg>';
    },
    MB0Y: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return u;
      }),
        n.d(t, 'b', function () {
          return d;
        });
      var r = n('mrSG'),
        o = n('q1tI'),
        a = n.n(o),
        l = n('TSYQ'),
        i = n.n(l),
        s = n('FzLb'),
        c = n('QpNh'),
        p = n('OP2o'),
        u = p;
      function d(e) {
        var t = e.className,
          n = e.checked,
          o = e.id,
          l = e.label,
          u = e.labelDescription,
          d = e.value,
          h = e.preventLabelHighlight,
          m = e.reference,
          v = e.switchReference,
          y = e.theme,
          f = void 0 === y ? p : y,
          g = i()(f.label, n && !h && f.labelOn),
          b = i()(t, f.wrapper, n && f.wrapperWithOnLabel);
        return a.a.createElement(
          'label',
          { className: b, htmlFor: o, ref: m },
          a.a.createElement(
            'div',
            { className: f.labelRow },
            a.a.createElement('div', { className: g }, l),
            u && a.a.createElement('div', { className: f.labelHint }, u),
          ),
          a.a.createElement(
            s.Switch,
            Object(r.__assign)(
              {
                className: f.switch,
                reference: v,
                checked: n,
                onChange: function (t) {
                  var n = t.target.checked;
                  void 0 !== e.onChange && e.onChange(n);
                },
                value: d,
                tabIndex: -1,
                id: o,
              },
              Object(c.a)(e),
            ),
          ),
        );
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
    OP2o: function (e, t, n) {
      e.exports = {
        wrapper: 'wrapper-3Sj-FzgR',
        hovered: 'hovered-1G0yygIe',
        labelRow: 'labelRow-3h7cSJ_L',
        label: 'label-3iLxp29M',
        labelHint: 'labelHint-3qxeiVfa',
        labelOn: 'labelOn-10QGwv2n',
      };
    },
    V1YL: function (e, t, n) {
      e.exports = {
        recalculateCheckbox: 'recalculateCheckbox-1Xa1TR7D',
        descriptionCell: 'descriptionCell-3oIbGAm4',
      };
    },
    W7Dn: function (e, t, n) {
      e.exports = { scrollable: 'scrollable-mKj9lAM_' };
    },
    Y5hB: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('mrSG'),
        o = (n('YFKU'), n('i8i4')),
        a = n('q1tI'),
        l = n.n(a),
        i = n('Eyy1'),
        s = (n('bSeV'), n('CLNU')),
        c = n('Vdly'),
        p = n('Kxc7'),
        u = n('FQhm'),
        d = n('PC8g'),
        h = n('aDg1'),
        m = n('vHME'),
        v = n('ycFu'),
        y = n('tWVy'),
        f = n('tmL0'),
        g = n('3ClC'),
        b = n('W7Dn'),
        w = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            (n._renderFooterLeft = function (e) {
              var t = n.props,
                r = t.source,
                o = t.model;
              if (Object(g.isStudy)(r))
                return a.createElement(m.a, {
                  model: o,
                  source: r,
                  mode: e ? 'compact' : 'normal',
                });
              throw new TypeError('Unsupported source type.');
            }),
              (n._handleSelect = function (e) {
                n.setState({ activeTabId: e }, function () {
                  n._requestResize && n._requestResize();
                }),
                  n.props.onActiveTabChanged && n.props.onActiveTabChanged(e);
              }),
              (n._handleScroll = function () {
                y.a.fire();
              }),
              (n._handleSubmit = function () {
                n.props.onSubmit(), n.props.onClose();
              });
            var r = n.props,
              o = r.pages,
              l = r.initialActiveTab;
            return (
              (n.state = {
                activeTabId: o.allIds.includes(l) ? l : o.allIds[0],
              }),
              n
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.title,
                n = e.onCancel,
                r = e.onClose,
                o = this.state.activeTabId;
              return a.createElement(v.a, {
                dataName: 'indicator-properties-dialog',
                title: t,
                isOpened: !0,
                onSubmit: this._handleSubmit,
                onCancel: n,
                onClickOutside: r,
                onClose: r,
                footerLeftRenderer: this._renderFooterLeft,
                render: this._renderChildren(o),
                submitOnEnterKey: !1,
              });
            }),
            (t.prototype._renderChildren = function (e) {
              var t = this;
              return function (n) {
                var r = n.requestResize;
                t._requestResize = r;
                var o = t.props,
                  l = o.pages,
                  i = o.source,
                  s = o.model,
                  c = l.byId[e];
                'Component' in c || c.page;
                return a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(h.a, {
                    activeTabId: e,
                    onSelect: t._handleSelect,
                    tabs: l,
                  }),
                  a.createElement(
                    f.a,
                    { className: b.scrollable, onScroll: t._handleScroll },
                    'Component' in c &&
                      a.createElement(c.Component, { source: i, model: s }),
                  ),
                );
              };
            }),
            t
          );
        })(a.PureComponent),
        _ = n('PjdP'),
        C = n('HfwS'),
        S = n('HGyE'),
        E = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.input,
                n = e.value,
                o = e.onChange,
                l = e.onBlur,
                i = e.onKeyDown,
                s = t.options.reduce(function (e, t) {
                  return (e[t] = 'NONE' === t ? window.t('Default') : t), e;
                }, {}),
                c = Object(r.__assign)(Object(r.__assign)({}, t), {
                  optionsTitles: s,
                });
              return a.createElement(S.b, {
                input: c,
                value: n,
                onChange: o,
                onBlur: l,
                onKeyDown: i,
              });
            }),
            t
          );
        })(a.PureComponent),
        P = Object(C.a)(E),
        x = n('h5Dg'),
        O = n('rJEJ'),
        j = n('XDrA'),
        k = n('+8gn'),
        T = n('Q+1u'),
        L = (n('HbRj'), a.createContext(null)),
        M = window.t('{currency} per order'),
        N = window.t('{currency} per contract'),
        I = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e,
                t = this.props.input,
                n = Object(i.ensureNotNull)(this.context),
                o =
                  (((e = {}).percent = '%'),
                  (e.cash_per_order = M.format({ currency: n })),
                  (e.cash_per_contract = N.format({ currency: n })),
                  e),
                l = Object(r.__assign)(Object(r.__assign)({}, t), {
                  optionsTitles: o,
                });
              return a.createElement(S.a, { input: l });
            }),
            (t.contextType = L),
            t
          );
        })(a.PureComponent),
        V = window.t('Contracts'),
        z = window.t('% of equity'),
        R = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e,
                t = this.props.input,
                n = Object(i.ensureNotNull)(this.context),
                o =
                  (((e = {}).fixed = V),
                  (e.cash_per_order = n),
                  (e.percent_of_equity = z),
                  e),
                l = Object(r.__assign)(Object(r.__assign)({}, t), {
                  optionsTitles: o,
                });
              return a.createElement(S.a, { input: l });
            }),
            (t.contextType = L),
            t
          );
        })(a.PureComponent),
        D = n('V1YL'),
        B = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props.inputs;
              return a.createElement(
                T.a,
                null,
                a.createElement(
                  O.a,
                  { label: window.t('Initial capital') },
                  a.createElement(_.a, { input: e.initial_capital }),
                ),
                a.createElement(
                  O.a,
                  { label: window.t('Base currency') },
                  a.createElement(P, { input: e.currency }),
                ),
                a.createElement(
                  O.a,
                  { label: window.t('Order size'), labelAlign: 'adaptive' },
                  a.createElement(
                    j.a,
                    null,
                    a.createElement(_.a, { input: e.default_qty_value }),
                    a.createElement(R, { input: e.default_qty_type }),
                  ),
                ),
                a.createElement(
                  O.a,
                  { label: window.t('Pyramiding') },
                  a.createElement(
                    'span',
                    null,
                    a.createElement(_.a, { input: e.pyramiding }),
                  ),
                  a.createElement(
                    'span',
                    { className: D.descriptionCell },
                    window.t('orders', { context: 'Pyramiding: count orders' }),
                  ),
                ),
                a.createElement(T.a.Separator, null),
                a.createElement(
                  O.a,
                  { label: window.t('Commission'), labelAlign: 'adaptive' },
                  a.createElement(
                    j.a,
                    null,
                    a.createElement(_.a, { input: e.commission_value }),
                    a.createElement(I, { input: e.commission_type }),
                  ),
                ),
                a.createElement(
                  O.a,
                  { label: window.t('Verify Price for Limit Orders') },
                  a.createElement(
                    'span',
                    null,
                    a.createElement(_.a, {
                      input: e.backtest_fill_limits_assumption,
                    }),
                  ),
                  a.createElement(
                    'span',
                    { className: D.descriptionCell },
                    window.t('ticks', { context: 'slippage ... ticks' }),
                  ),
                ),
                a.createElement(
                  O.a,
                  { label: window.t('Slippage') },
                  a.createElement(
                    'span',
                    null,
                    a.createElement(_.a, { input: e.slippage }),
                  ),
                  a.createElement(
                    'span',
                    { className: D.descriptionCell },
                    window.t('ticks', { context: 'slippage ... ticks' }),
                  ),
                ),
                a.createElement(T.a.Separator, null),
                a.createElement(
                  O.a,
                  { label: window.t('Recalculate'), labelAlign: 'top' },
                  a.createElement(
                    'div',
                    null,
                    a.createElement(
                      'div',
                      { className: D.recalculateCheckbox },
                      a.createElement(x.a, {
                        label: window.t('After Order is Filled'),
                        input: e.calc_on_order_fills,
                      }),
                    ),
                    a.createElement(
                      'div',
                      { className: D.recalculateCheckbox },
                      a.createElement(x.a, {
                        label: window.t('On Every Tick'),
                        input: e.calc_on_every_tick,
                      }),
                    ),
                  ),
                ),
              );
            }),
            (t.contextType = k.b),
            t
          );
        })(a.PureComponent);
      function A(e) {
        var t = e.property,
          n = e.model,
          r = e.inputs,
          o = e.study;
        return a.createElement(
          k.a,
          { property: t.inputs, model: n, study: o },
          a.createElement(B, { inputs: r }),
        );
      }
      var H = n('z61+'),
        F = n('uOxu'),
        G = Object(F.getLogger)(
          'Platform.GUI.PropertyDialog.Indicators.StrategyPage',
        ),
        W = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            n._handleWatchedDataChange = function () {
              n.setState({ currency: n._getCurrency() });
            };
            var r = n.props.source;
            if (((n._source = r), !Object(g.isStudy)(n._source)))
              throw new TypeError('Strategy page works only for study.');
            n._properties = r.properties();
            var o = r.metaInfo(),
              a = new H.a(o);
            return (
              (n._inputs = a.getStrategyProperties()),
              (n.state = { currency: n._getCurrency() }),
              n
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              this._source.watchedData.subscribe(this._handleWatchedDataChange);
            }),
            (t.prototype.componentWillUnmount = function () {
              this._source.watchedData.unsubscribe(
                this._handleWatchedDataChange,
              );
            }),
            (t.prototype.render = function () {
              return a.createElement(
                L.Provider,
                { value: this.state.currency },
                a.createElement(A, {
                  inputs: this._inputs,
                  property: this._properties,
                  model: this.props.model,
                  study: this.props.source,
                }),
              );
            }),
            (t.prototype._getCurrency = function () {
              var e = this._source.reportData();
              return null === e || void 0 === e.currency
                ? ((void 0 !== this.state && null === this.state.currency) ||
                    G.logWarn("Can't obtain currency from strategy report"),
                  null)
                : e.currency;
            }),
            t
          );
        })(a.PureComponent),
        U = n('5Ssy'),
        q = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._properties = n.props.source.properties()),
              (n._inputs = new H.a(
                n.props.source.metaInfo(),
              ).getUserEditableInputs()),
              n
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              return a.createElement(U.a, {
                property: this._properties,
                model: this.props.model,
                study: this.props.source,
                inputs: this._inputs,
              });
            }),
            t
          );
        })(a.PureComponent),
        Y = n('23IT'),
        Q = n('0YCj'),
        K = n.n(Q),
        J = a.createContext(null);
      var X = a.createContext(null),
        Z = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._setValue = function (e, n, r) {
                t.props.model.setProperty(e, n, r);
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this;
              this.props.property.subscribe(this, function () {
                return e.forceUpdate();
              });
            }),
            (t.prototype.componentWillUnmount = function () {
              this.props.property.unsubscribeAll(this);
            }),
            (t.prototype.render = function () {
              var e = { setValue: this._setValue };
              return a.createElement(
                X.Provider,
                { value: e },
                this.props.children,
              );
            }),
            t
          );
        })(a.PureComponent);
      function $(e, t) {
        return (function (e, t) {
          return a.createElement(J.Consumer, null, function (n) {
            return n
              ? a.createElement(
                  e,
                  Object(r.__assign)({}, Object.assign({ model: n }, t)),
                )
              : null;
          });
        })(function (n) {
          var o = n.model;
          return a.createElement(
            Z,
            { model: o, property: t.property },
            a.createElement(e, Object(r.__assign)({}, t)),
          );
        }, t);
      }
      function ee(e) {
        return Array.isArray(e) ? e[0].value() : e.value();
      }
      function te(e, t) {
        if (Array.isArray(e))
          for (var n = 0, r = e; n < r.length; n++) {
            t(r[n]);
          }
        else t(e);
      }
      var ne,
        re = window.t('Change Visibility'),
        oe = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._onChange = function (e) {
                var n = t.context.setValue,
                  r = t.props.visible;
                r &&
                  te(r, function (t) {
                    return n(t, e, re);
                  });
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.id,
                n = e.title,
                r = e.visible,
                o = e.disabled,
                l = Object(s.clean)(window.t(n, { context: 'input' }), !0);
              return a.createElement(x.b, {
                label: l,
                disabled: o,
                input: { id: t, type: 'bool', defval: !0, name: 'visible' },
                value: !r || ee(r),
                onChange: this._onChange,
              });
            }),
            (t.contextType = X),
            t
          );
        })(a.PureComponent),
        ae = n('KKsp'),
        le = n('MB0Y'),
        ie = n('CHgb'),
        se = n('xHjM'),
        ce = n('/YRR'),
        pe = n('rlj/'),
        ue = n('ZtdB'),
        de = n('D2im'),
        he = n('tH7p'),
        me = n('tQCG'),
        ve = n('9FXF'),
        ye = n('sPU+'),
        fe =
          (((ne = {})[Y.LineStudyPlotStyle.Line] = {
            type: Y.LineStudyPlotStyle.Line,
            order: 0,
            icon: se,
            label: window.t('Line'),
          }),
          (ne[Y.LineStudyPlotStyle.LineWithBreaks] = {
            type: Y.LineStudyPlotStyle.LineWithBreaks,
            order: 1,
            icon: ce,
            label: window.t('Line With Breaks'),
          }),
          (ne[Y.LineStudyPlotStyle.StepLine] = {
            type: Y.LineStudyPlotStyle.StepLine,
            order: 2,
            icon: pe,
            label: window.t('Step Line'),
          }),
          (ne[Y.LineStudyPlotStyle.Histogram] = {
            type: Y.LineStudyPlotStyle.Histogram,
            order: 3,
            icon: ue,
            label: window.t('Histogram'),
          }),
          (ne[Y.LineStudyPlotStyle.Cross] = {
            type: Y.LineStudyPlotStyle.Cross,
            order: 4,
            icon: de,
            label: window.t('Cross', { context: 'chart_type' }),
          }),
          (ne[Y.LineStudyPlotStyle.Area] = {
            type: Y.LineStudyPlotStyle.Area,
            order: 5,
            icon: he,
            label: window.t('Area'),
          }),
          (ne[Y.LineStudyPlotStyle.AreaWithBreaks] = {
            type: Y.LineStudyPlotStyle.AreaWithBreaks,
            order: 6,
            icon: me,
            label: window.t('Area With Breaks'),
          }),
          (ne[Y.LineStudyPlotStyle.Columns] = {
            type: Y.LineStudyPlotStyle.Columns,
            order: 7,
            icon: ve,
            label: window.t('Columns'),
          }),
          (ne[Y.LineStudyPlotStyle.Circles] = {
            type: Y.LineStudyPlotStyle.Circles,
            order: 8,
            icon: ye,
            label: window.t('Circles'),
          }),
          ne),
        ge = Object.values(fe)
          .sort(function (e, t) {
            return e.order - t.order;
          })
          .map(function (e) {
            return {
              value: e.type,
              selectedContent: l.a.createElement(ie.a, { icon: e.icon }),
              content: l.a.createElement(ie.b, {
                icon: e.icon,
                label: e.label,
              }),
            };
          }),
        be = window.t('Price Line'),
        we = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.plotType,
                n = e.className,
                o = e.priceLine,
                a = e.plotTypeChange,
                i = e.priceLineChange,
                s = e.disabled,
                c = {
                  readonly: !0,
                  content: l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(le.b, {
                      id: 'PlotTypePriceLineSwitch',
                      checked: o,
                      label: be,
                      preventLabelHighlight: !0,
                      value: 'priceLineSwitcher',
                      onChange: i,
                    }),
                    l.a.createElement(ae.a, null),
                  ),
                };
              return l.a.createElement(ie.c, {
                disabled: s,
                className: n,
                hideArrowButton: !0,
                items: Object(r.__spreadArrays)([c], ge),
                value: t,
                onChange: a,
              });
            }),
            t
          );
        })(l.a.PureComponent),
        _e = n('eJTA'),
        Ce = n('Tmoa'),
        Se = n('7MId'),
        Ee = window.t('Change Thickness'),
        Pe = window.t('Change Color'),
        xe = window.t('Change Opacity'),
        Oe = [1, 2, 3, 4],
        je = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._trackEventLabel = null),
              (t._getTransparencyValue = function () {
                var e = t.props.transparency;
                return e ? e.value() : 0;
              }),
              (t._getOpacityValue = function () {
                var e = ee(t.props.color);
                if (e)
                  return Object(Ce.isHexColor)(e)
                    ? Object(Ce.transparencyToAlpha)(t._getTransparencyValue())
                    : Object(_e.parseRgba)(e)[3];
              }),
              (t._getColorValueInHex = function () {
                var e = ee(t.props.color);
                return e
                  ? Object(Ce.isHexColor)(e)
                    ? e
                    : Object(_e.rgbToHexString)(Object(_e.parseRgb)(e))
                  : null;
              }),
              (t._onThicknessChange = function (e) {
                var n = t.props.thickness;
                void 0 !== n && t._setProperty(n, e, Ee);
              }),
              (t._onColorChange = function (e) {
                var n = t.props,
                  r = n.color,
                  o = n.isPaletteColor,
                  a = ee(r),
                  l = 0;
                a &&
                  (l = Object(Ce.isHexColor)(a)
                    ? t._getTransparencyValue()
                    : Object(Ce.alphaToTransparency)(
                        Object(_e.parseRgba)(a)[3],
                      )),
                  t._setProperty(
                    r,
                    Object(Ce.generateColor)(String(e), l, !0),
                    Pe,
                  ),
                  (t._trackEventLabel =
                    'Plot color > ' + (o ? 'Palette' : 'Single'));
              }),
              (t._onOpacityChange = function (e) {
                var n = t.props.color,
                  r = ee(n);
                t._setProperty(
                  n,
                  Object(Ce.generateColor)(
                    r,
                    Object(Ce.alphaToTransparency)(e),
                    !0,
                  ),
                  xe,
                );
              }),
              (t._onPopupClose = function () {
                t._trackEventLabel &&
                  (Object(d.trackEvent)(
                    'GUI',
                    'Study settings',
                    t._trackEventLabel,
                  ),
                  (t._trackEventLabel = null));
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.componentWillUnmount = function () {
              this._onPopupClose();
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.selectOpacity,
                n = void 0 === t || t,
                r = e.disabled;
              return l.a.createElement(Se.a, {
                disabled: r,
                color: this._getColorValueInHex(),
                selectOpacity: n,
                opacity: this._getOpacityValue(),
                thickness: this._getThicknessValue(),
                thicknessItems: Oe,
                onColorChange: this._onColorChange,
                onOpacityChange: this._onOpacityChange,
                onThicknessChange: this._onThicknessChange,
                onPopupClose: this._onPopupClose,
              });
            }),
            (t.prototype._getThicknessValue = function () {
              var e = this.props.thickness;
              return e ? ee(e) : void 0;
            }),
            (t.prototype._setProperty = function (e, t, n) {
              var r = this.context.setValue;
              te(e, function (e) {
                return r(e, t, n);
              });
            }),
            (t.contextType = X),
            t
          );
        })(l.a.PureComponent),
        ke = n('wwEg'),
        Te = window.t('Change Plot Type'),
        Le = window.t('Change Price Line'),
        Me = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._onPlotTypeChange = function (e) {
                var n = t.context.setValue,
                  r = t.props.styleProp.plottype;
                r && n(r, e, Te);
              }),
              (t._onPriceLineChange = function (e) {
                var n = t.context.setValue,
                  r = t.props.styleProp.trackPrice;
                r && n(r, e, Le);
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.paletteColor,
                n = e.paletteColorProps,
                r = e.styleProp,
                o = e.isLine,
                l = e.hasPlotTypeSelect,
                i = e.grouped,
                s = n.childs();
              return a.createElement(
                O.a,
                {
                  grouped: i,
                  label: a.createElement(
                    'div',
                    { className: ke.childRowContainer },
                    window.t(t.name, { context: 'input' }),
                  ),
                },
                a.createElement(je, {
                  disabled: !r.visible.value(),
                  color: s.color,
                  transparency: r.transparency,
                  thickness: o ? s.width : void 0,
                  isPaletteColor: !0,
                }),
                o && l && r.plottype && r.trackPrice
                  ? a.createElement(we, {
                      disabled: !r.visible.value(),
                      className: ke.smallStyleControl,
                      plotType: r.plottype.value(),
                      priceLine: r.trackPrice.value(),
                      plotTypeChange: this._onPlotTypeChange,
                      priceLineChange: this._onPriceLineChange,
                    })
                  : null,
              );
            }),
            (t.contextType = X),
            t
          );
        })(a.PureComponent);
      var Ne = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.plot,
                n = e.area,
                r = e.palette,
                o = e.paletteProps,
                l = e.hideVisibilitySwitch,
                s = e.styleProp,
                c = t ? t.id : Object(i.ensureDefined)(n).id,
                p = !c.startsWith('fill') && t && Object(Y.isLinePlot)(t);
              return a.createElement(
                a.Fragment,
                null,
                !l &&
                  a.createElement(
                    T.a.Row,
                    null,
                    a.createElement(
                      T.a.Cell,
                      { placement: 'first', colSpan: 2, grouped: !0 },
                      a.createElement(oe, {
                        id: c,
                        title: n ? n.title : s.title.value(),
                        visible: s.visible,
                      }),
                    ),
                  ),
                (function (e, t, n, r) {
                  var o = e.colors,
                    l = t.colors;
                  return Object.keys(o).map(function (e, t) {
                    return a.createElement(Me, {
                      key: e,
                      grouped: !0,
                      paletteColor: Object(i.ensureDefined)(o[e]),
                      paletteColorProps: Object(i.ensureDefined)(l[e]),
                      styleProp: n,
                      isLine: r,
                      hasPlotTypeSelect: 0 === t,
                    });
                  });
                })(r, o, s, p),
                a.createElement(T.a.GroupSeparator, null),
              );
            }),
            (t.contextType = X),
            t
          );
        })(a.PureComponent),
        Ie = window.t('Change Plot Type'),
        Ve = window.t('Change Price Line'),
        ze = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._onPlotTypeChange = function (e) {
                var n = t.context.setValue,
                  r = t.props.property.plottype;
                r && n(r, e, Ie);
              }),
              (t._onPriceLineChange = function (e) {
                var n = t.context.setValue,
                  r = t.props.property.trackPrice;
                r && n(r, e, Ve);
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.id,
                n = e.property,
                r = n.title,
                o = n.color,
                l = n.plottype,
                i = n.linewidth,
                s = n.transparency,
                c = n.trackPrice,
                p = n.visible;
              return a.createElement(
                O.a,
                {
                  label: a.createElement(oe, {
                    id: t,
                    title: r.value(),
                    visible: p,
                  }),
                },
                a.createElement(je, {
                  disabled: !p.value(),
                  color: o,
                  transparency: s,
                  thickness: i,
                }),
                a.createElement(we, {
                  disabled: !p.value(),
                  className: ke.smallStyleControl,
                  plotType: l.value(),
                  priceLine: c.value(),
                  plotTypeChange: this._onPlotTypeChange,
                  priceLineChange: this._onPriceLineChange,
                }),
              );
            }),
            (t.contextType = X),
            t
          );
        })(a.PureComponent),
        Re = a.createContext(null),
        De = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.id,
                n = e.property,
                r = n.colorup,
                o = n.colordown,
                l = n.transparency,
                s = n.visible;
              return a.createElement(Re.Consumer, null, function (e) {
                return a.createElement(
                  O.a,
                  {
                    label: a.createElement(oe, {
                      id: t,
                      title: Be(Object(i.ensureNotNull)(e), t),
                      visible: s,
                    }),
                  },
                  a.createElement(je, {
                    disabled: !s.value(),
                    color: r,
                    transparency: l,
                  }),
                  a.createElement(
                    'span',
                    { className: ke.additionalSelect },
                    a.createElement(je, {
                      disabled: !s.value(),
                      color: o,
                      transparency: l,
                    }),
                  ),
                );
              });
            }),
            (t.contextType = X),
            t
          );
        })(a.PureComponent);
      function Be(e, t) {
        var n = Object(i.ensureDefined)(e.metaInfo().styles),
          r = Object(i.ensureDefined)(n[t]).title;
        return Object(i.ensureDefined)(r);
      }
      var Ae,
        He,
        Fe = n('/SnT'),
        Ge = n.n(Fe),
        We = n('TSYQ'),
        Ue = n.n(We),
        qe = n('3G1X'),
        Ye = n('H172'),
        Qe = n('972a'),
        Ke =
          (((Ae = {})[Qe.MarkLocation.AboveBar] = {
            value: Qe.MarkLocation.AboveBar,
            content: window.t('Above Bar'),
            order: 0,
          }),
          (Ae[Qe.MarkLocation.BelowBar] = {
            value: Qe.MarkLocation.BelowBar,
            content: window.t('Below Bar'),
            order: 1,
          }),
          (Ae[Qe.MarkLocation.Top] = {
            value: Qe.MarkLocation.Top,
            content: window.t('Top'),
            order: 2,
          }),
          (Ae[Qe.MarkLocation.Bottom] = {
            value: Qe.MarkLocation.Bottom,
            content: window.t('Bottom'),
            order: 3,
          }),
          (Ae[Qe.MarkLocation.Absolute] = {
            value: Qe.MarkLocation.Absolute,
            content: window.t('Absolute'),
            order: 4,
          }),
          Ae),
        Je = Object.values(Ke).sort(function (e, t) {
          return e.order - t.order;
        }),
        Xe = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.shapeLocation,
                n = e.className,
                r = e.menuItemClassName,
                o = e.shapeLocationChange,
                l = e.disabled;
              return a.createElement(Ye.a, {
                disabled: l,
                className: n,
                menuItemClassName: r,
                items: Je,
                value: t,
                onChange: o,
              });
            }),
            t
          );
        })(a.PureComponent),
        Ze = window.t('Change Char'),
        $e = window.t('Change Location'),
        et = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._onCharChange = function (e) {
                var n = t.context.setValue,
                  r = e.currentTarget.value.trim(),
                  o = Ge()(r),
                  a = 0 === o.length ? '' : o[o.length - 1];
                n(t.props.property.char, a, Ze);
              }),
              (t._onLocationChange = function (e) {
                (0, t.context.setValue)(t.props.property.location, e, $e);
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.id,
                n = e.property,
                r = n.title,
                o = n.color,
                l = n.transparency,
                i = n.char,
                s = n.location,
                c = n.visible,
                p = e.hasPalette;
              return a.createElement(
                O.a,
                {
                  grouped: p,
                  label: a.createElement(oe, {
                    id: t,
                    title: r.value(),
                    visible: c,
                  }),
                },
                !p &&
                  a.createElement(je, {
                    disabled: !c.value(),
                    color: o,
                    transparency: l,
                  }),
                a.createElement(qe.a, {
                  disabled: !c.value(),
                  className: ke.smallStyleControl,
                  value: i.value(),
                  onChange: this._onCharChange,
                }),
                a.createElement(Xe, {
                  disabled: !c.value(),
                  className: We(ke.defaultSelect, ke.additionalSelect),
                  menuItemClassName: ke.defaultSelectItem,
                  shapeLocation: s.value(),
                  shapeLocationChange: this._onLocationChange,
                }),
              );
            }),
            (t.contextType = X),
            t
          );
        })(a.PureComponent),
        tt = n('Nu4p'),
        nt = n('4Njr'),
        rt = n('lOpG'),
        ot = n('br6c'),
        at = n('m+Gx'),
        lt = n('01Ho'),
        it = n('4ZyK'),
        st = n('kMtk'),
        ct = n('Dj0x'),
        pt = n('Ly1u'),
        ut = n('leq5'),
        dt = n('flzi'),
        ht = n('iB0j'),
        mt =
          (((He = {}).arrow_down = nt),
          (He.arrow_up = rt),
          (He.circle = ot),
          (He.cross = at),
          (He.diamond = lt),
          (He.flag = it),
          (He.label_down = st),
          (He.label_up = ct),
          (He.square = pt),
          (He.triangle_down = ut),
          (He.triangle_up = dt),
          (He.x_cross = ht),
          He);
      function vt(e) {
        return mt[e];
      }
      var yt = [];
      Object.keys(tt.plotShapesData).forEach(function (e) {
        var t = tt.plotShapesData[e];
        yt.push({
          value: t.id,
          selectedContent: l.a.createElement(ie.a, { icon: vt(t.icon) }),
          content: l.a.createElement(ie.b, {
            icon: vt(t.icon),
            label: t.guiName,
          }),
        });
      });
      var ft = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.shapeStyleId,
                n = e.className,
                r = e.shapeStyleChange,
                o = e.disabled;
              return l.a.createElement(ie.c, {
                disabled: o,
                className: n,
                hideArrowButton: !0,
                items: yt,
                value: t,
                onChange: r,
              });
            }),
            t
          );
        })(l.a.PureComponent),
        gt = window.t('Change Shape'),
        bt = window.t('Change Location'),
        wt = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._onPlotTypeChange = function (e) {
                (0, t.context.setValue)(t.props.property.plottype, e, gt);
              }),
              (t._onLocationChange = function (e) {
                (0, t.context.setValue)(t.props.property.location, e, bt);
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.id,
                n = e.hasPalette,
                r = e.property,
                o = r.title,
                l = r.color,
                i = r.transparency,
                s = r.plottype,
                c = r.location,
                p = r.visible;
              return a.createElement(
                O.a,
                {
                  grouped: n,
                  label: a.createElement(oe, {
                    id: t,
                    title: o.value(),
                    visible: p,
                  }),
                },
                !n &&
                  a.createElement(je, {
                    disabled: !p.value(),
                    color: l,
                    transparency: i,
                  }),
                a.createElement(ft, {
                  disabled: !p.value(),
                  className: ke.smallStyleControl,
                  shapeStyleId: s.value(),
                  shapeStyleChange: this._onPlotTypeChange,
                }),
                a.createElement(Xe, {
                  disabled: !p.value(),
                  className: We(ke.defaultSelect, ke.additionalSelect),
                  menuItemClassName: ke.defaultSelectItem,
                  shapeLocation: c.value(),
                  shapeLocationChange: this._onLocationChange,
                }),
              );
            }),
            (t.contextType = X),
            t
          );
        })(a.PureComponent),
        _t = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.id,
                n = e.title,
                r = e.visible,
                o = e.color,
                l = e.transparency,
                i = e.thickness,
                s = e.children,
                c = e.switchable,
                p = void 0 === c || c;
              return a.createElement(
                O.a,
                {
                  label: p
                    ? a.createElement(oe, { id: t, title: n, visible: r })
                    : n,
                },
                a.createElement(je, {
                  disabled: r && !(Array.isArray(r) ? r[0].value() : r.value()),
                  color: o,
                  transparency: l,
                  thickness: i,
                }),
                s,
              );
            }),
            (t.contextType = X),
            t
          );
        })(a.PureComponent),
        Ct = Object(F.getLogger)('Chart.Study.PropertyPage'),
        St = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.plot,
                n = e.palette,
                r = e.paletteProps,
                o = e.study,
                l = t.id,
                s = o.properties().styles[l],
                c = t.type;
              if ('line' === c || 'bar_colorer' === c || 'bg_colorer' === c)
                return n && r
                  ? a.createElement(Ne, {
                      plot: t,
                      palette: n,
                      paletteProps: r,
                      styleProp: s,
                    })
                  : a.createElement(ze, { id: l, property: s });
              if ('arrows' === c)
                return a.createElement(De, { id: l, property: s });
              if ('chars' === c || 'shapes' === c)
                return a.createElement(
                  a.Fragment,
                  null,
                  'chars' === c
                    ? a.createElement(et, {
                        id: l,
                        property: s,
                        hasPalette: Boolean(n),
                      })
                    : a.createElement(wt, {
                        id: l,
                        property: s,
                        hasPalette: Boolean(n),
                      }),
                  n &&
                    r &&
                    a.createElement(Ne, {
                      plot: t,
                      palette: n,
                      paletteProps: r,
                      hideVisibilitySwitch: !0,
                      styleProp: s,
                    }),
                );
              if (Object(Y.isOhlcPlot)(t)) {
                var p = t.target,
                  u = Object(i.ensureDefined)(o.metaInfo().defaults.ohlcPlots)[
                    p
                  ],
                  d = o.properties().ohlcPlots[p],
                  h = void 0;
                h =
                  n && r
                    ? a.createElement(Ne, {
                        plot: t,
                        palette: n,
                        paletteProps: r,
                        styleProp: d,
                      })
                    : a.createElement(_t, {
                        id: p,
                        title: d.title.value(),
                        color: d.color,
                        visible: d.visible,
                        transparency: d.transparency,
                      });
                var m = void 0;
                return (
                  void 0 !== u &&
                    Object(Y.isOhlcPlotStyleCandles)(u) &&
                    (m = a.createElement(
                      a.Fragment,
                      null,
                      a.createElement(_t, {
                        id: p,
                        title: window.t('Wick'),
                        visible: d.drawWick,
                        color: d.wickColor,
                        transparency: d.transparency,
                      }),
                      a.createElement(_t, {
                        id: p,
                        title: window.t('Border'),
                        visible: d.drawBorder,
                        color: d.borderColor,
                        transparency: d.transparency,
                      }),
                    )),
                  a.createElement(a.Fragment, null, h, m)
                );
              }
              return Ct.logError('Unknown plot type: ' + c), null;
            }),
            t
          );
        })(a.PureComponent),
        Et = n('YS4w'),
        Pt = n('KacW'),
        xt = window.t('Change Line Style'),
        Ot = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._onLineStyleChange = function (e) {
                (0, t.context.setValue)(t.props.lineStyle, e, xt);
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.lineStyle,
                n = Object(r.__rest)(e, ['lineStyle']);
              return l.a.createElement(
                Pt.a,
                Object(r.__assign)({}, n, {
                  lineStyle: t.value(),
                  lineStyleChange: this._onLineStyleChange,
                }),
              );
            }),
            (t.contextType = X),
            t
          );
        })(l.a.PureComponent),
        jt = window.t('Change Value'),
        kt = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._onValueChange = function (e) {
                (0, t.context.setValue)(t.props.property.value, e, jt);
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.id,
                n = e.property,
                r = n.name,
                o = n.color,
                l = n.linestyle,
                i = n.linewidth,
                s = n.transparency,
                c = n.value,
                p = n.visible;
              return a.createElement(
                O.a,
                {
                  labelAlign: 'adaptive',
                  label: a.createElement(oe, {
                    id: t,
                    title: r.value(),
                    visible: p,
                  }),
                },
                a.createElement(
                  'div',
                  { className: ke.block },
                  a.createElement(
                    'div',
                    { className: ke.group },
                    a.createElement(je, {
                      disabled: !p.value(),
                      color: o,
                      transparency: s,
                      thickness: i,
                    }),
                    a.createElement(Ot, {
                      disabled: !p.value(),
                      className: ke.smallStyleControl,
                      lineStyle: l,
                    }),
                  ),
                  a.createElement(
                    'div',
                    {
                      className: We(
                        ke.wrapGroup,
                        ke.defaultSelect,
                        ke.additionalSelect,
                      ),
                    },
                    a.createElement(Et.b, {
                      input: { id: '', name: '', type: 'float', defval: 0 },
                      value: c.value(),
                      disabled: !p.value(),
                      onChange: this._onValueChange,
                    }),
                  ),
                ),
              );
            }),
            (t.contextType = X),
            t
          );
        })(a.PureComponent),
        Tt = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props.orders,
                t = e.visible,
                n = e.showLabels,
                r = e.showQty;
              return a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  T.a.Row,
                  null,
                  a.createElement(
                    T.a.Cell,
                    { placement: 'first', colSpan: 2 },
                    a.createElement(oe, {
                      id: 'chart-orders-switch',
                      title: window.t('Trades on Chart'),
                      visible: t,
                    }),
                  ),
                ),
                a.createElement(
                  T.a.Row,
                  null,
                  a.createElement(
                    T.a.Cell,
                    { placement: 'first', colSpan: 2 },
                    a.createElement(oe, {
                      id: 'chart-orders-labels-switch',
                      title: window.t('Signal Labels'),
                      visible: n,
                    }),
                  ),
                ),
                a.createElement(
                  T.a.Row,
                  null,
                  a.createElement(
                    T.a.Cell,
                    { placement: 'first', colSpan: 2 },
                    a.createElement(oe, {
                      id: 'chart-orders-qty-switch',
                      title: window.t('Quantity'),
                      visible: r,
                    }),
                  ),
                ),
              );
            }),
            (t.contextType = X),
            t
          );
        })(a.PureComponent),
        Lt = window.t('Change Font'),
        Mt = ['Verdana', 'Courier New', 'Times New Roman', 'Arial'].map(
          function (e) {
            return { value: e, content: e };
          },
        ),
        Nt = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._onFontFamilyChange = function (e) {
                (0, t.context.setValue)(t.props.fontFamily, e, Lt);
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.fontFamily,
                n = e.className,
                r = e.disabled;
              return a.createElement(Ye.a, {
                disabled: r,
                className: Ue()(n, ke.defaultSelect),
                menuItemClassName: ke.defaultSelectItem,
                items: Mt,
                value: t.value(),
                onChange: this._onFontFamilyChange,
              });
            }),
            (t.contextType = X),
            t
          );
        })(a.PureComponent),
        It = n('UXjO'),
        Vt = window.t('Change Font Size'),
        zt = [10, 11, 12, 14, 16, 20, 24, 28, 32, 40].map(function (e) {
          return { value: e, title: e.toString() };
        }),
        Rt = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._onFontSizeChange = function (e) {
                (0, t.context.setValue)(t.props.fontSize, e, Vt);
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.fontSize,
                n = Object(r.__rest)(e, ['fontSize']);
              return a.createElement(
                It.a,
                Object(r.__assign)({}, n, {
                  fontSizes: zt,
                  fontSize: t.value(),
                  fontSizeChange: this._onFontSizeChange,
                }),
              );
            }),
            (t.contextType = X),
            t
          );
        })(a.PureComponent),
        Dt = window.t('Change Visibility'),
        Bt = window.t('Labels Font'),
        At = window.t('Show Labels'),
        Ht = {
          Traditional: new Set([
            'S5/R5',
            'S4/R4',
            'S3/R3',
            'S2/R2',
            'S1/R1',
            'P',
          ]),
          Fibonacci: new Set(['S3/R3', 'S2/R2', 'S1/R1', 'P']),
          Woodie: new Set(['S4/R4', 'S3/R3', 'S2/R2', 'S1/R1', 'P']),
          Classic: new Set(['S4/R4', 'S3/R3', 'S2/R2', 'S1/R1', 'P']),
          DM: new Set(['S1/R1', 'P']),
          DeMark: new Set(['S1/R1', 'P']),
          Camarilla: new Set(['S4/R4', 'S3/R3', 'S2/R2', 'S1/R1', 'P']),
        },
        Ft = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._onChange = function (e) {
                (0, t.context.setValue)(
                  t.props.property.childs().levelsStyle.childs().showLabels,
                  e,
                  Dt,
                );
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props.property.childs(),
                t = e.font,
                n = e.fontsize,
                r = e.levelsStyle;
              return l.a.createElement(
                l.a.Fragment,
                null,
                l.a.createElement(
                  O.a,
                  {
                    labelAlign: 'adaptive',
                    label: l.a.createElement('span', null, Bt),
                  },
                  l.a.createElement(
                    'div',
                    { className: ke.block },
                    l.a.createElement(
                      'div',
                      { className: ke.group },
                      l.a.createElement(Nt, { fontFamily: t }),
                    ),
                    l.a.createElement(
                      'div',
                      { className: We(ke.wrapGroup, ke.additionalSelect) },
                      l.a.createElement(Rt, { fontSize: n }),
                    ),
                  ),
                ),
                l.a.createElement(
                  T.a.Row,
                  null,
                  l.a.createElement(
                    T.a.Cell,
                    { placement: 'first', colSpan: 2 },
                    l.a.createElement(x.b, {
                      label: At,
                      input: {
                        id: 'ShowLabels',
                        type: 'bool',
                        defval: !0,
                        name: 'visible',
                      },
                      value: r.childs().showLabels.value(),
                      onChange: this._onChange,
                    }),
                  ),
                ),
                this._renderColors(),
              );
            }),
            (t.prototype._renderColors = function () {
              var e = this.props.property.childs(),
                t = e.levelsStyle,
                n = e.inputs,
                r = t.childs(),
                o = r.colors,
                a = r.widths,
                s = r.visibility,
                c = n.childs().kind,
                p = Object(i.ensureDefined)(Ht[c.value()]);
              return o
                .childNames()
                .filter(function (e) {
                  return p.has(e);
                })
                .map(function (e) {
                  return l.a.createElement(_t, {
                    key: e,
                    id: e,
                    title: e,
                    color: o.childs()[e],
                    visible: s.childs()[e],
                    thickness: a.childs()[e],
                  });
                });
            }),
            (t.contextType = X),
            t
          );
        })(l.a.PureComponent);
      for (
        var Gt = {
            PivotPointsStandard: function () {
              var e = Object(i.ensureNotNull)(
                Object(a.useContext)(Re),
              ).properties();
              return l.a.createElement(Ft, { property: e });
            },
          },
          Wt = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              Object(r.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this,
                  t = Object(i.ensureNotNull)(this.context);
                return a.createElement(Re.Consumer, null, function (n) {
                  return a.createElement(
                    Z,
                    {
                      property: Object(i.ensureNotNull)(n).properties(),
                      model: t,
                    },
                    a.createElement(
                      T.a,
                      null,
                      e._renderCustomContent(
                        Object(i.ensureNotNull)(n).metaInfo().shortId,
                      ),
                    ),
                  );
                });
              }),
              (t.prototype._renderCustomContent = function (e) {
                if ((e in Gt)) {
                  var t = Gt[e];
                  return a.createElement(t, null);
                }
                return null;
              }),
              (t.contextType = J),
              t
            );
          })(a.PureComponent),
          Ut = n('Ecpn'),
          qt = window.t('Default'),
          Yt = window.t('Precision'),
          Qt = window.t('Change Precision'),
          Kt = [{ value: 'default', content: qt }],
          Jt = 0;
        Jt <= 8;
        Jt++
      )
        Kt.push({ value: Jt, content: Jt.toString() });
      for (
        var Xt = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t._onChange = function (e) {
                  (0, t.context.setValue)(t.props.precision, e, Qt);
                }),
                t
              );
            }
            return (
              Object(r.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this.props.precision;
                return a.createElement(
                  O.a,
                  { label: Yt },
                  a.createElement(Ye.a, {
                    className: ke.defaultSelect,
                    menuItemClassName: ke.defaultSelectItem,
                    items: Kt,
                    value: e.value(),
                    onChange: this._onChange,
                  }),
                );
              }),
              (t.contextType = X),
              t
            );
          })(a.PureComponent),
          Zt = window.t('Default'),
          $t = window.t('Override Min Tick'),
          en = window.t('Change Min Tick'),
          tn = [
            { priceScale: 1, minMove: 1, frac: !1 },
            { priceScale: 10, minMove: 1, frac: !1 },
            { priceScale: 100, minMove: 1, frac: !1 },
            { priceScale: 1e3, minMove: 1, frac: !1 },
            { priceScale: 1e4, minMove: 1, frac: !1 },
            { priceScale: 1e5, minMove: 1, frac: !1 },
            { priceScale: 1e6, minMove: 1, frac: !1 },
            { priceScale: 1e7, minMove: 1, frac: !1 },
            { priceScale: 1e8, minMove: 1, frac: !1 },
            { priceScale: 2, minMove: 1, frac: !0 },
            { priceScale: 4, minMove: 1, frac: !0 },
            { priceScale: 8, minMove: 1, frac: !0 },
            { priceScale: 16, minMove: 1, frac: !0 },
            { priceScale: 32, minMove: 1, frac: !0 },
            { priceScale: 64, minMove: 1, frac: !0 },
            { priceScale: 128, minMove: 1, frac: !0 },
            { priceScale: 320, minMove: 1, frac: !0 },
          ],
          nn = [{ value: 'default', content: Zt }],
          rn = 0;
        rn < tn.length;
        rn++
      ) {
        var on = tn[rn];
        nn.push({
          value: on.priceScale + ',' + on.minMove + ',' + on.frac,
          content: on.minMove + '/' + on.priceScale,
        });
      }
      var an = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._onChange = function (e) {
                (0, t.context.setValue)(t.props.minTick, e, en);
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props.minTick;
              return a.createElement(
                O.a,
                { label: $t },
                a.createElement(Ye.a, {
                  className: ke.defaultSelect,
                  menuItemClassName: ke.defaultSelectItem,
                  items: nn,
                  value: e.value(),
                  onChange: this._onChange,
                }),
              );
            }),
            (t.contextType = X),
            t
          );
        })(a.PureComponent),
        ln = n('5YG5'),
        sn = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._findPlotPalette = function (e) {
                var n = t.props.study,
                  r = n.metaInfo(),
                  o = Object(i.ensureDefined)(r.palettes);
                return Object(Y.isBarColorerPlot)(e) ||
                  Object(Y.isBgColorerPlot)(e)
                  ? {
                      palette: o[e.palette],
                      paletteProps: n.properties().palettes[e.palette],
                    }
                  : t._findPaletteByTargetId(e.id);
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this,
                t = this.props.study,
                n = t.metaInfo();
              if (Object(Ut.a)(n.shortId)) return a.createElement(Wt, null);
              var o = new H.a(n).getUserEditablePlots(),
                l = t.properties(),
                s = l.bands,
                c = l.bandsBackground,
                p = l.areaBackground,
                u = l.precision,
                d = l.strategy,
                h = l.minTick,
                m = n.filledAreas,
                v = n.graphics,
                y = o.length > 0 || (v && Object.keys(v).length > 0),
                f = Object(ln.a)(t).canOverrideMinTick();
              return a.createElement(
                T.a,
                null,
                o.map(function (n) {
                  var o = Object(Y.isOhlcPlot)(n)
                      ? Object(r.__assign)(Object(r.__assign)({}, n), {
                          id: n.target,
                        })
                      : n,
                    l = e._findPlotPalette(o),
                    i = l.palette,
                    s = l.paletteProps;
                  return a.createElement(St, {
                    key: n.id,
                    plot: n,
                    palette: i,
                    paletteProps: s,
                    study: t,
                  });
                }),
                s &&
                  s.childNames().map(function (e, t) {
                    var n = s.child(e);
                    if (!n.isHidden || !n.isHidden.value())
                      return a.createElement(kt, {
                        key: t,
                        id: n.name.value(),
                        property: n,
                      });
                  }),
                c &&
                  a.createElement(_t, {
                    id: 'bandsBackground',
                    title: 'Background',
                    visible: c.fillBackground,
                    color: c.backgroundColor,
                    transparency: c.transparency,
                  }),
                p &&
                  a.createElement(_t, {
                    id: 'areaBackground',
                    title: 'Background',
                    visible: p.fillBackground,
                    color: p.backgroundColor,
                    transparency: p.transparency,
                  }),
                m &&
                  m.map(function (n) {
                    if (!n.isHidden) {
                      var r = t.properties().filledAreasStyle[n.id],
                        o = n.title || 'Background';
                      if (n.palette) {
                        var l = e._findPaletteByTargetId(n.id);
                        return a.createElement(Ne, {
                          key: n.id,
                          area: n,
                          palette: Object(i.ensureDefined)(l.palette),
                          paletteProps: Object(i.ensureDefined)(l.paletteProps),
                          styleProp: r,
                        });
                      }
                      return a.createElement(_t, {
                        key: n.id,
                        id: n.id,
                        title: o,
                        color: r.color,
                        visible: r.visible,
                        transparency: r.transparency,
                      });
                    }
                  }),
                !1,
                y && a.createElement(Xt, { precision: u }),
                f && a.createElement(an, { minTick: h }),
                K.a.isScriptStrategy(n) &&
                  a.createElement(Tt, { orders: d.orders }),
              );
            }),
            (t.prototype._findPaletteByTargetId = function (e) {
              for (
                var t = this.props.study,
                  n = t.metaInfo(),
                  r = n.plots,
                  o = Object(i.ensureDefined)(n.palettes),
                  a = 0,
                  l = r;
                a < l.length;
                a++
              ) {
                var s = l[a];
                if (
                  (Object(Y.isColorerPlot)(s) ||
                    Object(Y.isOhlcColorerPlot)(s)) &&
                  s.target === e
                )
                  return {
                    palette: o[s.palette],
                    paletteProps: t.properties().palettes[s.palette],
                  };
              }
              return {};
            }),
            t
          );
        })(a.PureComponent);
      function cn(e) {
        return $(
          sn,
          Object(r.__assign)(Object(r.__assign)({}, e), {
            property: e.study.properties(),
          }),
        );
      }
      var pn = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              return a.createElement(
                J.Provider,
                { value: this.props.model },
                a.createElement(
                  Re.Provider,
                  { value: this.props.source },
                  a.createElement(cn, { study: this.props.source }),
                ),
              );
            }),
            t
          );
        })(a.PureComponent),
        un = n('CW80');
      n.d(t, 'EditObjectDialogRenderer', function () {
        return dn;
      });
      var dn = (function () {
        function e(e, t, n, r) {
          var a = this;
          (this._container = document.createElement('div')),
            (this._isVisible = !1),
            (this._timeout = null),
            (this._handleClose = function () {
              o.unmountComponentAtNode(a._container),
                (a._isVisible = !1),
                a._subscription.unsubscribe(a, a._handleCollectionChanged);
            }),
            (this._handleCancel = function () {
              a._model.undoToCheckpoint(a._checkpoint);
            }),
            (this._handleSubmit = function () {}),
            (this._handleActiveTabChanged = function (e) {
              c.setValue(a._activeTabSettingsName(), e);
            }),
            (this._source = e),
            (this._model = t),
            (this._propertyPages = r),
            (this._checkpoint = this._ensureCheckpoint(n)),
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
          (e.prototype.show = function (e) {
            if ((void 0 === e && (e = {}), p.enabled('property_pages'))) {
              var t = this._source.metaInfo();
              if (
                (Object(un.isLineTool)(this._source) &&
                  Object(d.trackEvent)(
                    'GUI',
                    'Drawing Properties',
                    this._source.name(),
                  ),
                Object(g.isStudy)(this._source))
              ) {
                var n =
                  !this._source.isPine() || this._source.isStandardPine()
                    ? t.description
                    : 'Custom Pine';
                Object(d.trackEvent)('GUI', 'Study Properties', n);
              }
              var r = {
                  byId: {
                    inputs: { title: window.t('Inputs'), Component: q },
                    style: {
                      title: window.t('Style'),
                      Component: pn,
                    },
                    properties: { title: window.t('Properties'), Component: W },
                  },
                  allIds: [],
                },
                l = new H.a(t);
              l.hasUserEditableInputs() && r.allIds.push('inputs'),
                l.hasUserEditableProperties() && r.allIds.push('properties'),
                l.hasUserEditableStyles() && r.allIds.push('style'),
                (r = this._getPagesForStudyLineTool(r));
              var i =
                  e.initialTab ||
                  c.getValue(this._activeTabSettingsName()) ||
                  'inputs',
                h = Object(s.clean)(t.shortDescription, !0);
              0,
                o.render(
                  a.createElement(w, {
                    title: h,
                    model: this._model,
                    source: this._source,
                    initialActiveTab: r.allIds.includes(i) ? i : r.allIds[0],
                    pages: r,
                    onSubmit: this._handleSubmit,
                    onCancel: this._handleCancel,
                    onClose: this._handleClose,
                    onActiveTabChanged: this._handleActiveTabChanged,
                  }),
                  this._container,
                ),
                (this._isVisible = !0),
                u.emit('edit_object_dialog', {
                  objectType: 'study',
                  scriptTitle: this._source.title(),
                });
            }
          }),
          (e.prototype._activeTabSettingsName = function () {
            return 'properties_dialog.active_tab.study';
          }),
          (e.prototype._ensureCheckpoint = function (e) {
            return void 0 === e && (e = this._model.createUndoCheckpoint()), e;
          }),
          (e.prototype._getPagesForStudyLineTool = function (e) {
            if (this._propertyPages) {
              var t = this._propertyPages.filter(function (e) {
                  return 'coordinates' === e.id || 'visibility' === e.id;
                }),
                n = {
                  allIds: t.map(function (e) {
                    return e.id;
                  }),
                  byId: t.reduce(function (e, t) {
                    var n;
                    return Object(r.__assign)(
                      Object(r.__assign)({}, e),
                      (((n = {})[t.id] = { title: t.title, page: t }), n),
                    );
                  }, {}),
                };
              return {
                allIds: Object(r.__spreadArrays)(e.allIds, n.allIds),
                byId: Object(r.__assign)(
                  Object(r.__assign)({}, e.byId),
                  n.byId,
                ),
              };
            }
            return e;
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
          e
        );
      })();
    },
    ZtdB: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M4.5 20v-7m3 7V10m3 10V8m3 12V10m3 10v-8m3 8V10m3 10V8"/></svg>';
    },
    br6c: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><circle stroke="currentColor" cx="14" cy="14" r="6.5"/></svg>';
    },
    flzi: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M19.424 16.735l.478.765H8.098l.478-.765 5-8L14 8.057l.424.678 5 8z"/></svg>';
    },
    iB0j: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M9 9l11 11M9 20L20 9"/></svg>';
    },
    'j3s+': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('mrSG'),
        o = n('q1tI'),
        a = n('TSYQ'),
        l = n('5ijr');
      function i(e) {
        var t = e.className,
          n = void 0 === t ? '' : t,
          r = e.intent,
          o = void 0 === r ? 'default' : r,
          i = e.size,
          s = void 0 === i ? 'small' : i,
          c = e.disabled;
        return a(n, l.switcherWrapper, l['size-' + s], !c && l['intent-' + o]);
      }
      n('4pMH');
      var s = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          r.__extends(t, e),
          (t.prototype.render = function () {
            var e = this.props,
              t = e.reference,
              n =
                (e.size,
                e.intent,
                r.__rest(e, ['reference', 'size', 'intent'])),
              s = a(l.input, -1 !== this.props.tabIndex && l.focus);
            return o.createElement(
              'div',
              { className: i(this.props) },
              o.createElement(
                'input',
                r.__assign({}, n, { type: 'checkbox', className: s, ref: t }),
              ),
              o.createElement(
                'div',
                { className: l.switcherThumbWrapper },
                o.createElement('div', { className: l.switcherTrack }),
                o.createElement('div', { className: l.switcherThumb }),
              ),
            );
          }),
          t
        );
      })(o.PureComponent);
      t.Switch = s;
    },
    kMtk: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M11 8.5h-.5v9.707l.146.147 3 3 .354.353.354-.353 3-3 .146-.147V8.5H11z"/></svg>';
    },
    lOpG: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M14 7l7.424 6.114a.5.5 0 0 1-.318.886H18.5v7h-9v-7H6.894a.5.5 0 0 1-.318-.886L14 7z"/></svg>';
    },
    leq5: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M19.424 11.265l.478-.765H8.098l.478.765 5 8 .424.678.424-.678 5-8z"/></svg>';
    },
    'm+Gx': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M9 14.5h11M14.5 20V9"/></svg>';
    },
    'rlj/': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 17v5.5h4v-18h4v12h4v-9h4V21"/></svg>';
    },
    'sPU+': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M10.5 13a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM16.5 19a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM22.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/></svg>';
    },
    tH7p: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 13.52v4.98a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V8.914c0-.89-1.077-1.337-1.707-.707l-4.66 4.66a1 1 0 0 1-1.332.074l-3.716-2.973a1 1 0 0 0-1.198-.039l-3.96 2.772a1 1 0 0 0-.427.82z"/></svg>';
    },
    tQCG: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M13 11.5l-1.915-1.532a1 1 0 0 0-1.198-.039l-3.96 2.772a1 1 0 0 0-.427.82V18.5a1 1 0 0 0 1 1H13m3.5-7l4.293-4.293c.63-.63 1.707-.184 1.707.707V18.5a1 1 0 0 1-1 1H16"/><path fill="currentColor" d="M14 6h1v2h-1zM14 11h1v2h-1zM14 16h1v2h-1zM14 21h1v2h-1z"/></svg>';
    },
    wwEg: function (e, t, n) {
      e.exports = {
        smallStyleControl: 'smallStyleControl-1XGqoHgA',
        additionalSelect: 'additionalSelect-1RoWzlTA',
        childRowContainer: 'childRowContainer-_iCnmDPI',
        defaultSelect: 'defaultSelect-DeTJWnAh',
        defaultSelectItem: 'defaultSelectItem-1jN74NCa',
        block: 'block-3Tp_jRog',
        group: 'group-2HQIdqE5',
        wrapGroup: 'wrapGroup-3gHGJIrr',
        textMarkGraphicBlock: 'textMarkGraphicBlock-1nDopgxR',
        textMarkGraphicWrapGroup: 'textMarkGraphicWrapGroup-3QaIoY03',
      };
    },
    xHjM: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 16.5l4.586-4.586a2 2 0 0 1 2.828 0l3.172 3.172a2 2 0 0 0 2.828 0L23.5 10.5"/></svg>';
    },
  },
]);
