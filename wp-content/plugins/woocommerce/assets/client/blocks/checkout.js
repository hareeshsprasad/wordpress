(() => {
  var e,
    t = {
      3808: (e, t, o) => {
        "use strict";
        o.r(t);
        var c = o(9196),
          r = o(7608),
          n = o.n(r),
          s = o(444);
        const a = (0, c.createElement)(
          s.SVG,
          {
            xmlns: "http://www.w3.org/2000/SVG",
            viewBox: "0 0 24 24",
            fill: "none",
          },
          (0, c.createElement)("path", {
            stroke: "currentColor",
            strokeWidth: "1.5",
            fill: "none",
            d: "M5 3.75h14c.69 0 1.25.56 1.25 1.25v14c0 .69-.56 1.25-1.25 1.25H5c-.69 0-1.25-.56-1.25-1.25V5c0-.69.56-1.25 1.25-1.25z",
          }),
          (0, c.createElement)("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M6.4 10.75c0-.47.38-.85.85-.85h9.5c.47 0 .85.38.85.85v1.5c0 .47-.38.85-.85.85h-9.5a.85.85 0 01-.85-.85v-1.5zm1.2.35v.8h8.8v-.8H7.6zM12.4 15.25c0-.47.38-.85.85-.85h3.5c.47 0 .85.38.85.85v1.5c0 .47-.38.85-.85.85h-3.5a.85.85 0 01-.85-.85v-1.5zm1.2.35v.8h2.8v-.8h-2.8zM6.5 15.9a.6.6 0 01.6-.6h2.8a.6.6 0 010 1.2H7.1a.6.6 0 01-.6-.6zM6.5 7.9a.6.6 0 01.6-.6h9.8a.6.6 0 110 1.2H7.1a.6.6 0 01-.6-.6z",
            clipRule: "evenodd",
          })
        );
        var i = o(2911);
        const l = window.wp.blocks;
        var m = o(5736);
        const d = window.wp.blockEditor;
        var p = o(9307),
          u = o(4333);
        const h = (0, p.createContext)({
            hasContainerWidth: !1,
            containerClassName: "",
            isMobile: !1,
            isSmall: !1,
            isMedium: !1,
            isLarge: !1,
          }),
          _ = ({ children: e, className: t = "" }) => {
            const [o, r] = (() => {
                const [e, { width: t }] = (0, u.useResizeObserver)();
                let o = "";
                return (
                  t > 700
                    ? (o = "is-large")
                    : t > 520
                    ? (o = "is-medium")
                    : t > 400
                    ? (o = "is-small")
                    : t && (o = "is-mobile"),
                  [e, o]
                );
              })(),
              s = {
                hasContainerWidth: "" !== r,
                containerClassName: r,
                isMobile: "is-mobile" === r,
                isSmall: "is-small" === r,
                isMedium: "is-medium" === r,
                isLarge: "is-large" === r,
              };
            return (0, c.createElement)(
              h.Provider,
              { value: s },
              (0, c.createElement)("div", { className: n()(t, r) }, o, e)
            );
          };
        o(906);
        const g = ({ children: e, className: t }) =>
            (0, c.createElement)(
              _,
              { className: n()("wc-block-components-sidebar-layout", t) },
              e
            ),
          k = window.wp.data,
          E = (0, p.createContext)({
            isEditor: !1,
            currentPostId: 0,
            currentView: "",
            previewData: {},
            getPreviewData: () => ({}),
          }),
          w = () => (0, p.useContext)(E),
          b = ({
            children: e,
            currentPostId: t = 0,
            previewData: o = {},
            currentView: r = "",
            isPreview: n = !1,
          }) => {
            const s = (0, k.useSelect)(
                (e) => t || e("core/editor").getCurrentPostId(),
                [t]
              ),
              a = (0, p.useCallback)((e) => (o && e in o ? o[e] : {}), [o]),
              i = {
                isEditor: !0,
                currentPostId: s,
                currentView: r,
                previewData: o,
                getPreviewData: a,
                isPreview: n,
              };
            return (0, c.createElement)(E.Provider, { value: i }, e);
          },
          y = window.wp.plugins,
          v = window.wc.wcSettings;
        var f,
          C,
          S,
          P,
          N,
          T,
          R,
          A,
          x,
          I,
          O = o(7708);
        const M = (0, v.getSetting)("wcBlocksConfig", {
            buildPhase: 1,
            pluginUrl: "",
            productCount: 0,
            defaultAvatar: "",
            restApiRoutes: {},
            wordCountType: "words",
          }),
          B = M.pluginUrl + "assets/images/",
          D =
            (M.pluginUrl,
            M.buildPhase,
            null === (f = v.STORE_PAGES.shop) || void 0 === f || f.permalink,
            null === (C = v.STORE_PAGES.checkout) || void 0 === C
              ? void 0
              : C.id),
          F =
            (null === (S = v.STORE_PAGES.checkout) ||
              void 0 === S ||
              S.permalink,
            null === (P = v.STORE_PAGES.privacy) || void 0 === P
              ? void 0
              : P.permalink),
          L =
            (null === (N = v.STORE_PAGES.privacy) || void 0 === N || N.title,
            null === (T = v.STORE_PAGES.terms) || void 0 === T
              ? void 0
              : T.permalink),
          U =
            (null === (R = v.STORE_PAGES.terms) || void 0 === R || R.title,
            null === (A = v.STORE_PAGES.cart) || void 0 === A ? void 0 : A.id),
          Y =
            null === (x = v.STORE_PAGES.cart) || void 0 === x
              ? void 0
              : x.permalink,
          j =
            (null !== (I = v.STORE_PAGES.myaccount) &&
            void 0 !== I &&
            I.permalink
              ? v.STORE_PAGES.myaccount.permalink
              : (0, v.getSetting)("wpLoginUrl", "/wp-login.php"),
            (0, v.getSetting)("localPickupEnabled", !1)),
          V = (0, v.getSetting)("countries", {}),
          K = (0, v.getSetting)("countryData", {}),
          $ = Object.fromEntries(
            Object.keys(K)
              .filter((e) => !0 === K[e].allowBilling)
              .map((e) => [e, V[e] || ""])
          ),
          H = Object.fromEntries(
            Object.keys(K)
              .filter((e) => !0 === K[e].allowBilling)
              .map((e) => [e, K[e].states || []])
          ),
          q = Object.fromEntries(
            Object.keys(K)
              .filter((e) => !0 === K[e].allowShipping)
              .map((e) => [e, V[e] || ""])
          ),
          Z = Object.fromEntries(
            Object.keys(K)
              .filter((e) => !0 === K[e].allowShipping)
              .map((e) => [e, K[e].states || []])
          ),
          z = Object.fromEntries(
            Object.keys(K).map((e) => [e, K[e].locale || []])
          ),
          W = {
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
          G = (0, v.getSetting)("addressFieldsLocations", W).address,
          X = (0, v.getSetting)("addressFieldsLocations", W).contact,
          J = (0, v.getSetting)("addressFieldsLocations", W).order,
          Q =
            ((0, v.getSetting)("additionalOrderFields", {}),
            (0, v.getSetting)("additionalContactFields", {}),
            (0, v.getSetting)("additionalAddressFields", {}),
            ({
              imageUrl: e = `${B}/block-error.svg`,
              header: t = (0, m.__)("Oops!", "woocommerce"),
              text: o = (0, m.__)(
                "There was an error loading the content.",
                "woocommerce"
              ),
              errorMessage: r,
              errorMessagePrefix: n = (0, m.__)("Error:", "woocommerce"),
              button: s,
              showErrorBlock: a = !0,
            }) =>
              a
                ? (0, c.createElement)(
                    "div",
                    { className: "wc-block-error wc-block-components-error" },
                    e &&
                      (0, c.createElement)("img", {
                        className:
                          "wc-block-error__image wc-block-components-error__image",
                        src: e,
                        alt: "",
                      }),
                    (0, c.createElement)(
                      "div",
                      {
                        className:
                          "wc-block-error__content wc-block-components-error__content",
                      },
                      t &&
                        (0, c.createElement)(
                          "p",
                          {
                            className:
                              "wc-block-error__header wc-block-components-error__header",
                          },
                          t
                        ),
                      o &&
                        (0, c.createElement)(
                          "p",
                          {
                            className:
                              "wc-block-error__text wc-block-components-error__text",
                          },
                          o
                        ),
                      r &&
                        (0, c.createElement)(
                          "p",
                          {
                            className:
                              "wc-block-error__message wc-block-components-error__message",
                          },
                          n ? n + " " : "",
                          r
                        ),
                      s &&
                        (0, c.createElement)(
                          "p",
                          {
                            className:
                              "wc-block-error__button wc-block-components-error__button",
                          },
                          s
                        )
                    )
                  )
                : null);
        o(8406);
        class ee extends p.Component {
          constructor(...e) {
            super(...e),
              (0, O.Z)(this, "state", { errorMessage: "", hasError: !1 });
          }
          static getDerivedStateFromError(e) {
            return void 0 !== e.statusText && void 0 !== e.status
              ? {
                  errorMessage: (0, c.createElement)(
                    c.Fragment,
                    null,
                    (0, c.createElement)("strong", null, e.status),
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
                showErrorMessage: o = !0,
                showErrorBlock: r = !0,
                text: n,
                errorMessagePrefix: s,
                renderError: a,
                button: i,
              } = this.props,
              { errorMessage: l, hasError: m } = this.state;
            return m
              ? "function" == typeof a
                ? a({ errorMessage: l })
                : (0, c.createElement)(Q, {
                    showErrorBlock: r,
                    errorMessage: o ? l : null,
                    header: e,
                    imageUrl: t,
                    text: n,
                    errorMessagePrefix: s,
                    button: i,
                  })
              : this.props.children;
          }
        }
        const te = ee,
          oe = window.wc.wcBlocksData;
        var ce = o(7180),
          re = o.n(ce);
        let ne = (function (e) {
          return (
            (e.ADD_EVENT_CALLBACK = "add_event_callback"),
            (e.REMOVE_EVENT_CALLBACK = "remove_event_callback"),
            e
          );
        })({});
        const se = {},
          ae = (
            e = se,
            { type: t, eventType: o, id: c, callback: r, priority: n }
          ) => {
            const s = e.hasOwnProperty(o) ? new Map(e[o]) : new Map();
            switch (t) {
              case ne.ADD_EVENT_CALLBACK:
                return s.set(c, { priority: n, callback: r }), { ...e, [o]: s };
              case ne.REMOVE_EVENT_CALLBACK:
                return s.delete(c), { ...e, [o]: s };
            }
          },
          ie =
            (e, t) =>
            (o, c = 10) => {
              const r = ((e, t, o = 10) => ({
                id: Math.floor(Math.random() * Date.now()).toString(),
                type: ne.ADD_EVENT_CALLBACK,
                eventType: e,
                callback: t,
                priority: o,
              }))(e, o, c);
              return (
                t(r),
                () => {
                  var o;
                  t(
                    ((o = e),
                    { id: r.id, type: ne.REMOVE_EVENT_CALLBACK, eventType: o })
                  );
                }
              );
            },
          le = (0, p.createContext)({
            onPaymentProcessing: () => () => () => {},
            onPaymentSetup: () => () => () => {},
          }),
          me = ({ children: e }) => {
            const {
                isProcessing: t,
                isIdle: o,
                isCalculating: r,
                hasError: n,
              } = (0, k.useSelect)((e) => {
                const t = e(oe.CHECKOUT_STORE_KEY);
                return {
                  isProcessing: t.isProcessing(),
                  isIdle: t.isIdle(),
                  hasError: t.hasError(),
                  isCalculating: t.isCalculating(),
                };
              }),
              { isPaymentReady: s } = (0, k.useSelect)((e) => {
                const t = e(oe.PAYMENT_STORE_KEY);
                return {
                  isPaymentProcessing: t.isPaymentProcessing(),
                  isPaymentReady: t.isPaymentReady(),
                };
              }),
              { setValidationErrors: a } = (0, k.useDispatch)(
                oe.VALIDATION_STORE_KEY
              ),
              [i, l] = (0, p.useReducer)(ae, {}),
              { onPaymentSetup: m } = ((e) =>
                (0, p.useMemo)(
                  () => ({ onPaymentSetup: ie("payment_setup", e) }),
                  [e]
                ))(l),
              d = (0, p.useRef)(i);
            (0, p.useEffect)(() => {
              d.current = i;
            }, [i]);
            const {
              __internalSetPaymentProcessing: u,
              __internalSetPaymentIdle: h,
              __internalEmitPaymentProcessingEvent: _,
            } = (0, k.useDispatch)(oe.PAYMENT_STORE_KEY);
            (0, p.useEffect)(() => {
              !t || n || r || (u(), _(d.current, a));
            }, [t, n, r, u, _, a]),
              (0, p.useEffect)(() => {
                o && !s && h();
              }, [o, s, h]),
              (0, p.useEffect)(() => {
                n && s && h();
              }, [n, s, h]);
            const g = {
              onPaymentProcessing: (0, p.useMemo)(
                () =>
                  function (...e) {
                    return (
                      re()("onPaymentProcessing", {
                        alternative: "onPaymentSetup",
                        plugin: "WooCommerce Blocks",
                      }),
                      m(...e)
                    );
                  },
                [m]
              ),
              onPaymentSetup: m,
            };
            return (0, c.createElement)(le.Provider, { value: g }, e);
          },
          de = {
            NONE: "none",
            INVALID_ADDRESS: "invalid_address",
            UNKNOWN: "unknown_error",
          },
          pe = {
            INVALID_COUNTRY:
              "woocommerce_rest_cart_shipping_rates_invalid_country",
            MISSING_COUNTRY:
              "woocommerce_rest_cart_shipping_rates_missing_country",
            INVALID_STATE: "woocommerce_rest_cart_shipping_rates_invalid_state",
          },
          ue = {
            shippingErrorStatus: {
              isPristine: !0,
              isValid: !1,
              hasInvalidAddress: !1,
              hasError: !1,
            },
            dispatchErrorStatus: (e) => e,
            shippingErrorTypes: de,
            onShippingRateSuccess: () => () => {},
            onShippingRateFail: () => () => {},
            onShippingRateSelectSuccess: () => () => {},
            onShippingRateSelectFail: () => () => {},
          },
          he = (e, { type: t }) => (Object.values(de).includes(t) ? t : e),
          _e = "shipping_rates_success",
          ge = "shipping_rates_fail",
          ke = "shipping_rate_select_success",
          Ee = "shipping_rate_select_fail",
          we = (e) => ({
            onSuccess: ie(_e, e),
            onFail: ie(ge, e),
            onSelectSuccess: ie(ke, e),
            onSelectFail: ie(Ee, e),
          }),
          be = window.wc.wcTypes;
        let ye = (function (e) {
            return (
              (e.SUCCESS = "success"),
              (e.FAIL = "failure"),
              (e.ERROR = "error"),
              e
            );
          })({}),
          ve = (function (e) {
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
        const fe = async (e, t, o) => {
          const c = ((e, t) =>
              e[t]
                ? Array.from(e[t].values()).sort(
                    (e, t) => e.priority - t.priority
                  )
                : [])(e, t),
            r = [];
          for (const e of c)
            try {
              const t = await Promise.resolve(e.callback(o));
              "object" == typeof t && r.push(t);
            } catch (e) {
              console.error(e);
            }
          return !r.length || r;
        };
        var Ce = o(9262),
          Se = o.n(Ce);
        const Pe = window.wp.htmlEntities,
          Ne = (e) => {
            const t = {};
            return (
              void 0 !== e.label && (t.label = e.label),
              void 0 !== e.required && (t.required = e.required),
              void 0 !== e.hidden && (t.hidden = e.hidden),
              void 0 === e.label ||
                e.optionalLabel ||
                (t.optionalLabel = (0, m.sprintf)(
                  /* translators: %s Field label. */ /* translators: %s Field label. */
                  (0, m.__)("%s (optional)", "woocommerce"),
                  e.label
                )),
              e.priority &&
                ((0, be.isNumber)(e.priority) && (t.index = e.priority),
                (0, be.isString)(e.priority) &&
                  (t.index = parseInt(e.priority, 10))),
              e.hidden && (t.required = !1),
              t
            );
          },
          Te = Object.entries(z)
            .map(([e, t]) => [
              e,
              Object.entries(t)
                .map(([e, t]) => [e, Ne(t)])
                .reduce((e, [t, o]) => ((e[t] = o), e), {}),
            ])
            .reduce((e, [t, o]) => ((e[t] = o), e), {}),
          Re = (e, t, o = "") => {
            const c = o && void 0 !== Te[o] ? Te[o] : {};
            return e
              .map((e) => ({
                key: e,
                ...(v.defaultFields[e] || {}),
                ...(c[e] || {}),
                ...(t[e] || {}),
              }))
              .sort((e, t) => e.index - t.index);
          },
          Ae = window.wp.url,
          xe = (e, t) => e in t,
          Ie = (e) => {
            const t = Re(G, {}, e.country),
              o = Object.assign({}, e);
            return (
              t.forEach(({ key: t = "", hidden: c = !1 }) => {
                c && xe(t, e) && (o[t] = "");
              }),
              o
            );
          },
          Oe = (e) => {
            if (0 === Object.values(e).length) return null;
            const t = (0, be.isString)(q[e.country])
                ? (0, Pe.decodeEntities)(q[e.country])
                : "",
              o =
                (0, be.isObject)(Z[e.country]) &&
                (0, be.isString)(Z[e.country][e.state])
                  ? (0, Pe.decodeEntities)(Z[e.country][e.state])
                  : e.state,
              c = [];
            c.push(e.postcode.toUpperCase()),
              c.push(e.city),
              c.push(o),
              c.push(t);
            return c.filter(Boolean).join(", ") || null;
          },
          Me = (e) =>
            !!e.country &&
            Re(G, {}, e.country).every(
              ({ key: t = "", hidden: o = !1, required: c = !1 }) =>
                !(!o && c) || (xe(t, e) && "" !== e[t])
            ),
          Be = window.CustomEvent || null,
          De = (e, t, o = !1, c = !1) => {
            if ("function" != typeof jQuery) return () => {};
            const r = () => {
              ((
                e,
                {
                  bubbles: t = !1,
                  cancelable: o = !1,
                  element: c,
                  detail: r = {},
                }
              ) => {
                if (!Be) return;
                c || (c = document.body);
                const n = new Be(e, { bubbles: t, cancelable: o, detail: r });
                c.dispatchEvent(n);
              })(t, { bubbles: o, cancelable: c });
            };
            return jQuery(document).on(e, r), () => jQuery(document).off(e, r);
          },
          Fe = (e) => {
            const t = null == e ? void 0 : e.detail;
            (t && t.preserveCartData) ||
              (0, k.dispatch)(oe.CART_STORE_KEY).invalidateResolutionForStore();
          },
          Le = (e) => {
            ((null != e && e.persisted) ||
              "back_forward" ===
                (window.performance &&
                window.performance.getEntriesByType("navigation").length
                  ? window.performance.getEntriesByType("navigation")[0].type
                  : "")) &&
              (0, k.dispatch)(oe.CART_STORE_KEY).invalidateResolutionForStore();
          },
          Ue = () => {
            1 === window.wcBlocksStoreCartListeners.count &&
              window.wcBlocksStoreCartListeners.remove(),
              window.wcBlocksStoreCartListeners.count--;
          },
          Ye = {
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
          je = { ...Ye, email: "" },
          Ve = {
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
            tax_lines: oe.EMPTY_TAX_LINES,
            currency_code: "",
            currency_symbol: "",
            currency_minor_unit: 2,
            currency_decimal_separator: "",
            currency_thousand_separator: "",
            currency_prefix: "",
            currency_suffix: "",
          },
          Ke = (e) =>
            Object.fromEntries(
              Object.entries(e).map(([e, t]) => [e, (0, Pe.decodeEntities)(t)])
            ),
          $e = {
            cartCoupons: oe.EMPTY_CART_COUPONS,
            cartItems: oe.EMPTY_CART_ITEMS,
            cartFees: oe.EMPTY_CART_FEES,
            cartItemsCount: 0,
            cartItemsWeight: 0,
            crossSellsProducts: oe.EMPTY_CART_CROSS_SELLS,
            cartNeedsPayment: !0,
            cartNeedsShipping: !0,
            cartItemErrors: oe.EMPTY_CART_ITEM_ERRORS,
            cartTotals: Ve,
            cartIsLoading: !0,
            cartErrors: oe.EMPTY_CART_ERRORS,
            billingAddress: je,
            shippingAddress: Ye,
            shippingRates: oe.EMPTY_SHIPPING_RATES,
            isLoadingRates: !1,
            cartHasCalculatedShipping: !1,
            paymentMethods: oe.EMPTY_PAYMENT_METHODS,
            paymentRequirements: oe.EMPTY_PAYMENT_REQUIREMENTS,
            receiveCart: () => {},
            receiveCartContents: () => {},
            extensions: oe.EMPTY_EXTENSIONS,
          },
          He = (e = { shouldSelect: !0 }) => {
            const { isEditor: t, previewData: o } = w(),
              c = null == o ? void 0 : o.previewCart,
              { shouldSelect: r } = e,
              n = (0, p.useRef)();
            (0, p.useEffect)(
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
                  document.body.addEventListener("wc-blocks_added_to_cart", Fe),
                    document.body.addEventListener(
                      "wc-blocks_removed_from_cart",
                      Fe
                    ),
                    window.addEventListener("pageshow", Le);
                  const t = De("added_to_cart", "wc-blocks_added_to_cart"),
                    o = De("removed_from_cart", "wc-blocks_removed_from_cart");
                  (window.wcBlocksStoreCartListeners.count = 1),
                    (window.wcBlocksStoreCartListeners.remove = () => {
                      document.body.removeEventListener(
                        "wc-blocks_added_to_cart",
                        Fe
                      ),
                        document.body.removeEventListener(
                          "wc-blocks_removed_from_cart",
                          Fe
                        ),
                        window.removeEventListener("pageshow", Le),
                        t(),
                        o();
                    });
                })(),
                Ue
              ),
              []
            );
            const s = (0, k.useSelect)(
              (e, { dispatch: o }) => {
                if (!r) return $e;
                if (t)
                  return {
                    cartCoupons: c.coupons,
                    cartItems: c.items,
                    crossSellsProducts: c.cross_sells,
                    cartFees: c.fees,
                    cartItemsCount: c.items_count,
                    cartItemsWeight: c.items_weight,
                    cartNeedsPayment: c.needs_payment,
                    cartNeedsShipping: c.needs_shipping,
                    cartItemErrors: oe.EMPTY_CART_ITEM_ERRORS,
                    cartTotals: c.totals,
                    cartIsLoading: !1,
                    cartErrors: oe.EMPTY_CART_ERRORS,
                    billingData: je,
                    billingAddress: je,
                    shippingAddress: Ye,
                    extensions: oe.EMPTY_EXTENSIONS,
                    shippingRates: c.shipping_rates,
                    isLoadingRates: !1,
                    cartHasCalculatedShipping: c.has_calculated_shipping,
                    paymentRequirements: c.paymentRequirements,
                    receiveCart:
                      "function" == typeof (null == c ? void 0 : c.receiveCart)
                        ? c.receiveCart
                        : () => {},
                    receiveCartContents:
                      "function" ==
                      typeof (null == c ? void 0 : c.receiveCartContents)
                        ? c.receiveCartContents
                        : () => {},
                  };
                const n = e(oe.CART_STORE_KEY),
                  s = n.getCartData(),
                  a = n.getCartErrors(),
                  i = n.getCartTotals(),
                  l = !n.hasFinishedResolution("getCartData"),
                  m = n.isCustomerDataUpdating(),
                  { receiveCart: d, receiveCartContents: p } = o(
                    oe.CART_STORE_KEY
                  ),
                  u = Ke(s.billingAddress),
                  h = s.needsShipping ? Ke(s.shippingAddress) : u,
                  _ =
                    s.fees.length > 0
                      ? s.fees.map((e) => Ke(e))
                      : oe.EMPTY_CART_FEES,
                  g =
                    s.coupons.length > 0
                      ? s.coupons.map((e) => ({ ...e, label: e.code }))
                      : oe.EMPTY_CART_COUPONS;
                return {
                  cartCoupons: g,
                  cartItems: s.items,
                  crossSellsProducts: s.crossSells,
                  cartFees: _,
                  cartItemsCount: s.itemsCount,
                  cartItemsWeight: s.itemsWeight,
                  cartNeedsPayment: s.needsPayment,
                  cartNeedsShipping: s.needsShipping,
                  cartItemErrors: s.errors,
                  cartTotals: i,
                  cartIsLoading: l,
                  cartErrors: a,
                  billingData: Ie(u),
                  billingAddress: Ie(u),
                  shippingAddress: Ie(h),
                  extensions: s.extensions,
                  shippingRates: s.shippingRates,
                  isLoadingRates: m,
                  cartHasCalculatedShipping: s.hasCalculatedShipping,
                  paymentRequirements: s.paymentRequirements,
                  receiveCart: d,
                  receiveCartContents: p,
                };
              },
              [r]
            );
            return (
              (n.current && Se()(n.current, s)) || (n.current = s), n.current
            );
          },
          qe = (e) => e.length,
          Ze = (0, v.getSetting)("collectableMethodIds", []),
          ze = (e) => Ze.includes(e.method_id),
          We = (e) =>
            !!j &&
            (Array.isArray(e)
              ? !!e.find((e) => Ze.includes(e))
              : Ze.includes(e)),
          Ge = (e) =>
            Object.fromEntries(
              e.map(({ package_id: e, shipping_rates: t }) => {
                var o;
                return [
                  e,
                  (null === (o = t.find((e) => e.selected)) || void 0 === o
                    ? void 0
                    : o.rate_id) || "",
                ];
              })
            );
        var Xe = o(9127),
          Je = o.n(Xe);
        const Qe = [
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
              name: (0, m.__)("Shipping", "woocommerce"),
              items: [
                {
                  key: "33e75ff09dd601bbe69f351039152189",
                  name: (0, m._x)(
                    "Beanie with Logo",
                    "example product in Cart Block",
                    "woocommerce"
                  ),
                  quantity: 2,
                },
                {
                  key: "6512bd43d9caa6e02c990b0a82652dca",
                  name: (0, m._x)(
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
                  name: (0, m.__)("Flat rate shipping", "woocommerce"),
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
                  name: (0, m.__)("Free shipping", "woocommerce"),
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
                  name: (0, m.__)("Local pickup", "woocommerce"),
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
                  name: (0, m.__)("Local pickup", "woocommerce"),
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
          et = (0, v.getSetting)("displayCartPricesIncludingTax", !1),
          tt = {
            coupons: [],
            shipping_rates:
              (0, v.getSetting)("shippingMethodsExist", !1) ||
              (0, v.getSetting)("localPickupEnabled", !1)
                ? Qe
                : [],
            items: [
              {
                key: "1",
                id: 1,
                type: "simple",
                quantity: 2,
                catalog_visibility: "visible",
                name: (0, m.__)("Beanie", "woocommerce"),
                summary: (0, m.__)("Beanie", "woocommerce"),
                short_description: (0, m.__)(
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
                    src: B + "previews/beanie.jpg",
                    thumbnail: B + "previews/beanie.jpg",
                    srcset: "",
                    sizes: "",
                    name: "",
                    alt: "",
                  },
                ],
                variation: [
                  {
                    attribute: (0, m.__)("Color", "woocommerce"),
                    value: (0, m.__)("Yellow", "woocommerce"),
                  },
                  {
                    attribute: (0, m.__)("Size", "woocommerce"),
                    value: (0, m.__)("Small", "woocommerce"),
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
                  price: et ? "12000" : "10000",
                  regular_price: et ? "12000" : "10000",
                  sale_price: et ? "12000" : "10000",
                  price_range: null,
                  raw_prices: {
                    precision: 6,
                    price: et ? "12000000" : "10000000",
                    regular_price: et ? "12000000" : "10000000",
                    sale_price: et ? "12000000" : "10000000",
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
                name: (0, m.__)("Cap", "woocommerce"),
                summary: (0, m.__)("Cap", "woocommerce"),
                short_description: (0, m.__)(
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
                    src: B + "previews/cap.jpg",
                    thumbnail: B + "previews/cap.jpg",
                    srcset: "",
                    sizes: "",
                    name: "",
                    alt: "",
                  },
                ],
                variation: [
                  {
                    attribute: (0, m.__)("Color", "woocommerce"),
                    value: (0, m.__)("Orange", "woocommerce"),
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
                  price: et ? "2400" : "2000",
                  regular_price: et ? "2400" : "2000",
                  sale_price: et ? "2400" : "2000",
                  price_range: null,
                  raw_prices: {
                    precision: 6,
                    price: et ? "24000000" : "20000000",
                    regular_price: et ? "24000000" : "20000000",
                    sale_price: et ? "24000000" : "20000000",
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
                name: (0, m.__)("Polo", "woocommerce"),
                parent: 0,
                type: "simple",
                variation: "",
                permalink: "https://example.org",
                sku: "woo-polo",
                short_description: (0, m.__)("Polo", "woocommerce"),
                description: (0, m.__)("Polo", "woocommerce"),
                on_sale: !1,
                prices: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  price: et ? "24000" : "20000",
                  regular_price: et ? "24000" : "20000",
                  sale_price: et ? "12000" : "10000",
                  price_range: null,
                },
                price_html: "",
                average_rating: "4.5",
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: B + "previews/polo.jpg",
                    thumbnail: B + "previews/polo.jpg",
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
                name: (0, m.__)("Long Sleeve Tee", "woocommerce"),
                parent: 0,
                type: "simple",
                variation: "",
                permalink: "https://example.org",
                sku: "woo-long-sleeve-tee",
                short_description: (0, m.__)("Long Sleeve Tee", "woocommerce"),
                description: (0, m.__)("Long Sleeve Tee", "woocommerce"),
                on_sale: !1,
                prices: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  price: et ? "30000" : "25000",
                  regular_price: et ? "30000" : "25000",
                  sale_price: et ? "30000" : "25000",
                  price_range: null,
                },
                price_html: "",
                average_rating: "4",
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: B + "previews/long-sleeve-tee.jpg",
                    thumbnail: B + "previews/long-sleeve-tee.jpg",
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
                name: (0, m.__)("Hoodie with Zipper", "woocommerce"),
                parent: 0,
                type: "simple",
                variation: "",
                permalink: "https://example.org",
                sku: "woo-hoodie-with-zipper",
                short_description: (0, m.__)(
                  "Hoodie with Zipper",
                  "woocommerce"
                ),
                description: (0, m.__)("Hoodie with Zipper", "woocommerce"),
                on_sale: !0,
                prices: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  price: et ? "15000" : "12500",
                  regular_price: et ? "30000" : "25000",
                  sale_price: et ? "15000" : "12500",
                  price_range: null,
                },
                price_html: "",
                average_rating: "1",
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: B + "previews/hoodie-with-zipper.jpg",
                    thumbnail: B + "previews/hoodie-with-zipper.jpg",
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
                name: (0, m.__)("Hoodie with Logo", "woocommerce"),
                parent: 0,
                type: "simple",
                variation: "",
                permalink: "https://example.org",
                sku: "woo-hoodie-with-logo",
                short_description: (0, m.__)("Polo", "woocommerce"),
                description: (0, m.__)("Polo", "woocommerce"),
                on_sale: !1,
                prices: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  price: et ? "4500" : "4250",
                  regular_price: et ? "4500" : "4250",
                  sale_price: et ? "4500" : "4250",
                  price_range: null,
                },
                price_html: "",
                average_rating: "5",
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: B + "previews/hoodie-with-logo.jpg",
                    thumbnail: B + "previews/hoodie-with-logo.jpg",
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
                name: (0, m.__)("Hoodie with Pocket", "woocommerce"),
                parent: 0,
                type: "simple",
                variation: "",
                permalink: "https://example.org",
                sku: "woo-hoodie-with-pocket",
                short_description: (0, m.__)(
                  "Hoodie with Pocket",
                  "woocommerce"
                ),
                description: (0, m.__)("Hoodie with Pocket", "woocommerce"),
                on_sale: !0,
                prices: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  price: et ? "3500" : "3250",
                  regular_price: et ? "4500" : "4250",
                  sale_price: et ? "3500" : "3250",
                  price_range: null,
                },
                price_html: "",
                average_rating: "3.75",
                review_count: 4,
                images: [
                  {
                    id: 17,
                    src: B + "previews/hoodie-with-pocket.jpg",
                    thumbnail: B + "previews/hoodie-with-pocket.jpg",
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
                name: (0, m.__)("T-Shirt", "woocommerce"),
                parent: 0,
                type: "simple",
                variation: "",
                permalink: "https://example.org",
                sku: "woo-t-shirt",
                short_description: (0, m.__)("T-Shirt", "woocommerce"),
                description: (0, m.__)("T-Shirt", "woocommerce"),
                on_sale: !1,
                prices: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  price: et ? "1800" : "1500",
                  regular_price: et ? "1800" : "1500",
                  sale_price: et ? "1800" : "1500",
                  price_range: null,
                },
                price_html: "",
                average_rating: "3",
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: B + "previews/tshirt.jpg",
                    thumbnail: B + "previews/tshirt.jpg",
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
                name: (0, m.__)("Fee", "woocommerce"),
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
            needs_shipping: (0, v.getSetting)("shippingEnabled", !0),
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
                  name: (0, m.__)("Sales tax", "woocommerce"),
                  rate: "20%",
                  price: "820",
                },
              ],
            },
            errors: [],
            payment_methods: ["cod", "bacs", "cheque"],
            payment_requirements: ["products"],
            extensions: {},
          },
          ot = window.wp.hooks,
          ct = () => ({
            dispatchStoreEvent: (0, p.useCallback)((e, t = {}) => {
              try {
                (0, ot.doAction)(`experimental__woocommerce_blocks-${e}`, t);
              } catch (e) {
                console.error(e);
              }
            }, []),
            dispatchCheckoutEvent: (0, p.useCallback)((e, t = {}) => {
              try {
                (0, ot.doAction)(
                  `experimental__woocommerce_blocks-checkout-${e}`,
                  {
                    ...t,
                    storeCart: (0, k.select)("wc/store/cart").getCartData(),
                  }
                );
              } catch (e) {
                console.error(e);
              }
            }, []),
          }),
          rt = () => {
            const {
                shippingRates: e,
                needsShipping: t,
                hasCalculatedShipping: o,
                isLoadingRates: c,
                isCollectable: r,
                isSelectingRate: n,
              } = (0, k.useSelect)((e) => {
                const t = !!e("core/editor"),
                  o = e(oe.CART_STORE_KEY),
                  c = t ? tt.shipping_rates : o.getShippingRates();
                return {
                  shippingRates: c,
                  needsShipping: t ? tt.needs_shipping : o.getNeedsShipping(),
                  hasCalculatedShipping: t
                    ? tt.has_calculated_shipping
                    : o.getHasCalculatedShipping(),
                  isLoadingRates: !t && o.isCustomerDataUpdating(),
                  isCollectable: c.every(({ shipping_rates: e }) =>
                    e.find(({ method_id: e }) => We(e))
                  ),
                  isSelectingRate: !t && o.isShippingRateBeingSelected(),
                };
              }),
              s = (0, p.useRef)({});
            (0, p.useEffect)(() => {
              const t = Ge(e);
              (0, be.isObject)(t) && !Je()(s.current, t) && (s.current = t);
            }, [e]);
            const { selectShippingRate: a } = (0, k.useDispatch)(
                oe.CART_STORE_KEY
              ),
              i = We(Object.values(s.current).map((e) => e.split(":")[0])),
              { dispatchCheckoutEvent: l } = ct(),
              m = (0, p.useCallback)(
                (e, t) => {
                  let o;
                  void 0 !== e &&
                    ((o = We(e.split(":")[0]) ? a(e, null) : a(e, t)),
                    o
                      .then(() => {
                        l("set-selected-shipping-rate", { shippingRateId: e });
                      })
                      .catch((e) => {
                        (0, oe.processErrorResponse)(e);
                      }));
                },
                [a, l]
              );
            return {
              isSelectingRate: n,
              selectedRates: s.current,
              selectShippingRate: m,
              shippingRates: e,
              needsShipping: t,
              hasCalculatedShipping: o,
              isLoadingRates: c,
              isCollectable: r,
              hasSelectedLocalPickup: i,
            };
          },
          { NONE: nt, INVALID_ADDRESS: st, UNKNOWN: at } = de,
          it = (0, p.createContext)(ue),
          lt = () => (0, p.useContext)(it),
          mt = ({ children: e }) => {
            const {
                __internalIncrementCalculating: t,
                __internalDecrementCalculating: o,
              } = (0, k.useDispatch)(oe.CHECKOUT_STORE_KEY),
              { shippingRates: r, isLoadingRates: n, cartErrors: s } = He(),
              { selectedRates: a, isSelectingRate: i } = rt(),
              [l, m] = (0, p.useReducer)(he, nt),
              [d, u] = (0, p.useReducer)(ae, {}),
              h = (0, p.useRef)(d),
              _ = (0, p.useMemo)(
                () => ({
                  onShippingRateSuccess: we(u).onSuccess,
                  onShippingRateFail: we(u).onFail,
                  onShippingRateSelectSuccess: we(u).onSelectSuccess,
                  onShippingRateSelectFail: we(u).onSelectFail,
                }),
                [u]
              );
            (0, p.useEffect)(() => {
              h.current = d;
            }, [d]),
              (0, p.useEffect)(() => {
                n ? t() : o();
              }, [n, t, o]),
              (0, p.useEffect)(() => {
                i ? t() : o();
              }, [t, o, i]),
              (0, p.useEffect)(() => {
                s.length > 0 &&
                s.some((e) => !(!e.code || !Object.values(pe).includes(e.code)))
                  ? m({ type: st })
                  : m({ type: nt });
              }, [s]);
            const g = (0, p.useMemo)(
              () => ({
                isPristine: l === nt,
                isValid: l === nt,
                hasInvalidAddress: l === st,
                hasError: l === at || l === st,
              }),
              [l]
            );
            (0, p.useEffect)(() => {
              n ||
                (0 !== r.length && !g.hasError) ||
                fe(h.current, ge, {
                  hasInvalidAddress: g.hasInvalidAddress,
                  hasError: g.hasError,
                });
            }, [r, n, g.hasError, g.hasInvalidAddress]),
              (0, p.useEffect)(() => {
                !n && r.length > 0 && !g.hasError && fe(h.current, _e, r);
              }, [r, n, g.hasError]),
              (0, p.useEffect)(() => {
                i ||
                  (g.hasError
                    ? fe(h.current, Ee, {
                        hasError: g.hasError,
                        hasInvalidAddress: g.hasInvalidAddress,
                      })
                    : fe(h.current, ke, a.current));
              }, [a, i, g.hasError, g.hasInvalidAddress]);
            const E = {
              shippingErrorStatus: g,
              dispatchErrorStatus: m,
              shippingErrorTypes: de,
              ..._,
            };
            return (0, c.createElement)(
              c.Fragment,
              null,
              (0, c.createElement)(it.Provider, { value: E }, e)
            );
          };
        function dt(e, t) {
          const o = (0, p.useRef)();
          return (
            (0, p.useEffect)(() => {
              o.current === e || (t && !t(e, o.current)) || (o.current = e);
            }, [e, t]),
            o.current
          );
        }
        const pt = {},
          ut = {},
          ht = () => pt,
          _t = () => ut,
          gt = (0, p.createContext)({
            onSubmit: () => {},
            onCheckoutAfterProcessingWithSuccess: () => () => {},
            onCheckoutAfterProcessingWithError: () => () => {},
            onCheckoutBeforeProcessing: () => () => {},
            onCheckoutValidationBeforeProcessing: () => () => {},
            onCheckoutSuccess: () => () => {},
            onCheckoutFail: () => () => {},
            onCheckoutValidation: () => () => {},
          }),
          kt = () => (0, p.useContext)(gt),
          Et = ({ children: e, redirectUrl: t }) => {
            const o = ht(),
              r = _t(),
              { isEditor: n } = w(),
              { __internalUpdateAvailablePaymentMethods: s } = (0,
              k.useDispatch)(oe.PAYMENT_STORE_KEY);
            (0, p.useEffect)(() => {
              (n ||
                0 !== Object.keys(o).length ||
                0 !== Object.keys(r).length) &&
                s();
            }, [n, o, r, s]);
            const {
                __internalSetRedirectUrl: a,
                __internalEmitValidateEvent: i,
                __internalEmitAfterProcessingEvents: l,
                __internalSetBeforeProcessing: m,
              } = (0, k.useDispatch)(oe.CHECKOUT_STORE_KEY),
              {
                checkoutRedirectUrl: d,
                checkoutStatus: u,
                isCheckoutBeforeProcessing: h,
                isCheckoutAfterProcessing: _,
                checkoutHasError: g,
                checkoutOrderId: E,
                checkoutOrderNotes: b,
                checkoutCustomerId: y,
              } = (0, k.useSelect)((e) => {
                const t = e(oe.CHECKOUT_STORE_KEY);
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
            t && t !== d && a(t);
            const { setValidationErrors: v } = (0, k.useDispatch)(
                oe.VALIDATION_STORE_KEY
              ),
              { dispatchCheckoutEvent: f } = ct(),
              {
                checkoutNotices: C,
                paymentNotices: S,
                expressPaymentNotices: P,
              } = (0, k.useSelect)((e) => {
                const { getNotices: t } = e("core/notices");
                return {
                  checkoutNotices: Object.values(ve)
                    .filter(
                      (e) => e !== ve.PAYMENTS && e !== ve.EXPRESS_PAYMENTS
                    )
                    .reduce((e, o) => [...e, ...t(o)], []),
                  paymentNotices: t(ve.PAYMENTS),
                  expressPaymentNotices: t(ve.EXPRESS_PAYMENTS),
                };
              }, []),
              [N, T] = (0, p.useReducer)(ae, {}),
              R = (0, p.useRef)(N),
              {
                onCheckoutValidation: A,
                onCheckoutSuccess: x,
                onCheckoutFail: I,
              } = ((e) =>
                (0, p.useMemo)(
                  () => ({
                    onCheckoutSuccess: ie("checkout_success", e),
                    onCheckoutFail: ie("checkout_fail", e),
                    onCheckoutValidation: ie("checkout_validation", e),
                  }),
                  [e]
                ))(T);
            (0, p.useEffect)(() => {
              R.current = N;
            }, [N]);
            const O = (0, p.useMemo)(
                () =>
                  function (...e) {
                    return (
                      re()("onCheckoutBeforeProcessing", {
                        alternative: "onCheckoutValidation",
                        plugin: "WooCommerce Blocks",
                      }),
                      A(...e)
                    );
                  },
                [A]
              ),
              M = (0, p.useMemo)(
                () =>
                  function (...e) {
                    return (
                      re()("onCheckoutValidationBeforeProcessing", {
                        since: "9.7.0",
                        alternative: "onCheckoutValidation",
                        plugin: "WooCommerce Blocks",
                        link: "https://github.com/woocommerce/woocommerce-blocks/pull/8381",
                      }),
                      A(...e)
                    );
                  },
                [A]
              ),
              B = (0, p.useMemo)(
                () =>
                  function (...e) {
                    return (
                      re()("onCheckoutAfterProcessingWithSuccess", {
                        since: "9.7.0",
                        alternative: "onCheckoutSuccess",
                        plugin: "WooCommerce Blocks",
                        link: "https://github.com/woocommerce/woocommerce-blocks/pull/8381",
                      }),
                      x(...e)
                    );
                  },
                [x]
              ),
              D = (0, p.useMemo)(
                () =>
                  function (...e) {
                    return (
                      re()("onCheckoutAfterProcessingWithError", {
                        since: "9.7.0",
                        alternative: "onCheckoutFail",
                        plugin: "WooCommerce Blocks",
                        link: "https://github.com/woocommerce/woocommerce-blocks/pull/8381",
                      }),
                      I(...e)
                    );
                  },
                [I]
              );
            (0, p.useEffect)(() => {
              h && i({ observers: R.current, setValidationErrors: v });
            }, [h, v, i]);
            const F = dt(u),
              L = dt(g);
            (0, p.useEffect)(() => {
              (u === F && g === L) ||
                (_ &&
                  l({
                    observers: R.current,
                    notices: {
                      checkoutNotices: C,
                      paymentNotices: S,
                      expressPaymentNotices: P,
                    },
                  }));
            }, [u, g, d, E, y, b, _, h, F, L, C, P, S, i, l]);
            const U = {
              onSubmit: (0, p.useCallback)(() => {
                f("submit"), m();
              }, [f, m]),
              onCheckoutBeforeProcessing: O,
              onCheckoutValidationBeforeProcessing: M,
              onCheckoutAfterProcessingWithSuccess: B,
              onCheckoutAfterProcessingWithError: D,
              onCheckoutSuccess: x,
              onCheckoutFail: I,
              onCheckoutValidation: A,
            };
            return (0, c.createElement)(gt.Provider, { value: U }, e);
          },
          wt = window.wp.apiFetch;
        var bt = o.n(wt);
        (0, m.__)(
          "Something went wrong. Please contact us to get assistance.",
          "woocommerce"
        );
        const yt = window.wc.wcBlocksRegistry,
          vt = (e, t, o) => {
            const c = Object.keys(e).map((t) => ({ key: t, value: e[t] }), []),
              r = `wc-${o}-new-payment-method`;
            return c.push({ key: r, value: t }), c;
          },
          ft = (e) => {
            if (!e) return;
            const { __internalSetCustomerId: t } = (0, k.dispatch)(
              oe.CHECKOUT_STORE_KEY
            );
            bt().setNonce &&
              "function" == typeof bt().setNonce &&
              bt().setNonce(e),
              null != e &&
                e.get("User-ID") &&
                t(parseInt(e.get("User-ID") || "0", 10));
          },
          Ct = () => {
            const { onCheckoutValidation: e } = kt(),
              {
                hasError: t,
                redirectUrl: o,
                isProcessing: c,
                isBeforeProcessing: r,
                isComplete: n,
                orderNotes: s,
                shouldCreateAccount: a,
                extensionData: i,
                customerId: l,
                additionalFields: d,
              } = (0, k.useSelect)((e) => {
                const t = e(oe.CHECKOUT_STORE_KEY);
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
                __internalSetHasError: u,
                __internalProcessCheckoutResponse: h,
              } = (0, k.useDispatch)(oe.CHECKOUT_STORE_KEY),
              _ = (0, k.useSelect)(
                (e) => e(oe.VALIDATION_STORE_KEY).hasValidationErrors
              ),
              { shippingErrorStatus: g } = lt(),
              { billingAddress: E, shippingAddress: w } = (0, k.useSelect)(
                (e) => e(oe.CART_STORE_KEY).getCustomerData()
              ),
              {
                cartNeedsPayment: b,
                cartNeedsShipping: y,
                receiveCartContents: v,
              } = He(),
              {
                activePaymentMethod: f,
                paymentMethodData: C,
                isExpressPaymentMethodActive: S,
                hasPaymentError: P,
                isPaymentReady: N,
                shouldSavePayment: T,
              } = (0, k.useSelect)((e) => {
                const t = e(oe.PAYMENT_STORE_KEY);
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
              R = (0, yt.getPaymentMethods)(),
              A = (0, yt.getExpressPaymentMethods)(),
              x = (0, p.useRef)(E),
              I = (0, p.useRef)(w),
              O = (0, p.useRef)(o),
              [M, B] = (0, p.useState)(!1),
              D = (0, p.useMemo)(() => {
                var e;
                const t = { ...A, ...R };
                return null == t || null === (e = t[f]) || void 0 === e
                  ? void 0
                  : e.paymentMethodId;
              }, [f, A, R]),
              F = (_() && !S) || P || g.hasError,
              L = !t && !F && (N || !b) && c;
            (0, p.useEffect)(() => {
              F === t || (!c && !r) || S || u(F);
            }, [F, t, c, r, S, u]),
              (0, p.useEffect)(() => {
                (x.current = E), (I.current = w), (O.current = o);
              }, [E, w, o]);
            const U = (0, p.useCallback)(
              () =>
                _()
                  ? void 0 !==
                      (0, k.select)(oe.VALIDATION_STORE_KEY).getValidationError(
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
                  : !g.hasError || {
                      errorMessage: (0, m.__)(
                        "There was a problem with your shipping option.",
                        "woocommerce"
                      ),
                      context: "wc/checkout/shipping-methods",
                    },
              [_, P, g.hasError]
            );
            (0, p.useEffect)(() => {
              let t;
              return (
                S || (t = e(U, 0)),
                () => {
                  S || "function" != typeof t || t();
                }
              );
            }, [e, U, S]),
              (0, p.useEffect)(() => {
                O.current && (window.location.href = O.current);
              }, [n]);
            const Y = (0, p.useCallback)(async () => {
              if (M) return;
              B(!0),
                (() => {
                  const e = (0, k.select)(
                      "wc/store/store-notices"
                    ).getRegisteredContainers(),
                    { removeNotice: t } = (0, k.dispatch)("core/notices"),
                    { getNotices: o } = (0, k.select)("core/notices");
                  e.forEach((e) => {
                    o(e).forEach((o) => {
                      t(o.id, e);
                    });
                  });
                })();
              const e = b
                  ? { payment_method: D, payment_data: vt(C, T, f) }
                  : {},
                t = {
                  shipping_address: y ? Ie(I.current) : void 0,
                  billing_address: Ie(x.current),
                  additional_fields: d,
                  customer_note: s,
                  create_account: a,
                  ...e,
                  extensions: { ...i },
                };
              bt()({
                path: "/wc/store/v1/checkout",
                method: "POST",
                data: t,
                cache: "no-store",
                parse: !1,
              })
                .then((e) => {
                  if (((0, be.assertResponseIsValid)(e), ft(e.headers), !e.ok))
                    throw e;
                  return e.json();
                })
                .then((e) => {
                  h(e), B(!1);
                })
                .catch((e) => {
                  ft(null == e ? void 0 : e.headers);
                  try {
                    e.json()
                      .then((e) => e)
                      .then((e) => {
                        var t;
                        null !== (t = e.data) &&
                          void 0 !== t &&
                          t.cart &&
                          v(e.data.cart),
                          (0, oe.processErrorResponse)(e),
                          h(e);
                      });
                  } catch {
                    let e = (0, m.__)(
                      "Something went wrong when placing the order. Check your email for order updates before retrying.",
                      "woocommerce"
                    );
                    0 !== l &&
                      (e = (0, m.__)(
                        "Something went wrong when placing the order. Check your account's order history or your email for order updates before retrying.",
                        "woocommerce"
                      )),
                      (0, oe.processErrorResponse)({
                        code: "unknown_error",
                        message: e,
                        data: null,
                      });
                  }
                  u(!0), B(!1);
                });
            }, [M, b, D, C, T, f, s, a, i, d, y, v, u, h]);
            return (
              (0, p.useEffect)(() => {
                L && !M && Y();
              }, [Y, L, M]),
              null
            );
          },
          St = ({ children: e, redirectUrl: t }) =>
            (0, c.createElement)(
              Et,
              { redirectUrl: t },
              (0, c.createElement)(
                mt,
                null,
                (0, c.createElement)(
                  me,
                  null,
                  e,
                  (0, c.createElement)(
                    te,
                    {
                      renderError: v.CURRENT_USER_IS_ADMIN ? null : () => null,
                    },
                    (0, c.createElement)(y.PluginArea, {
                      scope: "woocommerce-checkout",
                    })
                  ),
                  (0, c.createElement)(Ct, null)
                )
              )
            ),
          Pt = {
            cc: [
              {
                method: {
                  gateway: "credit-card",
                  last4: "5678",
                  brand: "Visa",
                },
                expires: "12/20",
                is_default: !1,
                tokenId: "1",
              },
            ],
          },
          Nt = window.wp.components,
          Tt = window.wc.blocksCheckout;
        var Rt = o(5062);
        const At = (0, p.forwardRef)(({ children: e, className: t = "" }, o) =>
            (0, c.createElement)(
              "div",
              { ref: o, className: n()("wc-block-components-main", t) },
              e
            )
          ),
          xt = (0, p.createContext)({
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
          It = (0, p.createContext)({ addressFieldControls: () => null }),
          Ot = () => (0, p.useContext)(xt),
          Mt = () => (0, p.useContext)(It),
          Bt = ["core/paragraph", "core/image", "core/separator"],
          Dt = (e) => {
            const t = (0, Tt.applyCheckoutFilter)({
              filterName: "additionalCartCheckoutInnerBlockTypes",
              defaultValue: [],
              extensions: (0, k.select)(oe.CART_STORE_KEY).getCartData()
                .extensions,
              arg: { block: e },
              validation: (e) => {
                if (Array.isArray(e) && e.every((e) => "string" == typeof e))
                  return !0;
                throw new Error(
                  "allowedBlockTypes filters must return an array of strings."
                );
              },
            });
            return Array.from(
              new Set([
                ...(0, l.getBlockTypes)()
                  .filter((t) =>
                    ((null == t ? void 0 : t.parent) || []).includes(e)
                  )
                  .map(({ name: e }) => e),
                ...Bt,
                ...t,
              ])
            );
          },
          Ft = ({
            clientId: e,
            registeredBlocks: t,
            defaultTemplate: o = [],
          }) => {
            const c = (0, p.useRef)(t),
              r = (0, p.useRef)(o),
              n = (0, k.useRegistry)(),
              { isPreview: s } = w();
            (0, p.useEffect)(() => {
              let t = !1;
              if (s) return;
              const { replaceInnerBlocks: o } = (0, k.dispatch)(
                "core/block-editor"
              );
              return n.subscribe(() => {
                if (!n.select("core/block-editor").getBlock(e)) return;
                const s = n.select("core/block-editor").getBlocks(e);
                if (0 === s.length && r.current.length > 0 && !t) {
                  const c = (0, l.createBlocksFromInnerBlocksTemplate)(
                    r.current
                  );
                  if (0 !== c.length) return (t = !0), void o(e, c);
                }
                const a = c.current.map((e) => (0, l.getBlockType)(e)),
                  i = ((e, t) => {
                    const o = t.filter(
                        (e) =>
                          e &&
                          (({ attributes: e }) => {
                            var t, o, c;
                            return Boolean(
                              (null === (t = e.lock) || void 0 === t
                                ? void 0
                                : t.remove) ||
                                (null === (o = e.lock) ||
                                void 0 === o ||
                                null === (c = o.default) ||
                                void 0 === c
                                  ? void 0
                                  : c.remove)
                            );
                          })(e)
                      ),
                      c = [];
                    return (
                      o.forEach((t) => {
                        if (void 0 === t) return;
                        const o = e.find((e) => e.name === t.name);
                        o || c.push(t);
                      }),
                      c
                    );
                  })(s, a);
                if (0 === i.length) return;
                let m = -1;
                const d = i.map((e) => {
                  const t = r.current.findIndex(([t]) => t === e.name),
                    o = (0, l.createBlock)(e.name);
                  return (
                    -1 === m &&
                      (m = (({
                        defaultTemplatePosition: e,
                        innerBlocks: t,
                        currentDefaultTemplate: o,
                      }) => {
                        switch (e) {
                          case -1:
                            return t.length;
                          case 0:
                            return 0;
                          default:
                            const c = o.current[e - 1],
                              r = t.findIndex(({ name: e }) => e === c[0]);
                            return -1 === r ? e : r + 1;
                        }
                      })({
                        defaultTemplatePosition: t,
                        innerBlocks: s,
                        currentDefaultTemplate: r,
                      })),
                    o
                  );
                });
                n.batch(() => {
                  n.dispatch("core/block-editor").insertBlocks(d, m, e);
                });
              }, "core/block-editor");
            }, [e, s, n]);
          };
        o(9768),
          (0, l.registerBlockType)("woocommerce/checkout-fields-block", {
            icon: {
              src: (0, c.createElement)(i.Z, {
                icon: Rt.Z,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            edit: ({ clientId: e, attributes: t }) => {
              const o = (0, d.useBlockProps)({
                  className: n()(
                    "wc-block-checkout__main",
                    null == t ? void 0 : t.className
                  ),
                }),
                r = Dt(Tt.innerBlockAreas.CHECKOUT_FIELDS),
                { addressFieldControls: s } = Mt(),
                a = [
                  ["woocommerce/checkout-express-payment-block", {}, []],
                  ["woocommerce/checkout-contact-information-block", {}, []],
                  ["woocommerce/checkout-shipping-method-block", {}, []],
                  ["woocommerce/checkout-pickup-options-block", {}, []],
                  ["woocommerce/checkout-shipping-address-block", {}, []],
                  ["woocommerce/checkout-billing-address-block", {}, []],
                  ["woocommerce/checkout-shipping-methods-block", {}, []],
                  ["woocommerce/checkout-payment-block", {}, []],
                  ["woocommerce/checkout-additional-information-block", {}, []],
                  ["woocommerce/checkout-order-note-block", {}, []],
                  ["woocommerce/checkout-terms-block", {}, []],
                  ["woocommerce/checkout-actions-block", {}, []],
                ].filter(Boolean);
              return (
                Ft({ clientId: e, registeredBlocks: r, defaultTemplate: a }),
                (0, c.createElement)(
                  At,
                  { ...o },
                  (0, c.createElement)(s, null),
                  (0, c.createElement)(
                    "form",
                    {
                      className:
                        "wc-block-components-form wc-block-checkout__form",
                    },
                    (0, c.createElement)(d.InnerBlocks, {
                      allowedBlocks: r,
                      templateLock: !1,
                      template: a,
                      renderAppender: d.InnerBlocks.ButtonBlockAppender,
                    })
                  )
                )
              );
            },
            save: () =>
              (0, c.createElement)(
                "div",
                { ...d.useBlockProps.save() },
                (0, c.createElement)(d.InnerBlocks.Content, null)
              ),
          });
        const Lt = (0, p.forwardRef)(({ children: e, className: t = "" }, o) =>
          (0, c.createElement)(
            "div",
            { ref: o, className: n()("wc-block-components-sidebar", t) },
            e
          )
        );
        o(7450),
          (0, l.registerBlockType)("woocommerce/checkout-totals-block", {
            icon: {
              src: (0, c.createElement)(i.Z, {
                icon: Rt.Z,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            edit: ({ clientId: e, attributes: t }) => {
              const o = (0, d.useBlockProps)({
                  className: n()(
                    "wc-block-checkout__sidebar",
                    null == t ? void 0 : t.className
                  ),
                }),
                r = Dt(Tt.innerBlockAreas.CHECKOUT_TOTALS),
                s = [["woocommerce/checkout-order-summary-block", {}, []]];
              return (
                Ft({ clientId: e, registeredBlocks: r, defaultTemplate: s }),
                (0, c.createElement)(
                  Lt,
                  { ...o },
                  (0, c.createElement)(d.InnerBlocks, {
                    allowedBlocks: r,
                    templateLock: !1,
                    template: s,
                    renderAppender: d.InnerBlocks.ButtonBlockAppender,
                  })
                )
              );
            },
            save: () =>
              (0, c.createElement)(
                "div",
                { ...d.useBlockProps.save() },
                (0, c.createElement)(d.InnerBlocks.Content, null)
              ),
          });
        var Ut = o(1873);
        const Yt = () => {
            const { customerData: e, isInitialized: t } = (0, k.useSelect)(
                (e) => {
                  const t = e(oe.CART_STORE_KEY);
                  return {
                    customerData: t.getCustomerData(),
                    isInitialized: t.hasFinishedResolution("getCartData"),
                  };
                }
              ),
              { setShippingAddress: o, setBillingAddress: c } = (0,
              k.useDispatch)(oe.CART_STORE_KEY);
            return {
              isInitialized: t,
              billingAddress: e.billingAddress,
              shippingAddress: e.shippingAddress,
              setBillingAddress: c,
              setShippingAddress: o,
            };
          },
          jt = () => {
            const { needsShipping: e } = rt(),
              { useShippingAsBilling: t, prefersCollection: o } = (0,
              k.useSelect)((e) => ({
                useShippingAsBilling: e(
                  oe.CHECKOUT_STORE_KEY
                ).getUseShippingAsBilling(),
                prefersCollection: e(oe.CHECKOUT_STORE_KEY).prefersCollection(),
              })),
              { __internalSetUseShippingAsBilling: c } = (0, k.useDispatch)(
                oe.CHECKOUT_STORE_KEY
              ),
              {
                billingAddress: r,
                setBillingAddress: n,
                shippingAddress: s,
                setShippingAddress: a,
              } = Yt(),
              i = (0, p.useCallback)(
                (e) => {
                  n({ email: e });
                },
                [n]
              ),
              l = (0, v.getSetting)("forcedBillingAddress", !1);
            return {
              shippingAddress: s,
              billingAddress: r,
              setShippingAddress: a,
              setBillingAddress: n,
              setEmail: i,
              defaultFields: v.defaultFields,
              useShippingAsBilling: t,
              setUseShippingAsBilling: c,
              needsShipping: e,
              showShippingFields: !l && e && !o,
              showShippingMethods: e && !o,
              showBillingFields: !e || !t || !!o,
              forcedBillingAddress: l,
              useBillingAsShipping: l || !!o,
            };
          },
          Vt = window.wc.blocksComponents,
          Kt = ({ children: e, stepHeadingContent: t }) =>
            (0, c.createElement)(
              "div",
              { className: "wc-block-components-checkout-step__heading" },
              (0, c.createElement)(
                Vt.Title,
                {
                  "aria-hidden": "true",
                  className: "wc-block-components-checkout-step__title",
                  headingLevel: "2",
                },
                e
              ),
              !!t &&
                (0, c.createElement)(
                  "span",
                  {
                    className:
                      "wc-block-components-checkout-step__heading-content",
                  },
                  t
                )
            ),
          $t = ({
            attributes: e,
            setAttributes: t,
            className: o = "",
            children: r,
          }) => {
            const {
                title: s = "",
                description: a = "",
                showStepNumber: i = !0,
              } = e,
              l = (0, d.useBlockProps)({
                className: n()("wc-block-components-checkout-step", o, {
                  "wc-block-components-checkout-step--with-step-number": i,
                }),
              });
            return (0, c.createElement)(
              "div",
              { ...l },
              (0, c.createElement)(
                d.InspectorControls,
                null,
                (0, c.createElement)(
                  Nt.PanelBody,
                  { title: (0, m.__)("Form Step Options", "woocommerce") },
                  (0, c.createElement)(Nt.ToggleControl, {
                    label: (0, m.__)("Show step number", "woocommerce"),
                    checked: i,
                    onChange: () => t({ showStepNumber: !i }),
                  })
                )
              ),
              (0, c.createElement)(
                Kt,
                null,
                (0, c.createElement)(d.PlainText, {
                  className: "",
                  value: s,
                  onChange: (e) => t({ title: e }),
                  style: { backgroundColor: "transparent" },
                })
              ),
              (0, c.createElement)(
                "div",
                { className: "wc-block-components-checkout-step__container" },
                (0, c.createElement)(
                  "p",
                  {
                    className: "wc-block-components-checkout-step__description",
                  },
                  (0, c.createElement)(d.PlainText, {
                    className: a
                      ? ""
                      : "wc-block-components-checkout-step__description-placeholder",
                    value: a,
                    placeholder: (0, m.__)(
                      "Optional text for this form step.",
                      "woocommerce"
                    ),
                    onChange: (e) => t({ description: e }),
                    style: { backgroundColor: "transparent" },
                  })
                ),
                (0, c.createElement)(
                  "div",
                  { className: "wc-block-components-checkout-step__content" },
                  r
                )
              )
            );
          };
        o(3820);
        const Ht = ({ block: e }) => {
            const { "data-block": t } = (0, d.useBlockProps)(),
              o = Dt(e);
            return (
              Ft({ clientId: t, registeredBlocks: o }),
              (0, c.createElement)(
                "div",
                { className: "wc-block-checkout__additional_fields" },
                (0, c.createElement)(d.InnerBlocks, { allowedBlocks: o })
              )
            );
          },
          qt = () => (0, c.createElement)(d.InnerBlocks.Content, null);
        var Zt = o(1638),
          zt = o(5904),
          Wt = o(2600);
        const Gt = [
            "BUTTON",
            "FIELDSET",
            "INPUT",
            "OPTGROUP",
            "OPTION",
            "SELECT",
            "TEXTAREA",
            "A",
          ],
          Xt = ({ children: e, style: t = {}, ...o }) => {
            const r = (0, p.useRef)(null),
              n = () => {
                r.current &&
                  zt.focus.focusable.find(r.current).forEach((e) => {
                    Gt.includes(e.nodeName) && e.setAttribute("tabindex", "-1"),
                      e.hasAttribute("contenteditable") &&
                        e.setAttribute("contenteditable", "false");
                  });
              },
              s = (0, Wt.y1)(n, 0, { leading: !0 });
            return (
              (0, p.useLayoutEffect)(() => {
                let e;
                return (
                  n(),
                  r.current &&
                    ((e = new window.MutationObserver(s)),
                    e.observe(r.current, {
                      childList: !0,
                      attributes: !0,
                      subtree: !0,
                    })),
                  () => {
                    e && e.disconnect(), s.cancel();
                  }
                );
              }, [s]),
              (0, c.createElement)(
                "div",
                {
                  ref: r,
                  "aria-disabled": "true",
                  style: {
                    userSelect: "none",
                    pointerEvents: "none",
                    cursor: "normal",
                    ...t,
                  },
                  ...o,
                },
                e
              )
            );
          };
        var Jt = o(3133);
        o(2750);
        const Qt = ({
          id: e,
          className: t,
          label: o,
          onChange: r,
          options: s,
          value: a,
          required: i = !1,
          errorId: l,
          autoComplete: d = "off",
          errorMessage: u = (0, m.__)(
            "Please select a valid option",
            "woocommerce"
          ),
        }) => {
          const h = (0, p.useRef)(null),
            _ = (0, p.useId)(),
            g = e || "control-" + _,
            E = l || g,
            { setValidationErrors: w, clearValidationError: b } = (0,
            k.useDispatch)(oe.VALIDATION_STORE_KEY),
            { error: y, validationErrorId: v } = (0, k.useSelect)((e) => {
              const t = e(oe.VALIDATION_STORE_KEY);
              return {
                error: t.getValidationError(E),
                validationErrorId: t.getValidationErrorId(E),
              };
            });
          return (
            (0, p.useEffect)(
              () => (
                !i || a ? b(E) : w({ [E]: { message: u, hidden: !0 } }),
                () => {
                  b(E);
                }
              ),
              [b, a, E, u, i, w]
            ),
            (0, c.createElement)(
              "div",
              {
                id: g,
                className: n()("wc-block-components-combobox", t, {
                  "is-active": a,
                  "has-error":
                    (null == y ? void 0 : y.message) &&
                    !(null != y && y.hidden),
                }),
                ref: h,
              },
              (0, c.createElement)(Jt.Z, {
                className: "wc-block-components-combobox-control",
                label: o,
                onChange: r,
                onFilterValueChange: (e) => {
                  if (e.length) {
                    const t = (0, be.isObject)(h.current)
                      ? h.current.ownerDocument.activeElement
                      : void 0;
                    if (
                      t &&
                      (0, be.isObject)(h.current) &&
                      h.current.contains(t)
                    )
                      return;
                    const o = e.toLocaleUpperCase(),
                      c = s.find((e) => e.value.toLocaleUpperCase() === o);
                    if (c) return void r(c.value);
                    const n = s.find((e) =>
                      e.label.toLocaleUpperCase().startsWith(o)
                    );
                    n && r(n.value);
                  }
                },
                options: s,
                value: a || "",
                allowReset: !1,
                autoComplete: d,
                "aria-invalid":
                  (null == y ? void 0 : y.message) && !(null != y && y.hidden),
                "aria-errormessage": v,
              }),
              (0, c.createElement)(Vt.ValidationInputError, { propertyName: E })
            )
          );
        };
        o(7368);
        const eo = ({
            className: e,
            countries: t,
            id: o,
            label: r,
            onChange: s,
            value: a = "",
            autoComplete: i = "off",
            required: l = !1,
            errorId: d,
            errorMessage: u = (0, m.__)(
              "Please select a country",
              "woocommerce"
            ),
          }) => {
            const h = (0, p.useMemo)(
              () =>
                Object.entries(t).map(([e, t]) => ({
                  value: e,
                  label: (0, Pe.decodeEntities)(t),
                })),
              [t]
            );
            return (0, c.createElement)(
              "div",
              { className: n()(e, "wc-block-components-country-input") },
              (0, c.createElement)(Qt, {
                id: o,
                label: r,
                onChange: s,
                options: h,
                value: a,
                errorId: d,
                errorMessage: u,
                required: l,
                autoComplete: i,
              })
            );
          },
          to = (e) => (0, c.createElement)(eo, { countries: $, ...e }),
          oo = (e) => (0, c.createElement)(eo, { countries: q, ...e });
        o(6115);
        const co = (e, t) => {
            const o = t.find(
              (t) =>
                t.label.toLocaleUpperCase() === e.toLocaleUpperCase() ||
                t.value.toLocaleUpperCase() === e.toLocaleUpperCase()
            );
            return o ? o.value : "";
          },
          ro = ({
            className: e,
            id: t,
            states: o,
            country: r,
            label: s,
            onChange: a,
            autoComplete: i = "off",
            value: l = "",
            required: d = !1,
            errorId: u = "",
          }) => {
            const h = o[r],
              _ = (0, p.useMemo)(
                () =>
                  h
                    ? Object.keys(h).map((e) => ({
                        value: e,
                        label: (0, Pe.decodeEntities)(h[e]),
                      }))
                    : [],
                [h]
              ),
              g = (0, p.useCallback)(
                (e) => {
                  const t = _.length > 0 ? co(e, _) : e;
                  t !== l && a(t);
                },
                [a, _, l]
              ),
              k = (0, p.useRef)(l);
            return (
              (0, p.useEffect)(() => {
                k.current !== l && (k.current = l);
              }, [l]),
              (0, p.useEffect)(() => {
                if (_.length > 0 && k.current) {
                  const e = co(k.current, _);
                  e !== k.current && g(e);
                }
              }, [_, g]),
              _.length > 0
                ? (0, c.createElement)(Qt, {
                    className: n()(e, "wc-block-components-state-input"),
                    id: t,
                    label: s,
                    onChange: g,
                    options: _,
                    value: l,
                    errorMessage: (0, m.__)(
                      "Please select a state.",
                      "woocommerce"
                    ),
                    errorId: u,
                    required: d,
                    autoComplete: i,
                  })
                : (0, c.createElement)(Vt.ValidatedTextInput, {
                    className: e,
                    id: t,
                    label: s,
                    onChange: g,
                    autoComplete: i,
                    value: l,
                    required: d,
                  })
            );
          },
          no = (e) => (0, c.createElement)(ro, { states: H, ...e }),
          so = (e) => (0, c.createElement)(ro, { states: Z, ...e });
        function ao(e) {
          const t = (0, p.useRef)(e);
          return Je()(e, t.current) || (t.current = e), t.current;
        }
        const io = ({
            id: e = "",
            fields: t,
            fieldConfig: o = {},
            onChange: r,
            addressType: s = "shipping",
            values: a,
            children: i,
          }) => {
            const l = (0, u.useInstanceId)(io),
              d = ao(t),
              h = ao(o),
              _ = ao((0, be.objectHasProp)(a, "country") ? a.country : ""),
              g = (0, p.useMemo)(() => {
                const e = Re(d, h, _);
                return {
                  fields: e,
                  addressType: s,
                  required: e.filter((e) => e.required),
                  hidden: e.filter((e) => e.hidden),
                };
              }, [d, h, _, s]),
              E = (0, p.useRef)({});
            return (
              (0, p.useEffect)(() => {
                const e = {
                  ...a,
                  ...Object.fromEntries(g.hidden.map((e) => [e.key, ""])),
                };
                Je()(a, e) || r(e);
              }, [r, g, a]),
              (0, p.useEffect)(() => {
                "shipping" === s &&
                  (0, be.objectHasProp)(a, "country") &&
                  ((e) => {
                    const t = "shipping_country",
                      o = (0, k.select)(
                        oe.VALIDATION_STORE_KEY
                      ).getValidationError(t);
                    !e.country &&
                      (e.city || e.state || e.postcode) &&
                      (o
                        ? (0, k.dispatch)(
                            oe.VALIDATION_STORE_KEY
                          ).showValidationError(t)
                        : (0, k.dispatch)(
                            oe.VALIDATION_STORE_KEY
                          ).setValidationErrors({
                            [t]: {
                              message: (0, m.__)(
                                "Please select your country",
                                "woocommerce"
                              ),
                              hidden: !1,
                            },
                          })),
                      o &&
                        e.country &&
                        (0, k.dispatch)(
                          oe.VALIDATION_STORE_KEY
                        ).clearValidationError(t);
                  })(a);
              }, [a, s]),
              (0, p.useEffect)(() => {
                var e, t;
                null === (e = E.current) ||
                  void 0 === e ||
                  null === (t = e.postcode) ||
                  void 0 === t ||
                  t.revalidate();
              }, [_]),
              (e = e || `${l}`),
              (0, c.createElement)(
                "div",
                { id: e, className: "wc-block-components-address-form" },
                g.fields.map((t) => {
                  if (t.hidden) return null;
                  const o = {
                    id: `${e}-${t.key}`,
                    errorId: `${s}_${t.key}`,
                    label: t.required ? t.label : t.optionalLabel,
                    autoCapitalize: t.autocapitalize,
                    autoComplete: t.autocomplete,
                    errorMessage: t.errorMessage,
                    required: t.required,
                    className: `wc-block-components-address-form__${t.key}`,
                    ...t.attributes,
                  };
                  if (
                    ("email" === t.key &&
                      ((o.id = "email"), (o.errorId = "billing_email")),
                    "checkbox" === t.type)
                  )
                    return (0, c.createElement)(Vt.CheckboxControl, {
                      className: `wc-block-components-address-form__${t.key}`,
                      label: t.label,
                      key: t.key,
                      checked: Boolean(a[t.key]),
                      onChange: (e) => {
                        r({ ...a, [t.key]: e });
                      },
                      ...o,
                    });
                  if (
                    "country" === t.key &&
                    (0, be.objectHasProp)(a, "country")
                  ) {
                    const e = "shipping" === s ? oo : to;
                    return (0, c.createElement)(e, {
                      key: t.key,
                      ...o,
                      value: a.country,
                      onChange: (e) => {
                        const t = { ...a, country: e, state: "" };
                        a.postcode &&
                          !(0, Tt.isPostcode)({
                            postcode: a.postcode,
                            country: e,
                          }) &&
                          (t.postcode = ""),
                          r(t);
                      },
                    });
                  }
                  if ("state" === t.key && (0, be.objectHasProp)(a, "state")) {
                    const e = "shipping" === s ? so : no;
                    return (0, c.createElement)(e, {
                      key: t.key,
                      ...o,
                      country: a.country,
                      value: a.state,
                      onChange: (e) => r({ ...a, state: e }),
                    });
                  }
                  return "select" === t.type
                    ? void 0 === t.options
                      ? null
                      : (0, c.createElement)(Qt, {
                          key: t.key,
                          ...o,
                          className: n()(
                            "wc-block-components-select-input",
                            `wc-block-components-select-input-${t.key}`
                          ),
                          value: a[t.key],
                          onChange: (e) => {
                            r({ ...a, [t.key]: e });
                          },
                          options: t.options,
                        })
                    : (0, c.createElement)(Vt.ValidatedTextInput, {
                        key: t.key,
                        ref: (e) => (E.current[t.key] = e),
                        ...o,
                        type: t.type,
                        value: a[t.key],
                        onChange: (e) => r({ ...a, [t.key]: e }),
                        customFormatter: (e) =>
                          "postcode" === t.key
                            ? e.trimStart().toUpperCase()
                            : e,
                        customValidation: (e) =>
                          ((e, t, o) =>
                            !(
                              (e.required || e.value) &&
                              ("postcode" === t &&
                              o &&
                              !(0, Tt.isPostcode)({
                                postcode: e.value,
                                country: o,
                              })
                                ? (e.setCustomValidity(
                                    (0, m.__)(
                                      "Please enter a valid postcode",
                                      "woocommerce"
                                    )
                                  ),
                                  1)
                                : "email" === t &&
                                  !(0, Ae.isEmail)(e.value) &&
                                  (e.setCustomValidity(
                                    (0, m.__)(
                                      "Please enter a valid email address",
                                      "woocommerce"
                                    )
                                  ),
                                  1))
                            ))(
                            e,
                            t.key,
                            (0, be.objectHasProp)(a, "country") ? a.country : ""
                          ),
                      });
                }),
                i
              )
            );
          },
          lo = io;
        o(2262);
        const mo = ({ isEditing: e = !1, addressCard: t, addressForm: o }) => {
            const r = n()("wc-block-components-address-address-wrapper", {
              "is-editing": e,
            });
            return (0, c.createElement)(
              "div",
              { className: r },
              (0, c.createElement)(
                "div",
                { className: "wc-block-components-address-card-wrapper" },
                t()
              ),
              (0, c.createElement)(
                "div",
                { className: "wc-block-components-address-form-wrapper" },
                o()
              )
            );
          },
          po = (e) =>
            (0, be.isObject)(H[e.country]) &&
            (0, be.isString)(H[e.country][e.state])
              ? (0, Pe.decodeEntities)(H[e.country][e.state])
              : e.state,
          uo = (e) =>
            (0, be.isString)($[e.country])
              ? (0, Pe.decodeEntities)($[e.country])
              : e.country;
        o(3658);
        const ho = ({ address: e, onEdit: t, target: o, fieldConfig: r }) => {
            const n = (0, v.getSetting)("countryData", {});
            let s = (0, v.getSetting)(
              "defaultAddressFormat",
              "{name}\n{company}\n{address_1}\n{address_2}\n{city}\n{state}\n{postcode}\n{country}"
            );
            (0, be.objectHasProp)(n, null == e ? void 0 : e.country) &&
              (0, be.objectHasProp)(n[e.country], "format") &&
              (0, be.isString)(n[e.country].format) &&
              (s = n[e.country].format);
            const { name: a, address: i } = ((e, t) => {
              const o = ((e) =>
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
                c = t.replace(`${o}\n`, ""),
                r = [
                  ["{company}", (null == e ? void 0 : e.company) || ""],
                  ["{address_1}", (null == e ? void 0 : e.address_1) || ""],
                  ["{address_2}", (null == e ? void 0 : e.address_2) || ""],
                  ["{city}", (null == e ? void 0 : e.city) || ""],
                  ["{state}", po(e)],
                  ["{postcode}", (null == e ? void 0 : e.postcode) || ""],
                  ["{country}", uo(e)],
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
                  ["{state_upper}", po(e).toUpperCase()],
                  ["{state_code}", (null == e ? void 0 : e.state) || ""],
                  [
                    "{postcode_upper}",
                    ((null == e ? void 0 : e.postcode) || "").toUpperCase(),
                  ],
                  ["{country_upper}", uo(e).toUpperCase()],
                ],
                n = [
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
              let s = o;
              n.forEach(([e, t]) => {
                s = s.replace(e, t);
              });
              let a = c;
              r.forEach(([e, t]) => {
                a = a.replace(e, t);
              });
              const i = a
                .replace(/^,\s|,\s$/g, "")
                .replace(/\n{2,}/, "\n")
                .split("\n")
                .filter(Boolean);
              return { name: s, address: i };
            })(e, s);
            return (0, c.createElement)(
              "div",
              { className: "wc-block-components-address-card" },
              (0, c.createElement)(
                "address",
                null,
                (0, c.createElement)(
                  "span",
                  {
                    className:
                      "wc-block-components-address-card__address-section",
                  },
                  a
                ),
                (0, c.createElement)(
                  "div",
                  {
                    className:
                      "wc-block-components-address-card__address-section",
                  },
                  i
                    .filter((e) => !!e)
                    .map((e, t) =>
                      (0, c.createElement)("span", { key: "address-" + t }, e)
                    )
                ),
                e.phone && !r.phone.hidden
                  ? (0, c.createElement)(
                      "div",
                      {
                        key: "address-phone",
                        className:
                          "wc-block-components-address-card__address-section",
                      },
                      e.phone
                    )
                  : ""
              ),
              t &&
                (0, c.createElement)(
                  "a",
                  {
                    role: "button",
                    href: "#" + o,
                    className: "wc-block-components-address-card__edit",
                    "aria-label": (0, m.__)("Edit address", "woocommerce"),
                    onClick: (e) => {
                      t(), e.preventDefault();
                    },
                  },
                  (0, m.__)("Edit", "woocommerce")
                )
            );
          },
          _o = ({ addressFieldsConfig: e, defaultEditing: t = !1 }) => {
            const {
                shippingAddress: o,
                setShippingAddress: r,
                setBillingAddress: n,
                useShippingAsBilling: s,
              } = jt(),
              { dispatchCheckoutEvent: a } = ct(),
              [i, l] = (0, p.useState)(t),
              { hasValidationErrors: m, invalidProps: d } = (0, k.useSelect)(
                (e) => {
                  const t = e(oe.VALIDATION_STORE_KEY);
                  return {
                    hasValidationErrors: t.hasValidationErrors(),
                    invalidProps: Object.keys(o)
                      .filter(
                        (e) => void 0 !== t.getValidationError("shipping_" + e)
                      )
                      .filter(Boolean),
                  };
                }
              );
            (0, p.useEffect)(() => {
              d.length > 0 && !1 === i && l(!0);
            }, [i, m, d.length]);
            const u = (0, p.useCallback)(
                (e) => {
                  r(e),
                    s && (n(e), a("set-billing-address")),
                    a("set-shipping-address");
                },
                [a, n, r, s]
              ),
              h = (0, p.useCallback)(
                () =>
                  (0, c.createElement)(ho, {
                    address: o,
                    target: "shipping",
                    onEdit: () => {
                      l(!0);
                    },
                    fieldConfig: e,
                  }),
                [o, e]
              ),
              _ = (0, p.useCallback)(
                () =>
                  (0, c.createElement)(lo, {
                    id: "shipping",
                    addressType: "shipping",
                    onChange: u,
                    values: o,
                    fields: G,
                    fieldConfig: e,
                  }),
                [e, u, o]
              );
            return (0, c.createElement)(mo, {
              isEditing: i,
              addressCard: h,
              addressForm: _,
            });
          },
          go = ({
            showCompanyField: e = !1,
            showApartmentField: t = !1,
            showPhoneField: o = !1,
            requireCompanyField: r = !1,
            requirePhoneField: n = !1,
          }) => {
            const {
                setBillingAddress: s,
                shippingAddress: a,
                billingAddress: i,
                useShippingAsBilling: l,
                setUseShippingAsBilling: d,
              } = jt(),
              { isEditor: u } = w(),
              h = 0 === (0, v.getSetting)("currentUserId"),
              _ = () => {
                const t = { ...a };
                o || delete t.phone, e && delete t.company, s(t);
              };
            (0, Zt.qR)(() => {
              l && _();
            });
            const g = (0, p.useMemo)(
                () => ({
                  company: { hidden: !e, required: r },
                  address_2: { hidden: !t },
                  phone: { hidden: !o, required: n },
                }),
                [e, r, t, o, n]
              ),
              E = u ? Xt : p.Fragment,
              b = l
                ? [ve.SHIPPING_ADDRESS, ve.BILLING_ADDRESS]
                : [ve.SHIPPING_ADDRESS],
              y = !(!a.address_1 || (!a.first_name && !a.last_name)),
              { cartDataLoaded: f } = (0, k.useSelect)((e) => ({
                cartDataLoaded: e(oe.CART_STORE_KEY).hasFinishedResolution(
                  "getCartData"
                ),
              })),
              C = u || !y;
            return (0, c.createElement)(
              p.Fragment,
              null,
              (0, c.createElement)(Vt.StoreNoticesContainer, { context: b }),
              (0, c.createElement)(
                E,
                null,
                f
                  ? (0, c.createElement)(_o, {
                      addressFieldsConfig: g,
                      defaultEditing: C,
                    })
                  : null
              ),
              (0, c.createElement)(Vt.CheckboxControl, {
                className: "wc-block-checkout__use-address-for-billing",
                label: (0, m.__)("Use same address for billing", "woocommerce"),
                checked: l,
                onChange: (e) => {
                  d(e),
                    e
                      ? _()
                      : ((e) => {
                          if (!e || !h) return;
                          const t = ((e) => {
                            const t = Re(G, {}, e.country),
                              o = Object.assign({}, e);
                            return (
                              t.forEach(({ key: t = "" }) => {
                                "country" !== t &&
                                  "state" !== t &&
                                  xe(t, e) &&
                                  (o[t] = "");
                              }),
                              o
                            );
                          })(e);
                          s(t);
                        })(i);
                },
              })
            );
          },
          ko = ({
            defaultTitle: e = (0, m.__)("Step", "woocommerce"),
            defaultDescription: t = (0, m.__)(
              "Step description text.",
              "woocommerce"
            ),
            defaultShowStepNumber: o = !0,
          }) => ({
            title: { type: "string", default: e },
            description: { type: "string", default: t },
            showStepNumber: { type: "boolean", default: o },
          }),
          Eo = {
            ...ko({
              defaultTitle: (0, m.__)("Shipping address", "woocommerce"),
              defaultDescription: (0, m.__)(
                "Enter the address where you want your order delivered.",
                "woocommerce"
              ),
            }),
            className: { type: "string", default: "" },
            lock: { type: "object", default: { move: !0, remove: !0 } },
          };
        (0, l.registerBlockType)(
          "woocommerce/checkout-shipping-address-block",
          {
            icon: {
              src: (0, c.createElement)(i.Z, {
                icon: Ut.Z,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            attributes: Eo,
            edit: ({ attributes: e, setAttributes: t }) => {
              const {
                  showCompanyField: o,
                  showApartmentField: r,
                  requireCompanyField: s,
                  showPhoneField: a,
                  requirePhoneField: i,
                } = Ot(),
                { addressFieldControls: l } = Mt(),
                { showShippingFields: m } = jt();
              return m
                ? (0, c.createElement)(
                    $t,
                    {
                      setAttributes: t,
                      attributes: e,
                      className: n()(
                        "wc-block-checkout__shipping-fields",
                        null == e ? void 0 : e.className
                      ),
                    },
                    (0, c.createElement)(l, null),
                    (0, c.createElement)(go, {
                      showCompanyField: o,
                      showApartmentField: r,
                      requireCompanyField: s,
                      showPhoneField: a,
                      requirePhoneField: i,
                    }),
                    (0, c.createElement)(Ht, {
                      block: Tt.innerBlockAreas.SHIPPING_ADDRESS,
                    })
                  )
                : null;
            },
            save: () =>
              (0, c.createElement)(
                "div",
                { ...d.useBlockProps.save() },
                (0, c.createElement)(qt, null)
              ),
          }
        );
        var wo = o(5676);
        o(8054);
        const bo = L
            ? `<a href="${L}" target="_blank">${(0, m.__)(
                "Terms and Conditions",
                "woocommerce"
              )}</a>`
            : (0, m.__)("Terms and Conditions", "woocommerce"),
          yo = F
            ? `<a href="${F}" target="_blank">${(0, m.__)(
                "Privacy Policy",
                "woocommerce"
              )}</a>`
            : (0, m.__)("Privacy Policy", "woocommerce"),
          vo = (0, m.sprintf)(
            /* translators: %1$s terms page link, %2$s privacy page link. */ /* translators: %1$s terms page link, %2$s privacy page link. */
            (0, m.__)(
              "By proceeding with your purchase you agree to our %1$s and %2$s",
              "woocommerce"
            ),
            bo,
            yo
          ),
          fo = (0, m.sprintf)(
            /* translators: %1$s terms page link, %2$s privacy page link. */ /* translators: %1$s terms page link, %2$s privacy page link. */
            (0, m.__)(
              "You must accept our %1$s and %2$s to continue with your purchase.",
              "woocommerce"
            ),
            bo,
            yo
          );
        o(2364),
          (0, l.registerBlockType)("woocommerce/checkout-terms-block", {
            icon: {
              src: (0, c.createElement)(i.Z, {
                icon: wo.Z,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            edit: ({
              attributes: { checkbox: e, text: t },
              setAttributes: o,
            }) => {
              const r = (0, d.useBlockProps)(),
                n = t || (e ? fo : vo);
              return (0, c.createElement)(
                "div",
                { ...r },
                (0, c.createElement)(
                  d.InspectorControls,
                  null,
                  (!L || !F) &&
                    (0, c.createElement)(
                      Nt.Notice,
                      {
                        className: "wc-block-checkout__terms_notice",
                        status: "warning",
                        isDismissible: !1,
                      },
                      (0, m.__)(
                        "Link to your store's Terms and Conditions and Privacy Policy pages by creating pages for them.",
                        "woocommerce"
                      ),
                      (0, c.createElement)("br", null),
                      !L &&
                        (0, c.createElement)(
                          c.Fragment,
                          null,
                          (0, c.createElement)("br", null),
                          (0, c.createElement)(
                            Nt.ExternalLink,
                            {
                              href: `${v.ADMIN_URL}admin.php?page=wc-settings&tab=advanced`,
                            },
                            (0, m.__)(
                              "Setup a Terms and Conditions page",
                              "woocommerce"
                            )
                          )
                        ),
                      !F &&
                        (0, c.createElement)(
                          c.Fragment,
                          null,
                          (0, c.createElement)("br", null),
                          (0, c.createElement)(
                            Nt.ExternalLink,
                            { href: `${v.ADMIN_URL}options-privacy.php` },
                            (0, m.__)(
                              "Setup a Privacy Policy page",
                              "woocommerce"
                            )
                          )
                        )
                    ),
                  L &&
                    F &&
                    !(n.includes(L) && n.includes(F)) &&
                    (0, c.createElement)(
                      Nt.Notice,
                      {
                        className: "wc-block-checkout__terms_notice",
                        status: "warning",
                        isDismissible: !1,
                        actions:
                          vo !== t
                            ? [
                                {
                                  label: (0, m.__)(
                                    "Restore default text",
                                    "woocommerce"
                                  ),
                                  onClick: () => o({ text: "" }),
                                },
                              ]
                            : [],
                      },
                      (0, c.createElement)(
                        "p",
                        null,
                        (0, m.__)(
                          "Ensure you add links to your policy pages in this section.",
                          "woocommerce"
                        )
                      )
                    ),
                  (0, c.createElement)(
                    Nt.PanelBody,
                    { title: (0, m.__)("Display options", "woocommerce") },
                    (0, c.createElement)(Nt.ToggleControl, {
                      label: (0, m.__)("Require checkbox", "woocommerce"),
                      checked: e,
                      onChange: () => o({ checkbox: !e }),
                    })
                  )
                ),
                (0, c.createElement)(
                  "div",
                  { className: "wc-block-checkout__terms" },
                  e
                    ? (0, c.createElement)(
                        c.Fragment,
                        null,
                        (0, c.createElement)(Vt.CheckboxControl, {
                          id: "terms-condition",
                          checked: !1,
                        }),
                        (0, c.createElement)(d.RichText, {
                          value: n,
                          onChange: (e) => o({ text: e }),
                        })
                      )
                    : (0, c.createElement)(d.RichText, {
                        tagName: "span",
                        value: n,
                        onChange: (e) => o({ text: e }),
                      })
                )
              );
            },
            save: () =>
              (0, c.createElement)("div", { ...d.useBlockProps.save() }),
          });
        var Co = o(6217);
        const So = () => {
            const {
                customerId: e,
                shouldCreateAccount: t,
                additionalFields: o,
              } = (0, k.useSelect)((e) => {
                const t = e(oe.CHECKOUT_STORE_KEY);
                return {
                  customerId: t.getCustomerId(),
                  shouldCreateAccount: t.getShouldCreateAccount(),
                  additionalFields: t.getAdditionalFields(),
                };
              }),
              { __internalSetShouldCreateAccount: r, setAdditionalFields: n } =
                (0, k.useDispatch)(oe.CHECKOUT_STORE_KEY),
              { billingAddress: s, setEmail: a } = jt(),
              { dispatchCheckoutEvent: i } = ct(),
              l =
                !e &&
                (0, v.getSetting)("checkoutAllowsGuest", !1) &&
                (0, v.getSetting)("checkoutAllowsSignup", !1) &&
                (0, c.createElement)(Vt.CheckboxControl, {
                  className: "wc-block-checkout__create-account",
                  label: (0, m.__)("Create an account?", "woocommerce"),
                  checked: t,
                  onChange: (e) => r(e),
                }),
              d = { email: s.email, ...o };
            return (0, c.createElement)(
              c.Fragment,
              null,
              (0, c.createElement)(Vt.StoreNoticesContainer, {
                context: ve.CONTACT_INFORMATION,
              }),
              (0, c.createElement)(
                lo,
                {
                  id: "contact",
                  addressType: "contact",
                  onChange: (e) => {
                    const { email: t, ...o } = e;
                    a(t), i("set-email-address"), n(o);
                  },
                  values: d,
                  fields: X,
                },
                l
              )
            );
          },
          Po = {
            ...ko({
              defaultTitle: (0, m.__)("Contact information", "woocommerce"),
              defaultDescription: (0, m.__)(
                "We'll use this email to send you details and updates about your order.",
                "woocommerce"
              ),
            }),
            className: { type: "string", default: "" },
            lock: { type: "object", default: { remove: !0, move: !0 } },
          };
        (0, l.registerBlockType)(
          "woocommerce/checkout-contact-information-block",
          {
            icon: {
              src: (0, c.createElement)(i.Z, {
                icon: Co.Z,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            attributes: Po,
            edit: ({ attributes: e, setAttributes: t }) =>
              (0, c.createElement)(
                $t,
                {
                  attributes: e,
                  setAttributes: t,
                  className: n()(
                    "wc-block-checkout__contact-fields",
                    null == e ? void 0 : e.className
                  ),
                },
                (0, c.createElement)(
                  d.InspectorControls,
                  null,
                  (0, c.createElement)(
                    Nt.PanelBody,
                    {
                      title: (0, m.__)(
                        "Account creation and guest checkout",
                        "woocommerce"
                      ),
                    },
                    (0, c.createElement)(
                      "p",
                      { className: "wc-block-checkout__controls-text" },
                      (0, m.__)(
                        "Account creation and guest checkout settings can be managed in your store settings.",
                        "woocommerce"
                      )
                    ),
                    (0, c.createElement)(
                      Nt.ExternalLink,
                      {
                        href: `${v.ADMIN_URL}admin.php?page=wc-settings&tab=account`,
                      },
                      (0, m.__)("Manage account settings", "woocommerce")
                    )
                  )
                ),
                (0, c.createElement)(Xt, null, (0, c.createElement)(So, null)),
                (0, c.createElement)(Ht, {
                  block: Tt.innerBlockAreas.CONTACT_INFORMATION,
                })
              ),
            save: () =>
              (0, c.createElement)(
                "div",
                { ...d.useBlockProps.save() },
                (0, c.createElement)(qt, null)
              ),
          }
        );
        const No = ({ addressFieldsConfig: e, defaultEditing: t = !1 }) => {
            const {
                billingAddress: o,
                setShippingAddress: r,
                setBillingAddress: n,
                useBillingAsShipping: s,
              } = jt(),
              { dispatchCheckoutEvent: a } = ct(),
              [i, l] = (0, p.useState)(t),
              { hasValidationErrors: m, invalidProps: d } = (0, k.useSelect)(
                (e) => {
                  const t = e(oe.VALIDATION_STORE_KEY);
                  return {
                    hasValidationErrors: t.hasValidationErrors(),
                    invalidProps: Object.keys(o)
                      .filter(
                        (e) =>
                          "email" !== e &&
                          void 0 !== t.getValidationError("billing_" + e)
                      )
                      .filter(Boolean),
                  };
                }
              );
            (0, p.useEffect)(() => {
              d.length > 0 && !1 === i && l(!0);
            }, [i, m, d.length]);
            const u = (0, p.useCallback)(
                (e) => {
                  n(e),
                    s && (r(e), a("set-shipping-address")),
                    a("set-billing-address");
                },
                [a, n, r, s]
              ),
              h = (0, p.useCallback)(
                () =>
                  (0, c.createElement)(ho, {
                    address: o,
                    target: "billing",
                    onEdit: () => {
                      l(!0);
                    },
                    fieldConfig: e,
                  }),
                [o, e]
              ),
              _ = (0, p.useCallback)(
                () =>
                  (0, c.createElement)(
                    c.Fragment,
                    null,
                    (0, c.createElement)(lo, {
                      id: "billing",
                      addressType: "billing",
                      onChange: u,
                      values: o,
                      fields: G,
                      fieldConfig: e,
                    })
                  ),
                [e, o, u]
              );
            return (0, c.createElement)(mo, {
              isEditing: i,
              addressCard: h,
              addressForm: _,
            });
          },
          To = ({
            showCompanyField: e = !1,
            showApartmentField: t = !1,
            showPhoneField: o = !1,
            requireCompanyField: r = !1,
            requirePhoneField: n = !1,
          }) => {
            const {
                shippingAddress: s,
                billingAddress: a,
                setShippingAddress: i,
                useBillingAsShipping: l,
              } = jt(),
              { isEditor: m } = w();
            (0, Zt.qR)(() => {
              if (l) {
                const { email: t, ...c } = a,
                  r = { ...c };
                o || delete r.phone, e && delete r.company, i(r);
              }
            });
            const d = (0, p.useMemo)(
                () => ({
                  company: { hidden: !e, required: r },
                  address_2: { hidden: !t },
                  phone: { hidden: !o, required: n },
                }),
                [e, r, t, o, n]
              ),
              u = m ? Xt : p.Fragment,
              h = l
                ? [ve.BILLING_ADDRESS, ve.SHIPPING_ADDRESS]
                : [ve.BILLING_ADDRESS],
              { cartDataLoaded: _ } = (0, k.useSelect)((e) => ({
                cartDataLoaded: e(oe.CART_STORE_KEY).hasFinishedResolution(
                  "getCartData"
                ),
              })),
              g = !(!a.address_1 || (!a.first_name && !a.last_name)),
              { email: E, ...b } = a,
              y = Je()(b, s),
              v = m || !g || y;
            return (0, c.createElement)(
              p.Fragment,
              null,
              (0, c.createElement)(Vt.StoreNoticesContainer, { context: h }),
              (0, c.createElement)(
                u,
                null,
                _
                  ? (0, c.createElement)(No, {
                      addressFieldsConfig: d,
                      defaultEditing: v,
                    })
                  : null
              )
            );
          },
          Ro = (0, m.__)("Billing address", "woocommerce"),
          Ao = (0, m.__)(
            "Enter the billing address that matches your payment method.",
            "woocommerce"
          ),
          xo = (0, m.__)("Billing and shipping address", "woocommerce"),
          Io = (0, m.__)(
            "Enter the billing and shipping address that matches your payment method.",
            "woocommerce"
          ),
          Oo = {
            ...ko({ defaultTitle: Ro, defaultDescription: Ao }),
            className: { type: "string", default: "" },
            lock: { type: "object", default: { move: !0, remove: !0 } },
          };
        (0, l.registerBlockType)("woocommerce/checkout-billing-address-block", {
          icon: {
            src: (0, c.createElement)(i.Z, {
              icon: Ut.Z,
              className: "wc-block-editor-components-block-icon",
            }),
          },
          attributes: Oo,
          edit: ({ attributes: e, setAttributes: t }) => {
            const {
                showCompanyField: o,
                showApartmentField: r,
                requireCompanyField: s,
                showPhoneField: a,
                requirePhoneField: i,
              } = Ot(),
              { addressFieldControls: l } = Mt(),
              {
                showBillingFields: m,
                forcedBillingAddress: d,
                useBillingAsShipping: p,
              } = jt();
            return m || p
              ? ((e.title = ((e, t) =>
                  t ? (e === Ro ? xo : e) : e === xo ? Ro : e)(e.title, d)),
                (e.description = ((e, t) =>
                  t ? (e === Ao ? Io : e) : e === Io ? Ao : e)(
                  e.description,
                  d
                )),
                (0, c.createElement)(
                  $t,
                  {
                    setAttributes: t,
                    attributes: e,
                    className: n()(
                      "wc-block-checkout__billing-fields",
                      null == e ? void 0 : e.className
                    ),
                  },
                  (0, c.createElement)(l, null),
                  (0, c.createElement)(To, {
                    showCompanyField: o,
                    showApartmentField: r,
                    requireCompanyField: s,
                    showPhoneField: a,
                    requirePhoneField: i,
                  }),
                  (0, c.createElement)(Ht, {
                    block: Tt.innerBlockAreas.BILLING_ADDRESS,
                  })
                ))
              : null;
          },
          save: () =>
            (0, c.createElement)(
              "div",
              { ...d.useBlockProps.save() },
              (0, c.createElement)(qt, null)
            ),
        });
        var Mo = o(2069);
        const Bo = (0, m.__)("Place Order", "woocommerce"),
          Do = {
            cartPageId: { type: "number", default: 0 },
            showReturnToCart: { type: "boolean", default: !0 },
            className: { type: "string", default: "" },
            lock: { type: "object", default: { move: !0, remove: !0 } },
            placeOrderButtonLabel: { type: "string", default: Bo },
          },
          Fo = (e, t) => {
            if (!e.title.raw) return e.slug;
            const o = 1 === t.filter((t) => t.title.raw === e.title.raw).length;
            return e.title.raw + (o ? "" : ` - ${e.slug}`);
          },
          Lo = ({ setPageId: e, pageId: t, labels: o }) => {
            const r =
              (0, k.useSelect)(
                (e) =>
                  e("core").getEntityRecords("postType", "page", {
                    status: "publish",
                    orderby: "title",
                    order: "asc",
                    per_page: 100,
                  }),
                []
              ) || null;
            return r
              ? (0, c.createElement)(
                  Nt.PanelBody,
                  { title: o.title },
                  (0, c.createElement)(Nt.SelectControl, {
                    label: (0, m.__)("Link to", "woocommerce"),
                    value: t,
                    options: [
                      { label: o.default, value: 0 },
                      ...r.map((e) => ({
                        label: Fo(e, r),
                        value: parseInt(e.id, 10),
                      })),
                    ],
                    onChange: (t) => e(parseInt(t, 10)),
                  })
                )
              : null;
          };
        var Uo = o(4054);
        o(7755);
        const Yo = ({ link: e }) => {
          const t = e || Y;
          return t
            ? (0, c.createElement)(
                "a",
                {
                  href: t,
                  className:
                    "wc-block-components-checkout-return-to-cart-button",
                },
                (0, c.createElement)(i.Z, { icon: Uo.Z }),
                (0, m.__)("Return to Cart", "woocommerce")
              )
            : null;
        };
        var jo = o(3871);
        o(1029), o(7440);
        const Vo = () =>
            (0, c.createElement)("span", {
              className: "wc-block-components-spinner",
              "aria-hidden": "true",
            }),
          Ko = ({
            className: e,
            showSpinner: t = !1,
            children: o,
            variant: r = "contained",
            ...s
          }) => {
            const a = n()(
              "wc-block-components-button",
              "wp-element-button",
              e,
              r,
              { "wc-block-components-button--loading": t }
            );
            return (0, c.createElement)(
              jo.Z,
              { className: a, ...s },
              t && (0, c.createElement)(Vo, null),
              (0, c.createElement)(
                "span",
                { className: "wc-block-components-button__text" },
                o
              )
            );
          },
          $o = ({ onChange: e, placeholder: t, value: o, ...r }) =>
            (0, c.createElement)(
              Ko,
              { ...r },
              (0, c.createElement)(d.RichText, {
                multiline: !1,
                allowedFormats: [],
                value: o,
                placeholder: t,
                onChange: e,
              })
            );
        o(1165);
        const Ho = {
          icon: {
            src: (0, c.createElement)(i.Z, {
              icon: Mo.Z,
              className: "wc-block-editor-components-block-icon",
            }),
          },
          attributes: Do,
          save: () =>
            (0, c.createElement)("div", { ...d.useBlockProps.save() }),
          edit: ({ attributes: e, setAttributes: t }) => {
            const o = (0, d.useBlockProps)(),
              {
                cartPageId: r = 0,
                showReturnToCart: s = !0,
                placeOrderButtonLabel: a,
              } = e,
              { current: i } = (0, p.useRef)(r),
              l = (0, k.useSelect)(
                (e) => i || e("core/editor").getCurrentPostId(),
                [i]
              );
            return (0, c.createElement)(
              "div",
              { ...o },
              (0, c.createElement)(
                d.InspectorControls,
                null,
                (0, c.createElement)(
                  Nt.PanelBody,
                  { title: (0, m.__)("Account options", "woocommerce") },
                  (0, c.createElement)(Nt.ToggleControl, {
                    label: (0, m.__)(
                      'Show a "Return to Cart" link',
                      "woocommerce"
                    ),
                    checked: s,
                    onChange: () => t({ showReturnToCart: !s }),
                  })
                ),
                s &&
                  !(l === D && 0 === i) &&
                  (0, c.createElement)(Lo, {
                    pageId: r,
                    setPageId: (e) => t({ cartPageId: e }),
                    labels: {
                      title: (0, m.__)("Return to Cart button", "woocommerce"),
                      default: (0, m.__)(
                        "WooCommerce Cart Page",
                        "woocommerce"
                      ),
                    },
                  })
              ),
              (0, c.createElement)(
                "div",
                { className: "wc-block-checkout__actions" },
                (0, c.createElement)(
                  "div",
                  { className: "wc-block-checkout__actions_row" },
                  (0, c.createElement)(
                    Xt,
                    null,
                    s &&
                      (0, c.createElement)(Yo, {
                        link: (0, v.getSetting)("page-" + r, !1),
                      })
                  ),
                  (0, c.createElement)($o, {
                    className: n()(
                      "wc-block-cart__submit-button",
                      "wc-block-components-checkout-place-order-button",
                      {
                        "wc-block-components-checkout-place-order-button--full-width":
                          !s,
                      }
                    ),
                    value: a,
                    placeholder: Bo,
                    onChange: (e) => {
                      t({ placeOrderButtonLabel: e });
                    },
                  })
                )
              )
            );
          },
        };
        (0, l.registerBlockType)("woocommerce/checkout-actions-block", Ho);
        const qo = () => {
          const { additionalFields: e } = (0, k.useSelect)((e) => ({
              additionalFields: e(oe.CHECKOUT_STORE_KEY).getAdditionalFields(),
            })),
            { setAdditionalFields: t } = (0, k.useDispatch)(
              oe.CHECKOUT_STORE_KEY
            ),
            o = { ...e };
          return 0 === J.length
            ? null
            : (0, c.createElement)(
                c.Fragment,
                null,
                (0, c.createElement)(Vt.StoreNoticesContainer, {
                  context: ve.ORDER_INFORMATION,
                }),
                (0, c.createElement)(lo, {
                  id: "additional-information",
                  addressType: "additional-information",
                  onChange: (e) => {
                    t(e);
                  },
                  values: o,
                  fields: J,
                })
              );
        };
        o(7247), o(6107);
        const Zo = {
          ...ko({
            defaultTitle: (0, m.__)(
              "Additional order information",
              "woocommerce"
            ),
            defaultDescription: "",
          }),
          className: { type: "string", default: "" },
          lock: { type: "object", default: { move: !1, remove: !0 } },
        };
        (0, l.registerBlockType)(
          "woocommerce/checkout-additional-information-block",
          {
            attributes: Zo,
            icon: {
              src: (0, c.createElement)(i.Z, {
                icon: wo.Z,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            edit: ({ attributes: e, setAttributes: t }) =>
              0 === J.length
                ? null
                : (0, c.createElement)(
                    $t,
                    {
                      setAttributes: t,
                      attributes: e,
                      className: n()(
                        "wc-block-checkout__additional-information-fields",
                        null == e ? void 0 : e.className
                      ),
                    },
                    (0, c.createElement)(qo, null)
                  ),
            save: () =>
              (0, c.createElement)("div", { ...d.useBlockProps.save() }),
          }
        );
        var zo = o(7255);
        const Wo = ({ disabled: e, onChange: t, placeholder: o, value: r }) => {
            const [n, s] = (0, p.useState)(!1),
              [a, i] = (0, p.useState)("");
            return (0, c.createElement)(
              "div",
              { className: "wc-block-checkout__add-note" },
              (0, c.createElement)(Vt.CheckboxControl, {
                disabled: e,
                label: (0, m.__)("Add a note to your order", "woocommerce"),
                checked: n,
                onChange: (e) => {
                  s(e), e ? r !== a && t(a) : (t(""), i(r));
                },
              }),
              n &&
                (0, c.createElement)(Vt.Textarea, {
                  disabled: e,
                  onTextChange: t,
                  placeholder: o,
                  value: r,
                })
            );
          },
          Go = ({ className: e }) => {
            const { needsShipping: t } = rt(),
              { isProcessing: o, orderNotes: r } = (0, k.useSelect)((e) => {
                const t = e(oe.CHECKOUT_STORE_KEY);
                return {
                  isProcessing: t.isProcessing(),
                  orderNotes: t.getOrderNotes(),
                };
              }),
              { __internalSetOrderNotes: s } = (0, k.useDispatch)(
                oe.CHECKOUT_STORE_KEY
              );
            return (0, c.createElement)(
              Vt.FormStep,
              {
                id: "order-notes",
                showStepNumber: !1,
                className: n()("wc-block-checkout__order-notes", e),
                disabled: o,
              },
              (0, c.createElement)(Wo, {
                disabled: o,
                onChange: s,
                placeholder: t
                  ? (0, m.__)(
                      "Notes about your order, e.g. special notes for delivery.",
                      "woocommerce"
                    )
                  : (0, m.__)("Notes about your order.", "woocommerce"),
                value: r,
              })
            );
          };
        o(8659),
          o(56),
          (0, l.registerBlockType)("woocommerce/checkout-order-note-block", {
            icon: {
              src: (0, c.createElement)(i.Z, {
                icon: zo.Z,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            edit: () => {
              const e = (0, d.useBlockProps)();
              return (0, c.createElement)(
                "div",
                { ...e },
                (0, c.createElement)(Xt, null, (0, c.createElement)(Go, null))
              );
            },
            save: () =>
              (0, c.createElement)("div", { ...d.useBlockProps.save() }),
          });
        const Xo = (0, c.createElement)(
          s.SVG,
          {
            xmlns: "http://www.w3.org/2000/SVG",
            viewBox: "0 0 24 24",
            fill: "none",
          },
          (0, c.createElement)("path", {
            stroke: "currentColor",
            strokeWidth: "1.5",
            fill: "none",
            d: "M6 3.75h12c.69 0 1.25.56 1.25 1.25v14c0 .69-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25V5c0-.69.56-1.25 1.25-1.25z",
          }),
          (0, c.createElement)("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M6.9 7.5A1.1 1.1 0 018 6.4h8a1.1 1.1 0 011.1 1.1v2a1.1 1.1 0 01-1.1 1.1H8a1.1 1.1 0 01-1.1-1.1v-2zm1.2.1v1.8h7.8V7.6H8.1z",
            clipRule: "evenodd",
          }),
          (0, c.createElement)("path", {
            fill: "currentColor",
            d: "M8.5 12h1v1h-1v-1zM8.5 14h1v1h-1v-1zM8.5 16h1v1h-1v-1zM11.5 12h1v1h-1v-1zM11.5 14h1v1h-1v-1zM11.5 16h1v1h-1v-1zM14.5 12h1v1h-1v-1zM14.5 14h1v1h-1v-1zM14.5 16h1v1h-1v-1z",
          })
        );
        o(991);
        const Jo = ({
          children: e,
          className: t,
          screenReaderLabel: o,
          showSpinner: r = !1,
          isLoading: s = !0,
        }) =>
          (0, c.createElement)(
            "div",
            { className: n()(t, { "wc-block-components-loading-mask": s }) },
            s && r && (0, c.createElement)(Vt.Spinner, null),
            (0, c.createElement)(
              "div",
              {
                className: n()({
                  "wc-block-components-loading-mask__children": s,
                }),
                "aria-hidden": s,
              },
              e
            ),
            s &&
              (0, c.createElement)(
                "span",
                { className: "screen-reader-text" },
                o || (0, m.__)("Loading…", "woocommerce")
              )
          );
        o(1691);
        const Qo = (0, u.withInstanceId)(
          ({
            instanceId: e,
            isLoading: t = !1,
            onSubmit: o,
            displayCouponForm: r = !1,
          }) => {
            const [s, a] = (0, p.useState)(""),
              [i, l] = (0, p.useState)(!r),
              d = `wc-block-components-totals-coupon__input-${e}`,
              u = n()("wc-block-components-totals-coupon__content", {
                "screen-reader-text": i,
              }),
              { validationErrorId: h } = (0, k.useSelect)((e) => ({
                validationErrorId: e(
                  oe.VALIDATION_STORE_KEY
                ).getValidationErrorId(d),
              }));
            return (0, c.createElement)(
              "div",
              { className: "wc-block-components-totals-coupon" },
              i
                ? (0, c.createElement)(
                    "a",
                    {
                      role: "button",
                      href: "#wc-block-components-totals-coupon__form",
                      className: "wc-block-components-totals-coupon-link",
                      "aria-label": (0, m.__)("Add a coupon", "woocommerce"),
                      onClick: (e) => {
                        e.preventDefault(), l(!1);
                      },
                    },
                    (0, m.__)("Add a coupon", "woocommerce")
                  )
                : (0, c.createElement)(
                    Jo,
                    {
                      screenReaderLabel: (0, m.__)(
                        "Applying coupon…",
                        "woocommerce"
                      ),
                      isLoading: t,
                      showSpinner: !1,
                    },
                    (0, c.createElement)(
                      "div",
                      { className: u },
                      (0, c.createElement)(
                        "form",
                        {
                          className: "wc-block-components-totals-coupon__form",
                          id: "wc-block-components-totals-coupon__form",
                        },
                        (0, c.createElement)(Vt.ValidatedTextInput, {
                          id: d,
                          errorId: "coupon",
                          className: "wc-block-components-totals-coupon__input",
                          label: (0, m.__)("Enter code", "woocommerce"),
                          value: s,
                          ariaDescribedBy: h,
                          onChange: (e) => {
                            a(e);
                          },
                          focusOnMount: !0,
                          validateOnMount: !1,
                          showError: !1,
                        }),
                        (0, c.createElement)(
                          Ko,
                          {
                            className:
                              "wc-block-components-totals-coupon__button",
                            disabled: t || !s,
                            showSpinner: t,
                            onClick: (e) => {
                              var t;
                              e.preventDefault(),
                                void 0 !== o
                                  ? null === (t = o(s)) ||
                                    void 0 === t ||
                                    t.then((e) => {
                                      e && (a(""), l(!0));
                                    })
                                  : (a(""), l(!0));
                            },
                            type: "submit",
                          },
                          (0, m.__)("Apply", "woocommerce")
                        )
                      ),
                      (0, c.createElement)(Vt.ValidationInputError, {
                        propertyName: "coupon",
                        elementId: d,
                      })
                    )
                  )
            );
          }
        );
        o(4970);
        const ec = { context: "summary" },
          tc = ({
            cartCoupons: e = [],
            currency: t,
            isRemovingCoupon: o,
            removeCoupon: r,
            values: n,
          }) => {
            const { total_discount: s, total_discount_tax: a } = n,
              i = parseInt(s, 10);
            if (!i && 0 === e.length) return null;
            const l = parseInt(a, 10),
              d = (0, v.getSetting)("displayCartPricesIncludingTax", !1)
                ? i + l
                : i,
              p = (0, Tt.applyCheckoutFilter)({
                arg: ec,
                filterName: "coupons",
                defaultValue: e,
              });
            return (0, c.createElement)(Vt.TotalsItem, {
              className: "wc-block-components-totals-discount",
              currency: t,
              description:
                0 !== p.length &&
                (0, c.createElement)(
                  Jo,
                  {
                    screenReaderLabel: (0, m.__)(
                      "Removing coupon…",
                      "woocommerce"
                    ),
                    isLoading: o,
                    showSpinner: !1,
                  },
                  (0, c.createElement)(
                    "ul",
                    {
                      className:
                        "wc-block-components-totals-discount__coupon-list",
                    },
                    p.map((e) =>
                      (0, c.createElement)(Vt.RemovableChip, {
                        key: "coupon-" + e.code,
                        className:
                          "wc-block-components-totals-discount__coupon-list-item",
                        text: e.label,
                        screenReaderText: (0, m.sprintf)(
                          /* translators: %s Coupon code. */ /* translators: %s Coupon code. */
                          (0, m.__)("Coupon: %s", "woocommerce"),
                          e.label
                        ),
                        disabled: o,
                        onRemove: () => {
                          r(e.code);
                        },
                        radius: "large",
                        ariaLabel: (0, m.sprintf)(
                          /* translators: %s is a coupon code. */ /* translators: %s is a coupon code. */
                          (0, m.__)('Remove coupon "%s"', "woocommerce"),
                          e.label
                        ),
                      })
                    )
                  )
                ),
              label: d
                ? (0, m.__)("Discount", "woocommerce")
                : (0, m.__)("Coupons", "woocommerce"),
              value: d ? -1 * d : "-",
            });
          },
          oc = window.wc.priceFormat;
        o(4554);
        const cc = ({ currency: e, values: t, className: o }) => {
            const r =
                (0, v.getSetting)("taxesEnabled", !0) &&
                (0, v.getSetting)("displayCartPricesIncludingTax", !1),
              { total_price: s, total_tax: a, tax_lines: i } = t,
              { receiveCart: l, ...d } = He(),
              u = (0, Tt.applyCheckoutFilter)({
                filterName: "totalLabel",
                defaultValue: (0, m.__)("Total", "woocommerce"),
                extensions: d.extensions,
                arg: { cart: d },
              }),
              h = (0, Tt.applyCheckoutFilter)({
                filterName: "totalValue",
                defaultValue: "<price/>",
                extensions: d.extensions,
                arg: { cart: d },
                validation: Tt.productPriceValidation,
              }),
              _ = (0, c.createElement)(Vt.FormattedMonetaryAmount, {
                className: "wc-block-components-totals-footer-item-tax-value",
                currency: e,
                value: parseInt(s, 10),
              }),
              g = (0, p.createInterpolateElement)(h, { price: _ }),
              k = parseInt(a, 10),
              E =
                i && i.length > 0
                  ? (0, m.sprintf)(
                      /* translators: %s is a list of tax rates */ /* translators: %s is a list of tax rates */
                      (0, m.__)("Including %s", "woocommerce"),
                      i
                        .map(
                          ({ name: t, price: o }) =>
                            `${(0, oc.formatPrice)(o, e)} ${t}`
                        )
                        .join(", ")
                    )
                  : (0, m.__)("Including <TaxAmount/> in taxes", "woocommerce");
            return (0, c.createElement)(Vt.TotalsItem, {
              className: n()("wc-block-components-totals-footer-item", o),
              currency: e,
              label: u,
              value: g,
              description:
                r &&
                0 !== k &&
                (0, c.createElement)(
                  "p",
                  { className: "wc-block-components-totals-footer-item-tax" },
                  (0, p.createInterpolateElement)(E, {
                    TaxAmount: (0, c.createElement)(
                      Vt.FormattedMonetaryAmount,
                      {
                        className:
                          "wc-block-components-totals-footer-item-tax-value",
                        currency: e,
                        value: k,
                      }
                    ),
                  })
                ),
            });
          },
          rc = ({ selectedShippingRates: e }) =>
            (0, c.createElement)(
              "div",
              {
                className:
                  "wc-block-components-totals-item__description wc-block-components-totals-shipping__via",
              },
              (0, Pe.decodeEntities)(
                e.filter((t, o) => e.indexOf(t) === o).join(", ")
              )
            );
        o(313);
        const nc = ({
            address: e,
            onUpdate: t,
            onCancel: o,
            addressFields: r,
          }) => {
            const [n, s] = (0, p.useState)(e),
              { showAllValidationErrors: a } = (0, k.useDispatch)(
                oe.VALIDATION_STORE_KEY
              ),
              { hasValidationErrors: i, isCustomerDataUpdating: l } = (0,
              k.useSelect)((e) => ({
                hasValidationErrors: e(oe.VALIDATION_STORE_KEY)
                  .hasValidationErrors,
                isCustomerDataUpdating: e(
                  oe.CART_STORE_KEY
                ).isCustomerDataUpdating(),
              }));
            return (0, c.createElement)(
              "form",
              { className: "wc-block-components-shipping-calculator-address" },
              (0, c.createElement)(lo, { fields: r, onChange: s, values: n }),
              (0, c.createElement)(
                Ko,
                {
                  className:
                    "wc-block-components-shipping-calculator-address__button",
                  disabled: l,
                  onClick: (c) => (
                    c.preventDefault(),
                    Je()(n, e) ? o() : (a(), i() ? void 0 : t(n))
                  ),
                  type: "submit",
                },
                (0, m.__)("Update", "woocommerce")
              )
            );
          },
          sc = ({
            onUpdate: e = () => {},
            onCancel: t = () => {},
            addressFields: o = ["country", "state", "city", "postcode"],
          }) => {
            const { shippingAddress: r } = Yt(),
              n = "wc/cart/shipping-calculator";
            return (0, c.createElement)(
              "div",
              { className: "wc-block-components-shipping-calculator" },
              (0, c.createElement)(Vt.StoreNoticesContainer, { context: n }),
              (0, c.createElement)(nc, {
                address: r,
                addressFields: o,
                onCancel: t,
                onUpdate: (t) => {
                  (0, k.dispatch)(oe.CART_STORE_KEY)
                    .updateCustomerData({ shipping_address: t }, !1)
                    .then(() => {
                      ((e) => {
                        const { removeNotice: t } = (0, k.dispatch)(
                            "core/notices"
                          ),
                          { getNotices: o } = (0, k.select)("core/notices");
                        o(e).forEach((o) => {
                          t(o.id, e);
                        });
                      })(n),
                        e(t);
                    })
                    .catch((e) => {
                      (0, oe.processErrorResponse)(e, n);
                    });
                },
              })
            );
          },
          ac = ({
            label: e = (0, m.__)("Calculate", "woocommerce"),
            isShippingCalculatorOpen: t,
            setIsShippingCalculatorOpen: o,
          }) =>
            (0, c.createElement)(
              "a",
              {
                role: "button",
                href: "#wc-block-components-shipping-calculator-address__link",
                className:
                  "wc-block-components-totals-shipping__change-address__link",
                id: "wc-block-components-totals-shipping__change-address__link",
                onClick: (e) => {
                  e.preventDefault(), o(!t);
                },
                "aria-label": e,
                "aria-expanded": t,
              },
              e
            ),
          ic = ({
            showCalculator: e,
            isShippingCalculatorOpen: t,
            setIsShippingCalculatorOpen: o,
            isCheckout: r = !1,
          }) =>
            e
              ? (0, c.createElement)(ac, {
                  label: (0, m.__)(
                    "Add an address for shipping options",
                    "woocommerce"
                  ),
                  isShippingCalculatorOpen: t,
                  setIsShippingCalculatorOpen: o,
                })
              : (0, c.createElement)(
                  "em",
                  null,
                  r
                    ? (0, m.__)("No shipping options available", "woocommerce")
                    : (0, m.__)("Calculated during checkout", "woocommerce")
                ),
          lc = () => {
            const { pickupAddress: e } = (0, k.useSelect)((e) => {
              const t = e("wc/store/cart")
                .getShippingRates()
                .flatMap((e) => e.shipping_rates)
                .find((e) => e.selected && ze(e));
              if (
                (0, be.isObject)(t) &&
                (0, be.objectHasProp)(t, "meta_data")
              ) {
                const e = t.meta_data.find((e) => "pickup_address" === e.key);
                if (
                  (0, be.isObject)(e) &&
                  (0, be.objectHasProp)(e, "value") &&
                  e.value
                )
                  return { pickupAddress: e.value };
              }
              return (0, be.isObject)(t), { pickupAddress: void 0 };
            });
            return void 0 === e
              ? null
              : (0, c.createElement)(
                  "span",
                  { className: "wc-block-components-shipping-address" },
                  (0, m.sprintf)(
                    /* translators: %s: shipping method name, e.g. "Amazon Locker" */ /* translators: %s: shipping method name, e.g. "Amazon Locker" */
                    (0, m.__)("Collection from %s", "woocommerce"),
                    e
                  ) + " "
                );
          },
          mc = ({ formattedLocation: e }) =>
            e
              ? (0, c.createElement)(
                  "span",
                  { className: "wc-block-components-shipping-address" },
                  (0, m.sprintf)(
                    /* translators: %s location. */ /* translators: %s location. */
                    (0, m.__)("Shipping to %s", "woocommerce"),
                    e
                  ) + " "
                )
              : null,
          dc = ({
            showCalculator: e,
            isShippingCalculatorOpen: t,
            setIsShippingCalculatorOpen: o,
            shippingAddress: r,
          }) => {
            const { isEditor: n } = w(),
              s = (0, k.useSelect)((e) =>
                e(oe.CHECKOUT_STORE_KEY).prefersCollection()
              ),
              a = (0, v.getSetting)("activeShippingZones"),
              i =
                a.length > 1 &&
                a.some(
                  (e) =>
                    "Everywhere" === e.description ||
                    "Locations outside all other zones" === e.description
                ),
              l = !!Oe(r);
            if (!l && !n && !i) return null;
            const d = l
                ? (0, m.__)("Change address", "woocommerce")
                : (0, m.__)(
                    "Calculate shipping for your location",
                    "woocommerce"
                  ),
              p = Oe(r);
            return (0, c.createElement)(
              c.Fragment,
              null,
              s
                ? (0, c.createElement)(lc, null)
                : (0, c.createElement)(mc, { formattedLocation: p }),
              e &&
                (0, c.createElement)(ac, {
                  label: d,
                  isShippingCalculatorOpen: t,
                  setIsShippingCalculatorOpen: o,
                })
            );
          };
        var pc = o(9140),
          uc = (o(946), o(202)),
          hc = o(2720),
          _c = o(4824);
        const gc = (e) => {
            switch (e) {
              case "success":
              case "warning":
              case "info":
              case "default":
                return "polite";
              default:
                return "assertive";
            }
          },
          kc = (e) => {
            switch (e) {
              case "success":
                return uc.Z;
              case "warning":
              case "info":
              case "error":
                return hc.Z;
              default:
                return _c.Z;
            }
          };
        var Ec = o(5158);
        const wc = ({
          className: e,
          status: t = "default",
          children: o,
          spokenMessage: r = o,
          onRemove: s = () => {},
          isDismissible: a = !0,
          politeness: l = gc(t),
          summary: d,
        }) => (
          ((e, t) => {
            const o = "string" == typeof e ? e : (0, p.renderToString)(e);
            (0, p.useEffect)(() => {
              o && (0, Ec.speak)(o, t);
            }, [o, t]);
          })(r, l),
          (0, c.createElement)(
            "div",
            {
              className: n()(
                e,
                "wc-block-components-notice-banner",
                "is-" + t,
                { "is-dismissible": a }
              ),
            },
            (0, c.createElement)(i.Z, { icon: kc(t) }),
            (0, c.createElement)(
              "div",
              { className: "wc-block-components-notice-banner__content" },
              d &&
                (0, c.createElement)(
                  "p",
                  { className: "wc-block-components-notice-banner__summary" },
                  d
                ),
              o
            ),
            !!a &&
              (0, c.createElement)(Ko, {
                className: "wc-block-components-notice-banner__dismiss",
                icon: pc.Z,
                label: (0, m.__)("Dismiss this notice", "woocommerce"),
                onClick: (e) => {
                  "function" ==
                    typeof (null == e ? void 0 : e.preventDefault) &&
                    e.preventDefault &&
                    e.preventDefault(),
                    s();
                },
                showTooltip: !1,
              })
          )
        );
        var bc = o(3561),
          yc = o.n(bc);
        const vc = ["a", "b", "em", "i", "strong", "p", "br"],
          fc = ["target", "href", "rel", "name", "download"],
          Cc = (e, t) => {
            const o = (null == t ? void 0 : t.tags) || vc,
              c = (null == t ? void 0 : t.attr) || fc;
            return yc().sanitize(e, { ALLOWED_TAGS: o, ALLOWED_ATTR: c });
          },
          Sc = (e) => {
            const t = (0, v.getSetting)("displayCartPricesIncludingTax", !1)
              ? parseInt(e.price, 10) + parseInt(e.taxes, 10)
              : parseInt(e.price, 10);
            let o = (0, c.createElement)(
              c.Fragment,
              null,
              Number.isFinite(t) &&
                (0, c.createElement)(Vt.FormattedMonetaryAmount, {
                  currency: (0, oc.getCurrencyFromPriceResponse)(e),
                  value: t,
                }),
              Number.isFinite(t) && e.delivery_time ? " — " : null,
              (0, Pe.decodeEntities)(e.delivery_time)
            );
            return (
              0 === t &&
                (o = (0, c.createElement)(
                  "span",
                  {
                    className:
                      "wc-block-components-shipping-rates-control__package__description--free",
                  },
                  (0, m.__)("Free", "woocommerce")
                )),
              {
                label: (0, Pe.decodeEntities)(e.name),
                value: e.rate_id,
                description: o,
              }
            );
          },
          Pc = ({
            className: e = "",
            noResultsMessage: t,
            onSelectRate: o,
            rates: r,
            renderOption: n = Sc,
            selectedRate: s,
            disabled: a = !1,
            highlightChecked: i = !1,
          }) => {
            const l = (null == s ? void 0 : s.rate_id) || "",
              m = dt(l),
              [d, u] = (0, p.useState)(() => {
                var e;
                return (
                  l ||
                  (null === (e = r[0]) || void 0 === e ? void 0 : e.rate_id)
                );
              });
            return (
              (0, p.useEffect)(() => {
                l && l !== m && l !== d && u(l);
              }, [l, d, m]),
              (0, p.useEffect)(() => {
                d && o(d);
              }, [o, d]),
              0 === r.length
                ? t
                : (0, c.createElement)(Vt.RadioControl, {
                    className: e,
                    onChange: (e) => {
                      u(e), o(e);
                    },
                    highlightChecked: i,
                    disabled: a,
                    selected: d,
                    options: r.map(n),
                  })
            );
          };
        o(7099);
        const Nc = ({
            packageId: e,
            className: t = "",
            noResultsMessage: o,
            renderOption: r,
            packageData: s,
            collapsible: a,
            showItems: i,
            highlightChecked: l = !1,
          }) => {
            var d;
            const { selectShippingRate: u, isSelectingRate: h } = rt(),
              _ =
                (0, k.useSelect)((e) => {
                  var t, o, c;
                  return null === (t = e(oe.CART_STORE_KEY)) ||
                    void 0 === t ||
                    null === (o = t.getCartData()) ||
                    void 0 === o ||
                    null === (c = o.shippingRates) ||
                    void 0 === c
                    ? void 0
                    : c.length;
                }) > 1 ||
                document.querySelectorAll(
                  ".wc-block-components-shipping-rates-control__package"
                ).length > 1,
              g = null != i ? i : _,
              E = null != a ? a : _,
              w = (0, c.createElement)(
                c.Fragment,
                null,
                (E || g) &&
                  (0, c.createElement)("div", {
                    className:
                      "wc-block-components-shipping-rates-control__package-title",
                    dangerouslySetInnerHTML: { __html: Cc(s.name) },
                  }),
                g &&
                  (0, c.createElement)(
                    "ul",
                    {
                      className:
                        "wc-block-components-shipping-rates-control__package-items",
                    },
                    Object.values(s.items).map((e) => {
                      const t = (0, Pe.decodeEntities)(e.name),
                        o = e.quantity;
                      return (0, c.createElement)(
                        "li",
                        {
                          key: e.key,
                          className:
                            "wc-block-components-shipping-rates-control__package-item",
                        },
                        (0, c.createElement)(Vt.Label, {
                          label: o > 1 ? `${t} × ${o}` : `${t}`,
                          screenReaderLabel: (0, m.sprintf)(
                            /* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */ /* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */
                            (0, m._n)(
                              "%1$s (%2$d unit)",
                              "%1$s (%2$d units)",
                              o,
                              "woocommerce"
                            ),
                            t,
                            o
                          ),
                        })
                      );
                    })
                  )
              ),
              b = (0, p.useCallback)(
                (t) => {
                  u(t, e);
                },
                [e, u]
              ),
              y = {
                className: t,
                noResultsMessage: o,
                rates: s.shipping_rates,
                onSelectRate: b,
                selectedRate: s.shipping_rates.find((e) => e.selected),
                renderOption: r,
                disabled: h,
                highlightChecked: l,
              },
              v = (0, p.useMemo)(() => {
                var e;
                return null == s ||
                  null === (e = s.shipping_rates) ||
                  void 0 === e
                  ? void 0
                  : e.findIndex((e) => (null == e ? void 0 : e.selected));
              }, [null == s ? void 0 : s.shipping_rates]);
            return E
              ? (0, c.createElement)(
                  Vt.Panel,
                  {
                    className: n()(
                      "wc-block-components-shipping-rates-control__package",
                      t,
                      {
                        "wc-block-components-shipping-rates-control__package--disabled":
                          h,
                      }
                    ),
                    initialOpen: !1,
                    title: w,
                  },
                  (0, c.createElement)(Pc, { ...y })
                )
              : (0, c.createElement)(
                  "div",
                  {
                    className: n()(
                      "wc-block-components-shipping-rates-control__package",
                      t,
                      {
                        "wc-block-components-shipping-rates-control__package--disabled":
                          h,
                        "wc-block-components-shipping-rates-control__package--first-selected":
                          !h && 0 === v,
                        "wc-block-components-shipping-rates-control__package--last-selected":
                          !h &&
                          v ===
                            (null == s ||
                            null === (d = s.shipping_rates) ||
                            void 0 === d
                              ? void 0
                              : d.length) -
                              1,
                      }
                    ),
                  },
                  w,
                  (0, c.createElement)(Pc, { ...y })
                );
          },
          Tc = ({
            packages: e,
            showItems: t,
            collapsible: o,
            noResultsMessage: r,
            renderOption: n,
            context: s = "",
          }) =>
            e.length
              ? (0, c.createElement)(
                  c.Fragment,
                  null,
                  e.map(({ package_id: e, ...a }) =>
                    (0, c.createElement)(Nc, {
                      highlightChecked: "woocommerce/cart" !== s,
                      key: e,
                      packageId: e,
                      packageData: a,
                      collapsible: o,
                      showItems: t,
                      noResultsMessage: r,
                      renderOption: n,
                    })
                  )
                )
              : null,
          Rc = ({
            shippingRates: e,
            isLoadingRates: t,
            className: o,
            collapsible: r,
            showItems: n,
            noResultsMessage: s,
            renderOption: a,
            context: i,
          }) => {
            (0, p.useEffect)(() => {
              var o, c;
              t ||
                ((o = qe(e)),
                (c = ((e) =>
                  e.reduce(function (e, t) {
                    return e + t.shipping_rates.length;
                  }, 0))(e)),
                1 === o
                  ? (0, Ec.speak)(
                      (0, m.sprintf)(
                        /* translators: %d number of shipping options found. */ /* translators: %d number of shipping options found. */
                        (0, m._n)(
                          "%d shipping option was found.",
                          "%d shipping options were found.",
                          c,
                          "woocommerce"
                        ),
                        c
                      )
                    )
                  : (0, Ec.speak)(
                      (0, m.sprintf)(
                        /* translators: %d number of shipping packages packages. */ /* translators: %d number of shipping packages packages. */
                        (0, m._n)(
                          "Shipping option searched for %d package.",
                          "Shipping options searched for %d packages.",
                          o,
                          "woocommerce"
                        ),
                        o
                      ) +
                        " " +
                        (0, m.sprintf)(
                          /* translators: %d number of shipping options available. */ /* translators: %d number of shipping options available. */
                          (0, m._n)(
                            "%d shipping option was found",
                            "%d shipping options were found",
                            c,
                            "woocommerce"
                          ),
                          c
                        )
                    ));
            }, [t, e]);
            const { extensions: l, receiveCart: d, ...u } = He(),
              h = {
                className: o,
                collapsible: r,
                showItems: n,
                noResultsMessage: s,
                renderOption: a,
                extensions: l,
                cart: u,
                components: { ShippingRatesControlPackage: Nc },
                context: i,
              },
              { isEditor: _ } = w(),
              { hasSelectedLocalPickup: g, selectedRates: k } = rt(),
              E = (0, be.isObject)(k) ? Object.values(k) : [],
              b = E.every((e) => e === E[0]);
            return (0, c.createElement)(
              Jo,
              {
                isLoading: t,
                screenReaderLabel: (0, m.__)(
                  "Loading shipping rates…",
                  "woocommerce"
                ),
                showSpinner: !0,
              },
              g &&
                "woocommerce/cart" === i &&
                e.length > 1 &&
                !b &&
                !_ &&
                (0, c.createElement)(
                  wc,
                  {
                    className: "wc-block-components-notice",
                    isDismissible: !1,
                    status: "warning",
                  },
                  (0, m.__)(
                    "Multiple shipments must have the same pickup location",
                    "woocommerce"
                  )
                ),
              (0, c.createElement)(Tt.ExperimentalOrderShippingPackages.Slot, {
                ...h,
              }),
              (0, c.createElement)(
                Tt.ExperimentalOrderShippingPackages,
                null,
                (0, c.createElement)(Tc, {
                  packages: e,
                  noResultsMessage: s,
                  renderOption: a,
                })
              )
            );
          },
          Ac = ({
            hasRates: e,
            shippingRates: t,
            isLoadingRates: o,
            isAddressComplete: r,
          }) => {
            const n = e
              ? (0, m.__)("Shipping options", "woocommerce")
              : (0, m.__)("Choose a shipping option", "woocommerce");
            return (0, c.createElement)(
              "fieldset",
              { className: "wc-block-components-totals-shipping__fieldset" },
              (0, c.createElement)(
                "legend",
                { className: "screen-reader-text" },
                n
              ),
              (0, c.createElement)(Rc, {
                className: "wc-block-components-totals-shipping__options",
                noResultsMessage: (0, c.createElement)(
                  c.Fragment,
                  null,
                  r &&
                    (0, c.createElement)(
                      wc,
                      {
                        isDismissible: !1,
                        className:
                          "wc-block-components-shipping-rates-control__no-results-notice",
                        status: "warning",
                      },
                      (0, m.__)(
                        "There are no shipping options available. Please check your shipping address.",
                        "woocommerce"
                      )
                    )
                ),
                shippingRates: t,
                isLoadingRates: o,
                context: "woocommerce/cart",
              })
            );
          };
        o(6968);
        const xc = ({
            currency: e,
            values: t,
            showCalculator: o = !0,
            showRateSelector: r = !0,
            isCheckout: s = !1,
            className: a,
          }) => {
            const [i, l] = (0, p.useState)(!1),
              {
                shippingAddress: d,
                cartHasCalculatedShipping: u,
                shippingRates: h,
                isLoadingRates: _,
              } = He(),
              g = ((e) =>
                (0, v.getSetting)("displayCartPricesIncludingTax", !1)
                  ? parseInt(e.total_shipping, 10) +
                    parseInt(e.total_shipping_tax, 10)
                  : parseInt(e.total_shipping, 10))(t),
              E = h.some((e) => e.shipping_rates.length) || g > 0,
              w = o && i,
              b = (0, k.useSelect)((e) =>
                e(oe.CHECKOUT_STORE_KEY).prefersCollection()
              ),
              y = h.flatMap((e) =>
                e.shipping_rates
                  .filter(
                    (e) => (b && ze(e) && e.selected) || (!b && e.selected)
                  )
                  .flatMap((e) => e.name)
              ),
              f = Me(d),
              C = ((e, t, o) =>
                !e ||
                (!t &&
                  o.some(
                    (e) => !e.shipping_rates.some((e) => !We(e.method_id))
                  )))(E, b, h);
            return (0, c.createElement)(
              "div",
              { className: n()("wc-block-components-totals-shipping", a) },
              (0, c.createElement)(Vt.TotalsItem, {
                label: (0, m.__)("Shipping", "woocommerce"),
                value:
                  !C && u
                    ? g
                    : (!f || s) &&
                      (0, c.createElement)(ic, {
                        showCalculator: o,
                        isCheckout: s,
                        isShippingCalculatorOpen: i,
                        setIsShippingCalculatorOpen: l,
                      }),
                description:
                  (!C && u) || (f && !s)
                    ? (0, c.createElement)(
                        c.Fragment,
                        null,
                        (0, c.createElement)(rc, { selectedShippingRates: y }),
                        (0, c.createElement)(dc, {
                          shippingAddress: d,
                          showCalculator: o,
                          isShippingCalculatorOpen: i,
                          setIsShippingCalculatorOpen: l,
                        })
                      )
                    : null,
                currency: e,
              }),
              w &&
                (0, c.createElement)(sc, {
                  onUpdate: () => {
                    l(!1);
                  },
                  onCancel: () => {
                    l(!1);
                  },
                }),
              r &&
                u &&
                !w &&
                (0, c.createElement)(Ac, {
                  hasRates: E,
                  shippingRates: h,
                  isLoadingRates: _,
                  isAddressComplete: f,
                })
            );
          },
          Ic = () => {
            const { extensions: e, receiveCart: t, ...o } = He(),
              r = { extensions: e, cart: o, context: "woocommerce/checkout" };
            return (0, c.createElement)(Tt.ExperimentalOrderMeta.Slot, {
              ...r,
            });
          },
          Oc = JSON.parse(
            '{"be":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"Y4":{"lock":{"type":"object","default":{"remove":true}}}}'
          ),
          Mc = [
            {
              attributes: Oc.Y4,
              save: () =>
                (0, c.createElement)(
                  "div",
                  { ...d.useBlockProps.save() },
                  (0, c.createElement)(d.InnerBlocks.Content, null)
                ),
              supports: Oc.be,
              migrate: ({ attributes: e }) => [
                e,
                [
                  (0, l.createBlock)(
                    "woocommerce/checkout-order-summary-cart-items-block",
                    {},
                    []
                  ),
                  (0, l.createBlock)(
                    "woocommerce/checkout-order-summary-coupon-form-block",
                    {},
                    []
                  ),
                  (0, l.createBlock)(
                    "woocommerce/checkout-order-summary-totals-block",
                    {},
                    [
                      (0, l.createBlock)(
                        "woocommerce/checkout-order-summary-subtotal-block",
                        {},
                        []
                      ),
                      (0, l.createBlock)(
                        "woocommerce/checkout-order-summary-fee-block",
                        {},
                        []
                      ),
                      (0, l.createBlock)(
                        "woocommerce/checkout-order-summary-discount-block",
                        {},
                        []
                      ),
                      (0, l.createBlock)(
                        "woocommerce/checkout-order-summary-shipping-block",
                        {},
                        []
                      ),
                      (0, l.createBlock)(
                        "woocommerce/checkout-order-summary-taxes-block",
                        {},
                        []
                      ),
                    ]
                  ),
                ],
              ],
              isEligible: (e, t) =>
                !t.some(
                  (e) =>
                    "woocommerce/checkout-order-summary-totals-block" === e.name
                ),
            },
          ],
          Bc = Mc;
        (0, l.registerBlockType)("woocommerce/checkout-order-summary-block", {
          icon: {
            src: (0, c.createElement)(i.Z, {
              icon: Xo,
              className: "wc-block-editor-components-block-icon",
            }),
          },
          attributes: {
            className: { type: "string", default: "" },
            lock: { type: "object", default: { move: !0, remove: !0 } },
          },
          edit: ({ clientId: e }) => {
            const t = (0, d.useBlockProps)(),
              { cartTotals: o } = He(),
              r = (0, oc.getCurrencyFromPriceResponse)(o),
              n = Dt(Tt.innerBlockAreas.CHECKOUT_ORDER_SUMMARY),
              s = [
                ["woocommerce/checkout-order-summary-cart-items-block", {}, []],
                [
                  "woocommerce/checkout-order-summary-coupon-form-block",
                  {},
                  [],
                ],
                ["woocommerce/checkout-order-summary-totals-block", {}, []],
              ];
            return (
              Ft({ clientId: e, registeredBlocks: n, defaultTemplate: s }),
              (0, c.createElement)(
                "div",
                { ...t },
                (0, c.createElement)(d.InnerBlocks, {
                  allowedBlocks: n,
                  template: s,
                }),
                (0, c.createElement)(
                  "div",
                  { className: "wc-block-components-totals-wrapper" },
                  (0, c.createElement)(cc, { currency: r, values: o })
                ),
                (0, c.createElement)(Ic, null)
              )
            );
          },
          save: () =>
            (0, c.createElement)(
              "div",
              { ...d.useBlockProps.save() },
              (0, c.createElement)(d.InnerBlocks.Content, null)
            ),
          deprecated: Bc,
        });
        var Dc = o(3326),
          Fc = o(5656);
        const Lc = {
            warning: "#F0B849",
            error: "#CC1818",
            success: "#46B450",
            info: "#0073AA",
          },
          Uc = ({ status: e = "warning", ...t }) =>
            (0, c.createElement)(
              s.SVG,
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                ...t,
              },
              (0, c.createElement)("path", {
                d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z",
                stroke: Lc[e],
                strokeWidth: "1.5",
              }),
              (0, c.createElement)("path", {
                d: "M13 7H11V13H13V7Z",
                fill: Lc[e],
              }),
              (0, c.createElement)("path", {
                d: "M13 15H11V17H13V15Z",
                fill: Lc[e],
              })
            );
        o(6950);
        const Yc = ({ href: e, title: t, description: o, warning: r }) =>
            (0, c.createElement)(
              "a",
              {
                href: e,
                className: "wc-block-editor-components-external-link-card",
                target: "_blank",
                rel: "noreferrer",
              },
              (0, c.createElement)(
                "span",
                {
                  className:
                    "wc-block-editor-components-external-link-card__content",
                },
                (0, c.createElement)(
                  "strong",
                  {
                    className:
                      "wc-block-editor-components-external-link-card__title",
                  },
                  t
                ),
                o &&
                  (0, c.createElement)("span", {
                    className:
                      "wc-block-editor-components-external-link-card__description",
                    dangerouslySetInnerHTML: { __html: Cc(o) },
                  }),
                r
                  ? (0, c.createElement)(
                      "span",
                      {
                        className:
                          "wc-block-editor-components-external-link-card__warning",
                      },
                      (0, c.createElement)(i.Z, {
                        icon: (0, c.createElement)(Uc, { status: "error" }),
                      }),
                      (0, c.createElement)("span", null, r)
                    )
                  : null
              ),
              (0, c.createElement)(
                Nt.VisuallyHidden,
                {
                  as: "span",
                } /* translators: accessibility text */ /* translators: accessibility text */,
                (0, m.__)("(opens in a new tab)", "woocommerce")
              ),
              (0, c.createElement)(i.Z, {
                icon: Fc.Z,
                className:
                  "wc-block-editor-components-external-link-card__icon",
              })
            ),
          jc = window.wp.autop,
          Vc = (e) => e.replace(/<\/?[a-z][^>]*?>/gi, ""),
          Kc = (e, t) => e.replace(/[\s|\.\,]+$/i, "") + t,
          $c = (e, t, o = "&hellip;", c = !0) => {
            const r = Vc(e),
              n = r.split(" ").splice(0, t).join(" ");
            return n === r
              ? c
                ? (0, jc.autop)(r)
                : r
              : c
              ? (0, jc.autop)(Kc(n, o))
              : Kc(n, o);
          },
          Hc = (e, t, o = !0, c = "&hellip;", r = !0) => {
            const n = Vc(e),
              s = n.slice(0, t);
            if (s === n) return r ? (0, jc.autop)(n) : n;
            if (o) return (0, jc.autop)(Kc(s, c));
            const a = s.match(/([\s]+)/g),
              i = a ? a.length : 0,
              l = n.slice(0, t + i);
            return r ? (0, jc.autop)(Kc(l, c)) : Kc(l, c);
          };
        o(7277);
        const qc = () =>
            (0, c.createElement)(
              wc,
              {
                isDismissible: !1,
                className: "wc-block-checkout__no-payment-methods-notice",
                status: "error",
              },
              (0, m.__)(
                "There are no payment methods available. This may be an error on our side. Please contact us if you need any help placing your order.",
                "woocommerce"
              )
            ),
          Zc = (0, c.createElement)(
            s.SVG,
            { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
            (0, c.createElement)(
              "g",
              { fill: "none", fillRule: "evenodd" },
              (0, c.createElement)("path", { d: "M0 0h24v24H0z" }),
              (0, c.createElement)("path", {
                fill: "#000",
                fillRule: "nonzero",
                d: "M17.3 8v1c1 .2 1.4.9 1.4 1.7h-1c0-.6-.3-1-1-1-.8 0-1.3.4-1.3.9 0 .4.3.6 1.4 1 1 .2 2 .6 2 1.9 0 .9-.6 1.4-1.5 1.5v1H16v-1c-.9-.1-1.6-.7-1.7-1.7h1c0 .6.4 1 1.3 1 1 0 1.2-.5 1.2-.8 0-.4-.2-.8-1.3-1.1-1.3-.3-2.1-.8-2.1-1.8 0-.9.7-1.5 1.6-1.6V8h1.3zM12 10v1H6v-1h6zm2-2v1H6V8h8zM2 4v16h20V4H2zm2 14V6h16v12H4z",
              }),
              (0, c.createElement)("path", {
                stroke: "#000",
                strokeLinecap: "round",
                d: "M6 16c2.6 0 3.9-3 1.7-3-2 0-1 3 1.5 3 1 0 1-.8 2.8-.8",
              })
            )
          );
        var zc = o(214),
          Wc = o(1231);
        o(3169);
        const Gc = { bank: zc.Z, bill: Wc.Z, card: Dc.Z, checkPayment: Zc },
          Xc = ({ icon: e = "", text: t = "" }) => {
            const o = !!e,
              r = (0, p.useCallback)(
                (e) => o && (0, be.isString)(e) && (0, be.objectHasProp)(Gc, e),
                [o]
              ),
              s = n()("wc-block-components-payment-method-label", {
                "wc-block-components-payment-method-label--with-icon": o,
              });
            return (0, c.createElement)(
              "span",
              { className: s },
              r(e) ? (0, c.createElement)(i.Z, { icon: Gc[e] }) : e,
              t
            );
          },
          Jc = (e) =>
            `wc-block-components-payment-method-icon wc-block-components-payment-method-icon--${e}`,
          Qc = ({ id: e, src: t = null, alt: o = "" }) =>
            t
              ? (0, c.createElement)("img", {
                  className: Jc(e),
                  src: t,
                  alt: o,
                })
              : null,
          er = [
            {
              id: "alipay",
              alt: "Alipay",
              src: B + "payment-methods/alipay.svg",
            },
            {
              id: "amex",
              alt: "American Express",
              src: B + "payment-methods/amex.svg",
            },
            {
              id: "bancontact",
              alt: "Bancontact",
              src: B + "payment-methods/bancontact.svg",
            },
            {
              id: "diners",
              alt: "Diners Club",
              src: B + "payment-methods/diners.svg",
            },
            {
              id: "discover",
              alt: "Discover",
              src: B + "payment-methods/discover.svg",
            },
            { id: "eps", alt: "EPS", src: B + "payment-methods/eps.svg" },
            {
              id: "giropay",
              alt: "Giropay",
              src: B + "payment-methods/giropay.svg",
            },
            { id: "ideal", alt: "iDeal", src: B + "payment-methods/ideal.svg" },
            { id: "jcb", alt: "JCB", src: B + "payment-methods/jcb.svg" },
            { id: "laser", alt: "Laser", src: B + "payment-methods/laser.svg" },
            {
              id: "maestro",
              alt: "Maestro",
              src: B + "payment-methods/maestro.svg",
            },
            {
              id: "mastercard",
              alt: "Mastercard",
              src: B + "payment-methods/mastercard.svg",
            },
            {
              id: "multibanco",
              alt: "Multibanco",
              src: B + "payment-methods/multibanco.svg",
            },
            {
              id: "p24",
              alt: "Przelewy24",
              src: B + "payment-methods/p24.svg",
            },
            { id: "sepa", alt: "Sepa", src: B + "payment-methods/sepa.svg" },
            {
              id: "sofort",
              alt: "Sofort",
              src: B + "payment-methods/sofort.svg",
            },
            {
              id: "unionpay",
              alt: "Union Pay",
              src: B + "payment-methods/unionpay.svg",
            },
            { id: "visa", alt: "Visa", src: B + "payment-methods/visa.svg" },
            {
              id: "wechat",
              alt: "WeChat",
              src: B + "payment-methods/wechat.svg",
            },
          ];
        o(6391);
        const tr = ({ icons: e = [], align: t = "center", className: o }) => {
            const r = ((e) => {
              const t = {};
              return (
                e.forEach((e) => {
                  let o = {};
                  "string" == typeof e && (o = { id: e, alt: e, src: null }),
                    "object" == typeof e &&
                      (o = {
                        id: e.id || "",
                        alt: e.alt || "",
                        src: e.src || null,
                      }),
                    o.id && (0, be.isString)(o.id) && !t[o.id] && (t[o.id] = o);
                }),
                Object.values(t)
              );
            })(e);
            if (0 === r.length) return null;
            const s = n()(
              "wc-block-components-payment-method-icons",
              {
                "wc-block-components-payment-method-icons--align-left":
                  "left" === t,
                "wc-block-components-payment-method-icons--align-right":
                  "right" === t,
              },
              o
            );
            return (0, c.createElement)(
              "div",
              { className: s },
              r.map((e) => {
                const t = {
                  ...e,
                  ...((o = e.id), er.find((e) => e.id === o) || {}),
                };
                var o;
                return (0, c.createElement)(Qc, {
                  key: "payment-method-icon-" + e.id,
                  ...t,
                });
              })
            );
          },
          or = (e = "") => {
            const { cartCoupons: t, cartIsLoading: o } = He(),
              { createErrorNotice: c } = (0, k.useDispatch)("core/notices"),
              { createNotice: r } = (0, k.useDispatch)("core/notices"),
              { setValidationErrors: n } = (0, k.useDispatch)(
                oe.VALIDATION_STORE_KEY
              ),
              { isApplyingCoupon: s, isRemovingCoupon: a } = (0, k.useSelect)(
                (e) => {
                  const t = e(oe.CART_STORE_KEY);
                  return {
                    isApplyingCoupon: t.isApplyingCoupon(),
                    isRemovingCoupon: t.isRemovingCoupon(),
                  };
                },
                [c, r]
              ),
              { applyCoupon: i, removeCoupon: l } = (0, k.useDispatch)(
                oe.CART_STORE_KEY
              ),
              d = (0, k.useSelect)((e) =>
                e(oe.CHECKOUT_STORE_KEY).getOrderId()
              );
            return {
              appliedCoupons: t,
              isLoading: o,
              applyCoupon: (t) =>
                i(t)
                  .then(
                    () => (
                      (0, Tt.applyCheckoutFilter)({
                        filterName: "showApplyCouponNotice",
                        defaultValue: !0,
                        arg: { couponCode: t, context: e },
                      }) &&
                        r(
                          "info",
                          (0, m.sprintf)(
                            /* translators: %s coupon code. */ /* translators: %s coupon code. */
                            (0, m.__)(
                              'Coupon code "%s" has been applied to your cart.',
                              "woocommerce"
                            ),
                            t
                          ),
                          { id: "coupon-form", type: "snackbar", context: e }
                        ),
                      Promise.resolve(!0)
                    )
                  )
                  .catch((e) => {
                    const t = ((e) => {
                      var t, o, c, r;
                      return d &&
                        d > 0 &&
                        null != e &&
                        null !== (t = e.data) &&
                        void 0 !== t &&
                        null !== (o = t.details) &&
                        void 0 !== o &&
                        o.checkout
                        ? e.data.details.checkout
                        : null != e &&
                          null !== (c = e.data) &&
                          void 0 !== c &&
                          null !== (r = c.details) &&
                          void 0 !== r &&
                          r.cart
                        ? e.data.details.cart
                        : e.message;
                    })(e);
                    return (
                      n({
                        coupon: {
                          message: (0, Pe.decodeEntities)(t),
                          hidden: !1,
                        },
                      }),
                      Promise.resolve(!1)
                    );
                  }),
              removeCoupon: (t) =>
                l(t)
                  .then(
                    () => (
                      (0, Tt.applyCheckoutFilter)({
                        filterName: "showRemoveCouponNotice",
                        defaultValue: !0,
                        arg: { couponCode: t, context: e },
                      }) &&
                        r(
                          "info",
                          (0, m.sprintf)(
                            /* translators: %s coupon code. */ /* translators: %s coupon code. */
                            (0, m.__)(
                              'Coupon code "%s" has been removed from your cart.',
                              "woocommerce"
                            ),
                            t
                          ),
                          { id: "coupon-form", type: "snackbar", context: e }
                        ),
                      Promise.resolve(!0)
                    )
                  )
                  .catch(
                    (t) => (
                      c(t.message, { id: "coupon-form", context: e }),
                      Promise.resolve(!1)
                    )
                  ),
              isApplyingCoupon: s,
              isRemovingCoupon: a,
            };
          },
          cr = (e, t) => {
            const o = [],
              c = (t, o) => {
                const c = o + "_tax",
                  r =
                    (0, be.objectHasProp)(e, o) && (0, be.isString)(e[o])
                      ? parseInt(e[o], 10)
                      : 0;
                return {
                  key: o,
                  label: t,
                  value: r,
                  valueWithTax:
                    r +
                    ((0, be.objectHasProp)(e, c) && (0, be.isString)(e[c])
                      ? parseInt(e[c], 10)
                      : 0),
                };
              };
            return (
              o.push(c((0, m.__)("Subtotal:", "woocommerce"), "total_items")),
              o.push(c((0, m.__)("Fees:", "woocommerce"), "total_fees")),
              o.push(
                c((0, m.__)("Discount:", "woocommerce"), "total_discount")
              ),
              o.push({
                key: "total_tax",
                label: (0, m.__)("Taxes:", "woocommerce"),
                value: parseInt(e.total_tax, 10),
                valueWithTax: parseInt(e.total_tax, 10),
              }),
              t &&
                o.push(
                  c((0, m.__)("Shipping:", "woocommerce"), "total_shipping")
                ),
              o
            );
          },
          rr = () => {
            const {
                onCheckoutBeforeProcessing: e,
                onCheckoutValidationBeforeProcessing: t,
                onCheckoutAfterProcessingWithSuccess: o,
                onCheckoutAfterProcessingWithError: c,
                onSubmit: r,
                onCheckoutSuccess: n,
                onCheckoutFail: s,
                onCheckoutValidation: a,
              } = kt(),
              {
                isCalculating: i,
                isComplete: l,
                isIdle: d,
                isProcessing: u,
                customerId: h,
              } = (0, k.useSelect)((e) => {
                const t = e(oe.CHECKOUT_STORE_KEY);
                return {
                  isComplete: t.isComplete(),
                  isIdle: t.isIdle(),
                  isProcessing: t.isProcessing(),
                  customerId: t.getCustomerId(),
                  isCalculating: t.isCalculating(),
                };
              }),
              {
                paymentStatus: _,
                activePaymentMethod: g,
                shouldSavePayment: E,
              } = (0, k.useSelect)((e) => {
                const t = e(oe.PAYMENT_STORE_KEY);
                return {
                  paymentStatus: {
                    get isPristine() {
                      return (
                        re()("isPristine", {
                          since: "9.6.0",
                          alternative: "isIdle",
                          plugin: "WooCommerce Blocks",
                          link: "https://github.com/woocommerce/woocommerce-blocks/pull/8110",
                        }),
                        t.isPaymentIdle()
                      );
                    },
                    isIdle: t.isPaymentIdle(),
                    isStarted: t.isExpressPaymentStarted(),
                    isProcessing: t.isPaymentProcessing(),
                    get isFinished() {
                      return (
                        re()("isFinished", {
                          since: "9.6.0",
                          plugin: "WooCommerce Blocks",
                          link: "https://github.com/woocommerce/woocommerce-blocks/pull/8110",
                        }),
                        t.hasPaymentError() || t.isPaymentReady()
                      );
                    },
                    hasError: t.hasPaymentError(),
                    get hasFailed() {
                      return (
                        re()("hasFailed", {
                          since: "9.6.0",
                          plugin: "WooCommerce Blocks",
                          link: "https://github.com/woocommerce/woocommerce-blocks/pull/8110",
                        }),
                        t.hasPaymentError()
                      );
                    },
                    get isSuccessful() {
                      return (
                        re()("isSuccessful", {
                          since: "9.6.0",
                          plugin: "WooCommerce Blocks",
                          link: "https://github.com/woocommerce/woocommerce-blocks/pull/8110",
                        }),
                        t.isPaymentReady()
                      );
                    },
                    isReady: t.isPaymentReady(),
                    isDoingExpressPayment: t.isExpressPaymentMethodActive(),
                  },
                  activePaymentMethod: t.getActivePaymentMethod(),
                  shouldSavePayment: t.getShouldSavePaymentMethod(),
                };
              }),
              { __internalSetExpressPaymentError: w } = (0, k.useDispatch)(
                oe.PAYMENT_STORE_KEY
              ),
              { onPaymentProcessing: b, onPaymentSetup: y } = (0, p.useContext)(
                le
              ),
              {
                shippingErrorStatus: f,
                shippingErrorTypes: C,
                onShippingRateSuccess: S,
                onShippingRateFail: P,
                onShippingRateSelectSuccess: N,
                onShippingRateSelectFail: T,
              } = lt(),
              {
                shippingRates: R,
                isLoadingRates: A,
                selectedRates: x,
                isSelectingRate: I,
                selectShippingRate: O,
                needsShipping: M,
              } = rt(),
              { billingAddress: B, shippingAddress: D } = (0, k.useSelect)(
                (e) => e(oe.CART_STORE_KEY).getCustomerData()
              ),
              { setShippingAddress: F } = (0, k.useDispatch)(oe.CART_STORE_KEY),
              {
                cartItems: L,
                cartFees: U,
                cartTotals: Y,
                extensions: j,
              } = He(),
              { appliedCoupons: V } = or(),
              K = (0, p.useRef)(cr(Y, M)),
              $ = (0, p.useRef)({
                label: (0, m.__)("Total", "woocommerce"),
                value: parseInt(Y.total_price, 10),
              });
            (0, p.useEffect)(() => {
              (K.current = cr(Y, M)),
                ($.current = {
                  label: (0, m.__)("Total", "woocommerce"),
                  value: parseInt(Y.total_price, 10),
                });
            }, [Y, M]);
            const H = (0, p.useCallback)(
              (e = "") => {
                re()(
                  "setExpressPaymentError should only be used by Express Payment Methods (using the provided onError handler).",
                  {
                    alternative: "",
                    plugin: "woocommerce-gutenberg-products-block",
                    link: "https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/4228",
                  }
                ),
                  w(e);
              },
              [w]
            );
            return {
              activePaymentMethod: g,
              billing: {
                appliedCoupons: V,
                billingAddress: B,
                billingData: B,
                cartTotal: $.current,
                cartTotalItems: K.current,
                currency: (0, oc.getCurrencyFromPriceResponse)(Y),
                customerId: h,
                displayPricesIncludingTax: (0, v.getSetting)(
                  "displayCartPricesIncludingTax",
                  !1
                ),
              },
              cartData: { cartItems: L, cartFees: U, extensions: j },
              checkoutStatus: {
                isCalculating: i,
                isComplete: l,
                isIdle: d,
                isProcessing: u,
              },
              components: {
                LoadingMask: Jo,
                PaymentMethodIcons: tr,
                PaymentMethodLabel: Xc,
                ValidationInputError: Vt.ValidationInputError,
              },
              emitResponse: { noticeContexts: ve, responseTypes: ye },
              eventRegistration: {
                onCheckoutAfterProcessingWithError: c,
                onCheckoutAfterProcessingWithSuccess: o,
                onCheckoutBeforeProcessing: e,
                onCheckoutValidationBeforeProcessing: t,
                onCheckoutSuccess: n,
                onCheckoutFail: s,
                onCheckoutValidation: a,
                onPaymentProcessing: b,
                onPaymentSetup: y,
                onShippingRateFail: P,
                onShippingRateSelectFail: T,
                onShippingRateSelectSuccess: N,
                onShippingRateSuccess: S,
              },
              onSubmit: r,
              paymentStatus: _,
              setExpressPaymentError: H,
              shippingData: {
                isSelectingRate: I,
                needsShipping: M,
                selectedRates: x,
                setSelectedRates: O,
                setShippingAddress: F,
                shippingAddress: D,
                shippingRates: R,
                shippingRatesLoading: A,
              },
              shippingStatus: { shippingErrorStatus: f, shippingErrorTypes: C },
              shouldSavePayment: E,
            };
          };
        class nr extends p.Component {
          constructor(...e) {
            super(...e),
              (0, O.Z)(this, "state", { errorMessage: "", hasError: !1 });
          }
          static getDerivedStateFromError(e) {
            return { errorMessage: e.message, hasError: !0 };
          }
          render() {
            const { hasError: e, errorMessage: t } = this.state,
              { isEditor: o } = this.props;
            if (e) {
              let e = (0, m.__)(
                "We are experiencing difficulties with this payment method. Please contact us for assistance.",
                "woocommerce"
              );
              (o || v.CURRENT_USER_IS_ADMIN) &&
                (e =
                  t ||
                  (0, m.__)(
                    "There was an error with this payment method. Please verify it's configured correctly.",
                    "woocommerce"
                  ));
              const r = [
                { id: "0", content: e, isDismissible: !1, status: "error" },
              ];
              return (0, c.createElement)(Vt.StoreNoticesContainer, {
                additionalNotices: r,
                context: ve.PAYMENTS,
              });
            }
            return this.props.children;
          }
        }
        const sr = nr,
          ar = ({ children: e, showSaveOption: t }) => {
            const { isEditor: o } = w(),
              { shouldSavePaymentMethod: r, customerId: n } = (0, k.useSelect)(
                (e) => {
                  const t = e(oe.PAYMENT_STORE_KEY),
                    o = e(oe.CHECKOUT_STORE_KEY);
                  return {
                    shouldSavePaymentMethod: t.getShouldSavePaymentMethod(),
                    customerId: o.getCustomerId(),
                  };
                }
              ),
              { __internalSetShouldSavePaymentMethod: s } = (0, k.useDispatch)(
                oe.PAYMENT_STORE_KEY
              );
            return (0, c.createElement)(
              sr,
              { isEditor: o },
              e,
              n > 0 &&
                t &&
                (0, c.createElement)(Vt.CheckboxControl, {
                  className:
                    "wc-block-components-payment-methods__save-card-info",
                  label: (0, m.__)(
                    "Save payment information to my account for future purchases.",
                    "woocommerce"
                  ),
                  checked: r,
                  onChange: () => s(!r),
                })
            );
          },
          ir = "wc/store/payment",
          lr = () => {
            const {
                activeSavedToken: e,
                activePaymentMethod: t,
                isExpressPaymentMethodActive: o,
                savedPaymentMethods: r,
                availablePaymentMethods: s,
              } = (0, k.useSelect)((e) => {
                const t = e(ir);
                return {
                  activeSavedToken: t.getActiveSavedToken(),
                  activePaymentMethod: t.getActivePaymentMethod(),
                  isExpressPaymentMethodActive:
                    t.isExpressPaymentMethodActive(),
                  savedPaymentMethods: t.getSavedPaymentMethods(),
                  availablePaymentMethods: t.getAvailablePaymentMethods(),
                };
              }),
              { __internalSetActivePaymentMethod: a } = (0, k.useDispatch)(ir),
              i = (0, yt.getPaymentMethods)(),
              { ...l } = rr(),
              { removeNotice: m } = (0, k.useDispatch)("core/notices"),
              { dispatchCheckoutEvent: d } = ct(),
              { isEditor: u } = w(),
              h = Object.keys(s).map((e) => {
                const { edit: t, content: o, label: r, supports: n } = i[e],
                  s = u ? t : o;
                return {
                  value: e,
                  label:
                    "string" == typeof r
                      ? r
                      : (0, p.cloneElement)(r, { components: l.components }),
                  name: `wc-saved-payment-method-token-${e}`,
                  content: (0, c.createElement)(
                    ar,
                    { showSaveOption: n.showSaveOption },
                    (0, p.cloneElement)(s, {
                      __internalSetActivePaymentMethod: a,
                      ...l,
                    })
                  ),
                };
              }),
              _ = (0, p.useCallback)(
                (e) => {
                  a(e),
                    m("wc-payment-error", ve.PAYMENTS),
                    d("set-active-payment-method", { value: e });
                },
                [d, m, a]
              ),
              g = 0 === Object.keys(r).length && 1 === Object.keys(i).length,
              E = n()({ "disable-radio-control": g });
            return o
              ? null
              : (0, c.createElement)(Vt.RadioControlAccordion, {
                  highlightChecked: !0,
                  id: "wc-payment-method-options",
                  className: E,
                  selected: e ? null : t,
                  onChange: _,
                  options: h,
                });
          },
          mr = "wc/store/cart",
          dr =
            ((0, m.__)("Unable to get cart data from the API.", "woocommerce"),
            []),
          pr = [],
          ur = {},
          hr = {};
        Object.keys(v.defaultFields).forEach((e) => {
          hr[e] = "";
        }),
          delete hr.email;
        const _r = {};
        Object.keys(v.defaultFields).forEach((e) => {
          _r[e] = "";
        });
        const gr = {
            cartItemsPendingQuantity: [],
            cartItemsPendingDelete: [],
            cartData: {
              coupons: [],
              shippingRates: [],
              shippingAddress: hr,
              billingAddress: _r,
              items: [],
              itemsCount: 0,
              itemsWeight: 0,
              crossSells: [],
              needsShipping: !0,
              needsPayment: !1,
              hasCalculatedShipping: !0,
              fees: [],
              totals: {
                currency_code: "",
                currency_symbol: "",
                currency_minor_unit: 2,
                currency_decimal_separator: ".",
                currency_thousand_separator: ",",
                currency_prefix: "",
                currency_suffix: "",
                total_items: "0",
                total_items_tax: "0",
                total_fees: "0",
                total_fees_tax: "0",
                total_discount: "0",
                total_discount_tax: "0",
                total_shipping: "0",
                total_shipping_tax: "0",
                total_price: "0",
                total_tax: "0",
                tax_lines: [],
              },
              errors: dr,
              paymentMethods: [],
              paymentRequirements: [],
              extensions: ur,
            },
            metaData: {
              updatingCustomerData: !1,
              updatingSelectedRate: !1,
              applyingCoupon: "",
              removingCoupon: "",
              isCartDataStale: !1,
            },
            errors: pr,
          },
          kr = ({ method: e, expires: t }) => {
            var o, c, r;
            return (0, m.sprintf)(
              /* translators: %1$s is referring to the payment method brand, %2$s is referring to the last 4 digits of the payment card, %3$s is referring to the expiry date.  */ /* translators: %1$s is referring to the payment method brand, %2$s is referring to the last 4 digits of the payment card, %3$s is referring to the expiry date.  */
              (0, m.__)("%1$s ending in %2$s (expires %3$s)", "woocommerce"),
              null !==
                (o =
                  null !== (c = null == e ? void 0 : e.display_brand) &&
                  void 0 !== c
                    ? c
                    : null == e || null === (r = e.networks) || void 0 === r
                    ? void 0
                    : r.preferred) && void 0 !== o
                ? o
                : e.brand,
              e.last4,
              t
            );
          },
          Er = ({ method: e }) =>
            e.brand && e.last4
              ? (0, m.sprintf)(
                  /* translators: %1$s is referring to the payment method brand, %2$s is referring to the last 4 digits of the payment card. */ /* translators: %1$s is referring to the payment method brand, %2$s is referring to the last 4 digits of the payment card. */
                  (0, m.__)("%1$s ending in %2$s", "woocommerce"),
                  e.brand,
                  e.last4
                )
              : (0, m.sprintf)(
                  /* translators: %s is the name of the payment method gateway. */ /* translators: %s is the name of the payment method gateway. */
                  (0, m.__)("Saved token for %s", "woocommerce"),
                  e.gateway
                ),
          wr = () => {
            var e;
            const {
                activeSavedToken: t,
                activePaymentMethod: o,
                savedPaymentMethods: r,
              } = (0, k.useSelect)((e) => {
                const t = e(oe.PAYMENT_STORE_KEY);
                return {
                  activeSavedToken: t.getActiveSavedToken(),
                  activePaymentMethod: t.getActivePaymentMethod(),
                  savedPaymentMethods: t.getSavedPaymentMethods(),
                };
              }),
              { __internalSetActivePaymentMethod: n } = (0, k.useDispatch)(
                oe.PAYMENT_STORE_KEY
              ),
              s = (() => {
                let e;
                if ((0, k.select)("core/editor")) {
                  const t = {
                    cartCoupons: tt.coupons,
                    cartItems: tt.items,
                    crossSellsProducts: tt.cross_sells,
                    cartFees: tt.fees,
                    cartItemsCount: tt.items_count,
                    cartItemsWeight: tt.items_weight,
                    cartNeedsPayment: tt.needs_payment,
                    cartNeedsShipping: tt.needs_shipping,
                    cartItemErrors: dr,
                    cartTotals: tt.totals,
                    cartIsLoading: !1,
                    cartErrors: pr,
                    billingData: gr.cartData.billingAddress,
                    billingAddress: gr.cartData.billingAddress,
                    shippingAddress: gr.cartData.shippingAddress,
                    extensions: ur,
                    shippingRates: tt.shipping_rates,
                    isLoadingRates: !1,
                    cartHasCalculatedShipping: tt.has_calculated_shipping,
                    paymentRequirements: tt.payment_requirements,
                    receiveCart: () => {},
                  };
                  e = {
                    cart: t,
                    cartTotals: t.cartTotals,
                    cartNeedsShipping: t.cartNeedsShipping,
                    billingData: t.billingAddress,
                    billingAddress: t.billingAddress,
                    shippingAddress: t.shippingAddress,
                    selectedShippingMethods: Ge(t.shippingRates),
                    paymentMethods: tt.payment_methods,
                    paymentRequirements: t.paymentRequirements,
                  };
                } else {
                  const t = (0, k.select)(mr),
                    o = t.getCartData(),
                    c = t.getCartErrors(),
                    r = t.getCartTotals(),
                    n = !t.hasFinishedResolution("getCartData"),
                    s = t.isCustomerDataUpdating(),
                    a = Ge(o.shippingRates);
                  e = {
                    cart: {
                      cartCoupons: o.coupons,
                      cartItems: o.items,
                      crossSellsProducts: o.crossSells,
                      cartFees: o.fees,
                      cartItemsCount: o.itemsCount,
                      cartItemsWeight: o.itemsWeight,
                      cartNeedsPayment: o.needsPayment,
                      cartNeedsShipping: o.needsShipping,
                      cartItemErrors: o.errors,
                      cartTotals: r,
                      cartIsLoading: n,
                      cartErrors: c,
                      billingData: Ie(o.billingAddress),
                      billingAddress: Ie(o.billingAddress),
                      shippingAddress: Ie(o.shippingAddress),
                      extensions: o.extensions,
                      shippingRates: o.shippingRates,
                      isLoadingRates: s,
                      cartHasCalculatedShipping: o.hasCalculatedShipping,
                      paymentRequirements: o.paymentRequirements,
                      receiveCart: (0, k.dispatch)(mr).receiveCart,
                    },
                    cartTotals: o.totals,
                    cartNeedsShipping: o.needsShipping,
                    billingData: o.billingAddress,
                    billingAddress: o.billingAddress,
                    shippingAddress: o.shippingAddress,
                    selectedShippingMethods: a,
                    paymentMethods: o.paymentMethods,
                    paymentRequirements: o.paymentRequirements,
                  };
                }
                return e;
              })(),
              a = (0, yt.getPaymentMethods)(),
              i = rr(),
              { removeNotice: l } = (0, k.useDispatch)("core/notices"),
              { dispatchCheckoutEvent: m } = ct(),
              d = (0, p.useMemo)(() => {
                const e = Object.keys(r),
                  t = new Set(
                    e.flatMap((e) => r[e].map((e) => e.method.gateway))
                  ),
                  o = Array.from(t).filter((e) => {
                    var t;
                    return null === (t = a[e]) || void 0 === t
                      ? void 0
                      : t.canMakePayment(s);
                  });
                return e
                  .flatMap((e) =>
                    r[e].map((t) => {
                      if (!o.includes(t.method.gateway)) return;
                      const c = "cc" === e || "echeck" === e,
                        r = t.method.gateway;
                      return {
                        name: `wc-saved-payment-method-token-${r}`,
                        label: c ? kr(t) : Er(t),
                        value: t.tokenId.toString(),
                        onChange: (e) => {
                          n(r, {
                            token: e,
                            payment_method: r,
                            [`wc-${r}-payment-token`]: e.toString(),
                            isSavedToken: !0,
                          }),
                            l("wc-payment-error", ve.PAYMENTS),
                            m("set-active-payment-method", {
                              paymentMethodSlug: r,
                            });
                        },
                      };
                    })
                  )
                  .filter((e) => void 0 !== e);
              }, [r, a, n, l, m, s]),
              u =
                t &&
                a[o] &&
                void 0 !==
                  (null === (e = a[o]) || void 0 === e
                    ? void 0
                    : e.savedTokenComponent) &&
                !(0, be.isNull)(a[o].savedTokenComponent)
                  ? (0, p.cloneElement)(a[o].savedTokenComponent, {
                      token: t,
                      ...i,
                    })
                  : null;
            return d.length > 0
              ? (0, c.createElement)(
                  c.Fragment,
                  null,
                  (0, c.createElement)(Vt.RadioControl, {
                    highlightChecked: !0,
                    id: "wc-payment-method-saved-tokens",
                    selected: t,
                    options: d,
                    onChange: () => {},
                  }),
                  u
                )
              : null;
          };
        o(7586);
        const br = () => {
            const {
              paymentMethodsInitialized: e,
              availablePaymentMethods: t,
              savedPaymentMethods: o,
            } = (0, k.useSelect)((e) => {
              const t = e(oe.PAYMENT_STORE_KEY);
              return {
                paymentMethodsInitialized: t.paymentMethodsInitialized(),
                availablePaymentMethods: t.getAvailablePaymentMethods(),
                savedPaymentMethods: t.getSavedPaymentMethods(),
              };
            });
            return e && 0 === Object.keys(t).length
              ? (0, c.createElement)(qc, null)
              : (0, c.createElement)(
                  c.Fragment,
                  null,
                  (0, c.createElement)(wr, null),
                  Object.keys(o).length > 0 &&
                    (0, c.createElement)(Vt.Label, {
                      label: (0, m.__)(
                        "Use another payment method.",
                        "woocommerce"
                      ),
                      screenReaderLabel: (0, m.__)(
                        "Other available payment methods",
                        "woocommerce"
                      ),
                      wrapperElement: "p",
                      wrapperProps: {
                        className: [
                          "wc-block-components-checkout-step__description wc-block-components-checkout-step__description-payments-aligned",
                        ],
                      },
                    }),
                  (0, c.createElement)(lr, null)
                );
          },
          yr = () => (0, c.createElement)(br, null),
          vr = {
            ...ko({
              defaultTitle: (0, m.__)("Payment options", "woocommerce"),
              defaultDescription: "",
            }),
            className: { type: "string", default: "" },
            lock: { type: "object", default: { move: !0, remove: !0 } },
          };
        (0, l.registerBlockType)("woocommerce/checkout-payment-block", {
          icon: {
            src: (0, c.createElement)(i.Z, {
              icon: Dc.Z,
              className: "wc-block-editor-components-block-icon",
            }),
          },
          attributes: vr,
          edit: ({ attributes: e, setAttributes: t }) => {
            const o = (0, v.getSetting)("globalPaymentMethods"),
              { incompatiblePaymentMethods: r } = (0, k.useSelect)((e) => {
                const { getIncompatiblePaymentMethods: t } = e(
                  oe.PAYMENT_STORE_KEY
                );
                return { incompatiblePaymentMethods: t() };
              }, []),
              s = (0, m.__)(
                "Incompatible with block-based checkout",
                "woocommerce"
              ),
              a = M.wordCountType;
            return (0, c.createElement)(
              $t,
              {
                attributes: e,
                setAttributes: t,
                className: n()(
                  "wc-block-checkout__payment-method",
                  null == e ? void 0 : e.className
                ),
              },
              (0, c.createElement)(
                d.InspectorControls,
                null,
                o.length > 0 &&
                  (0, c.createElement)(
                    Nt.PanelBody,
                    { title: (0, m.__)("Methods", "woocommerce") },
                    (0, c.createElement)(
                      "p",
                      { className: "wc-block-checkout__controls-text" },
                      (0, m.__)(
                        "You currently have the following payment integrations active.",
                        "woocommerce"
                      )
                    ),
                    o.map((e) => {
                      const t = !!r[e.id];
                      let o;
                      return (
                        (o =
                          "words" === a
                            ? $c(e.description, 30, void 0, !1)
                            : Hc(
                                e.description,
                                30,
                                "characters_including_spaces" === a,
                                void 0,
                                !1
                              )),
                        (0, c.createElement)(Yc, {
                          key: e.id,
                          href: `${v.ADMIN_URL}admin.php?page=wc-settings&tab=checkout&section=${e.id}`,
                          title: e.title,
                          description: o,
                          ...(t ? { warning: s } : {}),
                        })
                      );
                    }),
                    (0, c.createElement)(
                      Nt.ExternalLink,
                      {
                        href: `${v.ADMIN_URL}admin.php?page=wc-settings&tab=checkout`,
                      },
                      (0, m.__)("Manage payment methods", "woocommerce")
                    )
                  )
              ),
              (0, c.createElement)(Xt, null, (0, c.createElement)(yr, null)),
              (0, c.createElement)(Ht, {
                block: Tt.innerBlockAreas.PAYMENT_METHODS,
              })
            );
          },
          save: () =>
            (0, c.createElement)(
              "div",
              { ...d.useBlockProps.save() },
              (0, c.createElement)(qt, null)
            ),
        });
        const fr = (0, c.createElement)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              fill: "currentColor",
              viewBox: "0 0 24 24",
            },
            (0, c.createElement)("path", {
              stroke: "#1E1E1E",
              strokeLinejoin: "round",
              strokeWidth: "1.5",
              d: "M18.25 12a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z",
            }),
            (0, c.createElement)("path", {
              fill: "#1E1E1E",
              d: "M10 3h4v3h-4z",
            }),
            (0, c.createElement)("rect", {
              width: "1.5",
              height: "5",
              x: "11.25",
              y: "8",
              fill: "#1E1E1E",
              rx: ".75",
            }),
            (0, c.createElement)("path", {
              fill: "#1E1E1E",
              d: "m15.7 4.816 1.66 1.078-1.114 1.718-1.661-1.078z",
            })
          ),
          Cr = () =>
            ((e = !1) => {
              const {
                  paymentMethodsInitialized: t,
                  expressPaymentMethodsInitialized: o,
                  availablePaymentMethods: c,
                  availableExpressPaymentMethods: r,
                } = (0, k.useSelect)((e) => {
                  const t = e(oe.PAYMENT_STORE_KEY);
                  return {
                    paymentMethodsInitialized: t.paymentMethodsInitialized(),
                    expressPaymentMethodsInitialized:
                      t.expressPaymentMethodsInitialized(),
                    availableExpressPaymentMethods:
                      t.getAvailableExpressPaymentMethods(),
                    availablePaymentMethods: t.getAvailablePaymentMethods(),
                  };
                }),
                n = Object.values(c).map(({ name: e }) => e),
                s = Object.values(r).map(({ name: e }) => e),
                a = (0, yt.getPaymentMethods)(),
                i = (0, yt.getExpressPaymentMethods)(),
                l = Object.keys(a).reduce(
                  (e, t) => (n.includes(t) && (e[t] = a[t]), e),
                  {}
                ),
                m = Object.keys(i).reduce(
                  (e, t) => (s.includes(t) && (e[t] = i[t]), e),
                  {}
                ),
                d = ao(l),
                p = ao(m);
              return { paymentMethods: e ? p : d, isInitialized: e ? o : t };
            })(!0),
          Sr = () => {
            const { isEditor: e } = w(),
              { activePaymentMethod: t, paymentMethodData: o } = (0,
              k.useSelect)((e) => {
                const t = e(ir);
                return {
                  activePaymentMethod: t.getActivePaymentMethod(),
                  paymentMethodData: t.getPaymentMethodData(),
                };
              }),
              {
                __internalSetActivePaymentMethod: r,
                __internalSetExpressPaymentStarted: n,
                __internalSetPaymentIdle: s,
                __internalSetPaymentError: a,
                __internalSetPaymentMethodData: i,
                __internalSetExpressPaymentError: l,
              } = (0, k.useDispatch)(ir),
              { paymentMethods: d } = Cr(),
              u = rr(),
              h = (0, p.useRef)(t),
              _ = (0, p.useRef)(o),
              g = (0, p.useCallback)(
                (e) => () => {
                  (h.current = t), (_.current = o), n(), r(e);
                },
                [t, o, r, n]
              ),
              E = (0, p.useCallback)(() => {
                s(), r(h.current, _.current);
              }, [r, s]),
              b = (0, p.useCallback)(
                (e) => {
                  a(), i(e), l(e), r(h.current, _.current);
                },
                [r, a, i, l]
              ),
              y = (0, p.useCallback)(
                (e = "") => {
                  re()(
                    "Express Payment Methods should use the provided onError handler instead.",
                    {
                      alternative: "onError",
                      plugin: "woocommerce-gutenberg-products-block",
                      link: "https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/4228",
                    }
                  ),
                    e ? b(e) : l("");
                },
                [l, b]
              ),
              v = Object.entries(d),
              f =
                v.length > 0
                  ? v.map(([t, o]) => {
                      const r = e ? o.edit : o.content;
                      return (0, p.isValidElement)(r)
                        ? (0, c.createElement)(
                            "li",
                            { key: t, id: `express-payment-method-${t}` },
                            (0, p.cloneElement)(r, {
                              ...u,
                              onClick: g(t),
                              onClose: E,
                              onError: b,
                              setExpressPaymentError: y,
                            })
                          )
                        : null;
                    })
                  : (0, c.createElement)(
                      "li",
                      { key: "noneRegistered" },
                      (0, m.__)("No registered Payment Methods", "woocommerce")
                    );
            return (0, c.createElement)(
              sr,
              { isEditor: e },
              (0, c.createElement)(
                "ul",
                {
                  className:
                    "wc-block-components-express-payment__event-buttons",
                },
                f
              )
            );
          };
        o(9660);
        const Pr = () => {
            const {
                isCalculating: e,
                isProcessing: t,
                isAfterProcessing: o,
                isBeforeProcessing: r,
                isComplete: n,
                hasError: s,
              } = (0, k.useSelect)((e) => {
                const t = e(oe.CHECKOUT_STORE_KEY);
                return {
                  isCalculating: t.isCalculating(),
                  isProcessing: t.isProcessing(),
                  isAfterProcessing: t.isAfterProcessing(),
                  isBeforeProcessing: t.isBeforeProcessing(),
                  isComplete: t.isComplete(),
                  hasError: t.hasError(),
                };
              }),
              {
                availableExpressPaymentMethods: a,
                expressPaymentMethodsInitialized: i,
                isExpressPaymentMethodActive: l,
              } = (0, k.useSelect)((e) => {
                const t = e(oe.PAYMENT_STORE_KEY);
                return {
                  availableExpressPaymentMethods:
                    t.getAvailableExpressPaymentMethods(),
                  expressPaymentMethodsInitialized:
                    t.expressPaymentMethodsInitialized(),
                  isExpressPaymentMethodActive:
                    t.isExpressPaymentMethodActive(),
                };
              }),
              { isEditor: d } = w();
            if (!i || (i && 0 === Object.keys(a).length))
              return d || v.CURRENT_USER_IS_ADMIN
                ? (0, c.createElement)(Vt.StoreNoticesContainer, {
                    context: ve.EXPRESS_PAYMENTS,
                  })
                : null;
            const p = t || o || r || (n && !s);
            return (0, c.createElement)(
              c.Fragment,
              null,
              (0, c.createElement)(
                Jo,
                { isLoading: e || p || l },
                (0, c.createElement)(
                  "div",
                  {
                    className:
                      "wc-block-components-express-payment wc-block-components-express-payment--checkout",
                  },
                  (0, c.createElement)(
                    "div",
                    {
                      className:
                        "wc-block-components-express-payment__title-container",
                    },
                    (0, c.createElement)(
                      Vt.Title,
                      {
                        className: "wc-block-components-express-payment__title",
                        headingLevel: "2",
                      },
                      (0, m.__)("Express Checkout", "woocommerce")
                    )
                  ),
                  (0, c.createElement)(
                    "div",
                    {
                      className: "wc-block-components-express-payment__content",
                    },
                    (0, c.createElement)(Vt.StoreNoticesContainer, {
                      context: ve.EXPRESS_PAYMENTS,
                    }),
                    (0, c.createElement)(Sr, null)
                  )
                )
              ),
              (0, c.createElement)(
                "div",
                {
                  className:
                    "wc-block-components-express-payment-continue-rule wc-block-components-express-payment-continue-rule--checkout",
                },
                (0, m.__)("Or continue below", "woocommerce")
              )
            );
          },
          Nr = ({ className: e }) => {
            const { cartNeedsPayment: t } = He();
            return t
              ? (0, c.createElement)(
                  "div",
                  { className: e },
                  (0, c.createElement)(Pr, null)
                )
              : null;
          };
        o(2455),
          (0, l.registerBlockType)(
            "woocommerce/checkout-express-payment-block",
            {
              icon: {
                src: (0, c.createElement)(i.Z, {
                  style: { fill: "none" },
                  icon: fr,
                  className: "wc-block-editor-components-block-icon",
                }),
              },
              edit: ({ attributes: e }) => {
                const { paymentMethods: t, isInitialized: o } = Cr(),
                  r = Object.keys(t).length > 0,
                  s = (0, d.useBlockProps)({
                    className: n()(
                      {
                        "wp-block-woocommerce-checkout-express-payment-block--has-express-payment-methods":
                          r,
                      },
                      null == e ? void 0 : e.className
                    ),
                    attributes: e,
                  });
                return o && r
                  ? (0, c.createElement)(
                      "div",
                      { ...s },
                      (0, c.createElement)(Nr, null)
                    )
                  : null;
              },
              save: () =>
                (0, c.createElement)("div", { ...d.useBlockProps.save() }),
            }
          );
        var Tr = o(31),
          Rr = o(1998);
        const Ar = ({ minRate: e, maxRate: t, multiple: o = !1 }) => {
          if (void 0 === e || void 0 === t) return null;
          const r = (0, v.getSetting)("displayCartPricesIncludingTax", !1)
              ? parseInt(e.price, 10) + parseInt(e.taxes, 10)
              : parseInt(e.price, 10),
            n = (0, v.getSetting)("displayCartPricesIncludingTax", !1)
              ? parseInt(t.price, 10) + parseInt(t.taxes, 10)
              : parseInt(t.price, 10),
            s =
              0 === r
                ? (0, c.createElement)(
                    "em",
                    null,
                    (0, m.__)("free", "woocommerce")
                  )
                : (0, c.createElement)(Vt.FormattedMonetaryAmount, {
                    currency: (0, oc.getCurrencyFromPriceResponse)(e),
                    value: r,
                  });
          return (0, c.createElement)(
            "span",
            { className: "wc-block-checkout__shipping-method-option-price" },
            r !== n || o
              ? (0, p.createInterpolateElement)(
                  0 === r && 0 === n
                    ? "<price />"
                    : (0, m.__)("from <price />", "woocommerce"),
                  { price: s }
                )
              : s
          );
        };
        function xr(e) {
          return e
            ? {
                min: e.reduce(
                  (e, t) =>
                    We(t.method_id)
                      ? e
                      : void 0 === e ||
                        parseInt(t.price, 10) < parseInt(e.price, 10)
                      ? t
                      : e,
                  void 0
                ),
                max: e.reduce(
                  (e, t) =>
                    We(t.method_id)
                      ? e
                      : void 0 === e ||
                        parseInt(t.price, 10) > parseInt(e.price, 10)
                      ? t
                      : e,
                  void 0
                ),
              }
            : { min: void 0, max: void 0 };
        }
        function Ir(e) {
          return e
            ? {
                min: e.reduce(
                  (e, t) =>
                    We(t.method_id) && (void 0 === e || t.price < e.price)
                      ? t
                      : e,
                  void 0
                ),
                max: e.reduce(
                  (e, t) =>
                    We(t.method_id) && (void 0 === e || t.price > e.price)
                      ? t
                      : e,
                  void 0
                ),
              }
            : { min: void 0, max: void 0 };
        }
        o(6523);
        const Or = (0, m.__)("Local Pickup", "woocommerce"),
          Mr = (0, m.__)("Shipping", "woocommerce"),
          Br = ({
            checked: e,
            rate: t,
            showPrice: o,
            showIcon: r,
            toggleText: s,
            setAttributes: a,
          }) =>
            (0, c.createElement)(
              Nt.__experimentalRadio,
              {
                value: "pickup",
                className: n()("wc-block-checkout__shipping-method-option", {
                  "wc-block-checkout__shipping-method-option--selected":
                    "pickup" === e,
                }),
              },
              !0 === r &&
                (0, c.createElement)(i.Z, {
                  icon: Rr.Z,
                  size: 28,
                  className: "wc-block-checkout__shipping-method-option-icon",
                }),
              (0, c.createElement)(d.RichText, {
                value: s,
                placeholder: Or,
                tagName: "span",
                className: "wc-block-checkout__shipping-method-option-title",
                onChange: (e) => a({ localPickupText: e }),
                __unstableDisableFormats: !0,
                preserveWhiteSpace: !0,
              }),
              !0 === o &&
                (0, c.createElement)(Ar, { minRate: t.min, maxRate: t.max })
            ),
          Dr = ({
            checked: e,
            rate: t,
            showPrice: o,
            showIcon: r,
            toggleText: s,
            setAttributes: a,
          }) => {
            const l =
              void 0 === t.min
                ? (0, c.createElement)(
                    "span",
                    {
                      className:
                        "wc-block-checkout__shipping-method-option-price",
                    },
                    (0, m.__)("calculated with an address", "woocommerce")
                  )
                : (0, c.createElement)(Ar, { minRate: t.min, maxRate: t.max });
            return (0, c.createElement)(
              Nt.__experimentalRadio,
              {
                value: "shipping",
                className: n()("wc-block-checkout__shipping-method-option", {
                  "wc-block-checkout__shipping-method-option--selected":
                    "shipping" === e,
                }),
              },
              !0 === r &&
                (0, c.createElement)(i.Z, {
                  icon: Tr.Z,
                  size: 28,
                  className: "wc-block-checkout__shipping-method-option-icon",
                }),
              (0, c.createElement)(d.RichText, {
                value: s,
                placeholder: Mr,
                tagName: "span",
                className: "wc-block-checkout__shipping-method-option-title",
                onChange: (e) => a({ shippingText: e }),
                __unstableDisableFormats: !0,
                preserveWhiteSpace: !0,
              }),
              !0 === o && l
            );
          },
          Fr = {
            ...ko({
              defaultTitle: (0, m.__)("Shipping method", "woocommerce"),
              defaultDescription: (0, m.__)(
                "Select how you would like to receive your order.",
                "woocommerce"
              ),
            }),
            className: { type: "string", default: "" },
            showIcon: { type: "boolean", default: !0 },
            showPrice: { type: "boolean", default: !0 },
            localPickupText: { type: "string", default: Or },
            shippingText: { type: "string", default: Mr },
            lock: { type: "object", default: { move: !0, remove: !0 } },
          };
        (0, l.registerBlockType)("woocommerce/checkout-shipping-method-block", {
          icon: {
            src: (0, c.createElement)(i.Z, {
              icon: Tr.Z,
              className: "wc-block-editor-components-block-icon",
            }),
          },
          attributes: Fr,
          edit: ({ attributes: e, setAttributes: t }) => {
            var o, r;
            (0, p.useEffect)(() => {
              const o = (0, v.getSetting)("localPickupText", e.localPickupText);
              t({ localPickupText: o });
            }, [t]);
            const { setPrefersCollection: s } = (0, k.useDispatch)(
                oe.CHECKOUT_STORE_KEY
              ),
              { prefersCollection: a } = (0, k.useSelect)((e) => ({
                prefersCollection: e(oe.CHECKOUT_STORE_KEY).prefersCollection(),
              })),
              {
                showPrice: i,
                showIcon: l,
                className: u,
                localPickupText: h,
                shippingText: _,
              } = e,
              {
                shippingRates: g,
                needsShipping: E,
                hasCalculatedShipping: w,
                isCollectable: b,
              } = rt();
            return E && w && g && b && j
              ? (0, c.createElement)(
                  $t,
                  {
                    attributes: e,
                    setAttributes: t,
                    className: n()("wc-block-checkout__shipping-method", u),
                  },
                  (0, c.createElement)(
                    d.InspectorControls,
                    null,
                    (0, c.createElement)(
                      Nt.PanelBody,
                      { title: (0, m.__)("Appearance", "woocommerce") },
                      (0, c.createElement)(
                        "p",
                        { className: "wc-block-checkout__controls-text" },
                        (0, m.__)(
                          "Choose how this block is displayed to your customers.",
                          "woocommerce"
                        )
                      ),
                      (0, c.createElement)(Nt.ToggleControl, {
                        label: (0, m.__)("Show icon", "woocommerce"),
                        checked: l,
                        onChange: () => t({ showIcon: !l }),
                      }),
                      (0, c.createElement)(Nt.ToggleControl, {
                        label: (0, m.__)("Show costs", "woocommerce"),
                        checked: i,
                        onChange: () => t({ showPrice: !i }),
                      })
                    ),
                    (0, c.createElement)(
                      Nt.PanelBody,
                      { title: (0, m.__)("Shipping Methods", "woocommerce") },
                      (0, c.createElement)(
                        "p",
                        { className: "wc-block-checkout__controls-text" },
                        (0, m.__)(
                          "Methods can be made managed in your store settings.",
                          "woocommerce"
                        )
                      ),
                      (0, c.createElement)(Yc, {
                        key: "shipping_methods",
                        href: `${v.ADMIN_URL}admin.php?page=wc-settings&tab=shipping`,
                        title: (0, m.__)("Shipping", "woocommerce"),
                        description: (0, m.__)(
                          "Manage your shipping zones, methods, and rates.",
                          "woocommerce"
                        ),
                      }),
                      (0, c.createElement)(Yc, {
                        key: "pickup_location",
                        href: `${v.ADMIN_URL}admin.php?page=wc-settings&tab=shipping&section=pickup_location`,
                        title: (0, m.__)("Local Pickup", "woocommerce"),
                        description: (0, m.__)(
                          "Allow customers to choose a local pickup location during checkout.",
                          "woocommerce"
                        ),
                      })
                    )
                  ),
                  (0, c.createElement)(
                    Nt.__experimentalRadioGroup,
                    {
                      id: "shipping-method",
                      className: "wc-block-checkout__shipping-method-container",
                      label: "options",
                      onChange: (e) => {
                        s("pickup" === e);
                      },
                      checked: a ? "pickup" : "shipping",
                    },
                    (0, c.createElement)(Dr, {
                      checked: a ? "pickup" : "shipping",
                      rate: xr(
                        null === (o = g[0]) || void 0 === o
                          ? void 0
                          : o.shipping_rates
                      ),
                      showPrice: i,
                      showIcon: l,
                      setAttributes: t,
                      toggleText: _,
                    }),
                    (0, c.createElement)(Br, {
                      checked: a ? "pickup" : "shipping",
                      rate: Ir(
                        null === (r = g[0]) || void 0 === r
                          ? void 0
                          : r.shipping_rates
                      ),
                      showPrice: i,
                      showIcon: l,
                      setAttributes: t,
                      toggleText: h,
                    })
                  ),
                  (0, c.createElement)(Ht, {
                    block: Tt.innerBlockAreas.SHIPPING_METHOD,
                  })
                )
              : null;
          },
          save: () =>
            (0, c.createElement)(
              "div",
              { ...d.useBlockProps.save() },
              (0, c.createElement)(qt, null)
            ),
        }),
          o(1665);
        const Lr = () =>
            (0, c.createElement)(
              Nt.Placeholder,
              {
                icon: (0, c.createElement)(i.Z, { icon: Tr.Z }),
                label: (0, m.__)("Shipping options", "woocommerce"),
                className: "wc-block-checkout__no-shipping-placeholder",
              },
              (0, c.createElement)(
                "span",
                {
                  className:
                    "wc-block-checkout__no-shipping-placeholder-description",
                },
                (0, m.__)(
                  "Your store does not have any Shipping Options configured. Once you have added your Shipping Options they will appear here.",
                  "woocommerce"
                )
              ),
              (0, c.createElement)(
                Nt.Button,
                {
                  variant: "secondary",
                  href: `${v.ADMIN_URL}admin.php?page=wc-settings&tab=shipping`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                (0, m.__)("Configure Shipping Options", "woocommerce")
              )
            ),
          Ur = (e) => {
            const t = (0, v.getSetting)("displayCartPricesIncludingTax", !1)
                ? parseInt(e.price, 10) + parseInt(e.taxes, 10)
                : parseInt(e.price, 10),
              o =
                0 === t
                  ? (0, c.createElement)(
                      "span",
                      { className: "wc-block-checkout__shipping-option--free" },
                      (0, m.__)("Free", "woocommerce")
                    )
                  : (0, c.createElement)(Vt.FormattedMonetaryAmount, {
                      currency: (0, oc.getCurrencyFromPriceResponse)(e),
                      value: t,
                    });
            return {
              label: (0, Pe.decodeEntities)(e.name),
              value: e.rate_id,
              description: (0, Pe.decodeEntities)(e.description),
              secondaryLabel: o,
              secondaryDescription: (0, Pe.decodeEntities)(e.delivery_time),
            };
          },
          Yr = ({ noShippingPlaceholder: e = null }) => {
            const { isEditor: t } = w(),
              {
                shippingRates: o,
                needsShipping: r,
                isLoadingRates: n,
                hasCalculatedShipping: s,
                isCollectable: a,
              } = rt(),
              { shippingAddress: i } = Yt(),
              l = a
                ? o.map((e) => ({
                    ...e,
                    shipping_rates: e.shipping_rates.filter(
                      (e) => !We(e.method_id)
                    ),
                  }))
                : o;
            if (!r) return null;
            const d = qe(o);
            if (!s && !d)
              return (0, c.createElement)(
                "p",
                null,
                (0, m.__)(
                  "Shipping options will be displayed here after entering your full shipping address.",
                  "woocommerce"
                )
              );
            const p = Me(i);
            return (0, c.createElement)(
              c.Fragment,
              null,
              (0, c.createElement)(Vt.StoreNoticesContainer, {
                context: ve.SHIPPING_METHODS,
              }),
              t && !d
                ? e
                : (0, c.createElement)(Rc, {
                    noResultsMessage: (0, c.createElement)(
                      c.Fragment,
                      null,
                      p
                        ? (0, c.createElement)(
                            wc,
                            {
                              isDismissible: !1,
                              className:
                                "wc-block-components-shipping-rates-control__no-results-notice",
                              status: "warning",
                            },
                            (0, m.__)(
                              "There are no shipping options available. Please check your shipping address.",
                              "woocommerce"
                            )
                          )
                        : (0, m.__)(
                            "Add a shipping address to view shipping options.",
                            "woocommerce"
                          )
                    ),
                    renderOption: Ur,
                    collapsible: !1,
                    shippingRates: l,
                    isLoadingRates: n,
                    context: "woocommerce/checkout",
                  })
            );
          };
        o(8425);
        const jr = {
          ...ko({
            defaultTitle: (0, m.__)("Shipping options", "woocommerce"),
            defaultDescription: "",
          }),
          className: { type: "string", default: "" },
          lock: { type: "object", default: { move: !0, remove: !0 } },
        };
        o(2104),
          (0, l.registerBlockType)(
            "woocommerce/checkout-shipping-methods-block",
            {
              icon: {
                src: (0, c.createElement)(i.Z, {
                  icon: Tr.Z,
                  className: "wc-block-editor-components-block-icon",
                }),
              },
              attributes: jr,
              edit: ({ attributes: e, setAttributes: t }) => {
                const o = (0, v.getSetting)("globalShippingMethods"),
                  r = (0, v.getSetting)("activeShippingZones"),
                  { showShippingMethods: s } = jt();
                return s
                  ? (0, c.createElement)(
                      $t,
                      {
                        attributes: e,
                        setAttributes: t,
                        className: n()(
                          "wc-block-checkout__shipping-option",
                          null == e ? void 0 : e.className
                        ),
                      },
                      (0, c.createElement)(
                        d.InspectorControls,
                        null,
                        (0, c.createElement)(
                          Nt.PanelBody,
                          {
                            title: (0, m.__)(
                              "Shipping Calculations",
                              "woocommerce"
                            ),
                          },
                          (0, c.createElement)(
                            "p",
                            { className: "wc-block-checkout__controls-text" },
                            (0, m.__)(
                              "Options that control shipping can be managed in your store settings.",
                              "woocommerce"
                            )
                          ),
                          (0, c.createElement)(
                            Nt.ExternalLink,
                            {
                              href: `${v.ADMIN_URL}admin.php?page=wc-settings&tab=shipping&section=options`,
                            },
                            (0, m.__)("Manage shipping options", "woocommerce")
                          ),
                          " "
                        ),
                        o.length > 0 &&
                          (0, c.createElement)(
                            Nt.PanelBody,
                            { title: (0, m.__)("Methods", "woocommerce") },
                            (0, c.createElement)(
                              "p",
                              { className: "wc-block-checkout__controls-text" },
                              (0, m.__)(
                                "The following shipping integrations are active on your store.",
                                "woocommerce"
                              )
                            ),
                            o.map((e) =>
                              (0, c.createElement)(Yc, {
                                key: e.id,
                                href: `${v.ADMIN_URL}admin.php?page=wc-settings&tab=shipping&section=${e.id}`,
                                title: e.title,
                                description: e.description,
                              })
                            ),
                            (0, c.createElement)(
                              Nt.ExternalLink,
                              {
                                href: `${v.ADMIN_URL}admin.php?page=wc-settings&tab=shipping`,
                              },
                              (0, m.__)(
                                "Manage shipping methods",
                                "woocommerce"
                              )
                            )
                          ),
                        r.length &&
                          (0, c.createElement)(
                            Nt.PanelBody,
                            {
                              title: (0, m.__)("Shipping Zones", "woocommerce"),
                            },
                            (0, c.createElement)(
                              "p",
                              { className: "wc-block-checkout__controls-text" },
                              (0, m.__)(
                                "Shipping Zones can be made managed in your store settings.",
                                "woocommerce"
                              )
                            ),
                            r.map((e) =>
                              (0, c.createElement)(Yc, {
                                key: e.id,
                                href: `${v.ADMIN_URL}admin.php?page=wc-settings&tab=shipping&zone_id=${e.id}`,
                                title: e.title,
                                description: e.description,
                              })
                            )
                          )
                      ),
                      (0, c.createElement)(
                        Xt,
                        null,
                        (0, c.createElement)(Yr, {
                          noShippingPlaceholder: (0, c.createElement)(Lr, null),
                        })
                      ),
                      (0, c.createElement)(Ht, {
                        block: Tt.innerBlockAreas.SHIPPING_METHODS,
                      })
                    )
                  : null;
              },
              save: () =>
                (0, c.createElement)(
                  "div",
                  { ...d.useBlockProps.save() },
                  (0, c.createElement)(qt, null)
                ),
            }
          );
        const Vr = ({
            title: e,
            setSelectedOption: t,
            selectedOption: o,
            pickupLocations: r,
            onSelectRate: n,
            renderPickupLocation: s,
            packageCount: a,
          }) => {
            const i =
              (0, k.useSelect)((e) => {
                var t, o, c;
                return null === (t = e(oe.CART_STORE_KEY)) ||
                  void 0 === t ||
                  null === (o = t.getCartData()) ||
                  void 0 === o ||
                  null === (c = o.shippingRates) ||
                  void 0 === c
                  ? void 0
                  : c.length;
              }) > 1 ||
              document.querySelectorAll(
                ".wc-block-components-local-pickup-select .wc-block-components-radio-control"
              ).length > 1;
            return (0, c.createElement)(
              "div",
              { className: "wc-block-components-local-pickup-select" },
              !(!i || !e) && (0, c.createElement)("div", null, e),
              (0, c.createElement)(Vt.RadioControl, {
                onChange: (e) => {
                  t(e), n(e);
                },
                highlightChecked: !0,
                selected: o,
                options: r.map((e) => s(e, a)),
              })
            );
          },
          Kr = (e, t) => {
            const o = (0, v.getSetting)("displayCartPricesIncludingTax", !1)
                ? parseInt(e.price, 10) + parseInt(e.taxes, 10)
                : e.price,
              r = ((e) => {
                if (null != e && e.meta_data) {
                  const t = e.meta_data.find(
                    (e) => "pickup_location" === e.key
                  );
                  return t ? t.value : "";
                }
                return "";
              })(e),
              n = ((e) => {
                if (null != e && e.meta_data) {
                  const t = e.meta_data.find((e) => "pickup_address" === e.key);
                  return t ? t.value : "";
                }
                return "";
              })(e),
              s = ((e) => {
                if (null != e && e.meta_data) {
                  const t = e.meta_data.find((e) => "pickup_details" === e.key);
                  return t ? t.value : "";
                }
                return "";
              })(e);
            let a = (0, c.createElement)(
              "em",
              null,
              (0, m.__)("free", "woocommerce")
            );
            return (
              parseInt(o, 10) > 0 &&
                (a =
                  1 === t
                    ? (0, c.createElement)(Vt.FormattedMonetaryAmount, {
                        currency: (0, oc.getCurrencyFromPriceResponse)(e),
                        value: o,
                      })
                    : (0, p.createInterpolateElement)(
                        /* translators: <price/> is the price of the package, <packageCount/> is the number of packages. These must appear in the translated string. */ /* translators: <price/> is the price of the package, <packageCount/> is the number of packages. These must appear in the translated string. */
                        (0, m._n)(
                          "<price/> x <packageCount/> package",
                          "<price/> x <packageCount/> packages",
                          t,
                          "woocommerce"
                        ),
                        {
                          price: (0, c.createElement)(
                            Vt.FormattedMonetaryAmount,
                            {
                              currency: (0, oc.getCurrencyFromPriceResponse)(e),
                              value: o,
                            }
                          ),
                          packageCount: (0, c.createElement)(
                            c.Fragment,
                            null,
                            t
                          ),
                        }
                      )),
              {
                value: e.rate_id,
                label: r
                  ? (0, Pe.decodeEntities)(r)
                  : (0, Pe.decodeEntities)(e.name),
                secondaryLabel: a,
                description: (0, Pe.decodeEntities)(s),
                secondaryDescription: n
                  ? (0, c.createElement)(
                      c.Fragment,
                      null,
                      (0, c.createElement)(i.Z, {
                        icon: Ut.Z,
                        className: "wc-block-editor-components-block-icon",
                      }),
                      (0, Pe.decodeEntities)(n)
                    )
                  : void 0,
              }
            );
          },
          $r = () => {
            var e;
            const { shippingRates: t, selectShippingRate: o } = rt(),
              r = (
                (null === (e = t[0]) || void 0 === e
                  ? void 0
                  : e.shipping_rates) || []
              ).filter(ze),
              [n, s] = (0, p.useState)(() => {
                var e;
                return (
                  (null === (e = r.find((e) => e.selected)) || void 0 === e
                    ? void 0
                    : e.rate_id) || ""
                );
              }),
              a = (0, p.useCallback)(
                (e) => {
                  o(e);
                },
                [o]
              ),
              { extensions: i, receiveCart: l, ...m } = He(),
              d = {
                extensions: i,
                cart: m,
                components: {
                  ShippingRatesControlPackage: Nc,
                  LocalPickupSelect: Vr,
                },
                renderPickupLocation: Kr,
              };
            (0, p.useEffect)(() => {
              !n && r[0] && (s(r[0].rate_id), a(r[0].rate_id));
            }, [a, r, n]);
            const u = qe(t);
            return (0, c.createElement)(
              c.Fragment,
              null,
              (0, c.createElement)(
                Tt.ExperimentalOrderLocalPickupPackages.Slot,
                { ...d }
              ),
              (0, c.createElement)(
                Tt.ExperimentalOrderLocalPickupPackages,
                null,
                (0, c.createElement)(Vr, {
                  title: t[0].name,
                  setSelectedOption: s,
                  onSelectRate: a,
                  selectedOption: n,
                  renderPickupLocation: Kr,
                  pickupLocations: r,
                  packageCount: u,
                })
              )
            );
          },
          Hr = {
            ...ko({
              defaultTitle: (0, m.__)("Pickup options", "woocommerce"),
              defaultDescription: "",
            }),
            className: { type: "string", default: "" },
            lock: { type: "object", default: { move: !0, remove: !0 } },
          };
        o(7734),
          (0, l.registerBlockType)(
            "woocommerce/checkout-pickup-options-block",
            {
              icon: {
                src: (0, c.createElement)(i.Z, {
                  icon: Rr.Z,
                  className: "wc-block-editor-components-block-icon",
                }),
              },
              attributes: Hr,
              edit: ({ attributes: e, setAttributes: t }) => {
                const { prefersCollection: o } = (0, k.useSelect)((e) => ({
                    prefersCollection: e(
                      oe.CHECKOUT_STORE_KEY
                    ).prefersCollection(),
                  })),
                  { className: r } = e;
                return o && j
                  ? (0, c.createElement)(
                      $t,
                      {
                        attributes: e,
                        setAttributes: t,
                        className: n()("wc-block-checkout__shipping-method", r),
                      },
                      (0, c.createElement)($r, null),
                      (0, c.createElement)(Ht, {
                        block: Tt.innerBlockAreas.PICKUP_LOCATION,
                      })
                    )
                  : null;
              },
              save: () =>
                (0, c.createElement)(
                  "div",
                  { ...d.useBlockProps.save() },
                  (0, c.createElement)(qt, null)
                ),
            }
          );
        const qr = ({ className: e = "" }) => {
          const { cartTotals: t } = He(),
            o = (0, oc.getCurrencyFromPriceResponse)(t);
          return (0, c.createElement)(
            Vt.TotalsWrapper,
            { className: e },
            (0, c.createElement)(Vt.Subtotal, { currency: o, values: t })
          );
        };
        (0, l.registerBlockType)(
          "woocommerce/checkout-order-summary-subtotal-block",
          {
            icon: {
              src: (0, c.createElement)(i.Z, {
                icon: Xo,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            edit: ({ attributes: e }) => {
              const { className: t } = e,
                o = (0, d.useBlockProps)();
              return (0, c.createElement)(
                "div",
                { ...o },
                (0, c.createElement)(qr, { className: t })
              );
            },
            save: () =>
              (0, c.createElement)("div", { ...d.useBlockProps.save() }),
          }
        );
        const Zr = ({ className: e = "" }) => {
          const { cartFees: t, cartTotals: o } = He(),
            r = (0, oc.getCurrencyFromPriceResponse)(o);
          return (0, c.createElement)(
            Vt.TotalsWrapper,
            { className: e },
            (0, c.createElement)(Vt.TotalsFees, { currency: r, cartFees: t })
          );
        };
        (0, l.registerBlockType)(
          "woocommerce/checkout-order-summary-fee-block",
          {
            icon: {
              src: (0, c.createElement)(i.Z, {
                icon: Xo,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            edit: ({ attributes: e }) => {
              const { className: t } = e,
                o = (0, d.useBlockProps)();
              return (0, c.createElement)(
                "div",
                { ...o },
                (0, c.createElement)(Zr, { className: t })
              );
            },
            save: () =>
              (0, c.createElement)("div", { ...d.useBlockProps.save() }),
          }
        );
        const zr = () => {
            const { extensions: e, receiveCart: t, ...o } = He(),
              r = { extensions: e, cart: o, context: "woocommerce/checkout" };
            return (0, c.createElement)(Tt.ExperimentalDiscountsMeta.Slot, {
              ...r,
            });
          },
          Wr = ({ className: e = "" }) => {
            const { cartTotals: t, cartCoupons: o } = He(),
              { removeCoupon: r, isRemovingCoupon: n } = or("wc/checkout"),
              s = (0, oc.getCurrencyFromPriceResponse)(t);
            return (0, c.createElement)(
              c.Fragment,
              null,
              (0, c.createElement)(
                Vt.TotalsWrapper,
                { className: e },
                (0, c.createElement)(tc, {
                  cartCoupons: o,
                  currency: s,
                  isRemovingCoupon: n,
                  removeCoupon: r,
                  values: t,
                })
              ),
              (0, c.createElement)(zr, null)
            );
          };
        (0, l.registerBlockType)(
          "woocommerce/checkout-order-summary-discount-block",
          {
            icon: {
              src: (0, c.createElement)(i.Z, {
                icon: Xo,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            edit: ({ attributes: e }) => {
              const { className: t } = e,
                o = (0, d.useBlockProps)();
              return (0, c.createElement)(
                "div",
                { ...o },
                (0, c.createElement)(Wr, { className: t })
              );
            },
            save: () =>
              (0, c.createElement)("div", { ...d.useBlockProps.save() }),
          }
        );
        const Gr = ({ className: e = "" }) => {
          const { cartTotals: t, cartNeedsShipping: o } = He();
          if (!o) return null;
          const r = (0, oc.getCurrencyFromPriceResponse)(t);
          return (0, c.createElement)(
            Tt.TotalsWrapper,
            { className: e },
            (0, c.createElement)(xc, {
              showCalculator: !1,
              showRateSelector: !1,
              values: t,
              currency: r,
              isCheckout: !0,
            })
          );
        };
        (0, l.registerBlockType)(
          "woocommerce/checkout-order-summary-shipping-block",
          {
            icon: {
              src: (0, c.createElement)(i.Z, {
                icon: Xo,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            edit: ({ attributes: e }) => {
              const { className: t } = e,
                o = (0, d.useBlockProps)();
              return (0, c.createElement)(
                "div",
                { ...o },
                (0, c.createElement)(
                  Xt,
                  null,
                  (0, c.createElement)(Gr, { className: t })
                )
              );
            },
            save: () =>
              (0, c.createElement)("div", { ...d.useBlockProps.save() }),
          }
        );
        var Xr = o(6855);
        const Jr = ({ className: e = "" }) => {
          const t = (0, v.getSetting)("couponsEnabled", !0),
            { applyCoupon: o, isApplyingCoupon: r } = or("wc/checkout");
          return t
            ? (0, c.createElement)(
                Vt.TotalsWrapper,
                { className: e },
                (0, c.createElement)(Qo, { onSubmit: o, isLoading: r })
              )
            : null;
        };
        (0, l.registerBlockType)(
          "woocommerce/checkout-order-summary-coupon-form-block",
          {
            icon: {
              src: (0, c.createElement)(i.Z, {
                icon: Xr.Z,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            edit: ({ attributes: e }) => {
              const { className: t } = e,
                o = (0, d.useBlockProps)();
              return (0, c.createElement)(
                "div",
                { ...o },
                (0, c.createElement)(
                  Xt,
                  null,
                  (0, c.createElement)(Jr, { className: t })
                )
              );
            },
            save: () =>
              (0, c.createElement)("div", { ...d.useBlockProps.save() }),
          }
        );
        const Qr = ({ className: e, showRateAfterTaxName: t }) => {
            const { cartTotals: o } = He();
            if (
              (0, v.getSetting)("displayCartPricesIncludingTax", !1) ||
              parseInt(o.total_tax, 10) <= 0
            )
              return null;
            const r = (0, oc.getCurrencyFromPriceResponse)(o);
            return (0, c.createElement)(
              Vt.TotalsWrapper,
              { className: e },
              (0, c.createElement)(Vt.TotalsTaxes, {
                showRateAfterTaxName: t,
                currency: r,
                values: o,
              })
            );
          },
          en = {
            showRateAfterTaxName: {
              type: "boolean",
              default: (0, v.getSetting)("displayCartPricesIncludingTax", !1),
            },
            lock: { type: "object", default: { remove: !0, move: !0 } },
          };
        (0, l.registerBlockType)(
          "woocommerce/checkout-order-summary-taxes-block",
          {
            icon: {
              src: (0, c.createElement)(i.Z, {
                icon: Xo,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            attributes: en,
            edit: ({ attributes: e, setAttributes: t }) => {
              const { className: o, showRateAfterTaxName: r } = e,
                n = (0, d.useBlockProps)(),
                s = (0, v.getSetting)("taxesEnabled"),
                a = (0, v.getSetting)("displayItemizedTaxes", !1),
                i = (0, v.getSetting)("displayCartPricesIncludingTax", !1);
              return (0, c.createElement)(
                "div",
                { ...n },
                (0, c.createElement)(
                  d.InspectorControls,
                  null,
                  s &&
                    a &&
                    !i &&
                    (0, c.createElement)(
                      Nt.PanelBody,
                      { title: (0, m.__)("Taxes", "woocommerce") },
                      (0, c.createElement)(Nt.ToggleControl, {
                        label: (0, m.__)(
                          "Show rate after tax name",
                          "woocommerce"
                        ),
                        help: (0, m.__)(
                          "Show the percentage rate alongside each tax line in the summary.",
                          "woocommerce"
                        ),
                        checked: r,
                        onChange: () => t({ showRateAfterTaxName: !r }),
                      })
                    )
                ),
                (0, c.createElement)(Qr, {
                  className: o,
                  showRateAfterTaxName: r,
                })
              );
            },
            save: () =>
              (0, c.createElement)("div", { ...d.useBlockProps.save() }),
          }
        );
        const tn = (0, c.createElement)(
          s.SVG,
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
          (0, c.createElement)("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
          (0, c.createElement)("path", {
            d: "M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z",
          })
        );
        o(6645);
        const on = ({
            currency: e,
            maxPrice: t,
            minPrice: o,
            priceClassName: r,
            priceStyle: s = {},
          }) =>
            (0, c.createElement)(
              c.Fragment,
              null,
              (0, c.createElement)(
                "span",
                { className: "screen-reader-text" },
                (0, m.sprintf)(
                  /* translators: %1$s min price, %2$s max price */ /* translators: %1$s min price, %2$s max price */
                  (0, m.__)("Price between %1$s and %2$s", "woocommerce"),
                  (0, oc.formatPrice)(o),
                  (0, oc.formatPrice)(t)
                )
              ),
              (0, c.createElement)(
                "span",
                { "aria-hidden": !0 },
                (0, c.createElement)(Vt.FormattedMonetaryAmount, {
                  className: n()("wc-block-components-product-price__value", r),
                  currency: e,
                  value: o,
                  style: s,
                }),
                " — ",
                (0, c.createElement)(Vt.FormattedMonetaryAmount, {
                  className: n()("wc-block-components-product-price__value", r),
                  currency: e,
                  value: t,
                  style: s,
                })
              )
            ),
          cn = ({
            currency: e,
            regularPriceClassName: t,
            regularPriceStyle: o,
            regularPrice: r,
            priceClassName: s,
            priceStyle: a,
            price: i,
          }) =>
            (0, c.createElement)(
              c.Fragment,
              null,
              (0, c.createElement)(
                "span",
                { className: "screen-reader-text" },
                (0, m.__)("Previous price:", "woocommerce")
              ),
              (0, c.createElement)(Vt.FormattedMonetaryAmount, {
                currency: e,
                renderText: (e) =>
                  (0, c.createElement)(
                    "del",
                    {
                      className: n()(
                        "wc-block-components-product-price__regular",
                        t
                      ),
                      style: o,
                    },
                    e
                  ),
                value: r,
              }),
              (0, c.createElement)(
                "span",
                { className: "screen-reader-text" },
                (0, m.__)("Discounted price:", "woocommerce")
              ),
              (0, c.createElement)(Vt.FormattedMonetaryAmount, {
                currency: e,
                renderText: (e) =>
                  (0, c.createElement)(
                    "ins",
                    {
                      className: n()(
                        "wc-block-components-product-price__value",
                        "is-discounted",
                        s
                      ),
                      style: a,
                    },
                    e
                  ),
                value: i,
              })
            ),
          rn = ({
            align: e,
            className: t,
            currency: o,
            format: r = "<price/>",
            maxPrice: s,
            minPrice: a,
            price: i,
            priceClassName: l,
            priceStyle: m,
            regularPrice: d,
            regularPriceClassName: u,
            regularPriceStyle: h,
            style: _,
          }) => {
            const g = n()(t, "price", "wc-block-components-product-price", {
              [`wc-block-components-product-price--align-${e}`]: e,
            });
            r.includes("<price/>") ||
              ((r = "<price/>"),
              console.error(
                "Price formats need to include the `<price/>` tag."
              ));
            const k = d && i && i < d;
            let E = (0, c.createElement)("span", {
              className: n()("wc-block-components-product-price__value", l),
            });
            return (
              k
                ? (E = (0, c.createElement)(cn, {
                    currency: o,
                    price: i,
                    priceClassName: l,
                    priceStyle: m,
                    regularPrice: d,
                    regularPriceClassName: u,
                    regularPriceStyle: h,
                  }))
                : void 0 !== a && void 0 !== s
                ? (E = (0, c.createElement)(on, {
                    currency: o,
                    maxPrice: s,
                    minPrice: a,
                    priceClassName: l,
                    priceStyle: m,
                  }))
                : i &&
                  (E = (0, c.createElement)(Vt.FormattedMonetaryAmount, {
                    className: n()(
                      "wc-block-components-product-price__value",
                      l
                    ),
                    currency: o,
                    value: i,
                    style: m,
                  })),
              (0, c.createElement)(
                "span",
                { className: g, style: _ },
                (0, p.createInterpolateElement)(r, { price: E })
              )
            );
          };
        o(333);
        const nn = ({
          className: e = "",
          disabled: t = !1,
          name: o,
          permalink: r = "",
          target: s,
          rel: a,
          style: i,
          onClick: l,
          ...m
        }) => {
          const d = n()("wc-block-components-product-name", e);
          if (t) {
            const e = m;
            return (0, c.createElement)("span", {
              className: d,
              ...e,
              dangerouslySetInnerHTML: { __html: (0, Pe.decodeEntities)(o) },
            });
          }
          return (0, c.createElement)("a", {
            className: d,
            href: r,
            target: s,
            ...m,
            dangerouslySetInnerHTML: { __html: (0, Pe.decodeEntities)(o) },
            style: i,
          });
        };
        var sn = o(1064);
        o(2930);
        const an = ({ children: e, className: t }) =>
            (0, c.createElement)(
              "div",
              { className: n()("wc-block-components-product-badge", t) },
              e
            ),
          ln = () =>
            (0, c.createElement)(
              an,
              { className: "wc-block-components-product-backorder-badge" },
              (0, m.__)("Available on backorder", "woocommerce")
            ),
          mn = ({ image: e = {}, fallbackAlt: t = "" }) => {
            const o = e.thumbnail
              ? {
                  src: e.thumbnail,
                  alt: (0, Pe.decodeEntities)(e.alt) || t || "Product Image",
                }
              : { src: v.PLACEHOLDER_IMG_SRC, alt: "" };
            return (0, c.createElement)("img", { ...o, alt: o.alt });
          },
          dn = ({ lowStockRemaining: e }) =>
            e
              ? (0, c.createElement)(
                  an,
                  { className: "wc-block-components-product-low-stock-badge" },
                  (0, m.sprintf)(
                    /* translators: %d stock amount (number of items in stock for product) */ /* translators: %d stock amount (number of items in stock for product) */
                    (0, m.__)("%d left in stock", "woocommerce"),
                    e
                  )
                )
              : null;
        var pn = o(7427);
        o(3804);
        const un = ({ details: e = [] }) =>
            Array.isArray(e)
              ? 0 === (e = e.filter((e) => !e.hidden)).length
                ? null
                : (0, c.createElement)(
                    "ul",
                    { className: "wc-block-components-product-details" },
                    e.map((e) => {
                      const t = (null == e ? void 0 : e.key) || e.name || "",
                        o =
                          (null == e ? void 0 : e.className) ||
                          (t
                            ? `wc-block-components-product-details__${(0, pn.o)(
                                t
                              )}`
                            : "");
                      return (0, c.createElement)(
                        "li",
                        { key: t + (e.display || e.value), className: o },
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
                              (0, Pe.decodeEntities)(t),
                              ":"
                            ),
                            " "
                          ),
                        (0, c.createElement)(
                          "span",
                          {
                            className:
                              "wc-block-components-product-details__value",
                          },
                          (0, Pe.decodeEntities)(e.display || e.value)
                        )
                      );
                    })
                  )
              : null,
          hn = window.wp.wordcount,
          gn = ({
            source: e,
            maxLength: t = 15,
            countType: o = "words",
            className: r = "",
            style: n = {},
          }) => {
            const s = (0, p.useMemo)(
              () =>
                ((e, t = 15, o = "words") => {
                  const c = (0, jc.autop)(e);
                  if ((0, hn.count)(c, o) <= t) return c;
                  const r = ((e) => {
                    const t = e.indexOf("</p>");
                    return -1 === t ? e : e.substr(0, t + 4);
                  })(c);
                  return (0, hn.count)(r, o) <= t
                    ? r
                    : "words" === o
                    ? $c(r, t)
                    : Hc(r, t, "characters_including_spaces" === o);
                })(e, t, o),
              [e, t, o]
            );
            return (0, c.createElement)(
              p.RawHTML,
              { style: n, className: r },
              s
            );
          },
          kn = ({
            className: e,
            shortDescription: t = "",
            fullDescription: o = "",
          }) => {
            const r = t || o;
            return r
              ? (0, c.createElement)(gn, {
                  className: e,
                  source: r,
                  maxLength: 15,
                  countType: M.wordCountType || "words",
                })
              : null;
          };
        o(6021);
        const En = ({
            shortDescription: e = "",
            fullDescription: t = "",
            itemData: o = [],
            variation: r = [],
          }) =>
            (0, c.createElement)(
              "div",
              { className: "wc-block-components-product-metadata" },
              (0, c.createElement)(kn, {
                className: "wc-block-components-product-metadata__description",
                shortDescription: e,
                fullDescription: t,
              }),
              (0, c.createElement)(un, { details: o }),
              (0, c.createElement)(un, {
                details: r.map(({ attribute: e = "", value: t }) => ({
                  key: e,
                  value: t,
                })),
              })
            ),
          wn = ({ cartItem: e }) => {
            const {
                images: t,
                low_stock_remaining: o,
                show_backorder_badge: r,
                name: s,
                permalink: a,
                prices: i,
                quantity: l,
                short_description: d,
                description: u,
                item_data: h,
                variation: _,
                totals: g,
                extensions: k,
              } = e,
              { receiveCart: E, ...w } = He(),
              b = (0, p.useMemo)(
                () => ({ context: "summary", cartItem: e, cart: w }),
                [e, w]
              ),
              y = (0, oc.getCurrencyFromPriceResponse)(i),
              f = (0, Tt.applyCheckoutFilter)({
                filterName: "itemName",
                defaultValue: s,
                extensions: k,
                arg: b,
              }),
              C = (0, sn.Z)({
                amount: parseInt(i.raw_prices.regular_price, 10),
                precision: (0, be.isString)(i.raw_prices.precision)
                  ? parseInt(i.raw_prices.precision, 10)
                  : i.raw_prices.precision,
              })
                .convertPrecision(y.minorUnit)
                .getAmount(),
              S = (0, sn.Z)({
                amount: parseInt(i.raw_prices.price, 10),
                precision: (0, be.isString)(i.raw_prices.precision)
                  ? parseInt(i.raw_prices.precision, 10)
                  : i.raw_prices.precision,
              })
                .convertPrecision(y.minorUnit)
                .getAmount(),
              P = (0, oc.getCurrencyFromPriceResponse)(g);
            let N = parseInt(g.line_subtotal, 10);
            (0, v.getSetting)("displayCartPricesIncludingTax", !1) &&
              (N += parseInt(g.line_subtotal_tax, 10));
            const T = (0, sn.Z)({
                amount: N,
                precision: P.minorUnit,
              }).getAmount(),
              R = (0, Tt.applyCheckoutFilter)({
                filterName: "subtotalPriceFormat",
                defaultValue: "<price/>",
                extensions: k,
                arg: b,
                validation: Tt.productPriceValidation,
              }),
              A = (0, Tt.applyCheckoutFilter)({
                filterName: "cartItemPrice",
                defaultValue: "<price/>",
                extensions: k,
                arg: b,
                validation: Tt.productPriceValidation,
              }),
              x = (0, Tt.applyCheckoutFilter)({
                filterName: "cartItemClass",
                defaultValue: "",
                extensions: k,
                arg: b,
              });
            return (0, c.createElement)(
              "div",
              { className: n()("wc-block-components-order-summary-item", x) },
              (0, c.createElement)(
                "div",
                { className: "wc-block-components-order-summary-item__image" },
                (0, c.createElement)(
                  "div",
                  {
                    className:
                      "wc-block-components-order-summary-item__quantity",
                  },
                  (0, c.createElement)(Vt.Label, {
                    label: l.toString(),
                    screenReaderLabel: (0, m.sprintf)(
                      /* translators: %d number of products of the same type in the cart */ /* translators: %d number of products of the same type in the cart */
                      (0, m._n)("%d item", "%d items", l, "woocommerce"),
                      l
                    ),
                  })
                ),
                (0, c.createElement)(mn, {
                  image: t.length ? t[0] : {},
                  fallbackAlt: f,
                })
              ),
              (0, c.createElement)(
                "div",
                {
                  className:
                    "wc-block-components-order-summary-item__description",
                },
                (0, c.createElement)(nn, {
                  disabled: !0,
                  name: f,
                  permalink: a,
                }),
                (0, c.createElement)(rn, {
                  currency: y,
                  price: S,
                  regularPrice: C,
                  className:
                    "wc-block-components-order-summary-item__individual-prices",
                  priceClassName:
                    "wc-block-components-order-summary-item__individual-price",
                  regularPriceClassName:
                    "wc-block-components-order-summary-item__regular-individual-price",
                  format: R,
                }),
                r
                  ? (0, c.createElement)(ln, null)
                  : !!o && (0, c.createElement)(dn, { lowStockRemaining: o }),
                (0, c.createElement)(En, {
                  shortDescription: d,
                  fullDescription: u,
                  itemData: h,
                  variation: _,
                })
              ),
              (0, c.createElement)(
                "span",
                { className: "screen-reader-text" },
                (0, m.sprintf)(
                  /* translators: %1$d is the number of items, %2$s is the item name and %3$s is the total price including the currency symbol. */ /* translators: %1$d is the number of items, %2$s is the item name and %3$s is the total price including the currency symbol. */
                  (0, m._n)(
                    "Total price for %1$d %2$s item: %3$s",
                    "Total price for %1$d %2$s items: %3$s",
                    l,
                    "woocommerce"
                  ),
                  l,
                  f,
                  (0, oc.formatPrice)(T, P)
                )
              ),
              (0, c.createElement)(
                "div",
                {
                  className:
                    "wc-block-components-order-summary-item__total-price",
                  "aria-hidden": "true",
                },
                (0, c.createElement)(rn, { currency: P, format: A, price: T })
              )
            );
          };
        o(3086);
        const bn = ({ cartItems: e = [] }) => {
            const { isLarge: t, hasContainerWidth: o } = (0, p.useContext)(h);
            return o
              ? (0, c.createElement)(
                  Vt.Panel,
                  {
                    className: "wc-block-components-order-summary",
                    initialOpen: t,
                    hasBorder: !1,
                    title: (0, c.createElement)(
                      "span",
                      {
                        className:
                          "wc-block-components-order-summary__button-text",
                      },
                      (0, m.__)("Order summary", "woocommerce")
                    ),
                  },
                  (0, c.createElement)(
                    "div",
                    { className: "wc-block-components-order-summary__content" },
                    e.map((e) =>
                      (0, c.createElement)(wn, { key: e.key, cartItem: e })
                    )
                  )
                )
              : null;
          },
          yn = ({ className: e = "" }) => {
            const { cartItems: t } = He();
            return (0, c.createElement)(
              Vt.TotalsWrapper,
              { className: e },
              (0, c.createElement)(bn, { cartItems: t })
            );
          };
        (0, l.registerBlockType)(
          "woocommerce/checkout-order-summary-cart-items-block",
          {
            icon: {
              src: (0, c.createElement)(i.Z, {
                icon: tn,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            edit: ({ attributes: e }) => {
              const { className: t } = e,
                o = (0, d.useBlockProps)();
              return (0, c.createElement)(
                "div",
                { ...o },
                (0, c.createElement)(yn, { className: t })
              );
            },
            save: () =>
              (0, c.createElement)("div", { ...d.useBlockProps.save() }),
          }
        ),
          (0, l.registerBlockType)(
            "woocommerce/checkout-order-summary-totals-block",
            {
              icon: {
                src: (0, c.createElement)(i.Z, {
                  icon: Xo,
                  className: "wc-block-editor-components-block-icon",
                }),
              },
              edit: ({ clientId: e }) => {
                const t = (0, d.useBlockProps)(),
                  o = Dt(Tt.innerBlockAreas.CHECKOUT_ORDER_SUMMARY_TOTALS),
                  r = [
                    [
                      "woocommerce/checkout-order-summary-subtotal-block",
                      {},
                      [],
                    ],
                    ["woocommerce/checkout-order-summary-fee-block", {}, []],
                    [
                      "woocommerce/checkout-order-summary-discount-block",
                      {},
                      [],
                    ],
                    [
                      "woocommerce/checkout-order-summary-shipping-block",
                      {},
                      [],
                    ],
                    ["woocommerce/checkout-order-summary-taxes-block", {}, []],
                  ];
                return (
                  Ft({ clientId: e, registeredBlocks: o, defaultTemplate: r }),
                  (0, c.createElement)(
                    "div",
                    { ...t },
                    (0, c.createElement)(d.InnerBlocks, {
                      allowedBlocks: o,
                      template: r,
                    })
                  )
                );
              },
              save: () =>
                (0, c.createElement)(
                  "div",
                  { ...d.useBlockProps.save() },
                  (0, c.createElement)(d.InnerBlocks.Content, null)
                ),
            }
          ),
          o(7867);
        var vn = o(9630);
        const fn = (e, t = !0) => {
            t
              ? window.document.body.classList.add(e)
              : window.document.body.classList.remove(e);
          },
          Cn = ({ attributes: e, setAttributes: t }) => {
            const { hasDarkControls: o } = e;
            return (0, c.createElement)(
              d.InspectorControls,
              null,
              (0, c.createElement)(
                Nt.PanelBody,
                { title: (0, m.__)("Style", "woocommerce") },
                (0, c.createElement)(Nt.ToggleControl, {
                  label: (0, m.__)("Dark mode inputs", "woocommerce"),
                  help: (0, m.__)(
                    "Inputs styled specifically for use on dark background colors.",
                    "woocommerce"
                  ),
                  checked: o,
                  onChange: () => t({ hasDarkControls: !o }),
                })
              )
            );
          };
        o(4413);
        const Sn = (e, t) => {
            const [o, c] = (0, p.useState)(() => {
              const o = window.localStorage.getItem(e);
              if (o)
                try {
                  return JSON.parse(o);
                } catch {
                  console.error(
                    `Value for key '${e}' could not be retrieved from localStorage because it can't be parsed.`
                  );
                }
              return t;
            });
            return (
              (0, p.useEffect)(() => {
                try {
                  window.localStorage.setItem(e, JSON.stringify(o));
                } catch {
                  console.error(
                    `Value for key '${e}' could not be saved in localStorage because it can't be converted into a string.`
                  );
                }
              }, [e, o]),
              [o, c]
            );
          },
          Pn = [],
          Nn = window.wp.notices,
          Tn = window.wp.coreData;
        var Rn = o(5146);
        const An = !1,
          xn = o.n(Rn)()("wc-admin:tracks");
        function In(e, t) {
          return (
            xn("recordevent %s %o", "wcadmin_" + e, t, {
              _tqk: window._tkq,
              shouldRecord: !(
                An ||
                !window._tkq ||
                !window.wcTracks ||
                !window.wcTracks.isEnabled
              ),
            }),
            !(
              !window.wcTracks ||
              "function" != typeof window.wcTracks.recordEvent
            ) &&
              (An
                ? (window.wcTracks.validateEvent(e, t), !1)
                : void window.wcTracks.recordEvent(e, t))
          );
        }
        const On = ({ blocks: e, findCondition: t }) => {
            for (const o of e) {
              if (t(o)) return o;
              if (o.innerBlocks) {
                const e = On({ blocks: o.innerBlocks, findCondition: t });
                if (e) return e;
              }
            }
          },
          Mn = [],
          Bn = (e) => {
            const [t, o, c] = (() => {
                const e = {};
                (0, v.getSetting)("incompatibleExtensions") &&
                  (0, v.getSetting)("incompatibleExtensions").forEach((t) => {
                    e[t.id] = t.title;
                  });
                const t = Object.keys(e),
                  o = t.length;
                return [e, t, o];
              })(),
              [r, n, s] = (() => {
                const { incompatiblePaymentMethods: e } = (0, k.useSelect)(
                    (e) => {
                      const { getIncompatiblePaymentMethods: t } = e(ir);
                      return { incompatiblePaymentMethods: t() };
                    },
                    []
                  ),
                  t = Object.keys(e);
                return [e, t, t.length];
              })(),
              a = { ...t, ...r },
              i = [...o, ...n],
              l = c + s,
              [m, d] = Sn(
                "wc-blocks_dismissed_incompatible_extensions_notices",
                Mn
              ),
              [u, h] = (0, p.useState)(!1),
              _ = m.some((t) => {
                return (
                  Object.keys(t).includes(e) &&
                  ((o = t[e]),
                  (c = i),
                  o.length === c.length &&
                    new Set([...o, ...c]).size === o.length)
                );
                var o, c;
              }),
              g = 0 === l || _;
            return (
              (0, p.useEffect)(() => {
                h(!g),
                  g ||
                    _ ||
                    d((t) =>
                      t.reduce(
                        (t, o) => (Object.keys(o).includes(e) || t.push(o), t),
                        []
                      )
                    );
              }, [g, _, d, e]),
              [
                u,
                () => {
                  const t = new Set(m);
                  t.add({ [e]: i }), d([...t]);
                },
                ((E = a),
                Object.fromEntries(
                  Object.entries(E).sort(([, e], [, t]) => e.localeCompare(t))
                )),
                l,
              ]
            );
            var E;
          },
          Dn = ({ blockType: e = "woocommerce/cart" }) =>
            "woocommerce/cart" === e
              ? (0, c.createElement)(
                  "p",
                  null,
                  (0, m.__)(
                    "If you continue, the cart block will be replaced with the classic experience powered by shortcodes. This means that you may lose customizations that you made to the cart block.",
                    "woocommerce"
                  )
                )
              : (0, c.createElement)(
                  c.Fragment,
                  null,
                  (0, c.createElement)(
                    "p",
                    null,
                    (0, m.__)(
                      "If you continue, the checkout block will be replaced with the classic experience powered by shortcodes. This means that you may lose:",
                      "woocommerce"
                    )
                  ),
                  (0, c.createElement)(
                    "ul",
                    { className: "cross-list" },
                    (0, c.createElement)(
                      "li",
                      null,
                      (0, m.__)(
                        "Customizations and updates to the block",
                        "woocommerce"
                      )
                    ),
                    (0, c.createElement)(
                      "li",
                      null,
                      (0, m.__)(
                        "Additional local pickup options created for the new checkout",
                        "woocommerce"
                      )
                    )
                  )
                );
        function Fn({ block: e, clientId: t, type: o }) {
          const { createInfoNotice: r } = (0, k.useDispatch)(Nn.store),
            { replaceBlock: n, selectBlock: s } = (0, k.useDispatch)(d.store),
            [a, i] = (0, p.useState)(!1),
            u = () => i(!1),
            { undo: h } = (0, k.useDispatch)(Tn.store),
            [, , _, g] = Bn(e),
            E = "woocommerce/cart" === e,
            w = E
              ? (0, m.__)("Switch to classic cart", "woocommerce")
              : (0, m.__)("Switch to classic checkout", "woocommerce"),
            b = E
              ? (0, m.__)("Switched to classic cart.", "woocommerce")
              : (0, m.__)("Switched to classic checkout.", "woocommerce"),
            y = E ? "cart" : "checkout",
            v = {
              shortcode: y,
              notice:
                "incompatible" === o ? "incompatible_notice" : "generic_notice",
              incompatible_extensions_count: g,
              incompatible_extensions_names: JSON.stringify(_),
            },
            { getBlocks: f } = (0, k.useSelect)(
              (e) => ({ getBlocks: e(d.store).getBlocks }),
              []
            ),
            C = () => {
              h(), In("switch_to_classic_shortcode_undo", v);
            };
          return (0, c.createElement)(
            c.Fragment,
            null,
            (0, c.createElement)(
              Nt.Button,
              {
                variant: "secondary",
                onClick: () => {
                  In("switch_to_classic_shortcode_click", v), i(!0);
                },
              },
              w
            ),
            a &&
              (0, c.createElement)(
                Nt.Modal,
                {
                  size: "medium",
                  title: w,
                  onRequestClose: u,
                  className:
                    "wc-blocks-switch-to-classic-shortcode-modal-content",
                },
                (0, c.createElement)(Dn, { blockType: e }),
                (0, c.createElement)(
                  Nt.TabbableContainer,
                  {
                    className:
                      "wc-blocks-switch-to-classic-shortcode-modal-actions",
                  },
                  (0, c.createElement)(
                    Nt.Button,
                    {
                      variant: "primary",
                      isDestructive: !0,
                      onClick: () => {
                        n(
                          t,
                          (0, l.createBlock)("woocommerce/classic-shortcode", {
                            shortcode: y,
                          })
                        ),
                          In("switch_to_classic_shortcode_confirm", v),
                          (() => {
                            const e = On({
                              blocks: f(),
                              findCondition: (e) =>
                                "woocommerce/classic-shortcode" === e.name,
                            });
                            e && s(e.clientId);
                          })(),
                          r(b, {
                            actions: [
                              {
                                label: (0, m.__)("Undo", "woocommerce"),
                                onClick: C,
                              },
                            ],
                            type: "snackbar",
                          }),
                          u();
                      },
                    },
                    (0, m.__)("Switch", "woocommerce")
                  ),
                  " ",
                  (0, c.createElement)(
                    Nt.Button,
                    {
                      variant: "secondary",
                      onClick: () => {
                        In("switch_to_classic_shortcode_cancel", v), u();
                      },
                    },
                    (0, m.__)("Cancel", "woocommerce")
                  )
                )
              )
          );
        }
        o(8861);
        const Ln = ({ block: e, clientId: t }) => {
          const [o, r] = ((e) => {
            const [t, o] = Sn(
                "wc-blocks_dismissed_sidebar_compatibility_notices",
                Pn
              ),
              [c, r] = (0, p.useState)(!1),
              n = t.includes(e);
            return (
              (0, p.useEffect)(() => {
                r(!n);
              }, [n]),
              [
                c,
                () => {
                  const c = new Set(t);
                  c.add(e), o([...c]);
                },
              ]
            );
          })(e);
          if (!o) return null;
          const s = (0, p.createInterpolateElement)(
            (0, m.__)(
              "Some extensions don't yet support this block, which may impact the shopper experience. To make sure this feature is right for your store, <a>review the list of compatible extensions</a>.",
              "woocommerce"
            ),
            {
              a: (0, c.createElement)(Nt.ExternalLink, {
                href: "https://woocommerce.com/document/cart-checkout-blocks-status/#section-10",
              }),
            }
          );
          return (0, c.createElement)(
            Nt.Notice,
            {
              onRemove: r,
              className: n()([
                "wc-blocks-sidebar-compatibility-notice",
                { "is-hidden": !o },
              ]),
            },
            s,
            (0, c.createElement)(Fn, {
              block: `woocommerce/${e}`,
              clientId: t,
              type: "generic",
            })
          );
        };
        function Un() {
          const e = (0, m.__)(
            "Your store does not have any payment methods that support the Checkout block. Once you have configured a compatible payment method it will be displayed here.",
            "woocommerce"
          );
          return (0, c.createElement)(
            Nt.Notice,
            {
              className: "wc-blocks-no-payment-methods-notice",
              status: "warning",
              spokenMessage: e,
              isDismissible: !1,
            },
            (0, c.createElement)(
              "div",
              { className: "wc-blocks-no-payment-methods-notice__content" },
              e,
              " ",
              (0, c.createElement)(
                Nt.ExternalLink,
                {
                  href: `${v.ADMIN_URL}admin.php?page=wc-settings&tab=checkout`,
                },
                (0, m.__)("Configure Payment Methods", "woocommerce")
              )
            )
          );
        }
        o(9245);
        const Yn = window.wp.editor;
        function jn({ block: e }) {
          const t = "checkout" === e ? D : U,
            o =
              "checkout" === e
                ? "woocommerce_checkout_page_id"
                : "woocommerce_cart_page_id",
            { saveEntityRecord: r } = (0, k.useDispatch)(Tn.store),
            { editPost: n, savePost: s } = (0, k.useDispatch)(Yn.store),
            {
              slug: a,
              postPublished: i,
              currentPostId: l,
            } = (0, k.useSelect)((o) => {
              var c;
              const { getEntityRecord: r } = o(Tn.store),
                { isCurrentPostPublished: n, getCurrentPostId: s } = o(
                  Yn.store
                );
              return {
                slug:
                  (null === (c = r("postType", "page", t)) || void 0 === c
                    ? void 0
                    : c.slug) || e,
                postPublished: n(),
                currentPostId: s(),
              };
            }, []),
            [d, u] = (0, p.useState)("pristine"),
            h = (0, p.useCallback)(() => {
              u("updating"),
                Promise.resolve()
                  .then(() =>
                    bt()({
                      path: `/wc/v3/settings/advanced/${o}`,
                      method: "GET",
                    })
                  )
                  .catch((e) => {
                    "rest_setting_setting_invalid" === e.code && u("error");
                  })
                  .then(() => {
                    if (!i) return n({ status: "publish" }), s();
                  })
                  .then(() =>
                    bt()({
                      path: `/wc/v3/settings/advanced/${o}`,
                      method: "POST",
                      data: { value: l.toString() },
                    })
                  )
                  .then(() => {
                    if (0 !== t)
                      return r("postType", "page", { id: t, slug: `${a}-2` });
                  })
                  .then(() => n({ slug: a }))
                  .then(() => s())
                  .then(() => u("updated"));
            }, [i, n, s, o, l, t, r, a]);
          let _;
          return (
            (_ =
              "checkout" === e
                ? (0, p.createInterpolateElement)(
                    (0, m.__)(
                      "If you would like to use this block as your default checkout, <a>update your page settings</a>.",
                      "woocommerce"
                    ),
                    {
                      a: (0, c.createElement)(
                        "a",
                        { href: "#", onClick: h },
                        (0, m.__)("update your page settings", "woocommerce")
                      ),
                    }
                  )
                : (0, p.createInterpolateElement)(
                    (0, m.__)(
                      "If you would like to use this block as your default cart, <a>update your page settings</a>.",
                      "woocommerce"
                    ),
                    {
                      a: (0, c.createElement)(
                        "a",
                        { href: "#", onClick: h },
                        (0, m.__)("update your page settings", "woocommerce")
                      ),
                    }
                  )),
            ("string" == typeof pagenow && "site-editor" === pagenow) ||
            l === t ||
            "dismissed" === d
              ? null
              : (0, c.createElement)(
                  Nt.Notice,
                  {
                    className: "wc-default-page-notice",
                    status: "updated" === d ? "success" : "info",
                    onRemove: () => u("dismissed"),
                    spokenMessage:
                      "updated" === d
                        ? (0, m.__)("Page settings updated", "woocommerce")
                        : _,
                  },
                  "updated" === d
                    ? (0, m.__)("Page settings updated", "woocommerce")
                    : (0, c.createElement)(
                        c.Fragment,
                        null,
                        (0, c.createElement)("p", null, _)
                      )
                )
          );
        }
        o(4828);
        var Vn = o(7642);
        function Kn({ toggleDismissedStatus: e, block: t, clientId: o }) {
          const [r, n, s, a] = Bn(t);
          if (
            ((0, p.useEffect)(() => {
              e(!r);
            }, [r, e]),
            !r)
          )
            return null;
          const l = (0, c.createElement)(
              c.Fragment,
              null,
              a > 1
                ? (0, p.createInterpolateElement)(
                    (0, m.__)(
                      "Some active extensions do not yet support this block. This may impact the shopper experience. <a>Learn more</a>",
                      "woocommerce"
                    ),
                    {
                      a: (0, c.createElement)(Nt.ExternalLink, {
                        href: "https://woocommerce.com/document/cart-checkout-blocks-status/",
                      }),
                    }
                  )
                : (0, p.createInterpolateElement)(
                    (0, m.sprintf)(
                      // translators: %s is the name of the extension.
                      // translators: %s is the name of the extension.
                      (0, m.__)(
                        "<strong>%s</strong> does not yet support this block. This may impact the shopper experience. <a>Learn more</a>",
                        "woocommerce"
                      ),
                      Object.values(s)[0]
                    ),
                    {
                      strong: (0, c.createElement)("strong", null),
                      a: (0, c.createElement)(Nt.ExternalLink, {
                        href: "https://woocommerce.com/document/cart-checkout-blocks-status/",
                      }),
                    }
                  )
            ),
            d = Object.entries(s),
            u = d.length - 2;
          return (0, c.createElement)(
            Nt.Notice,
            {
              className: "wc-blocks-incompatible-extensions-notice",
              status: "warning",
              onRemove: n,
              spokenMessage: l,
            },
            (0, c.createElement)(
              "div",
              {
                className: "wc-blocks-incompatible-extensions-notice__content",
              },
              (0, c.createElement)(i.Z, {
                className:
                  "wc-blocks-incompatible-extensions-notice__warning-icon",
                icon: (0, c.createElement)(Uc, null),
              }),
              (0, c.createElement)(
                "div",
                null,
                (0, c.createElement)("p", null, l),
                a > 1 &&
                  (0, c.createElement)(
                    "ul",
                    null,
                    d
                      .slice(0, 2)
                      .map(([e, t]) =>
                        (0, c.createElement)(
                          "li",
                          {
                            key: e,
                            className:
                              "wc-blocks-incompatible-extensions-notice__element",
                          },
                          t
                        )
                      )
                  ),
                d.length > 2 &&
                  (0, c.createElement)(
                    "details",
                    null,
                    (0, c.createElement)(
                      "summary",
                      null,
                      (0, c.createElement)(
                        "span",
                        null,
                        (0, m.sprintf)(
                          // translators: %s is the number of incompatible extensions.
                          // translators: %s is the number of incompatible extensions.
                          (0, m._n)(
                            "%s more incompatibility",
                            "%s more incompatibilites",
                            u,
                            "woocommerce"
                          ),
                          u
                        )
                      ),
                      (0, c.createElement)(i.Z, { icon: Vn.Z })
                    ),
                    (0, c.createElement)(
                      "ul",
                      null,
                      d
                        .slice(2)
                        .map(([e, t]) =>
                          (0, c.createElement)(
                            "li",
                            {
                              key: e,
                              className:
                                "wc-blocks-incompatible-extensions-notice__element",
                            },
                            t
                          )
                        )
                    )
                  ),
                (0, c.createElement)(Fn, {
                  block: t,
                  clientId: o,
                  type: "incompatible",
                })
              )
            )
          );
        }
        o(9781);
        var $n = o(6554);
        o(1612);
        const Hn = ({
            text: e,
            title: t = (0, m.__)("Feedback?", "woocommerce"),
            url: o,
          }) => {
            const [r, n] = (0, p.useState)(!1);
            return (
              (0, p.useEffect)(() => {
                n(!0);
              }, []),
              (0, c.createElement)(
                c.Fragment,
                null,
                r &&
                  (0, c.createElement)(
                    "div",
                    { className: "wc-block-feedback-prompt" },
                    (0, c.createElement)(i.Z, { icon: $n.Z }),
                    (0, c.createElement)(
                      "h2",
                      { className: "wc-block-feedback-prompt__title" },
                      t
                    ),
                    (0, c.createElement)(
                      "p",
                      { className: "wc-block-feedback-prompt__text" },
                      e
                    ),
                    (0, c.createElement)(
                      "a",
                      {
                        href: o,
                        className: "wc-block-feedback-prompt__link",
                        rel: "noreferrer noopener",
                        target: "_blank",
                      },
                      (0, m.__)("Give us your feedback.", "woocommerce"),
                      (0, c.createElement)(i.Z, { icon: Fc.Z, size: 16 })
                    )
                  )
              )
            );
          },
          qn = () =>
            (0, c.createElement)(Hn, {
              text: (0, m.__)(
                "We are currently working on improving our cart and checkout blocks to provide merchants with the tools and customization options they need.",
                "woocommerce"
              ),
              url: "https://github.com/woocommerce/woocommerce/discussions/new?category=checkout-flow&labels=type%3A+product%20feedback",
            }),
          Zn = (0, u.createHigherOrderComponent)(
            (e) => (t) => {
              const { clientId: o, name: r, isSelected: n } = t,
                [s, a] = (0, p.useState)(!0),
                {
                  isCart: i,
                  isCheckout: l,
                  isPaymentMethodsBlock: m,
                  hasPaymentMethods: u,
                  parentId: h,
                } = (0, k.useSelect)((e) => {
                  const { getBlockParentsByBlockName: t, getBlockName: c } = e(
                      d.store
                    ),
                    r = t(o, [
                      "woocommerce/cart",
                      "woocommerce/checkout",
                    ]).reduce((e, t) => ((e[c(t)] = t), e), {}),
                    n = c(o),
                    s = Object.keys(r).includes("woocommerce/cart"),
                    a = Object.keys(r).includes("woocommerce/checkout"),
                    i = "woocommerce/cart" === n || s,
                    l = i ? "woocommerce/cart" : "woocommerce/checkout";
                  return {
                    isCart: i,
                    isCheckout: "woocommerce/checkout" === n || a,
                    parentId: n === l ? o : r[l],
                    isPaymentMethodsBlock:
                      "woocommerce/checkout-payment-block" === n,
                    hasPaymentMethods:
                      e(oe.PAYMENT_STORE_KEY).paymentMethodsInitialized() &&
                      Object.keys(
                        e(oe.PAYMENT_STORE_KEY).getAvailablePaymentMethods()
                      ).length > 0,
                  };
                });
              return r.startsWith("woocommerce/") && n && (i || l)
                ? (0, c.createElement)(
                    c.Fragment,
                    null,
                    (0, c.createElement)(
                      d.InspectorControls,
                      null,
                      (0, c.createElement)(Kn, {
                        toggleDismissedStatus: (e) => {
                          a(e);
                        },
                        block: i ? "woocommerce/cart" : "woocommerce/checkout",
                        clientId: h,
                      }),
                      (0, c.createElement)(jn, {
                        block: l ? "checkout" : "cart",
                      }),
                      s
                        ? (0, c.createElement)(Ln, {
                            block: l ? "checkout" : "cart",
                            clientId: h,
                          })
                        : null,
                      m && !u && (0, c.createElement)(Un, null),
                      (0, c.createElement)(qn, null)
                    ),
                    (0, c.createElement)(e, { key: "edit", ...t })
                  )
                : (0, c.createElement)(e, { key: "edit", ...t });
            },
            "withSidebarNotices"
          );
        (0, ot.hasFilter)(
          "editor.BlockEdit",
          "woocommerce/add/sidebar-compatibility-notice"
        ) ||
          (0, ot.addFilter)(
            "editor.BlockEdit",
            "woocommerce/add/sidebar-compatibility-notice",
            Zn,
            11
          ),
          (0, ot.hasFilter)(
            "blocks.registerBlockType",
            "core/lock/addAttribute"
          ) ||
            (0, k.subscribe)(() => {
              var e, t, o, c;
              const r = (0, k.select)(d.store);
              if (!r) return;
              const n = r.getSelectedBlock();
              n &&
                (fn(
                  "wc-lock-selected-block--remove",
                  !(
                    null == n ||
                    null === (e = n.attributes) ||
                    void 0 === e ||
                    null === (t = e.lock) ||
                    void 0 === t ||
                    !t.remove
                  )
                ),
                fn(
                  "wc-lock-selected-block--move",
                  !(
                    null == n ||
                    null === (o = n.attributes) ||
                    void 0 === o ||
                    null === (c = o.lock) ||
                    void 0 === c ||
                    !c.move
                  )
                ));
            });
        const zn = [
            "woocommerce/checkout-fields-block",
            "woocommerce/checkout-totals-block",
          ],
          Wn = {
            hasDarkControls: {
              type: "boolean",
              default: (0, v.getSetting)("hasDarkEditorStyleSupport", !1),
            },
            showRateAfterTaxName: {
              type: "boolean",
              default: (0, v.getSetting)("displayCartPricesIncludingTax", !1),
            },
          },
          Gn = {
            showOrderNotes: { type: "boolean", default: !0 },
            showPolicyLinks: { type: "boolean", default: !0 },
            showReturnToCart: { type: "boolean", default: !0 },
            cartPageId: { type: "number", default: 0 },
          },
          Xn = JSON.parse(
            '{"name":"woocommerce/checkout","version":"1.0.0","title":"Checkout","description":"Display a checkout form so your customers can submit orders.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"align":["wide"],"html":false,"multiple":false},"example":{"attributes":{"isPreview":true},"viewportWidth":800},"attributes":{"isPreview":{"type":"boolean","default":false,"save":false},"showCompanyField":{"type":"boolean","default":false},"requireCompanyField":{"type":"boolean","default":false},"showApartmentField":{"type":"boolean","default":true},"showPhoneField":{"type":"boolean","default":true},"requirePhoneField":{"type":"boolean","default":false},"align":{"type":"string","default":"wide"}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}'
          ),
          Jn = {
            icon: {
              src: (0, c.createElement)(i.Z, {
                icon: a,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            attributes: { ...Xn.attributes, ...Wn, ...Gn },
            edit: ({ clientId: e, attributes: t, setAttributes: o }) => {
              const {
                  showCompanyField: r,
                  requireCompanyField: s,
                  showApartmentField: a,
                  showPhoneField: i,
                  requirePhoneField: u,
                  showOrderNotes: h,
                  showPolicyLinks: _,
                  showReturnToCart: E,
                  showRateAfterTaxName: w,
                  cartPageId: y,
                  isPreview: v = !1,
                } = t,
                f = (0, p.useRef)(
                  (0, Ae.getQueryArg)(window.location.href, "focus")
                );
              (0, p.useEffect)(() => {
                "checkout" !== f.current ||
                  (0, k.select)("core/block-editor").hasSelectedBlock() ||
                  ((0, k.dispatch)("core/block-editor").selectBlock(e),
                  (0, k.dispatch)("core/interface").enableComplementaryArea(
                    "core/edit-site",
                    "edit-site/block-inspector"
                  ));
              }, [e]);
              const C = (e) => {
                  const c = {};
                  (c[e] = !t[e]), o(c);
                },
                S = ((e = {}) => {
                  const t = (0, p.useRef)(),
                    o = (0, d.useBlockProps)({ ref: t, ...e });
                  return (
                    (({ ref: e }) => {
                      const t = (0, ot.hasFilter)(
                          "blocks.registerBlockType",
                          "core/lock/addAttribute"
                        ),
                        o = e.current;
                      (0, p.useEffect)(() => {
                        if (o && !t)
                          return (
                            o.addEventListener("keydown", e, {
                              capture: !0,
                              passive: !1,
                            }),
                            () => {
                              o.removeEventListener("keydown", e, {
                                capture: !0,
                              });
                            }
                          );
                        function e(e) {
                          const { keyCode: t, target: o } = e;
                          if (!(o instanceof HTMLElement)) return;
                          if (t !== vn.BACKSPACE && t !== vn.DELETE) return;
                          if ((0, zt.isTextField)(o)) return;
                          const c = o;
                          if (void 0 === c.dataset.block) return;
                          const r = ((e) => {
                            var t, o, c, r, n;
                            if (!e) return !1;
                            const { getBlock: s } = (0, k.select)(d.store),
                              a = s(e);
                            if (
                              "boolean" ==
                              typeof (null == a ||
                              null === (t = a.attributes) ||
                              void 0 === t ||
                              null === (o = t.lock) ||
                              void 0 === o
                                ? void 0
                                : o.remove)
                            )
                              return a.attributes.lock.remove;
                            const i = (0, l.getBlockType)(a.name);
                            var m, p, u;
                            return (
                              "boolean" ==
                                typeof (null == i ||
                                null === (c = i.attributes) ||
                                void 0 === c ||
                                null === (r = c.lock) ||
                                void 0 === r ||
                                null === (n = r.default) ||
                                void 0 === n
                                  ? void 0
                                  : n.remove) &&
                              (null == i ||
                              null === (m = i.attributes) ||
                              void 0 === m ||
                              null === (p = m.lock) ||
                              void 0 === p ||
                              null === (u = p.default) ||
                              void 0 === u
                                ? void 0
                                : u.remove)
                            );
                          })(c.dataset.block);
                          r &&
                            (e.preventDefault(),
                            e.stopPropagation(),
                            e.stopImmediatePropagation());
                        }
                      }, [o, t]);
                    })({ ref: t }),
                    o
                  );
                })();
              return (0, c.createElement)(
                "div",
                { ...S },
                (0, c.createElement)(
                  d.InspectorControls,
                  null,
                  (0, c.createElement)(Cn, { attributes: t, setAttributes: o })
                ),
                (0, c.createElement)(
                  b,
                  {
                    isPreview: v,
                    previewData: {
                      previewCart: tt,
                      previewSavedPaymentMethods: Pt,
                    },
                  },
                  (0, c.createElement)(
                    Tt.SlotFillProvider,
                    null,
                    (0, c.createElement)(
                      St,
                      null,
                      (0, c.createElement)(
                        g,
                        {
                          className: n()("wc-block-checkout", {
                            "has-dark-controls": t.hasDarkControls,
                          }),
                        },
                        (0, c.createElement)(
                          It.Provider,
                          {
                            value: {
                              addressFieldControls: () =>
                                (0, c.createElement)(
                                  d.InspectorControls,
                                  null,
                                  (0, c.createElement)(
                                    Nt.PanelBody,
                                    {
                                      title: (0, m.__)(
                                        "Address Fields",
                                        "woocommerce"
                                      ),
                                    },
                                    (0, c.createElement)(
                                      "p",
                                      {
                                        className:
                                          "wc-block-checkout__controls-text",
                                      },
                                      (0, m.__)(
                                        "Show or hide fields in the checkout address forms.",
                                        "woocommerce"
                                      )
                                    ),
                                    (0, c.createElement)(Nt.ToggleControl, {
                                      label: (0, m.__)(
                                        "Company",
                                        "woocommerce"
                                      ),
                                      checked: r,
                                      onChange: () => C("showCompanyField"),
                                    }),
                                    r &&
                                      (0, c.createElement)(Nt.CheckboxControl, {
                                        label: (0, m.__)(
                                          "Require company name?",
                                          "woocommerce"
                                        ),
                                        checked: s,
                                        onChange: () =>
                                          C("requireCompanyField"),
                                        className:
                                          "components-base-control--nested",
                                      }),
                                    (0, c.createElement)(Nt.ToggleControl, {
                                      label: (0, m.__)(
                                        "Apartment, suite, etc.",
                                        "woocommerce"
                                      ),
                                      checked: a,
                                      onChange: () => C("showApartmentField"),
                                    }),
                                    (0, c.createElement)(Nt.ToggleControl, {
                                      label: (0, m.__)("Phone", "woocommerce"),
                                      checked: i,
                                      onChange: () => C("showPhoneField"),
                                    }),
                                    i &&
                                      (0, c.createElement)(Nt.CheckboxControl, {
                                        label: (0, m.__)(
                                          "Require phone number?",
                                          "woocommerce"
                                        ),
                                        checked: u,
                                        onChange: () => C("requirePhoneField"),
                                        className:
                                          "components-base-control--nested",
                                      })
                                  )
                                ),
                            },
                          },
                          (0, c.createElement)(
                            xt.Provider,
                            {
                              value: {
                                showCompanyField: r,
                                requireCompanyField: s,
                                showApartmentField: a,
                                showPhoneField: i,
                                requirePhoneField: u,
                                showOrderNotes: h,
                                showPolicyLinks: _,
                                showReturnToCart: E,
                                cartPageId: y,
                                showRateAfterTaxName: w,
                              },
                            },
                            (0, c.createElement)(d.InnerBlocks, {
                              allowedBlocks: zn,
                              template: [
                                ["woocommerce/checkout-fields-block", {}, []],
                                ["woocommerce/checkout-totals-block", {}, []],
                              ],
                              templateLock: "insert",
                            })
                          )
                        )
                      )
                    )
                  )
                )
              );
            },
            save: () =>
              (0, c.createElement)(
                "div",
                {
                  ...d.useBlockProps.save({
                    className: "wc-block-checkout is-loading",
                  }),
                },
                (0, c.createElement)(d.InnerBlocks.Content, null)
              ),
            transforms: {
              to: [
                {
                  type: "block",
                  blocks: ["woocommerce/classic-shortcode"],
                  transform: (e) =>
                    (0, l.createBlock)(
                      "woocommerce/classic-shortcode",
                      { shortcode: "checkout", align: e.align },
                      []
                    ),
                },
              ],
            },
            deprecated: [
              {
                attributes: { ...Xn.attributes, ...Wn, ...Gn },
                save: ({ attributes: e }) =>
                  (0, c.createElement)("div", {
                    className: n()("is-loading", e.className),
                  }),
                migrate: (e) => {
                  const {
                    showOrderNotes: t,
                    showPolicyLinks: o,
                    showReturnToCart: c,
                    cartPageId: r,
                  } = e;
                  return [
                    e,
                    [
                      (0, l.createBlock)(
                        "woocommerce/checkout-fields-block",
                        {},
                        [
                          (0, l.createBlock)(
                            "woocommerce/checkout-express-payment-block",
                            {},
                            []
                          ),
                          (0, l.createBlock)(
                            "woocommerce/checkout-contact-information-block",
                            {},
                            []
                          ),
                          (0, l.createBlock)(
                            "woocommerce/checkout-shipping-address-block",
                            {},
                            []
                          ),
                          (0, l.createBlock)(
                            "woocommerce/checkout-billing-address-block",
                            {},
                            []
                          ),
                          (0, l.createBlock)(
                            "woocommerce/checkout-shipping-methods-block",
                            {},
                            []
                          ),
                          (0, l.createBlock)(
                            "woocommerce/checkout-payment-block",
                            {},
                            []
                          ),
                          (0, l.createBlock)(
                            "woocommerce/checkout-additional-information-block",
                            {},
                            []
                          ),
                          !!t &&
                            (0, l.createBlock)(
                              "woocommerce/checkout-order-note-block",
                              {},
                              []
                            ),
                          !!o &&
                            (0, l.createBlock)(
                              "woocommerce/checkout-terms-block",
                              {},
                              []
                            ),
                          (0, l.createBlock)(
                            "woocommerce/checkout-actions-block",
                            { showReturnToCart: c, cartPageId: r },
                            []
                          ),
                        ].filter(Boolean)
                      ),
                      (0, l.createBlock)(
                        "woocommerce/checkout-totals-block",
                        {}
                      ),
                    ],
                  ];
                },
                isEligible: (e, t) =>
                  !t.some(
                    (e) => "woocommerce/checkout-fields-block" === e.name
                  ),
              },
              {
                save: ({ attributes: e }) =>
                  (0, c.createElement)("div", {
                    className: n()("is-loading", e.className),
                  }),
                isEligible: (e, t) => {
                  const o = t.find(
                    (e) => "woocommerce/checkout-fields-block" === e.name
                  );
                  return (
                    !!o &&
                    !o.innerBlocks.some(
                      (e) =>
                        "woocommerce/checkout-additional-information-block" ===
                        e.name
                    )
                  );
                },
                migrate: (e, t) => {
                  const o = t.findIndex(
                    (e) => "woocommerce/checkout-fields-block" === e.name
                  );
                  if (-1 === o) return !1;
                  const c = t[o],
                    r = c.innerBlocks.findIndex(
                      (e) =>
                        "wp-block-woocommerce-checkout-payment-block" === e.name
                    );
                  return (
                    -1 !== r &&
                    ((t[o] = c.innerBlocks
                      .slice(0, r)
                      .concat(
                        (0, l.createBlock)(
                          "woocommerce/checkout-additional-information-block",
                          {},
                          []
                        )
                      )
                      .concat(t.slice(r + 1, t.length))),
                    [e, t])
                  );
                },
              },
            ],
          };
        (0, l.registerBlockType)(Xn, Jn);
      },
      8406: () => {},
      1029: () => {},
      3086: () => {},
      6391: () => {},
      3169: () => {},
      2930: () => {},
      3804: () => {},
      6021: () => {},
      7755: () => {},
      313: () => {},
      7099: () => {},
      1691: () => {},
      4970: () => {},
      4554: () => {},
      6968: () => {},
      2750: () => {},
      7368: () => {},
      991: () => {},
      946: () => {},
      333: () => {},
      6645: () => {},
      906: () => {},
      6115: () => {},
      9660: () => {},
      7277: () => {},
      7586: () => {},
      3658: () => {},
      2262: () => {},
      3820: () => {},
      1165: () => {},
      7247: () => {},
      6107: () => {},
      2455: () => {},
      9768: () => {},
      8659: () => {},
      56: () => {},
      7734: () => {},
      6523: () => {},
      8425: () => {},
      1665: () => {},
      2104: () => {},
      8054: () => {},
      2364: () => {},
      7450: () => {},
      7867: () => {},
      4828: () => {},
      6950: () => {},
      1612: () => {},
      9781: () => {},
      9245: () => {},
      4413: () => {},
      8861: () => {},
      7440: () => {},
      9196: (e) => {
        "use strict";
        e.exports = window.React;
      },
      2819: (e) => {
        "use strict";
        e.exports = window.lodash;
      },
      5158: (e) => {
        "use strict";
        e.exports = window.wp.a11y;
      },
      4333: (e) => {
        "use strict";
        e.exports = window.wp.compose;
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
      2560: (e) => {
        "use strict";
        e.exports = window.wp.warning;
      },
    },
    o = {};
  function c(e) {
    var r = o[e];
    if (void 0 !== r) return r.exports;
    var n = (o[e] = { exports: {} });
    return t[e].call(n.exports, n, n.exports, c), n.exports;
  }
  (c.m = t),
    (e = []),
    (c.O = (t, o, r, n) => {
      if (!o) {
        var s = 1 / 0;
        for (m = 0; m < e.length; m++) {
          for (var [o, r, n] = e[m], a = !0, i = 0; i < o.length; i++)
            (!1 & n || s >= n) && Object.keys(c.O).every((e) => c.O[e](o[i]))
              ? o.splice(i--, 1)
              : ((a = !1), n < s && (s = n));
          if (a) {
            e.splice(m--, 1);
            var l = r();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      n = n || 0;
      for (var m = e.length; m > 0 && e[m - 1][2] > n; m--) e[m] = e[m - 1];
      e[m] = [o, r, n];
    }),
    (c.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return c.d(t, { a: t }), t;
    }),
    (c.d = (e, t) => {
      for (var o in t)
        c.o(t, o) &&
          !c.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (c.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.j = 4231),
    (() => {
      var e = { 4231: 0 };
      c.O.j = (t) => 0 === e[t];
      var t = (t, o) => {
          var r,
            n,
            [s, a, i] = o,
            l = 0;
          if (s.some((t) => 0 !== e[t])) {
            for (r in a) c.o(a, r) && (c.m[r] = a[r]);
            if (i) var m = i(c);
          }
          for (t && t(o); l < s.length; l++)
            (n = s[l]), c.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return c.O(m);
        },
        o = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var r = c.O(void 0, [2869], () => c(3808));
  (r = c.O(r)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {}).checkout = r);
})();
