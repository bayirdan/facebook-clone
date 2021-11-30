import {
  o as r,
  c as n,
  a as e,
  b as m,
  r as z,
  d as s,
  n as p,
  u,
  i as f,
  t as _,
  F as v,
  e as g,
  f as k,
} from "./vendor.63244738.js";
const j = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) l(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const h of d.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && l(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerpolicy && (d.referrerPolicy = c.referrerpolicy),
      c.crossorigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossorigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function l(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = a(c);
    fetch(c.href, d);
  }
};
j();
var i = (o, t) => {
  for (const [a, l] of t) o[a] = l;
  return o;
};
const B = {},
  A = {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 28 28",
  },
  V = e(
    "path",
    {
      d: "M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29",
    },
    null,
    -1
  ),
  S = [V];
function F(o, t) {
  return r(), n("svg", A, S);
}
var H = i(B, [["render", F]]);
const Z = {},
  q = {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 28 28",
  },
  N = e(
    "path",
    {
      d: "M25.5 14C25.5 7.649 20.351 2.5 14 2.5 7.649 2.5 2.5 7.649 2.5 14 2.5 20.351 7.649 25.5 14 25.5 20.351 25.5 25.5 20.351 25.5 14ZM27 14C27 21.18 21.18 27 14 27 6.82 27 1 21.18 1 14 1 6.82 6.82 1 14 1 21.18 1 27 6.82 27 14ZM7.479 14 7.631 14C7.933 14 8.102 14.338 7.934 14.591 7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.99 18.461 7.004 18.578 7.03 18.802 6.862 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14ZM20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.878 19L21.364 19C21.139 19 20.97 18.802 20.997 18.578 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.067 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14ZM8.25 13C7.147 13 6.25 11.991 6.25 10.75 6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13ZM19.75 13C18.647 13 17.75 11.991 17.75 10.75 17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13ZM15.172 13.5C17.558 13.5 19.5 15.395 19.5 17.724L19.5 18.221C19.5 19.202 18.683 20 17.677 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.441 13.5 12.828 13.5L15.172 13.5ZM16.75 9C16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6 15.697 6 16.75 7.15 16.75 9Z",
    },
    null,
    -1
  ),
  O = [N];
function P(o, t) {
  return r(), n("svg", q, O);
}
var D = i(Z, [["render", P]]);
const I = {},
  E = {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 28 28",
  },
  W = e(
    "path",
    {
      d: "M23.5 4a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0 18a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0-9a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19z",
    },
    null,
    -1
  ),
  R = [W];
function Q(o, t) {
  return r(), n("svg", E, R);
}
var T = i(I, [["render", Q]]);
const J = {},
  K = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
  },
  U = m(
    '<g fill-rule="evenodd" transform="translate(-448 -544)"><g fill-rule="nonzero"><path d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z" transform="translate(448 544)"></path><path d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z" transform="translate(448 544)"></path><path d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z" transform="translate(448 544)"></path><path d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z" transform="translate(448 544)"></path></g></g>',
    1
  ),
  X = [U];
function Y(o, t) {
  return r(), n("svg", K, X);
}
var w = i(J, [["render", Y]]);
const ee = {},
  te = { viewBox: "0 0 36 36", fill: "currentColor" },
  se = e(
    "path",
    {
      d: "M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z",
    },
    null,
    -1
  ),
  oe = e(
    "path",
    {
      fill: "#ffffff",
      d: "M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z",
    },
    null,
    -1
  ),
  re = [se, oe];
function ne(o, t) {
  return r(), n("svg", te, re);
}
var ce = i(ee, [["render", ne]]);
const ie = {},
  le = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
  },
  ae = e(
    "g",
    { "fill-rule": "evenodd", transform: "translate(-446 -350)" },
    [
      e("g", { "fill-rule": "nonzero" }, [
        e("path", {
          d: "M100.249 201.999a1 1 0 0 0-1.415-1.415l-5.208 5.209a1 1 0 0 0 0 1.414l5.208 5.209A1 1 0 0 0 100.25 211l-4.501-4.501 4.5-4.501z",
          transform: "translate(355 153.5)",
        }),
        e("path", {
          d: "M107.666 205.5H94.855a1 1 0 1 0 0 2h12.813a1 1 0 1 0 0-2z",
          transform: "translate(355 153.5)",
        }),
      ]),
    ],
    -1
  ),
  de = [ae];
