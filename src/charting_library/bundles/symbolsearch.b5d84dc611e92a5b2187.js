(window.webpackJsonp = window.webpackJsonp || []).push([
  ['symbolsearch'],
  {
    HBUj: function (t, e, i) {},
    m5UM: function (t, e, i) {
      'use strict';
      (function (e) {
        i('sZhh'), i('HBUj');
        var n = i('PT1i').linking,
          s = i('qdOW'),
          o = i('6et/'),
          r = i('w3Pp').marketType,
          a = i('c2JX').Spinner,
          l = i('+6II'),
          c = i('dTSQ').regExpEscape,
          p = i('ePL1'),
          u = i('wmOI'),
          h = i('+GxX').isFeatureEnabled,
          d = i('GAqT').TVOldDialogs,
          f = i('jAh7').getRootOverlapManager,
          g = i('e3/o').guid,
          _ = i('LxhU').Interval,
          m = i('h24c'),
          y = m.canShowSpreadActions,
          v = m.skipAccept,
          b = m.syncSymbolSearch,
          S = m.setLinkingResolution,
          E = m.globalKeypressMatches,
          w = h('futures-descriptions');
        function I() {
          if ('undefined' == typeof tradingService) return null;
          var t = tradingService();
          return t && t.connectStatus() === CONNECTSTATUSES.CONNECTED
            ? t.activeBroker()
            : null;
        }
        function T() {
          var t = I();
          if (t && t.metainfo().configFlags.supportSymbolSearch)
            return t.metainfo().symbolSearchId || t.metainfo().id.toLowerCase();
        }
        function x(t) {
          return (
            k[
              {
                'EURONEXT AMSTERDAM': 'EURONEXTAMS',
                'EURONEXT BRUSSELS': 'EURONEXTBRU',
                'EURONEXT LISBON': 'EURONEXTLIS',
                'EURONEXT PARIS': 'EURONEXTPAR',
              }[t.exchange] ||
                t.prefix ||
                t.exchange
            ] ||
            t.exchange ||
            ''
          );
        }
        function C(t, e) {
          return (
            e in t ||
              (t[e] =
                'bitcoin' === e || 'crypto' === e
                  ? window.t('crypto')
                  : window.t(e)),
            t[e]
          );
        }
        var k = {},
          R = /^(\w{3,4}) (\d{4})$/,
          L = (function () {
            var t = [
              { name: 'input', immediate: !0 },
              { name: 'sync', immediate: !0 },
              { name: 'keypress' },
              { name: 'keydown' },
              { name: 'keyup' },
              { name: 'mousedown' },
              { name: 'mouseup' },
              { name: 'cut' },
              { name: 'paste' },
            ];
            var i = [/^e-m/i];
            function m(i) {
              if (!(this instanceof m))
                throw new TypeError('SymbolSearch is a constructor');
              if (
                (!(i = i || {}).dontUseInputParser &&
                  e.enabled('symbol_search_parser_mixin'),
                (this._inputElement = $(i.input).get(0)),
                !this._inputElement)
              )
                throw new TypeError(
                  'options.input must be a DOM element, jQuery object or selector',
                );
              if (
                ((this.$list = $(i.list).eq(0)),
                0 === this.$list.size() && delete this.$list,
                void 0 !== i.callback)
              ) {
                if ('function' != typeof i.callback)
                  throw new TypeError('options.callback must be function');
                this._callback = i.callback;
              }
              if (void 0 !== i.onValueChanged) {
                if ('function' != typeof i.onValueChanged)
                  throw new TypeError(
                    'options.onValueChanged must be function',
                  );
                this._onValueChanged = i.onValueChanged;
              }
              if (void 0 !== i.onEmptyApply) {
                if ('function' != typeof i.onEmptyApply)
                  throw new TypeError('options.onEmptyApply must be function');
                this._onEmptyApply = i.onEmptyApply;
              }
              if (
                (i.ignoreInterval && (this._ignoreInterval = !0),
                m.resetStoredInterval(),
                i.hidePro && (this._hidePro = !0),
                i.allowMultipleSymbols && (this._allowMultipleSymbols = !0),
                void 0 !== i.onParse)
              ) {
                if ('function' != typeof i.onParse)
                  throw new TypeError('options.onParse must be function');
                this._onParse = i.onParse;
              }
              (this._state = {}),
                (this._resolveViaSymbolSearchId = null),
                (this.acceptEmpty = !!i.acceptEmpty),
                $(this._inputElement).data('symbol-search-instance', this);
              for (
                var n = (this._boundListener = this._eventListener.bind(this)),
                  s = (this.boundTimeoutListener = function (t) {
                    setTimeout(function () {
                      n(t);
                    }, 0);
                  }),
                  o = 0;
                o < t.length;
                o++
              )
                t[o].immediate
                  ? $(this._inputElement).on(t[o].name, n)
                  : $(this._inputElement).on(t[o].name, s);
              (this._boundOnKeyDown = this._onKeyDown.bind(this)),
                (this._boundOnKeyPress = this._onKeyPress.bind(this)),
                $(this._inputElement)
                  .on('keydown', this._boundOnKeyDown)
                  .on('keypress', this._boundOnKeyPress),
                this._eventListener(),
                i.autoFocus && m.registerAutoFocus(this);
            }
            function L(t, e) {
              var i = ChartApiInstance.supportedSymbolsTypes();
              T() &&
                (i = i.filter(function (t) {
                  return 'quandl' !== t.value && 'economic' !== t.value;
                }));
              var n = TVSettings.getValue('symboledit.filter');
              return (
                !i.some(function (t) {
                  return t.value === n;
                }) &&
                  i.length > 0 &&
                  (n = i[0].value),
                0 !== i.length &&
                  (i.forEach(function (i) {
                    var s = i.value,
                      o = $('<a class="type-filter">')
                        .attr('href', '#' + s)
                        .text($.t(i.name));
                    s === n && o.addClass('active'),
                      o.on('click', function (i) {
                        i.preventDefault(),
                          e.find('.type-filter').removeClass('active'),
                          $(this).addClass('active'),
                          t.typeFilter(s),
                          TVSettings.setValue('symboledit.filter', s);
                      }),
                      o.appendTo(e);
                  }),
                  t.typeFilter(n),
                  !0)
              );
            }
            function A(t, e) {
              var i = ChartApiInstance.supportedExchangesList();
              i.reduce(function (t, e) {
                return (t[e.value] = e.name), t;
              }, k);
              var n,
                s =
                  ((n = TVSettings.getValue('symboledit.exchangefilter')),
                  /_MINI$/.test(n) ? '' : n);
              if ('bovespa' !== TradingView.widgetCustomer) {
                if (0 === i.length) return !1;
                var o = $(
                  '<div id="exchange-filter" class="exchange-filter">',
                ).appendTo(e);
                return V(t, i, s, o), t.setExchangeFilter(s), !0;
              }
            }
            (m.registerAutoFocus = function (t) {
              if (
                (t instanceof jQuery && (t = t.data('symbol-search-instance')),
                !(t instanceof m))
              )
                throw new TypeError(
                  'arg must be an SymbolSearch instance of jQuery input with bound SymbolSearch object',
                );
              o.registerListener(
                'symbolEdit',
                function (t) {
                  if (E(t)) {
                    t.preventDefault(),
                      this.resetState(),
                      (this._skipAutoFocus = !0),
                      this._inputElement.focus();
                    var e = String.fromCharCode(t.charCode);
                    'function' == typeof this._setInputValue
                      ? this._setInputValue(e)
                      : (this._inputElement.value = e),
                      this._eventListener();
                  }
                }.bind(t),
              );
            }),
              (m.prototype.searchRequestDelay = 0),
              (m.setSearchRequestDelay = function (t) {
                m.prototype.searchRequestDelay = t;
              }),
              (m.prototype.resetState = function () {
                this._state = {};
              }),
              (m.prototype.typeFilter = function (t) {
                if (!(arguments.length > 0)) return this._state.typeFilter;
                t !== this._state.typeFilter &&
                  (null == t
                    ? delete this._state.typeFilter
                    : (this._state.typeFilter = t + ''),
                  delete this._state.keepListFor,
                  this._onSelectionChanged(),
                  this.selectExchangeFilter());
              }),
              (m.prototype.setExchangeFilter = function (t) {
                t !== this._state.exchangeFilter &&
                  (null == t
                    ? delete this._state.exchangeFilter
                    : (this._state.exchangeFilter = t + ''),
                  delete this._state.keepListFor,
                  this._onSelectionChanged());
              }),
              (m.prototype.setTradableFilter = function (t) {
                t !== this._state.tradableFilter &&
                  ((this._state.tradableFilter = t),
                  this._onSelectionChanged());
              }),
              (m.prototype.getExchangeFilter = function () {
                return this._state.exchangeFilter;
              }),
              (m.prototype.destroy = function () {
                $(this._inputElement).off(),
                  $(this._inputElement).removeData('symbol-search-instance');
              }),
              (m.prototype._moveSelection = function (t, e) {
                if (this.$list) {
                  var i,
                    n = this.$list.find('table.symbol-edit-popup'),
                    s = n.find('tr:not(.hidden)'),
                    o = n
                      .find('tr.symbol-edit-popup-active')
                      .removeClass('symbol-edit-popup-active'),
                    r = 0 !== o.length ? s.index(o) : -1;
                  if (
                    r !==
                    (i =
                      1 === t
                        ? o.get(0) === s.get(-1)
                          ? 0
                          : r + t
                        : Math.max(-1, r + t))
                  ) {
                    var a = s.get(i);
                    if (a) {
                      var l = this._getItemByElement(a);
                      if (P.isRoot(l)) {
                        var c = a.getAttribute('data-root');
                        a.classList.add('symbol-edit-popup-active'),
                          this._scrollHighlightIntoView(),
                          c
                            ? ((this._state.highlightedItem = null),
                              (this._selectedGroupRoot = c))
                            : ((this._state.highlightedItem = l),
                              this._replaceCurrentSymbol(e));
                      } else
                        delete this._selectedGroupRoot,
                          this._highlightItem(l, !0, e);
                    }
                  }
                }
              }),
              (m.prototype._groupToggleCollapsed = function (t, e) {
                this._groupListHandler &&
                  this._groupListHandler.toggleCollapsed(t, e);
              }),
              (m.prototype._onKeyDown = function (t) {
                (t.keyCode !== u.DOWN_ARROW && t.keyCode !== u.UP_ARROW) ||
                  (this._moveSelection(t.keyCode === u.DOWN_ARROW ? 1 : -1, !0),
                  t.preventDefault(),
                  t.stopPropagation()),
                  t.keyCode === u.ENTER && t.stopPropagation(),
                  !this._selectedGroupRoot ||
                    (t.keyCode !== u.LEFT_ARROW &&
                      t.keyCode !== u.RIGHT_ARROW) ||
                    (this._groupToggleCollapsed(
                      this._selectedGroupRoot,
                      t.keyCode === u.LEFT_ARROW,
                    ),
                    t.preventDefault());
              }),
              (m.prototype._onKeyPress = function (t) {
                if (t.keyCode === u.DOWN_ARROW || t.keyCode === u.UP_ARROW) {
                  if (t.charCode) return;
                  if (this._boundOnKeyDown)
                    return (
                      $(this._inputElement).off(
                        'keydown',
                        this._boundOnKeyDown,
                      ),
                      delete this._boundOnKeyDown,
                      void t.preventDefault()
                    );
                  this._moveSelection(t.keyCode === u.DOWN_ARROW ? 1 : -1),
                    t.preventDefault();
                }
                t.keyCode === u.ENTER &&
                  (this._selectedGroupRoot
                    ? (this._groupToggleCollapsed(this._selectedGroupRoot, !1),
                      t.preventDefault())
                    : this.acceptTypeIn());
              }),
              (m.prototype._eventListener = function (t, i) {
                var n = this._inputElement,
                  s = this._getInputValue();
                e.enabled('uppercase_instrument_names') &&
                  (s = s.toUpperCase());
                var o = !1,
                  r = !1;
                this._state.value !== s &&
                  (this._state.hasOwnProperty('value') &&
                    this._onValueChanged &&
                    this._onValueChanged(s),
                  (this._state.value = s),
                  (o = !0),
                  this._inputParserMixin && this._inputParserMixin.parse()),
                  this._fixIntervalCase();
                var a = this._limitInputSelectionValue('selectionStart');
                this._state.selectionStart !== a &&
                  ((this._state.selectionStart = a), (r = !0));
                var l = this._limitInputSelectionValue('selectionEnd');
                if (
                  (this._state.selectionEnd !== l &&
                    ((this._state.selectionEnd = l), (r = !0)),
                  this._state.selectionDirection !== n.selectionDirection &&
                    ((this._state.selectionDirection = n.selectionDirection),
                    (r = !0)),
                  o || (r && this._inputParserMixin))
                ) {
                  this._onSelectionChanged(void 0, i);
                  var c = !1;
                  this._getInputValue() !== this._state.value &&
                    (this._setInputValue(this._state.value), (c = !0)),
                    (c ||
                      this._state.selectionStart !==
                        this._limitInputSelectionValue('selectionStart') ||
                      this._state.selectionEnd !==
                        this._limitInputSelectionValue('selectionEnd')) &&
                      n.setSelectionRange &&
                      n.setSelectionRange(
                        this._state.selectionStart,
                        this._state.selectionEnd,
                        this._state.selectionDirection,
                      );
                }
              }),
              (m.prototype._fixIntervalCase = function () {
                if (this._selectionInsideInterval()) {
                  var t = m.detachInterval(this._inputElement.value);
                  /[a-z]/.test(t.detached) &&
                    (this._inputElement.value =
                      t.rest + t.detached.toUpperCase());
                }
              }),
              (m.prototype._selectionInsideInterval = function (t) {
                if (this._ignoreInterval) return !1;
                var e = m.detachInterval(this._inputElement.value);
                return (
                  !!e &&
                  ('string' == typeof t
                    ? this._inputElement[t] > e.rest.length
                    : this._inputElement.selectionStart > e.rest.length &&
                      this._inputElement.selectionEnd > e.rest.length)
                );
              }),
              (m.prototype._limitInputSelectionValue = function (t) {
                return this._selectionInsideInterval(t)
                  ? m.detachInterval(this._inputElement.value).rest.length
                  : t in this._inputElement
                  ? this._inputElement[t]
                  : this._inputElement.value.length;
              }),
              (m.prototype._getInputValue = function () {
                if (this._ignoreInterval) return this._inputElement.value;
                var t = m.detachStoreInterval(this._inputElement.value);
                return (
                  $(this._inputElement).toggleClass(
                    'interval-error',
                    m.intervalError(),
                  ),
                  t
                );
              }),
              (m.prototype._setInputValue = function (t) {
                this._ignoreInterval
                  ? (this._inputElement.value = t)
                  : (this._inputElement.value = m.recallAttachInterval(t));
              }),
              (m.prototype._onSelectionChanged = function (t, e) {
                var n = this;
                function s(t, e, i, s, o) {
                  (n._state.contextTicker = t),
                    (n._state.contextExchange = e),
                    (n._state.contextType = i),
                    (n._state.contextTradable = o),
                    (n._state.keepListFor && n._state.keepListFor === s) ||
                      (n._getSuggestList(), delete n._state.keepListFor);
                }
                if (
                  !i.some(function (t) {
                    return t.test(n._state.value);
                  }) &&
                  (this._isSpreadInInput() ||
                    (this._inputParserMixin && !0 !== e))
                )
                  this._inputParserMixin.onSelectionChanged(s);
                else if (this.$list) {
                  this._state._selectedTicker = null;
                  var o = this._state.value;
                  this._isSpreadInInput() &&
                    this._state.contextToken &&
                    (o = this._state.contextToken.value),
                    s(
                      o,
                      this.getExchangeFilter(),
                      this._state.typeFilter,
                      o,
                      this._state.tradableFilter,
                    );
                }
              }),
              (m.prototype._clearSelectionState = function () {
                delete this._state.contextTicker,
                  delete this._state.contextExchange,
                  delete this._state.contextType,
                  delete this._state.contextToken,
                  delete this._state.keepListFor;
              }),
              (m.prototype._clearSearchTimeout = function () {
                this._searchTimeout &&
                  (clearTimeout(this._searchTimeout),
                  (this._searchTimeout = null));
              }),
              (m.prototype._doGetSuggestList = function () {
                this._clearSearchTimeout();
                var t = T(),
                  e = this._state.contextTicker || '',
                  i =
                    this._state.contextExchange ||
                    this.getExchangeFilter() ||
                    '',
                  n = this._state.typeFilter || '',
                  s = t && this._state.tradableFilter,
                  o = this._getUnhideSymbolSearchGroups(),
                  r = window.language || '';
                this._showLoading();
                var a = this;
                ChartApiInstance.searchSymbols(
                  e,
                  i,
                  n,
                  r,
                  !1,
                  !1,
                  t,
                  s,
                  o,
                  function (t) {
                    e !== (a._state.contextTicker || '') ||
                      i !==
                        (a._state.contextExchange ||
                          a.getExchangeFilter() ||
                          '') ||
                      n !== (a._state.typeFilter || '') ||
                      (n === p.types.QUANDL &&
                        (t = a._processQuandlResponse(t)),
                      a._renderSuggestList(t),
                      a._onResponse(t));
                  },
                );
              }),
              (m.prototype._getSuggestList = function () {
                this._clearSearchTimeout(),
                  (this._searchTimeout = setTimeout(
                    this._doGetSuggestList.bind(this),
                    m.prototype.searchRequestDelay,
                  ));
              }),
              (m.prototype._showLoading = function () {
                if (this.$list && !this._spinner) {
                  this._clearSuggestList();
                  var t = $('<div class="symbol-search-loading">').appendTo(
                    this.$list,
                  );
                  this._spinner = new a('medium').spin(t.get(0));
                }
              }),
              (m.prototype._groupContracts = function (t) {
                for (
                  var e = ChartApiInstance.symbolsGrouping(),
                    i = {},
                    n = [],
                    s = 0;
                  s < t.length;
                  ++s
                ) {
                  var o = t[s];
                  if (o.prefix || Array.isArray(o.contracts)) return t;
                  var r = e[o.type];
                  if (void 0 !== r) {
                    var a = r.exec(o.symbol);
                    if (a) {
                      var l,
                        c = a[1];
                      c in i
                        ? (l = i[c])
                        : ((l = n.length),
                          (i[c] = l),
                          n.push({
                            type: o.type,
                            symbol: c,
                            exchange: o.exchange,
                            description: o.description,
                            full_name: o.exchange + ':' + c,
                            contracts: [],
                          })),
                        n[l].contracts.push(o);
                    } else n.push(o);
                  } else n.push(o);
                }
                return n;
              }),
              (m.prototype._renderSuggestList = function (t) {
                if (this.$list) {
                  (t = this._groupContracts(t)),
                    (w = h('futures-descriptions'));
                  var i = this,
                    n = this._state;
                  this._clearSuggestList();
                  var s = c(n.contextTicker).trim(),
                    o = new RegExp(
                      s.replace(' ', '|'),
                      'i' + (s.length > 1 ? 'g' : ''),
                    );
                  if (
                    (delete n.highlightedItem,
                    this._hidePro &&
                      (t = t.filter(function (t) {
                        return !t.params || -1 === t.params.indexOf('pro');
                      })),
                    0 !== t.length)
                  ) {
                    var r = document.createElement('table');
                    r.setAttribute('class', 'symbol-edit-popup');
                    var a = new m.GroupListHandler(r, o, {}),
                      l = null;
                    this._renderedResponse = [];
                    TVSettings.getBool('fxcm_cfd', !1);
                    for (var p = 0; p < t.length; p++) {
                      var u = t[p];
                      a.append(u),
                        l ||
                          u.ticker !== n.contextTicker ||
                          u.exchange !== n.contextExchange ||
                          (l = u),
                        this._renderedResponse.push(u);
                    }
                    e.enabled('expand_symbolsearch_items') || a.collapse(),
                      (this._groupListHandler = a),
                      l && this._highlightItem(u),
                      $(r)
                        .on('click', 'tr', function (t) {
                          if (!t.isDefaultPrevented()) {
                            t.preventDefault();
                            var e = i._getItemByElement(this);
                            e &&
                              e.full_name &&
                              (i._isSpreadInInput()
                                ? i._highlightItem(e, !0, !1)
                                : i.accept(e.full_name, e.ticker));
                          }
                        })
                        .appendTo(this.$list);
                  } else
                    this.$list.html(
                      '<div style="text-align: center; padding: 7px 0; font-style: italic;">' +
                        $.t('No symbols matched your criteria') +
                        '</div>',
                    );
                }
              }),
              (m.prototype._isEmptySuggestList = function () {
                return !Boolean(
                  this._renderedResponse && this._renderedResponse.length,
                );
              }),
              (m.prototype._isSpreadInInput = function () {
                return (
                  this._inputParserMixin &&
                  this._state.parsed &&
                  this._state.parsed.length > 1
                );
              }),
              (m.prototype._getItemByElement = function (t) {
                return this._renderedResponse && this._groupListHandler
                  ? this._groupListHandler.getItemByTicker(
                      t.getAttribute('data-item-ticker'),
                    )
                  : null;
              }),
              (m.prototype._getElementByItem = function (t) {
                if (!this._renderedResponse || !this.$list) return null;
                var e = P.itemTicker(t);
                return this.$list
                  .get(0)
                  .querySelector('tr[data-item-ticker="' + e + '"]');
              }),
              (m.prototype._highlightItem = function (t, e, i) {
                var n = this._state;
                if (n.highlightedItem) {
                  var s = this._getElementByItem(n.highlightedItem);
                  s && $(s).removeClass('symbol-edit-popup-active');
                }
                n.highlightedItem = t;
                var o = this._getElementByItem(n.highlightedItem);
                o &&
                  ($(o).addClass('symbol-edit-popup-active'),
                  this._scrollHighlightIntoView()),
                  e && this._replaceCurrentSymbol(i);
              }),
              (m.prototype._scrollHighlightIntoView = function () {
                var t = this.$list.find('tr.symbol-edit-popup-active');
                t.length &&
                  (t.offset().top < this.$list.offset().top
                    ? this.$list.scrollTop(
                        this.$list.scrollTop() -
                          (this.$list.offset().top - t.offset().top),
                      )
                    : t.offset().top + t.outerHeight() >
                        this.$list.offset().top + this.$list.outerHeight() &&
                      this.$list.scrollTop(
                        this.$list.scrollTop() +
                          (t.offset().top +
                            t.outerHeight() -
                            (this.$list.offset().top +
                              this.$list.outerHeight())),
                      ));
              }),
              (m.prototype._clearSuggestList = function () {
                (this._renderedResponse = null),
                  this._spinner && (this._spinner.stop(), delete this._spinner),
                  this.$list && this.$list.empty();
              }),
              (m.prototype._showErrorNotice = function () {
                this.$list &&
                  (this._clearSuggestList(),
                  this.$list.text('Invalid expression'));
              }),
              (m.prototype._replaceCurrentSymbol = function (t) {
                var e = this._state;
                if (e.highlightedItem) {
                  var i = e.highlightedItem,
                    n = '',
                    s = 0;
                  if (
                    this._isSpreadInInput() ||
                    (this._inputParserMixin && !0 !== t)
                  ) {
                    var o = this._inputParserMixin.replaceCurrentSymbol(i);
                    if (!o.ok) return;
                    (n = o.newValue),
                      (s = o.newCaretPos),
                      (e.keepListFor = o.keepListFor);
                  } else
                    (this._state._selectedTicker = i.ticker || i.symbol),
                      (e.keepListFor = this._state._selectedTicker),
                      (s = (n =
                        !0 === t && i.full_name && this._inputParserMixin
                          ? i.full_name
                          : i.symbol).length);
                  this._setInputValue(n),
                    this._inputElement.setSelectionRange
                      ? this._inputElement.setSelectionRange(s, s)
                      : this._inputElement.select(),
                    this._eventListener(void 0, t);
                }
              }),
              (m.prototype.splitAndAcceptUserInput = function () {
                for (
                  var t = this._getInputValue().split(','), e = 0;
                  e < t.length;
                  e++
                )
                  this.acceptSymbolIn(t[e]);
              }),
              (m.prototype.acceptSymbolIn = function (t) {
                var e, i;
                this._inputParserMixin
                  ? (e = this._inputParserMixin.parseSymbol(t))
                  : ((e = t), (i = this._state._selectedTicker || t)),
                  this.accept(e, i);
              }),
              (m.prototype.acceptTypeIn = function () {
                this._allowMultipleSymbols
                  ? this.splitAndAcceptUserInput()
                  : this.acceptSymbolIn(this._getInputValue());
              }),
              (m.prototype.accept = function (t, e) {
                var i = this;
                !(function () {
                  if ((e = e || t) || ('' === e && i.acceptEmpty)) {
                    delete i._state.keepListFor;
                    var n = i._ignoreInterval ? void 0 : m.getInterval(!0);
                    (i._inputElement.value = t),
                      i._eventListener(),
                      i._callback && i._callback(e, n),
                      $(i._inputElement).trigger('accept-symbol', [e]);
                  }
                })();
              }),
              (m.prototype.bindListWrapper = function (t) {
                if (0 === (t = $(t).eq(0)).size())
                  throw new TypeError(
                    'element must be a DOM element, jQuery object or selector',
                  );
                (this.$list = t),
                  this._clearSelectionState(),
                  this._eventListener();
              }),
              (m.prototype.removeListWrapper = function () {
                delete this.$list,
                  this._clearSuggestList(),
                  this._clearSelectionState(),
                  this._eventListener();
              }),
              (m.prototype.selectExchangeFilter = function () {
                this.$filterContainer.find('.exchange-filter').hide(),
                  this._state.typeFilter === p.types.QUANDL
                    ? this.$filterContainer.find('#quandl-filter').show()
                    : this._state.typeFilter !== p.types.ECONOMIC &&
                      this.$filterContainer.find('#exchange-filter').show();
              }),
              (m.prototype._onResponse = function (t) {
                t.length > 0 &&
                  this._state.typeFilter === p.types.QUANDL &&
                  this._showNotification();
              }),
              (m.prototype._showNotification = function () {
                if (
                  TVSettings.getBool('symboledit.show_quandl_notification', !0)
                ) {
                  var t =
                      $.t(
                        'Quandl is a huge financial database that we have connected to TradingView. Most of its data is EOD and is not updated in real-time, however the information may be extremely useful for fundamental analysis.',
                      ) +
                      ' <a target="_blank" href="' +
                      ('ru' === window.locale
                        ? 'http://blog.tradingview.com/?p=1530&lang=ru'
                        : 'http://blog.tradingview.com/?p=1530') +
                      '">' +
                      $.t('Read our blog for more info!') +
                      '</a>',
                    e = $('<div class="symbol-edit-notification">').prependTo(
                      this.$list,
                    );
                  e.html(t),
                    e.find('a').click(function (t) {
                      t.preventDefault();
                      var e = $(this).attr('href');
                      window.open(e, '_blank');
                    }),
                    $('<a class="close">')
                      .appendTo(e)
                      .click(function () {
                        TVSettings.setValue(
                          'symboledit.show_quandl_notification',
                          !1,
                        ),
                          e.remove();
                      });
                }
              }),
              (m.prototype._processQuandlResponse = function (t) {
                return t.datasets
                  .filter(function (t) {
                    return !t.premium;
                  })
                  .map(function (t) {
                    return {
                      description: t.name,
                      exchange: t.database_code,
                      full_name:
                        'QUANDL:' + t.database_code + '/' + t.dataset_code,
                      params: ['eod'],
                      symbol: t.dataset_code,
                      type: 'quandl',
                    };
                  });
              }),
              (m.prototype._getUnhideSymbolSearchGroups = function () {
                var t = '',
                  e = I();
                if (e) {
                  var i = e.metainfo().configFlags
                    .supportUnhideSymbolSearchGroups;
                  e.connectionStatus() === CONNECTSTATUSES.CONNECTED &&
                    i &&
                    (t = e.unhideSymbolSearchGroups().join(',')),
                    tradingService().trackEvent(
                      'Symbol Search Tradable checkbox',
                      T() && this._state.tradableFilter ? 'on' : 'off',
                    );
                }
                return t;
              }),
              (m.prototype.forceFocus = function () {
                this._inputElement.focus();
              }),
              (m.createSuggestListRow = function (t, e, i, n) {
                n || (n = {});
                var s = document.createElement('tr'),
                  o = 'symbol-edit-popup';
                n.addClass && (o += ' ' + n.addClass),
                  s.setAttribute('class', o);
                var a = document.createElement('td');
                a.setAttribute(
                  'class',
                  'symbol-edit-popup-td name apply-overflow-tooltip apply-overflow-tooltip--allow-text',
                );
                var l = t.symbol.replace(e, '<strong>$&</strong>'),
                  c = n.nameContent || l;
                t.broker_symbol &&
                  (c =
                    c +
                    ' (' +
                    t.broker_symbol.replace(e, '<strong>$&</strong>') +
                    ')'),
                  (a.innerHTML = c);
                var p = document.createElement('td');
                p.setAttribute(
                  'class',
                  'symbol-edit-popup-td desc apply-overflow-tooltip',
                );
                var u = t.description.toUpperCase();
                if (w && t.contractDescription) {
                  var h = R.exec(t.contractDescription);
                  u += h
                    ? ' (' + C(i, h[1]) + ' ' + h[2] + ')'
                    : ' (' + C(i, t.contractDescription) + ')';
                }
                p.innerHTML = e.test(t.symbol)
                  ? u
                  : u.replace(e, '<strong>$&</strong>');
                var d = document.createElement('td');
                d.setAttribute(
                  'class',
                  'symbol-edit-popup-td type apply-overflow-tooltip',
                );
                var f = '';
                if (n.typeContent) f = n.typeContent;
                else {
                  t.params &&
                    ~t.params.indexOf('eod') &&
                    (f = '<i class="eod">eod</i>&nbsp;');
                  var g = t.typespecs && t.typespecs.includes('cfd'),
                    _ = r(t.type, g);
                  if (t.exchange) f += _ + (_.length ? ' - ' : '') + x(t);
                  else f += _;
                }
                d.innerHTML = f;
                var y = document.createElement('td');
                y.setAttribute(
                  'class',
                  'symbol-edit-popup-td flag apply-overflow-tooltip',
                ),
                  (y.innerHTML = m.getItemFlag(t));
                var v = y.getElementsByTagName('svg')[0];
                return (
                  v && v.setAttribute('class', 'flag'),
                  s.appendChild(a),
                  s.appendChild(p),
                  s.appendChild(d),
                  s.appendChild(y),
                  s
                );
              }),
              (m.getItemFlag = function (t) {
                return '';
              });
            var F,
              O,
              V = function (t, i, n, o) {
                !(i = s.displayedExchangesFilter(i)).some(function (t) {
                  return t.value === n;
                }) &&
                  i.length > 0 &&
                  (n = i[0].value);
                var r = $('<select>').appendTo(o);
                i.forEach(function (t) {
                  var e = t.value,
                    i = t.name || e,
                    s = t.desc || i,
                    o = $('<option>')
                      .addClass('filter-item')
                      .attr('value', e)
                      .text($.t(i))
                      .data('custom-option-text', $.t(s))
                      .appendTo(r);
                  t.value === n && o.attr('selected', !0);
                }),
                  r.change(function () {
                    var e = $(this).val() || '';
                    TVSettings.setValue('symboledit.exchangefilter', e),
                      t.setExchangeFilter(e);
                  }),
                  r.selectbox({
                    speed: 0,
                    useCustomPrependWithSelector: 'after',
                    customPrependSelectorClass: 'exchange-with-flag',
                    classHolder:
                      'tv-unstyled-select-container tv-symbol-select',
                    classOptions: e.enabled(
                      'symbol_search_three_columns_exchanges',
                    )
                      ? 'sbOptions three-column-filter'
                      : 'sbOptions',
                  });
              };
            function D(t) {
              var e = A(t, t.$filterContainer);
              return t.selectExchangeFilter(), e;
            }
            function P(t, e, i) {
              (this._container = t),
                (this._tickerRegExp = e),
                (this._translationCache = i),
                (this._exchangeNameCache = this._roots = {}),
                (this._itemsByTicker = {});
            }
            return (
              (m.showDialog = function (t) {
                t = t || {};
                if (!d.get('Symbol Search')) {
                  var e = d.createDialog('Symbol Search', {
                    hideTitle: !0,
                    hideCloseCross: !0,
                    dragHandle: '.filter',
                    width: '750px',
                    dragOptions: { cancel: '.sbOptions' },
                    content:
                      '<div class="symbol-block"><div class="spread-actions"></div><div class="symbol-block-inputspacer"><input maxlength="1000" /><div class="search-icon"></div></div></div><div class="filter"></div><div class="results"></div>',
                    ownerDocument: t.ownerDocument,
                  });
                  d.positionDialog(e);
                  var i,
                    n,
                    s,
                    o = e
                      .find('._tv-dialog-content')
                      .addClass('symbol-search-dialog'),
                    r = o.find('.results'),
                    a = o.find('input').get(0);
                  if (
                    (t.initialValue && (a.value = t.initialValue),
                    'selectionStart' in a &&
                      (a.selectionStart = a.selectionEnd = a.value.length),
                    a.focus(),
                    y())
                  )
                    t.ignoreInterval ||
                      ((n = m.getInputValueGetter(a)),
                      (s = m.getInputValueSetter(a))),
                      (i = SymbolSearchInputParserMixin.addSpreadActions(
                        o.find('.spread-actions'),
                        a,
                        n,
                        s,
                      ));
                  var l = new m({
                      input: a,
                      list: o.find('.results').get(0),
                      callback: function (e, i) {
                        t.callback && t.callback(e, i),
                          d.destroy('Symbol Search');
                      },
                      onParse: i,
                      ignoreInterval: t.ignoreInterval,
                    }),
                    c = o.find('.filter');
                  l.$filterContainer = c;
                  var p = L(l, c),
                    u = D(l);
                  return (
                    p || u || c.attr('style', 'display: none'),
                    d.resizeContent(e.height(), r),
                    d.applyHandlers(e),
                    d.positionDialog(e),
                    e.on('destroy', function () {
                      TVSettings.setValue(
                        'symboledit.dialog_last_entry',
                        a.value,
                      );
                    }),
                    e
                  );
                }
              }),
              (m.bindToInput = function (t, i) {
                (i = i || {}), (t = $(t).eq(0));
                var s,
                  o = g(),
                  r = t.prop('ownerDocument'),
                  a = i.overlapManager || f(r),
                  c = i.callback,
                  p = null,
                  h = null,
                  d = !1,
                  _ = null;
                function E() {
                  _ &&
                    (a.removeWindow(o),
                    C.removeListWrapper(),
                    _.off(),
                    _.remove(),
                    (_ = null),
                    l.hide(),
                    'function' == typeof i.onPopupClose && i.onPopupClose());
                }
                function w(t) {
                  t.preventDefault();
                }
                var I,
                  T,
                  x = i.spreadActions && $(i.spreadActions).eq(0);
                x &&
                  x.size() &&
                  y() &&
                  (i.ignoreInterval ||
                    ((I = m.getInputValueGetter(t.get(0))),
                    (T = m.getInputValueSetter(t.get(0)))),
                  (s = SymbolSearchInputParserMixin.addSpreadActions(
                    x,
                    t.get(0),
                    I,
                    T,
                  )));
                var C = new m({
                    input: t,
                    onValueChanged: function () {
                      if (!_) {
                        var t = a.ensureWindow(o, { position: 'relative' }),
                          n = (function (t, e, i) {
                            var n = $(
                                '<div class="symbol-edit-popup">',
                              ).appendTo(e),
                              s = $('<div class="filter">').appendTo(n);
                            (t.$filterContainer = s), L(t, s), D(t);
                            var o = $('<div class="table-wrapper">').appendTo(
                                n,
                              ),
                              r = $(t._inputElement),
                              a = r.offset();
                            if ('relative' === i)
                              var l = n.offset(),
                                c = Math.min(
                                  0,
                                  $(window).width() - l.left - n.outerWidth(),
                                ),
                                p = 1;
                            else
                              (c = Math.max(
                                0,
                                Math.min(
                                  a.left,
                                  $(window).width() - n.outerWidth(),
                                ),
                              )),
                                (p = a.top + r.outerHeight() + 1);
                            n.css('left', c), n.css('top', p);
                            var u = s.outerHeight(),
                              h = $(window).scrollTop(),
                              d = r.height(),
                              f =
                                (TradingView.isMobile.any()
                                  ? parseInt(window.screen.height, 10)
                                  : parseInt($(window).height(), 10)) -
                                (a.top - h) -
                                d / 2;
                            return (
                              o.css('maxHeight', f - d - u + 'px'),
                              { popup: n, listWrapper: o }
                            );
                          })(C, t, i.position);
                        (_ = n.popup),
                          C.bindListWrapper(n.listWrapper),
                          _.on('focus', w),
                          _.on('click', w),
                          _.on('mousedown', w),
                          _.on('focus', '*', w),
                          _.on('click', '*', w),
                          _.on('mousedown', '*', w),
                          'function' == typeof i.onPopupOpen &&
                            i.onPopupOpen(n.popup);
                      }
                      if (e.enabled('charting_library_base')) {
                        var s = this._state;
                        if (s.keepListFor)
                          if (s.highlightedItem) {
                            var r = s.highlightedItem,
                              l = this._getInputValue();
                            e.enabled('uppercase_instrument_names') &&
                              (l = l.toUpperCase()),
                              r.symbol !== l && delete this._state.keepListFor;
                          } else delete this._state.keepListFor;
                      }
                    },
                    callback: function (e, n) {
                      E(),
                        ('function' == typeof h && h(e, n)) ||
                          ('function' == typeof c && c(e, n),
                          'function' == typeof p && p(e, n)),
                        i.clearAfterAccept && t.val(''),
                        i.keepFocus ? t.get(0).focus() : t.get(0).blur(),
                        C.resetState();
                    },
                    hidePro: i.hidePro,
                    autoFocus: i.autoFocus,
                    onEmptyApply: i.onEmptyApply,
                    onParse: s,
                    acceptEmpty: i.acceptEmpty,
                    dontUseInputParser: i.dontUseInputParser,
                    allowMultipleSymbols: i.allowMultipleSymbols,
                    ignoreInterval: i.ignoreInterval,
                  }),
                  k = !1,
                  R = !0;
                function A(e) {
                  b(t, e), C.resetState();
                }
                if (
                  (TradingView.isMobile.iOS() &&
                    $('body').css('cursor', 'pointer'),
                  t.on('focus', function (e, i) {
                    (k = !0),
                      (d = !0),
                      C._skipAutoFocus
                        ? delete C._skipAutoFocus
                        : setTimeout(function () {
                            k && t.get(0).select();
                          }, 0);
                  }),
                  t.on('blur', function (e) {
                    var i,
                      n,
                      s,
                      o = this;
                    if (
                      _ &&
                      ((i = document.activeElement),
                      (n = _.is(i)),
                      (s = _.has(i).length > 0),
                      (-1 !== navigator.userAgent.indexOf('Trident') ||
                        -1 !== navigator.userAgent.indexOf('MSIE')) &&
                        (n || s))
                    )
                      return (
                        e.preventDefault(),
                        e.stopImmediatePropagation(),
                        void setTimeout(function () {
                          t.focus();
                        }, 0)
                      );
                    if (
                      (TradingView.isMobile.iOS() && R && ((R = !1), (k = !0)),
                      TradingView.isMobile.iOS() &&
                        k &&
                        null === e.relatedTarget)
                    ) {
                      var r = function (t) {
                        $(t.target).closest(_).length ||
                          ($(o).is($(t.target))
                            ? $(document).off('touchend', 'body', r)
                            : ((k = !1),
                              setTimeout(function () {
                                E(), $(document).off('touchend', 'body', r);
                              }, 0)));
                      };
                      $(document).on('touchend', 'body', r);
                    } else k = !1;
                    setTimeout(function () {
                      k || E();
                    }, 0);
                  }),
                  i.syncWithChartWidget)
                ) {
                  A(!0),
                    n.seriesShortSymbol.subscribe(function () {
                      A(!0);
                    }),
                    (p = function (t, e) {
                      (d = !(t || e)), t && n.symbol.setValue(t), e && S(e);
                    }),
                    (h = v),
                    i.syncOnBlur &&
                      t.on('blur', function () {
                        d && (A(!0), (d = !1));
                      });
                  var F = function () {
                    t.get(0).blur(), A(!1);
                  };
                  t.on('keypress', function (t) {
                    t.keyCode === u.ESC && F();
                  }),
                    t.on('keydown', function (t) {
                      t.keyCode === u.ESC && F();
                    });
                }
                return C;
              }),
              (P.isRoot = function (t) {
                return !(!t || !Array.isArray(t.contracts));
              }),
              (P.itemTicker = function (t) {
                var e = P.isRoot(t);
                return (t.ticker || t.full_name) + (e ? '___root' : '');
              }),
              (P.prototype.addRoot = function (t, e) {
                this._currentTbody = null;
                var i = document.createElement('tbody');
                this._container.appendChild(i);
                var n = this;
                e.addEventListener('click', function (i) {
                  i.preventDefault(),
                    e.classList.contains('collapsed')
                      ? n.expand(t)
                      : n.collapse(t);
                }),
                  e.setAttribute('data-root', t),
                  i.appendChild(e),
                  (this._roots[t] = { titleRow: e, tbody: i });
              }),
              (P.prototype.append = function (t) {
                var e = null,
                  i = null;
                if (P.isRoot(t)) {
                  var n = t.symbol,
                    s = (t.exchange || 'unknown') + '_' + n;
                  (e = m.createSuggestListRow(
                    t,
                    this._tickerRegExp,
                    this._translationCache,
                    {
                      nameContent:
                        '<div>' +
                        n.replace(this._tickerRegExp, '<strong>$&</strong>') +
                        '</div>',
                      typeContent:
                        C(this._translationCache, t.type) +
                        (t.exchange && ' - ' + x(t)),
                      addClass: 'group-title',
                    },
                  )),
                    this._roots[s] || this.addRoot(s, e);
                  for (var o, r, a = 0; a < t.contracts.length; ++a)
                    (o = t.contracts[a]),
                      (r = m.createSuggestListRow(
                        o,
                        this._tickerRegExp,
                        this._translationCache,
                      )),
                      (i = o.ticker || o.full_name),
                      (this._itemsByTicker[i] = o),
                      r.setAttribute('data-item-ticker', i),
                      this._roots[s].tbody.appendChild(r);
                } else
                  this._currentTbody ||
                    ((this._currentTbody = document.createElement('tbody')),
                    this._container.appendChild(this._currentTbody)),
                    (e = m.createSuggestListRow(
                      t,
                      this._tickerRegExp,
                      this._translationCache,
                    )),
                    this._currentTbody.appendChild(e);
                (i = P.itemTicker(t)),
                  (this._itemsByTicker[i] = t),
                  e.setAttribute('data-item-ticker', i);
              }),
              (P.prototype.toggleCollapsed = function (t, e) {
                if (t) {
                  var i = this._roots[t];
                  i &&
                    ($(i.titleRow).toggleClass('collapsed', !!e),
                    $(i.tbody)
                      .find('tr:not(.group-title)')
                      .toggleClass('hidden', !!e));
                } else for (var t in this._roots) this.toggleCollapsed(t, e);
              }),
              (P.prototype.collapse = function (t) {
                this.toggleCollapsed(t, !0);
              }),
              (P.prototype.expand = function (t) {
                this.toggleCollapsed(t, !1);
              }),
              (P.prototype.getItemByTicker = function (t) {
                return this._itemsByTicker[t] || null;
              }),
              (m.GroupListHandler = P),
              (m.detachInterval = function (t) {
                var e = /,[^,]*$/i.exec(t) || [];
                if (e[0])
                  return {
                    rest: t.substr(0, t.length - e[0].length),
                    detached: e[0],
                  };
              }),
              (F = ''),
              (O = null),
              (m.resetStoredInterval = function () {
                (F = ''), (O = null);
              }),
              (m.detachStoreInterval = function (t) {
                var e = m.detachInterval(t);
                return e
                  ? ((F = e.detached), (O = _.normalize(F)), e.rest)
                  : (m.resetStoredInterval(), t);
              }),
              (m.recallAttachInterval = function (t) {
                return t + F;
              }),
              (m.getInterval = function (t) {
                var e = O;
                return !0 === t && m.resetStoredInterval(), e;
              }),
              (m.getInputValueGetter = function (t) {
                return function () {
                  return m.detachStoreInterval(t.value);
                };
              }),
              (m.getInputValueSetter = function (t) {
                return function (e) {
                  t.value = m.recallAttachInterval(e);
                };
              }),
              (m.intervalError = function () {
                return !(!F || /^,\s*$/.test(F) || O);
              }),
              m
            );
          })();
        t.exports = L;
      }.call(this, i('Kxc7')));
    },
    qdOW: function (t, e, i) {
      'use strict';
      var n = i('Kxc7');
      (t.exports.displayedExchangesFilter = function (t) {
        return (
          n.enabled('symbol_search_limited_exchanges') &&
            (t = t.filter(function (t) {
              return !('bitcoin' === t.flag || t.hideInSymbolSearch);
            })),
          t
        );
      }),
        (t.exports.sortExchangesListByFlagIfNeeded = function (t) {
          return t;
        });
    },
    w3Pp: function (t, e, i) {
      'use strict';
      i.r(e),
        i.d(e, 'marketType', function () {
          return r;
        });
      i('YFKU'), i('HbRj');
      var n = new Map(),
        s = { context: 'market_type' },
        o = {
          cfd: window.t('cfd', s),
          bitcoin: window.t('crypto', s),
          crypto: window.t('crypto', s),
          dr: window.t('dr', s),
          forex: window.t('forex', s),
          futures: window.t('futures', s),
          index: window.t('index', s),
          stock: window.t('stock', s),
        };
      function r(t, e) {
        var i = t + '_' + e,
          r = n.get(i);
        if (void 0 !== r) return r;
        var a = e
          ? window.t('{market_type} cfd', s).format({ market_type: t })
          : o[t] || t;
        return n.set(i, a), a;
      }
    },
  },
]);
