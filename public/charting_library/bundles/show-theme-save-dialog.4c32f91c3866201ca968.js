(window.webpackJsonp = window.webpackJsonp || []).push([
  ['show-theme-save-dialog'],
  {
    KeOl: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'showThemeSaveDialog', function () {
          return s;
        });
      var o = n('YFKU'),
        a = n('fZEr'),
        i = n('EsvI'),
        c = n('JWMC');
      function s(e, t) {
        function n(n) {
          Object(i.saveTheme)(n, e).then(function () {
            t && t(n);
          }),
            Object(c.trackEvent)('GUI', 'Themes', 'Save custom theme');
        }
        Object(a.b)({
          title: Object(o.t)('Save Theme As'),
          text: Object(o.t)('Theme name') + ':',
          maxLength: 128,
          onRename: function (e) {
            var t = e.newValue,
              c = e.focusInput,
              s = e.dialogClose,
              r = e.innerManager;
            return new Promise(function (e) {
              Object(i.isThemeExist)(t).then(function (i) {
                if (i) {
                  var m = Object(
                    o.t,
                  )(
                    "Color Theme '__themeName__' already exists. Do you really want to replace it?",
                    { themeName: t },
                  );
                  Object(a.a)(
                    {
                      text: m,
                      onConfirm: function (e) {
                        var o = e.dialogClose;
                        n(t), o(), s();
                      },
                      onClose: c,
                    },
                    r,
                  ).then(function () {
                    e();
                  });
                } else n(t), e(), s();
              });
            });
          },
        });
      }
    },
  },
]);
