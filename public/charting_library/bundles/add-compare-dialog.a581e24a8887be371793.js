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
              u = e.activeTab,
              p = e.tabsScrollBoxAddClass,
              h = e.tabAddClass;
            delete e.tabs,
              delete e.activeTab,
              delete e.customControls,
              delete e.tabStateSaveKey,
              delete e.customControlsContainerAddClass,
              delete e.tabsScrollBoxAddClass,
              delete e.tabAddClass,
              (e.closeButtonAddClass = 'tv-tabbed-dialog__close'),
              (e.contentWrapTemplate = l);
            var b = (0, a.createDialog)(e),
              f = new o.Tabs(i.find('.tv-tabs').get(0), r.get(0), {
                addLeftArrowsClass: 'tv-tabbed-dialog__tabs-arrow-left',
                addRightArrowsClass: 'tv-tabbed-dialog__tabs-arrow-right',
                addScrollBoxClass: p,
                tabClass: h,
                saveTab: d,
                activeTab: u,
              });
            return (
              b.on('afterOpen', function () {
                f.setActivePage(f.index(), !0, !0);
              }),
              { dialog: b, tabs: f }
            );
          });
        var o = i('pIOw'),
          a = i('YDhE');
        i('FxnJ');
        var s = { tabs: [] };
      }.call(this, i('nbsC')));
    },
    UnpO: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.AddSymbolTab = void 0);
      var o = (function () {
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
        a = i('dKfe'),
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
          o(t, [
            {
              key: 'init',
              value: function () {
                var t = this;
                (this.$tab = $(n)),
                  (this._$input = this.$tab.find('.js-add-symbol-tab-input')),
                  (this._checkbox = new a.AddSymbolCheckbox({
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
      var o,
        a = i('QwKQ'),
        s = (o = a) && o.__esModule ? o : { default: o };
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
      (function (t, o) {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.CompareTab = void 0);
        var a = (function () {
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
          s = i('pZll'),
          n = i('JWMC');
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
          function e(i, o) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.selectedSymbols = []),
              (this._chartWidgetCollection = i),
              (this._dialog = o),
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
            a(e, [
              {
                key: '_addCompareSymbol',
                value: function (t, e, i) {
                  var o = this._chartWidgetCollection.activeChartWidget.value();
                  if (o)
                    return (
                      this.selectedSymbols.push(t),
                      o.addCompareStudy(t).then(function (t) {
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
                    var o = i.model();
                    o &&
                      ((this.selectedSymbols = this.selectedSymbols.filter(
                        function (e) {
                          return e !== t;
                        },
                      )),
                      o.dataSources().forEach(function (i) {
                        if (
                          i._metaInfo &&
                          'Compare@tv-basicstudies' === i._metaInfo.id
                        ) {
                          var a = i.properties().inputs.symbol.value();
                          (a === t ||
                            (e._symbolAlias[a] && e._symbolAlias[a] === t)) &&
                            o.removeSource(i);
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
                      var o = i.dataSources();
                      (this.$tab = $(r)),
                        this._initSymbolSearch(),
                        this._createPredefinesList();
                      var a = this.$tab.find('.js-compare-tab-predefines');
                      a.find('.js-predefine-checkbox').attr('checked', !1),
                        this._predefines.forEach(function (e) {
                          var i = e.symbol,
                            s = t._symbolToId(i),
                            n = a.find('#' + s);
                          o.forEach(function (e) {
                            if (
                              e._metaInfo &&
                              'Compare@tv-basicstudies' === e._metaInfo.id
                            ) {
                              var o = e.properties().inputs.symbol.value();
                              (o === i ||
                                (t._symbolAlias[o] &&
                                  t._symbolAlias[o] === i)) &&
                                (n.attr('checked', !0),
                                t.selectedSymbols.push(o));
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
                  var a = $(
                    '<div class="tv-compare-tab__predefines js-compare-tab-predefines"></div>',
                  );
                  this._predefines.forEach(function (e) {
                    var s = e.symbol,
                      n = e.title,
                      r = $(
                        o.render(l, {
                          symbolId: t._symbolToId(s),
                          label: n,
                          additionalClass: t._isBovespa
                            ? 'tv-compare-tab__predefine-cell--wide'
                            : '',
                        }),
                      );
                    r.find('.js-predefine-checkbox').change({ symbol: s }, i),
                      r.appendTo(a);
                  }),
                    a.appendTo(this.$tab);
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
      var o = i('Eyy1');
      i('P5fv');
      function a() {
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
          a().then(function () {
            $.fn.velocity.apply(t, e);
          }),
          this
        );
      };
      i('EsMY');
      var s,
        n = i('9uLv'),
        r = i('FIi8'),
        l = i('aIyQ'),
        c = i.n(l),
        d = i('MjtL'),
        u = i('/NcV'),
        p = i('Vdly'),
        h = i('Ialn');
      i.d(e, 'Tabs', function () {
        return _;
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
        v = u,
        _ = (function () {
          function t(t, e, i) {
            void 0 === i && (i = {}),
              (this._animating = !1),
              (this._prevWidth = -1),
              (this._bindings = []),
              (this._options = Object(r.deepExtend)({}, b, i)),
              (this.tabChanged = new c.a()),
              (this._elTabs = t),
              (this._elPages = e),
              (this._elScrollWrap = y(
                this._options.scrollWrapClass || '',
                this._elTabs,
                'wrapInner',
              )),
              (this._elScrollBox = y(
                this._options.scrollBoxClass || '',
                this._elScrollWrap,
                'wrapInner',
              )),
              this._options.noSlider ||
                (this._elSlider = y(
                  this._options.sliderClass || '',
                  this._elScrollBox,
                  'append',
                )),
              Modernizr.mobiletouch ||
                ((this._elArrowLeft = y(
                  this._options.lArrowClass || '',
                  this._elTabs,
                  'append',
                  '<div class="' +
                    (this._options.lArrowClass || '') +
                    ' i-slided">' +
                    f +
                    '</div>',
                )),
                (this._elArrowRight = y(
                  this._options.rArrowClass || '',
                  this._elTabs,
                  'append',
                  '<div class="' +
                    (this._options.rArrowClass || '') +
                    ' i-slided">' +
                    v +
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
                var o = t[i];
                w(o, this._options.sliderClass) || e.push(o);
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
                i = g(this._elScrollWrap),
                o = this._elScrollWrap.scrollWidth - i - 2;
              function r(t) {
                C(t, 'i-slided'),
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
                  return m(e, 'i-slided'), void e.setAttribute('style', '');
                var o = i === s.Left ? '-100%' : '100%';
                a().then(function () {
                  $.Velocity.animate(
                    e,
                    { translateX: o },
                    {
                      complete: function () {
                        return m(e, 'i-slided');
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
                  (o - e > 1
                    ? r(this._elArrowRight)
                    : (e >= o || this._elScrollWrap.scrollWidth <= i) &&
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
                var o = this.index();
                a(
                  this.getTabsArray(),
                  this._options.activeTabClass,
                  this._options.inactiveTabClass,
                ),
                  a(
                    this.getPagesArray(),
                    this._options.activePageClass,
                    this._options.inactivePageClass,
                  ),
                  this._options.noSlider || this.updateSlider(o, t, e),
                  this._options.saveTab && p.setValue(this._options.saveTab, t),
                  this.tabChanged.fire(t);
              }
              function a(e, i, o) {
                e.forEach(function (e, a) {
                  var s = t === a;
                  i && S(e, i, s), o && S(e, o, !s);
                });
              }
            }),
            (t.prototype.updateSlider = function (t, e, i) {
              var o = this;
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
                    c = g(s),
                    d = s.querySelector('.js-tabs__slider-pos');
                  if (d) {
                    var u = window.getComputedStyle(d);
                    (l +=
                      parseInt(u.getPropertyValue('padding-left')) +
                      d.offsetLeft),
                      (c -= c - g(d));
                  }
                  (i = i || -1 === t || (document.all && !window.atob))
                    ? ((this._elSlider.style.left = l + 'px'),
                      (this._elSlider.style.width = c + 'px'))
                    : ((this._animating = !0),
                      a().then(function () {
                        $.Velocity.animate(
                          o._elSlider,
                          { left: l },
                          {
                            duration: n.dur,
                            easing: 'easeOutCubic',
                            queue: !1,
                          },
                        ),
                          $.Velocity.animate(
                            o._elSlider,
                            { width: c },
                            {
                              complete: function () {
                                o._animating = !1;
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
              var o = this.pageAt(t);
              o && e(o);
              var a = t - 1 >= 0 ? t - 1 : 0;
              this.setActivePage(a), this.checkScrollArrows(!0);
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
            (t.prototype.deselect = function () {
              var t = this.getElActiveTab();
              this._options.activeTabClass &&
                t &&
                C(t, this._options.activeTabClass);
              var e = this.getElActivePage();
              return (
                this._options.activePageClass &&
                  e &&
                  C(e, this._options.activePageClass),
                this._elSlider &&
                  ((this._elSlider.style.left = ''),
                  (this._elSlider.style.width = '')),
                this
              );
            }),
            (t.prototype.stop = function () {
              this._unbindEvents({});
            }),
            (t.prototype._addClass = function (t, e) {
              'string' == typeof e &&
                (Array.isArray(t) || (t = [t]),
                t.forEach(function (t) {
                  m(t, e);
                }));
            }),
            (t.prototype._initActivePage = function () {
              var t = 0;
              this._options.saveTab && (t = p.getInt(this._options.saveTab, 0));
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
                    listener: function () {
                      var e = t.getTabsArray(),
                        i = 0,
                        o = !1,
                        s = t._elScrollWrap.scrollLeft;
                      Object(h.isRtl)() && e.reverse(),
                        e.forEach(function (t) {
                          if (!o) {
                            var e = t.offsetLeft + t.offsetWidth;
                            e > s ? (o = !0) : (i = e);
                          }
                        }),
                        a().then(function () {
                          $.Velocity.animate(t._elScrollWrap, 'scroll', {
                            axis: 'x',
                            container: $(t._elScrollWrap),
                            duration: n.dur / 2,
                            easing: 'easeInOutCubic',
                            offset: Math.floor(i - s - g(t._elArrowLeft)),
                            queue: !1,
                          });
                        });
                    },
                    target: this._elArrowLeft,
                  }),
                this._elArrowRight &&
                  this._bindOneEvent({
                    eventName: 'click',
                    listener: function () {
                      var e = t.getTabsArray(),
                        i = 0,
                        s = Object(h.isRtl)()
                          ? 0
                          : t._elScrollWrap.scrollLeft + g(t._elScrollWrap);
                      Object(h.isRtl)() && e.reverse(),
                        e.forEach(function (t) {
                          if (0 === i) {
                            var e = t.offsetLeft + t.offsetWidth;
                            e > s && (i = e);
                          }
                        }),
                        a().then(function () {
                          $.Velocity.animate(t._elScrollWrap, 'scroll', {
                            axis: 'x',
                            container: $(t._elScrollWrap),
                            duration: n.dur / 2,
                            easing: 'easeInOutCubic',
                            offset: Math.ceil(
                              i -
                                s +
                                g(Object(o.ensureDefined)(t._elArrowRight)),
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
                          w(i, t._options.activeTabClass) &&
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
                t.filter(function (t) {
                  return e ? w(t, e) : !!i && !w(t, i);
                })[0] || null
              );
            }),
            (t.prototype._isTabDisabled = function (t) {
              return (
                w(t, 'i-disabled') ||
                (this._options.tabDisabledClass &&
                  w(t, this._options.tabDisabledClass)) ||
                t.hasAttribute('disabled')
              );
            }),
            (t.prototype._hoverSlider = function (t) {
              var e = this,
                i = g(t),
                o = window.getComputedStyle(t),
                s =
                  t.offsetLeft +
                  parseInt(o.getPropertyValue('padding-left')) +
                  parseInt(o.getPropertyValue('margin-left')),
                r = { duration: n.dur / 4, easing: 'easeOutCubic', queue: !1 };
              a().then(function () {
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
                o = t.querySelector('.js-tabs__slider-pos'),
                s = window.getComputedStyle(o),
                r =
                  t.offsetLeft +
                  parseInt(i.getPropertyValue('padding-left')) +
                  parseInt(i.getPropertyValue('margin-left')) +
                  parseInt(s.getPropertyValue('padding-left')) +
                  o.offsetLeft,
                l = g(t),
                c = l - (l - g(o)),
                d = { duration: n.dur / 2, easing: 'easeInSine', queue: !1 };
              a().then(function () {
                $.Velocity.animate(e._elSlider, { left: r }, d),
                  $.Velocity.animate(e._elSlider, { width: c }, d);
              });
            }),
            t
          );
        })();
      function g(t) {
        if (0 === t.offsetWidth) return 0;
        var e = window.getComputedStyle(t);
        return (
          t.offsetWidth -
          parseFloat(e.getPropertyValue('padding-left')) -
          parseFloat(e.getPropertyValue('padding-right')) -
          parseFloat(e.getPropertyValue('border-left-width')) -
          parseFloat(e.getPropertyValue('border-right-width'))
        );
      }
      function y(t, e, i, o) {
        var a = e.querySelector('.' + t);
        if (!a) {
          var s = document.createElement('div');
          if (
            ((s.innerHTML = o || '<div class="' + t + '"></div>'),
            (a = s.firstElementChild),
            'append' === i)
          )
            e.appendChild(a);
          else {
            if ('wrapInner' !== i) throw new Error('Unknown insertMethod');
            for (
              var n = Array.prototype.slice.call(e.childNodes), r = 0;
              r < n.length;
              r++
            )
              a.appendChild(n[r]);
            e.appendChild(a);
          }
        }
        return a;
      }
      function m(t, e) {
        var i;
        (i = t.classList).add.apply(i, A(e));
      }
      function C(t, e) {
        var i;
        (i = t.classList).remove.apply(i, A(e));
      }
      function w(t, e) {
        return A(e).every(function (e) {
          return t.classList.contains(e);
        });
      }
      function S(t, e, i) {
        A(e).forEach(function (e) {
          return t.classList.toggle(e, i);
        });
      }
      function A(t) {
        return t.split(/\s+/);
      }
    },
    tkV1: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.AddCompareDialog = void 0);
      var o = (function () {
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
        a = i('ocUP'),
        s = i('UnpO'),
        n = i('NhD9'),
        r = i('JWMC');
      i('jPTo');
      e.AddCompareDialog = (function () {
        function t(e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this._chartWidgetCollection = e),
            (this._$symbolSearchPopup = null),
            (this._dialog = null);
        }
        return (
          o(t, [
            {
              key: 'show',
              value: function () {
                if (this.isOpened()) return this._dialog;
                null !== this._dialog && this._dialog.destroy();
                var t = new a.CompareTab(this._chartWidgetCollection, this),
                  e = new s.AddSymbolTab(this._chartWidgetCollection, this),
                  i = [];
                i.push({
                  name: $.t('Compare'),
                  page: t.$tab.addClass('tv-compare-dialog__tab-page'),
                }),
                  i.push({
                    name: $.t('Add Symbol', {
                      context: 'compare_or_add_symbol_dialog',
                    }),
                    page: e.$tab.addClass('tv-compare-dialog__tab-page'),
                  });
                var o = (0, n.createTabbedDialog)({
                  tabs: i,
                  width: 400,
                  tabStateSaveKey: 'CompareAddDialog.tab',
                  destroyOnClose: !0,
                  withScroll: !1,
                  addClass: 'tv-compare-dialog',
                  tabsScrollBoxAddClass: 'tv-compare-dialog__scroll-box',
                  tabAddClass: 'tv-compare-dialog__tab',
                  isClickOutFn: function (i) {
                    if (t.isClickOnTab(i) || e.isClickOnTab(i)) return !1;
                  },
                });
                return (
                  (this._dialog = o.dialog),
                  this._dialog.on('afterClose', function () {
                    (0,
                    r.trackEvent)('GUI', 'Compare', t.selectedSymbols.sort().join(', '));
                  }),
                  this._dialog.open(),
                  this._dialog
                );
              },
            },
            {
              key: 'hide',
              value: function () {
                this.isOpened() && this._dialog.close();
              },
            },
            {
              key: 'isOpened',
              value: function () {
                return this._dialog && this._dialog.isOpened();
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
