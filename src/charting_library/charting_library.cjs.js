'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 });
var t = function () {
  return (t =
    Object.assign ||
    function (t) {
      for (var e, o = arguments, n = 1, i = arguments.length; n < i; n++)
        for (var r in (e = o[n]))
          Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      return t;
    }).apply(this, arguments);
};
function e(o, n) {
  var i = t({}, o);
  for (var r in n)
    'object' != typeof o[r] || null === o[r] || Array.isArray(o[r])
      ? void 0 !== n[r] && (i[r] = n[r])
      : (i[r] = e(o[r], n[r]));
  return i;
}
var o = {
    mobile: {
      disabled_features: [
        'left_toolbar',
        'header_widget',
        'timeframes_toolbar',
        'edit_buttons_in_legend',
        'context_menus',
        'control_bar',
        'border_around_the_chart',
      ],
      enabled_features: [],
    },
  },
  n = {
    width: 800,
    height: 500,
    interval: '1D',
    timezone: 'Etc/UTC',
    container_id: '',
    library_path: '',
    locale: 'en',
    widgetbar: {
      details: !1,
      watchlist: !1,
      watchlist_settings: { default_symbols: [] },
    },
    overrides: { 'mainSeriesProperties.showCountdown': !1 },
    studies_overrides: {},
    trading_customization: { position: {}, order: {} },
    brokerConfig: { configFlags: {} },
    fullscreen: !1,
    autosize: !1,
    disabled_features: [],
    enabled_features: [],
    debug: !1,
    logo: {},
    time_frames: [
      { text: '5y', resolution: '1W' },
      { text: '1y', resolution: '1W' },
      { text: '6m', resolution: '120' },
      { text: '3m', resolution: '60' },
      { text: '1m', resolution: '30' },
      { text: '5d', resolution: '5' },
      { text: '1d', resolution: '1' },
    ],
    client_id: '0',
    user_id: '0',
    charts_storage_api_version: '1.0',
    favorites: { intervals: [], chartTypes: [] },
  };
