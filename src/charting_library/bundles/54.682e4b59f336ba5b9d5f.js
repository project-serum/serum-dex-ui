(window.webpackJsonp = window.webpackJsonp || []).push([
  [54],
  {
    '1yQO': function (e, i, t) {
      'use strict';
      t.d(i, 'a', function () {
        return r;
      });
      var o = t('hY0g'),
        n = t.n(o);
      function r(e, i, t, o) {
        void 0 === o && (o = null);
        var r = { id: i, title: t, definitions: new n.a(e) };
        return null !== o && (r.icon = o), r;
      }
    },
    '25b6': function (e, i, t) {
      'use strict';
      t.d(i, 'b', function () {
        return r;
      }),
        t.d(i, 'c', function () {
          return s;
        }),
        t.d(i, 'a', function () {
          return l;
        });
      var o = /[<"'&>]/g,
        n = function (e) {
          return '&#' + e.charCodeAt(0) + ';';
        };
      function r(e) {
        return e.replace(o, n);
      }
      function s(e) {
        return void 0 === e && (e = ''), e.replace(/\s+/g, '');
      }
      function l(e) {
        return (
          void 0 === e && (e = ''),
          e.replace(/\b\w/g, function (e) {
            return e.toUpperCase();
          })
        );
      }
    },
    Equz: function (e, i, t) {
      'use strict';
      t.d(i, 'a', function () {
        return A;
      });
      var o = t('mrSG'),
        n = t('Eyy1'),
        r = t('HSjo'),
        s = t('n5al'),
        l = t('hY0g'),
        c = t.n(l),
        a = t('Kxc7'),
        d = t('Z5lT'),
        u = t('25b6'),
        h = window.t('Color Bars Based on Previous Close'),
        b = window.t('HLC Bars'),
        p = window.t('Up Color'),
        w = window.t('Down Color'),
        y = window.t('Thin Bars'),
        f = window.t('Body'),
        C = window.t('Borders'),
        S = window.t('Wick'),
        O = window.t('Price Source'),
        j = window.t('Type'),
        v = window.t('Line'),
        _ = window.t('Top Line'),
        g = window.t('Bottom Line'),
        m = window.t('Fill'),
        P = window.t('Fill Top Area'),
        L = window.t('Fill Bottom Area'),
        B =
          (window.t('Up bars'),
          window.t('Down bars'),
          window.t('Projection up bars'),
          window.t('Projection down bars'),
          window.t(
            'Show real prices on price scale (instead of Heikin-Ashi price)',
          )),
        M = window.t('Base Level'),
        k = window.t('Body'),
        D = window.t('Borders'),
        T = window.t('Labels');
      function E(e, i, t, o) {
        var n = Object(u.c)(t);
        return [
          Object(r.r)(
            {
              checked: Object(r.b)(
                e,
                i.drawBody,
                'Change ' + t + ' Body Visibility',
              ),
              color1: Object(r.u)(
                e,
                i.upColor,
                null,
                'Change ' + t + ' Up Color',
              ),
              color2: Object(r.u)(
                e,
                i.downColor,
                null,
                'Change ' + t + ' Down Color',
              ),
            },
            { id: o + 'Symbol' + n + 'CandlesColor', title: f },
          ),
          Object(r.r)(
            {
              checked: Object(r.b)(
                e,
                i.drawBorder,
                'Change ' + t + ' Border Visibility',
              ),
              color1: Object(r.u)(
                e,
                i.borderUpColor,
                null,
                'Change ' + t + ' Up Border Color',
              ),
              color2: Object(r.u)(
                e,
                i.borderDownColor,
                null,
                'Change ' + t + ' Down Border Color',
              ),
            },
            { id: o + 'Symbol' + n + 'BordersColor', title: C },
          ),
          Object(r.r)(
            {
              checked: Object(r.b)(
                e,
                i.drawWick,
                'Change ' + t + ' Wick Visibility',
              ),
              color1: Object(r.u)(
                e,
                i.wickUpColor,
                null,
                'Change ' + t + ' Wick Up Color',
              ),
              color2: Object(r.u)(
                e,
                i.wickDownColor,
                null,
                'Change ' + t + ' Wick Down Color',
              ),
            },
            { id: o + 'Symbol' + n + 'WickColors', title: S },
          ),
        ];
      }
      function A(e, i, t, l, u) {
        switch (t) {
          case 0:
            return (function (e, i, t) {
              return [
                Object(r.c)(
                  {
                    checked: Object(r.b)(
                      e,
                      i.barColorsOnPrevClose,
                      'Change Color Bars Based on Previous Close',
                    ),
                  },
                  { id: t + 'SymbolBarStyleBarColorsOnPrevClose', title: h },
                ),
                Object(r.c)(
                  {
                    checked: Object(r.b)(e, i.dontDrawOpen, 'Change HLC Bars'),
                  },
                  { id: t + 'SymbolDontDrawOpen', title: b },
                ),
                Object(r.e)(
                  {
                    color: Object(r.u)(
                      e,
                      i.upColor,
                      null,
                      'Change Bar Up Color',
                    ),
                  },
                  { id: t + 'SymbolUpColor', title: p },
                ),
                Object(r.e)(
                  {
                    color: Object(r.u)(
                      e,
                      i.downColor,
                      null,
                      'Change Bar Down Color',
                    ),
                  },
                  { id: t + 'SymbolDownColor', title: w },
                ),
                Object(r.c)(
                  { checked: Object(r.b)(e, i.thinBars, 'Change Thin Bars') },
                  { id: t + 'SymbolBarThinBars', title: y },
                ),
              ];
            })(e, i.barStyle.childs(), u);
          case 1:
            return (function (e, i, t) {
              var n = Object(r.c)(
                {
                  checked: Object(r.b)(
                    e,
                    i.barColorsOnPrevClose,
                    'Change Color Bars Based on Previous Close',
                  ),
                },
                { id: t + 'SymbolCandleStyleBarColorsOnPrevClose', title: h },
              );
              return Object(o.__spreadArrays)([n], E(e, i, 'Candle', t));
            })(e, i.candleStyle.childs(), u);
          case 2:
            return (function (e, i, t, o, n) {
              return [
                Object(r.j)(
                  {
                    option: Object(r.b)(
                      e,
                      i.priceSource,
                      'Change Price Source',
                    ),
                  },
                  {
                    id: n + 'SymbolLinePriceSource',
                    title: O,
                    options: new c.a(t),
                  },
                ),
                Object(r.j)(
                  { option: Object(r.b)(e, i.styleType, 'Change Line Type') },
                  { id: n + 'SymbolStyleType', title: j, options: new c.a(o) },
                ),
                Object(r.h)(
                  {
                    color: Object(r.u)(e, i.color, null, 'Change Line Color'),
                    width: Object(r.b)(e, i.linewidth, 'Change Line Width'),
                  },
                  { id: n + 'SymbolLineStyle', title: v },
                ),
              ];
            })(
              e,
              i.lineStyle.childs(),
              l.seriesPriceSources,
              l.lineStyleTypes,
              u,
            );
          case 3:
            return (function (e, i, t, o) {
              return [
                Object(r.j)(
                  {
                    option: Object(r.b)(
                      e,
                      i.priceSource,
                      'Change Area Price Source',
                    ),
                  },
                  {
                    id: o + 'SymbolAreaPriceSource',
                    title: O,
                    options: new c.a(t),
                  },
                ),
                Object(r.h)(
                  {
                    color: Object(r.u)(
                      e,
                      i.linecolor,
                      null,
                      'Change Area Line Color',
                    ),
                    width: Object(r.b)(
                      e,
                      i.linewidth,
                      'Change Area Line Width',
                    ),
                  },
                  { id: o + 'SymbolAreaLineStyle', title: v },
                ),
                Object(r.r)(
                  {
                    color1: Object(r.u)(
                      e,
                      i.color1,
                      i.transparency,
                      'Change Area Fill Color',
                    ),
                    color2: Object(r.u)(
                      e,
                      i.color2,
                      i.transparency,
                      'Change Area Fill Color',
                    ),
                  },
                  { id: o + 'SymbolAreaFills', title: m },
                ),
              ];
            })(e, i.areaStyle.childs(), l.seriesPriceSources, u);
          case 9:
            return E(e, i.hollowCandleStyle.childs(), 'Hollow Candles', u);
          case 10:
            return (function (e, i, t, o) {
              return [
                Object(r.j)(
                  {
                    option: Object(r.b)(
                      e,
                      i.priceSource,
                      'Change Baseline Price Source',
                    ),
                  },
                  {
                    id: o + 'SymbolBaseLinePriceSource',
                    title: O,
                    options: new c.a(t),
                  },
                ),
                Object(r.h)(
                  {
                    color: Object(r.u)(
                      e,
                      i.topLineColor,
                      null,
                      'Change Baseline Top Line Color',
                    ),
                    width: Object(r.b)(
                      e,
                      i.topLineWidth,
                      'Change Baseline Top Line Width',
                    ),
                  },
                  { id: o + 'SymbolBaseLineTopLine', title: _ },
                ),
                Object(r.h)(
                  {
                    color: Object(r.u)(
                      e,
                      i.bottomLineColor,
                      null,
                      'Change Baseline Bottom Line Color',
                    ),
                    width: Object(r.b)(
                      e,
                      i.bottomLineWidth,
                      'Change Baseline Bottom Line Width',
                    ),
                  },
                  { id: o + 'SymbolBaseLineBottomLine', title: g },
                ),
                Object(r.r)(
                  {
                    color1: Object(r.u)(
                      e,
                      i.topFillColor1,
                      null,
                      'Change Baseline Fill Top Area Color',
                    ),
                    color2: Object(r.u)(
                      e,
                      i.topFillColor2,
                      null,
                      'Change Baseline Fill Top Area Color',
                    ),
                  },
                  { id: o + 'SymbolBaseLineTopFills', title: P },
                ),
                Object(r.r)(
                  {
                    color1: Object(r.u)(
                      e,
                      i.bottomFillColor1,
                      null,
                      'Change Baseline Fill Bottom Area Color',
                    ),
                    color2: Object(r.u)(
                      e,
                      i.bottomFillColor2,
                      null,
                      'Change Baseline Fill Bottom Area Color',
                    ),
                  },
                  { id: o + 'SymbolBaseLineBottomFills', title: L },
                ),
                Object(r.i)(
                  {
                    value: Object(r.b)(
                      e,
                      i.baseLevelPercentage,
                      'Change Base Level',
                      [d.b],
                    ),
                  },
                  {
                    id: o + 'SymbolBaseLevelPercentage',
                    title: M,
                    type: 0,
                    min: new c.a(0),
                    max: new c.a(100),
                    step: new c.a(1),
                    unit: new c.a('%'),
                  },
                ),
              ];
            })(e, i.baselineStyle.childs(), l.seriesPriceSources, u);
        }
        if (!i.hasOwnProperty('haStyle')) return [];
        if (l.isJapaneseChartsAvailable && 8 === t)
          return (function (e, i, t) {
            var n = Object(r.c)(
                {
                  checked: Object(r.b)(
                    e,
                    i.showRealLastPrice,
                    'Change Show real prices on price scale (instead of Heiken-Ashi price)',
                  ),
                },
                { id: t + 'SymbolRealLastPrice', title: B },
              ),
              s = Object(r.c)(
                {
                  checked: Object(r.b)(
                    e,
                    i.barColorsOnPrevClose,
                    'Change Color Bars Based on Previous Close',
                  ),
                },
                { id: t + 'SymbolHAStyleBarColorsOnPrevClose', title: h },
              );
            return Object(o.__spreadArrays)([n, s], E(e, i, 'Heikin Ashi', t));
          })(e, i.haStyle.childs(), u);
        if (l.isJapaneseChartsAvailable && a.enabled('japanese_chart_styles'));
        if (a.enabled('chart_style_hilo') && 12 === t) {
          var f = i.hiloStyle.childs(),
            C = Object(s.chartStyleStudyId)(12);
          return (function (e, i, t, o) {
            var n = Object(r.e)(
                {
                  checked: Object(r.b)(
                    e,
                    i.drawBody,
                    'Change High-Low Body Visibility',
                  ),
                  color: Object(r.u)(
                    e,
                    i.color,
                    null,
                    'Change High-Low Body Color',
                  ),
                },
                { id: o + 'SymbolBodiesColor', title: k },
              ),
              s = Object(r.e)(
                {
                  checked: Object(r.b)(
                    e,
                    i.showBorders,
                    'Change Show High-Low Borders',
                  ),
                  color: Object(r.u)(
                    e,
                    i.borderColor,
                    null,
                    'Change High-Low Border Color',
                  ),
                },
                { id: o + 'SymbolBorderColor', title: D },
              ),
              l = t.map(function (e) {
                return { title: String(e), value: e };
              });
            return [
              n,
              s,
              Object(r.p)(
                {
                  checked: Object(r.b)(
                    e,
                    i.showLabels,
                    'Change Show High-Low Labels',
                  ),
                  color: Object(r.u)(
                    e,
                    i.labelColor,
                    null,
                    'Change High-Low Labels Color',
                  ),
                  size: Object(r.b)(
                    e,
                    i.fontSize,
                    'Change High-Low Labels Font Size',
                  ),
                },
                {
                  id: o + 'SymbolLabels',
                  title: T,
                  isEditable: !1,
                  isMultiLine: !1,
                  sizeItems: l,
                },
              ),
            ];
          })(e, f, Object(n.ensure)(l.defaultSeriesFontSizes)[C], u);
        }
        return [];
      }
    },
    Z5lT: function (e, i, t) {
      'use strict';
      t.d(i, 'b', function () {
        return n;
      }),
        t.d(i, 'a', function () {
          return r;
        }),
        t.d(i, 'c', function () {
          return s;
        });
      var o = t('T6Of');
      function n(e) {
        return Math.floor(e);
      }
      function r(e) {
        return parseInt(String(e));
      }
      function s(e) {
        var i = new o.LimitedPrecisionNumericFormatter(e);
        return function (e) {
          if (null === e) return e;
          var t = i.parse(i.format(e));
          return t.res ? t.value : null;
        };
      }
    },
    zqjM: function (e, i, t) {
      'use strict';
      var o = t('mrSG'),
        n = t('Eyy1'),
        r = t('HSjo'),
        s = t('hY0g'),
        l = t.n(s),
        c = t('n5al'),
        a = t('dfhE'),
        d = t('Equz'),
        u = t('Z5lT');
      function h(e) {
        return e.map(function (e) {
          return { value: e, title: window.t(e) };
        });
      }
      function b(e, i, t, o, s, a, d) {
        var b = [];
        return (
          t.forEach(function (t) {
            if (
              (function (e, i) {
                return (
                  !e.isHidden &&
                  (void 0 === e.visible ||
                    (function (e, i) {
                      if (!e) return !0;
                      var t = e.split('==');
                      return !(t.length < 2) && i[t[0]].value() === t[1];
                    })(e.visible, i))
                );
              })(t, o)
            ) {
              var p = t.id;
              if (o.hasOwnProperty(p)) {
                var w = o[p],
                  y = (function (e, i) {
                    return 'style' === e.id
                      ? window.t('Box size assignment method')
                      : 'boxSize' === e.id
                      ? window.t('Box Size')
                      : window.t(i.childs().name.value());
                  })(t, s[p]);
                if ('options' in t) {
                  var f = Object(n.ensure)(t.options);
                  b.push(
                    Object(r.j)(
                      { option: Object(r.b)(e, w, 'Change ' + y) },
                      { id: '' + d + t.name, title: y, options: new l.a(h(f)) },
                    ),
                  );
                } else if ('integer' !== t.type) {
                  if ('float' === t.type) {
                    var C = void 0;
                    return (
                      (C =
                        (function (e, i) {
                          return !(
                            ((i === Object(c.chartStyleStudyId)(4) ||
                              i === Object(c.chartStyleStudyId)(6)) &&
                              'boxSize' === e) ||
                            (i === Object(c.chartStyleStudyId)(5) &&
                              'reversalAmount' === e)
                          );
                        })(p, i) || null === a.value()
                          ? new l.a(t.min)
                          : a),
                      void b.push(
                        Object(r.i)(
                          { value: Object(r.b)(e, w, 'Change ' + y) },
                          {
                            id: '' + d + t.name,
                            title: y,
                            type: 1,
                            min: C,
                            max: new l.a(t.max),
                            defval: t.defval,
                          },
                        ),
                      )
                    );
                  }
                  'text' !== t.type
                    ? 'bool' !== t.type ||
                      b.push(
                        Object(r.c)(
                          { checked: Object(r.b)(e, w, 'Change ' + y) },
                          { id: '' + d + t.name, title: y },
                        ),
                      )
                    : b.push(
                        Object(r.p)(
                          { text: Object(r.b)(e, w, 'Change ' + y) },
                          {
                            id: '' + d + t.name,
                            title: y,
                            isEditable: !0,
                            isMultiLine: !1,
                          },
                        ),
                      );
                } else
                  b.push(
                    Object(r.i)(
                      { value: Object(r.b)(e, w, 'Change ' + y, [u.b]) },
                      {
                        id: '' + d + t.name,
                        title: y,
                        type: 0,
                        min: new l.a(t.min),
                        max: new l.a(t.max),
                        defval: t.defval,
                      },
                    ),
                  );
              }
            }
          }),
          b
        );
      }
      var p,
        w = t('txPx'),
        y = t('Cf1E');
      t.d(i, 'b', function () {
        return I;
      }),
        t.d(i, 'c', function () {
          return H;
        }),
        t.d(i, 'd', function () {
          return W;
        }),
        t.d(i, 'a', function () {
          return x;
        });
      var f = Object(w.getLogger)('Chart.Definitions.Series'),
        C =
          (window.t('Adjust Data for Dividends'),
          window.t('Extended Hours (Intraday Only)')),
        S = window.t('Last Price Line'),
        O =
          (window.t('Previous Day Close Price Line'),
          window.t('Bid and Ask lines'),
          window.t('Pre/Post Market Price Line'),
          window.t('Precision')),
        j = window.t('Time Zone'),
        v = window.t('Open'),
        _ = window.t('High'),
        g = window.t('Low'),
        m = window.t('Close'),
        P = window.t('(H + L)/2'),
        L = window.t('(H + L + C)/3'),
        B = window.t('(O + H + L + C)/4'),
        M = window.t('Simple'),
        k = window.t('With Markers'),
        D = window.t('Step'),
        T = window.t('Default'),
        E =
          (((p = {})[Object(c.chartStyleStudyId)(12)] = [
            7,
            8,
            9,
            10,
            11,
            12,
            14,
            16,
            20,
            24,
            28,
            32,
            40,
          ]),
          p),
        A = [
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
        I = [
          { title: v, value: 'open' },
          { title: _, value: 'high' },
          { title: g, value: 'low' },
          { title: m, value: 'close' },
          { title: P, value: 'hl2' },
          { title: L, value: 'hlc3' },
          { title: B, value: 'ohlc4' },
        ],
        H = [
          { title: M, value: a.STYLE_LINE_TYPE_SIMPLE },
          { title: k, value: a.STYLE_LINE_TYPE_MARKERS },
          { title: D, value: a.STYLE_LINE_TYPE_STEP },
        ];
      function W() {
        for (var e = [{ title: T, value: 'default' }], i = 0; i < A.length; i++)
          e.push({
            title: A[i].minMove + '/' + A[i].priceScale,
            value: A[i].priceScale + ',' + A[i].minMove + ',' + A[i].frac,
          });
        return e;
      }
      var x = (function () {
        function e(e, i, t, o, n, r) {
          (this._definitions = null),
            (this._inputsSubscriptions = null),
            (this._isDestroyed = !1),
            (this._propertyPages = null),
            (this._seriesMinTickWV = null),
            (this._series = e),
            (this._undoModel = i),
            (this._model = this._undoModel.model()),
            (this._propertyPageId = t),
            (this._propertyPageName = o),
            (this._propertyPageIcon = n),
            (this._timezonePropertyObj = r),
            this._series
              .onStyleChanged()
              .subscribe(this, this._updateDefinitions),
            this._series
              .dataEvents()
              .symbolResolved()
              .subscribe(this, this._updateSeriesMinTickWV),
            this._updateSeriesMinTickWV();
        }
        return (
          (e.prototype.destroy = function () {
            null !== this._propertyPages &&
              this._propertyPages.forEach(function (e) {
                Object(r.t)(e.definitions.value());
              }),
              this._series
                .onStyleChanged()
                .unsubscribe(this, this._updateDefinitions),
              this._series.dataEvents().symbolResolved().unsubscribeAll(this),
              this._unsubscribeInputsUpdate(),
              (this._isDestroyed = !0);
          }),
          (e.prototype.propertyPages = function () {
            var e = this;
            return null === this._propertyPages
              ? this._getDefinitions().then(function (i) {
                  if (e._isDestroyed)
                    throw new Error(
                      'SeriesPropertyDefinitionsViewModel already destroyed',
                    );
                  return (
                    null === e._propertyPages &&
                      (e._propertyPages = [
                        {
                          id: e._propertyPageId,
                          title: e._propertyPageName,
                          icon: e._propertyPageIcon,
                          definitions: new l.a(i),
                        },
                      ]),
                    e._propertyPages
                  );
                })
              : Promise.resolve(this._propertyPages);
          }),
          (e.prototype._seriesMinTick = function () {
            var e = this._series.symbolInfo();
            return null !== e ? e.minmov / e.pricescale : null;
          }),
          (e.prototype._updateSeriesMinTickWV = function () {
            null === this._seriesMinTickWV
              ? (this._seriesMinTickWV = new l.a(this._seriesMinTick()))
              : this._seriesMinTickWV.setValue(this._seriesMinTick());
          }),
          (e.prototype._updateDefinitions = function () {
            var e = this;
            null !== this._definitions && Object(r.t)(this._definitions),
              (this._definitions = null),
              this._unsubscribeInputsUpdate(),
              this._createSeriesDefinitions().then(function (i) {
                if (e._isDestroyed)
                  throw new Error(
                    'SeriesPropertyDefinitionsViewModel already destroyed',
                  );
                Object(n.ensureNotNull)(
                  e._propertyPages,
                )[0].definitions.setValue(i);
              });
          }),
          (e.prototype._getDefinitions = function () {
            return null === this._definitions
              ? this._createSeriesDefinitions()
              : Promise.resolve(this._definitions);
          }),
          (e.prototype._unsubscribeInputsUpdate = function () {
            var e = this;
            null !== this._inputsSubscriptions &&
              (this._inputsSubscriptions.forEach(function (i) {
                i.unsubscribeAll(e);
              }),
              (this._inputsSubscriptions = null));
          }),
          (e.prototype._subscribeInputsUpdate = function (e, i) {
            var t = this,
              o = [];
            e.forEach(function (e) {
              if (void 0 !== e.visible) {
                var n = e.visible.split('==');
                if (2 === n.length) {
                  var r = i[n[0]];
                  -1 === o.indexOf(r) &&
                    (r.subscribe(t, t._updateDefinitions), o.push(r));
                }
              }
            }),
              o.length > 0
                ? (this._inputsSubscriptions = o)
                : (this._inputsSubscriptions = null);
          }),
          (e.prototype._createSeriesDefinitions = function () {
            var e = this,
              i = this._series.properties().childs(),
              t = this._series.getInputsProperties(),
              s = this._series.getInputsInfoProperties(),
              a = i.style.value(),
              u = this._series.getStyleShortName();
            return new Promise(function (i) {
              var o = Object(c.chartStyleStudyId)(a);
              null !== o
                ? e._model
                    .studyMetaInfoRepository()
                    .findById({ type: 'java', studyId: o })
                    .then(function (o) {
                      if (e._isDestroyed)
                        throw new Error(
                          'SeriesPropertyDefinitionsViewModel already destroyed',
                        );
                      if (null === e._definitions) {
                        var r = Object(n.ensureNotNull)(e._seriesMinTickWV),
                          l = b(e._undoModel, o.id, o.inputs, t, s, r, u);
                        e._subscribeInputsUpdate(o.inputs, t), i(l);
                      } else i(null);
                    })
                    .catch(function (e) {
                      f.logWarn(
                        'Find meta info for create series definitions with error - ' +
                          Object(y.a)(e),
                      ),
                        i(null);
                    })
                : i(null);
            }).then(function (t) {
              if (e._isDestroyed)
                throw new Error(
                  'SeriesPropertyDefinitionsViewModel already destroyed',
                );
              if (null !== e._definitions) return e._definitions;
              var n = Object(d.a)(
                e._undoModel,
                i,
                a,
                {
                  seriesPriceSources: I,
                  lineStyleTypes: H,
                  isJapaneseChartsAvailable: !0,
                  defaultSeriesFontSizes: E,
                },
                'mainSeries',
              );
              null !== t && n.push.apply(n, t);
              var s = Object(r.j)(
                  {
                    option: Object(r.b)(
                      e._undoModel,
                      i.minTick,
                      'Change Decimal Places',
                    ),
                  },
                  { id: u + 'SymbolMinTick', title: O, options: new l.a(W()) },
                ),
                c = Object(r.j)(
                  {
                    option: Object(r.b)(
                      e._undoModel,
                      e._timezonePropertyObj.property,
                      'Change Timezone',
                    ),
                  },
                  {
                    id: u + 'SymbolTimezone',
                    title: j,
                    options: new l.a(e._timezonePropertyObj.values),
                  },
                );
              return (
                (e._definitions = Object(o.__spreadArrays)(
                  [Object(r.k)(n, 'generalSymbolStylesGroup')],
                  e._seriesPriceLinesDefinitions(u),
                  e._seriesDataDefinitions(u),
                  [s, c],
                )),
                e._definitions
              );
            });
          }),
          (e.prototype._seriesDataDefinitions = function (e) {
            this._series.dividendsAdjustmentProperty();
            return [];
          }),
          (e.prototype._createOutOfSessionDefinition = function (e) {
            var i = this._series.properties().childs().extendedHours,
              t = this._model
                .sessions()
                .properties()
                .childs()
                .graphics.childs()
                .backgrounds.childs()
                .outOfSession.childs();
            return Object(r.e)(
              {
                disabled: Object(r.b)(
                  this._undoModel,
                  this._series.isDWMProperty(),
                  'Change Disabled Extended hours visibility',
                ),
                checked: Object(r.b)(
                  this._undoModel,
                  i,
                  'Change Extended hours visibility',
                ),
                color: Object(r.u)(
                  this._undoModel,
                  t.color,
                  t.transparency,
                  'Change Extended hours color',
                ),
              },
              { id: e + 'SymbolExtendedHours', title: C },
            );
          }),
          (e.prototype._createPrePostMarketDefinition = function (e) {
            var i = this._series.properties().childs().extendedHours,
              t = this._model.sessions(),
              o = t
                .properties()
                .childs()
                .graphics.childs()
                .backgrounds.childs()
                .preMarket.childs(),
              n = t
                .properties()
                .childs()
                .graphics.childs()
                .backgrounds.childs()
                .postMarket.childs();
            return Object(r.r)(
              {
                disabled: Object(r.b)(
                  this._undoModel,
                  this._series.isDWMProperty(),
                  'Change Disabled Extended hours visibility',
                ),
                checked: Object(r.b)(
                  this._undoModel,
                  i,
                  'Change Extended hours visibility',
                ),
                color1: Object(r.u)(
                  this._undoModel,
                  o.color,
                  o.transparency,
                  'Change Pre Market Color',
                ),
                color2: Object(r.u)(
                  this._undoModel,
                  n.color,
                  n.transparency,
                  'Change Post Market Down Color',
                ),
              },
              { id: e + 'SymbolExtendedHours', title: C },
            );
          }),
          (e.prototype._seriesPriceLinesDefinitions = function (e) {
            var i = [],
              t = this._series.properties().childs();
            if (this._series.hasClosePrice()) {
              var o = Object(r.h)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    t.showPriceLine,
                    'Change Price Price Line',
                  ),
                  color: Object(r.u)(
                    this._undoModel,
                    t.priceLineColor,
                    null,
                    'Change Price Line Color',
                  ),
                  width: Object(r.b)(
                    this._undoModel,
                    t.priceLineWidth,
                    'Change Price Line Width',
                  ),
                },
                { id: e + 'SymbolLastValuePriceLine', title: S },
              );
              i.push(o);
            }
            return this._series.hasClosePrice(), i;
          }),
          e
        );
      })();
    },
  },
]);
