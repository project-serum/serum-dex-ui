(window.webpackJsonp = window.webpackJsonp || []).push([
  ['take-chart-image-dialog-impl'],
  {
    '1O6C': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return p;
      });
      var o = n('mrSG'),
        r = n('q1tI'),
        i = n('TSYQ'),
        s = n('+EG+'),
        a = n('jAh7'),
        c = n('QpNh'),
        l = n('aYmi'),
        p = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._manager = new a.OverlapManager()),
              (t._handleSlot = function (e) {
                t._manager.setContainer(e);
              }),
              t
            );
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.rounded,
                n = void 0 === t || t,
                a = e.shadowed,
                p = void 0 === a || a,
                d = e.fullscreen,
                u = void 0 !== d && d,
                m = e.darker,
                h = void 0 !== m && m,
                v = e.className,
                w = e.backdrop,
                f = i(
                  v,
                  l.dialog,
                  n && l.rounded,
                  p && l.shadowed,
                  u && l.fullscreen,
                  h && l.darker,
                ),
                _ = Object(c.a)(this.props);
              return r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  s.b.Provider,
                  { value: this._manager },
                  w && r.createElement('div', { className: l.backdrop }),
                  r.createElement(
                    'div',
                    Object(o.__assign)({}, _, {
                      className: f,
                      style: this._createStyles(),
                      ref: this.props.reference,
                      onFocus: this.props.onFocus,
                      onMouseDown: this.props.onMouseDown,
                      onMouseUp: this.props.onMouseUp,
                      onClick: this.props.onClick,
                      onKeyDown: this.props.onKeyDown,
                      tabIndex: -1,
                    }),
                    this.props.children,
                  ),
                ),
                r.createElement(s.a, { reference: this._handleSlot }),
              );
            }),
            (t.prototype._createStyles = function () {
              var e = this.props,
                t = e.bottom,
                n = e.left,
                o = e.width;
              return {
                bottom: t,
                left: n,
                right: e.right,
                top: e.top,
                zIndex: e.zIndex,
                maxWidth: o,
                height: e.height,
              };
            }),
            t
          );
        })(r.PureComponent);
    },
    '8MIK': function (e, t, n) {
      e.exports = {
        modal: 'modal-C2LSTwhC',
        content: 'content-tr28wPlV',
        form: 'form-2GifjSKe',
        copyForm: 'copyForm-1HuPoKA0',
        copyBtn: 'copyBtn-1oB8tEqo',
        shadow: 'shadow-2JTdO0Fb',
        actions: 'actions-3fKk-h7d',
        link: 'link-1alPBTTQ',
        socials: 'socials-rht5Uvp-',
        icon: 'icon-4wFj5iyU',
        socialsText: 'socialsText-2yWFq9iu',
      };
    },
    BHQn: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="#1DA1F2" d="M10.28 22.26c7.55 0 11.68-6.26 11.68-11.67v-.53c.8-.58 1.49-1.3 2.04-2.13-.74.33-1.53.54-2.36.65.85-.5 1.5-1.32 1.8-2.28-.78.48-1.66.81-2.6 1a4.1 4.1 0 00-7 3.74c-3.4-.17-6.43-1.8-8.46-4.29a4.1 4.1 0 001.28 5.48c-.68-.02-1.3-.2-1.86-.5v.05a4.11 4.11 0 003.29 4.02 4 4 0 01-1.85.08 4.1 4.1 0 003.83 2.85A8.23 8.23 0 014 20.43a11.67 11.67 0 006.28 1.83z"/></svg>';
    },
    GyvH: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 15" width="22" height="15"><g fill="none" fill-rule="evenodd" stroke-width="2"><path stroke="#757575" d="M6.25 5.812L11 10.087l4.75-4.275M11 9.868V.315"/><path stroke="#ADAEB0" d="M21 10v4H1v-4"/></g><path d="M.008 12.47V9.994H1.96v3.003h18.095V9.988l.958.021.957.021.02 2.46.02 2.458H.008v-2.477z"/><path d="M8.642 9.27a673.518 673.518 0 0 0-2.658-2.396l-.369-.325.657-.716.658-.716 1.49 1.35c.819.741 1.525 1.348 1.57 1.348.054 0 .079-1.143.079-3.716V.382H11.946v3.717c0 2.129.029 3.716.067 3.716.037 0 .738-.607 1.558-1.349l1.491-1.35.508.543c.28.298.57.626.647.73l.14.187-2.632 2.366c-1.447 1.3-2.668 2.372-2.712 2.381-.044.01-1.111-.915-2.37-2.054z"/></svg>';
    },
    Iivm: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        n('mrSG').__exportStar(n('swCq'), t);
    },
    RgaO: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var o = n('mrSG'),
        r = n('8Rai');
      function i(e) {
        var t = e.children,
          n = Object(o.__rest)(e, ['children']);
        return t(Object(r.a)(n));
      }
    },
    UJLh: function (e, t, n) {
      e.exports = {
        wrap: 'wrap-3axdIL2R',
        container: 'container-p3zks2PX',
        backdrop: 'backdrop-1qZHPwi_',
        modal: 'modal-GUK9cvUQ',
        dialog: 'dialog-2Ei1ngXh',
      };
    },
    aYmi: function (e, t, n) {
      e.exports = {
        dialog: 'dialog-2APwxL3O',
        rounded: 'rounded-tXI9mwGE',
        shadowed: 'shadowed-2M13-xZa',
        fullscreen: 'fullscreen-2RqU2pqU',
        darker: 'darker-2nhdv2oS',
        backdrop: 'backdrop-1tKdKmN_',
      };
    },
    fMMV: function (e, t, n) {
      'use strict';
      n.r(t);
      n('YFKU');
      var o = n('Wt0y'),
        r = n('mrSG'),
        i = (n('HbRj'), n('Kxc7')),
        s = n('BHQF');
      function a(e, t, n, o) {
        return (
          void 0 === o && (o = {}),
          Object(r.__awaiter)(this, void 0, void 0, function () {
            var a, c, l, p, d, u, m;
            return Object(r.__generator)(this, function (h) {
              if (((a = new FormData()), void 0 !== o.previews))
                for (c = 0, l = o.previews; c < l.length; c++)
                  (p = l[c]), a.append('previews[]', p);
              return (
                void 0 !== o.cme && a.append('cme', String(o.cme)),
                void 0 !== o.wl && a.append('wl', String(o.wl)),
                void 0 !== o.onWidget &&
                  a.append('onWidget', String(o.onWidget)),
                o.isReport && a.append('isReport', String(o.isReport)),
                (d = window.urlParams) &&
                  d.locale &&
                  a.append('language', d.locale),
                (u = e.activeChartWidget.value()),
                void 0 !== (m = u.widgetCustomer()) && a.append('customer', m),
                a.append('timezone', u.properties().childs().timezone.value()),
                a.append('images', JSON.stringify(e.images())),
                (function (e, t, n, o) {
                  void 0 === o && (o = {});
                  Object(r.__awaiter)(this, void 0, void 0, function () {
                    var a, c, l;
                    return Object(r.__generator)(this, function (r) {
                      switch (r.label) {
                        case 0:
                          (a = i.enabled('charting_library_base')
                            ? o.snapshotUrl ||
                              'https://www.tradingview.com/snapshot/'
                            : '/snapshot/'),
                            (r.label = 1);
                        case 1:
                          return (
                            r.trys.push([1, 4, , 5]),
                            [
                              4,
                              Object(s.fetch)(a, {
                                body: e,
                                method: 'POST',
                                credentials: 'same-origin',
                              }),
                            ]
                          );
                        case 2:
                          return [4, (c = r.sent()).text()];
                        case 3:
                          return (l = r.sent()), c.ok ? t(l) : n(), [3, 5];
                        case 4:
                          return r.sent(), n(), [3, 5];
                        case 5:
                          return [2];
                      }
                    });
                  });
                })(a, t, n, o),
                [2]
              );
            });
          })
        );
      }
      var c,
        l = n('PC8g'),
        p = n('q1tI'),
        d = n('i8i4'),
        u = n('TSYQ'),
        m = n('1O6C'),
        h = n('uqKQ'),
        v = n('RgaO'),
        w = n('UJLh'),
        f = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.zIndex,
                o = t.onClickOutside,
                i = t.children,
                s = t.className;
              return p.createElement(
                'div',
                { style: { zIndex: n } },
                p.createElement('div', { className: w.backdrop }),
                p.createElement(
                  'div',
                  { className: w.wrap },
                  p.createElement(
                    'div',
                    { className: w.container },
                    p.createElement(
                      v.a,
                      { mouseDown: !0, touchStart: !0, handler: o },
                      function (t) {
                        return p.createElement(
                          'div',
                          { className: w.modal, ref: t },
                          p.createElement(
                            m.a,
                            Object(r.__assign)({}, e.props, {
                              className: u(s, w.dialog),
                            }),
                            i,
                          ),
                        );
                      },
                    ),
                  ),
                ),
              );
            }),
            (t.defaultProps = { width: 500 }),
            t
          );
        })(p.PureComponent),
        _ = Object(h.a)(f),
        g = n('AVTG'),
        b = n('Iivm'),
        y = n('L0Sj'),
        O = n('oj21'),
        E = n('jPOK');
      !(function (e) {
        function t(e, t) {
          return 'cme' === TradingView.widgetCustomer
            ? t + ' from cmegroup.com via @tradingview $' + e
            : '#' + e + ' chart ' + t + ' via https://www.tradingview.com';
        }
        function n(e, t) {
          void 0 === e && (e = 'about:blank'),
            void 0 === t && (t = 'snapshot_tweet');
          var n = Math.round(screen.width / 2 - 275),
            o = Math.round(screen.height / 2 - 210);
          return window.open(
            e,
            t,
            'scrollbars=yes,resizable=yes,toolbar=no,location=yes,\n\t\t\t\twidth=550,height=420,\n\t\t\t\tleft=' +
              n +
              ',top=' +
              o,
          );
        }
        (e.getStatus = t),
          (e.shareSnapshot = function (e) {
            var o = n();
            return {
              onFailure: function () {
                o.close();
              },
              onSuccess: function (n) {
                o.location.href = (function (e, n) {
                  return (
                    'https://twitter.com/intent/tweet?&text=' +
                    encodeURIComponent(
                      t(
                        e,
                        (function (e) {
                          return (
                            window.location.protocol +
                            '//' +
                            window.location.host +
                            '/x/' +
                            e +
                            '/'
                          );
                        })(n),
                      ),
                    )
                  );
                })(e, n);
              },
            };
          }),
          (e.shareSnapshotInstantly = function (e, o) {
            n(
              (function (e, n) {
                return (
                  'https://twitter.com/intent/tweet?&text=' +
                  encodeURIComponent(t(e, n))
                );
              })(e, o),
            );
          });
      })(c || (c = {}));
      var C = n('ycI/'),
        S = n('Ialn'),
        k = n('FQhm'),
        I = n('ZjKI'),
        x = n('8MIK'),
        U = n('BHQn'),
        j = n('GyvH'),
        N = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._input = null),
              (n._hideMessages = function () {
                n.setState({ message: '', error: '' });
              }),
              (n._setInput = function (e) {
                n._input = e;
              }),
              (n._select = function () {
                null !== n._input && n._input.select();
              }),
              (n._shareTwitter = function () {
                c.shareSnapshotInstantly(
                  n.props.symbol || '',
                  n.props.imageUrl || '',
                );
              }),
              (n._onClose = function () {
                n.props.onClose && n.props.onClose(), (n._copyBtn = null);
              }),
              (n.state = { message: t.message, error: t.error }),
              n
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              k.subscribe(
                I.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this._onClose,
                null,
              );
            }),
            (t.prototype.componentWillUnmount = function () {
              k.unsubscribe(
                I.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this._onClose,
                null,
              );
            }),
            (t.prototype.componentWillReceiveProps = function (e) {
              this.setState({ message: e.message, error: e.error });
            }),
            (t.prototype.componentDidUpdate = function (e) {
              var t = this;
              !e.imageUrl &&
                this.props.imageUrl &&
                setTimeout(function () {
                  null !== t._input && (t._input.select(), t._input.focus());
                });
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props.imageUrl,
                n = this.state,
                o = n.message,
                r = n.error,
                i = !t && !this.props.message && !this.props.error,
                s = u(x.copyBtn, !Object(S.isRtl)() && x.shadow);
              return p.createElement(
                _,
                {
                  isOpened: this.props.isOpened,
                  className: x.modal,
                  onClickOutside: this._onClose,
                  'data-dialog-type': 'take-snapshot-modal',
                },
                p.createElement(
                  g.b,
                  { onClose: this._onClose },
                  window.t('Image URL'),
                ),
                o &&
                  p.createElement(g.c, {
                    text: o,
                    isError: !1,
                    onClickOutside: this._hideMessages,
                  }),
                r &&
                  p.createElement(g.c, {
                    text: r,
                    isError: !0,
                    onClickOutside: this._hideMessages,
                  }),
                p.createElement(
                  g.a,
                  null,
                  p.createElement(C.a, { keyCode: 27, handler: this._onClose }),
                  p.createElement(
                    'div',
                    { className: x.content },
                    i && p.createElement(E.a, { size: 'mini' }),
                    p.createElement(
                      'div',
                      {
                        className: x.form,
                        style: { visibility: t ? 'visible' : 'hidden' },
                      },
                      p.createElement(
                        'div',
                        { className: x.copyForm },
                        p.createElement(y.b, {
                          reference: this._setInput,
                          readOnly: !0,
                          value: t || '',
                          onClick: this._select,
                          onFocus: this._select,
                          strictLeftDirectionInput: Object(S.isRtl)(),
                          style: Object(S.isRtl)()
                            ? { paddingLeft: 84 }
                            : void 0,
                        }),
                        p.createElement(
                          'div',
                          {
                            ref: function (t) {
                              return t && e._setupClipboard(t);
                            },
                            'data-clipboard-text': t,
                            className: s,
                          },
                          p.createElement(
                            O.a,
                            { type: 'primary', theme: 'ghost' },
                            window.t('Copy'),
                          ),
                        ),
                      ),
                      p.createElement(
                        'div',
                        { className: x.actions },
                        p.createElement(
                          'a',
                          { className: x.link, href: t, target: '_blank' },
                          p.createElement(b.Icon, { icon: j }),
                          p.createElement('span', null, window.t('Save image')),
                        ),
                        p.createElement(
                          'span',
                          { className: x.socials, onClick: this._shareTwitter },
                          p.createElement(b.Icon, {
                            className: x.icon,
                            icon: U,
                          }),
                          p.createElement(
                            'span',
                            { className: x.socialsText },
                            window.t('Tweet'),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              );
            }),
            (t.prototype._setupClipboard = function (e) {
              var t = this;
              this._copyBtn ||
                ((this._copyBtn = e),
                n
                  .e('clipboard')
                  .then(
                    function (o) {
                      var r = new (n('sxGJ'))(e);
                      r.on('success', function () {
                        TradingView.trackEvent('GUI', 'Copied Image Link'),
                          t.setState({
                            message: window.t('Copied to clipboard'),
                          });
                      }),
                        r.on('error', function () {
                          t.setState({
                            message: window.t(
                              "Sorry, the Copy Link button doesn't work in your browser. Please select the link and copy it manually.",
                            ),
                          });
                        });
                    }.bind(null, n),
                  )
                  .catch(void 0));
            }),
            (t.defaultProps = { imageUrl: '' }),
            t
          );
        })(p.Component);
      function M(e, t, n) {
        var r;
        function s(e) {
          r ||
            ((r = document.createElement('div')), document.body.appendChild(r)),
            d.render(p.createElement(N, e), r);
        }
        function c() {
          s({ isOpened: !1 });
        }
        void 0 === t && (t = {}),
          Object(l.trackEvent)('GUI', 'Get image button'),
          s({ isOpened: !1 }),
          a(
            e,
            function (r) {
              n && n(r);
              s({
                isOpened: !0,
                onClose: c,
                imageUrl: i.enabled('charting_library_base')
                  ? (t.snapshotUrl ? '' : 'https://www.tradingview.com/x/') + r
                  : Object(o.isProd)()
                  ? 'https://www.tradingview.com/x/' + r + '/'
                  : window.location.protocol +
                    '//' +
                    window.location.host +
                    '/x/' +
                    r +
                    '/',
                symbol: e.activeChartWidget.value().symbolProperty().value(),
              });
            },
            function () {
              s({
                isOpened: !0,
                onClose: c,
                error: window.t('URL cannot be received'),
              });
            },
            {
              onWidget: e.onWidget,
              snapshotUrl: t.snapshotUrl,
              onInvalidSnapshotImage: c,
            },
          ),
          s({ isOpened: !0, onClose: c });
      }
      function P(e, t, n) {
        a(
          e,
          function (e) {
            n && n(e);
          },
          function () {
            console.warn(window.t('Error while trying to create snapshot.'));
          },
          { snapshotUrl: t.snapshotUrl },
        );
      }
      n.d(t, 'getImageOfChart', function () {
        return M;
      }),
        n.d(t, 'getImageOfChartSilently', function () {
          return P;
        });
    },
    jPOK: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      });
      var o = n('q1tI'),
        r = n('TSYQ'),
        i = n('Owlf');
      n('SzKR');
      function s(e) {
        var t = r(
          'tv-spinner',
          'tv-spinner--shown',
          'tv-spinner--size_' + (e.size || i.a),
        );
        return o.createElement(
          'div',
          { className: t, style: e.style, role: 'progressbar' },
          o.createElement(
            'div',
            { className: 'tv-spinner__spinner-layer' },
            o.createElement('div', {
              className: 'tv-spinner__background tv-spinner__width_element',
            }),
            o.createElement('div', {
              className:
                'tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--left',
            }),
            o.createElement('div', {
              className:
                'tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--right',
            }),
          ),
        );
      }
    },
    swCq: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = n('mrSG'),
        r = n('q1tI');
      t.Icon = r.forwardRef(function (e, t) {
        var n = e.icon,
          i = void 0 === n ? '' : n,
          s = o.__rest(e, ['icon']);
        return r.createElement(
          'span',
          o.__assign({}, s, { ref: t, dangerouslySetInnerHTML: { __html: i } }),
        );
      });
    },
    uqKQ: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      });
      var o = n('mrSG'),
        r = n('q1tI'),
        i = n('AiMB');
      function s(e) {
        return (function (t) {
          function n() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(o.__extends)(n, t),
            (n.prototype.render = function () {
              var t = this.props,
                n = t.isOpened,
                s = t.root;
              if (!n) return null;
              var a = r.createElement(
                e,
                Object(o.__assign)({}, this.props, { zIndex: 150 }),
              );
              return 'parent' === s ? a : r.createElement(i.a, null, a);
            }),
            n
          );
        })(r.PureComponent);
      }
    },
  },
]);