function ue(o, t) {
  return r(), n("svg", le, de);
}
var _e = i(ie, [["render", ue]]);
const pe = { class: "__logo" },
  me = {
    setup(o) {
      let t = z(!1);
      return (a, l) => (
        r(),
        n(
          "div",
          {
            class: p([
              "w-72 h-14 py-2 flex items-center gap-1 sm:gap-2",
              u(t) ? "bg-myGray-150 w-screen pr-4 sm:w-72" : "",
            ]),
          },
          [
            e("div", pe, [
              s(
                ce,
                {
                  class: p([
                    "text-face-blue w-10 cursor-pointer ml-4 transition-opacity duration-500",
                    u(t)
                      ? "absolute transform -translate-x-96 opacity-0"
                      : "opacity-100",
                  ]),
                },
                null,
                8,
                ["class"]
              ),
            ]),
            e(
              "div",
              {
                class: p([
                  "h-9 flex items-center justify-center rounded-full cursor-pointer hover:bg-myGray-200 text-myGray-800 transition-opacity duration-500",
                  u(t)
                    ? "opacity-100"
                    : "absolute transform -translate-x-96 opacity-0",
                ]),
              },
              [s(_e, { class: "w-5" })],
              2
            ),
            e(
              "div",
              {
                class: p([
                  "w-10 flex items-center justify-center h-full bg-myGray-200 rounded-full overflow-hidden cursor-pointer xl:flex-1 xl:px-4 xl:cursor-text ml-1 sm:m-0",
                  u(t) ? "flex-1 px-4 cursor-text" : "",
                ]),
                onClick:
                  l[2] || (l[2] = (c) => (f(t) ? (t.value = !0) : (t = !0))),
              },
              [
                s(
                  w,
                  {
                    class: p([
                      "w-5 text-myGray-500",
                      u(t)
                        ? "absolute transform -translate-x-96 opacity-0"
                        : "opacity-100",
                    ]),
                    fill: "currentColor",
                  },
                  null,
                  8,
                  ["class"]
                ),
                e(
                  "input",
                  {
                    class: p([
                      "w-full h-full bg-transparent text-sm px-2 outline-none text-myGray-800 xl:block",
                      u(t) ? "block" : "hidden",
                    ]),
                    type: "text",
                    placeholder: "Search Facebook",
                    onFocus:
                      l[0] ||
                      (l[0] = (c) => (f(t) ? (t.value = !0) : (t = !0))),
                    onBlur:
                      l[1] ||
                      (l[1] = (c) => (f(t) ? (t.value = !1) : (t = !1))),
                  },
                  null,
                  34
                ),
              ],
              2
            ),
          ],
          2
        )
      );
    },
  };
var x = "./assets/images/pp.jpg";
const he = {},
  fe = {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 44 44",
  },
  ve = m(
    '<circle cx="7" cy="7" r="6"></circle><circle cx="22" cy="7" r="6"></circle><circle cx="37" cy="7" r="6"></circle><circle cx="7" cy="22" r="6"></circle><circle cx="22" cy="22" r="6"></circle><circle cx="37" cy="22" r="6"></circle><circle cx="7" cy="37" r="6"></circle><circle cx="22" cy="37" r="6"></circle><circle cx="37" cy="37" r="6"></circle>',
    9
  ),
  ge = [ve];
function xe(o, t) {
  return r(), n("svg", fe, ge);
}
var $ = i(he, [["render", xe]]);
const ye = {},
  we = {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 28 28",
    alt: "Messenger",
  },
  $e = e(
    "path",
    {
      d: "M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z",
    },
    null,
    -1
  ),
  be = [$e];
function Ge(o, t) {
  return r(), n("svg", we, be);
}
var Ce = i(ye, [["render", Ge]]);
const Me = {},
  Le = {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 28 28",
    alt: "Notifications",
  },
  ze = e(
    "path",
    {
      d: "M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z",
    },
    null,
    -1
  ),
  ke = [ze];
function je(o, t) {
  return r(), n("svg", Le, ke);
}
var Be = i(Me, [["render", je]]);
const Ae = {},
  Ve = {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
  },
  Se = e(
    "path",
    {
      d: "M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z",
    },
    null,
    -1
  ),
  Fe = [Se];
function He(o, t) {
  return r(), n("svg", Ve, Fe);
}
var Ze = i(Ae, [["render", He]]);
const qe = {},
  Ne = {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
  },
  Oe = e(
    "g",
    { "fill-rule": "evenodd", transform: "translate(-446 -350)" },
    [
      e("g", { "fill-rule": "nonzero" }, [
        e("path", {
          d: "M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z",
          transform: "translate(354.5 159.5)",
        }),
        e("path", {
          d: "M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z",
          transform: "translate(354.5 159.5)",
        }),
      ]),
    ],
    -1
  ),
  Pe = [Oe];
function De(o, t) {
  return r(), n("svg", Ne, Pe);
}
var y = i(qe, [["render", De]]);
const Ie = { class: "flex items-center gap-1 sm:gap-2 justify-end px-4" },
  Ee = e(
    "div",
    {
      id: "friends-box",
      class:
        "min-w-max px-3 rounded-full h-9 items-center justify-center bg-myGray-200 cursor-pointer hover:bg-myGray-250 hidden xl:flex transition-colors duration-300",
    },
    [
      e(
        "span",
        { class: "text-sm text-myGray-900 font-semibold" },
        "Find Friends"
      ),
    ],
    -1
  ),
  We = e(
    "div",
    {
      id: "pp-info",
      class:
        "items-center gap-1 rounded-full hover:bg-myGray-200 cursor-pointer py-1 px-2 hidden xl:flex transition-colors duration-300",
    },
    [
      e("div", { id: "pp", class: "rounded-full overflow-hidden w-7" }, [
        e("img", { src: x, alt: "" }),
      ]),
      e("span", { class: "text-sm font-semibold text-myGray-900" }, "Elliot"),
    ],
    -1
  ),
  Re = {
    id: "menu-box",
    class:
      "p-3 text-myGray-900 bg-myGray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-myGray-250 transition-colors duration-300",
  },
  Qe = {
    id: "messenger-box",
    class:
      "p-3 text-myGray-900 bg-myGray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-myGray-250 transition-colors duration-300",
  },
  Te = {
    id: "notifications-box",
    class:
      "p-3 text-myGray-900 bg-myGray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-myGray-250 transition-colors duration-300",
  },
  Je = {
    id: "account-box",
    class:
      "p-3 text-myGray-900 bg-myGray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-myGray-250 transition-colors duration-300",
  },
  Ke = {
    setup(o) {
      return (t, a) => (
        r(),
        n("div", Ie, [
          Ee,
          We,
          e("div", Re, [
            s($, { class: "w-5 hidden lg:block" }),
            s(y, { class: "w-5 block lg:hidden" }),
          ]),
          e("div", Qe, [s(Ce, { class: "w-5" })]),
          e("div", Te, [s(Be, { class: "w-5" })]),
          e("div", Je, [s(Ze, { class: "w-5" })]),
        ])
      );
    },
  };
