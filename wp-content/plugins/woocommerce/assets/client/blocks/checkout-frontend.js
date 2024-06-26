var wc;
(() => {
  var e,
    t,
    r,
    o = {
      5969: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => l });
        var o = r(4617),
          s = r(5736),
          c = r(6946),
          a = r(8752);
        const n = (e) => {
            const t = {};
            return (
              void 0 !== e.label && (t.label = e.label),
              void 0 !== e.required && (t.required = e.required),
              void 0 !== e.hidden && (t.hidden = e.hidden),
              void 0 === e.label ||
                e.optionalLabel ||
                (t.optionalLabel = (0, s.sprintf)(
                  /* translators: %s Field label. */ /* translators: %s Field label. */
                  (0, s.__)("%s (optional)", "woocommerce"),
                  e.label
                )),
              e.priority &&
                ((0, c.isNumber)(e.priority) && (t.index = e.priority),
                (0, c.isString)(e.priority) &&
                  (t.index = parseInt(e.priority, 10))),
              e.hidden && (t.required = !1),
              t
            );
          },
          i = Object.entries(a.vr)
            .map(([e, t]) => [
              e,
              Object.entries(t)
                .map(([e, t]) => [e, n(t)])
                .reduce((e, [t, r]) => ((e[t] = r), e), {}),
            ])
            .reduce((e, [t, r]) => ((e[t] = r), e), {}),
          l = (e, t, r = "") => {
            const s = r && void 0 !== i[r] ? i[r] : {};
            return e
              .map((e) => ({
                key: e,
                ...(o.defaultFields[e] || {}),
                ...(s[e] || {}),
                ...(t[e] || {}),
              }))
              .sort((e, t) => e.index - t.index);
          };
      },
      7731: (e, t, r) => {
        "use strict";
        r.d(t, { CN: () => c, KR: () => a, iG: () => n });
        var o = r(4617),
          s = r(7865);
        const c = (e) => e.some((e) => e.shipping_rates.length),
          a = (e) =>
            (0, o.getSetting)("displayCartPricesIncludingTax", !1)
              ? parseInt(e.total_shipping, 10) +
                parseInt(e.total_shipping_tax, 10)
              : parseInt(e.total_shipping, 10),
          n = (e, t, r) =>
            !e ||
            (!t &&
              r.some(
                (e) => !e.shipping_rates.some((e) => !(0, s.Ep)(e.method_id))
              ));
      },
      9401: (e, t, r) => {
        "use strict";
        r.d(t, { m: () => s });
        var o = r(6009);
        const s =
          (e, t) =>
          (r, s = 10) => {
            const c = o.Nw.addEventCallback(e, r, s);
            return (
              t(c),
              () => {
                t(o.Nw.removeEventCallback(e, c.id));
              }
            );
          };
      },
      3156: (e, t, r) => {
        "use strict";
        r.d(t, { K: () => s });
        var o = r(8027);
        r(6946);
        const s = async (e, t, r) => {
          const s = (0, o.Xj)(e, t),
            c = [];
          for (const e of s)
            try {
              const t = await Promise.resolve(e.callback(r));
              "object" == typeof t && c.push(t);
            } catch (e) {
              console.error(e);
            }
          return !c.length || c;
        };
      },
      6009: (e, t, r) => {
        "use strict";
        r.d(t, { Nw: () => s, I6: () => a });
        let o = (function (e) {
          return (
            (e.ADD_EVENT_CALLBACK = "add_event_callback"),
            (e.REMOVE_EVENT_CALLBACK = "remove_event_callback"),
            e
          );
        })({});
        const s = {
            addEventCallback: (e, t, r = 10) => ({
              id: Math.floor(Math.random() * Date.now()).toString(),
              type: o.ADD_EVENT_CALLBACK,
              eventType: e,
              callback: t,
              priority: r,
            }),
            removeEventCallback: (e, t) => ({
              id: t,
              type: o.REMOVE_EVENT_CALLBACK,
              eventType: e,
            }),
          },
          c = {},
          a = (
            e = c,
            { type: t, eventType: r, id: s, callback: a, priority: n }
          ) => {
            const i = e.hasOwnProperty(r) ? new Map(e[r]) : new Map();
            switch (t) {
              case o.ADD_EVENT_CALLBACK:
                return i.set(s, { priority: n, callback: a }), { ...e, [r]: i };
              case o.REMOVE_EVENT_CALLBACK:
                return i.delete(s), { ...e, [r]: i };
            }
          };
      },
      8027: (e, t, r) => {
        "use strict";
        r.d(t, { Xj: () => o, dO: () => s, n7: () => c }), r(6946);
        const o = (e, t) =>
          e[t]
            ? Array.from(e[t].values()).sort((e, t) => e.priority - t.priority)
            : [];
        let s = (function (e) {
            return (
              (e.SUCCESS = "success"),
              (e.FAIL = "failure"),
              (e.ERROR = "error"),
              e
            );
          })({}),
          c = (function (e) {
            return (
              (e.CART = "wc/cart"),
              (e.CHECKOUT = "wc/checkout"),
              (e.PAYMENTS = "wc/checkout/payments"),
              (e.EXPRESS_PAYMENTS = "wc/checkout/express-payments"),
              (e.CONTACT_INFORMATION = "wc/checkout/contact-information"),
              (e.SHIPPING_ADDRESS = "wc/checkout/shipping-address"),
              (e.BILLING_ADDRESS = "wc/checkout/billing-address"),
              (e.SHIPPING_METHODS = "wc/checkout/shipping-methods"),
              (e.CHECKOUT_ACTIONS = "wc/checkout/checkout-actions"),
              (e.ORDER_INFORMATION = "wc/checkout/additional-information"),
              e
            );
          })({});
      },
      9659: (e, t, r) => {
        "use strict";
        r.d(t, { b: () => y });
        var o = r(9262),
          s = r.n(o),
          c = r(9307),
          a = r(4801),
          n = r(9818),
          i = r(2629),
          l = r(9040),
          u = r(8449);
        var m = r(2592);
        const p = (e) => {
            const t = null == e ? void 0 : e.detail;
            (t && t.preserveCartData) ||
              (0, n.dispatch)(a.CART_STORE_KEY).invalidateResolutionForStore();
          },
          d = (e) => {
            ((null != e && e.persisted) ||
              "back_forward" ===
                (window.performance &&
                window.performance.getEntriesByType("navigation").length
                  ? window.performance.getEntriesByType("navigation")[0].type
                  : "")) &&
              (0, n.dispatch)(a.CART_STORE_KEY).invalidateResolutionForStore();
          },
          _ = () => {
            1 === window.wcBlocksStoreCartListeners.count &&
              window.wcBlocksStoreCartListeners.remove(),
              window.wcBlocksStoreCartListeners.count--;
          },
          h = {
            first_name: "",
            last_name: "",
            company: "",
            address_1: "",
            address_2: "",
            city: "",
            state: "",
            postcode: "",
            country: "",
            phone: "",
          },
          g = { ...h, email: "" },
          k = {
            total_items: "",
            total_items_tax: "",
            total_fees: "",
            total_fees_tax: "",
            total_discount: "",
            total_discount_tax: "",
            total_shipping: "",
            total_shipping_tax: "",
            total_price: "",
            total_tax: "",
            tax_lines: a.EMPTY_TAX_LINES,
            currency_code: "",
            currency_symbol: "",
            currency_minor_unit: 2,
            currency_decimal_separator: "",
            currency_thousand_separator: "",
            currency_prefix: "",
            currency_suffix: "",
          },
          w = (e) =>
            Object.fromEntries(
              Object.entries(e).map(([e, t]) => [e, (0, i.decodeEntities)(t)])
            ),
          f = {
            cartCoupons: a.EMPTY_CART_COUPONS,
            cartItems: a.EMPTY_CART_ITEMS,
            cartFees: a.EMPTY_CART_FEES,
            cartItemsCount: 0,
            cartItemsWeight: 0,
            crossSellsProducts: a.EMPTY_CART_CROSS_SELLS,
            cartNeedsPayment: !0,
            cartNeedsShipping: !0,
            cartItemErrors: a.EMPTY_CART_ITEM_ERRORS,
            cartTotals: k,
            cartIsLoading: !0,
            cartErrors: a.EMPTY_CART_ERRORS,
            billingAddress: g,
            shippingAddress: h,
            shippingRates: a.EMPTY_SHIPPING_RATES,
            isLoadingRates: !1,
            cartHasCalculatedShipping: !1,
            paymentMethods: a.EMPTY_PAYMENT_METHODS,
            paymentRequirements: a.EMPTY_PAYMENT_REQUIREMENTS,
            receiveCart: () => {},
            receiveCartContents: () => {},
            extensions: a.EMPTY_EXTENSIONS,
          },
          y = (e = { shouldSelect: !0 }) => {
            const { isEditor: t, previewData: r } = (0, u._)(),
              o = null == r ? void 0 : r.previewCart,
              { shouldSelect: i } = e,
              k = (0, c.useRef)();
            (0, c.useEffect)(
              () => (
                (() => {
                  if (
                    (window.wcBlocksStoreCartListeners ||
                      (window.wcBlocksStoreCartListeners = {
                        count: 0,
                        remove: () => {},
                      }),
                    (null === (e = window.wcBlocksStoreCartListeners) ||
                    void 0 === e
                      ? void 0
                      : e.count) > 0)
                  )
                    return void window.wcBlocksStoreCartListeners.count++;
                  var e;
                  document.body.addEventListener("wc-blocks_added_to_cart", p),
                    document.body.addEventListener(
                      "wc-blocks_removed_from_cart",
                      p
                    ),
                    window.addEventListener("pageshow", d);
                  const t = (0, m.Es)(
                      "added_to_cart",
                      "wc-blocks_added_to_cart"
                    ),
                    r = (0, m.Es)(
                      "removed_from_cart",
                      "wc-blocks_removed_from_cart"
                    );
                  (window.wcBlocksStoreCartListeners.count = 1),
                    (window.wcBlocksStoreCartListeners.remove = () => {
                      document.body.removeEventListener(
                        "wc-blocks_added_to_cart",
                        p
                      ),
                        document.body.removeEventListener(
                          "wc-blocks_removed_from_cart",
                          p
                        ),
                        window.removeEventListener("pageshow", d),
                        t(),
                        r();
                    });
                })(),
                _
              ),
              []
            );
            const y = (0, n.useSelect)(
              (e, { dispatch: r }) => {
                if (!i) return f;
                if (t)
                  return {
                    cartCoupons: o.coupons,
                    cartItems: o.items,
                    crossSellsProducts: o.cross_sells,
                    cartFees: o.fees,
                    cartItemsCount: o.items_count,
                    cartItemsWeight: o.items_weight,
                    cartNeedsPayment: o.needs_payment,
                    cartNeedsShipping: o.needs_shipping,
                    cartItemErrors: a.EMPTY_CART_ITEM_ERRORS,
                    cartTotals: o.totals,
                    cartIsLoading: !1,
                    cartErrors: a.EMPTY_CART_ERRORS,
                    billingData: g,
                    billingAddress: g,
                    shippingAddress: h,
                    extensions: a.EMPTY_EXTENSIONS,
                    shippingRates: o.shipping_rates,
                    isLoadingRates: !1,
                    cartHasCalculatedShipping: o.has_calculated_shipping,
                    paymentRequirements: o.paymentRequirements,
                    receiveCart:
                      "function" == typeof (null == o ? void 0 : o.receiveCart)
                        ? o.receiveCart
                        : () => {},
                    receiveCartContents:
                      "function" ==
                      typeof (null == o ? void 0 : o.receiveCartContents)
                        ? o.receiveCartContents
                        : () => {},
                  };
                const s = e(a.CART_STORE_KEY),
                  c = s.getCartData(),
                  n = s.getCartErrors(),
                  u = s.getCartTotals(),
                  m = !s.hasFinishedResolution("getCartData"),
                  p = s.isCustomerDataUpdating(),
                  { receiveCart: d, receiveCartContents: _ } = r(
                    a.CART_STORE_KEY
                  ),
                  k = w(c.billingAddress),
                  y = c.needsShipping ? w(c.shippingAddress) : k,
                  b =
                    c.fees.length > 0
                      ? c.fees.map((e) => w(e))
                      : a.EMPTY_CART_FEES;
                return {
                  cartCoupons:
                    c.coupons.length > 0
                      ? c.coupons.map((e) => ({ ...e, label: e.code }))
                      : a.EMPTY_CART_COUPONS,
                  cartItems: c.items,
                  crossSellsProducts: c.crossSells,
                  cartFees: b,
                  cartItemsCount: c.itemsCount,
                  cartItemsWeight: c.itemsWeight,
                  cartNeedsPayment: c.needsPayment,
                  cartNeedsShipping: c.needsShipping,
                  cartItemErrors: c.errors,
                  cartTotals: u,
                  cartIsLoading: m,
                  cartErrors: n,
                  billingData: (0, l.QI)(k),
                  billingAddress: (0, l.QI)(k),
                  shippingAddress: (0, l.QI)(y),
                  extensions: c.extensions,
                  shippingRates: c.shippingRates,
                  isLoadingRates: p,
                  cartHasCalculatedShipping: c.hasCalculatedShipping,
                  paymentRequirements: c.paymentRequirements,
                  receiveCart: d,
                  receiveCartContents: _,
                };
              },
              [i]
            );
            return (
              (k.current && s()(k.current, y)) || (k.current = y), k.current
            );
          };
      },
      3251: (e, t, r) => {
        "use strict";
        r.d(t, { V: () => d });
        var o = r(4801),
          s = r(9818),
          c = r(6946),
          a = r(9307),
          n = r(7865),
          i = r(7618),
          l = r(9127),
          u = r.n(l),
          m = r(5585),
          p = r(8360);
        const d = () => {
          const {
              shippingRates: e,
              needsShipping: t,
              hasCalculatedShipping: r,
              isLoadingRates: l,
              isCollectable: d,
              isSelectingRate: _,
            } = (0, s.useSelect)((e) => {
              const t = !!e("core/editor"),
                r = e(o.CART_STORE_KEY),
                s = t ? m.s.shipping_rates : r.getShippingRates();
              return {
                shippingRates: s,
                needsShipping: t ? m.s.needs_shipping : r.getNeedsShipping(),
                hasCalculatedShipping: t
                  ? m.s.has_calculated_shipping
                  : r.getHasCalculatedShipping(),
                isLoadingRates: !t && r.isCustomerDataUpdating(),
                isCollectable: s.every(({ shipping_rates: e }) =>
                  e.find(({ method_id: e }) => (0, n.Ep)(e))
                ),
                isSelectingRate: !t && r.isShippingRateBeingSelected(),
              };
            }),
            h = (0, a.useRef)({});
          (0, a.useEffect)(() => {
            const t = (0, i.l)(e);
            (0, c.isObject)(t) && !u()(h.current, t) && (h.current = t);
          }, [e]);
          const { selectShippingRate: g } = (0, s.useDispatch)(
              o.CART_STORE_KEY
            ),
            k = (0, n.Ep)(Object.values(h.current).map((e) => e.split(":")[0])),
            { dispatchCheckoutEvent: w } = (0, p.n)(),
            f = (0, a.useCallback)(
              (e, t) => {
                let r;
                void 0 !== e &&
                  ((r = (0, n.Ep)(e.split(":")[0]) ? g(e, null) : g(e, t)),
                  r
                    .then(() => {
                      w("set-selected-shipping-rate", { shippingRateId: e });
                    })
                    .catch((e) => {
                      (0, o.processErrorResponse)(e);
                    }));
              },
              [g, w]
            );
          return {
            isSelectingRate: _,
            selectedRates: h.current,
            selectShippingRate: f,
            shippingRates: e,
            needsShipping: t,
            hasCalculatedShipping: r,
            isLoadingRates: l,
            isCollectable: d,
            hasSelectedLocalPickup: k,
          };
        };
      },
      8360: (e, t, r) => {
        "use strict";
        r.d(t, { n: () => a });
        var o = r(2694),
          s = r(9818),
          c = r(9307);
        const a = () => ({
          dispatchStoreEvent: (0, c.useCallback)((e, t = {}) => {
            try {
              (0, o.doAction)(`experimental__woocommerce_blocks-${e}`, t);
            } catch (e) {
              console.error(e);
            }
          }, []),
          dispatchCheckoutEvent: (0, c.useCallback)((e, t = {}) => {
            try {
              (0, o.doAction)(
                `experimental__woocommerce_blocks-checkout-${e}`,
                {
                  ...t,
                  storeCart: (0, s.select)("wc/store/cart").getCartData(),
                }
              );
            } catch (e) {
              console.error(e);
            }
          }, []),
        });
      },
      1715: (e, t, r) => {
        "use strict";
        r.d(t, { F: () => b, U: () => y });
        var o = r(9196),
          s = r(9307),
          c = r(8161),
          a = r(7180),
          n = r.n(a),
          i = r(9818),
          l = r(4801),
          u = r(6009),
          m = r(9401);
        var p = r(8027),
          d = r(8360);
        const _ = {},
          h = {},
          g = () => _,
          k = () => h;
        var w = r(8449);
        const f = (0, s.createContext)({
            onSubmit: () => {},
            onCheckoutAfterProcessingWithSuccess: () => () => {},
            onCheckoutAfterProcessingWithError: () => () => {},
            onCheckoutBeforeProcessing: () => () => {},
            onCheckoutValidationBeforeProcessing: () => () => {},
            onCheckoutSuccess: () => () => {},
            onCheckoutFail: () => () => {},
            onCheckoutValidation: () => () => {},
          }),
          y = () => (0, s.useContext)(f),
          b = ({ children: e, redirectUrl: t }) => {
            const r = g(),
              a = k(),
              { isEditor: _ } = (0, w._)(),
              { __internalUpdateAvailablePaymentMethods: h } = (0,
              i.useDispatch)(l.PAYMENT_STORE_KEY);
            (0, s.useEffect)(() => {
              (_ ||
                0 !== Object.keys(r).length ||
                0 !== Object.keys(a).length) &&
                h();
            }, [_, r, a, h]);
            const {
                __internalSetRedirectUrl: y,
                __internalEmitValidateEvent: b,
                __internalEmitAfterProcessingEvents: E,
                __internalSetBeforeProcessing: v,
              } = (0, i.useDispatch)(l.CHECKOUT_STORE_KEY),
              {
                checkoutRedirectUrl: C,
                checkoutStatus: S,
                isCheckoutBeforeProcessing: T,
                isCheckoutAfterProcessing: O,
                checkoutHasError: R,
                checkoutOrderId: P,
                checkoutOrderNotes: N,
                checkoutCustomerId: x,
              } = (0, i.useSelect)((e) => {
                const t = e(l.CHECKOUT_STORE_KEY);
                return {
                  checkoutRedirectUrl: t.getRedirectUrl(),
                  checkoutStatus: t.getCheckoutStatus(),
                  isCheckoutBeforeProcessing: t.isBeforeProcessing(),
                  isCheckoutAfterProcessing: t.isAfterProcessing(),
                  checkoutHasError: t.hasError(),
                  checkoutOrderId: t.getOrderId(),
                  checkoutOrderNotes: t.getOrderNotes(),
                  checkoutCustomerId: t.getCustomerId(),
                };
              });
            t && t !== C && y(t);
            const { setValidationErrors: A } = (0, i.useDispatch)(
                l.VALIDATION_STORE_KEY
              ),
              { dispatchCheckoutEvent: I } = (0, d.n)(),
              {
                checkoutNotices: M,
                paymentNotices: D,
                expressPaymentNotices: U,
              } = (0, i.useSelect)((e) => {
                const { getNotices: t } = e("core/notices");
                return {
                  checkoutNotices: Object.values(p.n7)
                    .filter(
                      (e) => e !== p.n7.PAYMENTS && e !== p.n7.EXPRESS_PAYMENTS
                    )
                    .reduce((e, r) => [...e, ...t(r)], []),
                  paymentNotices: t(p.n7.PAYMENTS),
                  expressPaymentNotices: t(p.n7.EXPRESS_PAYMENTS),
                };
              }, []),
              [B, K] = (0, s.useReducer)(u.I6, {}),
              j = (0, s.useRef)(B),
              {
                onCheckoutValidation: H,
                onCheckoutSuccess: L,
                onCheckoutFail: V,
              } = ((e) =>
                (0, s.useMemo)(
                  () => ({
                    onCheckoutSuccess: (0, m.m)("checkout_success", e),
                    onCheckoutFail: (0, m.m)("checkout_fail", e),
                    onCheckoutValidation: (0, m.m)("checkout_validation", e),
                  }),
                  [e]
                ))(K);
            (0, s.useEffect)(() => {
              j.current = B;
            }, [B]);
            const F = (0, s.useMemo)(
                () =>
                  function (...e) {
                    return (
                      n()("onCheckoutBeforeProcessing", {
                        alternative: "onCheckoutValidation",
                        plugin: "WooCommerce Blocks",
                      }),
                      H(...e)
                    );
                  },
                [H]
              ),
              Y = (0, s.useMemo)(
                () =>
                  function (...e) {
                    return (
                      n()("onCheckoutValidationBeforeProcessing", {
                        since: "9.7.0",
                        alternative: "onCheckoutValidation",
                        plugin: "WooCommerce Blocks",
                        link: "https://github.com/woocommerce/woocommerce-blocks/pull/8381",
                      }),
                      H(...e)
                    );
                  },
                [H]
              ),
              $ = (0, s.useMemo)(
                () =>
                  function (...e) {
                    return (
                      n()("onCheckoutAfterProcessingWithSuccess", {
                        since: "9.7.0",
                        alternative: "onCheckoutSuccess",
                        plugin: "WooCommerce Blocks",
                        link: "https://github.com/woocommerce/woocommerce-blocks/pull/8381",
                      }),
                      L(...e)
                    );
                  },
                [L]
              ),
              z = (0, s.useMemo)(
                () =>
                  function (...e) {
                    return (
                      n()("onCheckoutAfterProcessingWithError", {
                        since: "9.7.0",
                        alternative: "onCheckoutFail",
                        plugin: "WooCommerce Blocks",
                        link: "https://github.com/woocommerce/woocommerce-blocks/pull/8381",
                      }),
                      V(...e)
                    );
                  },
                [V]
              );
            (0, s.useEffect)(() => {
              T && b({ observers: j.current, setValidationErrors: A });
            }, [T, A, b]);
            const q = (0, c.D)(S),
              J = (0, c.D)(R);
            (0, s.useEffect)(() => {
              (S === q && R === J) ||
                (O &&
                  E({
                    observers: j.current,
                    notices: {
                      checkoutNotices: M,
                      paymentNotices: D,
                      expressPaymentNotices: U,
                    },
                  }));
            }, [S, R, C, P, x, N, O, T, q, J, M, U, D, b, E]);
            const G = {
              onSubmit: (0, s.useCallback)(() => {
                I("submit"), v();
              }, [I, v]),
              onCheckoutBeforeProcessing: F,
              onCheckoutValidationBeforeProcessing: Y,
              onCheckoutAfterProcessingWithSuccess: $,
              onCheckoutAfterProcessingWithError: z,
              onCheckoutSuccess: L,
              onCheckoutFail: V,
              onCheckoutValidation: H,
            };
            return (0, o.createElement)(f.Provider, { value: G }, e);
          };
      },
      6705: (e, t, r) => {
        "use strict";
        r.d(t, { _l: () => c });
        var o = r(9307),
          s = r(9401);
        const c = (e) =>
          (0, o.useMemo)(
            () => ({ onPaymentSetup: (0, s.m)("payment_setup", e) }),
            [e]
          );
      },
      6410: (e, t, r) => {
        "use strict";
        r.d(t, { E: () => d, P: () => p });
        var o = r(9196),
          s = r(9307),
          c = r(9818),
          a = r(4801),
          n = r(7180),
          i = r.n(n),
          l = r(6009),
          u = r(6705);
        const m = (0, s.createContext)({
            onPaymentProcessing: () => () => () => {},
            onPaymentSetup: () => () => () => {},
          }),
          p = () => (0, s.useContext)(m),
          d = ({ children: e }) => {
            const {
                isProcessing: t,
                isIdle: r,
                isCalculating: n,
                hasError: p,
              } = (0, c.useSelect)((e) => {
                const t = e(a.CHECKOUT_STORE_KEY);
                return {
                  isProcessing: t.isProcessing(),
                  isIdle: t.isIdle(),
                  hasError: t.hasError(),
                  isCalculating: t.isCalculating(),
                };
              }),
              { isPaymentReady: d } = (0, c.useSelect)((e) => {
                const t = e(a.PAYMENT_STORE_KEY);
                return {
                  isPaymentProcessing: t.isPaymentProcessing(),
                  isPaymentReady: t.isPaymentReady(),
                };
              }),
              { setValidationErrors: _ } = (0, c.useDispatch)(
                a.VALIDATION_STORE_KEY
              ),
              [h, g] = (0, s.useReducer)(l.I6, {}),
              { onPaymentSetup: k } = (0, u._l)(g),
              w = (0, s.useRef)(h);
            (0, s.useEffect)(() => {
              w.current = h;
            }, [h]);
            const {
              __internalSetPaymentProcessing: f,
              __internalSetPaymentIdle: y,
              __internalEmitPaymentProcessingEvent: b,
            } = (0, c.useDispatch)(a.PAYMENT_STORE_KEY);
            (0, s.useEffect)(() => {
              !t || p || n || (f(), b(w.current, _));
            }, [t, p, n, f, b, _]),
              (0, s.useEffect)(() => {
                r && !d && y();
              }, [r, d, y]),
              (0, s.useEffect)(() => {
                p && d && y();
              }, [p, d, y]);
            const E = {
              onPaymentProcessing: (0, s.useMemo)(
                () =>
                  function (...e) {
                    return (
                      i()("onPaymentProcessing", {
                        alternative: "onPaymentSetup",
                        plugin: "WooCommerce Blocks",
                      }),
                      k(...e)
                    );
                  },
                [k]
              ),
              onPaymentSetup: k,
            };
            return (0, o.createElement)(m.Provider, { value: E }, e);
          };
      },
      5576: (e, t, r) => {
        "use strict";
        r.d(t, { l: () => T, d: () => S });
        var o = r(9196),
          s = r(9307),
          c = r(9818),
          a = r(4801);
        const n = {
            NONE: "none",
            INVALID_ADDRESS: "invalid_address",
            UNKNOWN: "unknown_error",
          },
          i = {
            INVALID_COUNTRY:
              "woocommerce_rest_cart_shipping_rates_invalid_country",
            MISSING_COUNTRY:
              "woocommerce_rest_cart_shipping_rates_missing_country",
            INVALID_STATE: "woocommerce_rest_cart_shipping_rates_invalid_state",
          },
          l = {
            shippingErrorStatus: {
              isPristine: !0,
              isValid: !1,
              hasInvalidAddress: !1,
              hasError: !1,
            },
            dispatchErrorStatus: (e) => e,
            shippingErrorTypes: n,
            onShippingRateSuccess: () => () => {},
            onShippingRateFail: () => () => {},
            onShippingRateSelectSuccess: () => () => {},
            onShippingRateSelectFail: () => () => {},
          },
          u = (e, { type: t }) => (Object.values(n).includes(t) ? t : e);
        var m = r(6009),
          p = r(9401);
        const d = "shipping_rates_success",
          _ = "shipping_rates_fail",
          h = "shipping_rate_select_success",
          g = "shipping_rate_select_fail",
          k = (e) => ({
            onSuccess: (0, p.m)(d, e),
            onFail: (0, p.m)(_, e),
            onSelectSuccess: (0, p.m)(h, e),
            onSelectFail: (0, p.m)(g, e),
          });
        var w = r(3156),
          f = r(9659),
          y = r(3251);
        const { NONE: b, INVALID_ADDRESS: E, UNKNOWN: v } = n,
          C = (0, s.createContext)(l),
          S = () => (0, s.useContext)(C),
          T = ({ children: e }) => {
            const {
                __internalIncrementCalculating: t,
                __internalDecrementCalculating: r,
              } = (0, c.useDispatch)(a.CHECKOUT_STORE_KEY),
              {
                shippingRates: l,
                isLoadingRates: p,
                cartErrors: S,
              } = (0, f.b)(),
              { selectedRates: T, isSelectingRate: O } = (0, y.V)(),
              [R, P] = (0, s.useReducer)(u, b),
              [N, x] = (0, s.useReducer)(m.I6, {}),
              A = (0, s.useRef)(N),
              I = (0, s.useMemo)(
                () => ({
                  onShippingRateSuccess: k(x).onSuccess,
                  onShippingRateFail: k(x).onFail,
                  onShippingRateSelectSuccess: k(x).onSelectSuccess,
                  onShippingRateSelectFail: k(x).onSelectFail,
                }),
                [x]
              );
            (0, s.useEffect)(() => {
              A.current = N;
            }, [N]),
              (0, s.useEffect)(() => {
                p ? t() : r();
              }, [p, t, r]),
              (0, s.useEffect)(() => {
                O ? t() : r();
              }, [t, r, O]),
              (0, s.useEffect)(() => {
                S.length > 0 &&
                S.some((e) => !(!e.code || !Object.values(i).includes(e.code)))
                  ? P({ type: E })
                  : P({ type: b });
              }, [S]);
            const M = (0, s.useMemo)(
              () => ({
                isPristine: R === b,
                isValid: R === b,
                hasInvalidAddress: R === E,
                hasError: R === v || R === E,
              }),
              [R]
            );
            (0, s.useEffect)(() => {
              p ||
                (0 !== l.length && !M.hasError) ||
                (0, w.K)(A.current, _, {
                  hasInvalidAddress: M.hasInvalidAddress,
                  hasError: M.hasError,
                });
            }, [l, p, M.hasError, M.hasInvalidAddress]),
              (0, s.useEffect)(() => {
                !p && l.length > 0 && !M.hasError && (0, w.K)(A.current, d, l);
              }, [l, p, M.hasError]),
              (0, s.useEffect)(() => {
                O ||
                  (M.hasError
                    ? (0, w.K)(A.current, g, {
                        hasError: M.hasError,
                        hasInvalidAddress: M.hasInvalidAddress,
                      })
                    : (0, w.K)(A.current, h, T.current));
              }, [T, O, M.hasError, M.hasInvalidAddress]);
            const D = {
              shippingErrorStatus: M,
              dispatchErrorStatus: P,
              shippingErrorTypes: n,
              ...I,
            };
            return (0, o.createElement)(
              o.Fragment,
              null,
              (0, o.createElement)(C.Provider, { value: D }, e)
            );
          };
      },
      9136: (e, t, r) => {
        "use strict";
        r.d(t, { N: () => l, v: () => u });
        var o = r(9196),
          s = r(9307),
          c = r(6671),
          a = r(7608),
          n = r.n(a);
        const i = (0, s.createContext)({
            hasContainerWidth: !1,
            containerClassName: "",
            isMobile: !1,
            isSmall: !1,
            isMedium: !1,
            isLarge: !1,
          }),
          l = () => (0, s.useContext)(i),
          u = ({ children: e, className: t = "" }) => {
            const [r, s] = (0, c.L)(),
              a = {
                hasContainerWidth: "" !== s,
                containerClassName: s,
                isMobile: "is-mobile" === s,
                isSmall: "is-small" === s,
                isMedium: "is-medium" === s,
                isLarge: "is-large" === s,
              };
            return (0, o.createElement)(
              i.Provider,
              { value: a },
              (0, o.createElement)("div", { className: n()(t, s) }, r, e)
            );
          };
      },
      8449: (e, t, r) => {
        "use strict";
        r.d(t, { _: () => c }), r(9196);
        var o = r(9307);
        r(9818);
        const s = (0, o.createContext)({
            isEditor: !1,
            currentPostId: 0,
            currentView: "",
            previewData: {},
            getPreviewData: () => ({}),
          }),
          c = () => (0, o.useContext)(s);
      },
      6671: (e, t, r) => {
        "use strict";
        r.d(t, { L: () => s });
        var o = r(4333);
        const s = () => {
          const [e, { width: t }] = (0, o.useResizeObserver)();
          let r = "";
          return (
            t > 700
              ? (r = "is-large")
              : t > 520
              ? (r = "is-medium")
              : t > 400
              ? (r = "is-small")
              : t && (r = "is-mobile"),
            [e, r]
          );
        };
      },
      8161: (e, t, r) => {
        "use strict";
        r.d(t, { D: () => s });
        var o = r(9307);
        function s(e, t) {
          const r = (0, o.useRef)();
          return (
            (0, o.useEffect)(() => {
              r.current === e || (t && !t(e, r.current)) || (r.current = e);
            }, [e, t]),
            r.current
          );
        }
      },
      9040: (e, t, r) => {
        "use strict";
        r.d(t, { ET: () => u, K5: () => m, QI: () => i, RD: () => l });
        var o = r(5969),
          s = (r(6483), r(6946)),
          c = r(2629),
          a = r(8752);
        const n = (e, t) => e in t,
          i = (e) => {
            const t = (0, o.Z)(a.Ju, {}, e.country),
              r = Object.assign({}, e);
            return (
              t.forEach(({ key: t = "", hidden: o = !1 }) => {
                o && n(t, e) && (r[t] = "");
              }),
              r
            );
          },
          l = (e) => {
            const t = (0, o.Z)(a.Ju, {}, e.country),
              r = Object.assign({}, e);
            return (
              t.forEach(({ key: t = "" }) => {
                "country" !== t && "state" !== t && n(t, e) && (r[t] = "");
              }),
              r
            );
          },
          u = (e) => {
            if (0 === Object.values(e).length) return null;
            const t = (0, s.isString)(a.mO[e.country])
                ? (0, c.decodeEntities)(a.mO[e.country])
                : "",
              r =
                (0, s.isObject)(a.nm[e.country]) &&
                (0, s.isString)(a.nm[e.country][e.state])
                  ? (0, c.decodeEntities)(a.nm[e.country][e.state])
                  : e.state,
              o = [];
            o.push(e.postcode.toUpperCase()),
              o.push(e.city),
              o.push(r),
              o.push(t);
            return o.filter(Boolean).join(", ") || null;
          },
          m = (e) =>
            !!e.country &&
            (0, o.Z)(a.Ju, {}, e.country).every(
              ({ key: t = "", hidden: r = !1, required: o = !1 }) =>
                !(!r && o) || (n(t, e) && "" !== e[t])
            );
      },
      1621: (e, t, r) => {
        "use strict";
        r.d(t, { Zt: () => a, xA: () => c });
        var o = r(5736),
          s = r(9818);
        (0, o.__)(
          "Something went wrong. Please contact us to get assistance.",
          "woocommerce"
        );
        const c = () => {
            const e = (0, s.select)(
                "wc/store/store-notices"
              ).getRegisteredContainers(),
              { removeNotice: t } = (0, s.dispatch)("core/notices"),
              { getNotices: r } = (0, s.select)("core/notices");
            e.forEach((e) => {
              r(e).forEach((r) => {
                t(r.id, e);
              });
            });
          },
          a = (e) => {
            const { removeNotice: t } = (0, s.dispatch)("core/notices"),
              { getNotices: r } = (0, s.select)("core/notices");
            r(e).forEach((r) => {
              t(r.id, e);
            });
          };
      },
      7618: (e, t, r) => {
        "use strict";
        r.d(t, { l: () => o });
        const o = (e) =>
          Object.fromEntries(
            e.map(({ package_id: e, shipping_rates: t }) => {
              var r;
              return [
                e,
                (null === (r = t.find((e) => e.selected)) || void 0 === r
                  ? void 0
                  : r.rate_id) || "",
              ];
            })
          );
      },
      2592: (e, t, r) => {
        "use strict";
        r.d(t, { Es: () => s });
        const o = window.CustomEvent || null,
          s = (e, t, r = !1, s = !1) => {
            if ("function" != typeof jQuery) return () => {};
            const c = () => {
              ((
                e,
                {
                  bubbles: t = !1,
                  cancelable: r = !1,
                  element: s,
                  detail: c = {},
                }
              ) => {
                if (!o) return;
                s || (s = document.body);
                const a = new o(e, { bubbles: t, cancelable: r, detail: c });
                s.dispatchEvent(a);
              })(t, { bubbles: r, cancelable: s });
            };
            return jQuery(document).on(e, c), () => jQuery(document).off(e, c);
          };
      },
      7865: (e, t, r) => {
        "use strict";
        r.d(t, { Ep: () => i, J3: () => n, Q_: () => l, wH: () => c });
        var o = r(4617),
          s = r(8752);
        const c = (e) => e.length,
          a = (0, o.getSetting)("collectableMethodIds", []),
          n = (e) => a.includes(e.method_id),
          i = (e) =>
            !!s.oC &&
            (Array.isArray(e) ? !!e.find((e) => a.includes(e)) : a.includes(e)),
          l = (e) =>
            e.reduce(function (e, t) {
              return e + t.shipping_rates.length;
            }, 0);
      },
      7151: (e, t, r) => {
        "use strict";
        r.d(t, { Tb: () => s, s4: () => c });
        var o = r(9307);
        const s = (0, o.createContext)({
            showCompanyField: !1,
            showApartmentField: !1,
            showPhoneField: !1,
            requireCompanyField: !1,
            requirePhoneField: !1,
            showOrderNotes: !0,
            showPolicyLinks: !0,
            showReturnToCart: !0,
            cartPageId: 0,
            showRateAfterTaxName: !1,
          }),
          c =
            ((0, o.createContext)({ addressFieldControls: () => null }),
            () => (0, o.useContext)(s));
      },
      8489: (e, t, r) => {
        "use strict";
        r.r(t);
        var o = r(9307);
        const s = (e, t) => {
          const r = [];
          return (
            Object.keys(e).forEach((o) => {
              if (void 0 !== t[o])
                switch (e[o].type) {
                  case "boolean":
                    r[o] = "false" !== t[o] && !1 !== t[o];
                    break;
                  case "number":
                    r[o] = parseInt(t[o], 10);
                    break;
                  case "array":
                  case "object":
                    r[o] = JSON.parse(t[o]);
                    break;
                  default:
                    r[o] = t[o];
                }
              else r[o] = e[o].default;
            }),
            r
          );
        };
        var c = r(9659),
          a = r(9818),
          n = r(4801),
          i = r(4613),
          l = r(9196),
          u = r(7708),
          m = r(5736),
          p = r(8752);
        const d = ({
          imageUrl: e = `${p.td}/block-error.svg`,
          header: t = (0, m.__)("Oops!", "woocommerce"),
          text: r = (0, m.__)(
            "There was an error loading the content.",
            "woocommerce"
          ),
          errorMessage: o,
          errorMessagePrefix: s = (0, m.__)("Error:", "woocommerce"),
          button: c,
          showErrorBlock: a = !0,
        }) =>
          a
            ? (0, l.createElement)(
                "div",
                { className: "wc-block-error wc-block-components-error" },
                e &&
                  (0, l.createElement)("img", {
                    className:
                      "wc-block-error__image wc-block-components-error__image",
                    src: e,
                    alt: "",
                  }),
                (0, l.createElement)(
                  "div",
                  {
                    className:
                      "wc-block-error__content wc-block-components-error__content",
                  },
                  t &&
                    (0, l.createElement)(
                      "p",
                      {
                        className:
                          "wc-block-error__header wc-block-components-error__header",
                      },
                      t
                    ),
                  r &&
                    (0, l.createElement)(
                      "p",
                      {
                        className:
                          "wc-block-error__text wc-block-components-error__text",
                      },
                      r
                    ),
                  o &&
                    (0, l.createElement)(
                      "p",
                      {
                        className:
                          "wc-block-error__message wc-block-components-error__message",
                      },
                      s ? s + " " : "",
                      o
                    ),
                  c &&
                    (0, l.createElement)(
                      "p",
                      {
                        className:
                          "wc-block-error__button wc-block-components-error__button",
                      },
                      c
                    )
                )
              )
            : null;
        r(8406);
        class _ extends o.Component {
          constructor(...e) {
            super(...e),
              (0, u.Z)(this, "state", { errorMessage: "", hasError: !1 });
          }
          static getDerivedStateFromError(e) {
            return void 0 !== e.statusText && void 0 !== e.status
              ? {
                  errorMessage: (0, l.createElement)(
                    l.Fragment,
                    null,
                    (0, l.createElement)("strong", null, e.status),
                    ": ",
                    e.statusText
                  ),
                  hasError: !0,
                }
              : { errorMessage: e.message, hasError: !0 };
          }
          render() {
            const {
                header: e,
                imageUrl: t,
                showErrorMessage: r = !0,
                showErrorBlock: o = !0,
                text: s,
                errorMessagePrefix: c,
                renderError: a,
                button: n,
              } = this.props,
              { errorMessage: i, hasError: u } = this.state;
            return u
              ? "function" == typeof a
                ? a({ errorMessage: i })
                : (0, l.createElement)(d, {
                    showErrorBlock: o,
                    errorMessage: r ? i : null,
                    header: e,
                    imageUrl: t,
                    text: s,
                    errorMessagePrefix: c,
                    button: n,
                  })
              : this.props.children;
          }
        }
        const h = _,
          g = [".wp-block-woocommerce-cart"],
          k = ({
            Block: e,
            containers: t,
            getProps: r = () => ({}),
            getErrorBoundaryProps: s = () => ({}),
          }) => {
            0 !== t.length &&
              Array.prototype.forEach.call(t, (t, c) => {
                const a = r(t, c),
                  n = s(t, c),
                  i = { ...t.dataset, ...(a.attributes || {}) };
                (({
                  Block: e,
                  container: t,
                  attributes: r = {},
                  props: s = {},
                  errorBoundaryProps: c = {},
                }) => {
                  (0, o.render)(
                    (0, l.createElement)(
                      h,
                      { ...c },
                      (0, l.createElement)(
                        o.Suspense,
                        {
                          fallback: (0, l.createElement)("div", {
                            className: "wc-block-placeholder",
                          }),
                        },
                        e && (0, l.createElement)(e, { ...s, attributes: r })
                      )
                    ),
                    t,
                    () => {
                      t.classList && t.classList.remove("is-loading");
                    }
                  );
                })({
                  Block: e,
                  container: t,
                  props: a,
                  attributes: i,
                  errorBoundaryProps: n,
                });
              });
          },
          w = (e) => {
            const t = document.body.querySelectorAll(g.join(",")),
              {
                Block: r,
                getProps: o,
                getErrorBoundaryProps: s,
                selector: c,
              } = e;
            (({
              Block: e,
              getProps: t,
              getErrorBoundaryProps: r,
              selector: o,
              wrappers: s,
            }) => {
              const c = document.body.querySelectorAll(o);
              s &&
                s.length > 0 &&
                Array.prototype.filter.call(
                  c,
                  (e) =>
                    !((e, t) =>
                      Array.prototype.some.call(
                        t,
                        (t) => t.contains(e) && !t.isSameNode(e)
                      ))(e, s)
                ),
                k({
                  Block: e,
                  containers: c,
                  getProps: t,
                  getErrorBoundaryProps: r,
                });
            })({
              Block: r,
              getProps: o,
              getErrorBoundaryProps: s,
              selector: c,
              wrappers: t,
            }),
              Array.prototype.forEach.call(t, (t) => {
                t.addEventListener("wc-blocks_render_blocks_frontend", () => {
                  (({
                    Block: e,
                    getProps: t,
                    getErrorBoundaryProps: r,
                    selector: o,
                    wrapper: s,
                  }) => {
                    const c = s.querySelectorAll(o);
                    k({
                      Block: e,
                      containers: c,
                      getProps: t,
                      getErrorBoundaryProps: r,
                    });
                  })({ ...e, wrapper: t });
                });
              });
          };
        var f = r(4617),
          y = r(807),
          b = r(3554);
        const E = (e, t) => (e && t[e] ? t[e] : null),
          v = ({
            block: e,
            blockMap: t,
            blockWrapper: r,
            children: s,
            depth: c = 1,
          }) =>
            s && 0 !== s.length
              ? Array.from(s).map((s, a) => {
                  const { blockName: n = "", ...i } = {
                      ...(s instanceof HTMLElement ? s.dataset : {}),
                      className:
                        s instanceof Element
                          ? null == s
                            ? void 0
                            : s.className
                          : "",
                    },
                    u = `${e}_${c}_${a}`,
                    m = E(n, t);
                  if (!m) {
                    const a = (0, y.ZP)(
                      (s instanceof Element &&
                        (null == s ? void 0 : s.outerHTML)) ||
                        (null == s ? void 0 : s.textContent) ||
                        ""
                    );
                    if ("string" == typeof a && a) return a;
                    if (!(0, o.isValidElement)(a)) return null;
                    const n = s.childNodes.length
                      ? v({
                          block: e,
                          blockMap: t,
                          children: s.childNodes,
                          depth: c + 1,
                          blockWrapper: r,
                        })
                      : void 0;
                    return n
                      ? (0, o.cloneElement)(
                          a,
                          { key: u, ...((null == a ? void 0 : a.props) || {}) },
                          n
                        )
                      : (0, o.cloneElement)(a, {
                          key: u,
                          ...((null == a ? void 0 : a.props) || {}),
                        });
                  }
                  const p = r || o.Fragment;
                  return (0, l.createElement)(
                    o.Suspense,
                    {
                      key: `${e}_${c}_${a}_suspense`,
                      fallback: (0, l.createElement)("div", {
                        className: "wc-block-placeholder",
                      }),
                    },
                    (0, l.createElement)(
                      h,
                      {
                        text: `Unexpected error in: ${n}`,
                        showErrorBlock: f.CURRENT_USER_IS_ADMIN,
                      },
                      (0, l.createElement)(
                        p,
                        null,
                        (0, l.createElement)(
                          m,
                          { key: u, ...i },
                          v({
                            block: e,
                            blockMap: t,
                            children: s.childNodes,
                            depth: c + 1,
                            blockWrapper: r,
                          }),
                          ((e, t, r, s) => {
                            if (!(0, b.hasInnerBlocks)(e)) return null;
                            const c = r
                                ? Array.from(r)
                                    .map(
                                      (e) =>
                                        (e instanceof HTMLElement &&
                                          (null == e
                                            ? void 0
                                            : e.dataset.blockName)) ||
                                        null
                                    )
                                    .filter(Boolean)
                                : [],
                              a = (0, b.getRegisteredBlocks)(e).filter(
                                ({ blockName: e, force: t }) =>
                                  !0 === t && !c.includes(e)
                              ),
                              n = s || o.Fragment;
                            return (0, l.createElement)(
                              o.Fragment,
                              null,
                              a.map(({ blockName: e, component: r }, o) => {
                                const s = r || E(e, t);
                                return s
                                  ? (0, l.createElement)(
                                      h,
                                      {
                                        key: `${e}_blockerror`,
                                        text: `Unexpected error in: ${e}`,
                                        showErrorBlock: f.CURRENT_USER_IS_ADMIN,
                                      },
                                      (0, l.createElement)(
                                        n,
                                        null,
                                        (0, l.createElement)(s, {
                                          key: `${e}_forced_${o}`,
                                        })
                                      )
                                    )
                                  : null;
                              })
                            );
                          })(n, t, s.childNodes, r)
                        )
                      )
                    )
                  );
                })
              : null,
          C = JSON.parse(
            '{"name":"woocommerce/checkout-actions-block","version":"1.0.0","title":"Actions","description":"Allow customers to place their order.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-fields-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}'
          ),
          S = JSON.parse(
            '{"name":"woocommerce/checkout-additional-information-block","version":"1.0.0","title":"Additional information","description":"Render additional fields in the \'Additional information\' location.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false},"attributes":{"className":{"type":"string","default":""},"lock":{"type":"object","default":{"remove":true,"move":false}}},"parent":["woocommerce/checkout-fields-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}'
          ),
          T = JSON.parse(
            '{"name":"woocommerce/checkout-billing-address-block","version":"1.0.0","title":"Billing Address","description":"Collect your customer\'s billing address.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-fields-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}'
          ),
          O = JSON.parse(
            '{"name":"woocommerce/checkout-contact-information-block","version":"1.0.0","title":"Contact Information","description":"Collect your customer\'s contact information.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-fields-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}'
          ),
          R = JSON.parse(
            '{"name":"woocommerce/checkout-express-payment-block","version":"1.0.0","title":"Express Checkout","description":"Allow customers to breeze through with quick payment options.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-fields-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}'
          ),
          P = JSON.parse(
            '{"name":"woocommerce/checkout-fields-block","version":"1.0.0","title":"Checkout Fields","description":"Column containing checkout address fields.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}'
          ),
          N = JSON.parse(
            '{"name":"woocommerce/checkout-order-note-block","version":"1.0.0","title":"Order Note","description":"Allow customers to add a note to their order.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false},"attributes":{"className":{"type":"string","default":""},"lock":{"type":"object","default":{"remove":false,"move":true}}},"parent":["woocommerce/checkout-fields-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}'
          ),
          x = JSON.parse(
            '{"name":"woocommerce/checkout-payment-block","version":"1.0.0","title":"Payment Options","description":"Payment options for your store.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-fields-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}'
          ),
          A = JSON.parse(
            '{"name":"woocommerce/checkout-shipping-address-block","version":"1.0.0","title":"Shipping Address","description":"Collect your customer\'s shipping address.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-fields-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}'
          ),
          I = {
            CHECKOUT_ACTIONS: C,
            CHECKOUT_ORDER_INFORMATION: S,
            CHECKOUT_BILLING_ADDRESS: T,
            CHECKOUT_CONTACT_INFORMATION: O,
            CHECKOUT_EXPRESS_PAYMENT: R,
            CHECKOUT_FIELDS: P,
            CHECKOUT_ORDER_NOTE: N,
            CHECKOUT_PAYMENT: x,
            CHECKOUT_SHIPPING_METHOD: JSON.parse(
              '{"name":"woocommerce/checkout-shipping-method-block","version":"1.0.0","title":"Shipping Method","description":"Select between shipping or local pickup.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-fields-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}'
            ),
            CHECKOUT_SHIPPING_ADDRESS: A,
            CHECKOUT_SHIPPING_METHODS: JSON.parse(
              '{"name":"woocommerce/checkout-shipping-methods-block","version":"1.0.0","title":"Shipping Options","description":"Display shipping options and rates for your store.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-fields-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}'
            ),
            CHECKOUT_PICKUP_LOCATION: JSON.parse(
              '{"name":"woocommerce/checkout-pickup-options-block","version":"1.0.0","title":"Pickup Method","description":"Shows local pickup options.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-fields-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}'
            ),
            CHECKOUT_TERMS: JSON.parse(
              '{"name":"woocommerce/checkout-terms-block","version":"1.0.0","title":"Terms and Conditions","description":"Ensure that customers agree to your Terms & Conditions and Privacy Policy.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false},"attributes":{"className":{"type":"string","default":""},"checkbox":{"type":"boolean","default":false},"text":{"type":"string","required":false}},"parent":["woocommerce/checkout-fields-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}'
            ),
            CHECKOUT_TOTALS: JSON.parse(
              '{"name":"woocommerce/checkout-totals-block","version":"1.0.0","title":"Checkout Totals","description":"Column containing the checkout totals.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"checkbox":{"type":"boolean","default":false},"text":{"type":"string","required":false}},"parent":["woocommerce/checkout"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}'
            ),
            CHECKOUT_ORDER_SUMMARY: JSON.parse(
              '{"name":"woocommerce/checkout-order-summary-block","version":"1.0.0","title":"Order Summary","description":"Show customers a summary of their order.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true}}},"parent":["woocommerce/checkout-totals-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}'
            ),
            CHECKOUT_ORDER_SUMMARY_SUBTOTAL: JSON.parse(
              '{"name":"woocommerce/checkout-order-summary-subtotal-block","version":"1.0.0","title":"Subtotal","description":"Shows the cart subtotal row.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-order-summary-totals-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}'
            ),
            CHECKOUT_ORDER_SUMMARY_FEE: JSON.parse(
              '{"name":"woocommerce/checkout-order-summary-fee-block","version":"1.0.0","title":"Fees","description":"Shows the cart fee row.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-order-summary-totals-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}'
            ),
            CHECKOUT_ORDER_SUMMARY_DISCOUNT: JSON.parse(
              '{"name":"woocommerce/checkout-order-summary-discount-block","version":"1.0.0","title":"Discount","description":"Shows the cart discount row.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-order-summary-totals-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}'
            ),
            CHECKOUT_ORDER_SUMMARY_SHIPPING: JSON.parse(
              '{"name":"woocommerce/checkout-order-summary-shipping-block","version":"1.0.0","title":"Shipping","description":"Shows the cart shipping row.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-order-summary-totals-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}'
            ),
            CHECKOUT_ORDER_SUMMARY_COUPON_FORM: JSON.parse(
              '{"name":"woocommerce/checkout-order-summary-coupon-form-block","version":"1.0.0","title":"Coupon Form","description":"Shows the apply coupon form.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false},"attributes":{"className":{"type":"string","default":""},"lock":{"type":"object","default":{"remove":false,"move":false}}},"parent":["woocommerce/checkout-order-summary-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}'
            ),
            CHECKOUT_ORDER_SUMMARY_TAXES: JSON.parse(
              '{"name":"woocommerce/checkout-order-summary-taxes-block","version":"1.0.0","title":"Taxes","description":"Shows the cart taxes row.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-order-summary-totals-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}'
            ),
            CHECKOUT_ORDER_SUMMARY_CART_ITEMS: JSON.parse(
              '{"name":"woocommerce/checkout-order-summary-cart-items-block","version":"1.0.0","title":"Cart Items","description":"Shows cart items.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"lock":{"type":"object","default":{"remove":true,"move":false}}},"parent":["woocommerce/checkout-order-summary-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}'
            ),
            CHECKOUT_ORDER_SUMMARY_TOTALS: JSON.parse(
              '{"name":"woocommerce/checkout-order-summary-totals-block","version":"1.0.0","title":"Totals","description":"Shows the subtotal, fees, discounts, shipping and taxes.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"lock":{"type":"object","default":{"remove":true,"move":false}}},"parent":["woocommerce/checkout-order-summary-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}'
            ),
          };
        (r.p = p.VF),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_FIELDS,
            component: (0, o.lazy)(() => r.e(4986).then(r.bind(r, 5572))),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_EXPRESS_PAYMENT,
            component: (0, o.lazy)(() =>
              Promise.all([r.e(2869), r.e(1370)]).then(r.bind(r, 2933))
            ),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_CONTACT_INFORMATION,
            component: (0, o.lazy)(() =>
              Promise.all([r.e(2869), r.e(9357)]).then(r.bind(r, 5145))
            ),
          }),
          p.oC &&
            ((0, b.registerCheckoutBlock)({
              metadata: I.CHECKOUT_SHIPPING_METHOD,
              component: (0, o.lazy)(() =>
                Promise.all([r.e(2869), r.e(7413)]).then(r.bind(r, 7477))
              ),
            }),
            (0, b.registerCheckoutBlock)({
              metadata: I.CHECKOUT_PICKUP_LOCATION,
              component: (0, o.lazy)(() =>
                Promise.all([r.e(2869), r.e(724)]).then(r.bind(r, 760))
              ),
            })),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_SHIPPING_ADDRESS,
            component: (0, o.lazy)(() =>
              Promise.all([r.e(2869), r.e(826)]).then(r.bind(r, 2415))
            ),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_BILLING_ADDRESS,
            component: (0, o.lazy)(() =>
              Promise.all([r.e(2869), r.e(9662)]).then(r.bind(r, 1607))
            ),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_SHIPPING_METHODS,
            component: (0, o.lazy)(() =>
              Promise.all([r.e(2869), r.e(5210)]).then(r.bind(r, 2833))
            ),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_PAYMENT,
            component: (0, o.lazy)(() =>
              Promise.all([r.e(2869), r.e(7162)]).then(r.bind(r, 9298))
            ),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_ORDER_INFORMATION,
            component: (0, o.lazy)(() =>
              Promise.all([r.e(2869), r.e(8819)]).then(r.bind(r, 8603))
            ),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_ORDER_NOTE,
            component: (0, o.lazy)(() => r.e(1758).then(r.bind(r, 8464))),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_TERMS,
            component: (0, o.lazy)(() => r.e(8806).then(r.bind(r, 9701))),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_ACTIONS,
            component: (0, o.lazy)(() =>
              Promise.all([r.e(2869), r.e(9644)]).then(r.bind(r, 7575))
            ),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_TOTALS,
            component: (0, o.lazy)(() => r.e(406).then(r.bind(r, 8475))),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_ORDER_SUMMARY,
            component: (0, o.lazy)(() =>
              Promise.all([r.e(2869), r.e(5915)]).then(r.bind(r, 8098))
            ),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_ORDER_SUMMARY_CART_ITEMS,
            component: (0, o.lazy)(() =>
              Promise.all([r.e(2869), r.e(834)]).then(r.bind(r, 2050))
            ),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_ORDER_SUMMARY_SUBTOTAL,
            component: (0, o.lazy)(() => r.e(1536).then(r.bind(r, 6226))),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_ORDER_SUMMARY_FEE,
            component: (0, o.lazy)(() => r.e(7906).then(r.bind(r, 7486))),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_ORDER_SUMMARY_DISCOUNT,
            component: (0, o.lazy)(() =>
              Promise.all([r.e(2869), r.e(6262)]).then(r.bind(r, 1950))
            ),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_ORDER_SUMMARY_COUPON_FORM,
            component: (0, o.lazy)(() =>
              Promise.all([r.e(2869), r.e(8459)]).then(r.bind(r, 8278))
            ),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_ORDER_SUMMARY_SHIPPING,
            component: (0, o.lazy)(() =>
              Promise.all([r.e(2869), r.e(4063)]).then(r.bind(r, 1233))
            ),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_ORDER_SUMMARY_TAXES,
            component: (0, o.lazy)(() => r.e(3688).then(r.bind(r, 3957))),
          });
        var M = r(7608),
          D = r.n(M),
          U = r(7731),
          B = r(7865),
          K = r(6946),
          j = r(3251),
          H = r(8027);
        const L = window.wp.plugins;
        var V = r(6410),
          F = r(5576),
          Y = r(1715);
        const $ = window.wp.apiFetch;
        var z = r.n($),
          q = r(1621),
          J = r(9040);
        const G = (e, t, r) => {
            const o = Object.keys(e).map((t) => ({ key: t, value: e[t] }), []),
              s = `wc-${r}-new-payment-method`;
            return o.push({ key: s, value: t }), o;
          },
          W = (e) => {
            if (!e) return;
            const { __internalSetCustomerId: t } = (0, a.dispatch)(
              n.CHECKOUT_STORE_KEY
            );
            z().setNonce &&
              "function" == typeof z().setNonce &&
              z().setNonce(e),
              null != e &&
                e.get("User-ID") &&
                t(parseInt(e.get("User-ID") || "0", 10));
          },
          Z = () => {
            const { onCheckoutValidation: e } = (0, Y.U)(),
              {
                hasError: t,
                redirectUrl: r,
                isProcessing: s,
                isBeforeProcessing: l,
                isComplete: u,
                orderNotes: p,
                shouldCreateAccount: d,
                extensionData: _,
                customerId: h,
                additionalFields: g,
              } = (0, a.useSelect)((e) => {
                const t = e(n.CHECKOUT_STORE_KEY);
                return {
                  hasError: t.hasError(),
                  redirectUrl: t.getRedirectUrl(),
                  isProcessing: t.isProcessing(),
                  isBeforeProcessing: t.isBeforeProcessing(),
                  isComplete: t.isComplete(),
                  orderNotes: t.getOrderNotes(),
                  shouldCreateAccount: t.getShouldCreateAccount(),
                  extensionData: t.getExtensionData(),
                  customerId: t.getCustomerId(),
                  additionalFields: t.getAdditionalFields(),
                };
              }),
              {
                __internalSetHasError: k,
                __internalProcessCheckoutResponse: w,
              } = (0, a.useDispatch)(n.CHECKOUT_STORE_KEY),
              f = (0, a.useSelect)(
                (e) => e(n.VALIDATION_STORE_KEY).hasValidationErrors
              ),
              { shippingErrorStatus: y } = (0, F.d)(),
              { billingAddress: b, shippingAddress: E } = (0, a.useSelect)(
                (e) => e(n.CART_STORE_KEY).getCustomerData()
              ),
              {
                cartNeedsPayment: v,
                cartNeedsShipping: C,
                receiveCartContents: S,
              } = (0, c.b)(),
              {
                activePaymentMethod: T,
                paymentMethodData: O,
                isExpressPaymentMethodActive: R,
                hasPaymentError: P,
                isPaymentReady: N,
                shouldSavePayment: x,
              } = (0, a.useSelect)((e) => {
                const t = e(n.PAYMENT_STORE_KEY);
                return {
                  activePaymentMethod: t.getActivePaymentMethod(),
                  paymentMethodData: t.getPaymentMethodData(),
                  isExpressPaymentMethodActive:
                    t.isExpressPaymentMethodActive(),
                  hasPaymentError: t.hasPaymentError(),
                  isPaymentReady: t.isPaymentReady(),
                  shouldSavePayment: t.getShouldSavePaymentMethod(),
                };
              }, []),
              A = (0, i.getPaymentMethods)(),
              I = (0, i.getExpressPaymentMethods)(),
              M = (0, o.useRef)(b),
              D = (0, o.useRef)(E),
              U = (0, o.useRef)(r),
              [B, j] = (0, o.useState)(!1),
              H = (0, o.useMemo)(() => {
                var e;
                const t = { ...I, ...A };
                return null == t || null === (e = t[T]) || void 0 === e
                  ? void 0
                  : e.paymentMethodId;
              }, [T, I, A]),
              L = (f() && !R) || P || y.hasError,
              V = !t && !L && (N || !v) && s;
            (0, o.useEffect)(() => {
              L === t || (!s && !l) || R || k(L);
            }, [L, t, s, l, R, k]),
              (0, o.useEffect)(() => {
                (M.current = b), (D.current = E), (U.current = r);
              }, [b, E, r]);
            const $ = (0, o.useCallback)(
              () =>
                f()
                  ? void 0 !==
                      (0, a.select)(n.VALIDATION_STORE_KEY).getValidationError(
                        "shipping-rates-error"
                      ) && {
                      errorMessage: (0, m.__)(
                        "Sorry, this order requires a shipping option.",
                        "woocommerce"
                      ),
                    }
                  : P
                  ? {
                      errorMessage: (0, m.__)(
                        "There was a problem with your payment option.",
                        "woocommerce"
                      ),
                      context: "wc/checkout/payments",
                    }
                  : !y.hasError || {
                      errorMessage: (0, m.__)(
                        "There was a problem with your shipping option.",
                        "woocommerce"
                      ),
                      context: "wc/checkout/shipping-methods",
                    },
              [f, P, y.hasError]
            );
            (0, o.useEffect)(() => {
              let t;
              return (
                R || (t = e($, 0)),
                () => {
                  R || "function" != typeof t || t();
                }
              );
            }, [e, $, R]),
              (0, o.useEffect)(() => {
                U.current && (window.location.href = U.current);
              }, [u]);
            const Z = (0, o.useCallback)(async () => {
              if (B) return;
              j(!0), (0, q.xA)();
              const e = v
                  ? { payment_method: H, payment_data: G(O, x, T) }
                  : {},
                t = {
                  shipping_address: C ? (0, J.QI)(D.current) : void 0,
                  billing_address: (0, J.QI)(M.current),
                  additional_fields: g,
                  customer_note: p,
                  create_account: d,
                  ...e,
                  extensions: { ..._ },
                };
              z()({
                path: "/wc/store/v1/checkout",
                method: "POST",
                data: t,
                cache: "no-store",
                parse: !1,
              })
                .then((e) => {
                  if (((0, K.assertResponseIsValid)(e), W(e.headers), !e.ok))
                    throw e;
                  return e.json();
                })
                .then((e) => {
                  w(e), j(!1);
                })
                .catch((e) => {
                  W(null == e ? void 0 : e.headers);
                  try {
                    e.json()
                      .then((e) => e)
                      .then((e) => {
                        var t;
                        null !== (t = e.data) &&
                          void 0 !== t &&
                          t.cart &&
                          S(e.data.cart),
                          (0, n.processErrorResponse)(e),
                          w(e);
                      });
                  } catch {
                    let e = (0, m.__)(
                      "Something went wrong when placing the order. Check your email for order updates before retrying.",
                      "woocommerce"
                    );
                    0 !== h &&
                      (e = (0, m.__)(
                        "Something went wrong when placing the order. Check your account's order history or your email for order updates before retrying.",
                        "woocommerce"
                      )),
                      (0, n.processErrorResponse)({
                        code: "unknown_error",
                        message: e,
                        data: null,
                      });
                  }
                  k(!0), j(!1);
                });
            }, [B, v, H, O, x, T, p, d, _, g, C, S, k, w]);
            return (
              (0, o.useEffect)(() => {
                V && !B && Z();
              }, [Z, V, B]),
              null
            );
          },
          X = ({ children: e, redirectUrl: t }) =>
            (0, l.createElement)(
              Y.F,
              { redirectUrl: t },
              (0, l.createElement)(
                F.l,
                null,
                (0, l.createElement)(
                  V.E,
                  null,
                  e,
                  (0, l.createElement)(
                    h,
                    {
                      renderError: f.CURRENT_USER_IS_ADMIN ? null : () => null,
                    },
                    (0, l.createElement)(L.PluginArea, {
                      scope: "woocommerce-checkout",
                    })
                  ),
                  (0, l.createElement)(Z, null)
                )
              )
            );
        var Q = r(9136);
        r(906);
        const ee = ({ children: e, className: t }) =>
          (0, l.createElement)(
            Q.v,
            { className: D()("wc-block-components-sidebar-layout", t) },
            e
          );
        var te = r(711);
        r(2996);
        const re = (e) => {
          if (!e) return;
          const t = e.getBoundingClientRect().bottom;
          (t >= 0 && t <= window.innerHeight) || e.scrollIntoView();
        };
        r(2735);
        var oe = r(444);
        const se = (0, l.createElement)(
          oe.SVG,
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
          (0, l.createElement)("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
          (0, l.createElement)("path", {
            d: "M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z",
          })
        );
        var ce = r(2911);
        r(8140);
        const ae = () =>
            (0, l.createElement)(
              "div",
              { className: "wc-block-checkout-empty" },
              (0, l.createElement)(ce.Z, {
                className: "wc-block-checkout-empty__image",
                icon: se,
                size: 100,
              }),
              (0, l.createElement)(
                "strong",
                { className: "wc-block-checkout-empty__title" },
                (0, m.__)("Your cart is currently empty!", "woocommerce")
              ),
              (0, l.createElement)(
                "p",
                { className: "wc-block-checkout-empty__description" },
                (0, m.__)(
                  "Checkout is not available whilst your cart is empty—please take a look through our store and come back when you're ready to place an order.",
                  "woocommerce"
                )
              ),
              p.Pe &&
                (0, l.createElement)(
                  "span",
                  { className: "wp-block-button" },
                  (0, l.createElement)(
                    "a",
                    { href: p.Pe, className: "wp-block-button__link" },
                    (0, m.__)("Browse store", "woocommerce")
                  )
                )
            ),
          ne = (0, l.createElement)(
            oe.SVG,
            { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
            (0, l.createElement)("path", {
              d: "M22.7 22.7l-20-20L2 2l-.7-.7L0 2.5 4.4 7l2.2 4.7L5.2 14A2 2 0 007 17h7.5l1.3 1.4a2 2 0 102.8 2.8l2.9 2.8 1.2-1.3zM7.4 15a.2.2 0 01-.2-.3l.9-1.7h2.4l2 2h-5zm8.2-2a2 2 0 001.7-1l3.6-6.5.1-.5c0-.6-.4-1-1-1H6.5l9 9zM7 18a2 2 0 100 4 2 2 0 000-4z",
            }),
            (0, l.createElement)("path", { fill: "none", d: "M0 0h24v24H0z" })
          );
        var ie = r(2629);
        r(4200);
        const le = [
            "woocommerce_rest_product_out_of_stock",
            "woocommerce_rest_product_not_purchasable",
            "woocommerce_rest_product_partially_out_of_stock",
            "woocommerce_rest_product_too_many_in_cart",
            "woocommerce_rest_cart_item_error",
          ],
          ue = (0, f.getSetting)("checkoutData", {}),
          me = ({ errorData: e }) => {
            let t = (0, m.__)("Checkout error", "woocommerce");
            return (
              le.includes(e.code) &&
                (t = (0, m.__)(
                  "There is a problem with your cart",
                  "woocommerce"
                )),
              (0, l.createElement)(
                "strong",
                { className: "wc-block-checkout-error_title" },
                t
              )
            );
          },
          pe = ({ errorData: e }) => {
            let t = e.message;
            return (
              le.includes(e.code) &&
                (t =
                  t +
                  " " +
                  (0, m.__)(
                    "Please edit your cart and try again.",
                    "woocommerce"
                  )),
              (0, l.createElement)(
                "p",
                { className: "wc-block-checkout-error__description" },
                t
              )
            );
          },
          de = ({ errorData: e }) => {
            let t = (0, m.__)("Retry", "woocommerce"),
              r = "javascript:window.location.reload(true)";
            return (
              le.includes(e.code) &&
                ((t = (0, m.__)("Edit your cart", "woocommerce")), (r = p.fh)),
              (0, l.createElement)(
                "span",
                { className: "wp-block-button" },
                (0, l.createElement)(
                  "a",
                  { href: r, className: "wp-block-button__link" },
                  t
                )
              )
            );
          },
          _e = () => {
            const e = { code: "", message: "", ...(ue || {}) },
              t = {
                code: e.code || "unknown",
                message:
                  (0, ie.decodeEntities)(e.message) ||
                  (0, m.__)(
                    "There was a problem checking out. Please try again. If the problem persists, please get in touch with us so we can assist.",
                    "woocommerce"
                  ),
              };
            return (0, l.createElement)(
              "div",
              { className: "wc-block-checkout-error" },
              (0, l.createElement)(ce.Z, {
                className: "wc-block-checkout-error__image",
                icon: ne,
                size: 100,
              }),
              (0, l.createElement)(me, { errorData: t }),
              (0, l.createElement)(pe, { errorData: t }),
              (0, l.createElement)(de, { errorData: t })
            );
          };
        var he = r(2104),
          ge = r(7151);
        const ke = () =>
            (0, l.createElement)(
              "div",
              { className: "wc-block-must-login-prompt" },
              (0, m.__)("You must be logged in to checkout.", "woocommerce"),
              " ",
              (0, l.createElement)(
                "a",
                { href: he.dG },
                (0, m.__)("Click here to log in.", "woocommerce")
              )
            ),
          we = ({ attributes: e, children: t }) => {
            const { hasOrder: r, customerId: o } = (0, a.useSelect)((e) => {
                const t = e(n.CHECKOUT_STORE_KEY);
                return {
                  hasOrder: t.hasOrder(),
                  customerId: t.getCustomerId(),
                };
              }),
              { cartItems: s, cartIsLoading: i } = (0, c.b)(),
              {
                showCompanyField: u,
                requireCompanyField: m,
                showApartmentField: p,
                showPhoneField: d,
                requirePhoneField: _,
              } = e;
            return i || 0 !== s.length
              ? r
                ? (0, he.h7)(o) &&
                  !(0, f.getSetting)("checkoutAllowsSignup", !1)
                  ? (0, l.createElement)(ke, null)
                  : (0, l.createElement)(
                      ge.Tb.Provider,
                      {
                        value: {
                          showCompanyField: u,
                          requireCompanyField: m,
                          showApartmentField: p,
                          showPhoneField: d,
                          requirePhoneField: _,
                        },
                      },
                      t
                    )
                : (0, l.createElement)(_e, null)
              : (0, l.createElement)(ae, null);
          },
          fe = ({ scrollToTop: e }) => {
            const { hasError: t, isIdle: r } = (0, a.useSelect)((e) => {
                const t = e(n.CHECKOUT_STORE_KEY);
                return { isIdle: t.isIdle(), hasError: t.hasError() };
              }),
              { hasValidationErrors: s } = (0, a.useSelect)((e) => ({
                hasValidationErrors: e(
                  n.VALIDATION_STORE_KEY
                ).hasValidationErrors(),
              })),
              { showAllValidationErrors: c } = (0, a.useDispatch)(
                n.VALIDATION_STORE_KEY
              ),
              i = r && t && s;
            return (
              (0, o.useEffect)(() => {
                let t;
                return (
                  i &&
                    (c(),
                    (t = window.setTimeout(() => {
                      e({
                        focusableSelector: "input:invalid, .has-error input",
                      });
                    }, 50))),
                  () => {
                    clearTimeout(t);
                  }
                );
              }, [i, e, c]),
              null
            );
          },
          ye =
            ((Ce = ({ attributes: e, children: t, scrollToTop: r }) => (
              (() => {
                const e = "woocommerce/checkout-totals-block",
                  { shippingRates: t } = (0, j.V)(),
                  r = (0, U.CN)(t),
                  {
                    prefersCollection: s,
                    isRateBeingSelected: c,
                    shippingNotices: i,
                    cartData: l,
                  } = (0, a.useSelect)((t) => ({
                    cartData: t(n.CART_STORE_KEY).getCartData(),
                    prefersCollection: t(
                      n.CHECKOUT_STORE_KEY
                    ).prefersCollection(),
                    isRateBeingSelected: t(
                      n.CART_STORE_KEY
                    ).isShippingRateBeingSelected(),
                    shippingNotices: t("core/notices").getNotices(e),
                  })),
                  { createInfoNotice: u, removeNotice: p } = (0, a.useDispatch)(
                    "core/notices"
                  );
                (0, o.useEffect)(() => {
                  var t;
                  if (!r || c) return;
                  const o =
                      null == l ||
                      null === (t = l.shippingRates) ||
                      void 0 === t
                        ? void 0
                        : t.reduce((e, t) => {
                            const r = t.shipping_rates.find((e) => e.selected);
                            return (
                              void 0 !== (null == r ? void 0 : r.method_id) &&
                                e.push(null == r ? void 0 : r.method_id),
                              e
                            );
                          }, []),
                    a = Object.values(o).some(
                      (e) => !!(0, K.isString)(e) && (0, B.Ep)(e)
                    );
                  !r || s || c || !a || 0 !== i.length
                    ? (s || !a) &&
                      i.length > 0 &&
                      p("wc-blocks-totals-shipping-warning", e)
                    : u(
                        (0, m.__)(
                          "Totals will be recalculated when a valid shipping method is selected.",
                          "woocommerce"
                        ),
                        {
                          id: "wc-blocks-totals-shipping-warning",
                          isDismissible: !1,
                          context: e,
                        }
                      );
                }, [null == l ? void 0 : l.shippingRates, u, r, c, s, p, i, t]);
              })(),
              (0, l.createElement)(
                h,
                {
                  header: (0, m.__)(
                    "Something went wrong. Please contact us for assistance.",
                    "woocommerce"
                  ),
                  text: (0, o.createInterpolateElement)(
                    (0, m.__)(
                      "The checkout has encountered an unexpected error. <button>Try reloading the page</button>. If the error persists, please get in touch with us so we can assist.",
                      "woocommerce"
                    ),
                    {
                      button: (0, l.createElement)("button", {
                        className: "wc-block-link-button",
                        onClick: he.sl,
                      }),
                    }
                  ),
                  showErrorMessage: f.CURRENT_USER_IS_ADMIN,
                },
                (0, l.createElement)(te.StoreNoticesContainer, {
                  context: [H.n7.CHECKOUT, H.n7.CART],
                }),
                (0, l.createElement)(
                  b.SlotFillProvider,
                  null,
                  (0, l.createElement)(
                    X,
                    null,
                    (0, l.createElement)(
                      ee,
                      {
                        className: D()("wc-block-checkout", {
                          "has-dark-controls": e.hasDarkControls,
                        }),
                      },
                      (0, l.createElement)(we, { attributes: e }, t),
                      (0, l.createElement)(fe, { scrollToTop: r })
                    )
                  )
                )
              )
            )),
            (e) => {
              const t = (0, o.useRef)(null);
              return (0, l.createElement)(
                l.Fragment,
                null,
                (0, l.createElement)("div", {
                  className: "with-scroll-to-top__scroll-point",
                  ref: t,
                  "aria-hidden": !0,
                }),
                (0, l.createElement)(Ce, {
                  ...e,
                  scrollToTop: (e) => {
                    null !== t.current &&
                      ((e, t) => {
                        const { focusableSelector: r } = t || {};
                        window &&
                          Number.isFinite(window.innerHeight) &&
                          (r
                            ? ((e, t) => {
                                var r;
                                const o =
                                  (null === (r = e.parentElement) ||
                                  void 0 === r
                                    ? void 0
                                    : r.querySelectorAll(t)) || [];
                                if (o.length) {
                                  const e = o[0];
                                  re(e), null == e || e.focus();
                                } else re(e);
                              })(e, r)
                            : re(e));
                      })(t.current, e);
                  },
                })
              );
            }),
          be = "woocommerce/checkout",
          Ee = {
            hasDarkControls: {
              type: "boolean",
              default: (0, f.getSetting)("hasDarkEditorStyleSupport", !1),
            },
            showRateAfterTaxName: {
              type: "boolean",
              default: (0, f.getSetting)("displayCartPricesIncludingTax", !1),
            },
          },
          ve = JSON.parse(
            '{"Y4":{"isPreview":{"type":"boolean","default":false,"save":false},"showCompanyField":{"type":"boolean","default":false},"requireCompanyField":{"type":"boolean","default":false},"showApartmentField":{"type":"boolean","default":true},"showPhoneField":{"type":"boolean","default":true},"requirePhoneField":{"type":"boolean","default":false},"align":{"type":"string","default":"wide"}}}'
          );
        var Ce;
        (({
          Block: e,
          selector: t,
          blockName: r,
          getProps: o = () => ({}),
          blockMap: s,
          blockWrapper: c,
        }) => {
          w({
            Block: e,
            selector: t,
            getProps: (e, t) => {
              const a = v({
                block: r,
                blockMap: s,
                children: e.children || [],
                blockWrapper: c,
              });
              return { ...o(e, t), children: a };
            },
          });
        })({
          Block: ye,
          blockName: be,
          selector: ".wp-block-woocommerce-checkout",
          getProps: (e) => ({
            attributes: s(
              { ...ve.Y4, ...Ee },
              e instanceof HTMLElement ? e.dataset : {}
            ),
          }),
          blockMap: (0, i.getRegisteredBlockComponents)(be),
          blockWrapper: ({ children: e }) => {
            const { extensions: t, receiveCart: r, ...s } = (0, c.b)(),
              i = (() => {
                const { __internalSetExtensionData: e } = (0, a.useDispatch)(
                    n.CHECKOUT_STORE_KEY
                  ),
                  t = (0, a.useSelect)((e) =>
                    e(n.CHECKOUT_STORE_KEY).getExtensionData()
                  ),
                  r = (0, o.useRef)(t),
                  s = (0, o.useCallback)(
                    (t, r, o) => {
                      e(t, { [r]: o });
                    },
                    [e]
                  );
                return { extensionData: r.current, setExtensionData: s };
              })(),
              l = (() => {
                const {
                    clearValidationError: e,
                    hideValidationError: t,
                    setValidationErrors: r,
                  } = (0, a.useDispatch)(n.VALIDATION_STORE_KEY),
                  s = "extensions-errors",
                  { hasValidationErrors: c, getValidationError: i } = (0,
                  a.useSelect)((e) => {
                    const t = e(n.VALIDATION_STORE_KEY);
                    return {
                      hasValidationErrors: t.hasValidationErrors(),
                      getValidationError: (e) =>
                        t.getValidationError(`${s}-${e}`),
                    };
                  });
                return {
                  hasValidationErrors: c,
                  getValidationError: i,
                  clearValidationError: (0, o.useCallback)(
                    (t) => e(`${s}-${t}`),
                    [e]
                  ),
                  hideValidationError: (0, o.useCallback)(
                    (e) => t(`${s}-${e}`),
                    [t]
                  ),
                  setValidationErrors: (0, o.useCallback)(
                    (e) =>
                      r(
                        Object.fromEntries(
                          Object.entries(e).map(([e, t]) => [`${s}-${e}`, t])
                        )
                      ),
                    [r]
                  ),
                };
              })();
            return o.Children.map(e, (e) => {
              if ((0, o.isValidElement)(e)) {
                const r = {
                  extensions: t,
                  cart: s,
                  checkoutExtensionData: i,
                  validation: l,
                };
                return (0, o.cloneElement)(e, r);
              }
              return e;
            });
          },
        });
      },
      2104: (e, t, r) => {
        "use strict";
        r.d(t, { Tg: () => m, dG: () => n, h7: () => i, sl: () => p });
        var o = r(8752),
          s = r(4617),
          c = r(6946),
          a = r(2629);
        const n = `${o.ZE}?redirect_to=${encodeURIComponent(
            window.location.href
          )}`,
          i = (e) => !e && !(0, s.getSetting)("checkoutAllowsGuest", !1),
          l = (e) =>
            (0, c.isObject)(o.JJ[e.country]) &&
            (0, c.isString)(o.JJ[e.country][e.state])
              ? (0, a.decodeEntities)(o.JJ[e.country][e.state])
              : e.state,
          u = (e) =>
            (0, c.isString)(o.DK[e.country])
              ? (0, a.decodeEntities)(o.DK[e.country])
              : e.country,
          m = (e, t) => {
            const r = ((e) =>
                [
                  "{name}",
                  "{name_upper}",
                  "{first_name} {last_name}",
                  "{last_name} {first_name}",
                  "{first_name_upper} {last_name_upper}",
                  "{last_name_upper} {first_name_upper}",
                  "{first_name} {last_name_upper}",
                  "{first_name_upper} {last_name}",
                  "{last_name} {first_name_upper}",
                  "{last_name_upper} {first_name}",
                ].find((t) => e.indexOf(t) >= 0) || "")(t),
              o = t.replace(`${r}\n`, ""),
              s = [
                ["{company}", (null == e ? void 0 : e.company) || ""],
                ["{address_1}", (null == e ? void 0 : e.address_1) || ""],
                ["{address_2}", (null == e ? void 0 : e.address_2) || ""],
                ["{city}", (null == e ? void 0 : e.city) || ""],
                ["{state}", l(e)],
                ["{postcode}", (null == e ? void 0 : e.postcode) || ""],
                ["{country}", u(e)],
                [
                  "{company_upper}",
                  ((null == e ? void 0 : e.company) || "").toUpperCase(),
                ],
                [
                  "{address_1_upper}",
                  ((null == e ? void 0 : e.address_1) || "").toUpperCase(),
                ],
                [
                  "{address_2_upper}",
                  ((null == e ? void 0 : e.address_2) || "").toUpperCase(),
                ],
                [
                  "{city_upper}",
                  ((null == e ? void 0 : e.city) || "").toUpperCase(),
                ],
                ["{state_upper}", l(e).toUpperCase()],
                ["{state_code}", (null == e ? void 0 : e.state) || ""],
                [
                  "{postcode_upper}",
                  ((null == e ? void 0 : e.postcode) || "").toUpperCase(),
                ],
                ["{country_upper}", u(e).toUpperCase()],
              ],
              c = [
                [
                  "{name}",
                  (null == e ? void 0 : e.first_name) +
                    (null != e && e.first_name && null != e && e.last_name
                      ? " "
                      : "") +
                    (null == e ? void 0 : e.last_name),
                ],
                [
                  "{name_upper}",
                  (
                    (null == e ? void 0 : e.first_name) +
                    (null != e && e.first_name && null != e && e.last_name
                      ? " "
                      : "") +
                    (null == e ? void 0 : e.last_name)
                  ).toUpperCase(),
                ],
                ["{first_name}", (null == e ? void 0 : e.first_name) || ""],
                ["{last_name}", (null == e ? void 0 : e.last_name) || ""],
                [
                  "{first_name_upper}",
                  ((null == e ? void 0 : e.first_name) || "").toUpperCase(),
                ],
                [
                  "{last_name_upper}",
                  ((null == e ? void 0 : e.last_name) || "").toUpperCase(),
                ],
              ];
            let a = r;
            c.forEach(([e, t]) => {
              a = a.replace(e, t);
            });
            let n = o;
            s.forEach(([e, t]) => {
              n = n.replace(e, t);
            });
            const i = n
              .replace(/^,\s|,\s$/g, "")
              .replace(/\n{2,}/, "\n")
              .split("\n")
              .filter(Boolean);
            return { name: a, address: i };
          },
          p = () => {
            window.location.reload(!0);
          };
      },
      5585: (e, t, r) => {
        "use strict";
        r.d(t, { s: () => i });
        var o = r(5736),
          s = r(8752),
          c = r(4617);
        const a = [
            {
              destination: {
                address_1: "",
                address_2: "",
                city: "",
                state: "",
                postcode: "",
                country: "",
              },
              package_id: 0,
              name: (0, o.__)("Shipping", "woocommerce"),
              items: [
                {
                  key: "33e75ff09dd601bbe69f351039152189",
                  name: (0, o._x)(
                    "Beanie with Logo",
                    "example product in Cart Block",
                    "woocommerce"
                  ),
                  quantity: 2,
                },
                {
                  key: "6512bd43d9caa6e02c990b0a82652dca",
                  name: (0, o._x)(
                    "Beanie",
                    "example product in Cart Block",
                    "woocommerce"
                  ),
                  quantity: 1,
                },
              ],
              shipping_rates: [
                {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  name: (0, o.__)("Flat rate shipping", "woocommerce"),
                  description: "",
                  delivery_time: "",
                  price: "500",
                  taxes: "0",
                  rate_id: "flat_rate:0",
                  instance_id: 0,
                  meta_data: [],
                  method_id: "flat_rate",
                  selected: !0,
                },
                {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  name: (0, o.__)("Free shipping", "woocommerce"),
                  description: "",
                  delivery_time: "",
                  price: "0",
                  taxes: "0",
                  rate_id: "free_shipping:1",
                  instance_id: 0,
                  meta_data: [],
                  method_id: "flat_rate",
                  selected: !1,
                },
                {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  name: (0, o.__)("Local pickup", "woocommerce"),
                  description: "",
                  delivery_time: "",
                  price: "0",
                  taxes: "0",
                  rate_id: "pickup_location:1",
                  instance_id: 1,
                  meta_data: [
                    { key: "pickup_location", value: "New York" },
                    {
                      key: "pickup_address",
                      value: "123 Easy Street, New York, 12345",
                    },
                  ],
                  method_id: "pickup_location",
                  selected: !1,
                },
                {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  name: (0, o.__)("Local pickup", "woocommerce"),
                  description: "",
                  delivery_time: "",
                  price: "0",
                  taxes: "0",
                  rate_id: "pickup_location:2",
                  instance_id: 1,
                  meta_data: [
                    { key: "pickup_location", value: "Los Angeles" },
                    {
                      key: "pickup_address",
                      value: "123 Easy Street, Los Angeles, California, 90210",
                    },
                  ],
                  method_id: "pickup_location",
                  selected: !1,
                },
              ],
            },
          ],
          n = (0, c.getSetting)("displayCartPricesIncludingTax", !1),
          i = {
            coupons: [],
            shipping_rates:
              (0, c.getSetting)("shippingMethodsExist", !1) ||
              (0, c.getSetting)("localPickupEnabled", !1)
                ? a
                : [],
            items: [
              {
                key: "1",
                id: 1,
                type: "simple",
                quantity: 2,
                catalog_visibility: "visible",
                name: (0, o.__)("Beanie", "woocommerce"),
                summary: (0, o.__)("Beanie", "woocommerce"),
                short_description: (0, o.__)(
                  "Warm hat for winter",
                  "woocommerce"
                ),
                description:
                  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
                sku: "woo-beanie",
                permalink: "https://example.org",
                low_stock_remaining: 2,
                backorders_allowed: !1,
                show_backorder_badge: !1,
                sold_individually: !1,
                quantity_limits: {
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                  editable: !0,
                },
                images: [
                  {
                    id: 10,
                    src: s.td + "previews/beanie.jpg",
                    thumbnail: s.td + "previews/beanie.jpg",
                    srcset: "",
                    sizes: "",
                    name: "",
                    alt: "",
                  },
                ],
                variation: [
                  {
                    attribute: (0, o.__)("Color", "woocommerce"),
                    value: (0, o.__)("Yellow", "woocommerce"),
                  },
                  {
                    attribute: (0, o.__)("Size", "woocommerce"),
                    value: (0, o.__)("Small", "woocommerce"),
                  },
                ],
                prices: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  price: n ? "12000" : "10000",
                  regular_price: n ? "12000" : "10000",
                  sale_price: n ? "12000" : "10000",
                  price_range: null,
                  raw_prices: {
                    precision: 6,
                    price: n ? "12000000" : "10000000",
                    regular_price: n ? "12000000" : "10000000",
                    sale_price: n ? "12000000" : "10000000",
                  },
                },
                totals: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  line_subtotal: "2000",
                  line_subtotal_tax: "400",
                  line_total: "2000",
                  line_total_tax: "400",
                },
                extensions: {},
                item_data: [],
              },
              {
                key: "2",
                id: 2,
                type: "simple",
                quantity: 1,
                catalog_visibility: "visible",
                name: (0, o.__)("Cap", "woocommerce"),
                summary: (0, o.__)("Cap", "woocommerce"),
                short_description: (0, o.__)(
                  "Lightweight baseball cap",
                  "woocommerce"
                ),
                description:
                  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
                sku: "woo-cap",
                low_stock_remaining: null,
                permalink: "https://example.org",
                backorders_allowed: !1,
                show_backorder_badge: !1,
                sold_individually: !1,
                quantity_limits: {
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                  editable: !0,
                },
                images: [
                  {
                    id: 11,
                    src: s.td + "previews/cap.jpg",
                    thumbnail: s.td + "previews/cap.jpg",
                    srcset: "",
                    sizes: "",
                    name: "",
                    alt: "",
                  },
                ],
                variation: [
                  {
                    attribute: (0, o.__)("Color", "woocommerce"),
                    value: (0, o.__)("Orange", "woocommerce"),
                  },
                ],
                prices: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  price: n ? "2400" : "2000",
                  regular_price: n ? "2400" : "2000",
                  sale_price: n ? "2400" : "2000",
                  price_range: null,
                  raw_prices: {
                    precision: 6,
                    price: n ? "24000000" : "20000000",
                    regular_price: n ? "24000000" : "20000000",
                    sale_price: n ? "24000000" : "20000000",
                  },
                },
                totals: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  line_subtotal: "2000",
                  line_subtotal_tax: "400",
                  line_total: "2000",
                  line_total_tax: "400",
                },
                extensions: {},
                item_data: [],
              },
            ],
            cross_sells: [
              {
                id: 1,
                name: (0, o.__)("Polo", "woocommerce"),
                parent: 0,
                type: "simple",
                variation: "",
                permalink: "https://example.org",
                sku: "woo-polo",
                short_description: (0, o.__)("Polo", "woocommerce"),
                description: (0, o.__)("Polo", "woocommerce"),
                on_sale: !1,
                prices: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  price: n ? "24000" : "20000",
                  regular_price: n ? "24000" : "20000",
                  sale_price: n ? "12000" : "10000",
                  price_range: null,
                },
                price_html: "",
                average_rating: "4.5",
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: s.td + "previews/polo.jpg",
                    thumbnail: s.td + "previews/polo.jpg",
                    srcset: "",
                    sizes: "",
                    name: "",
                    alt: "",
                  },
                ],
                categories: [],
                tags: [],
                attributes: [],
                variations: [],
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                is_on_backorder: !1,
                low_stock_remaining: null,
                sold_individually: !1,
                add_to_cart: {
                  text: "",
                  description: "",
                  url: "",
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                },
              },
              {
                id: 2,
                name: (0, o.__)("Long Sleeve Tee", "woocommerce"),
                parent: 0,
                type: "simple",
                variation: "",
                permalink: "https://example.org",
                sku: "woo-long-sleeve-tee",
                short_description: (0, o.__)("Long Sleeve Tee", "woocommerce"),
                description: (0, o.__)("Long Sleeve Tee", "woocommerce"),
                on_sale: !1,
                prices: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  price: n ? "30000" : "25000",
                  regular_price: n ? "30000" : "25000",
                  sale_price: n ? "30000" : "25000",
                  price_range: null,
                },
                price_html: "",
                average_rating: "4",
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: s.td + "previews/long-sleeve-tee.jpg",
                    thumbnail: s.td + "previews/long-sleeve-tee.jpg",
                    srcset: "",
                    sizes: "",
                    name: "",
                    alt: "",
                  },
                ],
                categories: [],
                tags: [],
                attributes: [],
                variations: [],
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                is_on_backorder: !1,
                low_stock_remaining: null,
                sold_individually: !1,
                add_to_cart: {
                  text: "",
                  description: "",
                  url: "",
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                },
              },
              {
                id: 3,
                name: (0, o.__)("Hoodie with Zipper", "woocommerce"),
                parent: 0,
                type: "simple",
                variation: "",
                permalink: "https://example.org",
                sku: "woo-hoodie-with-zipper",
                short_description: (0, o.__)(
                  "Hoodie with Zipper",
                  "woocommerce"
                ),
                description: (0, o.__)("Hoodie with Zipper", "woocommerce"),
                on_sale: !0,
                prices: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  price: n ? "15000" : "12500",
                  regular_price: n ? "30000" : "25000",
                  sale_price: n ? "15000" : "12500",
                  price_range: null,
                },
                price_html: "",
                average_rating: "1",
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: s.td + "previews/hoodie-with-zipper.jpg",
                    thumbnail: s.td + "previews/hoodie-with-zipper.jpg",
                    srcset: "",
                    sizes: "",
                    name: "",
                    alt: "",
                  },
                ],
                categories: [],
                tags: [],
                attributes: [],
                variations: [],
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                is_on_backorder: !1,
                low_stock_remaining: null,
                sold_individually: !1,
                add_to_cart: {
                  text: "",
                  description: "",
                  url: "",
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                },
              },
              {
                id: 4,
                name: (0, o.__)("Hoodie with Logo", "woocommerce"),
                parent: 0,
                type: "simple",
                variation: "",
                permalink: "https://example.org",
                sku: "woo-hoodie-with-logo",
                short_description: (0, o.__)("Polo", "woocommerce"),
                description: (0, o.__)("Polo", "woocommerce"),
                on_sale: !1,
                prices: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  price: n ? "4500" : "4250",
                  regular_price: n ? "4500" : "4250",
                  sale_price: n ? "4500" : "4250",
                  price_range: null,
                },
                price_html: "",
                average_rating: "5",
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: s.td + "previews/hoodie-with-logo.jpg",
                    thumbnail: s.td + "previews/hoodie-with-logo.jpg",
                    srcset: "",
                    sizes: "",
                    name: "",
                    alt: "",
                  },
                ],
                categories: [],
                tags: [],
                attributes: [],
                variations: [],
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                is_on_backorder: !1,
                low_stock_remaining: null,
                sold_individually: !1,
                add_to_cart: {
                  text: "",
                  description: "",
                  url: "",
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                },
              },
              {
                id: 5,
                name: (0, o.__)("Hoodie with Pocket", "woocommerce"),
                parent: 0,
                type: "simple",
                variation: "",
                permalink: "https://example.org",
                sku: "woo-hoodie-with-pocket",
                short_description: (0, o.__)(
                  "Hoodie with Pocket",
                  "woocommerce"
                ),
                description: (0, o.__)("Hoodie with Pocket", "woocommerce"),
                on_sale: !0,
                prices: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  price: n ? "3500" : "3250",
                  regular_price: n ? "4500" : "4250",
                  sale_price: n ? "3500" : "3250",
                  price_range: null,
                },
                price_html: "",
                average_rating: "3.75",
                review_count: 4,
                images: [
                  {
                    id: 17,
                    src: s.td + "previews/hoodie-with-pocket.jpg",
                    thumbnail: s.td + "previews/hoodie-with-pocket.jpg",
                    srcset: "",
                    sizes: "",
                    name: "",
                    alt: "",
                  },
                ],
                categories: [],
                tags: [],
                attributes: [],
                variations: [],
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                is_on_backorder: !1,
                low_stock_remaining: null,
                sold_individually: !1,
                add_to_cart: {
                  text: "",
                  description: "",
                  url: "",
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                },
              },
              {
                id: 6,
                name: (0, o.__)("T-Shirt", "woocommerce"),
                parent: 0,
                type: "simple",
                variation: "",
                permalink: "https://example.org",
                sku: "woo-t-shirt",
                short_description: (0, o.__)("T-Shirt", "woocommerce"),
                description: (0, o.__)("T-Shirt", "woocommerce"),
                on_sale: !1,
                prices: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  price: n ? "1800" : "1500",
                  regular_price: n ? "1800" : "1500",
                  sale_price: n ? "1800" : "1500",
                  price_range: null,
                },
                price_html: "",
                average_rating: "3",
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: s.td + "previews/tshirt.jpg",
                    thumbnail: s.td + "previews/tshirt.jpg",
                    srcset: "",
                    sizes: "",
                    name: "",
                    alt: "",
                  },
                ],
                categories: [],
                tags: [],
                attributes: [],
                variations: [],
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                is_on_backorder: !1,
                low_stock_remaining: null,
                sold_individually: !1,
                add_to_cart: {
                  text: "",
                  description: "",
                  url: "",
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                },
              },
            ],
            fees: [
              {
                id: "fee",
                name: (0, o.__)("Fee", "woocommerce"),
                totals: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  total: "100",
                  total_tax: "20",
                },
              },
            ],
            items_count: 3,
            items_weight: 0,
            needs_payment: !0,
            needs_shipping: (0, c.getSetting)("shippingEnabled", !0),
            has_calculated_shipping: !0,
            shipping_address: {
              first_name: "",
              last_name: "",
              company: "",
              address_1: "",
              address_2: "",
              city: "",
              state: "",
              postcode: "",
              country: "",
              phone: "",
            },
            billing_address: {
              first_name: "",
              last_name: "",
              company: "",
              address_1: "",
              address_2: "",
              city: "",
              state: "",
              postcode: "",
              country: "",
              email: "",
              phone: "",
            },
            totals: {
              currency_code: "USD",
              currency_symbol: "$",
              currency_minor_unit: 2,
              currency_decimal_separator: ".",
              currency_thousand_separator: ",",
              currency_prefix: "$",
              currency_suffix: "",
              total_items: "4000",
              total_items_tax: "800",
              total_fees: "100",
              total_fees_tax: "20",
              total_discount: "0",
              total_discount_tax: "0",
              total_shipping: "0",
              total_shipping_tax: "0",
              total_tax: "820",
              total_price: "4920",
              tax_lines: [
                {
                  name: (0, o.__)("Sales tax", "woocommerce"),
                  rate: "20%",
                  price: "820",
                },
              ],
            },
            errors: [],
            payment_methods: ["cod", "bacs", "cheque"],
            payment_requirements: ["products"],
            extensions: {},
          };
      },
      702: (e, t, r) => {
        "use strict";
        r.d(t, {
          Cm: () => _,
          DK: () => S,
          JJ: () => T,
          Ju: () => x,
          Kh: () => A,
          Pe: () => k,
          Sb: () => w,
          VF: () => g,
          ZE: () => b,
          bh: () => I,
          fh: () => y,
          mO: () => O,
          nm: () => R,
          oC: () => E,
          qy: () => f,
          td: () => h,
          vr: () => P,
        });
        var o,
          s,
          c,
          a,
          n,
          i,
          l,
          u,
          m,
          p,
          d = r(4617);
        const _ = (0, d.getSetting)("wcBlocksConfig", {
            buildPhase: 1,
            pluginUrl: "",
            productCount: 0,
            defaultAvatar: "",
            restApiRoutes: {},
            wordCountType: "words",
          }),
          h = _.pluginUrl + "assets/images/",
          g = _.pluginUrl + "assets/client/blocks/",
          k =
            (_.buildPhase,
            null === (o = d.STORE_PAGES.shop) || void 0 === o
              ? void 0
              : o.permalink),
          w =
            (null === (s = d.STORE_PAGES.checkout) || void 0 === s || s.id,
            null === (c = d.STORE_PAGES.checkout) ||
              void 0 === c ||
              c.permalink,
            null === (a = d.STORE_PAGES.privacy) || void 0 === a
              ? void 0
              : a.permalink),
          f =
            (null === (n = d.STORE_PAGES.privacy) || void 0 === n || n.title,
            null === (i = d.STORE_PAGES.terms) || void 0 === i
              ? void 0
              : i.permalink),
          y =
            (null === (l = d.STORE_PAGES.terms) || void 0 === l || l.title,
            null === (u = d.STORE_PAGES.cart) || void 0 === u || u.id,
            null === (m = d.STORE_PAGES.cart) || void 0 === m
              ? void 0
              : m.permalink),
          b =
            null !== (p = d.STORE_PAGES.myaccount) &&
            void 0 !== p &&
            p.permalink
              ? d.STORE_PAGES.myaccount.permalink
              : (0, d.getSetting)("wpLoginUrl", "/wp-login.php"),
          E = (0, d.getSetting)("localPickupEnabled", !1),
          v = (0, d.getSetting)("countries", {}),
          C = (0, d.getSetting)("countryData", {}),
          S = Object.fromEntries(
            Object.keys(C)
              .filter((e) => !0 === C[e].allowBilling)
              .map((e) => [e, v[e] || ""])
          ),
          T = Object.fromEntries(
            Object.keys(C)
              .filter((e) => !0 === C[e].allowBilling)
              .map((e) => [e, C[e].states || []])
          ),
          O = Object.fromEntries(
            Object.keys(C)
              .filter((e) => !0 === C[e].allowShipping)
              .map((e) => [e, v[e] || ""])
          ),
          R = Object.fromEntries(
            Object.keys(C)
              .filter((e) => !0 === C[e].allowShipping)
              .map((e) => [e, C[e].states || []])
          ),
          P = Object.fromEntries(
            Object.keys(C).map((e) => [e, C[e].locale || []])
          ),
          N = {
            address: [
              "first_name",
              "last_name",
              "company",
              "address_1",
              "address_2",
              "city",
              "postcode",
              "country",
              "state",
              "phone",
            ],
            contact: ["email"],
            order: [],
          },
          x = (0, d.getSetting)("addressFieldsLocations", N).address,
          A = (0, d.getSetting)("addressFieldsLocations", N).contact,
          I = (0, d.getSetting)("addressFieldsLocations", N).order;
        (0, d.getSetting)("additionalOrderFields", {}),
          (0, d.getSetting)("additionalContactFields", {}),
          (0, d.getSetting)("additionalAddressFields", {});
      },
      8752: (e, t, r) => {
        "use strict";
        r.d(t, {
          Cm: () => o.Cm,
          DK: () => o.DK,
          JJ: () => o.JJ,
          Ju: () => o.Ju,
          Kh: () => o.Kh,
          Pe: () => o.Pe,
          Sb: () => o.Sb,
          VF: () => o.VF,
          ZE: () => o.ZE,
          bh: () => o.bh,
          fh: () => o.fh,
          mO: () => o.mO,
          nm: () => o.nm,
          oC: () => o.oC,
          qy: () => o.qy,
          td: () => o.td,
          vr: () => o.vr,
        });
        var o = r(702);
      },
      8406: () => {},
      906: () => {},
      2996: () => {},
      4200: () => {},
      8140: () => {},
      2735: () => {},
      9196: (e) => {
        "use strict";
        e.exports = window.React;
      },
      2819: (e) => {
        "use strict";
        e.exports = window.lodash;
      },
      3554: (e) => {
        "use strict";
        e.exports = window.wc.blocksCheckout;
      },
      711: (e) => {
        "use strict";
        e.exports = window.wc.blocksComponents;
      },
      4293: (e) => {
        "use strict";
        e.exports = window.wc.priceFormat;
      },
      4801: (e) => {
        "use strict";
        e.exports = window.wc.wcBlocksData;
      },
      4613: (e) => {
        "use strict";
        e.exports = window.wc.wcBlocksRegistry;
      },
      721: (e) => {
        "use strict";
        e.exports = window.wc.wcBlocksSharedHocs;
      },
      4617: (e) => {
        "use strict";
        e.exports = window.wc.wcSettings;
      },
      6946: (e) => {
        "use strict";
        e.exports = window.wc.wcTypes;
      },
      5158: (e) => {
        "use strict";
        e.exports = window.wp.a11y;
      },
      987: (e) => {
        "use strict";
        e.exports = window.wp.autop;
      },
      4333: (e) => {
        "use strict";
        e.exports = window.wp.compose;
      },
      9818: (e) => {
        "use strict";
        e.exports = window.wp.data;
      },
      7180: (e) => {
        "use strict";
        e.exports = window.wp.deprecated;
      },
      5904: (e) => {
        "use strict";
        e.exports = window.wp.dom;
      },
      9307: (e) => {
        "use strict";
        e.exports = window.wp.element;
      },
      2694: (e) => {
        "use strict";
        e.exports = window.wp.hooks;
      },
      2629: (e) => {
        "use strict";
        e.exports = window.wp.htmlEntities;
      },
      5736: (e) => {
        "use strict";
        e.exports = window.wp.i18n;
      },
      9127: (e) => {
        "use strict";
        e.exports = window.wp.isShallowEqual;
      },
      9630: (e) => {
        "use strict";
        e.exports = window.wp.keycodes;
      },
      444: (e) => {
        "use strict";
        e.exports = window.wp.primitives;
      },
      6483: (e) => {
        "use strict";
        e.exports = window.wp.url;
      },
      2560: (e) => {
        "use strict";
        e.exports = window.wp.warning;
      },
      5266: (e) => {
        "use strict";
        e.exports = window.wp.wordcount;
      },
    },
    s = {};
  function c(e) {
    var t = s[e];
    if (void 0 !== t) return t.exports;
    var r = (s[e] = { exports: {} });
    return o[e].call(r.exports, r, r.exports, c), r.exports;
  }
  (c.m = o),
    (e = []),
    (c.O = (t, r, o, s) => {
      if (!r) {
        var a = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [r, o, s] = e[u], n = !0, i = 0; i < r.length; i++)
            (!1 & s || a >= s) && Object.keys(c.O).every((e) => c.O[e](r[i]))
              ? r.splice(i--, 1)
              : ((n = !1), s < a && (a = s));
          if (n) {
            e.splice(u--, 1);
            var l = o();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      s = s || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > s; u--) e[u] = e[u - 1];
      e[u] = [r, o, s];
    }),
    (c.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return c.d(t, { a: t }), t;
    }),
    (c.d = (e, t) => {
      for (var r in t)
        c.o(t, r) &&
          !c.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (c.f = {}),
    (c.e = (e) =>
      Promise.all(Object.keys(c.f).reduce((t, r) => (c.f[r](e, t), t), []))),
    (c.u = (e) =>
      ({
        406: "checkout-blocks/totals",
        724: "checkout-blocks/pickup-options",
        826: "checkout-blocks/shipping-address",
        834: "checkout-blocks/order-summary-cart-items",
        1370: "checkout-blocks/express-payment",
        1536: "checkout-blocks/order-summary-subtotal",
        1758: "checkout-blocks/order-note",
        3688: "checkout-blocks/order-summary-taxes",
        4063: "checkout-blocks/order-summary-shipping",
        4986: "checkout-blocks/fields",
        5210: "checkout-blocks/shipping-methods",
        5915: "checkout-blocks/order-summary",
        6262: "checkout-blocks/order-summary-discount",
        7162: "checkout-blocks/payment",
        7413: "checkout-blocks/shipping-method",
        7906: "checkout-blocks/order-summary-fee",
        8459: "checkout-blocks/order-summary-coupon-form",
        8806: "checkout-blocks/terms",
        8819: "checkout-blocks/additional-information",
        9357: "checkout-blocks/contact-information",
        9644: "checkout-blocks/actions",
        9662: "checkout-blocks/billing-address",
      }[e] +
      "-frontend.js?ver=" +
      {
        406: "f134c96f2d5e834df24d",
        724: "8ad8d282a108890311e8",
        826: "99dff9d43b238016864b",
        834: "277d47aeb34785806c2a",
        1370: "be0d5f10a7fc90bc45ff",
        1536: "96cc93bd4ae3364aba4d",
        1758: "9f635a417d9fe888eab1",
        3688: "79437e81adc0103de166",
        4063: "67354d4b0d23e333695b",
        4986: "643616c15cd7bfe6ad69",
        5210: "e0a052e1d6722da3a588",
        5915: "d13b445a93982a4cb147",
        6262: "0495a87bd0b88b03f2bb",
        7162: "556fe8197fd06c84d659",
        7413: "1aafb17d11dd59789284",
        7906: "ee9059ec8e1fc02eb4de",
        8459: "8e837a3d39ef25780ffb",
        8806: "bc202d67d7a03d242778",
        8819: "78a9a125b29281660cfc",
        9357: "bf66ef75e6b933ab6da1",
        9644: "b0909aeb3a15b786af3b",
        9662: "4673a800b4f04043c287",
      }[e])),
    (c.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (t = {}),
    (r = "webpackWcBlocksFrontendJsonp:"),
    (c.l = (e, o, s, a) => {
      if (t[e]) t[e].push(o);
      else {
        var n, i;
        if (void 0 !== s)
          for (
            var l = document.getElementsByTagName("script"), u = 0;
            u < l.length;
            u++
          ) {
            var m = l[u];
            if (
              m.getAttribute("src") == e ||
              m.getAttribute("data-webpack") == r + s
            ) {
              n = m;
              break;
            }
          }
        n ||
          ((i = !0),
          ((n = document.createElement("script")).charset = "utf-8"),
          (n.timeout = 120),
          c.nc && n.setAttribute("nonce", c.nc),
          n.setAttribute("data-webpack", r + s),
          (n.src = e)),
          (t[e] = [o]);
        var p = (r, o) => {
            (n.onerror = n.onload = null), clearTimeout(d);
            var s = t[e];
            if (
              (delete t[e],
              n.parentNode && n.parentNode.removeChild(n),
              s && s.forEach((e) => e(o)),
              r)
            )
              return r(o);
          },
          d = setTimeout(
            p.bind(null, void 0, { type: "timeout", target: n }),
            12e4
          );
        (n.onerror = p.bind(null, n.onerror)),
          (n.onload = p.bind(null, n.onload)),
          i && document.head.appendChild(n);
      }
    }),
    (c.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.j = 4231),
    (() => {
      var e;
      c.g.importScripts && (e = c.g.location + "");
      var t = c.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName("script");
        if (r.length) for (var o = r.length - 1; o > -1 && !e; ) e = r[o--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (c.p = e);
    })(),
    (() => {
      var e = { 4231: 0 };
      (c.f.j = (t, r) => {
        var o = c.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) r.push(o[2]);
          else {
            var s = new Promise((r, s) => (o = e[t] = [r, s]));
            r.push((o[2] = s));
            var a = c.p + c.u(t),
              n = new Error();
            c.l(
              a,
              (r) => {
                if (c.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                  var s = r && ("load" === r.type ? "missing" : r.type),
                    a = r && r.target && r.target.src;
                  (n.message =
                    "Loading chunk " + t + " failed.\n(" + s + ": " + a + ")"),
                    (n.name = "ChunkLoadError"),
                    (n.type = s),
                    (n.request = a),
                    o[1](n);
                }
              },
              "chunk-" + t,
              t
            );
          }
      }),
        (c.O.j = (t) => 0 === e[t]);
      var t = (t, r) => {
          var o,
            s,
            [a, n, i] = r,
            l = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (o in n) c.o(n, o) && (c.m[o] = n[o]);
            if (i) var u = i(c);
          }
          for (t && t(r); l < a.length; l++)
            (s = a[l]), c.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          return c.O(u);
        },
        r = (self.webpackChunkwebpackWcBlocksFrontendJsonp =
          self.webpackChunkwebpackWcBlocksFrontendJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var a = c.O(void 0, [2869], () => c(8489));
  (a = c.O(a)), ((wc = void 0 === wc ? {} : wc).checkout = a);
})();
