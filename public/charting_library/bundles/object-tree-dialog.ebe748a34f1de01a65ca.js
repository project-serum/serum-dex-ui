(window.webpackJsonp = window.webpackJsonp || []).push([
  ['object-tree-dialog'],
  {
    '+5L9': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>';
    },
    '+KIV': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8 9.5H6.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V20m-8-1.5h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1z"/></svg>';
    },
    '/XZa': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.areDirty = function (e, t) {
          if (e === o) return !1;
          if (e === i || void 0 === t) return !0;
          return (0, r.intersection)(t, e).length > 0;
        }),
        (t.ALL = t.NONE = void 0);
      var r = n('rTKX'),
        o = [];
      t.NONE = o;
      var i = [];
      (t.ALL = i), (o.__IS_NONE__ = !0), (i.__IS_ALL__ = !0);
    },
    '/yIc': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.END_DRAG = t.DROP = t.HOVER = t.PUBLISH_DRAG_SOURCE = t.BEGIN_DRAG = t.INIT_COORDS = void 0);
      t.INIT_COORDS = 'dnd-core/INIT_COORDS';
      t.BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
      t.PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
      t.HOVER = 'dnd-core/HOVER';
      t.DROP = 'dnd-core/DROP';
      t.END_DRAG = 'dnd-core/END_DRAG';
    },
    '1TyS': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getEmptyImage', {
          enumerable: !0,
          get: function () {
            return a.getEmptyImage;
          },
        }),
        (t.NativeTypes = t.default = void 0);
      var r,
        o = (r = n('OLLy')) && r.__esModule ? r : { default: r },
        i = (function (e) {
          if (e && e.__esModule) return e;
          var t = u();
          if (t && t.has(e)) return t.get(e);
          var n = {};
          if (null != e) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
              if (Object.prototype.hasOwnProperty.call(e, o)) {
                var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                i && (i.get || i.set)
                  ? Object.defineProperty(n, o, i)
                  : (n[o] = e[o]);
              }
          }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n('DC3H'));
      t.NativeTypes = i;
      var a = n('KMov');
      function u() {
        if ('function' != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      var c = function (e, t) {
        return new o.default(e, t);
      };
      t.default = c;
    },
    '20cQ': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.5 4A2.5 2.5 0 0 0 7 5.5V7h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2V5.5a3.5 3.5 0 0 1 6.231-2.19c-.231.19-.73.69-.73.69zM13 8H6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-2 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>';
    },
    '2H2i': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r = s(n('IEa/')),
        o = s(n('QLaP')),
        i = n('Uyss'),
        a = s(n('TM5I')),
        u = n('iI3E'),
        c = n('GA2J');
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function d(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if (
              !(Symbol.iterator in Object(e)) &&
              '[object Arguments]' !== Object.prototype.toString.call(e)
            )
              return;
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, u = e[Symbol.iterator]();
                !(r = (a = u.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (c) {
              (o = !0), (i = c);
            } finally {
              try {
                r || null == u.return || u.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance',
            );
          })()
        );
      }
      function f(e) {
        switch (e[0]) {
          case 'S':
            return u.HandlerRole.SOURCE;
          case 'T':
            return u.HandlerRole.TARGET;
          default:
            (0, o.default)(!1, 'Cannot parse handler ID: '.concat(e));
        }
      }
      function p(e, t) {
        var n = e.entries(),
          r = !1;
        do {
          var o = n.next(),
            i = o.done;
          if (d(o.value, 2)[1] === t) return !0;
          r = !!i;
        } while (!r);
        return !1;
      }
      var h = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.types = new Map()),
            (this.dragSources = new Map()),
            (this.dropTargets = new Map()),
            (this.pinnedSourceId = null),
            (this.pinnedSource = null),
            (this.store = t);
        }
        var t, n, s;
        return (
          (t = e),
          (n = [
            {
              key: 'addSource',
              value: function (e, t) {
                (0, c.validateType)(e), (0, c.validateSourceContract)(t);
                var n = this.addHandler(u.HandlerRole.SOURCE, e, t);
                return this.store.dispatch((0, i.addSource)(n)), n;
              },
            },
            {
              key: 'addTarget',
              value: function (e, t) {
                (0, c.validateType)(e, !0), (0, c.validateTargetContract)(t);
                var n = this.addHandler(u.HandlerRole.TARGET, e, t);
                return this.store.dispatch((0, i.addTarget)(n)), n;
              },
            },
            {
              key: 'containsHandler',
              value: function (e) {
                return p(this.dragSources, e) || p(this.dropTargets, e);
              },
            },
            {
              key: 'getSource',
              value: function (e) {
                var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                (0, o.default)(
                  this.isSourceId(e),
                  'Expected a valid source ID.',
                );
                var n = t && e === this.pinnedSourceId,
                  r = n ? this.pinnedSource : this.dragSources.get(e);
                return r;
              },
            },
            {
              key: 'getTarget',
              value: function (e) {
                return (
                  (0, o.default)(
                    this.isTargetId(e),
                    'Expected a valid target ID.',
                  ),
                  this.dropTargets.get(e)
                );
              },
            },
            {
              key: 'getSourceType',
              value: function (e) {
                return (
                  (0, o.default)(
                    this.isSourceId(e),
                    'Expected a valid source ID.',
                  ),
                  this.types.get(e)
                );
              },
            },
            {
              key: 'getTargetType',
              value: function (e) {
                return (
                  (0, o.default)(
                    this.isTargetId(e),
                    'Expected a valid target ID.',
                  ),
                  this.types.get(e)
                );
              },
            },
            {
              key: 'isSourceId',
              value: function (e) {
                return f(e) === u.HandlerRole.SOURCE;
              },
            },
            {
              key: 'isTargetId',
              value: function (e) {
                return f(e) === u.HandlerRole.TARGET;
              },
            },
            {
              key: 'removeSource',
              value: function (e) {
                var t = this;
                (0, o.default)(
                  this.getSource(e),
                  'Expected an existing source.',
                ),
                  this.store.dispatch((0, i.removeSource)(e)),
                  (0, r.default)(function () {
                    t.dragSources.delete(e), t.types.delete(e);
                  });
              },
            },
            {
              key: 'removeTarget',
              value: function (e) {
                (0, o.default)(
                  this.getTarget(e),
                  'Expected an existing target.',
                ),
                  this.store.dispatch((0, i.removeTarget)(e)),
                  this.dropTargets.delete(e),
                  this.types.delete(e);
              },
            },
            {
              key: 'pinSource',
              value: function (e) {
                var t = this.getSource(e);
                (0, o.default)(t, 'Expected an existing source.'),
                  (this.pinnedSourceId = e),
                  (this.pinnedSource = t);
              },
            },
            {
              key: 'unpinSource',
              value: function () {
                (0, o.default)(
                  this.pinnedSource,
                  'No source is pinned at the time.',
                ),
                  (this.pinnedSourceId = null),
                  (this.pinnedSource = null);
              },
            },
            {
              key: 'addHandler',
              value: function (e, t, n) {
                var r = (function (e) {
                  var t = (0, a.default)().toString();
                  switch (e) {
                    case u.HandlerRole.SOURCE:
                      return 'S'.concat(t);
                    case u.HandlerRole.TARGET:
                      return 'T'.concat(t);
                    default:
                      throw new Error('Unknown Handler Role: '.concat(e));
                  }
                })(e);
                return (
                  this.types.set(r, t),
                  e === u.HandlerRole.SOURCE
                    ? this.dragSources.set(r, n)
                    : e === u.HandlerRole.TARGET && this.dropTargets.set(r, n),
                  r
                );
              },
            },
          ]) && l(t.prototype, n),
          s && l(t, s),
          e
        );
      })();
      t.default = h;
    },
    '4/GM': function (e, t, n) {
      e.exports = { dialog: 'dialog-2ABJPLy0', button: 'button-1OlZqHnS' };
    },
    '4ceR': function (e, t, n) {
      e.exports = {
        dropTargetInside: 'dropTargetInside-299zFMJb',
        dropTarget: 'dropTarget-2j6B54oR',
        before: 'before-2EcILzR4',
        after: 'after-2-OrwTp2',
      };
    },
    '6ccc': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.useMonitorOutput = function (e, t, n) {
          var i =
              ((c = (0, o.useCollector)(e, t, n)),
              (s = 2),
              (function (e) {
                if (Array.isArray(e)) return e;
              })(c) ||
                (function (e, t) {
                  if (
                    Symbol.iterator in Object(e) ||
                    '[object Arguments]' === Object.prototype.toString.call(e)
                  ) {
                    var n = [],
                      r = !0,
                      o = !1,
                      i = void 0;
                    try {
                      for (
                        var a, u = e[Symbol.iterator]();
                        !(r = (a = u.next()).done) &&
                        (n.push(a.value), !t || n.length !== t);
                        r = !0
                      );
                    } catch (c) {
                      (o = !0), (i = c);
                    } finally {
                      try {
                        r || null == u.return || u.return();
                      } finally {
                        if (o) throw i;
                      }
                    }
                    return n;
                  }
                })(c, s) ||
                (function () {
                  throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance',
                  );
                })()),
            a = i[0],
            u = i[1];
          var c, s;
          return (
            (0, r.useIsomorphicLayoutEffect)(
              function () {
                var t = e.getHandlerId();
                if (null != t)
                  return e.subscribeToStateChange(u, { handlerIds: [t] });
              },
              [e, u],
            ),
            a
          );
        });
      var r = n('7bhs'),
        o = n('84ty');
    },
    '6joC': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.useDragSourceMonitor = function () {
          var e = (0, u.useDragDropManager)(),
            t = (0, o.useMemo)(
              function () {
                return new c.DragSourceMonitorImpl(e);
              },
              [e],
            ),
            n = (0, o.useMemo)(
              function () {
                return new s.SourceConnector(e.getBackend());
              },
              [e],
            );
          return [t, n];
        }),
        (t.useDragHandler = function (e, t, n) {
          var r = (0, u.useDragDropManager)(),
            c = (0, o.useMemo)(function () {
              return {
                beginDrag: function () {
                  var n = e.current,
                    r = n.begin,
                    o = n.item;
                  if (r) {
                    var a = r(t);
                    return (
                      (0, i.default)(
                        null == a || 'object' === d(a),
                        'dragSpec.begin() must either return an object, undefined, or null',
                      ),
                      a || o || {}
                    );
                  }
                  return o || {};
                },
                canDrag: function () {
                  return 'boolean' == typeof e.current.canDrag
                    ? e.current.canDrag
                    : 'function' != typeof e.current.canDrag ||
                        e.current.canDrag(t);
                },
                isDragging: function (n, r) {
                  var o = e.current.isDragging;
                  return o ? o(t) : r === n.getSourceId();
                },
                endDrag: function () {
                  var r = e.current.end;
                  r && r(t.getItem(), t), n.reconnect();
                },
              };
            }, []);
          (0, l.useIsomorphicLayoutEffect)(function () {
            var o,
              i,
              u = (0, a.registerSource)(e.current.item.type, c, r),
              s =
                ((i = 2),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })((o = u)) ||
                  (function (e, t) {
                    if (
                      Symbol.iterator in Object(e) ||
                      '[object Arguments]' === Object.prototype.toString.call(e)
                    ) {
                      var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                      try {
                        for (
                          var a, u = e[Symbol.iterator]();
                          !(r = (a = u.next()).done) &&
                          (n.push(a.value), !t || n.length !== t);
                          r = !0
                        );
                      } catch (c) {
                        (o = !0), (i = c);
                      } finally {
                        try {
                          r || null == u.return || u.return();
                        } finally {
                          if (o) throw i;
                        }
                      }
                      return n;
                    }
                  })(o, i) ||
                  (function () {
                    throw new TypeError(
                      'Invalid attempt to destructure non-iterable instance',
                    );
                  })()),
              l = s[0],
              d = s[1];
            return t.receiveHandlerId(l), n.receiveHandlerId(l), d;
          }, []);
        });
      var r,
        o = n('q1tI'),
        i = (r = n('QLaP')) && r.__esModule ? r : { default: r },
        a = n('lAcH'),
        u = n('gArw'),
        c = n('T+8Q'),
        s = n('GrOC'),
        l = n('7bhs');
      function d(e) {
        return (d =
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
    },
    '7bhs': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.useIsomorphicLayoutEffect = void 0);
      var r = n('q1tI'),
        o = 'undefined' != typeof window ? r.useLayoutEffect : r.useEffect;
      t.useIsomorphicLayoutEffect = o;
    },
    '84ty': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.useCollector = function (e, t, n) {
          var r =
              ((l = (0, i.useState)(function () {
                return t(e);
              })),
              (d = 2),
              (function (e) {
                if (Array.isArray(e)) return e;
              })(l) ||
                (function (e, t) {
                  if (
                    Symbol.iterator in Object(e) ||
                    '[object Arguments]' === Object.prototype.toString.call(e)
                  ) {
                    var n = [],
                      r = !0,
                      o = !1,
                      i = void 0;
                    try {
                      for (
                        var a, u = e[Symbol.iterator]();
                        !(r = (a = u.next()).done) &&
                        (n.push(a.value), !t || n.length !== t);
                        r = !0
                      );
                    } catch (c) {
                      (o = !0), (i = c);
                    } finally {
                      try {
                        r || null == u.return || u.return();
                      } finally {
                        if (o) throw i;
                      }
                    }
                    return n;
                  }
                })(l, d) ||
                (function () {
                  throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance',
                  );
                })()),
            u = r[0],
            c = r[1],
            s = (0, i.useCallback)(
              function () {
                var r = t(e);
                (0, o.default)(u, r) || (c(r), n && n());
              },
              [u, e, n],
            );
          var l, d;
          return (0, a.useIsomorphicLayoutEffect)(s, []), [u, s];
        });
      var r,
        o = (r = n('Gytx')) && r.__esModule ? r : { default: r },
        i = n('q1tI'),
        a = n('7bhs');
    },
    '8QtF': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.createDndContext = function (e, t, n, r) {
          return { dragDropManager: (0, o.createDragDropManager)(e, t, n, r) };
        }),
        (t.DndContext = void 0);
      var r = (function (e) {
          if (e && e.__esModule) return e;
          var t = i();
          if (t && t.has(e)) return t.get(e);
          var n = {};
          if (null != e) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
              if (Object.prototype.hasOwnProperty.call(e, o)) {
                var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                a && (a.get || a.set)
                  ? Object.defineProperty(n, o, a)
                  : (n[o] = e[o]);
              }
          }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n('q1tI')),
        o = n('Lvbb');
      function i() {
        if ('function' != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      var a = r.createContext({ dragDropManager: void 0 });
      t.DndContext = a;
    },
    '8nTA': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('sAc8');
      Object.keys(r).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return r[e];
            },
          });
      });
      var o = n('O5am');
      Object.keys(o).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return o[e];
            },
          });
      });
      var i = n('cSMM');
      Object.keys(i).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return i[e];
            },
          });
      });
    },
    'Ag/1': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          return function () {
            if (e.getMonitor().isDragging())
              return { type: r.PUBLISH_DRAG_SOURCE };
          };
        });
      var r = n('/yIc');
    },
    AmWu: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.cloneWithRef = function (e, t) {
          var n = e.ref;
          return (
            (0, i.default)(
              'string' != typeof n,
              'Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute',
            ),
            n
              ? (0, o.cloneElement)(e, {
                  ref: function (e) {
                    a(n, e), a(t, e);
                  },
                })
              : (0, o.cloneElement)(e, { ref: t })
          );
        });
      var r,
        o = n('q1tI'),
        i = (r = n('QLaP')) && r.__esModule ? r : { default: r };
      function a(e, t) {
        'function' == typeof e ? e(t) : (e.current = t);
      }
    },
    'B6/a': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.5 6C4.67 6 4 6.67 4 7.5V20.5c0 .83.67 1.5 1.5 1.5H16v-1H5.5a.5.5 0 0 1-.5-.5V12h16v1h1V9.5c0-.83-.67-1.5-1.5-1.5h-8.8L9.86 6.15 9.71 6H5.5zM21 11H5V7.5c0-.28.22-.5.5-.5h3.8l1.85 1.85.14.15h9.21c.28 0 .5.22.5.5V11zm1 11v-3h3v-1h-3v-3h-1v3h-3v1h3v3h1z"/></svg>';
    },
    D1HX: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          return function (t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = n.clientOffset;
            u(t);
            var o = t.slice(0),
              a = e.getMonitor(),
              d = e.getRegistry();
            c(o, a, d);
            var f = a.getItemType();
            return (
              s(o, d, f),
              l(o, a, d),
              {
                type: i.HOVER,
                payload: { targetIds: o, clientOffset: r || null },
              }
            );
          };
        });
      var r = a(n('QLaP')),
        o = a(n('gGVb')),
        i = n('/yIc');
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e) {
        (0, r.default)(Array.isArray(e), 'Expected targetIds to be an array.');
      }
      function c(e, t, n) {
        (0, r.default)(t.isDragging(), 'Cannot call hover while not dragging.'),
          (0, r.default)(!t.didDrop(), 'Cannot call hover after drop.');
        for (var o = 0; o < e.length; o++) {
          var i = e[o];
          (0, r.default)(
            e.lastIndexOf(i) === o,
            'Expected targetIds to be unique in the passed array.',
          );
          var a = n.getTarget(i);
          (0, r.default)(a, 'Expected targetIds to be registered.');
        }
      }
      function s(e, t, n) {
        for (var r = e.length - 1; r >= 0; r--) {
          var i = e[r],
            a = t.getTargetType(i);
          (0, o.default)(a, n) || e.splice(r, 1);
        }
      }
      function l(e, t, n) {
        e.forEach(function (e) {
          n.getTarget(e).hover(t, e);
        });
      }
    },
    DC3H: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.TEXT = t.URL = t.FILE = void 0);
      t.FILE = '__NATIVE_FILE__';
      t.URL = '__NATIVE_URL__';
      t.TEXT = '__NATIVE_TEXT__';
    },
    DGxW: function (e, t, n) {
      e.exports = {
        separator: 'separator-25-NlPDn',
        tree: 'tree-T6PqyYoA',
        overlayScrollWrap: 'overlayScrollWrap-BWErPmtY',
        listContainer: 'listContainer-1OhjZIMS',
      };
    },
    Def4: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.DragLayer = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (
            (0, s.checkDecoratorArguments)(
              'DragLayer',
              'collect[, options]',
              e,
              t,
            ),
            (0, a.default)(
              'function' == typeof e,
              'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ',
              'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer',
              e,
            ),
            (0, a.default)(
              (0, c.isPlainObject)(t),
              'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer',
              t,
            ),
            function (n) {
              var c = n,
                l = t.arePropsEqual,
                d = void 0 === l ? o.default : l,
                h = c.displayName || c.name || 'Component',
                m = (function (t) {
                  function n() {
                    var e;
                    return (
                      p(this, n),
                      ((e = g(
                        this,
                        b(n).apply(this, arguments),
                      )).isCurrentlyMounted = !1),
                      (e.ref = r.createRef()),
                      (e.handleChange = function () {
                        if (e.isCurrentlyMounted) {
                          var t = e.getCurrentState();
                          (0, o.default)(t, e.state) || e.setState(t);
                        }
                      }),
                      e
                    );
                  }
                  return (
                    y(n, t),
                    v(n, [
                      {
                        key: 'getDecoratedComponentInstance',
                        value: function () {
                          return (
                            (0, a.default)(
                              this.ref.current,
                              'In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()',
                            ),
                            this.ref.current
                          );
                        },
                      },
                      {
                        key: 'shouldComponentUpdate',
                        value: function (e, t) {
                          return (
                            !d(e, this.props) || !(0, o.default)(t, this.state)
                          );
                        },
                      },
                      {
                        key: 'componentDidMount',
                        value: function () {
                          (this.isCurrentlyMounted = !0), this.handleChange();
                        },
                      },
                      {
                        key: 'componentWillUnmount',
                        value: function () {
                          (this.isCurrentlyMounted = !1),
                            this.unsubscribeFromOffsetChange &&
                              (this.unsubscribeFromOffsetChange(),
                              (this.unsubscribeFromOffsetChange = void 0)),
                            this.unsubscribeFromStateChange &&
                              (this.unsubscribeFromStateChange(),
                              (this.unsubscribeFromStateChange = void 0));
                        },
                      },
                      {
                        key: 'render',
                        value: function () {
                          var e = this;
                          return r.createElement(
                            u.DndContext.Consumer,
                            null,
                            function (t) {
                              var n = t.dragDropManager;
                              return void 0 === n
                                ? null
                                : (e.receiveDragDropManager(n),
                                  e.isCurrentlyMounted
                                    ? r.createElement(
                                        c,
                                        Object.assign({}, e.props, e.state, {
                                          ref: (0, s.isRefable)(c)
                                            ? e.ref
                                            : null,
                                        }),
                                      )
                                    : null);
                            },
                          );
                        },
                      },
                      {
                        key: 'receiveDragDropManager',
                        value: function (e) {
                          if (void 0 === this.manager) {
                            (this.manager = e),
                              (0, a.default)(
                                'object' === f(e),
                                'Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context',
                                h,
                                h,
                              );
                            var t = this.manager.getMonitor();
                            (this.unsubscribeFromOffsetChange = t.subscribeToOffsetChange(
                              this.handleChange,
                            )),
                              (this.unsubscribeFromStateChange = t.subscribeToStateChange(
                                this.handleChange,
                              ));
                          }
                        },
                      },
                      {
                        key: 'getCurrentState',
                        value: function () {
                          if (!this.manager) return {};
                          var t = this.manager.getMonitor();
                          return e(t, this.props);
                        },
                      },
                    ]),
                    n
                  );
                })(r.Component);
              return (
                (m.displayName = 'DragLayer('.concat(h, ')')),
                (m.DecoratedComponent = n),
                (0, i.default)(m, n)
              );
            }
          );
        });
      var r = (function (e) {
          if (e && e.__esModule) return e;
          var t = d();
          if (t && t.has(e)) return t.get(e);
          var n = {};
          if (null != e) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
              if (Object.prototype.hasOwnProperty.call(e, o)) {
                var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                i && (i.get || i.set)
                  ? Object.defineProperty(n, o, i)
                  : (n[o] = e[o]);
              }
          }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n('q1tI')),
        o = l(n('Gytx')),
        i = l(n('2mql')),
        a = l(n('QLaP')),
        u = n('Y4Oj'),
        c = n('GanS'),
        s = n('aDaG');
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function d() {
        if ('function' != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function f(e) {
        return (f =
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
      function p(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function h(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function v(e, t, n) {
        return t && h(e.prototype, t), n && h(e, n), e;
      }
      function g(e, t) {
        return !t || ('object' !== f(t) && 'function' != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e)
          : t;
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function y(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && m(e, t);
      }
      function m(e, t) {
        return (m =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
    },
    E9Q6: function (e, t, n) {
      'use strict';
      function r(e, t) {
        return { x: e.x + t.x, y: e.y + t.y };
      }
      function o(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.add = r),
        (t.subtract = o),
        (t.getSourceClientOffset = function (e) {
          var t = e.clientOffset,
            n = e.initialClientOffset,
            i = e.initialSourceClientOffset;
          if (!t || !n || !i) return null;
          return o(r(t, i), n);
        }),
        (t.getDifferenceFromInitialOffset = function (e) {
          var t = e.clientOffset,
            n = e.initialClientOffset;
          if (!t || !n) return null;
          return o(t, n);
        });
    },
    Ed17: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          return (
            Object.keys(e).forEach(function (t) {
              (0, o.default)(
                u.indexOf(t) > -1,
                'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
                u.join(', '),
                t,
              ),
                (0, o.default)(
                  'function' == typeof e[t],
                  'Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
                  t,
                  t,
                  e[t],
                );
            }),
            function (t, n) {
              return new c(e, t, n);
            }
          );
        });
      var r,
        o = (r = n('QLaP')) && r.__esModule ? r : { default: r },
        i = (n('GanS'), n('aDaG'));
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var u = ['canDrop', 'hover', 'drop'],
        c = (function () {
          function e(t, n, r) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.props = null),
              (this.spec = t),
              (this.monitor = n),
              (this.ref = r);
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: 'receiveProps',
                value: function (e) {
                  this.props = e;
                },
              },
              {
                key: 'receiveMonitor',
                value: function (e) {
                  this.monitor = e;
                },
              },
              {
                key: 'canDrop',
                value: function () {
                  return (
                    !this.spec.canDrop ||
                    this.spec.canDrop(this.props, this.monitor)
                  );
                },
              },
              {
                key: 'hover',
                value: function () {
                  this.spec.hover &&
                    this.spec.hover(
                      this.props,
                      this.monitor,
                      (0, i.getDecoratedComponent)(this.ref),
                    );
                },
              },
              {
                key: 'drop',
                value: function () {
                  if (this.spec.drop)
                    return this.spec.drop(
                      this.props,
                      this.monitor,
                      this.ref.current,
                    );
                },
              },
            ]) && a(t.prototype, n),
            r && a(t, r),
            e
          );
        })();
    },
    EvtC: function (e, t, n) {
      e.exports = { button: 'button-2-lC3gh4' };
    },
    FeGr: function (e, t, n) {
      'use strict';
      (function (t) {
        function n(e) {
          o.length || (r(), !0), (o[o.length] = e);
        }
        e.exports = n;
        var r,
          o = [],
          i = 0;
        function a() {
          for (; i < o.length; ) {
            var e = i;
            if (((i += 1), o[e].call(), i > 1024)) {
              for (var t = 0, n = o.length - i; t < n; t++) o[t] = o[t + i];
              (o.length -= i), (i = 0);
            }
          }
          (o.length = 0), (i = 0), !1;
        }
        var u,
          c,
          s,
          l = void 0 !== t ? t : self,
          d = l.MutationObserver || l.WebKitMutationObserver;
        function f(e) {
          return function () {
            var t = setTimeout(r, 0),
              n = setInterval(r, 50);
            function r() {
              clearTimeout(t), clearInterval(n), e();
            }
          };
        }
        'function' == typeof d
          ? ((u = 1),
            (c = new d(a)),
            (s = document.createTextNode('')),
            c.observe(s, { characterData: !0 }),
            (r = function () {
              (u = -u), (s.data = u);
            }))
          : (r = f(a)),
          (n.requestFlush = r),
          (n.makeRequestCallFromTimer = f);
      }.call(this, n('yLpj')));
    },
    'G/LZ': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : s,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.payload;
          switch (t.type) {
            case r.BEGIN_DRAG:
              return u({}, e, {
                itemType: n.itemType,
                item: n.item,
                sourceId: n.sourceId,
                isSourcePublic: n.isSourcePublic,
                dropResult: null,
                didDrop: !1,
              });
            case r.PUBLISH_DRAG_SOURCE:
              return u({}, e, { isSourcePublic: !0 });
            case r.HOVER:
              return u({}, e, { targetIds: n.targetIds });
            case o.REMOVE_TARGET:
              return -1 === e.targetIds.indexOf(n.targetId)
                ? e
                : u({}, e, {
                    targetIds: (0, i.without)(e.targetIds, n.targetId),
                  });
            case r.DROP:
              return u({}, e, {
                dropResult: n.dropResult,
                didDrop: !0,
                targetIds: [],
              });
            case r.END_DRAG:
              return u({}, e, {
                itemType: null,
                item: null,
                sourceId: null,
                dropResult: null,
                didDrop: !1,
                isSourcePublic: null,
                targetIds: [],
              });
            default:
              return e;
          }
        });
      var r = n('zLS0'),
        o = n('Uyss'),
        i = n('rTKX');
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                c(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function c(e, t, n) {
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
      var s = {
        itemType: null,
        item: null,
        sourceId: null,
        targetIds: [],
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
      };
    },
    GA2J: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.validateSourceContract = function (e) {
          (0, o.default)(
            'function' == typeof e.canDrag,
            'Expected canDrag to be a function.',
          ),
            (0, o.default)(
              'function' == typeof e.beginDrag,
              'Expected beginDrag to be a function.',
            ),
            (0, o.default)(
              'function' == typeof e.endDrag,
              'Expected endDrag to be a function.',
            );
        }),
        (t.validateTargetContract = function (e) {
          (0, o.default)(
            'function' == typeof e.canDrop,
            'Expected canDrop to be a function.',
          ),
            (0, o.default)(
              'function' == typeof e.hover,
              'Expected hover to be a function.',
            ),
            (0, o.default)(
              'function' == typeof e.drop,
              'Expected beginDrag to be a function.',
            );
        }),
        (t.validateType = function e(t, n) {
          if (n && Array.isArray(t))
            return void t.forEach(function (t) {
              return e(t, !1);
            });
          (0, o.default)(
            'string' == typeof t || 'symbol' === i(t),
            n
              ? 'Type can only be a string, a symbol, or an array of either.'
              : 'Type can only be a string or a symbol.',
          );
        });
      var r,
        o = (r = n('QLaP')) && r.__esModule ? r : { default: r };
      function i(e) {
        return (i =
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
    },
    GanS: function (e, t, n) {
      'use strict';
      function r(e) {
        return (r =
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
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isFunction = function (e) {
          return 'function' == typeof e;
        }),
        (t.noop = function () {}),
        (t.isPlainObject = function (e) {
          if (
            !(function (e) {
              return 'object' === r(e) && null !== e;
            })(e)
          )
            return !1;
          if (null === Object.getPrototypeOf(e)) return !0;
          var t = e;
          for (; null !== Object.getPrototypeOf(t); )
            t = Object.getPrototypeOf(t);
          return Object.getPrototypeOf(e) === t;
        });
    },
    GjMU: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.086 6.207a2 2 0 0 1 2.828 0l1.879 1.879a2 2 0 0 1 0 2.828l-.94.94-9 9-1 1-.146.146H6v-4.707l.146-.146 1-1 9-9 .94-.94zm2.121.707a1 1 0 0 0-1.414 0l-.586.586 1.647 1.646 1.646 1.647.586-.586a1 1 0 0 0 0-1.414l-1.879-1.879zm.586 4.586L18.5 10.207 10.207 18.5l1.293 1.293 8.293-8.293zm-9 9l-1.647-1.646L7.5 17.207l-.5.5V21h3.293l.5-.5zm-2.586-4L9.5 17.793 17.793 9.5 16.5 8.207 8.207 16.5z"/></svg>';
    },
    GrOC: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.SourceConnector = void 0);
      var r = a(n('U8ip')),
        o = n('sSbr'),
        i = a(n('Gytx'));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var c = (function () {
        function e(t) {
          var n = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.hooks = (0, r.default)({
              dragSource: function (e, t) {
                n.clearDragSource(),
                  (n.dragSourceOptions = t || null),
                  (0, o.isRef)(e)
                    ? (n.dragSourceRef = e)
                    : (n.dragSourceNode = e),
                  n.reconnectDragSource();
              },
              dragPreview: function (e, t) {
                n.clearDragPreview(),
                  (n.dragPreviewOptions = t || null),
                  (0, o.isRef)(e)
                    ? (n.dragPreviewRef = e)
                    : (n.dragPreviewNode = e),
                  n.reconnectDragPreview();
              },
            })),
            (this.handlerId = null),
            (this.dragSourceRef = null),
            (this.dragSourceOptionsInternal = null),
            (this.dragPreviewRef = null),
            (this.dragPreviewOptionsInternal = null),
            (this.lastConnectedHandlerId = null),
            (this.lastConnectedDragSource = null),
            (this.lastConnectedDragSourceOptions = null),
            (this.lastConnectedDragPreview = null),
            (this.lastConnectedDragPreviewOptions = null),
            (this.backend = t);
        }
        var t, n, a;
        return (
          (t = e),
          (n = [
            {
              key: 'receiveHandlerId',
              value: function (e) {
                this.handlerId !== e &&
                  ((this.handlerId = e), this.reconnect());
              },
            },
            {
              key: 'reconnect',
              value: function () {
                this.reconnectDragSource(), this.reconnectDragPreview();
              },
            },
            {
              key: 'reconnectDragSource',
              value: function () {
                var e = this.dragSource,
                  t =
                    this.didHandlerIdChange() ||
                    this.didConnectedDragSourceChange() ||
                    this.didDragSourceOptionsChange();
                t && this.disconnectDragSource(),
                  this.handlerId &&
                    (e
                      ? t &&
                        ((this.lastConnectedHandlerId = this.handlerId),
                        (this.lastConnectedDragSource = e),
                        (this.lastConnectedDragSourceOptions = this.dragSourceOptions),
                        (this.dragSourceUnsubscribe = this.backend.connectDragSource(
                          this.handlerId,
                          e,
                          this.dragSourceOptions,
                        )))
                      : (this.lastConnectedDragSource = e));
              },
            },
            {
              key: 'reconnectDragPreview',
              value: function () {
                var e = this.dragPreview,
                  t =
                    this.didHandlerIdChange() ||
                    this.didConnectedDragPreviewChange() ||
                    this.didDragPreviewOptionsChange();
                this.handlerId
                  ? this.dragPreview &&
                    t &&
                    ((this.lastConnectedHandlerId = this.handlerId),
                    (this.lastConnectedDragPreview = e),
                    (this.lastConnectedDragPreviewOptions = this.dragPreviewOptions),
                    this.disconnectDragPreview(),
                    (this.dragPreviewUnsubscribe = this.backend.connectDragPreview(
                      this.handlerId,
                      e,
                      this.dragPreviewOptions,
                    )))
                  : this.disconnectDragPreview();
              },
            },
            {
              key: 'didHandlerIdChange',
              value: function () {
                return this.lastConnectedHandlerId !== this.handlerId;
              },
            },
            {
              key: 'didConnectedDragSourceChange',
              value: function () {
                return this.lastConnectedDragSource !== this.dragSource;
              },
            },
            {
              key: 'didConnectedDragPreviewChange',
              value: function () {
                return this.lastConnectedDragPreview !== this.dragPreview;
              },
            },
            {
              key: 'didDragSourceOptionsChange',
              value: function () {
                return !(0, i.default)(
                  this.lastConnectedDragSourceOptions,
                  this.dragSourceOptions,
                );
              },
            },
            {
              key: 'didDragPreviewOptionsChange',
              value: function () {
                return !(0, i.default)(
                  this.lastConnectedDragPreviewOptions,
                  this.dragPreviewOptions,
                );
              },
            },
            {
              key: 'disconnectDragSource',
              value: function () {
                this.dragSourceUnsubscribe &&
                  (this.dragSourceUnsubscribe(),
                  (this.dragSourceUnsubscribe = void 0));
              },
            },
            {
              key: 'disconnectDragPreview',
              value: function () {
                this.dragPreviewUnsubscribe &&
                  (this.dragPreviewUnsubscribe(),
                  (this.dragPreviewUnsubscribe = void 0),
                  (this.dragPreviewNode = null),
                  (this.dragPreviewRef = null));
              },
            },
            {
              key: 'clearDragSource',
              value: function () {
                (this.dragSourceNode = null), (this.dragSourceRef = null);
              },
            },
            {
              key: 'clearDragPreview',
              value: function () {
                (this.dragPreviewNode = null), (this.dragPreviewRef = null);
              },
            },
            {
              key: 'connectTarget',
              get: function () {
                return this.dragSource;
              },
            },
            {
              key: 'dragSourceOptions',
              get: function () {
                return this.dragSourceOptionsInternal;
              },
              set: function (e) {
                this.dragSourceOptionsInternal = e;
              },
            },
            {
              key: 'dragPreviewOptions',
              get: function () {
                return this.dragPreviewOptionsInternal;
              },
              set: function (e) {
                this.dragPreviewOptionsInternal = e;
              },
            },
            {
              key: 'dragSource',
              get: function () {
                return (
                  this.dragSourceNode ||
                  (this.dragSourceRef && this.dragSourceRef.current)
                );
              },
            },
            {
              key: 'dragPreview',
              get: function () {
                return (
                  this.dragPreviewNode ||
                  (this.dragPreviewRef && this.dragPreviewRef.current)
                );
              },
            },
          ]) && u(t.prototype, n),
          a && u(t, a),
          e
        );
      })();
      t.SourceConnector = c;
    },
    Gytx: function (e, t) {
      e.exports = function (e, t, n, r) {
        var o = n ? n.call(r, e, t) : void 0;
        if (void 0 !== o) return !!o;
        if (e === t) return !0;
        if ('object' != typeof e || !e || 'object' != typeof t || !t) return !1;
        var i = Object.keys(e),
          a = Object.keys(t);
        if (i.length !== a.length) return !1;
        for (
          var u = Object.prototype.hasOwnProperty.bind(t), c = 0;
          c < i.length;
          c++
        ) {
          var s = i[c];
          if (!u(s)) return !1;
          var l = e[s],
            d = t[s];
          if (
            !1 === (o = n ? n.call(r, l, d, s) : void 0) ||
            (void 0 === o && l !== d)
          )
            return !1;
        }
        return !0;
      };
    },
    'IEa/': function (e, t, n) {
      'use strict';
      var r = n('FeGr'),
        o = [],
        i = [],
        a = r.makeRequestCallFromTimer(function () {
          if (i.length) throw i.shift();
        });
      function u(e) {
        var t;
        ((t = o.length ? o.pop() : new c()).task = e), r(t);
      }
      function c() {
        this.task = null;
      }
      (e.exports = u),
        (c.prototype.call = function () {
          try {
            this.task.call();
          } catch (e) {
            u.onerror ? u.onerror(e) : (i.push(e), a());
          } finally {
            (this.task = null), (o[o.length] = this);
          }
        });
    },
    KMov: function (e, t, n) {
      'use strict';
      var r;
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getEmptyImage = function () {
          r ||
            ((r = new Image()).src =
              'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==');
          return r;
        });
    },
    Kj17: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.createDragDropManager = function (e, t, n, r) {
          var i = new o.default(r),
            a = e(i, t, n);
          return i.receiveBackend(a), i;
        });
      var r,
        o = (r = n('laIQ')) && r.__esModule ? r : { default: r };
    },
    Lvbb: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('iI3E');
      Object.keys(r).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return r[e];
            },
          });
      });
      var o = n('Kj17');
      Object.keys(o).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return o[e];
            },
          });
      });
    },
    NhaM: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 11.5v8a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-8m-17 0v-4a1 1 0 0 1 1-1h4l2 2h9a1 1 0 0 1 1 1v2m-17 0h17"/></svg>';
    },
    O5am: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.useDrop = function (e) {
          var t = (0, o.useRef)(e);
          (t.current = e),
            (0, i.default)(null != e.accept, 'accept must be defined');
          var n =
              ((l = (0, c.useDropTargetMonitor)()),
              (d = 2),
              (function (e) {
                if (Array.isArray(e)) return e;
              })(l) ||
                (function (e, t) {
                  if (
                    Symbol.iterator in Object(e) ||
                    '[object Arguments]' === Object.prototype.toString.call(e)
                  ) {
                    var n = [],
                      r = !0,
                      o = !1,
                      i = void 0;
                    try {
                      for (
                        var a, u = e[Symbol.iterator]();
                        !(r = (a = u.next()).done) &&
                        (n.push(a.value), !t || n.length !== t);
                        r = !0
                      );
                    } catch (c) {
                      (o = !0), (i = c);
                    } finally {
                      try {
                        r || null == u.return || u.return();
                      } finally {
                        if (o) throw i;
                      }
                    }
                    return n;
                  }
                })(l, d) ||
                (function () {
                  throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance',
                  );
                })()),
            r = n[0],
            s = n[1];
          var l, d;
          (0, c.useDropHandler)(t, r, s);
          var f = (0, a.useMonitorOutput)(
              r,
              t.current.collect ||
                function () {
                  return {};
                },
              function () {
                return s.reconnect();
              },
            ),
            p = (0, o.useMemo)(
              function () {
                return s.hooks.dropTarget();
              },
              [s],
            );
          return (
            (0, u.useIsomorphicLayoutEffect)(
              function () {
                (s.dropTargetOptions = e.options || null), s.reconnect();
              },
              [e.options],
            ),
            [f, p]
          );
        });
      var r,
        o = n('q1tI'),
        i = (r = n('QLaP')) && r.__esModule ? r : { default: r },
        a = n('6ccc'),
        u = n('7bhs'),
        c = n('S0fd');
    },
    OLLy: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r,
        o = (r = n('mIZF')) && r.__esModule ? r : { default: r },
        i = n('zAsM'),
        a = n('mGlc'),
        u = n('Okv0'),
        c = (function (e) {
          if (e && e.__esModule) return e;
          var t = l();
          if (t && t.has(e)) return t.get(e);
          var n = {};
          if (null != e) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
              if (Object.prototype.hasOwnProperty.call(e, o)) {
                var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                i && (i.get || i.set)
                  ? Object.defineProperty(n, o, i)
                  : (n[o] = e[o]);
              }
          }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n('DC3H')),
        s = n('bsf8');
      function l() {
        if ('function' != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(n, !0).forEach(function (t) {
                p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(n).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function p(e, t, n) {
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
      function h(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var v = (function () {
        function e(t, n) {
          var r = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.sourcePreviewNodes = new Map()),
            (this.sourcePreviewNodeOptions = new Map()),
            (this.sourceNodes = new Map()),
            (this.sourceNodeOptions = new Map()),
            (this.dragStartSourceIds = null),
            (this.dropTargetIds = []),
            (this.dragEnterTargetIds = []),
            (this.currentNativeSource = null),
            (this.currentNativeHandle = null),
            (this.currentDragSourceNode = null),
            (this.altKeyPressed = !1),
            (this.mouseMoveTimeoutTimer = null),
            (this.asyncEndDragFrameId = null),
            (this.dragOverTargetIds = null),
            (this.getSourceClientOffset = function (e) {
              return (0, a.getNodeClientOffset)(r.sourceNodes.get(e));
            }),
            (this.endDragNativeItem = function () {
              r.isDraggingNativeItem() &&
                (r.actions.endDrag(),
                r.registry.removeSource(r.currentNativeHandle),
                (r.currentNativeHandle = null),
                (r.currentNativeSource = null));
            }),
            (this.isNodeInDocument = function (e) {
              return r.document && r.document.body && document.body.contains(e);
            }),
            (this.endDragIfSourceWasRemovedFromDOM = function () {
              var e = r.currentDragSourceNode;
              r.isNodeInDocument(e) ||
                (r.clearCurrentDragSourceNode() && r.actions.endDrag());
            }),
            (this.handleTopDragStartCapture = function () {
              r.clearCurrentDragSourceNode(), (r.dragStartSourceIds = []);
            }),
            (this.handleTopDragStart = function (e) {
              if (!e.defaultPrevented) {
                var t = r.dragStartSourceIds;
                r.dragStartSourceIds = null;
                var n = (0, a.getEventClientOffset)(e);
                r.monitor.isDragging() && r.actions.endDrag(),
                  r.actions.beginDrag(t || [], {
                    publishSource: !1,
                    getSourceClientOffset: r.getSourceClientOffset,
                    clientOffset: n,
                  });
                var o = e.dataTransfer,
                  i = (0, u.matchNativeItemType)(o);
                if (r.monitor.isDragging()) {
                  if (o && 'function' == typeof o.setDragImage) {
                    var c = r.monitor.getSourceId(),
                      s = r.sourceNodes.get(c),
                      l = r.sourcePreviewNodes.get(c) || s;
                    if (l) {
                      var d = r.getCurrentSourcePreviewNodeOptions(),
                        f = { anchorX: d.anchorX, anchorY: d.anchorY },
                        p = { offsetX: d.offsetX, offsetY: d.offsetY },
                        h = (0, a.getDragPreviewOffset)(s, l, n, f, p);
                      o.setDragImage(l, h.x, h.y);
                    }
                  }
                  try {
                    o.setData('application/json', {});
                  } catch (v) {}
                  r.setCurrentDragSourceNode(e.target),
                    r.getCurrentSourcePreviewNodeOptions().captureDraggingState
                      ? r.actions.publishDragSource()
                      : setTimeout(function () {
                          return r.actions.publishDragSource();
                        }, 0);
                } else if (i) r.beginDragNativeItem(i);
                else {
                  if (
                    o &&
                    !o.types &&
                    ((e.target && !e.target.hasAttribute) ||
                      !e.target.hasAttribute('draggable'))
                  )
                    return;
                  e.preventDefault();
                }
              }
            }),
            (this.handleTopDragEndCapture = function () {
              r.clearCurrentDragSourceNode() && r.actions.endDrag();
            }),
            (this.handleTopDragEnterCapture = function (e) {
              if (
                ((r.dragEnterTargetIds = []),
                r.enterLeaveCounter.enter(e.target) && !r.monitor.isDragging())
              ) {
                var t = e.dataTransfer,
                  n = (0, u.matchNativeItemType)(t);
                n && r.beginDragNativeItem(n);
              }
            }),
            (this.handleTopDragEnter = function (e) {
              var t = r.dragEnterTargetIds;
              ((r.dragEnterTargetIds = []), r.monitor.isDragging()) &&
                ((r.altKeyPressed = e.altKey),
                (0, i.isFirefox)() ||
                  r.actions.hover(t, {
                    clientOffset: (0, a.getEventClientOffset)(e),
                  }),
                t.some(function (e) {
                  return r.monitor.canDropOnTarget(e);
                }) &&
                  (e.preventDefault(),
                  e.dataTransfer &&
                    (e.dataTransfer.dropEffect = r.getCurrentDropEffect())));
            }),
            (this.handleTopDragOverCapture = function () {
              r.dragOverTargetIds = [];
            }),
            (this.handleTopDragOver = function (e) {
              var t = r.dragOverTargetIds;
              if (((r.dragOverTargetIds = []), !r.monitor.isDragging()))
                return (
                  e.preventDefault(),
                  void (e.dataTransfer && (e.dataTransfer.dropEffect = 'none'))
                );
              (r.altKeyPressed = e.altKey),
                r.actions.hover(t || [], {
                  clientOffset: (0, a.getEventClientOffset)(e),
                }),
                (t || []).some(function (e) {
                  return r.monitor.canDropOnTarget(e);
                })
                  ? (e.preventDefault(),
                    e.dataTransfer &&
                      (e.dataTransfer.dropEffect = r.getCurrentDropEffect()))
                  : r.isDraggingNativeItem()
                  ? e.preventDefault()
                  : (e.preventDefault(),
                    e.dataTransfer && (e.dataTransfer.dropEffect = 'none'));
            }),
            (this.handleTopDragLeaveCapture = function (e) {
              r.isDraggingNativeItem() && e.preventDefault(),
                r.enterLeaveCounter.leave(e.target) &&
                  r.isDraggingNativeItem() &&
                  r.endDragNativeItem();
            }),
            (this.handleTopDropCapture = function (e) {
              (r.dropTargetIds = []),
                e.preventDefault(),
                r.isDraggingNativeItem() &&
                  r.currentNativeSource.mutateItemByReadingDataTransfer(
                    e.dataTransfer,
                  ),
                r.enterLeaveCounter.reset();
            }),
            (this.handleTopDrop = function (e) {
              var t = r.dropTargetIds;
              (r.dropTargetIds = []),
                r.actions.hover(t, {
                  clientOffset: (0, a.getEventClientOffset)(e),
                }),
                r.actions.drop({ dropEffect: r.getCurrentDropEffect() }),
                r.isDraggingNativeItem()
                  ? r.endDragNativeItem()
                  : r.endDragIfSourceWasRemovedFromDOM();
            }),
            (this.handleSelectStart = function (e) {
              var t = e.target;
              'function' == typeof t.dragDrop &&
                ('INPUT' === t.tagName ||
                  'SELECT' === t.tagName ||
                  'TEXTAREA' === t.tagName ||
                  t.isContentEditable ||
                  (e.preventDefault(), t.dragDrop()));
            }),
            (this.options = new s.OptionsReader(n)),
            (this.actions = t.getActions()),
            (this.monitor = t.getMonitor()),
            (this.registry = t.getRegistry()),
            (this.enterLeaveCounter = new o.default(this.isNodeInDocument));
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: 'setup',
              value: function () {
                if (void 0 !== this.window) {
                  if (this.window.__isReactDndBackendSetUp)
                    throw new Error(
                      'Cannot have two HTML5 backends at the same time.',
                    );
                  (this.window.__isReactDndBackendSetUp = !0),
                    this.addEventListeners(this.window);
                }
              },
            },
            {
              key: 'teardown',
              value: function () {
                void 0 !== this.window &&
                  ((this.window.__isReactDndBackendSetUp = !1),
                  this.removeEventListeners(this.window),
                  this.clearCurrentDragSourceNode(),
                  this.asyncEndDragFrameId &&
                    this.window.cancelAnimationFrame(this.asyncEndDragFrameId));
              },
            },
            {
              key: 'connectDragPreview',
              value: function (e, t, n) {
                var r = this;
                return (
                  this.sourcePreviewNodeOptions.set(e, n),
                  this.sourcePreviewNodes.set(e, t),
                  function () {
                    r.sourcePreviewNodes.delete(e),
                      r.sourcePreviewNodeOptions.delete(e);
                  }
                );
              },
            },
            {
              key: 'connectDragSource',
              value: function (e, t, n) {
                var r = this;
                this.sourceNodes.set(e, t), this.sourceNodeOptions.set(e, n);
                var o = function (t) {
                    return r.handleDragStart(t, e);
                  },
                  i = function (e) {
                    return r.handleSelectStart(e);
                  };
                return (
                  t.setAttribute('draggable', 'true'),
                  t.addEventListener('dragstart', o),
                  t.addEventListener('selectstart', i),
                  function () {
                    r.sourceNodes.delete(e),
                      r.sourceNodeOptions.delete(e),
                      t.removeEventListener('dragstart', o),
                      t.removeEventListener('selectstart', i),
                      t.setAttribute('draggable', 'false');
                  }
                );
              },
            },
            {
              key: 'connectDropTarget',
              value: function (e, t) {
                var n = this,
                  r = function (t) {
                    return n.handleDragEnter(t, e);
                  },
                  o = function (t) {
                    return n.handleDragOver(t, e);
                  },
                  i = function (t) {
                    return n.handleDrop(t, e);
                  };
                return (
                  t.addEventListener('dragenter', r),
                  t.addEventListener('dragover', o),
                  t.addEventListener('drop', i),
                  function () {
                    t.removeEventListener('dragenter', r),
                      t.removeEventListener('dragover', o),
                      t.removeEventListener('drop', i);
                  }
                );
              },
            },
            {
              key: 'addEventListeners',
              value: function (e) {
                e.addEventListener &&
                  (e.addEventListener('dragstart', this.handleTopDragStart),
                  e.addEventListener(
                    'dragstart',
                    this.handleTopDragStartCapture,
                    !0,
                  ),
                  e.addEventListener(
                    'dragend',
                    this.handleTopDragEndCapture,
                    !0,
                  ),
                  e.addEventListener('dragenter', this.handleTopDragEnter),
                  e.addEventListener(
                    'dragenter',
                    this.handleTopDragEnterCapture,
                    !0,
                  ),
                  e.addEventListener(
                    'dragleave',
                    this.handleTopDragLeaveCapture,
                    !0,
                  ),
                  e.addEventListener('dragover', this.handleTopDragOver),
                  e.addEventListener(
                    'dragover',
                    this.handleTopDragOverCapture,
                    !0,
                  ),
                  e.addEventListener('drop', this.handleTopDrop),
                  e.addEventListener('drop', this.handleTopDropCapture, !0));
              },
            },
            {
              key: 'removeEventListeners',
              value: function (e) {
                e.removeEventListener &&
                  (e.removeEventListener('dragstart', this.handleTopDragStart),
                  e.removeEventListener(
                    'dragstart',
                    this.handleTopDragStartCapture,
                    !0,
                  ),
                  e.removeEventListener(
                    'dragend',
                    this.handleTopDragEndCapture,
                    !0,
                  ),
                  e.removeEventListener('dragenter', this.handleTopDragEnter),
                  e.removeEventListener(
                    'dragenter',
                    this.handleTopDragEnterCapture,
                    !0,
                  ),
                  e.removeEventListener(
                    'dragleave',
                    this.handleTopDragLeaveCapture,
                    !0,
                  ),
                  e.removeEventListener('dragover', this.handleTopDragOver),
                  e.removeEventListener(
                    'dragover',
                    this.handleTopDragOverCapture,
                    !0,
                  ),
                  e.removeEventListener('drop', this.handleTopDrop),
                  e.removeEventListener('drop', this.handleTopDropCapture, !0));
              },
            },
            {
              key: 'getCurrentSourceNodeOptions',
              value: function () {
                var e = this.monitor.getSourceId(),
                  t = this.sourceNodeOptions.get(e);
                return f(
                  { dropEffect: this.altKeyPressed ? 'copy' : 'move' },
                  t || {},
                );
              },
            },
            {
              key: 'getCurrentDropEffect',
              value: function () {
                return this.isDraggingNativeItem()
                  ? 'copy'
                  : this.getCurrentSourceNodeOptions().dropEffect;
              },
            },
            {
              key: 'getCurrentSourcePreviewNodeOptions',
              value: function () {
                var e = this.monitor.getSourceId();
                return f(
                  { anchorX: 0.5, anchorY: 0.5, captureDraggingState: !1 },
                  this.sourcePreviewNodeOptions.get(e) || {},
                );
              },
            },
            {
              key: 'isDraggingNativeItem',
              value: function () {
                var e = this.monitor.getItemType();
                return Object.keys(c).some(function (t) {
                  return c[t] === e;
                });
              },
            },
            {
              key: 'beginDragNativeItem',
              value: function (e) {
                this.clearCurrentDragSourceNode(),
                  (this.currentNativeSource = (0, u.createNativeDragSource)(e)),
                  (this.currentNativeHandle = this.registry.addSource(
                    e,
                    this.currentNativeSource,
                  )),
                  this.actions.beginDrag([this.currentNativeHandle]);
              },
            },
            {
              key: 'setCurrentDragSourceNode',
              value: function (e) {
                var t = this;
                this.clearCurrentDragSourceNode(),
                  (this.currentDragSourceNode = e),
                  (this.mouseMoveTimeoutTimer = setTimeout(function () {
                    return (
                      t.window &&
                      t.window.addEventListener(
                        'mousemove',
                        t.endDragIfSourceWasRemovedFromDOM,
                        !0,
                      )
                    );
                  }, 1e3));
              },
            },
            {
              key: 'clearCurrentDragSourceNode',
              value: function () {
                return (
                  !!this.currentDragSourceNode &&
                  ((this.currentDragSourceNode = null),
                  this.window &&
                    (this.window.clearTimeout(
                      this.mouseMoveTimeoutTimer || void 0,
                    ),
                    this.window.removeEventListener(
                      'mousemove',
                      this.endDragIfSourceWasRemovedFromDOM,
                      !0,
                    )),
                  (this.mouseMoveTimeoutTimer = null),
                  !0)
                );
              },
            },
            {
              key: 'handleDragStart',
              value: function (e, t) {
                e.defaultPrevented ||
                  (this.dragStartSourceIds || (this.dragStartSourceIds = []),
                  this.dragStartSourceIds.unshift(t));
              },
            },
            {
              key: 'handleDragEnter',
              value: function (e, t) {
                this.dragEnterTargetIds.unshift(t);
              },
            },
            {
              key: 'handleDragOver',
              value: function (e, t) {
                null === this.dragOverTargetIds &&
                  (this.dragOverTargetIds = []),
                  this.dragOverTargetIds.unshift(t);
              },
            },
            {
              key: 'handleDrop',
              value: function (e, t) {
                this.dropTargetIds.unshift(t);
              },
            },
            {
              key: 'window',
              get: function () {
                return this.options.window;
              },
            },
            {
              key: 'document',
              get: function () {
                return this.options.document;
              },
            },
          ]) && h(t.prototype, n),
          r && h(t, r),
          e
        );
      })();
      t.default = v;
    },
    Okv0: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.createNativeDragSource = function (e) {
          return new o.NativeDragSource(r.nativeTypesConfig[e]);
        }),
        (t.matchNativeItemType = function (e) {
          if (!e) return null;
          var t = Array.prototype.slice.call(e.types || []);
          return (
            Object.keys(r.nativeTypesConfig).filter(function (e) {
              return r.nativeTypesConfig[e].matchesTypes.some(function (e) {
                return t.indexOf(e) > -1;
              });
            })[0] || null
          );
        });
      var r = n('XyX9'),
        o = n('yupZ');
    },
    QLaP: function (e, t, n) {
      'use strict';
      e.exports = function (e, t, n, r, o, i, a, u) {
        if (!e) {
          var c;
          if (void 0 === t)
            c = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
            );
          else {
            var s = [n, r, o, i, a, u],
              l = 0;
            (c = new Error(
              t.replace(/%s/g, function () {
                return s[l++];
              }),
            )).name = 'Invariant Violation';
          }
          throw ((c.framesToPop = 1), c);
        }
      };
    },
    'Rvb+': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          return function () {
            var t = e.getMonitor(),
              n = e.getRegistry();
            !(function (e) {
              (0, o.default)(
                e.isDragging(),
                'Cannot call endDrag while not dragging.',
              );
            })(t);
            var r = t.getSourceId();
            return (
              n.getSource(r, !0).endDrag(t, r),
              n.unpinSource(),
              { type: i.END_DRAG }
            );
          };
        });
      var r,
        o = (r = n('QLaP')) && r.__esModule ? r : { default: r },
        i = n('/yIc');
    },
    S0fd: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.useDropTargetMonitor = function () {
          var e = (0, i.useDragDropManager)(),
            t = (0, r.useMemo)(
              function () {
                return new u.DropTargetMonitorImpl(e);
              },
              [e],
            ),
            n = (0, r.useMemo)(
              function () {
                return new a.TargetConnector(e.getBackend());
              },
              [e],
            );
          return [t, n];
        }),
        (t.useDropHandler = function (e, t, n) {
          var a = (0, i.useDragDropManager)(),
            u = (0, r.useMemo)(
              function () {
                return {
                  canDrop: function () {
                    var n = e.current.canDrop;
                    return !n || n(t.getItem(), t);
                  },
                  hover: function () {
                    var n = e.current.hover;
                    n && n(t.getItem(), t);
                  },
                  drop: function () {
                    var n = e.current.drop;
                    if (n) return n(t.getItem(), t);
                  },
                };
              },
              [t],
            );
          (0, c.useIsomorphicLayoutEffect)(
            function () {
              var r,
                i,
                c = (0, o.registerTarget)(e.current.accept, u, a),
                s =
                  ((i = 2),
                  (function (e) {
                    if (Array.isArray(e)) return e;
                  })((r = c)) ||
                    (function (e, t) {
                      if (
                        Symbol.iterator in Object(e) ||
                        '[object Arguments]' ===
                          Object.prototype.toString.call(e)
                      ) {
                        var n = [],
                          r = !0,
                          o = !1,
                          i = void 0;
                        try {
                          for (
                            var a, u = e[Symbol.iterator]();
                            !(r = (a = u.next()).done) &&
                            (n.push(a.value), !t || n.length !== t);
                            r = !0
                          );
                        } catch (c) {
                          (o = !0), (i = c);
                        } finally {
                          try {
                            r || null == u.return || u.return();
                          } finally {
                            if (o) throw i;
                          }
                        }
                        return n;
                      }
                    })(r, i) ||
                    (function () {
                      throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance',
                      );
                    })()),
                l = s[0],
                d = s[1];
              return t.receiveHandlerId(l), n.receiveHandlerId(l), d;
            },
            [t, n],
          );
        });
      var r = n('q1tI'),
        o = n('lAcH'),
        i = n('gArw'),
        a = n('Tw7s'),
        u = n('z3uI'),
        c = n('7bhs');
    },
    'T+8Q': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.DragSourceMonitorImpl = void 0);
      var r,
        o = (r = n('QLaP')) && r.__esModule ? r : { default: r };
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var a = !1,
        u = !1,
        c = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.sourceId = null),
              (this.internalMonitor = t.getMonitor());
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: 'receiveHandlerId',
                value: function (e) {
                  this.sourceId = e;
                },
              },
              {
                key: 'getHandlerId',
                value: function () {
                  return this.sourceId;
                },
              },
              {
                key: 'canDrag',
                value: function () {
                  (0, o.default)(
                    !a,
                    'You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor',
                  );
                  try {
                    return (
                      (a = !0),
                      this.internalMonitor.canDragSource(this.sourceId)
                    );
                  } finally {
                    a = !1;
                  }
                },
              },
              {
                key: 'isDragging',
                value: function () {
                  if (!this.sourceId) return !1;
                  (0, o.default)(
                    !u,
                    'You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor',
                  );
                  try {
                    return (
                      (u = !0),
                      this.internalMonitor.isDraggingSource(this.sourceId)
                    );
                  } finally {
                    u = !1;
                  }
                },
              },
              {
                key: 'subscribeToStateChange',
                value: function (e, t) {
                  return this.internalMonitor.subscribeToStateChange(e, t);
                },
              },
              {
                key: 'isDraggingSource',
                value: function (e) {
                  return this.internalMonitor.isDraggingSource(e);
                },
              },
              {
                key: 'isOverTarget',
                value: function (e, t) {
                  return this.internalMonitor.isOverTarget(e, t);
                },
              },
              {
                key: 'getTargetIds',
                value: function () {
                  return this.internalMonitor.getTargetIds();
                },
              },
              {
                key: 'isSourcePublic',
                value: function () {
                  return this.internalMonitor.isSourcePublic();
                },
              },
              {
                key: 'getSourceId',
                value: function () {
                  return this.internalMonitor.getSourceId();
                },
              },
              {
                key: 'subscribeToOffsetChange',
                value: function (e) {
                  return this.internalMonitor.subscribeToOffsetChange(e);
                },
              },
              {
                key: 'canDragSource',
                value: function (e) {
                  return this.internalMonitor.canDragSource(e);
                },
              },
              {
                key: 'canDropOnTarget',
                value: function (e) {
                  return this.internalMonitor.canDropOnTarget(e);
                },
              },
              {
                key: 'getItemType',
                value: function () {
                  return this.internalMonitor.getItemType();
                },
              },
              {
                key: 'getItem',
                value: function () {
                  return this.internalMonitor.getItem();
                },
              },
              {
                key: 'getDropResult',
                value: function () {
                  return this.internalMonitor.getDropResult();
                },
              },
              {
                key: 'didDrop',
                value: function () {
                  return this.internalMonitor.didDrop();
                },
              },
              {
                key: 'getInitialClientOffset',
                value: function () {
                  return this.internalMonitor.getInitialClientOffset();
                },
              },
              {
                key: 'getInitialSourceClientOffset',
                value: function () {
                  return this.internalMonitor.getInitialSourceClientOffset();
                },
              },
              {
                key: 'getSourceClientOffset',
                value: function () {
                  return this.internalMonitor.getSourceClientOffset();
                },
              },
              {
                key: 'getClientOffset',
                value: function () {
                  return this.internalMonitor.getClientOffset();
                },
              },
              {
                key: 'getDifferenceFromInitialOffset',
                value: function () {
                  return this.internalMonitor.getDifferenceFromInitialOffset();
                },
              },
            ]) && i(t.prototype, n),
            r && i(t, r),
            e
          );
        })();
      t.DragSourceMonitorImpl = c;
    },
    TF3m: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          return (
            Object.keys(e).forEach(function (t) {
              (0, o.default)(
                u.indexOf(t) > -1,
                'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
                u.join(', '),
                t,
              ),
                (0, o.default)(
                  'function' == typeof e[t],
                  'Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
                  t,
                  t,
                  e[t],
                );
            }),
            c.forEach(function (t) {
              (0,
              o.default)('function' == typeof e[t], 'Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', t, t, e[t]);
            }),
            function (t, n) {
              return new s(e, t, n);
            }
          );
        });
      var r,
        o = (r = n('QLaP')) && r.__esModule ? r : { default: r },
        i = (n('GanS'), n('aDaG'));
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var u = ['canDrag', 'beginDrag', 'isDragging', 'endDrag'],
        c = ['beginDrag'],
        s = (function () {
          function e(t, n, r) {
            var o = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.props = null),
              (this.beginDrag = function () {
                if (o.props)
                  return o.spec.beginDrag(o.props, o.monitor, o.ref.current);
              }),
              (this.spec = t),
              (this.monitor = n),
              (this.ref = r);
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: 'receiveProps',
                value: function (e) {
                  this.props = e;
                },
              },
              {
                key: 'canDrag',
                value: function () {
                  return (
                    !!this.props &&
                    (!this.spec.canDrag ||
                      this.spec.canDrag(this.props, this.monitor))
                  );
                },
              },
              {
                key: 'isDragging',
                value: function (e, t) {
                  return (
                    !!this.props &&
                    (this.spec.isDragging
                      ? this.spec.isDragging(this.props, this.monitor)
                      : t === e.getSourceId())
                  );
                },
              },
              {
                key: 'endDrag',
                value: function () {
                  this.props &&
                    this.spec.endDrag &&
                    this.spec.endDrag(
                      this.props,
                      this.monitor,
                      (0, i.getDecoratedComponent)(this.ref),
                    );
                },
              },
            ]) && a(t.prototype, n),
            r && a(t, r),
            e
          );
        })();
    },
    TM5I: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function () {
          return r++;
        });
      var r = 0;
    },
    TNeT: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('vkAp');
      Object.keys(r).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return r[e];
            },
          });
      });
      var o = n('yfz3');
      Object.keys(o).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return o[e];
            },
          });
      });
      var i = n('Def4');
      Object.keys(i).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return i[e];
            },
          });
      });
    },
    Tw7s: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.TargetConnector = void 0);
      var r = a(n('Gytx')),
        o = a(n('U8ip')),
        i = n('sSbr');
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var c = (function () {
        function e(t) {
          var n = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.hooks = (0, o.default)({
              dropTarget: function (e, t) {
                n.clearDropTarget(),
                  (n.dropTargetOptions = t),
                  (0, i.isRef)(e)
                    ? (n.dropTargetRef = e)
                    : (n.dropTargetNode = e),
                  n.reconnect();
              },
            })),
            (this.handlerId = null),
            (this.dropTargetRef = null),
            (this.dropTargetOptionsInternal = null),
            (this.lastConnectedHandlerId = null),
            (this.lastConnectedDropTarget = null),
            (this.lastConnectedDropTargetOptions = null),
            (this.backend = t);
        }
        var t, n, a;
        return (
          (t = e),
          (n = [
            {
              key: 'reconnect',
              value: function () {
                var e =
                  this.didHandlerIdChange() ||
                  this.didDropTargetChange() ||
                  this.didOptionsChange();
                e && this.disconnectDropTarget();
                var t = this.dropTarget;
                this.handlerId &&
                  (t
                    ? e &&
                      ((this.lastConnectedHandlerId = this.handlerId),
                      (this.lastConnectedDropTarget = t),
                      (this.lastConnectedDropTargetOptions = this.dropTargetOptions),
                      (this.unsubscribeDropTarget = this.backend.connectDropTarget(
                        this.handlerId,
                        t,
                        this.dropTargetOptions,
                      )))
                    : (this.lastConnectedDropTarget = t));
              },
            },
            {
              key: 'receiveHandlerId',
              value: function (e) {
                e !== this.handlerId &&
                  ((this.handlerId = e), this.reconnect());
              },
            },
            {
              key: 'didHandlerIdChange',
              value: function () {
                return this.lastConnectedHandlerId !== this.handlerId;
              },
            },
            {
              key: 'didDropTargetChange',
              value: function () {
                return this.lastConnectedDropTarget !== this.dropTarget;
              },
            },
            {
              key: 'didOptionsChange',
              value: function () {
                return !(0, r.default)(
                  this.lastConnectedDropTargetOptions,
                  this.dropTargetOptions,
                );
              },
            },
            {
              key: 'disconnectDropTarget',
              value: function () {
                this.unsubscribeDropTarget &&
                  (this.unsubscribeDropTarget(),
                  (this.unsubscribeDropTarget = void 0));
              },
            },
            {
              key: 'clearDropTarget',
              value: function () {
                (this.dropTargetRef = null), (this.dropTargetNode = null);
              },
            },
            {
              key: 'connectTarget',
              get: function () {
                return this.dropTarget;
              },
            },
            {
              key: 'dropTargetOptions',
              get: function () {
                return this.dropTargetOptionsInternal;
              },
              set: function (e) {
                this.dropTargetOptionsInternal = e;
              },
            },
            {
              key: 'dropTarget',
              get: function () {
                return (
                  this.dropTargetNode ||
                  (this.dropTargetRef && this.dropTargetRef.current)
                );
              },
            },
          ]) && u(t.prototype, n),
          a && u(t, a),
          e
        );
      })();
      t.TargetConnector = c;
    },
    'U+QY': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14.692 3.012l-12 12.277.715.699 12-12.277-.715-.699zM9.05 15.627a7.042 7.042 0 0 1-3.144-.741l.742-.76c.72.311 1.52.5 2.402.5 2.297 0 4.047-1.29 5.25-2.645a12.168 12.168 0 0 0 1.687-2.466l.007-.015-.007-.015A12.166 12.166 0 0 0 14.3 7.019c-.11-.124-.225-.247-.344-.37l.699-.715c.137.14.268.28.392.42a13.16 13.16 0 0 1 1.83 2.678 8.117 8.117 0 0 1 .119.243l.006.015.003.005v.001l-.456.204.456.203v.002l-.003.005-.006.015-.025.052a11.762 11.762 0 0 1-.461.857 13.158 13.158 0 0 1-1.463 2.011c-1.296 1.46-3.296 2.982-5.998 2.982zm7.5-6.127l.456-.203.09.203-.09.203-.456-.203zm-7.5 3.07c-.27 0-.53-.037-.778-.105l.879-.899c.999-.052 1.833-.872 1.895-1.938l.902-.923c.066.253.102.52.102.795 0 1.695-1.344 3.07-3 3.07zM6.15 10.294l.902-.923c.063-1.066.896-1.886 1.895-1.938l.879-.9a2.94 2.94 0 0 0-.777-.103c-1.657 0-3 1.374-3 3.069 0 .275.035.541.101.795zM9.05 4.373c.88 0 1.68.19 2.4.5l.743-.759a7.043 7.043 0 0 0-3.143-.74c-2.703 0-4.703 1.521-6 2.98a13.159 13.159 0 0 0-1.83 2.678 7.886 7.886 0 0 0-.118.243l-.007.015-.002.005v.001l.456.204-.457-.203-.09.203.09.203.457-.203-.456.203v.002l.002.005.007.015a4.5 4.5 0 0 0 .119.243 13.152 13.152 0 0 0 1.83 2.677c.124.14.255.28.392.42l.7-.715c-.12-.122-.235-.245-.345-.369a12.156 12.156 0 0 1-1.686-2.466L2.105 9.5l.007-.015a12.158 12.158 0 0 1 1.686-2.466C5.002 5.665 6.752 4.373 9.05 4.373z"/></svg>';
    },
    U8ip: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          var t = {};
          return (
            Object.keys(e).forEach(function (n) {
              var a = e[n];
              if (n.endsWith('Ref')) t[n] = e[n];
              else {
                var u = (function (e) {
                  return function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null;
                    if (!(0, r.isValidElement)(t)) {
                      var a = t;
                      return e(a, n), a;
                    }
                    var u = t;
                    i(u);
                    var c = n
                      ? function (t) {
                          return e(t, n);
                        }
                      : e;
                    return (0, o.cloneWithRef)(u, c);
                  };
                })(a);
                t[n] = function () {
                  return u;
                };
              }
            }),
            t
          );
        });
      var r = n('q1tI'),
        o = n('AmWu');
      function i(e) {
        if ('string' != typeof e.type) {
          var t = e.type.displayName || e.type.name || 'the component';
          throw new Error(
            'Only native element nodes can now be passed to React DnD connectors.' +
              'You can either wrap '.concat(
                t,
                ' into a <div>, or turn it into a ',
              ) +
              'drag source or a drop target itself.',
          );
        }
      }
    },
    Ux4w: function (e, t, n) {
      'use strict';
      function r() {
        if ('function' != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.DragPreviewImage = void 0);
      var o = (function (e) {
        if (e && e.__esModule) return e;
        var t = r();
        if (t && t.has(e)) return t.get(e);
        var n = {};
        if (null != e) {
          var o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, i, a)
                : (n[i] = e[i]);
            }
        }
        (n.default = e), t && t.set(e, n);
        return n;
      })(n('q1tI')).memo(function (e) {
        var t = e.connect,
          n = e.src;
        if ('undefined' != typeof Image) {
          var r = new Image();
          (r.src = n),
            (r.onload = function () {
              return t(r);
            });
        }
        return null;
      });
      (t.DragPreviewImage = o), (o.displayName = 'DragPreviewImage');
    },
    Uyss: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.addSource = function (e) {
          return { type: 'dnd-core/ADD_SOURCE', payload: { sourceId: e } };
        }),
        (t.addTarget = function (e) {
          return { type: 'dnd-core/ADD_TARGET', payload: { targetId: e } };
        }),
        (t.removeSource = function (e) {
          return { type: 'dnd-core/REMOVE_SOURCE', payload: { sourceId: e } };
        }),
        (t.removeTarget = function (e) {
          return { type: 'dnd-core/REMOVE_TARGET', payload: { targetId: e } };
        }),
        (t.REMOVE_TARGET = t.REMOVE_SOURCE = t.ADD_TARGET = t.ADD_SOURCE = void 0);
      t.ADD_SOURCE = 'dnd-core/ADD_SOURCE';
      t.ADD_TARGET = 'dnd-core/ADD_TARGET';
      t.REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
      t.REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';
    },
    UzDk: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return e + 1;
        });
    },
    Vbka: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M4.5 12.5l4.59-4.59a2 2 0 0 1 2.83 0l3.17 3.17a2 2 0 0 0 2.83 0L22.5 6.5m-8 9.5v5.5M12 19l2.5 2.5L17 19m4.5 3v-5.5M19 19l2.5-2.5L24 19"/></svg>';
    },
    WcWV: function (e, t, n) {
      e.exports = { button: 'button-2NLBEicY', disabled: 'disabled-1G2lJ8Iq' };
    },
    XyX9: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.nativeTypesConfig = void 0);
      var r,
        o = (function (e) {
          if (e && e.__esModule) return e;
          var t = a();
          if (t && t.has(e)) return t.get(e);
          var n = {};
          if (null != e) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
              if (Object.prototype.hasOwnProperty.call(e, o)) {
                var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                i && (i.get || i.set)
                  ? Object.defineProperty(n, o, i)
                  : (n[o] = e[o]);
              }
          }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n('DC3H')),
        i = n('uwyp');
      function a() {
        if ('function' != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (a = function () {
            return e;
          }),
          e
        );
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
      var c =
        (u((r = {}), o.FILE, {
          exposeProperties: {
            files: function (e) {
              return Array.prototype.slice.call(e.files);
            },
            items: function (e) {
              return e.items;
            },
          },
          matchesTypes: ['Files'],
        }),
        u(r, o.URL, {
          exposeProperties: {
            urls: function (e, t) {
              return (0, i.getDataFromDataTransfer)(e, t, '').split('\n');
            },
          },
          matchesTypes: ['Url', 'text/uri-list'],
        }),
        u(r, o.TEXT, {
          exposeProperties: {
            text: function (e, t) {
              return (0, i.getDataFromDataTransfer)(e, t, '');
            },
          },
          matchesTypes: ['Text', 'text/plain'],
        }),
        r);
      t.nativeTypesConfig = c;
    },
    Y4Oj: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('vjmV');
      Object.keys(r).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return r[e];
            },
          });
      });
      var o = n('8nTA');
      Object.keys(o).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return o[e];
            },
          });
      });
      var i = n('TNeT');
      Object.keys(i).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return i[e];
            },
          });
      });
    },
    Z3xJ: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M21.106 12.5H6.894a.5.5 0 0 1-.318-.886L14 5.5l7.424 6.114a.5.5 0 0 1-.318.886zM21.106 16.5H6.894a.5.5 0 0 0-.318.886L14 23.5l7.424-6.114a.5.5 0 0 0-.318-.886z"/></svg>';
    },
    ZzwE: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.areCoordsEqual = function (e, t) {
          return (!e && !t) || (!(!e || !t) && e.x === t.x && e.y === t.y);
        }),
        (t.areArraysEqual = function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
          if (e.length !== t.length) return !1;
          for (var o = 0; o < e.length; ++o) if (!n(e[o], t[o])) return !1;
          return !0;
        }),
        (t.strictEquality = void 0);
      var r = function (e, t) {
        return e === t;
      };
      t.strictEquality = r;
    },
    aDaG: function (e, t, n) {
      'use strict';
      function r(e) {
        return e && e.prototype && 'function' == typeof e.prototype.render;
      }
      function o(e) {
        return (
          e &&
          e.$$typeof &&
          'Symbol(react.forward_ref)' === e.$$typeof.toString()
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getDecoratedComponent = function (e) {
          var t = e.current;
          return null == t ? null : t.decoratedRef ? t.decoratedRef.current : t;
        }),
        (t.isClassComponent = r),
        (t.isRefForwardingComponent = o),
        (t.isRefable = function (e) {
          return r(e) || o(e);
        }),
        (t.checkDecoratorArguments = function (e, t) {
          0;
        });
    },
    'ae+E': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.memoize = function (e) {
          var t = null;
          return function () {
            return null == t && (t = e()), t;
          };
        }),
        (t.without = function (e, t) {
          return e.filter(function (e) {
            return e !== t;
          });
        }),
        (t.union = function (e, t) {
          var n = new Set(),
            r = function (e) {
              return n.add(e);
            };
          e.forEach(r), t.forEach(r);
          var o = [];
          return (
            n.forEach(function (e) {
              return o.push(e);
            }),
            o
          );
        });
    },
    b4AZ: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return m;
      });
      var r = n('mrSG'),
        o = n('q1tI'),
        i = n('Eyy1'),
        a = n('Iivm'),
        u = n('zM7N'),
        c = n('oiZD'),
        s = n('YFKU'),
        l = n('txPx'),
        d = n('CW80'),
        f = n('gM3K'),
        p = n('ogJP'),
        h = n('jPOK'),
        v = n('leHx'),
        g = n('rlH3'),
        b = n('x5pF'),
        y = function (e) {
          return Object(s.t)('{drawingsCount} drawing', {
            plural: '{drawingsCount} drawings',
            count: e,
          }).format({ drawingsCount: e.toString() });
        },
        m =
          (Object(l.getLogger)('Chart.ManageDrawings'),
          (function (e) {
            function t(t) {
              var n = e.call(this, t) || this;
              return (
                (n._totalCount = 0),
                (n._model = null),
                (n._symbolDrawingsMap = null),
                (n._storageContent = null),
                (n._storageContentLoadingPromise = null),
                (n._onItemClick = function (e) {
                  n.props.chartWidget.setSymbol(e),
                    null !== n._model && n.setState({ currentSymbol: e }),
                    n.props.onClose && n.props.onClose();
                }),
                (n._onRemove = function (e) {
                  return Object(r.b)(n, void 0, void 0, function () {
                    var t,
                      n,
                      o,
                      a = this;
                    return Object(r.d)(this, function (r) {
                      return (
                        this._model &&
                          this._symbolDrawingsMap &&
                          ((t = Object(s.t)('Remove all line tools for ') + e),
                          (n = this._symbolDrawingsMap.get(e)) &&
                            ((o = Array.from(n)
                              .map(function (e) {
                                return Object(i.ensureNotNull)(a._model)
                                  .model()
                                  .dataSourceForId(e);
                              })
                              .filter(p.notNull)),
                            this._model.removeSources(o, !1, t),
                            this._updateItems())),
                        [2]
                      );
                    });
                  });
                }),
                (n._updateItems = function () {
                  return Object(r.b)(n, void 0, void 0, function () {
                    var e;
                    return Object(r.d)(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return null === this._model
                            ? [3, 2]
                            : [
                                4,
                                this._getItems(
                                  this._model.model().dataSources(),
                                ),
                              ];
                        case 1:
                          (e = t.sent()),
                            this.setState({ items: e }),
                            (t.label = 2);
                        case 2:
                          return [2];
                      }
                    });
                  });
                }),
                (n._updateTheme = function () {
                  var e = c.watchedTheme.value();
                  n.setState({ theme: e });
                }),
                (n.state = {
                  currentSymbol: null,
                  items: null,
                  theme: c.watchedTheme.value(),
                }),
                n
              );
            }
            return (
              Object(r.c)(t, e),
              (t.prototype.componentDidMount = function () {
                var e = this;
                this.props.chartWidget.withModel(this, function () {
                  return Object(r.b)(e, void 0, void 0, function () {
                    var e,
                      t = this;
                    return Object(r.d)(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return (
                            (this._model = this.props.chartWidget.model()),
                            this._model
                              .model()
                              .dataSourceCollectionChanged()
                              .subscribe(this, this._updateItems),
                            [
                              4,
                              this._getItems(this._model.model().dataSources()),
                            ]
                          );
                        case 1:
                          return (
                            (e = n.sent()),
                            this.setState(
                              {
                                currentSymbol: this._model
                                  .mainSeries()
                                  .symbol(),
                                items: e,
                              },
                              function () {
                                var e, n;
                                return null ===
                                  (n = (e = t.props).onInitialized) ||
                                  void 0 === n
                                  ? void 0
                                  : n.call(e);
                              },
                            ),
                            [2]
                          );
                      }
                    });
                  });
                }),
                  c.watchedTheme.subscribe(this._updateTheme);
              }),
              (t.prototype.componentWillUnmount = function () {
                c.watchedTheme.unsubscribe(this._updateTheme),
                  null !== this._model &&
                    this._model
                      .model()
                      .dataSourceCollectionChanged()
                      .unsubscribe(this, this._updateItems);
              }),
              (t.prototype.render = function () {
                var e,
                  t = this,
                  n = this.props.isMobile,
                  r = this.state,
                  i = r.currentSymbol,
                  a = r.items,
                  u = this._symbolDrawingsMap
                    ? this._symbolDrawingsMap.size
                    : 0,
                  c =
                    ((e = u),
                    Object(s.t)('{symbolsCount} symbol', {
                      plural: '{symbolsCount} symbols',
                      context: 'symbols_and_drawings_count',
                      count: e,
                    }).format({ symbolsCount: e.toString() }) +
                      ' ' +
                      (function (e) {
                        return Object(s.t)('with {drawingsCount} drawing', {
                          plural: 'with {drawingsCount} drawings',
                          context: 'symbols_and_drawings_count',
                          count: e,
                        }).format({ drawingsCount: e.toString() });
                      })(this._totalCount));
                return o.createElement(
                  o.Fragment,
                  null,
                  null === this._storageContent
                    ? null
                    : o.createElement('div', { className: b.title }, c),
                  null === a || 0 === a.length
                    ? this._renderEmptyContent()
                    : a.map(function (e) {
                        return o.createElement(f.a, {
                          key: e.symbol,
                          title: e.symbol,
                          subtitle: y(e.drawingsCount),
                          removeBtnLabel: Object(s.t)(
                            'Remove all drawings for this symbol',
                          ),
                          isActive: e.symbol === i,
                          isMobile: n,
                          onClick: t._onItemClick.bind(t, e.symbol),
                          onClickRemove: t._onRemove.bind(t, e.symbol),
                          showFavorite: !1,
                        });
                      }),
                );
              }),
              (t.prototype._renderEmptyContent = function () {
                var e = this.state.theme === u.a.Dark ? g : v;
                return null === this._storageContent
                  ? o.createElement(h.a, null)
                  : o.createElement(
                      'div',
                      { className: b.empty },
                      o.createElement(a.a, { className: b.image, icon: e }),
                      o.createElement(
                        'span',
                        null,
                        Object(s.t)('No drawings yet'),
                      ),
                    );
              }),
              (t.prototype._getStorageContent = function () {
                return Object(r.b)(this, void 0, void 0, function () {
                  return Object(r.d)(this, function (e) {
                    return [2, new Map()];
                  });
                });
              }),
              (t.prototype._getItems = function (e) {
                return Object(r.b)(this, void 0, void 0, function () {
                  var t,
                    n,
                    o = this;
                  return Object(r.d)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return (
                          (t = []),
                          (n = this._getSymbolDrawingsMap(e)),
                          [4, this._getStorageContent()]
                        );
                      case 1:
                        return (
                          r.sent().forEach(function (e, t) {
                            var r = n.get(t) || new Set();
                            e.forEach(function (e) {
                              return r.add(e);
                            }),
                              n.set(t, r);
                          }),
                          (this._symbolDrawingsMap = n),
                          (this._totalCount = 0),
                          this._symbolDrawingsMap.forEach(function (e, n) {
                            t.push({ symbol: n, drawingsCount: e.size }),
                              (o._totalCount = o._totalCount + e.size);
                          }),
                          [
                            2,
                            t.sort(function (e, t) {
                              return e.drawingsCount < t.drawingsCount ? 1 : -1;
                            }),
                          ]
                        );
                    }
                  });
                });
              }),
              (t.prototype._getSymbolDrawingsMap = function (e) {
                var t = new Map();
                return (
                  e.forEach(function (e) {
                    if (Object(d.isLineTool)(e) && e.showInObjectTree()) {
                      var n = t.get(e.symbol()) || new Set();
                      n.add(e.id()), t.set(e.symbol(), n);
                    }
                  }),
                  t
                );
              }),
              t
            );
          })(o.PureComponent));
    },
    bsf8: function (e, t, n) {
      'use strict';
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.OptionsReader = void 0);
      var o = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.globalContext = t);
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: 'window',
              get: function () {
                return this.globalContext
                  ? this.globalContext
                  : 'undefined' != typeof window
                  ? window
                  : void 0;
              },
            },
            {
              key: 'document',
              get: function () {
                if (this.window) return this.window.document;
              },
            },
          ]) && r(t.prototype, n),
          o && r(t, o),
          e
        );
      })();
      t.OptionsReader = o;
    },
    cSMM: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.useDragLayer = function (e) {
          var t = (0, o.useDragDropManager)().getMonitor(),
            n =
              ((c = (0, i.useCollector)(t, e)),
              (s = 2),
              (function (e) {
                if (Array.isArray(e)) return e;
              })(c) ||
                (function (e, t) {
                  if (
                    Symbol.iterator in Object(e) ||
                    '[object Arguments]' === Object.prototype.toString.call(e)
                  ) {
                    var n = [],
                      r = !0,
                      o = !1,
                      i = void 0;
                    try {
                      for (
                        var a, u = e[Symbol.iterator]();
                        !(r = (a = u.next()).done) &&
                        (n.push(a.value), !t || n.length !== t);
                        r = !0
                      );
                    } catch (c) {
                      (o = !0), (i = c);
                    } finally {
                      try {
                        r || null == u.return || u.return();
                      } finally {
                        if (o) throw i;
                      }
                    }
                    return n;
                  }
                })(c, s) ||
                (function () {
                  throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance',
                  );
                })()),
            a = n[0],
            u = n[1];
          var c, s;
          return (
            (0, r.useEffect)(function () {
              return t.subscribeToOffsetChange(u);
            }),
            (0, r.useEffect)(function () {
              return t.subscribeToStateChange(u);
            }),
            a
          );
        });
      var r = n('q1tI'),
        o = n('gArw'),
        i = n('84ty');
    },
    co4r: function (e, t, n) {
      e.exports = {
        wrap: 'wrap-ZwpHWy6f',
        selected: 'selected-13TJrTD3',
        childOfSelected: 'childOfSelected-1fXtQD5b',
        disabled: 'disabled-HTy9gMDH',
        expandHandle: 'expandHandle-3c7AuRsl',
        expanded: 'expanded-3ZuwUc2I',
      };
    },
    dDxv: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 16.5l4.586-4.586a2 2 0 0 1 2.828 0l3.172 3.172a2 2 0 0 0 2.828 0L23.5 10.5"/></svg>';
    },
    e7Vy: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.setClientOffset = function (e, t) {
          return {
            type: r.INIT_COORDS,
            payload: { sourceClientOffset: t || null, clientOffset: e || null },
          };
        });
      var r = n('/yIc');
    },
    evKi: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          return function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { publishSource: !0 },
              r = n.publishSource,
              o = void 0 === r || r,
              a = n.clientOffset,
              p = n.getSourceClientOffset,
              h = e.getMonitor(),
              v = e.getRegistry();
            e.dispatch((0, i.setClientOffset)(a)), s(t, h, v);
            var g = f(t, h);
            if (null !== g) {
              var b = null;
              a && (l(p), (b = p(g))), e.dispatch((0, i.setClientOffset)(a, b));
              var y = v.getSource(g),
                m = y.beginDrag(h, g);
              d(m), v.pinSource(g);
              var O = v.getSourceType(g);
              return {
                type: u.BEGIN_DRAG,
                payload: {
                  itemType: O,
                  item: m,
                  sourceId: g,
                  clientOffset: a || null,
                  sourceClientOffset: b || null,
                  isSourcePublic: !!o,
                },
              };
            }
            e.dispatch(c);
          };
        });
      var r,
        o = (r = n('QLaP')) && r.__esModule ? r : { default: r },
        i = n('e7Vy'),
        a = n('rTKX'),
        u = n('/yIc');
      var c = {
        type: u.INIT_COORDS,
        payload: { clientOffset: null, sourceClientOffset: null },
      };
      function s(e, t, n) {
        (0, o.default)(
          !t.isDragging(),
          'Cannot call beginDrag while dragging.',
        ),
          e.forEach(function (e) {
            (0,
            o.default)(n.getSource(e), 'Expected sourceIds to be registered.');
          });
      }
      function l(e) {
        (0, o.default)(
          'function' == typeof e,
          'When clientOffset is provided, getSourceClientOffset must be a function.',
        );
      }
      function d(e) {
        (0, o.default)((0, a.isObject)(e), 'Item must be an object.');
      }
      function f(e, t) {
        for (var n = null, r = e.length - 1; r >= 0; r--)
          if (t.canDragSource(e[r])) {
            n = e[r];
            break;
          }
        return n;
      }
    },
    fZSZ: function (e, t, n) {
      'use strict';
      (function (e) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.DndProvider = void 0);
        var r = (function (e) {
            if (e && e.__esModule) return e;
            var t = i();
            if (t && t.has(e)) return t.get(e);
            var n = {};
            if (null != e) {
              var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                  var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                  a && (a.get || a.set)
                    ? Object.defineProperty(n, o, a)
                    : (n[o] = e[o]);
                }
            }
            (n.default = e), t && t.set(e, n);
            return n;
          })(n('q1tI')),
          o = n('8QtF');
        function i() {
          if ('function' != typeof WeakMap) return null;
          var e = new WeakMap();
          return (
            (i = function () {
              return e;
            }),
            e
          );
        }
        function a(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              if (
                !(Symbol.iterator in Object(e)) &&
                '[object Arguments]' !== Object.prototype.toString.call(e)
              )
                return;
              var n = [],
                r = !0,
                o = !1,
                i = void 0;
              try {
                for (
                  var a, u = e[Symbol.iterator]();
                  !(r = (a = u.next()).done) &&
                  (n.push(a.value), !t || n.length !== t);
                  r = !0
                );
              } catch (c) {
                (o = !0), (i = c);
              } finally {
                try {
                  r || null == u.return || u.return();
                } finally {
                  if (o) throw i;
                }
              }
              return n;
            })(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance',
              );
            })()
          );
        }
        function u(e, t) {
          if (null == e) return {};
          var n,
            r,
            o = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                i = Object.keys(e);
              for (r = 0; r < i.length; r++)
                (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]),
                t.indexOf(n) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (o[n] = e[n]));
          }
          return o;
        }
        var c = 0,
          s = (0, r.memo)(function (e) {
            var t = e.children,
              n = a(
                (function (e) {
                  if ('manager' in e) {
                    return [{ dragDropManager: e.manager }, !1];
                  }
                  var t = (function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : d(),
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        i = t;
                      i[l] || (i[l] = (0, o.createDndContext)(e, t, n, r));
                      return i[l];
                    })(e.backend, e.context, e.options, e.debugMode),
                    n = !e.context;
                  return [t, n];
                })(u(e, ['children'])),
                2,
              ),
              i = n[0],
              s = n[1];
            return (
              r.useEffect(function () {
                return (
                  s && c++,
                  function () {
                    s && 0 === --c && (d()[l] = null);
                  }
                );
              }, []),
              r.createElement(o.DndContext.Provider, { value: i }, t)
            );
          });
        (t.DndProvider = s), (s.displayName = 'DndProvider');
        var l = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__');
        function d() {
          return void 0 !== e ? e : window;
        }
      }.call(this, n('yLpj')));
    },
    ffaL: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.605 14.089A10.052 10.052 0 0 1 4.56 14l.046-.089a17.18 17.18 0 0 1 2.329-3.327C8.58 8.758 10.954 7 14 7c3.046 0 5.421 1.757 7.066 3.585A17.18 17.18 0 0 1 23.44 14l-.046.089a17.18 17.18 0 0 1-2.329 3.327C19.42 19.242 17.046 21 14 21c-3.046 0-5.421-1.757-7.066-3.584a17.18 17.18 0 0 1-2.329-3.327zm19.848-.3L24 14l.453.212-.001.002-.003.005-.009.02a16.32 16.32 0 0 1-.662 1.195c-.44.72-1.1 1.684-1.969 2.65C20.08 20.008 17.454 22 14 22c-3.454 0-6.079-1.993-7.81-3.916a18.185 18.185 0 0 1-2.469-3.528 10.636 10.636 0 0 1-.161-.318l-.01-.019-.002-.005v-.002L4 14a55.06 55.06 0 0 1-.453-.212l.001-.002.003-.005.009-.02.033-.067a16.293 16.293 0 0 1 .629-1.126c.44-.723 1.1-1.686 1.969-2.652C7.92 7.993 10.546 6 14 6c3.454 0 6.079 1.993 7.81 3.916a18.183 18.183 0 0 1 2.469 3.528 10.588 10.588 0 0 1 .161.318l.01.019.002.005v.002zM24 14l.453-.211.099.211-.099.211L24 14zm-20.453-.211L4 14l-.453.211L3.448 14l.099-.211zM11 14a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>';
    },
    gArw: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.useDragDropManager = function () {
          var e = (0, o.useContext)(a.DndContext).dragDropManager;
          return (0, i.default)(null != e, 'Expected drag drop context'), e;
        });
      var r,
        o = n('q1tI'),
        i = (r = n('QLaP')) && r.__esModule ? r : { default: r },
        a = n('8QtF');
    },
    gGVb: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          if (null === t) return null === e;
          return Array.isArray(e)
            ? e.some(function (e) {
                return e === t;
              })
            : e === t;
        });
    },
    gSe6: function (e, t, n) {
      e.exports = {
        wrap: 'wrap-2hFTn3uj',
        dialog: 'dialog-30rnMlqd',
        offset: 'offset-1ZdjMRaL',
        title: 'title-h3xhDe9n',
        main: 'main-3NNVXu0y',
        disabled: 'disabled-1B-swnz-',
        icon: 'icon-3QTtVlxj',
        textIcon: 'textIcon-1P4CGe09',
        rightButtons: 'rightButtons-34BFYJK5',
        twoButtons: 'twoButtons-l6yMC-Ly',
        button: 'button-qnKquaRk',
        viewButton: 'viewButton-2k7APQOE',
        threeButtons: 'threeButtons-2ZMUW8cB',
        lockButton: 'lockButton-175WWGi7',
        removeButton: 'removeButton-qjvCYfQg',
        warn: 'warn-148TrkU0',
        hover: 'hover-v-sC468U',
        expandHandle: 'expandHandle-1GeKFJz2',
        selected: 'selected-riBJw2JS',
        childOfSelected: 'childOfSelected-3yG2bS0f',
        renameInput: 'renameInput-JFXfBA1C',
      };
    },
    gla1: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n('q1tI'),
        o = function () {
          return Object(r.useReducer)(function (e, t) {
            return e + 1;
          }, 0)[1];
        };
    },
    gpuc: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : c,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.payload;
          switch (t.type) {
            case r.INIT_COORDS:
            case r.BEGIN_DRAG:
              return {
                initialSourceClientOffset: n.sourceClientOffset,
                initialClientOffset: n.clientOffset,
                clientOffset: n.clientOffset,
              };
            case r.HOVER:
              return (0, o.areCoordsEqual)(e.clientOffset, n.clientOffset)
                ? e
                : a({}, e, { clientOffset: n.clientOffset });
            case r.END_DRAG:
            case r.DROP:
              return c;
            default:
              return e;
          }
        });
      var r = n('zLS0'),
        o = n('ZzwE');
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                u(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
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
      var c = {
        initialSourceClientOffset: null,
        initialClientOffset: null,
        clientOffset: null,
      };
    },
    h5pj: function (e, t, n) {
      e.exports = {
        wrap: 'wrap-2B3z65_v',
        space: 'space-1A2qtG9Q',
        tree: 'tree-P2Fxhbml',
      };
    },
    iI3E: function (e, t, n) {
      'use strict';
      var r;
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.HandlerRole = void 0),
        (t.HandlerRole = r),
        (function (e) {
          (e.SOURCE = 'SOURCE'), (e.TARGET = 'TARGET');
        })(r || (t.HandlerRole = r = {}));
    },
    iNL6: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r = u(n('QLaP')),
        o = u(n('gGVb')),
        i = n('E9Q6'),
        a = n('/XZa');
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var s = (function () {
        function e(t, n) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.store = t),
            (this.registry = n);
        }
        var t, n, u;
        return (
          (t = e),
          (n = [
            {
              key: 'subscribeToStateChange',
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { handlerIds: void 0 },
                  o = n.handlerIds;
                (0, r.default)(
                  'function' == typeof e,
                  'listener must be a function.',
                ),
                  (0, r.default)(
                    void 0 === o || Array.isArray(o),
                    'handlerIds, when specified, must be an array of strings.',
                  );
                var i = this.store.getState().stateId,
                  u = function () {
                    var n = t.store.getState(),
                      r = n.stateId;
                    try {
                      r === i ||
                        (r === i + 1 &&
                          !(0, a.areDirty)(n.dirtyHandlerIds, o)) ||
                        e();
                    } finally {
                      i = r;
                    }
                  };
                return this.store.subscribe(u);
              },
            },
            {
              key: 'subscribeToOffsetChange',
              value: function (e) {
                var t = this;
                (0, r.default)(
                  'function' == typeof e,
                  'listener must be a function.',
                );
                var n = this.store.getState().dragOffset;
                return this.store.subscribe(function () {
                  var r = t.store.getState().dragOffset;
                  r !== n && ((n = r), e());
                });
              },
            },
            {
              key: 'canDragSource',
              value: function (e) {
                if (!e) return !1;
                var t = this.registry.getSource(e);
                return (
                  (0, r.default)(t, 'Expected to find a valid source.'),
                  !this.isDragging() && t.canDrag(this, e)
                );
              },
            },
            {
              key: 'canDropOnTarget',
              value: function (e) {
                if (!e) return !1;
                var t = this.registry.getTarget(e);
                if (
                  ((0, r.default)(t, 'Expected to find a valid target.'),
                  !this.isDragging() || this.didDrop())
                )
                  return !1;
                var n = this.registry.getTargetType(e),
                  i = this.getItemType();
                return (0, o.default)(n, i) && t.canDrop(this, e);
              },
            },
            {
              key: 'isDragging',
              value: function () {
                return Boolean(this.getItemType());
              },
            },
            {
              key: 'isDraggingSource',
              value: function (e) {
                if (!e) return !1;
                var t = this.registry.getSource(e, !0);
                return (
                  (0, r.default)(t, 'Expected to find a valid source.'),
                  !(!this.isDragging() || !this.isSourcePublic()) &&
                    this.registry.getSourceType(e) === this.getItemType() &&
                    t.isDragging(this, e)
                );
              },
            },
            {
              key: 'isOverTarget',
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : { shallow: !1 };
                if (!e) return !1;
                var n = t.shallow;
                if (!this.isDragging()) return !1;
                var r = this.registry.getTargetType(e),
                  i = this.getItemType();
                if (i && !(0, o.default)(r, i)) return !1;
                var a = this.getTargetIds();
                if (!a.length) return !1;
                var u = a.indexOf(e);
                return n ? u === a.length - 1 : u > -1;
              },
            },
            {
              key: 'getItemType',
              value: function () {
                return this.store.getState().dragOperation.itemType;
              },
            },
            {
              key: 'getItem',
              value: function () {
                return this.store.getState().dragOperation.item;
              },
            },
            {
              key: 'getSourceId',
              value: function () {
                return this.store.getState().dragOperation.sourceId;
              },
            },
            {
              key: 'getTargetIds',
              value: function () {
                return this.store.getState().dragOperation.targetIds;
              },
            },
            {
              key: 'getDropResult',
              value: function () {
                return this.store.getState().dragOperation.dropResult;
              },
            },
            {
              key: 'didDrop',
              value: function () {
                return this.store.getState().dragOperation.didDrop;
              },
            },
            {
              key: 'isSourcePublic',
              value: function () {
                return this.store.getState().dragOperation.isSourcePublic;
              },
            },
            {
              key: 'getInitialClientOffset',
              value: function () {
                return this.store.getState().dragOffset.initialClientOffset;
              },
            },
            {
              key: 'getInitialSourceClientOffset',
              value: function () {
                return this.store.getState().dragOffset
                  .initialSourceClientOffset;
              },
            },
            {
              key: 'getClientOffset',
              value: function () {
                return this.store.getState().dragOffset.clientOffset;
              },
            },
            {
              key: 'getSourceClientOffset',
              value: function () {
                return (0, i.getSourceClientOffset)(
                  this.store.getState().dragOffset,
                );
              },
            },
            {
              key: 'getDifferenceFromInitialOffset',
              value: function () {
                return (0, i.getDifferenceFromInitialOffset)(
                  this.store.getState().dragOffset,
                );
              },
            },
          ]) && c(t.prototype, n),
          u && c(t, u),
          e
        );
      })();
      t.default = s;
    },
    jPOK: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var r = n('q1tI'),
        o = n('TSYQ'),
        i = n('Owlf');
      n('SzKR');
      function a(e) {
        var t = o(
          'tv-spinner',
          'tv-spinner--shown',
          'tv-spinner--size_' + (e.size || i.a),
        );
        return r.createElement(
          'div',
          { className: t, style: e.style, role: 'progressbar' },
          r.createElement(
            'div',
            { className: 'tv-spinner__spinner-layer' },
            r.createElement('div', {
              className: 'tv-spinner__background tv-spinner__width_element',
            }),
            r.createElement('div', {
              className:
                'tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--left',
            }),
            r.createElement('div', {
              className:
                'tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--right',
            }),
          ),
        );
      }
    },
    jcMs: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case r.ADD_SOURCE:
            case r.ADD_TARGET:
              return e + 1;
            case r.REMOVE_SOURCE:
            case r.REMOVE_TARGET:
              return e - 1;
            default:
              return e;
          }
        });
      var r = n('Uyss');
    },
    lAcH: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.registerTarget = function (e, t, n) {
          var r = n.getRegistry(),
            o = r.addTarget(e, t);
          return [
            o,
            function () {
              return r.removeTarget(o);
            },
          ];
        }),
        (t.registerSource = function (e, t, n) {
          var r = n.getRegistry(),
            o = r.addSource(e, t);
          return [
            o,
            function () {
              return r.removeSource(o);
            },
          ];
        });
    },
    laIQ: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r = n('ANjH'),
        o = c(n('uU4G')),
        i = c(n('zLS0')),
        a = c(n('iNL6')),
        u = c(n('2H2i'));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function d(e) {
        var t =
          'undefined' != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__;
        return (0, r.createStore)(
          o.default,
          e && t && t({ name: 'dnd-core', instanceId: 'dnd-core' }),
        );
      }
      var f = (function () {
        function e() {
          var t = this,
            n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          s(this, e),
            (this.isSetUp = !1),
            (this.handleRefCountChange = function () {
              var e = t.store.getState().refCount > 0;
              t.backend &&
                (e && !t.isSetUp
                  ? (t.backend.setup(), (t.isSetUp = !0))
                  : !e &&
                    t.isSetUp &&
                    (t.backend.teardown(), (t.isSetUp = !1)));
            });
          var r = d(n);
          (this.store = r),
            (this.monitor = new a.default(r, new u.default(r))),
            r.subscribe(this.handleRefCountChange);
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: 'receiveBackend',
              value: function (e) {
                this.backend = e;
              },
            },
            {
              key: 'getMonitor',
              value: function () {
                return this.monitor;
              },
            },
            {
              key: 'getBackend',
              value: function () {
                return this.backend;
              },
            },
            {
              key: 'getRegistry',
              value: function () {
                return this.monitor.registry;
              },
            },
            {
              key: 'getActions',
              value: function () {
                var e = this,
                  t = this.store.dispatch,
                  n = (0, i.default)(this);
                return Object.keys(n).reduce(function (r, o) {
                  var i,
                    a = n[o];
                  return (
                    (r[o] =
                      ((i = a),
                      function () {
                        for (
                          var n = arguments.length, r = new Array(n), o = 0;
                          o < n;
                          o++
                        )
                          r[o] = arguments[o];
                        var a = i.apply(e, r);
                        void 0 !== a && t(a);
                      })),
                    r
                  );
                }, {});
              },
            },
            {
              key: 'dispatch',
              value: function (e) {
                this.store.dispatch(e);
              },
            },
          ]) && l(t.prototype, n),
          r && l(t, r),
          e
        );
      })();
      t.default = f;
    },
    leHx: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 120 120" width="120" height="120" fill="none"><g clip-path="url(#avi4cgf11)"><path fill="#F0F3FA" d="M16.01 71.1c10.54 13.42 34.92 11.86 54.46-3.48s26.85-38.65 16.3-52.08C76.25 2.12 51.87 3.68 32.33 19.02c-9.2 7.22-15.68 16.2-18.87 25.09-.68 1.88-2.57 3.05-4.53 3.48a9.7 9.7 0 0 0-3.96 1.85C.5 52.94-.09 59.64 3.64 64.4a11.24 11.24 0 0 0 7.82 4.31 6.2 6.2 0 0 1 4.55 2.4z"/><path fill="url(#bvi4cgf11)" d="M28.3 35.56c1.8 3.42 12.08 10.65 25.62 16.88 6.36 2.93 12.38 5.3 17.37 6.93a172.7 172.7 0 0 0-18-12.68c-14.59-9.1-24.97-12.4-24.97-12.4-.18.3-.19.72-.01 1.27z"/><path stroke="#1E222D" stroke-width="1.5" d="M86.25 71.4c-.19.28-.54.53-1.17.69-.63.15-1.48.19-2.56.08-2.14-.22-5-1-8.4-2.28-6.78-2.57-15.53-7.13-24.64-13.06-9.12-5.93-16.82-12.1-21.92-17.25-2.55-2.59-4.41-4.89-5.48-6.76a7.79 7.79 0 0 1-.96-2.37c-.12-.64-.03-1.06.16-1.35.2-.3.54-.55 1.17-.7a7.8 7.8 0 0 1 2.56-.08c2.14.22 5 1 8.4 2.28 6.78 2.57 15.53 7.12 24.65 13.06 9.1 5.93 16.81 12.1 21.9 17.25 2.56 2.58 4.43 4.89 5.5 6.76.53.94.84 1.73.95 2.37.12.64.03 1.06-.16 1.35z"/><path stroke="#1E222D" stroke-linecap="round" stroke-width="1.5" d="M28.96 34.63c1.99.57 4.47 1.55 7.3 2.86l12.2 6.52a193.2 193.2 0 0 1 6.66 4.15c10.56 6.88 19.12 13.86 22.97 18.45"/><path stroke="#1E222D" stroke-width="1.5" d="M83.79 65.59c6.77-14.14 1.41-32-13.05-41.42-14.46-9.41-32.96-7.09-43.15 4.83M74.96 21.24a6.08 6.08 0 0 1-2.58 2.3c-.9.39-1.69.35-2.23 0-.54-.36-.9-1.05-.9-2.04a6.08 6.08 0 0 1 1.05-3.29 6.07 6.07 0 0 1 2.58-2.29c.9-.4 1.69-.35 2.23 0s.9 1.05.9 2.04c.01.98-.32 2.17-1.05 3.28z"/><path stroke="#1E222D" stroke-linecap="round" stroke-width="1.5" d="M42.7 23.62c1.25-.3 4.56-1.3 8.92-1.3M80.14 84.07C76.5 84.03 64.4 84 50 84s-26.5.03-30.14.07M24.7 59.33l5.77 5.32M32.05 56.05l.84 3.28"/></g><defs><linearGradient gradientUnits="userSpaceOnUse" x1="49.73" x2="49.73" y1="34.29" y2="59.37" id="bvi4cgf11"><stop stop-color="#2196F3"/><stop offset="1" stop-color="#2196F3"/></linearGradient><clipPath id="avi4cgf11"><path fill="#fff" d="M0 0h100v100H0V0z"/></clipPath></defs></svg>';
    },
    lil0: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function () {
          (arguments.length > 0 && void 0 !== arguments[0]) || a.NONE;
          var e = arguments.length > 1 ? arguments[1] : void 0;
          switch (e.type) {
            case r.HOVER:
              break;
            case o.ADD_SOURCE:
            case o.ADD_TARGET:
            case o.REMOVE_TARGET:
            case o.REMOVE_SOURCE:
              return a.NONE;
            case r.BEGIN_DRAG:
            case r.PUBLISH_DRAG_SOURCE:
            case r.END_DRAG:
            case r.DROP:
            default:
              return a.ALL;
          }
          var t = e.payload,
            n = t.targetIds,
            c = void 0 === n ? [] : n,
            s = t.prevTargetIds,
            l = void 0 === s ? [] : s,
            d = (0, u.xor)(c, l),
            f = d.length > 0 || !(0, i.areArraysEqual)(c, l);
          if (!f) return a.NONE;
          var p = l[l.length - 1],
            h = c[c.length - 1];
          p !== h && (p && d.push(p), h && d.push(h));
          return d;
        });
      var r = n('zLS0'),
        o = n('Uyss'),
        i = n('ZzwE'),
        a = n('/XZa'),
        u = n('rTKX');
    },
    mGlc: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getNodeClientOffset = a),
        (t.getEventClientOffset = function (e) {
          return { x: e.clientX, y: e.clientY };
        }),
        (t.getDragPreviewOffset = function (e, t, n, r, u) {
          var c =
              ((_ = t),
              'IMG' === _.nodeName &&
                ((0, o.isFirefox)() || !document.documentElement.contains(_))),
            s = a(c ? e : t),
            l = { x: n.x - s.x, y: n.y - s.y },
            d = e.offsetWidth,
            f = e.offsetHeight,
            p = r.anchorX,
            h = r.anchorY,
            v = (function (e, t, n, r) {
              var i = e ? t.width : n,
                a = e ? t.height : r;
              (0, o.isSafari)() &&
                e &&
                ((a /= window.devicePixelRatio),
                (i /= window.devicePixelRatio));
              return { dragPreviewWidth: i, dragPreviewHeight: a };
            })(c, t, d, f),
            g = v.dragPreviewWidth,
            b = v.dragPreviewHeight,
            y = u.offsetX,
            m = u.offsetY,
            O = 0 === m || m;
          var _;
          return {
            x:
              0 === y || y
                ? y
                : new i.default(
                    [0, 0.5, 1],
                    [l.x, (l.x / d) * g, l.x + g - d],
                  ).interpolate(p),
            y: O
              ? m
              : ((S = new i.default(
                  [0, 0.5, 1],
                  [l.y, (l.y / f) * b, l.y + b - f],
                ).interpolate(h)),
                (0, o.isSafari)() &&
                  c &&
                  (S += (window.devicePixelRatio - 1) * b),
                S),
          };
          var S;
        });
      var r,
        o = n('zAsM'),
        i = (r = n('z6MX')) && r.__esModule ? r : { default: r };
      function a(e) {
        var t = 1 === e.nodeType ? e : e.parentElement;
        if (!t) return null;
        var n = t.getBoundingClientRect(),
          r = n.top;
        return { x: n.left, y: r };
      }
    },
    mIZF: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r = n('ae+E');
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var i = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.entered = []),
            (this.isNodeInDocument = t);
        }
        var t, n, i;
        return (
          (t = e),
          (n = [
            {
              key: 'enter',
              value: function (e) {
                var t = this,
                  n = this.entered.length;
                return (
                  (this.entered = (0, r.union)(
                    this.entered.filter(function (n) {
                      return (
                        t.isNodeInDocument(n) && (!n.contains || n.contains(e))
                      );
                    }),
                    [e],
                  )),
                  0 === n && this.entered.length > 0
                );
              },
            },
            {
              key: 'leave',
              value: function (e) {
                var t = this.entered.length;
                return (
                  (this.entered = (0, r.without)(
                    this.entered.filter(this.isNodeInDocument),
                    e,
                  )),
                  t > 0 && 0 === this.entered.length
                );
              },
            },
            {
              key: 'reset',
              value: function () {
                this.entered = [];
              },
            },
          ]) && o(t.prototype, n),
          i && o(t, i),
          e
        );
      })();
      t.default = i;
    },
    nkjW: function (e, t, n) {
      e.exports = {
        title: 'title-1TNb3P2I',
        withoutIcon: 'withoutIcon-1Z-6Jrlb',
        buttons: 'buttons-2xuCDHZB',
        button: 'button-2XmGO-Sx',
        disabled: 'disabled-2VEXevOG',
      };
    },
    'p0W+': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return c;
      });
      var r = n('mrSG'),
        o = n('q1tI'),
        i = n('TSYQ'),
        a = n('tU7i'),
        u = n('EvtC'),
        c = o.forwardRef(function (e, t) {
          var n = e.className,
            c = Object(r.e)(e, ['className']);
          return o.createElement(
            a.b,
            Object(r.a)({}, c, { ref: t, className: i(n, u.button) }),
          );
        });
    },
    'q/ea': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.SerialDisposable = t.CompositeDisposable = t.Disposable = void 0);
      var r = n('GanS');
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function a(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
      }
      var u = (function () {
        function e(t) {
          o(this, e),
            (this.isDisposed = !1),
            (this.action = (0, r.isFunction)(t) ? t : r.noop);
        }
        return (
          a(
            e,
            [
              {
                key: 'dispose',
                value: function () {
                  this.isDisposed || (this.action(), (this.isDisposed = !0));
                },
              },
            ],
            [
              {
                key: 'isDisposable',
                value: function (e) {
                  return e && (0, r.isFunction)(e.dispose);
                },
              },
              {
                key: '_fixup',
                value: function (t) {
                  return e.isDisposable(t) ? t : e.empty;
                },
              },
              {
                key: 'create',
                value: function (t) {
                  return new e(t);
                },
              },
            ],
          ),
          e
        );
      })();
      (t.Disposable = u), (u.empty = { dispose: r.noop });
      var c = (function () {
        function e() {
          o(this, e), (this.isDisposed = !1);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          this.disposables = n;
        }
        return (
          a(e, [
            {
              key: 'add',
              value: function (e) {
                this.isDisposed ? e.dispose() : this.disposables.push(e);
              },
            },
            {
              key: 'remove',
              value: function (e) {
                var t = !1;
                if (!this.isDisposed) {
                  var n = this.disposables.indexOf(e);
                  -1 !== n &&
                    ((t = !0), this.disposables.splice(n, 1), e.dispose());
                }
                return t;
              },
            },
            {
              key: 'clear',
              value: function () {
                if (!this.isDisposed) {
                  for (
                    var e = this.disposables.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = this.disposables[n];
                  this.disposables = [];
                  for (var r = 0; r < e; r++) t[r].dispose();
                }
              },
            },
            {
              key: 'dispose',
              value: function () {
                if (!this.isDisposed) {
                  this.isDisposed = !0;
                  for (
                    var e = this.disposables.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = this.disposables[n];
                  this.disposables = [];
                  for (var r = 0; r < e; r++) t[r].dispose();
                }
              },
            },
          ]),
          e
        );
      })();
      t.CompositeDisposable = c;
      var s = (function () {
        function e() {
          o(this, e), (this.isDisposed = !1);
        }
        return (
          a(e, [
            {
              key: 'getDisposable',
              value: function () {
                return this.current;
              },
            },
            {
              key: 'setDisposable',
              value: function (e) {
                var t = this.isDisposed;
                if (!t) {
                  var n = this.current;
                  (this.current = e), n && n.dispose();
                }
                t && e && e.dispose();
              },
            },
            {
              key: 'dispose',
              value: function () {
                if (!this.isDisposed) {
                  this.isDisposed = !0;
                  var e = this.current;
                  (this.current = void 0), e && e.dispose();
                }
              },
            },
          ]),
          e
        );
      })();
      t.SerialDisposable = s;
    },
    qvEB: function (e, t, n) {
      'use strict';
      function r(e) {
        return (r =
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
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isValidType = function e(t, n) {
          return (
            'string' == typeof t ||
            'symbol' === r(t) ||
            (!!n &&
              Array.isArray(t) &&
              t.every(function (t) {
                return e(t, !1);
              }))
          );
        });
    },
    rTKX: function (e, t, n) {
      'use strict';
      function r(e) {
        return (r =
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
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.get = function (e, t, n) {
          return t.split('.').reduce(function (e, t) {
            return e && e[t] ? e[t] : n || null;
          }, e);
        }),
        (t.without = function (e, t) {
          return e.filter(function (e) {
            return e !== t;
          });
        }),
        (t.isString = function (e) {
          return 'string' == typeof e;
        }),
        (t.isObject = function (e) {
          return 'object' === r(e);
        }),
        (t.xor = function (e, t) {
          var n = new Map(),
            r = function (e) {
              return n.set(e, n.has(e) ? n.get(e) + 1 : 1);
            };
          e.forEach(r), t.forEach(r);
          var o = [];
          return (
            n.forEach(function (e, t) {
              1 === e && o.push(t);
            }),
            o
          );
        }),
        (t.intersection = function (e, t) {
          return e.filter(function (e) {
            return t.indexOf(e) > -1;
          });
        });
    },
    rlH3: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 120 120" width="120" height="120" fill="none"><g clip-path="url(#a00y35lj1)"><path fill="#2A2E39" d="M16.01 71.1c10.54 13.42 34.92 11.86 54.46-3.48s26.85-38.65 16.3-52.08C76.25 2.12 51.87 3.68 32.33 19.02c-9.2 7.22-15.68 16.2-18.87 25.09-.68 1.88-2.57 3.05-4.53 3.48a9.7 9.7 0 0 0-3.96 1.85C.5 52.94-.09 59.64 3.64 64.4a11.24 11.24 0 0 0 7.82 4.31 6.2 6.2 0 0 1 4.55 2.4z"/><path fill="#1976D2" d="M28.3 35.56c1.8 3.42 12.08 10.65 25.62 16.88 6.36 2.93 12.38 5.3 17.37 6.93a172.7 172.7 0 0 0-18-12.68c-14.59-9.1-24.97-12.4-24.97-12.4-.18.3-.19.72-.01 1.27z"/><path stroke="#B2B5BE" stroke-width="1.5" d="M86.25 71.4c-.19.28-.54.53-1.17.69-.63.15-1.48.19-2.56.08-2.14-.22-5-1-8.4-2.28-6.78-2.57-15.53-7.13-24.64-13.06-9.12-5.93-16.82-12.1-21.92-17.25-2.55-2.59-4.41-4.89-5.48-6.76a7.79 7.79 0 0 1-.96-2.37c-.12-.64-.03-1.06.16-1.35.2-.3.54-.55 1.17-.7a7.8 7.8 0 0 1 2.56-.08c2.14.22 5 1 8.4 2.28 6.78 2.57 15.53 7.12 24.65 13.06 9.1 5.93 16.81 12.1 21.9 17.25 2.56 2.58 4.43 4.89 5.5 6.76.53.94.84 1.73.95 2.37.12.64.03 1.06-.16 1.35z"/><path stroke="#B2B5BE" stroke-linecap="round" stroke-width="1.5" d="M28.96 34.63c1.99.57 4.47 1.55 7.3 2.86l12.2 6.52a193.2 193.2 0 0 1 6.66 4.15c10.56 6.88 19.12 13.86 22.97 18.45"/><path stroke="#B2B5BE" stroke-width="1.5" d="M83.79 65.59c6.77-14.14 1.41-32-13.05-41.42-14.46-9.41-32.96-7.09-43.15 4.83M74.96 21.24a6.08 6.08 0 0 1-2.58 2.3c-.9.39-1.69.35-2.23 0-.54-.36-.9-1.05-.9-2.04a6.08 6.08 0 0 1 1.05-3.29 6.07 6.07 0 0 1 2.58-2.29c.9-.4 1.69-.35 2.23 0s.9 1.05.9 2.04c.01.98-.32 2.17-1.05 3.28z"/><path stroke="#B2B5BE" stroke-linecap="round" stroke-width="1.5" d="M42.7 23.62c1.25-.3 4.56-1.3 8.92-1.3M80.14 84.07C76.5 84.03 64.4 84 50 84s-26.5.03-30.14.07M24.7 59.33l5.77 5.32M32.05 56.05l.84 3.28"/></g><defs><clipPath id="a00y35lj1"><path fill="#fff" d="M0 0h100v100H0V0z"/></clipPath></defs></svg>';
    },
    sAc8: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.useDrag = function (e) {
          var t = (0, o.useRef)(e);
          (t.current = e),
            (0, i.default)(null != e.item, 'item must be defined'),
            (0, i.default)(null != e.item.type, 'item type must be defined');
          var n =
              ((l = (0, c.useDragSourceMonitor)()),
              (d = 2),
              (function (e) {
                if (Array.isArray(e)) return e;
              })(l) ||
                (function (e, t) {
                  if (
                    Symbol.iterator in Object(e) ||
                    '[object Arguments]' === Object.prototype.toString.call(e)
                  ) {
                    var n = [],
                      r = !0,
                      o = !1,
                      i = void 0;
                    try {
                      for (
                        var a, u = e[Symbol.iterator]();
                        !(r = (a = u.next()).done) &&
                        (n.push(a.value), !t || n.length !== t);
                        r = !0
                      );
                    } catch (c) {
                      (o = !0), (i = c);
                    } finally {
                      try {
                        r || null == u.return || u.return();
                      } finally {
                        if (o) throw i;
                      }
                    }
                    return n;
                  }
                })(l, d) ||
                (function () {
                  throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance',
                  );
                })()),
            r = n[0],
            s = n[1];
          var l, d;
          (0, c.useDragHandler)(t, r, s);
          var f = (0, a.useMonitorOutput)(
              r,
              t.current.collect ||
                function () {
                  return {};
                },
              function () {
                return s.reconnect();
              },
            ),
            p = (0, o.useMemo)(
              function () {
                return s.hooks.dragSource();
              },
              [s],
            ),
            h = (0, o.useMemo)(
              function () {
                return s.hooks.dragPreview();
              },
              [s],
            );
          return (
            (0, u.useIsomorphicLayoutEffect)(
              function () {
                (s.dragSourceOptions = t.current.options || null),
                  s.reconnect();
              },
              [s],
            ),
            (0, u.useIsomorphicLayoutEffect)(
              function () {
                (s.dragPreviewOptions = t.current.previewOptions || null),
                  s.reconnect();
              },
              [s],
            ),
            [f, p, h]
          );
        });
      var r,
        o = n('q1tI'),
        i = (r = n('QLaP')) && r.__esModule ? r : { default: r },
        a = n('6ccc'),
        u = n('7bhs'),
        c = n('6joC');
    },
    sSbr: function (e, t, n) {
      'use strict';
      function r(e) {
        return (r =
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
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isRef = function (e) {
          return null !== e && 'object' === r(e) && e.hasOwnProperty('current');
        });
    },
    td7b: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          var t = e.DecoratedComponent,
            n = e.createHandler,
            l = e.createMonitor,
            d = e.createConnector,
            g = e.registerHandler,
            b = e.containerDisplayName,
            y = e.getType,
            m = e.collect,
            O = e.options.arePropsEqual,
            _ = void 0 === O ? o.default : O,
            S = t,
            w = t.displayName || t.name || 'Component',
            j = (function (e) {
              function t(e) {
                var n;
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError('Cannot call a class as a function');
                  })(this, t),
                  ((n = (function (e, t) {
                    if (t && ('object' === f(t) || 'function' == typeof t))
                      return t;
                    return (function (e) {
                      if (void 0 === e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return e;
                    })(e);
                  })(this, h(t).call(this, e))).decoratedRef = r.createRef()),
                  (n.handleChange = function () {
                    var e = n.getCurrentState();
                    (0, o.default)(e, n.state) || n.setState(e);
                  }),
                  (n.disposable = new c.SerialDisposable()),
                  n.receiveProps(e),
                  n.dispose(),
                  n
                );
              }
              return (
                (function (e, t) {
                  if ('function' != typeof t && null !== t)
                    throw new TypeError(
                      'Super expression must either be null or a function',
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    t && v(e, t);
                })(t, e),
                (function (e, t, n) {
                  t && p(e.prototype, t);
                  n && p(e, n);
                })(t, [
                  {
                    key: 'getHandlerId',
                    value: function () {
                      return this.handlerId;
                    },
                  },
                  {
                    key: 'getDecoratedComponentInstance',
                    value: function () {
                      return (
                        (0, i.default)(
                          this.decoratedRef.current,
                          'In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()',
                        ),
                        this.decoratedRef.current
                      );
                    },
                  },
                  {
                    key: 'shouldComponentUpdate',
                    value: function (e, t) {
                      return (
                        !_(e, this.props) || !(0, o.default)(t, this.state)
                      );
                    },
                  },
                  {
                    key: 'componentDidMount',
                    value: function () {
                      (this.disposable = new c.SerialDisposable()),
                        (this.currentType = void 0),
                        this.receiveProps(this.props),
                        this.handleChange();
                    },
                  },
                  {
                    key: 'componentDidUpdate',
                    value: function (e) {
                      _(this.props, e) ||
                        (this.receiveProps(this.props), this.handleChange());
                    },
                  },
                  {
                    key: 'componentWillUnmount',
                    value: function () {
                      this.dispose();
                    },
                  },
                  {
                    key: 'receiveProps',
                    value: function (e) {
                      this.handler &&
                        (this.handler.receiveProps(e), this.receiveType(y(e)));
                    },
                  },
                  {
                    key: 'receiveType',
                    value: function (e) {
                      if (
                        this.handlerMonitor &&
                        this.manager &&
                        this.handlerConnector &&
                        e !== this.currentType
                      ) {
                        this.currentType = e;
                        var t,
                          n,
                          r = g(e, this.handler, this.manager),
                          o =
                            ((n = 2),
                            (function (e) {
                              if (Array.isArray(e)) return e;
                            })((t = r)) ||
                              (function (e, t) {
                                if (
                                  Symbol.iterator in Object(e) ||
                                  '[object Arguments]' ===
                                    Object.prototype.toString.call(e)
                                ) {
                                  var n = [],
                                    r = !0,
                                    o = !1,
                                    i = void 0;
                                  try {
                                    for (
                                      var a, u = e[Symbol.iterator]();
                                      !(r = (a = u.next()).done) &&
                                      (n.push(a.value), !t || n.length !== t);
                                      r = !0
                                    );
                                  } catch (c) {
                                    (o = !0), (i = c);
                                  } finally {
                                    try {
                                      r || null == u.return || u.return();
                                    } finally {
                                      if (o) throw i;
                                    }
                                  }
                                  return n;
                                }
                              })(t, n) ||
                              (function () {
                                throw new TypeError(
                                  'Invalid attempt to destructure non-iterable instance',
                                );
                              })()),
                          i = o[0],
                          a = o[1];
                        (this.handlerId = i),
                          this.handlerMonitor.receiveHandlerId(i),
                          this.handlerConnector.receiveHandlerId(i);
                        var u = this.manager
                          .getMonitor()
                          .subscribeToStateChange(this.handleChange, {
                            handlerIds: [i],
                          });
                        this.disposable.setDisposable(
                          new c.CompositeDisposable(
                            new c.Disposable(u),
                            new c.Disposable(a),
                          ),
                        );
                      }
                    },
                  },
                  {
                    key: 'dispose',
                    value: function () {
                      this.disposable.dispose(),
                        this.handlerConnector &&
                          this.handlerConnector.receiveHandlerId(null);
                    },
                  },
                  {
                    key: 'getCurrentState',
                    value: function () {
                      return this.handlerConnector
                        ? m(
                            this.handlerConnector.hooks,
                            this.handlerMonitor,
                            this.props,
                          )
                        : {};
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var e = this;
                      return r.createElement(
                        u.DndContext.Consumer,
                        null,
                        function (t) {
                          var n = t.dragDropManager;
                          return (
                            e.receiveDragDropManager(n),
                            'undefined' != typeof requestAnimationFrame &&
                              requestAnimationFrame(function () {
                                return e.handlerConnector.reconnect();
                              }),
                            r.createElement(
                              S,
                              Object.assign({}, e.props, e.getCurrentState(), {
                                ref: (0, s.isRefable)(S)
                                  ? e.decoratedRef
                                  : null,
                              }),
                            )
                          );
                        },
                      );
                    },
                  },
                  {
                    key: 'receiveDragDropManager',
                    value: function (e) {
                      void 0 === this.manager &&
                        ((0, i.default)(
                          void 0 !== e,
                          'Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context',
                          w,
                          w,
                        ),
                        void 0 !== e &&
                          ((this.manager = e),
                          (this.handlerMonitor = l(e)),
                          (this.handlerConnector = d(e.getBackend())),
                          (this.handler = n(
                            this.handlerMonitor,
                            this.decoratedRef,
                          ))));
                    },
                  },
                ]),
                t
              );
            })(r.Component);
          return (
            (j.DecoratedComponent = t),
            (j.displayName = ''.concat(b, '(').concat(w, ')')),
            (0, a.default)(j, t)
          );
        });
      var r = (function (e) {
          if (e && e.__esModule) return e;
          var t = d();
          if (t && t.has(e)) return t.get(e);
          var n = {};
          if (null != e) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
              if (Object.prototype.hasOwnProperty.call(e, o)) {
                var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                i && (i.get || i.set)
                  ? Object.defineProperty(n, o, i)
                  : (n[o] = e[o]);
              }
          }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n('q1tI')),
        o = l(n('Gytx')),
        i = l(n('QLaP')),
        a = l(n('2mql')),
        u = n('Y4Oj'),
        c = (n('GanS'), n('q/ea')),
        s = n('aDaG');
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function d() {
        if ('function' != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function f(e) {
        return (f =
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
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function h(e) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function v(e, t) {
        return (v =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
    },
    tyJc: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7 5.5a2.5 2.5 0 0 1 5 0V7H7V5.5zM6 7V5.5a3.5 3.5 0 1 1 7 0V7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm8 2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9zm-3 2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>';
    },
    uU4G: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return {
            dirtyHandlerIds: (0, a.default)(e.dirtyHandlerIds, {
              type: t.type,
              payload: d({}, t.payload, {
                prevTargetIds: (0, c.get)(e, 'dragOperation.targetIds', []),
              }),
            }),
            dragOffset: (0, r.default)(e.dragOffset, t),
            refCount: (0, i.default)(e.refCount, t),
            dragOperation: (0, o.default)(e.dragOperation, t),
            stateId: (0, u.default)(e.stateId),
          };
        });
      var r = s(n('gpuc')),
        o = s(n('G/LZ')),
        i = s(n('jcMs')),
        a = s(n('lil0')),
        u = s(n('UzDk')),
        c = n('rTKX');
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                f(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function f(e, t, n) {
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
    },
    uwyp: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getDataFromDataTransfer = function (e, t, n) {
          var r = t.reduce(function (t, n) {
            return t || e.getData(n);
          }, '');
          return null != r ? r : n;
        });
    },
    vjmV: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('8QtF');
      Object.keys(r).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return r[e];
            },
          });
      });
      var o = n('fZSZ');
      Object.keys(o).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return o[e];
            },
          });
      });
      var i = n('Ux4w');
      Object.keys(i).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return i[e];
            },
          });
      });
    },
    vkAp: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.DragSource = function (e, t, n) {
          var f =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          (0, i.checkDecoratorArguments)(
            'DragSource',
            'type, spec, collect[, options]',
            e,
            t,
            n,
            f,
          );
          var p = e;
          'function' != typeof e &&
            ((0, r.default)(
              (0, l.isValidType)(e),
              'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
              e,
            ),
            (p = function () {
              return e;
            }));
          (0, r.default)(
            (0, o.isPlainObject)(t),
            'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
            t,
          );
          var h = (0, d.default)(t);
          return (
            (0, r.default)(
              'function' == typeof n,
              'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
              n,
            ),
            (0, r.default)(
              (0, o.isPlainObject)(f),
              'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
              n,
            ),
            function (e) {
              return (0, a.default)({
                containerDisplayName: 'DragSource',
                createHandler: h,
                registerHandler: u.registerSource,
                createConnector: function (e) {
                  return new s.SourceConnector(e);
                },
                createMonitor: function (e) {
                  return new c.DragSourceMonitorImpl(e);
                },
                DecoratedComponent: e,
                getType: p,
                collect: n,
                options: f,
              });
            }
          );
        });
      var r = f(n('QLaP')),
        o = n('GanS'),
        i = n('aDaG'),
        a = f(n('td7b')),
        u = n('lAcH'),
        c = n('T+8Q'),
        s = n('GrOC'),
        l = n('qvEB'),
        d = f(n('TF3m'));
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
    },
    x5pF: function (e, t, n) {
      e.exports = {
        title: 'title-3Lzr69Wm',
        empty: 'empty-1E2eAl4j',
        image: 'image-28q3VpEP',
        contentList: 'contentList-187Q-Fou',
      };
    },
    xNz2: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('mrSG'),
        o = n('q1tI'),
        i = n.n(o),
        a = n('i8i4'),
        u = n('mpWx'),
        c = n('txPx'),
        s = Object(c.getLogger)('DataSourcesIcons'),
        l = null;
      function d() {
        var e = n.c.zxD0;
        return e
          ? Promise.resolve(e.exports.lineToolsIcons)
          : n
              .e('line-tools-icons')
              .then(n.bind(null, 'zxD0'))
              .then(function (e) {
                return e.lineToolsIcons;
              });
      }
      function f() {
        var e = n.c.EsZh;
        return e
          ? Promise.resolve(e.exports.SERIES_ICONS)
          : n
              .e('series-icons-map')
              .then(n.bind(null, 'EsZh'))
              .then(function (e) {
                return e.SERIES_ICONS;
              });
      }
      var p = null;
      function h() {
        var e, t;
        return (
          null === p &&
            ((e = Object(u.retries)(d, 2)
              .then(function (e) {
                return e;
              })
              .catch(function (e) {
                return s.logWarn(e), {};
              })),
            (t = Object(u.retries)(f, 2)
              .then(function (e) {
                return e;
              })
              .catch(function (e) {
                return s.logWarn(e), {};
              })),
            (p = Promise.all([e, t]))),
          p.then(function (e) {
            return (l = { linetool: e[0], series: e[1] });
          })
        );
      }
      var v = n('Sn4D'),
        g = n('mkWe'),
        b = n('/KDZ'),
        y = n('YFKU'),
        m = n('g89m'),
        O = n('uhCe'),
        _ = n('b4AZ');
      var S = n('cvc5'),
        w = n.n(S),
        j = n('5rFJ'),
        D = n('Eyy1'),
        T = n('TSYQ'),
        C = n.n(T),
        E = n('Iivm'),
        M = n('N5tr'),
        I = n('82wv'),
        P = n('gla1'),
        k = o.createContext(null),
        x = n('p0W+'),
        N = n('+KIV'),
        R = n('Z3xJ'),
        A = n('B6/a'),
        L = n('nkjW'),
        B = n('JWMC');
      function H(e) {
        var t = Object(D.ensureNotNull)(Object(o.useContext)(k)).viewModel,
          n = Object(P.a)(),
          r = t.selection();
        Object(o.useEffect)(
          function () {
            var e = {};
            return (
              t.onChange().subscribe(e, function () {
                return n();
              }),
              function () {
                t.onChange().unsubscribeAll(e);
              }
            );
          },
          [t],
        ),
          Object(o.useEffect)(
            function () {
              var e = {};
              return (
                r.onChange().subscribe(e, function () {
                  return n();
                }),
                function () {
                  r.onChange().unsubscribeAll(e);
                }
              );
            },
            [r],
          );
        var a = !t.canSelectionBeUnmerged(),
          u = t.isSelectionCopiable(),
          c = t.isSelectionCloneable(),
          s = !u && !c,
          l = t.canSelectionBeGrouped();
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            'div',
            { className: T(L.title, L.withoutIcon) },
            Object(y.t)('Object tree'),
            !1,
          ),
          i.a.createElement(
            'div',
            { className: L.buttons },
            i.a.createElement(x.a, {
              className: T(L.button, !l && L.disabled),
              icon: A,
              onClick: function () {
                t.createGroupFromSelection();
              },
              isDisabled: !l,
              title: Object(y.t)('Create a group of drawings'),
              'data-name': 'group-button',
            }),
            i.a.createElement(
              I.a,
              {
                className: T(L.button, s && L.disabled),
                isDisabled: s,
                content: i.a.createElement(E.a, { icon: N }),
                title: Object(y.t)('Clone, Copy'),
                arrow: !1,
                isShowTooltip: !0,
                'data-name': 'copy-clone-button',
              },
              u &&
                i.a.createElement(M.b, {
                  'data-name': 'copy',
                  label: Object(y.t)('Copy'),
                  onClick: function () {
                    t.copySelection();
                  },
                }),
              c &&
                i.a.createElement(M.b, {
                  'data-name': 'clone',
                  label: Object(y.t)('Clone'),
                  onClick: function () {
                    t.cloneSelection();
                  },
                }),
            ),
            i.a.createElement(
              I.a,
              {
                className: T(L.button, a && L.disabled),
                isDisabled: a,
                content: i.a.createElement(E.a, { icon: R }),
                title: Object(y.t)('Move to'),
                arrow: !1,
                isShowTooltip: !0,
                'data-name': 'move-to-button',
              },
              i.a.createElement(M.b, {
                'data-name': 'new-pane-above',
                label: Object(y.t)('New pane above'),
                onClick: function () {
                  t.unmergeSelectionUp();
                },
              }),
              i.a.createElement(M.b, {
                'data-name': 'new-pane-below',
                label: Object(y.t)('New pane below'),
                onClick: function () {
                  t.unmergeSelectionDown();
                },
              }),
            ),
          ),
        );
      }
      var G,
        F = n('rRWa'),
        z = n('/MKj'),
        U = n('1TyS'),
        V = n.n(U);
      !(function (e) {
        (e.mouse = 'mouse'), (e.touch = 'touch'), (e.keyboard = 'keyboard');
      })(G || (G = {}));
      var W = 1,
        q = 0;
      function K(e) {
        return void 0 === e.button || e.button === q;
      }
      function Q(e) {
        return !!e.targetTouches;
      }
      function X(e, t) {
        return Q(e)
          ? (function (e, t) {
              return 1 === e.targetTouches.length
                ? X(e.targetTouches[0])
                : t &&
                  1 === e.touches.length &&
                  e.touches[0].target === t.target
                ? X(e.touches[0])
                : void 0;
            })(e, t)
          : { x: e.clientX, y: e.clientY };
      }
      var Y = (function () {
        var e = !1;
        try {
          addEventListener(
            'test',
            function () {},
            Object.defineProperty({}, 'passive', {
              get: function () {
                return (e = !0), !0;
              },
            }),
          );
        } catch (t) {}
        return e;
      })();
      function Z(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var J,
        $ = (function () {
          function e(t, n) {
            var r = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.enableTouchEvents = !0),
              (this.enableMouseEvents = !1),
              (this.enableKeyboardEvents = !1),
              (this.ignoreContextMenu = !1),
              (this.enableHoverOutsideTarget = !1),
              (this.touchSlop = 0),
              (this.scrollAngleRanges = void 0),
              (this.context = n),
              (this.delayTouchStart = t.delayTouchStart || t.delay || 0),
              (this.delayMouseStart = t.delayMouseStart || t.delay || 0),
              Object.keys(t).forEach(function (e) {
                null != t[e] && (r[e] = t[e]);
              });
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: 'window',
                get: function () {
                  return this.context && this.context.window
                    ? this.context.window
                    : 'undefined' != typeof window
                    ? window
                    : void 0;
                },
              },
              {
                key: 'document',
                get: function () {
                  if (this.window) return this.window.document;
                },
              },
            ]) && Z(t.prototype, n),
            r && Z(t, r),
            e
          );
        })();
      function ee(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function te(e, t, n) {
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
      var ne =
          (te((J = {}), G.mouse, {
            start: 'mousedown',
            move: 'mousemove',
            end: 'mouseup',
            contextmenu: 'contextmenu',
          }),
          te(J, G.touch, {
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend',
          }),
          te(J, G.keyboard, { keydown: 'keydown' }),
          J),
        re = (function () {
          function e(t, n, r) {
            var o = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.getSourceClientOffset = function (e) {
                return (function (e) {
                  var t = 1 === e.nodeType ? e : e.parentElement;
                  if (t) {
                    var n = t.getBoundingClientRect(),
                      r = n.top;
                    return { x: n.left, y: r };
                  }
                })(o.sourceNodes[e]);
              }),
              (this.handleTopMoveStartCapture = function (e) {
                K(e) && (o.moveStartSourceIds = []);
              }),
              (this.handleMoveStart = function (e) {
                Array.isArray(o.moveStartSourceIds) &&
                  o.moveStartSourceIds.unshift(e);
              }),
              (this.handleTopMoveStart = function (e) {
                if (K(e)) {
                  var t = X(e);
                  t &&
                    (Q(e) && (o.lastTargetTouchFallback = e.targetTouches[0]),
                    (o._mouseClientOffset = t)),
                    (o.waitingForDelay = !1);
                }
              }),
              (this.handleTopMoveStartDelay = function (e) {
                if (K(e)) {
                  var t =
                    e.type === ne.touch.start
                      ? o.options.delayTouchStart
                      : o.options.delayMouseStart;
                  (o.timeout = setTimeout(o.handleTopMoveStart.bind(o, e), t)),
                    (o.waitingForDelay = !0);
                }
              }),
              (this.handleTopMoveCapture = function () {
                o.dragOverTargetIds = [];
              }),
              (this.handleMove = function (e, t) {
                o.dragOverTargetIds && o.dragOverTargetIds.unshift(t);
              }),
              (this.handleTopMove = function (e) {
                if (
                  (o.timeout && clearTimeout(o.timeout),
                  o.document && !o.waitingForDelay)
                ) {
                  var t,
                    n,
                    r,
                    i,
                    a = o.moveStartSourceIds,
                    u = o.dragOverTargetIds,
                    c = o.options.enableHoverOutsideTarget,
                    s = X(e, o.lastTargetTouchFallback);
                  if (s)
                    if (
                      o._isScrolling ||
                      (!o.monitor.isDragging() &&
                        (function (e, t, n, r, o) {
                          if (!o) return !1;
                          for (
                            var i =
                                (180 * Math.atan2(r - t, n - e)) / Math.PI +
                                180,
                              a = 0;
                            a < o.length;
                            ++a
                          )
                            if (
                              (null == o[a].start || i >= o[a].start) &&
                              (null == o[a].end || i <= o[a].end)
                            )
                              return !0;
                          return !1;
                        })(
                          o._mouseClientOffset.x || 0,
                          o._mouseClientOffset.y || 0,
                          s.x,
                          s.y,
                          o.options.scrollAngleRanges,
                        ))
                    )
                      o._isScrolling = !0;
                    else if (
                      (!o.monitor.isDragging() &&
                        o._mouseClientOffset.hasOwnProperty('x') &&
                        a &&
                        ((t = o._mouseClientOffset.x || 0),
                        (n = o._mouseClientOffset.y || 0),
                        (r = s.x),
                        (i = s.y),
                        Math.sqrt(
                          Math.pow(Math.abs(r - t), 2) +
                            Math.pow(Math.abs(i - n), 2),
                        ) > (o.options.touchSlop ? o.options.touchSlop : 0)) &&
                        ((o.moveStartSourceIds = void 0),
                        o.actions.beginDrag(a, {
                          clientOffset: o._mouseClientOffset,
                          getSourceClientOffset: o.getSourceClientOffset,
                          publishSource: !1,
                        })),
                      o.monitor.isDragging())
                    ) {
                      var l = o.sourceNodes[o.monitor.getSourceId()];
                      o.installSourceNodeRemovalObserver(l),
                        o.actions.publishDragSource(),
                        e.preventDefault();
                      var d = (u || []).map(function (e) {
                          return o.targetNodes[e];
                        }),
                        f = o.options.getDropTargetElementsAtPoint
                          ? o.options.getDropTargetElementsAtPoint(s.x, s.y, d)
                          : o.document.elementsFromPoint(s.x, s.y),
                        p = [];
                      for (var h in f)
                        if (f.hasOwnProperty(h)) {
                          var v = f[h];
                          for (p.push(v); v; )
                            (v = v.parentElement),
                              -1 === p.indexOf(v) && p.push(v);
                        }
                      var g = p
                        .filter(function (e) {
                          return d.indexOf(e) > -1;
                        })
                        .map(function (e) {
                          for (var t in o.targetNodes)
                            if (e === o.targetNodes[t]) return t;
                        })
                        .filter(function (e) {
                          return !!e;
                        })
                        .filter(function (e, t, n) {
                          return n.indexOf(e) === t;
                        });
                      if (c)
                        for (var b in o.targetNodes)
                          if (
                            o.targetNodes[b] &&
                            o.targetNodes[b].contains(l) &&
                            -1 === g.indexOf(b)
                          ) {
                            g.unshift(b);
                            break;
                          }
                      g.reverse(), o.actions.hover(g, { clientOffset: s });
                    }
                }
              }),
              (this.handleTopMoveEndCapture = function (e) {
                (o._isScrolling = !1),
                  (o.lastTargetTouchFallback = void 0),
                  (function (e) {
                    return void 0 === e.buttons || 0 == (e.buttons & W);
                  })(e) &&
                    (o.monitor.isDragging() && !o.monitor.didDrop()
                      ? (e.preventDefault(),
                        (o._mouseClientOffset = {}),
                        o.uninstallSourceNodeRemovalObserver(),
                        o.actions.drop(),
                        o.actions.endDrag())
                      : (o.moveStartSourceIds = void 0));
              }),
              (this.handleCancelOnEscape = function (e) {
                'Escape' === e.key &&
                  o.monitor.isDragging() &&
                  ((o._mouseClientOffset = {}),
                  o.uninstallSourceNodeRemovalObserver(),
                  o.actions.endDrag());
              }),
              (this.options = new $(r, n)),
              (this.actions = t.getActions()),
              (this.monitor = t.getMonitor()),
              (this.sourceNodes = {}),
              (this.sourcePreviewNodes = {}),
              (this.sourcePreviewNodeOptions = {}),
              (this.targetNodes = {}),
              (this.listenerTypes = []),
              (this._mouseClientOffset = {}),
              (this._isScrolling = !1),
              this.options.enableMouseEvents &&
                this.listenerTypes.push(G.mouse),
              this.options.enableTouchEvents &&
                this.listenerTypes.push(G.touch),
              this.options.enableKeyboardEvents &&
                this.listenerTypes.push(G.keyboard);
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: 'setup',
                value: function () {
                  this.window &&
                    ((function (e, t) {
                      for (
                        var n = arguments.length,
                          r = new Array(n > 2 ? n - 2 : 0),
                          o = 2;
                        o < n;
                        o++
                      )
                        r[o - 2] = arguments[o];
                      if (!e) {
                        var i;
                        if (void 0 === t)
                          i = new Error(
                            'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
                          );
                        else {
                          var a = 0;
                          (i = new Error(
                            t.replace(/%s/g, function () {
                              return r[a++];
                            }),
                          )).name = 'Invariant Violation';
                        }
                        throw ((i.framesToPop = 1), i);
                      }
                    })(
                      !e.isSetUp,
                      'Cannot have two Touch backends at the same time.',
                    ),
                    (e.isSetUp = !0),
                    this.addEventListener(
                      this.window,
                      'start',
                      this.getTopMoveStartHandler(),
                    ),
                    this.addEventListener(
                      this.window,
                      'start',
                      this.handleTopMoveStartCapture,
                      !0,
                    ),
                    this.addEventListener(
                      this.window,
                      'move',
                      this.handleTopMove,
                    ),
                    this.addEventListener(
                      this.window,
                      'move',
                      this.handleTopMoveCapture,
                      !0,
                    ),
                    this.addEventListener(
                      this.window,
                      'end',
                      this.handleTopMoveEndCapture,
                      !0,
                    ),
                    this.options.enableMouseEvents &&
                      !this.options.ignoreContextMenu &&
                      this.addEventListener(
                        this.window,
                        'contextmenu',
                        this.handleTopMoveEndCapture,
                      ),
                    this.options.enableKeyboardEvents &&
                      this.addEventListener(
                        this.window,
                        'keydown',
                        this.handleCancelOnEscape,
                        !0,
                      ));
                },
              },
              {
                key: 'teardown',
                value: function () {
                  this.window &&
                    ((e.isSetUp = !1),
                    (this._mouseClientOffset = {}),
                    this.removeEventListener(
                      this.window,
                      'start',
                      this.handleTopMoveStartCapture,
                      !0,
                    ),
                    this.removeEventListener(
                      this.window,
                      'start',
                      this.handleTopMoveStart,
                    ),
                    this.removeEventListener(
                      this.window,
                      'move',
                      this.handleTopMoveCapture,
                      !0,
                    ),
                    this.removeEventListener(
                      this.window,
                      'move',
                      this.handleTopMove,
                    ),
                    this.removeEventListener(
                      this.window,
                      'end',
                      this.handleTopMoveEndCapture,
                      !0,
                    ),
                    this.options.enableMouseEvents &&
                      !this.options.ignoreContextMenu &&
                      this.removeEventListener(
                        this.window,
                        'contextmenu',
                        this.handleTopMoveEndCapture,
                      ),
                    this.options.enableKeyboardEvents &&
                      this.removeEventListener(
                        this.window,
                        'keydown',
                        this.handleCancelOnEscape,
                        !0,
                      ),
                    this.uninstallSourceNodeRemovalObserver());
                },
              },
              {
                key: 'addEventListener',
                value: function (e, t, n, r) {
                  var o = Y ? { capture: r, passive: !1 } : r;
                  this.listenerTypes.forEach(function (r) {
                    var i = ne[r][t];
                    i && e.addEventListener(i, n, o);
                  });
                },
              },
              {
                key: 'removeEventListener',
                value: function (e, t, n, r) {
                  var o = Y ? { capture: r, passive: !1 } : r;
                  this.listenerTypes.forEach(function (r) {
                    var i = ne[r][t];
                    i && e.removeEventListener(i, n, o);
                  });
                },
              },
              {
                key: 'connectDragSource',
                value: function (e, t) {
                  var n = this,
                    r = this.handleMoveStart.bind(this, e);
                  return (
                    (this.sourceNodes[e] = t),
                    this.addEventListener(t, 'start', r),
                    function () {
                      delete n.sourceNodes[e],
                        n.removeEventListener(t, 'start', r);
                    }
                  );
                },
              },
              {
                key: 'connectDragPreview',
                value: function (e, t, n) {
                  var r = this;
                  return (
                    (this.sourcePreviewNodeOptions[e] = n),
                    (this.sourcePreviewNodes[e] = t),
                    function () {
                      delete r.sourcePreviewNodes[e],
                        delete r.sourcePreviewNodeOptions[e];
                    }
                  );
                },
              },
              {
                key: 'connectDropTarget',
                value: function (e, t) {
                  var n = this;
                  if (!this.document)
                    return function () {
                      return null;
                    };
                  var r = function (r) {
                    if (n.document && n.monitor.isDragging()) {
                      var o;
                      switch (r.type) {
                        case ne.mouse.move:
                          o = { x: r.clientX, y: r.clientY };
                          break;
                        case ne.touch.move:
                          o = {
                            x: r.touches[0].clientX,
                            y: r.touches[0].clientY,
                          };
                      }
                      var i =
                          null != o
                            ? n.document.elementFromPoint(o.x, o.y)
                            : void 0,
                        a = i && t.contains(i);
                      return i === t || a ? n.handleMove(r, e) : void 0;
                    }
                  };
                  return (
                    this.addEventListener(this.document.body, 'move', r),
                    (this.targetNodes[e] = t),
                    function () {
                      n.document &&
                        (delete n.targetNodes[e],
                        n.removeEventListener(n.document.body, 'move', r));
                    }
                  );
                },
              },
              {
                key: 'getTopMoveStartHandler',
                value: function () {
                  return this.options.delayTouchStart ||
                    this.options.delayMouseStart
                    ? this.handleTopMoveStartDelay
                    : this.handleTopMoveStart;
                },
              },
              {
                key: 'installSourceNodeRemovalObserver',
                value: function (e) {
                  var t = this;
                  this.uninstallSourceNodeRemovalObserver(),
                    (this.draggedSourceNode = e),
                    (this.draggedSourceNodeRemovalObserver = new MutationObserver(
                      function () {
                        e &&
                          !e.parentElement &&
                          (t.resurrectSourceNode(),
                          t.uninstallSourceNodeRemovalObserver());
                      },
                    )),
                    e &&
                      e.parentElement &&
                      this.draggedSourceNodeRemovalObserver.observe(
                        e.parentElement,
                        { childList: !0 },
                      );
                },
              },
              {
                key: 'resurrectSourceNode',
                value: function () {
                  this.document &&
                    this.draggedSourceNode &&
                    ((this.draggedSourceNode.style.display = 'none'),
                    this.draggedSourceNode.removeAttribute('data-reactid'),
                    this.document.body.appendChild(this.draggedSourceNode));
                },
              },
              {
                key: 'uninstallSourceNodeRemovalObserver',
                value: function () {
                  this.draggedSourceNodeRemovalObserver &&
                    this.draggedSourceNodeRemovalObserver.disconnect(),
                    (this.draggedSourceNodeRemovalObserver = void 0),
                    (this.draggedSourceNode = void 0);
                },
              },
              {
                key: 'window',
                get: function () {
                  return this.options.window;
                },
              },
              {
                key: 'document',
                get: function () {
                  if (this.window) return this.window.document;
                },
              },
            ]) && ee(t.prototype, n),
            r && ee(t, r),
            e
          );
        })(),
        oe = function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return new re(e, t, n);
        },
        ie = n('Y4Oj');
      var ae,
        ue =
          ((ae = 'OBJECT_TREE'),
          function (e) {
            return ae + '__' + e;
          }),
        ce = ue('SET_NODES'),
        se = ue('SYNC_NODES'),
        le = ue('UPDATE_NODE'),
        de = ue('UPDATE_NODES'),
        fe = ue('RESET_TREE'),
        pe = ue('SET_SELECTED_IDS'),
        he = ue('DROP_SELECTION'),
        ve = ue('SELECT_PREVIOUS'),
        ge = ue('SELECT_NEXT'),
        be = ue('MULTI_SELECT_PREVIOUS'),
        ye = ue('MULTI_SELECT_NEXT'),
        me = ue('PROCESS_DROP_TARGET'),
        Oe = ue('UPDATE_DROP_TARGET'),
        _e = ue('HIDE_DROP_TARGET'),
        Se = ue('START_MULTI_SELECT'),
        we = ue('STOP_MULTI_SELECT'),
        je = (ue('REMOVE_NODE'), ue('SET_FOCUSED_NODE')),
        De = ue('SCROLL_TO_ID'),
        Te = ue('SET_IS_SELECTED'),
        Ce = ue('SET_IS_EXPANDED'),
        Ee = ue('SET_DISABLED_NODES'),
        Me = ue('MOVE_NODES'),
        Ie = (ue('START_DRAG'), ue('END_DRAG')),
        Pe = function (e) {
          return { type: ce, nodes: e };
        },
        ke = function () {
          return { type: ve };
        },
        xe = function () {
          return { type: ge };
        },
        Ne = function () {
          return { type: be };
        },
        Re = function () {
          return { type: ye };
        },
        Ae = function (e, t, n, r, o) {
          return {
            type: me,
            dropTarget: e,
            dropType: t,
            isHoveredLeft: n,
            boundBox: r,
            isLastChild: o,
          };
        },
        Le = function () {
          return { type: he };
        },
        Be = function (e, t, n) {
          return { type: Oe, node: e, dropType: t, boundBox: n };
        },
        He = function (e) {
          return { type: pe, ids: e };
        },
        Ge = function (e, t, n) {
          return { type: Me, ids: e, targetId: t, dropType: n };
        },
        Fe = function () {
          return { type: Se };
        },
        ze = function () {
          return { type: we };
        },
        Ue = function (e) {
          return { type: je, nodeId: e };
        },
        Ve = function (e) {
          return { type: De, nodeId: e };
        },
        We = function (e, t, n) {
          return (
            void 0 === n && (n = 0),
            { type: Te, nodeId: e, isSelected: t, mode: n }
          );
        },
        qe = function (e, t) {
          return { type: Ce, nodeId: e, isExpanded: t };
        },
        Ke = function (e) {
          return { type: Ee, ids: e };
        },
        Qe = function () {
          return { type: Ie };
        },
        Xe = n('G4qV'),
        Ye = function (e) {
          return e.nodes;
        },
        Ze = function (e) {
          return e.selection;
        },
        Je = function (e) {
          return e.dropTarget;
        },
        $e = function (e) {
          return e.expanded;
        },
        et = function (e) {
          return e.scrollToId;
        },
        tt = function (e, t) {
          return t;
        },
        nt = Object(Xe.a)([Ye, tt], function (e, t) {
          return e[t];
        }),
        rt = Object(Xe.a)([Ze, tt], function (e, t) {
          return e.ids.includes(t);
        }),
        ot = Object(Xe.a)([$e, tt], function (e, t) {
          return e.includes(t);
        }),
        it = Object(Xe.a)(
          [
            function (e) {
              return e.disabled;
            },
            Ze,
            tt,
          ],
          function (e, t, n) {
            return !t.ids.includes(n) && e.includes(n);
          },
        ),
        at = Object(Xe.a)(Ye, function (e) {
          return Object.keys(e);
        }),
        ut = Object(Xe.a)(Ze, function (e) {
          return e.ids;
        }),
        ct = Object(Xe.a)(Ze, function (e) {
          return e.lastFocusedNodeId;
        }),
        st = Object(Xe.a)(Ze, function (e) {
          return e.isMultiSelecting;
        }),
        lt = Object(Xe.a)([Ye, ut], function (e, t) {
          return t.map(function (t) {
            return e[t];
          });
        }),
        dt = Object(Xe.a)(Ye, function (e) {
          return Object.values(e).filter(function (e) {
            return 0 === e.level;
          });
        }),
        ft = Object(Xe.a)([Ye, dt], function (e, t) {
          return t.reduce(function (t, n) {
            return Object(r.f)(
              t,
              (function e(t, n) {
                for (var r = [], o = 0, i = n.children; o < i.length; o++) {
                  var a = i[o];
                  r.push(t[a]), r.push.apply(r, e(t, t[a]));
                }
                return r;
              })(e, Object(D.ensureDefined)(n)),
            );
          }, []);
        });
      var pt = Object(Xe.a)([Ye, dt, $e], function (e, t, n) {
          var o = new Set(n);
          return t.reduce(function (t, n) {
            return Object(r.f)(t, vt(e, Object(D.ensureDefined)(n), o));
          }, []);
        }),
        ht = Object(Xe.a)([Ye, ut, $e], function (e, t, n) {
          var o = new Set(n);
          return [{ id: 'drag-list', level: -1, children: t }].reduce(function (
            t,
            n,
          ) {
            return Object(r.f)(t, vt(e, Object(D.ensureDefined)(n), o));
          },
          []);
        });
      function vt(e, t, n) {
        for (var r = [], o = 0, i = t.children; o < i.length; o++) {
          var a = i[o],
            u = e[a];
          void 0 !== u && (r.push(u), n.has(a) && r.push.apply(r, vt(e, u, n)));
        }
        return r;
      }
      function gt(e) {
        var t, n, o, i, a;
        return Object(r.d)(this, function (u) {
          switch (u.label) {
            case 0:
              return [4, Object(j.b)(e)];
            case 1:
              return (
                (t = u.sent()),
                (n = t.selectedIds),
                (o = t.nodes),
                (i = o.reduce(function (e, t) {
                  var n;
                  return Object(r.a)(
                    Object(r.a)({}, e),
                    (((n = {})[t.id] = t), n),
                  );
                }, {})),
                [4, Object(j.e)(Pe(i))]
              );
            case 2:
              return u.sent(), [4, Object(j.e)(He(n))];
            case 3:
              return u.sent(), (a = ct), [4, Object(j.f)()];
            case 4:
              return !a.apply(void 0, [u.sent()]) && n.length > 0
                ? [4, Object(j.e)(Ue(n[0]))]
                : [3, 7];
            case 5:
              return u.sent(), [4, Object(j.e)(Ve(n[0]))];
            case 6:
              u.sent(), (u.label = 7);
            case 7:
              return [2];
          }
        });
      }
      function bt(e) {
        var t, n, o;
        return Object(r.d)(this, function (r) {
          switch (r.label) {
            case 0:
              return [4, Object(j.g)([Se, we])];
            case 1:
              return r.sent().type !== Se
                ? [3, 4]
                : ((n = at), [4, Object(j.f)()]);
            case 2:
              return (
                (t = n.apply(void 0, [r.sent()])),
                (o = t.filter(function (t) {
                  return !e(t);
                })),
                [4, Object(j.e)(Ke(o))]
              );
            case 3:
              return r.sent(), [3, 6];
            case 4:
              return [4, Object(j.e)(Ke([]))];
            case 5:
              r.sent(), (r.label = 6);
            case 6:
              return [3, 0];
            case 7:
              return [2];
          }
        });
      }
      function yt() {
        var e;
        return Object(r.d)(this, function (t) {
          switch (t.label) {
            case 0:
              (e = function () {
                var e, t, n, o, i, a, u, c, s;
                return Object(r.d)(this, function (l) {
                  switch (l.label) {
                    case 0:
                      return [4, Object(j.g)([ye, be])];
                    case 1:
                      return (e = l.sent().type), [4, Object(j.f)()];
                    case 2:
                      return (
                        (t = l.sent()),
                        (n = ft(t)),
                        (o = n.length),
                        (i = ct(t)),
                        (a = n.findIndex(function (e) {
                          return e.id === i;
                        })),
                        (u = Object(r.f)(ut(t))),
                        (e === be && 0 === a) || (e === ye && a === o - 1)
                          ? [2, 'continue']
                          : ((c = Dt(t, e === ye ? 'next' : 'previous', n, a)),
                            (s = c.id),
                            u.includes(s) && i
                              ? [4, Object(j.e)(We(i, !1, 1))]
                              : [3, 5])
                      );
                    case 3:
                      return l.sent(), [4, Object(j.e)(Ue(s))];
                    case 4:
                      return l.sent(), [3, 7];
                    case 5:
                      return [4, Object(j.e)(We(s, !0, 1))];
                    case 6:
                      l.sent(), (l.label = 7);
                    case 7:
                      return [4, Object(j.e)(Ve(s))];
                    case 8:
                      return l.sent(), [2];
                  }
                });
              }),
                (t.label = 1);
            case 1:
              return [5, e()];
            case 2:
              return t.sent(), [3, 1];
            case 3:
              return [2];
          }
        });
      }
      function mt(e, t) {
        var n;
        return Object(r.d)(this, function (o) {
          switch (o.label) {
            case 0:
              (n = function () {
                var n, o, i, a, u, c, s, l;
                return Object(r.d)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, Object(j.g)([ge, ve])];
                    case 1:
                      return (n = r.sent().type), [4, Object(j.f)()];
                    case 2:
                      return (
                        (o = r.sent()),
                        (i = ft(o)),
                        (a = ct(o)),
                        (u = i.findIndex(function (e) {
                          return e.id === a;
                        })),
                        (s = Dt(o, (c = n === ge ? 'next' : 'previous'), i, u)),
                        (l = s.id),
                        e ? (e([l], c), [3, 5]) : [3, 3]
                      );
                    case 3:
                      return [4, Object(j.e)(He([l]))];
                    case 4:
                      r.sent(), (r.label = 5);
                    case 5:
                      return t && t(l), [4, Object(j.e)(Ue(l))];
                    case 6:
                      return r.sent(), [2];
                  }
                });
              }),
                (o.label = 1);
            case 1:
              return [5, n()];
            case 2:
              return o.sent(), [3, 1];
            case 3:
              return [2];
          }
        });
      }
      function Ot(e, t) {
        var n;
        return (
          void 0 === t &&
            (t = function () {
              return !0;
            }),
          Object(r.d)(this, function (o) {
            switch (o.label) {
              case 0:
                (n = function () {
                  var n, o, i, a, u, c, s, l, d, f, p, h, v, g, b;
                  return Object(r.d)(this, function (y) {
                    switch (y.label) {
                      case 0:
                        return [4, Object(j.g)(Te)];
                      case 1:
                        return (
                          (n = y.sent()),
                          (o = n.mode),
                          (i = n.nodeId),
                          (a = n.isSelected),
                          (c = ut),
                          [4, Object(j.f)()]
                        );
                      case 2:
                        return (
                          (u = r.f.apply(void 0, [
                            c.apply(void 0, [y.sent()]),
                          ])),
                          (l = ft),
                          [4, Object(j.f)()]
                        );
                      case 3:
                        return (
                          (s = l.apply(void 0, [y.sent()])),
                          1 !== o
                            ? [3, 4]
                            : (a ? u.push(i) : u.splice(u.indexOf(i), 1),
                              [3, 7])
                        );
                      case 4:
                        return 2 === o && u.length > 0
                          ? ((f = ct), [4, Object(j.f)()])
                          : [3, 6];
                      case 5:
                        if (
                          ((d = f.apply(void 0, [y.sent()])),
                          -1 ===
                            (p = s.findIndex(function (e) {
                              return e.id === d;
                            })) &&
                            (p = s.reduce(function (e, t, n) {
                              return u.includes(t.id) ? n : e;
                            }, -1)),
                          (h = s.findIndex(function (e) {
                            return e.id === i;
                          })),
                          p !== h)
                        )
                          for (v = Math.min(p, h); v <= Math.max(p, h); v++)
                            (g = s[v].id), !u.includes(g) && t(g) && u.push(g);
                        return [3, 7];
                      case 6:
                        (u = i ? [i] : []), (y.label = 7);
                      case 7:
                        return (
                          (b = new Set(u)),
                          (u = s.reduce(function (e, t) {
                            return b.has(t.id) && e.push(t.id), e;
                          }, [])),
                          e ? (e(u), [3, 10]) : [3, 8]
                        );
                      case 8:
                        return [4, Object(j.e)(He(u))];
                      case 9:
                        y.sent(), (y.label = 10);
                      case 10:
                        return [4, Object(j.e)(Ue(i))];
                      case 11:
                        return y.sent(), [2];
                    }
                  });
                }),
                  (o.label = 1);
              case 1:
                return [5, n()];
              case 2:
                return o.sent(), [3, 1];
              case 3:
                return [2];
            }
          })
        );
      }
      function _t(e, t) {
        var n, o, i, a, u, c, s, l, d, f, p, h, v, g;
        return (
          void 0 === e &&
            (e = function () {
              return !0;
            }),
          Object(r.d)(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (n = t.dropTarget),
                  (o = t.dropType),
                  (i = t.isHoveredLeft),
                  (a = t.boundBox),
                  (u = t.isLastChild),
                  (s = Je),
                  [4, Object(j.f)()]
                );
              case 1:
                return (
                  (c = s.apply(void 0, [r.sent()])),
                  (d = nt),
                  [4, Object(j.f)()]
                );
              case 2:
                return (
                  (l = d.apply(void 0, [
                    r.sent(),
                    Object(D.ensureDefined)(n.parentId),
                  ])),
                  (f = u && 'after' === o),
                  (h = lt),
                  [4, Object(j.f)()]
                );
              case 3:
                return (
                  (p = h.apply(void 0, [r.sent()])),
                  (v = !f || (!i && e(p, n, o)) ? n : l),
                  (g = (c.node && c.node.id !== v.id) || c.dropType !== o),
                  p
                    .map(function (e) {
                      return e.id;
                    })
                    .includes(v.id)
                    ? [4, Object(j.e)({ type: _e })]
                    : [3, 5]
                );
              case 4:
                return r.sent(), [3, 7];
              case 5:
                return g && e(p, v, o) ? [4, Object(j.e)(Be(v, o, a))] : [3, 7];
              case 6:
                r.sent(), (r.label = 7);
              case 7:
                return [2];
            }
          })
        );
      }
      function St(e) {
        return Object(r.d)(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, Object(j.h)(0, me, _t, e)];
            case 1:
              return t.sent(), [2];
          }
        });
      }
      function wt(e) {
        var t, n, o, i, a, u, c, s, l;
        return Object(r.d)(this, function (r) {
          switch (r.label) {
            case 0:
              return [4, Object(j.g)(he)];
            case 1:
              return r.sent(), (n = lt), [4, Object(j.f)()];
            case 2:
              return (
                (t = n.apply(void 0, [r.sent()])), (u = Je), [4, Object(j.f)()]
              );
            case 3:
              return (
                (o = u.apply(void 0, [r.sent()])),
                (i = o.node),
                (a = o.dropType),
                i && a
                  ? ((c = new CustomEvent('tree-node-drop', {
                      detail: { nodes: t, target: i.id, type: a },
                    })),
                    e && e(c),
                    c.defaultPrevented
                      ? [3, 6]
                      : ((l = ut), [4, Object(j.f)()]))
                  : [3, 6]
              );
            case 4:
              return (
                (s = l.apply(void 0, [r.sent()])),
                [4, Object(j.e)(Ge(s, i.id, a))]
              );
            case 5:
              r.sent(), (r.label = 6);
            case 6:
              return [3, 0];
            case 7:
              return [2];
          }
        });
      }
      function jt(e) {
        var t, n;
        return Object(r.d)(this, function (r) {
          switch (r.label) {
            case 0:
              return [4, Object(j.g)(Me)];
            case 1:
              return r.sent(), (n = Ye), [4, Object(j.f)()];
            case 2:
              return (t = n.apply(void 0, [r.sent()])), e(t), [3, 0];
            case 3:
              return [2];
          }
        });
      }
      function Dt(e, t, n, r) {
        for (
          var o, i, a = n.length, u = 0;
          !o ||
          (Math.abs(u) < a &&
            (i = o).level > 1 &&
            !ot(e, Object(D.ensureDefined)(i.parentId)));

        )
          o = n[(r + (u += 'next' === t ? 1 : -1) + a) % a];
        return o;
      }
      function Tt(e) {
        var t, n, o, i, a, u, c, s, l, d, f, p, h;
        return (
          void 0 === e && (e = {}),
          Object(r.d)(this, function (r) {
            switch (r.label) {
              case 0:
                (t = e.saga),
                  (n = e.onDrop),
                  (o = e.canMove),
                  (i = e.onMove),
                  (a = e.onSelect),
                  (u = e.onKeyboardSelect),
                  (c = e.initState),
                  (s = e.canBeAddedToSelection),
                  (l = [
                    Object(j.d)(St, o),
                    Object(j.d)(wt, n),
                    Object(j.d)(Ot, a, s),
                    Object(j.d)(mt, a, u),
                    Object(j.d)(yt),
                  ]),
                  t && l.push(Object(j.d)(t)),
                  i && l.push(Object(j.d)(jt, i)),
                  s && l.push(Object(j.d)(bt, s)),
                  (r.label = 1);
              case 1:
                return c ? [4, Object(j.b)(gt, c)] : [3, 3];
              case 2:
                r.sent(), (r.label = 3);
              case 3:
                return [4, Object(j.a)(l)];
              case 4:
                return (d = r.sent()), [4, Object(j.g)(fe)];
              case 5:
                r.sent(), (f = 0), (p = d), (r.label = 6);
              case 6:
                return f < p.length
                  ? ((h = p[f]), [4, Object(j.c)(h)])
                  : [3, 9];
              case 7:
                r.sent(), (r.label = 8);
              case 8:
                return f++, [3, 6];
              case 9:
                return [3, 1];
              case 10:
                return [2];
            }
          })
        );
      }
      var Ct = n('ANjH'),
        Et = n('ogJP'),
        Mt = Object(c.getLogger)('Platform.GUI.ObjectTree.CallApi'),
        It = function (e, t, n) {
          switch (n) {
            case 'before':
              return e.indexOf(Object(D.ensureDefined)(t));
            case 'inside':
              return e.length;
            case 'after':
              return e.indexOf(Object(D.ensureDefined)(t)) + 1;
            default:
              return 0;
          }
        };
      var Pt = { ids: [], lastFocusedNodeId: void 0, isMultiSelecting: !1 };
      var kt = { node: void 0, dropType: void 0, boundBox: void 0 };
      var xt = Object(Ct.combineReducers)({
        nodes: function (e, t) {
          var n;
          switch ((void 0 === e && (e = {}), t.type)) {
            case ce:
              return t.nodes;
            case se:
              for (
                var o = t.nodes,
                  i = o.map(function (e) {
                    return e.id;
                  }),
                  a = Object(r.a)({}, e),
                  u = function (e) {
                    if (!i.includes(e)) {
                      var t = a[e].parentId;
                      t &&
                        (a[t] = Object(r.a)(Object(r.a)({}, a[t]), {
                          children: a[t].children.filter(function (t) {
                            return t !== e;
                          }),
                        })),
                        delete a[e];
                    }
                  },
                  c = 0,
                  s = Object.keys(e);
                c < s.length;
                c++
              ) {
                u(s[c]);
              }
              for (var l = 0, d = o; l < d.length; l++) {
                var f = d[l],
                  p = f.id;
                if (a.hasOwnProperty(p))
                  !Object(Et.deepEquals)(a[p].children, f.children)[0] &&
                    (a[p] = Object(r.a)(Object(r.a)({}, a[p]), {
                      children: Object(r.f)(f.children),
                    }));
                else if (
                  ((a[p] = f), (_ = f.parentId) && !a[_].children.includes(p))
                )
                  throw new Error('Not implemented');
              }
              return a;
            case le:
              t.type;
              var h = t.nodeId,
                v = Object(r.e)(t, ['type', 'nodeId']);
              return Object(r.a)(
                Object(r.a)({}, e),
                (((n = {})[h] = Object(r.a)(Object(r.a)({}, e[h]), v)), n),
              );
            case de:
              var g = t.nodes,
                b = Object(r.a)({}, e);
              return (
                Object.keys(g).forEach(function (e) {
                  b[e] = Object(r.a)(Object(r.a)({}, b[e]), g[e]);
                }),
                Object(r.a)(Object(r.a)({}, e), b)
              );
            case Me:
              for (
                var y = t.ids,
                  m = t.targetId,
                  O = t.dropType,
                  _ = Object(D.ensureDefined)(e[m].parentId),
                  S = e[_],
                  w = {},
                  j = function (t) {
                    var n = e[t];
                    if (n.parentId) {
                      var o = w[n.parentId] || e[n.parentId];
                      w[n.parentId] = Object(r.a)(Object(r.a)({}, o), {
                        children: o.children.filter(function (e) {
                          return e !== t;
                        }),
                      });
                    }
                    w[t] = Object(r.a)(Object(r.a)({}, n), {
                      parentId: _,
                      level: S.level + 1,
                    });
                  },
                  T = 0,
                  C = y;
                T < C.length;
                T++
              ) {
                j(C[T]);
              }
              var E = S.children.filter(function (e) {
                return !y.includes(e);
              });
              return (
                E.splice.apply(E, Object(r.f)([It(E, m, O), 0], y)),
                (w[_] = Object(r.a)(Object(r.a)({}, e[_]), {
                  children: E,
                  isExpanded: !0,
                })),
                Object(r.a)(Object(r.a)({}, e), w)
              );
            default:
              return e;
          }
        },
        selection: function (e, t) {
          switch ((void 0 === e && (e = Pt), t.type)) {
            case pe:
              var n = t.ids;
              return Object(r.a)(Object(r.a)({}, e), {
                ids: n,
                lastFocusedNodeId: n.length > 0 ? e.lastFocusedNodeId : void 0,
              });
            case Se:
              return Object(r.a)(Object(r.a)({}, e), { isMultiSelecting: !0 });
            case we:
              return Object(r.a)(Object(r.a)({}, e), { isMultiSelecting: !1 });
            case je:
              return Object(r.a)(Object(r.a)({}, e), {
                lastFocusedNodeId: t.nodeId,
              });
            case se:
              var o = new Set(
                t.nodes.map(function (e) {
                  return e.id;
                }),
              );
              return (
                e.lastFocusedNodeId &&
                  !o.has(e.lastFocusedNodeId) &&
                  delete e.lastFocusedNodeId,
                Object(r.a)(Object(r.a)({}, e), {
                  ids: e.ids.filter(function (e) {
                    return o.has(e);
                  }),
                })
              );
            default:
              return e;
          }
        },
        dropTarget: function (e, t) {
          switch ((void 0 === e && (e = kt), t.type)) {
            case Oe:
              var n = t.node,
                o = t.dropType,
                i = t.boundBox;
              return Object(r.a)(Object(r.a)({}, e), {
                node: n,
                dropType: o,
                boundBox: i,
              });
            case _e:
            case Ie:
            case fe:
              return Object(r.a)({}, kt);
            default:
              return e;
          }
        },
        expanded: function (e, t) {
          switch ((void 0 === e && (e = []), t.type)) {
            case Ce:
              var n = t.nodeId;
              if (t.isExpanded) return Object(r.f)(e, [n]);
              var o = Object(r.f)(e);
              return o.splice(e.indexOf(n), 1), o;
            default:
              return e;
          }
        },
        disabled: function (e, t) {
          switch ((void 0 === e && (e = []), t.type)) {
            case Ee:
              return Object(r.f)(t.ids);
            default:
              return e;
          }
        },
        scrollToId: function (e, t) {
          switch ((void 0 === e && (e = null), t.type)) {
            case De:
              return null === t.nodeId ? null : { id: t.nodeId };
            default:
              return e;
          }
        },
      });
      var Nt = n('iR1w'),
        Rt = n('qFKp');
      var At,
        Lt = n('/3z9'),
        Bt = n('l9+T'),
        Ht = n('8d0Q'),
        Gt = o.createContext({ size: 0, smallSizeTreeNodeAction: 1 }),
        Ft =
          (((At = {})[Lt.Modifiers.Mod] = 1), (At[Lt.Modifiers.Shift] = 2), At),
        zt = n('+5L9'),
        Ut = n('co4r'),
        Vt = function () {};
      function Wt(e, t) {
        try {
          var n = document.createEvent('TouchEvent');
          return (
            n.initTouchEvent(
              e,
              !0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              t.touches,
              t.targetTouches,
              t.changedTouches,
            ),
            n
          );
        } catch (r) {
          return null;
        }
      }
      var qt = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._ref = null),
              (t._handleRef = function (e) {
                t._ref = e;
                var n = t.props,
                  r = n.connectDragSource,
                  o = n.connectDropTarget,
                  i = n.connectDragPreview;
                Object(D.ensureDefined)(o)(t._ref),
                  Object(D.ensureDefined)(r)(t._ref),
                  Object(D.ensureDefined)(i)(Object(U.getEmptyImage)(), {
                    captureDraggingState: !0,
                  });
              }),
              (t._handleTouchStart = function (e) {
                var t = function (e, t) {
                    var n = Wt(e, t);
                    if (n) return n;
                    var r = Array.from(t.changedTouches),
                      o = Array.from(t.touches),
                      i = Array.from(t.targetTouches);
                    return new TouchEvent(e, {
                      bubbles: !0,
                      changedTouches: r,
                      touches: o,
                      targetTouches: i,
                    });
                  },
                  n = e.target;
                if (n instanceof Element) {
                  var r = function (e) {
                      var r = e;
                      if (!n.isConnected) {
                        r.preventDefault();
                        var o = t('touchmove', r);
                        document.body.dispatchEvent(o);
                      }
                    },
                    o = function (e) {
                      var i = e;
                      if (!n.isConnected) {
                        i.preventDefault();
                        var a = t('touchend', i);
                        document.body.dispatchEvent(a);
                      }
                      n.removeEventListener('touchend', o),
                        n.removeEventListener('touchmove', r);
                    };
                  n.addEventListener('touchend', o),
                    n.addEventListener('touchmove', r);
                }
              }),
              t
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.componentDidMount = function () {
              var e;
              null === (e = this._ref) ||
                void 0 === e ||
                e.addEventListener('touchstart', this._handleTouchStart);
            }),
            (t.prototype.componentWillUnmount = function () {
              var e;
              null === (e = this._ref) ||
                void 0 === e ||
                e.removeEventListener('touchstart', this._handleTouchStart);
            }),
            (t.prototype.render = function () {
              return i.a.createElement(
                Kt,
                Object(r.a)({}, this.props, { reference: this._handleRef }),
              );
            }),
            (t.prototype.getNode = function () {
              return Object(D.ensureNotNull)(this._ref);
            }),
            t
          );
        })(i.a.PureComponent),
        Kt = function (e) {
          var t = e.id,
            n = e.isSelected,
            a = e.isOffset,
            u = e.isExpandable,
            c = e.setIsSelected,
            s = e.isDisabled,
            l = e.isExpanded,
            d = e.onClick,
            f = e.parentId,
            p = e.setIsExpanded,
            h = e.reference,
            v = e.isFirstListItem,
            g = e.isLastListItem,
            b = e.nodeRenderer,
            y = e.isChildOfSelected,
            m = void 0 !== y && y,
            O = Object(o.useContext)(Gt),
            _ = O.size,
            S = O.smallSizeTreeNodeAction,
            w = Object(o.useRef)(null),
            j = Object(Bt.a)(function (e) {
              return (w.current = e);
            }, h),
            D = Object(Ht.b)(),
            C = D[0],
            M = D[1];
          return (
            Rt.CheckMobile.any() &&
              ((C = n),
              (M = {
                onMouseOut: Vt,
                onMouseOver: Vt,
              })),
            i.a.createElement(
              'div',
              Object(r.a)(
                {
                  className: T(
                    Ut.wrap,
                    n && Ut.selected,
                    m && Ut.childOfSelected,
                    s && Ut.disabled,
                    u && Ut.expandable,
                  ),
                  onClick:
                    1 === _ && 0 === S
                      ? I
                      : function (e) {
                          if (e.defaultPrevented) return;
                          var r = Ft[Object(Lt.modifiersFromEvent)(e)] || 0;
                          !s && c && c(t, !n, r);
                          d && 0 === r && d(e, t);
                        },
                  onContextMenu: I,
                  ref: j,
                },
                M,
              ),
              u &&
                i.a.createElement(E.a, {
                  icon: zt,
                  className: T(Ut.expandHandle, l && Ut.expanded),
                  onClick: function (e) {
                    e.preventDefault(), u && p(t, !l);
                  },
                  onMouseDown: function (e) {
                    e.preventDefault();
                  },
                }),
              b({
                id: t,
                isOffset: a,
                parentId: f,
                isDisabled: s,
                isSelected: n,
                isChildOfSelected: m,
                isHovered: C,
                isExpanded: l,
                isFirstListItem: v,
                isLastListItem: g,
              }),
            )
          );
          function I() {
            s || n || !c || c(t, !0);
          }
        },
        Qt = i.a.createContext({});
      function Xt(e, t) {
        for (
          var n = t.id, o = nt(e, n), i = rt(e, n), a = !1, u = o.parentId;
          u && !a;

        )
          (a = rt(e, u)), (u = nt(e, u).parentId);
        return Object(r.a)(Object(r.a)({}, o), {
          isSelected: i,
          isChildOfSelected: a,
          isExpanded: o.children.length > 0 && ot(e, n),
          isExpandable: o.children.length > 0,
          isDisabled: it(e, n),
        });
      }
      function Yt(e) {
        return Object(Ct.bindActionCreators)(
          {
            setIsExpanded: qe,
            processDropTarget: Ae,
            dropSelection: Le,
            selectNext: xe,
            selectPrevious: ke,
            setIsSelected: We,
            endDrag: Qe,
          },
          e,
        );
      }
      var Zt = Object(ie.DragSource)(
          'node',
          {
            beginDrag: function (e) {
              var t = e.id,
                n = e.isDisabled,
                r = e.isSelected;
              return n || r || e.setIsSelected(t, !0), e;
            },
            endDrag: function (e) {
              return e.endDrag();
            },
          },
          function (e) {
            return {
              connectDragSource: e.dragSource(),
              connectDragPreview: e.dragPreview(),
            };
          },
        ),
        Jt = Object(ie.DropTarget)(
          'node',
          {
            hover: function (e, t, n) {
              if (n) {
                var r = n.getNode(),
                  o = r.getBoundingClientRect(),
                  i = o.bottom - o.top,
                  a = t.getClientOffset();
                if (a) {
                  var u = a.y - o.top,
                    c = void 0;
                  c =
                    0 === e.children.length
                      ? u < i / 2
                        ? 'before'
                        : 'after'
                      : u < i / 3
                      ? 'before'
                      : e.isExpanded || (u >= i / 3 && u < (2 * i) / 3)
                      ? 'inside'
                      : 'after';
                  var s = void 0;
                  if (void 0 !== e.getContainerElement) {
                    var l = e.getContainerElement().getBoundingClientRect();
                    s = {
                      top: o.top - l.top,
                      left: o.left - l.left,
                      bottom: o.top - l.top + o.height,
                      right: o.left - l.left + o.width,
                      height: o.height,
                      width: o.width,
                    };
                  } else
                    s = {
                      top: r.offsetTop,
                      left: r.offsetLeft,
                      bottom: r.offsetTop + r.offsetHeight,
                      right: r.offsetLeft + r.offsetWidth,
                      height: r.offsetHeight,
                      width: r.offsetWidth,
                    };
                  e.processDropTarget(
                    e,
                    c,
                    a.x - o.left < 48,
                    s,
                    e.isLastChild,
                  );
                }
              }
            },
          },
          function (e) {
            return { connectDropTarget: e.dropTarget() };
          },
        ),
        $t = Object(z.b)(Xt, Yt, null, { context: Qt })(Zt(Jt(qt))),
        en = Object(z.b)(Xt, Yt, null, { context: Qt })(Kt),
        tn = n('d700'),
        nn = n('AiMB');
      function rn(e) {
        var t = e(),
          n = Object(o.useRef)(t);
        n.current = t;
        var r = Object(o.useState)(n.current),
          i = r[0],
          a = r[1],
          u = Object(o.useRef)(null);
        return (
          Object(o.useEffect)(function () {
            null === u.current &&
              (u.current = requestAnimationFrame(function () {
                (u.current = null), a(n.current);
              }));
          }),
          Object(o.useEffect)(function () {
            return function () {
              u.current && cancelAnimationFrame(u.current);
            };
          }, []),
          i
        );
      }
      function on(e) {
        var t = e.dropTargetOffset,
          n = e.mousePosition;
        if (!t) return { display: 'none' };
        var r = t.x,
          o = t.y,
          i = n && t ? n.y - t.y : 0,
          a =
            'translate(' +
            (r + (n && t ? n.x - t.x : 0)) +
            'px, ' +
            (o + i) +
            'px)';
        return { transform: a, WebkitTransform: a };
      }
      var an = {
        top: 0,
        left: 0,
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 100,
        opacity: 0.5,
        width: 300,
        backgroundColor: 'red',
      };
      var un = Object(ie.DragLayer)(function (e) {
          return {
            isDragging: e.isDragging(),
            mousePosition: e.getClientOffset(),
            dropTargetOffset: e.getSourceClientOffset(),
          };
        })(
          Object(z.b)(
            function (e) {
              return { items: ht(e) };
            },
            null,
            null,
            { context: Qt },
          )(function (e) {
            var t = e.items,
              n = e.isDragging,
              o = e.nodeRenderer,
              a = e.dragPreviewRenderer;
            return rn(function () {
              return n
                ? i.a.createElement(
                    nn.a,
                    null,
                    i.a.createElement(
                      'div',
                      { style: Object(r.a)(Object(r.a)({}, an), on(e)) },
                      t.map(function (e) {
                        if (a) {
                          var t = a;
                          return i.a.createElement(
                            t,
                            Object(r.a)({ key: e.id }, e),
                          );
                        }
                        return i.a.createElement(en, {
                          id: e.id,
                          key: e.id,
                          nodeRenderer: o,
                          isDragPreview: !0,
                          isOffset: e.level > 1,
                        });
                      }),
                    ),
                  )
                : null;
            });
          }),
        ),
        cn = n('0lNN'),
        sn = n('n9z6'),
        ln = i.a.forwardRef(function (e, t) {
          var n = Object(o.useRef)(null);
          return (
            e.connectDropTarget(n),
            Object(o.useImperativeHandle)(
              t,
              function () {
                return {
                  getNode: function () {
                    return Object(D.ensureNotNull)(n.current);
                  },
                };
              },
              [],
            ),
            i.a.createElement('div', {
              ref: n,
              style: { height: '100%', width: '100%' },
            })
          );
        }),
        dn = Object(ie.DropTarget)(
          'node',
          {
            hover: function (e, t, n) {
              if (n) {
                var r = t.getClientOffset();
                if (null !== r) {
                  var o = e.getOrderedNodes();
                  if (0 !== o.length) {
                    var i = n.getNode().getBoundingClientRect(),
                      a = e.getContainerElement().getBoundingClientRect();
                    if ('first' === e.type) {
                      var u = {
                        top: i.top - a.top + i.height,
                        left: i.left - a.left,
                        bottom: i.top - a.top + i.height,
                        right: i.left - a.left + i.width,
                        height: 0,
                        width: i.width,
                      };
                      e.processDropTarget(o[0], 'before', !1, u, !1);
                    }
                    if ('last' === e.type) {
                      var c = r.x - i.left < 48,
                        s = o[o.length - 1],
                        l =
                          c && 2 === s.level
                            ? Object(D.ensureDefined)(
                                o.find(function (e) {
                                  return e.id === s.parentId;
                                }),
                              )
                            : s;
                      u = {
                        top: i.top - a.top,
                        left: i.left - a.left,
                        bottom: i.top - a.top,
                        right: i.left - a.left + i.width,
                        height: i.height,
                        width: i.width,
                      };
                      e.processDropTarget(l, 'after', c, u, !1);
                    }
                  }
                }
              }
            },
          },
          function (e) {
            return { connectDropTarget: e.dropTarget() };
          },
        )(ln),
        fn = i.a.createContext({ isOver: !1, transform: void 0 }),
        pn = n('4ceR');
      function hn(e) {
        var t = e.dropType,
          n = e.boundBox,
          r = Object(D.ensureDefined)(n),
          o = r.top,
          i = r.bottom;
        return [r.left, 'before' === t || 'inside' === t ? o : i];
      }
      var vn = Object(ie.DragLayer)(function (e) {
          return { isDragging: e.isDragging() };
        })(
          Object(z.b)(
            function (e) {
              var t = Je(e),
                n = t.boundBox,
                r = t.dropType,
                o = t.node;
              return { boundBox: n, dropType: r, level: o ? o.level : void 0 };
            },
            null,
            null,
            { context: Qt },
          )(function (e) {
            var t = e.dropType,
              n = e.boundBox,
              r = e.isDragging,
              i = e.level,
              a = e.transform,
              u = void 0 === a ? hn : a;
            return rn(function () {
              var a;
              if (!r || !t || !n) return null;
              var c =
                  (((a = {})[pn.dropTarget] = 'inside' !== t),
                  (a[pn.dropTargetInside] = 'inside' === t),
                  a),
                s = n.width,
                l = n.height,
                d = u(e),
                f = d[0],
                p = d[1],
                h = 'translate(' + f + 'px, ' + p + 'px)';
              return o.createElement('div', {
                className: T(c),
                style: {
                  position: 'absolute',
                  transform: h,
                  WebkitTransform: h,
                  top: 0,
                  left: 2 === i ? '46px' : 0,
                  width: 2 === i ? s - 46 + 'px' : s,
                  height: 'inside' === t ? l : '2px',
                },
              });
            });
          }),
        ),
        gn = i.a.forwardRef(function (e, t) {
          var n = Object(o.useContext)(fn);
          return i.a.createElement(
            'div',
            Object(r.a)({}, e, { ref: t }),
            e.children,
            n.isOver && i.a.createElement(vn, { transform: n.transform }),
          );
        }),
        bn = n('Ialn'),
        yn = n('DGxW'),
        mn = 38 + Lt.Modifiers.Shift,
        On = 40 + Lt.Modifiers.Shift;
      var _n = i.a.forwardRef(function (e, t) {
          var n = e.navigationKeys,
            a = e.renderList,
            u = e.stopMultiSelect,
            c = e.startMultiSelect,
            s = e.isMultiSelecting,
            l = e.nodeRenderer,
            d = e.dragPreviewRenderer,
            f = e.className,
            p = e.connectDropTarget,
            h = e.readOnly,
            v = e.onClick,
            g = e.dropLayerTransform,
            b = e.setFocusedNode,
            y = e.scrollToId,
            m = e.rowHeight,
            O = e.onMultiSelectPrevious,
            _ = e.onMultiSelectNext,
            S = e.onMoveCursorToNext,
            w = e.onMoveCursorToPrevious,
            j = e.outerRef,
            T = e.width,
            E = e.height,
            M = e.isOver,
            I = e.processDropTarget,
            P = Object(o.useContext)(k),
            x = Object(o.useRef)(null);
          Object(o.useEffect)(
            function () {
              var e = function (e) {
                  [Lt.Modifiers.Mod, Lt.Modifiers.Shift].includes(
                    Object(Lt.modifiersFromEvent)(e),
                  ) && c();
                },
                t = function (e) {
                  s &&
                    ![Lt.Modifiers.Mod, Lt.Modifiers.Shift].includes(
                      Object(Lt.modifiersFromEvent)(e),
                    ) &&
                    u();
                };
              return (
                document.addEventListener('keydown', e),
                document.addEventListener('keyup', t),
                document.addEventListener('mousemove', t),
                function () {
                  document.removeEventListener('keydown', e),
                    document.removeEventListener('keyup', t),
                    document.removeEventListener('mousemove', t);
                }
              );
            },
            [s],
          ),
            (function (e) {
              Object(o.useEffect)(function () {
                if (Rt.isEdge) {
                  var t = null,
                    n = Object(D.ensureNotNull)(e.current),
                    r = function (e) {
                      if (e.target instanceof Element) {
                        var n = Object(D.ensureNotNull)(
                          e.target.closest('[draggable]'),
                        );
                        n instanceof HTMLElement &&
                          ((n.style.opacity = '0'),
                          (t = requestAnimationFrame(function () {
                            return (n.style.opacity = '1');
                          })));
                      }
                    };
                  return (
                    n.addEventListener('dragstart', r),
                    function () {
                      n.removeEventListener('dragstart', r),
                        null !== t && cancelAnimationFrame(t);
                    }
                  );
                }
                return function () {};
              }, []);
            })(x);
          var N = Object(o.useCallback)(function () {
              return Object(D.ensureNotNull)(Q.current);
            }, []),
            R = Object(o.useCallback)(
              function () {
                return a;
              },
              [a],
            ),
            A = Object(o.useMemo)(
              function () {
                var e,
                  t = h ? en : $t,
                  n = [];
                n.push({
                  type: 'padding',
                  node: i.a.createElement(dn, {
                    type: 'first',
                    key: 'padding-top',
                    getContainerElement: N,
                    getOrderedNodes: R,
                    processDropTarget: I,
                  }),
                });
                for (var r = 0; r < a.length; r++) {
                  var o = a[r];
                  1 === o.level &&
                    (void 0 !== e &&
                      e !== o.parentId &&
                      n.push({
                        type: 'separator',
                        node: i.a.createElement('div', {
                          key: e + '_separator',
                          className: yn.separator,
                        }),
                      }),
                    (e = o.parentId)),
                    n.push({
                      type: 'node',
                      node: i.a.createElement(t, {
                        id: o.id,
                        key: o.id,
                        isFirstListItem: 0 === r,
                        isLastListItem: r === a.length - 1,
                        isExpandable: o.children.length > 0,
                        nodeRenderer: l,
                        readOnly: h,
                        onClick: v,
                        isOffset: o.level > 1,
                        getContainerElement: N,
                      }),
                    });
                }
                return (
                  n.push({
                    type: 'padding',
                    node: i.a.createElement(dn, {
                      type: 'last',
                      key: 'padding-bottom',
                      getContainerElement: N,
                      getOrderedNodes: R,
                      processDropTarget: I,
                    }),
                  }),
                  n
                );
              },
              [a],
            ),
            L = Object(o.useRef)([]);
          L.current = A;
          var B = Object(o.useCallback)(function (e) {
              var t = e.style,
                n = e.index;
              return (
                n === L.current.length - 1 &&
                  delete (t = Object(r.a)(Object(r.a)({}, t), {
                    bottom: 0,
                    minHeight: t.height,
                  })).height,
                i.a.createElement('div', { style: t }, L.current[n].node)
              );
            }, []),
            H = Object(o.useCallback)(
              function (e) {
                var t = L.current[e];
                return 'padding' === t.type
                  ? 6
                  : 'function' == typeof m
                  ? m(e, t)
                  : m;
              },
              [m],
            ),
            G = Object(o.useCallback)(function (e) {
              return Object(D.ensure)(L.current[e].node.key);
            }, []),
            F = Object(o.useMemo)(
              function () {
                return null === y
                  ? { index: -1 }
                  : {
                      index: L.current.findIndex(function (e) {
                        return e.node.key === y.id;
                      }),
                    };
              },
              [y],
            );
          p(x);
          var z = Object(sn.a)(),
            U = z[0],
            V = z[1],
            W = z[2],
            q = z[3],
            K = Object(o.useRef)(null);
          Object(o.useEffect)(
            function () {
              return Object(D.ensureNotNull)(K.current).resetAfterIndex(0, !0);
            },
            [A],
          ),
            Object(o.useEffect)(
              function () {
                return Object(D.ensureNotNull)(K.current).scrollToItem(F.index);
              },
              [F],
            );
          var Q = Object(o.useRef)(null),
            X = Object(o.useMemo)(
              function () {
                return { isOver: M, transform: g };
              },
              [M, g],
            ),
            Y = Object(o.useRef)(null),
            Z = Object(o.useRef)({
              startScroll: function (e) {
                var t = function () {
                  null !== W.current &&
                    ((Y.current = requestAnimationFrame(t)),
                    W.current.scrollBy({ top: e }));
                };
                this.stopScroll(), t();
              },
              stopScroll: function () {
                null !== Y.current &&
                  (cancelAnimationFrame(Y.current), (Y.current = null));
              },
              getListElement: function () {
                return W.current;
              },
            });
          return (
            Object(o.useImperativeHandle)(
              t,
              function () {
                return Z.current;
              },
              [],
            ),
            Object(o.useEffect)(
              function () {
                return function () {
                  return Z.current.stopScroll();
                };
              },
              [M],
            ),
            i.a.createElement(
              fn.Provider,
              { value: X },
              i.a.createElement(
                'div',
                Object(r.a)({}, V, {
                  className: C()(yn.tree, f),
                  ref: x,
                  tabIndex: -1,
                  onKeyDown: function (e) {
                    var t = Object(Lt.hashFromEvent)(e);
                    if (e.defaultPrevented || Object(tn.a)(t, e.target)) return;
                    P || t !== mn || (e.preventDefault(), O());
                    P || t !== On || (e.preventDefault(), _());
                    (38 === t || (void 0 !== n && 'previous' === n[t])) &&
                      (e.preventDefault(), w());
                    (40 === t || (void 0 !== n && 'next' === n[t])) &&
                      (e.preventDefault(), S());
                    if ((8 === t || 46 === t) && P) {
                      var r = P.viewModel,
                        o = r.selection(),
                        i = o.selected();
                      if (1 !== i.length) return;
                      var a = r.getNextNodeIdAfterRemove(i[0]);
                      if (null === a) return;
                      r.onChange().subscribe(
                        null,
                        function () {
                          if (!o.selected().length) {
                            var e = r.entity(a);
                            e && (o.set([e]), b(a));
                          }
                        },
                        !0,
                      );
                    }
                  },
                }),
                i.a.createElement(
                  cn.a,
                  Object(r.a)({}, U, { className: yn.overlayScrollWrap }),
                ),
                i.a.createElement(Nt.b, {
                  ref: function (e) {
                    K.current = e;
                  },
                  className: yn.listContainer,
                  width: T,
                  height: E,
                  itemCount: A.length,
                  itemSize: H,
                  children: B,
                  itemKey: G,
                  outerRef: function (e) {
                    (W.current = e), j && j(e);
                  },
                  innerRef: function (e) {
                    Q.current = e;
                  },
                  innerElementType: gn,
                  onItemsRendered: function () {
                    q();
                  },
                  overscanCount: 20,
                  direction: Object(bn.isRtl)() ? 'rtl' : 'ltr',
                }),
                i.a.createElement(un, {
                  dragPreviewRenderer: d,
                  nodeRenderer: l,
                }),
              ),
            )
          );
        }),
        Sn = Object(ie.DropTarget)(
          'node',
          {
            drop: function (e, t, n) {
              ('touch' === e.drag || Rt.isFF) && n.stopScroll(),
                t.getItem().dropSelection();
            },
            hover: function (e, t, n) {
              if ('touch' === e.drag || Rt.isFF) {
                var r = t.getClientOffset();
                if (null !== r) {
                  var o = n.getListElement();
                  if (null !== o) {
                    var i,
                      a,
                      u,
                      c,
                      s,
                      l,
                      d,
                      f,
                      p,
                      h = o.getBoundingClientRect();
                    (i = r.y),
                      (a = h.bottom),
                      (u = h.top),
                      (f = Math.abs(i - u)),
                      ((p = Math.abs(i - a)) > 40 && f > 40) ||
                      (f <= 40 && p <= 40)
                        ? n.stopScroll()
                        : ((c = p > 20 && p <= 40),
                          (l = f <= 20),
                          (d = p <= 20),
                          (s = f > 20 && f <= 40) || c
                            ? 'touch' === e.drag
                              ? n.startScroll(s ? -5 : 5)
                              : n.startScroll(s ? -2 : 2)
                            : (l || d) &&
                              ('touch' === e.drag
                                ? n.startScroll(l ? -10 : 10)
                                : n.startScroll(l ? -5 : 5)));
                  }
                }
              }
            },
          },
          function (e, t) {
            return { connectDropTarget: e.dropTarget(), isOver: t.isOver() };
          },
        )(_n);
      var wn = Object(z.b)(
          function (e) {
            return {
              renderList: pt(e),
              orderedNodes: ft(e),
              isMultiSelecting: st(e),
              selectedIds: ut(e),
              scrollToId: et(e),
            };
          },
          function (e) {
            return Object(Ct.bindActionCreators)(
              {
                startMultiSelect: Fe,
                stopMultiSelect: ze,
                setFocusedNode: Ue,
                processDropTarget: Ae,
                onMoveCursorToNext: xe,
                onMoveCursorToPrevious: ke,
                onMultiSelectPrevious: Ne,
                onMultiSelectNext: Re,
              },
              e,
            );
          },
          null,
          { context: Qt },
        )(Sn),
        jn = { delayTouchStart: 100 };
      function Dn(e) {
        var t = e.canBeAddedToSelection,
          n = e.initState,
          a = e.onSelect,
          u = e.canMove,
          c = e.onDrop,
          s = e.onMove,
          l = e.nodes,
          d = e.selectedIds,
          f = e.onKeyboardSelect,
          p = e.saga,
          h = e.lastFocusedNodeObject,
          v = e.scrollToId,
          g = Object(r.e)(e, [
            'canBeAddedToSelection',
            'initState',
            'onSelect',
            'canMove',
            'onDrop',
            'onMove',
            'nodes',
            'selectedIds',
            'onKeyboardSelect',
            'saga',
            'lastFocusedNodeObject',
            'scrollToId',
          ]),
          b = Object(o.useState)(null),
          y = b[0],
          m = b[1];
        return (
          Object(o.useEffect)(function () {
            var e = Object(F.b)();
            m(
              (function (e) {
                var t = Object(Ct.applyMiddleware)(e);
                return Object(Ct.createStore)(xt, t);
              })(e),
            );
            var r = e.run(Tt, {
              initState: n,
              onKeyboardSelect: f,
              saga: p,
              canMove: u,
              onMove: s,
              onDrop: c,
              onSelect: a,
              canBeAddedToSelection: t,
            });
            return function () {
              return r.cancel();
            };
          }, []),
          Object(o.useEffect)(
            function () {
              return (
                null !== y &&
                  l &&
                  y.dispatch(
                    (function (e) {
                      return { type: se, nodes: e };
                    })(l),
                  ),
                function () {}
              );
            },
            [y, l],
          ),
          Object(o.useEffect)(
            function () {
              null !== y && d && y.dispatch(He(d));
            },
            [y, d],
          ),
          Object(o.useEffect)(
            function () {
              null !== y && (null == h ? void 0 : h.id) && y.dispatch(Ue(h.id));
            },
            [y, h],
          ),
          null === y
            ? null
            : i.a.createElement(Tn, Object(r.a)({ store: y, scrollToId: v }, g))
        );
      }
      var Tn = i.a.memo(function (e) {
        var t = e.store,
          n = e.scrollToId,
          a = Object(r.e)(e, ['store', 'scrollToId']),
          u = 'touch' === e.drag ? oe : V.a;
        return (
          Object(o.useEffect)(
            function () {
              var e;
              t.dispatch(
                Ve(
                  null !== (e = null == n ? void 0 : n.id) && void 0 !== e
                    ? e
                    : null,
                ),
              );
            },
            [n],
          ),
          i.a.createElement(
            ie.DndProvider,
            { backend: u, options: jn },
            i.a.createElement(
              z.a,
              { store: t, context: Qt },
              i.a.createElement(wn, Object(r.a)({}, a)),
            ),
          )
        );
      });
      function Cn(e, t) {
        Object(B.trackEvent)('Object Tree', e, t);
      }
      function En(e) {
        return e.length > 1 ? 'Multi select' : e[0].gaLabel();
      }
      function Mn(e) {
        return Object(F.c)(function (t) {
          var n = {};
          return (
            e.onChange().subscribe(n, function () {
              return t({ type: fe });
            }),
            e.onGroupCreated().subscribe(n, function (e) {
              return t(qe(e, !0));
            }),
            e
              .selection()
              .onChange()
              .subscribe(n, function (e) {
                return t(He(e));
              }),
            function () {
              e.onChange().unsubscribeAll(n),
                e.selection().onChange().unsubscribeAll(n),
                e.onGroupCreated().unsubscribeAll(n);
            }
          );
        }, F.a.expanding());
      }
      function In() {
        return Object(r.d)(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, Object(j.g)([ge, ve])];
            case 1:
              return e.sent(), Cn('Select', 'Arrow'), [3, 0];
            case 2:
              return [2];
          }
        });
      }
      function Pn() {
        var e;
        return Object(r.d)(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, Object(j.g)(Te)];
            case 1:
              return (
                1 === (e = t.sent().mode) && Cn('Multi select', 'Ctrl'),
                2 === e && Cn('Multi select', 'Shift'),
                [3, 0]
              );
            case 2:
              return [2];
          }
        });
      }
      function kn(e) {
        var t, n, o, i, a, u, c, s;
        return Object(r.d)(this, function (r) {
          switch (r.label) {
            case 0:
              return [4, Object(j.g)(he)];
            case 1:
              return r.sent(), (i = Je), [4, Object(j.f)()];
            case 2:
              return (
                (t = i.apply(void 0, [r.sent()])),
                (n = t.node),
                (o = t.dropType),
                n ? ((u = lt), [4, Object(j.f)()]) : [3, 4]
              );
            case 3:
              (a = u.apply(void 0, [r.sent()])),
                (c = a.map(function (t) {
                  return Object(D.ensureNotNull)(e.entity(t.id));
                })),
                (s = 'Drag'),
                1 === n.level &&
                'inside' !== o &&
                a.some(function (e) {
                  return 2 === e.level;
                })
                  ? (s = 'From the group')
                  : (2 !== n.level && 'inside' !== o) ||
                    !a.some(function (e) {
                      return 1 === e.level;
                    })
                  ? 1 === a.length &&
                    a[0].parentId !== n.parentId &&
                    (s = 'Existing pane')
                  : (s = 'To the group'),
                Cn(s, En(c)),
                (r.label = 4);
            case 4:
              return [3, 0];
            case 5:
              return [2];
          }
        });
      }
      function xn(e) {
        return Object(r.d)(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, Object(j.d)(In)];
            case 1:
              return t.sent(), [4, Object(j.d)(Pn)];
            case 2:
              return t.sent(), [4, Object(j.d)(kn, e)];
            case 3:
              return t.sent(), [2];
          }
        });
      }
      function Nn(e) {
        var t, n;
        return Object(r.d)(this, function (r) {
          switch (r.label) {
            case 0:
              return [4, Object(j.d)(xn, e)];
            case 1:
              return r.sent(), [4, Object(j.b)(Mn, e)];
            case 2:
              (t = r.sent()),
                Mt.logNormal('Opened object tree data source channel'),
                (r.label = 3);
            case 3:
              r.trys.push([3, , 8, 9]), (r.label = 4);
            case 4:
              return [4, Object(j.g)(t)];
            case 5:
              return (n = r.sent()), [4, Object(j.e)(n)];
            case 6:
              return r.sent(), [3, 4];
            case 7:
              return [3, 9];
            case 8:
              return (
                Mt.logNormal('Closed object tree data source channel'),
                t.close(),
                [7]
              );
            case 9:
              return [2];
          }
        });
      }
      var Rn = n('5VQP'),
        An = o.createContext(null),
        Ln = n('XAms'),
        Bn = n('9S1y'),
        Hn = n('h5pj'),
        Gn = Modernizr.mobiletouch ? 'touch' : 'native';
      function Fn(e) {
        var t = e.viewModel,
          n = e.showHeader,
          a = void 0 === n || n,
          u = e.nodeRenderer,
          c = e.isDialog,
          s = void 0 !== c && c,
          l = Object(o.useRef)(null),
          d = (function (e) {
            var t = Object(o.useState)(e.getChartId()),
              n = t[0],
              r = t[1],
              i = Object(o.useRef)(n);
            return (
              (i.current = n),
              Object(o.useEffect)(function () {
                return (
                  e.onChange().subscribe(null, t),
                  function () {
                    e.onChange().unsubscribe(null, t);
                  }
                );
                function t() {
                  var t = e.getChartId();
                  i.current !== t && r(t);
                }
              }, []),
              n
            );
          })(t),
          f = Object(Bn.a)(),
          p = f[0],
          h = f[1],
          v = Object(o.useState)(null),
          g = v[0],
          b = v[1],
          y = Object(o.useMemo)(
            function () {
              return { isTouch: Modernizr.touch, isDialog: s };
            },
            [s],
          );
        return i.a.createElement(
          An.Provider,
          { value: y },
          i.a.createElement(
            k.Provider,
            { value: { viewModel: t } },
            i.a.createElement(
              'div',
              { className: Hn.wrap, onContextMenu: Ln.b },
              a && i.a.createElement(H, null),
              i.a.createElement(
                w.a,
                { onMeasure: p },
                i.a.createElement(
                  'div',
                  {
                    className: Hn.space,
                    onClick: function (e) {
                      if (e.defaultPrevented) return;
                      if (!(e.target instanceof Element) || null === l.current)
                        return;
                      e.target === l.current && t.selection().set([]);
                    },
                  },
                  null !== h &&
                    i.a.createElement(Dn, {
                      key: d,
                      height: h.height,
                      width: h.width,
                      canBeAddedToSelection: function (e) {
                        var n = t.entity(e);
                        return t.selection().canBeAddedToSelection(n);
                      },
                      nodeRenderer: u,
                      initState: function () {
                        var e = t.getState(),
                          n = e.nodes;
                        return { selectedIds: e.selection, nodes: n };
                      },
                      canMove: function (e, n, r) {
                        return t.isSelectionDropable(n.id, r);
                      },
                      drag: Gn,
                      rowHeight: zn,
                      onSelect: function (e) {
                        var n = e
                          .map(function (e) {
                            return t.entity(e);
                          })
                          .filter(function (e) {
                            return null !== e;
                          });
                        t.selection().set(n);
                        var r = Rn.ContextMenuManager.getShown();
                        r && r.hide();
                      },
                      onDrop: function (e) {
                        e.preventDefault();
                        var n = e.detail,
                          r = n.target,
                          o = n.type;
                        t.insertSelection(r, o);
                      },
                      scrollToId: g,
                      saga: function () {
                        return Object(r.d)(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return [4, Object(j.d)(Nn, t)];
                            case 1:
                              return e.sent(), [2];
                          }
                        });
                      },
                      onKeyboardSelect: function (e) {
                        b({ id: e });
                      },
                      outerRef: function (e) {
                        l.current = e;
                      },
                    }),
                ),
              ),
            ),
          ),
        );
      }
      function zn(e, t) {
        switch (t.type) {
          case 'node':
            return 38;
          case 'separator':
            return 13;
        }
      }
      var Un,
        Vn = n('Kxc7');
      !(function (e) {
        (e.Svg = 'svg'), (e.Text = 'text');
      })(Un || (Un = {}));
      var Wn = n('3G1X'),
        qn = n('WcWV');
      function Kn(e) {
        var t = e.className,
          n = e.disabled,
          o = Object(r.e)(e, ['className', 'disabled']);
        return i.a.createElement(
          E.a,
          Object(r.a)({ className: C()(qn.button, n && qn.disabled, t) }, o),
        );
      }
      var Qn = n('To8B'),
        Xn = n('tyJc'),
        Yn = n('20cQ'),
        Zn = n('zn4F'),
        Jn = n('U+QY'),
        $n = n('gSe6');
      function er(e) {
        var t = e.id,
          n = Object(o.useContext)(k),
          a = Object(D.ensureNotNull)(n).viewModel.entity(t);
        return null === a
          ? null
          : i.a.createElement(tr, Object(r.a)({}, e, { entity: a }));
      }
      function tr(e) {
        var t = e.id,
          n = e.isOffset,
          a = e.isDisabled,
          u = e.isSelected,
          c = e.isChildOfSelected,
          s = e.isHovered,
          l = e.parentId,
          d = e.entity,
          f = e.isExpanded,
          p = Object(o.useContext)(k),
          h = Object(o.useContext)(An),
          v = Object(o.useContext)(Gt).size,
          g = Object(o.useState)(!1),
          b = g[0],
          m = g[1],
          O = Object(o.useRef)(null),
          _ = Object(o.useState)(d.title()),
          S = _[0],
          w = _[1],
          j = Object(o.useState)(d.isLocked()),
          C = j[0],
          M = j[1],
          I = Object(o.useState)(d.isVisible()),
          P = I[0],
          x = I[1],
          N = Object(o.useState)(d.isActualInterval()),
          R = N[0],
          A = N[1],
          L = Object(o.useState)(!1),
          B = L[0],
          H = L[1],
          G = Object(o.useState)(!1),
          F = G[0],
          z = G[1],
          U = Object(o.useRef)(null);
        Object(o.useEffect)(function () {
          var e = {};
          d.onLockChanged().subscribe(e, function () {
            return M(d.isLocked());
          }),
            d.onVisibilityChanged().subscribe(e, function () {
              return x(d.isVisible());
            });
          var t = d.onTitleChanged();
          return (
            t &&
              t.subscribe(e, function () {
                return w(d.title());
              }),
            d.onIsActualIntervalChange().subscribe(e, function () {
              return A(d.isActualInterval());
            }),
            function () {
              d.onIsActualIntervalChange().unsubscribeAll(e),
                d.onLockChanged().unsubscribeAll(e),
                d.onVisibilityChanged().unsubscribeAll(e),
                t && t.unsubscribeAll(e),
                U.current && clearTimeout(U.current);
            }
          );
        }, []),
          Object(o.useEffect)(
            function () {
              b &&
                O.current &&
                (O.current.focus(), O.current.setSelectionRange(0, S.length));
            },
            [b],
          ),
          Object(o.useEffect)(
            function () {
              var e = {};
              return (
                V.hoveredObjectChanged().subscribe(e, oe),
                function () {
                  V.hoveredObjectChanged().unsubscribeAll(e);
                }
              );
            },
            [f],
          ),
          Object(o.useEffect)(
            function () {
              V.setHoveredObject(s ? t : null);
            },
            [s],
          ),
          Object(o.useEffect)(
            function () {
              !u && U.current && (clearTimeout(U.current), (U.current = null)),
                m(!1);
            },
            [u],
          );
        var V = Object(D.ensureNotNull)(p).viewModel,
          W = !P || C,
          q = d.getIcon(),
          K = {};
        if (l) {
          var Q = V.entity(l);
          Q && (K['data-parent-name'] = Q.title()),
            (K['data-type'] = d.hasChildren() ? 'group' : 'data-source');
        }
        var X = Vn.enabled('test_show_object_tree_debug')
            ? '<' + d.id() + '> (' + d.zOrder() + ')'
            : d.title(),
          Y = s || B,
          Z = b && u,
          J = !!h && h.isTouch,
          $ = !!h && h.isDialog,
          ee = R && P ? Zn : Jn,
          te = d.hasChildren()
            ? y.t('Group is hidden on current interval')
            : y.t('Drawing is hidden on current interval');
        return i.a.createElement(
          'span',
          {
            className: T(
              $n.wrap,
              W && $n.modifier,
              a && $n.disabled,
              u && $n.selected,
              n && $n.offset,
              c && $n.childOfSelected,
              B && !a && !u && !c && $n.hover,
              $ && !a && !u && !c && $n.dialog,
            ),
            onMouseDown: function (e) {
              b &&
                !Object(D.ensureNotNull)(O.current).contains(e.target) &&
                z(!0);
            },
            onClick:
              1 === v
                ? ne
                : function (e) {
                    if (e.defaultPrevented) return;
                    if (0 !== Object(Lt.modifiersFromEvent)(e)) return;
                    if (U.current)
                      e.preventDefault(),
                        clearTimeout(U.current),
                        (U.current = null),
                        V.openProperties(d),
                        z(!1);
                    else {
                      var t = V.selection().selected();
                      U.current = setTimeout(function () {
                        (U.current = null),
                          u &&
                            !F &&
                            1 === t.length &&
                            V.rename(d, function () {
                              return m(!0);
                            }),
                          z(!1);
                      }, 500);
                    }
                  },
            onContextMenu: J ? void 0 : ne,
          },
          !Z &&
            i.a.createElement(
              o.Fragment,
              null,
              q &&
                q.type === Un.Svg &&
                i.a.createElement(E.a, {
                  icon: q.content || '',
                  className: $n.icon,
                }),
              q &&
                q.type === Un.Text &&
                i.a.createElement(
                  'span',
                  { className: T($n.icon, $n.textIcon) },
                  q.content,
                ),
              i.a.createElement(
                'span',
                Object(r.a)(
                  {
                    className: T(
                      $n.title,
                      V.isMain(d) && $n.main,
                      !d.isVisible() && $n.disabled,
                    ),
                  },
                  K,
                ),
                X,
              ),
              (Y || C || !P || J || !R) &&
                i.a.createElement(
                  'span',
                  {
                    className: T(
                      $n.rightButtons,
                      d.canBeRemoved() && $n.twoButtons,
                      d.canBeLocked() && (Y || C) && $n.threeButtons,
                    ),
                  },
                  d.canBeLocked() &&
                    (Y || C) &&
                    i.a.createElement(Kn, {
                      icon: C ? Xn : Yn,
                      className: T($n.button, $n.lockButton),
                      onClick: function (e) {
                        if (e.defaultPrevented) return;
                        e.preventDefault(), V.setIsLocked(t, !d.isLocked());
                      },
                      'data-role': 'button',
                      'data-name': 'lock',
                      'data-active': C,
                    }),
                  (Y || !P || !R) &&
                    i.a.createElement(Kn, {
                      icon: ee,
                      className: T(
                        $n.button,
                        $n.viewButton,
                        !R && [$n.warn, 'apply-common-tooltip'],
                      ),
                      onClick: R
                        ? function (e) {
                            if (e.defaultPrevented) return;
                            e.preventDefault(),
                              V.setIsVisible(t, !d.isVisible());
                          }
                        : void 0,
                      title: R ? void 0 : te,
                      disabled: !R,
                      'data-role': 'button',
                      'data-name': 'hide',
                      'data-active': !P,
                    }),
                  d.canBeRemoved() &&
                    (J || Y) &&
                    i.a.createElement(Kn, {
                      icon: Qn,
                      className: T($n.button, $n.removeButton),
                      onClick: function (e) {
                        if (e.defaultPrevented) return;
                        e.preventDefault(), V.remove(t);
                      },
                      'data-role': 'button',
                      'data-name': 'remove',
                    }),
                ),
            ),
          Z &&
            i.a.createElement(Wn.b, {
              value: S,
              onChange: function (e) {
                w(e.currentTarget.value);
              },
              onClick: Ln.a,
              className: $n.renameInput,
              onKeyDown: function (e) {
                27 === Object(Lt.hashFromEvent)(e)
                  ? (e.preventDefault(), w(d.title()), m(!1))
                  : 13 === Object(Lt.hashFromEvent)(e) &&
                    (e.preventDefault(), re());
              },
              reference: function (e) {
                O.current = e;
              },
              onBlur: re,
              onDragStart: function (e) {
                e.preventDefault(), e.stopPropagation();
              },
              draggable: !0,
              stretch: !0,
            }),
        );
        function ne(e) {
          e.defaultPrevented ||
            b ||
            (e.preventDefault(),
            e.persist(),
            V.openContextMenu(
              d,
              function () {
                return m(!0);
              },
              e,
            ));
        }
        function re() {
          '' !== S && d.setName(S), w(d.title()), m(!1);
        }
        function oe(e) {
          if (d.hasChildren() && !f) {
            var n = d.children(),
              r = Boolean(
                n.find(function (t) {
                  return t.id() === e;
                }),
              );
            H(r);
          } else H(t === e);
        }
      }
      var nr = n('4/GM'),
        rr = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._isMounted = !1),
              (n._dialogRef = i.a.createRef()),
              (n._renderChildren = function (e) {
                return i.a.createElement(or, {
                  isSmallTablet: e,
                  viewModel: n.props.viewModel,
                });
              }),
              (n._handleMediaChange = function () {
                n.state.showDrawer &&
                  !window.matchMedia(O.a.TabletSmall).matches &&
                  n.setState({ showDrawer: !1 });
              }),
              (n._onManageDrawings = function (e) {
                throw new Error('not supported');
              }),
              (n._closeDrawer = function () {
                n.setState({ showDrawer: !1 });
              }),
              (n._handleContextMenuOpened = function (e) {
                n.setState({ isContextMenuOpened: e });
              }),
              (n._matchMedia = window.matchMedia(O.a.TabletSmall)),
              (n.state = {
                showDrawer: !1,
                showDialog: !1,
                isContextMenuOpened: !1,
              }),
              n
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.componentDidMount = function () {
              (this._isMounted = !0),
                this._matchMedia.addListener(this._handleMediaChange),
                this.props.viewModel
                  .isContextMenuOpened()
                  .subscribe(this._handleContextMenuOpened);
            }),
            (t.prototype.componentWillUnmount = function () {
              (this._isMounted = !1),
                this._matchMedia.removeListener(this._handleMediaChange),
                this.props.viewModel
                  .isContextMenuOpened()
                  .unsubscribe(this._handleContextMenuOpened);
            }),
            (t.prototype.render = function () {
              var e = this;
              return i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(b.a, { rule: O.a.TabletSmall }, function (t) {
                  return i.a.createElement(m.a, {
                    additionalElementPos: 'after',
                    additionalHeaderElement: !1,
                    className: nr.dialog,
                    dataName: 'object-tree-dialog',
                    isOpened: !0,
                    onClickOutside:
                      e.state.showDialog || t || e.state.isContextMenuOpened
                        ? function () {}
                        : e.props.onClose,
                    onClose: e.props.onClose,
                    ref: e._dialogRef,
                    render: function () {
                      return e._renderChildren(t);
                    },
                    title: Object(y.t)('Object tree'),
                    showSeparator: !0,
                  });
                }),
                i.a.createElement(
                  g.b,
                  null,
                  this.state.showDrawer &&
                    i.a.createElement(
                      v.a,
                      { onClose: this._closeDrawer, position: 'Bottom' },
                      i.a.createElement(_.a, {
                        onClose: this._closeDrawer,
                        chartWidget: this.props.activeChartWidget,
                        isMobile: !0,
                      }),
                    ),
                ),
              );
            }),
            t
          );
        })(i.a.PureComponent);
      function or(e) {
        var t = e.isSmallTablet,
          n = e.viewModel,
          r = Object(o.useMemo)(
            function () {
              return { size: t ? 1 : 0, smallSizeTreeNodeAction: 0 };
            },
            [t],
          );
        return i.a.createElement(
          Gt.Provider,
          { value: r },
          i.a.createElement(Fn, {
            nodeRenderer: er,
            showHeader: !1,
            viewModel: n,
            isDialog: !0,
          }),
        );
      }
      var ir = n('eqEH'),
        ar = n('vPbs'),
        ur = n('aIyQ'),
        cr = n.n(ur);
      function sr(e) {
        return e;
      }
      var lr = n('QrSB'),
        dr = (function () {
          function e(e) {
            var t = this;
            (this._onChange = new cr.a()),
              (this._recalculate = function () {
                var e = t._groupModel.groups().map(function (e) {
                    return e.id;
                  }),
                  n = t._selectionApi.allSources();
                (t._selected = t._selected.filter(function (t) {
                  return e.includes(t) || n.includes(t);
                })),
                  t._onChange.fire(t._selected);
              }),
              (this._model = e),
              (this._selectionApi = new lr.SelectionApi(this._model)),
              (this._groupModel = this._model.lineToolsGroupModel()),
              (this._selected = this._getSelectedIds()),
              this._selectionApi.onChanged().subscribe(this, function () {
                (t._selected = t._getSelectedIds()),
                  t._onChange.fire(t._selected);
              }),
              this._groupModel.onChanged().subscribe(this, this._recalculate);
          }
          return (
            (e.prototype.destroy = function () {
              this._selectionApi.onChanged().unsubscribeAll(this),
                this._groupModel.onChanged().unsubscribeAll(this);
            }),
            (e.prototype.set = function (e) {
              for (
                var t = [],
                  n = e.map(function (e) {
                    return e.id();
                  }),
                  r = function (e) {
                    var r = e.children(),
                      o = new Set(
                        r.map(function (e) {
                          return e.id();
                        }),
                      );
                    e.hasChildren()
                      ? (t.push.apply(t, Array.from(o.values()).map(sr)),
                        (n = n.filter(function (e) {
                          return !o.has(e);
                        })))
                      : t.push(e.id());
                  },
                  o = 0,
                  i = e;
                o < i.length;
                o++
              ) {
                r(i[o]);
              }
              this._selectionApi.set(t),
                (this._selected = n),
                this._onChange.fire(this._selected);
            }),
            (e.prototype.canBeAddedToSelection = function (e) {
              return null !== e && e.canBeAddedToSelection();
            }),
            (e.prototype.onChange = function () {
              return this._onChange;
            }),
            (e.prototype.selected = function () {
              return this._selected;
            }),
            (e.prototype._getSelectedIds = function () {
              var e = this;
              return this._selectionApi.allSources().filter(function (t) {
                var n = e._model.dataSourceForId(t);
                return null !== n && n.showInObjectTree();
              });
            }),
            e
          );
        })(),
        fr = n('CW80'),
        pr = n('3ClC'),
        hr = n('fgLi'),
        vr = n('HZKX'),
        gr = n('Vbka'),
        br = n('dDxv'),
        yr = n('NhaM'),
        mr = Object(y.t)('Show {sourceTitle}'),
        Or = Object(y.t)('Hide {sourceTitle}'),
        _r = Object(y.t)('Lock {sourceTitle}'),
        Sr = Object(y.t)('Unlock {sourceTitle}'),
        wr = Object(y.t)('Change {sourceType} title to {newSourceTitle}');
      function jr(e, t) {
        return t.every(function (t) {
          return !(t.pane() !== e && !t.allowsMovingbetweenPanes());
        });
      }
      function Dr(e) {
        return e instanceof hr.DataSource && e.showInObjectTree()
          ? e.id()
          : null;
      }
      var Tr = new cr.a(),
        Cr = (function () {
          function e(e, t) {
            (this._undoModel = e), (this._dataSource = t);
          }
          return (
            (e.prototype.destroy = function () {}),
            (e.prototype.id = function () {
              return this._dataSource.id();
            }),
            (e.prototype.title = function () {
              return Object(fr.isLineTool)(this._dataSource)
                ? this._dataSource.properties().title.value() ||
                    this._dataSource.translatedType()
                : this._dataSource.title();
            }),
            (e.prototype.gaLabel = function () {
              return Object(pr.isStudy)(this._dataSource)
                ? 'Study'
                : Object(fr.isLineTool)(this._dataSource)
                ? 'Drawing'
                : 'Symbol';
            }),
            (e.prototype.canBeLocked = function () {
              return (
                Object(fr.isLineTool)(this._dataSource) &&
                this._dataSource.userEditEnabled()
              );
            }),
            (e.prototype.canBeRemoved = function () {
              return (
                this._undoModel.mainSeries() !== this._dataSource &&
                this._dataSource.isUserDeletable()
              );
            }),
            (e.prototype.canBeHidden = function () {
              return this._dataSource.canBeHidden();
            }),
            (e.prototype.canBeRenamed = function () {
              return Object(fr.isLineTool)(this._dataSource);
            }),
            (e.prototype.isVisible = function () {
              return this._dataSource.properties().visible.value();
            }),
            (e.prototype.isActualInterval = function () {
              return (
                !Object(fr.isLineTool)(this._dataSource) ||
                this._dataSource.isActualInterval()
              );
            }),
            (e.prototype.onIsActualIntervalChange = function () {
              return Object(fr.isLineTool)(this._dataSource)
                ? this._dataSource.onIsActualIntervalChange()
                : Tr;
            }),
            (e.prototype.isLocked = function () {
              return (
                !!Object(fr.isLineTool)(this._dataSource) &&
                this._dataSource.properties().frozen.value()
              );
            }),
            (e.prototype.onVisibilityChanged = function () {
              return this._dataSource.properties().visible.listeners();
            }),
            (e.prototype.onLockChanged = function () {
              return Object(fr.isLineTool)(this._dataSource)
                ? this._dataSource.properties().frozen.listeners()
                : Tr;
            }),
            (e.prototype.getIcon = function () {
              var e = l,
                t = this._dataSource.getSourceIcon(),
                n = Object(pr.isStudyStrategy)(this._dataSource),
                r = { type: Un.Svg, content: n ? gr : br };
              if (e && t)
                if ('loadSvg' === t.type) {
                  var o = t.svgId.split('.'),
                    i = o[0],
                    a = o[1],
                    u = 'linetool' === i ? e.linetool[a] : e.series[Number(a)];
                  r = { type: Un.Svg, content: u || br };
                } else
                  'text' === t.type && (r = { type: Un.Text, content: t.text });
              return r;
            }),
            (e.prototype.setVisible = function (e) {
              var t = (e ? mr : Or).format({
                sourceTitle: this._dataSource.title(),
              });
              this._undoModel.setProperty(
                this._dataSource.properties().visible,
                e,
                t,
              );
            }),
            (e.prototype.setLocked = function (e) {
              if (Object(fr.isLineTool)(this._dataSource)) {
                var t = (e ? _r : Sr).format({
                  sourceTitle: this._dataSource.translatedType(),
                });
                this._undoModel.setProperty(
                  this._dataSource.properties().frozen,
                  e,
                  t,
                );
              }
            }),
            (e.prototype.setName = function (e) {
              if (Object(fr.isLineTool)(this._dataSource)) {
                var t = wr.format({
                  sourceType:
                    this._dataSource.properties().title.value() ||
                    this._dataSource.title(),
                  newSourceTitle: e,
                });
                this._undoModel.setProperty(
                  this._dataSource.properties().title,
                  e,
                  t,
                );
              }
            }),
            (e.prototype.isCopiable = function () {
              return this._dataSource.copiable();
            }),
            (e.prototype.isClonable = function () {
              return this._dataSource.cloneable();
            }),
            (e.prototype.zOrder = function () {
              return this._dataSource.zorder();
            }),
            (e.prototype.remove = function () {
              this._undoModel.removeSource(this._dataSource, !1);
            }),
            (e.prototype.canBeAddedToSelection = function () {
              return this._undoModel
                .selection()
                .canBeAddedToSelection(this._dataSource);
            }),
            (e.prototype.setAsSelection = function () {
              var e = this;
              this._undoModel.model().selectionMacro(function (t) {
                t.clearSelection(), t.addSourceToSelection(e._dataSource);
              });
            }),
            (e.prototype.addToSelection = function () {
              var e = this;
              this._undoModel.model().selectionMacro(function (t) {
                t.addSourceToSelection(e._dataSource);
              });
            }),
            (e.prototype.addSourcesToArray = function (e) {
              return e.push(this._dataSource), e;
            }),
            (e.prototype.insertSourcesBeforeThis = function (e) {
              var t = this;
              this._insertSources(e, function (e) {
                return t._undoModel.insertBefore(e, t._dataSource);
              });
            }),
            (e.prototype.insertSourcesAfterThis = function (e) {
              var t = this;
              this._insertSources(e, function (e) {
                return t._undoModel.insertAfter(e, t._dataSource);
              });
            }),
            (e.prototype.children = function () {
              return [];
            }),
            (e.prototype.hasChildren = function () {
              return !1;
            }),
            (e.prototype.pane = function () {
              return Object(D.ensureNotNull)(
                this._undoModel.model().paneForSource(this._dataSource),
              );
            }),
            (e.prototype.allowsMovingbetweenPanes = function () {
              return !Object(fr.isLineTool)(this._dataSource);
            }),
            (e.prototype.canBeAddedToGroup = function () {
              return Object(fr.isLineTool)(this._dataSource);
            }),
            (e.prototype.canInsertBeforeThis = function (e) {
              return this._canInsertBeforeOrAfter(e);
            }),
            (e.prototype.canInsertAfterThis = function (e) {
              return this._canInsertBeforeOrAfter(e);
            }),
            (e.prototype.detachFromParent = function () {
              if (Object(fr.isLineTool)(this._dataSource)) {
                var e = this._undoModel.model(),
                  t = this._undoModel.lineToolsGroupController(),
                  n = e
                    .lineToolsGroupModel()
                    .groupForLineTool(this._dataSource);
                null !== n && t.excludeLineToolFromGroup(n, this._dataSource);
              }
            }),
            (e.prototype.onTitleChanged = function () {
              var e = this._dataSource.properties().title;
              return e ? e.listeners() : void 0;
            }),
            (e.prototype._canInsertBeforeOrAfter = function (e) {
              var t = this._undoModel.model();
              if (!jr(this.pane(), e)) return !1;
              if (
                Object(fr.isLineTool)(this._dataSource) &&
                null !==
                  t.lineToolsGroupModel().groupForLineTool(this._dataSource) &&
                e.some(function (e) {
                  return !e.canBeAddedToGroup();
                })
              )
                return !1;
              return !0;
            }),
            (e.prototype._insertSources = function (e, t) {
              var n = this._undoModel.model(),
                r = this._undoModel.lineToolsGroupController();
              this._undoModel.beginUndoMacro('Insert source(s) after');
              var o = function () {
                  e.forEach(function (e) {
                    return e.detachFromParent();
                  });
                },
                i = e.reduce(function (e, t) {
                  return t.addSourcesToArray(e);
                }, []);
              if (Object(fr.isLineTool)(this._dataSource)) {
                var a = n
                  .lineToolsGroupModel()
                  .groupForLineTool(this._dataSource);
                null !== a
                  ? (Object(D.assert)(
                      !e.some(function (e) {
                        return e.hasChildren();
                      }),
                    ),
                    i.forEach(function (e) {
                      Object(fr.isLineTool)(e) &&
                        (a.containsLineTool(e) || r.addLineToolToGroup(a, e));
                    }))
                  : o();
              } else o();
              t(i), this._undoModel.endUndoMacro();
            }),
            e
          );
        })(),
        Er = (function () {
          function e(e, t) {
            var n = this;
            (this._onTitleChanged = new cr.a()),
              (this._onVisibilityChanged = new cr.a()),
              (this._onLockChanged = new cr.a()),
              (this._onIsActualIntervalChanged = new cr.a()),
              (this._undoModel = e),
              (this._group = t),
              (this._lineTools = t.lineTools());
            var r = function () {
              n._lineTools.forEach(function (e) {
                e
                  .properties()
                  .visible.listeners()
                  .subscribe(n, function () {
                    return n._onVisibilityChanged.fire();
                  }),
                  e
                    .properties()
                    .frozen.listeners()
                    .subscribe(n, function () {
                      return n._onLockChanged.fire();
                    }),
                  e.onIsActualIntervalChange().subscribe(n, function () {
                    return n._onIsActualIntervalChanged.fire();
                  });
              });
            };
            this._group.onChanged().subscribe(this, function (e) {
              n._unsubscribeFromAllLineTools(),
                (n._lineTools = n._group.lineTools()),
                r(),
                e.lockedChanged && n._onLockChanged.fire(),
                e.visibilityChanged && n._onVisibilityChanged.fire(),
                e.titleChanged && n._onTitleChanged.fire(),
                e.isActualIntervalChanged &&
                  n._onIsActualIntervalChanged.fire();
            }),
              r();
          }
          return (
            (e.prototype.destroy = function () {
              this._unsubscribeFromAllLineTools(),
                this._group.onChanged().unsubscribeAll(this);
            }),
            (e.prototype.id = function () {
              return this._group.id;
            }),
            (e.prototype.title = function () {
              return this._group.name();
            }),
            (e.prototype.gaLabel = function () {
              return 'Group';
            }),
            (e.prototype.getIcon = function () {
              return { type: Un.Svg, content: yr };
            }),
            (e.prototype.canBeRemoved = function () {
              return !0;
            }),
            (e.prototype.canBeHidden = function () {
              return !0;
            }),
            (e.prototype.canBeLocked = function () {
              return !0;
            }),
            (e.prototype.canBeRenamed = function () {
              return !0;
            }),
            (e.prototype.isVisible = function () {
              return 'Invisible' !== this._group.visibility();
            }),
            (e.prototype.isActualInterval = function () {
              return this._group.lineTools().some(function (e) {
                return e.isActualInterval();
              });
            }),
            (e.prototype.onIsActualIntervalChange = function () {
              return this._onIsActualIntervalChanged;
            }),
            (e.prototype.isLocked = function () {
              return 'Locked' === this._group.locked();
            }),
            (e.prototype.onTitleChanged = function () {
              return this._onTitleChanged;
            }),
            (e.prototype.onVisibilityChanged = function () {
              return this._onVisibilityChanged;
            }),
            (e.prototype.onLockChanged = function () {
              return this._onLockChanged;
            }),
            (e.prototype.setVisible = function (e) {
              this._undoModel
                .lineToolsGroupController()
                .setGroupVisibility(this._group, e);
            }),
            (e.prototype.setLocked = function (e) {
              this._undoModel
                .lineToolsGroupController()
                .setGroupLock(this._group, e);
            }),
            (e.prototype.setName = function (e) {
              this._undoModel
                .lineToolsGroupController()
                .setGroupName(this._group, e);
            }),
            (e.prototype.isCopiable = function () {
              return !1;
            }),
            (e.prototype.isClonable = function () {
              return !1;
            }),
            (e.prototype.zOrder = function () {
              return 0 === this._group.lineTools().length
                ? null
                : this._group.lineTools()[0].zorder();
            }),
            (e.prototype.remove = function () {
              this._undoModel
                .lineToolsGroupController()
                .removeGroup(this._group);
            }),
            (e.prototype.canBeAddedToSelection = function () {
              var e = this._undoModel.model();
              return this._group.lineTools().every(function (t) {
                return e.selection().canBeAddedToSelection(t);
              });
            }),
            (e.prototype.setAsSelection = function () {
              var e = this;
              this._undoModel.model().selectionMacro(function (t) {
                t.clearSelection(),
                  e._group.lineTools().forEach(function (e) {
                    return t.addSourceToSelection(e);
                  });
              });
            }),
            (e.prototype.addToSelection = function () {
              var e = this;
              this._undoModel.model().selectionMacro(function (t) {
                e._group.lineTools().forEach(function (e) {
                  return t.addSourceToSelection(e);
                });
              });
            }),
            (e.prototype.addSourcesToArray = function (e) {
              return e.push.apply(e, this._group.lineTools()), e;
            }),
            (e.prototype.detachFromParent = function () {}),
            (e.prototype.insertSourcesBeforeThis = function (e) {
              var t = this,
                n = this._insertBeforeTarget();
              this._insertSources(e, function (e) {
                return t._undoModel.insertBefore(e, n);
              });
            }),
            (e.prototype.insertSourcesAfterThis = function (e) {
              var t = this,
                n = this._insertAfterTarget();
              this._insertSources(e, function (e) {
                return t._undoModel.insertAfter(e, n);
              });
            }),
            (e.prototype.children = function () {
              var e = this,
                t = Object(r.f)(this._group.lineTools());
              return (
                t.sort(function (e, t) {
                  return t.zorder() - e.zorder();
                }),
                t.map(function (t) {
                  return new Cr(e._undoModel, t);
                })
              );
            }),
            (e.prototype.hasChildren = function () {
              return !0;
            }),
            (e.prototype.pane = function () {
              return Object(D.ensureNotNull)(
                this._undoModel
                  .model()
                  .paneForSource(this._group.lineTools()[0]),
              );
            }),
            (e.prototype.allowsMovingbetweenPanes = function () {
              return !1;
            }),
            (e.prototype.canBeAddedToGroup = function () {
              return !1;
            }),
            (e.prototype.canInsertBeforeThis = function (e) {
              return this._canInsertBeforeOrAfter(e);
            }),
            (e.prototype.canInsertAfterThis = function (e) {
              return this._canInsertBeforeOrAfter(e);
            }),
            (e.prototype._canInsertBeforeOrAfter = function (e) {
              return jr(this.pane(), e);
            }),
            (e.prototype._insertSources = function (e, t) {
              this._undoModel.beginUndoMacro('Insert source(s) after');
              var n = e.reduce(function (e, t) {
                return t.addSourcesToArray(e);
              }, []);
              e.forEach(function (e) {
                return e.detachFromParent();
              }),
                t(n),
                this._undoModel.endUndoMacro();
            }),
            (e.prototype._insertBeforeTarget = function () {
              return Object(D.ensureNotNull)(
                this._group.lineTools().reduce(function (e, t) {
                  return null === e ? t : e.zorder() < t.zorder() ? e : t;
                }, null),
              );
            }),
            (e.prototype._insertAfterTarget = function () {
              return Object(D.ensureNotNull)(
                this._group.lineTools().reduce(function (e, t) {
                  return null === e ? t : e.zorder() > t.zorder() ? e : t;
                }, null),
              );
            }),
            (e.prototype._unsubscribeFromAllLineTools = function () {
              var e = this;
              this._lineTools.forEach(function (t) {
                t.properties().visible.listeners().unsubscribeAll(e),
                  t.properties().frozen.listeners().unsubscribeAll(e),
                  t.onIsActualIntervalChange().unsubscribeAll(e);
              });
            }),
            e
          );
        })(),
        Mr = (function () {
          function e(e) {
            (this._hoveredObjectChanged = new cr.a()),
              (this._undoModel = e),
              this._undoModel
                .model()
                .hoveredSourceChanged()
                .subscribe(this, this._onModelHoveredSourceChanged);
          }
          return (
            (e.prototype.getObjectById = function (e) {
              var t = this._undoModel.model(),
                n = t.dataSourceForId(e);
              if (null !== n) return new Cr(this._undoModel, n);
              var r = t.lineToolsGroupModel().groupForId(e);
              return null !== r ? new Er(this._undoModel, r) : null;
            }),
            (e.prototype.canBeGroupped = function (e) {
              if (0 === e.length || (1 === e.length && e[0].hasChildren()))
                return !1;
              var t = [];
              if (
                (e.forEach(function (e) {
                  return e.addSourcesToArray(t);
                }),
                t.some(function (e) {
                  return !Object(fr.isLineTool)(e);
                }))
              )
                return !1;
              var n = this._undoModel.model(),
                r = t.map(function (e) {
                  return n.paneForSource(e);
                });
              return new Set(r).size < 2;
            }),
            (e.prototype.contextMenuActions = function (e, t, n) {
              var r = new vr.ActionsProvider(e, n),
                o = [];
              return (
                t.forEach(function (e) {
                  return e.addSourcesToArray(o);
                }),
                r.contextMenuActionsForSources(o)
              );
            }),
            (e.prototype.insertBefore = function (e, t) {
              t.insertSourcesAfterThis(e);
            }),
            (e.prototype.insertAfter = function (e, t) {
              t.insertSourcesBeforeThis(e);
            }),
            (e.prototype.setHoveredObject = function (e) {
              var t = this._undoModel.model();
              if (null !== e) {
                var n = t.dataSourceForId(e);
                null !== n && t.setHoveredSource(n, null);
              } else t.setHoveredSource(null, null);
            }),
            (e.prototype.hoveredObjectId = function () {
              return Dr(this._undoModel.model().hoveredSource());
            }),
            (e.prototype.hoveredObjectChanged = function () {
              return this._hoveredObjectChanged;
            }),
            (e.prototype._onModelHoveredSourceChanged = function (e) {
              this._hoveredObjectChanged.fire(Dr(e));
            }),
            e
          );
        })(),
        Ir = (function () {
          function e(e) {
            (this._controller = e),
              (this._facade = new Mr(e)),
              (this._groupModel = e.model().lineToolsGroupModel());
          }
          return (
            (e.prototype.buildTree = function () {
              for (
                var e = {}, t = {}, n = 0, o = this._controller.model().panes();
                n < o.length;
                n++
              ) {
                var i = o[n],
                  a = i
                    .sourcesByGroup()
                    .all()
                    .filter(function (e) {
                      return e.showInObjectTree();
                    });
                e[i.id()] = Pr(i.id(), 0);
                for (
                  var u = 0, c = this._groupModel.groups();
                  u < c.length;
                  u++
                ) {
                  var s = c[u],
                    l = Object(D.ensureNotNull)(
                      this._facade.getObjectById(s.id),
                    );
                  if (l.pane() === i) {
                    t[l.id()] = l;
                    var d = Object(r.f)(s.lineTools())
                      .sort(function (e, t) {
                        return e.zorder() > t.zorder() ? -1 : 1;
                      })
                      .map(function (e) {
                        return e.id();
                      });
                    (e[l.id()] = Pr(l.id(), 1, i.id(), d)),
                      e[i.id()].children.push(l.id());
                    for (var f = 0, p = d; f < p.length; f++) {
                      var h = p[f];
                      (t[h] = Object(D.ensureNotNull)(
                        this._facade.getObjectById(h),
                      )),
                        (e[h] = Pr(h, 2, l.id()));
                    }
                  }
                }
                for (var v = 0, g = a; v < g.length; v++) {
                  var b = g[v];
                  e[b.id()] ||
                    ((e[b.id()] = Pr(b.id(), 1, i.id())),
                    e[i.id()].children.push(b.id()),
                    (t[b.id()] = Object(D.ensureNotNull)(
                      this._facade.getObjectById(b.id()),
                    )));
                }
                e[i.id()].children.sort(function (e, n) {
                  return Object(D.ensureNotNull)(t[e].zOrder()) >
                    Object(D.ensureNotNull)(t[n].zOrder())
                    ? -1
                    : 1;
                });
              }
              return { nodes: e, entities: t };
            }),
            e
          );
        })();
      function Pr(e, t, n, r) {
        return (
          void 0 === r && (r = []),
          { id: e, level: t, parentId: n, children: r }
        );
      }
      var kr = n('7ktv'),
        xr = n('7KDR'),
        Nr = n('zRdu'),
        Rr = n('hY0g'),
        Ar = n.n(Rr),
        Lr = n('fs3R'),
        Br = n('qckB'),
        Hr = n('DYI2'),
        Gr = n('ffaL'),
        Fr = n('GjMU'),
        zr = n('PgQx'),
        Ur = Object(c.getLogger)('Platform.GUI.ObjectTree');
      function Vr(e) {
        return e instanceof kr.PriceDataSource;
      }
      var Wr = (function () {
          function e(e) {
            var t = this;
            (this._entitiesCache = {}),
              (this._nodes = {}),
              (this._onChange = new cr.a()),
              (this._onGroupCreated = new cr.a()),
              (this._subscriptions = []),
              (this._removeSourcesPromise = null),
              (this._timeout = null),
              (this._objects = []),
              (this._options = {
                general: !0,
                mainSeries: !0,
                mainSeriesTrade: !0,
                esdStudies: !0,
                fundamentals: !0,
                studies: !0,
                lineTools: !0,
                publishedCharts: !0,
                ordersAndPositions: !0,
                alerts: !1,
                chartEvents: !0,
                objectTree: !1,
              }),
              (this._isContextMenuOpened = new Ar.a(!1)),
              (this._getObjectsToModify = function (e) {
                var n = t.selection().selected();
                return n.find(function (t) {
                  return t === e;
                })
                  ? n.map(t._ensuredEntity)
                  : [t._ensuredEntity(e)];
              }),
              (this._onActiveChartChanged = function () {
                t._cleanup(), t._init();
              }),
              (this._cleanup = function () {
                null !== t._timeout &&
                  (clearTimeout(t._timeout), (t._timeout = null)),
                  t._subscriptions.forEach(function (e) {
                    e.unsubscribeAll(t);
                  }),
                  t._selection.destroy(),
                  t._chart.unsubscribe(t._onActiveChartChanged);
                for (
                  var e = 0, n = Object.values(t._entitiesCache);
                  e < n.length;
                  e++
                ) {
                  n[e].destroy();
                }
                null !== t._removeSourcesPromise &&
                  t._removeSourcesPromise.cancel();
              }),
              (this._init = function () {
                (t._controller = t._chart.value().model()),
                  (t._groupController = t._controller.lineToolsGroupController()),
                  (t._model = t._controller.model()),
                  (t._groupModel = t._model.lineToolsGroupModel()),
                  (t._facade = new Mr(t._controller)),
                  (t._subscriptions = [
                    t._model.mainSeries().onStyleChanged(),
                    t._model.mainSeries().dataEvents().symbolResolved(),
                    t._model.mainSeries().onIntervalChanged(),
                    t._model.panesCollectionChanged(),
                    t._model.dataSourceCollectionChanged(),
                    t._groupModel.onChanged(),
                  ]),
                  t._subscriptions.forEach(function (e) {
                    e.subscribe(t, t._update);
                  }),
                  t._chart.subscribe(t._onActiveChartChanged),
                  (t._selection = new dr(t._model)),
                  t._update();
              }),
              (this._update = function () {
                null === t._timeout &&
                  (t._timeout = setTimeout(function () {
                    t._recalculateTree(),
                      t._onChange.fire(),
                      (t._timeout = null);
                  }));
              }),
              (this._ensuredEntity = function (e) {
                return Object(D.ensureNotNull)(t._getEntityById(e));
              }),
              (this._chart = e),
              this._init();
          }
          return (
            (e.prototype.destroy = function () {
              this._cleanup();
            }),
            (e.prototype.getState = function () {
              return {
                nodes: Object.values(this._nodes),
                selection: this._selection.selected(),
              };
            }),
            (e.prototype.getChartId = function () {
              return this._chart.value().id();
            }),
            (e.prototype.insertSelection = function (e, t) {
              var n = this._facade,
                r = this.selection().selected().map(this._ensuredEntity),
                o = this._normalizeTargetAndDropType(e, t),
                i = o[0],
                a = o[1];
              this._controller.withMacro(
                Object(y.t)('Move objects'),
                function () {
                  switch (a) {
                    case 'before':
                      n.insertBefore(r, i);
                      break;
                    case 'after':
                      n.insertAfter(r, i);
                  }
                },
              ),
                this._update();
            }),
            (e.prototype.entity = function (e) {
              return this._entitiesCache[e] || null;
            }),
            (e.prototype.isMain = function (e) {
              return e.id() === this._controller.mainSeries().id();
            }),
            (e.prototype.selection = function () {
              return this._selection;
            }),
            (e.prototype.setIsLocked = function (e, t) {
              var n = this._getObjectsToModify(e),
                r =
                  (t ? Object(y.t)('Lock') : Object(y.t)('Unlock')) +
                  ' ' +
                  Object(y.t)('objects');
              this._controller.withMacro(r, function () {
                for (var e = 0, r = n; e < r.length; e++) {
                  r[e].setLocked(t);
                }
              }),
                Cn('Lock', En(n));
            }),
            (e.prototype.setIsVisible = function (e, t) {
              var n = this._getObjectsToModify(e),
                r =
                  (t ? Object(y.t)('Show') : Object(y.t)('Hide')) +
                  ' ' +
                  Object(y.t)('objects');
              this._controller.withMacro(r, function () {
                for (var e = 0, r = n; e < r.length; e++) {
                  r[e].setVisible(t);
                }
              }),
                Cn('Hide', En(n));
            }),
            (e.prototype.remove = function (e) {
              var t = this,
                n = this._getObjectsToModify(e);
              t._controller.withMacro(
                Object(y.t)('Remove objects'),
                function () {
                  for (var e = 0, r = n; e < r.length; e++) {
                    var o = r[e];
                    o.remove(), delete t._entitiesCache[o.id()];
                  }
                },
              ),
                Cn('Delete', En(n)),
                t._update();
            }),
            (e.prototype.canSelectionBeGrouped = function () {
              var e = this._getSelectedEntities();
              return this._facade.canBeGroupped(e);
            }),
            (e.prototype.createGroupFromSelection = function () {
              var e = this._groupController.createGroupFromSelection();
              Cn('Create Group'),
                this.selection().set([this._ensuredEntity(e.id)]),
                this._onGroupCreated.fire(e.id),
                this._update();
            }),
            (e.prototype.isSelectionDropable = function (e, t) {
              var n = this.selection().selected().map(this._ensuredEntity),
                r = this._normalizeTargetAndDropType(e, t),
                o = r[0];
              switch (r[1]) {
                case 'after':
                  return o.canInsertAfterThis(n);
                case 'before':
                  return o.canInsertBeforeThis(n);
              }
            }),
            (e.prototype.onChange = function () {
              return this._onChange;
            }),
            (e.prototype.onGroupCreated = function () {
              return this._onGroupCreated;
            }),
            (e.prototype.isSelectionCloneable = function () {
              var e = this._getSelectedEntities();
              return (
                e.length > 0 &&
                e.every(function (e) {
                  return e.isClonable();
                })
              );
            }),
            (e.prototype.isSelectionCopiable = function () {
              var e = this._getSelectedEntities();
              return (
                e.length > 0 &&
                e.every(function (e) {
                  return e.isCopiable();
                })
              );
            }),
            (e.prototype.openProperties = function (e) {
              var t = this._model.dataSourceForId(e.id());
              this.selection().set([e]),
                null !== t &&
                  (this._controller.mainSeries() === t
                    ? this._chart.value().showGeneralChartProperties()
                    : (Object(fr.isLineTool)(t) || Object(pr.isStudy)(t)) &&
                      this._chart.value().showChartPropertiesForSource(t));
            }),
            (e.prototype.canSelectionBeUnmerged = function () {
              var e = this._getSelectedEntities();
              return 1 === e.length && this.canNodeWithIdBeUnmerged(e[0].id());
            }),
            (e.prototype.canNodeWithIdBeUnmerged = function (e) {
              var t = this._model.dataSourceForId(e);
              return (
                null !== t &&
                Vr(t) &&
                this._model.isUnmergeAvailableForSource(t)
              );
            }),
            (e.prototype.unmergeSelectionUp = function () {
              this._unmergeSelection(0);
            }),
            (e.prototype.unmergeSelectionDown = function () {
              this._unmergeSelection(1);
            }),
            (e.prototype.copySelection = function () {
              var e = this,
                t = this._getSelectedEntities(),
                n = t.map(function (t) {
                  return Object(D.ensureNotNull)(
                    e._model.dataSourceForId(t.id()),
                  );
                });
              this._chart.value().onAppClipboardCopy(n), Cn('Copy', En(t));
            }),
            (e.prototype.cloneSelection = function () {
              var e = this,
                t = this._getSelectedEntities(),
                n = t.map(function (t) {
                  return Object(D.ensureNotNull)(
                    e._model.dataSourceForId(t.id()),
                  );
                });
              n.every(fr.isLineTool) &&
                (this._controller.cloneLineTools(Object(r.f)(n), !1),
                Cn('Clone', En(t)));
            }),
            (e.prototype.rename = function (e, t) {
              var n = this._getObjectsToModify(e.id());
              1 === n.length &&
                n.some(function (e) {
                  return e.canBeRenamed();
                }) &&
                (t(), Cn('Rename', En(n)));
            }),
            (e.prototype.openContextMenu = function (e, t, n) {
              return Object(r.b)(this, void 0, void 0, function () {
                var o,
                  i,
                  a,
                  u,
                  c = this;
                return Object(r.d)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        (this._objects = this._getObjectsToModify(e.id())),
                        (o = this._facade.canBeGroupped(this._objects)),
                        this._objects.some(function (e) {
                          return e.hasChildren();
                        })
                          ? ((i = this._getActionsForGroupItem(e, t, o)),
                            [3, 3])
                          : [3, 1]
                      );
                    case 1:
                      return [
                        4,
                        this._facade.contextMenuActions(
                          this._chart.value(),
                          this._objects,
                          this._options,
                        ),
                      ];
                    case 2:
                      (a = r.sent()),
                        (i = Array.from(a).filter(function (e, t, n) {
                          return (
                            e.type !== Nr.a.Separator ||
                            !n[t + 1] ||
                            n[t + 1].type !== Nr.a.Separator
                          );
                        })),
                        1 === this._objects.length &&
                          this._objects[0].canBeRenamed() &&
                          ((u = i.findIndex(function (e) {
                            return 'Copy' === e.id;
                          })),
                          i.splice(
                            -1 === u ? i.length : u + 1,
                            0,
                            this._getRenameAction(t),
                          )),
                        o &&
                          ((u = i.findIndex(function (e) {
                            return 'Clone' === e.id;
                          })),
                          i.splice(
                            -1 === u ? 0 : u,
                            0,
                            this._getGroupAction(),
                          )),
                        (r.label = 3);
                    case 3:
                      return (
                        i.length > 0 &&
                          Rn.ContextMenuManager.createMenu(
                            i,
                            { takeFocus: !0, returnFocus: !0 },
                            function () {
                              c._isContextMenuOpened.setValue(!1);
                            },
                          ).then(function (e) {
                            e.show(n), c._isContextMenuOpened.setValue(!0);
                          }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.setHoveredObject = function (e) {
              this._facade.setHoveredObject(e);
            }),
            (e.prototype.hoveredObjectChanged = function () {
              return this._facade.hoveredObjectChanged();
            }),
            (e.prototype.getNextNodeIdAfterRemove = function (e) {
              var t,
                n = this.getState().nodes,
                r = n.find(function (t) {
                  return t.id === e;
                }),
                o = this.entity(e);
              if (!(r && r.parentId && o && o.canBeRemoved())) return null;
              if (
                (null === (t = o.pane().mainDataSource()) || void 0 === t
                  ? void 0
                  : t.id()) === e &&
                !this.canNodeWithIdBeUnmerged(e)
              ) {
                var i = n
                    .filter(function (e) {
                      return 0 === e.level;
                    })
                    .map(function (e) {
                      return e.id;
                    }),
                  a = this._takeNextOrPrevElement(i, r.parentId);
                return Object(D.ensureDefined)(
                  n.find(function (e) {
                    return e.id === a;
                  }),
                ).children[0];
              }
              var u = Object(D.ensureDefined)(
                n.find(function (e) {
                  return e.id === r.parentId;
                }),
              ).children;
              return 1 === u.length
                ? this.getNextNodeIdAfterRemove(r.parentId)
                : this._takeNextOrPrevElement(u, e);
            }),
            (e.prototype.isContextMenuOpened = function () {
              return this._isContextMenuOpened.readonly();
            }),
            (e.prototype._takeNextOrPrevElement = function (e, t) {
              var n = e.indexOf(t);
              return e[n === e.length - 1 ? n - 1 : n + 1];
            }),
            (e.prototype._getGroupAction = function () {
              var e = this;
              return new xr.Action({
                label: Object(y.t)('Create a group of drawings'),
                icon: A,
                onExecute: function () {
                  e.createGroupFromSelection();
                },
              });
            }),
            (e.prototype._getRenameAction = function (e) {
              var t = this;
              return new xr.Action({
                label: Object(y.t)('Rename'),
                icon: Fr,
                onExecute: function () {
                  e(), Cn('Context menu rename', En(t._objects));
                },
              });
            }),
            (e.prototype._getActionsForGroupItem = function (e, t, n) {
              var r = this,
                o = [
                  new xr.Action({
                    label: e.isLocked()
                      ? Object(y.t)('Unlock')
                      : Object(y.t)('Lock'),
                    icon: e.isLocked() ? Lr : Br,
                    onExecute: function () {
                      return r.setIsLocked(e.id(), !e.isLocked());
                    },
                  }),
                  new xr.Action({
                    label: e.isVisible()
                      ? Object(y.t)('Hide')
                      : Object(y.t)('Show'),
                    icon: e.isVisible() ? Hr : Gr,
                    onExecute: function () {
                      return r.setIsVisible(e.id(), !e.isVisible());
                    },
                  }),
                  new xr.Action({
                    label: Object(y.t)('Remove'),
                    icon: zr,
                    onExecute: function () {
                      return r.remove(e.id());
                    },
                    hotkeyHash: Lt.isMacKeyboard ? 8 : 46,
                  }),
                ];
              return (
                1 === this._objects.length &&
                  (o.unshift(new xr.Separator()),
                  o.unshift(this._getRenameAction(t))),
                n &&
                  (o.unshift(new xr.Separator()),
                  o.unshift(this._getGroupAction())),
                o
              );
            }),
            (e.prototype._unmergeSelection = function (e) {
              var t = this._getSelectedEntities();
              if (1 !== t.length)
                throw new Error('Only one object can be unmerged');
              var n = t[0],
                r = Object(D.ensureNotNull)(
                  this._model.dataSourceForId(n.id()),
                );
              if (!Vr(r)) throw new Error('Entity is not IPriceDataSource');
              (0 === e
                ? this._controller.unmergeSourceUp
                : this._controller.unmergeSourceDown
              ).call(this._controller, r),
                Cn(0 === e ? 'New pane above' : 'New pane below', En([n]));
            }),
            (e.prototype._recalculateTree = function () {
              var e = new Ir(this._controller).buildTree(),
                t = e.nodes,
                n = e.entities;
              (this._nodes = t), (this._entitiesCache = n);
            }),
            (e.prototype._normalizeTargetAndDropType = function (e, t) {
              var n = this._ensuredEntity(e);
              return (
                'inside' === t &&
                  ((t = 'before'),
                  (n = Object(D.ensureDefined)(
                    Object(r.f)(n.children()).shift(),
                  ))),
                [n, t]
              );
            }),
            (e.prototype._getSelectedEntities = function () {
              var e = this,
                t = this._selection.selected().reduce(
                  function (t, n) {
                    var r = e._getEntityById(n);
                    return r ? (t.selected.push(r), t) : (t.removed.push(n), t);
                  },
                  { selected: [], removed: [] },
                ),
                n = t.selected,
                r = t.removed;
              return (
                r.length &&
                  Ur.logWarn(
                    'Detected dangling sources in selection. They will be ignored: ' +
                      JSON.stringify(r),
                  ),
                n
              );
            }),
            (e.prototype._getEntityById = function (e) {
              return this._entitiesCache[e] || this._facade.getObjectById(e);
            }),
            e
          );
        })(),
        qr = n('sQaR');
      n.d(t, 'ObjectTreeDialogRenderer', function () {
        return Kr;
      });
      var Kr = (function (e) {
        function t() {
          var t = e.call(this) || this;
          t._handleClose = function () {
            a.unmountComponentAtNode(t._container),
              t._setVisibility(!1),
              null !== t._viewModel &&
                (t._viewModel.destroy(), (t._viewModel = null));
          };
          var n = Object(ir.service)(ar.CHART_WIDGET_COLLECTION_SERVICE);
          return (
            (t._activeChartWidget = n.activeChartWidget.value()),
            (t._viewModel = new Wr(n.activeChartWidget)),
            t
          );
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.hide = function () {
            this._handleClose();
          }),
          (t.prototype.isVisible = function () {
            return this.visible().value();
          }),
          (t.prototype.show = function () {
            var e = this;
            h().then(function () {
              null !== e._viewModel &&
                (a.render(
                  o.createElement(rr, {
                    onClose: e._handleClose,
                    viewModel: e._viewModel,
                    activeChartWidget: e._activeChartWidget,
                  }),
                  e._container,
                ),
                e._setVisibility(!0));
            });
          }),
          t
        );
      })(qr.a);
    },
    yN0L: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          return function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = e.getMonitor(),
              r = e.getRegistry();
            l(n);
            var o = f(n);
            o.forEach(function (o, a) {
              var u = d(o, a, r, n),
                s = { type: i.DROP, payload: { dropResult: c({}, t, {}, u) } };
              e.dispatch(s);
            });
          };
        });
      var r,
        o = (r = n('QLaP')) && r.__esModule ? r : { default: r },
        i = n('/yIc'),
        a = n('rTKX');
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function s(e, t, n) {
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
        (0, o.default)(e.isDragging(), 'Cannot call drop while not dragging.'),
          (0, o.default)(
            !e.didDrop(),
            'Cannot call drop twice during one drag operation.',
          );
      }
      function d(e, t, n, r) {
        var i = n.getTarget(e),
          u = i ? i.drop(r, e) : void 0;
        return (
          (function (e) {
            (0, o.default)(
              void 0 === e || (0, a.isObject)(e),
              'Drop result must either be an object or undefined.',
            );
          })(u),
          void 0 === u && (u = 0 === t ? {} : r.getDropResult()),
          u
        );
      }
      function f(e) {
        var t = e.getTargetIds().filter(e.canDropOnTarget, e);
        return t.reverse(), t;
      }
    },
    yfz3: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.DropTarget = function (e, t, n) {
          var f =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          (0, s.checkDecoratorArguments)(
            'DropTarget',
            'type, spec, collect[, options]',
            e,
            t,
            n,
            f,
          );
          var p = e;
          'function' != typeof e &&
            ((0, r.default)(
              (0, a.isValidType)(e, !0),
              'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
              e,
            ),
            (p = function () {
              return e;
            }));
          (0, r.default)(
            (0, o.isPlainObject)(t),
            'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            t,
          );
          var h = (0, d.default)(t);
          return (
            (0, r.default)(
              'function' == typeof n,
              'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
              n,
            ),
            (0, r.default)(
              (0, o.isPlainObject)(f),
              'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
              n,
            ),
            function (e) {
              return (0, l.default)({
                containerDisplayName: 'DropTarget',
                createHandler: h,
                registerHandler: i.registerTarget,
                createMonitor: function (e) {
                  return new c.DropTargetMonitorImpl(e);
                },
                createConnector: function (e) {
                  return new u.TargetConnector(e);
                },
                DecoratedComponent: e,
                getType: p,
                collect: n,
                options: f,
              });
            }
          );
        });
      var r = f(n('QLaP')),
        o = n('GanS'),
        i = n('lAcH'),
        a = n('qvEB'),
        u = n('Tw7s'),
        c = n('z3uI'),
        s = n('aDaG'),
        l = f(n('td7b')),
        d = f(n('Ed17'));
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
    },
    yupZ: function (e, t, n) {
      'use strict';
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.NativeDragSource = void 0);
      var o = (function () {
        function e(t) {
          var n = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.config = t),
            (this.item = {}),
            Object.keys(this.config.exposeProperties).forEach(function (e) {
              Object.defineProperty(n.item, e, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return (
                    console.warn(
                      'Browser doesn\'t allow reading "'.concat(
                        e,
                        '" until the drop event.',
                      ),
                    ),
                    null
                  );
                },
              });
            });
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: 'mutateItemByReadingDataTransfer',
              value: function (e) {
                var t = this,
                  n = {};
                e &&
                  Object.keys(this.config.exposeProperties).forEach(function (
                    r,
                  ) {
                    n[r] = {
                      value: t.config.exposeProperties[r](
                        e,
                        t.config.matchesTypes,
                      ),
                    };
                  }),
                  Object.defineProperties(this.item, n);
              },
            },
            {
              key: 'canDrag',
              value: function () {
                return !0;
              },
            },
            {
              key: 'beginDrag',
              value: function () {
                return this.item;
              },
            },
            {
              key: 'isDragging',
              value: function (e, t) {
                return t === e.getSourceId();
              },
            },
            { key: 'endDrag', value: function () {} },
          ]) && r(t.prototype, n),
          o && r(t, o),
          e
        );
      })();
      t.NativeDragSource = o;
    },
    z3uI: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.DropTargetMonitorImpl = void 0);
      var r,
        o = (r = n('QLaP')) && r.__esModule ? r : { default: r };
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var a = !1,
        u = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.targetId = null),
              (this.internalMonitor = t.getMonitor());
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: 'receiveHandlerId',
                value: function (e) {
                  this.targetId = e;
                },
              },
              {
                key: 'getHandlerId',
                value: function () {
                  return this.targetId;
                },
              },
              {
                key: 'subscribeToStateChange',
                value: function (e, t) {
                  return this.internalMonitor.subscribeToStateChange(e, t);
                },
              },
              {
                key: 'canDrop',
                value: function () {
                  if (!this.targetId) return !1;
                  (0, o.default)(
                    !a,
                    'You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor',
                  );
                  try {
                    return (
                      (a = !0),
                      this.internalMonitor.canDropOnTarget(this.targetId)
                    );
                  } finally {
                    a = !1;
                  }
                },
              },
              {
                key: 'isOver',
                value: function (e) {
                  return (
                    !!this.targetId &&
                    this.internalMonitor.isOverTarget(this.targetId, e)
                  );
                },
              },
              {
                key: 'getItemType',
                value: function () {
                  return this.internalMonitor.getItemType();
                },
              },
              {
                key: 'getItem',
                value: function () {
                  return this.internalMonitor.getItem();
                },
              },
              {
                key: 'getDropResult',
                value: function () {
                  return this.internalMonitor.getDropResult();
                },
              },
              {
                key: 'didDrop',
                value: function () {
                  return this.internalMonitor.didDrop();
                },
              },
              {
                key: 'getInitialClientOffset',
                value: function () {
                  return this.internalMonitor.getInitialClientOffset();
                },
              },
              {
                key: 'getInitialSourceClientOffset',
                value: function () {
                  return this.internalMonitor.getInitialSourceClientOffset();
                },
              },
              {
                key: 'getSourceClientOffset',
                value: function () {
                  return this.internalMonitor.getSourceClientOffset();
                },
              },
              {
                key: 'getClientOffset',
                value: function () {
                  return this.internalMonitor.getClientOffset();
                },
              },
              {
                key: 'getDifferenceFromInitialOffset',
                value: function () {
                  return this.internalMonitor.getDifferenceFromInitialOffset();
                },
              },
            ]) && i(t.prototype, n),
            r && i(t, r),
            e
          );
        })();
      t.DropTargetMonitorImpl = u;
    },
    z6MX: function (e, t, n) {
      'use strict';
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var o = (function () {
        function e(t, n) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e);
          for (var r = t.length, o = [], i = 0; i < r; i++) o.push(i);
          o.sort(function (e, n) {
            return t[e] < t[n] ? -1 : 1;
          });
          for (var a, u, c = [], s = [], l = [], d = 0; d < r - 1; d++)
            (a = t[d + 1] - t[d]),
              (u = n[d + 1] - n[d]),
              s.push(a),
              c.push(u),
              l.push(u / a);
          for (var f = [l[0]], p = 0; p < s.length - 1; p++) {
            var h = l[p],
              v = l[p + 1];
            if (h * v <= 0) f.push(0);
            else {
              a = s[p];
              var g = s[p + 1],
                b = a + g;
              f.push((3 * b) / ((b + g) / h + (b + a) / v));
            }
          }
          f.push(l[l.length - 1]);
          for (var y, m = [], O = [], _ = 0; _ < f.length - 1; _++) {
            y = l[_];
            var S = f[_],
              w = 1 / s[_],
              j = S + f[_ + 1] - y - y;
            m.push((y - S - j) * w), O.push(j * w * w);
          }
          (this.xs = t),
            (this.ys = n),
            (this.c1s = f),
            (this.c2s = m),
            (this.c3s = O);
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: 'interpolate',
              value: function (e) {
                var t = this.xs,
                  n = this.ys,
                  r = this.c1s,
                  o = this.c2s,
                  i = this.c3s,
                  a = t.length - 1;
                if (e === t[a]) return n[a];
                for (var u, c = 0, s = i.length - 1; c <= s; ) {
                  var l = t[(u = Math.floor(0.5 * (c + s)))];
                  if (l < e) c = u + 1;
                  else {
                    if (!(l > e)) return n[u];
                    s = u - 1;
                  }
                }
                var d = e - t[(a = Math.max(0, s))],
                  f = d * d;
                return n[a] + r[a] * d + o[a] * f + i[a] * d * f;
              },
            },
          ]) && r(t.prototype, n),
          o && r(t, o),
          e
        );
      })();
      t.default = o;
    },
    zAsM: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isSafari = t.isFirefox = void 0);
      var r = n('ae+E'),
        o = (0, r.memoize)(function () {
          return /firefox/i.test(navigator.userAgent);
        });
      t.isFirefox = o;
      var i = (0, r.memoize)(function () {
        return Boolean(window.safari);
      });
      t.isSafari = i;
    },
    zLS0: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = {};
      t.default = function (e) {
        return {
          beginDrag: (0, o.default)(e),
          publishDragSource: (0, i.default)(e),
          hover: (0, a.default)(e),
          drop: (0, u.default)(e),
          endDrag: (0, c.default)(e),
        };
      };
      var o = l(n('evKi')),
        i = l(n('Ag/1')),
        a = l(n('D1HX')),
        u = l(n('yN0L')),
        c = l(n('Rvb+')),
        s = n('/yIc');
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.keys(s).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return s[e];
              },
            }));
      });
    },
    zn4F: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.448 10.124a10.82 10.82 0 0 1-.336-.609L2.105 9.5l.007-.015a12.159 12.159 0 0 1 1.686-2.466C5.002 5.665 6.752 4.373 9.05 4.373c2.297 0 4.047 1.292 5.25 2.646a12.166 12.166 0 0 1 1.687 2.466l.007.015-.007.015a12.163 12.163 0 0 1-1.686 2.466c-1.204 1.354-2.954 2.646-5.251 2.646-2.298 0-4.048-1.292-5.252-2.646a12.16 12.16 0 0 1-1.35-1.857zm14.558-.827l-.456.203.456.203v.002l-.003.005-.006.015-.025.052a11.813 11.813 0 0 1-.461.857 13.163 13.163 0 0 1-1.463 2.011c-1.296 1.46-3.296 2.982-5.998 2.982-2.703 0-4.703-1.522-6-2.982a13.162 13.162 0 0 1-1.83-2.677 7.883 7.883 0 0 1-.118-.243l-.007-.015-.002-.005v-.001l.456-.204-.456-.203v-.002l.002-.005.007-.015a4.66 4.66 0 0 1 .119-.243 13.158 13.158 0 0 1 1.83-2.677c1.296-1.46 3.296-2.982 5.999-2.982 2.702 0 4.702 1.522 5.998 2.981a13.158 13.158 0 0 1 1.83 2.678 8.097 8.097 0 0 1 .119.243l.006.015.003.005v.001zm-.456.203l.456-.203.09.203-.09.203-.456-.203zM1.092 9.297l.457.203-.457.203-.09-.203.09-.203zm9.958.203c0 1.164-.917 2.07-2 2.07-1.084 0-2-.906-2-2.07 0-1.164.916-2.07 2-2.07 1.083 0 2 .906 2 2.07zm1 0c0 1.695-1.344 3.07-3 3.07-1.657 0-3-1.375-3-3.07 0-1.695 1.343-3.07 3-3.07 1.656 0 3 1.375 3 3.07z"/></svg>';
    },
  },
]);