function i() {
  return 'CL v18.044 (internal id c3634edc @ 2021-05-26T15:08:09.279Z)';
}
var r = (function () {
  function t(t) {
    if (
      ((this._id =
        'tradingview_' +
        ((1048576 * (1 + Math.random())) | 0).toString(16).substring(1)),
      (this._ready = !1),
      (this._readyHandlers = []),
      (this._onWindowResize = this._autoResizeChart.bind(this)),
      !t.datafeed)
    )
      throw new Error('Datafeed is not defined');
    if (((this._options = e(n, t)), t.preset)) {
      var i = o[t.preset];
      i
        ? (void 0 !== this._options.disabled_features
            ? (this._options.disabled_features = this._options.disabled_features.concat(
                i.disabled_features,
              ))
            : (this._options.disabled_features = i.disabled_features),
          void 0 !== this._options.enabled_features
            ? (this._options.enabled_features = this._options.enabled_features.concat(
                i.enabled_features,
              ))
            : (this._options.enabled_features = i.enabled_features))
        : console.warn('Unknown preset: `' + t.preset + '`');
    }
    'Dark' === this._options.theme &&
      void 0 === this._options.loading_screen &&
      (this._options.loading_screen = { backgroundColor: '#131722' }),
      this._create();
  }
  return (
    (t.prototype.onChartReady = function (t) {
      this._ready ? t.call(this) : this._readyHandlers.push(t);
    }),
    (t.prototype.headerReady = function () {
      var t = this;
      return this._innerWindowLoaded.then(function () {
        return t._innerWindow().headerReady();
      });
    }),
    (t.prototype.onGrayedObjectClicked = function (t) {
      this._innerAPI().onGrayedObjectClicked(t);
    }),
    (t.prototype.onShortcut = function (t, e) {
      this._innerWindow().createShortcutAction(t, e);
    }),
    (t.prototype.subscribe = function (t, e) {
      this._innerAPI().subscribe(t, e);
    }),
    (t.prototype.unsubscribe = function (t, e) {
      this._innerAPI().unsubscribe(t, e);
    }),
    (t.prototype.chart = function (t) {
      return this._innerAPI().chart(t);
    }),
    (t.prototype.getLanguage = function () {
      return this._options.locale;
    }),
    (t.prototype.setSymbol = function (t, e, o) {
      this._innerAPI().changeSymbol(t, e, o);
    }),
    (t.prototype.remove = function () {
      window.removeEventListener('resize', this._onWindowResize),
        this._readyHandlers.splice(0, this._readyHandlers.length),
        delete window[this._id],
        this._iFrame.parentNode &&
          this._iFrame.parentNode.removeChild(this._iFrame);
    }),
    (t.prototype.closePopupsAndDialogs = function () {
      this._innerAPI().closePopupsAndDialogs();
    }),
    (t.prototype.selectLineTool = function (t) {
      this._innerAPI().selectLineTool(t);
    }),
    (t.prototype.selectedLineTool = function () {
      return this._innerAPI().selectedLineTool();
    }),
    (t.prototype.save = function (t) {
      this._innerAPI().saveChart(t);
    }),
    (t.prototype.load = function (t, e) {
      this._innerAPI().loadChart({ json: t, extendedData: e });
    }),
    (t.prototype.getSavedCharts = function (t) {
      this._innerAPI().getSavedCharts(t);
    }),
    (t.prototype.loadChartFromServer = function (t) {
      this._innerAPI().loadChartFromServer(t);
    }),
    (t.prototype.saveChartToServer = function (t, e, o) {
      this._innerAPI().saveChartToServer(t, e, o);
    }),
    (t.prototype.removeChartFromServer = function (t, e) {
      this._innerAPI().removeChartFromServer(t, e);
    }),
    (t.prototype.onContextMenu = function (t) {
      this._innerAPI().onContextMenu(t);
    }),
    (t.prototype.createButton = function (t) {
      return this._innerWindow().createButton(t);
    }),
    (t.prototype.showNoticeDialog = function (t) {
      this._innerAPI().showNoticeDialog(t);
    }),
    (t.prototype.showConfirmDialog = function (t) {
      this._innerAPI().showConfirmDialog(t);
    }),
    (t.prototype.showLoadChartDialog = function () {
      this._innerAPI().showLoadChartDialog();
    }),
    (t.prototype.showSaveAsChartDialog = function () {
      this._innerAPI().showSaveAsChartDialog();
    }),
    (t.prototype.symbolInterval = function () {
      return this._innerAPI().getSymbolInterval();
    }),
    (t.prototype.mainSeriesPriceFormatter = function () {
      return this._innerAPI().mainSeriesPriceFormatter();
    }),
    (t.prototype.getIntervals = function () {
      return this._innerAPI().getIntervals();
    }),
    (t.prototype.getStudiesList = function () {
      return this._innerAPI().getStudiesList();
    }),
    (t.prototype.addCustomCSSFile = function (t) {
      this._innerWindow().addCustomCSSFile(t);
    }),
    (t.prototype.applyOverrides = function (t) {
      (this._options = e(this._options, { overrides: t })),
        this._innerWindow().applyOverrides(t);
    }),
    (t.prototype.applyStudiesOverrides = function (t) {
      this._innerWindow().applyStudiesOverrides(t);
    }),
    (t.prototype.watchList = function () {
      return this._innerAPI().watchlist();
    }),
    (t.prototype.activeChart = function () {
      return this._innerAPI().activeChart();
    }),
    (t.prototype.chartsCount = function () {
      return this._innerAPI().chartsCount();
    }),
    (t.prototype.layout = function () {
      return this._innerAPI().layout();
    }),
    (t.prototype.setLayout = function (t) {
      this._innerAPI().setLayout(t);
    }),
    (t.prototype.layoutName = function () {
      return this._innerAPI().layoutName();
    }),
    (t.prototype.changeTheme = function (t, e) {
      this._innerWindow().changeTheme(t, e);
    }),
    (t.prototype.getTheme = function () {
      return this._innerWindow().getTheme();
    }),
    (t.prototype.takeScreenshot = function () {
      this._innerAPI().takeScreenshot();
    }),
    (t.prototype.lockAllDrawingTools = function () {
      return this._innerAPI().lockAllDrawingTools();
    }),
    (t.prototype.hideAllDrawingTools = function () {
      return this._innerAPI().hideAllDrawingTools();
    }),
    (t.prototype.drawOnAllCharts = function (t) {
      this._innerAPI().drawOnAllCharts(t);
    }),
    (t.prototype.magnetEnabled = function () {
      return this._innerAPI().magnetEnabled();
    }),
    (t.prototype.magnetMode = function () {
      return this._innerAPI().magnetMode();
    }),
    (t.prototype.undoRedoState = function () {
      return this._innerAPI().undoRedoState();
    }),
    (t.prototype.setIntervalLinkingEnabled = function (t) {
      this._innerAPI().setIntervalLinkingEnabled(t);
    }),
    (t.prototype.setTimeFrame = function (t) {
      this._innerAPI().setTimeFrame(t);
    }),
    (t.prototype.symbolSync = function () {
      return this._innerAPI().symbolSync();
    }),
    (t.prototype.intervalSync = function () {
      return this._innerAPI().intervalSync();
    }),
    (t.prototype.crosshairSync = function () {
      return this._innerAPI().crosshairSync();
    }),
    (t.prototype.timeSync = function () {
      return this._innerAPI().timeSync();
    }),
    (t.prototype.getAllFeatures = function () {
      return this._innerWindow().getAllFeatures();
    }),
    (t.prototype.clearUndoHistory = function () {
      return this._innerAPI().clearUndoHistory();
    }),
    (t.prototype.undo = function () {
      return this._innerAPI().undo();
    }),
    (t.prototype.redo = function () {
      return this._innerAPI().redo();
    }),
    (t.prototype.startFullscreen = function () {
      this._innerAPI().startFullscreen();
    }),
    (t.prototype.exitFullscreen = function () {
      this._innerAPI().exitFullscreen();
    }),
    (t.prototype.takeClientScreenshot = function (t) {
      return this._innerAPI().takeClientScreenshot(t);
    }),
    (t.prototype._innerAPI = function () {
      return this._innerWindow().tradingViewApi;
    }),
    (t.prototype._innerWindow = function () {
      return this._iFrame.contentWindow;
    }),
    (t.prototype._autoResizeChart = function () {
      this._options.fullscreen &&
        (this._iFrame.style.height = window.innerHeight + 'px');
    }),
    (t.prototype._create = function () {
      var t = this,
        e = this._render(),
        o = document.getElementById(this._options.container_id);
      if (null === o)
        throw new Error(
          'There is no such element - #' + this._options.container_id,
        );
      (o.innerHTML = e), (this._iFrame = o.querySelector('#' + this._id));
      var n = this._iFrame;
      (this._options.autosize || this._options.fullscreen) &&
        ((n.style.width = '100%'),
        this._options.fullscreen || (n.style.height = '100%')),
        window.addEventListener('resize', this._onWindowResize),
        this._onWindowResize(),
        (this._innerWindowLoaded = new Promise(function (t) {
          var e = function () {
            n.removeEventListener('load', e, !1), t();
          };
          n.addEventListener('load', e, !1);
        })),
        this._innerWindowLoaded.then(function () {
          t._innerWindow().widgetReady(function () {
            t._ready = !0;
            for (var e = 0, o = t._readyHandlers; e < o.length; e++) {
              var n = o[e];
              try {
                n.call(t);
              } catch (i) {
                console.error(i);
              }
            }
            t._innerWindow().initializationFinished();
          });
        });
    }),
    (t.prototype._render = function () {
      var t = window;
      if (
        ((t[this._id] = {
          datafeed: this._options.datafeed,
          customFormatters:
            this._options.custom_formatters || this._options.customFormatters,
          brokerFactory:
            this._options.broker_factory || this._options.brokerFactory,
          overrides: this._options.overrides,
          studiesOverrides: this._options.studies_overrides,
          tradingCustomization: this._options.trading_customization,
          disabledFeatures: this._options.disabled_features,
          enabledFeatures: this._options.enabled_features,
          brokerConfig:
            this._options.broker_config || this._options.brokerConfig,
          restConfig: this._options.restConfig,
          favorites: this._options.favorites,
          logo: this._options.logo,
          numeric_formatting: this._options.numeric_formatting,
          rss_news_feed: this._options.rss_news_feed,
          newsProvider: this._options.news_provider,
          loadLastChart: this._options.load_last_chart,
          saveLoadAdapter: this._options.save_load_adapter,
          loading_screen: this._options.loading_screen,
          settingsAdapter: this._options.settings_adapter,
          getCustomIndicators: this._options.custom_indicators_getter,
        }),
        this._options.saved_data)
      )
        (t[this._id].chartContent = { json: this._options.saved_data }),
          this._options.saved_data_meta_info &&
            (t[
              this._id
            ].chartContentExtendedData = this._options.saved_data_meta_info);
      else if (!this._options.load_last_chart && !this._options.symbol)
        throw new Error(
          "Symbol is not defined: either 'symbol' or 'load_last_chart' option must be set",
        );
      var e =
        (this._options.library_path || '') +
        (encodeURIComponent(this._options.locale) +
          '-tv-chart.c3634edc.html#symbol=') +
        encodeURIComponent(this._options.symbol || '') +
        '&interval=' +
        encodeURIComponent(this._options.interval) +
        (this._options.timeframe
          ? '&timeframe=' + encodeURIComponent(this._options.timeframe)
          : '') +
        (this._options.toolbar_bg
          ? '&toolbarbg=' +
            encodeURIComponent(this._options.toolbar_bg.replace('#', ''))
          : '') +
        (this._options.studies_access
          ? '&studiesAccess=' +
            encodeURIComponent(JSON.stringify(this._options.studies_access))
          : '') +
        '&widgetbar=' +
        encodeURIComponent(JSON.stringify(this._options.widgetbar)) +
        (this._options.drawings_access
          ? '&drawingsAccess=' +
            encodeURIComponent(JSON.stringify(this._options.drawings_access))
          : '') +
        '&timeFrames=' +
        encodeURIComponent(JSON.stringify(this._options.time_frames)) +
        '&locale=' +
        encodeURIComponent(this._options.locale) +
        '&uid=' +
        encodeURIComponent(this._id) +
        '&clientId=' +
        encodeURIComponent(String(this._options.client_id)) +
        '&userId=' +
        encodeURIComponent(String(this._options.user_id)) +
        (this._options.charts_storage_url
          ? '&chartsStorageUrl=' +
            encodeURIComponent(this._options.charts_storage_url)
          : '') +
        (this._options.charts_storage_api_version
          ? '&chartsStorageVer=' +
            encodeURIComponent(this._options.charts_storage_api_version)
          : '') +
        (this._options.custom_css_url
          ? '&customCSS=' + encodeURIComponent(this._options.custom_css_url)
          : '') +
        (this._options.auto_save_delay
          ? '&autoSaveDelay=' +
            encodeURIComponent(String(this._options.auto_save_delay))
          : '') +
        '&debug=' +
        encodeURIComponent(String(this._options.debug)) +
        (this._options.snapshot_url
          ? '&snapshotUrl=' + encodeURIComponent(this._options.snapshot_url)
          : '') +
        (this._options.timezone
          ? '&timezone=' + encodeURIComponent(this._options.timezone)
          : '') +
        (this._options.study_count_limit
          ? '&studyCountLimit=' +
            encodeURIComponent(String(this._options.study_count_limit))
          : '') +
        (this._options.symbol_search_request_delay
          ? '&ssreqdelay=' +
            encodeURIComponent(
              String(this._options.symbol_search_request_delay),
            )
          : '') +
        (this._options.compare_symbols
          ? '&compareSymbols=' +
            encodeURIComponent(JSON.stringify(this._options.compare_symbols))
          : '') +
        (this._options.theme
          ? '&theme=' + encodeURIComponent(String(this._options.theme))
          : '');
      return (
        '<iframe id="' +
        this._id +
        '" name="' +
        this._id +
        '"  src="' +
        e +
        '"' +
        (this._options.autosize || this._options.fullscreen
          ? ''
          : ' width="' +
            this._options.width +
            '" height="' +
            this._options.height +
            '"') +
        ' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'
      );
    }),
    t
  );
})();
(window.TradingView = window.TradingView || {}),
  (window.TradingView.version = i),
  (exports.version = i),
  (exports.widget = r);
