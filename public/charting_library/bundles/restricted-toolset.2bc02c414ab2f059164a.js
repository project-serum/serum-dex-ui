(window.webpackJsonp = window.webpackJsonp || []).push([
  ['restricted-toolset'],
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
    EvtC: function (e, t, n) {
      e.exports = { button: 'button-2-lC3gh4' };
    },
    FO3N: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"/><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"/><path d="M9 8v11h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5z"/><path d="M10 4h1v5h-1zm0 14h1v5h-1zM8.5 9H10v1H8.5zM11 9h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11z"/></svg>';
    },
    FzLb: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        n('mrSG').__exportStar(n('j3s+'), t);
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
      n.d(t, 'a', function () {
        return d;
      }),
        n.d(t, 'b', function () {
          return h;
        });
      var a = n('mrSG'),
        i = n('q1tI'),
        o = n.n(i),
        r = n('TSYQ'),
        s = n.n(r),
        l = n('FzLb'),
        c = n('QpNh'),
        u = n('OP2o'),
        d = u;
      function h(e) {
        var t = e.className,
          n = e.checked,
          i = e.id,
          r = e.label,
          d = e.labelDescription,
          h = e.value,
          v = e.preventLabelHighlight,
          m = e.reference,
          p = e.switchReference,
          f = e.theme,
          b = void 0 === f ? u : f,
          g = s()(b.label, n && !v && b.labelOn),
          _ = s()(t, b.wrapper, n && b.wrapperWithOnLabel);
        return o.a.createElement(
          'label',
          { className: _, htmlFor: i, ref: m },
          o.a.createElement(
            'div',
            { className: b.labelRow },
            o.a.createElement('div', { className: g }, r),
            d && o.a.createElement('div', { className: b.labelHint }, d),
          ),
          o.a.createElement(
            l.Switch,
            Object(a.__assign)(
              {
                className: b.switch,
                reference: p,
                checked: n,
                onChange: function (t) {
                  var n = t.target.checked;
                  void 0 !== e.onChange && e.onChange(n);
                },
                value: h,
                tabIndex: -1,
                id: i,
              },
              Object(c.a)(e),
            ),
          ),
        );
      }
    },
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
        withHover: 'withHover-12uXCBc3',
        hover: 'hover-3dmVjFov',
        inner: 'inner-32OP7ejC',
        actions: 'actions-1cGPn1dW',
        input: 'input-3lfOzLDc',
        defaultCursor: 'defaultCursor-3uzgANBW',
        isExpanded: 'isExpanded-1pdStI5Z',
        mobileButton: 'mobileButton-19PXAUYw',
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
          p = Object(a.__rest)(e, [
            'className',
            'isActive',
            'onClick',
            'title',
            'hidden',
            'data-name',
          ]);
        return i.createElement(
          r.Icon,
          Object(a.__assign)({}, p, {
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
    'j3s+': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.Switch = void 0);
      var a = n('mrSG'),
        i = n('q1tI'),
        o = n('TSYQ'),
        r = n('5ijr');
      function s(e) {
        var t = e.className,
          n = void 0 === t ? '' : t,
          a = e.intent,
          i = void 0 === a ? 'default' : a,
          s = e.size,
          l = void 0 === s ? 'small' : s,
          c = e.disabled;
        return o(n, r.switcherWrapper, r['size-' + l], !c && r['intent-' + i]);
      }
      n('4pMH');
      var l = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          a.__extends(t, e),
          (t.prototype.render = function () {
            var e = this.props,
              t = e.reference,
              n =
                (e.size,
                e.intent,
                a.__rest(e, ['reference', 'size', 'intent'])),
              l = o(r.input, -1 !== this.props.tabIndex && r.focus);
            return i.createElement(
              'div',
              { className: s(this.props) },
              i.createElement(
                'input',
                a.__assign({}, n, { type: 'checkbox', className: l, ref: t }),
              ),
              i.createElement(
                'div',
                { className: r.switcherThumbWrapper },
                i.createElement('div', { className: r.switcherTrack }),
                i.createElement('div', { className: r.switcherThumb }),
              ),
            );
          }),
          t
        );
      })(i.PureComponent);
      t.Switch = l;
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
        u = n('G2sT'),
        d = n('Jtxf'),
        h = n('pqsj'),
        v = n('1uoO'),
        m = n('FO3N'),
        p = n('t2Sj'),
        f = n('fD7T'),
        b = n('VgwI'),
        g =
          (((a = {})[3] = u),
          (a[0] = d),
          (a[1] = h),
          (a[8] = v),
          (a[9] = m),
          (a[2] = p),
          (a[10] = f),
          (a[12] = b),
          a);
      var _,
        C = n('pr86'),
        S = n('Iivm'),
        w = n('N5tr'),
        y = n('82wv'),
        k = n('TSYQ'),
        x = n.n(k),
        O = n('UJ4t'),
        E = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.children,
                n = e.className,
                a = Object(o.__rest)(e, ['children', 'className']);
              return r.createElement(
                'div',
                Object(o.__assign)({ className: k(n, O.wrap) }, a),
                t,
              );
            }),
            t
          );
        })(r.PureComponent),
        M = n('tU7i'),
        j = n('QpNh'),
        T = n('HBiQ'),
        I = (function (e) {
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
            Object(o.__extends)(t, e),
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
                h = Object(j.a)(this.props);
              return r.createElement(
                M.b,
                Object(o.__assign)({}, h, {
                  icon: l,
                  text: s,
                  title: i,
                  isDisabled: u,
                  isActive: c,
                  isGrouped: !0,
                  onClick: this._handleClick,
                  className: k(
                    d,
                    T.button,
                    ((e = {}), (e[T.first] = n), (e[T.last] = a), e),
                  ),
                }),
              );
            }),
            t
          );
        })(r.PureComponent),
        A = n('KKsp'),
        z = n('/KDZ'),
        N = n('uhCe'),
        R = n('dhVi'),
        F = n('1TxM'),
        H = n('YEs3'),
        W =
          (((_ = {})[0] = window.t('Bars')),
          (_[1] = window.t('Candles')),
          (_[9] = window.t('Hollow Candles')),
          (_[8] = window.t('Heikin Ashi')),
          (_[2] = window.t('Line')),
          (_[3] = window.t('Area')),
          (_[10] = window.t('Baseline')),
          (_[12] = window.t('High-Low')),
          _);
      var L = { barsStyle: window.t("Bar's Style"), labels: W },
        D = Object(F.b)(),
        P = (function (e) {
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
              Object(F.c)(n, {
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
            Object(o.__extends)(t, e),
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
                u = l.activeStyle,
                d = l.favorites,
                h = l.styles,
                v = l.japaneseStyles,
                m = l.lastSelectedNotFavorite,
                p = 'small' !== i && n && 0 !== d.length,
                f = Object(o.__spreadArrays)(d);
              f.includes(u) ? void 0 !== m && f.push(m) : f.push(u);
              var b = p && f.length > 1;
              return r.createElement(
                z.a,
                { rule: N.a.TabletSmall },
                function (t) {
                  var n = h.map(function (n) {
                      return e._renderPopupMenuItem(n, n === u, t);
                    }),
                    a = v.map(function (n) {
                      return e._renderPopupMenuItem(n, n === u, t);
                    });
                  return r.createElement(
                    E,
                    { id: s },
                    b &&
                      f.map(function (t, n) {
                        return r.createElement(I, {
                          className: H.button,
                          icon: g[t],
                          isActive: p && u === t,
                          key: n,
                          hint: L.labels[t],
                          isFirst: 0 === n,
                          isLast: n === f.length - 1,
                          onClick: p ? e._handleSelectStyle : void 0,
                          onClickArg: t,
                          'data-value': c.STYLE_SHORT_NAMES[t],
                        });
                      }),
                    r.createElement(
                      y.a,
                      {
                        arrow: Boolean(b),
                        content: b
                          ? void 0
                          : r.createElement(
                              E,
                              null,
                              r.createElement(S.Icon, { icon: g[u] }),
                            ),
                        title: b ? L.barsStyle : L.labels[u],
                        className: H.menu,
                        isDrawer: t,
                      },
                      n,
                      !!a.length && r.createElement(A.a, null),
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
              return r.createElement(w.b, {
                key: e,
                theme: n ? R.a : void 0,
                icon: g[e],
                isActive: t,
                label: L.labels[e] || '',
                onClick: this._handleSelectStyle,
                onClickArg: e,
                showToolboxOnHover: !o,
                toolbox:
                  i &&
                  r.createElement(C.a, {
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
              this.context.favoriteChartStylesService.set(
                Object(o.__spreadArrays)(t, [e]),
              );
            }),
            (t.prototype._handleRemoveFavorite = function (e) {
              var t = this.state.favorites;
              this.context.favoriteChartStylesService.set(
                t.filter(function (t) {
                  return t !== e;
                }),
              );
            }),
            (t.contextType = D),
            t
          );
        })(r.PureComponent),
        V = n('YFKU'),
        B = n('1Tx8'),
        U = ['medium', 'small'];
      function G(e) {
        var t = e.text,
          n = e.className,
          a = e.displayMode,
          i = e.collapseWhen,
          s = void 0 === i ? U : i,
          l = Object(o.__rest)(e, [
            'text',
            'className',
            'displayMode',
            'collapseWhen',
          ]),
          c = !s.includes(a);
        return r.createElement(
          M.b,
          Object(o.__assign)({}, l, {
            text: c ? t : void 0,
            className: k(n, B.button, c ? B.withText : B.withoutText),
          }),
        );
      }
      var K = n('JWMC'),
        q = n('RYBj'),
        Q = {
          compare: window.t('Compare'),
          compareOrAddSymbol: window.t('Compare or Add Symbol'),
        },
        J = Object(F.b)(),
        Y = (function (e) {
          function t(t, n) {
            var a = e.call(this, t, n) || this;
            return (
              (a._handleClick = function () {
                Object(K.trackEvent)('GUI', 'Chart Header Toolbar', 'compare'),
                  a.setState({ isActive: !0 }),
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
              Object(F.c)(n, { chartWidgetCollection: l.any.isRequired }),
              (a.state = { isActive: !1 }),
              a
            );
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.state.isActive;
              return r.createElement(
                G,
                Object(o.__assign)({}, this.props, {
                  icon: q,
                  isOpened: e,
                  onClick: this._handleClick,
                  text: Q.compare,
                  title: Q.compareOrAddSymbol,
                }),
              );
            }),
            (t.contextType = J),
            t
          );
        })(r.PureComponent),
        X = n('EvtC'),
        Z = r.forwardRef(function (e, t) {
          var n = e.className,
            a = Object(o.__rest)(e, ['className']);
          return r.createElement(
            M.b,
            Object(o.__assign)({}, a, { ref: t, className: k(n, X.button) }),
          );
        }),
        $ = n('GgvM'),
        ee = { hint: window.t('Fullscreen mode') },
        te = Object(F.b)(),
        ne = (function (e) {
          function t(t, n) {
            var a = e.call(this, t, n) || this;
            return (
              (a._handleClick = function () {
                a.context.chartWidgetCollection.startFullscreen();
              }),
              Object(F.c)(n, { chartWidgetCollection: l.any.isRequired }),
              a
            );
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.className,
                n = e.id;
              return r.createElement(Z, {
                id: n,
                icon: $,
                onClick: this._handleClick,
                title: ee.hint,
                className: k(t),
              });
            }),
            (t.contextType = te),
            t
          );
        })(r.PureComponent),
        ae = n('Eyy1'),
        ie = n('/DW5'),
        oe = n('txPx'),
        re = Object(oe.getLogger)('FavoritesInfo');
      function se(e, t) {
        if (0 === e.length) return Promise.resolve([]);
        re.logNormal('Requesting favorites info');
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
                Object(ae.assert)(
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
                    re.logWarn(
                      'Cannot find java scripts: ' + JSON.stringify(i),
                    );
                  }
                  return a.items;
                }),
            ),
          Promise.all(n).then(function (e) {
            return (
              re.logNormal('Requesting favorites info finished'),
              e.reduce(function (e, t) {
                return e.concat(t);
              }, [])
            );
          })
        );
      }
      var le = n('CW80'),
        ce = n('mMWL'),
        ue = n('6KyJ'),
        de = n('Oy6E');
      function he(e) {
        return r.createElement(
          'div',
          { className: de.spinnerWrap },
          r.createElement(ue.Loader, null),
        );
      }
      var ve = n('sHKj');
      function me(e) {
        return r.createElement(
          'div',
          { className: k(e.className, ve.title) },
          e.children,
        );
      }
      var pe = n('XWsk'),
        fe = n('S0BX'),
        be = {
          text: window.t('Indicators'),
          hint: i.enabled('study_dialog_fundamentals_economy_addons')
            ? window.t('Indicators & Strategies')
            : window.t('Indicators'),
          favorites: window.t('Favorites'),
        },
        ge = Object(ie.b)({ keys: ['/'], text: '{0}' }),
        _e = Object(F.b)(),
        Ce = (function (e) {
          function t(t, n) {
            var a = e.call(this, t, n) || this;
            (a._promise = null),
              (a._menu = s.a.createRef()),
              (a._handleClick = function () {
                var e = a.props.studyMarket;
                a.setState({ isActive: !0 }, function () {
                  e.isVisible() ? e.hide() : e.show();
                });
              }),
              (a._handleSelectIndicator = function (e) {
                e = Object(ae.ensureDefined)(e);
                var t = a.context.chartWidgetCollection;
                if ('java' === e.type) {
                  var n = Object(le.tryFindStudyLineToolNameByStudyId)(
                    e.studyId,
                  );
                  if (null !== n) return void ce.tool.setValue(n);
                }
                t.activeChartWidget.value().insertStudy(e);
              }),
              (a._handleFavoriteIndicatorsChange = function () {
                var e = a.context.favoriteScriptsModel,
                  t = Object(o.__spreadArrays)(
                    Object(ae.ensureDefined)(e).favorites(),
                  );
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
              Object(F.c)(n, {
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
            Object(o.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.props.studyMarket,
                t = this.context,
                n = t.favoriteScriptsModel,
                a = t.chartWidgetCollection;
              e.visibilityChanged.subscribe(this, this._setActiveState),
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
              e.visibilityChanged.unsubscribe(this, this._setActiveState),
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
                E,
                {
                  id: c,
                  onMouseEnter: this._handleMouseEnter,
                  onClick: this._handleWrapClick,
                },
                s.a.createElement(G, {
                  displayMode: l,
                  className: r,
                  icon: pe,
                  isOpened: n,
                  onClick: this._handleClick,
                  text: be.text,
                  title: be.hint,
                  'data-role': 'button',
                  'data-name': 'open-indicators-dialog',
                  'data-tooltip-hotkey': ge,
                }),
                a.length > 0 &&
                  s.a.createElement(
                    z.a,
                    { rule: 'screen and (max-width: 419px)' },
                    function (t) {
                      return s.a.createElement(
                        y.a,
                        {
                          key: u.activeChartWidget.value().id(),
                          arrow: !0,
                          closeOnClickOutside: !0,
                          isDrawer: t,
                          drawerPosition: 'Bottom',
                          title: be.favorites,
                          ref: e._menu,
                          'data-name': 'show-favorite-indicators',
                        },
                        s.a.createElement(
                          'div',
                          {
                            className: x()(
                              fe.dropdown,
                              t && fe.smallWidthWrapper,
                            ),
                          },
                          s.a.createElement(
                            me,
                            { className: t && fe.smallWidthTitle },
                            window.t('Favorite Indicators'),
                          ),
                          i && s.a.createElement(he, null),
                          !i &&
                            s.a.createElement(
                              s.a.Fragment,
                              null,
                              e.state.infos.length > 0
                                ? e.state.infos.map(function (n) {
                                    return s.a.createElement(w.b, {
                                      className: x()(
                                        t && fe.smallWidthMenuItem,
                                      ),
                                      theme: t ? R.a : void 0,
                                      key:
                                        'java' === n.item.type
                                          ? n.item.studyId
                                          : n.item.pineId,
                                      onClick: e._handleSelectIndicator,
                                      onClickArg: n.item,
                                      label: s.a.createElement(
                                        'span',
                                        {
                                          className: x()(
                                            !t && fe.label,
                                            t && fe.smallWidthLabel,
                                            'apply-overflow-tooltip',
                                          ),
                                        },
                                        Se(n),
                                      ),
                                    });
                                  })
                                : null !== e._promise &&
                                    s.a.createElement(w.b, {
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
            (t.prototype._setActiveState = function (e) {
              this.setState({ isActive: e });
            }),
            (t.prototype._prefetchFavorites = function () {
              var e = this,
                t = this.context.chartWidgetCollection;
              if (null === this._promise) {
                var n = t.activeChartWidget.value().model();
                if (null !== n) {
                  var a = n.model().studyMetaInfoRepository();
                  this.setState({ isLoading: !0 });
                  var i = (this._promise = se(this.state.favorites, a).then(
                    function (t) {
                      if (i === e._promise) {
                        (t = Object(o.__spreadArrays)(t).sort(function (e, t) {
                          return Se(e).localeCompare(Se(t));
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
            (t.contextType = _e),
            t
          );
        })(s.a.PureComponent);
      function Se(e) {
        return (
          e.info.localizedName || Object(V.t)(e.info.name, { context: 'study' })
        );
      }
      var we = n('PT1i'),
        ye = n('pPtI'),
        ke = n('4hTN');
      function xe(e) {
        var t;
        return r.createElement(
          'div',
          {
            className: k(
              ke.value,
              ((t = {}), (t[ke.selected] = e.isSelected), t),
            ),
          },
          e.value,
          e.metric,
        );
      }
      var Oe = n('9dlw'),
        Ee = n('ML8+'),
        Me = n('cSDC'),
        je = n('CX26'),
        Te = (function (e) {
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
                  i = Object(Me.b)(t, a);
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
                var e = Object(ae.ensureNotNull)(
                  n._timeMenu,
                ).getBoundingClientRect();
                return { overrideWidth: e.width, x: e.left, y: e.bottom + 1 };
              }),
              (n.state = {
                inputValue: '1',
                isOpenedMenu: !1,
                selectedTime: Me.a[0].name,
              }),
              n
            );
          }
          return (
            Object(o.__extends)(t, e),
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
                  className: k(je.form, ((e = {}), (e[je.interacting] = i), e)),
                },
                r.createElement('input', {
                  className: je.input,
                  maxLength: 6,
                  onChange: this._handleChangeInput,
                  value: a,
                }),
                r.createElement(
                  'div',
                  {
                    className: je.menu,
                    onClick: this._toggleMenu,
                    ref: this._setMenuRef,
                  },
                  Me.a.find(function (e) {
                    return e.name === s;
                  }).label,
                  r.createElement(Ee.a, { dropped: i }),
                ),
                r.createElement(
                  'div',
                  { className: je.add, onClick: this._handleClickAdd },
                  Object(V.t)('Add'),
                ),
                r.createElement(
                  Oe.a,
                  {
                    doNotCloseOn: this,
                    isOpened: i,
                    minWidth: o,
                    onClose: this._closeMenu,
                    position: this._getMenuPosition,
                  },
                  Me.a.map(function (e) {
                    return r.createElement(w.b, {
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
        Ie = (n('EsMY'), n('i/MG')),
        Ae = n('8d0Q'),
        ze = n('uPhS');
      function Ne(e) {
        var t,
          n,
          a,
          i,
          l = e.interval,
          c = e.hint,
          u = e.isActive,
          d = e.isDisabled,
          h = e.isFavorite,
          v = e.isSignaling,
          m = e.onClick,
          p = e.onClickRemove,
          f = e.onClickFavorite,
          b = e.isSmallTablet,
          g = Object(j.a)(e),
          _ = Object(Ae.b)(),
          S = _[0],
          y = _[1],
          k = s.a.useCallback(
            function () {
              return p(l);
            },
            [p, l],
          ),
          O = s.a.useCallback(
            function () {
              return f(l);
            },
            [f, l],
          ),
          E = Object(r.useRef)(null);
        return (
          Object(r.useEffect)(
            function () {
              var e;
              v &&
                b &&
                (null === (e = E.current) ||
                  void 0 === e ||
                  e.scrollIntoView());
            },
            [v, b],
          ),
          s.a.createElement(
            'div',
            Object(o.__assign)({}, y, { ref: E }),
            s.a.createElement(
              w.b,
              Object(o.__assign)({}, g, {
                className: x()(b && ze.smallWidthMenuItem),
                theme: b ? R.a : void 0,
                isActive: u,
                isDisabled: d,
                isHovered: v,
                onClick: m,
                onClickArg: l,
                toolbox:
                  ((t = e.isRemovable),
                  (n = e.isFavoritingAllowed),
                  (a = s.a.createElement(Ie.a, {
                    key: 'remove',
                    isActive: u,
                    hidden: !Modernizr.touch && !S,
                    onClick: k,
                  })),
                  (i = s.a.createElement(C.a, {
                    key: 'favorite',
                    isActive: u,
                    isFilled: h,
                    onClick: O,
                  })),
                  [t && a, !d && n && i]),
                showToolboxOnHover: !h,
                label: c,
              }),
            ),
          )
        );
      }
      var Re,
        Fe = n('LxhU'),
        He =
          (((Re = {})[Fe.ResolutionKind.Seconds] = window.t('Seconds', {
            context: 'interval_group_name',
          })),
          (Re[Fe.ResolutionKind.Minutes] = window.t('Minutes', {
            context: 'interval_group_name',
          })),
          (Re[Fe.SpecialResolutionKind.Hours] = window.t('Hours', {
            context: 'interval_group_name',
          })),
          (Re[Fe.ResolutionKind.Days] = window.t('Days', {
            context: 'interval_group_name',
          })),
          (Re[Fe.ResolutionKind.Weeks] = window.t('Weeks', {
            context: 'interval_group_name',
          })),
          (Re[Fe.ResolutionKind.Months] = window.t('Months', {
            context: 'interval_group_name',
          })),
          (Re[Fe.ResolutionKind.Range] = window.t('Ranges', {
            context: 'interval_group_name',
          })),
          (Re[Fe.ResolutionKind.Invalid] = ''),
          Re);
      function We(e, t) {
        return (
          void 0 === t && (t = !1),
          { id: e, name: He[e], items: [], mayOmitSeparator: t }
        );
      }
      var Le = n('fioS');
      function De(e) {
        return s.a.createElement(
          s.a.Fragment,
          null,
          s.a.createElement(
            'div',
            {
              className: x()(e.className, Le.summary),
              onClick: function () {
                e.onStateChange && e.onStateChange(!e.open);
              },
              'data-open': e.open,
            },
            e.summary,
            s.a.createElement(Ee.a, {
              className: Le.caret,
              dropped: Boolean(e.open),
            }),
          ),
          e.open && e.children,
        );
      }
      var Pe = n('aIyQ'),
        Ve = n.n(Pe),
        Be = n('X0gx'),
        Ue = n('tWVy'),
        Ge = n('aVq2'),
        Ke = {
          openDialog: Object(V.t)('Open Interval Dialog'),
          timeInterval: Object(V.t)('Time Interval'),
        },
        qe = Object(ie.b)({ keys: [','], text: Object(V.t)('Number or {0}') }),
        Qe = Object(F.b)(),
        Je = new Ve.a(),
        Ye = s.a.lazy(function () {
          return Object(o.__awaiter)(void 0, void 0, void 0, function () {
            var e;
            return Object(o.__generator)(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    (e = {}),
                    [
                      4,
                      Promise.all([
                        n.e(3),
                        n.e(6),
                        n.e(8),
                        n.e(10),
                        n.e(13),
                        n.e(16),
                        n.e(19),
                        n.e(91),
                        n.e(5),
                        n.e(11),
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
        Xe = (function (e) {
          function t(t, n) {
            var a = e.call(this, t, n) || this;
            (a._menu = s.a.createRef()),
              (a._renderChildren = function (e, t) {
                return Object(o.__spreadArrays)(
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
                  activeInterval: Object(ye.normalizeIntervalString)(e),
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
                  e !== we.linking.interval.value() &&
                  (Object(ye.setLastUsedResolution)(e),
                  we.linking.interval.setValue(e)),
                  e && Object(K.trackEvent)('GUI', 'Time Interval', e);
              }),
              (a._handleClickFavorite = function (e) {
                (e = Object(ae.ensureDefined)(e)),
                  a._isIntervalFavorite(e)
                    ? a._handleRemoveFavorite(e)
                    : a._handleAddFavorite(e);
              }),
              (a._handleAddFavorite = function (e) {
                var t = a.state.favorites;
                a.context.favoriteIntervalsService.set(
                  Object(o.__spreadArrays)(t, [e]),
                );
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
                  i = Object(ye.normalizeIntervalString)(e);
                void 0 !== n &&
                  (a._isIntervalDefault(i) ||
                    t.includes(i) ||
                    n.set(
                      Object(ye.sortResolutions)(
                        Object(o.__spreadArrays)(t, [i]),
                      ),
                    )),
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
                    Object(o.__assign)(
                      Object(o.__assign)({}, i),
                      (((n = {})[e] = !t), n),
                    ),
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
                e || t || Je.fire();
              }),
              Object(F.c)(n, {
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
            var h = we.linking.interval.value(),
              v = h && Object(ye.normalizeIntervalString)(h),
              m = c.get(),
              p = void 0 !== u ? u.get() : [],
              f = d.get();
            return (
              (a._defaultsIntervals = r
                .defaultResolutions()
                .map(ye.normalizeIntervalString)),
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
            Object(o.__extends)(t, e),
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
                we.linking.interval.subscribe(this._handleChangeInterval),
                we.linking.intraday.subscribe(this._bindedForceUpdate),
                we.linking.supportedResolutions.subscribe(
                  this._bindedForceUpdate,
                ),
                Ue.a.subscribe(this, this._handleGlobalClose);
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
                we.linking.interval.unsubscribe(this._handleChangeInterval),
                we.linking.intraday.unsubscribe(this._bindedForceUpdate),
                we.linking.supportedResolutions.unsubscribe(
                  this._bindedForceUpdate,
                ),
                Ue.a.unsubscribe(this, this._handleGlobalClose);
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              var n = this;
              this.state.lastAddedInterval &&
                setTimeout(function () {
                  return n.setState({ lastAddedInterval: void 0 });
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
                v = Object(ye.sortResolutions)(Object(o.__spreadArrays)(h));
              void 0 !== r && v.includes(r)
                ? void 0 !== c && v.push(c)
                : void 0 !== r && v.push(r);
              var m = (!(!n || 0 === h.length) || void 0) && v.length > 1,
                p = {},
                f = Object(ye.mergeResolutions)(d, l);
              (void 0 !== r ? f.concat(r) : f)
                .filter(ye.isAvailable)
                .forEach(function (e) {
                  return (p[e] = !0);
                });
              var b =
                void 0 !== r
                  ? Object(ye.getTranslatedResolutionModel)(r)
                  : null;
              return s.a.createElement(
                E,
                { id: a },
                m &&
                  v.map(function (t, n) {
                    var a,
                      i = Object(ye.getTranslatedResolutionModel)(t);
                    return s.a.createElement(I, {
                      key: n,
                      className: k(
                        Ge.button,
                        ((a = {}),
                        (a[Ge.first] = 0 === n),
                        (a[Ge.last] = n === v.length - 1),
                        a),
                      ),
                      text: s.a.createElement(xe, {
                        value: i.mayOmitMultiplier ? void 0 : i.multiplier,
                        metric: i.shortKind,
                      }),
                      hint: i.hint,
                      isActive: r === t,
                      isDisabled: !p[t] && t !== c,
                      onClick: e._handleSelectInterval,
                      onClickArg: t,
                      'data-value': t,
                    });
                  }),
                s.a.createElement(z.a, { rule: N.a.TabletSmall }, function (t) {
                  return s.a.createElement(
                    s.a.Fragment,
                    null,
                    s.a.createElement(
                      Be.a.Provider,
                      { value: Je },
                      s.a.createElement(
                        y.a,
                        {
                          arrow: Boolean(m),
                          closeOnClickOutside: !0,
                          content:
                            m || null === b
                              ? void 0
                              : s.a.createElement(
                                  E,
                                  { className: Ge.menuContent },
                                  s.a.createElement(xe, {
                                    value: b.mayOmitMultiplier
                                      ? void 0
                                      : b.multiplier,
                                    metric: b.shortKind,
                                  }),
                                ),
                          title: m || null === b ? Ke.timeInterval : b.hint,
                          hotKey: m ? qe : void 0,
                          className: Ge.menu,
                          ref: e._menu,
                          isDrawer: t,
                        },
                        s.a.createElement(
                          'div',
                          { className: Ge.dropdown },
                          e._renderChildren(f, t),
                        ),
                      ),
                    ),
                    t &&
                      u &&
                      s.a.createElement(
                        s.a.Suspense,
                        { fallback: null },
                        s.a.createElement(Ye, {
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
                u = this,
                d = ((a = e),
                (i = We(Fe.ResolutionKind.Seconds)),
                (o = We(Fe.ResolutionKind.Minutes)),
                (r = We(Fe.SpecialResolutionKind.Hours)),
                (s = We(Fe.ResolutionKind.Days)),
                (l = We(Fe.ResolutionKind.Range)),
                a.forEach(function (e) {
                  var t = Fe.Interval.parse(e);
                  t.isMinuteHours()
                    ? r.items.push(e)
                    : t.isMinutes()
                    ? Object(Fe.isHour)(Number(t.multiplier()))
                      ? r.items.push(e)
                      : o.items.push(e)
                    : t.isSeconds()
                    ? i.items.push(e)
                    : t.isDWM()
                    ? s.items.push(e)
                    : t.isRange() && l.items.push(e);
                }),
                [i, o, r, s, l].filter(function (e) {
                  return 0 !== e.items.length;
                })).map(function (e, n, a) {
                  return u._renderResolutionsGroup(e, 1 === a.length, t);
                }),
                h = (n = []).concat.apply(n, d);
              return (
                (c = !1),
                h.filter(function (e, t, n) {
                  var a = !0;
                  return (
                    e.type === A.a &&
                      ((0 !== t && t !== n.length - 1) || (a = !1),
                      c && (a = !1)),
                    (c = e.type === A.a),
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
                        className: Ge.addCustomInterval,
                        onClick: this._handleOpenAddIntervalDialog,
                      },
                      Object(V.t)('Add custom interval') + '…',
                    )
                  : s.a.createElement(Te, {
                      key: 'add-form',
                      onAdd: this._handleAddInterval,
                      onCloseMenu: this._handleCloseMenu,
                      onOpenMenu: this._handleOpenMenu,
                    });
                return [
                  s.a.createElement(A.a, { key: 'custom-interval-separator' }),
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
                    { className: Ge.smallTabletSectionTitle },
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
                  De,
                  {
                    key: e.id,
                    className: Ge.section,
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
                    s.a.createElement(A.a, { key: 'begin-' + e.name }),
                  ),
                  i.push(s.a.createElement(A.a, { key: 'end-' + e.name }))),
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
                l = Object(ye.isAvailable)(e),
                c = this._isIntervalFavorite(e),
                u = this._isIntervalDefault(e),
                d = Object(ye.getTranslatedResolutionModel)(e);
              return s.a.createElement(Ne, {
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
            (t.contextType = Qe),
            t
          );
        })(s.a.PureComponent),
        Ze = n('sbT4'),
        $e = n('lAXe'),
        et = { hint: window.t('Open chart in popup') },
        tt = Object(F.b)(),
        nt = (function (e) {
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
              Object(F.c)(n, {
                isFundamental: l.any,
                chartWidgetCollection: l.any.isRequired,
                windowMessageService: l.any.isRequired,
              }),
              a
            );
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props.className;
              return r.createElement(Z, {
                className: k(e, Ze.button),
                icon: $e,
                onClick: this._handleClick,
                title: et.hint,
              });
            }),
            (t.contextType = tt),
            t
          );
        })(r.PureComponent),
        at = n('uafl'),
        it = { hint: window.t('Chart Properties') },
        ot = Object(F.b)(),
        rt = (function (e) {
          function t(t, n) {
            var a = e.call(this, t, n) || this;
            return (
              (a._handleClick = function () {
                var e = a.context.chartWidgetCollection.activeChartWidget.value();
                Object(K.trackEvent)(
                  'GUI',
                  'Chart Header Toolbar',
                  'chart properties',
                ),
                  e.showGeneralChartProperties();
              }),
              Object(F.c)(n, { chartWidgetCollection: l.any.isRequired }),
              a
            );
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype.render = function () {
              return r.createElement(
                Z,
                Object(o.__assign)({}, this.props, {
                  icon: at,
                  title: it.hint,
                  onClick: this._handleClick,
                }),
              );
            }),
            (t.contextType = ot),
            t
          );
        })(r.PureComponent),
        st = n('lxNp'),
        lt = (n('bSeV'), n('//lZ')),
        ct = n('9uLv'),
        ut = n('nrMg'),
        dt =
          'M21.5 21.5h-14a5 5 0 1 1 .42-9.983 7.5 7.5 0 0 1 14.57 2.106 4.002 4.002 0 0 1-.99 7.877z',
        ht = 13.08991081237793,
        vt = {
          strokeDashOffset: 49.242997817993164,
          strokeDash: 49.866326904296876,
          strokeGap: ht,
          strokeDashCheck: 0,
        },
        mt = {
          strokeDashOffset: 62.956237716674806,
          strokeGap: 0,
          strokeDash: 62.956237716674806,
          strokeDashCheck: 200,
        },
        pt = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.state = vt), n;
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              'saved' === this.props.state
                ? this.setState(mt)
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
                m = k(
                  ut.container,
                  l,
                  v && ut.hovered,
                  (((e = {})[ut.unsaved] = 'unsaved' === d),
                  (e[ut.saving] = 'saving' === d),
                  (e[ut.saved] = 'saved' === d),
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
                    className: ut.dottedCloud,
                    stroke: 'currentColor',
                    strokeDasharray: '3.5,2.5',
                    d: dt,
                  }),
                  r.createElement('path', {
                    className: ut.spinningCloud,
                    stroke: 'currentColor',
                    strokeDasharray: a + ' ' + i,
                    strokeDashoffset: n,
                    d: dt,
                  }),
                  r.createElement('path', {
                    className: ut.arrowGap,
                    d: 'M11 20h6v5h-6z',
                  }),
                  r.createElement(
                    'g',
                    { className: ut.arrow, stroke: 'currentColor' },
                    r.createElement('path', {
                      strokeLinecap: 'square',
                      d: 'M14.5 14.5v10',
                    }),
                    r.createElement('path', { d: 'M11 17l3.5-3.5L18 17' }),
                  ),
                  r.createElement(
                    'g',
                    { className: ut.check, stroke: 'currentColor' },
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
                  this.setState(vt);
                  break;
                case 'saving':
                  'unsaved' !== this.props.state && this.setState(vt),
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
                Object(lt.doAnimate)({
                  onStep: function (t, n) {
                    void 0 !== e._currentAnimation &&
                      e.setState({ strokeDashOffset: n });
                  },
                  onComplete: function () {
                    return t();
                  },
                  from: 49.242997817993164,
                  to: 111.57590644836426,
                  easing: ct.easingFunc.linear,
                  duration: 1e3,
                });
              });
            }),
            (t.prototype._createCheckAnimation = function () {
              var e = this;
              return new Promise(function (t) {
                Object(lt.doAnimate)({
                  onStep: function (t, n) {
                    void 0 !== e._currentAnimation &&
                      e.setState({ strokeDashCheck: Math.round(n) });
                  },
                  onComplete: function () {
                    return t();
                  },
                  from: 0,
                  to: 200,
                  easing: ct.easingFunc.linear,
                  duration: 1e3,
                });
              });
            }),
            (t.prototype._createFillGapAnimation = function () {
              var e = this;
              return new Promise(function (t) {
                Object(lt.doAnimate)({
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
                  from: ht,
                  to: 0,
                  easing: ct.easingFunc.linear,
                  duration: 200,
                });
              });
            }),
            t
          );
        })(r.PureComponent),
        ft = n('nPPD'),
        bt = n('MB0Y'),
        gt = n('3j+J'),
        _t = (Object(ft.a)(bt.a, gt), n('+KIV')),
        Ct = n('RGo6'),
        St = n('SchQ'),
        wt = (n('OP2o'), n('v1bN')),
        yt = i.enabled('widget'),
        kt = Object(ft.a)(M.a, St),
        xt = {
          copy: window.t('Copy'),
          makeCopy: window.t('Make a Copy'),
          newChartLayout: window.t('New Chart Layout'),
          loadChartLayout: window.t('Load Chart Layout...'),
          rename: window.t('Rename...'),
          renameChartLayout: window.t('Rename Chart Layout'),
          saveAs: window.t('Make a Copy...'),
          saveChartLayout: window.t('Save'),
          saveChartLayoutLong: window.t(
            'Save all charts for all symbols and intervals on your layout',
          ),
          manageChartLayouts: window.t('Manage Chart Layouts'),
        },
        Ot = [],
        Et = Object(ie.b)({ keys: ['Ctrl', 'S'], text: '{0} + {1}' }),
        Mt = (function (e) {
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
            Object(o.__extends)(t, e),
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
                h = e.isTabletSmall,
                v = this.state.iconHovered,
                m = !n && !d,
                p = 'saved';
              return (
                (!l && o) || (p = 'unsaved'),
                i && (p = 'saving'),
                r.createElement(
                  E,
                  null,
                  n
                    ? r.createElement(
                        E,
                        null,
                        r.createElement(G, {
                          id: t,
                          displayMode: a,
                          icon: r.createElement(S.Icon, { icon: _t }),
                          isDisabled: i,
                          onClick: c,
                          text: xt.copy,
                          title: xt.makeCopy,
                          onMouseEnter: this._handleSaveHoverBegin,
                          onMouseLeave: this._handleSaveHoverEnd,
                          collapseWhen: Ot,
                        }),
                      )
                    : r.createElement(
                        E,
                        null,
                        r.createElement(G, {
                          id: t,
                          className: k(Ct.button, m && Ct.buttonSmallPadding),
                          displayMode: a,
                          icon: r.createElement(pt, {
                            size: 28,
                            state: p,
                            isHovered: v,
                          }),
                          isDisabled: (s && !l) || i,
                          onClick: u,
                          text: o || xt.saveChartLayout,
                          title: xt.saveChartLayoutLong,
                          onMouseEnter: this._handleSaveHoverBegin,
                          onMouseLeave: this._handleSaveHoverEnd,
                          theme: kt,
                          collapseWhen: Ot,
                          'data-tooltip-hotkey': yt ? '' : Et,
                        }),
                        m &&
                          r.createElement(
                            y.a,
                            {
                              ref: this._toolWidgetMenuRef,
                              className: 'js-save-load-menu-open-button',
                              arrow: !0,
                              isDrawer: h,
                              drawerPosition: 'Bottom',
                              title: xt.manageChartLayouts,
                            },
                            !1,
                            this._renderMenuItems(Boolean(h)),
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
                  e ? R.a : wt),
                d = e ? void 0 : 'Ctrl+S',
                h = [];
              return (
                h.push(
                  r.createElement(w.b, {
                    key: 'save',
                    isDisabled: Boolean(a || (!n && i)),
                    label: xt.saveChartLayout,
                    onClick: o,
                    shortcut: d,
                    labelRowClassName: k(e && Ct.popupItemRowTabletSmall),
                    theme: u,
                  }),
                ),
                void 0 !== i &&
                  (e ||
                    h.push(
                      r.createElement(A.a, {
                        key: 'existing-chart-section-begin',
                      }),
                    ),
                  h.push.apply(h, [
                    r.createElement(w.b, {
                      key: 'rename',
                      label: xt.rename,
                      onClick: s,
                      labelRowClassName: k(e && Ct.popupItemRowTabletSmall),
                      theme: u,
                    }),
                    r.createElement(w.b, {
                      key: 'save-as',
                      label: xt.saveAs,
                      onClick: l,
                      labelRowClassName: k(e && Ct.popupItemRowTabletSmall),
                      theme: u,
                    }),
                  ])),
                h.push(r.createElement(A.a, { key: 'platform-section-begin' })),
                h.push(
                  r.createElement(w.b, {
                    key: 'load-chart',
                    className: 'js-save-load-menu-item-load-chart',
                    label: xt.loadChartLayout,
                    onClick: c,
                    labelRowClassName: k(e && Ct.popupItemRowTabletSmall),
                    theme: u,
                  }),
                ),
                h
              );
            }),
            t
          );
        })(r.PureComponent),
        jt = Object(F.b)(),
        Tt = (function (e) {
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
              Object(F.c)(n, {
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
            Object(o.__extends)(t, e),
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
                  (this._hotkeys = Object(st.createGroup)({
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
                  Object(ae.ensureDefined)(this._hotkeys).destroy(),
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
                z.a,
                { rule: N.a.TabletSmall },
                function (e) {
                  return r.createElement(
                    Mt,
                    Object(o.__assign)({}, h, { isTabletSmall: e }),
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
            (t.contextType = jt),
            t
          );
        })(r.PureComponent),
        It = n('FQhm'),
        At = { takeSnapshot: window.t('Take a snapshot') },
        zt = Object(ie.b)({ keys: ['Alt', 'S'], text: '{0} + {1}' }),
        Nt = Object(F.b)();
      var Rt,
        Ft,
        Ht = n('koZ+'),
        Wt =
          ((Rt = function (e) {
            return r.createElement(M.b, {
              id: e.id,
              className: e.className,
              isDisabled: e.isProcessing,
              onClick: e.onClick,
              title: e.tooltip,
              'data-tooltip-hotkey': e.hotkey,
              icon: Ht,
            });
          }),
          ((Ft = (function (e) {
            function t(t, n) {
              var a = e.call(this, t, n) || this;
              return (
                (a._handleClick = function (e) {
                  if (!i.enabled('show_dialog_on_snapshot_ready')) {
                    if (a.state.isProcessing) return;
                    a.setState({ isProcessing: !0 }),
                      It.subscribe(
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
                Object(F.c)(n, { chartWidgetCollection: l.any.isRequired }),
                (a.state = { isProcessing: !1 }),
                a
              );
            }
            return (
              Object(o.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.className,
                  n = e.id,
                  a = this.state.isProcessing;
                return r.createElement(Rt, {
                  id: n,
                  className: t,
                  isProcessing: a,
                  onClick: this._handleClick,
                  tooltip: At.takeSnapshot,
                  hotkey: zt,
                });
              }),
              t
            );
          })(r.PureComponent)).contextType = Nt),
          Ft),
        Lt = n('pZll'),
        Dt = n('h24c'),
        Pt = n('X7WP'),
        Vt = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._actions = null),
              (t._input = null),
              (t._promise = null),
              (t._containerRef = s.a.createRef()),
              (t._preventDefault = function (e) {
                e.preventDefault();
              }),
              (t._trackSymbolSearchOpenEvent = function () {
                Object(K.trackEvent)('GUI', 'SS', 'main search');
              }),
              (t._openSymbolSearchDialog = function () {}),
              t
            );
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this,
                t = Object(ae.ensureNotNull)(this._input);
              var n = (this._promise = Object(Lt.symbolSearchUIService)()
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
                {
                  id: l,
                  className: k(Pt.wrap, c, !1),
                  ref: this._containerRef,
                },
                s.a.createElement(
                  'div',
                  {
                    className: k(
                      Pt.inner,
                      ((e = {}), (e[Pt.isExpanded] = i), e),
                    ),
                    onClick: void 0,
                  },
                  !1,
                  s.a.createElement('input', {
                    className: k(Pt.input, !1),
                    maxLength: 1e3,
                    onBlur: r,
                    onFocus: o,
                    ref: function (e) {
                      return (t._input = e);
                    },
                    type: 'text',
                    tabIndex: -1,
                    readOnly: !1,
                  }),
                  Object(Dt.canShowSpreadActions)() &&
                    a &&
                    s.a.createElement('div', {
                      className: Pt.actions,
                      onMouseDown: this._preventDefault,
                      ref: function (e) {
                        return (t._actions = e);
                      },
                    }),
                ),
              );
            }),
            (t.prototype._calcGrowPoint = function (e) {
              var t = null == e ? void 0 : e.current;
              if (!t) return null;
              var n = t.getBoundingClientRect(),
                a = n.x,
                i = n.y;
              return { x: a + n.width / 2, y: i + n.height / 2 };
            }),
            t
          );
        })(s.a.PureComponent),
        Bt = n('jKyl'),
        Ut = n('23di'),
        Gt = Object(ft.a)(w.a, Ut),
        Kt = { text: window.t('Save Indicator template...') };
      function qt(e) {
        var t = e.onClick,
          n = e.isTabletSmall;
        return s.a.createElement(w.b, {
          theme: Gt,
          className: Ut.wrap,
          label: s.a.createElement(
            'div',
            { className: Ut.titleWrap },
            s.a.createElement(
              'div',
              { className: x()(Ut.title, n && Ut.titleTabletSmall) },
              s.a.createElement(S.Icon, { className: Ut.icon, icon: Bt }),
              s.a.createElement('div', { className: Ut.text }, Kt.text),
            ),
          ),
          onClick: t,
        });
      }
      var Qt = n('8RO/'),
        Jt = n('s0T6');
      function Yt(e) {
        return r.createElement(
          'div',
          { className: k(Jt.description, e.className) },
          e.children,
        );
      }
      var Xt = n('fESK'),
        Zt = Object(ft.a)(w.a, {
          labelRow: Xt.labelRow,
          toolbox: Xt.toolbox,
          item: Xt.titleItem,
        }),
        $t = Object(ft.a)(w.a, {
          labelRow: Xt.labelRow,
          toolbox: Xt.toolbox,
          item: Xt.titleItemTabletSmall,
        }),
        en = Object(ft.a)(w.a, { item: Xt.item }),
        tn = Object(ft.a)(w.a, { item: Xt.itemTabletSmall });
      function nn(e) {
        var t = e.item,
          n = e.onApply,
          a = e.onRemove,
          i = e.onFavor,
          l = e.favorite,
          c = e.isFavoritingAllowed,
          u = e.isTabletSmall,
          d = Object(Ae.b)(),
          h = d[0],
          v = d[1],
          m = t.meta_info,
          p = m ? Object(Qt.b)(m.indicators) : void 0,
          f = u ? $t : Zt,
          b = u ? tn : en,
          g = Object(r.useCallback)(
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
          S = Object(r.useCallback)(
            function () {
              i && i(t);
            },
            [i, t],
          );
        return s.a.createElement(
          'div',
          Object(o.__assign)({}, v, {
            className: Xt.wrap,
            'data-name': t.name,
            'data-id': t.id,
            'data-is-default': Boolean(t.is_default),
          }),
          s.a.createElement(w.b, {
            theme: f,
            label: t.name,
            labelRowClassName: x()(u && Xt.itemLabelTabletSmall),
            isHovered: h,
            showToolboxOnHover: !l && !h,
            onClick: g,
            toolbox: s.a.createElement(
              s.a.Fragment,
              null,
              !t.is_default &&
                s.a.createElement(Ie.a, {
                  key: 'remove',
                  hidden: !Modernizr.touch && !h,
                  onClick: _,
                }),
              Boolean(i) &&
                c &&
                s.a.createElement(C.a, {
                  key: 'favorite',
                  isFilled: Boolean(l),
                  onClick: S,
                }),
            ),
          }),
          p &&
            s.a.createElement(w.b, {
              theme: b,
              label: s.a.createElement(
                Yt,
                {
                  className: x()(
                    Xt.description,
                    u && Xt.descriptionTabletSmall,
                  ),
                },
                p,
              ),
              onClick: g,
              isHovered: h,
            }),
        );
      }
      var an = n('9NBK'),
        on = (function (e) {
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
            Object(o.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.className,
                n = e.item;
              return r.createElement(
                'div',
                {
                  className: k(t, an.item, 'apply-common-tooltip'),
                  onClick: this._handleClick,
                  title: n.name,
                },
                r.createElement(
                  'div',
                  { className: an.round },
                  n.name.length > 0 ? n.name[0].toUpperCase() : ' ',
                ),
              );
            }),
            t
          );
        })(r.PureComponent),
        rn = n('gla1'),
        sn = n('PN6A'),
        ln = n('zgWb'),
        cn = n('yGrx'),
        un = {
          title: Object(V.t)('Templates'),
          tooltip: Object(V.t)('Indicator Templates'),
        },
        dn = s.a.createContext(null),
        hn = Object(F.b)(),
        vn = (function (e) {
          function t(t, n) {
            var a = e.call(this, t, n) || this;
            (a._handleFavorTemplate = function (e) {
              if (a.props.isShownQuicks) {
                var t = e.name;
                a._isTemplateFavorite(t)
                  ? a._removeFavoriteTemplate(t)
                  : a._addFavoriteTemplate(t);
              }
            }),
              (a._handleSaveTemplate = function () {
                a.context.studyTemplates.showSaveAsDialog();
              }),
              (a._handleApplyTemplate = function (e) {
                a._handleClose(),
                  a.context.studyTemplates.applyTemplate(e.name);
              }),
              (a._handleRemoveTemplate = function (e) {
                a._handleClose(),
                  a.context.studyTemplates.deleteStudyTemplate(e.name);
              }),
              (a._handleClose = function () {
                a._handleToggleDropdown(!1);
              }),
              (a._handleToggleDropdown = function (e) {
                var t = a.state.isActive,
                  n = 'boolean' == typeof e ? e : !t;
                a.setState({ isActive: n });
              }),
              (a._handleDropdownOpen = function () {
                var e = a.context.studyTemplates;
                a.setState({ isLoading: !0 }),
                  e.invalidate(),
                  e.refreshStudyTemplateList(function () {
                    return a.setState({ isLoading: !1 });
                  });
              }),
              Object(F.c)(n, {
                favoriteStudyTemplatesService: l.any,
                studyTemplates: l.any.isRequired,
                templatesMenuViewStateService: l.any,
              });
            var i = n.favoriteStudyTemplatesService,
              o = n.studyTemplates,
              r = void 0 !== i ? i.get() : [],
              s = o.list();
            return (
              (a.state = {
                isActive: !1,
                isLoading: !1,
                studyTemplatesList: s,
                favorites: r,
              }),
              a
            );
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.context,
                t = e.favoriteStudyTemplatesService,
                n = e.studyTemplates;
              n.getOnChange().subscribe(this, this._handleTemplatesChange),
                n.refreshStudyTemplateList(),
                void 0 !== t &&
                  t.getOnChange().subscribe(this, this._handleFavoritesChange);
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.context,
                t = e.favoriteStudyTemplatesService;
              e.studyTemplates
                .getOnChange()
                .unsubscribe(this, this._handleTemplatesChange),
                void 0 !== t &&
                  t
                    .getOnChange()
                    .unsubscribe(this, this._handleFavoritesChange);
            }),
            (t.prototype.render = function () {
              var e = this.state,
                t = e.studyTemplatesList,
                n = e.favorites,
                a = e.isLoading,
                i = this.props,
                o = i.isShownQuicks,
                r = i.className,
                l = i.displayMode,
                c = i.id;
              return s.a.createElement(
                dn.Provider,
                { value: this.context.templatesMenuViewStateService || null },
                s.a.createElement(mn, {
                  id: c,
                  className: r,
                  mode: l,
                  isLoading: a,
                  templates: t,
                  favorites: n,
                  onMenuOpen: this._handleDropdownOpen,
                  onTemplateFavorite: o ? this._handleFavorTemplate : void 0,
                  onTemplateSelect: this._handleApplyTemplate,
                  onTemplateRemove: this._handleRemoveTemplate,
                  onTemplateSave: this._handleSaveTemplate,
                }),
              );
            }),
            (t.prototype._handleTemplatesChange = function () {
              this.setState({
                studyTemplatesList: this.context.studyTemplates.list(),
              });
            }),
            (t.prototype._handleFavoritesChange = function (e) {
              this.props.isShownQuicks && this.setState({ favorites: e });
            }),
            (t.prototype._removeFavoriteTemplate = function (e) {
              var t = this.context.favoriteStudyTemplatesService;
              if (void 0 !== t) {
                var n = this.state.favorites;
                t.set(
                  n.filter(function (t) {
                    return t !== e;
                  }),
                );
              }
            }),
            (t.prototype._addFavoriteTemplate = function (e) {
              var t = this.context.favoriteStudyTemplatesService;
              if (void 0 !== t) {
                var n = this.state.favorites;
                t.set(Object(o.__spreadArrays)(n, [e]));
              }
            }),
            (t.prototype._isTemplateFavorite = function (e) {
              return this.state.favorites.includes(e);
            }),
            (t.contextType = hn),
            t
          );
        })(s.a.PureComponent);
      function mn(e) {
        var t,
          n = e.id,
          a = e.className,
          i = e.mode,
          o = e.isLoading,
          r = e.favorites,
          l = e.templates,
          c = e.isMenuOpen,
          u = e.onTemplateSelect,
          d = e.onTemplateSave,
          h = e.onTemplateFavorite,
          v = e.onTemplateRemove,
          m = x()(
            a,
            cn.wrap,
            (((t = {})[cn.full] = 'full' === i),
            (t[cn.medium] = 'medium' === i),
            t),
          ),
          p = l.filter(function (e) {
            return r.includes(e.name);
          }),
          f = 'small' !== i && h && p.length > 0;
        return s.a.createElement(
          E,
          { id: n, className: m },
          s.a.createElement(z.a, { rule: N.a.TabletSmall }, function (t) {
            return s.a.createElement(
              y.a,
              {
                onOpen: e.onMenuOpen,
                isDrawer: t,
                drawerPosition: 'Bottom',
                arrow: !1,
                content: s.a.createElement(G, {
                  className: x()(f && cn.buttonWithFavorites),
                  displayMode: i,
                  isOpened: c,
                  icon: ln,
                  text: un.title,
                  title: un.tooltip,
                  forceInteractive: !0,
                }),
              },
              s.a.createElement(pn, {
                onTemplateSave: d,
                onTemplateSelect: u,
                onTemplateRemove: v,
                onTemplateFavorite: h,
                isLoading: o,
                templates: l,
                favorites: p,
                className: x()(cn.menu, t && cn.menuSmallTablet),
                isTabletSmall: t,
              }),
            );
          }),
          f && s.a.createElement(gn, { favorites: p, onTemplateSelect: u }),
        );
      }
      function pn(e) {
        var t = e.templates,
          n = e.favorites,
          a = e.onTemplateSave,
          i = e.onTemplateRemove,
          o = e.onTemplateSelect,
          l = e.onTemplateFavorite,
          c = e.className,
          u = e.isTabletSmall,
          d = e.isLoading,
          h = Object(r.useMemo)(
            function () {
              return t.filter(function (e) {
                return e.is_default;
              });
            },
            [t],
          ),
          v = Object(r.useMemo)(
            function () {
              return t.filter(function (e) {
                return !e.is_default;
              });
            },
            [t],
          ),
          m = Object(r.useMemo)(
            function () {
              return new Set(
                n.map(function (e) {
                  return e.name;
                }),
              );
            },
            [n],
          ),
          p = Object(r.useContext)(dn),
          f = Object(r.useContext)(sn.a),
          b = Object(rn.a)();
        Object(r.useEffect)(function () {
          if (null !== p) {
            var e = {};
            return (
              p.getOnChange().subscribe(e, function () {
                b(), f && f.update();
              }),
              function () {
                return p.getOnChange().unsubscribeAll(e);
              }
            );
          }
          return function () {};
        }, []),
          Object(r.useLayoutEffect)(
            function () {
              f && !d && f.update();
            },
            [d],
          );
        var g = function (e) {
          return s.a.createElement(nn, {
            key: e.name,
            item: e,
            isFavoritingAllowed: Boolean(l),
            favorite: m.has(e.name),
            onApply: o,
            onFavor: l,
            onRemove: i,
            isTabletSmall: u,
          });
        };
        return s.a.createElement(
          'div',
          { className: c },
          s.a.createElement(qt, { onClick: a, isTabletSmall: u }),
          d &&
            s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(A.a, null),
              s.a.createElement(he, null),
            ),
          !d &&
            (u
              ? s.a.createElement(fn, { defaults: h, customs: v, render: g })
              : s.a.createElement(bn, {
                  defaults: h,
                  customs: v,
                  render: g,
                  state: p,
                })),
        );
      }
      function fn(e) {
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
              s.a.createElement(A.a, null),
              s.a.createElement(
                me,
                { className: cn.menuItemHeaderTabletSmall },
                Object(V.t)('My templates'),
              ),
              n.map(a),
            ),
          t.length > 0 &&
            s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(A.a, null),
              s.a.createElement(
                me,
                { className: cn.menuItemHeaderTabletSmall },
                Object(V.t)('Default templates'),
              ),
              t.map(a),
            ),
        );
      }
      function bn(e) {
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
              s.a.createElement(A.a, null),
              s.a.createElement(
                me,
                { className: cn.menuItemHeader },
                Object(V.t)('My templates'),
              ),
              n.map(a),
            ),
          n.length > 0 &&
            t.length > 0 &&
            i &&
            s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(A.a, null),
              s.a.createElement(
                De,
                {
                  summary: Object(V.t)('Default templates'),
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
              s.a.createElement(A.a, null),
              s.a.createElement(
                me,
                { className: cn.menuItemHeader },
                Object(V.t)('Default templates'),
              ),
              t.map(a),
            ),
        );
      }
      function gn(e) {
        return s.a.createElement(
          s.a.Fragment,
          null,
          e.favorites.map(function (t, n, a) {
            var i;
            return s.a.createElement(on, {
              key: t.name,
              item: t,
              onApply: e.onTemplateSelect,
              className: x()(
                ((i = {}),
                (i[cn.first] = 0 === n),
                (i[cn.last] = n === a.length - 1),
                i),
              ),
            });
          }),
        );
      }
      n('HbRj');
      var _n = n('S+Ii'),
        Cn = n('bQ7Y'),
        Sn = n('wnRL'),
        wn = n('2xRE'),
        yn = { undoHint: window.t('Undo {0}'), redoHint: window.t('Redo {0}') },
        kn = {
          undoHotKey: Object(ie.b)({ keys: ['Ctrl', 'Z'], text: '{0} + {1}' }),
          redoHotKey: Object(ie.b)({ keys: ['Ctrl', 'Y'], text: '{0} + {1}' }),
        },
        xn = Object(ft.b)(Cn, _n, {
          buttonUndo: 'button',
          buttonRedo: 'button',
        }),
        On = Object(o.__assign)(Object(o.__assign)({}, Cn), {
          button: xn.buttonUndo,
        }),
        En = Object(o.__assign)(Object(o.__assign)({}, Cn), {
          button: xn.buttonRedo,
        }),
        Mn = Object(F.b)(),
        jn = (function (e) {
          function t(t, n) {
            var a = e.call(this, t, n) || this;
            return (
              (a._batched = null),
              (a._handleClickUndo = function () {
                Object(K.trackEvent)('GUI', 'Undo'),
                  a.context.chartWidgetCollection.undoHistory.undo();
              }),
              (a._handleClickRedo = function () {
                Object(K.trackEvent)('GUI', 'Redo'),
                  a.context.chartWidgetCollection.undoHistory.redo();
              }),
              Object(F.c)(n, { chartWidgetCollection: l.any.isRequired }),
              (a.state = a._getStateFromUndoHistory()),
              a
            );
          }
          return (
            Object(o.__extends)(t, e),
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
                E,
                { id: e },
                r.createElement(M.b, {
                  icon: Sn,
                  isDisabled: !a,
                  onClick: this._handleClickUndo,
                  title: a ? yn.undoHint.format(o) : void 0,
                  'data-tooltip-hotkey': a ? kn.undoHotKey : void 0,
                  theme: On,
                }),
                r.createElement(M.b, {
                  icon: wn,
                  isDisabled: !n,
                  onClick: this._handleClickRedo,
                  title: n ? yn.redoHint.format(i) : void 0,
                  'data-tooltip-hotkey': n ? kn.redoHotKey : void 0,
                  theme: En,
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
            (t.contextType = Mn),
            t
          );
        })(r.PureComponent),
        Tn = n('i8i4'),
        In = n('cvc5'),
        An = (function (e) {
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
            Object(o.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.props,
                t = e.element,
                n = e.isFake,
                a = e.width;
              if (n) a.subscribe(this._update);
              else {
                var i = Object(ae.ensureNotNull)(this._ref);
                Tn.findDOMNode(i).appendChild(t);
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
                In,
                {
                  shouldMeasure: !n,
                  whitelist: ['width'],
                  onMeasure: this._handleMeasure,
                },
                r.createElement(E, {
                  ref: this._setRef,
                  style: n ? { width: a.value() } : void 0,
                }),
              );
            }),
            t
          );
        })(r.PureComponent);
      function zn() {
        return {
          Bars: i.enabled('header_chart_type') ? P : void 0,
          Compare: i.enabled('header_compare') ? Y : void 0,
          Custom: An,
          Fullscreen: i.enabled('header_fullscreen_button') ? ne : void 0,
          Indicators: i.enabled('header_indicators') ? Ce : void 0,
          Intervals: i.enabled('header_resolutions') ? Xe : void 0,
          OpenPopup: nt,
          Properties:
            i.enabled('header_settings') &&
            i.enabled('show_chart_property_page')
              ? rt
              : void 0,
          SaveLoad: i.enabled('header_saveload') ? Tt : void 0,
          Screenshot: i.enabled('header_screenshot') ? Wt : void 0,
          SymbolSearch: i.enabled('header_symbol_search') ? Vt : void 0,
          Templates: i.enabled('study_templates') ? vn : void 0,
          UndoRedo: i.enabled('header_undo_redo') ? jn : void 0,
          Layout: void 0,
        };
      }
      n.d(t, 'getRestrictedToolSet', function () {
        return zn;
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
          v = Object(a.__rest)(e, [
            'className',
            'isFilled',
            'isActive',
            'onClick',
          ]);
        return i.createElement(
          r.Icon,
          Object(a.__assign)({}, v, {
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
        loader: 'loader-1uURoPBh',
        buttonWithFavorites: 'buttonWithFavorites-3S-vuMxR',
        menu: 'menu-pdQdEiwV',
        menuSmallTablet: 'menuSmallTablet-tXzCU-3p',
        menuItemHeader: 'menuItemHeader-228dcYv3',
        menuItemHeaderTabletSmall: 'menuItemHeaderTabletSmall-QIvgZc1i',
      };
    },
    zgWb: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M6 12l3.88-4.31a1 1 0 0 1 1.35-.13l5.07 3.9a1 1 0 0 0 1.32-.08L23 6M6.5 22v-4m4 4v-8m4 8v-6m4 6v-4m4 4v-8"/></svg>';
    },
  },
]);
