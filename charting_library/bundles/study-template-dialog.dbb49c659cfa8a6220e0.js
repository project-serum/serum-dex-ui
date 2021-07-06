(window.webpackJsonp = window.webpackJsonp || []).push([
  ['study-template-dialog'],
  {
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
        s = n('Eyy1'),
        i = n('YFKU'),
        a = n('q1tI'),
        c = n.n(a),
        l = n('i8i4'),
        u = (n('HbRj'), n('TSYQ')),
        p = n('fV0y'),
        m = n('ML8+'),
        h = n('L0Sj'),
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
      var d = n('FaeL'),
        v = n('D/i5');
      function _(e, t) {
        return '' === e || -1 !== t.toLowerCase().indexOf(e.toLowerCase());
      }
      var g = (function (e) {
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
                  c = e.currentTarget.value;
                if (o && '' === c)
                  n.setState({ queryValue: c, isOpened: !1, active: void 0 }),
                    a && a();
                else {
                  var l = n._suggestions(c),
                    u = Object.keys(l).length > 0;
                  n.setState({
                    queryValue: c,
                    isOpened: u,
                    active: r ? void 0 : n._getActiveKeyByValue(c),
                  }),
                    u && i && i();
                }
                r && s && s(c);
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
                    s = t.value,
                    i = t.onChange,
                    a = t.onSuggestionsOpen,
                    c = n.state,
                    l = c.active,
                    u = c.isOpened,
                    p = c.queryValue;
                  u && (e.preventDefault(), e.stopPropagation());
                  var m = n._suggestions(p);
                  switch (e.which) {
                    case o.DownArrow:
                    case o.UpArrow:
                      var h = Object.keys(m);
                      if (!u && h.length && e.which === o.DownArrow) {
                        n.setState({ isOpened: !0, active: h[0] }), a && a();
                        break;
                      }
                      var f = void 0;
                      if (void 0 === l) {
                        if (e.which === o.UpArrow) {
                          n._close();
                          break;
                        }
                        f = 0;
                      } else
                        f = h.indexOf(l) + (e.which === o.UpArrow ? -1 : 1);
                      f < 0 && (f = 0), f > h.length - 1 && (f = h.length - 1);
                      var d = h[f];
                      n.setState({ active: d });
                      var v = document.getElementById(d);
                      v && n._scrollIfNotVisible(v, n._suggestionsElement);
                      break;
                    case o.Escape:
                      n._close(), u || n._blur();
                      break;
                    case o.Enter:
                      var _ = l;
                      r && (u && _ ? n.setState(n._valueToQuery(_)) : (_ = p)),
                        void 0 !== _ &&
                          (n._close(),
                          u || n._blur(),
                          _ !== s ? i && i(_) : n.setState(n._valueToQuery(_)));
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
                f.a,
                { handler: this._handleOutsideClick, click: !0 },
                function (t) {
                  var n;
                  return a.createElement(
                    'div',
                    {
                      className: u(
                        d.autocomplete,
                        ((n = {}), (n[d.opened] = e.state.isOpened), n),
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
                              className: d.caret,
                              onClick: e._handleCaretClick,
                            },
                            a.createElement(m.a, {
                              className: d.icon,
                              dropped: e.state.isOpened,
                            }),
                          )
                        : void 0,
                      maxLength: e.props.maxLength,
                      theme: v,
                      reference: e._setInputRef,
                      className: d.textInput,
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
                n = void 0 === t ? _ : t,
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
                    r = u(
                      d.suggestion,
                      (((o = {})[d.selected] = e.state.active === n), o),
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
                  { className: d.noResults },
                  window.t('No results found'),
                );
              return !n.length && this.props.noEmptyText
                ? null
                : a.createElement(
                    'ul',
                    { className: d.suggestions, ref: this._setSuggestionsRef },
                    n.length ? n : o,
                  );
            }),
            (t.prototype._handleKeyUpEnter = function (e) {
              e.which === o.Enter && e.stopImmediatePropagation();
            }),
            (t.prototype._getActiveKeyByValue = function (e) {
              for (
                var t = this.props.filter,
                  n = void 0 === t ? _ : t,
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
        y = n('Iivm'),
        b = n('ycFu'),
        S = n('+EG+'),
        w = (function (e) {
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
              return a.createElement(b.a, {
                ref: this._dialogRef,
                onClose: r,
                onSubmit: this._handleSubmit,
                onCancel: r,
                onClickOutside: r,
                isOpened: t,
                title: o,
                dataName: 'save-rename-dialog',
                render: this._renderDialogBody(),
                defaultActionOnClose: b.b.None,
                submitButtonText: window.t('Save'),
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
            (t.prototype._renderDialogBody = function () {
              var e = this;
              return function () {
                return a.createElement(S.b.Consumer, null, function (t) {
                  return (e._manager = t), e.props.children;
                });
              };
            }),
            t
          );
        })(a.PureComponent),
        O = n('GtBf'),
        C = n('j+m7'),
        E = window.t('Template name'),
        I = window.t('Saved indicators'),
        N = window.t('Remember Symbol'),
        x = window.t('Remember Interval');
      function T(e) {
        var t = e.title,
          n = e.saveSymbolHintText,
          o = e.saveIntervalHintText,
          r = e.indicatorsText,
          i = e.source,
          l = e.onClose,
          m = e.onSubmit,
          h = Object(a.useState)(''),
          f = h[0],
          d = h[1],
          v = Object(a.useState)(!1),
          _ = v[0],
          b = v[1],
          S = Object(a.useState)(!1),
          T = S[0],
          D = S[1],
          k = Object(a.useState)(!1),
          L = k[0],
          j = k[1],
          A = Object(a.useRef)(null),
          V = Object(a.useRef)(null);
        return (
          Object(a.useEffect)(function () {
            Object(s.ensureNotNull)(V.current).focus();
          }, []),
          c.a.createElement(
            w,
            {
              ref: A,
              isOpened: !0,
              saveDisabled: !f,
              title: t,
              onClose: l,
              onSubmit: function (e) {
                m({ title: f, saveSymbol: _, saveInterval: T }, e);
              },
            },
            c.a.createElement(
              'div',
              { className: u(C.container, L && C.withSuggestions) },
              c.a.createElement('div', { className: C.title }, E),
              c.a.createElement(
                'div',
                { className: C.autocomplete },
                c.a.createElement(g, {
                  maxLength: 64,
                  value: f,
                  onChange: d,
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
                    j(!0);
                  },
                  onSuggestionsClose: function () {
                    j(!1);
                  },
                }),
              ),
              c.a.createElement(
                'div',
                { className: C.saveSymbol },
                c.a.createElement(p.Checkbox, {
                  label: c.a.createElement(
                    'span',
                    { className: C.hintLabel },
                    N,
                    c.a.createElement(y.Icon, {
                      icon: O,
                      className: u(C.hintMark, 'apply-common-tooltip'),
                      title: n,
                    }),
                  ),
                  onChange: function () {
                    b(!_), Object(s.ensureNotNull)(A.current).focus();
                  },
                  checked: _,
                }),
              ),
              c.a.createElement(
                'div',
                { className: C.saveInterval },
                c.a.createElement(p.Checkbox, {
                  label: c.a.createElement(
                    'span',
                    { className: C.hintLabel },
                    x,
                    c.a.createElement(y.Icon, {
                      icon: O,
                      className: u(C.hintMark, 'apply-common-tooltip'),
                      title: o,
                    }),
                  ),
                  onChange: function () {
                    D(!T), Object(s.ensureNotNull)(A.current).focus();
                  },
                  checked: T,
                }),
              ),
              c.a.createElement('div', { className: C.title }, I),
              c.a.createElement(
                'div',
                { className: u(C.indicators, L && C.withSuggestions) },
                r,
              ),
            ),
          )
        );
      }
      var D = n('FQhm'),
        k = n('ZjKI'),
        L = (function () {
          function e(e) {
            var t = this;
            (this._container = document.createElement('div')),
              (this.close = function () {
                t.unmount(), t._onClose && t._onClose();
              }),
              (this.unmount = function () {
                D.unsubscribe(
                  k.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                  t.unmount,
                  null,
                ),
                  l.unmountComponentAtNode(t._container);
              }),
              (this._title = e.title),
              (this._saveSymbolHintText = e.saveSymbolHintText),
              (this._saveIntervalHintText = e.saveIntervalHintText),
              (this._indicatorsText = e.indicatorsText),
              (this._source = e.source),
              (this._onSubmit = e.onSubmit),
              (this._onClose = e.onClose),
              D.subscribe(
                k.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this.unmount,
                null,
              );
          }
          return (
            (e.prototype.mount = function () {
              l.render(
                c.a.createElement(T, {
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
        j = n('zUrt'),
        A = n('oNDq'),
        V = n('IzGk'),
        B = n('8RO/');
      n.d(t, 'StudyTemplateSaver', function () {
        return z;
      });
      var M = Object(i.t)('Save Indicator Template'),
        R = Object(i.t)(
          'Selecting this option will set the {symbol} symbol on the chart when this template is applied',
        ),
        U = Object(i.t)(
          'Selecting this option will set the {interval} interval on the chart when this template is applied',
        ),
        H = Object(i.t)(
          "Study Template '{templateName}' already exists. Do you really want to replace it?",
        );
      function P(e, t, n) {
        j.backend.saveStudyTemplate(e, function (e) {
          ('error' in e && e.error) ||
            (j.backend.invalidateStudyTemplatesList(),
            j.backend.getStudyTemplatesList(t));
        });
      }
      var z = (function () {
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
              meta_info: Object(B.a)(this._controller, o.interval),
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
                c = this._prepareData(r, s, i);
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
                        H.format({ templateName: e }),
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
                  e ? P(c, o._onSave) : n.focus();
                });
              } else {
                P(c, this._onSave);
              }
            }
          }),
          (e.prototype._getActualTemplateList = function () {
            return (
              j.backend.invalidateStudyTemplatesList(),
              new Promise(function (e) {
                j.backend.getStudyTemplatesList(e);
              })
            );
          }),
          (e.prototype._showTemplateSaveRenameDialog = function (e, t, n) {
            var o = this,
              r = Object(B.a)(this._controller);
            (this._dialog = new L({
              source: e.map(function (e) {
                return e.name;
              }),
              title: M,
              saveSymbolHintText: R.format({ symbol: t }),
              saveIntervalHintText: U.format({
                interval: Object(V.translatedIntervalString)(n),
              }),
              indicatorsText: Object(B.b)(r.indicators),
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
    L0Sj: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return l;
      }),
        n.d(t, 'b', function () {
          return u;
        });
      var o = n('mrSG'),
        r = n('q1tI'),
        s = n('TSYQ'),
        i = n('Iivm'),
        a = n('Ald9'),
        c = n('D/i5'),
        l = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype.render = function () {
              var e,
                t,
                n = this.props,
                i = n.theme,
                a = n.error,
                l = n.success,
                u = n.sizeMode,
                p = n.leftComponent,
                m = n.rightComponent,
                h = n.grouped,
                f = n.columnGrouped,
                d = n.fontSize,
                v = n.reference,
                _ = n.className,
                g =
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
                y = { fontSize: d },
                b = s(
                  i.textInput,
                  this.props.strictLeftDirectionInput &&
                    c.textInputLeftDirection,
                  (((e = {})[i.error] = a),
                  (e[i.success] = l),
                  (e[i[u]] = Boolean(u)),
                  e),
                ),
                S = s(
                  i.inputWrapper,
                  (((t = {})[_] = Boolean(_)),
                  (t[i.grouped] = h),
                  (t[i.column] = f),
                  t),
                ),
                w = [],
                O = r.createElement(
                  'input',
                  Object(o.__assign)(
                    { ref: v, className: b, key: 'textInput', style: y },
                    g,
                  ),
                );
              if (p) {
                var C = {
                  className: s(i.leftComponent, p.props.className),
                  key: 'leftComponent',
                };
                w.push(r.cloneElement(p, C));
              }
              if ((w.push(O), m)) {
                var E = {
                  className: s(i.rightComponent, m.props.className),
                  key: 'rightComponent',
                };
                w.push(r.cloneElement(m, E));
              }
              return r.createElement('div', { className: S }, w);
            }),
            t
          );
        })(r.PureComponent);
      function u(e) {
        var t,
          n = e.className,
          u = e.icon,
          p = e.clearable,
          m = e.onClear,
          h = e.size,
          f = e.strictLeftDirectionInput,
          d = Object(o.__rest)(e, [
            'className',
            'icon',
            'clearable',
            'onClear',
            'size',
            'strictLeftDirectionInput',
          ]),
          v = s(
            c.inputWrapper,
            (((t = {})[n] = Boolean(n)),
            (t[c.iconed] = Boolean(u)),
            (t[c.clearable] = p),
            t),
          );
        return r.createElement(
          l,
          Object(o.__assign)(
            {
              theme: c,
              className: v,
              leftComponent: u
                ? r.createElement(i.Icon, {
                    key: 'inputIcon',
                    icon: u,
                    className: c.inputIcon,
                  })
                : void 0,
              rightComponent: p
                ? r.createElement(i.Icon, {
                    className: c.clearIcon,
                    icon: a,
                    key: 'clearIcon',
                    onClick: m,
                  })
                : void 0,
              sizeMode: h,
              strictLeftDirectionInput: f,
            },
            d,
          ),
        );
      }
    },
    'ML8+': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return c;
      });
      var o = n('q1tI'),
        r = n('TSYQ'),
        s = n('Iivm'),
        i = n('cvzQ'),
        a = n('R4+T');
      function c(e) {
        var t,
          n = e.dropped,
          c = e.className;
        return o.createElement(s.Icon, {
          className: r(c, i.icon, ((t = {}), (t[i.dropped] = n), t)),
          icon: a,
        });
      }
    },
    cvzQ: function (e, t, n) {
      e.exports = { icon: 'icon-3yfDkFjY', dropped: 'dropped-50rfOQ8V' };
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
  },
]);
