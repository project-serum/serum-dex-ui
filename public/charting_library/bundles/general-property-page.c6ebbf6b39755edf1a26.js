(window.webpackJsonp = window.webpackJsonp || []).push([
  ['general-property-page'],
  {
    '+jnJ': function (e, t, i) {
      'use strict';
      i.d(t, 'a', function () {
        return r;
      }),
        i.d(t, 'b', function () {
          return s;
        });
      i('YFKU'), i('EsMY');
      var r,
        a = i('m/cY'),
        n = i('Vdly');
      function o(e) {
        return e === r.AlwaysOn || e === r.AlwaysOff ? e : r.VisibleOnMouseOver;
      }
      function s(e, t) {
        var i, s;
        function l() {
          if (!i) {
            i = Object(a.a)();
            var r = n.getValue(e);
            void 0 === r && void 0 !== t && (r = n.getValue(t)),
              i.setValue(o(r)),
              i.subscribe(i, function (t) {
                n.setValue(e, o(t.value()));
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
            if (!s) {
              s = Object(a.a)();
              var e = l(),
                t = function () {
                  var t = e.value();
                  t !== r.AlwaysOn &&
                    t !== r.AlwaysOff &&
                    (t = Modernizr.mobiletouch
                      ? r.AlwaysOn
                      : r.VisibleOnMouseOver),
                    s && s.setValue(t);
                };
              e.subscribe(s, t), t();
            }
            return s;
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
      i.d(t, 'c', function () {
        return n;
      }),
        i.d(t, 'd', function () {
          return o;
        }),
        i.d(t, 'b', function () {
          return s;
        }),
        i.d(t, 'a', function () {
          return l;
        });
      var r,
        a = i('+jnJ'),
        n = 'NavigationButtons.visibility',
        o = (r = Object(a.b)(n)).property,
        s = r.availableValues,
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
        n = i('Kxc7'),
        o = (i('N22A'), i('hY0g')),
        s = i.n(o),
        l = i('HSjo'),
        c = i('1yQO'),
        u = i('1ANp'),
        h = i('RspR'),
        d = i('MWAT'),
        p = i('zqjM'),
        b = i('x2L+'),
        g = window.t('Show Buy/Sell Buttons');
      var w = i('qFKp'),
        y = window.t('Symbol'),
        v = window.t('OHLC Values'),
        O = window.t('Bar Change Values'),
        P = window.t('Indicator Titles'),
        m = window.t('Indicator Arguments'),
        f = window.t('Indicator Values'),
        j = window.t('Background'),
        C = (window.t('Wrap text'), window.t('Show Open market status'));
      w.CheckMobile.any();
      function S(e, t, i, r, a) {
        var o = [],
          c = [],
          u = Object(l.j)(
            {
              checked: Object(l.b)(
                e,
                t.showSeriesTitle,
                'Change Symbol Description Visibility',
              ),
              option: Object(l.b)(e, i.property, 'Change Symbol Legend Format'),
            },
            { id: 'symbolTextSource', title: y, options: new s.a(i.values) },
          );
        if ((c.push(u), null !== r)) {
          var h = Object(l.c)(
            { checked: Object(l.b)(e, r, 'Change show open market status') },
            { id: 'showOpenMarketStatus', title: C },
          );
          c.push(h);
        }
        var d = Object(l.c)(
          {
            checked: Object(l.b)(
              e,
              t.showSeriesOHLC,
              'Change OHLC Values Visibility',
            ),
          },
          { id: 'ohlcTitle', title: v },
        );
        c.push(d);
        var p = Object(l.c)(
          {
            checked: Object(l.b)(
              e,
              t.showBarChange,
              'Change Bar Change Visibility',
            ),
          },
          { id: 'barChange', title: O },
        );
        c.push(p), o.push(Object(l.k)(c, 'seriesLegendVisibilityGroup'));
        var b = (function (e, t) {
          return null !== t && n.enabled('buy_sell_buttons')
            ? Object(l.c)(
                {
                  checked: Object(l.a)(
                    e,
                    t.showSellBuyButtons,
                    'Change buy/sell buttons visibility',
                  ),
                },
                {
                  id: 'tradingSellBuyPanel',
                  title: g,
                },
              )
            : null;
        })(e, a);
        null !== b &&
          o.push(Object(l.k)([b], 'sellBuyButtonsLegendVisibilityGroup'));
        var w = [],
          S = Object(l.c)(
            {
              checked: Object(l.b)(
                e,
                t.showStudyArguments,
                'Change Indicator Arguments Visibility',
              ),
            },
            { id: 'studyArguments', title: m },
          ),
          _ = Object(l.d)(
            {
              checked: Object(l.b)(
                e,
                t.showStudyTitles,
                'Change Indicator Titles Visibility',
              ),
            },
            { id: 'studyTitles', title: P },
            [S],
          );
        w.push(_);
        var V = Object(l.c)(
          {
            checked: Object(l.b)(
              e,
              t.showStudyValues,
              'Change Indicator Values Visibility',
            ),
          },
          { id: 'studyValues', title: f },
        );
        w.push(V), o.push(Object(l.k)(w, 'studiesLegendVisibilityGroup'));
        var L = [],
          k = Object(l.q)(
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
            { id: 'legendBgTransparency', title: j },
          );
        return L.push(k), o.push(Object(l.k)(L, 'generalLegendGroup')), o;
      }
      var _ = i('oXaB'),
        V = i('Z5lT'),
        L = i('GDWD'),
        k = window.t('Symbol Name Label'),
        M = window.t('Symbol Last Price Label'),
        B =
          (window.t('Symbol Previous Day Close Price Label (Intraday Only)'),
          window.t('Indicator Name Label')),
        x = window.t('Indicator Last Value Label'),
        A =
          (window.t('Financials Name Label'),
          window.t('Financials Last Value Label'),
          window.t('Bid and Ask Labels'),
          window.t('Pre/Post Market Price Label'),
          window.t('High and low price labels')),
        z = window.t('Average close price label'),
        D = window.t('Countdown To Bar Close'),
        T = window.t('Currency'),
        H = window.t('Plus Button'),
        R = window.t('Scales Placement'),
        G = window.t('Date Format'),
        N = window.t('Lock Price to Bar Ratio'),
        W = window.t('No Overlapping Labels'),
        F = [
          {
            value: _.PriceAxisLastValueMode.LastPriceAndPercentageValue,
            title: window.t('Price and Percentage Value'),
          },
          {
            value: _.PriceAxisLastValueMode.LastValueAccordingToScale,
            title: window.t('Value according to Scale'),
          },
        ];
      var I = window.t('Background'),
        E = window.t('Vert Grid Lines'),
        q = window.t('Horz Grid Lines'),
        J = window.t('Session Breaks'),
        K = window.t('Scales text'),
        U = window.t('Scales lines'),
        Y = window.t('Crosshair'),
        Z = window.t('Watermark'),
        Q = window.t('Top Margin'),
        X = window.t('Navigation Buttons'),
        $ = window.t('Pane Buttons'),
        ee = window.t('Bottom Margin'),
        te = window.t('Right Margin'),
        ie = window.t('bars', { context: 'unit' });
      var re,
        ae = i('e1ZQ'),
        ne = i('ZZnO'),
        oe = i('gQ5K'),
        se = i('+6ja'),
        le = i('34BO'),
        ce = i('ggCF'),
        ue = i('Iilx'),
        he = i('DyO1'),
        de = i('iUxq'),
        pe = i('WS5G'),
        be =
          (((re = {}).symbol = le),
          (re.legend = ce),
          (re.scales = ue),
          (re.appearance = he),
          (re.events = de),
          (re.trading = pe),
          re);
      i.d(t, 'ChartPropertyDefinitionsViewModel', function () {
        return me;
      });
      var ge = window.t('Symbol'),
        we = window.t('Status line'),
        ye = window.t('Scales'),
        ve = window.t('Appearance'),
        Oe = (window.t('Events'), window.t('Trading'), null);
      var Pe = [
          { value: 'description', title: window.t('Description') },
          { value: 'ticker', title: window.t('Ticker') },
        ],
        me = (function () {
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
                          ((e._propertyPages = Object(r.f)(t)),
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
                values: se.availableTimezones.map(function (e) {
                  return { value: e.id, title: e.title };
                }),
              };
              return new p.a(
                this._series,
                this._undoModel,
                'symbol',
                ge,
                be.symbol,
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
                  values: Pe,
                },
                i = S(
                  this._undoModel,
                  e,
                  t,
                  this._options.marketStatusWidgetEnabled ? b.b : null,
                  Oe,
                );
              return Object(c.a)(i, 'legend', we, be.legend);
            }),
            (e.prototype._createScalesPropertyPage = function () {
              var e = this._createScalesDefinitions();
              return Object(c.a)(e, 'scales', ye, be.scales);
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
                  property: ne.dateFormatProperty,
                  values:
                    ((e = new Date(Date.UTC(1997, 8, 29))),
                    ae.a.map(function (t) {
                      return {
                        value: t,
                        title: new oe.DateFormatter(t).format(e),
                      };
                    })),
                },
                a = this._model.mainSeriesScaleRatioProperty();
              return (function (e, t, i, r) {
                var a = r.seriesPriceScale.properties().childs(),
                  o = [],
                  c = [];
                if (r.seriesHasClosePrice) {
                  var u = Object(l.c)(
                      {
                        checked: Object(l.b)(
                          e,
                          i.showSymbolLabels,
                          'Show Symbol Labels',
                        ),
                      },
                      { id: 'symbolNameLabel', title: k },
                    ),
                    h = Object(l.j)(
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
                        title: M,
                        options: new s.a(F),
                      },
                    );
                  c.push(u, h);
                }
                var d = t.highLowAvgPrice,
                  p = Object(l.c)(
                    {
                      checked: Object(l.b)(
                        e,
                        d.childs().highLowPriceLabelsVisible,
                        'Change high/low price labels visibility',
                      ),
                    },
                    { id: 'highLowPriceLabels', title: A },
                  ),
                  b = Object(l.c)(
                    {
                      checked: Object(l.b)(
                        e,
                        d.childs().averageClosePriceLabelVisible,
                        'Change average close price label visibility',
                      ),
                    },
                    { id: 'averageClosePriceLabels', title: z },
                  );
                c.push(p, b);
                var g = Object(l.c)(
                    {
                      checked: Object(l.b)(
                        e,
                        i.showStudyPlotLabels,
                        'Show Study Plots Labels',
                      ),
                    },
                    { id: 'studyNameLabel', title: B },
                  ),
                  w = Object(l.c)(
                    {
                      checked: Object(l.b)(
                        e,
                        i.showStudyLastValue,
                        'Change Indicator Last Value Visibility',
                      ),
                    },
                    { id: 'studyLastValueLabel', title: x },
                  );
                c.push(g, w);
                var y = Object(l.c)(
                  {
                    checked: Object(l.b)(
                      e,
                      a.alignLabels,
                      'Change No Overlapping Labels',
                    ),
                  },
                  { id: 'noOverlappingLabels', title: W },
                );
                if ((c.push(y), n.enabled('countdown'))) {
                  var v = Object(l.c)(
                    {
                      checked: Object(l.b)(
                        e,
                        t.showCountdown,
                        'Change Show Countdown',
                      ),
                    },
                    { id: 'countdown', title: D },
                  );
                  c.push(v);
                }
                if (r.currencyConversionEnabled) {
                  var O = Object(l.c)(
                    {
                      checked: Object(l.b)(
                        e,
                        i.showCurrency,
                        'Change Currency Label Visibility',
                      ),
                    },
                    { id: 'scalesCurrency', title: T },
                  );
                  c.push(O);
                }
                if (e.crossHairSource().isMenuEnabled()) {
                  var P = Object(l.c)(
                    {
                      checked: Object(l.b)(
                        e,
                        L.addPlusButtonProperty,
                        'Plus Button',
                      ),
                    },
                    { id: 'addPlusButton', title: H },
                  );
                  c.push(P);
                }
                o.push(Object(l.k)(c, 'generalScalesLabelsGroup'));
                var m = Object(l.i)(
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
                      title: N,
                      min: new s.a(
                        r.mainSeriesScaleRatioProperty.getMinValue(),
                      ),
                      max: new s.a(
                        r.mainSeriesScaleRatioProperty.getMaxValue(),
                      ),
                      step: new s.a(
                        r.mainSeriesScaleRatioProperty.getStepChangeValue(),
                      ),
                    },
                  ),
                  f = Object(l.j)(
                    {
                      option: Object(l.w)(
                        e,
                        r.scalesPlacementPropertyObj.property,
                      ),
                    },
                    {
                      id: 'scalesPlacement',
                      title: R,
                      options: new s.a(r.scalesPlacementPropertyObj.values),
                    },
                  );
                if ((o.push(m, f), n.enabled('scales_date_format'))) {
                  var j = Object(l.j)(
                    {
                      option: Object(l.b)(
                        e,
                        r.dateFormatPropertyObj.property,
                        'Change Date Format',
                      ),
                    },
                    {
                      id: 'dateFormat',
                      title: G,
                      options: new s.a(r.dateFormatPropertyObj.values),
                    },
                  );
                  o.push(j);
                }
                return o;
              })(this._undoModel, this._series.properties().childs(), t, {
                disableSeriesPrevCloseValueProperty: this._series.isDWMProperty(),
                seriesHasClosePrice: this._series.hasClosePrice(),
                seriesPriceScale: this._series.priceScale(),
                mainSeriesScaleRatioProperty: a,
                scalesPlacementPropertyObj: i,
                dateFormatPropertyObj: r,
                currencyConversionEnabled: this._options
                  .currencyConversionEnabled,
              });
            }),
            (e.prototype._createMaxOffsetPropertyObject = function () {
              var e = Object(a.ensureNotNull)(this._model.timeScale()),
                t = new s.a(Math.floor(e.maxRightOffset()));
              e.maxRightOffsetChanged().subscribe(this, function (e) {
                t.setValue(Math.floor(e));
              }),
                (this._maxRightOffsetPropertyObject = {
                  property: e.defaultRightOffsetProperty(),
                  min: new s.a(0),
                  max: t,
                });
            }),
            (e.prototype._createAppearancePropertyPage = function () {
              var e = this._chartWidgetProperties.childs(),
                t = e.paneProperties.childs(),
                i = e.scalesProperties.childs(),
                r = this._model.watermarkSource(),
                o = null;
              null !== r && (o = r.properties().childs());
              var d = { property: u.d(), values: u.b() },
                p = { property: h.c(), values: h.b() },
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
                w = (function (e, t, i, r, a, o, c, u, h) {
                  var d = [],
                    p = Object(l.e)(
                      {
                        color: Object(l.u)(
                          e,
                          t.background,
                          null,
                          'Change Chart Background Color',
                        ),
                        gradientColor1: Object(l.u)(
                          e,
                          t.backgroundGradientStartColor,
                          null,
                          'Change Chart Background Color',
                        ),
                        gradientColor2: Object(l.u)(
                          e,
                          t.backgroundGradientEndColor,
                          null,
                          'Change Chart Background Color',
                        ),
                        type: Object(l.b)(
                          e,
                          t.backgroundType,
                          'Change Chart Background Type',
                        ),
                      },
                      { id: 'chartBackground', title: I, noAlpha: !0 },
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
                      { id: 'vertGridLine', title: E },
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
                      { id: 'horizGridLine', title: q },
                    ),
                    v = Object(l.h)(
                      {
                        disabled: Object(l.b)(
                          e,
                          o,
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
                      { id: 'sessionBeaks', title: J },
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
                      { id: 'scalesText', title: K },
                    ),
                    P = Object(l.h)(
                      {
                        color: Object(l.u)(
                          e,
                          r.lineColor,
                          null,
                          'Change Scales Lines Color',
                        ),
                      },
                      { id: 'scalesLine', title: U },
                    ),
                    m = t.crossHairProperties.childs(),
                    f = Object(l.h)(
                      {
                        color: Object(l.u)(
                          e,
                          m.color,
                          m.transparency,
                          'Change Crosshair Color',
                        ),
                        width: Object(l.b)(
                          e,
                          m.width,
                          'Change Crosshair Width',
                        ),
                        style: Object(l.b)(
                          e,
                          m.style,
                          'Change Crosshair Style',
                        ),
                      },
                      { id: 'crossHair', title: Y },
                    );
                  if ((d.push(p, g, y, v, O, P, f), null !== i)) {
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
                      { id: 'watermark', title: Z },
                    );
                    d.push(j);
                  }
                  var C = Object(l.j)(
                    {
                      option: Object(l.b)(
                        e,
                        u.property,
                        'Change Navigation Buttons Visibility',
                      ),
                    },
                    { id: 'navButtons', title: X, options: new s.a(u.values) },
                  );
                  d.push(C);
                  var S = Object(l.j)(
                    {
                      option: Object(l.b)(
                        e,
                        h.property,
                        'Change Pane Buttons Visibility',
                      ),
                    },
                    { id: 'paneButtons', title: $, options: new s.a(h.values) },
                  );
                  d.push(S);
                  var _ = Object(l.i)(
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
                        title: Q,
                        min: new s.a(0),
                        max: new s.a(25),
                        step: new s.a(1),
                        unit: new s.a('%'),
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
                        title: ee,
                        min: new s.a(0),
                        max: new s.a(25),
                        step: new s.a(1),
                        unit: new s.a('%'),
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
                        title: te,
                        min: c.min,
                        max: c.max,
                        step: new s.a(1),
                        unit: new s.a(ie),
                      },
                    ),
                    M = [Object(l.k)(d, 'generalAppearanceGroup'), _, L];
                  return (
                    n.enabled('chart_property_page_right_margin_editor') &&
                      M.push(k),
                    M
                  );
                })(
                  this._undoModel,
                  t,
                  o,
                  i,
                  b,
                  this._series.isDWMProperty(),
                  g,
                  d,
                  p,
                );
              return Object(c.a)(w, 'appearance', ve, be.appearance);
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
        return o;
      }),
        i.d(t, 'b', function () {
          return s;
        }),
        i.d(t, 'a', function () {
          return l;
        });
      var r,
        a = i('+jnJ'),
        n = i('1ANp'),
        o = (r = Object(a.b)('PaneButtons.visibility', n.c)).property,
        s = r.availableValues,
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
