(window.webpackJsonp = window.webpackJsonp || []).push([
  [40],
  {
    BhuR: function (t, o) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" width="9px" height="9px"><path d="M2 1L1 2l2.5 2.5L1 7l1 1 2.5-2.5L7 8l1-1-2.5-2.5L8 2 7 1 4.5 3.5z"/></svg>';
    },
    GAqT: function (t, o, e) {
      'use strict';
      (function (o, i) {
        var n = e('Hr11').max,
          a = e('A6WY').lazyJqueryUI,
          s = e('jAh7').getRootOverlapManager;
        e('PVgW');
        var d = {
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
            var n = (e = e || {}).doNotCloseOnBgClick || !1,
              a = e.html || '',
              s = e.width || '400px',
              l = {};
            (l.noClose = e.noClose || null),
              (l.addClass = e.modalDialogClass || null),
              d.createModalDialog(t, l);
            var r = e.centerCaption ? 'caption-big-center' : 'caption-big';
            d.modalDialog.find('._tv-dialog').css('width', s);
            var c = e.customButtonCaption ? e.customButtonCaption : $.t('OK');
            return (
              d.modalDialog
                .find('._tv-dialog-content')
                .html(
                  i.render(
                    '<div class="main"><div class="{{captionClassName}} {{classSuffix}}">{{text}}' +
                      a +
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
              d.modalDialog.find('._tv-button.ok').on('click', function () {
                d.destroy(), e.onOkButtonClick && e.onOkButtonClick();
              }),
              d.positionDialog(),
              d.applyHandlers(!1, {
                doNotCloseOnBgClickIfShadowbox: n,
                beforeDestroy: e.onClose,
              }),
              d.modalDialog
            );
          },
          showCustomDialog: function (t) {
            function o(t) {
              d.destroy(), t.preventDefault();
            }
            return (
              d.createModalDialog(t.title || $.t('Dialog'), { addClass: '' }),
              d.modalDialog
                .find('._tv-dialog')
                .css('width', t.width || '400px'),
              d.modalDialog
                .find('._tv-dialog-content')
                .html(
                  '<div class="main">' + (t.html || $.t('Content')) + '</div>',
                ),
              d.modalDialog.find('.ok').click(o),
              d.modalDialog.find('form').submit(o),
              d.modalDialog.find('.cancel').click(o),
              d.modalDialog.find('._tv-dialog-title-close').click(o),
              d.positionDialog(),
              d.applyHandlers(),
              d.modalDialog
            );
          },
          createModalDialog: function (t, o) {
            (o = o || {}),
              null !== d.modalDialog && d.destroy(),
              (d.modalDialog = $(
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
              d._addMessageCloseButton(d.modalDialog.find('._tv-dialog-error')),
              d._addMessageCloseButton(
                d.modalDialog.find('._tv-dialog-message'),
              ),
              o.noShadowBox && d.modalDialog.addClass('transparent'),
              o.addClass && d.modalDialog.addClass(o.addClass),
              o.width &&
                d.modalDialog.find('._tv-dialog').css({ width: o.width }),
              o.content &&
                d.modalDialog.find('._tv-dialog-content').html(o.content);
            var e = $('.fancybox-overlay');
            if (e.length) {
              var i = e.css('z-index');
              $('._tv-dialog-shadowbox').css('z-index', i + 1);
            }
            return (
              o.draggable &&
                a(d.modalDialog).draggable(
                  d._constrainDraggableOptionsIfNeeded({
                    handle: d.modalDialog.find('._tv-dialog-title'),
                  }),
                ),
              o.zIndex && d.modalDialog.css('z-index', o.zIndex),
              d.modalDialog
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
                    marginTop: d.NOTIFICATION_ANIMATION_START_OFFSET,
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
            if (d.isOpen(t))
              return (
                (c = d.get(t)).find('._tv-dialog-content').html(''),
                c.data('new', !1),
                c
              );
            var e = (o = o || {}).ownerDocument || document,
              l = s(e),
              r = l.ensureWindow(t, { position: 'relative' }),
              c = $(
                i.render(
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
            d._addMessageCloseButton(c.find('._tv-dialog-error')),
              d._addMessageCloseButton(c.find('._tv-dialog-message')),
              o.width && c.css({ width: o.width }),
              o.content && c.find('._tv-dialog-content').html(o.content);
            var g = 0;
            (g = o.zIndex
              ? o.zIndex
              : d.dialogs && d.dialogs.length
              ? n(
                  $.map(d.dialogs, function (t) {
                    return parseInt((t.dialog || t).css('z-index'), 10);
                  }),
                ) + 1
              : 110),
              c.css('z-index', g),
              c.data('new', !0),
              c.data('title', t),
              c.data('id', d.dialogs.length + 1),
              d.dialogs.push({ title: t, dialog: c, id: d.dialogs.length + 1 }),
              c.on('mousedown touchstart', function () {
                l.moveToTop(t);
              });
            var u = {
              start: function (t, o) {
                for (
                  var e = o.helper.css('z-index'), i = 0, n = null, a = 0;
                  a < d.dialogs.length;
                  a++
                ) {
                  var s = d.dialogs[a].dialog.css('z-index');
                  s > i && ((i = s), (n = d.dialogs[a].dialog));
                }
                o.helper.css('z-index', i), n.css('z-index', e);
              },
            };
            return (
              o.dragHandle
                ? (u.handle = o.dragHandle)
                : o.hideTitle || (u.handle = '._tv-dialog-title'),
              o.dragOptions && $.extend(u, o.dragOptions),
              a(c).draggable(d._constrainDraggableOptionsIfNeeded(u)),
              c
            );
          },
          positionDialog: function (t, o, e) {
            e = e || {};
            function i() {
              h.css('margin-left', -Math.round(h.outerWidth() / 2) + 'px'),
                h.css('margin-top', -Math.round(h.outerHeight() / 2) + 'px');
            }
            if (((o = o || e.position), t)) {
              var n,
                a,
                s = t.prop('ownerDocument'),
                l = s.defaultView,
                r = t.width(),
                c = t.height(),
                g = $(l).width(),
                u = $(l).height();
              if (o && o.top && o.left)
                (a = e.forcePosition
                  ? o.left
                  : Math.max(2, Math.min(g - r - 4, o.left)) + 'px'),
                  (n = e.forcePosition
                    ? o.top
                    : Math.max(2, Math.min(u - c - 4, o.top)) + 'px');
              else if (o && o.considerScroll) {
                var p = $(s);
                (a = Math.round((g - r) / 2 + p.scrollLeft()) + 'px'),
                  (n = Math.round((u - c) / 2 + p.scrollTop()) + 'px');
              } else
                (a = Math.round((g - r) / 2) + 'px'),
                  (n = Math.round((u - c) / 2) + 'px');
              e.fadeIn
                ? t.css({ left: a, top: n }).hide().fadeIn('fast')
                : e.smooth
                ? t.animate({ left: a, top: n })
                : t.css({ left: a, top: n });
            } else {
              var h = (t = d.modalDialog).find('._tv-dialog');
              i(), h.resize(i);
            }
          },
          applyHandlers: function (t, o) {
            var e = !t || t === this.modalDialog,
              i =
                ((o = o || {}),
                e
                  ? function () {
                      d.destroy();
                    }
                  : function () {
                      d.destroy(t.data('title'));
                    }),
              n = (t = t || d.modalDialog.find('._tv-dialog')).prop(
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
                    : i();
                }),
              o.doNotCloseOnBgClick ||
                setTimeout(function () {
                  $(n).on('mousedown.closeDialog', function (e) {
                    var a = $(e.target).parents().andSelf();
                    a.is(t) ||
                      (o.doNotCloseOnBgClickIfShadowbox &&
                        a.is(
                          '._tv-dialog-shadowbox, .tv-dialog__modal-wrap',
                        )) ||
                      a.is(
                        '.colorpicker, .charts-popup-list, ._tv-dialog, .tvcolorpicker-popup, .symbol-edit-popup, .ui-datepicker, .clockpicker-popover, .pac-container, .context-menu-wrapper',
                      ) ||
                      ($(n).off('mousedown.closeDialog'), i());
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
            var a = t
              .find('input[type="text"]')
              .focus(function () {
                $(this).addClass('_tv-dialog-content-textactive');
              })
              .blur(function () {
                $(this).removeClass('_tv-dialog-content-textactive');
              })
              .first();
            Modernizr.mobiletouch || o.notFocusFirst || a.focus(),
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
                $(n).bind('keyup.hideDialog', function (o) {
                  if (27 === o.keyCode)
                    return t ? d.destroy(t.data('title')) : d.destroy(), !1;
                }),
              o.processEnterButton &&
                $(n).bind('keyup.confirmAndCloseDialog', function (t) {
                  13 === t.keyCode &&
                    'textarea' !== t.target.tagName.toLowerCase() &&
                    (o.processEnterButton.click(),
                    $(n).unbind('keyup.confirmAndCloseDialog'));
                });
          },
          showError: function (t, o, e) {
            d.showMessage(t, o, $.extend(e || {}, { isError: !0 }));
          },
          showMessage: function (t, o, e) {
            o || (o = $('._tv-dialog'));
            var i = (e = e || {}).isError
                ? '_tv-dialog-error'
                : '_tv-dialog-message',
              n = o.find('.' + i),
              a = n.find('.message');
            e.html ? a.html('string' == typeof e.html ? e.html : t) : a.text(t),
              a
                .css('width', o.width())
                .toggleClass('selectable', Boolean(e.selectable)),
              n
                .toggleClass('with-close', Boolean(e.withClose))
                .css({
                  marginTop: d.NOTIFICATION_ANIMATION_START_OFFSET,
                  opacity: '0',
                })
                .show()
                .animate({ marginTop: 0, opacity: 1 }, 'fast'),
              e.withClose ||
                (e.hideWithoutAnimation
                  ? n.on(
                      'touchstartoutside mousedownoutside keydownoutside',
                      function t() {
                        n.hide(),
                          n.off(
                            'touchstartoutside mousedownoutside keydownoutside',
                            t,
                          );
                      },
                    )
                  : n.on(
                      'touchstartoutside mousedownoutside keydownoutside',
                      function t() {
                        n.animate(
                          {
                            marginTop: d.NOTIFICATION_ANIMATION_START_OFFSET,
                            opacity: 0,
                          },
                          'fast',
                          function () {
                            n.hide();
                          },
                        ),
                          n.off(
                            'touchstartoutside mousedownoutside keydownoutside',
                            t,
                          );
                      },
                    ));
          },
          isOpen: function (t) {
            for (var o = 0; o < d.dialogs.length; o++)
              if (d.dialogs[o].title === t) return !0;
            return !1;
          },
          get: function (t) {
            for (var o = 0; o < d.dialogs.length; o++)
              if (d.dialogs[o].title === t) return d.dialogs[o].dialog;
          },
          destroy: function (t, o) {
            var e = null;
            if (t && 'string' == typeof t)
              for (var i = 0; i < d.dialogs.length; i++)
                d.dialogs[i].title === t &&
                  ((e = d.dialogs[i].dialog.prop('ownerDocument')),
                  d.dialogs[i].dialog.find('.apply-common-tooltip').mouseout(),
                  d.dialogs[i].dialog.trigger('destroy', o),
                  $(document).unbind('mouseup.hideDialog' + d.dialogs[i].id),
                  $('input', d.dialogs[i].dialog).blur(),
                  d.dialogs[i].dialog.remove(),
                  d.dialogs.splice(i, 1),
                  s(e).unregisterWindow(t));
            else
              d.modalDialog &&
                ((e = d.modalDialog.prop('ownerDocument')),
                d.modalDialog.find('.apply-common-tooltip').mouseout(),
                d.modalDialog.find('._tv-dialog').trigger('destroy'),
                d.modalDialog.remove(),
                (d.modalDialog = null));
            $(e).unbind('keyup.hideDialog'),
              $(e).unbind('keyup.confirmAndCloseDialog');
          },
          resizeContent: function (t, o, e) {
            null == e && (e = 20), (t += e);
            var i = parseInt($('body').height(), 10),
              n = o.height();
            t > i && ((n -= t - i), (n = Math.max(0, n)), o.height(n));
          },
        };
        t.exports.TVOldDialogs = d;
      }.call(this, e('Kxc7'), e('nbsC')));
    },
    PVgW: function (t, o, e) {
      'use strict';
      e.r(o);
      e('P5fv'), e('si6p');
      var i = e('ogJP'),
        n = e('R4+T');
      function a(t) {
        return (
          (t = Math.abs(t)),
          !Object(i.isInteger)(t) &&
            t > 1 &&
            (t = parseFloat(t.toString().replace(/^.+\./, '0.'))),
          0 < t && t < 1
            ? Math.pow(
                10,
                (function (t) {
                  var o = String(t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                  if (null === o) return 0;
                  var e = o[1] ? o[1].length : 0,
                    i = o[2] ? parseInt(o[2], 0) : 0;
                  return Math.max(0, e - i);
                })(t),
              )
            : 1
        );
      }
      function s(t, o) {
        t.trigger('tvticker-beforechange');
        var e = t.data('TVTicker'),
          n = e && e.step,
          s = 0;
        (s = e.parser
          ? e.parser(t.val())
          : Object(i.isInteger)(n)
          ? parseInt(t.val(), 10)
          : parseFloat(t.val())),
          isNaN(s) && (s = 0);
        var d = a(n),
          l = o(s, Math.max(d, a(s)));
        e.formatter && (l = e.formatter(l)), t.val(l), t.change();
      }
      function d(t) {
        var o = t.data('TVTicker'),
          e = o && o.step,
          i = o && o.max;
        s(t, function (t, o) {
          var n = (Math.round(t * o) + Math.round(e * o)) / o;
          return null != i && i < n && (n = t), n;
        });
      }
      function l(t) {
        var o = t.data('TVTicker'),
          e = o && o.step,
          i = o && o.min;
        s(t, function (t, o) {
          var n = (Math.round(t * o) - Math.round(e * o)) / o;
          return null != i && n < i && (n = t), n;
        });
      }
      $.fn.TVTicker = function (t) {
        return (
          void 0 === t && (t = {}),
          this.each(function () {
            var o = !1,
              e = $(this),
              i = e.data('TVTicker');
            if (
              (i ? (o = !0) : (i = { step: Number(e.data('step')) || 1 }),
              'step' in t && (i.step = Number(t.step) || i.step),
              'min' in t && (i.min = t.min),
              'max' in t && (i.max = t.max),
              'formatter' in t && (i.formatter = t.formatter),
              'parser' in t && (i.parser = t.parser),
              e.data('TVTicker', i),
              !o)
            ) {
              var a = $('<div class="tv-ticker">').appendTo(e.parent()),
                s = $('<div class="tv-ticker__btn tv-ticker__btn--up">')
                  .html(n)
                  .appendTo(a),
                r = $('<div class="tv-ticker__btn tv-ticker__btn--down">')
                  .html(n)
                  .appendTo(a);
              a.on('mousedown', function (t) {
                t.preventDefault(), e.focus();
              }),
                s.click(function () {
                  e.is(':disabled') || d(e);
                }),
                r.click(function () {
                  e.is(':disabled') || l(e);
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
                      ? (d(e), s.removeClass('i-active'))
                      : 40 === t.keyCode && (l(e), r.removeClass('i-active')));
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
    jAh7: function (t, o, e) {
      'use strict';
      e.r(o),
        e.d(o, 'OverlapManager', function () {
          return a;
        }),
        e.d(o, 'getRootOverlapManager', function () {
          return d;
        });
      var i = e('Eyy1'),
        n = (function () {
          function t() {
            this._storage = [];
          }
          return (
            (t.prototype.add = function (t) {
              this._storage.push(t);
            }),
            (t.prototype.remove = function (t) {
              this._storage = this._storage.filter(function (o) {
                return t !== o;
              });
            }),
            (t.prototype.has = function (t) {
              return this._storage.includes(t);
            }),
            (t.prototype.getItems = function () {
              return this._storage;
            }),
            t
          );
        })(),
        a = (function () {
          function t(t) {
            void 0 === t && (t = document),
              (this._storage = new n()),
              (this._windows = new Map()),
              (this._index = 0),
              (this._document = t),
              (this._container = t.createDocumentFragment());
          }
          return (
            (t.prototype.setContainer = function (t) {
              var o = this._container,
                e = null === t ? this._document.createDocumentFragment() : t;
              !(function (t, o) {
                Array.from(t.childNodes).forEach(function (t) {
                  t.nodeType === Node.ELEMENT_NODE && o.appendChild(t);
                });
              })(o, e),
                (this._container = e);
            }),
            (t.prototype.registerWindow = function (t) {
              this._storage.has(t) || this._storage.add(t);
            }),
            (t.prototype.ensureWindow = function (t, o) {
              void 0 === o && (o = { position: 'fixed', direction: 'normal' });
              var e = this._windows.get(t);
              if (void 0 !== e) return e;
              this.registerWindow(t);
              var i = this._document.createElement('div');
              if (
                ((i.style.position = o.position),
                (i.style.zIndex = this._index.toString()),
                (i.dataset.id = t),
                void 0 !== o.index)
              ) {
                var n = this._container.childNodes.length;
                if (o.index >= n) this._container.appendChild(i);
                else if (o.index <= 0)
                  this._container.insertBefore(i, this._container.firstChild);
                else {
                  var a = this._container.childNodes[o.index];
                  this._container.insertBefore(i, a);
                }
              } else
                'reverse' === o.direction
                  ? this._container.insertBefore(i, this._container.firstChild)
                  : this._container.appendChild(i);
              return this._windows.set(t, i), ++this._index, i;
            }),
            (t.prototype.unregisterWindow = function (t) {
              this._storage.remove(t);
              var o = this._windows.get(t);
              void 0 !== o &&
                (null !== o.parentElement && o.parentElement.removeChild(o),
                this._windows.delete(t));
            }),
            (t.prototype.getZindex = function (t) {
              var o = this.ensureWindow(t);
              return parseInt(o.style.zIndex || '0');
            }),
            (t.prototype.moveToTop = function (t) {
              this.getZindex(t) !== this._index &&
                (this.ensureWindow(t).style.zIndex = (++this
                  ._index).toString());
            }),
            (t.prototype.removeWindow = function (t) {
              this.unregisterWindow(t);
            }),
            t
          );
        })(),
        s = new WeakMap();
      function d(t) {
        void 0 === t && (t = document);
        var o = t.getElementById('overlap-manager-root');
        if (null !== o) return Object(i.ensureDefined)(s.get(o));
        var e = new a(t),
          n = (function (t) {
            var o = t.createElement('div');
            return (
              (o.style.position = 'absolute'),
              (o.style.zIndex = (150).toString()),
              (o.style.top = '0px'),
              (o.style.left = '0px'),
              (o.id = 'overlap-manager-root'),
              o
            );
          })(t);
        return s.set(n, e), e.setContainer(n), t.body.appendChild(n), e;
      }
    },
    'y1L/': function (t, o, e) {},
    zjLg: function (t, o, e) {},
  },
]);
