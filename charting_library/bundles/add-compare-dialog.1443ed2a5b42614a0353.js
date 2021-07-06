(window.webpackJsonp = window.webpackJsonp || []).push([
  ['add-compare-dialog'],
  {
    '/NcV': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.5 1.5l5 5.5-5 5.5"/></svg>';
    },
    FxnJ: function (t, e, i) {},
    MjtL: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.5 1.5L3.5 7l5 5.5"/></svg>';
    },
    NhD9: function (t, e, i) {
      'use strict';
      (function (t) {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.createTabbedDialog = function (e) {
            e = $.extend({}, s, e);
            var i = $(
                t.render(
                  '<div class="tv-dialog__section tv-dialog__section--title tv-tabbed-dialog__header js-close-button-place" tabindex="-1"><div class="tv-tabs tv-tabbed-dialog__tabs js-dialog__drag">{{#tabs}}<div class="tv-tabs__tab">{{name}}</div>{{/tabs}}</div>{{#customControls}}<div class="js-custom-controls tv-tabbed-dialog__custom-controls {{#customControlsAddClass}}{{customControlsAddClass}}{{/customControlsAddClass}}"></div>{{/customControls}}<div class="tv-tabbed-dialog__bottom-border"></div></div>{{>additionalHeaderContent}}',
                  {
                    tabs: e.tabs,
                    customControls: e.customControls,
                    customControlsAddClass: e.customControlsContainerAddClass,
                  },
                  { additionalHeaderContent: e.additionalHeaderContent },
                ),
              ),
              n = $('<div class="tv-tabbed-dialog__pages-container"></div>'),
              r = n;
            e.contentAddClass && n.addClass(e.contentAddClass);
            !1 !== e.withScroll &&
              (n = $(
                '<div class="js-dialog__scroll-wrap tv-dialog__scroll-wrap">',
              ).append(r.addClass('tv-dialog__scroll-wrap-inner')));
            var l = $('<div class="tv-tabbed-dialog">').append(i).append(n);
            e.customControls &&
              i.find('.js-custom-controls').append(e.customControls);
            if (!0 !== e.doNotCreatePages)
              for (var c = 0; c < e.tabs.length; ++c)
                r.append(
                  $('<div class="tv-tabbed-dialog__tab-page">').append(
                    e.tabs[c].page,
                  ),
                );
            var d = e.tabStateSaveKey,
              p = e.activeTab,
              h = e.tabsScrollBoxAddClass,
              u = e.tabAddClass;
            delete e.tabs,
              delete e.activeTab,
              delete e.customControls,
              delete e.tabStateSaveKey,
              delete e.customControlsContainerAddClass,
              delete e.tabsScrollBoxAddClass,
              delete e.tabAddClass,
              (e.closeButtonAddClass = 'tv-tabbed-dialog__close'),
              (e.contentWrapTemplate = l);
            var b = (0, o.createDialog)(e),
              f = new a.Tabs(i.find('.tv-tabs').get(0), r.get(0), {
                addLeftArrowsClass: 'tv-tabbed-dialog__tabs-arrow-left',
                addRightArrowsClass: 'tv-tabbed-dialog__tabs-arrow-right',
                addScrollBoxClass: h,
                tabClass: u,
                saveTab: d,
                activeTab: p,
              });
            return (
              b.on('afterOpen', function () {
                f.setActivePage(f.index(), !0, !0);
              }),
              { dialog: b, tabs: f }
            );
          });
        var a = i('pIOw'),
          o = i('YDhE');
        i('FxnJ');
        var s = { tabs: [] };
      }.call(this, i('nbsC')));
    },
    UnpO: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.AddSymbolTab = void 0);
      var a = (function () {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var a = e[i];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                'value' in a && (a.writable = !0),
                Object.defineProperty(t, a.key, a);
            }
          }
          return function (e, i, a) {
            return i && t(e.prototype, i), a && t(e, a), e;
          };
        })(),
        o = i('dKfe'),
        s = i('pZll');
      i('UxRG'), i('k47Q');
      var n =
        '\n\t<div class="tv-add-symbol-tab">\n\t\t<input type="text" class="tv-control-input js-add-symbol-tab-input" placeholder="' +
        $.t('Symbol') +
        '" autocomplete="off">\n\t\t<div class="tv-add-symbol-tab__add-symbol-overlay js-add-symbol-tab-checkbox"></div>\n\t</div>';
      e.AddSymbolTab = (function () {
        function t(e, i) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this._chartWidgetCollection = e),
            (this._dialog = i),
            (this._$popup = null),
            this.init();
        }
        return (
          a(t, [
            {
              key: 'init',
              value: function () {
                var t = this;
                (this.$tab = $(n)),
                  (this._$input = this.$tab.find('.js-add-symbol-tab-input')),
                  (this._checkbox = new o.AddSymbolCheckbox({
                    labelRight: $.t('Overlay the main chart'),
                    labelAddClass: 'tv-add-symbol-tab__checkbox-label',
                    boxAddClass: 'tv-add-symbol-tab__checkbox-box',
                  })),
                  this.$tab
                    .find('.js-add-symbol-tab-checkbox')
                    .append(this._checkbox.$el),
                  (0, s.symbolSearchUIService)().bindToInput(this._$input, {
                    callback: function (e) {
                      var i = t._chartWidgetCollection.activeChartWidget.value();
                      i && i.addOverlayStudy(e, t._checkbox.checked);
                    },
                    onPopupOpen: function (e) {
                      e.css('z-index', t._dialog.getZIndex()), (t._$popup = e);
                    },
                    onPopupClose: function () {
                      t._$popup = null;
                    },
                    keepFocus: !0,
                    clearAfterAccept: !0,
                  });
              },
            },
            {
              key: 'focus',
              value: function () {
                Modernizr.mobiletouch || this._$input.focus();
              },
            },
            {
              key: 'isClickOnTab',
              value: function (t) {
                return (
                  !!this._$popup &&
                  !(
                    this._$popup[0] !== t.target &&
                    !this._$popup[0].contains(t.target)
                  )
                );
              },
            },
          ]),
          t
        );
      })();
    },
    UxRG: function (t, e, i) {},
    dKfe: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.AddSymbolCheckbox = void 0);
      var a,
        o = i('QwKQ'),
        s = (a = o) && a.__esModule ? a : { default: a };
      e.AddSymbolCheckbox = (function (t) {
        function e(t) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (t.checked = TVSettings.getBool(
              'showAddSymbolDialog.checkboxState',
              !0,
            ));
          var i = (function (t, e) {
            if (!t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return !e || ('object' != typeof e && 'function' != typeof e)
              ? t
              : e;
          })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
          return (
            i.$checkbox.change(function () {
              setTimeout(function () {
                TVSettings.setValue(
                  'showAddSymbolDialog.checkboxState',
                  i.checked,
                );
              });
            }),
            i
          );
        }
        return (
          (function (t, e) {
            if ('function' != typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof e,
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          })(e, t),
          e
        );
      })(s.default);
    },
    frtK: function (t, e, i) {},
    jPTo: function (t, e, i) {},
    k47Q: function (t, e, i) {},
    ocUP: function (t, e, i) {
      'use strict';
      (function (t, a) {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.CompareTab = void 0);
        var o = (function () {
            function t(t, e) {
              for (var i = 0; i < e.length; i++) {
                var a = e[i];
                (a.enumerable = a.enumerable || !1),
                  (a.configurable = !0),
                  'value' in a && (a.writable = !0),
                  Object.defineProperty(t, a.key, a);
              }
            }
            return function (e, i, a) {
              return i && t(e.prototype, i), a && t(e, a), e;
            };
          })(),
          s = i('pZll'),
          n = i('PC8g');
        i('UxRG'), i('b6p+'), i('frtK');
        var r =
            '\n\t<div class="tv-compare-tab">\n\t\t<input type="text" class="tv-control-input js-compare-tab-input" placeholder="' +
            $.t('Company Comparison') +
            '" autocomplete="off">\n\t</div>',
          l =
            '\n\t<div class="tv-compare-tab__predefine-cell {{additionalClass}}">\n\t\t<label for="{{symbolId}}">\n\t\t\t<span class="tv-control-checkbox">\n\t\t\t\t<input class="tv-control-checkbox__input js-predefine-checkbox" type="checkbox" id="{{symbolId}}">\n\t\t\t<span class="tv-control-checkbox__box tv-compare-tab__checkbox-box">' +
            i('aLUT') +
            '</span>\n\t\t\t<span class="tv-control-checkbox__ripple js-ripple"></span>\n\t\t\t</span>\n\t\t\t<span class="tv-control-checkbox__label tv-compare-tab__checkbox-label">{{label}}</span>\n\t\t</label>\n\t</div>';
        e.CompareTab = (function () {
          function e(i, a) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.selectedSymbols = []),
              (this._chartWidgetCollection = i),
              (this._dialog = a),
              (this._$popup = null),
              (this._predefines = {}),
              (this._symbolAlias = {}),
              (this._isBovespa = t.enabled('bovespa_widget')),
              (this._predefines =
                this._chartWidgetCollection.activeChartWidget
                  .value()
                  .compareSymbols() || []),
              this.init();
          }
          return (
            o(e, [
              {
                key: '_addCompareSymbol',
                value: function (t, e, i) {
                  var a = this._chartWidgetCollection.activeChartWidget.value();
                  if (a)
                    return (
                      this.selectedSymbols.push(t),
                      a.addCompareStudy(t).then(function (t) {
                        var e = null !== t;
                        return e && (0, n.trackEvent)('GUI', 'Add Compare'), e;
                      })
                    );
                },
              },
              {
                key: 'removeCompareSymbol',
                value: function (t) {
                  var e = this,
                    i = this._chartWidgetCollection.activeChartWidget.value();
                  if (i) {
                    var a = i.model();
                    a &&
                      ((this.selectedSymbols = this.selectedSymbols.filter(
                        function (e) {
                          return e !== t;
                        },
                      )),
                      a.dataSources().forEach(function (i) {
                        if (
                          i._metaInfo &&
                          'Compare@tv-basicstudies' === i._metaInfo.id
                        ) {
                          var o = i.properties().inputs.symbol.value();
                          (o === t ||
                            (e._symbolAlias[o] && e._symbolAlias[o] === t)) &&
                            a.removeSource(i);
                        }
                      }));
                  }
                },
              },
              {
                key: 'init',
                value: function () {
                  var t = this,
                    e = this._chartWidgetCollection.activeChartWidget.value();
                  if (e) {
                    var i = e.model();
                    if (i) {
                      var a = i.dataSources();
                      (this.$tab = $(r)),
                        this._initSymbolSearch(),
                        this._createPredefinesList();
                      var o = this.$tab.find('.js-compare-tab-predefines');
                      o.find('.js-predefine-checkbox').attr('checked', !1),
                        this._predefines.forEach(function (e) {
                          var i = e.symbol,
                            s = t._symbolToId(i),
                            n = o.find('#' + s);
                          a.forEach(function (e) {
                            if (
                              e._metaInfo &&
                              'Compare@tv-basicstudies' === e._metaInfo.id
                            ) {
                              var a = e.properties().inputs.symbol.value();
                              (a === i ||
                                (t._symbolAlias[a] &&
                                  t._symbolAlias[a] === i)) &&
                                (n.attr('checked', !0),
                                t.selectedSymbols.push(a));
                            }
                          });
                        });
                    }
                  }
                },
              },
              {
                key: '_initSymbolSearch',
                value: function () {
                  var t = this;
                  (this._$input = this.$tab.find('.js-compare-tab-input')),
                    (0, s.symbolSearchUIService)().bindToInput(this._$input, {
                      callback: function (e) {
                        return t._addCompareSymbol(e);
                      },
                      onPopupOpen: function (e) {
                        e.css('z-index', t._dialog.getZIndex()),
                          (t._$popup = e);
                      },
                      onPopupClose: function () {
                        t._$popup = null;
                      },
                      keepFocus: !0,
                      clearAfterAccept: !0,
                    });
                },
              },
              {
                key: '_createPredefinesList',
                value: function () {
                  var t = this,
                    e = this;
                  function i(t) {
                    var i = this;
                    setTimeout(function () {
                      $(i).is(':checked')
                        ? e._addCompareSymbol(t.data.symbol).then(function (t) {
                            t || $(i).attr('checked', !1);
                          })
                        : e.removeCompareSymbol(t.data.symbol);
                    });
                  }
                  var o = $(
                    '<div class="tv-compare-tab__predefines js-compare-tab-predefines"></div>',
                  );
                  this._predefines.forEach(function (e) {
                    var s = e.symbol,
                      n = e.title,
                      r = $(
                        a.render(l, {
                          symbolId: t._symbolToId(s),
                          label: n,
                          additionalClass: t._isBovespa
                            ? 'tv-compare-tab__predefine-cell--wide'
                            : '',
                        }),
                      );
                    r.find('.js-predefine-checkbox').change({ symbol: s }, i),
                      r.appendTo(o);
                  }),
                    o.appendTo(this.$tab);
                },
              },
              {
                key: '_symbolToId',
                value: function (t) {
                  return t.replace(/[^a-z0-9]/gi, '_');
                },
              },
              {
                key: 'focus',
                value: function () {
                  Modernizr.mobiletouch || this._$input.focus();
                },
              },
              {
                key: 'isClickOnTab',
                value: function (t) {
                  return (
                    !!this._$popup &&
                    !(
                      this._$popup[0] !== t.target &&
                      !this._$popup[0].contains(t.target)
                    )
                  );
                },
              },
            ]),
            e
          );
        })();
      }.call(this, i('Kxc7'), i('nbsC')));
    },
    ohga: function (t, e, i) {},
    pIOw: function (t, e, i) {
      'use strict';
      i.r(e);
      i('ohga');
      var a = i('Eyy1');
      i('P5fv');
      function o() {
        return new Promise(function (t) {
          i.e('lazy-velocity')
            .then(
              function (e) {
                i('WJ2Z'), t();
              }.bind(null, i),
            )
            .catch(void 0);
        });
      }
      $.fn.velocity = function () {
        for (var t = this, e = [], i = 0; i < arguments.length; i++)
          e[i] = arguments[i];
        return (
          o().then(function () {
            $.fn.velocity.apply(t, e);
          }),
          this
        );
      };
      i('bf9a');
      var s,
        n = i('j1f4'),
        r = i('FIi8'),
        l = i('aIyQ'),
        c = i.n(l),
        d = i('MjtL'),
        p = i('/NcV'),
        h = i('Vdly'),
        u = i('Ialn');
      i.d(e, 'Tabs', function () {
        return v;
      }),
        (function (t) {
          (t[(t.Left = 0)] = 'Left'), (t[(t.Right = 1)] = 'Right');
        })(s || (s = {}));
      var b = {
          saveTab: '',
          noSlider: !1,
          onTabClick: !1,
          loadedClass: 'i-loaded',
          tabsContainerClass: 'tv-tabs',
          tabClass: 'tv-tabs__tab',
          tabDisabledClass: 'disabled',
          activeTabClass: 'i-active',
          activePageClass: 'active',
          sliderClass: 'tv-tabs__slider',
          scrollBoxClass: 'tv-tabs__scroll-box',
          scrollWrapClass: 'tv-tabs__scroll-wrap',
          lArrowClass: 'tv-tabs__left-arrow',
          rArrowClass: 'tv-tabs__right-arrow',
        },
        f = d,
        _ = p,
        v = (function () {
          function t(t, e, i) {
            void 0 === i && (i = {}),
              (this._animating = !1),
              (this._prevWidth = -1),
              (this._bindings = []),
              (this._options = Object(r.deepExtend)({}, b, i)),
              (this.tabChanged = new c.a()),
              (this._elTabs = t),
              (this._elPages = e),
              (this._elScrollWrap = this._findOrCreateElement(
                this._options.scrollWrapClass || '',
                this._elTabs,
                'wrapInner',
              )),
              (this._elScrollBox = this._findOrCreateElement(
                this._options.scrollBoxClass || '',
                this._elScrollWrap,
                'wrapInner',
              )),
              this._options.noSlider ||
                (this._elSlider = this._findOrCreateElement(
                  this._options.sliderClass || '',
                  this._elScrollBox,
                  'append',
                )),
              Modernizr.mobiletouch ||
                ((this._elArrowLeft = this._findOrCreateElement(
                  this._options.lArrowClass || '',
                  this._elTabs,
                  'append',
                  '<div class="' +
                    (this._options.lArrowClass || '') +
                    ' i-slided">' +
                    f +
                    '</div>',
                )),
                (this._elArrowRight = this._findOrCreateElement(
                  this._options.rArrowClass || '',
                  this._elTabs,
                  'append',
                  '<div class="' +
                    (this._options.rArrowClass || '') +
                    ' i-slided">' +
                    _ +
                    '</div>',
                )),
                this._addClass(
                  this._elArrowLeft,
                  this._options.addLeftArrowsClass,
                ),
                this._addClass(
                  this._elArrowRight,
                  this._options.addRightArrowsClass,
                )),
              this._addClass(
                this._elScrollBox,
                this._options.addScrollBoxClass,
              ),
              this._addClass(this._elSlider, this._options.addSliderClass),
              this._addClass(this._elTabs, this._options.tabsContainerClass),
              this._addClass(this.getTabsArray(), this._options.tabClass),
              this._addClass(this._elTabs, this._options.loadedClass),
              this.checkScrollArrows(!0),
              this._initActivePage(),
              this._bindEvents();
          }
          return (
            (t.prototype.getTabsArray = function () {
              var t = this._elScrollBox.children;
              if (!this._options.sliderClass)
                return Array.prototype.slice.call(t);
              for (var e = [], i = 0; i < t.length; i++) {
                var a = t[i];
                a.classList.contains(this._options.sliderClass) || e.push(a);
              }
              return e;
            }),
            (t.prototype.getPagesArray = function () {
              return this._elPages
                ? Array.prototype.slice.call(this._elPages.children)
                : [];
            }),
            (t.prototype.getElTabs = function () {
              return this._elTabs;
            }),
            (t.prototype.getElPages = function () {
              return this._elPages;
            }),
            (t.prototype.checkScrollArrows = function (t) {
              void 0 === t && (t = !1);
              var e = Math.ceil(this._elScrollWrap.scrollLeft),
                i = this._getElWidth(this._elScrollWrap),
                a = this._elScrollWrap.scrollWidth - i - 2;
              function r(t) {
                t.classList.remove('i-slided'),
                  $.Velocity &&
                    $.Velocity.animate(
                      t,
                      { translateX: '0%' },
                      {
                        duration: n.dur / 2,
                        easing: 'easeOutCubic',
                        queue: !1,
                      },
                    );
              }
              function l(e, i) {
                if (t)
                  return (
                    e.classList.add('i-slided'),
                    void e.setAttribute('style', '')
                  );
                var a = i === s.Left ? '-100%' : '100%';
                o().then(function () {
                  $.Velocity.animate(
                    e,
                    { translateX: a },
                    {
                      complete: function () {
                        return e.classList.add('i-slided');
                      },
                      duration: n.dur / 2,
                      easing: 'easeOutCubic',
                      queue: !1,
                    },
                  );
                });
              }
              this._elArrowLeft &&
                (e >= 1
                  ? r(this._elArrowLeft)
                  : (e <= 1 || this._elScrollWrap.scrollWidth <= i) &&
                    l(this._elArrowLeft, s.Left)),
                this._elArrowRight &&
                  (a - e > 1
                    ? r(this._elArrowRight)
                    : (e >= a || this._elScrollWrap.scrollWidth <= i) &&
                      l(this._elArrowRight, s.Right));
            }),
            (t.prototype.index = function () {
              var t = this.getElActiveTab();
              return t ? this.getTabsArray().indexOf(t) : -1;
            }),
            (t.prototype.getElActiveTab = function () {
              return this._getActiveElement(
                this.getTabsArray(),
                this._options.activeTabClass || '',
                this._options.inactiveTabClass,
              );
            }),
            (t.prototype.getElActivePage = function () {
              return this._getActiveElement(
                this.getPagesArray(),
                this._options.activePageClass || '',
                this._options.inactivePageClass,
              );
            }),
            (t.prototype.setActivePage = function (t, e, i) {
              if (-1 !== t && (t !== this.index() || i)) {
                var a = this.index();
                o(
                  this.getTabsArray(),
                  this._options.activeTabClass,
                  this._options.inactiveTabClass,
                ),
                  o(
                    this.getPagesArray(),
                    this._options.activePageClass,
                    this._options.inactivePageClass,
                  ),
                  this._options.noSlider || this.updateSlider(a, t, e),
                  this._options.saveTab && h.setValue(this._options.saveTab, t),
                  this.tabChanged.fire(t);
              }
              function o(e, i, a) {
                e.forEach(function (e, o) {
                  var s = t === o,
                    n = e.classList;
                  i && n.toggle(i, s), a && n.toggle(a, !s);
                });
              }
            }),
            (t.prototype.updateSlider = function (t, e, i) {
              var a = this;
              if (!this._options.noSlider) {
                var s = this.getTabsArray()[e];
                if (
                  !(
                    0 === s.clientWidth ||
                    0 === s.clientHeight ||
                    'none' ===
                      window.getComputedStyle(s).getPropertyValue('display')
                  )
                ) {
                  var r = window.getComputedStyle(s),
                    l =
                      s.offsetLeft +
                      parseInt(r.getPropertyValue('padding-left')),
                    c = this._getElWidth(s),
                    d = s.querySelector('.js-tabs__slider-pos');
                  if (d) {
                    var p = window.getComputedStyle(d);
                    (l +=
                      parseInt(p.getPropertyValue('padding-left')) +
                      d.offsetLeft),
                      (c -= c - this._getElWidth(d));
                  }
                  (i = i || -1 === t || (document.all && !window.atob))
                    ? ((this._elSlider.style.left = l + 'px'),
                      (this._elSlider.style.width = c + 'px'))
                    : ((this._animating = !0),
                      o().then(function () {
                        $.Velocity.animate(
                          a._elSlider,
                          { left: l },
                          {
                            duration: n.dur,
                            easing: 'easeOutCubic',
                            queue: !1,
                          },
                        ),
                          $.Velocity.animate(
                            a._elSlider,
                            { width: c },
                            {
                              complete: function () {
                                a._animating = !1;
                              },
                              duration: n.dur,
                              easing: 'easeOutCubic',
                              queue: !1,
                            },
                          );
                      }));
                }
              }
            }),
            (t.prototype.onTabClick = function (t) {
              var e = t.currentTarget || t.target,
                i = this.getTabsArray().indexOf(e);
              -1 === i || this._isTabDisabled(e) || this.setActivePage(i),
                document.activeElement.blur(),
                t.preventDefault();
            }),
            (t.prototype.resizeSlider = function () {
              if (!this._options.noSlider) {
                var t = this._elTabs.offsetWidth;
                if (t !== this._prevWidth) {
                  this._prevWidth = t;
                  var e = this.index();
                  this.updateSlider(e, e, !0);
                }
              }
            }),
            (t.prototype.count = function () {
              return this.getTabsArray().length;
            }),
            (t.prototype.add = function (t, e) {
              this._elScrollBox.appendChild(t),
                this._elPages && e && this._elPages.appendChild(e),
                this._bindTabEvents(t),
                this.checkScrollArrows(!0);
            }),
            (t.prototype.remove = function (t) {
              function e(t) {
                t.parentElement && t.parentElement.removeChild(t);
              }
              var i = this.tabAt(t);
              i && (this._unbindTabEvents(i), e(i));
              var a = this.pageAt(t);
              a && e(a);
              var o = t - 1 >= 0 ? t - 1 : 0;
              this.setActivePage(o), this.checkScrollArrows(!0);
            }),
            (t.prototype.indexOfTab = function (t) {
              return this.getTabsArray().indexOf(t);
            }),
            (t.prototype.indexOfPage = function (t) {
              return this.getPagesArray().indexOf(t);
            }),
            (t.prototype.pageAt = function (t) {
              return this.getPagesArray()[t] || null;
            }),
            (t.prototype.tabAt = function (t) {
              return this.getTabsArray()[t] || null;
            }),
            (t.prototype.deselect = function (t) {
              var e = this.getElActiveTab();
              this._options.activeTabClass &&
                e &&
                e.classList.remove(this._options.activeTabClass);
              var i = this.getElActivePage();
              return (
                this._options.activePageClass &&
                  i &&
                  i.classList.remove(this._options.activePageClass),
                this._elSlider &&
                  ((this._elSlider.style.left = ''),
                  (this._elSlider.style.width = '')),
                this
              );
            }),
            (t.prototype.stop = function () {
              this._unbindEvents({});
            }),
            (t.prototype._getElWidth = function (t) {
              if (0 === t.offsetWidth) return 0;
              var e = window.getComputedStyle(t);
              return (
                t.offsetWidth -
                parseFloat(e.getPropertyValue('padding-left')) -
                parseFloat(e.getPropertyValue('padding-right')) -
                parseFloat(e.getPropertyValue('border-left-width')) -
                parseFloat(e.getPropertyValue('border-right-width'))
              );
            }),
            (t.prototype._findOrCreateElement = function (t, e, i, a) {
              var o = e.querySelector('.' + t);
              if (!o) {
                var s = document.createElement('div');
                if (
                  ((s.innerHTML = a || '<div class="' + t + '"></div>'),
                  (o = s.firstElementChild),
                  'append' === i)
                )
                  e.appendChild(o);
                else {
                  if ('wrapInner' !== i)
                    throw new Error('Unknown insertMethod');
                  for (
                    var n = Array.prototype.slice.call(e.childNodes), r = 0;
                    r < n.length;
                    r++
                  )
                    o.appendChild(n[r]);
                  e.appendChild(o);
                }
              }
              return o;
            }),
            (t.prototype._addClass = function (t, e) {
              if ('string' == typeof e) {
                Array.isArray(t) || (t = [t]);
                var i = e.split(/\s+/);
                t.forEach(function (t) {
                  i.forEach(function (e) {
                    t.classList.add(e);
                  });
                });
              }
            }),
            (t.prototype._initActivePage = function () {
              var t = 0;
              this._options.saveTab && (t = h.getInt(this._options.saveTab, 0));
              var e = this.index();
              -1 !== e && (t = e),
                void 0 !== this._options.activeTab &&
                  (t = this._options.activeTab),
                this.setActivePage(t, !0, !0);
            }),
            (t.prototype._bindEvents = function () {
              var t = this;
              this.getTabsArray().forEach(this._bindTabEvents.bind(this)),
                this._bindOneEvent({
                  eventName: 'scroll',
                  listener: this.checkScrollArrows.bind(this, !1),
                  target: this._elScrollWrap,
                }),
                this._elArrowLeft &&
                  this._bindOneEvent({
                    eventName: 'click',
                    listener: function (e) {
                      var i = t.getTabsArray(),
                        a = 0,
                        s = !1,
                        r = t._elScrollWrap.scrollLeft;
                      Object(u.isRtl)() && i.reverse(),
                        i.forEach(function (t) {
                          if (!s) {
                            var e = t.offsetLeft + t.offsetWidth;
                            e > r ? (s = !0) : (a = e);
                          }
                        }),
                        o().then(function () {
                          $.Velocity.animate(t._elScrollWrap, 'scroll', {
                            axis: 'x',
                            container: $(t._elScrollWrap),
                            duration: n.dur / 2,
                            easing: 'easeInOutCubic',
                            offset: Math.floor(
                              a - r - t._getElWidth(t._elArrowLeft),
                            ),
                            queue: !1,
                          });
                        });
                    },
                    target: this._elArrowLeft,
                  }),
                this._elArrowRight &&
                  this._bindOneEvent({
                    eventName: 'click',
                    listener: function (e) {
                      var i = t.getTabsArray(),
                        s = 0,
                        r = Object(u.isRtl)()
                          ? 0
                          : t._elScrollWrap.scrollLeft +
                            t._getElWidth(t._elScrollWrap);
                      Object(u.isRtl)() && i.reverse(),
                        i.forEach(function (t) {
                          if (0 === s) {
                            var e = t.offsetLeft + t.offsetWidth;
                            e > r && (s = e);
                          }
                        }),
                        o().then(function () {
                          $.Velocity.animate(t._elScrollWrap, 'scroll', {
                            axis: 'x',
                            container: $(t._elScrollWrap),
                            duration: n.dur / 2,
                            easing: 'easeInOutCubic',
                            offset: Math.ceil(
                              s -
                                r +
                                t._getElWidth(
                                  Object(a.ensureDefined)(t._elArrowRight),
                                ),
                            ),
                            queue: !1,
                          });
                        });
                    },
                    target: this._elArrowRight,
                  });
              var e = Array.prototype.slice.call(
                this._elTabs.querySelectorAll('.js-tabs__slider-hover') || [],
              );
              e.length &&
                e.forEach(function (e) {
                  return t._bindOneEvent({
                    eventName: 'mouseenter',
                    listener: function (e) {
                      if (!t._animating) {
                        var i = e.currentTarget;
                        i &&
                          t._options.activeTabClass &&
                          i.classList &&
                          i.classList.contains(t._options.activeTabClass) &&
                          t._hoverSlider(i);
                      }
                    },
                    target: e,
                  });
                });
              var i = null,
                s = function () {
                  (i = null),
                    t.checkScrollArrows(!0),
                    t._options.noSlider || t.resizeSlider();
                };
              this._bindOneEvent({
                eventName: 'resize',
                listener: function () {
                  null === i && (i = window.requestAnimationFrame(s));
                },
                target: window,
              });
            }),
            (t.prototype._bindTabEvents = function (t) {
              var e = this;
              this._bindOneEvent({
                eventName: 'click',
                listener: function (t) {
                  'function' == typeof e._options.onTabClick
                    ? e._options.onTabClick(t)
                    : e.onTabClick(t);
                },
                target: t,
              });
            }),
            (t.prototype._unbindTabEvents = function (t) {
              this._unbindEvents({ target: t });
            }),
            (t.prototype._bindOneEvent = function (t) {
              t.target.addEventListener(t.eventName, t.listener),
                this._bindings.push(t);
            }),
            (t.prototype._unbindEvents = function (t) {
              var e = function (e) {
                return !(
                  (void 0 !== e.eventName && e.eventName !== t.eventName) ||
                  (void 0 !== e.target && e.target !== t.target) ||
                  (void 0 !== e.listener && e.listener !== t.listener)
                );
              };
              this._bindings.filter(e).forEach(function (t) {
                return t.target.removeEventListener(t.eventName, t.listener);
              }),
                (this._bindings = this._bindings.filter(function (t) {
                  return !e(t);
                }));
            }),
            (t.prototype._getActiveElement = function (t, e, i) {
              return (
                t.filter(function (t, a, o) {
                  return e
                    ? t.classList.contains(e)
                    : !!i && !t.classList.contains(i);
                })[0] || null
              );
            }),
            (t.prototype._isTabDisabled = function (t) {
              return (
                t.classList.contains('i-disabled') ||
                (this._options.tabDisabledClass &&
                  t.classList.contains(this._options.tabDisabledClass)) ||
                t.hasAttribute('disabled')
              );
            }),
            (t.prototype._hoverSlider = function (t) {
              var e = this,
                i = this._getElWidth(t),
                a = window.getComputedStyle(t),
                s =
                  t.offsetLeft +
                  parseInt(a.getPropertyValue('padding-left')) +
                  parseInt(a.getPropertyValue('margin-left')),
                r = { duration: n.dur / 4, easing: 'easeOutCubic', queue: !1 };
              o().then(function () {
                $.Velocity.animate(e._elSlider, { left: s }, r),
                  $.Velocity.animate(e._elSlider, { width: i }, r);
              });
              var l = function () {
                e.getElActiveTab() === t && e._unhoverSlider(t),
                  t.removeEventListener('mousleave', l);
              };
              t.addEventListener('mouseleave', l);
            }),
            (t.prototype._unhoverSlider = function (t) {
              var e = this,
                i = window.getComputedStyle(t),
                a = t.querySelector('.js-tabs__slider-pos'),
                s = window.getComputedStyle(a),
                r =
                  t.offsetLeft +
                  parseInt(i.getPropertyValue('padding-left')) +
                  parseInt(i.getPropertyValue('margin-left')) +
                  parseInt(s.getPropertyValue('padding-left')) +
                  a.offsetLeft,
                l = this._getElWidth(t),
                c = l - (l - this._getElWidth(a)),
                d = { duration: n.dur / 2, easing: 'easeInSine', queue: !1 };
              o().then(function () {
                $.Velocity.animate(e._elSlider, { left: r }, d),
                  $.Velocity.animate(e._elSlider, { width: c }, d);
              });
            }),
            t
          );
        })();
    },
    tkV1: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.AddCompareDialog = void 0);
      var a = (function () {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var a = e[i];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                'value' in a && (a.writable = !0),
                Object.defineProperty(t, a.key, a);
            }
          }
          return function (e, i, a) {
            return i && t(e.prototype, i), a && t(e, a), e;
          };
        })(),
        o = i('ocUP'),
        s = i('UnpO'),
        n = i('NhD9'),
        r = i('PC8g');
      i('jPTo');
      var l = null;
      e.AddCompareDialog = (function () {
        function t(e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this._chartWidgetCollection = e),
            (this._$symbolSearchPopup = null),
            (this._dialog = null),
            (this._compareTab = new o.CompareTab(
              this._chartWidgetCollection,
              this,
            )),
            (this._addSymbolTab = new s.AddSymbolTab(
              this._chartWidgetCollection,
              this,
            ));
        }
        return (
          a(t, [
            {
              key: 'show',
              value: function () {
                var t = this,
                  e = [];
                e.push({
                  name: $.t('Compare'),
                  page: this._compareTab.$tab.addClass(
                    'tv-compare-dialog__tab-page',
                  ),
                }),
                  e.push({
                    name: $.t('Add Symbol', {
                      context: 'compare_or_add_symbol_dialog',
                    }),
                    page: this._addSymbolTab.$tab.addClass(
                      'tv-compare-dialog__tab-page',
                    ),
                  });
                var i = (0, n.createTabbedDialog)({
                  tabs: e,
                  width: 400,
                  tabStateSaveKey: 'CompareAddDialog.tab',
                  destroyOnClose: !0,
                  withScroll: !1,
                  addClass: 'tv-compare-dialog',
                  tabsScrollBoxAddClass: 'tv-compare-dialog__scroll-box',
                  tabAddClass: 'tv-compare-dialog__tab',
                  isClickOutFn: function (e) {
                    if (
                      t._compareTab.isClickOnTab(e) ||
                      t._addSymbolTab.isClickOnTab(e)
                    )
                      return !1;
                  },
                });
                return (
                  l && l.close(),
                  (this._dialog = i.dialog),
                  this._dialog.on('afterClose', function () {
                    (0,
                    r.trackEvent)('GUI', 'Compare', t._compareTab.selectedSymbols.sort().join(', '));
                  }),
                  this._dialog.open(),
                  (l = this._dialog),
                  this._dialog
                );
              },
            },
            {
              key: 'getZIndex',
              value: function () {
                return this._dialog.zIndex;
              },
            },
          ]),
          t
        );
      })();
    },
  },
]);
