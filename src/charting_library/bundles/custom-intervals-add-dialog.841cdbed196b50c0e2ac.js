(window.webpackJsonp = window.webpackJsonp || []).push([
  ['custom-intervals-add-dialog'],
  {
    Qhte: function (e, t, n) {
      e.exports = {
        scrollable: 'scrollable-Yu-wPchb',
        content: 'content-2n4jbVjv',
        row: 'row-37rvoi2g',
        title: 'title-2jd7Qo8W',
        control: 'control-1o8LMgzl',
      };
    },
    w9vS: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'ToolWidgetIntervalsAddDialog', function () {
          return v;
        });
      var a = n('q1tI'),
        o = n.n(a),
        c = n('YFKU'),
        l = n('ycFu'),
        r = n('H172'),
        i = n('3G1X'),
        s = n('tWVy'),
        u = n('tmL0'),
        m = n('cSDC'),
        d = n('Qhte'),
        b = m.a.map(function (e) {
          return { value: e.name, content: e.label };
        });
      function v(e) {
        var t = e.onAdd,
          n = e.onClose,
          v = e.onUnmount,
          f = Object(a.useState)(m.a[0].name),
          w = f[0],
          O = f[1],
          j = Object(a.useState)('1'),
          E = j[0],
          g = j[1];
        return (
          Object(a.useEffect)(function () {
            return function () {
              v && v();
            };
          }, []),
          o.a.createElement(l.a, {
            dataName: 'add-custom-interval-dialog',
            title: Object(c.t)('Add custom time interval'),
            isOpened: !0,
            onSubmit: function () {
              var e = Object(m.b)(E, w);
              void 0 !== e && t(e);
              n();
            },
            onCancel: n,
            onClickOutside: n,
            onClose: n,
            render: function () {
              return o.a.createElement(
                u.a,
                { className: d.scrollable, onScroll: N },
                o.a.createElement(
                  'div',
                  { className: d.content },
                  o.a.createElement(
                    'div',
                    { className: d.row },
                    o.a.createElement(
                      'div',
                      { className: d.title },
                      Object(c.t)('Type'),
                    ),
                    o.a.createElement(r.a, {
                      className: d.control,
                      value: w,
                      items: b,
                      onChange: C,
                    }),
                  ),
                  o.a.createElement(
                    'div',
                    { className: d.row },
                    o.a.createElement(
                      'div',
                      { className: d.title },
                      Object(c.t)('Interval'),
                    ),
                    o.a.createElement(i.b, {
                      className: d.control,
                      inputMode: 'numeric',
                      maxLength: 6,
                      value: E,
                      onChange: p,
                    }),
                  ),
                ),
              );
            },
            defaultActionOnClose: l.b.None,
            submitButtonText: Object(c.t)('Add'),
            submitOnEnterKey: !1,
            fullScreen: !0,
          })
        );
        function p(e) {
          var t = e.currentTarget.value;
          /^[0-9]*$/.test(t) && g(t);
        }
        function N() {
          s.a.fire();
        }
        function C(e) {
          O(e);
        }
      }
    },
  },
]);
