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
    Equz: function (e, i, t) {
      'use strict';
      t.d(i, 'a', function () {
        return E;
      });
      var o = t('mrSG'),
        n = t('Eyy1'),
        r = t('HSjo'),
        l = t('n5al'),
        s = t('hY0g'),
        c = t.n(s),
        a = t('Kxc7'),
        u = t('Z5lT'),
        d = t('LIFs'),
        b = window.t('Color Bars Based on Previous Close'),
        h = window.t('HLC Bars'),
        p = window.t('Up Color'),
        w = window.t('Down Color'),
        f = window.t('Thin Bars'),
        y = window.t('Bodies'),
        C = window.t('Borders'),
        S = window.t('Wick'),
        v = window.t('Price Source'),
        j = window.t('Type'),
        O = window.t('Line'),
        m = window.t('Top Line'),
        _ = window.t('Bottom Line'),
        g = window.t('Fill'),
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
        T = window.t('Bodies'),
        k = window.t('Borders'),
        D = window.t('Labels');
      function A(e, i, t, o) {
        var n = Object(d.c)(t);
        return [
          Object(r.r)(
            {
              checked: Object(r.b)(
                e,
                i.drawBody,
                'Change ' + t + ' Bodies Visibility',
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
            { id: o + 'Symbol' + n + 'CandlesColor', title: y },
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
      function E(e, i, t, s, d) {
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
                  { id: t + 'SymbolBarStyleBarColorsOnPrevClose', title: b },
                ),
                Object(r.c)(
                  {
                    checked: Object(r.b)(e, i.dontDrawOpen, 'Change HLC Bars'),
                  },
                  { id: t + 'SymbolDontDrawOpen', title: h },
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
                  { id: t + 'SymbolBarThinBars', title: f },
                ),
              ];
            })(e, i.barStyle.childs(), d);
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
                { id: t + 'SymbolCandleStyleBarColorsOnPrevClose', title: b },
              );
              return Object(o.__spreadArrays)([n], A(e, i, 'Candle', t));
            })(e, i.candleStyle.childs(), d);
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
                    title: v,
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
                  { id: n + 'SymbolLineStyle', title: O },
                ),
              ];
            })(
              e,
              i.lineStyle.childs(),
              s.seriesPriceSources,
              s.lineStyleTypes,
              d,
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
                    title: v,
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
                  { id: o + 'SymbolAreaLineStyle', title: O },
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
                  { id: o + 'SymbolAreaFills', title: g },
                ),
              ];
            })(e, i.areaStyle.childs(), s.seriesPriceSources, d);
          case 9:
            return A(e, i.hollowCandleStyle.childs(), 'Hollow Candles', d);
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
                    title: v,
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
                  { id: o + 'SymbolBaseLineTopLine', title: m },
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
                  { id: o + 'SymbolBaseLineBottomLine', title: _ },
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
                      [u.b],
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
            })(e, i.baselineStyle.childs(), s.seriesPriceSources, d);
        }
        var y = i;
        if (s.isJapaneseChartsAvailable && 8 === t)
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
              l = Object(r.c)(
                {
                  checked: Object(r.b)(
                    e,
                    i.barColorsOnPrevClose,
                    'Change Color Bars Based on Previous Close',
                  ),
                },
                { id: t + 'SymbolHAStyleBarColorsOnPrevClose', title: b },
              );
            return Object(o.__spreadArrays)([n, l], A(e, i, 'Heikin Ashi', t));
          })(e, y.haStyle.childs(), d);
        if (s.isJapaneseChartsAvailable && a.enabled('japanese_chart_styles'));
        if (a.enabled('chart_style_hilo') && 12 === t) {
          var C = y.hiloStyle.childs(),
            S = Object(l.chartStyleStudyId)(12);
          return (function (e, i, t, o) {
            var n = Object(r.e)(
                {
                  checked: Object(r.b)(
                    e,
                    i.drawBody,
                    'Change High-Low Bodies Visibility',
                  ),
                  color: Object(r.u)(
                    e,
                    i.color,
                    null,
                    'Change High-Low Bodies Color',
                  ),
                },
                { id: o + 'SymbolBodiesColor', title: T },
              ),
              l = Object(r.e)(
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
                { id: o + 'SymbolBorderColor', title: k },
              ),
              s = t.map(function (e) {
                return { title: String(e), value: e };
              });
            return [
              n,
              l,
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
                  title: D,
                  isEditable: !1,
                  isMultiLine: !1,
                  sizeItems: s,
                },
              ),
            ];
          })(e, C, Object(n.ensure)(s.defaultSeriesFontSizes)[S], d);
        }
        return [];
      }
    },
    LIFs: function (e, i, t) {
      'use strict';
      t.d(i, 'b', function () {
        return r;
      }),
        t.d(i, 'c', function () {
          return l;
        }),
        t.d(i, 'a', function () {
          return s;
        });
      var o = /[<"'&>]/g,
        n = function (e) {
          return '&#' + e.charCodeAt(0) + ';';
        };
      function r(e) {
        return e.replace(o, n);
      }
      function l(e) {
        return void 0 === e && (e = ''), e.replace(/\s+/g, '');
      }
      function s(e) {
        return (
          void 0 === e && (e = ''),
          e.replace(/\b\w/g, function (e) {
            return e.toUpperCase();
          })
        );
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
          return l;
        });
      var o = t('T6Of');
      function n(e) {
        return Math.floor(e);
      }
      function r(e) {
        return parseInt(String(e));
      }
      function l(e) {
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
        l = t('hY0g'),
        s = t.n(l),
        c = t('n5al'),
        a = t('dfhE'),
        u = t('Equz'),
        d = t('Z5lT');
      function b(e) {
        return e.map(function (e) {
          return { value: e, title: window.t(e) };
        });
      }
      function h(e, i, t, o, l, a, u) {
        var h = [];
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
                  f = (function (e, i) {
                    return 'style' === e.id
                      ? window.t('Box size assignment method')
                      : 'boxSize' === e.id
                      ? window.t('Box Size')
                      : window.t(i.childs().name.value());
                  })(t, l[p]);
                if ('options' in t) {
                  var y = Object(n.ensure)(t.options);
                  h.push(
                    Object(r.j)(
                      { option: Object(r.b)(e, w, 'Change ' + f) },
                      { id: '' + u + t.name, title: f, options: new s.a(b(y)) },
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
                          ? new s.a(t.min)
                          : a),
                      void h.push(
                        Object(r.i)(
                          { value: Object(r.b)(e, w, 'Change ' + f) },
                          {
                            id: '' + u + t.name,
                            title: f,
                            type: 1,
                            min: C,
                            max: new s.a(t.max),
                            defval: t.defval,
                          },
                        ),
                      )
                    );
                  }
                  'text' !== t.type
                    ? 'bool' !== t.type ||
                      h.push(
                        Object(r.c)(
                          { checked: Object(r.b)(e, w, 'Change ' + f) },
                          { id: '' + u + t.name, title: f },
                        ),
                      )
                    : h.push(
                        Object(r.p)(
                          { text: Object(r.b)(e, w, 'Change ' + f) },
                          {
                            id: '' + u + t.name,
                            title: f,
                            isEditable: !0,
                            isMultiLine: !1,
                          },
                        ),
                      );
                } else
                  h.push(
                    Object(r.i)(
                      {
                        value: Object(r.b)(e, w, 'Change ' + f, [d.b]),
                      },
                      {
                        id: '' + u + t.name,
                        title: f,
                        type: 0,
                        min: new s.a(t.min),
                        max: new s.a(t.max),
                        defval: t.defval,
                      },
                    ),
                  );
              }
            }
          }),
          h
        );
      }
      var p,
        w = t('uOxu'),
        f = t('Cf1E');
      t.d(i, 'b', function () {
        return E;
      }),
        t.d(i, 'c', function () {
          return I;
        }),
        t.d(i, 'd', function () {
          return W;
        }),
        t.d(i, 'a', function () {
          return F;
        });
      var y = Object(w.getLogger)('Chart.Definitions.Series'),
        C =
          (window.t('Adjust Data for Dividends'),
          window.t('Extended Hours (Intraday Only)'),
          window.t('Last value line')),
        S = (window.t('Previous close value line'), window.t('Precision')),
        v = window.t('Time Zone'),
        j = window.t('Open'),
        O = window.t('High'),
        m = window.t('Low'),
        _ = window.t('Close'),
        g = window.t('(H + L)/2'),
        P = window.t('(H + L + C)/3'),
        L = window.t('(O + H + L + C)/4'),
        B = window.t('Simple'),
        M = window.t('With Markers'),
        T = window.t('Step'),
        k = window.t('Default'),
        D =
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
        E = [
          { title: j, value: 'open' },
          { title: O, value: 'high' },
          { title: m, value: 'low' },
          { title: _, value: 'close' },
          { title: g, value: 'hl2' },
          { title: P, value: 'hlc3' },
          { title: L, value: 'ohlc4' },
        ],
        I = [
          { title: B, value: a.STYLE_LINE_TYPE_SIMPLE },
          { title: M, value: a.STYLE_LINE_TYPE_MARKERS },
          { title: T, value: a.STYLE_LINE_TYPE_STEP },
        ];
      function W() {
        for (var e = [{ title: k, value: 'default' }], i = 0; i < A.length; i++)
          e.push({
            title: A[i].minMove + '/' + A[i].priceScale,
            value: A[i].priceScale + ',' + A[i].minMove + ',' + A[i].frac,
          });
        return e;
      }
      var F = (function () {
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
                          definitions: new s.a(i),
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
              ? (this._seriesMinTickWV = new s.a(this._seriesMinTick()))
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
              l = this._series.getInputsInfoProperties(),
              a = i.style.value(),
              d = this._series.getStyleShortName();
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
                          s = h(e._undoModel, o.id, o.inputs, t, l, r, d);
                        e._subscribeInputsUpdate(o.inputs, t), i(s);
                      } else i(null);
                    })
                    .catch(function (e) {
                      y.logWarn(
                        'Find meta info for create series definitions with error - ' +
                          Object(f.a)(e),
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
              var n = Object(u.a)(
                e._undoModel,
                i,
                a,
                {
                  seriesPriceSources: E,
                  lineStyleTypes: I,
                  isJapaneseChartsAvailable: !0,
                  defaultSeriesFontSizes: D,
                },
                'mainSeries',
              );
              null !== t && n.push.apply(n, t);
              var l = Object(r.j)(
                  {
                    option: Object(r.b)(
                      e._undoModel,
                      i.minTick,
                      'Change Decimal Places',
                    ),
                  },
                  { id: d + 'SymbolMinTick', title: S, options: new s.a(W()) },
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
                    id: d + 'SymbolTimezone',
                    title: v,
                    options: new s.a(e._timezonePropertyObj.values),
                  },
                );
              return (
                (e._definitions = Object(o.__spreadArrays)(
                  [Object(r.k)(n, 'generalSymbolStylesGroup')],
                  e._seriesPriceLinesDefinitions(d),
                  e._seriesDataDefinitions(d),
                  [l, c],
                )),
                e._definitions
              );
            });
          }),
          (e.prototype._seriesDataDefinitions = function (e) {
            this._series.dividendsAdjustmentProperty();
            return [];
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
                { id: e + 'SymbolLastValuePriceLine', title: C },
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
