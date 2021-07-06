(window.webpackJsonp = window.webpackJsonp || []).push([
  ['create-dialog'],
  {
    '29gu': function (t, e, i) {
      'use strict';
      var o =
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
        s = i('uOxu').getLogger('CommonUI.CreateTVBlockPlugin');
      (t.exports.createTvBlockPlugin = function (t) {
        if (t)
          return function (e, i, o) {
            var s,
              n = $(this);
            function r(e, i) {
              return i ? t[e](n, i) : t[e](n);
            }
            return 'get' === e
              ? 'function' == typeof t[(s = i)]
                ? r(s, o)
                : t[s]
              : t[e]
              ? n.each(function () {
                  return r(e, void 0);
                })
              : n;
          };
      }),
        (t.exports.createTvBlockWithInstance = function (t, e) {
          if (t && e)
            return (
              (t = t.toString()),
              function (n, r, h) {
                var a, l, c;
                return (
                  'get' === n
                    ? (a = r)
                    : ((l = r),
                      'object' === (void 0 === n ? 'undefined' : o(n)) &&
                      void 0 === r
                        ? ((l = n), (n = 'init'))
                        : 'string' != typeof n && (n = 'init')),
                  'getInstance' === n
                    ? $(this).eq(0).data(t)
                    : 'destroy' === n
                    ? (c = $(this).eq(0).data(t))
                      ? void ('function' == typeof c.destroy
                          ? (i(c, 'destroy', l), $(this).eq(0).removeData(t))
                          : s.logError(
                              '[Block Plugin] ' +
                                t +
                                ' does not support destroy command',
                            ))
                      : void console.warn(
                          '[Block Plugin] Trying to execute destroy method of ' +
                            t +
                            ' but it has not been inited',
                        )
                    : 'get' === n
                    ? (c = $(this).eq(0).data(t))
                      ? 'function' == typeof c[a]
                        ? i(c, a, h)
                        : c[a]
                      : void console.warn(
                          '[Block Plugin] Trying to get prop or execute method of ' +
                            t +
                            ' but it has not been inited',
                        )
                    : $(this).each(function () {
                        var o = $(this),
                          r = o.data(t);
                        void 0 === r &&
                          ((r = void 0 === l ? e(o) : e(o, l)), o.data(t, r)),
                          'init' !== n &&
                            ('function' == typeof r[n]
                              ? i(r, n, l)
                              : s.logError(
                                  '[Block Plugin] ' +
                                    t +
                                    ' does not support command ' +
                                    n,
                                ));
                      })
                );
              }
            );
          function i(t, e, i) {
            return void 0 === i ? t[e]() : t[e](i);
          }
        });
    },
    IwoD: function (t, e, i) {},
    QwKQ: function (t, e, i) {
      'use strict';
      (function (o) {
        Object.defineProperty(e, '__esModule', { value: !0 });
        var s = (function () {
            function t(t, e) {
              for (var i = 0; i < e.length; i++) {
                var o = e[i];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  'value' in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o);
              }
            }
            return function (e, i, o) {
              return i && t(e.prototype, i), o && t(e, o), e;
            };
          })(),
          n = i('29gu');
        i('b6p+');
        var r = i('uOxu').getLogger('Ui.TvControlCheckbox'),
          h = {
            labelWrapper:
              '{{#hasLabel}}<label>{{#labelLeft}}<span class="tv-control-checkbox__label {{#labelAddClass}}{{labelAddClass}}{{/labelAddClass}}">{{labelLeft}}</span>{{/labelLeft}}{{> inputWrapper }}{{#labelRight}}<span class="tv-control-checkbox__label {{#labelAddClass}}{{labelAddClass}}{{/labelAddClass}}">{{labelRight}}</span>{{/labelRight}}</label>{{/hasLabel}}{{^hasLabel}}{{> inputWrapper }}{{/hasLabel}}',
            inputWrapper:
              '<{{ tag }} class="{{ customClass }}{{#disabled}} i-disabled{{/disabled}}">{{^hasCheckbox}}{{> checkbox }}{{/hasCheckbox}}{{> box }}{{> ripple }}</{{ tag }}>',
            checkbox:
              '<input{{#id}} id="{{ id }}"{{/id}} class="{{> checkboxClass }}" type="checkbox"{{#name}} name="{{ name }}"{{/name}}{{#checked}} checked{{/checked}}{{#disabled}} disabled{{/disabled}}>',
            checkboxClass: '{{ customClass }}__input',
            box:
              '<span class="{{ customClass }}__box {{#boxAddClass}}{{boxAddClass}}{{/boxAddClass}}">' +
              i('aLUT') +
              '</span>',
            ripple: '<span class="{{ customClass }}__ripple js-ripple"></span>',
          },
          a = (function () {
            function t(e) {
              var i = e.customClass,
                o = void 0 === i ? 'tv-control-checkbox' : i,
                s = e.$checkbox,
                n = e.tag,
                h = e.id,
                a = e.name,
                l = e.checked,
                c = e.disabled,
                p = e.labelLeft,
                d = e.labelRight,
                u = e.labelAddClass,
                _ = e.boxAddClass;
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, t),
                (this.$el = null),
                void 0 === n && (n = p || d ? 'span' : 'label');
              var b = s instanceof $ && !!s.length;
              if (b) {
                if (!s.is('input[type=checkbox]'))
                  return void r.logError(
                    '`$checkbox` need to be input[type=checkbox]',
                  );
                if (s.hasClass('i-inited')) return;
                this._setInputId(s, h),
                  this._setInputClass(s, o),
                  this._setInputName(s, a),
                  this._setInputChecked(s, l),
                  this._setInputDisabled(s, c),
                  (l = !!s.prop('checked')),
                  (c = !!s.attr('disabled'));
              }
              (this.$el = this.render({
                $checkbox: s,
                hasCheckbox: b,
                customClass: o,
                tag: n,
                id: h,
                name: a,
                checked: l,
                disabled: c,
                labelLeft: p,
                labelRight: d,
                hasLabel: p || d,
                labelAddClass: u,
                boxAddClass: _,
              })),
                (this.$checkbox = b
                  ? s
                  : this.$el.find('input[type=checkbox]'));
            }
            return (
              s(t, [
                {
                  key: '_setInputId',
                  value: function (t, e) {
                    void 0 !== e && t.attr('id', e);
                  },
                },
                {
                  key: '_setInputClass',
                  value: function (t, e) {
                    var i = o.render(h.checkboxClass, { customClass: e });
                    t.addClass(i);
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
                      i = $(o.render(h.labelWrapper, t, h));
                    t.hasCheckbox &&
                      (i.insertBefore(e),
                      i
                        .find('.' + t.customClass)
                        .andSelf()
                        .filter('.' + t.customClass)
                        .eq(0)
                        .prepend(e.detach()),
                      e.addClass('i-inited'));
                    return i;
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
        ($.fn.tvControlCheckbox = (0, n.createTvBlockWithInstance)(
          'tv-control-checkbox',
          function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return new a(TradingView.mergeObj(e, { $checkbox: t }));
          },
        )),
          (e.default = a),
          (t.exports = e.default);
      }.call(this, i('nbsC')));
    },
    YDhE: function (t, e, i) {
      'use strict';
      i.r(e),
        i.d(e, 'createDialog', function () {
          return n;
        });
      var o = i('6aJD'),
        s = i('tKRU');
      function n(t) {
        var e = t.type || 'popup';
        return delete t.type, 'modal' === e ? new o.a(t) : new s.a(t);
      }
    },
    aLUT: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11px" height="9px"><path fill="none" fill-rule="evenodd" stroke-width="2" d="M1 3.22l3.415 3.496L10 1"/></svg>';
    },
    'b6p+': function (t, e, i) {},
    nec0: function (t, e, i) {},
    nzny: function (t, e, i) {},
    pLUm: function (t, e, i) {
      t.exports = { wrapper: 'wrapper-2KWBfDVB', touch: 'touch-E6yQTRo_' };
    },
    sFgq: function (t, e, i) {
      'use strict';
      (function (t) {
        var o = i('5qpw').lazyJqueryUI;
        i('nzny');
        var s = i('pLUm');
        function n(e, i, o) {
          var n = this;
          if (
            ((this._options = $.extend({}, this._defaultOptions, o || {})),
            (this._$wrapper = e),
            this._$wrapper.addClass(s.wrapper),
            (this._$content = i),
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
                .addClass(s.touch)
                .scroll(this._onScroll.bind(this))
            );
          this._$wrapper.css('overflow', 'hidden'),
            this._$wrapper
              .on('mouseenter.sidebar-scroll', function () {
                n._bottomFixed ||
                  n._dragging ||
                  (n._options.alwaysVisible || n._$scrollBar.addClass('active'),
                  n._onScroll());
              })
              .on('mouseleave.sidebar-scroll', function () {
                n._bottomFixed ||
                  n._dragging ||
                  (n._options.alwaysVisible ||
                    n._$scrollBar.removeClass('active'),
                  n._onScroll());
              })
              .on('mousewheel.sidebar-scroll', function (t) {
                if (!t.isDefaultPrevented()) {
                  var e = t.deltaY * (t.deltaFactor / 100);
                  return n.scroll(e);
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
          var r = this._options.additionalClass
              ? ' ' + this._options.additionalClass
              : '',
            h = this._options.alwaysVisible ? ' active-always' : '';
          (this._$scrollBarWrapper = $(
            '<div class="sb-scrollbar-wrap">',
          ).appendTo(this._$wrapper)),
            (this._$scrollBar = $(
              '<div class="sb-scrollbar sb-scrollbar-body' + r + h + '"></div>',
            ).appendTo(this._$scrollBarWrapper)),
            this._onScroll();
        }
        (n.prototype.isTouch = function () {
          return this._touch;
        }),
          (n.prototype.getScrollBar = function () {
            return this._$scrollBar;
          }),
          (n.prototype._defaultOptions = {
            headerHeight: 0,
            additionalClass: '',
            alwaysVisible: !1,
            showBottomShadow: !0,
            scrollMarginTop: 1,
            bubbleScrollEvent: !1,
          }),
          (n.prototype.initDraggable = function () {
            if (this._dragInitialized) return this;
            var t = this;
            return (
              o(this._$scrollBar).draggable({
                axis: 'y',
                containment: this._$scrollBarWrapper,
                start: function () {
                  t._dragging = !0;
                },
                stop: function () {
                  t._dragging = !1;
                },
                drag: function (e, i) {
                  t.updateScroll();
                },
              }),
              (this._dragInitialized = !0),
              this
            );
          }),
          (n.prototype.updateScroll = function () {
            if (this._touch) return this;
            var t = Math.ceil(
                this._$scrollBar.position().top -
                  this._scroll_margin_top -
                  this._header_height,
              ),
              e = this.getContainerHeightWithoutHeader(),
              i = this._$content.outerHeight(),
              o = i - e - 1;
            return (
              e <= 0 ||
                ((this._scroll_target_top =
                  o <= 0
                    ? this._header_height
                    : Math.min(
                        (-t * i) / e + this._header_height,
                        this._header_height,
                      )),
                t + this._$scrollBar.height() + 2 >= e
                  ? this.scrollToEnd()
                  : (this._$content.css('top', this._scroll_target_top + 'px'),
                    this._onScroll())),
              this
            );
          }),
          (n.prototype.getContainerHeightWithoutHeader = function () {
            return (
              this._$wrapper[0].getBoundingClientRect().height -
              this._header_height
            );
          }),
          (n.prototype.getContainerHeight = function () {
            return this._$wrapper[0].getBoundingClientRect().height;
          }),
          (n.prototype.getContentHeight = function () {
            return this._$content[0].getBoundingClientRect().height;
          }),
          (n.prototype.updateScrollBar = function () {
            if (this._touch) return this;
            var t = this._$content.position().top,
              e = this.getContentHeight(),
              i = this.getContainerHeight(),
              o = this.getContainerHeightWithoutHeader(),
              s = 1 + this._header_height,
              n = o - 2,
              r = ((Math.abs(t) - this._header_height) * n) / e,
              h = (i * i) / e;
            return (
              this.isContentShort()
                ? (this._$scrollBar.addClass('js-hidden'),
                  this._$wrapper.removeClass('sb-scroll-active'))
                : (this._$scrollBar
                    .removeClass('js-hidden')
                    .height(h)
                    .css('top', s + r),
                  this._$wrapper.addClass('sb-scroll-active'),
                  this.initDraggable()),
              this
            );
          }),
          (n.prototype.scroll = function (t, e) {
            var i = this._$content.position().top,
              o =
                this._$content.outerHeight() -
                this.getContainerHeightWithoutHeader() -
                1,
              s = e || this._scroll_speed;
            return (
              o <= 0 ||
              ((this._scroll_target_top = Math.max(
                -o + this._header_height,
                Math.min(this._header_height, i + t * s),
              )),
              this.setContentTop(this._scroll_target_top),
              this._onScroll())
            );
          }),
          (n.prototype.animateTo = function (t) {
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
          (n.prototype.resize = function () {
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
          (n.prototype.resizeHeader = function (t) {
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
          (n.prototype.scrollTo = function (t, e) {
            (e = $.extend(
              {
                position: 'visible',
                areaHeight: t instanceof $ ? t.height() : 0,
              },
              e,
            )),
              t instanceof $ && (t = e.offsetTop || t.position().top);
            var i = this._$content.position().top,
              o = this._$content.outerHeight(),
              s = this.getContainerHeightWithoutHeader();
            if (o - s - 1 <= 0) return !0;
            var n = -1 * (i - this._header_height),
              r = n + s,
              h = 0;
            if ('visible' === e.position) {
              if (t > n && t + e.areaHeight < r) return !1;
              h = t + e.areaHeight > r ? r - t - e.areaHeight : n - t;
            } else 'top' === e.position && (h = n - t);
            return this.scroll(h, 1), this._onScroll(), !1;
          }),
          (n.prototype.scrollToEnd = function () {
            var t = this._$content.position().top,
              e = this._$content.outerHeight(),
              i = this._$wrapper.outerHeight(),
              o = e > i ? t + (i - (e + t)) + 1 : 1;
            return this.setContentTop(o), this._onScroll(), this;
          }),
          (n.prototype.scrollToStart = function () {
            return (
              this.setContentTop(this._header_height), this._onScroll(), this
            );
          }),
          (n.prototype.currentPosition = function () {
            return Math.round(this._$content.position().top);
          }),
          (n.prototype.atStart = function () {
            return (
              Math.round(this._$content.position().top) >= this._header_height
            );
          }),
          (n.prototype.atEnd = function (t) {
            ('number' == typeof t && isFinite(t)) || (t = 0);
            var e = Math.round(this._$content.position().top),
              i = this._$content.outerHeight(),
              o = this._$wrapper.outerHeight();
            return i - Math.abs(e) - 1 <= o + t;
          }),
          (n.prototype._onScroll = function (t) {
            this._touch || this._$content.css('bottom', 'auto'),
              this.scrolled.fire(),
              (this._dragging && !0 !== t) || this.updateScrollBar();
            var e = this.atStart(),
              i = this.atEnd();
            return (
              this._$shadowTop &&
                this._$shadowTop.toggleClass('i-invisible', !!e),
              this._$shadowBottom &&
                this._$shadowBottom.toggleClass('i-invisible', !!i),
              this._onContentVisible(),
              !this._atStart && e
                ? ((this._atStart = !0), this.scrolltostart.fire())
                : this._atStart && !e && delete this._atStart,
              !this._atEnd && i
                ? ((this._atEnd = !0), this.scrolltoend.fire())
                : this._atEnd && !i && delete this._atEnd,
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
          (n.prototype.checkContentVisibility = function () {
            this._onContentVisible();
          }),
          (n.prototype.subscribeToContentVisible = function (t, e, i) {
            this.visibilityCallbacks.push({ id: t, $el: e, callback: i });
          }),
          (n.prototype.triggerVisibilityCallbacks = function (t) {
            this._onContentVisible(t);
          }),
          (n.prototype._contentIsVisible = function (t) {
            return t.$el.position().top > -1 * this.currentPosition();
          }),
          (n.prototype._onContentVisible = function (t) {
            if (this.visibilityCallbacks.length) {
              var e = t || this._contentIsVisible.bind(this),
                i = [],
                o = this.visibilityCallbacks.filter(function (t, o) {
                  if (!$.contains(this._$content, t.$el[0])) return !1;
                  var s = e(t);
                  return s && i.push(o), !s;
                }, this);
              i.forEach(function (e) {
                this.visibilityCallbacks[e].callback(!!t);
              }, this),
                delete this.visibilityCallbacks,
                (this.visibilityCallbacks = o);
            }
          }),
          (n.prototype.save = function () {
            return (
              (this._saved = {
                top: this._$content.position().top,
                height: this._$content.outerHeight(),
              }),
              this
            );
          }),
          (n.prototype.restore = function () {
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
          (n.prototype.fixBottom = function () {
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
          (n.prototype.releaseBottom = function () {
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
          (n.prototype.setContentTop = function (t) {
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
          (n.prototype.isContentShort = function () {
            return (
              this.getContentHeight() <= this.getContainerHeightWithoutHeader()
            );
          }),
          (n.prototype.destroy = function () {
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
          (e.SidebarCustomScroll = n);
      }.call(this, i('aIyQ')));
    },
    uo4K: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="currentColor" d="M5.18 6.6L1.3 2.7.6 2 2 .59l.7.7 3.9 3.9 3.89-3.9.7-.7L12.61 2l-.71.7L8 6.6l3.89 3.89.7.7-1.4 1.42-.71-.71L6.58 8 2.72 11.9l-.71.7-1.41-1.4.7-.71 3.9-3.9z"/></svg>';
    },
  },
]);
