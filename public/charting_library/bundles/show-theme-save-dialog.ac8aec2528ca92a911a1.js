(window.webpackJsonp = window.webpackJsonp || []).push([
  ['show-theme-save-dialog'],
  {
    KeOl: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'showThemeSaveDialog', function () {
          return h;
        });
      n('YFKU');
      var o = n('UJLt'),
        a = n('hkLy'),
        i = n('EsvI'),
        s = n('JWMC');
      function h(e, t) {
        new o.SaveRenameDialog({
          fields: [
            new a.InputField({
              error: window.t('Please enter theme name'),
              label: window.t('Theme name'),
              maxLength: 128,
              name: 'text',
            }),
          ],
          title: window.t('Save Theme As'),
          confirm: {
            shouldShowDialog: function (e) {
              return Object(i.isThemeExist)(e.text);
            },
            getMessage: function (e) {
              return window.t(
                "Color Theme '__themeName__' already exists. Do you really want to replace it?",
                { themeName: e.text },
              );
            },
          },
        })
          .show()
          .then(function (n) {
            Object(i.saveTheme)(n.text, e).then(function () {
              t && t(n.text);
            }),
              Object(s.trackEvent)('GUI', 'Themes', 'Save custom theme');
          });
      }
    },
  },
]);
