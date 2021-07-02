(window.webpackJsonp = window.webpackJsonp || []).push([
  ['study-property-pages-with-definitions'],
  {
    WUYT: function (t, e, i) {
      'use strict';
      i.r(e);
      var o = i('mrSG'),
        n = (i('YFKU'), i('HbRj'), i('Eyy1')),
        s = i('Kxc7'),
        r = i('HSjo'),
        u = i('1yQO'),
        l = i('hY0g'),
        c = i.n(l),
        p = i('25b6');
      function a(t, e) {
        var i = t.id;
        return (
          'first_visible_bar_time' !== i &&
          'last_visible_bar_time' !== i &&
          'time' !== t.type &&
          !t.isHidden &&
          !(e && !t.confirm) &&
          void 0 === t.groupId
        );
      }
      function y(t) {
        return t.name || Object(p.a)(t.id.toLowerCase());
      }
      var d = i('zqjM'),
        h = i('0YCj'),
        b = i.n(h),
        f = i('pPtI'),
        _ = window.t('Style'),
        S = window.t('Inputs'),
        v = [
          '1',
          '3',
          '5',
          '15',
          '30',
          '45',
          '60',
          '120',
          '180',
          '240',
          '1D',
          '1W',
          '1M',
        ].map(function (t) {
          return {
            value: t,
            title: Object(f.getTranslatedResolutionModel)(t).hint,
          };
        }),
        m = (function () {
          function t(t, e) {
            var i = this;
            (this._inputSourceItems = null),
              (this._propertyPages = []),
              (this._sourceInput = null),
              (this._source = e),
              (this._undoModel = t);
            for (
              var o = 0, n = this._sortInputs(this._source.metaInfo().inputs);
              o < n.length;
              o++
            ) {
              var s = n[o];
              'source' === s.type && (this._sourceInput = s);
            }
            this._createPropertyRages(),
              null !== this._inputSourceItems &&
                this._undoModel
                  .model()
                  .dataSourceCollectionChanged()
                  .subscribe(this, function () {
                    null !== i._inputSourceItems &&
                      i._inputSourceItems.setValue(i._getInputSourceItems());
                  });
          }
          return (
            (t.prototype.destroy = function () {
              null !== this._inputSourceItems &&
                this._undoModel
                  .model()
                  .dataSourceCollectionChanged()
                  .unsubscribeAll(this),
                this._propertyPages.forEach(function (t) {
                  Object(r.t)(t.definitions.value());
                });
            }),
            (t.prototype.propertyPages = function () {
              return Promise.resolve(this._propertyPages);
            }),
            (t.prototype._createPropertyRages = function () {
              this._propertyPages = [];
              var t = this._createInputsPropertyPage();
              null !== t && this._propertyPages.push(t);
              var e = this._createStylePropertyPage();
              null !== e && this._propertyPages.push(e);
            }),
            (t.prototype._createStylePropertyPage = function () {
              var t = this._stylePropertyDefinitions();
              return null !== t ? Object(u.a)(t, 'style', _) : null;
            }),
            (t.prototype._stylePropertyDefinitions = function () {
              return null;
            }),
            (t.prototype._createInputsPropertyPage = function () {
              var t = this._inputsPropertyDefinitions();
              return null !== t ? Object(u.a)(t, 'inputs', S) : null;
            }),
            (t.prototype._inputsPropertyDefinitions = function () {
              var t = this._sortInputs(this._source.metaInfo().inputs),
                e = this._source.properties().childs().inputs.childs();
              return (
                null !== this._sourceInput &&
                  (this._inputSourceItems = new c.a(
                    this._getInputSourceItems(),
                  )),
                (function (t, e, i, o, s) {
                  for (var u = [], l = 0, p = e; l < p.length; l++) {
                    var d = p[l];
                    if (a(d, o)) {
                      var h = y(d),
                        b = window.t(h, { context: 'input' }),
                        f = null;
                      if ('resolution' === d.type)
                        f = Object(r.j)(
                          { option: Object(r.b)(t, i[d.id], 'Change ' + h) },
                          {
                            id: 'StudyInput' + h,
                            title: b,
                            options: new c.a(s.resolutionItems),
                          },
                        );
                      else if ('source' === d.type) {
                        var _ = Object(n.ensure)(s.sourcesItems);
                        f = Object(r.j)(
                          { option: Object(r.b)(t, i[d.id], 'Change ' + h) },
                          { id: 'StudyInput' + h, title: b, options: _ },
                        );
                      } else if ('options' in d && void 0 !== d.options) {
                        for (
                          var S = [], v = 0, m = d.options;
                          v < m.length;
                          v++
                        ) {
                          var g = m[v],
                            I = (d.optionsTitles && d.optionsTitles[g]) || g,
                            j = window.t(I);
                          S.push({ value: g, title: j });
                        }
                        f = Object(r.j)(
                          { option: Object(r.b)(t, i[d.id], 'Change ' + h) },
                          {
                            id: 'StudyInput' + h,
                            title: b,
                            options: new c.a(S),
                          },
                        );
                      } else if ('symbol' === d.type) {
                        var O = i[d.id],
                          w = Object(n.ensure)(s.getSymbolInfoBySymbol),
                          P = Object(n.ensure)(s.onSymbolsInfosChanged);
                        f = Object(r.o)(
                          {
                            symbol: Object(r.y)(
                              t,
                              O,
                              w,
                              P,
                              'Change ' + b,
                              s.customSymbolInputSetter,
                            ),
                          },
                          { id: 'StudyInput' + h, title: b },
                        );
                      } else if ('session' === d.type)
                        f = Object(r.n)(
                          { session: Object(r.b)(t, i[d.id], 'Change ' + h) },
                          { id: 'StudyInput' + h, title: b },
                        );
                      else if ('bool' === d.type)
                        f = Object(r.c)(
                          { checked: Object(r.b)(t, i[d.id], 'Change ' + b) },
                          { id: 'StudyInput' + h, title: b },
                        );
                      else if ('integer' === d.type || 'float' === d.type) {
                        var C = {
                          id: 'StudyInput' + h,
                          title: b,
                          type: 'float' === d.type ? 1 : 0,
                          defval: d.defval,
                        };
                        d.min && (C.min = new c.a(d.min)),
                          d.max && (C.max = new c.a(d.max)),
                          void 0 !== d.step &&
                            isFinite(d.step) &&
                            d.step > 0 &&
                            (C.step = new c.a(d.step)),
                          (f = Object(r.i)(
                            { value: Object(r.b)(t, i[d.id], 'Change ' + b) },
                            C,
                          ));
                      } else
                        f = Object(r.p)(
                          { text: Object(r.b)(t, i[d.id], 'Change ' + b) },
                          {
                            id: 'StudyInput' + h,
                            title: b,
                            isEditable: !0,
                            isMultiLine: !1,
                          },
                        );
                      u.push(f);
                    }
                  }
                  return 0 === u.length ? null : u;
                })(this._undoModel, t, e, !1, {
                  resolutionItems: v,
                  customSymbolInputSetter: this._customSymbolInputSetter(),
                  getSymbolInfoBySymbol: this._getSymbolInfoBySymbol.bind(this),
                  onSymbolsInfosChanged: this._source.symbolsResolved(),
                  sourcesItems: this._inputSourceItems,
                })
              );
            }),
            (t.prototype._sortInputs = function (t) {
              return t;
            }),
            (t.prototype._getInputSourceItems = function () {
              var t = d.b.slice(),
                e = Object(n.ensureNotNull)(this._sourceInput);
              if (this._source && this._source.isChildStudy())
                for (
                  var i = this._source.parentSource(),
                    r = i.title(),
                    u = b.a.getChildSourceInputTitles(e, i.metaInfo(), r),
                    l = 0,
                    c = Object.keys(u);
                  l < c.length;
                  l++
                ) {
                  var p = c[l];
                  t.push({ value: p, title: u[p] });
                }
              if (
                s.enabled('study_on_study') &&
                this._source &&
                (this._source.isChildStudy() ||
                  b.a.canBeChild(this._source.metaInfo()))
              ) {
                var a = new Set(
                  Object(o.f)([this._source], this._source.getAllChildren()),
                );
                this._undoModel
                  .model()
                  .allStudies()
                  .filter(function (t) {
                    return t.canHaveChildren() && !a.has(t);
                  })
                  .forEach(function (e) {
                    var i = e.title(!0, void 0, !0),
                      s = e.sourceId() || '#' + e.id(),
                      r = e.metaInfo(),
                      u = r.styles,
                      l = r.plots || [];
                    if (1 === l.length) t.push({ value: s, title: i });
                    else if (l.length > 1)
                      for (
                        var c = l.reduce(function (t, e, r) {
                            var l, c;
                            if (!b.a.canPlotBeSourceOfChildStudy(e.type))
                              return t;
                            try {
                              c = Object(n.ensureDefined)(
                                Object(n.ensureDefined)(u)[e.id],
                              ).title;
                            } catch (p) {
                              c = e.id;
                            }
                            return Object(o.a)(
                              Object(o.a)({}, t),
                              (((l = {})[s + '$' + r] = i + ': ' + c), l),
                            );
                          }, {}),
                          p = 0,
                          a = Object.keys(c);
                        p < a.length;
                        p++
                      ) {
                        var y = a[p];
                        t.push({ value: y, title: c[y] });
                      }
                  });
              }
              return t;
            }),
            (t.prototype._customSymbolInputSetter = function () {}),
            (t.prototype._getSymbolInfoBySymbol = function (t) {
              return this._source.resolvedSymbolInfoBySymbol(t.value());
            }),
            t
          );
        })(),
        g = i('Equz');
      i.d(e, 'StudyOverlayDefinitionsViewModel', function () {
        return P;
      });
      var I = [
          { title: window.t('Bars'), value: 0 },
          { title: window.t('Candles'), value: 1 },
          { title: window.t('Hollow Candles'), value: 9 },
          { title: window.t('Line'), value: 2 },
          { title: window.t('Area'), value: 3 },
          { title: window.t('Baseline'), value: 10 },
        ],
        j = window.t('Style'),
        O = window.t('Price Line'),
        w = window.t('Override Min Tick'),
        P = (function (t) {
          function e(e, i) {
            var o = t.call(this, e, i) || this;
            return (
              (o._stylesPropertyPage = null),
              o.propertyPages().then(function (t) {
                o._stylesPropertyPage = t.filter(function (t) {
                  return 'style' === t.id;
                })[0];
              }),
              o._source
                .properties()
                .childs()
                .style.subscribe(o, function (t) {
                  null !== o._stylesPropertyPage &&
                    (Object(r.t)(o._stylesPropertyPage.definitions.value()),
                    o._stylesPropertyPage.definitions.setValue(
                      o._stylePropertyDefinitions(),
                    ));
                }),
              o
            );
          }
          return (
            Object(o.c)(e, t),
            (e.prototype.destroy = function () {
              this._source.properties().childs().style.unsubscribeAll(this),
                t.prototype.destroy.call(this);
            }),
            (e.prototype._customSymbolInputSetter = function () {
              var t = this;
              return function (e) {
                t._undoModel.setSymbol(t._source, e);
              };
            }),
            (e.prototype._stylePropertyDefinitions = function () {
              var t = this._source.properties().childs(),
                e = Object(r.j)(
                  {
                    option: Object(r.b)(
                      this._undoModel,
                      t.style,
                      'Change study overlay style',
                    ),
                  },
                  { id: 'StudyOverlayStyle', title: j, options: new c.a(I) },
                ),
                i = Object(r.c)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      t.showPriceLine,
                      'Change Price Price Line',
                    ),
                  },
                  { id: 'StudyOverlayPriceLine', title: O },
                ),
                n = Object(r.j)(
                  {
                    option: Object(r.b)(
                      this._undoModel,
                      t.minTick,
                      'Change study overlay style',
                    ),
                  },
                  {
                    id: 'StudyOverlayMinTick',
                    title: w,
                    options: new c.a(Object(d.d)()),
                  },
                ),
                s = Object(p.c)(this._source.title());
              return [
                Object(r.k)(
                  Object(o.f)([e], this._getSeriesStylesDefinitions()),
                  'SeriesStyleGroup' + s,
                ),
                i,
                n,
              ];
            }),
            (e.prototype._getSeriesStylesDefinitions = function () {
              var t = this._source.properties().childs();
              return Object(g.a)(
                this._undoModel,
                t,
                t.style.value(),
                {
                  seriesPriceSources: d.b,
                  lineStyleTypes: d.c,
                  isJapaneseChartsAvailable: !1,
                },
                'mainSeries',
              );
            }),
            e
          );
        })(m);
    },
  },
]);
