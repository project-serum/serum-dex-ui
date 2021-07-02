(window.webpackJsonp = window.webpackJsonp || []).push([
  ['study-pane-views'],
  {
    '1sos': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'HorizLinePaneView', function () {
          return o;
        });
      var r = i('Eyy1'),
        a = i('VdBB'),
        n = i('Zy3/'),
        s = i('l4sv'),
        o = (function () {
          function e(e, t, i) {
            (this._data = []),
              (this._invalidated = !0),
              (this._provider = e),
              (this._model = t),
              (this._hitTestResult =
                void 0 !== i
                  ? new a.HitTestResult(a.HitTestResult.CUSTOM, i)
                  : new a.HitTestResult(a.HitTestResult.REGULAR));
          }
          return (
            (e.prototype.update = function () {
              this._invalidated = !0;
            }),
            (e.prototype.renderer = function () {
              this._invalidated &&
                (this._updateViewInternal(), (this._invalidated = !1));
              for (
                var e = new n.CompositeRenderer(), t = 0, i = this._data;
                t < i.length;
                t++
              ) {
                var r = i[t],
                  a = new s.HorizontalLineRenderer();
                a.setData(r), a.setHitTest(this._hitTestResult), e.append(a);
              }
              return e;
            }),
            (e.prototype._updateViewInternal = function () {
              var e = this;
              this._data = [];
              var t = this._provider.priceScale(),
                i = this._model.timeScale();
              if (t && !t.isEmpty() && !i.isEmpty()) {
                var a = this._provider.graphics().horizlines();
                if (0 !== a.size) {
                  var n = this._model.timeScale().visibleBarsStrictRange();
                  if (null !== n) {
                    var s = this._provider.firstValue();
                    if (null !== s) {
                      var o = n.firstBar(),
                        l = n.lastBar();
                      a.forEach(function (a, n) {
                        var u = e._provider.properties().graphics.horizlines[n];
                        u.visible.value() &&
                          a.forEach(function (a) {
                            var n = a.startIndex,
                              h = a.endIndex;
                            (!a.extendRight && Math.max(n, h) < o) ||
                              (!a.extendLeft && Math.min(n, h) > l) ||
                              e._data.push({
                                y: t.priceToCoordinate(
                                  Object(r.ensureDefined)(a.level),
                                  s,
                                ),
                                left: a.extendLeft
                                  ? void 0
                                  : i.indexToCoordinate(n),
                                right: a.extendRight
                                  ? void 0
                                  : i.indexToCoordinate(h),
                                color: u.color.value(),
                                linewidth: u.width.value(),
                                linestyle: u.style.value(),
                              });
                          });
                      });
                    }
                  }
                }
              }
            }),
            e
          );
        })();
    },
    Gj0v: function (e, t, i) {
      'use strict';
      i.r(t);
      var r = i('mrSG'),
        a = i('Eyy1'),
        n = i('VdBB'),
        s = i('Zy3/'),
        o = i('qgcf'),
        l = i('aO4+'),
        u = i('eJTA'),
        h = i('ikwP'),
        d = i('KG+6'),
        c = i('nEwK'),
        v = i('zDbI');
      function f(e, t) {
        return { min: Math.min(e, t), max: Math.max(e, t) };
      }
      function p(e) {
        return e.max - e.min;
      }
      var g = (function () {
        function e(e) {
          this._data = e;
        }
        return (
          (e.prototype.hitTest = function (e, t) {
            for (
              var i = this._data,
                r = function (r) {
                  if (
                    r.xRange.min >= e.x ||
                    e.x >= r.xRange.max ||
                    r.yRange.min >= e.y ||
                    e.y >= r.yRange.max
                  )
                    return 'continue';
                  var a = r.yRange.min,
                    s = 0;
                  r.bars.forEach(function (e) {
                    var t = e.subBarValues.reduce(function (e, t) {
                      return e + t;
                    });
                    s = Math.max(s, t);
                  });
                  for (
                    var o = p(r.xRange), l = 0, u = r.bars;
                    l < u.length;
                    l++
                  ) {
                    var h = u[l],
                      d = i.styles[h.styleId];
                    if (!d.visible) return { value: null };
                    var c = m(r.xRange, d, t.cssWidth),
                      v = c.xBasePoint,
                      g = c.sign,
                      _ = f(a, a + h.height);
                    a += h.height;
                    for (
                      var R = Math.max(
                          (d.percentWidth * o) / 100 - h.subBarValues.length,
                          0,
                        ),
                        y = 0;
                      y < h.subBarValues.length;
                      y++
                    ) {
                      var x = _.min,
                        b = _.max,
                        w =
                          0 === y
                            ? v
                            : v + g * ((R * h.subBarValues[y - 1]) / s),
                        T = w + g * ((R * h.subBarValues[y]) / s);
                      if (
                        ((e.x >= w && e.x <= T) || (e.x >= T && e.x <= w)) &&
                        e.y >= x &&
                        e.y <= b
                      )
                        return {
                          value: new n.HitTestResult(n.HitTestResult.REGULAR),
                        };
                    }
                  }
                },
                a = 0,
                s = i.histograms;
              a < s.length;
              a++
            ) {
              var o = r(s[a]);
              if ('object' == typeof o) return o.value;
            }
            return null;
          }),
          (e.prototype.draw = function (e, t) {
            var i = this._data;
            e.save(),
              i.histograms.forEach(function (r) {
                var a = [],
                  n = r.yRange.min,
                  s = 0,
                  o = 0;
                r.bars.forEach(function (e) {
                  var t = e.subBarValues.reduce(function (e, t) {
                    return e + t;
                  });
                  (s = Math.max(s, t)), (o += e.height);
                });
                var l,
                  h,
                  d = o / r.bars.length,
                  c =
                    ((l = d),
                    (h = t.pixelRatio),
                    Math.floor(l * h) >= 1 * h ? Math.floor(h) : 0),
                  v = p(r.xRange),
                  g = [];
                if (
                  (r.bars.forEach(function (o) {
                    var l = i.styles[o.styleId];
                    if (l.visible) {
                      if (l.showValues)
                        for (var u = 0; u < o.subBarValues.length; u++)
                          a[u] = (a[u] || 0) + o.subBarValues[u];
                      var h = m(r.xRange, l, t.cssWidth),
                        d = h.xBasePoint,
                        p = h.sign,
                        y = f(n, n + o.height);
                      if (
                        ((n += o.height), !(y.min > t.cssHeight || y.max < 0))
                      ) {
                        var x = Math.max(
                          (l.percentWidth * v) / 100 - o.subBarValues.length,
                          0,
                        );
                        for (u = 0; u < o.subBarValues.length; u++) {
                          var b = y.min,
                            w = y.max,
                            T =
                              0 === u
                                ? d
                                : d + p * ((x * o.subBarValues[u - 1]) / s),
                            B = T + p * ((x * o.subBarValues[u]) / s);
                          if (!(Math.abs(B - T) < 0.5)) {
                            (e.fillStyle = l.colors[u]), e.beginPath();
                            var V = Math.round(T * t.pixelRatio),
                              E = Math.round(b * t.pixelRatio),
                              M = Math.round(B * t.pixelRatio),
                              S = Math.round(w * t.pixelRatio),
                              D = M - V,
                              H = Math.max(S - E - c, 1);
                            e.rect(V, E, D, H), e.fill();
                          }
                        }
                        if (l.showValues) {
                          var C = _(o.subBarValues, l.direction),
                            L = R(v, y, h, l, C);
                          g.push(L);
                        }
                      }
                    }
                  }),
                  g.length > 0)
                ) {
                  var x = i.styles[r.bars[0].styleId],
                    b = m(r.xRange, x, t.cssWidth),
                    w = f(n, n + d),
                    T = _(a, x.direction),
                    B = R(v, w, b, x, T);
                  (B.color = Object(u.shiftColor)(B.color, 1.5)), g.push(B);
                }
                var V = Math.min.apply(
                  Math,
                  g.map(function (e) {
                    return e.fontSize;
                  }),
                );
                if (V >= 7.5)
                  for (var E = 0, M = g; E < M.length; E++) {
                    var S = M[E];
                    (S.fontSize = V), y(e, t, S);
                  }
              }),
              e.restore();
          }),
          e
        );
      })();
      function m(e, t, i) {
        var r,
          a,
          n = t.location === d.b.Absolute,
          s = t.location === d.b.Relative,
          o = t.direction === d.a.LeftToRight,
          l = t.direction === d.a.RightToLeft;
        if (n && o) (r = e.min), (a = 1);
        else if (n && l) (r = e.max), (a = -1);
        else if (s && o) (r = 0), (a = 1);
        else {
          if (!s || !l)
            throw new Error(
              'Unknown location/direction values: ' +
                t.location +
                '/' +
                t.direction,
            );
          (r = i), (a = -1);
        }
        return { xBasePoint: r, sign: a };
      }
      function _(e, t) {
        t === d.a.RightToLeft && (e = e.slice()).reverse();
        var i = new c.VolumeFormatter();
        return e
          .map(function (e) {
            return i.format(e);
          })
          .join('x');
      }
      function R(e, t, i, r, a) {
        var n = Math.min(
            Math.round((1.7 * e) / a.length),
            Math.round(0.6 * p(t)),
          ),
          s = r.direction === d.a.LeftToRight ? 'left' : 'right',
          o = i.xBasePoint + 3 * i.sign,
          u = t.min + 0.7 * p(t);
        return {
          text: a,
          color: r.valuesColor,
          fontSize: n,
          align: s,
          point: new l.Point(o, u),
        };
      }
      function y(e, t, i) {
        var r = i.text,
          a = i.color,
          n = i.fontSize,
          s = i.align,
          o = i.point;
        (e.font = n + 'px ' + v.CHART_FONT_FAMILY),
          (e.fillStyle = a),
          (e.textAlign = s),
          Object(h.drawScaled)(e, t.pixelRatio, function () {
            return e.fillText(r, o.x, o.y);
          });
      }
      var x = i('Tmoa');
      i.d(t, 'HHistPaneView', function () {
        return b;
      });
      var b = (function () {
        function e(e, t, i) {
          (this._invalidated = !0),
            (this._provider = e),
            (this._model = t),
            (this._rendererData = { histograms: [], styles: {} }),
            (this._textData = []),
            (this._hhistRenderer = new g(this._rendererData));
        }
        return (
          (e.prototype.update = function () {
            this._invalidated = !0;
          }),
          (e.prototype.renderer = function () {
            this._invalidated &&
              (this._updateViewInternal(), (this._invalidated = !1));
            var e = new s.CompositeRenderer();
            e.append(this._hhistRenderer);
            for (var t = 0, i = this._textData; t < i.length; t++) {
              var r = i[t];
              e.append(
                new o.TextRenderer(
                  r,
                  new n.HitTestResult(n.HitTestResult.REGULAR),
                ),
              );
            }
            return e;
          }),
          (e.prototype._resetRenderersData = function () {
            (this._rendererData.histograms = []), (this._textData = []);
          }),
          (e.prototype._prepareStyles = function () {
            var e = Object.keys(
                Object(a.ensureDefined)(this._provider.graphicsInfo().hhists),
              ),
              t = this._provider.properties().graphics.hhists;
            this._rendererData.styles = {};
            for (var i = 0, r = e; i < r.length; i++) {
              var n = r[i],
                s = Object(a.ensureDefined)(t.child(n)),
                o = Object(x.generateColor)(
                  s.colors[0].value(),
                  s.transparencies[0].value(),
                ),
                l = s.colors[1]
                  ? Object(x.generateColor)(
                      s.colors[1].value(),
                      s.transparencies[1].value(),
                    )
                  : o;
              this._rendererData.styles[n] = {
                colors: [o, l],
                visible: s.visible.value(),
                percentWidth: s.percentWidth.value(),
                location: s.location.value(),
                direction: s.direction.value(),
                showValues: s.showValues.value(),
                valuesColor: s.valuesColor.value(),
              };
            }
          }),
          (e.prototype._updateViewInternal = function () {
            var e = this;
            this._resetRenderersData();
            var t = this._provider.priceScale(),
              i = this._model.timeScale();
            if (
              t &&
              !t.isEmpty() &&
              !i.isEmpty() &&
              null !== this._provider.firstValue()
            ) {
              var r = this._provider.graphics().hhistsByTimePointIndex();
              if (0 !== r.size) {
                var n = i.visibleBarsStrictRange();
                if (null !== n) {
                  var s = n.firstBar(),
                    o = n.lastBar();
                  this._prepareStyles(),
                    Object(a.ensureDefined)(r).forEach(function (r, a) {
                      var n = 1 / 0,
                        l = -1 / 0;
                      r.forEach(function (e) {
                        (n = Math.min(n, e.firstBarTime)),
                          (l = Math.max(l, e.lastBarTime));
                      }),
                        l < s || n > o || e._updateDataForRenderers(r, t, i);
                    });
                }
              }
            }
          }),
          (e.prototype._updateDataForRenderers = function (e, t, i) {
            var n = this;
            if (!(e.size <= 0)) {
              var s = null;
              if (
                (e.forEach(function (e) {
                  s = s || e;
                }),
                null !== s)
              ) {
                var o = s;
                e.forEach(function (e) {
                  e.priceLow < o.priceLow && (o = e);
                });
                var l = (function (e, t) {
                    return f(
                      t.indexToCoordinate(e.firstBarTime),
                      t.indexToCoordinate(e.lastBarTime),
                    );
                  })(s, i),
                  u = [];
                e.forEach(function (e) {
                  null == e.rate[e.rate.length - 1] && e.rate.splice(-1, 1);
                  var i = (function (e, t, i) {
                    return f(
                      t.priceToCoordinate(e.priceHigh, i),
                      t.priceToCoordinate(e.priceLow, i),
                    );
                  })(e, t, Object(a.ensureNotNull)(n._provider.firstValue()));
                  u.push({
                    yRange: i,
                    subBarValues: e.rate,
                    styleId: e.styleId,
                  });
                }),
                  u.sort(function (e, t) {
                    return e.yRange.min - t.yRange.min;
                  });
                for (
                  var h = [], d = u[0].yRange.min, c = 0, v = u;
                  c < v.length;
                  c++
                ) {
                  var p = v[c],
                    g = p.yRange.max - d;
                  h.push(Object(r.a)({ height: g }, p)), (d = p.yRange.max);
                }
                this._rendererData.histograms.push({
                  xRange: l,
                  yRange: f(u[0].yRange.min, d),
                  bars: h,
                });
              }
            }
          }),
          e
        );
      })();
    },
    psYU: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'VertLinePaneView', function () {
          return l;
        });
      var r = i('Eyy1'),
        a = i('VdBB'),
        n = i('972a'),
        s = i('Zy3/'),
        o = i('z+cS'),
        l = (function () {
          function e(e, t, i) {
            (this._data = []),
              (this._invalidated = !0),
              (this._provider = e),
              (this._model = t),
              (this._hitTestResult =
                void 0 !== i
                  ? new a.HitTestResult(a.HitTestResult.CUSTOM, i)
                  : new a.HitTestResult(a.HitTestResult.REGULAR));
          }
          return (
            (e.prototype.update = function () {
              this._invalidated = !0;
            }),
            (e.prototype.renderer = function () {
              this._invalidated &&
                (this._updateViewInternal(), (this._invalidated = !1));
              for (
                var e = new s.CompositeRenderer(), t = 0, i = this._data;
                t < i.length;
                t++
              ) {
                var r = i[t],
                  a = new o.VerticalLineRenderer();
                a.setData(r), a.setHitTest(this._hitTestResult), e.append(a);
              }
              return e;
            }),
            (e.prototype._updateViewInternal = function () {
              var e = this;
              this._data = [];
              var t = this._provider.priceScale(),
                i = this._model.timeScale();
              if (t && !t.isEmpty() && !i.isEmpty()) {
                var a = this._provider.graphicsInfo().vertlines,
                  s = this._provider.graphics().vertlines();
                if (0 !== s.size && void 0 !== a) {
                  var o = this._model.timeScale().visibleBarsStrictRange();
                  if (null !== o) {
                    var l = this._provider.firstValue();
                    if (null !== l) {
                      var u = o.firstBar(),
                        h = o.lastBar();
                      s.forEach(function (s, o) {
                        var d = e._provider.properties().graphics.vertlines[o];
                        if (d.visible.value()) {
                          var c = 0;
                          switch (Object(r.ensureDefined)(a[o]).halign) {
                            case n.HAlign.Left:
                              c = -i.barSpacing() / 2;
                              break;
                            case n.HAlign.Right:
                              c = i.barSpacing() / 2;
                          }
                          s.forEach(function (a) {
                            var n = a.index;
                            n < u ||
                              h < n ||
                              e._data.push({
                                x: i.indexToCoordinate(n) + c,
                                top: a.extendTop
                                  ? void 0
                                  : t.priceToCoordinate(
                                      Object(r.ensureDefined)(a.endPrice),
                                      l,
                                    ),
                                bottom: a.extendBottom
                                  ? void 0
                                  : t.priceToCoordinate(
                                      Object(r.ensureDefined)(a.startPrice),
                                      l,
                                    ),
                                color: d.color.value(),
                                linewidth: d.width.value(),
                                linestyle: d.style.value(),
                              });
                          });
                        }
                      });
                    }
                  }
                }
              }
            }),
            e
          );
        })();
    },
  },
]);
