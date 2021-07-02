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
        o = i('VaSN'),
        s = i('cPgM'),
        l = i('VdBB'),
        h = i('Tmoa'),
        d = i('jFln'),
        c = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t._data = null), t;
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.setData = function (e) {
              this._data = e;
            }),
            (t.prototype.hitTest = function (e) {
              if (null === this._data || this._data.points.length < 2)
                return null;
              var t = this._data.points,
                i = t[0],
                r = t[1],
                s = Object(n.distanceToSegment)(i, r, e),
                h = Object(o.lastEventIsTouch)() ? 24 : 3;
              if (s.distance <= h)
                return new l.HitTestResult(l.HitTestResult.MOVEPOINT);
              if (3 !== this._data.points.length) return null;
              var d = this._data.points[2];
              return (s = Object(n.distanceToSegment)(r, d, e)).distance <= h ||
                (s = Object(n.distanceToSegment)(d, i, e)).distance <= h
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
        })(s.ScaledPaneRenderer);
    },
    '00XE': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'BrushPaneView', function () {
          return a;
        });
      var r = i('mrSG'),
        n = i('8Uy/'),
        a = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.c)(t, e),
            (t.prototype._createPolygonRendererData = function () {
              var e = this._source.properties().childs(),
                t = {
                  points: this._points,
                  color: e.linecolor.value(),
                  linewidth: e.linewidth.value(),
                  linestyle: n.LINESTYLE_SOLID,
                  linecap: 'round',
                  skipClosePath: !0,
                  leftend: e.leftEnd.value(),
                  rightend: e.rightEnd.value(),
                  filled: !1,
                  fillBackground: !1,
                  backcolor: e.backgroundColor.value(),
                };
              return (
                e.fillBackground.value() &&
                  this._model.lineBeingCreated() !== this._source &&
                  ((t.filled = !0),
                  (t.fillBackground = !0),
                  (t.transparency = e.transparency.value())),
                t
              );
            }),
            t
          );
        })(i('hzaj').a);
    },
    '0s1X': function (e, t, i) {
      'use strict';
      i.r(t);
      var r = i('mrSG'),
        n = i('Eyy1'),
        a = i('aO4+'),
        o = i('HGP3'),
        s = i('Zy3/'),
        l = i('qgcf'),
        h = i('aB9a'),
        d = i('GEp6'),
        c = i('8Uy/'),
        u = i('jFln'),
        p = i('zDbI'),
        _ = i('VaSN'),
        f = i('VdBB');
      function v(e, t, i, r) {
        e.beginPath(), e.arc(t, i, r, 0, 2 * Math.PI, !0), e.closePath();
      }
      var g = (function () {
        function e() {
          (this._data = null),
            (this._priceLabelRenderer = new l.TextRenderer(
              void 0,
              new f.HitTestResult(f.HitTestResult.MOVEPOINT, {
                areaName: 'Style',
                itemIndex: 1,
              }),
            )),
            (this._hittest = new f.HitTestResult(f.HitTestResult.MOVEPOINT, {
              areaName: 'Style',
            }));
        }
        return (
          (e.prototype.setData = function (e) {
            this._data = e;
            var t = e.points[0],
              i = e.points[1],
              n = Math.round(
                (180 * Math.atan2(i.y - t.y, i.x - t.x)) / Math.PI,
              );
            this._priceLabelRenderer.setData(
              Object(r.a)(
                Object(r.a)(
                  {},
                  (function (e) {
                    var t, i;
                    return (
                      e >= -135 && e <= -45
                        ? ((t = 'center'), (i = 'bottom'))
                        : e > -45 && e < 45
                        ? ((t = 'left'), (i = 'middle'))
                        : e >= 45 && e <= 135
                        ? ((t = 'center'), (i = 'top'))
                        : ((t = 'right'), (i = 'middle')),
                      { horzAlign: t, vertAlign: i }
                    );
                  })(n),
                ),
                {
                  points: [i],
                  text: e.text,
                  color: e.textColor,
                  font: p.CHART_FONT_FAMILY,
                  fontSize: e.fontSize,
                  bold: e.bold,
                  italic: e.italic,
                  offsetX: 0,
                  offsetY: 0,
                  borderColor: e.borderColor,
                  borderWidth: 1,
                  backgroundColor: e.backgroundColor,
                  backgroundRoundRect: 4,
                  boxPaddingVert: 6,
                  boxPaddingHorz: 8,
                },
              ),
            );
          }),
          (e.prototype.setHitTest = function (e) {
            this._hittest = e;
          }),
          (e.prototype.draw = function (e, t) {
            var i = this._data;
            if (!(null === i || i.points.length < 2)) {
              e.save();
              var r = t.pixelRatio,
                n = Math.round(i.points[0].x * r),
                a = Math.round(i.points[0].y * r),
                o = Math.round(i.points[1].x * r),
                s = Math.round(i.points[1].y * r);
              (e.lineCap = 'butt'),
                Object(u.setLineStyle)(e, c.LINESTYLE_SOLID),
                (e.strokeStyle = i.lineColor),
                (e.fillStyle = i.lineColor),
                (e.lineWidth = Math.round(1 * r));
              var l = (function (e, t) {
                var i = Math.max(1, Math.floor(t)) % 2 ? 0.5 : 0;
                return Math.round(e * t) + i;
              })(2, r);
              v(e, n, a, l),
                e.fill(),
                Object(u.drawLine)(e, n, a, o, s),
                this._priceLabelRenderer.draw(e, t);
              var h = 1 * r;
              (e.strokeStyle = i.circleBorderColor),
                (e.lineWidth = h),
                v(e, n, a, l + h / 2),
                e.stroke(),
                e.restore();
            }
          }),
          (e.prototype.hitTest = function (e) {
            var t = this._data;
            if (null === t) return null;
            var i = Object(_.lastEventIsTouch)() ? 20 : 3;
            return Object(d.distanceToSegment)(t.points[0], t.points[1], e)
              .distance <= i
              ? this._hittest
              : this._priceLabelRenderer.hitTest(e);
          }),
          e
        );
      })();
      i.d(t, 'PriceNotePaneView', function () {
        return y;
      });
      var y = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t._renderer = new s.CompositeRenderer()),
            (t._priceNoteRenderer = new g()),
            (t._customLabelRenderer = new l.TextRenderer()),
            t
          );
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.renderer = function (e, t) {
            return this._invalidated && this._updateImpl(), this._renderer;
          }),
          (t.prototype._updateImpl = function () {
            e.prototype._updateImpl.call(this), this._renderer.clear();
            var t = this._source.priceScale();
            if (t && !t.isEmpty()) {
              var i = this._points;
              if (!(i.length < 2)) {
                var r = this._source.properties().childs(),
                  s = this._model.isDark()
                    ? o.a['color-cold-gray-900']
                    : o.a['color-white'],
                  l = this._source.points()[0].price,
                  h = Object(n.ensureNotNull)(
                    this._source.ownerSource(),
                  ).firstValue(),
                  d = t.formatPrice(l, h);
                if (
                  (this._priceNoteRenderer.setData({
                    text: d,
                    points: i,
                    lineColor: r.lineColor.value(),
                    circleBorderColor: s,
                    backgroundColor: r.priceLabelBackgroundColor.value(),
                    borderColor: r.priceLabelBorderColor.value(),
                    textColor: r.priceLabelTextColor.value(),
                    fontSize: r.priceLabelFontSize.value(),
                    bold: r.priceLabelBold.value(),
                    italic: r.priceLabelItalic.value(),
                  }),
                  this._renderer.append(this._priceNoteRenderer),
                  this._renderer.append(this.createLineAnchor({ points: i })),
                  r.showLabel && r.showLabel.value())
                ) {
                  var c = i[0],
                    u = i[1],
                    _ = c.x < u.x ? c : u,
                    f = _ === c ? u : c,
                    v = r.vertLabelsAlign.value(),
                    g = r.horzLabelsAlign.value(),
                    y = void 0;
                  y =
                    'left' === g
                      ? _.clone()
                      : 'right' === g
                      ? f.clone()
                      : new a.Point((c.x + u.x) / 2, (c.y + u.y) / 2);
                  var w = Math.atan((f.y - _.y) / (f.x - _.x)),
                    m = {
                      points: [y],
                      text: r.text.value(),
                      color: r.textColor.value(),
                      vertAlign: v,
                      horzAlign: g,
                      font: p.CHART_FONT_FAMILY,
                      offsetX: 0,
                      offsetY: 0,
                      bold: r.bold.value(),
                      italic: r.italic.value(),
                      fontsize: r.fontSize.value(),
                      forceTextAlign: !0,
                      angle: w,
                    };
                  this._customLabelRenderer.setData(m),
                    this._renderer.append(this._customLabelRenderer);
                }
              }
            }
          }),
          t
        );
      })(h.LineSourcePaneView);
    },
    '1SUO': function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('pJOz').TrendLineRenderer,
        a = i('cjIn').PaneRendererCachedImage,
        o = i('VdBB').HitTestResult,
        s = i('Zy3/').CompositeRenderer,
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
              o = n.subtract(t).normalized(),
              s = new r(1, 0),
              l = new r(0, 1),
              h = Math.acos(a.dotProduct(s));
            a.dotProduct(l) < 0 && (h = 2 * Math.PI - h), (this._edge1 = h);
            var c = Math.acos(o.dotProduct(s));
            o.dotProduct(l) < 0 && (c = 2 * Math.PI - c),
              (this._edge2 = c),
              h < c &&
                ((this._edge1 = Math.max(h, c)),
                (this._edge2 = Math.min(h, c) + 2 * Math.PI)),
              Math.abs(h - c) > Math.PI &&
                ((this._edge1 = Math.min(h, c)),
                (this._edge2 = Math.max(h, c) - 2 * Math.PI));
            for (
              var u = this._source.properties(), p = 1;
              p <= this._source.levelsCount();
              p++
            ) {
              var _ = u['level' + p];
              if (_.visible.value()) {
                var f = _.coeff.value(),
                  v = _.color.value(),
                  g = i.subtract(t).length() * f,
                  y = a.add(o).scaled(0.5).normalized().scaled(g),
                  w = t.add(y);
                this._levels.push({
                  coeff: f,
                  color: v,
                  radius: g,
                  labelPoint: w,
                  p1: t.add(a.scaled(g)),
                  p2: t.add(o.scaled(g)),
                  linewidth: _.linewidth.value(),
                  linestyle: _.linestyle.value(),
                  index: p,
                });
              }
            }
            this._points.length < 2 || this._updateRenderer();
          }
        }),
        (c.prototype._updateRenderer = function () {
          if (!((w = this._points).length < 2)) {
            var e = new s(),
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
              u = r.subtract(i).length(),
              p = d.subtract(i).normalized();
            ((d = i.add(p.scaled(u))).data = c),
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
                g.setHitTest(new o(o.MOVEPOINT, null, f.index)),
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
        o = i('Zy3/').CompositeRenderer,
        s = i('gAom').drawHorizontalLine,
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
            o = Math.max(r, this._data.points[0].x);
          (e.lineCap = 'butt'),
            (e.strokeStyle = this._data.color),
            (e.lineWidth = Math.max(1, Math.floor(this._data.linewidth * i))),
            void 0 !== this._data.linestyle && l(e, this._data.linestyle),
            s(e, Math.round(n * i), Math.round(a * i), Math.round(o * i));
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
            t = new o(),
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
              s = e.horzLabelsAlign.value(),
              l = this._points[0].clone(),
              h = 0,
              d = e.text.value(),
              c = e.bold.value(),
              u = e.italic.value(),
              p = e.font.value(),
              _ = e.fontsize.value();
            if ('right' === s) {
              this._labelRenderer.setData({
                text: d,
                font: p,
                bold: c,
                italic: u,
                fontsize: _,
              });
              var f = this._labelRenderer.measure().width,
                v = this._model.timeScale().width();
              l.x + f + 3 >= v ? (l.x += f + 3) : ((l.x = v), (h = 3));
            } else
              'center' === s &&
                (l.x = (l.x + this._model.timeScale().width()) / 2);
            var g = {
              points: [l],
              text: d,
              color: e.textcolor.value(),
              vertAlign: n,
              horzAlign: s,
              font: p,
              offsetX: h,
              offsetY: 0,
              bold: c,
              italic: u,
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
      i.d(t, 'c', function () {
        return n;
      }),
        i.d(t, 'a', function () {
          return a;
        }),
        i.d(t, 'b', function () {
          return o;
        });
      var r = i('GEp6');
      function n(e, t, i, n, a) {
        for (
          var o,
            s = i.subtract(e).length() + i.subtract(t).length(),
            l = Math.max(3 / s, 0.02),
            h = 0;
          ;
          h += l
        ) {
          h > 1 && (h = 1);
          var d = e.scaled((1 - h) * (1 - h)),
            c = i.scaled(2 * h * (1 - h)),
            u = t.scaled(h * h),
            p = d.add(c).add(u);
          if (void 0 !== o) {
            if (Object(r.distanceToSegment)(p, o, n).distance < a) return !0;
          } else if (p.subtract(n).length() < a) return !0;
          if (((o = p), 1 === h)) break;
        }
        return !1;
      }
      function a(e, t, i, n, a, o) {
        for (
          var s,
            l =
              i.subtract(e).length() +
              n.subtract(i).length() +
              t.subtract(n).length(),
            h = Math.max(3 / l, 0.02),
            d = 0;
          ;
          d += h
        ) {
          d > 1 && (d = 1);
          var c = e.scaled((1 - d) * (1 - d) * (1 - d)),
            u = i.scaled(3 * (1 - d) * (1 - d) * d),
            p = n.scaled(3 * (1 - d) * d * d),
            _ = t.scaled(d * d * d),
            f = c.add(u).add(p).add(_);
          if (void 0 !== s) {
            if (Object(r.distanceToSegment)(f, s, a).distance < o) return !0;
          } else if (f.subtract(a).length() < o) return !0;
          if (((s = f), 1 === d)) break;
        }
        return !1;
      }
      function o(e, t, i, r, n) {
        var a = i.subtract(e).length() + i.subtract(t).length();
        if (!a) return [];
        var o = (function (e, t, i, r, n) {
          for (
            var a = [],
              o = s(e.y, t.y, i.y, 0).concat(s(e.y, t.y, i.y, n)),
              h = 0;
            h < o.length;
            h++
          ) {
            var d = l(e.x, t.x, i.x, o[h]);
            d >= 0 && d <= r && a.push(o[h]);
          }
          var c = s(e.x, t.x, i.x, 0).concat(s(e.x, t.x, i.x, r));
          for (h = 0; h < c.length; h++) {
            var u = l(e.y, t.y, i.y, c[h]);
            u >= 0 && u <= n && a.push(c[h]);
          }
          return a;
        })(e, t, i, r, n)
          .filter(function (e) {
            return e > 1;
          })
          .sort(function (e, t) {
            return e - t;
          });
        t.x >= 0 && t.x <= r && t.y >= 0 && t.y <= n && o.unshift(1);
        for (var h = 3 / a, d = [], c = 0; c < o.length - 1; c += 2) {
          for (var u = h, p = o[c], _ = o[c + 1] + u, f = []; p <= _; ) {
            var v = e.scaled((1 - p) * (1 - p)),
              g = i.scaled(2 * p * (1 - p)),
              y = t.scaled(p * p),
              w = v.add(g).add(y);
            if (f.length > 0)
              f[f.length - 1].subtract(w).length() < 2 && ((_ += u), (u *= 2));
            f.push(w), (p += u);
          }
          f.length > 0 && d.push(f);
        }
        return d;
      }
      function s(e, t, i, r) {
        var n = [],
          a = e - 2 * i + t,
          o = 2 * i - 2 * e,
          s = e - r;
        if (Math.abs(a) > 1e-8) {
          var l = o * o - 4 * a * s;
          l >= 0 &&
            (n.push((-o + Math.sqrt(l)) / (2 * a)),
            n.push((-o - Math.sqrt(l)) / (2 * a)));
        } else n.push(-s / o);
        return n;
      }
      function l(e, t, i, r) {
        return (1 - r) * (1 - r) * e + 2 * (1 - r) * r * i + r * r * t;
      }
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
        o = i('f6yo'),
        s = i('GEp6'),
        l = i('hBTJ'),
        h = i('VdBB'),
        d = i('Tmoa'),
        c = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t._data = null), t;
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.setData = function (e) {
              this._data = e;
            }),
            (t.prototype.hitTest = function (e, t) {
              if (null === this._data || !this._data.hittestOnBackground)
                return null;
              var i = this._visiblePolygon(t);
              return null !== i && Object(o.pointInPolygon)(e, i)
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
                o = t.p3,
                l = t.p4;
              if (
                Object(a.equalPoints)(i, r) ||
                Object(a.equalPoints)(o, l) ||
                (Object(s.distanceToLine)(i, r, o).distance < 1e-6 &&
                  Object(s.distanceToLine)(i, r, l).distance < 1e-6)
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
                (h = u(h, i, r, [l, o])),
                (h = u(h, l, o, [i, r])),
                Object(a.equalPoints)(o, i) ||
                  t.extendLeft ||
                  (h = u(h, o, i, [r, l])),
                h
              );
            }),
            t
          );
        })(i('cPgM').ScaledPaneRenderer);
      function u(e, t, i, r) {
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
        o = i('qgcf').calculateLabelPosition,
        s = i('IjC5').RectangleRenderer,
        l = i('pJOz').TrendLineRenderer,
        h = i('Zy3/').CompositeRenderer,
        d = i('nda6').TimeSpanFormatter,
        c = i('a7Ha').LineEnd,
        u = i('Ialn'),
        p = u.forceLTRStr,
        _ = u.startWithLTR;
      function f(e, t) {
        n.call(this, e, t),
          (this._leftBorderRenderer = new l()),
          (this._rightBorderRenderer = new l()),
          (this._distancePriceRenderer = new l()),
          (this._backgroundRenderer = new s()),
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
              s = this._points[0],
              l = this._points[1],
              u = i ? 0 : Math.min(s.y, l.y),
              f = a ? this._height() : Math.max(s.y, l.y);
            if (t.fillBackground && t.fillBackground.value())
              ((C = {}).points = [new r(s.x, u), new r(l.x, f)]),
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
            g(this._leftBorderRenderer, new r(s.x, u), new r(s.x, f)),
              g(this._rightBorderRenderer, new r(l.x, u), new r(l.x, f));
            var y = Math.round((s.y + l.y) / 2),
              w = new r(s.x, y),
              m = new r(l.x, y);
            ((C = {}).points = [w, m]),
              (C.width = v._model.timeScale().width()),
              (C.height = v._source.priceScale().height()),
              (C.color = v._source.properties().linecolor.value()),
              (C.linewidth = v._source.properties().linewidth.value()),
              (C.linestyle = CanvasEx.LINESTYLE_SOLID),
              (C.extendleft = !1),
              (C.extendright = !1),
              (C.leftend = c.Normal),
              (C.rightend =
                Math.abs(w.x - m.x) >= 15 * C.linewidth ? c.Arrow : c.Normal),
              this._distancePriceRenderer.setData(C),
              e.append(this._distancePriceRenderer);
            var x = this._source.points()[0].index,
              b = this._source.points()[1].index,
              R = b - x,
              T = this._model.timeScale().indexToUserTime(x),
              S = this._model.timeScale().indexToUserTime(b),
              P = '';
            if (T && S) {
              var L = (S.valueOf() - T.valueOf()) / 1e3;
              P = ', ' + _(new d().format(L));
            }
            var C,
              M = window.t('{0} bars').format(p(R)) + P,
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
              D = o(O, s, l, I, v._source.priceScale().height());
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
      i.r(t),
        i.d(t, 'cacheIsValid', function () {
          return d;
        }),
        i.d(t, 'BezierQuadroPaneView', function () {
          return c;
        });
      var r = i('mrSG'),
        n = i('Eyy1'),
        a = i('Tmoa'),
        o = i('aB9a'),
        s = i('Zy3/'),
        l = i('2hKl'),
        h = i('e9yB');
      function d(e, t, i, r, n, a) {
        return (
          null !== e &&
          e.p1.x === t.x &&
          e.p1.y === t.y &&
          e.p2.x === i.x &&
          e.p2.y === i.y &&
          e.p3.x === r.x &&
          e.p3.y === r.y &&
          e.width === n &&
          e.height === a
        );
      }
      var c = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t._bezierQuadroRenderer = new h.a()),
            (t._renderer = null),
            (t._extendedSegmentLeftCache = null),
            (t._extendedSegmentRightCache = null),
            t
          );
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.renderer = function (e, t) {
            return this._invalidated && this._updateImpl(e, t), this._renderer;
          }),
          (t.prototype._updateImpl = function (t, i) {
            if (
              (e.prototype._updateImpl.call(this, t, i),
              (this._renderer = null),
              !(this._points.length < 2))
            ) {
              var r = this._source.properties().childs(),
                n = [],
                o = [];
              if (3 === this._source.points().length) {
                var l = this._source.pointToScreenPoint(
                    this._source.points()[0],
                  )[1],
                  h = this._source.pointToScreenPoint(
                    this._source.points()[1],
                  )[1],
                  d = this._source.pointToScreenPoint(
                    this._source.points()[2],
                  )[1],
                  c = h.subtract(l),
                  u = d.subtract(c.scaled(0.25)),
                  p = d.add(c.scaled(0.25));
                r.extendLeft.value() &&
                  (n = this._extendSegmentLeft(d, l, u, i, t)),
                  r.extendRight.value() &&
                    (o = this._extendSegmentRight(d, h, p, i, t));
              }
              var _ = this._points.slice(),
                f = this._source.controlPoint();
              null !== f && _.push(this._source.pointToScreenPoint(f)[0]);
              var v = {
                points: _,
                color: r.linecolor.value(),
                lineWidth: r.linewidth.value(),
                lineStyle: r.linestyle.value(),
                leftEnd: r.leftEnd.value(),
                rightEnd: r.rightEnd.value(),
                fillBack: r.fillBackground.value(),
                backColor: Object(a.generateColor)(
                  r.backgroundColor.value(),
                  r.transparency.value(),
                ),
                extendLeftSegments: n,
                extendRightSegments: o,
              };
              this._bezierQuadroRenderer.setData(v);
              var g = new s.CompositeRenderer();
              g.append(this._bezierQuadroRenderer),
                this.addAnchors(g),
                (this._renderer = g);
            }
          }),
          (t.prototype._extendSegmentLeft = function (e, t, i, r, a) {
            return (
              d(this._extendedSegmentLeftCache, e, t, i, r, a) ||
                (this._extendedSegmentLeftCache = {
                  p1: e,
                  p2: t,
                  p3: i,
                  width: r,
                  height: a,
                  segment: Object(l.b)(e, t, i, r, a),
                }),
              Object(n.ensureNotNull)(this._extendedSegmentLeftCache).segment
            );
          }),
          (t.prototype._extendSegmentRight = function (e, t, i, r, a) {
            return (
              d(this._extendedSegmentRightCache, e, t, i, r, a) ||
                (this._extendedSegmentRightCache = {
                  p1: e,
                  p2: t,
                  p3: i,
                  width: r,
                  height: a,
                  segment: Object(l.b)(e, t, i, r, a),
                }),
              Object(n.ensureNotNull)(this._extendedSegmentRightCache).segment
            );
          }),
          t
        );
      })(o.LineSourcePaneView);
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
        o = i('qFKp'),
        s = i('qgcf'),
        l = i('VdBB'),
        h = i('jFln'),
        d = i('ogJP'),
        c = i('ikwP'),
        u = i('aIyQ'),
        p = i.n(u),
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
              (this._onAllIconsLoaded = new p.a()),
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
                  : Object(s.wordWrap)(
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
                  !o.isIE && this._data.icons)
                )
                  for (
                    var n = 0,
                      s = Math.ceil((g - this._fontSize) / 2),
                      l = Object(a.ensureNotNull)(this._padding),
                      d = 0,
                      c = this._data.icons;
                    d < c.length;
                    d++
                  ) {
                    var u = c[d],
                      p = Math.round(r.x + l.left),
                      _ = Math.round(r.y + l.top + i * n - s);
                    this._drawIcon(e, p, _, u, Boolean(this._data.isDark), t),
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
              for (var w = 0, m = this._lines; w < m.length; w++) {
                var x = m[w];
                e.fillText(x, v, y), (y += i);
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
                  s = this._fontSize,
                  l = this._lineSpacing,
                  h = (s + l) * this._lines.length - l;
                (e.textBaseline = 'top'), (e.font = this.fontStyle());
                var d,
                  u = [];
                if (this._data.wordWrapWidth) {
                  d = this._data.wordWrapWidth;
                  for (var p = 0; p < this._lines.length; p++)
                    u.push(this._data.wordWrapWidth);
                } else {
                  d = 0;
                  for (p = 0; p < this._lines.length; p++) {
                    var f = e.measureText(this._lines[p]).width;
                    u.push(f), (d = Math.max(d, f));
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
                  ((i += v.left), (a += v.top), !o.isIE && this._data.icons)
                ) {
                  var w =
                    void 0 !== this._data.textPadding
                      ? this._data.textPadding
                      : Math.round(s / 2);
                  (i += g + w), (y.w += g + w);
                }
                if (
                  'bottom' === this._data.vertAlign ||
                  'middle' === this._data.vertAlign
                ) {
                  var m =
                    'middle' === this._data.vertAlign
                      ? n - y.h / 2
                      : n - y.h - (y.y - n);
                  (a += m - y.y), (y.y = m);
                }
                if (
                  'right' === this._data.horzAlign ||
                  'center' === this._data.horzAlign
                ) {
                  var x =
                    'center' === this._data.horzAlign
                      ? t - y.w / 2
                      : t - y.w - (y.x - t);
                  (i += x - y.x),
                    (y.x = x),
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
                  this._textSizeCache && (this._textSizeCache.widths = u),
                  (this._preRendered = !0);
              }
            }),
            (e.prototype._drawIcon = function (e, t, i, r, n, s) {
              var l = '' + r + this._data.isDark + s.pixelRatio,
                h = y.get(l);
              if (!h) {
                ((h = document.createElement('canvas')).width =
                  g * s.pixelRatio),
                  (h.height = g * s.pixelRatio),
                  (h.style.width = g + 'px'),
                  (h.style.height = g + 'px');
                var d = Object(a.ensureNotNull)(h.getContext('2d'));
                d.setTransform(1, 0, 0, 1, 0, 0),
                  o.isEdge || d.scale(s.pixelRatio, s.pixelRatio);
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
      i.r(t),
        i.d(t, 'Pattern5pointsPaneView', function () {
          return p;
        });
      var r = i('mrSG'),
        n = i('8Uy/'),
        a = i('a7Ha'),
        o = i('Zy3/'),
        s = i('qgcf'),
        l = i('/S7V'),
        h = i('pJOz'),
        d = i('zXvd'),
        c = i('VdBB'),
        u = i('BCbF'),
        p = (function (e) {
          function t(t, i) {
            var r = e.call(this, t, i) || this;
            return (
              (r._abRetracement = NaN),
              (r._bcRetracement = NaN),
              (r._cdRetracement = NaN),
              (r._xdRetracement = NaN),
              (r._numericFormatter = new d.NumericFormatter()),
              (r._bcRetracementTrend = new h.TrendLineRenderer()),
              (r._xdRetracementTrend = new h.TrendLineRenderer()),
              (r._xbTrend = new h.TrendLineRenderer()),
              (r._bdTrend = new h.TrendLineRenderer()),
              (r._polylineRenderer = new u.PolygonRenderer(
                new c.HitTestResult(c.HitTestResult.MOVEPOINT),
              )),
              (r._mainTriangleRenderer = new l.TriangleRenderer()),
              (r._triangleRendererPoints234 = new l.TriangleRenderer()),
              (r._xbLabelRenderer = new s.TextRenderer()),
              (r._acLabelRenderer = new s.TextRenderer()),
              (r._bdLabelRenderer = new s.TextRenderer()),
              (r._xdLabelRenderer = new s.TextRenderer()),
              (r._textRendererALabel = new s.TextRenderer()),
              (r._textRendererBLabel = new s.TextRenderer()),
              (r._textRendererCLabel = new s.TextRenderer()),
              (r._textRendererDLabel = new s.TextRenderer()),
              (r._textRendererXLabel = new s.TextRenderer()),
              (r._renderer = null),
              r
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.renderer = function (e, t) {
              return this._invalidated && this._updateImpl(), this._renderer;
            }),
            (t.prototype._updateImpl = function () {
              if (
                (e.prototype._updateImpl.call(this),
                this._updateBaseData(),
                (this._renderer = null),
                !(this._points.length < 2))
              ) {
                var t = this._source.properties().childs(),
                  i = new o.CompositeRenderer(),
                  r = function (e, i) {
                    return {
                      points: [e],
                      text: i,
                      color: t.textcolor.value(),
                      vertAlign: 'middle',
                      horzAlign: 'center',
                      font: t.font.value(),
                      offsetX: 0,
                      offsetY: 0,
                      bold: t.bold && t.bold.value(),
                      italic: t.italic && t.italic.value(),
                      fontsize: t.fontsize.value(),
                      backgroundColor: t.color.value(),
                      backgroundRoundRect: 4,
                    };
                  },
                  s = function (e, i) {
                    return {
                      points: [e, i],
                      color: t.color.value(),
                      linewidth: 1,
                      linestyle: n.LINESTYLE_DOTTED,
                      extendleft: !1,
                      extendright: !1,
                      leftend: a.LineEnd.Normal,
                      rightend: a.LineEnd.Normal,
                    };
                  },
                  l = this._points,
                  h = l[0],
                  d = l[1],
                  c = l[2],
                  u = l[3],
                  p = l[4],
                  _ = {
                    points: [h, d, this._points.length < 3 ? d : c],
                    color: 'rgba(0, 0, 0, 0)',
                    linewidth: t.linewidth.value(),
                    backcolor: t.backgroundColor.value(),
                    fillBackground: t.fillBackground.value(),
                    transparency: t.transparency.value(),
                  };
                if (
                  (this._mainTriangleRenderer.setData(_),
                  i.append(this._mainTriangleRenderer),
                  this._points.length > 3)
                ) {
                  var f = {
                    points: [c, u, 5 === this._points.length ? p : u],
                    color: 'rgba(0, 0, 0, 0)',
                    linewidth: t.linewidth.value(),
                    backcolor: t.backgroundColor.value(),
                    fillBackground: t.fillBackground.value(),
                    transparency: t.transparency.value(),
                  };
                  this._triangleRendererPoints234.setData(f),
                    i.append(this._triangleRendererPoints234);
                }
                var v = {
                  points: this._points,
                  color: t.color.value(),
                  linewidth: t.linewidth.value(),
                  backcolor: t.backgroundColor.value(),
                  fillBackground: !1,
                  linestyle: n.LINESTYLE_SOLID,
                  filled: !1,
                };
                if (
                  (this._polylineRenderer.setData(v),
                  i.append(this._polylineRenderer),
                  this._points.length >= 3)
                ) {
                  var g = r(
                    h.add(c).scaled(0.5),
                    this._numericFormatter.format(this._abRetracement),
                  );
                  this._xbLabelRenderer.setData(g),
                    i.append(this._xbLabelRenderer),
                    this._xbTrend.setData(s(h, c)),
                    i.append(this._xbTrend);
                }
                if (this._points.length >= 4) {
                  this._bcRetracementTrend.setData(s(d, u)),
                    i.append(this._bcRetracementTrend);
                  g = r(
                    d.add(u).scaled(0.5),
                    this._numericFormatter.format(this._bcRetracement),
                  );
                  this._acLabelRenderer.setData(g),
                    i.append(this._acLabelRenderer);
                }
                if (this._points.length >= 5) {
                  var y = r(
                    c.add(p).scaled(0.5),
                    this._numericFormatter.format(this._cdRetracement),
                  );
                  this._bdLabelRenderer.setData(y),
                    i.append(this._bdLabelRenderer),
                    this._xdRetracementTrend.setData(s(h, p)),
                    i.append(this._xdRetracementTrend);
                  var w = r(
                    h.add(p).scaled(0.5),
                    this._numericFormatter.format(this._xdRetracement),
                  );
                  this._xdLabelRenderer.setData(w),
                    i.append(this._xdLabelRenderer),
                    this._bdTrend.setData(s(c, p)),
                    i.append(this._bdTrend);
                }
                var m = r(h, 'X');
                d.y > h.y
                  ? ((m.vertAlign = 'bottom'), (m.offsetY = 5))
                  : ((m.vertAlign = 'top'), (m.offsetY = 5)),
                  this._textRendererXLabel.setData(m),
                  i.append(this._textRendererXLabel);
                var x = r(d, 'A');
                if (
                  (d.y < h.y
                    ? ((x.vertAlign = 'bottom'), (x.offsetY = 5))
                    : ((x.vertAlign = 'top'), (x.offsetY = 5)),
                  this._textRendererALabel.setData(x),
                  i.append(this._textRendererALabel),
                  this._points.length > 2)
                ) {
                  g = r(c, 'B');
                  c.y < d.y
                    ? ((g.vertAlign = 'bottom'), (g.offsetY = 5))
                    : ((g.vertAlign = 'top'), (g.offsetY = 5)),
                    this._textRendererBLabel.setData(g),
                    i.append(this._textRendererBLabel);
                }
                if (this._points.length > 3) {
                  g = r(u, 'C');
                  u.y < c.y
                    ? ((g.vertAlign = 'bottom'), (g.offsetY = 5))
                    : ((g.vertAlign = 'top'), (g.offsetY = 5)),
                    this._textRendererCLabel.setData(g),
                    i.append(this._textRendererCLabel);
                }
                if (this._points.length > 4) {
                  g = r(p, 'D');
                  p.y < u.y
                    ? ((g.vertAlign = 'bottom'), (g.offsetY = 5))
                    : ((g.vertAlign = 'top'), (g.offsetY = 5)),
                    this._textRendererDLabel.setData(g),
                    i.append(this._textRendererDLabel);
                }
                this.addAnchors(i), (this._renderer = i);
              }
            }),
            (t.prototype._updateBaseData = function () {
              if (this._source.points().length >= 3) {
                var e = this._source.points(),
                  t = e[0],
                  i = e[1],
                  r = e[2];
                this._abRetracement =
                  Math.round(
                    1e3 * Math.abs((r.price - i.price) / (i.price - t.price)),
                  ) / 1e3;
              }
              if (this._source.points().length >= 4) {
                var n = this._source.points(),
                  a = ((i = n[1]), (r = n[2]), n[3]);
                this._bcRetracement =
                  Math.round(
                    1e3 * Math.abs((a.price - r.price) / (r.price - i.price)),
                  ) / 1e3;
              }
              if (this._source.points().length >= 5) {
                var o = this._source.points(),
                  s = ((t = o[0]), (i = o[1]), (r = o[2]), (a = o[3]), o[4]);
                (this._cdRetracement =
                  Math.round(
                    1e3 * Math.abs((s.price - a.price) / (a.price - r.price)),
                  ) / 1e3),
                  (this._xdRetracement =
                    Math.round(
                      1e3 * Math.abs((s.price - i.price) / (i.price - t.price)),
                    ) / 1e3);
              }
            }),
            t
          );
        })(i('aB9a').LineSourcePaneView);
    },
    '6sSH': function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('IjC5').RectangleRenderer,
        a = i('pJOz').TrendLineRenderer,
        o = i('cjIn').PaneRendererCachedImage,
        s = i('VdBB').HitTestResult,
        l = i('Zy3/').CompositeRenderer,
        h = i('a7Ha').LineEnd,
        d = i('d1Pk').fibLevelCoordinate,
        c = i('NCfL').LineToolPaneViewWithLevelledTextCache,
        u = i('xUGI');
      function p(e, t, i) {
        u.call(this, e, t, i);
      }
      function _(e, t) {
        c.call(this, e, t),
          (this._rendererCache = {}),
          (this._trendLineRendererPoints12 = new a()),
          (this._trendLineRendererPoints23 = new a()),
          (this._renderer = null);
      }
      inherit(p, u),
        (p.prototype._selectStartPrice = function (e) {
          return e.points()[2].price;
        }),
        (p.prototype.priceRange = function (e, t) {
          var i = this.points(e),
            r = i[0],
            n = i[1],
            a = t ? r.price - n.price : n.price - r.price;
          if (!this._calculateLogLevels(e)) return { price: a };
          var o = e.priceScale(),
            s = e.ownerSource().firstValue(),
            l = o.priceToCoordinate(r.price, s),
            h = o.priceToCoordinate(n.price, s);
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
              o = Math.min(n.x, a.x),
              s = Math.max(n.x, a.x);
            (n = new r(o, this._levels[t].y)),
              (a = new r(s, this._levels[t].y));
            var l,
              h = this._source.properties(),
              d = h.extendLines.value() ? this._model.timeScale().width() : s;
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
            var u = {
                left: i.left,
                top: this._cache.topByRow(this._cacheState.row),
                width: i.width,
                height: this._cache.rowHeight(this._cacheState.row),
              },
              p = {
                left: l.x - u.width,
                top: l.y,
                width: i.width,
                height: u.height,
              },
              _ = h.vertLabelsAlign.value();
            return (
              'middle' === _ && (p.top -= p.height / 2),
              'bottom' === _ && (p.top -= p.height),
              { cacheRect: u, targetRect: p }
            );
          }
        }),
        (_.prototype._createCache = function (e) {
          return new p(
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
              u = this._source.points()[1],
              p = this._source.points()[2],
              _ = !1;
            (M = this._source.properties()).reverse &&
              M.reverse.value() &&
              (_ = M.reverse.value()),
              (this._levels = []);
            var f,
              v,
              g = _ ? i.price : u.price,
              y = _ ? u.price : i.price,
              w = g - y,
              m = e.isLog() && M.fibLevelsBasedOnLogScale.value();
            if (m)
              (f = e.priceToCoordinate(g, t) - e.priceToCoordinate(y, t)),
                (v = e.priceToCoordinate(p.price, t));
            for (
              var x = { price: p.price, coordinate: v },
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
                  C = d(x, b, P, e, t, m);
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
            (i = this._points[0]), (u = this._points[1]);
            if ((M = this._source.properties()).trendline.visible.value()) {
              var O = {
                points: [i, u],
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
            p = this._points[2];
            if (M.trendline.visible.value()) {
              O = {
                points: [u, p],
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
            var D = Math.min(p.x, u.x),
              k = Math.max(p.x, u.x),
              B = M.fillBackground.value(),
              N = M.transparency.value(),
              A = M.extendLinesLeft.value(),
              j = M.extendLines.value();
            if (B)
              for (T = 0; T < this._levels.length; T++)
                if (T > 0 && B) {
                  var z = this._levels[T - 1],
                    E =
                      ((i = new r(D, this._levels[T].y)),
                      (u = new r(k, z.y)),
                      {});
                  (E.points = [i, u]),
                    (E.color = this._levels[T].color),
                    (E.linewidth = 0),
                    (E.backcolor = this._levels[T].color),
                    (E.fillBackground = !0),
                    (E.transparency = N),
                    (E.extendLeft = A),
                    (E.extendRight = j);
                  var V = new n(void 0, void 0, !0);
                  V.setData(E), I.append(V);
                }
            var H = D,
              W = k;
            H === W && (A && (H -= 1), j && (W += 1));
            for (T = 0; T < this._levels.length; T++) {
              O = {
                points: [
                  (i = new r(H, this._levels[T].y)),
                  (u = new r(W, this._levels[T].y)),
                ],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: this._levels[T].color,
                linewidth: this._levels[T].linewidth,
                linestyle: this._levels[T].linestyle,
                extendleft: A,
                extendright: j,
                leftend: h.Normal,
                rightend: h.Normal,
              };
              var Y = new a();
              if (
                (Y.setData(O),
                Y.setHitTest(new s(s.MOVEPOINT, null, this._levels[T].index)),
                I.append(Y),
                M.showCoeffs.value() || M.showPrices.value())
              ) {
                var F = new o(this, T);
                I.append(F);
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
      i.r(t);
      var r = i('mrSG'),
        n = i('aO4+'),
        a = i('hfHJ'),
        o = i('Zy3/'),
        s = i('a7Ha'),
        l = i('8Uy/'),
        h = i('//lt'),
        d = i('pJOz'),
        c = i('aB9a'),
        u = i('Ialn'),
        p = i('ikwP'),
        _ = i('cPgM'),
        f = i('VdBB'),
        v = (function (e) {
          function t(t) {
            var i = e.call(this) || this;
            return (i._data = null), (i._cache = t), i;
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.setData = function (e) {
              this._data = e;
            }),
            (t.prototype.hitTest = function (e, t) {
              if (null === this._data) return null;
              var i = 65536 * this._data.icon + this._data.size,
                r = this._cache[i] * this._data.scale,
                n = Object(a.rotationMatrix)(-this._data.angle),
                o = e.subtract(this._data.point);
              return (
                (o = Object(a.transformPoint)(n, o)),
                Math.abs(o.y) <= r / 2 && Math.abs(o.x) <= this._data.size / 2
                  ? new f.HitTestResult(f.HitTestResult.MOVEPOINT)
                  : null
              );
            }),
            (t.prototype._drawImpl = function (e, t) {
              if (null !== this._data) {
                var i = String.fromCharCode(this._data.icon);
                e.font = this._data.size + 'px FontAwesome';
                var r = e.measureText(i).width;
                e.textBaseline = 'middle';
                var n = this._data.point;
                e.translate(n.x, n.y),
                  e.rotate(this._data.angle - Math.PI / 2),
                  e.scale(this._data.scale, 1);
                var a = 65536 * this._data.icon + this._data.size;
                e.textAlign = Object(u.isRtl)() ? 'right' : 'left';
                var o = Object(p.calcTextHorizontalShift)(e, r);
                (this._cache[a] = r),
                  this._data.selected &&
                    ((e.fillStyle = 'rgba(80, 80, 80, 0.2)'),
                    e.fillRect(
                      -this._cache[a] / 2,
                      -this._data.size / 2,
                      this._cache[a],
                      this._data.size,
                    )),
                  (e.fillStyle = this._data.color),
                  e.fillText(i, -this._cache[a] / 2 + o, 0);
              }
            }),
            t
          );
        })(_.ScaledPaneRenderer);
      i.d(t, 'IconPaneView', function () {
        return g;
      });
      var g = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t._cache = {}),
            (t._dashRenderer = new d.TrendLineRenderer()),
            (t._iconRenderer = new v(t._cache)),
            (t._renderer = null),
            t
          );
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.renderer = function (e, t) {
            return this._invalidated && this._updateImpl(), this._renderer;
          }),
          (t.prototype._updateImpl = function () {
            if (
              (e.prototype._updateImpl.call(this),
              (this._renderer = null),
              !(this._points.length < 1))
            ) {
              var t = new o.CompositeRenderer(),
                i = this._source.properties().childs(),
                r = {
                  point: this._points[0],
                  color: i.color.value(),
                  size: i.size.value(),
                  icon: i.icon.value(),
                  angle: i.angle.value(),
                  scale: i.scale.value(),
                  selected: this.areAnchorsVisible(),
                };
              this._iconRenderer.setData(r), t.append(this._iconRenderer);
              var d = 65536 * r.icon + r.size,
                u = this._cache[d],
                p = r.size,
                _ = this._points[0],
                f = i.scale.value(),
                v = this._source.getAnchorLimit(),
                g = new n.Point(Math.max(v, p) / 2, 0),
                y = new n.Point(0, Math.max(v, f * u) / 2),
                w = Object(a.rotationMatrix)(i.angle.value());
              (g = Object(a.transformPoint)(w, g)),
                (y = Object(a.transformPoint)(w, y));
              var m = _.add(g);
              m.data = 0;
              var x = _.subtract(g);
              x.data = 1;
              var b = _.add(y);
              (b.data = 2), (b.square = !0);
              var R = _.subtract(y);
              if (((R.data = 3), (R.square = !0), this.areAnchorsVisible())) {
                var T = {
                  points: [m, x],
                  color: '#808080',
                  linewidth: 1,
                  linestyle: l.LINESTYLE_DASHED,
                  extendleft: !1,
                  extendright: !1,
                  leftend: s.LineEnd.Normal,
                  rightend: s.LineEnd.Normal,
                };
                this._dashRenderer.setData(T), t.append(this._dashRenderer);
              }
              var S = Object(c.thirdPointCursorType)(m, x),
                P = [h.PaneCursorType.Default, h.PaneCursorType.Default, S, S];
              t.append(
                this.createLineAnchor({
                  points: [m, x, b, R],
                  pointsCursorType: P,
                }),
              ),
                (this._renderer = t);
            }
          }),
          t
        );
      })(c.LineSourcePaneView);
    },
    '8MBc': function (e, t, i) {
      'use strict';
      var r = i('aB9a').LineSourcePaneView,
        n = i('pJOz').TrendLineRenderer,
        a = i('VdBB').HitTestResult,
        o = i('Zy3/').CompositeRenderer,
        s = i('a7Ha').LineEnd,
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
            o = n.transposed(),
            s = r.normalized(),
            l = Math.acos(n.dotProduct(s));
          Math.asin(o.dotProduct(s)) < 0 && (l = 2 * Math.PI - l);
          for (
            var h = this._data.counterclockwise ? -1 : 1, d = r.length(), c = 0;
            c < 4;
            c++
          ) {
            var u = (h * l) / (0.5 * Math.PI),
              p = this._continiusFib(u + 4 * c);
            if (null !== (p = (p * i.length()) / 5) && Math.abs(p - d) < 5)
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
            var o = Math.PI / 100;
            e.moveTo(0, 0);
            for (
              var s = this._data.counterclockwise ? -1 : 1, l = 0;
              l < 50 * (this._fibNumbers().length - 1);
              l++
            ) {
              var h = s * l * o,
                d = this._continiusFib(l / 50),
                c = Math.cos(h) * d,
                u = Math.sin(h) * d;
              e.lineTo(c, u);
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
              t = new o();
            ((e = {}).points = this._floatPoints),
              (e.width = this._model.timeScale().width()),
              (e.height = this._source.priceScale().height()),
              (e.color = this._source.properties().linecolor.value()),
              (e.linewidth = this._source.properties().linewidth.value()),
              (e.linestyle = this._source.properties().linestyle.value()),
              (e.extendleft = !1),
              (e.extendright = !0),
              (e.leftend = s.Normal),
              (e.rightend = s.Normal),
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
        o = i('//lt').PaneCursorType,
        s = [
          o.Default,
          o.Default,
          o.Default,
          o.Default,
          o.VerticalResize,
          o.VerticalResize,
        ];
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
              var o = this._source.priceScale(),
                l = this._source.ownerSource().firstValue();
              if (o.isLog()) {
                var h = 0.5 * (i + n) - this._source._priceOffset,
                  d = 0.5 * (i + n),
                  c = this._source.priceScale().priceToCoordinate(h, l),
                  u = this._source.priceScale().priceToCoordinate(d, l) - c;
                (this._p3.y += u), (this._p4.y += u);
              } else
                (this._p3.y = this._source
                  .priceScale()
                  .priceToCoordinate(i, l)),
                  (this._p4.y = this._source
                    .priceScale()
                    .priceToCoordinate(n, l));
            }
            var p = { points: [] };
            this._points.length > 1 &&
              (p.points.push(this._points[0]), p.points.push(this._points[1])),
              this._points.length > 2 &&
                null !== this._p3 &&
                null !== this._p4 &&
                (p.points.push(this._p3), p.points.push(this._p4)),
              (p.color = this._source.properties().linecolor.value()),
              (p.width = this._model.timeScale().width()),
              (p.height = this._source.priceScale().height());
            var _ = this._source.properties();
            (p.linewidth = _.linewidth.value()),
              (p.linestyle = _.linestyle.value()),
              (p.extendleft = _.extendLeft.value()),
              (p.extendright = _.extendRight.value()),
              (p.fillBackground = _.fillBackground.value()),
              (p.backcolor = _.backgroundColor.value()),
              (p.transparency = _.transparency.value()),
              (p.showMidline = _.showMidline.value()),
              (p.midlinewidth = _.midlinewidth.value()),
              (p.midlinestyle = _.midlinestyle.value()),
              (p.midcolor = _.midlinecolor.value()),
              (p.fillBackground = _.fillBackground.value()),
              (p.hittestOnBackground = !0),
              this._channelRenderer.setData(p);
            var f = new a();
            f.append(this._channelRenderer);
            var v = [];
            if (
              (this._points[0] && v.push(this._points[0]),
              this._points[1] && v.push(this._points[1]),
              this._p3)
            ) {
              var g = this._p3;
              (g.data = 2), v.push(g);
              var y = this._p4;
              (y.data = 3), v.push(y);
              var w = this._p3.add(this._p4).scaled(0.5);
              (w.data = 4), (w.square = !0), v.push(w);
              var m = v[0].add(v[1]).scaled(0.5);
              (m.data = 5), (m.square = !0), v.push(m);
            }
            var x = 3 === this._points.length && !this._p3;
            this._model.lineBeingCreated() !== this._source ||
              x ||
              (v.pop(), v.pop()),
              f.append(
                this.createLineAnchor({ points: v, pointsCursorType: s }),
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
        o = i('VdBB').HitTestResult,
        s = i('Zy3/').CompositeRenderer,
        l = i('UfPO'),
        h = i('Hr11'),
        d = i('GH0z').PercentageFormatter,
        c = i('gQ5K').DateFormatter,
        u = i('4kQX').TimeFormatter,
        p = i('nda6').TimeSpanFormatter,
        _ = i('Tmoa'),
        f = i('08i5'),
        v = i('ikwP').calcTextHorizontalShift,
        g = i('Ialn').isRtl,
        y = i('jFln').drawRoundRect,
        w = i('XlJ7').makeFont,
        m = i('cPgM').ScaledPaneRenderer,
        x = i('Ialn'),
        b = x.forceLTRStr,
        R = x.startWithLTR,
        T = i('zDbI').CHART_FONT_FAMILY;
      function S() {
        m.call(this),
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
      inherit(S, m),
        (S.prototype.setData = function (e) {
          this._data = e;
        }),
        (S.prototype.drawBalloon = function (e, t, i, n, a, o) {
          var s = o || 20;
          if ((e.beginPath(), 'down' === a)) {
            var l = new r(
              t.x - s,
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
              e.lineTo(l.x + s + this._arrowWidth, l.y + n),
              e.lineTo(l.x + s, l.y + n + this._arrowHeight),
              e.lineTo(l.x + s - this._arrowWidth, l.y + n),
              e.lineTo(l.x + this._radius, l.y + n),
              e.arcTo(l.x, l.y + n, l.x, l.y + n - this._radius, this._radius),
              e.lineTo(l.x, l.y + this._radius),
              e.arcTo(l.x, l.y, l.x + this._radius, l.y, this._radius),
              l
            );
          }
          var h = new r(
            t.x - s,
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
            e.lineTo(h.x + s + this._arrowWidth, h.y - n),
            e.lineTo(h.x + s, h.y - n - this._arrowHeight),
            e.lineTo(h.x + s - this._arrowWidth, h.y - n),
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
            o = this._data.targetLine4;
          e.font = t;
          var s = e.measureText(r).width,
            l = e.measureText(n).width,
            h = e.measureText(' ').width;
          e.font = i;
          var d = e.measureText(a).width,
            c = e.measureText(o).width,
            u = e.measureText(' ').width,
            p = this._data.clockWhite.width;
          (this._targetWidth = Math.max(s + l + h, d + c + p + 2 * u) + 8 + 4),
            (this._targetHeight =
              this._targetFontSize1 + this._targetFontSize2 + 9 + 4);
          var m = this._data.points[1],
            x = m.x + this._targetWidth - e.canvas.width + 5;
          this._targetRectLeftOffset = Math.max(
            20,
            Math.min(this._targetWidth - 15, x),
          );
          var b = 'up' === this._data.direction ? 'down' : 'up',
            R = this.drawBalloon(
              e,
              m,
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
            e.arc(m.x, m.y, 3, 0, 2 * Math.PI, !1),
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
          var C = v(e, P - s);
          e.fillText(n, T + s + h + C, S), (e.font = i);
          var M = S + this._targetFontSize1 + 3,
            I = v(e, P - c - p - u);
          e.fillText(a, T + I, M);
          var O = v(e, P - d - u - p - c);
          e.drawImage(this._data.clockWhite, T + d + u + O, M + 1);
          var D = v(e, P - d - p);
          if ((e.fillText(o, T + d + p + 2 * u + D, M), this._data.status)) {
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
            var j = this._targetFontSize1 + 4,
              z = e.measureText(k).width,
              E = Math.round((this._targetWidth - z) / 2),
              V = v(e, z);
            (e.fillStyle = B),
              'up' === this._data.direction
                ? (y(e, R.x - 1, R.y - j - 2, this._targetWidth + 2, j, 5),
                  e.fill(),
                  (e.fillStyle = N),
                  e.fillText(k, R.x + E + V, R.y - j + 1),
                  e.drawImage(
                    A,
                    R.x + E - A.width - 4,
                    R.y - j - 2 + Math.abs(j - A.height) / 2,
                  ))
                : (y(
                    e,
                    R.x - 1,
                    R.y + this._targetHeight + 2,
                    this._targetWidth + 2,
                    j,
                    5,
                  ),
                  e.fill(),
                  (e.fillStyle = N),
                  e.fillText(k, R.x + E + V, R.y + this._targetHeight + 5),
                  e.drawImage(
                    A,
                    R.x + E - A.width - 4,
                    R.y + this._targetHeight + 10 - Math.abs(j - A.height) / 2,
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
            o = a.x + this._sourceWidth - e.canvas.width + 5;
          this._sourceRectLeftOffset = Math.max(
            20,
            Math.min(this._sourceWidth - 15, o),
          );
          var s = this.drawBalloon(
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
            h = 2 + s.x + 3 + l,
            d = 2 + s.y + 2;
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
              var o = Math.atan(r.x / r.y);
            else {
              var s,
                l,
                h = Math.abs(r.x),
                d = Math.abs(r.y),
                c = 0,
                u = Math.PI / 2,
                p = (c + u) / 2;
              if (r.length() > n)
                for (;;) {
                  (s = h * Math.sin(p)), (l = d * (1 - Math.cos(p)));
                  var _ = Math.sqrt((s - h) * (s - h) + (l - d) * (l - d));
                  if (Math.abs(_ - n) < 1) break;
                  _ > n ? (c = p) : (u = p), (p = (c + u) / 2);
                }
              (o = Math.atan((h - s) / (d - l))), r.x * r.y < 0 && (o = -o);
            }
            e.save(),
              e.beginPath(),
              e.translate(i.x, i.y),
              e.rotate(-o),
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
            s = n.y + i * r,
            l = n.y + i * (t + r),
            h = Math.min(s, l),
            d = Math.max(s, l);
          return e.x >= a &&
            e.x <= a + this._targetWidth &&
            e.y >= h &&
            e.y <= d
            ? new o(o.MOVEPOINT)
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
            s = r.y + (i + this._sourceHeight + this._arrowHeight) * t,
            l = Math.min(a, s),
            h = Math.max(a, s);
          return e.x >= n &&
            e.x <= n + this._sourceWidth &&
            e.y >= l &&
            e.y <= h
            ? new o(o.MOVEPOINT)
            : null;
        }),
        (S.prototype.hitTest = function (e) {
          if (null === this._data || this._data.points.length < 2) return null;
          var t = this._data.points[0],
            i = this._data.points[1],
            r = i.subtract(t),
            n = ((r = i.subtract(t)), e.subtract(t)),
            a = Math.abs(r.x),
            s = Math.abs(r.y),
            l = h.sign(r.y) * (s - s * Math.sqrt(1 - (n.x * n.x) / (a * a)));
          if (Math.abs(l - n.y) < 3) return new o(o.MOVEPOINT);
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
              o = (r / Math.abs(i.price)) * 100;
            this._targetLine1 = b(
              e.format(r) + ' (' + this._percentageFormatter.format(o) + ')',
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
              _ = a.parse(this._model.mainSeries().interval()),
              v = _.isSeconds() || _.isTicks();
            if (h && l) {
              (this._targetLine4 = new c().format(h)),
                d ||
                  (this._targetLine4 =
                    this._targetLine4 +
                    '  ' +
                    new u(v ? '%h:%m:%s' : '%h:%m').format(h));
              var g = (h.valueOf() - l.valueOf()) / 1e3;
              this._targetLine2 =
                $.t('in', { context: 'dates' }) + ' ' + R(new p().format(g));
            }
            (this._sourceLine1 = e.format(i.price)), (this._sourceLine2 = '');
            var y = this._model.timeScale().indexToUserTime(i.index);
            y &&
              ((this._sourceLine2 = new c().format(y)),
              d ||
                (this._sourceLine2 =
                  this._sourceLine2 +
                  ' ' +
                  new u(v ? '%h:%m:%s' : '%h:%m').format(y))),
              (this._direction =
                this._source.direction() === f.Direction.Up ? 'up' : 'down'),
              (this._finished =
                this._model.lineBeingCreated() !== this._source &&
                this._model.lineBeingEdited() !== this._source &&
                !this._model.sourcesBeingMoved().includes(this._source));
            var w = {};
            (w.points = this._points),
              (w.color = this._source.properties().linecolor.value()),
              (w.linewidth = this._source.properties().linewidth.value()),
              (w.targetLine1 = this._targetLine1),
              (w.targetLine2 = this._targetLine2),
              (w.targetLine3 = this._targetLine3),
              (w.targetLine4 = this._targetLine4),
              (w.status = this._source.properties().status.value()),
              (w.transparency = this._source.properties().transparency.value()),
              (w.targetBackColor = this._source
                .properties()
                .targetBackColor.value()),
              (w.targetStrokeColor = this._source
                .properties()
                .targetStrokeColor.value()),
              (w.targetTextColor = this._source
                .properties()
                .targetTextColor.value()),
              (w.sourceBackColor = this._source
                .properties()
                .sourceBackColor.value()),
              (w.sourceStrokeColor = this._source
                .properties()
                .sourceStrokeColor.value()),
              (w.sourceTextColor = this._source
                .properties()
                .sourceTextColor.value()),
              (w.successBackground = this._source
                .properties()
                .successBackground.value()),
              (w.successTextColor = this._source
                .properties()
                .successTextColor.value()),
              (w.failureBackground = this._source
                .properties()
                .failureBackground.value()),
              (w.failureTextColor = this._source
                .properties()
                .failureTextColor.value()),
              (w.intermediateBackColor = this._source
                .properties()
                .intermediateBackColor.value()),
              (w.intermediateTextColor = this._source
                .properties()
                .intermediateTextColor.value()),
              (w.sourceLine1 = this._sourceLine1),
              (w.sourceLine2 = this._sourceLine2),
              (w.direction = this._direction),
              (w.clockWhite = this._clockWhite),
              (w.clockBlack = this._clockBlack),
              (w.successIcon = this._successIcon),
              (w.failureIcon = this._failureIcon),
              (w.finished = this._finished),
              (w.centersColor = this._model.backgroundCounterColor()),
              this._predictionRenderer.setData(w);
            var m = new s();
            m.append(this._predictionRenderer),
              this.addAnchors(m),
              (this._renderer = m);
          }
        }),
        (t.PredictionPaneView = P);
    },
    B4Hi: function (e, t, i) {
      'use strict';
      var r,
        n = i('aO4+').Point,
        a = i('aB9a').LineSourcePaneView,
        o = i('VdBB').HitTestResult,
        s = i('Zy3/').CompositeRenderer,
        l = i('Tmoa'),
        h = i('jTis').CalloutConsts,
        d = i('ikwP').calcTextHorizontalShift,
        c = i('Ialn').isRtl,
        u = i('cPgM').ScaledPaneRenderer;
      function p(e) {
        u.call(this), (this._data = null), (this._textSizeCache = e);
      }
      function _(e, t) {
        a.call(this, e, t),
          (this._textSizeCache = {}),
          (this._calloutRenderer = new p(this._textSizeCache)),
          (this._renderer = null);
      }
      inherit(p, u),
        (p.prototype.wordWrap = function (e, t) {
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
          for (var a = [], o = 0; o < n.length; o++) {
            var s = n[o];
            if ((h = r.measureText(s).width) <= t) a.push(s);
            else
              for (var l = s.split(/([-)\]},.!?:;])|(\s+)/); l.length; ) {
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
                    u = 1 === u ? 1 : ~~((t / r.measureText(c)) * c.length);
                  if (r.measureText(c.substr(0, u)).width <= t)
                    for (; r.measureText(c.substr(0, u + 1)).width <= t; ) u++;
                  else
                    for (
                      ;
                      u > 1 && r.measureText(c.substr(0, --u)).width > t;

                    );
                  u < 1 && (u = 1),
                    a.push(c.substr(0, u)),
                    (l[0] = c.substr(u)),
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
        (p.prototype.setData = function (e) {
          (this._data = e),
            (this._data.lines = this.wordWrap(e.text, e.wordWrapWidth));
        }),
        (p.prototype.hitTest = function (e) {
          if (null === this._data || this._data.points.length < 2) return null;
          var t = this._data.points[0],
            i = this._data.points[1];
          if (t.subtract(e).length() < 3) return new o(o.CHANGEPOINT, 0);
          var r = i.x - this._textSizeCache.totalWidth / 2,
            n = i.y - this._textSizeCache.totalHeight / 2;
          return e.x >= r &&
            e.x <= r + this._textSizeCache.totalWidth &&
            e.y >= n &&
            e.y <= n + this._textSizeCache.totalHeight
            ? new o(o.MOVEPOINT, { areaName: 'Text' })
            : null;
        }),
        (p.prototype.fontStyle = function () {
          return (
            (this._data.bold ? 'bold ' : '') +
            (this._data.italic ? 'italic ' : '') +
            this._data.fontSize +
            'px ' +
            this._data.font
          );
        }),
        (p.prototype._drawImpl = function (e) {
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
              o = h.TextMargins,
              s = n + 2 * o + 2 * a,
              u = r + 2 * o + 2 * a;
            (this._textSizeCache.totalWidth = s),
              (this._textSizeCache.totalHeight = u);
            var p = i.x - s / 2,
              _ = i.y - u / 2,
              f = 0,
              v = n + 2 * o > 2 * a,
              g = r + 2 * o > 2 * a;
            e.textAlign = c() ? 'right' : 'left';
            var y = d(e, n);
            t.x > p + s ? (f = 20) : t.x > p && (f = 10),
              t.y > _ + u ? (f += 2) : t.y > _ && (f += 1),
              e.save(),
              e.translate(p, _),
              (t.x -= p),
              (t.y -= _),
              (i.x -= p),
              (i.y -= _),
              e.beginPath(),
              e.moveTo(a, 0),
              10 === f
                ? v
                  ? (e.lineTo(i.x - a, 0),
                    e.lineTo(t.x, t.y),
                    e.lineTo(i.x + a, 0),
                    e.lineTo(s - a, 0))
                  : (e.lineTo(t.x, t.y), e.lineTo(s - a, 0))
                : e.lineTo(s - a, 0),
              20 === f
                ? (e.lineTo(t.x, t.y), e.lineTo(s, a))
                : e.arcTo(s, 0, s, a, a),
              21 === f
                ? g
                  ? (e.lineTo(s, i.y - a),
                    e.lineTo(t.x, t.y),
                    e.lineTo(s, i.y + a),
                    e.lineTo(s, u - a))
                  : (e.lineTo(t.x, t.y), e.lineTo(s, u - a))
                : e.lineTo(s, u - a),
              22 === f
                ? (e.lineTo(t.x, t.y), e.lineTo(s - a, u))
                : e.arcTo(s, u, s - a, u, a),
              12 === f
                ? v
                  ? (e.lineTo(i.x + a, u),
                    e.lineTo(t.x, t.y),
                    e.lineTo(i.x - a, u),
                    e.lineTo(a, u))
                  : (e.lineTo(t.x, t.y), e.lineTo(a, u))
                : e.lineTo(a, u),
              2 === f
                ? (e.lineTo(t.x, t.y), e.lineTo(0, u - a))
                : e.arcTo(0, u, 0, u - a, a),
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
              (_ = a + o + this._data.fontSize),
              (p = a + o + y);
            for (var w = 0; w < this._data.lines.length; w++)
              e.fillText(this._data.lines[w], p, _), (_ += this._data.fontSize);
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
            var r = new s();
            r.append(this._calloutRenderer);
            var o = t.points[1],
              l = [].concat(t.points);
            if (
              (l.splice(l.length - 1, 1),
              r.append(this.createLineAnchor({ points: l })),
              t.wordWrapWidth)
            ) {
              var d = new n(
                o.x + (t.wordWrapWidth >> 1) + h.RoundRadius + h.TextMargins,
                o.y,
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
          return u;
        });
      var r = i('mrSG'),
        n = i('f6yo'),
        a = i('GEp6'),
        o = i('jFln'),
        s = i('VaSN'),
        l = i('pJOz'),
        h = i('a7Ha'),
        d = i('VdBB'),
        c = i('Tmoa'),
        u = (function (e) {
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
            Object(r.c)(t, e),
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
                var t = Math.max(
                    Object(s.lastEventIsTouch)() ? 24 : 3,
                    Math.ceil(this._data.linewidth / 2),
                  ),
                  i = 1;
                i < this._points.length;
                i++
              ) {
                var r = this._points[i - 1],
                  o = this._points[i];
                if (Object(a.distanceToSegment)(r, o, e).distance <= t)
                  return this._hittest;
              }
              if (
                this._data.filled &&
                this._data.fillBackground &&
                this._points.length > 0
              ) {
                (r = this._points[0]),
                  (o = this._points[this._points.length - 1]);
                if (Object(a.distanceToSegment)(r, o, e).distance <= t)
                  return this._hittest;
              }
              return this._data.filled &&
                this._data.fillBackground &&
                Object(n.pointInPolygon)(e, this._data.points)
                ? this._backHittest
                : null;
            }),
            (t.prototype._drawImpl = function (e, t) {
              var i, r;
              if (null !== this._data && 0 !== this._points.length) {
                e.beginPath();
                var n =
                  null !== (i = this._data.linecap) && void 0 !== i
                    ? i
                    : 'butt';
                (e.lineCap = n),
                  (e.strokeStyle = this._data.color),
                  (e.lineWidth = this._data.linewidth),
                  (e.lineJoin =
                    null !== (r = this._data.linejoin) && void 0 !== r
                      ? r
                      : 'miter'),
                  Object(o.setLineStyle)(e, this._data.linestyle);
                var a = this._points[0];
                e.moveTo(a.x, a.y);
                for (var s = 0, d = this._points; s < d.length; s++) {
                  var u = d[s];
                  e.lineTo(u.x, u.y);
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
                  this._data.linewidth > 0 && e.stroke();
                var p = this._points.length;
                if (p > 1) {
                  if (
                    ('butt' !== n && (e.lineCap = 'butt'),
                    this._data.leftend === h.LineEnd.Arrow)
                  ) {
                    var _ = this._correctArrowPoints(
                      this._points[1],
                      this._points[0],
                      e.lineWidth,
                      n,
                    );
                    Object(l.drawArrow)(
                      _[0],
                      _[1],
                      e,
                      e.lineWidth,
                      t.pixelRatio,
                    );
                  }
                  if (this._data.rightend === h.LineEnd.Arrow) {
                    _ = this._correctArrowPoints(
                      this._points[p - 2],
                      this._points[p - 1],
                      e.lineWidth,
                      n,
                    );
                    Object(l.drawArrow)(
                      _[0],
                      _[1],
                      e,
                      e.lineWidth,
                      t.pixelRatio,
                    );
                  }
                }
              }
            }),
            (t.prototype._correctArrowPoints = function (e, t, i, r) {
              var n = t.subtract(e),
                a = n.length();
              if ('butt' === r || a < 1) return [e, t];
              var o = a + i / 2;
              return [e, n.scaled(o / a).add(e)];
            }),
            t
          );
        })(i('cPgM').ScaledPaneRenderer);
    },
    BSCN: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'VertLinePaneView', function () {
          return c;
        });
      var r = i('mrSG'),
        n = i('aO4+'),
        a = i('Zy3/'),
        o = i('qgcf'),
        s = i('//lt'),
        l = i('z+cS'),
        h = i('aB9a'),
        d = [s.PaneCursorType.HorizontalResize],
        c = (function (e) {
          function t(t, i, r) {
            var n = e.call(this, t, i) || this;
            return (
              (n._lineRenderer = new l.VerticalLineRenderer()),
              (n._labelRenderer = new o.TextRenderer()),
              (n._renderer = null),
              (n._pane = r),
              n
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.renderer = function (e, t) {
              return this._invalidated && this._updateImpl(), this._renderer;
            }),
            (t.prototype._validatePriceScale = function () {
              return !0;
            }),
            (t.prototype._updateImpl = function () {
              if (
                (e.prototype._updateImpl.call(this),
                (this._renderer = null),
                0 !== this._points.length)
              ) {
                var t = this._source.properties().childs(),
                  i = {
                    x: this._points[0].x,
                    color: t.linecolor.value(),
                    linewidth: t.linewidth.value(),
                    linestyle: t.linestyle.value(),
                  };
                this._lineRenderer.setData(i);
                var r = new a.CompositeRenderer();
                r.append(this._lineRenderer);
                var o = this._pane.height();
                if (
                  t.showLabel.value() &&
                  this._source.model().paneForSource(this._source) ===
                    this._pane
                ) {
                  var s = 0,
                    l = 5,
                    h = 'center',
                    c = 'middle',
                    u = this._points[0].x,
                    p = 0;
                  switch (t.vertLabelsAlign.value()) {
                    case 'top':
                      p = o;
                      break;
                    case 'middle':
                      p = o / 2;
                      break;
                    case 'bottom':
                      p = 0;
                  }
                  if ('horizontal' === t.textOrientation.value()) {
                    switch (t.horzLabelsAlign.value()) {
                      case 'left':
                        h = 'right';
                        break;
                      case 'right':
                        h = 'left';
                        break;
                      case 'center':
                        h = 'center';
                    }
                    switch (t.vertLabelsAlign.value()) {
                      case 'top':
                        c = 'bottom';
                        break;
                      case 'middle':
                        c = 'middle';
                        break;
                      case 'bottom':
                        c = 'top';
                    }
                  } else {
                    switch (
                      ((s = -Math.PI / 2), (l = 0), t.horzLabelsAlign.value())
                    ) {
                      case 'left':
                        c = 'bottom';
                        break;
                      case 'right':
                        c = 'top';
                        break;
                      case 'center':
                        c = 'middle';
                    }
                    switch (t.vertLabelsAlign.value()) {
                      case 'top':
                        h = 'left';
                        break;
                      case 'middle':
                        h = 'center';
                        break;
                      case 'bottom':
                        h = 'right';
                    }
                  }
                  var _ = {
                    points: [new n.Point(u, p)],
                    text: t.text.value(),
                    color: t.textcolor.value(),
                    vertAlign: c,
                    horzAlign: h,
                    font: t.font.value(),
                    offsetX: l,
                    offsetY: 0,
                    bold: t.bold.value(),
                    italic: t.italic.value(),
                    fontsize: t.fontsize.value(),
                    forceTextAlign: !0,
                    angle: s,
                  };
                  this._labelRenderer.setData(_), r.append(this._labelRenderer);
                }
                if (1 === this._points.length) {
                  var f = new n.Point(this._points[0].x, o / 2);
                  (f.data = 0),
                    (f.square = !0),
                    r.append(
                      this.createLineAnchor({
                        points: [f],
                        pointsCursorType: d,
                      }),
                    );
                }
                this._renderer = r;
              }
            }),
            t
          );
        })(h.LineSourcePaneView);
    },
    C2CE: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'PolylinePaneView', function () {
          return o;
        });
      var r = i('mrSG'),
        n = i('BCbF'),
        a = i('Zy3/'),
        o = (function (e) {
          function t(t, i) {
            var r = e.call(this, t, i) || this;
            return (
              (r._polygonRenderer = new n.PolygonRenderer(null)),
              (r._renderer = new a.CompositeRenderer()),
              r
            );
          }
          return (
            Object(r.c)(t, e),
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
        o = i('Zy3/').CompositeRenderer,
        s = i('Tmoa'),
        l = i('a7Ha').LineEnd,
        h = i('NCfL').LineToolPaneViewWithLevelledTextCache,
        d = i('xUGI');
      function c(e, t, i) {
        d.call(this, e, t, i);
      }
      function u(e, t) {
        r.call(this, e, t);
      }
      function p(e, t) {
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
            o = e.ownerSource().firstValue(),
            s = a.priceToCoordinate(i.price, o),
            l = a.priceToCoordinate(r.price, o);
          return { price: n, coordinate: t ? l - s : s - l };
        }),
        inherit(u, r),
        (u.prototype._getColor = function () {
          return s.generateColor(
            this._data.backcolor,
            this._data.transparency,
            !0,
          );
        }),
        inherit(p, h),
        (p.prototype.getCacheRects = function (e, t) {
          h.prototype.getCacheRects.call(this, e, t);
          var i,
            r = this._source.properties(),
            n = r['level' + t],
            a = this._cacheState.preparedCells.cells[t - 1],
            o = this._floatPoints[0],
            s = this._floatPoints[1],
            l = this.norm.scaled(n.coeff.value()),
            d = o.add(l),
            c = s.add(l);
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
          var u = {
              left: a.left,
              top: this._cache.topByRow(this._cacheState.row),
              width: a.width,
              height: this._cache.rowHeight(this._cacheState.row),
            },
            p = {
              left: Math.round(i.x - u.width),
              top: Math.round(i.y),
              width: a.width,
              height: u.height,
            },
            _ = r.vertLabelsAlign.value();
          return (
            'middle' === _ && (p.top -= p.height / 2),
            'bottom' === _ && (p.top -= p.height),
            { cacheRect: u, targetRect: p }
          );
        }),
        (p.prototype._createCache = function (e) {
          return new c(
            this._source.properties().fibLevelsBasedOnLogScale,
            this._source.levelsCount(),
            e,
          );
        }),
        (p.prototype._updateImpl = function () {
          h.prototype._updateImpl.call(this),
            (this._renderer = null),
            3 === this._floatPoints.length &&
              3 === this._source.points().length &&
              (this.norm = this._floatPoints[2].subtract(this._floatPoints[0]));
          var e = new o();
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
            var s = function (t, i, r) {
                var n = new a(this, c);
                e.append(n);
              }.bind(this),
              d = this._source.levelsCount(),
              c = 1;
            c < d;
            c++
          ) {
            if ((S = t['level' + c]).visible.value()) {
              for (var p = null, _ = c + 1; _ <= d; _++) {
                var f = t['level' + _];
                if (f.visible.value()) {
                  p = f;
                  break;
                }
              }
              if (!p) break;
              var v = this.norm.scaled(S.coeff.value()),
                g = i.add(v),
                y = r.add(v),
                w = this.norm.scaled(p.coeff.value()),
                m = i.add(w),
                x = r.add(w),
                b = {};
              (b.points = [g, y, m, x]),
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
              var R = new u();
              R.setData(b),
                e.append(R),
                (t.showCoeffs.value() || t.showPrices.value()) && s(g, y, c);
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
              (t.showCoeffs.value() || t.showPrices.value()) && s(g, y, T - 1);
          }
          this.addAnchors(e), (this._renderer = e);
        }),
        (p.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.FibChannelPaneView = p);
    },
    D4q4: function (e, t, i) {
      'use strict';
      var r = i('aB9a').LineSourcePaneView,
        n = i('Zy3/').CompositeRenderer,
        a = i('/S7V').TriangleRenderer;
      function o(e, t) {
        r.call(this, e, t),
          (this._triangleRenderer = new a()),
          (this._renderer = null);
      }
      inherit(o, r),
        (o.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (o.prototype._updateImpl = function () {
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
        (t.TrianglePaneView = o);
    },
    'Dz+H': function (e, t, i) {
      'use strict';
      i.r(t);
      var r = i('mrSG'),
        n = i('aB9a'),
        a = i('Zy3/'),
        o = i('vq8G'),
        s = i('VdBB'),
        l = i('Eyy1'),
        h = i('qgcf'),
        d = i('Tmoa'),
        c = i('Ialn'),
        u = i('ikwP'),
        p = i('c44N'),
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
              (this._sourceCanvas = Object(u.createDisconnectedCanvas)(
                document,
                new u.Size(e, t),
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
              Object(u.drawScaled)(
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
                  Object(p.areEqualPaneRenderParams)(
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
                ? new s.HitTestResult(s.HitTestResult.MOVEPOINT)
                : null;
            }),
            (e.prototype._drawTooltipOn = function (e, t) {
              e.save(), e.translate(0.5, 0.5);
              var i = Object(l.ensureNotNull)(this._data),
                r = String(i.text).replace(/^\s+|\s+$/g, '');
              e.font =
                (i.bold ? 'bold ' : '') +
                (i.italic ? 'italic ' : '') +
                i.fontSize +
                'px ' +
                i.font;
              var n = i.tooltipWidth - 2 * i.tooltipPadding,
                a = Object(h.wordWrap)(r, e.font, n),
                o = i.point,
                s = i.tooltipLineSpacing,
                p = i.tooltipWidth,
                _ = a.length * i.fontSize + 2 * i.tooltipPadding;
              a.length > 1 && (_ += (a.length - 1) * s);
              var f = Math.round(o.x - p / 2),
                v = Math.round(o.y - i.height - _ - 8),
                g = o.x < 20 || o.x + 20 > i.vpWidth,
                y = g ? null : 'top',
                w = g ? 0 : Math.round(o.x);
              v < 10 ? (v = o.y + 13) : (y = 'bottom'),
                f < 10
                  ? (f += Math.abs(f - 10))
                  : f + p + 10 > i.vpWidth && (f -= f + p + 10 - i.vpWidth),
                (e.fillStyle = Object(d.generateColor)(
                  i.backgroundColor,
                  i.backgroundTransparency,
                )),
                (e.strokeStyle = i.borderColor),
                (e.lineWidth = 1),
                e.beginPath();
              var m = Math.round(f * t.pixelRatio),
                x = Math.round(v * t.pixelRatio);
              (w = Math.round(w * t.pixelRatio)),
                (_ = Math.round(_ * t.pixelRatio)),
                (p = Math.round(p * t.pixelRatio));
              var b = Math.round(7 * t.pixelRatio);
              e.moveTo(m, x),
                g ||
                  'top' !== y ||
                  (e.lineTo(w - b, x), e.lineTo(w, x - b), e.lineTo(w + b, x)),
                e.lineTo(m + p, x),
                e.lineTo(m + p, x + _),
                g ||
                  'bottom' !== y ||
                  (e.lineTo(w + b, x + _),
                  e.lineTo(w, x + _ + b),
                  e.lineTo(w - b, x + _)),
                e.lineTo(m, x + _),
                e.closePath(),
                e.fill(),
                e.stroke(),
                (e.textBaseline = 'middle'),
                (e.fillStyle = i.textColor),
                (e.textAlign = Object(c.isRtl)() ? 'right' : 'left');
              var R = Object(u.calcTextHorizontalShift)(e, n),
                T = f + i.tooltipPadding + R,
                S = v + i.tooltipPadding + i.fontSize / 2;
              Object(u.drawScaled)(e, t.pixelRatio, function () {
                for (var t = 0; t < a.length; t++)
                  e.fillText(a[t].replace(/^\s+/, ''), T, S),
                    (S += i.fontSize + s);
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
          Object(r.c)(t, e),
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
                  new o.SelectionRenderer({
                    points: i,
                    bgColors: this._lineAnchorColors(i),
                    visible: this.areAnchorsVisible(),
                    barSpacing: this._model.timeScale().barSpacing(),
                    hittestResult: s.HitTestResult.MOVEPOINT,
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
        o = i('5/lF'),
        s = i('zDbI'),
        l = i('8xAY'),
        h = i('ikwP'),
        d = l.LabelSettings.fontSize,
        c = l.LabelSettings.lineSpacing,
        u = l.LabelSettings.paddingTopBottom,
        p = Object(a.getLogger)('Chart.LineToolTrendLine');
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
          (this._rowHeight = 3 * i - t + 2 * u + 2), this._recreateCanvas();
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
              (p.logDebug(
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
            var o = n.effectiveState,
              s = this._effectiveState(e);
            if (!this._effectiveStatesEquals(o, s)) {
              var l = t();
              this._repaintSource(r, n.rowIndex, l), (n.effectiveState = s);
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
            var t = e.properties();
            return {
              p1: Object.assign({}, e.points()[0]),
              p2: Object.assign({}, e.points()[1]),
              props: e.properties(),
              showBars: t.showBarsRange.value(),
              showTimeRange: t.showDateTimeRange.value(),
              showDistance: t.showDistance.value(),
              showPriceRange: t.showPriceRange.value(),
              showAngle: t.showAngle.value(),
              dark: e.model().isDark(),
              priceRange: Object(r.ensureNotNull)(
                Object(r.ensureNotNull)(e.priceScale()).priceRange(),
              ).state(),
              barSpacing: e.model().timeScale().barSpacing(),
            };
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
            if (i.showAngle || i.showDistance) {
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
                  var n = new o.TrendLineStatsRenderer(i, { widths: [] }).draw(
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
              (this._ctx.font = d + 'px ' + s.CHART_FONT_FAMILY),
              this._sourcesToRow.clear(),
              this._rowsToSources.clear();
          }),
          e
        );
      })();
    },
    Fx2Q: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'LineToolHeadAndShouldersPaneView', function () {
          return f;
        });
      var r = i('mrSG'),
        n = i('hBTJ'),
        a = i('YFKU'),
        o = i('8Uy/'),
        s = i('pJOz'),
        l = i('/S7V'),
        h = i('qgcf'),
        d = i('Zy3/'),
        c = i('a7Ha'),
        u = i('BCbF'),
        p = i('aB9a'),
        _ = {
          leftShoulder: Object(a.t)('Left Shoulder'),
          rightShoulder: Object(a.t)('Right Shoulder'),
          head: Object(a.t)('Head'),
        },
        f = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._trendLineRenderer = new s.TrendLineRenderer()),
              (t._triangleRendererPoints234 = new l.TriangleRenderer()),
              (t._intersect1Renderer = new l.TriangleRenderer()),
              (t._intersect2Renderer = new l.TriangleRenderer()),
              (t._polyLineRenderer = new u.PolygonRenderer(null)),
              (t._leftShoulderLabelRenderer = new h.TextRenderer()),
              (t._headLabelRenderer = new h.TextRenderer()),
              (t._rightShoulderLabelRenderer = new h.TextRenderer()),
              (t._renderer = null),
              t
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.renderer = function (e, t) {
              return this._invalidated && this._updateImpl(), this._renderer;
            }),
            (t.prototype._updateImpl = function () {
              var t, i;
              e.prototype._updateImpl.call(this), (this._renderer = null);
              var r = this._points,
                s = r[0],
                l = r[1],
                h = r[2],
                u = r[3],
                p = r[4],
                f = r[5],
                v = r[6];
              if (this._points.length >= 5) {
                var g = Object(n.intersectLineSegments)(h, p, s, l);
                if (null !== g) {
                  var y = p.subtract(h);
                  t = h.add(y.scaled(g));
                }
                if (7 === this._points.length) {
                  var w = Object(n.intersectLineSegments)(h, p, f, v);
                  if (null !== w) {
                    y = p.subtract(h);
                    i = h.add(y.scaled(w));
                  }
                }
              }
              if (!(this._points.length < 2)) {
                var m = this._source.properties().childs(),
                  x = new d.CompositeRenderer(),
                  b = function (e, t) {
                    return {
                      points: [e],
                      text: Object(a.t)(t),
                      color: m.textcolor.value(),
                      horzAlign: 'center',
                      vertAlign: 'middle',
                      font: m.font.value(),
                      offsetX: 0,
                      offsetY: 0,
                      bold: m.bold && m.bold.value(),
                      italic: m.italic && m.italic.value(),
                      fontsize: m.fontsize.value(),
                      backgroundColor: m.color.value(),
                      backgroundRoundRect: 4,
                    };
                  },
                  R = function (e, t, i) {
                    return {
                      points: [e, t, i],
                      color: 'rgba(0, 0, 0, 0)',
                      linewidth: 0,
                      backcolor: m.backgroundColor.value(),
                      fillBackground: m.fillBackground.value(),
                      transparency: m.transparency.value(),
                    };
                  },
                  T = {
                    points: this._points,
                    color: m.color.value(),
                    linewidth: m.linewidth.value(),
                    linestyle: o.LINESTYLE_SOLID,
                    backcolor: 'rgba(0, 0, 0, 0)',
                    fillBackground: !1,
                    filled: !1,
                  };
                if (
                  (this._polyLineRenderer.setData(T),
                  x.append(this._polyLineRenderer),
                  this._points.length >= 5)
                ) {
                  var S = void 0,
                    P = void 0,
                    L = !1,
                    C = !1;
                  t ? (S = t) : ((S = h), (L = !0)),
                    i ? (P = i) : ((P = p), (C = !0));
                  var M = {
                    points: [S, P],
                    color: m.color.value(),
                    linewidth: m.linewidth.value(),
                    linestyle: o.LINESTYLE_DOTTED,
                    extendleft: !1,
                    extendright: !1,
                    leftend: c.LineEnd.Normal,
                    rightend: c.LineEnd.Normal,
                  };
                  (M.extendleft = L),
                    (M.extendright = C),
                    this._trendLineRenderer.setData(M),
                    x.append(this._trendLineRenderer);
                  var I = R(h, u, p);
                  this._triangleRendererPoints234.setData(I),
                    x.append(this._triangleRendererPoints234);
                }
                if (t) {
                  I = R(t, l, h);
                  this._intersect1Renderer.setData(I),
                    x.append(this._intersect1Renderer);
                }
                if (i) {
                  I = R(p, f, i);
                  this._intersect2Renderer.setData(I),
                    x.append(this._intersect2Renderer);
                }
                if (this._points.length >= 2) {
                  var O = b(l, _.leftShoulder);
                  l.y < s.y
                    ? ((O.vertAlign = 'bottom'), (O.offsetY = 5))
                    : ((O.vertAlign = 'top'), (O.offsetY = 5)),
                    this._leftShoulderLabelRenderer.setData(O),
                    x.append(this._leftShoulderLabelRenderer);
                }
                if (this._points.length >= 4) {
                  O = b(u, _.head);
                  u.y < h.y
                    ? ((O.vertAlign = 'bottom'), (O.offsetY = 5))
                    : ((O.vertAlign = 'top'), (O.offsetY = 5)),
                    this._headLabelRenderer.setData(O),
                    x.append(this._headLabelRenderer);
                }
                if (this._points.length >= 6) {
                  O = b(f, _.rightShoulder);
                  f.y < p.y
                    ? ((O.vertAlign = 'bottom'), (O.offsetY = 5))
                    : ((O.vertAlign = 'top'), (O.offsetY = 5)),
                    this._rightShoulderLabelRenderer.setData(O),
                    x.append(this._rightShoulderLabelRenderer);
                }
                this.addAnchors(x), (this._renderer = x);
              }
            }),
            t
          );
        })(p.LineSourcePaneView);
    },
    FzRY: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('pJOz').TrendLineRenderer,
        a = i('cjIn').PaneRendererCachedImage,
        o = i('VdBB').HitTestResult,
        s = i('Zy3/').CompositeRenderer,
        l = i('zXvd').NumericFormatter,
        h = i('QA6D').EllipseRendererSimple,
        d = i('a7Ha').LineEnd,
        c = i('NCfL').LineToolPaneViewWithLevelledTextCache;
      function u(e, t) {
        c.call(this, e, t),
          (this._rendererCache = {}),
          (this._numericFormatter = new l()),
          (this._trendLineRenderer = new n()),
          (this._renderer = null);
      }
      inherit(u, c),
        (u.prototype.getCacheRects = function (e, t) {
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
        (u.prototype._updateImpl = function () {
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
                u = this._source.levelsCount(),
                p = 1;
              p <= u;
              p++
            ) {
              var _ = l['level' + p];
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
                  index: p,
                });
              }
            }
            if (!(this._points.length < 2)) {
              var w = new s(),
                m = l.fillBackground.value(),
                x = l.transparency.value();
              for (p = 0; p < this._levels.length; p++) {
                var b = this._levels[p],
                  R = {};
                (R.points = b.points),
                  (R.color = b.color),
                  (R.linewidth = b.linewidth),
                  (R.backcolor = b.color),
                  p > 0 && (R.wholePoints = this._levels[p - 1].points),
                  (R.fillBackground = m),
                  (R.transparency = x);
                var T = new o(o.MOVEPOINT, null, b.index);
                if ((w.append(new h(R, T)), l.showCoeffs.value())) {
                  var S = new a(this, p);
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
        (u.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.FibCirclesPaneView = u);
    },
    'GS+0': function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('z+cS').VerticalLineRenderer,
        o = i('pJOz').TrendLineRenderer,
        s = i('VdBB').HitTestResult,
        l = i('Zy3/').CompositeRenderer,
        h = i('a7Ha').LineEnd;
      function d(e, t) {
        n.call(this, e, t),
          (this._lines = []),
          (this._trendRenderer = new o()),
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
                o = i ? i.index - t.index : 1;
              if (((this._lines = []), 0 !== o)) {
                var d = e.visibleBarsStrictRange();
                if (o > 0)
                  for (var c = t.index; c <= d.lastBar(); c += o)
                    this._lines.push({ x: e.indexToCoordinate(c) });
                else
                  for (c = t.index; c >= d.firstBar(); c += o)
                    this._lines.push({ x: e.indexToCoordinate(c) });
                if (!(this._points.length < 2)) {
                  var u = new l(),
                    p = this._source.properties(),
                    _ = {
                      points: [t, i],
                      width: this._model.timeScale().width(),
                      height: this._source.priceScale().height(),
                      color: p.trendline.color.value(),
                      linewidth: p.trendline.linewidth.value(),
                      linestyle: p.trendline.linestyle.value(),
                      extendleft: !1,
                      extendright: !1,
                      leftend: h.Normal,
                      rightend: h.Normal,
                    };
                  this._trendRenderer.setData(_), u.append(this._trendRenderer);
                  var f = this._model.timeScale().width(),
                    v = this._source.priceScale().height();
                  for (c = 0; c < this._lines.length; c++) {
                    var g = {
                        width: f,
                        height: v,
                        x: this._lines[c].x,
                        color: p.linecolor.value(),
                        linewidth: p.linewidth.value(),
                        linestyle: p.linestyle.value(),
                      },
                      y = new a();
                    y.setData(g), u.append(y);
                  }
                  if (2 === this._source.points().length) {
                    var w = [].concat(this._points);
                    u.append(this.createLineAnchor({ points: w }));
                  } else
                    u.append(
                      this.createLineAnchor({
                        points: [
                          new r(
                            this._points[0].x,
                            this._source.priceScale().height() / 2,
                          ),
                        ],
                        hittestResult: s.MOVEPOINT,
                      }),
                    );
                  this._renderer = u;
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
        o = i('IjC5'),
        s = i('Zy3/'),
        l = i('qgcf'),
        h = i('aB9a'),
        d = i('//lt'),
        c = (function (e) {
          function t(t, i) {
            var r = e.call(this, t, i) || this;
            return (
              (r._rectangleRenderer = new o.RectangleRenderer()),
              (r._textRenderer = new l.TextRenderer()),
              (r._renderer = null),
              r
            );
          }
          return (
            Object(r.c)(t, e),
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
                var r = new s.CompositeRenderer();
                r.append(this._rectangleRenderer);
                var o = this._points[0],
                  l = this._points[1];
                if (t.showLabel.value()) {
                  var h = Math.min(o.x, l.x),
                    d = Math.max(o.x, l.x),
                    c = Math.min(o.y, l.y),
                    u = Math.max(o.y, l.y),
                    p = void 0,
                    _ = void 0,
                    f = void 0,
                    v = void 0,
                    g = t.fontSize.value() / 3,
                    y = 0;
                  switch (t.vertLabelsAlign.value()) {
                    case 'middle':
                      (v = (c + u) / 2), (_ = 'middle'), (y = g);
                      break;
                    case 'top':
                      (v = u), (_ = 'top');
                      break;
                    case 'bottom':
                      (v = c), (_ = 'bottom');
                  }
                  switch (t.horzLabelsAlign.value()) {
                    case 'center':
                      (f = (h + d) / 2), (p = 'center');
                      break;
                    case 'left':
                      (f = h), (p = 'left');
                      break;
                    case 'right':
                      (f = d), (p = 'right');
                  }
                  var w = void 0,
                    m = void 0;
                  'middle' === _ && ((w = d - h - 2 * y), (m = u - c));
                  var x = {
                    points: [new n.Point(f, v)],
                    text: t.text.value(),
                    fontSize: t.fontSize.value(),
                    font: a.CHART_FONT_FAMILY,
                    bold: t.bold.value(),
                    italic: t.italic.value(),
                    horzAlign: p,
                    vertAlign: _,
                    color: t.textColor.value(),
                    wordWrapWidth: w,
                    maxHeight: m,
                    offsetX: 0,
                    offsetY: 0,
                    boxPaddingVert: g,
                    boxPaddingHorz: y,
                    forceTextAlign: !0,
                  };
                  this._textRenderer.setData(x), r.append(this._textRenderer);
                }
                this._addAnchors(o, l, r), (this._renderer = r);
              }
            }),
            (t.prototype._addAnchors = function (e, t, i) {
              var r = new n.Point(e.x, t.y);
              r.data = 2;
              var a = new n.Point(t.x, e.y);
              a.data = 3;
              var o = new n.Point(e.x, 0.5 * (e.y + t.y));
              o.data = 4;
              var s = new n.Point(t.x, 0.5 * (e.y + t.y));
              s.data = 5;
              var l = new n.Point(0.5 * (e.x + t.x), e.y);
              l.data = 6;
              var h = new n.Point(0.5 * (e.x + t.x), t.y);
              (h.data = 7),
                [o, s, l, h].forEach(function (e) {
                  return (e.square = !0);
                });
              var c = e.x - t.x,
                u = e.y - t.y,
                p = Math.sign(c * u),
                _ = [
                  p < 0
                    ? d.PaneCursorType.DiagonalNeSwResize
                    : d.PaneCursorType.DiagonalNwSeResize,
                  p < 0
                    ? d.PaneCursorType.DiagonalNeSwResize
                    : d.PaneCursorType.DiagonalNwSeResize,
                  p > 0
                    ? d.PaneCursorType.DiagonalNeSwResize
                    : d.PaneCursorType.DiagonalNwSeResize,
                  p > 0
                    ? d.PaneCursorType.DiagonalNeSwResize
                    : d.PaneCursorType.DiagonalNwSeResize,
                  d.PaneCursorType.HorizontalResize,
                  d.PaneCursorType.HorizontalResize,
                  d.PaneCursorType.VerticalResize,
                  d.PaneCursorType.VerticalResize,
                ];
              i.append(
                this.createLineAnchor({
                  points: [e, t, r, a, o, s, l, h],
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
        o = i('9XXR').splitThousands,
        s = i('Ialn'),
        l = i('2uTr').appendEllipsis,
        h = i('cPgM').ScaledPaneRenderer;
      function d(e, t) {
        h.call(this),
          (this._data = null),
          (this._cache = e),
          (this._adapter = t);
      }
      function c(e, t) {
        r.call(this, e, t),
          (this._rendererCache = {}),
          (this._renderer = new d(this._rendererCache, e._adapter));
      }
      inherit(d, h),
        (d.prototype.setData = function (e) {
          this._data = e;
        }),
        (d.prototype._height = function () {
          return Math.max(
            20,
            1 +
              Math.max(
                n.fontHeight(this._adapter.getBodyFont()),
                n.fontHeight(this._adapter.getQuantityFont()),
              ),
          );
        }),
        (d.prototype._bodyWidth = function (e) {
          if (0 === this._adapter.getText().length) return 0;
          e.save(), (e.font = this._adapter.getBodyFont());
          var t = e.measureText(this._adapter.getText()).width;
          return e.restore(), Math.round(10 + t);
        }),
        (d.prototype._getQuantity = function () {
          var e = this._adapter.getQuantity();
          return isNaN(e) ? e : o(this._adapter.getQuantity(), ' ');
        }),
        (d.prototype._quantityWidth = function (e) {
          if (0 === this._getQuantity().length) return 0;
          e.save(), (e.font = this._adapter.getQuantityFont());
          var t = e.measureText(this._getQuantity()).width;
          return e.restore(), Math.round(Math.max(this._height(), 10 + t));
        }),
        (d.prototype._reverseButtonWidth = function () {
          return this._adapter.isOnReverseCallbackPresent()
            ? this._height()
            : 0;
        }),
        (d.prototype._closeButtonWidth = function () {
          return this._adapter.isOnCloseCallbackPresent() ? this._height() : 0;
        }),
        (d.prototype._drawLines = function (e, t, i, r, n) {
          e.save(),
            (e.strokeStyle = this._adapter.getLineColor()),
            (e.lineStyle = this._adapter.getLineStyle()),
            (e.lineWidth = this._adapter.getLineWidth()),
            CanvasEx.drawLine(e, i, r, n, r),
            this._adapter.getExtendLeft() && CanvasEx.drawLine(e, 0, r, t, r),
            e.restore();
        }),
        (d.prototype._drawBody = function (e, t, i) {
          (e.strokeStyle = this._adapter.getBodyBorderColor()),
            (e.fillStyle = this._adapter.getBodyBackgroundColor());
          var r = this._bodyWidth(e),
            n = this._height();
          e.fillRect(t + 0.5, i + 0.5, r - 1, n - 1), e.strokeRect(t, i, r, n);
        }),
        (d.prototype._drawBodyText = function (e, t, i) {
          e.save(),
            (e.textAlign = 'center'),
            (e.textBaseline = 'middle'),
            (e.font = this._adapter.getBodyFont()),
            (e.fillStyle = this._adapter.getBodyTextColor());
          var r = t + this._bodyWidth(e) / 2,
            n = i + this._height() / 2;
          e.fillText(this._adapter.getText(), r, n), e.restore();
        }),
        (d.prototype._drawQuantity = function (e, t, i) {
          (e.strokeStyle = this._adapter.getQuantityBorderColor()),
            (e.fillStyle = this._adapter.getQuantityBackgroundColor());
          var r = this._quantityWidth(e),
            n = this._height();
          e.fillRect(t + 0.5, i + 0.5, r - 1, n - 1), e.strokeRect(t, i, r, n);
        }),
        (d.prototype._drawQuantityText = function (e, t, i) {
          e.save(),
            (e.textAlign = 'center'),
            (e.textBaseline = 'middle'),
            (e.font = this._adapter.getQuantityFont()),
            (e.fillStyle = this._adapter.getQuantityTextColor());
          var r = t + this._quantityWidth(e) / 2,
            n = i + this._height() / 2;
          e.fillText(s.startWithLTR(this._getQuantity() + ''), r, n),
            e.restore();
        }),
        (d.prototype._drawReverseButton = function (e, t, i) {
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
            o = t + Math.round((this._reverseButtonWidth() - 6) / 2),
            s = i + 5;
          e.save(),
            e.translate(o, s),
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
        (d.prototype._drawCloseButton = function (e, t, i) {
          e.save(),
            (e.strokeStyle = this._adapter.getCloseButtonBorderColor()),
            (e.fillStyle = this._adapter.getCloseButtonBackgroundColor());
          var r = this._closeButtonWidth(),
            n = this._height();
          e.fillRect(t + 0.5, i + 0.5, r - 1, n - 1), e.strokeRect(t, i, r, n);
          var a = t + r,
            o = i + n;
          e.strokeStyle = this._adapter.getCloseButtonIconColor();
          var s = (this._closeButtonWidth() - 8) / 2,
            l = (this._height() - 8) / 2;
          CanvasEx.drawPoly(
            e,
            [
              { x: t + s, y: i + l },
              { x: a - s, y: o - l },
            ],
            !0,
          ),
            CanvasEx.drawPoly(
              e,
              [
                { x: a - s, y: i + l },
                { x: t + s, y: o - l },
              ],
              !0,
            ),
            this._adapter._blocked &&
              ((e.fillStyle = 'rgba(140, 140, 140, 0.75)'),
              e.fillRect(t + 0.5, i + 0.5, r - 1, n - 1)),
            e.restore();
        }),
        (d.prototype._drawImpl = function (e) {
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
              o = t - a,
              s = Math.max((this._adapter.getLineLength() / 100) * t, 1),
              l = Math.round(t - Math.min(o, s)),
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
        (d.prototype.hitTest = function (e) {
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
                    l(window.t('Protect Position')),
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
            : new a(a.CUSTOM, {
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
        inherit(c, r),
        (c.prototype.renderer = function (e, t) {
          return (
            this._invalidated && this._updateImpl(),
            this._renderer.setData({
              points: this._points,
              width: this._model.timeScale().width(),
            }),
            this._renderer
          );
        }),
        (t.PositionPaneView = c);
    },
    'Ht/7': function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('pJOz').TrendLineRenderer,
        o = i('VdBB').HitTestResult,
        s = i('Zy3/').CompositeRenderer,
        l = i('Hr11'),
        h = i('Tmoa'),
        d = i('zDbI').CHART_FONT_FAMILY,
        c = i('QPcX').LetterInCircleRenderer,
        u = i('Tmoa').resetTransparency,
        p = {
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
                  m = i.indexToCoordinate(y.index),
                  x = i.indexToCoordinate(w.index),
                  b = y.price,
                  R = w.price,
                  T = t.priceToCoordinate(b, f),
                  S = t.priceToCoordinate(R, f),
                  P = {
                    points: [new r(m, T), new r(x, S)],
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
              C = new s();
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
              _ = u(e.color.value()), g = 0;
              g < this._points.length - O;
              g++, I = -I
            )
              if (!(g < L)) {
                var D = this._source.label(g),
                  k = D.label,
                  B = 'circle' === D.decoration;
                'brackets' === D.decoration && (k = '(' + k + ')');
                var N = p[D.group],
                  A = new o(o.CHANGEPOINT, { pointIndex: g });
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
            for (var j = [], z = 0; z < this._points.length; z++) {
              var E = this._points[z].clone();
              (E.data = z), j.push(E);
            }
            this._model.lineBeingCreated() === this._source && j.pop(),
              C.append(this.createLineAnchor({ points: j })),
              (this._renderer = C);
          }
        }),
        (t.ElliottLabelsPaneView = _);
    },
    Hyqq: function (e, t, i) {
      'use strict';
      i.r(t);
      var r = i('mrSG'),
        n = i('XlJ7'),
        a = i('Tmoa'),
        o = i('zDbI'),
        s = i('aB9a'),
        l = i('aO4+'),
        h = i('f6yo'),
        d = i('Ialn'),
        c = i('ikwP'),
        u = i('cPgM'),
        p = i('VdBB'),
        _ = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t._geometryCache = {
                innerHeight: NaN,
                textHorizontalPadding: NaN,
                innerWidth: NaN,
                paddingLeft: NaN,
              }),
              (t._geomertryCacheInvalidated = !0),
              (t._data = null),
              t
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.setData = function (e) {
              (this._data = e), (this._geomertryCacheInvalidated = !0);
            }),
            (t.prototype.hitTest = function (e, t) {
              if (null === this._data || 0 === this._data.points.length)
                return null;
              var i =
                  this._data.points[0].x -
                  (this._geometryCache.paddingLeft + 20),
                r =
                  this._data.points[0].y -
                  (this._geometryCache.innerHeight + 9),
                n = Object(l.box)(
                  new l.Point(i, r),
                  new l.Point(
                    i + this._geometryCache.innerWidth,
                    r + this._geometryCache.innerHeight,
                  ),
                );
              return Object(h.pointInBox)(e, n)
                ? new p.HitTestResult(p.HitTestResult.MOVEPOINT, {
                    areaName: 'Text',
                  })
                : null;
            }),
            (t.prototype._drawImpl = function (e, t) {
              if (null !== this._data && 0 !== this._data.points.length) {
                e.font = this._data.font;
                var i = this._measureInfo(
                    e,
                    this._data.label,
                    this._data.fontSize,
                  ),
                  r = i.paddingLeft,
                  n = i.innerHeight,
                  a = i.innerWidth,
                  o = i.textHorizontalPadding;
                e.textAlign = Object(d.isRtl)() ? 'right' : 'left';
                var s = this._data.points[0].x - (r + 20),
                  l = this._data.points[0].y - (n + 9);
                e.translate(s, l),
                  e.beginPath(),
                  e.moveTo(24, n),
                  e.lineTo(15, n),
                  e.arcTo(-1e3, 0, 1e3, 0, n / 2),
                  e.lineTo(a - 15, 0),
                  e.arcTo(1e3, n, -1e3, n, n / 2),
                  e.lineTo(33, n),
                  e.quadraticCurveTo(33, n + 4, 35, n + 9),
                  e.quadraticCurveTo(27, n + 6, 24, n),
                  (e.fillStyle = this._data.backgroundColor),
                  e.fill(),
                  (e.strokeStyle = this._data.borderColor),
                  (e.lineWidth = 2),
                  e.stroke(),
                  e.closePath(),
                  (e.textBaseline = 'middle'),
                  (e.fillStyle = this._data.color),
                  e.fillText(this._data.label, r + o, n / 2);
              }
            }),
            (t.prototype._measureInfo = function (e, t, i) {
              if (this._geomertryCacheInvalidated) {
                var r = e.measureText(t),
                  a = Object(n.fontSizeToPixels)(i),
                  o = Math.round(a / 1.3),
                  s = r.width + 30,
                  l = a + 2 * o,
                  h = Object(c.calcTextHorizontalShift)(e, r.width);
                (this._geometryCache = {
                  paddingLeft: 15,
                  innerWidth: s,
                  innerHeight: l,
                  textHorizontalPadding: h,
                }),
                  (this._geomertryCacheInvalidated = !1);
              }
              return this._geometryCache;
            }),
            t
          );
        })(u.ScaledPaneRenderer),
        f = i('Zy3/'),
        v = i('vq8G');
      i.d(t, 'BalloonPaneView', function () {
        return g;
      });
      var g = (function (e) {
        function t(t, i) {
          var r = e.call(this, t, i) || this;
          return (r._balloonRenderer = new _()), (r._renderer = null), r;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.renderer = function (e, t) {
            return this._invalidated && this._updateImpl(), this._renderer;
          }),
          (t.prototype._updateImpl = function (t, i) {
            e.prototype._updateImpl.call(this, t, i);
            var r = this._source.properties().childs(),
              s = {
                points: this._points,
                color: r.color.value(),
                borderColor: r.borderColor.value(),
                backgroundColor: Object(a.generateColor)(
                  r.backgroundColor.value(),
                  r.transparency.value(),
                ),
                font: Object(n.makeFont)(
                  r.fontsize.value(),
                  o.CHART_FONT_FAMILY,
                ),
                fontSize: r.fontsize.value(),
                label: r.text.value(),
              };
            if ((this._balloonRenderer.setData(s), 1 === s.points.length)) {
              var l = new f.CompositeRenderer();
              return (
                l.append(this._balloonRenderer),
                l.append(
                  new v.SelectionRenderer({
                    points: s.points,
                    bgColors: this._lineAnchorColors(s.points),
                    visible: this.areAnchorsVisible(),
                    barSpacing: this._model.timeScale().barSpacing(),
                    hittestResult: p.HitTestResult.MOVEPOINT,
                  }),
                ),
                void (this._renderer = l)
              );
            }
            this._renderer = this._balloonRenderer;
          }),
          t
        );
      })(s.LineSourcePaneView);
    },
    Jej9: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'LineToolTrianglePatternPaneView', function () {
          return u;
        });
      var r = i('mrSG'),
        n = i('Eyy1'),
        a = i('aO4+'),
        o = i('8Uy/'),
        s = i('Zy3/'),
        l = i('pJOz'),
        h = i('/S7V'),
        d = i('qgcf'),
        c = i('a7Ha'),
        u = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._trendLineRendererPoints01 = new l.TrendLineRenderer()),
              (t._trendLineRendererPoints12 = new l.TrendLineRenderer()),
              (t._trendLineRendererPoints23 = new l.TrendLineRenderer()),
              (t._intersectionRenderer = new h.TriangleRenderer()),
              (t._aLabelRenderer = new d.TextRenderer()),
              (t._bLabelRenderer = new d.TextRenderer()),
              (t._cLabelRenderer = new d.TextRenderer()),
              (t._dLabelRenderer = new d.TextRenderer()),
              (t._renderer = null),
              t
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.renderer = function (e, t) {
              return this._invalidated && this._updateImpl(), this._renderer;
            }),
            (t.prototype._updateImpl = function () {
              e.prototype._updateImpl.call(this), (this._renderer = null);
              var t,
                i,
                r,
                l = this._points,
                h = l[0],
                d = l[1],
                u = l[2],
                p = l[3];
              if (4 === this._points.length) {
                if (Math.abs(u.x - h.x) < 1 || Math.abs(p.x - d.x) < 1) return;
                var _ = Math.min(h.x, d.x);
                (_ = Math.min(_, u.x)), (_ = Math.min(_, p.x));
                var f = (u.y - h.y) / (u.x - h.x),
                  v = h.y + (_ - h.x) * f,
                  g = (p.y - d.y) / (p.x - d.x),
                  y = d.y + (_ - d.x) * g;
                if (Math.abs(f - g) < 1e-6) return;
                (i = new a.Point(_, v)), (r = new a.Point(_, y));
                var w = (d.y - h.y + (h.x * f - d.x * g)) / (f - g);
                if (w < _) {
                  var m = Math.max(h.x, d.x);
                  (m = Math.max(m, u.x)),
                    (m = Math.max(m, p.x)),
                    (i = new a.Point(m, h.y + (m - h.x) * f)),
                    (r = new a.Point(m, d.y + (m - d.x) * g));
                }
                var x = h.y + (w - h.x) * f;
                t = new a.Point(w, x);
              }
              if (!(this._points.length < 2)) {
                var b = this._source.properties().childs(),
                  R = new s.CompositeRenderer(),
                  T = function (e, t) {
                    return {
                      points: [e],
                      text: t,
                      color: b.textcolor.value(),
                      vertAlign: 'middle',
                      horzAlign: 'center',
                      font: b.font.value(),
                      offsetX: 0,
                      offsetY: 0,
                      bold: b.bold && b.bold.value(),
                      italic: b.italic && b.italic.value(),
                      fontsize: b.fontsize.value(),
                      backgroundColor: b.color.value(),
                      backgroundRoundRect: 4,
                    };
                  },
                  S = function (e, t) {
                    return {
                      points: [e, t],
                      color: b.color.value(),
                      linewidth: b.linewidth.value(),
                      linestyle: o.LINESTYLE_SOLID,
                      extendleft: !1,
                      extendright: !1,
                      leftend: c.LineEnd.Normal,
                      rightend: c.LineEnd.Normal,
                    };
                  };
                if (
                  (this._trendLineRendererPoints01.setData(S(h, d)),
                  R.append(this._trendLineRendererPoints01),
                  this._points.length >= 3 &&
                    (this._trendLineRendererPoints12.setData(S(d, u)),
                    R.append(this._trendLineRendererPoints12)),
                  4 === this._points.length &&
                    (this._trendLineRendererPoints23.setData(S(u, p)),
                    R.append(this._trendLineRendererPoints23),
                    t))
                ) {
                  var P = {
                    points: [
                      Object(n.ensureDefined)(i),
                      Object(n.ensureDefined)(r),
                      t,
                    ],
                    color: b.color.value(),
                    linewidth: b.linewidth.value(),
                    backcolor: b.backgroundColor.value(),
                    fillBackground: b.fillBackground.value(),
                    transparency: b.transparency.value(),
                    linestyle: o.LINESTYLE_DOTTED,
                  };
                  this._intersectionRenderer.setData(P),
                    R.append(this._intersectionRenderer);
                }
                var L = T(h, 'A');
                d.y > h.y
                  ? ((L.vertAlign = 'bottom'), (L.offsetY = 5))
                  : ((L.vertAlign = 'top'), (L.offsetY = 5)),
                  this._aLabelRenderer.setData(L),
                  R.append(this._aLabelRenderer);
                var C = T(d, 'B');
                if (
                  (d.y < h.y
                    ? ((C.vertAlign = 'bottom'), (C.offsetY = 5))
                    : ((C.vertAlign = 'top'), (C.offsetY = 5)),
                  this._bLabelRenderer.setData(C),
                  R.append(this._bLabelRenderer),
                  this._points.length > 2)
                ) {
                  var M = T(u, 'C');
                  u.y < d.y
                    ? ((M.vertAlign = 'bottom'), (M.offsetY = 5))
                    : ((M.vertAlign = 'top'), (M.offsetY = 5)),
                    this._cLabelRenderer.setData(M),
                    R.append(this._cLabelRenderer);
                }
                if (this._points.length > 3) {
                  var I = T(p, 'D');
                  p.y < u.y
                    ? ((I.vertAlign = 'bottom'), (I.offsetY = 5))
                    : ((I.vertAlign = 'top'), (I.offsetY = 5)),
                    this._dLabelRenderer.setData(I),
                    R.append(this._dLabelRenderer);
                }
                this.addAnchors(R), (this._renderer = R);
              }
            }),
            t
          );
        })(i('aB9a').LineSourcePaneView);
    },
    JeuX: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'PathPaneView', function () {
          return o;
        });
      var r = i('mrSG'),
        n = i('BCbF'),
        a = i('Zy3/'),
        o = (function (e) {
          function t(t, i) {
            var r = e.call(this, t, i) || this;
            return (
              (r._polygonRenderer = new n.PolygonRenderer(null)),
              (r._renderer = new a.CompositeRenderer()),
              r
            );
          }
          return (
            Object(r.c)(t, e),
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
    KFbh: function (e, t, i) {
      'use strict';
      i.r(t);
      var r = i('mrSG'),
        n = i('aO4+'),
        a = i('Eyy1'),
        o = i('HGP3'),
        s = i('zDbI'),
        l = i('jvrd'),
        h = i('GEp6'),
        d = i('f6yo'),
        c = i('VaSN'),
        u = i('ikwP'),
        p = i('qgcf'),
        _ = i('VdBB'),
        f = i('XXdw'),
        v = i('QloM'),
        g = new WeakMap();
      function y(e, t, i, r) {
        var n = g.get(e);
        return (
          (void 0 !== n && n.width === t) ||
            ((n = (function (e, t, i, r) {
              var n = Object(u.createDisconnectedCanvas)(
                  document,
                  new u.Size(t, t),
                  1,
                ),
                a =
                  0 === r
                    ? Math.min(e.width, e.height)
                    : Math.max(e.width, e.height),
                o = Math.round(e.width / 2 - a / 2),
                s = Math.round(e.height / 2 - a / 2),
                l = Object(u.getContext2D)(n);
              return (
                i &&
                  (l.beginPath(),
                  l.arc(t / 2, t / 2, t / 2, 0, 2 * Math.PI, !0),
                  l.closePath(),
                  l.clip()),
                (l.imageSmoothingEnabled = !0),
                (l.imageSmoothingQuality = 'high'),
                l.drawImage(e, o, s, a, a, 0, 0, t, t),
                n
              );
            })(e, t, i, r)),
            g.set(e, n)),
          n
        );
      }
      function w(e, t) {
        var i = Math.max(1, Math.floor(t)) % 2 ? 0.5 : 0;
        return Math.round(e * t) + i;
      }
      function m(e) {
        return e.poleStartY;
      }
      function x(e) {
        return e.inverseAnchorPosition
          ? e.anchorY
          : e.anchorY +
              (e.labelHeight + e.poleTailHeight + 2 * e.circleRadius) *
                e.direction;
      }
      function b(e) {
        return e.inverseAnchorPosition
          ? e.anchorY + (2 * e.circleRadius + e.poleTailHeight) * e.direction
          : e.anchorY + e.labelHeight * e.direction;
      }
      function R(e) {
        return e.inverseAnchorPosition
          ? b(e) - e.poleTailHeight * e.direction
          : b(e) + e.poleTailHeight * e.direction;
      }
      function T(e, t, i, r, n, a) {
        var o = w(t.circleRadius, a),
          s = Math.round(t.x * a),
          l = t.inverseAnchorPosition
            ? Math.round(t.anchorY * a) +
              Math.round(t.circleRadius * a) * t.direction
            : Math.round(t.anchorY * a) +
              Math.round(
                (t.labelHeight + t.poleTailHeight + t.circleRadius) * a,
              ) *
                t.direction,
          h = (Math.max(1, Math.floor(a)) % 2) / 2,
          d = s + h,
          c = l + h;
        e.save();
        var u = c + 0.05 * o,
          p = e.createRadialGradient(d, u, o / 2, d, u, 1.1 * o);
        if (
          (p.addColorStop(0, 'transparent'),
          p.addColorStop(0.1, r),
          p.addColorStop(1, 'transparent'),
          (e.fillStyle = p),
          e.beginPath(),
          e.arc(d, u, 1.1 * o, 0, 2 * Math.PI, !0),
          e.closePath(),
          e.fill(),
          e.restore(),
          e.beginPath(),
          e.arc(d, c, o, 0, 2 * Math.PI, !0),
          e.closePath(),
          e.fill(),
          null !== t.image)
        ) {
          var _ = t.srcItem.type() === f.StoriesTimeLineItemType.Emoji,
            v = _ ? 2 * w(i, a) : 2 * o,
            g = y(t.image, v, !_, _ ? 1 : 0);
          e.drawImage(g, d - v / 2, c - v / 2);
        }
        var m = Math.round(t.circleBorderWidth * a),
          x = (function (e, t, i) {
            var r = Math.max(1, Math.floor(t)) % 2 ? 0.5 : 0;
            return Math.round(e * t) + (r !== i % 2 ? 0.5 : 0);
          })(t.circleRadius, a, m);
        if (
          ((e.lineWidth = m),
          e.beginPath(),
          e.arc(d, c, x, 0, 2 * Math.PI, !0),
          e.closePath(),
          e.stroke(),
          t.outsideBorderWidth)
        ) {
          e.save();
          var b = Math.round(t.outsideBorderWidth * a),
            R = x + m / 2 + b / 2;
          (e.lineWidth = b),
            (e.strokeStyle = n),
            e.beginPath(),
            e.arc(d, c, R, 0, 2 * Math.PI, !0),
            e.closePath(),
            e.stroke(),
            e.restore();
        }
      }
      var S = (function () {
          function e(e, t, i, r) {
            (this._data = null),
              (this._labels = []),
              (this._cacheRects = {}),
              (this._items = []),
              (this._hitTestResult = e),
              (this._showTooltipHandler = t),
              (this._clearSelectedDataHandler = i),
              (this._phantomMode = Boolean(r));
          }
          return (
            (e.prototype.setData = function (e) {
              this._data = e;
            }),
            (e.prototype.clearItems = function () {
              (this._labels = []), (this._items = []), (this._cacheRects = {});
            }),
            (e.prototype.addItem = function (e) {
              var t = {
                  circleBackgroundColor: e.circleBackgroundColor,
                  circleBorderColor: e.circleBorderColor,
                  circleBorderWidth: e.circleBorderWidth,
                  outsideBorderWidth: e.outsideBorderWidth,
                  image: e.image,
                  itemIndex: e.itemIndex,
                  labelIndex: e.labelIndex,
                  x: e.x,
                  anchorY: e.anchorY,
                  poleTailHeight: e.poleTailHeight,
                  poleStartY: e.poleStartY,
                  circleRadius: e.circleRadius,
                  srcItem: e.srcItem,
                  direction: e.direction * (e.inverseAnchorPosition ? -1 : 1),
                  labelHeight: 0,
                  labelId: -1,
                  inverseAnchorPosition: e.inverseAnchorPosition,
                },
                i = {
                  offsetX: 0,
                  offsetY: 0,
                  points: [new n.Point(e.x, e.anchorY)],
                  forceCalculateMaxLineWidth: !0,
                  vertAlign: -1 === e.labelDirection ? 'bottom' : 'top',
                  horzAlign: 'center',
                  horzTextAlign: 'center',
                  font: e.labelFont,
                  fontSize: e.labelFontSize,
                  bold: e.labelFontBold,
                  italic: e.labelFontItalic,
                  backgroundRoundRect: e.labelBorderRadius,
                  padding: e.labelPadding,
                  boxPaddingVert: e.labelBoxPaddingVert,
                  boxPaddingHorz: e.labelBoxPaddingHorz,
                  wordWrapWidth: e.labelWordWrapWidth,
                  color: e.labelColor,
                  borderColor: e.labelBorderColor,
                  borderWidth: 1,
                  backgroundColor: e.labelBackgroundColor,
                  text: e.text,
                };
              if (e.inverseAnchorPosition) {
                var r = Object(a.ensureDefined)(i.points);
                (r[0] = new n.Point(r[0].x, b(t))),
                  (t.labelId = this._labels.length);
              } else {
                var o = new p.TextRenderer(i);
                this._labels.push(o),
                  (t.labelId = this._labels.length),
                  (t.labelHeight = o.measure().height);
                var s =
                  1 === e.direction
                    ? Math.min(t.poleStartY - t.labelHeight, t.anchorY)
                    : Math.max(t.poleStartY + t.labelHeight, t.anchorY);
                t.anchorY !== s &&
                  ((t.anchorY = s),
                  (i.points = [new n.Point(e.x, s)]),
                  o.setData(i));
              }
              var l = new p.TextRenderer(i);
              this._labels.push(l), this._items.push(t);
            }),
            (e.prototype.itemAnchorY = function (e) {
              return e >= this._items.length ? null : this._items[e].anchorY;
            }),
            (e.prototype.hitTest = function (e, t) {
              var i = this;
              if (null === this._data) return null;
              for (
                var r = function (r) {
                    var o = a._items[r],
                      s = a._doesPointBelongToItem(o, e),
                      l = s[0],
                      h = s[1],
                      d = s[2];
                    if (l || h || d) {
                      var c = {
                        hideCrosshairLinesOnHover: !0,
                        itemIndex: l || h ? o.itemIndex : o.labelIndex,
                      };
                      d
                        ? (c.areaName = v.TabNames.text)
                        : h && (c.areaName = v.TabNames.style);
                      var u = a._showTooltipHandler;
                      if (void 0 !== u) {
                        var p = {
                            targetBox: a._itemRect(o, t.cssHeight),
                            item: o.srcItem,
                          },
                          f = function (e) {
                            var t = i._doesPointBelongToItem(o, e),
                              r = t[0],
                              n = t[1];
                            return r || n;
                          };
                        (c.tapHandler = function (e) {
                          e.preventDefault(),
                            u(
                              p,
                              new n.Point(
                                e.clientX - e.localX,
                                e.clientY - e.localY,
                              ),
                              f,
                            );
                        }),
                          (c.clickHandler = function (e) {
                            u(
                              p,
                              new n.Point(
                                e.clientX - e.localX,
                                e.clientY - e.localY,
                              ),
                              f,
                            );
                          });
                        var g = a._clearSelectedDataHandler;
                        void 0 !== g &&
                          ((c.doubleClickHandler = function (e) {
                            return g();
                          }),
                          (c.pressedMouseMoveHandler = function (e) {
                            return g();
                          }),
                          (c.executeDefaultAction = {
                            pressedMouseMoveHandler: !0,
                            touchMoveHandler: !0,
                          }));
                      }
                      return {
                        value: new _.HitTestResult(a._hitTestResult, c),
                      };
                    }
                  },
                  a = this,
                  o = this._items.length - 1;
                o >= 0;
                --o
              ) {
                var s = r(o);
                if ('object' == typeof s) return s.value;
              }
              return null;
            }),
            (e.prototype.draw = function (e, t) {
              if (null !== this._data) {
                e.save(), this._phantomMode && (e.globalAlpha = 0.5);
                var i = this._data,
                  r = i.poleColor,
                  n = i.emojiRadius,
                  a = t.pixelRatio,
                  o = Math.max(1, Math.floor(a)),
                  s = o % 2 ? 0.5 : 0;
                e.beginPath(), (e.strokeStyle = r), (e.lineWidth = o);
                for (var l = 0, h = this._items; l < h.length; l++) {
                  var d = h[l],
                    c = Math.round(d.x * a) + s;
                  e.moveTo(c, Math.round(m(d) * a)),
                    e.lineTo(c, Math.round(x(d) * a)),
                    0 !== d.poleTailHeight &&
                      (e.moveTo(c, Math.round(b(d) * a)),
                      e.lineTo(c, Math.round(R(d) * a)));
                }
                e.stroke();
                for (var u = 0, p = this._items; u < p.length; u++) {
                  d = p[u];
                  (e.strokeStyle = d.circleBorderColor),
                    (e.fillStyle = d.circleBackgroundColor),
                    d.circleRadius > 0 &&
                      T(
                        e,
                        d,
                        n,
                        this._data.shadowColor,
                        this._data.outsideBorderColor,
                        a,
                      ),
                    this._labels[d.labelId].draw(e, t);
                }
                e.restore();
              }
            }),
            (e.prototype._itemRect = function (e, t) {
              if (!this._cacheRects[e.labelId]) {
                var i = this._labels[e.labelId].rect(),
                  r =
                    e.circleRadius > 0
                      ? e.circleRadius + e.circleBorderWidth
                      : 0,
                  n = i.y < e.poleStartY;
                this._cacheRects[e.labelId] = {
                  top: Math.max(n ? i.y : e.poleStartY, 0),
                  bottom: Math.min(n ? e.poleStartY : i.y + i.height, t),
                  left: Math.min(e.x - r, i.x),
                  right: Math.max(e.x + r, i.x + i.width),
                };
              }
              return this._cacheRects[e.labelId];
            }),
            (e.prototype._doesPointBelongToItem = function (e, t) {
              var i = Object(c.lastEventIsTouch)() ? 20 : 3,
                r = e.x,
                a =
                  Object(h.distanceToSegment)(
                    new n.Point(r, m(e)),
                    new n.Point(r, x(e)),
                    t,
                  ).distance < i,
                o =
                  !a &&
                  e.circleRadius > 0 &&
                  Object(d.pointInCircle)(
                    t,
                    new n.Point(
                      r,
                      (function (e) {
                        return e.inverseAnchorPosition
                          ? e.anchorY + e.circleRadius * e.direction
                          : e.anchorY +
                              (e.labelHeight +
                                e.poleTailHeight +
                                e.circleRadius) *
                                e.direction;
                      })(e),
                    ),
                    e.circleRadius + i,
                  );
              return [
                a,
                o,
                !a && !o && null !== this._labels[e.labelId].hitTest(t),
              ];
            }),
            e
          );
        })(),
        P = {
          circleBackgroundColor: o.a['color-cold-gray-800'],
          circleBorderColor: o.a['color-cold-gray-900'],
          labelBackgroundColor: o.a['color-cold-gray-900'],
          labelBorderColor: o.a['color-cold-gray-800'],
          labelTextColor: o.a['color-cold-gray-200'],
          poleColor: o.a['color-cold-gray-500'],
          shadowColor: 'rgba(0,0,0,0.4)',
          selectionColor: o.a['color-tv-blue-500'],
          labelHoveredColor: o.a['color-cold-gray-800'],
          labelSelectedColor: o.a['color-tv-blue-a900'],
        },
        L = {
          circleBackgroundColor: o.a['color-cold-gray-100'],
          circleBorderColor: o.a['color-white'],
          labelBackgroundColor: o.a['color-white'],
          labelBorderColor: o.a['color-cold-gray-150'],
          labelTextColor: o.a['color-cold-gray-900'],
          poleColor: o.a['color-cold-gray-500'],
          shadowColor: 'rgba(107,121,136,0.4)',
          selectionColor: o.a['color-tv-blue-500'],
          labelHoveredColor: o.a['color-cold-gray-100'],
          labelSelectedColor: o.a['color-tv-blue-50'],
        };
      function C(e, t, i) {
        var r = Object(l.a)(e, t, i);
        if (null === r) return null;
        var n = Object(l.c)(e.position(), t.isInverted());
        return {
          index: r.index,
          price: r.price,
          poleStartY: t.height(),
          visualDirection: 1,
          positionPointDirection: n,
        };
      }
      function M(e, t) {
        var i = Object(l.d)(e, t),
          r = e.priceScale(),
          n = Object(a.ensureNotNull)(e.firstValue());
        if (null === i) return C(t, r, n);
        var o = 0,
          s = e.properties(),
          h = e.model().timeScale(),
          d = r.priceToCoordinate(i.price, n);
        switch (e.style()) {
          case 3:
            o = s.areaStyle.linewidth.value() / 2;
            break;
          case 2:
            o = s.lineStyle.linewidth.value() / 2;
            break;
          case 10:
            var c = Math.abs(100 - s.baselineStyle.baseLevelPercentage.value());
            o =
              (r.height() * c) / 100 > d
                ? s.baselineStyle.topLineWidth.value() / 2
                : s.baselineStyle.bottomLineWidth.value() / 2;
            break;
          case 1:
          case 9:
          case 8:
          case 12:
            o = 3;
            break;
          case 0:
            o = s.barStyle.thinBars.value()
              ? 3
              : Math.max(3, 0.25 * h.barSpacing());
            break;
          case 11:
            o = s.rangeStyle.thinBars.value()
              ? 3
              : Math.max(3, 0.25 * h.barSpacing());
            break;
          case 4:
          case 7:
            o = 3;
            break;
          case 5:
            o = Math.max(4, 0.25 * h.barSpacing());
            break;
          case 6:
            o = Math.max(5, 0.25 * h.barSpacing());
        }
        var u = Object(l.c)(t.position(), r.isInverted()),
          p = d - u * o;
        return {
          index: i.index,
          price: i.price,
          poleStartY: p,
          visualDirection: u,
          positionPointDirection: u,
        };
      }
      var I = (function () {
          function e(e, t, i, r, n) {
            (this._renderer = null),
              (this._invalidated = !0),
              (this._model = e),
              (this._timeLine = t),
              (this._timeLineItemsRenderer = new S(
                i,
                null == r ? void 0 : r.tooltipHandler,
                null == r ? void 0 : r.clearSelectedDataHandler,
                n,
              ));
          }
          return (
            (e.prototype.update = function () {
              this._invalidated = !0;
            }),
            (e.prototype.renderer = function (e, t) {
              return (
                this._invalidated &&
                  (this._updateImpl(e), (this._invalidated = !1)),
                this._renderer
              );
            }),
            (e.prototype.itemAnchorY = function (e) {
              return this._timeLineItemsRenderer.itemAnchorY(e);
            }),
            (e.prototype._updateImpl = function (e) {
              (this._renderer = null), this._timeLineItemsRenderer.clearItems();
              var t = this._timeLine.priceSource();
              if (null !== t) {
                var i = this._model.timeScale(),
                  r = t.priceScale(),
                  n = t.firstValue();
                if (!i.isEmpty() && null !== r && !r.isEmpty() && null !== n) {
                  for (
                    var a,
                      o = this._model.isDark(),
                      h = o ? P : L,
                      d = this._model.mainSeries(),
                      c = 0,
                      u = this._timeLine.items();
                    c < u.length;
                    c++
                  ) {
                    var p = u[c];
                    if (!this._timeLine.isHidden(p.category())) {
                      var _ = p.position(),
                        f = t === d ? M(d, p) : C(p, r, n);
                      if (null !== f) {
                        var v = i.indexToCoordinate(f.index),
                          g = r.priceToCoordinate(f.price, n),
                          y = p.showPlate(),
                          w = Object(l.b)(_, e, g, f.positionPointDirection);
                        w >= -1e-10 &&
                          w <= e + 1e-10 &&
                          (w = Math.min(e - 2, Math.max(2, w)));
                        var m = f.visualDirection !== f.positionPointDirection,
                          x = f.visualDirection,
                          b = this._timeLine.isItemSelected(p),
                          R = this._timeLine.isItemHovered(p),
                          T = {
                            circleBackgroundColor:
                              p.backgroundPlateColor(o) ||
                              h.circleBackgroundColor,
                            outsideBorderWidth: b ? 2 : R ? 1 : 0,
                            circleBorderColor: h.circleBorderColor,
                            circleBorderWidth: 1,
                            image: p.image(),
                            itemIndex: p.itemIndex(),
                            labelIndex: p.labelIndex(),
                            x: v,
                            anchorY: w,
                            poleTailHeight: p.headline() && y ? 10 : 0,
                            poleStartY: f.poleStartY,
                            circleRadius: y ? 35 : 0,
                            direction: x,
                            inverseAnchorPosition: m,
                            srcItem: p,
                            text: p.headline(),
                            labelDirection: f.positionPointDirection,
                            labelFont: s.CHART_FONT_FAMILY,
                            labelFontSize: (p.fontSize && p.fontSize()) || 12,
                            labelFontBold: (p.fontBold && p.fontBold()) || !1,
                            labelFontItalic:
                              (p.fontItalic && p.fontItalic()) || !1,
                            labelBorderRadius: 4,
                            labelPadding: 3,
                            labelBoxPaddingVert: 6,
                            labelBoxPaddingHorz: 8,
                            labelWordWrapWidth: 134,
                            labelColor: h.labelTextColor,
                            labelBorderColor: h.labelBorderColor,
                            labelBackgroundColor: b
                              ? h.labelSelectedColor
                              : R
                              ? h.labelHoveredColor
                              : h.labelBackgroundColor,
                          };
                        this._timeLine.isItemHovered(p)
                          ? (a = T)
                          : this._timeLineItemsRenderer.addItem(T);
                      }
                    }
                  }
                  void 0 !== a && this._timeLineItemsRenderer.addItem(a),
                    this._timeLineItemsRenderer.setData({
                      emojiRadius: 16,
                      poleColor: h.poleColor,
                      shadowColor: h.shadowColor,
                      outsideBorderColor: h.selectionColor,
                    }),
                    (this._renderer = this._timeLineItemsRenderer);
                }
              }
            }),
            e
          );
        })(),
        O = i('Zy3/'),
        D = i('//lt'),
        k = i('aB9a');
      i.d(t, 'SignpostPaneView', function () {
        return B;
      });
      var B = (function (e) {
        function t(t, i) {
          var r = e.call(this, t, i) || this;
          return (
            (r._renderer = new O.CompositeRenderer()),
            (r._storiesEventsPaneView = new I(
              i,
              t,
              _.HitTestResult.MOVEPOINT,
              void 0,
              t.isPhantom(),
            )),
            r
          );
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.renderer = function (e, t) {
            return this._invalidated && this._updateImpl(e, t), this._renderer;
          }),
          (t.prototype._updateImpl = function (t, i) {
            e.prototype._updateImpl.call(this),
              this._renderer.clear(),
              this._storiesEventsPaneView.update();
            var r = this._storiesEventsPaneView.renderer(t, i);
            if (
              (null !== r && this._renderer.append(r),
              !this._source.isPhantom())
            ) {
              var a = this._storiesEventsPaneView.itemAnchorY(0);
              if (null !== a) {
                var o = this._points[0],
                  s = new n.Point(o.x, a);
                (s.data = o.data),
                  (s.square = !0),
                  this._renderer.append(
                    this.createLineAnchor({
                      points: [s],
                      pointsCursorType: [D.PaneCursorType.VerticalResize],
                    }),
                  );
              }
            }
          }),
          t
        );
      })(k.LineSourcePaneView);
    },
    LMGK: function (e, t, i) {
      'use strict';
      i.r(t);
      var r = i('mrSG'),
        n = i('aO4+'),
        a = i('aB9a'),
        o = i('Zy3/'),
        s = i('YFKU'),
        l = i('9XXR'),
        h = i('jFln'),
        d = i('cPgM'),
        c = i('VdBB'),
        u = i('2uTr'),
        p = i('jkoZ'),
        _ = Object(s.t)('Modify Order'),
        f = Object(s.t)('Cancel Order'),
        v = (function (e) {
          function t(t) {
            var i = e.call(this) || this;
            return (
              (i._data = null),
              (i._cache = {}),
              (i._data = null),
              (i._adapter = t),
              i
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.setData = function (e) {
              this._data = e;
            }),
            (t.prototype.hitTest = function (e, t) {
              if (null === this._data || 0 === this._data.points.length)
                return null;
              var i = this._cache;
              if (e.y < i.top || e.y > i.bottom) return null;
              if (this._adapter.getBlocked() && e.x >= i.left && e.x < i.right)
                return new c.HitTestResult(c.HitTestResult.CUSTOM, {});
              if (
                this._adapter.getEditable() &&
                e.x >= i.left &&
                e.x < i.bodyRight
              ) {
                var r = this._adapter.hasMoveCallback()
                  ? c.HitTestResult.MOVEPOINT
                  : c.HitTestResult.REGULAR;
                return 0 === this._adapter.getTooltip().length
                  ? new c.HitTestResult(r)
                  : new c.HitTestResult(r, {
                      tooltip: {
                        text: this._adapter.getTooltip(),
                        rect: {
                          x: i.left,
                          y: i.top,
                          w: i.bodyRight - i.left,
                          h: i.bottom - i.top,
                        },
                      },
                    });
              }
              return this._adapter.getEditable() &&
                e.x >= i.bodyRight &&
                e.x < i.quantityRight
                ? this._adapter.hasModifyCallback()
                  ? new c.HitTestResult(c.HitTestResult.CUSTOM, {
                      clickHandler: this._adapter.callOnModify.bind(
                        this._adapter,
                      ),
                      tapHandler: this._adapter.callOnModify.bind(
                        this._adapter,
                      ),
                      tooltip: {
                        text:
                          this._adapter.getModifyTooltip() ||
                          Object(u.appendEllipsis)(_),
                        rect: {
                          x: i.bodyRight,
                          y: i.top,
                          w: i.quantityRight - i.bodyRight,
                          h: i.bottom - i.top,
                        },
                      },
                    })
                  : new c.HitTestResult(c.HitTestResult.REGULAR)
                : this._adapter.getCancellable() &&
                  e.x >= i.quantityRight &&
                  e.x < i.right
                ? new c.HitTestResult(c.HitTestResult.CUSTOM, {
                    clickHandler: this._adapter.callOnCancel.bind(
                      this._adapter,
                    ),
                    tapHandler: this._adapter.callOnCancel.bind(this._adapter),
                    tooltip: {
                      text: this._adapter.getCancelTooltip() || f,
                      rect: {
                        x: i.quantityRight,
                        y: i.top,
                        w: i.right - i.quantityRight,
                        h: i.bottom - i.top,
                      },
                    },
                  })
                : null;
            }),
            (t.prototype._drawImpl = function (e, t) {
              if (
                null !== this._data &&
                this._data.points &&
                !(this._data.points.length < 1)
              ) {
                var i = t.cssWidth,
                  r = this._bodyWidth(e),
                  n = this._quantityWidth(e),
                  a = r + n + this._cancelButtonWidth(),
                  o = i - a,
                  s = Math.max((this._adapter.getLineLength() / 100) * i, 1),
                  l = Math.round(i - Math.min(o, s)),
                  h = l - a,
                  d = Math.round(this._data.points[0].y),
                  c = Math.round(d - (this._height() + 1) / 2);
                (this._cache.bodyRight = h + r),
                  (this._cache.quantityRight = h + r + n),
                  (this._cache.top = c),
                  (this._cache.bottom = c + this._height()),
                  (this._cache.left = h),
                  (this._cache.right = l),
                  this._drawLines(e, h, l, d, i);
                var u = !1;
                0 !== r &&
                  (this._drawBody(e, h, c),
                  this._adapter.hasMoveCallback() &&
                    this._drawMovePoints(e, h, c),
                  this._drawBodyText(e, h, c),
                  (u = !0)),
                  0 !== n &&
                    (this._drawQuantity(e, h + r, c, u),
                    this._drawQuantityText(e, h + r, c),
                    (u = !0)),
                  0 !== this._cancelButtonWidth() &&
                    this._drawCancelButton(e, h + r + n, c, u);
              }
            }),
            (t.prototype._height = function () {
              return Math.max(
                20,
                1 +
                  Math.max(
                    p.fontHeight(this._adapter.getBodyFont()),
                    p.fontHeight(this._adapter.getQuantityFont()),
                  ),
              );
            }),
            (t.prototype._bodyWidth = function (e) {
              if (0 === this._adapter.getText().length) return 0;
              e.save(), (e.font = this._adapter.getBodyFont());
              var t = e.measureText(this._adapter.getText()).width;
              return e.restore(), Math.round(20 + t);
            }),
            (t.prototype._getQuantity = function () {
              return Object(l.splitThousands)(this._adapter.getQuantity(), ' ');
            }),
            (t.prototype._quantityWidth = function (e) {
              if (0 === this._getQuantity().length) return 0;
              e.save(), (e.font = this._adapter.getQuantityFont());
              var t = e.measureText(this._getQuantity()).width;
              return e.restore(), Math.round(Math.max(this._height(), 10 + t));
            }),
            (t.prototype._cancelButtonWidth = function () {
              return this._adapter.isOnCancelCallbackPresent()
                ? this._height()
                : 0;
            }),
            (t.prototype._drawLines = function (e, t, i, r, n) {
              e.save(),
                (e.strokeStyle = this._adapter.getLineColor()),
                Object(h.setLineStyle)(e, this._adapter.getLineStyle()),
                (e.lineWidth = this._adapter.getLineWidth()),
                Object(h.drawLine)(e, i, r, n, r),
                this._adapter.getExtendLeft() &&
                  Object(h.drawLine)(e, 0, r, t, r),
                e.restore();
            }),
            (t.prototype._drawMovePoints = function (e, t, i) {
              e.save(),
                (e.strokeStyle = this._adapter.getBodyBorderColor()),
                (e.fillStyle = this._adapter.getBodyBorderColor());
              for (
                var r = t + 4,
                  n = r + 2,
                  a = Math.floor((this._height() - 10) / 2) + 1,
                  o = 0;
                o < a;
                ++o
              ) {
                var s = i + 5 + 2 * o;
                Object(h.drawLine)(e, r, s, n, s);
              }
              e.restore();
            }),
            (t.prototype._drawBody = function (e, t, i) {
              (e.strokeStyle = this._adapter.getBodyBorderColor()),
                (e.fillStyle = this._adapter.getBodyBackgroundColor());
              var r = this._bodyWidth(e),
                n = this._height();
              e.fillRect(t + 0.5, i + 0.5, r - 1, n - 1),
                e.strokeRect(t, i, r, n);
            }),
            (t.prototype._drawBodyText = function (e, t, i) {
              (e.textAlign = 'center'),
                (e.textBaseline = 'middle'),
                (e.font = this._adapter.getBodyFont()),
                (e.fillStyle = this._adapter.getBodyTextColor());
              var r = t + this._bodyWidth(e) / 2,
                n = i + this._height() / 2;
              e.fillText(this._adapter.getText(), 5 + r - 2, n);
            }),
            (t.prototype._drawQuantity = function (e, t, i, r) {
              e.save(),
                (e.strokeStyle = this._adapter.getQuantityBorderColor()),
                (e.fillStyle = this._adapter.getQuantityBackgroundColor());
              var n = this._quantityWidth(e),
                a = this._height();
              e.fillRect(t + 0.5, i + 0.5, n - 1, a - 1),
                r &&
                  e.clip &&
                  (e.beginPath(),
                  e.rect(t + 0.5, i - 0.5, n + 1, a + 1),
                  e.clip()),
                e.strokeRect(t, i, n, a),
                e.restore();
            }),
            (t.prototype._drawQuantityText = function (e, t, i) {
              e.save(),
                (e.textAlign = 'center'),
                (e.textBaseline = 'middle'),
                (e.font = this._adapter.getQuantityFont()),
                (e.fillStyle = this._adapter.getQuantityTextColor());
              var r = t + this._quantityWidth(e) / 2,
                n = i + this._height() / 2;
              e.fillText(this._getQuantity(), r, n), e.restore();
            }),
            (t.prototype._drawCancelButton = function (e, t, i, r) {
              (e.strokeStyle = this._adapter.getCancelButtonBorderColor()),
                (e.fillStyle = this._adapter.getCancelButtonBackgroundColor());
              var a = this._cancelButtonWidth(),
                o = this._height();
              e.fillRect(t + 0.5, i + 0.5, a - 1, o - 1),
                this._adapter.getBlocked() &&
                  ((e.fillStyle = 'rgba(140, 140, 140, 0.75)'),
                  e.fillRect(t + 0.5, i + 0.5, a - 1, o - 1)),
                e.save(),
                r &&
                  e.clip &&
                  (e.beginPath(),
                  e.rect(t + 0.5, i - 0.5, a + 1, o + 1),
                  e.clip()),
                e.strokeRect(t, i, a, o),
                e.restore();
              var s = t + a,
                l = i + o;
              e.strokeStyle = this._adapter.getCancelButtonIconColor();
              var d = (this._cancelButtonWidth() - 8) / 2,
                c = (this._height() - 8) / 2;
              Object(h.drawPoly)(
                e,
                [new n.Point(t + d, i + c), new n.Point(s - d, l - c)],
                !0,
              ),
                Object(h.drawPoly)(
                  e,
                  [new n.Point(s - d, i + c), new n.Point(t + d, l - c)],
                  !0,
                );
            }),
            t
          );
        })(d.ScaledPaneRenderer),
        g = i('vq8G');
      i.d(t, 'OrderPaneView', function () {
        return y;
      });
      var y = (function (e) {
        function t(t, i) {
          var r = e.call(this, t, i) || this;
          return (
            (r._renderer = new o.CompositeRenderer()),
            (r._selectionRenderer = new g.SelectionRenderer()),
            (r._selectionData = null),
            (r._adapter = t.adapter()),
            (r._orderRenderer = new v(t.adapter())),
            r._renderer.append(r._orderRenderer),
            r._renderer.append(r._selectionRenderer),
            r
          );
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.renderer = function (e, t) {
            return this._invalidated && this._updateImpl(t), this._renderer;
          }),
          (t.prototype._updateImpl = function (t) {
            if (
              (e.prototype._updateImpl.call(this),
              (this._selectionData = null),
              this.isSelectedSource() && this._points.length > 0)
            ) {
              var i = this._points[0].y,
                r = t - 3.5 - 1,
                a = this._adapter.hasMoveCallback()
                  ? c.HitTestResult.MOVEPOINT
                  : c.HitTestResult.REGULAR,
                o = [new n.Point(r, i)];
              this._selectionData = {
                barSpacing: this._model.timeScale().barSpacing(),
                points: o,
                bgColors: this._lineAnchorColors(o),
                hittestResult: a,
                visible: !0,
              };
            }
            this._orderRenderer.setData({ points: this._points }),
              this._selectionRenderer.setData(this._selectionData);
          }),
          t
        );
      })(a.LineSourcePaneView);
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
        o = i('xUGI'),
        s = i.n(o),
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
            Object(r.c)(t, e),
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
              return new s.a(
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
          return u;
        });
      var r = i('mrSG'),
        n = i('Eyy1'),
        a = i('aO4+'),
        o = i('GEp6'),
        s = i('hBTJ'),
        l = i('jFln'),
        h = i('VdBB'),
        d = i('Zp/P'),
        c = i('Tmoa'),
        u = (function (e) {
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
            Object(r.c)(t, e),
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
                var o = this._data.points,
                  s = o[2],
                  l = o[3],
                  h = this._extendAndHitTestLineSegment(e, s, l, t);
                if (null !== h) return h;
                if (this._data.showMidline && !this._data.skipLines) {
                  var d = r.add(s).scaled(0.5),
                    c = n.add(l).scaled(0.5),
                    u = this._extendAndHitTestLineSegment(e, d, c, t);
                  if (null !== u) return u;
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
                    o = a[2],
                    s = a[3];
                  if (
                    (this._data.skipLines ||
                      this._data.skipTopLine ||
                      this._extendAndDrawLineSegment(e, o, s, t),
                    this._data.fillBackground &&
                      this._drawBackground(e, this._data.points, t),
                    this._data.showMidline && !this._data.skipLines)
                  ) {
                    (e.strokeStyle = this._data.midcolor),
                      (e.lineWidth = this._data.midlinewidth),
                      Object(l.setLineStyle)(e, this._data.midlinestyle);
                    var h = r.add(o).scaled(0.5),
                      d = n.add(s).scaled(0.5);
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
                Object(o.distanceToSegment)(n[0], n[1], e).distance <= 3
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
                s = t[0],
                l = t[1],
                h = t[2],
                d = t[3];
              if (
                !(
                  Object(a.equalPoints)(s, l) ||
                  Object(a.equalPoints)(h, d) ||
                  Object(o.distanceToLine)(s, l, h).distance < 1e-6 ||
                  Object(o.distanceToLine)(s, l, d).distance < 1e-6 ||
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
                  ((c = p(c, s, l, d)),
                  r.extendright || (c = p(c, l, d, h)),
                  (c = p(c, d, h, s)),
                  r.extendleft || (c = p(c, h, s, l)),
                  null !== c)
                ) {
                  e.beginPath(), e.moveTo(c[0].x, c[0].y);
                  for (var u = 1; u < c.length; u++) e.lineTo(c[u].x, c[u].y);
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
                o = i[2],
                s = (a.y - r.y) / (a.x - r.x),
                l = r.y + s * (e.x - r.x),
                h = o.y + s * (e.x - o.x),
                d = Math.max(l, h),
                c = Math.min(l, h),
                u = Math.min(r.x, a.x),
                p = Math.max(r.x, a.x);
              return (!t.extendleft && e.x < u) || (!t.extendright && e.x > p)
                ? null
                : e.y >= c && e.y <= d
                ? this._backHittestResult
                : null;
            }),
            t
          );
        })(i('cPgM').ScaledPaneRenderer);
      function p(e, t, i, r) {
        return null !== e
          ? Object(s.intersectPolygonAndHalfplane)(
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
        o = i('f6yo').pointInBox,
        s = i('aB9a').LineSourcePaneView,
        l = i('vq8G').SelectionRenderer,
        h = i('VdBB').HitTestResult,
        d = i('Zy3/').CompositeRenderer,
        c = i('UfPO'),
        u = i('Tmoa'),
        p = i('ikwP').calcTextHorizontalShift,
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
        s.call(this, e, t),
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
              o = this._points[0].x - -9,
              s = this._points[0].y - (a + 15);
            e.textAlign = _() ? 'right' : 'left';
            var l = p(e, t.width);
            this._measureCache &&
              Object.assign(this._measureCache, {
                innerWidth: n,
                innerHeight: a,
                tailLeft: -9,
                tailHeight: 15,
              }),
              e.translate(0.5 + o, 0.5 + s),
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
              (e.fillStyle = u.generateColor(
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
              (e.fillStyle = u.generateColor(
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
          return o(e, r) ? new h(h.MOVEPOINT) : null;
        }),
        inherit(g, s),
        (g.prototype._updateImpl = function () {
          if (
            (s.prototype._updateImpl.call(this),
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
        o = i('aO4+'),
        s = i('Tmoa'),
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
            Object(r.c)(t, e),
            (t.prototype.hitTest = function (e) {
              if (this._data.points.length < 2) return null;
              var t = this._data.points[0],
                i = this._data.points[1],
                r = 0.5 * Math.abs(t.x - i.x),
                n = Math.abs(t.x - i.x),
                s = Math.abs(t.y - i.y),
                l = t.add(i).scaled(0.5),
                h = e.subtract(l);
              if (n < 1 || s < 1) return null;
              var d = (i.y - t.y) / (i.x - t.x),
                c = (h = new o.Point(h.x, h.y / d)).x * h.x + h.y * h.y - r * r;
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
                var o = 0;
                if (this._data.wholePoints) {
                  var h = this._data.wholePoints[0],
                    d = this._data.wholePoints[1];
                  o = Math.abs(h.x - d.x);
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
                      e.arc(0, 0, o / 2, 0, 2 * Math.PI, !0)),
                    (e.fillStyle = Object(s.generateColor)(
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
          return s;
        });
      var r = i('aO4+'),
        n = i('f6yo'),
        a = i('ikwP'),
        o = i('XlJ7'),
        s = (function () {
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
                s = this._center(),
                l = Math.round(s.x * r) + n,
                h = Math.round(s.y * r) + n;
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
              (e.font = Object(o.makeFont)(
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
        o = i('qgcf'),
        s = i('aO4+'),
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
      var u = (function (e) {
          function t(t) {
            var i = e.call(this) || this;
            return (i._data = t), i;
          }
          return (
            Object(r.c)(t, e),
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
                var o = i.scaled(1 / r),
                  s = t.addScaled(o, a),
                  h = e.subtract(s),
                  c = Object(l.lastEventIsTouch)() ? 24 : 3,
                  u = this._hittestGeometry(r),
                  p = u.length - 2;
                p >= 0;
                p--
              ) {
                var _ = u[p];
                if (a >= _.x) {
                  var f = u[p + 1],
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
                  o = new s.Point(t.y, -t.x).normalized(),
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
                    u = r.addScaled(h, c.x).addScaled(o, c.y);
                  e.lineTo(u.x, u.y);
                }
                e.lineTo(this._data.points[1].x, this._data.points[1].y);
                for (d = l.length - 1; d >= 0; d--) {
                  (c = l[d]), (u = r.addScaled(h, c.x).addScaled(o, -c.y));
                  e.lineTo(u.x, u.y);
                }
                e.lineTo(r.x, r.y), e.stroke(), e.fill();
              }
            }),
            (t.prototype._arrowGeometry = function (e) {
              var t = c(e),
                i = [],
                r = e >= 35 ? 0.1 : 0;
              return (
                i.push(new s.Point(0, 0)),
                i.push(new s.Point(e - t + t * r, (1.22 * t) / 4)),
                i.push(new s.Point(e - t, (1.22 * t) / 2)),
                i.push(new s.Point(e, 0)),
                i
              );
            }),
            (t.prototype._hittestGeometry = function (e) {
              var t = c(e),
                i = [];
              return (
                i.push(new s.Point(0, 0)),
                i.push(new s.Point(e - t, (1.22 * t) / 4)),
                i.push(new s.Point(e - t, (1.22 * t) / 2)),
                i.push(new s.Point(e, 0)),
                i
              );
            }),
            t
          );
        })(h.ScaledPaneRenderer),
        p = i('QA6D');
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
            (r._textRenderer = new o.TextRenderer(r._textRendererData)),
            (r._arrowRenderer = new u(r._arrowRendererData)),
            (r._ellipseRenderer = new p.EllipseRendererSimple(
              r._ellipseRendererData,
            )),
            r
          );
        }
        return (
          Object(r.c)(t, e),
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
                  Object(r.a)({}, this._textRendererData),
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
                var o = new s.Point(t[0].x - 9, t[0].y - 9),
                  l = new s.Point(t[0].x + 9, t[0].y + 9);
                (this._ellipseRendererData.points = [o, l]),
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
        o = i('pJOz').TrendLineRenderer,
        s = i('cjIn').PaneRendererCachedImage,
        l = i('VdBB').HitTestResult,
        h = i('Zy3/').CompositeRenderer,
        d = i('a7Ha').LineEnd,
        c = i('d1Pk').fibLevelCoordinate,
        u = i('NCfL').LineToolPaneViewWithLevelledTextCache;
      function p(e, t) {
        u.call(this, e, t),
          (this._rendererCache = {}),
          (this._trendLineRenderer = new o()),
          (this._renderer = null);
      }
      inherit(p, u),
        (p.prototype.getCacheRects = function (e, t) {
          if (
            (u.prototype.getCacheRects.call(this, e, i),
            !this._cacheState.preparedCells)
          )
            return null;
          var i = this._levels[t].index - 1,
            a = this._cacheState.preparedCells.cells[i];
          if (!a) return null;
          var o = this._points[0],
            s = this._points[1],
            l = Math.min(o.x, s.x),
            h = Math.max(o.x, s.x);
          (o = new n(l, this._levels[t].y)), (s = new n(h, this._levels[t].y));
          var d,
            c = this._source.properties(),
            p = c.extendLines.value() ? this._model.timeScale().width() : h,
            _ = r(this._cache);
          switch (c.horzLabelsAlign.value()) {
            case 'left':
              d = o;
              break;
            case 'center':
              ((d = o.add(s).scaled(0.5)).x += a.width / 2),
                (d.x = Math.round(d.x));
              break;
            case 'right':
              c.extendLines.value()
                ? (d = new n(p - 4, this._levels[t].y))
                : (((d = new n(p + 4, this._levels[t].y)).x += a.width),
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
        (p.prototype._updateImpl = function () {
          if (
            (u.prototype._updateImpl.call(this),
            (this._renderer = null),
            !(this._source.points().length < 2))
          ) {
            var e = this._source.priceScale();
            if (e && !e.isEmpty() && !this._model.timeScale().isEmpty()) {
              var t = this._source.ownerSource().firstValue();
              if (null != t) {
                var i = this._source.points()[0],
                  r = this._source.points()[1],
                  p = !1;
                (C = this._source.properties()).reverse &&
                  C.reverse.value() &&
                  (p = C.reverse.value()),
                  (this._levels = []);
                var _,
                  f,
                  v = p ? i.price : r.price,
                  g = p ? r.price : i.price,
                  y = g - v,
                  w = e.isLog() && C.fibLevelsBasedOnLogScale.value();
                if (w)
                  (_ = e.priceToCoordinate(v, t)),
                    (f = e.priceToCoordinate(g, t) - _);
                for (
                  var m = { price: v, coordinate: _ },
                    x = { price: y, coordinate: f },
                    b = this._source.levelsCount(),
                    R = 1;
                  R <= b;
                  R++
                ) {
                  var T = C['level' + R];
                  if (T.visible.value()) {
                    var S = T.coeff.value(),
                      P = T.color.value(),
                      L = c(m, x, S, e, t, w);
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
                          j =
                            ((i = new n(I, this._levels[R].y)),
                            (r = new n(O, A.y)),
                            {});
                        (j.points = [i, r]),
                          (j.color = this._levels[R].color),
                          (j.linewidth = 0),
                          (j.backcolor = this._levels[R].color),
                          (j.fillBackground = !0),
                          (j.transparency = k),
                          (j.extendLeft = B),
                          (j.extendRight = N),
                          (V = new a(void 0, void 0, !0)).setData(j),
                          M.append(V);
                      }
                  var z = I,
                    E = O;
                  z === E && (B && (z -= 1), N && (E += 1));
                  for (R = 0; R < this._levels.length; R++) {
                    var V,
                      H = {
                        points: [
                          (i = new n(z, this._levels[R].y)),
                          (r = new n(E, this._levels[R].y)),
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
                      ((V = new o()).setData(H),
                      V.setHitTest(
                        new l(l.MOVEPOINT, null, this._levels[R].index),
                      ),
                      M.append(V),
                      C.showCoeffs.value() || C.showPrices.value())
                    ) {
                      var W = new s(this, R);
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
        (p.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.FibRetracementPaneView = p);
    },
    S6aM: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'LineToolThreeDrivesPaneView', function () {
          return c;
        });
      var r = i('mrSG'),
        n = i('8Uy/'),
        a = i('Zy3/'),
        o = i('qgcf'),
        s = i('zXvd'),
        l = i('pJOz'),
        h = i('a7Ha'),
        d = i('BCbF'),
        c = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._numericFormatter = new s.NumericFormatter()),
              (t._retrace1LabelRenderer = new o.TextRenderer()),
              (t._retrace12LabelRenderer = new o.TextRenderer()),
              (t._polyLineRenderer = new d.PolygonRenderer(null)),
              (t._renderer = null),
              t
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.renderer = function (e, t) {
              return this._invalidated && this._updateImpl(), this._renderer;
            }),
            (t.prototype._updateImpl = function () {
              e.prototype._updateImpl.call(this), (this._renderer = null);
              var t = NaN,
                i = NaN;
              if (this._source.points().length >= 4) {
                var r = this._source.points(),
                  o = r[1],
                  s = r[2],
                  d = r[3];
                t =
                  Math.round(
                    100 * Math.abs((d.price - s.price) / (s.price - o.price)),
                  ) / 100;
              }
              if (this._source.points().length >= 6) {
                var c = this._source.points(),
                  u = ((d = c[3]), c[4]),
                  p = c[5];
                i =
                  Math.round(
                    100 * Math.abs((p.price - u.price) / (u.price - d.price)),
                  ) / 100;
              }
              if (!(this._points.length < 2)) {
                var _ = this._source.properties().childs(),
                  f = new a.CompositeRenderer(),
                  v = function (e, t) {
                    return {
                      points: [e],
                      text: t,
                      color: _.textcolor.value(),
                      vertAlign: 'middle',
                      horzAlign: 'center',
                      font: _.font.value(),
                      offsetX: 0,
                      offsetY: 0,
                      bold: _.bold && _.bold.value(),
                      italic: _.italic && _.italic.value(),
                      fontsize: _.fontsize.value(),
                      backgroundColor: _.color.value(),
                      backgroundRoundRect: 4,
                    };
                  },
                  g = function (e, t) {
                    return {
                      points: [e, t],
                      color: _.color.value(),
                      linewidth: _.linewidth.value(),
                      linestyle: n.LINESTYLE_DOTTED,
                      extendleft: !1,
                      extendright: !1,
                      leftend: h.LineEnd.Normal,
                      rightend: h.LineEnd.Normal,
                    };
                  },
                  y = {
                    points: this._points,
                    color: _.color.value(),
                    linewidth: _.linewidth.value(),
                    linestyle: n.LINESTYLE_SOLID,
                    leftend: h.LineEnd.Normal,
                    rightend: h.LineEnd.Normal,
                    backcolor: 'rgba(0, 0, 0, 0)',
                    fillBackground: !1,
                    filled: !1,
                  };
                if (
                  (this._polyLineRenderer.setData(y),
                  f.append(this._polyLineRenderer),
                  !isNaN(t))
                ) {
                  (m = new l.TrendLineRenderer()).setData(
                    g(this._points[1], this._points[3]),
                  ),
                    f.append(m);
                  var w = v(
                    this._points[1].add(this._points[3]).scaled(0.5),
                    this._numericFormatter.format(t),
                  );
                  this._retrace1LabelRenderer.setData(w),
                    f.append(this._retrace1LabelRenderer);
                }
                if (!isNaN(i)) {
                  var m;
                  (m = new l.TrendLineRenderer()).setData(
                    g(this._points[3], this._points[5]),
                  ),
                    f.append(m);
                  w = v(
                    this._points[5].add(this._points[3]).scaled(0.5),
                    this._numericFormatter.format(i),
                  );
                  this._retrace12LabelRenderer.setData(w),
                    f.append(this._retrace12LabelRenderer);
                }
                this.addAnchors(f), (this._renderer = f);
              }
            }),
            t
          );
        })(i('aB9a').LineSourcePaneView);
    },
    SvjA: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('z+cS').VerticalLineRenderer,
        a = i('aB9a').LineSourcePaneView,
        o = i('qgcf').TextRenderer,
        s = i('IjC5').RectangleRenderer,
        l = i('pJOz').TrendLineRenderer,
        h = i('VdBB').HitTestResult,
        d = i('Zy3/').CompositeRenderer,
        c = i('a7Ha').LineEnd;
      function u(e, t) {
        a.call(this, e, t),
          (this._trendLineRendererPoints12 = new l()),
          (this._trendLineRendererPoints23 = new l()),
          (this._renderer = null);
      }
      inherit(u, a),
        (u.prototype._updateImpl = function () {
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
              u = this._source.properties(),
              p = i.index;
            if (null === this._model.timeScale().visibleBarsStrictRange())
              return;
            for (var _ = 1; _ <= 11; _++) {
              var f = u['level' + _];
              if (f.visible.value()) {
                var v = f.coeff.value(),
                  g = f.color.value(),
                  y = Math.round(p + v * l),
                  w = {
                    x: this._model.timeScale().indexToCoordinate(y),
                    coeff: v,
                    color: g,
                    linewidth: f.linewidth.value(),
                    linestyle: f.linestyle.value(),
                    index: _,
                  };
                u.showCoeffs.value() &&
                  ((w.text = v), (w.y = this._source.priceScale().height())),
                  this._levels.push(w);
              }
            }
          }
          if (!(this._points.length < 2)) {
            var m = new d();
            (e = this._points[0]), (t = this._points[1]);
            if ((u = this._source.properties()).trendline.visible.value()) {
              var x = {
                points: [e, t],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: u.trendline.color.value(),
                linewidth: u.trendline.linewidth.value(),
                linestyle: u.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: c.Normal,
                rightend: c.Normal,
              };
              this._trendLineRendererPoints12.setData(x),
                m.append(this._trendLineRendererPoints12);
            }
            if (this._points.length < 3)
              return this.addAnchors(m), void (this._renderer = m);
            i = this._points[2];
            if (u.trendline.visible.value()) {
              x = {
                points: [t, i],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: u.trendline.color.value(),
                linewidth: u.trendline.linewidth.value(),
                linestyle: u.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: c.Normal,
                rightend: c.Normal,
              };
              this._trendLineRendererPoints23.setData(x),
                m.append(this._trendLineRendererPoints23);
            }
            var b = u.fillBackground.value(),
              R = u.transparency.value(),
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
                  (D = new s(void 0, void 0, !0)).setData(L),
                  m.append(D);
              }
            for (_ = 0; _ < this._levels.length; _++) {
              if (void 0 !== this._levels[_].text) {
                var C,
                  M = u.horzLabelsAlign.value();
                switch (
                  ((M =
                    'left' === M ? 'right' : 'right' === M ? 'left' : 'center'),
                  u.vertLabelsAlign.value())
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
                  vertAlign: u.vertLabelsAlign.value(),
                  horzAlign: M,
                  font: u.font.value(),
                  offsetX: 2,
                  offsetY: 0,
                  fontsize: 12,
                };
                m.append(new o(I));
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
              (D = new n()).setData(O), D.setHitTest(k), m.append(D);
            }
            this.addAnchors(m), (this._renderer = m);
          }
        }),
        (u.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.TrendBasedFibTimePaneView = u);
    },
    UcQu: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('qgcf').TextRenderer,
        o = i('qgcf').calculateLabelPosition,
        s = i('IjC5').RectangleRenderer,
        l = i('pJOz').TrendLineRenderer,
        h = i('Zy3/').CompositeRenderer,
        d = i('GH0z').PercentageFormatter,
        c = i('nda6').TimeSpanFormatter,
        u = i('5C6T').PipFormatter,
        p = i('a7Ha').LineEnd,
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
          (this._backgroundRenderer = new s()),
          (this._borderRenderer = new s()),
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
            var s = t.drawBorder.value() ? t.borderWidth.value() / 2 : 0,
              l = Math.round((i.y + a.y) / 2),
              d = new r(i.x + Math.sign(a.x - i.x) * s, l),
              _ = new r(a.x + Math.sign(i.x - a.x) * s, l);
            ((k = {}).points = [d, _]),
              (k.width = this._model.timeScale().width()),
              (k.height = this._source.priceScale().height()),
              (k.color = this._source.properties().linecolor.value()),
              (k.linewidth = this._source.properties().linewidth.value()),
              (k.linestyle = CanvasEx.LINESTYLE_SOLID),
              (k.extendleft = !1),
              (k.extendright = !1),
              (k.leftend = p.Normal),
              (k.rightend =
                Math.abs(i.x - a.x) >= 25 * k.linewidth ? p.Arrow : p.Normal),
              this._distanceLineRenderer.setData(k),
              e.append(this._distanceLineRenderer);
            (i = this._points[0]), (a = this._points[1]);
            var g = Math.round((i.x + a.x) / 2);
            (d = new r(g, i.y + Math.sign(a.y - i.y) * s)),
              (_ = new r(g, a.y + Math.sign(i.y - a.y) * s));
            ((k = {}).points = [d, _]),
              (k.width = this._model.timeScale().width()),
              (k.height = this._source.priceScale().height()),
              (k.color = this._source.properties().linecolor.value()),
              (k.linewidth = this._source.properties().linewidth.value()),
              (k.linestyle = CanvasEx.LINESTYLE_SOLID),
              (k.extendleft = !1),
              (k.extendright = !1),
              (k.leftend = p.Normal),
              (k.rightend =
                Math.abs(d.y - _.y) >= 25 * k.linewidth ? p.Arrow : p.Normal),
              this._distancePriceRenderer.setData(k),
              e.append(this._distancePriceRenderer);
            var y = this._source.points()[0].price,
              w = this._source.points()[1].price,
              m = w - y,
              x = (100 * m) / Math.abs(y),
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
              ((this._pipFormatter = new u(
                M.pricescale,
                M.minmov,
                M.type,
                M.minmove2,
              )),
              (this._lastSymbolInfo = M));
            var I,
              O =
                this._source.ownerSource().formatter().format(m) +
                ' (' +
                this._percentageFormatter.format(Math.round(100 * x) / 100) +
                ') ' +
                (this._pipFormatter ? this._pipFormatter.format(m) : ''),
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
              A = o(N, i, a, B, this._source.priceScale().height());
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
        o = i('qgcf').calculateLabelPosition,
        s = i('IjC5').RectangleRenderer,
        l = i('pJOz').TrendLineRenderer,
        h = i('Zy3/').CompositeRenderer,
        d = i('GH0z').PercentageFormatter,
        c = i('5C6T').PipFormatter,
        u = i('a7Ha').LineEnd,
        p = i('Ialn').forceLTRStr;
      function _(e, t) {
        n.call(this, e, t),
          (this._percentageFormatter = new d()),
          (this._pipFormatter = null),
          (this._lastSymbolInfo = null),
          (this._topBorderRenderer = new l()),
          (this._bottomBorderRenderer = new l()),
          (this._distanceRenderer = new l()),
          (this._backgroundRenderer = new s()),
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
              s = this._points[0],
              l = this._points[1],
              d = Math.min(s.x, l.x),
              _ = Math.max(s.x, l.x);
            if (t.fillBackground && t.fillBackground.value())
              ((M = {}).points = [new r(d, s.y), new r(_, l.y)]),
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
                var o = {};
                (o.points = [r, n]),
                  (o.width = f._model.timeScale().width()),
                  (o.height = f._source.priceScale().height()),
                  (o.color = f._source.properties().linecolor.value()),
                  (o.linewidth = f._source.properties().linewidth.value()),
                  (o.linestyle = CanvasEx.LINESTYLE_SOLID),
                  (o.extendleft = i),
                  (o.extendright = a),
                  (o.leftend = u.Normal),
                  (o.rightend = u.Normal),
                  t.setData(o),
                  e.append(t);
              },
              g = d,
              y = _;
            g === y && (i && (g -= 1), a && (y += 1)),
              v(this._topBorderRenderer, new r(g, s.y), new r(y, s.y)),
              v(this._bottomBorderRenderer, new r(g, l.y), new r(y, l.y));
            (s = this._points[0]), (l = this._points[1]);
            var w = Math.round((s.x + l.x) / 2),
              m = new r(w, s.y),
              x = new r(w, l.y);
            ((M = {}).points = [m, x]),
              (M.width = f._model.timeScale().width()),
              (M.height = f._source.priceScale().height()),
              (M.color = f._source.properties().linecolor.value()),
              (M.linewidth = f._source.properties().linewidth.value()),
              (M.linestyle = CanvasEx.LINESTYLE_SOLID),
              (M.extendleft = !1),
              (M.extendright = !1),
              (M.leftend = u.Normal),
              (M.rightend =
                Math.abs(m.y - x.y) >= 15 * M.linewidth ? u.Arrow : u.Normal),
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
              C = p(
                this._source.ownerSource().formatter().format(T) +
                  ' (' +
                  this._percentageFormatter.format(S) +
                  ') ' +
                  (this._pipFormatter ? this._pipFormatter.format(T) : ''),
              ),
              M = {};
            if (R > b)
              ((L = l.clone()).y -= 2 * t.fontsize.value()),
                (L.x = 0.5 * (s.x + l.x)),
                (M.points = [L]);
            else
              ((L = l.clone()).x = 0.5 * (s.x + l.x)),
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
              D = o(O, s, l, I, f._source.priceScale().height());
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
          return p;
        });
      var r = i('mrSG'),
        n = i('aO4+'),
        a = i('aB9a'),
        o = i('pJOz'),
        s = i('qgcf'),
        l = i('Zy3/'),
        h = i('a7Ha'),
        d = i('8Uy/'),
        c = i('amvX'),
        u = i('Ialn'),
        p = (function (e) {
          function t(t, i) {
            var r = e.call(this, t, i) || this;
            return (
              (r._verticalLevelsRenderers = []),
              (r._horizontalLevelsRenderers = []),
              (r._fanRenderers = []),
              (r._arcRenderers = []),
              (r._priceDiffTextRenderer = new s.TextRenderer()),
              (r._indexDiffTextRenderer = new s.TextRenderer()),
              (r._ratioTextRenderer = new s.TextRenderer()),
              (r._renderer = null),
              r._initRenderers(),
              r
            );
          }
          return (
            Object(r.c)(t, e),
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
                o = a.isReversed();
              o && ((n = i[0]), (r = i[1]));
              var s = n.x - r.x,
                h = n.y - r.y,
                d = r,
                c = n,
                u = this._getModel(),
                p = {
                  barsCoordsRange: s,
                  priceCoordsRange: h,
                  startPoint: d,
                  endPoint: c,
                  p1: r,
                  p2: n,
                  isLabelsVisible: a.isLabelsVisible(),
                  reversed: o,
                };
              this._prepareLevels(t, p),
                this._prepareFanLines(t, p),
                this._prepareArcs(t, p),
                this._prepareLabels(t, p);
              var _ = [r, n];
              u.lineBeingCreated() === a && _.pop(),
                t.append(this.createLineAnchor({ points: _ })),
                (this._renderer = t);
            }),
            (t.prototype._initRenderers = function () {
              for (
                var e = this._getSource(), t = e.levelsCount(), i = 0;
                i < t;
                i++
              )
                this._verticalLevelsRenderers.push(new o.TrendLineRenderer()),
                  this._horizontalLevelsRenderers.push(
                    new o.TrendLineRenderer(),
                  );
              var r = e.fanLinesCount();
              for (i = 0; i < r; i++)
                this._fanRenderers.push(new o.TrendLineRenderer());
              var n = e.arcsCount();
              for (i = 0; i < n; i++) this._arcRenderers.push(new c.a());
            }),
            (t.prototype._prepareLevels = function (e, t) {
              for (
                var i = t.startPoint,
                  r = t.endPoint,
                  a = t.barsCoordsRange,
                  o = t.priceCoordsRange,
                  s = 0,
                  l = this._getSource().levels();
                s < l.length;
                s++
              ) {
                var c = l[s];
                if (c.visible) {
                  var u = c.index / 5,
                    p = i.x + u * a,
                    _ = {
                      points: [new n.Point(p, i.y), new n.Point(p, r.y)],
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
                  var v = i.y + u * o,
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
                  o = t.barsCoordsRange,
                  s = t.priceCoordsRange,
                  l = 0,
                  c = this._getSource().fanLines();
                l < c.length;
                l++
              ) {
                var u = c[l];
                if (u.visible) {
                  var p = u.x,
                    _ = u.y,
                    f = void 0,
                    v = void 0;
                  if (p > _) {
                    f = a.x;
                    var g = _ / p;
                    v = r.y + g * s;
                  } else {
                    v = a.y;
                    g = p / _;
                    f = r.x + g * o;
                  }
                  var y = {
                      points: [i, new n.Point(f, v)],
                      color: u.color,
                      linewidth: u.width,
                      linestyle: d.LINESTYLE_SOLID,
                      extendleft: !1,
                      extendright: !1,
                      leftend: h.LineEnd.Normal,
                      rightend: h.LineEnd.Normal,
                    },
                    w = this._fanRenderers[u.index];
                  w.setData(y), e.append(w);
                }
              }
            }),
            (t.prototype._prepareArcs = function (e, t) {
              for (
                var i = t.p1,
                  r = t.startPoint,
                  a = t.endPoint,
                  o = t.barsCoordsRange,
                  s = t.priceCoordsRange,
                  l = i,
                  h = this._getSource(),
                  d = h.isArcsBackgroundFilled(),
                  c = h.arcsBackgroundTransparency(),
                  u = 0,
                  p = h.arcs();
                u < p.length;
                u++
              ) {
                var _ = p[u];
                if (_.visible) {
                  var f = _.x / 5,
                    v = _.y / 5,
                    g = r.x + f * o,
                    y = r.y + v * s,
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
                    m = this._arcRenderers[_.index];
                  m.setData(w), e.append(m), (l = w.point);
                }
              }
            }),
            (t.prototype._prepareLabels = function (e, t) {
              var i = t.p1,
                r = t.p2,
                a = t.isLabelsVisible,
                o = t.reversed;
              if (a) {
                var s = this._getSource(),
                  l = s.ownerSource(),
                  h = s.getPriceDiff(),
                  d = s.getIndexDiff();
                if (null !== h && null !== d && null !== l) {
                  o && ((h = -h), (d = -d));
                  var c = new n.Point(i.x, r.y),
                    p = Object(u.forceLTRStr)(l.formatter().format(h)),
                    _ = this._getLabelData(c, p);
                  (_.horzAlign = d > 0 ? 'right' : 'left'),
                    (_.vertAlign = h > 0 ? 'bottom' : 'top'),
                    (_.offsetX = 10),
                    (_.offsetY = h > 0 ? 8 : 10),
                    (_.forceTextAlign = !0),
                    this._priceDiffTextRenderer.setData(_),
                    e.append(this._priceDiffTextRenderer);
                  var f = new n.Point(r.x, i.y),
                    v = Object(u.forceLTRStr)(d.toString()),
                    g = this._getLabelData(f, v);
                  (g.horzAlign = d > 0 ? 'left' : 'right'),
                    (g.vertAlign = h > 0 ? 'top' : 'bottom'),
                    (g.offsetX = 10),
                    (g.offsetY = h > 0 ? 10 : 8),
                    (g.forceTextAlign = !0),
                    this._indexDiffTextRenderer.setData(g),
                    e.append(this._indexDiffTextRenderer);
                  var y = s.getScaleRatio();
                  if (null !== y) {
                    var w = s.getScaleRatioFormatter(),
                      m = Object(u.forceLTRStr)(w.format(y)),
                      x = this._getLabelData(r, m);
                    (x.horzAlign = d > 0 ? 'left' : 'right'),
                      (x.vertAlign = h > 0 ? 'bottom' : 'top'),
                      (x.offsetX = 10),
                      (x.offsetY = h > 0 ? 8 : 10),
                      (x.forceTextAlign = !0),
                      this._ratioTextRenderer.setData(x),
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
        o = i('qgcf').TextRenderer,
        s = i('pJOz').TrendLineRenderer,
        l = i('Zy3/').CompositeRenderer,
        h = i('GH0z').PercentageFormatter,
        d = i('vq8G').SelectionRenderer,
        c = i('5C6T').PipFormatter,
        u = i('a7Ha').LineEnd,
        p = i('8xAY').LabelSettings,
        _ = i('zDbI').CHART_FONT_FAMILY,
        f = i('VdBB').HitTestResult,
        v = i('cPgM').ScaledPaneRenderer,
        g = i('cPgM').ScaledPaneRendererWrapper,
        y = i('Ialn').forceLTRStr;
      function w() {
        v.call(this), (this._data = null);
      }
      function m(e, t) {
        n.call(this, e, t),
          (this._label = null),
          (this._rendererCache = {}),
          (this._pipFormatter = null),
          (this._lastSymbolInfo = null),
          (this._trendLineRenderer = new s()),
          (this._angleRenderer = new w()),
          (this._angleLabelRenderer = new o()),
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
        inherit(m, n),
        (m.prototype._updateImpl = function () {
          if (
            (n.prototype._updateImpl.call(this),
            (this._renderer = null),
            this._points.length > 0 && void 0 !== this._source._angle)
          ) {
            var e = this._points[0],
              t = Math.cos(this._source._angle),
              i = -Math.sin(this._source._angle),
              o = new r(t, i);
            (this._secondPoint = e.addScaled(o, this._source._distance)),
              (this._secondPoint.data = 1),
              (this._middlePoint = this._source.calcMiddlePoint(
                this._points[0],
                this._secondPoint,
              ));
          }
          if (((this._label = null), !(this._source.points().length < 2))) {
            e = this._source.points()[0];
            var s,
              v,
              w = this._source.points()[1],
              m = [];
            if (
              this._source.properties().showPriceRange.value() &&
              this._source.priceScale()
            ) {
              var x = w.price - e.price,
                b = x / Math.abs(e.price);
              s =
                this._source.ownerSource().formatter().format(x) +
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
                (s += this._pipFormatter
                  ? ', ' + this._pipFormatter.format(x)
                  : ''),
                m.push('priceRange');
            }
            if (this._source.properties().showBarsRange.value()) {
              v = '';
              var T = w.index - e.index;
              (v += $.t('{0} bars').format(y(T))), m.push('barsRange');
            }
            (this._label =
              [y(s), v]
                .filter(function (e) {
                  return e;
                })
                .join('\n') || null),
              (this._icons = m);
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
                (P.leftend = u.Normal),
                (P.rightend = u.Normal),
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
                  k = D ? p.bgColorDark : p.bgColorLight,
                  B = D ? p.textColorDark : p.textColorLight,
                  N = {
                    points: [O],
                    text: this._label,
                    color: B,
                    isDark: D,
                    font: _,
                    fontSize: p.fontSize,
                    lineSpacing: p.lineSpacing,
                    backgroundColor: k,
                    backgroundRoundRect: p.rectRadius,
                    paddingLeft: p.paddingLeftRight,
                    paddingRight: p.paddingLeftRight,
                    paddingTop: p.paddingTopBottom,
                    paddingBottom: p.paddingTopBottom,
                    textPadding: p.textPadding,
                    doNotAlignText: !0,
                    icons: this._icons,
                  },
                  A = p.offset;
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
              var j = {};
              (j.point = this._points[0]),
                (j.angle = this._source._angle),
                (j.color = this._source.properties().linecolor.value()),
                (j.size = 50),
                this._angleRenderer.setData(j),
                S.append(this._angleRenderer);
              var z = Math.round((180 * j.angle) / Math.PI) + 'º';
              (O = this._points[0].clone()).x = O.x + 50;
              var E = {
                points: [O],
                text: y(z),
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
              this._angleLabelRenderer.setData(E),
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
        (m.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.TrendAnglePaneView = m);
    },
    ZJWf: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('2trc').ChannelRenderer,
        o = i('qgcf').TextRenderer,
        s = i('pJOz').TrendLineRenderer,
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
            for (var i = t.x - e.x, c = t.y - e.y, u = 1; u <= 9; u++) {
              var p = 'level' + u,
                _ = this._source.properties()[p];
              if (_.visible.value()) {
                var f,
                  v,
                  g = _.coeff1.value(),
                  y = _.coeff2.value(),
                  w = g / y,
                  m = _.color.value(),
                  x = g + '/' + y;
                g > y
                  ? ((f = t.x), (v = e.y + c / w))
                  : ((f = e.x + i * w), (v = t.y)),
                  this._fans.push({
                    label: x,
                    color: m,
                    x: f,
                    y: v,
                    linewidth: _.linewidth.value(),
                    linestyle: _.linestyle.value(),
                    index: u,
                  });
              }
            }
            if (!(this._floatPoints.length < 2)) {
              var b = new h(),
                R = ((e = this._floatPoints[0]), this._source.properties()),
                T = this._source.properties().fillBackground.value(),
                S = this._source.properties().transparency.value();
              for (u = 0; u < this._fans.length; u++) {
                var P = new r(this._fans[u].x, this._fans[u].y);
                if (T)
                  if (this._fans[u].index < 4) {
                    var L = new r(this._fans[u + 1].x, this._fans[u + 1].y);
                    ((C = {}).width = this._model.timeScale().width()),
                      (C.height = this._source.priceScale().height()),
                      (C.p1 = e),
                      (C.p2 = P),
                      (C.p3 = e),
                      (C.p4 = L),
                      (C.color = this._fans[u].color),
                      (C.transparency = S),
                      (C.hittestOnBackground = !0),
                      (M = new a()).setData(C),
                      b.append(M);
                  } else if (this._fans[u].index > 4 && u > 0) {
                    var C;
                    L = new r(this._fans[u - 1].x, this._fans[u - 1].y);
                    ((C = {}).width = this._model.timeScale().width()),
                      (C.height = this._source.priceScale().height()),
                      (C.p1 = e),
                      (C.p2 = P),
                      (C.p3 = e),
                      (C.p4 = L),
                      (C.color = this._fans[u].color),
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
                    color: this._fans[u].color,
                    linewidth: this._fans[u].linewidth,
                    linestyle: this._fans[u].linestyle,
                    extendleft: !1,
                    extendright: !0,
                    leftend: d.Normal,
                    rightend: d.Normal,
                  };
                if (
                  ((M = new s()).setData(I),
                  M.setHitTest(new l(l.MOVEPOINT, null, this._fans[u].index)),
                  b.append(M),
                  R.showLabels.value())
                ) {
                  var O = {
                    points: [P],
                    text: this._fans[u].label,
                    color: this._fans[u].color,
                    vertAlign: 'middle',
                    horzAlign: 'left',
                    font: R.font.value(),
                    offsetX: 0,
                    offsetY: 5,
                    fontsize: 12,
                  };
                  b.append(new o(O));
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
      i.r(t);
      var r = i('mrSG'),
        n = i('Tmoa'),
        a = i('aB9a'),
        o = i('VaSN'),
        s = i('cPgM'),
        l = i('VdBB'),
        h = i('2hKl'),
        d = i('jFln'),
        c = i('pJOz'),
        u = i('a7Ha'),
        p = i('e9yB'),
        _ = (function (e) {
          function t(t) {
            var i = e.call(this) || this;
            return (i._data = t || null), i;
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.setData = function (e) {
              this._data = e;
            }),
            (t.prototype.hitTest = function (e, t) {
              var i = this._data;
              if (null === i) return null;
              if (4 === i.points.length) {
                var r = Object(o.lastEventIsTouch)() ? 10 : 3,
                  n = i.points,
                  a = n[0],
                  s = n[1],
                  d = n[2],
                  c = n[3],
                  u = c.subtract(a),
                  _ = d.subtract(u.scaled(0.25)),
                  f = d.add(u.scaled(0.25)),
                  v = s.subtract(d),
                  g = c.subtract(v.scaled(0.25)),
                  y = c.add(v.scaled(0.25));
                if (
                  Object(h.c)(d, a, _, e, r) ||
                  Object(h.a)(d, c, f, g, e, r) ||
                  Object(h.c)(c, s, y, e, r)
                )
                  return new l.HitTestResult(l.HitTestResult.MOVEPOINT);
                var w = Object(p.c)(e, r, i.extendLeftPoints);
                return (
                  null === w && (w = Object(p.c)(e, r, i.extendRightPoints)), w
                );
              }
              return null;
            }),
            (t.prototype._drawImpl = function (e, t) {
              if (null !== this._data) {
                (e.lineCap = 'butt'),
                  (e.strokeStyle = this._data.color),
                  (e.lineWidth = this._data.lineWidth),
                  Object(d.setLineStyle)(e, this._data.lineStyle);
                var i = this._data.points[0],
                  r = this._data.points[1];
                if (2 === this._data.points.length)
                  e.beginPath(),
                    e.moveTo(i.x, i.y),
                    e.lineTo(r.x, r.y),
                    e.stroke(),
                    this._data.leftEnd === u.LineEnd.Arrow &&
                      Object(c.drawArrow)(r, i, e, e.lineWidth, t.pixelRatio),
                    this._data.rightEnd === u.LineEnd.Arrow &&
                      Object(c.drawArrow)(i, r, e, e.lineWidth, t.pixelRatio);
                else {
                  var n = this._data.points[2],
                    a = this._data.points[3],
                    o = a.subtract(i),
                    s = n.subtract(o.scaled(0.25)),
                    l = n.add(o.scaled(0.25)),
                    h = r.subtract(n),
                    _ = a.subtract(h.scaled(0.25)),
                    f = a.add(h.scaled(0.25));
                  this._data.fillBack &&
                    this._data.points.length > 2 &&
                    ((e.fillStyle = this._data.backColor),
                    e.beginPath(),
                    e.moveTo(i.x, i.y),
                    e.quadraticCurveTo(s.x, s.y, n.x, n.y),
                    e.bezierCurveTo(l.x, l.y, _.x, _.y, a.x, a.y),
                    e.quadraticCurveTo(f.x, f.y, r.x, r.y),
                    e.fill()),
                    e.beginPath(),
                    Object(p.b)(e, this._data.extendLeftPoints),
                    e.moveTo(i.x, i.y),
                    e.quadraticCurveTo(s.x, s.y, n.x, n.y),
                    e.bezierCurveTo(l.x, l.y, _.x, _.y, a.x, a.y),
                    e.quadraticCurveTo(f.x, f.y, r.x, r.y),
                    Object(p.b)(e, this._data.extendRightPoints),
                    e.stroke(),
                    this._data.leftEnd === u.LineEnd.Arrow &&
                      Object(c.drawArrow)(s, i, e, e.lineWidth, t.pixelRatio),
                    this._data.rightEnd === u.LineEnd.Arrow &&
                      Object(c.drawArrow)(f, r, e, e.lineWidth, t.pixelRatio);
                }
              }
            }),
            t
          );
        })(s.ScaledPaneRenderer),
        f = i('Zy3/'),
        v = i('4Ptp'),
        g = i('Eyy1');
      i.d(t, 'BezierCubicPaneView', function () {
        return y;
      });
      var y = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t._bezierCubicRenderer = new _()),
            (t._renderer = null),
            (t._extendedSegmentLeftCache = null),
            (t._extendedSegmentRightCache = null),
            t
          );
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.renderer = function (e, t) {
            return this._invalidated && this._updateImpl(e, t), this._renderer;
          }),
          (t.prototype._updateImpl = function (t, i) {
            if (
              (e.prototype._updateImpl.call(this, t, i),
              (this._renderer = null),
              !(this._points.length < 2))
            ) {
              var r = this._source.properties().childs(),
                a = [],
                o = [];
              if (4 === this._source.points().length) {
                var s = this._source.pointToScreenPoint(
                    this._source.points()[0],
                  )[1],
                  l = this._source.pointToScreenPoint(
                    this._source.points()[1],
                  )[1],
                  h = this._source.pointToScreenPoint(
                    this._source.points()[2],
                  )[1],
                  d = this._source.pointToScreenPoint(
                    this._source.points()[3],
                  )[1],
                  c = d.subtract(s),
                  u = h.subtract(c.scaled(0.25)),
                  p = l.subtract(h),
                  _ = d.add(p.scaled(0.25));
                r.extendLeft.value() &&
                  (a = this._extendSegmentLeft(h, s, u, i, t)),
                  r.extendRight.value() &&
                    (o = this._extendSegmentRight(d, l, _, i, t));
              }
              var v = this._points.slice(),
                g = this._source.controlPoints();
              null !== g &&
                (v.push(this._source.pointToScreenPoint(g[0])[0]),
                v.push(this._source.pointToScreenPoint(g[1])[0]));
              var y = {
                points: v,
                color: r.linecolor.value(),
                lineWidth: r.linewidth.value(),
                lineStyle: r.linestyle.value(),
                leftEnd: r.leftEnd.value(),
                rightEnd: r.rightEnd.value(),
                fillBack: r.fillBackground.value(),
                backColor: Object(n.generateColor)(
                  r.backgroundColor.value(),
                  r.transparency.value(),
                ),
                extendLeftPoints: a,
                extendRightPoints: o,
              };
              this._bezierCubicRenderer.setData(y);
              var w = new f.CompositeRenderer();
              w.append(this._bezierCubicRenderer),
                this.addAnchors(w),
                (this._renderer = w);
            }
          }),
          (t.prototype._extendSegmentLeft = function (e, t, i, r, n) {
            return (
              Object(v.cacheIsValid)(
                this._extendedSegmentLeftCache,
                e,
                t,
                i,
                r,
                n,
              ) ||
                (this._extendedSegmentLeftCache = {
                  p1: e,
                  p2: t,
                  p3: i,
                  width: r,
                  height: n,
                  segment: Object(h.b)(e, t, i, r, n),
                }),
              Object(g.ensureNotNull)(this._extendedSegmentLeftCache).segment
            );
          }),
          (t.prototype._extendSegmentRight = function (e, t, i, r, n) {
            return (
              Object(v.cacheIsValid)(
                this._extendedSegmentRightCache,
                e,
                t,
                i,
                r,
                n,
              ) ||
                (this._extendedSegmentRightCache = {
                  p1: e,
                  p2: t,
                  p3: i,
                  width: r,
                  height: n,
                  segment: Object(h.b)(e, t, i, r, n),
                }),
              Object(g.ensureNotNull)(this._extendedSegmentRightCache).segment
            );
          }),
          t
        );
      })(a.LineSourcePaneView);
    },
    aB9a: function (e, t, i) {
      'use strict';
      i.r(t);
      var r = i('mrSG'),
        n = i('aO4+'),
        a = i('VaSN'),
        o = i('VdBB'),
        s = i('vq8G'),
        l = i('f6yo'),
        h = i('jFln'),
        d = i('ogJP'),
        c = i('//lt');
      function u() {
        return Object(a.lastEventIsTouch)() ? 16 : 8;
      }
      var p = (function (e) {
        function t(t, i, r, n) {
          var a = e.call(this, t, i) || this;
          return (a.data = r), (a.square = n), a;
        }
        return Object(r.c)(t, e), t;
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
                  var i = [], r = [], n = [], a = [], o = 0;
                  o < this._data.points.length;
                  ++o
                ) {
                  var s = this._data.points[o],
                    l = this._data.backgroundColors[o];
                  s.square ? (i.push(s), r.push(l)) : (n.push(s), a.push(l));
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
                var t = this._data.radius || u(), i = 0;
                i < this._data.points.length;
                ++i
              ) {
                var r = this._data.points[i];
                if (r.subtract(e).length() <= t + 2) {
                  var n =
                    void 0 !== this._data.pointsCursorType
                      ? this._data.pointsCursorType[i]
                      : c.PaneCursorType.Default;
                  return new o.HitTestResult(this._data.hittestResult, {
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
              var o = this._data.currentPoint,
                s = this._data.radius || u(),
                l = Math.max(1, Math.floor((this._data.strokeWidth || 2) * t));
              this._data.selected && (l += Math.max(1, Math.floor(t / 2)));
              var h = Math.max(1, Math.floor(t)),
                c = Math.round(s * t * 2);
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
                      new p(
                        Math.round(v.x * t) + _,
                        Math.round(v.y * t) + _,
                        v.data,
                        v.square,
                      ),
                      c / 2,
                      l,
                    ),
                    v.subtract(o).length() <= s + 2)
                  ) {
                    var g = Math.max(
                        1,
                        Math.floor(this._data.selectedStrokeWidth * t),
                      ),
                      y = Math.round(s * t * 2);
                    y % 2 != h % 2 && (y += 1),
                      a(
                        e,
                        new p(
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
        m = i('Eyy1');
      function x(e, t) {
        var i = t.x - e.x,
          r = t.y - e.y,
          n = Math.abs(Math.atan2(i, r));
        return n > Math.PI / 4 && n < (3 * Math.PI) / 4
          ? c.PaneCursorType.VerticalResize
          : c.PaneCursorType.HorizontalResize;
      }
      i.d(t, 'thirdPointCursorType', function () {
        return x;
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
              return new s.SelectionRenderer({
                bgColors: this._lineAnchorColors(e.points),
                points: e.points,
                visible: this.areAnchorsVisible(),
                hittestResult: o.HitTestResult.REGULAR,
                barSpacing: this._model.timeScale().barSpacing(),
              });
            var t = Object(a.lastEventIsTouch)();
            return new w(
              Object(r.a)(Object(r.a)({}, e), {
                color: this.anchorColor(),
                backgroundColors: this._lineAnchorColors(e.points),
                currentPoint: this.currentPoint(),
                linePointBeingEdited: this.isBeingEdited()
                  ? this._model.linePointBeingEdited()
                  : null,
                hittestResult: o.HitTestResult.CHANGEPOINT,
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
              i = Object(m.ensureNotNull)(
                this._model.paneForSource(this._source),
              ).height();
            return e.map(function (e) {
              return t._model.backgroundColorAtYPercentFromTop(e.y / i);
            });
          }),
          (e.prototype._updateImpl = function (e, t) {
            if (
              ((this._points = []),
              (this._floatPoints = []),
              !this._model.timeScale().isEmpty() && this._validatePriceScale())
            ) {
              for (var i = this._source.points(), r = 0; r < i.length; r++) {
                var n = i[r],
                  a = this._source.pointToScreenPoint(n);
                if (!a) return;
                var o = a[0];
                o.data = r;
                var s = a[1];
                (s.data = r), this._floatPoints.push(o), this._points.push(s);
              }
              2 === this._points.length &&
                (this._middlePoint = this._source.calcMiddlePoint(
                  this._points[0],
                  this._points[1],
                )),
                (this._invalidated = !1);
            }
          }),
          (e.prototype._validatePriceScale = function () {
            var e = this._source.priceScale();
            return null !== e && !e.isEmpty();
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
        o = i('Zy3/').CompositeRenderer,
        s = i('Tmoa'),
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
              ((e.fillStyle = s.generateColor(
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
          var o = i.length();
          return Math.abs(o - this._data.width / 2) < 3
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
              s = Math.max(t.index, i.index),
              l = s - a,
              d = this._points[0],
              c = this._points[1],
              u = Math.abs(d.x - c.x),
              p = new o(),
              _ = this._source.properties(),
              f = this._model.timeScale();
            if (0 !== l) {
              for (var v = Math.min(d.x, c.x), g = [], y = a; v > -u; y -= l)
                (v = f.indexToCoordinate(y)), g.push(v);
              v = Math.max(d.x, c.x);
              for (y = s; v < f.width(); y += l)
                (v = f.indexToCoordinate(y)), g.push(v);
              for (var w = 0; w < g.length; w++) {
                var m = {
                    point: new r(g[w], d.y),
                    width: u,
                    height: u,
                    color: _.linecolor.value(),
                    linewidth: _.linewidth.value(),
                    linestyle: _.linestyle.value(),
                    fillBackground: _.fillBackground.value(),
                    backcolor: _.backgroundColor.value(),
                    transparency: _.transparency.value(),
                  },
                  x = new h();
                x.setData(m), p.append(x);
              }
              this.addAnchors(p), (this._renderer = p);
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
        o = i('z+cS'),
        s = i('Zy3/'),
        l = i('VdBB'),
        h = (function (e) {
          function t(t, i) {
            var r = e.call(this, t, i) || this;
            return (
              (r._renderer = null),
              (r._horizLineRenderer = new a.HorizontalLineRenderer()),
              (r._vertLineRenderer = new o.VerticalLineRenderer()),
              r._horizLineRenderer.setHitTest(
                new l.HitTestResult(l.HitTestResult.MOVEPOINT),
              ),
              r
            );
          }
          return (
            Object(r.c)(t, e),
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
                var r = new s.CompositeRenderer();
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
        return s;
      });
      var r = i('mrSG'),
        n = i('aO4+'),
        a = i('Tmoa'),
        o = i('VdBB'),
        s = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (t._data = null), t;
          }
          return (
            Object(r.c)(t, e),
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
                s = e.length(),
                l = this._data.prevPoint.subtract(this._data.center),
                h = (l = new n.Point(l.x, l.y / i)).length();
              return Math.abs(s - a) < 5 && t.x * e.x >= 0 && t.y * e.y >= 0
                ? new o.HitTestResult(o.HitTestResult.MOVEPOINT)
                : this._data.fillBack &&
                  s >= h &&
                  s <= a &&
                  t.x * e.x >= 0 &&
                  t.y * e.y >= 0
                ? new o.HitTestResult(o.HitTestResult.MOVEPOINT_BACKGROUND)
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
                  o = (r = new n.Point(r.x, r.y / i)).length(),
                  s = this._data.prevPoint.subtract(this._data.center),
                  l = (s = new n.Point(s.x, s.y / i)).length();
                e.scale(1, i),
                  this._data.fillBack &&
                    (this._data.point.x < this._data.center.x &&
                      ((o = -o), (l = -l)),
                    e.beginPath(),
                    e.moveTo(l, 0),
                    e.lineTo(o, 0),
                    e.arcTo(o, o, 0, o, Math.abs(o)),
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
                    ? e.arc(0, 0, Math.abs(o), 0, Math.PI / 2, !1)
                    : e.arc(0, 0, Math.abs(o), -Math.PI / 2, -Math.PI, !0),
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
      i.r(t),
        i.d(t, 'ABCDPaneView', function () {
          return u;
        });
      var r = i('mrSG'),
        n = i('8Uy/'),
        a = i('Zy3/'),
        o = i('zXvd'),
        s = i('pJOz'),
        l = i('qgcf'),
        h = i('a7Ha'),
        d = i('BCbF'),
        c = i('VdBB'),
        u = (function (e) {
          function t(t, i) {
            var r = e.call(this, t, i) || this;
            return (
              (r._numericFormatter = new o.NumericFormatter()),
              (r._abRetracementTrend = new s.TrendLineRenderer()),
              (r._cdRetracementTrend = new s.TrendLineRenderer()),
              (r._polylineRenderer = new d.PolygonRenderer(
                new c.HitTestResult(c.HitTestResult.MOVEPOINT),
              )),
              (r._abLabelRenderer = new l.TextRenderer()),
              (r._cdLabelRenderer = new l.TextRenderer()),
              (r._textRendererALabel = new l.TextRenderer()),
              (r._textRendererBLabel = new l.TextRenderer()),
              (r._textRendererCLabel = new l.TextRenderer()),
              (r._textRendererDLabel = new l.TextRenderer()),
              (r._renderer = null),
              r
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.renderer = function (e, t) {
              return this._invalidated && this._updateImpl(), this._renderer;
            }),
            (t.prototype._updateImpl = function () {
              if ((e.prototype._updateImpl.call(this), this._points.length < 2))
                this._renderer = null;
              else {
                var t = this._source.properties().childs(),
                  i = new a.CompositeRenderer(),
                  r = function (e, i) {
                    return {
                      points: [e],
                      text: i,
                      color: t.textcolor.value(),
                      vertAlign: 'middle',
                      horzAlign: 'center',
                      font: t.font.value(),
                      offsetX: 0,
                      offsetY: 0,
                      bold: t.bold && t.bold.value(),
                      italic: t.italic && t.italic.value(),
                      fontsize: t.fontsize.value(),
                      backgroundColor: t.color.value(),
                      backgroundRoundRect: 4,
                    };
                  },
                  o = function (e, i) {
                    return {
                      points: [e, i],
                      color: t.color.value(),
                      linewidth: t.linewidth.value(),
                      linestyle: n.LINESTYLE_DOTTED,
                      extendleft: !1,
                      extendright: !1,
                      leftend: h.LineEnd.Normal,
                      rightend: h.LineEnd.Normal,
                    };
                  },
                  s = this._points,
                  l = s[0],
                  d = s[1],
                  c = s[2],
                  u = s[3],
                  p = {
                    points: this._points,
                    color: t.color.value(),
                    linewidth: t.linewidth.value(),
                    linestyle: n.LINESTYLE_SOLID,
                    fillBackground: !1,
                    filled: !1,
                    backcolor: 'rgba(0, 0, 0, 0)',
                  };
                this._polylineRenderer.setData(p),
                  i.append(this._polylineRenderer);
                var _ = r(l, 'A');
                d.y > l.y
                  ? ((_.vertAlign = 'bottom'), (_.offsetY = 5))
                  : ((_.vertAlign = 'top'), (_.offsetY = 5)),
                  this._textRendererALabel.setData(_),
                  i.append(this._textRendererALabel);
                var f = r(d, 'B');
                if (
                  (d.y < l.y
                    ? ((f.vertAlign = 'bottom'), (f.offsetY = 5))
                    : ((f.vertAlign = 'top'), (f.offsetY = 5)),
                  this._textRendererBLabel.setData(f),
                  i.append(this._textRendererBLabel),
                  this._points.length > 2)
                ) {
                  var v = r(c, 'C');
                  c.y < d.y
                    ? ((v.vertAlign = 'bottom'), (v.offsetY = 5))
                    : ((v.vertAlign = 'top'), (v.offsetY = 5)),
                    this._textRendererCLabel.setData(v),
                    i.append(this._textRendererCLabel);
                }
                if (this._points.length > 3) {
                  var g = r(u, 'D');
                  u.y < c.y
                    ? ((g.vertAlign = 'bottom'), (g.offsetY = 5))
                    : ((g.vertAlign = 'top'), (g.offsetY = 5)),
                    this._textRendererDLabel.setData(g),
                    i.append(this._textRendererDLabel);
                }
                if (this._points.length >= 3) {
                  this._abRetracementTrend.setData(o(l, c)),
                    i.append(this._abRetracementTrend);
                  var y = l.add(c).scaled(0.5),
                    w = this._source.points(),
                    m = w[0],
                    x = w[1],
                    b = w[2],
                    R =
                      Math.round(
                        1e3 *
                          Math.abs((b.price - x.price) / (x.price - m.price)),
                      ) / 1e3,
                    T = r(y, this._numericFormatter.format(R));
                  this._abLabelRenderer.setData(T),
                    i.append(this._abLabelRenderer);
                }
                if (this._points.length >= 4) {
                  this._cdRetracementTrend.setData(o(d, u)),
                    i.append(this._cdRetracementTrend);
                  var S = d.add(u).scaled(0.5),
                    P = this._source.points(),
                    L = ((x = P[1]), (b = P[2]), P[3]),
                    C =
                      Math.round(
                        1e3 *
                          Math.abs((L.price - b.price) / (b.price - x.price)),
                      ) / 1e3,
                    M = r(S, this._numericFormatter.format(C));
                  this._cdLabelRenderer.setData(M),
                    i.append(this._cdLabelRenderer);
                }
                this.addAnchors(i), (this._renderer = i);
              }
            }),
            t
          );
        })(i('aB9a').LineSourcePaneView);
    },
    bcXK: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('Hr11'),
        a = i('pJOz').TrendLineRenderer,
        o = i('cjIn').PaneRendererCachedImage,
        s = i('VdBB').HitTestResult,
        l = i('Zy3/').CompositeRenderer,
        h = i('Tmoa'),
        d = i('a7Ha').LineEnd,
        c = i('cPgM').ScaledPaneRenderer,
        u = i('NCfL').LineToolPaneViewWithLevelledTextCache;
      function p(e, t, i) {
        c.call(this),
          (this._data = e),
          (this._hittest = t || new s(s.MOVEPOINT)),
          (this._backHittest = i || new s(s.MOVEPOINT_BACKGROUND));
      }
      function _(e, t) {
        u.call(this, e, t),
          (this._rendererCache = {}),
          (this._trendLineRenderer = new a()),
          (this._renderer = null);
      }
      inherit(p, c),
        (p.prototype._drawImpl = function (e) {
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
        (p.prototype.hitTest = function (e) {
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
        inherit(_, u),
        (_.prototype.getCacheRects = function (e, t) {
          u.prototype.getCacheRects.call(this, e, t);
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
            (u.prototype._updateImpl.call(this),
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
              var m = new l(),
                x =
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
                  (T.fillBackground = x),
                  (T.hittestOnBackground = !0),
                  (T.fullCircles = a.fullCircles.value()),
                  c > 0 && (T.radius2 = this._levels[c - 1].radius);
                var S = new s(s.MOVEPOINT, null, R.index);
                if ((m.append(new p(T, S)), a.showCoeffs.value())) {
                  var P = new o(this, c);
                  m.append(P);
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
                  m.append(this._trendLineRenderer);
              }
              this.addAnchors(m), (this._renderer = m);
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
        o = i('IjC5').RectangleRenderer,
        s = i('pJOz').TrendLineRenderer,
        l = i('VdBB').HitTestResult,
        h = i('gyZD').PaneRendererLine,
        d = i('Zy3/').CompositeRenderer,
        c = i('Tmoa'),
        u = i('Ye2/').LineToolBarsPatternMode,
        p = i('a7Ha').LineEnd;
      function _(e, t) {
        n.call(this, e, t),
          (this._vertLineRenderer1 = new a()),
          (this._vertLineRenderer2 = new a()),
          (this._medianRenderer = new s()),
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
                s = e.priceToCoordinate(t, a),
                _ = function (r) {
                  var n = (r - t) * i + t;
                  return e.priceToCoordinate(n, a) - s;
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
                m = {
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
              this._pattern = this._source._pattern.map(m[f]);
            } else delete this._pattern;
            if (this._pattern && 2 === this._source.points().length) {
              var x =
                this._source.points()[0].index < this._source.points()[1].index
                  ? this._points[0]
                  : this._points[1];
              if (!x) return void (this._renderer = new d());
              (f = parseInt(this._source.properties().mode.value(), 10)),
                (w = Math.abs(
                  (this._points[0].x - this._points[1].x) /
                    (this._pattern.length - 1),
                ));
              if (f === u.Bars || f === u.OpenClose) {
                for (
                  var b = new d(),
                    R = f === u.Bars ? ['high', 'low'] : ['open', 'close'],
                    T = R[0],
                    S = R[1],
                    P = 0;
                  P < this._pattern.length;
                  P++
                ) {
                  var L = Math.round(x.x + P * w + 0.5),
                    C = x.y + Math.round(this._pattern[P][T]),
                    M = x.y + Math.round(this._pattern[P][S]);
                  ((O = {}).points = [new r(L - 1, C), new r(L + 1, M)]),
                    (O.color = this._source.properties().color.value()),
                    (O.linewidth = 1),
                    (O.backcolor = this._source.properties().color.value()),
                    (O.fillBackground = !0),
                    (O.transparency = 10),
                    (O.extendLeft = !1),
                    (O.extendRight = !1);
                  var I = new o();
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
              var j = {};
              (j.width = D),
                (j.height = k),
                (j.x = N.x),
                (j.color = '#808080'),
                (j.linewidth = 1),
                (j.linestyle = CanvasEx.LINESTYLE_SOLID),
                this._vertLineRenderer2.setData(j),
                b.append(this._vertLineRenderer2);
              var z = {
                points: [B, N],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: '#808080',
                linewidth: 1,
                linestyle: CanvasEx.LINESTYLE_SOLID,
                extendleft: !1,
                extendright: !1,
                leftend: p.Normal,
                rightend: p.Normal,
              };
              this._medianRenderer.setData(z),
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
        o = i('2trc').ChannelRenderer,
        s = i('VdBB').HitTestResult,
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
      function u(e, t) {
        c.call(this, e, t);
      }
      function p(e, t) {
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
                u = e.fillBackground.value(),
                p = e.transparency.value(),
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
                  m = this._medianPoint.addScaled(n, -f.coeff.value()),
                  x = m.add(d);
                if (u)
                  ((v = {}).p1 = y),
                    (v.p2 = w),
                    (v.p3 = this._medianPoint.addScaled(n, c)),
                    (v.p4 = v.p3.add(d)),
                    (v.color = f.color.value()),
                    (v.width = this._model.timeScale().width()),
                    (v.height = this._source.priceScale().height()),
                    (v.transparency = p),
                    (v.hittestOnBackground = !0),
                    (v.extendLeft = e.extendLines.value()),
                    (g = new o()).setData(v),
                    t.append(g),
                    ((v = {}).p1 = m),
                    (v.p2 = x),
                    (v.p3 = this._medianPoint.addScaled(n, -c)),
                    (v.p4 = v.p3.add(d)),
                    (v.color = f.color.value()),
                    (v.width = this._model.timeScale().width()),
                    (v.height = this._source.priceScale().height()),
                    (v.transparency = p),
                    (v.hittestOnBackground = !0),
                    (v.extendLeft = e.extendLines.value()),
                    (g = new o()).setData(v),
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
                  R.setHitTest(new s(s.MOVEPOINT, null, _)),
                  t.append(R);
                var T = {
                    points: [m, x],
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
                  S.setHitTest(new s(s.MOVEPOINT, null, _)),
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
                u = 0,
                p = e.fillBackground.value(),
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
                  m = w.add(c);
                if (p)
                  ((i = {}).p1 = g),
                    (i.p2 = y),
                    (i.p3 = this._medianPoint.addScaled(d, u)),
                    (i.p4 = i.p3.add(c)),
                    (i.color = v.color.value()),
                    (i.width = this._model.timeScale().width()),
                    (i.height = this._source.priceScale().height()),
                    (i.transparency = _),
                    (i.hittestOnBackground = !0),
                    (i.extendLeft = e.extendLines.value()),
                    (R = new o()).setData(i),
                    t.append(R),
                    ((i = {}).p1 = w),
                    (i.p2 = m),
                    (i.p3 = this._medianPoint.addScaled(d, -u)),
                    (i.p4 = i.p3.add(c)),
                    (i.color = v.color.value()),
                    (i.width = this._model.timeScale().width()),
                    (i.height = this._source.priceScale().height()),
                    (i.transparency = _),
                    (i.hittestOnBackground = !0),
                    (i.extendLeft = e.extendLines.value()),
                    (R = new o()).setData(i),
                    t.append(R);
                u = v.coeff.value();
                var x = {
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
                b.setData(x),
                  b.setHitTest(new s(s.MOVEPOINT, null, f)),
                  t.append(b);
                var R,
                  T = {
                    points: [w, m],
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
                  R.setHitTest(new s(s.MOVEPOINT, null, f)),
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
        inherit(u, c),
        (u.prototype._calcMofifiedBase = function () {
          if (this._floatPoints.length > 2) {
            var e = this._floatPoints[0].x,
              t = 0.5 * (this._floatPoints[0].y + this._floatPoints[1].y),
              i = new r(e, t);
            this._modifiedBase = i;
          }
        }),
        inherit(p, d),
        (p.prototype._updateRenderer = function () {
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
                u = 0,
                p = t.fillBackground.value(),
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
                    m = this._medianPoint.addScaled(d, -g.coeff.value()),
                    x = m.add(c);
                  if (p)
                    ((r = {}).p1 = y),
                      (r.p2 = w),
                      (r.p3 = this._medianPoint.addScaled(d, u)),
                      (r.p4 = r.p3.add(c)),
                      (r.color = g.color.value()),
                      (r.width = this._model.timeScale().width()),
                      (r.height = this._source.priceScale().height()),
                      (r.transparency = _),
                      (r.hittestOnBackground = !0),
                      (r.extendLeft = t.extendLines.value()),
                      (T = new o()).setData(r),
                      e.append(T),
                      ((r = {}).p1 = m),
                      (r.p2 = x),
                      (r.p3 = this._medianPoint.addScaled(d, -u)),
                      (r.p4 = r.p3.add(c)),
                      (r.color = g.color.value()),
                      (r.width = this._model.timeScale().width()),
                      (r.height = this._source.priceScale().height()),
                      (r.transparency = _),
                      (r.hittestOnBackground = !0),
                      (r.extendLeft = t.extendLines.value()),
                      (T = new o()).setData(r),
                      e.append(T);
                  u = g.coeff.value();
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
                    R.setHitTest(new s(s.MOVEPOINT, null, v)),
                    e.append(R);
                  var T,
                    S = {
                      points: [m, x],
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
                    T.setHitTest(new s(s.MOVEPOINT, null, v)),
                    e.append(T);
                }
              }
              this.addAnchors(e), (this._renderer = e);
            } else this.addAnchors(e);
          }
        }),
        (p.prototype._updateImpl = function () {
          d.prototype._updateImpl.call(this);
        }),
        (p.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.PitchforkLinePaneView = d),
        (t.SchiffPitchforkLinePaneView = c),
        (t.SchiffPitchfork2LinePaneView = u),
        (t.InsidePitchforkLinePaneView = p);
    },
    cjIn: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'PaneRendererCachedImage', function () {
          return o;
        });
      var r = i('aO4+'),
        n = i('f6yo'),
        a = i('VdBB'),
        o = (function () {
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
        o = i('VdBB').HitTestResult,
        s = i('Zy3/').CompositeRenderer,
        l = i('l4sv').HorizontalLineRenderer,
        h = [i('//lt').PaneCursorType.VerticalResize];
      function d(e, t) {
        n.call(this, e, t),
          (this._rendererCache = {}),
          (this._labelRenderer = new a()),
          (this._lineRenderer = new l()),
          this._lineRenderer.setHitTest(new o(o.MOVEPOINT)),
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
            var e = new s(),
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
                o = i.horzLabelsAlign.value(),
                l = this._points[0],
                d = 0;
              'left' === o
                ? (l.x = 3)
                : 'right' === o
                ? ((l.x = this._model.timeScale().width()), (d = 3))
                : (l.x = this._model.timeScale().width() / 2);
              var c = {
                points: [l],
                text: i.text.value(),
                color: i.textcolor.value(),
                vertAlign: a,
                horzAlign: o,
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
              var u = new r(
                this._model.timeScale().width() / 2,
                this._points[0].y,
              );
              (u.data = 0),
                (u.square = !0),
                e.append(
                  this.createLineAnchor({ points: [u], pointsCursorType: h }),
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
        o = i('Zy3/'),
        s = i('vq8G'),
        l = i('qgcf'),
        h = i('VdBB'),
        d = i('f6yo'),
        c = i('Hr11');
      var u = (function () {
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
                      o = a * Math.round(12 * r),
                      s = Object(c.ceiledEven)(19.5 * r) / 2 + n,
                      l = a * Math.round(10 * r),
                      h = Object(c.ceiledEven)(10 * r) / 2 + n,
                      d = Math.round(t.x * r) + n,
                      u = Math.round(t.y * r);
                    e.beginPath(),
                      e.moveTo(d, u),
                      e.lineTo(d + s, u + o),
                      e.lineTo(d + h, u + o),
                      e.lineTo(d + h, u + o + l),
                      e.lineTo(d - h, u + o + l),
                      e.lineTo(d - h, u + o),
                      e.lineTo(d - s, u + o),
                      e.moveTo(d, u),
                      e.fill();
                  })(e, this._data.point, this._data.direction, t.pixelRatio);
                  break;
                case 'left':
                case 'right':
                  !(function (e, t, i, r) {
                    var n = Math.max(1, Math.floor(r)) % 2 ? 0.5 : 0,
                      a = 'left' === i ? 1 : -1,
                      o = a * Math.round(12 * r) + n,
                      s = Object(c.ceiledEven)(19.5 * r) / 2 + n,
                      l = a * Math.round(22 * r) + n,
                      h = Object(c.ceiledEven)(10 * r) / 2 + n,
                      d = Math.round(t.x * r) + n,
                      u = Math.round(t.y * r) + n;
                    e.beginPath(),
                      e.moveTo(d, u),
                      e.lineTo(d + o, u + s),
                      e.lineTo(d + o, u + h),
                      e.lineTo(d + l, u + h),
                      e.lineTo(d + l, u - h),
                      e.lineTo(d + o, u - h),
                      e.lineTo(d + o, u - s),
                      e.moveTo(d, u),
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
        return p;
      });
      var p = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t._arrowMarkRenderer = new u()),
            (t._textRenderer = new l.TextRenderer()),
            (t._renderer = null),
            (t._anchorsOffset = null),
            t
          );
        }
        return (
          Object(r.c)(t, e),
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
                (this._renderer = new o.CompositeRenderer()),
                this._renderer.append(this._arrowMarkRenderer),
                '' !== i.text.value() &&
                  i.showLabel.value() &&
                  (this._textRenderer.setData(
                    Object(r.a)(
                      {
                        points: this._points,
                        font: n.CHART_FONT_FAMILY,
                        bold: i.bold.value(),
                        italic: i.italic.value(),
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
                new s.SelectionRenderer({
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
        o = a.rotationMatrix,
        s = a.scalingMatrix,
        l = a.translationMatrix,
        h = a.transformPoint,
        d = i('aB9a').LineSourcePaneView,
        c = i('aB9a').thirdPointCursorType,
        u = i('VdBB').HitTestResult,
        p = i('Zy3/').CompositeRenderer,
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
              u = t.add(i).scaled(0.5),
              p = new r(-c.y, c.x);
            (p = p.normalized()),
              (a = u.add(p.scaled(d))),
              (e.strokeStyle = this._data.color),
              (e.lineWidth = this._data.linewidth);
            var f = c.length(),
              v = c.x / f,
              g = c.y / f,
              y = Math.acos(v);
            g < 0 && (y = -y);
            var w = this._data.points[2],
              m = l(-u.x, -u.y);
            (w = h(m, w)),
              (m = o(-y)),
              (w = h(m, w)),
              (m = s(1, f / (2 * d))),
              (w = h(m, w)).y < 0
                ? (this._data.clockwise = !0)
                : (this._data.clockwise = !1),
              e.save(),
              e.beginPath(),
              e.translate(t.x, t.y),
              e.rotate(y);
            var x = 1 - Math.sqrt(3) / 2;
            e.scale(1, d / (f * x)),
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
            return (d = n(t, i, e).distance) < 5 ? new u(u.MOVEPOINT) : null;
          var c = i.subtract(t),
            p = c.length(),
            _ = t.add(i).scaled(0.5),
            f = a.subtract(_);
          (f = f.normalized()), (a = _.add(f.scaled(d)));
          var v = c.x / p,
            g = c.y / p,
            y = Math.acos(v);
          g < 0 && (y = -y);
          var w = l(-t.x, -t.y);
          (e = h(w, e)), (w = o(-y)), (e = h(w, e)), (f = h(w, f));
          var m,
            x = 1 - Math.sqrt(3) / 2;
          if (
            ((w = s(1, (p * x) / d)),
            (e = h(w, e)),
            (f = h(w, f)),
            e.y * f.y < 0)
          )
            return null;
          m =
            e.y < 0
              ? new r(0.5 * p, (p * Math.sqrt(3)) / 2)
              : new r(0.5 * p, (-p * Math.sqrt(3)) / 2);
          var b = e.subtract(m).length();
          return Math.abs(b - p) <= 5 ? new u(u.MOVEPOINT) : null;
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
            var t = new p();
            (this._renderer = t), t.append(this._arcRenderer);
            var i = [],
              a = e.points[0],
              u = new r(a.x, a.y);
            if (((u.data = 0), i.push(u), 1 !== e.points.length)) {
              var _ = e.points[1],
                f = new r(_.x, _.y);
              if (((f.data = 1), 2 !== e.points.length)) {
                i.push(f);
                var g = e.points[2],
                  y = n(a, _, g).distance,
                  w = _.subtract(a),
                  m = a.add(_).scaled(0.5),
                  x = new r(-w.y, w.x);
                (x = x.normalized()), (g = m.add(x.scaled(y)));
                var b = m.add(x.scaled(-y)),
                  R = w.length(),
                  T = w.x / R,
                  S = w.y / R,
                  P = Math.acos(T);
                S < 0 && (P = -P);
                var L = e.points[2],
                  C = l(-m.x, -m.y);
                (L = h(C, L)),
                  (C = o(-P)),
                  (L = h(C, L)),
                  (C = s(1, R / (2 * y)));
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
        o = i('VdBB').HitTestResult,
        s = i('/hKg').PaneRendererCandles,
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
                  o = n[i].price,
                  s = n[i + 1].price,
                  l = n[i + 1].index - n[i].index,
                  h = e._model.timeScale().barSpacing() * r.sign(l),
                  d = (s - o) / (t.bars().length - 1),
                  c = e._source.properties(),
                  u = c.candleStyle.upColor.value(),
                  p = c.candleStyle.downColor.value(),
                  _ = c.candleStyle.borderUpColor.value(),
                  f = c.candleStyle.borderDownColor.value();
                return {
                  bars: t.bars().map(function (t, i) {
                    var r = t.c >= t.o;
                    return {
                      time: a + i * h,
                      open: e.priceToCoordinate(t.o + o + i * d),
                      high: e.priceToCoordinate(t.h + o + i * d),
                      low: e.priceToCoordinate(t.l + o + i * d),
                      close: e.priceToCoordinate(t.c + o + i * d),
                      color: r ? u : p,
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
                u = new a();
              u.setData(c), u.setHitTest(new o(o.MOVEPOINT, null)), t.append(u);
            }
            var p = this._source.properties(),
              _ = p.candleStyle.drawWick.value(),
              f = p.candleStyle.drawBorder.value(),
              v = p.candleStyle.borderColor.value(),
              g = p.candleStyle.wickColor.value(),
              y = new l();
            y.setGlobalAlpha(1 - p.transparency.value() / 100);
            var w = this._model.timeScale().barSpacing();
            for (i = 0; i < this._segments.length; i++) {
              var m = {
                bars: this._segments[i].bars,
                barSpacing: w,
                wickVisible: _,
                bodyVisible: !0,
                borderVisible: f,
                borderColor: v,
                wickColor: g,
                barWidth: d.optimalBarWidth(w),
                hittest: new o(o.MOVEPOINT, null),
              };
              y.append(new s(m));
            }
            t.append(y), this.addAnchors(t), (this._renderer = t);
          }
        }),
        (c.prototype.renderer = function (e, t) {
          return this._invalidated && this._udpateImpl(), this._renderer;
        }),
        (t.GhostFeedPaneView = c);
    },
    e9yB: function (e, t, i) {
      'use strict';
      i.d(t, 'c', function () {
        return u;
      }),
        i.d(t, 'b', function () {
          return p;
        }),
        i.d(t, 'a', function () {
          return _;
        });
      var r = i('mrSG'),
        n = i('GEp6'),
        a = i('VaSN'),
        o = i('cPgM'),
        s = i('a7Ha'),
        l = i('jFln'),
        h = i('VdBB'),
        d = i('2hKl'),
        c = i('pJOz');
      function u(e, t, i) {
        for (var r = 0, a = i; r < a.length; r++)
          for (var o = a[r], s = 1; s < o.length; s++) {
            var l = o[s - 1],
              d = o[s];
            if (Object(n.distanceToSegment)(l, d, e).distance < t)
              return new h.HitTestResult(h.HitTestResult.MOVEPOINT);
          }
        return null;
      }
      function p(e, t) {
        for (var i = 0; i < t.length; i++) {
          var r = t[i],
            n = r[0];
          e.moveTo(n.x, n.y);
          for (var a = 1; a < r.length; a++) {
            var o = r[a];
            e.lineTo(o.x, o.y);
          }
        }
      }
      var _ = (function (e) {
        function t(t) {
          var i = e.call(this) || this;
          return (i._data = t || null), i;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.setData = function (e) {
            this._data = e;
          }),
          (t.prototype.hitTest = function (e, t) {
            if (null !== this._data && 3 === this._data.points.length) {
              var i = Object(a.lastEventIsTouch)() ? 10 : 3,
                r = this._data.points,
                n = r[0],
                o = r[1],
                s = r[2],
                l = o.subtract(n),
                c = s.subtract(l.scaled(0.25)),
                p = s.add(l.scaled(0.25));
              if (Object(d.c)(s, n, c, e, i) || Object(d.c)(s, o, p, e, i))
                return new h.HitTestResult(h.HitTestResult.MOVEPOINT);
              var _ = u(e, i, this._data.extendLeftSegments);
              return (
                null === _ && (_ = u(e, i, this._data.extendRightSegments)), _
              );
            }
            return null;
          }),
          (t.prototype._drawImpl = function (e, t) {
            if (null !== this._data) {
              var i = this._data.points,
                r = i[0],
                n = i[1],
                a = i[2];
              if (
                ((e.lineCap = 'butt'),
                (e.strokeStyle = this._data.color),
                (e.lineWidth = this._data.lineWidth),
                Object(l.setLineStyle)(e, this._data.lineStyle),
                2 === this._data.points.length)
              )
                e.beginPath(),
                  e.moveTo(r.x, r.y),
                  e.lineTo(n.x, n.y),
                  e.stroke();
              else {
                var o = n.subtract(r),
                  h = a.subtract(o.scaled(0.25)),
                  d = a.add(o.scaled(0.25));
                this._data.fillBack &&
                  this._data.points.length > 2 &&
                  ((e.fillStyle = this._data.backColor),
                  e.beginPath(),
                  e.moveTo(r.x, r.y),
                  e.quadraticCurveTo(h.x, h.y, a.x, a.y),
                  e.quadraticCurveTo(d.x, d.y, n.x, n.y),
                  e.fill()),
                  e.beginPath(),
                  p(e, this._data.extendLeftSegments),
                  e.moveTo(r.x, r.y),
                  e.quadraticCurveTo(h.x, h.y, a.x, a.y),
                  e.quadraticCurveTo(d.x, d.y, n.x, n.y),
                  p(e, this._data.extendRightSegments),
                  e.stroke(),
                  this._data.leftEnd === s.LineEnd.Arrow &&
                    Object(c.drawArrow)(h, r, e, e.lineWidth, t.pixelRatio),
                  this._data.rightEnd === s.LineEnd.Arrow &&
                    Object(c.drawArrow)(d, n, e, e.lineWidth, t.pixelRatio);
              }
            }
          }),
          t
        );
      })(o.ScaledPaneRenderer);
    },
    eg8N: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('qgcf').TextRenderer,
        o = i('IjC5').RectangleRenderer,
        s = i('pJOz').TrendLineRenderer,
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
                u = this._source.ownerSource().firstValue(),
                p = 1;
              p <= 7;
              p++
            ) {
              if ((m = C['hlevel' + p]).visible.value()) {
                var _ = m.coeff.value(),
                  f = m.color.value(),
                  v = c + _ * h,
                  g = this._source.priceScale().priceToCoordinate(v, u);
                this._hlevels.push({ coeff: _, color: f, y: g });
              }
            }
            this._vlevels = [];
            var y = i ? e.index - t.index : t.index - e.index,
              w = i ? t.index : e.index;
            for (p = 1; p <= 7; p++) {
              var m;
              if ((m = C['vlevel' + p]).visible.value()) {
                (_ = m.coeff.value()), (f = m.color.value());
                var x = Math.round(w + _ * y),
                  b = this._model.timeScale().indexToCoordinate(x);
                this._vlevels.push({ coeff: _, color: f, x: b });
              }
            }
            if (
              ((this._hfans = []), (this._vfans = []), C.fans.visible.value())
            )
              for (p = 1; p <= 7; p++) {
                (x = Math.round(w + C['hlevel' + p].coeff.value() * y)),
                  (v = c + C['vlevel' + p].coeff.value() * h);
                this._hfans.push(this._model.timeScale().indexToCoordinate(x)),
                  this._vfans.push(
                    this._source.priceScale().priceToCoordinate(v, u),
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
            for (p = 0; p < this._hlevels.length; p++) {
              if (p > 0 && M) {
                var k = this._hlevels[p - 1];
                (e = new r(T, this._hlevels[p].y)), (t = new r(P, k.y));
                ((j = {}).points = [e, t]),
                  (j.color = this._hlevels[p].color),
                  (j.linewidth = 0),
                  (j.backcolor = this._hlevels[p].color),
                  (j.fillBackground = !0),
                  (j.transparency = I),
                  (j.extendLeft = !1),
                  (j.extendRight = !1),
                  (E = new o(void 0, void 0, !0)).setData(j),
                  R.append(E);
              }
              var B = {
                points: [
                  (e = new r(T, this._hlevels[p].y)),
                  (t = new r(P, this._hlevels[p].y)),
                ],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: this._hlevels[p].color,
                linewidth: C.linewidth.value(),
                linestyle: C.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: d.Normal,
                rightend: d.Normal,
              };
              if (
                ((E = new s()).setData(B),
                R.append(E),
                C.showLeftLabels.value())
              ) {
                var N = {
                  points: [e],
                  text: this._numericFormatter.format(this._hlevels[p].coeff),
                  color: this._hlevels[p].color,
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
                  text: this._numericFormatter.format(this._hlevels[p].coeff),
                  color: this._hlevels[p].color,
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
            for (p = 0; p < this._vlevels.length; p++) {
              (e = new r(this._vlevels[p].x, S)),
                (t = new r(this._vlevels[p].x, L));
              if (p > 0 && O) {
                k = this._vlevels[p - 1];
                var j,
                  z = new r(k.x, S);
                ((j = {}).points = [z, t]),
                  (j.color = this._vlevels[p].color),
                  (j.linewidth = 0),
                  (j.backcolor = this._vlevels[p].color),
                  (j.fillBackground = !0),
                  (j.transparency = D),
                  (j.extendLeft = !1),
                  (j.extendRight = !1),
                  (E = new o(void 0, void 0, !0)).setData(j),
                  R.append(E);
              }
              var E;
              B = {
                points: [e, t],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: this._vlevels[p].color,
                linewidth: C.linewidth.value(),
                linestyle: C.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: d.Normal,
                rightend: d.Normal,
              };
              if (
                ((E = new s()).setData(B), R.append(E), C.showTopLabels.value())
              ) {
                var V = {
                  points: [e],
                  text: this._numericFormatter.format(this._vlevels[p].coeff),
                  color: this._vlevels[p].color,
                  vertAlign: 'bottom',
                  horzAlign: 'center',
                  font: C.font.value(),
                  offsetX: 0,
                  offsetY: 3,
                  fontsize: 12,
                };
                R.append(new a(V));
              }
              if (C.showBottomLabels.value()) {
                var H = {
                  points: [t],
                  text: this._numericFormatter.format(this._vlevels[p].coeff),
                  color: this._vlevels[p].color,
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
            Y(R, this._hfans, !0),
              Y(R, this._vfans, !1),
              this.addAnchors(R),
              (this._renderer = R);
          }
          function Y(e, t, i) {
            var n = new r(T, S),
              a = new r(P, S),
              o = new r(T, L),
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
              var i = new s();
              i.setData(Object.assign({}, h, { points: t })), e.append(i);
            }
            for (var u = 0; u < t.length; ++u) {
              var p = i ? L : t[u],
                _ = i ? S : t[u],
                f = i ? t[u] : T,
                v = i ? t[u] : P,
                g = new r(v, p),
                y = new r(f, p),
                w = new r(v, _),
                m = new r(f, _);
              c([o, w]), c([l, m]), c([n, g]), c([a, y]);
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
        o = i('qgcf').TextRenderer,
        s = i('Zy3/').CompositeRenderer;
      function l(e, t) {
        r.call(this, e, t),
          (this._label1 = null),
          (this._label2 = null),
          (this._trendLineRendererPoints12 = new a()),
          (this._trendLineRendererPoints43 = new a()),
          (this._disjointChannelRenderer = new n()),
          (this._p1LabelRenderer = new o()),
          (this._p2LabelRenderer = new o()),
          (this._p3LabelRenderer = new o()),
          (this._p4LabelRenderer = new o()),
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
                o = new s(),
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
                  u = d.priceScale().height(),
                  p = l.extendLeft.value(),
                  _ = l.extendRight.value();
                this._disjointChannelRenderer.setData({
                  width: c,
                  height: u,
                  extendleft: p,
                  extendright: _,
                  points: [e, t, n, a],
                  backcolor: l.backgroundColor.value(),
                  transparency: l.transparency.value(),
                  hittestOnBackground: TradingView.isMobile.any(),
                }),
                  o.append(this._disjointChannelRenderer);
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
                o.append(this._trendLineRendererPoints12),
                2 === this._points.length)
              )
                return this.addAnchors(o), void (this._renderer = o);
              var v = this,
                g = function (e, t, i, r, n, a) {
                  if (v._source.properties().showPrices.value()) {
                    var s = {
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
                    e.setData(s), o.append(e);
                    s = {
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
                    t.setData(s), o.append(t);
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
                o.append(this._trendLineRendererPoints43),
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
                o.append(this.createLineAnchor({ points: y })),
                (this._renderer = o);
            }
          }
        }),
        (l.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.FlatBottomPaneView = l);
    },
    hzaj: function (e, t, i) {
      'use strict';
      i.d(t, 'a', function () {
        return h;
      });
      var r = i('mrSG'),
        n = i('aO4+'),
        a = i('BCbF'),
        o = i('vq8G'),
        s = i('Zy3/'),
        l = i('VdBB'),
        h = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._polygonRenderer = new a.PolygonRenderer(null)),
              (t._renderer = new s.CompositeRenderer()),
              t
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.renderer = function (e, t) {
              return this._invalidated && this._updateImpl(), this._renderer;
            }),
            (t.prototype._updateImpl = function () {
              e.prototype._updateImpl.call(this);
              var t = Math.max(1, this._source.smooth()),
                i = this._points;
              if (0 !== i.length) {
                for (var r = [i[0]], n = 1; n < i.length; n++) {
                  for (
                    var a = i[n].subtract(i[n - 1]),
                      h = a.length(),
                      d = Math.min(5, Math.floor(h / t)),
                      c = a.normalized().scaled(h / d),
                      u = 0;
                    u < d - 1;
                    u++
                  )
                    r.push(i[n - 1].add(c.scaled(u)));
                  r.push(i[n]);
                }
                this._points = this._smoothArray(r, t);
                var p = this._createPolygonRendererData();
                if (
                  (this._polygonRenderer.setData(p),
                  (this._renderer = new s.CompositeRenderer()),
                  this._renderer.append(this._polygonRenderer),
                  this._source.finished() && p.points.length > 0)
                ) {
                  var _ = [p.points[0], p.points[p.points.length - 1]],
                    f = new o.SelectionRenderer({
                      points: _,
                      bgColors: this._lineAnchorColors(_),
                      visible: this.areAnchorsVisible(),
                      hittestResult: l.HitTestResult.REGULAR,
                      barSpacing: this._getModel().timeScale().barSpacing(),
                    });
                  this._renderer.append(f);
                }
              } else this._renderer.clear();
            }),
            (t.prototype._smoothArray = function (e, t) {
              for (var i = new Array(e.length), r = 0; r < e.length; r++) {
                for (var a = new n.Point(0, 0), o = 0; o < t; o++) {
                  var s = Math.max(r - o, 0),
                    l = Math.min(r + o, e.length - 1);
                  a = (a = a.add(e[s])).add(e[l]);
                }
                i[r] = a.scaled(0.5 / t);
              }
              return i.push(e[e.length - 1]), i;
            }),
            t
          );
        })(i('aB9a').LineSourcePaneView);
    },
    isd9: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'ArcWedgeRenderer', function () {
          return o;
        });
      var r = i('mrSG'),
        n = i('VdBB'),
        a = i('Tmoa'),
        o = (function (e) {
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
            Object(r.c)(t, e),
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
                  o = this._data.p2.subtract(this._data.center).normalized(),
                  s = t.normalized(),
                  l = a.dotProduct(o),
                  h = s.dotProduct(a),
                  d = s.dotProduct(o);
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
        o = i('Zy3/').CompositeRenderer,
        s = i('a7Ha').LineEnd;
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
            var e = new o(),
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
                leftend: s.Normal,
                rightend: s.Normal,
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
                leftend: s.Normal,
                rightend: s.Normal,
              }),
              this._edgeTrendRenderer.setData(a),
              e.append(this._edgeTrendRenderer);
            var u = this._levels[0],
              p = {};
            (p.center = this._points[0]),
              (p.radius = u.radius),
              (p.prevRadius = 0),
              (p.edge = this._edge),
              (p.color = t.trendline.color.value()),
              (p.color1 = t.color1.value()),
              (p.color2 = t.color2.value()),
              (p.linewidth = t.linewidth.value()),
              (p.edge1 = this._edge1),
              (p.edge2 = this._edge2),
              (p.p1 = u.p1),
              (p.p2 = u.p2),
              (p.fillBackground = t.fillBackground.value()),
              (p.transparency = t.transparency.value()),
              (p.gradient = !0),
              this._arcWedgeRenderer.setData(p),
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
        o = i('VdBB').HitTestResult,
        s = i('Zy3/').CompositeRenderer,
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
            var e = new s(),
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
                u = this._source.properties().transparency.value(),
                p = 0;
              p <= 8;
              p++
            ) {
              var _ = 'level' + p,
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
                    (v.transparency = u),
                    (v.hittestOnBackground = !0),
                    (m = new n()).setData(v),
                    e.append(m),
                    ((v = {}).width = this._model.timeScale().width()),
                    (v.height = this._source.priceScale().height()),
                    (v.p1 = this._floatPoints[0]),
                    (v.p2 = y),
                    (v.p3 = this._floatPoints[0]),
                    (v.p4 = this._medianPoint.addScaled(d, -h)),
                    (v.color = f.color.value()),
                    (v.transparency = u),
                    (v.hittestOnBackground = !0),
                    (m = new n()).setData(v),
                    e.append(m);
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
                (m = new a()).setData(w),
                  m.setHitTest(new o(o.MOVEPOINT, null, p)),
                  e.append(m);
                var m,
                  x = {
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
                (m = new a()).setData(x),
                  m.setHitTest(new o(o.MOVEPOINT, null, p)),
                  e.append(m);
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
        o = i('aB9a').thirdPointCursorType,
        s = i('pJOz').TrendLineRenderer,
        l = i('BCbF').PolygonRenderer,
        h = i('Zy3/').CompositeRenderer,
        d = i('a7Ha').LineEnd,
        c = i('//lt').PaneCursorType;
      function u(e, t) {
        a.call(this, e, t),
          (this._poligonRenderer = new l()),
          (this._renderer = null);
      }
      inherit(u, a),
        (u.prototype._updateImpl = function () {
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
              u = new h(),
              p = this._source.properties(),
              _ = this._points[0],
              f = this._points[1];
            if (2 === this._points.length) {
              ((g = {}).points = this._points),
                (g.floatPoints = this._floatPoints),
                (g.width = this._model.timeScale().width()),
                (g.height = this._source.priceScale().height()),
                (g.color = p.color.value()),
                (g.linewidth = 1),
                (g.linestyle = CanvasEx.LINESTYLE_SOLID),
                (g.extendleft = !1),
                (g.extendright = !1),
                (g.leftend = d.Normal),
                (g.rightend = d.Normal);
              var v = new s();
              v.setData(g), u.append(v);
            } else if (3 === this._points.length) {
              var g,
                y = f.subtract(_),
                w = new r(y.y, -y.x).normalized().scaled(this._distance),
                m = w.scaled(-1);
              (e = _.add(w)),
                (t = f.add(w)),
                (i = _.add(m)),
                (l = f.add(m)),
                ((g = {}).points = [e, t, l, i]),
                (g.color = p.color.value()),
                (g.linewidth = this._source.properties().linewidth.value()),
                (g.linestyle = CanvasEx.LINESTYLE_SOLID),
                (g.filled = !0),
                (g.backcolor = p.backgroundColor.value()),
                (g.fillBackground = p.fillBackground.value()),
                (g.transparency = p.transparency.value()),
                this._poligonRenderer.setData(g),
                u.append(this._poligonRenderer);
            }
            var x = [];
            x.push(_), this._points.length >= 2 && x.push(f);
            var b = [c.Default, c.Default];
            if (3 === this._points.length) {
              (e.data = 2),
                (i.data = 2),
                (t.data = 2),
                (l.data = 2),
                x.push(e, i, t, l);
              var R = o(_, f);
              b.push(R, R, R, R);
            }
            u.append(this.createLineAnchor({ points: x, pointsCursorType: b })),
              (this._renderer = u);
          }
        }),
        (u.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.RotatedRectanglePaneView = u);
    },
    mJB8: function (e, t, i) {
      e.exports = i.p + '4fafff07d8914dc11f6d335f606ff47c.png';
    },
    mjK7: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'CypherPaneView', function () {
          return n;
        });
      var r = i('mrSG'),
        n = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.c)(t, e),
            (t.prototype._updateBaseData = function () {
              if (this._source.points().length >= 3) {
                var e = this._source.points(),
                  t = e[0],
                  i = e[1],
                  r = e[2];
                this._abRetracement =
                  Math.round(
                    1e3 * Math.abs((r.price - i.price) / (i.price - t.price)),
                  ) / 1e3;
              }
              if (this._source.points().length >= 4) {
                var n = this._source.points(),
                  a = ((t = n[0]), (i = n[1]), n[3]);
                this._bcRetracement =
                  Math.round(
                    1e3 * Math.abs((a.price - t.price) / (i.price - t.price)),
                  ) / 1e3;
              }
              if (this._source.points().length >= 5) {
                var o = this._source.points(),
                  s = ((t = o[0]), (r = o[2]), (a = o[3]), o[4]);
                (this._cdRetracement =
                  Math.round(
                    1e3 * Math.abs((s.price - a.price) / (a.price - r.price)),
                  ) / 1e3),
                  (this._xdRetracement =
                    Math.round(
                      1e3 * Math.abs((s.price - a.price) / (t.price - a.price)),
                    ) / 1e3);
              }
            }),
            t
          );
        })(i('6MfG').Pattern5pointsPaneView);
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
        o = i('zDbI'),
        s = i('//lt'),
        l = i('qgcf'),
        h = i('Zy3/'),
        d = i('vq8G'),
        c = i('TTFo'),
        u = i('VdBB'),
        p = i('aB9a'),
        _ = [s.PaneCursorType.HorizontalResize],
        f = (function (e) {
          function t(t, i, r, n, a, o, s) {
            var h = e.call(this, t, i) || this;
            return (
              (h._textRenderer = new l.TextRenderer()),
              (h._noSelection = !1),
              (h._renderer = null),
              (h._offsetX = r),
              (h._offsetY = n),
              (h._vertAlign = a),
              (h._horzAlign = o),
              (h._forceTextAlign = Boolean(s)),
              (h._noSelection = !1),
              (h._renderer = null),
              h
            );
          }
          return (
            Object(r.c)(t, e),
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
                  s = this._getModel(),
                  l = {
                    text: r.text.value(),
                    color: r.color.value(),
                    fontSize: r.fontsize.value(),
                    boxPadding: r.fontsize.value() / 6,
                    font: o.CHART_FONT_FAMILY,
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
                  (l.highlightBorder = s.selection().isSelected(t)),
                  !t.isFixed() && r.fixedSize && !r.fixedSize.value())
                ) {
                  l.scaleX = s.timeScale().barSpacing() / t.barSpacing();
                  var p = Object(n.ensureNotNull)(i.priceRange()),
                    f = i.height() / p.length();
                  t.isPriceDencityLog() &&
                    !i.isLog() &&
                    (f =
                      i.height() /
                      (Object(c.toLog)(p.maxValue()) -
                        Object(c.toLog)(p.minValue()))),
                    !t.isPriceDencityLog() &&
                      i.isLog() &&
                      (f =
                        i.height() /
                        (Object(c.fromLog)(p.maxValue()) -
                          Object(c.fromLog)(p.minValue())));
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
                    m = w.width,
                    x = w.height;
                  if (l.wordWrapWidth) {
                    var b = new a.Point(y.x + m, y.y + x / 2);
                    (b.data = 0),
                      g.append(
                        this.createLineAnchor({
                          points: [b],
                          pointsCursorType: _,
                        }),
                      );
                  }
                  var R = new a.Point(y.x + m / 2, y.y + x);
                  return (
                    (R.data = 0),
                    g.append(
                      new d.SelectionRenderer({
                        points: [R],
                        bgColors: this._lineAnchorColors([R]),
                        visible: this.areAnchorsVisible(),
                        hittestResult: u.HitTestResult.MOVEPOINT,
                        barSpacing: s.timeScale().barSpacing(),
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
        })(p.LineSourcePaneView);
    },
    'obU/': function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('GEp6').distanceToLine,
        a = i('hfHJ'),
        o = a.rotationMatrix,
        s = a.scalingMatrix,
        l = a.translationMatrix,
        h = a.transformPoint,
        d = i('aB9a').LineSourcePaneView,
        c = i('VdBB').HitTestResult,
        u = i('Zy3/').CompositeRenderer,
        p = i('Tmoa'),
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
              u = t.add(i).scaled(0.5),
              _ = new r(-c.y, c.x);
            (_ = _.normalized()),
              (a = u.add(_.scaled(d))),
              (e.strokeStyle = this._data.color),
              (e.lineWidth = this._data.linewidth);
            var f = c.length(),
              v = c.x / f,
              g = c.y / f,
              y = Math.acos(v);
            g < 0 && (y = -y);
            var w = this._data.points[2],
              m = l(-u.x, -u.y);
            (w = h(m, w)),
              (m = o(-y)),
              (w = h(m, w)),
              (m = s(1, f / (2 * d))),
              (w = h(m, w)).y < 0
                ? (this._data.clockwise = !0)
                : (this._data.clockwise = !1),
              e.save(),
              e.beginPath(),
              e.translate(u.x, u.y),
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
                ((e.fillStyle = p.generateColor(
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
            u = i.subtract(t),
            p = t.add(i).scaled(0.5),
            _ = new r(-u.y, u.x);
          (_ = _.normalized()), (a = p.add(_.scaled(d)));
          var f = u.length(),
            v = u.x / f,
            g = u.y / f,
            y = Math.acos(v);
          g < 0 && (y = -y);
          var w = l(-p.x, -p.y);
          e = h(w, e);
          var m = h(w, this._data.points[2]);
          (w = o(-y)),
            (e = h(w, e)),
            (m = h(w, m)),
            (w = s(1, f / (2 * d))),
            (e = h(w, e)),
            (m = h(w, m));
          var x = e.length();
          return this._additionalPointTest(e, m)
            ? Math.abs(x - 0.5 * f) <= 3
              ? new c(c.MOVEPOINT)
              : this._data.fillBackground &&
                !this._data.noHitTestOnBackground &&
                x <= 0.5 * f
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
            var t = new u();
            t.append(this._ellipseRenderer);
            var i = e.points[0],
              a = e.points[1];
            if (2 === this._points.length)
              return this.addAnchors(t), void (this._renderer = t);
            var o = e.points[2],
              s = n(i, a, o).distance,
              l = a.subtract(i),
              h = i.add(a).scaled(0.5),
              c = new r(-l.y, l.x);
            (c = c.normalized()), (o = h.add(c.scaled(s)));
            var p = h.add(c.scaled(-s)),
              v = new r(i.x, i.y);
            v.data = 0;
            var g = new r(a.x, a.y);
            g.data = 1;
            var y = new r(o.x, o.y);
            y.data = 2;
            var w = new r(p.x, p.y);
            w.data = 3;
            var m = _(v, g),
              x = [f.Default, f.Default, m, m];
            t.append(
              this.createLineAnchor({
                points: [v, g, y, w],
                pointsCursorType: x,
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
        o = i('cjIn').PaneRendererCachedImage,
        s = i('Zy3/').CompositeRenderer,
        l = i('GH0z').PercentageFormatter,
        h = i('zXvd').NumericFormatter,
        d = i('nda6').TimeSpanFormatter,
        c = i('5C6T').PipFormatter,
        u = i('vq8G').SelectionRenderer,
        p = i('pJOz').TrendLineRenderer,
        _ = i('qgcf').TextRenderer,
        f = i('8xAY').LabelSettings,
        v = i('zDbI').CHART_FONT_FAMILY,
        g = i('VdBB').HitTestResult,
        y = i('FVHe').TrendLineStatsCache,
        w = i('c44N').areEqualPaneRenderParams,
        m = i('5/lF').iconsContainer,
        x = i('Ialn'),
        b = x.forceLTRStr,
        R = x.startWithLTR;
      function T(e, t) {
        a.call(this, e, t),
          (this._label = null),
          (this._rendererCache = {}),
          (this._cacheInvalidated = !0),
          (this._percentageFormatter = new l()),
          (this._numericFormatter = new h()),
          (this._pipFormatter = null),
          (this._lastSymbolInfo = null),
          (this._trendRenderer = new p()),
          (this._labelRenderer = new _()),
          (this._renderer = null),
          (this._cache = null),
          (this._cacheDrawParams = null),
          m.onAllIconsReady().subscribe(this, function () {
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
            m.onAllIconsReady().unsubscribeAll(this);
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
                    p = d.showDateTimeRange.value(),
                    _ = d.showDistance.value(),
                    f = d.showPriceRange.value(),
                    v = d.showAngle.value();
                  f ||
                    c ||
                    p ||
                    _ ||
                    v ||
                    ((this._label = null),
                    this._labelData &&
                      ((this._labelData.text = ''),
                      (this._labelData.lines = [])));
                  var y = new s(),
                    w = d.linecolor.value(),
                    m = {};
                  (m.points = this._points),
                    (m.floatPoints = this._floatPoints),
                    (m.width = t.width()),
                    (m.height = e.height()),
                    (m.color = w),
                    (m.linewidth = d.linewidth.value()),
                    (m.linestyle = d.linestyle.value()),
                    (m.extendleft = d.extendLeft.value()),
                    (m.extendright = d.extendRight.value()),
                    (m.leftend = d.leftEnd.value()),
                    (m.rightend = d.rightEnd.value()),
                    this._trendRenderer.setData(m),
                    y.append(this._trendRenderer);
                  var x =
                      ((this.isHoveredSource() || this.isSelectedSource()) &&
                        this.isEditMode()) ||
                      d.alwaysShowStats.value(),
                    b =
                      (this.isHoveredSource() || this.isSelectedSource()) &&
                      d.showMiddlePoint.value();
                  if (x && 2 === this._points.length) {
                    var R = new o(this, 0);
                    y.append(R);
                  }
                  if (
                    (this._middlePoint &&
                      y.append(
                        new u({
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
            n,
            a,
            o,
            s = this._source.points(),
            l = s[0],
            h = s[1],
            u = this._source.properties(),
            p = [];
          if (u.showPriceRange.value() && this._source.priceScale()) {
            var _ = (r = h.price - l.price) / Math.abs(l.price);
            e =
              this._source.ownerSource().formatter().format(r) +
              ' (' +
              this._percentageFormatter.format(100 * _) +
              ')';
            var g = this._model.mainSeries().symbolInfo();
            g &&
              g !== this._lastSymbolInfo &&
              ((this._pipFormatter = new c(
                g.pricescale,
                g.minmov,
                g.type,
                g.minmove2,
              )),
              (this._lastSymbolInfo = g)),
              (e += this._pipFormatter
                ? ', ' + this._pipFormatter.format(r)
                : ''),
              p.push('priceRange');
          }
          var y,
            w = u.showBarsRange.value(),
            m = u.showDateTimeRange.value(),
            x = u.showDistance.value(),
            T = u.showAngle.value();
          if (T || x) {
            var S = this._source.pointToScreenPoint(l)[0];
            (a = this._source.pointToScreenPoint(h)[0].subtract(S)),
              (o = Math.round(1e5 * a.length()) / 1e5);
          }
          if (w || m || x) {
            if (
              ((t = ''),
              w &&
                ((n = h.index - l.index), (t += $.t('{0} bars').format(b(n)))),
              m)
            ) {
              var P = this._model.timeScale().indexToUserTime(l.index),
                L = this._model.timeScale().indexToUserTime(h.index);
              if (P && L) {
                var C = (L.valueOf() - P.valueOf()) / 1e3,
                  M = R(new d().format(C));
                M && (t += w ? ' (' + M + ')' : M);
              }
            }
            x &&
              (t && (t += ', '),
              (t += $.t('distance: {0} px').format(
                b(this._numericFormatter.format(Math.round(o))),
              ))),
              t && p.push('barsRange');
          }
          T &&
            (o > 0 &&
              ((a = a.normalized()), (y = Math.acos(a.x)), a.y > 0 && (y = -y)),
            'number' != typeof y ||
              TradingView.isNaN(y) ||
              ((i = Math.round((180 * y) / Math.PI) + 'º'), p.push('angle')));
          (this._label =
            [b(e), t, i]
              .filter(function (e) {
                return e;
              })
              .join('\n') || null),
            (this._icons = p);
          var I = this._model.isDark(),
            O = I ? f.bgColorDark : f.bgColorLight,
            D = I ? f.textColorDark : f.textColorLight,
            k = {
              points: [this._points[1]],
              text: this._label,
              color: D,
              isDark: I,
              font: v,
              fontSize: f.fontSize,
              lineSpacing: f.lineSpacing,
              backgroundColor: O,
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
            this._points[1].y < this._points[0].y && (k.vertAlign = 'bottom'),
            this._points[1].x < this._points[0].x && (k.horzAlign = 'right'),
            (this._labelData = k),
            k
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
        o = i('qgcf').TextRenderer,
        s = i('Zy3/').CompositeRenderer,
        l = i('//lt').PaneCursorType,
        h = [l.Default, l.Default, l.VerticalResize, l.Default];
      function d(e, t) {
        r.call(this, e, t),
          (this._label = null),
          (this._trendLineRendererPoints12 = new a()),
          (this._trendLineRendererPoints43 = new a()),
          (this._disjointChannelRenderer = new n()),
          (this._p1LabelRenderer = new o()),
          (this._p2LabelRenderer = new o()),
          (this._p3LabelRenderer = new o()),
          (this._p4LabelRenderer = new o()),
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
              var o,
                l = new s(),
                d =
                  ((e = this._points[0]),
                  (t = this._points[1]),
                  this._source.properties()),
                c = this._model,
                u = this._source;
              if (this._points.length >= 3) {
                ((n = this._points[2]).x = t.x), (n.square = !0);
                var p = t.y - e.y;
                if (
                  (((o = e.clone()).y = n.y + p),
                  (o.data = 3),
                  d.fillBackground.value())
                ) {
                  var _ = c.timeScale().width(),
                    f = u.priceScale().height(),
                    v = d.extendLeft.value(),
                    g = d.extendRight.value();
                  this._disjointChannelRenderer.setData({
                    width: _,
                    height: f,
                    extendleft: v,
                    extendright: g,
                    points: [e, t, n, o],
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
                    height: u.priceScale().height(),
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
                m = function (e, t, i, r, n, a) {
                  if (w._source.properties().showPrices.value()) {
                    var o = {
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
                    e.setData(o), l.append(e);
                    o = {
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
                    t.setData(o), l.append(t);
                  }
                };
              if (
                (this._trendLineRendererPoints12.setData(y(e, t)),
                l.append(this._trendLineRendererPoints12),
                m(
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
              this._trendLineRendererPoints43.setData(y(o, n)),
                l.append(this._trendLineRendererPoints43),
                m(
                  this._p3LabelRenderer,
                  this._p4LabelRenderer,
                  n,
                  o,
                  this._price3,
                  this._price4,
                );
              var x = [e, t, n, o];
              this._model.lineBeingCreated() === this._source && x.pop(),
                l.append(
                  this.createLineAnchor({ points: x, pointsCursorType: h }),
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
        o = i('Zy3/').CompositeRenderer,
        s = i('cPgM').ScaledPaneRenderer;
      function l(e) {
        s.call(this), (this._data = e);
      }
      function h(e, t) {
        n.call(this, e, t), (this._renderer = null);
      }
      inherit(l, s),
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
              s = 2 * (Math.max(t.index, i.index) - a),
              h = this._points[0],
              d = this._points[1],
              c = Math.abs(h.x - d.x),
              u = d.y - h.y,
              p = new o(),
              _ = this._source.properties(),
              f = this._model.timeScale();
            if (0 !== s) {
              for (
                var v = f.indexToCoordinate(a), g = [], y = a;
                v > -c;
                y -= s
              )
                (v = f.indexToCoordinate(y)), g.push(v);
              v = v = f.indexToCoordinate(a + s);
              for (y = a + s; v < f.width(); y += s)
                (v = f.indexToCoordinate(y)), g.push(v);
              for (var w = 0; w < g.length; w++) {
                var m = new l({
                  point: new r(g[w], h.y),
                  width: c,
                  height: u,
                  color: _.linecolor.value(),
                  linewidth: _.linewidth.value(),
                  linestyle: _.linestyle.value(),
                });
                p.append(m);
              }
              this.addAnchors(p), (this._renderer = p);
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
        o = i('VdBB').HitTestResult,
        s = i('cPgM').ScaledPaneRenderer;
      function l(e, t) {
        s.call(this), (this._data = e), (this._adapter = t);
      }
      function h(e, t) {
        n.call(this, e, t);
      }
      inherit(l, s),
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
              o = i + a.fontHeight(this._adapter.getFont()) / 2;
            e.fillText(r, n, o - 1), e.restore();
          }
        }),
        (l.prototype._drawImpl = function (e) {
          var t = Math.round(this._data.points[0].x + 0.5),
            i = Math.round(this._data.points[0].y);
          this._drawArrow(e, t, i);
          var r = this._textWidth(e);
          if (0 !== r) {
            var n = this._adapter.getArrowHeight(),
              o = this._adapter.getArrowSpacing(),
              s = a.fontHeight(this._adapter.getFont()),
              l =
                'buy' === this._adapter.getDirection()
                  ? i + n + o
                  : i - n - o - s;
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
            var s = this._adapter.getTooltip();
            const e = () => {
              TradingView.TradingWidget &&
                TradingView.TradingWidget.journalDialog();
            };
            return new o(o.CUSTOM, {
              clickHandler: e,
              tapHandler: e,
              tooltip:
                '' !== s
                  ? { text: s, rect: { x: r, y: t, w: 2, h: i - t } }
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
            o = i._model.timeScale(),
            s = this._source._model
              .paneForSource(this._source)
              .executionsPositionController()
              .getXYCoordinate(a, o, n[0].index);
          if (!isFinite(s.y) || s.y < 0 || s.y > e || s.x < 0)
            return (this._renderer = null), null;
          var h = { points: [new r(s.x, s.y)] };
          return (this._renderer = new l(h, a)), this._renderer;
        }),
        (t.ExecutionPaneView = h);
    },
    'u+oH': function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('pJOz').TrendLineRenderer,
        o = i('qgcf').TextRenderer,
        s = i('IjC5').RectangleRenderer,
        l = i('VdBB').HitTestResult,
        h = i('Zy3/').CompositeRenderer,
        d = i('GH0z').PercentageFormatter,
        c = i('zXvd').NumericFormatter,
        u = i('5C6T').PipFormatter,
        p = i('Tmoa'),
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
          (this._fullStopBgRenderer = new s(
            new l(l.MOVEPOINT),
            new l(l.MOVEPOINT),
          )),
          (this._stopBgRenderer = new s(
            new l(l.MOVEPOINT),
            new l(l.MOVEPOINT),
          )),
          (this._fullTargetBgRenderer = new s(
            new l(l.MOVEPOINT),
            new l(l.MOVEPOINT),
          )),
          (this._targetBgRenderer = new s(
            new l(l.MOVEPOINT),
            new l(l.MOVEPOINT),
          )),
          (this._stopLabelRenderer = new o()),
          (this._middleLabelRenderer = new o()),
          (this._profitLabelRenderer = new o()),
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
                o = this._source.profitPrice();
              this._pl =
                this._source.points().length > 1
                  ? this._source.calculatePL(i.closePrice)
                  : 0;
              var s = this._source.ownerSource().firstValue();
              if (
                ((this._entryLevel = this._points[f.Entry].y),
                (this._stopLevel = t.priceToCoordinate(a, s)),
                (this._profitLevel = t.priceToCoordinate(o, s)),
                (this._closeLevel = t.priceToCoordinate(i.closePrice, s)),
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
                  m = this._points[f.ActualClose]
                    ? this._points[f.ActualClose].x
                    : this._points[f.Close].x,
                  x = this._points[f.Close].x,
                  b = new r(g, this._entryLevel),
                  R = new r(x, this._stopLevel);
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
                    (R = new r(m, this._closeLevel));
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
                  (R = new r(x, this._profitLevel));
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
                    (R = new r(m, this._closeLevel));
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
                var M = function (e, t, i, r, n, a, o) {
                    if (d.isLabelVisible()) {
                      var s = {};
                      (s.points = [t]),
                        (s.text = i),
                        (s.color = c.textcolor.value()),
                        (s.font = c.font.value()),
                        (s.offsetX = 3),
                        (s.offsetY = a),
                        (s.vertAlign = n),
                        (s.horzAlign = 'center'),
                        (s.backgroundRoundRect = 4),
                        (s.backgroundColor = p.resetTransparency(r)),
                        (s.fontsize = c.fontsize.value()),
                        (s.backgroundHorzInflate = 4),
                        o && (s.borderColor = o),
                        e.setData(s),
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
                  j = Math.abs(I - D) / Math.abs(I - O);
                (b = new r(g, this._points[f.Entry].y)),
                  (R = new r(x, this._points[f.Entry].y));
                L(this._entryLineRenderer, b, R);
                var z = new r((g + x) / 2, Math.round(this._points[0].y) + 0.5),
                  E = '',
                  V = '',
                  H = this._numericFormatter.format(Math.round(100 * j) / 100);
                if (
                  (this._points[1] &&
                    void 0 !== this._pl &&
                    (V = this._source
                      .ownerSource()
                      .formatter()
                      .format(this._pl)),
                  c.compact.value())
                )
                  (E += V ? V + ' ~ ' : ''),
                    (E += c.qty.value() + '\n'),
                    (E += H);
                else {
                  var W = this._isClosed
                    ? this.i18nCache.closed
                    : this.i18nCache.open;
                  (E += V ? this.i18nCache.pnl.format(W, V) + ', ' : ''),
                    (E += this.i18nCache.qty.format(c.qty.value()) + '\n'),
                    (E += this.i18nCache.ratio.format(H) + ' ');
                }
                var Y = c.linecolor.value();
                this._pl < 0
                  ? (Y = c.stopBackground.value())
                  : this._pl > 0 && (Y = c.profitBackground.value()),
                  M(this._middleLabelRenderer, z, E, Y, 'middle', 0, 'white');
                (b = new r(g, this._stopLevel)),
                  (R = new r(x, this._stopLevel));
                L(this._stopLineRenderer, b, R, c.stopBackground.value());
                var F = this._model.mainSeries().symbolInfo();
                F &&
                  F !== this._lastSymbolInfo &&
                  ((this._pipFormatter = new u(
                    F.pricescale,
                    F.minmov,
                    F.type,
                    F.minmove2,
                  )),
                  (this._lastSymbolInfo = F));
                (z = new r((g + x) / 2, this._stopLevel)), (E = '');
                var U = this._source.ownerSource().formatter().format(k),
                  Z = this._percentageFormatter.format(B);
                (E = c.compact.value()
                  ? U + ' (' + Z + ') ' + c.amountStop.value()
                  : this.i18nCache.stop.format(
                      v(this._source.ownerSource().formatter().format(k)),
                      v(this._percentageFormatter.format(B)),
                      this._pipFormatter ? v(this._pipFormatter.format(k)) : '',
                      v(c.amountStop.value()),
                    )),
                  M(
                    this._stopLabelRenderer,
                    z,
                    E,
                    c.stopBackground.value(),
                    I < O ? 'bottom' : 'top',
                    0,
                  );
                (b = new r(g, this._profitLevel)),
                  (R = new r(x, this._profitLevel));
                L(this._targetLineRenderer, b, R, c.profitBackground.value());
                (z = new r((g + x) / 2, this._profitLevel)),
                  (E = ''),
                  (U = this._source.ownerSource().formatter().format(N)),
                  (Z = this._percentageFormatter.format(A));
                (E = c.compact.value()
                  ? U + ' (' + Z + ') ' + c.amountTarget.value()
                  : this.i18nCache.target.format(
                      v(this._source.ownerSource().formatter().format(N)),
                      v(this._percentageFormatter.format(A)),
                      this._pipFormatter ? v(this._pipFormatter.format(N)) : '',
                      v(c.amountTarget.value()),
                    )),
                  M(
                    this._profitLabelRenderer,
                    z,
                    E,
                    c.profitBackground.value(),
                    I < O ? 'top' : 'bottom',
                    0,
                  );
                var G = this._points[0].clone();
                G.data = 0;
                var q = new r(g, this._stopLevel);
                (q.data = 2), (q.square = !0);
                var Q = new r(g, this._profitLevel);
                (Q.data = 3), (Q.square = !0);
                var X = new r(x, G.y);
                (X.data = 1), (X.square = !0);
                var J = { points: [G, X, q, Q], pointsCursorType: y };
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
    uRW3: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'HighlighterPaneView', function () {
          return a;
        });
      var r = i('mrSG'),
        n = i('8Uy/'),
        a = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.c)(t, e),
            (t.prototype._createPolygonRendererData = function () {
              var e = this._source.properties().childs();
              return {
                points: this._points,
                color: e.linecolor.value(),
                linewidth: 20,
                backcolor: 'rgba(0, 0, 0, 0)',
                fillBackground: !1,
                linestyle: n.LINESTYLE_SOLID,
                linecap: 'round',
                linejoin: 'round',
                filled: !1,
                transparency: e.transparency.value(),
              };
            }),
            t
          );
        })(i('hzaj').a);
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
        o = i('f6yo'),
        s = i('GEp6'),
        l = i('hBTJ'),
        h = i('8Uy/'),
        d = i('VdBB'),
        c = i('NN6M'),
        u = i('Tmoa'),
        p = i('cPgM'),
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
                  o = t[3];
                if (
                  Object(a.equalPoints)(i, r) ||
                  Object(a.equalPoints)(n, o) ||
                  (Object(s.distanceToLine)(i, r, n).distance < 1e-6 &&
                    Object(s.distanceToLine)(i, r, o).distance < 1e-6)
                )
                  this._selectedRenderer = null;
                else
                  null !==
                  Object(l.intersectLines)(
                    Object(a.lineThroughPoints)(i, r),
                    Object(a.lineThroughPoints)(n, o),
                  )
                    ? (this._disjointChannelIntersectionRenderer.setData(e),
                      (this._selectedRenderer = this._disjointChannelIntersectionRenderer))
                    : (this._parallelChannelRenderer.setData({
                        extendleft: e.extendleft,
                        extendright: e.extendright,
                        points: [i, r, o, n],
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
            Object(r.c)(t, e),
            (t.prototype.setData = function (e) {
              this._data = e;
            }),
            (t.prototype.hitTest = function (e, t) {
              if (null === this._data || !this._data.hittestOnBackground)
                return null;
              for (var i = 0, r = this._visiblePolygons(t); i < r.length; i++) {
                var n = r[i];
                if (Object(o.pointInPolygon)(e, n))
                  return new d.HitTestResult(
                    d.HitTestResult.MOVEPOINT_BACKGROUND,
                  );
              }
              return null;
            }),
            (t.prototype._drawImpl = function (e, t) {
              if (!(null === this._data || this._data.points.length < 4)) {
                e.fillStyle = Object(u.generateColor)(
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
                o = i[1],
                s = i[2],
                h = i[3];
              if (e.cssWidth <= 0 || e.cssHeight <= 0) return [];
              var d = Object(l.intersectLines)(
                Object(a.lineThroughPoints)(r, o),
                Object(a.lineThroughPoints)(s, h),
              );
              if (null === d) return [];
              var c = [
                  new a.Point(0, 0),
                  new a.Point(e.cssWidth, 0),
                  new a.Point(e.cssWidth, e.cssHeight),
                  new a.Point(0, e.cssHeight),
                ],
                u = [],
                p = c,
                _ = r.subtract(o).add(d),
                f = h.subtract(s).add(d);
              (p = v(p, d, _, [f, f])),
                null !== (p = v((p = y(p, t)), f, d, [_, _])) && u.push(p);
              p = c;
              var g = o.subtract(r).add(d),
                w = s.subtract(h).add(d);
              return (
                (p = v(p, d, g, [w, w])),
                null !== (p = v((p = y(p, t)), w, d, [g, g])) && u.push(p),
                u
              );
            }),
            t
          );
        })(p.ScaledPaneRenderer);
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
        o = i('pJOz'),
        s = i('Zy3/'),
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
            Object(r.c)(t, e),
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
                var o = this._getPoints(),
                  l = new s.CompositeRenderer();
                if (o.length < 2)
                  return this.addAnchors(l), void (this._renderer = l);
                var h = o[0],
                  d = 3 === o.length ? o[2] : o[1],
                  c = d.x - h.x,
                  u = d.y - h.y,
                  p = h,
                  _ = d,
                  f = this._getModel(),
                  v = {
                    barsCoordsRange: c,
                    priceCoordsRange: u,
                    startPoint: p,
                    endPoint: _,
                    p1: h,
                    p2: d,
                  };
                this._prepareLevels(l, v),
                  this._prepareFanLines(l, v),
                  this._prepareArcs(l, v);
                var g = [h, o[1]];
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
                this._verticalLevelsRenderers.push(new o.TrendLineRenderer()),
                  this._horizontalLevelsRenderers.push(
                    new o.TrendLineRenderer(),
                  );
              var r = e.fanLinesCount();
              for (i = 0; i < r; i++)
                this._fanRenderers.push(new o.TrendLineRenderer());
              var n = e.arcsCount();
              for (i = 0; i < n; i++) this._arcRenderers.push(new d.a());
            }),
            (t.prototype._prepareLevels = function (e, t) {
              for (
                var i = t.startPoint,
                  r = t.endPoint,
                  a = t.barsCoordsRange,
                  o = t.priceCoordsRange,
                  s = 0,
                  d = this._getSource().levels();
                s < d.length;
                s++
              ) {
                var c = d[s];
                if (c.visible) {
                  var u = c.index / 5,
                    p = i.x + u * a,
                    _ = {
                      points: [new n.Point(p, i.y), new n.Point(p, r.y)],
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
                  var v = i.y + u * o,
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
                  o = t.barsCoordsRange,
                  s = t.priceCoordsRange,
                  d = 0,
                  c = this._getSource().fanLines();
                d < c.length;
                d++
              ) {
                var u = c[d];
                if (u.visible) {
                  var p = u.x,
                    _ = u.y,
                    f = void 0,
                    v = void 0;
                  if (p > _) {
                    f = a.x;
                    var g = _ / p;
                    v = r.y + g * s;
                  } else {
                    v = a.y;
                    g = p / _;
                    f = r.x + g * o;
                  }
                  var y = {
                      points: [i, new n.Point(f, v)],
                      color: u.color,
                      linewidth: u.width,
                      linestyle: h.LINESTYLE_SOLID,
                      extendleft: !1,
                      extendright: !1,
                      leftend: l.LineEnd.Normal,
                      rightend: l.LineEnd.Normal,
                    },
                    w = this._fanRenderers[u.index];
                  w.setData(y), e.append(w);
                }
              }
            }),
            (t.prototype._prepareArcs = function (e, t) {
              for (
                var i = t.p1,
                  r = t.startPoint,
                  a = t.endPoint,
                  o = t.barsCoordsRange,
                  s = t.priceCoordsRange,
                  l = i,
                  h = this._getSource(),
                  d = h.isArcsBackgroundFilled(),
                  c = h.arcsBackgroundTransparency(),
                  u = 0,
                  p = h.arcs();
                u < p.length;
                u++
              ) {
                var _ = p[u];
                if (_.visible) {
                  var f = _.x / 5,
                    v = _.y / 5,
                    g = r.x + f * o,
                    y = r.y + v * s,
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
                    m = this._arcRenderers[_.index];
                  m.setData(w), e.append(m), (l = w.point);
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
        o = i('qgcf').TextRenderer,
        s = i('IjC5').RectangleRenderer,
        l = i('pJOz').TrendLineRenderer,
        h = i('VdBB').HitTestResult,
        d = i('Zy3/').CompositeRenderer,
        c = i('a7Ha').LineEnd;
      function u(e, t) {
        n.call(this, e, t),
          (this._levels = []),
          (this._trendRenderer = new l()),
          (this._renderer = null);
      }
      inherit(u, n),
        (u.prototype._updateImpl = function () {
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
              (y = this._source.points()[1]);
            var t = this._source.properties(),
              i = this._source.points()[0].index;
            if (null !== this._model.timeScale().visibleBarsStrictRange()) {
              this._levels = [];
              for (var l = y ? y.index - e.index : 1, u = 1; u <= 11; u++) {
                var p = t['level' + u];
                if (p.visible.value()) {
                  var _ = Math.round(i + p.coeff.value() * l),
                    f = {
                      index: u,
                      x: this._model.timeScale().indexToCoordinate(_),
                      color: p.color.value(),
                      width: p.linewidth.value(),
                      style: p.linestyle.value(),
                    };
                  t.showLabels.value() &&
                    ((f.text = p.coeff.value()),
                    (f.y = this._source.priceScale().height())),
                    this._levels.push(f);
                }
              }
              var v = new d();
              if ((t = this._source.properties()).fillBackground.value())
                for (u = 1; u < this._levels.length; u++) {
                  var g = this._levels[u - 1],
                    y =
                      ((e = new r(this._levels[u].x, 0)),
                      new r(g.x, this._source.priceScale().height())),
                    w = {};
                  (w.points = [e, y]),
                    (w.color = this._levels[u].color),
                    (w.linewidth = 0),
                    (w.backcolor = this._levels[u].color),
                    (w.fillBackground = !0),
                    (w.transparency = t.transparency.value()),
                    (w.extendLeft = !1),
                    (w.extendRight = !1),
                    (x = new s(void 0, void 0, !0)).setData(w),
                    v.append(x);
                }
              for (u = 0; u < this._levels.length; u++) {
                var m = {};
                (m.x = this._levels[u].x),
                  (m.color = this._levels[u].color),
                  (m.linewidth = this._levels[u].width),
                  (m.linestyle = this._levels[u].style);
                var x,
                  b = new h(h.MOVEPOINT, null, this._levels[u].index);
                if (
                  ((x = new a()).setData(m),
                  x.setHitTest(b),
                  v.append(x),
                  void 0 !== this._levels[u].text)
                ) {
                  var R,
                    T = t.horzLabelsAlign.value();
                  switch (
                    ((T =
                      'left' === T
                        ? 'right'
                        : 'right' === T
                        ? 'left'
                        : 'center'),
                    t.vertLabelsAlign.value())
                  ) {
                    case 'top':
                      R = new r(this._levels[u].x, 0);
                      break;
                    case 'middle':
                      R = new r(this._levels[u].x, 0.5 * this._levels[u].y);
                      break;
                    case 'bottom':
                      R = new r(this._levels[u].x, this._levels[u].y);
                  }
                  var S = {
                    points: [R],
                    text: '' + this._levels[u].text,
                    color: m.color,
                    vertAlign: t.vertLabelsAlign.value(),
                    horzAlign: T,
                    font: t.font.value(),
                    offsetX: 2,
                    offsetY: 0,
                    fontsize: 12,
                  };
                  v.append(new o(S));
                }
              }
              if (2 === this._points.length) {
                var P = {
                  points: [this._points[0], this._points[1]],
                  color: t.trendline.color.value(),
                  linewidth: t.trendline.linewidth.value(),
                  linestyle: t.trendline.linestyle.value(),
                  extendleft: !1,
                  extendright: !1,
                  leftend: c.Normal,
                  rightend: c.Normal,
                };
                this._trendRenderer.setData(P), v.append(this._trendRenderer);
              }
              2 === this._source.points().length
                ? v.append(this.createLineAnchor({ points: this._points }))
                : this._points.length > 0 &&
                  v.append(
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
                (this._renderer = v);
            }
          }
        }),
        (u.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.FibTimeZonePaneView = u);
    },
    xiOp: function (e, t, i) {
      'use strict';
      i.r(t);
      var r = i('mrSG'),
        n = i('aO4+'),
        a = i('//lt'),
        o = i('Zy3/'),
        s = i('f6yo'),
        l = i('VdBB'),
        h = (function (e) {
          function t(t) {
            var i = e.call(this) || this;
            return (i._data = t), i;
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.hitTest = function (e) {
              if (!this._data) return null;
              var t = this._data,
                i = this._data.cssWidth / 2,
                r = this._data.cssHeight / 2,
                a = new n.Point(t.point.x - i, t.point.y - r),
                o = new n.Point(t.point.x + i, t.point.y + r);
              return Object(s.pointInBox)(e, Object(n.box)(a, o))
                ? new l.HitTestResult(l.HitTestResult.MOVEPOINT)
                : null;
            }),
            (t.prototype.setData = function (e) {
              this._data = e;
            }),
            (t.prototype._drawImpl = function (e) {
              if (this._data) {
                e.globalAlpha = this._data.transparency;
                var t = this._data.cssWidth / 2,
                  i = this._data.cssHeight / 2;
                Math.abs(this._data.angle) < 1e-4
                  ? e.drawImage(
                      this._data.img,
                      this._data.point.x - t,
                      this._data.point.y - i,
                      this._data.cssWidth,
                      this._data.cssHeight,
                    )
                  : (e.translate(
                      this._data.point.x - t,
                      this._data.point.y - i,
                    ),
                    e.rotate(this._data.angle),
                    e.drawImage(
                      this._data.img,
                      0,
                      0,
                      this._data.cssWidth,
                      this._data.cssHeight,
                    ));
              }
            }),
            t
          );
        })(i('cPgM').ScaledPaneRenderer),
        d = i('aB9a');
      i.d(t, 'ImagePaneView', function () {
        return c;
      });
      var c = (function (e) {
        function t(t, i) {
          var r = e.call(this, t, i) || this;
          return (r._imageRenderer = new h()), r;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.renderer = function (e, t) {
            if ((this._invalidated && this._updateImpl(), !this._points.length))
              return null;
            var i = new o.CompositeRenderer();
            return i.append(this._imageRenderer), this._addAnchors(i), i;
          }),
          (t.prototype._updateImpl = function () {
            e.prototype._updateImpl.call(this);
            var t = this._points[0],
              i = this._source.properties();
            this._imageRenderer.setData({
              point: t,
              img: this._source.image(),
              cssWidth: this._source.cssWidth(),
              cssHeight: this._source.cssHeight(),
              angle: 0,
              transparency: i.child('transparency').value(),
            });
          }),
          (t.prototype._addAnchors = function (e) {
            var t = this._calculateBox(),
              i = new n.Point(t.min.x, t.min.y);
            i.data = 0;
            var r = new n.Point(t.max.x, t.min.y);
            r.data = 1;
            var o = new n.Point(t.min.x, t.max.y);
            o.data = 2;
            var s = new n.Point(t.max.x, t.max.y);
            s.data = 3;
            var l = [
              a.PaneCursorType.DiagonalNwSeResize,
              a.PaneCursorType.DiagonalNeSwResize,
              a.PaneCursorType.DiagonalNeSwResize,
              a.PaneCursorType.DiagonalNwSeResize,
            ];
            e.append(
              this.createLineAnchor({
                points: [i, r, o, s],
                pointsCursorType: l,
              }),
            );
          }),
          (t.prototype._calculateBox = function () {
            var e = this._source.cssWidth() / 2,
              t = this._source.cssHeight() / 2,
              i = this._points[0],
              r = new n.Point(i.x - e + 1, i.y - t + 1),
              a = new n.Point(i.x + e - 1, i.y + t - 1);
            return Object(n.box)(r, a);
          }),
          t
        );
      })(d.LineSourcePaneView);
    },
    xp9B: function (e, t, i) {
      'use strict';
      var r = i('aO4+').Point,
        n = i('aB9a').LineSourcePaneView,
        a = i('2trc').ChannelRenderer,
        o = i('qgcf').TextRenderer,
        s = i('pJOz').TrendLineRenderer,
        l = i('VdBB').HitTestResult,
        h = i('Zy3/').CompositeRenderer,
        d = i('zXvd').NumericFormatter,
        c = i('a7Ha').LineEnd;
      function u(e, t) {
        n.call(this, e, t),
          (this._numericFormatter = new d()),
          (this._renderer = null);
      }
      inherit(u, n),
        (u.prototype._updateImpl = function () {
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
              var u = d ? t.price - e.price : e.price - t.price,
                p = d ? e.price : t.price,
                _ = this._source.ownerSource().firstValue(),
                f = 1;
              f <= 7;
              f++
            ) {
              if ((b = i['hlevel' + f]).visible.value()) {
                var v = b.coeff.value(),
                  g = b.color.value(),
                  y = p + v * u,
                  w = this._source.priceScale().priceToCoordinate(y, _);
                this._hlevels.push({ coeff: v, color: g, y: w, index: f });
              }
            }
            this._vlevels = [];
            var m = d ? t.index - e.index : e.index - t.index,
              x = d ? e.index : t.index;
            for (f = 1; f <= 7; f++) {
              var b;
              if ((b = i['vlevel' + f]).visible.value()) {
                (v = b.coeff.value()), (g = b.color.value());
                var R = Math.round(x + v * m),
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
                  (F = new s()).setData(k), S.append(F);
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
                  S.append(new o(B));
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
                  S.append(new o(N));
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
                  (F = new s()).setData(k), S.append(F);
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
                  S.append(new o(A));
                }
                if (i.showBottomLabels.value()) {
                  var j = {
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
                  S.append(new o(j));
                }
              }
              var z = i.fillBackground.value(),
                E = i.transparency.value();
              for (
                e = this._floatPoints[0], t = this._floatPoints[1], f = 0;
                f < this._hlevels.length;
                f++
              ) {
                var V = new r(t.x, this._hlevels[f].y);
                if (f > 0 && z) {
                  var H = new r(t.x, this._hlevels[f - 1].y);
                  ((Y = {}).width = this._model.timeScale().width()),
                    (Y.height = this._source.priceScale().height()),
                    (Y.p1 = e),
                    (Y.p2 = V),
                    (Y.p3 = e),
                    (Y.p4 = H),
                    (Y.color = this._hlevels[f].color),
                    (Y.transparency = E),
                    (Y.hittestOnBackground = !0),
                    (F = new a()).setData(Y),
                    S.append(F);
                }
                k = {
                  points: [e, V],
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
                (F = new s()).setData(k),
                  F.setHitTest(
                    new l(l.MOVEPOINT, null, {
                      type: 'h',
                      index: this._hlevels[f].index,
                    }),
                  ),
                  S.append(F);
              }
              for (f = 0; f < this._vlevels.length; f++) {
                var W = new r(this._vlevels[f].x, t.y);
                if (f > 0 && z) {
                  var Y;
                  H = new r(this._vlevels[f - 1].x, t.y);
                  ((Y = {}).width = this._model.timeScale().width()),
                    (Y.height = this._source.priceScale().height()),
                    (Y.p1 = e),
                    (Y.p2 = W),
                    (Y.p3 = e),
                    (Y.p4 = H),
                    (Y.color = this._vlevels[f].color),
                    (Y.transparency = E),
                    (Y.hittestOnBackground = !0),
                    (F = new a()).setData(Y),
                    S.append(F);
                }
                var F;
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
                (F = new s()).setData(k),
                  F.setHitTest(
                    new l(l.MOVEPOINT, null, {
                      type: 'v',
                      index: this._vlevels[f].index,
                    }),
                  ),
                  S.append(F);
              }
              this.addAnchors(S), (this._renderer = S);
            }
          }
        }),
        (u.prototype.renderer = function (e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }),
        (t.FibSpeedResistanceFanPaneView = u);
    },
    'y/56': function (e, t, i) {
      'use strict';
      i.r(t);
      var r = i('mrSG'),
        n = i('aB9a'),
        a = i('Zy3/'),
        o = i('vq8G'),
        s = i('VdBB'),
        l = i('f6yo'),
        h = i('jFln'),
        d = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t._data = null), t;
          }
          return (
            Object(r.c)(t, e),
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
                : new s.HitTestResult(s.HitTestResult.MOVEPOINT);
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
          Object(r.c)(t, e),
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
                new o.SelectionRenderer({
                  points: i,
                  bgColors: this._lineAnchorColors(i),
                  visible: this.areAnchorsVisible(),
                  barSpacing: t.timeScale().barSpacing(),
                  hittestResult: s.HitTestResult.MOVEPOINT,
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
