// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"icZzK":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _difference = require("./js/modules/difference");
var _differenceDefault = parcelHelpers.interopDefault(_difference);
var _download = require("./js/modules/download");
var _downloadDefault = parcelHelpers.interopDefault(_download);
var _form = require("./js/modules/form");
var _formDefault = parcelHelpers.interopDefault(_form);
var _playVideo = require("./js/modules/playVideo");
var _playVideoDefault = parcelHelpers.interopDefault(_playVideo);
var _showInfo = require("./js/modules/showInfo");
var _showInfoDefault = parcelHelpers.interopDefault(_showInfo);
var _sliderMain = require("./js/modules/slider/slider-main");
var _sliderMainDefault = parcelHelpers.interopDefault(_sliderMain);
var _sliderMini = require("./js/modules/slider/slider-mini");
var _sliderMiniDefault = parcelHelpers.interopDefault(_sliderMini);
window.addEventListener("DOMContentLoaded", ()=>{
    const moduleSlider = new (0, _sliderMainDefault.default)({
        container: ".moduleapp",
        btns: ".next"
    });
    moduleSlider.render();
    const slider = new (0, _sliderMainDefault.default)({
        btns: ".next",
        container: ".page"
    });
    slider.render();
    new (0, _playVideoDefault.default)(".showup .play", ".overlay").init();
    new (0, _playVideoDefault.default)(".module__video-item .play", ".overlay").init();
    const showUpSlider = new (0, _sliderMiniDefault.default)({
        container: ".showup__content-slider",
        prev: ".showup__prev",
        next: ".showup__next",
        activeClass: "card-active",
        animate: true,
        autoplay: true
    });
    showUpSlider.init();
    const modulesSlider = new (0, _sliderMiniDefault.default)({
        container: ".modules__content-slider",
        prev: ".modules__info-btns .slick-prev",
        next: ".modules__info-btns .slick-next",
        activeClass: "card-active",
        animate: true,
        autoplay: true
    });
    modulesSlider.init();
    const feedSlider = new (0, _sliderMiniDefault.default)({
        container: ".feed__slider",
        prev: ".feed__slider .slick-prev",
        next: ".feed__slider .slick-next",
        activeClass: "feed__item-active",
        autoplay: true,
        animate: false
    });
    feedSlider.init();
    new (0, _differenceDefault.default)(".officerold", ".officernew", ".officer__card-item").init();
    new (0, _formDefault.default)(".form").init();
    new (0, _showInfoDefault.default)(".plus__content").init();
    new (0, _downloadDefault.default)(".download").init();
});

},{"./js/modules/difference":"lv4ll","./js/modules/download":"htTtT","./js/modules/form":"gyZuc","./js/modules/playVideo":"invM5","./js/modules/showInfo":"k05MH","./js/modules/slider/slider-main":"6i5fQ","./js/modules/slider/slider-mini":"hlUl8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lv4ll":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Difference {
    constructor(oldOfficer, newOfficer, items){
        try {
            this.oldOfficer = document.querySelector(oldOfficer);
            this.newOfficer = document.querySelector(newOfficer);
            this.newItems = this.newOfficer.querySelectorAll(items);
            this.oldItems = this.oldOfficer.querySelectorAll(items);
            this.items = items;
            this.oldCounter = 0;
            this.newCounter = 0;
        } catch (error) {}
    }
    bindTriggers(container, items, counter) {
        container.querySelector(".plus").addEventListener("click", ()=>{
            if (counter !== items.length - 2) {
                items[counter].style.display = "flex";
                counter++;
            } else {
                items[counter].style.display = "flex";
                items[items.length - 1].remove();
            }
        });
    }
    hideItems(items) {
        items.forEach((item, i, arr)=>{
            if (i !== arr.length - 1) item.style.display = "none";
        });
    }
    init() {
        try {
            this.hideItems(this.oldItems);
            this.hideItems(this.newItems);
            this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
            this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
        } catch (error) {}
    }
}
exports.default = Difference;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"htTtT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class DownLoad {
    constructor(triggers){
        this.btn = document.querySelectorAll(triggers);
        this.path = "assets/img/mainbg.jpg";
    }
    downloadItem(path) {
        const elem = document.createElement("a");
        elem.setAttribute("href", path);
        elem.setAttribute("download", "nice_picture");
        elem.style.display = "none";
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }
    init() {
        this.btn.forEach((item)=>{
            item.addEventListener("click", (e)=>{
                e.preventDefault();
                e.stopPropagation();
                this.downloadItem(this.path);
            });
        });
    }
}
exports.default = DownLoad;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gyZuc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Form {
    constructor(forms){
        this.forms = document.querySelectorAll(forms);
        this.inputs = document.querySelectorAll("input");
        this.message = {
            loading: "Loading....",
            success: "Thanks!",
            failure: "Error....."
        };
        this.path = "assets/question.php";
    }
    checkMailInputs() {
        const mailInputs = document.querySelectorAll('[type="email"]');
        mailInputs.forEach((input)=>{
            input.addEventListener("keypress", function(e) {
                if (e.key.match(/[^a-z 0-9 @ \.]/gi)) e.preventDefault();
            });
        });
    }
    clearInputs() {
        this.inputs.forEach((item)=>{
            item.value = "";
        });
    }
    async postData(url, data) {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });
        return await res.text();
    }
    initMask() {
        let setCursorPosition = (pos, elem)=>{
            elem.focus();
            if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
            else if (elem.createTextRange) {
                let range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd("character", pos);
                range.moveStart("character", pos);
                range.select();
            }
        };
        function createMask(event) {
            let matrix = "+1 (___) ___-____", i = 0, def = matrix.replace(/\D/g, ""), val = this.value.replace(/\D/g, "");
            if (def.length >= val.length) val = def;
            this.value = matrix.replace(/./g, function(a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
            });
            if (event.type === "blur") {
                if (this.value.length == 2) this.value = "";
            } else setCursorPosition(this.value.length, this);
        }
        let inputs = document.querySelectorAll('[name="phone"]');
        inputs.forEach((input)=>{
            input.addEventListener("input", createMask);
            input.addEventListener("keypress", createMask);
            input.addEventListener("focus", createMask);
            input.addEventListener("blur", createMask);
        });
    }
    init() {
        this.initMask();
        this.checkMailInputs();
        this.forms.forEach((item)=>{
            item.addEventListener("submit", (e)=>{
                e.preventDefault();
                let statusMessage = document.createElement("div");
                statusMessage.style.cssText = `
         margin-top:15px;
         font-size:18px;
         color:gray;`;
                item.parentNode.appendChild(statusMessage);
                statusMessage.textContent = this.message.loading;
                const formData = new FormData(item);
                this.postData(this.path, formData).then((res)=>{
                    console.log(res);
                    statusMessage.textContent = this.message.success;
                }).catch(()=>{
                    statusMessage.textContent = this.message.failure;
                }).finally(()=>{
                    this.clearInputs();
                    setTimeout(()=>{
                        statusMessage.remove();
                    }, 6000);
                });
            });
        });
    }
}
exports.default = Form;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"invM5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class VideoPlayer {
    constructor(triggers, overlay){
        this.btn = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector(".close");
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    }
    bindTriggers() {
        this.btn.forEach((btn, i)=>{
            try {
                const blockedElem = btn.closest(".module__video-item").nextElementSibling;
                if (i % 2 === 0) blockedElem.setAttribute("data-disabled", "true");
            } catch (error) {}
            btn.addEventListener("click", ()=>{
                if (!btn.closest(".module__video-item") || btn.closest(".module__video-item").getAttribute("data-disabled") !== "true") {
                    this.activeBtn = btn;
                    if (document.querySelector("iframe#frame")) {
                        this.overlay.style.display = "flex";
                        if (this.path !== btn.getAttribute("data-url")) {
                            this.path = btn.getAttribute("data-url");
                            this.player.loadVideoById({
                                videoId: this.path
                            });
                        }
                    } else {
                        this.path = btn.getAttribute("data-url");
                        this.createPlayer(this.path);
                    }
                }
            });
        });
    }
    bindCloseBtn() {
        this.close.addEventListener("click", ()=>{
            this.overlay.style.display = "none";
            this.player.stopVideo();
        });
    }
    createPlayer(url) {
        this.player = new YT.Player("frame", {
            height: "100%",
            width: "100%",
            videoId: `${url}`,
            events: {
                onStateChange: this.onPlayerStateChange
            }
        });
        this.overlay.style.display = "flex";
    }
    onPlayerStateChange(state) {
        try {
            const blockedElem = this.activeBtn.closest(".module__video-item").nextElementSibling;
            const playBtn = this.activeBtn.querySelector("svg").cloneNode(true);
            if (state.data === 0) {
                if (blockedElem.querySelector(".play__circle").classList.contains("closed")) {
                    blockedElem.querySelector(".play__circle").classList.remove("closed");
                    blockedElem.querySelector("svg").remove();
                    blockedElem.querySelector(".play__circle").appendChild(playBtn);
                    blockedElem.querySelector(".play__text").textContent = "play video";
                    blockedElem.querySelector(".play__text").classList.remove("attention");
                    blockedElem.style.opacity = 1;
                    blockedElem.style.filter = "none";
                    blockedElem.setAttribute("data-disabled", "false");
                }
            }
        } catch (error) {}
    }
    init() {
        if (this.btn.length > 0) {
            const tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            this.bindTriggers();
            this.bindCloseBtn();
        }
    }
}
exports.default = VideoPlayer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k05MH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class ShowInfo {
    constructor(triggers){
        this.btns = document.querySelectorAll(triggers);
    }
    init() {
        this.btns.forEach((btn)=>{
            btn.addEventListener("click", ()=>{
                const sibling = btn.closest(".module__info-show").nextElementSibling;
                sibling.classList.toggle("msg");
                sibling.style.marginTop = "20px";
            });
        });
    }
}
exports.default = ShowInfo;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6i5fQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _slider = require("./slider");
var _sliderDefault = parcelHelpers.interopDefault(_slider);
class MainSlider extends (0, _sliderDefault.default) {
    constructor(btns){
        super(btns);
    }
    showSlides(n) {
        const slidesArray = Array.from(this.slides);
        if (n > slidesArray.length) this.slideIndex = 1;
        if (n < 1) this.slideIndex = slidesArray.length;
        try {
            this.hanson.style.opacity = "0";
            if (n === 3) {
                this.hanson.classList.add("animated");
                setTimeout(()=>{
                    this.hanson.style.opacity = "1";
                    this.hanson.classList.add("animated", "slideInUp");
                }, 3000);
            } else this.hanson.classList.remove("slideInUp");
        } catch (error) {}
        slidesArray.forEach((slide)=>{
            slide.style.display = "none";
            slide.classList.remove("animated", "fadeIn");
        });
        slidesArray[this.slideIndex - 1].style.display = "block";
        slidesArray[this.slideIndex - 1].classList.add("animated", "fadeIn");
    }
    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }
    bindTriggers() {
        this.btns.forEach((item)=>{
            item.addEventListener("click", ()=>{
                this.plusSlides(1);
            });
            item.parentNode.previousElementSibling.addEventListener("click", (e)=>{
                e.preventDefault();
                this.slideIndex = 1;
            });
        });
        this.showSlides(this.slideIndex);
        document.querySelectorAll(".prevmodule").forEach((item)=>{
            item.addEventListener("click", (e)=>{
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(-1);
            });
        });
        document.querySelectorAll(".nextmodule").forEach((item)=>{
            item.addEventListener("click", (e)=>{
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(1);
            });
        });
    }
    render() {
        if (this.container) {
            try {
                this.hanson = document.querySelector(".hanson");
            } catch (error) {}
            this.showSlides(this.slideIndex);
            this.bindTriggers();
        }
    }
}
exports.default = MainSlider;

},{"./slider":"eKpBR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eKpBR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Slider {
    constructor({ container = null, btns = null, next = null, prev = null, activeClass = "", animate, autoplay } = {}){
        this.container = document.querySelector(container);
        try {
            this.slides = this.container.children;
        } catch (e) {}
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
    }
}
exports.default = Slider;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hlUl8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _slider = require("./slider");
var _sliderDefault = parcelHelpers.interopDefault(_slider);
class MiniSlider extends (0, _sliderDefault.default) {
    constructor(container, next, prev, activeClass, animate, autoplay){
        super(container, next, prev, activeClass, animate, autoplay);
        this.paused = false;
    }
    decoratingSlides() {
        const { activeClass, animate } = this;
        const slidesArr = Array.from(this.slides);
        slidesArr.forEach((slide)=>{
            slide.classList.remove(activeClass);
            if (animate) {
                slide.querySelector(".card__title").style.opacity = "0.4";
                slide.querySelector(".card__controls-arrow").style.opacity = "0";
            }
        });
        slidesArr[0].classList.add(activeClass);
        if (animate) {
            slidesArr[0].querySelector(".card__title").style.opacity = "1";
            slidesArr[0].querySelector(".card__controls-arrow").style.opacity = "1";
        }
    }
    nextSlide() {
        const { container, slides, prev } = this;
        const slidesArr = Array.from(slides);
        if (prev.parentNode === container) container.insertBefore(slidesArr[0], prev);
        else container.appendChild(slidesArr[0]);
        this.decoratingSlides();
    }
    prevSlide() {
        const { container, slides } = this;
        for(let i = slides.length - 1; i > 0; i--)if (slides[i].tagName !== "BUTTON") {
            let active = slides[i];
            container.insertBefore(active, slides[0]);
            this.decoratingSlides();
            break;
        }
    }
    bindTriggers() {
        const { next, prev } = this;
        next.addEventListener("click", ()=>{
            this.nextSlide();
        });
        prev.addEventListener("click", ()=>{
            this.prevSlide();
        });
    }
    activateAnimation() {
        this.paused = setInterval(()=>this.nextSlide(), 3000);
    }
    init() {
        try {
            this.container.style.cssText = `
     display:flex;
     flex-wrap:wrap;
     overflow:hidden;
     align-items:flex-start;
     `;
            this.bindTriggers();
            this.decoratingSlides();
            if (this.autoplay) {
                this.container.addEventListener("mouseenter", ()=>clearInterval(this.paused));
                this.next.addEventListener("mouseenter", ()=>clearInterval(this.paused));
                this.prev.addEventListener("mouseenter", ()=>clearInterval(this.paused));
                this.container.addEventListener("mouseleave", ()=>this.activateAnimation());
                this.next.addEventListener("mouseleave", ()=>this.activateAnimation());
                this.prev.addEventListener("mouseleave", ()=>this.activateAnimation());
                this.activateAnimation();
            }
        } catch (error) {}
    }
}
exports.default = MiniSlider;

},{"./slider":"eKpBR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["icZzK","8lqZg"], "8lqZg", "parcelRequired7c6")

//# sourceMappingURL=index.975ef6c8.js.map
