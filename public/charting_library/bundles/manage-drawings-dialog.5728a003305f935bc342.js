(window.webpackJsonp = window.webpackJsonp || []).push([
  ['manage-drawings-dialog'],
  {
    CAsX: function (e, t, n) {
      'use strict';
      n.r(t);
      var i = n('q1tI'),
        a = n('i8i4'),
        o = n('mrSG'),
        r = n('YFKU'),
        s = n('eqEH'),
        l = n('vPbs'),
        c = n('g89m'),
        d = n('b4AZ'),
        u = n('RIfm'),
        h = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            (n._dialogRef = i.createRef()),
              (n._renderChildren = function (e) {
                return i.createElement(
                  'div',
                  { className: u.wrap },
                  i.createElement(d.a, {
                    onInitialized: e.centerAndFit,
                    chartWidget: n._activeChartWidget,
                  }),
                );
              });
            var a = Object(s.service)(l.CHART_WIDGET_COLLECTION_SERVICE);
            return (
              (n._activeChartWidget = a.activeChartWidget.value()),
              (n.state = { layoutName: a.metaInfo.name.value() }),
              n
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.render = function () {
              return i.createElement(c.a, {
                className: u.dialog,
                dataName: 'manage-drawings-dialog',
                isOpened: !0,
                onClickOutside: this.props.onClose,
                onClose: this.props.onClose,
                ref: this._dialogRef,
                render: this._renderChildren,
                showSeparator: !0,
                title: Object(r.t)('Manage layout drawings'),
                subtitle: this.state.layoutName,
              });
            }),
            t
          );
        })(i.PureComponent);
      n.d(t, 'ManageDrawingsDialogRenderer', function () {
        return p;
      });
      var p = (function () {
        function e(e) {
          var t = this;
          (this._container = document.createElement('div')),
            (this._isVisible = !1),
            (this._handleClose = function () {
              t._onClose && t._onClose(),
                a.unmountComponentAtNode(t._container),
                (t._isVisible = !1);
            }),
            (this._onClose = e);
        }
        return (
          (e.prototype.hide = function () {
            this._handleClose();
          }),
          (e.prototype.isVisible = function () {
            return this._isVisible;
          }),
          (e.prototype.show = function () {
            a.render(
              i.createElement(h, { onClose: this._handleClose }),
              this._container,
            ),
              (this._isVisible = !0);
          }),
          e
        );
      })();
    },
    RIfm: function (e, t, n) {
      e.exports = { dialog: 'dialog-9n4O4ELg', wrap: 'wrap-ZYcCDxAC' };
    },
  },
]);
