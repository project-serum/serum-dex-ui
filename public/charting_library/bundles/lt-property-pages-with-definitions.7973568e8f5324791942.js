(window.webpackJsonp = window.webpackJsonp || []).push([
  ['lt-property-pages-with-definitions'],
  {
    '/HOw': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'PatternWithBackgroundDefinitionViewModel', function () {
          return h;
        });
      var o = i('mrSG'),
        n = i('wm7x'),
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
            Object(o.c)(t, e),
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
                Object(n.a)(
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
    '/a/6': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'HighlighterDefinitionsViewModel', function () {
          return r;
        });
      var o = i('mrSG'),
        n = i('wm7x'),
        r = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(n.a)(
                  this._undoModel,
                  { lineColor: e.linecolor },
                  t,
                  'Line',
                ),
              ];
            }),
            t
          );
        })(i('Cn8r').a);
    },
    '17v9': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'FibDrawingsWith24LevelsDefinitionsViewModel', function () {
          return S;
        });
      var o = i('mrSG'),
        n = i('Eyy1'),
        r = i('wm7x'),
        l = i('HSjo'),
        s = i('Cn8r'),
        c = i('SMr9'),
        d = i('hY0g'),
        u = i.n(d),
        a = i('25b6'),
        h = i('turx'),
        b = window.t('Trend Line'),
        p = window.t('Levels Line'),
        w = window.t('Extend Right'),
        f = window.t('Extend Left'),
        g = window.t('Extend Lines Right'),
        j = window.t('Extend Lines Left'),
        O = window.t('Reverse'),
        C = window.t('Prices'),
        y = window.t('Levels'),
        _ = window.t('Labels'),
        v = window.t('Use one color'),
        L = window.t('Background'),
        M = window.t('Fib levels based on log scale'),
        k = [
          { value: !1, title: window.t('Values') },
          { value: !0, title: window.t('Percents') },
        ],
        m = [
          { value: 'bottom', title: window.t('Top') },
          { value: 'middle', title: window.t('Middle') },
          { value: 'top', title: window.t('Bottom') },
        ],
        S = (function (e) {
          function t(t, i) {
            var o = e.call(this, t, i) || this;
            if (
              ((o._disabledBasedOnLog = null),
              'fibLevelsBasedOnLogScale' in o._source.properties().childs())
            ) {
              var n = o._source.priceScale();
              null !== n &&
                ((o._disabledBasedOnLog = new u.a(Boolean(!n.mode().log))),
                o._createPropertyRages(),
                n.modeChanged().subscribe(o, function (e, t) {
                  null !== o._disabledBasedOnLog &&
                    o._disabledBasedOnLog.setValue(Boolean(!t.log));
                }));
            }
            return o;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.destroy = function () {
              e.prototype.destroy.call(this);
              var t = this._source.priceScale();
              null !== t && t.modeChanged().unsubscribeAll(this);
            }),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = [],
                t = this._source.properties().childs(),
                i = this._source.name(),
                o = Object(a.c)(i);
              if ('trendline' in t) {
                var s = t.trendline.childs(),
                  d = Object(r.a)(
                    this._undoModel,
                    {
                      showLine: s.visible,
                      lineColor: s.color,
                      lineStyle: s.linestyle,
                      lineWidth: s.linewidth,
                    },
                    i,
                    'TrendLine',
                    { line: b },
                  );
                e.push(d);
              }
              var S = t.levelsStyle.childs(),
                x = { lineStyle: S.linestyle, lineWidth: S.linewidth },
                P = { line: p };
              'extendLines' in t &&
                ((x.extendRight = t.extendLines), (P.extendRightTitle = g)),
                'extendLinesLeft' in t &&
                  ((x.extendLeft = t.extendLinesLeft), (P.extendLeftTitle = j)),
                'extendRight' in t &&
                  ((x.extendRight = t.extendRight), (P.extendRightTitle = w)),
                'extendLeft' in t &&
                  ((x.extendLeft = t.extendLeft), (P.extendLeftTitle = f));
              var T = Object(r.a)(this._undoModel, x, i, 'LevelsStyleLine', P);
              e.push(T);
              for (
                var V = [], B = this._source.levelsCount(), D = 1;
                D <= B;
                D++
              ) {
                var W = t['level' + D].childs(),
                  A = Object(l.g)(
                    {
                      checked: Object(l.b)(
                        this._undoModel,
                        W.visible,
                        'Change ' + i + ' Level ' + D + ' Line Visibility',
                      ),
                      color: Object(l.u)(
                        this._undoModel,
                        W.color,
                        null,
                        'Change ' + i + ' Level ' + D + ' Line Color',
                      ),
                      level: Object(l.b)(
                        this._undoModel,
                        W.coeff,
                        'Change ' + i + ' Level ' + D + ' Coeff',
                      ),
                    },
                    { id: o + 'LineLevel' + D },
                  );
                V.push(A);
              }
              var R = Object(l.l)(V, o + 'LeveledLinesGroup');
              e.push(Object(l.k)([R], o + 'Group'));
              var E = Object(l.e)(
                {
                  color: Object(l.u)(
                    this._undoModel,
                    new h.CollectibleColorPropertyUndoWrapper(
                      Object(n.ensureNotNull)(
                        this._source.lineColorsProperty(),
                      ),
                      this._undoModel,
                      '',
                    ),
                    null,
                    'Change ' + i + ' All Lines Color',
                    !0,
                  ),
                },
                { id: o + 'AllLineColor', title: v },
              );
              e.push(E);
              var G = Object(l.q)(
                {
                  checked: Object(l.b)(
                    this._undoModel,
                    t.fillBackground,
                    'Change ' + i + ' Background Visibility',
                  ),
                  transparency: Object(l.b)(
                    this._undoModel,
                    t.transparency,
                    'Change ' + i + ' Background Transparency',
                  ),
                },
                { id: o + 'Background', title: L },
              );
              e.push(G);
              var H = t;
              if ('reverse' in H) {
                var z = Object(l.c)(
                  {
                    checked: Object(l.b)(
                      this._undoModel,
                      H.reverse,
                      'Change ' + i + ' Reverse',
                    ),
                  },
                  { id: o + 'Reverse', title: O },
                );
                e.push(z);
              }
              var F = Object(l.c)(
                {
                  checked: Object(l.b)(
                    this._undoModel,
                    t.showPrices,
                    'Change ' + i + ' Prices Visibility',
                  ),
                },
                { id: o + 'Prices', title: C },
              );
              e.push(F);
              var U = Object(l.j)(
                {
                  checked: Object(l.b)(
                    this._undoModel,
                    t.showCoeffs,
                    'Change ' + i + ' Style',
                  ),
                  option: Object(l.b)(
                    this._undoModel,
                    t.coeffsAsPercents,
                    'Change ' + i + ' Style',
                  ),
                },
                { id: i + 'PitchStyle', title: y, options: new u.a(k) },
              );
              e.push(U);
              var I = Object(l.s)(
                {
                  option1: Object(l.b)(
                    this._undoModel,
                    t.horzLabelsAlign,
                    'Change ' + i + ' Labels Alignment',
                  ),
                  option2: Object(l.b)(
                    this._undoModel,
                    t.vertLabelsAlign,
                    'Change ' + i + ' Labels Alignment',
                  ),
                },
                {
                  id: o + 'Alignment',
                  title: _,
                  optionsItems1: new u.a(c.availableAlignmentHorizontalItems),
                  optionsItems2: new u.a(m),
                },
              );
              if (
                (e.push(I),
                'fibLevelsBasedOnLogScale' in t &&
                  null !== this._disabledBasedOnLog)
              ) {
                var Y = Object(l.c)(
                  {
                    disabled: Object(l.a)(
                      this._undoModel,
                      this._disabledBasedOnLog,
                      'Change ' + i + ' Fib levels based on log scale disabled',
                    ),
                    checked: Object(l.b)(
                      this._undoModel,
                      t.fibLevelsBasedOnLogScale,
                      'Change ' + i + ' Fib levels based on log scale',
                    ),
                  },
                  { id: o + 'BasedOnLog', title: M },
                );
                e.push(Y);
              }
              return e;
            }),
            t
          );
        })(s.a);
    },
    '1yQO': function (e, t, i) {
      'use strict';
      i.d(t, 'a', function () {
        return r;
      });
      var o = i('hY0g'),
        n = i.n(o);
      function r(e, t, i, o) {
        void 0 === o && (o = null);
        var r = { id: t, title: i, definitions: new n.a(e) };
        return null !== o && (r.icon = o), r;
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
    '2PB4': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'FibSpeedResistanceFanDefinitionsViewModel', function () {
          return O;
        });
      var o = i('mrSG'),
        n = i('Eyy1'),
        r = i('HSjo'),
        l = i('Cn8r'),
        s = i('25b6'),
        c = i('turx'),
        d = window.t('Use one color'),
        u = window.t('Background'),
        a = window.t('Price Levels'),
        h = window.t('Time Levels'),
        b = window.t('Left Labels'),
        p = window.t('Right Labels'),
        w = window.t('Top Labels'),
        f = window.t('Bottom Labels'),
        g = window.t('Grid'),
        j = window.t('Reverse'),
        O = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              for (
                var e = [],
                  t = this._source.properties().childs(),
                  i = this._source.name(),
                  o = Object(s.c)(i),
                  l = [],
                  O = this._source.hLevelsCount(),
                  C = 1;
                C <= O;
                C++
              ) {
                var y = t['hlevel' + C].childs(),
                  _ = Object(r.g)(
                    {
                      checked: Object(r.b)(
                        this._undoModel,
                        y.visible,
                        'Change ' + i + ' Level ' + C + ' Line Visibility',
                      ),
                      color: Object(r.u)(
                        this._undoModel,
                        y.color,
                        null,
                        'Change ' + i + ' Level ' + C + ' Line Color',
                      ),
                      level: Object(r.b)(
                        this._undoModel,
                        y.coeff,
                        'Change ' + i + ' Level ' + C + ' Coeff',
                      ),
                    },
                    { id: o + 'HLineLevel' + C },
                  );
                l.push(_);
              }
              var v = Object(r.l)(l, o + 'HLeveledLinesGroup'),
                L = Object(r.c)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      t.showLeftLabels,
                      'Change ' + i + ' Left Labels Visibility',
                    ),
                  },
                  { id: o + 'LeftLabels', title: b },
                ),
                M = Object(r.c)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      t.showRightLabels,
                      'Change ' + i + ' Right Labels Visibility',
                    ),
                  },
                  { id: o + 'RightLabels', title: p },
                ),
                k = Object(r.k)([v, L, M], o + 'HLevelGroup', a);
              e.push(k);
              var m = [],
                S = this._source.vLevelsCount();
              for (C = 1; C <= S; C++) {
                (y = t['vlevel' + C].childs()),
                  (_ = Object(r.g)(
                    {
                      checked: Object(r.b)(
                        this._undoModel,
                        y.visible,
                        'Change ' + i + ' Level ' + C + ' Line Visibility',
                      ),
                      color: Object(r.u)(
                        this._undoModel,
                        y.color,
                        null,
                        'Change ' + i + ' Level ' + C + ' Line Color',
                      ),
                      level: Object(r.b)(
                        this._undoModel,
                        y.coeff,
                        'Change ' + i + ' Level ' + C + ' Coeff',
                      ),
                    },
                    { id: o + 'VLineLevel' + C },
                  ));
                m.push(_);
              }
              var x = Object(r.l)(m, o + 'VLeveledLinesGroup'),
                P = Object(r.c)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      t.showTopLabels,
                      'Change ' + i + ' Top Labels Visibility',
                    ),
                  },
                  { id: o + 'TopLabels', title: w },
                ),
                T = Object(r.c)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      t.showBottomLabels,
                      'Change ' + i + ' Bottom Labels Visibility',
                    ),
                  },
                  { id: o + 'BottomLabels', title: f },
                ),
                V = Object(r.k)([x, P, T], o + 'VLevelGroup', h);
              e.push(V);
              var B = Object(r.e)(
                {
                  color: Object(r.u)(
                    this._undoModel,
                    new c.CollectibleColorPropertyUndoWrapper(
                      Object(n.ensureNotNull)(
                        this._source.lineColorsProperty(),
                      ),
                      this._undoModel,
                      '',
                    ),
                    null,
                    'Change ' + i + ' All Lines Color',
                    !0,
                  ),
                },
                { id: o + 'AllLineColor', title: d },
              );
              e.push(B);
              var D = Object(r.q)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    t.fillBackground,
                    'Change ' + i + ' Background Visibility',
                  ),
                  transparency: Object(r.b)(
                    this._undoModel,
                    t.transparency,
                    'Change ' + i + ' Background Transparency',
                  ),
                },
                { id: o + 'Background', title: u },
              );
              e.push(D);
              var W = t.grid.childs(),
                A = Object(r.h)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      W.visible,
                      'Change ' + i + ' Grid Visibility',
                    ),
                    color: Object(r.u)(
                      this._undoModel,
                      W.color,
                      null,
                      'Change ' + i + ' Grid Line Color',
                    ),
                    width: Object(r.b)(
                      this._undoModel,
                      W.linewidth,
                      'Change ' + i + ' Grid Line Width',
                    ),
                    style: Object(r.b)(
                      this._undoModel,
                      W.linestyle,
                      'Change ' + i + ' Grid Line Style',
                    ),
                  },
                  { id: o + 'GridLine', title: g },
                );
              e.push(A);
              var R = Object(r.c)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    t.reverse,
                    'Change ' + i + ' Reverse Mode',
                  ),
                },
                { id: o + 'Reverse', title: j },
              );
              return e.push(R), e;
            }),
            t
          );
        })(l.a);
    },
    '2liL': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'GannSquareDefinitionsViewModel', function () {
          return O;
        });
      var o = i('mrSG'),
        n = i('Eyy1'),
        r = i('HSjo'),
        l = i('Cn8r'),
        s = i('25b6'),
        c = i('turx'),
        d = window.t('Use one color'),
        u = window.t('Background'),
        a = window.t('Price Levels'),
        h = window.t('Time Levels'),
        b = window.t('Left Labels'),
        p = window.t('Right Labels'),
        w = window.t('Top Labels'),
        f = window.t('Bottom Labels'),
        g = window.t('Angles'),
        j = window.t('Reverse'),
        O = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              for (
                var e = [],
                  t = this._source.properties().childs(),
                  i = this._source.name(),
                  o = Object(s.c)(i),
                  l = [],
                  O = this._source.hLevelsCount(),
                  C = 1;
                C <= O;
                C++
              ) {
                var y = t['hlevel' + C].childs(),
                  _ = Object(r.g)(
                    {
                      checked: Object(r.b)(
                        this._undoModel,
                        y.visible,
                        'Change ' + i + ' Level ' + C + ' Line Visibility',
                      ),
                      color: Object(r.u)(
                        this._undoModel,
                        y.color,
                        null,
                        'Change ' + i + ' Level ' + C + ' Line Color',
                      ),
                      level: Object(r.b)(
                        this._undoModel,
                        y.coeff,
                        'Change ' + i + ' Level ' + C + ' Coeff',
                      ),
                    },
                    { id: o + 'HLineLevel' + C },
                  );
                l.push(_);
              }
              var v = Object(r.l)(l, o + 'HLeveledLinesGroup'),
                L = Object(r.c)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      t.showLeftLabels,
                      'Change ' + i + ' Left Labels Visibility',
                    ),
                  },
                  { id: o + 'LeftLabels', title: b },
                ),
                M = Object(r.c)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      t.showRightLabels,
                      'Change ' + i + ' Right Labels Visibility',
                    ),
                  },
                  { id: o + 'RightLabels', title: p },
                ),
                k = Object(r.q)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      t.fillHorzBackground,
                      'Change ' + i + ' Background Visibility',
                    ),
                    transparency: Object(r.b)(
                      this._undoModel,
                      t.horzTransparency,
                      'Change ' + i + ' Background Transparency',
                    ),
                  },
                  { id: o + 'BackgroundH', title: u },
                ),
                m = Object(r.k)([v, L, M, k], o + 'HLevelGroup', a);
              e.push(m);
              var S = [],
                x = this._source.vLevelsCount();
              for (C = 1; C <= x; C++) {
                (y = t['vlevel' + C].childs()),
                  (_ = Object(r.g)(
                    {
                      checked: Object(r.b)(
                        this._undoModel,
                        y.visible,
                        'Change ' + i + ' Level ' + C + ' Line Visibility',
                      ),
                      color: Object(r.u)(
                        this._undoModel,
                        y.color,
                        null,
                        'Change ' + i + ' Level ' + C + ' Line Color',
                      ),
                      level: Object(r.b)(
                        this._undoModel,
                        y.coeff,
                        'Change ' + i + ' Level ' + C + ' Coeff',
                      ),
                    },
                    { id: o + 'VLineLevel' + C },
                  ));
                S.push(_);
              }
              var P = Object(r.l)(S, o + 'VLeveledLinesGroup'),
                T = Object(r.c)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      t.showTopLabels,
                      'Change ' + i + ' Top Labels Visibility',
                    ),
                  },
                  { id: o + 'TopLabels', title: w },
                ),
                V = Object(r.c)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      t.showBottomLabels,
                      'Change ' + i + ' Bottom Labels Visibility',
                    ),
                  },
                  { id: o + 'BottomLabels', title: f },
                ),
                B = Object(r.q)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      t.fillVertBackground,
                      'Change ' + i + ' Background Visibility',
                    ),
                    transparency: Object(r.b)(
                      this._undoModel,
                      t.vertTransparency,
                      'Change ' + i + ' Background Transparency',
                    ),
                  },
                  { id: o + 'BackgroundV', title: u },
                ),
                D = Object(r.k)([P, T, V, B], o + 'VLevelGroup', h);
              e.push(D);
              var W = Object(r.e)(
                {
                  color: Object(r.u)(
                    this._undoModel,
                    new c.CollectibleColorPropertyUndoWrapper(
                      Object(n.ensureNotNull)(
                        this._source.lineColorsProperty(),
                      ),
                      this._undoModel,
                      '',
                    ),
                    null,
                    'Change ' + i + ' All Lines Color',
                    !0,
                  ),
                },
                { id: o + 'AllLineColor', title: d },
              );
              e.push(W);
              var A = t.fans.childs(),
                R = Object(r.e)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      A.visible,
                      'Change ' + i + ' Fans Visibility',
                    ),
                    color: Object(r.u)(
                      this._undoModel,
                      A.color,
                      null,
                      'Change ' + i + ' Fans Line Color',
                    ),
                  },
                  { id: o + 'FansLines', title: g },
                );
              e.push(R);
              var E = Object(r.c)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    t.reverse,
                    'Change ' + i + ' Reverse',
                  ),
                },
                { id: o + 'Reverse', title: j },
              );
              return e.push(E), e;
            }),
            t
          );
        })(l.a);
    },
    '5sLb': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'ArrowMarkDefinitionsViewModel', function () {
          return d;
        });
      var o = i('mrSG'),
        n = i('DSp8'),
        r = i('Cn8r'),
        l = i('HSjo'),
        s = window.t('Show text'),
        c = window.t('Arrow'),
        d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._textPropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return [
                Object(n.a)(
                  this._undoModel,
                  {
                    text: e.text,
                    showText: e.showLabel,
                    textColor: e.color,
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
          return w;
        });
      var o = i('mrSG'),
        n = i('wm7x'),
        r = i('HSjo'),
        l = i('Cn8r'),
        s = i('25b6'),
        c = i('Eyy1'),
        d = i('turx'),
        u = window.t('Trend Line'),
        a = window.t('Use one color'),
        h = window.t('Background'),
        b = window.t('Levels'),
        p = window.t('Coeffs As Percents'),
        w = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = [],
                t = this._source.properties().childs(),
                i = this._source.name(),
                o = Object(s.c)(i),
                l = t.trendline.childs(),
                w = Object(n.a)(
                  this._undoModel,
                  {
                    showLine: l.visible,
                    lineColor: l.color,
                    lineStyle: l.linestyle,
                    lineWidth: l.linewidth,
                  },
                  i,
                  'TrendLine',
                  { line: u },
                );
              e.push(w);
              for (var f = this._source.levelsCount(), g = 1; g <= f; g++) {
                var j = t['level' + g].childs(),
                  O = Object(r.g)(
                    {
                      checked: Object(r.b)(
                        this._undoModel,
                        j.visible,
                        'Change ' + i + ' Level ' + g + ' Line Visibility',
                      ),
                      color: Object(r.u)(
                        this._undoModel,
                        j.color,
                        null,
                        'Change ' + i + ' Level ' + g + ' Line Color',
                      ),
                      width: Object(r.b)(
                        this._undoModel,
                        j.linewidth,
                        'Change ' + i + ' Level ' + g + ' Line Width',
                      ),
                      level: Object(r.b)(
                        this._undoModel,
                        j.coeff,
                        'Change ' + i + ' Level ' + g + ' Coeff',
                      ),
                    },
                    { id: o + 'LineLevel' + g },
                  );
                e.push(O);
              }
              var C = Object(r.e)(
                {
                  color: Object(r.u)(
                    this._undoModel,
                    new d.CollectibleColorPropertyUndoWrapper(
                      Object(c.ensureNotNull)(
                        this._source.lineColorsProperty(),
                      ),
                      this._undoModel,
                      '',
                    ),
                    null,
                    'Change ' + i + ' All Lines Color',
                    !0,
                  ),
                },
                { id: o + 'AllLineColor', title: a },
              );
              e.push(C);
              var y = Object(r.q)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    t.fillBackground,
                    'Change ' + i + ' Background Visibility',
                  ),
                  transparency: Object(r.b)(
                    this._undoModel,
                    t.transparency,
                    'Change ' + i + ' Background Transparency',
                  ),
                },
                { id: o + 'Background', title: h },
              );
              e.push(y);
              var _ = Object(r.c)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    t.showCoeffs,
                    'Change ' + i + ' Levels Visibility',
                  ),
                },
                { id: o + 'Levels', title: b },
              );
              e.push(_);
              var v = Object(r.c)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    t.coeffsAsPercents,
                    'Change ' + i + ' Coeffs As Percents Visibility',
                  ),
                },
                { id: o + 'Percentage', title: p },
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
          return p;
        });
      var o = i('mrSG'),
        n = i('wm7x'),
        r = i('HSjo'),
        l = i('Cn8r'),
        s = i('25b6'),
        c = i('turx'),
        d = i('Eyy1'),
        u = window.t('Trend Line'),
        a = window.t('Use one color'),
        h = window.t('Background'),
        b = window.t('Levels'),
        p = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = [],
                t = this._source.properties().childs(),
                i = this._source.name(),
                o = Object(s.c)(i),
                l = t.trendline.childs(),
                p = Object(n.a)(
                  this._undoModel,
                  {
                    showLine: l.visible,
                    lineColor: l.color,
                    lineWidth: l.linewidth,
                  },
                  i,
                  'TrendLine',
                  { line: u },
                );
              e.push(p);
              for (var w = this._source.levelsCount(), f = 1; f <= w; f++) {
                var g = t['level' + f].childs(),
                  j = Object(r.g)(
                    {
                      checked: Object(r.b)(
                        this._undoModel,
                        g.visible,
                        'Change ' + i + ' Level ' + f + ' Line Visibility',
                      ),
                      color: Object(r.u)(
                        this._undoModel,
                        g.color,
                        null,
                        'Change ' + i + ' Level ' + f + ' Line Color',
                      ),
                      width: Object(r.b)(
                        this._undoModel,
                        g.linewidth,
                        'Change ' + i + ' Level ' + f + ' Line Width',
                      ),
                      level: Object(r.b)(
                        this._undoModel,
                        g.coeff,
                        'Change ' + i + ' Level ' + f + ' Coeff',
                      ),
                    },
                    { id: o + 'LineLevel' + f },
                  );
                e.push(j);
              }
              var O = Object(r.e)(
                {
                  color: Object(r.u)(
                    this._undoModel,
                    new c.CollectibleColorPropertyUndoWrapper(
                      Object(d.ensureNotNull)(
                        this._source.lineColorsProperty(),
                      ),
                      this._undoModel,
                      '',
                    ),
                    null,
                    'Change ' + i + ' All Lines Color',
                    !0,
                  ),
                },
                { id: o + 'AllLineColor', title: a },
              );
              e.push(O);
              var C = Object(r.q)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    t.fillBackground,
                    'Change ' + i + ' Background Visibility',
                  ),
                  transparency: Object(r.b)(
                    this._undoModel,
                    t.transparency,
                    'Change ' + i + ' Background Transparency',
                  ),
                },
                { id: o + 'Background', title: h },
              );
              e.push(C);
              var y = Object(r.c)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    t.showCoeffs,
                    'Change ' + i + ' Levels Visibility',
                  ),
                },
                { id: o + 'Levels', title: b },
              );
              return e.push(y), e;
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
      var o = i('mrSG'),
        n = i('DSp8'),
        r = i('Cn8r'),
        l = i('HSjo'),
        s = i('25b6'),
        c = window.t('Label'),
        d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
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
                Object(n.a)(
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
        return O;
      });
      var o = i('mrSG'),
        n = i('wm7x'),
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
        j = window.t('Always Show Stats');
      function O(e, t, i, l) {
        var c = Object(d.c)(i),
          O = [],
          C = t,
          y = Object(n.a)(
            e,
            Object(o.a)(Object(o.a)({}, C), {
              lineColor: t.linecolor,
              lineWidth: t.linewidth,
              lineStyle: t.linestyle,
            }),
            c,
            'Line',
          );
        O.push(y);
        var _ = Object(r.c)(
          {
            checked: Object(r.b)(
              e,
              t.showMiddlePoint,
              'Change ' + i + ' Show Middle Point',
            ),
          },
          { id: c + 'MiddlePoint', title: (l && l.middlePoint) || a },
        );
        O.push(_);
        var v = Object(r.c)(
          {
            checked: Object(r.b)(
              e,
              t.showPriceRange,
              'Change ' + i + ' Show Price Range',
            ),
          },
          { id: c + 'PriceRange', title: (l && l.priceRange) || b },
        );
        O.push(v);
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
        if ((O.push(L), 'showDateTimeRange' in t)) {
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
          O.push(M);
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
          O.push(k);
        }
        if ('showAngle' in t) {
          var m = Object(r.c)(
            {
              checked: Object(r.b)(
                e,
                t.showAngle,
                'Change ' + i + ' Show Angle',
              ),
            },
            { id: c + 'Angle', title: (l && l.angle) || g },
          );
          O.push(m);
        }
        var S = Object(r.c)(
          {
            checked: Object(r.b)(
              e,
              t.alwaysShowStats,
              'Change ' + i + ' Always Show Stats',
            ),
          },
          { id: c + 'ShowStats', title: (l && l.showStats) || j },
        );
        O.push(S);
        var x = Object(r.j)(
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
        return O.push(x), O;
      }
    },
    '8ioM': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'BarsPatternDefinitionsViewModel', function () {
          return f;
        });
      var o = i('mrSG'),
        n = i('Cn8r'),
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
            Object(o.c)(t, e),
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
        })(n.a);
    },
    '91EF': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'PolylinesDefinitionsViewModel', function () {
          return u;
        });
      var o = i('mrSG'),
        n = i('wm7x'),
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
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(n.a)(
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
          return h;
        });
      var o = i('mrSG'),
        n = i('Eyy1'),
        r = i('HSjo'),
        l = i('Cn8r'),
        s = i('25b6'),
        c = i('turx'),
        d = window.t('Use one color'),
        u = window.t('Background'),
        a = window.t('Labels'),
        h = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              for (
                var e = [],
                  t = this._source.properties().childs(),
                  i = this._source.name(),
                  o = Object(s.c)(i),
                  l = this._source.levelsCount(),
                  h = 1;
                h <= l;
                h++
              ) {
                var b = t['level' + h].childs(),
                  p = Object(r.g)(
                    {
                      checked: Object(r.b)(
                        this._undoModel,
                        b.visible,
                        'Change ' + i + ' Level ' + h + ' Line Visibility',
                      ),
                      color: Object(r.u)(
                        this._undoModel,
                        b.color,
                        null,
                        'Change ' + i + ' Level ' + h + ' Line Color',
                      ),
                      width: Object(r.b)(
                        this._undoModel,
                        b.linewidth,
                        'Change ' + i + ' Level ' + h + ' Line Width',
                      ),
                      style: Object(r.b)(
                        this._undoModel,
                        b.linestyle,
                        'Change ' + i + ' Level ' + h + ' Line Style',
                      ),
                    },
                    {
                      id: o + 'LineLevel' + h,
                      title: b.coeff1.value() + '/' + b.coeff2.value(),
                    },
                  );
                e.push(p);
              }
              var w = Object(r.e)(
                {
                  color: Object(r.u)(
                    this._undoModel,
                    new c.CollectibleColorPropertyUndoWrapper(
                      Object(n.ensureNotNull)(
                        this._source.lineColorsProperty(),
                      ),
                      this._undoModel,
                      '',
                    ),
                    null,
                    'Change ' + i + ' All Lines Color',
                  ),
                },
                { id: o + 'AllLineColor', title: d },
              );
              e.push(w);
              var f = Object(r.q)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    t.fillBackground,
                    'Change ' + i + ' Background Visibility',
                  ),
                  transparency: Object(r.b)(
                    this._undoModel,
                    t.transparency,
                    'Change ' + i + ' Background Transparency',
                  ),
                },
                { id: o + 'Background', title: u },
              );
              e.push(f);
              var g = Object(r.c)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    t.showLabels,
                    'Change ' + i + ' Labels Visibility',
                  ),
                },
                {
                  id: o + 'Labels',
                  title: a,
                },
              );
              return e.push(g), e;
            }),
            t
          );
        })(l.a);
    },
    Ax76: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'GeneralDatePriceRangeDefinitionsViewModel', function () {
          return j;
        });
      var o = i('mrSG'),
        n = i('wm7x'),
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
      var j = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(o.c)(t, e),
          (t.prototype._stylePropertyDefinitions = function () {
            var e = [],
              t = this._source.properties().childs(),
              i = this._source.name(),
              o = Object(c.c)(i),
              l = Object(n.a)(
                this._undoModel,
                { lineColor: t.linecolor, lineWidth: t.linewidth },
                i,
                'Line',
                { line: d },
              );
            if ((e.push(l), t.hasOwnProperty('borderWidth'))) {
              var j = Object(n.a)(
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
              e.push(j);
            }
            var O = Object(s.e)(
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
              { id: o + 'BackgroundColor', title: a },
            );
            if (
              (e.push(O),
              (function (e) {
                return e.hasOwnProperty('extendTop');
              })(t))
            ) {
              var C = Object(s.c)(
                  {
                    checked: Object(s.b)(
                      this._undoModel,
                      t.extendTop,
                      'Change ' + i + ' Extend top',
                    ),
                  },
                  { id: o + 'ExtendTop', title: h },
                ),
                y = Object(s.c)(
                  {
                    checked: Object(s.b)(
                      this._undoModel,
                      t.extendBottom,
                      'Change ' + i + ' Extend bottom',
                    ),
                  },
                  { id: o + 'ExtendBottom', title: b },
                );
              e.push(C, y);
            }
            if (
              (function (e) {
                return e.hasOwnProperty('extendLeft');
              })(t)
            ) {
              var _ = Object(s.c)(
                  {
                    checked: Object(s.b)(
                      this._undoModel,
                      t.extendLeft,
                      'Change ' + i + ' Extend left',
                    ),
                  },
                  { id: o + 'extendLeft', title: p },
                ),
                v = Object(s.c)(
                  {
                    checked: Object(s.b)(
                      this._undoModel,
                      t.extendRight,
                      'Change ' + i + ' Extend bottom',
                    ),
                  },
                  { id: o + 'ExtendBottom', title: w },
                );
              e.push(_, v);
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
      var o = i('mrSG'),
        n = i('wm7x'),
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
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(n.a)(
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
        return d;
      });
      var o = i('wm7x'),
        n = i('HSjo'),
        r = i('25b6'),
        l = window.t('Show Price'),
        s = window.t('Show Time'),
        c = window.t('Extend');
      function d(e, t, i) {
        var d = Object(r.c)(i),
          u = [],
          a = Object(o.a)(
            e,
            {
              lineColor: t.linecolor,
              lineWidth: t.linewidth,
              lineStyle: t.linestyle,
            },
            d,
            'Line',
          );
        if ((u.push(a), 'showPrice' in t)) {
          var h = Object(n.c)(
            {
              checked: Object(n.b)(
                e,
                t.showPrice,
                'Change ' + i + ' Price Label Visibility',
              ),
            },
            { id: d + 'ShowPrice', title: l },
          );
          u.push(h);
        }
        if ('extendLine' in t) {
          var b = Object(n.c)(
            {
              checked: Object(n.b)(
                e,
                t.extendLine,
                'Change ' + i + ' Extension',
              ),
            },
            { id: d + 'ExtendLine', title: c },
          );
          u.push(b);
        }
        if ('showTime' in t) {
          var p = Object(n.c)(
            {
              checked: Object(n.b)(
                e,
                t.showTime,
                'Change ' + i + ' Time Label Visibility',
              ),
            },
            { id: d + 'ShowTime', title: s },
          );
          u.push(p);
        }
        return u;
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
      var o = i('mrSG'),
        n = i('HSjo'),
        r = i('hY0g'),
        l = i.n(r),
        s = i('25b6'),
        c = window.t('Price'),
        d = window.t('Bar#');
      function u(e, t, i) {
        return {
          property: Object(n.b)(e, t.price, 'Change ' + c + ' Y coordinate'),
          info: { typeY: 1, stepY: i },
        };
      }
      function a(e, t) {
        return {
          property: Object(n.b)(e, t.bar, 'Change ' + d + ' X coordinate'),
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
        return Object(n.f)(
          { x: d.property, y: h.property },
          Object(o.a)(
            Object(o.a)(
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
      var o = i('Eyy1'),
        n = i('HSjo'),
        r = i('1yQO'),
        l = i('hY0g'),
        s = i.n(l),
        c = i('Kxc7'),
        d = window.t('Ticks'),
        u = window.t('Seconds'),
        a = window.t('Minutes'),
        h = window.t('Hours'),
        b = window.t('Days'),
        p = window.t('Weeks'),
        w = window.t('Months'),
        f = (window.t('Ranges'), [1, 59]),
        g = [1, 59],
        j = [1, 24],
        O = [1, 366];
      var C = i('CA9d');
      i.d(t, 'a', function () {
        return k;
      });
      var y = window.t('Visibility'),
        _ = window.t('Coordinates'),
        v = window.t('Style'),
        L = window.t('Text'),
        M = window.t('Inputs');
      var k = (function () {
        function e(e, t) {
          (this._yCoordinateStepWV = null),
            (this._propertyPages = []),
            (this._source = t),
            (this._undoModel = e),
            (this._ownerSource = Object(o.ensureNotNull)(
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
                Object(n.t)(e.definitions.value());
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
              var o = this._createCoordinatesPropertyPage();
              null !== o && this._propertyPages.push(o);
            }
            var n = this._createVisibilitiesPropertyPage();
            this._propertyPages.push(n);
          }),
          (e.prototype._createVisibilitiesPropertyPage = function () {
            var e = this._source
              .properties()
              .childs()
              .intervalsVisibilities.childs();
            return Object(r.a)(
              (function (e, t) {
                var i = [];
                if (c.enabled('tick_resolution')) {
                  var o = Object(n.c)(
                    {
                      checked: Object(n.b)(
                        e,
                        t.ticks,
                        'Change Line Tool Visibility On Ticks',
                      ),
                    },
                    { id: 'IntervalsVisibilitiesTicks', title: d },
                  );
                  i.push(o);
                }
                if (c.enabled('seconds_resolution')) {
                  var r = Object(n.m)(
                    {
                      checked: Object(n.b)(
                        e,
                        t.seconds,
                        'Change Line Tool Visibility On Seconds',
                      ),
                      from: Object(n.b)(
                        e,
                        t.secondsFrom,
                        'Change Line Tool Seconds From',
                      ),
                      to: Object(n.b)(
                        e,
                        t.secondsTo,
                        'Change Line Tool Seconds To',
                      ),
                    },
                    {
                      id: 'IntervalsVisibilitiesSecond',
                      title: u,
                      min: new s.a(f[0]),
                      max: new s.a(f[1]),
                    },
                  );
                  i.push(r);
                }
                var l = Object(n.m)(
                    {
                      checked: Object(n.b)(
                        e,
                        t.minutes,
                        'Change Line Tool Visibility On Minutes',
                      ),
                      from: Object(n.b)(
                        e,
                        t.minutesFrom,
                        'Change Line Tool Minutes From',
                      ),
                      to: Object(n.b)(
                        e,
                        t.minutesTo,
                        'Change Line Tool Minutes To',
                      ),
                    },
                    {
                      id: 'IntervalsVisibilitiesMinutes',
                      title: a,
                      min: new s.a(g[0]),
                      max: new s.a(g[1]),
                    },
                  ),
                  C = Object(n.m)(
                    {
                      checked: Object(n.b)(
                        e,
                        t.hours,
                        'Change Line Tool Visibility On Hours',
                      ),
                      from: Object(n.b)(
                        e,
                        t.hoursFrom,
                        'Change Line Tool Hours From',
                      ),
                      to: Object(n.b)(
                        e,
                        t.hoursTo,
                        'Change Line Tool Hours To',
                      ),
                    },
                    {
                      id: 'IntervalsVisibilitiesHours',
                      title: h,
                      min: new s.a(j[0]),
                      max: new s.a(j[1]),
                    },
                  ),
                  y = Object(n.m)(
                    {
                      checked: Object(n.b)(
                        e,
                        t.days,
                        'Change Line Tool Visibility On Days',
                      ),
                      from: Object(n.b)(
                        e,
                        t.daysFrom,
                        'Change Line Tool Days From',
                      ),
                      to: Object(n.b)(e, t.daysTo, 'Change Line Tool Days To'),
                    },
                    {
                      id: 'IntervalsVisibilitiesDays',
                      title: b,
                      min: new s.a(O[0]),
                      max: new s.a(O[1]),
                    },
                  );
                i.push(l, C, y);
                var _ = Object(n.c)(
                    {
                      checked: Object(n.b)(
                        e,
                        t.weeks,
                        'Change Line Tool Visibility On Weeks',
                      ),
                    },
                    { id: 'IntervalsVisibilitiesWeeks', title: p },
                  ),
                  v = Object(n.c)(
                    {
                      checked: Object(n.b)(
                        e,
                        t.months,
                        'Change Line Tool Visibility On Months',
                      ),
                    },
                    { id: 'IntervalsVisibilitiesMonths', title: w },
                  );
                return i.push(_, v), i;
              })(this._undoModel, e),
              'visibility',
              y,
            );
          }),
          (e.prototype._createCoordinatesPropertyPage = function () {
            var e = this._coordinatesPropertyDefinitions();
            return null !== e ? Object(r.a)(e, 'coordinates', _) : null;
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
                    (e._ownerSource = Object(o.ensureNotNull)(
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
              o = [],
              n = this._getYCoordinateStepWV();
            return (
              t.forEach(function (t, r) {
                var l = i[r].childs();
                l &&
                  o.push(
                    Object(C.c)(
                      e._undoModel,
                      l,
                      t,
                      n,
                      window
                        .t('#{0} (price, bar)', { context: 'linetool point' })
                        .format(r + 1),
                      e._source.name(),
                    ),
                  );
              }),
              o
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
            return null !== e ? Object(r.a)(e, 'text', L) : null;
          }),
          (e.prototype._textPropertyDefinitions = function () {
            return null;
          }),
          (e.prototype._createInputsPropertyPage = function () {
            var e = this._inputsPropertyDefinitions();
            return null !== e ? Object(r.a)(e, 'inputs', M) : null;
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
          return p;
        });
      var o = i('mrSG'),
        n = i('Eyy1'),
        r = i('wm7x'),
        l = i('Cn8r'),
        s = i('HSjo'),
        c = i('25b6'),
        d = i('turx'),
        u = window.t('Median'),
        a = window.t('Use one color'),
        h = window.t('Background'),
        b = window.t('Extend Lines'),
        p = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = [],
                t = this._source.properties(),
                i = t.childs(),
                o = this._source.name(),
                l = Object(c.c)(o);
              t.hasChild('extendLines') &&
                e.push(
                  Object(s.c)(
                    {
                      checked: Object(s.b)(
                        this._undoModel,
                        i.extendLines,
                        'Toggle ' + o + ' Extend Lines',
                      ),
                    },
                    { id: l + 'ExtendLines', title: b },
                  ),
                );
              var p = i.median.childs(),
                w = Object(r.a)(
                  this._undoModel,
                  {
                    lineColor: p.color,
                    lineStyle: p.linestyle,
                    lineWidth: p.linewidth,
                  },
                  o,
                  'Median',
                  { line: u },
                );
              e.push(w);
              for (var f = this._source.levelsCount(), g = 0; g <= f; g++) {
                var j = i['level' + g].childs(),
                  O = Object(s.g)(
                    {
                      checked: Object(s.b)(
                        this._undoModel,
                        j.visible,
                        'Change ' +
                          o +
                          ' Level ' +
                          (g + 1) +
                          ' Line Visibility',
                      ),
                      color: Object(s.u)(
                        this._undoModel,
                        j.color,
                        null,
                        'Change ' + o + ' Level ' + (g + 1) + ' Line Color',
                      ),
                      width: Object(s.b)(
                        this._undoModel,
                        j.linewidth,
                        'Change ' + o + ' Level ' + (g + 1) + ' Line Width',
                      ),
                      style: Object(s.b)(
                        this._undoModel,
                        j.linestyle,
                        'Change ' + o + ' Level ' + (g + 1) + ' Line Style',
                      ),
                      level: Object(s.b)(
                        this._undoModel,
                        j.coeff,
                        'Change ' + o + ' Level ' + (g + 1) + ' Line Coeff',
                      ),
                    },
                    { id: l + 'LineLevel' + (g + 1) },
                  );
                e.push(O);
              }
              var C = Object(s.e)(
                {
                  color: Object(s.u)(
                    this._undoModel,
                    new d.CollectibleColorPropertyUndoWrapper(
                      Object(n.ensureNotNull)(
                        this._source.lineColorsProperty(),
                      ),
                      this._undoModel,
                      '',
                    ),
                    null,
                    'Change ' + o + ' All Lines Color',
                    !0,
                  ),
                },
                { id: l + 'AllLineColor', title: a },
              );
              e.push(C);
              var y = Object(s.q)(
                {
                  checked: Object(s.b)(
                    this._undoModel,
                    i.fillBackground,
                    'Change ' + o + ' Background Visibility',
                  ),
                  transparency: Object(s.b)(
                    this._undoModel,
                    i.transparency,
                    'Change ' + o + ' Background Transparency',
                  ),
                },
                { id: l + 'Background', title: h },
              );
              return e.push(y), e;
            }),
            t
          );
        })(l.a);
    },
    DSp8: function (e, t, i) {
      'use strict';
      i.d(t, 'a', function () {
        return c;
      });
      var o = i('HSjo'),
        n = i('25b6'),
        r = window.t('Background'),
        l = window.t('Border'),
        s = window.t('Text Wrap');
      function c(e, t, i, c) {
        var d = {},
          u = {
            id: Object(n.c)(i) + 'Text',
            title: (c.customTitles && c.customTitles.text) || '',
          };
        if (
          (void 0 !== t.showText &&
            (d.checked = Object(o.b)(
              e,
              t.showText,
              'Change ' + i + ' Text Visibility',
            )),
          void 0 !== t.textColor &&
            (d.color = Object(o.u)(
              e,
              t.textColor,
              t.transparency || null,
              'Change ' + i + ' Text Color',
            )),
          void 0 !== t.fontSize &&
            (d.size = Object(o.b)(
              e,
              t.fontSize,
              'Change ' + i + ' Text Font Size',
            )),
          void 0 !== t.bold &&
            (d.bold = Object(o.b)(
              e,
              t.bold,
              'Change ' + i + ' Text Font Bold',
            )),
          void 0 !== t.italic &&
            (d.italic = Object(o.b)(
              e,
              t.italic,
              'Change ' + i + ' Text Font Italic',
            )),
          void 0 !== t.text &&
            ((d.text = Object(o.b)(e, t.text, 'Change ' + i + ' Text')),
            (u.isEditable = Boolean(c.isEditable)),
            (u.isMultiLine = Boolean(c.isMultiLine))),
          void 0 !== t.vertLabelsAlign &&
            ((d.alignmentVertical = Object(o.b)(
              e,
              t.vertLabelsAlign,
              'Change ' + i + ' Labels Alignment Vertical',
            )),
            (u.alignmentVerticalItems = c.alignmentVerticalItems)),
          void 0 !== t.horzLabelsAlign &&
            ((d.alignmentHorizontal = Object(o.b)(
              e,
              t.horzLabelsAlign,
              'Change ' + i + ' Labels Alignment Horizontal',
            )),
            (u.alignmentHorizontalItems = c.alignmentHorizontalItems)),
          void 0 !== t.textOrientation &&
            (d.orientation = Object(o.b)(
              e,
              t.textOrientation,
              'Change ' + i + ' Labels Direction',
            )),
          void 0 !== t.backgroundVisible &&
            (d.backgroundVisible = Object(o.b)(
              e,
              t.backgroundVisible,
              'Change ' + i + ' Text Background Visibility',
            )),
          void 0 !== t.backgroundColor)
        ) {
          var a = null;
          void 0 !== t.backgroundTransparency && (a = t.backgroundTransparency),
            (d.backgroundColor = Object(o.u)(
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
            (d.borderVisible = Object(o.b)(
              e,
              t.borderVisible,
              'Change ' + i + ' Text Border Visibility',
            )),
          void 0 !== t.borderWidth &&
            (d.borderWidth = Object(o.b)(
              e,
              t.borderWidth,
              'Change ' + i + ' Text Border Width',
            )),
          void 0 !== t.borderColor &&
            (d.borderColor = Object(o.u)(
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
            ((d.wrap = Object(o.b)(e, t.wrap, 'Change ' + i + ' Text Wrap')),
            (u.wrapTitle = (c.customTitles && c.customTitles.wrapTitle) || s)),
          Object(o.p)(d, u)
        );
      }
    },
    FkpW: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'VerticalLineDefinitionsViewModel', function () {
          return a;
        });
      var o = i('mrSG'),
        n = i('HSjo'),
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
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return Object(l.a)(this._undoModel, e, this._source.name());
            }),
            (t.prototype._coordinatesPropertyDefinitions = function () {
              var e = this._source.pointsProperty().childs().points[0].childs(),
                t = Object(r.a)(this._undoModel, e);
              return [
                Object(n.f)(
                  { x: t.property },
                  Object(o.a)(
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
                  Object(o.a)(Object(o.a)({}, e), {
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
      var o = i('mrSG'),
        n = i('HSjo'),
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
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(n.e)(
                  {
                    color: Object(n.u)(
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
      var o = i('mrSG'),
        n = i('HSjo'),
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
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var t = e.prototype._stylePropertyDefinitions.call(this),
                i = this._source.properties().childs(),
                o = this._source.name(),
                r = Object(n.j)(
                  {
                    option: Object(n.b)(
                      this._undoModel,
                      i.style,
                      'Change ' + o + ' Style',
                    ),
                  },
                  { id: o + 'PitchStyle', title: d, options: new c.a(u) },
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
      var o = i('mrSG'),
        n = i('YFKU'),
        r = i('HSjo'),
        l = i('Zd1D'),
        s = i('DSp8'),
        c = Object(n.t)('Text'),
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
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var t = this._source.properties().childs(),
                i = this._source.name(),
                o = e.prototype._stylePropertyDefinitions.call(this),
                n = Object(r.c)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      t.extendRight,
                      'Change ' + i + ' Extending Right',
                    ),
                  },
                  { id: i + 'ExtendRight', title: u },
                );
              o.push(n);
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
              return o.push(l), o;
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
      var o = i('mrSG'),
        n = i('wm7x'),
        r = i('Cn8r'),
        l = window.t('Lines'),
        s = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return [
                Object(n.a)(
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
      var o = i('mrSG'),
        n = i('wm7x'),
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
            Object(o.c)(t, e),
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
                Object(n.a)(
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
      var o = i('mrSG'),
        n = i('HSjo'),
        r = i('xrdl'),
        l = i('CA9d'),
        s = i('25b6'),
        c = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._coordinatesPropertyDefinitions = function () {
              var e = this._source.pointsProperty().childs().points[0].childs(),
                t = this._getYCoordinateStepWV(),
                i = Object(l.b)(this._undoModel, e, t);
              return [
                Object(n.f)(
                  { y: i.property },
                  Object(o.a)(
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
          return j;
        });
      var o = i('mrSG'),
        n = i('wm7x'),
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
        j = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name(),
                i = Object(s.c)(t);
              return [
                Object(n.a)(
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
                  {
                    id: i + 'SourceBackgroundColor',
                    title: d,
                  },
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
      var o = i('mrSG'),
        n = i('DSp8'),
        r = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._textPropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return [
                Object(n.a)(
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
          return S;
        });
      var o = i('mrSG'),
        n = i('wm7x'),
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
        j = window.t('Entry price'),
        O = window.t('Profit level'),
        C = window.t('Stop level'),
        y = window.t('Account size'),
        _ = window.t('Risk'),
        v = window.t('Always show stats'),
        L = window.t('Show price labels'),
        M = window.t('%'),
        k = window.t('Cash');
      function m(e) {
        return [
          { value: 'percents', title: M },
          { value: 'money', title: e || k },
        ];
      }
      var S = (function (e) {
        function t(t, i) {
          var o = e.call(this, t, i) || this,
            n = o._source.properties().childs(),
            r = n.riskDisplayMode.value();
          return (
            (o._riskMaxWV = new d.a(o._getRiskMax(r))),
            (o._riskStepWV = new d.a(o._getRiskStep(r))),
            (o._riskPrecisionWV = new d.a(o._getRiskPrecision(r))),
            (o._riskUnitWV = new d.a(o._getRiskUnit())),
            (o._riskUnitOptionsWV = new d.a(o._getRiskUnitOptions())),
            o._createPropertyRages(),
            n.riskDisplayMode.subscribe(o, function (e) {
              return o._onRiskDisplayChanged(e);
            }),
            n.accountSize.subscribe(o, function () {
              return o._onAccountSizeChanged();
            }),
            o._undoModel
              .model()
              .mainSeries()
              .dataEvents()
              .symbolResolved()
              .subscribe(o, o._onSymbolInfoChanged),
            o
          );
        }
        return (
          Object(o.c)(t, e),
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
              Object(n.a)(
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
                { id: i + 'AlwaysShowStats', title: v },
              ),
            ];
          }),
          (t.prototype._inputsPropertyDefinitions = function () {
            var e = this,
              t = this._source.properties().childs(),
              i = this._source.name(),
              o = Object(u.c)(i),
              n = this._getYCoordinateStepWV(),
              r = Object(s.i)(
                {
                  value: Object(s.b)(
                    this._undoModel,
                    t.accountSize,
                    'Change ' + i + ' Account Size',
                  ),
                },
                {
                  id: o + 'AccountSize',
                  title: y,
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
                  id: o + 'Risk',
                  title: _,
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
                { id: o + 'EntryPrice', title: j, type: 1, step: n },
              ),
              a = Object(s.k)([r, l, c], o + 'AccountRisk'),
              h = Object(s.i)(
                {
                  value: Object(s.b)(
                    this._undoModel,
                    t.profitLevel,
                    'Change ' + i + ' profit level',
                  ),
                },
                {
                  id: o + 'ProfitLevelTicks',
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
                { id: o + 'ProfitLevelPrice', title: g, type: 1, step: n },
              ),
              p = Object(s.k)([h, b], o + 'ProfitLevel', O),
              w = Object(s.i)(
                {
                  value: Object(s.b)(
                    this._undoModel,
                    t.stopLevel,
                    'Change ' + i + ' stop level',
                  ),
                },
                {
                  id: o + 'StopLevelTicks',
                  title: f,
                  type: 0,
                  min: new d.a(0),
                  max: new d.a(1e9),
                  step: new d.a(1),
                },
              ),
              v = Object(s.i)(
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
                { id: o + 'StopLevelPrice', title: g, type: 1, step: n },
              );
            return [a, p, Object(s.k)([w, v], o + 'StopLevel', C)];
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
            return null !== e ? m(e.currency_code) : m();
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
      var o = i('mrSG'),
        n = i('DSp8'),
        r = i('Cn8r'),
        l = window.t('Text'),
        s = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._textPropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return [
                Object(n.a)(
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
          return p;
        }),
        i.d(t, 'availableAlignmentHorizontalItems', function () {
          return w;
        }),
        i.d(t, 'FibTimezoneDefinitionsViewModel', function () {
          return f;
        });
      var o = i('mrSG'),
        n = i('HSjo'),
        r = i('Cn8r'),
        l = i('hY0g'),
        s = i.n(l),
        c = i('25b6'),
        d = i('turx'),
        u = i('Eyy1'),
        a = window.t('Use one color'),
        h = window.t('Background'),
        b = window.t('Labels'),
        p = [
          { value: 'top', title: window.t('Top') },
          { value: 'middle', title: window.t('Middle') },
          { value: 'bottom', title: window.t('Bottom') },
        ],
        w = [
          { value: 'left', title: window.t('Left') },
          { value: 'center', title: window.t('Center') },
          { value: 'right', title: window.t('Right') },
        ],
        f = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              for (
                var e = [],
                  t = this._source.properties().childs(),
                  i = this._source.name(),
                  o = Object(c.c)(i),
                  r = this._source.levelsCount(),
                  l = 1;
                l <= r;
                l++
              ) {
                var f = t['level' + l].childs(),
                  g = Object(n.g)(
                    {
                      checked: Object(n.b)(
                        this._undoModel,
                        f.visible,
                        'Change ' + i + ' Level ' + l + ' Line Visibility',
                      ),
                      color: Object(n.u)(
                        this._undoModel,
                        f.color,
                        null,
                        'Change ' + i + ' Level ' + l + ' Line Color',
                      ),
                      width: Object(n.b)(
                        this._undoModel,
                        f.linewidth,
                        'Change ' + i + ' Level ' + l + ' Line Width',
                      ),
                      style: Object(n.b)(
                        this._undoModel,
                        f.linestyle,
                        'Change ' + i + ' Level ' + l + ' Line Style',
                      ),
                      level: Object(n.b)(
                        this._undoModel,
                        f.coeff,
                        'Change ' + i + ' Level ' + l + ' Coeff',
                      ),
                    },
                    { id: o + 'LineLevel' + l },
                  );
                e.push(g);
              }
              var j = Object(n.e)(
                {
                  color: Object(n.u)(
                    this._undoModel,
                    new d.CollectibleColorPropertyUndoWrapper(
                      Object(u.ensureNotNull)(
                        this._source.lineColorsProperty(),
                      ),
                      this._undoModel,
                      '',
                    ),
                    null,
                    'Change ' + i + ' All Lines Color',
                    !0,
                  ),
                },
                { id: o + 'AllLineColor', title: a },
              );
              e.push(j);
              var O = Object(n.q)(
                {
                  checked: Object(n.b)(
                    this._undoModel,
                    t.fillBackground,
                    'Change ' + i + ' Background Visibility',
                  ),
                  transparency: Object(n.b)(
                    this._undoModel,
                    t.transparency,
                    'Change ' + i + ' Background Transparency',
                  ),
                },
                { id: o + 'Background', title: h },
              );
              e.push(O);
              var C = Object(n.s)(
                {
                  checked: Object(n.b)(
                    this._undoModel,
                    t.showLabels,
                    'Change ' + i + ' Labels Visibility',
                  ),
                  option1: Object(n.b)(
                    this._undoModel,
                    t.horzLabelsAlign,
                    'Change ' + i + ' Labels Alignment',
                  ),
                  option2: Object(n.b)(
                    this._undoModel,
                    t.vertLabelsAlign,
                    'Change ' + i + ' Labels Alignment',
                  ),
                },
                {
                  id: o + 'Labels',
                  title: b,
                  optionsItems1: new s.a(w),
                  optionsItems2: new s.a(p),
                },
              );
              return e.push(C), e;
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
      var o = i('mrSG'),
        n = i('wm7x'),
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
            Object(o.c)(t, e),
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
                Object(n.a)(
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
      var o = i('mrSG'),
        n = i('HSjo'),
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
            Object(o.c)(t, e),
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
                Object(n.c)(
                  {
                    checked: Object(n.b)(
                      this._undoModel,
                      e.extendLeft,
                      'Change ' + t + ' Extending Left',
                    ),
                  },
                  { id: i + 'ExtendLeft', title: d },
                ),
                Object(n.c)(
                  {
                    checked: Object(n.b)(
                      this._undoModel,
                      e.extendRight,
                      'Change ' + t + ' Extending Right',
                    ),
                  },
                  {
                    id: i + 'ExtendRight',
                    title: u,
                  },
                ),
                Object(n.e)(
                  {
                    checked: Object(n.b)(
                      this._undoModel,
                      e.fillBackground,
                      'Change ' + t + ' background visibility',
                    ),
                    color: Object(n.u)(
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
      var o = i('mrSG'),
        n = i('wm7x'),
        r = i('Cn8r'),
        l = window.t('Line'),
        s = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(n.a)(
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
          return _;
        }),
        i.d(t, 'GannComplexAndFixedDefinitionsViewModel', function () {
          return v;
        });
      var o = i('mrSG'),
        n = i('DSp8'),
        r = i('HSjo'),
        l = i('Cn8r'),
        s = i('nd9+'),
        c = i('hY0g'),
        d = i.n(c),
        u = i('Z5lT'),
        a = i('25b6'),
        h = i('Eyy1'),
        b = i('turx'),
        p = window.t('Reverse'),
        w = window.t('Use one color'),
        f = window.t('Background'),
        g = window.t('Price/Bar Ratio'),
        j = window.t('Ranges and ratio'),
        O = window.t('Levels'),
        C = window.t('Fans'),
        y = window.t('Arcs');
      function _(e) {
        return e instanceof s.LineToolGannComplex;
      }
      var v = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(o.c)(t, e),
          (t.prototype._stylePropertyDefinitions = function () {
            for (
              var e = [],
                t = this._source.properties().childs(),
                i = this._source.name(),
                o = Object(a.c)(i),
                l = [],
                s = t.levels.childCount(),
                c = 0;
              c < s;
              c++
            ) {
              var v = t.levels.childs()[c].childs(),
                L = Object(r.g)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      v.visible,
                      'Change ' + i + ' Level ' + c + ' Line Visibility',
                    ),
                    color: Object(r.u)(
                      this._undoModel,
                      v.color,
                      null,
                      'Change ' + i + ' Level ' + c + ' Line Color',
                    ),
                    width: Object(r.b)(
                      this._undoModel,
                      v.width,
                      'Change ' + i + ' Level ' + c + ' Line Width',
                    ),
                  },
                  { id: o + 'LineLevel' + c, title: '' + c },
                );
              l.push(L);
            }
            var M = Object(r.l)(l, o + 'LeveledLinesGroup');
            e.push(Object(r.k)([M], o + 'LevelGroup', O));
            var k = [],
              m = t.fanlines.childCount();
            for (c = 0; c < m; c++) {
              var S = t.fanlines.childs()[c].childs(),
                x = Object(r.g)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      S.visible,
                      'Change ' + i + ' Fan ' + c + ' Line Visibility',
                    ),
                    color: Object(r.u)(
                      this._undoModel,
                      S.color,
                      null,
                      'Change ' + i + ' Fan ' + c + ' Line Color',
                    ),
                    width: Object(r.b)(
                      this._undoModel,
                      S.width,
                      'Change ' + i + ' Fan ' + c + ' Line Width',
                    ),
                  },
                  {
                    id: o + 'FanLineLevel' + c,
                    title: S.x.value() + 'x' + S.y.value(),
                  },
                );
              k.push(x);
            }
            var P = Object(r.l)(k, o + 'FanLeveledLinesGroup');
            e.push(Object(r.k)([P], o + 'FanLinesGroup', C));
            var T = [],
              V = t.arcs.childCount();
            for (c = 0; c < V; c++) {
              var B = t.arcs.childs()[c].childs(),
                D = Object(r.g)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      B.visible,
                      'Change ' + i + ' Arcs ' + c + ' Line Visibility',
                    ),
                    color: Object(r.u)(
                      this._undoModel,
                      B.color,
                      null,
                      'Change ' + i + ' Arcs ' + c + ' Line Color',
                    ),
                    width: Object(r.b)(
                      this._undoModel,
                      B.width,
                      'Change ' + i + ' Arcs ' + c + ' Line Width',
                    ),
                  },
                  {
                    id: o + 'ArcsLineLevel' + c,
                    title: B.x.value() + 'x' + B.y.value(),
                  },
                );
              T.push(D);
            }
            var W = Object(r.l)(T, o + 'ArcsLeveledLinesGroup');
            e.push(Object(r.k)([W], o + 'ArcsLinesGroup', y));
            var A = Object(r.e)(
              {
                color: Object(r.u)(
                  this._undoModel,
                  new b.CollectibleColorPropertyUndoWrapper(
                    Object(h.ensureNotNull)(this._source.lineColorsProperty()),
                    this._undoModel,
                    'Change ' + i + ' All Lines Color',
                  ),
                  null,
                  '',
                ),
              },
              { id: o + 'AllLineColor', title: w },
            );
            e.push(A);
            var R = t.arcsBackground.childs(),
              E = Object(r.q)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    R.fillBackground,
                    'Change ' + i + ' Background Visibility',
                  ),
                  transparency: Object(r.b)(
                    this._undoModel,
                    R.transparency,
                    'Change ' + i + ' Background Transparency',
                  ),
                },
                { id: o + 'Background', title: f },
              );
            e.push(E);
            var G = Object(r.c)(
              {
                checked: Object(r.b)(
                  this._undoModel,
                  t.reverse,
                  'Change ' + i + ' Reverse',
                ),
              },
              { id: o + 'Reverse', title: p },
            );
            if ((e.push(G), _(this._source))) {
              var H = this._source,
                z = H.properties().childs(),
                F = Object(r.i)(
                  {
                    value: Object(r.b)(
                      this._undoModel,
                      z.scaleRatio,
                      'Change Top Margin',
                      [
                        Object(u.c)(7),
                        function (e) {
                          return null !== e
                            ? parseFloat(
                                H.getScaleRatioFormatter().format('' + e),
                              )
                            : null;
                        },
                      ],
                    ),
                  },
                  {
                    id: 'scaleRatio',
                    title: g,
                    min: new d.a(1e-7),
                    max: new d.a(1e8),
                    step: new d.a(H.getScaleRatioStep()),
                  },
                );
              e.push(F);
              var U = z.labelsStyle.childs(),
                I = Object(n.a)(
                  this._undoModel,
                  {
                    showText: z.showLabels,
                    fontSize: U.fontSize,
                    bold: U.bold,
                    italic: U.italic,
                  },
                  i,
                  { customTitles: { text: j } },
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
      var o = i('mrSG'),
        n = i('Cn8r'),
        r = i('HSjo'),
        l = i('25b6'),
        s = window.t('Color'),
        c = (function (e) {
          function t(t, i) {
            return e.call(this, t, i) || this;
          }
          return (
            Object(o.c)(t, e),
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
        })(n.a);
    },
    Z5lT: function (e, t, i) {
      'use strict';
      i.d(t, 'b', function () {
        return n;
      }),
        i.d(t, 'a', function () {
          return r;
        }),
        i.d(t, 'c', function () {
          return l;
        });
      var o = i('T6Of');
      function n(e) {
        return Math.floor(e);
      }
      function r(e) {
        return parseInt(String(e));
      }
      function l(e) {
        var t = new o.LimitedPrecisionNumericFormatter(e);
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
      var o = i('mrSG'),
        n = i('wm7x'),
        r = i('Cn8r'),
        l = i('HSjo'),
        s = i('25b6'),
        c = window.t('Background'),
        d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(n.a)(
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
      var o = i('mrSG'),
        n = i('wm7x'),
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
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(n.a)(
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
          return Object(o.c)(t, e), t;
        })(u);
    },
    aMeN: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'PatternWithoutBackgroundDefinitionsViewModel', function () {
          return d;
        });
      var o = i('mrSG'),
        n = i('wm7x'),
        r = i('DSp8'),
        l = i('Cn8r'),
        s = window.t('Label'),
        c = window.t('Border'),
        d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
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
                Object(n.a)(
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
    auWl: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'TrendLineDefinitionsViewModel', function () {
          return c;
        });
      var o = i('mrSG'),
        n = i('Cn8r'),
        r = i('78yF'),
        l = i('DSp8'),
        s = window.t('Show text'),
        c = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return Object(r.a)(this._undoModel, e, this._source.name());
            }),
            (t.prototype._textPropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return [
                Object(l.a)(
                  this._undoModel,
                  Object(o.a)(Object(o.a)({}, e), {
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
        })(n.a);
    },
    b4fl: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'GeneralBezierDefinitionsViewModel', function () {
          return d;
        });
      var o = i('mrSG'),
        n = i('wm7x'),
        r = i('Cn8r'),
        l = i('HSjo'),
        s = i('25b6'),
        c = window.t('Background'),
        d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(n.a)(
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
      var o = i('mrSG'),
        n = i('xrdl'),
        r = i('CA9d'),
        l = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
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
        })(n.CrossLineDefinitionsViewModel);
    },
    ernH: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'PriceNoteDefinitionsViewModel', function () {
          return b;
        });
      var o = i('mrSG'),
        n = i('DSp8'),
        r = i('Cn8r'),
        l = i('HSjo'),
        s = i('25b6'),
        c = window.t('Label Text'),
        d = window.t('Show text'),
        u = window.t('Line Color'),
        a = window.t('Label Border'),
        h = window.t('Label Background'),
        b = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name(),
                i = Object(s.c)(t),
                o = Object(l.e)(
                  {
                    color: Object(l.u)(
                      this._undoModel,
                      e.lineColor,
                      null,
                      'Change ' + t + ' line color',
                    ),
                  },
                  { id: i + 'LineColor', title: u },
                );
              return [
                Object(n.a)(
                  this._undoModel,
                  {
                    textColor: e.priceLabelTextColor,
                    fontSize: e.priceLabelFontSize,
                    bold: e.priceLabelBold,
                    italic: e.priceLabelItalic,
                    backgroundColor: e.priceLabelBackgroundColor,
                    borderColor: e.priceLabelBorderColor,
                  },
                  this._source.name(),
                  {
                    isEditable: !1,
                    isMultiLine: !1,
                    customTitles: {
                      text: c,
                      borderTitle: a,
                      backgroundTitle: h,
                    },
                  },
                ),
                o,
              ];
            }),
            (t.prototype._textPropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return [
                Object(n.a)(
                  this._undoModel,
                  Object(o.a)(Object(o.a)({}, e), {
                    showText: e.showLabel,
                    textColor: e.textColor,
                    fontSize: e.fontSize,
                  }),
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
    'fIc+': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'GhostFeedDefinitionsViewModel', function () {
          return w;
        });
      var o = i('mrSG'),
        n = i('Cn8r'),
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
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name(),
                i = Object(c.c)(t),
                o = e.candleStyle.childs();
              return [
                Object(r.r)(
                  {
                    color1: Object(r.u)(
                      this._undoModel,
                      o.upColor,
                      null,
                      'Change ' + t + ' Candle Up Color',
                    ),
                    color2: Object(r.u)(
                      this._undoModel,
                      o.downColor,
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
                      o.drawBorder,
                      'Change ' + t + ' Candle Border Visibility',
                    ),
                    color1: Object(r.u)(
                      this._undoModel,
                      o.borderUpColor,
                      null,
                      'Change ' + t + ' Candle Border Up Color',
                    ),
                    color2: Object(r.u)(
                      this._undoModel,
                      o.borderDownColor,
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
                      o.drawWick,
                      'Change ' + t + ' Candle Wick Visibility',
                    ),
                    color: Object(r.u)(
                      this._undoModel,
                      o.wickColor,
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
        })(n.a);
    },
    hQgR: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'PriceLabelDefinitionsViewModel', function () {
          return s;
        });
      var o = i('mrSG'),
        n = i('DSp8'),
        r = i('Cn8r'),
        l = window.t('Text'),
        s = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return [
                Object(n.a)(
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
      var o = i('mrSG'),
        n = i('HSjo'),
        r = i('Cn8r'),
        l = i('25b6'),
        s = window.t('Line'),
        c = window.t('Counterclockwise'),
        d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name(),
                i = Object(l.c)(t);
              return [
                Object(n.h)(
                  {
                    color: Object(n.u)(
                      this._undoModel,
                      e.linecolor,
                      null,
                      'Change ' + t + ' Line Color',
                    ),
                    width: Object(n.b)(
                      this._undoModel,
                      e.linewidth,
                      'Change ' + t + ' Line Width',
                    ),
                    style: Object(n.b)(
                      this._undoModel,
                      e.linestyle,
                      'Change ' + t + ' Line Style',
                    ),
                  },
                  { id: i + 'Line', title: s },
                ),
                Object(n.c)(
                  {
                    checked: Object(n.b)(
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
      var o = i('mrSG'),
        n = i('HSjo'),
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
            Object(o.c)(t, e),
            (t.prototype._coordinatesPropertyDefinitions = function () {
              var e = this._source.points(),
                t = [],
                i = this._source.pointsProperty().childs().points[0].childs(),
                o = this._getYCoordinateStepWV();
              t.push(
                Object(c.c)(
                  this._undoModel,
                  i,
                  e[0],
                  o,
                  window.t('#1 (price, bar)', { context: 'linetool point' }),
                  this._source.name(),
                ),
              );
              var r = Object(n.i)(
                {
                  value: Object(n.b)(
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
          return w;
        });
      var o = i('mrSG'),
        n = i('Eyy1'),
        r = i('wm7x'),
        l = i('HSjo'),
        s = i('Cn8r'),
        c = i('25b6'),
        d = i('turx'),
        u = window.t('Trend Line'),
        a = window.t('Use one color'),
        h = window.t('Background'),
        b = window.t('Levels'),
        p = window.t('Full Circles'),
        w = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = [],
                t = this._source.properties().childs(),
                i = this._source.name(),
                o = Object(c.c)(i),
                s = t.trendline.childs(),
                w = Object(r.a)(
                  this._undoModel,
                  {
                    showLine: s.visible,
                    lineColor: s.color,
                    lineStyle: s.linestyle,
                    lineWidth: s.linewidth,
                  },
                  i,
                  'TrendLine',
                  { line: u },
                );
              e.push(w);
              for (var f = this._source.levelsCount(), g = 1; g <= f; g++) {
                var j = t['level' + g].childs(),
                  O = Object(l.g)(
                    {
                      checked: Object(l.b)(
                        this._undoModel,
                        j.visible,
                        'Change ' + i + ' Level ' + g + ' Line Visibility',
                      ),
                      color: Object(l.u)(
                        this._undoModel,
                        j.color,
                        null,
                        'Change ' + i + ' Level ' + g + ' Line Color',
                      ),
                      width: Object(l.b)(
                        this._undoModel,
                        j.linewidth,
                        'Change ' + i + ' Level ' + g + ' Line Width',
                      ),
                      level: Object(l.b)(
                        this._undoModel,
                        j.coeff,
                        'Change ' + i + ' Level ' + g + ' Coeff',
                      ),
                    },
                    { id: o + 'LineLevel' + g },
                  );
                e.push(O);
              }
              var C = Object(l.e)(
                {
                  color: Object(l.u)(
                    this._undoModel,
                    new d.CollectibleColorPropertyUndoWrapper(
                      Object(n.ensureNotNull)(
                        this._source.lineColorsProperty(),
                      ),
                      this._undoModel,
                      '',
                    ),
                    null,
                    'Change ' + i + ' All Lines Color',
                    !0,
                  ),
                },
                { id: o + 'AllLineColor', title: a },
              );
              e.push(C);
              var y = Object(l.q)(
                {
                  checked: Object(l.b)(
                    this._undoModel,
                    t.fillBackground,
                    'Change ' + i + ' Background Visibility',
                  ),
                  transparency: Object(l.b)(
                    this._undoModel,
                    t.transparency,
                    'Change ' + i + ' Background Transparency',
                  ),
                },
                { id: o + 'Background', title: h },
              );
              e.push(y);
              var _ = Object(l.c)(
                {
                  checked: Object(l.b)(
                    this._undoModel,
                    t.showCoeffs,
                    'Change ' + i + ' Levels Visibility',
                  ),
                },
                { id: o + 'Levels', title: b },
              );
              e.push(_);
              var v = Object(l.c)(
                {
                  checked: Object(l.b)(
                    this._undoModel,
                    t.fullCircles,
                    'Change ' + i + ' Full Circles Visibility',
                  ),
                },
                { id: o + 'FullCircles', title: p },
              );
              return e.push(v), e;
            }),
            t
          );
        })(s.a);
    },
    turx: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'CollectibleColorPropertyUndoWrapper', function () {
          return s;
        }),
        i.d(t, 'CollectibleColorPropertyDirectWrapper', function () {
          return c;
        });
      var o = i('mrSG'),
        n = i('Eyy1'),
        r = i('tc+8'),
        l = (function (e) {
          function t(t) {
            var i = e.call(this) || this;
            return (
              (i._listenersMappers = []),
              (i._isProcess = !1),
              (i._baseProperty = t),
              i
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.destroy = function () {
              this._baseProperty.destroy();
            }),
            (t.prototype.value = function () {
              var e = this._baseProperty.value();
              return 'mixed' === e ? '' : e;
            }),
            (t.prototype.visible = function () {
              return this._baseProperty.visible();
            }),
            (t.prototype.setValue = function (e) {
              var t = this;
              (this._isProcess = !0),
                this._baseProperty.setValue('' === e ? 'mixed' : e, void 0, {
                  applyValue: this._applyValue.bind(this),
                }),
                (this._isProcess = !1),
                this._listenersMappers.forEach(function (e) {
                  e.method.call(e.obj, t);
                });
            }),
            (t.prototype.subscribe = function (e, t) {
              var i = this,
                o = function (o) {
                  i._isProcess || t.call(e, i);
                },
                n = { obj: e, method: t, callback: o };
              this._listenersMappers.push(n),
                this._baseProperty.subscribe(e, o);
            }),
            (t.prototype.unsubscribe = function (e, t) {
              var i,
                o = Object(n.ensureDefined)(
                  null ===
                    (i = this._listenersMappers.find(function (i) {
                      return i.obj === e && i.method === t;
                    })) || void 0 === i
                    ? void 0
                    : i.callback,
                );
              this._baseProperty.unsubscribe(e, o);
            }),
            (t.prototype.unsubscribeAll = function (e) {
              this._baseProperty.unsubscribeAll(e);
            }),
            t
          );
        })(i.n(r).a),
        s = (function (e) {
          function t(t, i, o) {
            var n = e.call(this, t) || this;
            return (n._undoModel = i), (n._undoText = o), n;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._applyValue = function (e, t) {
              this._undoModel.setProperty(e, t, this._undoText);
            }),
            t
          );
        })(l),
        c = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._applyValue = function (e, t) {
              e.setValue(t);
            }),
            t
          );
        })(l);
    },
    u52p: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'TrendBasedFibTimeDefinitionsViewModel', function () {
          return g;
        });
      var o = i('mrSG'),
        n = i('wm7x'),
        r = i('HSjo'),
        l = i('Cn8r'),
        s = i('SMr9'),
        c = i('hY0g'),
        d = i.n(c),
        u = i('25b6'),
        a = i('Eyy1'),
        h = i('turx'),
        b = window.t('Trend Line'),
        p = window.t('Use one color'),
        w = window.t('Background'),
        f = window.t('Labels'),
        g = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = [],
                t = this._source.properties().childs(),
                i = this._source.name(),
                o = Object(u.c)(i),
                l = t.trendline.childs(),
                c = Object(n.a)(
                  this._undoModel,
                  {
                    showLine: l.visible,
                    lineColor: l.color,
                    lineStyle: l.linestyle,
                    lineWidth: l.linewidth,
                  },
                  i,
                  'TrendLine',
                  { line: b },
                );
              e.push(c);
              for (var g = this._source.levelsCount(), j = 1; j <= g; j++) {
                var O = t['level' + j].childs(),
                  C = Object(r.g)(
                    {
                      checked: Object(r.b)(
                        this._undoModel,
                        O.visible,
                        'Change ' + i + ' Level ' + j + ' Line Visibility',
                      ),
                      color: Object(r.u)(
                        this._undoModel,
                        O.color,
                        null,
                        'Change ' + i + ' Level ' + j + ' Line Color',
                      ),
                      width: Object(r.b)(
                        this._undoModel,
                        O.linewidth,
                        'Change ' + i + ' Level ' + j + ' Line Width',
                      ),
                      style: Object(r.b)(
                        this._undoModel,
                        O.linestyle,
                        'Change ' + i + ' Level ' + j + ' Line Style',
                      ),
                      level: Object(r.b)(
                        this._undoModel,
                        O.coeff,
                        'Change ' + i + ' Level ' + j + ' Coeff',
                      ),
                    },
                    { id: o + 'LineLevel' + j },
                  );
                e.push(C);
              }
              var y = Object(r.e)(
                {
                  color: Object(r.u)(
                    this._undoModel,
                    new h.CollectibleColorPropertyUndoWrapper(
                      Object(a.ensureNotNull)(
                        this._source.lineColorsProperty(),
                      ),
                      this._undoModel,
                      '',
                    ),
                    null,
                    'Change ' + i + ' All Lines Color',
                    !0,
                  ),
                },
                { id: o + 'AllLineColor', title: p },
              );
              e.push(y);
              var _ = Object(r.q)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    t.fillBackground,
                    'Change ' + i + ' Background Visibility',
                  ),
                  transparency: Object(r.b)(
                    this._undoModel,
                    t.transparency,
                    'Change ' + i + ' Background Transparency',
                  ),
                },
                { id: o + 'Background', title: w },
              );
              e.push(_);
              var v = Object(r.s)(
                {
                  checked: Object(r.b)(
                    this._undoModel,
                    t.showCoeffs,
                    'Change ' + i + ' Labels Visibility',
                  ),
                  option1: Object(r.b)(
                    this._undoModel,
                    t.horzLabelsAlign,
                    'Change ' + i + ' Labels Alignment',
                  ),
                  option2: Object(r.b)(
                    this._undoModel,
                    t.vertLabelsAlign,
                    'Change ' + i + ' Labels Alignment',
                  ),
                },
                {
                  id: o + 'Labels',
                  title: f,
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
      var o = i('mrSG'),
        n = i('wm7x'),
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
            Object(o.c)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(n.a)(
                  this._undoModel,
                  Object(o.a)(Object(o.a)({}, e), {
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
      var o = i('mrSG'),
        n = i('Cn8r'),
        r = i('HSjo'),
        l = window.t('Flag'),
        s = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
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
        })(n.a);
    },
    wm7x: function (e, t, i) {
      'use strict';
      i.d(t, 'a', function () {
        return c;
      });
      var o = i('HSjo'),
        n = i('25b6'),
        r = window.t('Line'),
        l = window.t('Extend left line'),
        s = window.t('Extend right line');
      function c(e, t, i, c, d) {
        var u = {},
          a = { id: '' + Object(n.c)(i) + c, title: (d && d.line) || r };
        return (
          void 0 !== t.showLine &&
            (u.checked = Object(o.b)(
              e,
              t.showLine,
              'Change ' + i + ' Visibility',
            )),
          void 0 !== t.lineWidth &&
            (u.width = Object(o.b)(e, t.lineWidth, 'Change ' + i + ' Width')),
          void 0 !== t.lineStyle &&
            (u.style = Object(o.b)(e, t.lineStyle, 'Change ' + i + ' Style')),
          void 0 !== t.lineColor &&
            (u.color = Object(o.u)(
              e,
              t.lineColor,
              null,
              'Change ' + i + ' Color',
            )),
          void 0 !== t.extendLeft &&
            ((u.extendLeft = Object(o.b)(
              e,
              t.extendLeft,
              'Change ' + i + ' Extending Left',
            )),
            (a.extendLeftTitle = (d && d.extendLeftTitle) || l)),
          void 0 !== t.leftEnd &&
            (u.leftEnd = Object(o.b)(
              e,
              t.leftEnd,
              'Change ' + i + ' Left End',
            )),
          void 0 !== t.extendRight &&
            ((u.extendRight = Object(o.b)(
              e,
              t.extendRight,
              'Change ' + i + ' Extending Right',
            )),
            (a.extendRightTitle = (d && d.extendRightTitle) || s)),
          void 0 !== t.rightEnd &&
            (u.rightEnd = Object(o.b)(
              e,
              t.rightEnd,
              'Change ' + i + ' Right End',
            )),
          Object(o.h)(u, a)
        );
      }
    },
    xhf0: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'CalloutDefinitionsViewModel', function () {
          return r;
        });
      var o = i('mrSG'),
        n = i('DSp8'),
        r = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._textPropertyDefinitions = function () {
              var e = this._source.properties().childs(),
                t = this._source.name();
              return [
                Object(n.a)(
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
      var o = i('mrSG'),
        n = i('Cn8r'),
        r = i('BDhr'),
        l = i('DSp8'),
        s = window.t('Show text'),
        c = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
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
                      Object(o.a)(Object(o.a)({}, e), {
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
        })(n.a);
    },
    zb1A: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'SignpostDefinitionsViewModel', function () {
          return b;
        });
      var o = i('mrSG'),
        n = i('YFKU'),
        r = i('25b6'),
        l = i('hY0g'),
        s = i.n(l),
        c = i('HSjo'),
        d = i('DSp8'),
        u = i('CA9d'),
        a = i('Cn8r'),
        h = Object(n.t)('#1 (vertical position %, bar)', {
          context: 'linetool point',
        }),
        b = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype._textPropertyDefinitions = function () {
              var e = this._source.properties().childs();
              return [
                Object(d.a)(
                  this._undoModel,
                  {
                    text: e.text,
                    fontSize: e.fontSize,
                    bold: e.bold,
                    italic: e.italic,
                  },
                  this._source.name(),
                  { isEditable: !0, isMultiLine: !0 },
                ),
              ];
            }),
            (t.prototype._coordinatesPropertyDefinitions = function () {
              var e = this._source.pointsProperty().childs().points[0].childs(),
                t = this._source.name(),
                i = Object(u.a)(this._undoModel, e),
                n = {
                  property: Object(c.b)(
                    this._undoModel,
                    e.price,
                    'Change Vertical position Y coordinate',
                  ),
                  info: {
                    typeY: 1,
                    stepY: new s.a(1),
                    minY: new s.a(-100),
                    maxY: new s.a(100),
                  },
                };
              return [
                Object(c.f)(
                  { x: i.property, y: n.property },
                  Object(o.a)(
                    Object(o.a)(
                      { id: Object(r.c)(t + 'Coordinates' + h), title: h },
                      i.info,
                    ),
                    n.info,
                  ),
                ),
              ];
            }),
            t
          );
        })(a.a);
    },
  },
]);
