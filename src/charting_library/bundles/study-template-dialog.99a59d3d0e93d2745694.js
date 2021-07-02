(window.webpackJsonp = window.webpackJsonp || []).push([
  ['study-template-dialog'],
  {
    '+EG+': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      }),
        n.d(t, 'b', function () {
          return i;
        });
      var o = n('mrSG'),
        r = n('q1tI'),
        s = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.shouldComponentUpdate = function () {
              return !1;
            }),
            (t.prototype.render = function () {
              return r.createElement('div', {
                style: { position: 'fixed', zIndex: 150, left: 0, top: 0 },
                ref: this.props.reference,
              });
            }),
            t
          );
        })(r.Component),
        i = r.createContext(null);
    },
    '/KDZ': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      });
      var o = n('mrSG'),
        r = n('q1tI'),
        s = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._handleChange = function () {
                n.forceUpdate();
              }),
              (n.state = { query: window.matchMedia(n.props.rule) }),
              n
            );
          }
          return (
            Object(o.c)(t, e),
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
        })(r.PureComponent);
    },
    '0W35': function (e, t, n) {
      'use strict';
      var o = n('q1tI'),
        r = n('17x9');
      class s extends o.PureComponent {
        constructor() {
          super(...arguments),
            (this._subscriptions = new Set()),
            (this._getName = () => this.props.name),
            (this._getValues = () => this.props.values),
            (this._getOnChange = () => this.props.onChange),
            (this._subscribe = (e) => {
              this._subscriptions.add(e);
            }),
            (this._unsubscribe = (e) => {
              this._subscriptions.delete(e);
            });
        }
        getChildContext() {
          return {
            switchGroupContext: {
              getName: this._getName,
              getValues: this._getValues,
              getOnChange: this._getOnChange,
              subscribe: this._subscribe,
              unsubscribe: this._unsubscribe,
            },
          };
        }
        render() {
          return this.props.children;
        }
        componentDidUpdate(e) {
          this._notify(this._getUpdates(this.props.values, e.values));
        }
        _notify(e) {
          this._subscriptions.forEach((t) => t(e));
        }
        _getUpdates(e, t) {
          return [...t, ...e].filter((n) =>
            t.includes(n) ? !e.includes(n) : e.includes(n),
          );
        }
      }
      function i(e) {
        var t;
        return (
          ((t = class extends o.PureComponent {
            constructor() {
              super(...arguments),
                (this._onChange = (e) => {
                  this.context.switchGroupContext.getOnChange()(e);
                }),
                (this._onUpdate = (e) => {
                  e.includes(this.props.value) && this.forceUpdate();
                });
            }
            componentDidMount() {
              this.context.switchGroupContext.subscribe(this._onUpdate);
            }
            render() {
              return o.createElement(
                e,
                Object.assign({}, this.props, {
                  name: this._getName(),
                  onChange: this._onChange,
                  checked: this._isChecked(),
                }),
              );
            }
            componentWillUnmount() {
              this.context.switchGroupContext.unsubscribe(this._onUpdate);
            }
            _getName() {
              return this.context.switchGroupContext.getName();
            }
            _isChecked() {
              return this.context.switchGroupContext
                .getValues()
                .includes(this.props.value);
            }
          }).contextTypes = { switchGroupContext: r.any.isRequired }),
          t
        );
      }
      (s.childContextTypes = {
        switchGroupContext: r.any.isRequired,
      }),
        n.d(t, 'a', function () {
          return s;
        }),
        n.d(t, 'b', function () {
          return i;
        });
    },
    '6KyJ': function (e, t, n) {
      'use strict';
      var o,
        r = n('q1tI'),
        s = n('TSYQ'),
        i = n('K9GE'),
        a = n('YZ9j');
      n('O7m7');
      !(function (e) {
        (e[(e.Initial = 0)] = 'Initial'),
          (e[(e.Appear = 1)] = 'Appear'),
          (e[(e.Active = 2)] = 'Active');
      })(o || (o = {}));
      class u extends r.PureComponent {
        constructor(e) {
          super(e),
            (this._stateChangeTimeout = null),
            (this.state = { state: o.Initial });
        }
        render() {
          const { className: e, color: t = 'black' } = this.props,
            n = s(a.item, { [a[t]]: Boolean(t) });
          return r.createElement(
            'span',
            { className: s(a.loader, e, this._getStateClass()) },
            r.createElement('span', { className: n }),
            r.createElement('span', { className: n }),
            r.createElement('span', { className: n }),
          );
        }
        componentDidMount() {
          this.setState({ state: o.Appear }),
            (this._stateChangeTimeout = setTimeout(() => {
              this.setState({ state: o.Active });
            }, 2 * i.c));
        }
        componentWillUnmount() {
          this._stateChangeTimeout &&
            (clearTimeout(this._stateChangeTimeout),
            (this._stateChangeTimeout = null));
        }
        _getStateClass() {
          switch (this.state.state) {
            case o.Initial:
              return a['loader-initial'];
            case o.Appear:
              return a['loader-appear'];
            default:
              return '';
          }
        }
      }
      n.d(t, 'a', function () {
        return u;
      });
    },
    '8RO/': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      }),
        n.d(t, 'b', function () {
          return s;
        });
      var o = n('3ClC');
      function r(e, t) {
        return {
          indicators: e
            .orderedDataSources(!0)
            .filter(function (e) {
              return Object(o.isStudy)(e) && !Object(o.isESDStudy)(e);
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
      function s(e) {
        var t = new Map();
        return (
          e.forEach(function (e) {
            var n = t.get(e.id) || [e.description, 0],
              o = n[0],
              r = n[1];
            t.set(e.id, [o, r + 1]);
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
    '8Rai': function (e, t, n) {
      'use strict';
      var o = n('q1tI'),
        r = function (e, t) {
          var n = void 0 === t ? {} : t,
            o = n.bubbles,
            r = void 0 !== o && o,
            s = n.cancelable,
            i = void 0 !== s && s,
            a = n.detail,
            u = void 0 === a ? null : a;
          try {
            return new window.CustomEvent(e, {
              bubbles: r,
              cancelable: i,
              detail: u,
            });
          } catch (l) {
            var c = document.createEvent('CustomEvent');
            return c.initCustomEvent(e, r, i, u), c;
          }
        },
        s = n('R5JZ');
      function i(e) {
        var t = e.click,
          n = e.mouseDown,
          i = e.touchEnd,
          a = e.touchStart,
          u = e.handler,
          c = e.reference,
          l = e.ownerDocument,
          p = void 0 === l ? document : l,
          h = Object(o.useRef)(null),
          d = Object(o.useRef)(new r('timestamp').timeStamp);
        return (
          Object(o.useLayoutEffect)(
            function () {
              var e = { click: t, mouseDown: n, touchEnd: i, touchStart: a },
                o = c ? c.current : h.current;
              return Object(s.a)(d.current, o, u, p, e);
            },
            [t, n, i, a, u],
          ),
          c || h
        );
      }
      n.d(t, 'a', function () {
        return i;
      });
    },
    ASyk: function (e, t, n) {
      e.exports = {
        'tablet-normal-breakpoint': 'screen and (max-width: 768px)',
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        'tablet-small-breakpoint': 'screen and (max-width: 419px)',
      };
    },
    AiMB: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return c;
      }),
        n.d(t, 'b', function () {
          return l;
        });
      var o = n('mrSG'),
        r = n('q1tI'),
        s = n('i8i4'),
        i = n('e3/o'),
        a = n('jAh7'),
        u = n('+EG+'),
        c = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t._uuid = Object(i.guid)()), t;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentWillUnmount = function () {
              this._manager().removeWindow(this._uuid);
            }),
            (t.prototype.render = function () {
              var e = this._manager().ensureWindow(
                this._uuid,
                this.props.layerOptions,
              );
              return (
                (e.style.top = this.props.top || ''),
                (e.style.bottom = this.props.bottom || ''),
                (e.style.left = this.props.left || ''),
                (e.style.right = this.props.right || ''),
                (e.style.pointerEvents = this.props.pointerEvents || ''),
                s.createPortal(
                  r.createElement(
                    l.Provider,
                    { value: this },
                    this.props.children,
                  ),
                  e,
                )
              );
            }),
            (t.prototype.moveToTop = function () {
              this._manager().moveToTop(this._uuid);
            }),
            (t.prototype._manager = function () {
              return null === this.context
                ? Object(a.getRootOverlapManager)()
                : this.context;
            }),
            (t.contextType = u.b),
            t
          );
        })(r.PureComponent),
        l = r.createContext(null);
    },
    E9Pn: function (e, t, n) {},
    F0Qt: function (e) {
      e.exports = JSON.parse(
        '{"wrapper":"wrapper-21v50zE8","input":"input-24iGIobO","box":"box-3574HVnv","icon":"icon-2jsUbtec","noOutline":"noOutline-3VoWuntz","check":"check-382c8Fu1","dot":"dot-3gRd-7Qt"}',
      );
    },
    FaeL: function (e, t, n) {
      e.exports = {
        autocomplete: 'autocomplete-S6SpJGmW',
        caret: 'caret-3fqF_ykE',
        icon: 'icon-1POgzoN_',
        suggestions: 'suggestions-NOVMFmSY',
        suggestion: 'suggestion-3xakscNf',
        noResults: 'noResults-1pgHgvGL',
        selected: 'selected-3wOAQHl8',
        opened: 'opened-2C-bn3cP',
      };
    },
    IDfV: function (e, t, n) {
      'use strict';
      n.r(t);
      var o,
        r = n('mrSG'),
        s = n('Eyy1'),
        i = n('YFKU'),
        a = n('q1tI'),
        u = n.n(a),
        c = n('i8i4'),
        l = (n('HbRj'), n('TSYQ')),
        p = n('fV0y'),
        h = n('ML8+'),
        d = n('v4Hi'),
        m = n('3G1X'),
        f = n('RgaO');
      !(function (e) {
        (e[(e.Enter = 13)] = 'Enter'),
          (e[(e.Space = 32)] = 'Space'),
          (e[(e.Backspace = 8)] = 'Backspace'),
          (e[(e.DownArrow = 40)] = 'DownArrow'),
          (e[(e.UpArrow = 38)] = 'UpArrow'),
          (e[(e.RightArrow = 39)] = 'RightArrow'),
          (e[(e.LeftArrow = 37)] = 'LeftArrow'),
          (e[(e.Escape = 27)] = 'Escape'),
          (e[(e.Tab = 9)] = 'Tab');
      })(o || (o = {}));
      var v = n('FaeL');
      function g(e, t) {
        return '' === e || -1 !== t.toLowerCase().indexOf(e.toLowerCase());
      }
      var b = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            if (
              ((n._setInputRef = function (e) {
                e &&
                  ((n._inputElement = e),
                  n.props.setupHTMLInput && n.props.setupHTMLInput(e),
                  n._inputElement.addEventListener(
                    'keyup',
                    n._handleKeyUpEnter,
                  ));
              }),
              (n._handleCaretClick = function () {
                n.state.isOpened
                  ? n.props.preventOnFocusOpen && n._focus()
                  : n.props.preventOnFocusOpen
                  ? n._open()
                  : n._focus();
              }),
              (n._handleOutsideClick = function () {
                var e = n.props,
                  t = e.allowUserDefinedValues,
                  o = e.value,
                  r = e.onChange,
                  s = n.state.queryValue;
                t ? r && s !== o && r(s) : n.setState(n._valueToQuery(o)),
                  n._close();
              }),
              (n._handleFocus = function (e) {
                n.props.preventOnFocusOpen || n._open(),
                  n.props.onFocus && n.props.onFocus(e);
              }),
              (n._handleChange = function (e) {
                var t = n.props,
                  o = t.preventSearchOnEmptyQuery,
                  r = t.allowUserDefinedValues,
                  s = t.onChange,
                  i = t.onSuggestionsOpen,
                  a = t.onSuggestionsClose,
                  u = e.currentTarget.value;
                if (o && '' === u)
                  n.setState({ queryValue: u, isOpened: !1, active: void 0 }),
                    a && a();
                else {
                  var c = n._suggestions(u),
                    l = Object.keys(c).length > 0;
                  n.setState({
                    queryValue: u,
                    isOpened: l,
                    active: r ? void 0 : n._getActiveKeyByValue(u),
                  }),
                    l && i && i();
                }
                r && s && s(u);
              }),
              (n._handleItemClick = function (e) {
                var t = e.currentTarget.id;
                n.setState({ queryValue: n._source()[t] }),
                  n.props.onChange && n.props.onChange(t),
                  n._close();
              }),
              (n._handleKeyDown = function (e) {
                if (
                  -1 !==
                  [o.DownArrow, o.UpArrow, o.Enter, o.Escape].indexOf(e.which)
                ) {
                  var t = n.props,
                    r = t.allowUserDefinedValues,
                    s = t.value,
                    i = t.onChange,
                    a = t.onSuggestionsOpen,
                    u = n.state,
                    c = u.active,
                    l = u.isOpened,
                    p = u.queryValue;
                  l && (e.preventDefault(), e.stopPropagation());
                  var h = n._suggestions(p);
                  switch (e.which) {
                    case o.DownArrow:
                    case o.UpArrow:
                      var d = Object.keys(h);
                      if (!l && d.length && e.which === o.DownArrow) {
                        n.setState({ isOpened: !0, active: d[0] }), a && a();
                        break;
                      }
                      var m = void 0;
                      if (void 0 === c) {
                        if (e.which === o.UpArrow) {
                          n._close();
                          break;
                        }
                        m = 0;
                      } else
                        m = d.indexOf(c) + (e.which === o.UpArrow ? -1 : 1);
                      m < 0 && (m = 0), m > d.length - 1 && (m = d.length - 1);
                      var f = d[m];
                      n.setState({ active: f });
                      var v = document.getElementById(f);
                      v && n._scrollIfNotVisible(v, n._suggestionsElement);
                      break;
                    case o.Escape:
                      n._close(), l || n._blur();
                      break;
                    case o.Enter:
                      var g = c;
                      r && (l && g ? n.setState(n._valueToQuery(g)) : (g = p)),
                        void 0 !== g &&
                          (n._close(),
                          l || n._blur(),
                          g !== s ? i && i(g) : n.setState(n._valueToQuery(g)));
                  }
                }
              }),
              (n._setSuggestionsRef = function (e) {
                e && (n._suggestionsElement = e);
              }),
              (n._scrollIfNotVisible = function (e, t) {
                var n = t.scrollTop,
                  o = t.scrollTop + t.clientHeight,
                  r = e.offsetTop,
                  s = r + e.clientHeight;
                r <= n ? e.scrollIntoView(!0) : s >= o && e.scrollIntoView(!1);
              }),
              !(function (e) {
                return Array.isArray(e.source) || !e.allowUserDefinedValues;
              })(t))
            )
              throw new Error(
                'allowUserDefinedProps === true cay only be used if source is array',
              );
            return (
              (n.state = Object(r.a)(
                { isOpened: !1, active: t.value },
                n._valueToQuery(t.value),
              )),
              n
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.componentWillReceiveProps = function (e) {
              var t = e.allowUserDefinedValues,
                n = e.value;
              if (n !== this.props.value || !this.state.isOpened) {
                var o = t
                  ? n
                  : '' === n
                  ? ''
                  : this._source()[n] || this.state.queryValue;
                this.setState({ queryValue: o, active: n });
              }
            }),
            (t.prototype.componentWillUnmount = function () {
              this._inputElement &&
                this._inputElement.removeEventListener(
                  'keyup',
                  this._handleKeyUpEnter,
                );
            }),
            (t.prototype.render = function () {
              var e = this;
              return a.createElement(
                f.a,
                { handler: this._handleOutsideClick, click: !0 },
                function (t) {
                  var n;
                  return a.createElement(
                    'div',
                    {
                      className: l(
                        v.autocomplete,
                        ((n = {}), (n[v.opened] = e.state.isOpened), n),
                        'js-dialog-skip-escape',
                      ),
                      ref: t,
                    },
                    a.createElement(m.b, {
                      name: e.props.name,
                      endSlot: Object.keys(e._suggestions(e.state.queryValue))
                        .length
                        ? a.createElement(
                            d.b,
                            null,
                            a.createElement(
                              'span',
                              {
                                className: v.caret,
                                onClick: e._handleCaretClick,
                              },
                              a.createElement(h.a, {
                                className: v.icon,
                                dropped: e.state.isOpened,
                              }),
                            ),
                          )
                        : void 0,
                      maxLength: e.props.maxLength,
                      reference: e._setInputRef,
                      stretch: !0,
                      placeholder: e.props.placeholder,
                      value: e.state.queryValue,
                      intent: e.props.error ? 'danger' : void 0,
                      onChange: e._handleChange,
                      onFocus: e._handleFocus,
                      onBlur: e.props.onBlur,
                      onMouseOver: e.props.onMouseOver,
                      onMouseOut: e.props.onMouseOut,
                      onKeyDown: e._handleKeyDown,
                      autoComplete: 'off',
                    }),
                    e._renderSuggestions(),
                  );
                },
              );
            }),
            (t.prototype._focus = function () {
              this._inputElement.focus();
            }),
            (t.prototype._blur = function () {
              this._inputElement.blur();
            }),
            (t.prototype._open = function () {
              var e = this.props.onSuggestionsOpen;
              this._focus(), this.setState({ isOpened: !0 }), e && e();
            }),
            (t.prototype._close = function () {
              var e = this.props.onSuggestionsClose;
              this.setState({ isOpened: !1, active: void 0 }), e && e();
            }),
            (t.prototype._source = function () {
              var e = {};
              return (
                Array.isArray(this.props.source)
                  ? this.props.source.forEach(function (t) {
                      e[t] = t;
                    })
                  : (e = this.props.source),
                e
              );
            }),
            (t.prototype._suggestions = function (e) {
              var t = this.props.filter,
                n = void 0 === t ? g : t,
                o = this._source(),
                r = {};
              return (
                Object.keys(o)
                  .filter(function (t) {
                    return n(e, o[t]);
                  })
                  .forEach(function (e) {
                    return (r[e] = o[e]);
                  }),
                r
              );
            }),
            (t.prototype._renderSuggestions = function () {
              var e = this,
                t = this._suggestions(this.state.queryValue),
                n = Object.keys(t).map(function (n) {
                  var o,
                    r = l(
                      v.suggestion,
                      (((o = {})[v.selected] = e.state.active === n), o),
                    );
                  return a.createElement(
                    'li',
                    {
                      id: n,
                      key: n,
                      className: r,
                      onClick: e._handleItemClick,
                    },
                    t[n],
                  );
                }),
                o = a.createElement(
                  'li',
                  { className: v.noResults },
                  window.t('No results found'),
                );
              return !n.length && this.props.noEmptyText
                ? null
                : a.createElement(
                    'ul',
                    { className: v.suggestions, ref: this._setSuggestionsRef },
                    n.length ? n : o,
                  );
            }),
            (t.prototype._handleKeyUpEnter = function (e) {
              e.which === o.Enter && e.stopImmediatePropagation();
            }),
            (t.prototype._getActiveKeyByValue = function (e) {
              for (
                var t = this.props.filter,
                  n = void 0 === t ? g : t,
                  o = this._suggestions(e),
                  r = Object.keys(o),
                  s = 0,
                  i = r;
                s < i.length;
                s++
              ) {
                var a = i[s];
                if (n(e, o[a])) return a;
              }
              return r[0];
            }),
            (t.prototype._valueToQuery = function (e) {
              return { queryValue: this._source()[e] || '' };
            }),
            t
          );
        })(a.PureComponent),
        _ = n('Iivm'),
        y = n('ycFu'),
        w = n('+EG+'),
        S = n('6KyJ'),
        O = n('tz2P');
      function C(e) {
        var t = e.isLoading;
        return u.a.createElement(
          'span',
          { className: t ? O.loading : void 0 },
          window.t('Save'),
          t && u.a.createElement(S.a, { color: 'white' }),
        );
      }
      var E = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._dialogRef = a.createRef()),
              (n._manager = null),
              (n._handleSubmit = function () {
                n.setState({ isLoading: !0 }), n.props.onSubmit(n);
              }),
              (n.state = { isLoading: !1 }),
              n
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.isOpened,
                n = e.saveDisabled,
                o = e.title,
                r = e.onClose;
              return a.createElement(y.a, {
                ref: this._dialogRef,
                onClose: r,
                onSubmit: this._handleSubmit,
                onCancel: r,
                onClickOutside: r,
                isOpened: t,
                title: o,
                dataName: 'save-rename-dialog',
                render: this._renderDialogBody(),
                defaultActionOnClose: 'none',
                submitButtonText: a.createElement(C, {
                  isLoading: this.state.isLoading,
                }),
                submitButtonDisabled: n,
              });
            }),
            (t.prototype.focus = function () {
              Object(s.ensureNotNull)(this._dialogRef.current).focus();
            }),
            (t.prototype.manager = function () {
              return this._manager;
            }),
            (t.prototype.submit = function () {
              this.props.onSubmit(this);
            }),
            (t.prototype.close = function () {
              this.props.onClose();
            }),
            (t.prototype.dropLoading = function () {
              this.setState({ isLoading: !1 });
            }),
            (t.prototype._renderDialogBody = function () {
              var e = this;
              return function () {
                return a.createElement(w.b.Consumer, null, function (t) {
                  return (e._manager = t), e.props.children;
                });
              };
            }),
            t
          );
        })(a.PureComponent),
        x = n('xJ0h'),
        T = n('j+m7'),
        k = window.t('Template name'),
        N = window.t('Saved indicators'),
        j = window.t('Remember Symbol'),
        I = window.t('Remember Interval');
      function L(e) {
        var t = e.title,
          n = e.saveSymbolHintText,
          o = e.saveIntervalHintText,
          r = e.indicatorsText,
          i = e.source,
          c = e.onClose,
          h = e.onSubmit,
          d = Object(a.useState)(''),
          m = d[0],
          f = d[1],
          v = Object(a.useState)(!1),
          g = v[0],
          y = v[1],
          w = Object(a.useState)(!1),
          S = w[0],
          O = w[1],
          C = Object(a.useState)(!1),
          L = C[0],
          D = C[1],
          A = Object(a.useRef)(null),
          V = Object(a.useRef)(null);
        return (
          Object(a.useEffect)(function () {
            Object(s.ensureNotNull)(V.current).focus();
          }, []),
          u.a.createElement(
            E,
            {
              ref: A,
              isOpened: !0,
              saveDisabled: !m,
              title: t,
              onClose: c,
              onSubmit: function (e) {
                h({ title: m, saveSymbol: g, saveInterval: S }, e);
              },
            },
            u.a.createElement(
              'div',
              { className: l(T.container, L && T.withSuggestions) },
              u.a.createElement('div', { className: T.title }, k),
              u.a.createElement(
                'div',
                { className: T.autocomplete },
                u.a.createElement(b, {
                  maxLength: 64,
                  value: m,
                  onChange: f,
                  onBlur: function () {
                    Object(s.ensureNotNull)(A.current).focus();
                  },
                  source: i,
                  allowUserDefinedValues: !0,
                  preventOnFocusOpen: !0,
                  noEmptyText: !0,
                  preventSearchOnEmptyQuery: !0,
                  filter: function (e, t) {
                    return Boolean(
                      '' === e ||
                        (e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())),
                    );
                  },
                  setupHTMLInput: function (e) {
                    V.current = e;
                  },
                  onSuggestionsOpen: function () {
                    D(!0);
                  },
                  onSuggestionsClose: function () {
                    D(!1);
                  },
                }),
              ),
              u.a.createElement(
                'div',
                { className: T.saveSymbol },
                u.a.createElement(p.a, {
                  label: u.a.createElement(
                    'span',
                    { className: T.hintLabel },
                    j,
                    u.a.createElement(_.a, {
                      icon: x,
                      className: l(T.hintMark, 'apply-common-tooltip'),
                      title: n,
                    }),
                  ),
                  onChange: function () {
                    y(!g), Object(s.ensureNotNull)(A.current).focus();
                  },
                  checked: g,
                }),
              ),
              u.a.createElement(
                'div',
                { className: T.saveInterval },
                u.a.createElement(p.a, {
                  label: u.a.createElement(
                    'span',
                    { className: T.hintLabel },
                    I,
                    u.a.createElement(_.a, {
                      icon: x,
                      className: l(T.hintMark, 'apply-common-tooltip'),
                      title: o,
                    }),
                  ),
                  onChange: function () {
                    O(!S), Object(s.ensureNotNull)(A.current).focus();
                  },
                  checked: S,
                }),
              ),
              u.a.createElement('div', { className: T.title }, N),
              u.a.createElement(
                'div',
                { className: l(T.indicators, L && T.withSuggestions) },
                r,
              ),
            ),
          )
        );
      }
      var D = n('FQhm'),
        A = n('ZjKI'),
        V = (function () {
          function e(e) {
            var t = this;
            (this._container = document.createElement('div')),
              (this.close = function () {
                t.unmount(), t._onClose && t._onClose();
              }),
              (this.unmount = function () {
                D.unsubscribe(
                  A.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                  t.unmount,
                  null,
                ),
                  c.unmountComponentAtNode(t._container);
              }),
              (this._title = e.title),
              (this._saveSymbolHintText = e.saveSymbolHintText),
              (this._saveIntervalHintText = e.saveIntervalHintText),
              (this._indicatorsText = e.indicatorsText),
              (this._source = e.source),
              (this._onSubmit = e.onSubmit),
              (this._onClose = e.onClose),
              D.subscribe(
                A.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this.unmount,
                null,
              );
          }
          return (
            (e.prototype.mount = function () {
              c.render(
                u.a.createElement(L, {
                  title: this._title,
                  saveSymbolHintText: this._saveSymbolHintText,
                  saveIntervalHintText: this._saveIntervalHintText,
                  indicatorsText: this._indicatorsText,
                  source: this._source,
                  onClose: this.close,
                  onSubmit: this._onSubmit,
                }),
                this._container,
              );
            }),
            (e.prototype.destroy = function () {
              this.unmount();
            }),
            (e.prototype.show = function () {
              this.mount();
            }),
            e
          );
        })(),
        q = n('zUrt'),
        R = n('fZEr'),
        U = n('xDuj'),
        M = n('8RO/');
      n.d(t, 'StudyTemplateSaver', function () {
        return Q;
      });
      var P = Object(i.t)('Save Indicator Template'),
        B = Object(i.t)(
          'Selecting this option will set the {symbol} symbol on the chart when this template is applied',
        ),
        F = Object(i.t)(
          'Selecting this option will set the {interval} interval on the chart when this template is applied',
        ),
        G = Object(i.t)(
          "Study Template '{templateName}' already exists. Do you really want to replace it?",
        );
      function H(e, t, n) {
        q.backend.saveStudyTemplate(e).then(function () {
          q.backend.invalidateStudyTemplatesList(),
            q.backend.getStudyTemplatesList().then(t);
        });
      }
      var Q = (function () {
        function e(e) {
          var t = this;
          (this._dialog = null),
            (this._onSave = function (e) {
              t._options.onSave(e), t._close();
            }),
            (this._showSaveDialog = function () {
              return Object(r.b)(t, void 0, void 0, function () {
                var e, t, n;
                return Object(r.d)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (
                        (e = this._controller.model().mainSeries().symbol()),
                        (t = this._controller.model().mainSeries().interval()),
                        [4, this._getActualTemplateList()]
                      );
                    case 1:
                      return (
                        (n = o.sent()),
                        [4, this._showTemplateSaveRenameDialog(n, e, t)]
                      );
                    case 2:
                      return o.sent(), [2];
                  }
                });
              });
            }),
            (this._close = function () {
              t._dialog && (t._dialog.destroy(), (t._dialog = null));
            }),
            (this._options = e),
            (this._controller = e.controller);
        }
        return (
          (e.prototype.show = function () {
            window.runOrSignIn(this._showSaveDialog, {
              source: 'Study templates save as',
              sourceMeta: 'Chart',
            });
          }),
          (e.prototype._prepareData = function (e, t, n) {
            var o = this._controller.model().studyTemplate(t, n);
            return {
              name: e,
              content: JSON.stringify(o),
              meta_info: Object(M.a)(this._controller, o.interval),
            };
          }),
          (e.prototype._doSave = function (e, t, n) {
            var o = this,
              r = t.title,
              s = t.saveSymbol,
              i = t.saveInterval;
            if (r) {
              0;
              var a = n.manager() || void 0,
                u = this._prepareData(r, s, i);
              if (
                e.find(function (e) {
                  return e.name === r;
                })
              ) {
                (function (e, t) {
                  return new Promise(function (n) {
                    return Object(R.a)(
                      {
                        text: G.format({ templateName: e }),
                        onConfirm: function (e) {
                          var t = e.dialogClose;
                          n(!0), t();
                        },
                        onClose: function () {
                          return n(!1);
                        },
                      },
                      t,
                    );
                  });
                })(r, a).then(function (e) {
                  e ? H(u, o._onSave) : (n.focus(), n.dropLoading());
                });
              } else {
                H(u, this._onSave);
              }
            }
          }),
          (e.prototype._getActualTemplateList = function () {
            return (
              q.backend.invalidateStudyTemplatesList(),
              q.backend.getStudyTemplatesList()
            );
          }),
          (e.prototype._showTemplateSaveRenameDialog = function (e, t, n) {
            var o = this,
              r = Object(M.a)(this._controller);
            (this._dialog = new V({
              source: e.map(function (e) {
                return e.name;
              }),
              title: P,
              saveSymbolHintText: B.format({ symbol: t }),
              saveIntervalHintText: F.format({
                interval: Object(U.translatedIntervalString)(n),
              }),
              indicatorsText: Object(M.b)(r.indicators),
              onSubmit: function (t, n) {
                return o._doSave(e, t, n);
              },
              onClose: this._close,
            })).show();
          }),
          e
        );
      })();
    },
    Iivm: function (e, t, n) {
      'use strict';
      var o = n('mrSG'),
        r = n('q1tI');
      const s = r.forwardRef((e, t) => {
        const { icon: n = '' } = e,
          s = Object(o.e)(e, ['icon']);
        return r.createElement(
          'span',
          Object.assign({}, s, {
            ref: t,
            dangerouslySetInnerHTML: { __html: n },
          }),
        );
      });
      n.d(t, 'a', function () {
        return s;
      });
    },
    'ML8+': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return u;
      });
      var o = n('q1tI'),
        r = n('TSYQ'),
        s = n('Iivm'),
        i = n('cvzQ'),
        a = n('R4+T');
      function u(e) {
        var t,
          n = e.dropped,
          u = e.className;
        return o.createElement(s.a, {
          className: r(u, i.icon, ((t = {}), (t[i.dropped] = n), t)),
          icon: a,
        });
      }
    },
    O7m7: function (e, t, n) {},
    'P4l+': function (e, t, n) {},
    QpNh: function (e, t, n) {
      'use strict';
      function o(e) {
        for (
          var t = {}, n = 0, o = Object.entries(e).filter(r);
          n < o.length;
          n++
        ) {
          var s = o[n],
            i = s[0],
            a = s[1];
          t[i] = a;
        }
        return t;
      }
      function r(e) {
        var t = e[0],
          n = e[1];
        return 0 === t.indexOf('data-') && 'string' == typeof n;
      }
      n.d(t, 'a', function () {
        return o;
      });
    },
    'R4+T': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>';
    },
    R5JZ: function (e, t, n) {
      'use strict';
      function o(e, t, n, o, r) {
        function s(r) {
          if (!(e > r.timeStamp)) {
            var s = r.target;
            void 0 !== n &&
              null !== t &&
              null !== s &&
              s.ownerDocument === o &&
              (t.contains(s) || n(r));
          }
        }
        return (
          r.click && o.addEventListener('click', s, !1),
          r.mouseDown && o.addEventListener('mousedown', s, !1),
          r.touchEnd && o.addEventListener('touchend', s, !1),
          r.touchStart && o.addEventListener('touchstart', s, !1),
          function () {
            o.removeEventListener('click', s, !1),
              o.removeEventListener('mousedown', s, !1),
              o.removeEventListener('touchend', s, !1),
              o.removeEventListener('touchstart', s, !1);
          }
        );
      }
      n.d(t, 'a', function () {
        return o;
      });
    },
    YZ9j: function (e) {
      e.exports = JSON.parse(
        '{"loader":"loader-8x1ZxRwP","item":"item-2-89r_cd","tv-button-loader":"tv-button-loader-23vqS1uY","black":"black-20Ytsf0V","white":"white-1ucCcc2I","gray":"gray-XDhHSS-T","loader-initial":"loader-initial-1deQDeio","loader-appear":"loader-appear-2krFtMrd"}',
      );
    },
    aJjg: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9" fill="none"><path stroke-width="2" d="M0.999878 4L3.99988 7L9.99988 1"/></svg>';
    },
    cvzQ: function (e, t, n) {
      e.exports = { icon: 'icon-3yfDkFjY', dropped: 'dropped-50rfOQ8V' };
    },
    fV0y: function (e, t, n) {
      'use strict';
      var o = n('q1tI'),
        r = n('TSYQ'),
        s = n('0W35'),
        i = n('Iivm'),
        a = n('aJjg'),
        u = n('F0Qt');
      n('P4l+');
      function c(e) {
        const t = r(u.box, {
            [u.check]: !Boolean(e.indeterminate),
            [u.dot]: Boolean(e.indeterminate),
            [u.noOutline]: -1 === e.tabIndex,
          }),
          n = r(u.wrapper, e.tooltipClassName);
        return o.createElement(
          'span',
          { className: n, title: e.title },
          o.createElement('input', {
            id: e.id,
            tabIndex: e.tabIndex,
            className: u.input,
            type: 'checkbox',
            name: e.name,
            checked: e.checked,
            disabled: e.disabled,
            value: e.value,
            autoFocus: e.autoFocus,
            role: e.role,
            onChange: function () {
              e.onChange && e.onChange(e.value);
            },
            ref: e.reference,
          }),
          o.createElement(
            'span',
            { className: t },
            o.createElement(i.a, { icon: a, className: u.icon }),
          ),
        );
      }
      var l = n('qibD');
      n('E9Pn');
      class p extends o.PureComponent {
        render() {
          const e = r(this.props.className, l.checkbox, {
              [l.reverse]: Boolean(this.props.labelPositionReverse),
              [l.baseline]: Boolean(this.props.labelAlignBaseline),
            }),
            t = r(this.props.tooltipClassName, l.label, {
              [l.disabled]: this.props.disabled,
            });
          let n = null;
          return (
            this.props.label &&
              (n = o.createElement(
                'span',
                { className: t, title: this.props.title },
                this.props.label,
              )),
            o.createElement(
              'label',
              { className: e },
              o.createElement(c, Object.assign({}, this.props)),
              n,
            )
          );
        }
      }
      p.defaultProps = { value: 'on' };
      Object(s.b)(p);
      n.d(t, 'a', function () {
        return p;
      });
    },
    'j+m7': function (e, t, n) {
      e.exports = {
        container: 'container-3QIqByoJ',
        withSuggestions: 'withSuggestions-22pawmYM',
        title: 'title-2CczwBhX',
        autocomplete: 'autocomplete-2f7MJ4QF',
        saveSymbol: 'saveSymbol-31e2t0Ua',
        saveInterval: 'saveInterval-4oPxh7GH',
        indicators: 'indicators-9neV2G7Q',
        hintLabel: 'hintLabel-35eBgBBj',
        hintMark: 'hintMark-3nV4PBLt',
      };
    },
    qibD: function (e) {
      e.exports = JSON.parse(
        '{"checkbox":"checkbox-3xZUD-2M","reverse":"reverse-3xeTx96y","label":"label-cyItEVpF","baseline":"baseline-6TXKro4X"}',
      );
    },
    tz2P: function (e, t, n) {
      e.exports = { loading: 'loading-2BksC8cG' };
    },
    uhCe: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var o = n('ASyk'),
        r = {
          SmallHeight: o['small-height-breakpoint'],
          TabletSmall: o['tablet-small-breakpoint'],
          TabletNormal: o['tablet-normal-breakpoint'],
        };
    },
    xJ0h: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 8.5h1.5V14"/><circle fill="currentColor" cx="9" cy="5" r="1"/><path stroke="currentColor" d="M16.5 9a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"/></svg>';
    },
  },
]);