const Ue = {
    class:
      "w-full h-14 bg-myGray-150 border-b border-myGray-250 grid grid-cols-2 md:grid-cols-3 items-center z-50",
  },
  Xe = {
    id: "mid",
    class:
      "m-auto h-full flex items-center justify-center gap-2 hidden md:flex",
  },
  Ye = {
    id: "svg-home-box",
    class:
      "lg:w-40 h-full text-face-blue flex items-center justify-center border-b-2 border-face-blue cursor-pointer",
  },
  et = {
    id: "svg-groups-box",
    class:
      "lg:w-40 h-12 text-myGray-700 flex items-center justify-center cursor-pointer hover:bg-myGray-250 rounded-lg transition-colors duration-300",
  },
  tt = {
    id: "svg-more-box",
    class:
      "lg:w-40 h-12 text-myGray-700 flex items-center justify-center cursor-pointer hover:bg-myGray-250 rounded-lg lg:hidden transition-colors duration-300",
  },
  st = {
    setup(o) {
      return (t, a) => (
        r(),
        n("div", Ue, [
          s(me, { class: "z-20" }),
          e("div", Xe, [
            e("div", Ye, [s(H, { class: "w-7" })]),
            e("div", et, [s(D, { class: "w-7" })]),
            e("div", tt, [s(T, { class: "w-7" })]),
          ]),
          s(Ke),
        ])
      );
    },
  },
  ot = [
    { title: "Elliot Anderson", route: "./assets/images/pp.jpg" },
    { title: "Friends", route: "./assets/images/png/friends.png" },
    { title: "Groups", route: "./assets/images/png/groups.png" },
    { title: "Marketplace", route: "./assets/images/png/marketplace.png" },
    { title: "Watch", route: "./assets/images/png/watch.png" },
    { title: "Memories", route: "./assets/images/png/memories.png" },
    { title: "Saved", route: "./assets/images/png/saved.png" },
    { title: "Pages", route: "./assets/images/png/pages.png" },
    { title: "Events", route: "./assets/images/png/events.png" },
    { title: "Jobs", route: "./assets/images/png/jobs.png" },
    { title: "Most Recent", route: "./assets/images/png/mostRecent.png" },
  ],
  rt = {},
  nt = {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
  },
  ct = e(
    "g",
    { "fill-rule": "evenodd", transform: "translate(-448 -544)" },
    [
      e("path", {
        "fill-rule": "nonzero",
        d: "M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z",
      }),
    ],
    -1
  ),
  it = [ct];
function lt(o, t) {
  return r(), n("svg", nt, it);
}
var at = i(rt, [["render", lt]]);
const dt = {},
  ut = { class: "text-myGray-700 text-xs pl-1 mb-14" },
  _t = m(
    '<a class="hover:underline cursor-pointer">Privacy</a>\xB7 <a class="hover:underline cursor-pointer">Terms</a>\xB7 <a class="hover:underline cursor-pointer">Adversiting</a>\xB7 <a class="hover:underline cursor-pointer">Ad Choices</a>\xB7 <a class="hover:underline cursor-pointer">Cookies</a>\xB7<br><a class="cursor-pointer">More</a>\xB7 <a>Burkay \xA9 2021</a>',
    14
  ),
  pt = [_t];
