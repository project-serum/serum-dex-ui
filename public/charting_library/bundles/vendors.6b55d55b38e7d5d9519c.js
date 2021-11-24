(window.webpackJsonp = window.webpackJsonp || []).push([
  ['vendors'],
  {
    '/82Z': function (e, t, n) {
      var r, o, i;
      (o = [n('P5fv'), n('Qwlt')]),
        void 0 ===
          (i =
            'function' ==
            typeof (r = function (e) {
              var t,
                n = e;
              return (
                (e.effects = { effect: {} }),
                (function (e, t) {
                  var n,
                    r = /^([\-+])=\s*(\d+\.?\d*)/,
                    o = [
                      {
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function (e) {
                          return [e[1], e[2], e[3], e[4]];
                        },
                      },
                      {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function (e) {
                          return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]];
                        },
                      },
                      {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function (e) {
                          return [
                            parseInt(e[1], 16),
                            parseInt(e[2], 16),
                            parseInt(e[3], 16),
                          ];
                        },
                      },
                      {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function (e) {
                          return [
                            parseInt(e[1] + e[1], 16),
                            parseInt(e[2] + e[2], 16),
                            parseInt(e[3] + e[3], 16),
                          ];
                        },
                      },
                      {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: 'hsla',
                        parse: function (e) {
                          return [e[1], e[2] / 100, e[3] / 100, e[4]];
                        },
                      },
                    ],
                    i = (e.Color = function (t, n, r, o) {
                      return new e.Color.fn.parse(t, n, r, o);
                    }),
                    s = {
                      rgba: {
                        props: {
                          red: { idx: 0, type: 'byte' },
                          green: { idx: 1, type: 'byte' },
                          blue: { idx: 2, type: 'byte' },
                        },
                      },
                      hsla: {
                        props: {
                          hue: { idx: 0, type: 'degrees' },
                          saturation: { idx: 1, type: 'percent' },
                          lightness: { idx: 2, type: 'percent' },
                        },
                      },
                    },
                    a = {
                      byte: { floor: !0, max: 255 },
                      percent: { max: 1 },
                      degrees: { mod: 360, floor: !0 },
                    },
                    u = (i.support = {}),
                    c = e('<p>')[0],
                    l = e.each;
                  function f(e, t, n) {
                    var r = a[t.type] || {};
                    return null == e
                      ? n || !t.def
                        ? null
                        : t.def
                      : ((e = r.floor ? ~~e : parseFloat(e)),
                        isNaN(e)
                          ? t.def
                          : r.mod
                          ? (e + r.mod) % r.mod
                          : 0 > e
                          ? 0
                          : r.max < e
                          ? r.max
                          : e);
                  }
                  function d(t) {
                    var r = i(),
                      a = (r._rgba = []);
                    return (
                      (t = t.toLowerCase()),
                      l(o, function (e, n) {
                        var o,
                          i = n.re.exec(t),
                          u = i && n.parse(i),
                          c = n.space || 'rgba';
                        if (u)
                          return (
                            (o = r[c](u)),
                            (r[s[c].cache] = o[s[c].cache]),
                            (a = r._rgba = o._rgba),
                            !1
                          );
                      }),
                      a.length
                        ? ('0,0,0,0' === a.join() && e.extend(a, n.transparent),
                          r)
                        : n[t]
                    );
                  }
                  function p(e, t, n) {
                    return 6 * (n = (n + 1) % 1) < 1
                      ? e + (t - e) * n * 6
                      : 2 * n < 1
                      ? t
                      : 3 * n < 2
                      ? e + (t - e) * (2 / 3 - n) * 6
                      : e;
                  }
                  (c.style.cssText = 'background-color:rgba(1,1,1,.5)'),
                    (u.rgba = c.style.backgroundColor.indexOf('rgba') > -1),
                    l(s, function (e, t) {
                      (t.cache = '_' + e),
                        (t.props.alpha = { idx: 3, type: 'percent', def: 1 });
                    }),
                    (i.fn = e.extend(i.prototype, {
                      parse: function (t, r, o, a) {
                        if (void 0 === t)
                          return (this._rgba = [null, null, null, null]), this;
                        (t.jquery || t.nodeType) &&
                          ((t = e(t).css(r)), (r = void 0));
                        var u = this,
                          c = e.type(t),
                          p = (this._rgba = []);
                        return (
                          void 0 !== r && ((t = [t, r, o, a]), (c = 'array')),
                          'string' === c
                            ? this.parse(d(t) || n._default)
                            : 'array' === c
                            ? (l(s.rgba.props, function (e, n) {
                                p[n.idx] = f(t[n.idx], n);
                              }),
                              this)
                            : 'object' === c
                            ? (l(
                                s,
                                t instanceof i
                                  ? function (e, n) {
                                      t[n.cache] &&
                                        (u[n.cache] = t[n.cache].slice());
                                    }
                                  : function (n, r) {
                                      var o = r.cache;
                                      l(r.props, function (e, n) {
                                        if (!u[o] && r.to) {
                                          if ('alpha' === e || null == t[e])
                                            return;
                                          u[o] = r.to(u._rgba);
                                        }
                                        u[o][n.idx] = f(t[e], n, !0);
                                      }),
                                        u[o] &&
                                          e.inArray(null, u[o].slice(0, 3)) <
                                            0 &&
                                          ((u[o][3] = 1),
                                          r.from && (u._rgba = r.from(u[o])));
                                    },
                              ),
                              this)
                            : void 0
                        );
                      },
                      is: function (e) {
                        var t = i(e),
                          n = !0,
                          r = this;
                        return (
                          l(s, function (e, o) {
                            var i,
                              s = t[o.cache];
                            return (
                              s &&
                                ((i =
                                  r[o.cache] || (o.to && o.to(r._rgba)) || []),
                                l(o.props, function (e, t) {
                                  if (null != s[t.idx])
                                    return (n = s[t.idx] === i[t.idx]);
                                })),
                              n
                            );
                          }),
                          n
                        );
                      },
                      _space: function () {
                        var e = [],
                          t = this;
                        return (
                          l(s, function (n, r) {
                            t[r.cache] && e.push(n);
                          }),
                          e.pop()
                        );
                      },
                      transition: function (e, t) {
                        var n = i(e),
                          r = n._space(),
                          o = s[r],
                          u = 0 === this.alpha() ? i('transparent') : this,
                          c = u[o.cache] || o.to(u._rgba),
                          d = c.slice();
                        return (
                          (n = n[o.cache]),
                          l(o.props, function (e, r) {
                            var o = r.idx,
                              i = c[o],
                              s = n[o],
                              u = a[r.type] || {};
                            null !== s &&
                              (null === i
                                ? (d[o] = s)
                                : (u.mod &&
                                    (s - i > u.mod / 2
                                      ? (i += u.mod)
                                      : i - s > u.mod / 2 && (i -= u.mod)),
                                  (d[o] = f((s - i) * t + i, r))));
                          }),
                          this[r](d)
                        );
                      },
                      blend: function (t) {
                        if (1 === this._rgba[3]) return this;
                        var n = this._rgba.slice(),
                          r = n.pop(),
                          o = i(t)._rgba;
                        return i(
                          e.map(n, function (e, t) {
                            return (1 - r) * o[t] + r * e;
                          }),
                        );
                      },
                      toRgbaString: function () {
                        var t = 'rgba(',
                          n = e.map(this._rgba, function (e, t) {
                            return null == e ? (t > 2 ? 1 : 0) : e;
                          });
                        return (
                          1 === n[3] && (n.pop(), (t = 'rgb(')),
                          t + n.join() + ')'
                        );
                      },
                      toHslaString: function () {
                        var t = 'hsla(',
                          n = e.map(this.hsla(), function (e, t) {
                            return (
                              null == e && (e = t > 2 ? 1 : 0),
                              t && t < 3 && (e = Math.round(100 * e) + '%'),
                              e
                            );
                          });
                        return (
                          1 === n[3] && (n.pop(), (t = 'hsl(')),
                          t + n.join() + ')'
                        );
                      },
                      toHexString: function (t) {
                        var n = this._rgba.slice(),
                          r = n.pop();
                        return (
                          t && n.push(~~(255 * r)),
                          '#' +
                            e
                              .map(n, function (e) {
                                return 1 === (e = (e || 0).toString(16)).length
                                  ? '0' + e
                                  : e;
                              })
                              .join('')
                        );
                      },
                      toString: function () {
                        return 0 === this._rgba[3]
                          ? 'transparent'
                          : this.toRgbaString();
                      },
                    })),
                    (i.fn.parse.prototype = i.fn),
                    (s.hsla.to = function (e) {
                      if (null == e[0] || null == e[1] || null == e[2])
                        return [null, null, null, e[3]];
                      var t,
                        n,
                        r = e[0] / 255,
                        o = e[1] / 255,
                        i = e[2] / 255,
                        s = e[3],
                        a = Math.max(r, o, i),
                        u = Math.min(r, o, i),
                        c = a - u,
                        l = a + u,
                        f = 0.5 * l;
                      return (
                        (t =
                          u === a
                            ? 0
                            : r === a
                            ? (60 * (o - i)) / c + 360
                            : o === a
                            ? (60 * (i - r)) / c + 120
                            : (60 * (r - o)) / c + 240),
                        (n = 0 === c ? 0 : f <= 0.5 ? c / l : c / (2 - l)),
                        [Math.round(t) % 360, n, f, null == s ? 1 : s]
                      );
                    }),
                    (s.hsla.from = function (e) {
                      if (null == e[0] || null == e[1] || null == e[2])
                        return [null, null, null, e[3]];
                      var t = e[0] / 360,
                        n = e[1],
                        r = e[2],
                        o = e[3],
                        i = r <= 0.5 ? r * (1 + n) : r + n - r * n,
                        s = 2 * r - i;
                      return [
                        Math.round(255 * p(s, i, t + 1 / 3)),
                        Math.round(255 * p(s, i, t)),
                        Math.round(255 * p(s, i, t - 1 / 3)),
                        o,
                      ];
                    }),
                    l(s, function (t, n) {
                      var o = n.props,
                        s = n.cache,
                        a = n.to,
                        u = n.from;
                      (i.fn[t] = function (t) {
                        if (
                          (a && !this[s] && (this[s] = a(this._rgba)),
                          void 0 === t)
                        )
                          return this[s].slice();
                        var n,
                          r = e.type(t),
                          c = 'array' === r || 'object' === r ? t : arguments,
                          d = this[s].slice();
                        return (
                          l(o, function (e, t) {
                            var n = c['object' === r ? e : t.idx];
                            null == n && (n = d[t.idx]), (d[t.idx] = f(n, t));
                          }),
                          u ? (((n = i(u(d)))[s] = d), n) : i(d)
                        );
                      }),
                        l(o, function (n, o) {
                          i.fn[n] ||
                            (i.fn[n] = function (i) {
                              var s,
                                a = e.type(i),
                                u =
                                  'alpha' === n
                                    ? this._hsla
                                      ? 'hsla'
                                      : 'rgba'
                                    : t,
                                c = this[u](),
                                l = c[o.idx];
                              return 'undefined' === a
                                ? l
                                : ('function' === a &&
                                    ((i = i.call(this, l)), (a = e.type(i))),
                                  null == i && o.empty
                                    ? this
                                    : ('string' === a &&
                                        (s = r.exec(i)) &&
                                        (i =
                                          l +
                                          parseFloat(s[2]) *
                                            ('+' === s[1] ? 1 : -1)),
                                      (c[o.idx] = i),
                                      this[u](c)));
                            });
                        });
                    }),
                    (i.hook = function (t) {
                      var n = t.split(' ');
                      l(n, function (t, n) {
                        (e.cssHooks[n] = {
                          set: function (t, r) {
                            var o,
                              s,
                              a = '';
                            if (
                              'transparent' !== r &&
                              ('string' !== e.type(r) || (o = d(r)))
                            ) {
                              if (
                                ((r = i(o || r)), !u.rgba && 1 !== r._rgba[3])
                              ) {
                                for (
                                  s =
                                    'backgroundColor' === n ? t.parentNode : t;
                                  ('' === a || 'transparent' === a) &&
                                  s &&
                                  s.style;

                                )
                                  try {
                                    (a = e.css(s, 'backgroundColor')),
                                      (s = s.parentNode);
                                  } catch (c) {}
                                r = r.blend(
                                  a && 'transparent' !== a ? a : '_default',
                                );
                              }
                              r = r.toRgbaString();
                            }
                            try {
                              t.style[n] = r;
                            } catch (c) {}
                          },
                        }),
                          (e.fx.step[n] = function (t) {
                            t.colorInit ||
                              ((t.start = i(t.elem, n)),
                              (t.end = i(t.end)),
                              (t.colorInit = !0)),
                              e.cssHooks[n].set(
                                t.elem,
                                t.start.transition(t.end, t.pos),
                              );
                          });
                      });
                    }),
                    i.hook(
                      'backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor',
                    ),
                    (e.cssHooks.borderColor = {
                      expand: function (e) {
                        var t = {};
                        return (
                          l(
                            ['Top', 'Right', 'Bottom', 'Left'],
                            function (n, r) {
                              t['border' + r + 'Color'] = e;
                            },
                          ),
                          t
                        );
                      },
                    }),
                    (n = e.Color.names = {
                      aqua: '#00ffff',
                      black: '#000000',
                      blue: '#0000ff',
                      fuchsia: '#ff00ff',
                      gray: '#808080',
                      green: '#008000',
                      lime: '#00ff00',
                      maroon: '#800000',
                      navy: '#000080',
                      olive: '#808000',
                      purple: '#800080',
                      red: '#ff0000',
                      silver: '#c0c0c0',
                      teal: '#008080',
                      white: '#ffffff',
                      yellow: '#ffff00',
                      transparent: [null, null, null, 0],
                      _default: '#ffffff',
                    });
                })(n),
                (function () {
                  var t,
                    r = ['add', 'remove', 'toggle'],
                    o = {
                      border: 1,
                      borderBottom: 1,
                      borderColor: 1,
                      borderLeft: 1,
                      borderRight: 1,
                      borderTop: 1,
                      borderWidth: 1,
                      margin: 1,
                      padding: 1,
                    };
                  function i(t) {
                    var n,
                      r,
                      o = t.ownerDocument.defaultView
                        ? t.ownerDocument.defaultView.getComputedStyle(t, null)
                        : t.currentStyle,
                      i = {};
                    if (o && o.length && o[0] && o[o[0]])
                      for (r = o.length; r--; )
                        'string' == typeof o[(n = o[r])] &&
                          (i[e.camelCase(n)] = o[n]);
                    else for (n in o) 'string' == typeof o[n] && (i[n] = o[n]);
                    return i;
                  }
                  e.each(
                    [
                      'borderLeftStyle',
                      'borderRightStyle',
                      'borderBottomStyle',
                      'borderTopStyle',
                    ],
                    function (t, r) {
                      e.fx.step[r] = function (e) {
                        (('none' !== e.end && !e.setAttr) ||
                          (1 === e.pos && !e.setAttr)) &&
                          (n.style(e.elem, r, e.end), (e.setAttr = !0));
                      };
                    },
                  ),
                    e.fn.addBack ||
                      (e.fn.addBack = function (e) {
                        return this.add(
                          null == e
                            ? this.prevObject
                            : this.prevObject.filter(e),
                        );
                      }),
                    (e.effects.animateClass = function (t, n, s, a) {
                      var u = e.speed(n, s, a);
                      return this.queue(function () {
                        var n,
                          s = e(this),
                          a = s.attr('class') || '',
                          c = u.children ? s.find('*').addBack() : s;
                        (c = c.map(function () {
                          return { el: e(this), start: i(this) };
                        })),
                          (n = function () {
                            e.each(r, function (e, n) {
                              t[n] && s[n + 'Class'](t[n]);
                            });
                          })(),
                          (c = c.map(function () {
                            return (
                              (this.end = i(this.el[0])),
                              (this.diff = (function (t, n) {
                                var r,
                                  i,
                                  s = {};
                                for (r in n)
                                  (i = n[r]),
                                    t[r] !== i &&
                                      (o[r] ||
                                        (!e.fx.step[r] &&
                                          isNaN(parseFloat(i))) ||
                                        (s[r] = i));
                                return s;
                              })(this.start, this.end)),
                              this
                            );
                          })),
                          s.attr('class', a),
                          (c = c.map(function () {
                            var t = this,
                              n = e.Deferred(),
                              r = e.extend({}, u, {
                                queue: !1,
                                complete: function () {
                                  n.resolve(t);
                                },
                              });
                            return this.el.animate(this.diff, r), n.promise();
                          })),
                          e.when.apply(e, c.get()).done(function () {
                            n(),
                              e.each(arguments, function () {
                                var t = this.el;
                                e.each(this.diff, function (e) {
                                  t.css(e, '');
                                });
                              }),
                              u.complete.call(s[0]);
                          });
                      });
                    }),
                    e.fn.extend({
                      addClass:
                        ((t = e.fn.addClass),
                        function (n, r, o, i) {
                          return r
                            ? e.effects.animateClass.call(
                                this,
                                { add: n },
                                r,
                                o,
                                i,
                              )
                            : t.apply(this, arguments);
                        }),
                      removeClass: (function (t) {
                        return function (n, r, o, i) {
                          return arguments.length > 1
                            ? e.effects.animateClass.call(
                                this,
                                { remove: n },
                                r,
                                o,
                                i,
                              )
                            : t.apply(this, arguments);
                        };
                      })(e.fn.removeClass),
                      toggleClass: (function (t) {
                        return function (n, r, o, i, s) {
                          return 'boolean' == typeof r || void 0 === r
                            ? o
                              ? e.effects.animateClass.call(
                                  this,
                                  r ? { add: n } : { remove: n },
                                  o,
                                  i,
                                  s,
                                )
                              : t.apply(this, arguments)
                            : e.effects.animateClass.call(
                                this,
                                { toggle: n },
                                r,
                                o,
                                i,
                              );
                        };
                      })(e.fn.toggleClass),
                      switchClass: function (t, n, r, o, i) {
                        return e.effects.animateClass.call(
                          this,
                          { add: n, remove: t },
                          r,
                          o,
                          i,
                        );
                      },
                    });
                })(),
                (function () {
                  var t;
                  function n(t, n, r, o) {
                    return (
                      e.isPlainObject(t) && ((n = t), (t = t.effect)),
                      (t = { effect: t }),
                      null == n && (n = {}),
                      e.isFunction(n) && ((o = n), (r = null), (n = {})),
                      ('number' == typeof n || e.fx.speeds[n]) &&
                        ((o = r), (r = n), (n = {})),
                      e.isFunction(r) && ((o = r), (r = null)),
                      n && e.extend(t, n),
                      (r = r || n.duration),
                      (t.duration = e.fx.off
                        ? 0
                        : 'number' == typeof r
                        ? r
                        : r in e.fx.speeds
                        ? e.fx.speeds[r]
                        : e.fx.speeds._default),
                      (t.complete = o || n.complete),
                      t
                    );
                  }
                  function r(t) {
                    return (
                      !(t && 'number' != typeof t && !e.fx.speeds[t]) ||
                      ('string' == typeof t && !e.effects.effect[t]) ||
                      !!e.isFunction(t) ||
                      ('object' == typeof t && !t.effect)
                    );
                  }
                  function o(e, t) {
                    var n = t.outerWidth(),
                      r = t.outerHeight(),
                      o = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(
                        e,
                      ) || ['', 0, n, r, 0];
                    return {
                      top: parseFloat(o[1]) || 0,
                      right: 'auto' === o[2] ? n : parseFloat(o[2]),
                      bottom: 'auto' === o[3] ? r : parseFloat(o[3]),
                      left: parseFloat(o[4]) || 0,
                    };
                  }
                  e.expr &&
                    e.expr.filters &&
                    e.expr.filters.animated &&
                    (e.expr.filters.animated =
                      ((t = e.expr.filters.animated),
                      function (n) {
                        return !!e(n).data('ui-effects-animated') || t(n);
                      })),
                    !1 !== e.uiBackCompat &&
                      e.extend(e.effects, {
                        save: function (e, t) {
                          for (var n = 0, r = t.length; n < r; n++)
                            null !== t[n] &&
                              e.data('ui-effects-' + t[n], e[0].style[t[n]]);
                        },
                        restore: function (e, t) {
                          for (var n, r = 0, o = t.length; r < o; r++)
                            null !== t[r] &&
                              ((n = e.data('ui-effects-' + t[r])),
                              e.css(t[r], n));
                        },
                        setMode: function (e, t) {
                          return (
                            'toggle' === t &&
                              (t = e.is(':hidden') ? 'show' : 'hide'),
                            t
                          );
                        },
                        createWrapper: function (t) {
                          if (t.parent().is('.ui-effects-wrapper'))
                            return t.parent();
                          var n = {
                              width: t.outerWidth(!0),
                              height: t.outerHeight(!0),
                              float: t.css('float'),
                            },
                            r = e('<div></div>')
                              .addClass('ui-effects-wrapper')
                              .css({
                                fontSize: '100%',
                                background: 'transparent',
                                border: 'none',
                                margin: 0,
                                padding: 0,
                              }),
                            o = { width: t.width(), height: t.height() },
                            i = document.activeElement;
                          try {
                            i.id;
                          } catch (s) {
                            i = document.body;
                          }
                          return (
                            t.wrap(r),
                            (t[0] === i || e.contains(t[0], i)) &&
                              e(i).trigger('focus'),
                            (r = t.parent()),
                            'static' === t.css('position')
                              ? (r.css({ position: 'relative' }),
                                t.css({ position: 'relative' }))
                              : (e.extend(n, {
                                  position: t.css('position'),
                                  zIndex: t.css('z-index'),
                                }),
                                e.each(
                                  ['top', 'left', 'bottom', 'right'],
                                  function (e, r) {
                                    (n[r] = t.css(r)),
                                      isNaN(parseInt(n[r], 10)) &&
                                        (n[r] = 'auto');
                                  },
                                ),
                                t.css({
                                  position: 'relative',
                                  top: 0,
                                  left: 0,
                                  right: 'auto',
                                  bottom: 'auto',
                                })),
                            t.css(o),
                            r.css(n).show()
                          );
                        },
                        removeWrapper: function (t) {
                          var n = document.activeElement;
                          return (
                            t.parent().is('.ui-effects-wrapper') &&
                              (t.parent().replaceWith(t),
                              (t[0] === n || e.contains(t[0], n)) &&
                                e(n).trigger('focus')),
                            t
                          );
                        },
                      }),
                    e.extend(e.effects, {
                      version: '1.12.1',
                      define: function (t, n, r) {
                        return (
                          r || ((r = n), (n = 'effect')),
                          (e.effects.effect[t] = r),
                          (e.effects.effect[t].mode = n),
                          r
                        );
                      },
                      scaledDimensions: function (e, t, n) {
                        if (0 === t)
                          return {
                            height: 0,
                            width: 0,
                            outerHeight: 0,
                            outerWidth: 0,
                          };
                        var r = 'horizontal' !== n ? (t || 100) / 100 : 1,
                          o = 'vertical' !== n ? (t || 100) / 100 : 1;
                        return {
                          height: e.height() * o,
                          width: e.width() * r,
                          outerHeight: e.outerHeight() * o,
                          outerWidth: e.outerWidth() * r,
                        };
                      },
                      clipToBox: function (e) {
                        return {
                          width: e.clip.right - e.clip.left,
                          height: e.clip.bottom - e.clip.top,
                          left: e.clip.left,
                          top: e.clip.top,
                        };
                      },
                      unshift: function (e, t, n) {
                        var r = e.queue();
                        t > 1 &&
                          r.splice.apply(r, [1, 0].concat(r.splice(t, n))),
                          e.dequeue();
                      },
                      saveStyle: function (e) {
                        e.data('ui-effects-style', e[0].style.cssText);
                      },
                      restoreStyle: function (e) {
                        (e[0].style.cssText = e.data('ui-effects-style') || ''),
                          e.removeData('ui-effects-style');
                      },
                      mode: function (e, t) {
                        var n = e.is(':hidden');
                        return (
                          'toggle' === t && (t = n ? 'show' : 'hide'),
                          (n ? 'hide' === t : 'show' === t) && (t = 'none'),
                          t
                        );
                      },
                      getBaseline: function (e, t) {
                        var n, r;
                        switch (e[0]) {
                          case 'top':
                            n = 0;
                            break;
                          case 'middle':
                            n = 0.5;
                            break;
                          case 'bottom':
                            n = 1;
                            break;
                          default:
                            n = e[0] / t.height;
                        }
                        switch (e[1]) {
                          case 'left':
                            r = 0;
                            break;
                          case 'center':
                            r = 0.5;
                            break;
                          case 'right':
                            r = 1;
                            break;
                          default:
                            r = e[1] / t.width;
                        }
                        return { x: r, y: n };
                      },
                      createPlaceholder: function (t) {
                        var n,
                          r = t.css('position'),
                          o = t.position();
                        return (
                          t
                            .css({
                              marginTop: t.css('marginTop'),
                              marginBottom: t.css('marginBottom'),
                              marginLeft: t.css('marginLeft'),
                              marginRight: t.css('marginRight'),
                            })
                            .outerWidth(t.outerWidth())
                            .outerHeight(t.outerHeight()),
                          /^(static|relative)/.test(r) &&
                            ((r = 'absolute'),
                            (n = e('<' + t[0].nodeName + '>')
                              .insertAfter(t)
                              .css({
                                display: /^(inline|ruby)/.test(t.css('display'))
                                  ? 'inline-block'
                                  : 'block',
                                visibility: 'hidden',
                                marginTop: t.css('marginTop'),
                                marginBottom: t.css('marginBottom'),
                                marginLeft: t.css('marginLeft'),
                                marginRight: t.css('marginRight'),
                                float: t.css('float'),
                              })
                              .outerWidth(t.outerWidth())
                              .outerHeight(t.outerHeight())
                              .addClass('ui-effects-placeholder')),
                            t.data('ui-effects-placeholder', n)),
                          t.css({ position: r, left: o.left, top: o.top }),
                          n
                        );
                      },
                      removePlaceholder: function (e) {
                        var t = 'ui-effects-placeholder',
                          n = e.data(t);
                        n && (n.remove(), e.removeData(t));
                      },
                      cleanUp: function (t) {
                        e.effects.restoreStyle(t),
                          e.effects.removePlaceholder(t);
                      },
                      setTransition: function (t, n, r, o) {
                        return (
                          (o = o || {}),
                          e.each(n, function (e, n) {
                            var i = t.cssUnit(n);
                            i[0] > 0 && (o[n] = i[0] * r + i[1]);
                          }),
                          o
                        );
                      },
                    }),
                    e.fn.extend({
                      effect: function () {
                        var t = n.apply(this, arguments),
                          r = e.effects.effect[t.effect],
                          o = r.mode,
                          i = t.queue,
                          s = i || 'fx',
                          a = t.complete,
                          u = t.mode,
                          c = [],
                          l = function (t) {
                            var n = e(this),
                              r = e.effects.mode(n, u) || o;
                            n.data('ui-effects-animated', !0),
                              c.push(r),
                              o &&
                                ('show' === r || (r === o && 'hide' === r)) &&
                                n.show(),
                              (o && 'none' === r) || e.effects.saveStyle(n),
                              e.isFunction(t) && t();
                          };
                        if (e.fx.off || !r)
                          return u
                            ? this[u](t.duration, a)
                            : this.each(function () {
                                a && a.call(this);
                              });
                        function f(n) {
                          var i = e(this);
                          function s() {
                            e.isFunction(a) && a.call(i[0]),
                              e.isFunction(n) && n();
                          }
                          (t.mode = c.shift()),
                            !1 === e.uiBackCompat || o
                              ? 'none' === t.mode
                                ? (i[u](), s())
                                : r.call(i[0], t, function () {
                                    i.removeData('ui-effects-animated'),
                                      e.effects.cleanUp(i),
                                      'hide' === t.mode && i.hide(),
                                      s();
                                  })
                              : (i.is(':hidden') ? 'hide' === u : 'show' === u)
                              ? (i[u](), s())
                              : r.call(i[0], t, s);
                        }
                        return !1 === i
                          ? this.each(l).each(f)
                          : this.queue(s, l).queue(s, f);
                      },
                      show: (function (e) {
                        return function (t) {
                          if (r(t)) return e.apply(this, arguments);
                          var o = n.apply(this, arguments);
                          return (o.mode = 'show'), this.effect.call(this, o);
                        };
                      })(e.fn.show),
                      hide: (function (e) {
                        return function (t) {
                          if (r(t)) return e.apply(this, arguments);
                          var o = n.apply(this, arguments);
                          return (o.mode = 'hide'), this.effect.call(this, o);
                        };
                      })(e.fn.hide),
                      toggle: (function (e) {
                        return function (t) {
                          if (r(t) || 'boolean' == typeof t)
                            return e.apply(this, arguments);
                          var o = n.apply(this, arguments);
                          return (o.mode = 'toggle'), this.effect.call(this, o);
                        };
                      })(e.fn.toggle),
                      cssUnit: function (t) {
                        var n = this.css(t),
                          r = [];
                        return (
                          e.each(['em', 'px', '%', 'pt'], function (e, t) {
                            n.indexOf(t) > 0 && (r = [parseFloat(n), t]);
                          }),
                          r
                        );
                      },
                      cssClip: function (e) {
                        return e
                          ? this.css(
                              'clip',
                              'rect(' +
                                e.top +
                                'px ' +
                                e.right +
                                'px ' +
                                e.bottom +
                                'px ' +
                                e.left +
                                'px)',
                            )
                          : o(this.css('clip'), this);
                      },
                      transfer: function (t, n) {
                        var r = e(this),
                          o = e(t.to),
                          i = 'fixed' === o.css('position'),
                          s = e('body'),
                          a = i ? s.scrollTop() : 0,
                          u = i ? s.scrollLeft() : 0,
                          c = o.offset(),
                          l = {
                            top: c.top - a,
                            left: c.left - u,
                            height: o.innerHeight(),
                            width: o.innerWidth(),
                          },
                          f = r.offset(),
                          d = e("<div class='ui-effects-transfer'></div>")
                            .appendTo('body')
                            .addClass(t.className)
                            .css({
                              top: f.top - a,
                              left: f.left - u,
                              height: r.innerHeight(),
                              width: r.innerWidth(),
                              position: i ? 'fixed' : 'absolute',
                            })
                            .animate(l, t.duration, t.easing, function () {
                              d.remove(), e.isFunction(n) && n();
                            });
                      },
                    }),
                    (e.fx.step.clip = function (t) {
                      t.clipInit ||
                        ((t.start = e(t.elem).cssClip()),
                        'string' == typeof t.end && (t.end = o(t.end, t.elem)),
                        (t.clipInit = !0)),
                        e(t.elem).cssClip({
                          top: t.pos * (t.end.top - t.start.top) + t.start.top,
                          right:
                            t.pos * (t.end.right - t.start.right) +
                            t.start.right,
                          bottom:
                            t.pos * (t.end.bottom - t.start.bottom) +
                            t.start.bottom,
                          left:
                            t.pos * (t.end.left - t.start.left) + t.start.left,
                        });
                    });
                })(),
                (t = {}),
                e.each(
                  ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'],
                  function (e, n) {
                    t[n] = function (t) {
                      return Math.pow(t, e + 2);
                    };
                  },
                ),
                e.extend(t, {
                  Sine: function (e) {
                    return 1 - Math.cos((e * Math.PI) / 2);
                  },
                  Circ: function (e) {
                    return 1 - Math.sqrt(1 - e * e);
                  },
                  Elastic: function (e) {
                    return 0 === e || 1 === e
                      ? e
                      : -Math.pow(2, 8 * (e - 1)) *
                          Math.sin(((80 * (e - 1) - 7.5) * Math.PI) / 15);
                  },
                  Back: function (e) {
                    return e * e * (3 * e - 2);
                  },
                  Bounce: function (e) {
                    for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11; );
                    return (
                      1 / Math.pow(4, 3 - n) -
                      7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                    );
                  },
                }),
                e.each(t, function (t, n) {
                  (e.easing['easeIn' + t] = n),
                    (e.easing['easeOut' + t] = function (e) {
                      return 1 - n(1 - e);
                    }),
                    (e.easing['easeInOut' + t] = function (e) {
                      return e < 0.5 ? n(2 * e) / 2 : 1 - n(-2 * e + 2) / 2;
                    });
                }),
                e.effects
              );
            })
              ? r.apply(t, o)
              : r) || (e.exports = i);
    },
    '/B3w': function (e, t) {
      var n = Math.ceil,
        r = Math.floor;
      e.exports = function (e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
      };
    },
    '/Hub': function (e, t, n) {
      var r = n('vRGa'),
        o = n('yUtn'),
        i = n('6Ngl'),
        s = n('YN/q'),
        a = n('isQe'),
        u = n('O6f/'),
        c = Object.getOwnPropertyDescriptor;
      t.f = n('nULH')
        ? c
        : function (e, t) {
            if (((e = i(e)), (t = s(t, !0)), u))
              try {
                return c(e, t);
              } catch (n) {}
            if (a(e, t)) return o(!r.f.call(e, t), e[t]);
          };
    },
    '/SnT': function (e, t, n) {
      'use strict';
      var r = [
        776,
        2359,
        2359,
        2367,
        2367,
        2984,
        3007,
        3021,
        3633,
        3635,
        3648,
        3657,
        4352,
        4449,
        4520,
      ];
      function o(e) {
        if ('string' != typeof e)
          throw new Error('string cannot be undefined or null');
        for (var t = [], n = 0, r = 0; n < e.length; )
          c(e[n + (r += i(n + r, e))]) && r++,
            a(e[n + r]) && r++,
            u(e[n + r]) && r++,
            l(e[n + r])
              ? r++
              : (t.push(e.substring(n, n + r)), (n += r), (r = 0));
        return t;
      }
      function i(e, t) {
        var n = t[e];
        if (
          !(function (e) {
            return e && d(e[0].charCodeAt(0), 55296, 56319);
          })(n) ||
          e === t.length - 1
        )
          return 1;
        var r = n + t[e + 1],
          o = t.substring(e + 2, e + 5);
        return (s(r) && s(o)) ||
          (function (e) {
            return d(f(e), 127995, 127999);
          })(o)
          ? 4
          : 2;
      }
      function s(e) {
        return d(f(e), 127462, 127487);
      }
      function a(e) {
        return 'string' == typeof e && d(e.charCodeAt(0), 65024, 65039);
      }
      function u(e) {
        return 'string' == typeof e && d(e.charCodeAt(0), 8400, 8447);
      }
      function c(e) {
        return 'string' == typeof e && -1 !== r.indexOf(e.charCodeAt(0));
      }
      function l(e) {
        return 'string' == typeof e && 8205 === e.charCodeAt(0);
      }
      function f(e) {
        return (
          ((e.charCodeAt(0) - 55296) << 10) + (e.charCodeAt(1) - 56320) + 65536
        );
      }
      function d(e, t, n) {
        return e >= t && e <= n;
      }
      (e.exports = o),
        (e.exports.substr = function (e, t, n) {
          var r = o(e);
          if (void 0 === t) return e;
          if (t >= r.length) return '';
          var i = r.length - t,
            s = t + (void 0 === n ? i : n);
          return s > t + i && (s = void 0), r.slice(t, s).join('');
        });
    },
    '0+LD': function (e, t, n) {
      'use strict';
      var r = n('KGgr'),
        o = n('vVR7'),
        i = n('AZRH'),
        s = n('OHC2'),
        a = n('PAQY'),
        u = n('BMTb'),
        c = n('OKbE'),
        l = n('zY5Q'),
        f = n('u52/'),
        d = n('zP2l'),
        p = n('AuAe'),
        h = n('e08H');
      e.exports = function (e, t, n, g, v, m) {
        var y = r[e],
          b = y,
          _ = v ? 'set' : 'add',
          w = b && b.prototype,
          x = {},
          S = function (e) {
            var t = w[e];
            i(
              w,
              e,
              'delete' == e || 'has' == e
                ? function (e) {
                    return !(m && !l(e)) && t.call(this, 0 === e ? 0 : e);
                  }
                : 'get' == e
                ? function (e) {
                    return m && !l(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
                  }
                : 'add' == e
                ? function (e) {
                    return t.call(this, 0 === e ? 0 : e), this;
                  }
                : function (e, n) {
                    return t.call(this, 0 === e ? 0 : e, n), this;
                  },
            );
          };
        if (
          'function' == typeof b &&
          (m ||
            (w.forEach &&
              !f(function () {
                new b().entries().next();
              })))
        ) {
          var E = new b(),
            O = E[_](m ? {} : -0, 1) != E,
            T = f(function () {
              E.has(1);
            }),
            k = d(function (e) {
              new b(e);
            }),
            N =
              !m &&
              f(function () {
                for (var e = new b(), t = 5; t--; ) e[_](t, t);
                return !e.has(-0);
              });
          k ||
            (((b = t(function (t, n) {
              c(t, b, e);
              var r = h(new y(), t, b);
              return null != n && u(n, v, r[_], r), r;
            })).prototype = w),
            (w.constructor = b)),
            (T || N) && (S('delete'), S('has'), v && S('get')),
            (N || O) && S(_),
            m && w.clear && delete w.clear;
        } else
          (b = g.getConstructor(t, e, v, _)), s(b.prototype, n), (a.NEED = !0);
        return (
          p(b, e),
          (x[e] = b),
          o(o.G + o.W + o.F * (b != y), x),
          m || g.setStrong(b, e, v),
          b
        );
      };
    },
    '0+qN': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r,
        o = n('C1QN'),
        i = (r = o) && r.__esModule ? r : { default: r };
      function s(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      var a = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.options = t),
            (this.whitelist = this.options.whitelist || !1),
            (this.logger = i.default.create('languageUtils'));
        }
        return (
          (e.prototype.getLanguagePartFromCode = function (e) {
            if (e.indexOf('-') < 0) return e;
            var t = e.split('-');
            return this.formatLanguageCode(
              ['NB-NO', 'NN-NO', 'nb-NO', 'nn-NO', 'nb-no', 'nn-no'].indexOf(
                e,
              ) > -1
                ? t[1].toLowerCase()
                : t[0],
            );
          }),
          (e.prototype.formatLanguageCode = function (e) {
            if ('string' == typeof e && e.indexOf('-') > -1) {
              var t = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'],
                n = e.split('-');
              return (
                this.options.lowerCaseLng
                  ? (n = n.map(function (e) {
                      return e.toLowerCase();
                    }))
                  : 2 === n.length
                  ? ((n[0] = n[0].toLowerCase()),
                    (n[1] = n[1].toUpperCase()),
                    t.indexOf(n[1].toLowerCase()) > -1 &&
                      (n[1] = s(n[1].toLowerCase())))
                  : 3 === n.length &&
                    ((n[0] = n[0].toLowerCase()),
                    2 === n[1].length && (n[1] = n[1].toUpperCase()),
                    'sgn' !== n[0] &&
                      2 === n[2].length &&
                      (n[2] = n[2].toUpperCase()),
                    t.indexOf(n[1].toLowerCase()) > -1 &&
                      (n[1] = s(n[1].toLowerCase())),
                    t.indexOf(n[2].toLowerCase()) > -1 &&
                      (n[2] = s(n[2].toLowerCase()))),
                n.join('-')
              );
            }
            return this.options.cleanCode || this.options.lowerCaseLng
              ? e.toLowerCase()
              : e;
          }),
          (e.prototype.isWhitelisted = function (e, t) {
            return (
              ('languageOnly' === this.options.load ||
                (this.options.nonExplicitWhitelist && !t)) &&
                (e = this.getLanguagePartFromCode(e)),
              !this.whitelist ||
                !this.whitelist.length ||
                this.whitelist.indexOf(e) > -1
            );
          }),
          (e.prototype.toResolveHierarchy = function (e, t) {
            var n = this;
            'string' == typeof (t = t || this.options.fallbackLng || []) &&
              (t = [t]);
            var r = [],
              o = function (e) {
                var t =
                  !(arguments.length <= 1 || void 0 === arguments[1]) &&
                  arguments[1];
                n.isWhitelisted(e, t)
                  ? r.push(e)
                  : n.logger.warn(
                      'rejecting non-whitelisted language code: ' + e,
                    );
              };
            return (
              'string' == typeof e && e.indexOf('-') > -1
                ? ('languageOnly' !== this.options.load &&
                    o(this.formatLanguageCode(e), !0),
                  'currentOnly' !== this.options.load &&
                    o(this.getLanguagePartFromCode(e)))
                : 'string' == typeof e && o(this.formatLanguageCode(e)),
              t.forEach(function (e) {
                r.indexOf(e) < 0 && o(n.formatLanguageCode(e));
              }),
              r
            );
          }),
          e
        );
      })();
      t.default = a;
    },
    '04I0': function (e, t, n) {
      var r = n('vVR7'),
        o = n('Kc4g'),
        i = Math.abs;
      r(r.S, 'Number', {
        isSafeInteger: function (e) {
          return o(e) && i(e) <= 9007199254740991;
        },
      });
    },
    '12Jd': function (e, t, n) {
      var r = n('xjCr'),
        o = n('PPId'),
        i = n('vRGa');
      e.exports = function (e) {
        var t = r(e),
          n = o.f;
        if (n)
          for (var s, a = n(e), u = i.f, c = 0; a.length > c; )
            u.call(e, (s = a[c++])) && t.push(s);
        return t;
      };
    },
    '12Rd': function (e, t, n) {
      var r = n('qKVQ');
      e.exports = Object('z').propertyIsEnumerable(0)
        ? Object
        : function (e) {
            return 'String' == r(e) ? e.split('') : Object(e);
          };
    },
    '17C/': function (e, t, n) {
      var r = n('9TFj'),
        o = n('zY5Q'),
        i = n('UyYM');
      e.exports = function (e, t) {
        if ((r(e), o(t) && t.constructor === e)) return t;
        var n = i.f(e);
        return (0, n.resolve)(t), n.promise;
      };
    },
    '18Fm': function (e, t, n) {
      'use strict';
      var r = n('XSq2'),
        o = n('VgLE'),
        i = n('bSmq');
      e.exports = function (e) {
        for (
          var t = r(this),
            n = i(t.length),
            s = arguments.length,
            a = o(s > 1 ? arguments[1] : void 0, n),
            u = s > 2 ? arguments[2] : void 0,
            c = void 0 === u ? n : o(u, n);
          c > a;

        )
          t[a++] = e;
        return t;
      };
    },
    '1Vm/': function (e, t) {
      e.exports = function (e) {
        if ('function' != typeof e) throw TypeError(e + ' is not a function!');
        return e;
      };
    },
    '1npb': function (e, t, n) {
      var r = n('fnBu');
      e.exports = function (e, t) {
        return new (r(e))(t);
      };
    },
    '1oAu': function (e, t, n) {
      'use strict';
      !(function (e, t, n) {
        function r(n, r) {
          r = r || n + 'outside';
          var o = e(),
            i = n + '.' + r + '-special-event';
          function s(t) {
            e(o).each(function () {
              var n = e(this);
              this === t.target ||
                n.has(t.target).length ||
                n.triggerHandler(r, [t.target]);
            });
          }
          e.event.special[r] = {
            setup: function () {
              delete (o = o.add(this)).prevObject,
                1 === o.length && e(t).bind(i, s);
            },
            teardown: function () {
              delete (o = o.not(this)).prevObject,
                0 === o.length && e(t).unbind(i);
            },
            add: function (e) {
              var t = e.handler;
              e.handler = function (e, n) {
                (e.target = n), t.apply(this, arguments);
              };
            },
          };
        }
        e.map(
          'click dblclick mousemove mousedown mouseup mouseover mouseout change select submit keydown keypress keyup'.split(
            ' ',
          ),
          function (e) {
            r(e);
          },
        ),
          r('focusin', 'focusoutside'),
          r('focusout', 'bluroutside'),
          Modernizr.mobiletouch &&
            (r('touchstart', 'mousedownoutside'),
            r('touchmove', 'mousemoveoutside'),
            r('touchend', 'mouseupoutside')),
          (e.addOutsideEvent = r);
      })(jQuery, document);
    },
    '1yTv': function (e, t, n) {
      var r = n('vVR7');
      r(r.P, 'Array', { fill: n('18Fm') }), n('OlM/')('fill');
    },
    '1zYV': function (e, t, n) {
      var r = n('vVR7'),
        o = n('VgLE'),
        i = String.fromCharCode,
        s = String.fromCodePoint;
      r(r.S + r.F * (!!s && 1 != s.length), 'String', {
        fromCodePoint: function (e) {
          for (var t, n = [], r = arguments.length, s = 0; r > s; ) {
            if (((t = +arguments[s++]), o(t, 1114111) !== t))
              throw RangeError(t + ' is not a valid code point');
            n.push(
              t < 65536
                ? i(t)
                : i(55296 + ((t -= 65536) >> 10), (t % 1024) + 56320),
            );
          }
          return n.join('');
        },
      });
    },
    '2+4i': function (e, t, n) {
      'use strict';
      !(function () {
        var e = function () {};
        void 0 === window.console && (window.console = {});
        for (
          var t = window.console,
            n = [
              'dir',
              'log',
              'time',
              'info',
              'warn',
              'count',
              'clear',
              'debug',
              'error',
              'group',
              'trace',
              'assert',
              'dirxml',
              'profile',
              'timeEnd',
              'groupEnd',
              'profileEnd',
              'timeStamp',
              'exception',
              'table',
              'notifyFirebug',
              'groupCollapsed',
              'getFirebugElement',
              'firebug',
              'userObjects',
              'someMethodForAssetHashChange',
            ],
            r = 0,
            o = n.length;
          r < o;
          r++
        ) {
          var i = n[r];
          if (void 0 === t[i])
            try {
              t[i] = e;
            } catch (c) {}
        }
        var s = function (e, t, n, r, o) {
          var i = new Date();
          (i =
            i.getHours() +
            ':' +
            i.getMinutes() +
            ':' +
            i.getSeconds() +
            '.' +
            i.getMilliseconds()),
            null != o
              ? window.__tv_js_errors.push(
                  e +
                    ' (found at ' +
                    t +
                    ', line ' +
                    n +
                    ' at time ' +
                    i +
                    ', stack:<br> ' +
                    o.stack +
                    ')<br><br>',
                )
              : window.__tv_js_errors.push(
                  e + ' (found at ' + t + ', line ' + n + ' at time ' + i + ')',
                );
        };
        window.__tv_js_errors = [];
        var a = window.onerror;
        window.onerror = function (e, t, n, r, o) {
          if ((s(e, t, n, 0, o), a))
            try {
              a.apply(window, arguments);
            } catch (c) {}
        };
        var u = window.onunhandledrejection;
        window.onunhandledrejection = function (e) {
          var t = e.reason;
          if (
            (t instanceof Error
              ? s(t.message, window.location, NaN, 0, t)
              : s(JSON.stringify(t), window.location, NaN),
            u)
          )
            try {
              u.apply(window, arguments);
            } catch (e) {}
        };
      })();
    },
    '285N': function (e, t, n) {
      'use strict';
      var r = n('gPPl').f,
        o = n('Vrag'),
        i = n('OHC2'),
        s = n('hvJ5'),
        a = n('OKbE'),
        u = n('BMTb'),
        c = n('Fu1i'),
        l = n('JwWU'),
        f = n('ybEM'),
        d = n('nULH'),
        p = n('PAQY').fastKey,
        h = n('utAV'),
        g = d ? '_s' : 'size',
        v = function (e, t) {
          var n,
            r = p(t);
          if ('F' !== r) return e._i[r];
          for (n = e._f; n; n = n.n) if (n.k == t) return n;
        };
      e.exports = {
        getConstructor: function (e, t, n, c) {
          var l = e(function (e, r) {
            a(e, l, t, '_i'),
              (e._t = t),
              (e._i = o(null)),
              (e._f = void 0),
              (e._l = void 0),
              (e[g] = 0),
              null != r && u(r, n, e[c], e);
          });
          return (
            i(l.prototype, {
              clear: function () {
                for (var e = h(this, t), n = e._i, r = e._f; r; r = r.n)
                  (r.r = !0), r.p && (r.p = r.p.n = void 0), delete n[r.i];
                (e._f = e._l = void 0), (e[g] = 0);
              },
              delete: function (e) {
                var n = h(this, t),
                  r = v(n, e);
                if (r) {
                  var o = r.n,
                    i = r.p;
                  delete n._i[r.i],
                    (r.r = !0),
                    i && (i.n = o),
                    o && (o.p = i),
                    n._f == r && (n._f = o),
                    n._l == r && (n._l = i),
                    n[g]--;
                }
                return !!r;
              },
              forEach: function (e) {
                h(this, t);
                for (
                  var n,
                    r = s(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                  (n = n ? n.n : this._f);

                )
                  for (r(n.v, n.k, this); n && n.r; ) n = n.p;
              },
              has: function (e) {
                return !!v(h(this, t), e);
              },
            }),
            d &&
              r(l.prototype, 'size', {
                get: function () {
                  return h(this, t)[g];
                },
              }),
            l
          );
        },
        def: function (e, t, n) {
          var r,
            o,
            i = v(e, t);
          return (
            i
              ? (i.v = n)
              : ((e._l = i = {
                  i: (o = p(t, !0)),
                  k: t,
                  v: n,
                  p: (r = e._l),
                  n: void 0,
                  r: !1,
                }),
                e._f || (e._f = i),
                r && (r.n = i),
                e[g]++,
                'F' !== o && (e._i[o] = i)),
            e
          );
        },
        getEntry: v,
        setStrong: function (e, t, n) {
          c(
            e,
            t,
            function (e, n) {
              (this._t = h(e, t)), (this._k = n), (this._l = void 0);
            },
            function () {
              for (var e = this._k, t = this._l; t && t.r; ) t = t.p;
              return this._t && (this._l = t = t ? t.n : this._t._f)
                ? l(0, 'keys' == e ? t.k : 'values' == e ? t.v : [t.k, t.v])
                : ((this._t = void 0), l(1));
            },
            n ? 'entries' : 'values',
            !n,
            !0,
          ),
            f(t);
        },
      };
    },
    '2gyY': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol
                  ? 'symbol'
                  : typeof e;
              },
        o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = m(n('C1QN')),
        s = m(n('Xs5p')),
        a = m(n('udhc')),
        u = m(n('YRoQ')),
        c = m(n('0+qN')),
        l = m(n('q/kp')),
        f = m(n('5gT+')),
        d = m(n('EMvu')),
        p = m(n('VH+M')),
        h = n('RWYM'),
        g = m(n('pbwk')),
        v = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        })(n('B1JA'));
      function m(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function y(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function b(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function _(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t,
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (function (e, t) {
                  for (
                    var n = Object.getOwnPropertyNames(t), r = 0;
                    r < n.length;
                    r++
                  ) {
                    var o = n[r],
                      i = Object.getOwnPropertyDescriptor(t, o);
                    i &&
                      i.configurable &&
                      void 0 === e[o] &&
                      Object.defineProperty(e, o, i);
                  }
                })(e, t));
      }
      var w = (function (e) {
        function t() {
          var n =
              arguments.length <= 0 || void 0 === arguments[0]
                ? {}
                : arguments[0],
            r = arguments[1];
          y(this, t);
          var o = b(this, e.call(this));
          return (
            (o.options = (0, h.transformOptions)(n)),
            (o.services = {}),
            (o.logger = i.default),
            (o.modules = {}),
            r && !o.isInitialized && o.init(n, r),
            o
          );
        }
        return (
          _(t, e),
          (t.prototype.init = function (e, t) {
            var n = this;
            function r(e) {
              if (e) return 'function' == typeof e ? new e() : e;
            }
            if (
              ('function' == typeof e && ((t = e), (e = {})),
              e || (e = {}),
              'v1' === e.compatibilityAPI
                ? (this.options = o(
                    {},
                    (0, h.get)(),
                    (0, h.transformOptions)(v.convertAPIOptions(e)),
                    {},
                  ))
                : 'v1' === e.compatibilityJSON
                ? (this.options = o(
                    {},
                    (0, h.get)(),
                    (0, h.transformOptions)(v.convertJSONOptions(e)),
                    {},
                  ))
                : (this.options = o(
                    {},
                    (0, h.get)(),
                    this.options,
                    (0, h.transformOptions)(e),
                  )),
              t || (t = function () {}),
              !this.options.isClone)
            ) {
              this.modules.logger
                ? i.default.init(r(this.modules.logger), this.options)
                : i.default.init(null, this.options);
              var s = new c.default(this.options);
              this.store = new a.default(this.options.resources, this.options);
              var g = this.services;
              (g.logger = i.default),
                (g.resourceStore = this.store),
                g.resourceStore.on('added removed', function (e, t) {
                  g.cacheConnector.save();
                }),
                (g.languageUtils = s),
                (g.pluralResolver = new l.default(s, {
                  prepend: this.options.pluralSeparator,
                  compatibilityJSON: this.options.compatibilityJSON,
                })),
                (g.interpolator = new f.default(this.options)),
                (g.backendConnector = new d.default(
                  r(this.modules.backend),
                  g.resourceStore,
                  g,
                  this.options,
                )),
                g.backendConnector.on('*', function (e) {
                  for (
                    var t = arguments.length,
                      r = Array(t > 1 ? t - 1 : 0),
                      o = 1;
                    o < t;
                    o++
                  )
                    r[o - 1] = arguments[o];
                  n.emit.apply(n, [e].concat(r));
                }),
                g.backendConnector.on('loaded', function (e) {
                  g.cacheConnector.save();
                }),
                (g.cacheConnector = new p.default(
                  r(this.modules.cache),
                  g.resourceStore,
                  g,
                  this.options,
                )),
                g.cacheConnector.on('*', function (e) {
                  for (
                    var t = arguments.length,
                      r = Array(t > 1 ? t - 1 : 0),
                      o = 1;
                    o < t;
                    o++
                  )
                    r[o - 1] = arguments[o];
                  n.emit.apply(n, [e].concat(r));
                }),
                this.modules.languageDetector &&
                  ((g.languageDetector = r(this.modules.languageDetector)),
                  g.languageDetector.init(
                    g,
                    this.options.detection,
                    this.options,
                  )),
                (this.translator = new u.default(this.services, this.options)),
                this.translator.on('*', function (e) {
                  for (
                    var t = arguments.length,
                      r = Array(t > 1 ? t - 1 : 0),
                      o = 1;
                    o < t;
                    o++
                  )
                    r[o - 1] = arguments[o];
                  n.emit.apply(n, [e].concat(r));
                });
            }
            [
              'getResource',
              'addResource',
              'addResources',
              'addResourceBundle',
              'removeResourceBundle',
              'hasResourceBundle',
              'getResourceBundle',
            ].forEach(function (e) {
              n[e] = function () {
                return this.store[e].apply(this.store, arguments);
              };
            }),
              'v1' === this.options.compatibilityAPI &&
                v.appendBackwardsAPI(this);
            var m = function () {
              n.changeLanguage(n.options.lng, function (e, r) {
                n.emit('initialized', n.options),
                  n.logger.log('initialized', n.options),
                  t(e, r);
              });
            };
            return (
              this.options.resources || !this.options.initImmediate
                ? m()
                : setTimeout(m, 0),
              this
            );
          }),
          (t.prototype.loadResources = function (e) {
            var t = this;
            if ((e || (e = function () {}), this.options.resources)) e(null);
            else {
              var n = (function () {
                if (t.language && 'cimode' === t.language.toLowerCase())
                  return { v: e() };
                var n = [],
                  r = function (e) {
                    t.services.languageUtils
                      .toResolveHierarchy(e)
                      .forEach(function (e) {
                        n.indexOf(e) < 0 && n.push(e);
                      });
                  };
                r(t.language),
                  t.options.preload &&
                    t.options.preload.forEach(function (e) {
                      r(e);
                    }),
                  t.services.cacheConnector.load(n, t.options.ns, function () {
                    t.services.backendConnector.load(n, t.options.ns, e);
                  });
              })();
              if ('object' === (void 0 === n ? 'undefined' : r(n))) return n.v;
            }
          }),
          (t.prototype.reloadResources = function (e, t) {
            e || (e = this.languages),
              t || (t = this.options.ns),
              this.services.backendConnector.reload(e, t);
          }),
          (t.prototype.use = function (e) {
            return (
              'backend' === e.type && (this.modules.backend = e),
              'cache' === e.type && (this.modules.cache = e),
              ('logger' === e.type || (e.log && e.warn && e.warn)) &&
                (this.modules.logger = e),
              'languageDetector' === e.type &&
                (this.modules.languageDetector = e),
              'postProcessor' === e.type && g.default.addPostProcessor(e),
              this
            );
          }),
          (t.prototype.changeLanguage = function (e, t) {
            var n = this;
            !e &&
              this.services.languageDetector &&
              (e = this.services.languageDetector.detect()),
              e &&
                ((this.language = e),
                (this.languages = this.services.languageUtils.toResolveHierarchy(
                  e,
                )),
                this.translator.changeLanguage(e),
                this.services.languageDetector &&
                  this.services.languageDetector.cacheUserLanguage(e)),
              this.loadResources(function (r) {
                !(function (r) {
                  e &&
                    (n.emit('languageChanged', e),
                    n.logger.log('languageChanged', e)),
                    t &&
                      t(r, function () {
                        for (
                          var e = arguments.length, t = Array(e), r = 0;
                          r < e;
                          r++
                        )
                          t[r] = arguments[r];
                        return n.t.apply(n, t);
                      });
                })(r);
              });
          }),
          (t.prototype.getFixedT = function (e, t) {
            var n = this,
              r = function e(t, r) {
                return (
                  ((r = r || {}).lng = r.lng || e.lng),
                  (r.ns = r.ns || e.ns),
                  n.t(t, r)
                );
              };
            return (r.lng = e), (r.ns = t), r;
          }),
          (t.prototype.t = function () {
            return (
              this.translator &&
              this.translator.translate.apply(this.translator, arguments)
            );
          }),
          (t.prototype.exists = function () {
            return (
              this.translator &&
              this.translator.exists.apply(this.translator, arguments)
            );
          }),
          (t.prototype.setDefaultNamespace = function (e) {
            this.options.defaultNS = e;
          }),
          (t.prototype.loadNamespaces = function (e, t) {
            var n = this;
            if (!this.options.ns) return t && t();
            'string' == typeof e && (e = [e]),
              e.forEach(function (e) {
                n.options.ns.indexOf(e) < 0 && n.options.ns.push(e);
              }),
              this.loadResources(t);
          }),
          (t.prototype.loadLanguages = function (e, t) {
            'string' == typeof e && (e = [e]);
            var n = this.options.preload || [],
              r = e.filter(function (e) {
                return n.indexOf(e) < 0;
              });
            if (!r.length) return t();
            (this.options.preload = n.concat(r)), this.loadResources(t);
          }),
          (t.prototype.dir = function (e) {
            if ((e || (e = this.language), !e)) return 'rtl';
            return [
              'ar',
              'shu',
              'sqr',
              'ssh',
              'xaa',
              'yhd',
              'yud',
              'aao',
              'abh',
              'abv',
              'acm',
              'acq',
              'acw',
              'acx',
              'acy',
              'adf',
              'ads',
              'aeb',
              'aec',
              'afb',
              'ajp',
              'apc',
              'apd',
              'arb',
              'arq',
              'ars',
              'ary',
              'arz',
              'auz',
              'avl',
              'ayh',
              'ayl',
              'ayn',
              'ayp',
              'bbz',
              'pga',
              'he',
              'iw',
              'ps',
              'pbt',
              'pbu',
              'pst',
              'prp',
              'prd',
              'ur',
              'ydd',
              'yds',
              'yih',
              'ji',
              'yi',
              'hbo',
              'men',
              'xmn',
              'fa',
              'jpr',
              'peo',
              'pes',
              'prs',
              'dv',
              'sam',
            ].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >=
              0
              ? 'rtl'
              : 'ltr';
          }),
          (t.prototype.createInstance = function () {
            var e =
                arguments.length <= 0 || void 0 === arguments[0]
                  ? {}
                  : arguments[0],
              n = arguments[1];
            return new t(e, n);
          }),
          (t.prototype.cloneInstance = function () {
            var e = this,
              n =
                arguments.length <= 0 || void 0 === arguments[0]
                  ? {}
                  : arguments[0],
              r = arguments[1],
              i = new t(o({}, n, this.options, { isClone: !0 }), r),
              s = ['store', 'translator', 'services', 'language'];
            return (
              s.forEach(function (t) {
                i[t] = e[t];
              }),
              i
            );
          }),
          t
        );
      })(s.default);
      t.default = new w();
    },
    '32f0': function (e, t, n) {
      var r, o, i;
      (o = [n('P5fv')]),
        void 0 ===
          (i =
            'function' ==
            typeof (r = function (e) {
              var t = /\+/g;
              function n(e) {
                return i.raw ? e : encodeURIComponent(e);
              }
              function r(e) {
                return n(i.json ? JSON.stringify(e) : String(e));
              }
              function o(n, r) {
                var o = i.raw
                  ? n
                  : (function (e) {
                      0 === e.indexOf('"') &&
                        (e = e
                          .slice(1, -1)
                          .replace(/\\"/g, '"')
                          .replace(/\\\\/g, '\\'));
                      try {
                        return (
                          (e = decodeURIComponent(e.replace(t, ' '))),
                          i.json ? JSON.parse(e) : e
                        );
                      } catch (n) {}
                    })(n);
                return e.isFunction(r) ? r(o) : o;
              }
              var i = (e.cookie = function (t, s, a) {
                if (void 0 !== s && !e.isFunction(s)) {
                  if (
                    'number' == typeof (a = e.extend({}, i.defaults, a)).expires
                  ) {
                    var u = a.expires,
                      c = (a.expires = new Date());
                    c.setTime(+c + 864e5 * u);
                  }
                  return (document.cookie = [
                    n(t),
                    '=',
                    r(s),
                    a.expires ? '; expires=' + a.expires.toUTCString() : '',
                    a.path ? '; path=' + a.path : '',
                    a.domain ? '; domain=' + a.domain : '',
                    a.secure ? '; secure' : '',
                  ].join(''));
                }
                for (
                  var l,
                    f = t ? void 0 : {},
                    d = document.cookie ? document.cookie.split('; ') : [],
                    p = 0,
                    h = d.length;
                  p < h;
                  p++
                ) {
                  var g = d[p].split('='),
                    v = ((l = g.shift()), i.raw ? l : decodeURIComponent(l)),
                    m = g.join('=');
                  if (t && t === v) {
                    f = o(m, s);
                    break;
                  }
                  t || void 0 === (m = o(m)) || (f[v] = m);
                }
                return f;
              });
              (i.defaults = {}),
                (e.removeCookie = function (t, n) {
                  return (
                    void 0 !== e.cookie(t) &&
                    (e.cookie(t, '', e.extend({}, n, { expires: -1 })),
                    !e.cookie(t))
                  );
                });
            })
              ? r.apply(t, o)
              : r) || (e.exports = i);
    },
    '4Dbv': function (e, t, n) {
      'use strict';
      var r,
        o,
        i,
        s,
        a = n('SwRI'),
        u = n('KGgr'),
        c = n('hvJ5'),
        l = n('IxbO'),
        f = n('vVR7'),
        d = n('zY5Q'),
        p = n('1Vm/'),
        h = n('OKbE'),
        g = n('BMTb'),
        v = n('s245'),
        m = n('caxj').set,
        y = n('aQPA')(),
        b = n('UyYM'),
        _ = n('TnYX'),
        w = n('bjrj'),
        x = n('17C/'),
        S = u.TypeError,
        E = u.process,
        O = E && E.versions,
        T = (O && O.v8) || '',
        k = u.Promise,
        N = 'process' == l(E),
        C = function () {},
        j = (o = b.f),
        P = !!(function () {
          try {
            var e = k.resolve(1),
              t = ((e.constructor = {})[n('IXQl')('species')] = function (e) {
                e(C, C);
              });
            return (
              (N || 'function' == typeof PromiseRejectionEvent) &&
              e.then(C) instanceof t &&
              0 !== T.indexOf('6.6') &&
              -1 === w.indexOf('Chrome/66')
            );
          } catch (r) {}
        })(),
        A = function (e) {
          var t;
          return !(!d(e) || 'function' != typeof (t = e.then)) && t;
        },
        L = function (e, t) {
          if (!e._n) {
            e._n = !0;
            var n = e._c;
            y(function () {
              for (
                var r = e._v,
                  o = 1 == e._s,
                  i = 0,
                  s = function (t) {
                    var n,
                      i,
                      s,
                      a = o ? t.ok : t.fail,
                      u = t.resolve,
                      c = t.reject,
                      l = t.domain;
                    try {
                      a
                        ? (o || (2 == e._h && D(e), (e._h = 1)),
                          !0 === a
                            ? (n = r)
                            : (l && l.enter(),
                              (n = a(r)),
                              l && (l.exit(), (s = !0))),
                          n === t.promise
                            ? c(S('Promise-chain cycle'))
                            : (i = A(n))
                            ? i.call(n, u, c)
                            : u(n))
                        : c(r);
                    } catch (f) {
                      l && !s && l.exit(), c(f);
                    }
                  };
                n.length > i;

              )
                s(n[i++]);
              (e._c = []), (e._n = !1), t && !e._h && M(e);
            });
          }
        },
        M = function (e) {
          m.call(u, function () {
            var t,
              n,
              r,
              o = e._v,
              i = F(e);
            if (
              (i &&
                ((t = _(function () {
                  N
                    ? E.emit('unhandledRejection', o, e)
                    : (n = u.onunhandledrejection)
                    ? n({ promise: e, reason: o })
                    : (r = u.console) &&
                      r.error &&
                      r.error('Unhandled promise rejection', o);
                })),
                (e._h = N || F(e) ? 2 : 1)),
              (e._a = void 0),
              i && t.e)
            )
              throw t.v;
          });
        },
        F = function (e) {
          return 1 !== e._h && 0 === (e._a || e._c).length;
        },
        D = function (e) {
          m.call(u, function () {
            var t;
            N
              ? E.emit('rejectionHandled', e)
              : (t = u.onrejectionhandled) && t({ promise: e, reason: e._v });
          });
        },
        R = function (e) {
          var t = this;
          t._d ||
            ((t._d = !0),
            ((t = t._w || t)._v = e),
            (t._s = 2),
            t._a || (t._a = t._c.slice()),
            L(t, !0));
        },
        I = function (e) {
          var t,
            n = this;
          if (!n._d) {
            (n._d = !0), (n = n._w || n);
            try {
              if (n === e) throw S("Promise can't be resolved itself");
              (t = A(e))
                ? y(function () {
                    var r = { _w: n, _d: !1 };
                    try {
                      t.call(e, c(I, r, 1), c(R, r, 1));
                    } catch (o) {
                      R.call(r, o);
                    }
                  })
                : ((n._v = e), (n._s = 1), L(n, !1));
            } catch (r) {
              R.call({ _w: n, _d: !1 }, r);
            }
          }
        };
      P ||
        ((k = function (e) {
          h(this, k, 'Promise', '_h'), p(e), r.call(this);
          try {
            e(c(I, this, 1), c(R, this, 1));
          } catch (t) {
            R.call(this, t);
          }
        }),
        ((r = function (e) {
          (this._c = []),
            (this._a = void 0),
            (this._s = 0),
            (this._d = !1),
            (this._v = void 0),
            (this._h = 0),
            (this._n = !1);
        }).prototype = n('OHC2')(k.prototype, {
          then: function (e, t) {
            var n = j(v(this, k));
            return (
              (n.ok = 'function' != typeof e || e),
              (n.fail = 'function' == typeof t && t),
              (n.domain = N ? E.domain : void 0),
              this._c.push(n),
              this._a && this._a.push(n),
              this._s && L(this, !1),
              n.promise
            );
          },
          catch: function (e) {
            return this.then(void 0, e);
          },
        })),
        (i = function () {
          var e = new r();
          (this.promise = e),
            (this.resolve = c(I, e, 1)),
            (this.reject = c(R, e, 1));
        }),
        (b.f = j = function (e) {
          return e === k || e === s ? new i(e) : o(e);
        })),
        f(f.G + f.W + f.F * !P, { Promise: k }),
        n('AuAe')(k, 'Promise'),
        n('ybEM')('Promise'),
        (s = n('5wX8').Promise),
        f(f.S + f.F * !P, 'Promise', {
          reject: function (e) {
            var t = j(this);
            return (0, t.reject)(e), t.promise;
          },
        }),
        f(f.S + f.F * (a || !P), 'Promise', {
          resolve: function (e) {
            return x(a && this === s ? k : this, e);
          },
        }),
        f(
          f.S +
            f.F *
              !(
                P &&
                n('zP2l')(function (e) {
                  k.all(e).catch(C);
                })
              ),
          'Promise',
          {
            all: function (e) {
              var t = this,
                n = j(t),
                r = n.resolve,
                o = n.reject,
                i = _(function () {
                  var n = [],
                    i = 0,
                    s = 1;
                  g(e, !1, function (e) {
                    var a = i++,
                      u = !1;
                    n.push(void 0),
                      s++,
                      t.resolve(e).then(function (e) {
                        u || ((u = !0), (n[a] = e), --s || r(n));
                      }, o);
                  }),
                    --s || r(n);
                });
              return i.e && o(i.v), n.promise;
            },
            race: function (e) {
              var t = this,
                n = j(t),
                r = n.reject,
                o = _(function () {
                  g(e, !1, function (e) {
                    t.resolve(e).then(n.resolve, r);
                  });
                });
              return o.e && r(o.v), n.promise;
            },
          },
        );
    },
    '4O03': function (e, t, n) {
      var r = n('vVR7');
      r(r.P, 'String', { repeat: n('ktZe') });
    },
    '4O8T': function (e, t, n) {
      var r;
      !(function (t) {
        'use strict';
        function o() {}
        var i = o.prototype,
          s = t.EventEmitter;
        function a(e, t) {
          for (var n = e.length; n--; ) if (e[n].listener === t) return n;
          return -1;
        }
        function u(e) {
          return function () {
            return this[e].apply(this, arguments);
          };
        }
        (i.getListeners = function (e) {
          var t,
            n,
            r = this._getEvents();
          if (e instanceof RegExp)
            for (n in ((t = {}), r))
              r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n]);
          else t = r[e] || (r[e] = []);
          return t;
        }),
          (i.flattenListeners = function (e) {
            var t,
              n = [];
            for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
            return n;
          }),
          (i.getListenersAsObject = function (e) {
            var t,
              n = this.getListeners(e);
            return n instanceof Array && ((t = {})[e] = n), t || n;
          }),
          (i.addListener = function (e, t) {
            if (
              !(function e(t) {
                return (
                  'function' == typeof t ||
                  t instanceof RegExp ||
                  (!(!t || 'object' != typeof t) && e(t.listener))
                );
              })(t)
            )
              throw new TypeError('listener must be a function');
            var n,
              r = this.getListenersAsObject(e),
              o = 'object' == typeof t;
            for (n in r)
              r.hasOwnProperty(n) &&
                -1 === a(r[n], t) &&
                r[n].push(o ? t : { listener: t, once: !1 });
            return this;
          }),
          (i.on = u('addListener')),
          (i.addOnceListener = function (e, t) {
            return this.addListener(e, { listener: t, once: !0 });
          }),
          (i.once = u('addOnceListener')),
          (i.defineEvent = function (e) {
            return this.getListeners(e), this;
          }),
          (i.defineEvents = function (e) {
            for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
            return this;
          }),
          (i.removeListener = function (e, t) {
            var n,
              r,
              o = this.getListenersAsObject(e);
            for (r in o)
              o.hasOwnProperty(r) &&
                -1 !== (n = a(o[r], t)) &&
                o[r].splice(n, 1);
            return this;
          }),
          (i.off = u('removeListener')),
          (i.addListeners = function (e, t) {
            return this.manipulateListeners(!1, e, t);
          }),
          (i.removeListeners = function (e, t) {
            return this.manipulateListeners(!0, e, t);
          }),
          (i.manipulateListeners = function (e, t, n) {
            var r,
              o,
              i = e ? this.removeListener : this.addListener,
              s = e ? this.removeListeners : this.addListeners;
            if ('object' != typeof t || t instanceof RegExp)
              for (r = n.length; r--; ) i.call(this, t, n[r]);
            else
              for (r in t)
                t.hasOwnProperty(r) &&
                  (o = t[r]) &&
                  ('function' == typeof o
                    ? i.call(this, r, o)
                    : s.call(this, r, o));
            return this;
          }),
          (i.removeEvent = function (e) {
            var t,
              n = typeof e,
              r = this._getEvents();
            if ('string' === n) delete r[e];
            else if (e instanceof RegExp)
              for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t];
            else delete this._events;
            return this;
          }),
          (i.removeAllListeners = u('removeEvent')),
          (i.emitEvent = function (e, t) {
            var n,
              r,
              o,
              i,
              s = this.getListenersAsObject(e);
            for (i in s)
              if (s.hasOwnProperty(i))
                for (n = s[i].slice(0), o = 0; o < n.length; o++)
                  !0 === (r = n[o]).once && this.removeListener(e, r.listener),
                    r.listener.apply(this, t || []) ===
                      this._getOnceReturnValue() &&
                      this.removeListener(e, r.listener);
            return this;
          }),
          (i.trigger = u('emitEvent')),
          (i.emit = function (e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, t);
          }),
          (i.setOnceReturnValue = function (e) {
            return (this._onceReturnValue = e), this;
          }),
          (i._getOnceReturnValue = function () {
            return (
              !this.hasOwnProperty('_onceReturnValue') || this._onceReturnValue
            );
          }),
          (i._getEvents = function () {
            return this._events || (this._events = {});
          }),
          (o.noConflict = function () {
            return (t.EventEmitter = s), o;
          }),
          void 0 ===
            (r = function () {
              return o;
            }.call(t, n, t, e)) || (e.exports = r);
      })(this || {});
    },
    '5gT+': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r,
        o = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        })(n('lFip')),
        i = n('C1QN'),
        s = (r = i) && r.__esModule ? r : { default: r };
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      var u = (function () {
        function e() {
          var t =
            arguments.length <= 0 || void 0 === arguments[0]
              ? {}
              : arguments[0];
          a(this, e),
            (this.logger = s.default.create('interpolator')),
            this.init(t, !0);
        }
        return (
          (e.prototype.init = function () {
            var e =
                arguments.length <= 0 || void 0 === arguments[0]
                  ? {}
                  : arguments[0],
              t = arguments[1];
            t &&
              ((this.options = e),
              (this.format =
                (e.interpolation && e.interpolation.format) ||
                function (e) {
                  return e;
                })),
              e.interpolation || (e.interpolation = { escapeValue: !0 });
            var n = e.interpolation;
            (this.escapeValue = n.escapeValue),
              (this.prefix = n.prefix
                ? o.regexEscape(n.prefix)
                : n.prefixEscaped || '{{'),
              (this.suffix = n.suffix
                ? o.regexEscape(n.suffix)
                : n.suffixEscaped || '}}'),
              (this.formatSeparator = n.formatSeparator
                ? o.regexEscape(n.formatSeparator)
                : n.formatSeparator || ','),
              (this.unescapePrefix = n.unescapeSuffix
                ? ''
                : n.unescapePrefix || '-'),
              (this.unescapeSuffix = this.unescapePrefix
                ? ''
                : n.unescapeSuffix || ''),
              (this.nestingPrefix = n.nestingPrefix
                ? o.regexEscape(n.nestingPrefix)
                : n.nestingPrefixEscaped || o.regexEscape('$t(')),
              (this.nestingSuffix = n.nestingSuffix
                ? o.regexEscape(n.nestingSuffix)
                : n.nestingSuffixEscaped || o.regexEscape(')')),
              this.resetRegExp();
          }),
          (e.prototype.reset = function () {
            this.options && this.init(this.options);
          }),
          (e.prototype.resetRegExp = function () {
            var e = this.prefix + '(.+?)' + this.suffix;
            this.regexp = new RegExp(e, 'g');
            var t =
              this.prefix +
              this.unescapePrefix +
              '(.+?)' +
              this.unescapeSuffix +
              this.suffix;
            this.regexpUnescape = new RegExp(t, 'g');
            var n = this.nestingPrefix + '(.+?)' + this.nestingSuffix;
            this.nestingRegexp = new RegExp(n, 'g');
          }),
          (e.prototype.interpolate = function (e, t, n) {
            var r = this,
              i = void 0,
              s = void 0;
            function a(e) {
              return e.replace(/\$/g, '$$$$');
            }
            var u = function (e) {
              if (e.indexOf(r.formatSeparator) < 0) return o.getPath(t, e);
              var i = e.split(r.formatSeparator),
                s = i.shift().trim(),
                a = i.join(r.formatSeparator).trim();
              return r.format(o.getPath(t, s), a, n);
            };
            for (this.resetRegExp(); (i = this.regexpUnescape.exec(e)); ) {
              var c = u(i[1].trim());
              (e = e.replace(i[0], c)), (this.regexpUnescape.lastIndex = 0);
            }
            for (; (i = this.regexp.exec(e)); )
              'string' != typeof (s = u(i[1].trim())) && (s = o.makeString(s)),
                s ||
                  (this.logger.warn(
                    'missed to pass in variable ' +
                      i[1] +
                      ' for interpolating ' +
                      e,
                  ),
                  (s = '')),
                (s = this.escapeValue ? a(o.escape(s)) : a(s)),
                (e = e.replace(i[0], s)),
                (this.regexp.lastIndex = 0);
            return e;
          }),
          (e.prototype.nest = function (e, t) {
            var n =
                arguments.length <= 2 || void 0 === arguments[2]
                  ? {}
                  : arguments[2],
              r = void 0,
              i = void 0,
              s = JSON.parse(JSON.stringify(n));
            function a(e) {
              return e.replace(/\$/g, '$$$$');
            }
            function u(e) {
              if (e.indexOf(',') < 0) return e;
              var t = e.split(',');
              e = t.shift();
              var n = t.join(',');
              n = this.interpolate(n, s);
              try {
                s = JSON.parse(n);
              } catch (r) {
                this.logger.error(
                  'failed parsing options string in nesting for key ' + e,
                  r,
                );
              }
              return e;
            }
            for (s.applyPostProcessor = !1; (r = this.nestingRegexp.exec(e)); )
              'string' != typeof (i = t(u.call(this, r[1].trim()), s)) &&
                (i = o.makeString(i)),
                i ||
                  (this.logger.warn(
                    'missed to pass in variable ' +
                      r[1] +
                      ' for interpolating ' +
                      e,
                  ),
                  (i = '')),
                (i = this.escapeValue ? a(o.escape(i)) : a(i)),
                (e = e.replace(r[0], i)),
                (this.regexp.lastIndex = 0);
            return e;
          }),
          e
        );
      })();
      t.default = u;
    },
    '5wX8': function (e, t) {
      var n = (e.exports = { version: '2.6.5' });
      'number' == typeof __e && (__e = n);
    },
    '5zJJ': function (e, t, n) {
      var r = n('IXQl')('match');
      e.exports = function (e) {
        var t = /./;
        try {
          '/./'[e](t);
        } catch (n) {
          try {
            return (t[r] = !1), !'/./'[e](t);
          } catch (o) {}
        }
        return !0;
      };
    },
    '6Ngl': function (e, t, n) {
      var r = n('12Rd'),
        o = n('H46L');
      e.exports = function (e) {
        return r(o(e));
      };
    },
    '6Q5q': function (e, t, n) {
      'use strict';
      var r, o, i, s, a, u;
      window.parent !== window &&
        window.CanvasRenderingContext2D &&
        window.TextMetrics &&
        (o = window.CanvasRenderingContext2D.prototype) &&
        o.hasOwnProperty('font') &&
        o.hasOwnProperty('mozTextStyle') &&
        'function' == typeof o.__lookupSetter__ &&
        (i = o.__lookupSetter__('font')) &&
        (o.__defineSetter__('font', function (e) {
          try {
            return i.call(this, e);
          } catch (t) {
            if ('NS_ERROR_FAILURE' !== t.name) throw t;
          }
        }),
        (s = o.measureText),
        (r = function () {
          (this.width = 0),
            (this.isFake = !0),
            (this.__proto__ = window.TextMetrics.prototype);
        }),
        (o.measureText = function (e) {
          try {
            return s.apply(this, arguments);
          } catch (t) {
            if ('NS_ERROR_FAILURE' !== t.name) throw t;
            return new r();
          }
        }),
        (a = o.fillText),
        (o.fillText = function (e, t, n, r) {
          try {
            a.apply(this, arguments);
          } catch (o) {
            if ('NS_ERROR_FAILURE' !== o.name) throw o;
          }
        }),
        (u = o.strokeText),
        (o.strokeText = function (e, t, n, r) {
          try {
            u.apply(this, arguments);
          } catch (o) {
            if ('NS_ERROR_FAILURE' !== o.name) throw o;
          }
        }));
    },
    '6jKD': function (e, t, n) {
      'use strict';
      if (window._babelPolyfill)
        throw new Error('only one instance of babel/polyfill is allowed');
      (window._babelPolyfill = !0),
        n('F2Ge'),
        n('XDiO'),
        n('yyyB'),
        n('tB8R'),
        n('qUYv'),
        n('04I0'),
        n('elwX'),
        n('NX6/'),
        n('LHOG'),
        n('esfA'),
        n('iBVM'),
        n('ftsf'),
        n('mPZe'),
        n('1zYV'),
        n('C+zs'),
        n('bq52'),
        n('mz5e'),
        n('4O03'),
        n('gKOe'),
        n('YhSK'),
        n('NFwL'),
        n('1yTv'),
        n('EjkM'),
        n('9AMt'),
        n('voXF'),
        n('4Dbv'),
        n('B0EX'),
        n('xL+S'),
        n('a4n4'),
        n('n0SC'),
        n('uBJQ'),
        n('bI2D'),
        n('kIXF');
    },
    '7+od': function (e, t) {
      e.exports = function (e, t, n) {
        var r = void 0 === n;
        switch (t.length) {
          case 0:
            return r ? e() : e.call(n);
          case 1:
            return r ? e(t[0]) : e.call(n, t[0]);
          case 2:
            return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
          case 3:
            return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
          case 4:
            return r
              ? e(t[0], t[1], t[2], t[3])
              : e.call(n, t[0], t[1], t[2], t[3]);
        }
        return e.apply(n, t);
      };
    },
    '8ICS': function (e, t, n) {
      var r = n('5wX8'),
        o = n('KGgr'),
        i = o['__core-js_shared__'] || (o['__core-js_shared__'] = {});
      (e.exports = function (e, t) {
        return i[e] || (i[e] = void 0 !== t ? t : {});
      })('versions', []).push({
        version: r.version,
        mode: n('SwRI') ? 'pure' : 'global',
        copyright: '© 2019 Denis Pushkarev (zloirock.ru)',
      });
    },
    '8ZkX': function (e, t, n) {
      'use strict';
      var r = n('xjCr'),
        o = n('PPId'),
        i = n('vRGa'),
        s = n('XSq2'),
        a = n('12Rd'),
        u = Object.assign;
      e.exports =
        !u ||
        n('u52/')(function () {
          var e = {},
            t = {},
            n = Symbol(),
            r = 'abcdefghijklmnopqrst';
          return (
            (e[n] = 7),
            r.split('').forEach(function (e) {
              t[e] = e;
            }),
            7 != u({}, e)[n] || Object.keys(u({}, t)).join('') != r
          );
        })
          ? function (e, t) {
              for (
                var n = s(e), u = arguments.length, c = 1, l = o.f, f = i.f;
                u > c;

              )
                for (
                  var d,
                    p = a(arguments[c++]),
                    h = l ? r(p).concat(l(p)) : r(p),
                    g = h.length,
                    v = 0;
                  g > v;

                )
                  f.call(p, (d = h[v++])) && (n[d] = p[d]);
              return n;
            }
          : u;
    },
    '9AMt': function (e, t, n) {
      'use strict';
      var r = n('vVR7'),
        o = n('Blyn')(6),
        i = 'findIndex',
        s = !0;
      i in [] &&
        Array(1)[i](function () {
          s = !1;
        }),
        r(r.P + r.F * s, 'Array', {
          findIndex: function (e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        n('OlM/')(i);
    },
    '9S7S': function (e, t, n) {
      var r = n('zY5Q'),
        o = n('KGgr').document,
        i = r(o) && r(o.createElement);
      e.exports = function (e) {
        return i ? o.createElement(e) : {};
      };
    },
    '9TFj': function (e, t, n) {
      var r = n('zY5Q');
      e.exports = function (e) {
        if (!r(e)) throw TypeError(e + ' is not an object!');
        return e;
      };
    },
    AZRH: function (e, t, n) {
      var r = n('KGgr'),
        o = n('khJW'),
        i = n('isQe'),
        s = n('QqfT')('src'),
        a = n('pipr'),
        u = ('' + a).split('toString');
      (n('5wX8').inspectSource = function (e) {
        return a.call(e);
      }),
        (e.exports = function (e, t, n, a) {
          var c = 'function' == typeof n;
          c && (i(n, 'name') || o(n, 'name', t)),
            e[t] !== n &&
              (c && (i(n, s) || o(n, s, e[t] ? '' + e[t] : u.join(String(t)))),
              e === r
                ? (e[t] = n)
                : a
                ? e[t]
                  ? (e[t] = n)
                  : o(e, t, n)
                : (delete e[t], o(e, t, n)));
        })(Function.prototype, 'toString', function () {
          return ('function' == typeof this && this[s]) || a.call(this);
        });
    },
    AuAe: function (e, t, n) {
      var r = n('gPPl').f,
        o = n('isQe'),
        i = n('IXQl')('toStringTag');
      e.exports = function (e, t, n) {
        e &&
          !o((e = n ? e : e.prototype), i) &&
          r(e, i, { configurable: !0, value: t });
      };
    },
    B0EX: function (e, t, n) {
      'use strict';
      var r = n('285N'),
        o = n('utAV');
      e.exports = n('0+LD')(
        'Map',
        function (e) {
          return function () {
            return e(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          get: function (e) {
            var t = r.getEntry(o(this, 'Map'), e);
            return t && t.v;
          },
          set: function (e, t) {
            return r.def(o(this, 'Map'), 0 === e ? 0 : e, t);
          },
        },
        r,
        !0,
      );
    },
    B1JA: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.convertAPIOptions = function (e) {
          e.resStore && (e.resources = e.resStore);
          e.ns && e.ns.defaultNs
            ? ((e.defaultNS = e.ns.defaultNs), (e.ns = e.ns.namespaces))
            : (e.defaultNS = e.ns || 'translation');
          e.fallbackToDefaultNS && e.defaultNS && (e.fallbackNS = e.defaultNS);
          (e.saveMissing = e.sendMissing),
            (e.saveMissingTo = e.sendMissingTo || 'current'),
            (e.returnNull = !e.fallbackOnNull),
            (e.returnEmptyString = !e.fallbackOnEmpty),
            (e.returnObjects = e.returnObjectTrees),
            (e.joinArrays = '\n'),
            (e.returnedObjectHandler = e.objectTreeKeyHandler),
            (e.parseMissingKeyHandler = e.parseMissingKey),
            (e.appendNamespaceToMissingKey = !0),
            (e.nsSeparator = e.nsseparator),
            (e.keySeparator = e.keyseparator),
            'sprintf' === e.shortcutFunction &&
              (e.overloadTranslationOptionHandler = function (e) {
                for (var t = [], n = 1; n < e.length; n++) t.push(e[n]);
                return { postProcess: 'sprintf', sprintf: t };
              });
          (e.whitelist = e.lngWhitelist),
            (e.preload = e.preload),
            'current' === e.load && (e.load = 'currentOnly');
          'unspecific' === e.load && (e.load = 'languageOnly');
          (e.backend = e.backend || {}),
            (e.backend.loadPath =
              e.resGetPath || 'locales/__lng__/__ns__.json'),
            (e.backend.addPath = e.resPostPath || 'locales/add/__lng__/__ns__'),
            (e.backend.allowMultiLoading = e.dynamicLoad),
            (e.cache = e.cache || {}),
            (e.cache.prefix = 'res_'),
            (e.cache.expirationTime = 6048e5),
            (e.cache.enabled = !!e.useLocalStorage),
            (e = s(e)).defaultVariables &&
              (e.interpolation.defaultVariables = e.defaultVariables);
          return e;
        }),
        (t.convertJSONOptions = function (e) {
          return ((e = s(e)).joinArrays = '\n'), e;
        }),
        (t.convertTOptions = function (e) {
          (e.interpolationPrefix ||
            e.interpolationSuffix ||
            e.escapeInterpolation) &&
            (e = s(e));
          return (
            (e.nsSeparator = e.nsseparator),
            (e.keySeparator = e.keyseparator),
            (e.returnObjects = e.returnObjectTrees),
            e
          );
        }),
        (t.appendBackwardsAPI = function (e) {
          (e.lng = function () {
            return (
              i.default.deprecate(
                'i18next.lng() can be replaced by i18next.language for detected language or i18next.languages for languages ordered by translation lookup.',
              ),
              e.services.languageUtils.toResolveHierarchy(e.language)[0]
            );
          }),
            (e.preload = function (t, n) {
              i.default.deprecate(
                'i18next.preload() can be replaced with i18next.loadLanguages()',
              ),
                e.loadLanguages(t, n);
            }),
            (e.setLng = function (t, n, r) {
              if (
                (i.default.deprecate(
                  'i18next.setLng() can be replaced with i18next.changeLanguage() or i18next.getFixedT() to get a translation function with fixed language or namespace.',
                ),
                'function' == typeof n && ((r = n), (n = {})),
                n || (n = {}),
                !0 === n.fixLng && r)
              )
                return r(null, e.getFixedT(t));
              e.changeLanguage(t, r);
            }),
            (e.addPostProcessor = function (t, n) {
              i.default.deprecate(
                "i18next.addPostProcessor() can be replaced by i18next.use({ type: 'postProcessor', name: 'name', process: fc })",
              ),
                e.use({ type: 'postProcessor', name: t, process: n });
            });
        });
      var r,
        o = n('C1QN'),
        i = (r = o) && r.__esModule ? r : { default: r };
      function s(e) {
        return (
          (e.interpolation = { unescapeSuffix: 'HTML' }),
          (e.interpolation.prefix = e.interpolationPrefix || '__'),
          (e.interpolation.suffix = e.interpolationSuffix || '__'),
          (e.interpolation.escapeValue = e.escapeInterpolation || !1),
          (e.interpolation.nestingPrefix = e.reusePrefix || '$t('),
          (e.interpolation.nestingSuffix = e.reuseSuffix || ')'),
          e
        );
      }
    },
    B1QU: function (e, t, n) {
      var r = n('qKVQ');
      e.exports =
        Array.isArray ||
        function (e) {
          return 'Array' == r(e);
        };
    },
    BMTb: function (e, t, n) {
      var r = n('hvJ5'),
        o = n('Jdba'),
        i = n('lHEB'),
        s = n('9TFj'),
        a = n('bSmq'),
        u = n('f8KY'),
        c = {},
        l = {};
      ((t = e.exports = function (e, t, n, f, d) {
        var p,
          h,
          g,
          v,
          m = d
            ? function () {
                return e;
              }
            : u(e),
          y = r(n, f, t ? 2 : 1),
          b = 0;
        if ('function' != typeof m) throw TypeError(e + ' is not iterable!');
        if (i(m)) {
          for (p = a(e.length); p > b; b++)
            if ((v = t ? y(s((h = e[b]))[0], h[1]) : y(e[b])) === c || v === l)
              return v;
        } else
          for (g = m.call(e); !(h = g.next()).done; )
            if ((v = o(g, y, h.value, t)) === c || v === l) return v;
      }).BREAK = c),
        (t.RETURN = l);
    },
    Blyn: function (e, t, n) {
      var r = n('hvJ5'),
        o = n('12Rd'),
        i = n('XSq2'),
        s = n('bSmq'),
        a = n('1npb');
      e.exports = function (e, t) {
        var n = 1 == e,
          u = 2 == e,
          c = 3 == e,
          l = 4 == e,
          f = 6 == e,
          d = 5 == e || f,
          p = t || a;
        return function (t, a, h) {
          for (
            var g,
              v,
              m = i(t),
              y = o(m),
              b = r(a, h, 3),
              _ = s(y.length),
              w = 0,
              x = n ? p(t, _) : u ? p(t, 0) : void 0;
            _ > w;
            w++
          )
            if ((d || w in y) && ((v = b((g = y[w]), w, m)), e))
              if (n) x[w] = v;
              else if (v)
                switch (e) {
                  case 3:
                    return !0;
                  case 5:
                    return g;
                  case 6:
                    return w;
                  case 2:
                    x.push(g);
                }
              else if (l) return !1;
          return f ? -1 : c || l ? l : x;
        };
      };
    },
    'C+zs': function (e, t, n) {
      'use strict';
      var r = n('vVR7'),
        o = n('iP0q')(!1);
      r(r.P, 'String', {
        codePointAt: function (e) {
          return o(this, e);
        },
      });
    },
    C1QN: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        };
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      var i = {
          type: 'logger',
          log: function (e) {
            this._output('log', e);
          },
          warn: function (e) {
            this._output('warn', e);
          },
          error: function (e) {
            this._output('error', e);
          },
          _output: function (e, t) {
            console &&
              console[e] &&
              console[e].apply(console, Array.prototype.slice.call(t));
          },
        },
        s = (function () {
          function e(t) {
            var n =
              arguments.length <= 1 || void 0 === arguments[1]
                ? {}
                : arguments[1];
            o(this, e), (this.subs = []), this.init(t, n);
          }
          return (
            (e.prototype.init = function (e) {
              var t =
                arguments.length <= 1 || void 0 === arguments[1]
                  ? {}
                  : arguments[1];
              (this.prefix = t.prefix || 'i18next:'),
                (this.logger = e || i),
                (this.options = t),
                (this.debug = !1 !== t.debug);
            }),
            (e.prototype.setDebug = function (e) {
              (this.debug = e),
                this.subs.forEach(function (t) {
                  t.setDebug(e);
                });
            }),
            (e.prototype.log = function () {
              this.forward(arguments, 'log', '', !0);
            }),
            (e.prototype.warn = function () {
              this.forward(arguments, 'warn', '', !0);
            }),
            (e.prototype.error = function () {
              this.forward(arguments, 'error', '');
            }),
            (e.prototype.deprecate = function () {
              this.forward(arguments, 'warn', 'WARNING DEPRECATED: ', !0);
            }),
            (e.prototype.forward = function (e, t, n, r) {
              (r && !this.debug) ||
                ('string' == typeof e[0] &&
                  (e[0] = n + this.prefix + ' ' + e[0]),
                this.logger[t](e));
            }),
            (e.prototype.create = function (t) {
              var n = new e(
                this.logger,
                r({ prefix: this.prefix + ':' + t + ':' }, this.options),
              );
              return this.subs.push(n), n;
            }),
            e
          );
        })();
      t.default = new s();
    },
    C9Yf: function (e, t, n) {
      var r = n('WJeB'),
        o = n('IbiK').concat('length', 'prototype');
      t.f =
        Object.getOwnPropertyNames ||
        function (e) {
          return r(e, o);
        };
    },
    D5V3: function (e, t, n) {
      'use strict';
      var r = n('gPPl'),
        o = n('yUtn');
      e.exports = function (e, t, n) {
        t in e ? r.f(e, t, o(0, n)) : (e[t] = n);
      };
    },
    EMvu: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = function (e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e))
            return (function (e, t) {
              var n = [],
                r = !0,
                o = !1,
                i = void 0;
              try {
                for (
                  var s, a = e[Symbol.iterator]();
                  !(r = (s = a.next()).done) &&
                  (n.push(s.value), !t || n.length !== t);
                  r = !0
                );
              } catch (u) {
                (o = !0), (i = u);
              } finally {
                try {
                  !r && a.return && a.return();
                } finally {
                  if (o) throw i;
                }
              }
              return n;
            })(e, t);
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance',
          );
        },
        i = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        })(n('lFip')),
        s = a(n('C1QN'));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function c(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function l(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t,
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (function (e, t) {
                  for (
                    var n = Object.getOwnPropertyNames(t), r = 0;
                    r < n.length;
                    r++
                  ) {
                    var o = n[r],
                      i = Object.getOwnPropertyDescriptor(t, o);
                    i &&
                      i.configurable &&
                      void 0 === e[o] &&
                      Object.defineProperty(e, o, i);
                  }
                })(e, t));
      }
      var f = (function (e) {
        function t(n, r, o) {
          var i =
            arguments.length <= 3 || void 0 === arguments[3]
              ? {}
              : arguments[3];
          u(this, t);
          var a = c(this, e.call(this));
          return (
            (a.backend = n),
            (a.store = r),
            (a.services = o),
            (a.options = i),
            (a.logger = s.default.create('backendConnector')),
            (a.state = {}),
            (a.queue = []),
            a.backend && a.backend.init && a.backend.init(o, i.backend, i),
            a
          );
        }
        return (
          l(t, e),
          (t.prototype.queueLoad = function (e, t, n) {
            var r = this,
              o = [],
              i = [],
              s = [],
              a = [];
            return (
              e.forEach(function (e) {
                var n = !0;
                t.forEach(function (t) {
                  var s = e + '|' + t;
                  r.store.hasResourceBundle(e, t)
                    ? (r.state[s] = 2)
                    : r.state[s] < 0 ||
                      (1 === r.state[s]
                        ? i.indexOf(s) < 0 && i.push(s)
                        : ((r.state[s] = 1),
                          (n = !1),
                          i.indexOf(s) < 0 && i.push(s),
                          o.indexOf(s) < 0 && o.push(s),
                          a.indexOf(t) < 0 && a.push(t)));
                }),
                  n || s.push(e);
              }),
              (o.length || i.length) &&
                this.queue.push({
                  pending: i,
                  loaded: {},
                  errors: [],
                  callback: n,
                }),
              { toLoad: o, pending: i, toLoadLanguages: s, toLoadNamespaces: a }
            );
          }),
          (t.prototype.loaded = function (e, t, n) {
            var r = this,
              s = e.split('|'),
              a = o(s, 2),
              u = a[0],
              c = a[1];
            t && this.emit('failedLoading', u, c, t),
              n && this.store.addResourceBundle(u, c, n),
              (this.state[e] = t ? -1 : 2),
              this.queue.forEach(function (n) {
                i.pushPath(n.loaded, [u], c),
                  (function (e, t) {
                    for (var n = e.indexOf(t); -1 !== n; )
                      e.splice(n, 1), (n = e.indexOf(t));
                  })(n.pending, e),
                  t && n.errors.push(t),
                  0 !== n.pending.length ||
                    n.done ||
                    (n.errors.length ? n.callback(n.errors) : n.callback(),
                    r.emit('loaded', n.loaded),
                    (n.done = !0));
              }),
              (this.queue = this.queue.filter(function (e) {
                return !e.done;
              }));
          }),
          (t.prototype.read = function (e, t, n, r, o, i) {
            var s = this;
            if ((r || (r = 0), o || (o = 250), !e.length)) return i(null, {});
            this.backend[n](e, t, function (a, u) {
              a && u && r < 5
                ? setTimeout(function () {
                    s.read.call(s, e, t, n, ++r, 2 * o, i);
                  }, o)
                : i(a, u);
            });
          }),
          (t.prototype.load = function (e, t, n) {
            var s = this;
            if (!this.backend)
              return (
                this.logger.warn(
                  'No backend was added via i18next.use. Will not load resources.',
                ),
                n && n()
              );
            var a = r({}, this.backend.options, this.options.backend);
            'string' == typeof e &&
              (e = this.services.languageUtils.toResolveHierarchy(e)),
              'string' == typeof t && (t = [t]);
            var u,
              c = this.queueLoad(e, t, n);
            c.toLoad.length
              ? a.allowMultiLoading && this.backend.readMulti
                ? this.read(
                    c.toLoadLanguages,
                    c.toLoadNamespaces,
                    'readMulti',
                    null,
                    null,
                    function (e, t) {
                      e &&
                        s.logger.warn(
                          'loading namespaces ' +
                            c.toLoadNamespaces.join(', ') +
                            ' for languages ' +
                            c.toLoadLanguages.join(', ') +
                            ' via multiloading failed',
                          e,
                        ),
                        !e &&
                          t &&
                          s.logger.log(
                            'loaded namespaces ' +
                              c.toLoadNamespaces.join(', ') +
                              ' for languages ' +
                              c.toLoadLanguages.join(', ') +
                              ' via multiloading',
                            t,
                          ),
                        c.toLoad.forEach(function (n) {
                          var r = n.split('|'),
                            a = o(r, 2),
                            u = a[0],
                            c = a[1],
                            l = i.getPath(t, [u, c]);
                          if (l) s.loaded(n, e, l);
                          else {
                            var f =
                              'loading namespace ' +
                              c +
                              ' for language ' +
                              u +
                              ' via multiloading failed';
                            s.loaded(n, f), s.logger.error(f);
                          }
                        });
                    },
                  )
                : ((u = function (e) {
                    var t = this,
                      n = e.split('|'),
                      r = o(n, 2),
                      i = r[0],
                      s = r[1];
                    this.read(i, s, 'read', null, null, function (n, r) {
                      n &&
                        t.logger.warn(
                          'loading namespace ' +
                            s +
                            ' for language ' +
                            i +
                            ' failed',
                          n,
                        ),
                        !n &&
                          r &&
                          t.logger.log(
                            'loaded namespace ' + s + ' for language ' + i,
                            r,
                          ),
                        t.loaded(e, n, r);
                    });
                  }),
                  c.toLoad.forEach(function (e) {
                    u.call(s, e);
                  }))
              : c.pending.length || n();
          }),
          (t.prototype.reload = function (e, t) {
            var n = this;
            this.backend ||
              this.logger.warn(
                'No backend was added via i18next.use. Will not load resources.',
              );
            var s,
              a = r({}, this.backend.options, this.options.backend);
            'string' == typeof e &&
              (e = this.services.languageUtils.toResolveHierarchy(e)),
              'string' == typeof t && (t = [t]),
              a.allowMultiLoading && this.backend.readMulti
                ? this.read(e, t, 'readMulti', null, null, function (r, o) {
                    r &&
                      n.logger.warn(
                        'reloading namespaces ' +
                          t.join(', ') +
                          ' for languages ' +
                          e.join(', ') +
                          ' via multiloading failed',
                        r,
                      ),
                      !r &&
                        o &&
                        n.logger.log(
                          'reloaded namespaces ' +
                            t.join(', ') +
                            ' for languages ' +
                            e.join(', ') +
                            ' via multiloading',
                          o,
                        ),
                      e.forEach(function (e) {
                        t.forEach(function (t) {
                          var s = i.getPath(o, [e, t]);
                          if (s) n.loaded(e + '|' + t, r, s);
                          else {
                            var a =
                              'reloading namespace ' +
                              t +
                              ' for language ' +
                              e +
                              ' via multiloading failed';
                            n.loaded(e + '|' + t, a), n.logger.error(a);
                          }
                        });
                      });
                  })
                : ((s = function (e) {
                    var t = this,
                      n = e.split('|'),
                      r = o(n, 2),
                      i = r[0],
                      s = r[1];
                    this.read(i, s, 'read', null, null, function (n, r) {
                      n &&
                        t.logger.warn(
                          'reloading namespace ' +
                            s +
                            ' for language ' +
                            i +
                            ' failed',
                          n,
                        ),
                        !n &&
                          r &&
                          t.logger.log(
                            'reloaded namespace ' + s + ' for language ' + i,
                            r,
                          ),
                        t.loaded(e, n, r);
                    });
                  }),
                  e.forEach(function (e) {
                    t.forEach(function (t) {
                      s.call(n, e + '|' + t);
                    });
                  }));
          }),
          (t.prototype.saveMissing = function (e, t, n, r) {
            this.backend &&
              this.backend.create &&
              this.backend.create(e, t, n, r),
              e && e[0] && this.store.addResource(e[0], t, n, r);
          }),
          t
        );
      })(a(n('Xs5p')).default);
      t.default = f;
    },
    EjkM: function (e, t, n) {
      'use strict';
      var r = n('vVR7'),
        o = n('Blyn')(5),
        i = !0;
      'find' in [] &&
        Array(1).find(function () {
          i = !1;
        }),
        r(r.P + r.F * i, 'Array', {
          find: function (e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        n('OlM/')('find');
    },
    F2Ge: function (e, t, n) {
      'use strict';
      var r = n('KGgr'),
        o = n('isQe'),
        i = n('nULH'),
        s = n('vVR7'),
        a = n('AZRH'),
        u = n('PAQY').KEY,
        c = n('u52/'),
        l = n('8ICS'),
        f = n('AuAe'),
        d = n('QqfT'),
        p = n('IXQl'),
        h = n('eKEP'),
        g = n('fkSf'),
        v = n('12Jd'),
        m = n('B1QU'),
        y = n('9TFj'),
        b = n('zY5Q'),
        _ = n('6Ngl'),
        w = n('YN/q'),
        x = n('yUtn'),
        S = n('Vrag'),
        E = n('s3mU'),
        O = n('/Hub'),
        T = n('gPPl'),
        k = n('xjCr'),
        N = O.f,
        C = T.f,
        j = E.f,
        P = r.Symbol,
        A = r.JSON,
        L = A && A.stringify,
        M = p('_hidden'),
        F = p('toPrimitive'),
        D = {}.propertyIsEnumerable,
        R = l('symbol-registry'),
        I = l('symbols'),
        H = l('op-symbols'),
        B = Object.prototype,
        q = 'function' == typeof P,
        W = r.QObject,
        z = !W || !W.prototype || !W.prototype.findChild,
        V =
          i &&
          c(function () {
            return (
              7 !=
              S(
                C({}, 'a', {
                  get: function () {
                    return C(this, 'a', { value: 7 }).a;
                  },
                }),
              ).a
            );
          })
            ? function (e, t, n) {
                var r = N(B, t);
                r && delete B[t], C(e, t, n), r && e !== B && C(B, t, r);
              }
            : C,
        U = function (e) {
          var t = (I[e] = S(P.prototype));
          return (t._k = e), t;
        },
        $ =
          q && 'symbol' == typeof P.iterator
            ? function (e) {
                return 'symbol' == typeof e;
              }
            : function (e) {
                return e instanceof P;
              },
        Q = function (e, t, n) {
          return (
            e === B && Q(H, t, n),
            y(e),
            (t = w(t, !0)),
            y(n),
            o(I, t)
              ? (n.enumerable
                  ? (o(e, M) && e[M][t] && (e[M][t] = !1),
                    (n = S(n, { enumerable: x(0, !1) })))
                  : (o(e, M) || C(e, M, x(1, {})), (e[M][t] = !0)),
                V(e, t, n))
              : C(e, t, n)
          );
        },
        X = function (e, t) {
          y(e);
          for (var n, r = v((t = _(t))), o = 0, i = r.length; i > o; )
            Q(e, (n = r[o++]), t[n]);
          return e;
        },
        K = function (e) {
          var t = D.call(this, (e = w(e, !0)));
          return (
            !(this === B && o(I, e) && !o(H, e)) &&
            (!(t || !o(this, e) || !o(I, e) || (o(this, M) && this[M][e])) || t)
          );
        },
        Y = function (e, t) {
          if (((e = _(e)), (t = w(t, !0)), e !== B || !o(I, t) || o(H, t))) {
            var n = N(e, t);
            return (
              !n || !o(I, t) || (o(e, M) && e[M][t]) || (n.enumerable = !0), n
            );
          }
        },
        J = function (e) {
          for (var t, n = j(_(e)), r = [], i = 0; n.length > i; )
            o(I, (t = n[i++])) || t == M || t == u || r.push(t);
          return r;
        },
        G = function (e) {
          for (
            var t, n = e === B, r = j(n ? H : _(e)), i = [], s = 0;
            r.length > s;

          )
            !o(I, (t = r[s++])) || (n && !o(B, t)) || i.push(I[t]);
          return i;
        };
      q ||
        (a(
          (P = function () {
            if (this instanceof P)
              throw TypeError('Symbol is not a constructor!');
            var e = d(arguments.length > 0 ? arguments[0] : void 0),
              t = function (n) {
                this === B && t.call(H, n),
                  o(this, M) && o(this[M], e) && (this[M][e] = !1),
                  V(this, e, x(1, n));
              };
            return i && z && V(B, e, { configurable: !0, set: t }), U(e);
          }).prototype,
          'toString',
          function () {
            return this._k;
          },
        ),
        (O.f = Y),
        (T.f = Q),
        (n('C9Yf').f = E.f = J),
        (n('vRGa').f = K),
        (n('PPId').f = G),
        i && !n('SwRI') && a(B, 'propertyIsEnumerable', K, !0),
        (h.f = function (e) {
          return U(p(e));
        })),
        s(s.G + s.W + s.F * !q, { Symbol: P });
      for (
        var Z = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
            ',',
          ),
          ee = 0;
        Z.length > ee;

      )
        p(Z[ee++]);
      for (var te = k(p.store), ne = 0; te.length > ne; ) g(te[ne++]);
      s(s.S + s.F * !q, 'Symbol', {
        for: function (e) {
          return o(R, (e += '')) ? R[e] : (R[e] = P(e));
        },
        keyFor: function (e) {
          if (!$(e)) throw TypeError(e + ' is not a symbol!');
          for (var t in R) if (R[t] === e) return t;
        },
        useSetter: function () {
          z = !0;
        },
        useSimple: function () {
          z = !1;
        },
      }),
        s(s.S + s.F * !q, 'Object', {
          create: function (e, t) {
            return void 0 === t ? S(e) : X(S(e), t);
          },
          defineProperty: Q,
          defineProperties: X,
          getOwnPropertyDescriptor: Y,
          getOwnPropertyNames: J,
          getOwnPropertySymbols: G,
        }),
        A &&
          s(
            s.S +
              s.F *
                (!q ||
                  c(function () {
                    var e = P();
                    return (
                      '[null]' != L([e]) ||
                      '{}' != L({ a: e }) ||
                      '{}' != L(Object(e))
                    );
                  })),
            'JSON',
            {
              stringify: function (e) {
                for (var t, n, r = [e], o = 1; arguments.length > o; )
                  r.push(arguments[o++]);
                if (((n = t = r[1]), (b(t) || void 0 !== e) && !$(e)))
                  return (
                    m(t) ||
                      (t = function (e, t) {
                        if (
                          ('function' == typeof n && (t = n.call(this, e, t)),
                          !$(t))
                        )
                          return t;
                      }),
                    (r[1] = t),
                    L.apply(A, r)
                  );
              },
            },
          ),
        P.prototype[F] || n('khJW')(P.prototype, F, P.prototype.valueOf),
        f(P, 'Symbol'),
        f(Math, 'Math', !0),
        f(r.JSON, 'JSON', !0);
    },
    Fu1i: function (e, t, n) {
      'use strict';
      var r = n('SwRI'),
        o = n('vVR7'),
        i = n('AZRH'),
        s = n('khJW'),
        a = n('V3uq'),
        u = n('R99l'),
        c = n('AuAe'),
        l = n('pZZ2'),
        f = n('IXQl')('iterator'),
        d = !([].keys && 'next' in [].keys()),
        p = function () {
          return this;
        };
      e.exports = function (e, t, n, h, g, v, m) {
        u(n, t, h);
        var y,
          b,
          _,
          w = function (e) {
            if (!d && e in O) return O[e];
            switch (e) {
              case 'keys':
              case 'values':
                return function () {
                  return new n(this, e);
                };
            }
            return function () {
              return new n(this, e);
            };
          },
          x = t + ' Iterator',
          S = 'values' == g,
          E = !1,
          O = e.prototype,
          T = O[f] || O['@@iterator'] || (g && O[g]),
          k = T || w(g),
          N = g ? (S ? w('entries') : k) : void 0,
          C = ('Array' == t && O.entries) || T;
        if (
          (C &&
            (_ = l(C.call(new e()))) !== Object.prototype &&
            _.next &&
            (c(_, x, !0), r || 'function' == typeof _[f] || s(_, f, p)),
          S &&
            T &&
            'values' !== T.name &&
            ((E = !0),
            (k = function () {
              return T.call(this);
            })),
          (r && !m) || (!d && !E && O[f]) || s(O, f, k),
          (a[t] = k),
          (a[x] = p),
          g)
        )
          if (
            ((y = {
              values: S ? k : w('values'),
              keys: v ? k : w('keys'),
              entries: N,
            }),
            m)
          )
            for (b in y) b in O || i(O, b, y[b]);
          else o(o.P + o.F * (d || E), t, y);
        return y;
      };
    },
    H46L: function (e, t) {
      e.exports = function (e) {
        if (null == e) throw TypeError("Can't call method on  " + e);
        return e;
      };
    },
    HbRj: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('ogJP'),
        o = /{(\w+)}/g,
        i = /{(\d+)}/g;
      String.prototype.format = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = Object(r.isObject)(e[0]),
          s = n ? o : i,
          a = n
            ? function (t, n) {
                var r = e[0];
                return void 0 !== r[n] ? r[n] : t;
              }
            : function (t, n) {
                var r = parseInt(n, 10),
                  o = e[r];
                return void 0 !== o ? o : t;
              };
        return this.replace(s, a);
      };
    },
    IXQl: function (e, t, n) {
      var r = n('8ICS')('wks'),
        o = n('QqfT'),
        i = n('KGgr').Symbol,
        s = 'function' == typeof i;
      (e.exports = function (e) {
        return r[e] || (r[e] = (s && i[e]) || (s ? i : o)('Symbol.' + e));
      }).store = r;
    },
    IbiK: function (e, t) {
      e.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
        ',',
      );
    },
    IxbO: function (e, t, n) {
      var r = n('qKVQ'),
        o = n('IXQl')('toStringTag'),
        i =
          'Arguments' ==
          r(
            (function () {
              return arguments;
            })(),
          );
      e.exports = function (e) {
        var t, n, s;
        return void 0 === e
          ? 'Undefined'
          : null === e
          ? 'Null'
          : 'string' ==
            typeof (n = (function (e, t) {
              try {
                return e[t];
              } catch (n) {}
            })((t = Object(e)), o))
          ? n
          : i
          ? r(t)
          : 'Object' == (s = r(t)) && 'function' == typeof t.callee
          ? 'Arguments'
          : s;
      };
    },
    Jchv: function (e, t, n) {
      var r, o, i;
      (o = [n('P5fv'), n('Qwlt')]),
        void 0 ===
          (i =
            'function' ==
            typeof (r = function (e) {
              return (
                (function () {
                  var t,
                    n = Math.max,
                    r = Math.abs,
                    o = /left|center|right/,
                    i = /top|center|bottom/,
                    s = /[\+\-]\d+(\.[\d]+)?%?/,
                    a = /^\w+/,
                    u = /%$/,
                    c = e.fn.position;
                  function l(e, t, n) {
                    return [
                      parseFloat(e[0]) * (u.test(e[0]) ? t / 100 : 1),
                      parseFloat(e[1]) * (u.test(e[1]) ? n / 100 : 1),
                    ];
                  }
                  function f(t, n) {
                    return parseInt(e.css(t, n), 10) || 0;
                  }
                  function d(t) {
                    var n = t[0];
                    return 9 === n.nodeType
                      ? {
                          width: t.width(),
                          height: t.height(),
                          offset: { top: 0, left: 0 },
                        }
                      : e.isWindow(n)
                      ? {
                          width: t.width(),
                          height: t.height(),
                          offset: { top: t.scrollTop(), left: t.scrollLeft() },
                        }
                      : n.preventDefault
                      ? {
                          width: 0,
                          height: 0,
                          offset: { top: n.pageY, left: n.pageX },
                        }
                      : {
                          width: t.outerWidth(),
                          height: t.outerHeight(),
                          offset: t.offset(),
                        };
                  }
                  (e.position = {
                    scrollbarWidth: function () {
                      if (void 0 !== t) return t;
                      var n,
                        r,
                        o = e(
                          "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>",
                        ),
                        i = o.children()[0];
                      return (
                        e('body').append(o),
                        (n = i.offsetWidth),
                        o.css('overflow', 'scroll'),
                        n === (r = i.offsetWidth) && (r = o[0].clientWidth),
                        o.remove(),
                        (t = n - r)
                      );
                    },
                    getScrollInfo: function (t) {
                      var n =
                          t.isWindow || t.isDocument
                            ? ''
                            : t.element.css('overflow-x'),
                        r =
                          t.isWindow || t.isDocument
                            ? ''
                            : t.element.css('overflow-y'),
                        o =
                          'scroll' === n ||
                          ('auto' === n && t.width < t.element[0].scrollWidth);
                      return {
                        width:
                          'scroll' === r ||
                          ('auto' === r && t.height < t.element[0].scrollHeight)
                            ? e.position.scrollbarWidth()
                            : 0,
                        height: o ? e.position.scrollbarWidth() : 0,
                      };
                    },
                    getWithinInfo: function (t) {
                      var n = e(t || window),
                        r = e.isWindow(n[0]),
                        o = !!n[0] && 9 === n[0].nodeType;
                      return {
                        element: n,
                        isWindow: r,
                        isDocument: o,
                        offset: r || o ? { left: 0, top: 0 } : e(t).offset(),
                        scrollLeft: n.scrollLeft(),
                        scrollTop: n.scrollTop(),
                        width: n.outerWidth(),
                        height: n.outerHeight(),
                      };
                    },
                  }),
                    (e.fn.position = function (t) {
                      if (!t || !t.of) return c.apply(this, arguments);
                      t = e.extend({}, t);
                      var u,
                        p,
                        h,
                        g,
                        v,
                        m,
                        y = e(t.of),
                        b = e.position.getWithinInfo(t.within),
                        _ = e.position.getScrollInfo(b),
                        w = (t.collision || 'flip').split(' '),
                        x = {};
                      return (
                        (m = d(y)),
                        y[0].preventDefault && (t.at = 'left top'),
                        (p = m.width),
                        (h = m.height),
                        (g = m.offset),
                        (v = e.extend({}, g)),
                        e.each(['my', 'at'], function () {
                          var e,
                            n,
                            r = (t[this] || '').split(' ');
                          1 === r.length &&
                            (r = o.test(r[0])
                              ? r.concat(['center'])
                              : i.test(r[0])
                              ? ['center'].concat(r)
                              : ['center', 'center']),
                            (r[0] = o.test(r[0]) ? r[0] : 'center'),
                            (r[1] = i.test(r[1]) ? r[1] : 'center'),
                            (e = s.exec(r[0])),
                            (n = s.exec(r[1])),
                            (x[this] = [e ? e[0] : 0, n ? n[0] : 0]),
                            (t[this] = [a.exec(r[0])[0], a.exec(r[1])[0]]);
                        }),
                        1 === w.length && (w[1] = w[0]),
                        'right' === t.at[0]
                          ? (v.left += p)
                          : 'center' === t.at[0] && (v.left += p / 2),
                        'bottom' === t.at[1]
                          ? (v.top += h)
                          : 'center' === t.at[1] && (v.top += h / 2),
                        (u = l(x.at, p, h)),
                        (v.left += u[0]),
                        (v.top += u[1]),
                        this.each(function () {
                          var o,
                            i,
                            s = e(this),
                            a = s.outerWidth(),
                            c = s.outerHeight(),
                            d = f(this, 'marginLeft'),
                            m = f(this, 'marginTop'),
                            S = a + d + f(this, 'marginRight') + _.width,
                            E = c + m + f(this, 'marginBottom') + _.height,
                            O = e.extend({}, v),
                            T = l(x.my, s.outerWidth(), s.outerHeight());
                          'right' === t.my[0]
                            ? (O.left -= a)
                            : 'center' === t.my[0] && (O.left -= a / 2),
                            'bottom' === t.my[1]
                              ? (O.top -= c)
                              : 'center' === t.my[1] && (O.top -= c / 2),
                            (O.left += T[0]),
                            (O.top += T[1]),
                            (o = { marginLeft: d, marginTop: m }),
                            e.each(['left', 'top'], function (n, r) {
                              e.ui.position[w[n]] &&
                                e.ui.position[w[n]][r](O, {
                                  targetWidth: p,
                                  targetHeight: h,
                                  elemWidth: a,
                                  elemHeight: c,
                                  collisionPosition: o,
                                  collisionWidth: S,
                                  collisionHeight: E,
                                  offset: [u[0] + T[0], u[1] + T[1]],
                                  my: t.my,
                                  at: t.at,
                                  within: b,
                                  elem: s,
                                });
                            }),
                            t.using &&
                              (i = function (e) {
                                var o = g.left - O.left,
                                  i = o + p - a,
                                  u = g.top - O.top,
                                  l = u + h - c,
                                  f = {
                                    target: {
                                      element: y,
                                      left: g.left,
                                      top: g.top,
                                      width: p,
                                      height: h,
                                    },
                                    element: {
                                      element: s,
                                      left: O.left,
                                      top: O.top,
                                      width: a,
                                      height: c,
                                    },
                                    horizontal:
                                      i < 0
                                        ? 'left'
                                        : o > 0
                                        ? 'right'
                                        : 'center',
                                    vertical:
                                      l < 0
                                        ? 'top'
                                        : u > 0
                                        ? 'bottom'
                                        : 'middle',
                                  };
                                p < a &&
                                  r(o + i) < p &&
                                  (f.horizontal = 'center'),
                                  h < c &&
                                    r(u + l) < h &&
                                    (f.vertical = 'middle'),
                                  n(r(o), r(i)) > n(r(u), r(l))
                                    ? (f.important = 'horizontal')
                                    : (f.important = 'vertical'),
                                  t.using.call(this, e, f);
                              }),
                            s.offset(e.extend(O, { using: i }));
                        })
                      );
                    }),
                    (e.ui.position = {
                      fit: {
                        left: function (e, t) {
                          var r,
                            o = t.within,
                            i = o.isWindow ? o.scrollLeft : o.offset.left,
                            s = o.width,
                            a = e.left - t.collisionPosition.marginLeft,
                            u = i - a,
                            c = a + t.collisionWidth - s - i;
                          t.collisionWidth > s
                            ? u > 0 && c <= 0
                              ? ((r = e.left + u + t.collisionWidth - s - i),
                                (e.left += u - r))
                              : (e.left =
                                  c > 0 && u <= 0
                                    ? i
                                    : u > c
                                    ? i + s - t.collisionWidth
                                    : i)
                            : u > 0
                            ? (e.left += u)
                            : c > 0
                            ? (e.left -= c)
                            : (e.left = n(e.left - a, e.left));
                        },
                        top: function (e, t) {
                          var r,
                            o = t.within,
                            i = o.isWindow ? o.scrollTop : o.offset.top,
                            s = t.within.height,
                            a = e.top - t.collisionPosition.marginTop,
                            u = i - a,
                            c = a + t.collisionHeight - s - i;
                          t.collisionHeight > s
                            ? u > 0 && c <= 0
                              ? ((r = e.top + u + t.collisionHeight - s - i),
                                (e.top += u - r))
                              : (e.top =
                                  c > 0 && u <= 0
                                    ? i
                                    : u > c
                                    ? i + s - t.collisionHeight
                                    : i)
                            : u > 0
                            ? (e.top += u)
                            : c > 0
                            ? (e.top -= c)
                            : (e.top = n(e.top - a, e.top));
                        },
                      },
                      flip: {
                        left: function (e, t) {
                          var n,
                            o,
                            i = t.within,
                            s = i.offset.left + i.scrollLeft,
                            a = i.width,
                            u = i.isWindow ? i.scrollLeft : i.offset.left,
                            c = e.left - t.collisionPosition.marginLeft,
                            l = c - u,
                            f = c + t.collisionWidth - a - u,
                            d =
                              'left' === t.my[0]
                                ? -t.elemWidth
                                : 'right' === t.my[0]
                                ? t.elemWidth
                                : 0,
                            p =
                              'left' === t.at[0]
                                ? t.targetWidth
                                : 'right' === t.at[0]
                                ? -t.targetWidth
                                : 0,
                            h = -2 * t.offset[0];
                          l < 0
                            ? ((n =
                                e.left + d + p + h + t.collisionWidth - a - s) <
                                0 ||
                                n < r(l)) &&
                              (e.left += d + p + h)
                            : f > 0 &&
                              ((o =
                                e.left -
                                t.collisionPosition.marginLeft +
                                d +
                                p +
                                h -
                                u) > 0 ||
                                r(o) < f) &&
                              (e.left += d + p + h);
                        },
                        top: function (e, t) {
                          var n,
                            o,
                            i = t.within,
                            s = i.offset.top + i.scrollTop,
                            a = i.height,
                            u = i.isWindow ? i.scrollTop : i.offset.top,
                            c = e.top - t.collisionPosition.marginTop,
                            l = c - u,
                            f = c + t.collisionHeight - a - u,
                            d =
                              'top' === t.my[1]
                                ? -t.elemHeight
                                : 'bottom' === t.my[1]
                                ? t.elemHeight
                                : 0,
                            p =
                              'top' === t.at[1]
                                ? t.targetHeight
                                : 'bottom' === t.at[1]
                                ? -t.targetHeight
                                : 0,
                            h = -2 * t.offset[1];
                          l < 0
                            ? ((o =
                                e.top + d + p + h + t.collisionHeight - a - s) <
                                0 ||
                                o < r(l)) &&
                              (e.top += d + p + h)
                            : f > 0 &&
                              ((n =
                                e.top -
                                t.collisionPosition.marginTop +
                                d +
                                p +
                                h -
                                u) > 0 ||
                                r(n) < f) &&
                              (e.top += d + p + h);
                        },
                      },
                      flipfit: {
                        left: function () {
                          e.ui.position.flip.left.apply(this, arguments),
                            e.ui.position.fit.left.apply(this, arguments);
                        },
                        top: function () {
                          e.ui.position.flip.top.apply(this, arguments),
                            e.ui.position.fit.top.apply(this, arguments);
                        },
                      },
                    });
                })(),
                e.ui.position
              );
            })
              ? r.apply(t, o)
              : r) || (e.exports = i);
    },
    Jdba: function (e, t, n) {
      var r = n('9TFj');
      e.exports = function (e, t, n, o) {
        try {
          return o ? t(r(n)[0], n[1]) : t(n);
        } catch (s) {
          var i = e.return;
          throw (void 0 !== i && r(i.call(e)), s);
        }
      };
    },
    JwWU: function (e, t) {
      e.exports = function (e, t) {
        return { value: t, done: !!e };
      };
    },
    KGgr: function (e, t) {
      var n = (e.exports =
        'undefined' != typeof window && window.Math == Math
          ? window
          : 'undefined' != typeof self && self.Math == Math
          ? self
          : Function('return this')());
      'number' == typeof __g && (__g = n);
    },
    Kc4g: function (e, t, n) {
      var r = n('zY5Q'),
        o = Math.floor;
      e.exports = function (e) {
        return !r(e) && isFinite(e) && o(e) === e;
      };
    },
    Kxc7: function (e, t, n) {
      var r = n('qlfx'),
        o = {},
        i = {},
        s = {},
        a = {
          init: function () {
            var e, t;
            Object.keys(r).forEach(function (n) {
              (e = r[n]),
                (t = e.subsets),
                Array.isArray(t)
                  ? t.forEach(function (e) {
                      o[e] = 1;
                    })
                  : t &&
                    Object.keys(t).forEach(function (e) {
                      o[e] = 1;
                    }),
                (o[n] = 1);
            });
            var n,
              u = Object.keys(o);
            u.forEach(function (e) {
              u.forEach(function (o) {
                if (void 0 !== (n = r[o])) {
                  if (!(t = n.subsets)) return;
                  i.hasOwnProperty(e) || (i[e] = []),
                    ((Array.isArray(t) && ~t.indexOf(e)) || e in t) &&
                      i[e].push(o);
                }
              });
            }),
              'undefined' != typeof __initialDisabledFeaturesets &&
                __initialDisabledFeaturesets &&
                __initialDisabledFeaturesets.forEach(function (e) {
                  a.disable(e);
                }),
              'undefined' != typeof __initialEnabledFeaturesets &&
                __initialEnabledFeaturesets &&
                __initialEnabledFeaturesets.forEach(function (e) {
                  a.enable(e);
                }),
              'undefined' != typeof window && (window.Featuresets = a),
              (this.meta = {
                _uniqueSetsNames: o,
                _setsReverseDependencies: i,
                _setsStates: s,
              });
          },
          enabled: function (e) {
            var t = function (e) {
              var n = i.hasOwnProperty(e) ? i[e] : [];
              if (!1 === s[e]) return !1;
              for (var r = s[e], o = 0; o < n.length; ++o) r |= t(n[o]);
              return r;
            };
            return !!t(e);
          },
          enable: function (e) {
            s[e] = !0;
          },
          disable: function (e) {
            s[e] = !1;
          },
          setEnabled: function (e, t) {
            s[e] = !!t;
          },
          getAllFeatures: function () {
            var e = {};
            return (
              Object.keys(o).forEach(function (t) {
                e[t] = s[t];
              }),
              e
            );
          },
        };
      a.init(), (e.exports = a);
    },
    LHOG: function (e, t, n) {
      var r = n('vVR7'),
        o = n('hrFL');
      r(r.S + r.F * (Number.parseFloat != o), 'Number', { parseFloat: o });
    },
    MIQu: function (e, t, n) {
      var r, o, i;
      (o = [n('P5fv'), n('Qwlt')]),
        void 0 ===
          (i =
            'function' ==
            typeof (r = function (e) {
              var t,
                n = 0,
                r = Array.prototype.slice;
              return (
                (e.cleanData =
                  ((t = e.cleanData),
                  function (n) {
                    var r, o, i;
                    for (i = 0; null != (o = n[i]); i++)
                      try {
                        (r = e._data(o, 'events')) &&
                          r.remove &&
                          e(o).triggerHandler('remove');
                      } catch (s) {}
                    t(n);
                  })),
                (e.widget = function (t, n, r) {
                  var o,
                    i,
                    s,
                    a = {},
                    u = t.split('.')[0],
                    c = u + '-' + (t = t.split('.')[1]);
                  return (
                    r || ((r = n), (n = e.Widget)),
                    e.isArray(r) && (r = e.extend.apply(null, [{}].concat(r))),
                    (e.expr[':'][c.toLowerCase()] = function (t) {
                      return !!e.data(t, c);
                    }),
                    (e[u] = e[u] || {}),
                    (o = e[u][t]),
                    (i = e[u][t] = function (e, t) {
                      if (!this._createWidget) return new i(e, t);
                      arguments.length && this._createWidget(e, t);
                    }),
                    e.extend(i, o, {
                      version: r.version,
                      _proto: e.extend({}, r),
                      _childConstructors: [],
                    }),
                    ((s = new n()).options = e.widget.extend({}, s.options)),
                    e.each(r, function (t, r) {
                      e.isFunction(r)
                        ? (a[t] = (function () {
                            function e() {
                              return n.prototype[t].apply(this, arguments);
                            }
                            function o(e) {
                              return n.prototype[t].apply(this, e);
                            }
                            return function () {
                              var t,
                                n = this._super,
                                i = this._superApply;
                              return (
                                (this._super = e),
                                (this._superApply = o),
                                (t = r.apply(this, arguments)),
                                (this._super = n),
                                (this._superApply = i),
                                t
                              );
                            };
                          })())
                        : (a[t] = r);
                    }),
                    (i.prototype = e.widget.extend(
                      s,
                      {
                        widgetEventPrefix: (o && s.widgetEventPrefix) || t,
                      },
                      a,
                      {
                        constructor: i,
                        namespace: u,
                        widgetName: t,
                        widgetFullName: c,
                      },
                    )),
                    o
                      ? (e.each(o._childConstructors, function (t, n) {
                          var r = n.prototype;
                          e.widget(
                            r.namespace + '.' + r.widgetName,
                            i,
                            n._proto,
                          );
                        }),
                        delete o._childConstructors)
                      : n._childConstructors.push(i),
                    e.widget.bridge(t, i),
                    i
                  );
                }),
                (e.widget.extend = function (t) {
                  for (
                    var n, o, i = r.call(arguments, 1), s = 0, a = i.length;
                    s < a;
                    s++
                  )
                    for (n in i[s])
                      (o = i[s][n]),
                        i[s].hasOwnProperty(n) &&
                          void 0 !== o &&
                          (e.isPlainObject(o)
                            ? (t[n] = e.isPlainObject(t[n])
                                ? e.widget.extend({}, t[n], o)
                                : e.widget.extend({}, o))
                            : (t[n] = o));
                  return t;
                }),
                (e.widget.bridge = function (t, n) {
                  var o = n.prototype.widgetFullName || t;
                  e.fn[t] = function (i) {
                    var s = 'string' == typeof i,
                      a = r.call(arguments, 1),
                      u = this;
                    return (
                      s
                        ? this.length || 'instance' !== i
                          ? this.each(function () {
                              var n,
                                r = e.data(this, o);
                              return 'instance' === i
                                ? ((u = r), !1)
                                : r
                                ? e.isFunction(r[i]) && '_' !== i.charAt(0)
                                  ? (n = r[i].apply(r, a)) !== r && void 0 !== n
                                    ? ((u =
                                        n && n.jquery
                                          ? u.pushStack(n.get())
                                          : n),
                                      !1)
                                    : void 0
                                  : e.error(
                                      "no such method '" +
                                        i +
                                        "' for " +
                                        t +
                                        ' widget instance',
                                    )
                                : e.error(
                                    'cannot call methods on ' +
                                      t +
                                      " prior to initialization; attempted to call method '" +
                                      i +
                                      "'",
                                  );
                            })
                          : (u = void 0)
                        : (a.length &&
                            (i = e.widget.extend.apply(null, [i].concat(a))),
                          this.each(function () {
                            var t = e.data(this, o);
                            t
                              ? (t.option(i || {}), t._init && t._init())
                              : e.data(this, o, new n(i, this));
                          })),
                      u
                    );
                  };
                }),
                (e.Widget = function () {}),
                (e.Widget._childConstructors = []),
                (e.Widget.prototype = {
                  widgetName: 'widget',
                  widgetEventPrefix: '',
                  defaultElement: '<div>',
                  options: { classes: {}, disabled: !1, create: null },
                  _createWidget: function (t, r) {
                    (r = e(r || this.defaultElement || this)[0]),
                      (this.element = e(r)),
                      (this.uuid = n++),
                      (this.eventNamespace = '.' + this.widgetName + this.uuid),
                      (this.bindings = e()),
                      (this.hoverable = e()),
                      (this.focusable = e()),
                      (this.classesElementLookup = {}),
                      r !== this &&
                        (e.data(r, this.widgetFullName, this),
                        this._on(!0, this.element, {
                          remove: function (e) {
                            e.target === r && this.destroy();
                          },
                        }),
                        (this.document = e(
                          r.style ? r.ownerDocument : r.document || r,
                        )),
                        (this.window = e(
                          this.document[0].defaultView ||
                            this.document[0].parentWindow,
                        ))),
                      (this.options = e.widget.extend(
                        {},
                        this.options,
                        this._getCreateOptions(),
                        t,
                      )),
                      this._create(),
                      this.options.disabled &&
                        this._setOptionDisabled(this.options.disabled),
                      this._trigger('create', null, this._getCreateEventData()),
                      this._init();
                  },
                  _getCreateOptions: function () {
                    return {};
                  },
                  _getCreateEventData: e.noop,
                  _create: e.noop,
                  _init: e.noop,
                  destroy: function () {
                    var t = this;
                    this._destroy(),
                      e.each(this.classesElementLookup, function (e, n) {
                        t._removeClass(n, e);
                      }),
                      this.element
                        .off(this.eventNamespace)
                        .removeData(this.widgetFullName),
                      this.widget()
                        .off(this.eventNamespace)
                        .removeAttr('aria-disabled'),
                      this.bindings.off(this.eventNamespace);
                  },
                  _destroy: e.noop,
                  widget: function () {
                    return this.element;
                  },
                  option: function (t, n) {
                    var r,
                      o,
                      i,
                      s = t;
                    if (0 === arguments.length)
                      return e.widget.extend({}, this.options);
                    if ('string' == typeof t)
                      if (
                        ((s = {}),
                        (r = t.split('.')),
                        (t = r.shift()),
                        r.length)
                      ) {
                        for (
                          o = s[t] = e.widget.extend({}, this.options[t]),
                            i = 0;
                          i < r.length - 1;
                          i++
                        )
                          (o[r[i]] = o[r[i]] || {}), (o = o[r[i]]);
                        if (((t = r.pop()), 1 === arguments.length))
                          return void 0 === o[t] ? null : o[t];
                        o[t] = n;
                      } else {
                        if (1 === arguments.length)
                          return void 0 === this.options[t]
                            ? null
                            : this.options[t];
                        s[t] = n;
                      }
                    return this._setOptions(s), this;
                  },
                  _setOptions: function (e) {
                    var t;
                    for (t in e) this._setOption(t, e[t]);
                    return this;
                  },
                  _setOption: function (e, t) {
                    return (
                      'classes' === e && this._setOptionClasses(t),
                      (this.options[e] = t),
                      'disabled' === e && this._setOptionDisabled(t),
                      this
                    );
                  },
                  _setOptionClasses: function (t) {
                    var n, r, o;
                    for (n in t)
                      (o = this.classesElementLookup[n]),
                        t[n] !== this.options.classes[n] &&
                          o &&
                          o.length &&
                          ((r = e(o.get())),
                          this._removeClass(o, n),
                          r.addClass(
                            this._classes({
                              element: r,
                              keys: n,
                              classes: t,
                              add: !0,
                            }),
                          ));
                  },
                  _setOptionDisabled: function (e) {
                    this._toggleClass(
                      this.widget(),
                      this.widgetFullName + '-disabled',
                      null,
                      !!e,
                    ),
                      e &&
                        (this._removeClass(
                          this.hoverable,
                          null,
                          'ui-state-hover',
                        ),
                        this._removeClass(
                          this.focusable,
                          null,
                          'ui-state-focus',
                        ));
                  },
                  enable: function () {
                    return this._setOptions({ disabled: !1 });
                  },
                  disable: function () {
                    return this._setOptions({ disabled: !0 });
                  },
                  _classes: function (t) {
                    var n = [],
                      r = this;
                    function o(o, i) {
                      var s, a;
                      for (a = 0; a < o.length; a++)
                        (s = r.classesElementLookup[o[a]] || e()),
                          (s = t.add
                            ? e(e.unique(s.get().concat(t.element.get())))
                            : e(s.not(t.element).get())),
                          (r.classesElementLookup[o[a]] = s),
                          n.push(o[a]),
                          i && t.classes[o[a]] && n.push(t.classes[o[a]]);
                    }
                    return (
                      (t = e.extend(
                        {
                          element: this.element,
                          classes: this.options.classes || {},
                        },
                        t,
                      )),
                      this._on(t.element, { remove: '_untrackClassesElement' }),
                      t.keys && o(t.keys.match(/\S+/g) || [], !0),
                      t.extra && o(t.extra.match(/\S+/g) || []),
                      n.join(' ')
                    );
                  },
                  _untrackClassesElement: function (t) {
                    var n = this;
                    e.each(n.classesElementLookup, function (r, o) {
                      -1 !== e.inArray(t.target, o) &&
                        (n.classesElementLookup[r] = e(o.not(t.target).get()));
                    });
                  },
                  _removeClass: function (e, t, n) {
                    return this._toggleClass(e, t, n, !1);
                  },
                  _addClass: function (e, t, n) {
                    return this._toggleClass(e, t, n, !0);
                  },
                  _toggleClass: function (e, t, n, r) {
                    r = 'boolean' == typeof r ? r : n;
                    var o = 'string' == typeof e || null === e,
                      i = {
                        extra: o ? t : n,
                        keys: o ? e : t,
                        element: o ? this.element : e,
                        add: r,
                      };
                    return i.element.toggleClass(this._classes(i), r), this;
                  },
                  _on: function (t, n, r) {
                    var o,
                      i = this;
                    'boolean' != typeof t && ((r = n), (n = t), (t = !1)),
                      r
                        ? ((n = o = e(n)),
                          (this.bindings = this.bindings.add(n)))
                        : ((r = n), (n = this.element), (o = this.widget())),
                      e.each(r, function (r, s) {
                        function a() {
                          if (
                            t ||
                            (!0 !== i.options.disabled &&
                              !e(this).hasClass('ui-state-disabled'))
                          )
                            return ('string' == typeof s ? i[s] : s).apply(
                              i,
                              arguments,
                            );
                        }
                        'string' != typeof s &&
                          (a.guid = s.guid = s.guid || a.guid || e.guid++);
                        var u = r.match(/^([\w:-]*)\s*(.*)$/),
                          c = u[1] + i.eventNamespace,
                          l = u[2];
                        l ? o.on(c, l, a) : n.on(c, a);
                      });
                  },
                  _off: function (t, n) {
                    (n =
                      (n || '').split(' ').join(this.eventNamespace + ' ') +
                      this.eventNamespace),
                      t.off(n).off(n),
                      (this.bindings = e(this.bindings.not(t).get())),
                      (this.focusable = e(this.focusable.not(t).get())),
                      (this.hoverable = e(this.hoverable.not(t).get()));
                  },
                  _delay: function (e, t) {
                    var n = this;
                    return setTimeout(function () {
                      return ('string' == typeof e ? n[e] : e).apply(
                        n,
                        arguments,
                      );
                    }, t || 0);
                  },
                  _hoverable: function (t) {
                    (this.hoverable = this.hoverable.add(t)),
                      this._on(t, {
                        mouseenter: function (t) {
                          this._addClass(
                            e(t.currentTarget),
                            null,
                            'ui-state-hover',
                          );
                        },
                        mouseleave: function (t) {
                          this._removeClass(
                            e(t.currentTarget),
                            null,
                            'ui-state-hover',
                          );
                        },
                      });
                  },
                  _focusable: function (t) {
                    (this.focusable = this.focusable.add(t)),
                      this._on(t, {
                        focusin: function (t) {
                          this._addClass(
                            e(t.currentTarget),
                            null,
                            'ui-state-focus',
                          );
                        },
                        focusout: function (t) {
                          this._removeClass(
                            e(t.currentTarget),
                            null,
                            'ui-state-focus',
                          );
                        },
                      });
                  },
                  _trigger: function (t, n, r) {
                    var o,
                      i,
                      s = this.options[t];
                    if (
                      ((r = r || {}),
                      ((n = e.Event(n)).type = (t === this.widgetEventPrefix
                        ? t
                        : this.widgetEventPrefix + t
                      ).toLowerCase()),
                      (n.target = this.element[0]),
                      (i = n.originalEvent))
                    )
                      for (o in i) o in n || (n[o] = i[o]);
                    return (
                      this.element.trigger(n, r),
                      !(
                        (e.isFunction(s) &&
                          !1 === s.apply(this.element[0], [n].concat(r))) ||
                        n.isDefaultPrevented()
                      )
                    );
                  },
                }),
                e.each({ show: 'fadeIn', hide: 'fadeOut' }, function (t, n) {
                  e.Widget.prototype['_' + t] = function (r, o, i) {
                    var s;
                    'string' == typeof o && (o = { effect: o });
                    var a = o
                      ? !0 === o || 'number' == typeof o
                        ? n
                        : o.effect || n
                      : t;
                    'number' == typeof (o = o || {}) && (o = { duration: o }),
                      (s = !e.isEmptyObject(o)),
                      (o.complete = i),
                      o.delay && r.delay(o.delay),
                      s && e.effects && e.effects.effect[a]
                        ? r[t](o)
                        : a !== t && r[a]
                        ? r[a](o.duration, o.easing, i)
                        : r.queue(function (n) {
                            e(this)[t](), i && i.call(r[0]), n();
                          });
                  };
                }),
                e.widget
              );
            })
              ? r.apply(t, o)
              : r) || (e.exports = i);
    },
    Myip: function (e, t, n) {
      'use strict';
      n.r(t);
      n('fPeS'), n('MIQu'), n('iGnl'), n('Jchv'), n('/82Z');
    },
    NFwL: function (e, t, n) {
      'use strict';
      var r = n('hvJ5'),
        o = n('vVR7'),
        i = n('XSq2'),
        s = n('Jdba'),
        a = n('lHEB'),
        u = n('bSmq'),
        c = n('D5V3'),
        l = n('f8KY');
      o(
        o.S +
          o.F *
            !n('zP2l')(function (e) {
              Array.from(e);
            }),
        'Array',
        {
          from: function (e) {
            var t,
              n,
              o,
              f,
              d = i(e),
              p = 'function' == typeof this ? this : Array,
              h = arguments.length,
              g = h > 1 ? arguments[1] : void 0,
              v = void 0 !== g,
              m = 0,
              y = l(d);
            if (
              (v && (g = r(g, h > 2 ? arguments[2] : void 0, 2)),
              null == y || (p == Array && a(y)))
            )
              for (n = new p((t = u(d.length))); t > m; m++)
                c(n, m, v ? g(d[m], m) : d[m]);
            else
              for (f = y.call(d), n = new p(); !(o = f.next()).done; m++)
                c(n, m, v ? s(f, g, [o.value, m], !0) : o.value);
            return (n.length = m), n;
          },
        },
      );
    },
    NHgk: function (e, t, n) {
      var r, o, i;
      (o = [n('P5fv'), n('Qwlt')]),
        void 0 ===
          (i =
            'function' ==
            typeof (r = function (e) {
              return (e.ui.ie = !!/msie [\w.]+/.exec(
                navigator.userAgent.toLowerCase(),
              ));
            })
              ? r.apply(t, o)
              : r) || (e.exports = i);
    },
    'NX6/': function (e, t, n) {
      var r = n('vVR7');
      r(r.S, 'Number', { MIN_SAFE_INTEGER: -9007199254740991 });
    },
    'O6f/': function (e, t, n) {
      e.exports =
        !n('nULH') &&
        !n('u52/')(function () {
          return (
            7 !=
            Object.defineProperty(n('9S7S')('div'), 'a', {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    OHC2: function (e, t, n) {
      var r = n('AZRH');
      e.exports = function (e, t, n) {
        for (var o in t) r(e, o, t[o], n);
        return e;
      };
    },
    OKbE: function (e, t) {
      e.exports = function (e, t, n, r) {
        if (!(e instanceof t) || (void 0 !== r && r in e))
          throw TypeError(n + ': incorrect invocation!');
        return e;
      };
    },
    'OlM/': function (e, t, n) {
      var r = n('IXQl')('unscopables'),
        o = Array.prototype;
      null == o[r] && n('khJW')(o, r, {}),
        (e.exports = function (e) {
          o[r][e] = !0;
        });
    },
    OpLF: function (e, t, n) {
      var r = n('KGgr').document;
      e.exports = r && r.documentElement;
    },
    P5fv: function (e, t) {
      var n = window.document,
        r = window.navigator,
        o = window.location,
        i = (function () {
          var e,
            t,
            o,
            i,
            s = function (t, n) {
              return new s.fn.init(t, n, e);
            },
            a = window.jQuery,
            u = window.$,
            c = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
            l = /\S/,
            f = /^\s+/,
            d = /\s+$/,
            p = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
            h = /^[\],:{}\s]*$/,
            g = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            v = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            m = /(?:^|:|,)(?:\s*\[)+/g,
            y = /(webkit)[ \/]([\w.]+)/,
            b = /(opera)(?:.*version)?[ \/]([\w.]+)/,
            _ = /(msie) ([\w.]+)/,
            w = /(mozilla)(?:.*? rv:([\w.]+))?/,
            x = /-([a-z]|[0-9])/gi,
            S = /^-ms-/,
            E = function (e, t) {
              return (t + '').toUpperCase();
            },
            O = r.userAgent,
            T = Object.prototype.toString,
            k = Object.prototype.hasOwnProperty,
            N = Array.prototype.push,
            C = Array.prototype.slice,
            j = String.prototype.trim,
            P = Array.prototype.indexOf,
            A = {};
          function L() {
            if (!s.isReady) {
              try {
                n.documentElement.doScroll('left');
              } catch (e) {
                return void setTimeout(L, 1);
              }
              s.ready();
            }
          }
          return (
            (s.fn = s.prototype = {
              constructor: s,
              init: function (e, t, r) {
                var o, i, a, u;
                if (!e) return this;
                if (e.nodeType)
                  return (this.context = this[0] = e), (this.length = 1), this;
                if ('body' === e && !t && n.body)
                  return (
                    (this.context = n),
                    (this[0] = n.body),
                    (this.selector = e),
                    (this.length = 1),
                    this
                  );
                if ('string' == typeof e) {
                  if (
                    !(o =
                      '<' === e.charAt(0) &&
                      '>' === e.charAt(e.length - 1) &&
                      e.length >= 3
                        ? [null, e, null]
                        : c.exec(e)) ||
                    (!o[1] && t)
                  )
                    return !t || t.jquery
                      ? (t || r).find(e)
                      : this.constructor(t).find(e);
                  if (o[1])
                    return (
                      (u = (t = t instanceof s ? t[0] : t)
                        ? t.ownerDocument || t
                        : n),
                      (a = p.exec(e))
                        ? s.isPlainObject(t)
                          ? ((e = [n.createElement(a[1])]),
                            s.fn.attr.call(e, t, !0))
                          : (e = [u.createElement(a[1])])
                        : (e = ((a = s.buildFragment([o[1]], [u])).cacheable
                            ? s.clone(a.fragment)
                            : a.fragment
                          ).childNodes),
                      s.merge(this, e)
                    );
                  if ((i = n.getElementById(o[2])) && i.parentNode) {
                    if (i.id !== o[2]) return r.find(e);
                    (this.length = 1), (this[0] = i);
                  }
                  return (this.context = n), (this.selector = e), this;
                }
                return s.isFunction(e)
                  ? r.ready(e)
                  : (void 0 !== e.selector &&
                      ((this.selector = e.selector),
                      (this.context = e.context)),
                    s.makeArray(e, this));
              },
              selector: '',
              jquery: '1.7.2',
              length: 0,
              size: function () {
                return this.length;
              },
              toArray: function () {
                return C.call(this, 0);
              },
              get: function (e) {
                return null == e
                  ? this.toArray()
                  : e < 0
                  ? this[this.length + e]
                  : this[e];
              },
              pushStack: function (e, t, n) {
                var r = this.constructor();
                return (
                  s.isArray(e) ? N.apply(r, e) : s.merge(r, e),
                  (r.prevObject = this),
                  (r.context = this.context),
                  'find' === t
                    ? (r.selector =
                        this.selector + (this.selector ? ' ' : '') + n)
                    : t &&
                      (r.selector = this.selector + '.' + t + '(' + n + ')'),
                  r
                );
              },
              each: function (e, t) {
                return s.each(this, e, t);
              },
              ready: function (e) {
                return s.bindReady(), o.add(e), this;
              },
              eq: function (e) {
                return -1 === (e = +e) ? this.slice(e) : this.slice(e, e + 1);
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              slice: function () {
                return this.pushStack(
                  C.apply(this, arguments),
                  'slice',
                  C.call(arguments).join(','),
                );
              },
              map: function (e) {
                return this.pushStack(
                  s.map(this, function (t, n) {
                    return e.call(t, n, t);
                  }),
                );
              },
              end: function () {
                return this.prevObject || this.constructor(null);
              },
              push: N,
              sort: [].sort,
              splice: [].splice,
            }),
            (s.fn.init.prototype = s.fn),
            (s.extend = s.fn.extend = function () {
              var e,
                t,
                n,
                r,
                o,
                i,
                a = arguments[0] || {},
                u = 1,
                c = arguments.length,
                l = !1;
              for (
                'boolean' == typeof a &&
                  ((l = a), (a = arguments[1] || {}), (u = 2)),
                  'object' == typeof a || s.isFunction(a) || (a = {}),
                  c === u && ((a = this), --u);
                u < c;
                u++
              )
                if (null != (e = arguments[u]))
                  for (t in e)
                    (n = a[t]),
                      a !== (r = e[t]) &&
                        (l && r && (s.isPlainObject(r) || (o = s.isArray(r)))
                          ? (o
                              ? ((o = !1), (i = n && s.isArray(n) ? n : []))
                              : (i = n && s.isPlainObject(n) ? n : {}),
                            (a[t] = s.extend(l, i, r)))
                          : void 0 !== r && (a[t] = r));
              return a;
            }),
            s.extend({
              noConflict: function (e) {
                return (
                  window.$ === s && (window.$ = u),
                  e && window.jQuery === s && (window.jQuery = a),
                  s
                );
              },
              isReady: !1,
              readyWait: 1,
              holdReady: function (e) {
                e ? s.readyWait++ : s.ready(!0);
              },
              ready: function (e) {
                if ((!0 === e && !--s.readyWait) || (!0 !== e && !s.isReady)) {
                  if (!n.body) return setTimeout(s.ready, 1);
                  if (((s.isReady = !0), !0 !== e && --s.readyWait > 0)) return;
                  o.fireWith(n, [s]),
                    s.fn.trigger && s(n).trigger('ready').off('ready');
                }
              },
              bindReady: function () {
                if (!o) {
                  if (
                    ((o = s.Callbacks('once memory')),
                    'complete' === n.readyState)
                  )
                    return setTimeout(s.ready, 1);
                  if (n.addEventListener)
                    n.addEventListener('DOMContentLoaded', i, !1),
                      window.addEventListener('load', s.ready, !1);
                  else if (n.attachEvent) {
                    n.attachEvent('onreadystatechange', i),
                      window.attachEvent('onload', s.ready);
                    var e = !1;
                    try {
                      e = null == window.frameElement;
                    } catch (t) {}
                    n.documentElement.doScroll && e && L();
                  }
                }
              },
              isFunction: function (e) {
                return 'function' === s.type(e);
              },
              isArray:
                Array.isArray ||
                function (e) {
                  return 'array' === s.type(e);
                },
              isWindow: function (e) {
                return null != e && e == e.window;
              },
              isNumeric: function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e);
              },
              type: function (e) {
                return null == e ? String(e) : A[T.call(e)] || 'object';
              },
              isPlainObject: function (e) {
                if (!e || 'object' !== s.type(e) || e.nodeType || s.isWindow(e))
                  return !1;
                try {
                  if (
                    e.constructor &&
                    !k.call(e, 'constructor') &&
                    !k.call(e.constructor.prototype, 'isPrototypeOf')
                  )
                    return !1;
                } catch (n) {
                  return !1;
                }
                var t;
                for (t in e);
                return void 0 === t || k.call(e, t);
              },
              isEmptyObject: function (e) {
                for (var t in e) return !1;
                return !0;
              },
              error: function (e) {
                throw new Error(e);
              },
              parseJSON: function (e) {
                return 'string' == typeof e && e
                  ? ((e = s.trim(e)),
                    window.JSON && window.JSON.parse
                      ? window.JSON.parse(e)
                      : h.test(e.replace(g, '@').replace(v, ']').replace(m, ''))
                      ? new Function('return ' + e)()
                      : void s.error('Invalid JSON: ' + e))
                  : null;
              },
              parseXML: function (e) {
                if ('string' != typeof e || !e) return null;
                var t;
                try {
                  window.DOMParser
                    ? (t = new DOMParser().parseFromString(e, 'text/xml'))
                    : (((t = new ActiveXObject('Microsoft.XMLDOM')).async =
                        'false'),
                      t.loadXML(e));
                } catch (n) {
                  t = void 0;
                }
                return (
                  (t &&
                    t.documentElement &&
                    !t.getElementsByTagName('parsererror').length) ||
                    s.error('Invalid XML: ' + e),
                  t
                );
              },
              noop: function () {},
              globalEval: function (e) {
                e &&
                  l.test(e) &&
                  (
                    window.execScript ||
                    function (e) {
                      window.eval.call(window, e);
                    }
                  )(e);
              },
              camelCase: function (e) {
                return e.replace(S, 'ms-').replace(x, E);
              },
              nodeName: function (e, t) {
                return (
                  e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
                );
              },
              each: function (e, t, n) {
                var r,
                  o = 0,
                  i = e.length,
                  a = void 0 === i || s.isFunction(e);
                if (n)
                  if (a) {
                    for (r in e) if (!1 === t.apply(e[r], n)) break;
                  } else for (; o < i && !1 !== t.apply(e[o++], n); );
                else if (a) {
                  for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                } else for (; o < i && !1 !== t.call(e[o], o, e[o++]); );
                return e;
              },
              trim: j
                ? function (e) {
                    return null == e ? '' : j.call(e);
                  }
                : function (e) {
                    return null == e
                      ? ''
                      : e.toString().replace(f, '').replace(d, '');
                  },
              makeArray: function (e, t) {
                var n = t || [];
                if (null != e) {
                  var r = s.type(e);
                  null == e.length ||
                  'string' === r ||
                  'function' === r ||
                  'regexp' === r ||
                  s.isWindow(e)
                    ? N.call(n, e)
                    : s.merge(n, e);
                }
                return n;
              },
              inArray: function (e, t, n) {
                var r;
                if (t) {
                  if (P) return P.call(t, e, n);
                  for (
                    r = t.length, n = n ? (n < 0 ? Math.max(0, r + n) : n) : 0;
                    n < r;
                    n++
                  )
                    if (n in t && t[n] === e) return n;
                }
                return -1;
              },
              merge: function (e, t) {
                var n = e.length,
                  r = 0;
                if ('number' == typeof t.length)
                  for (var o = t.length; r < o; r++) e[n++] = t[r];
                else for (; void 0 !== t[r]; ) e[n++] = t[r++];
                return (e.length = n), e;
              },
              grep: function (e, t, n) {
                var r = [];
                n = !!n;
                for (var o = 0, i = e.length; o < i; o++)
                  n !== !!t(e[o], o) && r.push(e[o]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  o,
                  i = [],
                  a = 0,
                  u = e.length;
                if (
                  e instanceof s ||
                  (void 0 !== u &&
                    'number' == typeof u &&
                    ((u > 0 && e[0] && e[u - 1]) || 0 === u || s.isArray(e)))
                )
                  for (; a < u; a++)
                    null != (r = t(e[a], a, n)) && (i[i.length] = r);
                else
                  for (o in e) null != (r = t(e[o], o, n)) && (i[i.length] = r);
                return i.concat.apply([], i);
              },
              guid: 1,
              proxy: function (e, t) {
                if ('string' == typeof t) {
                  var n = e[t];
                  (t = e), (e = n);
                }
                if (s.isFunction(e)) {
                  var r = C.call(arguments, 2),
                    o = function () {
                      return e.apply(t, r.concat(C.call(arguments)));
                    };
                  return (o.guid = e.guid = e.guid || o.guid || s.guid++), o;
                }
              },
              access: function (e, t, n, r, o, i, a) {
                var u,
                  c = null == n,
                  l = 0,
                  f = e.length;
                if (n && 'object' == typeof n) {
                  for (l in n) s.access(e, t, l, n[l], 1, i, r);
                  o = 1;
                } else if (void 0 !== r) {
                  if (
                    ((u = void 0 === a && s.isFunction(r)),
                    c &&
                      (u
                        ? ((u = t),
                          (t = function (e, t, n) {
                            return u.call(s(e), n);
                          }))
                        : (t.call(e, r), (t = null))),
                    t)
                  )
                    for (; l < f; l++)
                      t(e[l], n, u ? r.call(e[l], l, t(e[l], n)) : r, a);
                  o = 1;
                }
                return o ? e : c ? t.call(e) : f ? t(e[0], n) : i;
              },
              now: function () {
                return new Date().getTime();
              },
              uaMatch: function (e) {
                e = e.toLowerCase();
                var t =
                  y.exec(e) ||
                  b.exec(e) ||
                  _.exec(e) ||
                  (e.indexOf('compatible') < 0 && w.exec(e)) ||
                  [];
                return { browser: t[1] || '', version: t[2] || '0' };
              },
              sub: function () {
                function e(t, n) {
                  return new e.fn.init(t, n);
                }
                s.extend(!0, e, this),
                  (e.superclass = this),
                  (e.fn = e.prototype = this()),
                  (e.fn.constructor = e),
                  (e.sub = this.sub),
                  (e.fn.init = function (n, r) {
                    return (
                      r && r instanceof s && !(r instanceof e) && (r = e(r)),
                      s.fn.init.call(this, n, r, t)
                    );
                  }),
                  (e.fn.init.prototype = e.fn);
                var t = e(n);
                return e;
              },
              browser: {},
            }),
            s.each(
              'Boolean Number String Function Array Date RegExp Object'.split(
                ' ',
              ),
              function (e, t) {
                A['[object ' + t + ']'] = t.toLowerCase();
              },
            ),
            (t = s.uaMatch(O)).browser &&
              ((s.browser[t.browser] = !0), (s.browser.version = t.version)),
            s.browser.webkit && (s.browser.safari = !0),
            l.test(' ') && ((f = /^[\s\xA0]+/), (d = /[\s\xA0]+$/)),
            (e = s(n)),
            n.addEventListener
              ? (i = function () {
                  n.removeEventListener('DOMContentLoaded', i, !1), s.ready();
                })
              : n.attachEvent &&
                (i = function () {
                  'complete' === n.readyState &&
                    (n.detachEvent('onreadystatechange', i), s.ready());
                }),
            s
          );
        })(),
        s = {};
      i.Callbacks = function (e) {
        e = e
          ? s[e] ||
            (function (e) {
              var t,
                n,
                r = (s[e] = {});
              for (t = 0, n = (e = e.split(/\s+/)).length; t < n; t++)
                r[e[t]] = !0;
              return r;
            })(e)
          : {};
        var t,
          n,
          r,
          o,
          a,
          u,
          c = [],
          l = [],
          f = function (t) {
            var n, r, o, s;
            for (n = 0, r = t.length; n < r; n++)
              (o = t[n]),
                'array' === (s = i.type(o))
                  ? f(o)
                  : 'function' === s && ((e.unique && p.has(o)) || c.push(o));
          },
          d = function (i, s) {
            for (
              s = s || [],
                t = !e.memory || [i, s],
                n = !0,
                r = !0,
                u = o || 0,
                o = 0,
                a = c.length;
              c && u < a;
              u++
            )
              if (!1 === c[u].apply(i, s) && e.stopOnFalse) {
                t = !0;
                break;
              }
            (r = !1),
              c &&
                (e.once
                  ? !0 === t
                    ? p.disable()
                    : (c = [])
                  : l && l.length && ((t = l.shift()), p.fireWith(t[0], t[1])));
          },
          p = {
            add: function () {
              if (c) {
                var e = c.length;
                f(arguments),
                  r
                    ? (a = c.length)
                    : t && !0 !== t && ((o = e), d(t[0], t[1]));
              }
              return this;
            },
            remove: function () {
              if (c)
                for (var t = arguments, n = 0, o = t.length; n < o; n++)
                  for (
                    var i = 0;
                    i < c.length &&
                    (t[n] !== c[i] ||
                      (r && i <= a && (a--, i <= u && u--),
                      c.splice(i--, 1),
                      !e.unique));
                    i++
                  );
              return this;
            },
            has: function (e) {
              if (c)
                for (var t = 0, n = c.length; t < n; t++)
                  if (e === c[t]) return !0;
              return !1;
            },
            empty: function () {
              return (c = []), this;
            },
            disable: function () {
              return (c = l = t = void 0), this;
            },
            disabled: function () {
              return !c;
            },
            lock: function () {
              return (l = void 0), (t && !0 !== t) || p.disable(), this;
            },
            locked: function () {
              return !l;
            },
            fireWith: function (n, o) {
              return (
                l && (r ? e.once || l.push([n, o]) : (e.once && t) || d(n, o)),
                this
              );
            },
            fire: function () {
              return p.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!n;
            },
          };
        return p;
      };
      var a = [].slice;
      i.extend({
        Deferred: function (e) {
          var t,
            n = i.Callbacks('once memory'),
            r = i.Callbacks('once memory'),
            o = i.Callbacks('memory'),
            s = 'pending',
            a = { resolve: n, reject: r, notify: o },
            u = {
              done: n.add,
              fail: r.add,
              progress: o.add,
              state: function () {
                return s;
              },
              isResolved: n.fired,
              isRejected: r.fired,
              then: function (e, t, n) {
                return c.done(e).fail(t).progress(n), this;
              },
              always: function () {
                return (
                  c.done.apply(c, arguments).fail.apply(c, arguments), this
                );
              },
              pipe: function (e, t, n) {
                return i
                  .Deferred(function (r) {
                    i.each(
                      {
                        done: [e, 'resolve'],
                        fail: [t, 'reject'],
                        progress: [n, 'notify'],
                      },
                      function (e, t) {
                        var n,
                          o = t[0],
                          s = t[1];
                        i.isFunction(o)
                          ? c[e](function () {
                              (n = o.apply(this, arguments)) &&
                              i.isFunction(n.promise)
                                ? n
                                    .promise()
                                    .then(r.resolve, r.reject, r.notify)
                                : r[s + 'With'](this === c ? r : this, [n]);
                            })
                          : c[e](r[s]);
                      },
                    );
                  })
                  .promise();
              },
              promise: function (e) {
                if (null == e) e = u;
                else for (var t in u) e[t] = u[t];
                return e;
              },
            },
            c = u.promise({});
          for (t in a) (c[t] = a[t].fire), (c[t + 'With'] = a[t].fireWith);
          return (
            c
              .done(
                function () {
                  s = 'resolved';
                },
                r.disable,
                o.lock,
              )
              .fail(
                function () {
                  s = 'rejected';
                },
                n.disable,
                o.lock,
              ),
            e && e.call(c, c),
            c
          );
        },
        when: function (e) {
          var t = a.call(arguments, 0),
            n = 0,
            r = t.length,
            o = new Array(r),
            s = r,
            u = r <= 1 && e && i.isFunction(e.promise) ? e : i.Deferred(),
            c = u.promise();
          function l(e) {
            return function (n) {
              (t[e] = arguments.length > 1 ? a.call(arguments, 0) : n),
                --s || u.resolveWith(u, t);
            };
          }
          function f(e) {
            return function (t) {
              (o[e] = arguments.length > 1 ? a.call(arguments, 0) : t),
                u.notifyWith(c, o);
            };
          }
          if (r > 1) {
            for (; n < r; n++)
              t[n] && t[n].promise && i.isFunction(t[n].promise)
                ? t[n].promise().then(l(n), u.reject, f(n))
                : --s;
            s || u.resolveWith(u, t);
          } else u !== e && u.resolveWith(u, r ? [e] : []);
          return c;
        },
      }),
        (i.support = (function () {
          var e,
            t,
            r,
            o,
            s,
            a,
            u,
            c,
            l,
            f,
            d,
            p = n.createElement('div');
          n.documentElement;
          if (
            (p.setAttribute('className', 't'),
            (p.innerHTML =
              "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>"),
            (t = p.getElementsByTagName('*')),
            (r = p.getElementsByTagName('a')[0]),
            !t || !t.length || !r)
          )
            return {};
          (s = (o = n.createElement('select')).appendChild(
            n.createElement('option'),
          )),
            (a = p.getElementsByTagName('input')[0]),
            (e = {
              leadingWhitespace: 3 === p.firstChild.nodeType,
              tbody: !p.getElementsByTagName('tbody').length,
              htmlSerialize: !!p.getElementsByTagName('link').length,
              style: /top/.test(r.getAttribute('style')),
              hrefNormalized: '/a' === r.getAttribute('href'),
              opacity: /^0.55/.test(r.style.opacity),
              cssFloat: !!r.style.cssFloat,
              checkOn: 'on' === a.value,
              optSelected: s.selected,
              getSetAttribute: 't' !== p.className,
              enctype: !!n.createElement('form').enctype,
              html5Clone:
                '<:nav></:nav>' !==
                n.createElement('nav').cloneNode(!0).outerHTML,
              submitBubbles: !0,
              changeBubbles: !0,
              focusinBubbles: !1,
              deleteExpando: !0,
              noCloneEvent: !0,
              inlineBlockNeedsLayout: !1,
              shrinkWrapBlocks: !1,
              reliableMarginRight: !0,
              pixelMargin: !0,
            }),
            (i.boxModel = e.boxModel = 'CSS1Compat' === n.compatMode),
            (a.checked = !0),
            (e.noCloneChecked = a.cloneNode(!0).checked),
            (o.disabled = !0),
            (e.optDisabled = !s.disabled);
          try {
            delete p.test;
          } catch (h) {
            e.deleteExpando = !1;
          }
          if (
            (!p.addEventListener &&
              p.attachEvent &&
              p.fireEvent &&
              (p.attachEvent('onclick', function () {
                e.noCloneEvent = !1;
              }),
              p.cloneNode(!0).fireEvent('onclick')),
            ((a = n.createElement('input')).value = 't'),
            a.setAttribute('type', 'radio'),
            (e.radioValue = 't' === a.value),
            a.setAttribute('checked', 'checked'),
            a.setAttribute('name', 't'),
            p.appendChild(a),
            (u = n.createDocumentFragment()).appendChild(p.lastChild),
            (e.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (e.appendChecked = a.checked),
            u.removeChild(a),
            u.appendChild(p),
            p.attachEvent)
          )
            for (f in { submit: 1, change: 1, focusin: 1 })
              (d = (l = 'on' + f) in p) ||
                (p.setAttribute(l, 'return;'), (d = 'function' == typeof p[l])),
                (e[f + 'Bubbles'] = d);
          return (
            u.removeChild(p),
            (u = o = s = p = a = null),
            i(function () {
              var t,
                r,
                o,
                s,
                a,
                u,
                l,
                f = n.getElementsByTagName('body')[0];
              f &&
                ((l =
                  "style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;"),
                ((t = n.createElement('div')).style.cssText =
                  'padding:0;margin:0;border:0;visibility:hidden;width:0;height:0;position:static;top:0;margin-top:1px'),
                f.insertBefore(t, f.firstChild),
                (p = n.createElement('div')),
                t.appendChild(p),
                (p.innerHTML =
                  "<table><tr><td style='padding:0;margin:0;border:0;display:none'></td><td>t</td></tr></table>"),
                (c = p.getElementsByTagName('td')),
                (d = 0 === c[0].offsetHeight),
                (c[0].style.display = ''),
                (c[1].style.display = 'none'),
                (e.reliableHiddenOffsets = d && 0 === c[0].offsetHeight),
                window.getComputedStyle &&
                  ((p.innerHTML = ''),
                  ((u = n.createElement('div')).style.width = '0'),
                  (u.style.marginRight = '0'),
                  (p.style.width = '2px'),
                  p.appendChild(u),
                  (e.reliableMarginRight =
                    0 ===
                    (parseInt(
                      (window.getComputedStyle(u, null) || { marginRight: 0 })
                        .marginRight,
                      10,
                    ) || 0))),
                void 0 !== p.style.zoom &&
                  ((p.innerHTML = ''),
                  (p.style.width = p.style.padding = '1px'),
                  (p.style.border = 0),
                  (p.style.overflow = 'hidden'),
                  (p.style.display = 'inline'),
                  (p.style.zoom = 1),
                  (e.inlineBlockNeedsLayout = 3 === p.offsetWidth),
                  (p.style.display = 'block'),
                  (p.style.overflow = 'visible'),
                  (p.innerHTML = "<div style='width:5px;'></div>"),
                  (e.shrinkWrapBlocks = 3 !== p.offsetWidth)),
                (p.style.cssText =
                  'position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:0;visibility:hidden;'),
                (p.innerHTML =
                  "<div style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;display:block;'><div style='padding:0;margin:0;border:0;display:block;overflow:hidden;'></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>"),
                (o = (r = p.firstChild).firstChild),
                (s = r.nextSibling.firstChild.firstChild),
                (a = {
                  doesNotAddBorder: 5 !== o.offsetTop,
                  doesAddBorderForTableAndCells: 5 === s.offsetTop,
                }),
                (o.style.position = 'fixed'),
                (o.style.top = '20px'),
                (a.fixedPosition = 20 === o.offsetTop || 15 === o.offsetTop),
                (o.style.position = o.style.top = ''),
                (r.style.overflow = 'hidden'),
                (r.style.position = 'relative'),
                (a.subtractsBorderForOverflowNotVisible = -5 === o.offsetTop),
                (a.doesNotIncludeMarginInBodyOffset = 1 !== f.offsetTop),
                window.getComputedStyle &&
                  ((p.style.marginTop = '1%'),
                  (e.pixelMargin =
                    '1%' !==
                    (window.getComputedStyle(p, null) || { marginTop: 0 })
                      .marginTop)),
                void 0 !== t.style.zoom && (t.style.zoom = 1),
                f.removeChild(t),
                (u = p = t = null),
                i.extend(e, a));
            }),
            e
          );
        })());
      var u = /^(?:\{.*\}|\[.*\])$/,
        c = /([A-Z])/g;
      function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
          var r = 'data-' + t.replace(c, '-$1').toLowerCase();
          if ('string' == typeof (n = e.getAttribute(r))) {
            try {
              n =
                'true' === n ||
                ('false' !== n &&
                  ('null' === n
                    ? null
                    : i.isNumeric(n)
                    ? +n
                    : u.test(n)
                    ? i.parseJSON(n)
                    : n));
            } catch (o) {}
            i.data(e, t, n);
          } else n = void 0;
        }
        return n;
      }
      function f(e) {
        for (var t in e)
          if (('data' !== t || !i.isEmptyObject(e[t])) && 'toJSON' !== t)
            return !1;
        return !0;
      }
      function d(e, t, n) {
        var r = t + 'defer',
          o = t + 'queue',
          s = t + 'mark',
          a = i._data(e, r);
        !a ||
          ('queue' !== n && i._data(e, o)) ||
          ('mark' !== n && i._data(e, s)) ||
          setTimeout(function () {
            i._data(e, o) ||
              i._data(e, s) ||
              (i.removeData(e, r, !0), a.fire());
          }, 0);
      }
      i.extend({
        cache: {},
        uuid: 0,
        expando: 'jQuery' + (i.fn.jquery + Math.random()).replace(/\D/g, ''),
        noData: {
          embed: !0,
          object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
          applet: !0,
        },
        hasData: function (e) {
          return (
            !!(e = e.nodeType ? i.cache[e[i.expando]] : e[i.expando]) && !f(e)
          );
        },
        data: function (e, t, n, r) {
          if (i.acceptData(e)) {
            var o,
              s,
              a,
              u = i.expando,
              c = 'string' == typeof t,
              l = e.nodeType,
              f = l ? i.cache : e,
              d = l ? e[u] : e[u] && u,
              p = 'events' === t;
            if ((d && f[d] && (p || r || f[d].data)) || !c || void 0 !== n)
              return (
                d || (l ? (e[u] = d = ++i.uuid) : (d = u)),
                f[d] || ((f[d] = {}), l || (f[d].toJSON = i.noop)),
                ('object' != typeof t && 'function' != typeof t) ||
                  (r
                    ? (f[d] = i.extend(f[d], t))
                    : (f[d].data = i.extend(f[d].data, t))),
                (o = s = f[d]),
                r || (s.data || (s.data = {}), (s = s.data)),
                void 0 !== n && (s[i.camelCase(t)] = n),
                p && !s[t]
                  ? o.events
                  : (c
                      ? null == (a = s[t]) && (a = s[i.camelCase(t)])
                      : (a = s),
                    a)
              );
          }
        },
        removeData: function (e, t, n) {
          if (i.acceptData(e)) {
            var r,
              o,
              s,
              a = i.expando,
              u = e.nodeType,
              c = u ? i.cache : e,
              l = u ? e[a] : a;
            if (c[l]) {
              if (t && (r = n ? c[l] : c[l].data)) {
                i.isArray(t) ||
                  (t =
                    t in r || (t = i.camelCase(t)) in r ? [t] : t.split(' '));
                for (o = 0, s = t.length; o < s; o++) delete r[t[o]];
                if (!(n ? f : i.isEmptyObject)(r)) return;
              }
              (n || (delete c[l].data, f(c[l]))) &&
                (i.support.deleteExpando || !c.setInterval
                  ? delete c[l]
                  : (c[l] = null),
                u &&
                  (i.support.deleteExpando
                    ? delete e[a]
                    : e.removeAttribute
                    ? e.removeAttribute(a)
                    : (e[a] = null)));
            }
          }
        },
        _data: function (e, t, n) {
          return i.data(e, t, n, !0);
        },
        acceptData: function (e) {
          if (e.nodeName) {
            var t = i.noData[e.nodeName.toLowerCase()];
            if (t) return !(!0 === t || e.getAttribute('classid') !== t);
          }
          return !0;
        },
      }),
        i.fn.extend({
          data: function (e, t) {
            var n,
              r,
              o,
              s,
              a,
              u = this[0],
              c = 0,
              f = null;
            if (void 0 === e) {
              if (
                this.length &&
                ((f = i.data(u)),
                1 === u.nodeType && !i._data(u, 'parsedAttrs'))
              ) {
                for (a = (o = u.attributes).length; c < a; c++)
                  0 === (s = o[c].name).indexOf('data-') &&
                    ((s = i.camelCase(s.substring(5))), l(u, s, f[s]));
                i._data(u, 'parsedAttrs', !0);
              }
              return f;
            }
            return 'object' == typeof e
              ? this.each(function () {
                  i.data(this, e);
                })
              : (((n = e.split('.', 2))[1] = n[1] ? '.' + n[1] : ''),
                (r = n[1] + '!'),
                i.access(
                  this,
                  function (t) {
                    if (void 0 === t)
                      return (
                        void 0 ===
                          (f = this.triggerHandler('getData' + r, [n[0]])) &&
                          u &&
                          ((f = i.data(u, e)), (f = l(u, e, f))),
                        void 0 === f && n[1] ? this.data(n[0]) : f
                      );
                    (n[1] = t),
                      this.each(function () {
                        var o = i(this);
                        o.triggerHandler('setData' + r, n),
                          i.data(this, e, t),
                          o.triggerHandler('changeData' + r, n);
                      });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !1,
                ));
          },
          removeData: function (e) {
            return this.each(function () {
              i.removeData(this, e);
            });
          },
        }),
        i.extend({
          _mark: function (e, t) {
            e &&
              ((t = (t || 'fx') + 'mark'),
              i._data(e, t, (i._data(e, t) || 0) + 1));
          },
          _unmark: function (e, t, n) {
            if ((!0 !== e && ((n = t), (t = e), (e = !1)), t)) {
              var r = (n = n || 'fx') + 'mark',
                o = e ? 0 : (i._data(t, r) || 1) - 1;
              o ? i._data(t, r, o) : (i.removeData(t, r, !0), d(t, n, 'mark'));
            }
          },
          queue: function (e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || 'fx') + 'queue'),
                (r = i._data(e, t)),
                n &&
                  (!r || i.isArray(n)
                    ? (r = i._data(e, t, i.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue: function (e, t) {
            t = t || 'fx';
            var n = i.queue(e, t),
              r = n.shift(),
              o = {};
            'inprogress' === r && (r = n.shift()),
              r &&
                ('fx' === t && n.unshift('inprogress'),
                i._data(e, t + '.run', o),
                r.call(
                  e,
                  function () {
                    i.dequeue(e, t);
                  },
                  o,
                )),
              n.length ||
                (i.removeData(e, t + 'queue ' + t + '.run', !0),
                d(e, t, 'queue'));
          },
        }),
        i.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              'string' != typeof e && ((t = e), (e = 'fx'), n--),
              arguments.length < n
                ? i.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = i.queue(this, e, t);
                    'fx' === e && 'inprogress' !== n[0] && i.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              i.dequeue(this, e);
            });
          },
          delay: function (e, t) {
            return (
              (e = (i.fx && i.fx.speeds[e]) || e),
              (t = t || 'fx'),
              this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                  clearTimeout(r);
                };
              })
            );
          },
          clearQueue: function (e) {
            return this.queue(e || 'fx', []);
          },
          promise: function (e, t) {
            'string' != typeof e && ((t = e), (e = void 0)), (e = e || 'fx');
            var n,
              r = i.Deferred(),
              o = this,
              s = o.length,
              a = 1,
              u = e + 'defer',
              c = e + 'queue',
              l = e + 'mark';
            function f() {
              --a || r.resolveWith(o, [o]);
            }
            for (; s--; )
              (n =
                i.data(o[s], u, void 0, !0) ||
                ((i.data(o[s], c, void 0, !0) || i.data(o[s], l, void 0, !0)) &&
                  i.data(o[s], u, i.Callbacks('once memory'), !0))) &&
                (a++, n.add(f));
            return f(), r.promise(t);
          },
        });
      var p,
        h,
        g,
        v = /[\n\t\r]/g,
        m = /\s+/,
        y = /\r/g,
        b = /^(?:button|input)$/i,
        _ = /^(?:button|input|object|select|textarea)$/i,
        w = /^a(?:rea)?$/i,
        x = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        S = i.support.getSetAttribute;
      i.fn.extend({
        attr: function (e, t) {
          return i.access(this, i.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            i.removeAttr(this, e);
          });
        },
        prop: function (e, t) {
          return i.access(this, i.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return (
            (e = i.propFix[e] || e),
            this.each(function () {
              try {
                (this[e] = void 0), delete this[e];
              } catch (t) {}
            })
          );
        },
        addClass: function (e) {
          var t, n, r, o, s, a, u;
          if (i.isFunction(e))
            return this.each(function (t) {
              i(this).addClass(e.call(this, t, this.className));
            });
          if (e && 'string' == typeof e)
            for (t = e.split(m), n = 0, r = this.length; n < r; n++)
              if (1 === (o = this[n]).nodeType)
                if (o.className || 1 !== t.length) {
                  for (
                    s = ' ' + o.className + ' ', a = 0, u = t.length;
                    a < u;
                    a++
                  )
                    ~s.indexOf(' ' + t[a] + ' ') || (s += t[a] + ' ');
                  o.className = i.trim(s);
                } else o.className = e;
          return this;
        },
        removeClass: function (e) {
          var t, n, r, o, s, a, u;
          if (i.isFunction(e))
            return this.each(function (t) {
              i(this).removeClass(e.call(this, t, this.className));
            });
          if ((e && 'string' == typeof e) || void 0 === e)
            for (t = (e || '').split(m), n = 0, r = this.length; n < r; n++)
              if (1 === (o = this[n]).nodeType && o.className)
                if (e) {
                  for (
                    s = (' ' + o.className + ' ').replace(v, ' '),
                      a = 0,
                      u = t.length;
                    a < u;
                    a++
                  )
                    s = s.replace(' ' + t[a] + ' ', ' ');
                  o.className = i.trim(s);
                } else o.className = '';
          return this;
        },
        toggleClass: function (e, t) {
          var n = typeof e,
            r = 'boolean' == typeof t;
          return i.isFunction(e)
            ? this.each(function (n) {
                i(this).toggleClass(e.call(this, n, this.className, t), t);
              })
            : this.each(function () {
                if ('string' === n)
                  for (
                    var o, s = 0, a = i(this), u = t, c = e.split(m);
                    (o = c[s++]);

                  )
                    (u = r ? u : !a.hasClass(o)),
                      a[u ? 'addClass' : 'removeClass'](o);
                else
                  ('undefined' !== n && 'boolean' !== n) ||
                    (this.className &&
                      i._data(this, '__className__', this.className),
                    (this.className =
                      this.className || !1 === e
                        ? ''
                        : i._data(this, '__className__') || ''));
              });
        },
        hasClass: function (e) {
          for (var t = ' ' + e + ' ', n = 0, r = this.length; n < r; n++)
            if (
              1 === this[n].nodeType &&
              (' ' + this[n].className + ' ').replace(v, ' ').indexOf(t) > -1
            )
              return !0;
          return !1;
        },
        val: function (e) {
          var t,
            n,
            r,
            o = this[0];
          return arguments.length
            ? ((r = i.isFunction(e)),
              this.each(function (n) {
                var o,
                  s = i(this);
                1 === this.nodeType &&
                  (null == (o = r ? e.call(this, n, s.val()) : e)
                    ? (o = '')
                    : 'number' == typeof o
                    ? (o += '')
                    : i.isArray(o) &&
                      (o = i.map(o, function (e) {
                        return null == e ? '' : e + '';
                      })),
                  ((t =
                    i.valHooks[this.type] ||
                    i.valHooks[this.nodeName.toLowerCase()]) &&
                    'set' in t &&
                    void 0 !== t.set(this, o, 'value')) ||
                    (this.value = o));
              }))
            : o
            ? (t =
                i.valHooks[o.type] || i.valHooks[o.nodeName.toLowerCase()]) &&
              'get' in t &&
              void 0 !== (n = t.get(o, 'value'))
              ? n
              : 'string' == typeof (n = o.value)
              ? n.replace(y, '')
              : null == n
              ? ''
              : n
            : void 0;
        },
      }),
        i.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = e.attributes.value;
                return !t || t.specified ? e.value : e.text;
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  r,
                  o,
                  s = e.selectedIndex,
                  a = [],
                  u = e.options,
                  c = 'select-one' === e.type;
                if (s < 0) return null;
                for (n = c ? s : 0, r = c ? s + 1 : u.length; n < r; n++)
                  if (
                    (o = u[n]).selected &&
                    (i.support.optDisabled
                      ? !o.disabled
                      : null === o.getAttribute('disabled')) &&
                    (!o.parentNode.disabled ||
                      !i.nodeName(o.parentNode, 'optgroup'))
                  ) {
                    if (((t = i(o).val()), c)) return t;
                    a.push(t);
                  }
                return c && !a.length && u.length ? i(u[s]).val() : a;
              },
              set: function (e, t) {
                var n = i.makeArray(t);
                return (
                  i(e)
                    .find('option')
                    .each(function () {
                      this.selected = i.inArray(i(this).val(), n) >= 0;
                    }),
                  n.length || (e.selectedIndex = -1),
                  n
                );
              },
            },
          },
          attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0,
          },
          attr: function (e, t, n, r) {
            var o,
              s,
              a,
              u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u)
              return r && t in i.attrFn
                ? i(e)[t](n)
                : void 0 === e.getAttribute
                ? i.prop(e, t, n)
                : ((a = 1 !== u || !i.isXMLDoc(e)) &&
                    ((t = t.toLowerCase()),
                    (s = i.attrHooks[t] || (x.test(t) ? h : p))),
                  void 0 !== n
                    ? null === n
                      ? void i.removeAttr(e, t)
                      : s && 'set' in s && a && void 0 !== (o = s.set(e, n, t))
                      ? o
                      : (e.setAttribute(t, '' + n), n)
                    : s && 'get' in s && a && null !== (o = s.get(e, t))
                    ? o
                    : null === (o = e.getAttribute(t))
                    ? void 0
                    : o);
          },
          removeAttr: function (e, t) {
            var n,
              r,
              o,
              s,
              a,
              u = 0;
            if (t && 1 === e.nodeType)
              for (s = (r = t.toLowerCase().split(m)).length; u < s; u++)
                (o = r[u]) &&
                  ((n = i.propFix[o] || o),
                  (a = x.test(o)) || i.attr(e, o, ''),
                  e.removeAttribute(S ? o : n),
                  a && n in e && (e[n] = !1));
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (b.test(e.nodeName) && e.parentNode)
                  i.error("type property can't be changed");
                else if (
                  !i.support.radioValue &&
                  'radio' === t &&
                  i.nodeName(e, 'input')
                ) {
                  var n = e.value;
                  return e.setAttribute('type', t), n && (e.value = n), t;
                }
              },
            },
            value: {
              get: function (e, t) {
                return p && i.nodeName(e, 'button')
                  ? p.get(e, t)
                  : t in e
                  ? e.value
                  : null;
              },
              set: function (e, t, n) {
                if (p && i.nodeName(e, 'button')) return p.set(e, t, n);
                e.value = t;
              },
            },
          },
          propFix: {
            tabindex: 'tabIndex',
            readonly: 'readOnly',
            for: 'htmlFor',
            class: 'className',
            maxlength: 'maxLength',
            cellspacing: 'cellSpacing',
            cellpadding: 'cellPadding',
            rowspan: 'rowSpan',
            colspan: 'colSpan',
            usemap: 'useMap',
            frameborder: 'frameBorder',
            contenteditable: 'contentEditable',
          },
          prop: function (e, t, n) {
            var r,
              o,
              s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)
              return (
                (1 !== s || !i.isXMLDoc(e)) &&
                  ((t = i.propFix[t] || t), (o = i.propHooks[t])),
                void 0 !== n
                  ? o && 'set' in o && void 0 !== (r = o.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : o && 'get' in o && null !== (r = o.get(e, t))
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = e.getAttributeNode('tabindex');
                return t && t.specified
                  ? parseInt(t.value, 10)
                  : _.test(e.nodeName) || (w.test(e.nodeName) && e.href)
                  ? 0
                  : void 0;
              },
            },
          },
        }),
        (i.attrHooks.tabindex = i.propHooks.tabIndex),
        (h = {
          get: function (e, t) {
            var n,
              r = i.prop(e, t);
            return !0 === r ||
              ('boolean' != typeof r &&
                (n = e.getAttributeNode(t)) &&
                !1 !== n.nodeValue)
              ? t.toLowerCase()
              : void 0;
          },
          set: function (e, t, n) {
            var r;
            return (
              !1 === t
                ? i.removeAttr(e, n)
                : ((r = i.propFix[n] || n) in e && (e[r] = !0),
                  e.setAttribute(n, n.toLowerCase())),
              n
            );
          },
        }),
        S ||
          ((g = { name: !0, id: !0, coords: !0 }),
          (p = i.valHooks.button = {
            get: function (e, t) {
              var n;
              return (n = e.getAttributeNode(t)) &&
                (g[t] ? '' !== n.nodeValue : n.specified)
                ? n.nodeValue
                : void 0;
            },
            set: function (e, t, r) {
              var o = e.getAttributeNode(r);
              return (
                o || ((o = n.createAttribute(r)), e.setAttributeNode(o)),
                (o.nodeValue = t + '')
              );
            },
          }),
          (i.attrHooks.tabindex.set = p.set),
          i.each(['width', 'height'], function (e, t) {
            i.attrHooks[t] = i.extend(i.attrHooks[t], {
              set: function (e, n) {
                if ('' === n) return e.setAttribute(t, 'auto'), n;
              },
            });
          }),
          (i.attrHooks.contenteditable = {
            get: p.get,
            set: function (e, t, n) {
              '' === t && (t = 'false'), p.set(e, t, n);
            },
          })),
        i.support.hrefNormalized ||
          i.each(['href', 'src', 'width', 'height'], function (e, t) {
            i.attrHooks[t] = i.extend(i.attrHooks[t], {
              get: function (e) {
                var n = e.getAttribute(t, 2);
                return null === n ? void 0 : n;
              },
            });
          }),
        i.support.style ||
          (i.attrHooks.style = {
            get: function (e) {
              return e.style.cssText.toLowerCase() || void 0;
            },
            set: function (e, t) {
              return (e.style.cssText = '' + t);
            },
          }),
        i.support.optSelected ||
          (i.propHooks.selected = i.extend(i.propHooks.selected, {
            get: function (e) {
              var t = e.parentNode;
              return (
                t &&
                  (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
                null
              );
            },
          })),
        i.support.enctype || (i.propFix.enctype = 'encoding'),
        i.support.checkOn ||
          i.each(['radio', 'checkbox'], function () {
            i.valHooks[this] = {
              get: function (e) {
                return null === e.getAttribute('value') ? 'on' : e.value;
              },
            };
          }),
        i.each(['radio', 'checkbox'], function () {
          i.valHooks[this] = i.extend(i.valHooks[this], {
            set: function (e, t) {
              if (i.isArray(t))
                return (e.checked = i.inArray(i(e).val(), t) >= 0);
            },
          });
        });
      var E = /^(?:textarea|input|select)$/i,
        O = /^([^\.]*)?(?:\.(.+))?$/,
        T = /(?:^|\s)hover(\.\S+)?\b/,
        k = /^key/,
        N = /^(?:mouse|contextmenu)|click/,
        C = /^(?:focusinfocus|focusoutblur)$/,
        j = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        P = function (e) {
          var t = j.exec(e);
          return (
            t &&
              ((t[1] = (t[1] || '').toLowerCase()),
              (t[3] = t[3] && new RegExp('(?:^|\\s)' + t[3] + '(?:\\s|$)'))),
            t
          );
        },
        A = function (e, t) {
          var n = e.attributes || {};
          return (
            (!t[1] || e.nodeName.toLowerCase() === t[1]) &&
            (!t[2] || (n.id || {}).value === t[2]) &&
            (!t[3] || t[3].test((n.class || {}).value))
          );
        },
        L = function (e) {
          return i.event.special.hover
            ? e
            : e.replace(T, 'mouseenter$1 mouseleave$1');
        };
      function M() {
        return !1;
      }
      function F() {
        return !0;
      }
      (i.event = {
        add: function (e, t, n, r, o) {
          var s, a, u, c, l, f, d, p, h, g, v;
          if (
            3 !== e.nodeType &&
            8 !== e.nodeType &&
            t &&
            n &&
            (s = i._data(e))
          ) {
            for (
              n.handler && ((n = (h = n).handler), (o = h.selector)),
                n.guid || (n.guid = i.guid++),
                (u = s.events) || (s.events = u = {}),
                (a = s.handle) ||
                  ((s.handle = a = function (e) {
                    return void 0 === i || (e && i.event.triggered === e.type)
                      ? void 0
                      : i.event.dispatch.apply(a.elem, arguments);
                  }),
                  (a.elem = e)),
                t = i.trim(L(t)).split(' '),
                c = 0;
              c < t.length;
              c++
            )
              (f = (l = O.exec(t[c]) || [])[1]),
                (d = (l[2] || '').split('.').sort()),
                (v = i.event.special[f] || {}),
                (f = (o ? v.delegateType : v.bindType) || f),
                (v = i.event.special[f] || {}),
                (p = i.extend(
                  {
                    type: f,
                    origType: l[1],
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    quick: o && P(o),
                    namespace: d.join('.'),
                  },
                  h,
                )),
                (g = u[f]) ||
                  (((g = u[f] = []).delegateCount = 0),
                  (v.setup && !1 !== v.setup.call(e, r, d, a)) ||
                    (e.addEventListener
                      ? e.addEventListener(f, a, !1)
                      : e.attachEvent && e.attachEvent('on' + f, a))),
                v.add &&
                  (v.add.call(e, p),
                  p.handler.guid || (p.handler.guid = n.guid)),
                o ? g.splice(g.delegateCount++, 0, p) : g.push(p),
                (i.event.global[f] = !0);
            e = null;
          }
        },
        global: {},
        remove: function (e, t, n, r, o) {
          var s,
            a,
            u,
            c,
            l,
            f,
            d,
            p,
            h,
            g,
            v,
            m,
            y = i.hasData(e) && i._data(e);
          if (y && (p = y.events)) {
            for (t = i.trim(L(t || '')).split(' '), s = 0; s < t.length; s++)
              if (((u = c = (a = O.exec(t[s]) || [])[1]), (l = a[2]), u)) {
                for (
                  h = i.event.special[u] || {},
                    f = (v =
                      p[(u = (r ? h.delegateType : h.bindType) || u)] || [])
                      .length,
                    l = l
                      ? new RegExp(
                          '(^|\\.)' +
                            l.split('.').sort().join('\\.(?:.*\\.)?') +
                            '(\\.|$)',
                        )
                      : null,
                    d = 0;
                  d < v.length;
                  d++
                )
                  (m = v[d]),
                    (!o && c !== m.origType) ||
                      (n && n.guid !== m.guid) ||
                      (l && !l.test(m.namespace)) ||
                      (r && r !== m.selector && ('**' !== r || !m.selector)) ||
                      (v.splice(d--, 1),
                      m.selector && v.delegateCount--,
                      h.remove && h.remove.call(e, m));
                0 === v.length &&
                  f !== v.length &&
                  ((h.teardown && !1 !== h.teardown.call(e, l)) ||
                    i.removeEvent(e, u, y.handle),
                  delete p[u]);
              } else for (u in p) i.event.remove(e, u + t[s], n, r, !0);
            i.isEmptyObject(p) &&
              ((g = y.handle) && (g.elem = null),
              i.removeData(e, ['events', 'handle'], !0));
          }
        },
        customEvent: { getData: !0, setData: !0, changeData: !0 },
        trigger: function (e, t, n, r) {
          if (!n || (3 !== n.nodeType && 8 !== n.nodeType)) {
            var o,
              s,
              a,
              u,
              c,
              l,
              f,
              d,
              p,
              h,
              g = e.type || e,
              v = [];
            if (
              !C.test(g + i.event.triggered) &&
              (g.indexOf('!') >= 0 && ((g = g.slice(0, -1)), (s = !0)),
              g.indexOf('.') >= 0 &&
                ((v = g.split('.')), (g = v.shift()), v.sort()),
              (n && !i.event.customEvent[g]) || i.event.global[g])
            )
              if (
                (((e =
                  'object' == typeof e
                    ? e[i.expando]
                      ? e
                      : new i.Event(g, e)
                    : new i.Event(g)).type = g),
                (e.isTrigger = !0),
                (e.exclusive = s),
                (e.namespace = v.join('.')),
                (e.namespace_re = e.namespace
                  ? new RegExp('(^|\\.)' + v.join('\\.(?:.*\\.)?') + '(\\.|$)')
                  : null),
                (l = g.indexOf(':') < 0 ? 'on' + g : ''),
                n)
              ) {
                if (
                  ((e.result = void 0),
                  e.target || (e.target = n),
                  (t = null != t ? i.makeArray(t) : []).unshift(e),
                  !(f = i.event.special[g] || {}).trigger ||
                    !1 !== f.trigger.apply(n, t))
                ) {
                  if (
                    ((p = [[n, f.bindType || g]]),
                    !r && !f.noBubble && !i.isWindow(n))
                  ) {
                    for (
                      h = f.delegateType || g,
                        u = C.test(h + g) ? n : n.parentNode,
                        c = null;
                      u;
                      u = u.parentNode
                    )
                      p.push([u, h]), (c = u);
                    c &&
                      c === n.ownerDocument &&
                      p.push([c.defaultView || c.parentWindow || window, h]);
                  }
                  for (a = 0; a < p.length && !e.isPropagationStopped(); a++)
                    (u = p[a][0]),
                      (e.type = p[a][1]),
                      (d =
                        (i._data(u, 'events') || {})[e.type] &&
                        i._data(u, 'handle')) && d.apply(u, t),
                      (d = l && u[l]) &&
                        i.acceptData(u) &&
                        !1 === d.apply(u, t) &&
                        e.preventDefault();
                  return (
                    (e.type = g),
                    r ||
                      e.isDefaultPrevented() ||
                      (f._default &&
                        !1 !== f._default.apply(n.ownerDocument, t)) ||
                      ('click' === g && i.nodeName(n, 'a')) ||
                      !i.acceptData(n) ||
                      (l &&
                        n[g] &&
                        (('focus' !== g && 'blur' !== g) ||
                          0 !== e.target.offsetWidth) &&
                        !i.isWindow(n) &&
                        ((c = n[l]) && (n[l] = null),
                        (i.event.triggered = g),
                        n[g](),
                        (i.event.triggered = void 0),
                        c && (n[l] = c))),
                    e.result
                  );
                }
              } else
                for (a in (o = i.cache))
                  o[a].events &&
                    o[a].events[g] &&
                    i.event.trigger(e, t, o[a].handle.elem, !0);
          }
        },
        dispatch: function (e) {
          e = i.event.fix(e || window.event);
          var t,
            n,
            r,
            o,
            s,
            a,
            u,
            c,
            l,
            f,
            d = (i._data(this, 'events') || {})[e.type] || [],
            p = d.delegateCount,
            h = [].slice.call(arguments, 0),
            g = !e.exclusive && !e.namespace,
            v = i.event.special[e.type] || {},
            m = [];
          if (
            ((h[0] = e),
            (e.delegateTarget = this),
            !v.preDispatch || !1 !== v.preDispatch.call(this, e))
          ) {
            if (p && (!e.button || 'click' !== e.type))
              for (
                (o = i(this)).context = this.ownerDocument || this,
                  r = e.target;
                r != this;
                r = r.parentNode || this
              )
                if (!0 !== r.disabled) {
                  for (a = {}, c = [], o[0] = r, t = 0; t < p; t++)
                    void 0 === a[(f = (l = d[t]).selector)] &&
                      (a[f] = l.quick ? A(r, l.quick) : o.is(f)),
                      a[f] && c.push(l);
                  c.length && m.push({ elem: r, matches: c });
                }
            for (
              d.length > p && m.push({ elem: this, matches: d.slice(p) }),
                t = 0;
              t < m.length && !e.isPropagationStopped();
              t++
            )
              for (
                u = m[t], e.currentTarget = u.elem, n = 0;
                n < u.matches.length && !e.isImmediatePropagationStopped();
                n++
              )
                (l = u.matches[n]),
                  (g ||
                    (!e.namespace && !l.namespace) ||
                    (e.namespace_re && e.namespace_re.test(l.namespace))) &&
                    ((e.data = l.data),
                    (e.handleObj = l),
                    void 0 !==
                      (s = (
                        (i.event.special[l.origType] || {}).handle || l.handler
                      ).apply(u.elem, h)) &&
                      ((e.result = s),
                      !1 === s && (e.preventDefault(), e.stopPropagation())));
            return v.postDispatch && v.postDispatch.call(this, e), e.result;
          }
        },
        props: 'attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
          ' ',
        ),
        fixHooks: {},
        keyHooks: {
          props: 'char charCode key keyCode'.split(' '),
          filter: function (e, t) {
            return (
              null == e.which &&
                (e.which = null != t.charCode ? t.charCode : t.keyCode),
              e
            );
          },
        },
        mouseHooks: {
          props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(
            ' ',
          ),
          filter: function (e, t) {
            var r,
              o,
              i,
              s = t.button,
              a = t.fromElement;
            return (
              null == e.pageX &&
                null != t.clientX &&
                ((o = (r = e.target.ownerDocument || n).documentElement),
                (i = r.body),
                (e.pageX =
                  t.clientX +
                  ((o && o.scrollLeft) || (i && i.scrollLeft) || 0) -
                  ((o && o.clientLeft) || (i && i.clientLeft) || 0)),
                (e.pageY =
                  t.clientY +
                  ((o && o.scrollTop) || (i && i.scrollTop) || 0) -
                  ((o && o.clientTop) || (i && i.clientTop) || 0))),
              !e.relatedTarget &&
                a &&
                (e.relatedTarget = a === e.target ? t.toElement : a),
              e.which ||
                void 0 === s ||
                (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
              e
            );
          },
        },
        fix: function (e) {
          if (e[i.expando]) return e;
          var t,
            r,
            o = e,
            s = i.event.fixHooks[e.type] || {},
            a = s.props ? this.props.concat(s.props) : this.props;
          for (e = i.Event(o), t = a.length; t; ) e[(r = a[--t])] = o[r];
          return (
            e.target || (e.target = o.srcElement || n),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            void 0 === e.metaKey && (e.metaKey = e.ctrlKey),
            s.filter ? s.filter(e, o) : e
          );
        },
        special: {
          ready: { setup: i.bindReady },
          load: { noBubble: !0 },
          focus: { delegateType: 'focusin' },
          blur: { delegateType: 'focusout' },
          beforeunload: {
            setup: function (e, t, n) {
              i.isWindow(this) && (this.onbeforeunload = n);
            },
            teardown: function (e, t) {
              this.onbeforeunload === t && (this.onbeforeunload = null);
            },
          },
        },
        simulate: function (e, t, n, r) {
          var o = i.extend(new i.Event(), n, {
            type: e,
            isSimulated: !0,
            originalEvent: {},
          });
          r ? i.event.trigger(o, null, t) : i.event.dispatch.call(t, o),
            o.isDefaultPrevented() && n.preventDefault();
        },
      }),
        (i.event.handle = i.event.dispatch),
        (i.removeEvent = n.removeEventListener
          ? function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n, !1);
            }
          : function (e, t, n) {
              e.detachEvent && e.detachEvent('on' + t, n);
            }),
        (i.Event = function (e, t) {
          if (!(this instanceof i.Event)) return new i.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                !1 === e.returnValue ||
                (e.getPreventDefault && e.getPreventDefault())
                  ? F
                  : M))
            : (this.type = e),
            t && i.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || i.now()),
            (this[i.expando] = !0);
        }),
        (i.Event.prototype = {
          preventDefault: function () {
            this.isDefaultPrevented = F;
            var e = this.originalEvent;
            e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
          },
          stopPropagation: function () {
            this.isPropagationStopped = F;
            var e = this.originalEvent;
            e &&
              (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
          },
          stopImmediatePropagation: function () {
            (this.isImmediatePropagationStopped = F), this.stopPropagation();
          },
          isDefaultPrevented: M,
          isPropagationStopped: M,
          isImmediatePropagationStopped: M,
        }),
        i.each(
          { mouseenter: 'mouseover', mouseleave: 'mouseout' },
          function (e, t) {
            i.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = this,
                  o = e.relatedTarget,
                  s = e.handleObj;
                s.selector;
                return (
                  (o && (o === r || i.contains(r, o))) ||
                    ((e.type = s.origType),
                    (n = s.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          },
        ),
        i.support.submitBubbles ||
          (i.event.special.submit = {
            setup: function () {
              if (i.nodeName(this, 'form')) return !1;
              i.event.add(this, 'click._submit keypress._submit', function (e) {
                var t = e.target,
                  n =
                    i.nodeName(t, 'input') || i.nodeName(t, 'button')
                      ? t.form
                      : void 0;
                n &&
                  !n._submit_attached &&
                  (i.event.add(n, 'submit._submit', function (e) {
                    e._submit_bubble = !0;
                  }),
                  (n._submit_attached = !0));
              });
            },
            postDispatch: function (e) {
              e._submit_bubble &&
                (delete e._submit_bubble,
                this.parentNode &&
                  !e.isTrigger &&
                  i.event.simulate('submit', this.parentNode, e, !0));
            },
            teardown: function () {
              if (i.nodeName(this, 'form')) return !1;
              i.event.remove(this, '._submit');
            },
          }),
        i.support.changeBubbles ||
          (i.event.special.change = {
            setup: function () {
              if (E.test(this.nodeName))
                return (
                  ('checkbox' !== this.type && 'radio' !== this.type) ||
                    (i.event.add(this, 'propertychange._change', function (e) {
                      'checked' === e.originalEvent.propertyName &&
                        (this._just_changed = !0);
                    }),
                    i.event.add(this, 'click._change', function (e) {
                      this._just_changed &&
                        !e.isTrigger &&
                        ((this._just_changed = !1),
                        i.event.simulate('change', this, e, !0));
                    })),
                  !1
                );
              i.event.add(this, 'beforeactivate._change', function (e) {
                var t = e.target;
                E.test(t.nodeName) &&
                  !t._change_attached &&
                  (i.event.add(t, 'change._change', function (e) {
                    !this.parentNode ||
                      e.isSimulated ||
                      e.isTrigger ||
                      i.event.simulate('change', this.parentNode, e, !0);
                  }),
                  (t._change_attached = !0));
              });
            },
            handle: function (e) {
              var t = e.target;
              if (
                this !== t ||
                e.isSimulated ||
                e.isTrigger ||
                ('radio' !== t.type && 'checkbox' !== t.type)
              )
                return e.handleObj.handler.apply(this, arguments);
            },
            teardown: function () {
              return i.event.remove(this, '._change'), E.test(this.nodeName);
            },
          }),
        i.support.focusinBubbles ||
          i.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
            var r = 0,
              o = function (e) {
                i.event.simulate(t, e.target, i.event.fix(e), !0);
              };
            i.event.special[t] = {
              setup: function () {
                0 == r++ && n.addEventListener(e, o, !0);
              },
              teardown: function () {
                0 == --r && n.removeEventListener(e, o, !0);
              },
            };
          }),
        i.fn.extend({
          on: function (e, t, n, r, o) {
            var s, a;
            if ('object' == typeof e) {
              for (a in ('string' != typeof t && ((n = n || t), (t = void 0)),
              e))
                this.on(a, t, n, e[a], o);
              return this;
            }
            if (
              (null == n && null == r
                ? ((r = t), (n = t = void 0))
                : null == r &&
                  ('string' == typeof t
                    ? ((r = n), (n = void 0))
                    : ((r = n), (n = t), (t = void 0))),
              !1 === r)
            )
              r = M;
            else if (!r) return this;
            return (
              1 === o &&
                ((s = r),
                ((r = function (e) {
                  return i().off(e), s.apply(this, arguments);
                }).guid = s.guid || (s.guid = i.guid++))),
              this.each(function () {
                i.event.add(this, e, r, n, t);
              })
            );
          },
          one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1);
          },
          off: function (e, t, n) {
            if (e && e.preventDefault && e.handleObj) {
              var r = e.handleObj;
              return (
                i(e.delegateTarget).off(
                  r.namespace ? r.origType + '.' + r.namespace : r.origType,
                  r.selector,
                  r.handler,
                ),
                this
              );
            }
            if ('object' == typeof e) {
              for (var o in e) this.off(o, t, e[o]);
              return this;
            }
            return (
              (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = M),
              this.each(function () {
                i.event.remove(this, e, n, t);
              })
            );
          },
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          live: function (e, t, n) {
            return i(this.context).on(e, this.selector, t, n), this;
          },
          die: function (e, t) {
            return i(this.context).off(e, this.selector || '**', t), this;
          },
          delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function (e, t, n) {
            return 1 == arguments.length
              ? this.off(e, '**')
              : this.off(t, e, n);
          },
          trigger: function (e, t) {
            return this.each(function () {
              i.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            if (this[0]) return i.event.trigger(e, t, this[0], !0);
          },
          toggle: function (e) {
            var t = arguments,
              n = e.guid || i.guid++,
              r = 0,
              o = function (n) {
                var o = (i._data(this, 'lastToggle' + e.guid) || 0) % r;
                return (
                  i._data(this, 'lastToggle' + e.guid, o + 1),
                  n.preventDefault(),
                  t[o].apply(this, arguments) || !1
                );
              };
            for (o.guid = n; r < t.length; ) t[r++].guid = n;
            return this.click(o);
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        i.each(
          'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
            ' ',
          ),
          function (e, t) {
            (i.fn[t] = function (e, n) {
              return (
                null == n && ((n = e), (e = null)),
                arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
              );
            }),
              i.attrFn && (i.attrFn[t] = !0),
              k.test(t) && (i.event.fixHooks[t] = i.event.keyHooks),
              N.test(t) && (i.event.fixHooks[t] = i.event.mouseHooks);
          },
        ),
        (function () {
          var e = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            t = 'sizcache' + (Math.random() + '').replace('.', ''),
            r = 0,
            o = Object.prototype.toString,
            s = !1,
            a = !0,
            u = /\\/g,
            c = /\r\n/g,
            l = /\W/;
          [0, 0].sort(function () {
            return (a = !1), 0;
          });
          var f = function (t, r, i, s) {
            i = i || [];
            var a = (r = r || n);
            if (1 !== r.nodeType && 9 !== r.nodeType) return [];
            if (!t || 'string' != typeof t) return i;
            var u,
              c,
              l,
              d,
              g,
              v,
              m,
              y,
              b = !0,
              w = f.isXML(r),
              x = [],
              E = t;
            do {
              if (
                (e.exec(''),
                (u = e.exec(E)) && ((E = u[3]), x.push(u[1]), u[2]))
              ) {
                d = u[3];
                break;
              }
            } while (u);
            if (x.length > 1 && h.exec(t))
              if (2 === x.length && p.relative[x[0]]) c = S(x[0] + x[1], r, s);
              else
                for (c = p.relative[x[0]] ? [r] : f(x.shift(), r); x.length; )
                  (t = x.shift()),
                    p.relative[t] && (t += x.shift()),
                    (c = S(t, c, s));
            else if (
              (!s &&
                x.length > 1 &&
                9 === r.nodeType &&
                !w &&
                p.match.ID.test(x[0]) &&
                !p.match.ID.test(x[x.length - 1]) &&
                (r = (g = f.find(x.shift(), r, w)).expr
                  ? f.filter(g.expr, g.set)[0]
                  : g.set[0]),
              r)
            )
              for (
                c = (g = s
                  ? { expr: x.pop(), set: _(s) }
                  : f.find(
                      x.pop(),
                      1 !== x.length ||
                        ('~' !== x[0] && '+' !== x[0]) ||
                        !r.parentNode
                        ? r
                        : r.parentNode,
                      w,
                    )).expr
                  ? f.filter(g.expr, g.set)
                  : g.set,
                  x.length > 0 ? (l = _(c)) : (b = !1);
                x.length;

              )
                (m = v = x.pop()),
                  p.relative[v] ? (m = x.pop()) : (v = ''),
                  null == m && (m = r),
                  p.relative[v](l, m, w);
            else l = x = [];
            if (
              (l || (l = c),
              l || f.error(v || t),
              '[object Array]' === o.call(l))
            )
              if (b)
                if (r && 1 === r.nodeType)
                  for (y = 0; null != l[y]; y++)
                    l[y] &&
                      (!0 === l[y] ||
                        (1 === l[y].nodeType && f.contains(r, l[y]))) &&
                      i.push(c[y]);
                else
                  for (y = 0; null != l[y]; y++)
                    l[y] && 1 === l[y].nodeType && i.push(c[y]);
              else i.push.apply(i, l);
            else _(l, i);
            return d && (f(d, a, i, s), f.uniqueSort(i)), i;
          };
          (f.uniqueSort = function (e) {
            if (m && ((s = a), e.sort(m), s))
              for (var t = 1; t < e.length; t++)
                e[t] === e[t - 1] && e.splice(t--, 1);
            return e;
          }),
            (f.matches = function (e, t) {
              return f(e, null, null, t);
            }),
            (f.matchesSelector = function (e, t) {
              return f(t, null, null, [e]).length > 0;
            }),
            (f.find = function (e, t, n) {
              var r, o, i, s, a, c;
              if (!e) return [];
              for (o = 0, i = p.order.length; o < i; o++)
                if (
                  ((a = p.order[o]),
                  (s = p.leftMatch[a].exec(e)) &&
                    ((c = s[1]),
                    s.splice(1, 1),
                    '\\' !== c.substr(c.length - 1) &&
                      ((s[1] = (s[1] || '').replace(u, '')),
                      null != (r = p.find[a](s, t, n)))))
                ) {
                  e = e.replace(p.match[a], '');
                  break;
                }
              return (
                r ||
                  (r =
                    void 0 !== t.getElementsByTagName
                      ? t.getElementsByTagName('*')
                      : []),
                { set: r, expr: e }
              );
            }),
            (f.filter = function (e, t, n, r) {
              for (
                var o,
                  i,
                  s,
                  a,
                  u,
                  c,
                  l,
                  d,
                  h,
                  g = e,
                  v = [],
                  m = t,
                  y = t && t[0] && f.isXML(t[0]);
                e && t.length;

              ) {
                for (s in p.filter)
                  if (null != (o = p.leftMatch[s].exec(e)) && o[2]) {
                    if (
                      ((c = p.filter[s]),
                      (l = o[1]),
                      (i = !1),
                      o.splice(1, 1),
                      '\\' === l.substr(l.length - 1))
                    )
                      continue;
                    if ((m === v && (v = []), p.preFilter[s]))
                      if ((o = p.preFilter[s](o, m, n, v, r, y))) {
                        if (!0 === o) continue;
                      } else i = a = !0;
                    if (o)
                      for (d = 0; null != (u = m[d]); d++)
                        u &&
                          ((h = r ^ (a = c(u, o, d, m))),
                          n && null != a
                            ? h
                              ? (i = !0)
                              : (m[d] = !1)
                            : h && (v.push(u), (i = !0)));
                    if (void 0 !== a) {
                      if ((n || (m = v), (e = e.replace(p.match[s], '')), !i))
                        return [];
                      break;
                    }
                  }
                if (e === g) {
                  if (null != i) break;
                  f.error(e);
                }
                g = e;
              }
              return m;
            }),
            (f.error = function (e) {
              throw new Error('Syntax error, unrecognized expression: ' + e);
            });
          var d = (f.getText = function (e) {
              var t,
                n,
                r = e.nodeType,
                o = '';
              if (r) {
                if (1 === r || 9 === r || 11 === r) {
                  if ('string' == typeof e.textContent) return e.textContent;
                  if ('string' == typeof e.innerText)
                    return e.innerText.replace(c, '');
                  for (e = e.firstChild; e; e = e.nextSibling) o += d(e);
                } else if (3 === r || 4 === r) return e.nodeValue;
              } else
                for (t = 0; (n = e[t]); t++) 8 !== n.nodeType && (o += d(n));
              return o;
            }),
            p = (f.selectors = {
              order: ['ID', 'NAME', 'TAG'],
              match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/,
              },
              leftMatch: {},
              attrMap: { class: 'className', for: 'htmlFor' },
              attrHandle: {
                href: function (e) {
                  return e.getAttribute('href');
                },
                type: function (e) {
                  return e.getAttribute('type');
                },
              },
              relative: {
                '+': function (e, t) {
                  var n = 'string' == typeof t,
                    r = n && !l.test(t),
                    o = n && !r;
                  r && (t = t.toLowerCase());
                  for (var i, s = 0, a = e.length; s < a; s++)
                    if ((i = e[s])) {
                      for (; (i = i.previousSibling) && 1 !== i.nodeType; );
                      e[s] =
                        o || (i && i.nodeName.toLowerCase() === t)
                          ? i || !1
                          : i === t;
                    }
                  o && f.filter(t, e, !0);
                },
                '>': function (e, t) {
                  var n,
                    r = 'string' == typeof t,
                    o = 0,
                    i = e.length;
                  if (r && !l.test(t)) {
                    for (t = t.toLowerCase(); o < i; o++)
                      if ((n = e[o])) {
                        var s = n.parentNode;
                        e[o] = s.nodeName.toLowerCase() === t && s;
                      }
                  } else {
                    for (; o < i; o++)
                      (n = e[o]) &&
                        (e[o] = r ? n.parentNode : n.parentNode === t);
                    r && f.filter(t, e, !0);
                  }
                },
                '': function (e, t, n) {
                  var o,
                    i = r++,
                    s = x;
                  'string' != typeof t ||
                    l.test(t) ||
                    ((o = t = t.toLowerCase()), (s = w)),
                    s('parentNode', t, i, e, o, n);
                },
                '~': function (e, t, n) {
                  var o,
                    i = r++,
                    s = x;
                  'string' != typeof t ||
                    l.test(t) ||
                    ((o = t = t.toLowerCase()), (s = w)),
                    s('previousSibling', t, i, e, o, n);
                },
              },
              find: {
                ID: function (e, t, n) {
                  if (void 0 !== t.getElementById && !n) {
                    var r = t.getElementById(e[1]);
                    return r && r.parentNode ? [r] : [];
                  }
                },
                NAME: function (e, t) {
                  if (void 0 !== t.getElementsByName) {
                    for (
                      var n = [],
                        r = t.getElementsByName(e[1]),
                        o = 0,
                        i = r.length;
                      o < i;
                      o++
                    )
                      r[o].getAttribute('name') === e[1] && n.push(r[o]);
                    return 0 === n.length ? null : n;
                  }
                },
                TAG: function (e, t) {
                  if (void 0 !== t.getElementsByTagName)
                    return t.getElementsByTagName(e[1]);
                },
              },
              preFilter: {
                CLASS: function (e, t, n, r, o, i) {
                  if (((e = ' ' + e[1].replace(u, '') + ' '), i)) return e;
                  for (var s, a = 0; null != (s = t[a]); a++)
                    s &&
                      (o ^
                      (s.className &&
                        (' ' + s.className + ' ')
                          .replace(/[\t\n\r]/g, ' ')
                          .indexOf(e) >= 0)
                        ? n || r.push(s)
                        : n && (t[a] = !1));
                  return !1;
                },
                ID: function (e) {
                  return e[1].replace(u, '');
                },
                TAG: function (e, t) {
                  return e[1].replace(u, '').toLowerCase();
                },
                CHILD: function (e) {
                  if ('nth' === e[1]) {
                    e[2] || f.error(e[0]),
                      (e[2] = e[2].replace(/^\+|\s*/g, ''));
                    var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
                      ('even' === e[2] ? '2n' : 'odd' === e[2] && '2n+1') ||
                        (!/\D/.test(e[2]) && '0n+' + e[2]) ||
                        e[2],
                    );
                    (e[2] = t[1] + (t[2] || 1) - 0), (e[3] = t[3] - 0);
                  } else e[2] && f.error(e[0]);
                  return (e[0] = r++), e;
                },
                ATTR: function (e, t, n, r, o, i) {
                  var s = (e[1] = e[1].replace(u, ''));
                  return (
                    !i && p.attrMap[s] && (e[1] = p.attrMap[s]),
                    (e[4] = (e[4] || e[5] || '').replace(u, '')),
                    '~=' === e[2] && (e[4] = ' ' + e[4] + ' '),
                    e
                  );
                },
                PSEUDO: function (t, n, r, o, i) {
                  if ('not' === t[1]) {
                    if (
                      !((e.exec(t[3]) || '').length > 1 || /^\w/.test(t[3]))
                    ) {
                      var s = f.filter(t[3], n, r, !0 ^ i);
                      return r || o.push.apply(o, s), !1;
                    }
                    t[3] = f(t[3], null, null, n);
                  } else if (p.match.POS.test(t[0]) || p.match.CHILD.test(t[0]))
                    return !0;
                  return t;
                },
                POS: function (e) {
                  return e.unshift(!0), e;
                },
              },
              filters: {
                enabled: function (e) {
                  return !1 === e.disabled && 'hidden' !== e.type;
                },
                disabled: function (e) {
                  return !0 === e.disabled;
                },
                checked: function (e) {
                  return !0 === e.checked;
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                parent: function (e) {
                  return !!e.firstChild;
                },
                empty: function (e) {
                  return !e.firstChild;
                },
                has: function (e, t, n) {
                  return !!f(n[3], e).length;
                },
                header: function (e) {
                  return /h\d/i.test(e.nodeName);
                },
                text: function (e) {
                  var t = e.getAttribute('type'),
                    n = e.type;
                  return (
                    'input' === e.nodeName.toLowerCase() &&
                    'text' === n &&
                    (t === n || null === t)
                  );
                },
                radio: function (e) {
                  return (
                    'input' === e.nodeName.toLowerCase() && 'radio' === e.type
                  );
                },
                checkbox: function (e) {
                  return (
                    'input' === e.nodeName.toLowerCase() &&
                    'checkbox' === e.type
                  );
                },
                file: function (e) {
                  return (
                    'input' === e.nodeName.toLowerCase() && 'file' === e.type
                  );
                },
                password: function (e) {
                  return (
                    'input' === e.nodeName.toLowerCase() &&
                    'password' === e.type
                  );
                },
                submit: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ('input' === t || 'button' === t) && 'submit' === e.type
                  );
                },
                image: function (e) {
                  return (
                    'input' === e.nodeName.toLowerCase() && 'image' === e.type
                  );
                },
                reset: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ('input' === t || 'button' === t) && 'reset' === e.type
                  );
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ('input' === t && 'button' === e.type) || 'button' === t
                  );
                },
                input: function (e) {
                  return /input|select|textarea|button/i.test(e.nodeName);
                },
                focus: function (e) {
                  return e === e.ownerDocument.activeElement;
                },
              },
              setFilters: {
                first: function (e, t) {
                  return 0 === t;
                },
                last: function (e, t, n, r) {
                  return t === r.length - 1;
                },
                even: function (e, t) {
                  return t % 2 == 0;
                },
                odd: function (e, t) {
                  return t % 2 == 1;
                },
                lt: function (e, t, n) {
                  return t < n[3] - 0;
                },
                gt: function (e, t, n) {
                  return t > n[3] - 0;
                },
                nth: function (e, t, n) {
                  return n[3] - 0 === t;
                },
                eq: function (e, t, n) {
                  return n[3] - 0 === t;
                },
              },
              filter: {
                PSEUDO: function (e, t, n, r) {
                  var o = t[1],
                    i = p.filters[o];
                  if (i) return i(e, n, t, r);
                  if ('contains' === o)
                    return (
                      (e.textContent || e.innerText || d([e]) || '').indexOf(
                        t[3],
                      ) >= 0
                    );
                  if ('not' === o) {
                    for (var s = t[3], a = 0, u = s.length; a < u; a++)
                      if (s[a] === e) return !1;
                    return !0;
                  }
                  f.error(o);
                },
                CHILD: function (e, n) {
                  var r,
                    o,
                    i,
                    s,
                    a,
                    u,
                    c = n[1],
                    l = e;
                  switch (c) {
                    case 'only':
                    case 'first':
                      for (; (l = l.previousSibling); )
                        if (1 === l.nodeType) return !1;
                      if ('first' === c) return !0;
                      l = e;
                    case 'last':
                      for (; (l = l.nextSibling); )
                        if (1 === l.nodeType) return !1;
                      return !0;
                    case 'nth':
                      if (((r = n[2]), (o = n[3]), 1 === r && 0 === o))
                        return !0;
                      if (
                        ((i = n[0]),
                        (s = e.parentNode) && (s[t] !== i || !e.nodeIndex))
                      ) {
                        for (a = 0, l = s.firstChild; l; l = l.nextSibling)
                          1 === l.nodeType && (l.nodeIndex = ++a);
                        s[t] = i;
                      }
                      return (
                        (u = e.nodeIndex - o),
                        0 === r ? 0 === u : u % r == 0 && u / r >= 0
                      );
                  }
                },
                ID: function (e, t) {
                  return 1 === e.nodeType && e.getAttribute('id') === t;
                },
                TAG: function (e, t) {
                  return (
                    ('*' === t && 1 === e.nodeType) ||
                    (!!e.nodeName && e.nodeName.toLowerCase() === t)
                  );
                },
                CLASS: function (e, t) {
                  return (
                    (
                      ' ' +
                      (e.className || e.getAttribute('class')) +
                      ' '
                    ).indexOf(t) > -1
                  );
                },
                ATTR: function (e, t) {
                  var n = t[1],
                    r = f.attr
                      ? f.attr(e, n)
                      : p.attrHandle[n]
                      ? p.attrHandle[n](e)
                      : null != e[n]
                      ? e[n]
                      : e.getAttribute(n),
                    o = r + '',
                    i = t[2],
                    s = t[4];
                  return null == r
                    ? '!=' === i
                    : !i && f.attr
                    ? null != r
                    : '=' === i
                    ? o === s
                    : '*=' === i
                    ? o.indexOf(s) >= 0
                    : '~=' === i
                    ? (' ' + o + ' ').indexOf(s) >= 0
                    : s
                    ? '!=' === i
                      ? o !== s
                      : '^=' === i
                      ? 0 === o.indexOf(s)
                      : '$=' === i
                      ? o.substr(o.length - s.length) === s
                      : '|=' === i &&
                        (o === s || o.substr(0, s.length + 1) === s + '-')
                    : o && !1 !== r;
                },
                POS: function (e, t, n, r) {
                  var o = t[2],
                    i = p.setFilters[o];
                  if (i) return i(e, n, t, r);
                },
              },
            }),
            h = p.match.POS,
            g = function (e, t) {
              return '\\' + (t - 0 + 1);
            };
          for (var v in p.match)
            (p.match[v] = new RegExp(
              p.match[v].source + /(?![^\[]*\])(?![^\(]*\))/.source,
            )),
              (p.leftMatch[v] = new RegExp(
                /(^(?:.|\r|\n)*?)/.source +
                  p.match[v].source.replace(/\\(\d+)/g, g),
              ));
          p.match.globalPOS = h;
          var m,
            y,
            b,
            _ = function (e, t) {
              return (
                (e = Array.prototype.slice.call(e, 0)),
                t ? (t.push.apply(t, e), t) : e
              );
            };
          try {
            Array.prototype.slice.call(n.documentElement.childNodes, 0)[0]
              .nodeType;
          } catch (E) {
            _ = function (e, t) {
              var n = 0,
                r = t || [];
              if ('[object Array]' === o.call(e))
                Array.prototype.push.apply(r, e);
              else if ('number' == typeof e.length)
                for (var i = e.length; n < i; n++) r.push(e[n]);
              else for (; e[n]; n++) r.push(e[n]);
              return r;
            };
          }
          function w(e, n, r, o, i, s) {
            for (var a = 0, u = o.length; a < u; a++) {
              var c = o[a];
              if (c) {
                var l = !1;
                for (c = c[e]; c; ) {
                  if (c[t] === r) {
                    l = o[c.sizset];
                    break;
                  }
                  if (
                    (1 !== c.nodeType || s || ((c[t] = r), (c.sizset = a)),
                    c.nodeName.toLowerCase() === n)
                  ) {
                    l = c;
                    break;
                  }
                  c = c[e];
                }
                o[a] = l;
              }
            }
          }
          function x(e, n, r, o, i, s) {
            for (var a = 0, u = o.length; a < u; a++) {
              var c = o[a];
              if (c) {
                var l = !1;
                for (c = c[e]; c; ) {
                  if (c[t] === r) {
                    l = o[c.sizset];
                    break;
                  }
                  if (1 === c.nodeType)
                    if (
                      (s || ((c[t] = r), (c.sizset = a)), 'string' != typeof n)
                    ) {
                      if (c === n) {
                        l = !0;
                        break;
                      }
                    } else if (f.filter(n, [c]).length > 0) {
                      l = c;
                      break;
                    }
                  c = c[e];
                }
                o[a] = l;
              }
            }
          }
          n.documentElement.compareDocumentPosition
            ? (m = function (e, t) {
                return e === t
                  ? ((s = !0), 0)
                  : e.compareDocumentPosition && t.compareDocumentPosition
                  ? 4 & e.compareDocumentPosition(t)
                    ? -1
                    : 1
                  : e.compareDocumentPosition
                  ? -1
                  : 1;
              })
            : ((m = function (e, t) {
                if (e === t) return (s = !0), 0;
                if (e.sourceIndex && t.sourceIndex)
                  return e.sourceIndex - t.sourceIndex;
                var n,
                  r,
                  o = [],
                  i = [],
                  a = e.parentNode,
                  u = t.parentNode,
                  c = a;
                if (a === u) return y(e, t);
                if (!a) return -1;
                if (!u) return 1;
                for (; c; ) o.unshift(c), (c = c.parentNode);
                for (c = u; c; ) i.unshift(c), (c = c.parentNode);
                (n = o.length), (r = i.length);
                for (var l = 0; l < n && l < r; l++)
                  if (o[l] !== i[l]) return y(o[l], i[l]);
                return l === n ? y(e, i[l], -1) : y(o[l], t, 1);
              }),
              (y = function (e, t, n) {
                if (e === t) return n;
                for (var r = e.nextSibling; r; ) {
                  if (r === t) return -1;
                  r = r.nextSibling;
                }
                return 1;
              })),
            (function () {
              var e = n.createElement('div'),
                t = 'script' + new Date().getTime(),
                r = n.documentElement;
              (e.innerHTML = "<a name='" + t + "'/>"),
                r.insertBefore(e, r.firstChild),
                n.getElementById(t) &&
                  ((p.find.ID = function (e, t, n) {
                    if (void 0 !== t.getElementById && !n) {
                      var r = t.getElementById(e[1]);
                      return r
                        ? r.id === e[1] ||
                          (void 0 !== r.getAttributeNode &&
                            r.getAttributeNode('id').nodeValue === e[1])
                          ? [r]
                          : void 0
                        : [];
                    }
                  }),
                  (p.filter.ID = function (e, t) {
                    var n =
                      void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                    return 1 === e.nodeType && n && n.nodeValue === t;
                  })),
                r.removeChild(e),
                (r = e = null);
            })(),
            (b = n.createElement('div')).appendChild(n.createComment('')),
            b.getElementsByTagName('*').length > 0 &&
              (p.find.TAG = function (e, t) {
                var n = t.getElementsByTagName(e[1]);
                if ('*' === e[1]) {
                  for (var r = [], o = 0; n[o]; o++)
                    1 === n[o].nodeType && r.push(n[o]);
                  n = r;
                }
                return n;
              }),
            (b.innerHTML = "<a href='#'></a>"),
            b.firstChild &&
              void 0 !== b.firstChild.getAttribute &&
              '#' !== b.firstChild.getAttribute('href') &&
              (p.attrHandle.href = function (e) {
                return e.getAttribute('href', 2);
              }),
            (b = null),
            n.querySelectorAll &&
              (function () {
                var e = f,
                  t = n.createElement('div');
                if (
                  ((t.innerHTML = "<p class='TEST'></p>"),
                  !t.querySelectorAll ||
                    0 !== t.querySelectorAll('.TEST').length)
                ) {
                  for (var r in ((f = function (t, r, o, i) {
                    if (((r = r || n), !i && !f.isXML(r))) {
                      var s = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                      if (s && (1 === r.nodeType || 9 === r.nodeType)) {
                        if (s[1]) return _(r.getElementsByTagName(t), o);
                        if (s[2] && p.find.CLASS && r.getElementsByClassName)
                          return _(r.getElementsByClassName(s[2]), o);
                      }
                      if (9 === r.nodeType) {
                        if ('body' === t && r.body) return _([r.body], o);
                        if (s && s[3]) {
                          var a = r.getElementById(s[3]);
                          if (!a || !a.parentNode) return _([], o);
                          if (a.id === s[3]) return _([a], o);
                        }
                        try {
                          return _(r.querySelectorAll(t), o);
                        } catch (g) {}
                      } else if (
                        1 === r.nodeType &&
                        'object' !== r.nodeName.toLowerCase()
                      ) {
                        var u = r,
                          c = r.getAttribute('id'),
                          l = c || '__sizzle__',
                          d = r.parentNode,
                          h = /^\s*[+~]/.test(t);
                        c
                          ? (l = l.replace(/'/g, '\\$&'))
                          : r.setAttribute('id', l),
                          h && d && (r = r.parentNode);
                        try {
                          if (!h || d)
                            return _(
                              r.querySelectorAll("[id='" + l + "'] " + t),
                              o,
                            );
                        } catch (v) {
                        } finally {
                          c || u.removeAttribute('id');
                        }
                      }
                    }
                    return e(t, r, o, i);
                  }),
                  e))
                    f[r] = e[r];
                  t = null;
                }
              })(),
            (function () {
              var e = n.documentElement,
                t =
                  e.matchesSelector ||
                  e.mozMatchesSelector ||
                  e.webkitMatchesSelector ||
                  e.msMatchesSelector;
              if (t) {
                var r = !t.call(n.createElement('div'), 'div'),
                  o = !1;
                try {
                  t.call(n.documentElement, "[test!='']:sizzle");
                } catch (i) {
                  o = !0;
                }
                f.matchesSelector = function (e, n) {
                  if (
                    ((n = n.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']")),
                    !f.isXML(e))
                  )
                    try {
                      if (o || (!p.match.PSEUDO.test(n) && !/!=/.test(n))) {
                        var i = t.call(e, n);
                        if (
                          i ||
                          !r ||
                          (e.document && 11 !== e.document.nodeType)
                        )
                          return i;
                      }
                    } catch (E) {}
                  return f(n, null, null, [e]).length > 0;
                };
              }
            })(),
            (function () {
              var e = n.createElement('div');
              (e.innerHTML =
                "<div class='test e'></div><div class='test'></div>"),
                e.getElementsByClassName &&
                  0 !== e.getElementsByClassName('e').length &&
                  ((e.lastChild.className = 'e'),
                  1 !== e.getElementsByClassName('e').length &&
                    (p.order.splice(1, 0, 'CLASS'),
                    (p.find.CLASS = function (e, t, n) {
                      if (void 0 !== t.getElementsByClassName && !n)
                        return t.getElementsByClassName(e[1]);
                    }),
                    (e = null)));
            })(),
            n.documentElement.contains
              ? (f.contains = function (e, t) {
                  return e !== t && (!e.contains || e.contains(t));
                })
              : n.documentElement.compareDocumentPosition
              ? (f.contains = function (e, t) {
                  return !!(16 & e.compareDocumentPosition(t));
                })
              : (f.contains = function () {
                  return !1;
                }),
            (f.isXML = function (e) {
              var t = (e ? e.ownerDocument || e : 0).documentElement;
              return !!t && 'HTML' !== t.nodeName;
            });
          var S = function (e, t, n) {
            for (
              var r, o = [], i = '', s = t.nodeType ? [t] : t;
              (r = p.match.PSEUDO.exec(e));

            )
              (i += r[0]), (e = e.replace(p.match.PSEUDO, ''));
            e = p.relative[e] ? e + '*' : e;
            for (var a = 0, u = s.length; a < u; a++) f(e, s[a], o, n);
            return f.filter(i, o);
          };
          (f.attr = i.attr),
            (f.selectors.attrMap = {}),
            (i.find = f),
            (i.expr = f.selectors),
            (i.expr[':'] = i.expr.filters),
            (i.unique = f.uniqueSort),
            (i.text = f.getText),
            (i.isXMLDoc = f.isXML),
            (i.contains = f.contains);
        })();
      var D = /Until$/,
        R = /^(?:parents|prevUntil|prevAll)/,
        I = /,/,
        H = /^.[^:#\[\.,]*$/,
        B = Array.prototype.slice,
        q = i.expr.match.globalPOS,
        W = { children: !0, contents: !0, next: !0, prev: !0 };
      function z(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType;
      }
      function V(e, t, n) {
        if (((t = t || 0), i.isFunction(t)))
          return i.grep(e, function (e, r) {
            return !!t.call(e, r, e) === n;
          });
        if (t.nodeType)
          return i.grep(e, function (e, r) {
            return (e === t) === n;
          });
        if ('string' == typeof t) {
          var r = i.grep(e, function (e) {
            return 1 === e.nodeType;
          });
          if (H.test(t)) return i.filter(t, r, !n);
          t = i.filter(t, r);
        }
        return i.grep(e, function (e, r) {
          return i.inArray(e, t) >= 0 === n;
        });
      }
      function U(e) {
        var t = $.split('|'),
          n = e.createDocumentFragment();
        if (n.createElement) for (; t.length; ) n.createElement(t.pop());
        return n;
      }
      i.fn.extend({
        find: function (e) {
          var t,
            n,
            r = this;
          if ('string' != typeof e)
            return i(e).filter(function () {
              for (t = 0, n = r.length; t < n; t++)
                if (i.contains(r[t], this)) return !0;
            });
          var o,
            s,
            a,
            u = this.pushStack('', 'find', e);
          for (t = 0, n = this.length; t < n; t++)
            if (((o = u.length), i.find(e, this[t], u), t > 0))
              for (s = o; s < u.length; s++)
                for (a = 0; a < o; a++)
                  if (u[a] === u[s]) {
                    u.splice(s--, 1);
                    break;
                  }
          return u;
        },
        has: function (e) {
          var t = i(e);
          return this.filter(function () {
            for (var e = 0, n = t.length; e < n; e++)
              if (i.contains(this, t[e])) return !0;
          });
        },
        not: function (e) {
          return this.pushStack(V(this, e, !1), 'not', e);
        },
        filter: function (e) {
          return this.pushStack(V(this, e, !0), 'filter', e);
        },
        is: function (e) {
          return (
            !!e &&
            ('string' == typeof e
              ? q.test(e)
                ? i(e, this.context).index(this[0]) >= 0
                : i.filter(e, this).length > 0
              : this.filter(e).length > 0)
          );
        },
        closest: function (e, t) {
          var n,
            r,
            o = [],
            s = this[0];
          if (i.isArray(e)) {
            for (var a = 1; s && s.ownerDocument && s !== t; ) {
              for (n = 0; n < e.length; n++)
                i(s).is(e[n]) && o.push({ selector: e[n], elem: s, level: a });
              (s = s.parentNode), a++;
            }
            return o;
          }
          var u =
            q.test(e) || 'string' != typeof e ? i(e, t || this.context) : 0;
          for (n = 0, r = this.length; n < r; n++)
            for (s = this[n]; s; ) {
              if (u ? u.index(s) > -1 : i.find.matchesSelector(s, e)) {
                o.push(s);
                break;
              }
              if (
                !(s = s.parentNode) ||
                !s.ownerDocument ||
                s === t ||
                11 === s.nodeType
              )
                break;
            }
          return (
            (o = o.length > 1 ? i.unique(o) : o),
            this.pushStack(o, 'closest', e)
          );
        },
        index: function (e) {
          return e
            ? 'string' == typeof e
              ? i.inArray(this[0], i(e))
              : i.inArray(e.jquery ? e[0] : e, this)
            : this[0] && this[0].parentNode
            ? this.prevAll().length
            : -1;
        },
        add: function (e, t) {
          var n =
              'string' == typeof e
                ? i(e, t)
                : i.makeArray(e && e.nodeType ? [e] : e),
            r = i.merge(this.get(), n);
          return this.pushStack(z(n[0]) || z(r[0]) ? r : i.unique(r));
        },
        andSelf: function () {
          return this.add(this.prevObject);
        },
      }),
        i.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return i.dir(e, 'parentNode');
            },
            parentsUntil: function (e, t, n) {
              return i.dir(e, 'parentNode', n);
            },
            next: function (e) {
              return i.nth(e, 2, 'nextSibling');
            },
            prev: function (e) {
              return i.nth(e, 2, 'previousSibling');
            },
            nextAll: function (e) {
              return i.dir(e, 'nextSibling');
            },
            prevAll: function (e) {
              return i.dir(e, 'previousSibling');
            },
            nextUntil: function (e, t, n) {
              return i.dir(e, 'nextSibling', n);
            },
            prevUntil: function (e, t, n) {
              return i.dir(e, 'previousSibling', n);
            },
            siblings: function (e) {
              return i.sibling((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return i.sibling(e.firstChild);
            },
            contents: function (e) {
              return i.nodeName(e, 'iframe')
                ? e.contentDocument || e.contentWindow.document
                : i.makeArray(e.childNodes);
            },
          },
          function (e, t) {
            i.fn[e] = function (n, r) {
              var o = i.map(this, t, n);
              return (
                D.test(e) || (r = n),
                r && 'string' == typeof r && (o = i.filter(r, o)),
                (o = this.length > 1 && !W[e] ? i.unique(o) : o),
                (this.length > 1 || I.test(r)) &&
                  R.test(e) &&
                  (o = o.reverse()),
                this.pushStack(o, e, B.call(arguments).join(','))
              );
            };
          },
        ),
        i.extend({
          filter: function (e, t, n) {
            return (
              n && (e = ':not(' + e + ')'),
              1 === t.length
                ? i.find.matchesSelector(t[0], e)
                  ? [t[0]]
                  : []
                : i.find.matches(e, t)
            );
          },
          dir: function (e, t, n) {
            for (
              var r = [], o = e[t];
              o &&
              9 !== o.nodeType &&
              (void 0 === n || 1 !== o.nodeType || !i(o).is(n));

            )
              1 === o.nodeType && r.push(o), (o = o[t]);
            return r;
          },
          nth: function (e, t, n, r) {
            t = t || 1;
            for (var o = 0; e && (1 !== e.nodeType || ++o !== t); e = e[n]);
            return e;
          },
          sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling)
              1 === e.nodeType && e !== t && n.push(e);
            return n;
          },
        });
      var $ =
          'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video',
        Q = / jQuery\d+="(?:\d+|null)"/g,
        X = /^\s+/,
        K = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Y = /<([\w:]+)/,
        J = /<tbody/i,
        G = /<|&#?\w+;/,
        Z = /<(?:script|style)/i,
        ee = /<(?:script|object|embed|option|style)/i,
        te = new RegExp('<(?:' + $ + ')[\\s/>]', 'i'),
        ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        re = /\/(java|ecma)script/i,
        oe = /^\s*<!(?:\[CDATA\[|\-\-)/,
        ie = {
          option: [1, "<select multiple='multiple'>", '</select>'],
          legend: [1, '<fieldset>', '</fieldset>'],
          thead: [1, '<table>', '</table>'],
          tr: [2, '<table><tbody>', '</tbody></table>'],
          td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
          col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
          area: [1, '<map>', '</map>'],
          _default: [0, '', ''],
        },
        se = U(n);
      function ae(e, t) {
        return i.nodeName(e, 'table')
          ? e.getElementsByTagName('tbody')[0] ||
              e.appendChild(e.ownerDocument.createElement('tbody'))
          : e;
      }
      function ue(e, t) {
        if (1 === t.nodeType && i.hasData(e)) {
          var n,
            r,
            o,
            s = i._data(e),
            a = i._data(t, s),
            u = s.events;
          if (u)
            for (n in (delete a.handle, (a.events = {}), u))
              for (r = 0, o = u[n].length; r < o; r++)
                i.event.add(t, n, u[n][r]);
          a.data && (a.data = i.extend({}, a.data));
        }
      }
      function ce(e, t) {
        var n;
        1 === t.nodeType &&
          (t.clearAttributes && t.clearAttributes(),
          t.mergeAttributes && t.mergeAttributes(e),
          'object' === (n = t.nodeName.toLowerCase())
            ? (t.outerHTML = e.outerHTML)
            : 'input' !== n || ('checkbox' !== e.type && 'radio' !== e.type)
            ? 'option' === n
              ? (t.selected = e.defaultSelected)
              : 'input' === n || 'textarea' === n
              ? (t.defaultValue = e.defaultValue)
              : 'script' === n && t.text !== e.text && (t.text = e.text)
            : (e.checked && (t.defaultChecked = t.checked = e.checked),
              t.value !== e.value && (t.value = e.value)),
          t.removeAttribute(i.expando),
          t.removeAttribute('_submit_attached'),
          t.removeAttribute('_change_attached'));
      }
      function le(e) {
        return void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName('*')
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll('*')
          : [];
      }
      function fe(e) {
        ('checkbox' !== e.type && 'radio' !== e.type) ||
          (e.defaultChecked = e.checked);
      }
      function de(e) {
        var t = (e.nodeName || '').toLowerCase();
        'input' === t
          ? fe(e)
          : 'script' !== t &&
            void 0 !== e.getElementsByTagName &&
            i.grep(e.getElementsByTagName('input'), fe);
      }
      (ie.optgroup = ie.option),
        (ie.tbody = ie.tfoot = ie.colgroup = ie.caption = ie.thead),
        (ie.th = ie.td),
        i.support.htmlSerialize || (ie._default = [1, 'div<div>', '</div>']),
        i.fn.extend({
          text: function (e) {
            return i.access(
              this,
              function (e) {
                return void 0 === e
                  ? i.text(this)
                  : this.empty().append(
                      ((this[0] && this[0].ownerDocument) || n).createTextNode(
                        e,
                      ),
                    );
              },
              null,
              e,
              arguments.length,
            );
          },
          wrapAll: function (e) {
            if (i.isFunction(e))
              return this.each(function (t) {
                i(this).wrapAll(e.call(this, t));
              });
            if (this[0]) {
              var t = i(e, this[0].ownerDocument).eq(0).clone(!0);
              this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (
                      var e = this;
                      e.firstChild && 1 === e.firstChild.nodeType;

                    )
                      e = e.firstChild;
                    return e;
                  })
                  .append(this);
            }
            return this;
          },
          wrapInner: function (e) {
            return i.isFunction(e)
              ? this.each(function (t) {
                  i(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = i(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = i.isFunction(e);
            return this.each(function (n) {
              i(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function () {
            return this.parent()
              .each(function () {
                i.nodeName(this, 'body') ||
                  i(this).replaceWith(this.childNodes);
              })
              .end();
          },
          append: function () {
            return this.domManip(arguments, !0, function (e) {
              1 === this.nodeType && this.appendChild(e);
            });
          },
          prepend: function () {
            return this.domManip(arguments, !0, function (e) {
              1 === this.nodeType && this.insertBefore(e, this.firstChild);
            });
          },
          before: function () {
            if (this[0] && this[0].parentNode)
              return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this);
              });
            if (arguments.length) {
              var e = i.clean(arguments);
              return (
                e.push.apply(e, this.toArray()),
                this.pushStack(e, 'before', arguments)
              );
            }
          },
          after: function () {
            if (this[0] && this[0].parentNode)
              return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this.nextSibling);
              });
            if (arguments.length) {
              var e = this.pushStack(this, 'after', arguments);
              return e.push.apply(e, i.clean(arguments)), e;
            }
          },
          remove: function (e, t) {
            for (var n, r = 0; null != (n = this[r]); r++)
              (e && !i.filter(e, [n]).length) ||
                (t ||
                  1 !== n.nodeType ||
                  (i.cleanData(n.getElementsByTagName('*')), i.cleanData([n])),
                n.parentNode && n.parentNode.removeChild(n));
            return this;
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              for (
                1 === e.nodeType && i.cleanData(e.getElementsByTagName('*'));
                e.firstChild;

              )
                e.removeChild(e.firstChild);
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return i.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return i.access(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === e)
                  return 1 === t.nodeType ? t.innerHTML.replace(Q, '') : null;
                if (
                  'string' == typeof e &&
                  !Z.test(e) &&
                  (i.support.leadingWhitespace || !X.test(e)) &&
                  !ie[(Y.exec(e) || ['', ''])[1].toLowerCase()]
                ) {
                  e = e.replace(K, '<$1></$2>');
                  try {
                    for (; n < r; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (i.cleanData(t.getElementsByTagName('*')),
                        (t.innerHTML = e));
                    t = 0;
                  } catch (o) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length,
            );
          },
          replaceWith: function (e) {
            return this[0] && this[0].parentNode
              ? i.isFunction(e)
                ? this.each(function (t) {
                    var n = i(this),
                      r = n.html();
                    n.replaceWith(e.call(this, t, r));
                  })
                : ('string' != typeof e && (e = i(e).detach()),
                  this.each(function () {
                    var t = this.nextSibling,
                      n = this.parentNode;
                    i(this).remove(), t ? i(t).before(e) : i(n).append(e);
                  }))
              : this.length
              ? this.pushStack(i(i.isFunction(e) ? e() : e), 'replaceWith', e)
              : this;
          },
          detach: function (e) {
            return this.remove(e, !0);
          },
          domManip: function (e, t, n) {
            var r,
              o,
              s,
              a,
              u = e[0],
              c = [];
            if (
              !i.support.checkClone &&
              3 === arguments.length &&
              'string' == typeof u &&
              ne.test(u)
            )
              return this.each(function () {
                i(this).domManip(e, t, n, !0);
              });
            if (i.isFunction(u))
              return this.each(function (r) {
                var o = i(this);
                (e[0] = u.call(this, r, t ? o.html() : void 0)),
                  o.domManip(e, t, n);
              });
            if (this[0]) {
              if (
                ((a = u && u.parentNode),
                (o =
                  1 ===
                  (s = (r =
                    i.support.parentNode &&
                    a &&
                    11 === a.nodeType &&
                    a.childNodes.length === this.length
                      ? { fragment: a }
                      : i.buildFragment(e, this, c)).fragment).childNodes.length
                    ? (s = s.firstChild)
                    : s.firstChild))
              ) {
                t = t && i.nodeName(o, 'tr');
                for (var l = 0, f = this.length, d = f - 1; l < f; l++)
                  n.call(
                    t ? ae(this[l], o) : this[l],
                    r.cacheable || (f > 1 && l < d) ? i.clone(s, !0, !0) : s,
                  );
              }
              c.length &&
                i.each(c, function (e, t) {
                  t.src
                    ? i.ajax({
                        type: 'GET',
                        global: !1,
                        url: t.src,
                        async: !1,
                        dataType: 'script',
                      })
                    : i.globalEval(
                        (t.text || t.textContent || t.innerHTML || '').replace(
                          oe,
                          '/*$0*/',
                        ),
                      ),
                    t.parentNode && t.parentNode.removeChild(t);
                });
            }
            return this;
          },
        }),
        (i.buildFragment = function (e, t, r) {
          var o,
            s,
            a,
            u,
            c = e[0];
          return (
            t && t[0] && (u = t[0].ownerDocument || t[0]),
            u.createDocumentFragment || (u = n),
            !(
              1 === e.length &&
              'string' == typeof c &&
              c.length < 512 &&
              u === n &&
              '<' === c.charAt(0)
            ) ||
              ee.test(c) ||
              (!i.support.checkClone && ne.test(c)) ||
              (!i.support.html5Clone && te.test(c)) ||
              ((s = !0), (a = i.fragments[c]) && 1 !== a && (o = a)),
            o || ((o = u.createDocumentFragment()), i.clean(e, u, o, r)),
            s && (i.fragments[c] = a ? o : 1),
            { fragment: o, cacheable: s }
          );
        }),
        (i.fragments = {}),
        i.each(
          {
            appendTo: 'append',
            prependTo: 'prepend',
            insertBefore: 'before',
            insertAfter: 'after',
            replaceAll: 'replaceWith',
          },
          function (e, t) {
            i.fn[e] = function (n) {
              var r = [],
                o = i(n),
                s = 1 === this.length && this[0].parentNode;
              if (
                s &&
                11 === s.nodeType &&
                1 === s.childNodes.length &&
                1 === o.length
              )
                return o[t](this[0]), this;
              for (var a = 0, u = o.length; a < u; a++) {
                var c = (a > 0 ? this.clone(!0) : this).get();
                i(o[a])[t](c), (r = r.concat(c));
              }
              return this.pushStack(r, e, o.selector);
            };
          },
        ),
        i.extend({
          clone: function (e, t, r) {
            var o,
              s,
              a,
              u =
                i.support.html5Clone ||
                i.isXMLDoc(e) ||
                !te.test('<' + e.nodeName + '>')
                  ? e.cloneNode(!0)
                  : (function (e) {
                      var t = n.createElement('div');
                      return (
                        se.appendChild(t),
                        (t.innerHTML = e.outerHTML),
                        t.firstChild
                      );
                    })(e);
            if (
              !(
                (i.support.noCloneEvent && i.support.noCloneChecked) ||
                (1 !== e.nodeType && 11 !== e.nodeType) ||
                i.isXMLDoc(e)
              )
            )
              for (ce(e, u), o = le(e), s = le(u), a = 0; o[a]; ++a)
                s[a] && ce(o[a], s[a]);
            if (t && (ue(e, u), r))
              for (o = le(e), s = le(u), a = 0; o[a]; ++a) ue(o[a], s[a]);
            return (o = s = null), u;
          },
          clean: function (e, t, r, o) {
            var s,
              a,
              u,
              c = [];
            void 0 === (t = t || n).createElement &&
              (t = t.ownerDocument || (t[0] && t[0].ownerDocument) || n);
            for (var l, f = 0; null != (l = e[f]); f++)
              if (('number' == typeof l && (l += ''), l)) {
                if ('string' == typeof l)
                  if (G.test(l)) {
                    l = l.replace(K, '<$1></$2>');
                    var d,
                      p = (Y.exec(l) || ['', ''])[1].toLowerCase(),
                      h = ie[p] || ie._default,
                      g = h[0],
                      v = t.createElement('div'),
                      m = se.childNodes;
                    for (
                      t === n ? se.appendChild(v) : U(t).appendChild(v),
                        v.innerHTML = h[1] + l + h[2];
                      g--;

                    )
                      v = v.lastChild;
                    if (!i.support.tbody) {
                      var y = J.test(l),
                        b =
                          'table' !== p || y
                            ? '<table>' !== h[1] || y
                              ? []
                              : v.childNodes
                            : v.firstChild && v.firstChild.childNodes;
                      for (u = b.length - 1; u >= 0; --u)
                        i.nodeName(b[u], 'tbody') &&
                          !b[u].childNodes.length &&
                          b[u].parentNode.removeChild(b[u]);
                    }
                    !i.support.leadingWhitespace &&
                      X.test(l) &&
                      v.insertBefore(
                        t.createTextNode(X.exec(l)[0]),
                        v.firstChild,
                      ),
                      (l = v.childNodes),
                      v &&
                        (v.parentNode.removeChild(v),
                        m.length > 0 &&
                          (d = m[m.length - 1]) &&
                          d.parentNode &&
                          d.parentNode.removeChild(d));
                  } else l = t.createTextNode(l);
                var _;
                if (!i.support.appendChecked)
                  if (l[0] && 'number' == typeof (_ = l.length))
                    for (u = 0; u < _; u++) de(l[u]);
                  else de(l);
                l.nodeType ? c.push(l) : (c = i.merge(c, l));
              }
            if (r)
              for (
                s = function (e) {
                  return !e.type || re.test(e.type);
                },
                  f = 0;
                c[f];
                f++
              )
                if (
                  ((a = c[f]),
                  o && i.nodeName(a, 'script') && (!a.type || re.test(a.type)))
                )
                  o.push(a.parentNode ? a.parentNode.removeChild(a) : a);
                else {
                  if (1 === a.nodeType) {
                    var w = i.grep(a.getElementsByTagName('script'), s);
                    c.splice.apply(c, [f + 1, 0].concat(w));
                  }
                  r.appendChild(a);
                }
            return c;
          },
          cleanData: function (e) {
            for (
              var t,
                n,
                r,
                o = i.cache,
                s = i.event.special,
                a = i.support.deleteExpando,
                u = 0;
              null != (r = e[u]);
              u++
            )
              if (
                (!r.nodeName || !i.noData[r.nodeName.toLowerCase()]) &&
                (n = r[i.expando])
              ) {
                if ((t = o[n]) && t.events) {
                  for (var c in t.events)
                    s[c] ? i.event.remove(r, c) : i.removeEvent(r, c, t.handle);
                  t.handle && (t.handle.elem = null);
                }
                a
                  ? delete r[i.expando]
                  : r.removeAttribute && r.removeAttribute(i.expando),
                  delete o[n];
              }
          },
        });
      var pe,
        he,
        ge,
        ve = /alpha\([^)]*\)/i,
        me = /opacity=([^)]*)/,
        ye = /([A-Z]|^ms)/g,
        be = /^[\-+]?(?:\d*\.)?\d+$/i,
        _e = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
        we = /^([\-+])=([\-+.\de]+)/,
        xe = /^margin/,
        Se = { position: 'absolute', visibility: 'hidden', display: 'block' },
        Ee = ['Top', 'Right', 'Bottom', 'Left'];
      function Oe(e, t, n) {
        var r = 'width' === t ? e.offsetWidth : e.offsetHeight,
          o = 'width' === t ? 1 : 0;
        if (r > 0) {
          if ('border' !== n)
            for (; o < 4; o += 2)
              n || (r -= parseFloat(i.css(e, 'padding' + Ee[o])) || 0),
                'margin' === n
                  ? (r += parseFloat(i.css(e, n + Ee[o])) || 0)
                  : (r -=
                      parseFloat(i.css(e, 'border' + Ee[o] + 'Width')) || 0);
          return r + 'px';
        }
        if ((((r = pe(e, t)) < 0 || null == r) && (r = e.style[t]), _e.test(r)))
          return r;
        if (((r = parseFloat(r) || 0), n))
          for (; o < 4; o += 2)
            (r += parseFloat(i.css(e, 'padding' + Ee[o])) || 0),
              'padding' !== n &&
                (r += parseFloat(i.css(e, 'border' + Ee[o] + 'Width')) || 0),
              'margin' === n && (r += parseFloat(i.css(e, n + Ee[o])) || 0);
        return r + 'px';
      }
      (i.fn.css = function (e, t) {
        return i.access(
          this,
          function (e, t, n) {
            return void 0 !== n ? i.style(e, t, n) : i.css(e, t);
          },
          e,
          t,
          arguments.length > 1,
        );
      }),
        i.extend({
          cssHooks: {
            opacity: {
              get: function (e, t) {
                if (t) {
                  var n = pe(e, 'opacity');
                  return '' === n ? '1' : n;
                }
                return e.style.opacity;
              },
            },
          },
          cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          },
          cssProps: { float: i.support.cssFloat ? 'cssFloat' : 'styleFloat' },
          style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var o,
                s,
                a = i.camelCase(t),
                u = e.style,
                c = i.cssHooks[a];
              if (((t = i.cssProps[a] || a), void 0 === n))
                return c && 'get' in c && void 0 !== (o = c.get(e, !1, r))
                  ? o
                  : u[t];
              if (
                !('string' === (s = typeof n) &&
                  (o = we.exec(n)) &&
                  ((n = +(o[1] + 1) * +o[2] + parseFloat(i.css(e, t))),
                  (s = 'number')),
                null == n ||
                  ('number' === s && isNaN(n)) ||
                  ('number' !== s || i.cssNumber[a] || (n += 'px'),
                  c && 'set' in c && void 0 === (n = c.set(e, n))))
              )
                try {
                  u[t] = n;
                } catch (l) {}
            }
          },
          css: function (e, t, n) {
            var r, o;
            return (
              (t = i.camelCase(t)),
              (o = i.cssHooks[t]),
              'cssFloat' === (t = i.cssProps[t] || t) && (t = 'float'),
              o && 'get' in o && void 0 !== (r = o.get(e, !0, n))
                ? r
                : pe
                ? pe(e, t)
                : void 0
            );
          },
          swap: function (e, t, n) {
            var r,
              o,
              i = {};
            for (o in t) (i[o] = e.style[o]), (e.style[o] = t[o]);
            for (o in ((r = n.call(e)), t)) e.style[o] = i[o];
            return r;
          },
        }),
        (i.curCSS = i.css),
        n.defaultView &&
          n.defaultView.getComputedStyle &&
          (he = function (e, t) {
            var n,
              r,
              o,
              s,
              a = e.style;
            return (
              (t = t.replace(ye, '-$1').toLowerCase()),
              (r = e.ownerDocument.defaultView) &&
                (o = r.getComputedStyle(e, null)) &&
                ('' !== (n = o.getPropertyValue(t)) ||
                  i.contains(e.ownerDocument.documentElement, e) ||
                  (n = i.style(e, t))),
              !i.support.pixelMargin &&
                o &&
                xe.test(t) &&
                _e.test(n) &&
                ((s = a.width), (a.width = n), (n = o.width), (a.width = s)),
              n
            );
          }),
        n.documentElement.currentStyle &&
          (ge = function (e, t) {
            var n,
              r,
              o,
              i = e.currentStyle && e.currentStyle[t],
              s = e.style;
            return (
              null == i && s && (o = s[t]) && (i = o),
              _e.test(i) &&
                ((n = s.left),
                (r = e.runtimeStyle && e.runtimeStyle.left) &&
                  (e.runtimeStyle.left = e.currentStyle.left),
                (s.left = 'fontSize' === t ? '1em' : i),
                (i = s.pixelLeft + 'px'),
                (s.left = n),
                r && (e.runtimeStyle.left = r)),
              '' === i ? 'auto' : i
            );
          }),
        (pe = he || ge),
        i.each(['height', 'width'], function (e, t) {
          i.cssHooks[t] = {
            get: function (e, n, r) {
              if (n)
                return 0 !== e.offsetWidth
                  ? Oe(e, t, r)
                  : i.swap(e, Se, function () {
                      return Oe(e, t, r);
                    });
            },
            set: function (e, t) {
              return be.test(t) ? t + 'px' : t;
            },
          };
        }),
        i.support.opacity ||
          (i.cssHooks.opacity = {
            get: function (e, t) {
              return me.test(
                (t && e.currentStyle
                  ? e.currentStyle.filter
                  : e.style.filter) || '',
              )
                ? parseFloat(RegExp.$1) / 100 + ''
                : t
                ? '1'
                : '';
            },
            set: function (e, t) {
              var n = e.style,
                r = e.currentStyle,
                o = i.isNumeric(t) ? 'alpha(opacity=' + 100 * t + ')' : '',
                s = (r && r.filter) || n.filter || '';
              (n.zoom = 1),
                (t >= 1 &&
                  '' === i.trim(s.replace(ve, '')) &&
                  (n.removeAttribute('filter'), r && !r.filter)) ||
                  (n.filter = ve.test(s) ? s.replace(ve, o) : s + ' ' + o);
            },
          }),
        i(function () {
          i.support.reliableMarginRight ||
            (i.cssHooks.marginRight = {
              get: function (e, t) {
                return i.swap(e, { display: 'inline-block' }, function () {
                  return t ? pe(e, 'margin-right') : e.style.marginRight;
                });
              },
            });
        }),
        i.expr &&
          i.expr.filters &&
          ((i.expr.filters.hidden = function (e) {
            var t = e.offsetWidth,
              n = e.offsetHeight;
            return (
              (0 === t && 0 === n) ||
              (!i.support.reliableHiddenOffsets &&
                'none' ===
                  ((e.style && e.style.display) || i.css(e, 'display')))
            );
          }),
          (i.expr.filters.visible = function (e) {
            return !i.expr.filters.hidden(e);
          })),
        i.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
          i.cssHooks[e + t] = {
            expand: function (n) {
              var r,
                o = 'string' == typeof n ? n.split(' ') : [n],
                i = {};
              for (r = 0; r < 4; r++)
                i[e + Ee[r] + t] = o[r] || o[r - 2] || o[0];
              return i;
            },
          };
        });
      var Te,
        ke,
        Ne = /%20/g,
        Ce = /\[\]$/,
        je = /\r?\n/g,
        Pe = /#.*$/,
        Ae = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Le = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Me = /^(?:GET|HEAD)$/,
        Fe = /^\/\//,
        De = /\?/,
        Re = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Ie = /^(?:select|textarea)/i,
        He = /\s+/,
        Be = /([?&])_=[^&]*/,
        qe = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        We = i.fn.load,
        ze = {},
        Ve = {},
        Ue = ['*/'] + ['*'];
      try {
        Te = o.href;
      } catch (bt) {
        ((Te = n.createElement('a')).href = ''), (Te = Te.href);
      }
      function $e(e) {
        return function (t, n) {
          if (('string' != typeof t && ((n = t), (t = '*')), i.isFunction(n)))
            for (
              var r, o, s = t.toLowerCase().split(He), a = 0, u = s.length;
              a < u;
              a++
            )
              (r = s[a]),
                (o = /^\+/.test(r)) && (r = r.substr(1) || '*'),
                (e[r] = e[r] || [])[o ? 'unshift' : 'push'](n);
        };
      }
      function Qe(e, t, n, r, o, i) {
        (i = i || {})[(o = o || t.dataTypes[0])] = !0;
        for (
          var s, a = e[o], u = 0, c = a ? a.length : 0, l = e === ze;
          u < c && (l || !s);
          u++
        )
          'string' == typeof (s = a[u](t, n, r)) &&
            (!l || i[s]
              ? (s = void 0)
              : (t.dataTypes.unshift(s), (s = Qe(e, t, n, r, s, i))));
        return (!l && s) || i['*'] || (s = Qe(e, t, n, r, '*', i)), s;
      }
      function Xe(e, t) {
        var n,
          r,
          o = i.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        r && i.extend(!0, e, r);
      }
      function Ke(e, t, n, r) {
        if (i.isArray(t))
          i.each(t, function (t, o) {
            n || Ce.test(e)
              ? r(e, o)
              : Ke(e + '[' + ('object' == typeof o ? t : '') + ']', o, n, r);
          });
        else if (n || 'object' !== i.type(t)) r(e, t);
        else for (var o in t) Ke(e + '[' + o + ']', t[o], n, r);
      }
      (ke = qe.exec(Te.toLowerCase()) || []),
        i.fn.extend({
          load: function (e, t, n) {
            if ('string' != typeof e && We) return We.apply(this, arguments);
            if (!this.length) return this;
            var r = e.indexOf(' ');
            if (r >= 0) {
              var o = e.slice(r, e.length);
              e = e.slice(0, r);
            }
            var s = 'GET';
            t &&
              (i.isFunction(t)
                ? ((n = t), (t = void 0))
                : 'object' == typeof t &&
                  ((t = i.param(t, i.ajaxSettings.traditional)), (s = 'POST')));
            var a = this;
            return (
              i.ajax({
                url: e,
                type: s,
                dataType: 'html',
                data: t,
                complete: function (e, t, r) {
                  (r = e.responseText),
                    e.isResolved() &&
                      (e.done(function (e) {
                        r = e;
                      }),
                      a.html(
                        o ? i('<div>').append(r.replace(Re, '')).find(o) : r,
                      )),
                    n && a.each(n, [r, t, e]);
                },
              }),
              this
            );
          },
          serialize: function () {
            return i.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              return this.elements ? i.makeArray(this.elements) : this;
            })
              .filter(function () {
                return (
                  this.name &&
                  !this.disabled &&
                  (this.checked || Ie.test(this.nodeName) || Le.test(this.type))
                );
              })
              .map(function (e, t) {
                var n = i(this).val();
                return null == n
                  ? null
                  : i.isArray(n)
                  ? i.map(n, function (e, n) {
                      return { name: t.name, value: e.replace(je, '\r\n') };
                    })
                  : { name: t.name, value: n.replace(je, '\r\n') };
              })
              .get();
          },
        }),
        i.each(
          'ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend'.split(
            ' ',
          ),
          function (e, t) {
            i.fn[t] = function (e) {
              return this.on(t, e);
            };
          },
        ),
        i.each(['get', 'post'], function (e, t) {
          i[t] = function (e, n, r, o) {
            return (
              i.isFunction(n) && ((o = o || r), (r = n), (n = void 0)),
              i.ajax({ type: t, url: e, data: n, success: r, dataType: o })
            );
          };
        }),
        i.extend({
          getScript: function (e, t) {
            return i.get(e, void 0, t, 'script');
          },
          getJSON: function (e, t, n) {
            return i.get(e, t, n, 'json');
          },
          ajaxSetup: function (e, t) {
            return (
              t ? Xe(e, i.ajaxSettings) : ((t = e), (e = i.ajaxSettings)),
              Xe(e, t),
              e
            );
          },
          ajaxSettings: {
            url: Te,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(
              ke[1],
            ),
            global: !0,
            type: 'GET',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            processData: !0,
            async: !0,
            accepts: {
              xml: 'application/xml, text/xml',
              html: 'text/html',
              text: 'text/plain',
              json: 'application/json, text/javascript',
              '*': Ue,
            },
            contents: { xml: /xml/, html: /html/, json: /json/ },
            responseFields: { xml: 'responseXML', text: 'responseText' },
            converters: {
              '* text': window.String,
              'text html': !0,
              'text json': i.parseJSON,
              'text xml': i.parseXML,
            },
            flatOptions: { context: !0, url: !0 },
          },
          ajaxPrefilter: $e(ze),
          ajaxTransport: $e(Ve),
          ajax: function (e, t) {
            'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var n,
              r,
              o,
              s,
              a,
              u,
              c,
              l,
              f = i.ajaxSetup({}, t),
              d = f.context || f,
              p = d !== f && (d.nodeType || d instanceof i) ? i(d) : i.event,
              h = i.Deferred(),
              g = i.Callbacks('once memory'),
              v = f.statusCode || {},
              m = {},
              y = {},
              b = 0,
              _ = {
                readyState: 0,
                setRequestHeader: function (e, t) {
                  if (!b) {
                    var n = e.toLowerCase();
                    (e = y[n] = y[n] || e), (m[e] = t);
                  }
                  return this;
                },
                getAllResponseHeaders: function () {
                  return 2 === b ? r : null;
                },
                getResponseHeader: function (e) {
                  var t;
                  if (2 === b) {
                    if (!o)
                      for (o = {}; (t = Ae.exec(r)); )
                        o[t[1].toLowerCase()] = t[2];
                    t = o[e.toLowerCase()];
                  }
                  return void 0 === t ? null : t;
                },
                overrideMimeType: function (e) {
                  return b || (f.mimeType = e), this;
                },
                abort: function (e) {
                  return (e = e || 'abort'), s && s.abort(e), w(0, e), this;
                },
              };
            function w(e, t, o, u) {
              if (2 !== b) {
                (b = 2),
                  a && clearTimeout(a),
                  (s = void 0),
                  (r = u || ''),
                  (_.readyState = e > 0 ? 4 : 0);
                var l,
                  m,
                  y,
                  w,
                  x,
                  S = t,
                  E = o
                    ? (function (e, t, n) {
                        var r,
                          o,
                          i,
                          s,
                          a = e.contents,
                          u = e.dataTypes,
                          c = e.responseFields;
                        for (o in c) o in n && (t[c[o]] = n[o]);
                        for (; '*' === u[0]; )
                          u.shift(),
                            void 0 === r &&
                              (r =
                                e.mimeType ||
                                t.getResponseHeader('content-type'));
                        if (r)
                          for (o in a)
                            if (a[o] && a[o].test(r)) {
                              u.unshift(o);
                              break;
                            }
                        if (u[0] in n) i = u[0];
                        else {
                          for (o in n) {
                            if (!u[0] || e.converters[o + ' ' + u[0]]) {
                              i = o;
                              break;
                            }
                            s || (s = o);
                          }
                          i = i || s;
                        }
                        if (i) return i !== u[0] && u.unshift(i), n[i];
                      })(f, _, o)
                    : void 0;
                if ((e >= 200 && e < 300) || 304 === e)
                  if (
                    (f.ifModified &&
                      ((w = _.getResponseHeader('Last-Modified')) &&
                        (i.lastModified[n] = w),
                      (x = _.getResponseHeader('Etag')) && (i.etag[n] = x)),
                    304 === e)
                  )
                    (S = 'notmodified'), (l = !0);
                  else
                    try {
                      (m = (function (e, t) {
                        e.dataFilter && (t = e.dataFilter(t, e.dataType));
                        var n,
                          r,
                          o,
                          s,
                          a,
                          u,
                          c,
                          l,
                          f = e.dataTypes,
                          d = {},
                          p = f.length,
                          h = f[0];
                        for (n = 1; n < p; n++) {
                          if (1 === n)
                            for (r in e.converters)
                              'string' == typeof r &&
                                (d[r.toLowerCase()] = e.converters[r]);
                          if (((s = h), '*' === (h = f[n]))) h = s;
                          else if ('*' !== s && s !== h) {
                            if (!(u = d[(a = s + ' ' + h)] || d['* ' + h]))
                              for (c in ((l = void 0), d))
                                if (
                                  ((o = c.split(' '))[0] === s ||
                                    '*' === o[0]) &&
                                  (l = d[o[1] + ' ' + h])
                                ) {
                                  !0 === (c = d[c])
                                    ? (u = l)
                                    : !0 === l && (u = c);
                                  break;
                                }
                            u ||
                              l ||
                              i.error(
                                'No conversion from ' + a.replace(' ', ' to '),
                              ),
                              !0 !== u && (t = u ? u(t) : l(c(t)));
                          }
                        }
                        return t;
                      })(f, E)),
                        (S = 'success'),
                        (l = !0);
                    } catch (bt) {
                      (S = 'parsererror'), (y = bt);
                    }
                else (y = S), (S && !e) || ((S = 'error'), e < 0 && (e = 0));
                (_.status = e),
                  (_.statusText = '' + (t || S)),
                  l ? h.resolveWith(d, [m, S, _]) : h.rejectWith(d, [_, S, y]),
                  _.statusCode(v),
                  (v = void 0),
                  c &&
                    p.trigger('ajax' + (l ? 'Success' : 'Error'), [
                      _,
                      f,
                      l ? m : y,
                    ]),
                  g.fireWith(d, [_, S]),
                  c &&
                    (p.trigger('ajaxComplete', [_, f]),
                    --i.active || i.event.trigger('ajaxStop'));
              }
            }
            if (
              (h.promise(_),
              (_.success = _.done),
              (_.error = _.fail),
              (_.complete = g.add),
              (_.statusCode = function (e) {
                var t;
                if (e)
                  if (b < 2) for (t in e) v[t] = [v[t], e[t]];
                  else (t = e[_.status]), _.then(t, t);
                return this;
              }),
              (f.url = ((e || f.url) + '')
                .replace(Pe, '')
                .replace(Fe, ke[1] + '//')),
              (f.dataTypes = i
                .trim(f.dataType || '*')
                .toLowerCase()
                .split(He)),
              null == f.crossDomain &&
                ((u = qe.exec(f.url.toLowerCase())),
                (f.crossDomain = !(
                  !u ||
                  (u[1] == ke[1] &&
                    u[2] == ke[2] &&
                    (u[3] || ('http:' === u[1] ? 80 : 443)) ==
                      (ke[3] || ('http:' === ke[1] ? 80 : 443)))
                ))),
              f.data &&
                f.processData &&
                'string' != typeof f.data &&
                (f.data = i.param(f.data, f.traditional)),
              Qe(ze, f, t, _),
              2 === b)
            )
              return !1;
            if (
              ((c = f.global),
              (f.type = f.type.toUpperCase()),
              (f.hasContent = !Me.test(f.type)),
              c && 0 == i.active++ && i.event.trigger('ajaxStart'),
              !f.hasContent &&
                (f.data &&
                  ((f.url += (De.test(f.url) ? '&' : '?') + f.data),
                  delete f.data),
                (n = f.url),
                !1 === f.cache))
            ) {
              var x = i.now(),
                S = f.url.replace(Be, '$1_=' + x);
              f.url =
                S +
                (S === f.url ? (De.test(f.url) ? '&' : '?') + '_=' + x : '');
            }
            for (l in (((f.data && f.hasContent && !1 !== f.contentType) ||
              t.contentType) &&
              _.setRequestHeader('Content-Type', f.contentType),
            f.ifModified &&
              ((n = n || f.url),
              i.lastModified[n] &&
                _.setRequestHeader('If-Modified-Since', i.lastModified[n]),
              i.etag[n] && _.setRequestHeader('If-None-Match', i.etag[n])),
            _.setRequestHeader(
              'Accept',
              f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                ? f.accepts[f.dataTypes[0]] +
                    ('*' !== f.dataTypes[0] ? ', ' + Ue + '; q=0.01' : '')
                : f.accepts['*'],
            ),
            f.headers))
              _.setRequestHeader(l, f.headers[l]);
            if (f.beforeSend && (!1 === f.beforeSend.call(d, _, f) || 2 === b))
              return _.abort(), !1;
            for (l in { success: 1, error: 1, complete: 1 }) _[l](f[l]);
            if ((s = Qe(Ve, f, t, _))) {
              (_.readyState = 1),
                c && p.trigger('ajaxSend', [_, f]),
                f.async &&
                  f.timeout > 0 &&
                  (a = setTimeout(function () {
                    _.abort('timeout');
                  }, f.timeout));
              try {
                (b = 1), s.send(m, w);
              } catch (bt) {
                if (!(b < 2)) throw bt;
                w(-1, bt);
              }
            } else w(-1, 'No Transport');
            return _;
          },
          param: function (e, t) {
            var n = [],
              r = function (e, t) {
                (t = i.isFunction(t) ? t() : t),
                  (n[n.length] =
                    encodeURIComponent(e) + '=' + encodeURIComponent(t));
              };
            if (
              (void 0 === t && (t = i.ajaxSettings.traditional),
              i.isArray(e) || (e.jquery && !i.isPlainObject(e)))
            )
              i.each(e, function () {
                r(this.name, this.value);
              });
            else for (var o in e) Ke(o, e[o], t, r);
            return n.join('&').replace(Ne, '+');
          },
        }),
        i.extend({ active: 0, lastModified: {}, etag: {} });
      var Ye = i.now(),
        Je = /(\=)\?(&|$)|\?\?/i;
      i.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
          return i.expando + '_' + Ye++;
        },
      }),
        i.ajaxPrefilter('json jsonp', function (e, t, n) {
          var r =
            'string' == typeof e.data &&
            /^application\/x\-www\-form\-urlencoded/.test(e.contentType);
          if (
            'jsonp' === e.dataTypes[0] ||
            (!1 !== e.jsonp && (Je.test(e.url) || (r && Je.test(e.data))))
          ) {
            var o,
              s = (e.jsonpCallback = i.isFunction(e.jsonpCallback)
                ? e.jsonpCallback()
                : e.jsonpCallback),
              a = window[s],
              u = e.url,
              c = e.data,
              l = '$1' + s + '$2';
            return (
              !1 !== e.jsonp &&
                ((u = u.replace(Je, l)),
                e.url === u &&
                  (r && (c = c.replace(Je, l)),
                  e.data === c &&
                    (u += (/\?/.test(u) ? '&' : '?') + e.jsonp + '=' + s))),
              (e.url = u),
              (e.data = c),
              (window[s] = function (e) {
                o = [e];
              }),
              n.always(function () {
                (window[s] = a), o && i.isFunction(a) && window[s](o[0]);
              }),
              (e.converters['script json'] = function () {
                return o || i.error(s + ' was not called'), o[0];
              }),
              (e.dataTypes[0] = 'json'),
              'script'
            );
          }
        }),
        i.ajaxSetup({
          accepts: {
            script:
              'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
          },
          contents: { script: /javascript|ecmascript/ },
          converters: {
            'text script': function (e) {
              return i.globalEval(e), e;
            },
          },
        }),
        i.ajaxPrefilter('script', function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && ((e.type = 'GET'), (e.global = !1));
        }),
        i.ajaxTransport('script', function (e) {
          if (e.crossDomain) {
            var t,
              r =
                n.head ||
                n.getElementsByTagName('head')[0] ||
                n.documentElement;
            return {
              send: function (o, i) {
                ((t = n.createElement('script')).async = 'async'),
                  e.scriptCharset && (t.charset = e.scriptCharset),
                  (t.src = e.url),
                  (t.onload = t.onreadystatechange = function (e, n) {
                    (n ||
                      !t.readyState ||
                      /loaded|complete/.test(t.readyState)) &&
                      ((t.onload = t.onreadystatechange = null),
                      r && t.parentNode && r.removeChild(t),
                      (t = void 0),
                      n || i(200, 'success'));
                  }),
                  r.insertBefore(t, r.firstChild);
              },
              abort: function () {
                t && t.onload(0, 1);
              },
            };
          }
        });
      var Ge,
        Ze,
        et =
          !!window.ActiveXObject &&
          function () {
            for (var e in Ge) Ge[e](0, 1);
          },
        tt = 0;
      function nt() {
        try {
          return new window.XMLHttpRequest();
        } catch (bt) {}
      }
      (i.ajaxSettings.xhr = window.ActiveXObject
        ? function () {
            return (
              (!this.isLocal && nt()) ||
              (function () {
                try {
                  return new window.ActiveXObject('Microsoft.XMLHTTP');
                } catch (bt) {}
              })()
            );
          }
        : nt),
        (Ze = i.ajaxSettings.xhr()),
        i.extend(i.support, {
          ajax: !!Ze,
          cors: !!Ze && 'withCredentials' in Ze,
        }),
        i.support.ajax &&
          i.ajaxTransport(function (e) {
            var t;
            if (!e.crossDomain || i.support.cors)
              return {
                send: function (n, r) {
                  var o,
                    s,
                    a = e.xhr();
                  if (
                    (e.username
                      ? a.open(e.type, e.url, e.async, e.username, e.password)
                      : a.open(e.type, e.url, e.async),
                    e.xhrFields)
                  )
                    for (s in e.xhrFields) a[s] = e.xhrFields[s];
                  e.mimeType &&
                    a.overrideMimeType &&
                    a.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      n['X-Requested-With'] ||
                      (n['X-Requested-With'] = 'XMLHttpRequest');
                  try {
                    for (s in n) a.setRequestHeader(s, n[s]);
                  } catch (u) {}
                  a.send((e.hasContent && e.data) || null),
                    (t = function (n, s) {
                      var u, c, l, f, d;
                      try {
                        if (t && (s || 4 === a.readyState))
                          if (
                            ((t = void 0),
                            o &&
                              ((a.onreadystatechange = i.noop),
                              et && delete Ge[o]),
                            s)
                          )
                            4 !== a.readyState && a.abort();
                          else {
                            (u = a.status),
                              (l = a.getAllResponseHeaders()),
                              (f = {}),
                              (d = a.responseXML) &&
                                d.documentElement &&
                                (f.xml = d);
                            try {
                              f.text = a.responseText;
                            } catch (n) {}
                            try {
                              c = a.statusText;
                            } catch (bt) {
                              c = '';
                            }
                            u || !e.isLocal || e.crossDomain
                              ? 1223 === u && (u = 204)
                              : (u = f.text ? 200 : 404);
                          }
                      } catch (p) {
                        s || r(-1, p);
                      }
                      f && r(u, c, f, l);
                    }),
                    e.async && 4 !== a.readyState
                      ? ((o = ++tt),
                        et &&
                          (Ge || ((Ge = {}), i(window).unload(et)),
                          (Ge[o] = t)),
                        (a.onreadystatechange = t))
                      : t();
                },
                abort: function () {
                  t && t(0, 1);
                },
              };
          });
      var rt,
        ot,
        it,
        st,
        at = {},
        ut = /^(?:toggle|show|hide)$/,
        ct = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        lt = [
          [
            'height',
            'marginTop',
            'marginBottom',
            'paddingTop',
            'paddingBottom',
          ],
          ['width', 'marginLeft', 'marginRight', 'paddingLeft', 'paddingRight'],
          ['opacity'],
        ];
      function ft() {
        return setTimeout(dt, 0), (st = i.now());
      }
      function dt() {
        st = void 0;
      }
      function pt(e, t) {
        var n = {};
        return (
          i.each(lt.concat.apply([], lt.slice(0, t)), function () {
            n[this] = e;
          }),
          n
        );
      }
      function ht(e) {
        if (!at[e]) {
          var t = n.body,
            r = i('<' + e + '>').appendTo(t),
            o = r.css('display');
          r.remove(),
            ('none' !== o && '' !== o) ||
              (rt ||
                ((rt = n.createElement(
                  'iframe',
                )).frameBorder = rt.width = rt.height = 0),
              t.appendChild(rt),
              (ot && rt.createElement) ||
                ((ot = (rt.contentWindow || rt.contentDocument).document).write(
                  (i.support.boxModel ? '<!doctype html>' : '') +
                    '<html><body>',
                ),
                ot.close()),
              (r = ot.createElement(e)),
              ot.body.appendChild(r),
              (o = i.css(r, 'display')),
              t.removeChild(rt)),
            (at[e] = o);
        }
        return at[e];
      }
      i.fn.extend({
        show: function (e, t, n) {
          var r, o;
          if (e || 0 === e) return this.animate(pt('show', 3), e, t, n);
          for (var s = 0, a = this.length; s < a; s++)
            (r = this[s]).style &&
              ((o = r.style.display),
              i._data(r, 'olddisplay') ||
                'none' !== o ||
                (o = r.style.display = ''),
              (('' === o && 'none' === i.css(r, 'display')) ||
                !i.contains(r.ownerDocument.documentElement, r)) &&
                i._data(r, 'olddisplay', ht(r.nodeName)));
          for (s = 0; s < a; s++)
            (r = this[s]).style &&
              (('' !== (o = r.style.display) && 'none' !== o) ||
                (r.style.display = i._data(r, 'olddisplay') || ''));
          return this;
        },
        hide: function (e, t, n) {
          if (e || 0 === e) return this.animate(pt('hide', 3), e, t, n);
          for (var r, o, s = 0, a = this.length; s < a; s++)
            (r = this[s]).style &&
              ('none' === (o = i.css(r, 'display')) ||
                i._data(r, 'olddisplay') ||
                i._data(r, 'olddisplay', o));
          for (s = 0; s < a; s++)
            this[s].style && (this[s].style.display = 'none');
          return this;
        },
        _toggle: i.fn.toggle,
        toggle: function (e, t, n) {
          var r = 'boolean' == typeof e;
          return (
            i.isFunction(e) && i.isFunction(t)
              ? this._toggle.apply(this, arguments)
              : null == e || r
              ? this.each(function () {
                  var t = r ? e : i(this).is(':hidden');
                  i(this)[t ? 'show' : 'hide']();
                })
              : this.animate(pt('toggle', 3), e, t, n),
            this
          );
        },
        fadeTo: function (e, t, n, r) {
          return this.filter(':hidden')
            .css('opacity', 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, r);
        },
        animate: function (e, t, n, r) {
          var o = i.speed(t, n, r);
          if (i.isEmptyObject(e)) return this.each(o.complete, [!1]);
          function s() {
            !1 === o.queue && i._mark(this);
            var t,
              n,
              r,
              s,
              a,
              u,
              c,
              l,
              f,
              d,
              p,
              h = i.extend({}, o),
              g = 1 === this.nodeType,
              v = g && i(this).is(':hidden');
            for (r in ((h.animatedProperties = {}), e))
              if (
                (r !== (t = i.camelCase(r)) && ((e[t] = e[r]), delete e[r]),
                (a = i.cssHooks[t]) && 'expand' in a)
              )
                for (r in ((u = a.expand(e[t])), delete e[t], u))
                  r in e || (e[r] = u[r]);
            for (t in e) {
              if (
                ((n = e[t]),
                i.isArray(n)
                  ? ((h.animatedProperties[t] = n[1]), (n = e[t] = n[0]))
                  : (h.animatedProperties[t] =
                      (h.specialEasing && h.specialEasing[t]) ||
                      h.easing ||
                      'swing'),
                ('hide' === n && v) || ('show' === n && !v))
              )
                return h.complete.call(this);
              !g ||
                ('height' !== t && 'width' !== t) ||
                ((h.overflow = [
                  this.style.overflow,
                  this.style.overflowX,
                  this.style.overflowY,
                ]),
                'inline' === i.css(this, 'display') &&
                  'none' === i.css(this, 'float') &&
                  (i.support.inlineBlockNeedsLayout &&
                  'inline' !== ht(this.nodeName)
                    ? (this.style.zoom = 1)
                    : (this.style.display = 'inline-block')));
            }
            for (r in (null != h.overflow && (this.style.overflow = 'hidden'),
            e))
              (s = new i.fx(this, h, r)),
                (n = e[r]),
                ut.test(n)
                  ? (p =
                      i._data(this, 'toggle' + r) ||
                      ('toggle' === n ? (v ? 'show' : 'hide') : 0))
                    ? (i._data(
                        this,
                        'toggle' + r,
                        'show' === p ? 'hide' : 'show',
                      ),
                      s[p]())
                    : s[n]()
                  : ((c = ct.exec(n)),
                    (l = s.cur()),
                    c
                      ? ((f = parseFloat(c[2])),
                        'px' !== (d = c[3] || (i.cssNumber[r] ? '' : 'px')) &&
                          (i.style(this, r, (f || 1) + d),
                          (l = ((f || 1) / s.cur()) * l),
                          i.style(this, r, l + d)),
                        c[1] && (f = ('-=' === c[1] ? -1 : 1) * f + l),
                        s.custom(l, f, d))
                      : s.custom(l, n, ''));
            return !0;
          }
          return (
            (e = i.extend({}, e)),
            !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
          );
        },
        stop: function (e, t, n) {
          return (
            'string' != typeof e && ((n = t), (t = e), (e = void 0)),
            t && !1 !== e && this.queue(e || 'fx', []),
            this.each(function () {
              var t,
                r = !1,
                o = i.timers,
                s = i._data(this);
              function a(e, t, r) {
                var o = t[r];
                i.removeData(e, r, !0), o.stop(n);
              }
              if ((n || i._unmark(!0, this), null == e))
                for (t in s)
                  s[t] &&
                    s[t].stop &&
                    t.indexOf('.run') === t.length - 4 &&
                    a(this, s, t);
              else s[(t = e + '.run')] && s[t].stop && a(this, s, t);
              for (t = o.length; t--; )
                o[t].elem !== this ||
                  (null != e && o[t].queue !== e) ||
                  (n ? o[t](!0) : o[t].saveState(), (r = !0), o.splice(t, 1));
              (n && r) || i.dequeue(this, e);
            })
          );
        },
      }),
        i.each(
          {
            slideDown: pt('show', 1),
            slideUp: pt('hide', 1),
            slideToggle: pt('toggle', 1),
            fadeIn: { opacity: 'show' },
            fadeOut: { opacity: 'hide' },
            fadeToggle: { opacity: 'toggle' },
          },
          function (e, t) {
            i.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          },
        ),
        i.extend({
          speed: function (e, t, n) {
            var r =
              e && 'object' == typeof e
                ? i.extend({}, e)
                : {
                    complete: n || (!n && t) || (i.isFunction(e) && e),
                    duration: e,
                    easing: (n && t) || (t && !i.isFunction(t) && t),
                  };
            return (
              (r.duration = i.fx.off
                ? 0
                : 'number' == typeof r.duration
                ? r.duration
                : r.duration in i.fx.speeds
                ? i.fx.speeds[r.duration]
                : i.fx.speeds._default),
              (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
              (r.old = r.complete),
              (r.complete = function (e) {
                i.isFunction(r.old) && r.old.call(this),
                  r.queue
                    ? i.dequeue(this, r.queue)
                    : !1 !== e && i._unmark(this);
              }),
              r
            );
          },
          easing: {
            linear: function (e) {
              return e;
            },
            swing: function (e) {
              return -Math.cos(e * Math.PI) / 2 + 0.5;
            },
          },
          timers: [],
          fx: function (e, t, n) {
            (this.options = t),
              (this.elem = e),
              (this.prop = n),
              (t.orig = t.orig || {});
          },
        }),
        (i.fx.prototype = {
          update: function () {
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
              (i.fx.step[this.prop] || i.fx.step._default)(this);
          },
          cur: function () {
            if (
              null != this.elem[this.prop] &&
              (!this.elem.style || null == this.elem.style[this.prop])
            )
              return this.elem[this.prop];
            var e,
              t = i.css(this.elem, this.prop);
            return isNaN((e = parseFloat(t))) ? (t && 'auto' !== t ? t : 0) : e;
          },
          custom: function (e, t, n) {
            var r = this,
              o = i.fx;
            function s(e) {
              return r.step(e);
            }
            (this.startTime = st || ft()),
              (this.end = t),
              (this.now = this.start = e),
              (this.pos = this.state = 0),
              (this.unit =
                n || this.unit || (i.cssNumber[this.prop] ? '' : 'px')),
              (s.queue = this.options.queue),
              (s.elem = this.elem),
              (s.saveState = function () {
                void 0 === i._data(r.elem, 'fxshow' + r.prop) &&
                  (r.options.hide
                    ? i._data(r.elem, 'fxshow' + r.prop, r.start)
                    : r.options.show &&
                      i._data(r.elem, 'fxshow' + r.prop, r.end));
              }),
              s() &&
                i.timers.push(s) &&
                !it &&
                (it = setInterval(o.tick, o.interval));
          },
          show: function () {
            var e = i._data(this.elem, 'fxshow' + this.prop);
            (this.options.orig[this.prop] = e || i.style(this.elem, this.prop)),
              (this.options.show = !0),
              void 0 !== e
                ? this.custom(this.cur(), e)
                : this.custom(
                    'width' === this.prop || 'height' === this.prop ? 1 : 0,
                    this.cur(),
                  ),
              i(this.elem).show();
          },
          hide: function () {
            (this.options.orig[this.prop] =
              i._data(this.elem, 'fxshow' + this.prop) ||
              i.style(this.elem, this.prop)),
              (this.options.hide = !0),
              this.custom(this.cur(), 0);
          },
          step: function (e) {
            var t,
              n,
              r,
              o = st || ft(),
              s = !0,
              a = this.elem,
              u = this.options;
            if (e || o >= u.duration + this.startTime) {
              for (t in ((this.now = this.end),
              (this.pos = this.state = 1),
              this.update(),
              (u.animatedProperties[this.prop] = !0),
              u.animatedProperties))
                !0 !== u.animatedProperties[t] && (s = !1);
              if (s) {
                if (
                  (null == u.overflow ||
                    i.support.shrinkWrapBlocks ||
                    i.each(['', 'X', 'Y'], function (e, t) {
                      a.style['overflow' + t] = u.overflow[e];
                    }),
                  u.hide && i(a).hide(),
                  u.hide || u.show)
                )
                  for (t in u.animatedProperties)
                    i.style(a, t, u.orig[t]),
                      i.removeData(a, 'fxshow' + t, !0),
                      i.removeData(a, 'toggle' + t, !0);
                (r = u.complete) && ((u.complete = !1), r.call(a));
              }
              return !1;
            }
            return (
              u.duration == 1 / 0
                ? (this.now = o)
                : ((n = o - this.startTime),
                  (this.state = n / u.duration),
                  (this.pos = i.easing[u.animatedProperties[this.prop]](
                    this.state,
                    n,
                    0,
                    1,
                    u.duration,
                  )),
                  (this.now = this.start + (this.end - this.start) * this.pos)),
              this.update(),
              !0
            );
          },
        }),
        i.extend(i.fx, {
          tick: function () {
            for (var e, t = i.timers, n = 0; n < t.length; n++)
              (e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || i.fx.stop();
          },
          interval: 13,
          stop: function () {
            clearInterval(it), (it = null);
          },
          speeds: { slow: 600, fast: 200, _default: 400 },
          step: {
            opacity: function (e) {
              i.style(e.elem, 'opacity', e.now);
            },
            _default: function (e) {
              e.elem.style && null != e.elem.style[e.prop]
                ? (e.elem.style[e.prop] = e.now + e.unit)
                : (e.elem[e.prop] = e.now);
            },
          },
        }),
        i.each(lt.concat.apply([], lt), function (e, t) {
          t.indexOf('margin') &&
            (i.fx.step[t] = function (e) {
              i.style(e.elem, t, Math.max(0, e.now) + e.unit);
            });
        }),
        i.expr &&
          i.expr.filters &&
          (i.expr.filters.animated = function (e) {
            return i.grep(i.timers, function (t) {
              return e === t.elem;
            }).length;
          });
      var gt,
        vt = /^t(?:able|d|h)$/i,
        mt = /^(?:body|html)$/i;
      function yt(e) {
        return i.isWindow(e)
          ? e
          : 9 === e.nodeType && (e.defaultView || e.parentWindow);
      }
      (gt =
        'getBoundingClientRect' in n.documentElement
          ? function (e, t, n, r) {
              try {
                r = e.getBoundingClientRect();
              } catch (bt) {}
              if (!r || !i.contains(n, e))
                return r ? { top: r.top, left: r.left } : { top: 0, left: 0 };
              var o = t.body,
                s = yt(t),
                a = n.clientTop || o.clientTop || 0,
                u = n.clientLeft || o.clientLeft || 0,
                c =
                  s.pageYOffset ||
                  (i.support.boxModel && n.scrollTop) ||
                  o.scrollTop,
                l =
                  s.pageXOffset ||
                  (i.support.boxModel && n.scrollLeft) ||
                  o.scrollLeft;
              return { top: r.top + c - a, left: r.left + l - u };
            }
          : function (e, t, n) {
              for (
                var r,
                  o = e.offsetParent,
                  s = t.body,
                  a = t.defaultView,
                  u = a ? a.getComputedStyle(e, null) : e.currentStyle,
                  c = e.offsetTop,
                  l = e.offsetLeft;
                (e = e.parentNode) &&
                e !== s &&
                e !== n &&
                (!i.support.fixedPosition || 'fixed' !== u.position);

              )
                (r = a ? a.getComputedStyle(e, null) : e.currentStyle),
                  (c -= e.scrollTop),
                  (l -= e.scrollLeft),
                  e === o &&
                    ((c += e.offsetTop),
                    (l += e.offsetLeft),
                    !i.support.doesNotAddBorder ||
                      (i.support.doesAddBorderForTableAndCells &&
                        vt.test(e.nodeName)) ||
                      ((c += parseFloat(r.borderTopWidth) || 0),
                      (l += parseFloat(r.borderLeftWidth) || 0)),
                    o,
                    (o = e.offsetParent)),
                  i.support.subtractsBorderForOverflowNotVisible &&
                    'visible' !== r.overflow &&
                    ((c += parseFloat(r.borderTopWidth) || 0),
                    (l += parseFloat(r.borderLeftWidth) || 0)),
                  (u = r);
              return (
                ('relative' !== u.position && 'static' !== u.position) ||
                  ((c += s.offsetTop), (l += s.offsetLeft)),
                i.support.fixedPosition &&
                  'fixed' === u.position &&
                  ((c += Math.max(n.scrollTop, s.scrollTop)),
                  (l += Math.max(n.scrollLeft, s.scrollLeft))),
                { top: c, left: l }
              );
            }),
        (i.fn.offset = function (e) {
          if (arguments.length)
            return void 0 === e
              ? this
              : this.each(function (t) {
                  i.offset.setOffset(this, e, t);
                });
          var t = this[0],
            n = t && t.ownerDocument;
          return n
            ? t === n.body
              ? i.offset.bodyOffset(t)
              : gt(t, n, n.documentElement)
            : null;
        }),
        (i.offset = {
          bodyOffset: function (e) {
            var t = e.offsetTop,
              n = e.offsetLeft;
            return (
              i.support.doesNotIncludeMarginInBodyOffset &&
                ((t += parseFloat(i.css(e, 'marginTop')) || 0),
                (n += parseFloat(i.css(e, 'marginLeft')) || 0)),
              { top: t, left: n }
            );
          },
          setOffset: function (e, t, n) {
            var r = i.css(e, 'position');
            'static' === r && (e.style.position = 'relative');
            var o,
              s,
              a = i(e),
              u = a.offset(),
              c = i.css(e, 'top'),
              l = i.css(e, 'left'),
              f = {},
              d = {};
            ('absolute' === r || 'fixed' === r) &&
            i.inArray('auto', [c, l]) > -1
              ? ((o = (d = a.position()).top), (s = d.left))
              : ((o = parseFloat(c) || 0), (s = parseFloat(l) || 0)),
              i.isFunction(t) && (t = t.call(e, n, u)),
              null != t.top && (f.top = t.top - u.top + o),
              null != t.left && (f.left = t.left - u.left + s),
              'using' in t ? t.using.call(e, f) : a.css(f);
          },
        }),
        i.fn.extend({
          position: function () {
            if (!this[0]) return null;
            var e = this[0],
              t = this.offsetParent(),
              n = this.offset(),
              r = mt.test(t[0].nodeName) ? { top: 0, left: 0 } : t.offset();
            return (
              (n.top -= parseFloat(i.css(e, 'marginTop')) || 0),
              (n.left -= parseFloat(i.css(e, 'marginLeft')) || 0),
              (r.top += parseFloat(i.css(t[0], 'borderTopWidth')) || 0),
              (r.left += parseFloat(i.css(t[0], 'borderLeftWidth')) || 0),
              { top: n.top - r.top, left: n.left - r.left }
            );
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent || n.body;
                e && !mt.test(e.nodeName) && 'static' === i.css(e, 'position');

              )
                e = e.offsetParent;
              return e;
            });
          },
        }),
        i.each(
          { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
          function (e, t) {
            var n = /Y/.test(t);
            i.fn[e] = function (r) {
              return i.access(
                this,
                function (e, r, o) {
                  var s = yt(e);
                  if (void 0 === o)
                    return s
                      ? t in s
                        ? s[t]
                        : (i.support.boxModel &&
                            s.document.documentElement[r]) ||
                          s.document.body[r]
                      : e[r];
                  s
                    ? s.scrollTo(
                        n ? i(s).scrollLeft() : o,
                        n ? o : i(s).scrollTop(),
                      )
                    : (e[r] = o);
                },
                e,
                r,
                arguments.length,
                null,
              );
            };
          },
        ),
        i.each({ Height: 'height', Width: 'width' }, function (e, t) {
          var n = 'client' + e,
            r = 'scroll' + e,
            o = 'offset' + e;
          (i.fn['inner' + e] = function () {
            var e = this[0];
            return e
              ? e.style
                ? parseFloat(i.css(e, t, 'padding'))
                : this[t]()
              : null;
          }),
            (i.fn['outer' + e] = function (e) {
              var n = this[0];
              return n
                ? n.style
                  ? parseFloat(i.css(n, t, e ? 'margin' : 'border'))
                  : this[t]()
                : null;
            }),
            (i.fn[t] = function (e) {
              return i.access(
                this,
                function (e, t, s) {
                  var a, u, c, l;
                  return i.isWindow(e)
                    ? ((u = (a = e.document).documentElement[n]),
                      (i.support.boxModel && u) || (a.body && a.body[n]) || u)
                    : 9 === e.nodeType
                    ? (a = e.documentElement)[n] >= a[r]
                      ? a[n]
                      : Math.max(e.body[r], a[r], e.body[o], a[o])
                    : void 0 === s
                    ? ((c = i.css(e, t)),
                      (l = parseFloat(c)),
                      i.isNumeric(l) ? l : c)
                    : void i(e).css(t, s);
                },
                t,
                e,
                arguments.length,
                null,
              );
            });
        }),
        (e.exports = window.jQuery = window.$ = i);
    },
    PAQY: function (e, t, n) {
      var r = n('QqfT')('meta'),
        o = n('zY5Q'),
        i = n('isQe'),
        s = n('gPPl').f,
        a = 0,
        u =
          Object.isExtensible ||
          function () {
            return !0;
          },
        c = !n('u52/')(function () {
          return u(Object.preventExtensions({}));
        }),
        l = function (e) {
          s(e, r, { value: { i: 'O' + ++a, w: {} } });
        },
        f = (e.exports = {
          KEY: r,
          NEED: !1,
          fastKey: function (e, t) {
            if (!o(e))
              return 'symbol' == typeof e
                ? e
                : ('string' == typeof e ? 'S' : 'P') + e;
            if (!i(e, r)) {
              if (!u(e)) return 'F';
              if (!t) return 'E';
              l(e);
            }
            return e[r].i;
          },
          getWeak: function (e, t) {
            if (!i(e, r)) {
              if (!u(e)) return !0;
              if (!t) return !1;
              l(e);
            }
            return e[r].w;
          },
          onFreeze: function (e) {
            return c && f.NEED && u(e) && !i(e, r) && l(e), e;
          },
        });
    },
    PPId: function (e, t) {
      t.f = Object.getOwnPropertySymbols;
    },
    QYoC: function (e, t, n) {
      'use strict';
      var r;
      (r = jQuery).fn.contextMenu = function (e) {
        r(this).bind('contextmenu', function (t) {
          return e(t), !1;
        });
      };
    },
    QfXN: function (e, t) {
      !(function () {
        function e(e) {
          if (!Uint32Array.prototype.hasOwnProperty(e)) {
            var t = Array.prototype[e];
            (Int8Array.prototype[e] = t),
              (Uint8Array.prototype[e] = t),
              (Uint8ClampedArray.prototype[e] = t),
              (Int16Array.prototype[e] = t),
              (Uint16Array.prototype[e] = t),
              (Int32Array.prototype[e] = t),
              (Uint32Array.prototype[e] = t),
              (Float32Array.prototype[e] = t),
              (Float64Array.prototype[e] = t);
          }
        }
        e('reduce'), e('reduceRight'), e('fill'), e('join');
      })();
    },
    QqfT: function (e, t) {
      var n = 0,
        r = Math.random();
      e.exports = function (e) {
        return 'Symbol('.concat(
          void 0 === e ? '' : e,
          ')_',
          (++n + r).toString(36),
        );
      };
    },
    Qwlt: function (e, t, n) {
      var r, o, i;
      (o = [n('P5fv')]),
        void 0 ===
          (i =
            'function' ==
            typeof (r = function (e) {
              return (e.ui = e.ui || {}), (e.ui.version = '1.12.1');
            })
              ? r.apply(t, o)
              : r) || (e.exports = i);
    },
    R99l: function (e, t, n) {
      'use strict';
      var r = n('Vrag'),
        o = n('yUtn'),
        i = n('AuAe'),
        s = {};
      n('khJW')(s, n('IXQl')('iterator'), function () {
        return this;
      }),
        (e.exports = function (e, t, n) {
          (e.prototype = r(s, { next: o(1, n) })), i(e, t + ' Iterator');
        });
    },
    RWYM: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.get = function () {
          return {
            debug: !1,
            initImmediate: !0,
            ns: ['translation'],
            defaultNS: ['translation'],
            fallbackLng: ['dev'],
            fallbackNS: !1,
            whitelist: !1,
            nonExplicitWhitelist: !1,
            load: 'all',
            preload: !1,
            keySeparator: '.',
            nsSeparator: ':',
            pluralSeparator: '_',
            contextSeparator: '_',
            saveMissing: !1,
            saveMissingTo: 'fallback',
            missingKeyHandler: !1,
            postProcess: !1,
            returnNull: !0,
            returnEmptyString: !0,
            returnObjects: !1,
            joinArrays: !1,
            returnedObjectHandler: function () {},
            parseMissingKeyHandler: !1,
            appendNamespaceToMissingKey: !1,
            overloadTranslationOptionHandler: function (e) {
              return { defaultValue: e[1] };
            },
            interpolation: {
              escapeValue: !0,
              format: function (e, t, n) {
                return e;
              },
              prefix: '{{',
              suffix: '}}',
              formatSeparator: ',',
              unescapePrefix: '-',
              nestingPrefix: '$t(',
              nestingSuffix: ')',
              defaultVariables: void 0,
            },
          };
        }),
        (t.transformOptions = function (e) {
          'string' == typeof e.ns && (e.ns = [e.ns]);
          'string' == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]);
          'string' == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]);
          e.whitelist &&
            e.whitelist.indexOf('cimode') < 0 &&
            e.whitelist.push('cimode');
          return e;
        });
    },
    SYQx: function (e, t, n) {
      var r = n('gPPl'),
        o = n('9TFj'),
        i = n('xjCr');
      e.exports = n('nULH')
        ? Object.defineProperties
        : function (e, t) {
            o(e);
            for (var n, s = i(t), a = s.length, u = 0; a > u; )
              r.f(e, (n = s[u++]), t[n]);
            return e;
          };
    },
    SwRI: function (e, t) {
      e.exports = !1;
    },
    T0pI: function (e, t, n) {
      var r = n('KGgr').parseInt,
        o = n('W+In').trim,
        i = n('YqzG'),
        s = /^[-+]?0[xX]/;
      e.exports =
        8 !== r(i + '08') || 22 !== r(i + '0x16')
          ? function (e, t) {
              var n = o(String(e), 3);
              return r(n, t >>> 0 || (s.test(n) ? 16 : 10));
            }
          : r;
    },
    TnYX: function (e, t) {
      e.exports = function (e) {
        try {
          return { e: !1, v: e() };
        } catch (t) {
          return { e: !0, v: t };
        }
      };
    },
    UyYM: function (e, t, n) {
      'use strict';
      var r = n('1Vm/');
      function o(e) {
        var t, n;
        (this.promise = new e(function (e, r) {
          if (void 0 !== t || void 0 !== n)
            throw TypeError('Bad Promise constructor');
          (t = e), (n = r);
        })),
          (this.resolve = r(t)),
          (this.reject = r(n));
      }
      e.exports.f = function (e) {
        return new o(e);
      };
    },
    V3uq: function (e, t) {
      e.exports = {};
    },
    'VH+M': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o =
          ((function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            t.default = e;
          })(n('lFip')),
          i(n('C1QN')));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function a(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function u(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t,
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (function (e, t) {
                  for (
                    var n = Object.getOwnPropertyNames(t), r = 0;
                    r < n.length;
                    r++
                  ) {
                    var o = n[r],
                      i = Object.getOwnPropertyDescriptor(t, o);
                    i &&
                      i.configurable &&
                      void 0 === e[o] &&
                      Object.defineProperty(e, o, i);
                  }
                })(e, t));
      }
      var c = (function (e) {
        function t(n, r, i) {
          var u =
            arguments.length <= 3 || void 0 === arguments[3]
              ? {}
              : arguments[3];
          s(this, t);
          var c = a(this, e.call(this));
          return (
            (c.cache = n),
            (c.store = r),
            (c.services = i),
            (c.options = u),
            (c.logger = o.default.create('cacheConnector')),
            c.cache && c.cache.init && c.cache.init(i, u.cache, u),
            c
          );
        }
        return (
          u(t, e),
          (t.prototype.load = function (e, t, n) {
            var o = this;
            if (!this.cache) return n && n();
            var i = r({}, this.cache.options, this.options.cache);
            'string' == typeof e &&
              (e = this.services.languageUtils.toResolveHierarchy(e)),
              'string' == typeof t && (t = [t]),
              i.enabled
                ? this.cache.load(e, function (t, r) {
                    if (
                      (t &&
                        o.logger.error(
                          'loading languages ' +
                            e.join(', ') +
                            ' from cache failed',
                          t,
                        ),
                      r)
                    )
                      for (var i in r)
                        for (var s in r[i])
                          if ('i18nStamp' !== s) {
                            var a = r[i][s];
                            a && o.store.addResourceBundle(i, s, a);
                          }
                    n && n();
                  })
                : n && n();
          }),
          (t.prototype.save = function () {
            this.cache &&
              this.options.cache &&
              this.options.cache.enabled &&
              this.cache.save(this.store.data);
          }),
          t
        );
      })(i(n('Xs5p')).default);
      t.default = c;
    },
    VgLE: function (e, t, n) {
      var r = n('/B3w'),
        o = Math.max,
        i = Math.min;
      e.exports = function (e, t) {
        return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t);
      };
    },
    Vrag: function (e, t, n) {
      var r = n('9TFj'),
        o = n('SYQx'),
        i = n('IbiK'),
        s = n('pND+')('IE_PROTO'),
        a = function () {},
        u = function () {
          var e,
            t = n('9S7S')('iframe'),
            r = i.length;
          for (
            t.style.display = 'none',
              n('OpLF').appendChild(t),
              t.src = 'javascript:',
              (e = t.contentWindow.document).open(),
              e.write('<script>document.F=Object</script>'),
              e.close(),
              u = e.F;
            r--;

          )
            delete u.prototype[i[r]];
          return u();
        };
      e.exports =
        Object.create ||
        function (e, t) {
          var n;
          return (
            null !== e
              ? ((a.prototype = r(e)),
                (n = new a()),
                (a.prototype = null),
                (n[s] = e))
              : (n = u()),
            void 0 === t ? n : o(n, t)
          );
        };
    },
    'W+In': function (e, t, n) {
      var r = n('vVR7'),
        o = n('H46L'),
        i = n('u52/'),
        s = n('YqzG'),
        a = '[' + s + ']',
        u = RegExp('^' + a + a + '*'),
        c = RegExp(a + a + '*$'),
        l = function (e, t, n) {
          var o = {},
            a = i(function () {
              return !!s[e]() || '​' != '​'[e]();
            }),
            u = (o[e] = a ? t(f) : s[e]);
          n && (o[n] = u), r(r.P + r.F * a, 'String', o);
        },
        f = (l.trim = function (e, t) {
          return (
            (e = String(o(e))),
            1 & t && (e = e.replace(u, '')),
            2 & t && (e = e.replace(c, '')),
            e
          );
        });
      e.exports = l;
    },
    WJeB: function (e, t, n) {
      var r = n('isQe'),
        o = n('6Ngl'),
        i = n('WnSb')(!1),
        s = n('pND+')('IE_PROTO');
      e.exports = function (e, t) {
        var n,
          a = o(e),
          u = 0,
          c = [];
        for (n in a) n != s && r(a, n) && c.push(n);
        for (; t.length > u; ) r(a, (n = t[u++])) && (~i(c, n) || c.push(n));
        return c;
      };
    },
    WnSb: function (e, t, n) {
      var r = n('6Ngl'),
        o = n('bSmq'),
        i = n('VgLE');
      e.exports = function (e) {
        return function (t, n, s) {
          var a,
            u = r(t),
            c = o(u.length),
            l = i(s, c);
          if (e && n != n) {
            for (; c > l; ) if ((a = u[l++]) != a) return !0;
          } else
            for (; c > l; l++)
              if ((e || l in u) && u[l] === n) return e || l || 0;
          return !e && -1;
        };
      };
    },
    XDiO: function (e, t, n) {
      var r = n('vVR7');
      r(r.S + r.F, 'Object', { assign: n('8ZkX') });
    },
    XSq2: function (e, t, n) {
      var r = n('H46L');
      e.exports = function (e) {
        return Object(r(e));
      };
    },
    Xs5p: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.observers = {});
        }
        return (
          (e.prototype.on = function (e, t) {
            var n = this;
            e.split(' ').forEach(function (e) {
              (n.observers[e] = n.observers[e] || []), n.observers[e].push(t);
            });
          }),
          (e.prototype.off = function (e, t) {
            var n = this;
            this.observers[e] &&
              this.observers[e].forEach(function () {
                if (t) {
                  var r = n.observers[e].indexOf(t);
                  r > -1 && n.observers[e].splice(r, 1);
                } else delete n.observers[e];
              });
          }),
          (e.prototype.emit = function (e) {
            for (
              var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            this.observers[e] &&
              this.observers[e].forEach(function (e) {
                e.apply(void 0, n);
              }),
              this.observers['*'] &&
                this.observers['*'].forEach(function (t) {
                  var r;
                  t.apply(t, (r = [e]).concat.apply(r, n));
                });
          }),
          e
        );
      })();
      t.default = r;
    },
    YFKU: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = window;
      function o(e) {
        window.t = e;
      }
      function i(e) {
        r.$ || (r.$ = {}), (r.$.t = e);
      }
      var s = function (e, t) {
        return e;
      };
      o(s), i(s);
      var a,
        u = n('jYDI');
      n.d(t, 't', function () {
        return p;
      });
      var c = s;
      if (!window.__tradingviewI18nextInited) {
        var l = window.language || null,
          f = h(l);
        if (
          ((l && f) ||
            (console.error('No translation data'), (l = 'en'), (f = h('en'))),
          l && f)
        ) {
          var d = {
            interpolation: { prefix: '__', suffix: '__' },
            keySeparator: ':::',
            lng: l,
            nsSeparator: ':::',
            resources: ((a = {}), (a[l] = { translation: f }), a),
          };
          u.init(d), o((c = u.t.bind(u))), i(c);
        }
        window.__tradingviewI18nextInited = !0;
      }
      function p(e, t) {
        return c(e, t);
      }
      function h(e) {
        return (e && (window._tv_languages || {})[e]) || null;
      }
    },
    'YN/q': function (e, t, n) {
      var r = n('zY5Q');
      e.exports = function (e, t) {
        if (!r(e)) return e;
        var n, o;
        if (t && 'function' == typeof (n = e.toString) && !r((o = n.call(e))))
          return o;
        if ('function' == typeof (n = e.valueOf) && !r((o = n.call(e))))
          return o;
        if (!t && 'function' == typeof (n = e.toString) && !r((o = n.call(e))))
          return o;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    YRoQ: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol
                  ? 'symbol'
                  : typeof e;
              },
        i = f(n('C1QN')),
        s = f(n('Xs5p')),
        a = f(n('pbwk')),
        u = l(n('B1JA')),
        c = l(n('lFip'));
      function l(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function d(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function p(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function h(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t,
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (function (e, t) {
                  for (
                    var n = Object.getOwnPropertyNames(t), r = 0;
                    r < n.length;
                    r++
                  ) {
                    var o = n[r],
                      i = Object.getOwnPropertyDescriptor(t, o);
                    i &&
                      i.configurable &&
                      void 0 === e[o] &&
                      Object.defineProperty(e, o, i);
                  }
                })(e, t));
      }
      var g = (function (e) {
        function t(n) {
          var r =
            arguments.length <= 1 || void 0 === arguments[1]
              ? {}
              : arguments[1];
          d(this, t);
          var o = p(this, e.call(this));
          return (
            c.copy(
              [
                'resourceStore',
                'languageUtils',
                'pluralResolver',
                'interpolator',
                'backendConnector',
              ],
              n,
              o,
            ),
            (o.options = r),
            (o.logger = i.default.create('translator')),
            o
          );
        }
        return (
          h(t, e),
          (t.prototype.changeLanguage = function (e) {
            e && (this.language = e);
          }),
          (t.prototype.exists = function (e) {
            var t =
              arguments.length <= 1 || void 0 === arguments[1]
                ? { interpolation: {} }
                : arguments[1];
            return (
              'v1' === this.options.compatibilityAPI &&
                (t = u.convertTOptions(t)),
              void 0 !== this.resolve(e, t)
            );
          }),
          (t.prototype.extractFromKey = function (e, t) {
            var n = t.nsSeparator || this.options.nsSeparator;
            void 0 === n && (n = ':');
            var r = t.ns || this.options.defaultNS;
            if (n && e.indexOf(n) > -1) {
              var o = e.split(n);
              (r = o[0]), (e = o[1]);
            }
            return 'string' == typeof r && (r = [r]), { key: e, namespaces: r };
          }),
          (t.prototype.translate = function (e) {
            var t =
              arguments.length <= 1 || void 0 === arguments[1]
                ? {}
                : arguments[1];
            if (
              ('object' !== (void 0 === t ? 'undefined' : o(t))
                ? (t = this.options.overloadTranslationOptionHandler(arguments))
                : 'v1' === this.options.compatibilityAPI &&
                  (t = u.convertTOptions(t)),
              null == e || '' === e)
            )
              return '';
            'number' == typeof e && (e = String(e)),
              'string' == typeof e && (e = [e]);
            var n = t.lng || this.language;
            if (n && 'cimode' === n.toLowerCase()) return e[e.length - 1];
            var i = t.keySeparator || this.options.keySeparator || '.',
              s = this.extractFromKey(e[e.length - 1], t),
              a = s.key,
              c = s.namespaces,
              l = c[c.length - 1],
              f = this.resolve(e, t),
              d = Object.prototype.toString.apply(f),
              p = ['[object Number]', '[object Function]', '[object RegExp]'],
              h =
                void 0 !== t.joinArrays
                  ? t.joinArrays
                  : this.options.joinArrays;
            if (
              f &&
              'string' != typeof f &&
              p.indexOf(d) < 0 &&
              (!h || '[object Array]' !== d)
            ) {
              if (!t.returnObjects && !this.options.returnObjects)
                return (
                  this.logger.warn(
                    'accessing an object - but returnObjects options is not enabled!',
                  ),
                  this.options.returnedObjectHandler
                    ? this.options.returnedObjectHandler(a, f, t)
                    : "key '" +
                      a +
                      ' (' +
                      this.language +
                      ")' returned an object instead of string."
                );
              var g = '[object Array]' === d ? [] : {};
              for (var v in f)
                g[v] = this.translate(
                  '' + a + i + v,
                  r({ joinArrays: !1, ns: c }, t),
                );
              f = g;
            } else if (h && '[object Array]' === d)
              (f = f.join(h)) && (f = this.extendTranslation(f, a, t));
            else {
              var m = !1,
                y = !1;
              if (
                (this.isValidLookup(f) ||
                  void 0 === t.defaultValue ||
                  ((m = !0), (f = t.defaultValue)),
                this.isValidLookup(f) || ((y = !0), (f = a)),
                y || m)
              ) {
                this.logger.log('missingKey', n, l, a, f);
                var b = [];
                if (
                  'fallback' === this.options.saveMissingTo &&
                  this.options.fallbackLng &&
                  this.options.fallbackLng[0]
                )
                  for (var _ = 0; _ < this.options.fallbackLng.length; _++)
                    b.push(this.options.fallbackLng[_]);
                else
                  'all' === this.options.saveMissingTo
                    ? (b = this.languageUtils.toResolveHierarchy(
                        t.lng || this.language,
                      ))
                    : b.push(t.lng || this.language);
                this.options.saveMissing &&
                  (this.options.missingKeyHandler
                    ? this.options.missingKeyHandler(b, l, a, f)
                    : this.backendConnector &&
                      this.backendConnector.saveMissing &&
                      this.backendConnector.saveMissing(b, l, a, f)),
                  this.emit('missingKey', b, l, a, f);
              }
              (f = this.extendTranslation(f, a, t)),
                y &&
                  f === a &&
                  this.options.appendNamespaceToMissingKey &&
                  (f = l + ':' + a),
                y &&
                  this.options.parseMissingKeyHandler &&
                  (f = this.options.parseMissingKeyHandler(f));
            }
            return f;
          }),
          (t.prototype.extendTranslation = function (e, t, n) {
            var o = this;
            n.interpolation && this.interpolator.init(n);
            var i = n.replace && 'string' != typeof n.replace ? n.replace : n;
            this.options.interpolation.defaultVariables &&
              (i = r({}, this.options.interpolation.defaultVariables, i)),
              (e = this.interpolator.interpolate(e, i, this.language)),
              (e = this.interpolator.nest(
                e,
                function () {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return o.translate.apply(o, t);
                },
                n,
              )),
              n.interpolation && this.interpolator.reset();
            var s = n.postProcess || this.options.postProcess,
              u = 'string' == typeof s ? [s] : s;
            return (
              void 0 !== e &&
                u &&
                u.length &&
                !1 !== n.applyPostProcessor &&
                (e = a.default.handle(u, e, t, n, this)),
              e
            );
          }),
          (t.prototype.resolve = function (e) {
            var t = this,
              n =
                arguments.length <= 1 || void 0 === arguments[1]
                  ? {}
                  : arguments[1],
              r = void 0;
            return (
              'string' == typeof e && (e = [e]),
              e.forEach(function (e) {
                if (!t.isValidLookup(r)) {
                  var o = t.extractFromKey(e, n),
                    i = o.key,
                    s = o.namespaces;
                  t.options.fallbackNS && (s = s.concat(t.options.fallbackNS));
                  var a = void 0 !== n.count && 'string' != typeof n.count,
                    u =
                      void 0 !== n.context &&
                      'string' == typeof n.context &&
                      '' !== n.context,
                    c = n.lngs
                      ? n.lngs
                      : t.languageUtils.toResolveHierarchy(n.lng || t.language);
                  s.forEach(function (e) {
                    t.isValidLookup(r) ||
                      c.forEach(function (o) {
                        if (!t.isValidLookup(r)) {
                          var s = i,
                            c = [s],
                            l = void 0;
                          a && (l = t.pluralResolver.getSuffix(o, n.count)),
                            a && u && c.push(s + l),
                            u &&
                              c.push(
                                (s +=
                                  '' + t.options.contextSeparator + n.context),
                              ),
                            a && c.push((s += l));
                          for (var f = void 0; (f = c.pop()); )
                            t.isValidLookup(r) ||
                              (r = t.getResource(o, e, f, n));
                        }
                      });
                  });
                }
              }),
              r
            );
          }),
          (t.prototype.isValidLookup = function (e) {
            return !(
              void 0 === e ||
              (!this.options.returnNull && null === e) ||
              (!this.options.returnEmptyString && '' === e)
            );
          }),
          (t.prototype.getResource = function (e, t, n) {
            var r =
              arguments.length <= 3 || void 0 === arguments[3]
                ? {}
                : arguments[3];
            return this.resourceStore.getResource(e, t, n, r);
          }),
          t
        );
      })(s.default);
      t.default = g;
    },
    YhSK: function (e, t, n) {
      var r = Date.prototype,
        o = r.toString,
        i = r.getTime;
      new Date(NaN) + '' != 'Invalid Date' &&
        n('AZRH')(r, 'toString', function () {
          var e = i.call(this);
          return e == e ? o.call(this) : 'Invalid Date';
        });
    },
    YqzG: function (e, t) {
      e.exports = '\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff';
    },
    YuTi: function (e, t) {
      e.exports = function (e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function () {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, 'loaded', {
              enumerable: !0,
              get: function () {
                return e.l;
              },
            }),
            Object.defineProperty(e, 'id', {
              enumerable: !0,
              get: function () {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    a4n4: function (e, t, n) {
      'use strict';
      var r = n('vVR7'),
        o = n('WnSb')(!0);
      r(r.P, 'Array', {
        includes: function (e) {
          return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }),
        n('OlM/')('includes');
    },
    aQPA: function (e, t, n) {
      var r = n('KGgr'),
        o = n('caxj').set,
        i = r.MutationObserver || r.WebKitMutationObserver,
        s = r.process,
        a = r.Promise,
        u = 'process' == n('qKVQ')(s);
      e.exports = function () {
        var e,
          t,
          n,
          c = function () {
            var r, o;
            for (u && (r = s.domain) && r.exit(); e; ) {
              (o = e.fn), (e = e.next);
              try {
                o();
              } catch (i) {
                throw (e ? n() : (t = void 0), i);
              }
            }
            (t = void 0), r && r.enter();
          };
        if (u)
          n = function () {
            s.nextTick(c);
          };
        else if (!i || (r.navigator && r.navigator.standalone))
          if (a && a.resolve) {
            var l = a.resolve(void 0);
            n = function () {
              l.then(c);
            };
          } else
            n = function () {
              o.call(r, c);
            };
        else {
          var f = !0,
            d = document.createTextNode('');
          new i(c).observe(d, { characterData: !0 }),
            (n = function () {
              d.data = f = !f;
            });
        }
        return function (r) {
          var o = { fn: r, next: void 0 };
          t && (t.next = o), e || ((e = o), n()), (t = o);
        };
      };
    },
    bI2D: function (e, t, n) {
      'use strict';
      var r = n('vVR7'),
        o = n('lrbo'),
        i = n('bjrj'),
        s = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
      r(r.P + r.F * s, 'String', {
        padStart: function (e) {
          return o(this, e, arguments.length > 1 ? arguments[1] : void 0, !0);
        },
      });
    },
    bSmq: function (e, t, n) {
      var r = n('/B3w'),
        o = Math.min;
      e.exports = function (e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0;
      };
    },
    bZMm: function (e, t) {
      !(function (e) {
        'use strict';
        if (!e.fetch) {
          var t = 'URLSearchParams' in e,
            n = 'Symbol' in e && 'iterator' in Symbol,
            r =
              'FileReader' in e &&
              'Blob' in e &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch (e) {
                  return !1;
                }
              })(),
            o = 'FormData' in e,
            i = 'ArrayBuffer' in e;
          if (i)
            var s = [
                '[object Int8Array]',
                '[object Uint8Array]',
                '[object Uint8ClampedArray]',
                '[object Int16Array]',
                '[object Uint16Array]',
                '[object Int32Array]',
                '[object Uint32Array]',
                '[object Float32Array]',
                '[object Float64Array]',
              ],
              a = function (e) {
                return e && DataView.prototype.isPrototypeOf(e);
              },
              u =
                ArrayBuffer.isView ||
                function (e) {
                  return e && s.indexOf(Object.prototype.toString.call(e)) > -1;
                };
          (h.prototype.append = function (e, t) {
            (e = f(e)), (t = d(t));
            var n = this.map[e];
            n || ((n = []), (this.map[e] = n)), n.push(t);
          }),
            (h.prototype.delete = function (e) {
              delete this.map[f(e)];
            }),
            (h.prototype.get = function (e) {
              var t = this.map[f(e)];
              return t ? t[0] : null;
            }),
            (h.prototype.getAll = function (e) {
              return this.map[f(e)] || [];
            }),
            (h.prototype.has = function (e) {
              return this.map.hasOwnProperty(f(e));
            }),
            (h.prototype.set = function (e, t) {
              this.map[f(e)] = [d(t)];
            }),
            (h.prototype.forEach = function (e, t) {
              Object.getOwnPropertyNames(this.map).forEach(function (n) {
                this.map[n].forEach(function (r) {
                  e.call(t, r, n, this);
                }, this);
              }, this);
            }),
            (h.prototype.keys = function () {
              var e = [];
              return (
                this.forEach(function (t, n) {
                  e.push(n);
                }),
                p(e)
              );
            }),
            (h.prototype.values = function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  e.push(t);
                }),
                p(e)
              );
            }),
            (h.prototype.entries = function () {
              var e = [];
              return (
                this.forEach(function (t, n) {
                  e.push([n, t]);
                }),
                p(e)
              );
            }),
            n && (h.prototype[Symbol.iterator] = h.prototype.entries);
          var c = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
          (_.prototype.clone = function () {
            return new _(this, { body: this._bodyInit });
          }),
            b.call(_.prototype),
            b.call(x.prototype),
            (x.prototype.clone = function () {
              return new x(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new h(this.headers),
                url: this.url,
              });
            }),
            (x.error = function () {
              var e = new x(null, { status: 0, statusText: '' });
              return (e.type = 'error'), e;
            });
          var l = [301, 302, 303, 307, 308];
          (x.redirect = function (e, t) {
            if (-1 === l.indexOf(t))
              throw new RangeError('Invalid status code');
            return new x(null, { status: t, headers: { location: e } });
          }),
            (e.Headers = h),
            (e.Request = _),
            (e.Response = x),
            (e.fetch = function (e, t) {
              return new Promise(function (n, o) {
                var i = new _(e, t),
                  s = new XMLHttpRequest();
                (s.onload = function () {
                  var e,
                    t,
                    r = {
                      status: s.status,
                      statusText: s.statusText,
                      headers:
                        ((e = s.getAllResponseHeaders() || ''),
                        (t = new h()),
                        e.split('\r\n').forEach(function (e) {
                          var n = e.split(':'),
                            r = n.shift().trim();
                          if (r) {
                            var o = n.join(':').trim();
                            t.append(r, o);
                          }
                        }),
                        t),
                    };
                  r.url =
                    'responseURL' in s
                      ? s.responseURL
                      : r.headers.get('X-Request-URL');
                  var o = 'response' in s ? s.response : s.responseText;
                  n(new x(o, r));
                }),
                  (s.onerror = function () {
                    o(new TypeError('Network request failed'));
                  }),
                  (s.ontimeout = function () {
                    o(new TypeError('Network request failed'));
                  }),
                  s.open(i.method, i.url, !0),
                  'include' === i.credentials && (s.withCredentials = !0),
                  'responseType' in s && r && (s.responseType = 'blob'),
                  i.headers.forEach(function (e, t) {
                    s.setRequestHeader(t, e);
                  }),
                  s.send(void 0 === i._bodyInit ? null : i._bodyInit);
              });
            }),
            (e.fetch.polyfill = !0);
        }
        function f(e) {
          if (
            ('string' != typeof e && (e = String(e)),
            /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))
          )
            throw new TypeError('Invalid character in header field name');
          return e.toLowerCase();
        }
        function d(e) {
          return 'string' != typeof e && (e = String(e)), e;
        }
        function p(e) {
          var t = {
            next: function () {
              var t = e.shift();
              return { done: void 0 === t, value: t };
            },
          };
          return (
            n &&
              (t[Symbol.iterator] = function () {
                return t;
              }),
            t
          );
        }
        function h(e) {
          (this.map = {}),
            e instanceof h
              ? e.forEach(function (e, t) {
                  this.append(t, e);
                }, this)
              : e &&
                Object.getOwnPropertyNames(e).forEach(function (t) {
                  this.append(t, e[t]);
                }, this);
        }
        function g(e) {
          if (e.bodyUsed) return Promise.reject(new TypeError('Already read'));
          e.bodyUsed = !0;
        }
        function v(e) {
          return new Promise(function (t, n) {
            (e.onload = function () {
              t(e.result);
            }),
              (e.onerror = function () {
                n(e.error);
              });
          });
        }
        function m(e) {
          var t = new FileReader(),
            n = v(t);
          return t.readAsArrayBuffer(e), n;
        }
        function y(e) {
          if (e.slice) return e.slice(0);
          var t = new Uint8Array(e.byteLength);
          return t.set(new Uint8Array(e)), t.buffer;
        }
        function b() {
          return (
            (this.bodyUsed = !1),
            (this._initBody = function (e) {
              if (((this._bodyInit = e), e))
                if ('string' == typeof e) this._bodyText = e;
                else if (r && Blob.prototype.isPrototypeOf(e))
                  this._bodyBlob = e;
                else if (o && FormData.prototype.isPrototypeOf(e))
                  this._bodyFormData = e;
                else if (t && URLSearchParams.prototype.isPrototypeOf(e))
                  this._bodyText = e.toString();
                else if (i && r && a(e))
                  (this._bodyArrayBuffer = y(e.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer]));
                else {
                  if (!i || (!ArrayBuffer.prototype.isPrototypeOf(e) && !u(e)))
                    throw new Error('unsupported BodyInit type');
                  this._bodyArrayBuffer = y(e);
                }
              else this._bodyText = '';
              this.headers.get('content-type') ||
                ('string' == typeof e
                  ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set('content-type', this._bodyBlob.type)
                  : t &&
                    URLSearchParams.prototype.isPrototypeOf(e) &&
                    this.headers.set(
                      'content-type',
                      'application/x-www-form-urlencoded;charset=UTF-8',
                    ));
            }),
            r &&
              ((this.blob = function () {
                var e = g(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData)
                  throw new Error('could not read FormData body as blob');
                return Promise.resolve(new Blob([this._bodyText]));
              }),
              (this.arrayBuffer = function () {
                return this._bodyArrayBuffer
                  ? g(this) || Promise.resolve(this._bodyArrayBuffer)
                  : this.blob().then(m);
              })),
            (this.text = function () {
              var e,
                t,
                n,
                r = g(this);
              if (r) return r;
              if (this._bodyBlob)
                return (
                  (e = this._bodyBlob),
                  (t = new FileReader()),
                  (n = v(t)),
                  t.readAsText(e),
                  n
                );
              if (this._bodyArrayBuffer)
                return Promise.resolve(
                  (function (e) {
                    for (
                      var t = new Uint8Array(e), n = new Array(t.length), r = 0;
                      r < t.length;
                      r++
                    )
                      n[r] = String.fromCharCode(t[r]);
                    return n.join('');
                  })(this._bodyArrayBuffer),
                );
              if (this._bodyFormData)
                throw new Error('could not read FormData body as text');
              return Promise.resolve(this._bodyText);
            }),
            o &&
              (this.formData = function () {
                return this.text().then(w);
              }),
            (this.json = function () {
              return this.text().then(JSON.parse);
            }),
            this
          );
        }
        function _(e, t) {
          var n,
            r,
            o = (t = t || {}).body;
          if ('string' == typeof e) this.url = e;
          else {
            if (e.bodyUsed) throw new TypeError('Already read');
            (this.url = e.url),
              (this.credentials = e.credentials),
              t.headers || (this.headers = new h(e.headers)),
              (this.method = e.method),
              (this.mode = e.mode),
              o ||
                null == e._bodyInit ||
                ((o = e._bodyInit), (e.bodyUsed = !0));
          }
          if (
            ((this.credentials = t.credentials || this.credentials || 'omit'),
            (!t.headers && this.headers) || (this.headers = new h(t.headers)),
            (this.method =
              ((n = t.method || this.method || 'GET'),
              (r = n.toUpperCase()),
              c.indexOf(r) > -1 ? r : n)),
            (this.mode = t.mode || this.mode || null),
            (this.referrer = null),
            ('GET' === this.method || 'HEAD' === this.method) && o)
          )
            throw new TypeError('Body not allowed for GET or HEAD requests');
          this._initBody(o);
        }
        function w(e) {
          var t = new FormData();
          return (
            e
              .trim()
              .split('&')
              .forEach(function (e) {
                if (e) {
                  var n = e.split('='),
                    r = n.shift().replace(/\+/g, ' '),
                    o = n.join('=').replace(/\+/g, ' ');
                  t.append(decodeURIComponent(r), decodeURIComponent(o));
                }
              }),
            t
          );
        }
        function x(e, t) {
          t || (t = {}),
            (this.type = 'default'),
            (this.status = 'status' in t ? t.status : 200),
            (this.ok = this.status >= 200 && this.status < 300),
            (this.statusText = 'statusText' in t ? t.statusText : 'OK'),
            (this.headers = new h(t.headers)),
            (this.url = t.url || ''),
            this._initBody(e);
        }
      })('undefined' != typeof self ? self : this);
    },
    bf9a: function (e, t, n) {
      'use strict';
      var r = (window.Modernizr = (function (e, t, n) {
        function r(e) {
          g.cssText = e;
        }
        function o(e, t) {
          return typeof e === t;
        }
        function i(e, t) {
          return !!~('' + e).indexOf(t);
        }
        function s(e, t) {
          for (var r in e) {
            var o = e[r];
            if (!i(o, '-') && g[o] !== n) return 'pfx' != t || o;
          }
          return !1;
        }
        function a(e, t, r) {
          for (var i in e) {
            var s = t[e[i]];
            if (s !== n)
              return !1 === r ? e[i] : o(s, 'function') ? s.bind(r || t) : s;
          }
          return !1;
        }
        function u(e, t, n) {
          var r = e.charAt(0).toUpperCase() + e.slice(1),
            i = (e + ' ' + y.join(r + ' ') + r).split(' ');
          return o(t, 'string') || o(t, 'undefined')
            ? s(i, t)
            : a((i = (e + ' ' + b.join(r + ' ') + r).split(' ')), t, n);
        }
        var c,
          l,
          f = {},
          d = t.documentElement,
          p = 'modernizr',
          h = t.createElement(p),
          g = h.style,
          v = ' -webkit- -moz- -o- -ms- '.split(' '),
          m = 'Webkit Moz O ms',
          y = m.split(' '),
          b = m.toLowerCase().split(' '),
          _ = {},
          w = [],
          x = w.slice,
          S = function (e, n, r, o) {
            var i,
              s,
              a,
              u,
              c = t.createElement('div'),
              l = t.body,
              f = l || t.createElement('body');
            if (parseInt(r, 10))
              for (; r--; )
                ((a = t.createElement('div')).id = o ? o[r] : p + (r + 1)),
                  c.appendChild(a);
            return (
              (i = ['&#173;', '<style id="s', p, '">', e, '</style>'].join('')),
              (c.id = p),
              ((l ? c : f).innerHTML += i),
              f.appendChild(c),
              l ||
                ((f.style.background = ''),
                (f.style.overflow = 'hidden'),
                (u = d.style.overflow),
                (d.style.overflow = 'hidden'),
                d.appendChild(f)),
              (s = n(c, e)),
              l
                ? c.parentNode.removeChild(c)
                : (f.parentNode.removeChild(f), (d.style.overflow = u)),
              !!s
            );
          },
          E = (function () {
            var e = {
              select: 'input',
              change: 'input',
              submit: 'form',
              reset: 'form',
              error: 'img',
              load: 'img',
              abort: 'img',
            };
            return function (r, i) {
              i = i || t.createElement(e[r] || 'div');
              var s = (r = 'on' + r) in i;
              return (
                s ||
                  (i.setAttribute || (i = t.createElement('div')),
                  i.setAttribute &&
                    i.removeAttribute &&
                    (i.setAttribute(r, ''),
                    (s = o(i[r], 'function')),
                    o(i[r], 'undefined') || (i[r] = n),
                    i.removeAttribute(r))),
                (i = null),
                s
              );
            };
          })(),
          O = {}.hasOwnProperty;
        for (var T in ((l =
          o(O, 'undefined') || o(O.call, 'undefined')
            ? function (e, t) {
                return t in e && o(e.constructor.prototype[t], 'undefined');
              }
            : function (e, t) {
                return O.call(e, t);
              }),
        Function.prototype.bind ||
          (Function.prototype.bind = function (e) {
            var t = this;
            if ('function' != typeof t) throw new TypeError();
            var n = x.call(arguments, 1),
              r = function () {
                if (this instanceof r) {
                  var o = function () {};
                  o.prototype = t.prototype;
                  var i = new o(),
                    s = t.apply(i, n.concat(x.call(arguments)));
                  return Object(s) === s ? s : i;
                }
                return t.apply(e, n.concat(x.call(arguments)));
              };
            return r;
          }),
        (_.flexbox = function () {
          return u('flexWrap');
        }),
        (_.canvas = function () {
          var e = t.createElement('canvas');
          return !!e.getContext && !!e.getContext('2d');
        }),
        (_.canvastext = function () {
          return (
            !!f.canvas &&
            !!o(t.createElement('canvas').getContext('2d').fillText, 'function')
          );
        }),
        (_.touchevents = function () {
          var n;
          return (
            'ontouchstart' in e ||
            (e.DocumentTouch && t instanceof DocumentTouch)
              ? (n = !0)
              : S(
                  [
                    '@media (',
                    v.join('touch-enabled),('),
                    p,
                    ')',
                    '{#modernizr{top:9px;position:absolute}}',
                  ].join(''),
                  function (e) {
                    n = 9 === e.offsetTop;
                  },
                ),
            n
          );
        }),
        (_.history = function () {
          return !!e.history && !!history.pushState;
        }),
        (_.draganddrop = function () {
          var e = t.createElement('div');
          return 'draggable' in e || ('ondragstart' in e && 'ondrop' in e);
        }),
        (_.websockets = function () {
          return 'WebSocket' in e || 'MozWebSocket' in e;
        }),
        (_.multiplebgs = function () {
          return (
            r('background:url(https://),url(https://),red url(https://)'),
            /(url\s*\(.*?){3}/.test(g.background)
          );
        }),
        (_.csscolumns = function () {
          return u('columnCount');
        }),
        (_.csstransitions = function () {
          return u('transition');
        }),
        (_.localstorage = function () {
          try {
            return localStorage.setItem(p, p), localStorage.removeItem(p), !0;
          } catch (e) {
            return !1;
          }
        }),
        _))
          l(_, T) &&
            ((c = T.toLowerCase()),
            (f[c] = _[T]()),
            w.push((f[c] ? '' : 'no-') + c));
        return (
          (f.addTest = function (e, t) {
            if ('object' == typeof e)
              for (var r in e) l(e, r) && f.addTest(r, e[r]);
            else {
              if (((e = e.toLowerCase()), f[e] !== n)) return f;
              (t = 'function' == typeof t ? t() : t),
                (d.className += ' feature-' + (t ? '' : 'no-') + e),
                (f[e] = t);
            }
            return f;
          }),
          r(''),
          (h = null),
          (f._version = '2.8.3'),
          (f._prefixes = v),
          (f._domPrefixes = b),
          (f._cssomPrefixes = y),
          (f.hasEvent = E),
          (f.testProp = function (e) {
            return s([e]);
          }),
          (f.testAllProps = u),
          (f.testStyles = S),
          (d.className =
            d.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +
            ' feature-js feature-' +
            w.join(' feature-')),
          f
        );
      })(window, document));
      r.addTest(
        'mobiletouch',
        r.touchevents && 'onorientationchange' in window,
      ),
        r.addTest(
          'touch',
          r.touchevents ||
            !!navigator.maxTouchPoints ||
            !!navigator.msMaxTouchPoints,
        ),
        r.addTest('pointerevents', function () {
          var e = document.createElement('x'),
            t = document.documentElement,
            n = window.getComputedStyle,
            r = !1;
          if (!('pointerEvents' in e.style)) return !1;
          if (
            ((e.style.pointerEvents = 'auto'),
            (e.style.pointerEvents = 'x'),
            t.appendChild(e),
            n)
          ) {
            var o = n(e, '');
            r = !!o && 'auto' === o.pointerEvents;
          }
          return t.removeChild(e), !!r;
        }),
        r.addTest('flexbox', r.testAllProps('flexBasis', '1px', !0));
    },
    bjrj: function (e, t, n) {
      var r = n('KGgr').navigator;
      e.exports = (r && r.userAgent) || '';
    },
    bq52: function (e, t, n) {
      'use strict';
      var r = n('vVR7'),
        o = n('bSmq'),
        i = n('p0R9'),
        s = ''.endsWith;
      r(r.P + r.F * n('5zJJ')('endsWith'), 'String', {
        endsWith: function (e) {
          var t = i(this, e, 'endsWith'),
            n = arguments.length > 1 ? arguments[1] : void 0,
            r = o(t.length),
            a = void 0 === n ? r : Math.min(o(n), r),
            u = String(e);
          return s ? s.call(t, u, a) : t.slice(a - u.length, a) === u;
        },
      });
    },
    c2y1: function (e, t, n) {
      var r = n('zY5Q'),
        o = n('9TFj'),
        i = function (e, t) {
          if ((o(e), !r(t) && null !== t))
            throw TypeError(t + ": can't set as prototype!");
        };
      e.exports = {
        set:
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function (e, t, r) {
                try {
                  (r = n('hvJ5')(
                    Function.call,
                    n('/Hub').f(Object.prototype, '__proto__').set,
                    2,
                  ))(e, []),
                    (t = !(e instanceof Array));
                } catch (o) {
                  t = !0;
                }
                return function (e, n) {
                  return i(e, n), t ? (e.__proto__ = n) : r(e, n), e;
                };
              })({}, !1)
            : void 0),
        check: i,
      };
    },
    caxj: function (e, t, n) {
      var r,
        o,
        i,
        s = n('hvJ5'),
        a = n('7+od'),
        u = n('OpLF'),
        c = n('9S7S'),
        l = n('KGgr'),
        f = l.process,
        d = l.setImmediate,
        p = l.clearImmediate,
        h = l.MessageChannel,
        g = l.Dispatch,
        v = 0,
        m = {},
        y = function () {
          var e = +this;
          if (m.hasOwnProperty(e)) {
            var t = m[e];
            delete m[e], t();
          }
        },
        b = function (e) {
          y.call(e.data);
        };
      (d && p) ||
        ((d = function (e) {
          for (var t = [], n = 1; arguments.length > n; )
            t.push(arguments[n++]);
          return (
            (m[++v] = function () {
              a('function' == typeof e ? e : Function(e), t);
            }),
            r(v),
            v
          );
        }),
        (p = function (e) {
          delete m[e];
        }),
        'process' == n('qKVQ')(f)
          ? (r = function (e) {
              f.nextTick(s(y, e, 1));
            })
          : g && g.now
          ? (r = function (e) {
              g.now(s(y, e, 1));
            })
          : h
          ? ((i = (o = new h()).port2),
            (o.port1.onmessage = b),
            (r = s(i.postMessage, i, 1)))
          : l.addEventListener &&
            'function' == typeof postMessage &&
            !l.importScripts
          ? ((r = function (e) {
              l.postMessage(e + '', '*');
            }),
            l.addEventListener('message', b, !1))
          : (r =
              'onreadystatechange' in c('script')
                ? function (e) {
                    u.appendChild(
                      c('script'),
                    ).onreadystatechange = function () {
                      u.removeChild(this), y.call(e);
                    };
                  }
                : function (e) {
                    setTimeout(s(y, e, 1), 0);
                  })),
        (e.exports = { set: d, clear: p });
    },
    'e+pU': function (e, t) {
      !(function () {
        if ('undefined' != typeof window) {
          var e = document.createElement('a').classList;
          if (e) {
            var t = Object.getPrototypeOf(e),
              n = t.add,
              r = t.remove,
              o = t.toggle;
            e.add('a', 'b'),
              e.toggle('a', !0),
              e.contains('b') ||
                ((t.add = function (e) {
                  for (var t = 0; t < arguments.length; t++)
                    n.call(this, arguments[t]);
                }),
                (t.remove = function (e) {
                  for (var t = 0; t < arguments.length; t++)
                    r.call(this, arguments[t]);
                })),
              e.contains('a') ||
                (t.toggle = function (e, t) {
                  void 0 === t
                    ? o.call(this, e)
                    : t
                    ? n.call(this, e)
                    : r.call(this, e);
                });
          }
        }
      })();
    },
    e08H: function (e, t, n) {
      var r = n('zY5Q'),
        o = n('c2y1').set;
      e.exports = function (e, t, n) {
        var i,
          s = t.constructor;
        return (
          s !== n &&
            'function' == typeof s &&
            (i = s.prototype) !== n.prototype &&
            r(i) &&
            o &&
            o(e, i),
          e
        );
      };
    },
    eKEP: function (e, t, n) {
      t.f = n('IXQl');
    },
    elwX: function (e, t, n) {
      var r = n('vVR7');
      r(r.S, 'Number', { MAX_SAFE_INTEGER: 9007199254740991 });
    },
    esfA: function (e, t, n) {
      var r = n('vVR7'),
        o = n('T0pI');
      r(r.S + r.F * (Number.parseInt != o), 'Number', { parseInt: o });
    },
    f2KN: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = { allowDownsampling: !0 };
      function o(e, t) {
        return void 0 === t && (t = r), new i(e, t);
      }
      var i = (function () {
        function e(e, t) {
          var n = this;
          (this._resolutionMediaQueryList = null),
            (this._resolutionListener = function (e) {
              return n._onResolutionChanged();
            }),
            (this._canvasConfiguredListeners = []),
            (this.canvas = e),
            (this._canvasSize = {
              width: this.canvas.clientWidth,
              height: this.canvas.clientHeight,
            }),
            (this._options = t),
            this._configureCanvas(),
            this._installResolutionListener();
        }
        return (
          (e.prototype.destroy = function () {
            (this._canvasConfiguredListeners.length = 0),
              this._uninstallResolutionListener(),
              (this.canvas = null);
          }),
          Object.defineProperty(e.prototype, 'canvasSize', {
            get: function () {
              return {
                width: this._canvasSize.width,
                height: this._canvasSize.height,
              };
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.resizeCanvas = function (e) {
            (this._canvasSize = { width: e.width, height: e.height }),
              this._configureCanvas();
          }),
          Object.defineProperty(e.prototype, 'pixelRatio', {
            get: function () {
              var e = this.canvas.ownerDocument.defaultView;
              if (null == e)
                throw new Error('No window is associated with the canvas');
              return e.devicePixelRatio > 1 || this._options.allowDownsampling
                ? e.devicePixelRatio
                : 1;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.subscribeCanvasConfigured = function (e) {
            this._canvasConfiguredListeners.push(e);
          }),
          (e.prototype.unsubscribeCanvasConfigured = function (e) {
            this._canvasConfiguredListeners = this._canvasConfiguredListeners.filter(
              function (t) {
                return t != e;
              },
            );
          }),
          (e.prototype._configureCanvas = function () {
            var e = this.pixelRatio;
            (this.canvas.style.width = this._canvasSize.width + 'px'),
              (this.canvas.style.height = this._canvasSize.height + 'px'),
              (this.canvas.width = this._canvasSize.width * e),
              (this.canvas.height = this._canvasSize.height * e),
              this._emitCanvasConfigured();
          }),
          (e.prototype._emitCanvasConfigured = function () {
            var e = this;
            this._canvasConfiguredListeners.forEach(function (t) {
              return t.call(e);
            });
          }),
          (e.prototype._installResolutionListener = function () {
            if (null !== this._resolutionMediaQueryList)
              throw new Error('Resolution listener is already installed');
            var e = this.canvas.ownerDocument.defaultView;
            if (null == e)
              throw new Error('No window is associated with the canvas');
            var t = e.devicePixelRatio;
            (this._resolutionMediaQueryList = e.matchMedia(
              'all and (resolution: ' + t + 'dppx)',
            )),
              this._resolutionMediaQueryList.addListener(
                this._resolutionListener,
              );
          }),
          (e.prototype._uninstallResolutionListener = function () {
            null !== this._resolutionMediaQueryList &&
              (this._resolutionMediaQueryList.removeListener(
                this._resolutionListener,
              ),
              (this._resolutionMediaQueryList = null));
          }),
          (e.prototype._reinstallResolutionListener = function () {
            this._uninstallResolutionListener(),
              this._installResolutionListener();
          }),
          (e.prototype._onResolutionChanged = function () {
            this._configureCanvas(), this._reinstallResolutionListener();
          }),
          e
        );
      })();
    },
    f8KY: function (e, t, n) {
      var r = n('IxbO'),
        o = n('IXQl')('iterator'),
        i = n('V3uq');
      e.exports = n('5wX8').getIteratorMethod = function (e) {
        if (null != e) return e[o] || e['@@iterator'] || i[r(e)];
      };
    },
    fPeS: function (e, t, n) {
      var r, o;
      void 0 ===
        (o =
          'function' ==
          typeof (r = [
            'jquery',
            './data',
            './disable-selection',
            './focusable',
            './form',
            './ie',
            './keycode',
            './labels',
            './jquery-1-7',
            './plugin',
            './safe-active-element',
            './safe-blur',
            './scroll-parent',
            './tabbable',
            './unique-id',
            './version',
          ])
            ? r.call(t, n, t, e)
            : r) || (e.exports = o);
    },
    fkSf: function (e, t, n) {
      var r = n('KGgr'),
        o = n('5wX8'),
        i = n('SwRI'),
        s = n('eKEP'),
        a = n('gPPl').f;
      e.exports = function (e) {
        var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
        '_' == e.charAt(0) || e in t || a(t, e, { value: s.f(e) });
      };
    },
    fnBu: function (e, t, n) {
      var r = n('zY5Q'),
        o = n('B1QU'),
        i = n('IXQl')('species');
      e.exports = function (e) {
        var t;
        return (
          o(e) &&
            ('function' != typeof (t = e.constructor) ||
              (t !== Array && !o(t.prototype)) ||
              (t = void 0),
            r(t) && null === (t = t[i]) && (t = void 0)),
          void 0 === t ? Array : t
        );
      };
    },
    ftsf: function (e, t, n) {
      var r = n('vVR7');
      r(r.S, 'Math', { sign: n('jrio') });
    },
    gKOe: function (e, t, n) {
      'use strict';
      var r = n('vVR7'),
        o = n('bSmq'),
        i = n('p0R9'),
        s = ''.startsWith;
      r(r.P + r.F * n('5zJJ')('startsWith'), 'String', {
        startsWith: function (e) {
          var t = i(this, e, 'startsWith'),
            n = o(
              Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length),
            ),
            r = String(e);
          return s ? s.call(t, r, n) : t.slice(n, n + r.length) === r;
        },
      });
    },
    gPPl: function (e, t, n) {
      var r = n('9TFj'),
        o = n('O6f/'),
        i = n('YN/q'),
        s = Object.defineProperty;
      t.f = n('nULH')
        ? Object.defineProperty
        : function (e, t, n) {
            if ((r(e), (t = i(t, !0)), r(n), o))
              try {
                return s(e, t, n);
              } catch (a) {}
            if ('get' in n || 'set' in n)
              throw TypeError('Accessors not supported!');
            return 'value' in n && (e[t] = n.value), e;
          };
    },
    hrFL: function (e, t, n) {
      var r = n('KGgr').parseFloat,
        o = n('W+In').trim;
      e.exports =
        1 / r(n('YqzG') + '-0') != -1 / 0
          ? function (e) {
              var t = o(String(e), 3),
                n = r(t);
              return 0 === n && '-' == t.charAt(0) ? -0 : n;
            }
          : r;
    },
    hvJ5: function (e, t, n) {
      var r = n('1Vm/');
      e.exports = function (e, t, n) {
        if ((r(e), void 0 === t)) return e;
        switch (n) {
          case 1:
            return function (n) {
              return e.call(t, n);
            };
          case 2:
            return function (n, r) {
              return e.call(t, n, r);
            };
          case 3:
            return function (n, r, o) {
              return e.call(t, n, r, o);
            };
        }
        return function () {
          return e.apply(t, arguments);
        };
      };
    },
    iBVM: function (e, t, n) {
      var r = n('vVR7');
      r(r.S, 'Math', {
        log10: function (e) {
          return Math.log(e) * Math.LOG10E;
        },
      });
    },
    iGnl: function (e, t, n) {
      var r, o, i;
      (o = [n('P5fv'), n('NHgk'), n('Qwlt'), n('MIQu')]),
        void 0 ===
          (i =
            'function' ==
            typeof (r = function (e) {
              var t = !1;
              return (
                e(document).on('mouseup', function () {
                  t = !1;
                }),
                e.widget('ui.mouse', {
                  version: '1.12.1',
                  options: {
                    cancel: 'input, textarea, button, select, option',
                    distance: 1,
                    delay: 0,
                  },
                  _mouseInit: function () {
                    var t = this;
                    this.element
                      .on('mousedown.' + this.widgetName, function (e) {
                        return t._mouseDown(e);
                      })
                      .on('click.' + this.widgetName, function (n) {
                        if (
                          !0 ===
                          e.data(n.target, t.widgetName + '.preventClickEvent')
                        )
                          return (
                            e.removeData(
                              n.target,
                              t.widgetName + '.preventClickEvent',
                            ),
                            n.stopImmediatePropagation(),
                            !1
                          );
                      }),
                      (this.started = !1);
                  },
                  _mouseDestroy: function () {
                    this.element.off('.' + this.widgetName),
                      this._mouseMoveDelegate &&
                        this.document
                          .off(
                            'mousemove.' + this.widgetName,
                            this._mouseMoveDelegate,
                          )
                          .off(
                            'mouseup.' + this.widgetName,
                            this._mouseUpDelegate,
                          );
                  },
                  _mouseDown: function (n) {
                    if (!t) {
                      (this._mouseMoved = !1),
                        this._mouseStarted && this._mouseUp(n),
                        (this._mouseDownEvent = n);
                      var r = this,
                        o = 1 === n.which,
                        i =
                          !(
                            'string' != typeof this.options.cancel ||
                            !n.target.nodeName
                          ) && e(n.target).closest(this.options.cancel).length;
                      return !(
                        o &&
                        !i &&
                        this._mouseCapture(n) &&
                        ((this.mouseDelayMet = !this.options.delay),
                        this.mouseDelayMet ||
                          (this._mouseDelayTimer = setTimeout(function () {
                            r.mouseDelayMet = !0;
                          }, this.options.delay)),
                        this._mouseDistanceMet(n) &&
                        this._mouseDelayMet(n) &&
                        ((this._mouseStarted = !1 !== this._mouseStart(n)),
                        !this._mouseStarted)
                          ? (n.preventDefault(), 0)
                          : (!0 ===
                              e.data(
                                n.target,
                                this.widgetName + '.preventClickEvent',
                              ) &&
                              e.removeData(
                                n.target,
                                this.widgetName + '.preventClickEvent',
                              ),
                            (this._mouseMoveDelegate = function (e) {
                              return r._mouseMove(e);
                            }),
                            (this._mouseUpDelegate = function (e) {
                              return r._mouseUp(e);
                            }),
                            this.document
                              .on(
                                'mousemove.' + this.widgetName,
                                this._mouseMoveDelegate,
                              )
                              .on(
                                'mouseup.' + this.widgetName,
                                this._mouseUpDelegate,
                              ),
                            n.preventDefault(),
                            (t = !0),
                            0))
                      );
                    }
                  },
                  _mouseMove: function (t) {
                    if (this._mouseMoved) {
                      if (
                        e.ui.ie &&
                        (!document.documentMode || document.documentMode < 9) &&
                        !t.button
                      )
                        return this._mouseUp(t);
                      if (!t.which)
                        if (
                          t.originalEvent.altKey ||
                          t.originalEvent.ctrlKey ||
                          t.originalEvent.metaKey ||
                          t.originalEvent.shiftKey
                        )
                          this.ignoreMissingWhich = !0;
                        else if (!this.ignoreMissingWhich)
                          return this._mouseUp(t);
                    }
                    return (
                      (t.which || t.button) && (this._mouseMoved = !0),
                      this._mouseStarted
                        ? (this._mouseDrag(t), t.preventDefault())
                        : (this._mouseDistanceMet(t) &&
                            this._mouseDelayMet(t) &&
                            ((this._mouseStarted =
                              !1 !== this._mouseStart(this._mouseDownEvent, t)),
                            this._mouseStarted
                              ? this._mouseDrag(t)
                              : this._mouseUp(t)),
                          !this._mouseStarted)
                    );
                  },
                  _mouseUp: function (n) {
                    this.document
                      .off(
                        'mousemove.' + this.widgetName,
                        this._mouseMoveDelegate,
                      )
                      .off('mouseup.' + this.widgetName, this._mouseUpDelegate),
                      this._mouseStarted &&
                        ((this._mouseStarted = !1),
                        n.target === this._mouseDownEvent.target &&
                          e.data(
                            n.target,
                            this.widgetName + '.preventClickEvent',
                            !0,
                          ),
                        this._mouseStop(n)),
                      this._mouseDelayTimer &&
                        (clearTimeout(this._mouseDelayTimer),
                        delete this._mouseDelayTimer),
                      (this.ignoreMissingWhich = !1),
                      (t = !1),
                      n.preventDefault();
                  },
                  _mouseDistanceMet: function (e) {
                    return (
                      Math.max(
                        Math.abs(this._mouseDownEvent.pageX - e.pageX),
                        Math.abs(this._mouseDownEvent.pageY - e.pageY),
                      ) >= this.options.distance
                    );
                  },
                  _mouseDelayMet: function () {
                    return this.mouseDelayMet;
                  },
                  _mouseStart: function () {},
                  _mouseDrag: function () {},
                  _mouseStop: function () {},
                  _mouseCapture: function () {
                    return !0;
                  },
                })
              );
            })
              ? r.apply(t, o)
              : r) || (e.exports = i);
    },
    iP0q: function (e, t, n) {
      var r = n('/B3w'),
        o = n('H46L');
      e.exports = function (e) {
        return function (t, n) {
          var i,
            s,
            a = String(o(t)),
            u = r(n),
            c = a.length;
          return u < 0 || u >= c
            ? e
              ? ''
              : void 0
            : (i = a.charCodeAt(u)) < 55296 ||
              i > 56319 ||
              u + 1 === c ||
              (s = a.charCodeAt(u + 1)) < 56320 ||
              s > 57343
            ? e
              ? a.charAt(u)
              : i
            : e
            ? a.slice(u, u + 2)
            : s - 56320 + ((i - 55296) << 10) + 65536;
        };
      };
    },
    isQe: function (e, t) {
      var n = {}.hasOwnProperty;
      e.exports = function (e, t) {
        return n.call(e, t);
      };
    },
    jYDI: function (e, t, n) {
      e.exports = n('vcPO').default;
    },
    jrio: function (e, t) {
      e.exports =
        Math.sign ||
        function (e) {
          return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1;
        };
    },
    kIXF: function (e, t, n) {
      'use strict';
      var r = n('vVR7'),
        o = n('lrbo'),
        i = n('bjrj'),
        s = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
      r(r.P + r.F * s, 'String', {
        padEnd: function (e) {
          return o(this, e, arguments.length > 1 ? arguments[1] : void 0, !1);
        },
      });
    },
    khJW: function (e, t, n) {
      var r = n('gPPl'),
        o = n('yUtn');
      e.exports = n('nULH')
        ? function (e, t, n) {
            return r.f(e, t, o(1, n));
          }
        : function (e, t, n) {
            return (e[t] = n), e;
          };
    },
    ktZe: function (e, t, n) {
      'use strict';
      var r = n('/B3w'),
        o = n('H46L');
      e.exports = function (e) {
        var t = String(o(this)),
          n = '',
          i = r(e);
        if (i < 0 || i == 1 / 0) throw RangeError("Count can't be negative");
        for (; i > 0; (i >>>= 1) && (t += t)) 1 & i && (n += t);
        return n;
      };
    },
    lFip: function (e, t, n) {
      'use strict';
      function r(e, t, n) {
        function r(e) {
          return e && e.indexOf('###') > -1 ? e.replace(/###/g, '.') : e;
        }
        for (
          var o = 'string' != typeof t ? [].concat(t) : t.split('.');
          o.length > 1;

        ) {
          if (!e) return {};
          var i = r(o.shift());
          !e[i] && n && (e[i] = new n()), (e = e[i]);
        }
        return e ? { obj: e, k: r(o.shift()) } : {};
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.makeString = function (e) {
          return null == e ? '' : '' + e;
        }),
        (t.copy = function (e, t, n) {
          e.forEach(function (e) {
            t[e] && (n[e] = t[e]);
          });
        }),
        (t.setPath = function (e, t, n) {
          var o = r(e, t, Object),
            i = o.obj,
            s = o.k;
          i[s] = n;
        }),
        (t.pushPath = function (e, t, n, o) {
          var i = r(e, t, Object),
            s = i.obj,
            a = i.k;
          (s[a] = s[a] || []), o && (s[a] = s[a].concat(n));
          o || s[a].push(n);
        }),
        (t.getPath = function (e, t) {
          var n = r(e, t),
            o = n.obj,
            i = n.k;
          return o ? o[i] : void 0;
        }),
        (t.deepExtend = function e(t, n, r) {
          for (var o in n)
            o in t
              ? 'string' == typeof t[o] ||
                t[o] instanceof String ||
                'string' == typeof n[o] ||
                n[o] instanceof String
                ? r && (t[o] = n[o])
                : e(t[o], n[o], r)
              : (t[o] = n[o]);
          return t;
        }),
        (t.regexEscape = function (e) {
          return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
        }),
        (t.escape = function (e) {
          return 'string' == typeof e
            ? e.replace(/[&<>"'\/]/g, function (e) {
                return o[e];
              })
            : e;
        });
      var o = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
      };
    },
    lHEB: function (e, t, n) {
      var r = n('V3uq'),
        o = n('IXQl')('iterator'),
        i = Array.prototype;
      e.exports = function (e) {
        return void 0 !== e && (r.Array === e || i[o] === e);
      };
    },
    lPLC: function (e, t, n) {
      'use strict';
      var r, o, i, s;
      (r = jQuery),
        (o = r(window)),
        (i = r(document)),
        (s = function (e) {
          var t = jQuery.data(e.target);
          t.localScroll
            ? e.target.scrollTop >
                e.target.scrollHeight -
                  r(e.target).height() -
                  (t.tolerance || 190) && r(this).trigger('scrolltoend')
            : o.scrollTop() >
                i.height() - o.innerHeight() - (t.tolerance || 190) &&
              r(this).trigger('scrolltoend');
        }),
        (r.event.special.scrolltoend = {
          setup: function (e, t) {
            r(this).bind('scroll.scrolltoend', s);
          },
          teardown: function (e) {
            r(this).unbind('scroll.scrolltoend', s);
          },
        }),
        (jQuery.event.special.scrollto = {
          bindType: 'scroll',
          handle: function (e) {
            var t = e.handleObj;
            e.scrollData || (e.scrollData = { scrollTop: o.scrollTop() });
            var n = null;
            if ('number' == typeof e.data.to)
              n = e.scrollData.scrollTop > e.data.to - (e.data.tolerance || 0);
            else {
              if ('bottom' !== e.data.to)
                throw new Error(
                  'Special event scrollto: property "to" has unexpected value',
                );
              e.scrollData.bottomOffset ||
                (e.scrollData.bottomOffset = i.height() - o.innerHeight()),
                (n =
                  e.scrollData.scrollTop >
                  e.scrollData.bottomOffset - (e.data.tolerance || 0));
            }
            var r = Array.prototype.slice.apply(arguments);
            return n
              ? (r.push(!0), t.handler.apply(this, r))
              : e.data.twoway
              ? (r.push(!1), t.handler.apply(this, r))
              : void 0;
          },
        });
    },
    lrbo: function (e, t, n) {
      var r = n('bSmq'),
        o = n('ktZe'),
        i = n('H46L');
      e.exports = function (e, t, n, s) {
        var a = String(i(e)),
          u = a.length,
          c = void 0 === n ? ' ' : String(n),
          l = r(t);
        if (l <= u || '' == c) return a;
        var f = l - u,
          d = o.call(c, Math.ceil(f / c.length));
        return d.length > f && (d = d.slice(0, f)), s ? d + a : a + d;
      };
    },
    mKhQ: function (e, t, n) {
      'use strict';
      var r, o, i;
      (r = jQuery),
        void 0 !== document.hidden
          ? ((o = 'hidden'), (i = 'visibilitychange'))
          : void 0 !== document.mozHidden
          ? ((o = 'mozHidden'), (i = 'mozvisibilitychange'))
          : void 0 !== document.msHidden
          ? ((o = 'msHidden'), (i = 'msvisibilitychange'))
          : void 0 !== document.webkitHidden &&
            ((o = 'webkitHidden'), (i = 'webkitvisibilitychange')),
        (r.tabvisible = !0),
        i &&
          (r(document).on(i, function (e) {
            (r.tabvisible = !document[o]),
              r(window).trigger('visibilitychange', !document[o]);
          }),
          r(document).trigger(i)),
        (r.whenTabVisible = function (e) {
          !i || r.tabvisible ? e() : r(window).one('visibilitychange', e);
        });
    },
    mPZe: function (e, t, n) {
      var r = n('vVR7');
      r(r.S, 'Math', {
        trunc: function (e) {
          return (e > 0 ? Math.floor : Math.ceil)(e);
        },
      });
    },
    mrSG: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, '__extends', function () {
          return o;
        }),
        n.d(t, '__assign', function () {
          return i;
        }),
        n.d(t, '__rest', function () {
          return s;
        }),
        n.d(t, '__decorate', function () {
          return a;
        }),
        n.d(t, '__param', function () {
          return u;
        }),
        n.d(t, '__metadata', function () {
          return c;
        }),
        n.d(t, '__awaiter', function () {
          return l;
        }),
        n.d(t, '__generator', function () {
          return f;
        }),
        n.d(t, '__exportStar', function () {
          return d;
        }),
        n.d(t, '__values', function () {
          return p;
        }),
        n.d(t, '__read', function () {
          return h;
        }),
        n.d(t, '__spread', function () {
          return g;
        }),
        n.d(t, '__spreadArrays', function () {
          return v;
        }),
        n.d(t, '__await', function () {
          return m;
        }),
        n.d(t, '__asyncGenerator', function () {
          return y;
        }),
        n.d(t, '__asyncDelegator', function () {
          return b;
        }),
        n.d(t, '__asyncValues', function () {
          return _;
        }),
        n.d(t, '__makeTemplateObject', function () {
          return w;
        }),
        n.d(t, '__importStar', function () {
          return x;
        }),
        n.d(t, '__importDefault', function () {
          return S;
        }),
        n.d(t, '__classPrivateFieldGet', function () {
          return E;
        }),
        n.d(t, '__classPrivateFieldSet', function () {
          return O;
        });
      var r = function (e, t) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          })(e, t);
      };
      function o(e, t) {
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var i = function () {
        return (i =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function s(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        }
        return n;
      }
      function a(e, t, n, r) {
        var o,
          i = arguments.length,
          s =
            i < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, n))
              : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, n, r);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) &&
              (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
        return i > 3 && s && Object.defineProperty(t, n, s), s;
      }
      function u(e, t) {
        return function (n, r) {
          t(n, r, e);
        };
      }
      function c(e, t) {
        if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function l(e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function s(e) {
            try {
              u(r.next(e));
            } catch (t) {
              i(t);
            }
          }
          function a(e) {
            try {
              u(r.throw(e));
            } catch (t) {
              i(t);
            }
          }
          function u(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          u((r = r.apply(e, t || [])).next());
        });
      }
      function f(e, t) {
        var n,
          r,
          o,
          i,
          s = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: a(0), throw: a(1), return: a(2) }),
          'function' == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function a(i) {
          return function (a) {
            return (function (i) {
              if (n) throw new TypeError('Generator is already executing.');
              for (; s; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return s.label++, { value: i[1], done: !1 };
                    case 5:
                      s.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !((o = s.trys),
                        (o = o.length > 0 && o[o.length - 1]) ||
                          (6 !== i[0] && 2 !== i[0]))
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        s.label = i[1];
                        break;
                      }
                      if (6 === i[0] && s.label < o[1]) {
                        (s.label = o[1]), (o = i);
                        break;
                      }
                      if (o && s.label < o[2]) {
                        (s.label = o[2]), s.ops.push(i);
                        break;
                      }
                      o[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  i = t.call(e, s);
                } catch (a) {
                  (i = [6, a]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, a]);
          };
        }
      }
      function d(e, t) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
      }
      function p(e) {
        var t = 'function' == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && 'number' == typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
        );
      }
      function h(e, t) {
        var n = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          i = n.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
            s.push(r.value);
        } catch (a) {
          o = { error: a };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return s;
      }
      function g() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(h(arguments[t]));
        return e;
      }
      function v() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        var r = Array(e),
          o = 0;
        for (t = 0; t < n; t++)
          for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++)
            r[o] = i[s];
        return r;
      }
      function m(e) {
        return this instanceof m ? ((this.v = e), this) : new m(e);
      }
      function y(e, t, n) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var r,
          o = n.apply(e, t || []),
          i = [];
        return (
          (r = {}),
          s('next'),
          s('throw'),
          s('return'),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );
        function s(e) {
          o[e] &&
            (r[e] = function (t) {
              return new Promise(function (n, r) {
                i.push([e, t, n, r]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            (n = o[e](t)).value instanceof m
              ? Promise.resolve(n.value.v).then(u, c)
              : l(i[0][2], n);
          } catch (r) {
            l(i[0][3], r);
          }
          var n;
        }
        function u(e) {
          a('next', e);
        }
        function c(e) {
          a('throw', e);
        }
        function l(e, t) {
          e(t), i.shift(), i.length && a(i[0][0], i[0][1]);
        }
      }
      function b(e) {
        var t, n;
        return (
          (t = {}),
          r('next'),
          r('throw', function (e) {
            throw e;
          }),
          r('return'),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function r(r, o) {
          t[r] = e[r]
            ? function (t) {
                return (n = !n)
                  ? { value: m(e[r](t)), done: 'return' === r }
                  : o
                  ? o(t)
                  : t;
              }
            : o;
        }
      }
      function _(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var t,
          n = e[Symbol.asyncIterator];
        return n
          ? n.call(e)
          : ((e = p(e)),
            (t = {}),
            r('next'),
            r('throw'),
            r('return'),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function r(n) {
          t[n] =
            e[n] &&
            function (t) {
              return new Promise(function (r, o) {
                (function (e, t, n, r) {
                  Promise.resolve(r).then(function (t) {
                    e({ value: t, done: n });
                  }, t);
                })(r, o, (t = e[n](t)).done, t.value);
              });
            };
        }
      }
      function w(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, 'raw', { value: t })
            : (e.raw = t),
          e
        );
      }
      function x(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      function S(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function E(e, t) {
        if (!t.has(e))
          throw new TypeError('attempted to get private field on non-instance');
        return t.get(e);
      }
      function O(e, t, n) {
        if (!t.has(e))
          throw new TypeError('attempted to set private field on non-instance');
        return t.set(e, n), n;
      }
    },
    mz5e: function (e, t, n) {
      'use strict';
      var r = n('vVR7'),
        o = n('p0R9');
      r(r.P + r.F * n('5zJJ')('includes'), 'String', {
        includes: function (e) {
          return !!~o(this, e, 'includes').indexOf(
            e,
            arguments.length > 1 ? arguments[1] : void 0,
          );
        },
      });
    },
    n0SC: function (e, t, n) {
      var r = n('vVR7'),
        o = n('yFUn')(!1);
      r(r.S, 'Object', {
        values: function (e) {
          return o(e);
        },
      });
    },
    nULH: function (e, t, n) {
      e.exports = !n('u52/')(function () {
        return (
          7 !=
          Object.defineProperty({}, 'a', {
            get: function () {
              return 7;
            },
          }).a
        );
      });
    },
    nib0: function (e, t, n) {
      var r = n('zY5Q'),
        o = n('qKVQ'),
        i = n('IXQl')('match');
      e.exports = function (e) {
        var t;
        return r(e) && (void 0 !== (t = e[i]) ? !!t : 'RegExp' == o(e));
      };
    },
    oA7e: function (e, t, n) {
      'use strict';
      var r;
      (r = jQuery).fn.selectable = function (e) {
        return this.each(function () {
          var t = r(this);
          t.css('user-select', e ? 'text' : 'none'),
            t.css('-moz-user-select', e ? 'text' : '-moz-none'),
            t.css('-webkit-user-select', e ? 'auto' : 'none'),
            (r.browser.msie || r.browser.opera) &&
              t.attr('unselectable', e ? 'off' : 'on');
        });
      };
    },
    oYVD: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r,
        o = !(
          'undefined' == typeof window ||
          !window.document ||
          !window.document.createElement
        );
      function i() {
        if (r) return r;
        if (!o || !window.document.body) return 'indeterminate';
        var e = window.document.createElement('div');
        return (
          e.appendChild(document.createTextNode('ABCD')),
          (e.dir = 'rtl'),
          (e.style.fontSize = '14px'),
          (e.style.width = '4px'),
          (e.style.height = '1px'),
          (e.style.position = 'absolute'),
          (e.style.top = '-1000px'),
          (e.style.overflow = 'scroll'),
          document.body.appendChild(e),
          (r = 'reverse'),
          e.scrollLeft > 0
            ? (r = 'default')
            : ((e.scrollLeft = 1), 0 === e.scrollLeft && (r = 'negative')),
          document.body.removeChild(e),
          r
        );
      }
      (t._setScrollType = function (e) {
        r = e;
      }),
        (t.detectScrollType = i),
        (t.getNormalizedScrollLeft = function (e, t) {
          var n = e.scrollLeft;
          if ('rtl' !== t) return n;
          var r = i();
          if ('indeterminate' === r) return Number.NaN;
          switch (r) {
            case 'negative':
              return e.scrollWidth - e.clientWidth + n;
            case 'reverse':
              return e.scrollWidth - e.clientWidth - n;
          }
          return n;
        }),
        (t.setNormalizedScrollLeft = function (e, t, n) {
          if ('rtl' === n) {
            var r = i();
            if ('indeterminate' !== r)
              switch (r) {
                case 'negative':
                  e.scrollLeft = e.clientWidth - e.scrollWidth + t;
                  break;
                case 'reverse':
                  e.scrollLeft = e.scrollWidth - e.clientWidth - t;
                  break;
                default:
                  e.scrollLeft = t;
              }
          } else e.scrollLeft = t;
        });
    },
    ogJP: function (e, t, n) {
      (function (e) {
        var t,
          n =
            Array.isArray ||
            function (e) {
              return '[object Array]' === Object.prototype.toString.call(e);
            },
          r = function (e) {
            return 'object' == typeof e && null !== e;
          };
        function o(e) {
          return 'number' == typeof e && isFinite(e);
        }
        function i(e) {
          return null != e && e.constructor === Function;
        }
        function s(e, t) {
          e.prototype = Object.create(t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          });
        }
        'undefined' != typeof window
          ? ((t = window.TradingView = window.TradingView || {}),
            (window.isNumber = o),
            (window.isFunction = i),
            (window.inherit = s),
            (window.isArray = n))
          : (t = this.TradingView = this.TradingView || {}),
          (t.isNaN = function (e) {
            return !(e <= 0 || e > 0);
          }),
          (t.isAbsent = function (e) {
            return null == e;
          }),
          (t.isExistent = function (e) {
            return null != e;
          }),
          (Number.isNaN =
            Number.isNaN ||
            function (e) {
              return e != e;
            }),
          (t.isSameType = function (e, t) {
            return Number.isNaN(e) || Number.isNaN(t)
              ? Number.isNaN(e) === Number.isNaN(t)
              : {}.toString.call(e) === {}.toString.call(t);
          }),
          (t.isInteger = function (e) {
            return 'number' == typeof e && e % 1 == 0;
          }),
          (t.parseBool = function (e) {
            return !0 === e || 'true' === e;
          }),
          (t.isBoolean = function (e) {
            return !0 === e || !1 === e;
          }),
          (t.isString = function (e) {
            return null != e && e.constructor === String;
          }),
          (t.isInherited = function (e, t) {
            if (null == e || null == e.prototype)
              throw new TypeError(
                'isInherited: child should be a constructor function',
              );
            if (null == t || null == t.prototype)
              throw new TypeError(
                'isInherited: parent should be a constructor function',
              );
            return e.prototype instanceof t || e.prototype === t.prototype;
          }),
          (t.TypeValidator = function (e) {
            this.m_type = e;
          }),
          (t.TypeValidator.prototype.check = function (e) {
            return (
              e.constructor === this.m_type ||
              t.isInherited(e.constructor, this.m_type)
            );
          }),
          (t.PredicateValidator = function (e) {
            this.m_predicate = e;
          }),
          (t.PredicateValidator.prototype.check = function (e) {
            return this.m_predicate(e);
          }),
          (t.clone = function (e) {
            if (!e || 'object' != typeof e) return e;
            var n, r, o;
            for (r in ((n = 'function' == typeof e.pop ? [] : {}), e))
              e.hasOwnProperty(r) &&
                ((o = e[r]),
                (n[r] = o && 'object' == typeof o ? t.clone(o) : o));
            return n;
          }),
          (t.deepEquals = function (e, r, o) {
            if ((o || (o = ''), e === r)) return [!0, o];
            if (
              (i(e) && (e = void 0),
              i(r) && (r = void 0),
              void 0 === e && void 0 !== r)
            )
              return [!1, o];
            if (void 0 === r && void 0 !== e) return [!1, o];
            if (null === e && null !== r) return [!1, o];
            if (null === r && null !== e) return [!1, o];
            if ('object' != typeof e && 'object' != typeof r)
              return [e === r, o];
            if (Array.isArray(e) && Array.isArray(r)) {
              var s = e.length;
              if (s !== r.length) return [!1, o];
              for (var a = 0; a < s; a++) {
                if (!(c = t.deepEquals(e[a], r[a], o + '[' + a + ']'))[0])
                  return c;
              }
              return [!0, o];
            }
            if (n(e) || n(r)) return [!1, o];
            if (Object.keys(e).length !== Object.keys(r).length) return [!1, o];
            for (var u in e) {
              var c;
              if (!(c = t.deepEquals(e[u], r[u], o + '[' + u + ']'))[0])
                return c;
            }
            return [!0, o];
          }),
          (t.merge = function (e, n) {
            for (var r in n)
              'object' == typeof n[r] && e.hasOwnProperty(r)
                ? t.merge(e[r], n[r])
                : (e[r] = n[r]);
            return e;
          }),
          (t.mergeObj = function (e, n) {
            for (var r in n)
              n[r].constructor === Object && e.hasOwnProperty(r)
                ? t.mergeObj(e[r], n[r])
                : (e[r] = n[r]);
            return e;
          }),
          (t.mergeWithRules = function (e, n, r, o) {
            for (var i in n) {
              var s = o ? o + '.' + i : i;
              r && s in r
                ? (e[i] = r[s](e[i], n[i]))
                : 'object' == typeof n[i] && e.hasOwnProperty(i)
                ? t.merge(e[i], n[i], r, s)
                : (e[i] = n[i]);
            }
          }),
          (t.sortMultipleFunction = function () {
            var e = [].slice.call(arguments),
              t = e.length;
            return function (n, r) {
              var o, i, s, a, u, c, l;
              for (
                l = 0;
                l < t &&
                ((c = 0),
                (o = n[(a = 'string' == typeof (s = e[l]) ? s : s.name)]),
                (i = r[a]),
                'function' == typeof s.fn && ((o = s.fn(o)), (i = s.fn(i))),
                (u = s.reverse ? -1 : 1),
                o < i && (c = -1 * u),
                o > i && (c = 1 * u),
                0 === c);
                l++
              );
              return c;
            };
          }),
          e &&
            e.exports &&
            (e.exports = {
              inherit: s,
              clone: t.clone,
              merge: t.merge,
              isNumber: o,
              isInteger: t.isInteger,
              isBoolean: t.isBoolean,
              isString: t.isString,
              isObject: r,
              isHashObject: function (e) {
                return (
                  r(e) &&
                  -1 !== e.constructor.toString().indexOf('function Object')
                );
              },
              isPromise: function (e) {
                return r(e) && e.then;
              },
              isNaN: t.isNaN,
              isAbsent: t.isAbsent,
              isExistent: t.isExistent,
              isSameType: t.isSameType,
              isArray: n,
              parseBool: t.parseBool,
              parseJSONorNot: function (e) {
                return 'string' == typeof e ? JSON.parse(e) : e;
              },
              deepEquals: t.deepEquals,
              notNull: function (e) {
                return null !== e;
              },
              declareClassAsPureInterface: function (e, t) {
                for (var n in e.prototype)
                  'function' == typeof e.prototype[n] &&
                    e.prototype.hasOwnProperty(n) &&
                    (e.prototype[n] = function () {
                      throw new Error(
                        t +
                          '::' +
                          n +
                          ' is an interface member declaration and must be overloaded in order to be called',
                      );
                    });
              },
              requireFullInterfaceImplementation: function (e, t, n, r) {
                for (var o in n.prototype)
                  if ('function' == typeof n.prototype[o] && !e.prototype[o])
                    throw new Error(
                      'Interface implementation assertion failed: ' +
                        t +
                        ' does not implement ' +
                        r +
                        '::' +
                        o +
                        ' function',
                    );
              },
            });
      }.call(this, n('YuTi')(e)));
    },
    p0R9: function (e, t, n) {
      var r = n('nib0'),
        o = n('H46L');
      e.exports = function (e, t, n) {
        if (r(t)) throw TypeError('String#' + n + " doesn't accept regex!");
        return String(o(e));
      };
    },
    'pND+': function (e, t, n) {
      var r = n('8ICS')('keys'),
        o = n('QqfT');
      e.exports = function (e) {
        return r[e] || (r[e] = o(e));
      };
    },
    pZZ2: function (e, t, n) {
      var r = n('isQe'),
        o = n('XSq2'),
        i = n('pND+')('IE_PROTO'),
        s = Object.prototype;
      e.exports =
        Object.getPrototypeOf ||
        function (e) {
          return (
            (e = o(e)),
            r(e, i)
              ? e[i]
              : 'function' == typeof e.constructor && e instanceof e.constructor
              ? e.constructor.prototype
              : e instanceof Object
              ? s
              : null
          );
        };
    },
    pbwk: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          processors: {},
          addPostProcessor: function (e) {
            this.processors[e.name] = e;
          },
          handle: function (e, t, n, r, o) {
            var i = this;
            return (
              e.forEach(function (e) {
                i.processors[e] && (t = i.processors[e].process(t, n, r, o));
              }),
              t
            );
          },
        });
    },
    pipr: function (e, t, n) {
      e.exports = n('8ICS')('native-function-to-string', Function.toString);
    },
    'q/kp': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r,
        o =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol
                  ? 'symbol'
                  : typeof e;
              },
        i = n('C1QN'),
        s = (r = i) && r.__esModule ? r : { default: r };
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      var u = [
          {
            lngs: [
              'ach',
              'ak',
              'am',
              'arn',
              'br',
              'fil',
              'gun',
              'ln',
              'mfe',
              'mg',
              'mi',
              'oc',
              'tg',
              'ti',
              'tr',
              'uz',
              'wa',
            ],
            nr: [1, 2],
            fc: 1,
          },
          {
            lngs: [
              'af',
              'an',
              'ast',
              'az',
              'bg',
              'bn',
              'ca',
              'da',
              'de',
              'dev',
              'el',
              'en',
              'eo',
              'es',
              'es_ar',
              'et',
              'eu',
              'fi',
              'fo',
              'fur',
              'fy',
              'gl',
              'gu',
              'ha',
              'he',
              'hi',
              'hu',
              'hy',
              'ia',
              'it',
              'kn',
              'ku',
              'lb',
              'mai',
              'ml',
              'mn',
              'mr',
              'nah',
              'nap',
              'nb',
              'ne',
              'nl',
              'nn',
              'no',
              'nso',
              'pa',
              'pap',
              'pms',
              'ps',
              'pt',
              'pt_br',
              'rm',
              'sco',
              'se',
              'si',
              'so',
              'son',
              'sq',
              'sv',
              'sw',
              'ta',
              'te',
              'tk',
              'ur',
              'yo',
            ],
            nr: [1, 2],
            fc: 2,
          },
          {
            lngs: [
              'ay',
              'bo',
              'cgg',
              'fa',
              'id',
              'ja',
              'jbo',
              'ka',
              'kk',
              'km',
              'ko',
              'ky',
              'lo',
              'ms',
              'sah',
              'su',
              'th',
              'tt',
              'ug',
              'vi',
              'wo',
              'zh',
            ],
            nr: [1],
            fc: 3,
          },
          {
            lngs: ['be', 'bs', 'dz', 'hr', 'ru', 'sr', 'uk'],
            nr: [1, 2, 5],
            fc: 4,
          },
          { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
          { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
          { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ['fr'], nr: [1, 2], fc: 9 },
          { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ['is'], nr: [1, 2], fc: 12 },
          { lngs: ['jv'], nr: [0, 1], fc: 13 },
          { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
          { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
          { lngs: ['mk'], nr: [1, 2], fc: 17 },
          { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
          { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ['or'], nr: [2, 1], fc: 2 },
          { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
          { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
        ],
        c = {
          1: function (e) {
            return Number(e > 1);
          },
          2: function (e) {
            return Number(1 != e);
          },
          3: function (e) {
            return 0;
          },
          4: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2,
            );
          },
          5: function (e) {
            return Number(
              0 === e
                ? 0
                : 1 == e
                ? 1
                : 2 == e
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5,
            );
          },
          6: function (e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
          },
          7: function (e) {
            return Number(
              1 == e
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2,
            );
          },
          8: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
          },
          9: function (e) {
            return Number(e >= 2);
          },
          10: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
          },
          11: function (e) {
            return Number(
              1 == e || 11 == e
                ? 0
                : 2 == e || 12 == e
                ? 1
                : e > 2 && e < 20
                ? 2
                : 3,
            );
          },
          12: function (e) {
            return Number(e % 10 != 1 || e % 100 == 11);
          },
          13: function (e) {
            return Number(0 !== e);
          },
          14: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
          },
          15: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2,
            );
          },
          16: function (e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
          },
          17: function (e) {
            return Number(1 == e || e % 10 == 1 ? 0 : 1);
          },
          18: function (e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2);
          },
          19: function (e) {
            return Number(
              1 == e
                ? 0
                : 0 === e || (e % 100 > 1 && e % 100 < 11)
                ? 1
                : e % 100 > 10 && e % 100 < 20
                ? 2
                : 3,
            );
          },
          20: function (e) {
            return Number(
              1 == e ? 0 : 0 === e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2,
            );
          },
          21: function (e) {
            return Number(
              e % 100 == 1
                ? 1
                : e % 100 == 2
                ? 2
                : e % 100 == 3 || e % 100 == 4
                ? 3
                : 0,
            );
          },
        };
      function l() {
        var e = {};
        return (
          u.forEach(function (t) {
            t.lngs.forEach(function (n) {
              return (e[n] = { numbers: t.nr, plurals: c[t.fc] });
            });
          }),
          e
        );
      }
      var f = (function () {
        function e(t) {
          var n =
            arguments.length <= 1 || void 0 === arguments[1]
              ? {}
              : arguments[1];
          a(this, e),
            (this.languageUtils = t),
            (this.options = n),
            (this.logger = s.default.create('pluralResolver')),
            (this.rules = l());
        }
        return (
          (e.prototype.addRule = function (e, t) {
            this.rules[e] = t;
          }),
          (e.prototype.getRule = function (e) {
            return this.rules[this.languageUtils.getLanguagePartFromCode(e)];
          }),
          (e.prototype.needsPlural = function (e) {
            var t = this.getRule(e);
            return !(t && t.numbers.length <= 1);
          }),
          (e.prototype.getSuffix = function (e, t) {
            var n = this,
              r = this.getRule(e);
            if (!r)
              return this.logger.warn('no plural rule found for: ' + e), '';
            var i = (function () {
              if (1 === r.numbers.length) return { v: '' };
              var e = r.noAbs ? r.plurals(t) : r.plurals(Math.abs(t)),
                o = r.numbers[e];
              2 === r.numbers.length &&
                1 === r.numbers[0] &&
                (2 === o ? (o = 'plural') : 1 === o && (o = ''));
              var i = function () {
                return n.options.prepend && o.toString()
                  ? n.options.prepend + o.toString()
                  : o.toString();
              };
              return 'v1' === n.options.compatibilityJSON
                ? 1 === o
                  ? { v: '' }
                  : 'number' == typeof o
                  ? { v: '_plural_' + o.toString() }
                  : { v: i() }
                : 'v2' === n.options.compatibilityJSON ||
                  (2 === r.numbers.length && 1 === r.numbers[0]) ||
                  (2 === r.numbers.length && 1 === r.numbers[0])
                ? { v: i() }
                : {
                    v:
                      n.options.prepend && e.toString()
                        ? n.options.prepend + e.toString()
                        : e.toString(),
                  };
            })();
            return 'object' === (void 0 === i ? 'undefined' : o(i))
              ? i.v
              : void 0;
          }),
          e
        );
      })();
      t.default = f;
    },
    qFKp: function (e, t, n) {
      'use strict';
      var r = (window.TradingView = window.TradingView || {}),
        o = n('VVxS').TVLocalStorage,
        i = window.chrome && window.chrome.runtime,
        s = window.navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
        a = /\sEdge\/\d\d\b/.test(navigator.userAgent),
        u = 'msHidden' in window.document,
        c =
          navigator.vendor &&
          navigator.vendor.indexOf('Apple') > -1 &&
          -1 === navigator.userAgent.indexOf('CriOS') &&
          -1 === navigator.userAgent.indexOf('FxiOS'),
        l = function () {
          return /mac/i.test(navigator.platform);
        };
      r.className = function (e) {
        for (var t in this) if (r[t] === e) return t;
        return null;
      };
      var f, d, p, h, g, v;
      function m() {
        return !!o.getItem('HaveEverReceivedTouchEvent');
      }
      (r.isMobile =
        ((f = /Android/i.test(navigator.userAgent)),
        (d = /BlackBerry/i.test(navigator.userAgent)),
        (p = /iPhone|iPad|iPod/.test(navigator.platform)),
        (h = /Opera Mini/i.test(navigator.userAgent)),
        (g = l() && c && m()),
        (v = f || d || p || h || g),
        {
          Android: function () {
            return f;
          },
          BlackBerry: function () {
            return d;
          },
          iOS: function () {
            return p || g;
          },
          Opera: function () {
            return h;
          },
          any: function () {
            return v;
          },
        })),
        (r.supportTouch = function () {
          return Modernizr.mobiletouch || r.isMobile.any();
        }),
        (r.onWidget = function () {
          for (
            var e = [
                '^widgetembed/?$',
                '^cmewidgetembed/?$',
                '^([0-9a-zA-Z-]+)/widgetembed/?$',
                '^([0-9a-zA-Z-]+)/widgetstatic/?$',
                '^([0-9a-zA-Z-]+)?/?miniwidgetembed/?$',
                '^([0-9a-zA-Z-]+)?/?mediumwidgetembed/?$',
                '^embed(-static)?/([0-9a-zA-Z]{8})/?$',
                '^widgetpopup/?$',
                '^extension/?$',
                '^chatwidgetembed/?$',
                '^ideaswidgetembed/?$',
                '^ideas-widget/?$',
                '^view-idea-widget/([0-9a-zA-Z]{8})/?$',
                '^user-info-widget/?$',
                '^user-info-widget-get/(.+?)?/?$',
                '^embed-quotes-provider/?$',
                '^idea-popup/?$',
                '^hotlistswidgetembed/?$',
                '^([0-9a-zA-Z-]+)/hotlistswidgetembed/?$',
                '^marketoverviewwidgetembed/?$',
                '^([0-9a-zA-Z-]+)/marketoverviewwidgetembed/?$',
                '^eventswidgetembed/?$',
                '^tickerswidgetembed/?$',
                '^forexcrossrateswidgetembed/?$',
                '^forexheatmapwidgetembed/?$',
                '^marketquoteswidgetembed/?$',
                '^screenerwidget/?$',
                '^cryptomktscreenerwidget/?$',
                '^([0-9a-zA-Z-]+)/cryptomktscreenerwidget/?$',
                '^([0-9a-zA-Z-]+)/marketquoteswidgetembed/?$',
                '^technical-analysis-widget-embed/$',
                '^singlequotewidgetembed/?$',
                '^([0-9a-zA-Z-]+)/singlequotewidgetembed/?$',
                '^embed-widget/([0-9a-zA-Z-]+)/(([0-9a-zA-Z-]+)/)?$',
              ],
              t = window.location.pathname.replace(/^\//, ''),
              n = e.length - 1;
            n >= 0;
            n--
          )
            if (new RegExp(e[n]).test(t)) return !0;
          return !1;
        }),
        (r.onOrder = function () {
          return '/order/' === window.location.pathname;
        }),
        (e.exports.isMac = l),
        (e.exports.CheckMobile = r.isMobile),
        (e.exports.onWidget = r.onWidget),
        (e.exports.supportTouch = r.supportTouch),
        (e.exports.checkPageType = function (e) {
          return (
            new URLSearchParams(window.location.search).get('page_type') === e
          );
        }),
        (e.exports.isChrome = i),
        (e.exports.isFF = s),
        (e.exports.isEdge = a),
        (e.exports.isIE = u),
        (e.exports.isSafari = c),
        (e.exports.markAsReceivedTouch = function () {
          o.setItem('HaveEverReceivedTouchEvent', 'true');
        }),
        (e.exports.haveEverReceivedTouchEvent = m),
        (e.exports.onGoPro = function () {
          return '/gopro/' === window.location.pathname;
        });
    },
    qKVQ: function (e, t) {
      var n = {}.toString;
      e.exports = function (e) {
        return n.call(e).slice(8, -1);
      };
    },
    qUYv: function (e, t, n) {
      var r = n('vVR7');
      r(r.S, 'Number', {
        isNaN: function (e) {
          return e != e;
        },
      });
    },
    qlfx: function (e) {
      e.exports = JSON.parse(
        '{"14851":{},"custom_items_in_context_menu":{},"websocket_connection":{},"countdown":{},"symbol_search_parser_mixin":{},"show_pro_features":{},"daily_timeframe_suffix":{},"symbollist_context_menu":{},"pay_attention_to_ticker_not_symbol":{},"graying_disabled_tools_enabled":{},"update_study_formatter_on_symbol_resolve":{},"constraint_dialogs_movement":{},"phone_verification":{},"show_trading_notifications_history":{},"show_interval_dialog_on_key_press":{},"header_interval_dialog_button":{"subsets":["show_interval_dialog_on_key_press"]},"header_fullscreen_button":{},"header_symbol_search":{},"symbol_search_hot_key":{},"header_resolutions":{"subsets":["header_interval_dialog_button"]},"header_chart_type":{},"header_settings":{},"header_indicators":{},"header_compare":{},"header_undo_redo":{},"header_screenshot":{},"header_saveload":{},"study_on_study":{},"scales_date_format":{},"header_widget":{"subsets":["header_widget_dom_node","header_symbol_search","header_resolutions","header_chart_type","header_settings","header_indicators","header_compare","header_undo_redo","header_fullscreen_button","compare_symbol","header_screenshot"]},"legend_widget":{},"compare_symbol":{"subsets":["header_compare"]},"property_pages":{"subsets":["show_chart_property_page","chart_property_page"]},"show_chart_property_page":{},"chart_property_page":{"subsets":["chart_property_page_style","chart_property_page_scales","chart_property_page_background","chart_property_page_timezone_sessions","chart_property_page_events_alerts","chart_property_page_trading","chart_property_page_template_button","chart_property_page_right_margin_editor"]},"disable_userlink_popup":{},"left_toolbar":{},"hide_left_toolbar_by_default":{},"control_bar":{},"widget_logo":{},"timeframes_toolbar":{},"edit_buttons_in_legend":{"subsets":["show_hide_button_in_legend","format_button_in_legend","study_buttons_in_legend","delete_button_in_legend"]},"hide_legend_by_default":{},"show_hide_button_in_legend":{},"format_button_in_legend":{},"study_buttons_in_legend":{},"delete_button_in_legend":{},"pane_context_menu":{},"scales_context_menu":{},"legend_context_menu":{},"context_menus":{"subsets":["pane_context_menu","scales_context_menu","legend_context_menu","objects_tree_context_menu"]},"items_favoriting":{},"save_chart_properties_to_local_storage":{},"use_localstorage_for_settings":{"subsets":["items_favoriting","save_chart_properties_to_local_storage"]},"handle_scale":{"subsets":["mouse_wheel_scale","pinch_scale","axis_pressed_mouse_move_scale"]},"handle_scroll":{"subsets":["mouse_wheel_scroll","pressed_mouse_move_scroll","horz_touch_drag_scroll","vert_touch_drag_scroll"]},"plain_studymarket":{},"trading_watch_positions":{},"disable_resolution_rebuild":{},"border_around_the_chart":{},"charting_library_debug_mode":{},"log_data_request_time":{},"saveload_requires_authentication":{},"saveload_storage_customization":{},"new_chart_creation_available":{},"volume_force_overlay":{},"create_volume_indicator_by_default":{},"create_volume_indicator_by_default_once":{},"saved_charts_count_restriction":{},"lean_chart_load":{},"stop_study_on_restart":{},"star_some_intervals_by_default":{},"predefined_items_only_may_be_starred":{},"move_logo_to_main_pane":{},"show_animated_logo":{},"link_to_tradingview":{},"logo_without_link":{},"right_bar_stays_on_scroll":{},"chart_content_overrides_by_defaults":{},"show_dialog_on_snapshot_ready":{},"snapshot_trading_drawings":{},"allow_supported_resolutions_set_only":{},"widgetbar_tabs":{},"collapsible_header":{},"show_extension_popup":{},"study_templates":{},"side_toolbar_in_fullscreen_mode":{},"header_in_fullscreen_mode":{},"remove_library_container_border":{},"whotrades_auth_only":{},"support_multicharts":{},"display_market_status":{},"display_data_mode":{},"show_chart_warn_message":{},"datasource_copypaste":{},"line_tool_templates":{},"expand_symbolsearch_items":{},"symbol_search_three_columns_exchanges":{},"symbol_search_flags":{},"symbol_search_limited_exchanges":{},"bugreport_button":{},"footer_publish_idea_button":{},"showdom_button":{},"text_notes":{},"show_source_code":{},"symbol_info":{},"no_bars_status":{},"clear_bars_on_series_error":{},"hide_loading_screen_on_series_error":{},"seconds_resolution":{},"dont_show_boolean_study_arguments":{},"hide_last_na_study_output":{},"price_scale_always_last_bar_value":{},"study_dialog_search_control":{},"study_dialog_fundamentals_economy_addons":{},"uppercase_instrument_names":{},"cqg_trading_confirm_risks":{},"trading_notifications":{},"chart_crosshair_menu":{},"japanese_chart_styles":{},"hide_series_legend_item":{},"hide_study_overlay_legend_item":{},"hide_study_compare_legend_item":{},"linetoolpropertieswidget_template_button":{},"use_overrides_for_overlay":{},"timezone_menu":{},"main_series_scale_menu":{},"show_login_dialog":{},"remove_img_from_rss":{},"bars_marks":{},"chart_scroll":{},"chart_zoom":{},"source_selection_markers":{},"high_density_bars":{},"low_density_bars":{},"end_of_period_timescale_marks":{},"open_account_manager":{},"order_panel":{"subsets":["order_info"]},"multiple_watchlists":{},"study_overlay_compare_legend_option":{},"custom_resolutions":{},"referral_program_for_widget_owners":{},"mobile_app_force_chart_maximize":{},"no_min_chart_width":{},"lock_visible_time_range_on_resize":{},"pricescale_currency":{},"referral_program_policy_aggressive":{"subsets":["referral_program_policy_passive","referral_program_policy_normal"]},"referral_program_policy_normal":{"subsets":["referral_program_policy_passive","header_fake_features_buttons","custom_resolutions"]},"cropped_tick_marks":{},"trading_account_manager":{},"tv_production":{"subsets":["show_pro_features","countdown","symbol_search_parser_mixin","symbollist_context_menu","websocket_connection","header_fullscreen_button","header_widget","dont_show_boolean_study_arguments","left_toolbar","control_bar","symbol_search_hot_key","context_menus","edit_buttons_in_legend","uppercase_instrument_names","use_localstorage_for_settings","saveload_requires_authentication","volume_force_overlay","new_chart_creation_available","saved_charts_count_restriction","create_volume_indicator_by_default","create_volume_indicator_by_default_once","charts_auto_save","save_old_chart_before_save_as","chart_content_overrides_by_defaults","alerts","show_dialog_on_snapshot_ready","show_extension_popup","header_saveload","header_layouttoggle","datasource_copypaste","show_saved_watchlists","watchlists_from_to_file","add_to_watchlist","property_pages","support_multicharts","display_market_status","display_data_mode","show_chart_warn_message","support_manage_drawings","widgetbar_tabs","study_templates","collapsible_header","line_tool_templates","caption_buttons_text_if_possible","footer_publish_idea_button","text_notes","show_source_code","trading_watch_positions","symbol_info","linetoolpropertieswidget_template_button","cqg_trading_confirm_risks","trading_notifications","symbol_search_three_columns_exchanges","symbol_search_flags","symbol_search_limited_exchanges","phone_verification","chart_events","custom_resolutions","compare_symbol","study_on_study","japanese_chart_styles","show_login_dialog","dome_widget","bars_marks","chart_scroll","chart_zoom","show_trading_notifications_history","source_selection_markers","study_dialog_fundamentals_economy_addons","multiple_watchlists","marked_symbols","order_panel","pricescale_currency","show_animated_logo","pricescale_currency","show_object_tree","scales_date_format","popup_hints"]},"browser_extension":{"subsets":["disable_userlink_popup","show_pro_features","show_saved_watchlists","display_market_status","display_data_mode","show_chart_warn_message","widgetbar_tabs","show_login_dialog"]},"widget":{"subsets":["show_pro_features","countdown","symbol_search_parser_mixin","symbollist_context_menu","websocket_connection","uppercase_instrument_names","left_toolbar","control_bar","symbol_search_hot_key","context_menus","edit_buttons_in_legend","use_localstorage_for_settings","saveload_requires_authentication","volume_force_overlay","create_volume_indicator_by_default","create_volume_indicator_by_default_once","show_dialog_on_snapshot_ready","dont_show_boolean_study_arguments","header_widget_dom_node","header_symbol_search","header_resolutions","header_chart_type","header_compare","header_indicators","star_some_intervals_by_default","display_market_status","display_data_mode","show_chart_warn_message","symbol_info","linetoolpropertieswidget_template_button","symbol_search_three_columns_exchanges","symbol_search_flags","symbol_search_limited_exchanges","widgetbar_tabs","compare_symbol","show_login_dialog","plain_studymarket","japanese_chart_styles","bars_marks","chart_scroll","chart_zoom","source_selection_markers","property_pages"]},"bovespa_widget":{"subsets":["widget","header_settings","chart_property_page_timezone_sessions","linetoolpropertieswidget_template_button"]},"charting_library_base":{"subsets":["14851","allow_supported_resolutions_set_only","border_around_the_chart","collapsible_header","constraint_dialogs_movement","context_menus","control_bar","create_volume_indicator_by_default","custom_items_in_context_menu","datasource_copypaste","daily_timeframe_suffix","uppercase_instrument_names","display_market_status","edit_buttons_in_legend","graying_disabled_tools_enabled","header_widget","legend_widget","header_saveload","dont_show_boolean_study_arguments","lean_chart_load","left_toolbar","trading_watch_positions","link_to_tradingview","pay_attention_to_ticker_not_symbol","plain_studymarket","predefined_items_only_may_be_starred","refresh_saved_charts_list_on_dialog_show","right_bar_stays_on_scroll","saveload_storage_customization","show_dialog_on_snapshot_ready","stop_study_on_restart","timeframes_toolbar","symbol_search_hot_key","update_study_formatter_on_symbol_resolve","update_timeframes_set_on_symbol_resolve","use_localstorage_for_settings","volume_force_overlay","widget_logo","countdown","use_overrides_for_overlay","trading_notifications","compare_symbol","symbol_info","timezone_menu","main_series_scale_menu","study_dialog_search_control","chart_crosshair_menu","create_volume_indicator_by_default_once","bars_marks","chart_scroll","chart_zoom","source_selection_markers","property_pages","go_to_date","adaptive_logo","caption_buttons_text_if_possible","show_animated_logo","handle_scale","handle_scroll","shift_visible_range_on_new_bar","chart_content_overrides_by_defaults","cropped_tick_marks","scales_date_format","popup_hints"]},"charting_library":{"subsets":["charting_library_base"]},"static_charts_service":{"subsets":["charting_library","disable_resolution_rebuild","log_data_request_time"]},"trading_terminal":{"subsets":["charting_library_base","showdom_button","support_multicharts","header_layouttoggle","japanese_chart_styles","chart_property_page_trading","add_to_watchlist","open_account_manager","show_dom_first_time","order_panel","multiple_watchlists","show_trading_notifications_history","always_pass_called_order_to_modify","show_object_tree","trading_account_manager"]},"cqg_terminal":{"subsets":["charting_library_base","chart_property_page_trading","expand_symbolsearch_items","clear_bars_on_series_error","no_bars_status","hide_loading_screen_on_series_error","support_multicharts","header_layouttoggle","bugreport_button","showdom_button","dome_widget","show_dom_first_time","japanese_chart_styles","remove_img_from_rss","add_to_watchlist","order_panel","show_trading_notifications_history","show_object_tree"]},"amp_terminal":{"subsets":["cqg_terminal","show_object_tree"]}}',
      );
    },
    s245: function (e, t, n) {
      var r = n('9TFj'),
        o = n('1Vm/'),
        i = n('IXQl')('species');
      e.exports = function (e, t) {
        var n,
          s = r(e).constructor;
        return void 0 === s || null == (n = r(s)[i]) ? t : o(n);
      };
    },
    s3mU: function (e, t, n) {
      var r = n('6Ngl'),
        o = n('C9Yf').f,
        i = {}.toString,
        s =
          'object' == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [];
      e.exports.f = function (e) {
        return s && '[object Window]' == i.call(e)
          ? (function (e) {
              try {
                return o(e);
              } catch (t) {
                return s.slice();
              }
            })(e)
          : o(r(e));
      };
    },
    sE80: function (e, t) {
      'undefined' != typeof window &&
        (Element.prototype.matches ||
          (Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector),
        Element.prototype.closest ||
          (Element.prototype.closest = function (e) {
            for (var t = this; t && 1 === t.nodeType; t = t.parentNode)
              if (t.matches(e)) return t;
            return null;
          }));
    },
    si6p: function (e, t, n) {
      var r, o, i;
      (o = [n('P5fv')]),
        void 0 ===
          (i =
            'function' ==
            typeof (r = function (e) {
              var t,
                n,
                r = [
                  'wheel',
                  'mousewheel',
                  'DOMMouseScroll',
                  'MozMousePixelScroll',
                ],
                o =
                  'onwheel' in document || document.documentMode >= 9
                    ? ['wheel']
                    : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
                i = Array.prototype.slice;
              if (e.event.fixHooks)
                for (var s = r.length; s; )
                  e.event.fixHooks[r[--s]] = e.event.mouseHooks;
              var a = (e.event.special.mousewheel = {
                version: '3.1.12',
                setup: function () {
                  if (this.addEventListener)
                    for (var t = o.length; t; )
                      this.addEventListener(o[--t], u, !1);
                  else this.onmousewheel = u;
                  e.data(this, 'mousewheel-line-height', a.getLineHeight(this)),
                    e.data(
                      this,
                      'mousewheel-page-height',
                      a.getPageHeight(this),
                    );
                },
                teardown: function () {
                  if (this.removeEventListener)
                    for (var t = o.length; t; )
                      this.removeEventListener(o[--t], u, !1);
                  else this.onmousewheel = null;
                  e.removeData(this, 'mousewheel-line-height'),
                    e.removeData(this, 'mousewheel-page-height');
                },
                getLineHeight: function (t) {
                  var n = e(t),
                    r = n['offsetParent' in e.fn ? 'offsetParent' : 'parent']();
                  return (
                    r.length || (r = e('body')),
                    parseInt(r.css('fontSize'), 10) ||
                      parseInt(n.css('fontSize'), 10) ||
                      16
                  );
                },
                getPageHeight: function (t) {
                  return e(t).height();
                },
                settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
              });
              function u(r) {
                var o = r || window.event,
                  s = i.call(arguments, 1),
                  u = 0,
                  f = 0,
                  d = 0,
                  p = 0,
                  h = 0,
                  g = 0;
                if (
                  (((r = e.event.fix(o)).type = 'mousewheel'),
                  'detail' in o && (d = -1 * o.detail),
                  'wheelDelta' in o && (d = o.wheelDelta),
                  'wheelDeltaY' in o && (d = o.wheelDeltaY),
                  'wheelDeltaX' in o && (f = -1 * o.wheelDeltaX),
                  'axis' in o &&
                    o.axis === o.HORIZONTAL_AXIS &&
                    ((f = -1 * d), (d = 0)),
                  (u = 0 === d ? f : d),
                  'deltaY' in o && (u = d = -1 * o.deltaY),
                  'deltaX' in o && ((f = o.deltaX), 0 === d && (u = -1 * f)),
                  0 !== d || 0 !== f)
                ) {
                  if (1 === o.deltaMode) {
                    var v = e.data(this, 'mousewheel-line-height');
                    (u *= v), (d *= v), (f *= v);
                  } else if (2 === o.deltaMode) {
                    var m = e.data(this, 'mousewheel-page-height');
                    (u *= m), (d *= m), (f *= m);
                  }
                  if (
                    ((p = Math.max(Math.abs(d), Math.abs(f))),
                    (!n || p < n) && ((n = p), l(o, p) && (n /= 40)),
                    l(o, p) && ((u /= 40), (f /= 40), (d /= 40)),
                    (u = Math[u >= 1 ? 'floor' : 'ceil'](u / n)),
                    (f = Math[f >= 1 ? 'floor' : 'ceil'](f / n)),
                    (d = Math[d >= 1 ? 'floor' : 'ceil'](d / n)),
                    a.settings.normalizeOffset && this.getBoundingClientRect)
                  ) {
                    var y = this.getBoundingClientRect();
                    (h = r.clientX - y.left), (g = r.clientY - y.top);
                  }
                  return (
                    (r.deltaX = f),
                    (r.deltaY = d),
                    (r.deltaFactor = n),
                    (r.offsetX = h),
                    (r.offsetY = g),
                    (r.deltaMode = 0),
                    s.unshift(r, u, f, d),
                    t && clearTimeout(t),
                    (t = setTimeout(c, 200)),
                    (e.event.dispatch || e.event.handle).apply(this, s)
                  );
                }
              }
              function c() {
                n = null;
              }
              function l(e, t) {
                return (
                  a.settings.adjustOldDeltas &&
                  'mousewheel' === e.type &&
                  t % 120 == 0
                );
              }
              e.fn.extend({
                mousewheel: function (e) {
                  return e
                    ? this.bind('mousewheel', e)
                    : this.trigger('mousewheel');
                },
                unmousewheel: function (e) {
                  return this.unbind('mousewheel', e);
                },
              });
            })
              ? r.apply(t, o)
              : r) || (e.exports = i);
    },
    tB8R: function (e, t, n) {
      var r = n('vVR7');
      r(r.S, 'Number', { isInteger: n('Kc4g') });
    },
    'u52/': function (e, t) {
      e.exports = function (e) {
        try {
          return !!e();
        } catch (t) {
          return !0;
        }
      };
    },
    uBJQ: function (e, t, n) {
      var r = n('vVR7'),
        o = n('yFUn')(!0);
      r(r.S, 'Object', {
        entries: function (e) {
          return o(e);
        },
      });
    },
    udhc: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r,
        o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = n('Xs5p'),
        s = (r = i) && r.__esModule ? r : { default: r },
        a = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        })(n('lFip'));
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function c(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function l(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t,
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (function (e, t) {
                  for (
                    var n = Object.getOwnPropertyNames(t), r = 0;
                    r < n.length;
                    r++
                  ) {
                    var o = n[r],
                      i = Object.getOwnPropertyDescriptor(t, o);
                    i &&
                      i.configurable &&
                      void 0 === e[o] &&
                      Object.defineProperty(e, o, i);
                  }
                })(e, t));
      }
      var f = (function (e) {
        function t() {
          var n =
              arguments.length <= 0 || void 0 === arguments[0]
                ? {}
                : arguments[0],
            r =
              arguments.length <= 1 || void 0 === arguments[1]
                ? { ns: ['translation'], defaultNS: 'translation' }
                : arguments[1];
          u(this, t);
          var o = c(this, e.call(this));
          return (o.data = n), (o.options = r), o;
        }
        return (
          l(t, e),
          (t.prototype.addNamespaces = function (e) {
            this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
          }),
          (t.prototype.removeNamespaces = function (e) {
            var t = this.options.ns.indexOf(e);
            t > -1 && this.options.ns.splice(t, 1);
          }),
          (t.prototype.getResource = function (e, t, n) {
            var r =
                arguments.length <= 3 || void 0 === arguments[3]
                  ? {}
                  : arguments[3],
              o = r.keySeparator || this.options.keySeparator;
            void 0 === o && (o = '.');
            var i = [e, t];
            return (
              n && 'string' != typeof n && (i = i.concat(n)),
              n && 'string' == typeof n && (i = i.concat(o ? n.split(o) : n)),
              e.indexOf('.') > -1 && (i = e.split('.')),
              a.getPath(this.data, i)
            );
          }),
          (t.prototype.addResource = function (e, t, n, r) {
            var o =
                arguments.length <= 4 || void 0 === arguments[4]
                  ? { silent: !1 }
                  : arguments[4],
              i = this.options.keySeparator;
            void 0 === i && (i = '.');
            var s = [e, t];
            n && (s = s.concat(i ? n.split(i) : n)),
              e.indexOf('.') > -1 && ((r = t), (t = (s = e.split('.'))[1])),
              this.addNamespaces(t),
              a.setPath(this.data, s, r),
              o.silent || this.emit('added', e, t, n, r);
          }),
          (t.prototype.addResources = function (e, t, n) {
            for (var r in n)
              'string' == typeof n[r] &&
                this.addResource(e, t, r, n[r], { silent: !0 });
            this.emit('added', e, t, n);
          }),
          (t.prototype.addResourceBundle = function (e, t, n, r, i) {
            var s = [e, t];
            e.indexOf('.') > -1 &&
              ((r = n), (n = t), (t = (s = e.split('.'))[1])),
              this.addNamespaces(t);
            var u = a.getPath(this.data, s) || {};
            r ? a.deepExtend(u, n, i) : (u = o({}, u, n)),
              a.setPath(this.data, s, u),
              this.emit('added', e, t, n);
          }),
          (t.prototype.removeResourceBundle = function (e, t) {
            this.hasResourceBundle(e, t) && delete this.data[e][t],
              this.removeNamespaces(t),
              this.emit('removed', e, t);
          }),
          (t.prototype.hasResourceBundle = function (e, t) {
            return void 0 !== this.getResource(e, t);
          }),
          (t.prototype.getResourceBundle = function (e, t) {
            return (
              t || (t = this.options.defaultNS),
              'v1' === this.options.compatibilityAPI
                ? o({}, this.getResource(e, t))
                : this.getResource(e, t)
            );
          }),
          (t.prototype.toJSON = function () {
            return this.data;
          }),
          t
        );
      })(s.default);
      t.default = f;
    },
    utAV: function (e, t, n) {
      var r = n('zY5Q');
      e.exports = function (e, t) {
        if (!r(e) || e._t !== t)
          throw TypeError('Incompatible receiver, ' + t + ' required!');
        return e;
      };
    },
    vRGa: function (e, t) {
      t.f = {}.propertyIsEnumerable;
    },
    vVR7: function (e, t, n) {
      var r = n('KGgr'),
        o = n('5wX8'),
        i = n('khJW'),
        s = n('AZRH'),
        a = n('hvJ5'),
        u = function (e, t, n) {
          var c,
            l,
            f,
            d,
            p = e & u.F,
            h = e & u.G,
            g = e & u.S,
            v = e & u.P,
            m = e & u.B,
            y = h ? r : g ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
            b = h ? o : o[t] || (o[t] = {}),
            _ = b.prototype || (b.prototype = {});
          for (c in (h && (n = t), n))
            (f = ((l = !p && y && void 0 !== y[c]) ? y : n)[c]),
              (d =
                m && l
                  ? a(f, r)
                  : v && 'function' == typeof f
                  ? a(Function.call, f)
                  : f),
              y && s(y, c, f, e & u.U),
              b[c] != f && i(b, c, d),
              v && _[c] != f && (_[c] = f);
        };
      (r.core = o),
        (u.F = 1),
        (u.G = 2),
        (u.S = 4),
        (u.P = 8),
        (u.B = 16),
        (u.W = 32),
        (u.U = 64),
        (u.R = 128),
        (e.exports = u);
    },
    vcPO: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r,
        o = n('2gyY'),
        i = (r = o) && r.__esModule ? r : { default: r };
      t.default = i.default;
    },
    voXF: function (e, t, n) {
      'use strict';
      var r = n('OlM/'),
        o = n('JwWU'),
        i = n('V3uq'),
        s = n('6Ngl');
      (e.exports = n('Fu1i')(
        Array,
        'Array',
        function (e, t) {
          (this._t = s(e)), (this._i = 0), (this._k = t);
        },
        function () {
          var e = this._t,
            t = this._k,
            n = this._i++;
          return !e || n >= e.length
            ? ((this._t = void 0), o(1))
            : o(0, 'keys' == t ? n : 'values' == t ? e[n] : [n, e[n]]);
        },
        'values',
      )),
        (i.Arguments = i.Array),
        r('keys'),
        r('values'),
        r('entries');
    },
    'xL+S': function (e, t, n) {
      'use strict';
      var r = n('285N'),
        o = n('utAV');
      e.exports = n('0+LD')(
        'Set',
        function (e) {
          return function () {
            return e(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          add: function (e) {
            return r.def(o(this, 'Set'), (e = 0 === e ? 0 : e), e);
          },
        },
        r,
      );
    },
    xjCr: function (e, t, n) {
      var r = n('WJeB'),
        o = n('IbiK');
      e.exports =
        Object.keys ||
        function (e) {
          return r(e, o);
        };
    },
    yFUn: function (e, t, n) {
      var r = n('xjCr'),
        o = n('6Ngl'),
        i = n('vRGa').f;
      e.exports = function (e) {
        return function (t) {
          for (var n, s = o(t), a = r(s), u = a.length, c = 0, l = []; u > c; )
            i.call(s, (n = a[c++])) && l.push(e ? [n, s[n]] : s[n]);
          return l;
        };
      };
    },
    yLpj: function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function('return this')();
      } catch (r) {
        'object' == typeof window && (n = window);
      }
      e.exports = n;
    },
    yUtn: function (e, t) {
      e.exports = function (e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t,
        };
      };
    },
    ybEM: function (e, t, n) {
      'use strict';
      var r = n('KGgr'),
        o = n('gPPl'),
        i = n('nULH'),
        s = n('IXQl')('species');
      e.exports = function (e) {
        var t = r[e];
        i &&
          t &&
          !t[s] &&
          o.f(t, s, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    yyyB: function (e, t, n) {
      var r = n('vVR7'),
        o = n('KGgr').isFinite;
      r(r.S, 'Number', {
        isFinite: function (e) {
          return 'number' == typeof e && o(e);
        },
      });
    },
    zP2l: function (e, t, n) {
      var r = n('IXQl')('iterator'),
        o = !1;
      try {
        var i = [7][r]();
        (i.return = function () {
          o = !0;
        }),
          Array.from(i, function () {
            throw 2;
          });
      } catch (s) {}
      e.exports = function (e, t) {
        if (!t && !o) return !1;
        var n = !1;
        try {
          var i = [7],
            a = i[r]();
          (a.next = function () {
            return { done: (n = !0) };
          }),
            (i[r] = function () {
              return a;
            }),
            e(i);
        } catch (s) {}
        return n;
      };
    },
    zY5Q: function (e, t) {
      e.exports = function (e) {
        return 'object' == typeof e ? null !== e : 'function' == typeof e;
      };
    },
  },
]);
