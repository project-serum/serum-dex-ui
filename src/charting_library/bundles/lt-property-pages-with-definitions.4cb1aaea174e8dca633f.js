(window.webpackJsonp = window.webpackJsonp || []).push([
  ['lt-property-pages-with-definitions'],
  {
    '17v9': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'FibDrawingsWith24LevelsDefinitionsViewModel', function () {
          return k;
        });
      var n = i('mrSG'),
        o = i('wm7x'),
        r = i('HSjo'),
        l = i('Cn8r'),
        s = i('SMr9'),
        c = i('hY0g'),
        d = i.n(c),
        u = i('25b6'),
        a = window.t('Trend Line'),
        h = window.t('Levels Line'),
        b = window.t('Extend Right'),
        p = window.t('Extend Left'),
        w = window.t('Extend Lines Right'),
        f = window.t('Extend Lines Left'),
        g = window.t('Reverse'),
        _ = window.t('Prices'),
        j = window.t('Levels'),
        O = window.t('Labels'),
        C = window.t('Use one color'),
        v = window.t('Background'),
        y = window.t('Fib levels based on log scale'),
        L = [
          { value: !1, title: window.t('Values') },
          { value: !0, title: window.t('Percents') },
        ],
        M = [
          { value: 'bottom', title: window.t('Top') },
          { value: 'middle', title: window.t('Middle') },
          { value: 'top', title: window.t('Bottom') },
        ],
        k = (function (e) {
          function t(t, i) {
            var n = e.call(this, t, i) || this;
            if (
              ((n._disabledBasedOnLog = null),
              'fibLevelsBasedOnLogScale' in n._source.properties().childs())
            ) {
              var o = n._source.priceScale();
              null !== o &&
                ((n._disabledBasedOnLog = new d.a(Boolean(!o.mode().log))),
                n._createPropertyRages(),
                o.modeChanged().subscribe(n, function (e, t) {
                  null !== n._disabledBasedOnLog &&
                    n._disabledBasedOnLog.setValue(Boolean(!t.log));
                }));
            }
            return n;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype.destroy = function () {
              e.prototype.destroy.call(this);
              var t = this._source.priceScale();
              null !== t && t.modeChanged().unsubscribeAll(this);
            }),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = [],
                t = this._source.properties(),
                i = t.childs(),
                n = this._source.name(),
                l = Object(u.c)(n);
              if ('trendline' in i) {
                var c = i.trendline.childs(),
                  k = Object(o.a)(
                    this._undoModel,
                    {
                      showLine: c.visible,
                      lineColor: c.color,
                      lineStyle: c.linestyle,
                      lineWidth: c.linewidth,
                    },
                    n,
                    'TrendLine',
                    { line: a },
                  );
                e.push(k);
              }
              var x = i.levelsStyle.childs(),
                m = { lineStyle: x.linestyle, lineWidth: x.linewidth },
                S = { line: h };
              'extendLines' in i &&
                ((m.extendRight = i.extendLines), (S.extendRightTitle = w)),
                'extendLinesLeft' in i &&
                  ((m.extendLeft = i.extendLinesLeft), (S.extendLeftTitle = f)),
                'extendRight' in i &&
                  ((m.extendRight = i.extendRight), (S.extendRightTitle = b)),
                'extendLeft' in i &&
                  ((m.extendLeft = i.extendLeft), (S.extendLeftTitle = p));
              var P = Object(o.a)(this._undoModel, m, n, 'LevelsStyleLine', S);
              e.push(P);
              for (
                var T = [], V = this._source.levelsCount(), B = 1;
                B <= V;
                B++
              ) {
                var D = i['level' + B].childs(),
                  A = Object(r.g)(
                    {
                      checked: Object(r.b)(
                        this._undoModel,
                        D.visible,
                        'Change ' + n + ' Level ' + B + ' Line Visibility',
                      ),
                      color: Object(r.u)(
                        this._undoModel,
                        D.color,
                        null,
                        'Change ' + n + ' Level ' + B + ' Line Color',
                      ),
                      level: Object(r.b)(
                        this._undoModel,
                        D.coeff,
                        'Change ' + n + ' Level ' + B + ' Coeff',
                      ),
                    },
                    { id: l + 'LineLevel' + B },
                  );
                T.push(A);
              }
              var R = Object(r.l)(T, l + 'LeveledLinesGroup');
              e.push(Object(r.k)([R], l + 'Group'));
              var W = Object(r.e)(
                {
                  color: Object(r.u)(
                    this._undoModel,
                    t.collectibleColors,
                    null,
                    'Change ' + n + ' All Lines Color',
                  ),
                },
                { id: l + 'AllLineColor', title: C },
              );
              e.push(W);
              var G = Object(r.q)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    i.fillBackground,
                    'Change ' + n + ' Background Visibility',
                  ),
                  transparency: Object(r.b)(
                    this._undoModel,
                    i.transparency,
                    'Change ' + n + ' Background Transparency',
                  ),
                },
                { id: l + 'Background', title: v },
              );
              e.push(G);
              var E = i;
              if ('reverse' in E) {
                var H = Object(r.c)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      E.reverse,
                      'Change ' + n + ' Reverse',
                    ),
                  },
                  { id: l + 'Reverse', title: g },
                );
                e.push(H);
              }
              var F = Object(r.c)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    i.showPrices,
                    'Change ' + n + ' Prices Visibility',
                  ),
                },
                { id: l + 'Prices', title: _ },
              );
              e.push(F);
              var z = Object(r.j)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    i.showCoeffs,
                    'Change ' + n + ' Style',
                  ),
                  option: Object(r.b)(
                    this._undoModel,
                    i.coeffsAsPercents,
                    'Change ' + n + ' Style',
                  ),
                },
                { id: n + 'PitchStyle', title: j, options: new d.a(L) },
              );
              e.push(z);
              var I = Object(r.s)(
                {
                  option1: Object(r.b)(
                    this._undoModel,
                    i.horzLabelsAlign,
                    'Change ' + n + ' Labels Alignment',
                  ),
                  option2: Object(r.b)(
                    this._undoModel,
                    i.vertLabelsAlign,
                    'Change ' + n + ' Labels Alignment',
                  ),
                },
                {
                  id: l + 'Alignment',
                  title: O,
                  optionsItems1: new d.a(s.availableAlignmentHorizontalItems),
                  optionsItems2: new d.a(M),
                },
              );
              if (
                (e.push(I),
                'fibLevelsBasedOnLogScale' in i &&
                  null !== this._disabledBasedOnLog)
              ) {
                var U = Object(r.c)(
                  {
                    disabled: Object(r.a)(
                      this._undoModel,
                      this._disabledBasedOnLog,
                      'Change ' + n + ' Fib levels based on log scale disabled',
                    ),
                    checked: Object(r.b)(
                      this._undoModel,
                      i.fibLevelsBasedOnLogScale,
                      'Change ' + n + ' Fib levels based on log scale',
                    ),
                  },
                  { id: l + 'BasedOnLog', title: y },
                );
                e.push(U);
              }
              return e;
            }),
            t
          );
        })(l.a);
    },
    '1yQO': function (e, t, i) {
      'use strict';
      i.d(t, 'a', function () {
        return r;
      });
      var n = i('hY0g'),
        o = i.n(n);
      function r(e, t, i, n) {
        void 0 === n && (n = null);
        var r = { id: t, title: i, definitions: new o.a(e) };
        return null !== n && (r.icon = n), r;
      }
    },
    '25b6': function (e, t, i) {
      'use strict';
      i.d(t, 'b', function () {
        return r;
      }),
        i.d(t, 'c', function () {
          return l;
        }),
        i.d(t, 'a', function () {
          return s;
        });
      var n = /[<"'&>]/g,
        o = function (e) {
          return '&#' + e.charCodeAt(0) + ';';
        };
      function r(e) {
        return e.replace(n, o);
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
    '2PB4': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'FibSpeedResistanceFanDefinitionsViewModel', function () {
          return g;
        });
      var n = i('mrSG'),
        o = i('HSjo'),
        r = i('Cn8r'),
        l = i('25b6'),
        s = window.t('Use one color'),
        c = window.t('Background'),
        d = window.t('Price Levels'),
        u = window.t('Time Levels'),
        a = window.t('Left Labels'),
        h = window.t('Right Labels'),
        b = window.t('Top Labels'),
        p = window.t('Bottom Labels'),
        w = window.t('Grid'),
        f = window.t('Reverse'),
        g = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              for (
                var e = [],
                  t = this._source.properties(),
                  i = t.childs(),
                  n = this._source.name(),
                  r = Object(l.c)(n),
                  g = [],
                  _ = this._source.hLevelsCount(),
                  j = 1;
                j <= _;
                j++
              ) {
                var O = i['hlevel' + j].childs(),
                  C = Object(o.g)(
                    {
                      checked: Object(o.b)(
                        this._undoModel,
                        O.visible,
                        'Change ' + n + ' Level ' + j + ' Line Visibility',
                      ),
                      color: Object(o.u)(
                        this._undoModel,
                        O.color,
                        null,
                        'Change ' + n + ' Level ' + j + ' Line Color',
                      ),
                      level: Object(o.b)(
                        this._undoModel,
                        O.coeff,
                        'Change ' + n + ' Level ' + j + ' Coeff',
                      ),
                    },
                    { id: r + 'HLineLevel' + j },
                  );
                g.push(C);
              }
              var v = Object(o.l)(g, r + 'HLeveledLinesGroup'),
                y = Object(o.c)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      i.showLeftLabels,
                      'Change ' + n + ' Left Labels Visibility',
                    ),
                  },
                  { id: r + 'LeftLabels', title: a },
                ),
                L = Object(o.c)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      i.showRightLabels,
                      'Change ' + n + ' Right Labels Visibility',
                    ),
                  },
                  { id: r + 'RightLabels', title: h },
                ),
                M = Object(o.k)([v, y, L], r + 'HLevelGroup', d);
              e.push(M);
              var k = [],
                x = this._source.vLevelsCount();
              for (j = 1; j <= x; j++) {
                (O = i['vlevel' + j].childs()),
                  (C = Object(o.g)(
                    {
                      checked: Object(o.b)(
                        this._undoModel,
                        O.visible,
                        'Change ' + n + ' Level ' + j + ' Line Visibility',
                      ),
                      color: Object(o.u)(
                        this._undoModel,
                        O.color,
                        null,
                        'Change ' + n + ' Level ' + j + ' Line Color',
                      ),
                      level: Object(o.b)(
                        this._undoModel,
                        O.coeff,
                        'Change ' + n + ' Level ' + j + ' Coeff',
                      ),
                    },
                    { id: r + 'VLineLevel' + j },
                  ));
                k.push(C);
              }
              var m = Object(o.l)(k, r + 'VLeveledLinesGroup'),
                S = Object(o.c)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      i.showTopLabels,
                      'Change ' + n + ' Top Labels Visibility',
                    ),
                  },
                  { id: r + 'TopLabels', title: b },
                ),
                P = Object(o.c)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      i.showBottomLabels,
                      'Change ' + n + ' Bottom Labels Visibility',
                    ),
                  },
                  { id: r + 'BottomLabels', title: p },
                ),
                T = Object(o.k)([m, S, P], r + 'VLevelGroup', u);
              e.push(T);
              var V = Object(o.e)(
                {
                  color: Object(o.u)(
                    this._undoModel,
                    t.collectibleColors,
                    null,
                    'Change ' + n + ' All Lines Color',
                  ),
                },
                { id: r + 'AllLineColor', title: s },
              );
              e.push(V);
              var B = Object(o.q)(
                {
                  checked: Object(o.b)(
                    this._undoModel,
                    i.fillBackground,
                    'Change ' + n + ' Background Visibility',
                  ),
                  transparency: Object(o.b)(
                    this._undoModel,
                    i.transparency,
                    'Change ' + n + ' Background Transparency',
                  ),
                },
                { id: r + 'Background', title: c },
              );
              e.push(B);
              var D = i.grid.childs(),
                A = Object(o.h)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      D.visible,
                      'Change ' + n + ' Grid Visibility',
                    ),
                    color: Object(o.u)(
                      this._undoModel,
                      D.color,
                      null,
                      'Change ' + n + ' Grid Line Color',
                    ),
                    width: Object(o.b)(
                      this._undoModel,
                      D.linewidth,
                      'Change ' + n + ' Grid Line Width',
                    ),
                    style: Object(o.b)(
                      this._undoModel,
                      D.linestyle,
                      'Change ' + n + ' Grid Line Style',
                    ),
                  },
                  { id: r + 'GridLine', title: w },
                );
              e.push(A);
              var R = Object(o.c)(
                {
                  checked: Object(o.b)(
                    this._undoModel,
                    i.reverse,
                    'Change ' + n + ' Reverse Mode',
                  ),
                },
                { id: r + 'Reverse', title: f },
              );
              return e.push(R), e;
            }),
            t
          );
        })(r.a);
    },
    '2liL': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'GannSquareDefinitionsViewModel', function () {
          return g;
        });
      var n = i('mrSG'),
        o = i('HSjo'),
        r = i('Cn8r'),
        l = i('25b6'),
        s = window.t('Use one color'),
        c = window.t('Background'),
        d = window.t('Price Levels'),
        u = window.t('Time Levels'),
        a = window.t('Left Labels'),
        h = window.t('Right Labels'),
        b = window.t('Top Labels'),
        p = window.t('Bottom Labels'),
        w = window.t('Angles'),
        f = window.t('Reverse'),
        g = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              for (
                var e = [],
                  t = this._source.properties(),
                  i = t.childs(),
                  n = this._source.name(),
                  r = Object(l.c)(n),
                  g = [],
                  _ = this._source.hLevelsCount(),
                  j = 1;
                j <= _;
                j++
              ) {
                var O = i['hlevel' + j].childs(),
                  C = Object(o.g)(
                    {
                      checked: Object(o.b)(
                        this._undoModel,
                        O.visible,
                        'Change ' + n + ' Level ' + j + ' Line Visibility',
                      ),
                      color: Object(o.u)(
                        this._undoModel,
                        O.color,
                        null,
                        'Change ' + n + ' Level ' + j + ' Line Color',
                      ),
                      level: Object(o.b)(
                        this._undoModel,
                        O.coeff,
                        'Change ' + n + ' Level ' + j + ' Coeff',
                      ),
                    },
                    { id: r + 'HLineLevel' + j },
                  );
                g.push(C);
              }
              var v = Object(o.l)(g, r + 'HLeveledLinesGroup'),
                y = Object(o.c)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      i.showLeftLabels,
                      'Change ' + n + ' Left Labels Visibility',
                    ),
                  },
                  {
                    id: r + 'LeftLabels',
                    title: a,
                  },
                ),
                L = Object(o.c)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      i.showRightLabels,
                      'Change ' + n + ' Right Labels Visibility',
                    ),
                  },
                  { id: r + 'RightLabels', title: h },
                ),
                M = Object(o.q)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      i.fillHorzBackground,
                      'Change ' + n + ' Background Visibility',
                    ),
                    transparency: Object(o.b)(
                      this._undoModel,
                      i.horzTransparency,
                      'Change ' + n + ' Background Transparency',
                    ),
                  },
                  { id: r + 'BackgroundH', title: c },
                ),
                k = Object(o.k)([v, y, L, M], r + 'HLevelGroup', d);
              e.push(k);
              var x = [],
                m = this._source.vLevelsCount();
              for (j = 1; j <= m; j++) {
                (O = i['vlevel' + j].childs()),
                  (C = Object(o.g)(
                    {
                      checked: Object(o.b)(
                        this._undoModel,
                        O.visible,
                        'Change ' + n + ' Level ' + j + ' Line Visibility',
                      ),
                      color: Object(o.u)(
                        this._undoModel,
                        O.color,
                        null,
                        'Change ' + n + ' Level ' + j + ' Line Color',
                      ),
                      level: Object(o.b)(
                        this._undoModel,
                        O.coeff,
                        'Change ' + n + ' Level ' + j + ' Coeff',
                      ),
                    },
                    { id: r + 'VLineLevel' + j },
                  ));
                x.push(C);
              }
              var S = Object(o.l)(x, r + 'VLeveledLinesGroup'),
                P = Object(o.c)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      i.showTopLabels,
                      'Change ' + n + ' Top Labels Visibility',
                    ),
                  },
                  { id: r + 'TopLabels', title: b },
                ),
                T = Object(o.c)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      i.showBottomLabels,
                      'Change ' + n + ' Bottom Labels Visibility',
                    ),
                  },
                  { id: r + 'BottomLabels', title: p },
                ),
                V = Object(o.q)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      i.fillVertBackground,
                      'Change ' + n + ' Background Visibility',
                    ),
                    transparency: Object(o.b)(
                      this._undoModel,
                      i.vertTransparency,
                      'Change ' + n + ' Background Transparency',
                    ),
                  },
                  { id: r + 'BackgroundV', title: c },
                ),
                B = Object(o.k)([S, P, T, V], r + 'VLevelGroup', u);
              e.push(B);
              var D = Object(o.e)(
                {
                  color: Object(o.u)(
                    this._undoModel,
                    t.collectibleColors,
                    null,
                    'Change ' + n + ' All Lines Color',
                  ),
                },
                { id: r + 'AllLineColor', title: s },
              );
              e.push(D);
              var A = i.fans.childs(),
                R = Object(o.e)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      A.visible,
                      'Change ' + n + ' Fans Visibility',
                    ),
                    color: Object(o.u)(
                      this._undoModel,
                      A.color,
                      null,
                      'Change ' + n + ' Fans Line Color',
                    ),
                  },
                  { id: r + 'FansLines', title: w },
                );
              e.push(R);
              var W = Object(o.c)(
                {
                  checked: Object(o.b)(
                    this._undoModel,
                    i.reverse,
                    'Change ' + n + ' Reverse',
                  ),
                },
                { id: r + 'Reverse', title: f },
              );
              return e.push(W), e;
            }),
            t
          );
        })(r.a);
    },
    '5sLb': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'ArrowMarkDefinitionsViewModel', function () {
          return d;
        });
      var n = i('mrSG'),
        o = i('DSp8'),
        r = i('Cn8r'),
        l = i('HSjo'),
        s = window.t('Text'),
        c = window.t('Arrow'),
        d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._textPropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return [
                Object(o.a)(
                  this._undoModel,
                  { textColor: e.color, text: e.text },
                  this._source.name(),
                  {
                    isEditable: !0,
                    isMultiLine: !0,
                    customTitles: { text: s },
                  },
                ),
              ];
            }),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return [
                Object(l.e)(
                  {
                    color: Object(l.u)(
                      this._undoModel,
                      e.arrowColor,
                      null,
                      'Change Arrow Color',
                    ),
                  },
                  { id: 'ArrowColor', title: c },
                ),
              ];
            }),
            t
          );
        })(r.a);
    },
    '6U6r': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'FibCirclesDefinitionsViewModel', function () {
          return b;
        });
      var n = i('mrSG'),
        o = i('wm7x'),
        r = i('HSjo'),
        l = i('Cn8r'),
        s = i('25b6'),
        c = window.t('Trend Line'),
        d = window.t('Use one color'),
        u = window.t('Background'),
        a = window.t('Levels'),
        h = window.t('Coeffs As Percents'),
        b = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = [],
                t = this._source.properties(),
                i = t.childs(),
                n = this._source.name(),
                l = Object(s.c)(n),
                b = i.trendline.childs(),
                p = Object(o.a)(
                  this._undoModel,
                  {
                    showLine: b.visible,
                    lineColor: b.color,
                    lineStyle: b.linestyle,
                    lineWidth: b.linewidth,
                  },
                  n,
                  'TrendLine',
                  { line: c },
                );
              e.push(p);
              for (var w = this._source.levelsCount(), f = 1; f <= w; f++) {
                var g = i['level' + f].childs(),
                  _ = Object(r.g)(
                    {
                      checked: Object(r.b)(
                        this._undoModel,
                        g.visible,
                        'Change ' + n + ' Level ' + f + ' Line Visibility',
                      ),
                      color: Object(r.u)(
                        this._undoModel,
                        g.color,
                        null,
                        'Change ' + n + ' Level ' + f + ' Line Color',
                      ),
                      width: Object(r.b)(
                        this._undoModel,
                        g.linewidth,
                        'Change ' + n + ' Level ' + f + ' Line Width',
                      ),
                      level: Object(r.b)(
                        this._undoModel,
                        g.coeff,
                        'Change ' + n + ' Level ' + f + ' Coeff',
                      ),
                    },
                    { id: l + 'LineLevel' + f },
                  );
                e.push(_);
              }
              var j = Object(r.e)(
                {
                  color: Object(r.u)(
                    this._undoModel,
                    t.collectibleColors,
                    null,
                    'Change ' + n + ' All Lines Color',
                  ),
                },
                { id: l + 'AllLineColor', title: d },
              );
              e.push(j);
              var O = Object(r.q)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    i.fillBackground,
                    'Change ' + n + ' Background Visibility',
                  ),
                  transparency: Object(r.b)(
                    this._undoModel,
                    i.transparency,
                    'Change ' + n + ' Background Transparency',
                  ),
                },
                { id: l + 'Background', title: u },
              );
              e.push(O);
              var C = Object(r.c)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    i.showCoeffs,
                    'Change ' + n + ' Levels Visibility',
                  ),
                },
                { id: l + 'Levels', title: a },
              );
              e.push(C);
              var v = Object(r.c)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    i.coeffsAsPercents,
                    'Change ' + n + ' Coeffs As Percents Visibility',
                  ),
                },
                { id: l + 'Percentage', title: h },
              );
              return e.push(v), e;
            }),
            t
          );
        })(l.a);
    },
    '6mGk': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'FibWedgeDefinitionsViewModel', function () {
          return h;
        });
      var n = i('mrSG'),
        o = i('wm7x'),
        r = i('HSjo'),
        l = i('Cn8r'),
        s = i('25b6'),
        c = window.t('Trend Line'),
        d = window.t('Use one color'),
        u = window.t('Background'),
        a = window.t('Levels'),
        h = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = [],
                t = this._source.properties(),
                i = t.childs(),
                n = this._source.name(),
                l = Object(s.c)(n),
                h = i.trendline.childs(),
                b = Object(o.a)(
                  this._undoModel,
                  {
                    showLine: h.visible,
                    lineColor: h.color,
                    lineWidth: h.linewidth,
                  },
                  n,
                  'TrendLine',
                  { line: c },
                );
              e.push(b);
              for (var p = this._source.levelsCount(), w = 1; w <= p; w++) {
                var f = i['level' + w].childs(),
                  g = Object(r.g)(
                    {
                      checked: Object(r.b)(
                        this._undoModel,
                        f.visible,
                        'Change ' + n + ' Level ' + w + ' Line Visibility',
                      ),
                      color: Object(r.u)(
                        this._undoModel,
                        f.color,
                        null,
                        'Change ' + n + ' Level ' + w + ' Line Color',
                      ),
                      width: Object(r.b)(
                        this._undoModel,
                        f.linewidth,
                        'Change ' + n + ' Level ' + w + ' Line Width',
                      ),
                      level: Object(r.b)(
                        this._undoModel,
                        f.coeff,
                        'Change ' + n + ' Level ' + w + ' Coeff',
                      ),
                    },
                    { id: l + 'LineLevel' + w },
                  );
                e.push(g);
              }
              var _ = Object(r.e)(
                {
                  color: Object(r.u)(
                    this._undoModel,
                    t.collectibleColors,
                    null,
                    'Change ' + n + ' All Lines Color',
                  ),
                },
                { id: l + 'AllLineColor', title: d },
              );
              e.push(_);
              var j = Object(r.q)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    i.fillBackground,
                    'Change ' + n + ' Background Visibility',
                  ),
                  transparency: Object(r.b)(
                    this._undoModel,
                    i.transparency,
                    'Change ' + n + ' Background Transparency',
                  ),
                },
                {
                  id: l + 'Background',
                  title: u,
                },
              );
              e.push(j);
              var O = Object(r.c)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    i.showCoeffs,
                    'Change ' + n + ' Levels Visibility',
                  ),
                },
                { id: l + 'Levels', title: a },
              );
              return e.push(O), e;
            }),
            t
          );
        })(l.a);
    },
    '74nv': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'NoteDefinitionsViewModel', function () {
          return d;
        });
      var n = i('mrSG'),
        o = i('DSp8'),
        r = i('Cn8r'),
        l = i('HSjo'),
        s = i('25b6'),
        c = window.t('Label'),
        d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(l.e)(
                  {
                    color: Object(l.u)(
                      this._undoModel,
                      e.markerColor,
                      null,
                      'Change ' + t + ' background color',
                    ),
                  },
                  { id: Object(s.c)(t + 'LabelColor'), title: c },
                ),
              ];
            }),
            (t.prototype._textPropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(o.a)(
                  this._undoModel,
                  {
                    textColor: e.textColor,
                    fontSize: e.fontSize,
                    bold: e.bold,
                    italic: e.italic,
                    text: e.text,
                    backgroundColor: e.backgroundColor,
                    backgroundTransparency: e.backgroundTransparency,
                    borderColor: e.borderColor,
                  },
                  t,
                  { isEditable: !0, isMultiLine: !0 },
                ),
              ];
            }),
            t
          );
        })(r.a);
    },
    '78yF': function (e, t, i) {
      'use strict';
      i.d(t, 'a', function () {
        return j;
      });
      var n = i('mrSG'),
        o = i('wm7x'),
        r = i('HSjo'),
        l = i('hY0g'),
        s = i.n(l),
        c = i('bKFv'),
        d = i('25b6'),
        u = [
          { value: c.StatsPosition.Left, title: window.t('Left') },
          { value: c.StatsPosition.Center, title: window.t('Center') },
          { value: c.StatsPosition.Right, title: window.t('Right') },
        ],
        a = window.t('Show Middle Point'),
        h = window.t('Stats Position'),
        b = window.t('Show Price Range'),
        p = window.t('Show Bars Range'),
        w = window.t('Show Date/Time Range'),
        f = window.t('Show Distance'),
        g = window.t('Show Angle'),
        _ = window.t('Always Show Stats');
      function j(e, t, i, l) {
        var c = Object(d.c)(i),
          j = [],
          O = t,
          C = Object(o.a)(
            e,
            Object(n.__assign)(Object(n.__assign)({}, O), {
              lineColor: t.linecolor,
              lineWidth: t.linewidth,
              lineStyle: t.linestyle,
            }),
            c,
            'Line',
          );
        j.push(C);
        var v = Object(r.c)(
          {
            checked: Object(r.b)(
              e,
              t.showMiddlePoint,
              'Change ' + i + ' Show Middle Point',
            ),
          },
          { id: c + 'MiddlePoint', title: (l && l.middlePoint) || a },
        );
        j.push(v);
        var y = Object(r.c)(
          {
            checked: Object(r.b)(
              e,
              t.showPriceRange,
              'Change ' + i + ' Show Price Range',
            ),
          },
          { id: c + 'PriceRange', title: (l && l.priceRange) || b },
        );
        j.push(y);
        var L = Object(r.c)(
          {
            checked: Object(r.b)(
              e,
              t.showBarsRange,
              'Change ' + i + ' Show Bars Range',
            ),
          },
          { id: c + 'BarsRange', title: (l && l.barRange) || p },
        );
        if ((j.push(L), 'showDateTimeRange' in t)) {
          var M = Object(r.c)(
            {
              checked: Object(r.b)(
                e,
                t.showDateTimeRange,
                'Change ' + i + ' Show Date/Time Range',
              ),
            },
            { id: c + 'DateTimeRange', title: (l && l.dateTimeRange) || w },
          );
          j.push(M);
        }
        if ('showDistance' in t) {
          var k = Object(r.c)(
            {
              checked: Object(r.b)(
                e,
                t.showDistance,
                'Change ' + i + ' Show Distance',
              ),
            },
            { id: c + 'Distance', title: (l && l.distance) || f },
          );
          j.push(k);
        }
        if ('showAngle' in t) {
          var x = Object(r.c)(
            {
              checked: Object(r.b)(
                e,
                t.showAngle,
                'Change ' + i + ' Show Angle',
              ),
            },
            { id: c + 'Angle', title: (l && l.angle) || g },
          );
          j.push(x);
        }
        var m = Object(r.c)(
          {
            checked: Object(r.b)(
              e,
              t.alwaysShowStats,
              'Change ' + i + ' Always Show Stats',
            ),
          },
          { id: c + 'ShowStats', title: (l && l.showStats) || _ },
        );
        j.push(m);
        var S = Object(r.j)(
          {
            option: Object(r.b)(
              e,
              t.statsPosition,
              'Change ' + i + ' Stats Position',
            ),
          },
          {
            id: c + 'StatsPosition',
            title: (l && l.statsPosition) || h,
            options: new s.a(u),
          },
        );
        return j.push(S), j;
      }
    },
    '8ioM': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'BarsPatternDefinitionsViewModel', function () {
          return f;
        });
      var n = i('mrSG'),
        o = i('Cn8r'),
        r = i('HSjo'),
        l = i('hY0g'),
        s = i.n(l),
        c = i('Ye2/'),
        d = i('Z5lT'),
        u = i('25b6'),
        a = window.t('Color'),
        h = window.t('Mode'),
        b = window.t('Mirrored'),
        p = window.t('Flipped'),
        w = [
          { value: c.LineToolBarsPatternMode.Bars, title: window.t('HL Bars') },
          {
            value: c.LineToolBarsPatternMode.OpenClose,
            title: window.t('OC Bars'),
          },
          {
            value: c.LineToolBarsPatternMode.Line,
            title: window.t('Line - Close'),
          },
          {
            value: c.LineToolBarsPatternMode.LineOpen,
            title: window.t('Line - Open'),
          },
          {
            value: c.LineToolBarsPatternMode.LineHigh,
            title: window.t('Line - High'),
          },
          {
            value: c.LineToolBarsPatternMode.LineLow,
            title: window.t('Line - Low'),
          },
          {
            value: c.LineToolBarsPatternMode.LineHL2,
            title: window.t('Line - HL/2'),
          },
        ],
        f = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name(),
                i = Object(u.c)(t);
              return [
                Object(r.e)(
                  {
                    color: Object(r.u)(
                      this._undoModel,
                      e.color,
                      null,
                      'Change ' + t + ' color',
                    ),
                  },
                  { id: i + 'Color', title: a },
                ),
                Object(r.j)(
                  {
                    option: Object(r.b)(
                      this._undoModel,
                      e.mode,
                      'Change ' + t + ' mode',
                      [d.a],
                    ),
                  },
                  { id: i + 'Mode', title: h, options: new s.a(w) },
                ),
                Object(r.c)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      e.mirrored,
                      'Change ' + t + ' Mirrored',
                    ),
                  },
                  { id: i + 'Mirrored', title: b },
                ),
                Object(r.c)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      e.flipped,
                      'Change ' + t + ' Flipped',
                    ),
                  },
                  { id: i + 'Flipped', title: p },
                ),
              ];
            }),
            t
          );
        })(o.a);
    },
    '91EF': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'PolylinesDefinitionsViewModel', function () {
          return u;
        });
      var n = i('mrSG'),
        o = i('wm7x'),
        r = i('Cn8r'),
        l = i('HSjo'),
        s = i('25b6'),
        c = window.t('Border'),
        d = window.t('Background'),
        u = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(o.a)(
                  this._undoModel,
                  { lineColor: e.linecolor, lineWidth: e.linewidth },
                  t,
                  'Line',
                  { line: c },
                ),
                Object(l.e)(
                  {
                    checked: Object(l.b)(
                      this._undoModel,
                      e.fillBackground,
                      'Change ' + t + ' background visibility',
                    ),
                    color: Object(l.u)(
                      this._undoModel,
                      e.backgroundColor,
                      e.transparency,
                      'Change ' + t + ' background color',
                    ),
                  },
                  { id: Object(s.c)(t + 'BackgroundColor'), title: d },
                ),
              ];
            }),
            t
          );
        })(r.a);
    },
    ASG6: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'GannFanDefinitionsViewModel', function () {
          return u;
        });
      var n = i('mrSG'),
        o = i('HSjo'),
        r = i('Cn8r'),
        l = i('25b6'),
        s = window.t('Use one color'),
        c = window.t('Background'),
        d = window.t('Labels'),
        u = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              for (
                var e = [],
                  t = this._source.properties(),
                  i = t.childs(),
                  n = this._source.name(),
                  r = Object(l.c)(n),
                  u = this._source.levelsCount(),
                  a = 1;
                a <= u;
                a++
              ) {
                var h = i['level' + a].childs(),
                  b = Object(o.g)(
                    {
                      checked: Object(o.b)(
                        this._undoModel,
                        h.visible,
                        'Change ' + n + ' Level ' + a + ' Line Visibility',
                      ),
                      color: Object(o.u)(
                        this._undoModel,
                        h.color,
                        null,
                        'Change ' + n + ' Level ' + a + ' Line Color',
                      ),
                      width: Object(o.b)(
                        this._undoModel,
                        h.linewidth,
                        'Change ' + n + ' Level ' + a + ' Line Width',
                      ),
                      style: Object(o.b)(
                        this._undoModel,
                        h.linestyle,
                        'Change ' + n + ' Level ' + a + ' Line Style',
                      ),
                    },
                    {
                      id: r + 'LineLevel' + a,
                      title: h.coeff1.value() + '/' + h.coeff2.value(),
                    },
                  );
                e.push(b);
              }
              var p = Object(o.e)(
                {
                  color: Object(o.u)(
                    this._undoModel,
                    t.collectibleColors,
                    null,
                    'Change ' + n + ' All Lines Color',
                  ),
                },
                { id: r + 'AllLineColor', title: s },
              );
              e.push(p);
              var w = Object(o.q)(
                {
                  checked: Object(o.b)(
                    this._undoModel,
                    i.fillBackground,
                    'Change ' + n + ' Background Visibility',
                  ),
                  transparency: Object(o.b)(
                    this._undoModel,
                    i.transparency,
                    'Change ' + n + ' Background Transparency',
                  ),
                },
                { id: r + 'Background', title: c },
              );
              e.push(w);
              var f = Object(o.c)(
                {
                  checked: Object(o.b)(
                    this._undoModel,
                    i.showLabels,
                    'Change ' + n + ' Labels Visibility',
                  ),
                },
                { id: r + 'Labels', title: d },
              );
              return e.push(f), e;
            }),
            t
          );
        })(r.a);
    },
    Ax76: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'GeneralDatePriceRangeDefinitionsViewModel', function () {
          return _;
        });
      var n = i('mrSG'),
        o = i('wm7x'),
        r = i('DSp8'),
        l = i('Cn8r'),
        s = i('HSjo'),
        c = i('25b6'),
        d = window.t('Line'),
        u = window.t('Border'),
        a = window.t('Background'),
        h = window.t('Extend top'),
        b = window.t('Extend bottom'),
        p = window.t('Extend left'),
        w = window.t('Extend right'),
        f = window.t('Label'),
        g = window.t('Label background');
      var _ = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.__extends)(t, e),
          (t.prototype._stylePropertyDefinitions = function () {
            var e = [],
              t = this._source.properties().childs(),
              i = this._source.name(),
              n = Object(c.c)(i),
              l = Object(o.a)(
                this._undoModel,
                { lineColor: t.linecolor, lineWidth: t.linewidth },
                i,
                'Line',
                { line: d },
              );
            if ((e.push(l), t.hasOwnProperty('borderWidth'))) {
              var _ = Object(o.a)(
                this._undoModel,
                {
                  showLine: t.drawBorder,
                  lineColor: t.borderColor,
                  lineWidth: t.borderWidth,
                },
                i,
                'Border',
                { line: u },
              );
              e.push(_);
            }
            var j = Object(s.e)(
              {
                checked: Object(s.b)(
                  this._undoModel,
                  t.fillBackground,
                  'Change ' + i + ' background visibility',
                ),
                color: Object(s.u)(
                  this._undoModel,
                  t.backgroundColor,
                  t.backgroundTransparency,
                  'Change ' + i + ' background color',
                ),
              },
              { id: n + 'BackgroundColor', title: a },
            );
            if (
              (e.push(j),
              (function (e) {
                return e.hasOwnProperty('extendTop');
              })(t))
            ) {
              var O = Object(s.c)(
                  {
                    checked: Object(s.b)(
                      this._undoModel,
                      t.extendTop,
                      'Change ' + i + ' Extend top',
                    ),
                  },
                  { id: n + 'ExtendTop', title: h },
                ),
                C = Object(s.c)(
                  {
                    checked: Object(s.b)(
                      this._undoModel,
                      t.extendBottom,
                      'Change ' + i + ' Extend bottom',
                    ),
                  },
                  { id: n + 'ExtendBottom', title: b },
                );
              e.push(O, C);
            }
            if (
              (function (e) {
                return e.hasOwnProperty('extendLeft');
              })(t)
            ) {
              var v = Object(s.c)(
                  {
                    checked: Object(s.b)(
                      this._undoModel,
                      t.extendLeft,
                      'Change ' + i + ' Extend left',
                    ),
                  },
                  { id: n + 'extendLeft', title: p },
                ),
                y = Object(s.c)(
                  {
                    checked: Object(s.b)(
                      this._undoModel,
                      t.extendRight,
                      'Change ' + i + ' Extend bottom',
                    ),
                  },
                  { id: n + 'ExtendBottom', title: w },
                );
              e.push(v, y);
            }
            var L = Object(r.a)(
              this._undoModel,
              {
                textColor: t.textcolor,
                fontSize: t.fontsize,
                backgroundVisible: t.fillLabelBackground,
                backgroundColor: t.labelBackgroundColor,
                backgroundTransparency: t.backgroundTransparency,
              },
              i,
              {
                isEditable: !0,
                isMultiLine: !0,
                customTitles: { text: f, backgroundTitle: g },
              },
            );
            return e.push(L), e;
          }),
          t
        );
      })(l.a);
    },
    BABJ: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'TimeCyclesPatternDefinitionsViewModel', function () {
          return u;
        });
      var n = i('mrSG'),
        o = i('wm7x'),
        r = i('Cn8r'),
        l = i('HSjo'),
        s = i('25b6'),
        c = window.t('Line'),
        d = window.t('Background'),
        u = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(o.a)(
                  this._undoModel,
                  {
                    lineColor: e.linecolor,
                    lineWidth: e.linewidth,
                    lineStyle: e.linestyle,
                  },
                  t,
                  'Line',
                  { line: c },
                ),
                Object(l.e)(
                  {
                    checked: Object(l.b)(
                      this._undoModel,
                      e.fillBackground,
                      'Change ' + t + ' background visibility',
                    ),
                    color: Object(l.u)(
                      this._undoModel,
                      e.backgroundColor,
                      e.transparency,
                      'Change ' + t + ' background color',
                    ),
                  },
                  { id: Object(s.c)(t + 'BackgroundColor'), title: d },
                ),
              ];
            }),
            t
          );
        })(r.a);
    },
    BDhr: function (e, t, i) {
      'use strict';
      i.d(t, 'a', function () {
        return c;
      });
      var n = i('wm7x'),
        o = i('HSjo'),
        r = i('25b6'),
        l = window.t('Show Price'),
        s = window.t('Show Time');
      function c(e, t, i) {
        var c = Object(r.c)(i),
          d = [],
          u = Object(n.a)(
            e,
            {
              lineColor: t.linecolor,
              lineWidth: t.linewidth,
              lineStyle: t.linestyle,
            },
            c,
            'Line',
          );
        if ((d.push(u), 'showPrice' in t)) {
          var a = Object(o.c)(
            {
              checked: Object(o.b)(
                e,
                t.showPrice,
                'Change ' + i + ' Price Label Visibility',
              ),
            },
            { id: c + 'ShowPrice', title: l },
          );
          d.push(a);
        }
        if ('showTime' in t) {
          var h = Object(o.c)(
            {
              checked: Object(o.b)(
                e,
                t.showTime,
                'Change ' + i + ' Time Label Visibility',
              ),
            },
            { id: c + 'ShowTime', title: s },
          );
          d.push(h);
        }
        return d;
      }
    },
    CA9d: function (e, t, i) {
      'use strict';
      i.d(t, 'b', function () {
        return u;
      }),
        i.d(t, 'a', function () {
          return a;
        }),
        i.d(t, 'c', function () {
          return h;
        });
      var n = i('mrSG'),
        o = i('HSjo'),
        r = i('hY0g'),
        l = i.n(r),
        s = i('25b6'),
        c = window.t('Price'),
        d = window.t('Bar#');
      function u(e, t, i) {
        return {
          property: Object(o.b)(e, t.price, 'Change ' + c + ' Y coordinate'),
          info: { typeY: 1, stepY: i },
        };
      }
      function a(e, t) {
        return {
          property: Object(o.b)(e, t.bar, 'Change ' + d + ' X coordinate'),
          info: {
            typeX: 0,
            minX: new l.a(-5e4),
            maxX: new l.a(15e3),
            stepX: new l.a(1),
          },
        };
      }
      function h(e, t, i, r, l, c) {
        var d = a(e, t),
          h = u(e, t, r);
        return Object(o.f)(
          { x: d.property, y: h.property },
          Object(n.__assign)(
            Object(n.__assign)(
              { id: Object(s.c)(c + 'Coordinates' + l), title: l },
              d.info,
            ),
            h.info,
          ),
        );
      }
    },
    Cn8r: function (e, t, i) {
      'use strict';
      i('YFKU'), i('HbRj');
      var n = i('Eyy1'),
        o = i('HSjo'),
        r = i('1yQO'),
        l = i('hY0g'),
        s = i.n(l),
        c = i('Kxc7'),
        d = window.t('Seconds'),
        u = window.t('Minutes'),
        a = window.t('Hours'),
        h = window.t('Days'),
        b = window.t('Weeks'),
        p = window.t('Months'),
        w = (window.t('Ranges'), [1, 59]),
        f = [1, 59],
        g = [1, 24],
        _ = [1, 366];
      var j = i('CA9d');
      i.d(t, 'a', function () {
        return M;
      });
      var O = window.t('Visibility'),
        C = window.t('Coordinates'),
        v = window.t('Style'),
        y = window.t('Text'),
        L = window.t('Inputs');
      var M = (function () {
        function e(e, t) {
          (this._yCoordinateStepWV = null),
            (this._propertyPages = []),
            (this._source = t),
            (this._undoModel = e),
            (this._ownerSource = Object(n.ensureNotNull)(
              this._source.ownerSource(),
            )),
            this._createPropertyRages();
        }
        return (
          (e.prototype.destroy = function () {
            null !== this._yCoordinateStepWV &&
              (this._source.ownerSourceChanged().unsubscribeAll(this),
              this._ownerSource.priceStepChanged().unsubscribeAll(this)),
              this._propertyPages.forEach(function (e) {
                Object(o.t)(e.definitions.value());
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
            var i = this._createTextPropertyPage();
            if (
              (null !== i && this._propertyPages.push(i),
              this._source.hasEditableCoordinates())
            ) {
              var n = this._createCoordinatesPropertyPage();
              null !== n && this._propertyPages.push(n);
            }
            var o = this._createVisibilitiesPropertyPage();
            this._propertyPages.push(o);
          }),
          (e.prototype._createVisibilitiesPropertyPage = function () {
            var e = this._source
              .properties()
              .childs()
              .intervalsVisibilities.childs();
            return Object(r.a)(
              (function (e, t) {
                var i = [];
                if (c.enabled('seconds_resolution')) {
                  var n = Object(o.m)(
                    {
                      checked: Object(o.b)(
                        e,
                        t.seconds,
                        'Change Line Tool Visibility On Seconds',
                      ),
                      from: Object(o.b)(
                        e,
                        t.secondsFrom,
                        'Change Line Tool Seconds From',
                      ),
                      to: Object(o.b)(
                        e,
                        t.secondsTo,
                        'Change Line Tool Seconds To',
                      ),
                    },
                    {
                      id: 'IntervalsVisibilitiesSecond',
                      title: d,
                      min: new s.a(w[0]),
                      max: new s.a(w[1]),
                    },
                  );
                  i.push(n);
                }
                var r = Object(o.m)(
                    {
                      checked: Object(o.b)(
                        e,
                        t.minutes,
                        'Change Line Tool Visibility On Minutes',
                      ),
                      from: Object(o.b)(
                        e,
                        t.minutesFrom,
                        'Change Line Tool Minutes From',
                      ),
                      to: Object(o.b)(
                        e,
                        t.minutesTo,
                        'Change Line Tool Minutes To',
                      ),
                    },
                    {
                      id: 'IntervalsVisibilitiesMinutes',
                      title: u,
                      min: new s.a(f[0]),
                      max: new s.a(f[1]),
                    },
                  ),
                  l = Object(o.m)(
                    {
                      checked: Object(o.b)(
                        e,
                        t.hours,
                        'Change Line Tool Visibility On Hours',
                      ),
                      from: Object(o.b)(
                        e,
                        t.hoursFrom,
                        'Change Line Tool Hours From',
                      ),
                      to: Object(o.b)(
                        e,
                        t.hoursTo,
                        'Change Line Tool Hours To',
                      ),
                    },
                    {
                      id: 'IntervalsVisibilitiesHours',
                      title: a,
                      min: new s.a(g[0]),
                      max: new s.a(g[1]),
                    },
                  ),
                  j = Object(o.m)(
                    {
                      checked: Object(o.b)(
                        e,
                        t.days,
                        'Change Line Tool Visibility On Days',
                      ),
                      from: Object(o.b)(
                        e,
                        t.daysFrom,
                        'Change Line Tool Days From',
                      ),
                      to: Object(o.b)(e, t.daysTo, 'Change Line Tool Days To'),
                    },
                    {
                      id: 'IntervalsVisibilitiesDays',
                      title: h,
                      min: new s.a(_[0]),
                      max: new s.a(_[1]),
                    },
                  );
                i.push(r, l, j);
                var O = Object(o.c)(
                    {
                      checked: Object(o.b)(
                        e,
                        t.weeks,
                        'Change Line Tool Visibility On Weeks',
                      ),
                    },
                    { id: 'IntervalsVisibilitiesWeeks', title: b },
                  ),
                  C = Object(o.c)(
                    {
                      checked: Object(o.b)(
                        e,
                        t.months,
                        'Change Line Tool Visibility On Months',
                      ),
                    },
                    { id: 'IntervalsVisibilitiesMonths', title: p },
                  );
                return i.push(O, C), i;
              })(this._undoModel, e),
              'visibility',
              O,
            );
          }),
          (e.prototype._createCoordinatesPropertyPage = function () {
            var e = this._coordinatesPropertyDefinitions();
            return null !== e ? Object(r.a)(e, 'coordinates', C) : null;
          }),
          (e.prototype._getYCoordinateStepWV = function () {
            var e = this;
            return (
              null === this._yCoordinateStepWV &&
                ((this._yCoordinateStepWV = new s.a(
                  (function (e) {
                    if (null !== e) {
                      var t = e.priceStep();
                      if (null !== t) return t;
                    }
                    return 1;
                  })(this._source.ownerSource()),
                )),
                this._ownerSource
                  .priceStepChanged()
                  .subscribe(this, function () {
                    return e._updateYCoordinateStep();
                  }),
                this._source.ownerSourceChanged().subscribe(this, function () {
                  e._ownerSource.priceStepChanged().unsubscribeAll(e),
                    (e._ownerSource = Object(n.ensureNotNull)(
                      e._source.ownerSource(),
                    )),
                    e._ownerSource.priceStepChanged().subscribe(e, function () {
                      return e._updateYCoordinateStep();
                    });
                })),
              this._yCoordinateStepWV
            );
          }),
          (e.prototype._coordinatesPropertyDefinitions = function () {
            var e = this,
              t = this._source.points(),
              i = this._source.pointsProperty().childs().points,
              n = [],
              o = this._getYCoordinateStepWV();
            return (
              t.forEach(function (t, r) {
                var l = i[r].childs();
                l &&
                  n.push(
                    Object(j.c)(
                      e._undoModel,
                      l,
                      t,
                      o,
                      window
                        .t('#{0} (price, bar)', { context: 'linetool point' })
                        .format(r + 1),
                      e._source.name(),
                    ),
                  );
              }),
              n
            );
          }),
          (e.prototype._createStylePropertyPage = function () {
            var e = this._stylePropertyDefinitions();
            return null !== e ? Object(r.a)(e, 'style', v) : null;
          }),
          (e.prototype._stylePropertyDefinitions = function () {
            return null;
          }),
          (e.prototype._createTextPropertyPage = function () {
            var e = this._textPropertyDefinitions();
            return null !== e ? Object(r.a)(e, 'text', y) : null;
          }),
          (e.prototype._textPropertyDefinitions = function () {
            return null;
          }),
          (e.prototype._createInputsPropertyPage = function () {
            var e = this._inputsPropertyDefinitions();
            return null !== e ? Object(r.a)(e, 'inputs', L) : null;
          }),
          (e.prototype._inputsPropertyDefinitions = function () {
            return null;
          }),
          (e.prototype._updateYCoordinateStep = function () {
            var e = this._ownerSource.priceStep();
            this._getYCoordinateStepWV().setValue(e || 1);
          }),
          e
        );
      })();
    },
    'D+Nk': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'PitchBaseDefinitionsViewModel', function () {
          return h;
        });
      var n = i('mrSG'),
        o = i('wm7x'),
        r = i('Cn8r'),
        l = i('HSjo'),
        s = i('25b6'),
        c = window.t('Median'),
        d = window.t('Use one color'),
        u = window.t('Background'),
        a = window.t('Extend Lines'),
        h = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = [],
                t = this._source.properties(),
                i = t.childs(),
                n = this._source.name(),
                r = Object(s.c)(n);
              t.hasChild('extendLines') &&
                e.push(
                  Object(l.c)(
                    {
                      checked: Object(l.b)(
                        this._undoModel,
                        i.extendLines,
                        'Toggle ' + n + ' Extend Lines',
                      ),
                    },
                    { id: r + 'ExtendLines', title: a },
                  ),
                );
              var h = i.median.childs(),
                b = Object(o.a)(
                  this._undoModel,
                  {
                    lineColor: h.color,
                    lineStyle: h.linestyle,
                    lineWidth: h.linewidth,
                  },
                  n,
                  'Median',
                  { line: c },
                );
              e.push(b);
              for (var p = this._source.levelsCount(), w = 0; w <= p; w++) {
                var f = i['level' + w].childs(),
                  g = Object(l.g)(
                    {
                      checked: Object(l.b)(
                        this._undoModel,
                        f.visible,
                        'Change ' +
                          n +
                          ' Level ' +
                          (w + 1) +
                          ' Line Visibility',
                      ),
                      color: Object(l.u)(
                        this._undoModel,
                        f.color,
                        null,
                        'Change ' + n + ' Level ' + (w + 1) + ' Line Color',
                      ),
                      width: Object(l.b)(
                        this._undoModel,
                        f.linewidth,
                        'Change ' + n + ' Level ' + (w + 1) + ' Line Width',
                      ),
                      style: Object(l.b)(
                        this._undoModel,
                        f.linestyle,
                        'Change ' + n + ' Level ' + (w + 1) + ' Line Style',
                      ),
                      level: Object(l.b)(
                        this._undoModel,
                        f.coeff,
                        'Change ' + n + ' Level ' + (w + 1) + ' Line Coeff',
                      ),
                    },
                    { id: r + 'LineLevel' + (w + 1) },
                  );
                e.push(g);
              }
              var _ = Object(l.e)(
                {
                  color: Object(l.u)(
                    this._undoModel,
                    t.collectibleColors,
                    null,
                    'Change ' + n + ' All Lines Color',
                  ),
                },
                { id: r + 'AllLineColor', title: d },
              );
              e.push(_);
              var j = Object(l.q)(
                {
                  checked: Object(l.b)(
                    this._undoModel,
                    i.fillBackground,
                    'Change ' + n + ' Background Visibility',
                  ),
                  transparency: Object(l.b)(
                    this._undoModel,
                    i.transparency,
                    'Change ' + n + ' Background Transparency',
                  ),
                },
                { id: r + 'Background', title: u },
              );
              return e.push(j), e;
            }),
            t
          );
        })(r.a);
    },
    DSp8: function (e, t, i) {
      'use strict';
      i.d(t, 'a', function () {
        return c;
      });
      var n = i('HSjo'),
        o = i('25b6'),
        r = window.t('Background'),
        l = window.t('Border'),
        s = window.t('Text Wrap');
      function c(e, t, i, c) {
        var d = {},
          u = {
            id: Object(o.c)(i) + 'Text',
            title: (c.customTitles && c.customTitles.text) || '',
          };
        if (
          (void 0 !== t.showText &&
            (d.checked = Object(n.b)(
              e,
              t.showText,
              'Change ' + i + ' Text Visibility',
            )),
          void 0 !== t.textColor &&
            (d.color = Object(n.u)(
              e,
              t.textColor,
              t.transparency || null,
              'Change ' + i + ' Text Color',
            )),
          void 0 !== t.fontSize &&
            (d.size = Object(n.b)(
              e,
              t.fontSize,
              'Change ' + i + ' Text Font Size',
            )),
          void 0 !== t.bold &&
            (d.bold = Object(n.b)(
              e,
              t.bold,
              'Change ' + i + ' Text Font Bold',
            )),
          void 0 !== t.italic &&
            (d.italic = Object(n.b)(
              e,
              t.italic,
              'Change ' + i + ' Text Font Italic',
            )),
          void 0 !== t.text &&
            ((d.text = Object(n.b)(e, t.text, 'Change ' + i + ' Text')),
            (u.isEditable = Boolean(c.isEditable)),
            (u.isMultiLine = Boolean(c.isMultiLine))),
          void 0 !== t.vertLabelsAlign &&
            ((d.alignmentVertical = Object(n.b)(
              e,
              t.vertLabelsAlign,
              'Change ' + i + ' Labels Alignment Vertical',
            )),
            (u.alignmentVerticalItems = c.alignmentVerticalItems)),
          void 0 !== t.horzLabelsAlign &&
            ((d.alignmentHorizontal = Object(n.b)(
              e,
              t.horzLabelsAlign,
              'Change ' + i + ' Labels Alignment Horizontal',
            )),
            (u.alignmentHorizontalItems = c.alignmentHorizontalItems)),
          void 0 !== t.textOrientation &&
            (d.orientation = Object(n.b)(
              e,
              t.textOrientation,
              'Change ' + i + ' Labels Direction',
            )),
          void 0 !== t.backgroundVisible &&
            (d.backgroundVisible = Object(n.b)(
              e,
              t.backgroundVisible,
              'Change ' + i + ' Text Background Visibility',
            )),
          void 0 !== t.backgroundColor)
        ) {
          var a = null;
          void 0 !== t.backgroundTransparency && (a = t.backgroundTransparency),
            (d.backgroundColor = Object(n.u)(
              e,
              t.backgroundColor,
              a,
              'Change ' + i + ' Text Background Color',
            ));
        }
        return (
          (void 0 === t.backgroundVisible && void 0 === t.backgroundColor) ||
            (u.backgroundTitle =
              (c.customTitles && c.customTitles.backgroundTitle) || r),
          void 0 !== t.borderVisible &&
            (d.borderVisible = Object(n.b)(
              e,
              t.borderVisible,
              'Change ' + i + ' Text Border Visibility',
            )),
          void 0 !== t.borderWidth &&
            (d.borderWidth = Object(n.b)(
              e,
              t.borderWidth,
              'Change ' + i + ' Text Border Width',
            )),
          void 0 !== t.borderColor &&
            (d.borderColor = Object(n.u)(
              e,
              t.borderColor,
              null,
              'Change ' + i + ' Text Border Color',
            )),
          (void 0 === t.borderVisible &&
            void 0 === t.borderColor &&
            void 0 === t.borderWidth) ||
            (u.borderTitle =
              (c.customTitles && c.customTitles.borderTitle) || l),
          void 0 !== t.wrap &&
            ((d.wrap = Object(n.b)(e, t.wrap, 'Change ' + i + ' Text Wrap')),
            (u.wrapTitle = (c.customTitles && c.customTitles.wrapTitle) || s)),
          Object(n.p)(d, u)
        );
      }
    },
    EFc4: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'Points5PatternDefinitionsViewModel', function () {
          return h;
        });
      var n = i('mrSG'),
        o = i('wm7x'),
        r = i('DSp8'),
        l = i('Cn8r'),
        s = i('HSjo'),
        c = i('25b6'),
        d = window.t('Label'),
        u = window.t('Border'),
        a = window.t('Background'),
        h = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(r.a)(
                  this._undoModel,
                  {
                    textColor: e.textcolor,
                    fontSize: e.fontsize,
                    bold: e.bold,
                    italic: e.italic,
                  },
                  this._source.name(),
                  {
                    isEditable: !0,
                    isMultiLine: !0,
                    customTitles: { text: d },
                  },
                ),
                Object(o.a)(
                  this._undoModel,
                  { lineColor: e.color, lineWidth: e.linewidth },
                  t,
                  'Line',
                  { line: u },
                ),
                Object(s.e)(
                  {
                    checked: Object(s.b)(
                      this._undoModel,
                      e.fillBackground,
                      'Change ' + t + ' background visibility',
                    ),
                    color: Object(s.u)(
                      this._undoModel,
                      e.backgroundColor,
                      e.transparency,
                      'Change ' + t + ' background color',
                    ),
                  },
                  { id: Object(c.c)(t + 'BackgroundColor'), title: a },
                ),
              ];
            }),
            t
          );
        })(l.a);
    },
    FkpW: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'VerticalLineDefinitionsViewModel', function () {
          return a;
        });
      var n = i('mrSG'),
        o = i('HSjo'),
        r = i('CA9d'),
        l = i('BDhr'),
        s = i('25b6'),
        c = i('Cn8r'),
        d = i('DSp8'),
        u = window.t('Show text'),
        a = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return Object(l.a)(this._undoModel, e, this._source.name());
            }),
            (t.prototype._coordinatesPropertyDefinitions = function () {
              var e = this._source.pointsProperty().childs().points[0].childs(),
                t = Object(r.a)(this._undoModel, e);
              return [
                Object(o.f)(
                  { x: t.property },
                  Object(n.__assign)(
                    {
                      id: Object(s.c)(this._source.name() + 'Point1'),
                      title: window.t('#1 (bar)', {
                        context: 'linetool point',
                      }),
                    },
                    t.info,
                  ),
                ),
              ];
            }),
            (t.prototype._textPropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return [
                Object(d.a)(
                  this._undoModel,
                  Object(n.__assign)(Object(n.__assign)({}, e), {
                    showText: e.showLabel,
                    textColor: e.textcolor,
                    fontSize: e.fontsize,
                    textOrientation: e.textOrientation,
                  }),
                  this._source.name(),
                  {
                    isEditable: !0,
                    isMultiLine: !0,
                    customTitles: { text: u },
                  },
                ),
              ];
            }),
            t
          );
        })(c.a);
    },
    FxV7: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'ArrowMarkerDefinitionsViewModel', function () {
          return u;
        });
      var n = i('mrSG'),
        o = i('HSjo'),
        r = i('Cn8r'),
        l = i('25b6'),
        s = i('DSp8'),
        c = window.t('Color'),
        d = window.t('Show text'),
        u = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(o.e)(
                  {
                    color: Object(o.u)(
                      this._undoModel,
                      e.backgroundColor,
                      null,
                      'Change ' + t + ' color',
                    ),
                  },
                  { id: Object(l.c)(t + 'Color'), title: c },
                ),
              ];
            }),
            (t.prototype._textPropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return [
                Object(s.a)(
                  this._undoModel,
                  {
                    text: e.text,
                    showText: e.showLabel,
                    textColor: e.textColor,
                    fontSize: e.fontsize,
                    bold: e.bold,
                    italic: e.italic,
                  },
                  this._source.name(),
                  {
                    isEditable: !0,
                    isMultiLine: !0,
                    customTitles: { text: d },
                  },
                ),
              ];
            }),
            t
          );
        })(r.a);
    },
    HCdA: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'PitchForkDefinitionsViewModel', function () {
          return a;
        });
      var n = i('mrSG'),
        o = i('HSjo'),
        r = i('D+Nk'),
        l = i('rCHB'),
        s = i('hY0g'),
        c = i.n(s),
        d = window.t('Style'),
        u = [
          {
            value: l.LineToolPitchforkStyle.Original,
            title: window.t('Original'),
          },
          {
            value: l.LineToolPitchforkStyle.Schiff2,
            title: window.t('Schiff'),
          },
          {
            value: l.LineToolPitchforkStyle.Schiff,
            title: window.t('Modified Schiff'),
          },
          { value: l.LineToolPitchforkStyle.Inside, title: window.t('Inside') },
        ],
        a = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var t = e.prototype._stylePropertyDefinitions.call(this),
                i = this._source.properties().childs(),
                n = this._source.name(),
                r = Object(o.j)(
                  {
                    option: Object(o.b)(
                      this._undoModel,
                      i.style,
                      'Change ' + n + ' Style',
                    ),
                  },
                  { id: n + 'PitchStyle', title: d, options: new c.a(u) },
                );
              return t.push(r), t;
            }),
            t
          );
        })(r.PitchBaseDefinitionsViewModel);
    },
    K4wI: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'RectangleDefinitionsViewModel', function () {
          return h;
        });
      var n = i('mrSG'),
        o = i('YFKU'),
        r = i('HSjo'),
        l = i('Zd1D'),
        s = i('DSp8'),
        c = Object(o.t)('Text'),
        d = window.t('Extend left'),
        u = window.t('Extend right'),
        a = [
          { value: 'bottom', title: window.t('Top') },
          { value: 'middle', title: window.t('Inside') },
          { value: 'top', title: window.t('Bottom') },
        ],
        h = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var t = this._source.properties().childs(),
                i = this._source.name(),
                n = e.prototype._stylePropertyDefinitions.call(this),
                o = Object(r.c)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      t.extendRight,
                      'Change ' + i + ' Extending Right',
                    ),
                  },
                  { id: i + 'ExtendRight', title: u },
                );
              n.push(o);
              var l = Object(r.c)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    t.extendLeft,
                    'Change ' + i + ' Extending Left',
                  ),
                },
                { id: i + 'ExtendLeft', title: d },
              );
              return n.push(l), n;
            }),
            (t.prototype._textPropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return [
                Object(s.a)(
                  this._undoModel,
                  {
                    textColor: e.textColor,
                    text: e.text,
                    bold: e.bold,
                    italic: e.italic,
                    fontSize: e.fontSize,
                    horzLabelsAlign: e.horzLabelsAlign,
                    vertLabelsAlign: e.vertLabelsAlign,
                    showText: e.showLabel,
                  },
                  this._source.name(),
                  {
                    isEditable: !0,
                    isMultiLine: !0,
                    alignmentVerticalItems: a,
                    customTitles: { text: c },
                  },
                ),
              ];
            }),
            t
          );
        })(l.GeneralFiguresDefinitionsViewModelBase);
    },
    LX4V: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'CyclicAndSineLinesPatternDefinitionsViewModel', function () {
          return s;
        });
      var n = i('mrSG'),
        o = i('wm7x'),
        r = i('Cn8r'),
        l = window.t('Lines'),
        s = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return [
                Object(o.a)(
                  this._undoModel,
                  {
                    lineColor: e.linecolor,
                    lineWidth: e.linewidth,
                    lineStyle: e.linestyle,
                  },
                  this._source.name(),
                  'Line',
                  { line: l },
                ),
              ];
            }),
            t
          );
        })(r.a);
    },
    LzAw: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'ProjectionDefinitionsViewModel', function () {
          return u;
        });
      var n = i('mrSG'),
        o = i('wm7x'),
        r = i('Cn8r'),
        l = i('HSjo'),
        s = i('25b6'),
        c = window.t('Border'),
        d = window.t('Background'),
        u = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(l.r)(
                  {
                    color1: Object(l.u)(
                      this._undoModel,
                      e.color1,
                      e.transparency,
                      'Change ' + t + ' background color 1',
                    ),
                    color2: Object(l.u)(
                      this._undoModel,
                      e.color2,
                      e.transparency,
                      'Change ' + t + ' background color 2',
                    ),
                  },
                  { id: Object(s.c)(t + 'Background2Color'), title: d },
                ),
                Object(o.a)(
                  this._undoModel,
                  {
                    lineColor: e.trendline.childs().color,
                    lineWidth: e.linewidth,
                  },
                  t,
                  'Line',
                  { line: c },
                ),
              ];
            }),
            t
          );
        })(r.a);
    },
    NEbb: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'HorizontalLineDefinitionsViewModel', function () {
          return c;
        });
      var n = i('mrSG'),
        o = i('HSjo'),
        r = i('xrdl'),
        l = i('CA9d'),
        s = i('25b6'),
        c = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._coordinatesPropertyDefinitions = function () {
              var e = this._source.pointsProperty().childs().points[0].childs(),
                t = this._getYCoordinateStepWV(),
                i = Object(l.b)(this._undoModel, e, t);
              return [
                Object(o.f)(
                  { y: i.property },
                  Object(n.__assign)(
                    {
                      id: Object(s.c)(this._source.name() + 'Point'),
                      title: window.t('#1 (price)', {
                        context: 'linetool point',
                      }),
                    },
                    i.info,
                  ),
                ),
              ];
            }),
            t
          );
        })(r.CrossLineDefinitionsViewModel);
    },
    Pwwq: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'PredictionDefinitionsViewModel', function () {
          return _;
        });
      var n = i('mrSG'),
        o = i('wm7x'),
        r = i('Cn8r'),
        l = i('HSjo'),
        s = i('25b6'),
        c = window.t('Source text'),
        d = window.t('Source background'),
        u = window.t('Source border'),
        a = window.t('Target text'),
        h = window.t('Target background'),
        b = window.t('Target border'),
        p = window.t('Success text'),
        w = window.t('Success background'),
        f = window.t('Failure text'),
        g = window.t('Failure background'),
        _ = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name(),
                i = Object(s.c)(t);
              return [
                Object(o.a)(
                  this._undoModel,
                  { lineColor: e.linecolor, lineWidth: e.linewidth },
                  t,
                  'Line',
                ),
                Object(l.e)(
                  {
                    color: Object(l.u)(
                      this._undoModel,
                      e.sourceTextColor,
                      null,
                      'Change ' + t + ' source text color',
                    ),
                  },
                  { id: i + 'SourceTextColor', title: c },
                ),
                Object(l.e)(
                  {
                    color: Object(l.u)(
                      this._undoModel,
                      e.sourceBackColor,
                      e.transparency,
                      'Change ' + t + ' source background color',
                    ),
                  },
                  { id: i + 'SourceBackgroundColor', title: d },
                ),
                Object(l.e)(
                  {
                    color: Object(l.u)(
                      this._undoModel,
                      e.sourceStrokeColor,
                      null,
                      'Change ' + t + ' source border color',
                    ),
                  },
                  { id: i + 'SourceBorderColor', title: u },
                ),
                Object(l.e)(
                  {
                    color: Object(l.u)(
                      this._undoModel,
                      e.targetTextColor,
                      null,
                      'Change ' + t + ' target text color',
                    ),
                  },
                  { id: i + 'TargetTextColor', title: a },
                ),
                Object(l.e)(
                  {
                    color: Object(l.u)(
                      this._undoModel,
                      e.targetBackColor,
                      null,
                      'Change ' + t + ' target background color',
                    ),
                  },
                  { id: i + 'TargetBackgroundColor', title: h },
                ),
                Object(l.e)(
                  {
                    color: Object(l.u)(
                      this._undoModel,
                      e.targetStrokeColor,
                      null,
                      'Change ' + t + ' target border color',
                    ),
                  },
                  { id: i + 'TargetBorderColor', title: b },
                ),
                Object(l.e)(
                  {
                    color: Object(l.u)(
                      this._undoModel,
                      e.successTextColor,
                      null,
                      'Change ' + t + ' success text color',
                    ),
                  },
                  { id: i + 'SuccessTextColor', title: p },
                ),
                Object(l.e)(
                  {
                    color: Object(l.u)(
                      this._undoModel,
                      e.successBackground,
                      null,
                      'Change ' + t + ' success background color',
                    ),
                  },
                  { id: i + 'SuccessBackgroundColor', title: w },
                ),
                Object(l.e)(
                  {
                    color: Object(l.u)(
                      this._undoModel,
                      e.failureTextColor,
                      null,
                      'Change ' + t + ' failure text color',
                    ),
                  },
                  { id: i + 'FailureTextColor', title: f },
                ),
                Object(l.e)(
                  {
                    color: Object(l.u)(
                      this._undoModel,
                      e.failureBackground,
                      null,
                      'Change ' + t + ' failure background color',
                    ),
                  },
                  { id: i + 'FailureBackgroundColor', title: g },
                ),
              ];
            }),
            t
          );
        })(r.a);
    },
    QWxu: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'TextDefinitionsViewModel', function () {
          return r;
        });
      var n = i('mrSG'),
        o = i('DSp8'),
        r = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._textPropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return [
                Object(o.a)(
                  this._undoModel,
                  {
                    textColor: e.color,
                    fontSize: e.fontsize,
                    bold: e.bold,
                    italic: e.italic,
                    text: e.text,
                    backgroundVisible: e.fillBackground,
                    backgroundColor: e.backgroundColor,
                    backgroundTransparency: e.backgroundTransparency,
                    borderVisible: e.drawBorder,
                    borderColor: e.borderColor,
                    wrap: e.wordWrap,
                  },
                  this._source.name(),
                  { isEditable: !0, isMultiLine: !0 },
                ),
              ];
            }),
            t
          );
        })(i('Cn8r').a);
    },
    RYNR: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'RiskRewardDefinitionsViewModel', function () {
          return m;
        });
      var n = i('mrSG'),
        o = i('wm7x'),
        r = i('DSp8'),
        l = i('Cn8r'),
        s = i('HSjo'),
        c = i('hY0g'),
        d = i.n(c),
        u = i('25b6'),
        a = window.t('Lines'),
        h = window.t('Stop color'),
        b = window.t('Target color'),
        p = window.t('Text'),
        w = window.t('Compact stats mode'),
        f = window.t('Ticks'),
        g = window.t('Price'),
        _ = window.t('Entry price'),
        j = window.t('Profit level'),
        O = window.t('Stop level'),
        C = window.t('Account size'),
        v = window.t('Risk'),
        y = window.t('Always show stats'),
        L = window.t('Show price labels'),
        M = window.t('%'),
        k = window.t('Cash');
      function x(e) {
        return [
          { value: 'percents', title: M },
          { value: 'money', title: e || k },
        ];
      }
      var m = (function (e) {
        function t(t, i) {
          var n = e.call(this, t, i) || this,
            o = n._source.properties().childs(),
            r = o.riskDisplayMode.value();
          return (
            (n._riskMaxWV = new d.a(n._getRiskMax(r))),
            (n._riskStepWV = new d.a(n._getRiskStep(r))),
            (n._riskPrecisionWV = new d.a(n._getRiskPrecision(r))),
            (n._riskUnitWV = new d.a(n._getRiskUnit())),
            (n._riskUnitOptionsWV = new d.a(n._getRiskUnitOptions())),
            n._createPropertyRages(),
            o.riskDisplayMode.subscribe(n, function (e) {
              return n._onRiskDisplayChanged(e);
            }),
            o.accountSize.subscribe(n, function () {
              return n._onAccountSizeChanged();
            }),
            n._undoModel
              .model()
              .mainSeries()
              .dataEvents()
              .symbolResolved()
              .subscribe(n, n._onSymbolInfoChanged),
            n
          );
        }
        return (
          Object(n.__extends)(t, e),
          (t.prototype.destroy = function () {
            e.prototype.destroy.call(this);
            var t = this._source.properties().childs();
            t.riskDisplayMode.unsubscribeAll(this),
              t.accountSize.unsubscribeAll(this),
              this._undoModel
                .model()
                .mainSeries()
                .dataEvents()
                .symbolResolved()
                .unsubscribeAll(this);
          }),
          (t.prototype._stylePropertyDefinitions = function () {
            var e = this._source.properties().childs(),
              t = this._source.name(),
              i = Object(u.c)(t);
            return [
              Object(o.a)(
                this._undoModel,
                { lineColor: e.linecolor, lineWidth: e.linewidth },
                t,
                'Line',
                { line: a },
              ),
              Object(s.e)(
                {
                  color: Object(s.u)(
                    this._undoModel,
                    e.stopBackground,
                    e.stopBackgroundTransparency,
                    'Change ' + t + ' stop color',
                  ),
                },
                { id: i + 'StopColor', title: h },
              ),
              Object(s.e)(
                {
                  color: Object(s.u)(
                    this._undoModel,
                    e.profitBackground,
                    e.profitBackgroundTransparency,
                    'Change ' + t + ' stop color',
                  ),
                },
                { id: i + 'ProfitColor', title: b },
              ),
              Object(r.a)(
                this._undoModel,
                { textColor: e.textcolor, fontSize: e.fontsize },
                t,
                { isEditable: !0, isMultiLine: !0, customTitles: { text: p } },
              ),
              Object(s.c)(
                {
                  checked: Object(s.b)(
                    this._undoModel,
                    e.showPriceLabels,
                    'Change ' + t + ' Show price labels',
                  ),
                },
                { id: i + 'ShowPriceLabels', title: L },
              ),
              Object(s.c)(
                {
                  checked: Object(s.b)(
                    this._undoModel,
                    e.compact,
                    'Change ' + t + ' Compact stats mode',
                  ),
                },
                { id: i + 'CompactMode', title: w },
              ),
              Object(s.c)(
                {
                  checked: Object(s.b)(
                    this._undoModel,
                    e.alwaysShowStats,
                    'Change ' + t + ' Always show stats',
                  ),
                },
                { id: i + 'AlwaysShowStats', title: y },
              ),
            ];
          }),
          (t.prototype._inputsPropertyDefinitions = function () {
            var e = this,
              t = this._source.properties().childs(),
              i = this._source.name(),
              n = Object(u.c)(i),
              o = this._getYCoordinateStepWV(),
              r = Object(s.i)(
                {
                  value: Object(s.b)(
                    this._undoModel,
                    t.accountSize,
                    'Change ' + i + ' Account Size',
                  ),
                },
                {
                  id: n + 'AccountSize',
                  title: C,
                  type: 1,
                  min: new d.a(1e-9),
                  max: new d.a(1e9),
                  step: new d.a(1),
                  unit: this._riskUnitWV,
                },
              ),
              l = Object(s.i)(
                {
                  value: Object(s.b)(
                    this._undoModel,
                    t.risk,
                    'Change ' + i + ' Risk',
                    [
                      function (e) {
                        return parseFloat(e);
                      },
                    ],
                  ),
                  unitOptionsValue: Object(s.b)(
                    this._undoModel,
                    t.riskDisplayMode,
                    'Change ' + i + ' Risk Display Mode',
                  ),
                },
                {
                  id: n + 'Risk',
                  title: v,
                  type: 1,
                  min: new d.a(1e-9),
                  max: this._riskMaxWV,
                  precision: this._riskPrecisionWV,
                  step: this._riskStepWV,
                  unitOptions: this._riskUnitOptionsWV,
                },
              ),
              c = Object(s.i)(
                {
                  value: Object(s.b)(
                    this._undoModel,
                    t.entryPrice,
                    'Change ' + i + ' entry price',
                  ),
                },
                { id: n + 'EntryPrice', title: _, type: 1, step: o },
              ),
              a = Object(s.k)([r, l, c], n + 'AccountRisk'),
              h = Object(s.i)(
                {
                  value: Object(s.b)(
                    this._undoModel,
                    t.profitLevel,
                    'Change ' + i + ' profit level',
                  ),
                },
                {
                  id: n + 'ProfitLevelTicks',
                  title: f,
                  type: 0,
                  min: new d.a(0),
                  max: new d.a(1e9),
                  step: new d.a(1),
                },
              ),
              b = Object(s.i)(
                {
                  value: Object(s.b)(
                    this._undoModel,
                    t.targetPrice,
                    'Change ' + i + ' profit price',
                    [
                      function (e) {
                        return e;
                      },
                      function (t) {
                        return e._source.preparseProfitPrice(t);
                      },
                    ],
                  ),
                },
                { id: n + 'ProfitLevelPrice', title: g, type: 1, step: o },
              ),
              p = Object(s.k)([h, b], n + 'ProfitLevel', j),
              w = Object(s.i)(
                {
                  value: Object(s.b)(
                    this._undoModel,
                    t.stopLevel,
                    'Change ' + i + ' stop level',
                  ),
                },
                {
                  id: n + 'StopLevelTicks',
                  title: f,
                  type: 0,
                  min: new d.a(0),
                  max: new d.a(1e9),
                  step: new d.a(1),
                },
              ),
              y = Object(s.i)(
                {
                  value: Object(s.b)(
                    this._undoModel,
                    t.stopPrice,
                    'Change ' + i + ' stop price',
                    [
                      function (e) {
                        return e;
                      },
                      function (t) {
                        return e._source.preparseStopPrice(t);
                      },
                    ],
                  ),
                },
                { id: n + 'StopLevelPrice', title: g, type: 1, step: o },
              );
            return [a, p, Object(s.k)([w, y], n + 'StopLevel', O)];
          }),
          (t.prototype._onRiskDisplayChanged = function (e) {
            var t = e.value();
            this._riskMaxWV.setValue(this._getRiskMax(t)),
              this._riskStepWV.setValue(this._getRiskStep(t)),
              this._riskPrecisionWV.setValue(this._getRiskPrecision(t));
          }),
          (t.prototype._onAccountSizeChanged = function () {
            this._riskMaxWV.setValue(
              this._getRiskMax(
                this._source.properties().childs().riskDisplayMode.value(),
              ),
            );
          }),
          (t.prototype._onSymbolInfoChanged = function () {
            this._riskUnitWV.setValue(this._getRiskUnit()),
              this._riskUnitOptionsWV.setValue(this._getRiskUnitOptions());
          }),
          (t.prototype._getRiskMax = function (e) {
            return 'percents' === e
              ? 100
              : this._source.properties().childs().accountSize.value();
          }),
          (t.prototype._getRiskStep = function (e) {
            return 'percents' === e ? 0.01 : 1;
          }),
          (t.prototype._getRiskPrecision = function (e) {
            if ('percents' === e) return 2;
          }),
          (t.prototype._getRiskUnit = function () {
            var e = this._undoModel.model().mainSeries().symbolInfo();
            return (null !== e && e.currency_code) || '';
          }),
          (t.prototype._getRiskUnitOptions = function () {
            var e = this._undoModel.model().mainSeries().symbolInfo();
            return null !== e ? x(e.currency_code) : x();
          }),
          t
        );
      })(l.a);
    },
    RhWr: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'BalloonDefinitionsViewModel', function () {
          return s;
        });
      var n = i('mrSG'),
        o = i('DSp8'),
        r = i('Cn8r'),
        l = window.t('Text'),
        s = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._textPropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return [
                Object(o.a)(
                  this._undoModel,
                  {
                    textColor: e.color,
                    fontSize: e.fontsize,
                    text: e.text,
                    backgroundColor: e.backgroundColor,
                    backgroundTransparency: e.transparency,
                    borderColor: e.borderColor,
                  },
                  this._source.name(),
                  {
                    isEditable: !0,
                    isMultiLine: !0,
                    customTitles: { text: l },
                  },
                ),
              ];
            }),
            t
          );
        })(r.a);
    },
    SMr9: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'availableAlignmentVerticalItems', function () {
          return h;
        }),
        i.d(t, 'availableAlignmentHorizontalItems', function () {
          return b;
        }),
        i.d(t, 'FibTimezoneDefinitionsViewModel', function () {
          return p;
        });
      var n = i('mrSG'),
        o = i('HSjo'),
        r = i('Cn8r'),
        l = i('hY0g'),
        s = i.n(l),
        c = i('25b6'),
        d = window.t('Use one color'),
        u = window.t('Background'),
        a = window.t('Labels'),
        h = [
          { value: 'top', title: window.t('Top') },
          { value: 'middle', title: window.t('Middle') },
          { value: 'bottom', title: window.t('Bottom') },
        ],
        b = [
          { value: 'left', title: window.t('Left') },
          { value: 'center', title: window.t('Center') },
          { value: 'right', title: window.t('Right') },
        ],
        p = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              for (
                var e = [],
                  t = this._source.properties(),
                  i = t.childs(),
                  n = this._source.name(),
                  r = Object(c.c)(n),
                  l = this._source.levelsCount(),
                  p = 1;
                p <= l;
                p++
              ) {
                var w = i['level' + p].childs(),
                  f = Object(o.g)(
                    {
                      checked: Object(o.b)(
                        this._undoModel,
                        w.visible,
                        'Change ' + n + ' Level ' + p + ' Line Visibility',
                      ),
                      color: Object(o.u)(
                        this._undoModel,
                        w.color,
                        null,
                        'Change ' + n + ' Level ' + p + ' Line Color',
                      ),
                      width: Object(o.b)(
                        this._undoModel,
                        w.linewidth,
                        'Change ' + n + ' Level ' + p + ' Line Width',
                      ),
                      style: Object(o.b)(
                        this._undoModel,
                        w.linestyle,
                        'Change ' + n + ' Level ' + p + ' Line Style',
                      ),
                      level: Object(o.b)(
                        this._undoModel,
                        w.coeff,
                        'Change ' + n + ' Level ' + p + ' Coeff',
                      ),
                    },
                    { id: r + 'LineLevel' + p },
                  );
                e.push(f);
              }
              var g = Object(o.e)(
                {
                  color: Object(o.u)(
                    this._undoModel,
                    t.collectibleColors,
                    null,
                    'Change ' + n + ' All Lines Color',
                  ),
                },
                { id: r + 'AllLineColor', title: d },
              );
              e.push(g);
              var _ = Object(o.q)(
                {
                  checked: Object(o.b)(
                    this._undoModel,
                    i.fillBackground,
                    'Change ' + n + ' Background Visibility',
                  ),
                  transparency: Object(o.b)(
                    this._undoModel,
                    i.transparency,
                    'Change ' + n + ' Background Transparency',
                  ),
                },
                { id: r + 'Background', title: u },
              );
              e.push(_);
              var j = Object(o.s)(
                {
                  checked: Object(o.b)(
                    this._undoModel,
                    i.showLabels,
                    'Change ' + n + ' Labels Visibility',
                  ),
                  option1: Object(o.b)(
                    this._undoModel,
                    i.horzLabelsAlign,
                    'Change ' + n + ' Labels Alignment',
                  ),
                  option2: Object(o.b)(
                    this._undoModel,
                    i.vertLabelsAlign,
                    'Change ' + n + ' Labels Alignment',
                  ),
                },
                {
                  id: r + 'Labels',
                  title: a,
                  optionsItems1: new s.a(b),
                  optionsItems2: new s.a(h),
                },
              );
              return e.push(j), e;
            }),
            t
          );
        })(r.a);
    },
    UHSU: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'ElliottPatternDefinitionsViewModel', function () {
          return b;
        });
      var n = i('mrSG'),
        o = i('wm7x'),
        r = i('Cn8r'),
        l = i('HSjo'),
        s = i('hY0g'),
        c = i.n(s),
        d = i('25b6'),
        u = window.t('Color'),
        a = window.t('Wave'),
        h = window.t('Degree'),
        b = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(l.e)(
                  {
                    color: Object(l.u)(
                      this._undoModel,
                      e.color,
                      null,
                      'Change ' + t + ' color',
                    ),
                  },
                  { id: Object(d.c)(t + 'BackgroundColor'), title: u },
                ),
                Object(o.a)(
                  this._undoModel,
                  { showLine: e.showWave, lineWidth: e.linewidth },
                  t,
                  'Line',
                  { line: a },
                ),
                Object(l.j)(
                  {
                    option: Object(l.b)(
                      this._undoModel,
                      e.degree,
                      'Change ' + t + ' degree',
                    ),
                  },
                  {
                    id: t + 'Degree',
                    title: h,
                    options: new c.a(this._source.availableDegreesValues()),
                  },
                ),
              ];
            }),
            t
          );
        })(r.a);
    },
    VkdP: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'ParallelChannelDefinitionsViewModel', function () {
          return b;
        });
      var n = i('mrSG'),
        o = i('HSjo'),
        r = i('Cn8r'),
        l = i('wm7x'),
        s = i('25b6'),
        c = window.t('Background'),
        d = window.t('Extend left line'),
        u = window.t('Extend right line'),
        a = window.t('Channel'),
        h = window.t('Middle'),
        b = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name(),
                i = Object(s.c)(t);
              return [
                Object(l.a)(
                  this._undoModel,
                  {
                    lineColor: e.linecolor,
                    lineStyle: e.linestyle,
                    lineWidth: e.linewidth,
                  },
                  t,
                  'ChannelLine',
                  { line: a },
                ),
                Object(l.a)(
                  this._undoModel,
                  {
                    showLine: e.showMidline,
                    lineColor: e.midlinecolor,
                    lineStyle: e.midlinestyle,
                    lineWidth: e.midlinewidth,
                  },
                  'MiddleLine',
                  t,
                  { line: h },
                ),
                Object(o.c)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      e.extendLeft,
                      'Change ' + t + ' Extending Left',
                    ),
                  },
                  { id: i + 'ExtendLeft', title: d },
                ),
                Object(o.c)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      e.extendRight,
                      'Change ' + t + ' Extending Right',
                    ),
                  },
                  { id: i + 'ExtendRight', title: u },
                ),
                Object(o.e)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      e.fillBackground,
                      'Change ' + t + ' background visibility',
                    ),
                    color: Object(o.u)(
                      this._undoModel,
                      e.backgroundColor,
                      e.transparency,
                      'Change ' + t + ' background visibility color',
                    ),
                  },
                  { id: i + 'Background', title: c },
                ),
              ];
            }),
            t
          );
        })(r.a);
    },
    'WW+G': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'PathDefinitionsViewModel', function () {
          return s;
        });
      var n = i('mrSG'),
        o = i('wm7x'),
        r = i('Cn8r'),
        l = window.t('Line'),
        s = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(o.a)(
                  this._undoModel,
                  {
                    lineColor: e.lineColor,
                    lineWidth: e.lineWidth,
                    lineStyle: e.lineStyle,
                    leftEnd: e.leftEnd,
                    rightEnd: e.rightEnd,
                  },
                  t,
                  'Line',
                  { line: l },
                ),
              ];
            }),
            t
          );
        })(r.a);
    },
    WfUZ: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'isGannComplexLineTool', function () {
          return O;
        }),
        i.d(t, 'GannComplexAndFixedDefinitionsViewModel', function () {
          return C;
        });
      var n = i('mrSG'),
        o = i('DSp8'),
        r = i('HSjo'),
        l = i('Cn8r'),
        s = i('nd9+'),
        c = i('hY0g'),
        d = i.n(c),
        u = i('Z5lT'),
        a = i('25b6'),
        h = window.t('Reverse'),
        b = window.t('Use one color'),
        p = window.t('Background'),
        w = window.t('Price/Bar Ratio'),
        f = window.t('Ranges and ratio'),
        g = window.t('Levels'),
        _ = window.t('Fans'),
        j = window.t('Arcs');
      function O(e) {
        return e instanceof s.LineToolGannComplex;
      }
      var C = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.__extends)(t, e),
          (t.prototype._stylePropertyDefinitions = function () {
            for (
              var e = [],
                t = this._source.properties(),
                i = t.childs(),
                n = this._source.name(),
                l = Object(a.c)(n),
                s = [],
                c = i.levels.childCount(),
                C = 0;
              C < c;
              C++
            ) {
              var v = i.levels.childs()[C].childs(),
                y = Object(r.g)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      v.visible,
                      'Change ' + n + ' Level ' + C + ' Line Visibility',
                    ),
                    color: Object(r.u)(
                      this._undoModel,
                      v.color,
                      null,
                      'Change ' + n + ' Level ' + C + ' Line Color',
                    ),
                    width: Object(r.b)(
                      this._undoModel,
                      v.width,
                      'Change ' + n + ' Level ' + C + ' Line Width',
                    ),
                  },
                  { id: l + 'LineLevel' + C, title: '' + C },
                );
              s.push(y);
            }
            var L = Object(r.l)(s, l + 'LeveledLinesGroup');
            e.push(Object(r.k)([L], l + 'LevelGroup', g));
            var M = [],
              k = i.fanlines.childCount();
            for (C = 0; C < k; C++) {
              var x = i.fanlines.childs()[C].childs(),
                m = Object(r.g)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      x.visible,
                      'Change ' + n + ' Fan ' + C + ' Line Visibility',
                    ),
                    color: Object(r.u)(
                      this._undoModel,
                      x.color,
                      null,
                      'Change ' + n + ' Fan ' + C + ' Line Color',
                    ),
                    width: Object(r.b)(
                      this._undoModel,
                      x.width,
                      'Change ' + n + ' Fan ' + C + ' Line Width',
                    ),
                  },
                  {
                    id: l + 'FanLineLevel' + C,
                    title: x.x.value() + 'x' + x.y.value(),
                  },
                );
              M.push(m);
            }
            var S = Object(r.l)(M, l + 'FanLeveledLinesGroup');
            e.push(Object(r.k)([S], l + 'FanLinesGroup', _));
            var P = [],
              T = i.arcs.childCount();
            for (C = 0; C < T; C++) {
              var V = i.arcs.childs()[C].childs(),
                B = Object(r.g)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      V.visible,
                      'Change ' + n + ' Arcs ' + C + ' Line Visibility',
                    ),
                    color: Object(r.u)(
                      this._undoModel,
                      V.color,
                      null,
                      'Change ' + n + ' Arcs ' + C + ' Line Color',
                    ),
                    width: Object(r.b)(
                      this._undoModel,
                      V.width,
                      'Change ' + n + ' Arcs ' + C + ' Line Width',
                    ),
                  },
                  {
                    id: l + 'ArcsLineLevel' + C,
                    title: V.x.value() + 'x' + V.y.value(),
                  },
                );
              P.push(B);
            }
            var D = Object(r.l)(P, l + 'ArcsLeveledLinesGroup');
            e.push(Object(r.k)([D], l + 'ArcsLinesGroup', j));
            var A = Object(r.e)(
              {
                color: Object(r.u)(
                  this._undoModel,
                  t.collectibleColors,
                  null,
                  'Change ' + n + ' All Lines Color',
                ),
              },
              { id: l + 'AllLineColor', title: b },
            );
            e.push(A);
            var R = i.arcsBackground.childs(),
              W = Object(r.q)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    R.fillBackground,
                    'Change ' + n + ' Background Visibility',
                  ),
                  transparency: Object(r.b)(
                    this._undoModel,
                    R.transparency,
                    'Change ' + n + ' Background Transparency',
                  ),
                },
                { id: l + 'Background', title: p },
              );
            e.push(W);
            var G = Object(r.c)(
              {
                checked: Object(r.b)(
                  this._undoModel,
                  i.reverse,
                  'Change ' + n + ' Reverse',
                ),
              },
              { id: l + 'Reverse', title: h },
            );
            if ((e.push(G), O(this._source))) {
              var E = this._source,
                H = E.properties().childs(),
                F = Object(r.i)(
                  {
                    value: Object(r.b)(
                      this._undoModel,
                      H.scaleRatio,
                      'Change Top Margin',
                      [
                        Object(u.c)(7),
                        function (e) {
                          return null !== e
                            ? parseFloat(
                                E.getScaleRatioFormatter().format('' + e),
                              )
                            : null;
                        },
                      ],
                    ),
                  },
                  {
                    id: 'scaleRatio',
                    title: w,
                    min: new d.a(1e-7),
                    max: new d.a(1e8),
                    step: new d.a(E.getScaleRatioStep()),
                  },
                );
              e.push(F);
              var z = H.labelsStyle.childs(),
                I = Object(o.a)(
                  this._undoModel,
                  {
                    showText: H.showLabels,
                    fontSize: z.fontSize,
                    bold: z.bold,
                    italic: z.italic,
                  },
                  n,
                  { customTitles: { text: f } },
                );
              e.push(I);
            }
            return e;
          }),
          t
        );
      })(l.a);
    },
    XCOO: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'IconsDefinitionsViewModel', function () {
          return c;
        });
      var n = i('mrSG'),
        o = i('Cn8r'),
        r = i('HSjo'),
        l = i('25b6'),
        s = window.t('Color'),
        c = (function (e) {
          function t(t, i) {
            return e.call(this, t, i) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(r.e)(
                  {
                    color: Object(r.u)(
                      this._undoModel,
                      e.color,
                      null,
                      'Change ' + t + ' color',
                    ),
                  },
                  { id: Object(l.c)(t + 'Color'), title: s },
                ),
              ];
            }),
            t
          );
        })(o.a);
    },
    Z5lT: function (e, t, i) {
      'use strict';
      i.d(t, 'b', function () {
        return o;
      }),
        i.d(t, 'a', function () {
          return r;
        }),
        i.d(t, 'c', function () {
          return l;
        });
      var n = i('T6Of');
      function o(e) {
        return Math.floor(e);
      }
      function r(e) {
        return parseInt(String(e));
      }
      function l(e) {
        var t = new n.LimitedPrecisionNumericFormatter(e);
        return function (e) {
          if (null === e) return e;
          var i = t.parse(t.format(e));
          return i.res ? i.value : null;
        };
      }
    },
    ZSes: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'BrushDefinitionsViewModel', function () {
          return d;
        });
      var n = i('mrSG'),
        o = i('wm7x'),
        r = i('Cn8r'),
        l = i('HSjo'),
        s = i('25b6'),
        c = window.t('Background'),
        d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(o.a)(
                  this._undoModel,
                  {
                    lineColor: e.linecolor,
                    lineWidth: e.linewidth,
                    leftEnd: e.leftEnd,
                    rightEnd: e.rightEnd,
                  },
                  t,
                  'Line',
                ),
                Object(l.e)(
                  {
                    checked: Object(l.b)(
                      this._undoModel,
                      e.fillBackground,
                      'Change ' + t + ' background visibility',
                    ),
                    color: Object(l.u)(
                      this._undoModel,
                      e.backgroundColor,
                      e.transparency,
                      'Change ' + t + ' background color',
                    ),
                  },
                  { id: Object(s.c)(t + 'BackgroundColor'), title: c },
                ),
              ];
            }),
            t
          );
        })(r.a);
    },
    Zd1D: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'GeneralFiguresDefinitionsViewModelBase', function () {
          return u;
        }),
        i.d(t, 'GeneralFiguresDefinitionsViewModel', function () {
          return a;
        });
      var n = i('mrSG'),
        o = i('wm7x'),
        r = i('Cn8r'),
        l = i('HSjo'),
        s = i('25b6'),
        c = window.t('Border'),
        d = window.t('Background'),
        u = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(o.a)(
                  this._undoModel,
                  { lineColor: e.color, lineWidth: e.linewidth },
                  t,
                  'Line',
                  { line: c },
                ),
                Object(l.e)(
                  {
                    checked: Object(l.b)(
                      this._undoModel,
                      e.fillBackground,
                      'Change ' + t + ' background visibility',
                    ),
                    color: Object(l.u)(
                      this._undoModel,
                      e.backgroundColor,
                      e.transparency,
                      'Change ' + t + ' background color',
                    ),
                  },
                  { id: Object(s.c)(t + 'BackgroundColor'), title: d },
                ),
              ];
            }),
            t
          );
        })(r.a),
        a = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return Object(n.__extends)(t, e), t;
        })(u);
    },
    auWl: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'TrendLineDefinitionsViewModel', function () {
          return c;
        });
      var n = i('mrSG'),
        o = i('Cn8r'),
        r = i('78yF'),
        l = i('DSp8'),
        s = window.t('Show text'),
        c = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return Object(r.a)(this._undoModel, e, this._source.name());
            }),
            (t.prototype._textPropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return [
                Object(l.a)(
                  this._undoModel,
                  Object(n.__assign)(Object(n.__assign)({}, e), {
                    showText: e.showLabel,
                    textColor: e.textcolor,
                    fontSize: e.fontsize,
                  }),
                  this._source.name(),
                  {
                    isEditable: !0,
                    isMultiLine: !0,
                    customTitles: { text: s },
                  },
                ),
              ];
            }),
            t
          );
        })(o.a);
    },
    b4fl: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'GeneralBezierDefinitionsViewModel', function () {
          return d;
        });
      var n = i('mrSG'),
        o = i('wm7x'),
        r = i('Cn8r'),
        l = i('HSjo'),
        s = i('25b6'),
        c = window.t('Background'),
        d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(o.a)(
                  this._undoModel,
                  {
                    lineColor: e.linecolor,
                    lineWidth: e.linewidth,
                    lineStyle: e.linestyle,
                    extendLeft: e.extendLeft,
                    extendRight: e.extendRight,
                    leftEnd: e.leftEnd,
                    rightEnd: e.rightEnd,
                  },
                  t,
                  'Line',
                ),
                Object(l.e)(
                  {
                    checked: Object(l.b)(
                      this._undoModel,
                      e.fillBackground,
                      'Change ' + t + ' background visibility',
                    ),
                    color: Object(l.u)(
                      this._undoModel,
                      e.backgroundColor,
                      e.transparency,
                      'Change ' + t + ' background color',
                    ),
                  },
                  { id: Object(s.c)(t + 'BackgroundColor'), title: c },
                ),
              ];
            }),
            t
          );
        })(r.a);
    },
    'e0H+': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'HorizontalRayDefinitionsViewModel', function () {
          return l;
        });
      var n = i('mrSG'),
        o = i('xrdl'),
        r = i('CA9d'),
        l = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._coordinatesPropertyDefinitions = function () {
              var e = this._source.points(),
                t = this._source.pointsProperty().childs().points[0].childs(),
                i = this._getYCoordinateStepWV();
              return [
                Object(r.c)(
                  this._undoModel,
                  t,
                  e[0],
                  i,
                  window.t('#1 (price, bar)', { context: 'linetool point' }),
                  this._source.name(),
                ),
              ];
            }),
            t
          );
        })(o.CrossLineDefinitionsViewModel);
    },
    'fIc+': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'GhostFeedDefinitionsViewModel', function () {
          return w;
        });
      var n = i('mrSG'),
        o = i('Cn8r'),
        r = i('HSjo'),
        l = i('hY0g'),
        s = i.n(l),
        c = i('25b6'),
        d = window.t('Candles'),
        u = window.t('Borders'),
        a = window.t('Wick'),
        h = window.t('Transparency'),
        b = window.t('Avg HL in minticks'),
        p = window.t('Variance'),
        w = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name(),
                i = Object(c.c)(t),
                n = e.candleStyle.childs();
              return [
                Object(r.r)(
                  {
                    color1: Object(r.u)(
                      this._undoModel,
                      n.upColor,
                      null,
                      'Change ' + t + ' Candle Up Color',
                    ),
                    color2: Object(r.u)(
                      this._undoModel,
                      n.downColor,
                      null,
                      'Change ' + t + ' Candle Down Color',
                    ),
                  },
                  { id: i + 'Candle2Colors', title: d },
                ),
                Object(r.r)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      n.drawBorder,
                      'Change ' + t + ' Candle Border Visibility',
                    ),
                    color1: Object(r.u)(
                      this._undoModel,
                      n.borderUpColor,
                      null,
                      'Change ' + t + ' Candle Border Up Color',
                    ),
                    color2: Object(r.u)(
                      this._undoModel,
                      n.borderDownColor,
                      null,
                      'Change ' + t + ' Candle Border Down Color',
                    ),
                  },
                  { id: i + 'CandleBorder2Colors', title: u },
                ),
                Object(r.e)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      n.drawWick,
                      'Change ' + t + ' Candle Wick Visibility',
                    ),
                    color: Object(r.u)(
                      this._undoModel,
                      n.wickColor,
                      null,
                      'Change ' + t + ' Candle Wick Color',
                    ),
                  },
                  { id: i + 'CandleWickColor', title: a },
                ),
                Object(r.q)(
                  {
                    transparency: Object(r.b)(
                      this._undoModel,
                      e.transparency,
                      'Change ' + t + ' Transparency',
                    ),
                  },
                  { id: i + 'Transparency', title: h },
                ),
              ];
            }),
            (t.prototype._inputsPropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name(),
                i = Object(c.c)(t);
              return [
                Object(r.i)(
                  {
                    value: Object(r.b)(
                      this._undoModel,
                      e.averageHL,
                      'Change ' + t + ' Average HL value',
                    ),
                  },
                  {
                    id: i + 'AvgHL',
                    title: b,
                    type: 0,
                    min: new s.a(1),
                    max: new s.a(5e4),
                    step: new s.a(1),
                  },
                ),
                Object(r.i)(
                  {
                    value: Object(r.b)(
                      this._undoModel,
                      e.variance,
                      'Change ' + t + ' Variance value',
                    ),
                  },
                  {
                    id: i + 'Variance',
                    title: p,
                    type: 0,
                    min: new s.a(1),
                    max: new s.a(100),
                    step: new s.a(1),
                  },
                ),
              ];
            }),
            t
          );
        })(o.a);
    },
    hQgR: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'PriceLabelDefinitionsViewModel', function () {
          return s;
        });
      var n = i('mrSG'),
        o = i('DSp8'),
        r = i('Cn8r'),
        l = window.t('Text'),
        s = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return [
                Object(o.a)(
                  this._undoModel,
                  {
                    textColor: e.color,
                    fontSize: e.fontsize,
                    backgroundColor: e.backgroundColor,
                    backgroundTransparency: e.transparency,
                    borderColor: e.borderColor,
                  },
                  this._source.name(),
                  { customTitles: { text: l } },
                ),
              ];
            }),
            t
          );
        })(r.a);
    },
    nBUU: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'FibSpiralDefinitionsViewModel', function () {
          return d;
        });
      var n = i('mrSG'),
        o = i('HSjo'),
        r = i('Cn8r'),
        l = i('25b6'),
        s = window.t('Line'),
        c = window.t('Counterclockwise'),
        d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name(),
                i = Object(l.c)(t);
              return [
                Object(o.h)(
                  {
                    color: Object(o.u)(
                      this._undoModel,
                      e.linecolor,
                      null,
                      'Change ' + t + ' Line Color',
                    ),
                    width: Object(o.b)(
                      this._undoModel,
                      e.linewidth,
                      'Change ' + t + ' Line Width',
                    ),
                    style: Object(o.b)(
                      this._undoModel,
                      e.linestyle,
                      'Change ' + t + ' Line Style',
                    ),
                  },
                  { id: i + 'Line', title: s },
                ),
                Object(o.c)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      e.counterclockwise,
                      'Change ' + t + ' Counterclockwise',
                    ),
                  },
                  { id: i + 'Counterclockwise', title: c },
                ),
              ];
            }),
            t
          );
        })(r.a);
    },
    o1gc: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'TrendAngleDefinitionsViewModel', function () {
          return h;
        });
      var n = i('mrSG'),
        o = i('HSjo'),
        r = i('Cn8r'),
        l = i('hY0g'),
        s = i.n(l),
        c = i('CA9d'),
        d = i('78yF'),
        u = window.t('Angle'),
        a = window.t('Text'),
        h = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._coordinatesPropertyDefinitions = function () {
              var e = this._source.points(),
                t = [],
                i = this._source.pointsProperty().childs().points[0].childs(),
                n = this._getYCoordinateStepWV();
              t.push(
                Object(c.c)(
                  this._undoModel,
                  i,
                  e[0],
                  n,
                  window.t('#1 (price, bar)', { context: 'linetool point' }),
                  this._source.name(),
                ),
              );
              var r = Object(o.i)(
                {
                  value: Object(o.b)(
                    this._undoModel,
                    this._source.properties().childs().angle,
                    'Change angle',
                  ),
                },
                {
                  id: 'TrendLineAngleCoordinate',
                  title: u,
                  min: new s.a(-360),
                  max: new s.a(360),
                  step: new s.a(1),
                },
              );
              return t.push(r), t;
            }),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return Object(d.a)(this._undoModel, e, this._source.name(), {
                text: a,
              });
            }),
            t
          );
        })(r.a);
    },
    pdv6: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'FibSpeedResistanceArcsDefinitionsViewModel', function () {
          return b;
        });
      var n = i('mrSG'),
        o = i('wm7x'),
        r = i('HSjo'),
        l = i('Cn8r'),
        s = i('25b6'),
        c = window.t('Trend Line'),
        d = window.t('Use one color'),
        u = window.t('Background'),
        a = window.t('Levels'),
        h = window.t('Full Circles'),
        b = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = [],
                t = this._source.properties(),
                i = t.childs(),
                n = this._source.name(),
                l = Object(s.c)(n),
                b = i.trendline.childs(),
                p = Object(o.a)(
                  this._undoModel,
                  {
                    showLine: b.visible,
                    lineColor: b.color,
                    lineStyle: b.linestyle,
                    lineWidth: b.linewidth,
                  },
                  n,
                  'TrendLine',
                  { line: c },
                );
              e.push(p);
              for (var w = this._source.levelsCount(), f = 1; f <= w; f++) {
                var g = i['level' + f].childs(),
                  _ = Object(r.g)(
                    {
                      checked: Object(r.b)(
                        this._undoModel,
                        g.visible,
                        'Change ' + n + ' Level ' + f + ' Line Visibility',
                      ),
                      color: Object(r.u)(
                        this._undoModel,
                        g.color,
                        null,
                        'Change ' + n + ' Level ' + f + ' Line Color',
                      ),
                      width: Object(r.b)(
                        this._undoModel,
                        g.linewidth,
                        'Change ' + n + ' Level ' + f + ' Line Width',
                      ),
                      level: Object(r.b)(
                        this._undoModel,
                        g.coeff,
                        'Change ' + n + ' Level ' + f + ' Coeff',
                      ),
                    },
                    { id: l + 'LineLevel' + f },
                  );
                e.push(_);
              }
              var j = Object(r.e)(
                {
                  color: Object(r.u)(
                    this._undoModel,
                    t.collectibleColors,
                    null,
                    'Change ' + n + ' All Lines Color',
                  ),
                },
                { id: l + 'AllLineColor', title: d },
              );
              e.push(j);
              var O = Object(r.q)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    i.fillBackground,
                    'Change ' + n + ' Background Visibility',
                  ),
                  transparency: Object(r.b)(
                    this._undoModel,
                    i.transparency,
                    'Change ' + n + ' Background Transparency',
                  ),
                },
                { id: l + 'Background', title: u },
              );
              e.push(O);
              var C = Object(r.c)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    i.showCoeffs,
                    'Change ' + n + ' Levels Visibility',
                  ),
                },
                { id: l + 'Levels', title: a },
              );
              e.push(C);
              var v = Object(r.c)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    i.fullCircles,
                    'Change ' + n + ' Full Circles Visibility',
                  ),
                },
                { id: l + 'FullCircles', title: h },
              );
              return e.push(v), e;
            }),
            t
          );
        })(l.a);
    },
    u52p: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'TrendBasedFibTimeDefinitionsViewModel', function () {
          return w;
        });
      var n = i('mrSG'),
        o = i('wm7x'),
        r = i('HSjo'),
        l = i('Cn8r'),
        s = i('SMr9'),
        c = i('hY0g'),
        d = i.n(c),
        u = i('25b6'),
        a = window.t('Trend Line'),
        h = window.t('Use one color'),
        b = window.t('Background'),
        p = window.t('Labels'),
        w = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = [],
                t = this._source.properties(),
                i = t.childs(),
                n = this._source.name(),
                l = Object(u.c)(n),
                c = i.trendline.childs(),
                w = Object(o.a)(
                  this._undoModel,
                  {
                    showLine: c.visible,
                    lineColor: c.color,
                    lineStyle: c.linestyle,
                    lineWidth: c.linewidth,
                  },
                  n,
                  'TrendLine',
                  { line: a },
                );
              e.push(w);
              for (var f = this._source.levelsCount(), g = 1; g <= f; g++) {
                var _ = i['level' + g].childs(),
                  j = Object(r.g)(
                    {
                      checked: Object(r.b)(
                        this._undoModel,
                        _.visible,
                        'Change ' + n + ' Level ' + g + ' Line Visibility',
                      ),
                      color: Object(r.u)(
                        this._undoModel,
                        _.color,
                        null,
                        'Change ' + n + ' Level ' + g + ' Line Color',
                      ),
                      width: Object(r.b)(
                        this._undoModel,
                        _.linewidth,
                        'Change ' + n + ' Level ' + g + ' Line Width',
                      ),
                      style: Object(r.b)(
                        this._undoModel,
                        _.linestyle,
                        'Change ' + n + ' Level ' + g + ' Line Style',
                      ),
                      level: Object(r.b)(
                        this._undoModel,
                        _.coeff,
                        'Change ' + n + ' Level ' + g + ' Coeff',
                      ),
                    },
                    { id: l + 'LineLevel' + g },
                  );
                e.push(j);
              }
              var O = Object(r.e)(
                {
                  color: Object(r.u)(
                    this._undoModel,
                    t.collectibleColors,
                    null,
                    'Change ' + n + ' All Lines Color',
                  ),
                },
                { id: l + 'AllLineColor', title: h },
              );
              e.push(O);
              var C = Object(r.q)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    i.fillBackground,
                    'Change ' + n + ' Background Visibility',
                  ),
                  transparency: Object(r.b)(
                    this._undoModel,
                    i.transparency,
                    'Change ' + n + ' Background Transparency',
                  ),
                },
                { id: l + 'Background', title: b },
              );
              e.push(C);
              var v = Object(r.s)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    i.showCoeffs,
                    'Change ' + n + ' Labels Visibility',
                  ),
                  option1: Object(r.b)(
                    this._undoModel,
                    i.horzLabelsAlign,
                    'Change ' + n + ' Labels Alignment',
                  ),
                  option2: Object(r.b)(
                    this._undoModel,
                    i.vertLabelsAlign,
                    'Change ' + n + ' Labels Alignment',
                  ),
                },
                {
                  id: l + 'Labels',
                  title: p,
                  optionsItems1: new d.a(s.availableAlignmentHorizontalItems),
                  optionsItems2: new d.a(s.availableAlignmentVerticalItems),
                },
              );
              return e.push(v), e;
            }),
            t
          );
        })(l.a);
    },
    vm8R: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'GeneralTrendFiguresDefinitionsViewModel', function () {
          return a;
        });
      var n = i('mrSG'),
        o = i('wm7x'),
        r = i('DSp8'),
        l = i('Cn8r'),
        s = i('HSjo'),
        c = i('25b6'),
        d = window.t('Prices'),
        u = window.t('Background'),
        a = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(o.a)(
                  this._undoModel,
                  Object(n.__assign)(Object(n.__assign)({}, e), {
                    lineColor: e.linecolor,
                    lineWidth: e.linewidth,
                    lineStyle: e.linestyle,
                  }),
                  t,
                  'Line',
                ),
                Object(r.a)(
                  this._undoModel,
                  {
                    showText: e.showPrices,
                    textColor: e.textcolor,
                    fontSize: e.fontsize,
                    bold: e.bold,
                    italic: e.italic,
                  },
                  t,
                  { customTitles: { text: d } },
                ),
                Object(s.e)(
                  {
                    checked: Object(s.b)(
                      this._undoModel,
                      e.fillBackground,
                      'Change ' + t + ' background visibility',
                    ),
                    color: Object(s.u)(
                      this._undoModel,
                      e.backgroundColor,
                      e.transparency,
                      'Change ' + t + ' background visibility color',
                    ),
                  },
                  { id: Object(c.c)(t + 'Background'), title: u },
                ),
              ];
            }),
            t
          );
        })(l.a);
    },
    'w/mY': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'FlagMarkDefinitionsViewModel', function () {
          return s;
        });
      var n = i('mrSG'),
        o = i('Cn8r'),
        r = i('HSjo'),
        l = window.t('Flag'),
        s = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return [
                Object(r.e)(
                  {
                    color: Object(r.u)(
                      this._undoModel,
                      e.flagColor,
                      null,
                      'Change Flag Color',
                    ),
                  },
                  { id: 'FlagColor', title: l },
                ),
              ];
            }),
            t
          );
        })(o.a);
    },
    wm7x: function (e, t, i) {
      'use strict';
      i.d(t, 'a', function () {
        return c;
      });
      var n = i('HSjo'),
        o = i('25b6'),
        r = window.t('Line'),
        l = window.t('Extend left line'),
        s = window.t('Extend right line');
      function c(e, t, i, c, d) {
        var u = {},
          a = { id: '' + Object(o.c)(i) + c, title: (d && d.line) || r };
        return (
          void 0 !== t.showLine &&
            (u.checked = Object(n.b)(
              e,
              t.showLine,
              'Change ' + i + ' Visibility',
            )),
          void 0 !== t.lineWidth &&
            (u.width = Object(n.b)(e, t.lineWidth, 'Change ' + i + ' Width')),
          void 0 !== t.lineStyle &&
            (u.style = Object(n.b)(e, t.lineStyle, 'Change ' + i + ' Style')),
          void 0 !== t.lineColor &&
            (u.color = Object(n.u)(
              e,
              t.lineColor,
              null,
              'Change ' + i + ' Color',
            )),
          void 0 !== t.extendLeft &&
            ((u.extendLeft = Object(n.b)(
              e,
              t.extendLeft,
              'Change ' + i + ' Extending Left',
            )),
            (a.extendLeftTitle = (d && d.extendLeftTitle) || l)),
          void 0 !== t.leftEnd &&
            (u.leftEnd = Object(n.b)(
              e,
              t.leftEnd,
              'Change ' + i + ' Left End',
            )),
          void 0 !== t.extendRight &&
            ((u.extendRight = Object(n.b)(
              e,
              t.extendRight,
              'Change ' + i + ' Extending Right',
            )),
            (a.extendRightTitle = (d && d.extendRightTitle) || s)),
          void 0 !== t.rightEnd &&
            (u.rightEnd = Object(n.b)(
              e,
              t.rightEnd,
              'Change ' + i + ' Right End',
            )),
          Object(n.h)(u, a)
        );
      }
    },
    xhf0: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'CalloutDefinitionsViewModel', function () {
          return r;
        });
      var n = i('mrSG'),
        o = i('DSp8'),
        r = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._textPropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(o.a)(
                  this._undoModel,
                  {
                    textColor: e.color,
                    fontSize: e.fontsize,
                    bold: e.bold,
                    italic: e.italic,
                    text: e.text,
                    backgroundColor: e.backgroundColor,
                    backgroundTransparency: e.transparency,
                    borderColor: e.bordercolor,
                    borderWidth: e.linewidth,
                    wrap: e.wordWrap,
                  },
                  t,
                  { isEditable: !0, isMultiLine: !0 },
                ),
              ];
            }),
            t
          );
        })(i('Cn8r').a);
    },
    xrdl: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'CrossLineDefinitionsViewModel', function () {
          return c;
        });
      var n = i('mrSG'),
        o = i('Cn8r'),
        r = i('BDhr'),
        l = i('DSp8'),
        s = window.t('Show text'),
        c = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return Object(r.a)(this._undoModel, e, this._source.name());
            }),
            (t.prototype._textPropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return 'showLabel' in e
                ? [
                    Object(l.a)(
                      this._undoModel,
                      Object(n.__assign)(Object(n.__assign)({}, e), {
                        showText: e.showLabel,
                        textColor: e.textcolor,
                        fontSize: e.fontsize,
                      }),
                      this._source.name(),
                      {
                        isEditable: !0,
                        isMultiLine: !0,
                        customTitles: { text: s },
                      },
                    ),
                  ]
                : null;
            }),
            t
          );
        })(o.a);
    },
    y4pE: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'AbcdPatternDefinitionsViewModel', function () {
          return d;
        });
      var n = i('mrSG'),
        o = i('wm7x'),
        r = i('DSp8'),
        l = i('Cn8r'),
        s = window.t('Label'),
        c = window.t('Border'),
        d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(r.a)(
                  this._undoModel,
                  {
                    textColor: e.textcolor,
                    fontSize: e.fontsize,
                    bold: e.bold,
                    italic: e.italic,
                  },
                  this._source.name(),
                  {
                    isEditable: !0,
                    isMultiLine: !0,
                    customTitles: { text: s },
                  },
                ),
                Object(o.a)(
                  this._undoModel,
                  { lineColor: e.color, lineWidth: e.linewidth },
                  t,
                  'Line',
                  { line: c },
                ),
              ];
            }),
            t
          );
        })(l.a);
    },
  },
]);