function mt(o, t) {
  return r(), n("div", ut, pt);
}
var ht = i(dt, [["render", mt]]);
const ft = {
    class:
      "flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-150 transition-color duration-300",
  },
  vt = ["src"],
  gt = { class: "text-myGray-800 font-bold text-tiny" },
  xt = {
    props: { item: Object },
    setup(o) {
      const t = o;
      return (a, l) => (
        r(),
        n("li", ft, [
          e(
            "img",
            { src: t.item.route, class: "rounded-full w-9", alt: "" },
            null,
            8,
            vt
          ),
          e("span", gt, _(t.item.title), 1),
        ])
      );
    },
  },
  yt = {
    class:
      "bg-myGray-100 h-screen px-2 py-4 flex-col justify-between hidden xl:flex",
  },
  wt = { id: "left-bar-top", class: "w-full" },
  $t = {
    class:
      "flex items-center gap-2 p-2 w-full cursor-pointer rounded-lg hover:bg-myGray-150 transition-color duration-300",
  },
  bt = {
    id: "svg-see-more-box",
    class: "p-2 rounded-full bg-myGray-200 flex items-center justify-center",
  },
  Gt = e(
    "span",
    { class: "text-myGray-800 font-bold text-base" },
    " See more ",
    -1
  ),
  Ct = { id: "privacy", class: "w-full hidden 2xl:block" },
  Mt = {
    setup(o) {
      return (t, a) => (
        r(),
        n("div", yt, [
          e("div", wt, [
            (r(!0),
            n(
              v,
              null,
              g(
                u(ot),
                (l, c) => (
                  r(),
                  n("ul", { key: c }, [s(xt, { item: l }, null, 8, ["item"])])
                )
              ),
              128
            )),
            e("div", $t, [
              e("div", bt, [s(at, { class: "w-5 text-myGray-800" })]),
              Gt,
            ]),
          ]),
          e("div", Ct, [s(ht)]),
        ])
      );
    },
  },
  Lt = {},
  zt = {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
  },
  kt = e(
    "g",
    { "fill-rule": "evenodd", transform: "translate(-448 -544)" },
    [
      e("path", {
        d: "M457.25 552.5H455v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25a.75.75 0 0 1 1.5 0V551h2.25a.75.75 0 0 1 0 1.5m6.38-4.435a.62.62 0 0 0-.64.047l-2.49 1.634v-1.394a1.854 1.854 0 0 0-1.852-1.852l-8.796.002a1.854 1.854 0 0 0-1.851 1.852v6.793c0 1.021.83 1.852 1.852 1.852l1.147-.002h7.648a1.854 1.854 0 0 0 1.852-1.851v-1.392l2.457 1.61a.641.641 0 0 0 .673.071.663.663 0 0 0 .37-.601v-6.167c0-.26-.142-.49-.37-.602",
      }),
    ],
    -1
  ),
  jt = [kt];
function Bt(o, t) {
  return r(), n("svg", zt, jt);
}
var At = i(Lt, [["render", Bt]]);
const Vt = {},
  St = {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
  },
  Ft = e(
    "g",
    { "fill-rule": "evenodd", transform: "translate(-446 -350)" },
    [
      e("path", {
        d: "M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0",
      }),
    ],
    -1
  ),
  Ht = [Ft];
function Zt(o, t) {
  return r(), n("svg", St, Ht);
}
var b = i(Vt, [["render", Zt]]);
const G = [
    {
      name: "Angela Moss",
      route: "./assets/images/angela-pp.jpg",
      post: {
        title:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore assumenda nulla temporibus ea ",
        pictures: "https://picsum.photos/300/",
        like: "128",
        comment: {
          name: "Tyrell Wellick",
          route: "./assets/images/tyrell-pp.jpg",
          text: "Lorem ipsum dolor.",
        },
      },
    },
    {
      name: "Tyrell Wellick",
      route: "./assets/images/tyrell-pp.jpg",
      post: {
        title:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore assumenda nulla temporibus ea tempore nihil praesentium necessitatibus vel quia!",
        pictures: "https://picsum.photos/200",
        like: "63",
        comment: {
          name: "Angela Moss",
          route: "./assets/images/angela-pp.jpg",
          text: "Lorem ipsum dolor sit amet consectetur.",
        },
      },
    },
    {
      name: "Darlene Alderson",
      route: "./assets/images/darlene-pp.jpg",
      post: {
        title:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore assumenda nulla temporibus ea tempore nihil praesentium necessitatibus vel quia!",
        pictures: "https://picsum.photos/250",
        like: "99",
        comment: {
          name: "DiPierro",
          route: "./assets/images/dominique-pp.jpg",
          text: "Lorem ipsum dolor sit amet.",
        },
      },
    },
    {
      name: "Dominique DiPierro",
      route: "./assets/images/dominique-pp.jpg",
      post: {
        title:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore assumenda nulla temporibus ea tempore nihil praesentium necessitatibus vel quia!",
        pictures: "https://picsum.photos/350",
        like: "135",
        comment: {
          name: "Darlene Alderson",
          route: "./assets/images/darlene-pp.jpg",
          text: "Lorem ipsum.",
        },
      },
    },
  ],
  qt = { class: "bg-myGray-100 h-screen px-5 py-5 hidden w-80 lg:block" },
  Nt = {
    id: "contacts",
    class: "w-full flex items-center justfiy-between text-myGray-800",
  },
  Ot = e(
    "span",
    { class: "flex-1 font-semibold text-base pl-5" },
    "Contacts",
    -1
  ),
  Pt = { id: "contact-buttons", class: "flex gap-1" },
  Dt = {
    class:
      "p-2 rounded-full hover:bg-myGray-200 cursor-pointer transition-colors duration-300",
  },
  It = {
    class:
      "p-2 rounded-full hover:bg-myGray-200 cursor-pointer transition-colors duration-300",
  },
  Et = {
    class:
      "p-2 rounded-full hover:bg-myGray-200 cursor-pointer transition-colors duration-300",
  },
  Wt = { id: "firends", class: "border-b border-myGray-250" },
  Rt = {
    class:
      "flex items-center gap-3 text-myGray-800 font-bold text-tiny cursor-pointer hover:bg-myGray-150 rounded-lg my-2 px-3 py-2 transition-colors duration-300",
  },
  Qt = ["src"],
  Tt = { id: "group-conversation", class: "mt-2" },
  Jt = e(
    "div",
    { class: "my-4 font-semibold text-base text-myGray-650 px-3" },
    " Group conversations ",
    -1
  ),
  Kt = {
    class:
      "flex items-center gap-3 w-full cursor-pointer hover:bg-myGray-150 p-3 rounded-lg transition-colors duration-300",
  },
  Ut = {
    id: "svg-box",
    class: "p-2 rounded-full bg-myGray-200 text-myGray-800",
  },
  Xt = e(
    "span",
    { class: "text-myGray-800 font-semibold text-tiny" },
    "Create New Group",
    -1
  ),
  Yt = {
    setup(o) {
      return (t, a) => (
        r(),
        n("div", qt, [
          e("div", Nt, [
            Ot,
            e("div", Pt, [
              e("div", Dt, [s(At, { class: "w-4" })]),
              e("div", It, [s(w, { class: "w-4" })]),
              e("div", Et, [s(b, { class: "w-4" })]),
            ]),
          ]),
          e("div", Wt, [
            (r(!0),
            n(
              v,
              null,
              g(
                u(G),
                (l, c) => (
                  r(),
                  n("ul", { key: c }, [
                    e("li", Rt, [
                      e(
                        "img",
                        {
                          src: l.route,
                          class: "w-10 h-10 rounded-full",
                          alt: "",
                        },
                        null,
                        8,
                        Qt
                      ),
                      e("span", null, _(l.name), 1),
                    ]),
                  ])
                )
              ),
              128
            )),
          ]),
          e("div", Tt, [
            Jt,
            e("div", Kt, [e("div", Ut, [s(y, { class: "w-5" })]), Xt]),
          ]),
        ])
      );
    },
  },
  es = {},
  ts = {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
  },
  ss = e(
    "g",
    { "fill-rule": "evenodd", transform: "translate(-444 -156)" },
    [
      e("g", null, [
        e("path", {
          d: "M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z",
          transform: "translate(354 158.5)",
        }),
        e("path", {
          d: "M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5",
          transform: "translate(354 158.5)",
        }),
      ]),
    ],
    -1
  ),
  os = [ss];
