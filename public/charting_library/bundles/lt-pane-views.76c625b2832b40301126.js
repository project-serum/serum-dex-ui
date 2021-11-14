(window.webpackJsonp = window.webpackJsonp || []).push([
  ['lt-pane-views'],
  {
    '/S7V': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'TriangleRenderer', function () {
          return c;
        });
      var r = i('mrSG'),
        n = i('GEp6'),
        a = i('f6yo'),
        s = i('VaSN'),
        o = i('cPgM'),
        l = i('VdBB'),
        h = i('Tmoa'),
        d = i('jFln'),
        c = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t._data = null), t;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.setData = function (e) {
              this._data = e;
            }),
            (t.prototype.hitTest = function (e) {
              if (null === this._data || this._data.points.length < 2)
                return null;
              var t = this._data.points,
                i = t[0],
                r = t[1],
                o = Object(n.distanceToSegment)(i, r, e),
                h = Object(s.lastEventIsTouch)() ? 24 : 3;
              if (o.distance <= h)
                return new l.HitTestResult(l.HitTestResult.MOVEPOINT);
              if (3 !== this._data.points.length) return null;
              var d = this._data.points[2];
              return (o = Object(n.distanceToSegment)(r, d, e)).distance <= h ||
                (o = Object(n.distanceToSegment)(d, i, e)).distance <= h
                ? new l.HitTestResult(l.HitTestResult.MOVEPOINT)
                : this._data.fillBackground &&
                  Object(a.pointInTriangle)(i, r, d, e)
                ? new l.HitTestResult(l.HitTestResult.MOVEPOINT_BACKGROUND)
                : null;
            }),
            (t.prototype._drawImpl = function (e) {
              if (!(null === this._data || this._data.points.length < 2)) {
                (e.lineCap = 'butt'),
                  (e.strokeStyle = this._data.color),
                  (e.lineWidth = this._data.linewidth),
                  void 0 !== this._data.linestyle &&
                    Object(d.setLineStyle)(e, this._data.linestyle);
                var t = this._data.points,
                  i = t[0],
                  r = t[1],
                  n = 2 === this._data.points.length ? r : this._data.points[2];
                e.beginPath(),
                  e.moveTo(i.x, i.y),
                  e.lineTo(r.x, r.y),
                  e.lineTo(n.x, n.y),
                  e.lineTo(i.x, i.y),
                  this._data.fillBackground &&
                    ((e.fillStyle = Object(h.generateColor)(
                      this._data.backcolor,
                      this._data.transparency,
                    )),
                    e.fill()),
                  e.stroke();
              }
            }),
            t
          );
        })(o.ScaledPaneRenderer);
    },
    '00XE': function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('BCbF').PolygonRenderer,
        s = i('vq8G').SelectionRenderer,
        o = i('Zy3/').CompositeRenderer,
        l = i('VdBB').HitTestResult;
      function h(e, t) {
        n.call(this, e, t),
          (this._model = t),
          (this._source = e),
          (this._poligonRenderer = new a()),
          (this._renderer = null);
      }
      inherit(h, n),
        (h.prototype._smoothArray = function (e, t) {
          for (var i = new Array(e.length), n = 0; n < e.length; n++) {
            for (var a = new r(0, 0), s = 0; s < t; s++) {
              var o = Math.max(n - s, 0),
                l = Math.min(n + s, e.length - 1);
              a = (a = a.add(e[o])).add(e[l]);
            }
            i[n] = a.scaled(0.5 / t);
          }
          return i.push(e[e.length - 1]), i;
        }),
        (h.prototype._updateInternal = function () {
          n.prototype._updateImpl.call(this), (this._renderer = null);
          var e = Math.max(1, this._source.properties().smooth.value()),
            t = this._points;
          if (0 !== t.length) {
            for (var i = [t[0]], r = 1; r < t.length; r++) {
              for (
                var a = t[r].subtract(t[r - 1]),
                  h = a.length(),
                  d = Math.min(5, Math.floor(h / e)),
                  c = a.normalized().scaled(h / d),
                  p = 0;
                p < d - 1;
                p++
              )
                i.push(t[r - 1].add(c.scaled(p)));
              i.push(t[r]);
            }
            this._points = this._smoothArray(i, e);
            var u = {},
              _ = this._source.properties();
            if (
              ((u.points = this._points),
              (u.color = _.linecolor.value()),
              (u.linewidth = _.linewidth.value()),
              (u.linestyle = _.linestyle.value()),
              (u.skipClosePath = !0),
              (u.leftend = this._source.properties().leftEnd.value()),
              (u.rightend = this._source.properties().rightEnd.value()),
              _.fillBackground.value() &&
                this._model.lineBeingCreated() !== this._source &&
                ((u.filled = !0),
                (u.fillBackground = !0),
                (u.backcolor = _.backgroundColor.value()),
                (u.transparency = _.transparency.value())),
              this._poligonRenderer.setData(u),
              this._source.finished())
            ) {
              var f = new o();
              if ((f.append(this._poligonRenderer), u.points.length > 0)) {
                var v = [u.points[0], u.points[u.points.length - 1]];
                f.append(
                  new s({
                    points: v,
                    bgColors: this._lineAnchorColors(v),
                    visible: this.areAnchorsVisible(),
                    hittestResult: l.REGULAR,
                  }),
                );
              }
              this._renderer = f;
            } else this._renderer = this._poligonRenderer;
          }
        }),
        (h.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateInternal(), this._renderer;
        }),
        (t.BrushPaneView = h);
    },
    '1SUO': function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('pJOz').TrendLineRenderer,
        a = i('cjIn').PaneRendererCachedImage,
        s = i('VdBB').HitTestResult,
        o = i('Zy3/').CompositeRenderer,
        l = i('isd9').ArcWedgeRenderer,
        h = i('a7Ha').LineEnd,
        d = i('NCfL').LineToolPaneViewWithLevelledTextCache;
      function c(e, t) {
        d.call(this, e, t),
          (this._levels = []),
          (this._baseTrendRenderer = new n()),
          (this._edgeTrendRenderer = new n()),
          (this._renderer = null);
      }
      inherit(c, d),
        (c.prototype.getCacheRects = function (e, t) {
          d.prototype.getCacheRects.call(this, e, t);
          var i = this._cacheState.preparedCells.cells[
            this._levels[t].index - 1
          ];
          if (i) {
            var r = this._levels[t],
              n = {
                left: i.left,
                top: this._cache.topByRow(this._cacheState.row),
                width: i.width,
                height: this._cache.rowHeight(this._cacheState.row),
              };
            return {
              cacheRect: n,
              targetRect: {
                left: Math.round(r.labelPoint.x - n.width),
                top: Math.round(r.labelPoint.y - n.height / 2),
                width: i.width,
                height: n.height,
              },
            };
          }
        }),
        (c.prototype._updateImpl = function () {
          if (
            (d.prototype._updateImpl.call(this),
            (this._renderer = null),
            (this._levels = []),
            this._points.length < 3)
          )
            this._updateRenderer();
          else {
            var e = this._points,
              t = e[0],
              i = e[1],
              n = e[2],
              a = i.subtract(t).normalized(),
              s = n.subtract(t).normalized(),
              o = new r(1, 0),
              l = new r(0, 1),
              h = Math.acos(a.dotProduct(o));
            a.dotProduct(l) < 0 && (h = 2 * Math.PI - h), (this._edge1 = h);
            var c = Math.acos(s.dotProduct(o));
            s.dotProduct(l) < 0 && (c = 2 * Math.PI - c),
              (this._edge2 = c),
              h < c &&
                ((this._edge1 = Math.max(h, c)),
                (this._edge2 = Math.min(h, c) + 2 * Math.PI)),
              Math.abs(h - c) > Math.PI &&
                ((this._edge1 = Math.min(h, c)),
                (this._edge2 = Math.max(h, c) - 2 * Math.PI));
            for (
              var p = this._source.properties(), u = 1;
              u <= this._source.levelsCount();
              u++
            ) {
              var _ = p['level' + u];
              if (_.visible.value()) {
                var f = _.coeff.value(),
                  v = _.color.value(),
                  g = i.subtract(t).length() * f,
                  y = a.add(s).scaled(0.5).normalized().scaled(g),
                  w = t.add(y);
                this._levels.push({
                  coeff: f,
                  color: v,
                  radius: g,
                  labelPoint: w,
                  p1: t.add(a.scaled(g)),
                  p2: t.add(s.scaled(g)),
                  linewidth: _.linewidth.value(),
                  linestyle: _.linestyle.value(),
                  index: u,
                });
              }
            }
            this._points.length < 2 || this._updateRenderer();
          }
        }),
        (c.prototype._updateRenderer = function () {
          if (!((w = this._points).length < 2)) {
            var e = new o(),
              t = this._source.properties(),
              i = w[0],
              r = w[1],
              n = {
                points: [i, r],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: t.trendline.color.value(),
                linewidth: t.trendline.visible.value()
                  ? t.trendline.linewidth.value()
                  : 0,
                linestyle: t.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: h.Normal,
                rightend: h.Normal,
              };
            if (
              (this._baseTrendRenderer.setData(n),
              e.append(this._baseTrendRenderer),
              w.length < 3)
            )
              return this.addAnchors(e), void (this._renderer = e);
            var d = w[2],
              c = d.data,
              p = r.subtract(i).length(),
              u = d.subtract(i).normalized();
            ((d = i.add(u.scaled(p))).data = c),
              (n = {
                points: [i, d],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: t.trendline.color.value(),
                linewidth: t.trendline.visible.value()
                  ? t.trendline.linewidth.value()
                  : 0,
                linestyle: t.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: h.Normal,
                rightend: h.Normal,
              }),
              this._edgeTrendRenderer.setData(n),
              e.append(this._edgeTrendRenderer);
            for (var _ = this._levels.length - 1; _ >= 0; _--) {
              var f = this._levels[_],
                v = {};
              (v.center = this._points[0]),
                (v.radius = f.radius),
                (v.prevRadius = _ > 0 ? this._levels[_ - 1].radius : 0),
                (v.edge = this._edge),
                (v.color = f.color),
                (v.linewidth = f.linewidth),
                (v.edge1 = this._edge1),
                (v.edge2 = this._edge2),
                (v.p1 = f.p1),
                (v.p2 = f.p2),
                (v.fillBackground = t.fillBackground.value()),
                (v.transparency = t.transparency.value());
              var g = new l();
              if (
                (g.setData(v),
                g.setHitTest(new s(s.MOVEPOINT, null, f.index)),
                e.append(g),
                t.showCoeffs.value())
              ) {
                var y = new a(this, _);
                e.append(y);
              }
            }
            var w = [i, r];
            this._model.lineBeingCreated() !== this._source && w.push(d),
              e.append(this.createLineAnchor({ points: w })),
              (this._renderer = e);
          }
        }),
        (c.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.FibWedgePaneView = c);
    },
    '1oDZ': function (e, t, i) {
      'use strict';
      var r = i('aB9a').LineSourcePaneView,
        n = i('qgcf').TextRenderer,
        a = i('VdBB').HitTestResult,
        s = i('Zy3/').CompositeRenderer,
        o = i('gAom').drawHorizontalLine,
        l = i('jFln').setLineStyle;
      function h() {
        this._data = null;
      }
      function d(e, t) {
        r.call(this, e, t),
          (this._horzRayRenderer = new h()),
          (this._labelRenderer = new n()),
          (this._renderer = null);
      }
      (h.prototype.setData = function (e) {
        this._data = e;
      }),
        (h.prototype.draw = function (e, t) {
          if (null === this._data || 0 === this._data.points.length)
            return null;
          var i = t.pixelRatio,
            r = e.canvas.width,
            n = this._data.points[0].y,
            a = Math.max(0, this._data.points[0].x),
            s = Math.max(r, this._data.points[0].x);
          (e.lineCap = 'butt'),
            (e.strokeStyle = this._data.color),
            (e.lineWidth = Math.max(1, Math.floor(this._data.linewidth * i))),
            void 0 !== this._data.linestyle && l(e, this._data.linestyle),
            o(e, Math.round(n * i), Math.round(a * i), Math.round(s * i));
        }),
        (h.prototype.hitTest = function (e) {
          if (null === this._data || 0 === this._data.points.length)
            return null;
          if (e.x < this._data.points[0].x) return null;
          return Math.abs(e.y - this._data.points[0].y) <= 3
            ? new a(this._data.hitTestResult)
            : null;
        }),
        inherit(d, r),
        (d.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (d.prototype._updateImpl = function () {
          r.prototype._updateImpl.call(this), (this._renderer = null);
          var e = this._source.properties(),
            t = new s(),
            i = {};
          if (
            ((i.points = this._points),
            (i.color = e.linecolor.value()),
            (i.linewidth = e.linewidth.value()),
            (i.linestyle = e.linestyle.value()),
            (i.hitTestResult = a.MOVEPOINT),
            this._horzRayRenderer.setData(i),
            t.append(this._horzRayRenderer),
            e.showLabel.value() && 1 === this._points.length)
          ) {
            var n = e.vertLabelsAlign.value(),
              o = e.horzLabelsAlign.value(),
              l = this._points[0].clone(),
              h = 0,
              d = e.text.value(),
              c = e.bold.value(),
              p = e.italic.value(),
              u = e.font.value(),
              _ = e.fontsize.value();
            if ('right' === o) {
              this._labelRenderer.setData({
                text: d,
                font: u,
                bold: c,
                italic: p,
                fontsize: _,
              });
              var f = this._labelRenderer.measure().width,
                v = this._model.timeScale().width();
              l.x + f + 3 >= v ? (l.x += f + 3) : ((l.x = v), (h = 3));
            } else
              'center' === o &&
                (l.x = (l.x + this._model.timeScale().width()) / 2);
            var g = {
              points: [l],
              text: d,
              color: e.textcolor.value(),
              vertAlign: n,
              horzAlign: o,
              font: u,
              offsetX: h,
              offsetY: 0,
              bold: c,
              italic: p,
              fontsize: _,
              forceTextAlign: !0,
            };
            this._labelRenderer.setData(g), t.append(this._labelRenderer);
          }
          this.addAnchors(t), (this._renderer = t);
        }),
        (t.HorzRayPaneView = d);
    },
    '2hKl': function (e, t, i) {
      'use strict';
      function r(e, t, i, r) {
        for (
          var n = 3 / (i.subtract(e).length() + i.subtract(t).length()), a = 0;
          a <= 1;
          a += n
        ) {
          var s = e.scaled((1 - a) * (1 - a)),
            o = i.scaled(2 * a * (1 - a)),
            l = t.scaled(a * a);
          if (s.add(o).add(l).subtract(r).length() < 5) return !0;
        }
        return !1;
      }
      function n(e, t, i, r, n) {
        for (
          var a =
              3 /
              (i.subtract(e).length() +
                r.subtract(i).length() +
                t.subtract(r).length()),
            s = 0;
          s <= 1;
          s += a
        ) {
          var o = e.scaled((1 - s) * (1 - s) * (1 - s)),
            l = i.scaled(3 * (1 - s) * (1 - s) * s),
            h = r.scaled(3 * (1 - s) * s * s),
            d = t.scaled(s * s * s);
          if (o.add(l).add(h).add(d).subtract(n).length() < 5) return !0;
        }
        return !1;
      }
      function a(e, t, i, r, n) {
        var a = i.subtract(e).length() + i.subtract(t).length();
        if (!a) return [];
        var l = (function (e, t, i, r, n) {
          for (
            var a = [],
              l = s(e.y, t.y, i.y, 0).concat(s(e.y, t.y, i.y, n)),
              h = 0;
            h < l.length;
            h++
          ) {
            var d = o(e.x, t.x, i.x, l[h]);
            d >= 0 && d <= r && a.push(l[h]);
          }
          var c = s(e.x, t.x, i.x, 0).concat(s(e.x, t.x, i.x, r));
          for (h = 0; h < c.length; h++) {
            var p = o(e.y, t.y, i.y, c[h]);
            p >= 0 && p <= n && a.push(c[h]);
          }
          return a;
        })(e, t, i, r, n)
          .filter(function (e) {
            return e > 1;
          })
          .sort(function (e, t) {
            return e - t;
          });
        t.x >= 0 && t.x <= r && t.y >= 0 && t.y <= n && l.unshift(1);
        for (var h = 3 / a, d = [], c = 0; c < l.length - 1; c += 2) {
          for (var p = h, u = l[c], _ = l[c + 1] + p, f = []; u <= _; ) {
            var v = e.scaled((1 - u) * (1 - u)),
              g = i.scaled(2 * u * (1 - u)),
              y = t.scaled(u * u),
              w = v.add(g).add(y);
            if (f.length > 0)
              f[f.length - 1].subtract(w).length() < 2 && ((_ += p), (p *= 2));
            f.push(w), (u += p);
          }
          f.length > 0 && d.push(f);
        }
        return d;
      }
      function s(e, t, i, r) {
        var n = [],
          a = e - 2 * i + t,
          s = 2 * i - 2 * e,
          o = e - r;
        if (Math.abs(a) > 1e-8) {
          var l = s * s - 4 * a * o;
          l >= 0 &&
            (n.push((-s + Math.sqrt(l)) / (2 * a)),
            n.push((-s - Math.sqrt(l)) / (2 * a)));
        } else n.push(-o / s);
        return n;
      }
      function o(e, t, i, r) {
        return (1 - r) * (1 - r) * e + 2 * (1 - r) * r * i + r * r * t;
      }
      i.r(t),
        i.d(t, 'quadroBezierHitTest', function () {
          return r;
        }),
        i.d(t, 'cubicBezierHitTest', function () {
          return n;
        }),
        i.d(t, 'extendQuadroBezier', function () {
          return a;
        });
    },
    '2trc': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'ChannelRenderer', function () {
          return c;
        });
      var r = i('mrSG'),
        n = i('Eyy1'),
        a = i('aO4+'),
        s = i('f6yo'),
        o = i('GEp6'),
        l = i('hBTJ'),
        h = i('VdBB'),
        d = i('Tmoa'),
        c = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t._data = null), t;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.setData = function (e) {
              this._data = e;
            }),
            (t.prototype.hitTest = function (e, t) {
              if (null === this._data || !this._data.hittestOnBackground)
                return null;
              var i = this._visiblePolygon(t);
              return null !== i && Object(s.pointInPolygon)(e, i)
                ? new h.HitTestResult(h.HitTestResult.MOVEPOINT_BACKGROUND)
                : null;
            }),
            (t.prototype._drawImpl = function (e, t) {
              if (null !== this._data) {
                var i = this._visiblePolygon(t);
                if (null !== i) {
                  e.beginPath(), e.moveTo(i[0].x, i[0].y);
                  for (var r = 1; r < i.length; r++) e.lineTo(i[r].x, i[r].y);
                  (e.fillStyle = Object(d.generateColor)(
                    this._data.color,
                    this._data.transparency,
                    !0,
                  )),
                    e.fill();
                }
              }
            }),
            (t.prototype._visiblePolygon = function (e) {
              var t = Object(n.ensureNotNull)(this._data),
                i = t.p1,
                r = t.p2,
                s = t.p3,
                l = t.p4;
              if (
                Object(a.equalPoints)(i, r) ||
                Object(a.equalPoints)(s, l) ||
                (Object(o.distanceToLine)(i, r, s).distance < 1e-6 &&
                  Object(o.distanceToLine)(i, r, l).distance < 1e-6)
              )
                return null;
              if (e.cssWidth <= 0 || e.cssHeight <= 0) return null;
              var h = [
                new a.Point(0, 0),
                new a.Point(e.cssWidth, 0),
                new a.Point(e.cssWidth, e.cssHeight),
                new a.Point(0, e.cssHeight),
              ];
              return (
                (h = p(h, i, r, [l, s])),
                (h = p(h, l, s, [i, r])),
                Object(a.equalPoints)(s, i) ||
                  t.extendLeft ||
                  (h = p(h, s, i, [r, l])),
                h
              );
            }),
            t
          );
        })(i('cPgM').ScaledPaneRenderer);
      function p(e, t, i, r) {
        var n = Object(a.equalPoints)(i, r[0])
          ? Object(a.equalPoints)(i, r[1])
            ? null
            : r[1]
          : r[0];
        return null !== e && null !== n
          ? Object(l.intersectPolygonAndHalfplane)(
              e,
              Object(a.halfplaneThroughPoint)(
                Object(a.lineThroughPoints)(t, i),
                n,
              ),
            )
          : null;
      }
    },
    '3xLB': function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('qgcf').TextRenderer,
        s = i('qgcf').calculateLabelPosition,
        o = i('IjC5').RectangleRenderer,
        l = i('pJOz').TrendLineRenderer,
        h = i('Zy3/').CompositeRenderer,
        d = i('nda6').TimeSpanFormatter,
        c = i('a7Ha').LineEnd,
        p = i('Ialn'),
        u = p.forceLTRStr,
        _ = p.startWithLTR;
      function f(e, t) {
        n.call(this, e, t),
          (this._leftBorderRenderer = new l()),
          (this._rightBorderRenderer = new l()),
          (this._distancePriceRenderer = new l()),
          (this._backgroundRenderer = new o()),
          (this._textRenderer = new a()),
          (this._renderer = null);
      }
      inherit(f, n),
        (f.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (f.prototype._updateImpl = function () {
          if (
            (n.prototype._updateImpl.call(this),
            (this._renderer = null),
            !(this._points.length < 2 || this._source.points().length < 2))
          ) {
            var e = new h(),
              t = this._source.properties(),
              i = t.extendTop.value(),
              a = t.extendBottom.value(),
              o = this._points[0],
              l = this._points[1],
              p = i ? 0 : Math.min(o.y, l.y),
              f = a ? this._height() : Math.max(o.y, l.y);
            if (t.fillBackground && t.fillBackground.value())
              ((C = {}).points = [new r(o.x, p), new r(l.x, f)]),
                (C.color = 'white'),
                (C.linewidth = 0),
                (C.backcolor = t.backgroundColor.value()),
                (C.fillBackground = !0),
                (C.transparency = t.backgroundTransparency.value()),
                (C.extendLeft = !1),
                (C.extendRight = !1),
                this._backgroundRenderer.setData(C),
                e.append(this._backgroundRenderer);
            var v = this,
              g = function (t, i, r) {
                var n = {};
                (n.points = [i, r]),
                  (n.width = v._width()),
                  (n.height = v._height()),
                  (n.color = v._source.properties().linecolor.value()),
                  (n.linewidth = v._source.properties().linewidth.value()),
                  (n.linestyle = CanvasEx.LINESTYLE_SOLID),
                  (n.extendleft = !1),
                  (n.extendright = !1),
                  (n.leftend = c.Normal),
                  (n.rightend = c.Normal),
                  t.setData(n),
                  e.append(t);
              };
            g(this._leftBorderRenderer, new r(o.x, p), new r(o.x, f)),
              g(this._rightBorderRenderer, new r(l.x, p), new r(l.x, f));
            var y = Math.round((o.y + l.y) / 2),
              w = new r(o.x, y),
              x = new r(l.x, y);
            ((C = {}).points = [w, x]),
              (C.width = v._model.timeScale().width()),
              (C.height = v._source.priceScale().height()),
              (C.color = v._source.properties().linecolor.value()),
              (C.linewidth = v._source.properties().linewidth.value()),
              (C.linestyle = CanvasEx.LINESTYLE_SOLID),
              (C.extendleft = !1),
              (C.extendright = !1),
              (C.leftend = c.Normal),
              (C.rightend =
                Math.abs(w.x - x.x) >= 15 * C.linewidth ? c.Arrow : c.Normal),
              this._distancePriceRenderer.setData(C),
              e.append(this._distancePriceRenderer);
            var m = this._source.points()[0].index,
              b = this._source.points()[1].index,
              R = b - m,
              T = this._model.timeScale().indexToUserTime(m),
              S = this._model.timeScale().indexToUserTime(b),
              P = '';
            if (T && S) {
              var L = (S.valueOf() - T.valueOf()) / 1e3;
              P = ', ' + _(new d().format(L));
            }
            var C,
              M = window.t('{0} bars').format(u(R)) + P,
              I = { x: 0, y: 10 };
            ((C = {}).text = M),
              (C.color = t.textcolor.value()),
              (C.height = v._source.priceScale().height()),
              (C.font = t.font.value()),
              (C.offsetX = I.x),
              (C.offsetY = I.y),
              (C.vertAlign = 'middle'),
              (C.horzAlign = 'center'),
              (C.fontsize = t.fontsize.value()),
              (C.backgroundRoundRect = 4),
              (C.backgroundHorzInflate = 0.4 * t.fontsize.value()),
              (C.backgroundVertInflate = 0.2 * t.fontsize.value()),
              t.fillLabelBackground &&
                t.fillLabelBackground.value() &&
                (C.backgroundColor = t.labelBackgroundColor.value()),
              t.drawBorder &&
                t.drawBorder.value() &&
                (C.borderColor = t.borderColor.value()),
              this._textRenderer.setData(C);
            var O = this._textRenderer.measure(),
              D = s(O, o, l, I, v._source.priceScale().height());
            this._textRenderer.setPoints([D]),
              e.append(this._textRenderer),
              e.append(this._textRenderer),
              this.addAnchors(e),
              (this._renderer = e);
          }
        }),
        (t.DateRangePaneView = f);
    },
    '4Ptp': function (e, t, i) {
      'use strict';
      var r = i('GEp6').distanceToSegment,
        n = i('aB9a').LineSourcePaneView,
        a = i('pJOz').drawArrow,
        s = i('VdBB').HitTestResult,
        o = i('Zy3/').CompositeRenderer,
        l = i('Tmoa'),
        h = i('a7Ha').LineEnd,
        d = i('2hKl'),
        c = i('cPgM').ScaledPaneRenderer;
      function p() {
        c.call(this), (this._data = null);
      }
      function u(e, t) {
        for (var i = 0; i < t.length; i++) {
          var r = t[i],
            n = r[0];
          e.moveTo(n.x, n.y);
          for (var a = 1; a < r.length; a++) {
            var s = r[a];
            e.lineTo(s.x, s.y);
          }
        }
      }
      function _(e, t, i) {
        for (var n = 0; n < i.length; n++)
          for (var a = i[n], o = 1; o < a.length; o++) {
            var l = a[o - 1],
              h = a[o];
            if (r(l, h, e).distance < t) return new s(s.MOVEPOINT);
          }
        return null;
      }
      function f(e, t) {
        n.call(this, e, t),
          (this._bezierQuadroRenderer = new p()),
          (this._renderer = null);
      }
      inherit(p, c),
        (p.prototype.setData = function (e) {
          this._data = e;
        }),
        (p.prototype._drawImpl = function (e, t) {
          if (null !== this._data) {
            var i = this._data.points[0],
              r = this._data.points[1];
            if (
              ((e.lineCap = 'butt'),
              (e.strokeStyle = this._data.color),
              (e.lineWidth = this._data.linewidth),
              CanvasEx.setLineStyle(e, this._data.linestyle),
              2 === this._data.points.length)
            )
              e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(r.x, r.y), e.stroke();
            else {
              var n = this._data.points[2],
                s = r.subtract(i),
                o = n.subtract(s.scaled(0.25)),
                d = n.add(s.scaled(0.25));
              this._data.fillBack &&
                this._data.points.length > 2 &&
                ((e.fillStyle = l.generateColor(
                  this._data.backcolor,
                  this._data.transparency,
                )),
                e.beginPath(),
                e.moveTo(i.x, i.y),
                e.quadraticCurveTo(o.x, o.y, n.x, n.y),
                e.quadraticCurveTo(d.x, d.y, r.x, r.y),
                e.fill()),
                e.beginPath(),
                u(e, this._data.extendLeftSegments),
                e.moveTo(i.x, i.y),
                e.quadraticCurveTo(o.x, o.y, n.x, n.y),
                e.quadraticCurveTo(d.x, d.y, r.x, r.y),
                u(e, this._data.extendRightSegments),
                e.stroke(),
                this._data.leftend === h.Arrow &&
                  a(o, i, e, e.lineWidth, t.pixelRatio),
                this._data.rightend === h.Arrow &&
                  a(d, r, e, e.lineWidth, t.pixelRatio);
            }
          }
        }),
        (p.prototype.hitTest = function (e) {
          if (null !== this._data && 3 === this._data.points.length) {
            var t = this._data.points[0],
              i = this._data.points[1],
              r = this._data.points[2],
              n = i.subtract(t),
              a = r.subtract(n.scaled(0.25)),
              o = r.add(n.scaled(0.25));
            if (
              d.quadroBezierHitTest(r, t, a, e) ||
              d.quadroBezierHitTest(r, i, o, e)
            )
              return new s(s.MOVEPOINT);
            var l = _(e, 3, this._data.extendLeftSegments);
            return (
              null === l && (l = _(e, 3, this._data.extendRightSegments)), l
            );
          }
          return null;
        }),
        inherit(f, n),
        (f.prototype._updateImpl = function () {
          if (
            (n.prototype._updateImpl.call(this),
            (this._renderer = null),
            (this._extendLeftSegments = []),
            (this._extendRightSegments = []),
            3 === this._source.points().length)
          ) {
            var e = this._source.pointToScreenPoint(
                this._source.points()[0],
              )[1],
              t = this._source.pointToScreenPoint(this._source.points()[1])[1],
              i = this._source.pointToScreenPoint(this._source.points()[2])[1],
              r = t.subtract(e),
              a = i.subtract(r.scaled(0.25)),
              s = i.add(r.scaled(0.25)),
              l = this._model.timeScale().width(),
              h = this._source.priceScale().height();
            this._source.properties().extendLeft.value() &&
              (this._extendLeftSegments = d.extendQuadroBezier(i, e, a, l, h)),
              this._source.properties().extendRight.value() &&
                (this._extendRightSegments = d.extendQuadroBezier(
                  i,
                  t,
                  s,
                  l,
                  h,
                ));
          }
          if (!(this._points.length < 2)) {
            var c = [].concat(this._points);
            this._source._controlPoint &&
              c.push(
                this._source.pointToScreenPoint(this._source._controlPoint)[0],
              );
            var p = {},
              u = this._source.properties();
            (p.points = c),
              (p.color = u.linecolor.value()),
              (p.linewidth = u.linewidth.value()),
              (p.linestyle = u.linestyle.value()),
              (p.leftend = u.leftEnd.value()),
              (p.rightend = u.rightEnd.value()),
              (p.fillBack = u.fillBackground.value()),
              (p.backcolor = u.backgroundColor.value()),
              (p.transparency = u.transparency.value()),
              (p.extendLeftSegments = this._extendLeftSegments),
              (p.extendRightSegments = this._extendRightSegments),
              this._bezierQuadroRenderer.setData(p);
            var _ = new o();
            _.append(this._bezierQuadroRenderer),
              this.addAnchors(_),
              (this._renderer = _);
          }
        }),
        (f.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.BezierQuadroPaneView = f);
    },
    '5/lF': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'iconsContainer', function () {
          return v;
        }),
        i.d(t, 'TrendLineStatsRenderer', function () {
          return w;
        });
      var r = i('aO4+'),
        n = i('f6yo'),
        a = i('Eyy1'),
        s = i('qFKp'),
        o = i('qgcf'),
        l = i('VdBB'),
        h = i('jFln'),
        d = i('ogJP'),
        c = i('ikwP'),
        p = i('aIyQ'),
        u = i.n(p),
        _ = null;
      var f = (function () {
          function e(e, t) {
            var i = this;
            (this._ready = !1),
              (this._img = (function (e, t) {
                var i = new Image();
                return (
                  (i.width = g), (i.height = g), (i.onload = t), (i.src = e), i
                );
              })(e, function () {
                (i._ready = !0), t();
              }));
          }
          return (
            (e.prototype.ready = function () {
              return this._ready;
            }),
            (e.prototype.image = function () {
              return this._img;
            }),
            e
          );
        })(),
        v = new ((function () {
          function e(e) {
            var t = this;
            (this._icons = new Map()),
              (this._onAllIconsLoaded = new u.a()),
              (this._pendingLoading = e.length);
            var i = function () {
              --t._pendingLoading && t._onAllIconsLoaded.fire();
            };
            e.forEach(function (e) {
              var r = t._icons.get(e.name) || new Map();
              r.set(e.theme, new f(e.imageData, i)), t._icons.set(e.name, r);
            });
          }
          return (
            (e.prototype.getIcon = function (e, t) {
              return Object(a.ensureDefined)(
                Object(a.ensureDefined)(this._icons.get(e)).get(t),
              );
            }),
            (e.prototype.onAllIconsReady = function () {
              return this._onAllIconsLoaded;
            }),
            e
          );
        })())([
          {
            name: 'angle',
            theme: 'dark',
            imageData:
              'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjQ5OTk5IDE1SDIuNjU3NzFMMy4wNjEwNCAxNC4yNjA2TDkuMDYxMDQgMy4yNjA1N0w5LjMwMDQ2IDIuODIxNjJMMTAuMTc4NCAzLjMwMDQ4TDkuOTM4OTMgMy43Mzk0Mkw3LjUxMzg1IDguMTg1NDJDMTAuNTYyMSA5LjY3MjA1IDEwLjk0NTEgMTIuNjI2MSAxMC45OTMxIDE0SDE0LjVIMTVWMTVIMTQuNUgzLjQ5OTk5Wk05Ljk5MTk3IDE0QzkuOTQyMzYgMTIuNzI1OSA5LjU4NjI5IDEwLjI4OCA3LjAzNDM1IDkuMDY0NDlMNC4zNDIyNiAxNEg5Ljk5MTk3WiIgZmlsbD0iI0Y4RjlGRCIvPgo8L3N2Zz4K',
          },
          {
            name: 'angle',
            theme: 'light',
            imageData:
              'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMy40OTk5OSAxNUgyLjY1NzcxTDMuMDYxMDQgMTQuMjYwNkw5LjA2MTA0IDMuMjYwNTdMOS4zMDA0NiAyLjgyMTYyTDEwLjE3ODQgMy4zMDA0OEw5LjkzODkzIDMuNzM5NDJMNy41MTM4NSA4LjE4NTQyQzEwLjU2MjEgOS42NzIwNSAxMC45NDUxIDEyLjYyNjEgMTAuOTkzMSAxNEgxNC41SDE1VjE1SDE0LjVIMy40OTk5OVpNOS45OTE5NyAxNEM5Ljk0MjM2IDEyLjcyNTkgOS41ODYyOSAxMC4yODggNy4wMzQzNSA5LjA2NDQ5TDQuMzQyMjYgMTRIOS45OTE5N1oiIGZpbGw9IiMyQTJFMzkiLz4NCjwvc3ZnPg0K',
          },
          {
            name: 'barsRange',
            theme: 'dark',
            imageData:
              'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiAzVjMuNVY1SDFWNlYxM1YxNEgyVjE1LjVWMTZIM1YxNS41VjE0SDRWMTNWNlY1SDNWMy41VjNIMlpNOC4yMDcxMSA3LjVMNy44NTM1NSA3Ljg1MzU1TDYuNzA3MTEgOUgxMS4yOTI5TDEwLjE0NjQgNy44NTM1NUw5Ljc5Mjg5IDcuNUwxMC41IDYuNzkyODlMMTAuODUzNiA3LjE0NjQ1TDEyLjg1MzYgOS4xNDY0NUwxMy4yMDcxIDkuNUwxMi44NTM2IDkuODUzNTVMMTAuODUzNiAxMS44NTM2TDEwLjUgMTIuMjA3MUw5Ljc5Mjg5IDExLjVMMTAuMTQ2NCAxMS4xNDY0TDExLjI5MjkgMTBINi43MDcxMUw3Ljg1MzU1IDExLjE0NjRMOC4yMDcxMSAxMS41TDcuNSAxMi4yMDcxTDcuMTQ2NDUgMTEuODUzNkw1LjE0NjQ1IDkuODUzNTVMNC43OTI4OSA5LjVMNS4xNDY0NSA5LjE0NjQ1TDcuMTQ2NDUgNy4xNDY0NUw3LjUgNi43OTI4OUw4LjIwNzExIDcuNVpNMyA2SDJWMTNIM1Y2Wk0xNSAzLjVWM0gxNlYzLjVWNUgxN1Y2VjEzVjE0SDE2VjE1LjVWMTZIMTVWMTUuNVYxNEgxNFYxM1Y2VjVIMTVWMy41Wk0xNSA2SDE2VjEzSDE1VjZaIiBmaWxsPSIjRjhGOUZEIi8+DQo8L3N2Zz4NCg==',
          },
          {
            name: 'barsRange',
            theme: 'light',
            imageData:
              'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiAzVjMuNVY1SDFWNlYxM1YxNEgyVjE1LjVWMTZIM1YxNS41VjE0SDRWMTNWNlY1SDNWMy41VjNIMlpNOC4yMDcxMSA3LjVMNy44NTM1NSA3Ljg1MzU1TDYuNzA3MTEgOUgxMS4yOTI5TDEwLjE0NjQgNy44NTM1NUw5Ljc5Mjg5IDcuNUwxMC41IDYuNzkyODlMMTAuODUzNiA3LjE0NjQ1TDEyLjg1MzYgOS4xNDY0NUwxMy4yMDcxIDkuNUwxMi44NTM2IDkuODUzNTVMMTAuODUzNiAxMS44NTM2TDEwLjUgMTIuMjA3MUw5Ljc5Mjg5IDExLjVMMTAuMTQ2NCAxMS4xNDY0TDExLjI5MjkgMTBINi43MDcxMUw3Ljg1MzU1IDExLjE0NjRMOC4yMDcxMSAxMS41TDcuNSAxMi4yMDcxTDcuMTQ2NDUgMTEuODUzNkw1LjE0NjQ1IDkuODUzNTVMNC43OTI4OSA5LjVMNS4xNDY0NSA5LjE0NjQ1TDcuMTQ2NDUgNy4xNDY0NUw3LjUgNi43OTI4OUw4LjIwNzExIDcuNVpNMyA2SDJWMTNIM1Y2Wk0xNSAzLjVWM0gxNlYzLjVWNUgxN1Y2VjEzVjE0SDE2VjE1LjVWMTZIMTVWMTUuNVYxNEgxNFYxM1Y2VjVIMTVWMy41Wk0xNSA2SDE2VjEzSDE1VjZaIiBmaWxsPSIjMkEyRTM5Ii8+DQo8L3N2Zz4NCg==',
          },
          {
            name: 'priceRange',
            theme: 'dark',
            imageData:
              'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMyAySDMuNUgxMy41SDE0VjNIMTMuNUgzLjVIM1YyWk04LjUgMy43OTI4OUw4Ljg1MzU1IDQuMTQ2NDVMMTAuODUzNiA2LjE0NjQ1TDExLjIwNzEgNi41TDEwLjUgNy4yMDcxMUwxMC4xNDY0IDYuODUzNTVMOSA1LjcwNzExVjEyLjI5MjlMMTAuMTQ2NCAxMS4xNDY0TDEwLjUgMTAuNzkyOUwxMS4yMDcxIDExLjVMMTAuODUzNiAxMS44NTM2TDguODUzNTUgMTMuODUzNkw4LjUgMTQuMjA3MUw4LjE0NjQ1IDEzLjg1MzZMNi4xNDY0NSAxMS44NTM2TDUuNzkyODkgMTEuNUw2LjUgMTAuNzkyOUw2Ljg1MzU1IDExLjE0NjRMOCAxMi4yOTI5VjUuNzA3MTFMNi44NTM1NSA2Ljg1MzU1TDYuNSA3LjIwNzExTDUuNzkyODkgNi41TDYuMTQ2NDUgNi4xNDY0NUw4LjE0NjQ1IDQuMTQ2NDVMOC41IDMuNzkyODlaTTMuNSAxNkgzVjE1SDMuNUgxMy41SDE0VjE2SDEzLjVIMy41WiIgZmlsbD0iI0Y4RjlGRCIvPg0KPC9zdmc+DQo=',
          },
          {
            name: 'priceRange',
            theme: 'light',
            imageData:
              'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMyAySDMuNUgxMy41SDE0VjNIMTMuNUgzLjVIM1YyWk04LjUgMy43OTI4OUw4Ljg1MzU1IDQuMTQ2NDVMMTAuODUzNiA2LjE0NjQ1TDExLjIwNzEgNi41TDEwLjUgNy4yMDcxMUwxMC4xNDY0IDYuODUzNTVMOSA1LjcwNzExVjEyLjI5MjlMMTAuMTQ2NCAxMS4xNDY0TDEwLjUgMTAuNzkyOUwxMS4yMDcxIDExLjVMMTAuODUzNiAxMS44NTM2TDguODUzNTUgMTMuODUzNkw4LjUgMTQuMjA3MUw4LjE0NjQ1IDEzLjg1MzZMNi4xNDY0NSAxMS44NTM2TDUuNzkyODkgMTEuNUw2LjUgMTAuNzkyOUw2Ljg1MzU1IDExLjE0NjRMOCAxMi4yOTI5VjUuNzA3MTFMNi44NTM1NSA2Ljg1MzU1TDYuNSA3LjIwNzExTDUuNzkyODkgNi41TDYuMTQ2NDUgNi4xNDY0NUw4LjE0NjQ1IDQuMTQ2NDVMOC41IDMuNzkyODlaTTMuNSAxNkgzVjE1SDMuNUgxMy41SDE0VjE2SDEzLjVIMy41WiIgZmlsbD0iIzJBMkUzOSIvPg0KPC9zdmc+DQo=',
          },
        ]),
        g = 18,
        y = new Map(),
        w = (function () {
          function e(e, t, i) {
            (this._fontSize = 0),
              (this._preRendered = !1),
              (this._boundingBox = null),
              (this._rect = null),
              (this._padding = null),
              (this._textPoint = null),
              (this._textSizeCache = t),
              (this._data = e),
              (this._fontSize = e.fontSize ? e.fontSize : 12),
              (this._lineSpacing =
                Object(d.isNumber)(this._data.lineSpacing) &&
                this._data.lineSpacing
                  ? this._data.lineSpacing
                  : 0),
              (e.lines = this._lines =
                null === e.text
                  ? []
                  : Object(o.wordWrap)(
                      e.text,
                      this.fontStyle(),
                      e.wordWrapWidth,
                    )),
              (this._hittest =
                i || new l.HitTestResult(l.HitTestResult.MOVEPOINT));
          }
          return (
            (e.prototype.fontStyle = function () {
              return (
                (this._data.bold ? 'bold ' : '') +
                (this._data.italic ? 'italic ' : '') +
                this._fontSize +
                'px ' +
                this._data.font
              );
            }),
            (e.prototype.draw = function (e, t) {
              if (0 === this._data.points.length || null === this._data.text)
                return { width: 0 };
              this._preRender();
              var i = this._fontSize + this._lineSpacing;
              (e.textBaseline = 'top'), (e.font = this.fontStyle());
              var r = Object(a.ensureNotNull)(this._rect);
              if (this._rect) {
                if (
                  (('right' !== this._data.horzAlign &&
                    'center' !== this._data.horzAlign) ||
                    (!0 !== this._data.doNotAlignText &&
                      (e.textAlign =
                        'right' === this._data.horzAlign ? 'end' : 'center')),
                  this._data.backgroundRoundRect
                    ? (Object(h.drawRoundRect)(
                        e,
                        r.x,
                        r.y,
                        r.w,
                        r.h,
                        this._data.backgroundRoundRect,
                      ),
                      (e.fillStyle = this._data.backgroundColor),
                      e.fill(),
                      (e.globalAlpha = 1))
                    : ((e.fillStyle = this._data.backgroundColor),
                      e.fillRect(r.x, r.y, r.w, r.h),
                      (e.globalAlpha = 1)),
                  !s.isIE && this._data.icons)
                )
                  for (
                    var n = 0,
                      o = Math.ceil((g - this._fontSize) / 2),
                      l = Object(a.ensureNotNull)(this._padding),
                      d = 0,
                      c = this._data.icons;
                    d < c.length;
                    d++
                  ) {
                    var p = c[d],
                      u = Math.round(r.x + l.left),
                      _ = Math.round(r.y + l.top + i * n - o);
                    this._drawIcon(e, u, _, p, Boolean(this._data.isDark), t),
                      (n += 1);
                  }
              } else
                'right' === this._data.horzAlign
                  ? (e.textAlign = 'end')
                  : 'center' === this._data.horzAlign &&
                    (e.textAlign = 'center');
              var f = Object(a.ensureNotNull)(this._textPoint),
                v = f.x,
                y = f.y;
              e.fillStyle = this._data.color;
              for (var w = 0, x = this._lines; w < x.length; w++) {
                var m = x[w];
                e.fillText(m, v, y), (y += i);
              }
              return { width: r.w + 2 };
            }),
            (e.prototype.hitTest = function (e) {
              return 0 === this._data.points.length
                ? null
                : (this._preRender(),
                  this._boundingBox &&
                  Object(n.pointInBox)(e, this._boundingBox)
                    ? this._hittest
                    : null);
            }),
            (e.prototype._preRender = function () {
              if (!this._preRendered) {
                var e = (function () {
                    if (null !== _) return _;
                    var e = Object(c.createDisconnectedCanvas)(
                      document,
                      new c.Size(0, 0),
                    );
                    return (_ = Object(c.getPrescaledContext2D)(e));
                  })(),
                  t = this._data.points[0].x + (this._data.offsetX || 0),
                  i = t,
                  n = this._data.points[0].y + (this._data.offsetY || 0),
                  a = n,
                  o = this._fontSize,
                  l = this._lineSpacing,
                  h = (o + l) * this._lines.length - l;
                (e.textBaseline = 'top'), (e.font = this.fontStyle());
                var d,
                  p = [];
                if (this._data.wordWrapWidth) {
                  d = this._data.wordWrapWidth;
                  for (var u = 0; u < this._lines.length; u++)
                    p.push(this._data.wordWrapWidth);
                } else {
                  d = 0;
                  for (u = 0; u < this._lines.length; u++) {
                    var f = e.measureText(this._lines[u]).width;
                    p.push(f), (d = Math.max(d, f));
                  }
                }
                var v = {
                    top: this._data.paddingTop,
                    right: this._data.paddingRight,
                    bottom: this._data.paddingBottom,
                    left: this._data.paddingLeft,
                  },
                  y = {
                    x: Math.floor(t),
                    y: Math.floor(n),
                    w: Math.ceil(d + v.left + v.right),
                    h: Math.ceil(h + v.top + v.bottom),
                  };
                if (
                  ((i += v.left), (a += v.top), !s.isIE && this._data.icons)
                ) {
                  var w =
                    void 0 !== this._data.textPadding
                      ? this._data.textPadding
                      : Math.round(o / 2);
                  (i += g + w), (y.w += g + w);
                }
                if (
                  'bottom' === this._data.vertAlign ||
                  'middle' === this._data.vertAlign
                ) {
                  var x =
                    'middle' === this._data.vertAlign
                      ? n - y.h / 2
                      : n - y.h - (y.y - n);
                  (a += x - y.y), (y.y = x);
                }
                if (
                  'right' === this._data.horzAlign ||
                  'center' === this._data.horzAlign
                ) {
                  var m =
                    'center' === this._data.horzAlign
                      ? t - y.w / 2
                      : t - y.w - (y.x - t);
                  (i += m - y.x),
                    (y.x = m),
                    !0 !== this._data.doNotAlignText &&
                      ('right' === this._data.horzAlign
                        ? ((e.textAlign = 'end'), (i += d))
                        : ((e.textAlign = 'center'), (i += d / 2)));
                }
                y.w % 2 != 0 && y.w++,
                  (y.x += 0.5),
                  (y.y += 0.5),
                  (this._boundingBox = Object(r.box)(
                    new r.Point(y.x, y.y),
                    new r.Point(y.x + y.w, y.y + y.h),
                  )),
                  (this._rect = y),
                  (this._padding = v),
                  (this._textPoint = { x: i, y: a }),
                  this._textSizeCache && (this._textSizeCache.widths = p),
                  (this._preRendered = !0);
              }
            }),
            (e.prototype._drawIcon = function (e, t, i, r, n, o) {
              var l = '' + r + this._data.isDark + o.pixelRatio,
                h = y.get(l);
              if (!h) {
                ((h = document.createElement('canvas')).width =
                  g * o.pixelRatio),
                  (h.height = g * o.pixelRatio),
                  (h.style.width = g + 'px'),
                  (h.style.height = g + 'px');
                var d = Object(a.ensureNotNull)(h.getContext('2d'));
                d.setTransform(1, 0, 0, 1, 0, 0),
                  s.isEdge || d.scale(o.pixelRatio, o.pixelRatio);
                var c = v.getIcon(r, n ? 'dark' : 'light');
                c.ready() && (d.drawImage(c.image(), 0, 0), y.set(l, h));
              }
              e.drawImage(h, t - 0.5, i - 0.5, g, g);
            }),
            e
          );
        })();
    },
    '6MfG': function (e, t, i) {
      'use strict';
      var r = i('aB9a').LineSourcePaneView,
        n = i('pJOz').TrendLineRenderer,
        a = i('/S7V').TriangleRenderer,
        s = i('qgcf').TextRenderer,
        o = i('Zy3/').CompositeRenderer,
        l = i('zXvd').NumericFormatter,
        h = i('a7Ha').LineEnd;
      function d(e, t) {
        r.call(this, e, t),
          (this._numericFormatter = new l()),
          (this._bcRetracementTrend = new n()),
          (this._xdRetracementTrend = new n()),
          (this._mainTriangleRenderer = new a()),
          (this._triangleRendererPoints234 = new a()),
          (this._abLabelRenderer = new s()),
          (this._bcLabelRenderer = new s()),
          (this._cdLabelRenderer = new s()),
          (this._xdLabelRenderer = new s()),
          (this._textRendererALabel = new s()),
          (this._textRendererBLabel = new s()),
          (this._textRendererCLabel = new s()),
          (this._textRendererDLabel = new s()),
          (this._textRendererXLabel = new s()),
          (this._renderer = null);
      }
      inherit(d, r),
        (d.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (d.prototype._updateBaseData = function () {
          var e, t, i, r, n;
          this._source.points().length >= 3 &&
            ((e = this._source.points()[0]),
            (t = this._source.points()[1]),
            (i = this._source.points()[2]),
            (this._ABRetracement =
              Math.round(
                1e3 * Math.abs((i.price - t.price) / (t.price - e.price)),
              ) / 1e3)),
            this._source.points().length >= 4 &&
              ((r = this._source.points()[3]),
              (this._BCRetracement =
                Math.round(
                  1e3 * Math.abs((r.price - i.price) / (i.price - t.price)),
                ) / 1e3)),
            this._source.points().length >= 5 &&
              ((n = this._source.points()[4]),
              (this._CDRetracement =
                Math.round(
                  1e3 * Math.abs((n.price - r.price) / (r.price - i.price)),
                ) / 1e3),
              (this._XDRetracement =
                Math.round(
                  1e3 * Math.abs((n.price - t.price) / (t.price - e.price)),
                ) / 1e3));
        }),
        (d.prototype._updateImpl = function () {
          if (
            (r.prototype._updateImpl.call(this),
            this._updateBaseData(),
            (this._renderer = null),
            !(this._points.length < 2))
          ) {
            var e = this._source.properties(),
              t = new o(),
              i = [
                this._points[0],
                this._points[1],
                this._points.length < 3 ? this._points[1] : this._points[2],
              ],
              n = this,
              a = function (t, i) {
                return {
                  points: [t],
                  text: i,
                  color: e.textcolor.value(),
                  vertAlign: 'middle',
                  horzAlign: 'center',
                  font: e.font.value(),
                  offsetX: 0,
                  offsetY: 0,
                  bold: e.bold && e.bold.value(),
                  italic: e.italic && e.italic.value(),
                  fontsize: e.fontsize.value(),
                  backgroundColor: n._source.properties().color.value(),
                  backgroundRoundRect: 4,
                };
              },
              s = function (e, t) {
                return {
                  points: [e, t],
                  width: n._model.timeScale().width(),
                  height: n._source.priceScale().height(),
                  color: n._source.properties().color.value(),
                  linewidth: 1,
                  linestyle: CanvasEx.LINESTYLE_SOLID,
                  extendleft: !1,
                  extendright: !1,
                  leftend: h.Normal,
                  rightend: h.Normal,
                };
              };
            if (
              (((l = {}).points = i),
              (l.color = e.color.value()),
              (l.linewidth = e.linewidth.value()),
              (l.backcolor = e.backgroundColor.value()),
              (l.fillBackground = e.fillBackground.value()),
              (l.transparency = e.transparency.value()),
              this._mainTriangleRenderer.setData(l),
              t.append(this._mainTriangleRenderer),
              this._points.length > 3)
            ) {
              var l;
              i = [
                this._points[2],
                this._points[3],
                5 === this._points.length ? this._points[4] : this._points[3],
              ];
              ((l = {}).points = i),
                (l.color = e.color.value()),
                (l.linewidth = e.linewidth.value()),
                (l.backcolor = e.backgroundColor.value()),
                (l.fillBackground = e.fillBackground.value()),
                (l.transparency = e.transparency.value()),
                this._triangleRendererPoints234.setData(l),
                t.append(this._triangleRendererPoints234);
            }
            if (this._points.length >= 3) {
              var d = a(
                (c = this._points[0].add(this._points[2]).scaled(0.5)),
                this._numericFormatter.format(this._ABRetracement),
              );
              this._abLabelRenderer.setData(d), t.append(this._abLabelRenderer);
            }
            if (this._points.length >= 4) {
              var c = this._points[1].add(this._points[3]).scaled(0.5),
                p = s(this._points[1], this._points[3]);
              this._bcRetracementTrend.setData(p),
                t.append(this._bcRetracementTrend);
              d = a(c, this._numericFormatter.format(this._BCRetracement));
              this._bcLabelRenderer.setData(d), t.append(this._bcLabelRenderer);
            }
            if (this._points.length >= 5) {
              d = a(
                (c = this._points[2].add(this._points[4]).scaled(0.5)),
                this._numericFormatter.format(this._CDRetracement),
              );
              this._cdLabelRenderer.setData(d), t.append(this._cdLabelRenderer);
              p = s(this._points[0], this._points[4]);
              this._xdRetracementTrend.setData(p),
                t.append(this._xdRetracementTrend);
              d = a(
                (c = this._points[0].add(this._points[4]).scaled(0.5)),
                this._numericFormatter.format(this._XDRetracement),
              );
              this._xdLabelRenderer.setData(d), t.append(this._xdLabelRenderer);
            }
            d = a(this._points[0], 'X');
            this._points[1].y > this._points[0].y
              ? ((d.vertAlign = 'bottom'), (d.offsetY = 5))
              : ((d.vertAlign = 'top'), (d.offsetY = 5)),
              this._textRendererXLabel.setData(d),
              t.append(this._textRendererXLabel);
            d = a(this._points[1], 'A');
            if (
              (this._points[1].y < this._points[0].y
                ? ((d.vertAlign = 'bottom'), (d.offsetY = 5))
                : ((d.vertAlign = 'top'), (d.offsetY = 5)),
              this._textRendererALabel.setData(d),
              t.append(this._textRendererALabel),
              this._points.length > 2)
            ) {
              d = a(this._points[2], 'B');
              this._points[2].y < this._points[1].y
                ? ((d.vertAlign = 'bottom'), (d.offsetY = 5))
                : ((d.vertAlign = 'top'), (d.offsetY = 5)),
                this._textRendererBLabel.setData(d),
                t.append(this._textRendererBLabel);
            }
            if (this._points.length > 3) {
              d = a(this._points[3], 'C');
              this._points[3].y < this._points[2].y
                ? ((d.vertAlign = 'bottom'), (d.offsetY = 5))
                : ((d.vertAlign = 'top'), (d.offsetY = 5)),
                this._textRendererCLabel.setData(d),
                t.append(this._textRendererCLabel);
            }
            if (this._points.length > 4) {
              d = a(this._points[4], 'D');
              this._points[4].y < this._points[3].y
                ? ((d.vertAlign = 'bottom'), (d.offsetY = 5))
                : ((d.vertAlign = 'top'), (d.offsetY = 5)),
                this._textRendererDLabel.setData(d),
                t.append(this._textRendererDLabel);
            }
            this.addAnchors(t), (this._renderer = t);
          }
        }),
        (t.Pattern5PaneView = d);
    },
    '6sSH': function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('IjC5').RectangleRenderer,
        a = i('pJOz').TrendLineRenderer,
        s = i('cjIn').PaneRendererCachedImage,
        o = i('VdBB').HitTestResult,
        l = i('Zy3/').CompositeRenderer,
        h = i('a7Ha').LineEnd,
        d = i('d1Pk').fibLevelCoordinate,
        c = i('NCfL').LineToolPaneViewWithLevelledTextCache,
        p = i('xUGI');
      function u(e, t, i) {
        p.call(this, e, t, i);
      }
      function _(e, t) {
        c.call(this, e, t),
          (this._rendererCache = {}),
          (this._trendLineRendererPoints12 = new a()),
          (this._trendLineRendererPoints23 = new a()),
          (this._renderer = null);
      }
      inherit(u, p),
        (u.prototype._selectStartPrice = function (e) {
          return e.points()[2].price;
        }),
        (u.prototype.priceRange = function (e, t) {
          var i = this.points(e),
            r = i[0],
            n = i[1],
            a = t ? r.price - n.price : n.price - r.price;
          if (!this._calculateLogLevels(e)) return { price: a };
          var s = e.priceScale(),
            o = e.ownerSource().firstValue(),
            l = s.priceToCoordinate(r.price, o),
            h = s.priceToCoordinate(n.price, o);
          return { price: a, coordinate: t ? l - h : h - l };
        }),
        inherit(_, c),
        (_.prototype.getCacheRects = function (e, t) {
          c.prototype.getCacheRects.call(this, e, t);
          var i = this._cacheState.preparedCells.cells[
            this._levels[t].index - 1
          ];
          if (i) {
            var n = this._points[1],
              a = this._points[2],
              s = Math.min(n.x, a.x),
              o = Math.max(n.x, a.x);
            (n = new r(s, this._levels[t].y)),
              (a = new r(o, this._levels[t].y));
            var l,
              h = this._source.properties(),
              d = h.extendLines.value() ? this._model.timeScale().width() : o;
            switch (h.horzLabelsAlign.value()) {
              case 'left':
                l = n;
                break;
              case 'center':
                ((l = n.add(a).scaled(0.5)).x += i.width / 2),
                  (l.x = Math.round(l.x));
                break;
              case 'right':
                h.extendLines.value()
                  ? (l = new r(d - 4, this._levels[t].y))
                  : (((l = new r(d + 4, this._levels[t].y)).x += i.width),
                    (l.x = Math.round(l.x)));
            }
            var p = {
                left: i.left,
                top: this._cache.topByRow(this._cacheState.row),
                width: i.width,
                height: this._cache.rowHeight(this._cacheState.row),
              },
              u = {
                left: l.x - p.width,
                top: l.y,
                width: i.width,
                height: p.height,
              },
              _ = h.vertLabelsAlign.value();
            return (
              'middle' === _ && (u.top -= u.height / 2),
              'bottom' === _ && (u.top -= u.height),
              { cacheRect: p, targetRect: u }
            );
          }
        }),
        (_.prototype._createCache = function (e) {
          return new u(
            this._source.properties().fibLevelsBasedOnLogScale,
            this._source.levelsCount(),
            e,
          );
        }),
        (_.prototype._updateImpl = function () {
          if (
            (c.prototype._updateImpl.call(this),
            (this._renderer = null),
            3 === this._source.points().length)
          ) {
            var e = this._source.priceScale();
            if (!e || e.isEmpty() || this._model.timeScale().isEmpty()) return;
            var t = this._source.ownerSource().firstValue();
            if (null == t) return;
            var i = this._source.points()[0],
              p = this._source.points()[1],
              u = this._source.points()[2],
              _ = !1;
            (M = this._source.properties()).reverse &&
              M.reverse.value() &&
              (_ = M.reverse.value()),
              (this._levels = []);
            var f,
              v,
              g = _ ? i.price : p.price,
              y = _ ? p.price : i.price,
              w = g - y,
              x = e.isLog() && M.fibLevelsBasedOnLogScale.value();
            if (x)
              (f = e.priceToCoordinate(g, t) - e.priceToCoordinate(y, t)),
                (v = e.priceToCoordinate(u.price, t));
            for (
              var m = { price: u.price, coordinate: v },
                b = { price: w, coordinate: f },
                R = this._source.levelsCount(),
                T = 1;
              T <= R;
              T++
            ) {
              var S = M['level' + T];
              if (S.visible.value()) {
                var P = S.coeff.value(),
                  L = S.color.value(),
                  C = d(m, b, P, e, t, x);
                this._levels.push({
                  color: L,
                  y: C,
                  linewidth: M.levelsStyle.linewidth.value(),
                  linestyle: M.levelsStyle.linestyle.value(),
                  index: T,
                });
              }
            }
          }
          if (!(this._points.length < 2)) {
            var M,
              I = new l();
            (i = this._points[0]), (p = this._points[1]);
            if ((M = this._source.properties()).trendline.visible.value()) {
              var O = {
                points: [i, p],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: M.trendline.color.value(),
                linewidth: M.trendline.linewidth.value(),
                linestyle: M.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: h.Normal,
                rightend: h.Normal,
              };
              this._trendLineRendererPoints12.setData(O),
                I.append(this._trendLineRendererPoints12);
            }
            if (this._points.length < 3)
              return this.addAnchors(I), void (this._renderer = I);
            u = this._points[2];
            if (M.trendline.visible.value()) {
              O = {
                points: [p, u],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: M.trendline.color.value(),
                linewidth: M.trendline.linewidth.value(),
                linestyle: M.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: h.Normal,
                rightend: h.Normal,
              };
              this._trendLineRendererPoints23.setData(O),
                I.append(this._trendLineRendererPoints23);
            }
            var D = Math.min(u.x, p.x),
              k = Math.max(u.x, p.x),
              B = M.fillBackground.value(),
              N = M.transparency.value(),
              A = M.extendLinesLeft.value(),
              z = M.extendLines.value();
            if (B)
              for (T = 0; T < this._levels.length; T++)
                if (T > 0 && B) {
                  var E = this._levels[T - 1],
                    V =
                      ((i = new r(D, this._levels[T].y)),
                      (p = new r(k, E.y)),
                      {});
                  (V.points = [i, p]),
                    (V.color = this._levels[T].color),
                    (V.linewidth = 0),
                    (V.backcolor = this._levels[T].color),
                    (V.fillBackground = !0),
                    (V.transparency = N),
                    (V.extendLeft = A),
                    (V.extendRight = z);
                  var j = new n(void 0, void 0, !0);
                  j.setData(V), I.append(j);
                }
            var H = D,
              W = k;
            H === W && (A && (H -= 1), z && (W += 1));
            for (T = 0; T < this._levels.length; T++) {
              O = {
                points: [
                  (i = new r(H, this._levels[T].y)),
                  (p = new r(W, this._levels[T].y)),
                ],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: this._levels[T].color,
                linewidth: this._levels[T].linewidth,
                linestyle: this._levels[T].linestyle,
                extendleft: A,
                extendright: z,
                leftend: h.Normal,
                rightend: h.Normal,
              };
              var F = new a();
              if (
                (F.setData(O),
                F.setHitTest(new o(o.MOVEPOINT, null, this._levels[T].index)),
                I.append(F),
                M.showCoeffs.value() || M.showPrices.value())
              ) {
                var Y = new s(this, T);
                I.append(Y);
              }
            }
            this.addAnchors(I), (this._renderer = I);
          }
        }),
        (_.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.TrendBasedFibExtensionPaneView = _);
    },
    '8GeE': function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('hfHJ'),
        a = n.rotationMatrix,
        s = n.transformPoint,
        o = i('aB9a').LineSourcePaneView,
        l = i('aB9a').thirdPointCursorType,
        h = i('pJOz').TrendLineRenderer,
        d = i('VdBB').HitTestResult,
        c = i('Zy3/').CompositeRenderer,
        p = i('a7Ha').LineEnd,
        u = i('ikwP').calcTextHorizontalShift,
        _ = i('Ialn').isRtl,
        f = i('//lt').PaneCursorType,
        v = i('cPgM').ScaledPaneRenderer;
      function g(e) {
        v.call(this), (this._data = null), (this._cache = e);
      }
      function y(e, t) {
        o.call(this, e, t),
          (this._cache = {}),
          (this._dashRenderer = new h()),
          this._dashRenderer.setHitTest(null),
          (this._iconRenderer = new g(this._cache)),
          (this._renderer = null);
      }
      inherit(g, v),
        (g.prototype.setData = function (e) {
          this._data = e;
        }),
        (g.prototype._drawImpl = function (e) {
          if (null != this._data) {
            var t = String.fromCharCode(this._data.icon);
            e.font = this._data.size + 'px FontAwesome';
            var i = e.measureText(t).width;
            e.textBaseline = 'middle';
            var r = this._data.point;
            e.translate(r.x, r.y),
              e.rotate(this._data.angle - Math.PI / 2),
              e.scale(this._data.scale, 1);
            var n = 65536 * this._data.icon + this._data.size;
            e.textAlign = _() ? 'right' : 'left';
            var a = u(e, i);
            (this._cache[n] = i),
              this._data.selected &&
                ((e.fillStyle = 'rgba(80, 80, 80, 0.2)'),
                e.fillRect(
                  -this._cache[n] / 2,
                  -this._data.size / 2,
                  this._cache[n],
                  this._data.size,
                )),
              (e.fillStyle = this._data.color),
              e.fillText(t, -this._cache[n] / 2 + a, 0);
          }
        }),
        (g.prototype.hitTest = function (e) {
          if (null === this._data) return null;
          var t = 65536 * this._data.icon + this._data.size,
            i = this._cache[t] * this._data.scale,
            r = a(-this._data.angle),
            n = e.subtract(this._data.point);
          return (
            (n = s(r, n)),
            Math.abs(n.y) <= i / 2 && Math.abs(n.x) <= this._data.size / 2
              ? new d(d.MOVEPOINT)
              : null
          );
        }),
        inherit(y, o),
        (y.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (y.prototype._updateImpl = function () {
          if (
            (o.prototype._updateImpl.call(this),
            (this._renderer = null),
            !(this._points.length < 1))
          ) {
            var e = new c(),
              t = this._source.properties(),
              i = {
                point: this._points[0],
                color: t.color.value(),
                size: t.size.value(),
                icon: t.icon.value(),
                angle: t.angle.value(),
                scale: t.scale.value(),
                selected: this.areAnchorsVisible(),
              },
              n = this._model,
              h = this._source;
            this._iconRenderer.setData(i), e.append(this._iconRenderer);
            var d = 65536 * i.icon + i.size,
              u = this._cache[d],
              _ = i.size,
              v = this._points[0],
              g = t.scale.value(),
              y = this._source.getAnchorLimit(),
              w = new r(Math.max(y, _) / 2, 0),
              x = new r(0, Math.max(y, g * u) / 2),
              m = a(t.angle.value());
            (w = s(m, w)), (x = s(m, x));
            var b = v.add(w);
            b.data = 0;
            var R = v.subtract(w);
            R.data = 1;
            var T = v.add(x);
            (T.data = 2), (T.square = !0);
            var S = v.subtract(x);
            if (((S.data = 3), (S.square = !0), this.areAnchorsVisible())) {
              i = {
                points: [b, R],
                width: n.timeScale().width(),
                height: h.priceScale().height(),
                color: '#808080',
                linewidth: 1,
                linestyle: CanvasEx.LINESTYLE_DASHED,
                extendleft: !1,
                extendright: !1,
                leftend: p.Normal,
                rightend: p.Normal,
              };
              this._dashRenderer.setData(i), e.append(this._dashRenderer);
            }
            var P = l(b, R),
              L = [f.Default, f.Default, P, P];
            e.append(
              this.createLineAnchor({
                points: [b, R, T, S],
                pointsCursorType: L,
              }),
            ),
              (this._renderer = e);
          }
        }),
        (t.IconPaneView = y);
    },
    '8MBc': function (e, t, i) {
      'use strict';
      var r = i('aB9a').LineSourcePaneView,
        n = i('pJOz').TrendLineRenderer,
        a = i('VdBB').HitTestResult,
        s = i('Zy3/').CompositeRenderer,
        o = i('a7Ha').LineEnd,
        l = i('cPgM').ScaledPaneRenderer;
      function h() {
        l.call(this), (this._data = null);
      }
      function d(e, t) {
        r.call(this, e, t),
          (this._trendLineRenderer = new n()),
          (this._spiralRenderer = new h()),
          (this._renderer = null);
      }
      inherit(h, l),
        (h.prototype.setData = function (e) {
          this._data = e;
        }),
        (h.prototype._fibNumbers = function () {
          return [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
        }),
        (h.prototype._continiusFib = function (e) {
          var t = this._fibNumbers(),
            i = Math.floor(e),
            r = Math.ceil(e);
          if (r >= t.length) return null;
          var n = e - i;
          n = Math.pow(n, 1.15);
          var a = t[r] - t[i];
          return t[i] + a * n;
        }),
        (h.prototype.hitTest = function (e) {
          if (null === this._data) return null;
          var t = this._data.points[0],
            i = this._data.points[1].subtract(t),
            r = e.subtract(t),
            n = i.normalized(),
            s = n.transposed(),
            o = r.normalized(),
            l = Math.acos(n.dotProduct(o));
          Math.asin(s.dotProduct(o)) < 0 && (l = 2 * Math.PI - l);
          for (
            var h = this._data.counterclockwise ? -1 : 1, d = r.length(), c = 0;
            c < 4;
            c++
          ) {
            var p = (h * l) / (0.5 * Math.PI),
              u = this._continiusFib(p + 4 * c);
            if (null !== (u = (u * i.length()) / 5) && Math.abs(u - d) < 5)
              return new a(a.MOVEPOINT);
          }
          return null;
        }),
        (h.prototype._drawImpl = function (e) {
          if (null !== this._data) {
            (e.lineCap = 'round'), (e.strokeStyle = this._data.color);
            var t = this._data.points[0],
              i = this._data.points[1];
            e.translate(t.x, t.y);
            var r = i.subtract(t),
              n = r.length();
            r = r.normalized();
            var a = Math.acos(r.x);
            Math.asin(r.y) < 0 && (a = 2 * Math.PI - a),
              e.rotate(a),
              e.scale(n / 5, n / 5),
              (e.lineWidth = this._data.linewidth),
              CanvasEx.setLineStyle(e, this._data.linestyle);
            var s = Math.PI / 100;
            e.moveTo(0, 0);
            for (
              var o = this._data.counterclockwise ? -1 : 1, l = 0;
              l < 50 * (this._fibNumbers().length - 1);
              l++
            ) {
              var h = o * l * s,
                d = this._continiusFib(l / 50),
                c = Math.cos(h) * d,
                p = Math.sin(h) * d;
              e.lineTo(c, p);
            }
            e.scale(5 / n, 5 / n), e.rotate(-a), e.stroke();
          }
        }),
        inherit(d, r),
        (d.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (d.prototype._updateImpl = function () {
          if (
            (r.prototype._updateImpl.call(this),
            (this._renderer = null),
            !(this._floatPoints.length < 2))
          ) {
            var e,
              t = new s();
            ((e = {}).points = this._floatPoints),
              (e.width = this._model.timeScale().width()),
              (e.height = this._source.priceScale().height()),
              (e.color = this._source.properties().linecolor.value()),
              (e.linewidth = this._source.properties().linewidth.value()),
              (e.linestyle = this._source.properties().linestyle.value()),
              (e.extendleft = !1),
              (e.extendright = !0),
              (e.leftend = o.Normal),
              (e.rightend = o.Normal),
              this._trendLineRenderer.setData(e),
              t.append(this._trendLineRenderer),
              ((e = {}).points = this._floatPoints),
              (e.width = this._model.timeScale().width()),
              (e.height = this._source.priceScale().height()),
              (e.color = this._source.properties().linecolor.value()),
              (e.linewidth = this._source.properties().linewidth.value()),
              (e.linestyle = this._source.properties().linestyle.value()),
              (e.counterclockwise = this._source
                .properties()
                .counterclockwise.value()),
              this._spiralRenderer.setData(e),
              t.append(this._spiralRenderer),
              this.addAnchors(t),
              (this._renderer = t);
          }
        }),
        (t.FibSpiralPaneView = d);
    },
    '8xAY': function (e, t, i) {
      'use strict';
      var r;
      i.r(t),
        i.d(t, 'LabelSettings', function () {
          return r;
        }),
        (function (e) {
          (e.offset = 8),
            (e.fontSize = 12),
            (e.lineSpacing = 16),
            (e.rectRadius = 4),
            (e.bgColorLight = 'rgba(227,242,253,0.9)'),
            (e.bgColorDark = 'rgba(67,70,81,0.9)'),
            (e.textColorLight = '#2A2E39'),
            (e.textColorDark = '#F8F9FD'),
            (e.textPadding = 10),
            (e.paddingTopBottom = 13),
            (e.paddingLeftRight = 10);
        })(r || (r = {}));
    },
    '9FRF': function (e, t, i) {
      'use strict';
      var r = i('aB9a').LineSourcePaneView,
        n = i('NN6M').ParallelChannelRenderer,
        a = i('Zy3/').CompositeRenderer,
        s = i('//lt').PaneCursorType,
        o = [s.Default, s.Default, s.VerticalResize];
      function l(e, t) {
        r.call(this, e, t),
          (this._channelRenderer = new n()),
          (this._renderer = null),
          (this._p3 = null),
          (this._p4 = null);
      }
      inherit(l, r),
        (l.prototype._updateImpl = function () {
          if (
            (r.prototype._updateImpl.call(this),
            (this._renderer = null),
            this._source.priceScale() &&
              !this._source.priceScale().isEmpty() &&
              0 !== this._source.points().length)
          ) {
            if (
              (this._source._priceOffset || this._source.calculatePriceDiff(),
              3 === this._points.length && this._source._priceOffset)
            ) {
              var e = this._points[0],
                t = this._points[1],
                i = this._source._priceOffset + this._source.points()[0].price,
                n = this._source._priceOffset + this._source.points()[1].price;
              (this._p3 = e.clone()), (this._p4 = t.clone());
              var s = this._source.priceScale(),
                l = this._source.ownerSource().firstValue();
              if (s.isLog()) {
                var h = 0.5 * (i + n) - this._source._priceOffset,
                  d = 0.5 * (i + n),
                  c = this._source.priceScale().priceToCoordinate(h, l),
                  p = this._source.priceScale().priceToCoordinate(d, l) - c;
                (this._p3.y += p), (this._p4.y += p);
              } else
                (this._p3.y = this._source
                  .priceScale()
                  .priceToCoordinate(i, l)),
                  (this._p4.y = this._source
                    .priceScale()
                    .priceToCoordinate(n, l));
            }
            var u = { points: [] };
            this._points.length > 1 &&
              (u.points.push(this._points[0]), u.points.push(this._points[1])),
              this._points.length > 2 &&
                null !== this._p3 &&
                null !== this._p4 &&
                (u.points.push(this._p3), u.points.push(this._p4)),
              (u.color = this._source.properties().linecolor.value()),
              (u.width = this._model.timeScale().width()),
              (u.height = this._source.priceScale().height());
            var _ = this._source.properties();
            (u.linewidth = _.linewidth.value()),
              (u.linestyle = _.linestyle.value()),
              (u.extendleft = _.extendLeft.value()),
              (u.extendright = _.extendRight.value()),
              (u.fillBackground = _.fillBackground.value()),
              (u.backcolor = _.backgroundColor.value()),
              (u.transparency = _.transparency.value()),
              (u.showMidline = _.showMidline.value()),
              (u.midlinewidth = _.midlinewidth.value()),
              (u.midlinestyle = _.midlinestyle.value()),
              (u.midcolor = _.midlinecolor.value()),
              (u.fillBackground = _.fillBackground.value()),
              (u.hittestOnBackground = !0),
              this._channelRenderer.setData(u);
            var f = new a();
            f.append(this._channelRenderer);
            var v = [];
            if (
              (this._points[0] && v.push(this._points[0]),
              this._points[1] && v.push(this._points[1]),
              this._p3)
            ) {
              var g = this._p3.add(this._p4).scaled(0.5);
              (g.data = v.length), (g.square = !0), v.push(g);
            }
            var y = 3 === this._points.length && !this._p3;
            this._model.lineBeingCreated() !== this._source || y || v.pop(),
              f.append(
                this.createLineAnchor({ points: v, pointsCursorType: o }),
              ),
              (this._renderer = f);
          }
        }),
        (l.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.ParallelChannelPaneView = l);
    },
    '9XXR': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'splitThousands', function () {
          return n;
        });
      var r = i('ivNn');
      function n(e, t) {
        void 0 === t && (t = '&nbsp;');
        var i = e + '';
        -1 !== i.indexOf('e') &&
          (i = (function (e) {
            return Object(r.fixComputationError)(e)
              .toFixed(10)
              .replace(/\.?0+$/, '');
          })(Number(e)));
        var n = i.split('.');
        return (
          n[0].replace(/\B(?=(\d{3})+(?!\d))/g, t) + (n[1] ? '.' + n[1] : '')
        );
      }
    },
    Ay2m: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('LxhU').Interval,
        s = i('VdBB').HitTestResult,
        o = i('Zy3/').CompositeRenderer,
        l = i('UfPO'),
        h = i('Hr11'),
        d = i('GH0z').PercentageFormatter,
        c = i('gQ5K').DateFormatter,
        p = i('4kQX').TimeFormatter,
        u = i('nda6').TimeSpanFormatter,
        _ = i('Tmoa'),
        f = i('08i5'),
        v = i('ikwP').calcTextHorizontalShift,
        g = i('Ialn').isRtl,
        y = i('jFln').drawRoundRect,
        w = i('XlJ7').makeFont,
        x = i('cPgM').ScaledPaneRenderer,
        m = i('Ialn'),
        b = m.forceLTRStr,
        R = m.startWithLTR,
        T = i('zDbI').CHART_FONT_FAMILY;
      function S() {
        x.call(this),
          (this._data = null),
          (this._font = T),
          (this._targetFontSize1 = 14),
          (this._targetFontSize2 = 11),
          (this._sourceFontSize1 = 12),
          (this._sourceFontSize2 = 10),
          (this._arrowOffset = 6),
          (this._arrowWidth = 5),
          (this._arrowHeight = 5),
          (this._radius = 3),
          (this._sourceWidth = void 0),
          (this._sourceHeight = void 0),
          (this._sourceRectLeftOffset = void 0),
          (this._targetWidth = void 0),
          (this._targetHeight = void 0),
          (this._targetRectLeftOffset = void 0);
      }
      function P(e, t) {
        n.call(this, e, t),
          (this._clockWhite = l('prediction-clock-white', i('qjB4'))),
          (this._clockBlack = l('prediction-clock-black', i('ukvZ'))),
          (this._successIcon = l('prediction-success-white', i('mJB8'))),
          (this._failureIcon = l('prediction-failure-white', i('V8bI'))),
          (this._percentageFormatter = new d()),
          (this._predictionRenderer = new S()),
          (this._renderer = null);
      }
      inherit(S, x),
        (S.prototype.setData = function (e) {
          this._data = e;
        }),
        (S.prototype.drawBalloon = function (e, t, i, n, a, s) {
          var o = s || 20;
          if ((e.beginPath(), 'down' === a)) {
            var l = new r(
              t.x - o,
              t.y - this._arrowOffset - this._arrowHeight - n,
            );
            return (
              e.moveTo(l.x + this._radius, l.y),
              e.lineTo(l.x + i - this._radius, l.y),
              e.arcTo(l.x + i, l.y, l.x + i, l.y + this._radius, this._radius),
              e.lineTo(l.x + i, l.y + n - this._radius),
              e.arcTo(
                l.x + i,
                l.y + n,
                l.x + i - this._radius,
                l.y + n,
                this._radius,
              ),
              e.lineTo(l.x + o + this._arrowWidth, l.y + n),
              e.lineTo(l.x + o, l.y + n + this._arrowHeight),
              e.lineTo(l.x + o - this._arrowWidth, l.y + n),
              e.lineTo(l.x + this._radius, l.y + n),
              e.arcTo(l.x, l.y + n, l.x, l.y + n - this._radius, this._radius),
              e.lineTo(l.x, l.y + this._radius),
              e.arcTo(l.x, l.y, l.x + this._radius, l.y, this._radius),
              l
            );
          }
          var h = new r(
            t.x - o,
            t.y + this._arrowOffset + this._arrowHeight + n,
          );
          return (
            e.moveTo(h.x + this._radius, h.y),
            e.lineTo(h.x + i - this._radius, h.y),
            e.arcTo(h.x + i, h.y, h.x + i, h.y - this._radius, this._radius),
            e.lineTo(h.x + i, h.y - n + this._radius),
            e.arcTo(
              h.x + i,
              h.y - n,
              h.x + i - this._radius,
              h.y - n,
              this._radius,
            ),
            e.lineTo(h.x + o + this._arrowWidth, h.y - n),
            e.lineTo(h.x + o, h.y - n - this._arrowHeight),
            e.lineTo(h.x + o - this._arrowWidth, h.y - n),
            e.lineTo(h.x + this._radius, h.y - n),
            e.arcTo(h.x, h.y - n, h.x, h.y - n + this._radius, this._radius),
            e.lineTo(h.x, h.y - this._radius),
            e.arcTo(h.x, h.y, h.x + this._radius, h.y, this._radius),
            new r(h.x, h.y - n)
          );
        }),
        (S.prototype.drawTargetLabel = function (e) {
          e.save(), e.translate(0.5, 0.5);
          var t = w(this._targetFontSize1, this._font, 'normal'),
            i = w(this._targetFontSize2, this._font, 'normal'),
            r = this._data.targetLine1,
            n = this._data.targetLine2,
            a = this._data.targetLine3,
            s = this._data.targetLine4;
          e.font = t;
          var o = e.measureText(r).width,
            l = e.measureText(n).width,
            h = e.measureText(' ').width;
          e.font = i;
          var d = e.measureText(a).width,
            c = e.measureText(s).width,
            p = e.measureText(' ').width,
            u = this._data.clockWhite.width;
          (this._targetWidth = Math.max(o + l + h, d + c + u + 2 * p) + 8 + 4),
            (this._targetHeight =
              this._targetFontSize1 + this._targetFontSize2 + 9 + 4);
          var x = this._data.points[1],
            m = x.x + this._targetWidth - e.canvas.width + 5;
          this._targetRectLeftOffset = Math.max(
            20,
            Math.min(this._targetWidth - 15, m),
          );
          var b = 'up' === this._data.direction ? 'down' : 'up',
            R = this.drawBalloon(
              e,
              x,
              this._targetWidth,
              this._targetHeight,
              b,
              this._targetRectLeftOffset,
            );
          (e.fillStyle = _.generateColor(
            this._data.targetBackColor,
            this._data.transparency,
          )),
            e.fill(),
            (e.lineWidth = 2),
            (e.strokeStyle = _.generateColor(
              this._data.targetStrokeColor,
              this._data.transparency,
            )),
            e.stroke();
          e.beginPath(),
            e.arc(x.x, x.y, 3, 0, 2 * Math.PI, !1),
            (e.fillStyle = this._data.centersColor),
            e.fill(),
            (e.textBaseline = 'top'),
            (e.fillStyle = this._data.targetTextColor);
          var T = 2 + R.x + 4,
            S = 2 + R.y + 3,
            P = this._targetWidth - 8 - 4;
          (e.font = t), (e.textAlign = g() ? 'right' : 'left');
          var L = v(e, P - l - h);
          e.fillText(r, T + L, S);
          var C = v(e, P - o);
          e.fillText(n, T + o + h + C, S), (e.font = i);
          var M = S + this._targetFontSize1 + 3,
            I = v(e, P - c - u - p);
          e.fillText(a, T + I, M);
          var O = v(e, P - d - p - u - c);
          e.drawImage(this._data.clockWhite, T + d + p + O, M + 1);
          var D = v(e, P - d - u);
          if ((e.fillText(s, T + d + u + 2 * p + D, M), this._data.status)) {
            var k, B, N, A;
            switch (
              ((e.font = w(this._targetFontSize1, this._font, 'bold')),
              this._data.status)
            ) {
              case f.AlertStatus.Success:
                (k = $.t('SUCCESS')),
                  (B = _.generateColor(
                    this._data.successBackground,
                    this._data.transparency,
                  )),
                  (N = this._data.successTextColor),
                  (A = this._data.successIcon);
                break;
              case f.AlertStatus.Failure:
                (k = $.t('FAILURE')),
                  (B = _.generateColor(
                    this._data.failureBackground,
                    this._data.transparency,
                  )),
                  (N = this._data.failureTextColor),
                  (A = this._data.failureIcon);
            }
            var z = this._targetFontSize1 + 4,
              E = e.measureText(k).width,
              V = Math.round((this._targetWidth - E) / 2),
              j = v(e, E);
            (e.fillStyle = B),
              'up' === this._data.direction
                ? (y(e, R.x - 1, R.y - z - 2, this._targetWidth + 2, z, 5),
                  e.fill(),
                  (e.fillStyle = N),
                  e.fillText(k, R.x + V + j, R.y - z + 1),
                  e.drawImage(
                    A,
                    R.x + V - A.width - 4,
                    R.y - z - 2 + Math.abs(z - A.height) / 2,
                  ))
                : (y(
                    e,
                    R.x - 1,
                    R.y + this._targetHeight + 2,
                    this._targetWidth + 2,
                    z,
                    5,
                  ),
                  e.fill(),
                  (e.fillStyle = N),
                  e.fillText(k, R.x + V + j, R.y + this._targetHeight + 5),
                  e.drawImage(
                    A,
                    R.x + V - A.width - 4,
                    R.y + this._targetHeight + 10 - Math.abs(z - A.height) / 2,
                  )),
              e.restore();
          } else e.restore();
        }),
        (S.prototype.drawStartLabel = function (e) {
          e.save(), e.translate(0.5, 0.5);
          var t = w(this._sourceFontSize1, this._font, 'normal'),
            i = w(this._sourceFontSize2, this._font, 'normal');
          e.font = t;
          var r = e.measureText(this._data.sourceLine1).width;
          e.font = i;
          var n = e.measureText(this._data.sourceLine2).width;
          (this._sourceWidth = Math.max(r, n) + 6 + 4),
            (this._sourceHeight =
              this._sourceFontSize1 + this._sourceFontSize2 + 6 + 4);
          var a = this._data.points[0],
            s = a.x + this._sourceWidth - e.canvas.width + 5;
          this._sourceRectLeftOffset = Math.max(
            20,
            Math.min(this._sourceWidth - 15, s),
          );
          var o = this.drawBalloon(
            e,
            a,
            this._sourceWidth,
            this._sourceHeight,
            this._data.direction,
            this._sourceRectLeftOffset,
          );
          (e.fillStyle = _.generateColor(
            this._data.sourceBackColor,
            this._data.transparency,
          )),
            e.fill(),
            (e.lineWidth = 2),
            (e.strokeStyle = _.generateColor(
              this._data.sourceStrokeColor,
              this._data.transparency,
            )),
            e.stroke(),
            (e.textAlign = g() ? 'right' : 'left'),
            (e.textBaseline = 'top'),
            (e.fillStyle = this._data.sourceTextColor);
          var l = v(e, this._sourceWidth - 6 - 4),
            h = 2 + o.x + 3 + l,
            d = 2 + o.y + 2;
          (e.font = t),
            e.fillText(this._data.sourceLine1, h, d),
            (e.font = i),
            e.fillText(
              this._data.sourceLine2,
              h,
              d + this._sourceFontSize1 + 2,
            );
          e.beginPath(),
            e.arc(a.x, a.y, 3, 0, 2 * Math.PI, !1),
            (e.fillStyle = this._data.centersColor),
            e.fill(),
            e.restore();
        }),
        (S.prototype._drawImpl = function (e) {
          if (!(null === this._data || this._data.points.length < 2)) {
            (e.lineCap = 'butt'),
              (e.strokeStyle = this._data.color),
              (e.lineWidth = this._data.linewidth),
              (e.lineStyle = this._data.linestyle);
            var t = this._data.points[0],
              i = this._data.points[1],
              r = i.subtract(t);
            Math.abs(r.x) < 1 || Math.abs(r.y) < 1
              ? (e.beginPath(),
                e.moveTo(t.x, t.y),
                e.lineTo(i.x, i.y),
                e.stroke())
              : (e.save(),
                e.beginPath(),
                e.translate(t.x, t.y),
                e.scale(1, r.y / r.x),
                e.moveTo(0, 0),
                e.arcTo(r.x, 0, r.x, r.x, Math.abs(r.x)),
                e.lineTo(r.x, r.x),
                e.restore(),
                e.stroke()),
              this.drawTargetLabel(e),
              this.drawStartLabel(e);
            var n = Math.max(8, 4 * this._data.linewidth);
            e.fillStyle = this._data.color;
            var a = r.y < 0 ? 1 : -1;
            if (Math.abs(r.x) < 1 || Math.abs(r.y) < 1)
              var s = Math.atan(r.x / r.y);
            else {
              var o,
                l,
                h = Math.abs(r.x),
                d = Math.abs(r.y),
                c = 0,
                p = Math.PI / 2,
                u = (c + p) / 2;
              if (r.length() > n)
                for (;;) {
                  (o = h * Math.sin(u)), (l = d * (1 - Math.cos(u)));
                  var _ = Math.sqrt((o - h) * (o - h) + (l - d) * (l - d));
                  if (Math.abs(_ - n) < 1) break;
                  _ > n ? (c = u) : (p = u), (u = (c + p) / 2);
                }
              (s = Math.atan((h - o) / (d - l))), r.x * r.y < 0 && (s = -s);
            }
            e.save(),
              e.beginPath(),
              e.translate(i.x, i.y),
              e.rotate(-s),
              e.moveTo(0, 0),
              e.lineTo(-n / 2, a * n),
              e.lineTo(n / 2, a * n),
              e.lineTo(0, 0),
              e.restore(),
              e.fill();
          }
        }),
        (S.prototype.targetLabelHitTest = function (e) {
          if (
            void 0 === this._targetWidth ||
            void 0 === this._targetHeight ||
            void 0 === this._targetRectLeftOffset
          )
            return null;
          var t = this._targetHeight + this._arrowHeight;
          this._data.status && (t += this._targetFontSize1 + 10);
          var i = 'up' === this._data.direction ? -1 : 1,
            r = this._radius,
            n = this._data.points[1],
            a = n.x - this._targetRectLeftOffset,
            o = n.y + i * r,
            l = n.y + i * (t + r),
            h = Math.min(o, l),
            d = Math.max(o, l);
          return e.x >= a &&
            e.x <= a + this._targetWidth &&
            e.y >= h &&
            e.y <= d
            ? new s(s.MOVEPOINT)
            : null;
        }),
        (S.prototype.sourceLabelHitTest = function (e) {
          if (
            void 0 === this._sourceHeight ||
            void 0 === this._sourceWidth ||
            void 0 === this._sourceRectLeftOffset
          )
            return null;
          var t = 'up' === this._data.direction ? 1 : -1,
            i = this._radius,
            r = this._data.points[0],
            n = r.x - this._sourceRectLeftOffset,
            a = r.y + i * t,
            o = r.y + (i + this._sourceHeight + this._arrowHeight) * t,
            l = Math.min(a, o),
            h = Math.max(a, o);
          return e.x >= n &&
            e.x <= n + this._sourceWidth &&
            e.y >= l &&
            e.y <= h
            ? new s(s.MOVEPOINT)
            : null;
        }),
        (S.prototype.hitTest = function (e) {
          if (null === this._data || this._data.points.length < 2) return null;
          var t = this._data.points[0],
            i = this._data.points[1],
            r = i.subtract(t),
            n = ((r = i.subtract(t)), e.subtract(t)),
            a = Math.abs(r.x),
            o = Math.abs(r.y),
            l = h.sign(r.y) * (o - o * Math.sqrt(1 - (n.x * n.x) / (a * a)));
          if (Math.abs(l - n.y) < 3) return new s(s.MOVEPOINT);
          var d = this.targetLabelHitTest(e);
          return d || this.sourceLabelHitTest(e);
        }),
        inherit(P, n),
        (P.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (P.prototype._updateImpl = function () {
          if (
            (n.prototype._updateImpl.call(this),
            (this._renderer = null),
            (this._targetLine1 = ''),
            (this._targetLine2 = ''),
            (this._targetLine3 = ''),
            (this._targetLine4 = ''),
            !(this._source.points().length < 2)) &&
            this._source.priceScale()
          ) {
            var e = this._source.ownerSource().formatter(),
              t = this._source.points()[1],
              i = this._source.points()[0];
            this._targetLine3 = b(e.format(t.price));
            var r = t.price - i.price,
              s = (r / Math.abs(i.price)) * 100;
            this._targetLine1 = b(
              e.format(r) + ' (' + this._percentageFormatter.format(s) + ')',
            );
            var l = this._model.timeScale().indexToUserTime(i.index),
              h = this._model.timeScale().indexToUserTime(t.index);
            i.time &&
              t.time &&
              ((l = TradingView.isString(i.time)
                ? new Date(Date.parse(i.time))
                : i.time),
              (h = TradingView.isString(t.time)
                ? new Date(Date.parse(t.time))
                : t.time));
            var d = this._model.mainSeries().isDWM(),
              _ = a.isSeconds(this._model.mainSeries().interval());
            if (h && l) {
              (this._targetLine4 = new c().format(h)),
                d ||
                  (this._targetLine4 =
                    this._targetLine4 +
                    '  ' +
                    new p(_ ? '%h:%m:%s' : '%h:%m').format(h));
              var v = (h.valueOf() - l.valueOf()) / 1e3;
              this._targetLine2 =
                $.t('in', { context: 'dates' }) + ' ' + R(new u().format(v));
            }
            (this._sourceLine1 = e.format(i.price)), (this._sourceLine2 = '');
            var g = this._model.timeScale().indexToUserTime(i.index);
            g &&
              ((this._sourceLine2 = new c().format(g)),
              d ||
                (this._sourceLine2 =
                  this._sourceLine2 +
                  ' ' +
                  new p(_ ? '%h:%m:%s' : '%h:%m').format(g))),
              (this._direction =
                this._source.direction() === f.Direction.Up ? 'up' : 'down'),
              (this._finished =
                this._model.lineBeingCreated() !== this._source &&
                this._model.lineBeingEdited() !== this._source &&
                !this._model.sourcesBeingMoved().includes(this._source));
            var y = {};
            (y.points = this._points),
              (y.color = this._source.properties().linecolor.value()),
              (y.linewidth = this._source.properties().linewidth.value()),
              (y.targetLine1 = this._targetLine1),
              (y.targetLine2 = this._targetLine2),
              (y.targetLine3 = this._targetLine3),
              (y.targetLine4 = this._targetLine4),
              (y.status = this._source.properties().status.value()),
              (y.transparency = this._source.properties().transparency.value()),
              (y.targetBackColor = this._source
                .properties()
                .targetBackColor.value()),
              (y.targetStrokeColor = this._source
                .properties()
                .targetStrokeColor.value()),
              (y.targetTextColor = this._source
                .properties()
                .targetTextColor.value()),
              (y.sourceBackColor = this._source
                .properties()
                .sourceBackColor.value()),
              (y.sourceStrokeColor = this._source
                .properties()
                .sourceStrokeColor.value()),
              (y.sourceTextColor = this._source
                .properties()
                .sourceTextColor.value()),
              (y.successBackground = this._source
                .properties()
                .successBackground.value()),
              (y.successTextColor = this._source
                .properties()
                .successTextColor.value()),
              (y.failureBackground = this._source
                .properties()
                .failureBackground.value()),
              (y.failureTextColor = this._source
                .properties()
                .failureTextColor.value()),
              (y.intermediateBackColor = this._source
                .properties()
                .intermediateBackColor.value()),
              (y.intermediateTextColor = this._source
                .properties()
                .intermediateTextColor.value()),
              (y.sourceLine1 = this._sourceLine1),
              (y.sourceLine2 = this._sourceLine2),
              (y.direction = this._direction),
              (y.clockWhite = this._clockWhite),
              (y.clockBlack = this._clockBlack),
              (y.successIcon = this._successIcon),
              (y.failureIcon = this._failureIcon),
              (y.finished = this._finished),
              (y.centersColor = this._model.backgroundCounterColor()),
              this._predictionRenderer.setData(y);
            var w = new o();
            w.append(this._predictionRenderer),
              this.addAnchors(w),
              (this._renderer = w);
          }
        }),
        (t.PredictionPaneView = P);
    },
    B4Hi: function (e, t, i) {
      'use strict';
      var r,
        n = i('aO4+').Point,
        a = i('aB9a').LineSourcePaneView,
        s = i('VdBB').HitTestResult,
        o = i('Zy3/').CompositeRenderer,
        l = i('Tmoa'),
        h = i('jTis').CalloutConsts,
        d = i('ikwP').calcTextHorizontalShift,
        c = i('Ialn').isRtl,
        p = i('cPgM').ScaledPaneRenderer;
      function u(e) {
        p.call(this), (this._data = null), (this._textSizeCache = e);
      }
      function _(e, t) {
        a.call(this, e, t),
          (this._textSizeCache = {}),
          (this._calloutRenderer = new u(this._textSizeCache)),
          (this._renderer = null);
      }
      inherit(u, p),
        (u.prototype.wordWrap = function (e, t) {
          var i;
          r ||
            (((i = document.createElement('canvas')).width = 0),
            (i.height = 0),
            (r = i.getContext('2d')),
            (i = null)),
            (t = +t);
          var n = (e += '').split(/[^\S\r\n]*(?:\r\n|\r|\n|$)/);
          if ((n[n.length - 1] || n.pop(), !isFinite(t) || t <= 0)) return n;
          r.font = this.fontStyle();
          for (var a = [], s = 0; s < n.length; s++) {
            var o = n[s];
            if ((h = r.measureText(o).width) <= t) a.push(o);
            else
              for (var l = o.split(/([-)\]},.!?:;])|(\s+)/); l.length; ) {
                var h,
                  d = ~~(((t / h) * (l.length + 2)) / 3);
                if (
                  d <= 0 ||
                  r.measureText(l.slice(0, 3 * d - 1).join('')).width <= t
                )
                  for (
                    ;
                    r.measureText(l.slice(0, 3 * (d + 1) - 1).join('')).width <=
                    t;

                  )
                    d++;
                else
                  for (
                    ;
                    d > 0 &&
                    r.measureText(l.slice(0, 3 * --d - 1).join('')).width > t;

                  );
                if (d > 0)
                  a.push(l.slice(0, 3 * d - 1).join('')), l.splice(0, 3 * d);
                else {
                  var c = l[0] + (l[1] || ''),
                    p = 1 === p ? 1 : ~~((t / r.measureText(c)) * c.length);
                  if (r.measureText(c.substr(0, p)).width <= t)
                    for (; r.measureText(c.substr(0, p + 1)).width <= t; ) p++;
                  else
                    for (
                      ;
                      p > 1 && r.measureText(c.substr(0, --p)).width > t;

                    );
                  p < 1 && (p = 1),
                    a.push(c.substr(0, p)),
                    (l[0] = c.substr(p)),
                    (l[1] = '');
                }
                if ((h = r.measureText(l.join('')).width) <= t) {
                  a.push(l.join(''));
                  break;
                }
              }
          }
          return a;
        }),
        (u.prototype.setData = function (e) {
          (this._data = e),
            (this._data.lines = this.wordWrap(e.text, e.wordWrapWidth));
        }),
        (u.prototype.hitTest = function (e) {
          if (null === this._data || this._data.points.length < 2) return null;
          var t = this._data.points[0],
            i = this._data.points[1];
          if (t.subtract(e).length() < 3) return new s(s.CHANGEPOINT, 0);
          var r = i.x - this._textSizeCache.totalWidth / 2,
            n = i.y - this._textSizeCache.totalHeight / 2;
          return e.x >= r &&
            e.x <= r + this._textSizeCache.totalWidth &&
            e.y >= n &&
            e.y <= n + this._textSizeCache.totalHeight
            ? new s(s.MOVEPOINT)
            : null;
        }),
        (u.prototype.fontStyle = function () {
          return (
            (this._data.bold ? 'bold ' : '') +
            (this._data.italic ? 'italic ' : '') +
            this._data.fontSize +
            'px ' +
            this._data.font
          );
        }),
        (u.prototype._drawImpl = function (e) {
          if (!(null === this._data || this._data.points.length < 2)) {
            var t = this._data.points[0].clone(),
              i = this._data.points[1].clone();
            (e.lineCap = 'butt'),
              (e.strokeStyle = this._data.bordercolor),
              (e.lineWidth = this._data.linewidth),
              (e.textBaseline = 'bottom'),
              (e.font = this.fontStyle());
            var r = this._data.fontSize * this._data.lines.length,
              n =
                this._data.wordWrapWidth ||
                this._data.lines.reduce(function (t, i) {
                  return Math.max(t, e.measureText(i).width);
                }, 0);
            (this._textSizeCache.textHeight = r),
              (this._textSizeCache.textHeight = n);
            var a = h.RoundRadius,
              s = h.TextMargins,
              o = n + 2 * s + 2 * a,
              p = r + 2 * s + 2 * a;
            (this._textSizeCache.totalWidth = o),
              (this._textSizeCache.totalHeight = p);
            var u = i.x - o / 2,
              _ = i.y - p / 2,
              f = 0,
              v = n + 2 * s > 2 * a,
              g = r + 2 * s > 2 * a;
            e.textAlign = c() ? 'right' : 'left';
            var y = d(e, n);
            t.x > u + o ? (f = 20) : t.x > u && (f = 10),
              t.y > _ + p ? (f += 2) : t.y > _ && (f += 1),
              e.save(),
              e.translate(u, _),
              (t.x -= u),
              (t.y -= _),
              (i.x -= u),
              (i.y -= _),
              e.beginPath(),
              e.moveTo(a, 0),
              10 === f
                ? v
                  ? (e.lineTo(i.x - a, 0),
                    e.lineTo(t.x, t.y),
                    e.lineTo(i.x + a, 0),
                    e.lineTo(o - a, 0))
                  : (e.lineTo(t.x, t.y), e.lineTo(o - a, 0))
                : e.lineTo(o - a, 0),
              20 === f
                ? (e.lineTo(t.x, t.y), e.lineTo(o, a))
                : e.arcTo(o, 0, o, a, a),
              21 === f
                ? g
                  ? (e.lineTo(o, i.y - a),
                    e.lineTo(t.x, t.y),
                    e.lineTo(o, i.y + a),
                    e.lineTo(o, p - a))
                  : (e.lineTo(t.x, t.y), e.lineTo(o, p - a))
                : e.lineTo(o, p - a),
              22 === f
                ? (e.lineTo(t.x, t.y), e.lineTo(o - a, p))
                : e.arcTo(o, p, o - a, p, a),
              12 === f
                ? v
                  ? (e.lineTo(i.x + a, p),
                    e.lineTo(t.x, t.y),
                    e.lineTo(i.x - a, p),
                    e.lineTo(a, p))
                  : (e.lineTo(t.x, t.y), e.lineTo(a, p))
                : e.lineTo(a, p),
              2 === f
                ? (e.lineTo(t.x, t.y), e.lineTo(0, p - a))
                : e.arcTo(0, p, 0, p - a, a),
              1 === f
                ? g
                  ? (e.lineTo(0, i.y + a),
                    e.lineTo(t.x, t.y),
                    e.lineTo(0, i.y - a),
                    e.lineTo(0, a))
                  : (e.lineTo(t.x, t.y), e.lineTo(0, a))
                : e.lineTo(0, a),
              0 === f
                ? (e.lineTo(t.x, t.y), e.lineTo(a, 0))
                : e.arcTo(0, 0, a, 0, a),
              e.stroke(),
              (e.fillStyle = l.generateColor(
                this._data.backcolor,
                this._data.transparency,
              )),
              e.fill(),
              (e.fillStyle = this._data.color),
              (_ = a + s + this._data.fontSize),
              (u = a + s + y);
            for (var w = 0; w < this._data.lines.length; w++)
              e.fillText(this._data.lines[w], u, _), (_ += this._data.fontSize);
            e.restore();
          }
        }),
        inherit(_, a),
        (_.prototype._updateImpl = function () {
          if (
            (a.prototype._updateImpl.call(this),
            this._source._calculatePoint2(),
            (this._renderer = null),
            this._points[0] && !(this._points.length < 2))
          ) {
            var e = this._source.properties(),
              t = { points: [] };
            t.points.push(this._points[0]);
            var i = this._points[1].clone();
            (i.x =
              this._points[0].x +
              this._source._barOffset * this._model.timeScale().barSpacing()),
              t.points.push(i),
              (t.color = e.color.value()),
              (t.linewidth = e.linewidth.value()),
              (t.backcolor = e.backgroundColor.value()),
              (t.transparency = e.transparency.value()),
              (t.text = e.text.value()),
              (t.font = e.font.value()),
              (t.fontSize = e.fontsize.value()),
              (t.bordercolor = e.bordercolor.value()),
              e.wordWrap &&
                e.wordWrap.value() &&
                (t.wordWrapWidth = e.wordWrapWidth.value()),
              (t.bold = e.bold && e.bold.value()),
              (t.italic = e.italic && e.italic.value()),
              this._calloutRenderer.setData(t);
            var r = new o();
            r.append(this._calloutRenderer);
            var s = t.points[1],
              l = [].concat(t.points);
            if (
              (l.splice(l.length - 1, 1),
              r.append(this.createLineAnchor({ points: l })),
              t.wordWrapWidth)
            ) {
              var d = new n(
                s.x + (t.wordWrapWidth >> 1) + h.RoundRadius + h.TextMargins,
                s.y,
              );
              (d.data = 1), r.append(this.createLineAnchor({ points: [d] }));
            }
            this._renderer = r;
          }
        }),
        (_.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.CalloutPaneView = _);
    },
    BCbF: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'PolygonRenderer', function () {
          return p;
        });
      var r = i('mrSG'),
        n = i('f6yo'),
        a = i('GEp6'),
        s = i('jFln'),
        o = i('VaSN'),
        l = i('pJOz'),
        h = i('a7Ha'),
        d = i('VdBB'),
        c = i('Tmoa'),
        p = (function (e) {
          function t(t) {
            var i = e.call(this) || this;
            return (
              (i._data = null),
              (i._backHittest = new d.HitTestResult(
                d.HitTestResult.MOVEPOINT_BACKGROUND,
              )),
              (i._points = []),
              (i._hittest =
                t || new d.HitTestResult(d.HitTestResult.MOVEPOINT)),
              i
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.setData = function (e) {
              (this._data = e), (this._points = e.points);
            }),
            (t.prototype.hitTest = function (e) {
              if (
                null === this._data ||
                (void 0 !== this._data.mouseTouchable &&
                  !this._data.mouseTouchable)
              )
                return null;
              for (
                var t = Object(o.lastEventIsTouch)() ? 24 : 3, i = 1;
                i < this._points.length;
                i++
              ) {
                var r = this._points[i - 1],
                  s = this._points[i];
                if (Object(a.distanceToSegment)(r, s, e).distance <= t)
                  return this._hittest;
              }
              if (
                this._data.filled &&
                this._data.fillBackground &&
                this._points.length > 0
              ) {
                (r = this._points[0]),
                  (s = this._points[this._points.length - 1]);
                if (Object(a.distanceToSegment)(r, s, e).distance <= t)
                  return this._hittest;
              }
              return this._data.filled &&
                this._data.fillBackground &&
                Object(n.pointInPolygon)(e, this._data.points)
                ? this._backHittest
                : null;
            }),
            (t.prototype._drawImpl = function (e, t) {
              if (null !== this._data && 0 !== this._points.length) {
                e.beginPath(),
                  (e.lineCap = 'butt'),
                  (e.strokeStyle = this._data.color),
                  (e.lineWidth = this._data.linewidth),
                  Object(s.setLineStyle)(e, this._data.linestyle);
                var i = this._points[0];
                e.moveTo(i.x, i.y);
                for (var r = 0, n = this._points; r < n.length; r++) {
                  var a = n[r];
                  e.lineTo(a.x, a.y);
                }
                this._data.filled &&
                  this._data.fillBackground &&
                  ((e.fillStyle = Object(c.generateColor)(
                    this._data.backcolor,
                    this._data.transparency,
                  )),
                  e.fill()),
                  this._data.filled &&
                    !this._data.skipClosePath &&
                    e.closePath(),
                  this._data.linewidth > 0 && e.stroke(),
                  this._points.length > 1 &&
                    (this._data.leftend === h.LineEnd.Arrow &&
                      Object(l.drawArrow)(
                        this._points[1],
                        this._points[0],
                        e,
                        e.lineWidth,
                        t.pixelRatio,
                      ),
                    this._data.rightend === h.LineEnd.Arrow &&
                      Object(l.drawArrow)(
                        this._points[this._points.length - 2],
                        this._points[this._points.length - 1],
                        e,
                        e.lineWidth,
                        t.pixelRatio,
                      ));
              }
            }),
            t
          );
        })(i('cPgM').ScaledPaneRenderer);
    },
    BSCN: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('Zy3/').CompositeRenderer,
        s = i('z+cS').VerticalLineRenderer,
        o = i('qgcf').TextRenderer,
        l = [i('//lt').PaneCursorType.HorizontalResize];
      function h(e, t) {
        n.call(this, e, t),
          (this._lineRenderer = new s()),
          (this._labelRenderer = new o()),
          (this._renderer = null);
      }
      inherit(h, n),
        (h.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (h.prototype._updateImpl = function () {
          if (
            (n.prototype._updateImpl.call(this),
            (this._renderer = null),
            0 !== this._points.length)
          ) {
            var e = this._source.properties(),
              t = {};
            (t.width = this._model.timeScale().width()),
              (t.height = this._source.priceScale().height()),
              (t.x = this._points[0].x),
              (t.color = e.linecolor.value()),
              (t.linewidth = e.linewidth.value()),
              (t.linestyle = e.linestyle.value()),
              this._lineRenderer.setData(t);
            var i = new a();
            if ((i.append(this._lineRenderer), e.showLabel.value())) {
              var s,
                o,
                h,
                d = 0,
                c = 5,
                p = this._points[0].x;
              switch (e.vertLabelsAlign.value()) {
                case 'top':
                  h = t.height;
                  break;
                case 'middle':
                  h = t.height / 2;
                  break;
                case 'bottom':
                  h = 0;
              }
              if ('horizontal' === e.textOrientation.value()) {
                switch (e.horzLabelsAlign.value()) {
                  case 'left':
                    s = 'right';
                    break;
                  case 'right':
                    s = 'left';
                    break;
                  case 'center':
                    s = 'center';
                }
                switch (e.vertLabelsAlign.value()) {
                  case 'top':
                    o = 'bottom';
                    break;
                  case 'middle':
                    o = 'middle';
                    break;
                  case 'bottom':
                    o = 'top';
                }
              } else {
                switch (
                  ((d = -Math.PI / 2), (c = 0), e.horzLabelsAlign.value())
                ) {
                  case 'left':
                    o = 'bottom';
                    break;
                  case 'right':
                    o = 'top';
                    break;
                  case 'center':
                    o = 'middle';
                }
                switch (e.vertLabelsAlign.value()) {
                  case 'top':
                    s = 'left';
                    break;
                  case 'middle':
                    s = 'center';
                    break;
                  case 'bottom':
                    s = 'right';
                }
              }
              var u = {
                points: [new r(p, h)],
                text: e.text.value(),
                color: e.textcolor.value(),
                vertAlign: o,
                horzAlign: s,
                font: e.font.value(),
                offsetX: c,
                offsetY: 0,
                bold: e.bold.value(),
                italic: e.italic.value(),
                fontsize: e.fontsize.value(),
                forceTextAlign: !0,
                angle: d,
              };
              this._labelRenderer.setData(u), i.append(this._labelRenderer);
            }
            if (1 === this._points.length) {
              var _ = new r(this._points[0].x, t.height / 2);
              (_.data = 0),
                (_.square = !0),
                i.append(
                  this.createLineAnchor({ points: [_], pointsCursorType: l }),
                );
            }
            this._renderer = i;
          }
        }),
        (t.VertLinePaneView = h);
    },
    C2CE: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'PolylinePaneView', function () {
          return s;
        });
      var r = i('mrSG'),
        n = i('BCbF'),
        a = i('Zy3/'),
        s = (function (e) {
          function t(t, i) {
            var r = e.call(this, t, i) || this;
            return (
              (r._polygonRenderer = new n.PolygonRenderer(null)),
              (r._renderer = new a.CompositeRenderer()),
              r
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.renderer = function (e, t) {
              return this._invalidated && this._updateImpl(), this._renderer;
            }),
            (t.prototype._updateImpl = function () {
              e.prototype._updateImpl.call(this), this._renderer.clear();
              var t = this._source.properties().childs(),
                i = {
                  points: this._points,
                  color: t.linecolor.value(),
                  linewidth: t.linewidth.value(),
                  linestyle: t.linestyle.value(),
                  filled: t.filled.value(),
                  backcolor: t.backgroundColor.value(),
                  fillBackground: t.fillBackground.value(),
                  transparency: t.transparency.value(),
                };
              this._polygonRenderer.setData(i),
                this._renderer.append(this._polygonRenderer),
                this.addAnchors(this._renderer);
            }),
            t
          );
        })(i('aB9a').LineSourcePaneView);
    },
    CR3a: function (e, t, i) {
      'use strict';
      var r = i('NN6M').ParallelChannelRenderer,
        n = i('pJOz').TrendLineRenderer,
        a = i('cjIn').PaneRendererCachedImage,
        s = i('Zy3/').CompositeRenderer,
        o = i('Tmoa'),
        l = i('a7Ha').LineEnd,
        h = i('NCfL').LineToolPaneViewWithLevelledTextCache,
        d = i('xUGI');
      function c(e, t, i) {
        d.call(this, e, t, i);
      }
      function p(e, t) {
        r.call(this, e, t);
      }
      function u(e, t) {
        h.call(this, e, t),
          (this._rendererCache = {}),
          (this._baseLineRenderer = new n()),
          (this._lastLevelTrendRenderer = new n()),
          (this._renderer = null);
      }
      inherit(c, d),
        (c.prototype._selectStartPrice = function (e) {
          return e.points()[0].price;
        }),
        (c.prototype.priceRange = function (e, t) {
          var i = e.points()[2],
            r = e.points()[0],
            n = this._calculatePriceRange(i, r, t);
          if (!this._calculateLogLevels(e)) return { price: n };
          var a = e.priceScale(),
            s = e.ownerSource().firstValue(),
            o = a.priceToCoordinate(i.price, s),
            l = a.priceToCoordinate(r.price, s);
          return { price: n, coordinate: t ? l - o : o - l };
        }),
        inherit(p, r),
        (p.prototype._getColor = function () {
          return o.generateColor(
            this._data.backcolor,
            this._data.transparency,
            !0,
          );
        }),
        inherit(u, h),
        (u.prototype.getCacheRects = function (e, t) {
          h.prototype.getCacheRects.call(this, e, t);
          var i,
            r = this._source.properties(),
            n = r['level' + t],
            a = this._cacheState.preparedCells.cells[t - 1],
            s = this._floatPoints[0],
            o = this._floatPoints[1],
            l = this.norm.scaled(n.coeff.value()),
            d = s.add(l),
            c = o.add(l);
          switch (r.horzLabelsAlign.value()) {
            case 'left':
              i = d;
              break;
            case 'center':
              ((i = d.add(c).scaled(0.5)).x += a.width / 2),
                (i.x = Math.round(i.x));
              break;
            case 'right':
              ((i = c.clone()).x += a.width), (i.x = Math.round(i.x));
          }
          var p = {
              left: a.left,
              top: this._cache.topByRow(this._cacheState.row),
              width: a.width,
              height: this._cache.rowHeight(this._cacheState.row),
            },
            u = {
              left: Math.round(i.x - p.width),
              top: Math.round(i.y),
              width: a.width,
              height: p.height,
            },
            _ = r.vertLabelsAlign.value();
          return (
            'middle' === _ && (u.top -= u.height / 2),
            'bottom' === _ && (u.top -= u.height),
            { cacheRect: p, targetRect: u }
          );
        }),
        (u.prototype._createCache = function (e) {
          return new c(
            this._source.properties().fibLevelsBasedOnLogScale,
            this._source.levelsCount(),
            e,
          );
        }),
        (u.prototype._updateImpl = function () {
          h.prototype._updateImpl.call(this),
            (this._renderer = null),
            3 === this._floatPoints.length &&
              3 === this._source.points().length &&
              (this.norm = this._floatPoints[2].subtract(this._floatPoints[0]));
          var e = new s();
          if (this._floatPoints.length < 2)
            return this.addAnchors(e), void (this._renderer = e);
          var t = this._source.properties(),
            i = this._floatPoints[0],
            r = this._floatPoints[1];
          if (this._floatPoints.length < 3) {
            var n = {
              points: [i, r],
              width: this._model.timeScale().width(),
              height: this._source.priceScale().height(),
              color: t.level1.color.value(),
              linewidth: t.levelsStyle.linewidth.value(),
              linestyle: t.levelsStyle.linestyle.value(),
              extendleft: t.extendLeft.value(),
              extendright: t.extendRight.value(),
              leftend: l.Normal,
              rightend: l.Normal,
            };
            return (
              this._baseLineRenderer.setData(n),
              e.append(this._baseLineRenderer),
              this.addAnchors(e),
              void (this._renderer = e)
            );
          }
          for (
            var o = function (t, i, r) {
                var n = new a(this, c);
                e.append(n);
              }.bind(this),
              d = this._source.levelsCount(),
              c = 1;
            c < d;
            c++
          ) {
            if ((S = t['level' + c]).visible.value()) {
              for (var u = null, _ = c + 1; _ <= d; _++) {
                var f = t['level' + _];
                if (f.visible.value()) {
                  u = f;
                  break;
                }
              }
              if (!u) break;
              var v = this.norm.scaled(S.coeff.value()),
                g = i.add(v),
                y = r.add(v),
                w = this.norm.scaled(u.coeff.value()),
                x = i.add(w),
                m = r.add(w),
                b = {};
              (b.points = [g, y, x, m]),
                (b.color = S.color.value()),
                (b.width = this._model.timeScale().width()),
                (b.height = this._source.priceScale().height()),
                (b.linewidth = t.levelsStyle.linewidth.value()),
                (b.linestyle = t.levelsStyle.linestyle.value()),
                (b.extendleft = t.extendLeft.value()),
                (b.extendright = t.extendRight.value()),
                (b.backcolor = S.color.value()),
                (b.transparency = t.transparency.value()),
                (b.skipTopLine = !0),
                (b.fillBackground = t.fillBackground.value()),
                (b.hittestOnBackground = !0);
              var R = new p();
              R.setData(b),
                e.append(R),
                (t.showCoeffs.value() || t.showPrices.value()) && o(g, y, c);
            }
          }
          var T = null;
          for (c = d; c >= 1; c--) {
            var S;
            if ((S = t['level' + c]).visible.value()) {
              T = c;
              break;
            }
          }
          if (null != T && (S = t['level' + T]).visible.value()) {
            (v = this.norm.scaled(S.coeff.value())),
              (n = {
                points: [(g = i.add(v)), (y = r.add(v))],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: S.color.value(),
                linewidth: t.levelsStyle.linewidth.value(),
                linestyle: t.levelsStyle.linestyle.value(),
                extendleft: t.extendLeft.value(),
                extendright: t.extendRight.value(),
                leftend: l.Normal,
                rightend: l.Normal,
              });
            this._lastLevelTrendRenderer.setData(n),
              e.append(this._lastLevelTrendRenderer),
              (t.showCoeffs.value() || t.showPrices.value()) && o(g, y, T - 1);
          }
          this.addAnchors(e), (this._renderer = e);
        }),
        (u.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.FibChannelPaneView = u);
    },
    D4q4: function (e, t, i) {
      'use strict';
      var r = i('aB9a').LineSourcePaneView,
        n = i('Zy3/').CompositeRenderer,
        a = i('/S7V').TriangleRenderer;
      function s(e, t) {
        r.call(this, e, t),
          (this._triangleRenderer = new a()),
          (this._renderer = null);
      }
      inherit(s, r),
        (s.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (s.prototype._updateImpl = function () {
          r.prototype._updateImpl.call(this), (this._renderer = null);
          var e = {};
          (e.points = this._points),
            (e.color = this._source.properties().color.value()),
            (e.linewidth = this._source.properties().linewidth.value()),
            (e.backcolor = this._source.properties().backgroundColor.value()),
            (e.fillBackground = this._source
              .properties()
              .fillBackground.value()),
            (e.transparency = this._source.properties().transparency.value()),
            this._triangleRenderer.setData(e);
          var t = new n();
          t.append(this._triangleRenderer),
            this.addAnchors(t),
            (this._renderer = t);
        }),
        (t.TrianglePaneView = s);
    },
    'Dz+H': function (e, t, i) {
      'use strict';
      i.r(t);
      var r = i('mrSG'),
        n = i('aB9a'),
        a = i('Zy3/'),
        s = i('vq8G'),
        o = i('VdBB'),
        l = i('Eyy1'),
        h = i('qgcf'),
        d = i('Tmoa'),
        c = i('Ialn'),
        p = i('ikwP'),
        u = i('c44N'),
        _ = i('aO4+'),
        f = i('f6yo');
      var v = (function () {
          function e(e) {
            (this._data = null),
              (this._sourceCanvas = null),
              (this._translate = new _.Point(0, 0)),
              (this._renderParams = e);
          }
          return (
            (e.prototype.destroy = function () {
              var e;
              null === (e = this._sourceCanvas) || void 0 === e || e.remove();
            }),
            (e.prototype.renderParams = function () {
              return this._renderParams;
            }),
            (e.prototype.update = function (e) {
              var t, i;
              (t = this._data),
                (i = e),
                (null === t ||
                  t.markerColor !== i.markerColor ||
                  t.borderColor !== i.borderColor ||
                  t.width !== i.width ||
                  t.height !== i.height) &&
                  this._createSource(e.width, e.height, e.markerColor),
                (this._data = e);
            }),
            (e.prototype.drawOn = function (e) {
              var t = Object(l.ensureNotNull)(this._data),
                i = new _.Point(
                  Math.round(t.point.x),
                  Math.round(t.point.y),
                ).add(this._translate);
              e.drawImage(
                Object(l.ensureNotNull)(this._sourceCanvas),
                Math.round(i.x * this._renderParams.pixelRatio),
                Math.round(i.y * this._renderParams.pixelRatio),
                Math.round(t.width * this._renderParams.pixelRatio),
                Math.round(t.height * this._renderParams.pixelRatio),
              );
            }),
            (e.prototype.hasPoint = function (e) {
              var t = Object(l.ensureNotNull)(this._data),
                i = t.point.add(this._translate),
                r = new _.Point(t.point.x - this._translate.x, t.point.y);
              return Object(f.pointInBox)(e, Object(_.box)(i, r));
            }),
            (e.prototype._createSource = function (e, t, i) {
              (this._sourceCanvas = Object(p.createDisconnectedCanvas)(
                document,
                new p.Size(e, t),
                this._renderParams.pixelRatio,
              )),
                (this._translate = new _.Point(-e / 2, 0.5 - t)),
                this._translate.x % 1 == 0 &&
                  (this._translate = new _.Point(
                    this._translate.x + 0.5,
                    this._translate.y,
                  ));
              var r = Object(l.ensureNotNull)(
                this._sourceCanvas.getContext('2d'),
              );
              Object(p.drawScaled)(
                r,
                this._renderParams.pixelRatio,
                function () {
                  var n = 0.6 * e;
                  (r.fillStyle = i),
                    r.beginPath(),
                    r.moveTo(e / 2, t),
                    r.quadraticCurveTo(e, e / 1.15, e, e / 2),
                    r.arc(e / 2, e / 2, e / 2, 0, Math.PI, !0),
                    r.quadraticCurveTo(0, e / 1.15, e / 2, t),
                    r.fill(),
                    (r.globalCompositeOperation = 'destination-out'),
                    r.beginPath(),
                    r.moveTo((e - n) / 2, e / 2),
                    r.arc(e / 2, e / 2, n / 2, 0, 2 * Math.PI),
                    r.fill();
                },
              );
            }),
            e
          );
        })(),
        g = (function () {
          function e() {
            (this._source = null), (this._data = null);
          }
          return (
            (e.prototype.setData = function (e) {
              (this._data = e), this._source && this._source.update(e);
            }),
            (e.prototype.draw = function (e, t) {
              var i;
              null !== this._data &&
                ((null !== this._source &&
                  Object(u.areEqualPaneRenderParams)(
                    this._source.renderParams(),
                    t,
                  )) ||
                  (null === (i = this._source) || void 0 === i || i.destroy(),
                  (this._source = new v(t)),
                  this._source.update(this._data)),
                this._source.drawOn(e),
                this._data.tooltipVisible && this._drawTooltipOn(e, t));
            }),
            (e.prototype.hitTest = function (e) {
              return null !== this._data &&
                null !== this._source &&
                this._source.hasPoint(e)
                ? new o.HitTestResult(o.HitTestResult.MOVEPOINT)
                : null;
            }),
            (e.prototype._drawTooltipOn = function (e, t) {
              e.save(), e.translate(0.5, 0.5);
              var i = Object(l.ensureNotNull)(this._data),
                r = String(i.text)
                  .replace(/^\s+|\s+$/g, '')
                  .replace(/[\r\n]+/g, '\n');
              e.font =
                (i.bold ? 'bold ' : '') +
                (i.italic ? 'italic ' : '') +
                i.fontSize +
                'px ' +
                i.font;
              var n = i.tooltipWidth - 2 * i.tooltipPadding,
                a = Object(h.wordWrap)(r, e.font, n),
                s = i.point,
                o = i.tooltipLineSpacing,
                u = i.tooltipWidth,
                _ = a.length * i.fontSize + 2 * i.tooltipPadding;
              a.length > 1 && (_ += (a.length - 1) * o);
              var f = Math.round(s.x - u / 2),
                v = Math.round(s.y - i.height - _ - 8),
                g = s.x < 20 || s.x + 20 > i.vpWidth,
                y = g ? null : 'top',
                w = g ? 0 : Math.round(s.x);
              v < 10 ? (v = s.y + 13) : (y = 'bottom'),
                f < 10
                  ? (f += Math.abs(f - 10))
                  : f + u + 10 > i.vpWidth && (f -= f + u + 10 - i.vpWidth),
                (e.fillStyle = Object(d.generateColor)(
                  i.backgroundColor,
                  i.backgroundTransparency,
                )),
                (e.strokeStyle = i.borderColor),
                (e.lineWidth = 1),
                e.beginPath();
              var x = Math.round(f * t.pixelRatio),
                m = Math.round(v * t.pixelRatio);
              (w = Math.round(w * t.pixelRatio)),
                (_ = Math.round(_ * t.pixelRatio)),
                (u = Math.round(u * t.pixelRatio));
              var b = Math.round(7 * t.pixelRatio);
              e.moveTo(x, m),
                g ||
                  'top' !== y ||
                  (e.lineTo(w - b, m), e.lineTo(w, m - b), e.lineTo(w + b, m)),
                e.lineTo(x + u, m),
                e.lineTo(x + u, m + _),
                g ||
                  'bottom' !== y ||
                  (e.lineTo(w + b, m + _),
                  e.lineTo(w, m + _ + b),
                  e.lineTo(w - b, m + _)),
                e.lineTo(x, m + _),
                e.closePath(),
                e.fill(),
                e.stroke(),
                (e.textBaseline = 'middle'),
                (e.fillStyle = i.textColor),
                (e.textAlign = Object(c.isRtl)() ? 'right' : 'left');
              var R = Object(p.calcTextHorizontalShift)(e, n),
                T = f + i.tooltipPadding + R,
                S = v + i.tooltipPadding + i.fontSize / 2;
              Object(p.drawScaled)(e, t.pixelRatio, function () {
                for (var t = 0; t < a.length; t++)
                  e.fillText(a[t].replace(/^\s+/, ''), T, S),
                    (S += i.fontSize + o);
              }),
                e.restore();
            }),
            e
          );
        })();
      i.d(t, 'NotePaneView', function () {
        return y;
      });
      var y = (function (e) {
        function t(t, i) {
          var r = e.call(this, t, i) || this;
          return (r._renderer = null), (r._noteRenderer = new g()), r;
        }
        return (
          Object(r.__extends)(t, e),
          (t.prototype.isLabelVisible = function () {
            return this.isHoveredSource() || this.isSelectedSource();
          }),
          (t.prototype.renderer = function (e, t) {
            return this._invalidated && this._updateImpl(), this._renderer;
          }),
          (t.prototype._updateImpl = function () {
            e.prototype._updateImpl.call(this), (this._renderer = null);
            var t = this._getSource(),
              i = this._source.isFixed() ? t.fixedPoints() : this._points;
            if (!(i.length < 1)) {
              var r = new a.CompositeRenderer(),
                n = this.isLabelVisible(),
                l = this._source.properties().childs(),
                h = {
                  text: l.text.value(),
                  bold: l.bold.value(),
                  italic: l.italic.value(),
                  font: l.font.value(),
                  fontSize: l.fontSize.value(),
                  backgroundColor: l.backgroundColor.value(),
                  backgroundTransparency: l.backgroundTransparency.value(),
                  borderColor: l.borderColor.value(),
                  textColor: l.textColor.value(),
                  markerColor: l.markerColor.value(),
                  point: i[0],
                  width: 24,
                  height: 32,
                  tooltipVisible: n,
                  vpWidth: this._model.timeScale().width(),
                  tooltipWidth: t.getTooltipWidth(),
                  tooltipPadding: t.getTooltipPadding(),
                  tooltipLineSpacing: t.getTooltipLineSpacing(),
                };
              this._noteRenderer.setData(h),
                r.append(this._noteRenderer),
                r.append(
                  new s.SelectionRenderer({
                    points: i,
                    bgColors: this._lineAnchorColors(i),
                    visible: this.areAnchorsVisible(),
                    barSpacing: this._model.timeScale().barSpacing(),
                    hittestResult: o.HitTestResult.MOVEPOINT,
                  }),
                ),
                (this._renderer = r);
            }
          }),
          t
        );
      })(n.LineSourcePaneView);
    },
    FVHe: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'TrendLineStatsCache', function () {
          return f;
        });
      var r = i('Eyy1'),
        n = i('aO4+'),
        a = i('txPx'),
        s = i('5/lF'),
        o = i('zDbI'),
        l = i('8xAY'),
        h = i('ikwP'),
        d = l.LabelSettings.fontSize,
        c = l.LabelSettings.lineSpacing,
        p = l.LabelSettings.paddingTopBottom,
        u = Object(a.getLogger)('Chart.LineToolTrendLine');
      function _(e, t) {
        return (
          !(!e && !t) &&
          (!(!e || t) ||
            !(e || !t) ||
            e.index !== t.index ||
            e.price !== t.price)
        );
      }
      var f = (function () {
        function e(e) {
          (this._sourcesToRow = new Map()),
            (this._rowsToSources = new Map()),
            (this._currentWidth = 400),
            (this._actualCapacity = 1),
            (this._currentSymbol = ''),
            (this._params = e);
          var t = c,
            i = d + t;
          (this._rowHeight = 3 * i - t + 2 * p + 2), this._recreateCanvas();
        }
        return (
          (e.prototype.destroy = function () {
            delete this._canvas, delete this._ctx;
          }),
          (e.prototype.canvas = function () {
            return this._canvas;
          }),
          (e.prototype.topByRow = function (e) {
            return e * this._rowHeight;
          }),
          (e.prototype.rowHeight = function (e) {
            return this._rowHeight;
          }),
          (e.prototype.rowWidth = function (e) {
            var t = Object(r.ensureDefined)(this._rowsToSources.get(e));
            return Object(r.ensureDefined)(this._sourcesToRow.get(t)).width;
          }),
          (e.prototype.currentWidth = function () {
            return this._currentWidth;
          }),
          (e.prototype.updateSource = function (e, t) {
            var i = e.properties().symbol.value();
            this._currentSymbol !== i &&
              (u.logDebug(
                'TrendLineCache. Clearing canvas because of changing symbol from ' +
                  this._currentSymbol +
                  ' to ' +
                  i,
              ),
              (this._currentSymbol = i),
              this._sourcesToRow.clear(),
              this._rowsToSources.clear());
            var r = e.id(),
              n = this._sourcesToRow.get(r);
            if (void 0 === n) {
              var a = this._findEmptyRow(r);
              (n = { effectiveState: null, rowIndex: a, width: 0 }),
                this._sourcesToRow.set(r, n),
                this._rowsToSources.set(a, r);
            }
            var s = n.effectiveState,
              o = this._effectiveState(e);
            if (!this._effectiveStatesEquals(s, o)) {
              var l = t();
              this._repaintSource(r, n.rowIndex, l), (n.effectiveState = o);
            }
            return n;
          }),
          (e.prototype._findEmptyRow = function (e) {
            for (var t = 0; void 0 !== this._rowsToSources.get(t); ) t++;
            return (
              this._rowsToSources.set(t, e),
              t >= this._actualCapacity &&
                (this._actualCapacity++, this._recreateCanvas()),
              t
            );
          }),
          (e.prototype._effectiveState = function (e) {
            var t = e.properties(),
              i = {
                p1: Object.assign({}, e.points()[0]),
                p2: Object.assign({}, e.points()[1]),
                props: e.properties(),
                showBars: t.showBarsRange.value(),
                showTimeRange: t.showDateTimeRange.value(),
                showDistance: t.showDistance.value(),
                showPriceRange: t.showPriceRange.value(),
                showAngle: t.showAngle.value(),
                dark: e.model().isDark(),
                priceRange: void 0,
                barSpacing: void 0,
              };
            return (
              !0 === i.showAngle &&
                ((i.priceRange = Object(r.ensureNotNull)(
                  Object(r.ensureNotNull)(e.priceScale()).priceRange(),
                ).state()),
                (i.barSpacing = e.model().timeScale().barSpacing())),
              i
            );
          }),
          (e.prototype._effectiveStatesEquals = function (e, t) {
            if (null !== e && null === t) return !1;
            if (null === e && null !== t) return !1;
            var i = Object(r.ensureNotNull)(e),
              n = Object(r.ensureNotNull)(t);
            if (_(i.p1, n.p1)) return !1;
            if (_(i.p2, n.p2)) return !1;
            if (i.dark !== n.dark) return !1;
            if (i.showBars !== n.showBars) return !1;
            if (i.showTimeRange !== n.showTimeRange) return !1;
            if (i.showDistance !== n.showDistance) return !1;
            if (i.showPriceRange !== n.showPriceRange) return !1;
            if (i.showAngle !== n.showAngle) return !1;
            if (i.showAngle && n.showAngle) {
              if (i.priceRange.min !== n.priceRange.min) return !1;
              if (i.priceRange.max !== n.priceRange.max) return !1;
              if (i.barSpacing !== n.barSpacing) return !1;
            }
            return !0;
          }),
          (e.prototype._repaintSource = function (e, t, i) {
            var a = this;
            (i.points[0] = new n.Point(0, 0)),
              (i.offsetX = 0),
              (i.offsetY = 0),
              delete i.horzAlign,
              delete i.vertAlign,
              Object(h.drawScaled)(
                this._ctx,
                this._params.pixelRatio,
                function () {
                  a._ctx.translate(0.5, a.topByRow(t) + 0.5),
                    a._ctx.clearRect(0, 0, a._currentWidth, a.rowHeight(t));
                  var n = new s.TrendLineStatsRenderer(i, { widths: [] }).draw(
                    a._ctx,
                    a._params,
                  );
                  Object(r.ensureDefined)(a._sourcesToRow.get(e)).width =
                    n.width;
                },
              );
          }),
          (e.prototype._recreateCanvas = function () {
            (this._canvas = Object(r.ensureNotNull)(
              document.createElement('canvas'),
            )),
              (this._canvas.width =
                this._currentWidth * this._params.pixelRatio),
              (this._canvas.height =
                this._rowHeight *
                this._actualCapacity *
                this._params.pixelRatio),
              (this._ctx = Object(r.ensureNotNull)(
                this._canvas.getContext('2d'),
              )),
              (this._ctx.font = d + 'px ' + o.CHART_FONT_FAMILY),
              this._sourcesToRow.clear(),
              this._rowsToSources.clear();
          }),
          e
        );
      })();
    },
    Fx2Q: function (e, t, i) {
      'use strict';
      var r = i('hBTJ').intersectLineSegments,
        n = i('aB9a').LineSourcePaneView,
        a = i('pJOz').TrendLineRenderer,
        s = i('/S7V').TriangleRenderer,
        o = i('qgcf').TextRenderer,
        l = i('Zy3/').CompositeRenderer,
        h = i('Tmoa'),
        d = i('a7Ha').LineEnd;
      function c(e, t) {
        n.call(this, e, t),
          (this._trendLineRenderer = new a()),
          (this._triangleRendererPoints234 = new s()),
          (this._intersect1Renderer = new s()),
          (this._intersect2Renderer = new s()),
          (this._leftShoulderLabelRenderer = new o()),
          (this._headLabelRenderer = new o()),
          (this._rightShoulderLabelRenderer = new o()),
          (this._renderer = null);
      }
      inherit(c, n),
        (c.prototype._i18nCache = function () {
          return {
            leftShoulder: $.t('Left Shoulder'),
            rightShoulder: $.t('Right Shoulder'),
            head: $.t('Head'),
          };
        }),
        (c.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (c.prototype._updateImpl = function () {
          if (
            (n.prototype._updateImpl.call(this),
            (this._renderer = null),
            delete this._intersect1,
            delete this._intersect2,
            this._points.length >= 5)
          ) {
            var e = this._points[0],
              t = this._points[1],
              i = this._points[2],
              s = this._points[4];
            if (null !== (c = r(i, s, e, t))) {
              var o = s.subtract(i);
              this._intersect1 = i.add(o.scaled(c));
            }
            if (7 === this._points.length) {
              var c,
                p = this._points[5],
                u = this._points[6];
              if (null !== (c = r(i, s, p, u))) {
                o = s.subtract(i);
                this._intersect2 = i.add(o.scaled(c));
              }
            }
          }
          if (!(this._points.length < 2)) {
            for (
              var _ = this._source.properties(),
                f = new l(),
                v = this,
                g = function (e, t) {
                  return {
                    points: [e],
                    text: $.t(t),
                    color: _.textcolor.value(),
                    horzAlign: 'center',
                    font: _.font.value(),
                    offsetX: 0,
                    offsetY: 0,
                    bold: _.bold && _.bold.value(),
                    italic: _.italic && _.italic.value(),
                    fontsize: _.fontsize.value(),
                    backgroundColor: v._source.properties().color.value(),
                    backgroundRoundRect: 4,
                  };
                },
                y = function (e, t, i, r) {
                  return {
                    points: [e, t],
                    width: v._model.timeScale().width(),
                    height: v._source.priceScale().height(),
                    color: h.generateColor(
                      v._source.properties().color.value(),
                      i,
                    ),
                    linewidth: r || _.linewidth.value(),
                    linestyle: CanvasEx.LINESTYLE_SOLID,
                    extendleft: !1,
                    extendright: !1,
                    leftend: d.Normal,
                    rightend: d.Normal,
                  };
                },
                w = function (e, t, i) {
                  var r = [e, t, i],
                    n = {};
                  return (
                    (n.points = r),
                    (n.color = _.color.value()),
                    (n.linewidth = 0),
                    (n.backcolor = _.backgroundColor.value()),
                    (n.fillBackground = _.fillBackground.value()),
                    (n.transparency = _.transparency.value()),
                    n
                  );
                },
                x = 1;
              x < this._points.length;
              x++
            ) {
              var m = y(this._points[x - 1], this._points[x], 0),
                b = new a();
              b.setData(m), f.append(b);
            }
            if (this._points.length >= 5) {
              var R,
                T,
                S = !1,
                P = !1;
              this._intersect1
                ? (R = this._intersect1)
                : ((R = this._points[2]), (S = !0)),
                this._intersect2
                  ? (T = this._intersect2)
                  : ((T = this._points[4]), (P = !0)),
                ((m = y(R, T, 0)).extendleft = S),
                (m.extendright = P),
                this._trendLineRenderer.setData(m),
                f.append(this._trendLineRenderer);
              var L = w(this._points[2], this._points[3], this._points[4]);
              this._triangleRendererPoints234.setData(L),
                f.append(this._triangleRendererPoints234);
            }
            if (this._intersect1) {
              L = w(this._intersect1, this._points[1], this._points[2]);
              this._intersect1Renderer.setData(L),
                f.append(this._intersect1Renderer);
            }
            if (this._intersect2) {
              L = w(this._points[4], this._points[5], this._intersect2);
              this._intersect2Renderer.setData(L),
                f.append(this._intersect2Renderer);
            }
            var C = this._i18nCache();
            if (this._points.length >= 2) {
              var M = g(this._points[1], C.leftShoulder);
              this._points[1].y < this._points[0].y
                ? ((M.vertAlign = 'bottom'), (M.offsetY = 5))
                : ((M.vertAlign = 'top'), (M.offsetY = 5)),
                this._leftShoulderLabelRenderer.setData(M),
                f.append(this._leftShoulderLabelRenderer);
            }
            if (this._points.length >= 4) {
              M = g(this._points[3], C.head);
              this._points[3].y < this._points[2].y
                ? ((M.vertAlign = 'bottom'), (M.offsetY = 5))
                : ((M.vertAlign = 'top'), (M.offsetY = 5)),
                this._headLabelRenderer.setData(M),
                f.append(this._headLabelRenderer);
            }
            if (this._points.length >= 6) {
              M = g(this._points[5], C.rightShoulder);
              this._points[5].y < this._points[4].y
                ? ((M.vertAlign = 'bottom'), (M.offsetY = 5))
                : ((M.vertAlign = 'top'), (M.offsetY = 5)),
                this._rightShoulderLabelRenderer.setData(M),
                f.append(this._rightShoulderLabelRenderer);
            }
            this.addAnchors(f), (this._renderer = f);
          }
        }),
        (t.LineToolHeadAndShouldersPaneView = c);
    },
    FzRY: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('pJOz').TrendLineRenderer,
        a = i('cjIn').PaneRendererCachedImage,
        s = i('VdBB').HitTestResult,
        o = i('Zy3/').CompositeRenderer,
        l = i('zXvd').NumericFormatter,
        h = i('QA6D').EllipseRendererSimple,
        d = i('a7Ha').LineEnd,
        c = i('NCfL').LineToolPaneViewWithLevelledTextCache;
      function p(e, t) {
        c.call(this, e, t),
          (this._rendererCache = {}),
          (this._numericFormatter = new l()),
          (this._trendLineRenderer = new n()),
          (this._renderer = null);
      }
      inherit(p, c),
        (p.prototype.getCacheRects = function (e, t) {
          c.prototype.getCacheRects.call(this, e, t);
          var i = this._cacheState.preparedCells.cells[
            this._levels[t].index - 1
          ];
          if (i) {
            var r = this._levels[t],
              n = {
                left: i.left,
                top: this._cache.topByRow(this._cacheState.row),
                width: i.width,
                height: this._cache.rowHeight(this._cacheState.row),
              };
            return {
              cacheRect: n,
              targetRect: {
                left: Math.round(r.labelPoint.x - n.width),
                top: Math.round(r.labelPoint.y - n.height / 2),
                width: i.width,
                height: n.height,
              },
            };
          }
        }),
        (p.prototype._updateImpl = function () {
          if (
            (c.prototype._updateImpl.call(this),
            (this._renderer = null),
            !(this._source.points().length < 2) &&
              this._source.priceScale() &&
              !this._source.priceScale().isEmpty() &&
              !this._model.timeScale().isEmpty())
          ) {
            var e = this._points[0],
              t = this._points[1];
            this._center = e.add(t).scaled(0.5);
            var i = Math.abs(t.x - e.x),
              n = Math.abs(t.y - e.y);
            this._levels = [];
            for (
              var l = this._source.properties(),
                p = this._source.levelsCount(),
                u = 1;
              u <= p;
              u++
            ) {
              var _ = l['level' + u];
              if (_.visible.value()) {
                var f = _.coeff.value(),
                  v = _.color.value(),
                  g = [];
                g.push(
                  new r(
                    this._center.x - 0.5 * i * f,
                    this._center.y - 0.5 * n * f,
                  ),
                ),
                  g.push(
                    new r(
                      this._center.x + 0.5 * i * f,
                      this._center.y + 0.5 * n * f,
                    ),
                  );
                var y = new r(this._center.x, this._center.y + 0.5 * n * f);
                this._levels.push({
                  color: v,
                  points: g,
                  labelPoint: y,
                  linewidth: _.linewidth.value(),
                  linestyle: _.linestyle.value(),
                  index: u,
                });
              }
            }
            if (!(this._points.length < 2)) {
              var w = new o(),
                x = l.fillBackground.value(),
                m = l.transparency.value();
              for (u = 0; u < this._levels.length; u++) {
                var b = this._levels[u],
                  R = {};
                (R.points = b.points),
                  (R.color = b.color),
                  (R.linewidth = b.linewidth),
                  (R.backcolor = b.color),
                  u > 0 && (R.wholePoints = this._levels[u - 1].points),
                  (R.fillBackground = x),
                  (R.transparency = m);
                var T = new s(s.MOVEPOINT, null, b.index);
                if ((w.append(new h(R, T)), l.showCoeffs.value())) {
                  var S = new a(this, u);
                  w.append(S);
                }
              }
              if (l.trendline.visible.value()) {
                var P = {
                  points: [this._points[0], this._points[1]],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: l.trendline.color.value(),
                  linewidth: l.trendline.linewidth.value(),
                  linestyle: l.trendline.linestyle.value(),
                  extendleft: !1,
                  extendright: !1,
                  leftend: d.Normal,
                  rightend: d.Normal,
                };
                this._trendLineRenderer.setData(P),
                  w.append(this._trendLineRenderer);
              }
              this.addAnchors(w), (this._renderer = w);
            }
          }
        }),
        (p.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.FibCirclesPaneView = p);
    },
    'GS+0': function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('z+cS').VerticalLineRenderer,
        s = i('pJOz').TrendLineRenderer,
        o = i('VdBB').HitTestResult,
        l = i('Zy3/').CompositeRenderer,
        h = i('a7Ha').LineEnd;
      function d(e, t) {
        n.call(this, e, t),
          (this._lines = []),
          (this._trendRenderer = new s()),
          (this._renderer = null);
      }
      inherit(d, n),
        (d.prototype._updateImpl = function () {
          if (
            (n.prototype._updateImpl.call(this),
            (this._renderer = null),
            !(this._source.points().length < 2))
          ) {
            var e = this._model.timeScale();
            if (
              this._source.priceScale() &&
              !this._source.priceScale().isEmpty() &&
              !e.isEmpty()
            ) {
              var t = this._source.points()[0],
                i = this._source.points()[1],
                s = i ? i.index - t.index : 1;
              if (((this._lines = []), 0 !== s)) {
                var d = e.visibleBarsStrictRange();
                if (s > 0)
                  for (var c = t.index; c <= d.lastBar(); c += s)
                    this._lines.push({ x: e.indexToCoordinate(c) });
                else
                  for (c = t.index; c >= d.firstBar(); c += s)
                    this._lines.push({ x: e.indexToCoordinate(c) });
                if (!(this._points.length < 2)) {
                  var p = new l(),
                    u = this._source.properties(),
                    _ = {
                      points: [t, i],
                      width: this._model.timeScale().width(),
                      height: this._source.priceScale().height(),
                      color: u.trendline.color.value(),
                      linewidth: u.trendline.linewidth.value(),
                      linestyle: u.trendline.linestyle.value(),
                      extendleft: !1,
                      extendright: !1,
                      leftend: h.Normal,
                      rightend: h.Normal,
                    };
                  this._trendRenderer.setData(_), p.append(this._trendRenderer);
                  var f = this._model.timeScale().width(),
                    v = this._source.priceScale().height();
                  for (c = 0; c < this._lines.length; c++) {
                    var g = {
                        width: f,
                        height: v,
                        x: this._lines[c].x,
                        color: u.linecolor.value(),
                        linewidth: u.linewidth.value(),
                        linestyle: u.linestyle.value(),
                      },
                      y = new a();
                    y.setData(g), p.append(y);
                  }
                  if (2 === this._source.points().length) {
                    var w = [].concat(this._points);
                    p.append(this.createLineAnchor({ points: w }));
                  } else
                    p.append(
                      this.createLineAnchor({
                        points: [
                          new r(
                            this._points[0].x,
                            this._source.priceScale().height() / 2,
                          ),
                        ],
                        hittestResult: o.MOVEPOINT,
                      }),
                    );
                  this._renderer = p;
                }
              }
            }
          }
        }),
        (d.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.LineToolCircleLinesPaneView = d);
    },
    GW0y: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'RectanglePaneView', function () {
          return c;
        });
      var r = i('mrSG'),
        n = i('aO4+'),
        a = i('zDbI'),
        s = i('IjC5'),
        o = i('Zy3/'),
        l = i('qgcf'),
        h = i('aB9a'),
        d = i('//lt'),
        c = (function (e) {
          function t(t, i) {
            var r = e.call(this, t, i) || this;
            return (
              (r._rectangleRenderer = new s.RectangleRenderer()),
              (r._textRenderer = new l.TextRenderer()),
              (r._renderer = null),
              r
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.renderer = function (e, t) {
              return this._invalidated && this._updateImpl(), this._renderer;
            }),
            (t.prototype._updateImpl = function () {
              if (
                (e.prototype._updateImpl.call(this),
                (this._renderer = null),
                !(this._points.length < 2))
              ) {
                var t = this._getSource().properties().childs(),
                  i = {
                    points: this._points,
                    color: t.color.value(),
                    linewidth: t.linewidth.value(),
                    backcolor: t.backgroundColor.value(),
                    fillBackground: t.fillBackground.value(),
                    transparency: t.transparency.value(),
                    extendLeft: t.extendLeft.value(),
                    extendRight: t.extendRight.value(),
                  };
                this._rectangleRenderer.setData(i);
                var r = new o.CompositeRenderer();
                r.append(this._rectangleRenderer);
                var s = this._points[0],
                  l = this._points[1];
                if (t.showLabel.value()) {
                  var h = Math.min(s.x, l.x),
                    d = Math.max(s.x, l.x),
                    c = Math.min(s.y, l.y),
                    p = Math.max(s.y, l.y),
                    u = void 0,
                    _ = void 0,
                    f = void 0,
                    v = void 0,
                    g = t.fontSize.value() / 3,
                    y = 0;
                  switch (t.vertLabelsAlign.value()) {
                    case 'middle':
                      (v = (c + p) / 2), (_ = 'middle'), (y = g);
                      break;
                    case 'top':
                      (v = p), (_ = 'top');
                      break;
                    case 'bottom':
                      (v = c), (_ = 'bottom');
                  }
                  switch (t.horzLabelsAlign.value()) {
                    case 'center':
                      (f = (h + d) / 2), (u = 'center');
                      break;
                    case 'left':
                      (f = h), (u = 'left');
                      break;
                    case 'right':
                      (f = d), (u = 'right');
                  }
                  var w = void 0,
                    x = void 0;
                  'middle' === _ && ((w = d - h - 2 * y), (x = p - c));
                  var m = {
                    points: [new n.Point(f, v)],
                    text: t.text.value(),
                    fontSize: t.fontSize.value(),
                    font: a.CHART_FONT_FAMILY,
                    bold: t.bold.value(),
                    italic: t.italic.value(),
                    horzAlign: u,
                    vertAlign: _,
                    color: t.textColor.value(),
                    wordWrapWidth: w,
                    maxHeight: x,
                    offsetX: 0,
                    offsetY: 0,
                    boxPaddingVert: g,
                    boxPaddingHorz: y,
                    forceTextAlign: !0,
                  };
                  this._textRenderer.setData(m), r.append(this._textRenderer);
                }
                this._addAnchors(s, l, r), (this._renderer = r);
              }
            }),
            (t.prototype._addAnchors = function (e, t, i) {
              var r = new n.Point(e.x, t.y);
              r.data = 2;
              var a = new n.Point(t.x, e.y);
              a.data = 3;
              var s = new n.Point(e.x, 0.5 * (e.y + t.y));
              s.data = 4;
              var o = new n.Point(t.x, 0.5 * (e.y + t.y));
              o.data = 5;
              var l = new n.Point(0.5 * (e.x + t.x), e.y);
              l.data = 6;
              var h = new n.Point(0.5 * (e.x + t.x), t.y);
              (h.data = 7),
                [s, o, l, h].forEach(function (e) {
                  return (e.square = !0);
                });
              var c = e.x - t.x,
                p = e.y - t.y,
                u = Math.sign(c * p),
                _ = [
                  u < 0
                    ? d.PaneCursorType.DiagonalNeSwResize
                    : d.PaneCursorType.DiagonalNwSeResize,
                  u < 0
                    ? d.PaneCursorType.DiagonalNeSwResize
                    : d.PaneCursorType.DiagonalNwSeResize,
                  u > 0
                    ? d.PaneCursorType.DiagonalNeSwResize
                    : d.PaneCursorType.DiagonalNwSeResize,
                  u > 0
                    ? d.PaneCursorType.DiagonalNeSwResize
                    : d.PaneCursorType.DiagonalNwSeResize,
                  d.PaneCursorType.HorizontalResize,
                  d.PaneCursorType.HorizontalResize,
                  d.PaneCursorType.VerticalResize,
                  d.PaneCursorType.VerticalResize,
                ];
              i.append(
                this.createLineAnchor({
                  points: [e, t, r, a, s, o, l, h],
                  pointsCursorType: _,
                }),
              );
            }),
            t
          );
        })(h.LineSourcePaneView);
    },
    GzSs: function (e, t, i) {
      'use strict';
      var r = i('aB9a').LineSourcePaneView,
        n = i('jkoZ'),
        a = i('VdBB').HitTestResult,
        s = i('9XXR').splitThousands,
        o = i('Ialn'),
        l = i('cPgM').ScaledPaneRenderer;
      function h(e, t) {
        l.call(this),
          (this._data = null),
          (this._cache = e),
          (this._adapter = t);
      }
      function d(e, t) {
        r.call(this, e, t),
          (this._rendererCache = {}),
          (this._renderer = new h(this._rendererCache, e._adapter));
      }
      inherit(h, l),
        (h.prototype.setData = function (e) {
          this._data = e;
        }),
        (h.prototype._height = function () {
          return Math.max(
            20,
            1 +
              Math.max(
                n.fontHeight(this._adapter.getBodyFont()),
                n.fontHeight(this._adapter.getQuantityFont()),
              ),
          );
        }),
        (h.prototype._bodyWidth = function (e) {
          if (0 === this._adapter.getText().length) return 0;
          e.save(), (e.font = this._adapter.getBodyFont());
          var t = e.measureText(this._adapter.getText()).width;
          return e.restore(), Math.round(10 + t);
        }),
        (h.prototype._getQuantity = function () {
          var e = this._adapter.getQuantity();
          return isNaN(e) ? e : s(this._adapter.getQuantity(), ' ');
        }),
        (h.prototype._quantityWidth = function (e) {
          if (0 === this._getQuantity().length) return 0;
          e.save(), (e.font = this._adapter.getQuantityFont());
          var t = e.measureText(this._getQuantity()).width;
          return e.restore(), Math.round(Math.max(this._height(), 10 + t));
        }),
        (h.prototype._reverseButtonWidth = function () {
          return this._adapter.isOnReverseCallbackPresent()
            ? this._height()
            : 0;
        }),
        (h.prototype._closeButtonWidth = function () {
          return this._adapter.isOnCloseCallbackPresent() ? this._height() : 0;
        }),
        (h.prototype._drawLines = function (e, t, i, r, n) {
          e.save(),
            (e.strokeStyle = this._adapter.getLineColor()),
            (e.lineStyle = this._adapter.getLineStyle()),
            (e.lineWidth = this._adapter.getLineWidth()),
            CanvasEx.drawLine(e, i, r, n, r),
            this._adapter.getExtendLeft() && CanvasEx.drawLine(e, 0, r, t, r),
            e.restore();
        }),
        (h.prototype._drawBody = function (e, t, i) {
          (e.strokeStyle = this._adapter.getBodyBorderColor()),
            (e.fillStyle = this._adapter.getBodyBackgroundColor());
          var r = this._bodyWidth(e),
            n = this._height();
          e.fillRect(t + 0.5, i + 0.5, r - 1, n - 1), e.strokeRect(t, i, r, n);
        }),
        (h.prototype._drawBodyText = function (e, t, i) {
          e.save(),
            (e.textAlign = 'center'),
            (e.textBaseline = 'middle'),
            (e.font = this._adapter.getBodyFont()),
            (e.fillStyle = this._adapter.getBodyTextColor());
          var r = t + this._bodyWidth(e) / 2,
            n = i + this._height() / 2;
          e.fillText(this._adapter.getText(), r, n), e.restore();
        }),
        (h.prototype._drawQuantity = function (e, t, i) {
          (e.strokeStyle = this._adapter.getQuantityBorderColor()),
            (e.fillStyle = this._adapter.getQuantityBackgroundColor());
          var r = this._quantityWidth(e),
            n = this._height();
          e.fillRect(t + 0.5, i + 0.5, r - 1, n - 1), e.strokeRect(t, i, r, n);
        }),
        (h.prototype._drawQuantityText = function (e, t, i) {
          e.save(),
            (e.textAlign = 'center'),
            (e.textBaseline = 'middle'),
            (e.font = this._adapter.getQuantityFont()),
            (e.fillStyle = this._adapter.getQuantityTextColor());
          var r = t + this._quantityWidth(e) / 2,
            n = i + this._height() / 2;
          e.fillText(o.startWithLTR(this._getQuantity() + ''), r, n),
            e.restore();
        }),
        (h.prototype._drawReverseButton = function (e, t, i) {
          e.save(),
            (e.strokeStyle = this._adapter.getReverseButtonBorderColor()),
            (e.fillStyle = this._adapter.getReverseButtonBackgroundColor());
          var r = this._reverseButtonWidth(),
            n = this._height();
          e.fillRect(t + 0.5, i + 0.5, r - 1, n - 1),
            e.strokeRect(t, i, r, n),
            (e.strokeStyle = this._adapter.getReverseButtonIconColor());
          var a = function (e, t) {
              CanvasEx.setLineStyle(e, CanvasEx.LINESTYLE_SOLID),
                CanvasEx.drawLine(e, 0, 0, 0, t),
                CanvasEx.drawLine(e, -1, 1, 1, 1),
                CanvasEx.drawLine(e, -2, 2, 2, 2);
            },
            s = t + Math.round((this._reverseButtonWidth() - 6) / 2),
            o = i + 5;
          e.save(),
            e.translate(s, o),
            a(e, 10),
            e.translate(6, 10),
            e.rotate(Math.PI),
            a(e, 10),
            e.restore(),
            this._adapter._blocked &&
              ((e.fillStyle = 'rgba(140, 140, 140, 0.75)'),
              e.fillRect(t + 0.5, i + 0.5, r - 1, n - 1)),
            e.restore();
        }),
        (h.prototype._drawCloseButton = function (e, t, i) {
          e.save(),
            (e.strokeStyle = this._adapter.getCloseButtonBorderColor()),
            (e.fillStyle = this._adapter.getCloseButtonBackgroundColor());
          var r = this._closeButtonWidth(),
            n = this._height();
          e.fillRect(t + 0.5, i + 0.5, r - 1, n - 1), e.strokeRect(t, i, r, n);
          var a = t + r,
            s = i + n;
          e.strokeStyle = this._adapter.getCloseButtonIconColor();
          var o = (this._closeButtonWidth() - 8) / 2,
            l = (this._height() - 8) / 2;
          CanvasEx.drawPoly(
            e,
            [
              { x: t + o, y: i + l },
              { x: a - o, y: s - l },
            ],
            !0,
          ),
            CanvasEx.drawPoly(
              e,
              [
                { x: a - o, y: i + l },
                { x: t + o, y: s - l },
              ],
              !0,
            ),
            this._adapter._blocked &&
              ((e.fillStyle = 'rgba(140, 140, 140, 0.75)'),
              e.fillRect(t + 0.5, i + 0.5, r - 1, n - 1)),
            e.restore();
        }),
        (h.prototype._drawImpl = function (e) {
          if (
            null !== this._data &&
            this._data.points &&
            !(this._data.points.length < 1)
          ) {
            var t = this._data.width,
              i = this._bodyWidth(e),
              r = this._quantityWidth(e),
              n = this._reverseButtonWidth(e),
              a = i + r + n + this._closeButtonWidth(),
              s = t - a,
              o = Math.max((this._adapter.getLineLength() / 100) * t, 1),
              l = Math.round(t - Math.min(s, o)),
              h = l - a,
              d = Math.round(this._data.points[0].y),
              c = Math.round(d - (this._height() + 1) / 2);
            (this._cache.bodyRight = h + i),
              (this._cache.quantityRight = this._cache.bodyRight + r),
              (this._cache.reverseButtonRight = this._cache.quantityRight + n),
              (this._cache.top = c),
              (this._cache.bottom = c + this._height()),
              (this._cache.left = h),
              (this._cache.right = l),
              this._drawLines(e, h, l, d, t),
              0 !== i && (this._drawBody(e, h, c), this._drawBodyText(e, h, c)),
              0 !== r &&
                (this._drawQuantity(e, this._cache.bodyRight, c),
                this._drawQuantityText(e, this._cache.bodyRight, c)),
              0 !== n &&
                this._drawReverseButton(e, this._cache.quantityRight, c),
              0 !== this._closeButtonWidth() &&
                this._drawCloseButton(e, this._cache.reverseButtonRight, c);
          }
        }),
        (h.prototype.hitTest = function (e) {
          return null === this._data ||
            0 === this._data.points.length ||
            e.y < this._cache.top ||
            e.y > this._cache.bottom ||
            e.x < this._cache.left ||
            this._cache.right < e.x
            ? null
            : this._adapter._blocked
            ? new a(a.CUSTOM, {})
            : e.x >= this._cache.bodyRight &&
              e.x < this._cache.quantityRight &&
              this._adapter._onModifyCallback
            ? new a(a.CUSTOM, {
                clickHandler: this._adapter.callOnModify.bind(this._adapter),
                tapHandler: this._adapter.callOnModify.bind(this._adapter),
                tooltip: {
                  text:
                    this._adapter.getProtectTooltip() ||
                    window.t('Protect Position...'),
                  rect: {
                    x: this._cache.bodyRight,
                    y: this._cache.top,
                    w: this._cache.quantityRight - this._cache.bodyRight,
                    h: this._cache.bottom - this._cache.top,
                  },
                },
              })
            : e.x >= this._cache.quantityRight &&
              e.x < this._cache.reverseButtonRight
            ? new a(a.CUSTOM, {
                clickHandler: this._adapter.callOnReverse.bind(this._adapter),
                tapHandler: this._adapter.callOnReverse.bind(this._adapter),
                tooltip: {
                  text:
                    this._adapter.getReverseTooltip() ||
                    window.t('Reverse Position'),
                  rect: {
                    x: this._cache.quantityRight,
                    y: this._cache.top,
                    w:
                      this._cache.reverseButtonRight -
                      this._cache.quantityRight,
                    h: this._cache.bottom - this._cache.top,
                  },
                },
              })
            : e.x >= this._cache.reverseButtonRight && e.x < this._cache.right
            ? new a(a.CUSTOM, {
                clickHandler: this._adapter.callOnClose.bind(this._adapter),
                tapHandler: this._adapter.callOnClose.bind(this._adapter),
                tooltip: {
                  text:
                    this._adapter.getCloseTooltip() ||
                    window.t('Close Position'),
                  rect: {
                    x: this._cache.reverseButtonRight,
                    y: this._cache.top,
                    w: this._cache.right - this._cache.reverseButtonRight,
                    h: this._cache.bottom - this._cache.top,
                  },
                },
              })
            : new a(a.REGULAR, {
                clickHandler: function () {},
                tapHandler: function () {},
                tooltip: {
                  text: this._adapter.getTooltip(),
                  rect: {
                    x: this._cache.left,
                    y: this._cache.top,
                    w: this._cache.bodyRight - this._cache.left,
                    h: this._cache.bottom - this._cache.top,
                  },
                },
              });
        }),
        inherit(d, r),
        (d.prototype.renderer = function (e, t) {
          return (
            this._invalidated && this._updateImpl(),
            this._renderer.setData({
              points: this._points,
              width: this._model.timeScale().width(),
            }),
            this._renderer
          );
        }),
        (t.PositionPaneView = d);
    },
    'Ht/7': function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('pJOz').TrendLineRenderer,
        s = i('VdBB').HitTestResult,
        o = i('Zy3/').CompositeRenderer,
        l = i('Hr11'),
        h = i('Tmoa'),
        d = i('zDbI').CHART_FONT_FAMILY,
        c = i('QPcX').LetterInCircleRenderer,
        p = i('Tmoa').resetTransparency,
        u = {
          4: { font: 24, circle: 36, circleBorderWidth: 1, bold: !0 },
          3: { font: 20, circle: 28, circleBorderWidth: 1, bold: !1 },
          2: { font: 18, circle: 22, circleBorderWidth: 1, bold: !1 },
          1: { font: 16, circle: 22, circleBorderWidth: 1, bold: !1 },
          0: { font: 11, circle: 14, circleBorderWidth: 1, bold: !0 },
        };
      function _(e, t) {
        n.call(this, e, t), (this._renderer = null);
      }
      inherit(_, n),
        (_.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (_.prototype._updateImpl = function () {
          n.prototype._updateImpl.call(this),
            (this._renderer = null),
            (this._wave = []);
          var e = this._source.properties(),
            t = this._source.priceScale(),
            i = this._model.timeScale();
          if (t && !t.isEmpty() && !i.isEmpty()) {
            var _ = e.color.value();
            if (e.showWave.value())
              for (
                var f = this._source.ownerSource().firstValue(),
                  v = this._source.points(),
                  g = 1;
                g < v.length;
                g++
              ) {
                var y = v[g - 1],
                  w = v[g],
                  x = i.indexToCoordinate(y.index),
                  m = i.indexToCoordinate(w.index),
                  b = y.price,
                  R = w.price,
                  T = t.priceToCoordinate(b, f),
                  S = t.priceToCoordinate(R, f),
                  P = {
                    points: [new r(x, T), new r(m, S)],
                    width: i.width(),
                    height: t.height(),
                    color: h.generateColor(_, 0),
                    linewidth: e.linewidth.value(),
                    linestyle: CanvasEx.LINESTYLE_SOLID,
                    extendleft: !1,
                    extendright: !1,
                    overlayLineEndings: !0,
                  };
                this._wave.push(P);
              }
            var L = this.areAnchorsVisible() ? 0 : 1,
              C = new o();
            for (
              e = this._source.properties(), g = 0;
              g < this._wave.length;
              g++
            ) {
              var M = new a();
              M.setData(this._wave[g]), C.append(M);
            }
            var I = 1;
            if (this._points.length > 2) {
              (y = this._points[2]), (w = this._points[1]);
              I = l.sign(y.y - w.y);
            }
            var O = 0;
            this._model.lineBeingCreated() === this._source && (O = 1);
            for (
              _ = p(e.color.value()), g = 0;
              g < this._points.length - O;
              g++, I = -I
            )
              if (!(g < L)) {
                var D = this._source.label(g),
                  k = D.label,
                  B = 'circle' === D.decoration;
                'brackets' === D.decoration && (k = '(' + k + ')');
                var N = u[D.group],
                  A = new s(s.CHANGEPOINT, { pointIndex: g });
                C.append(
                  new c(
                    {
                      point: this._points[g],
                      letter: k,
                      color: _,
                      font: d,
                      fontSize: N.font,
                      bold: N.bold,
                      showCircle: B,
                      circleRadius: N.circle / 2,
                      circleBorderWidth: N.circleBorderWidth,
                      yOffset: 10,
                      vertAlign: 1 === I ? 'top' : 'bottom',
                    },
                    A,
                  ),
                );
              }
            for (var z = [], E = 0; E < this._points.length; E++) {
              var V = this._points[E].clone();
              (V.data = E), z.push(V);
            }
            this._model.lineBeingCreated() === this._source && z.pop(),
              C.append(this.createLineAnchor({ points: z })),
              (this._renderer = C);
          }
        }),
        (t.ElliottLabelsPaneView = _);
    },
    Hyqq: function (e, t, i) {
      'use strict';
      var r = i('aO4+'),
        n = r.Point,
        a = r.box,
        s = i('f6yo').pointInBox,
        o = i('aB9a').LineSourcePaneView,
        l = i('vq8G').SelectionRenderer,
        h = i('VdBB').HitTestResult,
        d = i('Zy3/').CompositeRenderer,
        c = i('Tmoa'),
        p = i('ikwP').calcTextHorizontalShift,
        u = i('Ialn').isRtl,
        _ = i('cPgM').ScaledPaneRenderer;
      function f(e) {
        _.call(this), (this._measureCache = e), (this._data = null);
      }
      function v(e, t) {
        o.call(this, e, t),
          (this._rendererCache = {}),
          (this._baloonRenderer = new f(this._rendererCache)),
          (this._renderer = null);
      }
      inherit(f, _),
        (f.prototype.setData = function (e) {
          this._data = e;
        }),
        (f.prototype._drawImpl = function (e) {
          if (null !== this._data && 0 !== this._data.points.length) {
            e.font = [
              this._data.fontWeight,
              this._data.fontSize + 'px',
              this._data.fontFamily,
            ].join(' ');
            var t = e.measureText(this._data.label);
            t.height = this._data.fontSize;
            var i = 15,
              r = { left: i, top: (30 - t.height) / 2 },
              n = t.width + 2 * r.left;
            e.textAlign = u() ? 'right' : 'left';
            var a = p(e, t.width),
              s = this._data.points[0].x - (r.left + 20),
              o = this._data.points[0].y - 39;
            this._measureCache &&
              $.extend(this._measureCache, {
                innerWidth: n,
                innerHeight: 30,
                padding: r,
              }),
              e.translate(0.5 + s, 0.5 + o),
              e.beginPath(),
              e.moveTo(24, 30),
              e.lineTo(i, 30),
              e.arcTo(-1e3, 0, 1e3, 0, i),
              e.lineTo(n - i, 0),
              e.arcTo(1e3, 30, -1e3, 30, i),
              e.lineTo(33, 30),
              e.quadraticCurveTo(33, 34, 35, 39),
              e.quadraticCurveTo(27, 36, 24, 30),
              (e.fillStyle = c.generateColor(
                this._data.backgroundColor,
                this._data.transparency,
              )),
              e.fill(),
              (e.strokeStyle = this._data.borderColor),
              (e.lineWidth = 2),
              e.stroke(),
              e.closePath(),
              (e.textBaseline = 'top'),
              (e.fillStyle = this._data.color),
              e.fillText(this._data.label, r.left + a, r.top - 1);
          }
        }),
        (f.prototype.hitTest = function (e) {
          if (
            null === this._data ||
            0 === this._data.points.length ||
            !this._measureCache.padding
          )
            return null;
          var t =
              this._data.points[0].x - (this._measureCache.padding.left + 20),
            i = this._data.points[0].y - (this._measureCache.innerHeight + 9),
            r = a(
              new n(t, i),
              new n(
                t + this._measureCache.innerWidth,
                i + this._measureCache.innerHeight,
              ),
            );
          return s(e, r) ? new h(h.MOVEPOINT) : null;
        }),
        inherit(v, o),
        (v.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (v.prototype._updateImpl = function () {
          o.prototype._updateImpl.call(this);
          var e = {};
          if (
            ((e.points = this._points),
            (e.color = this._source.properties().color.value()),
            (e.borderColor = this._source.properties().borderColor.value()),
            (e.backgroundColor = this._source
              .properties()
              .backgroundColor.value()),
            (e.transparency = this._source.properties().transparency.value()),
            (e.fontWeight = this._source.properties().fontWeight.value()),
            (e.fontSize = this._source.properties().fontsize.value()),
            (e.fontFamily = this._source.properties().font.value()),
            (e.label = this._source.properties().text.value()),
            this._baloonRenderer.setData(e),
            1 === e.points.length)
          ) {
            var t = new d();
            return (
              t.append(this._baloonRenderer),
              t.append(
                new l({
                  points: e.points,
                  bgColors: this._lineAnchorColors(e.points),
                  visible: this.areAnchorsVisible(),
                }),
              ),
              void (this._renderer = t)
            );
          }
          this._renderer = this._baloonRenderer;
        }),
        (t.BalloonPaneView = v);
    },
    Jej9: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('/S7V').TriangleRenderer,
        s = i('pJOz').TrendLineRenderer,
        o = i('qgcf').TextRenderer,
        l = i('BCbF').PolygonRenderer,
        h = i('Zy3/').CompositeRenderer,
        d = i('a7Ha').LineEnd;
      function c(e, t) {
        n.call(this, e, t),
          (this._trendLineRendererPoints01 = new s()),
          (this._trendLineRendererPoints12 = new s()),
          (this._trendLineRendererPoints23 = new s()),
          (this._intersectionRenderer = new a()),
          (this._poligonRenderer = new l()),
          (this._aLabelRenderer = new o()),
          (this._bLabelRenderer = new o()),
          (this._cLabelRenderer = new o()),
          (this._dLabelRenderer = new o()),
          (this._renderer = null);
      }
      inherit(c, n),
        (c.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (c.prototype._updateImpl = function () {
          if (
            (n.prototype._updateImpl.call(this),
            (this._renderer = null),
            (this._valid = !1),
            delete this._intersectPoint,
            delete this._intersectPoint1,
            delete this._intersectPoint2,
            4 === this._points.length)
          ) {
            var e = this._points[0],
              t = this._points[1],
              i = this._points[2],
              a = this._points[3];
            if (Math.abs(i.x - e.x) < 1 || Math.abs(a.x - t.x) < 1) return;
            var s = Math.min(e.x, t.x);
            (s = Math.min(s, i.x)), (s = Math.min(s, a.x));
            var o = (i.y - e.y) / (i.x - e.x),
              l = e.y + (s - e.x) * o,
              c = (a.y - t.y) / (a.x - t.x),
              p = t.y + (s - t.x) * c;
            if (Math.abs(o - c) < 1e-6) return;
            (this._startPoint1 = new r(s, l)),
              (this._startPoint2 = new r(s, p));
            var u = (t.y - e.y + (e.x * o - t.x * c)) / (o - c);
            if (((this._valid = !0), u < s)) {
              var _ = Math.max(e.x, t.x);
              (_ = Math.max(_, i.x)), (_ = Math.max(_, a.x));
              (l = e.y + (_ - e.x) * o), (p = t.y + (_ - t.x) * c);
              (this._startPoint1 = new r(_, l)),
                (this._startPoint2 = new r(_, p));
            }
            var f = e.y + (u - e.x) * o;
            this._intersectPoint = new r(u, f);
          }
          if (!(this._points.length < 2)) {
            var v = this._source.properties(),
              g = new h(),
              y = this,
              w = function (e, t) {
                return {
                  points: [e],
                  text: t,
                  color: v.textcolor.value(),
                  vertAlign: 'middle',
                  horzAlign: 'center',
                  font: v.font.value(),
                  offsetX: 0,
                  offsetY: 0,
                  bold: v.bold && v.bold.value(),
                  italic: v.italic && v.italic.value(),
                  fontsize: v.fontsize.value(),
                  backgroundColor: y._source.properties().color.value(),
                  backgroundRoundRect: 4,
                };
              },
              x = function (e, t) {
                return {
                  points: [e, t],
                  width: y._model.timeScale().width(),
                  height: y._source.priceScale().height(),
                  color: y._source.properties().color.value(),
                  linewidth: v.linewidth.value(),
                  linestyle: CanvasEx.LINESTYLE_SOLID,
                  extendleft: !1,
                  extendright: !1,
                  leftend: d.Normal,
                  rightend: d.Normal,
                };
              },
              m = x(this._points[0], this._points[1]);
            if (
              (this._trendLineRendererPoints01.setData(m),
              g.append(this._trendLineRendererPoints01),
              this._points.length >= 3)
            ) {
              m = x(this._points[1], this._points[2]);
              this._trendLineRendererPoints12.setData(m),
                g.append(this._trendLineRendererPoints12);
            }
            if (4 === this._points.length) {
              m = x(this._points[2], this._points[3]);
              if (
                (this._trendLineRendererPoints23.setData(m),
                g.append(this._trendLineRendererPoints23),
                this._intersectPoint)
              ) {
                var b = [
                  this._startPoint1,
                  this._startPoint2,
                  this._intersectPoint,
                ];
                ((R = {}).points = b),
                  (R.color = v.color.value()),
                  (R.linewidth = v.linewidth.value()),
                  (R.backcolor = v.backgroundColor.value()),
                  (R.fillBackground = v.fillBackground.value()),
                  (R.transparency = v.transparency.value()),
                  this._intersectionRenderer.setData(R),
                  g.append(this._intersectionRenderer);
              } else if (this._intersectPoint1 && this._intersectPoint2) {
                var R;
                b = [
                  this._startPoint1,
                  this._startPoint2,
                  this._intersectPoint2,
                  this._intersectPoint1,
                ];
                ((R = { filled: !0, fillBackground: !0 }).points = b),
                  (R.color = v.color.value()),
                  (R.linewidth = v.linewidth.value()),
                  (R.backcolor = v.backgroundColor.value()),
                  (R.transparency = v.transparency.value()),
                  this._poligonRenderer.setData(R),
                  g.append(this._poligonRenderer);
              }
            }
            var T = w(this._points[0], 'A');
            this._points[1].y > this._points[0].y
              ? ((T.vertAlign = 'bottom'), (T.offsetY = 5))
              : ((T.vertAlign = 'top'), (T.offsetY = 5)),
              this._aLabelRenderer.setData(T),
              g.append(this._aLabelRenderer);
            T = w(this._points[1], 'B');
            if (
              (this._points[1].y < this._points[0].y
                ? ((T.vertAlign = 'bottom'), (T.offsetY = 5))
                : ((T.vertAlign = 'top'), (T.offsetY = 5)),
              this._bLabelRenderer.setData(T),
              g.append(this._bLabelRenderer),
              this._points.length > 2)
            ) {
              T = w(this._points[2], 'C');
              this._points[2].y < this._points[1].y
                ? ((T.vertAlign = 'bottom'), (T.offsetY = 5))
                : ((T.vertAlign = 'top'), (T.offsetY = 5)),
                this._cLabelRenderer.setData(T),
                g.append(this._cLabelRenderer);
            }
            if (this._points.length > 3) {
              T = w(this._points[3], 'D');
              this._points[3].y < this._points[2].y
                ? ((T.vertAlign = 'bottom'), (T.offsetY = 5))
                : ((T.vertAlign = 'top'), (T.offsetY = 5)),
                this._dLabelRenderer.setData(T),
                g.append(this._dLabelRenderer);
            }
            this.addAnchors(g), (this._renderer = g);
          }
        }),
        (t.LineToolTrianglePatternPaneView = c);
    },
    JeuX: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'PathPaneView', function () {
          return s;
        });
      var r = i('mrSG'),
        n = i('BCbF'),
        a = i('Zy3/'),
        s = (function (e) {
          function t(t, i) {
            var r = e.call(this, t, i) || this;
            return (
              (r._polygonRenderer = new n.PolygonRenderer(null)),
              (r._renderer = new a.CompositeRenderer()),
              r
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.renderer = function (e, t) {
              return this._invalidated && this._updateImpl(), this._renderer;
            }),
            (t.prototype._updateImpl = function () {
              e.prototype._updateImpl.call(this), this._renderer.clear();
              var t = this._source.properties().childs(),
                i = {
                  points: this._points,
                  color: t.lineColor.value(),
                  linewidth: t.lineWidth.value(),
                  linestyle: t.lineStyle.value(),
                  leftend: t.leftEnd.value(),
                  rightend: t.rightEnd.value(),
                  filled: !1,
                  backcolor: '',
                  fillBackground: !1,
                  transparency: 0,
                };
              this._polygonRenderer.setData(i),
                this._renderer.append(this._polygonRenderer),
                this.addAnchors(this._renderer);
            }),
            t
          );
        })(i('aB9a').LineSourcePaneView);
    },
    LMGK: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('jkoZ'),
        a = i('aB9a').LineSourcePaneView,
        s = i('VdBB').HitTestResult,
        o = i('9XXR').splitThousands,
        l = i('vq8G').SelectionRenderer,
        h = i('Zy3/').CompositeRenderer,
        d = i('cPgM').ScaledPaneRenderer;
      function c(e, t) {
        d.call(this),
          (this._data = null),
          (this._cache = e),
          (this._adapter = t);
      }
      function p(e, t) {
        a.call(this, e, t),
          (this._renderer = new h()),
          (this._adapter = e._adapter),
          (this._orderRendererCache = {}),
          (this._orderRenderer = new c(this._orderRendererCache, e._adapter)),
          (this._selectionRenderer = new l()),
          this._renderer.append(this._orderRenderer),
          this._renderer.append(this._selectionRenderer),
          (this._selectionData = null);
      }
      inherit(c, d),
        (c.prototype.setData = function (e) {
          this._data = e;
        }),
        (c.prototype._height = function () {
          return Math.max(
            20,
            1 +
              Math.max(
                n.fontHeight(this._adapter.getBodyFont()),
                n.fontHeight(this._adapter.getQuantityFont()),
              ),
          );
        }),
        (c.prototype._bodyWidth = function (e) {
          if (0 === this._adapter.getText().length) return 0;
          e.save(), (e.font = this._adapter.getBodyFont());
          var t = e.measureText(this._adapter.getText()).width;
          return e.restore(), Math.round(20 + t);
        }),
        (c.prototype._getQuantity = function () {
          return o(this._adapter.getQuantity(), ' ');
        }),
        (c.prototype._quantityWidth = function (e) {
          if (0 === this._getQuantity().length) return 0;
          e.save(), (e.font = this._adapter.getQuantityFont());
          var t = e.measureText(this._getQuantity()).width;
          return e.restore(), Math.round(Math.max(this._height(), 10 + t));
        }),
        (c.prototype._cancelButtonWidth = function () {
          return this._adapter.isOnCancelCallbackPresent() ? this._height() : 0;
        }),
        (c.prototype._drawLines = function (e, t, i, r, n) {
          e.save(),
            (e.strokeStyle = this._adapter.getLineColor()),
            (e.lineStyle = this._adapter.getLineStyle()),
            (e.lineWidth = this._adapter.getLineWidth()),
            CanvasEx.drawLine(e, i, r, n, r),
            this._adapter.getExtendLeft() && CanvasEx.drawLine(e, 0, r, t, r),
            e.restore();
        }),
        (c.prototype._drawMovePoints = function (e, t, i) {
          e.save(),
            (e.strokeStyle = this._adapter.getBodyBorderColor()),
            (e.fillStyle = this._adapter.getBodyBorderColor());
          for (
            var r = t + 4,
              n = r + 2,
              a = Math.floor((this._height() - 10) / 2) + 1,
              s = 0;
            s < a;
            ++s
          ) {
            var o = i + 5 + 2 * s;
            CanvasEx.drawLine(e, r, o, n, o);
          }
          e.restore();
        }),
        (c.prototype._drawBody = function (e, t, i) {
          (e.strokeStyle = this._adapter.getBodyBorderColor()),
            (e.fillStyle = this._adapter.getBodyBackgroundColor());
          var r = this._bodyWidth(e),
            n = this._height();
          e.fillRect(t + 0.5, i + 0.5, r - 1, n - 1), e.strokeRect(t, i, r, n);
        }),
        (c.prototype._drawBodyText = function (e, t, i) {
          (e.textAlign = 'center'),
            (e.textBaseline = 'middle'),
            (e.font = this._adapter.getBodyFont()),
            (e.fillStyle = this._adapter.getBodyTextColor());
          var r = t + this._bodyWidth(e) / 2,
            n = i + this._height() / 2;
          e.fillText(this._adapter.getText(), 5 + r - 2, n);
        }),
        (c.prototype._drawQuantity = function (e, t, i, r) {
          e.save(),
            (e.strokeStyle = this._adapter.getQuantityBorderColor()),
            (e.fillStyle = this._adapter.getQuantityBackgroundColor());
          var n = this._quantityWidth(e),
            a = this._height();
          e.fillRect(t + 0.5, i + 0.5, n - 1, a - 1),
            r &&
              e.clip &&
              (e.beginPath(), e.rect(t + 0.5, i - 0.5, n + 1, a + 1), e.clip()),
            e.strokeRect(t, i, n, a),
            e.restore();
        }),
        (c.prototype._drawQuantityText = function (e, t, i) {
          e.save(),
            (e.textAlign = 'center'),
            (e.textBaseline = 'middle'),
            (e.font = this._adapter.getQuantityFont()),
            (e.fillStyle = this._adapter.getQuantityTextColor());
          var r = t + this._quantityWidth(e) / 2,
            n = i + this._height() / 2;
          e.fillText(this._getQuantity(), r, n), e.restore();
        }),
        (c.prototype._drawCancelButton = function (e, t, i, r) {
          (e.strokeStyle = this._adapter.getCancelButtonBorderColor()),
            (e.fillStyle = this._adapter.getCancelButtonBackgroundColor());
          var n = this._cancelButtonWidth(),
            a = this._height();
          e.fillRect(t + 0.5, i + 0.5, n - 1, a - 1),
            this._adapter._blocked &&
              ((e.fillStyle = 'rgba(140, 140, 140, 0.75)'),
              e.fillRect(t + 0.5, i + 0.5, n - 1, a - 1)),
            e.save(),
            r &&
              e.clip &&
              (e.beginPath(), e.rect(t + 0.5, i - 0.5, n + 1, a + 1), e.clip()),
            e.strokeRect(t, i, n, a),
            e.restore();
          var s = t + n,
            o = i + a;
          e.strokeStyle = this._adapter.getCancelButtonIconColor();
          var l = (this._cancelButtonWidth() - 8) / 2,
            h = (this._height() - 8) / 2;
          CanvasEx.drawPoly(
            e,
            [
              { x: t + l, y: i + h },
              { x: s - l, y: o - h },
            ],
            !0,
          ),
            CanvasEx.drawPoly(
              e,
              [
                { x: s - l, y: i + h },
                { x: t + l, y: o - h },
              ],
              !0,
            );
        }),
        (c.prototype._drawImpl = function (e) {
          if (
            null !== this._data &&
            this._data.points &&
            !(this._data.points.length < 1)
          ) {
            var t = this._data.width,
              i = this._bodyWidth(e),
              r = this._quantityWidth(e),
              n = i + r + this._cancelButtonWidth(),
              a = t - n,
              s = Math.max((this._adapter.getLineLength() / 100) * t, 1),
              o = Math.round(t - Math.min(a, s)),
              l = o - n,
              h = Math.round(this._data.points[0].y),
              d = Math.round(h - (this._height() + 1) / 2);
            (this._cache.bodyRight = l + i),
              (this._cache.quantityRight = l + i + r),
              (this._cache.top = d),
              (this._cache.bottom = d + this._height()),
              (this._cache.left = l),
              (this._cache.right = o),
              this._drawLines(e, l, o, h, t);
            var c = !1;
            0 !== i &&
              (this._drawBody(e, l, d),
              this._adapter.hasMoveCallback() && this._drawMovePoints(e, l, d),
              this._drawBodyText(e, l, d),
              (c = !0)),
              0 !== r &&
                (this._drawQuantity(e, l + i, d, c),
                this._drawQuantityText(e, l + i, d),
                (c = !0)),
              0 !== this._cancelButtonWidth() &&
                this._drawCancelButton(e, l + i + r, d, c);
          }
        }),
        (c.prototype.hitTest = function (e) {
          if (null === this._data || 0 === this._data.points.length)
            return null;
          if (e.y < this._cache.top || e.y > this._cache.bottom) return null;
          if (
            this._adapter._blocked &&
            e.x >= this._cache.left &&
            e.x < this._cache.right
          )
            return new s(s.CUSTOM, {});
          if (
            this._adapter._editable &&
            e.x >= this._cache.left &&
            e.x < this._cache.bodyRight
          ) {
            var t = this._adapter.hasMoveCallback() ? s.MOVEPOINT : s.REGULAR;
            return 0 === this._adapter.getTooltip().length
              ? new s(t)
              : new s(t, {
                  tooltip: {
                    text: this._adapter.getTooltip(),
                    rect: {
                      x: this._cache.left,
                      y: this._cache.top,
                      w: this._cache.bodyRight - this._cache.left,
                      h: this._cache.bottom - this._cache.top,
                    },
                  },
                });
          }
          return this._adapter._editable &&
            e.x >= this._cache.bodyRight &&
            e.x < this._cache.quantityRight
            ? this._adapter.hasModifyCallback()
              ? new s(s.CUSTOM, {
                  clickHandler: this._adapter.callOnModify.bind(this._adapter),
                  tapHandler: this._adapter.callOnModify.bind(this._adapter),
                  tooltip: {
                    text:
                      this._adapter.getModifyTooltip() ||
                      window.t('Modify Order...'),
                    rect: {
                      x: this._cache.bodyRight,
                      y: this._cache.top,
                      w: this._cache.quantityRight - this._cache.bodyRight,
                      h: this._cache.bottom - this._cache.top,
                    },
                  },
                })
              : new s(s.REGULAR)
            : this._adapter._cancellable &&
              e.x >= this._cache.quantityRight &&
              e.x < this._cache.right
            ? new s(s.CUSTOM, {
                clickHandler: this._adapter.callOnCancel.bind(this._adapter),
                tapHandler: this._adapter.callOnCancel.bind(this._adapter),
                tooltip: {
                  text:
                    this._adapter.getCancelTooltip() ||
                    window.t('Cancel Order'),
                  rect: {
                    x: this._cache.quantityRight,
                    y: this._cache.top,
                    w: this._cache.right - this._cache.quantityRight,
                    h: this._cache.bottom - this._cache.top,
                  },
                },
              })
            : null;
        }),
        inherit(p, a),
        (p.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(t), this._renderer;
        }),
        (p.prototype._updateImpl = function (e) {
          if (
            (a.prototype._updateImpl.call(this),
            (this._selectionData = null),
            this.isSelectedSource() && this._points.length > 0)
          ) {
            var t = this._points[0].y,
              i = e - l.RADIUS - 1,
              n = this._adapter.hasMoveCallback() ? s.MOVEPOINT : s.REGULAR,
              o = [new r(i, t)];
            this._selectionData = {
              points: o,
              bgColors: this._lineAnchorColors(o),
              hittestResult: n,
              visible: !0,
            };
          }
          this._orderRenderer.setData({
            points: this._points,
            width: this._model.timeScale().width(),
          }),
            this._selectionRenderer.setData(this._selectionData);
        }),
        (t.OrderPaneView = p);
    },
    NCfL: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'LineToolPaneViewWithLevelledTextCache', function () {
          return h;
        });
      var r = i('mrSG'),
        n = i('Eyy1'),
        a = i('aB9a'),
        s = i('xUGI'),
        o = i.n(s),
        l = i('c44N'),
        h = (function (e) {
          function t(t, i) {
            var r = e.call(this, t, i) || this;
            return (
              (r._cache = null),
              (r._cacheDrawParams = null),
              (r._cacheInvalidated = !0),
              r
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.getCacheCanvas = function (e) {
              return (
                this._createCacheIfRequired(e),
                Object(n.ensureNotNull)(this._cache).canvas()
              );
            }),
            (t.prototype.getCacheRects = function (e, t) {
              return this._createCacheIfRequired(e), null;
            }),
            (t.prototype.destroy = function () {
              var e;
              null === (e = this._cache) || void 0 === e || e.destroy();
            }),
            (t.prototype._updateImpl = function () {
              e.prototype._updateImpl.call(this), (this._cacheInvalidated = !0);
            }),
            (t.prototype._createCache = function (e) {
              return new o.a(
                this._source.properties().fibLevelsBasedOnLogScale,
                this._source.levelsCount(),
                e,
              );
            }),
            (t.prototype._createCacheIfRequired = function (e) {
              var t;
              (null !== this._cache &&
                null !== this._cacheDrawParams &&
                Object(l.areEqualPaneRenderParams)(e, this._cacheDrawParams)) ||
                (null === (t = this._cache) || void 0 === t || t.destroy(),
                (this._cache = this._createCache(e)),
                (this._cacheState = this._cache.updateSource(this._source)),
                (this._cacheDrawParams = e),
                (this._cacheInvalidated = !1)),
                this._cacheInvalidated &&
                  ((this._cacheState = this._cache.updateSource(this._source)),
                  (this._cacheInvalidated = !1));
            }),
            t
          );
        })(a.LineSourcePaneView);
    },
    NN6M: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'ParallelChannelRenderer', function () {
          return p;
        });
      var r = i('mrSG'),
        n = i('Eyy1'),
        a = i('aO4+'),
        s = i('GEp6'),
        o = i('hBTJ'),
        l = i('jFln'),
        h = i('VdBB'),
        d = i('Zp/P'),
        c = i('Tmoa'),
        p = (function (e) {
          function t(t, i) {
            var r = e.call(this) || this;
            return (
              (r._data = null),
              (r._hittestResult =
                t || new h.HitTestResult(h.HitTestResult.MOVEPOINT)),
              (r._backHittestResult =
                i || new h.HitTestResult(h.HitTestResult.MOVEPOINT_BACKGROUND)),
              r
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.setData = function (e) {
              this._data = e;
            }),
            (t.prototype.hitTest = function (e, t) {
              if (null === this._data || this._data.points.length < 2)
                return null;
              var i = this._data.points,
                r = i[0],
                n = i[1],
                a = this._extendAndHitTestLineSegment(e, r, n, t);
              if (null !== a) return a;
              if (4 === this._data.points.length && !this._data.skipTopLine) {
                var s = this._data.points,
                  o = s[2],
                  l = s[3],
                  h = this._extendAndHitTestLineSegment(e, o, l, t);
                if (null !== h) return h;
                if (this._data.showMidline && !this._data.skipLines) {
                  var d = r.add(o).scaled(0.5),
                    c = n.add(l).scaled(0.5),
                    p = this._extendAndHitTestLineSegment(e, d, c, t);
                  if (null !== p) return p;
                }
              }
              return this._data.hittestOnBackground && this._data.fillBackground
                ? this._hitTestBackground(e)
                : null;
            }),
            (t.prototype._drawImpl = function (e, t) {
              if (!(null === this._data || this._data.points.length < 2)) {
                (e.lineCap = 'butt'),
                  (e.strokeStyle = this._data.color),
                  (e.lineWidth = this._data.linewidth),
                  Object(l.setLineStyle)(e, this._data.linestyle);
                var i = this._data.points,
                  r = i[0],
                  n = i[1];
                if (
                  (this._data.skipLines ||
                    this._extendAndDrawLineSegment(e, r, n, t),
                  4 === this._data.points.length)
                ) {
                  var a = this._data.points,
                    s = a[2],
                    o = a[3];
                  if (
                    (this._data.skipLines ||
                      this._data.skipTopLine ||
                      this._extendAndDrawLineSegment(e, s, o, t),
                    this._data.fillBackground &&
                      this._drawBackground(e, this._data.points, t),
                    this._data.showMidline && !this._data.skipLines)
                  ) {
                    (e.strokeStyle = this._data.midcolor),
                      (e.lineWidth = this._data.midlinewidth),
                      Object(l.setLineStyle)(e, this._data.midlinestyle);
                    var h = r.add(s).scaled(0.5),
                      d = n.add(o).scaled(0.5);
                    this._extendAndDrawLineSegment(e, h, d, t);
                  }
                }
              }
            }),
            (t.prototype._getColor = function () {
              var e = Object(n.ensureNotNull)(this._data);
              return Object(c.generateColor)(e.backcolor, e.transparency);
            }),
            (t.prototype._extendAndDrawLineSegment = function (e, t, i, r) {
              var n = this._extendAndClipLineSegment(t, i, r);
              null !== n &&
                Object(l.drawLine)(e, n[0].x, n[0].y, n[1].x, n[1].y);
            }),
            (t.prototype._extendAndHitTestLineSegment = function (e, t, i, r) {
              var n = this._extendAndClipLineSegment(t, i, r);
              if (
                null !== n &&
                Object(s.distanceToSegment)(n[0], n[1], e).distance <= 3
              )
                return this._hittestResult;
              return null;
            }),
            (t.prototype._extendAndClipLineSegment = function (e, t, i) {
              var r = Object(n.ensureNotNull)(this._data);
              return Object(d.extendAndClipLineSegment)(
                e,
                t,
                i.cssWidth,
                i.cssHeight,
                r.extendleft,
                r.extendright,
              );
            }),
            (t.prototype._drawBackground = function (e, t, i) {
              var r = Object(n.ensureNotNull)(this._data),
                o = t[0],
                l = t[1],
                h = t[2],
                d = t[3];
              if (
                !(
                  Object(a.equalPoints)(o, l) ||
                  Object(a.equalPoints)(h, d) ||
                  Object(s.distanceToLine)(o, l, h).distance < 1e-6 ||
                  Object(s.distanceToLine)(o, l, d).distance < 1e-6 ||
                  i.cssWidth <= 0 ||
                  i.cssHeight <= 0
                )
              ) {
                var c = [
                  new a.Point(0, 0),
                  new a.Point(i.cssWidth, 0),
                  new a.Point(i.cssWidth, i.cssHeight),
                  new a.Point(0, i.cssHeight),
                ];
                if (
                  ((c = u(c, o, l, d)),
                  r.extendright || (c = u(c, l, d, h)),
                  (c = u(c, d, h, o)),
                  r.extendleft || (c = u(c, h, o, l)),
                  null !== c)
                ) {
                  e.beginPath(), e.moveTo(c[0].x, c[0].y);
                  for (var p = 1; p < c.length; p++) e.lineTo(c[p].x, c[p].y);
                  (e.fillStyle = this._getColor()), e.fill();
                }
              }
            }),
            (t.prototype._hitTestBackground = function (e) {
              var t = Object(n.ensureNotNull)(this._data);
              if (4 !== t.points.length) return null;
              var i = t.points,
                r = i[0],
                a = i[1],
                s = i[2],
                o = (a.y - r.y) / (a.x - r.x),
                l = r.y + o * (e.x - r.x),
                h = s.y + o * (e.x - s.x),
                d = Math.max(l, h),
                c = Math.min(l, h),
                p = Math.min(r.x, a.x),
                u = Math.max(r.x, a.x);
              return (!t.extendleft && e.x < p) || (!t.extendright && e.x > u)
                ? null
                : e.y >= c && e.y <= d
                ? this._backHittestResult
                : null;
            }),
            t
          );
        })(i('cPgM').ScaledPaneRenderer);
      function u(e, t, i, r) {
        return null !== e
          ? Object(o.intersectPolygonAndHalfplane)(
              e,
              Object(a.halfplaneThroughPoint)(
                Object(a.lineThroughPoints)(t, i),
                r,
              ),
            )
          : null;
      }
    },
    Ni7V: function (e, t, i) {
      'use strict';
      var r = i('aO4+'),
        n = r.Point,
        a = r.box,
        s = i('f6yo').pointInBox,
        o = i('aB9a').LineSourcePaneView,
        l = i('vq8G').SelectionRenderer,
        h = i('VdBB').HitTestResult,
        d = i('Zy3/').CompositeRenderer,
        c = i('UfPO'),
        p = i('Tmoa'),
        u = i('ikwP').calcTextHorizontalShift,
        _ = i('Ialn').isRtl,
        f = i('cPgM').ScaledPaneRenderer;
      function v(e, t) {
        f.call(this),
          (this._data = null),
          (this._measureCache = e),
          (this._chartModel = t),
          (this._points = null);
      }
      function g(e, t, r) {
        o.call(this, e, t),
          (this._image = c('price_label', i('Pyj3'))),
          (this._rendererCache = {}),
          (this._priceLabelRenderer = new v(this._rendererCache, t)),
          (this._renderer = null);
      }
      inherit(v, f),
        (v.prototype.setData = function (e) {
          (this._data = e), (this._points = e.points);
        }),
        (v.prototype._drawImpl = function (e) {
          if (
            null !== this._data &&
            null !== this._points &&
            0 !== this._points.length
          ) {
            e.font = [
              this._data.fontWeight,
              this._data.fontSize + 'px',
              this._data.fontFamily,
            ].join(' ');
            var t = e.measureText(this._data.label);
            t.height = this._data.fontSize;
            var i = 10,
              r = 5,
              n = t.width + 2 * i,
              a = t.height + 2 * r,
              s = this._points[0].x - -9,
              o = this._points[0].y - (a + 15);
            e.textAlign = _() ? 'right' : 'left';
            var l = u(e, t.width);
            this._measureCache &&
              Object.assign(this._measureCache, {
                innerWidth: n,
                innerHeight: a,
                tailLeft: -9,
                tailHeight: 15,
              }),
              e.translate(0.5 + s, 0.5 + o),
              e.beginPath(),
              e.moveTo(12, a),
              e.lineTo(-9, a + 15),
              e.lineTo(-10, a + 15 - 1),
              e.lineTo(5, a),
              e.lineTo(3, a),
              e.arcTo(0, a, 0, 0, 3),
              e.lineTo(0, 3),
              e.arcTo(0, 0, n, 0, 3),
              e.lineTo(n - 3, 0),
              e.arcTo(n, 0, n, a, 3),
              e.lineTo(n, a - 3),
              e.arcTo(n, a, 0, a, 3),
              e.lineTo(12, a),
              (e.fillStyle = p.generateColor(
                this._data.backgroundColor,
                this._data.transparency,
              )),
              e.fill(),
              (e.strokeStyle = this._data.borderColor),
              (e.lineWidth = 2),
              e.stroke(),
              e.closePath(),
              (e.textBaseline = 'alphabetic'),
              (e.fillStyle = this._data.color),
              e.fillText(
                this._data.label,
                i + l,
                a / 2 + Math.floor(0.35 * this._data.fontSize),
              ),
              e.translate(-0.5, -0.5),
              e.beginPath(),
              e.arc(-9, a + 15, 2.5, 0, 2 * Math.PI, !1),
              (e.fillStyle = p.generateColor(
                this._data.borderColor,
                this._data.transparency,
              )),
              e.fill(),
              (e.strokeStyle = this._chartModel.backgroundColor().value()),
              (e.lineWidth = 1),
              e.stroke(),
              e.closePath();
          }
        }),
        (v.prototype.hitTest = function (e) {
          if (
            null === this._data ||
            null === this._points ||
            0 === this._points.length
          )
            return null;
          var t = this._points[0].x - this._measureCache.tailLeft,
            i =
              this._points[0].y -
              (this._measureCache.innerHeight + this._measureCache.tailHeight),
            r = a(
              new n(t, i),
              new n(
                t + this._measureCache.innerWidth,
                i + this._measureCache.innerHeight,
              ),
            );
          return s(e, r) ? new h(h.MOVEPOINT) : null;
        }),
        inherit(g, o),
        (g.prototype._updateImpl = function () {
          if (
            (o.prototype._updateImpl.call(this),
            (this._renderer = null),
            this._source.points().length > 0)
          ) {
            var e = this._source.points()[0].price,
              t = this._source.priceScale();
            if (!t || t.isEmpty()) return;
            var i = this._source.ownerSource().firstValue();
            this._priceLabel = t.formatPrice(e, i);
          }
          var r = {};
          if (
            ((r.points = this._points),
            (r.borderColor = this._source.properties().borderColor.value()),
            (r.backgroundColor = this._source
              .properties()
              .backgroundColor.value()),
            (r.color = this._source.properties().color.value()),
            (r.fontWeight = this._source.properties().fontWeight.value()),
            (r.fontSize = this._source.properties().fontsize.value()),
            (r.fontFamily = this._source.properties().font.value()),
            (r.transparency = this._source.properties().transparency.value()),
            (r.label = this._priceLabel),
            (r.image = this._image),
            this._priceLabelRenderer.setData(r),
            1 === r.points.length)
          ) {
            var n = new d();
            return (
              n.append(this._priceLabelRenderer),
              n.append(
                new l({
                  points: r.points,
                  bgColors: this._lineAnchorColors(r.points),
                  visible: this.areAnchorsVisible(),
                }),
              ),
              void (this._renderer = n)
            );
          }
          this._renderer = this._priceLabelRenderer;
        }),
        (g.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.PriceLabelPaneView = g);
    },
    Pyj3: function (e, t, i) {
      e.exports = i.p + '6bbe99469a47c58a056f32085bbdfc26.png';
    },
    QA6D: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'EllipseRendererSimple', function () {
          return h;
        });
      var r = i('mrSG'),
        n = i('VdBB'),
        a = i('Hr11'),
        s = i('aO4+'),
        o = i('Tmoa'),
        l = i('jFln'),
        h = (function (e) {
          function t(t, i, r) {
            var a = e.call(this) || this;
            return (
              (a._data = t),
              (a._hitTest =
                i || new n.HitTestResult(n.HitTestResult.MOVEPOINT)),
              (a._backgroundHitTest =
                r || new n.HitTestResult(n.HitTestResult.MOVEPOINT_BACKGROUND)),
              a
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.hitTest = function (e) {
              if (this._data.points.length < 2) return null;
              var t = this._data.points[0],
                i = this._data.points[1],
                r = 0.5 * Math.abs(t.x - i.x),
                n = Math.abs(t.x - i.x),
                o = Math.abs(t.y - i.y),
                l = t.add(i).scaled(0.5),
                h = e.subtract(l);
              if (n < 1 || o < 1) return null;
              var d = (i.y - t.y) / (i.x - t.x),
                c = (h = new s.Point(h.x, h.y / d)).x * h.x + h.y * h.y - r * r;
              return (
                (c = Object(a.sign)(c) * Math.sqrt(Math.abs(c / r))),
                Math.abs(c) < 3
                  ? this._hitTest
                  : this._data.fillBackground &&
                    !this._data.noHitTestOnBackground &&
                    c < 3
                  ? this._backgroundHitTest
                  : null
              );
            }),
            (t.prototype._drawImpl = function (e) {
              (e.lineCap = 'butt'),
                (e.strokeStyle = this._data.color),
                (e.lineWidth = this._data.linewidth),
                void 0 !== this._data.linestyle &&
                  Object(l.setLineStyle)(e, this._data.linestyle);
              var t = this._data.points[0],
                i = this._data.points[1],
                r = Math.abs(t.x - i.x),
                n = Math.abs(t.y - i.y),
                a = t.add(i).scaled(0.5);
              if (!(r < 1 || n < 1)) {
                var s = 0;
                if (this._data.wholePoints) {
                  var h = this._data.wholePoints[0],
                    d = this._data.wholePoints[1];
                  s = Math.abs(h.x - d.x);
                }
                e.save(),
                  e.translate(a.x, a.y),
                  e.scale(1, n / r),
                  e.beginPath(),
                  e.arc(0, 0, r / 2, 0, 2 * Math.PI, !1),
                  e.restore(),
                  e.stroke(),
                  this._data.fillBackground &&
                    (this._data.wholePoints &&
                      (e.translate(a.x, a.y),
                      e.scale(1, n / r),
                      e.arc(0, 0, s / 2, 0, 2 * Math.PI, !0)),
                    (e.fillStyle = Object(o.generateColor)(
                      this._data.backcolor,
                      this._data.transparency,
                      !0,
                    )),
                    e.fill());
              }
            }),
            t
          );
        })(i('cPgM').ScaledPaneRenderer);
    },
    QPcX: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'LetterInCircleRenderer', function () {
          return o;
        });
      var r = i('aO4+'),
        n = i('f6yo'),
        a = i('ikwP'),
        s = i('XlJ7'),
        o = (function () {
          function e(e, t) {
            (this._data = e), (this._hitTestResult = t);
          }
          return (
            (e.prototype.hitTest = function (e) {
              var t = this._center(),
                i = this._data.circleRadius,
                a = {
                  min: new r.Point(t.x - i, t.y - i),
                  max: new r.Point(t.x + i, t.y + i),
                };
              return Object(n.pointInBox)(e, a) ? this._hitTestResult : null;
            }),
            (e.prototype.draw = function (e, t) {
              var i = this;
              e.save();
              var r = t.pixelRatio,
                n = (Math.max(1, Math.floor(r)) % 2) / 2,
                o = this._center(),
                l = Math.round(o.x * r) + n,
                h = Math.round(o.y * r) + n;
              if (this._data.showCircle) {
                var d =
                  Math.round(l + this._data.circleRadius * r) -
                  l -
                  (this._data.circleBorderWidth * r) / 2;
                (e.strokeStyle = this._data.color),
                  (e.lineWidth = this._data.circleBorderWidth * r),
                  e.beginPath(),
                  e.moveTo(l + d, h),
                  e.arc(l, h, d, 0, 2 * Math.PI, !1),
                  e.stroke();
              }
              (e.font = Object(s.makeFont)(
                this._data.fontSize,
                this._data.font,
                this._data.bold ? 'bold' : void 0,
              )),
                (e.textBaseline = 'middle'),
                (e.textAlign = 'center'),
                (e.fillStyle = this._data.color),
                Object(a.drawScaled)(e, r, function () {
                  e.fillText(
                    i._data.letter,
                    l / r,
                    h / r + 0.05 * i._data.fontSize,
                  );
                }),
                e.restore();
            }),
            (e.prototype._center = function () {
              var e = 'bottom' === this._data.vertAlign ? -1 : 1,
                t =
                  this._data.point.y +
                  e * this._data.yOffset +
                  e * this._data.circleRadius,
                i = this._data.point.x;
              return new r.Point(i, t);
            }),
            e
          );
        })();
    },
    Qa6j: function (e, t, i) {
      'use strict';
      i.r(t);
      var r = i('mrSG'),
        n = i('aB9a'),
        a = i('Zy3/'),
        s = i('qgcf'),
        o = i('aO4+'),
        l = i('VaSN'),
        h = i('cPgM'),
        d = i('VdBB');
      function c(e) {
        if (e < 92) return 18;
        var t = 0.25 * e;
        return (
          (t = Math.min(t, 106)),
          (t = Math.max(t, 18)),
          (t = Math.min(t, 0.9 * e))
        );
      }
      var p = (function (e) {
          function t(t) {
            var i = e.call(this) || this;
            return (i._data = t), i;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.setData = function (e) {
              this._data = e;
            }),
            (t.prototype.hitTest = function (e) {
              if (this._data.points.length < 2) return null;
              var t = this._data.points[0],
                i = this._data.points[1].subtract(t),
                r = i.length();
              (i = this._data.points[1].subtract(
                this._data.points[0],
              )).length() < 22 &&
                ((t = this._data.points[1].addScaled(i.normalized(), -22)),
                (i = this._data.points[1].subtract(t)));
              var n = e.subtract(t),
                a = i.dotProduct(n) / r;
              if (a < 0 || a > r) return null;
              for (
                var s = i.scaled(1 / r),
                  o = t.addScaled(s, a),
                  h = e.subtract(o),
                  c = Object(l.lastEventIsTouch)() ? 24 : 3,
                  p = this._hittestGeometry(r),
                  u = p.length - 2;
                u >= 0;
                u--
              ) {
                var _ = p[u];
                if (a >= _.x) {
                  var f = p[u + 1],
                    v = f.x - _.x,
                    g = f.y - _.y,
                    y = (a - _.x) / v,
                    w = _.y + g * y;
                  return h.length() <= w + c
                    ? new d.HitTestResult(d.HitTestResult.MOVEPOINT)
                    : null;
                }
              }
              return h.length() < 3
                ? new d.HitTestResult(d.HitTestResult.MOVEPOINT)
                : null;
            }),
            (t.prototype._drawImpl = function (e) {
              if (!(this._data.points.length < 2)) {
                (e.fillStyle = this._data.color),
                  (e.strokeStyle = this._data.color),
                  (e.lineJoin = 'round'),
                  (e.lineCap = 'round');
                var t = this._data.points[1].subtract(this._data.points[0]),
                  i = t.length(),
                  r = this._data.points[0];
                i < 22 &&
                  ((r = this._data.points[1].addScaled(t.normalized(), -22)),
                  (t = this._data.points[1].subtract(r)));
                var n,
                  a,
                  s = new o.Point(t.y, -t.x).normalized(),
                  l = this._arrowGeometry(t.length()),
                  h = t.normalized();
                (e.lineWidth =
                  ((n = t.length()),
                  (a = Math.round(0.02 * n)),
                  (a = Math.min(a, 5)),
                  (a = Math.max(a, 2)))),
                  e.beginPath(),
                  e.moveTo(r.x, r.y);
                for (var d = 0; d < l.length; d++) {
                  var c = l[d],
                    p = r.addScaled(h, c.x).addScaled(s, c.y);
                  e.lineTo(p.x, p.y);
                }
                e.lineTo(this._data.points[1].x, this._data.points[1].y);
                for (d = l.length - 1; d >= 0; d--) {
                  (c = l[d]), (p = r.addScaled(h, c.x).addScaled(s, -c.y));
                  e.lineTo(p.x, p.y);
                }
                e.lineTo(r.x, r.y), e.stroke(), e.fill();
              }
            }),
            (t.prototype._arrowGeometry = function (e) {
              var t = c(e),
                i = [],
                r = e >= 35 ? 0.1 : 0;
              return (
                i.push(new o.Point(0, 0)),
                i.push(new o.Point(e - t + t * r, (1.22 * t) / 4)),
                i.push(new o.Point(e - t, (1.22 * t) / 2)),
                i.push(new o.Point(e, 0)),
                i
              );
            }),
            (t.prototype._hittestGeometry = function (e) {
              var t = c(e),
                i = [];
              return (
                i.push(new o.Point(0, 0)),
                i.push(new o.Point(e - t, (1.22 * t) / 4)),
                i.push(new o.Point(e - t, (1.22 * t) / 2)),
                i.push(new o.Point(e, 0)),
                i
              );
            }),
            t
          );
        })(h.ScaledPaneRenderer),
        u = i('QA6D');
      i.d(t, 'ArrowMarkerPaneView', function () {
        return _;
      });
      var _ = (function (e) {
        function t(t, i) {
          var r = e.call(this, t, i) || this;
          return (
            (r._textRendererData = {
              text: '',
              color: '',
              vertAlign: 'middle',
              horzAlign: 'center',
              font: '',
              offsetX: 10,
              offsetY: 10,
              points: [],
              forceTextAlign: !0,
            }),
            (r._arrowRendererData = { points: [], color: '' }),
            (r._ellipseRendererData = {
              color: '',
              linewidth: 0,
              points: [],
              fillBackground: !0,
              backcolor: '',
              noHitTestOnBackground: !0,
            }),
            (r._drawAsCircle = !1),
            (r._textRenderer = new s.TextRenderer(r._textRendererData)),
            (r._arrowRenderer = new p(r._arrowRendererData)),
            (r._ellipseRenderer = new u.EllipseRendererSimple(
              r._ellipseRendererData,
            )),
            r
          );
        }
        return (
          Object(r.__extends)(t, e),
          (t.prototype.renderer = function (e, t) {
            this._invalidated && this._updateImpl();
            var i = new a.CompositeRenderer();
            this._drawAsCircle
              ? i.append(this._ellipseRenderer)
              : i.append(this._arrowRenderer);
            var n = this._getSource().properties();
            return (
              this._textRendererData.points &&
                this._textRendererData.points.length > 0 &&
                n.showLabel.value() &&
                (this._textRenderer.setData(
                  Object(r.__assign)({}, this._textRendererData),
                ),
                i.append(this._textRenderer)),
              this.addAnchors(i),
              i
            );
          }),
          (t.prototype._updateImpl = function () {
            e.prototype._updateImpl.call(this);
            var t = this._getPoints(),
              i = this._getSource().properties();
            if (
              ((this._arrowRendererData.color = i.backgroundColor.value()),
              (this._arrowRendererData.points = t),
              (this._textRendererData.text = i.text.value()),
              (this._textRendererData.color = i.textColor.value()),
              (this._textRendererData.font = i.font.value()),
              (this._textRendererData.bold = i.bold.value()),
              (this._textRendererData.italic = i.italic.value()),
              (this._textRendererData.fontsize = i.fontsize.value()),
              t.length >= 2)
            ) {
              var r = this._getSource().points(),
                n = r[0].index - r[1].index,
                a = r[0].price - r[1].price;
              if (
                ((this._drawAsCircle = 0 === n && Math.abs(a) < 1e-8),
                (this._textRendererData.points = [t[0]]),
                this._drawAsCircle)
              ) {
                (this._textRendererData.horzAlign = 'left'),
                  (this._textRendererData.vertAlign = 'middle');
                var s = new o.Point(t[0].x - 9, t[0].y - 9),
                  l = new o.Point(t[0].x + 9, t[0].y + 9);
                (this._ellipseRendererData.points = [s, l]),
                  (this._ellipseRendererData.backcolor = i.backgroundColor.value()),
                  (this._ellipseRendererData.color = i.backgroundColor.value());
              } else {
                var h = t[1].subtract(t[0]);
                Math.abs(h.x) >= Math.abs(h.y)
                  ? (t[1].x > t[0].x
                      ? (this._textRendererData.horzAlign = 'right')
                      : (this._textRendererData.horzAlign = 'left'),
                    (this._textRendererData.vertAlign = 'middle'))
                  : (t[1].y > t[0].y
                      ? (this._textRendererData.vertAlign = 'bottom')
                      : (this._textRendererData.vertAlign = 'top'),
                    (this._textRendererData.horzAlign = 'center'));
              }
            }
          }),
          t
        );
      })(n.LineSourcePaneView);
    },
    R7Bt: function (e, t, i) {
      'use strict';
      var r = i('Eyy1').ensureNotNull,
        n = i('aO4+').Point,
        a = i('IjC5').RectangleRenderer,
        s = i('pJOz').TrendLineRenderer,
        o = i('cjIn').PaneRendererCachedImage,
        l = i('VdBB').HitTestResult,
        h = i('Zy3/').CompositeRenderer,
        d = i('a7Ha').LineEnd,
        c = i('d1Pk').fibLevelCoordinate,
        p = i('NCfL').LineToolPaneViewWithLevelledTextCache;
      function u(e, t) {
        p.call(this, e, t),
          (this._rendererCache = {}),
          (this._trendLineRenderer = new s()),
          (this._renderer = null);
      }
      inherit(u, p),
        (u.prototype.getCacheRects = function (e, t) {
          if (
            (p.prototype.getCacheRects.call(this, e, i),
            !this._cacheState.preparedCells)
          )
            return null;
          var i = this._levels[t].index - 1,
            a = this._cacheState.preparedCells.cells[i];
          if (!a) return null;
          var s = this._points[0],
            o = this._points[1],
            l = Math.min(s.x, o.x),
            h = Math.max(s.x, o.x);
          (s = new n(l, this._levels[t].y)), (o = new n(h, this._levels[t].y));
          var d,
            c = this._source.properties(),
            u = c.extendLines.value() ? this._model.timeScale().width() : h,
            _ = r(this._cache);
          switch (c.horzLabelsAlign.value()) {
            case 'left':
              d = s;
              break;
            case 'center':
              ((d = s.add(o).scaled(0.5)).x += a.width / 2),
                (d.x = Math.round(d.x));
              break;
            case 'right':
              c.extendLines.value()
                ? (d = new n(u - 4, this._levels[t].y))
                : (((d = new n(u + 4, this._levels[t].y)).x += a.width),
                  (d.x = Math.round(d.x)));
          }
          var f = {
              left: a.left,
              top: _.topByRow(this._cacheState.row),
              width: a.width,
              height: _.rowHeight(this._cacheState.row),
            },
            v = {
              left: d.x - f.width,
              top: d.y,
              width: a.width,
              height: f.height,
            },
            g = c.vertLabelsAlign.value();
          return (
            'middle' === g && (v.top -= v.height / 2),
            'bottom' === g && (v.top -= v.height),
            { cacheRect: f, targetRect: v }
          );
        }),
        (u.prototype._updateImpl = function () {
          if (
            (p.prototype._updateImpl.call(this),
            (this._renderer = null),
            !(this._source.points().length < 2))
          ) {
            var e = this._source.priceScale();
            if (e && !e.isEmpty() && !this._model.timeScale().isEmpty()) {
              var t = this._source.ownerSource().firstValue();
              if (null != t) {
                var i = this._source.points()[0],
                  r = this._source.points()[1],
                  u = !1;
                (C = this._source.properties()).reverse &&
                  C.reverse.value() &&
                  (u = C.reverse.value()),
                  (this._levels = []);
                var _,
                  f,
                  v = u ? i.price : r.price,
                  g = u ? r.price : i.price,
                  y = g - v,
                  w = e.isLog() && C.fibLevelsBasedOnLogScale.value();
                if (w)
                  (_ = e.priceToCoordinate(v, t)),
                    (f = e.priceToCoordinate(g, t) - _);
                for (
                  var x = { price: v, coordinate: _ },
                    m = { price: y, coordinate: f },
                    b = this._source.levelsCount(),
                    R = 1;
                  R <= b;
                  R++
                ) {
                  var T = C['level' + R];
                  if (T.visible.value()) {
                    var S = T.coeff.value(),
                      P = T.color.value(),
                      L = c(x, m, S, e, t, w);
                    this._levels.push({
                      color: P,
                      y: L,
                      linewidth: C.levelsStyle.linewidth.value(),
                      linestyle: C.levelsStyle.linestyle.value(),
                      index: R,
                    });
                  }
                }
                if (!(this._points.length < 2)) {
                  var C,
                    M = new h(),
                    I =
                      ((i = this._points[0]),
                      (r = this._points[1]),
                      Math.min(i.x, r.x)),
                    O = Math.max(i.x, r.x),
                    D = (C = this._source.properties()).fillBackground.value(),
                    k = C.transparency.value(),
                    B = C.extendLinesLeft.value(),
                    N = C.extendLines.value();
                  if (D)
                    for (R = 0; R < this._levels.length; R++)
                      if (R > 0 && D) {
                        var A = this._levels[R - 1],
                          z =
                            ((i = new n(I, this._levels[R].y)),
                            (r = new n(O, A.y)),
                            {});
                        (z.points = [i, r]),
                          (z.color = this._levels[R].color),
                          (z.linewidth = 0),
                          (z.backcolor = this._levels[R].color),
                          (z.fillBackground = !0),
                          (z.transparency = k),
                          (z.extendLeft = B),
                          (z.extendRight = N),
                          (j = new a(void 0, void 0, !0)).setData(z),
                          M.append(j);
                      }
                  var E = I,
                    V = O;
                  E === V && (B && (E -= 1), N && (V += 1));
                  for (R = 0; R < this._levels.length; R++) {
                    var j,
                      H = {
                        points: [
                          (i = new n(E, this._levels[R].y)),
                          (r = new n(V, this._levels[R].y)),
                        ],
                        width: this._model.timeScale().width(),
                        height: this._source.priceScale().height(),
                        color: this._levels[R].color,
                        linewidth: this._levels[R].linewidth,
                        linestyle: this._levels[R].linestyle,
                        extendleft: B,
                        extendright: N,
                        leftend: d.Normal,
                        rightend: d.Normal,
                      };
                    if (
                      ((j = new s()).setData(H),
                      j.setHitTest(
                        new l(l.MOVEPOINT, null, this._levels[R].index),
                      ),
                      M.append(j),
                      C.showCoeffs.value() || C.showPrices.value())
                    ) {
                      var W = new o(this, R);
                      M.append(W);
                    }
                  }
                  if (C.trendline.visible.value()) {
                    H = {
                      points: [this._points[0], this._points[1]],
                      width: this._model.timeScale().width(),
                      height: this._source.priceScale().height(),
                      color: C.trendline.color.value(),
                      linewidth: C.trendline.linewidth.value(),
                      linestyle: C.trendline.linestyle.value(),
                      extendleft: !1,
                      extendright: !1,
                      leftend: d.Normal,
                      rightend: d.Normal,
                    };
                    this._trendLineRenderer.setData(H),
                      M.append(this._trendLineRenderer);
                  }
                  this.addAnchors(M), (this._renderer = M);
                }
              }
            }
          }
        }),
        (u.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.FibRetracementPaneView = u);
    },
    S6aM: function (e, t, i) {
      'use strict';
      var r = i('aB9a').LineSourcePaneView,
        n = i('pJOz').TrendLineRenderer,
        a = i('qgcf').TextRenderer,
        s = i('Zy3/').CompositeRenderer,
        o = i('zXvd').NumericFormatter,
        l = i('Tmoa'),
        h = i('a7Ha').LineEnd;
      function d(e, t) {
        r.call(this, e, t),
          (this._numericFormatter = new o()),
          (this._retrace1LabelRenderer = new a()),
          (this._retrace12LabelRenderer = new a()),
          (this._renderer = null);
      }
      inherit(d, r),
        (d.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (d.prototype._updateImpl = function () {
          if (
            (r.prototype._updateImpl.call(this),
            (this._renderer = null),
            delete this._retrace1,
            delete this._retrace2,
            this._source.points().length >= 4)
          ) {
            var e = this._source.points()[1],
              t = this._source.points()[2],
              i = this._source.points()[3];
            this._retrace1 =
              Math.round(
                100 * Math.abs((i.price - t.price) / (t.price - e.price)),
              ) / 100;
          }
          if (this._source.points().length >= 6) {
            i = this._source.points()[3];
            var a = this._source.points()[4],
              o = this._source.points()[5];
            this._retrace2 =
              Math.round(
                100 * Math.abs((o.price - a.price) / (a.price - i.price)),
              ) / 100;
          }
          if (!(this._points.length < 2)) {
            for (
              var d = this._source.properties(),
                c = new s(),
                p = this,
                u = function (e, t) {
                  return {
                    points: [e],
                    text: t,
                    color: d.textcolor.value(),
                    vertAlign: 'middle',
                    horzAlign: 'center',
                    font: d.font.value(),
                    offsetX: 0,
                    offsetY: 0,
                    bold: d.bold && d.bold.value(),
                    italic: d.italic && d.italic.value(),
                    fontsize: d.fontsize.value(),
                    backgroundColor: p._source.properties().color.value(),
                    backgroundRoundRect: 4,
                  };
                },
                _ = function (e, t, i, r) {
                  return {
                    points: [e, t],
                    width: p._model.timeScale().width(),
                    height: p._source.priceScale().height(),
                    color: l.generateColor(
                      p._source.properties().color.value(),
                      i,
                    ),
                    linewidth: r || d.linewidth.value(),
                    linestyle: CanvasEx.LINESTYLE_SOLID,
                    extendleft: !1,
                    extendright: !1,
                    leftend: h.Normal,
                    rightend: h.Normal,
                  };
                },
                f = 1;
              f < this._points.length;
              f++
            ) {
              var v = _(this._points[f - 1], this._points[f], 0);
              (y = new n()).setData(v), c.append(y);
            }
            if (this._retrace1) {
              v = _(this._points[1], this._points[3], 70, 1);
              (y = new n()).setData(v), c.append(y);
              var g = u(
                this._points[1].add(this._points[3]).scaled(0.5),
                this._numericFormatter.format(this._retrace1),
              );
              this._retrace1LabelRenderer.setData(g),
                c.append(this._retrace1LabelRenderer);
            }
            if (this._retrace2) {
              var y;
              v = _(this._points[3], this._points[5], 70, 1);
              (y = new n()).setData(v), c.append(y);
              g = u(
                this._points[5].add(this._points[3]).scaled(0.5),
                this._numericFormatter.format(this._retrace2),
              );
              this._retrace12LabelRenderer.setData(g),
                c.append(this._retrace12LabelRenderer);
            }
            this.addAnchors(c), (this._renderer = c);
          }
        }),
        (t.LineToolThreeDrivesPaneView = d);
    },
    SvjA: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('z+cS').VerticalLineRenderer,
        a = i('aB9a').LineSourcePaneView,
        s = i('qgcf').TextRenderer,
        o = i('IjC5').RectangleRenderer,
        l = i('pJOz').TrendLineRenderer,
        h = i('VdBB').HitTestResult,
        d = i('Zy3/').CompositeRenderer,
        c = i('a7Ha').LineEnd;
      function p(e, t) {
        a.call(this, e, t),
          (this._trendLineRendererPoints12 = new l()),
          (this._trendLineRendererPoints23 = new l()),
          (this._renderer = null);
      }
      inherit(p, a),
        (p.prototype._updateImpl = function () {
          if (
            (a.prototype._updateImpl.call(this),
            (this._renderer = null),
            3 === this._source.points().length)
          ) {
            if (
              !this._source.priceScale() ||
              this._source.priceScale().isEmpty() ||
              this._model.timeScale().isEmpty()
            )
              return;
            var e = this._source.points()[0],
              t = this._source.points()[1],
              i = this._source.points()[2];
            if (((this._levels = []), t.index === e.index)) return;
            var l = t.index - e.index,
              p = this._source.properties(),
              u = i.index;
            if (null === this._model.timeScale().visibleBarsStrictRange())
              return;
            for (var _ = 1; _ <= 11; _++) {
              var f = p['level' + _];
              if (f.visible.value()) {
                var v = f.coeff.value(),
                  g = f.color.value(),
                  y = Math.round(u + v * l),
                  w = {
                    x: this._model.timeScale().indexToCoordinate(y),
                    coeff: v,
                    color: g,
                    linewidth: f.linewidth.value(),
                    linestyle: f.linestyle.value(),
                    index: _,
                  };
                p.showCoeffs.value() &&
                  ((w.text = v), (w.y = this._source.priceScale().height())),
                  this._levels.push(w);
              }
            }
          }
          if (!(this._points.length < 2)) {
            var x = new d();
            (e = this._points[0]), (t = this._points[1]);
            if ((p = this._source.properties()).trendline.visible.value()) {
              var m = {
                points: [e, t],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: p.trendline.color.value(),
                linewidth: p.trendline.linewidth.value(),
                linestyle: p.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: c.Normal,
                rightend: c.Normal,
              };
              this._trendLineRendererPoints12.setData(m),
                x.append(this._trendLineRendererPoints12);
            }
            if (this._points.length < 3)
              return this.addAnchors(x), void (this._renderer = x);
            i = this._points[2];
            if (p.trendline.visible.value()) {
              m = {
                points: [t, i],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: p.trendline.color.value(),
                linewidth: p.trendline.linewidth.value(),
                linestyle: p.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: c.Normal,
                rightend: c.Normal,
              };
              this._trendLineRendererPoints23.setData(m),
                x.append(this._trendLineRendererPoints23);
            }
            var b = p.fillBackground.value(),
              R = p.transparency.value(),
              T = this._model.timeScale().width(),
              S = this._source.priceScale().height();
            if (b)
              for (_ = 1; _ < this._levels.length; _++) {
                var P = this._levels[_ - 1],
                  L =
                    ((e = new r(P.x, 0)),
                    (t = new r(
                      this._levels[_].x,
                      this._source.priceScale().height(),
                    )),
                    {});
                (L.points = [e, t]),
                  (L.color = this._levels[_].color),
                  (L.linewidth = 0),
                  (L.backcolor = this._levels[_].color),
                  (L.fillBackground = !0),
                  (L.transparency = R),
                  (L.extendLeft = !1),
                  (L.extendRight = !1),
                  (D = new o(void 0, void 0, !0)).setData(L),
                  x.append(D);
              }
            for (_ = 0; _ < this._levels.length; _++) {
              if (void 0 !== this._levels[_].text) {
                var C,
                  M = p.horzLabelsAlign.value();
                switch (
                  ((M =
                    'left' === M ? 'right' : 'right' === M ? 'left' : 'center'),
                  p.vertLabelsAlign.value())
                ) {
                  case 'top':
                    C = new r(this._levels[_].x, 0);
                    break;
                  case 'middle':
                    C = new r(this._levels[_].x, 0.5 * this._levels[_].y);
                    break;
                  case 'bottom':
                    C = new r(this._levels[_].x, this._levels[_].y);
                }
                var I = {
                  points: [C],
                  text: '' + this._levels[_].text,
                  color: this._levels[_].color,
                  vertAlign: p.vertLabelsAlign.value(),
                  horzAlign: M,
                  font: p.font.value(),
                  offsetX: 2,
                  offsetY: 0,
                  fontsize: 12,
                };
                x.append(new s(I));
              }
              var O = {};
              (O.width = T),
                (O.height = S),
                (O.x = this._levels[_].x),
                (O.color = this._levels[_].color),
                (O.linewidth = this._levels[_].linewidth),
                (O.linestyle = this._levels[_].linestyle);
              var D,
                k = new h(h.MOVEPOINT, null, this._levels[_].index);
              (D = new n()).setData(O), D.setHitTest(k), x.append(D);
            }
            this.addAnchors(x), (this._renderer = x);
          }
        }),
        (p.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.TrendBasedFibTimePaneView = p);
    },
    UcQu: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('qgcf').TextRenderer,
        s = i('qgcf').calculateLabelPosition,
        o = i('IjC5').RectangleRenderer,
        l = i('pJOz').TrendLineRenderer,
        h = i('Zy3/').CompositeRenderer,
        d = i('GH0z').PercentageFormatter,
        c = i('nda6').TimeSpanFormatter,
        p = i('5C6T').PipFormatter,
        u = i('a7Ha').LineEnd,
        _ = i('Ialn'),
        f = _.forceLTRStr,
        v = _.startWithLTR;
      function g(e, t) {
        n.call(this, e, t),
          (this._percentageFormatter = new d()),
          (this._pipFormatter = null),
          (this._lastSymbolInfo = null),
          (this._distanceLineRenderer = new l()),
          (this._distancePriceRenderer = new l()),
          (this._backgroundRenderer = new o()),
          (this._borderRenderer = new o()),
          (this._textRenderer = new a()),
          (this._renderer = null);
      }
      inherit(g, n),
        (g.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (g.prototype._updateImpl = function () {
          if (
            (n.prototype._updateImpl.call(this),
            (this._renderer = null),
            !(this._points.length < 2 || this._source.points().length < 2))
          ) {
            var e = new h(),
              t = this._source.properties();
            if (t.fillBackground && t.fillBackground.value())
              ((k = {}).points = this._points),
                (k.color = 'white'),
                (k.linewidth = 0),
                (k.backcolor = t.backgroundColor.value()),
                (k.fillBackground = !0),
                (k.transparency = t.backgroundTransparency.value()),
                (k.extendLeft = !1),
                (k.extendRight = !1),
                this._backgroundRenderer.setData(k),
                e.append(this._backgroundRenderer);
            var i = this._points[0],
              a = this._points[1];
            t.drawBorder.value() &&
              (this._borderRenderer.setData({
                points: this._points,
                color: t.borderColor.value(),
                linewidth: t.borderWidth.value(),
                fillBackground: !1,
                extendLeft: !1,
                extendRight: !1,
              }),
              e.append(this._borderRenderer));
            var o = t.drawBorder.value() ? t.borderWidth.value() / 2 : 0,
              l = Math.round((i.y + a.y) / 2),
              d = new r(i.x + Math.sign(a.x - i.x) * o, l),
              _ = new r(a.x + Math.sign(i.x - a.x) * o, l);
            ((k = {}).points = [d, _]),
              (k.width = this._model.timeScale().width()),
              (k.height = this._source.priceScale().height()),
              (k.color = this._source.properties().linecolor.value()),
              (k.linewidth = this._source.properties().linewidth.value()),
              (k.linestyle = CanvasEx.LINESTYLE_SOLID),
              (k.extendleft = !1),
              (k.extendright = !1),
              (k.leftend = u.Normal),
              (k.rightend =
                Math.abs(i.x - a.x) >= 25 * k.linewidth ? u.Arrow : u.Normal),
              this._distanceLineRenderer.setData(k),
              e.append(this._distanceLineRenderer);
            (i = this._points[0]), (a = this._points[1]);
            var g = Math.round((i.x + a.x) / 2);
            (d = new r(g, i.y + Math.sign(a.y - i.y) * o)),
              (_ = new r(g, a.y + Math.sign(i.y - a.y) * o));
            ((k = {}).points = [d, _]),
              (k.width = this._model.timeScale().width()),
              (k.height = this._source.priceScale().height()),
              (k.color = this._source.properties().linecolor.value()),
              (k.linewidth = this._source.properties().linewidth.value()),
              (k.linestyle = CanvasEx.LINESTYLE_SOLID),
              (k.extendleft = !1),
              (k.extendright = !1),
              (k.leftend = u.Normal),
              (k.rightend =
                Math.abs(d.y - _.y) >= 25 * k.linewidth ? u.Arrow : u.Normal),
              this._distancePriceRenderer.setData(k),
              e.append(this._distancePriceRenderer);
            var y = this._source.points()[0].price,
              w = this._source.points()[1].price,
              x = w - y,
              m = (100 * x) / Math.abs(y),
              b = this._source.points()[0].index,
              R = this._source.points()[1].index,
              T = f(R - b + ''),
              S = this._model.timeScale().indexToUserTime(b),
              P = this._model.timeScale().indexToUserTime(R),
              L = '';
            if (S && P) {
              var C = (P.valueOf() - S.valueOf()) / 1e3;
              L = ', ' + v(new c().format(C));
            }
            var M = this._model.mainSeries().symbolInfo();
            M &&
              M !== this._lastSymbolInfo &&
              ((this._pipFormatter = new p(
                M.pricescale,
                M.minmov,
                M.type,
                M.minmove2,
              )),
              (this._lastSymbolInfo = M));
            var I,
              O =
                this._source.ownerSource().formatter().format(x) +
                ' (' +
                this._percentageFormatter.format(Math.round(100 * m) / 100) +
                ') ' +
                (this._pipFormatter ? this._pipFormatter.format(x) : ''),
              D = f(O) + '\n' + $.t('{0} bars').format(T) + L,
              k = {};
            if (w > y)
              ((I = a.clone()).y -= 2 * t.fontsize.value()),
                (I.x = 0.5 * (i.x + a.x)),
                (k.points = [I]);
            else
              ((I = a.clone()).x = 0.5 * (i.x + a.x)),
                (I.y += 0.7 * t.fontsize.value()),
                (k.points = [I]);
            var B = { x: 0, y: 10 };
            (k.text = D),
              (k.color = t.textcolor.value()),
              (k.height = this._source.priceScale().height()),
              (k.font = t.font.value()),
              (k.offsetX = B.x),
              (k.offsetY = B.y),
              (k.padding = 8),
              (k.vertAlign = 'middle'),
              (k.horzAlign = 'center'),
              (k.fontsize = t.fontsize.value()),
              (k.backgroundRoundRect = 4),
              (k.backgroundHorzInflate = 0.4 * t.fontsize.value()),
              (k.backgroundVertInflate = 0.2 * t.fontsize.value()),
              t.fillLabelBackground &&
                t.fillLabelBackground.value() &&
                (k.backgroundColor = t.labelBackgroundColor.value()),
              this._textRenderer.setData(k);
            var N = this._textRenderer.measure(),
              A = s(N, i, a, B, this._source.priceScale().height());
            this._textRenderer.setPoints([A]),
              e.append(this._textRenderer),
              this.addAnchors(e),
              (this._renderer = e);
          }
        }),
        (t.DateAndPriceRangePaneView = g);
    },
    UfPO: function (e, t, i) {
      'use strict';
      e.exports = function (e, t) {
        var i = document.body,
          r = i[e];
        return (
          r || (((r = document.createElement('img')).src = t), (i[e] = r)), r
        );
      };
    },
    V8bI: function (e, t, i) {
      e.exports = i.p + '898929f1acdb622689e0fc0c95c8fcd0.png';
    },
    VghZ: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('qgcf').TextRenderer,
        s = i('qgcf').calculateLabelPosition,
        o = i('IjC5').RectangleRenderer,
        l = i('pJOz').TrendLineRenderer,
        h = i('Zy3/').CompositeRenderer,
        d = i('GH0z').PercentageFormatter,
        c = i('5C6T').PipFormatter,
        p = i('a7Ha').LineEnd,
        u = i('Ialn').forceLTRStr;
      function _(e, t) {
        n.call(this, e, t),
          (this._percentageFormatter = new d()),
          (this._pipFormatter = null),
          (this._lastSymbolInfo = null),
          (this._topBorderRenderer = new l()),
          (this._bottomBorderRenderer = new l()),
          (this._distanceRenderer = new l()),
          (this._backgroundRenderer = new o()),
          (this._labelRenderer = new a()),
          (this._renderer = null);
      }
      inherit(_, n),
        (_.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (_.prototype._updateImpl = function () {
          if (
            (n.prototype._updateImpl.call(this),
            (this._renderer = null),
            !(this._points.length < 2 || this._source.points().length < 2))
          ) {
            var e = new h(),
              t = this._source.properties(),
              i = t.extendLeft.value(),
              a = t.extendRight.value(),
              o = this._points[0],
              l = this._points[1],
              d = Math.min(o.x, l.x),
              _ = Math.max(o.x, l.x);
            if (t.fillBackground && t.fillBackground.value())
              ((M = {}).points = [new r(d, o.y), new r(_, l.y)]),
                (M.color = 'white'),
                (M.linewidth = 0),
                (M.backcolor = t.backgroundColor.value()),
                (M.fillBackground = !0),
                (M.transparency = t.backgroundTransparency.value()),
                (M.extendLeft = i),
                (M.extendRight = a),
                this._backgroundRenderer.setData(M),
                e.append(this._backgroundRenderer);
            var f = this,
              v = function (t, r, n) {
                var s = {};
                (s.points = [r, n]),
                  (s.width = f._model.timeScale().width()),
                  (s.height = f._source.priceScale().height()),
                  (s.color = f._source.properties().linecolor.value()),
                  (s.linewidth = f._source.properties().linewidth.value()),
                  (s.linestyle = CanvasEx.LINESTYLE_SOLID),
                  (s.extendleft = i),
                  (s.extendright = a),
                  (s.leftend = p.Normal),
                  (s.rightend = p.Normal),
                  t.setData(s),
                  e.append(t);
              },
              g = d,
              y = _;
            g === y && (i && (g -= 1), a && (y += 1)),
              v(this._topBorderRenderer, new r(g, o.y), new r(y, o.y)),
              v(this._bottomBorderRenderer, new r(g, l.y), new r(y, l.y));
            (o = this._points[0]), (l = this._points[1]);
            var w = Math.round((o.x + l.x) / 2),
              x = new r(w, o.y),
              m = new r(w, l.y);
            ((M = {}).points = [x, m]),
              (M.width = f._model.timeScale().width()),
              (M.height = f._source.priceScale().height()),
              (M.color = f._source.properties().linecolor.value()),
              (M.linewidth = f._source.properties().linewidth.value()),
              (M.linestyle = CanvasEx.LINESTYLE_SOLID),
              (M.extendleft = !1),
              (M.extendright = !1),
              (M.leftend = p.Normal),
              (M.rightend =
                Math.abs(x.y - m.y) >= 15 * M.linewidth ? p.Arrow : p.Normal),
              this._distanceRenderer.setData(M),
              e.append(this._distanceRenderer);
            var b = this._source.points()[0].price,
              R = this._source.points()[1].price,
              T = R - b,
              S = (100 * T) / Math.abs(b),
              P = this._model.mainSeries().symbolInfo();
            P &&
              P !== this._lastSymbolInfo &&
              ((this._pipFormatter = new c(
                P.pricescale,
                P.minmov,
                P.type,
                P.minmove2,
              )),
              (this._lastSymbolInfo = P));
            var L,
              C = u(
                this._source.ownerSource().formatter().format(T) +
                  ' (' +
                  this._percentageFormatter.format(S) +
                  ') ' +
                  (this._pipFormatter ? this._pipFormatter.format(T) : ''),
              ),
              M = {};
            if (R > b)
              ((L = l.clone()).y -= 2 * t.fontsize.value()),
                (L.x = 0.5 * (o.x + l.x)),
                (M.points = [L]);
            else
              ((L = l.clone()).x = 0.5 * (o.x + l.x)),
                (L.y += 0.7 * t.fontsize.value()),
                (M.points = [L]);
            var I = { x: 0, y: 10 };
            (M.text = C),
              (M.color = t.textcolor.value()),
              (M.height = f._source.priceScale().height()),
              (M.font = t.font.value()),
              (M.offsetX = I.x),
              (M.offsetY = I.y),
              (M.vertAlign = 'middle'),
              (M.horzAlign = 'center'),
              (M.fontsize = t.fontsize.value()),
              (M.backgroundRoundRect = 4),
              (M.backgroundHorzInflate = 0.4 * t.fontsize.value()),
              (M.backgroundVertInflate = 0.2 * t.fontsize.value()),
              t.fillLabelBackground &&
                t.fillLabelBackground.value() &&
                (M.backgroundColor = t.labelBackgroundColor.value()),
              t.drawBorder &&
                t.drawBorder.value() &&
                (M.borderColor = t.borderColor.value()),
              this._labelRenderer.setData(M);
            var O = this._labelRenderer.measure(),
              D = s(O, o, l, I, f._source.priceScale().height());
            this._labelRenderer.setPoints([D]),
              e.append(this._labelRenderer),
              this.addAnchors(e),
              (this._renderer = e);
          }
        }),
        (t.PriceRangePaneView = _);
    },
    X4Cb: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'GannComplexPaneView', function () {
          return u;
        });
      var r = i('mrSG'),
        n = i('aO4+'),
        a = i('aB9a'),
        s = i('pJOz'),
        o = i('qgcf'),
        l = i('Zy3/'),
        h = i('a7Ha'),
        d = i('8Uy/'),
        c = i('amvX'),
        p = i('Ialn'),
        u = (function (e) {
          function t(t, i) {
            var r = e.call(this, t, i) || this;
            return (
              (r._verticalLevelsRenderers = []),
              (r._horizontalLevelsRenderers = []),
              (r._fanRenderers = []),
              (r._arcRenderers = []),
              (r._priceDiffTextRenderer = new o.TextRenderer()),
              (r._indexDiffTextRenderer = new o.TextRenderer()),
              (r._ratioTextRenderer = new o.TextRenderer()),
              (r._renderer = null),
              r._initRenderers(),
              r
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.renderer = function (e, t) {
              return this._invalidated && this._updateImpl(), this._renderer;
            }),
            (t.prototype._updateImpl = function () {
              e.prototype._updateImpl.call(this), (this._renderer = null);
              var t = new l.CompositeRenderer(),
                i = this._getPoints();
              if (i.length < 2)
                return this.addAnchors(t), void (this._renderer = t);
              var r = i[0],
                n = i[1],
                a = this._getSource(),
                s = a.isReversed();
              s && ((n = i[0]), (r = i[1]));
              var o = n.x - r.x,
                h = n.y - r.y,
                d = r,
                c = n,
                p = this._getModel(),
                u = {
                  barsCoordsRange: o,
                  priceCoordsRange: h,
                  startPoint: d,
                  endPoint: c,
                  p1: r,
                  p2: n,
                  isLabelsVisible: a.isLabelsVisible(),
                  reversed: s,
                };
              this._prepareLevels(t, u),
                this._prepareFanLines(t, u),
                this._prepareArcs(t, u),
                this._prepareLabels(t, u);
              var _ = [r, n];
              p.lineBeingCreated() === a && _.pop(),
                t.append(this.createLineAnchor({ points: _ })),
                (this._renderer = t);
            }),
            (t.prototype._initRenderers = function () {
              for (
                var e = this._getSource(), t = e.levelsCount(), i = 0;
                i < t;
                i++
              )
                this._verticalLevelsRenderers.push(new s.TrendLineRenderer()),
                  this._horizontalLevelsRenderers.push(
                    new s.TrendLineRenderer(),
                  );
              var r = e.fanLinesCount();
              for (i = 0; i < r; i++)
                this._fanRenderers.push(new s.TrendLineRenderer());
              var n = e.arcsCount();
              for (i = 0; i < n; i++) this._arcRenderers.push(new c.a());
            }),
            (t.prototype._prepareLevels = function (e, t) {
              for (
                var i = t.startPoint,
                  r = t.endPoint,
                  a = t.barsCoordsRange,
                  s = t.priceCoordsRange,
                  o = 0,
                  l = this._getSource().levels();
                o < l.length;
                o++
              ) {
                var c = l[o];
                if (c.visible) {
                  var p = c.index / 5,
                    u = i.x + p * a,
                    _ = {
                      points: [new n.Point(u, i.y), new n.Point(u, r.y)],
                      color: c.color,
                      linewidth: c.width,
                      linestyle: d.LINESTYLE_SOLID,
                      extendleft: !1,
                      extendright: !1,
                      leftend: h.LineEnd.Normal,
                      rightend: h.LineEnd.Normal,
                    },
                    f = this._verticalLevelsRenderers[c.index];
                  f.setData(_), e.append(f);
                  var v = i.y + p * s,
                    g = {
                      points: [new n.Point(i.x, v), new n.Point(r.x, v)],
                      color: c.color,
                      linewidth: c.width,
                      linestyle: d.LINESTYLE_SOLID,
                      extendleft: !1,
                      extendright: !1,
                      leftend: h.LineEnd.Normal,
                      rightend: h.LineEnd.Normal,
                    },
                    y = this._horizontalLevelsRenderers[c.index];
                  y.setData(g), e.append(y);
                }
              }
            }),
            (t.prototype._prepareFanLines = function (e, t) {
              for (
                var i = t.p1,
                  r = t.startPoint,
                  a = t.endPoint,
                  s = t.barsCoordsRange,
                  o = t.priceCoordsRange,
                  l = 0,
                  c = this._getSource().fanLines();
                l < c.length;
                l++
              ) {
                var p = c[l];
                if (p.visible) {
                  var u = p.x,
                    _ = p.y,
                    f = void 0,
                    v = void 0;
                  if (u > _) {
                    f = a.x;
                    var g = _ / u;
                    v = r.y + g * o;
                  } else {
                    v = a.y;
                    g = u / _;
                    f = r.x + g * s;
                  }
                  var y = {
                      points: [i, new n.Point(f, v)],
                      color: p.color,
                      linewidth: p.width,
                      linestyle: d.LINESTYLE_SOLID,
                      extendleft: !1,
                      extendright: !1,
                      leftend: h.LineEnd.Normal,
                      rightend: h.LineEnd.Normal,
                    },
                    w = this._fanRenderers[p.index];
                  w.setData(y), e.append(w);
                }
              }
            }),
            (t.prototype._prepareArcs = function (e, t) {
              for (
                var i = t.p1,
                  r = t.startPoint,
                  a = t.endPoint,
                  s = t.barsCoordsRange,
                  o = t.priceCoordsRange,
                  l = i,
                  h = this._getSource(),
                  d = h.isArcsBackgroundFilled(),
                  c = h.arcsBackgroundTransparency(),
                  p = 0,
                  u = h.arcs();
                p < u.length;
                p++
              ) {
                var _ = u[p];
                if (_.visible) {
                  var f = _.x / 5,
                    v = _.y / 5,
                    g = r.x + f * s,
                    y = r.y + v * o,
                    w = {
                      center: r,
                      point: new n.Point(g, y),
                      edge: a,
                      color: _.color,
                      linewidth: _.width,
                      fillBack: d,
                      transparency: c,
                      prevPoint: l,
                    },
                    x = this._arcRenderers[_.index];
                  x.setData(w), e.append(x), (l = w.point);
                }
              }
            }),
            (t.prototype._prepareLabels = function (e, t) {
              var i = t.p1,
                r = t.p2,
                a = t.isLabelsVisible,
                s = t.reversed;
              if (a) {
                var o = this._getSource(),
                  l = o.ownerSource(),
                  h = o.getPriceDiff(),
                  d = o.getIndexDiff();
                if (null !== h && null !== d && null !== l) {
                  s && ((h = -h), (d = -d));
                  var c = new n.Point(i.x, r.y),
                    u = Object(p.forceLTRStr)(l.formatter().format(h)),
                    _ = this._getLabelData(c, u);
                  (_.horzAlign = d > 0 ? 'right' : 'left'),
                    (_.vertAlign = h > 0 ? 'bottom' : 'top'),
                    (_.offsetX = 10),
                    (_.offsetY = h > 0 ? 8 : 10),
                    (_.forceTextAlign = !0),
                    this._priceDiffTextRenderer.setData(_),
                    e.append(this._priceDiffTextRenderer);
                  var f = new n.Point(r.x, i.y),
                    v = Object(p.forceLTRStr)(d.toString()),
                    g = this._getLabelData(f, v);
                  (g.horzAlign = d > 0 ? 'left' : 'right'),
                    (g.vertAlign = h > 0 ? 'top' : 'bottom'),
                    (g.offsetX = 10),
                    (g.offsetY = h > 0 ? 10 : 8),
                    (g.forceTextAlign = !0),
                    this._indexDiffTextRenderer.setData(g),
                    e.append(this._indexDiffTextRenderer);
                  var y = o.getScaleRatio();
                  if (null !== y) {
                    var w = o.getScaleRatioFormatter(),
                      x = Object(p.forceLTRStr)(w.format(y)),
                      m = this._getLabelData(r, x);
                    (m.horzAlign = d > 0 ? 'left' : 'right'),
                      (m.vertAlign = h > 0 ? 'bottom' : 'top'),
                      (m.offsetX = 10),
                      (m.offsetY = h > 0 ? 8 : 10),
                      (m.forceTextAlign = !0),
                      this._ratioTextRenderer.setData(m),
                      e.append(this._ratioTextRenderer);
                  }
                }
              }
            }),
            (t.prototype._getLabelData = function (e, t) {
              var i = this._getSource().getLabelsStyle(),
                r = i.textColor,
                n = i.font,
                a = i.fontSize;
              return {
                points: [e],
                backgroundColor: 'transparent',
                text: t,
                font: n,
                bold: i.bold,
                italic: i.italic,
                fontsize: a,
                color: r,
                vertAlign: 'top',
                horzAlign: 'center',
                offsetX: 0,
                offsetY: 0,
                backgroundRoundRect: 4,
              };
            }),
            t
          );
        })(a.LineSourcePaneView);
    },
    XHET: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('5/lF').TrendLineStatsRenderer,
        s = i('qgcf').TextRenderer,
        o = i('pJOz').TrendLineRenderer,
        l = i('Zy3/').CompositeRenderer,
        h = i('GH0z').PercentageFormatter,
        d = i('vq8G').SelectionRenderer,
        c = i('5C6T').PipFormatter,
        p = i('a7Ha').LineEnd,
        u = i('8xAY').LabelSettings,
        _ = i('zDbI').CHART_FONT_FAMILY,
        f = i('VdBB').HitTestResult,
        v = i('cPgM').ScaledPaneRenderer,
        g = i('cPgM').ScaledPaneRendererWrapper,
        y = i('Ialn').forceLTRStr;
      function w() {
        v.call(this), (this._data = null);
      }
      function x(e, t) {
        n.call(this, e, t),
          (this._label = null),
          (this._rendererCache = {}),
          (this._pipFormatter = null),
          (this._lastSymbolInfo = null),
          (this._trendLineRenderer = new o()),
          (this._angleRenderer = new w()),
          (this._angleLabelRenderer = new s()),
          (this._renderer = null);
      }
      inherit(w, v),
        (w.prototype.setData = function (e) {
          this._data = e;
        }),
        (w.prototype.hitTest = function () {
          return null;
        }),
        (w.prototype._drawImpl = function (e) {
          if (null !== this._data) {
            e.save(),
              e.translate(this._data.point.x, this._data.point.y),
              (e.strokeStyle = this._data.color);
            var t = [1, 2];
            'function' == typeof e.setLineDash
              ? e.setLineDash(t)
              : void 0 !== e.mozDash
              ? (e.mozDash = t)
              : void 0 !== e.webkitLineDash && (e.webkitLineDash = t);
            var i = this._data.size;
            e.beginPath(),
              e.moveTo(0, 0),
              e.lineTo(i, 0),
              e.arc(0, 0, i, 0, -this._data.angle, this._data.angle > 0),
              e.stroke(),
              e.restore();
          }
        }),
        inherit(x, n),
        (x.prototype._updateImpl = function () {
          if (
            (n.prototype._updateImpl.call(this),
            (this._renderer = null),
            this._points.length > 0 && void 0 !== this._source._angle)
          ) {
            var e = this._points[0],
              t = Math.cos(this._source._angle),
              i = -Math.sin(this._source._angle),
              s = new r(t, i);
            (this._secondPoint = e.addScaled(s, this._source._distance)),
              (this._secondPoint.data = 1),
              (this._middlePoint = this._source.calcMiddlePoint(
                this._points[0],
                this._secondPoint,
              ));
          }
          if (((this._label = null), !(this._source.points().length < 2))) {
            e = this._source.points()[0];
            var o,
              v,
              w = this._source.points()[1],
              x = [];
            if (
              this._source.properties().showPriceRange.value() &&
              this._source.priceScale()
            ) {
              var m = w.price - e.price,
                b = m / Math.abs(e.price);
              o =
                this._source.ownerSource().formatter().format(m) +
                ' (' +
                new h().format(100 * b) +
                ') ';
              var R = this._model.mainSeries().symbolInfo();
              R &&
                R !== this._lastSymbolInfo &&
                ((this._pipFormatter = new c(
                  R.pricescale,
                  R.minmov,
                  R.type,
                  R.minmove2,
                )),
                (this._lastSymbolInfo = R)),
                (o += this._pipFormatter
                  ? ', ' + this._pipFormatter.format(m)
                  : ''),
                x.push('priceRange');
            }
            if (this._source.properties().showBarsRange.value()) {
              v = '';
              var T = w.index - e.index;
              (v += $.t('{0} bars').format(y(T))), x.push('barsRange');
            }
            (this._label =
              [y(o), v]
                .filter(function (e) {
                  return e;
                })
                .join('\n') || null),
              (this._icons = x);
            var S = new l(),
              P = {},
              L =
                this.isHoveredSource() ||
                this.isSelectedSource() ||
                this._source.properties().alwaysShowStats.value(),
              C =
                (this.isHoveredSource() || this.isSelectedSource()) &&
                this._source.properties().showMiddlePoint.value();
            if (this._secondPoint && this._points.length > 0) {
              var M = this._source.properties().linecolor.value();
              if (
                ((P.points = [this._points[0], this._secondPoint]),
                (P.width = this._model.timeScale().width()),
                (P.height = this._source.priceScale().height()),
                (P.color = M),
                (P.linewidth = this._source.properties().linewidth.value()),
                (P.linestyle = this._source.properties().linestyle.value()),
                (P.extendleft = this._source.properties().extendLeft.value()),
                (P.extendright = this._source.properties().extendRight.value()),
                (P.leftend = p.Normal),
                (P.rightend = p.Normal),
                this._trendLineRenderer.setData(P),
                S.append(this._trendLineRenderer),
                L && this._label && 2 === this._points.length)
              ) {
                var I = this._source.properties().statsPosition.value(),
                  O = this._source.getPointByPosition(
                    I,
                    P.points[0],
                    this._middlePoint,
                    P.points[1],
                  ),
                  D = this._model.isDark(),
                  k = D ? u.bgColorDark : u.bgColorLight,
                  B = D ? u.textColorDark : u.textColorLight,
                  N = {
                    points: [O],
                    text: this._label,
                    color: B,
                    isDark: D,
                    font: _,
                    fontSize: u.fontSize,
                    lineSpacing: u.lineSpacing,
                    backgroundColor: k,
                    backgroundRoundRect: u.rectRadius,
                    paddingLeft: u.paddingLeftRight,
                    paddingRight: u.paddingLeftRight,
                    paddingTop: u.paddingTopBottom,
                    paddingBottom: u.paddingTopBottom,
                    textPadding: u.textPadding,
                    doNotAlignText: !0,
                    icons: this._icons,
                  },
                  A = u.offset;
                (N.offsetX = A),
                  (N.offsetY = A),
                  ((this._points[1].y < this._points[0].y &&
                    this._points[1].x < this._points[0].x) ||
                    (this._points[1].y > this._points[0].y &&
                      this._points[1].x > this._points[0].x)) &&
                    (N.vertAlign = 'bottom'),
                  S.append(new g(new a(N, this._rendererCache)));
              }
              this._middlePoint &&
                S.append(
                  new d({
                    points: [this._middlePoint],
                    bgColors: this._lineAnchorColors([this._middlePoint]),
                    color: M,
                    visible: C && this.areAnchorsVisible(),
                    hittestResult: f.REGULAR,
                  }),
                );
              var z = {};
              (z.point = this._points[0]),
                (z.angle = this._source._angle),
                (z.color = this._source.properties().linecolor.value()),
                (z.size = 50),
                this._angleRenderer.setData(z),
                S.append(this._angleRenderer);
              var E = Math.round((180 * z.angle) / Math.PI) + 'º';
              (O = this._points[0].clone()).x = O.x + 50;
              var V = {
                points: [O],
                text: y(E),
                color: this._source.properties().textcolor.value(),
                horzAlign: 'left',
                font: this._source.properties().font.value(),
                offsetX: 5,
                offsetY: 0,
                bold: this._source.properties().bold.value(),
                italic: this._source.properties().italic.value(),
                fontsize: this._source.properties().fontsize.value(),
                vertAlign: 'middle',
              };
              this._angleLabelRenderer.setData(V),
                S.append(this._angleLabelRenderer);
            }
            0,
              this._secondPoint &&
                this._points.length > 0 &&
                S.append(
                  this.createLineAnchor({
                    points: [this._points[0], this._secondPoint],
                  }),
                ),
              (this._renderer = S);
          }
        }),
        (x.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.TrendAnglePaneView = x);
    },
    ZJWf: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('2trc').ChannelRenderer,
        s = i('qgcf').TextRenderer,
        o = i('pJOz').TrendLineRenderer,
        l = i('VdBB').HitTestResult,
        h = i('Zy3/').CompositeRenderer,
        d = i('a7Ha').LineEnd;
      function c(e, t) {
        n.call(this, e, t), (this._renderer = null);
      }
      inherit(c, n),
        (c.prototype._updateImpl = function () {
          if (
            (n.prototype._updateImpl.call(this),
            (this._renderer = null),
            !(this._source.points().length < 2) &&
              this._source.priceScale() &&
              !this._source.priceScale().isEmpty() &&
              !this._model.timeScale().isEmpty())
          ) {
            var e = this._floatPoints[0],
              t = this._floatPoints[1];
            this._fans = [];
            for (var i = t.x - e.x, c = t.y - e.y, p = 1; p <= 9; p++) {
              var u = 'level' + p,
                _ = this._source.properties()[u];
              if (_.visible.value()) {
                var f,
                  v,
                  g = _.coeff1.value(),
                  y = _.coeff2.value(),
                  w = g / y,
                  x = _.color.value(),
                  m = g + '/' + y;
                g > y
                  ? ((f = t.x), (v = e.y + c / w))
                  : ((f = e.x + i * w), (v = t.y)),
                  this._fans.push({
                    label: m,
                    color: x,
                    x: f,
                    y: v,
                    linewidth: _.linewidth.value(),
                    linestyle: _.linestyle.value(),
                    index: p,
                  });
              }
            }
            if (!(this._floatPoints.length < 2)) {
              var b = new h(),
                R = ((e = this._floatPoints[0]), this._source.properties()),
                T = this._source.properties().fillBackground.value(),
                S = this._source.properties().transparency.value();
              for (p = 0; p < this._fans.length; p++) {
                var P = new r(this._fans[p].x, this._fans[p].y);
                if (T)
                  if (this._fans[p].index < 4) {
                    var L = new r(this._fans[p + 1].x, this._fans[p + 1].y);
                    ((C = {}).width = this._model.timeScale().width()),
                      (C.height = this._source.priceScale().height()),
                      (C.p1 = e),
                      (C.p2 = P),
                      (C.p3 = e),
                      (C.p4 = L),
                      (C.color = this._fans[p].color),
                      (C.transparency = S),
                      (C.hittestOnBackground = !0),
                      (M = new a()).setData(C),
                      b.append(M);
                  } else if (this._fans[p].index > 4 && p > 0) {
                    var C;
                    L = new r(this._fans[p - 1].x, this._fans[p - 1].y);
                    ((C = {}).width = this._model.timeScale().width()),
                      (C.height = this._source.priceScale().height()),
                      (C.p1 = e),
                      (C.p2 = P),
                      (C.p3 = e),
                      (C.p4 = L),
                      (C.color = this._fans[p].color),
                      (C.transparency = S),
                      (C.hittestOnBackground = !0),
                      (M = new a()).setData(C),
                      b.append(M);
                  }
                var M,
                  I = {
                    points: [e, P],
                    width: this._model.timeScale().width(),
                    height: this._source.priceScale().height(),
                    color: this._fans[p].color,
                    linewidth: this._fans[p].linewidth,
                    linestyle: this._fans[p].linestyle,
                    extendleft: !1,
                    extendright: !0,
                    leftend: d.Normal,
                    rightend: d.Normal,
                  };
                if (
                  ((M = new o()).setData(I),
                  M.setHitTest(new l(l.MOVEPOINT, null, this._fans[p].index)),
                  b.append(M),
                  R.showLabels.value())
                ) {
                  var O = {
                    points: [P],
                    text: this._fans[p].label,
                    color: this._fans[p].color,
                    vertAlign: 'middle',
                    horzAlign: 'left',
                    font: R.font.value(),
                    offsetX: 0,
                    offsetY: 5,
                    fontsize: 12,
                  };
                  b.append(new s(O));
                }
              }
              this.addAnchors(b), (this._renderer = b);
            }
          }
        }),
        (c.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.GannFanPaneView = c);
    },
    a6on: function (e, t, i) {
      'use strict';
      var r = i('GEp6').distanceToSegment,
        n = i('aB9a').LineSourcePaneView,
        a = i('pJOz').drawArrow,
        s = i('VdBB').HitTestResult,
        o = i('Zy3/').CompositeRenderer,
        l = i('Tmoa'),
        h = i('a7Ha').LineEnd,
        d = i('2hKl'),
        c = i('cPgM').ScaledPaneRenderer;
      function p() {
        c.call(this), (this._data = null);
      }
      function u(e, t) {
        n.call(this, e, t),
          (this._bezierCubicrenderer = new p()),
          (this._renderer = null);
      }
      inherit(p, c),
        (p.prototype.setData = function (e) {
          this._data = e;
        }),
        (p.prototype._drawImpl = function (e, t) {
          if (null !== this._data) {
            (e.lineCap = 'butt'),
              (e.strokeStyle = this._data.color),
              (e.lineWidth = this._data.linewidth),
              CanvasEx.setLineStyle(e, this._data.linestyle);
            var i = this._data.points[0],
              r = this._data.points[1];
            if (2 === this._data.points.length)
              e.beginPath(),
                e.moveTo(i.x, i.y),
                e.lineTo(r.x, r.y),
                e.stroke(),
                this._data.leftend === h.Arrow &&
                  a(r, i, e, e.lineWidth, t.pixelRatio),
                this._data.rightend === h.Arrow &&
                  a(i, r, e, e.lineWidth, t.pixelRatio);
            else {
              var n = this._data.points[2],
                s = this._data.points[3],
                o = s.subtract(i),
                d = n.subtract(o.scaled(0.25)),
                c = n.add(o.scaled(0.25)),
                p = r.subtract(n),
                u = s.subtract(p.scaled(0.25)),
                _ = s.add(p.scaled(0.25));
              if (
                (this._data.fillBack &&
                  this._data.points.length > 2 &&
                  ((e.fillStyle = l.generateColor(
                    this._data.backcolor,
                    this._data.transparency,
                  )),
                  e.beginPath(),
                  e.moveTo(i.x, i.y),
                  e.quadraticCurveTo(d.x, d.y, n.x, n.y),
                  e.bezierCurveTo(c.x, c.y, u.x, u.y, s.x, s.y),
                  e.quadraticCurveTo(_.x, _.y, r.x, r.y),
                  e.fill()),
                e.beginPath(),
                this._data.extendLeftPoints.length > 0)
              ) {
                var f = this._data.extendLeftPoints[
                  this._data.extendLeftPoints.length - 1
                ];
                e.moveTo(f.x, f.y);
                for (
                  var v = this._data.extendLeftPoints.length - 2;
                  v >= 0;
                  v--
                ) {
                  var g = this._data.extendLeftPoints[v];
                  e.lineTo(g.x, g.y);
                }
              }
              e.moveTo(i.x, i.y),
                e.quadraticCurveTo(d.x, d.y, n.x, n.y),
                e.bezierCurveTo(c.x, c.y, u.x, u.y, s.x, s.y),
                e.quadraticCurveTo(_.x, _.y, r.x, r.y);
              for (v = 0; v < this._data.extendRightPoints.length; v++) {
                g = this._data.extendRightPoints[v];
                e.lineTo(g.x, g.y);
              }
              e.stroke(),
                this._data.leftend === h.Arrow &&
                  a(d, i, e, e.lineWidth, t.pixelRatio),
                this._data.rightend === h.Arrow &&
                  a(_, r, e, e.lineWidth, t.pixelRatio);
            }
          }
        }),
        (p.prototype.hitTest = function (e) {
          if (4 === this._data.points.length) {
            var t = this._data.points[0],
              i = this._data.points[1],
              n = this._data.points[2],
              a = this._data.points[3],
              o = a.subtract(t),
              l = n.subtract(o.scaled(0.25)),
              h = n.add(o.scaled(0.25)),
              c = i.subtract(n),
              p = a.subtract(c.scaled(0.25)),
              u = a.add(c.scaled(0.25));
            if (
              d.quadroBezierHitTest(n, t, l, e) ||
              d.cubicBezierHitTest(n, a, h, p, e) ||
              d.quadroBezierHitTest(a, i, u, e)
            )
              return new s(s.MOVEPOINT);
            for (var _ = 1; _ < this._data.extendLeftPoints.length; _++) {
              (t = this._data.extendLeftPoints[_ - 1]),
                (i = this._data.extendLeftPoints[_]);
              if (r(t, i, e).distance < 3) return new s(s.MOVEPOINT);
            }
            for (_ = 1; _ < this._data.extendRightPoints.length; _++) {
              (t = this._data.extendRightPoints[_ - 1]),
                (i = this._data.extendRightPoints[_]);
              if (r(t, i, e).distance < 3) return new s(s.MOVEPOINT);
            }
          }
          return null;
        }),
        inherit(u, n),
        (u.prototype._updateImpl = function () {
          if (
            (n.prototype._updateImpl.call(this),
            (this._renderer = null),
            (this._extendLeftPoints = []),
            (this._extendRightPoints = []),
            4 === this._source.points().length)
          ) {
            var e = this._source.pointToScreenPoint(
                this._source.points()[0],
              )[1],
              t = this._source.pointToScreenPoint(this._source.points()[1])[1],
              i = this._source.pointToScreenPoint(this._source.points()[2])[1],
              r = this._source.pointToScreenPoint(this._source.points()[3])[1],
              a = r.subtract(e),
              s = i.subtract(a.scaled(0.25)),
              l = t.subtract(i),
              h = r.add(l.scaled(0.25)),
              c = this._model.timeScale().width(),
              p = this._source.priceScale().height();
            this._source.properties().extendLeft.value() &&
              (this._extendLeftPoints = d.extendQuadroBezier(i, e, s, c, p)),
              this._source.properties().extendRight.value() &&
                (this._extendRightPoints = d.extendQuadroBezier(r, t, h, c, p));
          }
          if (!(this._points.length < 2)) {
            var u = [].concat(this._points);
            this._source._controlPoints &&
              (u.push(
                this._source.pointToScreenPoint(
                  this._source._controlPoints[0],
                )[0],
              ),
              u.push(
                this._source.pointToScreenPoint(
                  this._source._controlPoints[1],
                )[0],
              ));
            var _ = {},
              f = this._source.properties();
            (_.points = u),
              (_.color = f.linecolor.value()),
              (_.linewidth = f.linewidth.value()),
              (_.linestyle = f.linestyle.value()),
              (_.leftend = f.leftEnd.value()),
              (_.rightend = f.rightEnd.value()),
              (_.fillBack = f.fillBackground.value()),
              (_.backcolor = f.backgroundColor.value()),
              (_.transparency = f.transparency.value()),
              (_.extendLeftPoints = this._extendLeftPoints),
              (_.extendRightPoints = this._extendRightPoints),
              this._bezierCubicrenderer.setData(_);
            var v = new o();
            v.append(this._bezierCubicrenderer),
              this.addAnchors(v),
              (this._renderer = v);
          }
        }),
        (u.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.BezierCubicPaneView = u);
    },
    aB9a: function (e, t, i) {
      'use strict';
      i.r(t);
      var r = i('mrSG'),
        n = i('aO4+'),
        a = i('VaSN'),
        s = i('VdBB'),
        o = i('vq8G'),
        l = i('f6yo'),
        h = i('jFln'),
        d = i('ogJP'),
        c = i('//lt');
      function p() {
        return Object(a.lastEventIsTouch)() ? 16 : 8;
      }
      var u = (function (e) {
        function t(t, i, r, n) {
          var a = e.call(this, t, i) || this;
          return (a.data = r), (a.square = n), a;
        }
        return Object(r.__extends)(t, e), t;
      })(n.Point);
      function _(e, t, i, r) {
        var n = i + r / 2;
        Object(h.drawRoundRect)(e, t.x - n, t.y - n, 2 * n, 2 * n, (i + r) / 2),
          e.closePath(),
          (e.lineWidth = r);
      }
      function f(e, t, i, r) {
        (e.globalAlpha = 0.2), _(e, t, i, r), e.stroke(), (e.globalAlpha = 1);
      }
      function v(e, t, i, r) {
        _(e, t, i - r, r), e.fill(), e.stroke();
      }
      function g(e, t, i, r) {
        (e.globalAlpha = 0.2),
          e.beginPath(),
          e.arc(t.x, t.y, i + r / 2, 0, 2 * Math.PI, !0),
          e.closePath(),
          (e.lineWidth = r),
          e.stroke(),
          (e.globalAlpha = 1);
      }
      function y(e, t, i, r) {
        e.beginPath(),
          e.arc(t.x, t.y, i - r / 2, 0, 2 * Math.PI, !0),
          e.closePath(),
          (e.lineWidth = r),
          e.fill(),
          e.stroke();
      }
      var w = (function () {
          function e(e) {
            this._data = e;
          }
          return (
            (e.prototype.draw = function (e, t) {
              if (this._data.visible) {
                for (
                  var i = [], r = [], n = [], a = [], s = 0;
                  s < this._data.points.length;
                  ++s
                ) {
                  var o = this._data.points[s],
                    l = this._data.backgroundColors[s];
                  o.square ? (i.push(o), r.push(l)) : (n.push(o), a.push(l));
                }
                i.length &&
                  ((e.strokeStyle = this._data.color),
                  this._drawPoints(e, t.pixelRatio, i, r, v, f)),
                  n.length &&
                    ((e.strokeStyle = this._data.color),
                    this._drawPoints(e, t.pixelRatio, n, a, y, g));
              }
            }),
            (e.prototype.hitTest = function (e) {
              for (
                var t = this._data.radius || p(), i = 0;
                i < this._data.points.length;
                ++i
              ) {
                var r = this._data.points[i];
                if (r.subtract(e).length() <= t + 2) {
                  var n =
                    void 0 !== this._data.pointsCursorType
                      ? this._data.pointsCursorType[i]
                      : c.PaneCursorType.Default;
                  return new s.HitTestResult(this._data.hittestResult, {
                    pointIndex: r.data,
                    cursorType: n,
                  });
                }
              }
              return null;
            }),
            (e.prototype.doesIntersectWithBox = function (e) {
              return this._data.points.some(function (t) {
                return Object(l.pointInBox)(t, e);
              });
            }),
            (e.prototype._drawPoints = function (e, t, i, r, n, a) {
              var s = this._data.currentPoint,
                o = this._data.radius || p(),
                l = Math.max(1, Math.floor((this._data.strokeWidth || 2) * t));
              this._data.selected && (l += Math.max(1, Math.floor(t / 2)));
              var h = Math.max(1, Math.floor(t)),
                c = Math.round(o * t * 2);
              c % 2 != h % 2 && (c += 1);
              for (var _ = (h % 2) / 2, f = 0; f < i.length; ++f) {
                var v = i[f];
                if (
                  ((e.fillStyle = r[f]),
                  !(
                    Object(d.isInteger)(v.data) &&
                    this._data.linePointBeingEdited === v.data
                  ))
                )
                  if (
                    (n(
                      e,
                      new u(
                        Math.round(v.x * t) + _,
                        Math.round(v.y * t) + _,
                        v.data,
                        v.square,
                      ),
                      c / 2,
                      l,
                    ),
                    v.subtract(s).length() <= o + 2)
                  ) {
                    var g = Math.max(
                        1,
                        Math.floor(this._data.selectedStrokeWidth * t),
                      ),
                      y = Math.round(o * t * 2);
                    y % 2 != h % 2 && (y += 1),
                      a(
                        e,
                        new u(
                          Math.round(v.x * t) + _,
                          Math.round(v.y * t) + _,
                          v.data,
                          v.square,
                        ),
                        y / 2,
                        g,
                      );
                  }
              }
            }),
            e
          );
        })(),
        x = i('Eyy1');
      function m(e, t) {
        var i = t.x - e.x,
          r = t.y - e.y,
          n = Math.abs(Math.atan2(i, r));
        return n > Math.PI / 4 && n < (3 * Math.PI) / 4
          ? c.PaneCursorType.VerticalResize
          : c.PaneCursorType.HorizontalResize;
      }
      i.d(t, 'thirdPointCursorType', function () {
        return m;
      }),
        i.d(t, 'LineSourcePaneView', function () {
          return b;
        });
      var b = (function () {
        function e(e, t) {
          (this._invalidated = !0),
            (this._points = []),
            (this._floatPoints = []),
            (this._middlePoint = null),
            (this._source = e),
            (this._model = t);
        }
        return (
          (e.prototype.priceToCoordinate = function (e) {
            var t = this._source.priceScale();
            if (null === t) return null;
            var i = this._source.ownerSource(),
              r = null !== i ? i.firstValue() : null;
            return null === r ? null : t.priceToCoordinate(e, r);
          }),
          (e.prototype.currentPoint = function () {
            var e = this._model.crossHairSource();
            return new n.Point(e.originX(), e.originY());
          }),
          (e.prototype.anchorColor = function () {
            return '#1E88E5';
          }),
          (e.prototype.isHoveredSource = function () {
            return this._source === this._model.hoveredSource();
          }),
          (e.prototype.isSelectedSource = function () {
            return this._model.selection().isSelected(this._source);
          }),
          (e.prototype.isBeingEdited = function () {
            return this._model.lineBeingEdited() === this._source;
          }),
          (e.prototype.isEditMode = function () {
            return !this._model.isSnapshot();
          }),
          (e.prototype.areAnchorsVisible = function () {
            return (
              ((this.isHoveredSource() && !this.isLocked()) ||
                this.isSelectedSource()) &&
              this.isEditMode()
            );
          }),
          (e.prototype.update = function () {
            this._invalidated = !0;
          }),
          (e.prototype.isLocked = function () {
            return Boolean(this._source.isLocked && this._source.isLocked());
          }),
          (e.prototype.addAnchors = function (e) {
            var t = this._points;
            this._model.lineBeingCreated() === this._source &&
              (t = t.slice(0, -1)),
              e.append(this.createLineAnchor({ points: t }));
          }),
          (e.prototype.createLineAnchor = function (e) {
            if (this.isLocked())
              return new o.SelectionRenderer({
                bgColors: this._lineAnchorColors(e.points),
                points: e.points,
                visible: this.areAnchorsVisible(),
                hittestResult: s.HitTestResult.REGULAR,
                barSpacing: this._model.timeScale().barSpacing(),
              });
            var t = Object(a.lastEventIsTouch)();
            return new w(
              Object(r.__assign)(Object(r.__assign)({}, e), {
                color: this.anchorColor(),
                backgroundColors: this._lineAnchorColors(e.points),
                currentPoint: this.currentPoint(),
                linePointBeingEdited: this.isBeingEdited()
                  ? this._model.linePointBeingEdited()
                  : null,
                hittestResult: s.HitTestResult.CHANGEPOINT,
                radius: t ? 13 : 6,
                strokeWidth: t ? 2 : 1,
                selected: this.isSelectedSource(),
                selectedStrokeWidth: t ? 0 : 3,
                visible: this.areAnchorsVisible(),
              }),
            );
          }),
          (e.prototype._lineAnchorColors = function (e) {
            var t = this,
              i = Object(x.ensureNotNull)(
                this._model.paneForSource(this._source),
              ).height();
            return e.map(function (e) {
              return t._model.backgroundColorAtYPercentFromTop(e.y / i);
            });
          }),
          (e.prototype._updateImpl = function () {
            (this._points = []), (this._floatPoints = []);
            var e = this._source.priceScale(),
              t = this._model.timeScale();
            if (e && !e.isEmpty() && !t.isEmpty()) {
              for (var i = this._source.points(), r = 0; r < i.length; r++) {
                var n = i[r],
                  a = this._source.pointToScreenPoint(n);
                if (!a) return;
                var s = a[0];
                s.data = r;
                var o = a[1];
                (o.data = r), this._floatPoints.push(s), this._points.push(o);
              }
              2 === this._points.length &&
                (this._middlePoint = this._source.calcMiddlePoint(
                  this._points[0],
                  this._points[1],
                )),
                (this._invalidated = !1);
            }
          }),
          (e.prototype._getSource = function () {
            return this._source;
          }),
          (e.prototype._getPoints = function () {
            return this._points;
          }),
          (e.prototype._getModel = function () {
            return this._model;
          }),
          (e.prototype._height = function () {
            var e = this._source.priceScale();
            return null !== e ? e.height() : 0;
          }),
          (e.prototype._width = function () {
            return this._model.timeScale().width();
          }),
          e
        );
      })();
    },
    'am+t': function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('VdBB').HitTestResult,
        s = i('Zy3/').CompositeRenderer,
        o = i('Tmoa'),
        l = i('cPgM').ScaledPaneRenderer;
      function h() {
        l.call(this), (this._data = null);
      }
      function d(e, t) {
        n.call(this, e, t), (this._renderer = null);
      }
      inherit(h, l),
        (h.prototype.setData = function (e) {
          this._data = e;
        }),
        (h.prototype._drawImpl = function (e) {
          null !== this._data &&
            ((e.strokeStyle = this._data.color),
            (e.lineWidth = this._data.linewidth),
            CanvasEx.setLineStyle(e, this._data.linestyle),
            e.save(),
            e.translate(this._data.point.x + 1, this._data.point.y),
            e.scale(this._data.width, this._data.height),
            e.beginPath(),
            e.arc(0.5, 0, 0.5, Math.PI, 0, !1),
            e.restore(),
            e.stroke(),
            this._data.fillBackground &&
              ((e.fillStyle = o.generateColor(
                this._data.backcolor,
                this._data.transparency,
              )),
              e.fill()));
        }),
        (h.prototype.hitTest = function (e) {
          if (null === this._data || e.y > this._data.point.y) return null;
          if (
            e.x < this._data.point.x ||
            e.x > this._data.point.x + this._data.width
          )
            return null;
          var t = new r(
              this._data.point.x + this._data.width / 2,
              this._data.point.y,
            ),
            i = e.subtract(t),
            n = this._data.height / this._data.width;
          i.y /= n;
          var s = i.length();
          return Math.abs(s - this._data.width / 2) < 3
            ? new a(a.MOVEPOINT)
            : null;
        }),
        inherit(d, n),
        (d.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (d.prototype._updateImpl = function () {
          if (
            (n.prototype._updateImpl.call(this),
            (this._renderer = null),
            !(this._points.length < 2))
          ) {
            var e = this._source.points(),
              t = e[0],
              i = e[1],
              a = Math.min(t.index, i.index),
              o = Math.max(t.index, i.index),
              l = o - a,
              d = this._points[0],
              c = this._points[1],
              p = Math.abs(d.x - c.x),
              u = new s(),
              _ = this._source.properties(),
              f = this._model.timeScale();
            if (0 !== l) {
              for (var v = Math.min(d.x, c.x), g = [], y = a; v > -p; y -= l)
                (v = f.indexToCoordinate(y)), g.push(v);
              v = Math.max(d.x, c.x);
              for (y = o; v < f.width(); y += l)
                (v = f.indexToCoordinate(y)), g.push(v);
              for (var w = 0; w < g.length; w++) {
                var x = {
                    point: new r(g[w], d.y),
                    width: p,
                    height: p,
                    color: _.linecolor.value(),
                    linewidth: _.linewidth.value(),
                    linestyle: _.linestyle.value(),
                    fillBackground: _.fillBackground.value(),
                    backcolor: _.backgroundColor.value(),
                    transparency: _.transparency.value(),
                  },
                  m = new h();
                m.setData(x), u.append(m);
              }
              this.addAnchors(u), (this._renderer = u);
            }
          }
        }),
        (t.TimeCyclesPaneView = d);
    },
    amUF: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'CrossLinePaneView', function () {
          return h;
        });
      var r = i('mrSG'),
        n = i('aB9a'),
        a = i('l4sv'),
        s = i('z+cS'),
        o = i('Zy3/'),
        l = i('VdBB'),
        h = (function (e) {
          function t(t, i) {
            var r = e.call(this, t, i) || this;
            return (
              (r._renderer = null),
              (r._horizLineRenderer = new a.HorizontalLineRenderer()),
              (r._vertLineRenderer = new s.VerticalLineRenderer()),
              r._horizLineRenderer.setHitTest(
                new l.HitTestResult(l.HitTestResult.MOVEPOINT),
              ),
              r
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.update = function () {
              this._invalidated = !0;
            }),
            (t.prototype.renderer = function () {
              return (
                this._invalidated &&
                  (this._updateImpl(), (this._invalidated = !1)),
                this._renderer
              );
            }),
            (t.prototype._updateImpl = function () {
              e.prototype._updateImpl.call(this), (this._renderer = null);
              var t = this._getPoints();
              if (0 !== t.length) {
                var i = {
                  color: this._getSource().lineColor(),
                  linestyle: this._getSource().lineStyle(),
                  linewidth: this._getSource().lineWidth(),
                  x: t[0].x,
                  y: t[0].y,
                };
                this._horizLineRenderer.setData(i),
                  this._vertLineRenderer.setData(i);
                var r = new o.CompositeRenderer();
                r.append(this._horizLineRenderer),
                  r.append(this._vertLineRenderer),
                  this.addAnchors(r),
                  (this._renderer = r);
              }
            }),
            t
          );
        })(n.LineSourcePaneView);
    },
    amvX: function (e, t, i) {
      'use strict';
      i.d(t, 'a', function () {
        return o;
      });
      var r = i('mrSG'),
        n = i('aO4+'),
        a = i('Tmoa'),
        s = i('VdBB'),
        o = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (t._data = null), t;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.setData = function (e) {
              this._data = e;
            }),
            (t.prototype.hitTest = function (e) {
              if (null === this._data) return null;
              e = e.subtract(this._data.center);
              var t = this._data.edge.subtract(this._data.center),
                i = t.y / t.x;
              e = new n.Point(e.x, e.y / i);
              var r = this._data.point.subtract(this._data.center),
                a = (r = new n.Point(r.x, r.y / i)).length(),
                o = e.length(),
                l = this._data.prevPoint.subtract(this._data.center),
                h = (l = new n.Point(l.x, l.y / i)).length();
              return Math.abs(o - a) < 5 && t.x * e.x >= 0 && t.y * e.y >= 0
                ? new s.HitTestResult(s.HitTestResult.MOVEPOINT)
                : this._data.fillBack &&
                  o >= h &&
                  o <= a &&
                  t.x * e.x >= 0 &&
                  t.y * e.y >= 0
                ? new s.HitTestResult(s.HitTestResult.MOVEPOINT_BACKGROUND)
                : null;
            }),
            (t.prototype._drawImpl = function (e) {
              if (null !== this._data) {
                (e.lineCap = 'butt'),
                  (e.strokeStyle = this._data.color),
                  (e.lineWidth = this._data.linewidth),
                  e.translate(this._data.center.x, this._data.center.y);
                var t = this._data.edge.subtract(this._data.center),
                  i = t.y / t.x,
                  r = this._data.point.subtract(this._data.center),
                  s = (r = new n.Point(r.x, r.y / i)).length(),
                  o = this._data.prevPoint.subtract(this._data.center),
                  l = (o = new n.Point(o.x, o.y / i)).length();
                e.scale(1, i),
                  this._data.fillBack &&
                    (this._data.point.x < this._data.center.x &&
                      ((s = -s), (l = -l)),
                    e.beginPath(),
                    e.moveTo(l, 0),
                    e.lineTo(s, 0),
                    e.arcTo(s, s, 0, s, Math.abs(s)),
                    e.lineTo(0, l),
                    e.arcTo(l, l, l, 0, Math.abs(l)),
                    (e.fillStyle = Object(a.generateColor)(
                      this._data.color,
                      this._data.transparency,
                      !0,
                    )),
                    e.fill()),
                  e.beginPath(),
                  this._data.point.x > this._data.center.x
                    ? e.arc(0, 0, Math.abs(s), 0, Math.PI / 2, !1)
                    : e.arc(0, 0, Math.abs(s), -Math.PI / 2, -Math.PI, !0),
                  e.scale(1, 1 / i),
                  e.stroke();
              }
            }),
            t
          );
        })(i('cPgM').ScaledPaneRenderer);
    },
    bFMU: function (e, t, i) {
      'use strict';
      var r = i('aB9a').LineSourcePaneView,
        n = i('pJOz').TrendLineRenderer,
        a = i('qgcf').TextRenderer,
        s = i('Zy3/').CompositeRenderer,
        o = i('zXvd').NumericFormatter,
        l = i('Tmoa'),
        h = i('a7Ha').LineEnd;
      function d(e, t) {
        r.call(this, e, t),
          (this._numericFormatter = new o()),
          (this._lineRendererPoints01 = new n()),
          (this._lineRendererPoints12 = new n()),
          (this._lineRendererPoints23 = new n()),
          (this._abRetracementTrend = new n()),
          (this._cdRetracementTrend = new n()),
          (this._abLabelRenderer = new a()),
          (this._cdLabelRenderer = new a()),
          (this._textRendererALabel = new a()),
          (this._textRendererBLabel = new a()),
          (this._textRendererCLabel = new a()),
          (this._textRendererDLabel = new a()),
          (this._renderer = null);
      }
      inherit(d, r),
        (d.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (d.prototype._updateImpl = function () {
          var e, t, i;
          if (
            (r.prototype._updateImpl.call(this),
            this._source.points().length >= 3 &&
              ((e = this._source.points()[0]),
              (t = this._source.points()[1]),
              (i = this._source.points()[2]),
              (this._ABRetracement =
                Math.round(
                  1e3 * Math.abs((i.price - t.price) / (t.price - e.price)),
                ) / 1e3)),
            4 === this._source.points().length)
          ) {
            var n = this._source.points()[3];
            this._CDRetracement =
              Math.round(
                1e3 * Math.abs((n.price - i.price) / (i.price - t.price)),
              ) / 1e3;
          }
          if (this._points.length < 2) this._renderer = null;
          else {
            var a = this._source.properties(),
              o = new s(),
              d = this._points,
              c = this,
              p = function (e, t) {
                return {
                  points: [e],
                  text: t,
                  color: a.textcolor.value(),
                  vertAlign: 'middle',
                  horzAlign: 'center',
                  font: a.font.value(),
                  offsetX: 0,
                  offsetY: 0,
                  bold: a.bold && a.bold.value(),
                  italic: a.italic && a.italic.value(),
                  fontsize: a.fontsize.value(),
                  backgroundColor: c._source.properties().color.value(),
                  backgroundRoundRect: 4,
                };
              },
              u = function (e, t, i, r) {
                return {
                  points: [e, t],
                  width: c._model.timeScale().width(),
                  height: c._source.priceScale().height(),
                  color: l.generateColor(
                    c._source.properties().color.value(),
                    i,
                  ),
                  linewidth: r || a.linewidth.value(),
                  linestyle: CanvasEx.LINESTYLE_SOLID,
                  extendleft: !1,
                  extendright: !1,
                  leftend: h.Normal,
                  rightend: h.Normal,
                };
              },
              _ = u(d[0], d[1], 0);
            if (
              (this._lineRendererPoints01.setData(_),
              o.append(this._lineRendererPoints01),
              d.length >= 3)
            ) {
              _ = u(d[1], d[2], 0);
              this._lineRendererPoints12.setData(_),
                o.append(this._lineRendererPoints12);
            }
            if (4 === d.length) {
              _ = u(d[2], d[3], 0);
              this._lineRendererPoints23.setData(_),
                o.append(this._lineRendererPoints23);
            }
            var f = p(this._points[0], 'A');
            this._points[1].y > this._points[0].y
              ? ((f.vertAlign = 'bottom'), (f.offsetY = 5))
              : ((f.vertAlign = 'top'), (f.offsetY = 5)),
              this._textRendererALabel.setData(f),
              o.append(this._textRendererALabel);
            f = p(this._points[1], 'B');
            if (
              (this._points[1].y < this._points[0].y
                ? ((f.vertAlign = 'bottom'), (f.offsetY = 5))
                : ((f.vertAlign = 'top'), (f.offsetY = 5)),
              this._textRendererBLabel.setData(f),
              o.append(this._textRendererBLabel),
              this._points.length > 2)
            ) {
              f = p(this._points[2], 'C');
              this._points[2].y < this._points[1].y
                ? ((f.vertAlign = 'bottom'), (f.offsetY = 5))
                : ((f.vertAlign = 'top'), (f.offsetY = 5)),
                this._textRendererCLabel.setData(f),
                o.append(this._textRendererCLabel);
            }
            if (this._points.length > 3) {
              f = p(this._points[3], 'D');
              this._points[3].y < this._points[2].y
                ? ((f.vertAlign = 'bottom'), (f.offsetY = 5))
                : ((f.vertAlign = 'top'), (f.offsetY = 5)),
                this._textRendererDLabel.setData(f),
                o.append(this._textRendererDLabel);
            }
            if (this._points.length >= 3) {
              var v = this._points[0].add(this._points[2]).scaled(0.5);
              _ = u(this._points[0], this._points[2], 70, 1);
              this._abRetracementTrend.setData(_),
                o.append(this._abRetracementTrend);
              f = p(v, this._numericFormatter.format(this._ABRetracement));
              this._abLabelRenderer.setData(f), o.append(this._abLabelRenderer);
            }
            if (this._points.length >= 4) {
              (v = this._points[1].add(this._points[3]).scaled(0.5)),
                (_ = u(this._points[1], this._points[3], 70, 1));
              this._cdRetracementTrend.setData(_),
                o.append(this._cdRetracementTrend);
              f = p(v, this._numericFormatter.format(this._CDRetracement));
              this._cdLabelRenderer.setData(f), o.append(this._cdLabelRenderer);
            }
            this.addAnchors(o), (this._renderer = o);
          }
        }),
        (t.ABCDPaneView = d);
    },
    bcXK: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('Hr11'),
        a = i('pJOz').TrendLineRenderer,
        s = i('cjIn').PaneRendererCachedImage,
        o = i('VdBB').HitTestResult,
        l = i('Zy3/').CompositeRenderer,
        h = i('Tmoa'),
        d = i('a7Ha').LineEnd,
        c = i('cPgM').ScaledPaneRenderer,
        p = i('NCfL').LineToolPaneViewWithLevelledTextCache;
      function u(e, t, i) {
        c.call(this),
          (this._data = e),
          (this._hittest = t || new o(o.MOVEPOINT)),
          (this._backHittest = i || new o(o.MOVEPOINT_BACKGROUND));
      }
      function _(e, t) {
        p.call(this, e, t),
          (this._rendererCache = {}),
          (this._trendLineRenderer = new a()),
          (this._renderer = null);
      }
      inherit(u, c),
        (u.prototype._drawImpl = function (e) {
          (e.lineCap = 'butt'),
            (e.strokeStyle = this._data.color),
            (e.lineWidth = this._data.linewidth),
            e.translate(this._data.center.x, this._data.center.y),
            e.beginPath(),
            this._data.fullCircles
              ? e.arc(0, 0, this._data.radius, 2 * Math.PI, 0, !1)
              : this._data.dir > 0
              ? e.arc(0, 0, this._data.radius, 0, Math.PI, !1)
              : e.arc(0, 0, this._data.radius, Math.PI, 0, !1),
            e.stroke(),
            this._data.fillBackground &&
              (this._data.radius2 &&
                (this._data.fullCircles
                  ? e.arc(0, 0, this._data.radius2, 2 * Math.PI, 0, !0)
                  : this._data.dir > 0
                  ? e.arc(0, 0, this._data.radius2, Math.PI, 0, !0)
                  : e.arc(0, 0, this._data.radius2, 0, Math.PI, !0)),
              (e.fillStyle = h.generateColor(
                this._data.color,
                this._data.transparency,
                !0,
              )),
              e.fill());
        }),
        (u.prototype.hitTest = function (e) {
          if (
            n.sign(e.y - this._data.center.y) !== this._data.dir &&
            !this._data.fullCircles
          )
            return null;
          var t = e.subtract(this._data.center).length();
          return Math.abs(t - this._data.radius) < 3
            ? this._hittest
            : this._data.hittestOnBackground &&
              Math.abs(t) <= this._data.radius + 3
            ? this._backHittest
            : null;
        }),
        inherit(_, p),
        (_.prototype.getCacheRects = function (e, t) {
          p.prototype.getCacheRects.call(this, e, t);
          var i = this._cacheState.preparedCells.cells[
            this._levels[t].index - 1
          ];
          if (i) {
            var r = this._levels[t],
              n = {
                left: i.left,
                top: this._cache.topByRow(this._cacheState.row),
                width: i.width,
                height: this._cache.rowHeight(this._cacheState.row),
              };
            return {
              cacheRect: n,
              targetRect: {
                left: Math.round(r.labelPoint.x - n.width),
                top: Math.round(r.labelPoint.y - n.height / 2),
                width: i.width,
                height: n.height,
              },
            };
          }
        }),
        (_.prototype._updateImpl = function () {
          if (
            (p.prototype._updateImpl.call(this),
            (this._renderer = null),
            !(this._floatPoints.length < 2) &&
              this._source.priceScale() &&
              !this._source.priceScale().isEmpty() &&
              !this._model.timeScale().isEmpty())
          ) {
            var e = this._floatPoints[0],
              t = this._floatPoints[1],
              i = e.subtract(t).length();
            this._levels = [];
            for (
              var a = this._source.properties(),
                h = this._source.levelsCount(),
                c = 1;
              c <= h;
              c++
            ) {
              var _ = a['level' + c];
              if (_.visible.value()) {
                var f = _.coeff.value(),
                  v = _.color.value(),
                  g = t.subtract(e).length() * f,
                  y = n.sign(t.y - e.y),
                  w = new r(e.x, e.y + y * i * f);
                this._levels.push({
                  color: v,
                  radius: g,
                  dir: y,
                  labelPoint: w,
                  linewidth: _.linewidth.value(),
                  linestyle: _.linestyle.value(),
                  index: c,
                });
              }
            }
            if (!(this._floatPoints.length < 2)) {
              var x = new l(),
                m =
                  ((e = this._floatPoints[0]),
                  (a = this._source.properties()).fillBackground.value()),
                b = a.transparency.value();
              for (c = 0; c < this._levels.length; c++) {
                var R = this._levels[c],
                  T = {};
                (T.center = e),
                  (T.color = R.color),
                  (T.linewidth = R.linewidth),
                  (T.radius = R.radius),
                  (T.dir = R.dir),
                  (T.transparency = b),
                  (T.fillBackground = m),
                  (T.hittestOnBackground = !0),
                  (T.fullCircles = a.fullCircles.value()),
                  c > 0 && (T.radius2 = this._levels[c - 1].radius);
                var S = new o(o.MOVEPOINT, null, R.index);
                if ((x.append(new u(T, S)), a.showCoeffs.value())) {
                  var P = new s(this, c);
                  x.append(P);
                }
              }
              if (a.trendline.visible.value()) {
                var L = {
                  points: [this._floatPoints[0], this._floatPoints[1]],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: a.trendline.color.value(),
                  linewidth: a.trendline.linewidth.value(),
                  linestyle: a.trendline.linestyle.value(),
                  extendleft: !1,
                  extendright: !1,
                  leftend: d.Normal,
                  rightend: d.Normal,
                };
                this._trendLineRenderer.setData(L),
                  x.append(this._trendLineRenderer);
              }
              this.addAnchors(x), (this._renderer = x);
            }
          }
        }),
        (_.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.FibSpeedResistanceArcsPaneView = _);
    },
    c6sA: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('z+cS').VerticalLineRenderer,
        s = i('IjC5').RectangleRenderer,
        o = i('pJOz').TrendLineRenderer,
        l = i('VdBB').HitTestResult,
        h = i('gyZD').PaneRendererLine,
        d = i('Zy3/').CompositeRenderer,
        c = i('Tmoa'),
        p = i('Ye2/').LineToolBarsPatternMode,
        u = i('a7Ha').LineEnd;
      function _(e, t) {
        n.call(this, e, t),
          (this._vertLineRenderer1 = new a()),
          (this._vertLineRenderer2 = new a()),
          (this._medianRenderer = new o()),
          (this._renderer = null);
      }
      inherit(_, n),
        (_.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (_.prototype._updateImpl = function () {
          if (
            (n.prototype._updateImpl.call(this),
            (this._renderer = null),
            !(
              !this._source.priceScale() ||
              this._source.priceScale().isEmpty() ||
              this._points.length < 2
            ))
          ) {
            if (
              this._source._pattern &&
              this._source._pattern.length > 0 &&
              2 === this._source.points().length
            ) {
              var e = this._source.priceScale(),
                t = this._source.firstPatternPrice(),
                i = this._source.pressCoeff(),
                a = this._source.ownerSource().firstValue(),
                o = e.priceToCoordinate(t, a),
                _ = function (r) {
                  var n = (r - t) * i + t;
                  return e.priceToCoordinate(n, a) - o;
                },
                f = parseInt(this._source.properties().mode.value()),
                v =
                  this._source.points()[0].index >
                  this._source.points()[1].index
                    ? 1
                    : 0,
                g = this._points[v],
                y = g.x,
                w = Math.abs(
                  (this._points[0].x - this._points[1].x) /
                    (this._source._pattern.length - 1),
                ),
                x = {
                  0: function (e) {
                    return {
                      high: _(e[TradingView.HIGH_PLOT]),
                      low: _(e[TradingView.LOW_PLOT]),
                    };
                  },
                  1: function (e, t) {
                    return new r(y + t * w, _(e[TradingView.CLOSE_PLOT]) + g.y);
                  },
                  2: function (e) {
                    return {
                      open: _(e[TradingView.OPEN_PLOT]),
                      close: _(e[TradingView.CLOSE_PLOT]),
                    };
                  },
                  3: function (e, t) {
                    return new r(y + t * w, _(e[TradingView.OPEN_PLOT]) + g.y);
                  },
                  4: function (e, t) {
                    return new r(y + t * w, _(e[TradingView.HIGH_PLOT]) + g.y);
                  },
                  5: function (e, t) {
                    return new r(y + t * w, _(e[TradingView.LOW_PLOT]) + g.y);
                  },
                  6: function (e, t) {
                    return new r(
                      y + t * w,
                      _(
                        (e[TradingView.HIGH_PLOT] + e[TradingView.LOW_PLOT]) /
                          2,
                      ) + g.y,
                    );
                  },
                };
              this._pattern = this._source._pattern.map(x[f]);
            } else delete this._pattern;
            if (this._pattern && 2 === this._source.points().length) {
              var m =
                this._source.points()[0].index < this._source.points()[1].index
                  ? this._points[0]
                  : this._points[1];
              if (!m) return void (this._renderer = new d());
              (f = parseInt(this._source.properties().mode.value(), 10)),
                (w = Math.abs(
                  (this._points[0].x - this._points[1].x) /
                    (this._pattern.length - 1),
                ));
              if (f === p.Bars || f === p.OpenClose) {
                for (
                  var b = new d(),
                    R = f === p.Bars ? ['high', 'low'] : ['open', 'close'],
                    T = R[0],
                    S = R[1],
                    P = 0;
                  P < this._pattern.length;
                  P++
                ) {
                  var L = Math.round(m.x + P * w + 0.5),
                    C = m.y + Math.round(this._pattern[P][T]),
                    M = m.y + Math.round(this._pattern[P][S]);
                  ((O = {}).points = [new r(L - 1, C), new r(L + 1, M)]),
                    (O.color = this._source.properties().color.value()),
                    (O.linewidth = 1),
                    (O.backcolor = this._source.properties().color.value()),
                    (O.fillBackground = !0),
                    (O.transparency = 10),
                    (O.extendLeft = !1),
                    (O.extendRight = !1);
                  var I = new s();
                  I.setData(O), b.append(I);
                }
                b.append(this.createLineAnchor({ points: this._points })),
                  (this._renderer = b);
              } else {
                var O;
                b = new d();
                ((O = {}).barSpacing = w),
                  (O.items = this._pattern),
                  (O.histogramBase = 0),
                  (O.lineIndex = 0),
                  (O.lineColor = c.generateColor(
                    this._source.properties().color.value(),
                    10,
                  )),
                  (O.lineStyle = CanvasEx.LINESTYLE_SOLID),
                  (O.lineWidth = 2),
                  (O.hittest = new l(l.MOVEPOINT)),
                  b.append(new h(O)),
                  b.append(this.createLineAnchor({ points: this._points })),
                  (this._renderer = b);
              }
            } else {
              b = new d();
              if (this._points.length < 2) return void (this._renderer = b);
              var D = this._model.timeScale().width(),
                k = this._source.priceScale().height(),
                B = this._points[0],
                N = this._points[1],
                A = {};
              (A.width = D),
                (A.height = k),
                (A.x = B.x),
                (A.color = '#808080'),
                (A.linewidth = 1),
                (A.linestyle = CanvasEx.LINESTYLE_SOLID),
                this._vertLineRenderer1.setData(A),
                b.append(this._vertLineRenderer1);
              var z = {};
              (z.width = D),
                (z.height = k),
                (z.x = N.x),
                (z.color = '#808080'),
                (z.linewidth = 1),
                (z.linestyle = CanvasEx.LINESTYLE_SOLID),
                this._vertLineRenderer2.setData(z),
                b.append(this._vertLineRenderer2);
              var E = {
                points: [B, N],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: '#808080',
                linewidth: 1,
                linestyle: CanvasEx.LINESTYLE_SOLID,
                extendleft: !1,
                extendright: !1,
                leftend: u.Normal,
                rightend: u.Normal,
              };
              this._medianRenderer.setData(E),
                b.append(this._medianRenderer),
                (this._renderer = b);
            }
          }
        }),
        (t.BarsPatternPaneView = _);
    },
    'cT+B': function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('pJOz').TrendLineRenderer,
        s = i('2trc').ChannelRenderer,
        o = i('VdBB').HitTestResult,
        l = i('Zy3/').CompositeRenderer,
        h = i('a7Ha').LineEnd;
      function d(e, t) {
        n.call(this, e, t),
          (this._medianRenderer = new a()),
          (this._sideRenderer = new a()),
          (this._renderer = null);
      }
      function c(e, t) {
        d.call(this, e, t), (this._backSideRenderer = new a());
      }
      function p(e, t) {
        c.call(this, e, t);
      }
      function u(e, t) {
        d.call(this, e, t),
          (this._backSideRenderer = new a()),
          (this._centerRenderer = new a());
      }
      inherit(d, n),
        (d.prototype._updateImpl = function () {
          n.prototype._updateImpl.call(this),
            (this._renderer = null),
            0 !== this._floatPoints.length &&
              (3 === this._floatPoints.length
                ? ((this._medianPoint = this._floatPoints[1]
                    .add(this._floatPoints[2])
                    .scaled(0.5)),
                  (this._medianPoint.data = 3))
                : 2 === this._floatPoints.length
                ? ((this._medianPoint = this._floatPoints[1]),
                  (this._medianPoint.data = 3))
                : ((this._medianPoint = this._floatPoints[0]),
                  (this._medianPoint.data = 3)),
              this._updateRenderer());
        }),
        (d.prototype._updateRenderer = function () {
          if (!(this._floatPoints.length < 2) && this._medianPoint) {
            var e = this._source.properties(),
              t = new l(),
              i = {
                points: [this._floatPoints[0], this._medianPoint],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: e.median.color.value(),
                linewidth: e.median.linewidth.value(),
                linestyle: e.median.linestyle.value(),
                extendleft: e.extendLines.value(),
                extendright: !0,
                leftend: h.Normal,
                rightend: h.Normal,
              };
            if (
              (this._medianRenderer.setData(i),
              t.append(this._medianRenderer),
              this._floatPoints.length < 3)
            )
              return this.addAnchors(t), void (this._renderer = t);
            var r = {
              points: [this._floatPoints[1], this._floatPoints[2]],
              width: this._model.timeScale().width(),
              height: this._source.priceScale().height(),
              color: e.median.color.value(),
              linewidth: e.median.linewidth.value(),
              linestyle: e.median.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: h.Normal,
              rightend: h.Normal,
            };
            this._sideRenderer.setData(r), t.append(this._sideRenderer);
            for (
              var n = this._floatPoints[2]
                  .subtract(this._floatPoints[1])
                  .scaled(0.5),
                d = this._medianPoint.subtract(this._floatPoints[0]),
                c = 0,
                p = e.fillBackground.value(),
                u = e.transparency.value(),
                _ = 0;
              _ <= 8;
              _++
            ) {
              var f = e['level' + _];
              if (f.visible.value()) {
                var v,
                  g,
                  y = this._medianPoint.addScaled(n, f.coeff.value()),
                  w = y.add(d),
                  x = this._medianPoint.addScaled(n, -f.coeff.value()),
                  m = x.add(d);
                if (p)
                  ((v = {}).p1 = y),
                    (v.p2 = w),
                    (v.p3 = this._medianPoint.addScaled(n, c)),
                    (v.p4 = v.p3.add(d)),
                    (v.color = f.color.value()),
                    (v.width = this._model.timeScale().width()),
                    (v.height = this._source.priceScale().height()),
                    (v.transparency = u),
                    (v.hittestOnBackground = !0),
                    (v.extendLeft = e.extendLines.value()),
                    (g = new s()).setData(v),
                    t.append(g),
                    ((v = {}).p1 = x),
                    (v.p2 = m),
                    (v.p3 = this._medianPoint.addScaled(n, -c)),
                    (v.p4 = v.p3.add(d)),
                    (v.color = f.color.value()),
                    (v.width = this._model.timeScale().width()),
                    (v.height = this._source.priceScale().height()),
                    (v.transparency = u),
                    (v.hittestOnBackground = !0),
                    (v.extendLeft = e.extendLines.value()),
                    (g = new s()).setData(v),
                    t.append(g);
                c = f.coeff.value();
                var b = {
                    points: [y, w],
                    width: this._model.timeScale().width(),
                    height: this._source.priceScale().height(),
                    color: f.color.value(),
                    linewidth: f.linewidth.value(),
                    linestyle: f.linestyle.value(),
                    extendleft: e.extendLines.value(),
                    extendright: !0,
                    leftend: h.Normal,
                    rightend: h.Normal,
                  },
                  R = new a();
                R.setData(b),
                  R.setHitTest(new o(o.MOVEPOINT, null, _)),
                  t.append(R);
                var T = {
                    points: [x, m],
                    width: this._model.timeScale().width(),
                    height: this._source.priceScale().height(),
                    color: f.color.value(),
                    linewidth: f.linewidth.value(),
                    linestyle: f.linestyle.value(),
                    extendleft: e.extendLines.value(),
                    extendright: !0,
                    leftend: h.Normal,
                    rightend: h.Normal,
                  },
                  S = new a();
                S.setData(T),
                  S.setHitTest(new o(o.MOVEPOINT, null, _)),
                  t.append(S);
              }
            }
            this.addAnchors(t), (this._renderer = t);
          }
        }),
        (d.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        inherit(c, d),
        (c.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (c.prototype._updateRenderer = function () {
          if (!(this._floatPoints.length < 2)) {
            this._calcMofifiedBase();
            var e = this._source.properties(),
              t = new l(),
              i = {
                points: [this._floatPoints[0], this._floatPoints[1]],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: e.median.color.value(),
                linewidth: e.median.linewidth.value(),
                linestyle: e.median.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: h.Normal,
                rightend: h.Normal,
              };
            if (
              (this._backSideRenderer.setData(i),
              t.append(this._backSideRenderer),
              !this._medianPoint || !this._modifiedBase)
            )
              return this.addAnchors(t), void (this._renderer = t);
            var r = {
              points: [this._modifiedBase, this._medianPoint],
              width: this._model.timeScale().width(),
              height: this._source.priceScale().height(),
              color: e.median.color.value(),
              linewidth: e.median.linewidth.value(),
              linestyle: e.median.linestyle.value(),
              extendleft: e.extendLines.value(),
              extendright: !0,
              leftend: h.Normal,
              rightend: h.Normal,
            };
            if (
              (this._medianRenderer.setData(r),
              t.append(this._medianRenderer),
              this._floatPoints.length < 3)
            )
              return this.addAnchors(t), void (this._renderer = t);
            var n = {
              points: [this._floatPoints[1], this._floatPoints[2]],
              width: this._model.timeScale().width(),
              height: this._source.priceScale().height(),
              color: e.median.color.value(),
              linewidth: e.median.linewidth.value(),
              linestyle: e.median.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: h.Normal,
              rightend: h.Normal,
            };
            this._sideRenderer.setData(n), t.append(this._sideRenderer);
            for (
              var d = this._floatPoints[2]
                  .subtract(this._floatPoints[1])
                  .scaled(0.5),
                c = this._medianPoint.subtract(this._modifiedBase),
                p = 0,
                u = e.fillBackground.value(),
                _ = e.transparency.value(),
                f = 0;
              f <= 8;
              f++
            ) {
              var v = e['level' + f];
              if (v.visible.value()) {
                var g = this._medianPoint.addScaled(d, v.coeff.value()),
                  y = g.add(c),
                  w = this._medianPoint.addScaled(d, -v.coeff.value()),
                  x = w.add(c);
                if (u)
                  ((i = {}).p1 = g),
                    (i.p2 = y),
                    (i.p3 = this._medianPoint.addScaled(d, p)),
                    (i.p4 = i.p3.add(c)),
                    (i.color = v.color.value()),
                    (i.width = this._model.timeScale().width()),
                    (i.height = this._source.priceScale().height()),
                    (i.transparency = _),
                    (i.hittestOnBackground = !0),
                    (i.extendLeft = e.extendLines.value()),
                    (R = new s()).setData(i),
                    t.append(R),
                    ((i = {}).p1 = w),
                    (i.p2 = x),
                    (i.p3 = this._medianPoint.addScaled(d, -p)),
                    (i.p4 = i.p3.add(c)),
                    (i.color = v.color.value()),
                    (i.width = this._model.timeScale().width()),
                    (i.height = this._source.priceScale().height()),
                    (i.transparency = _),
                    (i.hittestOnBackground = !0),
                    (i.extendLeft = e.extendLines.value()),
                    (R = new s()).setData(i),
                    t.append(R);
                p = v.coeff.value();
                var m = {
                    points: [g, y],
                    width: this._model.timeScale().width(),
                    height: this._source.priceScale().height(),
                    color: v.color.value(),
                    linewidth: v.linewidth.value(),
                    linestyle: v.linestyle.value(),
                    extendleft: e.extendLines.value(),
                    extendright: !0,
                    leftend: h.Normal,
                    rightend: h.Normal,
                  },
                  b = new a();
                b.setData(m),
                  b.setHitTest(new o(o.MOVEPOINT, null, f)),
                  t.append(b);
                var R,
                  T = {
                    points: [w, x],
                    width: this._model.timeScale().width(),
                    height: this._source.priceScale().height(),
                    color: v.color.value(),
                    linewidth: v.linewidth.value(),
                    linestyle: v.linestyle.value(),
                    extendleft: e.extendLines.value(),
                    extendright: !0,
                    leftend: h.Normal,
                    rightend: h.Normal,
                  };
                (R = new a()).setData(T),
                  R.setHitTest(new o(o.MOVEPOINT, null, f)),
                  t.append(R);
              }
            }
            this.addAnchors(t), (this._renderer = t);
          }
        }),
        (c.prototype._calcMofifiedBase = function () {
          this._floatPoints.length > 1 &&
            (this._modifiedBase = this._floatPoints[0]
              .add(this._floatPoints[1])
              .scaled(0.5));
        }),
        inherit(p, c),
        (p.prototype._calcMofifiedBase = function () {
          if (this._floatPoints.length > 2) {
            var e = this._floatPoints[0].x,
              t = 0.5 * (this._floatPoints[0].y + this._floatPoints[1].y),
              i = new r(e, t);
            this._modifiedBase = i;
          }
        }),
        inherit(u, d),
        (u.prototype._updateRenderer = function () {
          if (
            (this._floatPoints.length > 1 &&
              (this._modifiedBase = this._floatPoints[0]
                .add(this._floatPoints[1])
                .scaled(0.5)),
            !(this._floatPoints.length < 2))
          ) {
            var e = new l();
            if (this._medianPoint && this._modifiedBase) {
              var t = this._source.properties();
              if (3 === this._floatPoints.length) {
                var i = {
                  points: [this._modifiedBase, this._floatPoints[2]],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: t.median.color.value(),
                  linewidth: t.median.linewidth.value(),
                  linestyle: t.median.linestyle.value(),
                  extendleft: !1,
                  extendright: !1,
                  leftend: h.Normal,
                  rightend: h.Normal,
                };
                this._medianRenderer.setData(i), e.append(this._medianRenderer);
              }
              var r = {
                points: [this._floatPoints[0], this._floatPoints[1]],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: t.median.color.value(),
                linewidth: t.median.linewidth.value(),
                linestyle: t.median.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: h.Normal,
                rightend: h.Normal,
              };
              if (
                (this._backSideRenderer.setData(r),
                e.append(this._backSideRenderer),
                this._floatPoints.length < 3)
              )
                return this.addAnchors(e), void (this._renderer = e);
              var n = {
                points: [this._floatPoints[1], this._floatPoints[2]],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: t.median.color.value(),
                linewidth: t.median.linewidth.value(),
                linestyle: t.median.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: h.Normal,
                rightend: h.Normal,
              };
              this._sideRenderer.setData(n), e.append(this._sideRenderer);
              var d = this._floatPoints[2]
                  .subtract(this._floatPoints[1])
                  .scaled(0.5),
                c = this._floatPoints[2].subtract(this._modifiedBase),
                p = 0,
                u = t.fillBackground.value(),
                _ = t.transparency.value(),
                f = {
                  points: [this._medianPoint, this._medianPoint.add(c)],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: t.median.color.value(),
                  linewidth: t.median.linewidth.value(),
                  linestyle: t.median.linestyle.value(),
                  extendleft: t.extendLines.value(),
                  extendright: !0,
                  leftend: h.Normal,
                  rightend: h.Normal,
                };
              this._centerRenderer.setData(f), e.append(this._centerRenderer);
              for (var v = 0; v <= 8; v++) {
                var g = t['level' + v];
                if (g.visible.value()) {
                  var y = this._medianPoint.addScaled(d, g.coeff.value()),
                    w = y.add(c),
                    x = this._medianPoint.addScaled(d, -g.coeff.value()),
                    m = x.add(c);
                  if (u)
                    ((r = {}).p1 = y),
                      (r.p2 = w),
                      (r.p3 = this._medianPoint.addScaled(d, p)),
                      (r.p4 = r.p3.add(c)),
                      (r.color = g.color.value()),
                      (r.width = this._model.timeScale().width()),
                      (r.height = this._source.priceScale().height()),
                      (r.transparency = _),
                      (r.hittestOnBackground = !0),
                      (r.extendLeft = t.extendLines.value()),
                      (T = new s()).setData(r),
                      e.append(T),
                      ((r = {}).p1 = x),
                      (r.p2 = m),
                      (r.p3 = this._medianPoint.addScaled(d, -p)),
                      (r.p4 = r.p3.add(c)),
                      (r.color = g.color.value()),
                      (r.width = this._model.timeScale().width()),
                      (r.height = this._source.priceScale().height()),
                      (r.transparency = _),
                      (r.hittestOnBackground = !0),
                      (r.extendLeft = t.extendLines.value()),
                      (T = new s()).setData(r),
                      e.append(T);
                  p = g.coeff.value();
                  var b = {
                      points: [y, w],
                      width: this._model.timeScale().width(),
                      height: this._source.priceScale().height(),
                      color: g.color.value(),
                      linewidth: g.linewidth.value(),
                      linestyle: g.linestyle.value(),
                      extendleft: t.extendLines.value(),
                      extendright: !0,
                      leftend: h.Normal,
                      rightend: h.Normal,
                    },
                    R = new a();
                  R.setData(b),
                    R.setHitTest(new o(o.MOVEPOINT, null, v)),
                    e.append(R);
                  var T,
                    S = {
                      points: [x, m],
                      width: this._model.timeScale().width(),
                      height: this._source.priceScale().height(),
                      color: g.color.value(),
                      linewidth: g.linewidth.value(),
                      linestyle: g.linestyle.value(),
                      extendleft: t.extendLines.value(),
                      extendright: !0,
                      leftend: h.Normal,
                      rightend: h.Normal,
                    };
                  (T = new a()).setData(S),
                    T.setHitTest(new o(o.MOVEPOINT, null, v)),
                    e.append(T);
                }
              }
              this.addAnchors(e), (this._renderer = e);
            } else this.addAnchors(e);
          }
        }),
        (u.prototype._updateImpl = function () {
          d.prototype._updateImpl.call(this);
        }),
        (u.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.PitchforkLinePaneView = d),
        (t.SchiffPitchforkLinePaneView = c),
        (t.SchiffPitchfork2LinePaneView = p),
        (t.InsidePitchforkLinePaneView = u);
    },
    cjIn: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'PaneRendererCachedImage', function () {
          return s;
        });
      var r = i('aO4+'),
        n = i('f6yo'),
        a = i('VdBB'),
        s = (function () {
          function e(e, t) {
            (this._cacheRect = null),
              (this._targetRect = null),
              (this._cacheProvider = e),
              (this._index = t);
          }
          return (
            (e.prototype.draw = function (e, t) {
              var i = this._cacheProvider.getCacheRects(t, this._index);
              if (null === i)
                return (this._cacheRect = null), void (this._targetRect = null);
              if (
                ((this._cacheRect = i.cacheRect),
                (this._targetRect = i.targetRect),
                0 !== this._cacheRect.width &&
                  0 !== this._cacheRect.height &&
                  0 !== this._targetRect.width &&
                  0 !== this._targetRect.height)
              ) {
                e.save(), e.setTransform(1, 0, 0, 1, 0, 0);
                var r = t.pixelRatio,
                  n = this._cacheProvider.getCacheCanvas(t);
                e.drawImage(
                  n,
                  Math.round(this._cacheRect.left * r),
                  Math.round(this._cacheRect.top * r),
                  this._cacheRect.width * r,
                  this._cacheRect.height * r,
                  Math.round(this._targetRect.left * r),
                  Math.round(this._targetRect.top * r),
                  this._targetRect.width * r,
                  this._targetRect.height * r,
                ),
                  e.restore();
              }
            }),
            (e.prototype.hitTest = function (e) {
              if (null === this._targetRect) return null;
              var t = new r.Point(this._targetRect.left, this._targetRect.top),
                i = t.add(
                  new r.Point(this._targetRect.width, this._targetRect.height),
                );
              return Object(n.pointInBox)(e, Object(r.box)(t, i))
                ? new a.HitTestResult(a.HitTestResult.REGULAR)
                : null;
            }),
            e
          );
        })();
    },
    'ckl+': function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('qgcf').TextRenderer,
        s = i('VdBB').HitTestResult,
        o = i('Zy3/').CompositeRenderer,
        l = i('l4sv').HorizontalLineRenderer,
        h = [i('//lt').PaneCursorType.VerticalResize];
      function d(e, t) {
        n.call(this, e, t),
          (this._rendererCache = {}),
          (this._labelRenderer = new a()),
          (this._lineRenderer = new l()),
          this._lineRenderer.setHitTest(new s(s.MOVEPOINT)),
          (this._renderer = null);
      }
      inherit(d, n),
        (d.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (d.prototype._updateImpl = function () {
          if (
            (n.prototype._updateImpl.call(this),
            (this._renderer = null),
            0 !== this._points.length)
          ) {
            var e = new o(),
              t = {};
            (t.width = this._model.timeScale().width()),
              (t.height = this._source.priceScale().height()),
              (t.y = this._points[0].y),
              (t.color = this._source.properties().linecolor.value()),
              (t.linewidth = this._source.properties().linewidth.value()),
              (t.linestyle = this._source.properties().linestyle.value()),
              this._lineRenderer.setData(t);
            var i = this._source.properties();
            if (
              (e.append(this._lineRenderer),
              this._source.properties().showLabel.value() &&
                1 === this._points.length)
            ) {
              var a = i.vertLabelsAlign.value(),
                s = i.horzLabelsAlign.value(),
                l = this._points[0],
                d = 0;
              'left' === s
                ? (l.x = 3)
                : 'right' === s
                ? ((l.x = this._model.timeScale().width()), (d = 3))
                : (l.x = this._model.timeScale().width() / 2);
              var c = {
                points: [l],
                text: i.text.value(),
                color: i.textcolor.value(),
                vertAlign: a,
                horzAlign: s,
                font: i.font.value(),
                offsetX: d,
                offsetY: 0,
                bold: this._source.properties().bold.value(),
                italic: this._source.properties().italic.value(),
                fontsize: this._source.properties().fontsize.value(),
                forceTextAlign: !0,
              };
              this._labelRenderer.setData(c), e.append(this._labelRenderer);
            }
            if (1 === this._points.length) {
              var p = new r(
                this._model.timeScale().width() / 2,
                this._points[0].y,
              );
              (p.data = 0),
                (p.square = !0),
                e.append(
                  this.createLineAnchor({ points: [p], pointsCursorType: h }),
                );
            }
            this._renderer = e;
          }
        }),
        (t.HorzLinePaneView = d);
    },
    'ct+2': function (e, t, i) {
      'use strict';
      i.r(t);
      var r = i('mrSG'),
        n = i('zDbI'),
        a = i('aB9a'),
        s = i('Zy3/'),
        o = i('vq8G'),
        l = i('qgcf'),
        h = i('VdBB'),
        d = i('f6yo'),
        c = i('Hr11');
      var p = (function () {
        function e() {
          this._data = null;
        }
        return (
          (e.prototype.setData = function (e) {
            this._data = e;
          }),
          (e.prototype.draw = function (e, t) {
            if (null !== this._data) {
              switch (
                (e.save(),
                (e.fillStyle = this._data.color),
                this._data.direction)
              ) {
                case 'up':
                case 'down':
                  !(function (e, t, i, r) {
                    var n = Math.max(1, Math.floor(r)) % 2 ? 0.5 : 0,
                      a = 'up' === i ? 1 : -1,
                      s = a * Math.round(12 * r),
                      o = Object(c.ceiledEven)(19.5 * r) / 2 + n,
                      l = a * Math.round(10 * r),
                      h = Object(c.ceiledEven)(10 * r) / 2 + n,
                      d = Math.round(t.x * r) + n,
                      p = Math.round(t.y * r);
                    e.beginPath(),
                      e.moveTo(d, p),
                      e.lineTo(d + o, p + s),
                      e.lineTo(d + h, p + s),
                      e.lineTo(d + h, p + s + l),
                      e.lineTo(d - h, p + s + l),
                      e.lineTo(d - h, p + s),
                      e.lineTo(d - o, p + s),
                      e.moveTo(d, p),
                      e.fill();
                  })(e, this._data.point, this._data.direction, t.pixelRatio);
                  break;
                case 'left':
                case 'right':
                  !(function (e, t, i, r) {
                    var n = Math.max(1, Math.floor(r)) % 2 ? 0.5 : 0,
                      a = 'left' === i ? 1 : -1,
                      s = a * Math.round(12 * r) + n,
                      o = Object(c.ceiledEven)(19.5 * r) / 2 + n,
                      l = a * Math.round(22 * r) + n,
                      h = Object(c.ceiledEven)(10 * r) / 2 + n,
                      d = Math.round(t.x * r) + n,
                      p = Math.round(t.y * r) + n;
                    e.beginPath(),
                      e.moveTo(d, p),
                      e.lineTo(d + s, p + o),
                      e.lineTo(d + s, p + h),
                      e.lineTo(d + l, p + h),
                      e.lineTo(d + l, p - h),
                      e.lineTo(d + s, p - h),
                      e.lineTo(d + s, p - o),
                      e.moveTo(d, p),
                      e.fill();
                  })(e, this._data.point, this._data.direction, t.pixelRatio);
              }
              e.restore();
            }
          }),
          (e.prototype.hitTest = function (e) {
            if (null === this._data) return null;
            var t, i, r, n;
            switch (this._data.direction) {
              case 'up':
                (r = (t = this._data.point.x - 9.75) + 19.5),
                  (n = (i = this._data.point.y) + 12 + 10);
                break;
              case 'down':
                (r = (t = this._data.point.x - 9.75) + 19.5),
                  (i = (n = this._data.point.y) - 12 - 10);
                break;
              case 'left':
                (r = (t = this._data.point.x) + 12 + 10),
                  (n = (i = this._data.point.y - 9.75) + 19.5);
                break;
              case 'right':
                (t = (r = this._data.point.x) - 12 - 10),
                  (n = (i = this._data.point.y - 9.75) + 19.5);
            }
            return e.x < t || e.x > r || e.y < i || e.y > n
              ? null
              : new h.HitTestResult(h.HitTestResult.MOVEPOINT);
          }),
          (e.prototype.doesIntersectWithBox = function (e) {
            return (
              null !== this._data && Object(d.pointInBox)(this._data.point, e)
            );
          }),
          e
        );
      })();
      i.d(t, 'ArrowMarkPaneView', function () {
        return u;
      });
      var u = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t._arrowMarkRenderer = new p()),
            (t._textRenderer = new l.TextRenderer()),
            (t._renderer = null),
            (t._anchorsOffset = null),
            t
          );
        }
        return (
          Object(r.__extends)(t, e),
          (t.prototype.renderer = function (e, t) {
            return this._invalidated && this._updateImpl(), this._renderer;
          }),
          (t.prototype._updateImpl = function () {
            if (
              (e.prototype._updateImpl.call(this),
              (this._renderer = null),
              1 === this._points.length)
            ) {
              var t = this._getSource(),
                i = t.properties().childs(),
                a = this._getModel();
              this._arrowMarkRenderer.setData({
                point: this._points[0],
                direction: t.direction(),
                color: i.arrowColor.value(),
              }),
                (this._renderer = new s.CompositeRenderer()),
                this._renderer.append(this._arrowMarkRenderer),
                '' !== i.text.value() &&
                  (this._textRenderer.setData(
                    Object(r.__assign)(
                      {
                        points: this._points,
                        font: n.CHART_FONT_FAMILY,
                        fontSize: i.fontsize.value(),
                        text: i.text.value(),
                        color: i.color.value(),
                      },
                      t.textAlignParams(),
                    ),
                  ),
                  this._renderer.append(this._textRenderer));
              var l = [
                this._anchorsOffset
                  ? this._points[0].add(this._anchorsOffset)
                  : this._points[0].clone(),
              ];
              this._renderer.append(
                new o.SelectionRenderer({
                  points: l,
                  bgColors: this._lineAnchorColors(l),
                  visible: this.areAnchorsVisible(),
                  barSpacing: a.timeScale().barSpacing(),
                  hittestResult: h.HitTestResult.MOVEPOINT,
                }),
              );
            }
          }),
          t
        );
      })(a.LineSourcePaneView);
    },
    dKqZ: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('GEp6').distanceToLine,
        a = i('hfHJ'),
        s = a.rotationMatrix,
        o = a.scalingMatrix,
        l = a.translationMatrix,
        h = a.transformPoint,
        d = i('aB9a').LineSourcePaneView,
        c = i('aB9a').thirdPointCursorType,
        p = i('VdBB').HitTestResult,
        u = i('Zy3/').CompositeRenderer,
        _ = i('Tmoa'),
        f = i('cPgM').ScaledPaneRenderer,
        v = i('//lt').PaneCursorType;
      function g() {
        f.call(this), (this._data = null);
      }
      function y(e, t) {
        d.call(this, e, t),
          (this._arcRenderer = new g()),
          (this._renderer = null);
      }
      inherit(g, f),
        (g.prototype.setData = function (e) {
          (this._data = e),
            (this._data.angleFrom = 0),
            (this._data.angleTo = Math.PI),
            (this._data.clockwise = !1);
        }),
        (g.prototype._drawImpl = function (e) {
          if (!(null === this._data || this._data.points.length < 2)) {
            var t = this._data.points[0],
              i = this._data.points[1];
            if (this._data.points.length < 3)
              return (
                (e.strokeStyle = this._data.color),
                (e.lineWidth = this._data.linewidth),
                e.beginPath(),
                e.moveTo(t.x, t.y),
                e.lineTo(i.x, i.y),
                void e.stroke()
              );
            var a = this._data.points[2],
              d = n(t, i, a).distance;
            if (d < 1)
              return (
                (e.strokeStyle = this._data.color),
                (e.lineWidth = this._data.linewidth),
                e.beginPath(),
                e.moveTo(t.x, t.y),
                e.lineTo(i.x, i.y),
                void e.stroke()
              );
            var c = i.subtract(t),
              p = t.add(i).scaled(0.5),
              u = new r(-c.y, c.x);
            (u = u.normalized()),
              (a = p.add(u.scaled(d))),
              (e.strokeStyle = this._data.color),
              (e.lineWidth = this._data.linewidth);
            var f = c.length(),
              v = c.x / f,
              g = c.y / f,
              y = Math.acos(v);
            g < 0 && (y = -y);
            var w = this._data.points[2],
              x = l(-p.x, -p.y);
            (w = h(x, w)),
              (x = s(-y)),
              (w = h(x, w)),
              (x = o(1, f / (2 * d))),
              (w = h(x, w)).y < 0
                ? (this._data.clockwise = !0)
                : (this._data.clockwise = !1),
              e.save(),
              e.beginPath(),
              e.translate(t.x, t.y),
              e.rotate(y);
            var m = 1 - Math.sqrt(3) / 2;
            e.scale(1, d / (f * m)),
              this._data.clockwise
                ? e.arc(
                    0.5 * f,
                    (f * Math.sqrt(3)) / 2,
                    f,
                    (-2 * Math.PI) / 3,
                    -Math.PI / 3,
                    !1,
                  )
                : e.arc(
                    0.5 * f,
                    (-f * Math.sqrt(3)) / 2,
                    f,
                    Math.PI / 3,
                    (2 * Math.PI) / 3,
                    !1,
                  ),
              e.restore(),
              e.stroke(),
              this._data.fillBackground &&
                ((e.fillStyle = _.generateColor(
                  this._data.backcolor,
                  this._data.transparency,
                )),
                e.fill());
          }
        }),
        (g.prototype.hitTest = function (e) {
          if (null === this._data || this._data.points.length < 3) return null;
          var t = this._data.points[0],
            i = this._data.points[1],
            a = this._data.points[2],
            d = n(t, i, a).distance;
          if (d < 1)
            return (d = n(t, i, e).distance) < 5 ? new p(p.MOVEPOINT) : null;
          var c = i.subtract(t),
            u = c.length(),
            _ = t.add(i).scaled(0.5),
            f = a.subtract(_);
          (f = f.normalized()), (a = _.add(f.scaled(d)));
          var v = c.x / u,
            g = c.y / u,
            y = Math.acos(v);
          g < 0 && (y = -y);
          var w = l(-t.x, -t.y);
          (e = h(w, e)), (w = s(-y)), (e = h(w, e)), (f = h(w, f));
          var x,
            m = 1 - Math.sqrt(3) / 2;
          if (
            ((w = o(1, (u * m) / d)),
            (e = h(w, e)),
            (f = h(w, f)),
            e.y * f.y < 0)
          )
            return null;
          x =
            e.y < 0
              ? new r(0.5 * u, (u * Math.sqrt(3)) / 2)
              : new r(0.5 * u, (-u * Math.sqrt(3)) / 2);
          var b = e.subtract(x).length();
          return Math.abs(b - u) <= 5 ? new p(p.MOVEPOINT) : null;
        }),
        inherit(y, d),
        (y.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (y.prototype._updateImpl = function () {
          if (
            (d.prototype._updateImpl.call(this),
            (this._renderer = null),
            0 !== this._points.length)
          ) {
            var e = {};
            (e.points = this._points),
              (e.color = this._source.properties().color.value()),
              (e.linewidth = this._source.properties().linewidth.value()),
              (e.backcolor = this._source.properties().backgroundColor.value()),
              (e.fillBackground = this._source
                .properties()
                .fillBackground.value()),
              (e.transparency = this._source.properties().transparency.value()),
              this._arcRenderer.setData(e);
            var t = new u();
            (this._renderer = t), t.append(this._arcRenderer);
            var i = [],
              a = e.points[0],
              p = new r(a.x, a.y);
            if (((p.data = 0), i.push(p), 1 !== e.points.length)) {
              var _ = e.points[1],
                f = new r(_.x, _.y);
              if (((f.data = 1), 2 !== e.points.length)) {
                i.push(f);
                var g = e.points[2],
                  y = n(a, _, g).distance,
                  w = _.subtract(a),
                  x = a.add(_).scaled(0.5),
                  m = new r(-w.y, w.x);
                (m = m.normalized()), (g = x.add(m.scaled(y)));
                var b = x.add(m.scaled(-y)),
                  R = w.length(),
                  T = w.x / R,
                  S = w.y / R,
                  P = Math.acos(T);
                S < 0 && (P = -P);
                var L = e.points[2],
                  C = l(-x.x, -x.y);
                (L = h(C, L)),
                  (C = s(-P)),
                  (L = h(C, L)),
                  (C = o(1, R / (2 * y)));
                var M =
                  (L = h(C, L)).y >= 0 ? new r(g.x, g.y) : new r(b.x, b.y);
                (M.data = 2), i.push(M);
                var I = [v.Default, v.Default, c(a, _)];
                t.append(
                  this.createLineAnchor({ points: i, pointsCursorType: I }),
                );
              } else this.addAnchors(t);
            }
          }
        }),
        (t.ArcPaneView = y);
    },
    dMkl: function (e, t, i) {
      'use strict';
      var r = i('Hr11'),
        n = i('aB9a').LineSourcePaneView,
        a = i('pJOz').TrendLineRenderer,
        s = i('VdBB').HitTestResult,
        o = i('/hKg').PaneRendererCandles,
        l = i('Zy3/').CompositeRenderer,
        h = i('a7Ha').LineEnd,
        d = i('Zp/P');
      function c(e, t) {
        n.call(this, e, t), (this._renderer = null);
      }
      inherit(c, n),
        (c.prototype._udpateImpl = function () {
          n.prototype._updateImpl.call(this), (this._renderer = null);
          var e = this;
          if (((this._segments = []), !(e._points.length < 2))) {
            this._segments = this._source
              .segments()
              .map(function (t, i) {
                var n = e._source.points();
                if (i >= e._points.length - 1) return null;
                var a = e._points[i].x,
                  s = n[i].price,
                  o = n[i + 1].price,
                  l = n[i + 1].index - n[i].index,
                  h = e._model.timeScale().barSpacing() * r.sign(l),
                  d = (o - s) / (t.bars().length - 1),
                  c = e._source.properties(),
                  p = c.candleStyle.upColor.value(),
                  u = c.candleStyle.downColor.value(),
                  _ = c.candleStyle.borderUpColor.value(),
                  f = c.candleStyle.borderDownColor.value();
                return {
                  bars: t.bars().map(function (t, i) {
                    var r = t.c >= t.o;
                    return {
                      time: a + i * h,
                      open: e.priceToCoordinate(t.o + s + i * d),
                      high: e.priceToCoordinate(t.h + s + i * d),
                      low: e.priceToCoordinate(t.l + s + i * d),
                      close: e.priceToCoordinate(t.c + s + i * d),
                      color: r ? p : u,
                      borderColor: r ? _ : f,
                      hollow: !1,
                    };
                  }),
                };
              })
              .filter(function (e) {
                return !!e;
              });
            for (var t = new l(), i = 1; i < this._points.length; i++) {
              var c = {
                  points: [this._points[i - 1], this._points[i]],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: '#808080',
                  linewidth: 1,
                  linestyle: CanvasEx.LINESTYLE_SOLID,
                  extendleft: !1,
                  extendright: !1,
                  leftend: h.Normal,
                  rightend: h.Normal,
                },
                p = new a();
              p.setData(c), p.setHitTest(new s(s.MOVEPOINT, null)), t.append(p);
            }
            var u = this._source.properties(),
              _ = u.candleStyle.drawWick.value(),
              f = u.candleStyle.drawBorder.value(),
              v = u.candleStyle.borderColor.value(),
              g = u.candleStyle.wickColor.value(),
              y = new l();
            y.setGlobalAlpha(1 - u.transparency.value() / 100);
            var w = this._model.timeScale().barSpacing();
            for (i = 0; i < this._segments.length; i++) {
              var x = {
                bars: this._segments[i].bars,
                barSpacing: w,
                wickVisible: _,
                bodyVisible: !0,
                borderVisible: f,
                borderColor: v,
                wickColor: g,
                barWidth: d.optimalBarWidth(w),
                hittest: new s(s.MOVEPOINT, null),
              };
              y.append(new o(x));
            }
            t.append(y), this.addAnchors(t), (this._renderer = t);
          }
        }),
        (c.prototype.renderer = function (e, t) {
          return this._invalidated && this._udpateImpl(), this._renderer;
        }),
        (t.GhostFeedPaneView = c);
    },
    eg8N: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('qgcf').TextRenderer,
        s = i('IjC5').RectangleRenderer,
        o = i('pJOz').TrendLineRenderer,
        l = i('Zy3/').CompositeRenderer,
        h = i('zXvd').NumericFormatter,
        d = i('a7Ha').LineEnd;
      function c(e, t) {
        n.call(this, e, t),
          (this._numericFormatter = new h()),
          (this._renderer = null);
      }
      inherit(c, n),
        (c.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (c.prototype._updateImpl = function () {
          if (
            (n.prototype._updateImpl.call(this),
            (this._renderer = null),
            !(this._source.points().length < 2) &&
              this._source.priceScale() &&
              !this._source.priceScale().isEmpty() &&
              !this._model.timeScale().isEmpty())
          ) {
            var e = this._source.points()[0],
              t = this._source.points()[1],
              i = (C = this._source.properties()).reverse && C.reverse.value();
            this._hlevels = [];
            for (
              var h = i ? e.price - t.price : t.price - e.price,
                c = i ? t.price : e.price,
                p = this._source.ownerSource().firstValue(),
                u = 1;
              u <= 7;
              u++
            ) {
              if ((x = C['hlevel' + u]).visible.value()) {
                var _ = x.coeff.value(),
                  f = x.color.value(),
                  v = c + _ * h,
                  g = this._source.priceScale().priceToCoordinate(v, p);
                this._hlevels.push({ coeff: _, color: f, y: g });
              }
            }
            this._vlevels = [];
            var y = i ? e.index - t.index : t.index - e.index,
              w = i ? t.index : e.index;
            for (u = 1; u <= 7; u++) {
              var x;
              if ((x = C['vlevel' + u]).visible.value()) {
                (_ = x.coeff.value()), (f = x.color.value());
                var m = Math.round(w + _ * y),
                  b = this._model.timeScale().indexToCoordinate(m);
                this._vlevels.push({ coeff: _, color: f, x: b });
              }
            }
            if (
              ((this._hfans = []), (this._vfans = []), C.fans.visible.value())
            )
              for (u = 1; u <= 7; u++) {
                (m = Math.round(w + C['hlevel' + u].coeff.value() * y)),
                  (v = c + C['vlevel' + u].coeff.value() * h);
                this._hfans.push(this._model.timeScale().indexToCoordinate(m)),
                  this._vfans.push(
                    this._source.priceScale().priceToCoordinate(v, p),
                  );
              }
            var R = new l();
            if (this._points.length < 2)
              return this.addAnchors(R), void (this._renderer = R);
            (e = this._points[0]), (t = this._points[1]);
            var T = Math.min(e.x, t.x),
              S = Math.min(e.y, t.y),
              P = Math.max(e.x, t.x),
              L = Math.max(e.y, t.y),
              C = this._source.properties(),
              M = this._source.properties().fillHorzBackground.value(),
              I = this._source.properties().horzTransparency.value(),
              O = this._source.properties().fillVertBackground.value(),
              D = this._source.properties().vertTransparency.value();
            for (u = 0; u < this._hlevels.length; u++) {
              if (u > 0 && M) {
                var k = this._hlevels[u - 1];
                (e = new r(T, this._hlevels[u].y)), (t = new r(P, k.y));
                ((z = {}).points = [e, t]),
                  (z.color = this._hlevels[u].color),
                  (z.linewidth = 0),
                  (z.backcolor = this._hlevels[u].color),
                  (z.fillBackground = !0),
                  (z.transparency = I),
                  (z.extendLeft = !1),
                  (z.extendRight = !1),
                  (V = new s(void 0, void 0, !0)).setData(z),
                  R.append(V);
              }
              var B = {
                points: [
                  (e = new r(T, this._hlevels[u].y)),
                  (t = new r(P, this._hlevels[u].y)),
                ],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: this._hlevels[u].color,
                linewidth: C.linewidth.value(),
                linestyle: C.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: d.Normal,
                rightend: d.Normal,
              };
              if (
                ((V = new o()).setData(B),
                R.append(V),
                C.showLeftLabels.value())
              ) {
                var N = {
                  points: [e],
                  text: this._numericFormatter.format(this._hlevels[u].coeff),
                  color: this._hlevels[u].color,
                  vertAlign: 'middle',
                  horzAlign: 'right',
                  font: C.font.value(),
                  offsetX: 5,
                  offsetY: 0,
                  fontsize: 12,
                  forceTextAlign: !0,
                };
                R.append(new a(N));
              }
              if (C.showRightLabels.value()) {
                var A = {
                  points: [t],
                  text: this._numericFormatter.format(this._hlevels[u].coeff),
                  color: this._hlevels[u].color,
                  vertAlign: 'middle',
                  horzAlign: 'left',
                  font: C.font.value(),
                  offsetX: 5,
                  offsetY: 0,
                  fontsize: 12,
                };
                R.append(new a(A));
              }
            }
            for (u = 0; u < this._vlevels.length; u++) {
              (e = new r(this._vlevels[u].x, S)),
                (t = new r(this._vlevels[u].x, L));
              if (u > 0 && O) {
                k = this._vlevels[u - 1];
                var z,
                  E = new r(k.x, S);
                ((z = {}).points = [E, t]),
                  (z.color = this._vlevels[u].color),
                  (z.linewidth = 0),
                  (z.backcolor = this._vlevels[u].color),
                  (z.fillBackground = !0),
                  (z.transparency = D),
                  (z.extendLeft = !1),
                  (z.extendRight = !1),
                  (V = new s(void 0, void 0, !0)).setData(z),
                  R.append(V);
              }
              var V;
              B = {
                points: [e, t],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: this._vlevels[u].color,
                linewidth: C.linewidth.value(),
                linestyle: C.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: d.Normal,
                rightend: d.Normal,
              };
              if (
                ((V = new o()).setData(B), R.append(V), C.showTopLabels.value())
              ) {
                var j = {
                  points: [e],
                  text: this._numericFormatter.format(this._vlevels[u].coeff),
                  color: this._vlevels[u].color,
                  vertAlign: 'bottom',
                  horzAlign: 'center',
                  font: C.font.value(),
                  offsetX: 0,
                  offsetY: 3,
                  fontsize: 12,
                };
                R.append(new a(j));
              }
              if (C.showBottomLabels.value()) {
                var H = {
                  points: [t],
                  text: this._numericFormatter.format(this._vlevels[u].coeff),
                  color: this._vlevels[u].color,
                  vertAlign: 'top',
                  horzAlign: 'center',
                  font: C.font.value(),
                  offsetX: 0,
                  offsetY: 5,
                  fontsize: 12,
                };
                R.append(new a(H));
              }
            }
            var W = this;
            F(R, this._hfans, !0),
              F(R, this._vfans, !1),
              this.addAnchors(R),
              (this._renderer = R);
          }
          function F(e, t, i) {
            var n = new r(T, S),
              a = new r(P, S),
              s = new r(T, L),
              l = new r(P, L),
              h = {
                width: W._model.timeScale().width(),
                height: W._source.priceScale().height(),
                color: C.fans.color.value(),
                linewidth: C.linewidth.value(),
                linestyle: C.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: d.Normal,
                rightend: d.Normal,
              };
            function c(t) {
              var i = new o();
              i.setData(Object.assign({}, h, { points: t })), e.append(i);
            }
            for (var p = 0; p < t.length; ++p) {
              var u = i ? L : t[p],
                _ = i ? S : t[p],
                f = i ? t[p] : T,
                v = i ? t[p] : P,
                g = new r(v, u),
                y = new r(f, u),
                w = new r(v, _),
                x = new r(f, _);
              c([s, w]), c([l, x]), c([n, g]), c([a, y]);
            }
          }
        }),
        (t.GannSquarePaneView = c);
    },
    gr7S: function (e, t, i) {
      'use strict';
      var r = i('aB9a').LineSourcePaneView,
        n = i('wacn').DisjointChannelRenderer,
        a = i('pJOz').TrendLineRenderer,
        s = i('qgcf').TextRenderer,
        o = i('Zy3/').CompositeRenderer;
      function l(e, t) {
        r.call(this, e, t),
          (this._label1 = null),
          (this._label2 = null),
          (this._trendLineRendererPoints12 = new a()),
          (this._trendLineRendererPoints43 = new a()),
          (this._disjointChannelRenderer = new n()),
          (this._p1LabelRenderer = new s()),
          (this._p2LabelRenderer = new s()),
          (this._p3LabelRenderer = new s()),
          (this._p4LabelRenderer = new s()),
          (this._renderer = null);
      }
      inherit(l, r),
        (l.prototype._updateImpl = function () {
          if (
            (r.prototype._updateImpl.call(this),
            (this._renderer = null),
            (this._label1 = null),
            (this._label2 = null),
            !(this._source.points().length < 2) && this._source.priceScale())
          ) {
            var e = this._source.points()[0],
              t = this._source.points()[1],
              i = this._source.ownerSource().firstValue();
            if (
              ((this._price1 = this._source
                .priceScale()
                .formatPrice(e.price, i)),
              (this._price2 = this._source
                .priceScale()
                .formatPrice(t.price, i)),
              3 === this._source.points().length)
            ) {
              var n = this._source.points()[2];
              this._price3 = this._source.priceScale().formatPrice(n.price, i);
            }
            if (!(this._points.length < 2)) {
              var a,
                s = new o(),
                l =
                  ((e = this._points[0]),
                  (t = this._points[1]),
                  this._source.properties()),
                h = this._model,
                d = this._source;
              if (
                3 === this._points.length &&
                (((n = this._points[2]).x = t.x),
                ((a = e.clone()).y = n.y),
                (a.data = 3),
                l.fillBackground.value())
              ) {
                var c = h.timeScale().width(),
                  p = d.priceScale().height(),
                  u = l.extendLeft.value(),
                  _ = l.extendRight.value();
                this._disjointChannelRenderer.setData({
                  width: c,
                  height: p,
                  extendleft: u,
                  extendright: _,
                  points: [e, t, n, a],
                  backcolor: l.backgroundColor.value(),
                  transparency: l.transparency.value(),
                  hittestOnBackground: TradingView.isMobile.any(),
                }),
                  s.append(this._disjointChannelRenderer);
              }
              var f = function (e, t) {
                return {
                  points: [e, t],
                  width: h.timeScale().width(),
                  height: d.priceScale().height(),
                  color: l.linecolor.value(),
                  linewidth: l.linewidth.value(),
                  linestyle: l.linestyle.value(),
                  extendleft: l.extendLeft.value(),
                  extendright: l.extendRight.value(),
                  leftend: l.leftEnd.value(),
                  rightend: l.rightEnd.value(),
                };
              };
              if (
                (this._trendLineRendererPoints12.setData(f(e, t)),
                s.append(this._trendLineRendererPoints12),
                2 === this._points.length)
              )
                return this.addAnchors(s), void (this._renderer = s);
              var v = this,
                g = function (e, t, i, r, n, a) {
                  if (v._source.properties().showPrices.value()) {
                    var o = {
                      points: [i],
                      text: n,
                      color: v._source.properties().textcolor.value(),
                      horzAlign: i.x > r.x ? 'left' : 'right',
                      vertAlign: 'middle',
                      font: v._source.properties().font.value(),
                      offsetX: 6,
                      offsetY: 0,
                      boxPadding: 0,
                      bold: v._source.properties().bold.value(),
                      italic: v._source.properties().italic.value(),
                      fontsize: v._source.properties().fontsize.value(),
                      forceTextAlign: !0,
                    };
                    e.setData(o), s.append(e);
                    o = {
                      points: [r],
                      text: a,
                      color: v._source.properties().textcolor.value(),
                      horzAlign: i.x < r.x ? 'left' : 'right',
                      vertAlign: 'middle',
                      font: v._source.properties().font.value(),
                      offsetX: 6,
                      offsetY: 0,
                      boxPadding: 0,
                      bold: v._source.properties().bold.value(),
                      italic: v._source.properties().italic.value(),
                      fontsize: v._source.properties().fontsize.value(),
                      forceTextAlign: !0,
                    };
                    t.setData(o), s.append(t);
                  }
                };
              g(
                this._p1LabelRenderer,
                this._p2LabelRenderer,
                e,
                t,
                this._price1,
                this._price2,
              ),
                this._trendLineRendererPoints43.setData(f(a, n)),
                s.append(this._trendLineRendererPoints43),
                g(
                  this._p3LabelRenderer,
                  this._p4LabelRenderer,
                  n,
                  a,
                  this._price3,
                  this._price3,
                );
              var y = [e, t, n, a];
              this._model.lineBeingCreated() === this._source && y.pop(),
                s.append(this.createLineAnchor({ points: y })),
                (this._renderer = s);
            }
          }
        }),
        (l.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.FlatBottomPaneView = l);
    },
    isd9: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'ArcWedgeRenderer', function () {
          return s;
        });
      var r = i('mrSG'),
        n = i('VdBB'),
        a = i('Tmoa'),
        s = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._data = null),
              (t._hitTest = new n.HitTestResult(n.HitTestResult.MOVEPOINT)),
              (t._backHitTest = new n.HitTestResult(
                n.HitTestResult.MOVEPOINT_BACKGROUND,
              )),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.setData = function (e) {
              this._data = e;
            }),
            (t.prototype.setHitTest = function (e) {
              this._hitTest = e;
            }),
            (t.prototype.hitTest = function (e) {
              if (null === this._data) return null;
              var t = e.subtract(this._data.center),
                i = t.length();
              if (Math.abs(i - this._data.radius) <= 4) {
                var r = e.subtract(this._data.p1).length(),
                  n = e.subtract(this._data.p2).length();
                if (
                  Math.max(r, n) <=
                  this._data.p1.subtract(this._data.p2).length()
                )
                  return this._hitTest;
              }
              if (this._data.fillBackground && i <= this._data.radius) {
                var a = this._data.p1.subtract(this._data.center).normalized(),
                  s = this._data.p2.subtract(this._data.center).normalized(),
                  o = t.normalized(),
                  l = a.dotProduct(s),
                  h = o.dotProduct(a),
                  d = o.dotProduct(s);
                if (h >= l && d >= l) return this._backHitTest;
              }
              return null;
            }),
            (t.prototype._drawImpl = function (e) {
              if (
                null !== this._data &&
                ((e.strokeStyle = this._data.color),
                (e.lineWidth = this._data.linewidth),
                e.beginPath(),
                e.arc(
                  this._data.center.x,
                  this._data.center.y,
                  this._data.radius,
                  this._data.edge1,
                  this._data.edge2,
                  !0,
                ),
                e.stroke(),
                this._data.fillBackground)
              ) {
                if (
                  (e.arc(
                    this._data.center.x,
                    this._data.center.y,
                    this._data.prevRadius,
                    this._data.edge2,
                    this._data.edge1,
                    !1,
                  ),
                  this._data.gradient)
                ) {
                  var t = e.createRadialGradient(
                    this._data.center.x,
                    this._data.center.y,
                    this._data.prevRadius,
                    this._data.center.x,
                    this._data.center.y,
                    this._data.radius,
                  );
                  t.addColorStop(
                    0,
                    Object(a.generateColor)(
                      this._data.color1,
                      this._data.transparency,
                    ),
                  ),
                    t.addColorStop(
                      1,
                      Object(a.generateColor)(
                        this._data.color2,
                        this._data.transparency,
                      ),
                    ),
                    (e.fillStyle = t);
                } else
                  e.fillStyle = Object(a.generateColor)(
                    this._data.color,
                    this._data.transparency,
                    !0,
                  );
                e.fill();
              }
            }),
            t
          );
        })(i('cPgM').ScaledPaneRenderer);
    },
    jlk4: function (e, t, i) {
      'use strict';
      var r = i('isd9').ArcWedgeRenderer,
        n = i('1SUO').FibWedgePaneView,
        a = i('pJOz').TrendLineRenderer,
        s = i('Zy3/').CompositeRenderer,
        o = i('a7Ha').LineEnd;
      function l(e, t) {
        n.call(this, e, t),
          (this._baseTrendRenderer = new a()),
          (this._edgeTrendRenderer = new a()),
          (this._arcWedgeRenderer = new r());
      }
      inherit(l, n),
        (l.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (l.prototype._updateRenderer = function () {
          if (!(this._points.length < 2)) {
            var e = new s(),
              t = this._source.properties(),
              i = this._points,
              r = i[0],
              n = i[1],
              a = {
                points: [r, n],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: t.trendline.color.value(),
                linewidth: t.linewidth.value(),
                linestyle: t.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: o.Normal,
                rightend: o.Normal,
              };
            if (
              (this._baseTrendRenderer.setData(a),
              e.append(this._baseTrendRenderer),
              this._points.length < 3)
            )
              return this.addAnchors(e), void (this._renderer = e);
            var l = i[2],
              h = l.data,
              d = n.subtract(r).length(),
              c = l.subtract(r).normalized();
            ((l = r.add(c.scaled(d))).data = h),
              (a = {
                points: [r, l],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: t.trendline.color.value(),
                linewidth: t.linewidth.value(),
                linestyle: t.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: o.Normal,
                rightend: o.Normal,
              }),
              this._edgeTrendRenderer.setData(a),
              e.append(this._edgeTrendRenderer);
            var p = this._levels[0],
              u = {};
            (u.center = this._points[0]),
              (u.radius = p.radius),
              (u.prevRadius = 0),
              (u.edge = this._edge),
              (u.color = t.trendline.color.value()),
              (u.color1 = t.color1.value()),
              (u.color2 = t.color2.value()),
              (u.linewidth = t.linewidth.value()),
              (u.edge1 = this._edge1),
              (u.edge2 = this._edge2),
              (u.p1 = p.p1),
              (u.p2 = p.p2),
              (u.fillBackground = t.fillBackground.value()),
              (u.transparency = t.transparency.value()),
              (u.gradient = !0),
              this._arcWedgeRenderer.setData(u),
              e.append(this._arcWedgeRenderer),
              this.addAnchors(e),
              (this._renderer = e);
          }
        }),
        (t.ProjectionLinePaneView = l);
    },
    l5Au: function (e, t, i) {
      'use strict';
      var r = i('aB9a').LineSourcePaneView,
        n = i('2trc').ChannelRenderer,
        a = i('pJOz').TrendLineRenderer,
        s = i('VdBB').HitTestResult,
        o = i('Zy3/').CompositeRenderer,
        l = i('a7Ha').LineEnd;
      function h(e, t) {
        r.call(this, e, t),
          (this._medianRenderer = new a()),
          (this._sideRenderer = new a()),
          (this._renderer = null);
      }
      inherit(h, r),
        (h.prototype._updateImpl = function () {
          if (
            (r.prototype._updateImpl.call(this),
            (this._renderer = null),
            0 !== this._floatPoints.length &&
              (3 === this._floatPoints.length
                ? ((this._medianPoint = this._floatPoints[1]
                    .add(this._floatPoints[2])
                    .scaled(0.5)),
                  (this._medianPoint.data = 3))
                : 2 === this._floatPoints.length
                ? ((this._medianPoint = this._floatPoints[1]),
                  (this._medianPoint.data = 3))
                : ((this._medianPoint = this._floatPoints[0]),
                  (this._medianPoint.data = 3)),
              !(this._floatPoints.length < 2) && this._medianPoint))
          ) {
            var e = new o(),
              t = {
                points: [this._floatPoints[0], this._medianPoint],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: this._source.properties().median.color.value(),
                linewidth: this._source.properties().median.linewidth.value(),
                linestyle: this._source.properties().median.linestyle.value(),
                extendleft: !1,
                extendright: !0,
                leftend: l.Normal,
                rightend: l.Normal,
              };
            if (
              (this._medianRenderer.setData(t),
              e.append(this._medianRenderer),
              this._floatPoints.length < 3)
            )
              return this.addAnchors(e), void (this._renderer = e);
            var i = {
              points: [this._floatPoints[1], this._floatPoints[2]],
              width: this._model.timeScale().width(),
              height: this._source.priceScale().height(),
              color: this._source.properties().median.color.value(),
              linewidth: this._source.properties().median.linewidth.value(),
              linestyle: this._source.properties().median.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: l.Normal,
              rightend: l.Normal,
            };
            this._sideRenderer.setData(i), e.append(this._sideRenderer);
            for (
              var h = 0,
                d = this._floatPoints[2]
                  .subtract(this._floatPoints[1])
                  .scaled(0.5),
                c = this._source.properties().fillBackground.value(),
                p = this._source.properties().transparency.value(),
                u = 0;
              u <= 8;
              u++
            ) {
              var _ = 'level' + u,
                f = this._source.properties()[_];
              if (f.visible.value()) {
                var v,
                  g = this._medianPoint.addScaled(d, f.coeff.value()),
                  y = this._medianPoint.addScaled(d, -f.coeff.value());
                if (c)
                  ((v = {}).width = this._model.timeScale().width()),
                    (v.height = this._source.priceScale().height()),
                    (v.p1 = this._floatPoints[0]),
                    (v.p2 = g),
                    (v.p3 = this._floatPoints[0]),
                    (v.p4 = this._medianPoint.addScaled(d, h)),
                    (v.color = f.color.value()),
                    (v.transparency = p),
                    (v.hittestOnBackground = !0),
                    (x = new n()).setData(v),
                    e.append(x),
                    ((v = {}).width = this._model.timeScale().width()),
                    (v.height = this._source.priceScale().height()),
                    (v.p1 = this._floatPoints[0]),
                    (v.p2 = y),
                    (v.p3 = this._floatPoints[0]),
                    (v.p4 = this._medianPoint.addScaled(d, -h)),
                    (v.color = f.color.value()),
                    (v.transparency = p),
                    (v.hittestOnBackground = !0),
                    (x = new n()).setData(v),
                    e.append(x);
                h = f.coeff.value();
                var w = {
                  points: [this._floatPoints[0], g],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: f.color.value(),
                  linewidth: f.linewidth.value(),
                  linestyle: f.linestyle.value(),
                  extendleft: !1,
                  extendright: !0,
                  leftend: l.Normal,
                  rightend: l.Normal,
                };
                (x = new a()).setData(w),
                  x.setHitTest(new s(s.MOVEPOINT, null, u)),
                  e.append(x);
                var x,
                  m = {
                    points: [this._floatPoints[0], y],
                    width: this._model.timeScale().width(),
                    height: this._source.priceScale().height(),
                    color: f.color.value(),
                    linewidth: f.linewidth.value(),
                    linestyle: f.linestyle.value(),
                    extendleft: !1,
                    extendright: !0,
                    leftend: l.Normal,
                    rightend: l.Normal,
                  };
                (x = new a()).setData(m),
                  x.setHitTest(new s(s.MOVEPOINT, null, u)),
                  e.append(x);
              }
            }
            this.addAnchors(e), (this._renderer = e);
          }
        }),
        (h.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.PitchfanLinePaneView = h);
    },
    lZ9F: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('GEp6').distanceToLine,
        a = i('aB9a').LineSourcePaneView,
        s = i('aB9a').thirdPointCursorType,
        o = i('pJOz').TrendLineRenderer,
        l = i('BCbF').PolygonRenderer,
        h = i('Zy3/').CompositeRenderer,
        d = i('a7Ha').LineEnd,
        c = i('//lt').PaneCursorType;
      function p(e, t) {
        a.call(this, e, t),
          (this._poligonRenderer = new l()),
          (this._renderer = null);
      }
      inherit(p, a),
        (p.prototype._updateImpl = function () {
          if (
            (a.prototype._updateImpl.call(this),
            (this._renderer = null),
            (this._distance = 0),
            3 === this._points.length &&
              (this._distance = n(
                this._points[0],
                this._points[1],
                this._points[2],
              ).distance),
            0 !== this._points.length)
          ) {
            var e,
              t,
              i,
              l,
              p = new h(),
              u = this._source.properties(),
              _ = this._points[0],
              f = this._points[1];
            if (2 === this._points.length) {
              ((g = {}).points = this._points),
                (g.floatPoints = this._floatPoints),
                (g.width = this._model.timeScale().width()),
                (g.height = this._source.priceScale().height()),
                (g.color = u.color.value()),
                (g.linewidth = 1),
                (g.linestyle = CanvasEx.LINESTYLE_SOLID),
                (g.extendleft = !1),
                (g.extendright = !1),
                (g.leftend = d.Normal),
                (g.rightend = d.Normal);
              var v = new o();
              v.setData(g), p.append(v);
            } else if (3 === this._points.length) {
              var g,
                y = f.subtract(_),
                w = new r(y.y, -y.x).normalized().scaled(this._distance),
                x = w.scaled(-1);
              (e = _.add(w)),
                (t = f.add(w)),
                (i = _.add(x)),
                (l = f.add(x)),
                ((g = {}).points = [e, t, l, i]),
                (g.color = u.color.value()),
                (g.linewidth = this._source.properties().linewidth.value()),
                (g.linestyle = CanvasEx.LINESTYLE_SOLID),
                (g.filled = !0),
                (g.backcolor = u.backgroundColor.value()),
                (g.fillBackground = u.fillBackground.value()),
                (g.transparency = u.transparency.value()),
                this._poligonRenderer.setData(g),
                p.append(this._poligonRenderer);
            }
            var m = [];
            m.push(_), this._points.length >= 2 && m.push(f);
            var b = [c.Default, c.Default];
            if (3 === this._points.length) {
              (e.data = 2),
                (i.data = 2),
                (t.data = 2),
                (l.data = 2),
                m.push(e, i, t, l);
              var R = s(_, f);
              b.push(R, R, R, R);
            }
            p.append(this.createLineAnchor({ points: m, pointsCursorType: b })),
              (this._renderer = p);
          }
        }),
        (p.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.RotatedRectanglePaneView = p);
    },
    mJB8: function (e, t, i) {
      e.exports = i.p + '4fafff07d8914dc11f6d335f606ff47c.png';
    },
    mjK7: function (e, t, i) {
      'use strict';
      var r = i('6MfG').Pattern5PaneView;
      function n(e, t) {
        r.call(this, e, t);
      }
      inherit(n, r),
        (n.prototype._updateBaseData = function () {
          var e, t, i, r, n;
          this._source.points().length >= 3 &&
            ((e = this._source.points()[0]),
            (t = this._source.points()[1]),
            (i = this._source.points()[2]),
            (this._ABRetracement =
              Math.round(
                1e3 * Math.abs((i.price - t.price) / (t.price - e.price)),
              ) / 1e3)),
            this._source.points().length >= 4 &&
              ((r = this._source.points()[3]),
              (this._BCRetracement =
                Math.round(
                  1e3 * Math.abs((r.price - e.price) / (t.price - e.price)),
                ) / 1e3)),
            this._source.points().length >= 5 &&
              ((n = this._source.points()[4]),
              (this._CDRetracement =
                Math.round(
                  1e3 * Math.abs((n.price - r.price) / (r.price - i.price)),
                ) / 1e3),
              (this._XDRetracement =
                Math.round(
                  1e3 * Math.abs((n.price - r.price) / (e.price - r.price)),
                ) / 1e3));
        }),
        (t.CypherPaneView = n);
    },
    mr3a: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'TextPaneView', function () {
          return f;
        });
      var r = i('mrSG'),
        n = i('Eyy1'),
        a = i('aO4+'),
        s = i('zDbI'),
        o = i('//lt'),
        l = i('qgcf'),
        h = i('Zy3/'),
        d = i('vq8G'),
        c = i('TTFo'),
        p = i('VdBB'),
        u = i('aB9a'),
        _ = [o.PaneCursorType.HorizontalResize],
        f = (function (e) {
          function t(t, i, r, n, a, s, o) {
            var h = e.call(this, t, i) || this;
            return (
              (h._textRenderer = new l.TextRenderer()),
              (h._noSelection = !1),
              (h._renderer = null),
              (h._offsetX = r),
              (h._offsetY = n),
              (h._vertAlign = a),
              (h._horzAlign = s),
              (h._forceTextAlign = Boolean(o)),
              (h._noSelection = !1),
              (h._renderer = null),
              h
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.renderer = function (e, t) {
              return this._invalidated && this._updateImpl(), this._renderer;
            }),
            (t.prototype.disableSelection = function () {
              this._noSelection = !0;
            }),
            (t.prototype.isEditMode = function () {
              return !this._getModel().readOnly();
            }),
            (t.prototype._updateImpl = function () {
              e.prototype._updateImpl.call(this), (this._renderer = null);
              var t = this._getSource(),
                i = t.priceScale();
              if (i && !i.isEmpty()) {
                var r = t.properties().childs(),
                  o = this._getModel(),
                  l = {
                    text: r.text.value(),
                    color: r.color.value(),
                    fontSize: r.fontsize.value(),
                    boxPadding: r.fontsize.value() / 6,
                    font: s.CHART_FONT_FAMILY,
                    vertAlign: this._vertAlign || 'top',
                    horzAlign: this._horzAlign || 'left',
                    offsetX: this._offsetX || 0,
                    offsetY: this._offsetY || 0,
                    forceTextAlign: this._forceTextAlign,
                  };
                if (
                  ((l.points = t.isFixed() ? t.fixedPoints() : this._points),
                  r.fillBackground &&
                    r.fillBackground.value() &&
                    (l.backgroundColor = r.backgroundColor.value()),
                  r.drawBorder &&
                    r.drawBorder.value() &&
                    (l.borderColor = r.borderColor.value()),
                  r.wordWrap &&
                    r.wordWrap.value() &&
                    (l.wordWrapWidth = r.wordWrapWidth.value()),
                  (l.bold = r.bold && r.bold.value()),
                  (l.italic = r.italic && r.italic.value()),
                  (l.highlightBorder = o.selection().isSelected(t)),
                  !t.isFixed() && r.fixedSize && !r.fixedSize.value())
                ) {
                  l.scaleX = o.timeScale().barSpacing() / t.barSpacing();
                  var u = Object(n.ensureNotNull)(i.priceRange()),
                    f = i.height() / u.length();
                  t.isPriceDencityLog() &&
                    !i.isLog() &&
                    (f =
                      i.height() /
                      (Object(c.toLog)(u.maxValue()) -
                        Object(c.toLog)(u.minValue()))),
                    !t.isPriceDencityLog() &&
                      i.isLog() &&
                      (f =
                        i.height() /
                        (Object(c.fromLog)(u.maxValue()) -
                          Object(c.fromLog)(u.minValue())));
                  var v = t.priceDencity();
                  void 0 !== v && (l.scaleY = f / v),
                    (void 0 === v || void 0 === l.scaleY || l.scaleY <= 0) &&
                      delete l.scaleY;
                }
                if (
                  (this._textRenderer.setData(l),
                  1 === l.points.length && !this._noSelection)
                ) {
                  var g = new h.CompositeRenderer();
                  g.append(this._textRenderer);
                  var y = l.points[0].clone(),
                    w = this._textRenderer.measure(),
                    x = w.width,
                    m = w.height;
                  if (l.wordWrapWidth) {
                    var b = new a.Point(y.x + x, y.y + m / 2);
                    (b.data = 0),
                      g.append(
                        this.createLineAnchor({
                          points: [b],
                          pointsCursorType: _,
                        }),
                      );
                  }
                  var R = new a.Point(y.x + x / 2, y.y + m);
                  return (
                    (R.data = 0),
                    g.append(
                      new d.SelectionRenderer({
                        points: [R],
                        bgColors: this._lineAnchorColors([R]),
                        visible: this.areAnchorsVisible(),
                        hittestResult: p.HitTestResult.MOVEPOINT,
                        barSpacing: o.timeScale().barSpacing(),
                      }),
                    ),
                    void (this._renderer = g)
                  );
                }
                this._renderer = this._textRenderer;
              }
            }),
            t
          );
        })(u.LineSourcePaneView);
    },
    'obU/': function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('GEp6').distanceToLine,
        a = i('hfHJ'),
        s = a.rotationMatrix,
        o = a.scalingMatrix,
        l = a.translationMatrix,
        h = a.transformPoint,
        d = i('aB9a').LineSourcePaneView,
        c = i('VdBB').HitTestResult,
        p = i('Zy3/').CompositeRenderer,
        u = i('Tmoa'),
        _ = i('aB9a').thirdPointCursorType,
        f = i('//lt').PaneCursorType,
        v = i('cPgM').ScaledPaneRenderer;
      function g() {
        v.call(this), (this._data = null);
      }
      function y(e, t) {
        d.call(this, e, t),
          (this._ellipseRenderer = new g()),
          (this._renderer = null);
      }
      inherit(g, v),
        (g.prototype.setData = function (e) {
          (this._data = e),
            (this._data.angleFrom = 0),
            (this._data.angleTo = 2 * Math.PI),
            (this._data.clockwise = !1);
        }),
        (g.prototype._drawImpl = function (e) {
          if (!(null === this._data || this._data.points.length < 2)) {
            var t = this._data.points[0],
              i = this._data.points[1];
            if (this._data.points.length < 3)
              return (
                (e.strokeStyle = this._data.color),
                (e.lineWidth = this._data.linewidth),
                e.beginPath(),
                e.moveTo(t.x, t.y),
                e.lineTo(i.x, i.y),
                void e.stroke()
              );
            var a = this._data.points[2],
              d = n(t, i, a).distance;
            if (d < 1)
              return (
                (e.strokeStyle = this._data.color),
                (e.lineWidth = this._data.linewidth),
                e.beginPath(),
                e.moveTo(t.x, t.y),
                e.lineTo(i.x, i.y),
                void e.stroke()
              );
            var c = i.subtract(t),
              p = t.add(i).scaled(0.5),
              _ = new r(-c.y, c.x);
            (_ = _.normalized()),
              (a = p.add(_.scaled(d))),
              (e.strokeStyle = this._data.color),
              (e.lineWidth = this._data.linewidth);
            var f = c.length(),
              v = c.x / f,
              g = c.y / f,
              y = Math.acos(v);
            g < 0 && (y = -y);
            var w = this._data.points[2],
              x = l(-p.x, -p.y);
            (w = h(x, w)),
              (x = s(-y)),
              (w = h(x, w)),
              (x = o(1, f / (2 * d))),
              (w = h(x, w)).y < 0
                ? (this._data.clockwise = !0)
                : (this._data.clockwise = !1),
              e.save(),
              e.beginPath(),
              e.translate(p.x, p.y),
              e.rotate(y),
              e.scale(1, (2 * d) / f),
              e.arc(
                0,
                0,
                0.5 * f,
                this._data.angleFrom,
                this._data.angleTo,
                this._data.clockwise,
              ),
              e.restore(),
              e.stroke(),
              this._data.fillBackground &&
                ((e.fillStyle = u.generateColor(
                  this._data.backcolor,
                  this._data.transparency,
                )),
                e.fill());
          }
        }),
        (g.prototype._additionalPointTest = function (e, t) {
          return !0;
        }),
        (g.prototype.hitTest = function (e) {
          if (null === this._data || this._data.points.length < 3) return null;
          var t = this._data.points[0],
            i = this._data.points[1],
            a = this._data.points[2],
            d = n(t, i, a).distance,
            p = i.subtract(t),
            u = t.add(i).scaled(0.5),
            _ = new r(-p.y, p.x);
          (_ = _.normalized()), (a = u.add(_.scaled(d)));
          var f = p.length(),
            v = p.x / f,
            g = p.y / f,
            y = Math.acos(v);
          g < 0 && (y = -y);
          var w = l(-u.x, -u.y);
          e = h(w, e);
          var x = h(w, this._data.points[2]);
          (w = s(-y)),
            (e = h(w, e)),
            (x = h(w, x)),
            (w = o(1, f / (2 * d))),
            (e = h(w, e)),
            (x = h(w, x));
          var m = e.length();
          return this._additionalPointTest(e, x)
            ? Math.abs(m - 0.5 * f) <= 3
              ? new c(c.MOVEPOINT)
              : this._data.fillBackground &&
                !this._data.noHitTestOnBackground &&
                m <= 0.5 * f
              ? new c(c.MOVEPOINT_BACKGROUND)
              : null
            : null;
        }),
        inherit(y, d),
        (y.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (y.prototype._updateImpl = function () {
          if (
            (d.prototype._updateImpl.call(this),
            (this._renderer = null),
            !(this._points.length < 2))
          ) {
            var e = {};
            (e.points = this._points),
              (e.color = this._source.properties().color.value()),
              (e.linewidth = this._source.properties().linewidth.value()),
              (e.backcolor = this._source.properties().backgroundColor.value()),
              (e.fillBackground = this._source
                .properties()
                .fillBackground.value()),
              (e.transparency = this._source.properties().transparency.value()),
              this._ellipseRenderer.setData(e);
            var t = new p();
            t.append(this._ellipseRenderer);
            var i = e.points[0],
              a = e.points[1];
            if (2 === this._points.length)
              return this.addAnchors(t), void (this._renderer = t);
            var s = e.points[2],
              o = n(i, a, s).distance,
              l = a.subtract(i),
              h = i.add(a).scaled(0.5),
              c = new r(-l.y, l.x);
            (c = c.normalized()), (s = h.add(c.scaled(o)));
            var u = h.add(c.scaled(-o)),
              v = new r(i.x, i.y);
            v.data = 0;
            var g = new r(a.x, a.y);
            g.data = 1;
            var y = new r(s.x, s.y);
            y.data = 2;
            var w = new r(u.x, u.y);
            w.data = 3;
            var x = _(v, g),
              m = [f.Default, f.Default, x, x];
            t.append(
              this.createLineAnchor({
                points: [v, g, y, w],
                pointsCursorType: m,
              }),
            ),
              (this._renderer = t);
          }
        }),
        (t.EllipsePaneView = y);
    },
    ocVb: function (e, t, i) {
      'use strict';
      var r = i('Eyy1').ensureNotNull,
        n = i('aO4+').Point,
        a = i('aB9a').LineSourcePaneView,
        s = i('cjIn').PaneRendererCachedImage,
        o = i('Zy3/').CompositeRenderer,
        l = i('GH0z').PercentageFormatter,
        h = i('zXvd').NumericFormatter,
        d = i('nda6').TimeSpanFormatter,
        c = i('5C6T').PipFormatter,
        p = i('vq8G').SelectionRenderer,
        u = i('pJOz').TrendLineRenderer,
        _ = i('qgcf').TextRenderer,
        f = i('8xAY').LabelSettings,
        v = i('zDbI').CHART_FONT_FAMILY,
        g = i('VdBB').HitTestResult,
        y = i('FVHe').TrendLineStatsCache,
        w = i('c44N').areEqualPaneRenderParams,
        x = i('5/lF').iconsContainer,
        m = i('Ialn'),
        b = m.forceLTRStr,
        R = m.startWithLTR;
      function T(e, t) {
        a.call(this, e, t),
          (this._label = null),
          (this._rendererCache = {}),
          (this._cacheInvalidated = !0),
          (this._percentageFormatter = new l()),
          (this._numericFormatter = new h()),
          (this._pipFormatter = null),
          (this._lastSymbolInfo = null),
          (this._trendRenderer = new u()),
          (this._labelRenderer = new _()),
          (this._renderer = null),
          (this._cache = null),
          (this._cacheDrawParams = null),
          x.onAllIconsReady().subscribe(this, function () {
            this._cache && (this._cache.destroy(), (this._cache = null)),
              t.lightUpdate();
          });
      }
      inherit(T, a),
        (T.prototype.update = function () {
          a.prototype.update.call(this), (this._cacheInvalidated = !0);
        }),
        (T.prototype.getCacheCanvas = function (e) {
          return this._createCacheIfRequired(e), r(this._cache).canvas();
        }),
        (T.prototype.getCacheRects = function (e, t) {
          this._createCacheIfRequired(e);
          var i = this._source.properties().statsPosition.value(),
            r = this._source.getPointByPosition(
              i,
              this._points[0],
              this._middlePoint,
              this._points[1],
            ),
            n = {
              left: 0,
              top: this._cache.topByRow(this._statCache.rowIndex),
              width: this._cache.rowWidth(this._statCache.rowIndex),
              height: this._cache.rowHeight(this._statCache.rowIndex),
            },
            a = {
              left: Math.floor(r.x),
              top: Math.floor(r.y),
              width: n.width,
              height: n.height,
            };
          return (
            (a.left += f.paddingLeftRight),
            (this._points[1].y < this._points[0].y &&
              this._points[1].x < this._points[0].x) ||
            (this._points[1].y > this._points[0].y &&
              this._points[1].x > this._points[0].x)
              ? (a.top -= f.paddingLeftRight + a.height)
              : (a.top += f.paddingLeftRight),
            { cacheRect: n, targetRect: a }
          );
        }),
        (T.prototype._createCacheIfRequired = function (e) {
          (null != this._cache &&
            null != this._cacheDrawParams &&
            w(e, this._cacheDrawParams)) ||
            (this._cache && this._cache.destroy(),
            (this._cache = new y(e)),
            (this._statCache = this._cache.updateSource(
              this._source,
              function () {
                return this._statLabelData();
              }.bind(this),
            )),
            (this._cacheDrawParams = e),
            (this._cacheInvalidated = !1)),
            this._cacheInvalidated &&
              ((this._cacheState = this._cache.updateSource(
                this._source,
                function () {
                  return this._statLabelData();
                }.bind(this),
              )),
              (this._cacheInvalidated = !1));
        }),
        (T.prototype.destroy = function () {
          this._cache && (this._cache.destroy(), (this._cache = null)),
            x.onAllIconsReady().unsubscribeAll(this);
        }),
        (T.prototype._updateImpl = function () {
          (this._renderer = null), (this._invalidated = !1);
          var e = this._source.priceScale(),
            t = this._model.timeScale();
          if (e && !e.isEmpty() && !t.isEmpty()) {
            var i = this._model.timeScale().visibleBarsStrictRange();
            if (null !== i) {
              var r = this._source.points();
              if (!(r.length < 2)) {
                var l = r[0],
                  h = r[1],
                  d = this._source.properties();
                if (
                  (!(l.index < i.firstBar() && h.index < i.firstBar()) ||
                    d.extendLeft.value() ||
                    d.extendRight.value()) &&
                  (a.prototype._updateImpl.call(this),
                  !(this._points.length < 2))
                ) {
                  var c = d.showBarsRange.value(),
                    u = d.showDateTimeRange.value(),
                    _ = d.showDistance.value(),
                    f = d.showPriceRange.value(),
                    v = d.showAngle.value();
                  f ||
                    c ||
                    u ||
                    _ ||
                    v ||
                    ((this._label = null),
                    this._labelData &&
                      ((this._labelData.text = ''),
                      (this._labelData.lines = [])));
                  var y = new o(),
                    w = d.linecolor.value(),
                    x = {};
                  (x.points = this._points),
                    (x.floatPoints = this._floatPoints),
                    (x.width = t.width()),
                    (x.height = e.height()),
                    (x.color = w),
                    (x.linewidth = d.linewidth.value()),
                    (x.linestyle = d.linestyle.value()),
                    (x.extendleft = d.extendLeft.value()),
                    (x.extendright = d.extendRight.value()),
                    (x.leftend = d.leftEnd.value()),
                    (x.rightend = d.rightEnd.value()),
                    this._trendRenderer.setData(x),
                    y.append(this._trendRenderer);
                  var m =
                      ((this.isHoveredSource() || this.isSelectedSource()) &&
                        this.isEditMode()) ||
                      d.alwaysShowStats.value(),
                    b =
                      (this.isHoveredSource() || this.isSelectedSource()) &&
                      d.showMiddlePoint.value();
                  if (m && 2 === this._points.length) {
                    var R = new s(this, 0);
                    y.append(R);
                  }
                  if (
                    (this._middlePoint &&
                      y.append(
                        new p({
                          points: [this._middlePoint],
                          bgColors: this._lineAnchorColors([this._middlePoint]),
                          color: w,
                          visible: b && this.areAnchorsVisible(),
                          hittestResult: g.REGULAR,
                        }),
                      ),
                    this.addAnchors(y),
                    d.showLabel && d.showLabel.value())
                  ) {
                    (l = this._points[0]), (h = this._points[1]);
                    var T,
                      S = l.x < h.x ? l : h,
                      P = S === l ? h : l,
                      L = d.vertLabelsAlign.value(),
                      C = d.horzLabelsAlign.value();
                    T =
                      'left' === C
                        ? S.clone()
                        : 'right' === C
                        ? P.clone()
                        : new n((l.x + h.x) / 2, (l.y + h.y) / 2);
                    var M = Math.atan((P.y - S.y) / (P.x - S.x)),
                      I = {
                        points: [T],
                        text: d.text.value(),
                        color: d.textcolor.value(),
                        vertAlign: L,
                        horzAlign: C,
                        font: d.font.value(),
                        offsetX: 0,
                        offsetY: 0,
                        bold: d.bold.value(),
                        italic: d.italic.value(),
                        fontsize: d.fontsize.value(),
                        forceTextAlign: !0,
                        angle: M,
                      };
                    this._labelRenderer.setData(I),
                      y.append(this._labelRenderer);
                  }
                  this._renderer = y;
                }
              }
            }
          }
        }),
        (T.prototype._statLabelData = function () {
          var e,
            t,
            i,
            r,
            a,
            s = this._source.points(),
            o = s[0],
            l = s[1],
            h = this._source.properties(),
            p = [];
          if (h.showPriceRange.value() && this._source.priceScale()) {
            var u = (r = l.price - o.price) / Math.abs(o.price);
            e =
              this._source.ownerSource().formatter().format(r) +
              ' (' +
              this._percentageFormatter.format(100 * u) +
              ')';
            var _ = this._model.mainSeries().symbolInfo();
            _ &&
              _ !== this._lastSymbolInfo &&
              ((this._pipFormatter = new c(
                _.pricescale,
                _.minmov,
                _.type,
                _.minmove2,
              )),
              (this._lastSymbolInfo = _)),
              (e += this._pipFormatter
                ? ', ' + this._pipFormatter.format(r)
                : ''),
              p.push('priceRange');
          }
          var g = h.showBarsRange.value(),
            y = h.showDateTimeRange.value(),
            w = h.showDistance.value();
          if (g || y || w) {
            if (
              ((t = ''),
              g &&
                ((a = l.index - o.index), (t += $.t('{0} bars').format(b(a)))),
              y)
            ) {
              var x = this._model.timeScale().indexToUserTime(o.index),
                m = this._model.timeScale().indexToUserTime(l.index);
              if (x && m) {
                var T = (m.valueOf() - x.valueOf()) / 1e3,
                  S = R(new d().format(T));
                S && (t += g ? ' (' + S + ')' : S);
              }
            }
            if (w) {
              t && (t += ', '),
                void 0 === r && (r = l.price - o.price),
                void 0 === a && (a = l.index - o.index);
              var P = Math.round(1e5 * Math.sqrt(r * r + a * a)) / 1e5;
              t += $.t('distance: {0}').format(
                b(this._numericFormatter.format(P)),
              );
            }
            t && p.push('barsRange');
          }
          if (h.showAngle.value()) {
            var L,
              C = this._source.pointToScreenPoint(o),
              M = this._source.pointToScreenPoint(l);
            if (
              ((C = C instanceof Array ? C[0] : C instanceof n ? C : null),
              (M = M instanceof Array ? M[0] : M instanceof n ? M : null),
              C instanceof n && M instanceof n)
            ) {
              var I = M.subtract(C);
              I.length() > 0 &&
                ((I = I.normalized()),
                (L = Math.acos(I.x)),
                I.y > 0 && (L = -L));
            }
            'number' != typeof L ||
              TradingView.isNaN(L) ||
              ((i = Math.round((180 * L) / Math.PI) + 'º'), p.push('angle'));
          }
          (this._label =
            [b(e), t, i]
              .filter(function (e) {
                return e;
              })
              .join('\n') || null),
            (this._icons = p);
          var O = this._model.isDark(),
            D = O ? f.bgColorDark : f.bgColorLight,
            k = O ? f.textColorDark : f.textColorLight,
            B = {
              points: [this._points[1]],
              text: this._label,
              color: k,
              isDark: O,
              font: v,
              fontSize: f.fontSize,
              lineSpacing: f.lineSpacing,
              backgroundColor: D,
              backgroundRoundRect: f.rectRadius,
              paddingLeft: f.paddingLeftRight,
              paddingRight: f.paddingLeftRight,
              paddingTop: f.paddingTopBottom,
              paddingBottom: f.paddingTopBottom,
              textPadding: f.textPadding,
              doNotAlignText: !0,
              icons: this._icons,
            };
          return (
            this._points[1].y < this._points[0].y && (B.vertAlign = 'bottom'),
            this._points[1].x < this._points[0].x && (B.horzAlign = 'right'),
            (this._labelData = B),
            B
          );
        }),
        (T.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.TrendLinePaneView = T);
    },
    pBAL: function (e, t, i) {
      'use strict';
      var r = i('aB9a').LineSourcePaneView,
        n = i('wacn').DisjointChannelRenderer,
        a = i('pJOz').TrendLineRenderer,
        s = i('qgcf').TextRenderer,
        o = i('Zy3/').CompositeRenderer,
        l = i('//lt').PaneCursorType,
        h = [l.Default, l.Default, l.VerticalResize, l.Default];
      function d(e, t) {
        r.call(this, e, t),
          (this._label = null),
          (this._trendLineRendererPoints12 = new a()),
          (this._trendLineRendererPoints43 = new a()),
          (this._disjointChannelRenderer = new n()),
          (this._p1LabelRenderer = new s()),
          (this._p2LabelRenderer = new s()),
          (this._p3LabelRenderer = new s()),
          (this._p4LabelRenderer = new s()),
          (this._renderer = null);
      }
      inherit(d, r),
        (d.prototype._updateImpl = function () {
          if (
            (r.prototype._updateImpl.call(this),
            (this._renderer = null),
            (this._label = null),
            !(this._source.points().length < 2) && this._source.priceScale())
          ) {
            var e = this._source.points()[0],
              t = this._source.points()[1],
              i = this._source.ownerSource().firstValue();
            if (
              ((this._price1 = this._source
                .priceScale()
                .formatPrice(e.price, i)),
              (this._price2 = this._source
                .priceScale()
                .formatPrice(t.price, i)),
              3 === this._source.points().length)
            ) {
              var n = this._source.points()[2];
              this._price3 = this._source.priceScale().formatPrice(n.price, i);
              var a = t.price - e.price;
              this._price4 = this._source
                .priceScale()
                .formatPrice(n.price + a, i);
            }
            if (!(this._points.length < 2)) {
              var s,
                l = new o(),
                d =
                  ((e = this._points[0]),
                  (t = this._points[1]),
                  this._source.properties()),
                c = this._model,
                p = this._source;
              if (this._points.length >= 3) {
                ((n = this._points[2]).x = t.x), (n.square = !0);
                var u = t.y - e.y;
                if (
                  (((s = e.clone()).y = n.y + u),
                  (s.data = 3),
                  d.fillBackground.value())
                ) {
                  var _ = c.timeScale().width(),
                    f = p.priceScale().height(),
                    v = d.extendLeft.value(),
                    g = d.extendRight.value();
                  this._disjointChannelRenderer.setData({
                    width: _,
                    height: f,
                    extendleft: v,
                    extendright: g,
                    points: [e, t, n, s],
                    backcolor: d.backgroundColor.value(),
                    transparency: d.transparency.value(),
                    hittestOnBackground: TradingView.isMobile.any(),
                  }),
                    l.append(this._disjointChannelRenderer);
                }
              }
              var y = function (e, t) {
                  return {
                    points: [e, t],
                    width: c.timeScale().width(),
                    height: p.priceScale().height(),
                    color: d.linecolor.value(),
                    linewidth: d.linewidth.value(),
                    linestyle: d.linestyle.value(),
                    extendleft: d.extendLeft.value(),
                    extendright: d.extendRight.value(),
                    leftend: d.leftEnd.value(),
                    rightend: d.rightEnd.value(),
                  };
                },
                w = this,
                x = function (e, t, i, r, n, a) {
                  if (w._source.properties().showPrices.value()) {
                    var s = {
                      points: [i],
                      text: n,
                      color: w._source.properties().textcolor.value(),
                      horzAlign: i.x > r.x ? 'left' : 'right',
                      vertAlign: 'middle',
                      font: w._source.properties().font.value(),
                      offsetX: 6,
                      offsetY: 0,
                      boxPadding: 0,
                      bold: w._source.properties().bold.value(),
                      italic: w._source.properties().italic.value(),
                      fontsize: w._source.properties().fontsize.value(),
                      forceTextAlign: !0,
                    };
                    e.setData(s), l.append(e);
                    s = {
                      points: [r],
                      text: a,
                      color: w._source.properties().textcolor.value(),
                      horzAlign: i.x < r.x ? 'left' : 'right',
                      vertAlign: 'middle',
                      font: w._source.properties().font.value(),
                      offsetX: 6,
                      offsetY: 0,
                      boxPadding: 0,
                      bold: w._source.properties().bold.value(),
                      italic: w._source.properties().italic.value(),
                      fontsize: w._source.properties().fontsize.value(),
                      forceTextAlign: !0,
                    };
                    t.setData(s), l.append(t);
                  }
                };
              if (
                (this._trendLineRendererPoints12.setData(y(e, t)),
                l.append(this._trendLineRendererPoints12),
                x(
                  this._p1LabelRenderer,
                  this._p2LabelRenderer,
                  e,
                  t,
                  this._price1,
                  this._price2,
                ),
                2 === this._points.length)
              )
                return this.addAnchors(l), void (this._renderer = l);
              this._trendLineRendererPoints43.setData(y(s, n)),
                l.append(this._trendLineRendererPoints43),
                x(
                  this._p3LabelRenderer,
                  this._p4LabelRenderer,
                  n,
                  s,
                  this._price3,
                  this._price4,
                );
              var m = [e, t, n, s];
              this._model.lineBeingCreated() === this._source && m.pop(),
                l.append(
                  this.createLineAnchor({ points: m, pointsCursorType: h }),
                ),
                (this._renderer = l);
            }
          }
        }),
        (d.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.DisjointChannelPaneView = d);
    },
    piZW: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('VdBB').HitTestResult,
        s = i('Zy3/').CompositeRenderer,
        o = i('cPgM').ScaledPaneRenderer;
      function l(e) {
        o.call(this), (this._data = e);
      }
      function h(e, t) {
        n.call(this, e, t), (this._renderer = null);
      }
      inherit(l, o),
        (l.prototype._drawImpl = function (e) {
          (e.strokeStyle = this._data.color),
            (e.lineWidth = this._data.linewidth),
            CanvasEx.setLineStyle(e, this._data.linestyle),
            e.beginPath(),
            e.moveTo(this._data.point.x, this._data.point.y);
          for (var t = 1; t <= 2 * this._data.width; t++) {
            var i = (t * Math.PI) / this._data.width,
              r = (Math.sin(i - Math.PI / 2) * this._data.height) / 2;
            e.lineTo(
              this._data.point.x + t,
              this._data.point.y + r + this._data.height / 2,
            );
          }
          e.stroke();
        }),
        (l.prototype.hitTest = function (e) {
          if (
            e.x < this._data.point.x ||
            e.x > this._data.point.x + 2 * this._data.width
          )
            return null;
          var t = ((e.x - this._data.point.x) * Math.PI) / this._data.width,
            i = (Math.sin(t - Math.PI / 2) * this._data.height) / 2;
          i = this._data.point.y + i + this._data.height / 2;
          return Math.abs(i - e.y) <= 3 ? new a(a.MOVEPOINT) : null;
        }),
        inherit(h, n),
        (h.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (h.prototype._updateImpl = function () {
          if (
            (n.prototype._updateImpl.call(this),
            (this._renderer = null),
            !(this._points.length < 2))
          ) {
            var e = this._source.points(),
              t = e[0],
              i = e[1],
              a = Math.min(t.index, i.index),
              o = 2 * (Math.max(t.index, i.index) - a),
              h = this._points[0],
              d = this._points[1],
              c = Math.abs(h.x - d.x),
              p = d.y - h.y,
              u = new s(),
              _ = this._source.properties(),
              f = this._model.timeScale();
            if (0 !== o) {
              for (
                var v = f.indexToCoordinate(a), g = [], y = a;
                v > -c;
                y -= o
              )
                (v = f.indexToCoordinate(y)), g.push(v);
              v = v = f.indexToCoordinate(a + o);
              for (y = a + o; v < f.width(); y += o)
                (v = f.indexToCoordinate(y)), g.push(v);
              for (var w = 0; w < g.length; w++) {
                var x = new l({
                  point: new r(g[w], h.y),
                  width: c,
                  height: p,
                  color: _.linecolor.value(),
                  linewidth: _.linewidth.value(),
                  linestyle: _.linestyle.value(),
                });
                u.append(x);
              }
              this.addAnchors(u), (this._renderer = u);
            }
          }
        }),
        (t.SineLinePaneView = h);
    },
    qjB4: function (e, t, i) {
      e.exports = i.p + 'f55394b616ed1ae9462c37daab941d93.png';
    },
    tjxb: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('jkoZ'),
        s = i('VdBB').HitTestResult,
        o = i('cPgM').ScaledPaneRenderer;
      function l(e, t) {
        o.call(this), (this._data = e), (this._adapter = t);
      }
      function h(e, t) {
        n.call(this, e, t);
      }
      inherit(l, o),
        (l.prototype._textWidth = function (e) {
          if (0 === this._adapter.getText().length) return 0;
          e.save(), (e.font = this._adapter.getFont());
          var t = e.measureText(this._adapter.getText()).width;
          return e.restore(), 5 + t;
        }),
        (l.prototype._drawArrow = function (e, t, i) {
          e.save(),
            (e.strokeStyle = this._adapter.getArrowColor()),
            (e.fillStyle = this._adapter.getArrowColor());
          var r = this._adapter.getArrowHeight(),
            n = this._adapter.getDirection();
          e.translate(t, i),
            'buy' !== n && e.rotate(Math.PI),
            CanvasEx.drawArrow(e, 0, 0, 0, r),
            e.restore();
        }),
        (l.prototype._drawText = function (e, t, i) {
          var r = this._adapter.getText();
          if (r) {
            e.save(),
              (e.textAlign = 'center'),
              (e.textBaseline = 'middle'),
              (e.font = this._adapter.getFont()),
              (e.fillStyle = this._adapter.getTextColor());
            var n = t + this._textWidth(e) / 2,
              s = i + a.fontHeight(this._adapter.getFont()) / 2;
            e.fillText(r, n, s - 1), e.restore();
          }
        }),
        (l.prototype._drawImpl = function (e) {
          var t = Math.round(this._data.points[0].x + 0.5),
            i = Math.round(this._data.points[0].y);
          this._drawArrow(e, t, i);
          var r = this._textWidth(e);
          if (0 !== r) {
            var n = this._adapter.getArrowHeight(),
              s = this._adapter.getArrowSpacing(),
              o = a.fontHeight(this._adapter.getFont()),
              l =
                'buy' === this._adapter.getDirection()
                  ? i + n + s
                  : i - n - s - o;
            this._drawText(e, Math.round(t - r / 2), l);
          }
        }),
        (l.prototype.hitTest = function (e) {
          var t,
            i,
            r = Math.round(this._data.points[0].x),
            n = Math.round(this._data.points[0].y),
            a = this._adapter.getArrowHeight();
          if (
            ('buy' === this._adapter.getDirection()
              ? ((t = n), (i = n + a))
              : ((t = n - a), (i = n)),
            e.x >= r - 2 && e.x <= r + 2 && e.y >= t && e.y <= i)
          ) {
            var o = this._adapter.getTooltip();
            const e = () => {
              TradingView.TradingWidget &&
                TradingView.TradingWidget.journalDialog();
            };
            return new s(s.CUSTOM, {
              clickHandler: e,
              tapHandler: e,
              tooltip:
                '' !== o
                  ? { text: o, rect: { x: r, y: t, w: 2, h: i - t } }
                  : null,
            });
          }
          return null;
        }),
        inherit(h, n),
        (h.prototype._renderer = null),
        (h.prototype._rendererCached = !1),
        (h.prototype._updateImpl = function () {
          n.prototype._updateImpl.call(this),
            (this._renderer = null),
            (this._rendererCached = !1);
        }),
        (h.prototype.renderer = function (e, t) {
          if ((this._invalidated && this._updateImpl(), this._rendererCached))
            return this._renderer;
          this._rendererCached = !0;
          var i = this._source,
            n = i.points();
          if (0 === n.length) return null;
          var a = i._adapter,
            s = i._model.timeScale(),
            o = this._source._model
              .paneForSource(this._source)
              .executionsPositionController()
              .getXYCoordinate(a, s, n[0].index);
          if (!isFinite(o.y) || o.y < 0 || o.y > e || o.x < 0)
            return (this._renderer = null), null;
          var h = { points: [new r(o.x, o.y)] };
          return (this._renderer = new l(h, a)), this._renderer;
        }),
        (t.ExecutionPaneView = h);
    },
    'u+oH': function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('pJOz').TrendLineRenderer,
        s = i('qgcf').TextRenderer,
        o = i('IjC5').RectangleRenderer,
        l = i('VdBB').HitTestResult,
        h = i('Zy3/').CompositeRenderer,
        d = i('GH0z').PercentageFormatter,
        c = i('zXvd').NumericFormatter,
        p = i('5C6T').PipFormatter,
        u = i('Tmoa'),
        _ = i('a7Ha').LineEnd,
        f = i('wGNx').RiskRewardPointIndex,
        v = i('Ialn').forceLTRStr,
        g = i('//lt').PaneCursorType,
        y = [g.Default, g.HorizontalResize, g.VerticalResize, g.VerticalResize];
      function w(e, t) {
        n.call(this, e, t),
          (this._percentageFormatter = new d()),
          (this._numericFormatter = new c()),
          (this._pipFormatter = null),
          (this._lastSymbolInfo = null),
          (this._entryLineRenderer = new a()),
          (this._stopLineRenderer = new a()),
          (this._targetLineRenderer = new a()),
          (this._positionLineRenderer = new a()),
          (this._fullStopBgRenderer = new o(
            new l(l.MOVEPOINT),
            new l(l.MOVEPOINT),
          )),
          (this._stopBgRenderer = new o(
            new l(l.MOVEPOINT),
            new l(l.MOVEPOINT),
          )),
          (this._fullTargetBgRenderer = new o(
            new l(l.MOVEPOINT),
            new l(l.MOVEPOINT),
          )),
          (this._targetBgRenderer = new o(
            new l(l.MOVEPOINT),
            new l(l.MOVEPOINT),
          )),
          (this._stopLabelRenderer = new s()),
          (this._middleLabelRenderer = new s()),
          (this._profitLabelRenderer = new s()),
          (this._renderer = null);
      }
      inherit(w, n),
        (w.prototype.i18nCache = {
          pnl: $.t('{0} P&L: {1}'),
          open: $.t('Open', { context: 'line_tool_position' }),
          closed: $.t('Closed', { context: 'line_tool_position' }),
          ratio: $.t('Risk/Reward Ratio: {0}'),
          stop: $.t('Stop: {0} ({1}) {2}, Amount: {3}'),
          target: $.t('Target: {0} ({1}) {2}, Amount: {3}'),
          qty: $.t('Qty: {0}'),
        }),
        (w.prototype._formatInTicks = function (e) {
          var t = this._model.mainSeries().base();
          return Math.round(e * t);
        }),
        (w.prototype.isLabelVisible = function () {
          return (
            this.isHoveredSource() ||
            this.isSelectedSource() ||
            this._source.properties().alwaysShowStats.value()
          );
        }),
        (w.prototype._updateImpl = function () {
          n.prototype._updateImpl.call(this),
            (this._renderer = null),
            (this._stopLevel = null),
            (this._profitLevel = null);
          var e = this._model.timeScale(),
            t = this._source.priceScale();
          if (
            t &&
            !t.isEmpty() &&
            !e.isEmpty() &&
            0 !== this._source.points().length &&
            0 !== this._points.length &&
            null !== this._model.mainSeries().bars().last() &&
            !(this._source.points().length < 2) &&
            0 !== this._model.mainSeries().bars().length
          ) {
            this._isClosed = 4 === this._source.points().length;
            var i = this._source.lastBarData();
            if (i) {
              var a = this._source.stopPrice(),
                s = this._source.profitPrice();
              this._pl =
                this._source.points().length > 1
                  ? this._source.calculatePL(i.closePrice)
                  : 0;
              var o = this._source.ownerSource().firstValue();
              if (
                ((this._entryLevel = this._points[f.Entry].y),
                (this._stopLevel = t.priceToCoordinate(a, o)),
                (this._profitLevel = t.priceToCoordinate(s, o)),
                (this._closeLevel = t.priceToCoordinate(i.closePrice, o)),
                (this._closeBar = this._source._model
                  .timeScale()
                  .indexToCoordinate(i.index)),
                !(this._points.length < 2 || this._source.points().length < 2))
              ) {
                var l = new h(),
                  d = this,
                  c = this._source.properties(),
                  g = this._points[f.Entry].x,
                  w = this._points[f.ActualEntry]
                    ? this._points[f.ActualEntry].x
                    : this._points[f.Close].x,
                  x = this._points[f.ActualClose]
                    ? this._points[f.ActualClose].x
                    : this._points[f.Close].x,
                  m = this._points[f.Close].x,
                  b = new r(g, this._entryLevel),
                  R = new r(m, this._stopLevel);
                if (
                  (((C = {}).points = [b, R]),
                  (C.color = 'white'),
                  (C.linewidth = 0),
                  (C.backcolor = c.stopBackground.value()),
                  (C.fillBackground = !0),
                  (C.transparency = c.stopBackgroundTransparency.value()),
                  (C.extendLeft = !1),
                  (C.extendRight = !1),
                  this._fullStopBgRenderer.setData(C),
                  l.append(this._fullStopBgRenderer),
                  this._pl < 0)
                ) {
                  (b = new r(w, this._entryLevel)),
                    (R = new r(x, this._closeLevel));
                  ((C = {}).points = [b, R]),
                    (C.color = 'white'),
                    (C.linewidth = 0),
                    (C.backcolor = c.stopBackground.value()),
                    (C.fillBackground = !0);
                  var T =
                    100 -
                    100 *
                      (1 -
                        (S = 0.01 * c.stopBackgroundTransparency.value()) *
                          S *
                          S);
                  (C.transparency = T),
                    (C.extendLeft = !1),
                    (C.extendRight = !1),
                    this._stopBgRenderer.setData(C),
                    l.append(this._stopBgRenderer);
                }
                (b = new r(g, this._entryLevel)),
                  (R = new r(m, this._profitLevel));
                if (
                  (((C = {}).points = [b, R]),
                  (C.color = 'white'),
                  (C.linewidth = 0),
                  (C.backcolor = c.profitBackground.value()),
                  (C.fillBackground = !0),
                  (C.transparency = c.profitBackgroundTransparency.value()),
                  (C.extendLeft = !1),
                  (C.extendRight = !1),
                  this._fullTargetBgRenderer.setData(C),
                  l.append(this._fullTargetBgRenderer),
                  this._pl > 0)
                ) {
                  (b = new r(w, this._entryLevel)),
                    (R = new r(x, this._closeLevel));
                  ((C = {}).points = [b, R]),
                    (C.color = 'white'),
                    (C.linewidth = 0),
                    (C.backcolor = c.profitBackground.value()),
                    (C.fillBackground = !0);
                  var S,
                    P =
                      100 -
                      100 *
                        (1 -
                          (S = 0.01 * c.profitBackgroundTransparency.value()) *
                            S *
                            S);
                  (C.transparency = P),
                    (C.extendLeft = !1),
                    (C.extendRight = !1),
                    this._targetBgRenderer.setData(C),
                    l.append(this._targetBgRenderer);
                }
                var L = function (e, t, i, r) {
                  var n = {};
                  (n.points = [t, i]),
                    (n.width = d._model.timeScale().width()),
                    (n.height = d._source.priceScale().height()),
                    (n.color = r || d._source.properties().linecolor.value()),
                    (n.linewidth = d._source.properties().linewidth.value()),
                    (n.linestyle = CanvasEx.LINESTYLE_SOLID),
                    (n.extendleft = !1),
                    (n.extendright = !1),
                    (n.leftend = _.Normal),
                    (n.rightend = _.Normal),
                    e.setData(n),
                    l.append(e);
                };
                if (this._points[f.ActualEntry]) {
                  var C;
                  (b = this._points[f.ActualEntry]),
                    (R = this._isClosed
                      ? this._points[f.ActualClose]
                      : new r(this._closeBar, this._closeLevel));
                  ((C = {}).points = [b, R]),
                    (C.width = d._model.timeScale().width()),
                    (C.height = d._source.priceScale().height()),
                    (C.color = d._source.properties().linecolor.value()),
                    (C.linewidth = 1),
                    (C.linestyle = CanvasEx.LINESTYLE_DASHED),
                    (C.extendleft = !1),
                    (C.extendright = !1),
                    (C.leftend = _.Normal),
                    (C.rightend = _.Arrow),
                    this._positionLineRenderer.setData(C),
                    l.append(this._positionLineRenderer);
                }
                d = this;
                var M = function (e, t, i, r, n, a, s) {
                    if (d.isLabelVisible()) {
                      var o = {};
                      (o.points = [t]),
                        (o.text = i),
                        (o.color = c.textcolor.value()),
                        (o.font = c.font.value()),
                        (o.offsetX = 3),
                        (o.offsetY = a),
                        (o.vertAlign = n),
                        (o.horzAlign = 'center'),
                        (o.backgroundRoundRect = 4),
                        (o.backgroundColor = u.resetTransparency(r)),
                        (o.fontsize = c.fontsize.value()),
                        (o.backgroundHorzInflate = 4),
                        s && (o.borderColor = s),
                        e.setData(o),
                        l.append(e);
                    }
                  },
                  I = this._source.entryPrice(),
                  O = this._source.stopPrice(),
                  D = this._source.profitPrice(),
                  k = Math.abs(O - I),
                  B = Math.round((1e4 * k) / I) / 100,
                  N = Math.abs(D - I),
                  A = Math.round((1e4 * N) / I) / 100,
                  z = Math.abs(I - D) / Math.abs(I - O);
                (b = new r(g, this._points[f.Entry].y)),
                  (R = new r(m, this._points[f.Entry].y));
                L(this._entryLineRenderer, b, R);
                var E = new r((g + m) / 2, Math.round(this._points[0].y) + 0.5),
                  V = '',
                  j = '',
                  H = this._numericFormatter.format(Math.round(100 * z) / 100);
                if (
                  (this._points[1] &&
                    void 0 !== this._pl &&
                    (j = this._source
                      .ownerSource()
                      .formatter()
                      .format(this._pl)),
                  c.compact.value())
                )
                  (V += j ? j + ' ~ ' : ''),
                    (V += c.qty.value() + '\n'),
                    (V += H);
                else {
                  var W = this._isClosed
                    ? this.i18nCache.closed
                    : this.i18nCache.open;
                  (V += j ? this.i18nCache.pnl.format(W, j) + ', ' : ''),
                    (V += this.i18nCache.qty.format(c.qty.value()) + '\n'),
                    (V += this.i18nCache.ratio.format(H) + ' ');
                }
                var F = c.linecolor.value();
                this._pl < 0
                  ? (F = c.stopBackground.value())
                  : this._pl > 0 && (F = c.profitBackground.value()),
                  M(this._middleLabelRenderer, E, V, F, 'middle', 0, 'white');
                (b = new r(g, this._stopLevel)),
                  (R = new r(m, this._stopLevel));
                L(this._stopLineRenderer, b, R, c.stopBackground.value());
                var Y = this._model.mainSeries().symbolInfo();
                Y &&
                  Y !== this._lastSymbolInfo &&
                  ((this._pipFormatter = new p(
                    Y.pricescale,
                    Y.minmov,
                    Y.type,
                    Y.minmove2,
                  )),
                  (this._lastSymbolInfo = Y));
                (E = new r((g + m) / 2, this._stopLevel)), (V = '');
                var U = this._source.ownerSource().formatter().format(k),
                  Z = this._percentageFormatter.format(B);
                (V = c.compact.value()
                  ? U + ' (' + Z + ') ' + c.amountStop.value()
                  : this.i18nCache.stop.format(
                      v(this._source.ownerSource().formatter().format(k)),
                      v(this._percentageFormatter.format(B)),
                      this._pipFormatter ? v(this._pipFormatter.format(k)) : '',
                      v(c.amountStop.value()),
                    )),
                  M(
                    this._stopLabelRenderer,
                    E,
                    V,
                    c.stopBackground.value(),
                    I < O ? 'bottom' : 'top',
                    0,
                  );
                (b = new r(g, this._profitLevel)),
                  (R = new r(m, this._profitLevel));
                L(this._targetLineRenderer, b, R, c.profitBackground.value());
                (E = new r((g + m) / 2, this._profitLevel)),
                  (V = ''),
                  (U = this._source.ownerSource().formatter().format(N)),
                  (Z = this._percentageFormatter.format(A));
                (V = c.compact.value()
                  ? U + ' (' + Z + ') ' + c.amountTarget.value()
                  : this.i18nCache.target.format(
                      v(this._source.ownerSource().formatter().format(N)),
                      v(this._percentageFormatter.format(A)),
                      this._pipFormatter ? v(this._pipFormatter.format(N)) : '',
                      v(c.amountTarget.value()),
                    )),
                  M(
                    this._profitLabelRenderer,
                    E,
                    V,
                    c.profitBackground.value(),
                    I < O ? 'top' : 'bottom',
                    0,
                  );
                var q = this._points[0].clone();
                q.data = 0;
                var G = new r(g, this._stopLevel);
                (G.data = 2), (G.square = !0);
                var Q = new r(g, this._profitLevel);
                (Q.data = 3), (Q.square = !0);
                var X = new r(m, q.y);
                (X.data = 1), (X.square = !0);
                var J = { points: [q, X, G, Q], pointsCursorType: y };
                l.append(this.createLineAnchor(J)), (this._renderer = l);
              }
            }
          }
        }),
        (w.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.RiskRewardPaneView = w);
    },
    ukvZ: function (e, t, i) {
      e.exports = i.p + '932c209e6bf69970ca313047d5da8964.png';
    },
    wacn: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'DisjointChannelRenderer', function () {
          return _;
        });
      var r = i('mrSG'),
        n = i('Eyy1'),
        a = i('aO4+'),
        s = i('f6yo'),
        o = i('GEp6'),
        l = i('hBTJ'),
        h = i('8Uy/'),
        d = i('VdBB'),
        c = i('NN6M'),
        p = i('Tmoa'),
        u = i('cPgM'),
        _ = (function () {
          function e() {
            (this._parallelChannelRenderer = new c.ParallelChannelRenderer()),
              (this._disjointChannelIntersectionRenderer = new f()),
              (this._selectedRenderer = this._disjointChannelIntersectionRenderer);
          }
          return (
            (e.prototype.setData = function (e) {
              if (!(e.points.length < 4)) {
                var t = e.points,
                  i = t[0],
                  r = t[1],
                  n = t[2],
                  s = t[3];
                if (
                  Object(a.equalPoints)(i, r) ||
                  Object(a.equalPoints)(n, s) ||
                  (Object(o.distanceToLine)(i, r, n).distance < 1e-6 &&
                    Object(o.distanceToLine)(i, r, s).distance < 1e-6)
                )
                  this._selectedRenderer = null;
                else
                  null !==
                  Object(l.intersectLines)(
                    Object(a.lineThroughPoints)(i, r),
                    Object(a.lineThroughPoints)(n, s),
                  )
                    ? (this._disjointChannelIntersectionRenderer.setData(e),
                      (this._selectedRenderer = this._disjointChannelIntersectionRenderer))
                    : (this._parallelChannelRenderer.setData({
                        extendleft: e.extendleft,
                        extendright: e.extendright,
                        points: [i, r, s, n],
                        fillBackground: !0,
                        backcolor: e.backcolor,
                        transparency: e.transparency,
                        color: 'rgba(0,0,0,0)',
                        linestyle: h.LINESTYLE_SOLID,
                        linewidth: 0,
                        showMidline: !1,
                        hittestOnBackground: e.hittestOnBackground,
                      }),
                      (this._selectedRenderer = this._parallelChannelRenderer));
              }
            }),
            (e.prototype.hitTest = function (e, t) {
              return null !== this._selectedRenderer
                ? this._selectedRenderer.hitTest(e, t)
                : null;
            }),
            (e.prototype.draw = function (e, t) {
              null !== this._selectedRenderer &&
                this._selectedRenderer.draw(e, t);
            }),
            e
          );
        })(),
        f = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t._data = null), t;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.setData = function (e) {
              this._data = e;
            }),
            (t.prototype.hitTest = function (e, t) {
              if (null === this._data || !this._data.hittestOnBackground)
                return null;
              for (var i = 0, r = this._visiblePolygons(t); i < r.length; i++) {
                var n = r[i];
                if (Object(s.pointInPolygon)(e, n))
                  return new d.HitTestResult(
                    d.HitTestResult.MOVEPOINT_BACKGROUND,
                  );
              }
              return null;
            }),
            (t.prototype._drawImpl = function (e, t) {
              if (!(null === this._data || this._data.points.length < 4)) {
                e.fillStyle = Object(p.generateColor)(
                  this._data.backcolor,
                  this._data.transparency,
                );
                for (
                  var i = 0, r = this._visiblePolygons(t);
                  i < r.length;
                  i++
                ) {
                  var n = r[i];
                  e.beginPath(), e.moveTo(n[0].x, n[0].y);
                  for (var a = 1; a < n.length; a++) e.lineTo(n[a].x, n[a].y);
                  e.fill();
                }
              }
            }),
            (t.prototype._visiblePolygons = function (e) {
              var t = Object(n.ensureNotNull)(this._data),
                i = t.points,
                r = i[0],
                s = i[1],
                o = i[2],
                h = i[3];
              if (e.cssWidth <= 0 || e.cssHeight <= 0) return [];
              var d = Object(l.intersectLines)(
                Object(a.lineThroughPoints)(r, s),
                Object(a.lineThroughPoints)(o, h),
              );
              if (null === d) return [];
              var c = [
                  new a.Point(0, 0),
                  new a.Point(e.cssWidth, 0),
                  new a.Point(e.cssWidth, e.cssHeight),
                  new a.Point(0, e.cssHeight),
                ],
                p = [],
                u = c,
                _ = r.subtract(s).add(d),
                f = h.subtract(o).add(d);
              (u = v(u, d, _, [f, f])),
                null !== (u = v((u = y(u, t)), f, d, [_, _])) && p.push(u);
              u = c;
              var g = s.subtract(r).add(d),
                w = o.subtract(h).add(d);
              return (
                (u = v(u, d, g, [w, w])),
                null !== (u = v((u = y(u, t)), w, d, [g, g])) && p.push(u),
                p
              );
            }),
            t
          );
        })(u.ScaledPaneRenderer);
      function v(e, t, i, r) {
        var n = Object(a.equalPoints)(i, r[0])
          ? Object(a.equalPoints)(i, r[1])
            ? null
            : r[1]
          : r[0];
        return null !== e && null !== n
          ? Object(l.intersectPolygonAndHalfplane)(
              e,
              Object(a.halfplaneThroughPoint)(
                Object(a.lineThroughPoints)(t, i),
                n,
              ),
            )
          : null;
      }
      function g(e, t, i) {
        return null !== e
          ? Object(l.intersectPolygonAndHalfplane)(
              e,
              Object(a.halfplaneThroughPoint)(
                ((r = t), Object(a.line)(1, 0, -r)),
                new a.Point(i, 0),
              ),
            )
          : null;
        var r;
      }
      function y(e, t) {
        var i = t.points,
          r = i[0],
          n = i[1];
        return (
          t.extendleft || (e = g(e, r.x, n.x)),
          t.extendright || (e = g(e, n.x, r.x)),
          e
        );
      }
    },
    wdUH: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'GannFixedPaneView', function () {
          return c;
        });
      var r = i('mrSG'),
        n = i('aO4+'),
        a = i('aB9a'),
        s = i('pJOz'),
        o = i('Zy3/'),
        l = i('a7Ha'),
        h = i('8Uy/'),
        d = i('amvX'),
        c = (function (e) {
          function t(t, i) {
            var r = e.call(this, t, i) || this;
            return (
              (r._verticalLevelsRenderers = []),
              (r._horizontalLevelsRenderers = []),
              (r._fanRenderers = []),
              (r._arcRenderers = []),
              (r._renderer = null),
              r._initRenderers(),
              r
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.renderer = function (e, t) {
              return this._invalidated && this._updateImpl(), this._renderer;
            }),
            (t.prototype._updateImpl = function () {
              e.prototype._updateImpl.call(this), (this._renderer = null);
              var t = this._getSource(),
                i = this._getPoints(),
                r = t.getScreenPoints();
              if (!(i.length < 2 || r.length < 2)) {
                var n = r[0],
                  a = r[1];
                (i[1] = n), (i[1].data = 1), (i[2] = a);
                var s = this._getPoints(),
                  l = new o.CompositeRenderer();
                if (s.length < 2)
                  return this.addAnchors(l), void (this._renderer = l);
                var h = s[0],
                  d = 3 === s.length ? s[2] : s[1],
                  c = d.x - h.x,
                  p = d.y - h.y,
                  u = h,
                  _ = d,
                  f = this._getModel(),
                  v = {
                    barsCoordsRange: c,
                    priceCoordsRange: p,
                    startPoint: u,
                    endPoint: _,
                    p1: h,
                    p2: d,
                  };
                this._prepareLevels(l, v),
                  this._prepareFanLines(l, v),
                  this._prepareArcs(l, v);
                var g = [h, s[1]];
                f.lineBeingCreated() === t && g.pop(),
                  l.append(this.createLineAnchor({ points: g })),
                  (this._renderer = l);
              }
            }),
            (t.prototype._initRenderers = function () {
              for (
                var e = this._getSource(), t = e.levelsCount(), i = 0;
                i < t;
                i++
              )
                this._verticalLevelsRenderers.push(new s.TrendLineRenderer()),
                  this._horizontalLevelsRenderers.push(
                    new s.TrendLineRenderer(),
                  );
              var r = e.fanLinesCount();
              for (i = 0; i < r; i++)
                this._fanRenderers.push(new s.TrendLineRenderer());
              var n = e.arcsCount();
              for (i = 0; i < n; i++) this._arcRenderers.push(new d.a());
            }),
            (t.prototype._prepareLevels = function (e, t) {
              for (
                var i = t.startPoint,
                  r = t.endPoint,
                  a = t.barsCoordsRange,
                  s = t.priceCoordsRange,
                  o = 0,
                  d = this._getSource().levels();
                o < d.length;
                o++
              ) {
                var c = d[o];
                if (c.visible) {
                  var p = c.index / 5,
                    u = i.x + p * a,
                    _ = {
                      points: [new n.Point(u, i.y), new n.Point(u, r.y)],
                      color: c.color,
                      linewidth: c.width,
                      linestyle: h.LINESTYLE_SOLID,
                      extendleft: !1,
                      extendright: !1,
                      leftend: l.LineEnd.Normal,
                      rightend: l.LineEnd.Normal,
                    },
                    f = this._verticalLevelsRenderers[c.index];
                  f.setData(_), e.append(f);
                  var v = i.y + p * s,
                    g = {
                      points: [new n.Point(i.x, v), new n.Point(r.x, v)],
                      color: c.color,
                      linewidth: c.width,
                      linestyle: h.LINESTYLE_SOLID,
                      extendleft: !1,
                      extendright: !1,
                      leftend: l.LineEnd.Normal,
                      rightend: l.LineEnd.Normal,
                    },
                    y = this._horizontalLevelsRenderers[c.index];
                  y.setData(g), e.append(y);
                }
              }
            }),
            (t.prototype._prepareFanLines = function (e, t) {
              for (
                var i = t.p1,
                  r = t.startPoint,
                  a = t.endPoint,
                  s = t.barsCoordsRange,
                  o = t.priceCoordsRange,
                  d = 0,
                  c = this._getSource().fanLines();
                d < c.length;
                d++
              ) {
                var p = c[d];
                if (p.visible) {
                  var u = p.x,
                    _ = p.y,
                    f = void 0,
                    v = void 0;
                  if (u > _) {
                    f = a.x;
                    var g = _ / u;
                    v = r.y + g * o;
                  } else {
                    v = a.y;
                    g = u / _;
                    f = r.x + g * s;
                  }
                  var y = {
                      points: [i, new n.Point(f, v)],
                      color: p.color,
                      linewidth: p.width,
                      linestyle: h.LINESTYLE_SOLID,
                      extendleft: !1,
                      extendright: !1,
                      leftend: l.LineEnd.Normal,
                      rightend: l.LineEnd.Normal,
                    },
                    w = this._fanRenderers[p.index];
                  w.setData(y), e.append(w);
                }
              }
            }),
            (t.prototype._prepareArcs = function (e, t) {
              for (
                var i = t.p1,
                  r = t.startPoint,
                  a = t.endPoint,
                  s = t.barsCoordsRange,
                  o = t.priceCoordsRange,
                  l = i,
                  h = this._getSource(),
                  d = h.isArcsBackgroundFilled(),
                  c = h.arcsBackgroundTransparency(),
                  p = 0,
                  u = h.arcs();
                p < u.length;
                p++
              ) {
                var _ = u[p];
                if (_.visible) {
                  var f = _.x / 5,
                    v = _.y / 5,
                    g = r.x + f * s,
                    y = r.y + v * o,
                    w = {
                      center: r,
                      point: new n.Point(g, y),
                      edge: a,
                      color: _.color,
                      linewidth: _.width,
                      fillBack: d,
                      transparency: c,
                      prevPoint: l,
                    },
                    x = this._arcRenderers[_.index];
                  x.setData(w), e.append(x), (l = w.point);
                }
              }
            }),
            t
          );
        })(a.LineSourcePaneView);
    },
    wgWl: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('z+cS').VerticalLineRenderer,
        s = i('qgcf').TextRenderer,
        o = i('IjC5').RectangleRenderer,
        l = i('pJOz').TrendLineRenderer,
        h = i('VdBB').HitTestResult,
        d = i('Zy3/').CompositeRenderer,
        c = i('a7Ha').LineEnd;
      function p(e, t) {
        n.call(this, e, t),
          (this._levels = []),
          (this._trendRenderer = new l()),
          (this._renderer = null);
      }
      inherit(p, n),
        (p.prototype._updateImpl = function () {
          if (
            (n.prototype._updateImpl.call(this),
            (this._renderer = null),
            !(this._source.points().length < 1) &&
              this._source.priceScale() &&
              !this._source.priceScale().isEmpty() &&
              !this._model.timeScale().isEmpty())
          ) {
            var e = this._source.points()[0];
            2 === this._source.points().length &&
              (x = this._source.points()[1]);
            var t = this._source.properties(),
              i = this._source.points()[0].index;
            if (null !== this._model.timeScale().visibleBarsStrictRange()) {
              this._levels = [];
              for (var l = x ? x.index - e.index : 1, p = 1; p <= 11; p++) {
                var u = t['level' + p];
                if (u.visible.value()) {
                  var _ = Math.round(i + u.coeff.value() * l),
                    f = {
                      index: p,
                      x: this._model.timeScale().indexToCoordinate(_),
                      color: u.color.value(),
                      width: u.linewidth.value(),
                      style: u.linestyle.value(),
                    };
                  t.showLabels.value() &&
                    ((f.text = u.coeff.value()),
                    (f.y = this._source.priceScale().height())),
                    this._levels.push(f);
                }
              }
              var v = this._model.timeScale().width(),
                g = this._source.priceScale().height(),
                y = new d();
              if ((t = this._source.properties()).fillBackground.value())
                for (p = 1; p < this._levels.length; p++) {
                  var w = this._levels[p - 1],
                    x =
                      ((e = new r(this._levels[p].x, 0)),
                      new r(w.x, this._source.priceScale().height())),
                    m = {};
                  (m.points = [e, x]),
                    (m.color = this._levels[p].color),
                    (m.linewidth = 0),
                    (m.backcolor = this._levels[p].color),
                    (m.fillBackground = !0),
                    (m.transparency = t.transparency.value()),
                    (m.extendLeft = !1),
                    (m.extendRight = !1),
                    (R = new o(void 0, void 0, !0)).setData(m),
                    y.append(R);
                }
              for (p = 0; p < this._levels.length; p++) {
                var b = {};
                (b.width = v),
                  (b.height = g),
                  (b.x = this._levels[p].x),
                  (b.color = this._levels[p].color),
                  (b.linewidth = this._levels[p].width),
                  (b.linestyle = this._levels[p].style);
                var R,
                  T = new h(h.MOVEPOINT, null, this._levels[p].index);
                if (
                  ((R = new a()).setData(b),
                  R.setHitTest(T),
                  y.append(R),
                  void 0 !== this._levels[p].text)
                ) {
                  var S,
                    P = t.horzLabelsAlign.value();
                  switch (
                    ((P =
                      'left' === P
                        ? 'right'
                        : 'right' === P
                        ? 'left'
                        : 'center'),
                    t.vertLabelsAlign.value())
                  ) {
                    case 'top':
                      S = new r(this._levels[p].x, 0);
                      break;
                    case 'middle':
                      S = new r(this._levels[p].x, 0.5 * this._levels[p].y);
                      break;
                    case 'bottom':
                      S = new r(this._levels[p].x, this._levels[p].y);
                  }
                  var L = {
                    points: [S],
                    text: '' + this._levels[p].text,
                    color: b.color,
                    vertAlign: t.vertLabelsAlign.value(),
                    horzAlign: P,
                    font: t.font.value(),
                    offsetX: 2,
                    offsetY: 0,
                    fontsize: 12,
                  };
                  y.append(new s(L));
                }
              }
              if (2 === this._points.length) {
                var C = {
                  points: [this._points[0], this._points[1]],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: t.trendline.color.value(),
                  linewidth: t.trendline.linewidth.value(),
                  linestyle: t.trendline.linestyle.value(),
                  extendleft: !1,
                  extendright: !1,
                  leftend: c.Normal,
                  rightend: c.Normal,
                };
                this._trendRenderer.setData(C), y.append(this._trendRenderer);
              }
              2 === this._source.points().length
                ? y.append(this.createLineAnchor({ points: this._points }))
                : this._points.length > 0 &&
                  y.append(
                    this.createLineAnchor({
                      points: [
                        new r(
                          this._points[0].x,
                          this._source.priceScale().height() / 2,
                        ),
                      ],
                      hittestResult: h.MOVEPOINT,
                    }),
                  ),
                (this._renderer = y);
            }
          }
        }),
        (p.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.FibTimeZonePaneView = p);
    },
    xp9B: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('2trc').ChannelRenderer,
        s = i('qgcf').TextRenderer,
        o = i('pJOz').TrendLineRenderer,
        l = i('VdBB').HitTestResult,
        h = i('Zy3/').CompositeRenderer,
        d = i('zXvd').NumericFormatter,
        c = i('a7Ha').LineEnd;
      function p(e, t) {
        n.call(this, e, t),
          (this._numericFormatter = new d()),
          (this._renderer = null);
      }
      inherit(p, n),
        (p.prototype._updateImpl = function () {
          if (
            (n.prototype._updateImpl.call(this),
            (this._renderer = null),
            !(this._source.points().length < 2) &&
              this._source.priceScale() &&
              !this._source.priceScale().isEmpty() &&
              !this._model.timeScale().isEmpty())
          ) {
            var e = this._source.points()[0],
              t = this._source.points()[1],
              i = this._source.properties(),
              d = i.reverse.value();
            this._hlevels = [];
            for (
              var p = d ? t.price - e.price : e.price - t.price,
                u = d ? e.price : t.price,
                _ = this._source.ownerSource().firstValue(),
                f = 1;
              f <= 7;
              f++
            ) {
              if ((b = i['hlevel' + f]).visible.value()) {
                var v = b.coeff.value(),
                  g = b.color.value(),
                  y = u + v * p,
                  w = this._source.priceScale().priceToCoordinate(y, _);
                this._hlevels.push({ coeff: v, color: g, y: w, index: f });
              }
            }
            this._vlevels = [];
            var x = d ? t.index - e.index : e.index - t.index,
              m = d ? e.index : t.index;
            for (f = 1; f <= 7; f++) {
              var b;
              if ((b = i['vlevel' + f]).visible.value()) {
                (v = b.coeff.value()), (g = b.color.value());
                var R = Math.round(m + v * x),
                  T = this._model.timeScale().indexToCoordinate(R, !0);
                this._vlevels.push({ coeff: v, color: g, x: T, index: f });
              }
            }
            if (!(this._floatPoints.length < 2)) {
              var S = new h(),
                P =
                  ((e = this._floatPoints[0]),
                  (t = this._floatPoints[1]),
                  Math.min(e.x, t.x)),
                L = Math.min(e.y, t.y),
                C = Math.max(e.x, t.x),
                M = Math.max(e.y, t.y),
                I = i.grid.color.value(),
                O = i.grid.linewidth.value(),
                D = i.grid.linestyle.value();
              for (f = 0; f < this._hlevels.length; f++) {
                (e = new r(P, this._hlevels[f].y)),
                  (t = new r(C, this._hlevels[f].y));
                if (i.grid.visible.value()) {
                  var k = {
                    points: [e, t],
                    width: this._model.timeScale().width(),
                    height: this._source.priceScale().height(),
                    color: I,
                    linewidth: O,
                    linestyle: D,
                    extendleft: !1,
                    extendright: !1,
                    leftend: c.Normal,
                    rightend: c.Normal,
                  };
                  (Y = new o()).setData(k), S.append(Y);
                }
                if (i.showLeftLabels.value()) {
                  var B = {
                    points: [e],
                    text: this._numericFormatter.format(this._hlevels[f].coeff),
                    color: this._hlevels[f].color,
                    vertAlign: 'middle',
                    horzAlign: 'right',
                    font: i.font.value(),
                    offsetX: 5,
                    offsetY: 0,
                    fontsize: 12,
                    forceTextAlign: !0,
                  };
                  S.append(new s(B));
                }
                if (i.showRightLabels.value()) {
                  var N = {
                    points: [t],
                    text: this._numericFormatter.format(this._hlevels[f].coeff),
                    color: this._hlevels[f].color,
                    vertAlign: 'middle',
                    horzAlign: 'left',
                    font: i.font.value(),
                    offsetX: 5,
                    offsetY: 0,
                    fontsize: 12,
                    forceTextAlign: !0,
                  };
                  S.append(new s(N));
                }
              }
              for (f = 0; f < this._vlevels.length; f++) {
                (e = new r(this._vlevels[f].x, L)),
                  (t = new r(this._vlevels[f].x, M));
                if (i.grid.visible.value()) {
                  k = {
                    points: [e, t],
                    width: this._model.timeScale().width(),
                    height: this._source.priceScale().height(),
                    color: I,
                    linewidth: O,
                    linestyle: D,
                    extendleft: !1,
                    extendright: !1,
                    leftend: c.Normal,
                    rightend: c.Normal,
                  };
                  (Y = new o()).setData(k), S.append(Y);
                }
                if (i.showTopLabels.value()) {
                  var A = {
                    points: [e],
                    text: this._numericFormatter.format(this._vlevels[f].coeff),
                    color: this._vlevels[f].color,
                    vertAlign: 'bottom',
                    horzAlign: 'center',
                    font: i.font.value(),
                    offsetX: 0,
                    offsetY: 5,
                    fontsize: 12,
                  };
                  S.append(new s(A));
                }
                if (i.showBottomLabels.value()) {
                  var z = {
                    points: [t],
                    text: this._numericFormatter.format(this._vlevels[f].coeff),
                    color: this._vlevels[f].color,
                    vertAlign: 'top',
                    horzAlign: 'center',
                    font: i.font.value(),
                    offsetX: 0,
                    offsetY: 5,
                    fontsize: 12,
                  };
                  S.append(new s(z));
                }
              }
              var E = i.fillBackground.value(),
                V = i.transparency.value();
              for (
                e = this._floatPoints[0], t = this._floatPoints[1], f = 0;
                f < this._hlevels.length;
                f++
              ) {
                var j = new r(t.x, this._hlevels[f].y);
                if (f > 0 && E) {
                  var H = new r(t.x, this._hlevels[f - 1].y);
                  ((F = {}).width = this._model.timeScale().width()),
                    (F.height = this._source.priceScale().height()),
                    (F.p1 = e),
                    (F.p2 = j),
                    (F.p3 = e),
                    (F.p4 = H),
                    (F.color = this._hlevels[f].color),
                    (F.transparency = V),
                    (F.hittestOnBackground = !0),
                    (Y = new a()).setData(F),
                    S.append(Y);
                }
                k = {
                  points: [e, j],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: this._hlevels[f].color,
                  linewidth: i.linewidth.value(),
                  linestyle: i.linestyle.value(),
                  extendleft: !1,
                  extendright: !0,
                  leftend: c.Normal,
                  rightend: c.Normal,
                };
                (Y = new o()).setData(k),
                  Y.setHitTest(
                    new l(l.MOVEPOINT, null, {
                      type: 'h',
                      index: this._hlevels[f].index,
                    }),
                  ),
                  S.append(Y);
              }
              for (f = 0; f < this._vlevels.length; f++) {
                var W = new r(this._vlevels[f].x, t.y);
                if (f > 0 && E) {
                  var F;
                  H = new r(this._vlevels[f - 1].x, t.y);
                  ((F = {}).width = this._model.timeScale().width()),
                    (F.height = this._source.priceScale().height()),
                    (F.p1 = e),
                    (F.p2 = W),
                    (F.p3 = e),
                    (F.p4 = H),
                    (F.color = this._vlevels[f].color),
                    (F.transparency = V),
                    (F.hittestOnBackground = !0),
                    (Y = new a()).setData(F),
                    S.append(Y);
                }
                var Y;
                k = {
                  points: [e, W],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: this._vlevels[f].color,
                  linewidth: i.linewidth.value(),
                  linestyle: i.linestyle.value(),
                  extendleft: !1,
                  extendright: !0,
                  leftend: c.Normal,
                  rightend: c.Normal,
                };
                (Y = new o()).setData(k),
                  Y.setHitTest(
                    new l(l.MOVEPOINT, null, {
                      type: 'v',
                      index: this._vlevels[f].index,
                    }),
                  ),
                  S.append(Y);
              }
              this.addAnchors(S), (this._renderer = S);
            }
          }
        }),
        (p.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.FibSpeedResistanceFanPaneView = p);
    },
    'y/56': function (e, t, i) {
      'use strict';
      i.r(t);
      var r = i('mrSG'),
        n = i('aB9a'),
        a = i('Zy3/'),
        s = i('vq8G'),
        o = i('VdBB'),
        l = i('f6yo'),
        h = i('jFln'),
        d = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t._data = null), t;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.setData = function (e) {
              this._data = e;
            }),
            (t.prototype.hitTest = function (e) {
              if (null === this._data) return null;
              var t = this._data.point,
                i = t.x,
                r = t.y;
              return e.x < i || e.x > i + 20 || e.y < r - 22 || e.y > r
                ? null
                : new o.HitTestResult(o.HitTestResult.MOVEPOINT);
            }),
            (t.prototype.doesIntersectWithBox = function (e) {
              return (
                null !== this._data && Object(l.pointInBox)(this._data.point, e)
              );
            }),
            (t.prototype._drawImpl = function (e) {
              null !== this._data &&
                (e.save(),
                e.translate(
                  Math.round(this._data.point.x) - 0.5,
                  Math.round(this._data.point.y - 22) - 0.5,
                ),
                (e.fillStyle = '#434651'),
                Object(h.drawRoundRect)(e, 0, 0, 2, 22, 1),
                e.fill(),
                (e.fillStyle = this._data.color),
                e.beginPath(),
                e.moveTo(6.87, 0),
                e.bezierCurveTo(5.62, 0, 4.46, 0.23, 3.32, 0.69),
                e.bezierCurveTo(3.26, 0.71, 3.2, 0.75, 3.15, 0.8),
                e.bezierCurveTo(3.06, 0.89, 3, 1.02, 3, 1.16),
                e.lineTo(3, 1.19),
                e.lineTo(3, 12.5),
                e.bezierCurveTo(3, 12.8, 3.3, 13.02, 3.59, 12.93),
                e.bezierCurveTo(4.61, 12.64, 5.94, 12.44, 6.87, 12.44),
                e.bezierCurveTo(8.5, 12.44, 10.09, 12.83, 11.63, 13.21),
                e.bezierCurveTo(13.19, 13.6, 14.79, 14, 16.45, 14),
                e.bezierCurveTo(17.59, 14, 18.65, 13.81, 19.69, 13.43),
                e.bezierCurveTo(19.88, 13.36, 20, 13.18, 20, 12.98),
                e.lineTo(20, 1.19),
                e.bezierCurveTo(20, 1.06, 19.83, 0.93, 19.66, 0.99),
                e.bezierCurveTo(18.63, 1.38, 17.58, 1.56, 16.45, 1.56),
                e.bezierCurveTo(14.82, 1.56, 13.23, 1.17, 11.69, 0.79),
                e.bezierCurveTo(10.14, 0.4, 8.53, 0, 6.87, 0),
                e.closePath(),
                e.fill(),
                e.restore());
            }),
            t
          );
        })(i('cPgM').ScaledPaneRenderer);
      i.d(t, 'FlagMarkPaneView', function () {
        return c;
      });
      var c = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t._flagMarkRenderer = new d()),
            (t._renderer = null),
            (t._anchorsOffset = null),
            t
          );
        }
        return (
          Object(r.__extends)(t, e),
          (t.prototype.setAnchors = function (e) {
            this._anchorsOffset = e;
          }),
          (t.prototype.renderer = function (e, t) {
            return this._invalidated && this._updateImpl(), this._renderer;
          }),
          (t.prototype._updateImpl = function () {
            if (
              (e.prototype._updateImpl.call(this),
              (this._renderer = null),
              1 === this._points.length)
            ) {
              this._flagMarkRenderer.setData({
                point: this._points[0],
                color: this._getSource()
                  .properties()
                  .childs()
                  .flagColor.value(),
              });
              var t = this._getModel();
              (this._renderer = new a.CompositeRenderer()),
                this._renderer.append(this._flagMarkRenderer);
              var i = [
                this._anchorsOffset
                  ? this._points[0].add(this._anchorsOffset)
                  : this._points[0].clone(),
              ];
              this._renderer.append(
                new s.SelectionRenderer({
                  points: i,
                  bgColors: this._lineAnchorColors(i),
                  visible: this.areAnchorsVisible(),
                  barSpacing: t.timeScale().barSpacing(),
                  hittestResult: o.HitTestResult.MOVEPOINT,
                }),
              );
            }
          }),
          t
        );
      })(n.LineSourcePaneView);
    },
  },
]);
