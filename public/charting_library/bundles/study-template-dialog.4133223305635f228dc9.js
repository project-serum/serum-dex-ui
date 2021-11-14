(window.webpackJsonp = window.webpackJsonp || []).push([
  ['study-template-dialog'],
  {
    '+EG+': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      }),
        n.d(t, 'b', function () {
          return s;
        });
      var o = n('mrSG'),
        r = n('q1tI'),
        i = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.__extends)(t, e),
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
        s = r.createContext(null);
    },
    '/KDZ': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var o = n('mrSG'),
        r = n('q1tI'),
        i = (function (e) {
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
            Object(o.__extends)(t, e),
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
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = n('mrSG');
      o.__exportStar(n('OGHR'), t), o.__exportStar(n('O6kz'), t);
    },
    '8NUT': function (e, t, n) {
      e.exports = {
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        footer: 'footer-1mvnCDqp',
        submitButton: 'submitButton-2lNICzl3',
        buttons: 'buttons-3yvtQ_uI',
      };
    },
    '8RO/': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      }),
        n.d(t, 'b', function () {
          return i;
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
      function i(e) {
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
            i = n.cancelable,
            s = void 0 !== i && i,
            a = n.detail,
            u = void 0 === a ? null : a;
          try {
            return new window.CustomEvent(e, {
              bubbles: r,
              cancelable: s,
              detail: u,
            });
          } catch (l) {
            var c = document.createEvent('CustomEvent');
            return c.initCustomEvent(e, r, s, u), c;
          }
        },
        i = n('R5JZ');
      function s(e) {
        var t = e.click,
          n = e.mouseDown,
          s = e.touchEnd,
          a = e.touchStart,
          u = e.handler,
          c = e.reference,
          l = e.ownerDocument,
          p = void 0 === l ? document : l,
          d = Object(o.useRef)(null),
          h = Object(o.useRef)(new r('timestamp').timeStamp);
        return (
          Object(o.useLayoutEffect)(
            function () {
              var e = { click: t, mouseDown: n, touchEnd: s, touchStart: a },
                o = c ? c.current : d.current;
              return Object(i.a)(h.current, o, u, p, e);
            },
            [t, n, s, a, u],
          ),
          c || d
        );
      }
      n.d(t, 'a', function () {
        return s;
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
        i = n('i8i4'),
        s = n('e3/o'),
        a = n('jAh7'),
        u = n('+EG+'),
        c = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t._uuid = Object(s.guid)()), t;
          }
          return (
            Object(o.__extends)(t, e),
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
                i.createPortal(
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
    Ald9: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.939 95.939" width="95.939" height="95.939"><path d="M62.82 47.97l32.53-32.534a2 2 0 0 0 0-2.828L83.332.586a2 2 0 0 0-2.827 0L47.97 33.12 15.435.587c-.75-.75-2.078-.75-2.828 0L.587 12.607a2 2 0 0 0 0 2.83L33.12 47.97.588 80.504a2 2 0 0 0 0 2.828l12.02 12.02a1.997 1.997 0 0 0 2.83 0L47.97 62.818l32.535 32.535a2 2 0 0 0 2.827 0l12.02-12.02c.78-.783.78-2.05 0-2.83L62.82 47.97z"/></svg>';
    },
    'D/i5': function (e, t, n) {
      e.exports = {
        inputWrapper: 'inputWrapper-6bNZbTW4',
        textInput: 'textInput-3WRWEmm7',
        error: 'error-v0663AtN',
        success: 'success-7iP8kTY5',
        textInputLeftDirection: 'textInputLeftDirection-mlAXPh8V',
        xsmall: 'xsmall-3Ah_Or2-',
        small: 'small-2bmxiJCE',
        large: 'large-1JDowW2I',
        iconed: 'iconed-3ZQvxTot',
        inputIcon: 'inputIcon-W_Bse-a1',
        clearable: 'clearable-2tabt_rj',
        clearIcon: 'clearIcon-389FR5J4',
      };
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
        textInput: 'textInput-1mZnCCcA',
        suggestions: 'suggestions-NOVMFmSY',
        suggestion: 'suggestion-3xakscNf',
        noResults: 'noResults-1pgHgvGL',
        selected: 'selected-3wOAQHl8',
        opened: 'opened-2C-bn3cP',
      };
    },
    GtBf: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="currentColor" d="M8 0C3.586 0 0 3.586 0 8s3.586 8 8 8 8-3.586 8-8-3.586-8-8-8zm0 1c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7zm.09 3c-1.194 0-1.988.728-2.16 1.83-.01.07.03.108.1.12l.72.13c.07.012.118-.02.13-.09.138-.7.547-1.09 1.19-1.09.654 0 1.11.416 1.11 1.07 0 .39-.14.65-.54 1.2l-.77 1.06c-.24.333-.34.57-.34 1.03v.47c0 .07.05.11.12.11h.75c.07 0 .12-.04.12-.11v-.37c0-.39.07-.55.3-.86l.76-1.05c.39-.54.59-.95.59-1.5C10.17 4.814 9.33 4 8.09 4zm-.5 6.72c-.07 0-.12.04-.12.11v.99c0 .07.05.11.12.11h.87c.068 0 .12-.04.12-.11v-.99c0-.068-.05-.11-.12-.11h-.87z"/></svg>';
    },
    IDfV: function (e, t, n) {
      'use strict';
      n.r(t);
      var o,
        r = n('mrSG'),
        i = n('Eyy1'),
        s = n('YFKU'),
        a = n('q1tI'),
        u = n.n(a),
        c = n('i8i4'),
        l = (n('HbRj'), n('TSYQ')),
        p = n('fV0y'),
        d = n('ML8+'),
        h = n('L0Sj'),
        m = n('RgaO');
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
      var f = n('FaeL'),
        v = n('D/i5');
      function b(e, t) {
        return '' === e || -1 !== t.toLowerCase().indexOf(e.toLowerCase());
      }
      var _ = (function (e) {
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
                  ? (n._close(), n.props.preventOnFocusOpen && n._focus())
                  : n.props.preventOnFocusOpen
                  ? n._open()
                  : n._focus();
              }),
              (n._handleOutsideClick = function () {
                var e = n.props,
                  t = e.allowUserDefinedValues,
                  o = e.value,
                  r = e.onChange,
                  i = n.state.queryValue;
                t ? r && i !== o && r(i) : n.setState(n._valueToQuery(o)),
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
                  i = t.onChange,
                  s = t.onSuggestionsOpen,
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
                    l && s && s();
                }
                r && i && i(u);
              }),
              (n._handleItemClick = function (e) {
                var t = e.currentTarget.id;
                n.setState({ queryValue: n._source()[t] }),
                  n._close(),
                  n._focus(),
                  n.props.onChange && n.props.onChange(t);
              }),
              (n._handleKeyDown = function (e) {
                if (
                  -1 !==
                  [o.DownArrow, o.UpArrow, o.Enter, o.Escape].indexOf(e.which)
                ) {
                  var t = n.props,
                    r = t.allowUserDefinedValues,
                    i = t.value,
                    s = t.onChange,
                    a = t.onSuggestionsOpen,
                    u = n.state,
                    c = u.active,
                    l = u.isOpened,
                    p = u.queryValue;
                  l && (e.preventDefault(), e.stopPropagation());
                  var d = n._suggestions(p);
                  switch (e.which) {
                    case o.DownArrow:
                    case o.UpArrow:
                      var h = Object.keys(d);
                      if (!l && h.length && e.which === o.DownArrow) {
                        n.setState({ isOpened: !0, active: h[0] }), a && a();
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
                        m = h.indexOf(c) + (e.which === o.UpArrow ? -1 : 1);
                      m < 0 && (m = 0), m > h.length - 1 && (m = h.length - 1);
                      var f = h[m];
                      n.setState({ active: f });
                      var v = document.getElementById(f);
                      v && n._scrollIfNotVisible(v, n._suggestionsElement);
                      break;
                    case o.Escape:
                      n._close(), l || n._blur();
                      break;
                    case o.Enter:
                      var b = c;
                      r && (l && b ? n.setState(n._valueToQuery(b)) : (b = p)),
                        void 0 !== b &&
                          (n._close(),
                          l || n._blur(),
                          b !== i ? s && s(b) : n.setState(n._valueToQuery(b)));
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
                  i = r + e.clientHeight;
                r <= n ? e.scrollIntoView(!0) : i >= o && e.scrollIntoView(!1);
              }),
              !(function (e) {
                return Array.isArray(e.source) || !e.allowUserDefinedValues;
              })(t))
            )
              throw new Error(
                'allowUserDefinedProps === true cay only be used if source is array',
              );
            return (
              (n.state = Object(r.__assign)(
                { isOpened: !1, active: t.value },
                n._valueToQuery(t.value),
              )),
              n
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.componentWillReceiveProps = function (e) {
              var t = e.allowUserDefinedValues,
                n = e.value,
                o = t
                  ? n
                  : '' === n
                  ? ''
                  : this._source()[n] || this.state.queryValue;
              this.setState({ queryValue: o, active: n });
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
                m.a,
                { handler: this._handleOutsideClick, click: !0 },
                function (t) {
                  var n;
                  return a.createElement(
                    'div',
                    {
                      className: l(
                        f.autocomplete,
                        ((n = {}), (n[f.opened] = e.state.isOpened), n),
                        'js-dialog-skip-escape',
                      ),
                      ref: t,
                    },
                    a.createElement(h.a, {
                      name: e.props.name,
                      rightComponent: Object.keys(
                        e._suggestions(e.state.queryValue),
                      ).length
                        ? a.createElement(
                            'div',
                            {
                              className: f.caret,
                              onClick: e._handleCaretClick,
                            },
                            a.createElement(d.a, {
                              className: f.icon,
                              dropped: e.state.isOpened,
                            }),
                          )
                        : void 0,
                      maxLength: e.props.maxLength,
                      theme: v,
                      reference: e._setInputRef,
                      className: f.textInput,
                      placeholder: e.props.placeholder,
                      value: e.state.queryValue,
                      error: e.props.error,
                      onChange: e._handleChange,
                      onFocus: e._handleFocus,
                      onBlur: e.props.onBlur,
                      onMouseOver: e.props.onMouseOver,
                      onMouseOut: e.props.onMouseOut,
                      onKeyDown: e._handleKeyDown,
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
                n = void 0 === t ? b : t,
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
                      f.suggestion,
                      (((o = {})[f.selected] = e.state.active === n), o),
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
                  {
                    className: f.noResults,
                  },
                  window.t('No results found'),
                );
              return !n.length && this.props.noEmptyText
                ? null
                : a.createElement(
                    'ul',
                    { className: f.suggestions, ref: this._setSuggestionsRef },
                    n.length ? n : o,
                  );
            }),
            (t.prototype._handleKeyUpEnter = function (e) {
              e.which === o.Enter && e.stopImmediatePropagation();
            }),
            (t.prototype._getActiveKeyByValue = function (e) {
              for (
                var t = this.props.filter,
                  n = void 0 === t ? b : t,
                  o = this._suggestions(e),
                  r = Object.keys(o),
                  i = 0,
                  s = r;
                i < s.length;
                i++
              ) {
                var a = s[i];
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
        g = n('Iivm'),
        y = n('ycFu'),
        w = n('+EG+'),
        C = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._dialogRef = a.createRef()),
              (t._manager = null),
              (t._handleSubmit = function () {
                t.props.onSubmit(t);
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
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
                defaultActionOnClose: y.b.None,
                submitButtonText: window.t('Save'),
                submitButtonDisabled: n,
              });
            }),
            (t.prototype.focus = function () {
              Object(i.ensureNotNull)(this._dialogRef.current).focus();
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
        S = n('GtBf'),
        O = n('j+m7'),
        x = window.t('Template name'),
        E = window.t('Saved indicators'),
        I = window.t('Remember Symbol'),
        k = window.t('Remember Interval');
      function N(e) {
        var t = e.title,
          n = e.saveSymbolHintText,
          o = e.saveIntervalHintText,
          r = e.indicatorsText,
          s = e.source,
          c = e.onClose,
          d = e.onSubmit,
          h = Object(a.useState)(''),
          m = h[0],
          f = h[1],
          v = Object(a.useState)(!1),
          b = v[0],
          y = v[1],
          w = Object(a.useState)(!1),
          N = w[0],
          j = w[1],
          T = Object(a.useState)(!1),
          D = T[0],
          L = T[1],
          A = Object(a.useRef)(null),
          B = Object(a.useRef)(null);
        return (
          Object(a.useEffect)(function () {
            Object(i.ensureNotNull)(B.current).focus();
          }, []),
          u.a.createElement(
            C,
            {
              ref: A,
              isOpened: !0,
              saveDisabled: !m,
              title: t,
              onClose: c,
              onSubmit: function (e) {
                d({ title: m, saveSymbol: b, saveInterval: N }, e);
              },
            },
            u.a.createElement(
              'div',
              { className: l(O.container, D && O.withSuggestions) },
              u.a.createElement('div', { className: O.title }, x),
              u.a.createElement(
                'div',
                { className: O.autocomplete },
                u.a.createElement(_, {
                  maxLength: 64,
                  value: m,
                  onChange: f,
                  onBlur: function () {
                    Object(i.ensureNotNull)(A.current).focus();
                  },
                  source: s,
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
                    B.current = e;
                  },
                  onSuggestionsOpen: function () {
                    L(!0);
                  },
                  onSuggestionsClose: function () {
                    L(!1);
                  },
                }),
              ),
              u.a.createElement(
                'div',
                { className: O.saveSymbol },
                u.a.createElement(p.Checkbox, {
                  label: u.a.createElement(
                    'span',
                    {
                      className: O.hintLabel,
                    },
                    I,
                    u.a.createElement(g.Icon, {
                      icon: S,
                      className: l(O.hintMark, 'apply-common-tooltip'),
                      title: n,
                    }),
                  ),
                  onChange: function () {
                    y(!b), Object(i.ensureNotNull)(A.current).focus();
                  },
                  checked: b,
                }),
              ),
              u.a.createElement(
                'div',
                { className: O.saveInterval },
                u.a.createElement(p.Checkbox, {
                  label: u.a.createElement(
                    'span',
                    { className: O.hintLabel },
                    k,
                    u.a.createElement(g.Icon, {
                      icon: S,
                      className: l(O.hintMark, 'apply-common-tooltip'),
                      title: o,
                    }),
                  ),
                  onChange: function () {
                    j(!N), Object(i.ensureNotNull)(A.current).focus();
                  },
                  checked: N,
                }),
              ),
              u.a.createElement('div', { className: O.title }, E),
              u.a.createElement(
                'div',
                { className: l(O.indicators, D && O.withSuggestions) },
                r,
              ),
            ),
          )
        );
      }
      var j = n('FQhm'),
        T = n('ZjKI'),
        D = (function () {
          function e(e) {
            var t = this;
            (this._container = document.createElement('div')),
              (this.close = function () {
                t.unmount(), t._onClose && t._onClose();
              }),
              (this.unmount = function () {
                j.unsubscribe(
                  T.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
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
              j.subscribe(
                T.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this.unmount,
                null,
              );
          }
          return (
            (e.prototype.mount = function () {
              c.render(
                u.a.createElement(N, {
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
        L = n('zUrt'),
        A = n('oNDq'),
        B = n('xDuj'),
        R = n('8RO/');
      n.d(t, 'StudyTemplateSaver', function () {
        return V;
      });
      var q = Object(s.t)('Save Indicator Template'),
        M = Object(s.t)(
          'Selecting this option will set the {symbol} symbol on the chart when this template is applied',
        ),
        G = Object(s.t)(
          'Selecting this option will set the {interval} interval on the chart when this template is applied',
        ),
        P = Object(s.t)(
          "Study Template '{templateName}' already exists. Do you really want to replace it?",
        );
      function U(e, t, n) {
        L.backend.saveStudyTemplate(e).then(function () {
          L.backend.invalidateStudyTemplatesList(),
            L.backend.getStudyTemplatesList().then(t);
        });
      }
      var V = (function () {
        function e(e) {
          var t = this;
          (this._dialog = null),
            (this._onSave = function (e) {
              t._options.onSave(e), t._close();
            }),
            (this._showSaveDialog = function () {
              return Object(r.__awaiter)(t, void 0, void 0, function () {
                var e, t, n;
                return Object(r.__generator)(this, function (o) {
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
              meta_info: Object(R.a)(this._controller, o.interval),
            };
          }),
          (e.prototype._doSave = function (e, t, n) {
            var o = this,
              r = t.title,
              i = t.saveSymbol,
              s = t.saveInterval;
            if (r) {
              0;
              var a = n.manager() || void 0,
                u = this._prepareData(r, i, s);
              if (
                e.find(function (e) {
                  return e.name === r;
                })
              ) {
                (function (e, t) {
                  return new Promise(function (n) {
                    Object(A.createConfirmDialog)({
                      type: 'modal',
                      content: document.createTextNode(
                        P.format({ templateName: e }),
                      ),
                      manager: t,
                    }).then(function (e) {
                      var t = !1;
                      e.on('action:yes', function (e) {
                        (t = !0), n(!0), e.close();
                      }),
                        e.on('afterClose', function () {
                          n(t);
                        }),
                        e.open();
                    });
                  });
                })(r, a).then(function (e) {
                  e ? U(u, o._onSave) : n.focus();
                });
              } else {
                U(u, this._onSave);
              }
            }
          }),
          (e.prototype._getActualTemplateList = function () {
            return (
              L.backend.invalidateStudyTemplatesList(),
              L.backend.getStudyTemplatesList()
            );
          }),
          (e.prototype._showTemplateSaveRenameDialog = function (e, t, n) {
            var o = this,
              r = Object(R.a)(this._controller);
            (this._dialog = new D({
              source: e.map(function (e) {
                return e.name;
              }),
              title: q,
              saveSymbolHintText: M.format({ symbol: t }),
              saveIntervalHintText: G.format({
                interval: Object(B.translatedIntervalString)(n),
              }),
              indicatorsText: Object(R.b)(r.indicators),
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
      Object.defineProperty(t, '__esModule', { value: !0 }),
        n('mrSG').__exportStar(n('swCq'), t);
    },
    L0Sj: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return c;
      }),
        n.d(t, 'b', function () {
          return l;
        });
      var o = n('mrSG'),
        r = n('q1tI'),
        i = n('TSYQ'),
        s = n('Iivm'),
        a = n('Ald9'),
        u = n('D/i5'),
        c = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype.render = function () {
              var e,
                t,
                n = this.props,
                s = n.theme,
                a = n.error,
                c = n.success,
                l = n.sizeMode,
                p = n.leftComponent,
                d = n.rightComponent,
                h = n.grouped,
                m = n.columnGrouped,
                f = n.fontSize,
                v = n.reference,
                b = n.className,
                _ =
                  (n.strictLeftDirectionInput,
                  Object(o.__rest)(n, [
                    'theme',
                    'error',
                    'success',
                    'sizeMode',
                    'leftComponent',
                    'rightComponent',
                    'grouped',
                    'columnGrouped',
                    'fontSize',
                    'reference',
                    'className',
                    'strictLeftDirectionInput',
                  ])),
                g = { fontSize: f },
                y = i(
                  s.textInput,
                  this.props.strictLeftDirectionInput &&
                    u.textInputLeftDirection,
                  (((e = {})[s.error] = a),
                  (e[s.success] = c),
                  (e[s[l]] = Boolean(l)),
                  e),
                ),
                w = i(
                  s.inputWrapper,
                  (((t = {})[b] = Boolean(b)),
                  (t[s.grouped] = h),
                  (t[s.column] = m),
                  t),
                ),
                C = [],
                S = r.createElement(
                  'input',
                  Object(o.__assign)(
                    { ref: v, className: y, key: 'textInput', style: g },
                    _,
                  ),
                );
              if (p) {
                var O = {
                  className: i(s.leftComponent, p.props.className),
                  key: 'leftComponent',
                };
                C.push(r.cloneElement(p, O));
              }
              if ((C.push(S), d)) {
                var x = {
                  className: i(s.rightComponent, d.props.className),
                  key: 'rightComponent',
                };
                C.push(r.cloneElement(d, x));
              }
              return r.createElement('div', { className: w }, C);
            }),
            t
          );
        })(r.PureComponent);
      function l(e) {
        var t,
          n = e.className,
          l = e.icon,
          p = e.clearable,
          d = e.onClear,
          h = e.size,
          m = e.strictLeftDirectionInput,
          f = Object(o.__rest)(e, [
            'className',
            'icon',
            'clearable',
            'onClear',
            'size',
            'strictLeftDirectionInput',
          ]),
          v = i(
            u.inputWrapper,
            (((t = {})[n] = Boolean(n)),
            (t[u.iconed] = Boolean(l)),
            (t[u.clearable] = p),
            t),
          );
        return r.createElement(
          c,
          Object(o.__assign)(
            {
              theme: u,
              className: v,
              leftComponent: l
                ? r.createElement(s.Icon, {
                    key: 'inputIcon',
                    icon: l,
                    className: u.inputIcon,
                  })
                : void 0,
              rightComponent: p
                ? r.createElement(s.Icon, {
                    className: u.clearIcon,
                    icon: a,
                    key: 'clearIcon',
                    onClick: d,
                  })
                : void 0,
              sizeMode: h,
              strictLeftDirectionInput: m,
            },
            f,
          ),
        );
      }
    },
    'ML8+': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return u;
      });
      var o = n('q1tI'),
        r = n('TSYQ'),
        i = n('Iivm'),
        s = n('cvzQ'),
        a = n('R4+T');
      function u(e) {
        var t,
          n = e.dropped,
          u = e.className;
        return o.createElement(i.Icon, {
          className: r(u, s.icon, ((t = {}), (t[s.dropped] = n), t)),
          icon: a,
        });
      }
    },
    O6kz: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.makeSwitchGroupItem = void 0);
      var o = n('mrSG'),
        r = n('q1tI'),
        i = n('17x9');
      t.makeSwitchGroupItem = function (e) {
        var t;
        return (
          ((t = (function (t) {
            function n() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e._onChange = function (t) {
                  e.context.switchGroupContext.getOnChange()(t);
                }),
                (e._onUpdate = function (t) {
                  t.includes(e.props.value) && e.forceUpdate();
                }),
                e
              );
            }
            return (
              o.__extends(n, t),
              (n.prototype.componentDidMount = function () {
                this.context.switchGroupContext.subscribe(this._onUpdate);
              }),
              (n.prototype.render = function () {
                return r.createElement(
                  e,
                  o.__assign({}, this.props, {
                    name: this._getName(),
                    onChange: this._onChange,
                    checked: this._isChecked(),
                  }),
                );
              }),
              (n.prototype.componentWillUnmount = function () {
                this.context.switchGroupContext.unsubscribe(this._onUpdate);
              }),
              (n.prototype._getName = function () {
                return this.context.switchGroupContext.getName();
              }),
              (n.prototype._isChecked = function () {
                return this.context.switchGroupContext
                  .getValues()
                  .includes(this.props.value);
              }),
              n
            );
          })(r.PureComponent)).contextTypes = {
            switchGroupContext: i.any.isRequired,
          }),
          t
        );
      };
    },
    OGHR: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.SwitchGroup = void 0);
      var o = n('mrSG'),
        r = n('q1tI'),
        i = n('17x9'),
        s = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._subscriptions = new Set()),
              (t._getName = function () {
                return t.props.name;
              }),
              (t._getValues = function () {
                return t.props.values;
              }),
              (t._getOnChange = function () {
                return t.props.onChange;
              }),
              (t._subscribe = function (e) {
                t._subscriptions.add(e);
              }),
              (t._unsubscribe = function (e) {
                t._subscriptions.delete(e);
              }),
              t
            );
          }
          return (
            o.__extends(t, e),
            (t.prototype.getChildContext = function () {
              return {
                switchGroupContext: {
                  getName: this._getName,
                  getValues: this._getValues,
                  getOnChange: this._getOnChange,
                  subscribe: this._subscribe,
                  unsubscribe: this._unsubscribe,
                },
              };
            }),
            (t.prototype.render = function () {
              return this.props.children;
            }),
            (t.prototype.componentDidUpdate = function (e) {
              this._notify(this._getUpdates(this.props.values, e.values));
            }),
            (t.prototype._notify = function (e) {
              this._subscriptions.forEach(function (t) {
                return t(e);
              });
            }),
            (t.prototype._getUpdates = function (e, t) {
              return o.__spreadArrays(t, e).filter(function (n) {
                return t.includes(n) ? !e.includes(n) : e.includes(n);
              });
            }),
            (t.childContextTypes = { switchGroupContext: i.any.isRequired }),
            t
          );
        })(r.PureComponent);
      t.SwitchGroup = s;
    },
    'P4l+': function (e, t, n) {},
    QpNh: function (e, t, n) {
      'use strict';
      function o(e) {
        for (
          var t = {}, n = 0, o = Object.entries(e).filter(r);
          n < o.length;
          n++
        ) {
          var i = o[n],
            s = i[0],
            a = i[1];
          t[s] = a;
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
        function i(r) {
          if (!(e > r.timeStamp)) {
            var i = r.target;
            void 0 !== n &&
              null !== t &&
              null !== i &&
              i.ownerDocument === o &&
              (t.contains(i) || n(r));
          }
        }
        return (
          r.click && o.addEventListener('click', i, !1),
          r.mouseDown && o.addEventListener('mousedown', i, !1),
          r.touchEnd && o.addEventListener('touchend', i, !1),
          r.touchStart && o.addEventListener('touchstart', i, !1),
          function () {
            o.removeEventListener('click', i, !1),
              o.removeEventListener('mousedown', i, !1),
              o.removeEventListener('touchend', i, !1),
              o.removeEventListener('touchstart', i, !1);
          }
        );
      }
      n.d(t, 'a', function () {
        return o;
      });
    },
    Zzxg: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.GroupedCheckbox = t.Checkbox = void 0);
      var o = n('mrSG'),
        r = n('q1tI'),
        i = n('TSYQ'),
        s = n('0W35'),
        a = n('vCF3'),
        u = n('qibD');
      n('E9Pn');
      var c = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          o.__extends(t, e),
          (t.prototype.render = function () {
            var e,
              t,
              n = i(
                this.props.className,
                u.checkbox,
                (((e = {})[u.reverse] = Boolean(
                  this.props.labelPositionReverse,
                )),
                (e[u.baseline] = Boolean(this.props.labelAlignBaseline)),
                e),
              ),
              s = i(u.label, (((t = {})[u.disabled] = this.props.disabled), t)),
              c = null;
            return (
              this.props.label &&
                (c = r.createElement(
                  'span',
                  { className: s },
                  this.props.label,
                )),
              r.createElement(
                'label',
                { className: n },
                r.createElement(a.CheckboxInput, o.__assign({}, this.props)),
                c,
              )
            );
          }),
          (t.defaultProps = { value: 'on' }),
          t
        );
      })(r.PureComponent);
      (t.Checkbox = c), (t.GroupedCheckbox = s.makeSwitchGroupItem(c));
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
      Object.defineProperty(t, '__esModule', { value: !0 }),
        n('mrSG').__exportStar(n('Zzxg'), t);
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
    swCq: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.Icon = void 0);
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
    vCF3: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.CheckboxInput = void 0);
      var o = n('q1tI'),
        r = n('TSYQ'),
        i = n('Iivm'),
        s = n('aJjg'),
        a = n('F0Qt');
      n('P4l+'),
        (t.CheckboxInput = function (e) {
          var t,
            n = r(
              a.box,
              (((t = {})[a.check] = !Boolean(e.indeterminate)),
              (t[a.dot] = Boolean(e.indeterminate)),
              (t[a.noOutline] = -1 === e.tabIndex),
              t),
            );
          return o.createElement(
            'div',
            { className: a.wrapper, title: e.title },
            o.createElement('input', {
              id: e.id,
              tabIndex: e.tabIndex,
              className: a.input,
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
              'div',
              { className: n },
              o.createElement(i.Icon, { icon: s, className: a.icon }),
            ),
          );
        });
    },
    ycFu: function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return o;
      }),
        n.d(t, 'a', function () {
          return h;
        });
      var o,
        r = n('mrSG'),
        i = n('q1tI'),
        s = n.n(i),
        a = n('mwqF'),
        u = n('Eyy1'),
        c = (n('YFKU'), n('/3z9')),
        l = n('g89m'),
        p = n('8NUT');
      !(function (e) {
        (e.Submit = 'submit'), (e.Cancel = 'cancel'), (e.None = 'none');
      })(o || (o = {}));
      var d = { defaultActionOnClose: o.Submit, submitOnEnterKey: !0 },
        h = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._dialogRef = s.a.createRef()),
              (t._handleClose = function () {
                var e = t.props,
                  n = e.defaultActionOnClose,
                  r = e.onSubmit,
                  i = e.onCancel,
                  s = e.onClose;
                switch (n) {
                  case o.Submit:
                    r();
                    break;
                  case o.Cancel:
                    i();
                }
                s();
              }),
              (t._handleCancel = function () {
                t.props.onCancel(), t.props.onClose();
              }),
              (t._handleKeyDown = function (e) {
                var n = t.props,
                  o = n.onSubmit,
                  r = n.submitButtonDisabled,
                  i = n.submitOnEnterKey;
                switch (Object(c.hashFromEvent)(e)) {
                  case 13:
                    !r && i && (e.preventDefault(), o());
                }
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t =
                  (e.render,
                  e.onClose,
                  e.onSubmit,
                  e.onCancel,
                  e.footerLeftRenderer,
                  e.submitButtonText,
                  e.submitButtonDisabled,
                  e.defaultActionOnClose,
                  e.submitOnEnterKey,
                  Object(r.__rest)(e, [
                    'render',
                    'onClose',
                    'onSubmit',
                    'onCancel',
                    'footerLeftRenderer',
                    'submitButtonText',
                    'submitButtonDisabled',
                    'defaultActionOnClose',
                    'submitOnEnterKey',
                  ]));
              return s.a.createElement(
                l.a,
                Object(r.__assign)({}, t, {
                  ref: this._dialogRef,
                  onKeyDown: this._handleKeyDown,
                  render: this._renderChildren(),
                  onClose: this._handleClose,
                }),
              );
            }),
            (t.prototype.focus = function () {
              Object(u.ensureNotNull)(this._dialogRef.current).focus();
            }),
            (t.prototype._renderChildren = function () {
              var e = this;
              return function (t) {
                var n = e.props,
                  o = n.render,
                  r = n.footerLeftRenderer,
                  i = n.additionalButtons,
                  u = n.submitButtonText,
                  c = n.submitButtonDisabled,
                  l = n.onSubmit;
                return s.a.createElement(
                  s.a.Fragment,
                  null,
                  o(t),
                  s.a.createElement(
                    'div',
                    { className: p.footer },
                    r && r(t.isSmallWidth),
                    s.a.createElement(
                      'div',
                      { className: p.buttons },
                      i,
                      s.a.createElement(
                        a.Button,
                        {
                          name: 'cancel',
                          appearance: 'stroke',
                          onClick: e._handleCancel,
                        },
                        window.t('Cancel'),
                      ),
                      s.a.createElement(
                        'span',
                        { className: p.submitButton },
                        s.a.createElement(
                          a.Button,
                          { disabled: c, name: 'submit', onClick: l },
                          u || window.t('Ok'),
                        ),
                      ),
                    ),
                  ),
                );
              };
            }),
            (t.defaultProps = d),
            t
          );
        })(s.a.PureComponent);
    },
  },
]);