function rs(o, t) {
  return r(), n("svg", ts, os);
}
var C = i(es, [["render", rs]]);
const ns = {},
  cs = {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
  },
  is = e(
    "g",
    { "fill-rule": "evenodd", transform: "translate(-444 -156)" },
    [
      e("g", null, [
        e("path", {
          d: "m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z",
          transform: "translate(352 156.5)",
        }),
        e("path", {
          "fill-rule": "nonzero",
          d: "m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z",
          transform: "translate(352 156.5)",
        }),
      ]),
    ],
    -1
  ),
  ls = [is];
function as(o, t) {
  return r(), n("svg", cs, ls);
}
var M = i(ns, [["render", as]]);
const ds = {},
  us = {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
  },
  _s = e(
    "g",
    { "fill-rule": "evenodd", transform: "translate(-444 -156)" },
    [
      e("g", null, [
        e("path", {
          d: "M107.285 13c.49 0 .841.476.712.957-.623 2.324-2.837 4.043-5.473 4.043-2.636 0-4.85-1.719-5.473-4.043-.13-.48.222-.957.712-.957h9.522z",
          transform: "translate(353.5 156.5)",
        }),
        e("path", {
          "fill-rule": "nonzero",
          d: "M114.024 11.5c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5S96.173 0 102.524 0s11.5 5.149 11.5 11.5zm-2 0a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0z",
          transform: "translate(353.5 156.5)",
        }),
        e("path", {
          d: "M99.524 8.5c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m8.5 0c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m-.739 4.5h-9.522c-.49 0-.841.476-.712.957.623 2.324 2.837 4.043 5.473 4.043 2.636 0 4.85-1.719 5.473-4.043.13-.48-.222-.957-.712-.957m-2.165 2c-.667.624-1.592 1-2.596 1a3.799 3.799 0 0 1-2.596-1h5.192",
          transform: "translate(353.5 156.5)",
        }),
      ]),
    ],
    -1
  ),
  ps = [_s];
