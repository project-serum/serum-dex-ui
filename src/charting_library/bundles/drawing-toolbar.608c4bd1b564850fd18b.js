(window.webpackJsonp = window.webpackJsonp || []).push([
  ['drawing-toolbar'],
  {
    '/KDZ': function (e, t, o) {
      'use strict';
      o.d(t, 'a', function () {
        return a;
      });
      var n = o('mrSG'),
        i = o('q1tI'),
        a = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            return (
              (o._handleChange = function () {
                o.forceUpdate();
              }),
              (o.state = { query: window.matchMedia(o.props.rule) }),
              o
            );
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              this._subscribe(this.state.query);
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              this.state.query !== t.query &&
                (this._unsubscribe(t.query), this._subscribe(this.state.query));
            }),
            (t.prototype.componentWillUnmount = function () {
              this._unsubscribe(this.state.query);
            }),
            (t.prototype.render = function () {
              return this.props.children(this.state.query.matches);
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.rule !== t.query.media
                ? { query: window.matchMedia(e.rule) }
                : null;
            }),
            (t.prototype._subscribe = function (e) {
              e.addListener(this._handleChange);
            }),
            (t.prototype._unsubscribe = function (e) {
              e.removeListener(this._handleChange);
            }),
            t
          );
        })(i.PureComponent);
    },
    '11r7': function (e, t, o) {
      e.exports = { item: 'item-19VSB8co', label: 'label-1NuMQGIE' };
    },
    '1TxM': function (e, t, o) {
      'use strict';
      o.d(t, 'c', function () {
        return s;
      }),
        o.d(t, 'a', function () {
          return c;
        }),
        o.d(t, 'b', function () {
          return u;
        });
      var n = o('q1tI'),
        i = o.n(n),
        a = o('17x9'),
        r = o.n(a),
        l = i.a.createContext({});
      function s(e, t) {
        r.a.checkPropTypes(t, e, 'context', 'RegistryContext');
      }
      function c(e) {
        var t = e.validation,
          o = e.value;
        return s(o, t), i.a.createElement(l.Provider, { value: o }, e.children);
      }
      function u() {
        return l;
      }
    },
    '5f7t': function (e, t, o) {
      'use strict';
      o.r(t);
      var n = o('mrSG'),
        i = o('q1tI'),
        a = o.n(i),
        r = o('i8i4'),
        l = o('Eyy1'),
        s = (o('YFKU'), o('bf9a'), o('TSYQ')),
        c = o.n(s),
        u = o('Vdly'),
        d = o('Kxc7'),
        p = o('mMWL'),
        m = o('zL3Q'),
        h = o('FQhm'),
        b = o('aIyQ'),
        v = o.n(b),
        f = o('qFKp'),
        g = (o('mNbo'), o('MP+M')),
        _ = (function () {
          function e(e) {
            this._drawingsAccess = e || { tools: [], type: 'black' };
          }
          return (
            (e.prototype.isToolEnabled = function (e) {
              var t = this._findTool(e);
              return (
                !(!t || !t.grayed) ||
                ('black' === this._drawingsAccess.type ? !t : !!t)
              );
            }),
            (e.prototype.isToolGrayed = function (e) {
              var t = this._findTool(e);
              return Boolean(t && t.grayed);
            }),
            (e.prototype._findTool = function (e) {
              return this._drawingsAccess.tools.find(function (t) {
                return t.name === e;
              });
            }),
            e
          );
        })(),
        w = o('/3z9'),
        y = o('+GxX'),
        T = [
          {
            id: 'linetool-group-cursors',
            title: window.t('Cursors'),
            items: [
              { name: 'cursor' },
              { name: 'dot' },
              { name: 'arrow' },
              { name: 'eraser' },
            ],
          },
          {
            id: 'linetool-group-trend-line',
            title: window.t('Trend Line Tools'),
            items: [
              { name: 'LineToolTrendLine', hotkeyHash: w.Modifiers.Alt + 84 },
              { name: 'LineToolInfoLine' },
              { name: 'LineToolTrendAngle' },
              null,
              { name: 'LineToolHorzLine', hotkeyHash: w.Modifiers.Alt + 72 },
              { name: 'LineToolHorzRay' },
              { name: 'LineToolVertLine', hotkeyHash: w.Modifiers.Alt + 86 },
              { name: 'LineToolCrossLine', hotkeyHash: w.Modifiers.Alt + 67 },
              { name: 'LineToolArrow' },
              { name: 'LineToolRay' },
              { name: 'LineToolExtended' },
              { name: 'LineToolParallelChannel' },
              { name: 'LineToolDisjointAngle' },
              { name: 'LineToolFlatBottom' },
              null,
            ].filter(Boolean),
          },
          {
            id: 'linetool-group-gann-and-fibonacci',
            title: window.t('Gann and Fibonacci Tools'),
            items: [
              { name: 'LineToolPitchfork' },
              { name: 'LineToolSchiffPitchfork2' },
              {
                name: 'LineToolSchiffPitchfork',
              },
              { name: 'LineToolInsidePitchfork' },
              { name: 'LineToolPitchfan' },
              { name: 'LineToolGannSquare' },
              { name: 'LineToolGannComplex' },
              { name: 'LineToolGannFixed' },
              { name: 'LineToolGannFan' },
              {
                name: 'LineToolFibRetracement',
                hotkeyHash: w.Modifiers.Alt + 70,
              },
              { name: 'LineToolTrendBasedFibExtension' },
              { name: 'LineToolFibSpeedResistanceFan' },
              { name: 'LineToolFibTimeZone' },
              { name: 'LineToolTrendBasedFibTime' },
              { name: 'LineToolFibCircles' },
              { name: 'LineToolFibSpiral' },
              { name: 'LineToolFibSpeedResistanceArcs' },
              { name: 'LineToolFibWedge' },
              { name: 'LineToolFibChannel' },
            ],
          },
          {
            id: 'linetool-group-geometric-shapes',
            title: window.t('Geometric Shapes'),
            items: [
              { name: 'LineToolBrush' },
              { name: 'LineToolRectangle' },
              { name: 'LineToolRotatedRectangle' },
              { name: 'LineToolEllipse' },
              { name: 'LineToolTriangle' },
              { name: 'LineToolPolyline' },
              { name: 'LineToolBezierQuadro' },
              { name: 'LineToolBezierCubic' },
              { name: 'LineToolArc' },
            ],
          },
          {
            id: 'linetool-group-annotation',
            title: window.t('Annotation Tools'),
            items: [
              { name: 'LineToolText' },
              { name: 'LineToolTextAbsolute' },
              { name: 'LineToolNote' },
              { name: 'LineToolNoteAbsolute' },
              { name: 'LineToolCallout' },
              { name: 'LineToolBalloon' },
              { name: 'LineToolPriceLabel' },
              { name: 'LineToolArrowMarker' },
              { name: 'LineToolArrowMarkLeft' },
              { name: 'LineToolArrowMarkRight' },
              { name: 'LineToolArrowMarkUp' },
              { name: 'LineToolArrowMarkDown' },
              { name: 'LineToolFlagMark' },
            ],
          },
          {
            id: 'linetool-group-patterns',
            title: window.t('Patterns'),
            items: [
              { name: 'LineTool5PointsPattern' },
              { name: 'LineToolCypherPattern' },
              { name: 'LineToolABCD' },
              { name: 'LineToolTrianglePattern' },
              { name: 'LineToolThreeDrivers' },
              { name: 'LineToolHeadAndShoulders' },
              { name: 'LineToolElliottImpulse' },
              { name: 'LineToolElliottTriangle' },
              { name: 'LineToolElliottTripleCombo' },
              { name: 'LineToolElliottCorrection' },
              { name: 'LineToolElliottDoubleCombo' },
              { name: 'LineToolCircleLines' },
              { name: 'LineToolTimeCycles' },
              { name: 'LineToolSineLine' },
            ],
          },
          {
            id: 'linetool-group-prediction-and-measurement',
            title: window.t('Prediction and Measurement Tools'),
            items: [
              { name: 'LineToolRiskRewardLong' },
              { name: 'LineToolRiskRewardShort' },
              { name: 'LineToolPrediction' },
              { name: 'LineToolDateRange' },
              { name: 'LineToolPriceRange' },
              { name: 'LineToolDateAndPriceRange' },
              { name: 'LineToolBarsPattern' },
              Object(y.isFeatureEnabled)('remove-line-tool-ghost-feed')
                ? null
                : { name: 'LineToolGhostFeed' },
              { name: 'LineToolProjection' },
            ].filter(Boolean),
          },
        ],
        C = o('OiSa'),
        k = o('XmVn'),
        S = o('Iivm'),
        O = o('beCu'),
        E = o('j1f4'),
        M = o('uJ8n'),
        D = o('Vike'),
        N = { isVisibleScrollbar: !0 },
        L = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            return (
              (o._scroll = null),
              (o._handleScrollTop = function () {
                o.animateTo(
                  Math.max(0, o.currentPosition() - (o.state.heightWrap - 50)),
                );
              }),
              (o._handleScrollBot = function () {
                o.animateTo(
                  Math.min(
                    (o.state.heightContent || 0) - (o.state.heightWrap || 0),
                    o.currentPosition() + (o.state.heightWrap - 50),
                  ),
                );
              }),
              (o._handleResizeWrap = function (e) {
                var t = e.height;
                o.setState({ heightWrap: t });
              }),
              (o._handleResizeContent = function (e) {
                var t = e.height;
                o.setState({ heightContent: t });
              }),
              (o._handleScroll = function () {
                var e = o.props.onScroll;
                e && e(o.currentPosition(), o.isAtTop(), o.isAtBot()),
                  o._checkButtonsVisibility();
              }),
              (o._checkButtonsVisibility = function () {
                var e = o.state,
                  t = e.isVisibleTopButton,
                  n = e.isVisibleBotButton,
                  i = o.isAtTop(),
                  a = o.isAtBot();
                i || t
                  ? i && t && o.setState({ isVisibleTopButton: !1 })
                  : o.setState({ isVisibleTopButton: !0 }),
                  a || n
                    ? a && n && o.setState({ isVisibleBotButton: !1 })
                    : o.setState({ isVisibleBotButton: !0 });
              }),
              (o.state = {
                heightContent: 0,
                heightWrap: 0,
                isVisibleBotButton: !1,
                isVisibleTopButton: !1,
              }),
              o
            );
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              this._checkButtonsVisibility();
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              (t.heightWrap === this.state.heightWrap &&
                t.heightContent === this.state.heightContent) ||
                this._handleScroll();
            }),
            (t.prototype.currentPosition = function () {
              return this._scroll ? this._scroll.scrollTop : 0;
            }),
            (t.prototype.isAtTop = function () {
              return this.currentPosition() <= 1;
            }),
            (t.prototype.isAtBot = function () {
              return (
                this.currentPosition() + this.state.heightWrap >=
                this.state.heightContent - 1
              );
            }),
            (t.prototype.animateTo = function (e, t) {
              void 0 === t && (t = E.dur);
              var o = this._scroll;
              o &&
                Object(O.doAnimate)({
                  onStep: function (e, t) {
                    o.scrollTop = t;
                  },
                  from: o.scrollTop,
                  to: Math.round(e),
                  easing: E.easingFunc.easeInOutCubic,
                  duration: t,
                });
            }),
            (t.prototype.render = function () {
              var e,
                t,
                o,
                n,
                i,
                r = this,
                l = this.props,
                s = l.children,
                u = l.isVisibleScrollbar,
                d = l.isVisibleFade,
                p = l.isVisibleButtons,
                m = l.onMouseOver,
                h = l.onMouseOut,
                b = this.state,
                v = b.heightContent,
                f = b.heightWrap,
                g = b.isVisibleBotButton,
                _ = b.isVisibleTopButton;
              return a.a.createElement(
                k,
                { whitelist: ['height'], onMeasure: this._handleResizeWrap },
                a.a.createElement(
                  'div',
                  { className: M.wrap, onMouseOver: m, onMouseOut: h },
                  a.a.createElement(
                    'div',
                    {
                      className: c()(
                        M.scrollWrap,
                        ((e = {}), (e[M.noScrollBar] = !u), e),
                      ),
                      onScroll: this._handleScroll,
                      ref: function (e) {
                        return (r._scroll = e);
                      },
                    },
                    a.a.createElement(
                      k,
                      {
                        onMeasure: this._handleResizeContent,
                        whitelist: ['height'],
                      },
                      a.a.createElement('div', { className: M.content }, s),
                    ),
                  ),
                  d &&
                    a.a.createElement('div', {
                      className: c()(
                        M.fadeTop,
                        ((t = {}), (t[M.isVisible] = _ && v > f), t),
                      ),
                    }),
                  d &&
                    a.a.createElement('div', {
                      className: c()(
                        M.fadeBot,
                        ((o = {}), (o[M.isVisible] = g && v > f), o),
                      ),
                    }),
                  p &&
                    a.a.createElement(
                      'div',
                      {
                        className: c()(
                          M.scrollTop,
                          ((n = {}), (n[M.isVisible] = _ && v > f), n),
                        ),
                        onClick: this._handleScrollTop,
                      },
                      a.a.createElement(
                        'div',
                        { className: M.iconWrap },
                        a.a.createElement(S.Icon, {
                          icon: D,
                          className: M.icon,
                        }),
                      ),
                    ),
                  p &&
                    a.a.createElement(
                      'div',
                      {
                        className: c()(
                          M.scrollBot,
                          ((i = {}), (i[M.isVisible] = g && v > f), i),
                        ),
                        onClick: this._handleScrollBot,
                      },
                      a.a.createElement(
                        'div',
                        { className: M.iconWrap },
                        a.a.createElement(S.Icon, {
                          icon: D,
                          className: M.icon,
                        }),
                      ),
                    ),
                ),
              );
            }),
            (t.defaultProps = N),
            t
          );
        })(a.a.PureComponent),
        j = o('lxNp'),
        A = o('tWVy'),
        x = o('wZIs'),
        B = [
          61536,
          61537,
          61538,
          61539,
          61725,
          61726,
          61575,
          61576,
          61796,
          61797,
          61779,
          61780,
          61781,
          61782,
          61783,
          61784,
          61785,
          61786,
          61440,
          61441,
          61442,
          61444,
          61445,
          61446,
          61447,
          61448,
          61452,
          61453,
          61454,
          61456,
          61457,
          61458,
          61459,
          61460,
          61461,
          61463,
          61464,
          61466,
          61467,
          61469,
          61470,
          61473,
          61475,
          61476,
          61488,
          61502,
          61504,
          61505,
          61507,
          61510,
          61523,
          61524,
          61525,
          61526,
          61527,
          61528,
          61529,
          61530,
          61531,
          61532,
          61533,
          61534,
          61540,
          61541,
          61542,
          61543,
          61544,
          61545,
          61546,
          61547,
          61548,
          61550,
          61552,
          61553,
          61554,
          61555,
          61557,
          61558,
          61559,
          61560,
          61565,
          61566,
          61568,
          61572,
          61574,
          61578,
          61588,
          61597,
          61601,
          61602,
          61603,
          61604,
          61605,
          61606,
          61607,
          61608,
          61609,
          61610,
          61611,
          61616,
          61617,
          61635,
          61648,
          61649,
          61654,
          61655,
          61656,
          61657,
          61658,
          61659,
          61666,
          61667,
          61669,
          61670,
          61671,
          61672,
          61673,
          61675,
          61681,
          61682,
          61683,
          61684,
          61696,
          61697,
          61698,
          61699,
          61700,
          61701,
          61702,
          61703,
          61704,
          61705,
          61706,
          61707,
          61712,
          61713,
          61714,
          61715,
          61720,
          61721,
          61722,
          61731,
          61732,
          61736,
          61737,
          61738,
          61746,
          61747,
          61748,
          61749,
          61751,
          61752,
          61753,
          61754,
          61757,
          61758,
          61760,
          61764,
          61768,
          61769,
          61770,
          61771,
          61772,
          61773,
          61774,
          61776,
          61777,
          61778,
          61799,
          61811,
          61812,
          61813,
          61814,
          61815,
          61816,
          61817,
          61818,
          61819,
          61820,
          61821,
          61826,
          61827,
          61828,
          61829,
          61830,
          61831,
          61832,
          61836,
          61838,
          61840,
          61842,
          61845,
        ],
        P = o('9dlw'),
        W = o('QpNh'),
        I = o('gb5g');
      function V(e) {
        var t,
          o = e.id,
          a = e.activeClass,
          r = e.children,
          l = e.className,
          c = e.icon,
          u = e.isActive,
          d = e.isGrayed,
          p = e.isHidden,
          m = e.isTransparent,
          h = e.theme,
          b = void 0 === h ? I : h,
          v = e.onClick,
          f = e.title,
          g = e.buttonHotKey;
        return i.createElement(
          'div',
          Object(n.__assign)(
            {
              id: o,
              className: s(
                b.button,
                l,
                u && a,
                ((t = {}),
                (t['apply-common-tooltip common-tooltip-vertical'] = Boolean(
                  f,
                )),
                (t[b.isActive] = u),
                (t[b.isGrayed] = d),
                (t[b.isHidden] = p),
                (t[b.isTransparent] = m),
                t),
              ),
              onClick: v,
              title: f,
              'data-role': 'button',
              'data-tooltip-hotkey': g,
            },
            Object(W.a)(e),
          ),
          i.createElement(
            'div',
            { className: b.bg },
            c &&
              ('string' == typeof c
                ? i.createElement(S.Icon, { className: b.icon, icon: c })
                : i.createElement('span', { className: b.icon }, c)),
            r,
          ),
        );
      }
      var F = o('Sn4D'),
        R = o('hn2c'),
        z = o('KmEK'),
        G = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            return (
              (o._toggleDropdown = function (e) {
                o.setState({ isOpened: void 0 !== e ? e : !o.state.isOpened });
              }),
              (o._handleClose = function () {
                o._toggleDropdown(!1);
              }),
              (o._getDropdownPosition = function () {
                if (!o._control) return { x: 0, y: 0 };
                var e = o._control.getBoundingClientRect();
                return { x: e.left + e.width + 1, y: e.top - 6 };
              }),
              (o._handleClickArrow = function () {
                o._toggleDropdown();
              }),
              (o._handleTouchStart = function () {
                o.props.onClickButton(), o._toggleDropdown();
              }),
              (o._handlePressStart = function () {
                if (Modernizr.mobiletouch && !o.props.checkable)
                  o._longPressDelay || o.props.onClickButton();
                else {
                  if (o._doubleClickDelay)
                    return (
                      clearTimeout(o._doubleClickDelay),
                      delete o._doubleClickDelay,
                      void o._toggleDropdown(!0)
                    );
                  o._doubleClickDelay = setTimeout(function () {
                    delete o._doubleClickDelay,
                      o._longPressDelay || o.props.onClickButton();
                  }, 175);
                }
                o._longPressDelay = setTimeout(function () {
                  delete o._longPressDelay, o._toggleDropdown(!0);
                }, 300);
              }),
              (o._handlePressEnd = function () {
                o._longPressDelay &&
                  (clearTimeout(o._longPressDelay),
                  delete o._longPressDelay,
                  o.state.isOpened
                    ? o._toggleDropdown(!1)
                    : o.props.checkable ||
                      o.state.isOpened ||
                      !o.props.isActive ||
                      Modernizr.mobiletouch
                    ? o._doubleClickDelay || o.props.onClickButton()
                    : o._toggleDropdown(!0));
              }),
              (o.state = { isOpened: !1 }),
              o
            );
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype.render = function () {
              var e,
                t = this,
                o = this.props,
                a = o.buttonActiveClass,
                r = o.buttonClass,
                l = o.buttonIcon,
                c = o.buttonTitle,
                u = o.buttonHotKey,
                d = o.dropdownTooltip,
                p = o.children,
                m = o.isActive,
                h = o.isGrayed,
                b = o.onClickWhenGrayed,
                v = o.checkable,
                f = o.isSmallTablet,
                g = this.state.isOpened,
                _ = Object(W.a)(this.props);
              return i.createElement(
                'div',
                {
                  className: s(
                    z.dropdown,
                    ((e = {}),
                    (e[z.isGrayed] = h),
                    (e[z.isActive] = m),
                    (e[z.isOpened] = g),
                    e),
                  ),
                  onClick: h ? b : void 0,
                },
                i.createElement(
                  'div',
                  Object(n.__assign)({}, _, {
                    ref: function (e) {
                      return (t._control = e);
                    },
                    className: z.control,
                  }),
                  i.createElement(
                    'div',
                    {
                      className: s(z.buttonWrap, {
                        'apply-common-tooltip common-tooltip-vertical': Boolean(
                          c || u,
                        ),
                      }),
                      'data-tooltip-hotkey': u,
                      'data-tooltip-delay': 1500,
                      'data-role': 'button',
                      title: c,
                      onMouseDown:
                        h || Modernizr.mobiletouch
                          ? void 0
                          : this._handlePressStart,
                      onMouseUp:
                        h || Modernizr.mobiletouch
                          ? void 0
                          : this._handlePressEnd,
                      onTouchStart:
                        !h && v && Modernizr.mobiletouch
                          ? this._handlePressStart
                          : void 0,
                      onTouchEnd:
                        !h && v && Modernizr.mobiletouch
                          ? this._handlePressEnd
                          : void 0,
                      onClick:
                        h || v || !Modernizr.mobiletouch
                          ? void 0
                          : this._handleTouchStart,
                    },
                    i.createElement(V, {
                      activeClass: a,
                      className: r,
                      icon: l,
                      isActive: m,
                      isGrayed: h,
                      isTransparent: !v,
                    }),
                  ),
                  !h &&
                    !Modernizr.mobiletouch &&
                    i.createElement(
                      'div',
                      {
                        className: s(
                          z.arrow,
                          d && 'apply-common-tooltip common-tooltip-vertical',
                        ),
                        title: d,
                        onClick: this._handleClickArrow,
                        'data-role': 'menu-handle',
                      },
                      i.createElement(S.Icon, {
                        className: z.arrowIcon,
                        icon: R,
                      }),
                    ),
                ),
                !h &&
                  (f
                    ? g &&
                      i.createElement(
                        F.a,
                        { onClose: this._handleClose, position: 'Bottom' },
                        p,
                      )
                    : i.createElement(
                        P.a,
                        {
                          doNotCloseOn: this,
                          isOpened: g,
                          onClose: this._handleClose,
                          position: this._getDropdownPosition,
                        },
                        p,
                      )),
              );
            }),
            t
          );
        })(i.PureComponent),
        H = o('KKsp'),
        U = o('EA32'),
        q = { icon: window.t('Icon'), dropdownTooltip: window.t('Icons') },
        K = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            return (
              (o._renderItem = function (e, t) {
                var n = o.props.isSmallTablet,
                  a = c()(
                    U.item,
                    n && U.smallTablet,
                    t &&
                      n &&
                      o.state.isActive &&
                      e === o.state.current &&
                      U.active,
                  );
                return i.createElement(
                  'div',
                  {
                    className: a,
                    key: e,
                    onClick: function () {
                      o._handleSelect(e), Object(A.b)();
                    },
                  },
                  String.fromCharCode(e),
                );
              }),
              (o._onChangeDrawingState = function () {
                o.setState({ isActive: o._isActive() });
              }),
              (o._handleSelect = function (e) {
                Object(x.saveDefaults)(
                  'linetoolicon',
                  Object(n.__assign)(
                    Object(n.__assign)({}, Object(x.defaults)('linetoolicon')),
                    { icon: e },
                  ),
                ),
                  p.tool.setValue('LineToolIcon');
                var t = o.state.recents,
                  i = t.indexOf(e);
                -1 !== i && t.splice(i, 1),
                  (t = Object(n.__spreadArrays)([e], t.slice(0, 9))),
                  Object(u.setJSON)('linetoolicon.recenticons', t),
                  o.setState({ current: e, recents: t });
              }),
              (o.state = {
                current: Object(x.defaults)('linetoolicon').icon,
                recents: Object(u.getJSON)('linetoolicon.recenticons') || [],
              }),
              o
            );
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              p.tool.subscribe(this._onChangeDrawingState),
                u.onSync.subscribe(this, this._onSyncSettings);
            }),
            (t.prototype.componentWillUnmount = function () {
              p.tool.unsubscribe(this._onChangeDrawingState),
                u.onSync.unsubscribe(this, this._onSyncSettings);
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                o = t.isGrayed,
                a = t.toolName,
                r = t.isSmallTablet,
                l = this.state,
                s = l.current,
                u = l.isActive,
                d = l.recents,
                p = Object(W.a)(this.props),
                m = c()(U.wrap, r && U.smallTablet);
              return i.createElement(
                G,
                Object(n.__assign)(
                  {
                    buttonClass: U.button,
                    buttonIcon: i.createElement(
                      'div',
                      { className: U.buttonIcon },
                      String.fromCharCode(s || B[0]),
                    ),
                    buttonTitle: q.icon,
                    dropdownTooltip: q.dropdownTooltip,
                    isActive: u,
                    isGrayed: o,
                    isSmallTablet: r,
                    onClickButton: function () {
                      return e._handleSelect(s || B[0]);
                    },
                    onClickWhenGrayed: function () {
                      return Object(h.emit)('onGrayedObjectClicked', {
                        type: 'drawing',
                        name: g.a[a].localizedName,
                      });
                    },
                  },
                  p,
                ),
                d &&
                  i.createElement(
                    i.Fragment,
                    null,
                    r &&
                      i.createElement(
                        'div',
                        { className: U.title },
                        window.t('Recently used'),
                      ),
                    i.createElement(
                      'div',
                      { className: m },
                      d.map(function (t) {
                        return e._renderItem(t, !0);
                      }),
                    ),
                    i.createElement(H.a, { className: c()(r && U.separator) }),
                  ),
                i.createElement(
                  'div',
                  { key: 'all', className: m },
                  B.map(function (t) {
                    return e._renderItem(t);
                  }),
                ),
              );
            }),
            (t.prototype._isActive = function () {
              return p.tool.value() === this.props.toolName;
            }),
            (t.prototype._onSyncSettings = function () {
              this.setState({
                recents: Object(u.getJSON)('linetoolicon.recenticons'),
              });
            }),
            t
          );
        })(i.Component),
        Q = o('Ocx9'),
        X = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            return (
              (o._handleClick = function () {
                o.props.saveDefaultOnChange &&
                  Object(Q.saveDefaultProperties)(!0);
                var e = !o.props.property.value();
                o.props.property.setValue(e),
                  o.props.saveDefaultOnChange &&
                    Object(Q.saveDefaultProperties)(!1),
                  o.props.onClick && o.props.onClick(e);
              }),
              (o.state = { isActive: o.props.property.value() }),
              o
            );
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              this.props.property.subscribe(this, this._onChange);
            }),
            (t.prototype.componentWillUnmount = function () {
              this.props.property.unsubscribe(this, this._onChange);
            }),
            (t.prototype.render = function () {
              var e = this.props.toolName,
                t = this.state.isActive,
                o = g.a[e];
              return i.createElement(V, {
                icon: t && o.iconActive ? o.iconActive : o.icon,
                isActive: t,
                onClick: this._handleClick,
                title: o.localizedName,
                'data-name': e,
              });
            }),
            (t.prototype._onChange = function (e) {
              this.setState({ isActive: e.value() });
            }),
            t
          );
        })(i.PureComponent),
        Y = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            return (
              (o._handleClick = function () {
                p.tool.setValue(o.props.toolName);
              }),
              (o._onChange = function () {
                o.setState({ isActive: p.tool.value() === o.props.toolName });
              }),
              (o.state = { isActive: p.tool.value() === o.props.toolName }),
              o
            );
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              p.tool.subscribe(this._onChange);
            }),
            (t.prototype.componentWillUnmount = function () {
              p.tool.unsubscribe(this._onChange);
            }),
            (t.prototype.render = function () {
              var e = this.props.toolName,
                t = this.state.isActive,
                o = g.a[e];
              return i.createElement(V, {
                icon: g.a[e].icon,
                isActive: t,
                isTransparent: !0,
                onClick: this._handleClick,
                title: o.localizedName,
                buttonHotKey: o.hotKey,
                'data-name': e,
              });
            }),
            t
          );
        })(i.PureComponent);
      function J(e) {
        var t = e.id,
          o = e.action,
          n = e.isActive,
          a = e.isHidden,
          r = e.isTransparent,
          l = e.toolName;
        return i.createElement(V, {
          id: t,
          icon: g.a[l].icon,
          isActive: n,
          isHidden: a,
          isTransparent: r,
          onClick: o,
          title: g.a[l].localizedName,
          'data-name': l,
        });
      }
      var Z,
        $ = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            return (
              (o._boundUndoModel = null),
              (o._handleClick = function () {
                var e = o._activeChartWidget().model();
                e && e.zoomFromViewport();
              }),
              (o._syncUnzoomButton = function () {
                var e = o._activeChartWidget(),
                  t = e.model(),
                  n = !1;
                t
                  ? (o._boundUndoModel !== t &&
                      (o._boundUndoModel &&
                        o._boundUndoModel
                          .zoomStack()
                          .onChange()
                          .unsubscribe(null, o._syncUnzoomButton),
                      t
                        .zoomStack()
                        .onChange()
                        .subscribe(null, o._syncUnzoomButton),
                      (o._boundUndoModel = t)),
                    (n = !t.zoomStack().isEmpty()))
                  : e.withModel(null, o._syncUnzoomButton),
                  o.setState({ isVisible: n });
              }),
              (o.state = { isVisible: !1 }),
              o
            );
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              this.props.chartWidgetCollection.activeChartWidget.subscribe(
                this._syncUnzoomButton,
                { callWithLast: !0 },
              );
            }),
            (t.prototype.componentWillUnmount = function () {
              this.props.chartWidgetCollection.activeChartWidget.unsubscribe(
                this._syncUnzoomButton,
              );
            }),
            (t.prototype.render = function () {
              return this.state.isVisible
                ? i.createElement(J, {
                    action: this._handleClick,
                    isTransparent: !0,
                    toolName: 'zoom-out',
                  })
                : i.createElement('div', null);
            }),
            (t.prototype._activeChartWidget = function () {
              return this.props.chartWidgetCollection.activeChartWidget.value();
            }),
            t
          );
        })(i.PureComponent),
        ee = o('b2d7'),
        te = o('pr86'),
        oe = o('N5tr'),
        ne = o('dhVi'),
        ie = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            (o._onChangeDrawingState = function () {
              var e = o._getActiveToolIndex();
              o.setState({
                current: -1 !== e ? e : o.state.current,
                isActive: -1 !== e,
              });
            }),
              (o._handleClickButton = function () {
                if (!f.CheckMobile.any()) {
                  var e = o._getCurrentToolName();
                  o._selectTool(e);
                }
              }),
              (o._handleClickItem = function (e) {
                o._selectTool(e);
              }),
              (o._handleGrayedClick = function (e) {
                Object(h.emit)('onGrayedObjectClicked', {
                  type: 'drawing',
                  name: g.a[e].localizedName,
                });
              }),
              (o._handleClickFavorite = function (e) {
                o.state.favState && o.state.favState[e]
                  ? ee.a.removeFavorite(e)
                  : ee.a.addFavorite(e);
              }),
              (o._onAddFavorite = function (e) {
                var t;
                o.setState({
                  favState: Object(n.__assign)(
                    Object(n.__assign)({}, o.state.favState),
                    ((t = {}), (t[e] = !0), t),
                  ),
                });
              }),
              (o._onRemoveFavorite = function (e) {
                var t;
                o.setState({
                  favState: Object(n.__assign)(
                    Object(n.__assign)({}, o.state.favState),
                    ((t = {}), (t[e] = !1), t),
                  ),
                });
              }),
              (o._onSyncFavorites = function () {
                o.setState({ favState: o._composeFavState() });
              });
            var i = o._getActiveToolIndex();
            return (
              (o.state = {
                current: -1 === i ? o._firstNonGrayedTool() : i,
                favState: o._composeFavState(),
                isActive: -1 !== i,
              }),
              o
            );
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              p.tool.subscribe(this._onChangeDrawingState),
                ee.a.favoriteAdded.subscribe(null, this._onAddFavorite),
                ee.a.favoriteRemoved.subscribe(null, this._onRemoveFavorite),
                ee.a.favoritesSynced.subscribe(null, this._onSyncFavorites);
            }),
            (t.prototype.componentWillUnmount = function () {
              p.tool.unsubscribe(this._onChangeDrawingState),
                ee.a.favoriteAdded.unsubscribe(null, this._onAddFavorite),
                ee.a.favoriteRemoved.unsubscribe(null, this._onRemoveFavorite),
                ee.a.favoritesSynced.unsubscribe(null, this._onSyncFavorites);
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              e.lineTools !== this.props.lineTools &&
                this.setState({ favState: this._composeFavState() });
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                o = t.favoriting,
                a = t.grayedTools,
                r = t.lineTools,
                l = t.dropdownTooltip,
                s = t.isSmallTablet,
                c = this.state,
                u = c.current,
                d = c.favState,
                p = c.isActive,
                m = this._getCurrentToolName(),
                h = g.a[m],
                b = this._showShortcuts(),
                v = Object(W.a)(this.props);
              return i.createElement(
                'span',
                null,
                i.createElement(
                  G,
                  Object(n.__assign)(
                    {
                      buttonIcon: h.icon,
                      buttonTitle: h.localizedName,
                      buttonHotKey: h.hotKey,
                      dropdownTooltip: l,
                      isActive: p,
                      onClickButton: this._handleClickButton,
                      isSmallTablet: s,
                    },
                    v,
                  ),
                  r.map(function (t, n) {
                    var r = t.name,
                      l = g.a[r],
                      c = a[r];
                    return i.createElement(oe.b, {
                      key: r,
                      'data-name': t.name,
                      theme: s ? ne.a : void 0,
                      dontClosePopup: c,
                      forceShowShortcuts: b,
                      shortcut:
                        !s && t.hotkeyHash
                          ? Object(w.humanReadableHash)(t.hotkeyHash)
                          : void 0,
                      icon: l.icon,
                      isActive: p && u === n,
                      appearAsDisabled: c,
                      label: l.localizedName,
                      onClick: c ? e._handleGrayedClick : e._handleClickItem,
                      onClickArg: r,
                      showToolboxOnHover: !d[r],
                      toolbox:
                        o && !c
                          ? i.createElement(te.a, {
                              isActive: p && u === n,
                              isFilled: d[r],
                              onClick: function () {
                                return e._handleClickFavorite(r);
                              },
                            })
                          : void 0,
                    });
                  }),
                ),
              );
            }),
            (t.prototype._getCurrentToolName = function () {
              var e = this.state.current;
              return this.props.lineTools[e || 0].name;
            }),
            (t.prototype._firstNonGrayedTool = function () {
              var e = this.props,
                t = e.grayedTools;
              return e.lineTools.findIndex(function (e) {
                return !t[e.name];
              });
            }),
            (t.prototype._getActiveToolIndex = function () {
              return this.props.lineTools.findIndex(function (e) {
                return e.name === p.tool.value();
              });
            }),
            (t.prototype._showShortcuts = function () {
              return this.props.lineTools.some(function (e) {
                return 'shortcut' in e;
              });
            }),
            (t.prototype._selectTool = function (e) {
              p.tool.setValue(e);
            }),
            (t.prototype._composeFavState = function () {
              var e = {};
              return (
                this.props.lineTools.forEach(function (t) {
                  e[t.name] = ee.a.isFavorite(t.name);
                }),
                e
              );
            }),
            t
          );
        })(i.PureComponent),
        ae = o('PC8g'),
        re = o('nPPD'),
        le = o('11r7'),
        se = Object(re.a)(oe.a, le),
        ce = {
          all: window.t('Remove Drawings & Indicators'),
          drawings: window.t('Remove Drawings'),
          studies: window.t('Remove Indicators'),
        },
        ue = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._handleRemoveToolClick = function () {
                Modernizr.mobiletouch || t._handleRemoveDrawings();
              }),
              (t._handleRemoveDrawings = function () {
                Object(ae.trackEvent)(
                  'GUI',
                  'Chart Left Toolbar',
                  'remove drawing',
                ),
                  t.props.chartWidgetCollection.activeChartWidget
                    .value()
                    .removeAllDrawingTools();
              }),
              (t._handleRemoveStudies = function () {
                Object(ae.trackEvent)(
                  'GUI',
                  'Chart Left Toolbar',
                  'remove indicator',
                ),
                  t.props.chartWidgetCollection.activeChartWidget
                    .value()
                    .removeAllStudies();
              }),
              (t._handleRemoveAll = function () {
                Object(ae.trackEvent)(
                  'GUI',
                  'Chart Left Toolbar',
                  'remove all',
                ),
                  t.props.chartWidgetCollection.activeChartWidget
                    .value()
                    .removeAllStudiesDrawingTools();
              }),
              t
            );
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props.isSmallTablet ? se : void 0;
              return i.createElement(
                G,
                {
                  buttonIcon: g.a[this.props.toolName].icon,
                  buttonTitle: ce.drawings,
                  onClickButton: this._handleRemoveToolClick,
                  isSmallTablet: this.props.isSmallTablet,
                  'data-name': this.props.toolName,
                },
                i.createElement(oe.b, {
                  'data-name': 'remove-drawing-tools',
                  label: ce.drawings,
                  onClick: this._handleRemoveDrawings,
                  theme: e,
                }),
                i.createElement(oe.b, {
                  'data-name': 'remove-studies',
                  label: ce.studies,
                  onClick: this._handleRemoveStudies,
                  theme: e,
                }),
                i.createElement(oe.b, {
                  'data-name': 'remove-all',
                  label: ce.all,
                  onClick: this._handleRemoveAll,
                  theme: e,
                }),
              );
            }),
            t
          );
        })(i.PureComponent),
        de = o('g5Qf'),
        pe = o('85c9'),
        me = window.t('Show Favorite Drawing Tools Toolbar'),
        he = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._instance = null),
              (t._promise = null),
              (t._bindedForceUpdate = function () {
                return t.forceUpdate();
              }),
              (t._handleClick = function () {
                null !== t._instance &&
                  (t._instance.isVisible()
                    ? t._instance.hide()
                    : t._instance.show());
              }),
              t
            );
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this,
                t = (this._promise = Object(l.ensureNotNull)(
                  Object(de.getFavoriteDrawingToolbarPromise)(),
                ));
              t.then(function (o) {
                e._promise === t &&
                  ((e._instance = o),
                  e._instance.canBeShown().subscribe(e._bindedForceUpdate),
                  e._instance.visibility().subscribe(e._bindedForceUpdate),
                  e.forceUpdate());
              });
            }),
            (t.prototype.componentWillUnmount = function () {
              (this._promise = null),
                null !== this._instance &&
                  (this._instance
                    .canBeShown()
                    .unsubscribe(this._bindedForceUpdate),
                  this._instance
                    .visibility()
                    .unsubscribe(this._bindedForceUpdate),
                  (this._instance = null));
            }),
            (t.prototype.render = function () {
              return null !== this._instance &&
                this._instance.canBeShown().value()
                ? i.createElement(V, {
                    id: this.props.id,
                    icon: pe,
                    isActive: this._instance.isVisible(),
                    onClick: this._handleClick,
                    title: me,
                  })
                : null;
            }),
            t
          );
        })(i.PureComponent),
        be = o('Ijvb'),
        ve = o('4o++');
      !(function (e) {
        (e.Screenshot = 'drawing-toolbar-screenshot'),
          (e.FavoriteDrawings = 'drawing-toolbar-favorite-drawings'),
          (e.ObjectTree = 'drawing-toolbar-object-tree');
      })(Z || (Z = {}));
      var fe = o('8d0Q'),
        ge = o('XAms'),
        _e = o('7RN7'),
        we = o('X0gx'),
        ye = o('Wz44'),
        Te = ye,
        Ce = 'http://www.w3.org/2000/svg';
      function ke(e) {
        var t = e.direction,
          o = e.theme,
          n = void 0 === o ? ye : o;
        return i.createElement(
          'svg',
          {
            xmlns: Ce,
            width: '9',
            height: '27',
            viewBox: '0 0 9 27',
            className: s(n.container, 'right' === t ? n.mirror : null),
            onContextMenu: ge.a,
          },
          i.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            i.createElement('path', {
              className: n.background,
              d: 'M4.5.5a4 4 0 0 1 4 4v18a4 4 0 1 1-8 0v-18a4 4 0 0 1 4-4z',
            }),
            i.createElement('path', {
              className: n.arrow,
              d: 'M5.5 10l-2 3.5 2 3.5',
            }),
          ),
        );
      }
      var Se = o('ybOa'),
        Oe = Object(re.a)(Te, Se),
        Ee = {
          hide: window.t('Hide Drawings Toolbar'),
          show: window.t('Show Drawings Toolbar'),
        },
        Me = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._toggleVisibility = function () {
                C.isDrawingToolbarVisible.setValue(
                  !C.isDrawingToolbarVisible.value(),
                );
              }),
              t
            );
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props.toolbarVisible;
              return i.createElement(
                'div',
                {
                  className: s(
                    Oe.toggleButton,
                    'apply-common-tooltip common-tooltip-vertical',
                    !e && Oe.collapsed,
                  ),
                  onClick: this._toggleVisibility,
                  title: e ? Ee.hide : Ee.show,
                },
                i.createElement(ke, {
                  direction: e ? 'left' : 'right',
                  theme: e ? void 0 : Oe,
                }),
              );
            }),
            t
          );
        })(i.PureComponent),
        De = o('mkWe'),
        Ne = o('uhCe'),
        Le = o('/KDZ'),
        je = { chartWidgetCollection: o('17x9').any.isRequired },
        Ae = o('1TxM'),
        xe = o('JQKp'),
        Be = {
          weakMagnet: window.t('Weak Magnet'),
          strongMagnet: window.t('Strong Magnet'),
        },
        Pe = Object(f.onWidget)(),
        We = new v.a(),
        Ie = ae.trackEvent.bind(null, 'GUI', 'Chart Left Toolbar'),
        Ve = function (e, t) {
          return Ie(e + ' ' + (t ? 'on' : 'off'));
        };
      function Fe() {
        var e = !p.properties().childs().magnet.value();
        Ve('magnet mode', e),
          Object(Q.saveDefaultProperties)(!0),
          p.properties().childs().magnet.setValue(e),
          Object(Q.saveDefaultProperties)(!1);
      }
      function Re() {
        Object(ae.trackEvent)('GUI', 'Magnet mode', 'Weak'),
          Object(Q.saveDefaultProperties)(!0),
          p.properties().childs().magnetMode.setValue(ve.MagnetMode.WeakMagnet),
          p.properties().childs().magnet.setValue(!0),
          Object(Q.saveDefaultProperties)(!1);
      }
      function ze() {
        Object(ae.trackEvent)('GUI', 'Magnet mode', 'Strong'),
          Object(Q.saveDefaultProperties)(!0),
          p
            .properties()
            .childs()
            .magnetMode.setValue(ve.MagnetMode.StrongMagnet),
          p.properties().childs().magnet.setValue(!0),
          Object(Q.saveDefaultProperties)(!1);
      }
      var Ge = (function (e) {
        function t(t) {
          var o,
            n = e.call(this, t) || this;
          return (
            (n._grayedTools = {}),
            (n._handleDrawingClick = function (e) {
              Ve('drawing mode', e);
            }),
            (n._handleLockClick = function (e) {
              Ve('lock all drawing', e);
            }),
            (n._handleHideClick = function (e) {
              Ve('hide', e);
            }),
            (n._handleSyncClick = function (e) {
              Ve('sync', e);
            }),
            (n._handleMouseOver = function (e) {
              Object(fe.a)(e) && n.setState({ isHovered: !0 });
            }),
            (n._handleMouseOut = function (e) {
              Object(fe.a)(e) && n.setState({ isHovered: !1 });
            }),
            (n._handleChangeVisibility = function (e) {
              n.setState({ isVisible: e });
            }),
            (n._handleEsc = function () {
              p.resetToCursor(!0);
            }),
            (n._updateMagnetEnabled = function () {
              var e = { magnet: Object(m.a)().value() };
              n.setState(e);
            }),
            (n._updateMagnetMode = function () {
              var e = { magnetMode: Object(m.b)().value() };
              n.setState(e);
            }),
            (n._handleWidgetbarSettled = function (e) {
              var t;
              n.setState({
                isWidgetbarVisible:
                  null === (t = window.widgetbar) || void 0 === t
                    ? void 0
                    : t.visible().value(),
                widgetbarSettled: e,
              });
            }),
            (n._handleWidgetbarVisible = function (e) {
              n.setState({ isWidgetbarVisible: e });
            }),
            p.init(),
            (n._toolsFilter = new _(n.props.drawingsAccess)),
            (n._filteredLineTools = T.map(function (e) {
              return {
                id: e.id,
                title: e.title,
                items: e.items.filter(function (e) {
                  return n._toolsFilter.isToolEnabled(
                    g.a[e.name].localizedName,
                  );
                }),
              };
            }).filter(function (e) {
              return 0 !== e.items.length;
            })),
            n._filteredLineTools.forEach(function (e) {
              return e.items.forEach(function (e) {
                n._grayedTools[e.name] = n._toolsFilter.isToolGrayed(
                  g.a[e.name].localizedName,
                );
              });
            }),
            (n.state = {
              isHovered: !1,
              isVisible: C.isDrawingToolbarVisible.value(),
              isWidgetbarVisible: Boolean(
                null === (o = window.widgetbar) || void 0 === o
                  ? void 0
                  : o.visible().value(),
              ),
              widgetbarSettled: void 0 !== window.widgetbar,
              magnet: p.properties().childs().magnet.value(),
              magnetMode: p.properties().childs().magnetMode.value(),
            }),
            (n._features = {
              favoriting: !Pe && d.enabled('items_favoriting'),
              multicharts: d.enabled('support_multicharts'),
              tools: !Pe || d.enabled('charting_library_base'),
            }),
            (n._registry = {
              chartWidgetCollection: n.props.chartWidgetCollection,
            }),
            n._negotiateResizer(),
            n
          );
        }
        return (
          Object(n.__extends)(t, e),
          (t.prototype.componentDidMount = function () {
            var e;
            C.isDrawingToolbarVisible.subscribe(this._handleChangeVisibility),
              A.a.subscribe(this, this._handleGlobalClose),
              Object(m.a)().subscribe(this._updateMagnetEnabled),
              Object(m.b)().subscribe(this._updateMagnetMode),
              (this._tool = p.tool.spawn()),
              this._tool.subscribe(this._updateHotkeys.bind(this)),
              this._initHotkeys(),
              this.props.widgetbarSettled &&
                (this.props.widgetbarSettled.subscribe(
                  this,
                  this._handleWidgetbarSettled,
                ),
                f.CheckMobile.any() &&
                  (null === (e = window.widgetbar) ||
                    void 0 === e ||
                    e.visible().subscribe(this._handleWidgetbarVisible)));
          }),
          (t.prototype.componentWillUnmount = function () {
            var e;
            null === (e = window.widgetbar) ||
              void 0 === e ||
              e.visible().unsubscribe(this._handleWidgetbarVisible),
              C.isDrawingToolbarVisible.unsubscribe(
                this._handleChangeVisibility,
              ),
              A.a.unsubscribe(this, this._handleGlobalClose),
              Object(m.a)().unsubscribe(this._updateMagnetEnabled),
              Object(m.b)().unsubscribe(this._updateMagnetMode),
              this._tool.destroy(),
              this._hotkeys.destroy();
          }),
          (t.prototype.componentDidUpdate = function (e, t) {
            var o,
              n = this.state,
              i = n.isVisible,
              a = n.widgetbarSettled;
            i !== t.isVisible &&
              (h.emit('toggle_sidebar', !i),
              u.setValue('ChartDrawingToolbarWidget.visible', i),
              this._negotiateResizer()),
              t.widgetbarSettled !== a &&
                a &&
                f.CheckMobile.any() &&
                (null === (o = window.widgetbar) ||
                  void 0 === o ||
                  o.visible().subscribe(this._handleWidgetbarVisible));
          }),
          (t.prototype.render = function () {
            var e,
              t = this,
              o = this.props,
              n = o.bgColor,
              a = o.chartWidgetCollection,
              r = o.readOnly,
              l = this.state,
              c = l.isHovered,
              u = l.isVisible,
              d = l.magnet,
              m = l.magnetMode,
              h = { backgroundColor: n && '#' + n };
            e = i.createElement(Me, { toolbarVisible: u });
            return i.createElement(
              Ae.a,
              { validation: je, value: this._registry },
              i.createElement(
                we.a.Provider,
                { value: We },
                i.createElement(
                  De.b,
                  null,
                  i.createElement(
                    Le.a,
                    { rule: Ne.a.TabletSmall },
                    function (o) {
                      var n;
                      return i.createElement(
                        'div',
                        {
                          id: 'drawing-toolbar',
                          className: s(
                            xe.drawingToolbar,
                            ((n = {}), (n[xe.isHidden] = !u), n),
                          ),
                          style: h,
                          onClick: t.props.onClick,
                          onContextMenu: ge.b,
                        },
                        i.createElement(
                          L,
                          {
                            onScroll: t._handleGlobalClose,
                            isVisibleFade: Modernizr.mobiletouch,
                            isVisibleButtons: !Modernizr.mobiletouch && c,
                            isVisibleScrollbar: !1,
                            onMouseOver: t._handleMouseOver,
                            onMouseOut: t._handleMouseOut,
                          },
                          i.createElement(
                            'div',
                            { className: xe.inner },
                            !r &&
                              i.createElement(
                                'div',
                                { className: xe.group, style: h },
                                t._filteredLineTools.map(function (e, n) {
                                  return i.createElement(ie, {
                                    'data-name': e.id,
                                    chartWidgetCollection: a,
                                    favoriting: t._features.favoriting,
                                    grayedTools: t._grayedTools,
                                    key: n,
                                    dropdownTooltip: e.title,
                                    lineTools: e.items,
                                    isSmallTablet: o,
                                  });
                                }),
                                t._toolsFilter.isToolEnabled('Font Icons') &&
                                  i.createElement(K, {
                                    'data-name': 'linetool-group-font-icons',
                                    isGrayed: t._grayedTools['Font Icons'],
                                    toolName: 'LineToolIcon',
                                    isSmallTablet: o,
                                  }),
                              ),
                            !r &&
                              i.createElement(
                                'div',
                                { className: xe.group, style: h },
                                i.createElement(Y, { toolName: 'measure' }),
                                i.createElement(Y, { toolName: 'zoom' }),
                                i.createElement($, {
                                  chartWidgetCollection: a,
                                }),
                              ),
                            !r &&
                              i.createElement(
                                'div',
                                { className: xe.group, style: h },
                                i.createElement(
                                  G,
                                  {
                                    'data-name': 'magnet-button',
                                    buttonIcon:
                                      m === ve.MagnetMode.StrongMagnet
                                        ? be.a.strongMagnet
                                        : be.a.magnet,
                                    buttonTitle: g.a.magnet.localizedName,
                                    isActive: d,
                                    onClickButton: Fe,
                                    buttonHotKey: g.a.magnet.hotKey,
                                    checkable: !0,
                                    isSmallTablet: o,
                                  },
                                  i.createElement(oe.b, {
                                    key: 'weakMagnet',
                                    className: o ? xe.popupMenuItem : void 0,
                                    'data-name': 'weakMagnet',
                                    icon: be.a.magnet,
                                    isActive:
                                      d && m !== ve.MagnetMode.StrongMagnet,
                                    label: Be.weakMagnet,
                                    onClick: Re,
                                  }),
                                  i.createElement(oe.b, {
                                    key: 'strongMagnet',
                                    className: o ? xe.popupMenuItem : void 0,
                                    'data-name': 'strongMagnet',
                                    icon: be.a.strongMagnet,
                                    isActive:
                                      d && m === ve.MagnetMode.StrongMagnet,
                                    label: Be.strongMagnet,
                                    onClick: ze,
                                  }),
                                ),
                                t._features.tools &&
                                  i.createElement(X, {
                                    property: p.properties().childs()
                                      .stayInDrawingMode,
                                    saveDefaultOnChange: !0,
                                    toolName: 'drawginmode',
                                    onClick: t._handleDrawingClick,
                                  }),
                                t._features.tools &&
                                  i.createElement(X, {
                                    property: p.lockDrawings(),
                                    toolName: 'lockAllDrawings',
                                    onClick: t._handleLockClick,
                                  }),
                                t._features.tools &&
                                  i.createElement(X, {
                                    property: p.hideAllDrawings(),
                                    toolName: 'hideAllDrawings',
                                    onClick: t._handleHideClick,
                                  }),
                                !1,
                              ),
                            !r &&
                              t._features.tools &&
                              i.createElement(
                                'div',
                                { className: xe.group, style: h },
                                i.createElement(ue, {
                                  chartWidgetCollection: a,
                                  isSmallTablet: o,
                                  toolName: 'removeAllDrawingTools',
                                }),
                              ),
                            i.createElement('div', {
                              className: xe.fill,
                              style: h,
                            }),
                            !r &&
                              (t._features.tools || !1) &&
                              i.createElement(
                                'div',
                                {
                                  className: s(xe.group, xe.lastGroup),
                                  style: h,
                                },
                                !1,
                                t._features.tools &&
                                  t._features.favoriting &&
                                  i.createElement(he, {
                                    id: Z.FavoriteDrawings,
                                  }),
                                !1,
                              ),
                          ),
                        ),
                        e,
                      );
                    },
                  ),
                ),
              ),
            );
          }),
          (t.prototype._activeChartWidget = function () {
            return this.props.chartWidgetCollection.activeChartWidget.value();
          }),
          (t.prototype._negotiateResizer = function () {
            var e = _e.a;
            this.props.resizerBridge.negotiateWidth(
              this.state.isVisible ? _e.b : e,
            );
          }),
          (t.prototype._handleGlobalClose = function () {
            We.fire();
          }),
          (t.prototype._updateHotkeys = function () {
            this._hotkeys.promote();
          }),
          (t.prototype._initHotkeys = function () {
            var e = this;
            (this._hotkeys = j.createGroup({ desc: 'Drawing Toolbar' })),
              this._hotkeys.add({
                desc: 'Reset',
                hotkey: 27,
                handler: function () {
                  return e._handleEsc();
                },
                isDisabled: function () {
                  return p.toolIsCursor(p.tool.value());
                },
              });
          }),
          t
        );
      })(i.PureComponent);
      o.d(t, 'DrawingToolbarRenderer', function () {
        return He;
      });
      var He = (function () {
        function e(e, t) {
          var o = this;
          (this._component = null),
            (this._handleRef = function (e) {
              o._component = e;
            }),
            (this._container = e),
            r.render(
              i.createElement(
                Ge,
                Object(n.__assign)({}, t, { ref: this._handleRef }),
              ),
              this._container,
            );
        }
        return (
          (e.prototype.destroy = function () {
            r.unmountComponentAtNode(this._container);
          }),
          (e.prototype.getComponent = function () {
            return Object(l.ensureNotNull)(this._component);
          }),
          e
        );
      })();
    },
    '85c9': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.103.687a1 1 0 0 1 1.794 0l2.374 4.81 5.309.772a1 1 0 0 1 .554 1.706l-3.841 3.745.906 5.287a1 1 0 0 1-1.45 1.054L10 15.565 5.252 18.06A1 1 0 0 1 3.8 17.007l.907-5.287L.866 7.975a1 1 0 0 1 .554-1.706l5.31-.771L9.102.688zM10 1.13L7.393 6.412l-5.829.847 4.218 4.111-.996 5.806L10 14.436l5.214 2.74-.996-5.805 4.218-4.112-5.83-.847L10 1.13z"/></svg>';
    },
    '8d0Q': function (e, t, o) {
      'use strict';
      o.d(t, 'b', function () {
        return i;
      }),
        o.d(t, 'a', function () {
          return a;
        });
      var n = o('q1tI');
      function i() {
        var e = Object(n.useState)(!1),
          t = e[0],
          o = e[1];
        return [
          t,
          {
            onMouseOver: function (e) {
              a(e) && o(!0);
            },
            onMouseOut: function (e) {
              a(e) && o(!1);
            },
          },
        ];
      }
      function a(e) {
        return !e.currentTarget.contains(e.relatedTarget);
      }
    },
    '9dlw': function (e, t, o) {
      'use strict';
      o.d(t, 'a', function () {
        return p;
      });
      var n = o('mrSG'),
        i = o('q1tI'),
        a = o.n(i),
        r = o('i8i4'),
        l = o.n(r),
        s = (o('bf9a'), o('AiMB')),
        c = o('DTHj'),
        u = o('X0gx'),
        d = o('8Rai');
      function p(e) {
        var t = e.controller,
          o = e.children,
          r = e.isOpened,
          p = e.closeOnClickOutside,
          m = void 0 === p || p,
          h = e.doNotCloseOn,
          b = e.onClickOutside,
          v = e.onClose,
          f = Object(n.__rest)(e, [
            'controller',
            'children',
            'isOpened',
            'closeOnClickOutside',
            'doNotCloseOn',
            'onClickOutside',
            'onClose',
          ]),
          g = Object(i.useContext)(u.a),
          _ = Object(d.a)({
            handler: function (e) {
              b && b(e);
              if (!m) return;
              if (h && e.target instanceof Node) {
                var t = l.a.findDOMNode(h);
                if (t instanceof Node && t.contains(e.target)) return;
              }
              v();
            },
            mouseDown: !0,
            touchStart: !0,
          });
        return r
          ? a.a.createElement(
              s.a,
              {
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                pointerEvents: 'none',
              },
              a.a.createElement(
                'span',
                { ref: _, style: { pointerEvents: 'auto' } },
                a.a.createElement(
                  c.a,
                  Object(n.__assign)({}, f, {
                    isOpened: r,
                    onClose: v,
                    onScroll: function (t) {
                      var o = e.onScroll;
                      o && o(t);
                      t.stopPropagation();
                    },
                    customCloseDelegate: g,
                    ref: t,
                  }),
                  o,
                ),
              ),
            )
          : null;
      }
    },
    ASyk: function (e, t, o) {
      e.exports = {
        'tablet-normal-breakpoint': 'screen and (max-width: 768px)',
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        'tablet-small-breakpoint': 'screen and (max-width: 419px)',
      };
    },
    EA32: function (e, t, o) {
      e.exports = {
        wrap: 'wrap-2I6DAtXG',
        smallTablet: 'smallTablet-3_DPsWKG',
        buttonIcon: 'buttonIcon-2rBwJ1QM',
        item: 'item-31XunD5q',
        hovered: 'hovered-2A1Cpat5',
        active: 'active-3xIuXjh4',
        title: 'title-KfwqaWX5',
        separator: 'separator-3h4R1USD',
        button: 'button-21ihqWJ8',
      };
    },
    HD8h: function (e, t, o) {
      e.exports = {
        item: 'item-184T8X5A',
        label: 'label-20cSBx98',
        labelRow: 'labelRow-2fmEJqjl',
        toolbox: 'toolbox-2H0D5bLi',
      };
    },
    Iivm: function (e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        o('mrSG').__exportStar(o('swCq'), t);
    },
    JQKp: function (e, t, o) {
      e.exports = {
        drawingToolbar: 'drawingToolbar-U3_QXRof',
        isHidden: 'isHidden-2d-PYkzV',
        inner: 'inner-1xuW-gY4',
        popupMenuItem: 'popupMenuItem-1b59KAzs',
        group: 'group-2JyOhh7Z',
        noGroupPadding: 'noGroupPadding-1TTjVKWk',
        lastGroup: 'lastGroup-O75UB5Xa',
        fill: 'fill-1djIbBXv',
        separator: 'separator-1BAqp1-l',
      };
    },
    KKsp: function (e, t, o) {
      'use strict';
      o.d(t, 'a', function () {
        return l;
      });
      var n = o('q1tI'),
        i = o('TSYQ'),
        a = o.n(i),
        r = o('NOPy');
      function l(e) {
        var t = e.size,
          o = void 0 === t ? 'normal' : t,
          i = e.className;
        return n.createElement('div', {
          className: a()(
            r.separator,
            'small' === o && r.small,
            'normal' === o && r.normal,
            'large' === o && r.large,
            i,
          ),
        });
      }
    },
    KmEK: function (e, t, o) {
      e.exports = {
        dropdown: 'dropdown-3_ASLzSj',
        buttonWrap: 'buttonWrap-3fZWypJl',
        control: 'control-1TyEfSIx',
        arrow: 'arrow-1cFKS5Ok',
        arrowIcon: 'arrowIcon-2wA7q8om',
        isOpened: 'isOpened-22vLOY9o',
        hover: 'hover-2eKqN_v0',
        isGrayed: 'isGrayed-xr-mULNo',
      };
    },
    N5tr: function (e, t, o) {
      'use strict';
      o.d(t, 'a', function () {
        return d;
      }),
        o.d(t, 'b', function () {
          return h;
        });
      var n = o('mrSG'),
        i = o('q1tI'),
        a = o.n(i),
        r = o('TSYQ'),
        l = o('tWVy'),
        s = o('PC8g'),
        c = o('QpNh'),
        u = o('v1bN'),
        d = u;
      function p(e) {
        var t = e.reference,
          o = Object(n.__rest)(e, ['reference']),
          i = Object(n.__assign)(Object(n.__assign)({}, o), { ref: t });
        return a.a.createElement(e.href ? 'a' : 'div', i);
      }
      function m(e) {
        e.stopPropagation();
      }
      function h(e) {
        var t,
          o,
          d,
          h = e.className,
          b = e.title,
          v = e.labelRowClassName,
          f = e.shortcut,
          g = e.forceShowShortcuts,
          _ = e.icon,
          w = e.isActive,
          y = e.isDisabled,
          T = e.isHovered,
          C = e.appearAsDisabled,
          k = e.label,
          S = e.link,
          O = e.showToolboxOnHover,
          E = e.target,
          M = e.toolbox,
          D = e.reference,
          N = e.onMouseOut,
          L = e.onMouseOver,
          j = e.theme,
          A = void 0 === j ? u : j,
          x = Object(c.a)(e),
          B = Object(i.useRef)(null);
        return a.a.createElement(
          p,
          Object(n.__assign)({}, x, {
            className: r(
              h,
              A.item,
              _ && A.withIcon,
              ((t = {}),
              (t[A.isActive] = w),
              (t[A.isDisabled] = y || C),
              (t[A.hovered] = T),
              t),
            ),
            title: b,
            href: S,
            target: E,
            reference: function (e) {
              (B.current = e), D && D(e);
            },
            onClick: function (t) {
              var o = e.dontClosePopup,
                n = e.onClick,
                i = e.onClickArg,
                a = e.trackEventObject;
              if (y) return;
              a && Object(s.trackEvent)(a.category, a.event, a.label);
              n && n(i, t);
              o || Object(l.b)();
            },
            onContextMenu: function (t) {
              var o = e.trackEventObject,
                n = e.trackRightClick;
              o &&
                n &&
                Object(s.trackEvent)(
                  o.category,
                  o.event,
                  o.label + '_rightClick',
                );
            },
            onMouseUp: function (t) {
              var o = e.trackEventObject,
                n = e.trackMouseWheelClick;
              if (1 === t.button && S && o) {
                var i = o.label;
                n && (i += '_mouseWheelClick'),
                  Object(s.trackEvent)(o.category, o.event, i);
              }
            },
            onMouseOver: L,
            onMouseOut: N,
          }),
          void 0 !== _ &&
            a.a.createElement('div', {
              className: A.icon,
              dangerouslySetInnerHTML: { __html: _ },
            }),
          a.a.createElement(
            'div',
            { className: r(A.labelRow, v) },
            a.a.createElement('div', { className: A.label }, k),
          ),
          (void 0 !== f || g) &&
            a.a.createElement(
              'div',
              { className: A.shortcut },
              (d = f) && d.split('+').join(' + '),
            ),
          void 0 !== M &&
            a.a.createElement(
              'div',
              {
                onClick: m,
                className: r(A.toolbox, ((o = {}), (o[A.showOnHover] = O), o)),
              },
              M,
            ),
        );
      }
    },
    NOPy: function (e, t, o) {
      e.exports = {
        separator: 'separator-25lkUpN-',
        small: 'small-1IE19htj',
        normal: 'normal-2jX5NqMI',
        large: 'large-3vmbMIE7',
      };
    },
    Sn4D: function (e, t, o) {
      'use strict';
      o.d(t, 'a', function () {
        return h;
      });
      var n = o('q1tI'),
        i = o.n(n),
        a = o('Eyy1'),
        r = o('TSYQ'),
        l = o('x0D+'),
        s = o('33OQ'),
        c = o('AiMB'),
        u = o('mkWe'),
        d = o('qFKp'),
        p = o('tWVy'),
        m = o('sHQ4');
      function h(e) {
        var t = e.position,
          o = e.onClose,
          h = e.children,
          b = e.className,
          v = Object(a.ensureNotNull)(Object(n.useContext)(u.a)),
          f = Object(n.useState)(0),
          g = f[0],
          _ = f[1],
          w = Object(n.useRef)(null);
        return (
          Object(n.useEffect)(function () {
            var e;
            return (
              null === (e = w.current) ||
                void 0 === e ||
                e.focus({ preventScroll: !0 }),
              p.a.subscribe(v, o),
              Object(s.setFixedBodyState)(!0),
              d.CheckMobile.iOS() &&
                Object(l.disableBodyScroll)(Object(a.ensureNotNull)(w.current)),
              _(v.addDrawer()),
              function () {
                p.a.unsubscribe(v, o);
                var e = v.removeDrawer();
                d.CheckMobile.iOS() &&
                  Object(l.enableBodyScroll)(
                    Object(a.ensureNotNull)(w.current),
                  ),
                  0 === e && Object(s.setFixedBodyState)(!1);
              }
            );
          }, []),
          i.a.createElement(
            c.a,
            null,
            i.a.createElement(
              'div',
              { className: r(m.wrap, m['position' + t]) },
              g === v.currentDrawer &&
                i.a.createElement('div', { className: m.backdrop, onClick: o }),
              i.a.createElement(
                'div',
                {
                  className: r(m.drawer, m['position' + t], b),
                  ref: function (e) {
                    w.current = e;
                  },
                  tabIndex: -1,
                },
                h,
              ),
            ),
          )
        );
      }
    },
    Vike: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" width="20" height="10"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M2 1l8 8 8-8"/></svg>';
    },
    Wz44: function (e, t, o) {
      e.exports = {
        container: 'container-3_8ayT2Q',
        mirror: 'mirror-crJbq8d0',
        background: 'background-Q1Fcmxly',
        arrow: 'arrow-WcYWFXUn',
      };
    },
    X0gx: function (e, t, o) {
      'use strict';
      o.d(t, 'a', function () {
        return r;
      });
      var n = o('q1tI'),
        i = o.n(n),
        a = o('tWVy'),
        r = i.a.createContext(a.a);
    },
    XfUw: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>';
    },
    dhVi: function (e, t, o) {
      'use strict';
      o.d(t, 'a', function () {
        return r;
      });
      var n = o('nPPD'),
        i = o('v1bN'),
        a = o('HD8h'),
        r = Object(n.a)(i, a);
    },
    fEjm: function (e, t, o) {
      e.exports = {
        favorite: 'favorite-2V8VHwKe',
        active: 'active-3pQAvYvT',
        checked: 'checked-2bhy04CF',
      };
    },
    gb5g: function (e, t, o) {
      e.exports = {
        button: 'button-263WXsg-',
        hover: 'hover-6KHfIHhL',
        bg: 'bg-1kRv1Pf2',
        icon: 'icon-1Y-3MM9F',
        isActive: 'isActive-2mI1-NUL',
        isTransparent: 'isTransparent-sRmateFl',
        isGrayed: 'isGrayed-1kWObWVr',
        isHidden: 'isHidden-2VzaskeU',
      };
    },
    hn2c: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16" width="10" height="16"><path d="M.6 1.4l1.4-1.4 8 8-8 8-1.4-1.4 6.389-6.532-6.389-6.668z"/></svg>';
    },
    mkWe: function (e, t, o) {
      'use strict';
      o.d(t, 'b', function () {
        return r;
      }),
        o.d(t, 'a', function () {
          return l;
        });
      var n = o('mrSG'),
        i = o('q1tI'),
        a = o.n(i),
        r = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            return (
              (o._addDrawer = function () {
                var e = o.state.currentDrawer + 1;
                return o.setState({ currentDrawer: e }), e;
              }),
              (o._removeDrawer = function () {
                var e = o.state.currentDrawer - 1;
                return o.setState({ currentDrawer: e }), e;
              }),
              (o.state = { currentDrawer: 0 }),
              o
            );
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype.render = function () {
              return a.a.createElement(
                l.Provider,
                {
                  value: {
                    addDrawer: this._addDrawer,
                    removeDrawer: this._removeDrawer,
                    currentDrawer: this.state.currentDrawer,
                  },
                },
                this.props.children,
              );
            }),
            t
          );
        })(a.a.PureComponent),
        l = a.a.createContext(null);
    },
    nPPD: function (e, t, o) {
      'use strict';
      function n(e, t, o) {
        void 0 === o && (o = {});
        for (
          var n = Object.assign({}, t), i = 0, a = Object.keys(t);
          i < a.length;
          i++
        ) {
          var r = a[i],
            l = o[r] || r;
          l in e && (n[r] = [e[l], t[r]].join(' '));
        }
        return n;
      }
      function i(e, t, o) {
        return void 0 === o && (o = {}), Object.assign({}, e, n(e, t, o));
      }
      o.d(t, 'b', function () {
        return n;
      }),
        o.d(t, 'a', function () {
          return i;
        });
    },
    pr86: function (e, t, o) {
      'use strict';
      o.d(t, 'a', function () {
        return d;
      });
      var n = o('mrSG'),
        i = (o('YFKU'), o('q1tI')),
        a = o('TSYQ'),
        r = o('Iivm'),
        l = o('sg5d'),
        s = o('XfUw'),
        c = o('fEjm'),
        u = {
          add: window.t('Add to favorites'),
          remove: window.t('Remove from favorites'),
        };
      function d(e) {
        var t = e.className,
          o = e.isFilled,
          d = e.isActive,
          p = e.onClick,
          m = Object(n.__rest)(e, [
            'className',
            'isFilled',
            'isActive',
            'onClick',
          ]);
        return i.createElement(
          r.Icon,
          Object(n.__assign)({}, m, {
            className: a(
              c.favorite,
              'apply-common-tooltip',
              o && c.checked,
              d && c.active,
              t,
            ),
            icon: o ? l : s,
            onClick: p,
            title: o ? u.remove : u.add,
          }),
        );
      }
    },
    sHQ4: function (e, t, o) {
      e.exports = {
        wrap: 'wrap-3vvdSnDX',
        backdrop: 'backdrop-1knaw_yl',
        positionBottom: 'positionBottom-3zJf6Byh',
        drawer: 'drawer-1_nJUEiM',
        positionLeft: 'positionLeft-2wxVhi9G',
      };
    },
    sg5d: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M9 1l2.35 4.76 5.26.77-3.8 3.7.9 5.24L9 13l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L9 1z"/></svg>';
    },
    swCq: function (e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = o('mrSG'),
        i = o('q1tI');
      t.Icon = i.forwardRef(function (e, t) {
        var o = e.icon,
          a = void 0 === o ? '' : o,
          r = n.__rest(e, ['icon']);
        return i.createElement(
          'span',
          n.__assign({}, r, { ref: t, dangerouslySetInnerHTML: { __html: a } }),
        );
      });
    },
    uJ8n: function (e, t, o) {
      e.exports = {
        wrap: 'wrap-1h7U5nKd',
        scrollWrap: 'scrollWrap-3gtPS0Fe',
        noScrollBar: 'noScrollBar-ieMwbfur',
        content: 'content-YhoA_L2m',
        icon: 'icon-2xObs8DI',
        scrollBot: 'scrollBot-2HHpZNuf',
        scrollTop: 'scrollTop-1eXi8ltS',
        isVisible: 'isVisible-3zZOL3TO',
        iconWrap: 'iconWrap-2Q69rfEO',
        fadeBot: 'fadeBot-3JstnoWq',
        fadeTop: 'fadeTop-3oJzNyTq',
      };
    },
    uhCe: function (e, t, o) {
      'use strict';
      o.d(t, 'a', function () {
        return i;
      });
      var n = o('ASyk'),
        i = {
          SmallHeight: n['small-height-breakpoint'],
          TabletSmall: n['tablet-small-breakpoint'],
          TabletNormal: n['tablet-normal-breakpoint'],
        };
    },
    v1bN: function (e, t, o) {
      e.exports = {
        'tablet-small-breakpoint': 'screen and (max-width: 419px)',
        item: 'item-2xPVYue0',
        hovered: 'hovered-1uf45E05',
        isDisabled: 'isDisabled-1wLqKupj',
        isActive: 'isActive-2j-GhQs_',
        shortcut: 'shortcut-30pveiCO',
        toolbox: 'toolbox-3ulPxfe-',
        withIcon: 'withIcon-1xBjf-oB',
        icon: 'icon-2Qm7YIcz',
        labelRow: 'labelRow-3Q0rdE8-',
        label: 'label-3Xqxy756',
        showOnHover: 'showOnHover-1q6ySzZc',
      };
    },
    'x0D+': function (e, t, o) {
      var n, i, a;
      (i = [t]),
        void 0 ===
          (a =
            'function' ==
            typeof (n = function (e) {
              'use strict';
              function t(e) {
                if (Array.isArray(e)) {
                  for (var t = 0, o = Array(e.length); t < e.length; t++)
                    o[t] = e[t];
                  return o;
                }
                return Array.from(e);
              }
              Object.defineProperty(e, '__esModule', { value: !0 });
              var o = !1;
              if ('undefined' != typeof window) {
                var n = {
                  get passive() {
                    o = !0;
                  },
                };
                window.addEventListener('testPassive', null, n),
                  window.removeEventListener('testPassive', null, n);
              }
              var i =
                  'undefined' != typeof window &&
                  window.navigator &&
                  window.navigator.platform &&
                  /iP(ad|hone|od)/.test(window.navigator.platform),
                a = [],
                r = !1,
                l = -1,
                s = void 0,
                c = void 0,
                u = function (e) {
                  return a.some(function (t) {
                    return !(
                      !t.options.allowTouchMove || !t.options.allowTouchMove(e)
                    );
                  });
                },
                d = function (e) {
                  var t = e || window.event;
                  return (
                    !!u(t.target) ||
                    1 < t.touches.length ||
                    (t.preventDefault && t.preventDefault(), !1)
                  );
                },
                p = function () {
                  setTimeout(function () {
                    void 0 !== c &&
                      ((document.body.style.paddingRight = c), (c = void 0)),
                      void 0 !== s &&
                        ((document.body.style.overflow = s), (s = void 0));
                  });
                };
              (e.disableBodyScroll = function (e, n) {
                if (i) {
                  if (!e)
                    return void console.error(
                      'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.',
                    );
                  if (
                    e &&
                    !a.some(function (t) {
                      return t.targetElement === e;
                    })
                  ) {
                    var p = { targetElement: e, options: n || {} };
                    (a = [].concat(t(a), [p])),
                      (e.ontouchstart = function (e) {
                        1 === e.targetTouches.length &&
                          (l = e.targetTouches[0].clientY);
                      }),
                      (e.ontouchmove = function (t) {
                        var o, n, i, a;
                        1 === t.targetTouches.length &&
                          ((n = e),
                          (a = (o = t).targetTouches[0].clientY - l),
                          !u(o.target) &&
                            ((n && 0 === n.scrollTop && 0 < a) ||
                            ((i = n) &&
                              i.scrollHeight - i.scrollTop <= i.clientHeight &&
                              a < 0)
                              ? d(o)
                              : o.stopPropagation()));
                      }),
                      r ||
                        (document.addEventListener(
                          'touchmove',
                          d,
                          o ? { passive: !1 } : void 0,
                        ),
                        (r = !0));
                  }
                } else {
                  (h = n),
                    setTimeout(function () {
                      if (void 0 === c) {
                        var e = !!h && !0 === h.reserveScrollBarGap,
                          t =
                            window.innerWidth -
                            document.documentElement.clientWidth;
                        e &&
                          0 < t &&
                          ((c = document.body.style.paddingRight),
                          (document.body.style.paddingRight = t + 'px'));
                      }
                      void 0 === s &&
                        ((s = document.body.style.overflow),
                        (document.body.style.overflow = 'hidden'));
                    });
                  var m = { targetElement: e, options: n || {} };
                  a = [].concat(t(a), [m]);
                }
                var h;
              }),
                (e.clearAllBodyScrollLocks = function () {
                  i
                    ? (a.forEach(function (e) {
                        (e.targetElement.ontouchstart = null),
                          (e.targetElement.ontouchmove = null);
                      }),
                      r &&
                        (document.removeEventListener(
                          'touchmove',
                          d,
                          o ? { passive: !1 } : void 0,
                        ),
                        (r = !1)),
                      (a = []),
                      (l = -1))
                    : (p(), (a = []));
                }),
                (e.enableBodyScroll = function (e) {
                  if (i) {
                    if (!e)
                      return void console.error(
                        'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.',
                      );
                    (e.ontouchstart = null),
                      (e.ontouchmove = null),
                      (a = a.filter(function (t) {
                        return t.targetElement !== e;
                      })),
                      r &&
                        0 === a.length &&
                        (document.removeEventListener(
                          'touchmove',
                          d,
                          o ? { passive: !1 } : void 0,
                        ),
                        (r = !1));
                  } else
                    1 === a.length && a[0].targetElement === e
                      ? (p(), (a = []))
                      : (a = a.filter(function (t) {
                          return t.targetElement !== e;
                        }));
                });
            })
              ? n.apply(t, i)
              : n) || (e.exports = a);
    },
    ybOa: function (e, t, o) {
      e.exports = {
        toggleButton: 'toggleButton-3TAD9tll',
        collapsed: 'collapsed-2PwwPYYB',
        background: 'background-1bSnR2Ey',
        arrow: 'arrow-liYbPQ3o',
      };
    },
  },
]);
