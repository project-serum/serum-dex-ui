(window.webpackJsonp = window.webpackJsonp || []).push([
  [57],
  {
    bR4N: function (t, e, a) {
      'use strict';
      var s = a('wmOI').ESC,
        n = a('e3/o').guid,
        o = a('jAh7').getRootOverlapManager;
      a('eL+L');
      var p = function (t, e, i) {
        var c, l;
        (t = $(t)),
          ((i = i || {}).activeClass = i.activeClass || ''),
          (c = (i.event || 'click') + '.popup-menu'),
          i.hideEvent && (l = i.hideEvent + '.popup-menu');
        var r = function () {},
          d = r,
          u = {},
          h = function (c, h, f) {
            var v = n(),
              g = c.target.ownerDocument,
              m = g.defaultView,
              b = o(g),
              C = h || e;
            if (
              ('function' == typeof C && (C = C()),
              $(this).hasClass('open') || $(this).hasClass('active'))
            )
              return c.preventDefault(), d(), void (I = u.scrollTop);
            function w(e) {
              var a = $(e.target).parents().andSelf();
              a.is(T) ||
                a.is(t) ||
                a.is('.charts-popup-tab-headers, .charts-popup-itemheader') ||
                d();
            }
            function x(t) {
              if (u.preventFirstProcessClick) u.preventFirstProcessClick = !1;
              else {
                var e = $(t.target).parents().andSelf();
                e.is('.charts-popup-tab-headers, .charts-popup-itemheader') ||
                  (i.notCloseOnButtons && e.is('.icon-delete')) ||
                  d();
              }
            }
            function y(t) {
              t.keyCode === s && d();
            }
            (d = function () {
              (u.scrollTop = T.scrollTop()),
                T.remove(),
                b.removeWindow(v),
                t.removeClass('active open ' + i.activeClass),
                t.data('popup-menu', null),
                $(g).off('click', x),
                $(g).off('mousedown', w),
                Modernizr.mobiletouch && $(g).off('touchstart.chartgui', w),
                $(g).off('selectstart..popup-menu'),
                g.removeEventListener('keydown', y, !1),
                (d = r),
                i.onRemove && i.onRemove();
            }),
              t.addClass('active open ' + i.activeClass);
            var T = $('<div class="charts-popup-list">');
            i.addClass && T.addClass(i.addClass),
              i.zIndex && T.css('z-index', i.zIndex);
            var k = T;
            i.listInner && (k = $('<div class="list-inner">').appendTo(k)),
              i.listTable && (k = $('<div class="list-table">').appendTo(k)),
              $.each(C, function (e) {
                !(function e(s, n, o) {
                  if (s instanceof p.TabGroup) {
                    if (!s.tabs || !s.tabs.length) return;
                    if (1 === s.tabs.length && !s.tabs[0].title)
                      return void $.each(s.tabs[0].items, function () {
                        e(this, void 0, o);
                      });
                    var c = $(
                        '<div class="charts-popup-tab-group"></div>',
                      ).appendTo(o),
                      l = $(
                        '<div class="charts-popup-tab-headers"></div>',
                      ).appendTo(c),
                      r = null;
                    $.each(s.tabs || [], function (t, a) {
                      if (a.items && a.items.length) {
                        var n = $('<div class="charts-popup-tab"></div>')
                          .hide()
                          .appendTo(c);
                        $.each(a.items, function () {
                          e(this, void 0, n);
                        });
                        var o = $('<span class="charts-popup-tab-header">')
                          .append(
                            $(
                              '<a href="javascript://" class="charts-popup-tab-header-label">',
                            ).text(a.name),
                          )
                          .appendTo(l);
                        o.on('click', function (t) {
                          o.is('.active') ||
                            (l
                              .find('.charts-popup-tab-header.active')
                              .removeClass('active'),
                            o.addClass('active'),
                            c.find('.charts-popup-tab').hide(),
                            n.show(),
                            t && t.preventDefault(),
                            'function' == typeof s.onChange &&
                              s.onChange.call(s, a.name));
                        }),
                          (r && !a.active) ||
                            ((r = o),
                            l
                              .find('.charts-popup-tab-header.active')
                              .removeClass('active'),
                            o.addClass('active'),
                            c.find('.charts-popup-tab').hide(),
                            n.show());
                      }
                    });
                  } else if (s instanceof p.Group) {
                    var d = $(
                      '<div class="charts-popup-group"></div>',
                    ).appendTo(o);
                    if (s.title) {
                      var u = $('<div class="charts-popup-itemheader"></div>')
                        .text(s.title)
                        .prepend(
                          $(
                            '<span class="charts-popup-itemheader-icon"></span>',
                          ),
                        );
                      s.collapsible &&
                        (d.addClass('charts-popup-group-collapsible'),
                        d.toggleClass('collapsed', s.collapsed),
                        u.on('click', function () {
                          d.toggleClass('collapsed'),
                            'function' == typeof s.onChange &&
                              s.onChange(d.hasClass('collapsed')),
                            T.height() === parseInt(T.css('max-height'))
                              ? T.addClass('popup-menu-scroll-y')
                              : T.height() < parseInt(T.css('max-height')) &&
                                T.removeClass('popup-menu-scroll-y');
                        })),
                        d.append(u);
                    }
                    $.each(s.items, function (t) {
                      e(this, 1, d);
                    });
                  } else if (s instanceof p.Header)
                    o.append(
                      $('<div class="charts-popup-itemheader"></div>').text(
                        s.title,
                      ),
                    );
                  else if (s.separator) {
                    var h = $('<span class="separator"></span>');
                    o.append(h);
                  } else {
                    var f;
                    h = $('<a class="item">');
                    if (
                      (s.url && h.attr('href', s.url),
                      s.target && h.attr('target', s.target),
                      n || h.addClass('first'),
                      'function' == typeof s.active
                        ? s.active(s) && h.addClass('active')
                        : s.active && h.addClass('active'),
                      s.addClass && h.addClass(s.addClass),
                      s.addData && h.data(s.addData),
                      s.disabled && h.addClass('disabled'),
                      'function' == typeof s.action)
                    ) {
                      var v = s.action,
                        g = function (t) {
                          var e = $(t.target).parents().andSelf();
                          e.is(x) ||
                            (v.apply(h, arguments),
                            !s.url &&
                              t &&
                              'function' == typeof t.preventDefault &&
                              t.preventDefault());
                        };
                      i.upAction ? h.bind('mouseup', g) : h.bind('click', g);
                    }
                    if (s.date)
                      (f = $('<span class="title"></span>').appendTo(h)),
                        $('<span class="date"></span>')
                          .text(s.date || '')
                          .appendTo(h);
                    else if (s.icon && !i.svg) {
                      var m = $('<span class="icon"></span>').appendTo(h);
                      m.css('background-image', s.icon.image || ''),
                        s.icon.offset &&
                          m.css(
                            'background-position',
                            'string' == typeof s.icon.offset
                              ? s.icon.offset
                              : s.icon.offset.x +
                                  'px ' +
                                  s.icon.offset.y +
                                  'px',
                          ),
                        (f = $('<span class="title"></span>').appendTo(h));
                    } else
                      !0 === i.svg && s.svg
                        ? (i.wrapIcon
                            ? h.append(
                                $('<span class="icon-wrap">')
                                  .addClass(s.iconClass)
                                  .append(s.svg),
                              )
                            : h.append(s.svg),
                          (f = $('<span class="title"></span>').appendTo(h)))
                        : s.iconClass
                        ? (h.append(
                            $('<span class="icon"></span>').addClass(
                              s.iconClass,
                            ),
                          ),
                          (f = $('<span class="title"></span>').appendTo(h)))
                        : (f = $(
                            '<span class="title-expanded"></span>',
                          ).appendTo(h));
                    s.html
                      ? f.html(s.html)
                      : f.text(TradingView.clean(s.title, !0) || '');
                    var b = $('<span class="shortcut"></span>').appendTo(h);
                    if (
                      (s.shortcut && b.text(s.shortcut.keys),
                      'function' == typeof s.deleteAction)
                    ) {
                      var C = s.deleteAction,
                        w = s.deleteAction.title || $.t('Delete'),
                        x = $('<span class="icon-delete">');
                      x.html(a('uo4K')),
                        x.attr('title', w),
                        x.on('click', function (t) {
                          C.apply(h, arguments), t.preventDefault();
                        }),
                        h.append(x);
                    }
                    if (
                      (s.buttons instanceof Array &&
                        s.buttons.length &&
                        s.buttons.forEach(function (t) {
                          t.el instanceof $ || (t.el = $(t.el)),
                            t.el.appendTo(h),
                            t.handler &&
                              t.el.on('click', function (e) {
                                t.handler.apply(h, arguments);
                              });
                        }),
                      void 0 !== s.counter)
                    )
                      if ('function' == typeof s.counter) {
                        $('<span class="counter"></span>')
                          .html(s.counter())
                          .appendTo(h);
                      } else {
                        var y = s.counterBlue ? 'blue' : '';
                        $('<span class="counter"></span>')
                          .text(s.counter + '')
                          .addClass(y)
                          .appendTo(h);
                      }
                    s.name && h.attr('data-name', s.name),
                      o.append(h),
                      t.data('popup-menu', o);
                  }
                })(this, e, k);
              }),
              l || (u.preventFirstProcessClick = !0),
              $(g).on('click', x),
              $(g).on('mousedown', w),
              g.addEventListener('keydown', y, !1),
              Modernizr.mobiletouch && $(g).on('touchstart.chartgui', w),
              i.upAction &&
                $(g).on('selectstart.popup-menu', function () {
                  return !1;
                }),
              T.appendTo(b.ensureWindow(v));
            var M = g.documentElement.clientWidth,
              D = g.documentElement.clientHeight,
              L = t.outerWidth(),
              A = t.outerHeight(),
              E = t.offset(),
              I = $(m).scrollTop() || 0;
            (E.top -= I),
              (E.top = Math.round(E.top)),
              (E.left = Math.round(E.left));
            var S = T.outerWidth(),
              z = T.outerHeight(),
              B = void 0 !== i.viewportSpacing ? i.viewportSpacing : 10,
              G = i.popupSpacing ? ~~i.popupSpacing : 1,
              H = i.popupDrift ? ~~i.popupDrift : 0,
              P = z - T.height(),
              R = 'down';
            i.direction &&
              (R =
                'function' == typeof i.direction ? i.direction() : i.direction);
            var W = !!i.reverse;
            if ('down' === R) {
              var O = D - E.top - A - G - B - P,
                F = E.top - G - B - P;
              O < Math.max(z || 0, 100) && F > O && (R = 'up');
            } else if ('right' === R) {
              var j = M - E.left - L - G - B - P,
                J = E.left - G - B - P;
              j < Math.max(S || 0, 100) && J > j && (R = 'left');
            }
            switch (R) {
              case 'down':
              case 'up':
                'down' === R
                  ? T.css('top', E.top + A + G + 'px')
                  : T.css('bottom', D - E.top + G + 'px').css('top', 'auto'),
                  W
                    ? T.css('left', Math.max(E.left + H + L - S, B) + 'px').css(
                        'right',
                        'auto',
                      )
                    : T.css('left', E.left + H + 'px').css('right', 'auto');
                break;
              case 'right':
              case 'left':
                (G = Math.max(G, 4)),
                  'right' === R
                    ? T.css('left', Math.floor(E.left + L + G) + 'px').css(
                        'right',
                        'auto',
                      )
                    : T.css(
                        'left',
                        Math.floor(Math.max(E.left - S - G, B)) + 'px',
                      ).css('right', 'auto'),
                  W
                    ? T.css(
                        'top',
                        Math.floor(Math.max(E.top + H + A - z, B)) + 'px',
                      )
                    : T.css('top', Math.floor(E.top + H) + 'px');
            }
            T.show();
            var K = E.top;
            if (
              ('up' === R || ({ left: 1, right: 1 }[R] && W)
                ? 'up' !== R
                  ? (K += A)
                  : (K -= A + G + P + B)
                : (K = D - K - A - 2 * G - P),
              T.height() > K && T.addClass('popup-menu-scroll-y'),
              T.css('max-height', K + 'px'),
              i.careRightBorder)
            ) {
              var V = M + $(m).scrollLeft();
              parseInt(T.css('left')) + T.width() + B > V &&
                T.css('left', V - T.width() - B + 'px').css('right', 'auto');
            }
            i.careBottomBorder &&
              parseInt(T.css('top')) + T.height() + B > D + I &&
              T.css('top', D - T.height() - B + I + 'px');
            var N = T.offset();
            T.css({
              position: 'fixed',
              left: N.left - $(g).scrollLeft(),
              right: 'auto',
            }),
              T[0].scrollHeight > T.height() && T.addClass('popup-with-scroll'),
              c && c.preventDefault();
          };
        c && t.bind(c, h),
          l &&
            t.bind(l, function () {
              d();
            }),
          i.runOpened && h();
      };
      (p.TabGroup = function t(e) {
        if (!(this instanceof t)) return new t(e);
        (e = e || {}),
          (this.tabs = []),
          'function' == typeof e.onChange && (this.onChange = e.onChange);
      }),
        (p.TabGroup.prototype.appendTab = function (t, e, a) {
          if (
            (null == t ? (t = '') : (t += ''),
            e || (e = []),
            a || (a = {}),
            !Array.isArray(e))
          )
            throw new TypeError('items must be an array');
          return this.tabs.push({ name: t, items: e, active: !!a.active }), e;
        }),
        (p.Header = function t(e) {
          if (!(this instanceof t)) return new t(e);
          this.title = e;
        }),
        (p.Group = function t(e) {
          if (!(this instanceof t)) return new t(e);
          (e = e || {}),
            (this.items = []),
            (this.title = null == e.title ? '' : e.title + ''),
            (this.collapsible = !!e.collapsible),
            (this.collapsed = !!e.collapsed),
            'function' == typeof e.onChange && (this.onChange = e.onChange);
        }),
        (p.Group.prototype.push = function () {
          this.items.push.apply(this.items, arguments);
        }),
        (e.bindPopupMenu = p);
      e.unbindPopupMenu = function (t) {
        (t = $(t)).unbind('.popup-menu'), t.removeData('popup-menu');
      };
    },
    'eL+L': function (t, e, a) {},
    uo4K: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="currentColor" d="M5.18 6.6L1.3 2.7.6 2 2 .59l.7.7 3.9 3.9 3.89-3.9.7-.7L12.61 2l-.71.7L8 6.6l3.89 3.89.7.7-1.4 1.42-.71-.71L6.58 8 2.72 11.9l-.71.7-1.41-1.4.7-.71 3.9-3.9z"/></svg>';
    },
  },
]);