function ms(o, t) {
  return r(), n("svg", us, ps);
}
var L = i(ds, [["render", ms]]);
const hs = { class: "flex flex-col gap-4" },
  fs = { id: "storie", class: "p-2 bg-myGray-150 rounded-lg" },
  vs = {
    class:
      "w-full h-18 rounded-lg py-1 px-2 flex items-center gap-3 cursor-pointer hover:bg-myGray-200 transition-colors duration-300",
  },
  gs = {
    id: "post-svg-plus",
    class: "p-2.5 bg-face-blue-light rounded-full cursor-pointer",
  },
  xs = e(
    "div",
    { id: "title", class: "flex flex-col" },
    [
      e("span", { class: "mobile-x:text-lg text-tiny" }, "Create Story"),
      e(
        "span",
        { class: "mobile-x:text-tiny text-xs text-myGray-600" },
        "Share a photo or write something."
      ),
    ],
    -1
  ),
  ys = {
    id: "new-post",
    class: "h-32 p-2 bg-myGray-150 rounded-lg flex flex-col justify-between",
  },
  ws = e(
    "div",
    { id: "new-post-top", class: "p-1 flex gap-3 items-center" },
    [
      e("div", { class: "_pp_ cursor-pointer" }, [
        e("img", { src: x, class: "w-10 rounded-full", alt: "" }),
      ]),
      e("input", {
        class:
          "cursor-pointer w-full bg-myGray-250 h-10 rounded-full outline-none text-tiny px-3 font-semibold placeholder-myGray-650 hover:bg-myGray-300 transition-colors duration-300 mobile-x:text-base",
        type: "text",
        name: "",
        placeholder: "What's on your mind, Elliot ?",
      }),
    ],
    -1
  ),
  $s = e("hr", { class: "mx-2 border-myGray-250" }, null, -1),
  bs = {
    id: "new-post-bottom",
    class: "flex items-center justify-around px-2 text-myGray-700",
  },
  Gs = {
    class:
      "w-full h-10 flex items-center justify-center gap-2 hover:bg-myGray-250 rounded-lg cursor-pointer transition-colors duration-300",
  },
  Cs = e("span", null, "Live Video", -1),
  Ms = {
    class:
      "w-full h-10 flex items-center justify-center gap-2 hover:bg-myGray-250 rounded-lg cursor-pointer transition-colors duration-300",
  },
  Ls = e("span", null, "Photo/video", -1),
  zs = {
    class:
      "w-full h-10 items-center justify-center gap-2 hover:bg-myGray-250 rounded-lg cursor-pointer transition-colors duration-300 hidden mobile-x:flex",
  },
  ks = e("span", null, "Feeling/activity", -1),
  js = {
    setup(o) {
      return (t, a) => (
        r(),
        n("div", hs, [
          e("div", fs, [
            e("div", vs, [
              e("div", gs, [s(y, { class: "w-5 text-face-blue" })]),
              xs,
            ]),
          ]),
          e("div", ys, [
            ws,
            $s,
            e("div", bs, [
              e("div", Gs, [s(C, { class: "w-6 text-red-500" }), Cs]),
              e("div", Ms, [s(M, { class: "w-6 text-green-500" }), Ls]),
              e("div", zs, [s(L, { class: "w-6 text-yellow-400" }), ks]),
            ]),
          ]),
        ])
      );
    },
  },
  Bs = {},
  As = { fill: "currentColor", viewBox: "0 0 16 16" },
  Vs = e(
    "g",
    { "fill-rule": "evenodd", transform: "translate(-448 -544)" },
    [
      e("g", null, [
        e("path", {
          d: "M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434",
          transform: "translate(354 143.5)",
        }),
        e("path", {
          d: "M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096",
          transform: "translate(354 143.5)",
        }),
        e("path", {
          "fill-rule": "nonzero",
          d: "M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z",
          transform: "translate(354 143.5)",
        }),
      ]),
    ],
    -1
  ),
  Ss = [Vs];
function Fs(o, t) {
  return r(), n("svg", As, Ss);
}
var Hs = i(Bs, [["render", Fs]]);
const Zs = {},
  qs = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 16 16",
  },
  Ns = m(
    '<defs><linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#18AFFF"></stop><stop offset="100%" stop-color="#0062DF"></stop></linearGradient><filter id="c" width="118.8%" height="118.8%" x="-9.4%" y="-9.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="1"></feGaussianBlur><feOffset dy="-1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0"></feColorMatrix></filter><path id="b" d="M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z"></path></defs><g fill="none"><use fill="url(#a)" xlink:href="#b"></use><use fill="black" filter="url(#c)" xlink:href="#b"></use><path fill="white" d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z"></path></g>',
    2
  ),
  Os = [Ns];
function Ps(o, t) {
  return r(), n("svg", qs, Os);
}
var Ds = i(Zs, [["render", Ps]]);
const Is = {},
  Es = {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
  },
  Ws = e(
    "path",
    {
      fill: "currentColor",
      d: "M96 191.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V223.1C128 206.3 113.7 191.1 96 191.1zM512 227c0-36.89-30.05-66.92-66.97-66.92h-99.86C354.7 135.1 360 113.5 360 100.8c0-33.8-26.2-68.78-70.06-68.78c-46.61 0-59.36 32.44-69.61 58.5c-31.66 80.5-60.33 66.39-60.33 93.47c0 12.84 10.36 23.99 24.02 23.99c5.256 0 10.55-1.721 14.97-5.26c76.76-61.37 57.97-122.7 90.95-122.7c16.08 0 22.06 12.75 22.06 20.79c0 7.404-7.594 39.55-25.55 71.59c-2.046 3.646-3.066 7.686-3.066 11.72c0 13.92 11.43 23.1 24 23.1h137.6C455.5 208.1 464 216.6 464 227c0 9.809-7.766 18.03-17.67 18.71c-12.66 .8593-22.36 11.4-22.36 23.94c0 15.47 11.39 15.95 11.39 28.91c0 25.37-35.03 12.34-35.03 42.15c0 11.22 6.392 13.03 6.392 22.25c0 22.66-29.77 13.76-29.77 40.64c0 4.515 1.11 5.961 1.11 9.456c0 10.45-8.516 18.95-18.97 18.95h-52.53c-25.62 0-51.02-8.466-71.5-23.81l-36.66-27.51c-4.315-3.245-9.37-4.811-14.38-4.811c-13.85 0-24.03 11.38-24.03 24.04c0 7.287 3.312 14.42 9.596 19.13l36.67 27.52C235 468.1 270.6 480 306.6 480h52.53c35.33 0 64.36-27.49 66.8-62.2c17.77-12.23 28.83-32.51 28.83-54.83c0-3.046-.2187-6.107-.6406-9.122c17.84-12.15 29.28-32.58 29.28-55.28c0-5.311-.6406-10.54-1.875-15.64C499.9 270.1 512 250.2 512 227z",
    },
    null,
    -1
  ),
  Rs = [Ws];
