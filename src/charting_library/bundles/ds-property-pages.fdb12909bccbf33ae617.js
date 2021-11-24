(window.webpackJsonp = window.webpackJsonp || []).push([
  ['ds-property-pages'],
  {
    '+jnJ': function (e, t, i) {
      'use strict';
      i.d(t, 'a', function () {
        return o;
      }),
        i.d(t, 'b', function () {
          return l;
        });
      i('YFKU'), i('bf9a');
      var o,
        n = i('m/cY'),
        a = i('Vdly');
      function r(e) {
        return e === o.AlwaysOn || e === o.AlwaysOff ? e : o.VisibleOnMouseOver;
      }
      function l(e, t) {
        var i, l;
        function s() {
          if (!i) {
            i = Object(n.a)();
            var o = a.getValue(e);
            void 0 === o && void 0 !== t && (o = a.getValue(t)),
              i.setValue(r(o)),
              i.subscribe(i, function (t) {
                a.setValue(e, r(t.value()));
              });
          }
          return i;
        }
        return {
          property: s,
          availableValues: function () {
            return [
              {
                value: o.VisibleOnMouseOver,
                title: window.t('Visible on Mouse Over'),
              },
              { value: o.AlwaysOn, title: window.t('Always Visible') },
              { value: o.AlwaysOff, title: window.t('Always Invisible') },
            ];
          },
          actualBehavior: function () {
            if (!l) {
              l = Object(n.a)();
              var e = s(),
                t = function () {
                  var t = e.value();
                  t !== o.AlwaysOn &&
                    t !== o.AlwaysOff &&
                    (t = Modernizr.mobiletouch
                      ? o.AlwaysOn
                      : o.VisibleOnMouseOver),
                    l && l.setValue(t);
                };
              e.subscribe(l, t), t();
            }
            return l;
          },
        };
      }
      !(function (e) {
        (e.AlwaysOn = 'alwaysOn'),
          (e.VisibleOnMouseOver = 'visibleOnMouseOver'),
          (e.AlwaysOff = 'alwaysOff');
      })(o || (o = {}));
    },
    '/0lf': function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('n3Kh'),
        a = i('DxCR'),
        r = a.BooleanBinder,
        l = a.SimpleComboBinder,
        s = a.SimpleStringBinder,
        d = a.ColorBinding,
        p = a.SliderBinder,
        h = i('/4PT').createLineStyleEditor;
      function c(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      function b(e, t, i) {
        n.call(this, e, t, i);
      }
      inherit(c, o),
        (c.prototype.prepareLayout = function () {
          (this._res = $('<div>')),
            (this._table = $(
              '<table class="property-page" cellspacing="0" cellpadding="2" style="width:100%"></table>',
            ).appendTo(this._res));
          var e = this.createLineWidthEditor(),
            t = h(),
            i = this.createColorPicker(),
            o = this.addLabeledRow(this._table, 'Line');
          $('<td>').append(i).appendTo(o),
            $('<td>').append(e).appendTo(o),
            $('<td colspan="3">')
              .append(t.render().css('display', 'block'))
              .appendTo(o);
          var n = $("<input type='checkbox' class='visibility-switch'>");
          o = $('<tr>').appendTo(this._table);
          $('<td colspan="3">')
            .append($('<label>').append(n).append($.t('Show Price')))
            .prependTo(o);
          var a = $("<input type='checkbox'>");
          o = $('<tr>').appendTo(this._table);
          $('<td colspan="3">')
            .append($('<label>').append(a).append($.t('Show Text')))
            .prependTo(o);
          o = this.addLabeledRow(this._table, 'Text:');
          var c = this.createColorPicker(),
            b = this.createFontSizeEditor(),
            u = this.createFontEditor(),
            C = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>',
            ),
            y = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>',
            );
          $('<td>').append(c).appendTo(o),
            $('<td>').append(u).appendTo(o),
            $('<td>').append(b).appendTo(o),
            $('<td>').append(C).appendTo(o),
            $('<td>').append(y).appendTo(o);
          o = $('<tr>').appendTo(this._table);
          $("<td colspan='2'>").append($.t('Text Alignment:')).appendTo(o);
          var g = $(
              "<select><option value='left'>" +
                $.t('left') +
                "</option><option value='center'>" +
                $.t('center') +
                "</option><option value='right'>" +
                $.t('right') +
                '</option></select>',
            ),
            w = $(
              "<select><option value='bottom'>" +
                $.t('top') +
                "</option><option value='middle'>" +
                $.t('middle') +
                "</option><option value='top'>" +
                $.t('bottom') +
                '</option></select>',
            ).data('selectbox-css', { display: 'block' });
          $('<td>').append(g).appendTo(o),
            $("<td colspan='3'>").append(w).appendTo(o);
          var T = $("<textarea rows='7' cols='60'>").css('width', '100%');
          o = $('<tr>').appendTo(this._table);
          $("<td colspan='7'>").append(T).appendTo(o),
            this.bindControl(
              new r(
                a,
                this._linetool.properties().showLabel,
                !0,
                this.model(),
                'Change Horz Line Text Visibility',
              ),
            ),
            this.bindControl(
              new l(
                g,
                this._linetool.properties().horzLabelsAlign,
                null,
                !0,
                this.model(),
                'Change Horz Line Labels Alignment',
              ),
            ),
            this.bindControl(
              new l(
                w,
                this._linetool.properties().vertLabelsAlign,
                null,
                !0,
                this.model(),
                'Change Horz Line Labels Alignment',
              ),
            ),
            this.bindControl(
              new s(
                T,
                this._linetool.properties().text,
                null,
                !0,
                this.model(),
                'Change Text',
              ),
            ),
            this.bindControl(
              new r(
                n,
                this._linetool.properties().showPrice,
                !0,
                this.model(),
                'Change Horz Line Price Visibility',
              ),
            ),
            this.bindControl(
              new d(
                i,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Horz Line Color',
              ),
            ),
            this.bindControl(
              new l(
                t,
                this._linetool.properties().linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Horz Line Style',
              ),
            ),
            this.bindControl(
              new p(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Horz Line Width',
              ),
            ),
            this.bindControl(
              new l(
                b,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new l(
                u,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Text Font',
              ),
            ),
            this.bindControl(
              new d(
                c,
                this._linetool.properties().textcolor,
                !0,
                this.model(),
                'Change Text Color',
              ),
            ),
            this.bindControl(
              new r(
                C,
                this._linetool.properties().bold,
                !0,
                this.model(),
                'Change Text Font Bold',
              ),
            ),
            this.bindControl(
              new r(
                y,
                this._linetool.properties().italic,
                !0,
                this.model(),
                'Change Text Font Italic',
              ),
            ),
            this.loadData();
        }),
        (c.prototype.widget = function () {
          return this._res;
        }),
        inherit(b, n),
        (b.prototype.prepareLayout = function () {
          if (
            ((this._table = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            )),
            this._linetool.points()[0])
          ) {
            var e = this._linetool.properties().points[0],
              t = this.createPriceEditor(e.price),
              i = $('<tr>').appendTo(this._table);
            $('<td>' + $.t('Price') + '</td>').appendTo(i),
              $('<td>').append(t).appendTo(i),
              this.loadData();
          }
        }),
        (t.LineToolHorzLineStylesPropertyPage = c),
        (t.LineToolHorzLineInputsPropertyPage = b);
    },
    '/1PJ': function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('n3Kh'),
        a = i('DxCR'),
        r = a.PropertyPage,
        l = a.SliderBinder,
        s = i('y/RR').createTransparencyEditor,
        d = i('QloM');
      function p(e, t, i) {
        r.call(this, e, t), (this._linetool = i), this.prepareLayout();
      }
      function h(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(p, n),
        (p.prototype.prepareLayout = function () {
          var e = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            ),
            t = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            ).data({
              'layout-tab': d.TabNames.inputs,
              'layout-tab-priority': d.TabPriority.Inputs,
            });
          (this._table = e.add(t)),
            n.prototype.prepareLayoutForTable.call(this, e);
          var i = $('<tr>').appendTo(t);
          $('<td>').append($.t('Avg HL in minticks')).appendTo(i);
          var o = $('<td>').appendTo(i),
            a = $("<input type='text'>").addClass('ticker').appendTo(o);
          (i = $('<tr>').appendTo(t)),
            $('<td>').append($.t('Variance')).appendTo(i);
          var r = $('<td>').appendTo(i),
            l = $("<input type='text'>").addClass('ticker').appendTo(r),
            s = this._linetool.properties();
          this.bindInteger(
            a,
            s.averageHL,
            $.t('Change Average HL value'),
            1,
            5e4,
          ),
            this.bindInteger(
              l,
              s.variance,
              $.t('Change Variance value'),
              1,
              100,
            ),
            this.loadData();
        }),
        (p.prototype.widget = function () {
          return this._table;
        }),
        inherit(h, o),
        (h.prototype.prepareLayout = function () {
          this._widget = $('<div>');
          var e = $('<table cellspacing=4>').appendTo(this._widget),
            t = this.createColorPicker(),
            i = this.createColorPicker(),
            o = this.createColorPicker(),
            n = this.createColorPicker(),
            a = this.createColorPicker(),
            r = $("<input type='checkbox' class='visibility-switch'/>").data(
              'hides',
              $(n).add(a),
            ),
            d = $("<input type='checkbox' class='visibility-switch'/>").data(
              'hides',
              $(o),
            ),
            p = this.addLabeledRow(e, $.t('Candles'));
          $('<td>').prependTo(p),
            $('<td>').append(t).appendTo(p),
            $('<td>').append(i).appendTo(p);
          p = this.addLabeledRow(e, $.t('Borders'), r);
          $('<td>').append(r).prependTo(p),
            $('<td>').append(n).appendTo(p),
            $('<td>').append(a).appendTo(p),
            $('<td>').appendTo(p);
          p = this.addLabeledRow(e, $.t('Wick'), d);
          $('<td>').append(d).prependTo(p),
            $('<td>').append(o).appendTo(p),
            $('<td>').appendTo(p),
            (e = $('<table>').appendTo(this._widget));
          p = $('<tr>').appendTo(e);
          $("<td colspan='2'>").append($.t('Transparency')).appendTo(p);
          var h = s();
          $("<td colspan='2'>").append(h).appendTo(p);
          var c = this._linetool.properties();
          this.bindColor(t, c.candleStyle.upColor, 'Change Candle Up Color'),
            this.bindColor(
              i,
              c.candleStyle.downColor,
              'Change Candle Down Color',
            ),
            this.bindBoolean(
              d,
              c.candleStyle.drawWick,
              'Change Candle Wick Visibility',
            ),
            this.bindColor(
              o,
              c.candleStyle.wickColor,
              'Change Candle Wick Color',
            ),
            this.bindBoolean(
              r,
              c.candleStyle.drawBorder,
              'Change Candle Border Visibility',
            ),
            this.bindColor(
              n,
              c.candleStyle.borderUpColor,
              'Change Candle Up Border Color',
            ),
            this.bindColor(
              a,
              c.candleStyle.borderDownColor,
              'Change Candle Down Border Color',
            ),
            this.bindControl(
              new l(
                h,
                c.transparency,
                !0,
                this.model(),
                'Change Guest Feed Transparency',
              ),
            );
        }),
        (h.prototype.widget = function () {
          return this._widget;
        }),
        (t.LineToolGhostFeedInputsPropertyPage = p),
        (t.LineToolGhostFeedStylesPropertyPage = h);
    },
    '/4PT': function (e, t, i) {
      'use strict';
      i.r(t);
      i('P5fv'), i('oA7e');
      var o = (function () {
          function e(e, t) {
            (this.value = e), (this.html = t), (this.jqItem = this._render());
          }
          return (
            (e.prototype.eq = function (e) {
              return this.value === e;
            }),
            (e.prototype.width = function () {
              return this.jqItem.width();
            }),
            (e.prototype.render = function () {
              return this.jqItem;
            }),
            (e.prototype.select = function (e) {
              this.jqItem.toggleClass('selected', !!e);
            }),
            (e.prototype.selectAndReturnIfValueMatch = function (e) {
              return this.eq(e)
                ? (this.select(!0), this)
                : (this.select(!1), null);
            }),
            (e.prototype._render = function () {
              return $('<div class="item">').append(
                $('<span>').html(this.html),
              );
            }),
            e
          );
        })(),
        n = (function () {
          function e(e) {
            var t = this;
            (this._disabled = !1),
              (this._closeCb = null),
              (this.opened = !1),
              (this._value = null),
              (this.items = []),
              (this.width = 0),
              (this._jqWrapper = $('<div class="custom-select">')),
              this._jqWrapper.data({
                disable: this.disable.bind(this),
                enable: this.enable.bind(this),
              }),
              this._jqWrapper.selectable(!1),
              (this._jqSwitcher = $('<div class="switcher">').appendTo(
                this._jqWrapper,
              )),
              this._jqSwitcher.on('click', function () {
                t.toggleItems();
              }),
              (this._jqTitle = $('<span class="title">').appendTo(
                this._jqSwitcher,
              )),
              $('<span class="icon">').appendTo(this._jqSwitcher),
              (this._jqItems = $('<div class="items js-hidden">').appendTo(
                this._jqWrapper,
              )),
              (this._callback = null),
              e && this.addItems(e);
          }
          return (
            (e.prototype.toggleItems = function () {
              this.opened ? this._close() : this._open();
            }),
            (e.prototype.setWidth = function () {
              this._jqWrapper.width(this.width);
            }),
            (e.prototype.render = function () {
              return this._jqWrapper;
            }),
            (e.prototype.selectItemByValue = function (e) {
              for (var t = null, i = 0, o = this.items; i < o.length; i++) {
                var n = o[i].selectAndReturnIfValueMatch(e);
                n && (t = n);
              }
              return t;
            }),
            (e.prototype.setValue = function (e) {
              if (this._value !== e) {
                var t = this.selectItemByValue(e);
                t &&
                  ((this._value = e),
                  this._jqTitle.html(t.html),
                  this.change());
              }
            }),
            (e.prototype.change = function (e) {
              e
                ? (this._callback = e)
                : this._callback && this._callback.call(this);
            }),
            (e.prototype.value = function () {
              return this._value;
            }),
            (e.prototype.val = function (e) {
              return void 0 !== e ? void this.setValue(e) : this.value();
            }),
            (e.prototype.addItems = function (e) {
              for (var t = 0, i = e; t < i.length; t++) {
                var o = i[t];
                this.addItem(o.value, o.html);
              }
            }),
            (e.prototype.addItem = function (e, t) {
              var i = this,
                n = new o(e, t);
              this.items.push(n);
              var a = n.render();
              a.on('click', function () {
                i.setValue(e), i.toggleItems();
              }),
                this._jqItems.append(a),
                null === this.value() && this.setValue(e);
            }),
            (e.prototype.disable = function () {
              this._disabled = !0;
            }),
            (e.prototype.enable = function () {
              this._disabled = !1;
            }),
            (e.prototype.disabled = function () {
              return this._disabled;
            }),
            (e.prototype._open = function () {
              var e = this;
              this._disabled ||
                (this._jqItems.removeClass('js-hidden'),
                this._jqSwitcher.addClass('open'),
                (this.opened = !0),
                this._closeCb ||
                  ((this._closeCb = {
                    host: this._jqSwitcher.prop('ownerDocument'),
                    cb: function (t) {
                      e._jqWrapper[0].contains(t.target) || e._close();
                    },
                  }),
                  this._closeCb.host.addEventListener(
                    'mousedown',
                    this._closeCb.cb,
                    !1,
                  )));
            }),
            (e.prototype._close = function () {
              this._jqItems.addClass('js-hidden'),
                this._jqSwitcher.removeClass('open'),
                (this.opened = !1),
                this._closeCb &&
                  (this._closeCb.host.removeEventListener(
                    'mousedown',
                    this._closeCb.cb,
                    !1,
                  ),
                  (this._closeCb = null));
            }),
            e
          );
        })(),
        a = i('8Uy/');
      function r() {
        return new n([
          {
            html:
              '<div class="tv-line-style-option tv-line-style-option--solid"/>',
            value: a.LINESTYLE_SOLID,
          },
          {
            html:
              '<div class="tv-line-style-option tv-line-style-option--dotted"/>',
            value: a.LINESTYLE_DOTTED,
          },
          {
            html:
              '<div class="tv-line-style-option tv-line-style-option--dashed"/>',
            value: a.LINESTYLE_DASHED,
          },
        ]);
      }
      i.d(t, 'createLineStyleEditor', function () {
        return r;
      });
    },
    '04K5': function (e, t, i) {
      'use strict';
      var o = i('Kxc7'),
        n = i('DxCR'),
        a = n.PropertyPage,
        r = n.GreateTransformer,
        l = n.LessTransformer,
        s = n.ToIntTransformer,
        d = n.ToFloatTransformer,
        p = n.SimpleStringBinder,
        h = n.SimpleComboBinder,
        c = n.ColorBinding,
        b = n.BooleanBinder,
        u = n.SliderBinder,
        C = n.generateLabelElementStr,
        y = i('dfhE'),
        g = i('n5al').chartStyleStudyId,
        w = i('owyi').createPriceSourceEditor,
        T = i('zXvd').NumericFormatter,
        v = i('PC8g').trackEvent;
      function _() {}
      inherit(_, a),
        (_.prototype.i18nCache = [
          window.t('Style'),
          window.t('Box size assignment method'),
          window.t('Color Bars Based on Previous Close'),
          window.t('Candles'),
          window.t('Borders'),
          window.t('Wick'),
          window.t('HLC Bars'),
          window.t('Price Source'),
          window.t('Type'),
          window.t(
            'Show real prices on price scale (instead of Heikin-Ashi price)',
          ),
          window.t('Up bars'),
          window.t('Down bars'),
          window.t('Projection up bars'),
          window.t('Projection down bars'),
          window.t('Projection Up Color'),
          window.t('Projection Down Color'),
          window.t('Line'),
          window.t('Fill'),
          window.t('Up Color'),
          window.t('Down Color'),
          window.t('Traditional'),
          window.t('ATR Length'),
          window.t('Number Of Line'),
          window.t('Reversal Amount'),
          window.t('Box Size'),
          window.t('Phantom Bars'),
          window.t('One Step Back Building'),
        ]),
        (_.prototype.getInputTitle = function (e, t) {
          return 'style' === e
            ? window.t('Box size assignment method')
            : 'boxSize' === e
            ? window.t('Box Size')
            : t.inputInfo
            ? window.t(t.inputInfo[e].name.value())
            : e.toLowerCase().replace(/\b\w/g, function (e) {
                return e.toUpperCase();
              });
        }),
        (_.prototype.prepareLayoutImpl = function (e, t, i, o) {
          o = o || {};
          var n = {},
            a = this;
          function c(t) {
            a.refreshStateControls(n, e.inputs, i.inputs);
          }
          function u(e) {
            return new T().format(e);
          }
          for (var w = 0; w < e.inputs.length; w++) {
            var v,
              _ = e.inputs[w],
              m = _.id,
              f =
                e.name === g(y.STYLE_RENKO) ||
                e.name === g(y.STYLE_KAGI) ||
                e.name === g(y.STYLE_PB);
            e.name === g(y.STYLE_PNF) &&
              'sources' === m &&
              (_.options = _.options.filter(function (e) {
                return 'HL' === e || 'Close' === e;
              }));
            try {
              v = this.getInputTitle(m, i);
            } catch (O) {
              continue;
            }
            if (
              !(
                (e.name === g(y.STYLE_RENKO) && 'wicks' === m) ||
                (e.name === g(y.STYLE_RANGE) && 'range' === m)
              ) &&
              (!f || 'source' !== m)
            ) {
              var L,
                S = $('<tr/>'),
                k = this._labelToId(m);
              e.name === g(y.STYLE_RANGE) &&
                'phantomBars' === m &&
                (L = $('<table><tr></tr></table>')).appendTo(S),
                _.isHidden || S.appendTo(t),
                e.name === g(y.STYLE_RANGE) &&
                  'phantomBars' === m &&
                  (S = L.find('tr'));
              var x = $(
                '<td' +
                  (o.nameColspan ? ' colspan = "' + o.nameColspan + '"' : '') +
                  '/>',
              );
              x.addClass('propertypage-name-label'),
                x.html(C(v, k)),
                (e.name === g(y.STYLE_RANGE) && 'phantomBars' === m) ||
                  x.appendTo(S);
              var B = $(
                '<td' +
                  (o.valueColspan
                    ? ' colspan = "' + o.valueColspan + '"'
                    : '') +
                  '/>',
              );
              B.appendTo(S);
              var P = null;
              if (_.options) {
                P = $("<select id='" + k + "' />");
                for (var R = 0; R < _.options.length; R++) {
                  var E = _.options[R];
                  $(
                    "<option value='" + E + "'>" + $.t(E) + '</option>',
                  ).appendTo(P);
                }
              } else {
                var F = 'bool' === _.type ? 'checkbox' : 'text';
                P = $("<input id='" + k + "' type='" + F + "' />");
              }
              P.appendTo(B),
                (e.name === g(y.STYLE_RANGE) && 'phantomBars' === m) ||
                  P.css('width', '100px'),
                e.name === g(y.STYLE_RANGE) &&
                  'phantomBars' === m &&
                  x.appendTo(S);
              var D,
                I = 'Change ' + v;
              if (_.options)
                this.bindControl(
                  new h(P, i.inputs[m], null, !0, this.model(), I),
                );
              else if ('integer' === _.type)
                (D = [s(_.defval)]),
                  _.min && D.push(r(_.min)),
                  _.max && D.push(l(_.max)),
                  this.bindControl(
                    new p(P, i.inputs[m], D, !1, this.model(), I),
                  ),
                  P.addClass('ticker');
              else if ('float' === _.type) {
                if (((D = [d(_.defval)]), _.min)) {
                  var W;
                  if (
                    ((e.id === g(y.STYLE_RENKO) || e.id === g(y.STYLE_PNF)) &&
                      'boxSize' === _.id) ||
                    (e.id === g(y.STYLE_KAGI) && 'reversalAmount' === _.id)
                  ) {
                    var A = this._model.model().mainSeries().symbolInfo();
                    null !== A && (W = A.minmov / A.pricescale);
                  }
                  D.push(r(W || _.min));
                }
                _.max && D.push(l(_.max));
                var V = new p(P, i.inputs[m], D, !1, this.model(), I);
                V.addFormatter(u), this.bindControl(V), P.addClass('ticker');
              } else
                'text' === _.type
                  ? this.bindControl(
                      new p(
                        P,
                        this._property.inputs[m],
                        null,
                        !1,
                        this.model(),
                        I,
                      ),
                    )
                  : 'bool' === _.type &&
                    this.bindControl(
                      new b(P, i.inputs[m], !0, this.model(), I),
                    );
              P.change(c), (n[_.id] = S);
            }
          }
          this.refreshStateControls(n, e.inputs, i.inputs);
        }),
        (_.prototype.getMetaInfo = function (e) {
          for (
            var t = this._model.m_model._studiesMetaData, i = 0;
            i < t.length;
            i++
          )
            if (t[i].id === e) return t[i];
          return null;
        }),
        (_.prototype._isShowStyleSwitcher = function () {
          return !1;
        }),
        (_.prototype._isJapaneseChartsAvailable = function () {
          return !0;
        }),
        (_.prototype._isHiLoChartsAvailable = function () {
          return o.enabled('chart_style_hilo');
        }),
        (_.prototype._prepareSeriesStyleLayout = function (e, t, i, n) {
          var a = $('<tbody>').appendTo(e),
            d = (this._candlesColorerTbody = $('<tbody>').appendTo(t)),
            C = (this._barsColorerTbody = $('<tbody>').appendTo(t)),
            g = (this._haColorerTbody = $('<tbody>').appendTo(t)),
            T = (this._candlesTbody = $('<tbody>').appendTo(i)),
            v = (this._hollowCandlesTbody = $('<tbody>').appendTo(i)),
            _ = (this._haTbody = $('<tbody>').appendTo(i)),
            m = (this._barsTbody = $('<tbody>').appendTo(i)),
            f = (this._lineTbody = $('<tbody>').appendTo(i)),
            L = (this._areaTbody = $('<tbody>').appendTo(i)),
            S = null;
          this._isHiLoChartsAvailable() &&
            (S = this._hiloTbody = $('<tbody>').appendTo(i));
          var k,
            x = (this._baselineTbody = $('<tbody>').appendTo(i));
          if (this._isShowStyleSwitcher()) {
            var B = this.addLabeledRow(a, 'Style'),
              P = $(document.createElement('td')).appendTo(B);
            P.addClass('property-wide-select'),
              (k = $(document.createElement('select'))),
              $(
                '<option value=' +
                  y.STYLE_BARS +
                  '>' +
                  $.t('Bars') +
                  '</option>',
              ).appendTo(k),
              $(
                '<option value=' +
                  y.STYLE_CANDLES +
                  '>' +
                  $.t('Candles') +
                  '</option>',
              ).appendTo(k),
              $(
                '<option value=' +
                  y.STYLE_HOLLOW_CANDLES +
                  '>' +
                  $.t('Hollow Candles') +
                  '</option>',
              ).appendTo(k),
              this._isJapaneseChartsAvailable() &&
                $(
                  '<option value=' +
                    y.STYLE_HEIKEN_ASHI +
                    '>' +
                    $.t('Heikin Ashi') +
                    '</option>',
                ).appendTo(k),
              $(
                '<option value=' +
                  y.STYLE_LINE +
                  '>' +
                  $.t('Line') +
                  '</option>',
              ).appendTo(k),
              $(
                '<option value=' +
                  y.STYLE_AREA +
                  '>' +
                  $.t('Area') +
                  '</option>',
              ).appendTo(k),
              $(
                '<option value=' +
                  y.STYLE_BASELINE +
                  '>' +
                  $.t('Baseline') +
                  '</option>',
              ).appendTo(k),
              this._isHiLoChartsAvailable() &&
                $(
                  '<option value=' +
                    y.STYLE_HILO +
                    '>' +
                    $.t('High-Low') +
                    '</option>',
                ).appendTo(k),
              k.css('width', '100px').appendTo(P),
              this.switchStyle(),
              this.bindControl(
                new h(
                  k,
                  n.style,
                  parseInt,
                  !0,
                  this.model(),
                  'Change Series Style',
                ),
              );
          }
          n.style.listeners().subscribe(this, this.switchStyle);
          var R = this.createColorPicker(),
            E = this.createColorPicker(),
            F = this.createColorPicker(),
            D = this.createColorPicker(),
            I = this.createColorPicker(),
            W = this.createColorPicker(),
            A = $("<input type='checkbox' class='visibility-switch'/>").data(
              'hides',
              $(R).add(E),
            ),
            V = $("<input type='checkbox' class='visibility-switch'/>").data(
              'hides',
              $(I).add(W),
            ),
            O = $("<input type='checkbox' class='visibility-switch'/>").data(
              'hides',
              $(F).add(D),
            ),
            z = $("<input type='checkbox'/>"),
            M = this.addLabeledRow(d, 'Color Bars Based on Previous Close', z);
          $('<td>').append(z).prependTo(M);
          M = this.addLabeledRow(T, 'Bodies', A);
          $('<td>').append(A).prependTo(M),
            $('<td>').append(R).appendTo(M),
            $('<td>').append(E).appendTo(M);
          M = this.addLabeledRow(T, 'Borders', V);
          $('<td>').append(V).prependTo(M),
            $('<td>').append(I).appendTo(M),
            $('<td>').append(W).appendTo(M);
          M = this.addLabeledRow(T, 'Wick', O);
          $('<td>').append(O).prependTo(M),
            $('<td>').append(F).appendTo(M),
            $('<td>').append(D).appendTo(M),
            this.bindControl(
              new c(
                R,
                n.candleStyle.upColor,
                !0,
                this.model(),
                'Change Candle Up Color',
              ),
            ),
            this.bindControl(
              new c(
                E,
                n.candleStyle.downColor,
                !0,
                this.model(),
                'Change Candle Down Color',
              ),
            ),
            this.bindControl(
              new b(
                O,
                n.candleStyle.drawWick,
                !0,
                this.model(),
                'Change Candle Wick Visibility',
              ),
            ),
            this.bindControl(
              new c(
                F,
                n.candleStyle.wickUpColor,
                !0,
                this.model(),
                'Change Candle Wick Up Color',
              ),
            ),
            this.bindControl(
              new c(
                D,
                n.candleStyle.wickDownColor,
                !0,
                this.model(),
                'Change Candle Wick Down Color',
              ),
            ),
            this.bindControl(
              new b(
                A,
                n.candleStyle.drawBody,
                !0,
                this.model(),
                'Change Candle Body Visibility',
              ),
            ),
            this.bindControl(
              new b(
                V,
                n.candleStyle.drawBorder,
                !0,
                this.model(),
                'Change Candle Border Visibility',
              ),
            ),
            this.bindControl(
              new c(
                I,
                n.candleStyle.borderUpColor,
                !0,
                this.model(),
                'Change Candle Up Border Color',
              ),
            ),
            this.bindControl(
              new c(
                W,
                n.candleStyle.borderDownColor,
                !0,
                this.model(),
                'Change Candle Down Border Color',
              ),
            ),
            this.bindControl(
              new b(
                z,
                n.candleStyle.barColorsOnPrevClose,
                !0,
                this.model(),
                'Change Color Bars Based on Previous Close',
              ),
            );
          var Y = this.createColorPicker(),
            q = this.createColorPicker(),
            H = this.createColorPicker(),
            N = this.createColorPicker(),
            G = this.createColorPicker(),
            j = this.createColorPicker(),
            U = $("<input type='checkbox' class='visibility-switch'/>").data(
              'hides',
              $(Y).add(q),
            ),
            K = $("<input type='checkbox' class='visibility-switch'/>").data(
              'hides',
              $(G).add(j),
            ),
            Q = $("<input type='checkbox' class='visibility-switch'/>").data(
              'hides',
              $(H).add(N),
            );
          M = this.addLabeledRow(v, 'Bodies', U);
          $('<td>').append(U).prependTo(M),
            $('<td>').append(Y).appendTo(M),
            $('<td>').append(q).appendTo(M);
          M = this.addLabeledRow(v, 'Borders', K);
          $('<td>').append(K).prependTo(M),
            $('<td>').append(G).appendTo(M),
            $('<td>').append(j).appendTo(M);
          M = this.addLabeledRow(v, 'Wick', Q);
          $('<td>').append(Q).prependTo(M),
            $('<td>').append(H).appendTo(M),
            $('<td>').append(N).appendTo(M),
            this.bindControl(
              new c(
                Y,
                n.hollowCandleStyle.upColor,
                !0,
                this.model(),
                'Change Hollow Candle Up Color',
              ),
            ),
            this.bindControl(
              new c(
                q,
                n.hollowCandleStyle.downColor,
                !0,
                this.model(),
                'Change Hollow Candle Down Color',
              ),
            ),
            this.bindControl(
              new b(
                Q,
                n.hollowCandleStyle.drawWick,
                !0,
                this.model(),
                'Change Hollow Candle Wick Visibility',
              ),
            ),
            this.bindControl(
              new c(
                H,
                n.hollowCandleStyle.wickUpColor,
                !0,
                this.model(),
                'Change Hollow Candle Wick Up Color',
              ),
            ),
            this.bindControl(
              new c(
                N,
                n.hollowCandleStyle.wickDownColor,
                !0,
                this.model(),
                'Change Hollow Candle Down Wick Color',
              ),
            ),
            this.bindControl(
              new b(
                U,
                n.hollowCandleStyle.drawBody,
                !0,
                this.model(),
                'Change Hollow Candle Body Visibility',
              ),
            ),
            this.bindControl(
              new b(
                K,
                n.hollowCandleStyle.drawBorder,
                !0,
                this.model(),
                'Change Hollow Candle Border Visibility',
              ),
            ),
            this.bindControl(
              new c(
                G,
                n.hollowCandleStyle.borderUpColor,
                !0,
                this.model(),
                'Change Hollow Candle Up Border Color',
              ),
            ),
            this.bindControl(
              new c(
                j,
                n.hollowCandleStyle.borderDownColor,
                !0,
                this.model(),
                'Change Hollow Candle Down Border Color',
              ),
            );
          var Z = $("<input type='checkbox'/>");
          M = this.addLabeledRow(C, 'Color Bars Based on Previous Close', Z);
          $('<td>').append(Z).prependTo(M);
          var X = $("<input type='checkbox'/>");
          M = this.addLabeledRow(C, 'HLC Bars', X);
          $('<td>').append(X).prependTo(M);
          var J = this.addColorPickerRow(m, 'Up Color'),
            ee = this.addColorPickerRow(m, 'Down Color'),
            te = this._addThinBarsEditorRow(m);
          if (
            (this.bindControl(
              new c(
                J,
                n.barStyle.upColor,
                !0,
                this.model(),
                'Change Bar Up Color',
              ),
            ),
            this.bindControl(
              new c(
                ee,
                n.barStyle.downColor,
                !0,
                this.model(),
                'Change Bar Down Color',
              ),
            ),
            this.bindControl(
              new b(
                Z,
                n.barStyle.barColorsOnPrevClose,
                !0,
                this.model(),
                'Change Color Bars Based on Previous Close',
              ),
            ),
            this.bindControl(
              new b(
                X,
                n.barStyle.dontDrawOpen,
                !0,
                this.model(),
                'Change HLC Bars',
              ),
            ),
            this.bindControl(
              new b(
                te,
                n.barStyle.thinBars,
                !0,
                this.model(),
                'Change Thin Bars',
              ),
            ),
            n.hiloStyle)
          ) {
            var ie = this.createColorPicker(),
              oe = this.createColorPicker(),
              ne = this.createColorPicker(),
              ae = $("<input type='checkbox' class='visibility-switch'/>").data(
                'hides',
                $(oe),
              ),
              re = $("<input type='checkbox' class='visibility-switch'/>").data(
                'hides',
                $(ne),
              );
            M = this.addLabeledRow(S, 'Bodies');
            $('<td>').prependTo(M), $('<td>').append(ie).appendTo(M);
            M = this.addLabeledRow(S, 'Borders', ae);
            $('<td>').append(ae).prependTo(M), $('<td>').append(oe).appendTo(M);
            var le = this.createFontSizeEditor();
            M = this.addLabeledRow(S, 'Labels', re);
            $('<td>').append(re).prependTo(M),
              $('<td>').append(ne).appendTo(M),
              $('<td>').append(le).appendTo(M),
              this.bindControl(
                new c(
                  ie,
                  n.hiloStyle.color,
                  !0,
                  this.model(),
                  'Change High-Low Bodies Color',
                ),
              ),
              this.bindControl(
                new b(
                  ae,
                  n.hiloStyle.showBorders,
                  !0,
                  this.model(),
                  'Change Show High-Low Borders',
                ),
              ),
              this.bindControl(
                new c(
                  oe,
                  n.hiloStyle.borderColor,
                  !0,
                  this.model(),
                  'Change High-Low Border Color',
                ),
              ),
              this.bindControl(
                new b(
                  re,
                  n.hiloStyle.showLabels,
                  !0,
                  this.model(),
                  'Change Show High-Low Labels',
                ),
              ),
              this.bindControl(
                new c(
                  ne,
                  n.hiloStyle.labelColor,
                  !0,
                  this.model(),
                  'Change High-Low Labels Color',
                ),
              ),
              this.bindControl(
                new h(
                  le,
                  n.hiloStyle.fontSize,
                  parseInt,
                  !0,
                  this.model(),
                  'Change High-Low Labels Font Size',
                ),
              );
          }
          var se = w();
          M = this.addLabeledRow(f, 'Price Source');
          $('<td colspan="3">').append(se).appendTo(M);
          var de = this.addLabeledRow(f, 'Type'),
            pe = $('<td colspan="3">').appendTo(de);
          pe.addClass('property-wide-select');
          var he = $(document.createElement('select'));
          $(
            '<option value=' +
              y.STYLE_LINE_TYPE_SIMPLE +
              '>' +
              $.t('Simple') +
              '</option>',
          ).appendTo(he),
            $(
              '<option value=' +
                y.STYLE_LINE_TYPE_MARKERS +
                '>' +
                $.t('With Markers') +
                '</option>',
            ).appendTo(he),
            $(
              '<option value=' +
                y.STYLE_LINE_TYPE_STEP +
                '>' +
                $.t('Step') +
                '</option>',
            ).appendTo(he),
            he.appendTo(pe);
          M = this.addLabeledRow(f, 'Line');
          var ce = this.createColorPicker(),
            be = this.createLineWidthEditor();
          if (
            ($('<td>').append(ce).appendTo(M),
            $('<td>').append(be).appendTo(M),
            this.bindControl(
              new h(
                se,
                n.lineStyle.priceSource,
                null,
                !0,
                this.model(),
                'Change Price Source',
              ),
            ),
            this.bindControl(
              new h(
                he,
                n.lineStyle.styleType,
                parseInt,
                !0,
                this.model(),
                'Change Line Type',
              ),
            ),
            this.bindControl(
              new c(
                ce,
                n.lineStyle.color,
                !0,
                this.model(),
                'Change Line Color',
              ),
            ),
            this.bindControl(
              new u(
                be,
                n.lineStyle.linewidth,
                !0,
                this.model(),
                'Change Line Width',
              ),
            ),
            n.haStyle)
          ) {
            var ue = this.createColorPicker(),
              Ce = this.createColorPicker(),
              ye = this.createColorPicker(),
              ge = this.createColorPicker(),
              we = this.createColorPicker(),
              $e = this.createColorPicker(),
              Te = $("<input type='checkbox' class='visibility-switch'/>").data(
                'hides',
                $(we).add($e),
              ),
              ve = $("<input type='checkbox' class='visibility-switch'/>").data(
                'hides',
                $(ye).add(ge),
              ),
              _e = $("<input type='checkbox'/>");
            M = this.addLabeledRow(
              g,
              $.t('Color Bars Based on Previous Close'),
              _e,
            );
            $('<td>').append(_e).prependTo(M);
            M = this.addLabeledRow(_, $.t('Candles'));
            $('<td>').prependTo(M),
              $('<td>').append(ue).appendTo(M),
              $('<td>').append(Ce).appendTo(M);
            M = this.addLabeledRow(_, $.t('Borders'), Te);
            $('<td>').append(Te).prependTo(M),
              $('<td>').append(we).appendTo(M),
              $('<td>').append($e).appendTo(M);
            M = this.addLabeledRow(_, $.t('Wick'), ve);
            $('<td>').append(ve).prependTo(M),
              $('<td>').append(ye).appendTo(M),
              $('<td>').append(ge).appendTo(M),
              this.bindControl(
                new c(
                  ue,
                  n.haStyle.upColor,
                  !0,
                  this.model(),
                  'Change Heikin Ashi Up Color',
                ),
              ),
              this.bindControl(
                new c(
                  Ce,
                  n.haStyle.downColor,
                  !0,
                  this.model(),
                  'Change Heikin Ashi Down Color',
                ),
              ),
              this.bindControl(
                new b(
                  ve,
                  n.haStyle.drawWick,
                  !0,
                  this.model(),
                  'Change Heikin Ashi Wick Visibility',
                ),
              ),
              this.bindControl(
                new c(
                  ye,
                  n.haStyle.wickUpColor,
                  !0,
                  this.model(),
                  'Change Heikin Ashi Wick Up Color',
                ),
              ),
              this.bindControl(
                new c(
                  ge,
                  n.haStyle.wickDownColor,
                  !0,
                  this.model(),
                  'Change Heikin Ashi Wick Down Color',
                ),
              ),
              this.bindControl(
                new b(
                  Te,
                  n.haStyle.drawBorder,
                  !0,
                  this.model(),
                  'Change Heikin Ashi Border Visibility',
                ),
              ),
              this.bindControl(
                new c(
                  we,
                  n.haStyle.borderUpColor,
                  !0,
                  this.model(),
                  'Change Heikin Ashi Up Border Color',
                ),
              ),
              this.bindControl(
                new c(
                  $e,
                  n.haStyle.borderDownColor,
                  !0,
                  this.model(),
                  'Change Heikin Ashi Down Border Color',
                ),
              ),
              this.bindControl(
                new b(
                  _e,
                  n.haStyle.barColorsOnPrevClose,
                  !0,
                  this.model(),
                  'Change Color Bars Based on Previous Close',
                ),
              );
          }
          this._isJapaneseChartsAvailable() &&
            o.enabled('japanese_chart_styles');
          var me = w();
          M = this.addLabeledRow(L, 'Price Source');
          $('<td colspan="3">').appendTo(M).append(me);
          var fe = this.createColorPicker(),
            Le = this.createLineWidthEditor();
          M = this.addLabeledRow(L, 'Line');
          $('<td>').appendTo(M).append(fe),
            $('<td colspan="2">').appendTo(M).append(Le);
          var Se = this.createColorPicker(),
            ke = this.createColorPicker();
          M = this.addLabeledRow(L, 'Fill');
          $('<td>').appendTo(M).append(Se),
            $('<td>').appendTo(M).append(ke),
            this.bindControl(
              new h(
                me,
                n.areaStyle.priceSource,
                null,
                !0,
                this.model(),
                'Change Price Source',
              ),
            ),
            this.bindControl(
              new c(
                fe,
                n.areaStyle.linecolor,
                !0,
                this.model(),
                'Change Line Color',
              ),
            ),
            this.bindControl(
              new u(
                Le,
                n.areaStyle.linewidth,
                !0,
                this.model(),
                'Change Line Width',
              ),
            ),
            this.bindControl(
              new c(
                Se,
                n.areaStyle.color1,
                !0,
                this.model(),
                'Change Line Color',
                n.areaStyle.transparency,
              ),
            ),
            this.bindControl(
              new c(
                ke,
                n.areaStyle.color2,
                !0,
                this.model(),
                'Change Line Color',
                n.areaStyle.transparency,
              ),
            );
          var xe = w();
          M = this.addLabeledRow(x, window.t('Price Source'));
          $('<td colspan="3">').appendTo(M).append(xe),
            this.bindControl(
              new h(
                xe,
                n.baselineStyle.priceSource,
                null,
                !0,
                this.model(),
                'Change Price Source',
              ),
            );
          var Be = this.createColorPicker(),
            Pe = this.createLineWidthEditor();
          M = this.addLabeledRow(x, window.t('Top Line'));
          $('<td>').appendTo(M).append(Be),
            $('<td>').appendTo(M).append(Pe),
            this.bindControl(
              new c(
                Be,
                n.baselineStyle.topLineColor,
                !0,
                this.model(),
                'Change Top Line Color',
              ),
            ),
            this.bindControl(
              new u(
                Pe,
                n.baselineStyle.topLineWidth,
                !0,
                this.model(),
                'Change Top Line Width',
              ),
            );
          var Re = this.createColorPicker(),
            Ee = this.createLineWidthEditor();
          M = this.addLabeledRow(x, window.t('Bottom Line'));
          $('<td>').appendTo(M).append(Re),
            $('<td>').appendTo(M).append(Ee),
            this.bindControl(
              new c(
                Re,
                n.baselineStyle.bottomLineColor,
                !0,
                this.model(),
                'Change Bottom Line Color',
              ),
            ),
            this.bindControl(
              new u(
                Ee,
                n.baselineStyle.bottomLineWidth,
                !0,
                this.model(),
                'Change Bottom Line Width',
              ),
            );
          var Fe = this.createColorPicker(),
            De = this.createColorPicker();
          M = this.addLabeledRow(x, window.t('Fill Top Area'));
          $('<td>').appendTo(M).append(Fe),
            $('<td>').appendTo(M).append(De),
            this.bindControl(
              new c(
                Fe,
                n.baselineStyle.topFillColor1,
                !0,
                this.model(),
                'Change Fill Top Area Color 1',
              ),
              n.baselineStyle.transparency,
            ),
            this.bindControl(
              new c(
                De,
                n.baselineStyle.topFillColor2,
                !0,
                this.model(),
                'Change Fill Top Area Color 2',
              ),
              n.baselineStyle.transparency,
            );
          var Ie = this.createColorPicker(),
            We = this.createColorPicker();
          M = this.addLabeledRow(x, window.t('Fill Bottom Area'));
          $('<td>').appendTo(M).append(Ie),
            $('<td>').appendTo(M).append(We),
            this.bindControl(
              new c(
                Ie,
                n.baselineStyle.bottomFillColor1,
                !0,
                this.model(),
                'Change Fill Bottom Area Color 1',
              ),
              n.baselineStyle.transparency,
            ),
            this.bindControl(
              new c(
                We,
                n.baselineStyle.bottomFillColor2,
                !0,
                this.model(),
                'Change Fill Bottom Area Color 2',
              ),
              n.baselineStyle.transparency,
            );
          M = this.addLabeledRow(x, window.t('Base Level'));
          var Ae = $('<input type="text" class="ticker">');
          $('<td colspan="2">')
            .appendTo(M)
            .append($('<span></span>').append(Ae))
            .append($('<span class="percents-label">%</span>'));
          var Ve = [
            s(n.baselineStyle.baseLevelPercentage.value()),
            l(100),
            r(0),
          ];
          this.bindControl(
            new p(
              Ae,
              n.baselineStyle.baseLevelPercentage,
              Ve,
              !0,
              this.model(),
              'Change Base Level',
            ),
          );
        }),
        (_.prototype._addThinBarsEditorRow = function (e) {
          var t = $("<input type='checkbox'/>"),
            i = $('<table></table>'),
            o = $('<tr></tr>').appendTo(i),
            n = this.addLabeledRow(o, window.t('Thin Bars'), t);
          $('<td>').append(t).prependTo(n);
          var a = $('<td colspan="2"></td>').append(i);
          return (
            $('<tr>').append(a).appendTo(e),
            t.change(function () {
              t.is(':checked')
                ? v('GUI', 'Style', 'Enable thin bars')
                : v('GUI', 'Style', 'Disable thin bars');
            }),
            t
          );
        }),
        (e.exports = _);
    },
    '11dv': function (e, t, i) {
      'use strict';
      (function (t) {
        i('YFKU');
        var o = i('04K5'),
          n = i('QloM'),
          a = i('DxCR'),
          r = a.PropertyPage,
          l = a.GreateTransformer,
          s = a.LessTransformer,
          d = a.ToIntTransformer,
          p = a.SimpleStringBinder,
          h = a.BooleanBinder,
          c = a.SliderBinder,
          b = a.ColorBinding,
          u = a.SimpleComboBinder,
          C = a.DisabledBinder,
          y =
            (a.CheckboxWVBinding, a.ToFloatTransformerWithDynamicDefaultValue),
          g = a.ToFloatLimitedPrecisionTransformer,
          w = i('oXaB').PriceAxisLastValueMode,
          T = i('dfhE'),
          v = i('jNEI').addColorPicker,
          _ = i('/4PT').createLineStyleEditor,
          m = (i('bR4N').bindPopupMenu, i('Ocx9').DefaultProperty),
          f = i('+6ja').availableTimezones,
          L = (i('VNzU').isMultipleLayout, i('1ANp')),
          S = (i('oNDq').createConfirmDialog, i('+GxX').isFeatureEnabled),
          k = i('PC8g').trackEvent,
          x = i('e1ZQ').availableDateFormats,
          B = i('ZZnO').dateFormatProperty,
          P = i('gQ5K').DateFormatter;
        function R(e, t, i) {
          var o = t.m_model.properties();
          r.call(this, o, t);
          var n = (this._series = t.mainSeries());
          (this._chart = t.m_model),
            (this._model = t),
            (this._source = i),
            (this._property = o),
            (this._seriesProperty = n.properties()),
            (this._scaleBindings = {}),
            (this._scaleProperties = this._series.priceScale().properties()),
            this._series
              .priceScaleChanged()
              .subscribe(this, this._updateScaleProperties),
            (this._mainSeriesScaleRatioProperty = t.mainSeriesScaleRatioProperty());
          var a = null;
          t.m_model.panes().forEach(function (e) {
            e.dataSources().forEach(function (t) {
              if (t === n) return (a = e), !1;
            });
          }),
            (this._pane = a),
            this.prepareLayout(),
            (this._themes = []),
            (this.supportThemeSwitcher = !1);
        }
        inherit(R, o),
          (R.prototype.setScalesOpenTab = function () {
            this.scalesTab &&
              this.scalesTab.data('layout-tab-open', n.TabOpenFrom.Override);
          }),
          (R.prototype._isAlertControlsShouldBeShown = function () {
            return (
              !S('hide-alert-controls-on-property-page') && t.enabled('alerts')
            );
          }),
          (R.prototype.setTmzOpenTab = function () {
            this.tmzSessTable &&
              this.tmzSessTable.data('layout-tab-open', n.TabOpenFrom.Override);
          }),
          (R.prototype.prepareLayout = function () {
            var e,
              i,
              o,
              a,
              r,
              C,
              m,
              f,
              S,
              x = this;
            if (t.enabled('chart_property_page_style')) {
              (e = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">',
              ).data('layout-tab', n.TabNames.style)),
                (i = $(
                  '<table class="property-page" cellspacing="0" cellpadding="2">',
                ).data('layout-tab', n.TabNames.style)),
                (o = $(
                  '<table class="property-page" cellspacing="0" cellpadding="2">',
                ).data('layout-tab', n.TabNames.style)),
                this._prepareSeriesStyleLayout(e, i, o, this._seriesProperty),
                (this._hasSeriesStyleLayout = !0),
                (this._priceLineTable = $(
                  '<table class="property-page" cellspacing="0" cellpadding="2">',
                ).data('layout-tab', n.TabNames.style)),
                (a = this._priceLineTable),
                this.addLabeledRow(a, window.t('Symbol Last Value'), null, 5);
              var B = $('<input type="checkbox">'),
                P = this.addLabeledRow(a, window.t('Show Line'), B);
              $('<td>').append(B).prependTo(P),
                $('<td>').css('width', '9px').prependTo(P),
                this.bindControl(
                  new h(
                    B,
                    this._seriesProperty.showPriceLine,
                    !0,
                    this.model(),
                    'Change Price Price Line',
                  ),
                );
              var R = $('<input type="checkbox">'),
                E = this.addLabeledRow(
                  a,
                  window.t('Show Label on Price Scale'),
                  R,
                );
              $('<td>').append(R).prependTo(E),
                E.prepend('<td>'),
                this.bindControl(
                  new h(
                    R,
                    this._property.scalesProperties.showSeriesLastValue,
                    !0,
                    this.model(),
                    'Change Symbol Last Value Visibility',
                  ),
                );
              var F = $('<select />');
              $(
                '<option value="' +
                  w.LastPriceAndPercentageValue +
                  '">' +
                  window.t('Last Price And Percentage Value') +
                  '</option>',
              ).appendTo(F),
                $(
                  '<option value="' +
                    w.LastValueAccordingToScale +
                    '">' +
                    window.t('Last Value According To Scale') +
                    '</option>',
                ).appendTo(F),
                $('<td colspan="2">')
                  .css('width', '370px')
                  .append(F)
                  .appendTo(E),
                this.bindControl(
                  new u(
                    F,
                    this._property.scalesProperties.seriesLastValueMode,
                    parseInt,
                    !0,
                    this.model(),
                    'Change Symbol Last Value Mode',
                  ),
                ),
                F.change(function () {
                  k('GUI', 'Scales', 'Edit symbol last value mode');
                });
              var D = v($('<td>').css('width', '29px').appendTo(P));
              this.bindControl(
                new b(
                  D,
                  this._seriesProperty.priceLineColor,
                  !0,
                  this.model(),
                  'Change Price Line Color',
                ),
              );
              var I = this.createLineWidthEditor();
              $('<td>').append(I).appendTo(P),
                this.bindControl(
                  new c(
                    I,
                    this._seriesProperty.priceLineWidth,
                    !0,
                    this.model(),
                    'Change Price Line Width',
                  ),
                ),
                (C = $(
                  '<table class="property-page" cellspacing="0" cellpadding="2">',
                ).data('layout-tab', n.TabNames.style));
            }
            if (t.enabled('chart_property_page_scales')) {
              var W = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">',
              ).data('layout-tab', n.TabNames.scales);
              (this._scaleBindings.autoScale = {}),
                (this._scaleBindings.autoScaleDisabled = {}),
                (this._scaleBindings.autoScale.control = $(
                  '<input type="checkbox">',
                ).change(function () {
                  this.checked &&
                    setTimeout(function () {
                      x._model.m_model.lightUpdate();
                    }, 0);
                }));
              var A = this.addLabeledRow(
                W,
                window.t('Auto (Fits Data to Screen)'),
                this._scaleBindings.autoScale.control,
              );
              $('<td>')
                .append(this._scaleBindings.autoScale.control)
                .prependTo(A),
                (this._scaleBindings.lockScale = {}),
                (this._scaleBindings.lockScale.control = $(
                  "<input type='checkbox'/>",
                ));
              var V = this.addLabeledRow(
                W,
                window.t('Lock'),
                this._scaleBindings.lockScale.control,
              );
              $('<td>')
                .append(this._scaleBindings.lockScale.control)
                .prependTo(V);
              this._seriesProperty.style
                .listeners()
                .subscribe(this, function (e) {
                  V.toggle(e.value() === T.STYLE_PNF);
                }),
                (this._scaleBindings.percentage = {}),
                (this._scaleBindings.percentageDisabled = {}),
                (this._scaleBindings.percentage.control = $(
                  '<input type="checkbox">',
                ));
              var O = this.addLabeledRow(
                W,
                window.t('Percent'),
                this._scaleBindings.percentage.control,
              );
              $('<td>')
                .append(this._scaleBindings.percentage.control)
                .prependTo(O),
                (this._scaleBindings.indexedTo100 = {}),
                (this._scaleBindings.indexedTo100Disabled = {}),
                (this._scaleBindings.indexedTo100.control = $(
                  '<input type="checkbox">',
                ));
              var z = this.addLabeledRow(
                W,
                window.t('Indexed to 100'),
                this._scaleBindings.indexedTo100.control,
              );
              $('<td>')
                .append(this._scaleBindings.indexedTo100.control)
                .prependTo(z),
                (this._scaleBindings.log = {}),
                (this._scaleBindings.logDisabled = {}),
                (this._scaleBindings.log.control = $(
                  '<input type="checkbox">',
                ));
              var M = this.addLabeledRow(
                W,
                window.t('Logarithmic'),
                this._scaleBindings.log.control,
              );
              $('<td>').append(this._scaleBindings.log.control).prependTo(M);
              var Y = $('<input type="checkbox">').change(function () {
                  this.checked &&
                    setTimeout(function () {
                      x._model.m_model.lightUpdate();
                    }, 0);
                }),
                q = this.addLabeledRow(
                  W,
                  window.t('Scale Price Chart Only'),
                  Y,
                );
              $('<td>').append(Y).prependTo(q),
                this.bindControl(
                  new h(
                    Y,
                    this._property.scalesProperties.scaleSeriesOnly,
                    !0,
                    this.model(),
                    'Scale Series Only',
                  ),
                ),
                (this._scaleBindings.invertScale = {});
              var H = $("<input type='checkbox'/>");
              this._scaleBindings.invertScale.control = H;
              var N = this.addLabeledRow(
                W,
                window.t('Invert Scale'),
                this._scaleBindings.invertScale.control,
              );
              H.change(function () {
                k('GUI', 'Scales', 'Invert Scale');
              }),
                $('<td>')
                  .append(this._scaleBindings.invertScale.control)
                  .prependTo(N);
              var G = $(
                  '<table class="property-page" cellspacing="0" cellpadding="2">',
                ).data('layout-tab', n.TabNames.scales),
                j = $(
                  '<input type="text" class="ticker ticker--longer-sign_8">',
                ),
                U = this.addLabeledRow(G, window.t('Top Margin'), j);
              $('<td>').appendTo(U).append(j), $('<td>%</td>').appendTo(U);
              var K = [d(this._property.paneProperties.topMargin.value())];
              K.push(s(25)),
                K.push(l(0)),
                this.bindControl(
                  new p(
                    j,
                    this._property.paneProperties.topMargin,
                    K,
                    !0,
                    this.model(),
                    'Top Margin',
                  ),
                );
              var Q = $(
                  '<input type="text" class="ticker ticker--longer-sign_8">',
                ),
                Z = this.addLabeledRow(G, window.t('Bottom Margin'), Q);
              $('<td>').appendTo(Z).append(Q), $('<td>%</td>').appendTo(Z);
              var X = [d(this._property.paneProperties.bottomMargin.value())];
              if (
                (X.push(s(25)),
                X.push(l(0)),
                this.bindControl(
                  new p(
                    Q,
                    this._property.paneProperties.bottomMargin,
                    X,
                    !0,
                    this.model(),
                    'Bottom Margin',
                  ),
                ),
                t.enabled('chart_property_page_right_margin_editor'))
              ) {
                var J = $(
                    '<input type="text" class="ticker ticker--longer-sign_8">',
                  ),
                  ee = this.addLabeledRow(G, window.t('Right Margin'), J);
                $('<td>').appendTo(ee).append(J),
                  $(
                    '<td>' + window.t('bars', { context: 'margin' }) + '</td>',
                  ).appendTo(ee);
                var te = this._chart.timeScale(),
                  ie = [d(te.defaultRightOffsetProperty().value())];
                ie.push(s(~~te.maxRightOffset())),
                  ie.push(l(0)),
                  this.bindControl(
                    new p(
                      J,
                      te.defaultRightOffsetProperty(),
                      ie,
                      !0,
                      this.model(),
                      'Right Margin',
                    ),
                  );
              }
              var oe = $(
                  '<input type="text" class="ticker ticker--longer-sign_8">',
                ),
                ne =
                  ((ee = this.addLabeledRow(
                    G,
                    window.t('Price/Bar Ratio'),
                    oe,
                  )),
                  !0);
              $('<td>').appendTo(ee).append(oe),
                oe.TVTicker({
                  step: this._mainSeriesScaleRatioProperty.getStepChangeValue(),
                });
              var ae = g('', 7),
                re = [
                  y(
                    this._mainSeriesScaleRatioProperty.value.bind(
                      this._mainSeriesScaleRatioProperty,
                    ),
                  ),
                  l(this._mainSeriesScaleRatioProperty.getMinValue()),
                  s(this._mainSeriesScaleRatioProperty.getMaxValue()),
                  ae,
                ],
                le = new p(
                  oe,
                  this._mainSeriesScaleRatioProperty,
                  re,
                  !1,
                  this.model(),
                  'Price/Bar Ratio',
                  function (e) {
                    this._undoModel.setScaleRatioProperty(
                      this._property,
                      e,
                      this._undoText,
                    ),
                      ne &&
                        (k('GUI', 'Scales', 'Edit scale ratio value'),
                        (ne = !1));
                  },
                );
              le.addFormatter(ae), this.bindControl(le);
              var se = $(
                '<table class="property-page" cellspacing="0" cellpadding="2" width="100%">',
              ).data('layout-tab', n.TabNames.scales);
              if (t.enabled('countdown')) {
                var de = $("<input type='checkbox'>"),
                  pe = this.addLabeledRow(
                    se,
                    window.t('Countdown To Bar Close'),
                    de,
                  );
                $('<td>').append(de).prependTo(pe),
                  this.bindControl(
                    new h(
                      de,
                      this._seriesProperty.showCountdown,
                      !0,
                      this.model(),
                      'Change Show Countdown',
                    ),
                  );
              }
              var he = $('<input type="checkbox">'),
                ce = this.addLabeledRow(
                  se,
                  window.t('Indicator Last Value'),
                  he,
                );
              $('<td width="21px">').append(he).prependTo(ce),
                this.bindControl(
                  new h(
                    he,
                    this._property.scalesProperties.showStudyLastValue,
                    !0,
                    this.model(),
                    'Change Indicator Last Value Visibility',
                  ),
                );
              var be = $('<input type="checkbox">'),
                ue = this.addLabeledRow(se, window.t('Symbol Name Label'), be);
              $('<td>').append(be).prependTo(ue),
                this.bindControl(
                  new h(
                    be,
                    this._property.scalesProperties.showSymbolLabels,
                    !0,
                    this.model(),
                    'Show Symbol Labels',
                  ),
                );
              var Ce = $('<input type="checkbox">'),
                ye = this.addLabeledRow(
                  se,
                  window.t('Indicator Name Label'),
                  Ce,
                );
              $('<td>').append(Ce).prependTo(ye),
                this.bindControl(
                  new h(
                    Ce,
                    this._property.scalesProperties.showStudyPlotLabels,
                    !0,
                    this.model(),
                    'Show Study Plots Labels',
                  ),
                ),
                (this._scaleBindings.alignLabels = {}),
                (this._scaleBindings.alignLabels.control = $(
                  "<input type='checkbox' />",
                ));
              var ge = this.addLabeledRow(
                se,
                window.t('No Overlapping Labels'),
                this._scaleBindings.alignLabels.control,
              );
              $('<td>')
                .append(this._scaleBindings.alignLabels.control)
                .prependTo(ge),
                this._bindScaleProperties();
              var we = $('<div class="property-page-column-2">')
                  .append(W)
                  .append(G),
                $e = $('<div class="property-page-column-2">').append(se);
              (m = $('<div>')
                .css('min-width', '620px')
                .data('layout-tab', n.TabNames.scales))
                .append(we)
                .append($e),
                (this.scalesTab = m),
                (r = $(
                  '<table class="property-page" cellspacing="0" cellpadding="2">',
                ).data('layout-tab', n.TabNames.style));
              var Te = $('<tr>');
              $('<td>' + window.t('Price Scales Placement') + '</td>').appendTo(
                Te,
              ),
                r.append(Te);
              var ve = this.createPriceScaleStrategyEditor();
              $('<td>').append(ve).appendTo(Te),
                this.bindControl(
                  new u(
                    ve,
                    this._property.priceScaleSelectionStrategyName,
                    null,
                    !0,
                    this.model(),
                    'Change Price Axises Placement',
                    function (e) {
                      this._undoModel.setPriceScaleSelectionStrategy(e);
                    },
                  ),
                );
              var _e = $('<tr>');
              $('<td>' + window.t('Decimal Places') + '</td>').appendTo(_e);
              var me = this.createSeriesMinTickEditor();
              $('<td>').append(me).appendTo(_e);
              var fe = $('<tr>').appendTo(se),
                Le = $('<td colspan="2">').appendTo(fe);
              r.append(_e).appendTo(Le),
                this.bindControl(
                  new u(
                    me,
                    this._seriesProperty.minTick,
                    null,
                    !0,
                    this.model(),
                    'Change Decimal Places',
                  ),
                );
            }
            if (t.enabled('chart_property_page_background')) {
              var Se = $(
                  '<table class="property-page" cellspacing="0" cellpadding="2">',
                ),
                ke = this.createColorPicker({ hideTransparency: !0 }),
                xe = this.addLabeledRow(Se, window.t('Background'));
              $('<td colspan="2">').append(ke).appendTo(xe),
                this.bindControl(
                  new b(
                    ke,
                    this._property.paneProperties.background,
                    !0,
                    this.model(),
                    'Change Chart Background Color',
                  ),
                );
              var Be = this.addLabeledRow(Se, window.t('Vert Grid Lines')),
                Pe = this.createColorPicker();
              $('<td>').append(Pe).appendTo(Be),
                this.bindControl(
                  new b(
                    Pe,
                    this._property.paneProperties.vertGridProperties.color,
                    !0,
                    this.model(),
                    'Change Vert Grid Lines Color',
                  ),
                );
              var Re = _();
              $('<td colspan="2">').append(Re.render()).appendTo(Be),
                this.bindControl(
                  new u(
                    Re,
                    this._property.paneProperties.vertGridProperties.style,
                    parseInt,
                    !0,
                    this.model(),
                    'Change Vert Grid Lines Style',
                  ),
                );
              var Ee = this.addLabeledRow(Se, window.t('Horz Grid Lines')),
                Fe = this.createColorPicker();
              $('<td>').append(Fe).appendTo(Ee),
                this.bindControl(
                  new b(
                    Fe,
                    this._property.paneProperties.horzGridProperties.color,
                    !0,
                    this.model(),
                    'Change Horz Grid Lines Color',
                  ),
                );
              var De = _();
              $('<td colspan="2">').append(De.render()).appendTo(Ee),
                this.bindControl(
                  new u(
                    De,
                    this._property.paneProperties.horzGridProperties.style,
                    parseInt,
                    !0,
                    this.model(),
                    'Change Horz Grid Lines Style',
                  ),
                );
              var Ie = this.createColorPicker(),
                We = this.addLabeledRow(Se, window.t('Scales Text'));
              $('<td>').append(Ie).appendTo(We),
                this.bindControl(
                  new b(
                    Ie,
                    this._property.scalesProperties.textColor,
                    !0,
                    this.model(),
                    'Change Scales Text Color',
                  ),
                );
              var Ae = this.createFontSizeEditor();
              $('<td>').append(Ae).appendTo(We),
                this.bindControl(
                  new u(
                    Ae,
                    this._property.scalesProperties.fontSize,
                    parseInt,
                    !0,
                    this.model(),
                    'Change Scales Font Size',
                  ),
                );
              var Ve = this.createColorPicker(),
                Oe = this.addLabeledRow(Se, window.t('Scales Lines'));
              $('<td colspan="2">').append(Ve).appendTo(Oe),
                this.bindControl(
                  new b(
                    Ve,
                    this._property.scalesProperties.lineColor,
                    !0,
                    this.model(),
                    'Change Scales Lines Color',
                  ),
                );
              var ze = this.addLabeledRow(Se, window.t('Crosshair')),
                Me = this.createColorPicker();
              $('<td>').append(Me).appendTo(ze),
                this.bindControl(
                  new b(
                    Me,
                    this._property.paneProperties.crossHairProperties.color,
                    !0,
                    this.model(),
                    'Change Crosshair Color',
                    this._property.paneProperties.crossHairProperties.transparency,
                  ),
                );
              var Ye = _();
              $('<td>').append(Ye.render()).appendTo(ze),
                this.bindControl(
                  new u(
                    Ye,
                    this._property.paneProperties.crossHairProperties.style,
                    parseInt,
                    !0,
                    this.model(),
                    'Change Crosshair Style',
                  ),
                );
              var qe = this.createLineWidthEditor();
              $('<td>')
                .append(qe)
                .appendTo(this.addRow(Se).prepend('<td/><td/>')),
                this.bindControl(
                  new c(
                    qe,
                    this._property.paneProperties.crossHairProperties.width,
                    !0,
                    this.model(),
                    'Change Crosshair Width',
                  ),
                );
              var He = this._model.watermarkSource();
              if (null !== He) {
                var Ne = He.properties(),
                  Ge = $('<input type="checkbox">'),
                  je = this.addLabeledRow(Se, window.t('Watermark'), Ge);
                Ge.prependTo(je.find('td')),
                  this.bindControl(
                    new h(
                      Ge,
                      Ne.visibility,
                      !0,
                      this.model(),
                      'Change Symbol Watermark Visibility',
                    ),
                  );
                var Ue = this.createColorPicker();
                $('<td colspan="2">').append(Ue).appendTo(je),
                  this.bindControl(
                    new b(
                      Ue,
                      Ne.color,
                      !0,
                      this.model(),
                      'Change Symbol Watermark Color',
                    ),
                  );
              }
              var Ke = $('<table class="property-page">'),
                Qe = this.addLabeledRow(
                  Ke,
                  window.t('Navigation Buttons'),
                  null,
                  !0,
                ),
                Ze = $(document.createElement('select'));
              L.availableValues().forEach(function (e) {
                $(document.createElement('option'))
                  .attr('value', e.value)
                  .text(e.title)
                  .appendTo(Ze);
              }),
                $('<td>').append(Ze).appendTo(Qe),
                this.bindControl(
                  new u(
                    Ze,
                    L.property(),
                    null,
                    !0,
                    this.model(),
                    'Change Navigation Buttons Visibility',
                  ),
                );
              var Xe = $(
                  '<table class="property-page" cellspacing="0" cellpadding="2">',
                ),
                Je = $('<input type="checkbox">'),
                et = this.addLabeledRow(Xe, window.t('Symbol'), Je, 2);
              $('<td>').append(Je).prependTo(et),
                this.bindControl(
                  new h(
                    Je,
                    this._property.paneProperties.legendProperties.showSeriesTitle,
                    !0,
                    this.model(),
                    'Change Symbol Description Visibility',
                  ),
                );
              var tt = $(document.createElement('select')),
                it = [
                  {
                    value: 'description',
                    title: window.t('Description'),
                    eventLabel: 'Description',
                  },
                  {
                    value: 'ticker',
                    title: window.t('Ticker'),
                    eventLabel: 'Ticker',
                  },
                ];
              it.forEach(function (e) {
                $(document.createElement('option'))
                  .attr('value', e.value)
                  .text(e.title)
                  .appendTo(tt);
              }),
                this.bindControl(
                  new u(
                    tt,
                    this._seriesProperty.statusViewStyle.symbolTextSource,
                    null,
                    !0,
                    this.model(),
                    'Change symbol legend format',
                  ),
                ),
                tt.change(function () {
                  var e = tt.val(),
                    t = it.find(function (t) {
                      return t.value === e;
                    }).eventLabel;
                  k('GUI', 'Change symbol legend format', t);
                }),
                et
                  .find('td')
                  .eq(1)
                  .append($('<span>').css('margin-left', '30px').append(tt));
              var ot = $('<input type="checkbox">'),
                nt = this.addLabeledRow(Xe, window.t('OHLC Values'), ot);
              $('<td>').append(ot).prependTo(nt),
                this.bindControl(
                  new h(
                    ot,
                    this._property.paneProperties.legendProperties.showSeriesOHLC,
                    !0,
                    this.model(),
                    'Change OHLC Values Visibility',
                  ),
                );
              var at = $('<input type="checkbox">'),
                rt = this.addLabeledRow(Xe, window.t('Bar Change Values'), at);
              $('<td>').append(at).prependTo(rt),
                this.bindControl(
                  new h(
                    at,
                    this._property.paneProperties.legendProperties.showBarChange,
                    !0,
                    this.model(),
                    'Change Bar Change Visibility',
                  ),
                );
              var lt = $('<input type="checkbox">'),
                st = this.addLabeledRow(Xe, window.t('Indicator Titles'), lt);
              $('<td>').append(lt).prependTo(st),
                this.bindControl(
                  new h(
                    lt,
                    this._property.paneProperties.legendProperties.showStudyTitles,
                    !0,
                    this.model(),
                    'Change Indicator Titles Visibility',
                  ),
                );
              var dt = $('<input type="checkbox">'),
                pt = this.addLabeledRow(
                  Xe,
                  window.t('Indicator Arguments'),
                  dt,
                ),
                ht = function (e) {
                  dt.prop('disabled', !e.value());
                };
              $('<td>').append(dt).prependTo(pt),
                this.bindControl(
                  new h(
                    dt,
                    this._property.paneProperties.legendProperties.showStudyArguments,
                    !0,
                    this.model(),
                    'Change Indicator Arguments Visibility',
                  ),
                ),
                this._property.paneProperties.legendProperties.showStudyTitles
                  .listeners()
                  .subscribe(this, ht),
                ht(
                  this._property.paneProperties.legendProperties
                    .showStudyTitles,
                );
              var ct = $('<input type="checkbox">'),
                bt = this.addLabeledRow(Xe, window.t('Indicator Values'), ct);
              $('<td>').append(ct).prependTo(bt),
                this.bindControl(
                  new h(
                    ct,
                    this._property.paneProperties.legendProperties.showStudyValues,
                    !0,
                    this.model(),
                    'Change Indicator Values Visibility',
                  ),
                );
              var ut = $('<div class="property-page-column-2">').append(Se),
                Ct = $('<div class="property-page-column-2">').append(Xe),
                yt = $('<div class="property-page-column-1">').append(Ke);
              (f = $('<div>')
                .css('min-width', '620px')
                .data('layout-tab', n.TabNames.background))
                .append(ut)
                .append(Ct)
                .append(yt);
            }
            if (t.enabled('chart_property_page_timezone_sessions')) {
              var gt = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">',
              ).data('layout-tab', n.TabNames.timezoneSessions);
              this.tmzSessTable = gt;
              ee = $('<tr>').appendTo(gt);
              var wt = $('<td>').appendTo(ee),
                $t = $('<table cellspacing="0" cellpadding="0">').appendTo(wt);
              this.addTimezoneEditorRow($t),
                this.addTateFormatEditorRow($t),
                this.createSessTable(gt);
            }
            (t.enabled('trading_options') ||
              t.enabled('chart_property_page_trading')) &&
              (S = this.createTradingTable());
            var Tt = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">',
              ),
              vt = $(
                '<table class="property-page property-page-unpadded" cellspacing="0" cellpadding="0">',
              )
                .css({ width: '100%' })
                .data('layout-separated', !0),
              _t = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">',
              ).data('layout-tab', n.TabNames.drawings);
            (this._table = $()
              .add(e)
              .add(i)
              .add(o)
              .add(Tt)
              .add(vt)
              .add(a)
              .add(C)
              .add(m)
              .add(f)
              .add(_t)
              .add(gt)
              .add(S)
              .add(void 0)),
              this.loadData();
          }),
          (R.prototype._bindScaleProperties = function () {
            var e,
              t = this;
            (this._scaleBindings.autoScale.binder = new h(
              this._scaleBindings.autoScale.control,
              this._scaleProperties.autoScale,
              !0,
              this.model(),
              'Auto Scale',
              function (i) {
                (e = { autoScale: i }),
                  this._undoModel.setPriceScaleMode(
                    e,
                    t._series.priceScale(),
                    this._undoText,
                  );
              },
            )),
              (this._scaleBindings.autoScaleDisabled.binder = new C(
                this._scaleBindings.autoScale.control,
                this._scaleProperties.autoScaleDisabled,
                !0,
                this.model(),
                'Auto Scale',
              )),
              this.bindControl(this._scaleBindings.autoScale.binder),
              this.bindControl(this._scaleBindings.autoScaleDisabled.binder);
            (this._scaleBindings.percentage.binder = new h(
              this._scaleBindings.percentage.control,
              this._scaleProperties.percentage,
              !0,
              this.model(),
              'Scale Percentage',
              function (i) {
                (e = { percentage: i }),
                  this._undoModel.setPriceScaleMode(
                    e,
                    t._series.priceScale(),
                    this._undoText,
                  );
              },
            )),
              (this._scaleBindings.percentageDisabled.binder = new C(
                this._scaleBindings.percentage.control,
                this._scaleProperties.percentageDisabled,
                !0,
                this.model(),
                'Scale Percentage',
              )),
              this.bindControl(this._scaleBindings.percentage.binder),
              this.bindControl(this._scaleBindings.percentageDisabled.binder);
            (this._scaleBindings.indexedTo100.binder = new h(
              this._scaleBindings.indexedTo100.control,
              this._scaleProperties.indexedTo100,
              !0,
              this.model(),
              'Scale Indexed to 100',
              function (i) {
                (e = { indexedTo100: i }),
                  this._undoModel.setPriceScaleMode(
                    e,
                    t._series.priceScale(),
                    this._undoText,
                  );
              },
            )),
              (this._scaleBindings.indexedTo100Disabled.binder = new C(
                this._scaleBindings.indexedTo100.control,
                this._scaleProperties.percentageDisabled,
                !0,
                this.model(),
                'Scale Indexed to 100',
              )),
              this.bindControl(this._scaleBindings.indexedTo100.binder),
              this.bindControl(this._scaleBindings.indexedTo100Disabled.binder);
            (this._scaleBindings.log.binder = new h(
              this._scaleBindings.log.control,
              this._scaleProperties.log,
              !0,
              this.model(),
              'Log Scale',
              function (i) {
                (e = { log: i }),
                  this._undoModel.setPriceScaleMode(
                    e,
                    t._series.priceScale(),
                    this._undoText,
                  );
              },
            )),
              (this._scaleBindings.logDisabled.binder = new C(
                this._scaleBindings.log.control,
                this._scaleProperties.logDisabled,
                !0,
                this.model(),
                'Log Scale',
              )),
              this.bindControl(this._scaleBindings.log.binder),
              this.bindControl(this._scaleBindings.logDisabled.binder);
            (this._scaleBindings.lockScale.binder = new h(
              this._scaleBindings.lockScale.control,
              this._scaleProperties.lockScale,
              !0,
              this.model(),
              'Change lock scale',
              function (i) {
                (e = { lockScale: i }),
                  this._undoModel.setPriceScaleMode(
                    e,
                    t._series.priceScale(),
                    this._undoText,
                  );
              },
            )),
              this.bindControl(this._scaleBindings.lockScale.binder),
              (this._scaleBindings.alignLabels.binder = new h(
                this._scaleBindings.alignLabels.control,
                this._scaleProperties.alignLabels,
                !0,
                this.model(),
                'No Overlapping Labels',
              )),
              this.bindControl(this._scaleBindings.alignLabels.binder),
              (this._scaleBindings.invertScale.binder = new h(
                this._scaleBindings.invertScale.control,
                this._scaleProperties.isInverted,
                !0,
                this.model(),
                'Invert Scale',
              )),
              this.bindControl(this._scaleBindings.invertScale.binder);
          }),
          (R.prototype._unbindScaleProperties = function () {
            this.unbindControl(this._scaleBindings.autoScale.binder),
              this.unbindControl(this._scaleBindings.autoScaleDisabled.binder),
              this.unbindControl(this._scaleBindings.percentage.binder),
              this.unbindControl(this._scaleBindings.percentageDisabled.binder),
              this.unbindControl(this._scaleBindings.indexedTo100.binder),
              this.unbindControl(
                this._scaleBindings.indexedTo100Disabled.binder,
              ),
              this.unbindControl(this._scaleBindings.log.binder),
              this.unbindControl(this._scaleBindings.logDisabled.binder),
              this.unbindControl(this._scaleBindings.lockScale.binder),
              this.unbindControl(this._scaleBindings.alignLabels.binder),
              this.unbindControl(this._scaleBindings.invertScale.binder),
              this._scaleBindings.autoScale.binder.destroy(),
              this._scaleBindings.autoScaleDisabled.binder.destroy(),
              this._scaleBindings.percentage.binder.destroy(),
              this._scaleBindings.percentageDisabled.binder.destroy(),
              this._scaleBindings.indexedTo100.binder.destroy(),
              this._scaleBindings.indexedTo100Disabled.binder.destroy(),
              this._scaleBindings.log.binder.destroy(),
              this._scaleBindings.logDisabled.binder.destroy(),
              this._scaleBindings.alignLabels.binder.destroy(),
              this._scaleBindings.invertScale.binder.destroy();
          }),
          (R.prototype._updateScaleProperties = function () {
            this._unbindScaleProperties(),
              (this._scaleProperties = this._series.priceScale().properties()),
              this._bindScaleProperties();
          }),
          (R.prototype.widget = function () {
            return this._table;
          }),
          (R.prototype.loadData = function () {
            o.prototype.loadData.call(this), this.switchStyle();
          }),
          (R.prototype.loadTheme = function (e, t, i) {}),
          (R.prototype.createTemplateButton = function (e) {
            if (!t.enabled('chart_property_page_template_button'))
              return $('<span />');
            return (
              e || (e = {}),
              $(
                '<a href="#" class="_tv-button">' +
                  window.t('Template') +
                  '<span class="icon-dropdown"></span></a>',
              )
            );
          }),
          (R.prototype.createApplyToAllButton = function (e) {
            var t = $(
              '<a class="_tv-button ok">' + window.t('Apply To All') + '</a>',
            );
            return t.click(e.bind(this)), t;
          }),
          (R.prototype.switchStyle = function () {
            if (this._hasSeriesStyleLayout) {
              switch (
                ($(this._barsTbody)
                  .add(this._barsColorerTbody)
                  .add(this._candlesTbody)
                  .add(this._candlesColorerTbody)
                  .add(this._hollowCandlesTbody)
                  .add(this._lineTbody)
                  .add(this._areaTbody)
                  .add(this._haTbody)
                  .add(this._haColorerTbody)
                  .add(this._baselineTbody)
                  .add(this._hiloTbody)
                  .css('display', 'none'),
                this._seriesProperty.style.value())
              ) {
                case T.STYLE_BARS:
                  this._barsTbody.css('display', 'table-row-group'),
                    this._barsColorerTbody.css('display', 'table-row-group');
                  break;
                case T.STYLE_CANDLES:
                  this._candlesTbody.css('display', 'table-row-group'),
                    this._candlesColorerTbody.css('display', 'table-row-group');
                  break;
                case T.STYLE_HOLLOW_CANDLES:
                  this._hollowCandlesTbody.css('display', 'table-row-group');
                  break;
                case T.STYLE_LINE:
                  this._lineTbody.css('display', 'table-row-group');
                  break;
                case T.STYLE_AREA:
                  this._areaTbody.css('display', 'table-row-group');
                  break;
                case T.STYLE_HILO:
                  this._hiloTbody.css('display', 'table-row-group');
                  break;
                case T.STYLE_HEIKEN_ASHI:
                  this._haTbody.css('display', 'table-row-group'),
                    this._haColorerTbody.css('display', 'table-row-group');
                  break;
                case T.STYLE_BASELINE:
                  this._baselineTbody.css('display', 'table-row-group');
              }
              this._priceLineTable.css(
                'display',
                this._seriesProperty.style.value() === T.STYLE_HILO
                  ? 'none'
                  : 'table',
              );
            }
          }),
          (R.prototype.onResoreDefaults = function () {
            var e = this._model.model().properties().paneProperties.topMargin,
              t = this._model.model().properties().paneProperties.bottomMargin;
            e.listeners().fire(e),
              t.listeners().fire(t),
              this._chart.timeScale().restoreRightOffsetPropertyToDefault();
            var i = this._model.model().properties().timezone;
            i.listeners().fire(i);
          }),
          (R.prototype.defaultProperties = function () {
            var e = this,
              t = [e._seriesProperty.extendedHours].map(function (e) {
                return { property: e, previousValue: e.value() };
              });
            return (
              setTimeout(function () {
                t.forEach(function (e) {
                  e.property.value() !== e.previousValue &&
                    e.property.listeners().fire(e.property);
                });
                var i = new m('chartproperties.paneProperties.axisProperties');
                ['autoScale', 'percentage', 'log', 'indexedTo100'].forEach(
                  function (t) {
                    var o = e._scaleProperties[t],
                      n = i[t].value();
                    n !== o.value() && o.setValue(n);
                  },
                );
              }, 0),
              [this._property, this._seriesProperty]
            );
          }),
          (R.prototype.createSessTable = function (e) {
            var t = this._chart.sessions().properties().graphics,
              i = this.createTableInTable(e),
              o = $("<input type='checkbox' />"),
              n = this.addLabeledRow(i, window.t('Session Breaks'), o),
              a = _(),
              r = this.createColorPicker(),
              l = this.createLineWidthEditor();
            $('<td>').append(o).prependTo(n),
              $('<td>').append(r).appendTo(n),
              $('<td>').append(a.render()).appendTo(n),
              $('<td>').append(l).appendTo(n),
              this.bindControl(
                new h(
                  o,
                  t.vertlines.sessBreaks.visible,
                  !0,
                  this.model(),
                  'Change Sessions Breaks visibility',
                ),
              ),
              this.bindControl(
                new b(
                  r,
                  t.vertlines.sessBreaks.color,
                  !0,
                  this.model(),
                  'Change Session Breaks color',
                ),
              ),
              this.bindControl(
                new u(
                  a,
                  t.vertlines.sessBreaks.style,
                  parseInt,
                  !0,
                  this.model(),
                  'Change Session Breaks style',
                ),
              ),
              this.bindControl(
                new c(
                  l,
                  t.vertlines.sessBreaks.width,
                  !0,
                  this.model(),
                  'Change Session Breaks width',
                ),
              );
            var s = this._series.isDWM();
            return o.prop('disabled', s), i;
          }),
          (R.prototype.addTimezoneEditorRow = function (e) {
            var t = $('<tr>');
            t.appendTo(e);
            var i = $('<td>');
            i.appendTo(t), i.text(window.t('Time Zone'));
            var o = $('<td colspan="2" class="tzeditor">');
            o.appendTo(t);
            for (var n = '', a = 0; a < f.length; a++)
              n +=
                '<option value="' + f[a].id + '">' + f[a].title + '</option>';
            var r = $('<select>' + n + '</select>');
            r.appendTo(o),
              this.bindControl(
                new u(
                  r,
                  this._property.timezone,
                  null,
                  !0,
                  this.model(),
                  'Change Timezone',
                ),
              );
          }),
          (R.prototype.addTateFormatEditorRow = function (e) {
            var t = $('<tr></tr>');
            t.appendTo(e);
            var i = $('<td>');
            i.appendTo(t), i.text(window.t('Date Format'));
            var o = $('<td colspan="2" class="tzeditor">');
            o.appendTo(t);
            for (
              var n = '', a = new Date(Date.UTC(1997, 8, 29)), r = 0;
              r < x.length;
              r++
            ) {
              var l = new P(x[r]);
              n += '<option value="' + x[r] + '">' + l.format(a) + '</option>';
            }
            var s = $('<select>' + n + '</select>');
            s.appendTo(o);
            var d = new u(s, B, null, !0, this.model(), 'Change Date Format');
            d.disableAffectingSave(),
              this.bindControl(d),
              s.change(function () {
                var e = B.value();
                k('GUI', 'Change Date And Time Format', e);
              });
          }),
          (R.prototype._createStudySessRow = function (e, t, i) {
            var o = $("<input type='checkbox' />"),
              n = this.addLabeledRow(e, t, o),
              a = v($('<td>').appendTo(n));
            return (
              this.bindControl(
                new h(
                  o,
                  i.visible,
                  !0,
                  this.model(),
                  'Change ' + t + ' visibility',
                ),
              ),
              this.bindControl(
                new b(
                  a,
                  i.color,
                  !0,
                  this.model(),
                  t + ' color',
                  i.transparency,
                ),
              ),
              $('<td>').append(o).prependTo(n),
              n.addClass('offset-row'),
              o
            );
          }),
          (R.prototype.createTradingTable = function () {
            var e = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">',
              ).data('layout-tab', n.TabNames.trading),
              t = $('<tr>').appendTo(e),
              i = $('<td>').appendTo(t),
              o = $('<table cellspacing="0" cellpadding="0">').appendTo(i),
              a = $('<input type="checkbox">');
            (t = this.addLabeledRow(o, window.t('Show Positions'), a)),
              $('<td>').append(a).prependTo(t),
              this.bindControl(
                new h(
                  a,
                  this._property.tradingProperties.showPositions,
                  !0,
                  this.model(),
                  'Change Positions Visibility',
                ),
              );
            var r = $('<input type="checkbox">');
            (t = this.addLabeledRow(o, window.t('Show Orders'), r)),
              $('<td>').append(r).prependTo(t),
              this.bindControl(
                new h(
                  r,
                  this._property.tradingProperties.showOrders,
                  !0,
                  this.model(),
                  'Change Orders Visibility',
                ),
              );
            var b = $('<input type="checkbox">'),
              C = this.addLabeledRow(o, window.t('Extend Lines Left'), b);
            $('<td>').append(b).prependTo(C),
              this.bindControl(
                new h(
                  b,
                  this._property.tradingProperties.extendLeft,
                  !0,
                  this.model(),
                  'Extend Lines Left',
                ),
              );
            var y = this.createLineWidthEditor();
            this.bindControl(
              new c(
                y,
                this._property.tradingProperties.lineWidth,
                !0,
                this.model(),
                'Change Connecting Line Width',
              ),
            );
            var g = _();
            this.bindControl(
              new u(
                g,
                this._property.tradingProperties.lineStyle,
                parseInt,
                !0,
                this.model(),
                'Change Connecting Line Style',
              ),
            );
            var w = $('<input type="text" class="ticker">'),
              T = [
                d(this._property.tradingProperties.lineLength.value()),
                s(100),
                l(0),
              ];
            this.bindControl(
              new p(
                w,
                this._property.tradingProperties.lineLength,
                T,
                !0,
                this.model(),
                'Change Connecting Line Length',
              ),
            );
            var v = $('<tbody>'),
              m = this.addLabeledRow(o, window.t('Connecting Line'), v);
            $('<td>').prependTo(m),
              $('<td>').append(y).appendTo(m),
              $('<td colspan="3">').append(g.render()).appendTo(m),
              $('<td colspan="3">').append(w).appendTo(m),
              $('<td>%</td>').appendTo(m);
            var f = $('<input type="checkbox">'),
              L = this.addLabeledRow(o, window.t('Show Executions'), f);
            return (
              $('<td>').append(f).prependTo(L),
              this.bindControl(
                new h(
                  f,
                  this._property.tradingProperties.showExecutions,
                  !0,
                  this.model(),
                  'Change Executions Visibility',
                ),
              ),
              e
            );
          }),
          (e.exports = R);
      }.call(this, i('Kxc7')));
    },
    '1ANp': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'navigationButtonsVisibilityKey', function () {
          return a;
        }),
        i.d(t, 'property', function () {
          return r;
        }),
        i.d(t, 'availableValues', function () {
          return l;
        }),
        i.d(t, 'actualBehavior', function () {
          return s;
        });
      var o,
        n = i('+jnJ'),
        a = 'NavigationButtons.visibility',
        r = (o = Object(n.b)(a)).property,
        l = o.availableValues,
        s = o.actualBehavior;
    },
    '1WFa': function (e, t, i) {
      'use strict';
      i('YFKU');
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.SimpleComboBinder,
        r = n.ColorBinding,
        l = n.SliderBinder,
        s = n.BooleanBinder;
      function d(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(d, o),
        (d.prototype.prepareLayout = function () {
          this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          );
          var e = this._linetool.getDegrees(),
            t = this.createKeyCombo(e);
          t.width(300);
          var i = this.createColorPicker(),
            o = $('<input type="checkbox" class="visibility-switch">'),
            n = this.addLabeledRow(this._table, window.t('Degree'));
          $('<td>').prependTo(n), $('<td>').append(t).appendTo(n);
          n = this.addLabeledRow(this._table, window.t('Line Width'));
          var d = this.createLineWidthEditor();
          $('<td>').prependTo(n), $('<td>').append(d).appendTo(n);
          n = this.addLabeledRow(this._table, window.t('Color'));
          $('<td>').prependTo(n), $('<td>').append(i).appendTo(n);
          n = this.addLabeledRow(this._table, window.t('Show Wave'), o);
          $('<td>').append(o).prependTo(n),
            this.bindControl(
              new r(
                i,
                this._linetool.properties().color,
                !0,
                this.model(),
                'Change Elliott Label Color',
              ),
            ),
            this.bindControl(
              new a(
                t,
                this._linetool.properties().degree,
                parseInt,
                !0,
                this.model(),
                'Change Elliott Wave Size',
              ),
            ),
            this.bindControl(
              new s(
                o,
                this._linetool.properties().showWave,
                !0,
                this.model(),
                'Change Elliott Labels Background',
              ),
            ),
            this.bindControl(
              new l(
                d,
                this._linetool.properties().linewidth,
                parseInt,
                this.model(),
                'Change Elliott Wave Line Width',
              ),
            ),
            this.loadData();
        }),
        (d.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = d);
    },
    '1aTc': function (e, t, i) {
      'use strict';
      var o = i('DxCR'),
        n = o.PropertyPage,
        a = o.SimpleComboBinder,
        r = o.BooleanBinder,
        l = o.SliderBinder,
        s = o.ColorBinding,
        d = i('o6hY').StudyStylesPropertyPage;
      function p(e, t, i) {
        n.call(this, e, t), (this._study = i), this.prepareLayout();
      }
      inherit(p, n),
        (p.prototype.prepareLayout = function () {
          var e = this;
          this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          );
          var t = this.createFontSizeEditor(),
            i = this.createFontEditor(),
            o = $("<input type='checkbox' class='visibility-switch'/>"),
            n = this.createTableInTable(this._table),
            p = this.addLabeledRow(n, 'Labels Font');
          $('<td>').append(i).appendTo(p), $('<td>').append(t).appendTo(p);
          var h = this.createTableInTable(this._table);
          p = this.addLabeledRow(h, 'Show Labels');
          $('<td>').append(o).prependTo(p),
            (this.pivotTypes = {
              Traditional: {
                'S5/R5': !0,
                'S4/R4': !0,
                'S3/R3': !0,
                'S2/R2': !0,
                'S1/R1': !0,
                P: !0,
              },
              Fibonacci: { 'S3/R3': !0, 'S2/R2': !0, 'S1/R1': !0, P: !0 },
              Woodie: {
                'S4/R4': !0,
                'S3/R3': !0,
                'S2/R2': !0,
                'S1/R1': !0,
                P: !0,
              },
              Classic: {
                'S4/R4': !0,
                'S3/R3': !0,
                'S2/R2': !0,
                'S1/R1': !0,
                P: !0,
              },
              DM: { 'S1/R1': !0, P: !0 },
              DeMark: { 'S1/R1': !0, P: !0 },
              Camarilla: {
                'S4/R4': !0,
                'S3/R3': !0,
                'S2/R2': !0,
                'S1/R1': !0,
                P: !0,
              },
            }),
            this.bindControl(
              new a(
                i,
                this._study.properties().font,
                null,
                !0,
                this.model(),
                'Change Pivots Font',
              ),
            ),
            this.bindControl(
              new a(
                t,
                this._study.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Pivots Font Size',
              ),
            ),
            this.bindControl(
              new r(
                o,
                this._property.levelsStyle.showLabels,
                !0,
                e.model(),
                'Show Pivot Labels',
              ),
            );
          var c = this._property.levelsStyle.visibility,
            b = this._property.levelsStyle.colors,
            u = this._property.levelsStyle.widths;
          e._rows = [];
          !(function (e, t, i, o) {
            for (var n = 0; n < e._childs.length; n++) {
              var a = e._childs[n];
              o(e[a], t[a], i[a], a);
            }
          })(c, b, u, function (t, i, o, n) {
            var a = $("<input type='checkbox' class='visibility-switch'/>");
            e.bindControl(new r(a, t, !0, e.model(), 'Change ' + n));
            var d = e.addLabeledRow(h, n, a);
            $('<td>').append(a).prependTo(d);
            var p = e.createColorPicker();
            $('<td>').append(p).appendTo(d),
              e.bindControl(
                new s(p, i, !0, e.model(), 'Change ' + n + ' color'),
              );
            var c = e.createLineWidthEditor();
            $('<td>').append(c).appendTo(d),
              e.bindControl(
                new l(c, o, !0, e.model(), 'Change ' + n + ' width'),
              ),
              e._rows.push({ row: d, label: n, visibilityEditor: a });
          });
          var C = e._study._properties.inputs.kind;
          e.lockNotUsedVisEditors(C.value()),
            C.subscribe(e, function (t) {
              e.lockNotUsedVisEditors(t.value());
            }),
            d.prototype._putStudyDefaultStyles.call(this, this._table, 3);
        }),
        (p.prototype.lockNotUsedVisEditors = function (e) {
          for (var t = 0; t < this._rows.length; t++) {
            var i = this._rows[t],
              o = i.label,
              n = this.pivotTypes[e][o];
            i.visibilityEditor.prop('disabled', !n),
              i.row.css('opacity', n ? 1 : 0.5);
          }
        }),
        (p.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = p);
    },
    '2KYr': function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.BooleanBinder,
        r = n.FloatBinder,
        l = n.ColorBinding,
        s = n.SimpleComboBinder,
        d = n.SliderBinder,
        p = i('jNEI').addColorPicker,
        h = i('/4PT').createLineStyleEditor,
        c = i('y/RR').createTransparencyEditor;
      function b(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(b, o),
        (b.prototype.onResoreDefaults = function () {
          this._linetool
            .properties()
            .style.listeners()
            .fire(this._linetool.properties().style);
        }),
        (b.prototype.addLevelEditor = function (e, t, i) {
          var o = $('<tr>');
          if ((o.appendTo(this._table), e)) {
            var n = $('<td>');
            n.appendTo(o);
            var c = $("<input type='checkbox' class='visibility-switch'>");
            c.appendTo(n);
            var b = $('<td>');
            b.appendTo(o);
            var u = $("<input type='text'>");
            u.appendTo(b),
              u.css('width', '70px'),
              this.bindControl(
                new a(
                  c,
                  t.visible,
                  !0,
                  this.model(),
                  'Change Pitchfork Line Visibility',
                ),
              ),
              this.bindControl(
                new r(
                  u,
                  t.coeff,
                  !1,
                  this.model(),
                  'Change Pitchfork Line Coeff',
                ),
              );
          } else
            $('<td></td>').appendTo(o),
              $('<td>' + $.t('Median') + '</td>').appendTo(o);
          var C = $("<td class='colorpicker-cell'>");
          C.appendTo(o);
          var y = p(C),
            g = $('<td>');
          g.appendTo(o);
          var w = this.createLineWidthEditor();
          w.appendTo(g);
          var T = $('<td>');
          T.appendTo(o);
          var v = h();
          v.render().appendTo(T),
            this.bindControl(
              new l(
                y,
                t.color,
                !0,
                this.model(),
                'Change Pitchfork Line Color',
                0,
              ),
            ),
            this.bindControl(
              new s(
                v,
                t.linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Pitchfork Line Style',
              ),
            ),
            this.bindControl(
              new d(
                w,
                t.linewidth,
                !0,
                this.model(),
                'Change Pitchfork Line Width',
              ),
            );
        }),
        (b.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            this.addLevelEditor(null, this._linetool.properties().median, !1);
          for (var e = 0; e <= 8; e++) {
            var t = 'level' + e;
            this.addLevelEditor(
              $.t('Level {0}').format(e + 1),
              this._linetool.properties()[t],
              !1,
            );
          }
          this.addOneColorPropertyWidget(this._table),
            (n = $('<tr>')).appendTo(this._table);
          var i = $("<input type='checkbox' class='visibility-switch'>");
          $('<td>').append(i).appendTo(n),
            this.createLabeledCell('Background', i).appendTo(n);
          var o = c();
          $('<td colspan="3">').append(o).appendTo(n);
          var n,
            r = $(
              "<select><option value='0'>" +
                $.t('Original') +
                "</option><option value='3'>" +
                $.t('Schiff') +
                "</option><option value='1'>" +
                $.t('Modified Schiff') +
                "</option><option value='2'>" +
                $.t('Inside') +
                '</option></select>',
            );
          (n = $('<tr>')).appendTo(this._table),
            $('<td>' + $.t('Style') + '</td>').appendTo(n),
            $('<td>').append(r).appendTo(n),
            this.bindControl(
              new s(
                r,
                this._linetool.properties().style,
                parseInt,
                !0,
                this.model(),
                'Change Pitchfork Style',
              ),
            ),
            this.bindControl(
              new a(
                i,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Pitchfork Background Visibility',
              ),
            ),
            this.bindControl(
              new d(
                o,
                this._linetool.properties().transparency,
                !0,
                this.model(),
                'Change Pitchfork Background Transparency',
              ),
            ),
            this.loadData();
        }),
        (b.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = b);
    },
    '5Y1l': function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.BooleanBinder,
        r = n.ColorBinding,
        l = n.SliderBinder;
      function s(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(s, o),
        (s.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2');
          var e = this.createLineWidthEditor(),
            t = this.createColorPicker();
          (n = this.addLabeledRow(this._table, $.t('Border'))).prepend('<td>'),
            $('<td>').append(t).appendTo(n),
            $('<td>').append(e).appendTo(n);
          var i = $('<input type="checkbox" class="visibility-switch">'),
            o = this.createColorPicker(),
            n = this.addLabeledRow(this._table, $.t('Background'), i);
          $('<td>').append(i).prependTo(n),
            $('<td>').append(o).appendTo(n),
            this.bindControl(
              new a(
                i,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Triangle Filling',
              ),
            ),
            this.bindControl(
              new r(
                t,
                this._linetool.properties().color,
                !0,
                this.model(),
                'Change Triangle Line Color',
              ),
            ),
            this.bindControl(
              new r(
                o,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Triangle Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new l(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Triangle Border Width',
              ),
            ),
            this.loadData();
        }),
        (s.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = s);
    },
    '5fTj': function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.SimpleComboBinder,
        r = n.ColorBinding,
        l = n.BooleanBinder,
        s = n.SliderBinder,
        d = i('/4PT').createLineStyleEditor;
      function p(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(p, o),
        (p.prototype.prepareLayout = function () {
          this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          );
          var e = $('<tbody>').appendTo(this._table),
            t = this.createLineWidthEditor(),
            i = d(),
            o = this.createColorPicker(),
            n = this.addLabeledRow(e, $.t('Line'));
          $('<td>').append(o).appendTo(n),
            $('<td>').append(t).appendTo(n),
            $('<td colspan="3">').append(i.render()).appendTo(n);
          n = this.addLabeledRow(e, $.t('Text'));
          var p = this.createColorPicker(),
            h = this.createFontSizeEditor(),
            c = this.createFontEditor(),
            b = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>',
            ),
            u = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>',
            );
          $('<td>').append(p).appendTo(n),
            $('<td>').append(c).appendTo(n),
            $('<td>').append(h).appendTo(n),
            $('<td>').append(b).appendTo(n),
            $('<td>').append(u).appendTo(n);
          var C = $('<tbody>').appendTo(this._table),
            y = $('<input type="checkbox" class="visibility-switch">'),
            g = this.createColorPicker(),
            w =
              ((n = this.addLabeledRow(C, $.t('Background'), y)), $('<table>'));
          $('<td colspan="5">').append(w).appendTo(n);
          n = $('<tr>').appendTo(w);
          $('<td>').append(y).appendTo(n), $('<td>').append(g).appendTo(n);
          var T = $('<tbody>').appendTo(this._table),
            v = $('<label>' + $.t('Extend') + ' </label>').css({
              'margin-left': '8px',
            }),
            _ = $('<input type="checkbox">').appendTo(v),
            m = $('<label>' + $.t('Extend') + ' </label>').css({
              'margin-left': '8px',
            }),
            f = $('<input type="checkbox">').appendTo(m),
            L = $(
              "<select><option value='0'>" +
                $.t('Normal') +
                "</option><option value='1'>" +
                $.t('Arrow') +
                '</option></select>',
            ),
            S = $(
              "<select><option value='0'>" +
                $.t('Normal') +
                "</option><option value='1'>" +
                $.t('Arrow') +
                '</option></select>',
            );
          n = this.addLabeledRow(T, $.t('Left End'));
          $('<td colspan="3">').appendTo(n).append(L).append(v);
          n = this.addLabeledRow(T, $.t('Right End'));
          $('<td colspan="3">').appendTo(n).append(S).append(m);
          var k = $('<tbody>').appendTo(this._table),
            x = ((n = $('<tr>').appendTo(k)), $("<input type='checkbox'>")),
            B = $("<label style='display:block'>")
              .append(x)
              .append($.t('Show Prices'));
          $("<td colspan='2'>").append(B).appendTo(n),
            this.bindControl(
              new a(
                h,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new a(
                c,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Text Font',
              ),
            ),
            this.bindControl(
              new r(
                p,
                this._linetool.properties().textcolor,
                !0,
                this.model(),
                'Change Text Color',
              ),
            ),
            this.bindControl(
              new l(
                b,
                this._linetool.properties().bold,
                !0,
                this.model(),
                'Change Text Font Bold',
              ),
            ),
            this.bindControl(
              new l(
                u,
                this._linetool.properties().italic,
                !0,
                this.model(),
                'Change Text Font Italic',
              ),
            ),
            this.bindControl(
              new l(
                x,
                this._linetool.properties().showPrices,
                !0,
                this.model(),
                'Change Disjoint Angle Show Prices',
              ),
            ),
            this.bindControl(
              new l(
                _,
                this._linetool.properties().extendLeft,
                !0,
                this.model(),
                'Change Disjoint Angle Extending Left',
              ),
            ),
            this.bindControl(
              new l(
                f,
                this._linetool.properties().extendRight,
                !0,
                this.model(),
                'Change Disjoint Angle Extending Right',
              ),
            ),
            this.bindControl(
              new r(
                o,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Disjoint Angle Color',
              ),
            ),
            this.bindControl(
              new a(
                i,
                this._linetool.properties().linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Disjoint Angle Style',
              ),
            ),
            this.bindControl(
              new s(
                t,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Disjoint Angle Width',
              ),
            ),
            this.bindControl(
              new a(
                L,
                this._linetool.properties().leftEnd,
                parseInt,
                !0,
                this.model(),
                'Change Disjoint Angle Left End',
              ),
            ),
            this.bindControl(
              new a(
                S,
                this._linetool.properties().rightEnd,
                parseInt,
                !0,
                this.model(),
                'Change Disjoint Angle Right End',
              ),
            ),
            this.bindControl(
              new l(
                y,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Disjoint Angle Filling',
              ),
            ),
            this.bindControl(
              new r(
                g,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Disjoint Angle Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.loadData();
        }),
        (p.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = p);
    },
    '68pv': function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.SimpleComboBinder,
        r = n.ColorBinding;
      function l(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(l, o),
        (l.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2');
          var e = this.createColorPicker(),
            t = this.createFontSizeEditor(),
            i = this.createColorPicker(),
            o = this.createColorPicker(),
            n = this.addLabeledRow(this._table, $.t('Text'));
          $('<td>').append(e).appendTo(n), $('<td>').append(t).appendTo(n);
          n = this.addLabeledRow(this._table, $.t('Background'));
          $('<td>').append(i).appendTo(n);
          n = this.addLabeledRow(this._table, $.t('Border'));
          $('<td>').append(o).appendTo(n),
            this.bindControl(
              new r(
                e,
                this._linetool.properties().color,
                !0,
                this.model(),
                'Change Price Text Color',
              ),
            ),
            this.bindControl(
              new a(
                t,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Price Text Font Size',
              ),
            ),
            this.bindControl(
              new r(
                i,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new r(
                o,
                this._linetool.properties().borderColor,
                !0,
                this.model(),
                'Change Border Color',
              ),
            ),
            this.loadData();
        }),
        (l.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = l);
    },
    '68yv': function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.BooleanBinder,
        r = n.ColorBinding,
        l = n.FloatBinder,
        s = n.SimpleComboBinder,
        d = n.SliderBinder,
        p = i('jNEI').addColorPicker,
        h = i('/4PT').createLineStyleEditor,
        c = i('y/RR').createTransparencyEditor;
      function b(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(b, o),
        (b.prototype.addLevelEditor = function (e, t, i) {
          var o = $('<tr>');
          o.appendTo(e);
          var n = $('<td>');
          n.appendTo(o);
          var s = $("<input type='checkbox' class='visibility-switch'>");
          s.appendTo(n);
          var d = $('<td>');
          d.appendTo(o);
          var h = $("<input type='text'>");
          h.appendTo(d),
            h.css('width', '70px'),
            this.bindControl(
              new a(
                s,
                i.visible,
                !0,
                this.model(),
                'Change Gann Square Line Visibility',
              ),
            ),
            this.bindControl(
              new l(
                h,
                i.coeff,
                !1,
                this.model(),
                'Change Pitchfork Line Coeff',
              ),
            );
          var c = $("<td class='colorpicker-cell'>");
          c.appendTo(o);
          var b = p(c);
          this.bindControl(
            new r(
              b,
              i.color,
              !0,
              this.model(),
              'Change Gann Square Line Color',
              0,
            ),
          );
        }),
        (b.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page property-page-unpadded'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            this._table.css({ width: '100%' });
          var e = $('<tbody>').appendTo(this._table),
            t = $('<tr>');
          t.appendTo(e);
          var i = $('<td width="50%">');
          i.appendTo(t);
          var o = $('<td width="50%">');
          o.appendTo(t);
          var n = $('<table cellspacing="0" cellpadding="2">');
          n.appendTo(i), n.addClass('property-page');
          var l = $('<table cellspacing="0" cellpadding="2">');
          l.appendTo(o),
            l.addClass('property-page'),
            $(
              "<tr><td align='center' colspan='4'>" +
                $.t('Price Levels') +
                '</td></tr>',
            ).appendTo(n),
            $(
              "<tr><td align='center' colspan='4'>" +
                $.t('Time Levels') +
                '</td></tr>',
            ).appendTo(l);
          for (var p = 1; p <= 7; p++) {
            var b = 'hlevel' + p;
            this.addLevelEditor(
              n,
              'Level ' + p,
              this._linetool.properties()[b],
            );
          }
          for (p = 1; p <= 7; p++) {
            b = 'vlevel' + p;
            this.addLevelEditor(
              l,
              'Level ' + p,
              this._linetool.properties()[b],
            );
          }
          this.addOneColorPropertyWidget(n), o.css({ 'vertical-align': 'top' });
          var u = $("<input type='checkbox' class='visibility-switch'>"),
            C = $("<input type='checkbox' class='visibility-switch'>"),
            y = $("<input type='checkbox' class='visibility-switch'>"),
            g = $("<input type='checkbox' class='visibility-switch'>"),
            w = $(
              '<table class="property-page property-page-unpadded" cellspacing="0" cellpadding="0">',
            ).css({ width: '100%' }),
            T = $('<tr>').appendTo(w),
            v = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            ).appendTo($('<td>').css({ width: '50%' }).appendTo(T)),
            _ = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            ).appendTo($('<td>').css({ width: '50%' }).appendTo(T)),
            m = this.addLabeledRow(v, $.t('Left Labels'), u);
          $('<td>').append(u).prependTo(m);
          m = this.addLabeledRow(_, $.t('Right Labels'), C);
          $('<td>').append(C).prependTo(m);
          m = this.addLabeledRow(v, $.t('Top Labels'), y);
          $('<td>').append(y).prependTo(m);
          m = this.addLabeledRow(_, $.t('Bottom Labels'), g);
          $('<td>').append(g).prependTo(m),
            this.bindControl(
              new a(
                u,
                this._linetool.properties().showLeftLabels,
                !0,
                this.model(),
                'Change Gann Square Left Labels Visibility',
              ),
            ),
            this.bindControl(
              new a(
                C,
                this._linetool.properties().showRightLabels,
                !0,
                this.model(),
                'Change Gann Square Right Labels Visibility',
              ),
            ),
            this.bindControl(
              new a(
                y,
                this._linetool.properties().showTopLabels,
                !0,
                this.model(),
                'Change Gann Square Top Labels Visibility',
              ),
            ),
            this.bindControl(
              new a(
                g,
                this._linetool.properties().showBottomLabels,
                !0,
                this.model(),
                'Change Gann Square Bottom Labels Visibility',
              ),
            );
          var f = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            ),
            L = this.createLineWidthEditor(),
            S = h(),
            k = this.createColorPicker(),
            x = $("<input type='checkbox' class='visibility-switch'>");
          m = this.addLabeledRow(f, $.t('Grid'), x);
          $('<td>').append(x).prependTo(m),
            $('<td>').append(k).appendTo(m),
            $('<td>').append(L).appendTo(m),
            $('<td>').append(S.render()).appendTo(m),
            this.bindControl(
              new a(
                x,
                this._linetool.properties().grid.visible,
                !0,
                this.model(),
                'Change Fib Speed Resistance Fan Grid Visibility',
              ),
            ),
            this.bindControl(
              new r(
                k,
                this._linetool.properties().grid.color,
                !0,
                this.model(),
                'Change Fib Speed Resistance Fan Grid Line Color',
                0,
              ),
            ),
            this.bindControl(
              new s(
                S,
                this._linetool.properties().grid.linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Fib Speed Resistance Fan Grid Line Style',
              ),
            ),
            this.bindControl(
              new d(
                L,
                this._linetool.properties().grid.linewidth,
                !0,
                this.model(),
                'Change Fib Speed Resistance Fan Grid Line Width',
              ),
            ),
            (this._table = this._table.add(w).add(f)),
            (m = $('<tr>')).appendTo(f);
          x = $("<input type='checkbox' class='visibility-switch'>");
          $('<td>').append(x).appendTo(m),
            this.createLabeledCell('Background', x).appendTo(m);
          var B = c();
          $('<td colspan="3">').append(B).appendTo(m),
            this.bindControl(
              new a(
                x,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Fib Speed/Resistance Fan Background Visibility',
              ),
            ),
            this.bindControl(
              new d(
                B,
                this._linetool.properties().transparency,
                !0,
                this.model(),
                'Change Fib Speed/Resistance Fan Background Transparency',
              ),
            ),
            this.loadData();
        }),
        (b.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = b);
    },
    '6rcL': function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.BooleanBinder,
        r = n.ColorBinding,
        l = n.SimpleComboBinder,
        s = n.SliderBinder,
        d = i('jNEI').addColorPicker,
        p = i('/4PT').createLineStyleEditor,
        h = i('y/RR').createTransparencyEditor;
      function c(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(c, o),
        (c.prototype.addLevelEditor = function (e, t, i, o) {
          var n = $('<tr>');
          n.appendTo(this._tbody);
          var h = 'control-level-' + i + '-' + o,
            c = $('<td>');
          c.appendTo(n);
          var b = $(
            "<input type='checkbox' class='visibility-switch' id='" + h + "'>",
          );
          b.appendTo(c),
            this.createLabeledCell(e).appendTo(n).find('label').attr('for', h);
          var u = $("<td class='colorpicker-cell'>");
          u.appendTo(n);
          var C = d(u),
            y = $('<td>');
          y.appendTo(n);
          var g = this.createLineWidthEditor();
          g.appendTo(y);
          var w = $('<td>');
          w.appendTo(n);
          var T = p();
          T.render().appendTo(w),
            this.bindControl(
              new a(
                b,
                t.visible,
                !0,
                this.model(),
                'Change Gann Fan Line Visibility',
              ),
            ),
            this.bindControl(
              new r(
                C,
                t.color,
                !0,
                this.model(),
                'Change Gann Fan Line Color',
                0,
              ),
            ),
            this.bindControl(
              new l(
                T,
                t.linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Gann Fan Line Style',
              ),
            ),
            this.bindControl(
              new s(
                g,
                t.linewidth,
                !0,
                this.model(),
                'Change Gann Fan Line Width',
              ),
            );
        }),
        (c.prototype.prepareLayout = function () {
          var e = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            ),
            t = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            );
          this._tbody = $('<tbody>').appendTo(e);
          for (var i = 1; i <= 9; i++) {
            var o = 'level' + i,
              n = this._linetool.properties()[o],
              r = n.coeff1.value(),
              l = n.coeff2.value(),
              d = '<sup>' + r + '</sup>&frasl;<sub>' + l + '</sub>';
            this.addLevelEditor(d, n, r, l);
          }
          this.addOneColorPropertyWidget(this._tbody);
          var p = $("<input type='checkbox' class='visibility-switch'>"),
            c = this.addLabeledRow(t, $.t('Labels'), p);
          $('<td>').append(p).prependTo(c),
            this.bindControl(
              new a(
                p,
                this._linetool.properties().showLabels,
                !0,
                this.model(),
                'Change Gann Fan Labels Visibility',
              ),
            ),
            (this._table = e.add(t)),
            (c = $('<tr>')).appendTo(this._table);
          var b = $("<input type='checkbox' class='visibility-switch'>");
          $('<td>').append(b).appendTo(c),
            this.createLabeledCell($.t('Background'), b).appendTo(c);
          var u = h();
          $('<td colspan="3">').append(u).appendTo(c),
            this.bindControl(
              new a(
                b,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Pitchfan Background Visibility',
              ),
            ),
            this.bindControl(
              new s(
                u,
                this._linetool.properties().transparency,
                !0,
                this.model(),
                'Change Pitchfan Background Transparency',
              ),
            ),
            this.loadData();
        }),
        (c.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = c);
    },
    '8TiD': function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.SimpleComboBinder,
        r = n.ColorBinding,
        l = n.SliderBinder,
        s = n.BooleanBinder,
        d = i('/4PT').createLineStyleEditor;
      function p(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(p, o),
        (p.prototype.prepareLayout = function () {
          this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          );
          var e,
            t,
            i = $('<tbody>').appendTo(this._table),
            o = this.createLineWidthEditor(),
            n = d(),
            p = this.createColorPicker(),
            h = this.addLabeledRow(i, $.t('Line'));
          if (
            ($('<td>').append(p).appendTo(h),
            $('<td>').append(o).appendTo(h),
            $('<td colspan="3">').append(n.render()).appendTo(h),
            this._linetool.properties().fillBackground)
          ) {
            $('<td>').prependTo(h),
              (e = $('<input type="checkbox" class="visibility-switch">')),
              (t = this.createColorPicker());
            var c = $('<tbody>').appendTo(this._table);
            h = $('<tr>').appendTo(c);
            $('<td>').append(e).appendTo(h),
              $('<td>').append($.t('Background')).appendTo(h),
              $('<td>').append(t).appendTo(h);
          }
          this.bindControl(
            new r(
              p,
              this._linetool.properties().linecolor,
              !0,
              this.model(),
              'Change Time Cycles Color',
            ),
          ),
            this.bindControl(
              new a(
                n,
                this._linetool.properties().linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Time Cycles Line Style',
              ),
            ),
            this.bindControl(
              new l(
                o,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Time Cycles Line Width',
              ),
            ),
            e &&
              (this.bindControl(
                new s(
                  e,
                  this._linetool.properties().fillBackground,
                  !0,
                  this.model(),
                  'Change Time Cycles Filling',
                ),
              ),
              this.bindControl(
                new r(
                  t,
                  this._linetool.properties().backgroundColor,
                  !0,
                  this.model(),
                  'Change Time Cycles Background Color',
                  this._linetool.properties().transparency,
                ),
              ));
        }),
        (p.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = p);
    },
    A3Hk: function (e, t, i) {
      'use strict';
      i.r(t);
      var o, n;
      i('P5fv'), i('YFKU'), i('mrSG'), i('Eyy1'), i('tqok'), i('hsV8');
      function a() {
        var e = $('<select />');
        return (
          $(
            '<option value="' +
              o.LeftToRight +
              '">' +
              $.t('Left') +
              '</option>',
          ).appendTo(e),
          $(
            '<option value="' +
              o.RightToLeft +
              '">' +
              $.t('Right') +
              '</option>',
          ).appendTo(e),
          e
        );
      }
      !(function (e) {
        (e.LeftToRight = 'left_to_right'), (e.RightToLeft = 'right_to_left');
      })(o || (o = {})),
        (function (e) {
          (e.Relative = 'relative'), (e.Absolute = 'absolute');
        })(n || (n = {})),
        i.d(t, 'createHHistDirectionEditor', function () {
          return a;
        });
    },
    'B0+Q': function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.BooleanBinder,
        r = n.FloatBinder,
        l = n.ColorBinding,
        s = n.SliderBinder,
        d = i('jNEI').addColorPicker,
        p = i('y/RR').createTransparencyEditor;
      function h(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(h, o),
        (h.prototype.addLevelEditor = function (e, t, i) {
          var o = $('<tr>');
          o.appendTo(e);
          var n = $('<td>');
          n.appendTo(o);
          var s = $("<input type='checkbox' class='visibility-switch'>");
          s.appendTo(n);
          var p = $('<td>');
          p.appendTo(o);
          var h = $("<input type='text'>");
          h.appendTo(p),
            h.css('width', '70px'),
            this.bindControl(
              new a(
                s,
                i.visible,
                !0,
                this.model(),
                'Change Gann Square Line Visibility',
              ),
            ),
            this.bindControl(
              new r(
                h,
                i.coeff,
                !1,
                this.model(),
                'Change Pitchfork Line Coeff',
              ),
            );
          var c = $("<td class='colorpicker-cell'>");
          c.appendTo(o);
          var b = d(c);
          this.bindControl(
            new l(
              b,
              i.color,
              !0,
              this.model(),
              'Change Gann Square Line Color',
              0,
            ),
          );
        }),
        (h.prototype.addFannEditor = function (e) {
          var t = $('<tr>').appendTo(e),
            i = $("<input type='checkbox' class='visibility-switch'>");
          i.appendTo($('<td>').appendTo(t)),
            $('<td>' + $.t('Angles') + '</td>').appendTo(t);
          var o = $("<td class='colorpicker-cell'>").appendTo(t),
            n = d(o);
          this.bindControl(
            new a(
              i,
              this._linetool.properties().fans.visible,
              !0,
              this.model(),
              'Change Gann Square Angles Visibility',
            ),
          ),
            this.bindControl(
              new l(
                n,
                this._linetool.properties().fans.color,
                !0,
                this.model(),
                'Change Gann Square Angles Color',
                0,
              ),
            );
        }),
        (h.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page property-page-unpadded'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            this._table.css({ width: '100%' });
          var e = $('<tbody>').appendTo(this._table),
            t = $('<tr>');
          t.appendTo(e);
          var i = $('<td width="50%">');
          i.appendTo(t);
          var o = $('<td width="50%">');
          o.appendTo(t);
          var n = $('<table cellspacing="0" cellpadding="2">');
          n.appendTo(i), n.addClass('property-page');
          var r = $('<table cellspacing="0" cellpadding="2">');
          r.appendTo(o),
            r.addClass('property-page'),
            $(
              "<tr><td align='center' colspan='4'>" +
                $.t('Price Levels') +
                '</td></tr>',
            ).appendTo(n),
            $(
              "<tr><td align='center' colspan='4'>" +
                $.t('Time Levels') +
                '</td></tr>',
            ).appendTo(r);
          for (var l = 1; l <= 7; l++) {
            var d = 'hlevel' + l;
            this.addLevelEditor(
              n,
              $.t('Level {0}').format(l),
              this._linetool.properties()[d],
            );
          }
          for (l = 1; l <= 7; l++) {
            d = 'vlevel' + l;
            this.addLevelEditor(
              r,
              $.t('Level {0}').format(l),
              this._linetool.properties()[d],
            );
          }
          this.addFannEditor(n),
            this.addOneColorPropertyWidget(r),
            o.css({ 'vertical-align': 'top' }),
            i.css({ 'vertical-align': 'top' });
          var h = $("<input type='checkbox' class='visibility-switch'>"),
            c = $("<input type='checkbox' class='visibility-switch'>"),
            b = $("<input type='checkbox' class='visibility-switch'>"),
            u = $("<input type='checkbox' class='visibility-switch'>"),
            C = $(
              '<table class="property-page property-page-unpadded" cellspacing="0" cellpadding="0">',
            ).css({ width: '100%' }),
            y = $('<tr>').appendTo(C),
            g = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            ).appendTo(
              $('<td>')
                .css({ width: '50%', 'vertical-align': 'top' })
                .appendTo(y),
            ),
            w = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            ).appendTo(
              $('<td>')
                .css({ width: '50%', 'vertical-align': 'top' })
                .appendTo(y),
            ),
            T = this.addLabeledRow(g, $.t('Left Labels'), h);
          $('<td>').append(h).prependTo(T);
          T = this.addLabeledRow(w, $.t('Right Labels'), c);
          $('<td>').append(c).prependTo(T);
          T = this.addLabeledRow(g, $.t('Top Labels'), b);
          $('<td>').append(b).prependTo(T);
          T = this.addLabeledRow(w, $.t('Bottom Labels'), u);
          $('<td>').append(u).prependTo(T),
            this.bindControl(
              new a(
                h,
                this._linetool.properties().showLeftLabels,
                !0,
                this.model(),
                'Change Gann Square Left Labels Visibility',
              ),
            ),
            this.bindControl(
              new a(
                c,
                this._linetool.properties().showRightLabels,
                !0,
                this.model(),
                'Change Gann Square Right Labels Visibility',
              ),
            ),
            this.bindControl(
              new a(
                b,
                this._linetool.properties().showTopLabels,
                !0,
                this.model(),
                'Change Gann Square Top Labels Visibility',
              ),
            ),
            this.bindControl(
              new a(
                u,
                this._linetool.properties().showBottomLabels,
                !0,
                this.model(),
                'Change Gann Square Bottom Labels Visibility',
              ),
            ),
            (this._table = this._table.add(C)),
            (T = $('<tr>')).appendTo(g);
          var v = $("<input type='checkbox' class='visibility-switch'>");
          $('<td>').append(v).appendTo(T);
          var _ = p();
          $('<td>').append(_).appendTo(T),
            this.bindControl(
              new a(
                v,
                this._linetool.properties().fillHorzBackground,
                !0,
                this.model(),
                'Change Gann Square Background Visibility',
              ),
            ),
            this.bindControl(
              new s(
                _,
                this._linetool.properties().horzTransparency,
                !0,
                this.model(),
                'Change Gann Square Background Transparency',
              ),
            ),
            (T = $('<tr>')).appendTo(w);
          v = $("<input type='checkbox' class='visibility-switch'>");
          $('<td>').append(v).appendTo(T);
          _ = p();
          if (
            ($('<td>').append(_).appendTo(T),
            this.bindControl(
              new a(
                v,
                this._linetool.properties().fillVertBackground,
                !0,
                this.model(),
                'Change Gann Square Background Visibility',
              ),
            ),
            this.bindControl(
              new s(
                _,
                this._linetool.properties().vertTransparency,
                !0,
                this.model(),
                'Change Gann Square Background Transparency',
              ),
            ),
            this._linetool.properties().reverse)
          ) {
            var m = $("<input type='checkbox' class='visibility-switch'>");
            T = this.addLabeledRow(g, $.t('Reverse'), m);
            $('<td>').append(m).prependTo(T),
              this.bindControl(
                new a(
                  m,
                  this._linetool.properties().reverse,
                  !0,
                  this.model(),
                  'Change Gann Box Reverse',
                ),
              );
          }
          this.loadData();
        }),
        (h.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = h);
    },
    CBRs: function (e, t, i) {},
    Ej6X: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.BooleanBinder,
        r = n.ColorBinding,
        l = n.SliderBinder;
      function s(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(s, o),
        (s.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2');
          var e = this.createLineWidthEditor(),
            t = this.createColorPicker();
          (n = this.addLabeledRow(this._table, 'Border')).prepend('<td>'),
            $('<td>').append(t).appendTo(n),
            $('<td>').append(e).appendTo(n);
          var i = $('<input type="checkbox" class="visibility-switch">'),
            o = this.createColorPicker(),
            n = this.addLabeledRow(this._table, 'Background', i);
          $('<td>').append(i).prependTo(n),
            $('<td>').append(o).appendTo(n),
            this.bindControl(
              new a(
                i,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Polyline Filling',
              ),
            ),
            this.bindControl(
              new r(
                t,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Polyline Line Color',
              ),
            ),
            this.bindControl(
              new r(
                o,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Polyline Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new l(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Polyline Border Width',
              ),
            ),
            this.loadData();
        }),
        (s.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = s);
    },
    GjuB: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.ColorBinding,
        r = n.SimpleComboBinder,
        l = n.SliderBinder,
        s = n.BooleanBinder,
        d = i('/4PT').createLineStyleEditor;
      function p(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(p, o),
        (p.prototype.prepareLayout = function () {
          this._block = $('<div>').addClass('property-page');
          var e = $('<table cellspacing="0" cellpadding="2">').appendTo(
              this._block,
            ),
            t = $('<tbody>').appendTo(e),
            i = this.createLineWidthEditor(),
            o = d(),
            n = this.createColorPicker(),
            p = this.addLabeledRow(t, $.t('Line'));
          $('<td>').append(n).appendTo(p),
            $('<td>').append(i).appendTo(p),
            $('<td colspan="3">').append(o.render()).appendTo(p);
          var h = $('<table cellspacing="0" cellpadding="2">').appendTo(
              this._block,
            ),
            c =
              ((p = this.addLabeledRow(h, $.t('Background'), c)),
              $('<input type="checkbox" class="visibility-switch">')),
            b = this.createColorPicker();
          $('<td>').append(c).prependTo(p), $('<td>').append(b).appendTo(p);
          var u = $('<table cellspacing="0" cellpadding="2">').appendTo(
              this._block,
            ),
            C = $(
              "<select><option value='0'>" +
                $.t('Normal') +
                "</option><option value='1'>" +
                $.t('Arrow') +
                '</option></select>',
            ),
            y = $(
              "<select><option value='0'>" +
                $.t('Normal') +
                "</option><option value='1'>" +
                $.t('Arrow') +
                '</option></select>',
            ),
            g = $('<label>' + $.t('Extend') + ' </label>').css({
              'margin-left': '8px',
            }),
            w = $('<input type="checkbox">').appendTo(g),
            T = $('<label>' + $.t('Extend') + ' </label>').css({
              'margin-left': '8px',
            }),
            v = $('<input type="checkbox">').appendTo(T);
          p = this.addLabeledRow(u, $.t('Left End'));
          $('<td colspan="3">').appendTo(p).append(C).append(g);
          p = this.addLabeledRow(u, $.t('Right End'));
          $('<td colspan="3">').appendTo(p).append(y).append(T),
            this.bindControl(
              new a(
                n,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Curve Line Color',
              ),
            ),
            this.bindControl(
              new r(
                o,
                this._linetool.properties().linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Curve Line Style',
              ),
            ),
            this.bindControl(
              new l(
                i,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Curve Line Width',
              ),
            ),
            this.bindControl(
              new s(
                c,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Curve Filling',
              ),
            ),
            this.bindControl(
              new a(
                b,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Curve Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new r(
                C,
                this._linetool.properties().leftEnd,
                parseInt,
                !0,
                this.model(),
                'Change Curve Line Left End',
              ),
            ),
            this.bindControl(
              new r(
                y,
                this._linetool.properties().rightEnd,
                parseInt,
                !0,
                this.model(),
                'Change Curve Line Right End',
              ),
            ),
            this.bindControl(
              new s(
                w,
                this._linetool.properties().extendLeft,
                !0,
                this.model(),
                'Change Curve Line Extending Left',
              ),
            ),
            this.bindControl(
              new s(
                v,
                this._linetool.properties().extendRight,
                !0,
                this.model(),
                'Change Curve Line Extending Right',
              ),
            ),
            this.loadData();
        }),
        (p.prototype.widget = function () {
          return this._block;
        }),
        (e.exports = p);
    },
    ICcj: function (e, t, i) {
      'use strict';
      var o = i('DxCR').PropertyPage,
        n = i('L9lC').StudyInputsPropertyPage,
        a = i('n3Kh'),
        r = i('QloM');
      function l(e, t, i) {
        o.call(this, e, t), (this._linetool = i), this.prepareLayout();
      }
      inherit(l, a),
        (l.prototype.prepareLayoutImpl = n.prototype.prepareLayoutImpl),
        (l.prototype.prepareControl = n.prototype.prepareControl),
        (l.prototype._symbolInfoBySymbolProperty =
          n.prototype._symbolInfoBySymbolProperty),
        (l.prototype._sortInputs = n.prototype._sortInputs),
        (l.prototype.prepareLayout = function () {
          var e = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            ),
            t = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            ).data({
              'layout-tab': r.TabNames.inputs,
              'layout-tab-priority': r.TabPriority.Inputs,
            });
          this._table = e.add(t);
          for (var i = this._linetool.points(), o = 0; o < i.length; o++) {
            var a = $('<tr>');
            a.appendTo(e);
            var l = $('<td>');
            l.html($.t('Point bar', { point: o + 1 })), l.appendTo(a);
            var s = $('<td>');
            s.appendTo(a);
            var d = $("<input type='text'>");
            d.appendTo(s), d.addClass('ticker');
            var p = this._linetool.properties().points[o];
            this.bindBarIndex(
              p.bar,
              d,
              this.model(),
              'Change ' + this._linetool.title() + ' point bar index',
            );
          }
          var h = this._model
            .model()
            .studyMetaInfoRepository()
            .findByIdSync({ type: 'java', studyId: this._linetool.studyId() });
          n.prototype.prepareLayoutImpl.call(this, h, t);
        }),
        (l.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = l);
    },
    ISmD: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.FloatBinder,
        r = n.BooleanBinder,
        l = n.ColorBinding,
        s = n.SliderBinder,
        d = i('jNEI').addColorPicker,
        p = i('y/RR').createTransparencyEditor;
      function h(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(h, o),
        (h.prototype.addLevelEditor = function (e, t, i) {
          var o = $('<tr>');
          o.appendTo(this._table);
          var n = $('<td>');
          n.appendTo(o);
          var p = $("<input type='checkbox' class='visibility-switch'>");
          if ((p.appendTo(n), e)) {
            var h = $('<td>');
            h.appendTo(o);
            var c = $("<input type='text'>");
            c.appendTo(h),
              c.css('width', '70px'),
              this.bindControl(
                new a(
                  c,
                  t.coeff,
                  !1,
                  this.model(),
                  'Change Pitchfork Line Coeff',
                ),
              );
          } else this.createLabeledCell('Trend Line', p).appendTo(o);
          var b = $("<td class='colorpicker-cell'>");
          b.appendTo(o);
          var u = d(b),
            C = $('<td>');
          C.appendTo(o);
          var y = this.createLineWidthEditor();
          y.appendTo(C),
            this.bindControl(
              new r(
                p,
                t.visible,
                !0,
                this.model(),
                'Change Fib Wedge Visibility',
              ),
            ),
            this.bindControl(
              new l(
                u,
                t.color,
                !0,
                this.model(),
                'Change Fib Wedge Line Color',
                0,
              ),
            ),
            this.bindControl(
              new s(y, t.linewidth, !0, this.model(), 'Change Fib Wedge Width'),
            );
        }),
        (h.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            this.addLevelEditor(
              null,
              this._linetool.properties().trendline,
              !1,
            );
          for (var e = 1; e <= 11; e++) {
            var t = 'level' + e;
            this.addLevelEditor(
              'Level ' + e,
              this._linetool.properties()[t],
              !1,
            );
          }
          this.addOneColorPropertyWidget(this._table);
          var i = $("<input type='checkbox' class='visibility-switch'>"),
            o = this.addLabeledRow(this._table, 'Levels', i);
          $('<td>').append(i).prependTo(o),
            this.bindControl(
              new r(
                i,
                this._linetool.properties().showCoeffs,
                !0,
                this.model(),
                'Change Fib Wedge Levels Visibility',
              ),
            ),
            (o = $('<tr>')).appendTo(this._table);
          var n = $("<input type='checkbox' class='visibility-switch'>");
          $('<td>').append(n).appendTo(o),
            this.createLabeledCell('Background', n).appendTo(o);
          var a = p();
          $('<td colspan="3">').append(a).appendTo(o),
            this.bindControl(
              new r(
                n,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Wedge Background Visibility',
              ),
            ),
            this.bindControl(
              new s(
                a,
                this._linetool.properties().transparency,
                !0,
                this.model(),
                'Change Wedge Background Transparency',
              ),
            ),
            this.loadData();
        }),
        (h.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = h);
    },
    IfF0: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.SimpleComboBinder,
        r = n.ColorBinding,
        l = n.BooleanBinder,
        s = n.SliderBinder;
      function d(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(d, o),
        (d.prototype.prepareLayout = function () {
          this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          );
          var e = $('<tbody>').appendTo(this._table),
            t = this.createLineWidthEditor(),
            i = this.createColorPicker(),
            o = this.addLabeledRow(e, $.t('Line'));
          $('<td>').prependTo(o),
            $('<td>').append(i).appendTo(o),
            $('<td>').append(t).appendTo(o);
          var n = this.createColorPicker(),
            d = this.createColorPicker(),
            p = this.createFontSizeEditor(),
            h = this.createFontEditor(),
            c = this.createColorPicker(),
            b = $('<input type="checkbox" class="visibility-switch">'),
            u = this.createColorPicker(),
            C = $('<input type="checkbox" class="visibility-switch">');
          this.bindControl(
            new r(
              n,
              this._linetool.properties().textcolor,
              !0,
              this.model(),
              'Change Text Color',
            ),
          ),
            this.bindControl(
              new a(
                p,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new a(
                h,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Text Font',
              ),
            ),
            this.bindControl(
              new r(
                c,
                this._linetool.properties().labelBackgroundColor,
                !0,
                this.model(),
                'Change Text Background',
              ),
            ),
            this.bindControl(
              new l(
                b,
                this._linetool.properties().fillLabelBackground,
                !0,
                this.model(),
                'Change Text Background Fill',
              ),
            ),
            this.bindControl(
              new r(
                u,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Text Background',
                this._linetool.properties().backgroundTransparency,
              ),
            ),
            this.bindControl(
              new l(
                C,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Text Background Fill',
              ),
            ),
            this.bindControl(
              new r(
                d,
                this._linetool.properties().borderColor,
                !0,
                this.model(),
                'Change Text Border Color',
              ),
            );
          var y = this.addLabeledRow(e, $.t('Background'), C);
          $('<td>').append(C).prependTo(y), $('<td>').append(u).appendTo(y);
          var g = this.addLabeledRow(e, $.t('Label'));
          $('<td>').prependTo(g),
            $('<td>').append(n).appendTo(g),
            $('<td>').append(h).appendTo(g),
            $('<td>').append(p).appendTo(g);
          y = this.addLabeledRow(e, $.t('Label Background'), b);
          $('<td>').append(b).prependTo(y),
            $('<td>').append(c).appendTo(y),
            this.bindControl(
              new r(
                i,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Date Range Color',
              ),
            ),
            this.bindControl(
              new s(
                t,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Date Range Line Width',
              ),
            );
          var w = this._linetool.properties();
          if (void 0 !== w.extendTop && void 0 !== w.extendBottom) {
            var T = $('<input type="checkbox">'),
              v = $('<input type="checkbox">');
            this.bindControl(
              new l(
                T,
                this._linetool.properties().extendTop,
                !0,
                this.model(),
                'Change Extend Top',
              ),
            ),
              this.bindControl(
                new l(
                  v,
                  this._linetool.properties().extendBottom,
                  !0,
                  this.model(),
                  'Change Extend Bottom',
                ),
              );
            var _ = this.addLabeledRow(e, $.t('Extend Top'), T);
            $('<td>').append(T).prependTo(_);
            var m = this.addLabeledRow(e, $.t('Extend Bottom'), v);
            $('<td>').append(v).prependTo(m);
          }
          if (void 0 !== w.extendLeft && void 0 !== w.extendRight) {
            var f = $('<input type="checkbox">'),
              L = $('<input type="checkbox">');
            this.bindControl(
              new l(
                f,
                this._linetool.properties().extendLeft,
                !0,
                this.model(),
                'Change Extend Left',
              ),
            ),
              this.bindControl(
                new l(
                  L,
                  this._linetool.properties().extendRight,
                  !0,
                  this.model(),
                  'Change Extend Right',
                ),
              );
            var S = this.addLabeledRow(e, $.t('Extend Left'), f);
            $('<td>').append(f).prependTo(S);
            var k = this.addLabeledRow(e, $.t('Extend Right'), L);
            $('<td>').append(L).prependTo(k);
          }
          this.loadData();
        }),
        (d.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = d);
    },
    JCAo: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.SliderBinder,
        r = n.ColorBinding;
      function l(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(l, o),
        (l.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2');
          var e = this.createColorPicker(),
            t = this.createColorPicker(),
            i = this.addLabeledRow(this._table, 'Background');
          $('<td>').append(e).appendTo(i), $('<td>').append(t).appendTo(i);
          var o = this.createLineWidthEditor(),
            n = this.createColorPicker();
          i = this.addLabeledRow(this._table, 'Border');
          $('<td>').append(n).appendTo(i),
            $('<td>').appendTo(i),
            $('<td>').append(o).appendTo(i),
            this.bindControl(
              new r(
                n,
                this._linetool.properties().trendline.color,
                !0,
                this.model(),
                'Change Projection Line Color',
              ),
            ),
            this.bindControl(
              new r(
                e,
                this._linetool.properties().color1,
                !0,
                this.model(),
                'Change Projection Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new r(
                t,
                this._linetool.properties().color2,
                !0,
                this.model(),
                'Change Projection Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new a(
                o,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Projection Border Width',
              ),
            ),
            this.loadData();
        }),
        (l.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = l);
    },
    JGUD: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('n3Kh'),
        a = i('DxCR'),
        r = a.ToFloatTransformer,
        l = a.SimpleComboBinder,
        s = a.ColorBinding,
        d = a.BooleanBinder,
        p = a.SimpleStringBinder;
      function h(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      function c(e, t, i) {
        n.call(this, e, t, i);
      }
      inherit(h, o),
        (h.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2');
          var e = $('<tbody>').appendTo(this._table),
            t = this.createColorPicker(),
            i = this.addLabeledRow(e, 'Color');
          $('<td>').append(t).appendTo(i);
          var o = $(
            '<select><option value="0">' +
              $.t('HL Bars') +
              '</option><option value="2">' +
              $.t('OC Bars') +
              '</option><option value="1">' +
              $.t('Line - Close') +
              '</option><option value="3">' +
              $.t('Line - Open') +
              '</option><option value="4">' +
              $.t('Line - High') +
              '</option><option value="5">' +
              $.t('Line - Low') +
              '</option><option value="6">' +
              $.t('Line - HL/2') +
              '</option></select>',
          );
          i = this.addLabeledRow(e, 'Mode');
          $('<td>').append(o).appendTo(i);
          i = $('<tr>').appendTo(e);
          $('<td>' + $.t('Mirrored') + '</td>').appendTo(i);
          var n = $("<input type='checkbox'>");
          $('<td>').append(n).appendTo(i);
          i = $('<tr>').appendTo(e);
          $('<td>' + $.t('Flipped') + '</td>').appendTo(i);
          var a = $("<input type='checkbox'>");
          $('<td>').append(a).appendTo(i),
            this.bindControl(
              new d(
                n,
                this._linetool.properties().mirrored,
                !0,
                this.model(),
                'Change Bars Pattern Mirroring',
              ),
            ),
            this.bindControl(
              new d(
                a,
                this._linetool.properties().flipped,
                !0,
                this.model(),
                'Change Bars Pattern Flipping',
              ),
            ),
            this.bindControl(
              new s(
                t,
                this._linetool.properties().color,
                !0,
                this.model(),
                'Change Bars Pattern Color',
              ),
            ),
            this.bindControl(
              new l(
                o,
                this._linetool.properties().mode,
                null,
                !0,
                this.model(),
                'Change Bars Pattern Mode',
              ),
            ),
            this.loadData();
        }),
        (h.prototype.widget = function () {
          return this._table;
        }),
        inherit(c, n),
        (c.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2');
          var e = $('<tr>');
          e.appendTo(this._table);
          var t = $('<td>');
          t.html($.t('Price')), t.appendTo(e);
          var i = $('<td>');
          i.appendTo(e);
          var o = $("<input type='text'>");
          o.appendTo(i);
          var n = $('<td>');
          n.html($.t('Bar #')), n.appendTo(e);
          var a = $('<td>');
          a.appendTo(e);
          var l = $("<input type='text'>");
          l.appendTo(a), l.addClass('ticker');
          var s = this._linetool.properties().points[0],
            d = [r(s.price.value())];
          this.bindControl(
            new p(
              o,
              s.price,
              d,
              !1,
              this.model(),
              'Change ' + this._linetool + ' point price',
            ),
          ),
            this.bindBarIndex(
              s.bar,
              l,
              this.model(),
              'Change ' + this._linetool + ' point bar index',
            ),
            this.loadData();
        }),
        (t.LineToolBarsPatternStylesPropertyPage = h),
        (t.LineToolBarsPatternInputsPropertyPage = c);
    },
    'JM7/': function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.LessTransformer,
        r = n.GreateTransformer,
        l = n.ToFloatTransformer,
        s = n.BooleanBinder,
        d = n.SliderBinder,
        p = n.ColorBinding,
        h = n.SimpleComboBinder,
        c = n.SimpleStringBinder,
        b = i('jNEI').addColorPicker,
        u = i('y/RR').createTransparencyEditor;
      function C(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      i('PVgW'),
        inherit(C, o),
        (C.prototype.addOneColorPropertyWidget = function (e) {
          var t = this.createOneColorForAllLinesWidget(),
            i = $('<tr>');
          i
            .append($('<td>'))
            .append($('<td>'))
            .append(t.editor)
            .append($('<td>').append(t.label)),
            i.appendTo(e);
        }),
        (C.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page property-page-unpadded'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            this._table.css({ width: '100%' });
          var e = $('<tr>');
          e.appendTo(this._table);
          var t = this.model(),
            i = this._linetool,
            o = i.properties(),
            n = $('<table>');
          $("<td valign='top'>").append(n).appendTo(e);
          var C = $('<tr>');
          for (var y in ($(
            "<td colspan='3'>" + $.t('Levels') + '</td>',
          ).appendTo(C),
          C.appendTo(n),
          o.levels._childs)) {
            var g = o.levels[y],
              w = $('<tr>');
            w.appendTo(n), $('<td>' + y + '</td>').appendTo(w);
            var T = $("<input type='checkbox' class='visibility-switch'>");
            $('<td>').append(T).appendTo(w),
              (R = $("<td class='colorpicker-cell'>")).appendTo(w);
            var v = b(R);
            (E = $('<td>')).appendTo(w),
              (N = this.createLineWidthEditor()).appendTo(E),
              this.bindControl(
                new s(T, g.visible, !0, t, 'Change Gann Line Visibility'),
              ),
              this.bindControl(
                new p(v, g.color, !0, t, 'Change Gann Line Color', 0),
              ),
              this.bindControl(
                new d(N, g.width, !0, t, 'Change Gann Line Width'),
              );
          }
          var _ = $('<table>');
          $("<td valign='top'>").append(_).appendTo(e);
          var m = $('<tr>');
          for (var y in ($("<td colspan='4'>" + $.t('Fans') + '</td>').appendTo(
            m,
          ),
          m.appendTo(_),
          o.fanlines._childs)) {
            var f = o.fanlines[y],
              L = $('<tr>');
            L.appendTo(_);
            T = $("<input type='checkbox' class='visibility-switch'>");
            $('<td>').append(T).appendTo(L);
            var S = f.x.value() + 'x' + f.y.value();
            $('<td>' + S + '</td>').appendTo(L),
              (R = $("<td class='colorpicker-cell'>")).appendTo(L);
            v = b(R);
            (E = $('<td>')).appendTo(L),
              (N = this.createLineWidthEditor()).appendTo(E),
              this.bindControl(
                new s(T, f.visible, !0, t, 'Change Gann Line Visibility'),
              ),
              this.bindControl(
                new p(v, f.color, !0, t, 'Change Gann Fan Color', 0),
              ),
              this.bindControl(
                new d(N, f.width, !0, t, 'Change Gann Line Width'),
              );
          }
          var k = $('<table>');
          $("<td valign='top'>").append(k).appendTo(e);
          var x = $('<tr>');
          for (var y in ($("<td colspan='4'>" + $.t('Arcs') + '</td>').appendTo(
            x,
          ),
          x.appendTo(k),
          o.arcs._childs)) {
            var B = o.arcs[y],
              P = $('<tr>');
            P.appendTo(k);
            T = $("<input type='checkbox' class='visibility-switch'>");
            $('<td>').append(T).appendTo(P);
            var R;
            S = B.x.value() + 'x' + B.y.value();
            $('<td>' + S + '</td>').appendTo(P),
              (R = $("<td class='colorpicker-cell'>")).appendTo(P);
            var E;
            v = b(R);
            (E = $('<td>')).appendTo(P),
              (N = this.createLineWidthEditor()).appendTo(E),
              this.bindControl(
                new s(T, B.visible, !0, t, 'Change Gann Line Visibility'),
              ),
              this.bindControl(
                new p(v, B.color, !0, t, 'Change Gann Arc Color', 0),
              ),
              this.bindControl(
                new d(N, B.width, !0, t, 'Change Gann Line Width'),
              );
          }
          this.addOneColorPropertyWidget(k);
          var F = $('<tbody>').appendTo(this._table),
            D = $('<input type="checkbox" class="visibility-switch">'),
            I = u(),
            W = $('<tr>').appendTo(F),
            A = $('<table>');
          $('<td colspan="3">').append(A).appendTo(W);
          W = $('<tr>').appendTo(A);
          if (
            ($('<td>').append(D).appendTo(W),
            $('<td>' + $.t('Background') + '</td>').appendTo(W),
            $('<td>').append(I).appendTo(W),
            o.reverse)
          ) {
            var V = $("<input type='checkbox' class='visibility-switch'>");
            W = this.addLabeledRow(A, $.t('Reverse'), V, !0);
            $('<td>').append(V).prependTo(W);
            var O = 'Change Gann Square Reverse';
            this.bindControl(new s(V, o.reverse, !0, t, O));
          }
          this.bindControl(
            new s(
              D,
              o.arcsBackground.fillBackground,
              !0,
              t,
              'Change Gann Square Filling',
            ),
          ),
            this.bindControl(
              new d(
                I,
                o.arcsBackground.transparency,
                !0,
                t,
                'Change Gann Square Background Transparency',
              ),
            );
          var z = $('<input type="text">');
          W = this.addLabeledRow(A, $.t('Price/Bar Ratio'), z, !0);
          $('<td>').append(z).appendTo(W),
            z.TVTicker({ step: i.getScaleRatioStep() });
          O = 'Change Gann Square Scale Ratio';
          var M = this._getPropertySetter(o.scaleRatio, O),
            Y = [l(o.scaleRatio.value()), r(1e-7), a(1e8)],
            q = new c(z, o.scaleRatio, Y, !1, t, O, M);
          q.addFormatter(function (e) {
            return i.getScaleRatioFormatter().format(e);
          }),
            this.bindControl(q);
          var H = $('<input type="checkbox">');
          W = this.addLabeledRow(A, $.t('Ranges And Ratio'), H, !1);
          $('<td>').append(H).prependTo(W),
            this.bindControl(
              new s(
                H,
                o.showLabels,
                !0,
                t,
                'Change Gann Square Lables Visibility',
              ),
            );
          var N = this.createLineWidthEditor(),
            G =
              ((v = this.createColorPicker()),
              $(
                '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>',
              )),
            j = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>',
            ),
            U = this.createFontSizeEditor(),
            K = this.createFontEditor(),
            Q = o.labelsStyle;
          this.bindControl(
            new h(U, Q.fontSize, parseInt, !0, t, 'Change Text Font Size'),
          ),
            this.bindControl(new h(K, Q.font, null, !0, t, 'Change Text Font')),
            this.bindControl(new s(G, Q.bold, !0, t, 'Change Text Font Bold')),
            this.bindControl(
              new s(j, Q.italic, !0, t, 'Change Text Font Italic'),
            );
          var Z = $(
            '<table class="property-page" cellspacing="0" cellpadding="2"><tr>',
          )
            .append(
              $(document.createElement('td')).attr({ width: 1 }).append(K),
            )
            .append(
              $(document.createElement('td')).attr({ width: 1 }).append(U),
            )
            .append(
              $(document.createElement('td'))
                .css('vertical-align', 'top')
                .attr({ width: 1 })
                .append(G),
            )
            .append(
              $(document.createElement('td'))
                .css('vertical-align', 'top')
                .append(j),
            )
            .append($('</tr></table>'));
          $('<td colspan="5" class="no-left-indent">').append(Z).appendTo(W);
        }),
        (C.prototype.widget = function () {
          return this._table;
        }),
        (C.prototype._getPropertySetter = function (e, t) {
          var i = this.model(),
            o = this._linetool;
          return function (n) {
            i.beginUndoMacro(t),
              i.saveLineToolState(o, 'Save Gann Square State'),
              i.setProperty(e, n, t),
              i.saveLineToolState(o, 'Save Gann Square State'),
              i.endUndoMacro();
          };
        }),
        (e.exports.LineToolGannComplexStylesPropertyPage = C);
    },
    JyhW: function (e, t, i) {
      'use strict';
      var o = i('aO4+').Point,
        n = i('Yc1q'),
        a = i('DxCR'),
        r = a.ColorBinding,
        l = a.SimpleComboBinder,
        s = a.SimpleStringBinder,
        d = a.BooleanBinder,
        p = i('PT1i').linking;
      function h(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      inherit(h, n),
        (h.prototype.prepareLayout = function () {
          var e = this.createColorPicker(),
            t = this.createFontSizeEditor(),
            i = this.createFontEditor(),
            o = this.createTextEditor(350, 200),
            n = this.createColorPicker(),
            a = this.createColorPicker(),
            p = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>',
            ),
            h = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>',
            );
          this.bindControl(
            new r(
              e,
              this._linetool.properties().textColor,
              !0,
              this.model(),
              'Change Text Color',
            ),
          ),
            this.bindControl(
              new l(
                t,
                this._linetool.properties().fontSize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new l(
                i,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Text Font',
              ),
            ),
            this.bindControl(
              new s(
                o,
                this._linetool.properties().text,
                null,
                !0,
                this.model(),
                'Change Text',
              ),
            ),
            this.bindControl(
              new r(
                n,
                this._linetool.properties().markerColor,
                !0,
                this.model(),
                'Change Marker and Border Color',
              ),
            ),
            this.bindControl(
              new r(
                a,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Background Color',
                this._linetool.properties().backgroundTransparency,
              ),
            ),
            this.bindControl(
              new d(
                p,
                this._linetool.properties().bold,
                !0,
                this.model(),
                'Change Text Font Bold',
              ),
            ),
            this.bindControl(
              new d(
                h,
                this._linetool.properties().italic,
                !0,
                this.model(),
                'Change Text Font Italic',
              ),
            );
          var c = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            ),
            b = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            ),
            u = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            );
          (this._table = c.add(u).add(b)),
            $(document.createElement('tr'))
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(e),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(i),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(t),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(p),
              )
              .append($(document.createElement('td')).append(h))
              .appendTo(c),
            $(document.createElement('tr'))
              .append(
                $(document.createElement('td')).attr({ colspan: 5 }).append(o),
              )
              .appendTo(c);
          var C = this.addLabeledRow(u, $.t('Label'));
          $('<td>').attr('colspan', 2).append(n).appendTo(C);
          C = this.addLabeledRow(u, $.t('Background'));
          $('<td>').append(a).appendTo(C),
            this.loadData(),
            setTimeout(function () {
              o.select(), o.focus();
            }, 20);
        }),
        (h.prototype.widget = function () {
          return this._table;
        }),
        (h.prototype.dialogPosition = function (e, t) {
          if (e && t) {
            for (
              var i,
                n = 0,
                a = this._linetool._model.paneForSource(this._linetool),
                r = p.getChartWidget();
              n < r.paneWidgets().length;
              n++
            )
              if (r.paneWidgets()[n]._state === a) {
                i = $(r.paneWidgets()[n].canvasElement()).offset().left;
                break;
              }
            var l = (this._linetool.paneViews() || [])[0],
              s = new o(0, 0);
            l && (s = l._floatPoints[0] || this._linetool._fixedPoints[0] || s);
            var d = (i || 0) + s.x,
              h = this._linetool.getTooltipWidth(),
              c = d - h / 2,
              b = t.outerWidth();
            return e.left < c && e.left + b + 10 > c
              ? ((e.left -= e.left + b + 10 - c), e)
              : e.left > c && e.left < c + h + 10
              ? ((e.left += c + h + 10 - e.left), e)
              : void 0;
          }
        }),
        (e.exports = h);
    },
    L9lC: function (e, t, i) {
      (function (e) {
        var o = i('DxCR'),
          n = o.UppercaseTransformer,
          a = o.SymbolBinder,
          r = o.BarTimeBinder,
          l = o.SessionBinder,
          s = o.PropertyPage,
          d = o.GreateTransformer,
          p = o.LessTransformer,
          h = o.ToIntTransformer,
          c = o.ToFloatTransformer,
          b = o.SymbolInfoSymbolTransformer,
          u = o.SimpleComboBinder,
          C = o.BooleanBinder,
          y = o.SimpleStringBinder,
          g = i('zXvd').NumericFormatter,
          w = i('0YCj'),
          T = i('uOxu').getLogger('Chart.Study.PropertyPage.Inputs'),
          v = i('pZll').symbolSearchUIService;
        function _(e, t, i, o, n) {
          s.call(this, e, t),
            (this._study = i),
            (this._showOnlyConfirmInputs = o),
            (this._symbolSearchZindex = n),
            this.prepareLayout(),
            (this._$symbolSearchPopup = null);
        }
        inherit(_, s),
          (_.prototype._addSessionEditor = function (e, t, i, o) {
            if ('session' === i.type) {
              var n = function (e, t) {
                  var i = $('<td/>');
                  i.appendTo(e),
                    i.css('padding-left', '0px'),
                    i.css('padding-right', '0px');
                  var o = $('<input>');
                  o.attr('type', 'text'),
                    o.addClass('ticker'),
                    o.css('width', '40px'),
                    o.attr('id', t),
                    o.appendTo(i);
                },
                a = function (e, t, i) {
                  var o = $('<td/>');
                  o.css('padding-left', i),
                    o.css('padding-right', i),
                    o.appendTo(e);
                  var n = $('<div/>');
                  n.appendTo(o), n.append(t), n.css('font-size', '150%');
                },
                r = $('<table/>');
              r.appendTo(e);
              var s = $('<tr/>');
              s.appendTo(r);
              var d = [
                'start_hours',
                'start_minutes',
                'end_hours',
                'end_minutes',
              ];
              n.call(this, s, d[0]),
                a.call(this, s, ':', 0),
                n.call(this, s, d[1]),
                a.call(this, s, '-', 4),
                n.call(this, s, d[2]),
                a.call(this, s, ':', 0),
                n.call(this, s, d[3]);
              this.bindControl(new l(s, d, t, !1, this.model(), o));
            } else
              T.logError('Session editor adding FAILED: wrong input type.');
          }),
          (_.prototype.prepareControl = function (t, i, o) {
            var n = this;
            var a = null,
              r = null,
              l = null;
            if ('resolution' === t.type)
              a = $(
                '<select><option value="1">1</option><option value="3">3</option><option value="5">5</option><option value="15">15</option><option value="30">30</option><option value="45">45</option><option value="60">1' +
                  window.t('h', { context: 'interval_short' }) +
                  '</option><option value="120">2' +
                  window.t('h', { context: 'interval_short' }) +
                  '</option><option value="180">3' +
                  window.t('h', { context: 'interval_short' }) +
                  '</option><option value="D">1' +
                  window.t('D', { context: 'interval_short' }) +
                  '</option><option value="W">1' +
                  window.t('W', { context: 'interval_short' }) +
                  '</option></select>',
              );
            else if ('symbol' === t.type)
              (a = $('<input class="symbol-edit single">')),
                v().bindToInput(a, {
                  onPopupOpen: function (e) {
                    (this._$symbolSearchPopup = e),
                      this._symbolSearchZindex &&
                        e.css('z-index', this._symbolSearchZindex);
                  }.bind(this),
                  onPopupClose: function () {
                    this._$symbolSearchPopup = null;
                  }.bind(this),
                  callback: function (e) {
                    t.value = e;
                  },
                }),
                i.attr('colspan', 5);
            else if ('session' === t.type)
              this._addSessionEditor(i, this._property.inputs[t.id], t, o);
            else if ('source' === t.type) {
              for (
                var s = {},
                  d = {
                    open: window.t('open'),
                    high: window.t('high'),
                    low: window.t('low'),
                    close: window.t('close'),
                    hl2: window.t('hl2'),
                    hlc3: window.t('hlc3'),
                    ohlc4: window.t('ohlc4'),
                  },
                  p = Object.keys(d),
                  h = 0;
                h < p.length;
                ++h
              )
                s[p[h]] || (s[p[h]] = p[h]);
              var c = this._study && this._study.isChildStudy();
              if (c) {
                var b = this._study.source().title(!0, null, !0),
                  u = w.getChildSourceInputTitles(
                    t,
                    this._study.source().metaInfo(),
                    b,
                  );
                for (var C in s)
                  u[C] && (s[C] = 1 === Object.keys(u).length ? b : u[C]);
              }
              if (
                e.enabled('study_on_study') &&
                this._study &&
                w.isSourceInput(t) &&
                (c || w.canBeChild(this._study.metaInfo()))
              ) {
                var y = [this._study];
                y = y.concat(this._study.getAllChildren());
                for (
                  var g = this._model.model().allStudies(), _ = 0;
                  _ < g.length;
                  ++_
                ) {
                  var m = g[_];
                  if (-1 === y.indexOf(m) && m.canHaveChildren()) {
                    var f = m.title(!0, null, !0),
                      L = m.sourceId() || '#' + m.id(),
                      S = m.metaInfo(),
                      k = S.styles,
                      x = S.plots || [];
                    if (1 === x.length) s[L + '$0'] = f;
                    else {
                      var B;
                      for (h = 0; h < x.length; ++h)
                        (B = x[h]),
                          ~w.CHILD_STUDY_ALLOWED_PLOT_TYPES.indexOf(B.type) &&
                            (s[L + '$' + h] =
                              f +
                              ': ' +
                              ((k && k[B.id] && k[B.id].title) || B.id));
                    }
                  }
                }
                (r = (function (e) {
                  return function (t) {
                    var i = null;
                    if (0 === t.indexOf('#')) {
                      var o = t.slice(1, t.indexOf('$')),
                        a = n._model.model().getStudyById(o);
                      if (null === a)
                        return void T.logError('Can not get Study by id ' + o);
                      a.isStarted() || a.start(null, !0);
                      var r = a.sourceId();
                      if (!r)
                        return void T.logError(
                          'Can not get source id for ' + a.metaInfo().id,
                        );
                      i = t.replace(/^[^\$]+/, r);
                    }
                    (!~t.indexOf('$') && !~t.indexOf('#')) ||
                      n._study.isStarted() ||
                      n._study.start(null, !0),
                      n._study.testInputValue(e, t)
                        ? this.setValueToProperty(i || this.value())
                        : this.setValue(n._property.inputs[e.id].value());
                  };
                })(t)),
                  (l = (function (e) {
                    return function (t) {
                      if (
                        e.hasOwnProperty(t) ||
                        0 === t.indexOf('#') ||
                        !~t.indexOf('$')
                      )
                        return t;
                      for (
                        var i = t.slice(0, t.indexOf('$')),
                          o = n._model.model().allStudies(),
                          a = 0;
                        a < o.length;
                        ++a
                      ) {
                        var r = o[a];
                        if (r.sourceId() === i) {
                          t = t.replace(/^[^\$]+/, '#' + r.id());
                          break;
                        }
                      }
                      return t;
                    };
                  })(s));
              }
              for (var P in ((a = $(document.createElement('select'))), s)) {
                var R = d[P] || s[P];
                $('<option>').attr('value', P).text(R).appendTo(a);
              }
              i.addClass('js-value-cell');
            } else if (t.options) {
              a = $('<select/>');
              var E = t.optionsTitles;
              t.options.forEach(function (e) {
                var t = e,
                  i = (E && E[t]) || t,
                  o = $.t(i, { context: 'input' });
                $("<option value='" + t + "'>" + o + '</option>').appendTo(a);
              });
            } else
              (a = $('<input/>')),
                'bool' === t.type
                  ? a.attr('type', 'checkbox')
                  : a.attr('type', 'text');
            return (
              a &&
                (a.appendTo(i),
                a.is(':checkbox') ||
                  'symbol' === t.type ||
                  a.css('width', '100px')),
              { valueEditor: a, valueSetter: r, propertyChangedHook: l }
            );
          }),
          (_.prototype._symbolInfoBySymbolProperty = function (e) {
            return this._study.resolvedSymbolInfoBySymbol(e.value());
          }),
          (_.prototype._sortInputs = function (e) {
            return e;
          }),
          (_.prototype.prepareLayoutImpl = function (e, t) {
            function i(e) {
              return new g().format(e);
            }
            for (var o = this._sortInputs(e.inputs), l = 0; l < o.length; l++) {
              var s = o[l],
                w = s.id;
              if (
                'first_visible_bar_time' !== w &&
                'last_visible_bar_time' !== w &&
                'time' !== s.type &&
                !s.isHidden &&
                (!this._showOnlyConfirmInputs || s.confirm) &&
                void 0 === s.groupId
              ) {
                var T =
                    'Change ' +
                    (F =
                      s.name ||
                      w.toLowerCase().replace(/\b\w/g, function (e) {
                        return e.toUpperCase();
                      })),
                  v = $('<tr/>');
                v.appendTo(t);
                var _ = $('<td/>');
                _.appendTo(v),
                  _.addClass('propertypage-name-label'),
                  _.text(window.t(F, { context: 'input' }));
                var m = $('<td/>');
                m.appendTo(v);
                var f = this.prepareControl(s, m, T),
                  L = f.valueEditor,
                  S = f.valueSetter,
                  k = f.propertyChangedHook;
                if (s.options)
                  this.bindControl(
                    new u(
                      L,
                      this._property.inputs[w],
                      null,
                      !0,
                      this.model(),
                      T,
                      S,
                      k,
                    ),
                  );
                else if ('bar_time' === s.type) {
                  this.bindControl(
                    new r(
                      L,
                      this._property.inputs[w],
                      !0,
                      this.model(),
                      T,
                      this.model().mainSeries(),
                      10,
                    ),
                  ),
                    L.addClass('ticker');
                } else if ('integer' === s.type) {
                  var x = [h(s.defval)];
                  (0 === s.min || s.min) && x.push(d(s.min)),
                    (0 === s.max || s.max) && x.push(p(s.max)),
                    this.bindControl(
                      new y(
                        L,
                        this._property.inputs[w],
                        x,
                        !1,
                        this.model(),
                        T,
                      ),
                    ),
                    L.addClass('ticker'),
                    isFinite(s.step) &&
                      s.step > 0 &&
                      L.attr('data-step', s.step);
                } else if ('float' === s.type) {
                  x = [c(s.defval)];
                  (0 === s.min || s.min) && x.push(d(s.min)),
                    (0 === s.max || s.max) && x.push(p(s.max));
                  var B = new y(
                    L,
                    this._property.inputs[w],
                    x,
                    !1,
                    this.model(),
                    T,
                  );
                  B.addFormatter(i),
                    this.bindControl(B),
                    L.addClass('ticker'),
                    isFinite(s.step) &&
                      s.step > 0 &&
                      L.attr('data-step', s.step);
                } else if ('text' === s.type)
                  this.bindControl(
                    new y(
                      L,
                      this._property.inputs[w],
                      null,
                      !1,
                      this.model(),
                      T,
                    ),
                  );
                else if ('bool' === s.type)
                  this.bindControl(
                    new C(L, this._property.inputs[w], !0, this.model(), T),
                  );
                else if ('resolution' === s.type)
                  this.bindControl(
                    new u(
                      L,
                      this._property.inputs[w],
                      n,
                      !0,
                      this.model(),
                      'Change Interval',
                    ),
                  );
                else if ('symbol' === s.type) {
                  var P = this._symbolInfoBySymbolProperty.bind(
                      this,
                      this._property.inputs[w],
                    ),
                    R = b(P, this._property.inputs[w]),
                    E = new a(
                      L,
                      this._property.inputs[w],
                      !0,
                      this.model(),
                      'Change Symbol',
                      R,
                      this._study.symbolsResolved(),
                    );
                  this.bindControl(E);
                }
              }
            }
            if (this._property.offset) {
              var F = this._property.offset.title
                ? this._property.offset.title.value()
                : window.t('Offset');
              (L = this.addOffsetEditorRow(t, F)),
                (x = [h(this._property.offset.val)]).push(
                  d(this._property.offset.min),
                ),
                x.push(p(this._property.offset.max)),
                this.bindControl(
                  new y(
                    L,
                    this._property.offset.val,
                    x,
                    !1,
                    this.model(),
                    'Undo ' + F,
                  ),
                );
            }
            this._property.offsets &&
              $.each(
                e.plots,
                function (e, i) {
                  if (this._property.offsets[i.id]) {
                    var o = this._property.offsets[i.id];
                    if (void 0 === o.isHidden || !o.isHidden.value()) {
                      var n = o.title.value();
                      L = this.addOffsetEditorRow(t, n);
                      var a = [h(o.val)];
                      a.push(d(o.min)),
                        a.push(p(o.max)),
                        this.bindControl(
                          new y(L, o.val, a, !1, this.model(), 'Undo ' + n),
                        );
                    }
                  }
                }.bind(this),
              );
          }),
          (_.prototype.prepareLayout = function () {
            (this._table = $('<table/>')),
              this._table.addClass('property-page'),
              this._table.attr('cellspacing', '0'),
              this._table.attr('cellpadding', '2');
            var e = this._study.metaInfo();
            this.prepareLayoutImpl(e, this._table), this.loadData();
          }),
          (_.prototype.symbolSearchPopup = function () {
            return this._$symbolSearchPopup;
          }),
          (_.prototype.widget = function () {
            return this._table;
          }),
          (t.StudyInputsPropertyPage = _);
      }.call(this, i('Kxc7')));
    },
    LkNV: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.BooleanBinder,
        r = n.FloatBinder,
        l = n.ColorBinding,
        s = n.SimpleComboBinder,
        d = n.SliderBinder,
        p = i('jNEI').addColorPicker,
        h = i('/4PT').createLineStyleEditor,
        c = i('y/RR').createTransparencyEditor;
      function b(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(b, o),
        (b.prototype.addLevelEditor = function (e, t, i) {
          var o = $('<tr>');
          if ((o.appendTo(this._table), e)) {
            var n = $('<td>');
            n.appendTo(o);
            var c = $("<input type='checkbox' class='visibility-switch'>");
            c.appendTo(n);
            var b = $('<td>');
            b.appendTo(o);
            var u = $("<input type='text'>");
            u.appendTo(b),
              u.css('width', '70px'),
              this.bindControl(
                new a(
                  c,
                  t.visible,
                  !0,
                  this.model(),
                  'Change Pitchfork Line Visibility',
                ),
              ),
              this.bindControl(
                new r(
                  u,
                  t.coeff,
                  !1,
                  this.model(),
                  'Change Pitchfork Line Coeff',
                ),
              );
          } else $("<td colspan='2'>" + $.t('Median') + '</td>').appendTo(o);
          var C = $("<td class='colorpicker-cell'>");
          C.appendTo(o);
          var y = p(C),
            g = $('<td>');
          g.appendTo(o);
          var w = this.createLineWidthEditor();
          w.appendTo(g);
          var T = $('<td>');
          T.appendTo(o);
          var v = h();
          v.render().appendTo(T),
            this.bindControl(
              new l(
                y,
                t.color,
                !0,
                this.model(),
                'Change Pitchfork Line Color',
              ),
              0,
            ),
            this.bindControl(
              new s(
                v,
                t.linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Pitchfan Line Style',
              ),
            ),
            this.bindControl(
              new d(
                w,
                t.linewidth,
                !0,
                this.model(),
                'Change Pitchfan Line Width',
              ),
            );
        }),
        (b.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            this.addLevelEditor(null, this._linetool.properties().median, !1);
          for (var e = 0; e <= 8; e++) {
            var t = 'level' + e;
            this.addLevelEditor(
              $.t('Level {0}').format(e + 1),
              this._linetool.properties()[t],
              !1,
            );
          }
          this.addOneColorPropertyWidget(this._table);
          var i = $('<tr>');
          i.appendTo(this._table);
          var o = $("<input type='checkbox' class='visibility-switch'>");
          $('<td>').append(o).appendTo(i),
            this.createLabeledCell($.t('Background'), o).appendTo(i);
          var n = c();
          $('<td colspan="3">').append(n).appendTo(i),
            this.bindControl(
              new a(
                o,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Pitchfan Background Visibility',
              ),
            ),
            this.bindControl(
              new d(
                n,
                this._linetool.properties().transparency,
                !0,
                this.model(),
                'Change Pitchfan Background Transparency',
              ),
            ),
            this.loadData();
        }),
        (b.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = b);
    },
    MKMD: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.SimpleComboBinder,
        r = n.ColorBinding,
        l = n.SliderBinder,
        s = i('/4PT').createLineStyleEditor;
      function d(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(d, o),
        (d.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2');
          var e = this.createLineWidthEditor(),
            t = s(),
            i = this.createColorPicker(),
            o = this.addLabeledRow(this._table, 'Lines');
          $('<td>').append(i).appendTo(o),
            $('<td>').append(e).appendTo(o),
            $('<td>').append(t.render()).appendTo(o),
            this.bindControl(
              new r(
                i,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Circle Lines Color',
              ),
            ),
            this.bindControl(
              new a(
                t,
                this._linetool.properties().linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Circle Lines Style',
              ),
            ),
            this.bindControl(
              new l(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Circle Lines Width',
              ),
            ),
            this.loadData();
        }),
        (d.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = d);
    },
    NHMx: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.BooleanBinder,
        r = n.ColorBinding,
        l = n.SimpleComboBinder,
        s = n.SliderBinder,
        d = n.SimpleStringBinder,
        p = i('QloM').TabOpenFrom;
      function h(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(h, o),
        (h.prototype.prepareLayout = function () {
          var e = this.createColorPicker(),
            t = this.createFontSizeEditor(),
            i = this.createFontEditor(),
            o = this.createTextEditor(350, 200),
            n = this.createColorPicker(),
            h = this.createLineWidthEditor(),
            c = this.createColorPicker(),
            b = $('<input type="checkbox">'),
            u = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>',
            ),
            C = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>',
            );
          this.bindControl(
            new r(
              e,
              this._linetool.properties().color,
              !0,
              this.model(),
              'Change Text Color',
            ),
          ),
            this.bindControl(
              new l(
                t,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new l(
                i,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Text Font',
              ),
            ),
            this.bindControl(
              new d(
                o,
                this._linetool.properties().text,
                null,
                !0,
                this.model(),
                'Change Text',
              ),
            ),
            this.bindControl(
              new r(
                n,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Text Background',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new r(
                c,
                this._linetool.properties().bordercolor,
                !0,
                this.model(),
                'Change Text Color',
              ),
            ),
            this.bindControl(
              new s(
                h,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Border Width',
              ),
            ),
            this.bindControl(
              new a(
                b,
                this._linetool.properties().wordWrap,
                !0,
                this.model(),
                'Change Text Wrap',
              ),
            ),
            this.bindControl(
              new a(
                u,
                this._linetool.properties().bold,
                !0,
                this.model(),
                'Change Text Font Bold',
              ),
            ),
            this.bindControl(
              new a(
                C,
                this._linetool.properties().italic,
                !0,
                this.model(),
                'Change Text Font Italic',
              ),
            );
          var y = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            ).data('layout-tab-open', p.Override),
            g = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            ),
            w = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            );
          (this._table = y.add(w).add(g)),
            $(document.createElement('tr'))
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(e),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(i),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(t),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(u),
              )
              .append($(document.createElement('td')).append(C))
              .appendTo(y),
            $(document.createElement('tr'))
              .append(
                $(document.createElement('td')).attr({ colspan: 5 }).append(o),
              )
              .appendTo(y);
          var T = this.addLabeledRow(g, 'Text Wrap', b);
          $('<td>').append(b).prependTo(T);
          T = this.addLabeledRow(w, 'Background');
          $('<td>').append(n).appendTo(T);
          T = this.addLabeledRow(w, 'Border');
          $('<td>').append(c).appendTo(T),
            $('<td>').append(h).appendTo(T),
            this.loadData(),
            setTimeout(function () {
              o.select(), o.focus();
            }, 20);
        }),
        (h.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = h);
    },
    PVgW: function (e, t, i) {
      'use strict';
      i.r(t);
      i('P5fv'), i('si6p');
      var o = i('ogJP'),
        n = i('R4+T');
      function a(e) {
        return (
          (e = Math.abs(e)),
          !Object(o.isInteger)(e) &&
            e > 1 &&
            (e = parseFloat(e.toString().replace(/^.+\./, '0.'))),
          0 < e && e < 1
            ? Math.pow(
                10,
                (function (e) {
                  var t = String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                  if (null === t) return 0;
                  var i = t[1] ? t[1].length : 0,
                    o = t[2] ? parseInt(t[2], 0) : 0;
                  return Math.max(0, i - o);
                })(e),
              )
            : 1
        );
      }
      function r(e, t) {
        e.trigger('tvticker-beforechange');
        var i = e.data('TVTicker'),
          n = i && i.step,
          r = 0;
        (r = i.parser
          ? i.parser(e.val())
          : Object(o.isInteger)(n)
          ? parseInt(e.val(), 10)
          : parseFloat(e.val())),
          isNaN(r) && (r = 0);
        var l = a(n),
          s = t(r, Math.max(l, a(r)));
        i.formatter && (s = i.formatter(s)), e.val(s), e.change();
      }
      function l(e) {
        var t = e.data('TVTicker'),
          i = t && t.step,
          o = t && t.max;
        r(e, function (e, t) {
          var n = (Math.round(e * t) + Math.round(i * t)) / t;
          return null != o && o < n && (n = e), n;
        });
      }
      function s(e) {
        var t = e.data('TVTicker'),
          i = t && t.step,
          o = t && t.min;
        r(e, function (e, t) {
          var n = (Math.round(e * t) - Math.round(i * t)) / t;
          return null != o && n < o && (n = e), n;
        });
      }
      $.fn.TVTicker = function (e) {
        return (
          void 0 === e && (e = {}),
          this.each(function () {
            var t = !1,
              i = $(this),
              o = i.data('TVTicker');
            if (
              (o ? (t = !0) : (o = { step: Number(i.data('step')) || 1 }),
              'step' in e && (o.step = Number(e.step) || o.step),
              'min' in e && (o.min = e.min),
              'max' in e && (o.max = e.max),
              'formatter' in e && (o.formatter = e.formatter),
              'parser' in e && (o.parser = e.parser),
              i.data('TVTicker', o),
              !t)
            ) {
              var a = $('<div class="tv-ticker">').appendTo(i.parent()),
                r = $('<div class="tv-ticker__btn tv-ticker__btn--up">')
                  .html(n)
                  .appendTo(a),
                d = $('<div class="tv-ticker__btn tv-ticker__btn--down">')
                  .html(n)
                  .appendTo(a);
              a.on('mousedown', function (e) {
                e.preventDefault(), i.focus();
              }),
                r.click(function () {
                  i.is(':disabled') || l(i);
                }),
                d.click(function () {
                  i.is(':disabled') || s(i);
                }),
                i.keydown(function (e) {
                  i.is(':disabled') ||
                    (38 === e.keyCode
                      ? r.addClass('i-active')
                      : 40 === e.keyCode && d.addClass('i-active'));
                }),
                i.keyup(function (e) {
                  i.is(':disabled') ||
                    (38 === e.keyCode
                      ? (l(i), r.removeClass('i-active'))
                      : 40 === e.keyCode && (s(i), d.removeClass('i-active')));
                }),
                i.mousewheel(function (e) {
                  e.deltaY * (e.deltaFactor / 100) > 0 ? r.click() : d.click();
                });
            }
          })
        );
      };
    },
    QPOT: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.ColorBinding,
        r = n.SliderBinder;
      function l(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(l, o),
        (l.prototype.prepareLayout = function () {
          var e = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            ),
            t = $(
              '<table class="property-page property-page-unpadded" cellspacing="0" cellpadding="0">',
            ).css({ width: '100%' }),
            i = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            );
          this._table = e.add(t).add(i);
          var o = this.createColorPicker(),
            n = this.createLineWidthEditor(),
            l = this.addLabeledRow(e, 'Line');
          $('<td>').append(o).appendTo(l), $('<td>').append(n).appendTo(l);
          var s = $('<tr>').appendTo(t),
            d = $('<td>')
              .appendTo(s)
              .css({ 'vertical-align': 'top', width: '50%' }),
            p = $('<td>')
              .appendTo(s)
              .css({ 'vertical-align': 'top', width: '50%' }),
            h = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            ).appendTo(d),
            c = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            ).appendTo(p),
            b = this.addColorPickerRow(h, $.t('Source back color')),
            u = this.addColorPickerRow(h, $.t('Source text color')),
            C = this.addColorPickerRow(h, $.t('Source border color')),
            y = this.addColorPickerRow(h, $.t('Success back color')),
            g = this.addColorPickerRow(h, $.t('Success text color')),
            w = this.addColorPickerRow(c, $.t('Target back color')),
            T = this.addColorPickerRow(c, $.t('Target text color')),
            v = this.addColorPickerRow(c, $.t('Target border color')),
            _ = this.addColorPickerRow(c, $.t('Failure back color')),
            m = this.addColorPickerRow(c, $.t('Failure text color'));
          this.bindControl(
            new a(
              o,
              this._linetool.properties().linecolor,
              !0,
              this.model(),
              'Forecast Line Color',
            ),
          ),
            this.bindControl(
              new r(
                n,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Forecast Line Width',
              ),
            ),
            this.bindControl(
              new a(
                o,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Forecast Line Color',
              ),
            ),
            this.bindControl(
              new r(
                n,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Forecast Line Width',
              ),
            ),
            this.bindControl(
              new a(
                b,
                this._linetool.properties().sourceBackColor,
                !0,
                this.model(),
                'Forecast Source Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new a(
                C,
                this._linetool.properties().sourceStrokeColor,
                !0,
                this.model(),
                'Forecast Source Border Color',
              ),
            ),
            this.bindControl(
              new a(
                u,
                this._linetool.properties().sourceTextColor,
                !0,
                this.model(),
                'Forecast Source Text Color',
              ),
            ),
            this.bindControl(
              new a(
                w,
                this._linetool.properties().targetBackColor,
                !0,
                this.model(),
                'Forecast Target Background Color',
              ),
            ),
            this.bindControl(
              new a(
                v,
                this._linetool.properties().targetStrokeColor,
                !0,
                this.model(),
                'Forecast Target Border Color',
              ),
            ),
            this.bindControl(
              new a(
                T,
                this._linetool.properties().targetTextColor,
                !0,
                this.model(),
                'Forecast Target Text Color',
              ),
            ),
            this.bindControl(
              new a(
                y,
                this._linetool.properties().successBackground,
                !0,
                this.model(),
                'Forecast Success Back Color',
              ),
            ),
            this.bindControl(
              new a(
                g,
                this._linetool.properties().successTextColor,
                !0,
                this.model(),
                'Forecast Success Text Color',
              ),
            ),
            this.bindControl(
              new a(
                _,
                this._linetool.properties().failureBackground,
                !0,
                this.model(),
                'Forecast Failure Back Color',
              ),
            ),
            this.bindControl(
              new a(
                m,
                this._linetool.properties().failureTextColor,
                !0,
                this.model(),
                'Forecast Failure Text Color',
              ),
            ),
            this.loadData();
        }),
        (l.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = l);
    },
    QxMc: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.BooleanBinder,
        r = n.SliderBinder,
        l = n.ColorBinding,
        s = i('jNEI').addColorPicker,
        d = i('y/RR').createTransparencyEditor;
      function p(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(p, o),
        (p.prototype.addOneColorPropertyWidget = function (e) {
          var t = this.createOneColorForAllLinesWidget(),
            i = $('<tr>');
          i
            .append($('<td>'))
            .append($('<td>'))
            .append(t.editor)
            .append($('<td>').append(t.label)),
            i.appendTo(e);
        }),
        (p.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page property-page-unpadded'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            this._table.css({ width: '100%' });
          var e = $('<tr>');
          e.appendTo(this._table);
          var t = this._linetool.properties(),
            i = $('<table>');
          $("<td valign='top'>").append(i).appendTo(e);
          var o = $('<tr>');
          for (var n in ($(
            "<td colspan='3'>" + $.t('Levels') + '</td>',
          ).appendTo(o),
          o.appendTo(i),
          t.levels._childs)) {
            var p = t.levels[n],
              h = $('<tr>');
            h.appendTo(i), $('<td>' + n + '</td>').appendTo(h);
            var c = $("<input type='checkbox' class='visibility-switch'>");
            $('<td>').append(c).appendTo(h),
              (f = $("<td class='colorpicker-cell'>")).appendTo(h);
            var b = s(f);
            (L = $('<td>')).appendTo(h),
              (S = this.createLineWidthEditor()).appendTo(L),
              this.bindControl(
                new a(
                  c,
                  p.visible,
                  !0,
                  this.model(),
                  'Change Gann Line Visibility',
                ),
              ),
              this.bindControl(
                new l(
                  b,
                  p.color,
                  !0,
                  this.model(),
                  'Change Gann Line Color',
                  0,
                ),
              ),
              this.bindControl(
                new r(S, p.width, !0, this.model(), 'Change Gann Line Width'),
              );
          }
          var u = $('<table>');
          $("<td valign='top'>").append(u).appendTo(e);
          var C = $('<tr>');
          for (var n in ($("<td colspan='4'>" + $.t('Fans') + '</td>').appendTo(
            C,
          ),
          C.appendTo(u),
          t.fanlines._childs)) {
            var y = t.fanlines[n],
              g = $('<tr>');
            g.appendTo(u);
            c = $("<input type='checkbox' class='visibility-switch'>");
            $('<td>').append(c).appendTo(g);
            var w = y.x.value() + 'x' + y.y.value();
            $('<td>' + w + '</td>').appendTo(g),
              (f = $("<td class='colorpicker-cell'>")).appendTo(g);
            b = s(f);
            (L = $('<td>')).appendTo(g),
              (S = this.createLineWidthEditor()).appendTo(L),
              this.bindControl(
                new a(
                  c,
                  y.visible,
                  !0,
                  this.model(),
                  'Change Gann Line Visibility',
                ),
              ),
              this.bindControl(
                new l(b, y.color, !0, this.model(), 'Change Gann Fan Color', 0),
              ),
              this.bindControl(
                new r(S, y.width, !0, this.model(), 'Change Gann Line Width'),
              );
          }
          var T = $('<table>');
          $("<td valign='top'>").append(T).appendTo(e);
          var v = $('<tr>');
          for (var n in ($("<td colspan='4'>" + $.t('Arcs') + '</td>').appendTo(
            v,
          ),
          v.appendTo(T),
          t.arcs._childs)) {
            var _ = t.arcs[n],
              m = $('<tr>');
            m.appendTo(T);
            c = $("<input type='checkbox' class='visibility-switch'>");
            $('<td>').append(c).appendTo(m);
            var f;
            w = _.x.value() + 'x' + _.y.value();
            $('<td>' + w + '</td>').appendTo(m),
              (f = $("<td class='colorpicker-cell'>")).appendTo(m);
            var L, S;
            b = s(f);
            (L = $('<td>')).appendTo(m),
              (S = this.createLineWidthEditor()).appendTo(L),
              this.bindControl(
                new a(
                  c,
                  _.visible,
                  !0,
                  this.model(),
                  'Change Gann Line Visibility',
                ),
              ),
              this.bindControl(
                new l(b, _.color, !0, this.model(), 'Change Gann Arc Color', 0),
              ),
              this.bindControl(
                new r(S, _.width, !0, this.model(), 'Change Gann Line Width'),
              );
          }
          this.addOneColorPropertyWidget(T);
          var k = $('<tbody>').appendTo(this._table),
            x = $('<input type="checkbox" class="visibility-switch">'),
            B = d(),
            P = $('<tr>').appendTo(k),
            R = $('<table>');
          $('<td colspan="3">').append(R).appendTo(P);
          P = $('<tr>').appendTo(R);
          if (
            ($('<td>').append(x).appendTo(P),
            $('<td>' + $.t('Background') + '</td>').appendTo(P),
            $('<td>').append(B).appendTo(P),
            t.reverse)
          ) {
            var E = $("<input type='checkbox' class='visibility-switch'>");
            P = this.addLabeledRow(R, $.t('Reverse'), E, !0);
            $('<td>').append(E).prependTo(P),
              this.bindControl(
                new a(
                  E,
                  t.reverse,
                  !0,
                  this.model(),
                  'Change Gann Square Reverse',
                ),
              );
          }
          this.bindControl(
            new a(
              x,
              t.arcsBackground.fillBackground,
              !0,
              this.model(),
              'Change Gann Square Filling',
            ),
          ),
            this.bindControl(
              new r(
                B,
                t.arcsBackground.transparency,
                !0,
                this.model(),
                'Change Gann Square Background Transparency',
              ),
            );
        }),
        (p.prototype.widget = function () {
          return this._table;
        }),
        (e.exports.LineToolGannFixedStylesPropertyPage = p);
    },
    'R4+T': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>';
    },
    RTm2: function (e, t, i) {
      'use strict';
      var o = i('DxCR'),
        n = o.PropertyPage,
        a = o.BooleanBinder,
        r = o.RangeBinder,
        l = i('Kxc7'),
        s = i('Ialn').isRtl;
      function d(e, t, i) {
        n.call(this, e, t), (this._linetool = i), this.prepareLayout();
      }
      inherit(d, n),
        (d.prototype.prepareLayout = function () {
          this._block = $('<table class="property-page">');
          var e = this._linetool.properties().intervalsVisibilities;
          if (l.enabled('seconds_resolution')) {
            var t = $('<tr>').appendTo(this._block),
              i = $('<label>').append($.t('Seconds')),
              o = $("<input type='checkbox'>")
                .addClass('visibility-checker')
                .prependTo(i);
            $('<td>').css('padding-right', '15px').append(i).appendTo(t);
            var n = $("<input type='text'>").addClass('ticker-text');
            $('<td>').append(n).appendTo(t);
            var d = $('<div>')
              .addClass('slider-range ui-slider-horizontal')
              .slider();
            $('<td>').append(d).appendTo(t);
            var p = $("<input type='text'>").addClass('ticker-text');
            $('<td>').append(p).appendTo(t),
              this.bindControl(
                new a(
                  o,
                  e.seconds,
                  !0,
                  this.model(),
                  'Change Line Tool Visibility On Seconds',
                ),
              ),
              this.bindControl(
                new r(
                  d,
                  [e.secondsFrom, e.secondsTo],
                  [1, 59],
                  !1,
                  this.model(),
                  [n, p],
                  [$.t('Change Seconds From'), $.t('Change Seconds To')],
                  o,
                ),
              );
          }
          (t = $('<tr>').appendTo(this._block)),
            (i = $('<label>').append($.t('Minutes')));
          var h = $("<input type='checkbox'>")
              .addClass('visibility-checker')
              .prependTo(i),
            c = s() ? 'padding-left' : 'padding-right';
          $('<td>').css(c, '15px').append(i).appendTo(t);
          n = $("<input type='text'>").addClass('ticker-text');
          $('<td>').append(n).appendTo(t);
          d = $('<div>').addClass('slider-range ui-slider-horizontal').slider();
          $('<td>').append(d).appendTo(t);
          p = $("<input type='text'>").addClass('ticker-text');
          $('<td>').append(p).appendTo(t),
            this.bindControl(
              new a(
                h,
                e.minutes,
                !0,
                this.model(),
                'Change Line Tool Visibility On Minutes',
              ),
            ),
            this.bindControl(
              new r(
                d,
                [e.minutesFrom, e.minutesTo],
                [1, 59],
                !1,
                this.model(),
                [n, p],
                [$.t('Change Minutes From'), $.t('Change Minutes To')],
                h,
              ),
            );
          (t = $('<tr>').appendTo(this._block)),
            (i = $('<label>').append($.t('Hours')));
          var b = $("<input type='checkbox'>")
            .addClass('visibility-checker')
            .prependTo(i);
          $('<td>').append(i).appendTo(t);
          n = $("<input type='text'>").addClass('ticker-text');
          $('<td>').append(n).appendTo(t);
          d = $('<div>').addClass('slider-range ui-slider-horizontal').slider();
          $('<td>').append(d).appendTo(t);
          p = $("<input type='text'>").addClass('ticker-text');
          $('<td>').append(p).appendTo(t),
            this.bindControl(
              new a(
                b,
                e.hours,
                !0,
                this.model(),
                'Change Line Tool Visibility On Hours',
              ),
            ),
            this.bindControl(
              new r(
                d,
                [e.hoursFrom, e.hoursTo],
                [1, 24],
                !1,
                this.model(),
                [n, p],
                [$.t('Change Minutes From'), $.t('Change Hours To')],
                b,
              ),
            );
          (t = $('<tr>').appendTo(this._block)),
            (i = $('<label>').append($.t('Days')));
          var u = $("<input type='checkbox'>")
            .addClass('visibility-checker')
            .prependTo(i);
          $('<td>').append(i).appendTo(t);
          n = $("<input type='text'>").addClass('ticker-text');
          $('<td>').append(n).appendTo(t);
          d = $('<div>').addClass('slider-range ui-slider-horizontal').slider();
          $('<td>').append(d).appendTo(t);
          p = $("<input type='text'>").addClass('ticker-text');
          $('<td>').append(p).appendTo(t),
            this.bindControl(
              new a(
                u,
                e.days,
                !0,
                this.model(),
                'Change Line Tool Visibility On Days',
              ),
            ),
            this.bindControl(
              new r(
                d,
                [e.daysFrom, e.daysTo],
                [1, 366],
                !1,
                this.model(),
                [n, p],
                [$.t('Change Minutes From'), $.t('Change Days To')],
                u,
              ),
            );
          (t = $('<tr>').css('height', '29px').appendTo(this._block)),
            (i = $('<label>').append($.t('Weeks')));
          var C = $("<input type='checkbox'>").prependTo(i);
          $('<td>').append(i).appendTo(t),
            this.bindControl(
              new a(
                C,
                e.weeks,
                !0,
                this.model(),
                'Change Line Tool Visibility On Weeks',
              ),
            );
          (t = $('<tr>').css('height', '29px').appendTo(this._block)),
            (i = $('<label>').append($.t('Months')));
          var y = $("<input type='checkbox'>").prependTo(i);
          $('<td>').append(i).appendTo(t),
            this.bindControl(
              new a(
                y,
                e.months,
                !0,
                this.model(),
                'Change Line Tool Visibility On Months',
              ),
            ),
            this.loadData();
        }),
        (d.prototype.widget = function () {
          return this._block;
        }),
        (e.exports = d);
    },
    SA6f: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'createShapeStyleEditor', function () {
          return n;
        });
      i('P5fv');
      var o = i('Nu4p');
      function n() {
        var e = '<select>';
        return (
          Object.keys(o.plotShapesData).forEach(function (t) {
            var i = o.plotShapesData[t];
            e += '<option value="' + i.id + '">' + i.guiName + '</option>';
          }),
          (e += '</select>'),
          $(e)
        );
      }
    },
    SSGo: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.ColorBinding,
        r = n.BooleanBinder,
        l = n.SliderBinder;
      function s(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(s, o),
        (s.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2');
          var e = this.createLineWidthEditor(),
            t = this.createColorPicker();
          (n = this.addLabeledRow(this._table, 'Border')).prepend('<td>'),
            $('<td>').append(t).appendTo(n),
            $('<td>').append(e).appendTo(n);
          var i = $('<input type="checkbox" class="visibility-switch">'),
            o = this.createColorPicker(),
            n = this.addLabeledRow(this._table, 'Background', i);
          $('<td>').append(i).prependTo(n),
            $('<td>').append(o).appendTo(n),
            this.bindControl(
              new r(
                i,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Rectangle Filling',
              ),
            ),
            this.bindControl(
              new a(
                t,
                this._linetool.properties().color,
                !0,
                this.model(),
                'Change Rectangle Line Color',
              ),
            ),
            this.bindControl(
              new a(
                o,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Rectangle Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new l(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Rectangle Border Width',
              ),
            ),
            this.loadData();
        }),
        (s.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = s);
    },
    SSqB: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.FloatBinder,
        r = n.BooleanBinder,
        l = n.ColorBinding,
        s = n.SimpleComboBinder,
        d = n.SliderBinder,
        p = i('jNEI').addColorPicker,
        h = i('/4PT').createLineStyleEditor,
        c = i('y/RR').createTransparencyEditor;
      function b(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(b, o),
        (b.prototype.addLevelEditor = function (e, t, i) {
          var o = $('<tr>');
          o.appendTo(this._table);
          var n = $('<td>');
          n.appendTo(o);
          var c = $("<input type='checkbox' class='visibility-switch'>");
          if ((c.appendTo(n), e)) {
            var b = $('<td>');
            b.appendTo(o);
            var u = $("<input type='text'>");
            u.appendTo(b),
              u.css('width', '70px'),
              this.bindControl(
                new a(
                  u,
                  t.coeff,
                  !1,
                  this.model(),
                  'Change Pitchfork Line Coeff',
                ),
              );
          } else this.createLabeledCell($.t('Trend Line'), c).appendTo(o);
          var C = $("<td class='colorpicker-cell'>");
          C.appendTo(o);
          var y = p(C),
            g = $('<td>');
          g.appendTo(o);
          var w = this.createLineWidthEditor();
          w.appendTo(g);
          var T = $('<td>');
          T.appendTo(o);
          var v = h();
          v.render().appendTo(T),
            this.bindControl(
              new r(
                c,
                t.visible,
                !0,
                this.model(),
                'Change Pitchfork Line Visibility',
              ),
            ),
            this.bindControl(
              new l(
                y,
                t.color,
                !0,
                this.model(),
                'Change Pitchfork Line Color',
                0,
              ),
            ),
            this.bindControl(
              new s(
                v,
                t.linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Pitchfork Line Style',
              ),
            ),
            this.bindControl(
              new d(
                w,
                t.linewidth,
                parseInt,
                this.model(),
                'Change Pitchfork Line Width',
              ),
            );
        }),
        (b.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2');
          for (var e = 1; e <= 11; e++) {
            var t = 'level' + e;
            this.addLevelEditor(
              'Level ' + e,
              this._linetool.properties()[t],
              !1,
            );
          }
          this.addOneColorPropertyWidget(this._table);
          var i = $("<input type='checkbox' class='visibility-switch'>"),
            o = this.addLabeledRow(this._table, $.t('Show Labels'), i);
          $('<td>').append(i).prependTo(o);
          var n = $("<table cellspacing='0' cellpadding='0'>"),
            a = $(
              "<select><option value='left'>" +
                $.t('left') +
                "</option><option value='center'>" +
                $.t('center') +
                "</option><option value='right'>" +
                $.t('right') +
                '</option></select>',
            ),
            l = $(
              "<select><option value='top'>" +
                $.t('top') +
                "</option><option value='middle'>" +
                $.t('middle') +
                "</option><option value='bottom'>" +
                $.t('bottom') +
                '</option></select>',
            );
          (o = $('<tr>'))
            .append('<td>' + $.t('Labels') + '</td>')
            .append(a)
            .append('<td>&nbsp</td>')
            .append(l),
            o.appendTo(n);
          o = $('<tr>');
          $("<td colspan='5'>").append(n).appendTo(o),
            o.appendTo(this._table),
            this.bindControl(
              new s(
                a,
                this._linetool.properties().horzLabelsAlign,
                null,
                !0,
                this.model(),
                'Change Fib Time Zone Labels Alignment',
              ),
            ),
            this.bindControl(
              new s(
                l,
                this._linetool.properties().vertLabelsAlign,
                null,
                !0,
                this.model(),
                'Change Fib Time Zone Labels Alignment',
              ),
            ),
            (o = $('<tr>')).appendTo(this._table);
          var p = $("<input type='checkbox' class='visibility-switch'>");
          $('<td>').append(p).appendTo(o),
            this.createLabeledCell($.t('Background'), p).appendTo(o);
          var h = c();
          $('<td colspan="3">').append(h).appendTo(o),
            this.bindControl(
              new r(
                i,
                this._linetool.properties().showLabels,
                !0,
                this.model(),
                'Change Fib Time Zone Labels Visibility',
              ),
            ),
            this.bindControl(
              new d(
                h,
                this._linetool.properties().transparency,
                !0,
                this.model(),
                'Change Fib Retracement Background Transparency',
              ),
            ),
            this.bindControl(
              new r(
                p,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Fib Retracement Background Visibility',
              ),
            ),
            this.loadData();
        }),
        (b.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = b);
    },
    To5g: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.BooleanBinder,
        r = n.ColorBinding,
        l = n.SimpleComboBinder,
        s = n.SliderBinder,
        d = i('/4PT').createLineStyleEditor;
      function p(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(p, o),
        (p.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2');
          var e = $('<tbody>').appendTo(this._table),
            t = this.createLineWidthEditor(),
            i = d(),
            o = this.createColorPicker(),
            n = $('<tr>').appendTo(e);
          $('<td></td><td>' + $.t('Channel') + '</td>').appendTo(n),
            $('<td>').append(o).appendTo(n),
            $('<td>').append(t).appendTo(n),
            $('<td>').append(i.render()).appendTo(n);
          n = $('<tr>').appendTo(e);
          var p = $('<td>').appendTo(n),
            h = $("<input type='checkbox' class='visibility-switch'>");
          h.appendTo(p), this.createLabeledCell('Middle', h).appendTo(n);
          var c = this.createLineWidthEditor(),
            b = d(),
            u = this.createColorPicker();
          $('<td>').append(u).appendTo(n),
            $('<td>').append(c).appendTo(n),
            $('<td>').append(b.render()).appendTo(n);
          n = $('<tr>').appendTo(e);
          var C = $('<td>').appendTo(n),
            y = $("<input type='checkbox' class='visibility-switch'>");
          y.appendTo(C), this.createLabeledCell('Background', y).appendTo(n);
          var g = this.createColorPicker();
          $('<td>').append(g).appendTo(n);
          var w = $('<tbody>').appendTo(this._table),
            T = this.addEditorRow(
              w,
              'Extend Left',
              $("<input type='checkbox'>"),
              2,
            ),
            v = this.addEditorRow(
              w,
              'Extend Right',
              $("<input type='checkbox'>"),
              2,
            ),
            _ = this._linetool.properties();
          this.bindControl(
            new a(
              y,
              _.fillBackground,
              !0,
              this.model(),
              'Change Parallel Channel Fill Background',
            ),
          ),
            this.bindControl(
              new a(
                h,
                _.showMidline,
                !0,
                this.model(),
                'Change Parallel Channel Show Center Line',
              ),
            ),
            this.bindControl(
              new a(
                T,
                _.extendLeft,
                !0,
                this.model(),
                'Change Parallel Channel Extending Left',
              ),
            ),
            this.bindControl(
              new a(
                v,
                _.extendRight,
                !0,
                this.model(),
                'Change Parallel Channel Extending Right',
              ),
            ),
            this.bindControl(
              new r(
                o,
                _.linecolor,
                !0,
                this.model(),
                'Change Parallel Channel Color',
              ),
            ),
            this.bindControl(
              new l(
                i,
                _.linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Parallel Channel Style',
              ),
            ),
            this.bindControl(
              new s(
                t,
                _.linewidth,
                !0,
                this.model(),
                'Change Parallel Channel Width',
              ),
            ),
            this.bindControl(
              new r(
                u,
                _.midlinecolor,
                !0,
                this.model(),
                'Change Parallel Channel Middle Color',
              ),
            ),
            this.bindControl(
              new l(
                b,
                _.midlinestyle,
                parseInt,
                !0,
                this.model(),
                'Change Parallel Channel Middle Style',
              ),
            ),
            this.bindControl(
              new s(
                c,
                _.midlinewidth,
                !0,
                this.model(),
                'Change Parallel Channel Middle Width',
              ),
            ),
            this.bindControl(
              new r(
                g,
                _.backgroundColor,
                !0,
                this.model(),
                'Change Parallel Channel Back Color',
                _.transparency,
              ),
            ),
            this.loadData();
        }),
        (p.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = p);
    },
    UDBZ: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.ColorBinding,
        r = n.SliderBinder,
        l = n.SimpleComboBinder,
        s = n.BooleanBinder;
      function d(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(d, o),
        (d.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2');
          var e = this.createLineWidthEditor(),
            t = this.createColorPicker(),
            i = this.createColorPicker(),
            o = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>',
            ),
            n = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>',
            ),
            d = this.createFontSizeEditor(),
            p = this.createFontEditor();
          (c = this.addLabeledRow(this._table, 'Border')).prepend('<td>'),
            $('<td>').append(t).appendTo(c),
            $('<td>').append(e).appendTo(c);
          p = this.createFontEditor();
          this.bindControl(
            new a(
              t,
              this._linetool.properties().color,
              !0,
              this.model(),
              'Change Pattern Line Color',
            ),
          ),
            this.bindControl(
              new a(
                i,
                this._linetool.properties().textcolor,
                !0,
                this.model(),
                'Change Pattern Text Color',
              ),
            ),
            this.bindControl(
              new r(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Pattern Border Width',
              ),
            ),
            this.bindControl(
              new l(
                d,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new l(
                p,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Text Font',
              ),
            ),
            this.bindControl(
              new s(
                o,
                this._linetool.properties().bold,
                !0,
                this.model(),
                'Change Text Font Bold',
              ),
            ),
            this.bindControl(
              new s(
                n,
                this._linetool.properties().italic,
                !0,
                this.model(),
                'Change Text Font Italic',
              ),
            );
          var h = $(
              '<table class="property-page" cellspacing="0" cellpadding="2"><tr>',
            )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(i),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(p),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(d),
              )
              .append(
                $(document.createElement('td'))
                  .css('vertical-align', 'top')
                  .attr({ width: 1 })
                  .append(o),
              )
              .append(
                $(document.createElement('td'))
                  .css('vertical-align', 'top')
                  .append(n),
              )
              .append($('</tr></table>')),
            c = this.addLabeledRow(this._table, '');
          $('<td colspan="5">').append(h).appendTo(c), this.loadData();
        }),
        (d.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = d);
    },
    XXYQ: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('n3Kh'),
        a = i('DxCR'),
        r = a.LessTransformer,
        l = a.GreateTransformer,
        s = a.ToIntTransformer,
        d = a.ToFloatTransformer,
        p = a.SimpleStringBinder,
        h = a.ColorBinding,
        c = a.SliderBinder,
        b = a.SimpleComboBinder,
        u = a.BooleanBinder,
        C = i('zXvd').NumericFormatter;
      function y(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      function g(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(y, n),
        (y.prototype.prepareLayout = function () {
          this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          );
          var e = $('<tbody>').appendTo(this._table),
            t = this.addLabeledRow(e, $.t('Stop Level. Ticks:')),
            i = $('<input type="text">');
          $('<td>').append(i).appendTo(t),
            i.addClass('ticker ticker--evenlonger');
          var o = $('<input type="text" class="ticker ticker--evenlonger">');
          $('<td>' + $.t('Price:') + '</td>').appendTo(t),
            $('<td>').append(o).appendTo(t);
          var n = this.addLabeledRow(e, $.t('Entry price:')),
            a = $('<input type="text" class="ticker ticker--evenlonger">');
          $('<td colspan="2">').append(a).appendTo(n);
          var h = this.addLabeledRow(e, $.t('Profit Level. Ticks:')),
            c = $('<input type="text" class="ticker ticker--evenlonger">');
          $('<td>').append(c).appendTo(h);
          var b = $('<input type="text" class="ticker ticker--evenlonger">');
          function u(e) {
            return new C().format(e);
          }
          $('<td>' + $.t('Price:') + '</td>').appendTo(h),
            $('<td>').append(b).appendTo(h),
            'LineToolRiskRewardLong' === this._linetool.getConstructor() &&
              (t.detach().appendTo(e), h.detach().prependTo(e));
          var y = [
            s(this._linetool.properties().stopLevel.value()),
            l(0),
            r(1e9),
          ];
          this.bindControl(
            new p(
              i,
              this._linetool.properties().stopLevel,
              y,
              !1,
              this.model(),
              'Change ' + this._linetool + ' stop level',
            ),
          );
          y = [
            s(this._linetool.properties().profitLevel.value()),
            l(0),
            r(1e9),
          ];
          this.bindControl(
            new p(
              c,
              this._linetool.properties().profitLevel,
              y,
              !1,
              this.model(),
              'Change ' + this._linetool + ' profit level',
            ),
          );
          y = [d(this._linetool.properties().entryPrice.value())];
          (w = new p(
            a,
            this._linetool.properties().entryPrice,
            y,
            !1,
            this.model(),
            'Change ' + this._linetool + ' entry price',
          )).addFormatter(u),
            this.bindControl(w);
          var g = this;
          y = [
            d(this._linetool.properties().stopPrice.value()),
            function (e) {
              return g._linetool.preparseStopPrice(e);
            },
          ];
          (w = new p(
            o,
            this._linetool.properties().stopPrice,
            y,
            !1,
            this.model(),
            'Change ' + this._linetool + ' stop price',
          )).addFormatter(u),
            this.bindControl(w);
          var w;
          y = [
            d(this._linetool.properties().targetPrice.value()),
            function (e) {
              return g._linetool.preparseProfitPrice(e);
            },
          ];
          (w = new p(
            b,
            this._linetool.properties().targetPrice,
            y,
            !1,
            this.model(),
            'Change ' + this._linetool + ' stop price',
          )).addFormatter(u),
            this.bindControl(w);
        }),
        (y.prototype.widget = function () {
          return this._table;
        }),
        inherit(g, o),
        (g.prototype.prepareLayout = function () {
          var e = this._linetool,
            t = e.properties();
          this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          );
          var i = $('<tbody>').appendTo(this._table),
            o = this.createLineWidthEditor(),
            n = this.createColorPicker(),
            a = this.addLabeledRow(i, $.t('Lines:'));
          $('<td>').append(n).appendTo(a), $('<td>').append(o).appendTo(a);
          a = this.addLabeledRow(i, $.t('Stop Color:'));
          var s = this.createColorPicker();
          $('<td>').append(s).appendTo(a);
          a = this.addLabeledRow(i, $.t('Target Color:'));
          var C = this.createColorPicker();
          $('<td>').append(C).appendTo(a);
          a = this.addLabeledRow(i, $.t('Text:'));
          var y = this.createColorPicker(),
            g = this.createFontSizeEditor(),
            w = this.createFontEditor();
          $('<td>').append(y).appendTo(a),
            $('<td>').append(w).appendTo(a),
            $('<td>').append(g).appendTo(a);
          a = $('<tr>').appendTo(i);
          var T = $('<label>').text($.t('Show price labels')),
            v = $('<input type="checkbox">').prependTo(T),
            _ =
              ((a = $('<tr>').appendTo(i)),
              (T = $('<label>').text($.t('Compact'))),
              $('<input type="checkbox">').prependTo(T));
          $('<td>').append(T).appendTo(a);
          a = this.addLabeledRow(i, $.t('Account Size'));
          var m = $('<input type="text" class="ticker">');
          $('<td>').append(m).appendTo(a);
          a = this.addLabeledRow(i, $.t('Risk'));
          (this._riskEdit = $('<input type="text" class="ticker">')),
            $('<td>').append(this._riskEdit).appendTo(a),
            this._riskEdit.data(
              'step',
              e.getRiskStep(t.riskDisplayMode.value()),
            ),
            t.riskDisplayMode.subscribe(this, this._onRiskDisplayModeChange);
          var f = this.createKeyCombo({
            percents: $.t('%'),
            money: $.t('Cash'),
          });
          $('<td>').append(f).appendTo(a),
            this.bindControl(
              new h(
                n,
                t.linecolor,
                !0,
                this.model(),
                'Change Risk/Reward line Color',
              ),
            ),
            this.bindControl(
              new c(
                o,
                t.linewidth,
                !0,
                this.model(),
                'Change Risk/Reward line width',
              ),
            ),
            this.bindControl(
              new h(
                s,
                t.stopBackground,
                !0,
                this.model(),
                'Change stop color',
                t.stopBackgroundTransparency,
              ),
            ),
            this.bindControl(
              new h(
                C,
                t.profitBackground,
                !0,
                this.model(),
                'Change target color',
                t.profitBackgroundTransparency,
              ),
            ),
            this.bindControl(
              new b(
                g,
                t.fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new b(w, t.font, null, !0, this.model(), 'Change Text Font'),
            ),
            this.bindControl(
              new h(y, t.textcolor, !0, this.model(), 'Change Text Color'),
            ),
            this.bindControl(
              new u(
                v,
                t.showPriceLabels,
                !0,
                this.model(),
                'Show Price Labels',
              ),
            ),
            this.bindControl(
              new u(_, t.compact, !0, this.model(), 'Compact mode'),
            );
          var L = [d(t.accountSize.value()), l(1), r(1e9)];
          this.bindControl(
            new p(
              m,
              t.accountSize,
              L,
              !1,
              this.model(),
              'Change ' + this._linetool + ' Account Size',
            ),
          ),
            this.bindControl(
              new b(f, t.riskDisplayMode, null, !0, this.model(), '% / Cash'),
            );
          var S = [
            d(t.risk.value()),
            l(1),
            function (i) {
              var o = t.riskDisplayMode.value();
              if ('percents' === o) i = i > 100 ? 100 : i;
              else {
                var n = t.accountSize.value();
                i = i > n ? n : i;
              }
              return e.riskFormatter(o).format(i);
            },
          ];
          this.bindControl(
            new p(
              this._riskEdit,
              t.risk,
              S,
              !1,
              this.model(),
              'Change ' + this._linetool + ' Risk',
            ),
          ),
            this.loadData();
        }),
        (g.prototype._onRiskDisplayModeChange = function () {
          var e = this._linetool,
            t = e.properties().riskDisplayMode.value(),
            i = e.riskFormatter(t);
          this._riskEdit.data('TVTicker', {
            step: e.getRiskStep(t),
            formatter: i.format.bind(i),
          });
        }),
        (g.prototype.destroy = function () {
          this._linetool
            .properties()
            .riskDisplayMode.unsubscribe(this, this._onRiskDisplayModeChange),
            o.prototype.destroy.call(this);
        }),
        (g.prototype.onResoreDefaults = function () {
          this._linetool.recalculate();
        }),
        (g.prototype.widget = function () {
          return this._table;
        }),
        (t.LineToolRiskRewardInputsPropertyPage = y),
        (t.LineToolRiskRewardStylesPropertyPage = g);
    },
    XgUb: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'createShapeLocationEditor', function () {
          return n;
        });
      i('P5fv'), i('YFKU');
      var o = i('972a');
      function n() {
        return $(
          '<select><option value="' +
            o.MarkLocation.AboveBar +
            '">' +
            $.t('Above Bar') +
            '</option><option value="' +
            o.MarkLocation.BelowBar +
            '">' +
            $.t('Below Bar') +
            '</option><option value="' +
            o.MarkLocation.Top +
            '">' +
            $.t('Top') +
            '</option><option value="' +
            o.MarkLocation.Bottom +
            '">' +
            $.t('Bottom') +
            '</option><option value="' +
            o.MarkLocation.Absolute +
            '">' +
            $.t('Absolute') +
            '</option></select>',
        );
      }
    },
    Yc1q: function (e, t, i) {
      'use strict';
      var o = i('DxCR'),
        n = o.PropertyPage,
        a = o.ColorBinding,
        r = i('jNEI').addColorPicker;
      function l(e) {
        function t(t, i, o) {
          e.call(this, t, i, o), (this._linetool = o);
        }
        return (
          inherit(t, e),
          (t.prototype.applyTemplate = function (e) {
            this.model().applyLineToolTemplate(
              this._linetool,
              e,
              'Apply Drawing Template',
            ),
              this.loadData();
          }),
          t
        );
      }
      function s(e, t, i) {
        n.call(this, e, t), (this._linetool = i);
      }
      inherit(s, n),
        (s.prototype.createOneColorForAllLinesWidget = function () {
          var e = $("<td class='colorpicker-cell'>");
          return (
            this.bindControl(
              new a(
                r(e),
                this._linetool.properties().collectibleColors,
                !0,
                this.model(),
                'Change All Lines Color',
                0,
              ),
            ),
            { label: $('<td>' + $.t('Use one color') + '</td>'), editor: e }
          );
        }),
        (s.prototype.addOneColorPropertyWidget = function (e) {
          var t = this.createOneColorForAllLinesWidget(),
            i = $('<tr>');
          i.append($('<td>')).append(t.label).append(t.editor), i.appendTo(e);
        }),
        ((s = l(s)).createTemplatesPropertyPage = l),
        (e.exports = s);
    },
    a0Rg: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'createPlotEditor', function () {
          return n;
        });
      i('P5fv'), i('YFKU');
      var o = i('23IT');
      function n() {
        var e = $('<select />');
        return (
          $(
            '<option value="' +
              o.LineStudyPlotStyle.Line +
              '">' +
              $.t('Line') +
              '</option>',
          ).appendTo(e),
          $(
            '<option value="' +
              o.LineStudyPlotStyle.LineWithBreaks +
              '">' +
              $.t('Line With Breaks') +
              '</option>',
          ).appendTo(e),
          $(
            '<option value="' +
              o.LineStudyPlotStyle.StepLine +
              '">' +
              $.t('Step Line') +
              '</option>',
          ).appendTo(e),
          $(
            '<option value="' +
              o.LineStudyPlotStyle.Histogram +
              '">' +
              $.t('Histogram') +
              '</option>',
          ).appendTo(e),
          $(
            '<option value="' +
              o.LineStudyPlotStyle.Cross +
              '">' +
              $.t('Cross', { context: 'chart_type' }) +
              '</option>',
          ).appendTo(e),
          $(
            '<option value="' +
              o.LineStudyPlotStyle.Area +
              '">' +
              $.t('Area') +
              '</option>',
          ).appendTo(e),
          $(
            '<option value="' +
              o.LineStudyPlotStyle.AreaWithBreaks +
              '">' +
              $.t('Area With Breaks') +
              '</option>',
          ).appendTo(e),
          $(
            '<option value="' +
              o.LineStudyPlotStyle.Columns +
              '">' +
              $.t('Columns') +
              '</option>',
          ).appendTo(e),
          $(
            '<option value="' +
              o.LineStudyPlotStyle.Circles +
              '">' +
              $.t('Circles') +
              '</option>',
          ).appendTo(e),
          e
        );
      }
    },
    a4eO: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.SimpleComboBinder,
        r = n.ColorBinding,
        l = n.SliderBinder,
        s = n.BooleanBinder,
        d = i('/4PT').createLineStyleEditor;
      function p(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(p, o),
        (p.prototype.prepareLayout = function () {
          this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          );
          var e = $('<tbody>').appendTo(this._table),
            t = this.createLineWidthEditor(),
            i = d(),
            o = this.createColorPicker(),
            n = this.addLabeledRow(e, 'Line');
          $('<td>').append(o).appendTo(n),
            $('<td>').append(t).appendTo(n),
            $('<td colspan="3">').append(i.render()).appendTo(n),
            this.bindControl(
              new r(
                o,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Fib Spiral Line Color',
              ),
            ),
            this.bindControl(
              new a(
                i,
                this._linetool.properties().linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Fib Spiral Line Style',
              ),
            ),
            this.bindControl(
              new l(
                t,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Fib Spiral Line Width',
              ),
            );
          var p = $('<input type="checkbox">'),
            h = this.addLabeledRow(
              this._table,
              window.t('Counterclockwise'),
              p,
            );
          $('<td>').append(p).prependTo(h),
            this.bindControl(
              new s(
                p,
                this._linetool.properties().counterclockwise,
                !0,
                this.model(),
                'Change Counterclockwise',
              ),
            ),
            this.loadData();
        }),
        (p.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = p);
    },
    bllF: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.FloatBinder,
        r = n.BooleanBinder,
        l = n.SliderBinder,
        s = n.SimpleComboBinder,
        d = n.ColorBinding,
        p = i('jNEI').addColorPicker,
        h = i('/4PT').createLineStyleEditor,
        c = i('y/RR').createTransparencyEditor;
      function b(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(b, o),
        (b.prototype.addLevelEditor = function (e, t, i) {
          var o = $('<tr>');
          o.appendTo(this._table);
          var n = $('<td>');
          n.appendTo(o);
          var c = $("<input type='checkbox' class='visibility-switch'>");
          if ((c.appendTo(n), e)) {
            var b = $('<td>');
            b.appendTo(o);
            var u = $("<input type='text'>");
            u.appendTo(b),
              u.css('width', '70px'),
              this.bindControl(
                new a(
                  u,
                  t.coeff,
                  !1,
                  this.model(),
                  'Change Pitchfork Line Coeff',
                ),
              );
          } else this.createLabeledCell($.t('Trend Line'), c).appendTo(o);
          var C = $("<td class='colorpicker-cell'>");
          C.appendTo(o);
          var y = p(C),
            g = $('<td>');
          g.appendTo(o);
          var w = this.createLineWidthEditor();
          w.appendTo(g);
          var T = $('<td>');
          T.appendTo(o);
          var v = h();
          v.render().appendTo(T),
            this.bindControl(
              new r(
                c,
                t.visible,
                !0,
                this.model(),
                'Change Pitchfork Line Visibility',
              ),
            ),
            this.bindControl(
              new d(
                y,
                t.color,
                !0,
                this.model(),
                'Change Pitchfork Line Color',
                0,
              ),
            ),
            this.bindControl(
              new s(
                v,
                t.linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Pitchfork Line Style',
              ),
            ),
            this.bindControl(
              new l(
                w,
                t.linewidth,
                parseInt,
                this.model(),
                'Change Pitchfork Line Width',
              ),
            );
        }),
        (b.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            this.addLevelEditor(
              null,
              this._linetool.properties().trendline,
              !1,
            );
          for (var e = 1; e <= 11; e++) {
            var t = 'level' + e;
            this.addLevelEditor(
              $.t('Level {0}').format(e),
              this._linetool.properties()[t],
              !1,
            );
          }
          this.addOneColorPropertyWidget(this._table);
          var i = $(
              '<table class="property-page property-page-unpadded" cellspacing="0" cellpadding="0">',
            ).css({ width: '100%' }),
            o = $('<tr>').appendTo(i);
          $(
            '<table class="property-page" cellspacing="0" cellpadding="0">',
          ).appendTo($('<td>').css({ width: '50%' }).appendTo(o)),
            $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            ).appendTo($('<td>').css({ width: '50%' }).appendTo(o));
          var n = $("<input type='checkbox' class='visibility-switch'>"),
            a = this.addLabeledRow(this._table, $.t('Show Labels'), n);
          $('<td>').append(n).prependTo(a);
          var d = $("<table cellspacing='0' cellpadding='0'>"),
            p = $(
              "<select><option value='left'>" +
                $.t('left') +
                "</option><option value='center'>" +
                $.t('center') +
                "</option><option value='right'>" +
                $.t('right') +
                '</option></select>',
            ),
            h = $(
              "<select><option value='top'>" +
                $.t('top') +
                "</option><option value='middle'>" +
                $.t('middle') +
                "</option><option value='bottom'>" +
                $.t('bottom') +
                '</option></select>',
            );
          (a = $('<tr>'))
            .append('<td>' + $.t('Labels') + '</td>')
            .append(p)
            .append('<td>&nbsp</td>')
            .append(h),
            a.appendTo(d);
          a = $('<tr>');
          $("<td colspan='5'>").append(d).appendTo(a),
            a.appendTo(this._table),
            this.bindControl(
              new s(
                p,
                this._linetool.properties().horzLabelsAlign,
                null,
                !0,
                this.model(),
                'Change Trend-Based Fib Time Labels Alignment',
              ),
            ),
            this.bindControl(
              new s(
                h,
                this._linetool.properties().vertLabelsAlign,
                null,
                !0,
                this.model(),
                'Change Trend-Based Fib Time Labels Alignment',
              ),
            ),
            (a = $('<tr>')).appendTo(this._table);
          var b = $("<input type='checkbox' class='visibility-switch'>");
          $('<td>').append(b).appendTo(a),
            this.createLabeledCell($.t('Background'), b).appendTo(a);
          var u = c();
          $('<td colspan="3">').append(u).appendTo(a),
            this.bindControl(
              new r(
                b,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Fib Retracement Background Visibility',
              ),
            ),
            this.bindControl(
              new l(
                u,
                this._linetool.properties().transparency,
                !0,
                this.model(),
                'Change Fib Retracement Background Transparency',
              ),
            ),
            this.bindControl(
              new r(
                n,
                this._linetool.properties().showCoeffs,
                !0,
                this.model(),
                'Change Fib Retracement Extend Lines',
              ),
            ),
            this.loadData();
        }),
        (b.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = b);
    },
    cqAO: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.SimpleStringBinder,
        r = n.SimpleComboBinder,
        l = n.ColorBinding,
        s = n.BooleanBinder;
      function d(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(d, o),
        (d.prototype.prepareLayout = function () {
          var e = this.createColorPicker(),
            t = this.createColorPicker(),
            i = this.createFontSizeEditor(),
            o = this.createFontEditor(),
            n = this.createTextEditor(350, 200),
            d = this.createColorPicker(),
            p = $('<input type="checkbox" class="visibility-switch">'),
            h = $('<input type="checkbox" class="visibility-switch">'),
            c = $('<input type="checkbox">'),
            b = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>',
            ),
            u = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>',
            );
          this.bindControl(
            new l(
              e,
              this._linetool.properties().color,
              !0,
              this.model(),
              'Change Text Color',
            ),
          ),
            this.bindControl(
              new r(
                i,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new r(
                o,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Text Font',
              ),
            ),
            this.bindControl(
              new a(
                n,
                this._linetool.properties().text,
                null,
                !0,
                this.model(),
                'Change Text',
              ),
            ),
            this.bindControl(
              new l(
                d,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Text Background',
                this._linetool.properties().backgroundTransparency,
              ),
            ),
            this.bindControl(
              new s(
                p,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Text Background Fill',
              ),
            ),
            this.bindControl(
              new s(
                h,
                this._linetool.properties().drawBorder,
                !0,
                this.model(),
                'Change Text Border',
              ),
            ),
            this.bindControl(
              new l(
                t,
                this._linetool.properties().borderColor,
                !0,
                this.model(),
                'Change Text Border Color',
              ),
            ),
            this.bindControl(
              new s(
                c,
                this._linetool.properties().wordWrap,
                !0,
                this.model(),
                'Change Text Wrap',
              ),
            ),
            this.bindControl(
              new s(
                b,
                this._linetool.properties().bold,
                !0,
                this.model(),
                'Change Text Font Bold',
              ),
            ),
            this.bindControl(
              new s(
                u,
                this._linetool.properties().italic,
                !0,
                this.model(),
                'Change Text Font Italic',
              ),
            );
          var C = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            ),
            y = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            ),
            g = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            );
          (this._table = C.add(g).add(y)),
            $(document.createElement('tr'))
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(e),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(o),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(i),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(b),
              )
              .append($(document.createElement('td')).append(u))
              .appendTo(C),
            $(document.createElement('tr'))
              .append(
                $(document.createElement('td')).attr({ colspan: 5 }).append(n),
              )
              .appendTo(C);
          var w = this.addLabeledRow(y, $.t('Text Wrap'), c);
          $('<td>').append(c).prependTo(w);
          w = this.addLabeledRow(g, $.t('Background'), p);
          $('<td>').append(p).prependTo(w), $('<td>').append(d).appendTo(w);
          w = this.addLabeledRow(g, $.t('Border'), h);
          $('<td>').append(h).prependTo(w),
            $('<td>').append(t).appendTo(w),
            this.loadData(),
            setTimeout(function () {
              n.select(), n.focus();
            }, 20);
        }),
        (d.prototype.widget = function () {
          return this._table;
        }),
        (d.prototype.dialogPosition = function (e, t) {
          var i = 0,
            o = this._linetool,
            n = o._model.paneForSource(o),
            a = this._model._chartWidget;
          $.each(a.paneWidgets(), function (e, t) {
            if (t._state === n)
              return (i = $(t.canvasElement()).offset().top), !1;
          }),
            e || (e = {});
          var r = e.left,
            l = e.top,
            s = (this._linetool.paneViews() || [])[0];
          if (s) var d = s._floatPoints[0];
          d && ((r = d.x), (l = d.y + i));
          var p = $(t).outerHeight(),
            h = $(window).height(),
            c = o.properties().fontsize.value();
          return {
            top: (l = l + p + c + 5 <= h ? l + c + 5 : l - p - 5),
            left: r,
          };
        }),
        (e.exports = d);
    },
    e3Xi: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.SimpleStringBinder,
        r = n.ColorBinding,
        l = n.SimpleComboBinder;
      function s(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(s, o),
        (s.prototype.prepareLayout = function () {
          this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          ).css({ width: '100%' });
          var e = $("<input type='text'>").css({ width: '100%' }),
            t = $('<div class="property-page-fullwidth-wrapper">').append(e),
            i = this.createColorPicker(),
            o = this.createFontEditor(),
            n = $('<tr>').appendTo(this._table);
          $('<td>').css({ width: '0' }).html($.t('Text')).appendTo(n),
            $('<td colspan="2">').append(t).appendTo(n),
            (n = this.addLabeledRow(this._table, $.t('Text Font')))
              .children()
              .css({ whiteSpace: 'nowrap' }),
            $('<td>').append(i).appendTo(n).css({ width: '0' }),
            $('<td>').append(o).appendTo(n),
            this.bindControl(
              new r(
                i,
                this._linetool.properties().color,
                !0,
                this.model(),
                'Change Arrow Mark Text Color',
              ),
            ),
            this.bindControl(
              new a(
                e,
                this._linetool.properties().text,
                null,
                !0,
                this.model(),
                'Change Arrow Mark Text',
              ),
            ),
            this.bindControl(
              new l(
                o,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Arrow Mark Font',
              ),
            ),
            this.loadData(),
            setTimeout(function () {
              e.select(), e.focus();
            }, 20);
        }),
        (s.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = s);
    },
    ePt6: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('n3Kh'),
        a = i('DxCR'),
        r = a.BooleanBinder,
        l = a.SimpleComboBinder,
        s = a.SliderBinder,
        d = a.ColorBinding,
        p = i('/4PT').createLineStyleEditor;
      function h(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      function c(e, t, i) {
        n.call(this, e, t, i);
      }
      inherit(h, o),
        (h.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2');
          var e = this.createLineWidthEditor(),
            t = p(),
            i = this.createColorPicker(),
            o = this.addLabeledRow(this._table, 'Line');
          $('<td>').prependTo(o),
            $('<td>').append(i).appendTo(o),
            $('<td>').append(e).appendTo(o),
            $('<td>').append(t.render()).appendTo(o);
          var n = $("<input type='checkbox' class='visibility-switch'>");
          o = $('<tr>').appendTo(this._table);
          $('<td>').append(n).prependTo(o),
            this.createLabeledCell(2, window.t('Show Time'), n).appendTo(o),
            this.bindControl(
              new r(
                n,
                this._linetool.properties().showTime,
                !0,
                this.model(),
                'Change Vert Line Time Visibility',
              ),
            ),
            this.bindControl(
              new d(
                i,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Vert Line Color',
              ),
            ),
            this.bindControl(
              new l(
                t,
                this._linetool.properties().linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Vert Line Style',
              ),
            ),
            this.bindControl(
              new s(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Vert Line Width',
              ),
            ),
            this.loadData();
        }),
        (h.prototype.widget = function () {
          return this._table;
        }),
        inherit(c, n),
        (c.prototype.prepareLayout = function () {
          if (
            ((this._table = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            )),
            this._linetool.points()[0])
          ) {
            var e = $('<input type="text" class="ticker">'),
              t = $('<tr>').appendTo(this._table);
            $('<td>' + $.t('Bar #') + '</td>').appendTo(t),
              $('<td>').append(e).appendTo(t);
            var i = this._linetool.properties().points[0];
            this.bindBarIndex(
              i.bar,
              e,
              this.model(),
              'Change ' + this._linetool + ' point bar index',
            ),
              this.loadData();
          }
        }),
        (t.LineToolVertLineStylesPropertyPage = h),
        (t.LineToolVertLineInputsPropertyPage = c);
    },
    'g+Cd': function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.BooleanBinder,
        r = n.ColorBinding,
        l = n.SliderBinder;
      function s(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(s, o),
        (s.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2');
          var e = this.createLineWidthEditor(),
            t = this.createColorPicker();
          (n = this.addLabeledRow(this._table, 'Border')).prepend('<td>'),
            $('<td>').append(t).appendTo(n),
            $('<td>').append(e).appendTo(n);
          var i = $('<input type="checkbox" class="visibility-switch">'),
            o = this.createColorPicker(),
            n = this.addLabeledRow(this._table, 'Background', i);
          $('<td>').append(i).prependTo(n),
            $('<td>').append(o).appendTo(n),
            this.bindControl(
              new a(
                i,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Arc Filling',
              ),
            ),
            this.bindControl(
              new r(
                t,
                this._linetool.properties().color,
                !0,
                this.model(),
                'Change Arc Line Color',
              ),
            ),
            this.bindControl(
              new r(
                o,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Arc Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new l(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Arc Border Width',
              ),
            ),
            this.loadData();
        }),
        (s.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = s);
    },
    jAh7: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'OverlapManager', function () {
          return a;
        }),
        i.d(t, 'getRootOverlapManager', function () {
          return l;
        });
      var o = i('Eyy1'),
        n = (function () {
          function e() {
            this._storage = [];
          }
          return (
            (e.prototype.add = function (e) {
              this._storage.push(e);
            }),
            (e.prototype.remove = function (e) {
              this._storage = this._storage.filter(function (t) {
                return e !== t;
              });
            }),
            (e.prototype.has = function (e) {
              return this._storage.includes(e);
            }),
            (e.prototype.getItems = function () {
              return this._storage;
            }),
            e
          );
        })(),
        a = (function () {
          function e(e) {
            void 0 === e && (e = document),
              (this._storage = new n()),
              (this._windows = new Map()),
              (this._index = 0),
              (this._document = e),
              (this._container = e.createDocumentFragment());
          }
          return (
            (e.prototype.setContainer = function (e) {
              var t = this._container,
                i = null === e ? this._document.createDocumentFragment() : e;
              !(function (e, t) {
                Array.from(e.childNodes).forEach(function (e) {
                  e.nodeType === Node.ELEMENT_NODE && t.appendChild(e);
                });
              })(t, i),
                (this._container = i);
            }),
            (e.prototype.registerWindow = function (e) {
              this._storage.has(e) || this._storage.add(e);
            }),
            (e.prototype.ensureWindow = function (e, t) {
              void 0 === t && (t = { position: 'fixed', direction: 'normal' });
              var i = this._windows.get(e);
              if (void 0 !== i) return i;
              this.registerWindow(e);
              var o = this._document.createElement('div');
              if (
                ((o.style.position = t.position),
                (o.style.zIndex = this._index.toString()),
                (o.dataset.id = e),
                void 0 !== t.index)
              ) {
                var n = this._container.childNodes.length;
                if (t.index >= n) this._container.appendChild(o);
                else if (t.index <= 0)
                  this._container.insertBefore(o, this._container.firstChild);
                else {
                  var a = this._container.childNodes[t.index];
                  this._container.insertBefore(o, a);
                }
              } else
                'reverse' === t.direction
                  ? this._container.insertBefore(o, this._container.firstChild)
                  : this._container.appendChild(o);
              return this._windows.set(e, o), ++this._index, o;
            }),
            (e.prototype.unregisterWindow = function (e) {
              this._storage.remove(e);
              var t = this._windows.get(e);
              void 0 !== t &&
                (null !== t.parentElement && t.parentElement.removeChild(t),
                this._windows.delete(e));
            }),
            (e.prototype.getZindex = function (e) {
              var t = this.ensureWindow(e);
              return parseInt(t.style.zIndex || '0');
            }),
            (e.prototype.moveToTop = function (e) {
              this.getZindex(e) !== this._index &&
                (this.ensureWindow(e).style.zIndex = (++this
                  ._index).toString());
            }),
            (e.prototype.removeWindow = function (e) {
              this.unregisterWindow(e);
            }),
            e
          );
        })(),
        r = new WeakMap();
      function l(e) {
        void 0 === e && (e = document);
        var t = e.getElementById('overlap-manager-root');
        if (null !== t) return Object(o.ensureDefined)(r.get(t));
        var i = new a(e),
          n = (function (e) {
            var t = e.createElement('div');
            return (
              (t.style.position = 'absolute'),
              (t.style.zIndex = (150).toString()),
              (t.style.top = '0px'),
              (t.style.left = '0px'),
              (t.id = 'overlap-manager-root'),
              t
            );
          })(e);
        return r.set(n, i), i.setContainer(n), e.body.appendChild(n), i;
      }
    },
    k7QS: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.FloatBinder,
        r = n.BooleanBinder,
        l = n.SliderBinder,
        s = n.ColorBinding,
        d = n.SimpleComboBinder,
        p = i('jNEI').addColorPicker,
        h = i('/4PT').createLineStyleEditor,
        c = i('y/RR').createTransparencyEditor;
      function b(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(b, o),
        (b.prototype.addLevelEditor = function (e, t) {
          var i = t || $('<tr>').appendTo(this._table),
            o = $('<td>');
          o.appendTo(i);
          var n = $("<input type='checkbox' class='visibility-switch'>");
          n.appendTo(o), t && n.css('margin-left', '15px');
          var l = $('<td>');
          l.appendTo(i);
          var d = $("<input type='text'>");
          d.appendTo(l),
            d.css('width', '70px'),
            this.bindControl(
              new a(
                d,
                e.coeff,
                !1,
                this.model(),
                'Change Pitchfork Line Coeff',
              ),
            );
          var h = $("<td class='colorpicker-cell'>");
          h.appendTo(i);
          var c = p(h);
          return (
            this.bindControl(
              new r(
                n,
                e.visible,
                !0,
                this.model(),
                'Change Fib Retracement Line Visibility',
              ),
            ),
            this.bindControl(
              new s(
                c,
                e.color,
                !0,
                this.model(),
                'Change Fib Retracement Line Color',
                0,
              ),
            ),
            i
          );
        }),
        (b.prototype.prepareLayout = function () {
          this._div = $(document.createElement('div')).addClass(
            'property-page',
          );
          var e = this._linetool.properties().trendline,
            t = $('<table>').appendTo(this._div).css('padding-bottom', '3px');
          if (e) {
            var i = $('<tr>').appendTo(t),
              o = $("<input type='checkbox' class='visibility-switch'>");
            $('<td>').append(o).appendTo(i),
              $('<td>').append($.t('Trend Line')).appendTo(i),
              this.bindControl(
                new r(
                  o,
                  e.visible,
                  !0,
                  this.model(),
                  'Change Fib Retracement Line Visibility',
                ),
              );
            var n = $("<td class='colorpicker-cell'>").appendTo(i),
              a = p(n);
            this.bindControl(
              new s(
                a,
                e.color,
                !0,
                this.model(),
                'Change Fib Retracement Line Color',
                0,
              ),
            );
            var b = $('<td>').appendTo(i);
            (g = this.createLineWidthEditor()).appendTo(b),
              this.bindControl(
                new l(
                  g,
                  e.linewidth,
                  parseInt,
                  this.model(),
                  'Change Fib Retracement Line Width',
                ),
              );
            var u = $('<td>').appendTo(i);
            (w = h()).render().appendTo(u),
              this.bindControl(
                new d(
                  w,
                  e.linestyle,
                  parseInt,
                  !0,
                  this.model(),
                  'Change Fib Retracement Line Style',
                ),
              );
          }
          var C = this._linetool.properties().levelsStyle,
            y = $('<tr>').appendTo(t);
          $('<td>').appendTo(y),
            $('<td>' + $.t('Levels Line') + '</td>').appendTo(y),
            $('<td>').appendTo(y);
          var g;
          b = $('<td>').appendTo(y);
          (g = this.createLineWidthEditor()).appendTo(b),
            this.bindControl(
              new l(
                g,
                C.linewidth,
                parseInt,
                this.model(),
                'Change Fib Retracement Line Width',
              ),
            );
          var w;
          u = $('<td>').appendTo(y);
          (w = h()).render().appendTo(u),
            this.bindControl(
              new d(
                w,
                C.linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Fib Retracement Line Style',
              ),
            ),
            (this._table = $(document.createElement('table')).appendTo(
              this._div,
            )),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2');
          for (var T = {}, v = 0; v < 24; v++) {
            var _ = v % 8,
              m = ((y = T[_]), 'level' + (v + 1));
            T[_] = this.addLevelEditor(this._linetool.properties()[m], y);
          }
          this.addOneColorPropertyWidget(this._table);
          var f,
            L,
            S,
            k,
            x = $('<table cellpadding=0 cellspacing=0>').appendTo(this._div),
            B = $('<tr>').appendTo(x);
          if (this._linetool.properties().extendLines) {
            f = $("<input type='checkbox' class='visibility-switch'>");
            var P = $('<label>').append(f).append($.t('Extend Lines'));
            $('<td>').append(P).appendTo(B);
          }
          if (this._linetool.properties().extendLeft) {
            L = $("<input type='checkbox' class='visibility-switch'>");
            P = $('<label>').append(L).append($.t('Extend Left'));
            $('<td>').append(P).appendTo(B);
          }
          if (this._linetool.properties().extendRight) {
            S = $("<input type='checkbox' class='visibility-switch'>");
            P = $('<label>').append(S).append($.t('Extend Right'));
            $('<td>').append(P).appendTo(B);
          }
          if (this._linetool.properties().reverse) {
            k = $("<input type='checkbox' class='visibility-switch'>");
            P = $('<label>').append(k).append($.t('Reverse'));
            $('<td>').append(P).appendTo(B);
          }
          var R = $('<tr>').appendTo(x),
            E = $("<input type='checkbox' class='visibility-switch'>");
          P = $('<label>').append(E).append($.t('Levels'));
          $('<td>').append(P).appendTo(R);
          var F = $("<input type='checkbox' class='visibility-switch'>");
          P = $('<label>').append(F).append($.t('Prices'));
          $('<td>').append(P).appendTo(R);
          var D = $("<input type='checkbox' class='visibility-switch'>");
          P = $('<label>').append(D).append($.t('Percents'));
          $('<td>').append(P).appendTo(R);
          var I = $("<table cellspacing='0' cellpadding='0'>").appendTo(
              this._div,
            ),
            W = $(
              "<select><option value='left'>" +
                $.t('left') +
                "</option><option value='center'>" +
                $.t('center') +
                "</option><option value='right'>" +
                $.t('right') +
                '</option></select>',
            ),
            A = $(
              "<select><option value='bottom'>" +
                $.t('top') +
                "</option><option value='middle'>" +
                $.t('middle') +
                "</option><option value='top'>" +
                $.t('bottom') +
                '</option></select>',
            );
          (y = $('<tr>'))
            .append('<td>' + $.t('Labels') + '</td>')
            .append(W)
            .append('<td>&nbsp</td>')
            .append(A),
            y.appendTo(I);
          var V = $("<table cellspacing='0' cellpadding='0'>").appendTo(
              this._div,
            ),
            O =
              ((y = $('<tr>').appendTo(V)),
              $("<input type='checkbox' class='visibility-switch'>"));
          $('<td>').append(O).appendTo(y),
            this.createLabeledCell($.t('Background'), O).appendTo(y);
          var z = c();
          if (
            ($('<td>').append(z).appendTo(y),
            this._linetool.properties().fibLevelsBasedOnLogScale)
          ) {
            y = $('<tr>').appendTo(V);
            (this._fibLevelsBasedOnLogScaleEditor = $(
              "<input type='checkbox' class='visibility-switch'>",
            )),
              (this._fibLevelsBasedOnLogScaleLabel = $('<label>')
                .append(this._fibLevelsBasedOnLogScaleEditor)
                .append($.t('Fib levels based on log scale'))),
              $('<td colspan="3">')
                .append(this._fibLevelsBasedOnLogScaleLabel)
                .appendTo(y),
              this._linetool
                .priceScale()
                .modeChanged()
                .subscribe(this, this._onPriceScaleModeChanged),
              this._onPriceScaleModeChanged(
                void 0,
                this._linetool.priceScale().mode(),
              );
          }
          this.bindControl(
            new r(
              F,
              this._linetool.properties().showPrices,
              !0,
              this.model(),
              'Change Gann Fan Prices Visibility',
            ),
          ),
            this.bindControl(
              new r(
                E,
                this._linetool.properties().showCoeffs,
                !0,
                this.model(),
                'Change Gann Fan Levels Visibility',
              ),
            ),
            this.bindControl(
              new r(
                O,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Fib Retracement Background Visibility',
              ),
            ),
            this.bindControl(
              new l(
                z,
                this._linetool.properties().transparency,
                !0,
                this.model(),
                'Change Fib Retracement Background Transparency',
              ),
            ),
            this._linetool.properties().extendLines &&
              this.bindControl(
                new r(
                  f,
                  this._linetool.properties().extendLines,
                  !0,
                  this.model(),
                  'Change Fib Retracement Extend Lines',
                ),
              ),
            this._linetool.properties().extendLeft &&
              this.bindControl(
                new r(
                  L,
                  this._linetool.properties().extendLeft,
                  !0,
                  this.model(),
                  'Change Fib Retracement Extend Lines',
                ),
              ),
            this._linetool.properties().extendRight &&
              this.bindControl(
                new r(
                  S,
                  this._linetool.properties().extendRight,
                  !0,
                  this.model(),
                  'Change Fib Retracement Extend Lines',
                ),
              ),
            this._linetool.properties().reverse &&
              this.bindControl(
                new r(
                  k,
                  this._linetool.properties().reverse,
                  !0,
                  this.model(),
                  'Change Fib Retracement Reverse',
                ),
              ),
            this.bindControl(
              new d(
                W,
                this._linetool.properties().horzLabelsAlign,
                null,
                !0,
                this.model(),
                'Change Fib Labels Horizontal Alignment',
              ),
            ),
            this.bindControl(
              new d(
                A,
                this._linetool.properties().vertLabelsAlign,
                null,
                !0,
                this.model(),
                'Change Fib Labels Vertical Alignment',
              ),
            ),
            this.bindControl(
              new r(
                D,
                this._linetool.properties().coeffsAsPercents,
                !0,
                this.model(),
                'Change Fib Retracement Coeffs As Percents',
              ),
            ),
            this._linetool.properties().fibLevelsBasedOnLogScale &&
              this.bindControl(
                new r(
                  this._fibLevelsBasedOnLogScaleEditor,
                  this._linetool.properties().fibLevelsBasedOnLogScale,
                  !0,
                  this.model(),
                  'Change Fib levels based on log scale',
                ),
              ),
            this.loadData();
        }),
        (b.prototype.widget = function () {
          return this._div;
        }),
        (b.prototype.destroy = function () {
          o.prototype.destroy.call(this),
            this._linetool.priceScale().modeChanged().unsubscribeAll(this);
        }),
        (b.prototype._onPriceScaleModeChanged = function (e, t) {
          var i = !t.log;
          this._fibLevelsBasedOnLogScaleEditor.attr('disabled', i),
            this._fibLevelsBasedOnLogScaleLabel.toggleClass('disabled', i);
        }),
        (e.exports = b);
    },
    kNI9: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.BooleanBinder,
        r = n.ColorBinding,
        l = n.SliderBinder,
        s = n.SimpleComboBinder;
      function d(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(d, o),
        (d.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2');
          var e = this.createLineWidthEditor(),
            t = this.createColorPicker(),
            i = this.createColorPicker(),
            o = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>',
            ),
            n = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>',
            ),
            d = this.createFontSizeEditor(),
            p = this.createFontEditor();
          (b = this.addLabeledRow(this._table, 'Border')).prepend('<td>'),
            $('<td>').append(t).appendTo(b),
            $('<td>').append(e).appendTo(b);
          var h = $('<input type="checkbox" class="visibility-switch">'),
            c = this.createColorPicker(),
            b =
              ((p = this.createFontEditor()),
              this.addLabeledRow(this._table, 'Background', h));
          $('<td>').append(h).prependTo(b),
            $('<td>').append(c).appendTo(b),
            this.bindControl(
              new a(
                h,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Pattern Filling',
              ),
            ),
            this.bindControl(
              new r(
                t,
                this._linetool.properties().color,
                !0,
                this.model(),
                'Change Pattern Line Color',
              ),
            ),
            this.bindControl(
              new r(
                i,
                this._linetool.properties().textcolor,
                !0,
                this.model(),
                'Change Pattern Text Color',
              ),
            ),
            this.bindControl(
              new r(
                c,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Pattern Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new l(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Pattern Border Width',
              ),
            ),
            this.bindControl(
              new s(
                d,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new s(
                p,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Text Font',
              ),
            ),
            this.bindControl(
              new a(
                o,
                this._linetool.properties().bold,
                !0,
                this.model(),
                'Change Text Font Bold',
              ),
            ),
            this.bindControl(
              new a(
                n,
                this._linetool.properties().italic,
                !0,
                this.model(),
                'Change Text Font Italic',
              ),
            );
          var u = $(
            '<table class="property-page" cellspacing="0" cellpadding="2"><tr>',
          )
            .append(
              $(document.createElement('td')).attr({ width: 1 }).append(i),
            )
            .append(
              $(document.createElement('td')).attr({ width: 1 }).append(p),
            )
            .append(
              $(document.createElement('td')).attr({ width: 1 }).append(d),
            )
            .append(
              $(document.createElement('td'))
                .css('vertical-align', 'top')
                .attr({ width: 1 })
                .append(o),
            )
            .append(
              $(document.createElement('td'))
                .css('vertical-align', 'top')
                .append(n),
            )
            .append($('</tr></table>'));
          b = this.addLabeledRow(this._table, '');
          $('<td colspan="5">').append(u).appendTo(b), this.loadData();
        }),
        (d.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = d);
    },
    kr49: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.BooleanBinder,
        r = n.ColorBinding,
        l = n.SliderBinder,
        s = n.SimpleComboBinder;
      function d(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(d, o),
        (d.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2');
          var e = this.createLineWidthEditor(),
            t = this.createColorPicker(),
            i = this.createColorPicker(),
            o = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>',
            ),
            n = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>',
            ),
            d = this.createFontSizeEditor(),
            p = this.createFontEditor();
          (b = this.addLabeledRow(this._table, 'Border')).prepend('<td>'),
            $('<td>').append(t).appendTo(b),
            $('<td>').append(e).appendTo(b);
          var h = $('<input type="checkbox" class="visibility-switch">'),
            c = this.createColorPicker(),
            b =
              ((p = this.createFontEditor()),
              this.addLabeledRow(this._table, 'Background', h));
          $('<td>').append(h).prependTo(b),
            $('<td>').append(c).appendTo(b),
            this.bindControl(
              new a(
                h,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Pattern Filling',
              ),
            ),
            this.bindControl(
              new r(
                t,
                this._linetool.properties().color,
                !0,
                this.model(),
                'Change Pattern Line Color',
              ),
            ),
            this.bindControl(
              new r(
                i,
                this._linetool.properties().textcolor,
                !0,
                this.model(),
                'Change Pattern Text Color',
              ),
            ),
            this.bindControl(
              new r(
                c,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Pattern Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new l(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Pattern Border Width',
              ),
            ),
            this.bindControl(
              new s(
                d,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new s(
                p,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Text Font',
              ),
            ),
            this.bindControl(
              new a(
                o,
                this._linetool.properties().bold,
                !0,
                this.model(),
                'Change Text Font Bold',
              ),
            ),
            this.bindControl(
              new a(
                n,
                this._linetool.properties().italic,
                !0,
                this.model(),
                'Change Text Font Italic',
              ),
            );
          var u = $(
            '<table class="property-page" cellspacing="0" cellpadding="2"><tr>',
          )
            .append(
              $(document.createElement('td')).attr({ width: 1 }).append(i),
            )
            .append(
              $(document.createElement('td')).attr({ width: 1 }).append(p),
            )
            .append(
              $(document.createElement('td')).attr({ width: 1 }).append(d),
            )
            .append(
              $(document.createElement('td'))
                .css('vertical-align', 'top')
                .attr({ width: 1 })
                .append(o),
            )
            .append(
              $(document.createElement('td'))
                .css('vertical-align', 'top')
                .append(n),
            )
            .append($('</tr></table>'));
          b = this.addLabeledRow(this._table, '');
          $('<td colspan="5">').append(u).appendTo(b), this.loadData();
        }),
        (d.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = d);
    },
    lNYe: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.SimpleComboBinder,
        r = n.ColorBinding,
        l = n.BooleanBinder,
        s = n.SliderBinder,
        d = i('/4PT').createLineStyleEditor,
        p = i('bKFv').StatsPosition;
      function h(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(h, o),
        (h.prototype.prepareLayout = function () {
          this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          );
          var e = $('<tbody>').appendTo(this._table),
            t = this.createLineWidthEditor(),
            i = d(),
            o = this.createColorPicker(),
            n = this.addLabeledRow(e, $.t('Line'));
          $('<td>').append(o).appendTo(n),
            $('<td>').append(t).appendTo(n),
            $('<td colspan="3">').append(i.render()).appendTo(n);
          var h = $('<tbody>').appendTo(this._table),
            c = $('<label>' + $.t('Extend') + ' </label>').css({
              'margin-left': '8px',
            }),
            b = $('<input type="checkbox">').appendTo(c),
            u = $('<label>' + $.t('Extend') + ' </label>').css({
              'margin-left': '8px',
            }),
            C = $('<input type="checkbox">').appendTo(u),
            y = $(
              "<select><option value='0'>" +
                $.t('Normal') +
                "</option><option value='1'>" +
                $.t('Arrow') +
                '</option></select>',
            ),
            g = $(
              "<select><option value='0'>" +
                $.t('Normal') +
                "</option><option value='1'>" +
                $.t('Arrow') +
                '</option></select>',
            );
          n = this.addLabeledRow(h, $.t('Left End'));
          $('<td colspan="3">').appendTo(n).append(y).append(c);
          n = this.addLabeledRow(h, $.t('Right End'));
          $('<td colspan="3">').appendTo(n).append(g).append(u);
          var w = $(
              "<select><option value='" +
                p.Left +
                "'>" +
                $.t('Left') +
                "</option><option value='" +
                p.Center +
                "'>" +
                $.t('Center') +
                "</option><option value='" +
                p.Right +
                "'>" +
                $.t('Right') +
                '</option></select>',
            ),
            T = this.addLabeledRow(h, $.t('Stats Position'));
          $('<td colspan="3">').appendTo(T).append(w);
          n = this.addLabeledRow(h, $.t('Stats Text Color'));
          var v = this.createColorPicker();
          $('<td>').append(v).appendTo(n),
            this.bindControl(
              new r(
                v,
                this._linetool.properties().textcolor,
                !0,
                this.model(),
                'Change Text Color',
              ),
            );
          var _ = $('<input type="checkbox">'),
            m = $('<input type="checkbox">'),
            f = $('<input type="checkbox">'),
            L = $('<input type="checkbox">'),
            S = $('<input type="checkbox">'),
            k = $('<input type="checkbox">'),
            x = $('<input type="checkbox">');
          n = this.addLabeledRow(h, $.t('Show Price Range'));
          $('<td colspan="3">').appendTo(n).append(_);
          n = this.addLabeledRow(h, $.t('Show Bars Range'));
          $('<td colspan="3">').appendTo(n).append(m);
          n = this.addLabeledRow(h, $.t('Show Date/Time Range'));
          $('<td colspan="3">').appendTo(n).append(f);
          n = this.addLabeledRow(h, $.t('Show Distance'));
          $('<td colspan="3">').appendTo(n).append(L);
          n = this.addLabeledRow(h, $.t('Show Angle'));
          $('<td colspan="3">').appendTo(n).append(S);
          n = this.addLabeledRow(h, $.t('Always Show Stats'));
          $('<td colspan="3">').appendTo(n).append(k);
          n = this.addLabeledRow(h, $.t('Show Middle Point'));
          $('<td colspan="3">').appendTo(n).append(x),
            this.bindControl(
              new l(
                b,
                this._linetool.properties().extendLeft,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Extending Left',
              ),
            ),
            this.bindControl(
              new l(
                C,
                this._linetool.properties().extendRight,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Extending Right',
              ),
            ),
            this.bindControl(
              new r(
                o,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Color',
              ),
            ),
            this.bindControl(
              new a(
                i,
                this._linetool.properties().linestyle,
                parseInt,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Style',
              ),
            ),
            this.bindControl(
              new s(
                t,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Width',
              ),
            ),
            this.bindControl(
              new a(
                y,
                this._linetool.properties().leftEnd,
                parseInt,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Left End',
              ),
            ),
            this.bindControl(
              new a(
                g,
                this._linetool.properties().rightEnd,
                parseInt,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Right End',
              ),
            ),
            this.bindControl(
              new l(
                _,
                this._linetool.properties().showPriceRange,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Show Price Range',
              ),
            ),
            this.bindControl(
              new l(
                m,
                this._linetool.properties().showBarsRange,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Show Bars Range',
              ),
            ),
            this.bindControl(
              new l(
                f,
                this._linetool.properties().showDateTimeRange,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Show Date/Time Range',
              ),
            ),
            this.bindControl(
              new l(
                L,
                this._linetool.properties().showDistance,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Show Distance',
              ),
            ),
            this.bindControl(
              new l(
                S,
                this._linetool.properties().showAngle,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Show Angle',
              ),
            ),
            this.bindControl(
              new l(
                k,
                this._linetool.properties().alwaysShowStats,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Always Show Stats',
              ),
            ),
            this.bindControl(
              new l(
                x,
                this._linetool.properties().showMiddlePoint,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Show Middle Point',
              ),
            ),
            this.bindControl(
              new a(
                w,
                this._linetool.properties().statsPosition,
                parseInt,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Stats Position',
              ),
            ),
            this.loadData();
        }),
        (h.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = h);
    },
    mBo9: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'createVisibilityEditor', function () {
          return o;
        });
      i('P5fv');
      function o() {
        return $('<input type="checkbox" class="visibility-switch"/>');
      }
    },
    n3Kh: function (e, t, i) {
      'use strict';
      var o = i('DxCR'),
        n = o.PropertyPage,
        a = o.GreateTransformer,
        r = o.LessTransformer,
        l = o.ToIntTransformer,
        s = o.SimpleStringBinder;
      function d(e, t, i) {
        n.call(this, e, t), (this._linetool = i), this.prepareLayout();
      }
      i('PVgW'),
        inherit(d, n),
        (d.BarIndexPastLimit = -5e4),
        (d.BarIndexFutureLimit = 15e3),
        (d.prototype.bindBarIndex = function (e, t, i, o) {
          var n = [
            l(e.value()),
            a(d.BarIndexPastLimit),
            r(d.BarIndexFutureLimit),
          ];
          this.bindControl(this.createStringBinder(t, e, n, !0, i, o));
        }),
        (d.prototype.createPriceEditor = function (e) {
          var t = this._linetool,
            i = t.ownerSource().formatter(),
            o = function (e) {
              var t = i.parse(e);
              if (t.res) return t.value;
            },
            n = $("<input type='text'>");
          if (
            (n.TVTicker({
              step: i._minMove / i._priceScale || 1,
              formatter: function (e) {
                return i.format(e);
              },
              parser: o,
            }),
            e)
          ) {
            var a = [
                function (t) {
                  var i = o(t);
                  return void 0 === i ? e.value() : i;
                },
              ],
              r = 'Change ' + t.title() + ' point price',
              l = this.createStringBinder(n, e, a, !1, this.model(), r);
            l.addFormatter(function (e) {
              return i.format(e);
            }),
              this.bindControl(l);
          }
          return n;
        }),
        (d.prototype._createPointRow = function (e, t, i) {
          var o = $('<tr>'),
            n = $('<td>');
          n.html($.t('Price') + i), n.appendTo(o);
          var a = $('<td>');
          a.appendTo(o), this.createPriceEditor(t.price).appendTo(a);
          var r = $('<td>');
          r.html($.t('Bar #')), r.appendTo(o);
          var l = $('<td>');
          l.appendTo(o);
          var s = $("<input type='text'>");
          return (
            s.appendTo(l),
            s.addClass('ticker'),
            this.bindBarIndex(
              t.bar,
              s,
              this.model(),
              'Change ' + this._linetool.title() + ' point bar index',
            ),
            o
          );
        }),
        (d.prototype.prepareLayoutForTable = function (e) {
          for (
            var t = this._linetool.points(), i = t.length, o = 0;
            o < t.length;
            o++
          ) {
            var n = t[o],
              a = this._linetool.properties().points[o];
            if (a) {
              var r = o || i > 1 ? ' ' + (o + 1) : '';
              this._createPointRow(n, a, r).appendTo(e);
            }
          }
        }),
        (d.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            this.prepareLayoutForTable(this._table),
            this.loadData();
        }),
        (d.prototype.widget = function () {
          return this._table;
        }),
        (d.prototype.createStringBinder = function (e, t, i, o, n, a) {
          return new s(e, t, i, o, n, a);
        }),
        (e.exports = d);
    },
    nzyg: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('n3Kh'),
        a = i('DxCR'),
        r = a.BooleanBinder,
        l = a.SimpleComboBinder,
        s = a.SliderBinder,
        d = a.ColorBinding,
        p = i('/4PT').createLineStyleEditor;
      function h(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      function c(e, t, i) {
        n.call(this, e, t, i);
      }
      inherit(h, o),
        (h.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2');
          var e = this.createLineWidthEditor(),
            t = p(),
            i = this.createColorPicker(),
            o = this.addLabeledRow(this._table, 'Line');
          $('<td>').prependTo(o),
            $('<td>').append(i).appendTo(o),
            $('<td>').append(e).appendTo(o),
            $('<td>').append(t.render()).appendTo(o);
          var n = $("<input type='checkbox' class='visibility-switch'>"),
            a = $('<tr>').appendTo(this._table);
          $('<td>').append(n).prependTo(a),
            this.createLabeledCell(2, window.t('Show Price'), n).appendTo(a);
          var h = $("<input type='checkbox' class='visibility-switch'>"),
            c = $('<tr>').appendTo(this._table);
          $('<td>').append(h).prependTo(c),
            this.createLabeledCell(2, window.t('Show Time'), h).appendTo(c),
            this.bindControl(
              new r(
                h,
                this._linetool.properties().showTime,
                !0,
                this.model(),
                'Change Cross Line Time Visibility',
              ),
            ),
            this.bindControl(
              new r(
                n,
                this._linetool.properties().showPrice,
                !0,
                this.model(),
                'Change Cross Line Price Visibility',
              ),
            ),
            this.bindControl(
              new d(
                i,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Cross Line Color',
              ),
            ),
            this.bindControl(
              new l(
                t,
                this._linetool.properties().linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Cross Line Style',
              ),
            ),
            this.bindControl(
              new s(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Cross Line Width',
              ),
            ),
            this.loadData();
        }),
        (h.prototype.widget = function () {
          return this._table;
        }),
        inherit(c, n),
        (c.prototype.prepareLayout = function () {
          if (
            ((this._table = $(
              '<table class="property-page" cellspacing="0" cellpadding="2" width="100%">',
            )),
            this._linetool.points()[0])
          ) {
            var e = $('<input type="text" class="ticker">'),
              t = $('<tr>').appendTo(this._table);
            $('<td>' + $.t('Bar #') + '</td>').appendTo(t),
              $('<td>').append(e).appendTo(t);
            var i = this._linetool.properties().points[0];
            this.bindBarIndex(
              i.bar,
              e,
              this.model(),
              'Change ' + this._linetool + ' point bar index',
            );
            var o = this.createPriceEditor(i.price);
            $('<td>' + $.t('Price') + '</td>').appendTo(t),
              $('<td>').append(o).appendTo(t),
              this.loadData();
          }
        }),
        (t.LineToolCrossLineStylesPropertyPage = h),
        (t.LineToolCrossLineInputsPropertyPage = c);
    },
    o4FW: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.FloatBinder,
        r = n.SimpleComboBinder,
        l = n.BooleanBinder,
        s = n.ColorBinding,
        d = n.SliderBinder,
        p = i('jNEI').addColorPicker,
        h = i('/4PT').createLineStyleEditor,
        c = i('y/RR').createTransparencyEditor;
      function b(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(b, o),
        (b.prototype.addLevelEditor = function (e, t, i) {
          var o = $('<tr>');
          o.appendTo(this._table);
          var n = $('<td>');
          n.appendTo(o);
          var c = $("<input type='checkbox' class='visibility-switch'>");
          if ((c.appendTo(n), e)) {
            var b = $('<td>');
            b.appendTo(o);
            var u = $("<input type='text'>");
            u.appendTo(b),
              u.css('width', '70px'),
              this.bindControl(
                new a(
                  u,
                  t.coeff,
                  !1,
                  this.model(),
                  'Change Pitchfork Line Coeff',
                ),
              );
          } else this.createLabeledCell('Trend Line', c).appendTo(o);
          var C = $("<td class='colorpicker-cell'>");
          C.appendTo(o);
          var y = p(C),
            g = $('<td>');
          g.appendTo(o);
          var w = this.createLineWidthEditor();
          if ((w.appendTo(g), !e)) {
            var T = $('<td>');
            T.appendTo(o);
            var v = h();
            v.render().appendTo(T),
              this.bindControl(
                new r(
                  v,
                  t.linestyle,
                  parseInt,
                  !0,
                  this.model(),
                  'Change Fib Circle Style',
                ),
              );
          }
          this.bindControl(
            new l(
              c,
              t.visible,
              !0,
              this.model(),
              'Change Fib Circle Visibility',
            ),
          ),
            this.bindControl(
              new s(
                y,
                t.color,
                !0,
                this.model(),
                'Change Fib Circle Line Color',
                0,
              ),
            ),
            this.bindControl(
              new d(
                w,
                t.linewidth,
                !0,
                this.model(),
                'Change Fib Circle Width',
              ),
            );
        }),
        (b.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            this.addLevelEditor(
              null,
              this._linetool.properties().trendline,
              !1,
            );
          for (var e = 1; e <= 11; e++) {
            var t = 'level' + e;
            this.addLevelEditor(
              'Level ' + e,
              this._linetool.properties()[t],
              !1,
            );
          }
          this.addOneColorPropertyWidget(this._table);
          var i = $("<input type='checkbox' class='visibility-switch'>"),
            o = this.addLabeledRow(this._table, 'Levels', i);
          $('<td>').append(i).prependTo(o);
          var n = $("<input type='checkbox' class='visibility-switch'>");
          o = this.addLabeledRow(this._table, 'Coeffs As Percents', n);
          $('<td>').append(n).prependTo(o),
            this.bindControl(
              new l(
                i,
                this._linetool.properties().showCoeffs,
                !0,
                this.model(),
                'Change Fib Circle Levels Visibility',
              ),
            ),
            (o = $('<tr>')).appendTo(this._table);
          var a = $("<input type='checkbox' class='visibility-switch'>");
          $('<td>').append(a).appendTo(o),
            this.createLabeledCell('Background', a).appendTo(o);
          var r = c();
          $('<td colspan="3">').append(r).appendTo(o),
            this.bindControl(
              new l(
                a,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Pitchfork Background Visibility',
              ),
            ),
            this.bindControl(
              new d(
                r,
                this._linetool.properties().transparency,
                !0,
                this.model(),
                'Change Pitchfork Background Transparency',
              ),
            ),
            this.bindControl(
              new l(
                n,
                this._linetool.properties().coeffsAsPercents,
                !0,
                this.model(),
                'Change Fib Retracement Coeffs As Percents',
              ),
            ),
            this.loadData();
        }),
        (b.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = b);
    },
    o6hY: function (e, t, i) {
      'use strict';
      var o = i('DxCR'),
        n = o.PropertyPage,
        a = o.GreateTransformer,
        r = o.LessTransformer,
        l = o.ToIntTransformer,
        s = o.ToFloatTransformer,
        d = o.SimpleComboBinder,
        p = o.BooleanBinder,
        h = o.DisabledBinder,
        c = o.ColorBinding,
        b = o.SliderBinder,
        u = o.SimpleStringBinder,
        C = i('jNEI').addColorPicker,
        y = i('/4PT').createLineStyleEditor,
        g = i('XgUb').createShapeLocationEditor,
        w = i('SA6f').createShapeStyleEditor,
        T = i('mBo9').createVisibilityEditor,
        v = i('A3Hk').createHHistDirectionEditor,
        _ = i('a0Rg').createPlotEditor,
        m = i('zXvd').NumericFormatter,
        f = i('0YCj'),
        L = i('23IT').LineStudyPlotStyle,
        S = i('uOxu').getLogger('Chart.Study.PropertyPage'),
        k = i('PC8g').trackEvent;
      function x(e, t, i) {
        n.call(this, e, t), (this._study = i), this.prepareLayout();
      }
      function B(e, t, i) {
        n.call(this, e, t),
          (this._study = i),
          (this._property = e),
          this.prepareLayout();
      }
      inherit(x, n),
        (x.prototype.prepareLayout = function () {
          (this._table = $('<table/>')),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2');
          var e = this._study.metaInfo(),
            t = {};
          function i(e) {
            return new m().format(e);
          }
          for (var o = 0; o < e.plots.length; ++o)
            if (
              !(
                this._study.isSelfColorerPlot(o) ||
                this._study.isTextColorerPlot(o) ||
                this._study.isDataOffsetPlot(o) ||
                this._study.isOHLCColorerPlot(o) ||
                this._study.isAlertConditionPlot(o)
              )
            ) {
              var n,
                a,
                r = e.plots[o];
              if (e.styles) {
                if (e.styles[r.id]) n = e.styles[r.id].isHidden;
                else if (!this._study.isOHLCSeriesPlot(o)) continue;
                if (this._study.isOHLCSeriesPlot(o)) {
                  if (t[(a = e.plots[o].target)]) continue;
                  (n = e.ohlcPlots[a].isHidden), (t[a] = a);
                }
                if (n) continue;
              }
              if (
                this._study.isLinePlot(o) ||
                this._study.isBarColorerPlot(o) ||
                this._study.isBgColorerPlot(o)
              )
                this._prepareLayoutForPlot(o, r);
              else if (this._study.isPlotArrowsPlot(o))
                this._prepareLayoutForArrowsPlot(o, r);
              else if (this._study.isPlotCharsPlot(o))
                this._prepareLayoutForCharsPlot(o, r);
              else if (this._study.isPlotShapesPlot(o))
                this._prepareLayoutForShapesPlot(o, r);
              else if (this._study.isOHLCSeriesPlot(o)) {
                var l = { id: a, type: 'ohlc' };
                this._study.isOHLCBarsPlot(o)
                  ? this._prepareLayoutForBarsPlot(o, l)
                  : this._study.isOHLCCandlesPlot(o) &&
                    this._prepareLayoutForCandlesPlot(o, l);
              } else S.logError('Unknown plot type: ' + r.type);
            }
          var h = this._study.properties().bands;
          if (h && h.childCount() > 0)
            for (o = 0; o < h.childCount(); o++) {
              if (!(D = h[o]).isHidden || !D.isHidden.value()) {
                (O = $('<tr class="line"/>')).appendTo(this._table),
                  (j = $('<td/>')).appendTo(O),
                  (V = $(
                    "<input type='checkbox' class='visibility-switch'/>",
                  )).appendTo(j);
                var g = $.t(D.name.value(), { context: 'input' }),
                  w = this.createLabeledCell(g, V)
                    .appendTo(O)
                    .addClass('propertypage-name-label'),
                  T = $('<td/>');
                T.appendTo(O), T.addClass('colorpicker-cell');
                var v = C(T),
                  _ = $('<td/>');
                _.appendTo(O);
                var L = this.createLineWidthEditor();
                L.appendTo(_);
                var k = $('<td colspan="4">').css({ whiteSpace: 'nowrap' });
                k.appendTo(O);
                var B = y();
                B.render().appendTo(k);
                var P = $(
                  "<input class='property-page-bandwidth' type='text'/>",
                );
                P.appendTo(k);
                var R = [s(D.value.value())],
                  E = 'Change band',
                  F = new u(P, D.value, R, !1, this.model(), E);
                F.addFormatter(i),
                  this.bindControl(F),
                  this.bindControl(new p(V, D.visible, !0, this.model(), E)),
                  this.bindControl(new c(v, D.color, !0, this.model(), E)),
                  this.bindControl(
                    new d(B, D.linestyle, parseInt, !0, this.model(), E),
                  ),
                  this.bindControl(new b(L, D.linewidth, !0, this.model(), E));
              }
            }
          if (this._study.properties().bandsBackground) {
            var D = this._study.properties().bandsBackground,
              I = $.t('Background');
            E = $.t('Change band background');
            (O = this._prepareFilledAreaBackground(
              D.fillBackground,
              D.backgroundColor,
              D.transparency,
              I,
              E,
            )).appendTo(this._table);
          }
          if (this._study.properties().areaBackground) {
            (D = this._study.properties().areaBackground),
              (I = $.t('Background')),
              (E = $.t('Change area background'));
            (O = this._prepareFilledAreaBackground(
              D.fillBackground,
              D.backgroundColor,
              D.transparency,
              I,
              E,
            )).appendTo(this._table);
          }
          var W = e.filledAreas;
          if (void 0 !== W)
            for (o = 0; o < W.length; ++o) {
              var A = W[o];
              if (!A.isHidden) {
                (E = 'Change ' + I),
                  (D = this._study.properties().filledAreasStyle[A.id]),
                  (I = A.title || $.t('Background'));
                if (A.palette) {
                  var V,
                    O = $('<tr class="line"/>');
                  (j = $('<td/>')).appendTo(O),
                    (V = $(
                      "<input type='checkbox' class='visibility-switch'/>",
                    )).appendTo(j),
                    this.bindControl(
                      new p(V, D.visible, !0, this.model(), E + ' visibility'),
                    );
                  var z = $.t(I, { context: 'study' });
                  this.createLabeledCell(z, V)
                    .appendTo(O)
                    .addClass('propertypage-name-label'),
                    O.appendTo(this._table);
                  var M = this._findPlotPalette(o, A),
                    Y = M.palette,
                    q = M.paletteProps;
                  this._prepareLayoutForPalette(0, A, Y, q, E);
                } else {
                  (O = this._prepareFilledAreaBackground(
                    D.visible,
                    D.color,
                    D.transparency,
                    I,
                    E,
                  )).appendTo(this._table);
                }
              }
            }
          for (var H in e.graphics) {
            var N = e.graphics[H];
            for (var G in N) {
              D = this._property.graphics[H][G];
              x['_createRow_' + H].call(this, this._table, D);
            }
          }
          var j,
            U = this._table.find('.visibility-switch.plot-visibility-switch');
          1 === U.length &&
            ((j = U.parent()).css('display', 'none'),
            1 ===
            (w = this._table.find('.propertypage-plot-with-palette')).length
              ? w.css('display', 'none')
              : ((w = this._table.find('.propertypage-name-label')).css(
                  'padding-left',
                  0,
                ),
                w.find('label').attr('for', '')));
          var K = this._prepareStudyPropertiesLayout();
          if (((this._table = this._table.add(K)), f.isScriptStrategy(e))) {
            var Q = this._prepareOrdersSwitches();
            this._table = this._table.add(Q);
          }
          this.loadData();
        }),
        (x.prototype._prepareOrdersSwitches = function () {
          var e = $(
              '<table class="property-page study-strategy-properties" cellspacing="0" cellpadding="2">',
            ),
            t = 'chart-orders-switch_' + Date.now().toString(36),
            i = $('<tr>').appendTo(e),
            o = $('<input id="' + t + '" type="checkbox">').appendTo(
              $('<td>').appendTo(i),
            );
          $(
            '<label for="' + t + '">' + $.t('Trades on Chart') + '</label>',
          ).appendTo($('<td>').appendTo(i));
          var n = 'chart-orders-labels-switch_' + Date.now().toString(36),
            a = $('<tr>').appendTo(e),
            r = $('<input id="' + n + '" type="checkbox">').appendTo(
              $('<td>').appendTo(a),
            );
          $(
            '<label for="' + n + '">' + $.t('Signal Labels') + '</label>',
          ).appendTo($('<td>').appendTo(a));
          var l = 'chart-orders-qty-switch_' + Date.now().toString(36),
            s = $('<tr>').appendTo(e),
            d = $('<input id="' + l + '" type="checkbox">').appendTo(
              $('<td>').appendTo(s),
            );
          $('<label for="' + l + '">' + $.t('Quantity') + '</label>').appendTo(
            $('<td>').appendTo(s),
          );
          var c = this._study.properties();
          return (
            this.bindControl(
              new p(
                o,
                c.strategy.orders.visible,
                !0,
                this.model(),
                'Trades on chart visibility',
              ),
            ),
            this.bindControl(
              new p(
                r,
                c.strategy.orders.showLabels,
                !0,
                this.model(),
                'Signal labels visibility',
              ),
            ),
            this.bindControl(
              new h(
                r,
                c.strategy.orders.visible,
                !0,
                this.model(),
                'Signal labels visibility',
                !0,
              ),
            ),
            this.bindControl(
              new p(
                d,
                c.strategy.orders.showQty,
                !0,
                this.model(),
                'Quantity visibility',
              ),
            ),
            this.bindControl(
              new h(
                d,
                c.strategy.orders.visible,
                !0,
                this.model(),
                'Quantity visibility',
                !0,
              ),
            ),
            e
          );
        }),
        (x.prototype._prepareLayoutForPlot = function (e, t) {
          var i = t.id,
            o = this._study.properties().styles[i],
            n = this._findPlotPalette(e, t),
            a = n.palette,
            r = n.paletteProps,
            l = 'Change ' + i;
          if (a) {
            (h = $('<tr class="line"/>')).appendTo(this._table),
              (u = $('<td/>')).appendTo(h),
              u.addClass('visibility-cell'),
              (y = $(
                "<input type='checkbox' class='visibility-switch plot-visibility-switch'/>",
              )).appendTo(u),
              this.bindControl(new p(y, o.visible, !0, this.model(), l));
            var s = $.t(o.title.value(), { context: 'input' });
            this.createLabeledCell(s, y)
              .appendTo(h)
              .addClass(
                'propertypage-name-label propertypage-plot-with-palette',
              ),
              this._prepareLayoutForPalette(e, t, a, r, l);
          } else {
            var h, u, y;
            (h = $('<tr class="line"/>')).appendTo(this._table),
              (u = $('<td/>')).appendTo(h),
              u.addClass('visibility-cell'),
              (y = $(
                "<input type='checkbox' class='visibility-switch plot-visibility-switch'/>",
              )).appendTo(u);
            s = $.t(this._study.properties().styles[i].title.value(), {
              context: 'input',
            });
            this.createLabeledCell(s, y)
              .appendTo(h)
              .addClass('propertypage-name-label');
            var g = $('<td/>');
            g.appendTo(h), g.addClass('colorpicker-cell');
            var w = C(g),
              T = $('<td/>');
            T.appendTo(h);
            var v = this.createLineWidthEditor();
            v.appendTo(T);
            var m = $('<td>');
            m.appendTo(h);
            var f = _();
            f.appendTo(m);
            var L = $('<td>');
            L.appendTo(h);
            var S = $("<input type='checkbox'>");
            S.on('change', this._trackPriceLine.bind(this)).appendTo(L),
              this.createLabeledCell('Price Line', S).appendTo(h),
              this.bindControl(new p(y, o.visible, !0, this.model(), l)),
              this.bindControl(
                new c(w, o.color, !0, this.model(), l, o.transparency),
              ),
              this.bindControl(
                new b(
                  v,
                  o.linewidth,
                  !0,
                  this.model(),
                  l,
                  this._study.metaInfo().isTVScript,
                ),
              ),
              this.bindControl(
                new d(f, o.plottype, parseInt, !0, this.model(), l),
              ),
              this.bindControl(
                new p(S, o.trackPrice, !0, this.model(), 'Change Price Line'),
              );
          }
        }),
        (x.prototype._prepareLayoutForBarsPlot = function (e, t) {
          var i = t.id,
            o = this._study.properties().ohlcPlots[i],
            n = this._findPlotPalette(e, t),
            a = n.palette,
            r = n.paletteProps,
            l = 'Change ' + i,
            s = $('<tr class="line"/>');
          s.appendTo(this._table);
          var d = $('<td/>');
          d.appendTo(s), d.addClass('visibility-cell');
          var h = $("<input type='checkbox' class='visibility-switch'/>");
          h.appendTo(d),
            this.bindControl(new p(h, o.visible, !0, this.model(), l));
          var b = o.title.value();
          if (
            (this.createLabeledCell(b, h)
              .appendTo(s)
              .addClass('propertypage-name-label'),
            a)
          ) {
            this._prepareLayoutForPalette(e, t, a, r, l, !0);
          } else {
            var u = $('<td/>');
            u.appendTo(s), u.addClass('colorpicker-cell');
            var y = C(u);
            this.bindControl(new c(y, o.color, !0, this.model(), l));
          }
        }),
        (x.prototype._prepareLayoutForCandlesPlot = function (e, t) {
          this._prepareLayoutForBarsPlot(e, t);
          var i = t.id,
            o = this._study.properties().ohlcPlots[i],
            n = 'Change ' + i,
            a = $('<tr class="line"/>');
          a.appendTo(this._table);
          var r = $('<td/>');
          r.appendTo(a), r.addClass('visibility-cell');
          var l = $("<input type='checkbox' class='visibility-switch'/>");
          l.appendTo(r),
            this.bindControl(new p(l, o.drawWick, !0, this.model(), n));
          this.createLabeledCell('Wick', l).appendTo(a);
          var s = $('<td/>');
          s.appendTo(a), s.addClass('colorpicker-cell');
          var d = C(s);
          this.bindControl(new c(d, o.wickColor, !0, this.model(), n));
        }),
        (x.prototype._prepareLayoutForShapesPlot = function (e, t) {
          var i = t.id,
            o = this._study.properties().styles[i],
            n = this._findPlotPalette(e, t),
            a = n.palette,
            r = n.paletteProps,
            l = 'Change ' + i;
          (_ = $('<tr class="line"/>')).appendTo(this._table);
          var s = $('<td/>');
          s.appendTo(_), s.addClass('visibility-cell');
          var h = $("<input type='checkbox' class='visibility-switch'/>");
          h.appendTo(s),
            this.bindControl(new p(h, o.visible, !0, this.model(), l));
          var b = $.t(this._study.properties().styles[i].title.value(), {
            context: 'input',
          });
          this.createLabeledCell(b, h)
            .appendTo(_)
            .addClass('propertypage-name-label');
          var u = $('<td/>');
          u.appendTo(_);
          var y = w();
          y.appendTo(u),
            this.bindControl(new d(y, o.plottype, null, !0, this.model(), l));
          var T = $('<td/>');
          T.appendTo(_);
          var v = g();
          if (
            (v.appendTo(T),
            this.bindControl(new d(v, o.location, null, !0, this.model(), l)),
            a)
          )
            this._prepareLayoutForPalette(e, t, a, r, l);
          else {
            var _;
            (_ = $('<tr class="line"/>')).appendTo(this._table),
              $('<td/>').appendTo(_),
              $('<td/>').appendTo(_);
            var m = $('<td/>');
            m.appendTo(_), m.addClass('colorpicker-cell');
            var f = C(m);
            this.bindControl(
              new c(f, o.color, !0, this.model(), l, o.transparency),
            );
          }
        }),
        (x.prototype._prepareLayoutForCharsPlot = function (e, t) {
          var i = t.id,
            o = this._study.properties().styles[i],
            n = this._findPlotPalette(e, t),
            a = n.palette,
            r = n.paletteProps,
            l = 'Change ' + i;
          (_ = $('<tr class="line"/>')).appendTo(this._table);
          var s = $('<td/>');
          s.appendTo(_), s.addClass('visibility-cell');
          var h = $("<input type='checkbox' class='visibility-switch'/>");
          h.appendTo(s),
            this.bindControl(new p(h, o.visible, !0, this.model(), l));
          var b = $.t(this._study.properties().styles[i].title.value(), {
            context: 'input',
          });
          this.createLabeledCell(b, h)
            .appendTo(_)
            .addClass('propertypage-name-label');
          var y = $('<td/>');
          y.appendTo(_);
          var w = $('<input type="text"/>');
          w.appendTo(y),
            w.keyup(function () {
              var e = $(this),
                t = e.val();
              t && (e.val(t.split('')[t.length - 1]), e.change());
            }),
            this.bindControl(new u(w, o.char, null, !1, this.model(), l));
          var T = $('<td/>');
          T.appendTo(_);
          var v = g();
          if (
            (v.appendTo(T),
            this.bindControl(new d(v, o.location, null, !0, this.model(), l)),
            a)
          )
            this._prepareLayoutForPalette(e, t, a, r, l);
          else {
            var _;
            (_ = $('<tr class="line"/>')).appendTo(this._table),
              $('<td/>').appendTo(_),
              $('<td/>').appendTo(_);
            var m = $('<td/>');
            m.appendTo(_), m.addClass('colorpicker-cell');
            var f = C(m);
            this.bindControl(
              new c(f, o.color, !0, this.model(), l, o.transparency),
            );
          }
        }),
        (x.prototype._isStyleNeedsConnectPoints = function (e) {
          return [L.Cross, L.Circles].indexOf(e) >= 0;
        }),
        (x.prototype._prepareLayoutForPalette = function (e, t, i, o, n, a) {
          var r = e,
            l = t.id,
            s = null,
            h = l.startsWith('fill');
          s = a
            ? this._study.properties().ohlcPlots[l]
            : h
            ? this._study.properties().filledAreasStyle[l]
            : this._study.properties().styles[l];
          var u = 0;
          for (var y in i.colors) {
            var g = o.colors[y],
              w = $('<tr class="line"/>');
            w.appendTo(this._table), $('<td/>').appendTo(w);
            var T = $('<td/>');
            T.appendTo(w),
              T.addClass('propertypage-name-label'),
              T.html($.t(g.name.value(), { context: 'input' }));
            var v = $('<td/>');
            v.appendTo(w), v.addClass('colorpicker-cell');
            var m = C(v);
            if (
              (this.bindControl(
                new c(m, g.color, !0, this.model(), n, s.transparency),
              ),
              !h && this._study.isLinePlot(r))
            ) {
              var f = $('<td/>');
              f.appendTo(w);
              var L = this.createLineWidthEditor();
              L.appendTo(f),
                this.bindControl(
                  new b(
                    L,
                    g.width,
                    !0,
                    this.model(),
                    n,
                    this._study.metaInfo().isTVScript,
                  ),
                );
              var S = $('<td>');
              if ((S.appendTo(w), 0 === u)) {
                var k = _();
                k.appendTo(S),
                  this.bindControl(
                    new d(k, s.plottype, parseInt, !0, this.model(), n),
                  );
                var x = $('<td>');
                x.appendTo(w);
                var B = $("<input type='checkbox'>");
                B.on('change', this._trackPriceLine.bind(this)).appendTo(x),
                  this.createLabeledCell('Price Line', B).appendTo(w),
                  this.bindControl(
                    new p(
                      B,
                      s.trackPrice,
                      !0,
                      this.model(),
                      'Change Price Line',
                    ),
                  );
              }
            }
            u++;
          }
        }),
        (x.prototype._trackPriceLine = function () {
          k(
            'GUI',
            'Add Price Line',
            this._study.properties().description.value(),
          );
        }),
        (x.prototype._prepareLayoutForArrowsPlot = function (e, t) {
          var i = t.id,
            o = this._study.properties().styles[i],
            n = 'Change ' + i,
            a = $('<tr class="line"/>');
          a.appendTo(this._table);
          var r = $('<td/>');
          r.appendTo(a), r.addClass('visibility-cell');
          var l = $("<input type='checkbox' class='visibility-switch'/>");
          l.appendTo(r);
          var s = $.t(this._study.properties().styles[i].title.value(), {
            context: 'input',
          });
          this.createLabeledCell(s, l)
            .appendTo(a)
            .addClass('propertypage-name-label');
          var d = $('<td/>');
          d.appendTo(a), d.addClass('colorpicker-cell');
          var h = C(d),
            b = $('<td/>');
          b.appendTo(a), b.addClass('colorpicker-cell');
          var u = C(b);
          this.bindControl(new p(l, o.visible, !0, this.model(), n)),
            this.bindControl(
              new c(h, o.colorup, !0, this.model(), n, o.transparency),
            ),
            this.bindControl(
              new c(u, o.colordown, !0, this.model(), n, o.transparency),
            );
        }),
        (x.prototype._findPlotPalette = function (e, t) {
          var i = e,
            o = t.id,
            n = null,
            a = null,
            r = this._study.metaInfo().plots;
          if (this._study.isBarColorerPlot(i) || this._study.isBgColorerPlot(i))
            (n = this._study.metaInfo().palettes[t.palette]),
              (a = this._study.properties().palettes[t.palette]);
          else
            for (var l = 0; l < r.length; l++)
              if (
                r[l].target === o &&
                (this._study.isSelfColorerPlot(l) ||
                  this._study.isOHLCColorerPlot(l))
              ) {
                (n = this._study.metaInfo().palettes[r[l].palette]),
                  (a = this._study.properties().palettes[r[l].palette]);
                break;
              }
          return { palette: n, paletteProps: a };
        }),
        (x.prototype._prepareStudyPropertiesLayout = function () {
          var e = $(
              '<table class="property-page study-properties" cellspacing="0" cellpadding="2">',
            ),
            t = this.createPrecisionEditor();
          if (
            ((i = $('<tr>')).appendTo(e),
            $('<td>' + $.t('Precision') + '</td>').appendTo(i),
            $('<td>').append(t).appendTo(i),
            this.bindControl(
              new d(
                t,
                this._study.properties().precision,
                null,
                !0,
                this.model(),
                'Change Precision',
              ),
            ),
            'Compare@tv-basicstudies' === this._study.metaInfo().id)
          ) {
            var i;
            t = this.createSeriesMinTickEditor();
            (i = $('<tr>')).appendTo(e),
              $('<td>' + $.t('Override Min Tick') + '</td>').appendTo(i),
              $('<td>').append(t).appendTo(i),
              this.bindControl(
                new d(
                  t,
                  this._study.properties().minTick,
                  null,
                  !0,
                  this.model(),
                  'Change MinTick',
                ),
              );
          }
          return this._putStudyDefaultStyles(e), e;
        }),
        (x.prototype._putStudyDefaultStyles = function (e, t) {
          var i = null,
            o = this._study;
          return (
            (!o.properties().linkedToSeries ||
              !o.properties().linkedToSeries.value()) &&
            ($.each(this._model.m_model.panes(), function (e, t) {
              $.each(t.dataSources(), function (e, n) {
                if (n === o) return (i = t), !1;
              });
            }),
            (this._pane = i),
            e)
          );
        }),
        (x.prototype.widget = function () {
          return this._table;
        }),
        (x.prototype._prepareFilledAreaBackground = function (e, t, i, o, n) {
          var a = $('<tr class="line"/>'),
            r = $('<td/>');
          r.appendTo(a);
          var l = $("<input type='checkbox' class='visibility-switch'/>");
          l.appendTo(r),
            this.createLabeledCell(o, l)
              .appendTo(a)
              .addClass('propertypage-name-label');
          var s = $('<td/>');
          s.appendTo(a), s.addClass('colorpicker-cell');
          var d = C(s);
          return (
            this.bindControl(new p(l, e, !0, this.model(), n + ' visibility')),
            this.bindControl(new c(d, t, !0, this.model(), n + ' color', i)),
            a
          );
        }),
        inherit(B, n),
        (B.prototype.prepareLayout = function () {
          this._study.properties().linkedToSeries &&
            this._study.properties().linkedToSeries.value(),
            (this._table = $());
        }),
        (B.prototype.widget = function () {
          return this._table;
        }),
        (x._createRow_horizlines = function (e, t) {
          var i = this.addRow(e),
            o = t.name.value(),
            n = $("<input type='checkbox' class='visibility-switch'/>"),
            a = this.createColorPicker(),
            r = this.createLineWidthEditor(),
            l = y();
          $('<td>').append(n).appendTo(i),
            this.createLabeledCell(o, n).appendTo(i),
            $('<td>').append(a).appendTo(i),
            $('<td>').append(r).appendTo(i),
            $('<td>').append(l.render()).appendTo(i),
            this.bindControl(
              new p(
                n,
                t.visible,
                !0,
                this.model(),
                'Change ' + o + ' visibility',
              ),
            ),
            this.bindControl(
              new c(a, t.color, !0, this.model(), 'Change ' + o + ' color'),
            ),
            this.bindControl(
              new d(
                l,
                t.style,
                parseInt,
                !0,
                this.model(),
                'Change ' + o + ' style',
              ),
            ),
            this.bindControl(
              new b(r, t.width, !0, this.model(), 'Change ' + o + ' width'),
            );
        }),
        (x._createRow_vertlines = function (e, t) {
          var i = this.addRow(e),
            o = t.name.value(),
            n = $("<input type='checkbox' class='visibility-switch'/>"),
            a = this.createColorPicker(),
            r = this.createLineWidthEditor(),
            l = y();
          $('<td>').append(n).appendTo(i),
            this.createLabeledCell(o, n).appendTo(i),
            $('<td>').append(a).appendTo(i),
            $('<td>').append(r).appendTo(i),
            $('<td>').append(l.render()).appendTo(i),
            this.bindControl(
              new p(
                n,
                t.visible,
                !0,
                this.model(),
                'Change ' + o + ' visibility',
              ),
            ),
            this.bindControl(
              new c(a, t.color, !0, this.model(), 'Change ' + o + ' color'),
            ),
            this.bindControl(
              new d(
                l,
                t.style,
                parseInt,
                !0,
                this.model(),
                'Change ' + o + ' style',
              ),
            ),
            this.bindControl(
              new b(r, t.width, !0, this.model(), 'Change ' + o + ' width'),
            );
        }),
        (x._createRow_lines = function (e, t) {
          var i = this.addRow(e),
            o = t.title.value(),
            n = $("<input type='checkbox' class='visibility-switch'/>"),
            a = this.createColorPicker(),
            r = this.createLineWidthEditor(),
            l = y();
          $('<td>').append(n).appendTo(i),
            this.createLabeledCell(o, n).appendTo(i),
            $('<td>').append(a).appendTo(i),
            $('<td>').append(r).appendTo(i),
            $('<td>').append(l.render()).appendTo(i),
            this.bindControl(
              new p(
                n,
                t.visible,
                !0,
                this.model(),
                'Change ' + o + ' visibility',
              ),
            ),
            this.bindControl(
              new c(a, t.color, !0, this.model(), 'Change ' + o + ' color'),
            ),
            this.bindControl(
              new d(
                l,
                t.style,
                parseInt,
                !0,
                this.model(),
                'Change ' + o + ' style',
              ),
            ),
            this.bindControl(
              new b(r, t.width, !0, this.model(), 'Change ' + o + ' width'),
            );
        }),
        (x._createRow_hlines = function (e, t) {
          var i = this.addRow(e),
            o = t.name.value(),
            n = $("<input type='checkbox' class='visibility-switch'/>"),
            a = this.createColorPicker(),
            r = this.createLineWidthEditor(),
            l = y(),
            s = $("<input type='checkbox'>");
          if (
            ($('<td>').append(n).appendTo(i),
            this.createLabeledCell(o, n).appendTo(i),
            $('<td>').append(a).appendTo(i),
            $('<td>').append(r).appendTo(i),
            $('<td>').append(l.render()).appendTo(i),
            $('<td>').appendTo(i),
            $('<td>').append(s).appendTo(i),
            this.createLabeledCell('Show Price', s).appendTo(i),
            this.bindControl(
              new p(
                n,
                t.visible,
                !0,
                this.model(),
                'Change ' + o + ' visibility',
              ),
            ),
            this.bindControl(
              new c(a, t.color, !0, this.model(), 'Change ' + o + ' color'),
            ),
            this.bindControl(
              new d(
                l,
                t.style,
                parseInt,
                !0,
                this.model(),
                'Change ' + o + ' style',
              ),
            ),
            this.bindControl(
              new b(r, t.width, !0, this.model(), 'Change ' + o + ' width'),
            ),
            this.bindControl(
              new p(
                s,
                t.showPrice,
                !0,
                this.model(),
                'Change ' + o + ' show price',
              ),
            ),
            t.enableText.value())
          ) {
            i = this.addRow(e);
            $('<td colspan="2">').appendTo(i);
            var h = $("<input type='checkbox'>");
            $('<td class="text-center">').append(h).appendTo(i),
              this.createLabeledCell('Show Text', h).appendTo(i),
              this.bindControl(
                new p(
                  h,
                  t.showText,
                  !0,
                  this.model(),
                  'Change ' + o + ' show text',
                ),
              );
            var u = TradingView.createTextPosEditor();
            $('<td>').append(u.render()).appendTo(i),
              this.bindControl(
                new d(
                  u,
                  t.textPos,
                  parseInt,
                  !0,
                  this.model(),
                  'Change ' + o + ' text position',
                ),
              );
            var C = this.createFontSizeEditor();
            $('<td colspan="2">').append(C).appendTo(i),
              this.bindControl(
                new d(
                  C,
                  t.fontSize,
                  parseInt,
                  !0,
                  this.model(),
                  'Change ' + o + ' font size',
                ),
              );
          }
        }),
        (x._createRow_hhists = function (e, t) {
          var i = t.title.value(),
            o = [],
            n = [],
            s = this.addRow(e),
            h = T();
          $('<td>').append(h).appendTo(s),
            this.createLabeledCell(i, h).appendTo(s),
            this.bindControl(
              new p(
                h,
                t.visible,
                !0,
                this.model(),
                'Change ' + i + ' Visibility',
              ),
            );
          s = this.addRow(e);
          var b = $('<input/>');
          b.attr('type', 'text'),
            b.addClass('ticker'),
            this.createLabeledCell($.t('Width (% of the Box)'), b).appendTo(s),
            $('<td>').append(b).appendTo(s);
          var C = [l(40)];
          C.push(a(0)),
            C.push(r(100)),
            this.bindControl(
              new u(
                b,
                t.percentWidth,
                C,
                !1,
                this.model(),
                'Change Percent Width',
              ),
            );
          s = this.addLabeledRow(e, 'Placement');
          var y = v();
          $('<td>').append(y).appendTo(s),
            this.bindControl(
              new d(
                y,
                t.direction,
                null,
                !0,
                this.model(),
                'Change ' + i + ' Placement',
              ),
            );
          s = this.addRow(e);
          var g = $("<input type='checkbox'>");
          $('<td>').append(g).appendTo(s),
            this.createLabeledCell($.t('Show Values'), g).appendTo(s),
            this.bindControl(
              new p(
                g,
                t.showValues,
                !0,
                this.model(),
                'Change ' + i + ' Show Values',
              ),
            );
          s = this.addRow(e);
          var w = this.createColorPicker();
          for (var _ in (this.createLabeledCell($.t('Text Color'), w).appendTo(
            s,
          ),
          $('<td>').append(w).appendTo(s),
          this.bindControl(
            new c(
              w,
              t.valuesColor,
              !0,
              this.model(),
              'Change ' + i + ' Text Color',
            ),
          ),
          t.colors))
            if (isNumber(parseInt(_, 10))) {
              s = this.addRow(e);
              (o[_] = t.titles[_].value()),
                (n[_] = this.createColorPicker()),
                $('<td>').append(o[_]).appendTo(s),
                $('<td>').append(n[_]).appendTo(s),
                this.bindControl(
                  new c(
                    n[_],
                    t.colors[_],
                    !0,
                    this.model(),
                    'Change ' + o[_] + ' color',
                  ),
                );
            }
        }),
        (x._createRow_backgrounds = function (e, t) {
          var i = this.addRow(e),
            o = $("<input type='checkbox' class='visibility-switch'/>"),
            n = t.name.value(),
            a = this.createColorPicker();
          $('<td>').append(o).appendTo(i),
            this.createLabeledCell(n, o).appendTo(i),
            $('<td>').append(a).appendTo(i),
            this.bindControl(
              new p(
                o,
                t.visible,
                !0,
                this.model(),
                'Change ' + n + ' visibility',
              ),
            ),
            this.bindControl(
              new c(
                a,
                t.color,
                !0,
                this.model(),
                'Change ' + n + ' color',
                t.transparency,
              ),
            );
        }),
        (x._createRow_polygons = function (e, t) {
          var i = this.addRow(e),
            o = t.name.value(),
            n = this.createColorPicker();
          $('<td>').append(o).appendTo(i),
            $('<td>').append(n).appendTo(i),
            this.bindControl(
              new c(n, t.color, !0, this.model(), 'Change ' + o + ' color'),
            );
        }),
        (x._createRow_trendchannels = function (e, t) {
          var i = this.addRow(e),
            o = t.name.value(),
            n = this.createColorPicker();
          $('<td>').append(o).appendTo(i),
            $('<td>').append(n).appendTo(i),
            this.bindControl(
              new c(
                n,
                t.color,
                !0,
                this.model(),
                'Change ' + o + ' color',
                t.transparency,
              ),
            );
        }),
        (x._createRow_textmarks = function (e, t) {
          var i = this.addLabeledRow(e),
            o = t.name.value(),
            n = this.createColorPicker(),
            a = this.createColorPicker(),
            r = this.createFontEditor(),
            l = this.createFontSizeEditor(),
            s = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>',
            ),
            h = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>',
            );
          $('<td>').append(o).appendTo(i),
            'rectangle' !== t.shape.value() && $('<td>').append(n).appendTo(i),
            $('<td>').append(a).appendTo(i),
            $('<td>').append(r).appendTo(i),
            $('<td>').append(l).appendTo(i),
            $('<td>').append(s).appendTo(i),
            $('<td>').append(h).appendTo(i),
            this.bindControl(
              new c(
                n,
                t.color,
                !0,
                this.model(),
                'Change ' + o + ' color',
                t.transparency,
              ),
            ),
            this.bindControl(
              new c(
                a,
                t.fontColor,
                !0,
                this.model(),
                'Change ' + o + ' text color',
                t.transparency,
              ),
            ),
            this.bindControl(
              new d(
                l,
                t.fontSize,
                parseInt,
                !0,
                this.model(),
                'Change ' + o + ' font size',
              ),
            ),
            this.bindControl(
              new d(
                r,
                t.fontFamily,
                null,
                !0,
                this.model(),
                'Change ' + o + ' font',
              ),
            ),
            this.bindControl(
              new p(s, t.fontBold, !0, this.model(), 'Change Text Font Bold'),
            ),
            this.bindControl(
              new p(
                h,
                t.fontItalic,
                !0,
                this.model(),
                'Change Text Font Italic',
              ),
            );
        }),
        (x._createRow_shapemarks = function (e, t) {
          var i = this.addRow(e),
            o = $("<input type='checkbox' class='visibility-switch'/>"),
            n = t.name.value(),
            a = this.createColorPicker(),
            r = $('<input/>');
          r.attr('type', 'text'),
            r.addClass('ticker'),
            $('<td>').append(o).appendTo(i),
            this.createLabeledCell(n, o).appendTo(i),
            $('<td>').append(a).appendTo(i),
            this.createLabeledCell('Size', r).appendTo(i),
            $('<td>').append(r).appendTo(i),
            this.bindControl(
              new p(
                o,
                t.visible,
                !0,
                this.model(),
                'Change ' + n + ' visibility',
              ),
            ),
            this.bindControl(
              new c(
                a,
                t.color,
                !0,
                this.model(),
                'Change ' + n + ' back color',
                t.transparency,
              ),
            ),
            this.bindControl(
              new u(r, t.size, null, !1, this.model(), 'Change size'),
            );
        }),
        (t.StudyStylesPropertyPage = x),
        (t.StudyDisplayPropertyPage = B);
    },
    onHl: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.SimpleComboBinder,
        r = n.BooleanBinder,
        l = n.ColorBinding,
        s = n.SliderBinder,
        d = i('/4PT').createLineStyleEditor;
      function p(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(p, o),
        (p.prototype.prepareLayout = function () {
          this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          );
          var e = $('<tbody>').appendTo(this._table),
            t = this.createLineWidthEditor(),
            i = d(),
            o = this.createColorPicker(),
            n = this.addLabeledRow(e, $.t('Line'));
          $('<td>').append(o).appendTo(n),
            $('<td>').append(t).appendTo(n),
            $('<td colspan="3">').append(i.render()).appendTo(n);
          n = this.addLabeledRow(e, $.t('Text'));
          var p = this.createColorPicker(),
            h = this.createFontSizeEditor(),
            c = this.createFontEditor(),
            b = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>',
            ),
            u = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>',
            );
          $('<td>').append(p).appendTo(n),
            $('<td>').append(c).appendTo(n),
            $('<td>').append(h).appendTo(n),
            $('<td>').append(b).appendTo(n),
            $('<td>').append(u).appendTo(n);
          var C = $('<tbody>').appendTo(this._table),
            y = $('<input type="checkbox" class="visibility-switch">'),
            g = this.createColorPicker(),
            w =
              ((n = this.addLabeledRow(C, $.t('Background'), y)), $('<table>'));
          $('<td colspan="5">').append(w).appendTo(n);
          n = $('<tr>').appendTo(w);
          $('<td>').append(y).appendTo(n), $('<td>').append(g).appendTo(n);
          var T = $('<tbody>').appendTo(this._table),
            v = $('<label>' + $.t('Extend') + ' </label>').css({
              'margin-left': '8px',
            }),
            _ = $('<input type="checkbox">').appendTo(v),
            m = $('<label>' + $.t('Extend') + ' </label>').css({
              'margin-left': '8px',
            }),
            f = $('<input type="checkbox">').appendTo(m),
            L = $(
              "<select><option value='0'>" +
                $.t('Normal') +
                "</option><option value='1'>" +
                $.t('Arrow') +
                '</option></select>',
            ),
            S = $(
              "<select><option value='0'>" +
                $.t('Normal') +
                "</option><option value='1'>" +
                $.t('Arrow') +
                '</option></select>',
            );
          n = this.addLabeledRow(T, $.t('Left End'));
          $('<td colspan="3">').appendTo(n).append(L).append(v);
          n = this.addLabeledRow(T, $.t('Right End'));
          $('<td colspan="3">').appendTo(n).append(S).append(m);
          var k = $('<tbody>').appendTo(this._table),
            x = ((n = $('<tr>').appendTo(k)), $("<input type='checkbox'>")),
            B = $("<label style='display:block'>")
              .append(x)
              .append($.t('Show Prices'));
          $("<td colspan='2'>").append(B).appendTo(n),
            this.bindControl(
              new a(
                h,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new a(
                c,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Text Font',
              ),
            ),
            this.bindControl(
              new l(
                p,
                this._linetool.properties().textcolor,
                !0,
                this.model(),
                'Change Text Color',
              ),
            ),
            this.bindControl(
              new r(
                b,
                this._linetool.properties().bold,
                !0,
                this.model(),
                'Change Text Font Bold',
              ),
            ),
            this.bindControl(
              new r(
                u,
                this._linetool.properties().italic,
                !0,
                this.model(),
                'Change Text Font Italic',
              ),
            ),
            this.bindControl(
              new r(
                x,
                this._linetool.properties().showPrices,
                !0,
                this.model(),
                'Change Disjoint Channel Show Prices',
              ),
            ),
            this.bindControl(
              new r(
                _,
                this._linetool.properties().extendLeft,
                !0,
                this.model(),
                'Change Disjoint Channel Extending Left',
              ),
            ),
            this.bindControl(
              new r(
                f,
                this._linetool.properties().extendRight,
                !0,
                this.model(),
                'Change Disjoint Channel Extending Right',
              ),
            ),
            this.bindControl(
              new l(
                o,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Disjoint Channel Color',
              ),
            ),
            this.bindControl(
              new a(
                i,
                this._linetool.properties().linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Disjoint Channel Style',
              ),
            ),
            this.bindControl(
              new s(
                t,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Disjoint Channel Width',
              ),
            ),
            this.bindControl(
              new a(
                L,
                this._linetool.properties().leftEnd,
                parseInt,
                !0,
                this.model(),
                'Change Disjoint Channel Left End',
              ),
            ),
            this.bindControl(
              new a(
                S,
                this._linetool.properties().rightEnd,
                parseInt,
                !0,
                this.model(),
                'Change Disjoint Channel Right End',
              ),
            ),
            this.bindControl(
              new r(
                y,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Disjoint Channel Filling',
              ),
            ),
            this.bindControl(
              new l(
                g,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Disjoint Channel Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.loadData();
        }),
        (p.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = p);
    },
    owyi: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'createPriceSourceEditor', function () {
          return o;
        });
      i('P5fv'), i('YFKU');
      function o() {
        var e = $('<select>');
        return (
          $('<option value="open">' + $.t('Open') + '</option>').appendTo(e),
          $('<option value="high">' + $.t('High') + '</option>').appendTo(e),
          $('<option value="low">' + $.t('Low') + '</option>').appendTo(e),
          $('<option value="close">' + $.t('Close') + '</option>').appendTo(e),
          $('<option value="hl2">' + $.t('(H + L)/2') + '</option>').appendTo(
            e,
          ),
          $(
            '<option value="hlc3">' + $.t('(H + L + C)/3') + '</option>',
          ).appendTo(e),
          $(
            '<option value="ohlc4">' + $.t('(O + H + L + C)/4') + '</option>',
          ).appendTo(e),
          e
        );
      }
    },
    qbxA: function (e, t, i) {},
    qf46: function (e, t, i) {
      'use strict';
      var o = i('k7QS');
      function n(e, t, i) {
        o.call(this, e, t, i);
      }
      inherit(n, o), (e.exports = n);
    },
    qpZX: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('n3Kh'),
        a = i('DxCR'),
        r = a.GreateTransformer,
        l = a.LessTransformer,
        s = a.ToFloatTransformer,
        d = a.ColorBinding,
        p = a.BooleanBinder,
        h = a.SimpleComboBinder,
        c = a.SimpleStringBinder,
        b = a.SliderBinder,
        u = i('/4PT').createLineStyleEditor,
        C = i('zXvd').NumericFormatter,
        y = i('bKFv').StatsPosition;
      function g(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      function w(e, t, i) {
        n.call(this, e, t, i);
      }
      inherit(g, o),
        (g.prototype.prepareLayout = function () {
          this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          );
          var e = $('<tbody>').appendTo(this._table),
            t = this.createLineWidthEditor(),
            i = u(),
            o = this.createColorPicker(),
            n = this.addLabeledRow(e, $.t('Line'));
          $('<td>').append(o).appendTo(n),
            $('<td>').append(t).appendTo(n),
            $('<td colspan="3">').append(i.render()).appendTo(n);
          var a = $('<tbody>').appendTo(this._table),
            r =
              ((n = this.addLabeledRow(a, $.t('Text'))),
              this.createColorPicker()),
            l = this.createFontSizeEditor(),
            s = this.createFontEditor(),
            c = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>',
            ),
            C = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>',
            ),
            g = $('<input type="checkbox">');
          $('<td>').append(r).appendTo(n),
            $('<td>').append(s).appendTo(n),
            $('<td>').append(l).appendTo(n),
            $('<td>').append(c).appendTo(n),
            $('<td>').append(C).appendTo(n);
          var w = $(
              "<select><option value='" +
                y.Left +
                "'>" +
                $.t('Left') +
                "</option><option value='" +
                y.Center +
                "'>" +
                $.t('Center') +
                "</option><option value='" +
                y.Right +
                "'>" +
                $.t('Right') +
                '</option></select>',
            ),
            T = this.addLabeledRow(a, $.t('Stats Position'));
          $('<td colspan="3">').appendTo(T).append(w);
          var v = $('<input type="checkbox">'),
            _ = $('<input type="checkbox">');
          n = this.addLabeledRow(a, $.t('Extend Right End'));
          $('<td colspan="3">').appendTo(n).append(v);
          n = this.addLabeledRow(a, $.t('Extend Left End'));
          $('<td colspan="3">').appendTo(n).append(_);
          var m = $('<input type="checkbox">'),
            f = $('<input type="checkbox">'),
            L = $('<input type="checkbox">');
          n = this.addLabeledRow(a, $.t('Show Price Range'));
          $('<td colspan="3">').appendTo(n).append(m);
          n = this.addLabeledRow(a, $.t('Show Bars Range'));
          $('<td colspan="3">').appendTo(n).append(f);
          n = this.addLabeledRow(a, $.t('Always Show Stats'));
          $('<td colspan="3">').appendTo(n).append(L);
          n = this.addLabeledRow(a, $.t('Show Middle Point'));
          $('<td colspan="3">').appendTo(n).append(g),
            this.bindControl(
              new p(
                m,
                this._linetool.properties().showPriceRange,
                !0,
                this.model(),
                'Change Trend Angle Show Price Range',
              ),
            ),
            this.bindControl(
              new p(
                f,
                this._linetool.properties().showBarsRange,
                !0,
                this.model(),
                'Change Trend Angle Show Bars Range',
              ),
            ),
            this.bindControl(
              new h(
                l,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new h(
                s,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Text Font',
              ),
            ),
            this.bindControl(
              new d(
                r,
                this._linetool.properties().textcolor,
                !0,
                this.model(),
                'Change Text Color',
              ),
            ),
            this.bindControl(
              new p(
                c,
                this._linetool.properties().bold,
                !0,
                this.model(),
                'Change Text Font Bold',
              ),
            ),
            this.bindControl(
              new p(
                C,
                this._linetool.properties().italic,
                !0,
                this.model(),
                'Change Text Font Italic',
              ),
            ),
            this.bindControl(
              new d(
                o,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Trend Angle Color',
              ),
            ),
            this.bindControl(
              new h(
                i,
                this._linetool.properties().linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Trend Angle Style',
              ),
            ),
            this.bindControl(
              new b(
                t,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Trend Angle Width',
              ),
            ),
            this.bindControl(
              new p(
                v,
                this._linetool.properties().extendRight,
                !0,
                this.model(),
                'Change Trend Angle Extending Right',
              ),
            ),
            this.bindControl(
              new p(
                _,
                this._linetool.properties().extendLeft,
                !0,
                this.model(),
                'Change Trend Angle Extending Left',
              ),
            ),
            this.bindControl(
              new p(
                L,
                this._linetool.properties().alwaysShowStats,
                !0,
                this.model(),
                'Change Trend Angle Always Show Stats',
              ),
            ),
            this.bindControl(
              new p(
                g,
                this._linetool.properties().showMiddlePoint,
                !0,
                this.model(),
                'Change Trend Angle Show Middle Point',
              ),
            ),
            this.bindControl(
              new h(
                w,
                this._linetool.properties().statsPosition,
                parseInt,
                !0,
                this.model(),
                'Change Trend Angle Stats Position',
              ),
            ),
            this.loadData();
        }),
        (g.prototype.widget = function () {
          return this._table;
        }),
        inherit(w, n),
        (w.prototype.prepareLayout = function () {
          this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          );
          var e = this._linetool.points()[0],
            t = this._linetool.properties().points[0];
          if (e && t) {
            var i = this._createPointRow(e, t, '');
            this._table.append(i);
            i = $('<tr>').appendTo(this._table);
            $('<td>').append($.t('Angle')).appendTo(i);
            var o = $("<input type='text'>");
            $('<td>').append(o).appendTo(i);
            var n = [s(t.price.value()), r(-360), l(360)],
              a = new c(
                o,
                this._linetool.properties().angle,
                n,
                !1,
                this.model(),
                'Change angle',
              );
            a.addFormatter(function (e) {
              return new C().format(e);
            }),
              this.bindControl(a),
              this.loadData();
          }
        }),
        (w.prototype.widget = function () {
          return this._table;
        }),
        (t.LineToolTrendAngleStylesPropertyPage = g),
        (t.LineToolTrendAngleInputsPropertyPage = w);
    },
    qrDX: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.SliderBinder,
        r = n.BooleanBinder,
        l = n.ColorBinding,
        s = n.SimpleComboBinder;
      function d(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(d, o),
        (d.prototype.prepareLayout = function () {
          this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          );
          var e = this.createLineWidthEditor(),
            t = this.createColorPicker(),
            i = $('<input type="checkbox" class="visibility-switch">'),
            o = this.createColorPicker(),
            n = this.addLabeledRow(this._table, 'Line');
          $('<td>').prependTo(n),
            $('<td>').append(t).appendTo(n),
            $('<td>').append(e).appendTo(n);
          n = this.addLabeledRow(this._table, 'Background', i);
          $('<td>').append(i).prependTo(n), $('<td>').append(o).appendTo(n);
          var d = $('<tbody>').appendTo(this._table),
            p = $(
              "<select><option value='0'>" +
                $.t('Normal') +
                "</option><option value='1'>" +
                $.t('Arrow') +
                '</option></select>',
            ),
            h = $(
              "<select><option value='0'>" +
                $.t('Normal') +
                "</option><option value='1'>" +
                $.t('Arrow') +
                '</option></select>',
            );
          n = this.addLabeledRow(d, $.t('Left End'));
          $('<td>').prependTo(n), $('<td colspan="3">').appendTo(n).append(p);
          n = this.addLabeledRow(d, $.t('Right End'));
          $('<td>').prependTo(n),
            $('<td colspan="3">').appendTo(n).append(h),
            this.bindControl(
              new l(
                t,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Brush Color',
              ),
            ),
            this.bindControl(
              new a(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Brush Line Width',
              ),
            ),
            this.bindControl(
              new r(
                i,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Brush Filling',
              ),
            ),
            this.bindControl(
              new l(
                o,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Brush Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new s(
                p,
                this._linetool.properties().leftEnd,
                parseInt,
                !0,
                this.model(),
                'Change Trend Line Left End',
              ),
            ),
            this.bindControl(
              new s(
                h,
                this._linetool.properties().rightEnd,
                parseInt,
                !0,
                this.model(),
                'Change Trend Line Right End',
              ),
            ),
            this.loadData();
        }),
        (d.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = d);
    },
    u2Ui: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR').ColorBinding;
      function a(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(a, o),
        (a.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2');
          var e = this.createColorPicker(),
            t = $.t('Color') + ':',
            i = this.addLabeledRow(this._table, t);
          $('<td>').append(e).appendTo(i);
          var o = this._linetool.properties();
          (this._div = $('<div>').append(this._table)),
            this.bindControl(
              new n(e, o.color, !0, this.model(), 'Change Icon Color'),
            ),
            this.loadData();
        }),
        (a.prototype.widget = function () {
          return this._div;
        }),
        (e.exports = a);
    },
    uHqD: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.FloatBinder,
        r = n.SimpleComboBinder,
        l = n.BooleanBinder,
        s = n.ColorBinding,
        d = n.SliderBinder,
        p = i('jNEI').addColorPicker,
        h = i('/4PT').createLineStyleEditor,
        c = i('y/RR').createTransparencyEditor;
      function b(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(b, o),
        (b.prototype.addLevelEditor = function (e, t, i) {
          var o = $('<tr>');
          o.appendTo(this._table);
          var n = $('<td>');
          n.appendTo(o);
          var c = $("<input type='checkbox' class='visibility-switch'>");
          if ((c.appendTo(n), e)) {
            var b = $('<td>');
            b.appendTo(o);
            var u = $("<input type='text'>");
            u.appendTo(b),
              u.css('width', '70px'),
              this.bindControl(
                new a(
                  u,
                  t.coeff,
                  !1,
                  this.model(),
                  'Change Pitchfork Line Coeff',
                ),
              );
          } else $('<td>' + $.t('Trend Line') + '</td>').appendTo(o);
          var C = $("<td class='colorpicker-cell'>");
          C.appendTo(o);
          var y = p(C),
            g = $('<td>');
          g.appendTo(o);
          var w = this.createLineWidthEditor();
          if ((w.appendTo(g), !e)) {
            var T = $('<td>');
            T.appendTo(o);
            var v = h();
            v.render().appendTo(T),
              this.bindControl(
                new r(
                  v,
                  t.linestyle,
                  parseInt,
                  !0,
                  this.model(),
                  'Change Fib Speed Resistance Arcs Style',
                ),
              );
          }
          this.bindControl(
            new l(
              c,
              t.visible,
              !0,
              this.model(),
              'Change Fib Speed Resistance Arcs Visibility',
            ),
          ),
            this.bindControl(
              new s(
                y,
                t.color,
                !0,
                this.model(),
                'Change Fib Speed Resistance Arcs Line Color',
                0,
              ),
            ),
            this.bindControl(
              new d(
                w,
                t.linewidth,
                !0,
                this.model(),
                'Change Fib Speed Resistance Arcs Width',
              ),
            );
        }),
        (b.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            this.addLevelEditor(
              null,
              this._linetool.properties().trendline,
              !1,
            );
          for (var e = 1; e <= 11; e++) {
            var t = 'level' + e;
            this.addLevelEditor(
              'Level ' + e,
              this._linetool.properties()[t],
              !1,
            );
          }
          this.addOneColorPropertyWidget(this._table);
          var i = $("<input type='checkbox' class='visibility-switch'>"),
            o = this.addLabeledRow(this._table, $.t('Levels'));
          $('<td>').append(i).prependTo(o),
            this.bindControl(
              new l(
                i,
                this._linetool.properties().showCoeffs,
                !0,
                this.model(),
                'Change Fib Speed Resistance Arcs Levels Visibility',
              ),
            );
          var n = $("<input type='checkbox' class='visibility-switch'>");
          o = this.addLabeledRow(this._table, $.t('Full Circles'));
          $('<td>').append(n).prependTo(o),
            this.bindControl(
              new l(
                n,
                this._linetool.properties().fullCircles,
                !0,
                this.model(),
                'Change Fib Speed Resistance Arcs Full Cirlces Mode',
              ),
            ),
            (o = $('<tr>')).appendTo(this._table);
          var a = $("<input type='checkbox' class='visibility-switch'>");
          $('<td>').append(a).appendTo(o),
            $('<td>' + $.t('Background') + '</td>').appendTo(o);
          var r = c();
          $('<td colspan="3">').append(r).appendTo(o),
            this.bindControl(
              new l(
                a,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Fib Arcs Background Visibility',
              ),
            ),
            this.bindControl(
              new d(
                r,
                this._linetool.properties().transparency,
                !0,
                this.model(),
                'Change Fib Arcs Background Transparency',
              ),
            ),
            this.loadData();
        }),
        (b.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = b);
    },
    vDrZ: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.BooleanBinder,
        r = n.ColorBinding,
        l = n.SliderBinder;
      function s(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(s, o),
        (s.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2');
          var e = this.createLineWidthEditor(),
            t = this.createColorPicker();
          (n = this.addLabeledRow(this._table, $.t('Border'))).prepend('<td>'),
            $('<td>').append(t).appendTo(n),
            $('<td>').append(e).appendTo(n);
          var i = $('<input type="checkbox" class="visibility-switch">'),
            o = this.createColorPicker(),
            n = this.addLabeledRow(this._table, $.t('Background'), i);
          $('<td>').append(i).prependTo(n),
            $('<td>').append(o).appendTo(n),
            this.bindControl(
              new a(
                i,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Ellipse Filling',
              ),
            ),
            this.bindControl(
              new r(
                t,
                this._linetool.properties().color,
                !0,
                this.model(),
                'Change Ellipse Line Color',
              ),
            ),
            this.bindControl(
              new r(
                o,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Ellipse Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new l(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Ellipse Border Width',
              ),
            ),
            this.loadData();
        }),
        (s.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = s);
    },
    'wt/7': function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.SimpleComboBinder,
        r = n.ColorBinding,
        l = n.SimpleStringBinder,
        s = i('QloM').TabOpenFrom;
      function d(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(d, o),
        (d.prototype.prepareLayout = function () {
          var e = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            )
              .css({ width: '100%' })
              .data('layout-tab-open', s.Override),
            t = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            );
          this._table = e.add(t);
          var i = $("<input type='text'>").css({ width: '100%' }),
            o = this.createColorPicker(),
            n = this.createFontSizeEditor(),
            d = this.createColorPicker(),
            p = this.createColorPicker(),
            h = $('<tr>').appendTo(e),
            c = $('<div class="property-page-fullwidth-wrapper">').append(i);
          $('<td>').append(c).appendTo(h);
          var b = this.addLabeledRow(t, $.t('Text'));
          $('<td>').append(o).appendTo(b), $('<td>').append(n).appendTo(b);
          b = this.addLabeledRow(t, $.t('Background'));
          $('<td>').appendTo(b).append(d);
          b = this.addLabeledRow(t, $.t('Border'));
          $('<td>').appendTo(b).append(p),
            $('<td>'),
            this.bindControl(
              new l(
                i,
                this._linetool.properties().text,
                null,
                !0,
                this.model(),
                'Change Balloon Text',
              ),
            ),
            this.bindControl(
              new r(
                o,
                this._linetool.properties().color,
                !0,
                this.model(),
                'Change Baloon Text Color',
              ),
            ),
            this.bindControl(
              new a(
                n,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Balloon Text Font Size',
              ),
            ),
            this.bindControl(
              new r(
                d,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Balloon Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new r(
                p,
                this._linetool.properties().borderColor,
                !0,
                this.model(),
                'Change Balloon Border Color',
              ),
            ),
            this.loadData(),
            setTimeout(function () {
              i.select(), i.focus();
            }, 0);
        }),
        (d.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = d);
    },
    xj4C: function (e, t, i) {
      'use strict';
      var o = i('k7QS');
      function n(e, t, i) {
        o.call(this, e, t, i);
      }
      inherit(n, o), (e.exports = n);
    },
    'y/RR': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'createTransparencyEditor', function () {
          return o;
        });
      i('P5fv'), i('QBwY');
      function o(e) {
        var t = $(
            '<div class="transparency-slider"><div class="gradient"></div></div>',
          ).slider({ max: 100, min: 0, step: 1 }),
          i = [
            '-moz-linear-gradient(left, %COLOR 0%, transparent 100%)',
            '-webkit-gradient(linear, left top, right top, color-stop(0%,%COLOR), color-stop(100%,transparent))',
            '-webkit-linear-gradient(left, %COLOR 0%,transparent 100%)',
            '-o-linear-gradient(left, %COLOR 0%,transparent 100%)',
            'linear-gradient(to right, %COLOR 0%,transparent 100%)',
          ];
        return (
          (t.updateColor = function (e) {
            var o = t.find('.gradient');
            i.forEach(function (t) {
              o.css('background-image', t.replace(/%COLOR/, e));
            });
          }),
          e
            ? (t.updateColor(e.val() || 'black'),
              e.on('change', function (e) {
                t.updateColor(e.target.value);
              }))
            : t.updateColor('black'),
          t
        );
      }
    },
    'y1L/': function (e, t, i) {},
    y4lV: function (e, t, i) {
      'use strict';
      var o = i('L9lC').StudyInputsPropertyPage;
      function n(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(n, o),
        (n.prototype.prepareControl = function (e, t, i) {
          if ('source' === e.id) {
            var n = this.createKeyCombo({
              open: $.t('Open'),
              high: $.t('High'),
              low: $.t('Low'),
              close: $.t('Close'),
            });
            return (
              n.appendTo(t),
              { valueEditor: n, valueSetter: null, propertyChangedHook: null }
            );
          }
          return o.prototype.prepareControl.call(this, e, t, i);
        }),
        (n.prototype._sortInputs = function (e) {
          var t = e.filter(function (e) {
              return 'symbol' === e.id;
            }),
            i = e.filter(function (e) {
              return 'symbol' !== e.id;
            });
          return t.concat(i);
        }),
        (e.exports = n);
    },
    y9kM: function (e, t, i) {
      'use strict';
      var o = i('04K5'),
        n = i('DxCR'),
        a = n.PropertyPage,
        r = n.BooleanBinder,
        l = n.SimpleComboBinder,
        s = i('o6hY').StudyStylesPropertyPage,
        d = i('dfhE');
      function p(e, t, i) {
        a.call(this, e, t), (this._study = i), this.prepareLayout();
      }
      inherit(p, o),
        (p.prototype._isJapaneseChartsAvailable = function () {
          return !1;
        }),
        (p.prototype._isHiLoChartsAvailable = function () {
          return !1;
        }),
        (p.prototype._isShowStyleSwitcher = function () {
          return !0;
        }),
        (p.prototype.prepareLayout = function () {
          var e = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            ),
            t = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            ),
            i = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            ),
            o = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            ),
            n = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            ),
            a = this._study.properties();
          this._prepareSeriesStyleLayout(e, t, i, a),
            (this._table = e.add(t).add(i).add(o).add(n));
          var d = $('<input type="checkbox">'),
            p = this.addLabeledRow(o, 'Price Line', d);
          $('<td>').append(d).prependTo(p),
            this.bindControl(
              new r(
                d,
                a.showPriceLine,
                !0,
                this.model(),
                'Change Price Price Line',
              ),
            );
          var h = this.createSeriesMinTickEditor(),
            c = $('<tr>');
          c.appendTo(n),
            $('<td>' + $.t('Override Min Tick') + '</td>').appendTo(c),
            $('<td>').append(h).appendTo(c),
            this.bindControl(
              new l(h, a.minTick, null, !0, this.model(), 'Change MinTick'),
            ),
            s.prototype._putStudyDefaultStyles.call(this, n);
        }),
        (p.prototype.loadData = function () {
          o.prototype.loadData.call(this), this.switchStyle();
        }),
        (p.prototype.switchStyle = function () {
          switch (
            ($(this._barsTbody)
              .add(this._barsColorerTbody)
              .add(this._candlesTbody)
              .add(this._candlesColorerTbody)
              .add(this._hollowCandlesTbody)
              .add(this._lineTbody)
              .add(this._areaTbody)
              .add(this._baselineTbody)
              .css('display', 'none'),
            this._study.properties().style.value())
          ) {
            case d.STYLE_BARS:
              this._barsTbody.css('display', 'table-row-group'),
                this._barsColorerTbody.css('display', 'table-row-group');
              break;
            case d.STYLE_CANDLES:
              this._candlesTbody.css('display', 'table-row-group'),
                this._candlesColorerTbody.css('display', 'table-row-group');
              break;
            case d.STYLE_HOLLOW_CANDLES:
              this._hollowCandlesTbody.css('display', 'table-row-group');
              break;
            case d.STYLE_LINE:
              this._lineTbody.css('display', 'table-row-group');
              break;
            case d.STYLE_AREA:
              this._areaTbody.css('display', 'table-row-group');
              break;
            case d.STYLE_BASELINE:
              this._baselineTbody.css('display', 'table-row-group');
          }
        }),
        (p.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = p);
    },
    ytZH: function (e, t, i) {
      'use strict';
      var o = i('Yc1q'),
        n = i('DxCR'),
        a = n.SimpleComboBinder,
        r = n.ColorBinding,
        l = n.BooleanBinder,
        s = n.SliderBinder;
      function d(e, t, i) {
        o.call(this, e, t, i), this.prepareLayout();
      }
      inherit(d, o),
        (d.prototype.prepareLayout = function () {
          this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          );
          var e = $('<tbody>').appendTo(this._table),
            t = this.createLineWidthEditor(),
            i = this.createColorPicker(),
            o = this.addLabeledRow(e, $.t('Line'));
          $('<td>').prependTo(o),
            $('<td>').append(i).appendTo(o),
            $('<td>').append(t).appendTo(o);
          var n = this.createColorPicker(),
            d = this.createColorPicker(),
            p = this.createFontSizeEditor(),
            h = this.createFontEditor(),
            c = this.createColorPicker(),
            b = $('<input type="checkbox" class="visibility-switch">'),
            u = this.createColorPicker(),
            C = $('<input type="checkbox" class="visibility-switch">');
          this.bindControl(
            new r(
              n,
              this._linetool.properties().textcolor,
              !0,
              this.model(),
              'Change Text Color',
            ),
          ),
            this.bindControl(
              new a(
                p,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new a(
                h,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Text Font',
              ),
            ),
            this.bindControl(
              new r(
                c,
                this._linetool.properties().labelBackgroundColor,
                !0,
                this.model(),
                'Change Text Background',
              ),
            ),
            this.bindControl(
              new l(
                b,
                this._linetool.properties().fillLabelBackground,
                !0,
                this.model(),
                'Change Text Background Fill',
              ),
            ),
            this.bindControl(
              new r(
                u,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Text Background',
              ),
            ),
            this.bindControl(
              new l(
                C,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Text Background Fill',
              ),
            ),
            this.bindControl(
              new r(
                d,
                this._linetool.properties().borderColor,
                !0,
                this.model(),
                'Change Text Border Color',
              ),
            );
          var y = this.addLabeledRow(e, $.t('Background'), C);
          $('<td>').append(C).prependTo(y), $('<td>').append(u).appendTo(y);
          var g = this.addLabeledRow(e, $.t('Label'));
          $('<td>').prependTo(g),
            $('<td>').append(n).appendTo(g),
            $('<td>').append(h).appendTo(g),
            $('<td>').append(p).appendTo(g);
          y = this.addLabeledRow(e, $.t('Label Background'), b);
          $('<td>').append(b).prependTo(y),
            $('<td>').append(c).appendTo(y),
            this.bindControl(
              new r(
                i,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Date Range Color',
              ),
            ),
            this.bindControl(
              new s(
                t,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Date Range Line Width',
              ),
            ),
            this.loadData();
        }),
        (d.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = d);
    },
  },
]);
