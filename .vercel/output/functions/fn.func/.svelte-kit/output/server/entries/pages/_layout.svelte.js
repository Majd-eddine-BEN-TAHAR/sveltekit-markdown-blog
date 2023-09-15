import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { t as title } from "../../chunks/config.js";
import { B as BROWSER, w as writable } from "../../chunks/index.js";
const browser = BROWSER;
const currentTheme = browser;
const theme = writable(currentTheme);
const Toggle_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "button.svelte-1hx4zk.svelte-1hx4zk{padding:0;font-weight:inherit;background:none;border:none;box-shadow:none;overflow:hidden}div.svelte-1hx4zk.svelte-1hx4zk{display:flex;align-items:center}img.svelte-1hx4zk.svelte-1hx4zk{width:30px}button.svelte-1hx4zk>.svelte-1hx4zk{display:flex;gap:var(--size-2)}",
  map: null
};
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$result.css.add(css$4);
  $$unsubscribe_theme();
  return `<button aria-label="Toggle theme" class="svelte-1hx4zk">${$theme === "dark" ? `<div class="svelte-1hx4zk" data-svelte-h="svelte-dgz95v"><img src="/sun.svg" alt="sun icon" class="svelte-1hx4zk"> <span>Light</span></div>` : `<div class="svelte-1hx4zk" data-svelte-h="svelte-1oymvzk"><img src="/moon.svg" alt="moon icon" class="svelte-1hx4zk"> <span>Dark</span></div>`} </button>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "nav.svelte-kihl60{padding-block:var(--size-7)}.links.svelte-kihl60{margin-block:var(--size-7)}a.svelte-kihl60{color:inherit;text-decoration:none}@media(min-width: 768px){nav.svelte-kihl60{display:flex;justify-content:space-between}.links.svelte-kihl60{display:flex;gap:var(--size-7);margin-block:0}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<nav class="svelte-kihl60"><a href="/" class="title svelte-kihl60"><b>${escape(title)}</b></a> <ul class="links svelte-kihl60" data-svelte-h="svelte-1l64aal"><li><a href="/about" class="svelte-kihl60">About</a></li> <li><a href="/contact" class="svelte-kihl60">Contact</a></li></ul> ${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {})} </nav>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "footer.svelte-y09n0j{padding-block:var(--size-7)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="svelte-y09n0j"><p>${escape(title)} © ${escape((/* @__PURE__ */ new Date()).getFullYear())}</p> </footer>`;
});
const PageTransition_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".my-transition.svelte-1yfzjhj{height:100%}",
  map: null
};
const PageTransition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url = "" } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css$1);
  return `<div class="my-transition svelte-1yfzjhj">${slots.default ? slots.default({}) : ``}</div>`;
});
const openProps_min = "";
const normalize_min = "";
const buttons_min = "";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".layout.svelte-1sq3us8{height:100%;max-inline-size:1440px;display:grid;grid-template-rows:auto 1fr auto;margin-inline:auto;padding-inline:var(--size-7)}main.svelte-1sq3us8{padding-block:var(--size-9)}@media(min-width: 1440px){.layout.svelte-1sq3us8{padding-inline:0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="layout svelte-1sq3us8">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-1sq3us8">${validate_component(PageTransition, "PageTransition").$$render($$result, { url: data.url }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Layout as default
};