function Qs(o, t) {
  return r(), n("svg", Es, Rs);
}
var Ts = i(Is, [["render", Qs]]);
const Js = {},
  Ks = {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
  },
  Us = e(
    "path",
    {
      fill: "currentColor",
      d: "M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z",
    },
    null,
    -1
  ),
  Xs = [Us];
function Ys(o, t) {
  return r(), n("svg", Ks, Xs);
}
var e1 = i(Js, [["render", Ys]]);
const t1 = {
    class:
      "w-full bg-myGray-150 my-4 rounded-lg transition-colors duration-300",
  },
  s1 = {
    id: "post-top",
    class: "w-full flex items-center justify-between p-4",
  },
  o1 = { id: "post-top_left", class: "flex items-center gap-4" },
  r1 = {
    id: "post-top_left_pp",
    class:
      "ring-2 ring-blue-500 ring-opacity-70 border-2 border-black w-max rounded-full cursor-pointer",
  },
  n1 = ["src"],
  c1 = { id: "post-top_left_title" },
  i1 = { class: "hover:underline cursor-pointer" },
  l1 = { class: "flex text-xs text-myGray-500 mt-1 items-center" },
  a1 = e("span", { class: "hover:underline cursor-pointer" }, "3d", -1),
  d1 = e("span", { class: "mx-1" }, "\xB7", -1),
  u1 = {
    id: "post-top_right",
    class:
      "p-2 rounded-full hover:bg-myGray-200 cursor-pointer transition-colors duration-300",
  },
  _1 = { id: "post-middle" },
  p1 = { class: "px-3 font-normal leading-5 text-sm" },
  m1 = ["src"],
  h1 = { id: "post-bottom", class: "px-4 py-2 text-sm font-normal" },
  f1 = { id: "post-bottom_info", class: "flex items-center justify-between" },
  v1 = { id: "info_left", class: "flex gap-2 cursor-pointer" },
  g1 = { class: "hover:underline" },
  x1 = e(
    "div",
    { id: "info_right" },
    [e("span", { class: "hover:underline cursor-pointer" }, "1 Comment")],
    -1
  ),
  y1 = {
    id: "post-bottom_buttons",
    class:
      "text-myGray-600 font-bold text-sm sm:text-tiny flex items-center my-2 border-b border-t border-myGray-300",
  },
  w1 = {
    class:
      "flex gap-2 w-full items-center justify-center p-2 hover:bg-myGray-250 cursor-pointer rounded-lg my-1 transition-colors duration-300",
  },
  $1 = e("span", null, "Like", -1),
  b1 = {
    class:
      "flex gap-2 w-full items-center justify-center p-2 hover:bg-myGray-250 cursor-pointer rounded-lg my-1 transition-colors duration-300",
  },
  G1 = e("span", null, "Comment", -1),
  C1 = { id: "post-bottom-comments" },
  M1 = { id: "other", class: "flex gap-2 my-4" },
  L1 = { id: "other_pp" },
  z1 = ["src"],
  k1 = { id: "other_comment" },
  j1 = { class: "py-2 px-3 bg-myGray-200 rounded-2xl" },
  B1 = {
    id: "commnet-name",
    class: "cursor-pointer hover:underline font-bold text-xs",
  },
  A1 = { id: "comment-title" },
  V1 = m(
    '<div class="px-3 text-xs mt-1"><span class="cursor-pointer hover:underline">Like</span> \xB7 <span class="cursor-pointer hover:underline">Reply</span> \xB7 <span class="cursor-pointer hover:underline">Share</span> \xB7 <span class="cursor-pointer hover:underline">2d</span></div>',
    1
  ),
  S1 = { id: "me", class: "flex w-full gap-2" },
  F1 = e(
    "img",
    { src: x, class: "w-9 h-9 rounded-full cursor-pointer", alt: "" },
    null,
    -1
  ),
  H1 = { class: "flex w-full flex-col" },
  Z1 = { id: "me_comment", class: "flex w-full bg-myGray-200 rounded-2xl" },
  q1 = e(
    "input",
    {
      class: "w-full bg-transparent px-3 outline-none",
      type: "text",
      placeholder: "Write a public comment...",
    },
    null,
    -1
  ),
  N1 = { id: "me_comment_buttons", class: "flex items-center" },
  O1 = {
    class:
      "p-2 hover:bg-myGray-300 rounded-full cursor-pointer transition-colors duration-300",
  },
  P1 = {
    class:
      "p-2 hover:bg-myGray-300 rounded-full cursor-pointer transition-colors duration-300",
  },
  D1 = {
    class:
      "p-2 hover:bg-myGray-300 rounded-full cursor-pointer transition-colors duration-300",
  },
  I1 = {
    class:
      "p-2 hover:bg-myGray-300 rounded-full cursor-pointer transition-colors duration-300",
  },
  E1 = e("span", { class: "text-xs" }, "Press Enter the post", -1),
  W1 = {
    props: { user: Object },
    setup(o) {
      const t = o;
      return (a, l) => (
        r(),
        n("li", t1, [
          e("div", s1, [
            e("div", o1, [
              e("div", r1, [
                e(
                  "img",
                  { src: t.user.route, class: "w-8 h-8 rounded-full", alt: "" },
                  null,
                  8,
                  n1
                ),
              ]),
              e("div", c1, [
                e("p", i1, _(t.user.name), 1),
                e("p", l1, [a1, d1, s(Hs, { class: "w-3" })]),
              ]),
            ]),
            e("div", u1, [s(b, { class: "w-4" })]),
          ]),
          e("div", _1, [
            e("p", p1, _(t.user.post.title), 1),
            e(
              "img",
              { src: o.user.post.pictures, class: "w-full my-2", alt: "" },
              null,
              8,
              m1
            ),
          ]),
          e("div", h1, [
            e("div", f1, [
              e("div", v1, [
                s(Ds, { class: "w-5" }),
                e("span", g1, _(t.user.post.like), 1),
              ]),
              x1,
            ]),
            e("div", y1, [
              e("div", w1, [s(Ts, { class: "w-5" }), $1]),
              e("div", b1, [s(e1, { class: "w-5" }), G1]),
            ]),
            e("div", C1, [
              e("div", M1, [
                e("div", L1, [
                  e(
                    "img",
                    {
                      src: t.user.post.comment.route,
                      class: "w-9 h-9 rounded-full cursor-pointer",
                      alt: "",
                    },
                    null,
                    8,
                    z1
                  ),
                ]),
                e("div", k1, [
                  e("div", j1, [
                    e("div", B1, _(t.user.post.comment.name), 1),
                    e("div", A1, _(t.user.post.comment.text), 1),
                  ]),
                  V1,
                ]),
              ]),
              e("div", S1, [
                F1,
                e("div", H1, [
                  e("div", Z1, [
                    q1,
                    e("div", N1, [
                      e("div", O1, [s(L, { class: "w-4 text-myGray-600" })]),
                      e("div", P1, [s(C, { class: "w-4 text-myGray-600" })]),
                      e("div", D1, [s($, { class: "w-4 text-myGray-600" })]),
                      e("div", I1, [s(M, { class: "w-4 text-myGray-600" })]),
                    ]),
                  ]),
                  E1,
                ]),
              ]),
            ]),
          ]),
        ])
      );
    },
  },
  R1 = {
    setup(o) {
      return (t, a) => (
        r(!0),
        n(
          v,
          null,
          g(
            u(G),
            (l, c) => (
              r(), n("ul", { key: c }, [s(W1, { user: l }, null, 8, ["user"])])
            )
          ),
          128
        )
      );
    },
  },
  Q1 = {
    class:
      "h-auto desktop:w-180 laptop:w-160 lg:w-160 sm:w-140 w-full sm:m-auto p-1 text-xs text-myGray-800 font-semibold mobile-x:text-tiny mobile-x:p-8",
  },
  T1 = {
    setup(o) {
      return (t, a) => (r(), n("div", Q1, [s(js), s(R1)]));
    },
  },
  J1 = {},
  K1 = {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
  },
  U1 = e(
    "path",
    {
      fill: "currentColor",
      d: "M383.1 448H63.1V128h156.1l64-64H63.1C28.65 64 0 92.65 0 128v320c0 35.35 28.65 64 63.1 64h319.1c35.34 0 63.1-28.65 63.1-64l-.0039-220.1l-63.1 63.99V448zM497.9 42.19l-28.13-28.14c-18.75-18.75-49.14-18.75-67.88 0l-38.62 38.63l96.01 96.01l38.62-38.63C516.7 91.33 516.7 60.94 497.9 42.19zM147.3 274.4l-19.04 95.22c-1.678 8.396 5.725 15.8 14.12 14.12l95.23-19.04c4.646-.9297 8.912-3.213 12.26-6.562l186.8-186.8l-96.01-96.01L153.8 262.2C150.5 265.5 148.2 269.8 147.3 274.4z",
    },
    null,
    -1
  ),
  X1 = [U1];
