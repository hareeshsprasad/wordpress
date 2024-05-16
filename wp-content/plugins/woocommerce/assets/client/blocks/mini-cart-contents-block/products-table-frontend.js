(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [4097],
  {
    8470: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => W });
      var c = r(9196),
        a = r(9659),
        n = r(7608),
        l = r.n(n),
        o = r(5736),
        s = r(9307),
        i = r(5158),
        m = r(9630),
        u = r(2600);
      r(8968);
      const p = ({
        className: e,
        quantity: t = 1,
        minimum: r = 1,
        maximum: a,
        onChange: n = () => {},
        step: p = 1,
        itemName: d = "",
        disabled: _,
      }) => {
        const y = l()("wc-block-components-quantity-selector", e),
          b = (0, s.useRef)(null),
          k = (0, s.useRef)(null),
          E = (0, s.useRef)(null),
          f = void 0 !== a,
          w = !_ && t - p >= r,
          g = !_ && (!f || t + p <= a),
          N = (0, s.useCallback)(
            (e) => {
              let t = e;
              f && (t = Math.min(t, Math.floor(a / p) * p)),
                (t = Math.max(t, Math.ceil(r / p) * p)),
                (t = Math.floor(t / p) * p),
                t !== e && n(t);
            },
            [f, a, r, n, p]
          ),
          v = (0, u.y1)(N, 300);
        (0, s.useLayoutEffect)(() => {
          N(t);
        }, [t, N]);
        const h = (0, s.useCallback)(
          (e) => {
            const r =
                void 0 !== typeof e.key
                  ? "ArrowDown" === e.key
                  : e.keyCode === m.DOWN,
              c =
                void 0 !== typeof e.key
                  ? "ArrowUp" === e.key
                  : e.keyCode === m.UP;
            r && w && (e.preventDefault(), n(t - p)),
              c && g && (e.preventDefault(), n(t + p));
          },
          [t, n, g, w, p]
        );
        return (0, c.createElement)(
          "div",
          { className: y },
          (0, c.createElement)("input", {
            ref: b,
            className: "wc-block-components-quantity-selector__input",
            disabled: _,
            type: "number",
            step: p,
            min: r,
            max: a,
            value: t,
            onKeyDown: h,
            onChange: (e) => {
              let r = parseInt(e.target.value, 10);
              (r = isNaN(r) ? t : r), r !== t && (n(r), v(r));
            },
            "aria-label": (0, o.sprintf)(
              /* translators: %s refers to the item name in the cart. */ /* translators: %s refers to the item name in the cart. */
              (0, o.__)("Quantity of %s in your cart.", "woocommerce"),
              d
            ),
          }),
          (0, c.createElement)(
            "button",
            {
              ref: k,
              "aria-label": (0, o.sprintf)(
                /* translators: %s refers to the item name in the cart. */ /* translators: %s refers to the item name in the cart. */
                (0, o.__)("Reduce quantity of %s", "woocommerce"),
                d
              ),
              className:
                "wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--minus",
              disabled: !w,
              onClick: () => {
                const e = t - p;
                n(e),
                  (0, i.speak)(
                    (0, o.sprintf)(
                      /* translators: %s refers to the item's new quantity in the cart. */ /* translators: %s refers to the item's new quantity in the cart. */
                      (0, o.__)("Quantity reduced to %s.", "woocommerce"),
                      e
                    )
                  ),
                  N(e);
              },
            },
            "－"
          ),
          (0, c.createElement)(
            "button",
            {
              ref: E,
              "aria-label": (0, o.sprintf)(
                /* translators: %s refers to the item's name in the cart. */ /* translators: %s refers to the item's name in the cart. */
                (0, o.__)("Increase quantity of %s", "woocommerce"),
                d
              ),
              disabled: !g,
              className:
                "wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--plus",
              onClick: () => {
                const e = t + p;
                n(e),
                  (0, i.speak)(
                    (0, o.sprintf)(
                      /* translators: %s refers to the item's new quantity in the cart. */ /* translators: %s refers to the item's new quantity in the cart. */
                      (0, o.__)("Quantity increased to %s.", "woocommerce"),
                      e
                    )
                  ),
                  N(e);
              },
            },
            "＋"
          )
        );
      };
      var d = r(711),
        _ = r(4293);
      r(5437);
      const y = ({
          currency: e,
          maxPrice: t,
          minPrice: r,
          priceClassName: a,
          priceStyle: n = {},
        }) =>
          (0, c.createElement)(
            c.Fragment,
            null,
            (0, c.createElement)(
              "span",
              { className: "screen-reader-text" },
              (0, o.sprintf)(
                /* translators: %1$s min price, %2$s max price */ /* translators: %1$s min price, %2$s max price */
                (0, o.__)("Price between %1$s and %2$s", "woocommerce"),
                (0, _.formatPrice)(r),
                (0, _.formatPrice)(t)
              )
            ),
            (0, c.createElement)(
              "span",
              { "aria-hidden": !0 },
              (0, c.createElement)(d.FormattedMonetaryAmount, {
                className: l()("wc-block-components-product-price__value", a),
                currency: e,
                value: r,
                style: n,
              }),
              " — ",
              (0, c.createElement)(d.FormattedMonetaryAmount, {
                className: l()("wc-block-components-product-price__value", a),
                currency: e,
                value: t,
                style: n,
              })
            )
          ),
        b = ({
          currency: e,
          regularPriceClassName: t,
          regularPriceStyle: r,
          regularPrice: a,
          priceClassName: n,
          priceStyle: s,
          price: i,
        }) =>
          (0, c.createElement)(
            c.Fragment,
            null,
            (0, c.createElement)(
              "span",
              { className: "screen-reader-text" },
              (0, o.__)("Previous price:", "woocommerce")
            ),
            (0, c.createElement)(d.FormattedMonetaryAmount, {
              currency: e,
              renderText: (e) =>
                (0, c.createElement)(
                  "del",
                  {
                    className: l()(
                      "wc-block-components-product-price__regular",
                      t
                    ),
                    style: r,
                  },
                  e
                ),
              value: a,
            }),
            (0, c.createElement)(
              "span",
              { className: "screen-reader-text" },
              (0, o.__)("Discounted price:", "woocommerce")
            ),
            (0, c.createElement)(d.FormattedMonetaryAmount, {
              currency: e,
              renderText: (e) =>
                (0, c.createElement)(
                  "ins",
                  {
                    className: l()(
                      "wc-block-components-product-price__value",
                      "is-discounted",
                      n
                    ),
                    style: s,
                  },
                  e
                ),
              value: i,
            })
          ),
        k = ({
          align: e,
          className: t,
          currency: r,
          format: a = "<price/>",
          maxPrice: n,
          minPrice: o,
          price: i,
          priceClassName: m,
          priceStyle: u,
          regularPrice: p,
          regularPriceClassName: _,
          regularPriceStyle: k,
          style: E,
        }) => {
          const f = l()(t, "price", "wc-block-components-product-price", {
            [`wc-block-components-product-price--align-${e}`]: e,
          });
          a.includes("<price/>") ||
            ((a = "<price/>"),
            console.error("Price formats need to include the `<price/>` tag."));
          const w = p && i && i < p;
          let g = (0, c.createElement)("span", {
            className: l()("wc-block-components-product-price__value", m),
          });
          return (
            w
              ? (g = (0, c.createElement)(b, {
                  currency: r,
                  price: i,
                  priceClassName: m,
                  priceStyle: u,
                  regularPrice: p,
                  regularPriceClassName: _,
                  regularPriceStyle: k,
                }))
              : void 0 !== o && void 0 !== n
              ? (g = (0, c.createElement)(y, {
                  currency: r,
                  maxPrice: n,
                  minPrice: o,
                  priceClassName: m,
                  priceStyle: u,
                }))
              : i &&
                (g = (0, c.createElement)(d.FormattedMonetaryAmount, {
                  className: l()("wc-block-components-product-price__value", m),
                  currency: r,
                  value: i,
                  style: u,
                })),
            (0, c.createElement)(
              "span",
              { className: f, style: E },
              (0, s.createInterpolateElement)(a, { price: g })
            )
          );
        };
      var E = r(2629);
      r(333);
      const f = ({
        className: e = "",
        disabled: t = !1,
        name: r,
        permalink: a = "",
        target: n,
        rel: o,
        style: s,
        onClick: i,
        ...m
      }) => {
        const u = l()("wc-block-components-product-name", e);
        if (t) {
          const e = m;
          return (0, c.createElement)("span", {
            className: u,
            ...e,
            dangerouslySetInnerHTML: { __html: (0, E.decodeEntities)(r) },
          });
        }
        return (0, c.createElement)("a", {
          className: u,
          href: a,
          target: n,
          ...m,
          dangerouslySetInnerHTML: { __html: (0, E.decodeEntities)(r) },
          style: s,
        });
      };
      var w = r(9818),
        g = r(4801),
        N = r(6946);
      var v = r(2694),
        h = r(3554),
        C = r(1064),
        P = r(4617);
      r(2930);
      const x = ({ children: e, className: t }) =>
          (0, c.createElement)(
            "div",
            { className: l()("wc-block-components-product-badge", t) },
            e
          ),
        I = () =>
          (0, c.createElement)(
            x,
            { className: "wc-block-components-product-backorder-badge" },
            (0, o.__)("Available on backorder", "woocommerce")
          ),
        q = ({ image: e = {}, fallbackAlt: t = "" }) => {
          const r = e.thumbnail
            ? {
                src: e.thumbnail,
                alt: (0, E.decodeEntities)(e.alt) || t || "Product Image",
              }
            : { src: P.PLACEHOLDER_IMG_SRC, alt: "" };
          return (0, c.createElement)("img", { ...r, alt: r.alt });
        },
        R = ({ lowStockRemaining: e }) =>
          e
            ? (0, c.createElement)(
                x,
                { className: "wc-block-components-product-low-stock-badge" },
                (0, o.sprintf)(
                  /* translators: %d stock amount (number of items in stock for product) */ /* translators: %d stock amount (number of items in stock for product) */
                  (0, o.__)("%d left in stock", "woocommerce"),
                  e
                )
              )
            : null;
      var D = r(7427);
      r(3804);
      const A = ({ details: e = [] }) =>
        Array.isArray(e)
          ? 0 === (e = e.filter((e) => !e.hidden)).length
            ? null
            : (0, c.createElement)(
                "ul",
                { className: "wc-block-components-product-details" },
                e.map((e) => {
                  const t = (null == e ? void 0 : e.key) || e.name || "",
                    r =
                      (null == e ? void 0 : e.className) ||
                      (t
                        ? `wc-block-components-product-details__${(0, D.o)(t)}`
                        : "");
                  return (0, c.createElement)(
                    "li",
                    { key: t + (e.display || e.value), className: r },
                    t &&
                      (0, c.createElement)(
                        c.Fragment,
                        null,
                        (0, c.createElement)(
                          "span",
                          {
                            className:
                              "wc-block-components-product-details__name",
                          },
                          (0, E.decodeEntities)(t),
                          ":"
                        ),
                        " "
                      ),
                    (0, c.createElement)(
                      "span",
                      {
                        className: "wc-block-components-product-details__value",
                      },
                      (0, E.decodeEntities)(e.display || e.value)
                    )
                  );
                })
              )
          : null;
      var S = r(987);
      const F = (e) => e.replace(/<\/?[a-z][^>]*?>/gi, ""),
        M = (e, t) => e.replace(/[\s|\.\,]+$/i, "") + t;
      var T = r(5266);
      const L = ({
        source: e,
        maxLength: t = 15,
        countType: r = "words",
        className: a = "",
        style: n = {},
      }) => {
        const l = (0, s.useMemo)(
          () =>
            ((e, t = 15, r = "words") => {
              const c = (0, S.autop)(e);
              if ((0, T.count)(c, r) <= t) return c;
              const a = ((e) => {
                const t = e.indexOf("</p>");
                return -1 === t ? e : e.substr(0, t + 4);
              })(c);
              return (0, T.count)(a, r) <= t
                ? a
                : "words" === r
                ? ((e, t, r = "&hellip;", c = !0) => {
                    const a = F(e),
                      n = a.split(" ").splice(0, t).join(" ");
                    return n === a
                      ? c
                        ? (0, S.autop)(a)
                        : a
                      : c
                      ? (0, S.autop)(M(n, r))
                      : M(n, r);
                  })(a, t)
                : ((e, t, r = !0, c = "&hellip;", a = !0) => {
                    const n = F(e),
                      l = n.slice(0, t);
                    if (l === n) return a ? (0, S.autop)(n) : n;
                    if (r) return (0, S.autop)(M(l, c));
                    const o = l.match(/([\s]+)/g),
                      s = o ? o.length : 0,
                      i = n.slice(0, t + s);
                    return a ? (0, S.autop)(M(i, c)) : M(i, c);
                  })(a, t, "characters_including_spaces" === r);
            })(e, t, r),
          [e, t, r]
        );
        return (0, c.createElement)(s.RawHTML, { style: n, className: a }, l);
      };
      var $ = r(8752);
      const H = ({
        className: e,
        shortDescription: t = "",
        fullDescription: r = "",
      }) => {
        const a = t || r;
        return a
          ? (0, c.createElement)(L, {
              className: e,
              source: a,
              maxLength: 15,
              countType: $.Cm.wordCountType || "words",
            })
          : null;
      };
      r(6021);
      const V = ({
          shortDescription: e = "",
          fullDescription: t = "",
          itemData: r = [],
          variation: a = [],
        }) =>
          (0, c.createElement)(
            "div",
            { className: "wc-block-components-product-metadata" },
            (0, c.createElement)(H, {
              className: "wc-block-components-product-metadata__description",
              shortDescription: e,
              fullDescription: t,
            }),
            (0, c.createElement)(A, { details: r }),
            (0, c.createElement)(A, {
              details: a.map(({ attribute: e = "", value: t }) => ({
                key: e,
                value: t,
              })),
            })
          ),
        O = ({ currency: e, saleAmount: t, format: r = "<price/>" }) => {
          if (!t || t <= 0) return null;
          r.includes("<price/>") ||
            ((r = "<price/>"),
            console.error("Price formats need to include the `<price/>` tag."));
          const a = (0, o.sprintf)(
            /* translators: %s will be replaced by the discount amount */ /* translators: %s will be replaced by the discount amount */
            (0, o.__)("Save %s", "woocommerce"),
            r
          );
          return (0, c.createElement)(
            x,
            { className: "wc-block-components-sale-badge" },
            (0, s.createInterpolateElement)(a, {
              price: (0, c.createElement)(d.FormattedMonetaryAmount, {
                currency: e,
                value: t,
              }),
            })
          );
        },
        Q = (e, t) => e.convertPrecision(t.minorUnit).getAmount(),
        U = (0, s.forwardRef)(
          ({ lineItem: e, onRemove: t = () => {}, tabIndex: r }, n) => {
            const {
                name: m = "",
                catalog_visibility: d = "visible",
                short_description: y = "",
                description: b = "",
                low_stock_remaining: E = null,
                show_backorder_badge: x = !1,
                quantity_limits: D = {
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                  editable: !0,
                },
                sold_individually: A = !1,
                permalink: S = "",
                images: F = [],
                variation: M = [],
                item_data: T = [],
                prices: L = {
                  currency_code: "USD",
                  currency_minor_unit: 2,
                  currency_symbol: "$",
                  currency_prefix: "$",
                  currency_suffix: "",
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  price: "0",
                  regular_price: "0",
                  sale_price: "0",
                  price_range: null,
                  raw_prices: {
                    precision: 6,
                    price: "0",
                    regular_price: "0",
                    sale_price: "0",
                  },
                },
                totals: $ = {
                  currency_code: "USD",
                  currency_minor_unit: 2,
                  currency_symbol: "$",
                  currency_prefix: "$",
                  currency_suffix: "",
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  line_subtotal: "0",
                  line_subtotal_tax: "0",
                },
                extensions: H,
              } = e,
              {
                quantity: U,
                setItemQuantity: j,
                removeItem: K,
                isPendingDelete: B,
              } = ((e) => {
                const t = { key: "", quantity: 1 };
                ((e) =>
                  (0, N.isObject)(e) &&
                  (0, N.objectHasProp)(e, "key") &&
                  (0, N.objectHasProp)(e, "quantity") &&
                  (0, N.isString)(e.key) &&
                  (0, N.isNumber)(e.quantity))(e) &&
                  ((t.key = e.key), (t.quantity = e.quantity));
                const { key: r = "", quantity: c = 1 } = t,
                  { cartErrors: n } = (0, a.b)(),
                  {
                    __internalIncrementCalculating: l,
                    __internalDecrementCalculating: o,
                  } = (0, w.useDispatch)(g.CHECKOUT_STORE_KEY),
                  [i, m] = (0, s.useState)(c),
                  [p] = (0, u.Nr)(i, 400),
                  d = (function (e, t) {
                    const r = (0, s.useRef)();
                    return (
                      (0, s.useEffect)(() => {
                        r.current === e || (r.current = e);
                      }, [e, t]),
                      r.current
                    );
                  })(p),
                  { removeItemFromCart: _, changeCartItemQuantity: y } = (0,
                  w.useDispatch)(g.CART_STORE_KEY);
                (0, s.useEffect)(() => m(c), [c]);
                const b = (0, w.useSelect)(
                    (e) => {
                      if (!r) return { quantity: !1, delete: !1 };
                      const t = e(g.CART_STORE_KEY);
                      return {
                        quantity: t.isItemPendingQuantity(r),
                        delete: t.isItemPendingDelete(r),
                      };
                    },
                    [r]
                  ),
                  k = (0, s.useCallback)(
                    () =>
                      r
                        ? _(r).catch((e) => {
                            (0, g.processErrorResponse)(e);
                          })
                        : Promise.resolve(!1),
                    [r, _]
                  );
                return (
                  (0, s.useEffect)(() => {
                    r &&
                      (0, N.isNumber)(d) &&
                      Number.isFinite(d) &&
                      d !== p &&
                      y(r, p).catch((e) => {
                        (0, g.processErrorResponse)(e);
                      });
                  }, [r, y, p, d]),
                  (0, s.useEffect)(
                    () => (
                      b.delete ? l() : o(),
                      () => {
                        b.delete && o();
                      }
                    ),
                    [o, l, b.delete]
                  ),
                  (0, s.useEffect)(
                    () => (
                      b.quantity || p !== i ? l() : o(),
                      () => {
                        (b.quantity || p !== i) && o();
                      }
                    ),
                    [l, o, b.quantity, p, i]
                  ),
                  {
                    isPendingDelete: b.delete,
                    quantity: i,
                    setItemQuantity: m,
                    removeItem: k,
                    cartItemQuantityErrors: n,
                  }
                );
              })(e),
              { dispatchStoreEvent: W } = {
                dispatchStoreEvent: (0, s.useCallback)((e, t = {}) => {
                  try {
                    (0, v.doAction)(`experimental__woocommerce_blocks-${e}`, t);
                  } catch (e) {
                    console.error(e);
                  }
                }, []),
                dispatchCheckoutEvent: (0, s.useCallback)((e, t = {}) => {
                  try {
                    (0, v.doAction)(
                      `experimental__woocommerce_blocks-checkout-${e}`,
                      {
                        ...t,
                        storeCart: (0, w.select)("wc/store/cart").getCartData(),
                      }
                    );
                  } catch (e) {
                    console.error(e);
                  }
                }, []),
              },
              { receiveCart: Y, ...Z } = (0, a.b)(),
              J = (0, s.useMemo)(
                () => ({ context: "cart", cartItem: e, cart: Z }),
                [e, Z]
              ),
              z = (0, _.getCurrencyFromPriceResponse)(L),
              G = (0, h.applyCheckoutFilter)({
                filterName: "itemName",
                defaultValue: m,
                extensions: H,
                arg: J,
              }),
              X = (0, C.Z)({
                amount: parseInt(L.raw_prices.regular_price, 10),
                precision: L.raw_prices.precision,
              }),
              ee = (0, C.Z)({
                amount: parseInt(L.raw_prices.price, 10),
                precision: L.raw_prices.precision,
              }),
              te = X.subtract(ee),
              re = te.multiply(U),
              ce = (0, _.getCurrencyFromPriceResponse)($);
            let ae = parseInt($.line_subtotal, 10);
            (0, P.getSetting)("displayCartPricesIncludingTax", !1) &&
              (ae += parseInt($.line_subtotal_tax, 10));
            const ne = (0, C.Z)({ amount: ae, precision: ce.minorUnit }),
              le = F.length ? F[0] : {},
              oe = "hidden" === d || "search" === d,
              se = (0, h.applyCheckoutFilter)({
                filterName: "cartItemClass",
                defaultValue: "",
                extensions: H,
                arg: J,
              }),
              ie = (0, h.applyCheckoutFilter)({
                filterName: "cartItemPrice",
                defaultValue: "<price/>",
                extensions: H,
                arg: J,
                validation: h.productPriceValidation,
              }),
              me = (0, h.applyCheckoutFilter)({
                filterName: "subtotalPriceFormat",
                defaultValue: "<price/>",
                extensions: H,
                arg: J,
                validation: h.productPriceValidation,
              }),
              ue = (0, h.applyCheckoutFilter)({
                filterName: "saleBadgePriceFormat",
                defaultValue: "<price/>",
                extensions: H,
                arg: J,
                validation: h.productPriceValidation,
              }),
              pe = (0, h.applyCheckoutFilter)({
                filterName: "showRemoveItemLink",
                defaultValue: !0,
                extensions: H,
                arg: J,
              });
            return (0, c.createElement)(
              "tr",
              {
                className: l()("wc-block-cart-items__row", se, {
                  "is-disabled": B,
                }),
                ref: n,
                tabIndex: r,
              },
              (0, c.createElement)(
                "td",
                {
                  className: "wc-block-cart-item__image",
                  "aria-hidden": !(0, N.objectHasProp)(le, "alt") || !le.alt,
                },
                oe
                  ? (0, c.createElement)(q, { image: le, fallbackAlt: G })
                  : (0, c.createElement)(
                      "a",
                      { href: S, tabIndex: -1 },
                      (0, c.createElement)(q, { image: le, fallbackAlt: G })
                    )
              ),
              (0, c.createElement)(
                "td",
                { className: "wc-block-cart-item__product" },
                (0, c.createElement)(
                  "div",
                  { className: "wc-block-cart-item__wrap" },
                  (0, c.createElement)(f, {
                    disabled: B || oe,
                    name: G,
                    permalink: S,
                  }),
                  x
                    ? (0, c.createElement)(I, null)
                    : !!E && (0, c.createElement)(R, { lowStockRemaining: E }),
                  (0, c.createElement)(
                    "div",
                    { className: "wc-block-cart-item__prices" },
                    (0, c.createElement)(k, {
                      currency: z,
                      regularPrice: Q(X, z),
                      price: Q(ee, z),
                      format: me,
                    })
                  ),
                  (0, c.createElement)(O, {
                    currency: z,
                    saleAmount: Q(te, z),
                    format: ue,
                  }),
                  (0, c.createElement)(V, {
                    shortDescription: y,
                    fullDescription: b,
                    itemData: T,
                    variation: M,
                  }),
                  (0, c.createElement)(
                    "div",
                    { className: "wc-block-cart-item__quantity" },
                    !A &&
                      !!D.editable &&
                      (0, c.createElement)(p, {
                        disabled: B,
                        quantity: U,
                        minimum: D.minimum,
                        maximum: D.maximum,
                        step: D.multiple_of,
                        onChange: (t) => {
                          j(t),
                            W("cart-set-item-quantity", {
                              product: e,
                              quantity: t,
                            });
                        },
                        itemName: G,
                      }),
                    pe &&
                      (0, c.createElement)(
                        "button",
                        {
                          className: "wc-block-cart-item__remove-link",
                          "aria-label": (0, o.sprintf)(
                            /* translators: %s refers to the item's name in the cart. */ /* translators: %s refers to the item's name in the cart. */
                            (0, o.__)("Remove %s from cart", "woocommerce"),
                            G
                          ),
                          onClick: () => {
                            t(),
                              K(),
                              W("cart-remove-item", {
                                product: e,
                                quantity: U,
                              }),
                              (0, i.speak)(
                                (0, o.sprintf)(
                                  /* translators: %s refers to the item name in the cart. */ /* translators: %s refers to the item name in the cart. */
                                  (0, o.__)(
                                    "%s has been removed from your cart.",
                                    "woocommerce"
                                  ),
                                  G
                                )
                              );
                          },
                          disabled: B,
                        },
                        (0, o.__)("Remove item", "woocommerce")
                      )
                  )
                )
              ),
              (0, c.createElement)(
                "td",
                { className: "wc-block-cart-item__total" },
                (0, c.createElement)(
                  "div",
                  {
                    className:
                      "wc-block-cart-item__total-price-and-sale-badge-wrapper",
                  },
                  (0, c.createElement)(k, {
                    currency: ce,
                    format: ie,
                    price: ne.getAmount(),
                  }),
                  U > 1 &&
                    (0, c.createElement)(O, {
                      currency: z,
                      saleAmount: Q(re, z),
                      format: ue,
                    })
                )
              )
            );
          }
        );
      r(9510);
      const j = [...Array(3)].map((_x, e) =>
          (0, c.createElement)(U, { lineItem: {}, key: e })
        ),
        K = (e) => {
          const t = {};
          return (
            e.forEach(({ key: e }) => {
              t[e] = (0, s.createRef)();
            }),
            t
          );
        },
        B = ({ lineItems: e = [], isLoading: t = !1, className: r }) => {
          const a = (0, s.useRef)(null),
            n = (0, s.useRef)(K(e));
          (0, s.useEffect)(() => {
            n.current = K(e);
          }, [e]);
          const i = (e) => () => {
              null != n &&
              n.current &&
              e &&
              n.current[e].current instanceof HTMLElement
                ? n.current[e].current.focus()
                : a.current instanceof HTMLElement && a.current.focus();
            },
            m = t
              ? j
              : e.map((t, r) => {
                  const a = e.length > r + 1 ? e[r + 1].key : null;
                  return (0, c.createElement)(U, {
                    key: t.key,
                    lineItem: t,
                    onRemove: i(a),
                    ref: n.current[t.key],
                    tabIndex: -1,
                  });
                });
          return (0, c.createElement)(
            "table",
            { className: l()("wc-block-cart-items", r), ref: a, tabIndex: -1 },
            (0, c.createElement)(
              "thead",
              null,
              (0, c.createElement)(
                "tr",
                { className: "wc-block-cart-items__header" },
                (0, c.createElement)(
                  "th",
                  { className: "wc-block-cart-items__header-image" },
                  (0, c.createElement)(
                    "span",
                    null,
                    (0, o.__)("Product", "woocommerce")
                  )
                ),
                (0, c.createElement)(
                  "th",
                  { className: "wc-block-cart-items__header-product" },
                  (0, c.createElement)(
                    "span",
                    null,
                    (0, o.__)("Details", "woocommerce")
                  )
                ),
                (0, c.createElement)(
                  "th",
                  { className: "wc-block-cart-items__header-total" },
                  (0, c.createElement)(
                    "span",
                    null,
                    (0, o.__)("Total", "woocommerce")
                  )
                )
              )
            ),
            (0, c.createElement)("tbody", null, m)
          );
        },
        W = ({ className: e }) => {
          const { cartItems: t, cartIsLoading: r } = (0, a.b)();
          return (0, c.createElement)(
            "div",
            { className: l()(e, "wc-block-mini-cart__products-table") },
            (0, c.createElement)(B, {
              lineItems: t,
              isLoading: r,
              className: "wc-block-mini-cart-items",
            })
          );
        };
    },
    9510: () => {},
    2930: () => {},
    3804: () => {},
    6021: () => {},
    333: () => {},
    5437: () => {},
    8968: () => {},
  },
]);
