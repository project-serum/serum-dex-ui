(window.webpackJsonp = window.webpackJsonp || []).push([
  ['vendors'],
  {
    '/82Z': function (e, t, n) {
      var r, i, o;
      (i = [n('P5fv'), n('Qwlt')]),
        void 0 ===
          (o =
            'function' ==
            typeof (r = function (e) {
              var t,
                n = e;
              return (
                (e.effects = { effect: {} }),
                (function (e, t) {
                  var n,
                    r = /^([\-+])=\s*(\d+\.?\d*)/,
                    i = [
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
                    o = (e.Color = function (t, n, r, i) {
                      return new e.Color.fn.parse(t, n, r, i);
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
                    u = (o.support = {}),
                    l = e('<p>')[0],
                    c = e.each;
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
                    var r = o(),
                      a = (r._rgba = []);
                    return (
                      (t = t.toLowerCase()),
                      c(i, function (e, n) {
                        var i,
                          o = n.re.exec(t),
                          u = o && n.parse(o),
                          l = n.space || 'rgba';
                        if (u)
                          return (
                            (i = r[l](u)),
                            (r[s[l].cache] = i[s[l].cache]),
                            (a = r._rgba = i._rgba),
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
                  (l.style.cssText = 'background-color:rgba(1,1,1,.5)'),
                    (u.rgba = l.style.backgroundColor.indexOf('rgba') > -1),
                    c(s, function (e, t) {
                      (t.cache = '_' + e),
                        (t.props.alpha = { idx: 3, type: 'percent', def: 1 });
                    }),
                    (o.fn = e.extend(o.prototype, {
                      parse: function (t, r, i, a) {
                        if (void 0 === t)
                          return (this._rgba = [null, null, null, null]), this;
                        (t.jquery || t.nodeType) &&
                          ((t = e(t).css(r)), (r = void 0));
                        var u = this,
                          l = e.type(t),
                          p = (this._rgba = []);
                        return (
                          void 0 !== r && ((t = [t, r, i, a]), (l = 'array')),
                          'string' === l
                            ? this.parse(d(t) || n._default)
                            : 'array' === l
                            ? (c(s.rgba.props, function (e, n) {
                                p[n.idx] = f(t[n.idx], n);
                              }),
                              this)
                            : 'object' === l
                            ? (c(
                                s,
                                t instanceof o
                                  ? function (e, n) {
                                      t[n.cache] &&
                                        (u[n.cache] = t[n.cache].slice());
                                    }
                                  : function (n, r) {
                                      var i = r.cache;
                                      c(r.props, function (e, n) {
                                        if (!u[i] && r.to) {
                                          if ('alpha' === e || null == t[e])
                                            return;
                                          u[i] = r.to(u._rgba);
                                        }
                                        u[i][n.idx] = f(t[e], n, !0);
                                      }),
                                        u[i] &&
                                          e.inArray(null, u[i].slice(0, 3)) <
                                            0 &&
                                          ((u[i][3] = 1),
                                          r.from && (u._rgba = r.from(u[i])));
                                    },
                              ),
                              this)
                            : void 0
                        );
                      },
                      is: function (e) {
                        var t = o(e),
                          n = !0,
                          r = this;
                        return (
                          c(s, function (e, i) {
                            var o,
                              s = t[i.cache];
                            return (
                              s &&
                                ((o =
                                  r[i.cache] || (i.to && i.to(r._rgba)) || []),
                                c(i.props, function (e, t) {
                                  if (null != s[t.idx])
                                    return (n = s[t.idx] === o[t.idx]);
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
                          c(s, function (n, r) {
                            t[r.cache] && e.push(n);
                          }),
                          e.pop()
                        );
                      },
                      transition: function (e, t) {
                        var n = o(e),
                          r = n._space(),
                          i = s[r],
                          u = 0 === this.alpha() ? o('transparent') : this,
                          l = u[i.cache] || i.to(u._rgba),
                          d = l.slice();
                        return (
                          (n = n[i.cache]),
                          c(i.props, function (e, r) {
                            var i = r.idx,
                              o = l[i],
                              s = n[i],
                              u = a[r.type] || {};
                            null !== s &&
                              (null === o
                                ? (d[i] = s)
                                : (u.mod &&
                                    (s - o > u.mod / 2
                                      ? (o += u.mod)
                                      : o - s > u.mod / 2 && (o -= u.mod)),
                                  (d[i] = f((s - o) * t + o, r))));
                          }),
                          this[r](d)
                        );
                      },
                      blend: function (t) {
                        if (1 === this._rgba[3]) return this;
                        var n = this._rgba.slice(),
                          r = n.pop(),
                          i = o(t)._rgba;
                        return o(
                          e.map(n, function (e, t) {
                            return (1 - r) * i[t] + r * e;
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
                    (o.fn.parse.prototype = o.fn),
                    (s.hsla.to = function (e) {
                      if (null == e[0] || null == e[1] || null == e[2])
                        return [null, null, null, e[3]];
                      var t,
                        n,
                        r = e[0] / 255,
                        i = e[1] / 255,
                        o = e[2] / 255,
                        s = e[3],
                        a = Math.max(r, i, o),
                        u = Math.min(r, i, o),
                        l = a - u,
                        c = a + u,
                        f = 0.5 * c;
                      return (
                        (t =
                          u === a
                            ? 0
                            : r === a
                            ? (60 * (i - o)) / l + 360
                            : i === a
                            ? (60 * (o - r)) / l + 120
                            : (60 * (r - i)) / l + 240),
                        (n = 0 === l ? 0 : f <= 0.5 ? l / c : l / (2 - c)),
                        [Math.round(t) % 360, n, f, null == s ? 1 : s]
                      );
                    }),
                    (s.hsla.from = function (e) {
                      if (null == e[0] || null == e[1] || null == e[2])
                        return [null, null, null, e[3]];
                      var t = e[0] / 360,
                        n = e[1],
                        r = e[2],
                        i = e[3],
                        o = r <= 0.5 ? r * (1 + n) : r + n - r * n,
                        s = 2 * r - o;
                      return [
                        Math.round(255 * p(s, o, t + 1 / 3)),
                        Math.round(255 * p(s, o, t)),
                        Math.round(255 * p(s, o, t - 1 / 3)),
                        i,
                      ];
                    }),
                    c(s, function (t, n) {
                      var i = n.props,
                        s = n.cache,
                        a = n.to,
                        u = n.from;
                      (o.fn[t] = function (t) {
                        if (
                          (a && !this[s] && (this[s] = a(this._rgba)),
                          void 0 === t)
                        )
                          return this[s].slice();
                        var n,
                          r = e.type(t),
                          l = 'array' === r || 'object' === r ? t : arguments,
                          d = this[s].slice();
                        return (
                          c(i, function (e, t) {
                            var n = l['object' === r ? e : t.idx];
                            null == n && (n = d[t.idx]), (d[t.idx] = f(n, t));
                          }),
                          u ? (((n = o(u(d)))[s] = d), n) : o(d)
                        );
                      }),
                        c(i, function (n, i) {
                          o.fn[n] ||
                            (o.fn[n] = function (o) {
                              var s,
                                a = e.type(o),
                                u =
                                  'alpha' === n
                                    ? this._hsla
                                      ? 'hsla'
                                      : 'rgba'
                                    : t,
                                l = this[u](),
                                c = l[i.idx];
                              return 'undefined' === a
                                ? c
                                : ('function' === a &&
                                    ((o = o.call(this, c)), (a = e.type(o))),
                                  null == o && i.empty
                                    ? this
                                    : ('string' === a &&
                                        (s = r.exec(o)) &&
                                        (o =
                                          c +
                                          parseFloat(s[2]) *
                                            ('+' === s[1] ? 1 : -1)),
                                      (l[i.idx] = o),
                                      this[u](l)));
                            });
                        });
                    }),
                    (o.hook = function (t) {
                      var n = t.split(' ');
                      c(n, function (t, n) {
                        (e.cssHooks[n] = {
                          set: function (t, r) {
                            var i,
                              s,
                              a = '';
                            if (
                              'transparent' !== r &&
                              ('string' !== e.type(r) || (i = d(r)))
                            ) {
                              if (
                                ((r = o(i || r)), !u.rgba && 1 !== r._rgba[3])
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
                                  } catch (l) {}
                                r = r.blend(
                                  a && 'transparent' !== a ? a : '_default',
                                );
                              }
                              r = r.toRgbaString();
                            }
                            try {
                              t.style[n] = r;
                            } catch (l) {}
                          },
                        }),
                          (e.fx.step[n] = function (t) {
                            t.colorInit ||
                              ((t.start = o(t.elem, n)),
                              (t.end = o(t.end)),
                              (t.colorInit = !0)),
                              e.cssHooks[n].set(
                                t.elem,
                                t.start.transition(t.end, t.pos),
                              );
                          });
                      });
                    }),
                    o.hook(
                      'backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor',
                    ),
                    (e.cssHooks.borderColor = {
                      expand: function (e) {
                        var t = {};
                        return (
                          c(
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
                    i = {
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
                  function o(t) {
                    var n,
                      r,
                      i = t.ownerDocument.defaultView
                        ? t.ownerDocument.defaultView.getComputedStyle(t, null)
                        : t.currentStyle,
                      o = {};
                    if (i && i.length && i[0] && i[i[0]])
                      for (r = i.length; r--; )
                        'string' == typeof i[(n = i[r])] &&
                          (o[e.camelCase(n)] = i[n]);
                    else for (n in i) 'string' == typeof i[n] && (o[n] = i[n]);
                    return o;
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
                          l = u.children ? s.find('*').addBack() : s;
                        (l = l.map(function () {
                          return { el: e(this), start: o(this) };
                        })),
                          (n = function () {
                            e.each(r, function (e, n) {
                              t[n] && s[n + 'Class'](t[n]);
                            });
                          })(),
                          (l = l.map(function () {
                            return (
                              (this.end = o(this.el[0])),
                              (this.diff = (function (t, n) {
                                var r,
                                  o,
                                  s = {};
                                for (r in n)
                                  (o = n[r]),
                                    t[r] !== o &&
                                      (i[r] ||
                                        (!e.fx.step[r] &&
                                          isNaN(parseFloat(o))) ||
                                        (s[r] = o));
                                return s;
                              })(this.start, this.end)),
                              this
                            );
                          })),
                          s.attr('class', a),
                          (l = l.map(function () {
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
                          e.when.apply(e, l.get()).done(function () {
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
                        function (n, r, i, o) {
                          return r
                            ? e.effects.animateClass.call(
                                this,
                                { add: n },
                                r,
                                i,
                                o,
                              )
                            : t.apply(this, arguments);
                        }),
                      removeClass: (function (t) {
                        return function (n, r, i, o) {
                          return arguments.length > 1
                            ? e.effects.animateClass.call(
                                this,
                                { remove: n },
                                r,
                                i,
                                o,
                              )
                            : t.apply(this, arguments);
                        };
                      })(e.fn.removeClass),
                      toggleClass: (function (t) {
                        return function (n, r, i, o, s) {
                          return 'boolean' == typeof r || void 0 === r
                            ? i
                              ? e.effects.animateClass.call(
                                  this,
                                  r ? { add: n } : { remove: n },
                                  i,
                                  o,
                                  s,
                                )
                              : t.apply(this, arguments)
                            : e.effects.animateClass.call(
                                this,
                                { toggle: n },
                                r,
                                i,
                                o,
                              );
                        };
                      })(e.fn.toggleClass),
                      switchClass: function (t, n, r, i, o) {
                        return e.effects.animateClass.call(
                          this,
                          { add: n, remove: t },
                          r,
                          i,
                          o,
                        );
                      },
                    });
                })(),
                (function () {
                  var t;
                  function n(t, n, r, i) {
                    return (
                      e.isPlainObject(t) && ((n = t), (t = t.effect)),
                      (t = { effect: t }),
                      null == n && (n = {}),
                      e.isFunction(n) && ((i = n), (r = null), (n = {})),
                      ('number' == typeof n || e.fx.speeds[n]) &&
                        ((i = r), (r = n), (n = {})),
                      e.isFunction(r) && ((i = r), (r = null)),
                      n && e.extend(t, n),
                      (r = r || n.duration),
                      (t.duration = e.fx.off
                        ? 0
                        : 'number' == typeof r
                        ? r
                        : r in e.fx.speeds
                        ? e.fx.speeds[r]
                        : e.fx.speeds._default),
                      (t.complete = i || n.complete),
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
                  function i(e, t) {
                    var n = t.outerWidth(),
                      r = t.outerHeight(),
                      i = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(
                        e,
                      ) || ['', 0, n, r, 0];
                    return {
                      top: parseFloat(i[1]) || 0,
                      right: 'auto' === i[2] ? n : parseFloat(i[2]),
                      bottom: 'auto' === i[3] ? r : parseFloat(i[3]),
                      left: parseFloat(i[4]) || 0,
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
                          for (var n, r = 0, i = t.length; r < i; r++)
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
                            i = { width: t.width(), height: t.height() },
                            o = document.activeElement;
                          try {
                            o.id;
                          } catch (s) {
                            o = document.body;
                          }
                          return (
                            t.wrap(r),
                            (t[0] === o || e.contains(t[0], o)) &&
                              e(o).trigger('focus'),
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
                            t.css(i),
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
                          i = 'vertical' !== n ? (t || 100) / 100 : 1;
                        return {
                          height: e.height() * i,
                          width: e.width() * r,
                          outerHeight: e.outerHeight() * i,
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
                          i = t.position();
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
                          t.css({ position: r, left: i.left, top: i.top }),
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
                      setTransition: function (t, n, r, i) {
                        return (
                          (i = i || {}),
                          e.each(n, function (e, n) {
                            var o = t.cssUnit(n);
                            o[0] > 0 && (i[n] = o[0] * r + o[1]);
                          }),
                          i
                        );
                      },
                    }),
                    e.fn.extend({
                      effect: function () {
                        var t = n.apply(this, arguments),
                          r = e.effects.effect[t.effect],
                          i = r.mode,
                          o = t.queue,
                          s = o || 'fx',
                          a = t.complete,
                          u = t.mode,
                          l = [],
                          c = function (t) {
                            var n = e(this),
                              r = e.effects.mode(n, u) || i;
                            n.data('ui-effects-animated', !0),
                              l.push(r),
                              i &&
                                ('show' === r || (r === i && 'hide' === r)) &&
                                n.show(),
                              (i && 'none' === r) || e.effects.saveStyle(n),
                              e.isFunction(t) && t();
                          };
                        if (e.fx.off || !r)
                          return u
                            ? this[u](t.duration, a)
                            : this.each(function () {
                                a && a.call(this);
                              });
                        function f(n) {
                          var o = e(this);
                          function s() {
                            e.isFunction(a) && a.call(o[0]),
                              e.isFunction(n) && n();
                          }
                          (t.mode = l.shift()),
                            !1 === e.uiBackCompat || i
                              ? 'none' === t.mode
                                ? (o[u](), s())
                                : r.call(o[0], t, function () {
                                    o.removeData('ui-effects-animated'),
                                      e.effects.cleanUp(o),
                                      'hide' === t.mode && o.hide(),
                                      s();
                                  })
                              : (o.is(':hidden') ? 'hide' === u : 'show' === u)
                              ? (o[u](), s())
                              : r.call(o[0], t, s);
                        }
                        return !1 === o
                          ? this.each(c).each(f)
                          : this.queue(s, c).queue(s, f);
                      },
                      show: (function (e) {
                        return function (t) {
                          if (r(t)) return e.apply(this, arguments);
                          var i = n.apply(this, arguments);
                          return (i.mode = 'show'), this.effect.call(this, i);
                        };
                      })(e.fn.show),
                      hide: (function (e) {
                        return function (t) {
                          if (r(t)) return e.apply(this, arguments);
                          var i = n.apply(this, arguments);
                          return (i.mode = 'hide'), this.effect.call(this, i);
                        };
                      })(e.fn.hide),
                      toggle: (function (e) {
                        return function (t) {
                          if (r(t) || 'boolean' == typeof t)
                            return e.apply(this, arguments);
                          var i = n.apply(this, arguments);
                          return (i.mode = 'toggle'), this.effect.call(this, i);
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
                          : i(this.css('clip'), this);
                      },
                      transfer: function (t, n) {
                        var r = e(this),
                          i = e(t.to),
                          o = 'fixed' === i.css('position'),
                          s = e('body'),
                          a = o ? s.scrollTop() : 0,
                          u = o ? s.scrollLeft() : 0,
                          l = i.offset(),
                          c = {
                            top: l.top - a,
                            left: l.left - u,
                            height: i.innerHeight(),
                            width: i.innerWidth(),
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
                              position: o ? 'fixed' : 'absolute',
                            })
                            .animate(c, t.duration, t.easing, function () {
                              d.remove(), e.isFunction(n) && n();
                            });
                      },
                    }),
                    (e.fx.step.clip = function (t) {
                      t.clipInit ||
                        ((t.start = e(t.elem).cssClip()),
                        'string' == typeof t.end && (t.end = i(t.end, t.elem)),
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
              ? r.apply(t, i)
              : r) || (e.exports = o);
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
        i = n('yUtn'),
        o = n('6Ngl'),
        s = n('YN/q'),
        a = n('isQe'),
        u = n('O6f/'),
        l = Object.getOwnPropertyDescriptor;
      t.f = n('nULH')
        ? l
        : function (e, t) {
            if (((e = o(e)), (t = s(t, !0)), u))
              try {
                return l(e, t);
              } catch (n) {}
            if (a(e, t)) return i(!r.f.call(e, t), e[t]);
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
      function i(e) {
        if ('string' != typeof e)
          throw new Error('string cannot be undefined or null');
        for (var t = [], n = 0, r = 0; n < e.length; )
          l(e[n + (r += o(n + r, e))]) && r++,
            a(e[n + r]) && r++,
            u(e[n + r]) && r++,
            c(e[n + r])
              ? r++
              : (t.push(e.substring(n, n + r)), (n += r), (r = 0));
        return t;
      }
      function o(e, t) {
        var n = t[e];
        if (
          !(function (e) {
            return e && d(e[0].charCodeAt(0), 55296, 56319);
          })(n) ||
          e === t.length - 1
        )
          return 1;
        var r = n + t[e + 1],
          i = t.substring(e + 2, e + 5);
        return (s(r) && s(i)) ||
          (function (e) {
            return d(f(e), 127995, 127999);
          })(i)
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
      function l(e) {
        return 'string' == typeof e && -1 !== r.indexOf(e.charCodeAt(0));
      }
      function c(e) {
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
      (e.exports = i),
        (e.exports.substr = function (e, t, n) {
          var r = i(e);
          if (void 0 === t) return e;
          if (t >= r.length) return '';
          var o = r.length - t,
            s = t + (void 0 === n ? o : n);
          return s > t + o && (s = void 0), r.slice(t, s).join('');
        });
    },
    '0+LD': function (e, t, n) {
      'use strict';
      var r = n('KGgr'),
        i = n('vVR7'),
        o = n('AZRH'),
        s = n('OHC2'),
        a = n('PAQY'),
        u = n('BMTb'),
        l = n('OKbE'),
        c = n('zY5Q'),
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
          k = function (e) {
            var t = w[e];
            o(
              w,
              e,
              'delete' == e || 'has' == e
                ? function (e) {
                    return !(m && !c(e)) && t.call(this, 0 === e ? 0 : e);
                  }
                : 'get' == e
                ? function (e) {
                    return m && !c(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
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
          var S = new b(),
            E = S[_](m ? {} : -0, 1) != S,
            T = f(function () {
              S.has(1);
            }),
            C = d(function (e) {
              new b(e);
            }),
            N =
              !m &&
              f(function () {
                for (var e = new b(), t = 5; t--; ) e[_](t, t);
                return !e.has(-0);
              });
          C ||
            (((b = t(function (t, n) {
              l(t, b, e);
              var r = h(new y(), t, b);
              return null != n && u(n, v, r[_], r), r;
            })).prototype = w),
            (w.constructor = b)),
            (T || N) && (k('delete'), k('has'), v && k('get')),
            (N || E) && k(_),
            m && w.clear && delete w.clear;
        } else
          (b = g.getConstructor(t, e, v, _)), s(b.prototype, n), (a.NEED = !0);
        return (
          p(b, e),
          (x[e] = b),
          i(i.G + i.W + i.F * (b != y), x),
          m || g.setStrong(b, e, v),
          b
        );
      };
    },
    '04I0': function (e, t, n) {
      var r = n('vVR7'),
        i = n('Kc4g'),
        o = Math.abs;
      r(r.S, 'Number', {
        isSafeInteger: function (e) {
          return i(e) && o(e) <= 9007199254740991;
        },
      });
    },
    '12Jd': function (e, t, n) {
      var r = n('xjCr'),
        i = n('PPId'),
        o = n('vRGa');
      e.exports = function (e) {
        var t = r(e),
          n = i.f;
        if (n)
          for (var s, a = n(e), u = o.f, l = 0; a.length > l; )
            u.call(e, (s = a[l++])) && t.push(s);
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
        i = n('zY5Q'),
        o = n('UyYM');
      e.exports = function (e, t) {
        if ((r(e), i(t) && t.constructor === e)) return t;
        var n = o.f(e);
        return (0, n.resolve)(t), n.promise;
      };
    },
    '18Fm': function (e, t, n) {
      'use strict';
      var r = n('XSq2'),
        i = n('VgLE'),
        o = n('bSmq');
      e.exports = function (e) {
        for (
          var t = r(this),
            n = o(t.length),
            s = arguments.length,
            a = i(s > 1 ? arguments[1] : void 0, n),
            u = s > 2 ? arguments[2] : void 0,
            l = void 0 === u ? n : i(u, n);
          l > a;

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
          var i = e(),
            o = n + '.' + r + '-special-event';
          function s(t) {
            e(i).each(function () {
              var n = e(this);
              this === t.target ||
                n.has(t.target).length ||
                n.triggerHandler(r, [t.target]);
            });
          }
          e.event.special[r] = {
            setup: function () {
              delete (i = i.add(this)).prevObject,
                1 === i.length && e(t).bind(o, s);
            },
            teardown: function () {
              delete (i = i.not(this)).prevObject,
                0 === i.length && e(t).unbind(o);
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
        i = n('VgLE'),
        o = String.fromCharCode,
        s = String.fromCodePoint;
      r(r.S + r.F * (!!s && 1 != s.length), 'String', {
        fromCodePoint: function (e) {
          for (var t, n = [], r = arguments.length, s = 0; r > s; ) {
            if (((t = +arguments[s++]), i(t, 1114111) !== t))
              throw RangeError(t + ' is not a valid code point');
            n.push(
              t < 65536
                ? o(t)
                : o(55296 + ((t -= 65536) >> 10), (t % 1024) + 56320),
            );
          }
          return n.join('');
        },
      });
    },
    '285N': function (e, t, n) {
      'use strict';
      var r = n('gPPl').f,
        i = n('Vrag'),
        o = n('OHC2'),
        s = n('hvJ5'),
        a = n('OKbE'),
        u = n('BMTb'),
        l = n('Fu1i'),
        c = n('JwWU'),
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
        getConstructor: function (e, t, n, l) {
          var c = e(function (e, r) {
            a(e, c, t, '_i'),
              (e._t = t),
              (e._i = i(null)),
              (e._f = void 0),
              (e._l = void 0),
              (e[g] = 0),
              null != r && u(r, n, e[l], e);
          });
          return (
            o(c.prototype, {
              clear: function () {
                for (var e = h(this, t), n = e._i, r = e._f; r; r = r.n)
                  (r.r = !0), r.p && (r.p = r.p.n = void 0), delete n[r.i];
                (e._f = e._l = void 0), (e[g] = 0);
              },
              delete: function (e) {
                var n = h(this, t),
                  r = v(n, e);
                if (r) {
                  var i = r.n,
                    o = r.p;
                  delete n._i[r.i],
                    (r.r = !0),
                    o && (o.n = i),
                    i && (i.p = o),
                    n._f == r && (n._f = i),
                    n._l == r && (n._l = o),
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
              r(c.prototype, 'size', {
                get: function () {
                  return h(this, t)[g];
                },
              }),
            c
          );
        },
        def: function (e, t, n) {
          var r,
            i,
            o = v(e, t);
          return (
            o
              ? (o.v = n)
              : ((e._l = o = {
                  i: (i = p(t, !0)),
                  k: t,
                  v: n,
                  p: (r = e._l),
                  n: void 0,
                  r: !1,
                }),
                e._f || (e._f = o),
                r && (r.n = o),
                e[g]++,
                'F' !== i && (e._i[i] = o)),
            e
          );
        },
        getEntry: v,
        setStrong: function (e, t, n) {
          l(
            e,
            t,
            function (e, n) {
              (this._t = h(e, t)), (this._k = n), (this._l = void 0);
            },
            function () {
              for (var e = this._k, t = this._l; t && t.r; ) t = t.p;
              return this._t && (this._l = t = t ? t.n : this._t._f)
                ? c(0, 'keys' == e ? t.k : 'values' == e ? t.v : [t.k, t.v])
                : ((this._t = void 0), c(1));
            },
            n ? 'entries' : 'values',
            !n,
            !0,
          ),
            f(t);
        },
      };
    },
    '32f0': function (e, t, n) {
      var r, i, o;
      (i = [n('P5fv')]),
        void 0 ===
          (o =
            'function' ==
            typeof (r = function (e) {
              var t = /\+/g;
              function n(e) {
                return o.raw ? e : encodeURIComponent(e);
              }
              function r(e) {
                return n(o.json ? JSON.stringify(e) : String(e));
              }
              function i(n, r) {
                var i = o.raw
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
                          o.json ? JSON.parse(e) : e
                        );
                      } catch (n) {}
                    })(n);
                return e.isFunction(r) ? r(i) : i;
              }
              var o = (e.cookie = function (t, s, a) {
                if (void 0 !== s && !e.isFunction(s)) {
                  if (
                    'number' == typeof (a = e.extend({}, o.defaults, a)).expires
                  ) {
                    var u = a.expires,
                      l = (a.expires = new Date());
                    l.setTime(+l + 864e5 * u);
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
                  var c,
                    f = t ? void 0 : {},
                    d = document.cookie ? document.cookie.split('; ') : [],
                    p = 0,
                    h = d.length;
                  p < h;
                  p++
                ) {
                  var g = d[p].split('='),
                    v = ((c = g.shift()), o.raw ? c : decodeURIComponent(c)),
                    m = g.join('=');
                  if (t && t === v) {
                    f = i(m, s);
                    break;
                  }
                  t || void 0 === (m = i(m)) || (f[v] = m);
                }
                return f;
              });
              (o.defaults = {}),
                (e.removeCookie = function (t, n) {
                  return (
                    void 0 !== e.cookie(t) &&
                    (e.cookie(t, '', e.extend({}, n, { expires: -1 })),
                    !e.cookie(t))
                  );
                });
            })
              ? r.apply(t, i)
              : r) || (e.exports = o);
    },
    '4Dbv': function (e, t, n) {
      'use strict';
      var r,
        i,
        o,
        s,
        a = n('SwRI'),
        u = n('KGgr'),
        l = n('hvJ5'),
        c = n('IxbO'),
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
        k = u.TypeError,
        S = u.process,
        E = S && S.versions,
        T = (E && E.v8) || '',
        C = u.Promise,
        N = 'process' == c(S),
        O = function () {},
        j = (i = b.f),
        L = !!(function () {
          try {
            var e = C.resolve(1),
              t = ((e.constructor = {})[n('IXQl')('species')] = function (e) {
                e(O, O);
              });
            return (
              (N || 'function' == typeof PromiseRejectionEvent) &&
              e.then(O) instanceof t &&
              0 !== T.indexOf('6.6') &&
              -1 === w.indexOf('Chrome/66')
            );
          } catch (r) {}
        })(),
        A = function (e) {
          var t;
          return !(!d(e) || 'function' != typeof (t = e.then)) && t;
        },
        P = function (e, t) {
          if (!e._n) {
            e._n = !0;
            var n = e._c;
            y(function () {
              for (
                var r = e._v,
                  i = 1 == e._s,
                  o = 0,
                  s = function (t) {
                    var n,
                      o,
                      s,
                      a = i ? t.ok : t.fail,
                      u = t.resolve,
                      l = t.reject,
                      c = t.domain;
                    try {
                      a
                        ? (i || (2 == e._h && R(e), (e._h = 1)),
                          !0 === a
                            ? (n = r)
                            : (c && c.enter(),
                              (n = a(r)),
                              c && (c.exit(), (s = !0))),
                          n === t.promise
                            ? l(k('Promise-chain cycle'))
                            : (o = A(n))
                            ? o.call(n, u, l)
                            : u(n))
                        : l(r);
                    } catch (f) {
                      c && !s && c.exit(), l(f);
                    }
                  };
                n.length > o;

              )
                s(n[o++]);
              (e._c = []), (e._n = !1), t && !e._h && F(e);
            });
          }
        },
        F = function (e) {
          m.call(u, function () {
            var t,
              n,
              r,
              i = e._v,
              o = D(e);
            if (
              (o &&
                ((t = _(function () {
                  N
                    ? S.emit('unhandledRejection', i, e)
                    : (n = u.onunhandledrejection)
                    ? n({ promise: e, reason: i })
                    : (r = u.console) &&
                      r.error &&
                      r.error('Unhandled promise rejection', i);
                })),
                (e._h = N || D(e) ? 2 : 1)),
              (e._a = void 0),
              o && t.e)
            )
              throw t.v;
          });
        },
        D = function (e) {
          return 1 !== e._h && 0 === (e._a || e._c).length;
        },
        R = function (e) {
          m.call(u, function () {
            var t;
            N
              ? S.emit('rejectionHandled', e)
              : (t = u.onrejectionhandled) && t({ promise: e, reason: e._v });
          });
        },
        M = function (e) {
          var t = this;
          t._d ||
            ((t._d = !0),
            ((t = t._w || t)._v = e),
            (t._s = 2),
            t._a || (t._a = t._c.slice()),
            P(t, !0));
        },
        I = function (e) {
          var t,
            n = this;
          if (!n._d) {
            (n._d = !0), (n = n._w || n);
            try {
              if (n === e) throw k("Promise can't be resolved itself");
              (t = A(e))
                ? y(function () {
                    var r = { _w: n, _d: !1 };
                    try {
                      t.call(e, l(I, r, 1), l(M, r, 1));
                    } catch (i) {
                      M.call(r, i);
                    }
                  })
                : ((n._v = e), (n._s = 1), P(n, !1));
            } catch (r) {
              M.call({ _w: n, _d: !1 }, r);
            }
          }
        };
      L ||
        ((C = function (e) {
          h(this, C, 'Promise', '_h'), p(e), r.call(this);
          try {
            e(l(I, this, 1), l(M, this, 1));
          } catch (t) {
            M.call(this, t);
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
        }).prototype = n('OHC2')(C.prototype, {
          then: function (e, t) {
            var n = j(v(this, C));
            return (
              (n.ok = 'function' != typeof e || e),
              (n.fail = 'function' == typeof t && t),
              (n.domain = N ? S.domain : void 0),
              this._c.push(n),
              this._a && this._a.push(n),
              this._s && P(this, !1),
              n.promise
            );
          },
          catch: function (e) {
            return this.then(void 0, e);
          },
        })),
        (o = function () {
          var e = new r();
          (this.promise = e),
            (this.resolve = l(I, e, 1)),
            (this.reject = l(M, e, 1));
        }),
        (b.f = j = function (e) {
          return e === C || e === s ? new o(e) : i(e);
        })),
        f(f.G + f.W + f.F * !L, { Promise: C }),
        n('AuAe')(C, 'Promise'),
        n('ybEM')('Promise'),
        (s = n('5wX8').Promise),
        f(f.S + f.F * !L, 'Promise', {
          reject: function (e) {
            var t = j(this);
            return (0, t.reject)(e), t.promise;
          },
        }),
        f(f.S + f.F * (a || !L), 'Promise', {
          resolve: function (e) {
            return x(a && this === s ? C : this, e);
          },
        }),
        f(
          f.S +
            f.F *
              !(
                L &&
                n('zP2l')(function (e) {
                  C.all(e).catch(O);
                })
              ),
          'Promise',
          {
            all: function (e) {
              var t = this,
                n = j(t),
                r = n.resolve,
                i = n.reject,
                o = _(function () {
                  var n = [],
                    o = 0,
                    s = 1;
                  g(e, !1, function (e) {
                    var a = o++,
                      u = !1;
                    n.push(void 0),
                      s++,
                      t.resolve(e).then(function (e) {
                        u || ((u = !0), (n[a] = e), --s || r(n));
                      }, i);
                  }),
                    --s || r(n);
                });
              return o.e && i(o.v), n.promise;
            },
            race: function (e) {
              var t = this,
                n = j(t),
                r = n.reject,
                i = _(function () {
                  g(e, !1, function (e) {
                    t.resolve(e).then(n.resolve, r);
                  });
                });
              return i.e && r(i.v), n.promise;
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
        function i() {}
        var o = i.prototype,
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
        (o.getListeners = function (e) {
          var t,
            n,
            r = this._getEvents();
          if (e instanceof RegExp)
            for (n in ((t = {}), r))
              r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n]);
          else t = r[e] || (r[e] = []);
          return t;
        }),
          (o.flattenListeners = function (e) {
            var t,
              n = [];
            for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
            return n;
          }),
          (o.getListenersAsObject = function (e) {
            var t,
              n = this.getListeners(e);
            return n instanceof Array && ((t = {})[e] = n), t || n;
          }),
          (o.addListener = function (e, t) {
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
              i = 'object' == typeof t;
            for (n in r)
              r.hasOwnProperty(n) &&
                -1 === a(r[n], t) &&
                r[n].push(i ? t : { listener: t, once: !1 });
            return this;
          }),
          (o.on = u('addListener')),
          (o.addOnceListener = function (e, t) {
            return this.addListener(e, { listener: t, once: !0 });
          }),
          (o.once = u('addOnceListener')),
          (o.defineEvent = function (e) {
            return this.getListeners(e), this;
          }),
          (o.defineEvents = function (e) {
            for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
            return this;
          }),
          (o.removeListener = function (e, t) {
            var n,
              r,
              i = this.getListenersAsObject(e);
            for (r in i)
              i.hasOwnProperty(r) &&
                -1 !== (n = a(i[r], t)) &&
                i[r].splice(n, 1);
            return this;
          }),
          (o.off = u('removeListener')),
          (o.addListeners = function (e, t) {
            return this.manipulateListeners(!1, e, t);
          }),
          (o.removeListeners = function (e, t) {
            return this.manipulateListeners(!0, e, t);
          }),
          (o.manipulateListeners = function (e, t, n) {
            var r,
              i,
              o = e ? this.removeListener : this.addListener,
              s = e ? this.removeListeners : this.addListeners;
            if ('object' != typeof t || t instanceof RegExp)
              for (r = n.length; r--; ) o.call(this, t, n[r]);
            else
              for (r in t)
                t.hasOwnProperty(r) &&
                  (i = t[r]) &&
                  ('function' == typeof i
                    ? o.call(this, r, i)
                    : s.call(this, r, i));
            return this;
          }),
          (o.removeEvent = function (e) {
            var t,
              n = typeof e,
              r = this._getEvents();
            if ('string' === n) delete r[e];
            else if (e instanceof RegExp)
              for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t];
            else delete this._events;
            return this;
          }),
          (o.removeAllListeners = u('removeEvent')),
          (o.emitEvent = function (e, t) {
            var n,
              r,
              i,
              o,
              s = this.getListenersAsObject(e);
            for (o in s)
              if (s.hasOwnProperty(o))
                for (n = s[o].slice(0), i = 0; i < n.length; i++)
                  !0 === (r = n[i]).once && this.removeListener(e, r.listener),
                    r.listener.apply(this, t || []) ===
                      this._getOnceReturnValue() &&
                      this.removeListener(e, r.listener);
            return this;
          }),
          (o.trigger = u('emitEvent')),
          (o.emit = function (e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, t);
          }),
          (o.setOnceReturnValue = function (e) {
            return (this._onceReturnValue = e), this;
          }),
          (o._getOnceReturnValue = function () {
            return (
              !this.hasOwnProperty('_onceReturnValue') || this._onceReturnValue
            );
          }),
          (o._getEvents = function () {
            return this._events || (this._events = {});
          }),
          (i.noConflict = function () {
            return (t.EventEmitter = s), i;
          }),
          void 0 ===
            (r = function () {
              return i;
            }.call(t, n, t, e)) || (e.exports = r);
      })(this || {});
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
          } catch (i) {}
        }
        return !0;
      };
    },
    '6Ngl': function (e, t, n) {
      var r = n('12Rd'),
        i = n('H46L');
      e.exports = function (e) {
        return r(i(e));
      };
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
        i = n('KGgr'),
        o = i['__core-js_shared__'] || (i['__core-js_shared__'] = {});
      (e.exports = function (e, t) {
        return o[e] || (o[e] = void 0 !== t ? t : {});
      })('versions', []).push({
        version: r.version,
        mode: n('SwRI') ? 'pure' : 'global',
        copyright: '© 2019 Denis Pushkarev (zloirock.ru)',
      });
    },
    '8ZkX': function (e, t, n) {
      'use strict';
      var r = n('xjCr'),
        i = n('PPId'),
        o = n('vRGa'),
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
                var n = s(e), u = arguments.length, l = 1, c = i.f, f = o.f;
                u > l;

              )
                for (
                  var d,
                    p = a(arguments[l++]),
                    h = c ? r(p).concat(c(p)) : r(p),
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
        i = n('Blyn')(6),
        o = 'findIndex',
        s = !0;
      o in [] &&
        Array(1)[o](function () {
          s = !1;
        }),
        r(r.P + r.F * s, 'Array', {
          findIndex: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        n('OlM/')(o);
    },
    '9S7S': function (e, t, n) {
      var r = n('zY5Q'),
        i = n('KGgr').document,
        o = r(i) && r(i.createElement);
      e.exports = function (e) {
        return o ? i.createElement(e) : {};
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
        i = n('khJW'),
        o = n('isQe'),
        s = n('QqfT')('src'),
        a = n('pipr'),
        u = ('' + a).split('toString');
      (n('5wX8').inspectSource = function (e) {
        return a.call(e);
      }),
        (e.exports = function (e, t, n, a) {
          var l = 'function' == typeof n;
          l && (o(n, 'name') || i(n, 'name', t)),
            e[t] !== n &&
              (l && (o(n, s) || i(n, s, e[t] ? '' + e[t] : u.join(String(t)))),
              e === r
                ? (e[t] = n)
                : a
                ? e[t]
                  ? (e[t] = n)
                  : i(e, t, n)
                : (delete e[t], i(e, t, n)));
        })(Function.prototype, 'toString', function () {
          return ('function' == typeof this && this[s]) || a.call(this);
        });
    },
    AuAe: function (e, t, n) {
      var r = n('gPPl').f,
        i = n('isQe'),
        o = n('IXQl')('toStringTag');
      e.exports = function (e, t, n) {
        e &&
          !i((e = n ? e : e.prototype), o) &&
          r(e, o, { configurable: !0, value: t });
      };
    },
    B0EX: function (e, t, n) {
      'use strict';
      var r = n('285N'),
        i = n('utAV');
      e.exports = n('0+LD')(
        'Map',
        function (e) {
          return function () {
            return e(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          get: function (e) {
            var t = r.getEntry(i(this, 'Map'), e);
            return t && t.v;
          },
          set: function (e, t) {
            return r.def(i(this, 'Map'), 0 === e ? 0 : e, t);
          },
        },
        r,
        !0,
      );
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
        i = n('Jdba'),
        o = n('lHEB'),
        s = n('9TFj'),
        a = n('bSmq'),
        u = n('f8KY'),
        l = {},
        c = {};
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
        if (o(m)) {
          for (p = a(e.length); p > b; b++)
            if ((v = t ? y(s((h = e[b]))[0], h[1]) : y(e[b])) === l || v === c)
              return v;
        } else
          for (g = m.call(e); !(h = g.next()).done; )
            if ((v = i(g, y, h.value, t)) === l || v === c) return v;
      }).BREAK = l),
        (t.RETURN = c);
    },
    Blyn: function (e, t, n) {
      var r = n('hvJ5'),
        i = n('12Rd'),
        o = n('XSq2'),
        s = n('bSmq'),
        a = n('1npb');
      e.exports = function (e, t) {
        var n = 1 == e,
          u = 2 == e,
          l = 3 == e,
          c = 4 == e,
          f = 6 == e,
          d = 5 == e || f,
          p = t || a;
        return function (t, a, h) {
          for (
            var g,
              v,
              m = o(t),
              y = i(m),
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
              else if (c) return !1;
          return f ? -1 : l || c ? c : x;
        };
      };
    },
    'C+zs': function (e, t, n) {
      'use strict';
      var r = n('vVR7'),
        i = n('iP0q')(!1);
      r(r.P, 'String', {
        codePointAt: function (e) {
          return i(this, e);
        },
      });
    },
    C9Yf: function (e, t, n) {
      var r = n('WJeB'),
        i = n('IbiK').concat('length', 'prototype');
      t.f =
        Object.getOwnPropertyNames ||
        function (e) {
          return r(e, i);
        };
    },
    D5V3: function (e, t, n) {
      'use strict';
      var r = n('gPPl'),
        i = n('yUtn');
      e.exports = function (e, t, n) {
        t in e ? r.f(e, t, i(0, n)) : (e[t] = n);
      };
    },
    EjkM: function (e, t, n) {
      'use strict';
      var r = n('vVR7'),
        i = n('Blyn')(5),
        o = !0;
      'find' in [] &&
        Array(1).find(function () {
          o = !1;
        }),
        r(r.P + r.F * o, 'Array', {
          find: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        n('OlM/')('find');
    },
    EsMY: function (e, t, n) {
      'use strict';
      var r = (window.Modernizr = (function (e, t, n) {
        function r(e) {
          g.cssText = e;
        }
        function i(e, t) {
          return typeof e === t;
        }
        function o(e, t) {
          return !!~('' + e).indexOf(t);
        }
        function s(e, t) {
          for (var r in e) {
            var i = e[r];
            if (!o(i, '-') && g[i] !== n) return 'pfx' != t || i;
          }
          return !1;
        }
        function a(e, t, r) {
          for (var o in e) {
            var s = t[e[o]];
            if (s !== n)
              return !1 === r ? e[o] : i(s, 'function') ? s.bind(r || t) : s;
          }
          return !1;
        }
        function u(e, t, n) {
          var r = e.charAt(0).toUpperCase() + e.slice(1),
            o = (e + ' ' + y.join(r + ' ') + r).split(' ');
          return i(t, 'string') || i(t, 'undefined')
            ? s(o, t)
            : a((o = (e + ' ' + b.join(r + ' ') + r).split(' ')), t, n);
        }
        var l,
          c,
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
          k = function (e, n, r, i) {
            var o,
              s,
              a,
              u,
              l = t.createElement('div'),
              c = t.body,
              f = c || t.createElement('body');
            if (parseInt(r, 10))
              for (; r--; )
                ((a = t.createElement('div')).id = i ? i[r] : p + (r + 1)),
                  l.appendChild(a);
            return (
              (o = ['&#173;', '<style id="s', p, '">', e, '</style>'].join('')),
              (l.id = p),
              ((c ? l : f).innerHTML += o),
              f.appendChild(l),
              c ||
                ((f.style.background = ''),
                (f.style.overflow = 'hidden'),
                (u = d.style.overflow),
                (d.style.overflow = 'hidden'),
                d.appendChild(f)),
              (s = n(l, e)),
              c
                ? l.parentNode.removeChild(l)
                : (f.parentNode.removeChild(f), (d.style.overflow = u)),
              !!s
            );
          },
          S = (function () {
            var e = {
              select: 'input',
              change: 'input',
              submit: 'form',
              reset: 'form',
              error: 'img',
              load: 'img',
              abort: 'img',
            };
            return function (r, o) {
              o = o || t.createElement(e[r] || 'div');
              var s = (r = 'on' + r) in o;
              return (
                s ||
                  (o.setAttribute || (o = t.createElement('div')),
                  o.setAttribute &&
                    o.removeAttribute &&
                    (o.setAttribute(r, ''),
                    (s = i(o[r], 'function')),
                    i(o[r], 'undefined') || (o[r] = n),
                    o.removeAttribute(r))),
                (o = null),
                s
              );
            };
          })(),
          E = {}.hasOwnProperty;
        for (var T in ((c =
          i(E, 'undefined') || i(E.call, 'undefined')
            ? function (e, t) {
                return t in e && i(e.constructor.prototype[t], 'undefined');
              }
            : function (e, t) {
                return E.call(e, t);
              }),
        Function.prototype.bind ||
          (Function.prototype.bind = function (e) {
            var t = this;
            if ('function' != typeof t) throw new TypeError();
            var n = x.call(arguments, 1),
              r = function () {
                if (this instanceof r) {
                  var i = function () {};
                  i.prototype = t.prototype;
                  var o = new i(),
                    s = t.apply(o, n.concat(x.call(arguments)));
                  return Object(s) === s ? s : o;
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
            !!i(t.createElement('canvas').getContext('2d').fillText, 'function')
          );
        }),
        (_.touchevents = function () {
          var n;
          return (
            'ontouchstart' in e ||
            (e.DocumentTouch && t instanceof DocumentTouch)
              ? (n = !0)
              : k(
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
          c(_, T) &&
            ((l = T.toLowerCase()),
            (f[l] = _[T]()),
            w.push((f[l] ? '' : 'no-') + l));
        return (
          (f.addTest = function (e, t) {
            if ('object' == typeof e)
              for (var r in e) c(e, r) && f.addTest(r, e[r]);
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
          (f.hasEvent = S),
          (f.testProp = function (e) {
            return s([e]);
          }),
          (f.testAllProps = u),
          (f.testStyles = k),
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
            var i = n(e, '');
            r = !!i && 'auto' === i.pointerEvents;
          }
          return t.removeChild(e), !!r;
        }),
        r.addTest('flexbox', r.testAllProps('flexBasis', '1px', !0));
    },
    F2Ge: function (e, t, n) {
      'use strict';
      var r = n('KGgr'),
        i = n('isQe'),
        o = n('nULH'),
        s = n('vVR7'),
        a = n('AZRH'),
        u = n('PAQY').KEY,
        l = n('u52/'),
        c = n('8ICS'),
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
        k = n('Vrag'),
        S = n('s3mU'),
        E = n('/Hub'),
        T = n('gPPl'),
        C = n('xjCr'),
        N = E.f,
        O = T.f,
        j = S.f,
        L = r.Symbol,
        A = r.JSON,
        P = A && A.stringify,
        F = p('_hidden'),
        D = p('toPrimitive'),
        R = {}.propertyIsEnumerable,
        M = c('symbol-registry'),
        I = c('symbols'),
        H = c('op-symbols'),
        B = Object.prototype,
        q = 'function' == typeof L,
        W = r.QObject,
        z = !W || !W.prototype || !W.prototype.findChild,
        V =
          o &&
          l(function () {
            return (
              7 !=
              k(
                O({}, 'a', {
                  get: function () {
                    return O(this, 'a', { value: 7 }).a;
                  },
                }),
              ).a
            );
          })
            ? function (e, t, n) {
                var r = N(B, t);
                r && delete B[t], O(e, t, n), r && e !== B && O(B, t, r);
              }
            : O,
        U = function (e) {
          var t = (I[e] = k(L.prototype));
          return (t._k = e), t;
        },
        $ =
          q && 'symbol' == typeof L.iterator
            ? function (e) {
                return 'symbol' == typeof e;
              }
            : function (e) {
                return e instanceof L;
              },
        Q = function (e, t, n) {
          return (
            e === B && Q(H, t, n),
            y(e),
            (t = w(t, !0)),
            y(n),
            i(I, t)
              ? (n.enumerable
                  ? (i(e, F) && e[F][t] && (e[F][t] = !1),
                    (n = k(n, { enumerable: x(0, !1) })))
                  : (i(e, F) || O(e, F, x(1, {})), (e[F][t] = !0)),
                V(e, t, n))
              : O(e, t, n)
          );
        },
        X = function (e, t) {
          y(e);
          for (var n, r = v((t = _(t))), i = 0, o = r.length; o > i; )
            Q(e, (n = r[i++]), t[n]);
          return e;
        },
        K = function (e) {
          var t = R.call(this, (e = w(e, !0)));
          return (
            !(this === B && i(I, e) && !i(H, e)) &&
            (!(t || !i(this, e) || !i(I, e) || (i(this, F) && this[F][e])) || t)
          );
        },
        Y = function (e, t) {
          if (((e = _(e)), (t = w(t, !0)), e !== B || !i(I, t) || i(H, t))) {
            var n = N(e, t);
            return (
              !n || !i(I, t) || (i(e, F) && e[F][t]) || (n.enumerable = !0), n
            );
          }
        },
        J = function (e) {
          for (var t, n = j(_(e)), r = [], o = 0; n.length > o; )
            i(I, (t = n[o++])) || t == F || t == u || r.push(t);
          return r;
        },
        G = function (e) {
          for (
            var t, n = e === B, r = j(n ? H : _(e)), o = [], s = 0;
            r.length > s;

          )
            !i(I, (t = r[s++])) || (n && !i(B, t)) || o.push(I[t]);
          return o;
        };
      q ||
        (a(
          (L = function () {
            if (this instanceof L)
              throw TypeError('Symbol is not a constructor!');
            var e = d(arguments.length > 0 ? arguments[0] : void 0),
              t = function (n) {
                this === B && t.call(H, n),
                  i(this, F) && i(this[F], e) && (this[F][e] = !1),
                  V(this, e, x(1, n));
              };
            return o && z && V(B, e, { configurable: !0, set: t }), U(e);
          }).prototype,
          'toString',
          function () {
            return this._k;
          },
        ),
        (E.f = Y),
        (T.f = Q),
        (n('C9Yf').f = S.f = J),
        (n('vRGa').f = K),
        (n('PPId').f = G),
        o && !n('SwRI') && a(B, 'propertyIsEnumerable', K, !0),
        (h.f = function (e) {
          return U(p(e));
        })),
        s(s.G + s.W + s.F * !q, { Symbol: L });
      for (
        var Z = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
            ',',
          ),
          ee = 0;
        Z.length > ee;

      )
        p(Z[ee++]);
      for (var te = C(p.store), ne = 0; te.length > ne; ) g(te[ne++]);
      s(s.S + s.F * !q, 'Symbol', {
        for: function (e) {
          return i(M, (e += '')) ? M[e] : (M[e] = L(e));
        },
        keyFor: function (e) {
          if (!$(e)) throw TypeError(e + ' is not a symbol!');
          for (var t in M) if (M[t] === e) return t;
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
            return void 0 === t ? k(e) : X(k(e), t);
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
                  l(function () {
                    var e = L();
                    return (
                      '[null]' != P([e]) ||
                      '{}' != P({ a: e }) ||
                      '{}' != P(Object(e))
                    );
                  })),
            'JSON',
            {
              stringify: function (e) {
                for (var t, n, r = [e], i = 1; arguments.length > i; )
                  r.push(arguments[i++]);
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
                    P.apply(A, r)
                  );
              },
            },
          ),
        L.prototype[D] || n('khJW')(L.prototype, D, L.prototype.valueOf),
        f(L, 'Symbol'),
        f(Math, 'Math', !0),
        f(r.JSON, 'JSON', !0);
    },
    Fu1i: function (e, t, n) {
      'use strict';
      var r = n('SwRI'),
        i = n('vVR7'),
        o = n('AZRH'),
        s = n('khJW'),
        a = n('V3uq'),
        u = n('R99l'),
        l = n('AuAe'),
        c = n('pZZ2'),
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
            if (!d && e in E) return E[e];
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
          k = 'values' == g,
          S = !1,
          E = e.prototype,
          T = E[f] || E['@@iterator'] || (g && E[g]),
          C = T || w(g),
          N = g ? (k ? w('entries') : C) : void 0,
          O = ('Array' == t && E.entries) || T;
        if (
          (O &&
            (_ = c(O.call(new e()))) !== Object.prototype &&
            _.next &&
            (l(_, x, !0), r || 'function' == typeof _[f] || s(_, f, p)),
          k &&
            T &&
            'values' !== T.name &&
            ((S = !0),
            (C = function () {
              return T.call(this);
            })),
          (r && !m) || (!d && !S && E[f]) || s(E, f, C),
          (a[t] = C),
          (a[x] = p),
          g)
        )
          if (
            ((y = {
              values: k ? C : w('values'),
              keys: v ? C : w('keys'),
              entries: N,
            }),
            m)
          )
            for (b in y) b in E || o(E, b, y[b]);
          else i(i.P + i.F * (d || S), t, y);
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
        i = /{(\w+)}/g,
        o = /{(\d+)}/g;
      String.prototype.format = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = Object(r.isObject)(e[0]),
          s = n ? i : o,
          a = n
            ? function (t, n) {
                var r = e[0];
                return void 0 !== r[n] ? r[n] : t;
              }
            : function (t, n) {
                var r = parseInt(n, 10),
                  i = e[r];
                return void 0 !== i ? i : t;
              };
        return this.replace(s, a);
      };
    },
    IXQl: function (e, t, n) {
      var r = n('8ICS')('wks'),
        i = n('QqfT'),
        o = n('KGgr').Symbol,
        s = 'function' == typeof o;
      (e.exports = function (e) {
        return r[e] || (r[e] = (s && o[e]) || (s ? o : i)('Symbol.' + e));
      }).store = r;
    },
    IbiK: function (e, t) {
      e.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
        ',',
      );
    },
    IxbO: function (e, t, n) {
      var r = n('qKVQ'),
        i = n('IXQl')('toStringTag'),
        o =
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
            })((t = Object(e)), i))
          ? n
          : o
          ? r(t)
          : 'Object' == (s = r(t)) && 'function' == typeof t.callee
          ? 'Arguments'
          : s;
      };
    },
    JX7q: function (e, t, n) {
      'use strict';
      function r(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    Jchv: function (e, t, n) {
      var r, i, o;
      (i = [n('P5fv'), n('Qwlt')]),
        void 0 ===
          (o =
            'function' ==
            typeof (r = function (e) {
              return (
                (function () {
                  var t,
                    n = Math.max,
                    r = Math.abs,
                    i = /left|center|right/,
                    o = /top|center|bottom/,
                    s = /[\+\-]\d+(\.[\d]+)?%?/,
                    a = /^\w+/,
                    u = /%$/,
                    l = e.fn.position;
                  function c(e, t, n) {
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
                        i = e(
                          "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>",
                        ),
                        o = i.children()[0];
                      return (
                        e('body').append(i),
                        (n = o.offsetWidth),
                        i.css('overflow', 'scroll'),
                        n === (r = o.offsetWidth) && (r = i[0].clientWidth),
                        i.remove(),
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
                        i =
                          'scroll' === n ||
                          ('auto' === n && t.width < t.element[0].scrollWidth);
                      return {
                        width:
                          'scroll' === r ||
                          ('auto' === r && t.height < t.element[0].scrollHeight)
                            ? e.position.scrollbarWidth()
                            : 0,
                        height: i ? e.position.scrollbarWidth() : 0,
                      };
                    },
                    getWithinInfo: function (t) {
                      var n = e(t || window),
                        r = e.isWindow(n[0]),
                        i = !!n[0] && 9 === n[0].nodeType;
                      return {
                        element: n,
                        isWindow: r,
                        isDocument: i,
                        offset: r || i ? { left: 0, top: 0 } : e(t).offset(),
                        scrollLeft: n.scrollLeft(),
                        scrollTop: n.scrollTop(),
                        width: n.outerWidth(),
                        height: n.outerHeight(),
                      };
                    },
                  }),
                    (e.fn.position = function (t) {
                      if (!t || !t.of) return l.apply(this, arguments);
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
                            (r = i.test(r[0])
                              ? r.concat(['center'])
                              : o.test(r[0])
                              ? ['center'].concat(r)
                              : ['center', 'center']),
                            (r[0] = i.test(r[0]) ? r[0] : 'center'),
                            (r[1] = o.test(r[1]) ? r[1] : 'center'),
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
                        (u = c(x.at, p, h)),
                        (v.left += u[0]),
                        (v.top += u[1]),
                        this.each(function () {
                          var i,
                            o,
                            s = e(this),
                            a = s.outerWidth(),
                            l = s.outerHeight(),
                            d = f(this, 'marginLeft'),
                            m = f(this, 'marginTop'),
                            k = a + d + f(this, 'marginRight') + _.width,
                            S = l + m + f(this, 'marginBottom') + _.height,
                            E = e.extend({}, v),
                            T = c(x.my, s.outerWidth(), s.outerHeight());
                          'right' === t.my[0]
                            ? (E.left -= a)
                            : 'center' === t.my[0] && (E.left -= a / 2),
                            'bottom' === t.my[1]
                              ? (E.top -= l)
                              : 'center' === t.my[1] && (E.top -= l / 2),
                            (E.left += T[0]),
                            (E.top += T[1]),
                            (i = { marginLeft: d, marginTop: m }),
                            e.each(['left', 'top'], function (n, r) {
                              e.ui.position[w[n]] &&
                                e.ui.position[w[n]][r](E, {
                                  targetWidth: p,
                                  targetHeight: h,
                                  elemWidth: a,
                                  elemHeight: l,
                                  collisionPosition: i,
                                  collisionWidth: k,
                                  collisionHeight: S,
                                  offset: [u[0] + T[0], u[1] + T[1]],
                                  my: t.my,
                                  at: t.at,
                                  within: b,
                                  elem: s,
                                });
                            }),
                            t.using &&
                              (o = function (e) {
                                var i = g.left - E.left,
                                  o = i + p - a,
                                  u = g.top - E.top,
                                  c = u + h - l,
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
                                      left: E.left,
                                      top: E.top,
                                      width: a,
                                      height: l,
                                    },
                                    horizontal:
                                      o < 0
                                        ? 'left'
                                        : i > 0
                                        ? 'right'
                                        : 'center',
                                    vertical:
                                      c < 0
                                        ? 'top'
                                        : u > 0
                                        ? 'bottom'
                                        : 'middle',
                                  };
                                p < a &&
                                  r(i + o) < p &&
                                  (f.horizontal = 'center'),
                                  h < l &&
                                    r(u + c) < h &&
                                    (f.vertical = 'middle'),
                                  n(r(i), r(o)) > n(r(u), r(c))
                                    ? (f.important = 'horizontal')
                                    : (f.important = 'vertical'),
                                  t.using.call(this, e, f);
                              }),
                            s.offset(e.extend(E, { using: o }));
                        })
                      );
                    }),
                    (e.ui.position = {
                      fit: {
                        left: function (e, t) {
                          var r,
                            i = t.within,
                            o = i.isWindow ? i.scrollLeft : i.offset.left,
                            s = i.width,
                            a = e.left - t.collisionPosition.marginLeft,
                            u = o - a,
                            l = a + t.collisionWidth - s - o;
                          t.collisionWidth > s
                            ? u > 0 && l <= 0
                              ? ((r = e.left + u + t.collisionWidth - s - o),
                                (e.left += u - r))
                              : (e.left =
                                  l > 0 && u <= 0
                                    ? o
                                    : u > l
                                    ? o + s - t.collisionWidth
                                    : o)
                            : u > 0
                            ? (e.left += u)
                            : l > 0
                            ? (e.left -= l)
                            : (e.left = n(e.left - a, e.left));
                        },
                        top: function (e, t) {
                          var r,
                            i = t.within,
                            o = i.isWindow ? i.scrollTop : i.offset.top,
                            s = t.within.height,
                            a = e.top - t.collisionPosition.marginTop,
                            u = o - a,
                            l = a + t.collisionHeight - s - o;
                          t.collisionHeight > s
                            ? u > 0 && l <= 0
                              ? ((r = e.top + u + t.collisionHeight - s - o),
                                (e.top += u - r))
                              : (e.top =
                                  l > 0 && u <= 0
                                    ? o
                                    : u > l
                                    ? o + s - t.collisionHeight
                                    : o)
                            : u > 0
                            ? (e.top += u)
                            : l > 0
                            ? (e.top -= l)
                            : (e.top = n(e.top - a, e.top));
                        },
                      },
                      flip: {
                        left: function (e, t) {
                          var n,
                            i,
                            o = t.within,
                            s = o.offset.left + o.scrollLeft,
                            a = o.width,
                            u = o.isWindow ? o.scrollLeft : o.offset.left,
                            l = e.left - t.collisionPosition.marginLeft,
                            c = l - u,
                            f = l + t.collisionWidth - a - u,
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
                          c < 0
                            ? ((n =
                                e.left + d + p + h + t.collisionWidth - a - s) <
                                0 ||
                                n < r(c)) &&
                              (e.left += d + p + h)
                            : f > 0 &&
                              ((i =
                                e.left -
                                t.collisionPosition.marginLeft +
                                d +
                                p +
                                h -
                                u) > 0 ||
                                r(i) < f) &&
                              (e.left += d + p + h);
                        },
                        top: function (e, t) {
                          var n,
                            i,
                            o = t.within,
                            s = o.offset.top + o.scrollTop,
                            a = o.height,
                            u = o.isWindow ? o.scrollTop : o.offset.top,
                            l = e.top - t.collisionPosition.marginTop,
                            c = l - u,
                            f = l + t.collisionHeight - a - u,
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
                          c < 0
                            ? ((i =
                                e.top + d + p + h + t.collisionHeight - a - s) <
                                0 ||
                                i < r(c)) &&
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
              ? r.apply(t, i)
              : r) || (e.exports = o);
    },
    Jdba: function (e, t, n) {
      var r = n('9TFj');
      e.exports = function (e, t, n, i) {
        try {
          return i ? t(r(n)[0], n[1]) : t(n);
        } catch (s) {
          var o = e.return;
          throw (void 0 !== o && r(o.call(e)), s);
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
        i = Math.floor;
      e.exports = function (e) {
        return !r(e) && isFinite(e) && i(e) === e;
      };
    },
    Kxc7: function (e, t, n) {
      var r = n('qlfx'),
        i = {},
        o = {},
        s = {},
        a = {
          init: function () {
            var e, t;
            Object.keys(r).forEach(function (n) {
              (e = r[n]),
                (t = e.subsets),
                Array.isArray(t)
                  ? t.forEach(function (e) {
                      i[e] = 1;
                    })
                  : t &&
                    Object.keys(t).forEach(function (e) {
                      i[e] = 1;
                    }),
                (i[n] = 1);
            });
            var n,
              u = Object.keys(i);
            u.forEach(function (e) {
              u.forEach(function (i) {
                if (void 0 !== (n = r[i])) {
                  if (!(t = n.subsets)) return;
                  o.hasOwnProperty(e) || (o[e] = []),
                    ((Array.isArray(t) && ~t.indexOf(e)) || e in t) &&
                      o[e].push(i);
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
                _uniqueSetsNames: i,
                _setsReverseDependencies: o,
                _setsStates: s,
              });
          },
          enabled: function (e) {
            var t = function (e) {
              var n = o.hasOwnProperty(e) ? o[e] : [];
              if (!1 === s[e]) return !1;
              for (var r = s[e], i = 0; i < n.length; ++i) r |= t(n[i]);
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
              Object.keys(i).forEach(function (t) {
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
        i = n('hrFL');
      r(r.S + r.F * (Number.parseFloat != i), 'Number', { parseFloat: i });
    },
    MApU: function (e, t, n) {
      'use strict';
      n.r(t);
      n('fPeS'), n('MIQu'), n('iGnl'), n('Jchv'), n('/82Z');
    },
    MIQu: function (e, t, n) {
      var r, i, o;
      (i = [n('P5fv'), n('Qwlt')]),
        void 0 ===
          (o =
            'function' ==
            typeof (r = function (e) {
              var t,
                n = 0,
                r = Array.prototype.slice;
              return (
                (e.cleanData =
                  ((t = e.cleanData),
                  function (n) {
                    var r, i, o;
                    for (o = 0; null != (i = n[o]); o++)
                      try {
                        (r = e._data(i, 'events')) &&
                          r.remove &&
                          e(i).triggerHandler('remove');
                      } catch (s) {}
                    t(n);
                  })),
                (e.widget = function (t, n, r) {
                  var i,
                    o,
                    s,
                    a = {},
                    u = t.split('.')[0],
                    l = u + '-' + (t = t.split('.')[1]);
                  return (
                    r || ((r = n), (n = e.Widget)),
                    e.isArray(r) && (r = e.extend.apply(null, [{}].concat(r))),
                    (e.expr[':'][l.toLowerCase()] = function (t) {
                      return !!e.data(t, l);
                    }),
                    (e[u] = e[u] || {}),
                    (i = e[u][t]),
                    (o = e[u][t] = function (e, t) {
                      if (!this._createWidget) return new o(e, t);
                      arguments.length && this._createWidget(e, t);
                    }),
                    e.extend(o, i, {
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
                            function i(e) {
                              return n.prototype[t].apply(this, e);
                            }
                            return function () {
                              var t,
                                n = this._super,
                                o = this._superApply;
                              return (
                                (this._super = e),
                                (this._superApply = i),
                                (t = r.apply(this, arguments)),
                                (this._super = n),
                                (this._superApply = o),
                                t
                              );
                            };
                          })())
                        : (a[t] = r);
                    }),
                    (o.prototype = e.widget.extend(
                      s,
                      { widgetEventPrefix: (i && s.widgetEventPrefix) || t },
                      a,
                      {
                        constructor: o,
                        namespace: u,
                        widgetName: t,
                        widgetFullName: l,
                      },
                    )),
                    i
                      ? (e.each(i._childConstructors, function (t, n) {
                          var r = n.prototype;
                          e.widget(
                            r.namespace + '.' + r.widgetName,
                            o,
                            n._proto,
                          );
                        }),
                        delete i._childConstructors)
                      : n._childConstructors.push(o),
                    e.widget.bridge(t, o),
                    o
                  );
                }),
                (e.widget.extend = function (t) {
                  for (
                    var n, i, o = r.call(arguments, 1), s = 0, a = o.length;
                    s < a;
                    s++
                  )
                    for (n in o[s])
                      (i = o[s][n]),
                        o[s].hasOwnProperty(n) &&
                          void 0 !== i &&
                          (e.isPlainObject(i)
                            ? (t[n] = e.isPlainObject(t[n])
                                ? e.widget.extend({}, t[n], i)
                                : e.widget.extend({}, i))
                            : (t[n] = i));
                  return t;
                }),
                (e.widget.bridge = function (t, n) {
                  var i = n.prototype.widgetFullName || t;
                  e.fn[t] = function (o) {
                    var s = 'string' == typeof o,
                      a = r.call(arguments, 1),
                      u = this;
                    return (
                      s
                        ? this.length || 'instance' !== o
                          ? this.each(function () {
                              var n,
                                r = e.data(this, i);
                              return 'instance' === o
                                ? ((u = r), !1)
                                : r
                                ? e.isFunction(r[o]) && '_' !== o.charAt(0)
                                  ? (n = r[o].apply(r, a)) !== r && void 0 !== n
                                    ? ((u =
                                        n && n.jquery
                                          ? u.pushStack(n.get())
                                          : n),
                                      !1)
                                    : void 0
                                  : e.error(
                                      "no such method '" +
                                        o +
                                        "' for " +
                                        t +
                                        ' widget instance',
                                    )
                                : e.error(
                                    'cannot call methods on ' +
                                      t +
                                      " prior to initialization; attempted to call method '" +
                                      o +
                                      "'",
                                  );
                            })
                          : (u = void 0)
                        : (a.length &&
                            (o = e.widget.extend.apply(null, [o].concat(a))),
                          this.each(function () {
                            var t = e.data(this, i);
                            t
                              ? (t.option(o || {}), t._init && t._init())
                              : e.data(this, i, new n(o, this));
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
                      i,
                      o,
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
                          i = s[t] = e.widget.extend({}, this.options[t]),
                            o = 0;
                          o < r.length - 1;
                          o++
                        )
                          (i[r[o]] = i[r[o]] || {}), (i = i[r[o]]);
                        if (((t = r.pop()), 1 === arguments.length))
                          return void 0 === i[t] ? null : i[t];
                        i[t] = n;
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
                    var n, r, i;
                    for (n in t)
                      (i = this.classesElementLookup[n]),
                        t[n] !== this.options.classes[n] &&
                          i &&
                          i.length &&
                          ((r = e(i.get())),
                          this._removeClass(i, n),
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
                    function i(i, o) {
                      var s, a;
                      for (a = 0; a < i.length; a++)
                        (s = r.classesElementLookup[i[a]] || e()),
                          (s = t.add
                            ? e(e.unique(s.get().concat(t.element.get())))
                            : e(s.not(t.element).get())),
                          (r.classesElementLookup[i[a]] = s),
                          n.push(i[a]),
                          o && t.classes[i[a]] && n.push(t.classes[i[a]]);
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
                      t.keys && i(t.keys.match(/\S+/g) || [], !0),
                      t.extra && i(t.extra.match(/\S+/g) || []),
                      n.join(' ')
                    );
                  },
                  _untrackClassesElement: function (t) {
                    var n = this;
                    e.each(n.classesElementLookup, function (r, i) {
                      -1 !== e.inArray(t.target, i) &&
                        (n.classesElementLookup[r] = e(i.not(t.target).get()));
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
                    var i = 'string' == typeof e || null === e,
                      o = {
                        extra: i ? t : n,
                        keys: i ? e : t,
                        element: i ? this.element : e,
                        add: r,
                      };
                    return o.element.toggleClass(this._classes(o), r), this;
                  },
                  _on: function (t, n, r) {
                    var i,
                      o = this;
                    'boolean' != typeof t && ((r = n), (n = t), (t = !1)),
                      r
                        ? ((n = i = e(n)),
                          (this.bindings = this.bindings.add(n)))
                        : ((r = n), (n = this.element), (i = this.widget())),
                      e.each(r, function (r, s) {
                        function a() {
                          if (
                            t ||
                            (!0 !== o.options.disabled &&
                              !e(this).hasClass('ui-state-disabled'))
                          )
                            return ('string' == typeof s ? o[s] : s).apply(
                              o,
                              arguments,
                            );
                        }
                        'string' != typeof s &&
                          (a.guid = s.guid = s.guid || a.guid || e.guid++);
                        var u = r.match(/^([\w:-]*)\s*(.*)$/),
                          l = u[1] + o.eventNamespace,
                          c = u[2];
                        c ? i.on(l, c, a) : n.on(l, a);
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
                    var i,
                      o,
                      s = this.options[t];
                    if (
                      ((r = r || {}),
                      ((n = e.Event(n)).type = (t === this.widgetEventPrefix
                        ? t
                        : this.widgetEventPrefix + t
                      ).toLowerCase()),
                      (n.target = this.element[0]),
                      (o = n.originalEvent))
                    )
                      for (i in o) i in n || (n[i] = o[i]);
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
                  e.Widget.prototype['_' + t] = function (r, i, o) {
                    var s;
                    'string' == typeof i && (i = { effect: i });
                    var a = i
                      ? !0 === i || 'number' == typeof i
                        ? n
                        : i.effect || n
                      : t;
                    'number' == typeof (i = i || {}) && (i = { duration: i }),
                      (s = !e.isEmptyObject(i)),
                      (i.complete = o),
                      i.delay && r.delay(i.delay),
                      s && e.effects && e.effects.effect[a]
                        ? r[t](i)
                        : a !== t && r[a]
                        ? r[a](i.duration, i.easing, o)
                        : r.queue(function (n) {
                            e(this)[t](), o && o.call(r[0]), n();
                          });
                  };
                }),
                e.widget
              );
            })
              ? r.apply(t, i)
              : r) || (e.exports = o);
    },
    NFwL: function (e, t, n) {
      'use strict';
      var r = n('hvJ5'),
        i = n('vVR7'),
        o = n('XSq2'),
        s = n('Jdba'),
        a = n('lHEB'),
        u = n('bSmq'),
        l = n('D5V3'),
        c = n('f8KY');
      i(
        i.S +
          i.F *
            !n('zP2l')(function (e) {
              Array.from(e);
            }),
        'Array',
        {
          from: function (e) {
            var t,
              n,
              i,
              f,
              d = o(e),
              p = 'function' == typeof this ? this : Array,
              h = arguments.length,
              g = h > 1 ? arguments[1] : void 0,
              v = void 0 !== g,
              m = 0,
              y = c(d);
            if (
              (v && (g = r(g, h > 2 ? arguments[2] : void 0, 2)),
              null == y || (p == Array && a(y)))
            )
              for (n = new p((t = u(d.length))); t > m; m++)
                l(n, m, v ? g(d[m], m) : d[m]);
            else
              for (f = y.call(d), n = new p(); !(i = f.next()).done; m++)
                l(n, m, v ? s(f, g, [i.value, m], !0) : i.value);
            return (n.length = m), n;
          },
        },
      );
    },
    NHgk: function (e, t, n) {
      var r, i, o;
      (i = [n('P5fv'), n('Qwlt')]),
        void 0 ===
          (o =
            'function' ==
            typeof (r = function (e) {
              return (e.ui.ie = !!/msie [\w.]+/.exec(
                navigator.userAgent.toLowerCase(),
              ));
            })
              ? r.apply(t, i)
              : r) || (e.exports = o);
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
        for (var i in t) r(e, i, t[i], n);
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
    OV6q: function (e, t) {
      !(function () {
        if ('undefined' != typeof window) {
          var e = document.createElement('a').classList;
          if (e) {
            var t = Object.getPrototypeOf(e),
              n = t.add,
              r = t.remove,
              i = t.toggle;
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
                    ? i.call(this, e)
                    : t
                    ? n.call(this, e)
                    : r.call(this, e);
                });
          }
        }
      })();
    },
    'OlM/': function (e, t, n) {
      var r = n('IXQl')('unscopables'),
        i = Array.prototype;
      null == i[r] && n('khJW')(i, r, {}),
        (e.exports = function (e) {
          i[r][e] = !0;
        });
    },
    OpLF: function (e, t, n) {
      var r = n('KGgr').document;
      e.exports = r && r.documentElement;
    },
    P5fv: function (e, t) {
      var n = window.document,
        r = window.navigator,
        i = window.location,
        o = (function () {
          var e,
            t,
            i,
            o,
            s = function (t, n) {
              return new s.fn.init(t, n, e);
            },
            a = window.jQuery,
            u = window.$,
            l = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
            c = /\S/,
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
            k = /^-ms-/,
            S = function (e, t) {
              return (t + '').toUpperCase();
            },
            E = r.userAgent,
            T = Object.prototype.toString,
            C = Object.prototype.hasOwnProperty,
            N = Array.prototype.push,
            O = Array.prototype.slice,
            j = String.prototype.trim,
            L = Array.prototype.indexOf,
            A = {};
          function P() {
            if (!s.isReady) {
              try {
                n.documentElement.doScroll('left');
              } catch (e) {
                return void setTimeout(P, 1);
              }
              s.ready();
            }
          }
          return (
            (s.fn = s.prototype = {
              constructor: s,
              init: function (e, t, r) {
                var i, o, a, u;
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
                    !(i =
                      '<' === e.charAt(0) &&
                      '>' === e.charAt(e.length - 1) &&
                      e.length >= 3
                        ? [null, e, null]
                        : l.exec(e)) ||
                    (!i[1] && t)
                  )
                    return !t || t.jquery
                      ? (t || r).find(e)
                      : this.constructor(t).find(e);
                  if (i[1])
                    return (
                      (u = (t = t instanceof s ? t[0] : t)
                        ? t.ownerDocument || t
                        : n),
                      (a = p.exec(e))
                        ? s.isPlainObject(t)
                          ? ((e = [n.createElement(a[1])]),
                            s.fn.attr.call(e, t, !0))
                          : (e = [u.createElement(a[1])])
                        : (e = ((a = s.buildFragment([i[1]], [u])).cacheable
                            ? s.clone(a.fragment)
                            : a.fragment
                          ).childNodes),
                      s.merge(this, e)
                    );
                  if ((o = n.getElementById(i[2])) && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    (this.length = 1), (this[0] = o);
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
                return O.call(this, 0);
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
                return s.bindReady(), i.add(e), this;
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
                  O.apply(this, arguments),
                  'slice',
                  O.call(arguments).join(','),
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
                i,
                o,
                a = arguments[0] || {},
                u = 1,
                l = arguments.length,
                c = !1;
              for (
                'boolean' == typeof a &&
                  ((c = a), (a = arguments[1] || {}), (u = 2)),
                  'object' == typeof a || s.isFunction(a) || (a = {}),
                  l === u && ((a = this), --u);
                u < l;
                u++
              )
                if (null != (e = arguments[u]))
                  for (t in e)
                    (n = a[t]),
                      a !== (r = e[t]) &&
                        (c && r && (s.isPlainObject(r) || (i = s.isArray(r)))
                          ? (i
                              ? ((i = !1), (o = n && s.isArray(n) ? n : []))
                              : (o = n && s.isPlainObject(n) ? n : {}),
                            (a[t] = s.extend(c, o, r)))
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
                  i.fireWith(n, [s]),
                    s.fn.trigger && s(n).trigger('ready').off('ready');
                }
              },
              bindReady: function () {
                if (!i) {
                  if (
                    ((i = s.Callbacks('once memory')),
                    'complete' === n.readyState)
                  )
                    return setTimeout(s.ready, 1);
                  if (n.addEventListener)
                    n.addEventListener('DOMContentLoaded', o, !1),
                      window.addEventListener('load', s.ready, !1);
                  else if (n.attachEvent) {
                    n.attachEvent('onreadystatechange', o),
                      window.attachEvent('onload', s.ready);
                    var e = !1;
                    try {
                      e = null == window.frameElement;
                    } catch (t) {}
                    n.documentElement.doScroll && e && P();
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
                    !C.call(e, 'constructor') &&
                    !C.call(e.constructor.prototype, 'isPrototypeOf')
                  )
                    return !1;
                } catch (n) {
                  return !1;
                }
                var t;
                for (t in e);
                return void 0 === t || C.call(e, t);
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
                  c.test(e) &&
                  (
                    window.execScript ||
                    function (e) {
                      window.eval.call(window, e);
                    }
                  )(e);
              },
              camelCase: function (e) {
                return e.replace(k, 'ms-').replace(x, S);
              },
              nodeName: function (e, t) {
                return (
                  e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
                );
              },
              each: function (e, t, n) {
                var r,
                  i = 0,
                  o = e.length,
                  a = void 0 === o || s.isFunction(e);
                if (n)
                  if (a) {
                    for (r in e) if (!1 === t.apply(e[r], n)) break;
                  } else for (; i < o && !1 !== t.apply(e[i++], n); );
                else if (a) {
                  for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                } else for (; i < o && !1 !== t.call(e[i], i, e[i++]); );
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
                  if (L) return L.call(t, e, n);
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
                  for (var i = t.length; r < i; r++) e[n++] = t[r];
                else for (; void 0 !== t[r]; ) e[n++] = t[r++];
                return (e.length = n), e;
              },
              grep: function (e, t, n) {
                var r = [];
                n = !!n;
                for (var i = 0, o = e.length; i < o; i++)
                  n !== !!t(e[i], i) && r.push(e[i]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  i,
                  o = [],
                  a = 0,
                  u = e.length;
                if (
                  e instanceof s ||
                  (void 0 !== u &&
                    'number' == typeof u &&
                    ((u > 0 && e[0] && e[u - 1]) || 0 === u || s.isArray(e)))
                )
                  for (; a < u; a++)
                    null != (r = t(e[a], a, n)) && (o[o.length] = r);
                else
                  for (i in e) null != (r = t(e[i], i, n)) && (o[o.length] = r);
                return o.concat.apply([], o);
              },
              guid: 1,
              proxy: function (e, t) {
                if ('string' == typeof t) {
                  var n = e[t];
                  (t = e), (e = n);
                }
                if (s.isFunction(e)) {
                  var r = O.call(arguments, 2),
                    i = function () {
                      return e.apply(t, r.concat(O.call(arguments)));
                    };
                  return (i.guid = e.guid = e.guid || i.guid || s.guid++), i;
                }
              },
              access: function (e, t, n, r, i, o, a) {
                var u,
                  l = null == n,
                  c = 0,
                  f = e.length;
                if (n && 'object' == typeof n) {
                  for (c in n) s.access(e, t, c, n[c], 1, o, r);
                  i = 1;
                } else if (void 0 !== r) {
                  if (
                    ((u = void 0 === a && s.isFunction(r)),
                    l &&
                      (u
                        ? ((u = t),
                          (t = function (e, t, n) {
                            return u.call(s(e), n);
                          }))
                        : (t.call(e, r), (t = null))),
                    t)
                  )
                    for (; c < f; c++)
                      t(e[c], n, u ? r.call(e[c], c, t(e[c], n)) : r, a);
                  i = 1;
                }
                return i ? e : l ? t.call(e) : f ? t(e[0], n) : o;
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
            (t = s.uaMatch(E)).browser &&
              ((s.browser[t.browser] = !0), (s.browser.version = t.version)),
            s.browser.webkit && (s.browser.safari = !0),
            c.test(' ') && ((f = /^[\s\xA0]+/), (d = /[\s\xA0]+$/)),
            (e = s(n)),
            n.addEventListener
              ? (o = function () {
                  n.removeEventListener('DOMContentLoaded', o, !1), s.ready();
                })
              : n.attachEvent &&
                (o = function () {
                  'complete' === n.readyState &&
                    (n.detachEvent('onreadystatechange', o), s.ready());
                }),
            s
          );
        })(),
        s = {};
      o.Callbacks = function (e) {
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
          i,
          a,
          u,
          l = [],
          c = [],
          f = function (t) {
            var n, r, i, s;
            for (n = 0, r = t.length; n < r; n++)
              (i = t[n]),
                'array' === (s = o.type(i))
                  ? f(i)
                  : 'function' === s && ((e.unique && p.has(i)) || l.push(i));
          },
          d = function (o, s) {
            for (
              s = s || [],
                t = !e.memory || [o, s],
                n = !0,
                r = !0,
                u = i || 0,
                i = 0,
                a = l.length;
              l && u < a;
              u++
            )
              if (!1 === l[u].apply(o, s) && e.stopOnFalse) {
                t = !0;
                break;
              }
            (r = !1),
              l &&
                (e.once
                  ? !0 === t
                    ? p.disable()
                    : (l = [])
                  : c && c.length && ((t = c.shift()), p.fireWith(t[0], t[1])));
          },
          p = {
            add: function () {
              if (l) {
                var e = l.length;
                f(arguments),
                  r
                    ? (a = l.length)
                    : t && !0 !== t && ((i = e), d(t[0], t[1]));
              }
              return this;
            },
            remove: function () {
              if (l)
                for (var t = arguments, n = 0, i = t.length; n < i; n++)
                  for (
                    var o = 0;
                    o < l.length &&
                    (t[n] !== l[o] ||
                      (r && o <= a && (a--, o <= u && u--),
                      l.splice(o--, 1),
                      !e.unique));
                    o++
                  );
              return this;
            },
            has: function (e) {
              if (l)
                for (var t = 0, n = l.length; t < n; t++)
                  if (e === l[t]) return !0;
              return !1;
            },
            empty: function () {
              return (l = []), this;
            },
            disable: function () {
              return (l = c = t = void 0), this;
            },
            disabled: function () {
              return !l;
            },
            lock: function () {
              return (c = void 0), (t && !0 !== t) || p.disable(), this;
            },
            locked: function () {
              return !c;
            },
            fireWith: function (n, i) {
              return (
                c && (r ? e.once || c.push([n, i]) : (e.once && t) || d(n, i)),
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
      o.extend({
        Deferred: function (e) {
          var t,
            n = o.Callbacks('once memory'),
            r = o.Callbacks('once memory'),
            i = o.Callbacks('memory'),
            s = 'pending',
            a = { resolve: n, reject: r, notify: i },
            u = {
              done: n.add,
              fail: r.add,
              progress: i.add,
              state: function () {
                return s;
              },
              isResolved: n.fired,
              isRejected: r.fired,
              then: function (e, t, n) {
                return l.done(e).fail(t).progress(n), this;
              },
              always: function () {
                return (
                  l.done.apply(l, arguments).fail.apply(l, arguments), this
                );
              },
              pipe: function (e, t, n) {
                return o
                  .Deferred(function (r) {
                    o.each(
                      {
                        done: [e, 'resolve'],
                        fail: [t, 'reject'],
                        progress: [n, 'notify'],
                      },
                      function (e, t) {
                        var n,
                          i = t[0],
                          s = t[1];
                        o.isFunction(i)
                          ? l[e](function () {
                              (n = i.apply(this, arguments)) &&
                              o.isFunction(n.promise)
                                ? n
                                    .promise()
                                    .then(r.resolve, r.reject, r.notify)
                                : r[s + 'With'](this === l ? r : this, [n]);
                            })
                          : l[e](r[s]);
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
            l = u.promise({});
          for (t in a) (l[t] = a[t].fire), (l[t + 'With'] = a[t].fireWith);
          return (
            l
              .done(
                function () {
                  s = 'resolved';
                },
                r.disable,
                i.lock,
              )
              .fail(
                function () {
                  s = 'rejected';
                },
                n.disable,
                i.lock,
              ),
            e && e.call(l, l),
            l
          );
        },
        when: function (e) {
          var t = a.call(arguments, 0),
            n = 0,
            r = t.length,
            i = new Array(r),
            s = r,
            u = r <= 1 && e && o.isFunction(e.promise) ? e : o.Deferred(),
            l = u.promise();
          function c(e) {
            return function (n) {
              (t[e] = arguments.length > 1 ? a.call(arguments, 0) : n),
                --s || u.resolveWith(u, t);
            };
          }
          function f(e) {
            return function (t) {
              (i[e] = arguments.length > 1 ? a.call(arguments, 0) : t),
                u.notifyWith(l, i);
            };
          }
          if (r > 1) {
            for (; n < r; n++)
              t[n] && t[n].promise && o.isFunction(t[n].promise)
                ? t[n].promise().then(c(n), u.reject, f(n))
                : --s;
            s || u.resolveWith(u, t);
          } else u !== e && u.resolveWith(u, r ? [e] : []);
          return l;
        },
      }),
        (o.support = (function () {
          var e,
            t,
            r,
            i,
            s,
            a,
            u,
            l,
            c,
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
          (s = (i = n.createElement('select')).appendChild(
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
            (o.boxModel = e.boxModel = 'CSS1Compat' === n.compatMode),
            (a.checked = !0),
            (e.noCloneChecked = a.cloneNode(!0).checked),
            (i.disabled = !0),
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
              (d = (c = 'on' + f) in p) ||
                (p.setAttribute(c, 'return;'), (d = 'function' == typeof p[c])),
                (e[f + 'Bubbles'] = d);
          return (
            u.removeChild(p),
            (u = i = s = p = a = null),
            o(function () {
              var t,
                r,
                i,
                s,
                a,
                u,
                c,
                f = n.getElementsByTagName('body')[0];
              f &&
                ((c =
                  "style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;"),
                ((t = n.createElement('div')).style.cssText =
                  'padding:0;margin:0;border:0;visibility:hidden;width:0;height:0;position:static;top:0;margin-top:1px'),
                f.insertBefore(t, f.firstChild),
                (p = n.createElement('div')),
                t.appendChild(p),
                (p.innerHTML =
                  "<table><tr><td style='padding:0;margin:0;border:0;display:none'></td><td>t</td></tr></table>"),
                (l = p.getElementsByTagName('td')),
                (d = 0 === l[0].offsetHeight),
                (l[0].style.display = ''),
                (l[1].style.display = 'none'),
                (e.reliableHiddenOffsets = d && 0 === l[0].offsetHeight),
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
                (i = (r = p.firstChild).firstChild),
                (s = r.nextSibling.firstChild.firstChild),
                (a = {
                  doesNotAddBorder: 5 !== i.offsetTop,
                  doesAddBorderForTableAndCells: 5 === s.offsetTop,
                }),
                (i.style.position = 'fixed'),
                (i.style.top = '20px'),
                (a.fixedPosition = 20 === i.offsetTop || 15 === i.offsetTop),
                (i.style.position = i.style.top = ''),
                (r.style.overflow = 'hidden'),
                (r.style.position = 'relative'),
                (a.subtractsBorderForOverflowNotVisible = -5 === i.offsetTop),
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
                o.extend(e, a));
            }),
            e
          );
        })());
      var u = /^(?:\{.*\}|\[.*\])$/,
        l = /([A-Z])/g;
      function c(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
          var r = 'data-' + t.replace(l, '-$1').toLowerCase();
          if ('string' == typeof (n = e.getAttribute(r))) {
            try {
              n =
                'true' === n ||
                ('false' !== n &&
                  ('null' === n
                    ? null
                    : o.isNumeric(n)
                    ? +n
                    : u.test(n)
                    ? o.parseJSON(n)
                    : n));
            } catch (i) {}
            o.data(e, t, n);
          } else n = void 0;
        }
        return n;
      }
      function f(e) {
        for (var t in e)
          if (('data' !== t || !o.isEmptyObject(e[t])) && 'toJSON' !== t)
            return !1;
        return !0;
      }
      function d(e, t, n) {
        var r = t + 'defer',
          i = t + 'queue',
          s = t + 'mark',
          a = o._data(e, r);
        !a ||
          ('queue' !== n && o._data(e, i)) ||
          ('mark' !== n && o._data(e, s)) ||
          setTimeout(function () {
            o._data(e, i) ||
              o._data(e, s) ||
              (o.removeData(e, r, !0), a.fire());
          }, 0);
      }
      o.extend({
        cache: {},
        uuid: 0,
        expando: 'jQuery' + (o.fn.jquery + Math.random()).replace(/\D/g, ''),
        noData: {
          embed: !0,
          object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
          applet: !0,
        },
        hasData: function (e) {
          return (
            !!(e = e.nodeType ? o.cache[e[o.expando]] : e[o.expando]) && !f(e)
          );
        },
        data: function (e, t, n, r) {
          if (o.acceptData(e)) {
            var i,
              s,
              a,
              u = o.expando,
              l = 'string' == typeof t,
              c = e.nodeType,
              f = c ? o.cache : e,
              d = c ? e[u] : e[u] && u,
              p = 'events' === t;
            if ((d && f[d] && (p || r || f[d].data)) || !l || void 0 !== n)
              return (
                d || (c ? (e[u] = d = ++o.uuid) : (d = u)),
                f[d] || ((f[d] = {}), c || (f[d].toJSON = o.noop)),
                ('object' != typeof t && 'function' != typeof t) ||
                  (r
                    ? (f[d] = o.extend(f[d], t))
                    : (f[d].data = o.extend(f[d].data, t))),
                (i = s = f[d]),
                r || (s.data || (s.data = {}), (s = s.data)),
                void 0 !== n && (s[o.camelCase(t)] = n),
                p && !s[t]
                  ? i.events
                  : (l
                      ? null == (a = s[t]) && (a = s[o.camelCase(t)])
                      : (a = s),
                    a)
              );
          }
        },
        removeData: function (e, t, n) {
          if (o.acceptData(e)) {
            var r,
              i,
              s,
              a = o.expando,
              u = e.nodeType,
              l = u ? o.cache : e,
              c = u ? e[a] : a;
            if (l[c]) {
              if (t && (r = n ? l[c] : l[c].data)) {
                o.isArray(t) ||
                  (t =
                    t in r || (t = o.camelCase(t)) in r ? [t] : t.split(' '));
                for (i = 0, s = t.length; i < s; i++) delete r[t[i]];
                if (!(n ? f : o.isEmptyObject)(r)) return;
              }
              (n || (delete l[c].data, f(l[c]))) &&
                (o.support.deleteExpando || !l.setInterval
                  ? delete l[c]
                  : (l[c] = null),
                u &&
                  (o.support.deleteExpando
                    ? delete e[a]
                    : e.removeAttribute
                    ? e.removeAttribute(a)
                    : (e[a] = null)));
            }
          }
        },
        _data: function (e, t, n) {
          return o.data(e, t, n, !0);
        },
        acceptData: function (e) {
          if (e.nodeName) {
            var t = o.noData[e.nodeName.toLowerCase()];
            if (t) return !(!0 === t || e.getAttribute('classid') !== t);
          }
          return !0;
        },
      }),
        o.fn.extend({
          data: function (e, t) {
            var n,
              r,
              i,
              s,
              a,
              u = this[0],
              l = 0,
              f = null;
            if (void 0 === e) {
              if (
                this.length &&
                ((f = o.data(u)),
                1 === u.nodeType && !o._data(u, 'parsedAttrs'))
              ) {
                for (a = (i = u.attributes).length; l < a; l++)
                  0 === (s = i[l].name).indexOf('data-') &&
                    ((s = o.camelCase(s.substring(5))), c(u, s, f[s]));
                o._data(u, 'parsedAttrs', !0);
              }
              return f;
            }
            return 'object' == typeof e
              ? this.each(function () {
                  o.data(this, e);
                })
              : (((n = e.split('.', 2))[1] = n[1] ? '.' + n[1] : ''),
                (r = n[1] + '!'),
                o.access(
                  this,
                  function (t) {
                    if (void 0 === t)
                      return (
                        void 0 ===
                          (f = this.triggerHandler('getData' + r, [n[0]])) &&
                          u &&
                          ((f = o.data(u, e)), (f = c(u, e, f))),
                        void 0 === f && n[1] ? this.data(n[0]) : f
                      );
                    (n[1] = t),
                      this.each(function () {
                        var i = o(this);
                        i.triggerHandler('setData' + r, n),
                          o.data(this, e, t),
                          i.triggerHandler('changeData' + r, n);
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
              o.removeData(this, e);
            });
          },
        }),
        o.extend({
          _mark: function (e, t) {
            e &&
              ((t = (t || 'fx') + 'mark'),
              o._data(e, t, (o._data(e, t) || 0) + 1));
          },
          _unmark: function (e, t, n) {
            if ((!0 !== e && ((n = t), (t = e), (e = !1)), t)) {
              var r = (n = n || 'fx') + 'mark',
                i = e ? 0 : (o._data(t, r) || 1) - 1;
              i ? o._data(t, r, i) : (o.removeData(t, r, !0), d(t, n, 'mark'));
            }
          },
          queue: function (e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || 'fx') + 'queue'),
                (r = o._data(e, t)),
                n &&
                  (!r || o.isArray(n)
                    ? (r = o._data(e, t, o.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue: function (e, t) {
            t = t || 'fx';
            var n = o.queue(e, t),
              r = n.shift(),
              i = {};
            'inprogress' === r && (r = n.shift()),
              r &&
                ('fx' === t && n.unshift('inprogress'),
                o._data(e, t + '.run', i),
                r.call(
                  e,
                  function () {
                    o.dequeue(e, t);
                  },
                  i,
                )),
              n.length ||
                (o.removeData(e, t + 'queue ' + t + '.run', !0),
                d(e, t, 'queue'));
          },
        }),
        o.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              'string' != typeof e && ((t = e), (e = 'fx'), n--),
              arguments.length < n
                ? o.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = o.queue(this, e, t);
                    'fx' === e && 'inprogress' !== n[0] && o.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              o.dequeue(this, e);
            });
          },
          delay: function (e, t) {
            return (
              (e = (o.fx && o.fx.speeds[e]) || e),
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
              r = o.Deferred(),
              i = this,
              s = i.length,
              a = 1,
              u = e + 'defer',
              l = e + 'queue',
              c = e + 'mark';
            function f() {
              --a || r.resolveWith(i, [i]);
            }
            for (; s--; )
              (n =
                o.data(i[s], u, void 0, !0) ||
                ((o.data(i[s], l, void 0, !0) || o.data(i[s], c, void 0, !0)) &&
                  o.data(i[s], u, o.Callbacks('once memory'), !0))) &&
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
        k = o.support.getSetAttribute;
      o.fn.extend({
        attr: function (e, t) {
          return o.access(this, o.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            o.removeAttr(this, e);
          });
        },
        prop: function (e, t) {
          return o.access(this, o.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return (
            (e = o.propFix[e] || e),
            this.each(function () {
              try {
                (this[e] = void 0), delete this[e];
              } catch (t) {}
            })
          );
        },
        addClass: function (e) {
          var t, n, r, i, s, a, u;
          if (o.isFunction(e))
            return this.each(function (t) {
              o(this).addClass(e.call(this, t, this.className));
            });
          if (e && 'string' == typeof e)
            for (t = e.split(m), n = 0, r = this.length; n < r; n++)
              if (1 === (i = this[n]).nodeType)
                if (i.className || 1 !== t.length) {
                  for (
                    s = ' ' + i.className + ' ', a = 0, u = t.length;
                    a < u;
                    a++
                  )
                    ~s.indexOf(' ' + t[a] + ' ') || (s += t[a] + ' ');
                  i.className = o.trim(s);
                } else i.className = e;
          return this;
        },
        removeClass: function (e) {
          var t, n, r, i, s, a, u;
          if (o.isFunction(e))
            return this.each(function (t) {
              o(this).removeClass(e.call(this, t, this.className));
            });
          if ((e && 'string' == typeof e) || void 0 === e)
            for (t = (e || '').split(m), n = 0, r = this.length; n < r; n++)
              if (1 === (i = this[n]).nodeType && i.className)
                if (e) {
                  for (
                    s = (' ' + i.className + ' ').replace(v, ' '),
                      a = 0,
                      u = t.length;
                    a < u;
                    a++
                  )
                    s = s.replace(' ' + t[a] + ' ', ' ');
                  i.className = o.trim(s);
                } else i.className = '';
          return this;
        },
        toggleClass: function (e, t) {
          var n = typeof e,
            r = 'boolean' == typeof t;
          return o.isFunction(e)
            ? this.each(function (n) {
                o(this).toggleClass(e.call(this, n, this.className, t), t);
              })
            : this.each(function () {
                if ('string' === n)
                  for (
                    var i, s = 0, a = o(this), u = t, l = e.split(m);
                    (i = l[s++]);

                  )
                    (u = r ? u : !a.hasClass(i)),
                      a[u ? 'addClass' : 'removeClass'](i);
                else
                  ('undefined' !== n && 'boolean' !== n) ||
                    (this.className &&
                      o._data(this, '__className__', this.className),
                    (this.className =
                      this.className || !1 === e
                        ? ''
                        : o._data(this, '__className__') || ''));
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
            i = this[0];
          return arguments.length
            ? ((r = o.isFunction(e)),
              this.each(function (n) {
                var i,
                  s = o(this);
                1 === this.nodeType &&
                  (null == (i = r ? e.call(this, n, s.val()) : e)
                    ? (i = '')
                    : 'number' == typeof i
                    ? (i += '')
                    : o.isArray(i) &&
                      (i = o.map(i, function (e) {
                        return null == e ? '' : e + '';
                      })),
                  ((t =
                    o.valHooks[this.type] ||
                    o.valHooks[this.nodeName.toLowerCase()]) &&
                    'set' in t &&
                    void 0 !== t.set(this, i, 'value')) ||
                    (this.value = i));
              }))
            : i
            ? (t =
                o.valHooks[i.type] || o.valHooks[i.nodeName.toLowerCase()]) &&
              'get' in t &&
              void 0 !== (n = t.get(i, 'value'))
              ? n
              : 'string' == typeof (n = i.value)
              ? n.replace(y, '')
              : null == n
              ? ''
              : n
            : void 0;
        },
      }),
        o.extend({
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
                  i,
                  s = e.selectedIndex,
                  a = [],
                  u = e.options,
                  l = 'select-one' === e.type;
                if (s < 0) return null;
                for (n = l ? s : 0, r = l ? s + 1 : u.length; n < r; n++)
                  if (
                    (i = u[n]).selected &&
                    (o.support.optDisabled
                      ? !i.disabled
                      : null === i.getAttribute('disabled')) &&
                    (!i.parentNode.disabled ||
                      !o.nodeName(i.parentNode, 'optgroup'))
                  ) {
                    if (((t = o(i).val()), l)) return t;
                    a.push(t);
                  }
                return l && !a.length && u.length ? o(u[s]).val() : a;
              },
              set: function (e, t) {
                var n = o.makeArray(t);
                return (
                  o(e)
                    .find('option')
                    .each(function () {
                      this.selected = o.inArray(o(this).val(), n) >= 0;
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
            var i,
              s,
              a,
              u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u)
              return r && t in o.attrFn
                ? o(e)[t](n)
                : void 0 === e.getAttribute
                ? o.prop(e, t, n)
                : ((a = 1 !== u || !o.isXMLDoc(e)) &&
                    ((t = t.toLowerCase()),
                    (s = o.attrHooks[t] || (x.test(t) ? h : p))),
                  void 0 !== n
                    ? null === n
                      ? void o.removeAttr(e, t)
                      : s && 'set' in s && a && void 0 !== (i = s.set(e, n, t))
                      ? i
                      : (e.setAttribute(t, '' + n), n)
                    : s && 'get' in s && a && null !== (i = s.get(e, t))
                    ? i
                    : null === (i = e.getAttribute(t))
                    ? void 0
                    : i);
          },
          removeAttr: function (e, t) {
            var n,
              r,
              i,
              s,
              a,
              u = 0;
            if (t && 1 === e.nodeType)
              for (s = (r = t.toLowerCase().split(m)).length; u < s; u++)
                (i = r[u]) &&
                  ((n = o.propFix[i] || i),
                  (a = x.test(i)) || o.attr(e, i, ''),
                  e.removeAttribute(k ? i : n),
                  a && n in e && (e[n] = !1));
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (b.test(e.nodeName) && e.parentNode)
                  o.error("type property can't be changed");
                else if (
                  !o.support.radioValue &&
                  'radio' === t &&
                  o.nodeName(e, 'input')
                ) {
                  var n = e.value;
                  return e.setAttribute('type', t), n && (e.value = n), t;
                }
              },
            },
            value: {
              get: function (e, t) {
                return p && o.nodeName(e, 'button')
                  ? p.get(e, t)
                  : t in e
                  ? e.value
                  : null;
              },
              set: function (e, t, n) {
                if (p && o.nodeName(e, 'button')) return p.set(e, t, n);
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
              i,
              s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)
              return (
                (1 !== s || !o.isXMLDoc(e)) &&
                  ((t = o.propFix[t] || t), (i = o.propHooks[t])),
                void 0 !== n
                  ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : i && 'get' in i && null !== (r = i.get(e, t))
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
        (o.attrHooks.tabindex = o.propHooks.tabIndex),
        (h = {
          get: function (e, t) {
            var n,
              r = o.prop(e, t);
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
                ? o.removeAttr(e, n)
                : ((r = o.propFix[n] || n) in e && (e[r] = !0),
                  e.setAttribute(n, n.toLowerCase())),
              n
            );
          },
        }),
        k ||
          ((g = { name: !0, id: !0, coords: !0 }),
          (p = o.valHooks.button = {
            get: function (e, t) {
              var n;
              return (n = e.getAttributeNode(t)) &&
                (g[t] ? '' !== n.nodeValue : n.specified)
                ? n.nodeValue
                : void 0;
            },
            set: function (e, t, r) {
              var i = e.getAttributeNode(r);
              return (
                i || ((i = n.createAttribute(r)), e.setAttributeNode(i)),
                (i.nodeValue = t + '')
              );
            },
          }),
          (o.attrHooks.tabindex.set = p.set),
          o.each(['width', 'height'], function (e, t) {
            o.attrHooks[t] = o.extend(o.attrHooks[t], {
              set: function (e, n) {
                if ('' === n) return e.setAttribute(t, 'auto'), n;
              },
            });
          }),
          (o.attrHooks.contenteditable = {
            get: p.get,
            set: function (e, t, n) {
              '' === t && (t = 'false'), p.set(e, t, n);
            },
          })),
        o.support.hrefNormalized ||
          o.each(['href', 'src', 'width', 'height'], function (e, t) {
            o.attrHooks[t] = o.extend(o.attrHooks[t], {
              get: function (e) {
                var n = e.getAttribute(t, 2);
                return null === n ? void 0 : n;
              },
            });
          }),
        o.support.style ||
          (o.attrHooks.style = {
            get: function (e) {
              return e.style.cssText.toLowerCase() || void 0;
            },
            set: function (e, t) {
              return (e.style.cssText = '' + t);
            },
          }),
        o.support.optSelected ||
          (o.propHooks.selected = o.extend(o.propHooks.selected, {
            get: function (e) {
              var t = e.parentNode;
              return (
                t &&
                  (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
                null
              );
            },
          })),
        o.support.enctype || (o.propFix.enctype = 'encoding'),
        o.support.checkOn ||
          o.each(['radio', 'checkbox'], function () {
            o.valHooks[this] = {
              get: function (e) {
                return null === e.getAttribute('value') ? 'on' : e.value;
              },
            };
          }),
        o.each(['radio', 'checkbox'], function () {
          o.valHooks[this] = o.extend(o.valHooks[this], {
            set: function (e, t) {
              if (o.isArray(t))
                return (e.checked = o.inArray(o(e).val(), t) >= 0);
            },
          });
        });
      var S = /^(?:textarea|input|select)$/i,
        E = /^([^\.]*)?(?:\.(.+))?$/,
        T = /(?:^|\s)hover(\.\S+)?\b/,
        C = /^key/,
        N = /^(?:mouse|contextmenu)|click/,
        O = /^(?:focusinfocus|focusoutblur)$/,
        j = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        L = function (e) {
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
        P = function (e) {
          return o.event.special.hover
            ? e
            : e.replace(T, 'mouseenter$1 mouseleave$1');
        };
      function F() {
        return !1;
      }
      function D() {
        return !0;
      }
      (o.event = {
        add: function (e, t, n, r, i) {
          var s, a, u, l, c, f, d, p, h, g, v;
          if (
            3 !== e.nodeType &&
            8 !== e.nodeType &&
            t &&
            n &&
            (s = o._data(e))
          ) {
            for (
              n.handler && ((n = (h = n).handler), (i = h.selector)),
                n.guid || (n.guid = o.guid++),
                (u = s.events) || (s.events = u = {}),
                (a = s.handle) ||
                  ((s.handle = a = function (e) {
                    return void 0 === o || (e && o.event.triggered === e.type)
                      ? void 0
                      : o.event.dispatch.apply(a.elem, arguments);
                  }),
                  (a.elem = e)),
                t = o.trim(P(t)).split(' '),
                l = 0;
              l < t.length;
              l++
            )
              (f = (c = E.exec(t[l]) || [])[1]),
                (d = (c[2] || '').split('.').sort()),
                (v = o.event.special[f] || {}),
                (f = (i ? v.delegateType : v.bindType) || f),
                (v = o.event.special[f] || {}),
                (p = o.extend(
                  {
                    type: f,
                    origType: c[1],
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    quick: i && L(i),
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
                i ? g.splice(g.delegateCount++, 0, p) : g.push(p),
                (o.event.global[f] = !0);
            e = null;
          }
        },
        global: {},
        remove: function (e, t, n, r, i) {
          var s,
            a,
            u,
            l,
            c,
            f,
            d,
            p,
            h,
            g,
            v,
            m,
            y = o.hasData(e) && o._data(e);
          if (y && (p = y.events)) {
            for (t = o.trim(P(t || '')).split(' '), s = 0; s < t.length; s++)
              if (((u = l = (a = E.exec(t[s]) || [])[1]), (c = a[2]), u)) {
                for (
                  h = o.event.special[u] || {},
                    f = (v =
                      p[(u = (r ? h.delegateType : h.bindType) || u)] || [])
                      .length,
                    c = c
                      ? new RegExp(
                          '(^|\\.)' +
                            c.split('.').sort().join('\\.(?:.*\\.)?') +
                            '(\\.|$)',
                        )
                      : null,
                    d = 0;
                  d < v.length;
                  d++
                )
                  (m = v[d]),
                    (!i && l !== m.origType) ||
                      (n && n.guid !== m.guid) ||
                      (c && !c.test(m.namespace)) ||
                      (r && r !== m.selector && ('**' !== r || !m.selector)) ||
                      (v.splice(d--, 1),
                      m.selector && v.delegateCount--,
                      h.remove && h.remove.call(e, m));
                0 === v.length &&
                  f !== v.length &&
                  ((h.teardown && !1 !== h.teardown.call(e, c)) ||
                    o.removeEvent(e, u, y.handle),
                  delete p[u]);
              } else for (u in p) o.event.remove(e, u + t[s], n, r, !0);
            o.isEmptyObject(p) &&
              ((g = y.handle) && (g.elem = null),
              o.removeData(e, ['events', 'handle'], !0));
          }
        },
        customEvent: { getData: !0, setData: !0, changeData: !0 },
        trigger: function (e, t, n, r) {
          if (!n || (3 !== n.nodeType && 8 !== n.nodeType)) {
            var i,
              s,
              a,
              u,
              l,
              c,
              f,
              d,
              p,
              h,
              g = e.type || e,
              v = [];
            if (
              !O.test(g + o.event.triggered) &&
              (g.indexOf('!') >= 0 && ((g = g.slice(0, -1)), (s = !0)),
              g.indexOf('.') >= 0 &&
                ((v = g.split('.')), (g = v.shift()), v.sort()),
              (n && !o.event.customEvent[g]) || o.event.global[g])
            )
              if (
                (((e =
                  'object' == typeof e
                    ? e[o.expando]
                      ? e
                      : new o.Event(g, e)
                    : new o.Event(g)).type = g),
                (e.isTrigger = !0),
                (e.exclusive = s),
                (e.namespace = v.join('.')),
                (e.namespace_re = e.namespace
                  ? new RegExp('(^|\\.)' + v.join('\\.(?:.*\\.)?') + '(\\.|$)')
                  : null),
                (c = g.indexOf(':') < 0 ? 'on' + g : ''),
                n)
              ) {
                if (
                  ((e.result = void 0),
                  e.target || (e.target = n),
                  (t = null != t ? o.makeArray(t) : []).unshift(e),
                  !(f = o.event.special[g] || {}).trigger ||
                    !1 !== f.trigger.apply(n, t))
                ) {
                  if (
                    ((p = [[n, f.bindType || g]]),
                    !r && !f.noBubble && !o.isWindow(n))
                  ) {
                    for (
                      h = f.delegateType || g,
                        u = O.test(h + g) ? n : n.parentNode,
                        l = null;
                      u;
                      u = u.parentNode
                    )
                      p.push([u, h]), (l = u);
                    l &&
                      l === n.ownerDocument &&
                      p.push([l.defaultView || l.parentWindow || window, h]);
                  }
                  for (a = 0; a < p.length && !e.isPropagationStopped(); a++)
                    (u = p[a][0]),
                      (e.type = p[a][1]),
                      (d =
                        (o._data(u, 'events') || {})[e.type] &&
                        o._data(u, 'handle')) && d.apply(u, t),
                      (d = c && u[c]) &&
                        o.acceptData(u) &&
                        !1 === d.apply(u, t) &&
                        e.preventDefault();
                  return (
                    (e.type = g),
                    r ||
                      e.isDefaultPrevented() ||
                      (f._default &&
                        !1 !== f._default.apply(n.ownerDocument, t)) ||
                      ('click' === g && o.nodeName(n, 'a')) ||
                      !o.acceptData(n) ||
                      (c &&
                        n[g] &&
                        (('focus' !== g && 'blur' !== g) ||
                          0 !== e.target.offsetWidth) &&
                        !o.isWindow(n) &&
                        ((l = n[c]) && (n[c] = null),
                        (o.event.triggered = g),
                        n[g](),
                        (o.event.triggered = void 0),
                        l && (n[c] = l))),
                    e.result
                  );
                }
              } else
                for (a in (i = o.cache))
                  i[a].events &&
                    i[a].events[g] &&
                    o.event.trigger(e, t, i[a].handle.elem, !0);
          }
        },
        dispatch: function (e) {
          e = o.event.fix(e || window.event);
          var t,
            n,
            r,
            i,
            s,
            a,
            u,
            l,
            c,
            f,
            d = (o._data(this, 'events') || {})[e.type] || [],
            p = d.delegateCount,
            h = [].slice.call(arguments, 0),
            g = !e.exclusive && !e.namespace,
            v = o.event.special[e.type] || {},
            m = [];
          if (
            ((h[0] = e),
            (e.delegateTarget = this),
            !v.preDispatch || !1 !== v.preDispatch.call(this, e))
          ) {
            if (p && (!e.button || 'click' !== e.type))
              for (
                (i = o(this)).context = this.ownerDocument || this,
                  r = e.target;
                r != this;
                r = r.parentNode || this
              )
                if (!0 !== r.disabled) {
                  for (a = {}, l = [], i[0] = r, t = 0; t < p; t++)
                    void 0 === a[(f = (c = d[t]).selector)] &&
                      (a[f] = c.quick ? A(r, c.quick) : i.is(f)),
                      a[f] && l.push(c);
                  l.length && m.push({ elem: r, matches: l });
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
                (c = u.matches[n]),
                  (g ||
                    (!e.namespace && !c.namespace) ||
                    (e.namespace_re && e.namespace_re.test(c.namespace))) &&
                    ((e.data = c.data),
                    (e.handleObj = c),
                    void 0 !==
                      (s = (
                        (o.event.special[c.origType] || {}).handle || c.handler
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
              i,
              o,
              s = t.button,
              a = t.fromElement;
            return (
              null == e.pageX &&
                null != t.clientX &&
                ((i = (r = e.target.ownerDocument || n).documentElement),
                (o = r.body),
                (e.pageX =
                  t.clientX +
                  ((i && i.scrollLeft) || (o && o.scrollLeft) || 0) -
                  ((i && i.clientLeft) || (o && o.clientLeft) || 0)),
                (e.pageY =
                  t.clientY +
                  ((i && i.scrollTop) || (o && o.scrollTop) || 0) -
                  ((i && i.clientTop) || (o && o.clientTop) || 0))),
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
          if (e[o.expando]) return e;
          var t,
            r,
            i = e,
            s = o.event.fixHooks[e.type] || {},
            a = s.props ? this.props.concat(s.props) : this.props;
          for (e = o.Event(i), t = a.length; t; ) e[(r = a[--t])] = i[r];
          return (
            e.target || (e.target = i.srcElement || n),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            void 0 === e.metaKey && (e.metaKey = e.ctrlKey),
            s.filter ? s.filter(e, i) : e
          );
        },
        special: {
          ready: { setup: o.bindReady },
          load: { noBubble: !0 },
          focus: { delegateType: 'focusin' },
          blur: { delegateType: 'focusout' },
          beforeunload: {
            setup: function (e, t, n) {
              o.isWindow(this) && (this.onbeforeunload = n);
            },
            teardown: function (e, t) {
              this.onbeforeunload === t && (this.onbeforeunload = null);
            },
          },
        },
        simulate: function (e, t, n, r) {
          var i = o.extend(new o.Event(), n, {
            type: e,
            isSimulated: !0,
            originalEvent: {},
          });
          r ? o.event.trigger(i, null, t) : o.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault();
        },
      }),
        (o.event.handle = o.event.dispatch),
        (o.removeEvent = n.removeEventListener
          ? function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n, !1);
            }
          : function (e, t, n) {
              e.detachEvent && e.detachEvent('on' + t, n);
            }),
        (o.Event = function (e, t) {
          if (!(this instanceof o.Event)) return new o.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                !1 === e.returnValue ||
                (e.getPreventDefault && e.getPreventDefault())
                  ? D
                  : F))
            : (this.type = e),
            t && o.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || o.now()),
            (this[o.expando] = !0);
        }),
        (o.Event.prototype = {
          preventDefault: function () {
            this.isDefaultPrevented = D;
            var e = this.originalEvent;
            e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
          },
          stopPropagation: function () {
            this.isPropagationStopped = D;
            var e = this.originalEvent;
            e &&
              (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
          },
          stopImmediatePropagation: function () {
            (this.isImmediatePropagationStopped = D), this.stopPropagation();
          },
          isDefaultPrevented: F,
          isPropagationStopped: F,
          isImmediatePropagationStopped: F,
        }),
        o.each(
          { mouseenter: 'mouseover', mouseleave: 'mouseout' },
          function (e, t) {
            o.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = this,
                  i = e.relatedTarget,
                  s = e.handleObj;
                s.selector;
                return (
                  (i && (i === r || o.contains(r, i))) ||
                    ((e.type = s.origType),
                    (n = s.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          },
        ),
        o.support.submitBubbles ||
          (o.event.special.submit = {
            setup: function () {
              if (o.nodeName(this, 'form')) return !1;
              o.event.add(this, 'click._submit keypress._submit', function (e) {
                var t = e.target,
                  n =
                    o.nodeName(t, 'input') || o.nodeName(t, 'button')
                      ? t.form
                      : void 0;
                n &&
                  !n._submit_attached &&
                  (o.event.add(n, 'submit._submit', function (e) {
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
                  o.event.simulate('submit', this.parentNode, e, !0));
            },
            teardown: function () {
              if (o.nodeName(this, 'form')) return !1;
              o.event.remove(this, '._submit');
            },
          }),
        o.support.changeBubbles ||
          (o.event.special.change = {
            setup: function () {
              if (S.test(this.nodeName))
                return (
                  ('checkbox' !== this.type && 'radio' !== this.type) ||
                    (o.event.add(this, 'propertychange._change', function (e) {
                      'checked' === e.originalEvent.propertyName &&
                        (this._just_changed = !0);
                    }),
                    o.event.add(this, 'click._change', function (e) {
                      this._just_changed &&
                        !e.isTrigger &&
                        ((this._just_changed = !1),
                        o.event.simulate('change', this, e, !0));
                    })),
                  !1
                );
              o.event.add(this, 'beforeactivate._change', function (e) {
                var t = e.target;
                S.test(t.nodeName) &&
                  !t._change_attached &&
                  (o.event.add(t, 'change._change', function (e) {
                    !this.parentNode ||
                      e.isSimulated ||
                      e.isTrigger ||
                      o.event.simulate('change', this.parentNode, e, !0);
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
              return o.event.remove(this, '._change'), S.test(this.nodeName);
            },
          }),
        o.support.focusinBubbles ||
          o.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
            var r = 0,
              i = function (e) {
                o.event.simulate(t, e.target, o.event.fix(e), !0);
              };
            o.event.special[t] = {
              setup: function () {
                0 == r++ && n.addEventListener(e, i, !0);
              },
              teardown: function () {
                0 == --r && n.removeEventListener(e, i, !0);
              },
            };
          }),
        o.fn.extend({
          on: function (e, t, n, r, i) {
            var s, a;
            if ('object' == typeof e) {
              for (a in ('string' != typeof t && ((n = n || t), (t = void 0)),
              e))
                this.on(a, t, n, e[a], i);
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
              r = F;
            else if (!r) return this;
            return (
              1 === i &&
                ((s = r),
                ((r = function (e) {
                  return o().off(e), s.apply(this, arguments);
                }).guid = s.guid || (s.guid = o.guid++))),
              this.each(function () {
                o.event.add(this, e, r, n, t);
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
                o(e.delegateTarget).off(
                  r.namespace ? r.origType + '.' + r.namespace : r.origType,
                  r.selector,
                  r.handler,
                ),
                this
              );
            }
            if ('object' == typeof e) {
              for (var i in e) this.off(i, t, e[i]);
              return this;
            }
            return (
              (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = F),
              this.each(function () {
                o.event.remove(this, e, n, t);
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
            return o(this.context).on(e, this.selector, t, n), this;
          },
          die: function (e, t) {
            return o(this.context).off(e, this.selector || '**', t), this;
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
              o.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            if (this[0]) return o.event.trigger(e, t, this[0], !0);
          },
          toggle: function (e) {
            var t = arguments,
              n = e.guid || o.guid++,
              r = 0,
              i = function (n) {
                var i = (o._data(this, 'lastToggle' + e.guid) || 0) % r;
                return (
                  o._data(this, 'lastToggle' + e.guid, i + 1),
                  n.preventDefault(),
                  t[i].apply(this, arguments) || !1
                );
              };
            for (i.guid = n; r < t.length; ) t[r++].guid = n;
            return this.click(i);
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        o.each(
          'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
            ' ',
          ),
          function (e, t) {
            (o.fn[t] = function (e, n) {
              return (
                null == n && ((n = e), (e = null)),
                arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
              );
            }),
              o.attrFn && (o.attrFn[t] = !0),
              C.test(t) && (o.event.fixHooks[t] = o.event.keyHooks),
              N.test(t) && (o.event.fixHooks[t] = o.event.mouseHooks);
          },
        ),
        (function () {
          var e = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            t = 'sizcache' + (Math.random() + '').replace('.', ''),
            r = 0,
            i = Object.prototype.toString,
            s = !1,
            a = !0,
            u = /\\/g,
            l = /\r\n/g,
            c = /\W/;
          [0, 0].sort(function () {
            return (a = !1), 0;
          });
          var f = function (t, r, o, s) {
            o = o || [];
            var a = (r = r || n);
            if (1 !== r.nodeType && 9 !== r.nodeType) return [];
            if (!t || 'string' != typeof t) return o;
            var u,
              l,
              c,
              d,
              g,
              v,
              m,
              y,
              b = !0,
              w = f.isXML(r),
              x = [],
              S = t;
            do {
              if (
                (e.exec(''),
                (u = e.exec(S)) && ((S = u[3]), x.push(u[1]), u[2]))
              ) {
                d = u[3];
                break;
              }
            } while (u);
            if (x.length > 1 && h.exec(t))
              if (2 === x.length && p.relative[x[0]]) l = k(x[0] + x[1], r, s);
              else
                for (l = p.relative[x[0]] ? [r] : f(x.shift(), r); x.length; )
                  (t = x.shift()),
                    p.relative[t] && (t += x.shift()),
                    (l = k(t, l, s));
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
                l = (g = s
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
                  x.length > 0 ? (c = _(l)) : (b = !1);
                x.length;

              )
                (m = v = x.pop()),
                  p.relative[v] ? (m = x.pop()) : (v = ''),
                  null == m && (m = r),
                  p.relative[v](c, m, w);
            else c = x = [];
            if (
              (c || (c = l),
              c || f.error(v || t),
              '[object Array]' === i.call(c))
            )
              if (b)
                if (r && 1 === r.nodeType)
                  for (y = 0; null != c[y]; y++)
                    c[y] &&
                      (!0 === c[y] ||
                        (1 === c[y].nodeType && f.contains(r, c[y]))) &&
                      o.push(l[y]);
                else
                  for (y = 0; null != c[y]; y++)
                    c[y] && 1 === c[y].nodeType && o.push(l[y]);
              else o.push.apply(o, c);
            else _(c, o);
            return d && (f(d, a, o, s), f.uniqueSort(o)), o;
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
              var r, i, o, s, a, l;
              if (!e) return [];
              for (i = 0, o = p.order.length; i < o; i++)
                if (
                  ((a = p.order[i]),
                  (s = p.leftMatch[a].exec(e)) &&
                    ((l = s[1]),
                    s.splice(1, 1),
                    '\\' !== l.substr(l.length - 1) &&
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
                var i,
                  o,
                  s,
                  a,
                  u,
                  l,
                  c,
                  d,
                  h,
                  g = e,
                  v = [],
                  m = t,
                  y = t && t[0] && f.isXML(t[0]);
                e && t.length;

              ) {
                for (s in p.filter)
                  if (null != (i = p.leftMatch[s].exec(e)) && i[2]) {
                    if (
                      ((l = p.filter[s]),
                      (c = i[1]),
                      (o = !1),
                      i.splice(1, 1),
                      '\\' === c.substr(c.length - 1))
                    )
                      continue;
                    if ((m === v && (v = []), p.preFilter[s]))
                      if ((i = p.preFilter[s](i, m, n, v, r, y))) {
                        if (!0 === i) continue;
                      } else o = a = !0;
                    if (i)
                      for (d = 0; null != (u = m[d]); d++)
                        u &&
                          ((h = r ^ (a = l(u, i, d, m))),
                          n && null != a
                            ? h
                              ? (o = !0)
                              : (m[d] = !1)
                            : h && (v.push(u), (o = !0)));
                    if (void 0 !== a) {
                      if ((n || (m = v), (e = e.replace(p.match[s], '')), !o))
                        return [];
                      break;
                    }
                  }
                if (e === g) {
                  if (null != o) break;
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
                i = '';
              if (r) {
                if (1 === r || 9 === r || 11 === r) {
                  if ('string' == typeof e.textContent) return e.textContent;
                  if ('string' == typeof e.innerText)
                    return e.innerText.replace(l, '');
                  for (e = e.firstChild; e; e = e.nextSibling) i += d(e);
                } else if (3 === r || 4 === r) return e.nodeValue;
              } else
                for (t = 0; (n = e[t]); t++) 8 !== n.nodeType && (i += d(n));
              return i;
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
                    r = n && !c.test(t),
                    i = n && !r;
                  r && (t = t.toLowerCase());
                  for (var o, s = 0, a = e.length; s < a; s++)
                    if ((o = e[s])) {
                      for (; (o = o.previousSibling) && 1 !== o.nodeType; );
                      e[s] =
                        i || (o && o.nodeName.toLowerCase() === t)
                          ? o || !1
                          : o === t;
                    }
                  i && f.filter(t, e, !0);
                },
                '>': function (e, t) {
                  var n,
                    r = 'string' == typeof t,
                    i = 0,
                    o = e.length;
                  if (r && !c.test(t)) {
                    for (t = t.toLowerCase(); i < o; i++)
                      if ((n = e[i])) {
                        var s = n.parentNode;
                        e[i] = s.nodeName.toLowerCase() === t && s;
                      }
                  } else {
                    for (; i < o; i++)
                      (n = e[i]) &&
                        (e[i] = r ? n.parentNode : n.parentNode === t);
                    r && f.filter(t, e, !0);
                  }
                },
                '': function (e, t, n) {
                  var i,
                    o = r++,
                    s = x;
                  'string' != typeof t ||
                    c.test(t) ||
                    ((i = t = t.toLowerCase()), (s = w)),
                    s('parentNode', t, o, e, i, n);
                },
                '~': function (e, t, n) {
                  var i,
                    o = r++,
                    s = x;
                  'string' != typeof t ||
                    c.test(t) ||
                    ((i = t = t.toLowerCase()), (s = w)),
                    s('previousSibling', t, o, e, i, n);
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
                        i = 0,
                        o = r.length;
                      i < o;
                      i++
                    )
                      r[i].getAttribute('name') === e[1] && n.push(r[i]);
                    return 0 === n.length ? null : n;
                  }
                },
                TAG: function (e, t) {
                  if (void 0 !== t.getElementsByTagName)
                    return t.getElementsByTagName(e[1]);
                },
              },
              preFilter: {
                CLASS: function (e, t, n, r, i, o) {
                  if (((e = ' ' + e[1].replace(u, '') + ' '), o)) return e;
                  for (var s, a = 0; null != (s = t[a]); a++)
                    s &&
                      (i ^
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
                ATTR: function (e, t, n, r, i, o) {
                  var s = (e[1] = e[1].replace(u, ''));
                  return (
                    !o && p.attrMap[s] && (e[1] = p.attrMap[s]),
                    (e[4] = (e[4] || e[5] || '').replace(u, '')),
                    '~=' === e[2] && (e[4] = ' ' + e[4] + ' '),
                    e
                  );
                },
                PSEUDO: function (t, n, r, i, o) {
                  if ('not' === t[1]) {
                    if (
                      !((e.exec(t[3]) || '').length > 1 || /^\w/.test(t[3]))
                    ) {
                      var s = f.filter(t[3], n, r, !0 ^ o);
                      return r || i.push.apply(i, s), !1;
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
                  var i = t[1],
                    o = p.filters[i];
                  if (o) return o(e, n, t, r);
                  if ('contains' === i)
                    return (
                      (e.textContent || e.innerText || d([e]) || '').indexOf(
                        t[3],
                      ) >= 0
                    );
                  if ('not' === i) {
                    for (var s = t[3], a = 0, u = s.length; a < u; a++)
                      if (s[a] === e) return !1;
                    return !0;
                  }
                  f.error(i);
                },
                CHILD: function (e, n) {
                  var r,
                    i,
                    o,
                    s,
                    a,
                    u,
                    l = n[1],
                    c = e;
                  switch (l) {
                    case 'only':
                    case 'first':
                      for (; (c = c.previousSibling); )
                        if (1 === c.nodeType) return !1;
                      if ('first' === l) return !0;
                      c = e;
                    case 'last':
                      for (; (c = c.nextSibling); )
                        if (1 === c.nodeType) return !1;
                      return !0;
                    case 'nth':
                      if (((r = n[2]), (i = n[3]), 1 === r && 0 === i))
                        return !0;
                      if (
                        ((o = n[0]),
                        (s = e.parentNode) && (s[t] !== o || !e.nodeIndex))
                      ) {
                        for (a = 0, c = s.firstChild; c; c = c.nextSibling)
                          1 === c.nodeType && (c.nodeIndex = ++a);
                        s[t] = o;
                      }
                      return (
                        (u = e.nodeIndex - i),
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
                    i = r + '',
                    o = t[2],
                    s = t[4];
                  return null == r
                    ? '!=' === o
                    : !o && f.attr
                    ? null != r
                    : '=' === o
                    ? i === s
                    : '*=' === o
                    ? i.indexOf(s) >= 0
                    : '~=' === o
                    ? (' ' + i + ' ').indexOf(s) >= 0
                    : s
                    ? '!=' === o
                      ? i !== s
                      : '^=' === o
                      ? 0 === i.indexOf(s)
                      : '$=' === o
                      ? i.substr(i.length - s.length) === s
                      : '|=' === o &&
                        (i === s || i.substr(0, s.length + 1) === s + '-')
                    : i && !1 !== r;
                },
                POS: function (e, t, n, r) {
                  var i = t[2],
                    o = p.setFilters[i];
                  if (o) return o(e, n, t, r);
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
          } catch (S) {
            _ = function (e, t) {
              var n = 0,
                r = t || [];
              if ('[object Array]' === i.call(e))
                Array.prototype.push.apply(r, e);
              else if ('number' == typeof e.length)
                for (var o = e.length; n < o; n++) r.push(e[n]);
              else for (; e[n]; n++) r.push(e[n]);
              return r;
            };
          }
          function w(e, n, r, i, o, s) {
            for (var a = 0, u = i.length; a < u; a++) {
              var l = i[a];
              if (l) {
                var c = !1;
                for (l = l[e]; l; ) {
                  if (l[t] === r) {
                    c = i[l.sizset];
                    break;
                  }
                  if (
                    (1 !== l.nodeType || s || ((l[t] = r), (l.sizset = a)),
                    l.nodeName.toLowerCase() === n)
                  ) {
                    c = l;
                    break;
                  }
                  l = l[e];
                }
                i[a] = c;
              }
            }
          }
          function x(e, n, r, i, o, s) {
            for (var a = 0, u = i.length; a < u; a++) {
              var l = i[a];
              if (l) {
                var c = !1;
                for (l = l[e]; l; ) {
                  if (l[t] === r) {
                    c = i[l.sizset];
                    break;
                  }
                  if (1 === l.nodeType)
                    if (
                      (s || ((l[t] = r), (l.sizset = a)), 'string' != typeof n)
                    ) {
                      if (l === n) {
                        c = !0;
                        break;
                      }
                    } else if (f.filter(n, [l]).length > 0) {
                      c = l;
                      break;
                    }
                  l = l[e];
                }
                i[a] = c;
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
                  i = [],
                  o = [],
                  a = e.parentNode,
                  u = t.parentNode,
                  l = a;
                if (a === u) return y(e, t);
                if (!a) return -1;
                if (!u) return 1;
                for (; l; ) i.unshift(l), (l = l.parentNode);
                for (l = u; l; ) o.unshift(l), (l = l.parentNode);
                (n = i.length), (r = o.length);
                for (var c = 0; c < n && c < r; c++)
                  if (i[c] !== o[c]) return y(i[c], o[c]);
                return c === n ? y(e, o[c], -1) : y(i[c], t, 1);
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
                  for (var r = [], i = 0; n[i]; i++)
                    1 === n[i].nodeType && r.push(n[i]);
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
                  for (var r in ((f = function (t, r, i, o) {
                    if (((r = r || n), !o && !f.isXML(r))) {
                      var s = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                      if (s && (1 === r.nodeType || 9 === r.nodeType)) {
                        if (s[1]) return _(r.getElementsByTagName(t), i);
                        if (s[2] && p.find.CLASS && r.getElementsByClassName)
                          return _(r.getElementsByClassName(s[2]), i);
                      }
                      if (9 === r.nodeType) {
                        if ('body' === t && r.body) return _([r.body], i);
                        if (s && s[3]) {
                          var a = r.getElementById(s[3]);
                          if (!a || !a.parentNode) return _([], i);
                          if (a.id === s[3]) return _([a], i);
                        }
                        try {
                          return _(r.querySelectorAll(t), i);
                        } catch (g) {}
                      } else if (
                        1 === r.nodeType &&
                        'object' !== r.nodeName.toLowerCase()
                      ) {
                        var u = r,
                          l = r.getAttribute('id'),
                          c = l || '__sizzle__',
                          d = r.parentNode,
                          h = /^\s*[+~]/.test(t);
                        l
                          ? (c = c.replace(/'/g, '\\$&'))
                          : r.setAttribute('id', c),
                          h && d && (r = r.parentNode);
                        try {
                          if (!h || d)
                            return _(
                              r.querySelectorAll("[id='" + c + "'] " + t),
                              i,
                            );
                        } catch (v) {
                        } finally {
                          l || u.removeAttribute('id');
                        }
                      }
                    }
                    return e(t, r, i, o);
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
                  i = !1;
                try {
                  t.call(n.documentElement, "[test!='']:sizzle");
                } catch (o) {
                  i = !0;
                }
                f.matchesSelector = function (e, n) {
                  if (
                    ((n = n.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']")),
                    !f.isXML(e))
                  )
                    try {
                      if (i || (!p.match.PSEUDO.test(n) && !/!=/.test(n))) {
                        var o = t.call(e, n);
                        if (
                          o ||
                          !r ||
                          (e.document && 11 !== e.document.nodeType)
                        )
                          return o;
                      }
                    } catch (S) {}
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
          var k = function (e, t, n) {
            for (
              var r, i = [], o = '', s = t.nodeType ? [t] : t;
              (r = p.match.PSEUDO.exec(e));

            )
              (o += r[0]), (e = e.replace(p.match.PSEUDO, ''));
            e = p.relative[e] ? e + '*' : e;
            for (var a = 0, u = s.length; a < u; a++) f(e, s[a], i, n);
            return f.filter(o, i);
          };
          (f.attr = o.attr),
            (f.selectors.attrMap = {}),
            (o.find = f),
            (o.expr = f.selectors),
            (o.expr[':'] = o.expr.filters),
            (o.unique = f.uniqueSort),
            (o.text = f.getText),
            (o.isXMLDoc = f.isXML),
            (o.contains = f.contains);
        })();
      var R = /Until$/,
        M = /^(?:parents|prevUntil|prevAll)/,
        I = /,/,
        H = /^.[^:#\[\.,]*$/,
        B = Array.prototype.slice,
        q = o.expr.match.globalPOS,
        W = { children: !0, contents: !0, next: !0, prev: !0 };
      function z(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType;
      }
      function V(e, t, n) {
        if (((t = t || 0), o.isFunction(t)))
          return o.grep(e, function (e, r) {
            return !!t.call(e, r, e) === n;
          });
        if (t.nodeType)
          return o.grep(e, function (e, r) {
            return (e === t) === n;
          });
        if ('string' == typeof t) {
          var r = o.grep(e, function (e) {
            return 1 === e.nodeType;
          });
          if (H.test(t)) return o.filter(t, r, !n);
          t = o.filter(t, r);
        }
        return o.grep(e, function (e, r) {
          return o.inArray(e, t) >= 0 === n;
        });
      }
      function U(e) {
        var t = $.split('|'),
          n = e.createDocumentFragment();
        if (n.createElement) for (; t.length; ) n.createElement(t.pop());
        return n;
      }
      o.fn.extend({
        find: function (e) {
          var t,
            n,
            r = this;
          if ('string' != typeof e)
            return o(e).filter(function () {
              for (t = 0, n = r.length; t < n; t++)
                if (o.contains(r[t], this)) return !0;
            });
          var i,
            s,
            a,
            u = this.pushStack('', 'find', e);
          for (t = 0, n = this.length; t < n; t++)
            if (((i = u.length), o.find(e, this[t], u), t > 0))
              for (s = i; s < u.length; s++)
                for (a = 0; a < i; a++)
                  if (u[a] === u[s]) {
                    u.splice(s--, 1);
                    break;
                  }
          return u;
        },
        has: function (e) {
          var t = o(e);
          return this.filter(function () {
            for (var e = 0, n = t.length; e < n; e++)
              if (o.contains(this, t[e])) return !0;
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
                ? o(e, this.context).index(this[0]) >= 0
                : o.filter(e, this).length > 0
              : this.filter(e).length > 0)
          );
        },
        closest: function (e, t) {
          var n,
            r,
            i = [],
            s = this[0];
          if (o.isArray(e)) {
            for (var a = 1; s && s.ownerDocument && s !== t; ) {
              for (n = 0; n < e.length; n++)
                o(s).is(e[n]) && i.push({ selector: e[n], elem: s, level: a });
              (s = s.parentNode), a++;
            }
            return i;
          }
          var u =
            q.test(e) || 'string' != typeof e ? o(e, t || this.context) : 0;
          for (n = 0, r = this.length; n < r; n++)
            for (s = this[n]; s; ) {
              if (u ? u.index(s) > -1 : o.find.matchesSelector(s, e)) {
                i.push(s);
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
            (i = i.length > 1 ? o.unique(i) : i),
            this.pushStack(i, 'closest', e)
          );
        },
        index: function (e) {
          return e
            ? 'string' == typeof e
              ? o.inArray(this[0], o(e))
              : o.inArray(e.jquery ? e[0] : e, this)
            : this[0] && this[0].parentNode
            ? this.prevAll().length
            : -1;
        },
        add: function (e, t) {
          var n =
              'string' == typeof e
                ? o(e, t)
                : o.makeArray(e && e.nodeType ? [e] : e),
            r = o.merge(this.get(), n);
          return this.pushStack(z(n[0]) || z(r[0]) ? r : o.unique(r));
        },
        andSelf: function () {
          return this.add(this.prevObject);
        },
      }),
        o.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return o.dir(e, 'parentNode');
            },
            parentsUntil: function (e, t, n) {
              return o.dir(e, 'parentNode', n);
            },
            next: function (e) {
              return o.nth(e, 2, 'nextSibling');
            },
            prev: function (e) {
              return o.nth(e, 2, 'previousSibling');
            },
            nextAll: function (e) {
              return o.dir(e, 'nextSibling');
            },
            prevAll: function (e) {
              return o.dir(e, 'previousSibling');
            },
            nextUntil: function (e, t, n) {
              return o.dir(e, 'nextSibling', n);
            },
            prevUntil: function (e, t, n) {
              return o.dir(e, 'previousSibling', n);
            },
            siblings: function (e) {
              return o.sibling((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return o.sibling(e.firstChild);
            },
            contents: function (e) {
              return o.nodeName(e, 'iframe')
                ? e.contentDocument || e.contentWindow.document
                : o.makeArray(e.childNodes);
            },
          },
          function (e, t) {
            o.fn[e] = function (n, r) {
              var i = o.map(this, t, n);
              return (
                R.test(e) || (r = n),
                r && 'string' == typeof r && (i = o.filter(r, i)),
                (i = this.length > 1 && !W[e] ? o.unique(i) : i),
                (this.length > 1 || I.test(r)) &&
                  M.test(e) &&
                  (i = i.reverse()),
                this.pushStack(i, e, B.call(arguments).join(','))
              );
            };
          },
        ),
        o.extend({
          filter: function (e, t, n) {
            return (
              n && (e = ':not(' + e + ')'),
              1 === t.length
                ? o.find.matchesSelector(t[0], e)
                  ? [t[0]]
                  : []
                : o.find.matches(e, t)
            );
          },
          dir: function (e, t, n) {
            for (
              var r = [], i = e[t];
              i &&
              9 !== i.nodeType &&
              (void 0 === n || 1 !== i.nodeType || !o(i).is(n));

            )
              1 === i.nodeType && r.push(i), (i = i[t]);
            return r;
          },
          nth: function (e, t, n, r) {
            t = t || 1;
            for (var i = 0; e && (1 !== e.nodeType || ++i !== t); e = e[n]);
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
        ie = /^\s*<!(?:\[CDATA\[|\-\-)/,
        oe = {
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
        return o.nodeName(e, 'table')
          ? e.getElementsByTagName('tbody')[0] ||
              e.appendChild(e.ownerDocument.createElement('tbody'))
          : e;
      }
      function ue(e, t) {
        if (1 === t.nodeType && o.hasData(e)) {
          var n,
            r,
            i,
            s = o._data(e),
            a = o._data(t, s),
            u = s.events;
          if (u)
            for (n in (delete a.handle, (a.events = {}), u))
              for (r = 0, i = u[n].length; r < i; r++)
                o.event.add(t, n, u[n][r]);
          a.data && (a.data = o.extend({}, a.data));
        }
      }
      function le(e, t) {
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
          t.removeAttribute(o.expando),
          t.removeAttribute('_submit_attached'),
          t.removeAttribute('_change_attached'));
      }
      function ce(e) {
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
            o.grep(e.getElementsByTagName('input'), fe);
      }
      (oe.optgroup = oe.option),
        (oe.tbody = oe.tfoot = oe.colgroup = oe.caption = oe.thead),
        (oe.th = oe.td),
        o.support.htmlSerialize || (oe._default = [1, 'div<div>', '</div>']),
        o.fn.extend({
          text: function (e) {
            return o.access(
              this,
              function (e) {
                return void 0 === e
                  ? o.text(this)
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
            if (o.isFunction(e))
              return this.each(function (t) {
                o(this).wrapAll(e.call(this, t));
              });
            if (this[0]) {
              var t = o(e, this[0].ownerDocument).eq(0).clone(!0);
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
            return o.isFunction(e)
              ? this.each(function (t) {
                  o(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = o(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = o.isFunction(e);
            return this.each(function (n) {
              o(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function () {
            return this.parent()
              .each(function () {
                o.nodeName(this, 'body') ||
                  o(this).replaceWith(this.childNodes);
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
              var e = o.clean(arguments);
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
              return e.push.apply(e, o.clean(arguments)), e;
            }
          },
          remove: function (e, t) {
            for (var n, r = 0; null != (n = this[r]); r++)
              (e && !o.filter(e, [n]).length) ||
                (t ||
                  1 !== n.nodeType ||
                  (o.cleanData(n.getElementsByTagName('*')), o.cleanData([n])),
                n.parentNode && n.parentNode.removeChild(n));
            return this;
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              for (
                1 === e.nodeType && o.cleanData(e.getElementsByTagName('*'));
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
                return o.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return o.access(
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
                  (o.support.leadingWhitespace || !X.test(e)) &&
                  !oe[(Y.exec(e) || ['', ''])[1].toLowerCase()]
                ) {
                  e = e.replace(K, '<$1></$2>');
                  try {
                    for (; n < r; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (o.cleanData(t.getElementsByTagName('*')),
                        (t.innerHTML = e));
                    t = 0;
                  } catch (i) {}
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
              ? o.isFunction(e)
                ? this.each(function (t) {
                    var n = o(this),
                      r = n.html();
                    n.replaceWith(e.call(this, t, r));
                  })
                : ('string' != typeof e && (e = o(e).detach()),
                  this.each(function () {
                    var t = this.nextSibling,
                      n = this.parentNode;
                    o(this).remove(), t ? o(t).before(e) : o(n).append(e);
                  }))
              : this.length
              ? this.pushStack(o(o.isFunction(e) ? e() : e), 'replaceWith', e)
              : this;
          },
          detach: function (e) {
            return this.remove(e, !0);
          },
          domManip: function (e, t, n) {
            var r,
              i,
              s,
              a,
              u = e[0],
              l = [];
            if (
              !o.support.checkClone &&
              3 === arguments.length &&
              'string' == typeof u &&
              ne.test(u)
            )
              return this.each(function () {
                o(this).domManip(e, t, n, !0);
              });
            if (o.isFunction(u))
              return this.each(function (r) {
                var i = o(this);
                (e[0] = u.call(this, r, t ? i.html() : void 0)),
                  i.domManip(e, t, n);
              });
            if (this[0]) {
              if (
                ((a = u && u.parentNode),
                (i =
                  1 ===
                  (s = (r =
                    o.support.parentNode &&
                    a &&
                    11 === a.nodeType &&
                    a.childNodes.length === this.length
                      ? { fragment: a }
                      : o.buildFragment(e, this, l)).fragment).childNodes.length
                    ? (s = s.firstChild)
                    : s.firstChild))
              ) {
                t = t && o.nodeName(i, 'tr');
                for (var c = 0, f = this.length, d = f - 1; c < f; c++)
                  n.call(
                    t ? ae(this[c], i) : this[c],
                    r.cacheable || (f > 1 && c < d) ? o.clone(s, !0, !0) : s,
                  );
              }
              l.length &&
                o.each(l, function (e, t) {
                  t.src
                    ? o.ajax({
                        type: 'GET',
                        global: !1,
                        url: t.src,
                        async: !1,
                        dataType: 'script',
                      })
                    : o.globalEval(
                        (t.text || t.textContent || t.innerHTML || '').replace(
                          ie,
                          '/*$0*/',
                        ),
                      ),
                    t.parentNode && t.parentNode.removeChild(t);
                });
            }
            return this;
          },
        }),
        (o.buildFragment = function (e, t, r) {
          var i,
            s,
            a,
            u,
            l = e[0];
          return (
            t && t[0] && (u = t[0].ownerDocument || t[0]),
            u.createDocumentFragment || (u = n),
            !(
              1 === e.length &&
              'string' == typeof l &&
              l.length < 512 &&
              u === n &&
              '<' === l.charAt(0)
            ) ||
              ee.test(l) ||
              (!o.support.checkClone && ne.test(l)) ||
              (!o.support.html5Clone && te.test(l)) ||
              ((s = !0), (a = o.fragments[l]) && 1 !== a && (i = a)),
            i || ((i = u.createDocumentFragment()), o.clean(e, u, i, r)),
            s && (o.fragments[l] = a ? i : 1),
            { fragment: i, cacheable: s }
          );
        }),
        (o.fragments = {}),
        o.each(
          {
            appendTo: 'append',
            prependTo: 'prepend',
            insertBefore: 'before',
            insertAfter: 'after',
            replaceAll: 'replaceWith',
          },
          function (e, t) {
            o.fn[e] = function (n) {
              var r = [],
                i = o(n),
                s = 1 === this.length && this[0].parentNode;
              if (
                s &&
                11 === s.nodeType &&
                1 === s.childNodes.length &&
                1 === i.length
              )
                return i[t](this[0]), this;
              for (var a = 0, u = i.length; a < u; a++) {
                var l = (a > 0 ? this.clone(!0) : this).get();
                o(i[a])[t](l), (r = r.concat(l));
              }
              return this.pushStack(r, e, i.selector);
            };
          },
        ),
        o.extend({
          clone: function (e, t, r) {
            var i,
              s,
              a,
              u =
                o.support.html5Clone ||
                o.isXMLDoc(e) ||
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
                (o.support.noCloneEvent && o.support.noCloneChecked) ||
                (1 !== e.nodeType && 11 !== e.nodeType) ||
                o.isXMLDoc(e)
              )
            )
              for (le(e, u), i = ce(e), s = ce(u), a = 0; i[a]; ++a)
                s[a] && le(i[a], s[a]);
            if (t && (ue(e, u), r))
              for (i = ce(e), s = ce(u), a = 0; i[a]; ++a) ue(i[a], s[a]);
            return (i = s = null), u;
          },
          clean: function (e, t, r, i) {
            var s,
              a,
              u,
              l = [];
            void 0 === (t = t || n).createElement &&
              (t = t.ownerDocument || (t[0] && t[0].ownerDocument) || n);
            for (var c, f = 0; null != (c = e[f]); f++)
              if (('number' == typeof c && (c += ''), c)) {
                if ('string' == typeof c)
                  if (G.test(c)) {
                    c = c.replace(K, '<$1></$2>');
                    var d,
                      p = (Y.exec(c) || ['', ''])[1].toLowerCase(),
                      h = oe[p] || oe._default,
                      g = h[0],
                      v = t.createElement('div'),
                      m = se.childNodes;
                    for (
                      t === n ? se.appendChild(v) : U(t).appendChild(v),
                        v.innerHTML = h[1] + c + h[2];
                      g--;

                    )
                      v = v.lastChild;
                    if (!o.support.tbody) {
                      var y = J.test(c),
                        b =
                          'table' !== p || y
                            ? '<table>' !== h[1] || y
                              ? []
                              : v.childNodes
                            : v.firstChild && v.firstChild.childNodes;
                      for (u = b.length - 1; u >= 0; --u)
                        o.nodeName(b[u], 'tbody') &&
                          !b[u].childNodes.length &&
                          b[u].parentNode.removeChild(b[u]);
                    }
                    !o.support.leadingWhitespace &&
                      X.test(c) &&
                      v.insertBefore(
                        t.createTextNode(X.exec(c)[0]),
                        v.firstChild,
                      ),
                      (c = v.childNodes),
                      v &&
                        (v.parentNode.removeChild(v),
                        m.length > 0 &&
                          (d = m[m.length - 1]) &&
                          d.parentNode &&
                          d.parentNode.removeChild(d));
                  } else c = t.createTextNode(c);
                var _;
                if (!o.support.appendChecked)
                  if (c[0] && 'number' == typeof (_ = c.length))
                    for (u = 0; u < _; u++) de(c[u]);
                  else de(c);
                c.nodeType ? l.push(c) : (l = o.merge(l, c));
              }
            if (r)
              for (
                s = function (e) {
                  return !e.type || re.test(e.type);
                },
                  f = 0;
                l[f];
                f++
              )
                if (
                  ((a = l[f]),
                  i && o.nodeName(a, 'script') && (!a.type || re.test(a.type)))
                )
                  i.push(a.parentNode ? a.parentNode.removeChild(a) : a);
                else {
                  if (1 === a.nodeType) {
                    var w = o.grep(a.getElementsByTagName('script'), s);
                    l.splice.apply(l, [f + 1, 0].concat(w));
                  }
                  r.appendChild(a);
                }
            return l;
          },
          cleanData: function (e) {
            for (
              var t,
                n,
                r,
                i = o.cache,
                s = o.event.special,
                a = o.support.deleteExpando,
                u = 0;
              null != (r = e[u]);
              u++
            )
              if (
                (!r.nodeName || !o.noData[r.nodeName.toLowerCase()]) &&
                (n = r[o.expando])
              ) {
                if ((t = i[n]) && t.events) {
                  for (var l in t.events)
                    s[l] ? o.event.remove(r, l) : o.removeEvent(r, l, t.handle);
                  t.handle && (t.handle.elem = null);
                }
                a
                  ? delete r[o.expando]
                  : r.removeAttribute && r.removeAttribute(o.expando),
                  delete i[n];
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
        ke = { position: 'absolute', visibility: 'hidden', display: 'block' },
        Se = ['Top', 'Right', 'Bottom', 'Left'];
      function Ee(e, t, n) {
        var r = 'width' === t ? e.offsetWidth : e.offsetHeight,
          i = 'width' === t ? 1 : 0;
        if (r > 0) {
          if ('border' !== n)
            for (; i < 4; i += 2)
              n || (r -= parseFloat(o.css(e, 'padding' + Se[i])) || 0),
                'margin' === n
                  ? (r += parseFloat(o.css(e, n + Se[i])) || 0)
                  : (r -=
                      parseFloat(o.css(e, 'border' + Se[i] + 'Width')) || 0);
          return r + 'px';
        }
        if ((((r = pe(e, t)) < 0 || null == r) && (r = e.style[t]), _e.test(r)))
          return r;
        if (((r = parseFloat(r) || 0), n))
          for (; i < 4; i += 2)
            (r += parseFloat(o.css(e, 'padding' + Se[i])) || 0),
              'padding' !== n &&
                (r += parseFloat(o.css(e, 'border' + Se[i] + 'Width')) || 0),
              'margin' === n && (r += parseFloat(o.css(e, n + Se[i])) || 0);
        return r + 'px';
      }
      (o.fn.css = function (e, t) {
        return o.access(
          this,
          function (e, t, n) {
            return void 0 !== n ? o.style(e, t, n) : o.css(e, t);
          },
          e,
          t,
          arguments.length > 1,
        );
      }),
        o.extend({
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
          cssProps: { float: o.support.cssFloat ? 'cssFloat' : 'styleFloat' },
          style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var i,
                s,
                a = o.camelCase(t),
                u = e.style,
                l = o.cssHooks[a];
              if (((t = o.cssProps[a] || a), void 0 === n))
                return l && 'get' in l && void 0 !== (i = l.get(e, !1, r))
                  ? i
                  : u[t];
              if (
                !('string' === (s = typeof n) &&
                  (i = we.exec(n)) &&
                  ((n = +(i[1] + 1) * +i[2] + parseFloat(o.css(e, t))),
                  (s = 'number')),
                null == n ||
                  ('number' === s && isNaN(n)) ||
                  ('number' !== s || o.cssNumber[a] || (n += 'px'),
                  l && 'set' in l && void 0 === (n = l.set(e, n))))
              )
                try {
                  u[t] = n;
                } catch (c) {}
            }
          },
          css: function (e, t, n) {
            var r, i;
            return (
              (t = o.camelCase(t)),
              (i = o.cssHooks[t]),
              'cssFloat' === (t = o.cssProps[t] || t) && (t = 'float'),
              i && 'get' in i && void 0 !== (r = i.get(e, !0, n))
                ? r
                : pe
                ? pe(e, t)
                : void 0
            );
          },
          swap: function (e, t, n) {
            var r,
              i,
              o = {};
            for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
            for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
            return r;
          },
        }),
        (o.curCSS = o.css),
        n.defaultView &&
          n.defaultView.getComputedStyle &&
          (he = function (e, t) {
            var n,
              r,
              i,
              s,
              a = e.style;
            return (
              (t = t.replace(ye, '-$1').toLowerCase()),
              (r = e.ownerDocument.defaultView) &&
                (i = r.getComputedStyle(e, null)) &&
                ('' !== (n = i.getPropertyValue(t)) ||
                  o.contains(e.ownerDocument.documentElement, e) ||
                  (n = o.style(e, t))),
              !o.support.pixelMargin &&
                i &&
                xe.test(t) &&
                _e.test(n) &&
                ((s = a.width), (a.width = n), (n = i.width), (a.width = s)),
              n
            );
          }),
        n.documentElement.currentStyle &&
          (ge = function (e, t) {
            var n,
              r,
              i,
              o = e.currentStyle && e.currentStyle[t],
              s = e.style;
            return (
              null == o && s && (i = s[t]) && (o = i),
              _e.test(o) &&
                ((n = s.left),
                (r = e.runtimeStyle && e.runtimeStyle.left) &&
                  (e.runtimeStyle.left = e.currentStyle.left),
                (s.left = 'fontSize' === t ? '1em' : o),
                (o = s.pixelLeft + 'px'),
                (s.left = n),
                r && (e.runtimeStyle.left = r)),
              '' === o ? 'auto' : o
            );
          }),
        (pe = he || ge),
        o.each(['height', 'width'], function (e, t) {
          o.cssHooks[t] = {
            get: function (e, n, r) {
              if (n)
                return 0 !== e.offsetWidth
                  ? Ee(e, t, r)
                  : o.swap(e, ke, function () {
                      return Ee(e, t, r);
                    });
            },
            set: function (e, t) {
              return be.test(t) ? t + 'px' : t;
            },
          };
        }),
        o.support.opacity ||
          (o.cssHooks.opacity = {
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
                i = o.isNumeric(t) ? 'alpha(opacity=' + 100 * t + ')' : '',
                s = (r && r.filter) || n.filter || '';
              (n.zoom = 1),
                (t >= 1 &&
                  '' === o.trim(s.replace(ve, '')) &&
                  (n.removeAttribute('filter'), r && !r.filter)) ||
                  (n.filter = ve.test(s) ? s.replace(ve, i) : s + ' ' + i);
            },
          }),
        o(function () {
          o.support.reliableMarginRight ||
            (o.cssHooks.marginRight = {
              get: function (e, t) {
                return o.swap(e, { display: 'inline-block' }, function () {
                  return t ? pe(e, 'margin-right') : e.style.marginRight;
                });
              },
            });
        }),
        o.expr &&
          o.expr.filters &&
          ((o.expr.filters.hidden = function (e) {
            var t = e.offsetWidth,
              n = e.offsetHeight;
            return (
              (0 === t && 0 === n) ||
              (!o.support.reliableHiddenOffsets &&
                'none' ===
                  ((e.style && e.style.display) || o.css(e, 'display')))
            );
          }),
          (o.expr.filters.visible = function (e) {
            return !o.expr.filters.hidden(e);
          })),
        o.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
          o.cssHooks[e + t] = {
            expand: function (n) {
              var r,
                i = 'string' == typeof n ? n.split(' ') : [n],
                o = {};
              for (r = 0; r < 4; r++)
                o[e + Se[r] + t] = i[r] || i[r - 2] || i[0];
              return o;
            },
          };
        });
      var Te,
        Ce,
        Ne = /%20/g,
        Oe = /\[\]$/,
        je = /\r?\n/g,
        Le = /#.*$/,
        Ae = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Pe = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Fe = /^(?:GET|HEAD)$/,
        De = /^\/\//,
        Re = /\?/,
        Me = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Ie = /^(?:select|textarea)/i,
        He = /\s+/,
        Be = /([?&])_=[^&]*/,
        qe = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        We = o.fn.load,
        ze = {},
        Ve = {},
        Ue = ['*/'] + ['*'];
      try {
        Te = i.href;
      } catch (bt) {
        ((Te = n.createElement('a')).href = ''), (Te = Te.href);
      }
      function $e(e) {
        return function (t, n) {
          if (('string' != typeof t && ((n = t), (t = '*')), o.isFunction(n)))
            for (
              var r, i, s = t.toLowerCase().split(He), a = 0, u = s.length;
              a < u;
              a++
            )
              (r = s[a]),
                (i = /^\+/.test(r)) && (r = r.substr(1) || '*'),
                (e[r] = e[r] || [])[i ? 'unshift' : 'push'](n);
        };
      }
      function Qe(e, t, n, r, i, o) {
        (o = o || {})[(i = i || t.dataTypes[0])] = !0;
        for (
          var s, a = e[i], u = 0, l = a ? a.length : 0, c = e === ze;
          u < l && (c || !s);
          u++
        )
          'string' == typeof (s = a[u](t, n, r)) &&
            (!c || o[s]
              ? (s = void 0)
              : (t.dataTypes.unshift(s), (s = Qe(e, t, n, r, s, o))));
        return (!c && s) || o['*'] || (s = Qe(e, t, n, r, '*', o)), s;
      }
      function Xe(e, t) {
        var n,
          r,
          i = o.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        r && o.extend(!0, e, r);
      }
      function Ke(e, t, n, r) {
        if (o.isArray(t))
          o.each(t, function (t, i) {
            n || Oe.test(e)
              ? r(e, i)
              : Ke(e + '[' + ('object' == typeof i ? t : '') + ']', i, n, r);
          });
        else if (n || 'object' !== o.type(t)) r(e, t);
        else for (var i in t) Ke(e + '[' + i + ']', t[i], n, r);
      }
      (Ce = qe.exec(Te.toLowerCase()) || []),
        o.fn.extend({
          load: function (e, t, n) {
            if ('string' != typeof e && We) return We.apply(this, arguments);
            if (!this.length) return this;
            var r = e.indexOf(' ');
            if (r >= 0) {
              var i = e.slice(r, e.length);
              e = e.slice(0, r);
            }
            var s = 'GET';
            t &&
              (o.isFunction(t)
                ? ((n = t), (t = void 0))
                : 'object' == typeof t &&
                  ((t = o.param(t, o.ajaxSettings.traditional)), (s = 'POST')));
            var a = this;
            return (
              o.ajax({
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
                        i ? o('<div>').append(r.replace(Me, '')).find(i) : r,
                      )),
                    n && a.each(n, [r, t, e]);
                },
              }),
              this
            );
          },
          serialize: function () {
            return o.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              return this.elements ? o.makeArray(this.elements) : this;
            })
              .filter(function () {
                return (
                  this.name &&
                  !this.disabled &&
                  (this.checked || Ie.test(this.nodeName) || Pe.test(this.type))
                );
              })
              .map(function (e, t) {
                var n = o(this).val();
                return null == n
                  ? null
                  : o.isArray(n)
                  ? o.map(n, function (e, n) {
                      return { name: t.name, value: e.replace(je, '\r\n') };
                    })
                  : { name: t.name, value: n.replace(je, '\r\n') };
              })
              .get();
          },
        }),
        o.each(
          'ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend'.split(
            ' ',
          ),
          function (e, t) {
            o.fn[t] = function (e) {
              return this.on(t, e);
            };
          },
        ),
        o.each(['get', 'post'], function (e, t) {
          o[t] = function (e, n, r, i) {
            return (
              o.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
              o.ajax({ type: t, url: e, data: n, success: r, dataType: i })
            );
          };
        }),
        o.extend({
          getScript: function (e, t) {
            return o.get(e, void 0, t, 'script');
          },
          getJSON: function (e, t, n) {
            return o.get(e, t, n, 'json');
          },
          ajaxSetup: function (e, t) {
            return (
              t ? Xe(e, o.ajaxSettings) : ((t = e), (e = o.ajaxSettings)),
              Xe(e, t),
              e
            );
          },
          ajaxSettings: {
            url: Te,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(
              Ce[1],
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
              'text json': o.parseJSON,
              'text xml': o.parseXML,
            },
            flatOptions: { context: !0, url: !0 },
          },
          ajaxPrefilter: $e(ze),
          ajaxTransport: $e(Ve),
          ajax: function (e, t) {
            'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var n,
              r,
              i,
              s,
              a,
              u,
              l,
              c,
              f = o.ajaxSetup({}, t),
              d = f.context || f,
              p = d !== f && (d.nodeType || d instanceof o) ? o(d) : o.event,
              h = o.Deferred(),
              g = o.Callbacks('once memory'),
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
                    if (!i)
                      for (i = {}; (t = Ae.exec(r)); )
                        i[t[1].toLowerCase()] = t[2];
                    t = i[e.toLowerCase()];
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
            function w(e, t, i, u) {
              if (2 !== b) {
                (b = 2),
                  a && clearTimeout(a),
                  (s = void 0),
                  (r = u || ''),
                  (_.readyState = e > 0 ? 4 : 0);
                var c,
                  m,
                  y,
                  w,
                  x,
                  k = t,
                  S = i
                    ? (function (e, t, n) {
                        var r,
                          i,
                          o,
                          s,
                          a = e.contents,
                          u = e.dataTypes,
                          l = e.responseFields;
                        for (i in l) i in n && (t[l[i]] = n[i]);
                        for (; '*' === u[0]; )
                          u.shift(),
                            void 0 === r &&
                              (r =
                                e.mimeType ||
                                t.getResponseHeader('content-type'));
                        if (r)
                          for (i in a)
                            if (a[i] && a[i].test(r)) {
                              u.unshift(i);
                              break;
                            }
                        if (u[0] in n) o = u[0];
                        else {
                          for (i in n) {
                            if (!u[0] || e.converters[i + ' ' + u[0]]) {
                              o = i;
                              break;
                            }
                            s || (s = i);
                          }
                          o = o || s;
                        }
                        if (o) return o !== u[0] && u.unshift(o), n[o];
                      })(f, _, i)
                    : void 0;
                if ((e >= 200 && e < 300) || 304 === e)
                  if (
                    (f.ifModified &&
                      ((w = _.getResponseHeader('Last-Modified')) &&
                        (o.lastModified[n] = w),
                      (x = _.getResponseHeader('Etag')) && (o.etag[n] = x)),
                    304 === e)
                  )
                    (k = 'notmodified'), (c = !0);
                  else
                    try {
                      (m = (function (e, t) {
                        e.dataFilter && (t = e.dataFilter(t, e.dataType));
                        var n,
                          r,
                          i,
                          s,
                          a,
                          u,
                          l,
                          c,
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
                              for (l in ((c = void 0), d))
                                if (
                                  ((i = l.split(' '))[0] === s ||
                                    '*' === i[0]) &&
                                  (c = d[i[1] + ' ' + h])
                                ) {
                                  !0 === (l = d[l])
                                    ? (u = c)
                                    : !0 === c && (u = l);
                                  break;
                                }
                            u ||
                              c ||
                              o.error(
                                'No conversion from ' + a.replace(' ', ' to '),
                              ),
                              !0 !== u && (t = u ? u(t) : c(l(t)));
                          }
                        }
                        return t;
                      })(f, S)),
                        (k = 'success'),
                        (c = !0);
                    } catch (bt) {
                      (k = 'parsererror'), (y = bt);
                    }
                else (y = k), (k && !e) || ((k = 'error'), e < 0 && (e = 0));
                (_.status = e),
                  (_.statusText = '' + (t || k)),
                  c ? h.resolveWith(d, [m, k, _]) : h.rejectWith(d, [_, k, y]),
                  _.statusCode(v),
                  (v = void 0),
                  l &&
                    p.trigger('ajax' + (c ? 'Success' : 'Error'), [
                      _,
                      f,
                      c ? m : y,
                    ]),
                  g.fireWith(d, [_, k]),
                  l &&
                    (p.trigger('ajaxComplete', [_, f]),
                    --o.active || o.event.trigger('ajaxStop'));
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
                .replace(Le, '')
                .replace(De, Ce[1] + '//')),
              (f.dataTypes = o
                .trim(f.dataType || '*')
                .toLowerCase()
                .split(He)),
              null == f.crossDomain &&
                ((u = qe.exec(f.url.toLowerCase())),
                (f.crossDomain = !(
                  !u ||
                  (u[1] == Ce[1] &&
                    u[2] == Ce[2] &&
                    (u[3] || ('http:' === u[1] ? 80 : 443)) ==
                      (Ce[3] || ('http:' === Ce[1] ? 80 : 443)))
                ))),
              f.data &&
                f.processData &&
                'string' != typeof f.data &&
                (f.data = o.param(f.data, f.traditional)),
              Qe(ze, f, t, _),
              2 === b)
            )
              return !1;
            if (
              ((l = f.global),
              (f.type = f.type.toUpperCase()),
              (f.hasContent = !Fe.test(f.type)),
              l && 0 == o.active++ && o.event.trigger('ajaxStart'),
              !f.hasContent &&
                (f.data &&
                  ((f.url += (Re.test(f.url) ? '&' : '?') + f.data),
                  delete f.data),
                (n = f.url),
                !1 === f.cache))
            ) {
              var x = o.now(),
                k = f.url.replace(Be, '$1_=' + x);
              f.url =
                k +
                (k === f.url ? (Re.test(f.url) ? '&' : '?') + '_=' + x : '');
            }
            for (c in (((f.data && f.hasContent && !1 !== f.contentType) ||
              t.contentType) &&
              _.setRequestHeader('Content-Type', f.contentType),
            f.ifModified &&
              ((n = n || f.url),
              o.lastModified[n] &&
                _.setRequestHeader('If-Modified-Since', o.lastModified[n]),
              o.etag[n] && _.setRequestHeader('If-None-Match', o.etag[n])),
            _.setRequestHeader(
              'Accept',
              f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                ? f.accepts[f.dataTypes[0]] +
                    ('*' !== f.dataTypes[0] ? ', ' + Ue + '; q=0.01' : '')
                : f.accepts['*'],
            ),
            f.headers))
              _.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (!1 === f.beforeSend.call(d, _, f) || 2 === b))
              return _.abort(), !1;
            for (c in { success: 1, error: 1, complete: 1 }) _[c](f[c]);
            if ((s = Qe(Ve, f, t, _))) {
              (_.readyState = 1),
                l && p.trigger('ajaxSend', [_, f]),
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
                (t = o.isFunction(t) ? t() : t),
                  (n[n.length] =
                    encodeURIComponent(e) + '=' + encodeURIComponent(t));
              };
            if (
              (void 0 === t && (t = o.ajaxSettings.traditional),
              o.isArray(e) || (e.jquery && !o.isPlainObject(e)))
            )
              o.each(e, function () {
                r(this.name, this.value);
              });
            else for (var i in e) Ke(i, e[i], t, r);
            return n.join('&').replace(Ne, '+');
          },
        }),
        o.extend({ active: 0, lastModified: {}, etag: {} });
      var Ye = o.now(),
        Je = /(\=)\?(&|$)|\?\?/i;
      o.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
          return o.expando + '_' + Ye++;
        },
      }),
        o.ajaxPrefilter('json jsonp', function (e, t, n) {
          var r =
            'string' == typeof e.data &&
            /^application\/x\-www\-form\-urlencoded/.test(e.contentType);
          if (
            'jsonp' === e.dataTypes[0] ||
            (!1 !== e.jsonp && (Je.test(e.url) || (r && Je.test(e.data))))
          ) {
            var i,
              s = (e.jsonpCallback = o.isFunction(e.jsonpCallback)
                ? e.jsonpCallback()
                : e.jsonpCallback),
              a = window[s],
              u = e.url,
              l = e.data,
              c = '$1' + s + '$2';
            return (
              !1 !== e.jsonp &&
                ((u = u.replace(Je, c)),
                e.url === u &&
                  (r && (l = l.replace(Je, c)),
                  e.data === l &&
                    (u += (/\?/.test(u) ? '&' : '?') + e.jsonp + '=' + s))),
              (e.url = u),
              (e.data = l),
              (window[s] = function (e) {
                i = [e];
              }),
              n.always(function () {
                (window[s] = a), i && o.isFunction(a) && window[s](i[0]);
              }),
              (e.converters['script json'] = function () {
                return i || o.error(s + ' was not called'), i[0];
              }),
              (e.dataTypes[0] = 'json'),
              'script'
            );
          }
        }),
        o.ajaxSetup({
          accepts: {
            script:
              'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
          },
          contents: { script: /javascript|ecmascript/ },
          converters: {
            'text script': function (e) {
              return o.globalEval(e), e;
            },
          },
        }),
        o.ajaxPrefilter('script', function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && ((e.type = 'GET'), (e.global = !1));
        }),
        o.ajaxTransport('script', function (e) {
          if (e.crossDomain) {
            var t,
              r =
                n.head ||
                n.getElementsByTagName('head')[0] ||
                n.documentElement;
            return {
              send: function (i, o) {
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
                      n || o(200, 'success'));
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
      (o.ajaxSettings.xhr = window.ActiveXObject
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
        (Ze = o.ajaxSettings.xhr()),
        o.extend(o.support, {
          ajax: !!Ze,
          cors: !!Ze && 'withCredentials' in Ze,
        }),
        o.support.ajax &&
          o.ajaxTransport(function (e) {
            var t;
            if (!e.crossDomain || o.support.cors)
              return {
                send: function (n, r) {
                  var i,
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
                      var u, l, c, f, d;
                      try {
                        if (t && (s || 4 === a.readyState))
                          if (
                            ((t = void 0),
                            i &&
                              ((a.onreadystatechange = o.noop),
                              et && delete Ge[i]),
                            s)
                          )
                            4 !== a.readyState && a.abort();
                          else {
                            (u = a.status),
                              (c = a.getAllResponseHeaders()),
                              (f = {}),
                              (d = a.responseXML) &&
                                d.documentElement &&
                                (f.xml = d);
                            try {
                              f.text = a.responseText;
                            } catch (n) {}
                            try {
                              l = a.statusText;
                            } catch (bt) {
                              l = '';
                            }
                            u || !e.isLocal || e.crossDomain
                              ? 1223 === u && (u = 204)
                              : (u = f.text ? 200 : 404);
                          }
                      } catch (p) {
                        s || r(-1, p);
                      }
                      f && r(u, l, f, c);
                    }),
                    e.async && 4 !== a.readyState
                      ? ((i = ++tt),
                        et &&
                          (Ge || ((Ge = {}), o(window).unload(et)),
                          (Ge[i] = t)),
                        (a.onreadystatechange = t))
                      : t();
                },
                abort: function () {
                  t && t(0, 1);
                },
              };
          });
      var rt,
        it,
        ot,
        st,
        at = {},
        ut = /^(?:toggle|show|hide)$/,
        lt = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        ct = [
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
        return setTimeout(dt, 0), (st = o.now());
      }
      function dt() {
        st = void 0;
      }
      function pt(e, t) {
        var n = {};
        return (
          o.each(ct.concat.apply([], ct.slice(0, t)), function () {
            n[this] = e;
          }),
          n
        );
      }
      function ht(e) {
        if (!at[e]) {
          var t = n.body,
            r = o('<' + e + '>').appendTo(t),
            i = r.css('display');
          r.remove(),
            ('none' !== i && '' !== i) ||
              (rt ||
                ((rt = n.createElement(
                  'iframe',
                )).frameBorder = rt.width = rt.height = 0),
              t.appendChild(rt),
              (it && rt.createElement) ||
                ((it = (rt.contentWindow || rt.contentDocument).document).write(
                  (o.support.boxModel ? '<!doctype html>' : '') +
                    '<html><body>',
                ),
                it.close()),
              (r = it.createElement(e)),
              it.body.appendChild(r),
              (i = o.css(r, 'display')),
              t.removeChild(rt)),
            (at[e] = i);
        }
        return at[e];
      }
      o.fn.extend({
        show: function (e, t, n) {
          var r, i;
          if (e || 0 === e) return this.animate(pt('show', 3), e, t, n);
          for (var s = 0, a = this.length; s < a; s++)
            (r = this[s]).style &&
              ((i = r.style.display),
              o._data(r, 'olddisplay') ||
                'none' !== i ||
                (i = r.style.display = ''),
              (('' === i && 'none' === o.css(r, 'display')) ||
                !o.contains(r.ownerDocument.documentElement, r)) &&
                o._data(r, 'olddisplay', ht(r.nodeName)));
          for (s = 0; s < a; s++)
            (r = this[s]).style &&
              (('' !== (i = r.style.display) && 'none' !== i) ||
                (r.style.display = o._data(r, 'olddisplay') || ''));
          return this;
        },
        hide: function (e, t, n) {
          if (e || 0 === e) return this.animate(pt('hide', 3), e, t, n);
          for (var r, i, s = 0, a = this.length; s < a; s++)
            (r = this[s]).style &&
              ('none' === (i = o.css(r, 'display')) ||
                o._data(r, 'olddisplay') ||
                o._data(r, 'olddisplay', i));
          for (s = 0; s < a; s++)
            this[s].style && (this[s].style.display = 'none');
          return this;
        },
        _toggle: o.fn.toggle,
        toggle: function (e, t, n) {
          var r = 'boolean' == typeof e;
          return (
            o.isFunction(e) && o.isFunction(t)
              ? this._toggle.apply(this, arguments)
              : null == e || r
              ? this.each(function () {
                  var t = r ? e : o(this).is(':hidden');
                  o(this)[t ? 'show' : 'hide']();
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
          var i = o.speed(t, n, r);
          if (o.isEmptyObject(e)) return this.each(i.complete, [!1]);
          function s() {
            !1 === i.queue && o._mark(this);
            var t,
              n,
              r,
              s,
              a,
              u,
              l,
              c,
              f,
              d,
              p,
              h = o.extend({}, i),
              g = 1 === this.nodeType,
              v = g && o(this).is(':hidden');
            for (r in ((h.animatedProperties = {}), e))
              if (
                (r !== (t = o.camelCase(r)) && ((e[t] = e[r]), delete e[r]),
                (a = o.cssHooks[t]) && 'expand' in a)
              )
                for (r in ((u = a.expand(e[t])), delete e[t], u))
                  r in e || (e[r] = u[r]);
            for (t in e) {
              if (
                ((n = e[t]),
                o.isArray(n)
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
                'inline' === o.css(this, 'display') &&
                  'none' === o.css(this, 'float') &&
                  (o.support.inlineBlockNeedsLayout &&
                  'inline' !== ht(this.nodeName)
                    ? (this.style.zoom = 1)
                    : (this.style.display = 'inline-block')));
            }
            for (r in (null != h.overflow && (this.style.overflow = 'hidden'),
            e))
              (s = new o.fx(this, h, r)),
                (n = e[r]),
                ut.test(n)
                  ? (p =
                      o._data(this, 'toggle' + r) ||
                      ('toggle' === n ? (v ? 'show' : 'hide') : 0))
                    ? (o._data(
                        this,
                        'toggle' + r,
                        'show' === p ? 'hide' : 'show',
                      ),
                      s[p]())
                    : s[n]()
                  : ((l = lt.exec(n)),
                    (c = s.cur()),
                    l
                      ? ((f = parseFloat(l[2])),
                        'px' !== (d = l[3] || (o.cssNumber[r] ? '' : 'px')) &&
                          (o.style(this, r, (f || 1) + d),
                          (c = ((f || 1) / s.cur()) * c),
                          o.style(this, r, c + d)),
                        l[1] && (f = ('-=' === l[1] ? -1 : 1) * f + c),
                        s.custom(c, f, d))
                      : s.custom(c, n, ''));
            return !0;
          }
          return (
            (e = o.extend({}, e)),
            !1 === i.queue ? this.each(s) : this.queue(i.queue, s)
          );
        },
        stop: function (e, t, n) {
          return (
            'string' != typeof e && ((n = t), (t = e), (e = void 0)),
            t && !1 !== e && this.queue(e || 'fx', []),
            this.each(function () {
              var t,
                r = !1,
                i = o.timers,
                s = o._data(this);
              function a(e, t, r) {
                var i = t[r];
                o.removeData(e, r, !0), i.stop(n);
              }
              if ((n || o._unmark(!0, this), null == e))
                for (t in s)
                  s[t] &&
                    s[t].stop &&
                    t.indexOf('.run') === t.length - 4 &&
                    a(this, s, t);
              else s[(t = e + '.run')] && s[t].stop && a(this, s, t);
              for (t = i.length; t--; )
                i[t].elem !== this ||
                  (null != e && i[t].queue !== e) ||
                  (n ? i[t](!0) : i[t].saveState(), (r = !0), i.splice(t, 1));
              (n && r) || o.dequeue(this, e);
            })
          );
        },
      }),
        o.each(
          {
            slideDown: pt('show', 1),
            slideUp: pt('hide', 1),
            slideToggle: pt('toggle', 1),
            fadeIn: { opacity: 'show' },
            fadeOut: { opacity: 'hide' },
            fadeToggle: { opacity: 'toggle' },
          },
          function (e, t) {
            o.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          },
        ),
        o.extend({
          speed: function (e, t, n) {
            var r =
              e && 'object' == typeof e
                ? o.extend({}, e)
                : {
                    complete: n || (!n && t) || (o.isFunction(e) && e),
                    duration: e,
                    easing: (n && t) || (t && !o.isFunction(t) && t),
                  };
            return (
              (r.duration = o.fx.off
                ? 0
                : 'number' == typeof r.duration
                ? r.duration
                : r.duration in o.fx.speeds
                ? o.fx.speeds[r.duration]
                : o.fx.speeds._default),
              (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
              (r.old = r.complete),
              (r.complete = function (e) {
                o.isFunction(r.old) && r.old.call(this),
                  r.queue
                    ? o.dequeue(this, r.queue)
                    : !1 !== e && o._unmark(this);
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
        (o.fx.prototype = {
          update: function () {
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
              (o.fx.step[this.prop] || o.fx.step._default)(this);
          },
          cur: function () {
            if (
              null != this.elem[this.prop] &&
              (!this.elem.style || null == this.elem.style[this.prop])
            )
              return this.elem[this.prop];
            var e,
              t = o.css(this.elem, this.prop);
            return isNaN((e = parseFloat(t))) ? (t && 'auto' !== t ? t : 0) : e;
          },
          custom: function (e, t, n) {
            var r = this,
              i = o.fx;
            function s(e) {
              return r.step(e);
            }
            (this.startTime = st || ft()),
              (this.end = t),
              (this.now = this.start = e),
              (this.pos = this.state = 0),
              (this.unit =
                n || this.unit || (o.cssNumber[this.prop] ? '' : 'px')),
              (s.queue = this.options.queue),
              (s.elem = this.elem),
              (s.saveState = function () {
                void 0 === o._data(r.elem, 'fxshow' + r.prop) &&
                  (r.options.hide
                    ? o._data(r.elem, 'fxshow' + r.prop, r.start)
                    : r.options.show &&
                      o._data(r.elem, 'fxshow' + r.prop, r.end));
              }),
              s() &&
                o.timers.push(s) &&
                !ot &&
                (ot = setInterval(i.tick, i.interval));
          },
          show: function () {
            var e = o._data(this.elem, 'fxshow' + this.prop);
            (this.options.orig[this.prop] = e || o.style(this.elem, this.prop)),
              (this.options.show = !0),
              void 0 !== e
                ? this.custom(this.cur(), e)
                : this.custom(
                    'width' === this.prop || 'height' === this.prop ? 1 : 0,
                    this.cur(),
                  ),
              o(this.elem).show();
          },
          hide: function () {
            (this.options.orig[this.prop] =
              o._data(this.elem, 'fxshow' + this.prop) ||
              o.style(this.elem, this.prop)),
              (this.options.hide = !0),
              this.custom(this.cur(), 0);
          },
          step: function (e) {
            var t,
              n,
              r,
              i = st || ft(),
              s = !0,
              a = this.elem,
              u = this.options;
            if (e || i >= u.duration + this.startTime) {
              for (t in ((this.now = this.end),
              (this.pos = this.state = 1),
              this.update(),
              (u.animatedProperties[this.prop] = !0),
              u.animatedProperties))
                !0 !== u.animatedProperties[t] && (s = !1);
              if (s) {
                if (
                  (null == u.overflow ||
                    o.support.shrinkWrapBlocks ||
                    o.each(['', 'X', 'Y'], function (e, t) {
                      a.style['overflow' + t] = u.overflow[e];
                    }),
                  u.hide && o(a).hide(),
                  u.hide || u.show)
                )
                  for (t in u.animatedProperties)
                    o.style(a, t, u.orig[t]),
                      o.removeData(a, 'fxshow' + t, !0),
                      o.removeData(a, 'toggle' + t, !0);
                (r = u.complete) && ((u.complete = !1), r.call(a));
              }
              return !1;
            }
            return (
              u.duration == 1 / 0
                ? (this.now = i)
                : ((n = i - this.startTime),
                  (this.state = n / u.duration),
                  (this.pos = o.easing[u.animatedProperties[this.prop]](
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
        o.extend(o.fx, {
          tick: function () {
            for (var e, t = o.timers, n = 0; n < t.length; n++)
              (e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || o.fx.stop();
          },
          interval: 13,
          stop: function () {
            clearInterval(ot), (ot = null);
          },
          speeds: { slow: 600, fast: 200, _default: 400 },
          step: {
            opacity: function (e) {
              o.style(e.elem, 'opacity', e.now);
            },
            _default: function (e) {
              e.elem.style && null != e.elem.style[e.prop]
                ? (e.elem.style[e.prop] = e.now + e.unit)
                : (e.elem[e.prop] = e.now);
            },
          },
        }),
        o.each(ct.concat.apply([], ct), function (e, t) {
          t.indexOf('margin') &&
            (o.fx.step[t] = function (e) {
              o.style(e.elem, t, Math.max(0, e.now) + e.unit);
            });
        }),
        o.expr &&
          o.expr.filters &&
          (o.expr.filters.animated = function (e) {
            return o.grep(o.timers, function (t) {
              return e === t.elem;
            }).length;
          });
      var gt,
        vt = /^t(?:able|d|h)$/i,
        mt = /^(?:body|html)$/i;
      function yt(e) {
        return o.isWindow(e)
          ? e
          : 9 === e.nodeType && (e.defaultView || e.parentWindow);
      }
      (gt =
        'getBoundingClientRect' in n.documentElement
          ? function (e, t, n, r) {
              try {
                r = e.getBoundingClientRect();
              } catch (bt) {}
              if (!r || !o.contains(n, e))
                return r ? { top: r.top, left: r.left } : { top: 0, left: 0 };
              var i = t.body,
                s = yt(t),
                a = n.clientTop || i.clientTop || 0,
                u = n.clientLeft || i.clientLeft || 0,
                l =
                  s.pageYOffset ||
                  (o.support.boxModel && n.scrollTop) ||
                  i.scrollTop,
                c =
                  s.pageXOffset ||
                  (o.support.boxModel && n.scrollLeft) ||
                  i.scrollLeft;
              return { top: r.top + l - a, left: r.left + c - u };
            }
          : function (e, t, n) {
              for (
                var r,
                  i = e.offsetParent,
                  s = t.body,
                  a = t.defaultView,
                  u = a ? a.getComputedStyle(e, null) : e.currentStyle,
                  l = e.offsetTop,
                  c = e.offsetLeft;
                (e = e.parentNode) &&
                e !== s &&
                e !== n &&
                (!o.support.fixedPosition || 'fixed' !== u.position);

              )
                (r = a ? a.getComputedStyle(e, null) : e.currentStyle),
                  (l -= e.scrollTop),
                  (c -= e.scrollLeft),
                  e === i &&
                    ((l += e.offsetTop),
                    (c += e.offsetLeft),
                    !o.support.doesNotAddBorder ||
                      (o.support.doesAddBorderForTableAndCells &&
                        vt.test(e.nodeName)) ||
                      ((l += parseFloat(r.borderTopWidth) || 0),
                      (c += parseFloat(r.borderLeftWidth) || 0)),
                    i,
                    (i = e.offsetParent)),
                  o.support.subtractsBorderForOverflowNotVisible &&
                    'visible' !== r.overflow &&
                    ((l += parseFloat(r.borderTopWidth) || 0),
                    (c += parseFloat(r.borderLeftWidth) || 0)),
                  (u = r);
              return (
                ('relative' !== u.position && 'static' !== u.position) ||
                  ((l += s.offsetTop), (c += s.offsetLeft)),
                o.support.fixedPosition &&
                  'fixed' === u.position &&
                  ((l += Math.max(n.scrollTop, s.scrollTop)),
                  (c += Math.max(n.scrollLeft, s.scrollLeft))),
                { top: l, left: c }
              );
            }),
        (o.fn.offset = function (e) {
          if (arguments.length)
            return void 0 === e
              ? this
              : this.each(function (t) {
                  o.offset.setOffset(this, e, t);
                });
          var t = this[0],
            n = t && t.ownerDocument;
          return n
            ? t === n.body
              ? o.offset.bodyOffset(t)
              : gt(t, n, n.documentElement)
            : null;
        }),
        (o.offset = {
          bodyOffset: function (e) {
            var t = e.offsetTop,
              n = e.offsetLeft;
            return (
              o.support.doesNotIncludeMarginInBodyOffset &&
                ((t += parseFloat(o.css(e, 'marginTop')) || 0),
                (n += parseFloat(o.css(e, 'marginLeft')) || 0)),
              { top: t, left: n }
            );
          },
          setOffset: function (e, t, n) {
            var r = o.css(e, 'position');
            'static' === r && (e.style.position = 'relative');
            var i,
              s,
              a = o(e),
              u = a.offset(),
              l = o.css(e, 'top'),
              c = o.css(e, 'left'),
              f = {},
              d = {};
            ('absolute' === r || 'fixed' === r) &&
            o.inArray('auto', [l, c]) > -1
              ? ((i = (d = a.position()).top), (s = d.left))
              : ((i = parseFloat(l) || 0), (s = parseFloat(c) || 0)),
              o.isFunction(t) && (t = t.call(e, n, u)),
              null != t.top && (f.top = t.top - u.top + i),
              null != t.left && (f.left = t.left - u.left + s),
              'using' in t ? t.using.call(e, f) : a.css(f);
          },
        }),
        o.fn.extend({
          position: function () {
            if (!this[0]) return null;
            var e = this[0],
              t = this.offsetParent(),
              n = this.offset(),
              r = mt.test(t[0].nodeName) ? { top: 0, left: 0 } : t.offset();
            return (
              (n.top -= parseFloat(o.css(e, 'marginTop')) || 0),
              (n.left -= parseFloat(o.css(e, 'marginLeft')) || 0),
              (r.top += parseFloat(o.css(t[0], 'borderTopWidth')) || 0),
              (r.left += parseFloat(o.css(t[0], 'borderLeftWidth')) || 0),
              { top: n.top - r.top, left: n.left - r.left }
            );
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent || n.body;
                e && !mt.test(e.nodeName) && 'static' === o.css(e, 'position');

              )
                e = e.offsetParent;
              return e;
            });
          },
        }),
        o.each(
          { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
          function (e, t) {
            var n = /Y/.test(t);
            o.fn[e] = function (r) {
              return o.access(
                this,
                function (e, r, i) {
                  var s = yt(e);
                  if (void 0 === i)
                    return s
                      ? t in s
                        ? s[t]
                        : (o.support.boxModel &&
                            s.document.documentElement[r]) ||
                          s.document.body[r]
                      : e[r];
                  s
                    ? s.scrollTo(
                        n ? o(s).scrollLeft() : i,
                        n ? i : o(s).scrollTop(),
                      )
                    : (e[r] = i);
                },
                e,
                r,
                arguments.length,
                null,
              );
            };
          },
        ),
        o.each({ Height: 'height', Width: 'width' }, function (e, t) {
          var n = 'client' + e,
            r = 'scroll' + e,
            i = 'offset' + e;
          (o.fn['inner' + e] = function () {
            var e = this[0];
            return e
              ? e.style
                ? parseFloat(o.css(e, t, 'padding'))
                : this[t]()
              : null;
          }),
            (o.fn['outer' + e] = function (e) {
              var n = this[0];
              return n
                ? n.style
                  ? parseFloat(o.css(n, t, e ? 'margin' : 'border'))
                  : this[t]()
                : null;
            }),
            (o.fn[t] = function (e) {
              return o.access(
                this,
                function (e, t, s) {
                  var a, u, l, c;
                  return o.isWindow(e)
                    ? ((u = (a = e.document).documentElement[n]),
                      (o.support.boxModel && u) || (a.body && a.body[n]) || u)
                    : 9 === e.nodeType
                    ? (a = e.documentElement)[n] >= a[r]
                      ? a[n]
                      : Math.max(e.body[r], a[r], e.body[i], a[i])
                    : void 0 === s
                    ? ((l = o.css(e, t)),
                      (c = parseFloat(l)),
                      o.isNumeric(c) ? c : l)
                    : void o(e).css(t, s);
                },
                t,
                e,
                arguments.length,
                null,
              );
            });
        }),
        (e.exports = window.jQuery = window.$ = o);
    },
    PAQY: function (e, t, n) {
      var r = n('QqfT')('meta'),
        i = n('zY5Q'),
        o = n('isQe'),
        s = n('gPPl').f,
        a = 0,
        u =
          Object.isExtensible ||
          function () {
            return !0;
          },
        l = !n('u52/')(function () {
          return u(Object.preventExtensions({}));
        }),
        c = function (e) {
          s(e, r, { value: { i: 'O' + ++a, w: {} } });
        },
        f = (e.exports = {
          KEY: r,
          NEED: !1,
          fastKey: function (e, t) {
            if (!i(e))
              return 'symbol' == typeof e
                ? e
                : ('string' == typeof e ? 'S' : 'P') + e;
            if (!o(e, r)) {
              if (!u(e)) return 'F';
              if (!t) return 'E';
              c(e);
            }
            return e[r].i;
          },
          getWeak: function (e, t) {
            if (!o(e, r)) {
              if (!u(e)) return !0;
              if (!t) return !1;
              c(e);
            }
            return e[r].w;
          },
          onFreeze: function (e) {
            return l && f.NEED && u(e) && !o(e, r) && c(e), e;
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
      var r, i, o;
      (i = [n('P5fv')]),
        void 0 ===
          (o =
            'function' ==
            typeof (r = function (e) {
              return (e.ui = e.ui || {}), (e.ui.version = '1.12.1');
            })
              ? r.apply(t, i)
              : r) || (e.exports = o);
    },
    R99l: function (e, t, n) {
      'use strict';
      var r = n('Vrag'),
        i = n('yUtn'),
        o = n('AuAe'),
        s = {};
      n('khJW')(s, n('IXQl')('iterator'), function () {
        return this;
      }),
        (e.exports = function (e, t, n) {
          (e.prototype = r(s, { next: i(1, n) })), o(e, t + ' Iterator');
        });
    },
    SYQx: function (e, t, n) {
      var r = n('gPPl'),
        i = n('9TFj'),
        o = n('xjCr');
      e.exports = n('nULH')
        ? Object.defineProperties
        : function (e, t) {
            i(e);
            for (var n, s = o(t), a = s.length, u = 0; a > u; )
              r.f(e, (n = s[u++]), t[n]);
            return e;
          };
    },
    SpsL: function (e, t) {
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
    SwRI: function (e, t) {
      e.exports = !1;
    },
    T0pI: function (e, t, n) {
      var r = n('KGgr').parseInt,
        i = n('W+In').trim,
        o = n('YqzG'),
        s = /^[-+]?0[xX]/;
      e.exports =
        8 !== r(o + '08') || 22 !== r(o + '0x16')
          ? function (e, t) {
              var n = i(String(e), 3);
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
      function i(e) {
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
        return new i(e);
      };
    },
    V3uq: function (e, t) {
      e.exports = {};
    },
    VUhU: function (e, t) {
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
    VgLE: function (e, t, n) {
      var r = n('/B3w'),
        i = Math.max,
        o = Math.min;
      e.exports = function (e, t) {
        return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t);
      };
    },
    Vrag: function (e, t, n) {
      var r = n('9TFj'),
        i = n('SYQx'),
        o = n('IbiK'),
        s = n('pND+')('IE_PROTO'),
        a = function () {},
        u = function () {
          var e,
            t = n('9S7S')('iframe'),
            r = o.length;
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
            delete u.prototype[o[r]];
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
            void 0 === t ? n : i(n, t)
          );
        };
    },
    'W+In': function (e, t, n) {
      var r = n('vVR7'),
        i = n('H46L'),
        o = n('u52/'),
        s = n('YqzG'),
        a = '[' + s + ']',
        u = RegExp('^' + a + a + '*'),
        l = RegExp(a + a + '*$'),
        c = function (e, t, n) {
          var i = {},
            a = o(function () {
              return !!s[e]() || '​' != '​'[e]();
            }),
            u = (i[e] = a ? t(f) : s[e]);
          n && (i[n] = u), r(r.P + r.F * a, 'String', i);
        },
        f = (c.trim = function (e, t) {
          return (
            (e = String(i(e))),
            1 & t && (e = e.replace(u, '')),
            2 & t && (e = e.replace(l, '')),
            e
          );
        });
      e.exports = c;
    },
    WJeB: function (e, t, n) {
      var r = n('isQe'),
        i = n('6Ngl'),
        o = n('WnSb')(!1),
        s = n('pND+')('IE_PROTO');
      e.exports = function (e, t) {
        var n,
          a = i(e),
          u = 0,
          l = [];
        for (n in a) n != s && r(a, n) && l.push(n);
        for (; t.length > u; ) r(a, (n = t[u++])) && (~o(l, n) || l.push(n));
        return l;
      };
    },
    WnSb: function (e, t, n) {
      var r = n('6Ngl'),
        i = n('bSmq'),
        o = n('VgLE');
      e.exports = function (e) {
        return function (t, n, s) {
          var a,
            u = r(t),
            l = i(u.length),
            c = o(s, l);
          if (e && n != n) {
            for (; l > c; ) if ((a = u[c++]) != a) return !0;
          } else
            for (; l > c; c++)
              if ((e || c in u) && u[c] === n) return e || c || 0;
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
    YFKU: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = window;
      function i(e) {
        window.t = e;
      }
      function o(e) {
        r.$ || (r.$ = {}), (r.$.t = e);
      }
      var s = function (e, t) {
        return e;
      };
      function a(e) {
        return (a =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function u(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? Object(arguments[t]) : {},
            r = Object.keys(n);
          'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              }),
            )),
            r.forEach(function (t) {
              u(e, t, n[t]);
            });
        }
        return e;
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function d(e, t, n) {
        return t && f(e.prototype, t), n && f(e, n), e;
      }
      i(s), o(s);
      var p = n('cDf5'),
        h = n.n(p),
        g = n('JX7q');
      function v(e, t) {
        return !t || ('object' !== h()(t) && 'function' != typeof t)
          ? Object(g.a)(e)
          : t;
      }
      function m(e) {
        return (m = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var y = n('s4An');
      function b(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && Object(y.a)(e, t);
      }
      var _ = {
          type: 'logger',
          log: function (e) {
            this.output('log', e);
          },
          warn: function (e) {
            this.output('warn', e);
          },
          error: function (e) {
            this.output('error', e);
          },
          output: function (e, t) {
            console && console[e] && console[e].apply(console, t);
          },
        },
        w = new ((function () {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            c(this, e), this.init(t, n);
          }
          return (
            d(e, [
              {
                key: 'init',
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  (this.prefix = t.prefix || 'i18next:'),
                    (this.logger = e || _),
                    (this.options = t),
                    (this.debug = t.debug);
                },
              },
              {
                key: 'setDebug',
                value: function (e) {
                  this.debug = e;
                },
              },
              {
                key: 'log',
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, 'log', '', !0);
                },
              },
              {
                key: 'warn',
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, 'warn', '', !0);
                },
              },
              {
                key: 'error',
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, 'error', '');
                },
              },
              {
                key: 'deprecate',
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, 'warn', 'WARNING DEPRECATED: ', !0);
                },
              },
              {
                key: 'forward',
                value: function (e, t, n, r) {
                  return r && !this.debug
                    ? null
                    : ('string' == typeof e[0] &&
                        (e[0] = ''
                          .concat(n)
                          .concat(this.prefix, ' ')
                          .concat(e[0])),
                      this.logger[t](e));
                },
              },
              {
                key: 'create',
                value: function (t) {
                  return new e(
                    this.logger,
                    l(
                      {},
                      { prefix: ''.concat(this.prefix, ':').concat(t, ':') },
                      this.options,
                    ),
                  );
                },
              },
            ]),
            e
          );
        })())(),
        x = (function () {
          function e() {
            c(this, e), (this.observers = {});
          }
          return (
            d(e, [
              {
                key: 'on',
                value: function (e, t) {
                  var n = this;
                  return (
                    e.split(' ').forEach(function (e) {
                      (n.observers[e] = n.observers[e] || []),
                        n.observers[e].push(t);
                    }),
                    this
                  );
                },
              },
              {
                key: 'off',
                value: function (e, t) {
                  this.observers[e] &&
                    (t
                      ? (this.observers[e] = this.observers[e].filter(function (
                          e,
                        ) {
                          return e !== t;
                        }))
                      : delete this.observers[e]);
                },
              },
              {
                key: 'emit',
                value: function (e) {
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      r = 1;
                    r < t;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  if (this.observers[e]) {
                    var i = [].concat(this.observers[e]);
                    i.forEach(function (e) {
                      e.apply(void 0, n);
                    });
                  }
                  if (this.observers['*']) {
                    var o = [].concat(this.observers['*']);
                    o.forEach(function (t) {
                      t.apply(t, [e].concat(n));
                    });
                  }
                },
              },
            ]),
            e
          );
        })();
      function k() {
        var e,
          t,
          n = new Promise(function (n, r) {
            (e = n), (t = r);
          });
        return (n.resolve = e), (n.reject = t), n;
      }
      function S(e) {
        return null == e ? '' : '' + e;
      }
      function E(e, t, n) {
        e.forEach(function (e) {
          t[e] && (n[e] = t[e]);
        });
      }
      function T(e, t, n) {
        function r(e) {
          return e && e.indexOf('###') > -1 ? e.replace(/###/g, '.') : e;
        }
        function i() {
          return !e || 'string' == typeof e;
        }
        for (
          var o = 'string' != typeof t ? [].concat(t) : t.split('.');
          o.length > 1;

        ) {
          if (i()) return {};
          var s = r(o.shift());
          !e[s] && n && (e[s] = new n()), (e = e[s]);
        }
        return i() ? {} : { obj: e, k: r(o.shift()) };
      }
      function C(e, t, n) {
        var r = T(e, t, Object);
        r.obj[r.k] = n;
      }
      function N(e, t) {
        var n = T(e, t),
          r = n.obj,
          i = n.k;
        if (r) return r[i];
      }
      function O(e, t, n) {
        var r = N(e, n);
        return void 0 !== r ? r : N(t, n);
      }
      function j(e, t, n) {
        for (var r in t)
          '__proto__' !== r &&
            (r in e
              ? 'string' == typeof e[r] ||
                e[r] instanceof String ||
                'string' == typeof t[r] ||
                t[r] instanceof String
                ? n && (e[r] = t[r])
                : j(e[r], t[r], n)
              : (e[r] = t[r]));
        return e;
      }
      function L(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
      }
      var A = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
      };
      function P(e) {
        return 'string' == typeof e
          ? e.replace(/[&<>"'\/]/g, function (e) {
              return A[e];
            })
          : e;
      }
      var F =
          'undefined' != typeof window &&
          window.navigator &&
          window.navigator.userAgent &&
          window.navigator.userAgent.indexOf('MSIE') > -1,
        D = (function (e) {
          function t(e) {
            var n,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { ns: ['translation'], defaultNS: 'translation' };
            return (
              c(this, t),
              (n = v(this, m(t).call(this))),
              F && x.call(Object(g.a)(n)),
              (n.data = e || {}),
              (n.options = r),
              void 0 === n.options.keySeparator &&
                (n.options.keySeparator = '.'),
              n
            );
          }
          return (
            b(t, e),
            d(t, [
              {
                key: 'addNamespaces',
                value: function (e) {
                  this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
                },
              },
              {
                key: 'removeNamespaces',
                value: function (e) {
                  var t = this.options.ns.indexOf(e);
                  t > -1 && this.options.ns.splice(t, 1);
                },
              },
              {
                key: 'getResource',
                value: function (e, t, n) {
                  var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {},
                    i =
                      void 0 !== r.keySeparator
                        ? r.keySeparator
                        : this.options.keySeparator,
                    o = [e, t];
                  return (
                    n && 'string' != typeof n && (o = o.concat(n)),
                    n &&
                      'string' == typeof n &&
                      (o = o.concat(i ? n.split(i) : n)),
                    e.indexOf('.') > -1 && (o = e.split('.')),
                    N(this.data, o)
                  );
                },
              },
              {
                key: 'addResource',
                value: function (e, t, n, r) {
                  var i =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : { silent: !1 },
                    o = this.options.keySeparator;
                  void 0 === o && (o = '.');
                  var s = [e, t];
                  n && (s = s.concat(o ? n.split(o) : n)),
                    e.indexOf('.') > -1 &&
                      ((r = t), (t = (s = e.split('.'))[1])),
                    this.addNamespaces(t),
                    C(this.data, s, r),
                    i.silent || this.emit('added', e, t, n, r);
                },
              },
              {
                key: 'addResources',
                value: function (e, t, n) {
                  var r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : { silent: !1 };
                  for (var i in n)
                    ('string' != typeof n[i] &&
                      '[object Array]' !==
                        Object.prototype.toString.apply(n[i])) ||
                      this.addResource(e, t, i, n[i], { silent: !0 });
                  r.silent || this.emit('added', e, t, n);
                },
              },
              {
                key: 'addResourceBundle',
                value: function (e, t, n, r, i) {
                  var o =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : { silent: !1 },
                    s = [e, t];
                  e.indexOf('.') > -1 &&
                    ((r = n), (n = t), (t = (s = e.split('.'))[1])),
                    this.addNamespaces(t);
                  var a = N(this.data, s) || {};
                  r ? j(a, n, i) : (a = l({}, a, n)),
                    C(this.data, s, a),
                    o.silent || this.emit('added', e, t, n);
                },
              },
              {
                key: 'removeResourceBundle',
                value: function (e, t) {
                  this.hasResourceBundle(e, t) && delete this.data[e][t],
                    this.removeNamespaces(t),
                    this.emit('removed', e, t);
                },
              },
              {
                key: 'hasResourceBundle',
                value: function (e, t) {
                  return void 0 !== this.getResource(e, t);
                },
              },
              {
                key: 'getResourceBundle',
                value: function (e, t) {
                  return (
                    t || (t = this.options.defaultNS),
                    'v1' === this.options.compatibilityAPI
                      ? l({}, {}, this.getResource(e, t))
                      : this.getResource(e, t)
                  );
                },
              },
              {
                key: 'getDataByLanguage',
                value: function (e) {
                  return this.data[e];
                },
              },
              {
                key: 'toJSON',
                value: function () {
                  return this.data;
                },
              },
            ]),
            t
          );
        })(x),
        R = {
          processors: {},
          addPostProcessor: function (e) {
            this.processors[e.name] = e;
          },
          handle: function (e, t, n, r, i) {
            var o = this;
            return (
              e.forEach(function (e) {
                o.processors[e] && (t = o.processors[e].process(t, n, r, i));
              }),
              t
            );
          },
        },
        M = {},
        I = (function (e) {
          function t(e) {
            var n,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            return (
              c(this, t),
              (n = v(this, m(t).call(this))),
              F && x.call(Object(g.a)(n)),
              E(
                [
                  'resourceStore',
                  'languageUtils',
                  'pluralResolver',
                  'interpolator',
                  'backendConnector',
                  'i18nFormat',
                  'utils',
                ],
                e,
                Object(g.a)(n),
              ),
              (n.options = r),
              void 0 === n.options.keySeparator &&
                (n.options.keySeparator = '.'),
              (n.logger = w.create('translator')),
              n
            );
          }
          return (
            b(t, e),
            d(t, [
              {
                key: 'changeLanguage',
                value: function (e) {
                  e && (this.language = e);
                },
              },
              {
                key: 'exists',
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { interpolation: {} },
                    n = this.resolve(e, t);
                  return n && void 0 !== n.res;
                },
              },
              {
                key: 'extractFromKey',
                value: function (e, t) {
                  var n =
                    void 0 !== t.nsSeparator
                      ? t.nsSeparator
                      : this.options.nsSeparator;
                  void 0 === n && (n = ':');
                  var r =
                      void 0 !== t.keySeparator
                        ? t.keySeparator
                        : this.options.keySeparator,
                    i = t.ns || this.options.defaultNS;
                  if (n && e.indexOf(n) > -1) {
                    var o = e.match(this.interpolator.nestingRegexp);
                    if (o && o.length > 0) return { key: e, namespaces: i };
                    var s = e.split(n);
                    (n !== r ||
                      (n === r && this.options.ns.indexOf(s[0]) > -1)) &&
                      (i = s.shift()),
                      (e = s.join(r));
                  }
                  return (
                    'string' == typeof i && (i = [i]), { key: e, namespaces: i }
                  );
                },
              },
              {
                key: 'translate',
                value: function (e, t, n) {
                  var r = this;
                  if (
                    ('object' !== a(t) &&
                      this.options.overloadTranslationOptionHandler &&
                      (t = this.options.overloadTranslationOptionHandler(
                        arguments,
                      )),
                    t || (t = {}),
                    null == e)
                  )
                    return '';
                  Array.isArray(e) || (e = [String(e)]);
                  var i =
                      void 0 !== t.keySeparator
                        ? t.keySeparator
                        : this.options.keySeparator,
                    o = this.extractFromKey(e[e.length - 1], t),
                    s = o.key,
                    u = o.namespaces,
                    c = u[u.length - 1],
                    f = t.lng || this.language,
                    d =
                      t.appendNamespaceToCIMode ||
                      this.options.appendNamespaceToCIMode;
                  if (f && 'cimode' === f.toLowerCase()) {
                    if (d) {
                      var p = t.nsSeparator || this.options.nsSeparator;
                      return c + p + s;
                    }
                    return s;
                  }
                  var h = this.resolve(e, t),
                    g = h && h.res,
                    v = (h && h.usedKey) || s,
                    m = (h && h.exactUsedKey) || s,
                    y = Object.prototype.toString.apply(g),
                    b = [
                      '[object Number]',
                      '[object Function]',
                      '[object RegExp]',
                    ],
                    _ =
                      void 0 !== t.joinArrays
                        ? t.joinArrays
                        : this.options.joinArrays,
                    w = !this.i18nFormat || this.i18nFormat.handleAsObject,
                    x =
                      'string' != typeof g &&
                      'boolean' != typeof g &&
                      'number' != typeof g;
                  if (
                    w &&
                    g &&
                    x &&
                    b.indexOf(y) < 0 &&
                    ('string' != typeof _ || '[object Array]' !== y)
                  ) {
                    if (!t.returnObjects && !this.options.returnObjects)
                      return (
                        this.logger.warn(
                          'accessing an object - but returnObjects options is not enabled!',
                        ),
                        this.options.returnedObjectHandler
                          ? this.options.returnedObjectHandler(v, g, t)
                          : "key '"
                              .concat(s, ' (')
                              .concat(
                                this.language,
                                ")' returned an object instead of string.",
                              )
                      );
                    if (i) {
                      var k = '[object Array]' === y,
                        S = k ? [] : {},
                        E = k ? m : v;
                      for (var T in g)
                        if (Object.prototype.hasOwnProperty.call(g, T)) {
                          var C = ''.concat(E).concat(i).concat(T);
                          (S[T] = this.translate(
                            C,
                            l({}, t, { joinArrays: !1, ns: u }),
                          )),
                            S[T] === C && (S[T] = g[T]);
                        }
                      g = S;
                    }
                  } else if (
                    w &&
                    'string' == typeof _ &&
                    '[object Array]' === y
                  )
                    (g = g.join(_)) && (g = this.extendTranslation(g, e, t, n));
                  else {
                    var N = !1,
                      O = !1;
                    if (!this.isValidLookup(g) && void 0 !== t.defaultValue) {
                      if (((N = !0), void 0 !== t.count)) {
                        var j = this.pluralResolver.getSuffix(f, t.count);
                        g = t['defaultValue'.concat(j)];
                      }
                      g || (g = t.defaultValue);
                    }
                    this.isValidLookup(g) || ((O = !0), (g = s));
                    var L =
                      t.defaultValue &&
                      t.defaultValue !== g &&
                      this.options.updateMissing;
                    if (O || N || L) {
                      if (
                        (this.logger.log(
                          L ? 'updateKey' : 'missingKey',
                          f,
                          c,
                          s,
                          L ? t.defaultValue : g,
                        ),
                        i)
                      ) {
                        var A = this.resolve(s, l({}, t, { keySeparator: !1 }));
                        A &&
                          A.res &&
                          this.logger.warn(
                            'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
                          );
                      }
                      var P = [],
                        F = this.languageUtils.getFallbackCodes(
                          this.options.fallbackLng,
                          t.lng || this.language,
                        );
                      if (
                        'fallback' === this.options.saveMissingTo &&
                        F &&
                        F[0]
                      )
                        for (var D = 0; D < F.length; D++) P.push(F[D]);
                      else
                        'all' === this.options.saveMissingTo
                          ? (P = this.languageUtils.toResolveHierarchy(
                              t.lng || this.language,
                            ))
                          : P.push(t.lng || this.language);
                      var R = function (e, n) {
                        r.options.missingKeyHandler
                          ? r.options.missingKeyHandler(
                              e,
                              c,
                              n,
                              L ? t.defaultValue : g,
                              L,
                              t,
                            )
                          : r.backendConnector &&
                            r.backendConnector.saveMissing &&
                            r.backendConnector.saveMissing(
                              e,
                              c,
                              n,
                              L ? t.defaultValue : g,
                              L,
                              t,
                            ),
                          r.emit('missingKey', e, c, n, g);
                      };
                      if (this.options.saveMissing) {
                        var M =
                          void 0 !== t.count && 'string' != typeof t.count;
                        this.options.saveMissingPlurals && M
                          ? P.forEach(function (e) {
                              r.pluralResolver
                                .getPluralFormsOfKey(e, s)
                                .forEach(function (t) {
                                  return R([e], t);
                                });
                            })
                          : R(P, s);
                      }
                    }
                    (g = this.extendTranslation(g, e, t, h, n)),
                      O &&
                        g === s &&
                        this.options.appendNamespaceToMissingKey &&
                        (g = ''.concat(c, ':').concat(s)),
                      O &&
                        this.options.parseMissingKeyHandler &&
                        (g = this.options.parseMissingKeyHandler(g));
                  }
                  return g;
                },
              },
              {
                key: 'extendTranslation',
                value: function (e, t, n, r, i) {
                  var o = this;
                  if (this.i18nFormat && this.i18nFormat.parse)
                    e = this.i18nFormat.parse(
                      e,
                      n,
                      r.usedLng,
                      r.usedNS,
                      r.usedKey,
                      { resolved: r },
                    );
                  else if (!n.skipInterpolation) {
                    n.interpolation &&
                      this.interpolator.init(
                        l({}, n, {
                          interpolation: l(
                            {},
                            this.options.interpolation,
                            n.interpolation,
                          ),
                        }),
                      );
                    var s,
                      a =
                        (n.interpolation && n.interpolation.skipOnVariables) ||
                        this.options.interpolation.skipOnVariables;
                    if (a) {
                      var u = e.match(this.interpolator.nestingRegexp);
                      s = u && u.length;
                    }
                    var c =
                      n.replace && 'string' != typeof n.replace ? n.replace : n;
                    if (
                      (this.options.interpolation.defaultVariables &&
                        (c = l(
                          {},
                          this.options.interpolation.defaultVariables,
                          c,
                        )),
                      (e = this.interpolator.interpolate(
                        e,
                        c,
                        n.lng || this.language,
                        n,
                      )),
                      a)
                    ) {
                      var f = e.match(this.interpolator.nestingRegexp);
                      s < (f && f.length) && (n.nest = !1);
                    }
                    !1 !== n.nest &&
                      (e = this.interpolator.nest(
                        e,
                        function () {
                          for (
                            var e = arguments.length, n = new Array(e), r = 0;
                            r < e;
                            r++
                          )
                            n[r] = arguments[r];
                          return i && i[0] === n[0]
                            ? (o.logger.warn(
                                'It seems you are nesting recursively key: '
                                  .concat(n[0], ' in key: ')
                                  .concat(t[0]),
                              ),
                              null)
                            : o.translate.apply(o, n.concat([t]));
                        },
                        n,
                      )),
                      n.interpolation && this.interpolator.reset();
                  }
                  var d = n.postProcess || this.options.postProcess,
                    p = 'string' == typeof d ? [d] : d;
                  return (
                    null != e &&
                      p &&
                      p.length &&
                      !1 !== n.applyPostProcessor &&
                      (e = R.handle(
                        p,
                        e,
                        t,
                        this.options && this.options.postProcessPassResolved
                          ? l({ i18nResolved: r }, n)
                          : n,
                        this,
                      )),
                    e
                  );
                },
              },
              {
                key: 'resolve',
                value: function (e) {
                  var t,
                    n,
                    r,
                    i,
                    o,
                    s = this,
                    a =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  return (
                    'string' == typeof e && (e = [e]),
                    e.forEach(function (e) {
                      if (!s.isValidLookup(t)) {
                        var u = s.extractFromKey(e, a),
                          l = u.key;
                        n = l;
                        var c = u.namespaces;
                        s.options.fallbackNS &&
                          (c = c.concat(s.options.fallbackNS));
                        var f =
                            void 0 !== a.count && 'string' != typeof a.count,
                          d =
                            void 0 !== a.context &&
                            'string' == typeof a.context &&
                            '' !== a.context,
                          p = a.lngs
                            ? a.lngs
                            : s.languageUtils.toResolveHierarchy(
                                a.lng || s.language,
                                a.fallbackLng,
                              );
                        c.forEach(function (e) {
                          s.isValidLookup(t) ||
                            ((o = e),
                            !M[''.concat(p[0], '-').concat(e)] &&
                              s.utils &&
                              s.utils.hasLoadedNamespace &&
                              !s.utils.hasLoadedNamespace(o) &&
                              ((M[''.concat(p[0], '-').concat(e)] = !0),
                              s.logger.warn(
                                'key "'
                                  .concat(n, '" for languages "')
                                  .concat(
                                    p.join(', '),
                                    '" won\'t get resolved as namespace "',
                                  )
                                  .concat(o, '" was not yet loaded'),
                                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
                              )),
                            p.forEach(function (n) {
                              if (!s.isValidLookup(t)) {
                                i = n;
                                var o,
                                  u,
                                  c = l,
                                  p = [c];
                                if (s.i18nFormat && s.i18nFormat.addLookupKeys)
                                  s.i18nFormat.addLookupKeys(p, l, n, e, a);
                                else
                                  f &&
                                    (o = s.pluralResolver.getSuffix(
                                      n,
                                      a.count,
                                    )),
                                    f && d && p.push(c + o),
                                    d &&
                                      p.push(
                                        (c += ''
                                          .concat(s.options.contextSeparator)
                                          .concat(a.context)),
                                      ),
                                    f && p.push((c += o));
                                for (; (u = p.pop()); )
                                  s.isValidLookup(t) ||
                                    ((r = u), (t = s.getResource(n, e, u, a)));
                              }
                            }));
                        });
                      }
                    }),
                    {
                      res: t,
                      usedKey: n,
                      exactUsedKey: r,
                      usedLng: i,
                      usedNS: o,
                    }
                  );
                },
              },
              {
                key: 'isValidLookup',
                value: function (e) {
                  return !(
                    void 0 === e ||
                    (!this.options.returnNull && null === e) ||
                    (!this.options.returnEmptyString && '' === e)
                  );
                },
              },
              {
                key: 'getResource',
                value: function (e, t, n) {
                  var r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {};
                  return this.i18nFormat && this.i18nFormat.getResource
                    ? this.i18nFormat.getResource(e, t, n, r)
                    : this.resourceStore.getResource(e, t, n, r);
                },
              },
            ]),
            t
          );
        })(x);
      function H(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      var B = (function () {
          function e(t) {
            c(this, e),
              (this.options = t),
              (this.whitelist = this.options.supportedLngs || !1),
              (this.supportedLngs = this.options.supportedLngs || !1),
              (this.logger = w.create('languageUtils'));
          }
          return (
            d(e, [
              {
                key: 'getScriptPartFromCode',
                value: function (e) {
                  if (!e || e.indexOf('-') < 0) return null;
                  var t = e.split('-');
                  return 2 === t.length
                    ? null
                    : (t.pop(),
                      'x' === t[t.length - 1].toLowerCase()
                        ? null
                        : this.formatLanguageCode(t.join('-')));
                },
              },
              {
                key: 'getLanguagePartFromCode',
                value: function (e) {
                  if (!e || e.indexOf('-') < 0) return e;
                  var t = e.split('-');
                  return this.formatLanguageCode(t[0]);
                },
              },
              {
                key: 'formatLanguageCode',
                value: function (e) {
                  if ('string' == typeof e && e.indexOf('-') > -1) {
                    var t = [
                        'hans',
                        'hant',
                        'latn',
                        'cyrl',
                        'cans',
                        'mong',
                        'arab',
                      ],
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
                            (n[1] = H(n[1].toLowerCase())))
                        : 3 === n.length &&
                          ((n[0] = n[0].toLowerCase()),
                          2 === n[1].length && (n[1] = n[1].toUpperCase()),
                          'sgn' !== n[0] &&
                            2 === n[2].length &&
                            (n[2] = n[2].toUpperCase()),
                          t.indexOf(n[1].toLowerCase()) > -1 &&
                            (n[1] = H(n[1].toLowerCase())),
                          t.indexOf(n[2].toLowerCase()) > -1 &&
                            (n[2] = H(n[2].toLowerCase()))),
                      n.join('-')
                    );
                  }
                  return this.options.cleanCode || this.options.lowerCaseLng
                    ? e.toLowerCase()
                    : e;
                },
              },
              {
                key: 'isWhitelisted',
                value: function (e) {
                  return (
                    this.logger.deprecate(
                      'languageUtils.isWhitelisted',
                      'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.',
                    ),
                    this.isSupportedCode(e)
                  );
                },
              },
              {
                key: 'isSupportedCode',
                value: function (e) {
                  return (
                    ('languageOnly' === this.options.load ||
                      this.options.nonExplicitSupportedLngs) &&
                      (e = this.getLanguagePartFromCode(e)),
                    !this.supportedLngs ||
                      !this.supportedLngs.length ||
                      this.supportedLngs.indexOf(e) > -1
                  );
                },
              },
              {
                key: 'getBestMatchFromCodes',
                value: function (e) {
                  var t,
                    n = this;
                  return e
                    ? (e.forEach(function (e) {
                        if (!t) {
                          var r = n.formatLanguageCode(e);
                          (n.options.supportedLngs && !n.isSupportedCode(r)) ||
                            (t = r);
                        }
                      }),
                      !t &&
                        this.options.supportedLngs &&
                        e.forEach(function (e) {
                          if (!t) {
                            var r = n.getLanguagePartFromCode(e);
                            if (n.isSupportedCode(r)) return (t = r);
                            t = n.options.supportedLngs.find(function (e) {
                              if (0 === e.indexOf(r)) return e;
                            });
                          }
                        }),
                      t ||
                        (t = this.getFallbackCodes(
                          this.options.fallbackLng,
                        )[0]),
                      t)
                    : null;
                },
              },
              {
                key: 'getFallbackCodes',
                value: function (e, t) {
                  if (!e) return [];
                  if (
                    ('string' == typeof e && (e = [e]),
                    '[object Array]' === Object.prototype.toString.apply(e))
                  )
                    return e;
                  if (!t) return e.default || [];
                  var n = e[t];
                  return (
                    n || (n = e[this.getScriptPartFromCode(t)]),
                    n || (n = e[this.formatLanguageCode(t)]),
                    n || (n = e[this.getLanguagePartFromCode(t)]),
                    n || (n = e.default),
                    n || []
                  );
                },
              },
              {
                key: 'toResolveHierarchy',
                value: function (e, t) {
                  var n = this,
                    r = this.getFallbackCodes(
                      t || this.options.fallbackLng || [],
                      e,
                    ),
                    i = [],
                    o = function (e) {
                      e &&
                        (n.isSupportedCode(e)
                          ? i.push(e)
                          : n.logger.warn(
                              'rejecting language code not found in supportedLngs: '.concat(
                                e,
                              ),
                            ));
                    };
                  return (
                    'string' == typeof e && e.indexOf('-') > -1
                      ? ('languageOnly' !== this.options.load &&
                          o(this.formatLanguageCode(e)),
                        'languageOnly' !== this.options.load &&
                          'currentOnly' !== this.options.load &&
                          o(this.getScriptPartFromCode(e)),
                        'currentOnly' !== this.options.load &&
                          o(this.getLanguagePartFromCode(e)))
                      : 'string' == typeof e && o(this.formatLanguageCode(e)),
                    r.forEach(function (e) {
                      i.indexOf(e) < 0 && o(n.formatLanguageCode(e));
                    }),
                    i
                  );
                },
              },
            ]),
            e
          );
        })(),
        q = [
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
              'pt',
              'pt-BR',
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
              'et',
              'eu',
              'fi',
              'fo',
              'fur',
              'fy',
              'gl',
              'gu',
              'ha',
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
              'pt-PT',
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
            lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
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
          { lngs: ['he'], nr: [1, 2, 20, 21], fc: 22 },
        ],
        W = {
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
              0 == e
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
            return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
          },
          18: function (e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2);
          },
          19: function (e) {
            return Number(
              1 == e
                ? 0
                : 0 == e || (e % 100 > 1 && e % 100 < 11)
                ? 1
                : e % 100 > 10 && e % 100 < 20
                ? 2
                : 3,
            );
          },
          20: function (e) {
            return Number(
              1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2,
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
          22: function (e) {
            return Number(
              1 == e
                ? 0
                : 2 == e
                ? 1
                : (e < 0 || e > 10) && e % 10 == 0
                ? 2
                : 3,
            );
          },
        };
      function z() {
        var e = {};
        return (
          q.forEach(function (t) {
            t.lngs.forEach(function (n) {
              e[n] = { numbers: t.nr, plurals: W[t.fc] };
            });
          }),
          e
        );
      }
      var V = (function () {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            c(this, e),
              (this.languageUtils = t),
              (this.options = n),
              (this.logger = w.create('pluralResolver')),
              (this.rules = z());
          }
          return (
            d(e, [
              {
                key: 'addRule',
                value: function (e, t) {
                  this.rules[e] = t;
                },
              },
              {
                key: 'getRule',
                value: function (e) {
                  return (
                    this.rules[e] ||
                    this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                  );
                },
              },
              {
                key: 'needsPlural',
                value: function (e) {
                  var t = this.getRule(e);
                  return t && t.numbers.length > 1;
                },
              },
              {
                key: 'getPluralFormsOfKey',
                value: function (e, t) {
                  var n = this,
                    r = [],
                    i = this.getRule(e);
                  return i
                    ? (i.numbers.forEach(function (i) {
                        var o = n.getSuffix(e, i);
                        r.push(''.concat(t).concat(o));
                      }),
                      r)
                    : r;
                },
              },
              {
                key: 'getSuffix',
                value: function (e, t) {
                  var n = this,
                    r = this.getRule(e);
                  if (r) {
                    var i = r.noAbs ? r.plurals(t) : r.plurals(Math.abs(t)),
                      o = r.numbers[i];
                    this.options.simplifyPluralSuffix &&
                      2 === r.numbers.length &&
                      1 === r.numbers[0] &&
                      (2 === o ? (o = 'plural') : 1 === o && (o = ''));
                    var s = function () {
                      return n.options.prepend && o.toString()
                        ? n.options.prepend + o.toString()
                        : o.toString();
                    };
                    return 'v1' === this.options.compatibilityJSON
                      ? 1 === o
                        ? ''
                        : 'number' == typeof o
                        ? '_plural_'.concat(o.toString())
                        : s()
                      : 'v2' === this.options.compatibilityJSON ||
                        (this.options.simplifyPluralSuffix &&
                          2 === r.numbers.length &&
                          1 === r.numbers[0])
                      ? s()
                      : this.options.prepend && i.toString()
                      ? this.options.prepend + i.toString()
                      : i.toString();
                  }
                  return (
                    this.logger.warn('no plural rule found for: '.concat(e)), ''
                  );
                },
              },
            ]),
            e
          );
        })(),
        U = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            c(this, e),
              (this.logger = w.create('interpolator')),
              (this.options = t),
              (this.format =
                (t.interpolation && t.interpolation.format) ||
                function (e) {
                  return e;
                }),
              this.init(t);
          }
          return (
            d(e, [
              {
                key: 'init',
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  e.interpolation || (e.interpolation = { escapeValue: !0 });
                  var t = e.interpolation;
                  (this.escape = void 0 !== t.escape ? t.escape : P),
                    (this.escapeValue =
                      void 0 === t.escapeValue || t.escapeValue),
                    (this.useRawValueToEscape =
                      void 0 !== t.useRawValueToEscape &&
                      t.useRawValueToEscape),
                    (this.prefix = t.prefix
                      ? L(t.prefix)
                      : t.prefixEscaped || '{{'),
                    (this.suffix = t.suffix
                      ? L(t.suffix)
                      : t.suffixEscaped || '}}'),
                    (this.formatSeparator = t.formatSeparator
                      ? t.formatSeparator
                      : t.formatSeparator || ','),
                    (this.unescapePrefix = t.unescapeSuffix
                      ? ''
                      : t.unescapePrefix || '-'),
                    (this.unescapeSuffix = this.unescapePrefix
                      ? ''
                      : t.unescapeSuffix || ''),
                    (this.nestingPrefix = t.nestingPrefix
                      ? L(t.nestingPrefix)
                      : t.nestingPrefixEscaped || L('$t(')),
                    (this.nestingSuffix = t.nestingSuffix
                      ? L(t.nestingSuffix)
                      : t.nestingSuffixEscaped || L(')')),
                    (this.nestingOptionsSeparator = t.nestingOptionsSeparator
                      ? t.nestingOptionsSeparator
                      : t.nestingOptionsSeparator || ','),
                    (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
                    (this.alwaysFormat =
                      void 0 !== t.alwaysFormat && t.alwaysFormat),
                    this.resetRegExp();
                },
              },
              {
                key: 'reset',
                value: function () {
                  this.options && this.init(this.options);
                },
              },
              {
                key: 'resetRegExp',
                value: function () {
                  var e = ''.concat(this.prefix, '(.+?)').concat(this.suffix);
                  this.regexp = new RegExp(e, 'g');
                  var t = ''
                    .concat(this.prefix)
                    .concat(this.unescapePrefix, '(.+?)')
                    .concat(this.unescapeSuffix)
                    .concat(this.suffix);
                  this.regexpUnescape = new RegExp(t, 'g');
                  var n = ''
                    .concat(this.nestingPrefix, '(.+?)')
                    .concat(this.nestingSuffix);
                  this.nestingRegexp = new RegExp(n, 'g');
                },
              },
              {
                key: 'interpolate',
                value: function (e, t, n, r) {
                  var i,
                    o,
                    s,
                    a = this,
                    u =
                      (this.options &&
                        this.options.interpolation &&
                        this.options.interpolation.defaultVariables) ||
                      {};
                  function l(e) {
                    return e.replace(/\$/g, '$$$$');
                  }
                  var c = function (e) {
                    if (e.indexOf(a.formatSeparator) < 0) {
                      var i = O(t, u, e);
                      return a.alwaysFormat ? a.format(i, void 0, n) : i;
                    }
                    var o = e.split(a.formatSeparator),
                      s = o.shift().trim(),
                      l = o.join(a.formatSeparator).trim();
                    return a.format(O(t, u, s), l, n, r);
                  };
                  this.resetRegExp();
                  var f =
                    (r && r.missingInterpolationHandler) ||
                    this.options.missingInterpolationHandler;
                  for (s = 0; (i = this.regexpUnescape.exec(e)); ) {
                    if (void 0 === (o = c(i[1].trim())))
                      if ('function' == typeof f) {
                        var d = f(e, i, r);
                        o = 'string' == typeof d ? d : '';
                      } else
                        this.logger.warn(
                          'missed to pass in variable '
                            .concat(i[1], ' for interpolating ')
                            .concat(e),
                        ),
                          (o = '');
                    else
                      'string' == typeof o ||
                        this.useRawValueToEscape ||
                        (o = S(o));
                    if (
                      ((e = e.replace(i[0], l(o))),
                      (this.regexpUnescape.lastIndex = 0),
                      ++s >= this.maxReplaces)
                    )
                      break;
                  }
                  for (s = 0; (i = this.regexp.exec(e)); ) {
                    if (void 0 === (o = c(i[1].trim())))
                      if ('function' == typeof f) {
                        var p = f(e, i, r);
                        o = 'string' == typeof p ? p : '';
                      } else
                        this.logger.warn(
                          'missed to pass in variable '
                            .concat(i[1], ' for interpolating ')
                            .concat(e),
                        ),
                          (o = '');
                    else
                      'string' == typeof o ||
                        this.useRawValueToEscape ||
                        (o = S(o));
                    if (
                      ((o = this.escapeValue ? l(this.escape(o)) : l(o)),
                      (e = e.replace(i[0], o)),
                      (this.regexp.lastIndex = 0),
                      ++s >= this.maxReplaces)
                    )
                      break;
                  }
                  return e;
                },
              },
              {
                key: 'nest',
                value: function (e, t) {
                  var n,
                    r,
                    i = this,
                    o =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    s = l({}, o);
                  function a(e, t) {
                    var n = this.nestingOptionsSeparator;
                    if (e.indexOf(n) < 0) return e;
                    var r = e.split(new RegExp(''.concat(n, '[ ]*{'))),
                      i = '{'.concat(r[1]);
                    (e = r[0]),
                      (i = (i = this.interpolate(i, s)).replace(/'/g, '"'));
                    try {
                      (s = JSON.parse(i)), t && (s = l({}, t, s));
                    } catch (o) {
                      return (
                        this.logger.warn(
                          'failed parsing options string in nesting for key '.concat(
                            e,
                          ),
                          o,
                        ),
                        ''.concat(e).concat(n).concat(i)
                      );
                    }
                    return delete s.defaultValue, e;
                  }
                  for (
                    s.applyPostProcessor = !1, delete s.defaultValue;
                    (n = this.nestingRegexp.exec(e));

                  ) {
                    var u = [],
                      c = !1;
                    if (
                      n[0].includes(this.formatSeparator) &&
                      !/{.*}/.test(n[1])
                    ) {
                      var f = n[1]
                        .split(this.formatSeparator)
                        .map(function (e) {
                          return e.trim();
                        });
                      (n[1] = f.shift()), (u = f), (c = !0);
                    }
                    if (
                      (r = t(a.call(this, n[1].trim(), s), s)) &&
                      n[0] === e &&
                      'string' != typeof r
                    )
                      return r;
                    'string' != typeof r && (r = S(r)),
                      r ||
                        (this.logger.warn(
                          'missed to resolve '
                            .concat(n[1], ' for nesting ')
                            .concat(e),
                        ),
                        (r = '')),
                      c &&
                        (r = u.reduce(function (e, t) {
                          return i.format(e, t, o.lng, o);
                        }, r.trim())),
                      (e = e.replace(n[0], r)),
                      (this.regexp.lastIndex = 0);
                  }
                  return e;
                },
              },
            ]),
            e
          );
        })();
      var $ = (function (e) {
        function t(e, n, r) {
          var i,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          return (
            c(this, t),
            (i = v(this, m(t).call(this))),
            F && x.call(Object(g.a)(i)),
            (i.backend = e),
            (i.store = n),
            (i.services = r),
            (i.languageUtils = r.languageUtils),
            (i.options = o),
            (i.logger = w.create('backendConnector')),
            (i.state = {}),
            (i.queue = []),
            i.backend && i.backend.init && i.backend.init(r, o.backend, o),
            i
          );
        }
        return (
          b(t, e),
          d(t, [
            {
              key: 'queueLoad',
              value: function (e, t, n, r) {
                var i = this,
                  o = [],
                  s = [],
                  a = [],
                  u = [];
                return (
                  e.forEach(function (e) {
                    var r = !0;
                    t.forEach(function (t) {
                      var a = ''.concat(e, '|').concat(t);
                      !n.reload && i.store.hasResourceBundle(e, t)
                        ? (i.state[a] = 2)
                        : i.state[a] < 0 ||
                          (1 === i.state[a]
                            ? s.indexOf(a) < 0 && s.push(a)
                            : ((i.state[a] = 1),
                              (r = !1),
                              s.indexOf(a) < 0 && s.push(a),
                              o.indexOf(a) < 0 && o.push(a),
                              u.indexOf(t) < 0 && u.push(t)));
                    }),
                      r || a.push(e);
                  }),
                  (o.length || s.length) &&
                    this.queue.push({
                      pending: s,
                      loaded: {},
                      errors: [],
                      callback: r,
                    }),
                  {
                    toLoad: o,
                    pending: s,
                    toLoadLanguages: a,
                    toLoadNamespaces: u,
                  }
                );
              },
            },
            {
              key: 'loaded',
              value: function (e, t, n) {
                var r = e.split('|'),
                  i = r[0],
                  o = r[1];
                t && this.emit('failedLoading', i, o, t),
                  n && this.store.addResourceBundle(i, o, n),
                  (this.state[e] = t ? -1 : 2);
                var s = {};
                this.queue.forEach(function (n) {
                  var r, a, u, l, c, f;
                  (r = n.loaded),
                    (a = o),
                    (l = T(r, [i], Object)),
                    (c = l.obj),
                    (f = l.k),
                    (c[f] = c[f] || []),
                    u && (c[f] = c[f].concat(a)),
                    u || c[f].push(a),
                    (function (e, t) {
                      for (var n = e.indexOf(t); -1 !== n; )
                        e.splice(n, 1), (n = e.indexOf(t));
                    })(n.pending, e),
                    t && n.errors.push(t),
                    0 !== n.pending.length ||
                      n.done ||
                      (Object.keys(n.loaded).forEach(function (e) {
                        s[e] || (s[e] = []),
                          n.loaded[e].length &&
                            n.loaded[e].forEach(function (t) {
                              s[e].indexOf(t) < 0 && s[e].push(t);
                            });
                      }),
                      (n.done = !0),
                      n.errors.length ? n.callback(n.errors) : n.callback());
                }),
                  this.emit('loaded', s),
                  (this.queue = this.queue.filter(function (e) {
                    return !e.done;
                  }));
              },
            },
            {
              key: 'read',
              value: function (e, t, n) {
                var r = this,
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  o =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : 350,
                  s = arguments.length > 5 ? arguments[5] : void 0;
                return e.length
                  ? this.backend[n](e, t, function (a, u) {
                      a && u && i < 5
                        ? setTimeout(function () {
                            r.read.call(r, e, t, n, i + 1, 2 * o, s);
                          }, o)
                        : s(a, u);
                    })
                  : s(null, {});
              },
            },
            {
              key: 'prepareLoading',
              value: function (e, t) {
                var n = this,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  i = arguments.length > 3 ? arguments[3] : void 0;
                if (!this.backend)
                  return (
                    this.logger.warn(
                      'No backend was added via i18next.use. Will not load resources.',
                    ),
                    i && i()
                  );
                'string' == typeof e &&
                  (e = this.languageUtils.toResolveHierarchy(e)),
                  'string' == typeof t && (t = [t]);
                var o = this.queueLoad(e, t, r, i);
                if (!o.toLoad.length) return o.pending.length || i(), null;
                o.toLoad.forEach(function (e) {
                  n.loadOne(e);
                });
              },
            },
            {
              key: 'load',
              value: function (e, t, n) {
                this.prepareLoading(e, t, {}, n);
              },
            },
            {
              key: 'reload',
              value: function (e, t, n) {
                this.prepareLoading(e, t, { reload: !0 }, n);
              },
            },
            {
              key: 'loadOne',
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : '',
                  r = e.split('|'),
                  i = r[0],
                  o = r[1];
                this.read(i, o, 'read', void 0, void 0, function (r, s) {
                  r &&
                    t.logger.warn(
                      ''
                        .concat(n, 'loading namespace ')
                        .concat(o, ' for language ')
                        .concat(i, ' failed'),
                      r,
                    ),
                    !r &&
                      s &&
                      t.logger.log(
                        ''
                          .concat(n, 'loaded namespace ')
                          .concat(o, ' for language ')
                          .concat(i),
                        s,
                      ),
                    t.loaded(e, r, s);
                });
              },
            },
            {
              key: 'saveMissing',
              value: function (e, t, n, r, i) {
                var o =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : {};
                this.services.utils &&
                this.services.utils.hasLoadedNamespace &&
                !this.services.utils.hasLoadedNamespace(t)
                  ? this.logger.warn(
                      'did not save key "'
                        .concat(n, '" as the namespace "')
                        .concat(t, '" was not yet loaded'),
                      'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
                    )
                  : null != n &&
                    '' !== n &&
                    (this.backend &&
                      this.backend.create &&
                      this.backend.create(
                        e,
                        t,
                        n,
                        r,
                        null,
                        l({}, o, { isUpdate: i }),
                      ),
                    e && e[0] && this.store.addResource(e[0], t, n, r));
              },
            },
          ]),
          t
        );
      })(x);
      function Q() {
        return {
          debug: !1,
          initImmediate: !0,
          ns: ['translation'],
          defaultNS: ['translation'],
          fallbackLng: ['dev'],
          fallbackNS: !1,
          whitelist: !1,
          nonExplicitWhitelist: !1,
          supportedLngs: !1,
          nonExplicitSupportedLngs: !1,
          load: 'all',
          preload: !1,
          simplifyPluralSuffix: !0,
          keySeparator: '.',
          nsSeparator: ':',
          pluralSeparator: '_',
          contextSeparator: '_',
          partialBundledLanguages: !1,
          saveMissing: !1,
          updateMissing: !1,
          saveMissingTo: 'fallback',
          saveMissingPlurals: !0,
          missingKeyHandler: !1,
          missingInterpolationHandler: !1,
          postProcess: !1,
          postProcessPassResolved: !1,
          returnNull: !0,
          returnEmptyString: !0,
          returnObjects: !1,
          joinArrays: !1,
          returnedObjectHandler: !1,
          parseMissingKeyHandler: !1,
          appendNamespaceToMissingKey: !1,
          appendNamespaceToCIMode: !1,
          overloadTranslationOptionHandler: function (e) {
            var t = {};
            if (
              ('object' === a(e[1]) && (t = e[1]),
              'string' == typeof e[1] && (t.defaultValue = e[1]),
              'string' == typeof e[2] && (t.tDescription = e[2]),
              'object' === a(e[2]) || 'object' === a(e[3]))
            ) {
              var n = e[3] || e[2];
              Object.keys(n).forEach(function (e) {
                t[e] = n[e];
              });
            }
            return t;
          },
          interpolation: {
            escapeValue: !0,
            format: function (e, t, n, r) {
              return e;
            },
            prefix: '{{',
            suffix: '}}',
            formatSeparator: ',',
            unescapePrefix: '-',
            nestingPrefix: '$t(',
            nestingSuffix: ')',
            nestingOptionsSeparator: ',',
            maxReplaces: 1e3,
            skipOnVariables: !1,
          },
        };
      }
      function X(e) {
        return (
          'string' == typeof e.ns && (e.ns = [e.ns]),
          'string' == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
          'string' == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
          e.whitelist &&
            (e.whitelist &&
              e.whitelist.indexOf('cimode') < 0 &&
              (e.whitelist = e.whitelist.concat(['cimode'])),
            (e.supportedLngs = e.whitelist)),
          e.nonExplicitWhitelist &&
            (e.nonExplicitSupportedLngs = e.nonExplicitWhitelist),
          e.supportedLngs &&
            e.supportedLngs.indexOf('cimode') < 0 &&
            (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
          e
        );
      }
      function K() {}
      var Y,
        J = new ((function (e) {
          function t() {
            var e,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = arguments.length > 1 ? arguments[1] : void 0;
            if (
              (c(this, t),
              (e = v(this, m(t).call(this))),
              F && x.call(Object(g.a)(e)),
              (e.options = X(n)),
              (e.services = {}),
              (e.logger = w),
              (e.modules = { external: [] }),
              r && !e.isInitialized && !n.isClone)
            ) {
              if (!e.options.initImmediate)
                return e.init(n, r), v(e, Object(g.a)(e));
              setTimeout(function () {
                e.init(n, r);
              }, 0);
            }
            return e;
          }
          return (
            b(t, e),
            d(t, [
              {
                key: 'init',
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    n = arguments.length > 1 ? arguments[1] : void 0;
                  function r(e) {
                    return e ? ('function' == typeof e ? new e() : e) : null;
                  }
                  if (
                    ('function' == typeof t && ((n = t), (t = {})),
                    t.whitelist &&
                      !t.supportedLngs &&
                      this.logger.deprecate(
                        'whitelist',
                        'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.',
                      ),
                    t.nonExplicitWhitelist &&
                      !t.nonExplicitSupportedLngs &&
                      this.logger.deprecate(
                        'whitelist',
                        'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.',
                      ),
                    (this.options = l({}, Q(), this.options, X(t))),
                    (this.format = this.options.interpolation.format),
                    n || (n = K),
                    !this.options.isClone)
                  ) {
                    this.modules.logger
                      ? w.init(r(this.modules.logger), this.options)
                      : w.init(null, this.options);
                    var i = new B(this.options);
                    this.store = new D(this.options.resources, this.options);
                    var o = this.services;
                    (o.logger = w),
                      (o.resourceStore = this.store),
                      (o.languageUtils = i),
                      (o.pluralResolver = new V(i, {
                        prepend: this.options.pluralSeparator,
                        compatibilityJSON: this.options.compatibilityJSON,
                        simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                      })),
                      (o.interpolator = new U(this.options)),
                      (o.utils = {
                        hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
                      }),
                      (o.backendConnector = new $(
                        r(this.modules.backend),
                        o.resourceStore,
                        o,
                        this.options,
                      )),
                      o.backendConnector.on('*', function (t) {
                        for (
                          var n = arguments.length,
                            r = new Array(n > 1 ? n - 1 : 0),
                            i = 1;
                          i < n;
                          i++
                        )
                          r[i - 1] = arguments[i];
                        e.emit.apply(e, [t].concat(r));
                      }),
                      this.modules.languageDetector &&
                        ((o.languageDetector = r(
                          this.modules.languageDetector,
                        )),
                        o.languageDetector.init(
                          o,
                          this.options.detection,
                          this.options,
                        )),
                      this.modules.i18nFormat &&
                        ((o.i18nFormat = r(this.modules.i18nFormat)),
                        o.i18nFormat.init && o.i18nFormat.init(this)),
                      (this.translator = new I(this.services, this.options)),
                      this.translator.on('*', function (t) {
                        for (
                          var n = arguments.length,
                            r = new Array(n > 1 ? n - 1 : 0),
                            i = 1;
                          i < n;
                          i++
                        )
                          r[i - 1] = arguments[i];
                        e.emit.apply(e, [t].concat(r));
                      }),
                      this.modules.external.forEach(function (t) {
                        t.init && t.init(e);
                      });
                  }
                  this.modules.languageDetector ||
                    this.options.lng ||
                    this.logger.warn(
                      'init: no languageDetector is used and no lng is defined',
                    );
                  var s = [
                    'getResource',
                    'addResource',
                    'addResources',
                    'addResourceBundle',
                    'removeResourceBundle',
                    'hasResourceBundle',
                    'getResourceBundle',
                    'getDataByLanguage',
                  ];
                  s.forEach(function (t) {
                    e[t] = function () {
                      var n;
                      return (n = e.store)[t].apply(n, arguments);
                    };
                  });
                  var a = k(),
                    u = function () {
                      e.changeLanguage(e.options.lng, function (t, r) {
                        (e.isInitialized = !0),
                          e.logger.log('initialized', e.options),
                          e.emit('initialized', e.options),
                          a.resolve(r),
                          n(t, r);
                      });
                    };
                  return (
                    this.options.resources || !this.options.initImmediate
                      ? u()
                      : setTimeout(u, 0),
                    a
                  );
                },
              },
              {
                key: 'loadResources',
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : K,
                    r = n,
                    i = 'string' == typeof e ? e : this.language;
                  if (
                    ('function' == typeof e && (r = e),
                    !this.options.resources ||
                      this.options.partialBundledLanguages)
                  ) {
                    if (i && 'cimode' === i.toLowerCase()) return r();
                    var o = [],
                      s = function (e) {
                        e &&
                          t.services.languageUtils
                            .toResolveHierarchy(e)
                            .forEach(function (e) {
                              o.indexOf(e) < 0 && o.push(e);
                            });
                      };
                    if (i) s(i);
                    else {
                      var a = this.services.languageUtils.getFallbackCodes(
                        this.options.fallbackLng,
                      );
                      a.forEach(function (e) {
                        return s(e);
                      });
                    }
                    this.options.preload &&
                      this.options.preload.forEach(function (e) {
                        return s(e);
                      }),
                      this.services.backendConnector.load(
                        o,
                        this.options.ns,
                        r,
                      );
                  } else r(null);
                },
              },
              {
                key: 'reloadResources',
                value: function (e, t, n) {
                  var r = k();
                  return (
                    e || (e = this.languages),
                    t || (t = this.options.ns),
                    n || (n = K),
                    this.services.backendConnector.reload(e, t, function (e) {
                      r.resolve(), n(e);
                    }),
                    r
                  );
                },
              },
              {
                key: 'use',
                value: function (e) {
                  if (!e)
                    throw new Error(
                      'You are passing an undefined module! Please check the object you are passing to i18next.use()',
                    );
                  if (!e.type)
                    throw new Error(
                      'You are passing a wrong module! Please check the object you are passing to i18next.use()',
                    );
                  return (
                    'backend' === e.type && (this.modules.backend = e),
                    ('logger' === e.type || (e.log && e.warn && e.error)) &&
                      (this.modules.logger = e),
                    'languageDetector' === e.type &&
                      (this.modules.languageDetector = e),
                    'i18nFormat' === e.type && (this.modules.i18nFormat = e),
                    'postProcessor' === e.type && R.addPostProcessor(e),
                    '3rdParty' === e.type && this.modules.external.push(e),
                    this
                  );
                },
              },
              {
                key: 'changeLanguage',
                value: function (e, t) {
                  var n = this;
                  this.isLanguageChangingTo = e;
                  var r = k();
                  this.emit('languageChanging', e);
                  var i = function (e) {
                    var i =
                      'string' == typeof e
                        ? e
                        : n.services.languageUtils.getBestMatchFromCodes(e);
                    i &&
                      (n.language ||
                        ((n.language = i),
                        (n.languages = n.services.languageUtils.toResolveHierarchy(
                          i,
                        ))),
                      n.translator.language || n.translator.changeLanguage(i),
                      n.services.languageDetector &&
                        n.services.languageDetector.cacheUserLanguage(i)),
                      n.loadResources(i, function (e) {
                        !(function (e, i) {
                          i
                            ? ((n.language = i),
                              (n.languages = n.services.languageUtils.toResolveHierarchy(
                                i,
                              )),
                              n.translator.changeLanguage(i),
                              (n.isLanguageChangingTo = void 0),
                              n.emit('languageChanged', i),
                              n.logger.log('languageChanged', i))
                            : (n.isLanguageChangingTo = void 0),
                            r.resolve(function () {
                              return n.t.apply(n, arguments);
                            }),
                            t &&
                              t(e, function () {
                                return n.t.apply(n, arguments);
                              });
                        })(e, i);
                      });
                  };
                  return (
                    e ||
                    !this.services.languageDetector ||
                    this.services.languageDetector.async
                      ? !e &&
                        this.services.languageDetector &&
                        this.services.languageDetector.async
                        ? this.services.languageDetector.detect(i)
                        : i(e)
                      : i(this.services.languageDetector.detect()),
                    r
                  );
                },
              },
              {
                key: 'getFixedT',
                value: function (e, t) {
                  var n = this,
                    r = function e(t, r) {
                      var i;
                      if ('object' !== a(r)) {
                        for (
                          var o = arguments.length,
                            s = new Array(o > 2 ? o - 2 : 0),
                            u = 2;
                          u < o;
                          u++
                        )
                          s[u - 2] = arguments[u];
                        i = n.options.overloadTranslationOptionHandler(
                          [t, r].concat(s),
                        );
                      } else i = l({}, r);
                      return (
                        (i.lng = i.lng || e.lng),
                        (i.lngs = i.lngs || e.lngs),
                        (i.ns = i.ns || e.ns),
                        n.t(t, i)
                      );
                    };
                  return (
                    'string' == typeof e ? (r.lng = e) : (r.lngs = e),
                    (r.ns = t),
                    r
                  );
                },
              },
              {
                key: 't',
                value: function () {
                  var e;
                  return (
                    this.translator &&
                    (e = this.translator).translate.apply(e, arguments)
                  );
                },
              },
              {
                key: 'exists',
                value: function () {
                  var e;
                  return (
                    this.translator &&
                    (e = this.translator).exists.apply(e, arguments)
                  );
                },
              },
              {
                key: 'setDefaultNamespace',
                value: function (e) {
                  this.options.defaultNS = e;
                },
              },
              {
                key: 'hasLoadedNamespace',
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  if (!this.isInitialized)
                    return (
                      this.logger.warn(
                        'hasLoadedNamespace: i18next was not initialized',
                        this.languages,
                      ),
                      !1
                    );
                  if (!this.languages || !this.languages.length)
                    return (
                      this.logger.warn(
                        'hasLoadedNamespace: i18n.languages were undefined or empty',
                        this.languages,
                      ),
                      !1
                    );
                  var r = this.languages[0],
                    i = !!this.options && this.options.fallbackLng,
                    o = this.languages[this.languages.length - 1];
                  if ('cimode' === r.toLowerCase()) return !0;
                  var s = function (e, n) {
                    var r =
                      t.services.backendConnector.state[
                        ''.concat(e, '|').concat(n)
                      ];
                    return -1 === r || 2 === r;
                  };
                  if (n.precheck) {
                    var a = n.precheck(this, s);
                    if (void 0 !== a) return a;
                  }
                  return (
                    !!this.hasResourceBundle(r, e) ||
                    !this.services.backendConnector.backend ||
                    !(!s(r, e) || (i && !s(o, e)))
                  );
                },
              },
              {
                key: 'loadNamespaces',
                value: function (e, t) {
                  var n = this,
                    r = k();
                  return this.options.ns
                    ? ('string' == typeof e && (e = [e]),
                      e.forEach(function (e) {
                        n.options.ns.indexOf(e) < 0 && n.options.ns.push(e);
                      }),
                      this.loadResources(function (e) {
                        r.resolve(), t && t(e);
                      }),
                      r)
                    : (t && t(), Promise.resolve());
                },
              },
              {
                key: 'loadLanguages',
                value: function (e, t) {
                  var n = k();
                  'string' == typeof e && (e = [e]);
                  var r = this.options.preload || [],
                    i = e.filter(function (e) {
                      return r.indexOf(e) < 0;
                    });
                  return i.length
                    ? ((this.options.preload = r.concat(i)),
                      this.loadResources(function (e) {
                        n.resolve(), t && t(e);
                      }),
                      n)
                    : (t && t(), Promise.resolve());
                },
              },
              {
                key: 'dir',
                value: function (e) {
                  if (
                    (e ||
                      (e =
                        this.languages && this.languages.length > 0
                          ? this.languages[0]
                          : this.language),
                    !e)
                  )
                    return 'rtl';
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
                    'ug',
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
                  ].indexOf(
                    this.services.languageUtils.getLanguagePartFromCode(e),
                  ) >= 0
                    ? 'rtl'
                    : 'ltr';
                },
              },
              {
                key: 'createInstance',
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    n = arguments.length > 1 ? arguments[1] : void 0;
                  return new t(e, n);
                },
              },
              {
                key: 'cloneInstance',
                value: function () {
                  var e = this,
                    n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : K,
                    i = l({}, this.options, n, { isClone: !0 }),
                    o = new t(i),
                    s = ['store', 'services', 'language'];
                  return (
                    s.forEach(function (t) {
                      o[t] = e[t];
                    }),
                    (o.services = l({}, this.services)),
                    (o.services.utils = {
                      hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
                    }),
                    (o.translator = new I(o.services, o.options)),
                    o.translator.on('*', function (e) {
                      for (
                        var t = arguments.length,
                          n = new Array(t > 1 ? t - 1 : 0),
                          r = 1;
                        r < t;
                        r++
                      )
                        n[r - 1] = arguments[r];
                      o.emit.apply(o, [e].concat(n));
                    }),
                    o.init(i, r),
                    (o.translator.options = o.options),
                    (o.translator.backendConnector.services.utils = {
                      hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
                    }),
                    o
                  );
                },
              },
            ]),
            t
          );
        })(x))(),
        G = {
          ar_AE: 'ar',
          br: 'pt',
          de_DE: 'de',
          he_IL: 'he',
          id_ID: 'id',
          in: 'en',
          kr: 'ko',
          ms_MY: 'ms',
          sv_SE: 'sv',
          th_TH: 'th',
          uk: 'en',
          vi_VN: 'vi',
          zh_CN: 'zh-Hans',
          zh_TW: 'zh-Hant',
          zh: 'zh-Hans',
        };
      n.d(t, 't', function () {
        return oe;
      });
      var Z = s,
        ee = window;
      if (!ee.__tradingviewI18nextInited) {
        var te = window.language || null,
          ne = se(te);
        (te && ne) ||
          (console.error('No translation data'), (te = 'en'), (ne = se('en')));
        var re = (function (e) {
          return G[e] || e;
        })(te);
        if (te && ne) {
          var ie = {
            interpolation: { escapeValue: !1, prefix: '__', suffix: '__' },
            keySeparator: ':::',
            lng: re,
            nsSeparator: ':::',
            resources: ((Y = {}), (Y[re] = { translation: ne }), Y),
          };
          J.init(ie), i((Z = J.t.bind(J))), o(Z);
        }
        ee.__tradingviewI18nextInited = !0;
      }
      function oe(e, t) {
        return Z(e, t);
      }
      function se(e) {
        return (e && ee._tv_languages && ee._tv_languages[e]) || null;
      }
    },
    'YN/q': function (e, t, n) {
      var r = n('zY5Q');
      e.exports = function (e, t) {
        if (!r(e)) return e;
        var n, i;
        if (t && 'function' == typeof (n = e.toString) && !r((i = n.call(e))))
          return i;
        if ('function' == typeof (n = e.valueOf) && !r((i = n.call(e))))
          return i;
        if (!t && 'function' == typeof (n = e.toString) && !r((i = n.call(e))))
          return i;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    YhSK: function (e, t, n) {
      var r = Date.prototype,
        i = r.toString,
        o = r.getTime;
      new Date(NaN) + '' != 'Invalid Date' &&
        n('AZRH')(r, 'toString', function () {
          var e = o.call(this);
          return e == e ? i.call(this) : 'Invalid Date';
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
        i = n('WnSb')(!0);
      r(r.P, 'Array', {
        includes: function (e) {
          return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }),
        n('OlM/')('includes');
    },
    aQPA: function (e, t, n) {
      var r = n('KGgr'),
        i = n('caxj').set,
        o = r.MutationObserver || r.WebKitMutationObserver,
        s = r.process,
        a = r.Promise,
        u = 'process' == n('qKVQ')(s);
      e.exports = function () {
        var e,
          t,
          n,
          l = function () {
            var r, i;
            for (u && (r = s.domain) && r.exit(); e; ) {
              (i = e.fn), (e = e.next);
              try {
                i();
              } catch (o) {
                throw (e ? n() : (t = void 0), o);
              }
            }
            (t = void 0), r && r.enter();
          };
        if (u)
          n = function () {
            s.nextTick(l);
          };
        else if (!o || (r.navigator && r.navigator.standalone))
          if (a && a.resolve) {
            var c = a.resolve(void 0);
            n = function () {
              c.then(l);
            };
          } else
            n = function () {
              i.call(r, l);
            };
        else {
          var f = !0,
            d = document.createTextNode('');
          new o(l).observe(d, { characterData: !0 }),
            (n = function () {
              d.data = f = !f;
            });
        }
        return function (r) {
          var i = { fn: r, next: void 0 };
          t && (t.next = i), e || ((e = i), n()), (t = i);
        };
      };
    },
    bI2D: function (e, t, n) {
      'use strict';
      var r = n('vVR7'),
        i = n('lrbo'),
        o = n('bjrj'),
        s = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
      r(r.P + r.F * s, 'String', {
        padStart: function (e) {
          return i(this, e, arguments.length > 1 ? arguments[1] : void 0, !0);
        },
      });
    },
    bSmq: function (e, t, n) {
      var r = n('/B3w'),
        i = Math.min;
      e.exports = function (e) {
        return e > 0 ? i(r(e), 9007199254740991) : 0;
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
            i = 'FormData' in e,
            o = 'ArrayBuffer' in e;
          if (o)
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
          var l = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
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
          var c = [301, 302, 303, 307, 308];
          (x.redirect = function (e, t) {
            if (-1 === c.indexOf(t))
              throw new RangeError('Invalid status code');
            return new x(null, { status: t, headers: { location: e } });
          }),
            (e.Headers = h),
            (e.Request = _),
            (e.Response = x),
            (e.fetch = function (e, t) {
              return new Promise(function (n, i) {
                var o = new _(e, t),
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
                            var i = n.join(':').trim();
                            t.append(r, i);
                          }
                        }),
                        t),
                    };
                  r.url =
                    'responseURL' in s
                      ? s.responseURL
                      : r.headers.get('X-Request-URL');
                  var i = 'response' in s ? s.response : s.responseText;
                  n(new x(i, r));
                }),
                  (s.onerror = function () {
                    i(new TypeError('Network request failed'));
                  }),
                  (s.ontimeout = function () {
                    i(new TypeError('Network request failed'));
                  }),
                  s.open(o.method, o.url, !0),
                  'include' === o.credentials && (s.withCredentials = !0),
                  'responseType' in s && r && (s.responseType = 'blob'),
                  o.headers.forEach(function (e, t) {
                    s.setRequestHeader(t, e);
                  }),
                  s.send(void 0 === o._bodyInit ? null : o._bodyInit);
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
                else if (i && FormData.prototype.isPrototypeOf(e))
                  this._bodyFormData = e;
                else if (t && URLSearchParams.prototype.isPrototypeOf(e))
                  this._bodyText = e.toString();
                else if (o && r && a(e))
                  (this._bodyArrayBuffer = y(e.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer]));
                else {
                  if (!o || (!ArrayBuffer.prototype.isPrototypeOf(e) && !u(e)))
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
            i &&
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
            i = (t = t || {}).body;
          if ('string' == typeof e) this.url = e;
          else {
            if (e.bodyUsed) throw new TypeError('Already read');
            (this.url = e.url),
              (this.credentials = e.credentials),
              t.headers || (this.headers = new h(e.headers)),
              (this.method = e.method),
              (this.mode = e.mode),
              i ||
                null == e._bodyInit ||
                ((i = e._bodyInit), (e.bodyUsed = !0));
          }
          if (
            ((this.credentials = t.credentials || this.credentials || 'omit'),
            (!t.headers && this.headers) || (this.headers = new h(t.headers)),
            (this.method =
              ((n = t.method || this.method || 'GET'),
              (r = n.toUpperCase()),
              l.indexOf(r) > -1 ? r : n)),
            (this.mode = t.mode || this.mode || null),
            (this.referrer = null),
            ('GET' === this.method || 'HEAD' === this.method) && i)
          )
            throw new TypeError('Body not allowed for GET or HEAD requests');
          this._initBody(i);
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
                    i = n.join('=').replace(/\+/g, ' ');
                  t.append(decodeURIComponent(r), decodeURIComponent(i));
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
    bjrj: function (e, t, n) {
      var r = n('KGgr').navigator;
      e.exports = (r && r.userAgent) || '';
    },
    bq52: function (e, t, n) {
      'use strict';
      var r = n('vVR7'),
        i = n('bSmq'),
        o = n('p0R9'),
        s = ''.endsWith;
      r(r.P + r.F * n('5zJJ')('endsWith'), 'String', {
        endsWith: function (e) {
          var t = o(this, e, 'endsWith'),
            n = arguments.length > 1 ? arguments[1] : void 0,
            r = i(t.length),
            a = void 0 === n ? r : Math.min(i(n), r),
            u = String(e);
          return s ? s.call(t, u, a) : t.slice(a - u.length, a) === u;
        },
      });
    },
    c2y1: function (e, t, n) {
      var r = n('zY5Q'),
        i = n('9TFj'),
        o = function (e, t) {
          if ((i(e), !r(t) && null !== t))
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
                } catch (i) {
                  t = !0;
                }
                return function (e, n) {
                  return o(e, n), t ? (e.__proto__ = n) : r(e, n), e;
                };
              })({}, !1)
            : void 0),
        check: o,
      };
    },
    cDf5: function (e, t) {
      function n(t) {
        return (
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? ((e.exports = n = function (e) {
                return typeof e;
              }),
              (e.exports.default = e.exports),
              (e.exports.__esModule = !0))
            : ((e.exports = n = function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              }),
              (e.exports.default = e.exports),
              (e.exports.__esModule = !0)),
          n(t)
        );
      }
      (e.exports = n),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    caxj: function (e, t, n) {
      var r,
        i,
        o,
        s = n('hvJ5'),
        a = n('7+od'),
        u = n('OpLF'),
        l = n('9S7S'),
        c = n('KGgr'),
        f = c.process,
        d = c.setImmediate,
        p = c.clearImmediate,
        h = c.MessageChannel,
        g = c.Dispatch,
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
          ? ((o = (i = new h()).port2),
            (i.port1.onmessage = b),
            (r = s(o.postMessage, o, 1)))
          : c.addEventListener &&
            'function' == typeof postMessage &&
            !c.importScripts
          ? ((r = function (e) {
              c.postMessage(e + '', '*');
            }),
            c.addEventListener('message', b, !1))
          : (r =
              'onreadystatechange' in l('script')
                ? function (e) {
                    u.appendChild(
                      l('script'),
                    ).onreadystatechange = function () {
                      u.removeChild(this), y.call(e);
                    };
                  }
                : function (e) {
                    setTimeout(s(y, e, 1), 0);
                  })),
        (e.exports = { set: d, clear: p });
    },
    e08H: function (e, t, n) {
      var r = n('zY5Q'),
        i = n('c2y1').set;
      e.exports = function (e, t, n) {
        var o,
          s = t.constructor;
        return (
          s !== n &&
            'function' == typeof s &&
            (o = s.prototype) !== n.prototype &&
            r(o) &&
            i &&
            i(e, o),
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
    'eqD+': function (e, t, n) {
      'use strict';
      var r, i, o, s;
      (r = jQuery),
        (i = r(window)),
        (o = r(document)),
        (s = function (e) {
          var t = jQuery.data(e.target);
          t.localScroll
            ? e.target.scrollTop >
                e.target.scrollHeight -
                  r(e.target).height() -
                  (t.tolerance || 190) && r(this).trigger('scrolltoend')
            : i.scrollTop() >
                o.height() - i.innerHeight() - (t.tolerance || 190) &&
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
            e.scrollData || (e.scrollData = { scrollTop: i.scrollTop() });
            var n = null;
            if ('number' == typeof e.data.to)
              n = e.scrollData.scrollTop > e.data.to - (e.data.tolerance || 0);
            else {
              if ('bottom' !== e.data.to)
                throw new Error(
                  'Special event scrollto: property "to" has unexpected value',
                );
              e.scrollData.bottomOffset ||
                (e.scrollData.bottomOffset = o.height() - i.innerHeight()),
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
    esfA: function (e, t, n) {
      var r = n('vVR7'),
        i = n('T0pI');
      r(r.S + r.F * (Number.parseInt != i), 'Number', { parseInt: i });
    },
    f2KN: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var r = { allowDownsampling: !0 };
      function i(e, t) {
        return void 0 === t && (t = r), new o(e, t);
      }
      var o = (function () {
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
        i = n('IXQl')('iterator'),
        o = n('V3uq');
      e.exports = n('5wX8').getIteratorMethod = function (e) {
        if (null != e) return e[i] || e['@@iterator'] || o[r(e)];
      };
    },
    fPeS: function (e, t, n) {
      var r, i;
      void 0 ===
        (i =
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
            : r) || (e.exports = i);
    },
    fkSf: function (e, t, n) {
      var r = n('KGgr'),
        i = n('5wX8'),
        o = n('SwRI'),
        s = n('eKEP'),
        a = n('gPPl').f;
      e.exports = function (e) {
        var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
        '_' == e.charAt(0) || e in t || a(t, e, { value: s.f(e) });
      };
    },
    fnBu: function (e, t, n) {
      var r = n('zY5Q'),
        i = n('B1QU'),
        o = n('IXQl')('species');
      e.exports = function (e) {
        var t;
        return (
          i(e) &&
            ('function' != typeof (t = e.constructor) ||
              (t !== Array && !i(t.prototype)) ||
              (t = void 0),
            r(t) && null === (t = t[o]) && (t = void 0)),
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
        i = n('bSmq'),
        o = n('p0R9'),
        s = ''.startsWith;
      r(r.P + r.F * n('5zJJ')('startsWith'), 'String', {
        startsWith: function (e) {
          var t = o(this, e, 'startsWith'),
            n = i(
              Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length),
            ),
            r = String(e);
          return s ? s.call(t, r, n) : t.slice(n, n + r.length) === r;
        },
      });
    },
    gPPl: function (e, t, n) {
      var r = n('9TFj'),
        i = n('O6f/'),
        o = n('YN/q'),
        s = Object.defineProperty;
      t.f = n('nULH')
        ? Object.defineProperty
        : function (e, t, n) {
            if ((r(e), (t = o(t, !0)), r(n), i))
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
        i = n('W+In').trim;
      e.exports =
        1 / r(n('YqzG') + '-0') != -1 / 0
          ? function (e) {
              var t = i(String(e), 3),
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
            return function (n, r, i) {
              return e.call(t, n, r, i);
            };
        }
        return function () {
          return e.apply(t, arguments);
        };
      };
    },
    iA8Q: function (e, t, n) {
      'use strict';
      var r, i, o;
      (r = jQuery),
        void 0 !== document.hidden
          ? ((i = 'hidden'), (o = 'visibilitychange'))
          : void 0 !== document.mozHidden
          ? ((i = 'mozHidden'), (o = 'mozvisibilitychange'))
          : void 0 !== document.msHidden
          ? ((i = 'msHidden'), (o = 'msvisibilitychange'))
          : void 0 !== document.webkitHidden &&
            ((i = 'webkitHidden'), (o = 'webkitvisibilitychange')),
        (r.tabvisible = !0),
        o &&
          (r(document).on(o, function (e) {
            (r.tabvisible = !document[i]),
              r(window).trigger('visibilitychange', !document[i]);
          }),
          r(document).trigger(o)),
        (r.whenTabVisible = function (e) {
          !o || r.tabvisible ? e() : r(window).one('visibilitychange', e);
        });
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
      var r, i, o;
      (i = [n('P5fv'), n('NHgk'), n('Qwlt'), n('MIQu')]),
        void 0 ===
          (o =
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
                        i = 1 === n.which,
                        o =
                          !(
                            'string' != typeof this.options.cancel ||
                            !n.target.nodeName
                          ) && e(n.target).closest(this.options.cancel).length;
                      return !(
                        i &&
                        !o &&
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
              ? r.apply(t, i)
              : r) || (e.exports = o);
    },
    iP0q: function (e, t, n) {
      var r = n('/B3w'),
        i = n('H46L');
      e.exports = function (e) {
        return function (t, n) {
          var o,
            s,
            a = String(i(t)),
            u = r(n),
            l = a.length;
          return u < 0 || u >= l
            ? e
              ? ''
              : void 0
            : (o = a.charCodeAt(u)) < 55296 ||
              o > 56319 ||
              u + 1 === l ||
              (s = a.charCodeAt(u + 1)) < 56320 ||
              s > 57343
            ? e
              ? a.charAt(u)
              : o
            : e
            ? a.slice(u, u + 2)
            : s - 56320 + ((o - 55296) << 10) + 65536;
        };
      };
    },
    isQe: function (e, t) {
      var n = {}.hasOwnProperty;
      e.exports = function (e, t) {
        return n.call(e, t);
      };
    },
    jjqu: function (e, t, n) {
      'use strict';
      var r, i, o, s, a, u;
      window.parent !== window &&
        window.CanvasRenderingContext2D &&
        window.TextMetrics &&
        (i = window.CanvasRenderingContext2D.prototype) &&
        i.hasOwnProperty('font') &&
        i.hasOwnProperty('mozTextStyle') &&
        'function' == typeof i.__lookupSetter__ &&
        (o = i.__lookupSetter__('font')) &&
        (i.__defineSetter__('font', function (e) {
          try {
            return o.call(this, e);
          } catch (t) {
            if ('NS_ERROR_FAILURE' !== t.name) throw t;
          }
        }),
        (s = i.measureText),
        (r = function () {
          (this.width = 0),
            (this.isFake = !0),
            (this.__proto__ = window.TextMetrics.prototype);
        }),
        (i.measureText = function (e) {
          try {
            return s.apply(this, arguments);
          } catch (t) {
            if ('NS_ERROR_FAILURE' !== t.name) throw t;
            return new r();
          }
        }),
        (a = i.fillText),
        (i.fillText = function (e, t, n, r) {
          try {
            a.apply(this, arguments);
          } catch (i) {
            if ('NS_ERROR_FAILURE' !== i.name) throw i;
          }
        }),
        (u = i.strokeText),
        (i.strokeText = function (e, t, n, r) {
          try {
            u.apply(this, arguments);
          } catch (i) {
            if ('NS_ERROR_FAILURE' !== i.name) throw i;
          }
        }));
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
        i = n('lrbo'),
        o = n('bjrj'),
        s = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
      r(r.P + r.F * s, 'String', {
        padEnd: function (e) {
          return i(this, e, arguments.length > 1 ? arguments[1] : void 0, !1);
        },
      });
    },
    khJW: function (e, t, n) {
      var r = n('gPPl'),
        i = n('yUtn');
      e.exports = n('nULH')
        ? function (e, t, n) {
            return r.f(e, t, i(1, n));
          }
        : function (e, t, n) {
            return (e[t] = n), e;
          };
    },
    ktZe: function (e, t, n) {
      'use strict';
      var r = n('/B3w'),
        i = n('H46L');
      e.exports = function (e) {
        var t = String(i(this)),
          n = '',
          o = r(e);
        if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
        for (; o > 0; (o >>>= 1) && (t += t)) 1 & o && (n += t);
        return n;
      };
    },
    lHEB: function (e, t, n) {
      var r = n('V3uq'),
        i = n('IXQl')('iterator'),
        o = Array.prototype;
      e.exports = function (e) {
        return void 0 !== e && (r.Array === e || o[i] === e);
      };
    },
    lrbo: function (e, t, n) {
      var r = n('bSmq'),
        i = n('ktZe'),
        o = n('H46L');
      e.exports = function (e, t, n, s) {
        var a = String(o(e)),
          u = a.length,
          l = void 0 === n ? ' ' : String(n),
          c = r(t);
        if (c <= u || '' == l) return a;
        var f = c - u,
          d = i.call(l, Math.ceil(f / l.length));
        return d.length > f && (d = d.slice(0, f)), s ? d + a : a + d;
      };
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
      n.d(t, 'c', function () {
        return i;
      }),
        n.d(t, 'a', function () {
          return o;
        }),
        n.d(t, 'e', function () {
          return s;
        }),
        n.d(t, 'b', function () {
          return a;
        }),
        n.d(t, 'd', function () {
          return u;
        }),
        n.d(t, 'f', function () {
          return l;
        });
      var r = function (e, t) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(e, t);
      };
      function i(e, t) {
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var o = function () {
        return (o =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
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
          var i = 0;
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        }
        return n;
      }
      function a(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function s(e) {
            try {
              u(r.next(e));
            } catch (t) {
              o(t);
            }
          }
          function a(e) {
            try {
              u(r.throw(e));
            } catch (t) {
              o(t);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
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
      function u(e, t) {
        var n,
          r,
          i,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          'function' == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(o) {
          return function (a) {
            return (function (o) {
              if (n) throw new TypeError('Generator is already executing.');
              for (; s; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return s.label++, { value: o[1], done: !1 };
                    case 5:
                      s.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !((i = s.trys),
                        (i = i.length > 0 && i[i.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < i[1]) {
                        (s.label = i[1]), (i = o);
                        break;
                      }
                      if (i && s.label < i[2]) {
                        (s.label = i[2]), s.ops.push(o);
                        break;
                      }
                      i[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  o = t.call(e, s);
                } catch (a) {
                  (o = [6, a]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, a]);
          };
        }
      }
      Object.create;
      function l() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        var r = Array(e),
          i = 0;
        for (t = 0; t < n; t++)
          for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++)
            r[i] = o[s];
        return r;
      }
      Object.create;
    },
    mz5e: function (e, t, n) {
      'use strict';
      var r = n('vVR7'),
        i = n('p0R9');
      r(r.P + r.F * n('5zJJ')('includes'), 'String', {
        includes: function (e) {
          return !!~i(this, e, 'includes').indexOf(
            e,
            arguments.length > 1 ? arguments[1] : void 0,
          );
        },
      });
    },
    n0SC: function (e, t, n) {
      var r = n('vVR7'),
        i = n('yFUn')(!1);
      r(r.S, 'Object', {
        values: function (e) {
          return i(e);
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
    nc0P: function (e, t, n) {
      var r;
      !(function (i) {
        'use strict';
        var o,
          s = '[big.js] ',
          a = s + 'Invalid ',
          u = a + 'decimal places',
          l = {},
          c = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
        function f(e, t, n, r) {
          var i = e.c,
            o = e.e + t + 1;
          if (o < i.length) {
            if (1 === n) r = i[o] >= 5;
            else if (2 === n)
              r =
                i[o] > 5 ||
                (5 == i[o] &&
                  (r || o < 0 || void 0 !== i[o + 1] || 1 & i[o - 1]));
            else if (3 === n) r = r || !!i[0];
            else if (((r = !1), 0 !== n))
              throw Error('[big.js] Invalid rounding mode');
            if (o < 1)
              (i.length = 1), r ? ((e.e = -t), (i[0] = 1)) : (i[0] = e.e = 0);
            else {
              if (((i.length = o--), r))
                for (; ++i[o] > 9; ) (i[o] = 0), o-- || (++e.e, i.unshift(1));
              for (o = i.length; !i[--o]; ) i.pop();
            }
          } else if (n < 0 || n > 3 || n !== ~~n)
            throw Error('[big.js] Invalid rounding mode');
          return e;
        }
        function d(e, t, n, r) {
          var i,
            o,
            s = e.constructor,
            l = !e.c[0];
          if (void 0 !== n) {
            if (n !== ~~n || n < (3 == t) || n > 1e6)
              throw Error(3 == t ? a + 'precision' : u);
            for (
              n = r - (e = new s(e)).e,
                e.c.length > ++r && f(e, n, s.RM),
                2 == t && (r = e.e + n + 1);
              e.c.length < r;

            )
              e.c.push(0);
          }
          if (
            ((i = e.e),
            (n = (o = e.c.join('')).length),
            2 != t && (1 == t || (3 == t && r <= i) || i <= s.NE || i >= s.PE))
          )
            o =
              o.charAt(0) +
              (n > 1 ? '.' + o.slice(1) : '') +
              (i < 0 ? 'e' : 'e+') +
              i;
          else if (i < 0) {
            for (; ++i; ) o = '0' + o;
            o = '0.' + o;
          } else if (i > 0)
            if (++i > n) for (i -= n; i--; ) o += '0';
            else i < n && (o = o.slice(0, i) + '.' + o.slice(i));
          else n > 1 && (o = o.charAt(0) + '.' + o.slice(1));
          return e.s < 0 && (!l || 4 == t) ? '-' + o : o;
        }
        (l.abs = function () {
          var e = new this.constructor(this);
          return (e.s = 1), e;
        }),
          (l.cmp = function (e) {
            var t,
              n = this,
              r = n.c,
              i = (e = new n.constructor(e)).c,
              o = n.s,
              s = e.s,
              a = n.e,
              u = e.e;
            if (!r[0] || !i[0]) return r[0] ? o : i[0] ? -s : 0;
            if (o != s) return o;
            if (((t = o < 0), a != u)) return (a > u) ^ t ? 1 : -1;
            for (s = (a = r.length) < (u = i.length) ? a : u, o = -1; ++o < s; )
              if (r[o] != i[o]) return (r[o] > i[o]) ^ t ? 1 : -1;
            return a == u ? 0 : (a > u) ^ t ? 1 : -1;
          }),
          (l.div = function (e) {
            var t = this,
              n = t.constructor,
              r = t.c,
              i = (e = new n(e)).c,
              o = t.s == e.s ? 1 : -1,
              s = n.DP;
            if (s !== ~~s || s < 0 || s > 1e6) throw Error(u);
            if (!i[0]) throw Error('[big.js] Division by zero');
            if (!r[0]) return new n(0 * o);
            var a,
              l,
              c,
              d,
              p,
              h = i.slice(),
              g = (a = i.length),
              v = r.length,
              m = r.slice(0, a),
              y = m.length,
              b = e,
              _ = (b.c = []),
              w = 0,
              x = s + (b.e = t.e - e.e) + 1;
            for (b.s = o, o = x < 0 ? 0 : x, h.unshift(0); y++ < a; ) m.push(0);
            do {
              for (c = 0; c < 10; c++) {
                if (a != (y = m.length)) d = a > y ? 1 : -1;
                else
                  for (p = -1, d = 0; ++p < a; )
                    if (i[p] != m[p]) {
                      d = i[p] > m[p] ? 1 : -1;
                      break;
                    }
                if (!(d < 0)) break;
                for (l = y == a ? i : h; y; ) {
                  if (m[--y] < l[y]) {
                    for (p = y; p && !m[--p]; ) m[p] = 9;
                    --m[p], (m[y] += 10);
                  }
                  m[y] -= l[y];
                }
                for (; !m[0]; ) m.shift();
              }
              (_[w++] = d ? c : ++c),
                m[0] && d ? (m[y] = r[g] || 0) : (m = [r[g]]);
            } while ((g++ < v || void 0 !== m[0]) && o--);
            return (
              _[0] || 1 == w || (_.shift(), b.e--),
              w > x && f(b, s, n.RM, void 0 !== m[0]),
              b
            );
          }),
          (l.eq = function (e) {
            return !this.cmp(e);
          }),
          (l.gt = function (e) {
            return this.cmp(e) > 0;
          }),
          (l.gte = function (e) {
            return this.cmp(e) > -1;
          }),
          (l.lt = function (e) {
            return this.cmp(e) < 0;
          }),
          (l.lte = function (e) {
            return this.cmp(e) < 1;
          }),
          (l.minus = l.sub = function (e) {
            var t,
              n,
              r,
              i,
              o = this,
              s = o.constructor,
              a = o.s,
              u = (e = new s(e)).s;
            if (a != u) return (e.s = -u), o.plus(e);
            var l = o.c.slice(),
              c = o.e,
              f = e.c,
              d = e.e;
            if (!l[0] || !f[0])
              return f[0] ? ((e.s = -u), e) : new s(l[0] ? o : 0);
            if ((a = c - d)) {
              for (
                (i = a < 0) ? ((a = -a), (r = l)) : ((d = c), (r = f)),
                  r.reverse(),
                  u = a;
                u--;

              )
                r.push(0);
              r.reverse();
            } else
              for (
                n = ((i = l.length < f.length) ? l : f).length, a = u = 0;
                u < n;
                u++
              )
                if (l[u] != f[u]) {
                  i = l[u] < f[u];
                  break;
                }
            if (
              (i && ((r = l), (l = f), (f = r), (e.s = -e.s)),
              (u = (n = f.length) - (t = l.length)) > 0)
            )
              for (; u--; ) l[t++] = 0;
            for (u = t; n > a; ) {
              if (l[--n] < f[n]) {
                for (t = n; t && !l[--t]; ) l[t] = 9;
                --l[t], (l[n] += 10);
              }
              l[n] -= f[n];
            }
            for (; 0 === l[--u]; ) l.pop();
            for (; 0 === l[0]; ) l.shift(), --d;
            return (
              l[0] || ((e.s = 1), (l = [(d = 0)])), (e.c = l), (e.e = d), e
            );
          }),
          (l.mod = function (e) {
            var t,
              n = this,
              r = n.constructor,
              i = n.s,
              o = (e = new r(e)).s;
            if (!e.c[0]) throw Error('[big.js] Division by zero');
            return (
              (n.s = e.s = 1),
              (t = 1 == e.cmp(n)),
              (n.s = i),
              (e.s = o),
              t
                ? new r(n)
                : ((i = r.DP),
                  (o = r.RM),
                  (r.DP = r.RM = 0),
                  (n = n.div(e)),
                  (r.DP = i),
                  (r.RM = o),
                  this.minus(n.times(e)))
            );
          }),
          (l.plus = l.add = function (e) {
            var t,
              n = this,
              r = n.constructor,
              i = n.s,
              o = (e = new r(e)).s;
            if (i != o) return (e.s = -o), n.minus(e);
            var s = n.e,
              a = n.c,
              u = e.e,
              l = e.c;
            if (!a[0] || !l[0]) return l[0] ? e : new r(a[0] ? n : 0 * i);
            if (((a = a.slice()), (i = s - u))) {
              for (
                i > 0 ? ((u = s), (t = l)) : ((i = -i), (t = a)), t.reverse();
                i--;

              )
                t.push(0);
              t.reverse();
            }
            for (
              a.length - l.length < 0 && ((t = l), (l = a), (a = t)),
                i = l.length,
                o = 0;
              i;
              a[i] %= 10
            )
              o = ((a[--i] = a[i] + l[i] + o) / 10) | 0;
            for (o && (a.unshift(o), ++u), i = a.length; 0 === a[--i]; )
              a.pop();
            return (e.c = a), (e.e = u), e;
          }),
          (l.pow = function (e) {
            var t = this,
              n = new t.constructor(1),
              r = n,
              i = e < 0;
            if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(a + 'exponent');
            for (i && (e = -e); 1 & e && (r = r.times(t)), (e >>= 1); )
              t = t.times(t);
            return i ? n.div(r) : r;
          }),
          (l.round = function (e, t) {
            var n = this.constructor;
            if (void 0 === e) e = 0;
            else if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(u);
            return f(new n(this), e, void 0 === t ? n.RM : t);
          }),
          (l.sqrt = function () {
            var e,
              t,
              n,
              r = this,
              i = r.constructor,
              o = r.s,
              a = r.e,
              u = new i(0.5);
            if (!r.c[0]) return new i(r);
            if (o < 0) throw Error(s + 'No square root');
            0 === (o = Math.sqrt(r + '')) || o === 1 / 0
              ? (((t = r.c.join('')).length + a) & 1 || (t += '0'),
                (a = (((a + 1) / 2) | 0) - (a < 0 || 1 & a)),
                (e = new i(
                  ((o = Math.sqrt(t)) == 1 / 0
                    ? '1e'
                    : (o = o.toExponential()).slice(0, o.indexOf('e') + 1)) + a,
                )))
              : (e = new i(o)),
              (a = e.e + (i.DP += 4));
            do {
              (n = e), (e = u.times(n.plus(r.div(n))));
            } while (n.c.slice(0, a).join('') !== e.c.slice(0, a).join(''));
            return f(e, (i.DP -= 4), i.RM);
          }),
          (l.times = l.mul = function (e) {
            var t,
              n = this,
              r = n.constructor,
              i = n.c,
              o = (e = new r(e)).c,
              s = i.length,
              a = o.length,
              u = n.e,
              l = e.e;
            if (((e.s = n.s == e.s ? 1 : -1), !i[0] || !o[0]))
              return new r(0 * e.s);
            for (
              e.e = u + l,
                s < a && ((t = i), (i = o), (o = t), (l = s), (s = a), (a = l)),
                t = new Array((l = s + a));
              l--;

            )
              t[l] = 0;
            for (u = a; u--; ) {
              for (a = 0, l = s + u; l > u; )
                (a = t[l] + o[u] * i[l - u - 1] + a),
                  (t[l--] = a % 10),
                  (a = (a / 10) | 0);
              t[l] = (t[l] + a) % 10;
            }
            for (a ? ++e.e : t.shift(), u = t.length; !t[--u]; ) t.pop();
            return (e.c = t), e;
          }),
          (l.toExponential = function (e) {
            return d(this, 1, e, e);
          }),
          (l.toFixed = function (e) {
            return d(this, 2, e, this.e + e);
          }),
          (l.toPrecision = function (e) {
            return d(this, 3, e, e - 1);
          }),
          (l.toString = function () {
            return d(this);
          }),
          (l.valueOf = l.toJSON = function () {
            return d(this, 4);
          }),
          ((o = (function e() {
            function t(n) {
              var r = this;
              if (!(r instanceof t)) return void 0 === n ? e() : new t(n);
              n instanceof t
                ? ((r.s = n.s), (r.e = n.e), (r.c = n.c.slice()))
                : (function (e, t) {
                    var n, r, i;
                    if (0 === t && 1 / t < 0) t = '-0';
                    else if (!c.test((t += ''))) throw Error(a + 'number');
                    (e.s = '-' == t.charAt(0) ? ((t = t.slice(1)), -1) : 1),
                      (n = t.indexOf('.')) > -1 && (t = t.replace('.', ''));
                    (r = t.search(/e/i)) > 0
                      ? (n < 0 && (n = r),
                        (n += +t.slice(r + 1)),
                        (t = t.substring(0, r)))
                      : n < 0 && (n = t.length);
                    for (i = t.length, r = 0; r < i && '0' == t.charAt(r); )
                      ++r;
                    if (r == i) e.c = [(e.e = 0)];
                    else {
                      for (; i > 0 && '0' == t.charAt(--i); );
                      for (e.e = n - r - 1, e.c = [], n = 0; r <= i; )
                        e.c[n++] = +t.charAt(r++);
                    }
                  })(r, n),
                (r.constructor = t);
            }
            return (
              (t.prototype = l),
              (t.DP = 20),
              (t.RM = 1),
              (t.NE = -7),
              (t.PE = 21),
              (t.version = '5.2.2'),
              t
            );
          })()).default = o.Big = o),
          void 0 ===
            (r = function () {
              return o;
            }.call(t, n, t, e)) || (e.exports = r);
      })();
    },
    nib0: function (e, t, n) {
      var r = n('zY5Q'),
        i = n('qKVQ'),
        o = n('IXQl')('match');
      e.exports = function (e) {
        var t;
        return r(e) && (void 0 !== (t = e[o]) ? !!t : 'RegExp' == i(e));
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
        i = !(
          'undefined' == typeof window ||
          !window.document ||
          !window.document.createElement
        );
      function o() {
        if (r) return r;
        if (!i || !window.document.body) return 'indeterminate';
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
        (t.detectScrollType = o),
        (t.getNormalizedScrollLeft = function (e, t) {
          var n = e.scrollLeft;
          if ('rtl' !== t) return n;
          var r = o();
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
            var r = o();
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
        function i(e) {
          return 'number' == typeof e && isFinite(e);
        }
        function o(e) {
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
            (window.isNumber = i),
            (window.isFunction = o),
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
            var n, r, i;
            for (r in ((n = 'function' == typeof e.pop ? [] : {}), e))
              e.hasOwnProperty(r) &&
                ((i = e[r]),
                (n[r] = i && 'object' == typeof i ? t.clone(i) : i));
            return n;
          }),
          (t.deepEquals = function (e, r, i) {
            if ((i || (i = ''), e === r)) return [!0, i];
            if (
              (o(e) && (e = void 0),
              o(r) && (r = void 0),
              void 0 === e && void 0 !== r)
            )
              return [!1, i];
            if (void 0 === r && void 0 !== e) return [!1, i];
            if (null === e && null !== r) return [!1, i];
            if (null === r && null !== e) return [!1, i];
            if ('object' != typeof e && 'object' != typeof r)
              return [e === r, i];
            if (Array.isArray(e) && Array.isArray(r)) {
              var s = e.length;
              if (s !== r.length) return [!1, i];
              for (var a = 0; a < s; a++) {
                if (!(l = t.deepEquals(e[a], r[a], i + '[' + a + ']'))[0])
                  return l;
              }
              return [!0, i];
            }
            if (n(e) || n(r)) return [!1, i];
            if (Object.keys(e).length !== Object.keys(r).length) return [!1, i];
            for (var u in e) {
              var l;
              if (!(l = t.deepEquals(e[u], r[u], i + '[' + u + ']'))[0])
                return l;
            }
            return [!0, i];
          }),
          (t.merge = function (e, n) {
            for (var r in n)
              null !== n[r] && 'object' == typeof n[r] && e.hasOwnProperty(r)
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
          (t.mergeWithRules = function (e, n, r, i) {
            for (var o in n) {
              var s = i ? i + '.' + o : o;
              r && s in r
                ? (e[o] = r[s](e[o], n[o]))
                : 'object' == typeof n[o] && e.hasOwnProperty(o)
                ? t.merge(e[o], n[o], r, s)
                : (e[o] = n[o]);
            }
          }),
          (t.sortMultipleFunction = function () {
            var e = [].slice.call(arguments),
              t = e.length;
            return function (n, r) {
              var i, o, s, a, u, l, c;
              for (
                c = 0;
                c < t &&
                ((l = 0),
                (i = n[(a = 'string' == typeof (s = e[c]) ? s : s.name)]),
                (o = r[a]),
                'function' == typeof s.fn && ((i = s.fn(i)), (o = s.fn(o))),
                (u = s.reverse ? -1 : 1),
                i < o && (l = -1 * u),
                i > o && (l = 1 * u),
                0 === l);
                c++
              );
              return l;
            };
          }),
          e &&
            e.exports &&
            (e.exports = {
              inherit: s,
              clone: t.clone,
              merge: t.merge,
              isNumber: i,
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
              isFunction: o,
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
                for (var i in n.prototype)
                  if ('function' == typeof n.prototype[i] && !e.prototype[i])
                    throw new Error(
                      'Interface implementation assertion failed: ' +
                        t +
                        ' does not implement ' +
                        r +
                        '::' +
                        i +
                        ' function',
                    );
              },
            });
      }.call(this, n('YuTi')(e)));
    },
    p0R9: function (e, t, n) {
      var r = n('nib0'),
        i = n('H46L');
      e.exports = function (e, t, n) {
        if (r(t)) throw TypeError('String#' + n + " doesn't accept regex!");
        return String(i(e));
      };
    },
    'pND+': function (e, t, n) {
      var r = n('8ICS')('keys'),
        i = n('QqfT');
      e.exports = function (e) {
        return r[e] || (r[e] = i(e));
      };
    },
    pZZ2: function (e, t, n) {
      var r = n('isQe'),
        i = n('XSq2'),
        o = n('pND+')('IE_PROTO'),
        s = Object.prototype;
      e.exports =
        Object.getPrototypeOf ||
        function (e) {
          return (
            (e = i(e)),
            r(e, o)
              ? e[o]
              : 'function' == typeof e.constructor && e instanceof e.constructor
              ? e.constructor.prototype
              : e instanceof Object
              ? s
              : null
          );
        };
    },
    pipr: function (e, t, n) {
      e.exports = n('8ICS')('native-function-to-string', Function.toString);
    },
    qFKp: function (e, t, n) {
      'use strict';
      var r,
        i,
        o,
        s,
        a,
        u = (window.TradingView = window.TradingView || {}),
        l = window.chrome && window.chrome.runtime,
        c = window.navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
        f = /\sEdge\/\d\d\b/.test(navigator.userAgent),
        d = 'msHidden' in window.document,
        p =
          navigator.vendor &&
          navigator.vendor.indexOf('Apple') > -1 &&
          -1 === navigator.userAgent.indexOf('CriOS') &&
          -1 === navigator.userAgent.indexOf('FxiOS');
      (u.className = function (e) {
        for (var t in this) if (u[t] === e) return t;
        return null;
      }),
        (u.isMobile =
          ((r = /Android/i.test(navigator.userAgent)),
          (i = /BlackBerry/i.test(navigator.userAgent)),
          (o = /iPhone|iPad|iPod/.test(navigator.platform)),
          (s = /Opera Mini/i.test(navigator.userAgent)),
          (a = r || i || o || s),
          {
            Android: function () {
              return r;
            },
            BlackBerry: function () {
              return i;
            },
            iOS: function () {
              return o;
            },
            Opera: function () {
              return s;
            },
            any: function () {
              return a;
            },
          }));
      var h =
        !!navigator.maxTouchPoints ||
        !!navigator.msMaxTouchPoints ||
        'ontouchstart' in window ||
        Boolean(
          window.DocumentTouch && document instanceof window.DocumentTouch,
        );
      (u.supportTouch = function () {
        return Modernizr.mobiletouch || h || u.isMobile.any();
      }),
        (u.onWidget = function () {
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
        (u.onOrder = function () {
          return '/order/' === window.location.pathname;
        }),
        (e.exports.isMac = function () {
          return /mac/i.test(navigator.platform);
        }),
        (e.exports.isDesktopApp = function () {
          return /TVDesktop/i.test(navigator.userAgent);
        }),
        (e.exports.CheckMobile = u.isMobile),
        (e.exports.onWidget = u.onWidget),
        (e.exports.supportTouch = u.supportTouch),
        (e.exports.checkPageType = function (e) {
          return (
            new URLSearchParams(window.location.search).get('page_type') === e
          );
        }),
        (e.exports.isChrome = l),
        (e.exports.isFF = c),
        (e.exports.isEdge = f),
        (e.exports.isIE = d),
        (e.exports.isSafari = p),
        (e.exports.onOrder = u.onOrder),
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
        '{"14851":{},"custom_items_in_context_menu":{},"websocket_connection":{},"countdown":{},"symbol_search_parser_mixin":{},"show_pro_features":{},"daily_timeframe_suffix":{},"symbollist_context_menu":{},"pay_attention_to_ticker_not_symbol":{},"graying_disabled_tools_enabled":{},"update_study_formatter_on_symbol_resolve":{},"constraint_dialogs_movement":{},"phone_verification":{},"show_trading_notifications_history":{},"show_interval_dialog_on_key_press":{},"header_interval_dialog_button":{"subsets":["show_interval_dialog_on_key_press"]},"header_fullscreen_button":{},"header_symbol_search":{},"symbol_search_hot_key":{},"header_resolutions":{"subsets":["header_interval_dialog_button"]},"header_chart_type":{},"header_settings":{},"header_indicators":{},"header_compare":{},"header_undo_redo":{},"header_screenshot":{},"header_saveload":{},"study_on_study":{},"scales_date_format":{},"header_widget":{"subsets":["header_widget_dom_node","header_symbol_search","header_resolutions","header_chart_type","header_settings","header_indicators","header_compare","header_undo_redo","header_fullscreen_button","compare_symbol","header_screenshot"]},"legend_widget":{},"compare_symbol":{"subsets":["header_compare"]},"property_pages":{"subsets":["show_chart_property_page","chart_property_page"]},"show_chart_property_page":{},"chart_property_page":{"subsets":["chart_property_page_scales","chart_property_page_trading","chart_property_page_right_margin_editor"]},"disable_userlink_popup":{},"left_toolbar":{},"hide_left_toolbar_by_default":{},"control_bar":{},"widget_logo":{},"timeframes_toolbar":{},"edit_buttons_in_legend":{"subsets":["show_hide_button_in_legend","format_button_in_legend","study_buttons_in_legend","delete_button_in_legend"]},"hide_legend_by_default":{},"show_hide_button_in_legend":{},"object_tree_legend_mode":{},"format_button_in_legend":{},"study_buttons_in_legend":{},"delete_button_in_legend":{},"broker_button":{},"buy_sell_buttons":{"subsets":["broker_button"]},"pane_context_menu":{},"scales_context_menu":{},"legend_context_menu":{},"no_layout_top_offset":{},"context_menus":{"subsets":["pane_context_menu","scales_context_menu","legend_context_menu","objects_tree_context_menu"]},"items_favoriting":{},"save_chart_properties_to_local_storage":{},"use_localstorage_for_settings":{"subsets":["items_favoriting","save_chart_properties_to_local_storage"]},"handle_scale":{"subsets":["mouse_wheel_scale","pinch_scale","axis_pressed_mouse_move_scale"]},"handle_scroll":{"subsets":["mouse_wheel_scroll","pressed_mouse_move_scroll","horz_touch_drag_scroll","vert_touch_drag_scroll"]},"plain_studymarket":{},"trading_watch_positions":{},"disable_resolution_rebuild":{},"border_around_the_chart":{},"charting_library_debug_mode":{},"log_data_request_time":{},"saveload_requires_authentication":{},"saveload_storage_customization":{},"new_chart_creation_available":{},"volume_force_overlay":{},"create_volume_indicator_by_default":{},"create_volume_indicator_by_default_once":{},"saved_charts_count_restriction":{},"lean_chart_load":{},"stop_study_on_restart":{},"star_some_intervals_by_default":{},"predefined_items_only_may_be_starred":{},"move_logo_to_main_pane":{},"show_animated_logo":{},"link_to_tradingview":{},"logo_without_link":{},"right_bar_stays_on_scroll":{},"chart_content_overrides_by_defaults":{},"show_dialog_on_snapshot_ready":{},"snapshot_trading_drawings":{},"allow_supported_resolutions_set_only":{},"study_market_minimized":{},"widgetbar_tabs":{"subsets":["right_toolbar"]},"show_object_tree":{"subsets":["right_toolbar"]},"dome_widget":{"subsets":["right_toolbar","showdom_button"]},"collapsible_header":{},"show_extension_popup":{},"study_templates":{},"side_toolbar_in_fullscreen_mode":{},"header_in_fullscreen_mode":{},"remove_library_container_border":{},"whotrades_auth_only":{},"support_multicharts":{},"display_market_status":{},"display_data_mode":{},"show_chart_warn_message":{},"datasource_copypaste":{},"drawing_templates":{"subsets":["linetoolpropertieswidget_template_button"]},"expand_symbolsearch_items":{},"symbol_search_three_columns_exchanges":{},"symbol_search_flags":{},"symbol_search_limited_exchanges":{},"bugreport_button":{"subsets":["right_toolbar"]},"footer_publish_idea_button":{},"showdom_button":{"subsets":["right_toolbar"]},"text_notes":{},"show_source_code":{},"symbol_info":{},"no_bars_status":{},"clear_bars_on_series_error":{},"hide_loading_screen_on_series_error":{},"seconds_resolution":{},"dont_show_boolean_study_arguments":{},"hide_last_na_study_output":{},"price_scale_always_last_bar_value":{},"study_dialog_search_control":{},"study_dialog_fundamentals_economy_addons":{},"uppercase_instrument_names":{},"cqg_trading_confirm_risks":{},"trading_notifications":{},"chart_crosshair_menu":{},"japanese_chart_styles":{},"hide_series_legend_item":{},"hide_study_overlay_legend_item":{},"hide_study_compare_legend_item":{},"linetoolpropertieswidget_template_button":{},"use_overrides_for_overlay":{},"timezone_menu":{},"main_series_scale_menu":{},"show_login_dialog":{},"remove_img_from_rss":{},"bars_marks":{},"chart_scroll":{},"chart_zoom":{},"source_selection_markers":{},"high_density_bars":{},"low_density_bars":{},"end_of_period_timescale_marks":{},"open_account_manager":{},"show_order_panel_on_start":{},"order_panel":{"subsets":["order_panel_close_button","order_panel_undock","right_toolbar","order_info"]},"multiple_watchlists":{},"study_overlay_compare_legend_option":{},"custom_resolutions":{},"referral_program_for_widget_owners":{},"mobile_app_force_chart_maximize":{},"mobile_app_hide_layout_buttons_on_chart_toolbar":{},"mobile_app_hide_series_control_bar":{},"no_min_chart_width":{},"lock_visible_time_range_on_resize":{},"pricescale_currency":{},"referral_program_policy_aggressive":{"subsets":["referral_program_policy_passive","referral_program_policy_normal"]},"referral_program_policy_normal":{"subsets":["referral_program_policy_passive","header_fake_features_buttons","custom_resolutions"]},"cropped_tick_marks":{},"trading_account_manager":{},"disable_sameinterval_aligning":{},"tv_production":{"subsets":["show_pro_features","countdown","symbol_search_parser_mixin","symbollist_context_menu","websocket_connection","header_fullscreen_button","header_widget","dont_show_boolean_study_arguments","left_toolbar","buy_sell_buttons","control_bar","symbol_search_hot_key","context_menus","edit_buttons_in_legend","object_tree_legend_mode","uppercase_instrument_names","use_localstorage_for_settings","saveload_requires_authentication","volume_force_overlay","new_chart_creation_available","saved_charts_count_restriction","create_volume_indicator_by_default","create_volume_indicator_by_default_once","charts_auto_save","save_old_chart_before_save_as","chart_content_overrides_by_defaults","alerts","show_dialog_on_snapshot_ready","show_extension_popup","header_saveload","header_layouttoggle","datasource_copypaste","show_saved_watchlists","watchlists_from_to_file","add_to_watchlist","property_pages","support_multicharts","display_market_status","display_data_mode","show_chart_warn_message","support_manage_drawings","widgetbar_tabs","study_templates","collapsible_header","drawing_templates","caption_buttons_text_if_possible","footer_publish_idea_button","text_notes","show_source_code","trading_watch_positions","symbol_info","linetoolpropertieswidget_template_button","cqg_trading_confirm_risks","trading_notifications","symbol_search_three_columns_exchanges","symbol_search_flags","symbol_search_limited_exchanges","phone_verification","chart_events","custom_resolutions","compare_symbol","study_on_study","japanese_chart_styles","show_login_dialog","dome_widget","bars_marks","chart_scroll","chart_zoom","show_trading_notifications_history","source_selection_markers","study_dialog_fundamentals_economy_addons","multiple_watchlists","marked_symbols","order_panel","pricescale_currency","show_animated_logo","pricescale_currency","show_object_tree","scales_date_format","popup_hints","show_right_widgets_panel_by_default"]},"browser_extension":{"subsets":["disable_userlink_popup","show_pro_features","show_saved_watchlists","display_market_status","display_data_mode","show_chart_warn_message","widgetbar_tabs","show_login_dialog"]},"widget":{"subsets":["show_pro_features","countdown","symbol_search_parser_mixin","symbollist_context_menu","websocket_connection","uppercase_instrument_names","left_toolbar","control_bar","symbol_search_hot_key","context_menus","edit_buttons_in_legend","object_tree_legend_mode","use_localstorage_for_settings","saveload_requires_authentication","volume_force_overlay","create_volume_indicator_by_default","create_volume_indicator_by_default_once","show_dialog_on_snapshot_ready","dont_show_boolean_study_arguments","header_widget_dom_node","header_symbol_search","header_resolutions","header_chart_type","header_compare","header_indicators","star_some_intervals_by_default","display_market_status","display_data_mode","show_chart_warn_message","symbol_info","linetoolpropertieswidget_template_button","symbol_search_three_columns_exchanges","symbol_search_flags","symbol_search_limited_exchanges","widgetbar_tabs","compare_symbol","show_login_dialog","plain_studymarket","japanese_chart_styles","bars_marks","chart_scroll","chart_zoom","source_selection_markers","property_pages","show_right_widgets_panel_by_default","caption_buttons_text_if_possible"]},"bovespa_widget":{"subsets":["widget","header_settings","linetoolpropertieswidget_template_button"]},"charting_library_base":{"subsets":["14851","allow_supported_resolutions_set_only","border_around_the_chart","collapsible_header","constraint_dialogs_movement","context_menus","control_bar","create_volume_indicator_by_default","custom_items_in_context_menu","datasource_copypaste","daily_timeframe_suffix","uppercase_instrument_names","display_market_status","edit_buttons_in_legend","object_tree_legend_mode","graying_disabled_tools_enabled","header_widget","legend_widget","header_saveload","dont_show_boolean_study_arguments","lean_chart_load","left_toolbar","trading_watch_positions","link_to_tradingview","pay_attention_to_ticker_not_symbol","plain_studymarket","predefined_items_only_may_be_starred","refresh_saved_charts_list_on_dialog_show","right_bar_stays_on_scroll","saveload_storage_customization","show_dialog_on_snapshot_ready","stop_study_on_restart","timeframes_toolbar","symbol_search_hot_key","update_study_formatter_on_symbol_resolve","update_timeframes_set_on_symbol_resolve","use_localstorage_for_settings","volume_force_overlay","widget_logo","countdown","use_overrides_for_overlay","trading_notifications","compare_symbol","symbol_info","timezone_menu","main_series_scale_menu","study_dialog_search_control","create_volume_indicator_by_default_once","bars_marks","chart_scroll","chart_zoom","source_selection_markers","property_pages","go_to_date","adaptive_logo","caption_buttons_text_if_possible","show_animated_logo","handle_scale","handle_scroll","shift_visible_range_on_new_bar","chart_content_overrides_by_defaults","cropped_tick_marks","scales_date_format","popup_hints","save_shortcut","show_right_widgets_panel_by_default","show_object_tree"]},"charting_library":{"subsets":["charting_library_base"]},"static_charts_service":{"subsets":["charting_library","disable_resolution_rebuild","log_data_request_time"]},"trading_terminal":{"subsets":["charting_library_base","showdom_button","support_multicharts","header_layouttoggle","japanese_chart_styles","chart_property_page_trading","add_to_watchlist","open_account_manager","show_dom_first_time","order_panel","buy_sell_buttons","multiple_watchlists","show_trading_notifications_history","always_pass_called_order_to_modify","show_object_tree","drawing_templates","trading_account_manager","chart_crosshair_menu"]}}',
      );
    },
    s245: function (e, t, n) {
      var r = n('9TFj'),
        i = n('1Vm/'),
        o = n('IXQl')('species');
      e.exports = function (e, t) {
        var n,
          s = r(e).constructor;
        return void 0 === s || null == (n = r(s)[o]) ? t : i(n);
      };
    },
    s3mU: function (e, t, n) {
      var r = n('6Ngl'),
        i = n('C9Yf').f,
        o = {}.toString,
        s =
          'object' == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [];
      e.exports.f = function (e) {
        return s && '[object Window]' == o.call(e)
          ? (function (e) {
              try {
                return i(e);
              } catch (t) {
                return s.slice();
              }
            })(e)
          : i(r(e));
      };
    },
    s4An: function (e, t, n) {
      'use strict';
      function r(e, t) {
        return (r =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    si6p: function (e, t, n) {
      var r, i, o;
      (i = [n('P5fv')]),
        void 0 ===
          (o =
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
                i =
                  'onwheel' in document || document.documentMode >= 9
                    ? ['wheel']
                    : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
                o = Array.prototype.slice;
              if (e.event.fixHooks)
                for (var s = r.length; s; )
                  e.event.fixHooks[r[--s]] = e.event.mouseHooks;
              var a = (e.event.special.mousewheel = {
                version: '3.1.12',
                setup: function () {
                  if (this.addEventListener)
                    for (var t = i.length; t; )
                      this.addEventListener(i[--t], u, !1);
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
                    for (var t = i.length; t; )
                      this.removeEventListener(i[--t], u, !1);
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
                var i = r || window.event,
                  s = o.call(arguments, 1),
                  u = 0,
                  f = 0,
                  d = 0,
                  p = 0,
                  h = 0,
                  g = 0;
                if (
                  (((r = e.event.fix(i)).type = 'mousewheel'),
                  'detail' in i && (d = -1 * i.detail),
                  'wheelDelta' in i && (d = i.wheelDelta),
                  'wheelDeltaY' in i && (d = i.wheelDeltaY),
                  'wheelDeltaX' in i && (f = -1 * i.wheelDeltaX),
                  'axis' in i &&
                    i.axis === i.HORIZONTAL_AXIS &&
                    ((f = -1 * d), (d = 0)),
                  (u = 0 === d ? f : d),
                  'deltaY' in i && (u = d = -1 * i.deltaY),
                  'deltaX' in i && ((f = i.deltaX), 0 === d && (u = -1 * f)),
                  0 !== d || 0 !== f)
                ) {
                  if (1 === i.deltaMode) {
                    var v = e.data(this, 'mousewheel-line-height');
                    (u *= v), (d *= v), (f *= v);
                  } else if (2 === i.deltaMode) {
                    var m = e.data(this, 'mousewheel-page-height');
                    (u *= m), (d *= m), (f *= m);
                  }
                  if (
                    ((p = Math.max(Math.abs(d), Math.abs(f))),
                    (!n || p < n) && ((n = p), c(i, p) && (n /= 40)),
                    c(i, p) && ((u /= 40), (f /= 40), (d /= 40)),
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
                    (t = setTimeout(l, 200)),
                    (e.event.dispatch || e.event.handle).apply(this, s)
                  );
                }
              }
              function l() {
                n = null;
              }
              function c(e, t) {
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
              ? r.apply(t, i)
              : r) || (e.exports = o);
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
        i = n('yFUn')(!0);
      r(r.S, 'Object', {
        entries: function (e) {
          return i(e);
        },
      });
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
        i = n('5wX8'),
        o = n('khJW'),
        s = n('AZRH'),
        a = n('hvJ5'),
        u = function (e, t, n) {
          var l,
            c,
            f,
            d,
            p = e & u.F,
            h = e & u.G,
            g = e & u.S,
            v = e & u.P,
            m = e & u.B,
            y = h ? r : g ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
            b = h ? i : i[t] || (i[t] = {}),
            _ = b.prototype || (b.prototype = {});
          for (l in (h && (n = t), n))
            (f = ((c = !p && y && void 0 !== y[l]) ? y : n)[l]),
              (d =
                m && c
                  ? a(f, r)
                  : v && 'function' == typeof f
                  ? a(Function.call, f)
                  : f),
              y && s(y, l, f, e & u.U),
              b[l] != f && o(b, l, d),
              v && _[l] != f && (_[l] = f);
        };
      (r.core = i),
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
    voXF: function (e, t, n) {
      'use strict';
      var r = n('OlM/'),
        i = n('JwWU'),
        o = n('V3uq'),
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
            ? ((this._t = void 0), i(1))
            : i(0, 'keys' == t ? n : 'values' == t ? e[n] : [n, e[n]]);
        },
        'values',
      )),
        (o.Arguments = o.Array),
        r('keys'),
        r('values'),
        r('entries');
    },
    'xL+S': function (e, t, n) {
      'use strict';
      var r = n('285N'),
        i = n('utAV');
      e.exports = n('0+LD')(
        'Set',
        function (e) {
          return function () {
            return e(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          add: function (e) {
            return r.def(i(this, 'Set'), (e = 0 === e ? 0 : e), e);
          },
        },
        r,
      );
    },
    xjCr: function (e, t, n) {
      var r = n('WJeB'),
        i = n('IbiK');
      e.exports =
        Object.keys ||
        function (e) {
          return r(e, i);
        };
    },
    yFUn: function (e, t, n) {
      var r = n('xjCr'),
        i = n('6Ngl'),
        o = n('vRGa').f;
      e.exports = function (e) {
        return function (t) {
          for (var n, s = i(t), a = r(s), u = a.length, l = 0, c = []; u > l; )
            o.call(s, (n = a[l++])) && c.push(e ? [n, s[n]] : s[n]);
          return c;
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
        i = n('gPPl'),
        o = n('nULH'),
        s = n('IXQl')('species');
      e.exports = function (e) {
        var t = r[e];
        o &&
          t &&
          !t[s] &&
          i.f(t, s, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    yyyB: function (e, t, n) {
      var r = n('vVR7'),
        i = n('KGgr').isFinite;
      r(r.S, 'Number', {
        isFinite: function (e) {
          return 'number' == typeof e && i(e);
        },
      });
    },
    zP2l: function (e, t, n) {
      var r = n('IXQl')('iterator'),
        i = !1;
      try {
        var o = [7][r]();
        (o.return = function () {
          i = !0;
        }),
          Array.from(o, function () {
            throw 2;
          });
      } catch (s) {}
      e.exports = function (e, t) {
        if (!t && !i) return !1;
        var n = !1;
        try {
          var o = [7],
            a = o[r]();
          (a.next = function () {
            return { done: (n = !0) };
          }),
            (o[r] = function () {
              return a;
            }),
            e(o);
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