function Y1(o, t) {
  return r(), n("svg", K1, X1);
}
var eo = i(J1, [["render", Y1]]);
const to = {
    class:
      "p-4 flex items-center justify-center rounded-full bg-myGray-250 fixed right-5 bottom-5 cursor-pointer hover:bg-myGray-300 transition-colors duration-300",
  },
  so = {
    setup(o) {
      return (t, a) => (
        r(), n("div", to, [s(eo, { class: "w-5 text-myGray-800" })])
      );
    },
  },
  oo = { class: "bg-myGray-100 w-full h-full font-face" },
  ro = { class: "relative w-full h-14" },
  no = { class: "absolute top-0 w-full h-full" },
  co = { class: "flex gap-5" },
  io = { class: "relative w-80 hidden xl:block" },
  lo = { class: "absolute" },
  ao = { class: "flex-1" },
  uo = { class: "relative w-80 hidden lg:block" },
  _o = { class: "absolute" },
  po = {
    setup(o) {
      return (t, a) => (
        r(),
        n("div", oo, [
          e("div", ro, [e("div", no, [s(st, { class: "fixed" })])]),
          e("div", co, [
            e("div", io, [e("div", lo, [s(Mt, { class: "fixed w-80" })])]),
            e("div", ao, [s(T1)]),
            e("div", uo, [e("div", _o, [s(Yt, { class: "fixed" })])]),
          ]),
          s(so),
        ])
      );
    },
  },
  mo = {
    setup(o) {
      return (t, a) => (r(), n("div", null, [s(po)]));
    },
  };
k(mo).mount("#app");
