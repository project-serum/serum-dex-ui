(window.webpackJsonp = window.webpackJsonp || []).push([
  ['series-pane-views'],
  {
    '+weX': function (t, e, i) {
      'use strict';
      var a = i('aO4+').Point,
        s = i('Zy3/').CompositeRenderer,
        n = i('gQ5K').DateFormatter,
        r = i('4kQX').TimeFormatter,
        l = i('ikwP').calcTextHorizontalShift,
        o = i('Ialn').isRtl,
        d = i('zDbI').CHART_FONT_FAMILY,
        h = i('cPgM').ScaledPaneRenderer;
      function _() {
        h.call(this), (this._data = null);
      }
      function p(t, e) {
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
            var e = 0;
            t.save(), t.setFont('13px ' + d);
            var i = $.t('Last available bar');
            if (this._data.eod) e = t.measureText(i).width;
            else {
              var a = t.measureText(this._data.dateString || '').width,
                s = t.measureText(this._data.timeString || '').width;
              e = Math.max(a, s);
            }
            var n = this._data.timeString ? 2 : 1;
            (t.fillStyle = this._data.eod ? '#FF4040' : '#58A3CD'),
              t.translate(this._data.point.x + 0.5, this._data.point.y + 0.5);
            var r = Math.round(-e / 2) - 8,
              h = -18 * n - 5 - 12 - 5,
              _ = Math.round(r + e + 16);
            if (
              (t.beginPath(),
              t.moveTo(r, h),
              t.lineTo(_, h),
              t.lineTo(_, -17),
              t.lineTo(12, -17),
              t.lineTo(0, -5),
              t.lineTo(-12, -17),
              t.lineTo(r, -17),
              t.fill(),
              (t.fillStyle = '#FFFFFF'),
              (t.textBaseline = 'middle'),
              (t.textAlign = o() ? 'right' : 'left'),
              this._data.eod)
            ) {
              var p = l(t, e);
              t.fillText(i, r + 8 + p, h + (-17 - h) / 2);
            } else {
              var u = r + 8 + (e - a) / 2,
                m = l(t, a);
              if (
                (t.fillText(this._data.dateString, u + m, h + 6.5 + 5),
                this._data.timeString)
              ) {
                var f = l(t, s),
                  T = r + 8 + (e - s) / 2;
                t.fillText(this._data.timeString, T + f, h + 18 * n - 6.5);
              }
            }
            t.restore();
          }
        }),
        (p.prototype.update = function () {
          this._invalidated = !0;
        }),
        (p.prototype.updateImpl = function () {
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
              var l = this._series
                  .priceScale()
                  .priceToCoordinate(i[TradingView.HIGH_PLOT], s),
                o = this._series.model().timeScale().indexToCoordinate(t);
              if (((this._point = new a(o, l)), this._gotoDateResult.eod))
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
        (p.prototype.renderer = function () {
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
        (t.exports.GotoDateView = p);
    },
  },
]);
