(window.webpackJsonp = window.webpackJsonp || []).push([
  [37],
  {
    BhuR: function (t, o) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" width="9px" height="9px"><path d="M2 1L1 2l2.5 2.5L1 7l1 1 2.5-2.5L7 8l1-1-2.5-2.5L8 2 7 1 4.5 3.5z"/></svg>';
    },
    GAqT: function (t, o, e) {
      'use strict';
      (function (o, a) {
        var i = e('Hr11').max,
          n = e('5qpw').lazyJqueryUI,
          s = e('jAh7').getRootOverlapManager;
        e('PVgW');
        var l = {
          modalDialog: null,
          dialogs: [],
          NOTIFICATION_ANIMATION_START_OFFSET: '-33px',
          _constrainDraggableOptionsIfNeeded: function (t) {
            return (
              o.enabled('constraint_dialogs_movement') &&
                (t.containment = '.chart-page'),
              t
            );
          },
          showNotice: function (t, o, e) {
            'object' == typeof o && ((e = o), (o = ''));
            var i = (e = e || {}).doNotCloseOnBgClick || !1,
              n = e.html || '',
              s = e.width || '400px',
              d = {};
            (d.noClose = e.noClose || null),
              (d.addClass = e.modalDialogClass || null),
              l.createModalDialog(t, d);
            var r = e.centerCaption ? 'caption-big-center' : 'caption-big';
            l.modalDialog.find('._tv-dialog').css('width', s);
            var c = e.customButtonCaption ? e.customButtonCaption : $.t('OK');
            return (
              l.modalDialog
                .find('._tv-dialog-content')
                .html(
                  a.render(
                    '<div class="main"><div class="{{captionClassName}} {{classSuffix}}">{{text}}' +
                      n +
                      '</div>{{^removeOkButton}}<div class="buttons"><input type="button" class="_tv-button ok" value="' +
                      c +
                      '"/></div>{{/removeOkButton}}</div>',
                    {
                      captionClassName: r,
                      classSuffix: e.classSuffix || '',
                      text: o,
                      removeOkButton: e && e.removeOkButton,
                    },
                  ),
                ),
              l.modalDialog.find('._tv-button.ok').on('click', function () {
                l.destroy(), e.onOkButtonClick && e.onOkButtonClick();
              }),
              l.positionDialog(),
              l.applyHandlers(!1, {
                doNotCloseOnBgClickIfShadowbox: i,
                beforeDestroy: e.onClose,
              }),
              l.modalDialog
            );
          },
          showCustomDialog: function (t) {
            function o(t) {
              l.destroy(), t.preventDefault();
            }
            return (
              l.createModalDialog(t.title || $.t('Dialog'), { addClass: '' }),
              l.modalDialog
                .find('._tv-dialog')
                .css('width', t.width || '400px'),
              l.modalDialog
                .find('._tv-dialog-content')
                .html(
                  '<div class="main">' + (t.html || $.t('Content')) + '</div>',
                ),
              l.modalDialog.find('.ok').click(o),
              l.modalDialog.find('form').submit(o),
              l.modalDialog.find('.cancel').click(o),
              l.modalDialog.find('._tv-dialog-title-close').click(o),
              l.positionDialog(),
              l.applyHandlers(),
              l.modalDialog
            );
          },
          createModalDialog: function (t, o) {
            (o = o || {}),
              null !== l.modalDialog && l.destroy(),
              (l.modalDialog = $(
                '<div class="_tv-dialog-shadowbox"><div class="_tv-dialog _tv-dialog-modal' +
                  (o.addClass ? ' ' + o.addClass : '') +
                  '">' +
                  (o.noHeader
                    ? ''
                    : '<div class="_tv-dialog-title">' +
                      (o.noClose
                        ? ''
                        : '<a class="_tv-dialog-title-close"></a>') +
                      '<span class="_tv-dialog-title-text">' +
                      t +
                      '</span></div>') +
                  '<div class="_tv-dialog-error"><span class="message"></span></div><div class="_tv-dialog-message"><span class="message"></span></div><div class="_tv-dialog-content"></div></div></div>',
              )
                .appendTo($('body'))
                .data('title', t)),
              l._addMessageCloseButton(l.modalDialog.find('._tv-dialog-error')),
              l._addMessageCloseButton(
                l.modalDialog.find('._tv-dialog-message'),
              ),
              o.noShadowBox && l.modalDialog.addClass('transparent'),
              o.addClass && l.modalDialog.addClass(o.addClass),
              o.width &&
                l.modalDialog.find('._tv-dialog').css({ width: o.width }),
              o.content &&
                l.modalDialog.find('._tv-dialog-content').html(o.content);
            var e = $('.fancybox-overlay');
            if (e.length) {
              var a = e.css('z-index');
              $('._tv-dialog-shadowbox').css('z-index', a + 1);
            }
            return (
              o.draggable &&
                n(l.modalDialog).draggable(
                  l._constrainDraggableOptionsIfNeeded({
                    handle: l.modalDialog.find('._tv-dialog-title'),
                  }),
                ),
              o.zIndex && l.modalDialog.css('z-index', o.zIndex),
              l.modalDialog
            );
          },
          _addMessageCloseButton: function (t) {
            var o = $(e('BhuR')).attr({
              class: 'close',
              title: $.t('Close message'),
            });
            t.append(o),
              $(o).on('click', function () {
                t.animate(
                  {
                    marginTop: l.NOTIFICATION_ANIMATION_START_OFFSET,
                    opacity: 0,
                  },
                  'fast',
                  function () {
                    t.hide();
                  },
                );
              });
          },
          createDialog: function (t, o) {
            if (l.isOpen(t))
              return (
                (c = l.get(t)).find('._tv-dialog-content').html(''),
                c.data('new', !1),
                c
              );
            var e = (o = o || {}).ownerDocument || document,
              d = s(e),
              r = d.ensureWindow(t, { position: 'relative' }),
              c = $(
                a.render(
                  '<div class="_tv-dialog _tv-dialog-nonmodal {{&addClass}}"><div class="_tv-dialog-title{{#hideTitle}} _tv-dialog-title-hidden{{/hideTitle}}{{#hideCloseCross}} _tv-dialog-title-no-close{{/hideCloseCross}}">{{^hideTitle}} {{&title}}{{/hideTitle}}{{^hideCloseCross}}<a class="_tv-dialog-title-close"></a>{{/hideCloseCross}}</div><div class="_tv-dialog-error"><span class="message"></span></div><div class="_tv-dialog-message"><span class="message"></span></div><div class="_tv-dialog-content"></div></div>',
                  {
                    addClass: o.addClass || '',
                    hideTitle: o.hideTitle,
                    hideCloseCross: o.hideCloseCross,
                    title: t,
                  },
                ),
                e,
              ).appendTo(r);
            l._addMessageCloseButton(c.find('._tv-dialog-error')),
              l._addMessageCloseButton(c.find('._tv-dialog-message')),
              o.width && c.css({ width: o.width }),
              o.content && c.find('._tv-dialog-content').html(o.content);
            var g = 0;
            (g = o.zIndex
              ? o.zIndex
              : l.dialogs && l.dialogs.length
              ? i(
                  $.map(l.dialogs, function (t) {
                    return parseInt((t.dialog || t).css('z-index'), 10);
                  }),
                ) + 1
              : 110),
              c.css('z-index', g),
              c.data('new', !0),
              c.data('title', t),
              c.data('id', l.dialogs.length + 1),
              l.dialogs.push({ title: t, dialog: c, id: l.dialogs.length + 1 }),
              c.on('mousedown touchstart', function () {
                d.moveToTop(t);
              });
            var u = {
              start: function (t, o) {
                for (
                  var e = o.helper.css('z-index'), a = 0, i = null, n = 0;
                  n < l.dialogs.length;
                  n++
                ) {
                  var s = l.dialogs[n].dialog.css('z-index');
                  s > a && ((a = s), (i = l.dialogs[n].dialog));
                }
                o.helper.css('z-index', a), i.css('z-index', e);
              },
            };
            return (
              o.dragHandle
                ? (u.handle = o.dragHandle)
                : o.hideTitle || (u.handle = '._tv-dialog-title'),
              o.dragOptions && $.extend(u, o.dragOptions),
              n(c).draggable(l._constrainDraggableOptionsIfNeeded(u)),
              c
            );
          },
          positionDialog: function (t, o, e) {
            e = e || {};
            function a() {
              v.css('margin-left', -Math.round(v.outerWidth() / 2) + 'px'),
                v.css('margin-top', -Math.round(v.outerHeight() / 2) + 'px');
            }
            if (((o = o || e.position), t)) {
              var i,
                n,
                s = t.prop('ownerDocument'),
                d = s.defaultView,
                r = t.width(),
                c = t.height(),
                g = $(d).width(),
                u = $(d).height();
              if (o && o.top && o.left)
                (n = e.forcePosition
                  ? o.left
                  : Math.max(2, Math.min(g - r - 4, o.left)) + 'px'),
                  (i = e.forcePosition
                    ? o.top
                    : Math.max(2, Math.min(u - c - 4, o.top)) + 'px');
              else if (o && o.considerScroll) {
                var p = $(s);
                (n = Math.round((g - r) / 2 + p.scrollLeft()) + 'px'),
                  (i = Math.round((u - c) / 2 + p.scrollTop()) + 'px');
              } else
                (n = Math.round((g - r) / 2) + 'px'),
                  (i = Math.round((u - c) / 2) + 'px');
              e.fadeIn
                ? t.css({ left: n, top: i }).hide().fadeIn('fast')
                : e.smooth
                ? t.animate({ left: n, top: i })
                : t.css({ left: n, top: i });
            } else {
              var v = (t = l.modalDialog).find('._tv-dialog');
              a(), v.resize(a);
            }
          },
          applyHandlers: function (t, o) {
            var e = !t || t === this.modalDialog,
              a =
                ((o = o || {}),
                e
                  ? function () {
                      l.destroy();
                    }
                  : function () {
                      l.destroy(t.data('title'));
                    }),
              i = (t = t || l.modalDialog.find('._tv-dialog')).prop(
                'ownerDocument',
              );
            o.beforeDestroy && t.on('destroy', o.beforeDestroy),
              t
                .find(
                  '._tv-dialog-title ._tv-dialog-title-close, .js-dialog-close',
                )
                .on('click', function (t) {
                  o.closeHandler && 'function' == typeof o.closeHandler
                    ? o.closeHandler(t)
                    : a();
                }),
              o.doNotCloseOnBgClick ||
                setTimeout(function () {
                  $(i).on('mousedown.closeDialog', function (e) {
                    var n = $(e.target).parents().andSelf();
                    n.is(t) ||
                      (o.doNotCloseOnBgClickIfShadowbox &&
                        n.is(
                          '._tv-dialog-shadowbox, .tv-dialog__modal-wrap',
                        )) ||
                      n.is(
                        '.colorpicker, .charts-popup-list, ._tv-dialog, .tvcolorpicker-popup, .symbol-edit-popup, .ui-datepicker, .clockpicker-popover, .pac-container, .context-menu-wrapper',
                      ) ||
                      ($(i).off('mousedown.closeDialog'), a());
                  });
                }, 0),
              t.find('input[type="checkbox"]').change(function () {
                var t = $(this);
                t.next('._tv-dialog-checkbox-mask')
                  .toggleClass('disabled', t.prop('disabled'))
                  .toggleClass(
                    '_tv-dialog-checkbox-mask-active',
                    t.is(':checked'),
                  );
              });
            var n = t
              .find('input[type="text"]')
              .focus(function () {
                $(this).addClass('_tv-dialog-content-textactive');
              })
              .blur(function () {
                $(this).removeClass('_tv-dialog-content-textactive');
              })
              .first();
            Modernizr.mobiletouch || o.notFocusFirst || n.focus(),
              t
                .find('input[type="password"]')
                .focus(function () {
                  $(this).addClass('_tv-dialog-content-textactive');
                })
                .blur(function () {
                  $(this).removeClass('_tv-dialog-content-textactive');
                }),
              t
                .find('textarea')
                .focus(function () {
                  $(this).addClass('_tv-dialog-content-textareaactive');
                })
                .blur(function () {
                  $(this).removeClass('_tv-dialog-content-textareaactive');
                }),
              t.find('._tv-dialog-checkbox-mask').click(function () {
                var t = $(this).prev();
                t.prop('disabled') ||
                  (t.prop('checked', !t[0].checked), t.change());
              }),
              o.doNotCloseOnEsc ||
                $(i).bind('keyup.hideDialog', function (o) {
                  if (27 === o.keyCode)
                    return t ? l.destroy(t.data('title')) : l.destroy(), !1;
                }),
              o.processEnterButton &&
                $(i).bind('keyup.confirmAndCloseDialog', function (t) {
                  13 === t.keyCode &&
                    'textarea' !== t.target.tagName.toLowerCase() &&
                    (o.processEnterButton.click(),
                    $(i).unbind('keyup.confirmAndCloseDialog'));
                });
          },
          showError: function (t, o, e) {
            l.showMessage(t, o, $.extend(e || {}, { isError: !0 }));
          },
          showMessage: function (t, o, e) {
            o || (o = $('._tv-dialog'));
            var a = (e = e || {}).isError
                ? '_tv-dialog-error'
                : '_tv-dialog-message',
              i = o.find('.' + a),
              n = i.find('.message');
            e.html ? n.html('string' == typeof e.html ? e.html : t) : n.text(t),
              n
                .css('width', o.width())
                .toggleClass('selectable', Boolean(e.selectable)),
              i
                .toggleClass('with-close', Boolean(e.withClose))
                .css({
                  marginTop: l.NOTIFICATION_ANIMATION_START_OFFSET,
                  opacity: '0',
                })
                .show()
                .animate({ marginTop: 0, opacity: 1 }, 'fast'),
              e.withClose ||
                (e.hideWithoutAnimation
                  ? i.on(
                      'touchstartoutside mousedownoutside keydownoutside',
                      function t() {
                        i.hide(),
                          i.off(
                            'touchstartoutside mousedownoutside keydownoutside',
                            t,
                          );
                      },
                    )
                  : i.on(
                      'touchstartoutside mousedownoutside keydownoutside',
                      function t() {
                        i.animate(
                          {
                            marginTop: l.NOTIFICATION_ANIMATION_START_OFFSET,
                            opacity: 0,
                          },
                          'fast',
                          function () {
                            i.hide();
                          },
                        ),
                          i.off(
                            'touchstartoutside mousedownoutside keydownoutside',
                            t,
                          );
                      },
                    ));
          },
          isOpen: function (t) {
            for (var o = 0; o < l.dialogs.length; o++)
              if (l.dialogs[o].title === t) return !0;
            return !1;
          },
          get: function (t) {
            for (var o = 0; o < l.dialogs.length; o++)
              if (l.dialogs[o].title === t) return l.dialogs[o].dialog;
          },
          destroy: function (t, o) {
            var e = null;
            if (t && 'string' == typeof t)
              for (var a = 0; a < l.dialogs.length; a++)
                l.dialogs[a].title === t &&
                  ((e = l.dialogs[a].dialog.prop('ownerDocument')),
                  l.dialogs[a].dialog.find('.apply-common-tooltip').mouseout(),
                  l.dialogs[a].dialog.trigger('destroy', o),
                  $(document).unbind('mouseup.hideDialog' + l.dialogs[a].id),
                  $('input', l.dialogs[a].dialog).blur(),
                  l.dialogs[a].dialog.remove(),
                  l.dialogs.splice(a, 1),
                  s(e).unregisterWindow(t));
            else
              l.modalDialog &&
                ((e = l.modalDialog.prop('ownerDocument')),
                l.modalDialog.find('.apply-common-tooltip').mouseout(),
                l.modalDialog.find('._tv-dialog').trigger('destroy'),
                l.modalDialog.remove(),
                (l.modalDialog = null));
            $(e).unbind('keyup.hideDialog'),
              $(e).unbind('keyup.confirmAndCloseDialog');
          },
          resizeContent: function (t, o, e) {
            null == e && (e = 20), (t += e);
            var a = parseInt($('body').height(), 10),
              i = o.height();
            t > a && ((i -= t - a), (i = Math.max(0, i)), o.height(i));
          },
        };
        t.exports.TVOldDialogs = l;
      }.call(this, e('Kxc7'), e('nbsC')));
    },
    PVgW: function (t, o, e) {
      'use strict';
      e.r(o);
      e('P5fv'), e('si6p');
      var a = e('ogJP'),
        i = e('R4+T');
      function n(t) {
        return (
          (t = Math.abs(t)),
          !Object(a.isInteger)(t) &&
            t > 1 &&
            (t = parseFloat(t.toString().replace(/^.+\./, '0.'))),
          0 < t && t < 1
            ? Math.pow(
                10,
                (function (t) {
                  var o = String(t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                  if (null === o) return 0;
                  var e = o[1] ? o[1].length : 0,
                    a = o[2] ? parseInt(o[2], 0) : 0;
                  return Math.max(0, e - a);
                })(t),
              )
            : 1
        );
      }
      function s(t, o) {
        t.trigger('tvticker-beforechange');
        var e = t.data('TVTicker'),
          i = e && e.step,
          s = 0;
        (s = e.parser
          ? e.parser(t.val())
          : Object(a.isInteger)(i)
          ? parseInt(t.val(), 10)
          : parseFloat(t.val())),
          isNaN(s) && (s = 0);
        var l = n(i),
          d = o(s, Math.max(l, n(s)));
        e.formatter && (d = e.formatter(d)), t.val(d), t.change();
      }
      function l(t) {
        var o = t.data('TVTicker'),
          e = o && o.step,
          a = o && o.max;
        s(t, function (t, o) {
          var i = (Math.round(t * o) + Math.round(e * o)) / o;
          return null != a && a < i && (i = t), i;
        });
      }
      function d(t) {
        var o = t.data('TVTicker'),
          e = o && o.step,
          a = o && o.min;
        s(t, function (t, o) {
          var i = (Math.round(t * o) - Math.round(e * o)) / o;
          return null != a && i < a && (i = t), i;
        });
      }
      $.fn.TVTicker = function (t) {
        return (
          void 0 === t && (t = {}),
          this.each(function () {
            var o = !1,
              e = $(this),
              a = e.data('TVTicker');
            if (
              (a ? (o = !0) : (a = { step: Number(e.data('step')) || 1 }),
              'step' in t && (a.step = Number(t.step) || a.step),
              'min' in t && (a.min = t.min),
              'max' in t && (a.max = t.max),
              'formatter' in t && (a.formatter = t.formatter),
              'parser' in t && (a.parser = t.parser),
              e.data('TVTicker', a),
              !o)
            ) {
              var n = $('<div class="tv-ticker">').appendTo(e.parent()),
                s = $('<div class="tv-ticker__btn tv-ticker__btn--up">')
                  .html(i)
                  .appendTo(n),
                r = $('<div class="tv-ticker__btn tv-ticker__btn--down">')
                  .html(i)
                  .appendTo(n);
              n.on('mousedown', function (t) {
                t.preventDefault(), e.focus();
              }),
                s.click(function () {
                  e.is(':disabled') || l(e);
                }),
                r.click(function () {
                  e.is(':disabled') || d(e);
                }),
                e.keydown(function (t) {
                  e.is(':disabled') ||
                    (38 === t.keyCode
                      ? s.addClass('i-active')
                      : 40 === t.keyCode && r.addClass('i-active'));
                }),
                e.keyup(function (t) {
                  e.is(':disabled') ||
                    (38 === t.keyCode
                      ? (l(e), s.removeClass('i-active'))
                      : 40 === t.keyCode && (d(e), r.removeClass('i-active')));
                }),
                e.mousewheel(function (t) {
                  t.deltaY * (t.deltaFactor / 100) > 0 ? s.click() : r.click();
                });
            }
          })
        );
      };
    },
    'R4+T': function (t, o) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>';
    },
    'y1L/': function (t, o, e) {},
    zjLg: function (t, o, e) {},
  },
]);
