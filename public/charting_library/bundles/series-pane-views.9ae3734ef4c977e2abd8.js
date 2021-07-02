(window.webpackJsonp = window.webpackJsonp || []).push([
  ['series-pane-views'],
  {
    '+weX': function (t, e, i) {
      'use strict';
      var a = i('aO4+').Point,
        s = i('Zy3/').CompositeRenderer,
        n = i('gQ5K').DateFormatter,
        r = i('4kQX').TimeFormatter,
        o = i('ikwP').calcTextHorizontalShift,
        l = i('Ialn').isRtl,
        d = i('zDbI').CHART_FONT_FAMILY,
        h = i('cPgM').ScaledPaneRenderer;
      function _() {
        h.call(this), (this._data = null);
      }
      function u(t, e) {
        (this._gotoDateResult = e),
          (this._series = t),
          (this._invalidated = !0),
          (this._renderer = new _());
      }
      inherit(_, h),
        (_.prototype.setData = function (t) {
          this._data = t;
        }),
        (_.prototype.hitTest = function () {
          return null;
        }),
        (_.prototype._drawImpl = function (t) {
          if (null !== this._data) {
            var e = Math.round(4.5),
              i = 0;
            t.save(), t.setFont('12px ' + d);
            var a = $.t('Last available bar');
            if (this._data.eod) i = t.measureText(a).width;
            else {
              var s = t.measureText(this._data.dateString || '').width,
                n = t.measureText(this._data.timeString || '').width;
              i = Math.max(s, n);
            }
            var r = this._data.timeString ? 2 : 1,
              h = document
                .querySelector('html')
                .classList.contains('theme-dark');
            (t.fillStyle = h ? '#50535E' : '#2A2E39'),
              t.translate(this._data.point.x + 0.5, this._data.point.y + 0.5);
            var _ = Math.round(-i / 2) - 8,
              u = -17 * r - 8 - 4 - 5,
              p = Math.round(_ + i + 16);
            if (
              (t.beginPath(),
              t.moveTo(_ + 2, u),
              t.lineTo(p - 2, u),
              t.arcTo(p, u, p, u + 2, 2),
              t.lineTo(p, -11),
              t.arcTo(p, -9, p - 2, -9, 2),
              t.lineTo(6, -9),
              t.lineTo(0, -5),
              t.lineTo(-6, -9),
              t.lineTo(_ + 2, -9),
              t.arcTo(_, -9, _, -11, 2),
              t.lineTo(_, u + 2),
              t.arcTo(_, u, _ + 2, u, 2),
              t.fill(),
              (t.fillStyle = '#F0F3FA'),
              (t.textBaseline = 'middle'),
              (t.textAlign = l() ? 'right' : 'left'),
              this._data.eod)
            ) {
              var m = o(t, i);
              t.fillText(a, _ + 8 + m, u + (-9 - u) / 2);
            } else {
              var c = _ + 8 + (i - s) / 2,
                f = o(t, s);
              if (
                (t.fillText(this._data.dateString, c + f, u + e + 8),
                this._data.timeString)
              ) {
                var T = o(t, n),
                  v = _ + 8 + (i - n) / 2;
                t.fillText(this._data.timeString, v + T, u + 17 * r - e);
              }
            }
            t.restore();
          }
        }),
        (u.prototype.update = function () {
          this._invalidated = !0;
        }),
        (u.prototype.updateImpl = function () {
          delete this._point,
            delete this._dateString,
            delete this._timeString,
            delete this._eod;
          var t = this._series
              .model()
              .timeScale()
              .timePointToIndex(this._gotoDateResult.timestamp),
            e = this._series.bars(),
            i = null;
          if (
            (t < e.firstIndex() && null !== e.first()
              ? ((t = e.firstIndex()), (i = e.first().value))
              : t > e.lastIndex() && null !== e.last()
              ? ((t = e.lastIndex()), (i = e.last().value))
              : (i = e.valueAt(t)),
            null !== i)
          ) {
            var s = this._series.firstValue();
            if (null != s) {
              var o = this._series
                  .priceScale()
                  .priceToCoordinate(i[TradingView.HIGH_PLOT], s),
                l = this._series.model().timeScale().indexToCoordinate(t);
              if (((this._point = new a(l, o)), this._gotoDateResult.eod))
                this._eod = !0;
              else {
                var d = this._series.model().timeScale().indexToUserTime(t);
                (this._dateString = new n().format(d)),
                  this._series.isDWM() ||
                    (this._timeString = new r().format(d));
              }
            }
          }
        }),
        (u.prototype.renderer = function () {
          return (
            this._invalidated && (this.updateImpl(), (this._invalidated = !1)),
            this._point
              ? (this._renderer.setData({
                  point: this._point,
                  dateString: this._dateString,
                  timeString: this._timeString,
                  eod: this._eod,
                }),
                this._renderer)
              : new s()
          );
        }),
        (t.exports.GotoDateView = u);
    },
  },
]);
