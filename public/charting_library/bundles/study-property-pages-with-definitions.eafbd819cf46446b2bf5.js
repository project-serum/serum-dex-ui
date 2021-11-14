(window.webpackJsonp = window.webpackJsonp || []).push([
  ['study-property-pages-with-definitions'],
  {
    WUYT: function (e, t, i) {
      'use strict';
      i.r(t);
      var n = i('mrSG'),
        s = (i('YFKU'), i('HbRj'), i('Eyy1')),
        o = i('Kxc7'),
        r = i('HSjo'),
        u = i('1yQO'),
        l = i('hY0g'),
        c = i.n(l),
        a = i('25b6');
      function p(e, t) {
        var i = e.id;
        return (
          'first_visible_bar_time' !== i &&
          'last_visible_bar_time' !== i &&
          'time' !== e.type &&
          !e.isHidden &&
          !(t && !e.confirm) &&
          void 0 === e.groupId
        );
      }
      function d(e) {
        return e.name || Object(a.a)(e.id.toLowerCase());
      }
      var y = i('zqjM'),
        h = i('0YCj'),
        b = i.n(h),
        _ = i('pPtI'),
        f = window.t('Style'),
        v = window.t('Inputs'),
        g = [
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
        ].map(function (e) {
          return {
            value: e,
            title: Object(_.getTranslatedResolutionModel)(e).hint,
          };
        }),
        S = (function () {
          function e(e, t) {
            var i = this;
            (this._inputSourceItems = null),
              (this._propertyPages = []),
              (this._sourceInput = null),
              (this._source = t),
              (this._undoModel = e);
            for (
              var n = 0, s = this._sortInputs(this._source.metaInfo().inputs);
              n < s.length;
              n++
            ) {
              var o = s[n];
              'source' === o.type && (this._sourceInput = o);
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
            (e.prototype.destroy = function () {
              null !== this._inputSourceItems &&
                this._undoModel
                  .model()
                  .dataSourceCollectionChanged()
                  .unsubscribeAll(this),
                this._propertyPages.forEach(function (e) {
                  Object(r.t)(e.definitions.value());
                });
            }),
            (e.prototype.propertyPages = function () {
              return Promise.resolve(this._propertyPages);
            }),
            (e.prototype._createPropertyRages = function () {
              this._propertyPages = [];
              var e = this._createInputsPropertyPage();
              null !== e && this._propertyPages.push(e);
              var t = this._createStylePropertyPage();
              null !== t && this._propertyPages.push(t);
            }),
            (e.prototype._createStylePropertyPage = function () {
              var e = this._stylePropertyDefinitions();
              return null !== e ? Object(u.a)(e, 'style', f) : null;
            }),
            (e.prototype._stylePropertyDefinitions = function () {
              return null;
            }),
            (e.prototype._createInputsPropertyPage = function () {
              var e = this._inputsPropertyDefinitions();
              return null !== e ? Object(u.a)(e, 'inputs', v) : null;
            }),
            (e.prototype._inputsPropertyDefinitions = function () {
              var e = this._sortInputs(this._source.metaInfo().inputs),
                t = this._source.properties().childs().inputs.childs();
              return (
                null !== this._sourceInput &&
                  (this._inputSourceItems = new c.a(
                    this._getInputSourceItems(),
                  )),
                (function (e, t, i, n, o) {
                  for (var u = [], l = 0, a = t; l < a.length; l++) {
                    var y = a[l];
                    if (p(y, n)) {
                      var h = d(y),
                        b = window.t(h, { context: 'input' }),
                        _ = null;
                      if ('resolution' === y.type)
                        _ = Object(r.j)(
                          { option: Object(r.b)(e, i[y.id], 'Change ' + h) },
                          {
                            id: 'StudyInput' + h,
                            title: b,
                            options: new c.a(o.resolutionItems),
                          },
                        );
                      else if ('source' === y.type) {
                        var f = Object(s.ensure)(o.sourcesItems);
                        _ = Object(r.j)(
                          { option: Object(r.b)(e, i[y.id], 'Change ' + h) },
                          { id: 'StudyInput' + h, title: b, options: f },
                        );
                      } else if ('options' in y && void 0 !== y.options) {
                        for (
                          var v = [], g = 0, S = y.options;
                          g < S.length;
                          g++
                        ) {
                          var j = S[g],
                            m = (y.optionsTitles && y.optionsTitles[j]) || j,
                            O = window.t(m);
                          v.push({ value: j, title: O });
                        }
                        _ = Object(r.j)(
                          { option: Object(r.b)(e, i[y.id], 'Change ' + h) },
                          {
                            id: 'StudyInput' + h,
                            title: b,
                            options: new c.a(v),
                          },
                        );
                      } else if ('symbol' === y.type) {
                        var I = i[y.id],
                          w = Object(s.ensure)(o.getSymbolInfoBySymbol),
                          P = Object(s.ensure)(o.onSymbolsInfosChanged);
                        _ = Object(r.o)(
                          { symbol: Object(r.y)(e, I, w, P, 'Change ' + b) },
                          { id: 'StudyInput' + h, title: b },
                        );
                      } else if ('session' === y.type)
                        _ = Object(r.n)(
                          { session: Object(r.b)(e, i[y.id], 'Change ' + h) },
                          { id: 'StudyInput' + h, title: b },
                        );
                      else if ('bool' === y.type)
                        _ = Object(r.c)(
                          { checked: Object(r.b)(e, i[y.id], 'Change ' + b) },
                          { id: 'StudyInput' + h, title: b },
                        );
                      else if ('integer' === y.type || 'float' === y.type) {
                        var C = {
                          id: 'StudyInput' + h,
                          title: b,
                          type: 'float' === y.type ? 1 : 0,
                          defval: y.defval,
                        };
                        y.min && (C.min = new c.a(y.min)),
                          y.max && (C.max = new c.a(y.max)),
                          void 0 !== y.step &&
                            isFinite(y.step) &&
                            y.step > 0 &&
                            (C.step = new c.a(y.step)),
                          (_ = Object(r.i)(
                            { value: Object(r.b)(e, i[y.id], 'Change ' + b) },
                            C,
                          ));
                      } else
                        _ = Object(r.p)(
                          { text: Object(r.b)(e, i[y.id], 'Change ' + b) },
                          {
                            id: 'StudyInput' + h,
                            title: b,
                            isEditable: !0,
                            isMultiLine: !1,
                          },
                        );
                      u.push(_);
                    }
                  }
                  return 0 === u.length ? null : u;
                })(this._undoModel, e, t, !1, {
                  resolutionItems: g,
                  getSymbolInfoBySymbol: this._getSymbolInfoBySymbol.bind(this),
                  onSymbolsInfosChanged: this._source.symbolsResolved(),
                  sourcesItems: this._inputSourceItems,
                })
              );
            }),
            (e.prototype._sortInputs = function (e) {
              return e;
            }),
            (e.prototype._getInputSourceItems = function () {
              var e = y.b.slice(),
                t = Object(s.ensureNotNull)(this._sourceInput);
              if (this._source && this._source.isChildStudy())
                for (
                  var i = this._source.parentSource(),
                    r = i.title(),
                    u = b.a.getChildSourceInputTitles(t, i.metaInfo(), r),
                    l = 0,
                    c = Object.keys(u);
                  l < c.length;
                  l++
                ) {
                  var a = c[l];
                  e.push({ value: a, title: u[a] });
                }
              if (
                o.enabled('study_on_study') &&
                this._source &&
                (this._source.isChildStudy() ||
                  b.a.canBeChild(this._source.metaInfo()))
              ) {
                var p = new Set(
                  Object(n.__spreadArrays)(
                    [this._source],
                    this._source.getAllChildren(),
                  ),
                );
                this._undoModel
                  .model()
                  .allStudies()
                  .filter(function (e) {
                    return e.canHaveChildren() && !p.has(e);
                  })
                  .forEach(function (t) {
                    var i = t.title(!0, void 0, !0),
                      o = t.sourceId() || '#' + t.id(),
                      r = t.metaInfo(),
                      u = r.styles,
                      l = r.plots || [];
                    if (1 === l.length) e.push({ value: o, title: i });
                    else if (l.length > 1)
                      for (
                        var c = l.reduce(function (e, t, r) {
                            var l, c;
                            if (!b.a.canPlotBeSourceOfChildStudy(t.type))
                              return e;
                            try {
                              c = Object(s.ensureDefined)(
                                Object(s.ensureDefined)(u)[t.id],
                              ).title;
                            } catch (a) {
                              c = t.id;
                            }
                            return Object(n.__assign)(
                              Object(n.__assign)({}, e),
                              (((l = {})[o + '$' + r] = i + ': ' + c), l),
                            );
                          }, {}),
                          a = 0,
                          p = Object.keys(c);
                        a < p.length;
                        a++
                      ) {
                        var d = p[a];
                        e.push({ value: d, title: c[d] });
                      }
                  });
              }
              return e;
            }),
            (e.prototype._getSymbolInfoBySymbol = function (e) {
              return this._source.resolvedSymbolInfoBySymbol(e.value());
            }),
            e
          );
        })(),
        j = i('Equz');
      i.d(t, 'StudyOverlayDefinitionsViewModel', function () {
        return P;
      });
      var m = [
          { title: window.t('Bars'), value: 0 },
          { title: window.t('Candles'), value: 1 },
          { title: window.t('Hollow Candles'), value: 9 },
          { title: window.t('Line'), value: 2 },
          { title: window.t('Area'), value: 3 },
          { title: window.t('Baseline'), value: 10 },
        ],
        O = window.t('Style'),
        I = window.t('Price Line'),
        w = window.t('Override Min Tick'),
        P = (function (e) {
          function t(t, i) {
            var n = e.call(this, t, i) || this;
            return (
              (n._stylesPropertyPage = null),
              n.propertyPages().then(function (e) {
                n._stylesPropertyPage = e.filter(function (e) {
                  return 'style' === e.id;
                })[0];
              }),
              n._source
                .properties()
                .childs()
                .style.subscribe(n, function (e) {
                  null !== n._stylesPropertyPage &&
                    (Object(r.t)(n._stylesPropertyPage.definitions.value()),
                    n._stylesPropertyPage.definitions.setValue(
                      n._stylePropertyDefinitions(),
                    ));
                }),
              n
            );
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype.destroy = function () {
              this._source.properties().childs().style.unsubscribeAll(this),
                e.prototype.destroy.call(this);
            }),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = Object(r.j)(
                  {
                    option: Object(r.b)(
                      this._undoModel,
                      e.style,
                      'Change study overlay style',
                    ),
                  },
                  { id: 'StudyOverlayStyle', title: O, options: new c.a(m) },
                ),
                i = Object(r.c)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      e.showPriceLine,
                      'Change Price Price Line',
                    ),
                  },
                  { id: 'StudyOverlayPriceLine', title: I },
                ),
                s = Object(r.j)(
                  {
                    option: Object(r.b)(
                      this._undoModel,
                      e.minTick,
                      'Change study overlay style',
                    ),
                  },
                  {
                    id: 'StudyOverlayMinTick',
                    title: w,
                    options: new c.a(Object(y.d)()),
                  },
                ),
                o = Object(a.c)(this._source.title());
              return [
                Object(r.k)(
                  Object(n.__spreadArrays)(
                    [t],
                    this._getSeriesStylesDefinitions(),
                  ),
                  'SeriesStyleGroup' + o,
                ),
                i,
                s,
              ];
            }),
            (t.prototype._getSeriesStylesDefinitions = function () {
              var e = this._source.properties().childs();
              return Object(j.a)(
                this._undoModel,
                e,
                e.style.value(),
                {
                  seriesPriceSources: y.b,
                  lineStyleTypes: y.c,
                  isJapaneseChartsAvailable: !1,
                },
                'mainSeries',
              );
            }),
            t
          );
        })(S);
    },
  },
]);
