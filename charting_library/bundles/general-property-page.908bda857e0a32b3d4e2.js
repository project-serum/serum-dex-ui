(window.webpackJsonp = window.webpackJsonp || []).push([
  ['general-property-page'],
  {
    '+jnJ': function (e, t, i) {
      'use strict';
      i.d(t, 'a', function () {
        return r;
      }),
        i.d(t, 'b', function () {
          return o;
        });
      i('YFKU'), i('bf9a');
      var r,
        a = i('m/cY'),
        s = i('Vdly');
      function n(e) {
        return e === r.AlwaysOn || e === r.AlwaysOff ? e : r.VisibleOnMouseOver;
      }
      function o(e, t) {
        var i, o;
        function l() {
          if (!i) {
            i = Object(a.a)();
            var r = s.getValue(e);
            void 0 === r && void 0 !== t && (r = s.getValue(t)),
              i.setValue(n(r)),
              i.subscribe(i, function (t) {
                s.setValue(e, n(t.value()));
              });
          }
          return i;
        }
        return {
          property: l,
          availableValues: function () {
            return [
              {
                value: r.VisibleOnMouseOver,
                title: window.t('Visible on Mouse Over'),
              },
              { value: r.AlwaysOn, title: window.t('Always Visible') },
              { value: r.AlwaysOff, title: window.t('Always Invisible') },
            ];
          },
          actualBehavior: function () {
            if (!o) {
              o = Object(a.a)();
              var e = l(),
                t = function () {
                  var t = e.value();
                  t !== r.AlwaysOn &&
                    t !== r.AlwaysOff &&
                    (t = Modernizr.mobiletouch
                      ? r.AlwaysOn
                      : r.VisibleOnMouseOver),
                    o && o.setValue(t);
                };
              e.subscribe(o, t), t();
            }
            return o;
          },
        };
      }
      !(function (e) {
        (e.AlwaysOn = 'alwaysOn'),
          (e.VisibleOnMouseOver = 'visibleOnMouseOver'),
          (e.AlwaysOff = 'alwaysOff');
      })(r || (r = {}));
    },
    '1ANp': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'navigationButtonsVisibilityKey', function () {
          return s;
        }),
        i.d(t, 'property', function () {
          return n;
        }),
        i.d(t, 'availableValues', function () {
          return o;
        }),
        i.d(t, 'actualBehavior', function () {
          return l;
        });
      var r,
        a = i('+jnJ'),
        s = 'NavigationButtons.visibility',
        n = (r = Object(a.b)(s)).property,
        o = r.availableValues,
        l = r.actualBehavior;
    },
    '34BO': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9 7H7v14h2v3h1v-3h2V7h-2V4H9v3zM8 8v12h3V8H8zm9 1h-2v10h2v3h1v-3h2V9h-2V6h-1v3zm-1 1v8h3v-8h-3z"/></svg>';
    },
    '5lPo': function (e, t, i) {
      'use strict';
      i.r(t);
      var r = i('mrSG'),
        a = i('Eyy1'),
        s = i('Kxc7'),
        n = (i('N22A'), i('hY0g')),
        o = i.n(n),
        l = i('HSjo'),
        c = i('1yQO'),
        h = i('1ANp'),
        u = i('RspR'),
        d = i('MWAT'),
        p = i('zqjM'),
        b = i('x2L+'),
        g = i('qFKp'),
        w = window.t('Symbol'),
        y = window.t('OHLC Values'),
        v = window.t('Bar Change Values'),
        O = window.t('Indicator Titles'),
        m = window.t('Indicator Arguments'),
        f = window.t('Indicator Values'),
        P = window.t('Background'),
        j = window.t('Wrap text'),
        _ = window.t('Show Open market status'),
        C = g.CheckMobile.any();
      var S = i('oXaB'),
        V = i('Z5lT'),
        L = window.t('Symbol Name Label'),
        k = window.t('Symbol Last Value Label'),
        M =
          (window.t('Symbol Previous Close Value Label (Intraday Only)'),
          window.t('Indicator Name Label')),
        x = window.t('Indicator Last Value Label'),
        B =
          (window.t('Financials Name Label'),
          window.t('Financials Last Value Label'),
          window.t('Countdown To Bar Close')),
        A = window.t('Currency'),
        z = window.t('Scales Placement'),
        D = window.t('Date Format'),
        T = window.t('Lock Price to Bar Ratio'),
        R = window.t('No Overlapping Labels'),
        H = [
          {
            value: S.PriceAxisLastValueMode.LastPriceAndPercentageValue,
            title: window.t('Price and Percentage Value'),
          },
          {
            value: S.PriceAxisLastValueMode.LastValueAccordingToScale,
            title: window.t('Value according to Scale'),
          },
        ];
      var N = window.t('Background'),
        F = window.t('Vert Grid Lines'),
        G = window.t('Horz Grid Lines'),
        I = window.t('Session Breaks'),
        W = window.t('Scales text'),
        E = window.t('Scales lines'),
        K = window.t('Crosshair'),
        q = window.t('Watermark'),
        J = window.t('Top Margin'),
        U = window.t('Navigation Buttons'),
        Z = window.t('Pane Buttons'),
        Q = window.t('Bottom Margin'),
        Y = window.t('Right Margin'),
        X = window.t('bars', { context: 'unit' });
      var $,
        ee = i('e1ZQ'),
        te = i('ZZnO'),
        ie = i('gQ5K'),
        re = i('+6ja'),
        ae = i('34BO'),
        se = i('ggCF'),
        ne = i('Iilx'),
        oe = i('DyO1'),
        le = i('iUxq'),
        ce = i('WS5G'),
        he =
          ((($ = {}).symbol = ae),
          ($.legend = se),
          ($.scales = ne),
          ($.appearance = oe),
          ($.events = le),
          ($.trading = ce),
          $);
      i.d(t, 'ChartPropertyDefinitionsViewModel', function () {
        return we;
      });
      var ue = window.t('Symbol'),
        de = window.t('Status line'),
        pe = window.t('Scales'),
        be = window.t('Appearance');
      window.t('Events'), window.t('Trading');
      var ge = [
          { value: 'description', title: window.t('Description') },
          { value: 'ticker', title: window.t('Ticker') },
        ],
        we = (function () {
          function e(e, t, i) {
            (this._propertyPages = null),
              (this._maxRightOffsetPropertyObject = null),
              (this._isDestroyed = !1),
              (this._undoModel = e),
              (this._model = this._undoModel.model()),
              (this._series = this._model.mainSeries()),
              (this._chartWidgetProperties = t),
              (this._options = i),
              (this._seriesPropertyDefinitionViewModel = this._createSeriesViewModel()),
              (this._legendPropertyPage = this._createLegendPropertyPage()),
              (this._scalesPropertyPage = this._createScalesPropertyPage()),
              (this._appearancePropertyPage = this._createAppearancePropertyPage()),
              (this._tradingPropertyPage = this._createTradingPropertyPage()),
              (this._eventsPropertyPage = this._createEventsPropertyPage()),
              this._series
                .onStyleChanged()
                .subscribe(this, this._updateDefinitions),
              this._series
                .priceScaleChanged()
                .subscribe(this, this._updateDefinitions);
          }
          return (
            (e.prototype.destroy = function () {
              null !== this._propertyPages &&
                this._propertyPages
                  .filter(function (e, t) {
                    return 0 !== t;
                  })
                  .forEach(function (e) {
                    Object(l.t)(e.definitions.value());
                  }),
                this._seriesPropertyDefinitionViewModel.destroy(),
                this._series
                  .onStyleChanged()
                  .unsubscribe(this, this._updateDefinitions),
                this._series
                  .priceScaleChanged()
                  .unsubscribe(this, this._updateDefinitions),
                Object(a.ensureNotNull)(this._model.timeScale())
                  .maxRightOffsetChanged()
                  .unsubscribeAll(this),
                (this._isDestroyed = !0);
            }),
            (e.prototype.propertyPages = function () {
              var e = this;
              return null === this._propertyPages
                ? this._seriesPropertyDefinitionViewModel
                    .propertyPages()
                    .then(function (t) {
                      if (e._isDestroyed)
                        throw new Error(
                          'ChartPropertyDefinitionsViewModel already destroyed',
                        );
                      return (
                        null === e._propertyPages &&
                          ((e._propertyPages = Object(r.__spreadArrays)(t)),
                          e._propertyPages.push(
                            e._legendPropertyPage,
                            e._scalesPropertyPage,
                            e._appearancePropertyPage,
                          ),
                          null !== e._tradingPropertyPage &&
                            e._propertyPages.push(e._tradingPropertyPage),
                          null !== e._eventsPropertyPage &&
                            e._propertyPages.push(e._eventsPropertyPage)),
                        e._propertyPages
                      );
                    })
                : Promise.resolve(this._propertyPages);
            }),
            (e.prototype._updateDefinitions = function () {
              Object(l.t)(this._scalesPropertyPage.definitions.value());
              var e = this._createScalesDefinitions();
              this._scalesPropertyPage.definitions.setValue(e);
            }),
            (e.prototype._createSeriesViewModel = function () {
              var e = {
                property: this._model.properties().timezone,
                values: re.availableTimezones.map(function (e) {
                  return { value: e.id, title: e.title };
                }),
              };
              return new p.a(
                this._series,
                this._undoModel,
                'symbol',
                ue,
                he.symbol,
                e,
              );
            }),
            (e.prototype._createLegendPropertyPage = function () {
              var e = this._chartWidgetProperties
                  .childs()
                  .paneProperties.childs()
                  .legendProperties.childs(),
                t = {
                  property: this._series
                    .properties()
                    .childs()
                    .statusViewStyle.childs().symbolTextSource,
                  values: ge,
                },
                i = (function (e, t, i, a) {
                  var s = [],
                    n = Object(l.j)(
                      {
                        checked: Object(l.b)(
                          e,
                          t.showSeriesTitle,
                          'Change Symbol Description Visibility',
                        ),
                        option: Object(l.b)(
                          e,
                          i.property,
                          'Change Symbol Legend Format',
                        ),
                      },
                      {
                        id: 'symbolTextSource',
                        title: w,
                        options: new o.a(i.values),
                      },
                    );
                  if ((s.push(n), null !== a)) {
                    var c = Object(l.c)(
                      {
                        checked: Object(l.b)(
                          e,
                          a,
                          'Change show open market status',
                        ),
                      },
                      { id: 'showOpenMarketStatus', title: _ },
                    );
                    s.push(c);
                  }
                  var h = Object(l.c)(
                    {
                      checked: Object(l.b)(
                        e,
                        t.showSeriesOHLC,
                        'Change OHLC Values Visibility',
                      ),
                    },
                    { id: 'ohlcTitle', title: y },
                  );
                  s.push(h);
                  var u = Object(l.c)(
                    {
                      checked: Object(l.b)(
                        e,
                        t.showBarChange,
                        'Change Bar Change Visibility',
                      ),
                    },
                    { id: 'barChange', title: v },
                  );
                  s.push(u);
                  var d = Object(l.c)(
                      {
                        checked: Object(l.b)(
                          e,
                          t.showStudyArguments,
                          'Change Indicator Arguments Visibility',
                        ),
                      },
                      { id: 'studyArguments', title: m },
                    ),
                    p = Object(l.d)(
                      {
                        checked: Object(l.b)(
                          e,
                          t.showStudyTitles,
                          'Change Indicator Titles Visibility',
                        ),
                      },
                      { id: 'studyTitles', title: O },
                      [d],
                    );
                  s.push(p);
                  var b = Object(l.c)(
                    {
                      checked: Object(l.b)(
                        e,
                        t.showStudyValues,
                        'Change Indicator Values Visibility',
                      ),
                    },
                    { id: 'studyValues', title: f },
                  );
                  s.push(b);
                  var g = [],
                    S = Object(l.q)(
                      {
                        checked: Object(l.b)(
                          e,
                          t.showBackground,
                          'Change Legend Background Visibility',
                        ),
                        transparency: Object(l.b)(
                          e,
                          t.backgroundTransparency,
                          'Change Legend Background Transparency',
                        ),
                      },
                      { id: 'legendBgTransparency', title: P },
                    );
                  if ((g.push(S), !C)) {
                    var V = Object(l.c)(
                      {
                        checked: Object(l.b)(e, t.wrapText, 'Change wrap text'),
                      },
                      { id: 'wrapText', title: j },
                    );
                    g.push(V);
                  }
                  return Object(r.__spreadArrays)(
                    [Object(l.k)(s, 'generalLegendVisibilityGroup')],
                    g,
                  );
                })(
                  this._undoModel,
                  e,
                  t,
                  this._options.marketStatusWidgetEnabled ? b.b : null,
                );
              return Object(c.a)(i, 'legend', de, he.legend);
            }),
            (e.prototype._createScalesPropertyPage = function () {
              var e = this._createScalesDefinitions();
              return Object(c.a)(e, 'scales', pe, he.scales);
            }),
            (e.prototype._createScalesDefinitions = function () {
              var e,
                t = this._chartWidgetProperties
                  .childs()
                  .scalesProperties.childs(),
                i = {
                  property: this._model.properties()
                    .priceScaleSelectionStrategyName,
                  values: Object(d.allPriceScaleSelectionStrategyInfo)().map(
                    function (e) {
                      return { value: e.name, title: e.title };
                    },
                  ),
                },
                r = {
                  property: te.dateFormatProperty,
                  values:
                    ((e = new Date(Date.UTC(1997, 8, 29))),
                    ee.availableDateFormats.map(function (t) {
                      return {
                        value: t,
                        title: new ie.DateFormatter(t).format(e),
                      };
                    })),
                },
                a = this._model.mainSeriesScaleRatioProperty();
              return (function (e, t, i, r) {
                var a = r.seriesPriceScale.properties().childs(),
                  n = [],
                  c = [];
                if (r.seriesHasClosePrice) {
                  var h = Object(l.c)(
                      {
                        checked: Object(l.b)(
                          e,
                          i.showSymbolLabels,
                          'Show Symbol Labels',
                        ),
                      },
                      { id: 'symbolNameLabel', title: L },
                    ),
                    u = Object(l.j)(
                      {
                        checked: Object(l.b)(
                          e,
                          i.showSeriesLastValue,
                          'Change Symbol Last Value Visibility',
                        ),
                        option: Object(l.b)(
                          e,
                          i.seriesLastValueMode,
                          'Change Symbol Last Value Mode',
                        ),
                      },
                      {
                        id: 'symbolLastValueLabel',
                        title: k,
                        options: new o.a(H),
                      },
                    );
                  c.push(h, u);
                }
                var d = Object(l.c)(
                    {
                      checked: Object(l.b)(
                        e,
                        i.showStudyPlotLabels,
                        'Show Study Plots Labels',
                      ),
                    },
                    { id: 'studyNameLabel', title: M },
                  ),
                  p = Object(l.c)(
                    {
                      checked: Object(l.b)(
                        e,
                        i.showStudyLastValue,
                        'Change Indicator Last Value Visibility',
                      ),
                    },
                    { id: 'studyLastValueLabel', title: x },
                  );
                c.push(d, p);
                var b = Object(l.c)(
                  {
                    checked: Object(l.b)(
                      e,
                      a.alignLabels,
                      'Change No Overlapping Labels',
                    ),
                  },
                  { id: 'noOverlappingLabels', title: R },
                );
                if ((c.push(b), s.enabled('countdown'))) {
                  var g = Object(l.c)(
                    {
                      checked: Object(l.b)(
                        e,
                        t.showCountdown,
                        'Change Show Countdown',
                      ),
                    },
                    { id: 'countdown', title: B },
                  );
                  c.push(g);
                }
                if (r.currencyLabelEnabled) {
                  var w = Object(l.c)(
                    {
                      checked: Object(l.b)(
                        e,
                        i.showCurrency,
                        'Change Currency Label Visibility',
                      ),
                    },
                    { id: 'scalesCurrency', title: A },
                  );
                  c.push(w);
                }
                n.push(Object(l.k)(c, 'generalScalesLabelsGroup'));
                var y = Object(l.i)(
                    {
                      checked: Object(l.v)(
                        e,
                        a.lockScale,
                        r.seriesPriceScale,
                        'Change lock scale',
                      ),
                      value: Object(l.x)(
                        e,
                        r.mainSeriesScaleRatioProperty,
                        'Change Price to Bar Ratio',
                        [
                          Object(V.c)(7),
                          function (e) {
                            return e;
                          },
                        ],
                      ),
                    },
                    {
                      id: 'lockScale',
                      title: T,
                      min: new o.a(
                        r.mainSeriesScaleRatioProperty.getMinValue(),
                      ),
                      max: new o.a(
                        r.mainSeriesScaleRatioProperty.getMaxValue(),
                      ),
                      step: new o.a(
                        r.mainSeriesScaleRatioProperty.getStepChangeValue(),
                      ),
                    },
                  ),
                  v = Object(l.j)(
                    {
                      option: Object(l.w)(
                        e,
                        r.scalesPlacementPropertyObj.property,
                      ),
                    },
                    {
                      id: 'scalesPlacement',
                      title: z,
                      options: new o.a(r.scalesPlacementPropertyObj.values),
                    },
                  );
                if ((n.push(y, v), s.enabled('scales_date_format'))) {
                  var O = Object(l.j)(
                    {
                      option: Object(l.b)(
                        e,
                        r.dateFormatPropertyObj.property,
                        'Change Date Format',
                      ),
                    },
                    {
                      id: 'dateFormat',
                      title: D,
                      options: new o.a(r.dateFormatPropertyObj.values),
                    },
                  );
                  n.push(O);
                }
                return n;
              })(this._undoModel, this._series.properties().childs(), t, {
                disableSeriesPrevCloseValueProperty: this._series.isDWMProperty(),
                seriesHasClosePrice: this._series.hasClosePrice(),
                seriesPriceScale: this._series.priceScale(),
                mainSeriesScaleRatioProperty: a,
                scalesPlacementPropertyObj: i,
                dateFormatPropertyObj: r,
                currencyLabelEnabled: this._options.currencyLabelEnabled,
              });
            }),
            (e.prototype._createMaxOffsetPropertyObject = function () {
              var e = Object(a.ensureNotNull)(this._model.timeScale()),
                t = new o.a(Math.floor(e.maxRightOffset()));
              e.maxRightOffsetChanged().subscribe(this, function (e) {
                t.setValue(Math.floor(e));
              }),
                (this._maxRightOffsetPropertyObject = {
                  property: e.defaultRightOffsetProperty(),
                  min: new o.a(0),
                  max: t,
                });
            }),
            (e.prototype._createAppearancePropertyPage = function () {
              var e = this._chartWidgetProperties.childs(),
                t = e.paneProperties.childs(),
                i = e.scalesProperties.childs(),
                r = this._model.watermarkSource(),
                n = null;
              null !== r && (n = r.properties().childs());
              var d = { property: h.property(), values: h.availableValues() },
                p = { property: u.c(), values: u.b() },
                b = this._model
                  .sessions()
                  .properties()
                  .childs()
                  .graphics.childs()
                  .vertlines.childs()
                  .sessBreaks.childs();
              null === this._maxRightOffsetPropertyObject &&
                this._createMaxOffsetPropertyObject();
              var g = Object(a.ensureNotNull)(
                  this._maxRightOffsetPropertyObject,
                ),
                w = (function (e, t, i, r, a, n, c, h, u) {
                  var d = [],
                    p = Object(l.e)(
                      {
                        color: Object(l.u)(
                          e,
                          t.background,
                          null,
                          'Change Chart Background Color',
                        ),
                      },
                      { id: 'chartBackground', title: N, noAlpha: !0 },
                    ),
                    b = t.vertGridProperties.childs(),
                    g = Object(l.h)(
                      {
                        color: Object(l.u)(
                          e,
                          b.color,
                          null,
                          'Change Vert Grid Lines Color',
                        ),
                        style: Object(l.b)(
                          e,
                          b.style,
                          'Change Vert Grid Lines Style',
                        ),
                      },
                      { id: 'vertGridLine', title: F },
                    ),
                    w = t.horzGridProperties.childs(),
                    y = Object(l.h)(
                      {
                        color: Object(l.u)(
                          e,
                          w.color,
                          null,
                          'Change Horz Grid Lines Color',
                        ),
                        style: Object(l.b)(
                          e,
                          w.style,
                          'Change Horz Grid Lines Style',
                        ),
                      },
                      { id: 'horizGridLine', title: G },
                    ),
                    v = Object(l.h)(
                      {
                        disabled: Object(l.b)(
                          e,
                          n,
                          'Change Intraday Interval Property',
                        ),
                        checked: Object(l.b)(
                          e,
                          a.visible,
                          'Change Sessions Breaks Visibility',
                        ),
                        color: Object(l.u)(
                          e,
                          a.color,
                          null,
                          'Change Sessions Breaks Color',
                        ),
                        width: Object(l.b)(
                          e,
                          a.width,
                          'Change Sessions Breaks Width',
                        ),
                        style: Object(l.b)(
                          e,
                          a.style,
                          'Change Sessions Breaks Style',
                        ),
                      },
                      { id: 'sessionBeaks', title: I },
                    ),
                    O = Object(l.p)(
                      {
                        color: Object(l.u)(
                          e,
                          r.textColor,
                          null,
                          'Change Scales Text Color',
                        ),
                        size: Object(l.b)(
                          e,
                          r.fontSize,
                          'Change Scales Font Size',
                        ),
                      },
                      { id: 'scalesText', title: W },
                    ),
                    m = Object(l.h)(
                      {
                        color: Object(l.u)(
                          e,
                          r.lineColor,
                          null,
                          'Change Scales Lines Color',
                        ),
                      },
                      { id: 'scalesLine', title: E },
                    ),
                    f = t.crossHairProperties.childs(),
                    P = Object(l.h)(
                      {
                        color: Object(l.u)(
                          e,
                          f.color,
                          f.transparency,
                          'Change Crosshair Color',
                        ),
                        width: Object(l.b)(
                          e,
                          f.width,
                          'Change Crosshair Width',
                        ),
                        style: Object(l.b)(
                          e,
                          f.style,
                          'Change Crosshair Style',
                        ),
                      },
                      { id: 'crossHair', title: K },
                    );
                  if ((d.push(p, g, y, v, O, m, P), null !== i)) {
                    var j = Object(l.e)(
                      {
                        checked: Object(l.b)(
                          e,
                          i.visibility,
                          'Change Symbol Watermark Visibility',
                        ),
                        color: Object(l.u)(
                          e,
                          i.color,
                          null,
                          'Change Symbol Watermark Color',
                        ),
                      },
                      { id: 'watermark', title: q },
                    );
                    d.push(j);
                  }
                  var _ = Object(l.j)(
                    {
                      option: Object(l.b)(
                        e,
                        h.property,
                        'Change Navigation Buttons Visibility',
                      ),
                    },
                    { id: 'navButtons', title: U, options: new o.a(h.values) },
                  );
                  d.push(_);
                  var C = Object(l.j)(
                    {
                      option: Object(l.b)(
                        e,
                        u.property,
                        'Change Pane Buttons Visibility',
                      ),
                    },
                    { id: 'paneButtons', title: Z, options: new o.a(u.values) },
                  );
                  d.push(C);
                  var S = Object(l.i)(
                      {
                        value: Object(l.b)(
                          e,
                          t.topMargin,
                          'Change Top Margin',
                          [V.b],
                        ),
                      },
                      {
                        type: 0,
                        id: 'paneTopMargin',
                        title: J,
                        min: new o.a(0),
                        max: new o.a(25),
                        step: new o.a(1),
                        unit: new o.a('%'),
                      },
                    ),
                    L = Object(l.i)(
                      {
                        value: Object(l.b)(
                          e,
                          t.bottomMargin,
                          'Change Bottom Margin',
                          [V.b],
                        ),
                      },
                      {
                        type: 0,
                        id: 'paneBottomMargin',
                        title: Q,
                        min: new o.a(0),
                        max: new o.a(25),
                        step: new o.a(1),
                        unit: new o.a('%'),
                      },
                    ),
                    k = Object(l.i)(
                      {
                        value: Object(l.b)(
                          e,
                          c.property,
                          'Change Right Margin',
                          [V.b],
                        ),
                      },
                      {
                        type: 0,
                        id: 'paneRightMargin',
                        title: Y,
                        min: c.min,
                        max: c.max,
                        step: new o.a(1),
                        unit: new o.a(X),
                      },
                    ),
                    M = [Object(l.k)(d, 'generalAppearanceGroup'), S, L];
                  return (
                    s.enabled('chart_property_page_right_margin_editor') &&
                      M.push(k),
                    M
                  );
                })(
                  this._undoModel,
                  t,
                  n,
                  i,
                  b,
                  this._series.isDWMProperty(),
                  g,
                  d,
                  p,
                );
              return Object(c.a)(w, 'appearance', be, he.appearance);
            }),
            (e.prototype._createTradingPropertyPage = function () {
              return null;
            }),
            (e.prototype._createEventsPropertyPage = function () {
              return null;
            }),
            e
          );
        })();
    },
    DyO1: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M7.5 16.5l-1 1v4h4l1-1m-4-4l2 2m-2-2l9-9m-5 13l-2-2m2 2l9-9m-11 7l9-9m0 0l-2-2m2 2l2 2m-4-4l.94-.94a1.5 1.5 0 0 1 2.12 0l1.88 1.88a1.5 1.5 0 0 1 0 2.12l-.94.94"/></svg>';
    },
    Iilx: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M10.5 20.5a2 2 0 1 1-2-2m2 2a2 2 0 0 0-2-2m2 2h14m-16-2v-14m16 16L21 17m3.5 3.5L21 24M8.5 4.5L12 8M8.5 4.5L5 8"/></svg>';
    },
    RspR: function (e, t, i) {
      'use strict';
      i.d(t, 'c', function () {
        return n;
      }),
        i.d(t, 'b', function () {
          return o;
        }),
        i.d(t, 'a', function () {
          return l;
        });
      var r,
        a = i('+jnJ'),
        s = i('1ANp'),
        n = (r = Object(a.b)(
          'PaneButtons.visibility',
          s.navigationButtonsVisibilityKey,
        )).property,
        o = r.availableValues,
        l = r.actualBehavior;
    },
    WS5G: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M24.068 9a.569.569 0 0 1 .73.872L19 14.842l-5.798-4.97a.569.569 0 0 1 .73-.872l4.751 3.887.317.26.317-.26L24.068 9zm1.47-.67a1.569 1.569 0 0 0-2.103-.104L19 11.854l-4.435-3.628a1.569 1.569 0 0 0-2.014 2.405l6.124 5.249.325.279.325-.28 6.124-5.248a1.569 1.569 0 0 0 .088-2.3zm-11.484 9.728a.57.57 0 0 0 .688-.91L9 12.636l-5.742 4.512a.57.57 0 0 0 .688.91l4.76-3.462.294-.214.294.214 4.76 3.462zm1.446.649a1.57 1.57 0 0 1-2.034.16L9 15.618l-4.466 3.249a1.57 1.57 0 0 1-1.894-2.505l6.051-4.755.309-.243.309.243 6.051 4.755c.74.581.806 1.68.14 2.345z"/></svg>';
    },
    ggCF: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" d="M6 13h12v1H6zM6 17h12v1H6zM6 21h12v1H6z"/><rect width="17" height="3" stroke="currentColor" rx="1.5" x="5.5" y="6.5"/></svg>';
    },
    iUxq: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M10 4h1v2h6V4h1v2h2.5A2.5 2.5 0 0 1 23 8.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 5 19.5v-11A2.5 2.5 0 0 1 7.5 6H10V4zm8 3H7.5A1.5 1.5 0 0 0 6 8.5v11A1.5 1.5 0 0 0 7.5 21h13a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 20.5 7H18zm-3 2h-2v2h2V9zm-7 4h2v2H8v-2zm12-4h-2v2h2V9zm-7 4h2v2h-2v-2zm-3 4H8v2h2v-2zm3 0h2v2h-2v-2zm7-4h-2v2h2v-2z"/></svg>';
    },
  },
]);
