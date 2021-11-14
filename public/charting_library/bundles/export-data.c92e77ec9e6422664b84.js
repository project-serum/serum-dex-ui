(window.webpackJsonp = window.webpackJsonp || []).push([
  ['export-data'],
  {
    SIoL: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'exportData', function () {
          return o;
        });
      i('YFKU');
      var n = i('Eyy1'),
        r = i('ZJKN'),
        s = i('k9/m'),
        l = i('23IT'),
        a = { includeTime: !0, includeSeries: !0, includedStudies: 'all' };
      function o(e, t) {
        var i;
        void 0 === t && (t = {});
        var l = Object.assign({}, a, t),
          o = { schema: [], data: [] },
          u = e.timeScale().points(),
          h = e.mainSeries(),
          p = (function (e, t) {
            var i = e.allStudies().filter(function (e) {
              return e.showInObjectTree();
            });
            if ('all' === t) return i;
            return i.filter(function (e) {
              return t.includes(e.id());
            });
          })(e, l.includedStudies),
          v = (function (e, t, i, l) {
            for (
              var a = Object(n.ensureNotNull)(
                  void 0 !== i ? e.indexOf(i, !0) : e.firstIndex(),
                ),
                o = Object(n.ensureNotNull)(
                  void 0 !== l ? e.indexOf(l, !0) : e.lastIndex(),
                ),
                c = o,
                u = a,
                d = 0,
                f = t;
              d < f.length;
              d++
            ) {
              var h = f[d],
                p = h.search(a, s.PlotRowSearchMode.NearestRight);
              null !== p && p.index < c && (c = p.index);
              var v = h.search(o, s.PlotRowSearchMode.NearestLeft);
              null !== v && v.index > u && (u = v.index);
            }
            return (
              Object(n.assert)(
                c <= u,
                'Range must contain at least 1 time point',
              ),
              new r.BarsRange(c, u)
            );
          })(u, [h.bars()], l.from, l.to),
          w = v.firstBar(),
          m = v.lastBar();
        l.includeTime && o.schema.push({ type: 'time' });
        var b = o.schema.length;
        l.includeSeries &&
          (o.schema.push(d('open')),
          o.schema.push(d('high')),
          o.schema.push(d('low')),
          o.schema.push(d('close')));
        for (var g = o.schema.length, O = [], P = 0, x = p; P < x.length; P++) {
          var N = c((I = x[P]));
          O.push(N), (i = o.schema).push.apply(i, N.fields);
        }
        var T = o.schema.length;
        if (0 === T) return o;
        for (var j = w; j <= m; ++j) {
          var y = new Float64Array(T);
          y.fill(NaN), o.data.push(y);
        }
        if (l.includeTime)
          for (j = w; j <= m; ++j)
            o.data[j - w][0] = Object(n.ensureNotNull)(u.valueAt(j));
        l.includeSeries &&
          h
            .bars()
            .range(w, m)
            .each(function (e, t) {
              var i = o.data[e - w];
              return (
                (i[b] = f(t[1])),
                (i[b + 1] = f(t[2])),
                (i[b + 2] = f(t[3])),
                (i[b + 3] = f(t[4])),
                !1
              );
            });
        for (var S = 0; S < p.length; ++S) {
          for (
            var I = p[S],
              k = O[S],
              R = function (e) {
                var t = k.fieldPlotOffsets[e],
                  i = k.fieldToPlotIndex[e],
                  n = w - t,
                  r = m - t,
                  s = g + e;
                I.data()
                  .range(n, r)
                  .each(function (e, t) {
                    return (o.data[e - n][s] = f(t[i])), !1;
                  });
              },
              L = 0;
            L < k.fields.length;
            ++L
          )
            R(L);
          g += k.fields.length;
        }
        return o;
      }
      function c(e) {
        for (
          var t = e.metaInfo(),
            i = { fieldToPlotIndex: [], fieldPlotOffsets: [], fields: [] },
            r = e.id(),
            s = e.title(!1, void 0, !1),
            a = 0;
          a < t.plots.length;
          ++a
        ) {
          var o = t.plots[a],
            c = void 0,
            d = '';
          if (
            Object(l.isLinePlot)(o) ||
            Object(l.isShapesPlot)(o) ||
            Object(l.isCharsPlot)(o) ||
            Object(l.isArrowsPlot)(o)
          )
            c = Object(n.ensureDefined)(t.styles)[o.id];
          else if (Object(l.isOhlcPlot)(o))
            switch (((c = t.ohlcPlots && t.ohlcPlots[o.target]), o.type)) {
              case 'ohlc_open':
                d = ' (' + window.t('Open') + ')';
                break;
              case 'ohlc_high':
                d = ' (' + window.t('High');
                break;
              case 'ohlc_low':
                d = ' (' + window.t('Low') + ')';
                break;
              case 'ohlc_close':
                d = ' (' + window.t('Close') + ')';
            }
          if (void 0 !== c && !c.isHidden && void 0 !== c.title) {
            var f = '' + c.title + d;
            i.fields.push(u(r, s, f)),
              i.fieldToPlotIndex.push(a + 1),
              i.fieldPlotOffsets.push(e.offset(o.id));
          }
        }
        return i;
      }
      function u(e, t, i) {
        return {
          type: 'value',
          sourceType: 'study',
          sourceId: e,
          sourceTitle: t,
          plotTitle: i,
        };
      }
      function d(e) {
        return { type: 'value', sourceType: 'series', plotTitle: e };
      }
      function f(e) {
        return null != e ? e : NaN;
      }
    },
  },
]);
