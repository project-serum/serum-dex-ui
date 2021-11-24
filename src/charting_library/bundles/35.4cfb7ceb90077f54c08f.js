(window.webpackJsonp = window.webpackJsonp || []).push([
  [35],
  {
    DxCR: function (t, e, i) {
      'use strict';
      (function (t) {
        i('jgM0'), i('QBwY');
        var o = i('56W2');
        i('pay7');
        var n = i('Eyy1').ensureNotNull,
          r = i('ivNn').isNaN,
          s = i('eJTA'),
          a = s.rgba,
          l = s.rgbaToString,
          c = s.parseRgb,
          u = i('XPit').TimePointIndexSearchMode,
          p = i('zXvd').NumericFormatter,
          h = i('T6Of').LimitedPrecisionNumericFormatter,
          d = i('Tmoa'),
          f = i('jNEI').addColorPicker,
          v = i('2h0C').Binding,
          g = i('uOxu').getLogger('Chart.PropertyPage'),
          m = i('MWAT').allPriceScaleSelectionStrategyInfo;
        function _(t, e) {
          return '<label for="' + e + '">' + t + '</label>';
        }
        function b(t, e) {
          (this._model = e),
            (this._bindings = []),
            (this._property = t),
            (this.supportThemeSwitcher = !1);
        }
        function y(t) {
          return function (e) {
            return e < t ? t : e;
          };
        }
        function C(t) {
          return function (e) {
            return e > t ? t : e;
          };
        }
        function T(t) {
          return function (e) {
            var i = parseInt(e, 10);
            return r(i) ? t : i;
          };
        }
        function k(t) {
          var e = new p();
          return function (i) {
            var o = e.parse(i);
            return r(o) ? t : o;
          };
        }
        function w(t, e, i, o, n, r, s) {
          v.call(this, t, e, o, n, r),
            (this._transformFunction = i),
            (this._setter = s),
            this._attachToControl(t, o);
        }
        function x(t, e, i, o, n) {
          w.call(this, t, e, k(e.value()), i, o, n),
            this.addFormatter(function (t) {
              return new p().format(t);
            });
        }
        function M(t, e, i, o, n, r) {
          (this._subControlIds = e),
            v.call(this, t, i, o, n, r),
            this._forEachSubControl(function (t) {
              this._attachToControl(t, o);
            });
        }
        function V(t, e, i, o, n, r, s) {
          (this._model = o),
            (this._mainSeries = r),
            (this._toIntTransformer = T(s)),
            (this._disabled = !1),
            v.call(this, t, e, i, o, n);
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
        function S(t, e, i, o, n, r, s) {
          v.call(this, t, e, i, o, n),
            (this._transform = r),
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
        function E(t, e, i, o, n, r, s, a) {
          v.call(this, t, e, o, n, r),
            (this._transformFunction = i),
            (this._propertyChangedHook = a),
            (this._setter = s);
          var l = this;
          o &&
            t.change(function () {
              l._setter
                ? l._setter.call(l, l.value())
                : l.setValueToProperty(l.value());
            });
        }
        function P(t, e) {
          v.call(this, t, e);
        }
        function O(t, e, i, o, n, r) {
          if (!t.is(':checkbox, :radio')) return new D(t, e, i, o, n);
          v.call(this, t, e, i, o, n), (this._setter = r);
          var s = this;
          i &&
            t.change(function () {
              s._setter
                ? s._setter.call(s, s.value())
                : s.setValueToProperty(s.value());
            });
        }
        function I(t, e, i, o, n, r) {
          v.call(this, t, e, i, o, n), (this._inverted = !0 === r);
        }
        function D(t, e, i, o, n) {
          v.call(this, t, e, i, o, n);
          var r = this;
          i &&
            t.click(function () {
              var t = $(this).toggleClass('active').hasClass('active');
              r.setValueToProperty(t);
            });
        }
        function F(t, e, i, o, n, r) {
          var s;
          (s = t.is('input') ? t : t.find('input')),
            v.call(this, s, e, i, o, n),
            (this._transparencyProperty = r),
            this.applyOldTransparency();
          var a = this;
          i &&
            s.change(function () {
              a.setValueToProperty(a.value());
            });
        }
        function R(e, i, o, n, r, s) {
          isNumber(i.value()) ||
            (g.logWarn(
              'Property cannot be binded to control, bad value (expect number): ' +
                i.value(),
            ),
            (i = new t())),
            v.call(this, e, i, o, n, r);
          var a = this;
          function l(t, e) {
            var i = a.control().slider('option', 'min'),
              o = a.control().slider('option', 'max'),
              n = a._property.value();
            ((i <= n && n <= o) || (i < e.value && e.value < o)) &&
              a.setValueToProperty(e.value);
          }
          function c(t, e) {
            a.setValueToProperty(e.value);
          }
          o &&
            (s
              ? (e.bind('slidechange', l), e.bind('slide', l))
              : (e.bind('slidechange', c), e.bind('slide', c))),
            e.bind('slidestart', function (t, e) {
              n.beginUndoMacro(r);
            }),
            e.bind('slidestop', function (t, e) {
              n.endUndoMacro();
            });
        }
        function A(t, e, i, o, n) {
          (this._control = t),
            (this._wv = e),
            (this._transformFunction = i),
            (this._undoModel = o),
            (this._undoText = n),
            this._attachToControl(this._control),
            (this._setValueBinded = this.setValue.bind(this));
        }
        function L(t, e, i, o, n, r) {
          (this._not = !!r), A.apply(this, arguments);
        }
        function H(t, e, i, o, n, r, s, a) {
          (this._propFrom = e[0]),
            (this._propTo = e[1]),
            (this._control = t),
            (this._applyOnFly = o),
            (this._undoModel = n),
            (this._undoText = s),
            (this._properties = e),
            (this._inputsText = r),
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
            r &&
              ($(r[0]).val(this._control.slider('values', 0)),
              $(r[1]).val(this._control.slider('values', 1)),
              t.slider({
                slide: function (t, e) {
                  $(r[0]).val(e.values[0]), $(r[1]).val(e.values[1]);
                },
              }),
              $(r).each(function () {
                $(this).on('keydown', function (t) {
                  parseInt($(r[0]).val()) < l._transformers[0]
                    ? $(r[0]).val(l._transformers[0])
                    : parseInt($(r[1]).val()) > l._transformers[1] &&
                      $(r[1]).val(l._transformers[1]),
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
              $(r[0]).on('keyup', function (t) {
                parseInt($(this).val()) < l._transformers[0]
                  ? $(this).val(l._transformers[0])
                  : parseInt($(this).val()) > l._transformers[1] &&
                    $(this).val(l._transformers[1]),
                  parseInt($(this).val()) > parseInt($(r[1]).val()) &&
                    $(this).val(r[1].val()),
                  l._control.slider('values', 0, $(this).val()),
                  H.prototype.setValueToProperty.call(
                    l,
                    l._control.slider('values'),
                    'from',
                  );
              }),
              $(r[1]).on('keyup', function (t) {
                parseInt($(this).val()) < l._transformers[0]
                  ? $(this).val(l._transformers[0])
                  : parseInt($(this).val()) > l._transformers[1] &&
                    $(this).val(l._transformers[1]),
                  parseInt($(this).val()) < $(r[0]).val() &&
                    $(this).val(r[0].val()),
                  l._control.slider('values', 1, $(this).val()),
                  H.prototype.setValueToProperty.call(
                    l,
                    l._control.slider('values'),
                    'to',
                  );
              })),
            this._propFrom
              .listeners()
              .subscribe(this, H.prototype.propertyChanged),
            this._propTo
              .listeners()
              .subscribe(this, H.prototype.propertyChanged),
            o &&
              t.on('slide', function (t, e) {
                l.setValueToProperty(l._control.slider('values'), e.handle);
              }),
            t.slider({
              stop: function (t, e) {
                r &&
                  ($(r[0]).val(l._control.slider('values', 0)),
                  $(r[1]).val(l._control.slider('values', 1))),
                  l.setValueToProperty(l._control.slider('values'), e.handle);
              },
              start: function (t, e) {
                r &&
                  ($(r[0]).val(l._control.slider('values', 0)),
                  $(r[1]).val(l._control.slider('values', 1))),
                  l.setValueToProperty(l._control.slider('values'), e.handle);
              },
            });
        }
        function B(t, e, i, o, n, r) {
          v.call(this, t, e, i, o, n), (this._separator = r || ' ');
          var s = this;
          i &&
            t.change(function () {
              s.setValueToProperty(s.value());
            });
        }
        (b.prototype.model = function () {
          return this._model;
        }),
          (b.prototype.bindControl = function (t) {
            return this._bindings.push(t), t;
          }),
          (b.prototype.unbindControl = function (t) {
            var e = this._bindings.indexOf(t);
            -1 !== e && this._bindings.splice(e, 1);
          }),
          (b.prototype.loadData = function () {
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
          (b.prototype.saveData = function () {
            this._model.beginUndoMacro();
            for (var t = 0; t < this._bindings.length; t++) {
              var e = this._bindings[t];
              e.changed() && this._model.setProperty(e.property(), e.value());
            }
            this._model.endUndoMacro();
          }),
          (b.prototype.createLineWidthEditor = function () {
            var t = this._model._chartWidget.widget().prop('ownerDocument');
            return $('<div class="linewidth-slider">', t).slider({
              max: 4,
              min: 1,
              step: 1,
            });
          }),
          (b.prototype.createColorPicker = function (t) {
            return f(null, t);
          }),
          (b.prototype.createTextEditor = function (t, e) {
            var i = {};
            return (
              t && (i.width = t),
              e && (i.height = e),
              $(document.createElement('textarea'))
                .css(i)
                .addClass('tv-control-input')
            );
          }),
          (b.prototype.createCombo = function (t) {
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
          (b.prototype.createKeyCombo = function (t) {
            var e = $(document.createElement('select'));
            return (
              $.each(t || [], function (t, i) {
                $(document.createElement('option'))
                  .prop({ value: t, text: i })
                  .appendTo(e);
              }),
              e
            );
          }),
          (b.prototype.createFontEditor = function (t) {
            var e =
              t ||
              TradingView.factoryDefaults('chartproperties.editorFontsList');
            return this.createCombo(e);
          }),
          (b.prototype.createFontSizeEditor = function (t) {
            var e = t || [10, 11, 12, 14, 16, 20, 24, 28, 32, 40];
            return this.createCombo(e).addClass('tv-select-container-fontsize');
          }),
          (b.prototype.createSeriesMinTickEditor = function () {
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
                {
                  priceScale: 32,
                  minMove: 1,
                  frac: !0,
                },
                { priceScale: 64, minMove: 1, frac: !0 },
                { priceScale: 128, minMove: 1, frac: !0 },
                { priceScale: 320, minMove: 1, frac: !0 },
              ];
            for (var i in e) {
              var o = e[i];
              t +=
                "<option value='" +
                (o.priceScale + ',' + o.minMove + ',' + o.frac) +
                "'>" +
                (o.minMove + '/' + o.priceScale) +
                '</option>';
            }
            return (t += '</select>'), $(t);
          }),
          (b.prototype.createPriceScaleStrategyEditor = function () {
            var t =
              m().reduce(function (t, e) {
                return (
                  t + "<option value='" + e.name + "'>" + e.title + '</option>'
                );
              }, '<select>') + '</select>';
            return $(t);
          }),
          (b.prototype.createPrecisionEditor = function () {
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
          (b.prototype.createLabeledCell = function (t, e, i) {
            var o,
              n,
              r = null;
            'number' == typeof t.valueOf()
              ? ((r = t), (o = e), (n = i))
              : ((o = t), (n = e)),
              (o += '');
            var s = this._labelToId(o),
              a = $('<td>');
            return (
              $('<label>')
                .html(o.length > 0 ? $.t(o) : '')
                .attr('for', s)
                .appendTo(a),
              r && a.attr('colspan', r),
              n && n.attr('id', s),
              a
            );
          }),
          (b.prototype.createTableInTable = function (t) {
            var e = $('<tr>').appendTo(t),
              i = $('<td>').appendTo(e);
            return $('<table cellpadding="0" cellspacing="0">').appendTo(i);
          }),
          (b.prototype._labelToId = function (t) {
            return (
              'control' +
              t.replace(/(^| )\w/g, function (t) {
                return '-' + t.trim().toLowerCase();
              }) +
              Math.floor(1e3 * Math.random())
            );
          }),
          (b.prototype.addRow = function (t) {
            return $(document.createElement('tr')).appendTo(t);
          }),
          (b.prototype.addLabeledRow = function (t, e, i, o) {
            var n = e && e.length > 0 ? $.t(e) : '',
              s = $(document.createElement('tr')),
              a = $(document.createElement('td')).html(n);
            if (
              (o && ((o = parseInt(o)), r(o) && (o = 2), a.attr('colspan', o)),
              i)
            ) {
              var l = this._labelToId(e);
              i.attr('id', l), a.html(_(n, l));
            }
            return s.append(a).appendTo(t);
          }),
          (b.prototype.addEditorRow = function (t, e, i, o) {
            var n = $(document.createElement('td'));
            return (
              (i.row = this.addLabeledRow(t, e, i, o)),
              i.appendTo(n.appendTo(i.row)),
              i
            );
          }),
          (b.prototype.addColorPickerRow = function (t, e) {
            return this.addEditorRow(t, e, this.createColorPicker());
          }),
          (b.prototype.addOffsetEditorRow = function (t, e) {
            var i = $('<input/>');
            return (
              i.attr('type', 'text'),
              i.css('width', '100px'),
              i.addClass('ticker'),
              this.addEditorRow(t, e, i)
            );
          }),
          (b.prototype.addFontEditorRow = function (t, e) {
            return this.addEditorRow(t, e, this.createFontEditor());
          }),
          (b.prototype.refreshStateControls = function (t, e, i) {
            for (var o = 0; o < e.length; o++) {
              var n = e[o],
                r = t[n.id];
              try {
                r.toggle(this.parseRule(n.visible, e, i));
              } catch (s) {
                continue;
              }
              r.attr('disabled', !this.parseRule(n.visible, e, i));
            }
          }),
          (b.prototype.parseRule = function (t, e, i) {
            if (!t) return !0;
            var o = t.split('==');
            return !(o.length < 2) && i[o[0]].value() === o[1];
          }),
          (b.prototype.destroy = function () {
            for (var t = this._bindings.length; t--; )
              this._bindings[t].destroy();
            this._bindings.length = 0;
          }),
          (b.prototype.bindInteger = function (t, e, i, o, n) {
            var r = [T(e.value())];
            void 0 !== o && r.push(y(1)),
              void 0 !== n && r.push(C(1e3)),
              this.bindControl(new w(t, e, r, !1, this.model(), i));
          }),
          (b.prototype.bindColor = function (t, e, i) {
            this.bindControl(new F(t, e, !0, this.model(), i));
          }),
          (b.prototype.bindBoolean = function (t, e, i) {
            this.bindControl(new O(t, e, !0, this.model(), i));
          }),
          inherit(w, v),
          (w.prototype.value = function () {
            var t = this._control.val();
            if (this._transformFunction)
              if (Array.isArray(this._transformFunction))
                for (var e = 0; e < this._transformFunction.length; e++)
                  t = this._transformFunction[e](t);
              else t = this._transformFunction(t);
            return t;
          }),
          (w.prototype.setValue = function (t) {
            var e = this._control.val(),
              i = this._formatValue(t);
            e !== i && this._control.val(i);
          }),
          (w.prototype.setValueToProperty = function (t) {
            this._setter
              ? this._setter.call(this, this.value())
              : this._undoModel.setProperty(this._property, t, this._undoText),
              (this._changed = !1);
          }),
          inherit(x, w),
          inherit(M, v),
          (M.prototype._forEachSubControl = function (t) {
            this._subControlIds.forEach(function (e) {
              var i = '#' + e,
                o = this.control().find(i);
              t.call(this, o);
            }, this);
          }),
          (M.prototype._parseSessions = function (t) {
            var e = t.split('-', 2);
            2 !== e.length && (e = ['0', '0']);
            var i = parseInt(e[0]),
              o = parseInt(e[1]);
            return [Math.floor(i / 100), i % 100, Math.floor(o / 100), o % 100];
          }),
          (M.prototype.value = function () {
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
              i = [T(0), y(0), C(23)],
              o = [T(0), y(0), C(59)];
            return e(t[0], i) + e(t[1], o) + '-' + e(t[2], i) + e(t[3], o);
          }),
          (M.prototype.setValue = function (t) {
            var e = this._parseSessions(t);
            this._forEachSubControl(function (t) {
              var i = t.val(),
                o = ('0' + e[0]).slice(-2);
              e.shift(), i !== o && t.val(o);
            });
          }),
          inherit(V, v),
          (V.prototype.value = function () {
            if (this._disabled) return this._control.attr('disabled', !0), null;
            var t = this._control.val(),
              e = this._toIntTransformer(t);
            e < 0 && (e = 0);
            var i = this._mainSeries.bars().size();
            return (
              i <= e && (e = i - 1),
              1e3 *
                n(
                  this._mainSeries
                    .bars()
                    .valueAt(n(this._mainSeries.bars().lastIndex()) - e),
                )[TradingView.TIME_PLOT]
            );
          }),
          (V.prototype.setValue = function (t) {
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
                var i = n(this._mainSeries.bars().lastIndex()) - e;
                this._control.val() !== i.toString() && this._control.val(i);
              } else this._disabled = !0;
            }
          }),
          inherit(S, v),
          (S.prototype.value = function () {
            return this._control.val();
          }),
          (S.prototype.setValue = function (t) {
            var e = this.value();
            this._transform && (t = this._transform(t)),
              t && e !== t && this._control.val(t);
          }),
          (S.prototype._updateDisplayedSymbol = function () {
            this.setValue(this._property.value());
          }),
          (S.prototype.destroy = function () {
            v.prototype.destroy.call(this),
              this._updateDelegate &&
                this._updateDelegate.unsubscribe(
                  this,
                  this._updateDisplayedSymbol,
                );
          }),
          inherit(E, v),
          (E.prototype.value = function () {
            var t = this._control.val();
            return (
              this._transformFunction && (t = this._transformFunction(t)), t
            );
          }),
          (E.prototype.setValue = function (t) {
            if ((this._control.val(t), this._control.selectbox))
              try {
                var e = this._control.find("[value='" + o(t) + "']");
                if (e.length > 0) {
                  var i = e[0];
                  this._control.selectbox('change', i.value, i.text);
                }
              } catch (n) {}
          }),
          (E.prototype.propertyChanged = function (t) {
            var e = t.value();
            'function' == typeof this._propertyChangedHook &&
              (e = this._propertyChangedHook(e)),
              this.setValue(e);
          }),
          inherit(P, v),
          (P.prototype.value = function () {
            return this._property.value();
          }),
          (P.prototype.setValue = function (t) {
            return this._control.html(t);
          }),
          inherit(O, v),
          (O.prototype.value = function () {
            return this.control().is(':checked');
          }),
          (O.prototype.setValue = function (t) {
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
                o = this.control().data('hides');
              if (o) o.closest('td').css(e);
              else {
                var n = this.control();
                n.parent()
                  .parent()
                  .data('visible', t)
                  .find('td')
                  .filter(function () {
                    var t = $(this);
                    return (
                      !t.find('label').length &&
                      t.find(':checkbox').attr('id') !== n.attr('id')
                    );
                  })
                  .each(function () {
                    var o = $(this);
                    o.children().each(function () {
                      var n = $(this);
                      n.is('.ui-slider')
                        ? n.slider(i)
                        : n.is('select')
                        ? (n.selectbox(i), o.css(e))
                        : n.is('.custom-select')
                        ? (n.data(i)(), o.css(e))
                        : n.is('.tvcolorpicker-container')
                        ? (n.find('input').prop('disabled', !t), o.css(e))
                        : (n.prop('disabled', !t), o.css(e));
                    });
                  });
              }
            }
            return this.control().attr('checked', !!t);
          }),
          (O.prototype.destroy = function () {
            v.prototype.destroy.call(this), this._control.off('change');
          }),
          inherit(I, v),
          (I.prototype.value = function () {
            return this.control().is(':disabled');
          }),
          (I.prototype.setValue = function (t) {
            return (
              (t = Boolean(t)),
              this._inverted && (t = !t),
              this.control().parents('label').toggleClass('disabled', t),
              this.control().attr('disabled', t)
            );
          }),
          inherit(D, v),
          (D.prototype.value = function () {
            return this.control().hasClass('active');
          }),
          (D.prototype.setValue = function (t) {
            return this.control().toggleClass('active', !!t);
          }),
          inherit(F, v),
          (F.prototype.applyOldTransparency = function () {
            if (this.transparencyProperty()) {
              if (d.isHexColor(this.property().value())) {
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
          (F.prototype.transparencyProperty = function () {
            return this._transparencyProperty;
          }),
          (F.prototype.value = function () {
            return this._control.val();
          }),
          (F.prototype.setValue = function (t) {
            this._control.val(t),
              this._control.change(),
              this._control.color && this._control.color.fromString(t);
          }),
          inherit(R, v),
          (R.prototype.value = function () {
            return this._control.slider('option', 'value');
          }),
          (R.prototype.setValue = function (t) {
            this._control.slider('option', 'value', t);
          }),
          (A.prototype._attachToControl = function (t) {
            var e = this;
            this._wv.subscribe(this._setValueBinded, { callWithLast: !0 }),
              $(this._control).on('change', function () {
                e.setValueToProperty(e.value());
              });
          }),
          (A.prototype.control = function () {
            return this._control;
          }),
          (A.prototype.value = function () {
            var t = $(this._control).val();
            return (
              this._transformFunction && (t = this._transformFunction(t)), t
            );
          }),
          (A.prototype.setValue = function (t) {
            $(this._control).val(t);
          }),
          (A.prototype.setValueToProperty = function (t) {
            this._undoModel.undoHistory.setWatchedValue(
              this._wv,
              t,
              this._undoText,
            );
          }),
          (A.prototype.watchedValue = function () {
            return this._wv;
          }),
          (A.prototype.destroy = function () {
            this._wv.unsubscribe(this._setValueBinded);
          }),
          inherit(L, A),
          (L.prototype._attachToControl = function (t) {
            var e = this;
            this._wv.subscribe(this.setValue.bind(this), { callWithLast: !0 }),
              $(this._control).on('click', function () {
                e.setValueToProperty(e.value());
              });
          }),
          (L.prototype.value = function () {
            var t = $(this._control).attr('checked');
            return (
              this._not && (t = !t),
              this._transformFunction && (t = this._transformFunction(t)),
              t
            );
          }),
          (L.prototype.setValue = function (t) {
            this._not && (t = !t), $(this._control).attr('checked', !!t);
          }),
          (H.prototype.properties = function () {
            return this._properties;
          }),
          (H.prototype.value = function (t) {
            return this._control.slider('values', t);
          }),
          (H.prototype.setValue = function (t, e) {
            void 0 === e &&
              (t === this._propFrom && (e = 0), t === this._propTo && (e = 1)),
              this._control.slider('values', e, t.value()),
              this._inputsText && $(this._inputsText[e]).val(t.value());
          }),
          (H.prototype.propertyChanged = function (t) {
            this.setValue(t);
          }),
          (H.prototype.setValueToProperty = function (t, e) {
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
          (H.prototype.destroy = function () {
            this._propFrom &&
              this._propTo &&
              (this._propFrom
                .listeners()
                .unsubscribe(this, v.prototype.propertyChanged),
              this._propTo
                .listeners()
                .unsubscribe(this, v.prototype.propertyChanged));
          }),
          inherit(B, v),
          (B.prototype.value = function () {
            var t = [];
            return (
              this._control.each(function () {
                var e = $(this);
                e.is(':checked') && t.push(e.attr('value'));
              }),
              t.join(this._separator)
            );
          }),
          (B.prototype.setValue = function (t) {
            var e = t.split(this._separator).filter(Boolean);
            this._control.each(function () {
              var t = $(this),
                i = -1 !== e.indexOf(t.attr('value'));
              t.attr('checked', i), t.parents('label').toggleClass('active', i);
            });
          }),
          (e.PropertyPage = b),
          (e.UppercaseTransformer = function (t) {
            return t.toUpperCase();
          }),
          (e.GreateTransformer = y),
          (e.LessTransformer = C),
          (e.ToIntTransformer = T),
          (e.ToFloatTransformer = k),
          (e.ToFloatTransformerWithDynamicDefaultValue = function (t) {
            var e = new p();
            return function (i) {
              var o = e.parse(i);
              return r(o) ? t() : o;
            };
          }),
          (e.ToFloatLimitedPrecisionTransformer = function (t, e) {
            var i = new h(e);
            return function (e) {
              var o = i.format(e);
              return r(o) ? t : o;
            };
          }),
          (e.ReplaceEmptyTransformer = function (t) {
            return function (e) {
              return 0 === e.length ? t : e;
            };
          }),
          (e.SymbolInfoSymbolTransformer = function (t, e) {
            return function (i) {
              var o = t();
              return i === e.value() && o && (o.ticker || o.full_name)
                ? o.ticker || o.full_name
                : i;
            };
          }),
          (e.SimpleStringBinder = w),
          (e.FloatBinder = x),
          (e.SessionBinder = M),
          (e.BarTimeBinder = V),
          (e.SymbolBinder = S),
          (e.SimpleComboBinder = E),
          (e.StaticContentBinder = P),
          (e.BooleanBinder = O),
          (e.DisabledBinder = I),
          (e.ColorBinding = F),
          (e.SliderBinder = R),
          (e.CheckboxWVBinding = L),
          (e.RangeBinder = H),
          (e.generateLabelElementStr = _);
      }.call(this, i('tc+8')));
    },
    QBwY: function (t, e, i) {
      var o, n, r;
      (n = [i('P5fv'), i('iGnl'), i('vBzC'), i('Qwlt'), i('MIQu')]),
        void 0 ===
          (r =
            'function' ==
            typeof (o = function (t) {
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
                    o = this.options,
                    n = this.element.find('.ui-slider-handle'),
                    r = [];
                  for (
                    i = (o.values && o.values.length) || 1,
                      n.length > i &&
                        (n.slice(i).remove(), (n = n.slice(0, i))),
                      e = n.length;
                    e < i;
                    e++
                  )
                    r.push("<span tabindex='0'></span>");
                  (this.handles = n.add(t(r.join('')).appendTo(this.element))),
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
                    o,
                    n,
                    r,
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
                    (o = this._normValueFromMouse(i)),
                    (n = this._valueMax() - this._valueMin() + 1),
                    this.handles.each(function (e) {
                      var i = Math.abs(o - c.values(e));
                      (n > i ||
                        (n === i &&
                          (e === c._lastChangedValue ||
                            c.values(e) === u.min))) &&
                        ((n = i), (r = t(this)), (s = e));
                    }),
                    !1 !== this._start(e, s) &&
                      ((this._mouseSliding = !0),
                      (this._handleIndex = s),
                      this._addClass(r, null, 'ui-state-active'),
                      r.trigger('focus'),
                      (a = r.offset()),
                      (l = !t(e.target)
                        .parents()
                        .addBack()
                        .is('.ui-slider-handle')),
                      (this._clickOffset = l
                        ? { left: 0, top: 0 }
                        : {
                            left: e.pageX - a.left - r.width() / 2,
                            top:
                              e.pageY -
                              a.top -
                              r.height() / 2 -
                              (parseInt(r.css('borderTopWidth'), 10) || 0) -
                              (parseInt(r.css('borderBottomWidth'), 10) || 0) +
                              (parseInt(r.css('marginTop'), 10) || 0),
                          }),
                      this.handles.hasClass('ui-state-hover') ||
                        this._slide(e, s, o),
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
                  var e, i, o, n, r;
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
                    (o = i / e) > 1 && (o = 1),
                    o < 0 && (o = 0),
                    'vertical' === this.orientation && (o = 1 - o),
                    (n = this._valueMax() - this._valueMin()),
                    (r = this._valueMin() + o * n),
                    this._trimAlignValue(r)
                  );
                },
                _uiHash: function (t, e, i) {
                  var o = {
                    handle: this.handles[t],
                    handleIndex: t,
                    value: void 0 !== e ? e : this.value(),
                  };
                  return (
                    this._hasMultipleValues() &&
                      ((o.value = void 0 !== e ? e : this.values(t)),
                      (o.values = i || this.values())),
                    o
                  );
                },
                _hasMultipleValues: function () {
                  return this.options.values && this.options.values.length;
                },
                _start: function (t, e) {
                  return this._trigger('start', t, this._uiHash(e));
                },
                _slide: function (t, e, i) {
                  var o,
                    n = this.value(),
                    r = this.values();
                  this._hasMultipleValues() &&
                    ((o = this.values(e ? 0 : 1)),
                    (n = this.values(e)),
                    2 === this.options.values.length &&
                      !0 === this.options.range &&
                      (i = 0 === e ? Math.min(o, i) : Math.max(o, i)),
                    (r[e] = i)),
                    i !== n &&
                      !1 !== this._trigger('slide', t, this._uiHash(e, i, r)) &&
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
                  var o, n, r;
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
                    o = this.options.values, n = arguments[0], r = 0;
                    r < o.length;
                    r += 1
                  )
                    (o[r] = this._trimAlignValue(n[r])), this._change(null, r);
                  this._refreshValue();
                },
                _setOption: function (e, i) {
                  var o,
                    n = 0;
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
                      (n = this.options.values.length),
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
                        this._animateOff = !0, this._refreshValue(), o = n - 1;
                        o >= 0;
                        o--
                      )
                        this._change(null, o);
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
                  var e, i, o;
                  if (arguments.length)
                    return (
                      (e = this.options.values[t]),
                      (e = this._trimAlignValue(e))
                    );
                  if (this._hasMultipleValues()) {
                    for (
                      i = this.options.values.slice(), o = 0;
                      o < i.length;
                      o += 1
                    )
                      i[o] = this._trimAlignValue(i[o]);
                    return i;
                  }
                  return [];
                },
                _trimAlignValue: function (t) {
                  if (t <= this._valueMin()) return this._valueMin();
                  if (t >= this._valueMax()) return this._valueMax();
                  var e = this.options.step > 0 ? this.options.step : 1,
                    i = (t - this._valueMin()) % e,
                    o = t - i;
                  return (
                    2 * Math.abs(i) >= e && (o += i > 0 ? e : -e),
                    parseFloat(o.toFixed(5))
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
                    o,
                    n,
                    r,
                    s = this.options.range,
                    a = this.options,
                    l = this,
                    c = !this._animateOff && a.animate,
                    u = {};
                  this._hasMultipleValues()
                    ? this.handles.each(function (o) {
                        (i =
                          ((l.values(o) - l._valueMin()) /
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
                              ? (0 === o &&
                                  l.range
                                    .stop(1, 1)
                                    [c ? 'animate' : 'css'](
                                      { left: i + '%' },
                                      a.animate,
                                    ),
                                1 === o &&
                                  l.range[c ? 'animate' : 'css'](
                                    { width: i - e + '%' },
                                    { queue: !1, duration: a.animate },
                                  ))
                              : (0 === o &&
                                  l.range
                                    .stop(1, 1)
                                    [c ? 'animate' : 'css'](
                                      { bottom: i + '%' },
                                      a.animate,
                                    ),
                                1 === o &&
                                  l.range[c ? 'animate' : 'css'](
                                    { height: i - e + '%' },
                                    { queue: !1, duration: a.animate },
                                  ))),
                          (e = i);
                      })
                    : ((o = this.value()),
                      (n = this._valueMin()),
                      (r = this._valueMax()),
                      (i = r !== n ? ((o - n) / (r - n)) * 100 : 0),
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
                        this.range.stop(1, 1)[c ? 'animate' : 'css'](
                          {
                            width: 100 - i + '%',
                          },
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
                      o,
                      n,
                      r = t(e.target).data('ui-slider-handle-index');
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
                            !1 === this._start(e, r)))
                        )
                          return;
                    }
                    switch (
                      ((n = this.options.step),
                      (i = o = this._hasMultipleValues()
                        ? this.values(r)
                        : this.value()),
                      e.keyCode)
                    ) {
                      case t.ui.keyCode.HOME:
                        o = this._valueMin();
                        break;
                      case t.ui.keyCode.END:
                        o = this._valueMax();
                        break;
                      case t.ui.keyCode.PAGE_UP:
                        o = this._trimAlignValue(
                          i +
                            (this._valueMax() - this._valueMin()) /
                              this.numPages,
                        );
                        break;
                      case t.ui.keyCode.PAGE_DOWN:
                        o = this._trimAlignValue(
                          i -
                            (this._valueMax() - this._valueMin()) /
                              this.numPages,
                        );
                        break;
                      case t.ui.keyCode.UP:
                      case t.ui.keyCode.RIGHT:
                        if (i === this._valueMax()) return;
                        o = this._trimAlignValue(i + n);
                        break;
                      case t.ui.keyCode.DOWN:
                      case t.ui.keyCode.LEFT:
                        if (i === this._valueMin()) return;
                        o = this._trimAlignValue(i - n);
                    }
                    this._slide(e, r, o);
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
              ? o.apply(e, n)
              : o) || (t.exports = r);
    },
    'Y+MS': function (t, e, i) {
      'use strict';
      var o = (function () {
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
              i = function (o) {
                return (
                  $(t).off('mousemove mouseup', e),
                  $(t).off('mouseup', i),
                  this.mouseupHandler(o)
                );
              }.bind(this);
            this.$el.on(
              'mousedown',
              function (o) {
                (this.mouseFlag = !0),
                  $(t).on('mousemove mouseup', e),
                  $(t).on('mouseup', i),
                  o.preventDefault();
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
      t.exports = o;
    },
    bR4N: function (t, e, i) {
      'use strict';
      var o = i('wmOI').ESC,
        n = i('0waE').guid,
        r = i('jAh7').getRootOverlapManager;
      i('eL+L');
      var s = function (t, e, a) {
        var l, c;
        (t = $(t)),
          ((a = a || {}).activeClass = a.activeClass || ''),
          (l = (a.event || 'click') + '.popup-menu'),
          a.hideEvent && (c = a.hideEvent + '.popup-menu');
        var u = function () {},
          p = u,
          h = {},
          d = function (l, d, f) {
            var v = n(),
              g = l.target.ownerDocument,
              m = g.defaultView,
              _ = r(g),
              b = d || e;
            if (
              ('function' == typeof b && (b = b()),
              $(this).hasClass('open') || $(this).hasClass('active'))
            )
              return l.preventDefault(), p(), void (P = h.scrollTop);
            function y(e) {
              var i = $(e.target).parents().andSelf();
              i.is(k) ||
                i.is(t) ||
                i.is('.charts-popup-tab-headers, .charts-popup-itemheader') ||
                p();
            }
            function C(t) {
              if (h.preventFirstProcessClick) h.preventFirstProcessClick = !1;
              else {
                var e = $(t.target).parents().andSelf();
                e.is('.charts-popup-tab-headers, .charts-popup-itemheader') ||
                  (a.notCloseOnButtons && e.is('.icon-delete')) ||
                  p();
              }
            }
            function T(t) {
              t.keyCode === o && p();
            }
            (p = function () {
              (h.scrollTop = k.scrollTop()),
                k.remove(),
                _.removeWindow(v),
                t.removeClass('active open ' + a.activeClass),
                t.data('popup-menu', null),
                $(g).off('click', C),
                $(g).off('mousedown', y),
                Modernizr.mobiletouch && $(g).off('touchstart.chartgui', y),
                $(g).off('selectstart..popup-menu'),
                g.removeEventListener('keydown', T, !1),
                (p = u),
                a.onRemove && a.onRemove();
            }),
              t.addClass('active open ' + a.activeClass);
            var k = $('<div class="charts-popup-list">');
            a.addClass && k.addClass(a.addClass),
              a.zIndex && k.css('z-index', a.zIndex);
            var w = k;
            a.listInner && (w = $('<div class="list-inner">').appendTo(w)),
              a.listTable && (w = $('<div class="list-table">').appendTo(w)),
              $.each(b, function (e) {
                !(function e(o, n, r) {
                  if (o instanceof s.TabGroup) {
                    if (!o.tabs || !o.tabs.length) return;
                    if (1 === o.tabs.length && !o.tabs[0].title)
                      return void $.each(o.tabs[0].items, function () {
                        e(this, void 0, r);
                      });
                    var l = $(
                        '<div class="charts-popup-tab-group"></div>',
                      ).appendTo(r),
                      c = $(
                        '<div class="charts-popup-tab-headers"></div>',
                      ).appendTo(l),
                      u = null;
                    $.each(o.tabs || [], function (t, i) {
                      if (i.items && i.items.length) {
                        var n = $('<div class="charts-popup-tab"></div>')
                          .hide()
                          .appendTo(l);
                        $.each(i.items, function () {
                          e(this, void 0, n);
                        });
                        var r = $('<span class="charts-popup-tab-header">')
                          .append(
                            $(
                              '<a href="javascript://" class="charts-popup-tab-header-label">',
                            ).text(i.name),
                          )
                          .appendTo(c);
                        r.on('click', function (t) {
                          r.is('.active') ||
                            (c
                              .find('.charts-popup-tab-header.active')
                              .removeClass('active'),
                            r.addClass('active'),
                            l.find('.charts-popup-tab').hide(),
                            n.show(),
                            t && t.preventDefault(),
                            'function' == typeof o.onChange &&
                              o.onChange.call(o, i.name));
                        }),
                          (u && !i.active) ||
                            ((u = r),
                            c
                              .find('.charts-popup-tab-header.active')
                              .removeClass('active'),
                            r.addClass('active'),
                            l.find('.charts-popup-tab').hide(),
                            n.show());
                      }
                    });
                  } else if (o instanceof s.Group) {
                    var p = $(
                      '<div class="charts-popup-group"></div>',
                    ).appendTo(r);
                    if (o.title) {
                      var h = $('<div class="charts-popup-itemheader"></div>')
                        .text(o.title)
                        .prepend(
                          $(
                            '<span class="charts-popup-itemheader-icon"></span>',
                          ),
                        );
                      o.collapsible &&
                        (p.addClass('charts-popup-group-collapsible'),
                        p.toggleClass('collapsed', o.collapsed),
                        h.on('click', function () {
                          p.toggleClass('collapsed'),
                            'function' == typeof o.onChange &&
                              o.onChange(p.hasClass('collapsed')),
                            k.height() === parseInt(k.css('max-height'))
                              ? k.addClass('popup-menu-scroll-y')
                              : k.height() < parseInt(k.css('max-height')) &&
                                k.removeClass('popup-menu-scroll-y');
                        })),
                        p.append(h);
                    }
                    $.each(o.items, function (t) {
                      e(this, 1, p);
                    });
                  } else if (o instanceof s.Header)
                    r.append(
                      $('<div class="charts-popup-itemheader"></div>').text(
                        o.title,
                      ),
                    );
                  else if (o.separator) {
                    var d = $('<span class="separator"></span>');
                    r.append(d);
                  } else {
                    var f;
                    d = $('<a class="item">');
                    if (
                      (o.url && d.attr('href', o.url),
                      o.target && d.attr('target', o.target),
                      n || d.addClass('first'),
                      'function' == typeof o.active
                        ? o.active(o) && d.addClass('active')
                        : o.active && d.addClass('active'),
                      o.addClass && d.addClass(o.addClass),
                      o.addData && d.data(o.addData),
                      o.disabled && d.addClass('disabled'),
                      'function' == typeof o.action)
                    ) {
                      var v = o.action,
                        g = function (t) {
                          var e = $(t.target).parents().andSelf();
                          e.is(C) ||
                            (v.apply(d, arguments),
                            !o.url &&
                              t &&
                              'function' == typeof t.preventDefault &&
                              t.preventDefault());
                        };
                      a.upAction ? d.bind('mouseup', g) : d.bind('click', g);
                    }
                    if (o.date)
                      (f = $('<span class="title"></span>').appendTo(d)),
                        $('<span class="date"></span>')
                          .text(o.date || '')
                          .appendTo(d);
                    else if (o.icon && !a.svg) {
                      var m = $('<span class="icon"></span>').appendTo(d);
                      m.css('background-image', o.icon.image || ''),
                        o.icon.offset &&
                          m.css(
                            'background-position',
                            'string' == typeof o.icon.offset
                              ? o.icon.offset
                              : o.icon.offset.x +
                                  'px ' +
                                  o.icon.offset.y +
                                  'px',
                          ),
                        (f = $('<span class="title"></span>').appendTo(d));
                    } else
                      !0 === a.svg && o.svg
                        ? (a.wrapIcon
                            ? d.append(
                                $('<span class="icon-wrap">')
                                  .addClass(o.iconClass)
                                  .append(o.svg),
                              )
                            : d.append(o.svg),
                          (f = $('<span class="title"></span>').appendTo(d)))
                        : o.iconClass
                        ? (d.append(
                            $('<span class="icon"></span>').addClass(
                              o.iconClass,
                            ),
                          ),
                          (f = $('<span class="title"></span>').appendTo(d)))
                        : (f = $(
                            '<span class="title-expanded"></span>',
                          ).appendTo(d));
                    o.html
                      ? f.html(o.html)
                      : f.text(TradingView.clean(o.title, !0) || '');
                    var _ = $('<span class="shortcut"></span>').appendTo(d);
                    if (
                      (o.shortcut && _.text(o.shortcut.keys),
                      'function' == typeof o.deleteAction)
                    ) {
                      var b = o.deleteAction,
                        y = o.deleteAction.title || $.t('Delete'),
                        C = $('<span class="icon-delete">');
                      C.html(i('uo4K')),
                        C.attr('title', y),
                        C.on('click', function (t) {
                          b.apply(d, arguments), t.preventDefault();
                        }),
                        d.append(C);
                    }
                    if (
                      (o.buttons instanceof Array &&
                        o.buttons.length &&
                        o.buttons.forEach(function (t) {
                          t.el instanceof $ || (t.el = $(t.el)),
                            t.el.appendTo(d),
                            t.handler &&
                              t.el.on('click', function (e) {
                                t.handler.apply(d, arguments);
                              });
                        }),
                      void 0 !== o.counter)
                    )
                      if ('function' == typeof o.counter) {
                        $('<span class="counter"></span>')
                          .html(o.counter())
                          .appendTo(d);
                      } else {
                        var T = o.counterBlue ? 'blue' : '';
                        $('<span class="counter"></span>')
                          .text(o.counter + '')
                          .addClass(T)
                          .appendTo(d);
                      }
                    o.name && d.attr('data-name', o.name),
                      r.append(d),
                      t.data('popup-menu', r);
                  }
                })(this, e, w);
              }),
              c || (h.preventFirstProcessClick = !0),
              $(g).on('click', C),
              $(g).on('mousedown', y),
              g.addEventListener('keydown', T, !1),
              Modernizr.mobiletouch && $(g).on('touchstart.chartgui', y),
              a.upAction &&
                $(g).on('selectstart.popup-menu', function () {
                  return !1;
                }),
              k.appendTo(_.ensureWindow(v));
            var x = g.documentElement.clientWidth,
              M = g.documentElement.clientHeight,
              V = t.outerWidth(),
              S = t.outerHeight(),
              E = t.offset(),
              P = $(m).scrollTop() || 0;
            (E.top -= P),
              (E.top = Math.round(E.top)),
              (E.left = Math.round(E.left));
            var O = k.outerWidth(),
              I = k.outerHeight(),
              D = void 0 !== a.viewportSpacing ? a.viewportSpacing : 10,
              F = a.popupSpacing ? ~~a.popupSpacing : 1,
              R = a.popupDrift ? ~~a.popupDrift : 0,
              A = I - k.height(),
              L = 'down';
            a.direction &&
              (L =
                'function' == typeof a.direction ? a.direction() : a.direction);
            var H = !!a.reverse;
            if ('down' === L) {
              var B = M - E.top - S - F - D - A,
                z = E.top - F - D - A;
              B < Math.max(I || 0, 100) && z > B && (L = 'up');
            } else if ('right' === L) {
              var N = x - E.left - V - F - D - A,
                W = E.left - F - D - A;
              N < Math.max(O || 0, 100) && W > N && (L = 'left');
            }
            switch (L) {
              case 'down':
              case 'up':
                'down' === L
                  ? k.css('top', E.top + S + F + 'px')
                  : k.css('bottom', M - E.top + F + 'px').css('top', 'auto'),
                  H
                    ? k
                        .css('left', Math.max(E.left + R + V - O, D) + 'px')
                        .css('right', 'auto')
                    : k.css('left', E.left + R + 'px').css('right', 'auto');
                break;
              case 'right':
              case 'left':
                (F = Math.max(F, 4)),
                  'right' === L
                    ? k
                        .css('left', Math.floor(E.left + V + F) + 'px')
                        .css('right', 'auto')
                    : k
                        .css(
                          'left',
                          Math.floor(Math.max(E.left - O - F, D)) + 'px',
                        )
                        .css('right', 'auto'),
                  H
                    ? k.css(
                        'top',
                        Math.floor(Math.max(E.top + R + S - I, D)) + 'px',
                      )
                    : k.css('top', Math.floor(E.top + R) + 'px');
            }
            k.show();
            var G = E.top;
            if (
              ('up' === L || ({ left: 1, right: 1 }[L] && H)
                ? 'up' !== L
                  ? (G += S)
                  : (G -= S + F + A + D)
                : (G = M - G - S - 2 * F - A),
              k.height() > G && k.addClass('popup-menu-scroll-y'),
              k.css('max-height', G + 'px'),
              a.careRightBorder)
            ) {
              var U = x + $(m).scrollLeft();
              parseInt(k.css('left')) + k.width() + D > U &&
                k.css('left', U - k.width() - D + 'px').css('right', 'auto');
            }
            a.careBottomBorder &&
              parseInt(k.css('top')) + k.height() + D > M + P &&
              k.css('top', M - k.height() - D + P + 'px');
            var j = k.offset();
            k.css({
              position: 'fixed',
              left: j.left - $(g).scrollLeft(),
              right: 'auto',
            }),
              k[0].scrollHeight > k.height() && k.addClass('popup-with-scroll'),
              l && l.preventDefault();
          };
        l && t.bind(l, d),
          c &&
            t.bind(c, function () {
              p();
            }),
          a.runOpened && d();
      };
      (s.TabGroup = function t(e) {
        if (!(this instanceof t)) return new t(e);
        (e = e || {}),
          (this.tabs = []),
          'function' == typeof e.onChange && (this.onChange = e.onChange);
      }),
        (s.TabGroup.prototype.appendTab = function (t, e, i) {
          if (
            (null == t ? (t = '') : (t += ''),
            e || (e = []),
            i || (i = {}),
            !Array.isArray(e))
          )
            throw new TypeError('items must be an array');
          return this.tabs.push({ name: t, items: e, active: !!i.active }), e;
        }),
        (s.Header = function t(e) {
          if (!(this instanceof t)) return new t(e);
          this.title = e;
        }),
        (s.Group = function t(e) {
          if (!(this instanceof t)) return new t(e);
          (e = e || {}),
            (this.items = []),
            (this.title = null == e.title ? '' : e.title + ''),
            (this.collapsible = !!e.collapsible),
            (this.collapsed = !!e.collapsed),
            'function' == typeof e.onChange && (this.onChange = e.onChange);
        }),
        (s.Group.prototype.push = function () {
          this.items.push.apply(this.items, arguments);
        }),
        (e.bindPopupMenu = s);
      e.unbindPopupMenu = function (t) {
        (t = $(t)).unbind('.popup-menu'), t.removeData('popup-menu');
      };
    },
    'd2+F': function (t, e, i) {
      'use strict';
      i('zNST'), i('utoz'), i('pay7');
      var o = i('eJTA'),
        n = o.rgba,
        r = o.areEqualRgb,
        s = o.areEqualRgba,
        a = o.normalizeHue,
        l = o.normalizeHsvSaturation,
        c = o.normalizeValue,
        u = o.hsv,
        p = o.rgbToHsv,
        h = o.hsvToRgb,
        d = o.rgbToString,
        f = o.rgbaToString,
        v = o.parseRgb,
        g = o.parseRgba,
        m = i('Y+MS'),
        _ = i('wmOI').ESC;
      !(function (t) {
        if (!t) throw new Error('This program cannot be run in DOS mode');
        (b.setCustomColors = o), (t.fn.tvcolorpicker = b);
        var e = [];
        function i(t) {
          return '' === t ? t : f(g(t));
        }
        function o(t) {
          t && (t.join || (t = t ? ('' + t).split(',') : []), (e = t));
        }
        function b(y) {
          var C;
          function T(e, i, o) {
            var r = t(this);
            (e = f(n(v(e), i))),
              $.call(this, e),
              r
                .removeData('tvcolorpicker')
                .removeData('tvcolorpicker-custom-color'),
              o && (M.call(r), r.blur());
          }
          function $(e) {
            var i = t(this);
            i.val(e),
              i.change(),
              e ? i.trigger('pick-color', e) : i.trigger('pick-transparent'),
              k.call(this, e);
          }
          function k(e) {
            '' !== e
              ? (t(this).removeClass('tvcolorpicker-gradient-widget'),
                t(this).css({ backgroundColor: e, color: e }))
              : t(this).addClass('tvcolorpicker-gradient-widget');
          }
          function w(e, i) {
            i = i || {};
            var o,
              n = this,
              s = n.prop('ownerDocument'),
              a = t(n).val().toLowerCase(),
              l = s.createElement('table'),
              c = s.createElement('tbody');
            l.appendChild(c);
            var u = 0;
            return (
              t.each(e, function (e, s) {
                u++, e % 10 == 0 && (o = t('<tr></tr>').appendTo(c));
                var l = t('<td class="tvcolorpicker-cell"></td>').appendTo(o),
                  p = t(
                    '<div class="tvcolorpicker-transparency"><div class="tvcolorpicker-swatch"></div></div>',
                  )
                    .appendTo(l)
                    .find('.tvcolorpicker-swatch')
                    .data('color', s);
                i.addClass && p.addClass(i.addClass),
                  s &&
                    ((s = s.toLowerCase()),
                    a && r(v(a), v(s)) && p.addClass('active'),
                    p.css({ backgroundColor: s }).data('color', s),
                    p.bind('click', function () {
                      T.call(n, s, C.val(), !0);
                    }));
              }),
              t(l).addClass('tvcolorpicker-table'),
              u ? l : t()
            );
          }
          function x(i) {
            var o = !1,
              r = t(this),
              _ = r.prop('ownerDocument'),
              b = t('<div class="tvcolorpicker-popup opened">'),
              y = t('<div class="tvcolorpicker-swatches-area"></div>').appendTo(
                b,
              );
            y.append(
              w.call(this, [
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
                w.call(this, [
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
                w.call(this, [
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
            var k = t('<div class="tvcolorpicker-custom-area"></div>')
                .css({ display: 'none' })
                .appendTo(b),
              x = t('<div class="tvcolorpicker-hsv"></div>').appendTo(k),
              M = t('<div class="tvcolorpicker-hs"></div>').appendTo(x),
              S = t('<div class="tvcolorpicker-hs-handle"></div>').appendTo(M),
              E = t('<div class="tvcolorpicker-hs-area"></div>').appendTo(M),
              P = t('<div class="tvcolorpicker-vv">').appendTo(x),
              O = t('<div class="tvcolorpicker-v"></div>').appendTo(P),
              I = t('<div class="tvcolorpicker-v-handle"></div>').appendTo(O),
              D = t('<div class="tvcolorpicker-v-area"></div>').appendTo(O);
            (C = m(t(this), i.hideTransparency)).initEvents(),
              C.updateColor(),
              C.$el.appendTo(b),
              C.val(g(r.val() || 'rgb(14, 15, 16)')[3]);
            var F = M.height(),
              R = M.width(),
              A = !1,
              L = !1,
              H = !0,
              B = [0, 0, 0.5];
            function z(t) {
              var e = t.originalEvent,
                i =
                  t.offsetX || t.layerX || (e && (e.offsetX || e.layerX)) || 0,
                o =
                  t.offsetY || t.layerY || (e && (e.offsetY || e.layerY)) || 0;
              S.css({ left: i + 'px', top: o + 'px' }),
                (B[0] = a(i / R)),
                (B[1] = l(1 - o / F)),
                O.css({ backgroundColor: d(h(u(B[0], B[1], 1))) }),
                U();
            }
            function N(e) {
              1 == e.which &&
                ((A = !1), b.is('.opened') && t(r).get(0).focus());
            }
            function W(e) {
              var i = (function (e) {
                var i = e.pageY,
                  o = t(D),
                  n = i - o.offset().top;
                return n > o.height() ? o.height() : n < 0 ? 0 : n;
              })(e);
              I.css({ top: i + 'px' }),
                (B[2] = c(1 - Math.max(0, Math.min(i, F)) / F)),
                U();
            }
            function G(e) {
              1 == e.which &&
                ((L = !1),
                t(_).unbind('mouseup', G),
                b.is('.opened') && t(r).get(0).focus());
            }
            function U() {
              H &&
                ((H = !1),
                b.find('.tvcolorpicker-swatch.active').removeClass('active'));
              var t = n(h(B), C.val());
              if (!s(g(r.val().toUpperCase()), t)) {
                var e = f(t);
                r.data('tvcolorpicker-custom-color', e), $.call(r, e);
              }
            }
            E.bind('mousedown', function (e) {
              1 == e.which &&
                ((A = !0), t(_).bind('mouseup', N), z(e), e.preventDefault());
            }),
              E.bind('mousemove', function (t) {
                A && (z(t), t.preventDefault());
              }),
              t(C).on(
                'change',
                function () {
                  o
                    ? U()
                    : T.call(this, t(this).val() || 'rgb(14, 15, 16)', C.val());
                }.bind(this),
              ),
              t(C).on(
                'afterChange',
                function () {
                  t(this).focus();
                }.bind(this),
              ),
              P.bind('mousedown', function (e) {
                1 == e.which &&
                  ((L = !0), t(_).bind('mouseup', G), W(e), e.preventDefault());
              }),
              t(_).bind('mousemove', function (t) {
                L && (W(t), t.preventDefault());
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
                    k.css({
                      minWidth: y.width() + 'px',
                      minHeight: y.height() + 'px',
                    }),
                  t(this)[e ? 'removeClass' : 'addClass']('active'),
                  (o = t(this).is('.active')),
                  k.css({ display: e ? 'none' : 'block' }),
                  y.css({ display: e ? 'block' : 'none' }),
                  e)
                )
                  r.removeData('tvcolorpicker-custom-color');
                else {
                  (F = M.height()), (R = M.width());
                  var i = v(r.val() || 'rgb(14, 15, 16)');
                  (B = p(i)),
                    S.css({
                      left: ~~(B[0] * R) + 'px',
                      top: ~~((1 - B[1]) * F) + 'px',
                    }),
                    I.css({ top: ~~((1 - B[2]) * F) + 'px' }),
                    O.css({ backgroundColor: d(h(u(B[0], B[1], 1))) });
                }
              });
            return (
              b.append(
                t(w.call(this, e, { addClass: 'tvcolorpicker-user' })).addClass(
                  'tvcolorpicker-user-swatches',
                ),
              ),
              t(_.body).append(b),
              (function (e, i, o) {
                var n,
                  r = t(e).prop('ownerDocument'),
                  s = r.defaultView,
                  a = t(e).offset(),
                  l = (t(r).scrollLeft(), t(r).scrollTop()),
                  c = t(e).outerWidth(),
                  u = t(e).outerHeight(),
                  p = t(s).width(),
                  h = t(s).height(),
                  d = t(i).outerWidth(),
                  f = t(i).outerHeight();
                switch (
                  'function' == typeof o.direction ? o.direction() : o.direction
                ) {
                  default:
                  case 'down':
                    n = { top: a.top + u + o.offset, left: a.left + o.drift };
                    break;
                  case 'right':
                    n = { top: a.top + o.drift, left: a.left + c + o.offset };
                }
                n.top + f > h + l && (n.top = h - f + l),
                  a.left + d > p && (n.left = p - d),
                  (n.left += 'px'),
                  (n.top += 'px'),
                  i.css(n);
              })(r, b, i),
              _.addEventListener('keydown', V, !1),
              b
            );
          }
          function M() {
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
                    var o = !1,
                      n = v(i);
                    return (
                      t.each(e, function (t, e) {
                        if (r(v(e), n)) return (o = !0), !1;
                      }),
                      !o && ((e = [d(n)].concat(e.slice(0, 28))), !0)
                    );
                  })(i) && t(this).trigger('customcolorchange', [e]),
                  t(this).data('tvcolorpicker-custom-color', null));
                var o = t(this).data('tvcolorpicker-previous-color');
                o && o != t(this).val() && t(this).trigger('change'),
                  t(this).removeData('tvcolorpicker-previous-color');
              });
          }
          function V(t) {
            t.keyCode === _ && (M.call(S), S.blur());
          }
          y = t.extend({}, b.options, y || {});
          var S = this;
          return (
            y && 'customColors' in y && o(y.customColors),
            this.each(function () {
              var e = t(this);
              e.val(i(e.val()));
              var o = null,
                n = !1;
              e.addClass('tvcolorpicker-widget')
                .attr('autocomplete', 'off')
                .attr('readonly', !0);
              var r = function () {
                e.data('tvcolorpicker') ||
                  (M.call(e),
                  (o = x.call(e, y)),
                  e.data('tvcolorpicker-custom-color', null),
                  e.data('tvcolorpicker', o),
                  e.data('tvcolorpicker-previous-color', e.val()),
                  o.bind('mousedown click', function (i) {
                    t(i.target).parents().andSelf().is(o) &&
                      (e.focus(),
                      (n = !0),
                      setTimeout(function () {
                        n = !1;
                      }, 0));
                  }));
              };
              function s() {
                var t = i(e.val());
                k.call(e, t);
              }
              e.on('touchstart', r),
                e.focus(r),
                M.call(e),
                e.bind('blur', function (t) {
                  n ? t.stopPropagation() : M.call(e);
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
    'eL+L': function (t, e, i) {},
    jNEI: function (t, e, i) {
      'use strict';
      i.r(e),
        i.d(e, 'addColorPicker', function () {
          return s;
        });
      i('P5fv'), i('d2+F');
      var o = i('eJTA'),
        n = i('Vdly');
      function r(t) {
        for (var e = [], i = 0, n = t; i < n.length; i++) {
          var r = n[i];
          null !== Object(o.tryParseRgb)(r) && e.push(r);
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
              customColors: r(Object(n.getJSON)('pickerCustomColors', [])),
              direction: e.direction,
              hideTransparency: !!e.hideTransparency,
            })
            .on('change', function () {
              var t, e;
              $(this).css(
                'border-color',
                ((t = $(this).val() || '#727272'),
                (e = Object(o.parseRgb)(t).map(function (t) {
                  return t > 50 ? t - 50 : 0;
                })),
                Object(o.rgbToString)(e)),
              );
            })
            .bind('customcolorchange', function (t, e) {
              Object(n.setJSON)('pickerCustomColors', e);
            })
            .appendTo(i),
          i
        );
      }
    },
    pay7: function (t, e, i) {},
    uo4K: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="currentColor" d="M5.18 6.6L1.3 2.7.6 2 2 .59l.7.7 3.9 3.9 3.89-3.9.7-.7L12.61 2l-.71.7L8 6.6l3.89 3.89.7.7-1.4 1.42-.71-.71L6.58 8 2.72 11.9l-.71.7-1.41-1.4.7-.71 3.9-3.9z"/></svg>';
    },
    utoz: function (t, e, i) {},
    vBzC: function (t, e, i) {
      var o, n, r;
      (n = [i('P5fv'), i('Qwlt')]),
        void 0 ===
          (r =
            'function' ==
            typeof (o = function (t) {
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
              ? o.apply(e, n)
              : o) || (t.exports = r);
    },
    zNST: function (t, e, i) {},
  },
]);
