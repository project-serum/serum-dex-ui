(window.webpackJsonp = window.webpackJsonp || []).push([
  ['create-dialog'],
  {
    '29gu': function (t, e, n) {
      'use strict';
      var r =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              },
        i = n('txPx').getLogger('CommonUI.CreateTVBlockPlugin');
      (t.exports.createTvBlockPlugin = function (t) {
        if (t)
          return function (e, n, r) {
            var i,
              o = $(this);
            function s(e, n) {
              return n ? t[e](o, n) : t[e](o);
            }
            return 'get' === e
              ? 'function' == typeof t[(i = n)]
                ? s(i, r)
                : t[i]
              : t[e]
              ? o.each(function () {
                  return s(e, void 0);
                })
              : o;
          };
      }),
        (t.exports.createTvBlockWithInstance = function (t, e) {
          if (t && e)
            return (
              (t = t.toString()),
              function (o, s, a) {
                var u, l, c;
                return (
                  'get' === o
                    ? (u = s)
                    : ((l = s),
                      'object' === (void 0 === o ? 'undefined' : r(o)) &&
                      void 0 === s
                        ? ((l = o), (o = 'init'))
                        : 'string' != typeof o && (o = 'init')),
                  'getInstance' === o
                    ? $(this).eq(0).data(t)
                    : 'destroy' === o
                    ? (c = $(this).eq(0).data(t))
                      ? void ('function' == typeof c.destroy
                          ? (n(c, 'destroy', l), $(this).eq(0).removeData(t))
                          : i.logError(
                              '[Block Plugin] ' +
                                t +
                                ' does not support destroy command',
                            ))
                      : void console.warn(
                          '[Block Plugin] Trying to execute destroy method of ' +
                            t +
                            ' but it has not been inited',
                        )
                    : 'get' === o
                    ? (c = $(this).eq(0).data(t))
                      ? 'function' == typeof c[u]
                        ? n(c, u, a)
                        : c[u]
                      : void console.warn(
                          '[Block Plugin] Trying to get prop or execute method of ' +
                            t +
                            ' but it has not been inited',
                        )
                    : $(this).each(function () {
                        var r = $(this),
                          s = r.data(t);
                        void 0 === s &&
                          ((s = void 0 === l ? e(r) : e(r, l)), r.data(t, s)),
                          'init' !== o &&
                            ('function' == typeof s[o]
                              ? n(s, o, l)
                              : i.logError(
                                  '[Block Plugin] ' +
                                    t +
                                    ' does not support command ' +
                                    o,
                                ));
                      })
                );
              }
            );
          function n(t, e, n) {
            return void 0 === n ? t[e]() : t[e](n);
          }
        });
    },
    'F/us': function (t, e, n) {
      var r;
      (function () {
        var n = this,
          i = n._,
          o = Array.prototype,
          s = Object.prototype,
          a = Function.prototype,
          u = o.push,
          l = o.slice,
          c = s.toString,
          h = s.hasOwnProperty,
          p = Array.isArray,
          f = Object.keys,
          d = a.bind,
          _ = Object.create,
          v = function () {},
          g = function (t) {
            return t instanceof g
              ? t
              : this instanceof g
              ? void (this._wrapped = t)
              : new g(t);
          };
        t.exports && (e = t.exports = g), (e._ = g), (g.VERSION = '1.8.3');
        var b = function (t, e, n) {
            if (void 0 === e) return t;
            switch (null == n ? 3 : n) {
              case 1:
                return function (n) {
                  return t.call(e, n);
                };
              case 2:
                return function (n, r) {
                  return t.call(e, n, r);
                };
              case 3:
                return function (n, r, i) {
                  return t.call(e, n, r, i);
                };
              case 4:
                return function (n, r, i, o) {
                  return t.call(e, n, r, i, o);
                };
            }
            return function () {
              return t.apply(e, arguments);
            };
          },
          y = function (t, e, n) {
            return null == t
              ? g.identity
              : g.isFunction(t)
              ? b(t, e, n)
              : g.isObject(t)
              ? g.matcher(t)
              : g.property(t);
          };
        g.iteratee = function (t, e) {
          return y(t, e, 1 / 0);
        };
        var m = function (t, e) {
            return function (n) {
              var r = arguments.length;
              if (r < 2 || null == n) return n;
              for (var i = 1; i < r; i++)
                for (
                  var o = arguments[i], s = t(o), a = s.length, u = 0;
                  u < a;
                  u++
                ) {
                  var l = s[u];
                  (e && void 0 !== n[l]) || (n[l] = o[l]);
                }
              return n;
            };
          },
          w = function (t) {
            if (!g.isObject(t)) return {};
            if (_) return _(t);
            v.prototype = t;
            var e = new v();
            return (v.prototype = null), e;
          },
          $ = function (t) {
            return function (e) {
              return null == e ? void 0 : e[t];
            };
          },
          x = Math.pow(2, 53) - 1,
          k = $('length'),
          C = function (t) {
            var e = k(t);
            return 'number' == typeof e && e >= 0 && e <= x;
          };
        function S(t) {
          function e(e, n, r, i, o, s) {
            for (; o >= 0 && o < s; o += t) {
              var a = i ? i[o] : o;
              r = n(r, e[a], a, e);
            }
            return r;
          }
          return function (n, r, i, o) {
            r = b(r, o, 4);
            var s = !C(n) && g.keys(n),
              a = (s || n).length,
              u = t > 0 ? 0 : a - 1;
            return (
              arguments.length < 3 && ((i = n[s ? s[u] : u]), (u += t)),
              e(n, r, i, s, u, a)
            );
          };
        }
        (g.each = g.forEach = function (t, e, n) {
          var r, i;
          if (((e = b(e, n)), C(t)))
            for (r = 0, i = t.length; r < i; r++) e(t[r], r, t);
          else {
            var o = g.keys(t);
            for (r = 0, i = o.length; r < i; r++) e(t[o[r]], o[r], t);
          }
          return t;
        }),
          (g.map = g.collect = function (t, e, n) {
            e = y(e, n);
            for (
              var r = !C(t) && g.keys(t),
                i = (r || t).length,
                o = Array(i),
                s = 0;
              s < i;
              s++
            ) {
              var a = r ? r[s] : s;
              o[s] = e(t[a], a, t);
            }
            return o;
          }),
          (g.reduce = g.foldl = g.inject = S(1)),
          (g.reduceRight = g.foldr = S(-1)),
          (g.find = g.detect = function (t, e, n) {
            var r;
            if (
              void 0 !==
                (r = C(t) ? g.findIndex(t, e, n) : g.findKey(t, e, n)) &&
              -1 !== r
            )
              return t[r];
          }),
          (g.filter = g.select = function (t, e, n) {
            var r = [];
            return (
              (e = y(e, n)),
              g.each(t, function (t, n, i) {
                e(t, n, i) && r.push(t);
              }),
              r
            );
          }),
          (g.reject = function (t, e, n) {
            return g.filter(t, g.negate(y(e)), n);
          }),
          (g.every = g.all = function (t, e, n) {
            e = y(e, n);
            for (
              var r = !C(t) && g.keys(t), i = (r || t).length, o = 0;
              o < i;
              o++
            ) {
              var s = r ? r[o] : o;
              if (!e(t[s], s, t)) return !1;
            }
            return !0;
          }),
          (g.some = g.any = function (t, e, n) {
            e = y(e, n);
            for (
              var r = !C(t) && g.keys(t), i = (r || t).length, o = 0;
              o < i;
              o++
            ) {
              var s = r ? r[o] : o;
              if (e(t[s], s, t)) return !0;
            }
            return !1;
          }),
          (g.contains = g.includes = g.include = function (t, e, n, r) {
            return (
              C(t) || (t = g.values(t)),
              ('number' != typeof n || r) && (n = 0),
              g.indexOf(t, e, n) >= 0
            );
          }),
          (g.invoke = function (t, e) {
            var n = l.call(arguments, 2),
              r = g.isFunction(e);
            return g.map(t, function (t) {
              var i = r ? e : t[e];
              return null == i ? i : i.apply(t, n);
            });
          }),
          (g.pluck = function (t, e) {
            return g.map(t, g.property(e));
          }),
          (g.where = function (t, e) {
            return g.filter(t, g.matcher(e));
          }),
          (g.findWhere = function (t, e) {
            return g.find(t, g.matcher(e));
          }),
          (g.max = function (t, e, n) {
            var r,
              i,
              o = -1 / 0,
              s = -1 / 0;
            if (null == e && null != t)
              for (
                var a = 0, u = (t = C(t) ? t : g.values(t)).length;
                a < u;
                a++
              )
                (r = t[a]) > o && (o = r);
            else
              (e = y(e, n)),
                g.each(t, function (t, n, r) {
                  ((i = e(t, n, r)) > s || (i === -1 / 0 && o === -1 / 0)) &&
                    ((o = t), (s = i));
                });
            return o;
          }),
          (g.min = function (t, e, n) {
            var r,
              i,
              o = 1 / 0,
              s = 1 / 0;
            if (null == e && null != t)
              for (
                var a = 0, u = (t = C(t) ? t : g.values(t)).length;
                a < u;
                a++
              )
                (r = t[a]) < o && (o = r);
            else
              (e = y(e, n)),
                g.each(t, function (t, n, r) {
                  ((i = e(t, n, r)) < s || (i === 1 / 0 && o === 1 / 0)) &&
                    ((o = t), (s = i));
                });
            return o;
          }),
          (g.shuffle = function (t) {
            for (
              var e,
                n = C(t) ? t : g.values(t),
                r = n.length,
                i = Array(r),
                o = 0;
              o < r;
              o++
            )
              (e = g.random(0, o)) !== o && (i[o] = i[e]), (i[e] = n[o]);
            return i;
          }),
          (g.sample = function (t, e, n) {
            return null == e || n
              ? (C(t) || (t = g.values(t)), t[g.random(t.length - 1)])
              : g.shuffle(t).slice(0, Math.max(0, e));
          }),
          (g.sortBy = function (t, e, n) {
            return (
              (e = y(e, n)),
              g.pluck(
                g
                  .map(t, function (t, n, r) {
                    return { value: t, index: n, criteria: e(t, n, r) };
                  })
                  .sort(function (t, e) {
                    var n = t.criteria,
                      r = e.criteria;
                    if (n !== r) {
                      if (n > r || void 0 === n) return 1;
                      if (n < r || void 0 === r) return -1;
                    }
                    return t.index - e.index;
                  }),
                'value',
              )
            );
          });
        var B = function (t) {
          return function (e, n, r) {
            var i = {};
            return (
              (n = y(n, r)),
              g.each(e, function (r, o) {
                var s = n(r, o, e);
                t(i, r, s);
              }),
              i
            );
          };
        };
        (g.groupBy = B(function (t, e, n) {
          g.has(t, n) ? t[n].push(e) : (t[n] = [e]);
        })),
          (g.indexBy = B(function (t, e, n) {
            t[n] = e;
          })),
          (g.countBy = B(function (t, e, n) {
            g.has(t, n) ? t[n]++ : (t[n] = 1);
          })),
          (g.toArray = function (t) {
            return t
              ? g.isArray(t)
                ? l.call(t)
                : C(t)
                ? g.map(t, g.identity)
                : g.values(t)
              : [];
          }),
          (g.size = function (t) {
            return null == t ? 0 : C(t) ? t.length : g.keys(t).length;
          }),
          (g.partition = function (t, e, n) {
            e = y(e, n);
            var r = [],
              i = [];
            return (
              g.each(t, function (t, n, o) {
                (e(t, n, o) ? r : i).push(t);
              }),
              [r, i]
            );
          }),
          (g.first = g.head = g.take = function (t, e, n) {
            if (null != t)
              return null == e || n ? t[0] : g.initial(t, t.length - e);
          }),
          (g.initial = function (t, e, n) {
            return l.call(
              t,
              0,
              Math.max(0, t.length - (null == e || n ? 1 : e)),
            );
          }),
          (g.last = function (t, e, n) {
            if (null != t)
              return null == e || n
                ? t[t.length - 1]
                : g.rest(t, Math.max(0, t.length - e));
          }),
          (g.rest = g.tail = g.drop = function (t, e, n) {
            return l.call(t, null == e || n ? 1 : e);
          }),
          (g.compact = function (t) {
            return g.filter(t, g.identity);
          });
        var T = function (t, e, n, r) {
          for (var i = [], o = 0, s = r || 0, a = k(t); s < a; s++) {
            var u = t[s];
            if (C(u) && (g.isArray(u) || g.isArguments(u))) {
              e || (u = T(u, e, n));
              var l = 0,
                c = u.length;
              for (i.length += c; l < c; ) i[o++] = u[l++];
            } else n || (i[o++] = u);
          }
          return i;
        };
        function H(t) {
          return function (e, n, r) {
            n = y(n, r);
            for (var i = k(e), o = t > 0 ? 0 : i - 1; o >= 0 && o < i; o += t)
              if (n(e[o], o, e)) return o;
            return -1;
          };
        }
        function A(t, e, n) {
          return function (r, i, o) {
            var s = 0,
              a = k(r);
            if ('number' == typeof o)
              t > 0
                ? (s = o >= 0 ? o : Math.max(o + a, s))
                : (a = o >= 0 ? Math.min(o + 1, a) : o + a + 1);
            else if (n && o && a) return r[(o = n(r, i))] === i ? o : -1;
            if (i != i)
              return (o = e(l.call(r, s, a), g.isNaN)) >= 0 ? o + s : -1;
            for (o = t > 0 ? s : a - 1; o >= 0 && o < a; o += t)
              if (r[o] === i) return o;
            return -1;
          };
        }
        (g.flatten = function (t, e) {
          return T(t, e, !1);
        }),
          (g.without = function (t) {
            return g.difference(t, l.call(arguments, 1));
          }),
          (g.uniq = g.unique = function (t, e, n, r) {
            g.isBoolean(e) || ((r = n), (n = e), (e = !1)),
              null != n && (n = y(n, r));
            for (var i = [], o = [], s = 0, a = k(t); s < a; s++) {
              var u = t[s],
                l = n ? n(u, s, t) : u;
              e
                ? ((s && o === l) || i.push(u), (o = l))
                : n
                ? g.contains(o, l) || (o.push(l), i.push(u))
                : g.contains(i, u) || i.push(u);
            }
            return i;
          }),
          (g.union = function () {
            return g.uniq(T(arguments, !0, !0));
          }),
          (g.intersection = function (t) {
            for (
              var e = [], n = arguments.length, r = 0, i = k(t);
              r < i;
              r++
            ) {
              var o = t[r];
              if (!g.contains(e, o)) {
                for (var s = 1; s < n && g.contains(arguments[s], o); s++);
                s === n && e.push(o);
              }
            }
            return e;
          }),
          (g.difference = function (t) {
            var e = T(arguments, !0, !0, 1);
            return g.filter(t, function (t) {
              return !g.contains(e, t);
            });
          }),
          (g.zip = function () {
            return g.unzip(arguments);
          }),
          (g.unzip = function (t) {
            for (
              var e = (t && g.max(t, k).length) || 0, n = Array(e), r = 0;
              r < e;
              r++
            )
              n[r] = g.pluck(t, r);
            return n;
          }),
          (g.object = function (t, e) {
            for (var n = {}, r = 0, i = k(t); r < i; r++)
              e ? (n[t[r]] = e[r]) : (n[t[r][0]] = t[r][1]);
            return n;
          }),
          (g.findIndex = H(1)),
          (g.findLastIndex = H(-1)),
          (g.sortedIndex = function (t, e, n, r) {
            for (var i = (n = y(n, r, 1))(e), o = 0, s = k(t); o < s; ) {
              var a = Math.floor((o + s) / 2);
              n(t[a]) < i ? (o = a + 1) : (s = a);
            }
            return o;
          }),
          (g.indexOf = A(1, g.findIndex, g.sortedIndex)),
          (g.lastIndexOf = A(-1, g.findLastIndex)),
          (g.range = function (t, e, n) {
            null == e && ((e = t || 0), (t = 0)), (n = n || 1);
            for (
              var r = Math.max(Math.ceil((e - t) / n), 0), i = Array(r), o = 0;
              o < r;
              o++, t += n
            )
              i[o] = t;
            return i;
          });
        var j = function (t, e, n, r, i) {
          if (!(r instanceof e)) return t.apply(n, i);
          var o = w(t.prototype),
            s = t.apply(o, i);
          return g.isObject(s) ? s : o;
        };
        (g.bind = function (t, e) {
          if (d && t.bind === d) return d.apply(t, l.call(arguments, 1));
          if (!g.isFunction(t))
            throw new TypeError('Bind must be called on a function');
          var n = l.call(arguments, 2),
            r = function () {
              return j(t, r, e, this, n.concat(l.call(arguments)));
            };
          return r;
        }),
          (g.partial = function (t) {
            var e = l.call(arguments, 1),
              n = function () {
                for (var r = 0, i = e.length, o = Array(i), s = 0; s < i; s++)
                  o[s] = e[s] === g ? arguments[r++] : e[s];
                for (; r < arguments.length; ) o.push(arguments[r++]);
                return j(t, n, this, this, o);
              };
            return n;
          }),
          (g.bindAll = function (t) {
            var e,
              n,
              r = arguments.length;
            if (r <= 1)
              throw new Error('bindAll must be passed function names');
            for (e = 1; e < r; e++) t[(n = arguments[e])] = g.bind(t[n], t);
            return t;
          }),
          (g.memoize = function (t, e) {
            var n = function (r) {
              var i = n.cache,
                o = '' + (e ? e.apply(this, arguments) : r);
              return g.has(i, o) || (i[o] = t.apply(this, arguments)), i[o];
            };
            return (n.cache = {}), n;
          }),
          (g.delay = function (t, e) {
            var n = l.call(arguments, 2);
            return setTimeout(function () {
              return t.apply(null, n);
            }, e);
          }),
          (g.defer = g.partial(g.delay, g, 1)),
          (g.throttle = function (t, e, n) {
            var r,
              i,
              o,
              s = null,
              a = 0;
            n || (n = {});
            var u = function () {
              (a = !1 === n.leading ? 0 : g.now()),
                (s = null),
                (o = t.apply(r, i)),
                s || (r = i = null);
            };
            return function () {
              var l = g.now();
              a || !1 !== n.leading || (a = l);
              var c = e - (l - a);
              return (
                (r = this),
                (i = arguments),
                c <= 0 || c > e
                  ? (s && (clearTimeout(s), (s = null)),
                    (a = l),
                    (o = t.apply(r, i)),
                    s || (r = i = null))
                  : s || !1 === n.trailing || (s = setTimeout(u, c)),
                o
              );
            };
          }),
          (g.debounce = function (t, e, n) {
            var r,
              i,
              o,
              s,
              a,
              u = function () {
                var l = g.now() - s;
                l < e && l >= 0
                  ? (r = setTimeout(u, e - l))
                  : ((r = null),
                    n || ((a = t.apply(o, i)), r || (o = i = null)));
              };
            return function () {
              (o = this), (i = arguments), (s = g.now());
              var l = n && !r;
              return (
                r || (r = setTimeout(u, e)),
                l && ((a = t.apply(o, i)), (o = i = null)),
                a
              );
            };
          }),
          (g.wrap = function (t, e) {
            return g.partial(e, t);
          }),
          (g.negate = function (t) {
            return function () {
              return !t.apply(this, arguments);
            };
          }),
          (g.compose = function () {
            var t = arguments,
              e = t.length - 1;
            return function () {
              for (var n = e, r = t[e].apply(this, arguments); n--; )
                r = t[n].call(this, r);
              return r;
            };
          }),
          (g.after = function (t, e) {
            return function () {
              if (--t < 1) return e.apply(this, arguments);
            };
          }),
          (g.before = function (t, e) {
            var n;
            return function () {
              return (
                --t > 0 && (n = e.apply(this, arguments)),
                t <= 1 && (e = null),
                n
              );
            };
          }),
          (g.once = g.partial(g.before, 2));
        var I = !{ toString: null }.propertyIsEnumerable('toString'),
          E = [
            'valueOf',
            'isPrototypeOf',
            'toString',
            'propertyIsEnumerable',
            'hasOwnProperty',
            'toLocaleString',
          ];
        function M(t, e) {
          var n = E.length,
            r = t.constructor,
            i = (g.isFunction(r) && r.prototype) || s,
            o = 'constructor';
          for (g.has(t, o) && !g.contains(e, o) && e.push(o); n--; )
            (o = E[n]) in t && t[o] !== i[o] && !g.contains(e, o) && e.push(o);
        }
        (g.keys = function (t) {
          if (!g.isObject(t)) return [];
          if (f) return f(t);
          var e = [];
          for (var n in t) g.has(t, n) && e.push(n);
          return I && M(t, e), e;
        }),
          (g.allKeys = function (t) {
            if (!g.isObject(t)) return [];
            var e = [];
            for (var n in t) e.push(n);
            return I && M(t, e), e;
          }),
          (g.values = function (t) {
            for (
              var e = g.keys(t), n = e.length, r = Array(n), i = 0;
              i < n;
              i++
            )
              r[i] = t[e[i]];
            return r;
          }),
          (g.mapObject = function (t, e, n) {
            e = y(e, n);
            for (var r, i = g.keys(t), o = i.length, s = {}, a = 0; a < o; a++)
              s[(r = i[a])] = e(t[r], r, t);
            return s;
          }),
          (g.pairs = function (t) {
            for (
              var e = g.keys(t), n = e.length, r = Array(n), i = 0;
              i < n;
              i++
            )
              r[i] = [e[i], t[e[i]]];
            return r;
          }),
          (g.invert = function (t) {
            for (var e = {}, n = g.keys(t), r = 0, i = n.length; r < i; r++)
              e[t[n[r]]] = n[r];
            return e;
          }),
          (g.functions = g.methods = function (t) {
            var e = [];
            for (var n in t) g.isFunction(t[n]) && e.push(n);
            return e.sort();
          }),
          (g.extend = m(g.allKeys)),
          (g.extendOwn = g.assign = m(g.keys)),
          (g.findKey = function (t, e, n) {
            e = y(e, n);
            for (var r, i = g.keys(t), o = 0, s = i.length; o < s; o++)
              if (e(t[(r = i[o])], r, t)) return r;
          }),
          (g.pick = function (t, e, n) {
            var r,
              i,
              o = {},
              s = t;
            if (null == s) return o;
            g.isFunction(e)
              ? ((i = g.allKeys(s)), (r = b(e, n)))
              : ((i = T(arguments, !1, !1, 1)),
                (r = function (t, e, n) {
                  return e in n;
                }),
                (s = Object(s)));
            for (var a = 0, u = i.length; a < u; a++) {
              var l = i[a],
                c = s[l];
              r(c, l, s) && (o[l] = c);
            }
            return o;
          }),
          (g.omit = function (t, e, n) {
            if (g.isFunction(e)) e = g.negate(e);
            else {
              var r = g.map(T(arguments, !1, !1, 1), String);
              e = function (t, e) {
                return !g.contains(r, e);
              };
            }
            return g.pick(t, e, n);
          }),
          (g.defaults = m(g.allKeys, !0)),
          (g.create = function (t, e) {
            var n = w(t);
            return e && g.extendOwn(n, e), n;
          }),
          (g.clone = function (t) {
            return g.isObject(t)
              ? g.isArray(t)
                ? t.slice()
                : g.extend({}, t)
              : t;
          }),
          (g.tap = function (t, e) {
            return e(t), t;
          }),
          (g.isMatch = function (t, e) {
            var n = g.keys(e),
              r = n.length;
            if (null == t) return !r;
            for (var i = Object(t), o = 0; o < r; o++) {
              var s = n[o];
              if (e[s] !== i[s] || !(s in i)) return !1;
            }
            return !0;
          });
        var O = function (t, e, n, r) {
          if (t === e) return 0 !== t || 1 / t == 1 / e;
          if (null == t || null == e) return t === e;
          t instanceof g && (t = t._wrapped),
            e instanceof g && (e = e._wrapped);
          var i = c.call(t);
          if (i !== c.call(e)) return !1;
          switch (i) {
            case '[object RegExp]':
            case '[object String]':
              return '' + t == '' + e;
            case '[object Number]':
              return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;
            case '[object Date]':
            case '[object Boolean]':
              return +t == +e;
          }
          var o = '[object Array]' === i;
          if (!o) {
            if ('object' != typeof t || 'object' != typeof e) return !1;
            var s = t.constructor,
              a = e.constructor;
            if (
              s !== a &&
              !(
                g.isFunction(s) &&
                s instanceof s &&
                g.isFunction(a) &&
                a instanceof a
              ) &&
              'constructor' in t &&
              'constructor' in e
            )
              return !1;
          }
          r = r || [];
          for (var u = (n = n || []).length; u--; )
            if (n[u] === t) return r[u] === e;
          if ((n.push(t), r.push(e), o)) {
            if ((u = t.length) !== e.length) return !1;
            for (; u--; ) if (!O(t[u], e[u], n, r)) return !1;
          } else {
            var l,
              h = g.keys(t);
            if (((u = h.length), g.keys(e).length !== u)) return !1;
            for (; u--; )
              if (((l = h[u]), !g.has(e, l) || !O(t[l], e[l], n, r))) return !1;
          }
          return n.pop(), r.pop(), !0;
        };
        (g.isEqual = function (t, e) {
          return O(t, e);
        }),
          (g.isEmpty = function (t) {
            return (
              null == t ||
              (C(t) && (g.isArray(t) || g.isString(t) || g.isArguments(t))
                ? 0 === t.length
                : 0 === g.keys(t).length)
            );
          }),
          (g.isElement = function (t) {
            return !(!t || 1 !== t.nodeType);
          }),
          (g.isArray =
            p ||
            function (t) {
              return '[object Array]' === c.call(t);
            }),
          (g.isObject = function (t) {
            var e = typeof t;
            return 'function' === e || ('object' === e && !!t);
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
            function (t) {
              g['is' + t] = function (e) {
                return c.call(e) === '[object ' + t + ']';
              };
            },
          ),
          g.isArguments(arguments) ||
            (g.isArguments = function (t) {
              return g.has(t, 'callee');
            }),
          'object' != typeof Int8Array &&
            (g.isFunction = function (t) {
              return 'function' == typeof t || !1;
            }),
          (g.isFinite = function (t) {
            return isFinite(t) && !isNaN(parseFloat(t));
          }),
          (g.isNaN = function (t) {
            return g.isNumber(t) && t !== +t;
          }),
          (g.isBoolean = function (t) {
            return !0 === t || !1 === t || '[object Boolean]' === c.call(t);
          }),
          (g.isNull = function (t) {
            return null === t;
          }),
          (g.isUndefined = function (t) {
            return void 0 === t;
          }),
          (g.has = function (t, e) {
            return null != t && h.call(t, e);
          }),
          (g.noConflict = function () {
            return (n._ = i), this;
          }),
          (g.identity = function (t) {
            return t;
          }),
          (g.constant = function (t) {
            return function () {
              return t;
            };
          }),
          (g.noop = function () {}),
          (g.property = $),
          (g.propertyOf = function (t) {
            return null == t
              ? function () {}
              : function (e) {
                  return t[e];
                };
          }),
          (g.matcher = g.matches = function (t) {
            return (
              (t = g.extendOwn({}, t)),
              function (e) {
                return g.isMatch(e, t);
              }
            );
          }),
          (g.times = function (t, e, n) {
            var r = Array(Math.max(0, t));
            e = b(e, n, 1);
            for (var i = 0; i < t; i++) r[i] = e(i);
            return r;
          }),
          (g.random = function (t, e) {
            return (
              null == e && ((e = t), (t = 0)),
              t + Math.floor(Math.random() * (e - t + 1))
            );
          }),
          (g.now =
            Date.now ||
            function () {
              return new Date().getTime();
            });
        var F = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            '`': '&#x60;',
          },
          L = g.invert(F),
          W = function (t) {
            var e = function (e) {
                return t[e];
              },
              n = '(?:' + g.keys(t).join('|') + ')',
              r = RegExp(n),
              i = RegExp(n, 'g');
            return function (t) {
              return (
                (t = null == t ? '' : '' + t), r.test(t) ? t.replace(i, e) : t
              );
            };
          };
        (g.escape = W(F)),
          (g.unescape = W(L)),
          (g.result = function (t, e, n) {
            var r = null == t ? void 0 : t[e];
            return void 0 === r && (r = n), g.isFunction(r) ? r.call(t) : r;
          });
        var D = 0;
        (g.uniqueId = function (t) {
          var e = ++D + '';
          return t ? t + e : e;
        }),
          (g.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g,
          });
        var R = /(.)^/,
          V = {
            "'": "'",
            '\\': '\\',
            '\r': 'r',
            '\n': 'n',
            '\u2028': 'u2028',
            '\u2029': 'u2029',
          },
          P = /\\|'|\r|\n|\u2028|\u2029/g,
          z = function (t) {
            return '\\' + V[t];
          };
        (g.template = function (t, e, n) {
          !e && n && (e = n), (e = g.defaults({}, e, g.templateSettings));
          var r = RegExp(
              [
                (e.escape || R).source,
                (e.interpolate || R).source,
                (e.evaluate || R).source,
              ].join('|') + '|$',
              'g',
            ),
            i = 0,
            o = "__p+='";
          t.replace(r, function (e, n, r, s, a) {
            return (
              (o += t.slice(i, a).replace(P, z)),
              (i = a + e.length),
              n
                ? (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : r
                ? (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'")
                : s && (o += "';\n" + s + "\n__p+='"),
              e
            );
          }),
            (o += "';\n"),
            e.variable || (o = 'with(obj||{}){\n' + o + '}\n'),
            (o =
              "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
              o +
              'return __p;\n');
          try {
            var s = new Function(e.variable || 'obj', '_', o);
          } catch (l) {
            throw ((l.source = o), l);
          }
          var a = function (t) {
              return s.call(this, t, g);
            },
            u = e.variable || 'obj';
          return (a.source = 'function(' + u + '){\n' + o + '}'), a;
        }),
          (g.chain = function (t) {
            var e = g(t);
            return (e._chain = !0), e;
          });
        var N = function (t, e) {
          return t._chain ? g(e).chain() : e;
        };
        (g.mixin = function (t) {
          g.each(g.functions(t), function (e) {
            var n = (g[e] = t[e]);
            g.prototype[e] = function () {
              var t = [this._wrapped];
              return u.apply(t, arguments), N(this, n.apply(g, t));
            };
          });
        }),
          g.mixin(g),
          g.each(
            ['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'],
            function (t) {
              var e = o[t];
              g.prototype[t] = function () {
                var n = this._wrapped;
                return (
                  e.apply(n, arguments),
                  ('shift' !== t && 'splice' !== t) ||
                    0 !== n.length ||
                    delete n[0],
                  N(this, n)
                );
              };
            },
          ),
          g.each(['concat', 'join', 'slice'], function (t) {
            var e = o[t];
            g.prototype[t] = function () {
              return N(this, e.apply(this._wrapped, arguments));
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
            (r = function () {
              return g;
            }.apply(e, [])) || (t.exports = r);
      }.call(this));
    },
    IwoD: function (t, e, n) {},
    QwKQ: function (t, e, n) {
      'use strict';
      (function (r) {
        Object.defineProperty(e, '__esModule', { value: !0 });
        var i = (function () {
            function t(t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  'value' in r && (r.writable = !0),
                  Object.defineProperty(t, r.key, r);
              }
            }
            return function (e, n, r) {
              return n && t(e.prototype, n), r && t(e, r), e;
            };
          })(),
          o = n('29gu');
        n('b6p+');
        var s = n('txPx').getLogger('Ui.TvControlCheckbox'),
          a = {
            labelWrapper:
              '{{#hasLabel}}<label>{{#labelLeft}}<span class="tv-control-checkbox__label {{#labelAddClass}}{{labelAddClass}}{{/labelAddClass}}">{{labelLeft}}</span>{{/labelLeft}}{{> inputWrapper }}{{#labelRight}}<span class="tv-control-checkbox__label {{#labelAddClass}}{{labelAddClass}}{{/labelAddClass}}">{{labelRight}}</span>{{/labelRight}}</label>{{/hasLabel}}{{^hasLabel}}{{> inputWrapper }}{{/hasLabel}}',
            inputWrapper:
              '<{{ tag }} class="{{ customClass }}{{#disabled}} i-disabled{{/disabled}}">{{^hasCheckbox}}{{> checkbox }}{{/hasCheckbox}}{{> box }}{{> ripple }}</{{ tag }}>',
            checkbox:
              '<input{{#id}} id="{{ id }}"{{/id}} class="{{> checkboxClass }}" type="checkbox"{{#name}} name="{{ name }}"{{/name}}{{#checked}} checked{{/checked}}{{#disabled}} disabled{{/disabled}}>',
            checkboxClass: '{{ customClass }}__input',
            box:
              '<span class="{{ customClass }}__box {{#boxAddClass}}{{boxAddClass}}{{/boxAddClass}}">' +
              n('aLUT') +
              '</span>',
            ripple: '<span class="{{ customClass }}__ripple js-ripple"></span>',
          },
          u = (function () {
            function t(e) {
              var n = e.customClass,
                r = void 0 === n ? 'tv-control-checkbox' : n,
                i = e.$checkbox,
                o = e.tag,
                a = e.id,
                u = e.name,
                l = e.checked,
                c = e.disabled,
                h = e.labelLeft,
                p = e.labelRight,
                f = e.labelAddClass,
                d = e.boxAddClass;
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, t),
                (this.$el = null),
                void 0 === o && (o = h || p ? 'span' : 'label');
              var _ = i instanceof $ && !!i.length;
              if (_) {
                if (!i.is('input[type=checkbox]'))
                  return void s.logError(
                    '`$checkbox` need to be input[type=checkbox]',
                  );
                if (i.hasClass('i-inited')) return;
                this._setInputId(i, a),
                  this._setInputClass(i, r),
                  this._setInputName(i, u),
                  this._setInputChecked(i, l),
                  this._setInputDisabled(i, c),
                  (l = !!i.prop('checked')),
                  (c = !!i.attr('disabled'));
              }
              (this.$el = this.render({
                $checkbox: i,
                hasCheckbox: _,
                customClass: r,
                tag: o,
                id: a,
                name: u,
                checked: l,
                disabled: c,
                labelLeft: h,
                labelRight: p,
                hasLabel: h || p,
                labelAddClass: f,
                boxAddClass: d,
              })),
                (this.$checkbox = _
                  ? i
                  : this.$el.find('input[type=checkbox]'));
            }
            return (
              i(t, [
                {
                  key: '_setInputId',
                  value: function (t, e) {
                    void 0 !== e && t.attr('id', e);
                  },
                },
                {
                  key: '_setInputClass',
                  value: function (t, e) {
                    var n = r.render(a.checkboxClass, { customClass: e });
                    t.addClass(n);
                  },
                },
                {
                  key: '_setInputName',
                  value: function (t, e) {
                    void 0 !== e && t.attr('name', e);
                  },
                },
                {
                  key: '_setInputChecked',
                  value: function (t, e) {
                    void 0 !== e && t.prop('checked', !!e);
                  },
                },
                {
                  key: '_setInputDisabled',
                  value: function (t, e) {
                    void 0 !== e &&
                      (e
                        ? t.setAttribute('disabled', 'disabled')
                        : t.removeAttr('disabled'));
                  },
                },
                {
                  key: 'render',
                  value: function (t) {
                    var e = t.$checkbox,
                      n = $(r.render(a.labelWrapper, t, a));
                    t.hasCheckbox &&
                      (n.insertBefore(e),
                      n
                        .find('.' + t.customClass)
                        .andSelf()
                        .filter('.' + t.customClass)
                        .eq(0)
                        .prepend(e.detach()),
                      e.addClass('i-inited'));
                    return n;
                  },
                },
                {
                  key: 'checked',
                  set: function (t) {
                    this._setInputChecked(this.$checkbox, !!t);
                  },
                  get: function () {
                    return !!this.$checkbox.prop('checked');
                  },
                },
              ]),
              t
            );
          })();
        ($.fn.tvControlCheckbox = (0, o.createTvBlockWithInstance)(
          'tv-control-checkbox',
          function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return new u(TradingView.mergeObj(e, { $checkbox: t }));
          },
        )),
          (e.default = u),
          (t.exports = e.default);
      }.call(this, n('nbsC')));
    },
    YDhE: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'createDialog', function () {
          return o;
        });
      var r = n('6aJD'),
        i = n('tKRU');
      function o(t) {
        var e = t.type || 'popup';
        return delete t.type, 'modal' === e ? new r.a(t) : new i.a(t);
      }
    },
    aLUT: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11px" height="9px"><path fill="none" fill-rule="evenodd" stroke-width="2" d="M1 3.22l3.415 3.496L10 1"/></svg>';
    },
    'b6p+': function (t, e, n) {},
    nec0: function (t, e, n) {},
    nzny: function (t, e, n) {},
    pLUm: function (t, e, n) {
      t.exports = { wrapper: 'wrapper-2KWBfDVB', touch: 'touch-E6yQTRo_' };
    },
    sFgq: function (t, e, n) {
      'use strict';
      (function (t) {
        var r = n('A6WY').lazyJqueryUI;
        n('nzny');
        var i = n('pLUm');
        function o(e, n, r) {
          var o = this;
          if (
            ((this._options = $.extend({}, this._defaultOptions, r || {})),
            (this._$wrapper = e),
            this._$wrapper.addClass(i.wrapper),
            (this._$content = n),
            (this._scroll_speed = 40),
            (this._shadow_offset = 10),
            (this._header_height = this._options.headerHeight),
            (this._scroll_margin_top = this._options.scrollMarginTop),
            (this.scrolled = new t()),
            (this.scrolltoend = new t()),
            (this.scrolltostart = new t()),
            (this.visibilityCallbacks = []),
            (this._touch = Modernizr.touch),
            this._touch)
          )
            return (
              this._$content.css('position', 'relative'),
              void this._$wrapper
                .addClass(i.touch)
                .scroll(this._onScroll.bind(this))
            );
          this._$wrapper.css('overflow', 'hidden'),
            this._$wrapper
              .on('mouseenter.sidebar-scroll', function () {
                o._bottomFixed ||
                  o._dragging ||
                  (o._options.alwaysVisible || o._$scrollBar.addClass('active'),
                  o._onScroll());
              })
              .on('mouseleave.sidebar-scroll', function () {
                o._bottomFixed ||
                  o._dragging ||
                  (o._options.alwaysVisible ||
                    o._$scrollBar.removeClass('active'),
                  o._onScroll());
              })
              .on('mousewheel.sidebar-scroll', function (t) {
                if (!t.isDefaultPrevented()) {
                  var e = t.deltaY * (t.deltaFactor / 100);
                  return o.scroll(e);
                }
              }),
            !1 !== this._options.showTopShadow &&
              (this._$shadowTop = $(
                '<div class="sb-inner-shadow top i-invisible">',
              ).appendTo(this._$wrapper)),
            !1 !== this._options.showBottomShadow &&
              (this._$shadowBottom = $(
                '<div class="sb-inner-shadow">',
              ).appendTo(this._$wrapper)),
            this._$shadowTop &&
              this._header_height &&
              this._$shadowTop.css(
                'top',
                this._header_height - this._shadow_offset,
              );
          var s = this._options.additionalClass
              ? ' ' + this._options.additionalClass
              : '',
            a = this._options.alwaysVisible ? ' active-always' : '';
          (this._$scrollBarWrapper = $(
            '<div class="sb-scrollbar-wrap">',
          ).appendTo(this._$wrapper)),
            (this._$scrollBar = $(
              '<div class="sb-scrollbar sb-scrollbar-body' + s + a + '"></div>',
            ).appendTo(this._$scrollBarWrapper)),
            this._onScroll();
        }
        (o.prototype.isTouch = function () {
          return this._touch;
        }),
          (o.prototype.getScrollBar = function () {
            return this._$scrollBar;
          }),
          (o.prototype._defaultOptions = {
            headerHeight: 0,
            additionalClass: '',
            alwaysVisible: !1,
            showBottomShadow: !0,
            scrollMarginTop: 1,
            bubbleScrollEvent: !1,
          }),
          (o.prototype.initDraggable = function () {
            if (this._dragInitialized) return this;
            var t = this;
            return (
              r(this._$scrollBar).draggable({
                axis: 'y',
                containment: this._$scrollBarWrapper,
                start: function () {
                  t._dragging = !0;
                },
                stop: function () {
                  t._dragging = !1;
                },
                drag: function (e, n) {
                  t.updateScroll();
                },
              }),
              (this._dragInitialized = !0),
              this
            );
          }),
          (o.prototype.updateScroll = function () {
            if (this._touch) return this;
            var t = Math.ceil(
                this._$scrollBar.position().top -
                  this._scroll_margin_top -
                  this._header_height,
              ),
              e = this.getContainerHeightWithoutHeader(),
              n = this._$content.outerHeight(),
              r = n - e - 1;
            return (
              e <= 0 ||
                ((this._scroll_target_top =
                  r <= 0
                    ? this._header_height
                    : Math.min(
                        (-t * n) / e + this._header_height,
                        this._header_height,
                      )),
                t + this._$scrollBar.height() + 2 >= e
                  ? this.scrollToEnd()
                  : (this._$content.css('top', this._scroll_target_top + 'px'),
                    this._onScroll())),
              this
            );
          }),
          (o.prototype.getContainerHeightWithoutHeader = function () {
            return (
              this._$wrapper[0].getBoundingClientRect().height -
              this._header_height
            );
          }),
          (o.prototype.getContainerHeight = function () {
            return this._$wrapper[0].getBoundingClientRect().height;
          }),
          (o.prototype.getContentHeight = function () {
            return this._$content[0].getBoundingClientRect().height;
          }),
          (o.prototype.updateScrollBar = function () {
            if (this._touch) return this;
            var t = this._$content.position().top,
              e = this.getContentHeight(),
              n = this.getContainerHeight(),
              r = this.getContainerHeightWithoutHeader(),
              i = 1 + this._header_height,
              o = r - 2,
              s = ((Math.abs(t) - this._header_height) * o) / e,
              a = (n * n) / e;
            return (
              this.isContentShort()
                ? (this._$scrollBar.addClass('js-hidden'),
                  this._$wrapper.removeClass('sb-scroll-active'))
                : (this._$scrollBar
                    .removeClass('js-hidden')
                    .height(a)
                    .css('top', i + s),
                  this._$wrapper.addClass('sb-scroll-active'),
                  this.initDraggable()),
              this
            );
          }),
          (o.prototype.scroll = function (t, e) {
            var n = this._$content.position().top,
              r =
                this._$content.outerHeight() -
                this.getContainerHeightWithoutHeader() -
                1,
              i = e || this._scroll_speed;
            return (
              r <= 0 ||
              ((this._scroll_target_top = Math.max(
                -r + this._header_height,
                Math.min(this._header_height, n + t * i),
              )),
              this.setContentTop(this._scroll_target_top),
              this._onScroll())
            );
          }),
          (o.prototype.animateTo = function (t) {
            if (this._touch) return this;
            var e =
              this._$content.outerHeight() -
              this.getContainerHeightWithoutHeader() -
              1;
            if (e <= 0) return !0;
            (this._scroll_target_top = Math.max(
              -e + this._header_height,
              Math.min(this._header_height, -t),
            )),
              this._$content.animate(
                { top: this._scroll_target_top },
                500,
                function () {
                  this._onScroll();
                }.bind(this),
              );
          }),
          (o.prototype.resize = function () {
            if (!this._bottomFixed) {
              var t = this._$content.outerHeight(),
                e = this._$wrapper.outerHeight();
              !this._options.vAlignBottom && t < e
                ? this.atStart() || this.scrollToStart()
                : this.atEnd()
                ? this.scrollToEnd()
                : 'number' == typeof this._stickyBottom &&
                  this.setContentTop(
                    Math.min(
                      0,
                      this._stickyBottom +
                        this._$wrapper.outerHeight() -
                        this._$content.outerHeight(),
                    ),
                  );
            }
          }),
          (o.prototype.resizeHeader = function (t) {
            var e = t - this._header_height;
            (this._header_height = t),
              (this._scroll_target_top += e),
              this._$shadowTop &&
                this._$shadowTop.css(
                  'top',
                  this._header_height - this._shadow_offset,
                ),
              this.resize();
          }),
          (o.prototype.scrollTo = function (t, e) {
            (e = $.extend(
              {
                position: 'visible',
                areaHeight: t instanceof $ ? t.height() : 0,
              },
              e,
            )),
              t instanceof $ && (t = e.offsetTop || t.position().top);
            var n = this._$content.position().top,
              r = this._$content.outerHeight(),
              i = this.getContainerHeightWithoutHeader();
            if (r - i - 1 <= 0) return !0;
            var o = -1 * (n - this._header_height),
              s = o + i,
              a = 0;
            if ('visible' === e.position) {
              if (t > o && t + e.areaHeight < s) return !1;
              a = t + e.areaHeight > s ? s - t - e.areaHeight : o - t;
            } else 'top' === e.position && (a = o - t);
            return this.scroll(a, 1), this._onScroll(), !1;
          }),
          (o.prototype.scrollToEnd = function () {
            var t = this._$content.position().top,
              e = this._$content.outerHeight(),
              n = this._$wrapper.outerHeight(),
              r = e > n ? t + (n - (e + t)) + 1 : 1;
            return this.setContentTop(r), this._onScroll(), this;
          }),
          (o.prototype.scrollToStart = function () {
            return (
              this.setContentTop(this._header_height), this._onScroll(), this
            );
          }),
          (o.prototype.currentPosition = function () {
            return Math.round(this._$content.position().top);
          }),
          (o.prototype.atStart = function () {
            return (
              Math.round(this._$content.position().top) >= this._header_height
            );
          }),
          (o.prototype.atEnd = function (t) {
            ('number' == typeof t && isFinite(t)) || (t = 0);
            var e = Math.round(this._$content.position().top),
              n = this._$content.outerHeight(),
              r = this._$wrapper.outerHeight();
            return n - Math.abs(e) - 1 <= r + t;
          }),
          (o.prototype._onScroll = function (t) {
            this._touch || this._$content.css('bottom', 'auto'),
              this.scrolled.fire(),
              (this._dragging && !0 !== t) || this.updateScrollBar();
            var e = this.atStart(),
              n = this.atEnd();
            return (
              this._$shadowTop &&
                this._$shadowTop.toggleClass('i-invisible', !!e),
              this._$shadowBottom &&
                this._$shadowBottom.toggleClass('i-invisible', !!n),
              this._onContentVisible(),
              !this._atStart && e
                ? ((this._atStart = !0), this.scrolltostart.fire())
                : this._atStart && !e && delete this._atStart,
              !this._atEnd && n
                ? ((this._atEnd = !0), this.scrolltoend.fire())
                : this._atEnd && !n && delete this._atEnd,
              this._options.vAlignBottom &&
                (this._stickyBottom =
                  this._$content.outerHeight() -
                  Math.abs(this._$content.position().top) -
                  this._$wrapper.outerHeight()),
              !(
                (!this._atStart && !this._atEnd) ||
                ('function' == typeof this._options.bubbleScrollEvent
                  ? !this._options.bubbleScrollEvent()
                  : !this._options.bubbleScrollEvent)
              )
            );
          }),
          (o.prototype.checkContentVisibility = function () {
            this._onContentVisible();
          }),
          (o.prototype.subscribeToContentVisible = function (t, e, n) {
            this.visibilityCallbacks.push({ id: t, $el: e, callback: n });
          }),
          (o.prototype.triggerVisibilityCallbacks = function (t) {
            this._onContentVisible(t);
          }),
          (o.prototype._contentIsVisible = function (t) {
            return t.$el.position().top > -1 * this.currentPosition();
          }),
          (o.prototype._onContentVisible = function (t) {
            if (this.visibilityCallbacks.length) {
              var e = t || this._contentIsVisible.bind(this),
                n = [],
                r = this.visibilityCallbacks.filter(function (t, r) {
                  if (!$.contains(this._$content, t.$el[0])) return !1;
                  var i = e(t);
                  return i && n.push(r), !i;
                }, this);
              n.forEach(function (e) {
                this.visibilityCallbacks[e].callback(!!t);
              }, this),
                delete this.visibilityCallbacks,
                (this.visibilityCallbacks = r);
            }
          }),
          (o.prototype.save = function () {
            return (
              (this._saved = {
                top: this._$content.position().top,
                height: this._$content.outerHeight(),
              }),
              this
            );
          }),
          (o.prototype.restore = function () {
            if (this._saved) {
              if (
                this._saved.top === this._$content.position().top &&
                this._saved.height === this._$content.outerHeight()
              )
                return delete this._saved, this;
              this._options.vAlignBottom &&
                ((this._saved.top -=
                  this._$content.outerHeight() - this._saved.height),
                this._saved.top > this._header_height &&
                  (this._saved.top = this._header_height)),
                this.setContentTop(this._saved.top),
                delete this._saved,
                this._onScroll(!0);
            }
            return this;
          }),
          (o.prototype.fixBottom = function () {
            if (this._bottomFixed) return this;
            if (this._touch) {
              var t = this._$content.outerHeight(),
                e = this._$wrapper.scrollTop();
              this._tempIntervalID = setInterval(
                function () {
                  this._$wrapper.scrollTop(
                    e + (this._$content.outerHeight() - t),
                  );
                }.bind(this),
                0,
              );
            } else
              this._$content.css({
                top: 'auto',
                bottom:
                  this._$wrapper.outerHeight() -
                  this._$content.position().top -
                  this._$content.outerHeight(),
              });
            return (this._bottomFixed = !0), this;
          }),
          (o.prototype.releaseBottom = function () {
            return this._bottomFixed
              ? (this._touch
                  ? clearInterval(this._tempIntervalID)
                  : this._$content.css({
                      top: this._$content.position().top,
                      bottom: 'auto',
                    }),
                delete this._bottomFixed,
                this._onScroll(),
                this)
              : this;
          }),
          (o.prototype.setContentTop = function (t) {
            return (
              this._touch
                ? this._options.vAlignBottom &&
                  this._$content.outerHeight() < this._$wrapper.outerHeight()
                  ? (this._$wrapper.css('overflow-y', 'visible'),
                    this._$content.css({ position: 'absolute', bottom: 0 }))
                  : (this._$content.css({
                      position: 'relative',
                      bottom: 'auto',
                    }),
                    this._$wrapper.css('overflow-y', 'auto'),
                    this._$wrapper.scrollTop(-t))
                : this._$content.css('top', t),
              this
            );
          }),
          (o.prototype.isContentShort = function () {
            return (
              this.getContentHeight() <= this.getContainerHeightWithoutHeader()
            );
          }),
          (o.prototype.destroy = function () {
            this._$scrollBarWrapper && this._$scrollBarWrapper.remove(),
              this._$shadowBottom && this._$shadowBottom.remove(),
              this._$shadowTop && this._$shadowTop.remove(),
              this._$wrapper
                .attr('style', '')
                .off('mouseenter.sidebar-scroll')
                .off('mouseleave.sidebar-scroll')
                .off('mousewheel.sidebar-scroll'),
              this._$content.attr('style', '');
          }),
          (e.SidebarCustomScroll = o);
      }.call(this, n('aIyQ')));
    },
    uo4K: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="currentColor" d="M5.18 6.6L1.3 2.7.6 2 2 .59l.7.7 3.9 3.9 3.89-3.9.7-.7L12.61 2l-.71.7L8 6.6l3.89 3.89.7.7-1.4 1.42-.71-.71L6.58 8 2.72 11.9l-.71.7-1.41-1.4.7-.71 3.9-3.9z"/></svg>';
    },
  },
]);
