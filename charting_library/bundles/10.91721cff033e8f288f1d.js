(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    '33OQ': function (n, t, r) {
      'use strict';
      (function (e) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        var i,
          u = r('4O8T'),
          o = (i = u) && i.__esModule ? i : { default: i },
          a = r('BI5g');
        var c,
          l = $('body'),
          f = $(window),
          s = 0,
          p = {
            width: null,
            height: null,
            device: null,
            isSafari:
              !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/) ||
              !!navigator.userAgent.match('CriOS'),
            isPhoneSizeDevice: function () {
              return 'phone' === p.device || 'phone-vertical' === p.device;
            },
            getScrollbarWidth:
              ((c = void 0),
              function () {
                if (void 0 === c) {
                  var n = document.createElement('div');
                  (n.style.visibility = 'hidden'),
                    (n.style.width = '100px'),
                    (n.style.msOverflowStyle = 'scrollbar'),
                    document.body.appendChild(n);
                  var t = n.offsetWidth;
                  n.style.overflow = 'scroll';
                  var r = document.createElement('div');
                  (r.style.width = '100%'), n.appendChild(r);
                  var e = r.offsetWidth;
                  n.parentNode.removeChild(n), (c = t - e);
                }
                return c;
              }),
            hasScroll: function (n) {
              return n.get(0).scrollHeight > n.height();
            },
            breakpoints: a.breakpoints,
            widgetbarBreakpoint: 1064,
            setFixedBodyState: function (n) {
              if (n && 1 == ++s)
                'hidden' !== $(document.body).css('overflow').toLowerCase() &&
                  document.body.scrollHeight > document.body.offsetHeight &&
                  ($('.widgetbar-wrap').css('right', p.getScrollbarWidth()),
                  l
                    .css(
                      'padding-right',
                      parseInt(l.css('padding-right').replace('px', '')) +
                        p.getScrollbarWidth() +
                        'px',
                    )
                    .data('wasScroll', !0)),
                  l.addClass('i-no-scroll');
              else if (
                !n &&
                s > 0 &&
                0 == --s &&
                (l.removeClass('i-no-scroll'), l.data('wasScroll'))
              ) {
                var t = l.get(0);
                $('.widgetbar-wrap').css('right', 0);
                var r = Boolean(
                  window.widgetbar &&
                    window.widgetbar.resizerBridge.fullscreen.value(),
                )
                  ? 0
                  : $('.widgetbar-wrap').width() || 0;
                t.scrollHeight <= t.clientHeight &&
                  (r -= p.getScrollbarWidth()),
                  l
                    .css('padding-right', (r < 0 ? 0 : r) + 'px')
                    .data('wasScroll', void 0);
              }
            },
          },
          h = Object.keys(p.breakpoints).sort(function (n, t) {
            return p.breakpoints[n] - p.breakpoints[t];
          });
        function d() {
          (p.width = window.innerWidth), (p.height = f.height());
        }
        function v(n) {
          var t = p.device;
          (p.device = n), p.trigger('changeDevice', [n, t]);
        }
        e.extend(p, o.default.prototype), d(), $(d), f.on('resize', d);
        for (
          var y = function (n) {
              var t,
                r,
                e = h[n],
                i = 0 === n ? 0 : p.breakpoints[h[n - 1]] + 1,
                u = p.breakpoints[e],
                o =
                  ((t = i),
                  (r = u) === 1 / 0
                    ? window.matchMedia('(min-width: ' + t + 'px)')
                    : window.matchMedia(
                        '(min-width: ' + t + 'px) and (max-width: ' + r + 'px)',
                      ));
              o.matches && v(e),
                o.addListener(function (n) {
                  n.matches && (d(), v(e));
                });
            },
            g = 0;
          g < h.length;
          g++
        )
          y(g);
        (t.default = p), (n.exports = t.default);
      }.call(this, r('F/us')));
    },
    BI5g: function (n, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'breakpoints', function () {
          return e;
        }),
        r.d(t, 'mobileFirstBreakpoints', function () {
          return i;
        });
      var e = {
          desktop: 1 / 0,
          desktopHd: 1919,
          phone: 767,
          'phone-vertical': 479,
          tablet: 1019,
        },
        i = {
          base: 0,
          'phone-vertical': 330,
          phone: 480,
          tablet: 768,
          notebook: 1020,
          desktop: 1540,
          'desktop-hd': 1920,
        };
    },
    'F/us': function (n, t, r) {
      var e;
      (function () {
        var r = this,
          i = r._,
          u = Array.prototype,
          o = Object.prototype,
          a = Function.prototype,
          c = u.push,
          l = u.slice,
          f = o.toString,
          s = o.hasOwnProperty,
          p = Array.isArray,
          h = Object.keys,
          d = a.bind,
          v = Object.create,
          y = function () {},
          g = function (n) {
            return n instanceof g
              ? n
              : this instanceof g
              ? void (this._wrapped = n)
              : new g(n);
          };
        n.exports && (t = n.exports = g), (t._ = g), (g.VERSION = '1.8.3');
        var m = function (n, t, r) {
            if (void 0 === t) return n;
            switch (null == r ? 3 : r) {
              case 1:
                return function (r) {
                  return n.call(t, r);
                };
              case 2:
                return function (r, e) {
                  return n.call(t, r, e);
                };
              case 3:
                return function (r, e, i) {
                  return n.call(t, r, e, i);
                };
              case 4:
                return function (r, e, i, u) {
                  return n.call(t, r, e, i, u);
                };
            }
            return function () {
              return n.apply(t, arguments);
            };
          },
          b = function (n, t, r) {
            return null == n
              ? g.identity
              : g.isFunction(n)
              ? m(n, t, r)
              : g.isObject(n)
              ? g.matcher(n)
              : g.property(n);
          };
        g.iteratee = function (n, t) {
          return b(n, t, 1 / 0);
        };
        var w = function (n, t) {
            return function (r) {
              var e = arguments.length;
              if (e < 2 || null == r) return r;
              for (var i = 1; i < e; i++)
                for (
                  var u = arguments[i], o = n(u), a = o.length, c = 0;
                  c < a;
                  c++
                ) {
                  var l = o[c];
                  (t && void 0 !== r[l]) || (r[l] = u[l]);
                }
              return r;
            };
          },
          x = function (n) {
            if (!g.isObject(n)) return {};
            if (v) return v(n);
            y.prototype = n;
            var t = new y();
            return (y.prototype = null), t;
          },
          k = function (n) {
            return function (t) {
              return null == t ? void 0 : t[n];
            };
          },
          _ = Math.pow(2, 53) - 1,
          j = k('length'),
          O = function (n) {
            var t = j(n);
            return 'number' == typeof t && t >= 0 && t <= _;
          };
        function S(n) {
          function t(t, r, e, i, u, o) {
            for (; u >= 0 && u < o; u += n) {
              var a = i ? i[u] : u;
              e = r(e, t[a], a, t);
            }
            return e;
          }
          return function (r, e, i, u) {
            e = m(e, u, 4);
            var o = !O(r) && g.keys(r),
              a = (o || r).length,
              c = n > 0 ? 0 : a - 1;
            return (
              arguments.length < 3 && ((i = r[o ? o[c] : c]), (c += n)),
              t(r, e, i, o, c, a)
            );
          };
        }
        (g.each = g.forEach = function (n, t, r) {
          var e, i;
          if (((t = m(t, r)), O(n)))
            for (e = 0, i = n.length; e < i; e++) t(n[e], e, n);
          else {
            var u = g.keys(n);
            for (e = 0, i = u.length; e < i; e++) t(n[u[e]], u[e], n);
          }
          return n;
        }),
          (g.map = g.collect = function (n, t, r) {
            t = b(t, r);
            for (
              var e = !O(n) && g.keys(n),
                i = (e || n).length,
                u = Array(i),
                o = 0;
              o < i;
              o++
            ) {
              var a = e ? e[o] : o;
              u[o] = t(n[a], a, n);
            }
            return u;
          }),
          (g.reduce = g.foldl = g.inject = S(1)),
          (g.reduceRight = g.foldr = S(-1)),
          (g.find = g.detect = function (n, t, r) {
            var e;
            if (
              void 0 !==
                (e = O(n) ? g.findIndex(n, t, r) : g.findKey(n, t, r)) &&
              -1 !== e
            )
              return n[e];
          }),
          (g.filter = g.select = function (n, t, r) {
            var e = [];
            return (
              (t = b(t, r)),
              g.each(n, function (n, r, i) {
                t(n, r, i) && e.push(n);
              }),
              e
            );
          }),
          (g.reject = function (n, t, r) {
            return g.filter(n, g.negate(b(t)), r);
          }),
          (g.every = g.all = function (n, t, r) {
            t = b(t, r);
            for (
              var e = !O(n) && g.keys(n), i = (e || n).length, u = 0;
              u < i;
              u++
            ) {
              var o = e ? e[u] : u;
              if (!t(n[o], o, n)) return !1;
            }
            return !0;
          }),
          (g.some = g.any = function (n, t, r) {
            t = b(t, r);
            for (
              var e = !O(n) && g.keys(n), i = (e || n).length, u = 0;
              u < i;
              u++
            ) {
              var o = e ? e[u] : u;
              if (t(n[o], o, n)) return !0;
            }
            return !1;
          }),
          (g.contains = g.includes = g.include = function (n, t, r, e) {
            return (
              O(n) || (n = g.values(n)),
              ('number' != typeof r || e) && (r = 0),
              g.indexOf(n, t, r) >= 0
            );
          }),
          (g.invoke = function (n, t) {
            var r = l.call(arguments, 2),
              e = g.isFunction(t);
            return g.map(n, function (n) {
              var i = e ? t : n[t];
              return null == i ? i : i.apply(n, r);
            });
          }),
          (g.pluck = function (n, t) {
            return g.map(n, g.property(t));
          }),
          (g.where = function (n, t) {
            return g.filter(n, g.matcher(t));
          }),
          (g.findWhere = function (n, t) {
            return g.find(n, g.matcher(t));
          }),
          (g.max = function (n, t, r) {
            var e,
              i,
              u = -1 / 0,
              o = -1 / 0;
            if (null == t && null != n)
              for (
                var a = 0, c = (n = O(n) ? n : g.values(n)).length;
                a < c;
                a++
              )
                (e = n[a]) > u && (u = e);
            else
              (t = b(t, r)),
                g.each(n, function (n, r, e) {
                  ((i = t(n, r, e)) > o || (i === -1 / 0 && u === -1 / 0)) &&
                    ((u = n), (o = i));
                });
            return u;
          }),
          (g.min = function (n, t, r) {
            var e,
              i,
              u = 1 / 0,
              o = 1 / 0;
            if (null == t && null != n)
              for (
                var a = 0, c = (n = O(n) ? n : g.values(n)).length;
                a < c;
                a++
              )
                (e = n[a]) < u && (u = e);
            else
              (t = b(t, r)),
                g.each(n, function (n, r, e) {
                  ((i = t(n, r, e)) < o || (i === 1 / 0 && u === 1 / 0)) &&
                    ((u = n), (o = i));
                });
            return u;
          }),
          (g.shuffle = function (n) {
            for (
              var t,
                r = O(n) ? n : g.values(n),
                e = r.length,
                i = Array(e),
                u = 0;
              u < e;
              u++
            )
              (t = g.random(0, u)) !== u && (i[u] = i[t]), (i[t] = r[u]);
            return i;
          }),
          (g.sample = function (n, t, r) {
            return null == t || r
              ? (O(n) || (n = g.values(n)), n[g.random(n.length - 1)])
              : g.shuffle(n).slice(0, Math.max(0, t));
          }),
          (g.sortBy = function (n, t, r) {
            return (
              (t = b(t, r)),
              g.pluck(
                g
                  .map(n, function (n, r, e) {
                    return { value: n, index: r, criteria: t(n, r, e) };
                  })
                  .sort(function (n, t) {
                    var r = n.criteria,
                      e = t.criteria;
                    if (r !== e) {
                      if (r > e || void 0 === r) return 1;
                      if (r < e || void 0 === e) return -1;
                    }
                    return n.index - t.index;
                  }),
                'value',
              )
            );
          });
        var A = function (n) {
          return function (t, r, e) {
            var i = {};
            return (
              (r = b(r, e)),
              g.each(t, function (e, u) {
                var o = r(e, u, t);
                n(i, e, o);
              }),
              i
            );
          };
        };
        (g.groupBy = A(function (n, t, r) {
          g.has(n, r) ? n[r].push(t) : (n[r] = [t]);
        })),
          (g.indexBy = A(function (n, t, r) {
            n[r] = t;
          })),
          (g.countBy = A(function (n, t, r) {
            g.has(n, r) ? n[r]++ : (n[r] = 1);
          })),
          (g.toArray = function (n) {
            return n
              ? g.isArray(n)
                ? l.call(n)
                : O(n)
                ? g.map(n, g.identity)
                : g.values(n)
              : [];
          }),
          (g.size = function (n) {
            return null == n ? 0 : O(n) ? n.length : g.keys(n).length;
          }),
          (g.partition = function (n, t, r) {
            t = b(t, r);
            var e = [],
              i = [];
            return (
              g.each(n, function (n, r, u) {
                (t(n, r, u) ? e : i).push(n);
              }),
              [e, i]
            );
          }),
          (g.first = g.head = g.take = function (n, t, r) {
            if (null != n)
              return null == t || r ? n[0] : g.initial(n, n.length - t);
          }),
          (g.initial = function (n, t, r) {
            return l.call(
              n,
              0,
              Math.max(0, n.length - (null == t || r ? 1 : t)),
            );
          }),
          (g.last = function (n, t, r) {
            if (null != n)
              return null == t || r
                ? n[n.length - 1]
                : g.rest(n, Math.max(0, n.length - t));
          }),
          (g.rest = g.tail = g.drop = function (n, t, r) {
            return l.call(n, null == t || r ? 1 : t);
          }),
          (g.compact = function (n) {
            return g.filter(n, g.identity);
          });
        var F = function (n, t, r, e) {
          for (var i = [], u = 0, o = e || 0, a = j(n); o < a; o++) {
            var c = n[o];
            if (O(c) && (g.isArray(c) || g.isArguments(c))) {
              t || (c = F(c, t, r));
              var l = 0,
                f = c.length;
              for (i.length += f; l < f; ) i[u++] = c[l++];
            } else r || (i[u++] = c);
          }
          return i;
        };
        function M(n) {
          return function (t, r, e) {
            r = b(r, e);
            for (var i = j(t), u = n > 0 ? 0 : i - 1; u >= 0 && u < i; u += n)
              if (r(t[u], u, t)) return u;
            return -1;
          };
        }
        function E(n, t, r) {
          return function (e, i, u) {
            var o = 0,
              a = j(e);
            if ('number' == typeof u)
              n > 0
                ? (o = u >= 0 ? u : Math.max(u + a, o))
                : (a = u >= 0 ? Math.min(u + 1, a) : u + a + 1);
            else if (r && u && a) return e[(u = r(e, i))] === i ? u : -1;
            if (i != i)
              return (u = t(l.call(e, o, a), g.isNaN)) >= 0 ? u + o : -1;
            for (u = n > 0 ? o : a - 1; u >= 0 && u < a; u += n)
              if (e[u] === i) return u;
            return -1;
          };
        }
        (g.flatten = function (n, t) {
          return F(n, t, !1);
        }),
          (g.without = function (n) {
            return g.difference(n, l.call(arguments, 1));
          }),
          (g.uniq = g.unique = function (n, t, r, e) {
            g.isBoolean(t) || ((e = r), (r = t), (t = !1)),
              null != r && (r = b(r, e));
            for (var i = [], u = [], o = 0, a = j(n); o < a; o++) {
              var c = n[o],
                l = r ? r(c, o, n) : c;
              t
                ? ((o && u === l) || i.push(c), (u = l))
                : r
                ? g.contains(u, l) || (u.push(l), i.push(c))
                : g.contains(i, c) || i.push(c);
            }
            return i;
          }),
          (g.union = function () {
            return g.uniq(F(arguments, !0, !0));
          }),
          (g.intersection = function (n) {
            for (
              var t = [], r = arguments.length, e = 0, i = j(n);
              e < i;
              e++
            ) {
              var u = n[e];
              if (!g.contains(t, u)) {
                for (var o = 1; o < r && g.contains(arguments[o], u); o++);
                o === r && t.push(u);
              }
            }
            return t;
          }),
          (g.difference = function (n) {
            var t = F(arguments, !0, !0, 1);
            return g.filter(n, function (n) {
              return !g.contains(t, n);
            });
          }),
          (g.zip = function () {
            return g.unzip(arguments);
          }),
          (g.unzip = function (n) {
            for (
              var t = (n && g.max(n, j).length) || 0, r = Array(t), e = 0;
              e < t;
              e++
            )
              r[e] = g.pluck(n, e);
            return r;
          }),
          (g.object = function (n, t) {
            for (var r = {}, e = 0, i = j(n); e < i; e++)
              t ? (r[n[e]] = t[e]) : (r[n[e][0]] = n[e][1]);
            return r;
          }),
          (g.findIndex = M(1)),
          (g.findLastIndex = M(-1)),
          (g.sortedIndex = function (n, t, r, e) {
            for (var i = (r = b(r, e, 1))(t), u = 0, o = j(n); u < o; ) {
              var a = Math.floor((u + o) / 2);
              r(n[a]) < i ? (u = a + 1) : (o = a);
            }
            return u;
          }),
          (g.indexOf = E(1, g.findIndex, g.sortedIndex)),
          (g.lastIndexOf = E(-1, g.findLastIndex)),
          (g.range = function (n, t, r) {
            null == t && ((t = n || 0), (n = 0)), (r = r || 1);
            for (
              var e = Math.max(Math.ceil((t - n) / r), 0), i = Array(e), u = 0;
              u < e;
              u++, n += r
            )
              i[u] = n;
            return i;
          });
        var B = function (n, t, r, e, i) {
          if (!(e instanceof t)) return n.apply(r, i);
          var u = x(n.prototype),
            o = n.apply(u, i);
          return g.isObject(o) ? o : u;
        };
        (g.bind = function (n, t) {
          if (d && n.bind === d) return d.apply(n, l.call(arguments, 1));
          if (!g.isFunction(n))
            throw new TypeError('Bind must be called on a function');
          var r = l.call(arguments, 2),
            e = function () {
              return B(n, e, t, this, r.concat(l.call(arguments)));
            };
          return e;
        }),
          (g.partial = function (n) {
            var t = l.call(arguments, 1),
              r = function () {
                for (var e = 0, i = t.length, u = Array(i), o = 0; o < i; o++)
                  u[o] = t[o] === g ? arguments[e++] : t[o];
                for (; e < arguments.length; ) u.push(arguments[e++]);
                return B(n, r, this, this, u);
              };
            return r;
          }),
          (g.bindAll = function (n) {
            var t,
              r,
              e = arguments.length;
            if (e <= 1)
              throw new Error('bindAll must be passed function names');
            for (t = 1; t < e; t++) n[(r = arguments[t])] = g.bind(n[r], n);
            return n;
          }),
          (g.memoize = function (n, t) {
            var r = function (e) {
              var i = r.cache,
                u = '' + (t ? t.apply(this, arguments) : e);
              return g.has(i, u) || (i[u] = n.apply(this, arguments)), i[u];
            };
            return (r.cache = {}), r;
          }),
          (g.delay = function (n, t) {
            var r = l.call(arguments, 2);
            return setTimeout(function () {
              return n.apply(null, r);
            }, t);
          }),
          (g.defer = g.partial(g.delay, g, 1)),
          (g.throttle = function (n, t, r) {
            var e,
              i,
              u,
              o = null,
              a = 0;
            r || (r = {});
            var c = function () {
              (a = !1 === r.leading ? 0 : g.now()),
                (o = null),
                (u = n.apply(e, i)),
                o || (e = i = null);
            };
            return function () {
              var l = g.now();
              a || !1 !== r.leading || (a = l);
              var f = t - (l - a);
              return (
                (e = this),
                (i = arguments),
                f <= 0 || f > t
                  ? (o && (clearTimeout(o), (o = null)),
                    (a = l),
                    (u = n.apply(e, i)),
                    o || (e = i = null))
                  : o || !1 === r.trailing || (o = setTimeout(c, f)),
                u
              );
            };
          }),
          (g.debounce = function (n, t, r) {
            var e,
              i,
              u,
              o,
              a,
              c = function () {
                var l = g.now() - o;
                l < t && l >= 0
                  ? (e = setTimeout(c, t - l))
                  : ((e = null),
                    r || ((a = n.apply(u, i)), e || (u = i = null)));
              };
            return function () {
              (u = this), (i = arguments), (o = g.now());
              var l = r && !e;
              return (
                e || (e = setTimeout(c, t)),
                l && ((a = n.apply(u, i)), (u = i = null)),
                a
              );
            };
          }),
          (g.wrap = function (n, t) {
            return g.partial(t, n);
          }),
          (g.negate = function (n) {
            return function () {
              return !n.apply(this, arguments);
            };
          }),
          (g.compose = function () {
            var n = arguments,
              t = n.length - 1;
            return function () {
              for (var r = t, e = n[t].apply(this, arguments); r--; )
                e = n[r].call(this, e);
              return e;
            };
          }),
          (g.after = function (n, t) {
            return function () {
              if (--n < 1) return t.apply(this, arguments);
            };
          }),
          (g.before = function (n, t) {
            var r;
            return function () {
              return (
                --n > 0 && (r = t.apply(this, arguments)),
                n <= 1 && (t = null),
                r
              );
            };
          }),
          (g.once = g.partial(g.before, 2));
        var I = !{ toString: null }.propertyIsEnumerable('toString'),
          N = [
            'valueOf',
            'isPrototypeOf',
            'toString',
            'propertyIsEnumerable',
            'hasOwnProperty',
            'toLocaleString',
          ];
        function T(n, t) {
          var r = N.length,
            e = n.constructor,
            i = (g.isFunction(e) && e.prototype) || o,
            u = 'constructor';
          for (g.has(n, u) && !g.contains(t, u) && t.push(u); r--; )
            (u = N[r]) in n && n[u] !== i[u] && !g.contains(t, u) && t.push(u);
        }
        (g.keys = function (n) {
          if (!g.isObject(n)) return [];
          if (h) return h(n);
          var t = [];
          for (var r in n) g.has(n, r) && t.push(r);
          return I && T(n, t), t;
        }),
          (g.allKeys = function (n) {
            if (!g.isObject(n)) return [];
            var t = [];
            for (var r in n) t.push(r);
            return I && T(n, t), t;
          }),
          (g.values = function (n) {
            for (
              var t = g.keys(n), r = t.length, e = Array(r), i = 0;
              i < r;
              i++
            )
              e[i] = n[t[i]];
            return e;
          }),
          (g.mapObject = function (n, t, r) {
            t = b(t, r);
            for (var e, i = g.keys(n), u = i.length, o = {}, a = 0; a < u; a++)
              o[(e = i[a])] = t(n[e], e, n);
            return o;
          }),
          (g.pairs = function (n) {
            for (
              var t = g.keys(n), r = t.length, e = Array(r), i = 0;
              i < r;
              i++
            )
              e[i] = [t[i], n[t[i]]];
            return e;
          }),
          (g.invert = function (n) {
            for (var t = {}, r = g.keys(n), e = 0, i = r.length; e < i; e++)
              t[n[r[e]]] = r[e];
            return t;
          }),
          (g.functions = g.methods = function (n) {
            var t = [];
            for (var r in n) g.isFunction(n[r]) && t.push(r);
            return t.sort();
          }),
          (g.extend = w(g.allKeys)),
          (g.extendOwn = g.assign = w(g.keys)),
          (g.findKey = function (n, t, r) {
            t = b(t, r);
            for (var e, i = g.keys(n), u = 0, o = i.length; u < o; u++)
              if (t(n[(e = i[u])], e, n)) return e;
          }),
          (g.pick = function (n, t, r) {
            var e,
              i,
              u = {},
              o = n;
            if (null == o) return u;
            g.isFunction(t)
              ? ((i = g.allKeys(o)), (e = m(t, r)))
              : ((i = F(arguments, !1, !1, 1)),
                (e = function (n, t, r) {
                  return t in r;
                }),
                (o = Object(o)));
            for (var a = 0, c = i.length; a < c; a++) {
              var l = i[a],
                f = o[l];
              e(f, l, o) && (u[l] = f);
            }
            return u;
          }),
          (g.omit = function (n, t, r) {
            if (g.isFunction(t)) t = g.negate(t);
            else {
              var e = g.map(F(arguments, !1, !1, 1), String);
              t = function (n, t) {
                return !g.contains(e, t);
              };
            }
            return g.pick(n, t, r);
          }),
          (g.defaults = w(g.allKeys, !0)),
          (g.create = function (n, t) {
            var r = x(n);
            return t && g.extendOwn(r, t), r;
          }),
          (g.clone = function (n) {
            return g.isObject(n)
              ? g.isArray(n)
                ? n.slice()
                : g.extend({}, n)
              : n;
          }),
          (g.tap = function (n, t) {
            return t(n), n;
          }),
          (g.isMatch = function (n, t) {
            var r = g.keys(t),
              e = r.length;
            if (null == n) return !e;
            for (var i = Object(n), u = 0; u < e; u++) {
              var o = r[u];
              if (t[o] !== i[o] || !(o in i)) return !1;
            }
            return !0;
          });
        var z = function (n, t, r, e) {
          if (n === t) return 0 !== n || 1 / n == 1 / t;
          if (null == n || null == t) return n === t;
          n instanceof g && (n = n._wrapped),
            t instanceof g && (t = t._wrapped);
          var i = f.call(n);
          if (i !== f.call(t)) return !1;
          switch (i) {
            case '[object RegExp]':
            case '[object String]':
              return '' + n == '' + t;
            case '[object Number]':
              return +n != +n ? +t != +t : 0 == +n ? 1 / +n == 1 / t : +n == +t;
            case '[object Date]':
            case '[object Boolean]':
              return +n == +t;
          }
          var u = '[object Array]' === i;
          if (!u) {
            if ('object' != typeof n || 'object' != typeof t) return !1;
            var o = n.constructor,
              a = t.constructor;
            if (
              o !== a &&
              !(
                g.isFunction(o) &&
                o instanceof o &&
                g.isFunction(a) &&
                a instanceof a
              ) &&
              'constructor' in n &&
              'constructor' in t
            )
              return !1;
          }
          e = e || [];
          for (var c = (r = r || []).length; c--; )
            if (r[c] === n) return e[c] === t;
          if ((r.push(n), e.push(t), u)) {
            if ((c = n.length) !== t.length) return !1;
            for (; c--; ) if (!z(n[c], t[c], r, e)) return !1;
          } else {
            var l,
              s = g.keys(n);
            if (((c = s.length), g.keys(t).length !== c)) return !1;
            for (; c--; )
              if (((l = s[c]), !g.has(t, l) || !z(n[l], t[l], r, e))) return !1;
          }
          return r.pop(), e.pop(), !0;
        };
        (g.isEqual = function (n, t) {
          return z(n, t);
        }),
          (g.isEmpty = function (n) {
            return (
              null == n ||
              (O(n) && (g.isArray(n) || g.isString(n) || g.isArguments(n))
                ? 0 === n.length
                : 0 === g.keys(n).length)
            );
          }),
          (g.isElement = function (n) {
            return !(!n || 1 !== n.nodeType);
          }),
          (g.isArray =
            p ||
            function (n) {
              return '[object Array]' === f.call(n);
            }),
          (g.isObject = function (n) {
            var t = typeof n;
            return 'function' === t || ('object' === t && !!n);
          }),
          g.each(
            [
              'Arguments',
              'Function',
              'String',
              'Number',
              'Date',
              'RegExp',
              'Error',
            ],
            function (n) {
              g['is' + n] = function (t) {
                return f.call(t) === '[object ' + n + ']';
              };
            },
          ),
          g.isArguments(arguments) ||
            (g.isArguments = function (n) {
              return g.has(n, 'callee');
            }),
          'object' != typeof Int8Array &&
            (g.isFunction = function (n) {
              return 'function' == typeof n || !1;
            }),
          (g.isFinite = function (n) {
            return isFinite(n) && !isNaN(parseFloat(n));
          }),
          (g.isNaN = function (n) {
            return g.isNumber(n) && n !== +n;
          }),
          (g.isBoolean = function (n) {
            return !0 === n || !1 === n || '[object Boolean]' === f.call(n);
          }),
          (g.isNull = function (n) {
            return null === n;
          }),
          (g.isUndefined = function (n) {
            return void 0 === n;
          }),
          (g.has = function (n, t) {
            return null != n && s.call(n, t);
          }),
          (g.noConflict = function () {
            return (r._ = i), this;
          }),
          (g.identity = function (n) {
            return n;
          }),
          (g.constant = function (n) {
            return function () {
              return n;
            };
          }),
          (g.noop = function () {}),
          (g.property = k),
          (g.propertyOf = function (n) {
            return null == n
              ? function () {}
              : function (t) {
                  return n[t];
                };
          }),
          (g.matcher = g.matches = function (n) {
            return (
              (n = g.extendOwn({}, n)),
              function (t) {
                return g.isMatch(t, n);
              }
            );
          }),
          (g.times = function (n, t, r) {
            var e = Array(Math.max(0, n));
            t = m(t, r, 1);
            for (var i = 0; i < n; i++) e[i] = t(i);
            return e;
          }),
          (g.random = function (n, t) {
            return (
              null == t && ((t = n), (n = 0)),
              n + Math.floor(Math.random() * (t - n + 1))
            );
          }),
          (g.now =
            Date.now ||
            function () {
              return new Date().getTime();
            });
        var C = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            '`': '&#x60;',
          },
          W = g.invert(C),
          $ = function (n) {
            var t = function (t) {
                return n[t];
              },
              r = '(?:' + g.keys(n).join('|') + ')',
              e = RegExp(r),
              i = RegExp(r, 'g');
            return function (n) {
              return (
                (n = null == n ? '' : '' + n), e.test(n) ? n.replace(i, t) : n
              );
            };
          };
        (g.escape = $(C)),
          (g.unescape = $(W)),
          (g.result = function (n, t, r) {
            var e = null == n ? void 0 : n[t];
            return void 0 === e && (e = r), g.isFunction(e) ? e.call(n) : e;
          });
        var R = 0;
        (g.uniqueId = function (n) {
          var t = ++R + '';
          return n ? n + t : t;
        }),
          (g.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g,
          });
        var q = /(.)^/,
          D = {
            "'": "'",
            '\\': '\\',
            '\r': 'r',
            '\n': 'n',
            '\u2028': 'u2028',
            '\u2029': 'u2029',
          },
          H = /\\|'|\r|\n|\u2028|\u2029/g,
          K = function (n) {
            return '\\' + D[n];
          };
        (g.template = function (n, t, r) {
          !t && r && (t = r), (t = g.defaults({}, t, g.templateSettings));
          var e = RegExp(
              [
                (t.escape || q).source,
                (t.interpolate || q).source,
                (t.evaluate || q).source,
              ].join('|') + '|$',
              'g',
            ),
            i = 0,
            u = "__p+='";
          n.replace(e, function (t, r, e, o, a) {
            return (
              (u += n.slice(i, a).replace(H, K)),
              (i = a + t.length),
              r
                ? (u += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'")
                : e
                ? (u += "'+\n((__t=(" + e + "))==null?'':__t)+\n'")
                : o && (u += "';\n" + o + "\n__p+='"),
              t
            );
          }),
            (u += "';\n"),
            t.variable || (u = 'with(obj||{}){\n' + u + '}\n'),
            (u =
              "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
              u +
              'return __p;\n');
          try {
            var o = new Function(t.variable || 'obj', '_', u);
          } catch (l) {
            throw ((l.source = u), l);
          }
          var a = function (n) {
              return o.call(this, n, g);
            },
            c = t.variable || 'obj';
          return (a.source = 'function(' + c + '){\n' + u + '}'), a;
        }),
          (g.chain = function (n) {
            var t = g(n);
            return (t._chain = !0), t;
          });
        var L = function (n, t) {
          return n._chain ? g(t).chain() : t;
        };
        (g.mixin = function (n) {
          g.each(g.functions(n), function (t) {
            var r = (g[t] = n[t]);
            g.prototype[t] = function () {
              var n = [this._wrapped];
              return c.apply(n, arguments), L(this, r.apply(g, n));
            };
          });
        }),
          g.mixin(g),
          g.each(
            ['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'],
            function (n) {
              var t = u[n];
              g.prototype[n] = function () {
                var r = this._wrapped;
                return (
                  t.apply(r, arguments),
                  ('shift' !== n && 'splice' !== n) ||
                    0 !== r.length ||
                    delete r[0],
                  L(this, r)
                );
              };
            },
          ),
          g.each(['concat', 'join', 'slice'], function (n) {
            var t = u[n];
            g.prototype[n] = function () {
              return L(this, t.apply(this._wrapped, arguments));
            };
          }),
          (g.prototype.value = function () {
            return this._wrapped;
          }),
          (g.prototype.valueOf = g.prototype.toJSON = g.prototype.value),
          (g.prototype.toString = function () {
            return '' + this._wrapped;
          }),
          void 0 ===
            (e = function () {
              return g;
            }.apply(t, [])) || (n.exports = e);
      }.call(this));
    },
  },
]);
