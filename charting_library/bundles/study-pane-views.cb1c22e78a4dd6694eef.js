(window.webpackJsonp = window.webpackJsonp || []).push([
  ['study-pane-views'],
  {
    psYU: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'VertLinePaneView', function () {
          return d;
        });
      var r = i('Eyy1'),
        n = i('VdBB'),
        a = i('972a'),
        s = i('Zy3/'),
        o = i('z+cS'),
        d = (function () {
          function e(e, t, i) {
            (this._data = []),
              (this._invalidated = !0),
              (this._provider = e),
              (this._model = t),
              (this._hitTestResult =
                void 0 !== i
                  ? new n.HitTestResult(n.HitTestResult.CUSTOM, i)
                  : new n.HitTestResult(n.HitTestResult.REGULAR));
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
                  n = new o.VerticalLineRenderer();
                n.setData(r), n.setHitTest(this._hitTestResult), e.append(n);
              }
              return e;
            }),
            (e.prototype._updateViewInternal = function () {
              var e = this;
              this._data = [];
              var t = this._provider.priceScale(),
                i = this._model.timeScale();
              if (t && !t.isEmpty() && !i.isEmpty()) {
                var n = this._provider.graphicsInfo().vertlines,
                  s = this._provider.graphics().vertlines();
                if (0 !== s.size && void 0 !== n) {
                  var o = this._model.timeScale().visibleBarsStrictRange();
                  if (null !== o) {
                    var d = this._provider.firstValue();
                    if (null !== d) {
                      var l = o.firstBar(),
                        p = o.lastBar();
                      s.forEach(function (s, o) {
                        var c = e._provider.properties().graphics.vertlines[o];
                        if (c.visible.value()) {
                          var v = 0;
                          switch (Object(r.ensureDefined)(n[o]).halign) {
                            case a.HAlign.Left:
                              v = -i.barSpacing() / 2;
                              break;
                            case a.HAlign.Right:
                              v = i.barSpacing() / 2;
                          }
                          s.forEach(function (n) {
                            var a = n.index;
                            a < l ||
                              p < a ||
                              e._data.push({
                                x: i.indexToCoordinate(a) + v,
                                top: n.extendTop
                                  ? void 0
                                  : t.priceToCoordinate(
                                      Object(r.ensureDefined)(n.endPrice),
                                      d,
                                    ),
                                bottom: n.extendBottom
                                  ? void 0
                                  : t.priceToCoordinate(
                                      Object(r.ensureDefined)(n.startPrice),
                                      d,
                                    ),
                                color: c.color.value(),
                                linewidth: c.width.value(),
                                linestyle: c.style.value(),
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
