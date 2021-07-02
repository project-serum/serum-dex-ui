(window.webpackJsonp = window.webpackJsonp || []).push([
  ['restricted-toolset', 'series-icons-map'],
  {
    '+KIV': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8 9.5H6.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V20m-8-1.5h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1z"/></svg>';
    },
    '1Tx8': function (e, t, n) {
      e.exports = {
        button: 'button-YsN2vRuA',
        withText: 'withText-JhQdRoPu',
        withoutText: 'withoutText-f6SoijeW',
      };
    },
    '1TxM': function (e, t, n) {
      'use strict';
      n.d(t, 'c', function () {
        return l;
      }),
        n.d(t, 'a', function () {
          return c;
        }),
        n.d(t, 'b', function () {
          return u;
        });
      var a = n('q1tI'),
        i = n.n(a),
        o = n('17x9'),
        r = n.n(o),
        s = i.a.createContext({});
      function l(e, t) {
        r.a.checkPropTypes(t, e, 'context', 'RegistryContext');
      }
      function c(e) {
        var t = e.validation,
          n = e.value;
        return l(n, t), i.a.createElement(s.Provider, { value: n }, e.children);
      }
      function u() {
        return s;
      }
    },
    '1uoO': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M9 8v12h3V8H9zm-1-.502C8 7.223 8.215 7 8.498 7h4.004c.275 0 .498.22.498.498v13.004a.493.493 0 0 1-.498.498H8.498A.496.496 0 0 1 8 20.502V7.498z"/><path d="M10 4h1v3.5h-1z"/><path d="M17 6v6h3V6h-3zm-1-.5c0-.276.215-.5.498-.5h4.004c.275 0 .498.23.498.5v7c0 .276-.215.5-.498.5h-4.004a.503.503 0 0 1-.498-.5v-7z"/><path d="M18 2h1v3.5h-1z"/></svg>';
    },
    '23di': function (e, t, n) {
      e.exports = {
        wrap: 'wrap-3OynVXTx',
        titleWrap: 'titleWrap-yVINuOIC',
        indicators: 'indicators-CRJ2i71K',
        title: 'title-Iod5hZQV',
        icon: 'icon-3bTRbX0U',
        text: 'text-2BJe_3ce',
        titleTabletSmall: 'titleTabletSmall-23pyY8Xw',
        labelRow: 'labelRow-2Vs9IqnP',
        label: 'label-1LxfyrID',
      };
    },
    '2xRE': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M18.293 13l-2.647 2.646.707.708 3.854-3.854-3.854-3.854-.707.708L18.293 12H12.5A5.5 5.5 0 0 0 7 17.5V19h1v-1.5a4.5 4.5 0 0 1 4.5-4.5h5.793z"/></svg>';
    },
    '3j+J': function (e, t, n) {
      e.exports = {
        wrapper: 'wrapper-24zqYyK4',
        labelRow: 'labelRow-1iPG3dcw',
        label: 'label-2LqksoTK',
        labelHint: 'labelHint-3H3QjpAE',
        labelOn: 'labelOn-1_CJ0mp2',
      };
    },
    '4hTN': function (e, t, n) {
      e.exports = { value: 'value-DWZXOdoK', selected: 'selected-2V87KUXm' };
    },
    '4pMH': function (e, t, n) {},
    '5ijr': function (e) {
      e.exports = JSON.parse(
        '{"switcherWrapper":"switcherWrapper-1wFH-_jm","size-small":"size-small-1gT-kZYO","size-large":"size-large-MOSirnj_","intent-select":"intent-select-2kut8F29","switcherThumbWrapper":"switcherThumbWrapper-2u191lDO","input":"input-J7QIcTTo","switcherTrack":"switcherTrack-2XruDVTa","intent-default":"intent-default-3soo5rvS","switcherThumb":"switcherThumb-2yuEucci","focus":"focus-uZMRkCO0"}',
      );
    },
    '6KyJ': function (e, t, n) {
      'use strict';
      var a,
        i = n('q1tI'),
        o = n('TSYQ'),
        r = n('K9GE'),
        s = n('YZ9j');
      n('O7m7');
      !(function (e) {
        (e[(e.Initial = 0)] = 'Initial'),
          (e[(e.Appear = 1)] = 'Appear'),
          (e[(e.Active = 2)] = 'Active');
      })(a || (a = {}));
      class l extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._stateChangeTimeout = null),
            (this.state = { state: a.Initial });
        }
        render() {
          const { className: e, color: t = 'black' } = this.props,
            n = o(s.item, { [s[t]]: Boolean(t) });
          return i.createElement(
            'span',
            { className: o(s.loader, e, this._getStateClass()) },
            i.createElement('span', { className: n }),
            i.createElement('span', { className: n }),
            i.createElement('span', { className: n }),
          );
        }
        componentDidMount() {
          this.setState({ state: a.Appear }),
            (this._stateChangeTimeout = setTimeout(() => {
              this.setState({ state: a.Active });
            }, 2 * r.c));
        }
        componentWillUnmount() {
          this._stateChangeTimeout &&
            (clearTimeout(this._stateChangeTimeout),
            (this._stateChangeTimeout = null));
        }
        _getStateClass() {
          switch (this.state.state) {
            case a.Initial:
              return s['loader-initial'];
            case a.Appear:
              return s['loader-appear'];
            default:
              return '';
          }
        }
      }
      n.d(t, 'a', function () {
        return l;
      });
    },
    '8RO/': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      }),
        n.d(t, 'b', function () {
          return o;
        });
      var a = n('3ClC');
      function i(e, t) {
        return {
          indicators: e
            .orderedDataSources(!0)
            .filter(function (e) {
              return Object(a.isStudy)(e) && !Object(a.isESDStudy)(e);
            })
            .map(function (e) {
              return {
                id: e.metaInfo().id,
                description: e.title(!0, void 0, !0),
              };
            }),
          interval: t,
        };
      }
      function o(e) {
        var t = new Map();
        return (
          e.forEach(function (e) {
            var n = t.get(e.id) || [e.description, 0],
              a = n[0],
              i = n[1];
            t.set(e.id, [a, i + 1]);
          }),
          Array.from(t.values())
            .map(function (e) {
              var t = e[0],
                n = e[1];
              return t + (n > 1 ? ' x ' + n : '');
            })
            .join(', ')
        );
      }
    },
    '8d0Q': function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return i;
      }),
        n.d(t, 'a', function () {
          return o;
        });
      var a = n('q1tI');
      function i() {
        var e = Object(a.useState)(!1),
          t = e[0],
          n = e[1];
        return [
          t,
          {
            onMouseOver: function (e) {
              o(e) && n(!0);
            },
            onMouseOut: function (e) {
              o(e) && n(!1);
            },
          },
        ];
      }
      function o(e) {
        return !e.currentTarget.contains(e.relatedTarget);
      }
    },
    '9NBK': function (e, t, n) {
      e.exports = { item: 'item-b8AKccvl', round: 'round-2UQxqNA1' };
    },
    ASyk: function (e, t, n) {
      e.exports = {
        'tablet-normal-breakpoint': 'screen and (max-width: 768px)',
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        'tablet-small-breakpoint': 'screen and (max-width: 419px)',
      };
    },
    CX26: function (e, t, n) {
      e.exports = {
        form: 'form-2itceCqS',
        interacting: 'interacting-3joY26dg',
        input: 'input-z46tLQgj',
        menu: 'menu-35lWsSKr',
        add: 'add-1NrfSAvb',
        hovered: 'hovered-1nwOcWv8',
        hover: 'hover-2JY1kj4n',
        wrap: 'wrap-1oB2WI2R',
      };
    },
    EsZh: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'SERIES_ICONS', function () {
          return h;
        });
      var a,
        i = n('G2sT'),
        o = n('Jtxf'),
        r = n('pqsj'),
        s = n('1uoO'),
        l = n('FO3N'),
        c = n('t2Sj'),
        u = n('fD7T'),
        d = n('VgwI'),
        h =
          (((a = {})[3] = i),
          (a[0] = o),
          (a[1] = r),
          (a[8] = s),
          (a[9] = l),
          (a[2] = c),
          (a[10] = u),
          (a[12] = d),
          a);
    },
    EvtC: function (e, t, n) {
      e.exports = { button: 'button-2-lC3gh4' };
    },
    FO3N: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"/><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"/><path d="M9 8v11h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5z"/><path d="M10 4h1v5h-1zm0 14h1v5h-1zM8.5 9H10v1H8.5zM11 9h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11z"/></svg>';
    },
    G2sT: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M12.5 17.207L18.707 11h2l3.647-3.646-.708-.708L20.293 10h-2L12.5 15.793l-3-3-4.854 4.853.708.708L9.5 14.207z"/><path d="M9 16h1v1H9zm1 1h1v1h-1zm-1 1h1v1H9zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1H9zm2 0h1v1h-1zm-3-3h1v1H8zm-1 1h1v1H7zm-1 1h1v1H6zm2 0h1v1H8zm-1 1h1v1H7zm-2 0h1v1H5zm17-9h1v1h-1zm1-1h1v1h-1zm0 2h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-5-7h1v1h-1zm2 0h1v1h-1zm1-1h1v1h-1zm-2 2h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-2-6h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-3-3h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1z"/></svg>';
    },
    GgvM: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor"><path d="M21 7v4h1V6h-5v1z"/><path d="M16.854 11.854l5-5-.708-.708-5 5zM7 7v4H6V6h5v1z"/><path d="M11.146 11.854l-5-5 .708-.708 5 5zM21 21v-4h1v5h-5v-1z"/><path d="M16.854 16.146l5 5-.708.708-5-5z"/><g><path d="M7 21v-4H6v5h5v-1z"/><path d="M11.146 16.146l-5 5 .708.708 5-5z"/></g></g></svg>';
    },
    HBiQ: function (e, t, n) {
      e.exports = {
        button: 'button-1IIz2ju4',
        first: 'first-bfrNico9',
        last: 'last-3h-LFsOr',
      };
    },
    HD8h: function (e, t, n) {
      e.exports = {
        item: 'item-184T8X5A',
        label: 'label-20cSBx98',
        labelRow: 'labelRow-2fmEJqjl',
        toolbox: 'toolbox-2H0D5bLi',
      };
    },
    Jtxf: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="none" stroke="currentColor" stroke-linecap="square"><path d="M10.5 7.5v15M7.5 20.5H10M13.5 11.5H11M19.5 6.5v15M16.5 9.5H19M22.5 16.5H20"/></g></svg>';
    },
    MB0Y: function (e, t, n) {
      'use strict';
      var a = n('mrSG'),
        i = n('q1tI'),
        o = n.n(i),
        r = n('TSYQ'),
        s = n.n(r),
        l = n('5ijr');
      n('4pMH');
      function c(e) {
        const {
          className: t = '',
          intent: n = 'default',
          size: a = 'small',
          disabled: i,
        } = e;
        return r(t, l.switcherWrapper, l['size-' + a], !i && l['intent-' + n]);
      }
      class u extends i.PureComponent {
        render() {
          const e = this.props,
            { reference: t, size: n, intent: o } = e,
            s = Object(a.e)(e, ['reference', 'size', 'intent']),
            u = r(l.input, -1 !== this.props.tabIndex && l.focus);
          return i.createElement(
            'div',
            { className: c(this.props) },
            i.createElement(
              'input',
              Object.assign({}, s, { type: 'checkbox', className: u, ref: t }),
            ),
            i.createElement(
              'div',
              { className: l.switcherThumbWrapper },
              i.createElement('div', { className: l.switcherTrack }),
              i.createElement('div', { className: l.switcherThumb }),
            ),
          );
        }
      }
      var d = n('QpNh'),
        h = n('OP2o');
      n.d(t, 'a', function () {
        return v;
      }),
        n.d(t, 'b', function () {
          return m;
        });
      var v = h;
      function m(e) {
        var t = e.className,
          n = e.checked,
          i = e.id,
          r = e.label,
          l = e.labelDescription,
          c = e.value,
          v = e.preventLabelHighlight,
          m = e.reference,
          p = e.switchReference,
          f = e.theme,
          b = void 0 === f ? h : f,
          g = s()(b.label, n && !v && b.labelOn),
          C = s()(t, b.wrapper, n && b.wrapperWithOnLabel);
        return o.a.createElement(
          'label',
          { className: C, htmlFor: i, ref: m },
          o.a.createElement(
            'div',
            { className: b.labelRow },
            o.a.createElement('div', { className: g }, r),
            l && o.a.createElement('div', { className: b.labelHint }, l),
          ),
          o.a.createElement(
            u,
            Object(a.a)(
              {
                className: b.switch,
                reference: p,
                checked: n,
                onChange: function (t) {
                  var n = t.target.checked;
                  void 0 !== e.onChange && e.onChange(n);
                },
                value: c,
                tabIndex: -1,
                id: i,
              },
              Object(d.a)(e),
            ),
          ),
        );
      }
    },
    O7m7: function (e, t, n) {},
    OP2o: function (e, t, n) {
      e.exports = {
        wrapper: 'wrapper-3Sj-FzgR',
        hovered: 'hovered-1G0yygIe',
        labelRow: 'labelRow-3h7cSJ_L',
        label: 'label-3iLxp29M',
        labelHint: 'labelHint-3qxeiVfa',
        labelOn: 'labelOn-10QGwv2n',
      };
    },
    Oy6E: function (e, t, n) {
      e.exports = { spinnerWrap: 'spinnerWrap-EgWaITv6' };
    },
    RGo6: function (e, t, n) {
      e.exports = {
        opened: 'opened-GQFVkrpV',
        hover: 'hover-1s0KqpdE',
        autoSaveWrapper: 'autoSaveWrapper-1MJY41zr',
        sharingWrapper: 'sharingWrapper-2a3BKnuf',
        button: 'button-X9fdkr3t',
        buttonSmallPadding: 'buttonSmallPadding-3OtdkF4f',
        hintPlaceHolder: 'hintPlaceHolder-3xGrUHN7',
        smallHintPlaceHolder: 'smallHintPlaceHolder-3ftZG2PP',
        popupItemRowTabletSmall: 'popupItemRowTabletSmall-3IpexBN9',
      };
    },
    RYBj: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M13.5 6a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM4 14.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="currentColor" d="M9 14h4v-4h1v4h4v1h-4v4h-1v-4H9v-1z"/></svg>';
    },
    'S+Ii': function (e, t, n) {
      e.exports = {
        buttonUndo: 'buttonUndo-342XpPC1',
        buttonRedo: 'buttonRedo-3o_XdU_J',
      };
    },
    S0BX: function (e, t, n) {
      e.exports = {
        dropdown: 'dropdown-3caJUCGx',
        label: 'label-3vchy5zS',
        smallWidthTitle: 'smallWidthTitle-2IQL6W7f',
        smallWidthMenuItem: 'smallWidthMenuItem-1ZGyfGnk',
        smallWidthWrapper: 'smallWidthWrapper-DpXp8jNn',
      };
    },
    SchQ: function (e, t, n) {
      e.exports = {
        button: 'button-1EU5-JL7',
        isDisabled: 'isDisabled-1RjJSnJ7',
        text: 'text-1HWeUAzA',
      };
    },
    Sl3V: function (e, t, n) {
      e.exports = {
        menu: 'menu-u0h_1WZF',
        menuSmallTablet: 'menuSmallTablet-38uNZm-3',
        menuItemHeaderTabletSmall: 'menuItemHeaderTabletSmall-3uVAdPZo',
        menuItemHeader: 'menuItemHeader-23tPtGRB',
      };
    },
    To8B: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>';
    },
    UJ4t: function (e, t, n) {
      e.exports = { wrap: 'wrap-18oKCBRc' };
    },
    VgwI: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7.5 7H7v14h5V7H7.5zM8 20V8h3v12H8zm7.5-11H15v10h5V9h-4.5zm.5 9v-8h3v8h-3z"/></svg>';
    },
    X7WP: function (e, t, n) {
      e.exports = {
        wrap: 'wrap-CUt4Mg1V',
        inner: 'inner-32OP7ejC',
        actions: 'actions-1cGPn1dW',
        hover: 'hover-3dmVjFov',
        input: 'input-3lfOzLDc',
        defaultCursor: 'defaultCursor-3uzgANBW',
        isExpanded: 'isExpanded-1pdStI5Z',
      };
    },
    XWsk: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M20 17l-5 5M15 17l5 5M9 11.5h7M17.5 8a2.5 2.5 0 0 0-5 0v11a2.5 2.5 0 0 1-5 0"/></svg>';
    },
    XfUw: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>';
    },
    YEs3: function (e, t, n) {
      e.exports = { button: 'button-1F3Go35E', menu: 'menu-16FRUKka' };
    },
    YZ9j: function (e) {
      e.exports = JSON.parse(
        '{"loader":"loader-8x1ZxRwP","item":"item-2-89r_cd","tv-button-loader":"tv-button-loader-23vqS1uY","black":"black-20Ytsf0V","white":"white-1ucCcc2I","gray":"gray-XDhHSS-T","loader-initial":"loader-initial-1deQDeio","loader-appear":"loader-appear-2krFtMrd"}',
      );
    },
    aVq2: function (e, t, n) {
      e.exports = {
        button: 'button-1XkSWU32',
        first: 'first-2UbSFGzF',
        last: 'last-1rdUnwE6',
        menu: 'menu-1fA401bY',
        dropdown: 'dropdown-1zOBoqnG',
        menuContent: 'menuContent-1vyIDg3J',
        section: 'section-1p7gLxC9',
        smallTabletSectionTitle: 'smallTabletSectionTitle-37qvpInD',
        addCustomInterval: 'addCustomInterval-J84ksScT',
        hovered: 'hovered-3E4iNJoh',
      };
    },
    cSDC: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      }),
        n.d(t, 'b', function () {
          return s;
        });
      var a = n('YFKU'),
        i = n('pPtI'),
        o = n('LxhU'),
        r = [
          { name: '1', label: Object(a.t)('minutes', { context: 'interval' }) },
          { name: '1H', label: Object(a.t)('hours', { context: 'interval' }) },
          { name: '1D', label: Object(a.t)('days', { context: 'interval' }) },
          { name: '1W', label: Object(a.t)('weeks', { context: 'interval' }) },
          { name: '1M', label: Object(a.t)('months', { context: 'interval' }) },
        ];
      function s(e, t) {
        var n = parseInt(e);
        if (
          n ===
          (function (e, t) {
            return Math.max(1, Math.min(e, Object(i.getMaxResolutionValue)(t)));
          })(n, t)
        ) {
          var a = o.Interval.parse(t),
            r = a.isMinuteHours() ? 60 * n : n;
          return new o.Interval(a.kind(), r).value();
        }
      }
    },
    dhVi: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var a = n('nPPD'),
        i = n('v1bN'),
        o = n('HD8h'),
        r = Object(a.a)(i, o);
    },
    fD7T: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="none" stroke="currentColor"><path stroke-dasharray="1,1" d="M4 14.5h22"/><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 12.5l2-4 1 2 2-4 3 6"/><path stroke-linecap="round" d="M5.5 16.5l-1 2"/><path stroke-linecap="round" stroke-linejoin="round" d="M17.5 16.5l2 4 2-4m2-4l1-2-1 2z"/></g></svg>';
    },
    fESK: function (e, t, n) {
      e.exports = {
        labelRow: 'labelRow-1loM6nbt',
        toolbox: 'toolbox-3y2qhvbG',
        description: 'description-UeULl1bt',
        descriptionTabletSmall: 'descriptionTabletSmall-iXl7OFTS',
        item: 'item-GOMwFObW',
        titleItem: 'titleItem-3OGNprLt',
        titleItemTabletSmall: 'titleItemTabletSmall-HWAlNL6k',
        itemTabletSmall: 'itemTabletSmall-3fytMoGU',
        itemLabelTabletSmall: 'itemLabelTabletSmall-3VG7Qvey',
        wrap: 'wrap-3ulNVWio',
        hovered: 'hovered-tcAOA2o_',
      };
    },
    fEjm: function (e, t, n) {
      e.exports = {
        favorite: 'favorite-2V8VHwKe',
        disabled: 'disabled-3ebwimbb',
        active: 'active-3pQAvYvT',
        checked: 'checked-2bhy04CF',
      };
    },
    fioS: function (e, t, n) {
      e.exports = {
        summary: 'summary-3_6tmh1R',
        hovered: 'hovered-1yGmee-_',
        caret: 'caret-1v4NzWzm',
      };
    },
    gla1: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var a = n('q1tI'),
        i = function () {
          return Object(a.useReducer)(function (e, t) {
            return e + 1;
          }, 0)[1];
        };
    },
    'i/MG': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return u;
      });
      var a = n('mrSG'),
        i = (n('YFKU'), n('q1tI')),
        o = n('TSYQ'),
        r = n('Iivm'),
        s = n('To8B'),
        l = n('kXJy'),
        c = { remove: window.t('Remove') };
      function u(e) {
        var t = e.className,
          n = e.isActive,
          u = e.onClick,
          d = e.title,
          h = e.hidden,
          v = e['data-name'],
          m = void 0 === v ? 'remove-button' : v,
          p = Object(a.e)(e, [
            'className',
            'isActive',
            'onClick',
            'title',
            'hidden',
            'data-name',
          ]);
        return i.createElement(
          r.a,
          Object(a.a)({}, p, {
            'data-name': m,
            className: o(
              l.button,
              'apply-common-tooltip',
              n && l.active,
              h && l.hidden,
              t,
            ),
            icon: s,
            onClick: u,
            title: d || c.remove,
          }),
        );
      }
    },
    jKyl: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><g fill="none"><path stroke="currentColor" d="M11 20.5H7.5a5 5 0 1 1 .42-9.98 7.5 7.5 0 0 1 14.57 2.1 4 4 0 0 1-1 7.877H18"/><path stroke="currentColor" d="M14.5 24V12.5M11 16l3.5-3.5L18 16"/></g></svg>';
    },
    kXJy: function (e, t, n) {
      e.exports = {
        button: 'button-1scLo53s',
        disabled: 'disabled-2eJ5fvUz',
        active: 'active-2T0ofIIp',
        hidden: 'hidden-2GRQzIQ1',
      };
    },
    'koZ+': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.118 6a.5.5 0 0 0-.447.276L9.809 8H5.5A1.5 1.5 0 0 0 4 9.5v10A1.5 1.5 0 0 0 5.5 21h16a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 21.5 8h-4.309l-.862-1.724A.5.5 0 0 0 15.882 6h-4.764zm-1.342-.17A1.5 1.5 0 0 1 11.118 5h4.764a1.5 1.5 0 0 1 1.342.83L17.809 7H21.5A2.5 2.5 0 0 1 24 9.5v10a2.5 2.5 0 0 1-2.5 2.5h-16A2.5 2.5 0 0 1 3 19.5v-10A2.5 2.5 0 0 1 5.5 7h3.691l.585-1.17z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"/></svg>';
    },
    lAXe: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21"><g fill="none" stroke="currentColor"><path d="M18.5 11v5.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2H9"/><path stroke-linecap="square" d="M18 2l-8.5 8.5m4-9h5v5"/></g></svg>';
    },
    miV2: function (e, t, n) {
      'use strict';
      n.r(t);
      var a,
        i = n('Kxc7'),
        o = n('mrSG'),
        r = n('q1tI'),
        s = n.n(r),
        l = n('17x9'),
        c = n('dfhE'),
        u = n('EsZh'),
        d = n('pr86'),
        h = n('Iivm'),
        v = n('N5tr'),
        m = n('82wv'),
        p = n('TSYQ'),
        f = n.n(p),
        b = n('UJ4t'),
        g = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.children,
                n = e.className,
                a = Object(o.e)(e, ['children', 'className']);
              return r.createElement(
                'div',
                Object(o.a)({ className: p(n, b.wrap) }, a),
                t,
              );
            }),
            t
          );
        })(r.PureComponent),
        C = n('tU7i'),
        S = n('QpNh'),
        w = n('HBiQ'),
        _ = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._handleClick = function () {
                var e = t.props,
                  n = e.onClick,
                  a = e.onClickArg;
                n && n(a);
              }),
              t
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.render = function () {
              var e,
                t = this.props,
                n = t.isFirst,
                a = t.isLast,
                i = t.hint,
                s = t.text,
                l = t.icon,
                c = t.isActive,
                u = t.isDisabled,
                d = t.className,
                h = Object(S.a)(this.props);
              return r.createElement(
                C.b,
                Object(o.a)({}, h, {
                  icon: l,
                  text: s,
                  title: i,
                  isDisabled: u,
                  isActive: c,
                  isGrouped: !0,
                  onClick: this._handleClick,
                  className: p(
                    d,
                    w.button,
                    ((e = {}), (e[w.first] = n), (e[w.last] = a), e),
                  ),
                }),
              );
            }),
            t
          );
        })(r.PureComponent),
        y = n('KKsp'),
        k = n('/KDZ'),
        O = n('uhCe'),
        x = n('dhVi'),
        E = n('1TxM'),
        M = n('YEs3'),
        T =
          (((a = {})[0] = window.t('Bars')),
          (a[1] = window.t('Candles')),
          (a[9] = window.t('Hollow Candles')),
          (a[8] = window.t('Heikin Ashi')),
          (a[2] = window.t('Line')),
          (a[3] = window.t('Area')),
          (a[10] = window.t('Baseline')),
          (a[12] = window.t('High-Low')),
          a);
      var j = { barsStyle: window.t("Bar's Style"), labels: T },
        I = Object(E.b)(),
        A = (function (e) {
          function t(t, n) {
            var a = e.call(this, t, n) || this;
            (a._handleChangeStyle = function (e) {
              var t = a.state,
                n = t.favorites,
                i = t.lastSelectedNotFavorite,
                o = t.activeStyle;
              a.setState({
                activeStyle: e,
                lastSelectedNotFavorite: n.includes(o) ? i : o,
              });
            }),
              (a._handleSelectStyle = function (e) {
                var t = a.context.chartWidgetCollection;
                e !== t.activeChartStyle.value() &&
                  t.trySetChartStyleToActiveWidget(e);
              }),
              (a._handleClickFavorite = function (e) {
                a._isStyleFavorited(e)
                  ? a._handleRemoveFavorite(e)
                  : a._handleAddFavorite(e);
              }),
              Object(E.c)(n, {
                chartWidgetCollection: l.any.isRequired,
                favoriteChartStylesService: l.any.isRequired,
              });
            var o = n.chartWidgetCollection,
              r = n.favoriteChartStylesService,
              s = o.activeChartStyle.value(),
              c = r.get();
            i.enabled('japanese_chart_styles');
            return (
              (a.state = {
                activeStyle: s,
                favorites: c,
                styles: [0, 1, 9, 8, 2, 3, 10],
                japaneseStyles: [],
              }),
              i.enabled('chart_style_hilo') && a.state.styles.push(12),
              a
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.context,
                t = e.chartWidgetCollection,
                n = e.favoriteChartStylesService;
              t.activeChartStyle.subscribe(this._handleChangeStyle),
                n.getOnChange().subscribe(this, this._handleChangeSettings);
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.context,
                t = e.chartWidgetCollection,
                n = e.favoriteChartStylesService;
              t.activeChartStyle.unsubscribe(this._handleChangeStyle),
                n.getOnChange().unsubscribe(this, this._handleChangeSettings);
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.isShownQuicks,
                a = t.displayMode,
                i = void 0 === a ? 'full' : a,
                s = t.id,
                l = this.state,
                d = l.activeStyle,
                v = l.favorites,
                p = l.styles,
                f = l.japaneseStyles,
                b = l.lastSelectedNotFavorite,
                C = 'small' !== i && n && 0 !== v.length,
                S = Object(o.f)(v);
              S.includes(d) ? void 0 !== b && S.push(b) : S.push(d);
              var w = C && S.length > 1;
              return r.createElement(
                k.a,
                { rule: O.a.TabletSmall },
                function (t) {
                  var n = p.map(function (n) {
                      return e._renderPopupMenuItem(n, n === d, t);
                    }),
                    a = f.map(function (n) {
                      return e._renderPopupMenuItem(n, n === d, t);
                    });
                  return r.createElement(
                    g,
                    { id: s },
                    w &&
                      S.map(function (t, n) {
                        return r.createElement(_, {
                          className: M.button,
                          icon: u.SERIES_ICONS[t],
                          isActive: C && d === t,
                          key: n,
                          hint: j.labels[t],
                          isFirst: 0 === n,
                          isLast: n === S.length - 1,
                          onClick: C ? e._handleSelectStyle : void 0,
                          onClickArg: t,
                          'data-value': c.STYLE_SHORT_NAMES[t],
                        });
                      }),
                    r.createElement(
                      m.a,
                      {
                        arrow: Boolean(w),
                        content: w
                          ? void 0
                          : r.createElement(
                              g,
                              null,
                              r.createElement(h.a, { icon: u.SERIES_ICONS[d] }),
                            ),
                        title: w ? j.barsStyle : j.labels[d],
                        className: M.menu,
                        isDrawer: t,
                      },
                      n,
                      !!a.length && r.createElement(y.a, null),
                      a,
                    ),
                  );
                },
              );
            }),
            (t.prototype._renderPopupMenuItem = function (e, t, n) {
              var a = this,
                i = this.props.isFavoritingAllowed,
                o = this._isStyleFavorited(e);
              return r.createElement(v.b, {
                key: e,
                theme: n ? x.a : void 0,
                icon: u.SERIES_ICONS[e],
                isActive: t,
                label: j.labels[e] || '',
                onClick: this._handleSelectStyle,
                onClickArg: e,
                showToolboxOnHover: !o,
                toolbox:
                  i &&
                  r.createElement(d.a, {
                    isActive: t,
                    isFilled: o,
                    onClick: function () {
                      return a._handleClickFavorite(e);
                    },
                  }),
                'data-value': c.STYLE_SHORT_NAMES[e],
              });
            }),
            (t.prototype._handleChangeSettings = function (e) {
              this.setState({ lastSelectedNotFavorite: void 0, favorites: e });
            }),
            (t.prototype._isStyleFavorited = function (e) {
              return -1 !== this.state.favorites.indexOf(e);
            }),
            (t.prototype._handleAddFavorite = function (e) {
              var t = this.state.favorites;
              this.context.favoriteChartStylesService.set(Object(o.f)(t, [e]));
            }),
            (t.prototype._handleRemoveFavorite = function (e) {
              var t = this.state.favorites;
              this.context.favoriteChartStylesService.set(
                t.filter(function (t) {
                  return t !== e;
                }),
              );
            }),
            (t.contextType = I),
            t
          );
        })(r.PureComponent),
        N = n('YFKU'),
        R = n('1Tx8'),
        z = ['medium', 'small'];
      function F(e) {
        var t = e.text,
          n = e.className,
          a = e.displayMode,
          i = e.collapseWhen,
          s = void 0 === i ? z : i,
          l = Object(o.e)(e, [
            'text',
            'className',
            'displayMode',
            'collapseWhen',
          ]),
          c = !s.includes(a);
        return r.createElement(
          C.b,
          Object(o.a)({}, l, {
            text: c ? t : void 0,
            className: p(n, R.button, c ? R.withText : R.withoutText),
          }),
        );
      }
      var H = n('JWMC'),
        W = n('RYBj'),
        D = {
          compare: window.t('Compare'),
          compareOrAddSymbol: window.t('Compare or Add Symbol'),
        },
        L = Object(E.b)(),
        P = (function (e) {
          function t(t, n) {
            var a = e.call(this, t, n) || this;
            return (
              (a._updateState = function (e) {
                a.setState({ isActive: e });
              }),
              (a._handleClick = function () {
                Object(H.trackEvent)('GUI', 'Chart Header Toolbar', 'compare'),
                  a.context.chartWidgetCollection
                    .toggleAddCompareDialog()
                    .then(function (e) {
                      null !== e &&
                        (e.on('afterOpen', function () {
                          return a.setState({ isActive: !0 });
                        }),
                        e.on('beforeClose', function () {
                          return a.setState({ isActive: !1 });
                        }));
                    });
              }),
              Object(E.c)(n, { chartWidgetCollection: l.any.isRequired }),
              (a.state = { isActive: !1 }),
              (a._compareDialogRenderer = null),
              a
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              var e;
              null === (e = this._compareDialogRenderer) ||
                void 0 === e ||
                e.visible().subscribe(this._updateState);
            }),
            (t.prototype.componentWillUnmount = function () {
              var e;
              null === (e = this._compareDialogRenderer) ||
                void 0 === e ||
                e.visible().unsubscribe(this._updateState);
            }),
            (t.prototype.render = function () {
              var e = this.state.isActive;
              return r.createElement(
                F,
                Object(o.a)({}, this.props, {
                  icon: W,
                  isOpened: e,
                  onClick: this._handleClick,
                  text: D.compare,
                  title: D.compareOrAddSymbol,
                }),
              );
            }),
            (t.contextType = L),
            t
          );
        })(r.PureComponent),
        V = n('p0W+'),
        U = n('GgvM'),
        B = { hint: window.t('Fullscreen mode') },
        G = Object(E.b)(),
        K = (function (e) {
          function t(t, n) {
            var a = e.call(this, t, n) || this;
            return (
              (a._handleClick = function () {
                a.context.chartWidgetCollection.startFullscreen();
              }),
              Object(E.c)(n, { chartWidgetCollection: l.any.isRequired }),
              a
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.className,
                n = e.id;
              return r.createElement(V.a, {
                id: n,
                icon: U,
                onClick: this._handleClick,
                title: B.hint,
                className: p(t),
              });
            }),
            (t.contextType = G),
            t
          );
        })(r.PureComponent),
        q = n('Eyy1'),
        Q = n('/DW5'),
        Y = n('txPx'),
        J = Object(Y.getLogger)('FavoritesInfo');
      function X(e, t) {
        if (0 === e.length) return Promise.resolve([]);
        J.logNormal('Requesting favorites info');
        var n = [],
          a = new Map(),
          i = new Map(),
          o = new Map();
        return (
          e.forEach(function (e) {
            switch (e.type) {
              case 'java':
                o.set(e.studyId, e);
                break;
              case 'pine':
                isPublishedPineId(e.pineId)
                  ? a.set(e.pineId, e)
                  : i.set(e.pineId, e);
                break;
              default:
                Object(q.assert)(
                  !1,
                  'unknown favorite type ' + JSON.stringify(e),
                );
            }
          }),
          0 !== o.size &&
            n.push(
              t
                .findAllJavaStudies()
                .then(function (e) {
                  for (var t = new Map(), n = 0, a = e; n < a.length; n++) {
                    var i = a[n];
                    !i.is_hidden_study &&
                      o.has(i.id) &&
                      t.set(i.id, {
                        name: i.description,
                        localizedName: i.description_localized,
                        studyMarketShittyObject: i,
                      });
                  }
                  return t;
                })
                .then(function (e) {
                  var t,
                    n,
                    a =
                      ((t = e),
                      (n = { items: [], notFoundItems: [] }),
                      o.forEach(function (e, a) {
                        var i = t.get(a);
                        void 0 !== i
                          ? n.items.push({ item: e, info: i })
                          : n.notFoundItems.push(e);
                      }),
                      n);
                  if (0 !== a.notFoundItems.length) {
                    var i = a.notFoundItems.map(function (e) {
                      return e.studyId;
                    });
                    J.logWarn('Cannot find java scripts: ' + JSON.stringify(i));
                  }
                  return a.items;
                }),
            ),
          Promise.all(n).then(function (e) {
            return (
              J.logNormal('Requesting favorites info finished'),
              e.reduce(function (e, t) {
                return e.concat(t);
              }, [])
            );
          })
        );
      }
      var Z = n('CW80'),
        $ = n('mMWL'),
        ee = n('6KyJ'),
        te = n('Oy6E');
      function ne(e) {
        return r.createElement(
          'div',
          { className: te.spinnerWrap },
          r.createElement(ee.a, null),
        );
      }
      var ae = n('sHKj');
      function ie(e) {
        return r.createElement(
          'div',
          { className: p(e.className, ae.title) },
          e.children,
        );
      }
      var oe = n('XWsk'),
        re = n('S0BX'),
        se = {
          text: window.t('Indicators'),
          hint: i.enabled('study_dialog_fundamentals_economy_addons')
            ? window.t('Indicators & Strategies')
            : window.t('Indicators'),
          favorites: window.t('Favorites'),
        },
        le = Object(Q.b)({ keys: ['/'], text: '{0}' }),
        ce = Object(E.b)(),
        ue = (function (e) {
          function t(t, n) {
            var a = e.call(this, t, n) || this;
            (a._promise = null),
              (a._menu = s.a.createRef()),
              (a._setActiveState = function (e) {
                a.setState({ isActive: e });
              }),
              (a._handleClick = function () {
                var e = a.props.studyMarket;
                a.setState({ isActive: !0 }, function () {
                  e.visible().value() ? e.hide() : e.show();
                });
              }),
              (a._handleSelectIndicator = function (e) {
                e = Object(q.ensureDefined)(e);
                var t = a.context.chartWidgetCollection;
                if ('java' === e.type) {
                  var n = Object(Z.tryFindStudyLineToolNameByStudyId)(
                    e.studyId,
                  );
                  if (null !== n) return void $.tool.setValue(n);
                }
                t.activeChartWidget.value().insertStudy(e);
              }),
              (a._handleFavoriteIndicatorsChange = function () {
                var e = a.context.favoriteScriptsModel,
                  t = Object(o.f)(Object(q.ensureDefined)(e).favorites());
                a.setState({ favorites: t }), a._clearCache();
              }),
              (a._handleMouseEnter = function () {
                a._prefetchFavorites();
              }),
              (a._handleWrapClick = function () {
                a._prefetchFavorites();
              }),
              (a._handleChangeActiveWidget = function () {
                a._clearCache();
              }),
              (a._clearCache = function () {
                (a._promise = null), a.setState({ infos: [] });
              }),
              Object(E.c)(n, {
                favoriteScriptsModel: l.any,
                chartWidgetCollection: l.any.isRequired,
              });
            var i = n.favoriteScriptsModel,
              r = void 0 !== i ? i.favorites() : [];
            return (
              (a.state = {
                isActive: !1,
                isLoading: !1,
                favorites: r,
                infos: [],
              }),
              a
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.props.studyMarket,
                t = this.context,
                n = t.favoriteScriptsModel,
                a = t.chartWidgetCollection;
              e.visible().subscribe(this._setActiveState),
                void 0 !== n &&
                  (n
                    .favoritesChanged()
                    .subscribe(this, this._handleFavoriteIndicatorsChange),
                  a.activeChartWidget.subscribe(
                    this._handleChangeActiveWidget,
                  ));
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.props.studyMarket,
                t = this.context,
                n = t.favoriteScriptsModel,
                a = t.chartWidgetCollection;
              e.visible().unsubscribe(this._setActiveState),
                void 0 !== n &&
                  (n
                    .favoritesChanged()
                    .unsubscribe(this, this._handleFavoriteIndicatorsChange),
                  a.activeChartWidget.unsubscribe(
                    this._handleChangeActiveWidget,
                  )),
                (this._promise = null);
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.state,
                n = t.isActive,
                a = t.favorites,
                i = t.isLoading,
                o = this.props,
                r = o.className,
                l = o.displayMode,
                c = o.id,
                u = this.context.chartWidgetCollection;
              return s.a.createElement(
                g,
                {
                  id: c,
                  onMouseEnter: this._handleMouseEnter,
                  onClick: this._handleWrapClick,
                },
                s.a.createElement(F, {
                  displayMode: l,
                  className: r,
                  icon: oe,
                  isOpened: n,
                  onClick: this._handleClick,
                  text: se.text,
                  title: se.hint,
                  'data-role': 'button',
                  'data-name': 'open-indicators-dialog',
                  'data-tooltip-hotkey': le,
                }),
                a.length > 0 &&
                  s.a.createElement(
                    k.a,
                    { rule: 'screen and (max-width: 419px)' },
                    function (t) {
                      return s.a.createElement(
                        m.a,
                        {
                          key: u.activeChartWidget.value().id(),
                          arrow: !0,
                          closeOnClickOutside: !0,
                          isDrawer: t,
                          drawerPosition: 'Bottom',
                          title: se.favorites,
                          ref: e._menu,
                          'data-name': 'show-favorite-indicators',
                        },
                        s.a.createElement(
                          'div',
                          {
                            className: f()(
                              re.dropdown,
                              t && re.smallWidthWrapper,
                            ),
                          },
                          s.a.createElement(
                            ie,
                            { className: t && re.smallWidthTitle },
                            window.t('Favorite Indicators'),
                          ),
                          i && s.a.createElement(ne, null),
                          !i &&
                            s.a.createElement(
                              s.a.Fragment,
                              null,
                              e.state.infos.length > 0
                                ? e.state.infos.map(function (n) {
                                    return s.a.createElement(v.b, {
                                      className: f()(
                                        t && re.smallWidthMenuItem,
                                      ),
                                      theme: t ? x.a : void 0,
                                      key:
                                        'java' === n.item.type
                                          ? n.item.studyId
                                          : n.item.pineId,
                                      onClick: e._handleSelectIndicator,
                                      onClickArg: n.item,
                                      label: s.a.createElement(
                                        'span',
                                        {
                                          className: f()(
                                            !t && re.label,
                                            t && re.smallWidthLabel,
                                            'apply-overflow-tooltip',
                                          ),
                                        },
                                        de(n),
                                      ),
                                    });
                                  })
                                : null !== e._promise &&
                                    s.a.createElement(v.b, {
                                      isDisabled: !0,
                                      label: window.t(
                                        'You have no Favorites Indicators yet',
                                      ),
                                    }),
                            ),
                        ),
                      );
                    },
                  ),
              );
            }),
            (t.prototype._prefetchFavorites = function () {
              var e = this,
                t = this.context.chartWidgetCollection;
              if (null === this._promise) {
                var n = t.activeChartWidget.value().model();
                if (null !== n) {
                  var a = n.model().studyMetaInfoRepository();
                  this.setState({ isLoading: !0 });
                  var i = (this._promise = X(this.state.favorites, a).then(
                    function (t) {
                      if (i === e._promise) {
                        (t = Object(o.f)(t).sort(function (e, t) {
                          return de(e).localeCompare(de(t));
                        })),
                          e.setState({ infos: t, isLoading: !1 }, function () {
                            e._menu.current && e._menu.current.update();
                          });
                      }
                    },
                  ));
                }
              }
            }),
            (t.contextType = ce),
            t
          );
        })(s.a.PureComponent);
      function de(e) {
        return (
          e.info.localizedName || Object(N.t)(e.info.name, { context: 'study' })
        );
      }
      var he = n('PT1i'),
        ve = n('pPtI'),
        me = n('4hTN');
      function pe(e) {
        var t;
        return r.createElement(
          'div',
          {
            className: p(
              me.value,
              ((t = {}), (t[me.selected] = e.isSelected), t),
            ),
          },
          e.value,
          e.metric,
        );
      }
      var fe = n('9dlw'),
        be = n('ML8+'),
        ge = n('cSDC'),
        Ce = n('CX26'),
        Se = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._timeMenu = null),
              (n._setMenuRef = function (e) {
                n._timeMenu = e;
              }),
              (n._handleChangeInput = function (e) {
                var t = e.currentTarget.value;
                /^[0-9]*$/.test(t) && n.setState({ inputValue: t });
              }),
              (n._handleSelectTime = function (e) {
                n.setState({ selectedTime: e }), n._closeMenu();
              }),
              (n._handleClickAdd = function () {
                var e = n.state,
                  t = e.inputValue,
                  a = e.selectedTime,
                  i = Object(ge.b)(t, a);
                void 0 !== i && n.props.onAdd(i);
              }),
              (n._toggleMenu = function () {
                n.state.isOpenedMenu ? n._closeMenu() : n._openMenu();
              }),
              (n._closeMenu = function () {
                n.props.onCloseMenu(), n.setState({ isOpenedMenu: !1 });
              }),
              (n._openMenu = function () {
                n.props.onOpenMenu(), n.setState({ isOpenedMenu: !0 });
              }),
              (n._getMenuPosition = function () {
                var e = Object(q.ensureNotNull)(
                  n._timeMenu,
                ).getBoundingClientRect();
                return { overrideWidth: e.width, x: e.left, y: e.bottom + 1 };
              }),
              (n.state = {
                inputValue: '1',
                isOpenedMenu: !1,
                selectedTime: ge.a[0].name,
              }),
              n
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.render = function () {
              var e,
                t = this,
                n = this.state,
                a = n.inputValue,
                i = n.isOpenedMenu,
                o = n.menuWidth,
                s = n.selectedTime;
              return r.createElement(
                'div',
                {
                  className: p(Ce.form, ((e = {}), (e[Ce.interacting] = i), e)),
                },
                r.createElement('input', {
                  className: Ce.input,
                  maxLength: 6,
                  onChange: this._handleChangeInput,
                  value: a,
                }),
                r.createElement(
                  'div',
                  {
                    className: Ce.menu,
                    onClick: this._toggleMenu,
                    ref: this._setMenuRef,
                  },
                  ge.a.find(function (e) {
                    return e.name === s;
                  }).label,
                  r.createElement(be.a, { dropped: i }),
                ),
                r.createElement(
                  'div',
                  { className: Ce.add, onClick: this._handleClickAdd },
                  Object(N.t)('Add'),
                ),
                r.createElement(
                  fe.a,
                  {
                    doNotCloseOn: this,
                    isOpened: i,
                    minWidth: o,
                    onClose: this._closeMenu,
                    position: this._getMenuPosition,
                  },
                  ge.a.map(function (e) {
                    return r.createElement(v.b, {
                      dontClosePopup: !0,
                      key: e.name,
                      label: e.label,
                      onClick: t._handleSelectTime,
                      onClickArg: e.name,
                    });
                  }),
                ),
              );
            }),
            t
          );
        })(r.PureComponent),
        we = (n('EsMY'), n('i/MG')),
        _e = n('8d0Q'),
        ye = n('uPhS');
      function ke(e) {
        var t,
          n,
          a,
          i,
          l = e.interval,
          c = e.hint,
          u = e.isActive,
          h = e.isDisabled,
          m = e.isFavorite,
          p = e.isSignaling,
          b = e.onClick,
          g = e.onClickRemove,
          C = e.onClickFavorite,
          w = e.isSmallTablet,
          _ = Object(S.a)(e),
          y = Object(_e.b)(),
          k = y[0],
          O = y[1],
          E = s.a.useCallback(
            function () {
              return g(l);
            },
            [g, l],
          ),
          M = s.a.useCallback(
            function () {
              return C(l);
            },
            [C, l],
          ),
          T = Object(r.useRef)(null);
        return (
          Object(r.useEffect)(
            function () {
              var e;
              p &&
                w &&
                (null === (e = T.current) ||
                  void 0 === e ||
                  e.scrollIntoView());
            },
            [p, w],
          ),
          s.a.createElement(
            'div',
            Object(o.a)({}, O, { ref: T }),
            s.a.createElement(
              v.b,
              Object(o.a)({}, _, {
                className: f()(w && ye.smallWidthMenuItem),
                theme: w ? x.a : void 0,
                isActive: u,
                isDisabled: h,
                isHovered: p,
                onClick: b,
                onClickArg: l,
                toolbox:
                  ((t = e.isRemovable),
                  (n = e.isFavoritingAllowed),
                  (a = s.a.createElement(we.a, {
                    key: 'remove',
                    isActive: u,
                    hidden: !Modernizr.touch && !k,
                    onClick: E,
                  })),
                  (i = s.a.createElement(d.a, {
                    key: 'favorite',
                    isActive: u,
                    isFilled: m,
                    onClick: M,
                  })),
                  [t && a, !h && n && i]),
                showToolboxOnHover: !m,
                label: c,
              }),
            ),
          )
        );
      }
      var Oe,
        xe = n('LxhU'),
        Ee =
          (((Oe = {})[xe.ResolutionKind.Ticks] = window.t('Ticks', {
            context: 'interval_group_name',
          })),
          (Oe[xe.ResolutionKind.Seconds] = window.t('Seconds', {
            context: 'interval_group_name',
          })),
          (Oe[xe.ResolutionKind.Minutes] = window.t('Minutes', {
            context: 'interval_group_name',
          })),
          (Oe[xe.SpecialResolutionKind.Hours] = window.t('Hours', {
            context: 'interval_group_name',
          })),
          (Oe[xe.ResolutionKind.Days] = window.t('Days', {
            context: 'interval_group_name',
          })),
          (Oe[xe.ResolutionKind.Weeks] = window.t('Weeks', {
            context: 'interval_group_name',
          })),
          (Oe[xe.ResolutionKind.Months] = window.t('Months', {
            context: 'interval_group_name',
          })),
          (Oe[xe.ResolutionKind.Range] = window.t('Ranges', {
            context: 'interval_group_name',
          })),
          (Oe[xe.ResolutionKind.Invalid] = ''),
          Oe);
      function Me(e, t) {
        return (
          void 0 === t && (t = !1),
          { id: e, name: Ee[e], items: [], mayOmitSeparator: t }
        );
      }
      var Te = n('fioS');
      function je(e) {
        return s.a.createElement(
          s.a.Fragment,
          null,
          s.a.createElement(
            'div',
            {
              className: f()(e.className, Te.summary),
              onClick: function () {
                e.onStateChange && e.onStateChange(!e.open);
              },
              'data-open': e.open,
            },
            e.summary,
            s.a.createElement(be.a, {
              className: Te.caret,
              dropped: Boolean(e.open),
            }),
          ),
          e.open && e.children,
        );
      }
      var Ie = n('aIyQ'),
        Ae = n.n(Ie),
        Ne = n('X0gx'),
        Re = n('tWVy'),
        ze = n('aVq2'),
        Fe = {
          openDialog: Object(N.t)('Open Interval Dialog'),
          timeInterval: Object(N.t)('Time Interval'),
        },
        He = Object(Q.b)({ keys: [','], text: Object(N.t)('Number or {0}') }),
        We = Object(E.b)(),
        De = new Ae.a(),
        Le = s.a.lazy(function () {
          return Object(o.b)(void 0, void 0, void 0, function () {
            var e;
            return Object(o.d)(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    (e = {}),
                    [
                      4,
                      Promise.all([
                        n.e(2),
                        n.e(5),
                        n.e(9),
                        n.e(10),
                        n.e(12),
                        n.e(15),
                        n.e(19),
                        n.e(26),
                        n.e(97),
                        n.e(4),
                        n.e(8),
                        n.e(17),
                        n.e('custom-intervals-add-dialog'),
                      ]).then(n.bind(null, 'w9vS')),
                    ]
                  );
                case 1:
                  return [
                    2,
                    ((e.default = t.sent().ToolWidgetIntervalsAddDialog), e),
                  ];
              }
            });
          });
        }),
        Pe = (function (e) {
          function t(t, n) {
            var a = e.call(this, t, n) || this;
            (a._menu = s.a.createRef()),
              (a._renderChildren = function (e, t) {
                return Object(o.f)(
                  a._createMenuItems(e, t),
                  a._createIntervalForm(t),
                );
              }),
              (a._handleChangeInterval = function (e) {
                var t = a.state,
                  n = t.activeInterval,
                  i = t.lastNotQuicked,
                  o = a._getQuicks();
                a.setState({
                  activeInterval: Object(ve.normalizeIntervalString)(e),
                  lastNotQuicked: void 0 === n || o.includes(n) ? i : n,
                });
              }),
              (a._handleCloseMenu = function () {
                a.setState({ isOpenedFormMenu: !1 });
              }),
              (a._handleOpenMenu = function () {
                a.setState({ isOpenedFormMenu: !0 });
              }),
              (a._bindedForceUpdate = function () {
                a.forceUpdate();
              }),
              (a._handleSelectInterval = function (e) {
                void 0 !== e &&
                  e !== he.linking.interval.value() &&
                  (Object(ve.setLastUsedResolution)(e),
                  he.linking.interval.setValue(e)),
                  e && Object(H.trackEvent)('GUI', 'Time Interval', e);
              }),
              (a._handleClickFavorite = function (e) {
                (e = Object(q.ensureDefined)(e)),
                  a._isIntervalFavorite(e)
                    ? a._handleRemoveFavorite(e)
                    : a._handleAddFavorite(e);
              }),
              (a._handleAddFavorite = function (e) {
                var t = a.state.favorites;
                a.context.favoriteIntervalsService.set(Object(o.f)(t, [e]));
              }),
              (a._handleRemoveFavorite = function (e) {
                var t = a.state.favorites;
                a.context.favoriteIntervalsService.set(
                  t.filter(function (t) {
                    return t !== e;
                  }),
                );
              }),
              (a._handleAddInterval = function (e) {
                var t = a.state.customs,
                  n = a.context.customIntervalsService,
                  i = Object(ve.normalizeIntervalString)(e);
                void 0 !== n &&
                  (a._isIntervalDefault(i) ||
                    t.includes(i) ||
                    n.set(Object(ve.sortResolutions)(Object(o.f)(t, [i])))),
                  a.setState({ lastAddedInterval: i });
              }),
              (a._handleRemoveInterval = function (e) {
                var t = a.context.customIntervalsService,
                  n = a.state.customs;
                void 0 !== t &&
                  (t.set(
                    n.filter(function (t) {
                      return t !== e;
                    }),
                  ),
                  a._handleRemoveFavorite(e));
              }),
              (a._getHandleSectionStateChange = function (e) {
                return function (t) {
                  var n,
                    i = a.state.menuViewState;
                  a.context.intervalsMenuViewStateService.set(
                    Object(o.a)(Object(o.a)({}, i), (((n = {})[e] = !t), n)),
                  );
                };
              }),
              (a._handleOpenAddIntervalDialog = function () {
                a.setState({ isAddIntervalDialogOpened: !0 });
              }),
              (a._handleCloseAddIntervalDialog = function () {
                a.setState({ isAddIntervalDialogOpened: !1 });
              }),
              (a._handleGlobalClose = function () {
                var e = a.props.isFake,
                  t = a.state.isAddIntervalDialogOpened;
                e || t || De.fire();
              }),
              Object(E.c)(n, {
                chartApiInstance: l.any.isRequired,
                favoriteIntervalsService: l.any.isRequired,
                customIntervalsService: l.any,
                intervalsMenuViewStateService: l.any.isRequired,
              });
            var r = n.chartApiInstance,
              c = n.favoriteIntervalsService,
              u = n.customIntervalsService,
              d = n.intervalsMenuViewStateService;
            a._customIntervals = i.enabled('custom_resolutions');
            var h = he.linking.interval.value(),
              v = h && Object(ve.normalizeIntervalString)(h),
              m = c.get(),
              p = void 0 !== u ? u.get() : [],
              f = d.get();
            return (
              (a._defaultsIntervals = r
                .defaultResolutions()
                .map(ve.normalizeIntervalString)),
              (a.state = {
                isOpenedFormMenu: !1,
                activeInterval: v,
                favorites: m,
                customs: p,
                menuViewState: f,
                isAddIntervalDialogOpened: !1,
              }),
              a
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.context,
                t = e.favoriteIntervalsService,
                n = e.customIntervalsService,
                a = e.intervalsMenuViewStateService;
              t.getOnChange().subscribe(this, this._handleChangeFavorites),
                a
                  .getOnChange()
                  .subscribe(this, this._handleChangeMenuViewState),
                void 0 !== n &&
                  n.getOnChange().subscribe(this, this._handleChangeCustoms),
                he.linking.interval.subscribe(this._handleChangeInterval),
                he.linking.intraday.subscribe(this._bindedForceUpdate),
                he.linking.seconds.subscribe(this._bindedForceUpdate),
                he.linking.ticks.subscribe(this._bindedForceUpdate),
                he.linking.supportedResolutions.subscribe(
                  this._bindedForceUpdate,
                ),
                Re.a.subscribe(this, this._handleGlobalClose);
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.context,
                t = e.favoriteIntervalsService,
                n = e.customIntervalsService,
                a = e.intervalsMenuViewStateService;
              t.getOnChange().unsubscribe(this, this._handleChangeFavorites),
                a
                  .getOnChange()
                  .unsubscribe(this, this._handleChangeMenuViewState),
                n &&
                  n.getOnChange().unsubscribe(this, this._handleChangeCustoms),
                he.linking.interval.unsubscribe(this._handleChangeInterval),
                he.linking.intraday.unsubscribe(this._bindedForceUpdate),
                he.linking.seconds.unsubscribe(this._bindedForceUpdate),
                he.linking.ticks.unsubscribe(this._bindedForceUpdate),
                he.linking.supportedResolutions.unsubscribe(
                  this._bindedForceUpdate,
                ),
                Re.a.unsubscribe(this, this._handleGlobalClose);
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              var n = this;
              this.state.lastAddedInterval &&
                setTimeout(function () {
                  return n.setState({
                    lastAddedInterval: void 0,
                  });
                }, 400);
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.isShownQuicks,
                a = t.id,
                i = this.state,
                r = i.activeInterval,
                l = i.customs,
                c = i.lastNotQuicked,
                u = i.isAddIntervalDialogOpened,
                d = this._defaultsIntervals,
                h = this._getQuicks(),
                v = Object(ve.sortResolutions)(Object(o.f)(h));
              void 0 !== r && v.includes(r)
                ? void 0 !== c && v.push(c)
                : void 0 !== r && v.push(r);
              var f = (!(!n || 0 === h.length) || void 0) && v.length > 1,
                b = {},
                C = Object(ve.mergeResolutions)(d, l);
              (void 0 !== r ? C.concat(r) : C)
                .filter(ve.isAvailable)
                .forEach(function (e) {
                  return (b[e] = !0);
                });
              var S =
                void 0 !== r
                  ? Object(ve.getTranslatedResolutionModel)(r)
                  : null;
              return s.a.createElement(
                g,
                { id: a },
                f &&
                  v.map(function (t, n) {
                    var a,
                      i = Object(ve.getTranslatedResolutionModel)(t);
                    return s.a.createElement(_, {
                      key: n,
                      className: p(
                        ze.button,
                        ((a = {}),
                        (a[ze.first] = 0 === n),
                        (a[ze.last] = n === v.length - 1),
                        a),
                      ),
                      text: s.a.createElement(pe, {
                        value: i.mayOmitMultiplier ? void 0 : i.multiplier,
                        metric: i.shortKind,
                      }),
                      hint: i.hint,
                      isActive: r === t,
                      isDisabled: !b[t] && t !== c,
                      onClick: e._handleSelectInterval,
                      onClickArg: t,
                      'data-value': t,
                    });
                  }),
                s.a.createElement(k.a, { rule: O.a.TabletSmall }, function (t) {
                  return s.a.createElement(
                    s.a.Fragment,
                    null,
                    s.a.createElement(
                      Ne.a.Provider,
                      { value: De },
                      s.a.createElement(
                        m.a,
                        {
                          arrow: Boolean(f),
                          closeOnClickOutside: !0,
                          content:
                            f || null === S
                              ? void 0
                              : s.a.createElement(
                                  g,
                                  { className: ze.menuContent },
                                  s.a.createElement(pe, {
                                    value: S.mayOmitMultiplier
                                      ? void 0
                                      : S.multiplier,
                                    metric: S.shortKind,
                                  }),
                                ),
                          title: f || null === S ? Fe.timeInterval : S.hint,
                          hotKey: f ? He : void 0,
                          className: ze.menu,
                          ref: e._menu,
                          isDrawer: t,
                        },
                        s.a.createElement(
                          'div',
                          { className: ze.dropdown },
                          e._renderChildren(C, t),
                        ),
                      ),
                    ),
                    t &&
                      u &&
                      s.a.createElement(
                        s.a.Suspense,
                        { fallback: null },
                        s.a.createElement(Le, {
                          onAdd: e._handleAddInterval,
                          onClose: e._handleCloseAddIntervalDialog,
                          onUnmount: e._handleCloseAddIntervalDialog,
                        }),
                      ),
                  );
                }),
              );
            }),
            (t.prototype._createMenuItems = function (e, t) {
              var n,
                a,
                i,
                o,
                r,
                s,
                l,
                c,
                u,
                d = this,
                h = ((a = e),
                (i = Me(xe.ResolutionKind.Ticks)),
                (o = Me(xe.ResolutionKind.Seconds)),
                (r = Me(xe.ResolutionKind.Minutes)),
                (s = Me(xe.SpecialResolutionKind.Hours)),
                (l = Me(xe.ResolutionKind.Days)),
                (c = Me(xe.ResolutionKind.Range)),
                a.forEach(function (e) {
                  var t = xe.Interval.parse(e);
                  t.isMinuteHours()
                    ? s.items.push(e)
                    : t.isMinutes()
                    ? Object(xe.isHour)(Number(t.multiplier()))
                      ? s.items.push(e)
                      : r.items.push(e)
                    : t.isSeconds()
                    ? o.items.push(e)
                    : t.isDWM()
                    ? l.items.push(e)
                    : t.isRange()
                    ? c.items.push(e)
                    : t.isTicks() && i.items.push(e);
                }),
                [i, o, r, s, l, c].filter(function (e) {
                  return 0 !== e.items.length;
                })).map(function (e, n, a) {
                  return d._renderResolutionsGroup(e, 1 === a.length, t);
                }),
                v = (n = []).concat.apply(n, h);
              return (
                (u = !1),
                v.filter(function (e, t, n) {
                  var a = !0;
                  return (
                    e.type === y.a &&
                      ((0 !== t && t !== n.length - 1) || (a = !1),
                      u && (a = !1)),
                    (u = e.type === y.a),
                    a
                  );
                })
              );
            }),
            (t.prototype._createIntervalForm = function (e) {
              if (this._customIntervals) {
                var t = e
                  ? s.a.createElement(
                      'div',
                      {
                        key: 'add-dialog',
                        className: ze.addCustomInterval,
                        onClick: this._handleOpenAddIntervalDialog,
                      },
                      Object(N.t)('Add custom interval') + '…',
                    )
                  : s.a.createElement(Se, {
                      key: 'add-form',
                      onAdd: this._handleAddInterval,
                      onCloseMenu: this._handleCloseMenu,
                      onOpenMenu: this._handleOpenMenu,
                    });
                return [
                  s.a.createElement(y.a, { key: 'custom-interval-separator' }),
                  t,
                ];
              }
              return [];
            }),
            (t.prototype._renderResolutionsGroup = function (e, t, n) {
              var a = this;
              void 0 === t && (t = !1);
              var i = [],
                o = e.items.map(function (e) {
                  return a._renderPopupMenuItem(e, n);
                });
              if (t) i.push.apply(i, o);
              else if (n) {
                var r = s.a.createElement(
                  'div',
                  { key: e.id },
                  s.a.createElement(
                    'div',
                    { className: ze.smallTabletSectionTitle },
                    e.name,
                  ),
                  o,
                );
                i.push(r);
              } else {
                var l = this.context.intervalsMenuViewStateService,
                  c = this.state.menuViewState;
                if (!l.isAllowed(e.id)) return [];
                r = s.a.createElement(
                  je,
                  {
                    key: e.id,
                    className: ze.section,
                    summary: e.name,
                    open: !c[e.id],
                    onStateChange: this._getHandleSectionStateChange(e.id),
                  },
                  o,
                );
                i.push(r);
              }
              return (
                (!e.mayOmitSeparator || e.items.length > 1) &&
                  (i.unshift(
                    s.a.createElement(y.a, { key: 'begin-' + e.name }),
                  ),
                  i.push(s.a.createElement(y.a, { key: 'end-' + e.name }))),
                i
              );
            }),
            (t.prototype._handleChangeFavorites = function (e) {
              this.setState({ lastNotQuicked: void 0, favorites: e });
            }),
            (t.prototype._handleChangeCustoms = function (e) {
              this.setState({ customs: e });
            }),
            (t.prototype._handleChangeMenuViewState = function (e) {
              var t = this;
              this.setState({ menuViewState: e }, function () {
                t._menu.current && t._menu.current.update();
              });
            }),
            (t.prototype._renderPopupMenuItem = function (e, t) {
              var n = this.props.isFavoritingAllowed,
                a = this.state,
                i = a.activeInterval,
                o = a.lastAddedInterval,
                r = e === i,
                l = Object(ve.isAvailable)(e),
                c = this._isIntervalFavorite(e),
                u = this._isIntervalDefault(e),
                d = Object(ve.getTranslatedResolutionModel)(e);
              return s.a.createElement(ke, {
                key: e,
                isSmallTablet: t,
                interval: e,
                hint: d.hint,
                isSignaling: o === e,
                isFavoritingAllowed: n,
                isDisabled: !l,
                isFavorite: c,
                isRemovable: !u,
                isActive: r,
                onClick: this._handleSelectInterval,
                onClickRemove: this._handleRemoveInterval,
                onClickFavorite: this._handleClickFavorite,
                'data-value': e,
              });
            }),
            (t.prototype._isIntervalDefault = function (e) {
              return this._defaultsIntervals.includes(e);
            }),
            (t.prototype._isIntervalFavorite = function (e) {
              return this.state.favorites.includes(e);
            }),
            (t.prototype._getQuicks = function (e) {
              return this.props.isShownQuicks &&
                'small' !== this.props.displayMode
                ? void 0 === e
                  ? this.state.favorites
                  : e
                : [];
            }),
            (t.contextType = We),
            t
          );
        })(s.a.PureComponent),
        Ve = n('sbT4'),
        Ue = n('lAXe'),
        Be = { hint: window.t('Open chart in popup') },
        Ge = Object(E.b)(),
        Ke = (function (e) {
          function t(t, n) {
            var a = e.call(this, t, n) || this;
            return (
              (a._handleClick = function () {
                var e = a.context,
                  t = e.chartWidgetCollection,
                  n = e.windowMessageService,
                  i = e.isFundamental,
                  o = t.activeChartWidget.value();
                o.withModel(null, function () {
                  n.post(parent, 'openChartInPopup', {
                    symbol: o.model().mainSeries().actualSymbol(),
                    interval: o.model().mainSeries().interval(),
                    fundamental: i,
                  });
                });
              }),
              Object(E.c)(n, {
                isFundamental: l.any,
                chartWidgetCollection: l.any.isRequired,
                windowMessageService: l.any.isRequired,
              }),
              a
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props.className;
              return r.createElement(V.a, {
                className: p(e, Ve.button),
                icon: Ue,
                onClick: this._handleClick,
                title: Be.hint,
              });
            }),
            (t.contextType = Ge),
            t
          );
        })(r.PureComponent),
        qe = n('uafl'),
        Qe = { hint: window.t('Chart Properties') },
        Ye = Object(E.b)(),
        Je = (function (e) {
          function t(t, n) {
            var a = e.call(this, t, n) || this;
            return (
              (a._handleClick = function () {
                var e = a.context.chartWidgetCollection.activeChartWidget.value();
                Object(H.trackEvent)(
                  'GUI',
                  'Chart Header Toolbar',
                  'chart properties',
                ),
                  e.showGeneralChartProperties();
              }),
              Object(E.c)(n, { chartWidgetCollection: l.any.isRequired }),
              a
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.render = function () {
              return r.createElement(
                V.a,
                Object(o.a)({}, this.props, {
                  icon: qe,
                  title: Qe.hint,
                  onClick: this._handleClick,
                }),
              );
            }),
            (t.contextType = Ye),
            t
          );
        })(r.PureComponent),
        Xe = n('lxNp'),
        Ze = (n('bSeV'), n('//lZ')),
        $e = n('9uLv'),
        et = n('nrMg'),
        tt =
          'M21.5 21.5h-14a5 5 0 1 1 .42-9.983 7.5 7.5 0 0 1 14.57 2.106 4.002 4.002 0 0 1-.99 7.877z',
        nt = 13.08991081237793,
        at = {
          strokeDashOffset: 49.242997817993164,
          strokeDash: 49.866326904296876,
          strokeGap: nt,
          strokeDashCheck: 0,
        },
        it = {
          strokeDashOffset: 62.956237716674806,
          strokeGap: 0,
          strokeDash: 62.956237716674806,
          strokeDashCheck: 200,
        },
        ot = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.state = at), n;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              'saved' === this.props.state
                ? this.setState(it)
                : this._goToNextState(this.props.state);
            }),
            (t.prototype.componentWillUnmount = function () {
              this._currentAnimation = void 0;
            }),
            (t.prototype.componentWillReceiveProps = function (e) {
              this.props.state !== e.state && this._goToNextState(e.state);
            }),
            (t.prototype.render = function () {
              var e,
                t = this.state,
                n = t.strokeDashOffset,
                a = t.strokeDash,
                i = t.strokeGap,
                o = t.strokeDashCheck,
                s = this.props,
                l = s.className,
                c = s.size,
                u = s.onClick,
                d = s.state,
                h = s.isHovered,
                v = void 0 !== h && h,
                m = p(
                  et.container,
                  l,
                  v && et.hovered,
                  (((e = {})[et.unsaved] = 'unsaved' === d),
                  (e[et.saving] = 'saving' === d),
                  (e[et.saved] = 'saved' === d),
                  e),
                );
              return r.createElement(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  className: m,
                  version: '1.1',
                  width: c,
                  height: c,
                  viewBox: '0 0 28 28',
                  onClick: u,
                },
                r.createElement(
                  'g',
                  { fill: 'none' },
                  r.createElement('path', {
                    className: et.dottedCloud,
                    stroke: 'currentColor',
                    strokeDasharray: '3.5,2.5',
                    d: tt,
                  }),
                  r.createElement('path', {
                    className: et.spinningCloud,
                    stroke: 'currentColor',
                    strokeDasharray: a + ' ' + i,
                    strokeDashoffset: n,
                    d: tt,
                  }),
                  r.createElement('path', {
                    className: et.arrowGap,
                    d: 'M11 20h6v5h-6z',
                  }),
                  r.createElement(
                    'g',
                    { className: et.arrow, stroke: 'currentColor' },
                    r.createElement('path', {
                      strokeLinecap: 'square',
                      d: 'M14.5 14.5v10',
                    }),
                    r.createElement('path', { d: 'M11 17l3.5-3.5L18 17' }),
                  ),
                  r.createElement(
                    'g',
                    { className: et.check, stroke: 'currentColor' },
                    r.createElement('path', {
                      strokeDasharray: o + '% ' + (200 - o) + '%',
                      d: 'M10 15l2.5 2.5L18 12',
                    }),
                  ),
                ),
              );
            }),
            (t.prototype._goToNextState = function (e) {
              var t = this;
              switch (e) {
                case 'unsaved':
                  this.setState(at);
                  break;
                case 'saving':
                  'unsaved' !== this.props.state && this.setState(at),
                    (this._currentAnimation = Promise.resolve(
                      this._currentAnimation,
                    ).then(function () {
                      return t._createSpinAnimationWhile(function () {
                        return 'saving' === t.props.state;
                      });
                    }));
                  break;
                case 'saved':
                  this._currentAnimation = Promise.resolve(
                    this._currentAnimation,
                  )
                    .then(this._createFillGapAnimation.bind(this))
                    .then(this._createCheckAnimation.bind(this));
              }
            }),
            (t.prototype._createSpinAnimationWhile = function (e) {
              var t = this;
              return this._createSpinAnimation().then(function () {
                return e() ? t._createSpinAnimationWhile(e) : Promise.resolve();
              });
            }),
            (t.prototype._createSpinAnimation = function () {
              var e = this;
              return new Promise(function (t) {
                Object(Ze.doAnimate)({
                  onStep: function (t, n) {
                    void 0 !== e._currentAnimation &&
                      e.setState({ strokeDashOffset: n });
                  },
                  onComplete: function () {
                    return t();
                  },
                  from: 49.242997817993164,
                  to: 111.57590644836426,
                  easing: $e.easingFunc.linear,
                  duration: 1e3,
                });
              });
            }),
            (t.prototype._createCheckAnimation = function () {
              var e = this;
              return new Promise(function (t) {
                Object(Ze.doAnimate)({
                  onStep: function (t, n) {
                    void 0 !== e._currentAnimation &&
                      e.setState({ strokeDashCheck: Math.round(n) });
                  },
                  onComplete: function () {
                    return t();
                  },
                  from: 0,
                  to: 200,
                  easing: $e.easingFunc.linear,
                  duration: 1e3,
                });
              });
            }),
            (t.prototype._createFillGapAnimation = function () {
              var e = this;
              return new Promise(function (t) {
                Object(Ze.doAnimate)({
                  onStep: function (t, n) {
                    void 0 !== e._currentAnimation &&
                      e.setState({
                        strokeDashOffset: 62.956237716674806 - n,
                        strokeGap: n,
                        strokeDash: 62.956237716674806 - n,
                      });
                  },
                  onComplete: function () {
                    return t();
                  },
                  from: nt,
                  to: 0,
                  easing: $e.easingFunc.linear,
                  duration: 200,
                });
              });
            }),
            t
          );
        })(r.PureComponent),
        rt = n('nPPD'),
        st = n('MB0Y'),
        lt = n('3j+J'),
        ct = (Object(rt.a)(st.a, lt), n('2uTr')),
        ut = n('+KIV'),
        dt = n('RGo6'),
        ht = n('SchQ'),
        vt = (n('OP2o'), n('v1bN')),
        mt = i.enabled('widget'),
        pt = Object(rt.a)(C.a, ht),
        ft = {
          copy: window.t('Copy'),
          makeCopy: window.t('Make a Copy'),
          newChartLayout: window.t('New Chart Layout'),
          loadChartLayout: Object(ct.appendEllipsis)(
            window.t('Load Chart Layout'),
          ),
          rename: Object(ct.appendEllipsis)(window.t('Rename')),
          renameChartLayout: window.t('Rename Chart Layout'),
          saveAs: Object(ct.appendEllipsis)(window.t('Make a Copy')),
          saveChartLayout: window.t('Save'),
          saveChartLayoutLong: window.t(
            'Save all charts for all symbols and intervals on your layout',
          ),
          manageChartLayouts: window.t('Manage Chart Layouts'),
        },
        bt = [],
        gt = Object(Q.b)({ keys: ['Ctrl', 'S'], text: '{0} + {1}' }),
        Ct = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._toolWidgetMenuRef = r.createRef()),
              (n._handleTooltipWizardClick = function () {
                0;
              }),
              (n._handleSaveHoverBegin = function () {
                n.setState({ iconHovered: !0 });
              }),
              (n._handleSaveHoverEnd = function () {
                n.setState({ iconHovered: !1 });
              }),
              (n.state = { iconHovered: !1 }),
              n
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.id,
                n = e.isReadOnly,
                a = e.displayMode,
                i = e.isProcessing,
                o = e.title,
                s = e.chartId,
                l = e.wasChanges,
                c = e.onCloneChart,
                u = e.onSaveChart,
                d = e.hideMenu,
                v = e.isTabletSmall,
                f = this.state.iconHovered,
                b = !n && !d,
                C = 'saved';
              return (
                (!l && o) || (C = 'unsaved'),
                i && (C = 'saving'),
                r.createElement(
                  g,
                  null,
                  n
                    ? r.createElement(
                        g,
                        null,
                        r.createElement(F, {
                          id: t,
                          displayMode: a,
                          icon: r.createElement(h.a, { icon: ut }),
                          isDisabled: i,
                          onClick: c,
                          text: ft.copy,
                          title: ft.makeCopy,
                          onMouseEnter: this._handleSaveHoverBegin,
                          onMouseLeave: this._handleSaveHoverEnd,
                          collapseWhen: bt,
                        }),
                      )
                    : r.createElement(
                        g,
                        null,
                        r.createElement(F, {
                          id: t,
                          className: p(dt.button, b && dt.buttonSmallPadding),
                          displayMode: a,
                          icon: r.createElement(ot, {
                            size: 28,
                            state: C,
                            isHovered: f,
                          }),
                          isDisabled: (s && !l) || i,
                          onClick: u,
                          text: o || ft.saveChartLayout,
                          title: ft.saveChartLayoutLong,
                          onMouseEnter: this._handleSaveHoverBegin,
                          onMouseLeave: this._handleSaveHoverEnd,
                          theme: pt,
                          collapseWhen: bt,
                          'data-tooltip-hotkey': mt ? '' : gt,
                        }),
                        b &&
                          r.createElement(
                            m.a,
                            {
                              ref: this._toolWidgetMenuRef,
                              className: 'js-save-load-menu-open-button',
                              arrow: !0,
                              isDrawer: v,
                              drawerPosition: 'Bottom',
                              title: ft.manageChartLayouts,
                            },
                            !1,
                            this._renderMenuItems(Boolean(v)),
                          ),
                      ),
                )
              );
            }),
            (t.prototype._renderMenuItems = function (e) {
              var t = this.props,
                n = t.wasChanges,
                a = t.isProcessing,
                i = t.chartId,
                o = t.onSaveChartFromMenu,
                s = t.onRenameChart,
                l = t.onSaveAsChart,
                c = t.onLoadChart,
                u =
                  (t.onNewChart,
                  t.isAutoSaveEnabled,
                  t.autoSaveId,
                  t.sharingId,
                  t.onAutoSaveChanged,
                  t.isSharingEnabled,
                  t.onSharingChanged,
                  e ? x.a : vt),
                d = e ? void 0 : 'Ctrl+S',
                h = [];
              return (
                h.push(
                  r.createElement(v.b, {
                    key: 'save',
                    isDisabled: Boolean(a || (!n && i)),
                    label: ft.saveChartLayout,
                    onClick: o,
                    shortcut: d,
                    labelRowClassName: p(e && dt.popupItemRowTabletSmall),
                    theme: u,
                  }),
                ),
                void 0 !== i &&
                  (e ||
                    h.push(
                      r.createElement(y.a, {
                        key: 'existing-chart-section-begin',
                      }),
                    ),
                  h.push.apply(h, [
                    r.createElement(v.b, {
                      key: 'rename',
                      label: ft.rename,
                      onClick: s,
                      labelRowClassName: p(e && dt.popupItemRowTabletSmall),
                      theme: u,
                    }),
                    r.createElement(v.b, {
                      key: 'save-as',
                      label: ft.saveAs,
                      onClick: l,
                      labelRowClassName: p(e && dt.popupItemRowTabletSmall),
                      theme: u,
                    }),
                  ])),
                h.push(r.createElement(y.a, { key: 'platform-section-begin' })),
                h.push(
                  r.createElement(v.b, {
                    key: 'load-chart',
                    className: 'js-save-load-menu-item-load-chart',
                    label: ft.loadChartLayout,
                    onClick: c,
                    labelRowClassName: p(e && dt.popupItemRowTabletSmall),
                    theme: u,
                    shortcut: Object(N.t)('Dot', { context: 'hotkey' }),
                  }),
                ),
                h
              );
            }),
            t
          );
        })(r.PureComponent),
        St = Object(E.b)(),
        wt = (function (e) {
          function t(t, n) {
            var a = e.call(this, t, n) || this;
            (a._syncState = function (e) {
              a.setState(e);
            }),
              (a._onChangeHasChanges = function (e) {
                a.state.wasChanges !== e && a.setState({ wasChanges: e });
              }),
              (a._onChangeAutoSaveEnabled = function (e) {
                0;
              }),
              (a._onChangeSharingEnabled = function (e) {
                a.setState({ isSharingEnabled: e });
              }),
              (a._onChangeTitle = function (e) {
                a.setState({ title: e });
              }),
              (a._onChangeId = function (e) {
                a.setState({ id: e });
              }),
              (a._onChartAboutToBeSaved = function () {
                a.setState({ isProcessing: !0 });
              }),
              (a._onChartSaved = function () {
                a.setState({ isProcessing: !1 });
              }),
              (a._handleAutoSaveEnabled = function (e) {
                0;
              }),
              (a._handleSharingEnabled = function (e) {}),
              (a._handleClickSave = function () {
                a.context.saveChartService.saveChartOrShowTitleDialog(),
                  a._trackEvent('Save click');
              }),
              (a._handleClickSaveFromMenu = function () {
                a.context.saveChartService.saveChartOrShowTitleDialog(),
                  a._trackEvent('Save From Menu');
              }),
              (a._handleClickClone = function () {
                a.context.saveChartService.cloneChart();
              }),
              (a._handleClickSaveAs = function () {
                a.context.saveChartService.saveChartAs(),
                  a._trackEvent('Make a copy');
              }),
              (a._handleClickNew = function () {
                a._trackEvent('New chart layout');
              }),
              (a._handleClickLoad = function () {
                a.context.loadChartService.showLoadDialog(),
                  a._trackEvent('Load chart layout');
              }),
              (a._handleHotkey = function () {
                a.context.loadChartService.showLoadDialog();
              }),
              (a._handleClickRename = function () {
                a.context.saveChartService.renameChart(),
                  a._trackEvent('Rename');
              }),
              Object(E.c)(n, {
                chartWidgetCollection: l.any.isRequired,
                chartChangesWatcher: l.any.isRequired,
                saveChartService: l.any.isRequired,
                sharingChartService: l.any,
                loadChartService: l.any.isRequired,
              });
            var i = n.chartWidgetCollection,
              o = n.chartChangesWatcher;
            n.saveChartService, n.sharingChartService;
            return (
              (a.state = {
                isAuthenticated: window.is_authenticated,
                isProcessing: !1,
                id: i.metaInfo.id.value(),
                title: i.metaInfo.name.value(),
                wasChanges: o.hasChanges(),
                iconHovered: !1,
              }),
              a
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.props,
                t = e.chartSaver,
                n = e.isFake,
                a = e.stateSyncEmitter,
                i = this.context,
                o = i.chartWidgetCollection,
                r = i.chartChangesWatcher;
              i.saveChartService, i.sharingChartService;
              n
                ? a.on('change', this._syncState)
                : (r.getOnChange().subscribe(this, this._onChangeHasChanges),
                  o.metaInfo.name.subscribe(this._onChangeTitle),
                  o.metaInfo.id.subscribe(this._onChangeId),
                  (this._hotkeys = Object(Xe.createGroup)({
                    desc: 'Save/Load',
                  })),
                  this._hotkeys.add({
                    desc: window.t('Load Chart Layout'),
                    handler: this._handleHotkey,
                    hotkey: 190,
                  }),
                  t.chartSaved().subscribe(this, this._onChartSaved),
                  t
                    .chartAboutToBeSaved()
                    .subscribe(this, this._onChartAboutToBeSaved),
                  window.loginStateChange.subscribe(
                    this,
                    this._onLoginStateChange,
                  ));
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              this.props.isFake ||
                (t !== this.state &&
                  this.props.stateSyncEmitter.emit('change', this.state));
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.props,
                t = e.chartSaver,
                n = e.isFake,
                a = e.stateSyncEmitter,
                i = this.context,
                o = i.chartWidgetCollection,
                r = i.chartChangesWatcher;
              i.saveChartService, i.sharingChartService;
              n
                ? a.off('change', this._syncState)
                : (r.getOnChange().unsubscribe(this, this._onChangeHasChanges),
                  o.metaInfo.name.unsubscribe(this._onChangeTitle),
                  o.metaInfo.id.unsubscribe(this._onChangeId),
                  Object(q.ensureDefined)(this._hotkeys).destroy(),
                  t.chartSaved().unsubscribe(this, this._onChartSaved),
                  t
                    .chartAboutToBeSaved()
                    .unsubscribe(this, this._onChartAboutToBeSaved),
                  window.loginStateChange.unsubscribe(
                    this,
                    this._onLoginStateChange,
                  ));
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.isReadOnly,
                n = e.displayMode,
                a = e.id,
                i = (e.isFake, this.state),
                s = i.isProcessing,
                l = i.isAuthenticated,
                c = i.title,
                u = i.id,
                d = i.wasChanges,
                h =
                  (i.isAutoSaveEnabled,
                  i.isSharingEnabled,
                  {
                    displayMode: n,
                    isReadOnly: t,
                    isAuthenticated: l,
                    isProcessing: s,
                    wasChanges: d,
                    title: c,
                    id: a,
                    chartId: null !== u ? u : void 0,
                    onCloneChart: this._handleClickClone,
                    onSaveChart: this._handleClickSave,
                    onSaveChartFromMenu: this._handleClickSaveFromMenu,
                    onRenameChart: this._handleClickRename,
                    onSaveAsChart: this._handleClickSaveAs,
                    onLoadChart: this._handleClickLoad,
                  });
              return r.createElement(
                k.a,
                { rule: O.a.TabletSmall },
                function (e) {
                  return r.createElement(
                    Ct,
                    Object(o.a)({}, h, { isTabletSmall: e }),
                  );
                },
              );
            }),
            (t.prototype._onLoginStateChange = function () {
              this.setState({ isAuthenticated: window.is_authenticated });
            }),
            (t.prototype._trackEvent = function (e) {
              0;
            }),
            (t.contextType = St),
            t
          );
        })(r.PureComponent),
        _t = n('FQhm'),
        yt = { takeSnapshot: window.t('Take a snapshot') },
        kt = Object(Q.b)({ keys: ['Alt', 'S'], text: '{0} + {1}' }),
        Ot = Object(E.b)();
      var xt,
        Et,
        Mt = n('koZ+'),
        Tt =
          ((xt = function (e) {
            return r.createElement(C.b, {
              id: e.id,
              className: e.className,
              isDisabled: e.isProcessing,
              onClick: e.onClick,
              title: e.tooltip,
              'data-tooltip-hotkey': e.hotkey,
              icon: Mt,
            });
          }),
          ((Et = (function (e) {
            function t(t, n) {
              var a = e.call(this, t, n) || this;
              return (
                (a._handleClick = function (e) {
                  if (!i.enabled('show_dialog_on_snapshot_ready')) {
                    if (a.state.isProcessing) return;
                    a.setState({ isProcessing: !0 }),
                      _t.subscribe(
                        'onScreenshotReady',
                        function () {
                          return a.setState({ isProcessing: !1 });
                        },
                        null,
                        !0,
                      );
                  }
                  a.context.chartWidgetCollection.takeScreenshot();
                }),
                Object(E.c)(n, { chartWidgetCollection: l.any.isRequired }),
                (a.state = { isProcessing: !1 }),
                a
              );
            }
            return (
              Object(o.c)(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.className,
                  n = e.id,
                  a = this.state.isProcessing;
                return r.createElement(xt, {
                  id: n,
                  className: t,
                  isProcessing: a,
                  onClick: this._handleClick,
                  tooltip: yt.takeSnapshot,
                  hotkey: kt,
                });
              }),
              t
            );
          })(r.PureComponent)).contextType = Ot),
          Et),
        jt = n('pZll'),
        It = n('h24c'),
        At = n('X7WP'),
        Nt = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._actions = null),
              (t._input = null),
              (t._promise = null),
              (t._preventDefault = function (e) {
                e.preventDefault();
              }),
              (t._trackSymbolSearchOpenEvent = function () {
                Object(H.trackEvent)('GUI', 'SS', 'main search');
              }),
              t
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this,
                t = Object(q.ensureNotNull)(this._input),
                n = (this._promise = Object(jt.symbolSearchUIService)()
                  .bindToInput(t, {
                    spreadActions: this._actions || void 0,
                    syncWithChartWidget: !0,
                    syncOnBlur: !0,
                    onPopupOpen: this._trackSymbolSearchOpenEvent,
                  })
                  .then(function () {
                    n === e._promise &&
                      null !== e._actions &&
                      Array.from(e._actions.querySelectorAll('button')).forEach(
                        function (e) {
                          return (e.tabIndex = -1);
                        },
                      );
                  }));
            }),
            (t.prototype.componentWillUnmount = function () {
              this._promise = null;
            }),
            (t.prototype.render = function () {
              var e,
                t = this,
                n = this.props,
                a = n.isActionsVisible,
                i = n.isExpanded,
                o = n.onFocus,
                r = n.onBlur,
                l = n.id,
                c = n.className;
              return s.a.createElement(
                'div',
                { id: l, className: p(At.wrap, c) },
                s.a.createElement(
                  'div',
                  {
                    className: p(
                      At.inner,
                      ((e = {}), (e[At.isExpanded] = i), e),
                    ),
                  },
                  s.a.createElement('input', {
                    className: At.input,
                    maxLength: 1e3,
                    onBlur: r,
                    onFocus: o,
                    ref: function (e) {
                      return (t._input = e);
                    },
                    type: 'text',
                    tabIndex: -1,
                  }),
                  Object(It.canShowSpreadActions)() &&
                    a &&
                    s.a.createElement('div', {
                      className: At.actions,
                      onMouseDown: this._preventDefault,
                      ref: function (e) {
                        return (t._actions = e);
                      },
                    }),
                ),
              );
            }),
            t
          );
        })(s.a.PureComponent),
        Rt = n('9NBK'),
        zt = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._handleClick = function (e) {
                e.stopPropagation();
                var n = t.props;
                (0, n.onApply)(n.item);
              }),
              t
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.className,
                n = e.item;
              return r.createElement(
                'div',
                {
                  className: p(t, Rt.item, 'apply-common-tooltip'),
                  onClick: this._handleClick,
                  title: n.name,
                },
                r.createElement(
                  'div',
                  { className: Rt.round },
                  n.name.length > 0 ? n.name[0].toUpperCase() : ' ',
                ),
              );
            }),
            t
          );
        })(r.PureComponent),
        Ft = n('8RO/'),
        Ht = n('s0T6');
      function Wt(e) {
        return r.createElement(
          'div',
          { className: p(Ht.description, e.className) },
          e.children,
        );
      }
      var Dt = n('fESK'),
        Lt = Object(rt.a)(v.a, {
          labelRow: Dt.labelRow,
          toolbox: Dt.toolbox,
          item: Dt.titleItem,
        }),
        Pt = Object(rt.a)(v.a, {
          labelRow: Dt.labelRow,
          toolbox: Dt.toolbox,
          item: Dt.titleItemTabletSmall,
        }),
        Vt = Object(rt.a)(v.a, { item: Dt.item }),
        Ut = Object(rt.a)(v.a, { item: Dt.itemTabletSmall });
      function Bt(e) {
        var t = e.item,
          n = e.onApply,
          a = e.onRemove,
          i = e.onFavor,
          l = e.favorite,
          c = e.isFavoritingAllowed,
          u = e.isTabletSmall,
          h = Object(_e.b)(),
          m = h[0],
          p = h[1],
          b = t.meta_info,
          g = b ? Object(Ft.b)(b.indicators) : void 0,
          C = u ? Pt : Lt,
          S = u ? Ut : Vt,
          w = Object(r.useCallback)(
            function () {
              return n(t);
            },
            [n, t],
          ),
          _ = Object(r.useCallback)(
            function () {
              return a(t);
            },
            [a, t],
          ),
          y = Object(r.useCallback)(
            function () {
              i && i(t);
            },
            [i, t],
          );
        return s.a.createElement(
          'div',
          Object(o.a)({}, p, {
            className: Dt.wrap,
            'data-name': t.name,
            'data-id': t.id,
            'data-is-default': Boolean(t.is_default),
          }),
          s.a.createElement(v.b, {
            theme: C,
            label: t.name,
            labelRowClassName: f()(u && Dt.itemLabelTabletSmall),
            isHovered: m,
            showToolboxOnHover: !l && !m,
            onClick: w,
            toolbox: s.a.createElement(
              s.a.Fragment,
              null,
              !t.is_default &&
                s.a.createElement(we.a, {
                  key: 'remove',
                  hidden: !Modernizr.touch && !m,
                  onClick: _,
                }),
              Boolean(i) &&
                c &&
                s.a.createElement(d.a, {
                  key: 'favorite',
                  isFilled: Boolean(l),
                  onClick: y,
                }),
            ),
          }),
          g &&
            s.a.createElement(v.b, {
              theme: S,
              label: s.a.createElement(
                Wt,
                {
                  className: f()(
                    Dt.description,
                    u && Dt.descriptionTabletSmall,
                  ),
                },
                g,
              ),
              onClick: w,
              isHovered: m,
            }),
        );
      }
      var Gt = n('jKyl'),
        Kt = n('23di'),
        qt = Object(rt.a)(v.a, Kt),
        Qt = {
          text: Object(ct.appendEllipsis)(window.t('Save Indicator template')),
        };
      function Yt(e) {
        var t = e.onClick,
          n = e.isTabletSmall;
        return s.a.createElement(v.b, {
          theme: qt,
          className: Kt.wrap,
          label: s.a.createElement(
            'div',
            { className: Kt.titleWrap },
            s.a.createElement(
              'div',
              { className: f()(Kt.title, n && Kt.titleTabletSmall) },
              s.a.createElement(h.a, { className: Kt.icon, icon: Gt }),
              s.a.createElement('div', { className: Kt.text }, Qt.text),
            ),
          ),
          onClick: t,
        });
      }
      var Jt = n('gla1'),
        Xt = n('PN6A'),
        Zt = s.a.createContext(null),
        $t = n('Sl3V');
      function en(e) {
        var t = e.templates,
          n = e.favorites,
          a = e.onTemplateSave,
          i = e.onTemplateRemove,
          o = e.onTemplateSelect,
          l = e.onTemplateFavorite,
          c = e.isTabletSmall,
          u = e.isLoading,
          d = Object(r.useMemo)(
            function () {
              return t.filter(function (e) {
                return e.is_default;
              });
            },
            [t],
          ),
          h = Object(r.useMemo)(
            function () {
              return t.filter(function (e) {
                return !e.is_default;
              });
            },
            [t],
          ),
          v = Object(r.useMemo)(
            function () {
              return new Set(
                n.map(function (e) {
                  return e.name;
                }),
              );
            },
            [n],
          ),
          m = Object(r.useContext)(Zt),
          p = Object(r.useContext)(Xt.a),
          b = Object(Jt.a)();
        Object(r.useEffect)(function () {
          if (null !== m) {
            var e = {};
            return (
              m.getOnChange().subscribe(e, function () {
                b(), p && p.update();
              }),
              function () {
                return m.getOnChange().unsubscribeAll(e);
              }
            );
          }
          return function () {};
        }, []);
        var g = function (e) {
          return s.a.createElement(Bt, {
            key: e.name,
            item: e,
            isFavoritingAllowed: Boolean(l),
            favorite: v.has(e.name),
            onApply: o,
            onFavor: l,
            onRemove: i,
            isTabletSmall: c,
          });
        };
        return s.a.createElement(
          'div',
          { className: f()($t.menu, c && $t.menuSmallTablet) },
          s.a.createElement(Yt, { onClick: a, isTabletSmall: c }),
          u &&
            s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(y.a, null),
              s.a.createElement(ne, null),
            ),
          !u &&
            (c
              ? s.a.createElement(tn, { defaults: d, customs: h, render: g })
              : s.a.createElement(nn, {
                  defaults: d,
                  customs: h,
                  render: g,
                  state: m,
                })),
        );
      }
      function tn(e) {
        var t = e.defaults,
          n = e.customs,
          a = e.render;
        return s.a.createElement(
          s.a.Fragment,
          null,
          n.length > 0 &&
            s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(y.a, null),
              s.a.createElement(
                ie,
                { className: $t.menuItemHeaderTabletSmall },
                Object(N.t)('My templates'),
              ),
              n.map(a),
            ),
          t.length > 0 &&
            s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(y.a, null),
              s.a.createElement(
                ie,
                { className: $t.menuItemHeaderTabletSmall },
                Object(N.t)('Default templates'),
              ),
              t.map(a),
            ),
        );
      }
      function nn(e) {
        var t = e.defaults,
          n = e.customs,
          a = e.render,
          i = e.state;
        return s.a.createElement(
          s.a.Fragment,
          null,
          n.length > 0 &&
            s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(y.a, null),
              s.a.createElement(
                ie,
                { className: $t.menuItemHeader },
                Object(N.t)('My templates'),
              ),
              n.map(a),
            ),
          n.length > 0 &&
            t.length > 0 &&
            i &&
            s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(y.a, null),
              s.a.createElement(
                je,
                {
                  summary: Object(N.t)('Default templates'),
                  open: !i.get().defaultsCollapsed,
                  onStateChange: function (e) {
                    return i.set({ defaultsCollapsed: !e });
                  },
                },
                t.map(a),
              ),
            ),
          0 === n.length &&
            t.length > 0 &&
            s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(y.a, null),
              s.a.createElement(
                ie,
                { className: $t.menuItemHeader },
                Object(N.t)('Default templates'),
              ),
              t.map(a),
            ),
        );
      }
      var an = n('hY0g'),
        on = n.n(an),
        rn = (function () {
          function e(e, t) {
            var n,
              a,
              o = this;
            (this._isFavoriteEnabled = i.enabled('items_favoriting')),
              (this.handleFavorTemplate = function (e) {
                if (o._isFavoriteEnabled) {
                  var t = e.name;
                  o._isTemplateFavorite(t)
                    ? o._removeFavoriteTemplate(t)
                    : o._addFavoriteTemplate(t);
                }
              }),
              (this.handleDropdownOpen = function () {
                o._setState({ isLoading: !0 }),
                  o._studyTemplates.invalidate(),
                  o._studyTemplates.refreshStudyTemplateList(function () {
                    return o._setState({ isLoading: !1 });
                  });
              }),
              (this.handleApplyTemplate = function (e) {
                o._studyTemplates.applyTemplate(e.name);
              }),
              (this.handleRemoveTemplate = function (e) {
                o._studyTemplates.deleteStudyTemplate(e.name);
              }),
              (this.handleSaveTemplate = function () {
                o._studyTemplates.showSaveAsDialog();
              }),
              (this._studyTemplates = e),
              (this._favoriteStudyTemplatesService = t);
            var r =
                (null === (n = this._favoriteStudyTemplatesService) ||
                void 0 === n
                  ? void 0
                  : n.get()) || [],
              s = this._studyTemplates.list();
            (this._state = new on.a({
              isLoading: !1,
              studyTemplatesList: s,
              favorites: r,
            })),
              this._studyTemplates
                .getOnChange()
                .subscribe(this, this._handleTemplatesChange),
              this._studyTemplates.refreshStudyTemplateList(),
              this._isFavoriteEnabled &&
                (null === (a = this._favoriteStudyTemplatesService) ||
                  void 0 === a ||
                  a.getOnChange().subscribe(this, this._handleFavoritesChange));
          }
          return (
            (e.prototype.destroy = function () {
              var e;
              this._studyTemplates
                .getOnChange()
                .unsubscribe(this, this._handleTemplatesChange),
                this._isFavoriteEnabled &&
                  (null === (e = this._favoriteStudyTemplatesService) ||
                    void 0 === e ||
                    e
                      .getOnChange()
                      .unsubscribe(this, this._handleFavoritesChange));
            }),
            (e.prototype.state = function () {
              return this._state.readonly();
            }),
            (e.prototype._setState = function (e) {
              this._state.setValue(
                Object(o.a)(Object(o.a)({}, this._state.value()), e),
              );
            }),
            (e.prototype._handleTemplatesChange = function () {
              this._setState({
                studyTemplatesList: this._studyTemplates.list(),
              });
            }),
            (e.prototype._handleFavoritesChange = function (e) {
              this._isFavoriteEnabled && this._setState({ favorites: e });
            }),
            (e.prototype._removeFavoriteTemplate = function (e) {
              var t,
                n = this._state.value().favorites;
              null === (t = this._favoriteStudyTemplatesService) ||
                void 0 === t ||
                t.set(
                  n.filter(function (t) {
                    return t !== e;
                  }),
                );
            }),
            (e.prototype._addFavoriteTemplate = function (e) {
              var t,
                n = this._state.value().favorites;
              null === (t = this._favoriteStudyTemplatesService) ||
                void 0 === t ||
                t.set(Object(o.f)(n, [e]));
            }),
            (e.prototype._isTemplateFavorite = function (e) {
              return this._state.value().favorites.includes(e);
            }),
            e
          );
        })(),
        sn = n('zgWb'),
        ln = n('yGrx'),
        cn = {
          title: Object(N.t)('Templates'),
          tooltip: Object(N.t)('Indicator Templates'),
        },
        un = Object(E.b)(),
        dn = (function (e) {
          function t(t, n) {
            var a = e.call(this, t, n) || this;
            (a._updateState = function (e) {
              a.setState(
                Object(o.a)(Object(o.a)({}, e), { isActive: a.state.isActive }),
              );
            }),
              (a._handleApplyTemplate = function (e) {
                a._handleClose(), a._model.handleApplyTemplate(e);
              }),
              (a._handleRemoveTemplate = function (e) {
                a._handleClose(), a._model.handleRemoveTemplate(e);
              }),
              (a._handleClose = function () {
                a._handleToggleDropdown(!1);
              }),
              (a._handleToggleDropdown = function (e) {
                var t = a.state.isActive,
                  n = 'boolean' == typeof e ? e : !t;
                a.setState({ isActive: n });
              }),
              Object(E.c)(n, {
                favoriteStudyTemplatesService: l.any,
                studyTemplates: l.any.isRequired,
                templatesMenuViewStateService: l.any,
              });
            var i = n.favoriteStudyTemplatesService,
              r = n.studyTemplates;
            return (
              (a._model = new rn(r, i)),
              (a.state = Object(o.a)(
                Object(o.a)({}, a._model.state().value()),
                { isActive: !1 },
              )),
              a
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              this._model.state().subscribe(this._updateState);
            }),
            (t.prototype.componentWillUnmount = function () {
              this._model.state().unsubscribe(this._updateState),
                this._model.destroy();
            }),
            (t.prototype.render = function () {
              var e = this.state,
                t = e.studyTemplatesList,
                n = e.favorites,
                a = this.props,
                i = a.isShownQuicks,
                o = a.className,
                r = a.displayMode,
                l = a.id;
              return s.a.createElement(
                Zt.Provider,
                { value: this.context.templatesMenuViewStateService || null },
                s.a.createElement(hn, {
                  id: l,
                  className: o,
                  mode: r,
                  templates: t,
                  favorites: n,
                  onMenuOpen: this._model.handleDropdownOpen,
                  onTemplateFavorite: i
                    ? this._model.handleFavorTemplate
                    : void 0,
                  onTemplateSelect: this._handleApplyTemplate,
                  onTemplateRemove: this._handleRemoveTemplate,
                  onTemplateSave: this._model.handleSaveTemplate,
                }),
              );
            }),
            (t.contextType = un),
            t
          );
        })(s.a.PureComponent);
      function hn(e) {
        var t,
          n = e.id,
          a = e.className,
          i = e.mode,
          o = e.favorites,
          r = e.templates,
          l = e.isMenuOpen,
          c = e.onTemplateSelect,
          u = e.onTemplateSave,
          d = e.onTemplateFavorite,
          h = e.onTemplateRemove,
          v = f()(
            a,
            ln.wrap,
            (((t = {})[ln.full] = 'full' === i),
            (t[ln.medium] = 'medium' === i),
            t),
          ),
          p = r.filter(function (e) {
            return o.includes(e.name);
          }),
          b = 'small' !== i && d && p.length > 0;
        return s.a.createElement(
          g,
          { id: n, className: v },
          s.a.createElement(k.a, { rule: O.a.TabletSmall }, function (t) {
            return s.a.createElement(
              m.a,
              {
                onOpen: e.onMenuOpen,
                isDrawer: t,
                drawerPosition: 'Bottom',
                arrow: !1,
                content: s.a.createElement(F, {
                  className: f()(b && ln.buttonWithFavorites),
                  displayMode: i,
                  isOpened: l,
                  icon: sn,
                  text: cn.title,
                  title: cn.tooltip,
                  forceInteractive: !0,
                }),
              },
              s.a.createElement(en, {
                onTemplateSave: u,
                onTemplateSelect: c,
                onTemplateRemove: h,
                onTemplateFavorite: d,
                templates: r,
                favorites: p,
                isTabletSmall: t,
              }),
            );
          }),
          b && s.a.createElement(vn, { favorites: p, onTemplateSelect: c }),
        );
      }
      function vn(e) {
        return s.a.createElement(
          s.a.Fragment,
          null,
          e.favorites.map(function (t, n, a) {
            var i;
            return s.a.createElement(zt, {
              key: t.name,
              item: t,
              onApply: e.onTemplateSelect,
              className: f()(
                ((i = {}),
                (i[ln.first] = 0 === n),
                (i[ln.last] = n === a.length - 1),
                i),
              ),
            });
          }),
        );
      }
      n('HbRj');
      var mn = n('S+Ii'),
        pn = n('bQ7Y'),
        fn = n('wnRL'),
        bn = n('2xRE'),
        gn = { undoHint: window.t('Undo {0}'), redoHint: window.t('Redo {0}') },
        Cn = {
          undoHotKey: Object(Q.b)({ keys: ['Ctrl', 'Z'], text: '{0} + {1}' }),
          redoHotKey: Object(Q.b)({ keys: ['Ctrl', 'Y'], text: '{0} + {1}' }),
        },
        Sn = Object(rt.b)(pn, mn, {
          buttonUndo: 'button',
          buttonRedo: 'button',
        }),
        wn = Object(o.a)(Object(o.a)({}, pn), { button: Sn.buttonUndo }),
        _n = Object(o.a)(Object(o.a)({}, pn), { button: Sn.buttonRedo }),
        yn = Object(E.b)(),
        kn = (function (e) {
          function t(t, n) {
            var a = e.call(this, t, n) || this;
            return (
              (a._batched = null),
              (a._handleClickUndo = function () {
                Object(H.trackEvent)('GUI', 'Undo'),
                  a.context.chartWidgetCollection.undoHistory.undo();
              }),
              (a._handleClickRedo = function () {
                Object(H.trackEvent)('GUI', 'Redo'),
                  a.context.chartWidgetCollection.undoHistory.redo();
              }),
              Object(E.c)(n, { chartWidgetCollection: l.any.isRequired }),
              (a.state = a._getStateFromUndoHistory()),
              a
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.context.chartWidgetCollection;
              e.undoHistory
                .redoStack()
                .onChange()
                .subscribe(this, this._onChangeStack),
                e.undoHistory
                  .undoStack()
                  .onChange()
                  .subscribe(this, this._onChangeStack);
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.context.chartWidgetCollection;
              e.undoHistory
                .redoStack()
                .onChange()
                .unsubscribe(this, this._onChangeStack),
                e.undoHistory
                  .undoStack()
                  .onChange()
                  .unsubscribe(this, this._onChangeStack),
                (this._batched = null);
            }),
            (t.prototype.render = function () {
              var e = this.props.id,
                t = this.state,
                n = t.isEnabledRedo,
                a = t.isEnabledUndo,
                i = t.redoStack,
                o = t.undoStack;
              return r.createElement(
                g,
                { id: e },
                r.createElement(C.b, {
                  icon: fn,
                  isDisabled: !a,
                  onClick: this._handleClickUndo,
                  title: a ? gn.undoHint.format(o) : void 0,
                  'data-tooltip-hotkey': a ? Cn.undoHotKey : void 0,
                  theme: wn,
                }),
                r.createElement(C.b, {
                  icon: bn,
                  isDisabled: !n,
                  onClick: this._handleClickRedo,
                  title: n ? gn.redoHint.format(i) : void 0,
                  'data-tooltip-hotkey': n ? Cn.redoHotKey : void 0,
                  theme: _n,
                }),
              );
            }),
            (t.prototype._onChangeStack = function () {
              var e = this;
              null === this._batched &&
                (this._batched = Promise.resolve().then(function () {
                  if (null !== e._batched) {
                    e._batched = null;
                    var t = e._getStateFromUndoHistory();
                    e.setState(t);
                  }
                }));
            }),
            (t.prototype._getStateFromUndoHistory = function () {
              var e = this.context.chartWidgetCollection,
                t = e.undoHistory.undoStack(),
                n = e.undoHistory.redoStack(),
                a = n.head(),
                i = t.head();
              return {
                isEnabledRedo: !n.isEmpty(),
                isEnabledUndo: !t.isEmpty(),
                redoStack: a ? a.text() : '',
                undoStack: i ? i.text() : '',
              };
            }),
            (t.contextType = yn),
            t
          );
        })(r.PureComponent),
        On = n('i8i4'),
        xn = n('cvc5'),
        En = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._ref = null),
              (t._update = function () {
                t.forceUpdate();
              }),
              (t._setRef = function (e) {
                t._ref = e;
              }),
              (t._handleMeasure = function (e) {
                var n = e.width;
                t.props.width.setValue(n);
              }),
              t
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.props,
                t = e.element,
                n = e.isFake,
                a = e.width;
              if (n) a.subscribe(this._update);
              else {
                var i = Object(q.ensureNotNull)(this._ref);
                On.findDOMNode(i).appendChild(t);
              }
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.props,
                t = e.width;
              e.isFake && t.unsubscribe(this._update);
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.isFake,
                n = void 0 !== t && t,
                a = e.width;
              return r.createElement(
                xn,
                {
                  shouldMeasure: !n,
                  whitelist: ['width'],
                  onMeasure: this._handleMeasure,
                },
                r.createElement(g, {
                  ref: this._setRef,
                  style: n ? { width: a.value() } : void 0,
                }),
              );
            }),
            t
          );
        })(r.PureComponent);
      function Mn() {
        return {
          Bars: i.enabled('header_chart_type') ? A : void 0,
          Compare: i.enabled('header_compare') ? P : void 0,
          Custom: En,
          Fullscreen: i.enabled('header_fullscreen_button') ? K : void 0,
          Indicators: i.enabled('header_indicators') ? ue : void 0,
          Intervals: i.enabled('header_resolutions') ? Pe : void 0,
          OpenPopup: Ke,
          Properties:
            i.enabled('header_settings') &&
            i.enabled('show_chart_property_page')
              ? Je
              : void 0,
          SaveLoad: i.enabled('header_saveload') ? wt : void 0,
          Screenshot: i.enabled('header_screenshot') ? Tt : void 0,
          SymbolSearch: i.enabled('header_symbol_search') ? Nt : void 0,
          Templates: i.enabled('study_templates') ? dn : void 0,
          UndoRedo: i.enabled('header_undo_redo') ? kn : void 0,
          Layout: void 0,
        };
      }
      n.d(t, 'getRestrictedToolSet', function () {
        return Mn;
      });
    },
    nPPD: function (e, t, n) {
      'use strict';
      function a(e, t, n) {
        void 0 === n && (n = {});
        for (
          var a = Object.assign({}, t), i = 0, o = Object.keys(t);
          i < o.length;
          i++
        ) {
          var r = o[i],
            s = n[r] || r;
          s in e && (a[r] = [e[s], t[r]].join(' '));
        }
        return a;
      }
      function i(e, t, n) {
        return void 0 === n && (n = {}), Object.assign({}, e, a(e, t, n));
      }
      n.d(t, 'b', function () {
        return a;
      }),
        n.d(t, 'a', function () {
          return i;
        });
    },
    nrMg: function (e, t, n) {
      e.exports = {
        dottedCloud: 'dottedCloud-1Vw3lVny',
        check: 'check-3V48_rMp',
        spinningCloud: 'spinningCloud-2fkbB-rw',
        arrow: 'arrow-1zkKEROH',
        arrowGap: 'arrowGap-gjAe6jEn',
        container: 'container-riYIb01a',
        unsaved: 'unsaved-2Kg_w3Vw',
        hovered: 'hovered-18DzoW0E',
        saving: 'saving-31YVVfHU',
        saved: 'saved-2kLd4nmd',
      };
    },
    'p0W+': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return l;
      });
      var a = n('mrSG'),
        i = n('q1tI'),
        o = n('TSYQ'),
        r = n('tU7i'),
        s = n('EvtC'),
        l = i.forwardRef(function (e, t) {
          var n = e.className,
            l = Object(a.e)(e, ['className']);
          return i.createElement(
            r.b,
            Object(a.a)({}, l, { ref: t, className: o(n, s.button) }),
          );
        });
    },
    pqsj: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"/><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"/><path d="M9 8v12h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5z"/><path d="M10 4h1v3.5h-1zm0 16.5h1V24h-1z"/></svg>';
    },
    pr86: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return d;
      });
      var a = n('mrSG'),
        i = (n('YFKU'), n('q1tI')),
        o = n('TSYQ'),
        r = n('Iivm'),
        s = n('sg5d'),
        l = n('XfUw'),
        c = n('fEjm'),
        u = {
          add: window.t('Add to favorites'),
          remove: window.t('Remove from favorites'),
        };
      function d(e) {
        var t = e.className,
          n = e.isFilled,
          d = e.isActive,
          h = e.onClick,
          v = Object(a.e)(e, ['className', 'isFilled', 'isActive', 'onClick']);
        return i.createElement(
          r.a,
          Object(a.a)({}, v, {
            className: o(
              c.favorite,
              'apply-common-tooltip',
              n && c.checked,
              d && c.active,
              t,
            ),
            icon: n ? s : l,
            onClick: h,
            title: n ? u.remove : u.add,
          }),
        );
      }
    },
    s0T6: function (e, t, n) {
      e.exports = { description: 'description-3yVDcIyu' };
    },
    sHKj: function (e, t, n) {
      e.exports = { title: 'title-17mjZSJk' };
    },
    sbT4: function (e, t, n) {
      e.exports = { button: 'button-3wAyKO3i' };
    },
    sg5d: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M9 1l2.35 4.76 5.26.77-3.8 3.7.9 5.24L9 13l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L9 1z"/></svg>';
    },
    t2Sj: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M11.982 16.689L17.192 12h3.033l4.149-4.668-.748-.664L19.776 11h-2.968l-4.79 4.311L9 12.293l-4.354 4.353.708.708L9 13.707z"/></svg>';
    },
    uPhS: function (e, t, n) {
      e.exports = { smallWidthMenuItem: 'smallWidthMenuItem-276aFv5_' };
    },
    uafl: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M14 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M5.005 16A1.003 1.003 0 0 1 4 14.992v-1.984A.998.998 0 0 1 5 12h1.252a7.87 7.87 0 0 1 .853-2.06l-.919-.925c-.356-.397-.348-1 .03-1.379l1.42-1.42a1 1 0 0 1 1.416.007l.889.882A7.96 7.96 0 0 1 12 6.253V5c0-.514.46-1 1-1h2c.557 0 1 .44 1 1v1.253a7.96 7.96 0 0 1 2.06.852l.888-.882a1 1 0 0 1 1.416-.006l1.42 1.42a.999.999 0 0 1 .029 1.377s-.4.406-.918.926a7.87 7.87 0 0 1 .853 2.06H23c.557 0 1 .447 1 1.008v1.984A.998.998 0 0 1 23 16h-1.252a7.87 7.87 0 0 1-.853 2.06l.882.888a1 1 0 0 1 .006 1.416l-1.42 1.42a1 1 0 0 1-1.415-.007l-.889-.882a7.96 7.96 0 0 1-2.059.852v1.248c0 .56-.45 1.005-1.008 1.005h-1.984A1.004 1.004 0 0 1 12 22.995v-1.248a7.96 7.96 0 0 1-2.06-.852l-.888.882a1 1 0 0 1-1.416.006l-1.42-1.42a1 1 0 0 1 .007-1.415l.882-.888A7.87 7.87 0 0 1 6.252 16H5.005zm3.378-6.193l-.227.34A6.884 6.884 0 0 0 7.14 12.6l-.082.4H5.005C5.002 13 5 13.664 5 14.992c0 .005.686.008 2.058.008l.082.4c.18.883.52 1.71 1.016 2.453l.227.34-1.45 1.46c-.004.003.466.477 1.41 1.422l1.464-1.458.34.227a6.959 6.959 0 0 0 2.454 1.016l.399.083v2.052c0 .003.664.005 1.992.005.005 0 .008-.686.008-2.057l.399-.083a6.959 6.959 0 0 0 2.454-1.016l.34-.227 1.46 1.45c.003.004.477-.466 1.422-1.41l-1.458-1.464.227-.34A6.884 6.884 0 0 0 20.86 15.4l.082-.4h2.053c.003 0 .005-.664.005-1.992 0-.005-.686-.008-2.058-.008l-.082-.4a6.884 6.884 0 0 0-1.016-2.453l-.227-.34 1.376-1.384.081-.082-1.416-1.416-1.465 1.458-.34-.227a6.959 6.959 0 0 0-2.454-1.016L15 7.057V5c0-.003-.664-.003-1.992 0-.005 0-.008.686-.008 2.057l-.399.083a6.959 6.959 0 0 0-2.454 1.016l-.34.227-1.46-1.45c-.003-.004-.477.466-1.421 1.408l1.457 1.466z"/></g></svg>';
    },
    uhCe: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var a = n('ASyk'),
        i = {
          SmallHeight: a['small-height-breakpoint'],
          TabletSmall: a['tablet-small-breakpoint'],
          TabletNormal: a['tablet-normal-breakpoint'],
        };
    },
    wnRL: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.707 13l2.647 2.646-.707.708L6.792 12.5l3.853-3.854.708.708L8.707 12H14.5a5.5 5.5 0 0 1 5.5 5.5V19h-1v-1.5a4.5 4.5 0 0 0-4.5-4.5H8.707z"/></svg>';
    },
    yGrx: function (e, t, n) {
      e.exports = {
        wrap: 'wrap-15BhAobm',
        full: 'full-2VMT2UlC',
        first: 'first-1vAzGgSq',
        last: 'last-xMjAcadb',
        medium: 'medium-1BEsHMFf',
        buttonWithFavorites: 'buttonWithFavorites-3S-vuMxR',
      };
    },
    zgWb: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M6 12l3.88-4.31a1 1 0 0 1 1.35-.13l5.07 3.9a1 1 0 0 0 1.32-.08L23 6M6.5 22v-4m4 4v-8m4 8v-6m4 6v-4m4 4v-8"/></svg>';
    },
  },
]);
