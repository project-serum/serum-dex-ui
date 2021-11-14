(window.webpackJsonp = window.webpackJsonp || []).push([
  [35],
  {
    DxCR: function (t, e, i) {
      'use strict';
      (function (t) {
        i('sZhh'), i('QBwY');
        var r = i('56W2');
        i('pay7');
        var o = i('Eyy1').ensureNotNull,
          n = i('ivNn').isNaN,
          s = i('eJTA'),
          a = s.rgba,
          l = s.rgbaToString,
          c = s.parseRgb,
          u = i('XPit').TimePointIndexSearchMode,
          h = i('zXvd').NumericFormatter,
          p = i('Tmoa'),
          d = i('jNEI').addColorPicker,
          v = i('2h0C').Binding,
          f = i('txPx').getLogger('Chart.PropertyPage');
        function g(t, e) {
          return '<label for="' + e + '">' + t + '</label>';
        }
        function _(t, e) {
          (this._model = e),
            (this._bindings = []),
            (this._property = t),
            (this.supportThemeSwitcher = !1);
        }
        function m(t) {
          return function (e) {
            return e < t ? t : e;
          };
        }
        function b(t) {
          return function (e) {
            return e > t ? t : e;
          };
        }
        function y(t) {
          return function (e) {
            var i = parseInt(e, 10);
            return n(i) ? t : i;
          };
        }
        function C(t, e, i, r, o, n, s) {
          v.call(this, t, e, r, o, n),
            (this._transformFunction = i),
            (this._setter = s),
            this._attachToControl(t, r);
        }
        function k(t, e, i, r, o, n) {
          (this._subControlIds = e),
            v.call(this, t, i, r, o, n),
            this._forEachSubControl(function (t) {
              this._attachToControl(t, r);
            });
        }
        function T(t, e, i, r, o, n, s) {
          (this._model = r),
            (this._mainSeries = n),
            (this._toIntTransformer = y(s)),
            (this._disabled = !1),
            v.call(this, t, e, i, r, o);
          var a = this;
          i &&
            t.change(function () {
              a.setValueToProperty(a.value());
            }),
            this._mainSeries
              .dataEvents()
              .barReceived()
              .subscribe(this, function () {
                a.setValue(this.property().value());
              });
        }
        function x(t, e, i, r, o, n, s) {
          v.call(this, t, e, i, r, o),
            (this._transform = n),
            i &&
              t.on(
                'accept-symbol',
                function (t, e) {
                  this.setValueToProperty(e), this.setValue(e);
                }.bind(this),
              ),
            s &&
              (s.subscribe(this, this._updateDisplayedSymbol),
              (this._updateDelegate = s));
        }
        function M(t, e, i, r, o, n, s, a) {
          v.call(this, t, e, r, o, n),
            (this._transformFunction = i),
            (this._propertyChangedHook = a),
            (this._setter = s);
          var l = this;
          r &&
            t.change(function () {
              l._setter
                ? l._setter.call(l, l.value())
                : l.setValueToProperty(l.value());
            });
        }
        function w(t, e, i, r, o, n) {
          if (!t.is(':checkbox, :radio')) return new S(t, e, i, r, o);
          v.call(this, t, e, i, r, o), (this._setter = n);
          var s = this;
          i &&
            t.change(function () {
              s._setter
                ? s._setter.call(s, s.value())
                : s.setValueToProperty(s.value());
            });
        }
        function V(t, e, i, r, o, n) {
          v.call(this, t, e, i, r, o), (this._inverted = !0 === n);
        }
        function S(t, e, i, r, o) {
          v.call(this, t, e, i, r, o);
          var n = this;
          i &&
            t.click(function () {
              var t = $(this).toggleClass('active').hasClass('active');
              n.setValueToProperty(t);
            });
        }
        function O(t, e, i, r, o, n) {
          var s;
          (s = t.is('input') ? t : t.find('input')),
            v.call(this, s, e, i, r, o),
            (this._transparencyProperty = n),
            this.applyOldTransparency();
          var a = this;
          i &&
            s.change(function () {
              a.setValueToProperty(a.value());
            });
        }
        function E(e, i, r, o, n, s) {
          isNumber(i.value()) ||
            (f.logWarn(
              'Property cannot be binded to control, bad value (expect number): ' +
                i.value(),
            ),
            (i = new t())),
            v.call(this, e, i, r, o, n);
          var a = this;
          function l(t, e) {
            var i = a.control().slider('option', 'min'),
              r = a.control().slider('option', 'max'),
              o = a._property.value();
            ((i <= o && o <= r) || (i < e.value && e.value < r)) &&
              a.setValueToProperty(e.value);
          }
          function c(t, e) {
            a.setValueToProperty(e.value);
          }
          r &&
            (s
              ? (e.bind('slidechange', l), e.bind('slide', l))
              : (e.bind('slidechange', c), e.bind('slide', c))),
            e.bind('slidestart', function (t, e) {
              o.beginUndoMacro(n);
            }),
            e.bind('slidestop', function (t, e) {
              o.endUndoMacro();
            });
        }
        function P(t, e, i, r, o, n, s, a) {
          (this._propFrom = e[0]),
            (this._propTo = e[1]),
            (this._control = t),
            (this._applyOnFly = r),
            (this._undoModel = o),
            (this._undoText = s),
            (this._properties = e),
            (this._inputsText = n),
            (this._transformers = i);
          var l = this;
          t.slider({
            range: !0,
            min: i[0],
            max: i[1],
            values: [l._propFrom.value(), l._propTo.value()],
          }),
            (this.$rangeHandleFrom = $(t.find('.ui-slider-handle')[0]).addClass(
              'from',
            )),
            (this.$rangeHandleTo = $(t.find('.ui-slider-handle')[1]).addClass(
              'to',
            )),
            this.setValue(this._propFrom, 0),
            this.setValue(this._propTo, 1),
            a &&
              ($(a).on('change', function (t) {
                $(this).is(':checked')
                  ? (l._control.slider('enable'),
                    $(l._inputsText[0]).prop('disabled', !1),
                    $(l._inputsText[1]).prop('disabled', !1))
                  : (l._control.slider('disable'),
                    $(l._inputsText[0]).prop('disabled', !0),
                    $(l._inputsText[1]).prop('disabled', !0));
              }),
              $(a).is(':checked')
                ? (l._control.slider('enable'),
                  $(l._inputsText[0]).prop('disabled', !1),
                  $(l._inputsText[1]).prop('disabled', !1))
                : (l._control.slider('disable'),
                  $(l._inputsText[0]).prop('disabled', !0),
                  $(l._inputsText[1]).prop('disabled', !0))),
            n &&
              ($(n[0]).val(this._control.slider('values', 0)),
              $(n[1]).val(this._control.slider('values', 1)),
              t.slider({
                slide: function (t, e) {
                  $(n[0]).val(e.values[0]), $(n[1]).val(e.values[1]);
                },
              }),
              $(n).each(function () {
                $(this).on('keydown', function (t) {
                  parseInt($(n[0]).val()) < l._transformers[0]
                    ? $(n[0]).val(l._transformers[0])
                    : parseInt($(n[1]).val()) > l._transformers[1] &&
                      $(n[1]).val(l._transformers[1]),
                    -1 !== $.inArray(t.keyCode, [46, 8, 9, 27, 13, 110, 190]) ||
                      (65 === t.keyCode && !0 === t.ctrlKey) ||
                      (67 === t.keyCode && !0 === t.ctrlKey) ||
                      (88 === t.keyCode && !0 === t.ctrlKey) ||
                      (t.keyCode >= 35 && t.keyCode <= 39) ||
                      ((t.shiftKey || t.keyCode < 48 || t.keyCode > 57) &&
                        (t.keyCode < 96 || t.keyCode > 105) &&
                        t.preventDefault());
                });
              }),
              $(n[0]).on('keyup', function (t) {
                parseInt($(this).val()) < l._transformers[0]
                  ? $(this).val(l._transformers[0])
                  : parseInt($(this).val()) > l._transformers[1] &&
                    $(this).val(l._transformers[1]),
                  parseInt($(this).val()) > parseInt($(n[1]).val()) &&
                    $(this).val(n[1].val()),
                  l._control.slider('values', 0, $(this).val()),
                  P.prototype.setValueToProperty.call(
                    l,
                    l._control.slider('values'),
                    'from',
                  );
              }),
              $(n[1]).on('keyup', function (t) {
                parseInt($(this).val()) < l._transformers[0]
                  ? $(this).val(l._transformers[0])
                  : parseInt($(this).val()) > l._transformers[1] &&
                    $(this).val(l._transformers[1]),
                  parseInt($(this).val()) < $(n[0]).val() &&
                    $(this).val(n[0].val()),
                  l._control.slider('values', 1, $(this).val()),
                  P.prototype.setValueToProperty.call(
                    l,
                    l._control.slider('values'),
                    'to',
                  );
              })),
            this._propFrom
              .listeners()
              .subscribe(this, P.prototype.propertyChanged),
            this._propTo
              .listeners()
              .subscribe(this, P.prototype.propertyChanged),
            r &&
              t.on('slide', function (t, e) {
                l.setValueToProperty(l._control.slider('values'), e.handle);
              }),
            t.slider({
              stop: function (t, e) {
                n &&
                  ($(n[0]).val(l._control.slider('values', 0)),
                  $(n[1]).val(l._control.slider('values', 1))),
                  l.setValueToProperty(l._control.slider('values'), e.handle);
              },
              start: function (t, e) {
                n &&
                  ($(n[0]).val(l._control.slider('values', 0)),
                  $(n[1]).val(l._control.slider('values', 1))),
                  l.setValueToProperty(l._control.slider('values'), e.handle);
              },
            });
        }
        (_.prototype.model = function () {
          return this._model;
        }),
          (_.prototype.bindControl = function (t) {
            return this._bindings.push(t), t;
          }),
          (_.prototype.unbindControl = function (t) {
            var e = this._bindings.indexOf(t);
            -1 !== e && this._bindings.splice(e, 1);
          }),
          (_.prototype.loadData = function () {
            for (var t = 0; t < this._bindings.length; t++) {
              var e = this._bindings[t];
              if (e.properties) {
                var i = e.properties();
                e.setValue(i[0], 0), e.setValue(i[1], 1);
              } else
                e.property &&
                  (e.transparencyProperty && e.transparencyProperty()
                    ? e.applyOldTransparency()
                    : e.setValue(e.property().value()));
            }
          }),
          (_.prototype.saveData = function () {
            this._model.beginUndoMacro();
            for (var t = 0; t < this._bindings.length; t++) {
              var e = this._bindings[t];
              e.changed() && this._model.setProperty(e.property(), e.value());
            }
            this._model.endUndoMacro();
          }),
          (_.prototype.createLineWidthEditor = function () {
            var t = this._model._chartWidget.widget().prop('ownerDocument');
            return $('<div class="linewidth-slider">', t).slider({
              max: 4,
              min: 1,
              step: 1,
            });
          }),
          (_.prototype.createColorPicker = function (t) {
            return d(null, t);
          }),
          (_.prototype.createCombo = function (t) {
            var e = $(document.createElement('select')),
              i = t.reduce(function (t, e) {
                return t.add(
                  $(document.createElement('option')).prop({
                    value: e,
                    text: e,
                  }),
                );
              }, $());
            return e.append(i);
          }),
          (_.prototype.createFontEditor = function (t) {
            var e =
              t ||
              TradingView.factoryDefaults('chartproperties.editorFontsList');
            return this.createCombo(e);
          }),
          (_.prototype.createFontSizeEditor = function (t) {
            var e = t || [10, 11, 12, 14, 16, 20, 24, 28, 32, 40];
            return this.createCombo(e).addClass('tv-select-container-fontsize');
          }),
          (_.prototype.createSeriesMinTickEditor = function () {
            var t =
                "<select><option value='default'>" +
                $.t('Default') +
                '</option>',
              e = [
                { priceScale: 1, minMove: 1, frac: !1 },
                { priceScale: 10, minMove: 1, frac: !1 },
                { priceScale: 100, minMove: 1, frac: !1 },
                { priceScale: 1e3, minMove: 1, frac: !1 },
                { priceScale: 1e4, minMove: 1, frac: !1 },
                { priceScale: 1e5, minMove: 1, frac: !1 },
                { priceScale: 1e6, minMove: 1, frac: !1 },
                { priceScale: 1e7, minMove: 1, frac: !1 },
                { priceScale: 1e8, minMove: 1, frac: !1 },
                { priceScale: 2, minMove: 1, frac: !0 },
                { priceScale: 4, minMove: 1, frac: !0 },
                { priceScale: 8, minMove: 1, frac: !0 },
                { priceScale: 16, minMove: 1, frac: !0 },
                { priceScale: 32, minMove: 1, frac: !0 },
                { priceScale: 64, minMove: 1, frac: !0 },
                { priceScale: 128, minMove: 1, frac: !0 },
                { priceScale: 320, minMove: 1, frac: !0 },
              ];
            for (var i in e) {
              var r = e[i];
              t +=
                "<option value='" +
                (r.priceScale + ',' + r.minMove + ',' + r.frac) +
                "'>" +
                (r.minMove + '/' + r.priceScale) +
                '</option>';
            }
            return (t += '</select>'), $(t);
          }),
          (_.prototype.createPrecisionEditor = function () {
            for (
              var t =
                  "<select><option value='default'>" +
                  $.t('Default') +
                  '</option>',
                e = 0;
              e <= 8;
              e++
            )
              t += "<option value='" + e + "'>" + e + '</option>';
            return (t += '</select>'), $(t);
          }),
          (_.prototype.createLabeledCell = function (t, e, i) {
            var r,
              o,
              n = null;
            'number' == typeof t.valueOf()
              ? ((n = t), (r = e), (o = i))
              : ((r = t), (o = e)),
              (r += '');
            var s = this._labelToId(r),
              a = $('<td>');
            return (
              $('<label>')
                .html(r.length > 0 ? $.t(r) : '')
                .attr('for', s)
                .appendTo(a),
              n && a.attr('colspan', n),
              o && o.attr('id', s),
              a
            );
          }),
          (_.prototype._labelToId = function (t) {
            return (
              'control' +
              t.replace(/(^| )\w/g, function (t) {
                return '-' + t.trim().toLowerCase();
              }) +
              Math.floor(1e3 * Math.random())
            );
          }),
          (_.prototype.addRow = function (t) {
            return $(document.createElement('tr')).appendTo(t);
          }),
          (_.prototype.addLabeledRow = function (t, e, i, r) {
            var o = e && e.length > 0 ? $.t(e) : '',
              s = $(document.createElement('tr')),
              a = $(document.createElement('td')).html(o);
            if (
              (r && ((r = parseInt(r)), n(r) && (r = 2), a.attr('colspan', r)),
              i)
            ) {
              var l = this._labelToId(e);
              i.attr('id', l), a.html(g(o, l));
            }
            return s.append(a).appendTo(t);
          }),
          (_.prototype.addEditorRow = function (t, e, i, r) {
            var o = $(document.createElement('td'));
            return (
              (i.row = this.addLabeledRow(t, e, i, r)),
              i.appendTo(o.appendTo(i.row)),
              i
            );
          }),
          (_.prototype.addOffsetEditorRow = function (t, e) {
            var i = $('<input/>');
            return (
              i.attr('type', 'text'),
              i.css('width', '100px'),
              i.addClass('ticker'),
              this.addEditorRow(t, e, i)
            );
          }),
          (_.prototype.destroy = function () {
            for (var t = this._bindings.length; t--; )
              this._bindings[t].destroy();
            this._bindings.length = 0;
          }),
          inherit(C, v),
          (C.prototype.value = function () {
            var t = this._control.val();
            if (this._transformFunction)
              if (Array.isArray(this._transformFunction))
                for (var e = 0; e < this._transformFunction.length; e++)
                  t = this._transformFunction[e](t);
              else t = this._transformFunction(t);
            return t;
          }),
          (C.prototype.setValue = function (t) {
            var e = this._control.val(),
              i = this._formatValue(t);
            e !== i && this._control.val(i);
          }),
          (C.prototype.setValueToProperty = function (t) {
            this._setter
              ? this._setter.call(this, this.value())
              : this._undoModel.setProperty(this._property, t, this._undoText),
              (this._changed = !1);
          }),
          inherit(k, v),
          (k.prototype._forEachSubControl = function (t) {
            this._subControlIds.forEach(function (e) {
              var i = '#' + e,
                r = this.control().find(i);
              t.call(this, r);
            }, this);
          }),
          (k.prototype._parseSessions = function (t) {
            var e = t.split('-', 2);
            2 !== e.length && (e = ['0', '0']);
            var i = parseInt(e[0]),
              r = parseInt(e[1]);
            return [Math.floor(i / 100), i % 100, Math.floor(r / 100), r % 100];
          }),
          (k.prototype.value = function () {
            var t = [];
            this._forEachSubControl(function (e) {
              t.push(e.val());
            });
            var e = function (t, e) {
                return (
                  e.forEach(function (e) {
                    t = e(t);
                  }),
                  ('0' + t).slice(-2)
                );
              },
              i = [y(0), m(0), b(23)],
              r = [y(0), m(0), b(59)];
            return e(t[0], i) + e(t[1], r) + '-' + e(t[2], i) + e(t[3], r);
          }),
          (k.prototype.setValue = function (t) {
            var e = this._parseSessions(t);
            this._forEachSubControl(function (t) {
              var i = t.val(),
                r = ('0' + e[0]).slice(-2);
              e.shift(), i !== r && t.val(r);
            });
          }),
          inherit(T, v),
          (T.prototype.value = function () {
            if (this._disabled) return this._control.attr('disabled', !0), null;
            var t = this._control.val(),
              e = this._toIntTransformer(t);
            e < 0 && (e = 0);
            var i = this._mainSeries.bars().size();
            return (
              i <= e && (e = i - 1),
              1e3 *
                o(
                  this._mainSeries
                    .bars()
                    .valueAt(o(this._mainSeries.bars().lastIndex()) - e),
                )[TradingView.TIME_PLOT]
            );
          }),
          (T.prototype.setValue = function (t) {
            if (this._disabled || null == t) this._control.attr('disabled', !0);
            else {
              if (t < 0)
                return (
                  this._control.val(-t),
                  void this._property.setValue(this.value())
                );
              var e = this._mainSeries
                .data()
                .plotValueToTimePointIndex(
                  t / 1e3,
                  TradingView.TIME_PLOT,
                  u.FromRight,
                );
              if (null !== e) {
                var i = o(this._mainSeries.bars().lastIndex()) - e;
                this._control.val() !== i.toString() && this._control.val(i);
              } else this._disabled = !0;
            }
          }),
          inherit(x, v),
          (x.prototype.value = function () {
            return this._control.val();
          }),
          (x.prototype.setValue = function (t) {
            var e = this.value();
            this._transform && (t = this._transform(t)),
              t && e !== t && this._control.val(t);
          }),
          (x.prototype._updateDisplayedSymbol = function () {
            this.setValue(this._property.value());
          }),
          (x.prototype.destroy = function () {
            v.prototype.destroy.call(this),
              this._updateDelegate &&
                this._updateDelegate.unsubscribe(
                  this,
                  this._updateDisplayedSymbol,
                );
          }),
          inherit(M, v),
          (M.prototype.value = function () {
            var t = this._control.val();
            return (
              this._transformFunction && (t = this._transformFunction(t)), t
            );
          }),
          (M.prototype.setValue = function (t) {
            if ((this._control.val(t), this._control.selectbox))
              try {
                var e = this._control.find("[value='" + r(t) + "']");
                if (e.length > 0) {
                  var i = e[0];
                  this._control.selectbox('change', i.value, i.text);
                }
              } catch (o) {}
          }),
          (M.prototype.propertyChanged = function (t) {
            var e = t.value();
            'function' == typeof this._propertyChangedHook &&
              (e = this._propertyChangedHook(e)),
              this.setValue(e);
          }),
          inherit(w, v),
          (w.prototype.value = function () {
            return this.control().is(':checked');
          }),
          (w.prototype.setValue = function (t) {
            if (
              (this.control().is('.visibility-checker') &&
                (t
                  ? (this.control()
                      .closest('tr')
                      .find('.slider-range')
                      .slider('enable'),
                    this.control()
                      .closest('tr')
                      .find('input[type="text"]')
                      .each(function () {
                        $(this).prop('disabled', !1);
                      }))
                  : (this.control()
                      .closest('tr')
                      .find('.slider-range')
                      .slider('disable'),
                    this.control()
                      .closest('tr')
                      .find('input[type="text"]')
                      .each(function () {
                        $(this).prop('disabled', !0);
                      }))),
              this.control().is('.visibility-switch'))
            ) {
              var e = { opacity: t ? 1 : 0.5 },
                i = t ? 'enable' : 'disable',
                r = this.control().data('hides');
              if (r) r.closest('td').css(e);
              else {
                var o = this.control();
                o.parent()
                  .parent()
                  .data('visible', t)
                  .find('td')
                  .filter(function () {
                    var t = $(this);
                    return (
                      !t.find('label').length &&
                      t.find(':checkbox').attr('id') !== o.attr('id')
                    );
                  })
                  .each(function () {
                    var r = $(this);
                    r.children().each(function () {
                      var o = $(this);
                      o.is('.ui-slider')
                        ? o.slider(i)
                        : o.is('select')
                        ? (o.selectbox(i), r.css(e))
                        : o.is('.custom-select')
                        ? (o.data(i)(), r.css(e))
                        : o.is('.tvcolorpicker-container')
                        ? (o.find('input').prop('disabled', !t), r.css(e))
                        : (o.prop('disabled', !t), r.css(e));
                    });
                  });
              }
            }
            return this.control().attr('checked', !!t);
          }),
          (w.prototype.destroy = function () {
            v.prototype.destroy.call(this), this._control.off('change');
          }),
          inherit(V, v),
          (V.prototype.value = function () {
            return this.control().is(':disabled');
          }),
          (V.prototype.setValue = function (t) {
            return (
              (t = Boolean(t)),
              this._inverted && (t = !t),
              this.control().parents('label').toggleClass('disabled', t),
              this.control().attr('disabled', t)
            );
          }),
          inherit(S, v),
          (S.prototype.value = function () {
            return this.control().hasClass('active');
          }),
          (S.prototype.setValue = function (t) {
            return this.control().toggleClass('active', !!t);
          }),
          inherit(O, v),
          (O.prototype.applyOldTransparency = function () {
            if (this.transparencyProperty()) {
              if (p.isHexColor(this.property().value())) {
                var t = this.transparencyProperty().value
                    ? this.transparencyProperty().value()
                    : this.transparencyProperty(),
                  e = c(this.property().value()),
                  i = (100 - t) / 100;
                this.control().val(l(a(e, i)));
              } else this.control().val(this.property().value());
              this.control().change();
            }
          }),
          (O.prototype.transparencyProperty = function () {
            return this._transparencyProperty;
          }),
          (O.prototype.value = function () {
            return this._control.val();
          }),
          (O.prototype.setValue = function (t) {
            this._control.val(t),
              this._control.change(),
              this._control.color && this._control.color.fromString(t);
          }),
          inherit(E, v),
          (E.prototype.value = function () {
            return this._control.slider('option', 'value');
          }),
          (E.prototype.setValue = function (t) {
            this._control.slider('option', 'value', t);
          }),
          (P.prototype.properties = function () {
            return this._properties;
          }),
          (P.prototype.value = function (t) {
            return this._control.slider('values', t);
          }),
          (P.prototype.setValue = function (t, e) {
            void 0 === e &&
              (t === this._propFrom && (e = 0), t === this._propTo && (e = 1)),
              this._control.slider('values', e, t.value()),
              this._inputsText && $(this._inputsText[e]).val(t.value());
          }),
          (P.prototype.propertyChanged = function (t) {
            this.setValue(t);
          }),
          (P.prototype.setValueToProperty = function (t, e) {
            ($(e).hasClass('from') || 'from' === e) &&
              (this._undoModel.beginUndoMacro(this._undoText[0]),
              this._undoModel.setProperty(
                this._propFrom,
                t[0],
                this._undoText[0],
              ),
              this._propFrom.setValue(t[0], 0),
              this._undoModel.endUndoMacro()),
              ($(e).hasClass('to') || 'to' === e) &&
                (this._undoModel.beginUndoMacro(this._undoText[1]),
                this._undoModel.setProperty(
                  this._propTo,
                  t[1],
                  this._undoText[1],
                ),
                this._propTo.setValue(t[1], 1),
                this._undoModel.endUndoMacro());
          }),
          (P.prototype.destroy = function () {
            this._propFrom &&
              this._propTo &&
              (this._propFrom
                .listeners()
                .unsubscribe(this, v.prototype.propertyChanged),
              this._propTo
                .listeners()
                .unsubscribe(this, v.prototype.propertyChanged));
          }),
          (e.PropertyPage = _),
          (e.UppercaseTransformer = function (t) {
            return t.toUpperCase();
          }),
          (e.GreateTransformer = m),
          (e.LessTransformer = b),
          (e.ToIntTransformer = y),
          (e.ToFloatTransformer = function (t) {
            var e = new h();
            return function (i) {
              var r = e.parse(i);
              return n(r) ? t : r;
            };
          }),
          (e.SymbolInfoSymbolTransformer = function (t, e) {
            return function (i) {
              var r = t();
              return i === e.value() && r && (r.ticker || r.full_name)
                ? r.ticker || r.full_name
                : i;
            };
          }),
          (e.SimpleStringBinder = C),
          (e.SessionBinder = k),
          (e.BarTimeBinder = T),
          (e.SymbolBinder = x),
          (e.SimpleComboBinder = M),
          (e.BooleanBinder = w),
          (e.DisabledBinder = V),
          (e.ColorBinding = O),
          (e.SliderBinder = E),
          (e.RangeBinder = P),
          (e.generateLabelElementStr = g);
      }.call(this, i('tc+8')));
    },
    KjDF: function (t, e, i) {},
    QBwY: function (t, e, i) {
      var r, o, n;
      (o = [i('P5fv'), i('iGnl'), i('vBzC'), i('Qwlt'), i('MIQu')]),
        void 0 ===
          (n =
            'function' ==
            typeof (r = function (t) {
              return t.widget('ui.slider', t.ui.mouse, {
                version: '1.12.1',
                widgetEventPrefix: 'slide',
                options: {
                  animate: !1,
                  classes: {
                    'ui-slider': 'ui-corner-all',
                    'ui-slider-handle': 'ui-corner-all',
                    'ui-slider-range': 'ui-corner-all ui-widget-header',
                  },
                  distance: 0,
                  max: 100,
                  min: 0,
                  orientation: 'horizontal',
                  range: !1,
                  step: 1,
                  value: 0,
                  values: null,
                  change: null,
                  slide: null,
                  start: null,
                  stop: null,
                },
                numPages: 5,
                _create: function () {
                  (this._keySliding = !1),
                    (this._mouseSliding = !1),
                    (this._animateOff = !0),
                    (this._handleIndex = null),
                    this._detectOrientation(),
                    this._mouseInit(),
                    this._calculateNewMax(),
                    this._addClass(
                      'ui-slider ui-slider-' + this.orientation,
                      'ui-widget ui-widget-content',
                    ),
                    this._refresh(),
                    (this._animateOff = !1);
                },
                _refresh: function () {
                  this._createRange(),
                    this._createHandles(),
                    this._setupEvents(),
                    this._refreshValue();
                },
                _createHandles: function () {
                  var e,
                    i,
                    r = this.options,
                    o = this.element.find('.ui-slider-handle'),
                    n = [];
                  for (
                    i = (r.values && r.values.length) || 1,
                      o.length > i &&
                        (o.slice(i).remove(), (o = o.slice(0, i))),
                      e = o.length;
                    e < i;
                    e++
                  )
                    n.push("<span tabindex='0'></span>");
                  (this.handles = o.add(t(n.join('')).appendTo(this.element))),
                    this._addClass(
                      this.handles,
                      'ui-slider-handle',
                      'ui-state-default',
                    ),
                    (this.handle = this.handles.eq(0)),
                    this.handles.each(function (e) {
                      t(this)
                        .data('ui-slider-handle-index', e)
                        .attr('tabIndex', 0);
                    });
                },
                _createRange: function () {
                  var e = this.options;
                  e.range
                    ? (!0 === e.range &&
                        (e.values
                          ? e.values.length && 2 !== e.values.length
                            ? (e.values = [e.values[0], e.values[0]])
                            : t.isArray(e.values) &&
                              (e.values = e.values.slice(0))
                          : (e.values = [this._valueMin(), this._valueMin()])),
                      this.range && this.range.length
                        ? (this._removeClass(
                            this.range,
                            'ui-slider-range-min ui-slider-range-max',
                          ),
                          this.range.css({ left: '', bottom: '' }))
                        : ((this.range = t('<div>').appendTo(this.element)),
                          this._addClass(this.range, 'ui-slider-range')),
                      ('min' !== e.range && 'max' !== e.range) ||
                        this._addClass(
                          this.range,
                          'ui-slider-range-' + e.range,
                        ))
                    : (this.range && this.range.remove(), (this.range = null));
                },
                _setupEvents: function () {
                  this._off(this.handles),
                    this._on(this.handles, this._handleEvents),
                    this._hoverable(this.handles),
                    this._focusable(this.handles);
                },
                _destroy: function () {
                  this.handles.remove(),
                    this.range && this.range.remove(),
                    this._mouseDestroy();
                },
                _mouseCapture: function (e) {
                  var i,
                    r,
                    o,
                    n,
                    s,
                    a,
                    l,
                    c = this,
                    u = this.options;
                  return (
                    !u.disabled &&
                    ((this.elementSize = {
                      width: this.element.outerWidth(),
                      height: this.element.outerHeight(),
                    }),
                    (this.elementOffset = this.element.offset()),
                    (i = { x: e.pageX, y: e.pageY }),
                    (r = this._normValueFromMouse(i)),
                    (o = this._valueMax() - this._valueMin() + 1),
                    this.handles.each(function (e) {
                      var i = Math.abs(r - c.values(e));
                      (o > i ||
                        (o === i &&
                          (e === c._lastChangedValue ||
                            c.values(e) === u.min))) &&
                        ((o = i), (n = t(this)), (s = e));
                    }),
                    !1 !== this._start(e, s) &&
                      ((this._mouseSliding = !0),
                      (this._handleIndex = s),
                      this._addClass(n, null, 'ui-state-active'),
                      n.trigger('focus'),
                      (a = n.offset()),
                      (l = !t(e.target)
                        .parents()
                        .addBack()
                        .is('.ui-slider-handle')),
                      (this._clickOffset = l
                        ? { left: 0, top: 0 }
                        : {
                            left: e.pageX - a.left - n.width() / 2,
                            top:
                              e.pageY -
                              a.top -
                              n.height() / 2 -
                              (parseInt(n.css('borderTopWidth'), 10) || 0) -
                              (parseInt(n.css('borderBottomWidth'), 10) || 0) +
                              (parseInt(n.css('marginTop'), 10) || 0),
                          }),
                      this.handles.hasClass('ui-state-hover') ||
                        this._slide(e, s, r),
                      (this._animateOff = !0),
                      !0))
                  );
                },
                _mouseStart: function () {
                  return !0;
                },
                _mouseDrag: function (t) {
                  var e = { x: t.pageX, y: t.pageY },
                    i = this._normValueFromMouse(e);
                  return this._slide(t, this._handleIndex, i), !1;
                },
                _mouseStop: function (t) {
                  return (
                    this._removeClass(this.handles, null, 'ui-state-active'),
                    (this._mouseSliding = !1),
                    this._stop(t, this._handleIndex),
                    this._change(t, this._handleIndex),
                    (this._handleIndex = null),
                    (this._clickOffset = null),
                    (this._animateOff = !1),
                    !1
                  );
                },
                _detectOrientation: function () {
                  this.orientation =
                    'vertical' === this.options.orientation
                      ? 'vertical'
                      : 'horizontal';
                },
                _normValueFromMouse: function (t) {
                  var e, i, r, o, n;
                  return (
                    'horizontal' === this.orientation
                      ? ((e = this.elementSize.width),
                        (i =
                          t.x -
                          this.elementOffset.left -
                          (this._clickOffset ? this._clickOffset.left : 0)))
                      : ((e = this.elementSize.height),
                        (i =
                          t.y -
                          this.elementOffset.top -
                          (this._clickOffset ? this._clickOffset.top : 0))),
                    (r = i / e) > 1 && (r = 1),
                    r < 0 && (r = 0),
                    'vertical' === this.orientation && (r = 1 - r),
                    (o = this._valueMax() - this._valueMin()),
                    (n = this._valueMin() + r * o),
                    this._trimAlignValue(n)
                  );
                },
                _uiHash: function (t, e, i) {
                  var r = {
                    handle: this.handles[t],
                    handleIndex: t,
                    value: void 0 !== e ? e : this.value(),
                  };
                  return (
                    this._hasMultipleValues() &&
                      ((r.value = void 0 !== e ? e : this.values(t)),
                      (r.values = i || this.values())),
                    r
                  );
                },
                _hasMultipleValues: function () {
                  return this.options.values && this.options.values.length;
                },
                _start: function (t, e) {
                  return this._trigger('start', t, this._uiHash(e));
                },
                _slide: function (t, e, i) {
                  var r,
                    o = this.value(),
                    n = this.values();
                  this._hasMultipleValues() &&
                    ((r = this.values(e ? 0 : 1)),
                    (o = this.values(e)),
                    2 === this.options.values.length &&
                      !0 === this.options.range &&
                      (i = 0 === e ? Math.min(r, i) : Math.max(r, i)),
                    (n[e] = i)),
                    i !== o &&
                      !1 !== this._trigger('slide', t, this._uiHash(e, i, n)) &&
                      (this._hasMultipleValues()
                        ? this.values(e, i)
                        : this.value(i));
                },
                _stop: function (t, e) {
                  this._trigger('stop', t, this._uiHash(e));
                },
                _change: function (t, e) {
                  this._keySliding ||
                    this._mouseSliding ||
                    ((this._lastChangedValue = e),
                    this._trigger('change', t, this._uiHash(e)));
                },
                value: function (t) {
                  return arguments.length
                    ? ((this.options.value = this._trimAlignValue(t)),
                      this._refreshValue(),
                      void this._change(null, 0))
                    : this._value();
                },
                values: function (e, i) {
                  var r, o, n;
                  if (arguments.length > 1)
                    return (
                      (this.options.values[e] = this._trimAlignValue(i)),
                      this._refreshValue(),
                      void this._change(null, e)
                    );
                  if (!arguments.length) return this._values();
                  if (!t.isArray(arguments[0]))
                    return this._hasMultipleValues()
                      ? this._values(e)
                      : this.value();
                  for (
                    r = this.options.values, o = arguments[0], n = 0;
                    n < r.length;
                    n += 1
                  )
                    (r[n] = this._trimAlignValue(o[n])), this._change(null, n);
                  this._refreshValue();
                },
                _setOption: function (e, i) {
                  var r,
                    o = 0;
                  switch (
                    ('range' === e &&
                      !0 === this.options.range &&
                      ('min' === i
                        ? ((this.options.value = this._values(0)),
                          (this.options.values = null))
                        : 'max' === i &&
                          ((this.options.value = this._values(
                            this.options.values.length - 1,
                          )),
                          (this.options.values = null))),
                    t.isArray(this.options.values) &&
                      (o = this.options.values.length),
                    this._super(e, i),
                    e)
                  ) {
                    case 'orientation':
                      this._detectOrientation(),
                        this._removeClass(
                          'ui-slider-horizontal ui-slider-vertical',
                        )._addClass('ui-slider-' + this.orientation),
                        this._refreshValue(),
                        this.options.range && this._refreshRange(i),
                        this.handles.css(
                          'horizontal' === i ? 'bottom' : 'left',
                          '',
                        );
                      break;
                    case 'value':
                      (this._animateOff = !0),
                        this._refreshValue(),
                        this._change(null, 0),
                        (this._animateOff = !1);
                      break;
                    case 'values':
                      for (
                        this._animateOff = !0, this._refreshValue(), r = o - 1;
                        r >= 0;
                        r--
                      )
                        this._change(null, r);
                      this._animateOff = !1;
                      break;
                    case 'step':
                    case 'min':
                    case 'max':
                      (this._animateOff = !0),
                        this._calculateNewMax(),
                        this._refreshValue(),
                        (this._animateOff = !1);
                      break;
                    case 'range':
                      (this._animateOff = !0),
                        this._refresh(),
                        (this._animateOff = !1);
                  }
                },
                _setOptionDisabled: function (t) {
                  this._super(t),
                    this._toggleClass(null, 'ui-state-disabled', !!t);
                },
                _value: function () {
                  var t = this.options.value;
                  return (t = this._trimAlignValue(t));
                },
                _values: function (t) {
                  var e, i, r;
                  if (arguments.length)
                    return (
                      (e = this.options.values[t]),
                      (e = this._trimAlignValue(e))
                    );
                  if (this._hasMultipleValues()) {
                    for (
                      i = this.options.values.slice(), r = 0;
                      r < i.length;
                      r += 1
                    )
                      i[r] = this._trimAlignValue(i[r]);
                    return i;
                  }
                  return [];
                },
                _trimAlignValue: function (t) {
                  if (t <= this._valueMin()) return this._valueMin();
                  if (t >= this._valueMax()) return this._valueMax();
                  var e = this.options.step > 0 ? this.options.step : 1,
                    i = (t - this._valueMin()) % e,
                    r = t - i;
                  return (
                    2 * Math.abs(i) >= e && (r += i > 0 ? e : -e),
                    parseFloat(r.toFixed(5))
                  );
                },
                _calculateNewMax: function () {
                  var t = this.options.max,
                    e = this._valueMin(),
                    i = this.options.step;
                  (t = Math.round((t - e) / i) * i + e) > this.options.max &&
                    (t -= i),
                    (this.max = parseFloat(t.toFixed(this._precision())));
                },
                _precision: function () {
                  var t = this._precisionOf(this.options.step);
                  return (
                    null !== this.options.min &&
                      (t = Math.max(t, this._precisionOf(this.options.min))),
                    t
                  );
                },
                _precisionOf: function (t) {
                  var e = t.toString(),
                    i = e.indexOf('.');
                  return -1 === i ? 0 : e.length - i - 1;
                },
                _valueMin: function () {
                  return this.options.min;
                },
                _valueMax: function () {
                  return this.max;
                },
                _refreshRange: function (t) {
                  'vertical' === t && this.range.css({ width: '', left: '' }),
                    'horizontal' === t &&
                      this.range.css({ height: '', bottom: '' });
                },
                _refreshValue: function () {
                  var e,
                    i,
                    r,
                    o,
                    n,
                    s = this.options.range,
                    a = this.options,
                    l = this,
                    c = !this._animateOff && a.animate,
                    u = {};
                  this._hasMultipleValues()
                    ? this.handles.each(function (r) {
                        (i =
                          ((l.values(r) - l._valueMin()) /
                            (l._valueMax() - l._valueMin())) *
                          100),
                          (u[
                            'horizontal' === l.orientation ? 'left' : 'bottom'
                          ] = i + '%'),
                          t(this)
                            .stop(1, 1)
                            [c ? 'animate' : 'css'](u, a.animate),
                          !0 === l.options.range &&
                            ('horizontal' === l.orientation
                              ? (0 === r &&
                                  l.range
                                    .stop(1, 1)
                                    [c ? 'animate' : 'css'](
                                      { left: i + '%' },
                                      a.animate,
                                    ),
                                1 === r &&
                                  l.range[c ? 'animate' : 'css'](
                                    { width: i - e + '%' },
                                    { queue: !1, duration: a.animate },
                                  ))
                              : (0 === r &&
                                  l.range
                                    .stop(1, 1)
                                    [c ? 'animate' : 'css'](
                                      { bottom: i + '%' },
                                      a.animate,
                                    ),
                                1 === r &&
                                  l.range[c ? 'animate' : 'css'](
                                    { height: i - e + '%' },
                                    { queue: !1, duration: a.animate },
                                  ))),
                          (e = i);
                      })
                    : ((r = this.value()),
                      (o = this._valueMin()),
                      (n = this._valueMax()),
                      (i = n !== o ? ((r - o) / (n - o)) * 100 : 0),
                      (u[
                        'horizontal' === this.orientation ? 'left' : 'bottom'
                      ] = i + '%'),
                      this.handle
                        .stop(1, 1)
                        [c ? 'animate' : 'css'](u, a.animate),
                      'min' === s &&
                        'horizontal' === this.orientation &&
                        this.range
                          .stop(1, 1)
                          [c ? 'animate' : 'css'](
                            { width: i + '%' },
                            a.animate,
                          ),
                      'max' === s &&
                        'horizontal' === this.orientation &&
                        this.range
                          .stop(1, 1)
                          [c ? 'animate' : 'css'](
                            { width: 100 - i + '%' },
                            a.animate,
                          ),
                      'min' === s &&
                        'vertical' === this.orientation &&
                        this.range
                          .stop(1, 1)
                          [c ? 'animate' : 'css'](
                            { height: i + '%' },
                            a.animate,
                          ),
                      'max' === s &&
                        'vertical' === this.orientation &&
                        this.range
                          .stop(1, 1)
                          [c ? 'animate' : 'css'](
                            { height: 100 - i + '%' },
                            a.animate,
                          ));
                },
                _handleEvents: {
                  keydown: function (e) {
                    var i,
                      r,
                      o,
                      n = t(e.target).data('ui-slider-handle-index');
                    switch (e.keyCode) {
                      case t.ui.keyCode.HOME:
                      case t.ui.keyCode.END:
                      case t.ui.keyCode.PAGE_UP:
                      case t.ui.keyCode.PAGE_DOWN:
                      case t.ui.keyCode.UP:
                      case t.ui.keyCode.RIGHT:
                      case t.ui.keyCode.DOWN:
                      case t.ui.keyCode.LEFT:
                        if (
                          (e.preventDefault(),
                          !this._keySliding &&
                            ((this._keySliding = !0),
                            this._addClass(
                              t(e.target),
                              null,
                              'ui-state-active',
                            ),
                            !1 === this._start(e, n)))
                        )
                          return;
                    }
                    switch (
                      ((o = this.options.step),
                      (i = r = this._hasMultipleValues()
                        ? this.values(n)
                        : this.value()),
                      e.keyCode)
                    ) {
                      case t.ui.keyCode.HOME:
                        r = this._valueMin();
                        break;
                      case t.ui.keyCode.END:
                        r = this._valueMax();
                        break;
                      case t.ui.keyCode.PAGE_UP:
                        r = this._trimAlignValue(
                          i +
                            (this._valueMax() - this._valueMin()) /
                              this.numPages,
                        );
                        break;
                      case t.ui.keyCode.PAGE_DOWN:
                        r = this._trimAlignValue(
                          i -
                            (this._valueMax() - this._valueMin()) /
                              this.numPages,
                        );
                        break;
                      case t.ui.keyCode.UP:
                      case t.ui.keyCode.RIGHT:
                        if (i === this._valueMax()) return;
                        r = this._trimAlignValue(i + o);
                        break;
                      case t.ui.keyCode.DOWN:
                      case t.ui.keyCode.LEFT:
                        if (i === this._valueMin()) return;
                        r = this._trimAlignValue(i - o);
                    }
                    this._slide(e, n, r);
                  },
                  keyup: function (e) {
                    var i = t(e.target).data('ui-slider-handle-index');
                    this._keySliding &&
                      ((this._keySliding = !1),
                      this._stop(e, i),
                      this._change(e, i),
                      this._removeClass(t(e.target), null, 'ui-state-active'));
                  },
                },
              });
            })
              ? r.apply(e, o)
              : r) || (t.exports = n);
    },
    'Y+MS': function (t, e, i) {
      'use strict';
      var r = (function () {
        function t(t, e) {
          (this.mouseFlag = !1),
            (this.accuracy = 2),
            (this.value = 1),
            (this.colorInput = t),
            (this.$el = $(
              '<div class="transparency-slider wide-slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">',
              t.prop('ownerDocument'),
            )),
            e && this.$el.hide(),
            (this.$gradient = $('<div class="gradient">').appendTo(this.$el)),
            (this.$roller = $(
              '<a href="#" class="ui-slider-handle ui-state-default ui-corner-all without-shift-handle-left">',
            ).appendTo(this.$gradient));
        }
        return (
          (t.prototype.calculateRollerPosition = function (t) {
            var e = t.pageX - this.$gradient.offset().left,
              i = this.$gradient.width();
            return e > i ? 100 : e < 0 ? 0 : ~~((e / i) * 100);
          }),
          (t.prototype.toRgb = function (t) {
            var e;
            return ~t.indexOf('#')
              ? t
              : (e = t.match(/[0-9.]+/g))
              ? 'rgb(' + e.slice(0, 3).join(', ') + ')'
              : 'rgb(127, 127, 127)';
          }),
          (t.prototype.setValue = function (t) {
            this.value = 1 !== t ? t.toFixed(this.accuracy) : t;
          }),
          (t.prototype.updateRoller = function () {
            this.$roller.css('left', 100 - 100 * this.value + '%');
          }),
          (t.prototype.rollerMoveHandler = function (t) {
            if (this.mouseFlag) {
              var e = this.calculateRollerPosition(t);
              this.setValue((100 - e) / 100),
                $(this).trigger('change', [this.val()]),
                this.$roller.css('left', e + '%');
            }
            t.preventDefault();
          }),
          (t.prototype.mouseupHandler = function (t) {
            this.mouseFlag &&
              ((this.mouseFlag = !1),
              $(this).trigger('afterChange', [this.val()]));
          }),
          (t.prototype.initEvents = function () {
            var t = this.$el.prop('ownerDocument'),
              e = function (t) {
                return this.rollerMoveHandler(t);
              }.bind(this),
              i = function (r) {
                return (
                  $(t).off('mousemove mouseup', e),
                  $(t).off('mouseup', i),
                  this.mouseupHandler(r)
                );
              }.bind(this);
            this.$el.on(
              'mousedown',
              function (r) {
                (this.mouseFlag = !0),
                  $(t).on('mousemove mouseup', e),
                  $(t).on('mouseup', i),
                  r.preventDefault();
              }.bind(this),
            ),
              this.colorInput.on(
                'change',
                function (t) {
                  this.updateColor();
                }.bind(this),
              );
          }),
          (t.prototype.removeEvents = function () {}),
          (t.prototype.updateColor = function () {
            var t = this.colorInput.val() || 'black',
              e = this.toRgb(t);
            $.browser.msie
              ? this.$gradient.css(
                  'filter',
                  [
                    "progid:DXImageTransform.Microsoft.gradient(startColorstr='",
                    e,
                    "', EndColor=0, GradientType=1)",
                  ].join(''),
                )
              : [
                  '-moz-linear-gradient(left, %COLOR 0%, transparent 100%)',
                  '-webkit-gradient(linear, left top, right top, color-stop(0%,%COLOR), color-stop(100%,transparent))',
                  '-webkit-linear-gradient(left, %COLOR 0%,transparent 100%)',
                  '-o-linear-gradient(left, %COLOR 0%,transparent 100%)',
                  'linear-gradient(to right, %COLOR 0%,transparent 100%)',
                ].forEach(
                  function (t) {
                    this.$gradient.css(
                      'background-image',
                      t.replace(/%COLOR/, e),
                    );
                  }.bind(this),
                );
          }),
          (t.prototype.val = function (t) {
            return (
              void 0 !== t && (this.setValue(+t), this.updateRoller()),
              this.value
            );
          }),
          function (e, i) {
            return new t(e, i);
          }
        );
      })();
      t.exports = r;
    },
    jNEI: function (t, e, i) {
      'use strict';
      i.r(e),
        i.d(e, 'addColorPicker', function () {
          return s;
        });
      i('P5fv'), i('vrQV');
      var r = i('eJTA'),
        o = i('Vdly');
      function n(t) {
        for (var e = [], i = 0, o = t; i < o.length; i++) {
          var n = o[i];
          null !== Object(r.tryParseRgb)(n) && e.push(n);
        }
        return e;
      }
      function s(t, e) {
        void 0 === e && (e = {});
        var i = $('<span class="tvcolorpicker-container">');
        return (
          null !== t && i.appendTo(t),
          void 0 !== e.addClass && i.addClass(e.addClass),
          $('<div class="tvcolorpicker-transparency">').appendTo(i),
          $('<input class="colorpicker-widget">')
            .tvcolorpicker({
              customColors: n(Object(o.getJSON)('pickerCustomColors', [])),
              direction: e.direction,
              hideTransparency: !!e.hideTransparency,
            })
            .on('change', function () {
              var t, e;
              $(this).css(
                'border-color',
                ((t = $(this).val() || '#727272'),
                (e = Object(r.parseRgb)(t).map(function (t) {
                  return t > 50 ? t - 50 : 0;
                })),
                Object(r.rgbToString)(e)),
              );
            })
            .bind('customcolorchange', function (t, e) {
              Object(o.setJSON)('pickerCustomColors', e);
            })
            .appendTo(i),
          i
        );
      }
    },
    pay7: function (t, e, i) {},
    utoz: function (t, e, i) {},
    vBzC: function (t, e, i) {
      var r, o, n;
      (o = [i('P5fv'), i('Qwlt')]),
        void 0 ===
          (n =
            'function' ==
            typeof (r = function (t) {
              return (t.ui.keyCode = {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38,
              });
            })
              ? r.apply(e, o)
              : r) || (t.exports = n);
    },
    vrQV: function (t, e, i) {
      'use strict';
      i('KjDF'), i('utoz'), i('pay7');
      var r = i('eJTA'),
        o = r.rgba,
        n = r.areEqualRgb,
        s = r.areEqualRgba,
        a = r.normalizeHue,
        l = r.normalizeHsvSaturation,
        c = r.normalizeValue,
        u = r.hsv,
        h = r.rgbToHsv,
        p = r.hsvToRgb,
        d = r.rgbToString,
        v = r.rgbaToString,
        f = r.parseRgb,
        g = r.parseRgba,
        _ = i('Y+MS'),
        m = i('wmOI').ESC;
      !(function (t) {
        if (!t) throw new Error('This program cannot be run in DOS mode');
        (b.setCustomColors = r), (t.fn.tvcolorpicker = b);
        var e = [];
        function i(t) {
          return '' === t ? t : v(g(t));
        }
        function r(t) {
          t && (t.join || (t = t ? ('' + t).split(',') : []), (e = t));
        }
        function b(y) {
          var C;
          function k(e, i, r) {
            var n = t(this);
            (e = v(o(f(e), i))),
              T.call(this, e),
              n
                .removeData('tvcolorpicker')
                .removeData('tvcolorpicker-custom-color'),
              r && (w.call(n), n.blur());
          }
          function T(e) {
            var i = t(this);
            i.val(e),
              i.change(),
              e ? i.trigger('pick-color', e) : i.trigger('pick-transparent'),
              x.call(this, e);
          }
          function x(e) {
            '' !== e
              ? (t(this).removeClass('tvcolorpicker-gradient-widget'),
                t(this).css({ backgroundColor: e, color: e }))
              : t(this).addClass('tvcolorpicker-gradient-widget');
          }
          function M(e, i) {
            i = i || {};
            var r,
              o = this,
              s = o.prop('ownerDocument'),
              a = t(o).val().toLowerCase(),
              l = s.createElement('table'),
              c = s.createElement('tbody');
            l.appendChild(c);
            var u = 0;
            return (
              t.each(e, function (e, s) {
                u++, e % 10 == 0 && (r = t('<tr></tr>').appendTo(c));
                var l = t('<td class="tvcolorpicker-cell"></td>').appendTo(r),
                  h = t(
                    '<div class="tvcolorpicker-transparency"><div class="tvcolorpicker-swatch"></div></div>',
                  )
                    .appendTo(l)
                    .find('.tvcolorpicker-swatch')
                    .data('color', s);
                i.addClass && h.addClass(i.addClass),
                  s &&
                    ((s = s.toLowerCase()),
                    a && n(f(a), f(s)) && h.addClass('active'),
                    h.css({ backgroundColor: s }).data('color', s),
                    h.bind('click', function () {
                      k.call(o, s, C.val(), !0);
                    }));
              }),
              t(l).addClass('tvcolorpicker-table'),
              u ? l : t()
            );
          }
          function $(i) {
            var r = !1,
              n = t(this),
              m = n.prop('ownerDocument'),
              b = t('<div class="tvcolorpicker-popup opened">'),
              y = t('<div class="tvcolorpicker-swatches-area"></div>').appendTo(
                b,
              );
            y.append(
              M.call(this, [
                'rgb(0, 0, 0)',
                'rgb(66, 66, 66)',
                'rgb(101, 101, 101)',
                'rgb(152, 152, 152)',
                'rgb(182, 182, 182)',
                'rgb(203, 203, 203)',
                'rgb(216, 216, 216)',
                'rgb(238, 238, 238)',
                'rgb(242, 242, 242)',
                'rgb(255, 255, 255)',
              ]),
            ),
              y.append(
                M.call(this, [
                  'rgb(151, 0, 0)',
                  'rgb(255, 0, 0)',
                  'rgb(255, 152, 0)',
                  'rgb(255, 255, 0)',
                  'rgb(0, 255, 0)',
                  'rgb(0, 255, 255)',
                  'rgb(73, 133, 231)',
                  'rgb(0, 0, 255)',
                  'rgb(152, 0, 255)',
                  'rgb(255, 0, 255)',
                ]),
              ),
              y.append(
                M.call(this, [
                  'rgb(230, 184, 175)',
                  'rgb(244, 204, 204)',
                  'rgb(252, 229, 205)',
                  'rgb(255, 242, 204)',
                  'rgb(217, 234, 211)',
                  'rgb(208, 224, 227)',
                  'rgb(201, 218, 248)',
                  'rgb(207, 226, 243)',
                  'rgb(217, 210, 233)',
                  'rgb(234, 209, 220)',
                  'rgb(221, 126, 107)',
                  'rgb(234, 153, 153)',
                  'rgb(249, 203, 156)',
                  'rgb(255, 229, 153)',
                  'rgb(182, 215, 168)',
                  'rgb(162, 196, 201)',
                  'rgb(164, 194, 244)',
                  'rgb(159, 197, 232)',
                  'rgb(180, 167, 214)',
                  'rgb(213, 166, 189)',
                  'rgb(204, 65, 37)',
                  'rgb(224, 102, 102)',
                  'rgb(246, 178, 107)',
                  'rgb(255, 217, 102)',
                  'rgb(147, 196, 125)',
                  'rgb(118, 165, 175)',
                  'rgb(109, 158, 235)',
                  'rgb(111, 168, 220)',
                  'rgb(142, 124, 195)',
                  'rgb(194, 123, 160)',
                  'rgb(166, 28, 0)',
                  'rgb(204, 0, 0)',
                  'rgb(230, 145, 56)',
                  'rgb(241, 194, 50)',
                  'rgb(106, 168, 79)',
                  'rgb(69, 129, 142)',
                  'rgb(60, 120, 216)',
                  'rgb(61, 133, 198)',
                  'rgb(103, 78, 167)',
                  'rgb(166, 77, 121)',
                  'rgb(133, 32, 12)',
                  'rgb(153, 0, 0)',
                  'rgb(180, 95, 6)',
                  'rgb(191, 144, 0)',
                  'rgb(56, 118, 29)',
                  'rgb(19, 79, 92)',
                  'rgb(17, 85, 204)',
                  'rgb(11, 83, 148)',
                  'rgb(53, 28, 117)',
                  'rgb(116, 27, 71)',
                  'rgb(91, 15, 0)',
                  'rgb(102, 0, 0)',
                  'rgb(120, 63, 4)',
                  'rgb(127, 96, 0)',
                  'rgb(39, 78, 19)',
                  'rgb(12, 52, 61)',
                  'rgb(28, 69, 135)',
                  'rgb(7, 55, 99)',
                  'rgb(32, 18, 77)',
                  'rgb(76, 17, 48)',
                ]),
              );
            var x = t('<div class="tvcolorpicker-custom-area"></div>')
                .css({ display: 'none' })
                .appendTo(b),
              $ = t('<div class="tvcolorpicker-hsv"></div>').appendTo(x),
              w = t('<div class="tvcolorpicker-hs"></div>').appendTo($),
              S = t('<div class="tvcolorpicker-hs-handle"></div>').appendTo(w),
              O = t('<div class="tvcolorpicker-hs-area"></div>').appendTo(w),
              E = t('<div class="tvcolorpicker-vv">').appendTo($),
              P = t('<div class="tvcolorpicker-v"></div>').appendTo(E),
              I = t('<div class="tvcolorpicker-v-handle"></div>').appendTo(P),
              D = t('<div class="tvcolorpicker-v-area"></div>').appendTo(P);
            (C = _(t(this), i.hideTransparency)).initEvents(),
              C.updateColor(),
              C.$el.appendTo(b),
              C.val(g(n.val() || 'rgb(14, 15, 16)')[3]);
            var F = w.height(),
              R = w.width(),
              A = !1,
              H = !1,
              z = !0,
              L = [0, 0, 0.5];
            function N(t) {
              var e = t.originalEvent,
                i =
                  t.offsetX || t.layerX || (e && (e.offsetX || e.layerX)) || 0,
                r =
                  t.offsetY || t.layerY || (e && (e.offsetY || e.layerY)) || 0;
              S.css({ left: i + 'px', top: r + 'px' }),
                (L[0] = a(i / R)),
                (L[1] = l(1 - r / F)),
                P.css({ backgroundColor: d(p(u(L[0], L[1], 1))) }),
                j();
            }
            function B(e) {
              1 == e.which &&
                ((A = !1), b.is('.opened') && t(n).get(0).focus());
            }
            function U(e) {
              var i = (function (e) {
                var i = e.pageY,
                  r = t(D),
                  o = i - r.offset().top;
                return o > r.height() ? r.height() : o < 0 ? 0 : o;
              })(e);
              I.css({ top: i + 'px' }),
                (L[2] = c(1 - Math.max(0, Math.min(i, F)) / F)),
                j();
            }
            function W(e) {
              1 == e.which &&
                ((H = !1),
                t(m).unbind('mouseup', W),
                b.is('.opened') && t(n).get(0).focus());
            }
            function j() {
              z &&
                ((z = !1),
                b.find('.tvcolorpicker-swatch.active').removeClass('active'));
              var t = o(p(L), C.val());
              if (!s(g(n.val().toUpperCase()), t)) {
                var e = v(t);
                n.data('tvcolorpicker-custom-color', e), T.call(n, e);
              }
            }
            O.bind('mousedown', function (e) {
              1 == e.which &&
                ((A = !0), t(m).bind('mouseup', B), N(e), e.preventDefault());
            }),
              O.bind('mousemove', function (t) {
                A && (N(t), t.preventDefault());
              }),
              t(C).on(
                'change',
                function () {
                  r
                    ? j()
                    : k.call(this, t(this).val() || 'rgb(14, 15, 16)', C.val());
                }.bind(this),
              ),
              t(C).on(
                'afterChange',
                function () {
                  t(this).focus();
                }.bind(this),
              ),
              E.bind('mousedown', function (e) {
                1 == e.which &&
                  ((H = !0), t(m).bind('mouseup', W), U(e), e.preventDefault());
              }),
              t(m).bind('mousemove', function (t) {
                H && (U(t), t.preventDefault());
              });
            t(
              '<a class="tvcolorpicker-custom-button _tv-button">' +
                window.t('Custom color...') +
                '</a>',
            )
              .appendTo(b)
              .bind('click', function () {
                var e = t(this).is('.active');
                if (
                  (e ||
                    x.css({
                      minWidth: y.width() + 'px',
                      minHeight: y.height() + 'px',
                    }),
                  t(this)[e ? 'removeClass' : 'addClass']('active'),
                  (r = t(this).is('.active')),
                  x.css({ display: e ? 'none' : 'block' }),
                  y.css({ display: e ? 'block' : 'none' }),
                  e)
                )
                  n.removeData('tvcolorpicker-custom-color');
                else {
                  (F = w.height()), (R = w.width());
                  var i = f(n.val() || 'rgb(14, 15, 16)');
                  (L = h(i)),
                    S.css({
                      left: ~~(L[0] * R) + 'px',
                      top: ~~((1 - L[1]) * F) + 'px',
                    }),
                    I.css({ top: ~~((1 - L[2]) * F) + 'px' }),
                    P.css({ backgroundColor: d(p(u(L[0], L[1], 1))) });
                }
              });
            return (
              b.append(
                t(M.call(this, e, { addClass: 'tvcolorpicker-user' })).addClass(
                  'tvcolorpicker-user-swatches',
                ),
              ),
              t(m.body).append(b),
              (function (e, i, r) {
                var o,
                  n = t(e).prop('ownerDocument'),
                  s = n.defaultView,
                  a = t(e).offset(),
                  l = (t(n).scrollLeft(), t(n).scrollTop()),
                  c = t(e).outerWidth(),
                  u = t(e).outerHeight(),
                  h = t(s).width(),
                  p = t(s).height(),
                  d = t(i).outerWidth(),
                  v = t(i).outerHeight();
                switch (
                  'function' == typeof r.direction ? r.direction() : r.direction
                ) {
                  default:
                  case 'down':
                    o = { top: a.top + u + r.offset, left: a.left + r.drift };
                    break;
                  case 'right':
                    o = { top: a.top + r.drift, left: a.left + c + r.offset };
                }
                o.top + v > p + l && (o.top = p - v + l),
                  a.left + d > h && (o.left = h - d),
                  (o.left += 'px'),
                  (o.top += 'px'),
                  i.css(o);
              })(n, b, i),
              m.addEventListener('keydown', V, !1),
              b
            );
          }
          function w() {
            var i = t(this).prop('ownerDocument') || document;
            t(i).find('.tvcolorpicker-popup').removeClass('opened').remove(),
              t(C).off('change'),
              t(C).off('afterChange'),
              i.removeEventListener('keydown', V, !1),
              t(S).data('tvcolorpicker', null),
              t(S).each(function () {
                var i = t(this).data('tvcolorpicker-custom-color');
                i &&
                  ((function (i) {
                    var r = !1,
                      o = f(i);
                    return (
                      t.each(e, function (t, e) {
                        if (n(f(e), o)) return (r = !0), !1;
                      }),
                      !r && ((e = [d(o)].concat(e.slice(0, 28))), !0)
                    );
                  })(i) && t(this).trigger('customcolorchange', [e]),
                  t(this).data('tvcolorpicker-custom-color', null));
                var r = t(this).data('tvcolorpicker-previous-color');
                r && r != t(this).val() && t(this).trigger('change'),
                  t(this).removeData('tvcolorpicker-previous-color');
              });
          }
          function V(t) {
            t.keyCode === m && (w.call(S), S.blur());
          }
          y = t.extend({}, b.options, y || {});
          var S = this;
          return (
            y && 'customColors' in y && r(y.customColors),
            this.each(function () {
              var e = t(this);
              e.val(i(e.val()));
              var r = null,
                o = !1;
              e.addClass('tvcolorpicker-widget')
                .attr('autocomplete', 'off')
                .attr('readonly', !0);
              var n = function () {
                e.data('tvcolorpicker') ||
                  (w.call(e),
                  (r = $.call(e, y)),
                  e.data('tvcolorpicker-custom-color', null),
                  e.data('tvcolorpicker', r),
                  e.data('tvcolorpicker-previous-color', e.val()),
                  r.bind('mousedown click', function (i) {
                    t(i.target).parents().andSelf().is(r) &&
                      (e.focus(),
                      (o = !0),
                      setTimeout(function () {
                        o = !1;
                      }, 0));
                  }));
              };
              function s() {
                var t = i(e.val());
                x.call(e, t);
              }
              e.on('touchstart', n),
                e.focus(n),
                w.call(e),
                e.bind('blur', function (t) {
                  o ? t.stopPropagation() : w.call(e);
                }),
                e.change(function (t) {
                  s();
                }),
                s();
            })
          );
        }
        b.options = { direction: 'down', offset: 0, drift: 0 };
      })(window.jQuery);
    },
  },
]);
