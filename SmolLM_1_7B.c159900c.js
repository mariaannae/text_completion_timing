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
})({"fkBDs":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "b472b181c159900c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_USE_SSE: boolean;
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
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
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
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
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

},{}],"eVoWo":[function(require,module,exports) {
//import { max } from "@huggingface/transformers";
var _webLlm = require("@mlc-ai/web-llm");
function setLabel(id, text) {
    const label = document.getElementById(id);
    if (label == null) throw Error("Cannot find label " + id);
    label.innerText = text;
}
async function main() {
    let totalLoadTime = 0;
    const initProgressCallback = (report)=>{
        const startTime = performance.now();
        setLabel("init-label", report.text);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        totalLoadTime += executionTime;
        //console.log(`initProgressCallback execution time: ${executionTime.toFixed(2)} ms`);
        //console.log(`Total execution time so far: ${totalLoadTime.toFixed(2)} ms`);
        const timing = document.getElementById("col1");
        if (timing) timing.innerText = "Model load time: " + totalLoadTime.toFixed(2) + " ms";
        else throw Error("Cannot find element with id 'col1'");
    };
    // Unlike "Llama-3.1-8B-Instruct-q4f32_1-MLC", this is a base model
    const model_Smol1_7 = "SmolLM2-1.7B-Instruct-q4f32_1-MLC";
    const appConfig = {
        model_list: [
            {
                model: "https://huggingface.co/mlc-ai/SmolLM2-1.7B-Instruct-q4f32_1-MLC",
                model_id: model_Smol1_7,
                model_lib: _webLlm.modelLibURLPrefix + _webLlm.modelVersion + "/SmolLM2-1.7B-Instruct-q4f32_1-ctx4k_cs1k-webgpu.wasm",
                overrides: {
                    context_window_size: 4096
                }
            }
        ]
    };
    const inference_engine = await _webLlm.CreateMLCEngine(model_Smol1_7, {
        appConfig: appConfig,
        initProgressCallback: initProgressCallback,
        logLevel: "INFO"
    });
    const text1 = "Banana ";
    const startTime1 = performance.now(); // Start timing
    const reply1 = await inference_engine.completions.create({
        prompt: "text: " + text1,
        // below configurations are all optional
        echo: false,
        n: 1,
        max_tokens: 1,
        logprobs: true,
        top_logprobs: 5
    });
    const endTime1 = performance.now(); // End timing
    const executionTime1 = endTime1 - startTime1; // Calculate elapsed time
    const text10 = "The sun set, casting golden light over the quiet lake ";
    const startTime10 = performance.now(); // Start timing
    const reply10 = await inference_engine.completions.create({
        prompt: "text: " + text10,
        // below configurations are all optional
        echo: false,
        n: 1,
        max_tokens: 1,
        logprobs: true,
        top_logprobs: 5
    });
    const endTime10 = performance.now(); // End timing
    const executionTime10 = endTime10 - startTime10; // Calculate elapsed time
    const text100 = "The wind whispered through the trees as the sun began to set, painting the sky with hues of orange and pink. The air was cool, but not cold, a perfect balance between the fading warmth of the day and the coming chill of night. Birds returned to their nests, their songs fading into the distance. In the quiet stillness, time seemed to stretch, as if nature itself paused to take a deep breath. For a moment, everything felt timeless, as if the world was holding its breath, waiting for the stars to emerge in the evening and ";
    const startTime100 = performance.now(); // Start timing
    const reply100 = await inference_engine.completions.create({
        prompt: "text: " + text100,
        // below configurations are all optional
        echo: false,
        n: 1,
        max_tokens: 1,
        logprobs: true,
        top_logprobs: 5
    });
    const endTime100 = performance.now(); // End timing
    const executionTime100 = endTime100 - startTime100; // Calculate elapsed time
    const text300 = "The old house stood at the end of the narrow lane, its weathered stone walls cloaked in ivy. For years, it had been empty, abandoned by all but the wind and the occasional curious traveler. Yet, it had a certain charm, a quiet kind of mystery that seemed to pull at the hearts of those who passed by. Despite the peeling paint and the overgrown garden, there was something about it that whispered of a forgotten time, of lives lived within its walls, of stories untold. On a crisp autumn evening, a young woman named Clara approached the house, her footsteps slow but steady. She had heard rumors of the place\u2014stories of its history, of the strange sounds that echoed from the windows late at night. But Clara wasn\u2019t one to be swayed by such tales. She had always been drawn to the unknown, to the places where others feared to go. As she crossed the threshold, the air inside was thick with dust, the scent of old wood and earth filling her senses. Sunlight filtered through cracks in the shutters, casting long shadows on the floor. The house was silent, save for the faint creaking of the floorboards beneath her feet. She moved through the rooms, each one telling a different story\u2014faded portraits, forgotten trinkets, a single piano in the corner with keys that seemed to have forgotten their melody. Upstairs, the door to a small bedroom stood ajar. Clara pushed it open, and her eyes fell on a letter, yellowed with age, resting on the bedside table. She reached for it, a feeling of anticipation rising within her chest, as though she were about to uncover a long-hidden secret.";
    const startTime300 = performance.now(); // Start timing
    const reply300 = await inference_engine.completions.create({
        prompt: "text: " + text300,
        // below configurations are all optional
        echo: false,
        n: 1,
        max_tokens: 1,
        logprobs: true,
        top_logprobs: 5
    });
    const endTime300 = performance.now(); // End timing
    const executionTime300 = endTime300 - startTime300; // Calculate elapsed time
    const text500 = "The wind howled across the desolate plains, carrying with it the scent of dust and the promise of a coming storm. The sky, once a bright blue, had darkened to a menacing gray, the clouds swirling in ominous patterns. The trees that lined the horizon bent under the pressure of the gusts, their branches creaking and groaning like ancient bones. In the midst of this chaotic landscape, a lone figure walked slowly, the crunch of gravel beneath their boots the only sound in an otherwise silent world. The figure was tall, wrapped in a long, dark coat that billowed behind them like a cape. Their face was hidden beneath the brim of a weathered hat, but the movement of their body betrayed a sense of purpose. They had been walking for hours, maybe days, through the barren stretch of land that seemed endless. Their destination was unclear, even to them, but there was a certainty in their stride, an unspoken belief that they would know when they arrived. The world around them seemed to blur as the wind picked up, the air thick with dust and the weight of an impending downpour. The figure pulled their coat tighter around their body, shielding themselves from the bite of the cold. The landscape offered no refuge, no shelter from the storm that was rapidly approaching. In the distance, a small shape began to emerge, barely visible through the haze of dust and wind. At first, it seemed like a mirage, a trick of the eye. But as the figure drew closer, it became clear: a small shack, half-buried in the earth, its windows dark and empty. A beacon of solitude in an otherwise hostile world. The figure quickened their pace, eager to reach the shelter before the storm hit. Their steps were measured, deliberate, but their heart raced with an unexplainable urgency. There was something about the shack that called to them, something deep inside that whispered it was the right place. When they finally reached the door, they paused for a moment, looking over their shoulder at the vast, empty plains stretching out behind them. The storm was upon them now, the wind screaming in fury, the first drops of rain beginning to fall. With a deep breath, the figure pushed open the door and stepped inside. The interior was dark and musty, the air thick with the scent of mildew and decay. A single candle flickered on a small wooden table, casting faint shadows on the walls. The floor creaked underfoot as the figure closed the door behind them, sealing themselves inside. For a moment, they simply stood there, taking in the quiet, the sense of being removed from the chaos outside. But then their eyes fell on something, a small object resting on the table, partially obscured by a tattered cloth. With cautious hands, the figure reached for it, lifting the cloth to reveal a small, weathered box. The box was old, its wood cracked and worn, but it had an undeniable presence, as if it held something more than just its physical form. The figure\u2019s fingers brushed the surface, tracing the intricate carvings that adorned its sides. Something inside stirred, an instinct, a knowing that had long been buried. They opened the box, and in that moment, the storm outside seemed to pause, the wind falling silent as though waiting for what was to come next ";
    const startTime500 = performance.now(); // Start timing
    const reply500 = await inference_engine.completions.create({
        prompt: "text: " + text500,
        // below configurations are all optional
        echo: false,
        n: 1,
        max_tokens: 1,
        logprobs: true,
        top_logprobs: 5
    });
    const endTime500 = performance.now(); // End timing
    const executionTime500 = endTime500 - startTime500; // Calculate elapsed time
    const text1000 = "The town of Willow Creek was the kind of place that seemed to exist outside the boundaries of time, where the past lingered in the present, and the present always felt just a little too still. It was a town nestled in the valley of tall, evergreen mountains, surrounded by thick woods that stretched far beyond the horizon. The streets were narrow, cobbled, and lined with old brick houses that had seen better days but somehow still stood proud, as if refusing to let go of their history. There was a quiet rhythm to the place, a slow pulse that seemed to match the tempo of the seasons\u2014never too fast, never too slow. People moved at their own pace, not in a hurry, not looking to get anywhere other than where they already were. If you came to Willow Creek for a visit, you would quickly notice that the townspeople seemed to know everyone\u2019s name, or at least their face. In the morning, the local bakery would fill the air with the warm scent of fresh bread, a smell so comforting it felt like the town was embracing you. By noon, the small caf\xe9 in the square would be bustling, people chatting over coffee and pie, their laughter spilling into the streets. It was all so picturesque, so serene. But beneath the town\u2019s calm exterior, there was something else\u2014a thread of tension, an undercurrent of something unsaid that had woven its way through Willow Creek for generations. And at the heart of it all was the old church at the edge of town, a building that seemed out of place, as if it didn\u2019t quite belong. The church had stood there for as long as anyone could remember, its tall spire rising above the trees like a watchful sentinel. It was made of weathered stone, its walls etched with the marks of age and neglect. Despite its beauty, despite its history, the church was always locked. No one went inside, no one dared to. There were stories, of course, rumors that had been passed down through the years, but no one had the courage to speak of them openly. Some said the church was cursed, that it had been built on an old graveyard where dark forces had once been sealed away. Others whispered that the bell tower, which had not rung in decades, was still used by something\u2014or someone\u2014who was not quite human. It was all just talk, of course. No one had ever seen anything to confirm these stories. But when night fell, and the streets of Willow Creek were bathed in the soft light of street lamps, there was always that feeling, that sense of being watched, of something just beyond the edge of perception. And when you passed the church, you couldn\u2019t help but feel the weight of it, the heaviness of its silence pressing down on you, urging you to keep walking, to keep moving, lest you become trapped in its shadow. It was on one of those quiet, moonlit nights that a young man named Thomas arrived in Willow Creek, drawn by a letter he had received months earlier, a letter from a relative he had never met. His mother had always spoken of her family in distant terms, as if they were people from another life, from another world entirely. But when Thomas had opened the letter and read the words inside, something stirred within him, a feeling he couldn\u2019t quite explain. His uncle, Samuel, had invited him to visit, to learn about the family history, to come to Willow Creek and see the place where his ancestors had lived. There was an urgency in the letter, a sense that time was running out, that Thomas needed to come quickly. So, with little more than a suitcase and the contents of the letter in his pocket, Thomas made his way to Willow Creek. He arrived late in the evening, the town bathed in the golden glow of the setting sun. The first thing that struck him was the quiet, the stillness of it all. There were no bustling crowds, no loud noises\u2014just the gentle murmur of the wind through the trees and the soft chirping of crickets. The second thing that caught his attention was the church, standing alone at the edge of town like a monument to something long forgotten. It seemed to draw him in, as if it was waiting for him, calling to him. He had only just made his way to the small inn where he would be staying when he noticed an older man sitting on the porch, watching the sky. The man gave him a small nod as Thomas passed, and for reasons he couldn\u2019t quite explain, Thomas felt compelled to stop and speak with him. \u201CEvening,\u201D Thomas said, offering a polite smile. \u201CEvening,\u201D the man replied, his voice rough with age. \u201CFirst time in Willow Creek?\u201D \u201CYes,\u201D Thomas answered, glancing up at the darkening sky. \u201CI\u2019m just here for a short stay. My uncle, Samuel, sent for me.\u201D The man\u2019s eyes flickered at the mention of the name. \u201CSamuel, you say?\u201D His voice dropped to a whisper. \u201CBe careful with that one, son. This town\u2026 there\u2019s things here that aren\u2019t meant to be seen.\u201D Thomas gave a small laugh, thinking the old man was just another eccentric resident. \u201CI\u2019m sure it\u2019s fine,\u201D he said, trying to brush off the strange feeling creeping up his spine. But the man didn\u2019t laugh. Instead, he looked Thomas square in the eye, his gaze unnerving. \u201CThe church,\u201D he said slowly, \u201Cit\u2019s not just a building. It\u2019s something more. You\u2019ll see. You\u2019ll all see, in time.\u201D Thomas felt a chill run through him, but he forced a smile, nodded, and excused himself. He didn\u2019t know what to make of the man\u2019s words, but there was something about them that stayed with him, echoing in his mind as he made his way inside for the night. The next morning, Thomas set out to find his uncle, determined to learn the truth about his family, and about the town. He walked through the quiet streets, the silence only broken by the occasional bird call or the distant sound of a horse-drawn cart. As he reached the church, he stopped again, looking up at its tall spire, the sense of foreboding rising in his chest. Something was calling to him from within, pulling at him like a tether. He had to know what lay inside, what secrets the church was hiding. But as his hand reached for the old, rusted door, he felt a sudden hesitation, as if the very air around him was warning him to turn back. Yet, the pull was too strong. He pushed open the door.";
    const startTime1000 = performance.now(); // Start timing
    const reply1000 = await inference_engine.completions.create({
        prompt: "text: " + text1000,
        // below configurations are all optional
        echo: false,
        n: 1,
        max_tokens: 1,
        logprobs: true,
        top_logprobs: 5
    });
    const endTime1000 = performance.now(); // End timing
    const executionTime1000 = endTime1000 - startTime1000; // Calculate elapsed time
    // Update wordElement with the execution time
    const wordElement1 = document.getElementById("1word");
    if (wordElement1) wordElement1.innerText = `${executionTime1.toFixed(2)} ms`;
    else throw Error("Cannot find element with id '1word'");
    const wordElement10 = document.getElementById("10words");
    if (wordElement10) wordElement10.innerText = `${executionTime10.toFixed(2)} ms`;
    else throw Error("Cannot find element with id '10words'");
    const wordElement100 = document.getElementById("100words");
    if (wordElement100) wordElement100.innerText = `${executionTime100.toFixed(2)} ms`;
    else throw Error("Cannot find element with id '100words'");
    const wordElement300 = document.getElementById("300words");
    if (wordElement300) wordElement300.innerText = `${executionTime300.toFixed(2)} ms`;
    else throw Error("Cannot find element with id '300words'");
    const wordElement500 = document.getElementById("500words");
    if (wordElement500) wordElement500.innerText = `${executionTime500.toFixed(2)} ms`;
    else throw Error("Cannot find element with id '500words'");
    const wordElement1000 = document.getElementById("1000words");
    if (wordElement1000) wordElement1000.innerText = `${executionTime1000.toFixed(2)} ms`;
    else throw Error("Cannot find element with id '1000words'");
}
document.addEventListener("DOMContentLoaded", main);

},{"@mlc-ai/web-llm":"jkSFw"}]},["fkBDs","eVoWo"], "eVoWo", "parcelRequire90c9")

//# sourceMappingURL=SmolLM_1_7B.c159900c.js.map
