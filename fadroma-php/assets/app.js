var App = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __reflectGet = Reflect.get;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name4 in all)
      __defProp(target, name4, { get: all[name4], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj);
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // react-globals:react
  var require_react = __commonJS({
    "react-globals:react"(exports, module) {
      module.exports = window.React;
    }
  });

  // <stdin>
  var stdin_exports = {};
  __export(stdin_exports, {
    default: () => App
  });
  var import_react3 = __toESM(require_react());

  // node_modules/lucide-react/dist/esm/createLucideIcon.js
  var import_react2 = __toESM(require_react());

  // node_modules/lucide-react/dist/esm/shared/src/utils.js
  var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  var toCamelCase = (string) => string.replace(
    /^([A-Z])|[\s-_]+(\w)/g,
    (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
  );
  var toPascalCase = (string) => {
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  };
  var mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
  }).join(" ").trim();
  var hasA11yProp = (props) => {
    for (const prop in props) {
      if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
        return true;
      }
    }
  };

  // node_modules/lucide-react/dist/esm/Icon.js
  var import_react = __toESM(require_react());

  // node_modules/lucide-react/dist/esm/defaultAttributes.js
  var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };

  // node_modules/lucide-react/dist/esm/Icon.js
  var Icon = (0, import_react.forwardRef)(
    (_a, ref) => {
      var _b = _a, {
        color = "currentColor",
        size = 24,
        strokeWidth = 2,
        absoluteStrokeWidth,
        className = "",
        children,
        iconNode
      } = _b, rest = __objRest(_b, [
        "color",
        "size",
        "strokeWidth",
        "absoluteStrokeWidth",
        "className",
        "children",
        "iconNode"
      ]);
      return (0, import_react.createElement)(
        "svg",
        __spreadValues(__spreadValues(__spreadProps(__spreadValues({
          ref
        }, defaultAttributes), {
          width: size,
          height: size,
          stroke: color,
          strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
          className: mergeClasses("lucide", className)
        }), !children && !hasA11yProp(rest) && { "aria-hidden": "true" }), rest),
        [
          ...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)),
          ...Array.isArray(children) ? children : [children]
        ]
      );
    }
  );

  // node_modules/lucide-react/dist/esm/createLucideIcon.js
  var createLucideIcon = (iconName, iconNode) => {
    const Component2 = (0, import_react2.forwardRef)(
      (_a, ref) => {
        var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
        return (0, import_react2.createElement)(Icon, __spreadValues({
          ref,
          iconNode,
          className: mergeClasses(
            `lucide-${toKebabCase(toPascalCase(iconName))}`,
            `lucide-${iconName}`,
            className
          )
        }, props));
      }
    );
    Component2.displayName = toPascalCase(iconName);
    return Component2;
  };

  // node_modules/lucide-react/dist/esm/icons/arrow-left.js
  var __iconNode = [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }]
  ];
  var ArrowLeft = createLucideIcon("arrow-left", __iconNode);

  // node_modules/lucide-react/dist/esm/icons/bell-ring.js
  var __iconNode2 = [
    ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
    ["path", { d: "M22 8c0-2.3-.8-4.3-2-6", key: "5bb3ad" }],
    [
      "path",
      {
        d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
        key: "11g9vi"
      }
    ],
    ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8", key: "tap9e0" }]
  ];
  var BellRing = createLucideIcon("bell-ring", __iconNode2);

  // node_modules/lucide-react/dist/esm/icons/camera.js
  var __iconNode3 = [
    [
      "path",
      {
        d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
        key: "1tc9qg"
      }
    ],
    ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
  ];
  var Camera = createLucideIcon("camera", __iconNode3);

  // node_modules/lucide-react/dist/esm/icons/chart-column.js
  var __iconNode4 = [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
    ["path", { d: "M18 17V9", key: "2bz60n" }],
    ["path", { d: "M13 17V5", key: "1frdt8" }],
    ["path", { d: "M8 17v-3", key: "17ska0" }]
  ];
  var ChartColumn = createLucideIcon("chart-column", __iconNode4);

  // node_modules/lucide-react/dist/esm/icons/check.js
  var __iconNode5 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
  var Check = createLucideIcon("check", __iconNode5);

  // node_modules/lucide-react/dist/esm/icons/chevron-right.js
  var __iconNode6 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
  var ChevronRight = createLucideIcon("chevron-right", __iconNode6);

  // node_modules/lucide-react/dist/esm/icons/clock.js
  var __iconNode7 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
  ];
  var Clock = createLucideIcon("clock", __iconNode7);

  // node_modules/lucide-react/dist/esm/icons/database.js
  var __iconNode8 = [
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
    ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
    ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
  ];
  var Database = createLucideIcon("database", __iconNode8);

  // node_modules/lucide-react/dist/esm/icons/download.js
  var __iconNode9 = [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
  ];
  var Download = createLucideIcon("download", __iconNode9);

  // node_modules/lucide-react/dist/esm/icons/info.js
  var __iconNode10 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 16v-4", key: "1dtifu" }],
    ["path", { d: "M12 8h.01", key: "e9boi3" }]
  ];
  var Info = createLucideIcon("info", __iconNode10);

  // node_modules/lucide-react/dist/esm/icons/log-out.js
  var __iconNode11 = [
    ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
    ["path", { d: "M21 12H9", key: "dn1m92" }],
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
  ];
  var LogOut = createLucideIcon("log-out", __iconNode11);

  // node_modules/lucide-react/dist/esm/icons/message-square.js
  var __iconNode12 = [
    ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
  ];
  var MessageSquare = createLucideIcon("message-square", __iconNode12);

  // node_modules/lucide-react/dist/esm/icons/monitor.js
  var __iconNode13 = [
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
    ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
    ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
  ];
  var Monitor = createLucideIcon("monitor", __iconNode13);

  // node_modules/lucide-react/dist/esm/icons/play.js
  var __iconNode14 = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]];
  var Play = createLucideIcon("play", __iconNode14);

  // node_modules/lucide-react/dist/esm/icons/plus.js
  var __iconNode15 = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }]
  ];
  var Plus = createLucideIcon("plus", __iconNode15);

  // node_modules/lucide-react/dist/esm/icons/printer.js
  var __iconNode16 = [
    [
      "path",
      {
        d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
        key: "143wyd"
      }
    ],
    ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" }],
    ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1", key: "1ue0tg" }]
  ];
  var Printer = createLucideIcon("printer", __iconNode16);

  // node_modules/lucide-react/dist/esm/icons/qr-code.js
  var __iconNode17 = [
    ["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1", key: "1tu5fj" }],
    ["rect", { width: "5", height: "5", x: "16", y: "3", rx: "1", key: "1v8r4q" }],
    ["rect", { width: "5", height: "5", x: "3", y: "16", rx: "1", key: "1x03jg" }],
    ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3", key: "177gqh" }],
    ["path", { d: "M21 21v.01", key: "ents32" }],
    ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7", key: "8crl2c" }],
    ["path", { d: "M3 12h.01", key: "nlz23k" }],
    ["path", { d: "M12 3h.01", key: "n36tog" }],
    ["path", { d: "M12 16v.01", key: "133mhm" }],
    ["path", { d: "M16 12h1", key: "1slzba" }],
    ["path", { d: "M21 12v.01", key: "1lwtk9" }],
    ["path", { d: "M12 21v-1", key: "1880an" }]
  ];
  var QrCode = createLucideIcon("qr-code", __iconNode17);

  // node_modules/lucide-react/dist/esm/icons/refresh-cw.js
  var __iconNode18 = [
    ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
    ["path", { d: "M8 16H3v5", key: "1cv678" }]
  ];
  var RefreshCw = createLucideIcon("refresh-cw", __iconNode18);

  // node_modules/lucide-react/dist/esm/icons/scale.js
  var __iconNode19 = [
    ["path", { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "7g6ntu" }],
    ["path", { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "ijws7r" }],
    ["path", { d: "M7 21h10", key: "1b0cd5" }],
    ["path", { d: "M12 3v18", key: "108xh3" }],
    ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2", key: "3gwbw2" }]
  ];
  var Scale = createLucideIcon("scale", __iconNode19);

  // node_modules/lucide-react/dist/esm/icons/search.js
  var __iconNode20 = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
  ];
  var Search = createLucideIcon("search", __iconNode20);

  // node_modules/lucide-react/dist/esm/icons/settings.js
  var __iconNode21 = [
    [
      "path",
      {
        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
        key: "1qme2f"
      }
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
  ];
  var Settings = createLucideIcon("settings", __iconNode21);

  // node_modules/lucide-react/dist/esm/icons/shield-alert.js
  var __iconNode22 = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
      }
    ],
    ["path", { d: "M12 8v4", key: "1got3b" }],
    ["path", { d: "M12 16h.01", key: "1drbdi" }]
  ];
  var ShieldAlert = createLucideIcon("shield-alert", __iconNode22);

  // node_modules/lucide-react/dist/esm/icons/smartphone.js
  var __iconNode23 = [
    ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
    ["path", { d: "M12 18h.01", key: "mhygvu" }]
  ];
  var Smartphone = createLucideIcon("smartphone", __iconNode23);

  // node_modules/lucide-react/dist/esm/icons/square.js
  var __iconNode24 = [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
  ];
  var Square = createLucideIcon("square", __iconNode24);

  // node_modules/lucide-react/dist/esm/icons/trash-2.js
  var __iconNode25 = [
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
    ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
    ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
    ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
  ];
  var Trash2 = createLucideIcon("trash-2", __iconNode25);

  // node_modules/lucide-react/dist/esm/icons/triangle-alert.js
  var __iconNode26 = [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq"
      }
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }]
  ];
  var TriangleAlert = createLucideIcon("triangle-alert", __iconNode26);

  // node_modules/lucide-react/dist/esm/icons/truck.js
  var __iconNode27 = [
    ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
    ["path", { d: "M15 18H9", key: "1lyqi6" }],
    [
      "path",
      {
        d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
        key: "lysw3i"
      }
    ],
    ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
    ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
  ];
  var Truck = createLucideIcon("truck", __iconNode27);

  // node_modules/lucide-react/dist/esm/icons/user-check.js
  var __iconNode28 = [
    ["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }],
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
  ];
  var UserCheck = createLucideIcon("user-check", __iconNode28);

  // node_modules/lucide-react/dist/esm/icons/x.js
  var __iconNode29 = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ];
  var X = createLucideIcon("x", __iconNode29);

  // <stdin>
  // ===== Warstwa danych: PHP + MySQL (api.php) =====
  var API_URL = window.FADROMY_API_URL || "api.php";
  var POLL_INTERVAL_MS = 5e3;
  function apiRequest(action, payload) {
    const opts = payload === void 0 ? { method: "GET", cache: "no-store", credentials: "same-origin" } : {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json", "X-Fadromy": "1" },
      body: JSON.stringify(payload)
    };
    return fetch(`${API_URL}?action=${encodeURIComponent(action)}`, opts).then(
      (res) => res.json().catch(() => ({})).then((data) => {
        if (!res.ok || data.error) {
          const err = new Error(data.error || `HTTP ${res.status}`);
          err.status = res.status;
          err.data = data;
          throw err;
        }
        return data;
      })
    );
  }
  // Kody QR generowane lokalnie (PIN-y nie trafiaja do zewnetrznych serwisow)
  function qrImageSrc(text, cellSize) {
    try {
      if (typeof qrcode === "function") {
        qrcode.stringToBytes = qrcode.stringToBytesFuncs["UTF-8"];
        const qr = qrcode(0, "M");
        qr.addData(String(text));
        qr.make();
        return qr.createDataURL(cellSize || 4, 2);
      }
    } catch (e) {
      console.warn("Blad generowania QR:", e);
    }
    return "";
  }
  function calculateShift(dateObj) {
    const h = dateObj.getHours();
    if (h >= 6 && h < 14)
      return 1;
    if (h >= 14 && h < 22)
      return 2;
    return 3;
  }
  function formatDateYMD(dateObj) {
    const y = dateObj.getFullYear();
    const m = String(dateObj.getMonth() + 1).padStart(2, "0");
    const d = String(dateObj.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  function formatTimeHM(dateObj) {
    if (!dateObj)
      return "-";
    const d = new Date(dateObj);
    return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}`;
  }
  function formatDuration(seconds) {
    if (!seconds || seconds < 0)
      return "00:00:00";
    const h = Math.floor(seconds / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 60);
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
  function formatOperatorQrPayload(operator) {
    const normalizedName = operator.name.trim().replace(/\s+/g, ".");
    return `${normalizedName}#${operator.pin || "\u2022\u2022\u2022\u2022"}`;
  }
  function QrScannerModal({ isOpen, onClose, onScan, mode, mockItems }) {
    const videoRef = (0, import_react3.useRef)(null);
    const [cameraError, setCameraError] = (0, import_react3.useState)("");
    const [manualInput, setManualInput] = (0, import_react3.useState)("");
    (0, import_react3.useEffect)(() => {
      if (!isOpen)
        return;
      let stream = null;
      let intervalId = null;
      const startCamera = () => __async(this, null, function* () {
        try {
          setCameraError("");
          if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            setCameraError("Przegl\u0105darka nie udost\u0119pnia kamery (wymagane HTTPS lub uprawnienia). U\u017Cyj symulacji poni\u017Cej.");
            return;
          }
          stream = yield navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" }
          });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            yield videoRef.current.play();
          }
          if ("BarcodeDetector" in window) {
            const detector = new window.BarcodeDetector({ formats: ["qr_code"] });
            intervalId = setInterval(() => __async(this, null, function* () {
              if (videoRef.current && videoRef.current.readyState === 4) {
                try {
                  const barcodes = yield detector.detect(videoRef.current);
                  if (barcodes.length > 0 && barcodes[0].rawValue) {
                    onScan(barcodes[0].rawValue);
                  }
                } catch (e) {
                }
              }
            }), 400);
          }
        } catch (err) {
          setCameraError("Brak dost\u0119pu do aparatu lub brak kamery w urz\u0105dzeniu. Wybierz kod testowy poni\u017Cej.");
        }
      });
      startCamera();
      return () => {
        if (intervalId)
          clearInterval(intervalId);
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
        }
      };
    }, [isOpen, onScan]);
    if (!isOpen)
      return null;
    return /* @__PURE__ */ import_react3.default.createElement("div", { className: "fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-3 sm:p-4 overflow-y-auto" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-slate-900 border-2 border-amber-500 rounded-2xl w-full max-w-lg p-5 text-white shadow-2xl" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center justify-between mb-4" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ import_react3.default.createElement(QrCode, { className: "w-7 h-7 text-amber-400" }), /* @__PURE__ */ import_react3.default.createElement("h3", { className: "text-xl font-bold" }, mode === "operator" ? "SKANUJ QR OPERATORA" : "SKANUJ QR MASZYNY")), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: onClose,
        className: "p-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-300"
      },
      /* @__PURE__ */ import_react3.default.createElement(X, { className: "w-6 h-6" })
    )), /* @__PURE__ */ import_react3.default.createElement("div", { className: "relative bg-black rounded-xl overflow-hidden aspect-video mb-4 border border-slate-700 flex items-center justify-center" }, /* @__PURE__ */ import_react3.default.createElement("video", { ref: videoRef, className: "w-full h-full object-cover", muted: true, playsInline: true }), /* @__PURE__ */ import_react3.default.createElement("div", { className: "absolute inset-0 border-4 border-amber-400/50 m-8 rounded-xl pointer-events-none flex items-center justify-center" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "w-full h-0.5 bg-red-500 animate-pulse" })), cameraError && /* @__PURE__ */ import_react3.default.createElement("div", { className: "absolute inset-0 bg-slate-950/90 p-4 flex flex-col items-center justify-center text-center" }, /* @__PURE__ */ import_react3.default.createElement(Camera, { className: "w-10 h-10 text-amber-400 mb-2" }), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-sm text-slate-300" }, cameraError))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "mb-4" }, /* @__PURE__ */ import_react3.default.createElement("label", { className: "block text-xs uppercase tracking-wider text-slate-400 mb-1" }, "Lub wpisz / wklej ci\u0105g z kodu QR:"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ import_react3.default.createElement(
      "input",
      {
        type: "text",
        value: manualInput,
        onChange: (e) => setManualInput(e.target.value),
        placeholder: mode === "operator" ? "np. Jan.Kowalski#1234" : "np. XC958_1",
        className: "flex-1 bg-slate-800 border border-slate-600 rounded-xl px-3 py-2.5 text-white font-mono text-sm"
      }
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => manualInput.trim() && onScan(manualInput.trim()),
        className: "bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl"
      },
      "Zatwierd\u017A"
    ))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-slate-800/80 rounded-xl p-3 border border-slate-700" }, /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-xs font-semibold text-amber-400 uppercase mb-2" }, "Symulacja szybkiego skanu QR (kliknij aby przetestowa\u0107):"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-40 overflow-y-auto" }, mockItems.map((item, idx) => /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        key: idx,
        onClick: () => onScan(item.payload),
        className: "text-left p-2 bg-slate-900 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-400 rounded-lg transition"
      },
      /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs font-bold text-white truncate" }, item.label),
      /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-[11px] font-mono text-amber-300 truncate" }, item.payload)
    ))))));
  }
  function App() {
    const [cloudConnected, setCloudConnected] = (0, import_react3.useState)(false);
    const [appMode, setAppMode] = (0, import_react3.useState)("landing");
    const [operators, setOperators] = (0, import_react3.useState)([]);
    const [machines, setMachines] = (0, import_react3.useState)([]);
    const [processes, setProcesses] = (0, import_react3.useState)([]);
    const [webUsers, setWebUsers] = (0, import_react3.useState)([]);
    const [smsManagers, setSmsManagers] = (0, import_react3.useState)([]);
    const [logs, setLogs] = (0, import_react3.useState)([]);
    const [webhookUrl, setWebhookUrl] = (0, import_react3.useState)("");
    const [now, setNow] = (0, import_react3.useState)(/* @__PURE__ */ new Date());
    const [toast, setToast] = (0, import_react3.useState)(null);
    const pendingWritesRef = (0, import_react3.useRef)(0);
    const dbErrorShownRef = (0, import_react3.useRef)(false);
    const showToast = (message, type = "info") => {
      setToast({ message, type, id: Date.now() });
      setTimeout(() => {
        setToast((prev) => prev && Date.now() - prev.id >= 3900 ? null : prev);
      }, 4e3);
    };
    (0, import_react3.useEffect)(() => {
      const timer = setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
      return () => clearInterval(timer);
    }, []);
    const applyServerState = (data) => {
      if (Array.isArray(data.operators))
        setOperators(data.operators);
      if (Array.isArray(data.machines))
        setMachines(data.machines);
      if (Array.isArray(data.processes))
        setProcesses(data.processes);
      if (Array.isArray(data.webUsers))
        setWebUsers(data.webUsers);
      if (Array.isArray(data.smsManagers))
        setSmsManagers(data.smsManagers);
      if (data.webhookUrl !== void 0)
        setWebhookUrl(data.webhookUrl || "");
      if (Array.isArray(data.logs)) {
        const fetched = data.logs.slice();
        fetched.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
        setLogs(fetched);
      }
    };
    const sessionRef = (0, import_react3.useRef)({ operator: null, webUser: null });
    const sessionVersionRef = (0, import_react3.useRef)(0);
    (0, import_react3.useEffect)(() => {
      sessionRef.current = { operator: currentOperator, webUser: currentWebUser };
    });
    const [qrPayloads, setQrPayloads] = (0, import_react3.useState)({});
    const qrLoginRef = (0, import_react3.useRef)({ busy: false, lastFailed: "", lastFailedAt: 0 });
    const bumpSession = () => {
      sessionVersionRef.current += 1;
    };
    const markDbOk = () => {
      setCloudConnected(true);
      dbErrorShownRef.current = false;
    };
    const markDbError = (e) => {
      console.warn("B\u0142\u0105d komunikacji z baz\u0105 MySQL:", e);
      setCloudConnected(false);
      if (!dbErrorShownRef.current) {
        dbErrorShownRef.current = true;
        showToast("Brak po\u0142\u0105czenia z baz\u0105 danych MySQL!", "error");
      }
    };
    const applyLoginOptions = (opts) => {
      if (!opts)
        return;
      if (Array.isArray(opts.operators))
        setOperators(opts.operators);
      if (Array.isArray(opts.webUsers))
        setWebUsers(opts.webUsers);
    };
    const handleSessionLost = (me) => {
      const s = sessionRef.current;
      if (s.operator && !(me && me.operator)) {
        bumpSession();
        setCurrentOperator(null);
        setSelectedMachine(null);
        setSelectedProcess(null);
        setActiveLogId(null);
        setOpStep("machine");
        setWorkNotes("");
        showToast("Sesja operatora wygas\u0142a - zaloguj si\u0119 ponownie.", "error");
      }
      if (s.webUser && !(me && me.webUser)) {
        bumpSession();
        setCurrentWebUser(null);
        showToast("Sesja panelu WEB wygas\u0142a - zaloguj si\u0119 ponownie.", "error");
      }
    };
    const refreshState = () => apiRequest("state").then((data) => {
      applyServerState(data);
      markDbOk();
      return data;
    });
    (0, import_react3.useEffect)(() => {
      let cancelled = false;
      apiRequest("session").then((res) => {
        if (cancelled)
          return;
        markDbOk();
        applyLoginOptions(res.loginOptions);
        const me = res.me || {};
        if (me.webUser)
          setCurrentWebUser(me.webUser);
        if (me.operator) {
          refreshState().then((data) => {
            if (!cancelled)
              completeOperatorLogin(me.operator, data);
          }).catch(markDbError);
        } else if (me.webUser) {
          refreshState().catch(markDbError);
        }
      }).catch((e) => {
        if (!cancelled)
          markDbError(e);
      });
      const poll = () => {
        if (pendingWritesRef.current > 0)
          return;
        const version = sessionVersionRef.current;
        const s = sessionRef.current;
        const loggedIn = !!(s.operator || s.webUser);
        const req = loggedIn ? apiRequest("state") : apiRequest("session");
        req.then((data) => {
          if (cancelled || pendingWritesRef.current > 0 || version !== sessionVersionRef.current)
            return;
          markDbOk();
          if (loggedIn) {
            applyServerState(data);
            handleSessionLost(data.me);
          } else {
            applyLoginOptions(data.loginOptions);
          }
        }).catch((e) => {
          if (cancelled || version !== sessionVersionRef.current)
            return;
          if (e.status === 401) {
            markDbOk();
            handleSessionLost(e.data && e.data.me);
          } else {
            markDbError(e);
          }
        });
      };
      const timer = setInterval(poll, POLL_INTERVAL_MS);
      return () => {
        cancelled = true;
        clearInterval(timer);
      };
    }, []);
    const finishOperatorLogin = (op) => __async(this, null, function* () {
      bumpSession();
      setCurrentOperator(op);
      sessionRef.current = __spreadProps(__spreadValues({}, sessionRef.current), { operator: op });
      let data = null;
      try {
        data = yield refreshState();
      } catch (e) {
        markDbError(e);
      }
      completeOperatorLogin(op, data);
    });
    const loginOperatorRequest = (payload) => __async(this, null, function* () {
      const res = yield apiRequest("login_operator", payload);
      yield finishOperatorLogin(res.operator);
    });
    const handleChangeOperatorPin = (op) => __async(this, null, function* () {
      const pin = window.prompt(`Nowy PIN dla operatora: ${op.name}
(minimum 4 znaki)`);
      if (pin === null)
        return;
      if (pin.trim().length < 4) {
        showToast("PIN musi mie\u0107 co najmniej 4 znaki.", "error");
        return;
      }
      try {
        yield apiRequest("set_operator_pin", { operatorId: op.id, pin: pin.trim() });
        setQrPayloads((prev) => {
          const next = __spreadValues({}, prev);
          delete next[op.id];
          return next;
        });
        showToast(`Zmieniono PIN operatora: ${op.name}`, "success");
      } catch (e) {
        showToast(e.message, "error");
      }
    });
    const handleChangeWebPassword = (u) => __async(this, null, function* () {
      const pass = window.prompt(`Nowe has\u0142o dla u\u017Cytkownika WEB: ${u.name}
(minimum 6 znak\xF3w)`);
      if (pass === null)
        return;
      if (pass.trim().length < 6) {
        showToast("Has\u0142o musi mie\u0107 co najmniej 6 znak\xF3w.", "error");
        return;
      }
      try {
        yield apiRequest("set_web_password", { userId: u.id, password: pass.trim() });
        showToast(`Zmieniono has\u0142o: ${u.name}`, "success");
      } catch (e) {
        showToast(e.message, "error");
      }
    });
    const handleGenerateOperatorQr = (op) => __async(this, null, function* () {
      const pin = window.prompt(`Podaj PIN operatora ${op.name}, aby wygenerowa\u0107 identyfikator QR:`);
      if (pin === null || !pin.trim())
        return;
      try {
        const res = yield apiRequest("check_operator_pin", { operatorId: op.id, pin: pin.trim() });
        if (!res.ok) {
          showToast(`Nieprawid\u0142owy PIN operatora ${op.name}.`, "error");
          return;
        }
        setQrPayloads((prev) => __spreadProps(__spreadValues({}, prev), {
          [op.id]: formatOperatorQrPayload(__spreadProps(__spreadValues({}, op), { pin: pin.trim() }))
        }));
      } catch (e) {
        showToast(e.message, "error");
      }
    });
    const runWrite = (action, payload) => __async(this, null, function* () {
      pendingWritesRef.current += 1;
      try {
        yield apiRequest(action, payload);
        setCloudConnected(true);
        return true;
      } catch (e) {
        console.warn(`B\u0142\u0105d zapisu do bazy MySQL (${action}):`, e);
        if (e.status === 401) {
          handleSessionLost(e.data && e.data.me);
        } else if (e.status === 403 || e.status === 400) {
          showToast(e.message, "error");
        } else {
          setCloudConnected(false);
          showToast("B\u0142\u0105d zapisu do bazy danych! Sprawd\u017A po\u0142\u0105czenie.", "error");
        }
        return false;
      } finally {
        pendingWritesRef.current -= 1;
      }
    });
    const syncDictionariesToCloud = (updatedFields) => __async(this, null, function* () {
      yield runWrite("save_dictionaries", updatedFields);
    });
    const saveLogRecord = (record) => __async(this, null, function* () {
      setLogs((prev) => {
        const exists = prev.some((item) => item.id === record.id);
        if (exists) {
          return prev.map((item) => item.id === record.id ? record : item);
        }
        return [record, ...prev];
      });
      yield runWrite("save_log", record);
    });
    const deleteLogRecord = (id) => __async(this, null, function* () {
      setLogs((prev) => prev.filter((l) => l.id !== id));
      yield runWrite("delete_log", { id });
    });
    const [currentOperator, setCurrentOperator] = (0, import_react3.useState)(null);
    const [loginSelectedOpId, setLoginSelectedOpId] = (0, import_react3.useState)("");
    const [loginNameInput, setLoginNameInput] = (0, import_react3.useState)("");
    const [loginPinInput, setLoginPinInput] = (0, import_react3.useState)("");
    const [qrModalMode, setQrModalMode] = (0, import_react3.useState)(null);
    const [opStep, setOpStep] = (0, import_react3.useState)("machine");
    const [selectedMachine, setSelectedMachine] = (0, import_react3.useState)(null);
    const [selectedProcess, setSelectedProcess] = (0, import_react3.useState)(null);
    const [processSearch, setProcessSearch] = (0, import_react3.useState)("");
    const [activeLogId, setActiveLogId] = (0, import_react3.useState)(null);
    const [workNotes, setWorkNotes] = (0, import_react3.useState)("");
    const [weightInputMode, setWeightInputMode] = (0, import_react3.useState)("tony");
    const [quantityInput, setQuantityInput] = (0, import_react3.useState)("");
    const [alertModalData, setAlertModalData] = (0, import_react3.useState)(null);
    const activeOperatorLog = (0, import_react3.useMemo)(
      () => logs.find((l) => l.id === activeLogId && l.status === "W TRAKCIE"),
      [logs, activeLogId]
    );
    const handleOperatorLogin = (e) => __async(this, null, function* () {
      e.preventDefault();
      const payload = { pin: loginPinInput.trim() };
      if (loginSelectedOpId) {
        payload.operatorId = loginSelectedOpId;
      } else if (loginNameInput.trim()) {
        payload.name = loginNameInput.trim();
      } else {
        showToast("Wybierz operatora z listy lub wpisz poprawne Imi\u0119 i Nazwisko.", "error");
        return;
      }
      if (!payload.pin) {
        showToast("Wpisz has\u0142o (PIN) operatora!", "error");
        return;
      }
      try {
        yield loginOperatorRequest(payload);
      } catch (err) {
        setLoginPinInput("");
        showToast(err.message || "Nie uda\u0142o si\u0119 zalogowa\u0107.", "error");
      }
    });
    const completeOperatorLogin = (op, data) => {
      const srcLogs = data && Array.isArray(data.logs) ? data.logs : logs;
      const srcMachines = data && Array.isArray(data.machines) ? data.machines : machines;
      const srcProcesses = data && Array.isArray(data.processes) ? data.processes : processes;
      setCurrentOperator(op);
      setLoginPinInput("");
      setLoginNameInput("");
      setLoginSelectedOpId("");
      const existingActive = srcLogs.find(
        (l) => l.operatorId === op.id && l.status === "W TRAKCIE"
      );
      if (existingActive) {
        const m = srcMachines.find((x2) => x2.id === existingActive.machineId) || {
          id: existingActive.machineId,
          name: existingActive.machineName,
          qrCode: existingActive.machineQr
        };
        const p = srcProcesses.find((x2) => x2.id === existingActive.processId) || {
          id: existingActive.processId,
          name: existingActive.processName,
          registerUnits: false,
          unit: existingActive.unit
        };
        setSelectedMachine(m);
        setSelectedProcess(p);
        setActiveLogId(existingActive.id);
        setWorkNotes(existingActive.notes || "");
        setOpStep("work");
        showToast(`Wznowiono aktywny proces: ${p.name}`, "success");
      } else {
        setSelectedMachine(null);
        setSelectedProcess(null);
        setActiveLogId(null);
        setOpStep("machine");
        showToast(`Zalogowano: ${op.name}`, "success");
      }
    };
    const handleQrScanResult = (rawText) => {
      const clean = rawText.trim();
      if (qrModalMode === "operator") {
        const parts = clean.split("#");
        if (parts.length !== 2) {
          showToast("Nieprawid\u0142owy format QR operatora (oczekiwano Imi\u0119.Nazwisko#Has\u0142o)", "error");
          return;
        }
        const guard = qrLoginRef.current;
        if (guard.busy || guard.lastFailed === clean && Date.now() - guard.lastFailedAt < 1e4)
          return;
        guard.busy = true;
        loginOperatorRequest({ qr: clean }).then(() => {
          setQrModalMode(null);
        }).catch((err) => {
          guard.lastFailed = clean;
          guard.lastFailedAt = Date.now();
          showToast(err.message || "Nie uda\u0142o si\u0119 zalogowa\u0107 kodem QR.", "error");
        }).finally(() => {
          guard.busy = false;
        });
      } else if (qrModalMode === "machine") {
        const matchedMachine = machines.find(
          (m) => m.qrCode.toLowerCase() === clean.toLowerCase() || m.name.toLowerCase() === clean.toLowerCase()
        );
        if (matchedMachine) {
          setQrModalMode(null);
          setSelectedMachine(matchedMachine);
          setOpStep("process");
          showToast(`Wybrano maszyn\u0119: ${matchedMachine.name}`, "success");
        } else {
          showToast(`Nie rozpoznano kodu QR maszyny: ${clean}`, "error");
        }
      }
    };
    const handleOperatorLogout = () => {
      bumpSession();
      apiRequest("logout", { scope: "operator" }).catch(() => {
      });
      setCurrentOperator(null);
      setSelectedMachine(null);
      setSelectedProcess(null);
      setActiveLogId(null);
      setOpStep("machine");
      setWorkNotes("");
      showToast("Wylogowano z panelu operatora.", "info");
    };
    const handleStartWork = () => __async(this, null, function* () {
      if (!currentOperator || !selectedMachine || !selectedProcess)
        return;
      const startDate = /* @__PURE__ */ new Date();
      const shiftNum = calculateShift(startDate);
      const newId = `log_${Date.now()}`;
      const newRecord = {
        id: newId,
        date: formatDateYMD(startDate),
        shift: shiftNum,
        operatorId: currentOperator.id,
        operatorName: currentOperator.name,
        machineId: selectedMachine.id,
        machineName: selectedMachine.name,
        machineQr: selectedMachine.qrCode,
        processId: selectedProcess.id,
        processName: selectedProcess.name,
        startTime: startDate.toISOString(),
        endTime: null,
        durationSeconds: 0,
        durationHours: 0,
        unit: selectedProcess.registerUnits ? selectedProcess.unit : "",
        quantity: null,
        weightTons: null,
        weightKg: null,
        status: "W TRAKCIE",
        alertActive: false,
        alertHistory: [],
        notes: workNotes.trim()
      };
      yield saveLogRecord(newRecord);
      setActiveLogId(newId);
      showToast(`START zarejestrowany! Zmiana ${shiftNum}`, "success");
    });
    const handleStopWork = () => __async(this, null, function* () {
      if (!activeOperatorLog)
        return;
      const endDate = /* @__PURE__ */ new Date();
      const startDate = new Date(activeOperatorLog.startTime);
      const diffSec = Math.max(1, Math.round((endDate - startDate) / 1e3));
      const diffHours = Number((diffSec / 3600).toFixed(3));
      const updated = __spreadProps(__spreadValues({}, activeOperatorLog), {
        endTime: endDate.toISOString(),
        durationSeconds: diffSec,
        durationHours: diffHours,
        notes: workNotes.trim(),
        status: (selectedProcess == null ? void 0 : selectedProcess.registerUnits) ? "OCZEKUJE NA ILO\u015A\u0106" : "ZAKO\u0143CZONY",
        alertActive: false
      });
      yield saveLogRecord(updated);
      if (selectedProcess && selectedProcess.registerUnits) {
        setWeightInputMode(selectedProcess.unit === "kg" ? "kg" : "tony");
        setQuantityInput("");
        setOpStep("quantity");
        showToast("Zatrzymano czas. Wprowad\u017A wykonan\u0105 ilo\u015B\u0107.", "info");
      } else {
        setActiveLogId(null);
        setSelectedProcess(null);
        setWorkNotes("");
        setOpStep("process");
        showToast("Proces zako\u0144czony i zapisany w bazie!", "success");
      }
    });
    const handleConfirmQuantity = (e) => __async(this, null, function* () {
      var _a, _b;
      e.preventDefault();
      const val = parseFloat(String(quantityInput).replace(",", "."));
      if (isNaN(val) || val < 0) {
        showToast("Wprowad\u017A poprawn\u0105 warto\u015B\u0107 liczbow\u0105!", "error");
        return;
      }
      const targetLog = logs.find((l) => l.id === activeLogId);
      if (!targetLog) {
        setOpStep("process");
        return;
      }
      const isWeightUnit = ((_a = selectedProcess == null ? void 0 : selectedProcess.unit) == null ? void 0 : _a.toLowerCase()) === "tony" || ((_b = selectedProcess == null ? void 0 : selectedProcess.unit) == null ? void 0 : _b.toLowerCase()) === "kg";
      let weightTons = null;
      let weightKg = null;
      let finalQty = val;
      let finalUnit = (selectedProcess == null ? void 0 : selectedProcess.unit) || "";
      if (isWeightUnit) {
        if (weightInputMode === "tony") {
          weightTons = Number(val.toFixed(3));
          weightKg = Math.round(val * 1e3);
          finalQty = weightTons;
          finalUnit = "tony";
        } else {
          weightKg = Math.round(val);
          weightTons = Number((val / 1e3).toFixed(3));
          finalQty = weightTons;
          finalUnit = "tony (z kg)";
        }
      }
      const completedRecord = __spreadProps(__spreadValues({}, targetLog), {
        unit: finalUnit,
        quantity: finalQty,
        weightTons,
        weightKg,
        status: "ZAKO\u0143CZONY"
      });
      yield saveLogRecord(completedRecord);
      setActiveLogId(null);
      setSelectedProcess(null);
      setQuantityInput("");
      setWorkNotes("");
      setOpStep("process");
      showToast("Zapisano ilo\u015B\u0107 i zako\u0144czono operacj\u0119!", "success");
    });
    const handleTriggerAlert = () => __async(this, null, function* () {
      if (!currentOperator)
        return;
      const alertTime = /* @__PURE__ */ new Date();
      const timeStr = formatTimeHM(alertTime);
      const procName = selectedProcess ? selectedProcess.name : "Brak wybranego procesu (Stanowisko)";
      const machName = selectedMachine ? selectedMachine.name : "Nie wybrano maszyny";
      const smsText = `${currentOperator.name}, ${procName} (${machName}), ${timeStr} \u2013 UWAGA POMOC`;
      if (activeOperatorLog) {
        const updated = __spreadProps(__spreadValues({}, activeOperatorLog), {
          alertActive: true,
          alertHistory: [
            ...activeOperatorLog.alertHistory || [],
            {
              time: alertTime.toISOString(),
              timeFormatted: timeStr,
              resolved: false
            }
          ]
        });
        yield saveLogRecord(updated);
      } else {
        const alertRecordId = `alert_${Date.now()}`;
        const emergencyRecord = {
          id: alertRecordId,
          date: formatDateYMD(alertTime),
          shift: calculateShift(alertTime),
          operatorId: currentOperator.id,
          operatorName: currentOperator.name,
          machineId: (selectedMachine == null ? void 0 : selectedMachine.id) || "",
          machineName: machName,
          machineQr: (selectedMachine == null ? void 0 : selectedMachine.qrCode) || "",
          processId: (selectedProcess == null ? void 0 : selectedProcess.id) || "",
          processName: procName,
          startTime: alertTime.toISOString(),
          endTime: null,
          durationSeconds: 0,
          durationHours: 0,
          unit: "",
          quantity: null,
          weightTons: null,
          weightKg: null,
          status: "ALERT POMOCY",
          alertActive: true,
          alertHistory: [
            {
              time: alertTime.toISOString(),
              timeFormatted: timeStr,
              resolved: false
            }
          ],
          notes: "WEZWANIE POMOCY PRZEZ OPERATORA"
        };
        yield saveLogRecord(emergencyRecord);
      }
      if (webhookUrl && webhookUrl.startsWith("http")) {
        fetch(webhookUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            operator: currentOperator.name,
            process: procName,
            machine: machName,
            time: timeStr,
            message: smsText,
            recipients: smsManagers.map((m) => m.phone)
          })
        }).catch(() => {
        });
      }
      setAlertModalData({
        smsText,
        timeStr,
        procName,
        machName
      });
    });
    const [currentWebUser, setCurrentWebUser] = (0, import_react3.useState)(null);
    const [webLoginName, setWebLoginName] = (0, import_react3.useState)("");
    const [webLoginPass, setWebLoginPass] = (0, import_react3.useState)("");
    const [webTab, setWebTab] = (0, import_react3.useState)("baza");
    const [filters, setFilters] = (0, import_react3.useState)({
      date: "",
      shift: "",
      operator: "",
      machine: "",
      process: "",
      status: "",
      unit: "",
      notes: ""
    });
    const [reportDate, setReportDate] = (0, import_react3.useState)(formatDateYMD(/* @__PURE__ */ new Date()));
    const [reportShift, setReportShift] = (0, import_react3.useState)("ALL");
    const [adminSubTab, setAdminSubTab] = (0, import_react3.useState)("operators");
    const [newOpName, setNewOpName] = (0, import_react3.useState)("");
    const [newOpPin, setNewOpPin] = (0, import_react3.useState)("");
    const [newMachName, setNewMachName] = (0, import_react3.useState)("");
    const [newMachQr, setNewMachQr] = (0, import_react3.useState)("");
    const [newProcName, setNewProcName] = (0, import_react3.useState)("");
    const [newProcReg, setNewProcReg] = (0, import_react3.useState)(false);
    const [newProcUnit, setNewProcUnit] = (0, import_react3.useState)("tony");
    const [newWebName, setNewWebName] = (0, import_react3.useState)("");
    const [newWebPass, setNewWebPass] = (0, import_react3.useState)("");
    const [newSmsName, setNewSmsName] = (0, import_react3.useState)("");
    const [newSmsPhone, setNewSmsPhone] = (0, import_react3.useState)("");
    const activeAlerts = (0, import_react3.useMemo)(
      () => logs.filter((l) => l.alertActive),
      [logs]
    );
    const handleAcknowledgeAlert = (logItem) => __async(this, null, function* () {
      const updatedHistory = (logItem.alertHistory || []).map((h) => __spreadProps(__spreadValues({}, h), {
        resolved: true,
        resolvedAt: (/* @__PURE__ */ new Date()).toISOString(),
        resolvedBy: (currentWebUser == null ? void 0 : currentWebUser.name) || "Dyspozytor WEB"
      }));
      const updatedLog = __spreadProps(__spreadValues({}, logItem), {
        alertActive: false,
        status: logItem.status === "ALERT POMOCY" ? "ALERT OBS\u0141U\u017BONY" : logItem.status,
        endTime: logItem.status === "ALERT POMOCY" ? (/* @__PURE__ */ new Date()).toISOString() : logItem.endTime,
        alertHistory: updatedHistory
      });
      yield saveLogRecord(updatedLog);
      showToast(`Potwierdzono udzielenie pomocy dla: ${logItem.operatorName}`, "success");
    });
    const filteredLogs = (0, import_react3.useMemo)(() => {
      return logs.filter((row) => {
        if (filters.date && !(row.date || "").includes(filters.date))
          return false;
        if (filters.shift && String(row.shift) !== filters.shift)
          return false;
        if (filters.operator && !(row.operatorName || "").toLowerCase().includes(filters.operator.toLowerCase()))
          return false;
        if (filters.machine && !(row.machineName || "").toLowerCase().includes(filters.machine.toLowerCase()) && !(row.machineQr || "").toLowerCase().includes(filters.machine.toLowerCase()))
          return false;
        if (filters.process && !(row.processName || "").toLowerCase().includes(filters.process.toLowerCase()))
          return false;
        if (filters.status && !(row.status || "").toLowerCase().includes(filters.status.toLowerCase()) && !(filters.status === "ALERT" && (row.alertActive || row.alertHistory && row.alertHistory.length > 0)))
          return false;
        if (filters.unit && !(row.unit || "").toLowerCase().includes(filters.unit.toLowerCase()))
          return false;
        if (filters.notes && !(row.notes || "").toLowerCase().includes(filters.notes.toLowerCase()))
          return false;
        return true;
      }).sort((a, b) => {
        if (a.alertActive && !b.alertActive)
          return -1;
        if (!a.alertActive && b.alertActive)
          return 1;
        if (a.status === "W TRAKCIE" && b.status !== "W TRAKCIE")
          return -1;
        if (a.status !== "W TRAKCIE" && b.status === "W TRAKCIE")
          return 1;
        return new Date(b.startTime) - new Date(a.startTime);
      });
    }, [logs, filters]);
    const exportBazaToExcel = () => {
      const headers = [
        "ID",
        "Data",
        "Zmiana",
        "Operator",
        "Maszyna",
        "Kod Maszyny",
        "Zakres wykonywanych prac",
        "Godz. START",
        "Godz. STOP",
        "Czas trwania (hh:mm:ss)",
        "Czas [godz.]",
        "Jednostka miary",
        "Ilo\u015B\u0107",
        "Waga [tony]",
        "Waga [kg]",
        "Status",
        "Historia ALERT",
        "Uwagi"
      ];
      const rows = filteredLogs.map((r) => {
        const liveSec = r.status === "W TRAKCIE" ? Math.max(0, Math.round((now - new Date(r.startTime)) / 1e3)) : r.durationSeconds;
        const liveHours = r.status === "W TRAKCIE" ? Number((liveSec / 3600).toFixed(3)) : r.durationHours;
        const alertInfo = r.alertHistory && r.alertHistory.length > 0 ? r.alertHistory.map((a) => `ALERT ${a.timeFormatted}`).join(" | ") : "BRAK";
        return [
          r.id,
          r.date,
          r.shift,
          r.operatorName,
          r.machineName,
          r.machineQr,
          r.processName,
          formatTimeHM(r.startTime),
          r.endTime ? formatTimeHM(r.endTime) : "W TRAKCIE",
          formatDuration(liveSec),
          String(liveHours || 0).replace(".", ","),
          r.unit || "-",
          r.quantity !== null && r.quantity !== void 0 ? String(r.quantity).replace(".", ",") : "",
          r.weightTons !== null && r.weightTons !== void 0 ? String(r.weightTons).replace(".", ",") : "",
          r.weightKg !== null && r.weightKg !== void 0 ? String(r.weightKg) : "",
          r.status,
          alertInfo,
          (r.notes || "").replace(/;/g, ",")
        ];
      });
      const csvContent = "\uFEFF" + [headers.join(";"), ...rows.map((e) => e.join(";"))].join("\n");
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `FADROMY_BAZA_WIDOK_${formatDateYMD(/* @__PURE__ */ new Date())}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast("Wyeksportowano BAZA_WIDOK do pliku Excel (.csv)!", "success");
    };
    const shiftReportData = (0, import_react3.useMemo)(() => {
      const matching = logs.filter((l) => {
        if (reportDate && l.date !== reportDate)
          return false;
        if (reportShift !== "ALL" && String(l.shift) !== reportShift)
          return false;
        return true;
      });
      const machineSummary = machines.map((m) => {
        const mLogs = matching.filter(
          (l) => l.machineId === m.id || l.machineName === m.name
        );
        let totalSec = 0;
        let totalTons = 0;
        let totalKg = 0;
        const otherUnits = {};
        mLogs.forEach((l) => {
          const sec = l.status === "W TRAKCIE" ? Math.max(0, Math.round((now - new Date(l.startTime)) / 1e3)) : l.durationSeconds || 0;
          totalSec += sec;
          if (l.weightTons)
            totalTons += Number(l.weightTons);
          if (l.weightKg)
            totalKg += Number(l.weightKg);
          if (l.unit && l.unit !== "tony" && l.unit !== "tony (z kg)" && l.quantity) {
            otherUnits[l.unit] = (otherUnits[l.unit] || 0) + Number(l.quantity);
          }
        });
        return {
          machine: m,
          count: mLogs.length,
          totalSec,
          totalHours: Number((totalSec / 3600).toFixed(2)),
          totalTons: Number(totalTons.toFixed(2)),
          totalKg: Math.round(totalKg),
          otherUnits
        };
      });
      const breakdownMap = {};
      matching.forEach((l) => {
        const key = `${l.machineName}|||${l.processName}`;
        if (!breakdownMap[key]) {
          breakdownMap[key] = {
            machineName: l.machineName,
            machineQr: l.machineQr,
            processName: l.processName,
            count: 0,
            totalSec: 0,
            totalTons: 0,
            totalKg: 0,
            unit: l.unit || "",
            totalOtherQty: 0
          };
        }
        const sec = l.status === "W TRAKCIE" ? Math.max(0, Math.round((now - new Date(l.startTime)) / 1e3)) : l.durationSeconds || 0;
        breakdownMap[key].count += 1;
        breakdownMap[key].totalSec += sec;
        if (l.weightTons)
          breakdownMap[key].totalTons += Number(l.weightTons);
        if (l.weightKg)
          breakdownMap[key].totalKg += Number(l.weightKg);
        if (l.unit && l.unit !== "tony" && l.unit !== "tony (z kg)" && l.quantity) {
          breakdownMap[key].totalOtherQty += Number(l.quantity);
        }
      });
      const breakdownList = Object.values(breakdownMap).sort(
        (a, b) => a.machineName.localeCompare(b.machineName)
      );
      return { machineSummary, breakdownList, totalRecords: matching.length };
    }, [logs, machines, reportDate, reportShift, now]);
    const exportShiftReportToExcel = () => {
      const headers = [
        "Data raportu",
        "Zmiana",
        "Maszyna",
        "Kod maszyny",
        "Zakres wykonywanych prac",
        "Liczba operacji",
        "Czas \u0142\u0105czny (hh:mm:ss)",
        "Czas \u0142\u0105czny [godz.]",
        "Suma Waga [t]",
        "Suma Waga [kg]",
        "Jednostka dodatkowa",
        "Suma jednostek dodatkowych"
      ];
      const rows = shiftReportData.breakdownList.map((item) => [
        reportDate || "Wszystkie",
        reportShift === "ALL" ? "Wszystkie (1,2,3)" : `Zmiana ${reportShift}`,
        item.machineName,
        item.machineQr,
        item.processName,
        item.count,
        formatDuration(item.totalSec),
        String((item.totalSec / 3600).toFixed(2)).replace(".", ","),
        String(item.totalTons.toFixed(2)).replace(".", ","),
        String(Math.round(item.totalKg)),
        item.unit && !item.unit.includes("tony") ? item.unit : "-",
        item.totalOtherQty ? String(item.totalOtherQty).replace(".", ",") : "0"
      ]);
      const csvContent = "\uFEFF" + [headers.join(";"), ...rows.map((e) => e.join(";"))].join("\n");
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `FADROMY_RAPORT_ZMIANY_${reportDate}_Z${reportShift}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast("Wyeksportowano Raport Zmian do Excela (.csv)!", "success");
    };
    if (appMode === "landing") {
      return /* @__PURE__ */ import_react3.default.createElement("div", { className: "min-h-screen bg-slate-950 text-white flex flex-col justify-between p-4 sm:p-8" }, toast && /* @__PURE__ */ import_react3.default.createElement("div", { className: "fixed top-4 right-4 z-50 bg-slate-800 border-l-4 border-amber-500 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3" }, /* @__PURE__ */ import_react3.default.createElement(Info, { className: "w-5 h-5 text-amber-400 shrink-0" }), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-sm font-medium" }, toast.message)), /* @__PURE__ */ import_react3.default.createElement("header", { className: "max-w-5xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-6" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-2xl shadow-lg shadow-amber-500/20" }, /* @__PURE__ */ import_react3.default.createElement(Truck, { className: "w-7 h-7" })), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("h1", { className: "text-2xl sm:text-3xl font-black tracking-tight text-white" }, "APLIKACJA ", /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-amber-400" }, "FADROMY")), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-xs sm:text-sm text-slate-400" }, "System Ewidencji Czasu Pracy, Za\u0142adunk\xF3w i Alert\xF3w Operator\xF3w"))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800" }, /* @__PURE__ */ import_react3.default.createElement(Clock, { className: "w-4 h-4 text-amber-400" }), /* @__PURE__ */ import_react3.default.createElement("span", { className: "font-mono text-sm font-bold" }, formatTimeHM(now)), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold" }, "ZMIANA ", calculateShift(now)))), /* @__PURE__ */ import_react3.default.createElement("main", { className: "max-w-5xl mx-auto w-full my-auto py-8" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" }, /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          onClick: () => setAppMode("operator"),
          className: "group text-left bg-gradient-to-br from-slate-900 to-slate-900/60 hover:from-amber-500/15 hover:to-slate-900 border-2 border-slate-800 hover:border-amber-500 rounded-3xl p-6 sm:p-8 transition-all shadow-xl flex flex-col justify-between"
        },
        /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center justify-between mb-6" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-110 transition" }, /* @__PURE__ */ import_react3.default.createElement(Smartphone, { className: "w-8 h-8" })), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500 text-slate-950" }, "Android / Telefon")), /* @__PURE__ */ import_react3.default.createElement("h2", { className: "text-2xl sm:text-3xl font-black text-white mb-2" }, "PANEL OPERATORA"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-slate-400 text-sm sm:text-base mb-6" }, "Szybkie logowanie kodem QR lub PIN-em, wyb\xF3r \u0142adowarki, rejestracja czasu START/STOP, przelicznik ton/kg oraz przycisk alarmowy ALERT POMOCY.")),
        /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center justify-between pt-4 border-t border-slate-800 text-amber-400 font-bold" }, /* @__PURE__ */ import_react3.default.createElement("span", null, "Uruchom terminal operatora"), /* @__PURE__ */ import_react3.default.createElement(ChevronRight, { className: "w-6 h-6 group-hover:translate-x-1 transition" }))
      ), /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          onClick: () => setAppMode("web"),
          className: "group text-left bg-gradient-to-br from-slate-900 to-slate-900/60 hover:from-blue-500/15 hover:to-slate-900 border-2 border-slate-800 hover:border-blue-500 rounded-3xl p-6 sm:p-8 transition-all shadow-xl flex flex-col justify-between relative"
        },
        activeAlerts.length > 0 && /* @__PURE__ */ import_react3.default.createElement("div", { className: "absolute -top-3 -right-3 bg-red-600 text-white text-xs font-black px-3 py-1.5 rounded-full animate-bounce shadow-lg flex items-center gap-1.5" }, /* @__PURE__ */ import_react3.default.createElement(BellRing, { className: "w-4 h-4" }), "AKTYWNY ALERT (", activeAlerts.length, ")!"),
        /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center justify-between mb-6" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "w-14 h-14 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition" }, /* @__PURE__ */ import_react3.default.createElement(Monitor, { className: "w-8 h-8" })), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500 text-white" }, "Przegl\u0105darka WEB")), /* @__PURE__ */ import_react3.default.createElement("h2", { className: "text-2xl sm:text-3xl font-black text-white mb-2" }, "PANEL NADZORU I ADMINA"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-slate-400 text-sm sm:text-base mb-6" }, "Podgl\u0105d na \u017Cywo BAZA_WIDOK, odbi\xF3r alert\xF3w (czerwone pulsowanie), raportowanie zmian na maszyny, eksport do Excela oraz generowanie kod\xF3w QR do druku.")),
        /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center justify-between pt-4 border-t border-slate-800 text-blue-400 font-bold" }, /* @__PURE__ */ import_react3.default.createElement("span", null, "Otw\xF3rz centrum zarz\u0105dzania"), /* @__PURE__ */ import_react3.default.createElement(ChevronRight, { className: "w-6 h-6 group-hover:translate-x-1 transition" }))
      ))), /* @__PURE__ */ import_react3.default.createElement("footer", { className: "max-w-5xl mx-auto w-full bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ import_react3.default.createElement(Database, { className: `w-4 h-4 ${cloudConnected ? "text-emerald-400" : "text-amber-400"}` }), /* @__PURE__ */ import_react3.default.createElement("span", null, "Status bazy:", " ", /* @__PURE__ */ import_react3.default.createElement("strong", { className: "text-slate-200" }, cloudConnected ? "Baza MySQL (Synchronizacja z serwerem)" : "Brak po\u0142\u0105czenia z baz\u0105 MySQL"))), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("strong", null, "Instalacja na Android:"), " Otw\xF3rz w Chrome \u2192 Menu (\u22EE) \u2192 ", /* @__PURE__ */ import_react3.default.createElement("em", null, "\u201EDodaj do ekranu g\u0142\xF3wnego\u201D"))));
    }
    if (appMode === "operator") {
      const liveSeconds = activeOperatorLog ? Math.max(0, Math.round((now - new Date(activeOperatorLog.startTime)) / 1e3)) : 0;
      return /* @__PURE__ */ import_react3.default.createElement("div", { className: "min-h-screen bg-slate-950 text-white flex flex-col justify-between select-none" }, toast && /* @__PURE__ */ import_react3.default.createElement(
        "div",
        {
          className: `fixed top-16 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl shadow-2xl font-bold text-sm flex items-center gap-2 border-2 ${toast.type === "error" ? "bg-red-950 border-red-500 text-red-100" : toast.type === "success" ? "bg-emerald-950 border-emerald-500 text-emerald-100" : "bg-slate-900 border-amber-500 text-amber-100"}`
        },
        /* @__PURE__ */ import_react3.default.createElement("span", null, toast.message)
      ), /* @__PURE__ */ import_react3.default.createElement(
        QrScannerModal,
        {
          isOpen: qrModalMode !== null,
          mode: qrModalMode,
          onClose: () => setQrModalMode(null),
          onScan: handleQrScanResult,
          mockItems: qrModalMode === "operator" ? [] : machines.map((m) => ({
            label: m.name,
            payload: m.qrCode
          }))
        }
      ), alertModalData && /* @__PURE__ */ import_react3.default.createElement("div", { className: "fixed inset-0 z-50 bg-red-950/95 flex items-center justify-center p-4" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-slate-900 border-4 border-red-500 rounded-3xl max-w-md w-full p-6 text-center shadow-2xl" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto mb-4 animate-ping" }, /* @__PURE__ */ import_react3.default.createElement(TriangleAlert, { className: "w-10 h-10" })), /* @__PURE__ */ import_react3.default.createElement("h2", { className: "text-2xl font-black text-red-400 mb-2" }, "ALERT ZAREJESTROWANY W SYSTEMIE!"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-slate-300 text-sm mb-4" }, "Tw\xF3j wiersz w Panelu WEB pulsuje na czerwono dla nadzoru."), /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-slate-950 border border-slate-700 rounded-xl p-3 text-left mb-5" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs text-slate-400 uppercase mb-1" }, "Tre\u015B\u0107 komunikatu SMS:"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "font-mono text-sm text-amber-300 font-bold" }, alertModalData.smsText), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs text-slate-400 mt-2" }, "Odbiorcy (", smsManagers.length, "): ", smsManagers.map((m) => m.name).join(", "))), /* @__PURE__ */ import_react3.default.createElement(
        "a",
        {
          href: `sms:${smsManagers.map((m) => m.phone).join(",")}?body=${encodeURIComponent(
            alertModalData.smsText
          )}`,
          className: "w-full mb-3 py-4 px-5 bg-red-600 hover:bg-red-500 text-white font-black text-lg rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-red-600/30"
        },
        /* @__PURE__ */ import_react3.default.createElement(MessageSquare, { className: "w-6 h-6" }),
        "WY\u015ALIJ SMS Z TELEFONU"
      ), /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          onClick: () => setAlertModalData(null),
          className: "w-full py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-2xl"
        },
        "Zamknij okno komunikatu"
      ))), /* @__PURE__ */ import_react3.default.createElement("header", { className: "sticky top-0 z-30 bg-slate-900 border-b-2 border-slate-800 px-3 py-2.5 flex items-center justify-between gap-2" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center gap-2 min-w-0" }, !currentOperator && /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          onClick: () => setAppMode("landing"),
          className: "p-2 bg-slate-800 rounded-xl text-slate-300 hover:text-white",
          title: "Powr\xF3t do ekranu startowego"
        },
        /* @__PURE__ */ import_react3.default.createElement(ArrowLeft, { className: "w-5 h-5" })
      ), /* @__PURE__ */ import_react3.default.createElement("div", { className: "truncate" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs text-amber-400 font-bold uppercase tracking-wider" }, "ZMIANA ", calculateShift(now), " \u2022 ", formatTimeHM(now)), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-sm sm:text-base font-black text-white truncate" }, currentOperator ? currentOperator.name : "APLIKACJA FADROMY"))), currentOperator && /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          onClick: handleTriggerAlert,
          className: "bg-red-600 hover:bg-red-500 active:scale-95 text-white font-black px-4 py-2.5 rounded-2xl flex items-center gap-2 shadow-lg shadow-red-600/40 border-2 border-red-400 animate-pulse shrink-0"
        },
        /* @__PURE__ */ import_react3.default.createElement(TriangleAlert, { className: "w-6 h-6" }),
        /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-sm sm:text-base" }, "ALERT")
      )), /* @__PURE__ */ import_react3.default.createElement("main", { className: "flex-1 max-w-xl w-full mx-auto p-4 flex flex-col justify-center" }, !currentOperator ? /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-slate-900 border-2 border-slate-800 rounded-3xl p-5 sm:p-7 shadow-2xl" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-center mb-6" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "w-16 h-16 bg-amber-500 text-slate-950 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg" }, /* @__PURE__ */ import_react3.default.createElement(UserCheck, { className: "w-9 h-9" })), /* @__PURE__ */ import_react3.default.createElement("h1", { className: "text-2xl font-black text-white" }, "LOGOWANIE OPERATORA"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-slate-400 text-sm" }, "Zeskanuj identyfikator QR lub wybierz swoje nazwisko i wpisz PIN")), /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          type: "button",
          onClick: () => setQrModalMode("operator"),
          className: "w-full py-4 px-5 mb-6 bg-amber-500 hover:bg-amber-400 active:scale-98 text-slate-950 font-black text-lg rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-amber-500/20 transition"
        },
        /* @__PURE__ */ import_react3.default.createElement(QrCode, { className: "w-7 h-7" }),
        "SKANUJ QR OPERATORA"
      ), /* @__PURE__ */ import_react3.default.createElement("div", { className: "relative flex py-2 items-center mb-5" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex-grow border-t border-slate-700" }), /* @__PURE__ */ import_react3.default.createElement("span", { className: "flex-shrink mx-3 text-xs uppercase text-slate-400 font-bold" }, "LUB LOGOWANIE R\u0118CZNE"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex-grow border-t border-slate-700" })), /* @__PURE__ */ import_react3.default.createElement("form", { onSubmit: handleOperatorLogin, className: "space-y-4" }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("label", { className: "block text-xs font-bold uppercase text-slate-400 mb-1.5" }, "Wybierz Operatora z listy:"), /* @__PURE__ */ import_react3.default.createElement(
        "select",
        {
          value: loginSelectedOpId,
          onChange: (e) => {
            setLoginSelectedOpId(e.target.value);
            setLoginNameInput("");
          },
          className: "w-full bg-slate-950 border-2 border-slate-700 focus:border-amber-500 rounded-2xl px-4 py-3.5 text-base font-bold text-white"
        },
        /* @__PURE__ */ import_react3.default.createElement("option", { value: "" }, "-- Wybierz z listy (", operators.length, ") --"),
        operators.map((op) => /* @__PURE__ */ import_react3.default.createElement("option", { key: op.id, value: op.id }, op.lp, ". ", op.name))
      )), !loginSelectedOpId && /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("label", { className: "block text-xs font-bold uppercase text-slate-400 mb-1.5" }, "Lub wpisz Imi\u0119 i Nazwisko:"), /* @__PURE__ */ import_react3.default.createElement(
        "input",
        {
          type: "text",
          value: loginNameInput,
          onChange: (e) => setLoginNameInput(e.target.value),
          placeholder: "np. Sebastian Kap\u0142oniak",
          className: "w-full bg-slate-950 border-2 border-slate-700 focus:border-amber-500 rounded-2xl px-4 py-3 text-base text-white"
        }
      )), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("label", { className: "block text-xs font-bold uppercase text-slate-400 mb-1.5" }, "Has\u0142o (4 cyfry PIN):"), /* @__PURE__ */ import_react3.default.createElement(
        "input",
        {
          type: "password",
          inputMode: "numeric",
          maxLength: 8,
          value: loginPinInput,
          onChange: (e) => setLoginPinInput(e.target.value),
          placeholder: "\u2022\u2022\u2022\u2022",
          className: "w-full bg-slate-950 border-2 border-slate-700 focus:border-amber-500 rounded-2xl px-4 py-3.5 text-2xl font-mono tracking-widest text-center text-amber-400 font-black"
        }
      )), /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          type: "submit",
          className: "w-full py-4 bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-black text-lg rounded-2xl shadow-lg transition"
        },
        "ZALOGUJ DO PRACY"
      ))) : /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, opStep === "machine" && /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-xs font-bold uppercase tracking-wider text-amber-400" }, "KROK 1 z 3"), /* @__PURE__ */ import_react3.default.createElement("h2", { className: "text-2xl font-black text-white" }, "WYBIERZ MASZYN\u0118")), /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          onClick: () => setQrModalMode("machine"),
          className: "w-full py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-lg rounded-2xl flex items-center justify-center gap-3 shadow-lg"
        },
        /* @__PURE__ */ import_react3.default.createElement(QrCode, { className: "w-7 h-7" }),
        "SKANUJ QR MASZYNY"
      ), /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-1 gap-3" }, machines.map((m) => /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          key: m.id,
          onClick: () => {
            setSelectedMachine(m);
            setOpStep("process");
          },
          className: "p-5 bg-slate-900 hover:bg-slate-800 active:bg-amber-500/20 border-2 border-slate-700 hover:border-amber-400 rounded-2xl flex items-center justify-between text-left transition shadow-md"
        },
        /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0" }, /* @__PURE__ */ import_react3.default.createElement(Truck, { className: "w-7 h-7" })), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-lg sm:text-xl font-black text-white" }, m.name), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs font-mono text-amber-300" }, "QR: ", m.qrCode))),
        /* @__PURE__ */ import_react3.default.createElement(ChevronRight, { className: "w-7 h-7 text-slate-500" })
      )))), opStep === "process" && /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-slate-900 border-2 border-amber-500/40 rounded-2xl p-3.5 flex items-center justify-between" }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-[11px] uppercase text-slate-400 font-bold" }, "Wybrana maszyna:"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-base font-black text-amber-400" }, selectedMachine == null ? void 0 : selectedMachine.name, " (", selectedMachine == null ? void 0 : selectedMachine.qrCode, ")")), /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          onClick: () => setOpStep("machine"),
          className: "px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-white border border-slate-600"
        },
        "Zmie\u0144 maszyn\u0119"
      )), /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-slate-900 border border-slate-800 rounded-2xl p-3" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-center mb-2" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-xs font-bold uppercase tracking-wider text-amber-400" }, "KROK 2 z 3"), /* @__PURE__ */ import_react3.default.createElement("h2", { className: "text-xl font-black text-white" }, "ZAKRES WYKONYWANYCH PRAC")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "relative" }, /* @__PURE__ */ import_react3.default.createElement(Search, { className: "w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" }), /* @__PURE__ */ import_react3.default.createElement(
        "input",
        {
          type: "text",
          value: processSearch,
          onChange: (e) => setProcessSearch(e.target.value),
          placeholder: "Filtruj czynno\u015B\u0107 po nazwie lub numerze...",
          className: "w-full bg-slate-950 border border-slate-700 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white"
        }
      ))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-1 gap-2.5 max-h-[55vh] overflow-y-auto pr-1" }, processes.filter(
        (p) => p.name.toLowerCase().includes(processSearch.toLowerCase()) || String(p.lp) === processSearch.trim()
      ).map((proc) => /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          key: proc.id,
          onClick: () => {
            setSelectedProcess(proc);
            setWorkNotes("");
            setOpStep("work");
          },
          className: "p-4 bg-slate-900 hover:bg-slate-800 active:bg-amber-500/20 border-2 border-slate-800 hover:border-amber-400 rounded-2xl flex items-center justify-between text-left transition"
        },
        /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "w-8 h-8 rounded-lg bg-slate-800 text-amber-400 font-black text-sm flex items-center justify-center shrink-0" }, proc.lp), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-base sm:text-lg font-bold text-white" }, proc.name)),
        proc.registerUnits && /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-[11px] font-bold uppercase px-2.5 py-1 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/40 shrink-0 ml-2" }, proc.unit)
      )))), opStep === "work" && /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-slate-900 border-2 border-slate-800 rounded-3xl p-5 space-y-3" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center justify-between border-b border-slate-800 pb-3" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-xs font-bold uppercase text-amber-400" }, "KROK 3 z 3 \u2022 REJESTRACJA CZASU"), !activeOperatorLog && /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          onClick: () => setOpStep("process"),
          className: "text-xs bg-slate-800 px-3 py-1.5 rounded-lg font-bold text-slate-300"
        },
        "\u2190 Zmie\u0144 proces"
      )), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs text-slate-400 uppercase" }, "Maszyna:"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-lg font-black text-amber-400" }, selectedMachine == null ? void 0 : selectedMachine.name, " (", selectedMachine == null ? void 0 : selectedMachine.qrCode, ")")), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs text-slate-400 uppercase" }, "Zakres prac:"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xl font-black text-white" }, selectedProcess == null ? void 0 : selectedProcess.lp, ". ", selectedProcess == null ? void 0 : selectedProcess.name), (selectedProcess == null ? void 0 : selectedProcess.registerUnits) && /* @__PURE__ */ import_react3.default.createElement("div", { className: "inline-block mt-1 text-xs font-bold px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-300" }, "Po zako\u0144czeniu wymagane podanie ilo\u015Bci: ", selectedProcess.unit)), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("label", { className: "block text-xs font-bold uppercase text-slate-400 mb-1" }, "Uwagi do procesu ", (selectedProcess == null ? void 0 : selectedProcess.lp) === 23 ? "(WYMAGANY OPIS)" : "(opcjonalnie)", ":"), /* @__PURE__ */ import_react3.default.createElement(
        "input",
        {
          type: "text",
          value: workNotes,
          onChange: (e) => setWorkNotes(e.target.value),
          placeholder: "Wpisz opis lub dodatkowe informacje...",
          className: "w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white"
        }
      ))), !activeOperatorLog ? /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          onClick: handleStartWork,
          className: "w-full py-10 bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white rounded-3xl shadow-2xl shadow-emerald-600/30 border-4 border-emerald-400 flex flex-col items-center justify-center gap-2 transition"
        },
        /* @__PURE__ */ import_react3.default.createElement(Play, { className: "w-16 h-16 fill-current" }),
        /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-4xl font-black tracking-wider" }, "START"),
        /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-xs uppercase font-bold text-emerald-100" }, "Rozpocznij rejestracj\u0119 procesu")
      ) : /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-emerald-950/50 border-2 border-emerald-500 rounded-3xl p-5 text-center" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs font-bold uppercase text-emerald-400 tracking-widest mb-1 animate-pulse" }, "\u25CF PROCES W TRAKCIE REALIZACJI"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-4xl sm:text-5xl font-mono font-black text-white my-2" }, formatDuration(liveSeconds)), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs text-slate-300" }, "Rozpocz\u0119to: ", /* @__PURE__ */ import_react3.default.createElement("strong", null, formatTimeHM(activeOperatorLog.startTime)), " (Zmiana ", activeOperatorLog.shift, ")")), /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          onClick: handleStopWork,
          className: "w-full py-10 bg-red-600 hover:bg-red-500 active:scale-98 text-white rounded-3xl shadow-2xl shadow-red-600/30 border-4 border-red-400 flex flex-col items-center justify-center gap-2 transition"
        },
        /* @__PURE__ */ import_react3.default.createElement(Square, { className: "w-16 h-16 fill-current" }),
        /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-4xl font-black tracking-wider" }, "STOP"),
        /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-xs uppercase font-bold text-red-100" }, "Zako\u0144cz operacj\u0119")
      ))), opStep === "quantity" && /* @__PURE__ */ import_react3.default.createElement(
        "form",
        {
          onSubmit: handleConfirmQuantity,
          className: "bg-slate-900 border-2 border-blue-500 rounded-3xl p-5 sm:p-6 space-y-5 shadow-2xl"
        },
        /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-center" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-xs font-bold uppercase tracking-wider text-blue-400" }, "REJESTR JEDNOSTEK"), /* @__PURE__ */ import_react3.default.createElement("h2", { className: "text-2xl font-black text-white mt-1" }, "PODAJ WYKONAN\u0104 ILO\u015A\u0106"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-sm text-slate-400 mt-1" }, "Proces: ", /* @__PURE__ */ import_react3.default.createElement("strong", { className: "text-white" }, selectedProcess == null ? void 0 : selectedProcess.name))),
        (selectedProcess == null ? void 0 : selectedProcess.unit) === "tony" || (selectedProcess == null ? void 0 : selectedProcess.unit) === "kg" ? /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-2 gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800" }, /* @__PURE__ */ import_react3.default.createElement(
          "button",
          {
            type: "button",
            onClick: () => setWeightInputMode("tony"),
            className: `py-3 rounded-xl font-black text-sm transition ${weightInputMode === "tony" ? "bg-amber-500 text-slate-950" : "text-slate-400 hover:text-white"}`
          },
          "TONY (t)"
        ), /* @__PURE__ */ import_react3.default.createElement(
          "button",
          {
            type: "button",
            onClick: () => setWeightInputMode("kg"),
            className: `py-3 rounded-xl font-black text-sm transition ${weightInputMode === "kg" ? "bg-amber-500 text-slate-950" : "text-slate-400 hover:text-white"}`
          },
          "KILOGRAMY (kg)"
        )), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("label", { className: "block text-xs font-bold uppercase text-slate-400 mb-1.5" }, "Wpisz ilo\u015B\u0107 (", weightInputMode === "tony" ? "w tonach" : "w kilogramach", "):"), /* @__PURE__ */ import_react3.default.createElement(
          "input",
          {
            type: "number",
            step: "any",
            inputMode: "decimal",
            required: true,
            autoFocus: true,
            value: quantityInput,
            onChange: (e) => setQuantityInput(e.target.value),
            placeholder: weightInputMode === "tony" ? "np. 24.5" : "np. 24500",
            className: "w-full bg-slate-950 border-2 border-amber-500 rounded-2xl px-4 py-4 text-3xl font-mono font-black text-center text-white"
          }
        )), /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-slate-950 border border-slate-800 rounded-2xl p-3.5 flex items-center justify-around text-center" }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-[11px] uppercase text-slate-400" }, "Zapis w Tonach:"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-lg font-mono font-black text-emerald-400" }, (() => {
          const v = parseFloat(String(quantityInput).replace(",", "."));
          if (isNaN(v))
            return "0.000 t";
          return weightInputMode === "tony" ? `${v.toFixed(3)} t` : `${(v / 1e3).toFixed(3)} t`;
        })())), /* @__PURE__ */ import_react3.default.createElement(Scale, { className: "w-6 h-6 text-slate-600" }), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-[11px] uppercase text-slate-400" }, "Zapis w Kilogramach:"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-lg font-mono font-black text-blue-400" }, (() => {
          const v = parseFloat(String(quantityInput).replace(",", "."));
          if (isNaN(v))
            return "0 kg";
          return weightInputMode === "tony" ? `${Math.round(v * 1e3)} kg` : `${Math.round(v)} kg`;
        })())))) : (
          /* Jednostki nieprzeliczeniowe: big-bag, palety, sztuki */
          /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("label", { className: "block text-xs font-bold uppercase text-slate-400 mb-1.5" }, "Wpisz liczb\u0119 (", selectedProcess == null ? void 0 : selectedProcess.unit, "):"), /* @__PURE__ */ import_react3.default.createElement(
            "input",
            {
              type: "number",
              step: "any",
              inputMode: "decimal",
              required: true,
              autoFocus: true,
              value: quantityInput,
              onChange: (e) => setQuantityInput(e.target.value),
              placeholder: `Ilo\u015B\u0107 (${selectedProcess == null ? void 0 : selectedProcess.unit})`,
              className: "w-full bg-slate-950 border-2 border-blue-500 rounded-2xl px-4 py-4 text-3xl font-mono font-black text-center text-white"
            }
          ))
        ),
        /* @__PURE__ */ import_react3.default.createElement(
          "button",
          {
            type: "submit",
            className: "w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xl rounded-2xl flex items-center justify-center gap-2 shadow-lg"
          },
          /* @__PURE__ */ import_react3.default.createElement(Check, { className: "w-7 h-7" }),
          "ZATWIERD\u0179 I DALEJ"
        )
      ))), /* @__PURE__ */ import_react3.default.createElement("footer", { className: "sticky bottom-0 z-30 bg-slate-900 border-t-2 border-slate-800 p-3" }, currentOperator ? /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          onClick: handleOperatorLogout,
          className: "w-full max-w-xl mx-auto py-3.5 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 border border-slate-600 text-slate-200 font-black text-base rounded-2xl flex items-center justify-center gap-2 transition"
        },
        /* @__PURE__ */ import_react3.default.createElement(LogOut, { className: "w-5 h-5 text-amber-400" }),
        "WYLOGUJ OPERATORA (",
        currentOperator.name,
        ")"
      ) : /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-center text-xs text-slate-500" }, "APLIKACJA FADROMY \u2022 Tryb Operatora Android / PWA")));
    }
    const handleWebLogin = (e) => __async(this, null, function* () {
      e.preventDefault();
      if (!webLoginName.trim() || !webLoginPass.trim()) {
        showToast("Wybierz u\u017Cytkownika i wpisz has\u0142o.", "error");
        return;
      }
      try {
        const res = yield apiRequest("login_web", { name: webLoginName.trim(), password: webLoginPass.trim() });
        bumpSession();
        setWebLoginPass("");
        setCurrentWebUser(res.webUser);
        sessionRef.current = __spreadProps(__spreadValues({}, sessionRef.current), { webUser: res.webUser });
        showToast(`Witaj w Panelu WEB, ${res.webUser.name}!`, "success");
        refreshState().catch(markDbError);
      } catch (err) {
        setWebLoginPass("");
        showToast(err.message || "B\u0142\u0119dny login lub has\u0142o u\u017Cytkownika WEB!", "error");
      }
    });
    if (!currentWebUser) {
      return /* @__PURE__ */ import_react3.default.createElement("div", { className: "min-h-screen bg-slate-100 text-slate-900 flex flex-col items-center justify-center p-4" }, toast && /* @__PURE__ */ import_react3.default.createElement("div", { className: "fixed top-4 right-4 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl text-sm font-bold" }, toast.message), /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-white border border-slate-200 rounded-3xl shadow-xl max-w-md w-full p-8" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center justify-between mb-6" }, /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          onClick: () => setAppMode("landing"),
          className: "text-sm text-slate-500 hover:text-slate-900 flex items-center gap-1 font-semibold"
        },
        /* @__PURE__ */ import_react3.default.createElement(ArrowLeft, { className: "w-4 h-4" }),
        " Powr\xF3t"
      ), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700" }, "PANEL WEB")), /* @__PURE__ */ import_react3.default.createElement("h1", { className: "text-2xl font-black text-slate-900 mb-1" }, "LOGOWANIE DO PANELU NADZORU"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-sm text-slate-500 mb-6" }, "Dost\u0119p dla Kierownik\xF3w Projektu i Administrator\xF3w bazy Fadromy"), /* @__PURE__ */ import_react3.default.createElement("form", { onSubmit: handleWebLogin, className: "space-y-4" }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("label", { className: "block text-xs font-bold uppercase text-slate-500 mb-1" }, "U\u017Cytkownik WEB:"), /* @__PURE__ */ import_react3.default.createElement(
        "select",
        {
          value: webLoginName,
          onChange: (e) => {
            setWebLoginName(e.target.value);
            setWebLoginPass("");
          },
          className: "w-full border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold bg-slate-50"
        },
        /* @__PURE__ */ import_react3.default.createElement("option", { value: "" }, "-- Wybierz u\u017Cytkownika --"),
        webUsers.map((u) => /* @__PURE__ */ import_react3.default.createElement("option", { key: u.id, value: u.name }, u.name, " (", u.role, ")"))
      )), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("label", { className: "block text-xs font-bold uppercase text-slate-500 mb-1" }, "Has\u0142o dost\u0119pu:"), /* @__PURE__ */ import_react3.default.createElement(
        "input",
        {
          type: "password",
          value: webLoginPass,
          onChange: (e) => setWebLoginPass(e.target.value),
          className: "w-full border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-mono"
        }
      )), /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          type: "submit",
          className: "w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition"
        },
        "Zaloguj do Panelu WEB"
      ))));
    }
    return /* @__PURE__ */ import_react3.default.createElement("div", { className: "min-h-screen bg-slate-100 text-slate-900 flex flex-col" }, toast && /* @__PURE__ */ import_react3.default.createElement("div", { className: "fixed bottom-5 right-5 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border-l-4 border-amber-500 text-sm font-semibold" }, toast.message), activeAlerts.length > 0 && /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-red-600 text-white px-4 py-3 shadow-lg animate-pulse print:hidden" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ import_react3.default.createElement(ShieldAlert, { className: "w-8 h-8 shrink-0" }), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", { className: "font-black text-base uppercase tracking-wide" }, "UWAGA POMOC! OPERATOR WZYWA WSPARCIE (", activeAlerts.length, ")"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs text-red-100" }, activeAlerts.map(
      (a) => {
        var _a, _b;
        return `${a.operatorName} | ${a.machineName} | ${a.processName} (godz. ${((_b = (_a = a.alertHistory) == null ? void 0 : _a[a.alertHistory.length - 1]) == null ? void 0 : _b.timeFormatted) || ""})`;
      }
    ).join(" \u2022 ")))), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => handleAcknowledgeAlert(activeAlerts[0]),
        className: "bg-white text-red-700 hover:bg-red-50 font-black text-xs uppercase px-4 py-2 rounded-xl shadow shrink-0"
      },
      "Potwierd\u017A przyj\u0119cie zg\u0142oszenia"
    ))), /* @__PURE__ */ import_react3.default.createElement("header", { className: "bg-slate-900 text-white px-4 sm:px-6 py-3.5 shadow-md print:hidden" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black" }, /* @__PURE__ */ import_react3.default.createElement(Truck, { className: "w-6 h-6" })), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", { className: "font-black text-lg tracking-tight" }, "APLIKACJA FADROMY ", /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-amber-400 text-xs font-bold ml-1" }, "WEB NADZ\xD3R")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs text-slate-400" }, "Zalogowany: ", /* @__PURE__ */ import_react3.default.createElement("strong", { className: "text-white" }, currentWebUser.name), " \u2022 Zmiana ", calculateShift(now), " (", formatTimeHM(now), ")"))), /* @__PURE__ */ import_react3.default.createElement("nav", { className: "flex flex-wrap items-center gap-1.5" }, /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => setWebTab("baza"),
        className: `px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition ${webTab === "baza" ? "bg-amber-500 text-slate-950" : "bg-slate-800 text-slate-300 hover:bg-slate-700"}`
      },
      /* @__PURE__ */ import_react3.default.createElement(Database, { className: "w-4 h-4" }),
      "BAZA_WIDOK (Rejestr)"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => setWebTab("raport"),
        className: `px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition ${webTab === "raport" ? "bg-amber-500 text-slate-950" : "bg-slate-800 text-slate-300 hover:bg-slate-700"}`
      },
      /* @__PURE__ */ import_react3.default.createElement(ChartColumn, { className: "w-4 h-4" }),
      "Raportowanie - ZMIANY"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => setWebTab("admin"),
        className: `px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition ${webTab === "admin" ? "bg-amber-500 text-slate-950" : "bg-slate-800 text-slate-300 hover:bg-slate-700"}`
      },
      /* @__PURE__ */ import_react3.default.createElement(Settings, { className: "w-4 h-4" }),
      "S\u0142owniki i Baza"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => setWebTab("qr_print"),
        className: `px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition ${webTab === "qr_print" ? "bg-amber-500 text-slate-950" : "bg-slate-800 text-slate-300 hover:bg-slate-700"}`
      },
      /* @__PURE__ */ import_react3.default.createElement(QrCode, { className: "w-4 h-4" }),
      "Kody QR do druku"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => setAppMode("operator"),
        className: "px-3 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 ml-2",
        title: "Prze\u0142\u0105cz na widok telefonu Operatora"
      },
      /* @__PURE__ */ import_react3.default.createElement(Smartphone, { className: "w-4 h-4" }),
      "Widok Operatora"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => {
          bumpSession();
          apiRequest("logout", { scope: "web" }).catch(() => {
          });
          setCurrentWebUser(null);
          setAppMode("landing");
        },
        className: "px-3 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white"
      },
      "Wyloguj"
    )))), /* @__PURE__ */ import_react3.default.createElement("main", { className: "flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6" }, webTab === "baza" && /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("h2", { className: "text-xl font-black text-slate-900" }, "BAZA_WIDOK \u2014 Rejestr Narastaj\u0105cy Czynno\u015Bci Operator\xF3w"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-xs sm:text-sm text-slate-500" }, "Wy\u015Bwietlono ", /* @__PURE__ */ import_react3.default.createElement("strong", null, filteredLogs.length), " z ", logs.length, " wpis\xF3w. Aktywne procesy i alerty znajduj\u0105 si\u0119 na g\xF3rze tabeli.")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex flex-wrap items-center gap-2" }, /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => setFilters({
          date: "",
          shift: "",
          operator: "",
          machine: "",
          process: "",
          status: "",
          unit: "",
          notes: ""
        }),
        className: "px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl flex items-center gap-1.5"
      },
      /* @__PURE__ */ import_react3.default.createElement(RefreshCw, { className: "w-4 h-4" }),
      "Wyczy\u015B\u0107 filtry"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: exportBazaToExcel,
        className: "px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 shadow-sm"
      },
      /* @__PURE__ */ import_react3.default.createElement(Download, { className: "w-4 h-4" }),
      "Eksportuj do Excel (.csv)"
    ))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "overflow-x-auto" }, /* @__PURE__ */ import_react3.default.createElement("table", { className: "w-full text-left border-collapse text-xs sm:text-sm" }, /* @__PURE__ */ import_react3.default.createElement("thead", null, /* @__PURE__ */ import_react3.default.createElement("tr", { className: "bg-slate-900 text-white" }, /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-3 font-bold" }, "Data"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-3 font-bold" }, "Zmiana"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-3 font-bold" }, "Operator"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-3 font-bold" }, "Maszyna (QR)"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-3 font-bold" }, "Zakres wykonywanych prac"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-3 font-bold" }, "START"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-3 font-bold" }, "STOP"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-3 font-bold" }, "Czas trwania"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-3 font-bold" }, "Jednostka"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-3 font-bold text-right" }, "Ilo\u015B\u0107"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-3 font-bold text-right" }, "Waga [t]"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-3 font-bold text-right" }, "Waga [kg]"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-3 font-bold" }, "Status / ALERT"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-3 font-bold" }, "Uwagi")), /* @__PURE__ */ import_react3.default.createElement("tr", { className: "bg-slate-100 border-b border-slate-300" }, /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-1.5" }, /* @__PURE__ */ import_react3.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "RRRR-MM-DD",
        value: filters.date,
        onChange: (e) => setFilters(__spreadProps(__spreadValues({}, filters), { date: e.target.value })),
        className: "w-24 bg-white border border-slate-300 rounded px-2 py-1 text-xs"
      }
    )), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-1.5" }, /* @__PURE__ */ import_react3.default.createElement(
      "select",
      {
        value: filters.shift,
        onChange: (e) => setFilters(__spreadProps(__spreadValues({}, filters), { shift: e.target.value })),
        className: "bg-white border border-slate-300 rounded px-1.5 py-1 text-xs"
      },
      /* @__PURE__ */ import_react3.default.createElement("option", { value: "" }, "All"),
      /* @__PURE__ */ import_react3.default.createElement("option", { value: "1" }, "1"),
      /* @__PURE__ */ import_react3.default.createElement("option", { value: "2" }, "2"),
      /* @__PURE__ */ import_react3.default.createElement("option", { value: "3" }, "3")
    )), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-1.5" }, /* @__PURE__ */ import_react3.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Filtruj operatora...",
        value: filters.operator,
        onChange: (e) => setFilters(__spreadProps(__spreadValues({}, filters), { operator: e.target.value })),
        className: "w-32 bg-white border border-slate-300 rounded px-2 py-1 text-xs"
      }
    )), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-1.5" }, /* @__PURE__ */ import_react3.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Maszyna / QR...",
        value: filters.machine,
        onChange: (e) => setFilters(__spreadProps(__spreadValues({}, filters), { machine: e.target.value })),
        className: "w-32 bg-white border border-slate-300 rounded px-2 py-1 text-xs"
      }
    )), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-1.5" }, /* @__PURE__ */ import_react3.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Filtruj proces...",
        value: filters.process,
        onChange: (e) => setFilters(__spreadProps(__spreadValues({}, filters), { process: e.target.value })),
        className: "w-40 bg-white border border-slate-300 rounded px-2 py-1 text-xs"
      }
    )), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-1.5", colSpan: 3 }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-[11px] text-slate-400 italic" }, "Czas automatyczny")), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-1.5" }, /* @__PURE__ */ import_react3.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Jedn...",
        value: filters.unit,
        onChange: (e) => setFilters(__spreadProps(__spreadValues({}, filters), { unit: e.target.value })),
        className: "w-20 bg-white border border-slate-300 rounded px-2 py-1 text-xs"
      }
    )), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-1.5", colSpan: 3 }), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-1.5" }, /* @__PURE__ */ import_react3.default.createElement(
      "select",
      {
        value: filters.status,
        onChange: (e) => setFilters(__spreadProps(__spreadValues({}, filters), { status: e.target.value })),
        className: "bg-white border border-slate-300 rounded px-1.5 py-1 text-xs"
      },
      /* @__PURE__ */ import_react3.default.createElement("option", { value: "" }, "Wszystkie"),
      /* @__PURE__ */ import_react3.default.createElement("option", { value: "W TRAKCIE" }, "W TRAKCIE"),
      /* @__PURE__ */ import_react3.default.createElement("option", { value: "ZAKO\u0143CZONY" }, "ZAKO\u0143CZONY"),
      /* @__PURE__ */ import_react3.default.createElement("option", { value: "ALERT" }, "Z ALERTEM")
    )), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-1.5" }, /* @__PURE__ */ import_react3.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Szukaj w uwagach...",
        value: filters.notes,
        onChange: (e) => setFilters(__spreadProps(__spreadValues({}, filters), { notes: e.target.value })),
        className: "w-28 bg-white border border-slate-300 rounded px-2 py-1 text-xs"
      }
    )))), /* @__PURE__ */ import_react3.default.createElement("tbody", { className: "divide-y divide-slate-200" }, filteredLogs.map((row) => {
      var _a, _b, _c, _d;
      const isRunning = row.status === "W TRAKCIE";
      const liveSec = isRunning ? Math.max(0, Math.round((now - new Date(row.startTime)) / 1e3)) : row.durationSeconds;
      const liveHrs = isRunning ? (liveSec / 3600).toFixed(2) : Number(row.durationHours || 0).toFixed(2);
      const hasAlertHistory = row.alertHistory && row.alertHistory.length > 0;
      return /* @__PURE__ */ import_react3.default.createElement(
        "tr",
        {
          key: row.id,
          className: row.alertActive ? "bg-red-600 text-white animate-pulse font-bold" : isRunning ? "bg-emerald-50/80 hover:bg-emerald-100/80" : "hover:bg-slate-50"
        },
        /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-3 whitespace-nowrap font-mono text-xs" }, row.date),
        /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-3 text-center" }, /* @__PURE__ */ import_react3.default.createElement(
          "span",
          {
            className: `px-2 py-0.5 rounded font-bold text-xs ${row.alertActive ? "bg-white text-red-700" : "bg-slate-200 text-slate-800"}`
          },
          "Z-",
          row.shift
        )),
        /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-3 font-bold whitespace-nowrap" }, row.operatorName),
        /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-3 whitespace-nowrap" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "font-semibold" }, row.machineName), /* @__PURE__ */ import_react3.default.createElement(
          "div",
          {
            className: `text-[11px] font-mono ${row.alertActive ? "text-red-100" : "text-slate-500"}`
          },
          row.machineQr
        )),
        /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-3 font-medium" }, row.processName),
        /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-3 font-mono text-xs whitespace-nowrap" }, formatTimeHM(row.startTime)),
        /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-3 font-mono text-xs whitespace-nowrap" }, row.endTime ? formatTimeHM(row.endTime) : "\u2014"),
        /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-3 font-mono text-xs whitespace-nowrap" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "font-bold" }, formatDuration(liveSec)), /* @__PURE__ */ import_react3.default.createElement("div", { className: row.alertActive ? "text-red-100" : "text-slate-500" }, "(", liveHrs, " h)")),
        /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-3 text-xs" }, row.unit || "-"),
        /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-3 text-right font-mono font-bold" }, row.quantity !== null && row.quantity !== void 0 ? row.quantity : "-"),
        /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-3 text-right font-mono text-emerald-700 font-bold" }, row.alertActive ? /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-white" }, (_a = row.weightTons) != null ? _a : "-") : (_b = row.weightTons) != null ? _b : "-"),
        /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-3 text-right font-mono text-blue-700" }, row.alertActive ? /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-white" }, (_c = row.weightKg) != null ? _c : "-") : (_d = row.weightKg) != null ? _d : "-"),
        /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-3 whitespace-nowrap" }, row.alertActive ? /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex flex-col gap-1" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "inline-flex items-center gap-1 bg-white text-red-700 px-2 py-0.5 rounded font-black text-xs" }, /* @__PURE__ */ import_react3.default.createElement(TriangleAlert, { className: "w-3.5 h-3.5" }), "ALERT POMOCY!"), /* @__PURE__ */ import_react3.default.createElement(
          "button",
          {
            onClick: () => handleAcknowledgeAlert(row),
            className: "bg-slate-900 text-white text-[11px] px-2 py-1 rounded hover:bg-slate-800"
          },
          "Potwierd\u017A pomoc"
        )) : /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement(
          "span",
          {
            className: `px-2 py-0.5 rounded-full text-xs font-bold ${isRunning ? "bg-emerald-600 text-white" : "bg-slate-200 text-slate-700"}`
          },
          row.status
        ), hasAlertHistory && /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-[10px] text-red-600 font-bold mt-1" }, "By\u0142 ALERT (", row.alertHistory[0].timeFormatted, ")"))),
        /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-3 text-xs max-w-xs truncate", title: row.notes }, row.notes || "-")
      );
    }), filteredLogs.length === 0 && /* @__PURE__ */ import_react3.default.createElement("tr", null, /* @__PURE__ */ import_react3.default.createElement("td", { colSpan: 14, className: "p-8 text-center text-slate-400" }, "Brak rekord\xF3w spe\u0142niaj\u0105cych wybrane kryteria filtrowania."))))))), webTab === "raport" && /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4" }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("h2", { className: "text-xl font-black text-slate-900" }, "Raportowanie \u2014 ZMIANY (Podsumowanie po maszynach i procesach)"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-xs sm:text-sm text-slate-500" }, "Zestawienie czasu pracy, ton/kg oraz jednostek wykonanych przez ka\u017Cd\u0105 \u0142adowark\u0119 w wybranym dniu i zmianie.")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex flex-wrap items-center gap-3" }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("label", { className: "block text-[10px] font-bold uppercase text-slate-400" }, "Dzie\u0144 raportu:"), /* @__PURE__ */ import_react3.default.createElement(
      "input",
      {
        type: "date",
        value: reportDate,
        onChange: (e) => setReportDate(e.target.value),
        className: "border border-slate-300 rounded-xl px-3 py-2 text-sm font-bold"
      }
    )), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("label", { className: "block text-[10px] font-bold uppercase text-slate-400" }, "Numer zmiany:"), /* @__PURE__ */ import_react3.default.createElement(
      "select",
      {
        value: reportShift,
        onChange: (e) => setReportShift(e.target.value),
        className: "border border-slate-300 rounded-xl px-3 py-2 text-sm font-bold bg-white"
      },
      /* @__PURE__ */ import_react3.default.createElement("option", { value: "ALL" }, "Wszystkie zmiany (1, 2, 3)"),
      /* @__PURE__ */ import_react3.default.createElement("option", { value: "1" }, "Zmiana 1 (06:00 - 14:00)"),
      /* @__PURE__ */ import_react3.default.createElement("option", { value: "2" }, "Zmiana 2 (14:00 - 22:00)"),
      /* @__PURE__ */ import_react3.default.createElement("option", { value: "3" }, "Zmiana 3 (22:00 - 06:00)")
    )), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: exportShiftReportToExcel,
        className: "mt-3 sm:mt-4 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 shadow-sm"
      },
      /* @__PURE__ */ import_react3.default.createElement(Download, { className: "w-4 h-4" }),
      "Eksportuj Raport Zmian"
    ))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, shiftReportData.machineSummary.map((item) => /* @__PURE__ */ import_react3.default.createElement(
      "div",
      {
        key: item.machine.id,
        className: "bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between"
      },
      /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center justify-between mb-2" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800" }, item.machine.qrCode), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-xs text-slate-400 font-semibold" }, "Operacji: ", item.count)), /* @__PURE__ */ import_react3.default.createElement("h3", { className: "text-base font-black text-slate-900 mb-3" }, item.machine.name)),
      /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-2 pt-3 border-t border-slate-100" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex justify-between items-center" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-xs text-slate-500" }, "Czas pracy:"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "font-mono font-black text-slate-900" }, formatDuration(item.totalSec), " (", item.totalHours, " h)")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex justify-between items-center" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-xs text-slate-500" }, "Przerobiona masa:"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "font-mono font-black text-emerald-600" }, item.totalTons, " t (", item.totalKg, " kg)")), Object.entries(item.otherUnits).map(([u, q2]) => /* @__PURE__ */ import_react3.default.createElement("div", { key: u, className: "flex justify-between items-center" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-xs text-slate-500" }, "Jednostka (", u, "):"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "font-mono font-bold text-blue-600" }, q2, " ", u))))
    ))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between" }, /* @__PURE__ */ import_react3.default.createElement("h3", { className: "font-black text-slate-800" }, "Szczeg\xF3\u0142owe rozbicie: Maszyna \xD7 Proces na wybranej zmianie"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-xs text-slate-500" }, "Pozycji w zestawieniu: ", shiftReportData.breakdownList.length)), /* @__PURE__ */ import_react3.default.createElement("div", { className: "overflow-x-auto" }, /* @__PURE__ */ import_react3.default.createElement("table", { className: "w-full text-left border-collapse text-sm" }, /* @__PURE__ */ import_react3.default.createElement("thead", null, /* @__PURE__ */ import_react3.default.createElement("tr", { className: "bg-slate-900 text-white text-xs uppercase" }, /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-3" }, "Maszyna"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-3" }, "Kod QR"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-3" }, "Zakres wykonywanych prac"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-3 text-center" }, "Liczba cykli"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-3 text-right" }, "Suma czasu (hh:mm:ss)"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-3 text-right" }, "Suma godzin [h]"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-3 text-right" }, "Suma Waga [t]"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-3 text-right" }, "Suma Waga [kg]"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-3 text-right" }, "Inne jednostki"))), /* @__PURE__ */ import_react3.default.createElement("tbody", { className: "divide-y divide-slate-200" }, shiftReportData.breakdownList.map((row, idx) => /* @__PURE__ */ import_react3.default.createElement("tr", { key: idx, className: "hover:bg-slate-50" }, /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-3 font-bold text-slate-900" }, row.machineName), /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-3 font-mono text-xs text-slate-500" }, row.machineQr), /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-3 font-medium" }, row.processName), /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-3 text-center font-bold" }, row.count), /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-3 text-right font-mono font-bold" }, formatDuration(row.totalSec)), /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-3 text-right font-mono" }, (row.totalSec / 3600).toFixed(2), " h"), /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-3 text-right font-mono font-bold text-emerald-700" }, row.totalTons > 0 ? `${row.totalTons.toFixed(2)} t` : "-"), /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-3 text-right font-mono text-blue-700" }, row.totalKg > 0 ? `${Math.round(row.totalKg)} kg` : "-"), /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-3 text-right font-mono font-bold text-amber-700" }, row.totalOtherQty > 0 ? `${row.totalOtherQty} ${row.unit}` : "-"))), shiftReportData.breakdownList.length === 0 && /* @__PURE__ */ import_react3.default.createElement("tr", null, /* @__PURE__ */ import_react3.default.createElement("td", { colSpan: 9, className: "p-8 text-center text-slate-400" }, "Brak zarejestrowanych czynno\u015Bci dla wybranej daty i zmiany."))))))), webTab === "admin" && /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-wrap gap-2" }, [
      { id: "operators", label: `Operatorzy (${operators.length})` },
      { id: "machines", label: `Maszyny (${machines.length})` },
      { id: "processes", label: `Zakres prac (${processes.length})` },
      { id: "webUsers", label: `U\u017Cytkownicy WEB (${webUsers.length})` },
      { id: "sms", label: `Alerty SMS / Integracje (${smsManagers.length})` }
    ].map((t) => /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        key: t.id,
        onClick: () => setAdminSubTab(t.id),
        className: `px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${adminSubTab === t.id ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`
      },
      t.label
    ))), adminSubTab === "operators" && /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4" }, /* @__PURE__ */ import_react3.default.createElement("h3", { className: "text-lg font-black" }, "Zarz\u0105dzanie Operatorami (Model QR: Imi\u0119.Nazwisko#Has\u0142o)"), /* @__PURE__ */ import_react3.default.createElement(
      "form",
      {
        onSubmit: (e) => {
          e.preventDefault();
          if (!newOpName.trim() || !newOpPin.trim())
            return;
          const updated = [
            ...operators,
            {
              id: `op_${Date.now()}`,
              lp: operators.length + 1,
              name: newOpName.trim(),
              pin: newOpPin.trim()
            }
          ];
          setOperators(updated);
          syncDictionariesToCloud({ operators: updated });
          setNewOpName("");
          setNewOpPin("");
          showToast("Dodano nowego operatora!", "success");
        },
        className: "flex flex-wrap gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200"
      },
      /* @__PURE__ */ import_react3.default.createElement(
        "input",
        {
          type: "text",
          placeholder: "Imi\u0119 i Nazwisko (np. Jan Kowalski)",
          value: newOpName,
          onChange: (e) => setNewOpName(e.target.value),
          className: "flex-1 min-w-[200px] border border-slate-300 rounded-xl px-3 py-2 text-sm"
        }
      ),
      /* @__PURE__ */ import_react3.default.createElement(
        "input",
        {
          type: "text",
          placeholder: "Has\u0142o PIN (4 cyfry)",
          value: newOpPin,
          onChange: (e) => setNewOpPin(e.target.value),
          className: "w-40 border border-slate-300 rounded-xl px-3 py-2 text-sm font-mono"
        }
      ),
      /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          type: "submit",
          className: "px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl flex items-center gap-1.5"
        },
        /* @__PURE__ */ import_react3.default.createElement(Plus, { className: "w-4 h-4" }),
        " Dodaj operatora"
      )
    ), /* @__PURE__ */ import_react3.default.createElement("div", { className: "overflow-x-auto" }, /* @__PURE__ */ import_react3.default.createElement("table", { className: "w-full text-left text-sm border-collapse" }, /* @__PURE__ */ import_react3.default.createElement("thead", null, /* @__PURE__ */ import_react3.default.createElement("tr", { className: "bg-slate-100 text-xs uppercase text-slate-600" }, /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-2.5" }, "LP"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-2.5" }, "U\u017Cytkownik (Operator)"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-2.5" }, "Has\u0142o (PIN)"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-2.5" }, "Ci\u0105g kodu QR"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-2.5 text-right" }, "Akcje"))), /* @__PURE__ */ import_react3.default.createElement("tbody", { className: "divide-y divide-slate-200" }, operators.map((op) => /* @__PURE__ */ import_react3.default.createElement("tr", { key: op.id }, /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-2.5 font-bold" }, op.lp), /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-2.5 font-semibold" }, op.name), /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-2.5 font-mono whitespace-nowrap" }, "\u2022\u2022\u2022\u2022", import_react3.default.createElement("button", { type: "button", onClick: () => handleChangeOperatorPin(op), className: "ml-2 text-xs font-sans font-bold text-blue-600 hover:underline bg-transparent" }, "Zmie\u0144 PIN")), /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-2.5 font-mono text-xs text-amber-700" }, formatOperatorQrPayload(op)), /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-2.5 text-right" }, /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => {
          const updated = operators.filter((x2) => x2.id !== op.id);
          setOperators(updated);
          syncDictionariesToCloud({ operators: updated });
          showToast("Usuni\u0119to operatora.", "info");
        },
        className: "p-1.5 text-red-600 hover:bg-red-50 rounded-lg",
        title: "Usu\u0144"
      },
      /* @__PURE__ */ import_react3.default.createElement(Trash2, { className: "w-4 h-4" })
    )))))))), adminSubTab === "machines" && /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4" }, /* @__PURE__ */ import_react3.default.createElement("h3", { className: "text-lg font-black" }, "Zarz\u0105dzanie Maszynami i Kodami QR"), /* @__PURE__ */ import_react3.default.createElement(
      "form",
      {
        onSubmit: (e) => {
          e.preventDefault();
          if (!newMachName.trim() || !newMachQr.trim())
            return;
          const updated = [
            ...machines,
            {
              id: `m_${Date.now()}`,
              name: newMachName.trim(),
              qrCode: newMachQr.trim(),
              model: newMachQr.trim()
            }
          ];
          setMachines(updated);
          syncDictionariesToCloud({ machines: updated });
          setNewMachName("");
          setNewMachQr("");
          showToast("Dodano maszyn\u0119!", "success");
        },
        className: "flex flex-wrap gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200"
      },
      /* @__PURE__ */ import_react3.default.createElement(
        "input",
        {
          type: "text",
          placeholder: "Nazwa maszyny (np. LADOWARKA DU\u017BA NR 4)",
          value: newMachName,
          onChange: (e) => setNewMachName(e.target.value),
          className: "flex-1 min-w-[220px] border border-slate-300 rounded-xl px-3 py-2 text-sm"
        }
      ),
      /* @__PURE__ */ import_react3.default.createElement(
        "input",
        {
          type: "text",
          placeholder: "Kod QR (np. XC958_4)",
          value: newMachQr,
          onChange: (e) => setNewMachQr(e.target.value),
          className: "w-48 border border-slate-300 rounded-xl px-3 py-2 text-sm font-mono"
        }
      ),
      /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          type: "submit",
          className: "px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl flex items-center gap-1.5"
        },
        /* @__PURE__ */ import_react3.default.createElement(Plus, { className: "w-4 h-4" }),
        " Dodaj maszyn\u0119"
      )
    ), /* @__PURE__ */ import_react3.default.createElement("table", { className: "w-full text-left text-sm border-collapse" }, /* @__PURE__ */ import_react3.default.createElement("thead", null, /* @__PURE__ */ import_react3.default.createElement("tr", { className: "bg-slate-100 text-xs uppercase text-slate-600" }, /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-2.5" }, "MASZYNA"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-2.5" }, "Qcod (Kod QR)"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-2.5 text-right" }, "Akcje"))), /* @__PURE__ */ import_react3.default.createElement("tbody", { className: "divide-y divide-slate-200" }, machines.map((m) => /* @__PURE__ */ import_react3.default.createElement("tr", { key: m.id }, /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-2.5 font-bold" }, m.name), /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-2.5 font-mono text-amber-700 font-bold" }, m.qrCode), /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-2.5 text-right" }, /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => {
          const updated = machines.filter((x2) => x2.id !== m.id);
          setMachines(updated);
          syncDictionariesToCloud({ machines: updated });
        },
        className: "p-1.5 text-red-600 hover:bg-red-50 rounded-lg"
      },
      /* @__PURE__ */ import_react3.default.createElement(Trash2, { className: "w-4 h-4" })
    ))))))), adminSubTab === "processes" && /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4" }, /* @__PURE__ */ import_react3.default.createElement("h3", { className: "text-lg font-black" }, "Zakres wykonywanych prac i konfiguracja \u201EREJESTR jednostek\u201D"), /* @__PURE__ */ import_react3.default.createElement(
      "form",
      {
        onSubmit: (e) => {
          e.preventDefault();
          if (!newProcName.trim())
            return;
          const updated = [
            ...processes,
            {
              id: `p_${Date.now()}`,
              lp: processes.length + 1,
              name: newProcName.trim(),
              registerUnits: newProcReg,
              unit: newProcReg ? newProcUnit : ""
            }
          ];
          setProcesses(updated);
          syncDictionariesToCloud({ processes: updated });
          setNewProcName("");
          showToast("Dodano nowy proces!", "success");
        },
        className: "flex flex-wrap items-center gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200"
      },
      /* @__PURE__ */ import_react3.default.createElement(
        "input",
        {
          type: "text",
          placeholder: "Nazwa operacji...",
          value: newProcName,
          onChange: (e) => setNewProcName(e.target.value),
          className: "flex-1 min-w-[220px] border border-slate-300 rounded-xl px-3 py-2 text-sm"
        }
      ),
      /* @__PURE__ */ import_react3.default.createElement("label", { className: "flex items-center gap-2 text-xs font-bold cursor-pointer" }, /* @__PURE__ */ import_react3.default.createElement(
        "input",
        {
          type: "checkbox",
          checked: newProcReg,
          onChange: (e) => setNewProcReg(e.target.checked),
          className: "w-4 h-4"
        }
      ), "REJESTR jednostek (TAK)"),
      newProcReg && /* @__PURE__ */ import_react3.default.createElement(
        "select",
        {
          value: newProcUnit,
          onChange: (e) => setNewProcUnit(e.target.value),
          className: "border border-slate-300 rounded-xl px-3 py-2 text-sm font-bold"
        },
        /* @__PURE__ */ import_react3.default.createElement("option", { value: "tony" }, "tony (przeliczane z/na kg)"),
        /* @__PURE__ */ import_react3.default.createElement("option", { value: "palety" }, "palety"),
        /* @__PURE__ */ import_react3.default.createElement("option", { value: "big-bag" }, "big-bag"),
        /* @__PURE__ */ import_react3.default.createElement("option", { value: "sztuki" }, "sztuki")
      ),
      /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          type: "submit",
          className: "px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl flex items-center gap-1.5"
        },
        /* @__PURE__ */ import_react3.default.createElement(Plus, { className: "w-4 h-4" }),
        " Dodaj proces"
      )
    ), /* @__PURE__ */ import_react3.default.createElement("div", { className: "overflow-x-auto" }, /* @__PURE__ */ import_react3.default.createElement("table", { className: "w-full text-left text-sm border-collapse" }, /* @__PURE__ */ import_react3.default.createElement("thead", null, /* @__PURE__ */ import_react3.default.createElement("tr", { className: "bg-slate-100 text-xs uppercase text-slate-600" }, /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-2.5" }, "Lp."), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-2.5" }, "Zakres wykonywanych prac"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-2.5" }, "REJESTR jednostek"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-2.5" }, "Jednostka miary"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-2.5 text-right" }, "Akcje"))), /* @__PURE__ */ import_react3.default.createElement("tbody", { className: "divide-y divide-slate-200" }, processes.map((proc) => /* @__PURE__ */ import_react3.default.createElement("tr", { key: proc.id }, /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-2.5 font-bold" }, proc.lp), /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-2.5 font-semibold" }, proc.name), /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-2.5" }, /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => {
          const updated = processes.map(
            (p) => p.id === proc.id ? __spreadProps(__spreadValues({}, p), {
              registerUnits: !p.registerUnits,
              unit: !p.registerUnits ? p.unit || "tony" : ""
            }) : p
          );
          setProcesses(updated);
          syncDictionariesToCloud({ processes: updated });
        },
        className: `px-2.5 py-1 rounded-lg text-xs font-black ${proc.registerUnits ? "bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-500"}`
      },
      proc.registerUnits ? "TAK" : "NIE"
    )), /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-2.5" }, proc.registerUnits ? /* @__PURE__ */ import_react3.default.createElement(
      "select",
      {
        value: proc.unit,
        onChange: (e) => {
          const updated = processes.map(
            (p) => p.id === proc.id ? __spreadProps(__spreadValues({}, p), { unit: e.target.value }) : p
          );
          setProcesses(updated);
          syncDictionariesToCloud({ processes: updated });
        },
        className: "border border-slate-300 rounded-lg px-2 py-1 text-xs font-bold"
      },
      /* @__PURE__ */ import_react3.default.createElement("option", { value: "tony" }, "tony"),
      /* @__PURE__ */ import_react3.default.createElement("option", { value: "palety" }, "palety"),
      /* @__PURE__ */ import_react3.default.createElement("option", { value: "big-bag" }, "big-bag"),
      /* @__PURE__ */ import_react3.default.createElement("option", { value: "sztuki" }, "sztuki")
    ) : /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-slate-400" }, "\u2014")), /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-2.5 text-right" }, /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => {
          const updated = processes.filter((x2) => x2.id !== proc.id);
          setProcesses(updated);
          syncDictionariesToCloud({ processes: updated });
        },
        className: "p-1.5 text-red-600 hover:bg-red-50 rounded-lg"
      },
      /* @__PURE__ */ import_react3.default.createElement(Trash2, { className: "w-4 h-4" })
    )))))))), adminSubTab === "webUsers" && /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4" }, /* @__PURE__ */ import_react3.default.createElement("h3", { className: "text-lg font-black" }, "U\u017Cytkownicy Panelu Administracyjnego WEB"), /* @__PURE__ */ import_react3.default.createElement(
      "form",
      {
        onSubmit: (e) => {
          e.preventDefault();
          if (!newWebName.trim() || !newWebPass.trim())
            return;
          const updated = [
            ...webUsers,
            {
              id: `wu_${Date.now()}`,
              lp: webUsers.length + 1,
              name: newWebName.trim(),
              password: newWebPass.trim(),
              role: "Nadz\xF3r"
            }
          ];
          setWebUsers(updated);
          syncDictionariesToCloud({ webUsers: updated });
          setNewWebName("");
          setNewWebPass("");
        },
        className: "flex flex-wrap gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200"
      },
      /* @__PURE__ */ import_react3.default.createElement(
        "input",
        {
          type: "text",
          placeholder: "Imi\u0119 i Nazwisko",
          value: newWebName,
          onChange: (e) => setNewWebName(e.target.value),
          className: "flex-1 border border-slate-300 rounded-xl px-3 py-2 text-sm"
        }
      ),
      /* @__PURE__ */ import_react3.default.createElement(
        "input",
        {
          type: "text",
          placeholder: "Has\u0142o (np. ES9999)",
          value: newWebPass,
          onChange: (e) => setNewWebPass(e.target.value),
          className: "w-44 border border-slate-300 rounded-xl px-3 py-2 text-sm font-mono"
        }
      ),
      /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          type: "submit",
          className: "px-4 py-2 bg-emerald-600 text-white font-bold text-sm rounded-xl flex items-center gap-1.5"
        },
        /* @__PURE__ */ import_react3.default.createElement(Plus, { className: "w-4 h-4" }),
        " Dodaj u\u017Cytkownika WEB"
      )
    ), /* @__PURE__ */ import_react3.default.createElement("table", { className: "w-full text-left text-sm border-collapse" }, /* @__PURE__ */ import_react3.default.createElement("thead", null, /* @__PURE__ */ import_react3.default.createElement("tr", { className: "bg-slate-100 text-xs uppercase text-slate-600" }, /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-2.5" }, "LP"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-2.5" }, "U\u017Cytkownik"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-2.5" }, "Has\u0142o"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-2.5 text-right" }, "Akcje"))), /* @__PURE__ */ import_react3.default.createElement("tbody", { className: "divide-y divide-slate-200" }, webUsers.map((u) => /* @__PURE__ */ import_react3.default.createElement("tr", { key: u.id }, /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-2.5 font-bold" }, u.lp), /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-2.5 font-semibold" }, u.name), /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-2.5 font-mono whitespace-nowrap" }, "\u2022\u2022\u2022\u2022\u2022\u2022", import_react3.default.createElement("button", { type: "button", onClick: () => handleChangeWebPassword(u), className: "ml-2 text-xs font-sans font-bold text-blue-600 hover:underline bg-transparent" }, "Zmie\u0144 has\u0142o")), /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-2.5 text-right" }, /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => {
          const updated = webUsers.filter((x2) => x2.id !== u.id);
          setWebUsers(updated);
          syncDictionariesToCloud({ webUsers: updated });
        },
        className: "p-1.5 text-red-600 hover:bg-red-50 rounded-lg"
      },
      /* @__PURE__ */ import_react3.default.createElement(Trash2, { className: "w-4 h-4" })
    ))))))), adminSubTab === "sms" && /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-5" }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("h3", { className: "text-lg font-black" }, "Odbiorcy powiadomie\u0144 SMS \u201EALERT \u2014 UWAGA POMOC\u201D"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-xs text-slate-500" }, "Format wiadomo\u015Bci: ", /* @__PURE__ */ import_react3.default.createElement("code", null, "[U\u017Cytkownik], [Proces], [Czas wywo\u0142ania pomocy] \u2013 UWAGA POMOC"))), /* @__PURE__ */ import_react3.default.createElement(
      "form",
      {
        onSubmit: (e) => {
          e.preventDefault();
          if (!newSmsName.trim() || !newSmsPhone.trim())
            return;
          const cleanPhone = newSmsPhone.replace(/\s+/g, "");
          const updated = [
            ...smsManagers,
            {
              id: `sms_${Date.now()}`,
              name: newSmsName.trim(),
              phone: cleanPhone,
              displayPhone: newSmsPhone.trim()
            }
          ];
          setSmsManagers(updated);
          syncDictionariesToCloud({ smsManagers: updated });
          setNewSmsName("");
          setNewSmsPhone("");
        },
        className: "flex flex-wrap gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200"
      },
      /* @__PURE__ */ import_react3.default.createElement(
        "input",
        {
          type: "text",
          placeholder: "Kierownik Projektu",
          value: newSmsName,
          onChange: (e) => setNewSmsName(e.target.value),
          className: "flex-1 border border-slate-300 rounded-xl px-3 py-2 text-sm"
        }
      ),
      /* @__PURE__ */ import_react3.default.createElement(
        "input",
        {
          type: "text",
          placeholder: "Telefon (np. +48 500 600 700)",
          value: newSmsPhone,
          onChange: (e) => setNewSmsPhone(e.target.value),
          className: "w-52 border border-slate-300 rounded-xl px-3 py-2 text-sm font-mono"
        }
      ),
      /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          type: "submit",
          className: "px-4 py-2 bg-emerald-600 text-white font-bold text-sm rounded-xl flex items-center gap-1.5"
        },
        /* @__PURE__ */ import_react3.default.createElement(Plus, { className: "w-4 h-4" }),
        " Dodaj numer SMS"
      )
    ), /* @__PURE__ */ import_react3.default.createElement("table", { className: "w-full text-left text-sm border-collapse" }, /* @__PURE__ */ import_react3.default.createElement("thead", null, /* @__PURE__ */ import_react3.default.createElement("tr", { className: "bg-slate-100 text-xs uppercase text-slate-600" }, /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-2.5" }, "Kierownik Projektu"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-2.5" }, "Numer telefonu SMS"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "p-2.5 text-right" }, "Akcje"))), /* @__PURE__ */ import_react3.default.createElement("tbody", { className: "divide-y divide-slate-200" }, smsManagers.map((m) => /* @__PURE__ */ import_react3.default.createElement("tr", { key: m.id }, /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-2.5 font-bold" }, m.name), /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-2.5 font-mono" }, m.displayPhone), /* @__PURE__ */ import_react3.default.createElement("td", { className: "p-2.5 text-right" }, /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => {
          const updated = smsManagers.filter((x2) => x2.id !== m.id);
          setSmsManagers(updated);
          syncDictionariesToCloud({ smsManagers: updated });
        },
        className: "p-1.5 text-red-600 hover:bg-red-50 rounded-lg"
      },
      /* @__PURE__ */ import_react3.default.createElement(Trash2, { className: "w-4 h-4" })
    )))))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-blue-50 border border-blue-200 rounded-2xl p-4 space-y-2" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "font-bold text-sm text-blue-900" }, "Opcjonalny darmowy Webhook bramki SMS (Google Apps Script / Android SMS Gateway):"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-xs text-blue-800" }, "Domy\u015Blnie operator na telefonie Android wysy\u0142a darmowy SMS bezpo\u015Brednio z karty SIM jednym klikni\u0119ciem. Je\u015Bli chcesz dodatkowo wysy\u0142a\u0107 \u017C\u0105danie HTTP POST w tle, wklej adres URL webhooka poni\u017Cej:"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ import_react3.default.createElement(
      "input",
      {
        type: "url",
        value: webhookUrl,
        onChange: (e) => setWebhookUrl(e.target.value),
        placeholder: "https://script.google.com/macros/s/.../exec",
        className: "flex-1 bg-white border border-blue-300 rounded-xl px-3 py-2 text-xs font-mono"
      }
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => {
          syncDictionariesToCloud({ webhookUrl });
          showToast("Zapisano adres Webhooka SMS!", "success");
        },
        className: "px-4 py-2 bg-blue-600 text-white font-bold text-xs rounded-xl"
      },
      "Zapisz URL"
    ))))), webTab === "qr_print" && /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex items-center justify-between print:hidden" }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("h2", { className: "text-xl font-black text-slate-900" }, "Generator Kod\xF3w QR do Wydruku (Identyfikatory Operator\xF3w i Kabiny Maszyn)"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-xs sm:text-sm text-slate-500" }, "Wydrukuj kody QR i umie\u015B\u0107 w kabinach \u0142adowarek oraz na identyfikatorach operator\xF3w.")), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => window.print(),
        className: "px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl flex items-center gap-2 shadow"
      },
      /* @__PURE__ */ import_react3.default.createElement(Printer, { className: "w-5 h-5" }),
      "Drukuj arkusz QR (A4)"
    )), /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-white border border-slate-200 rounded-2xl p-5 shadow-sm" }, /* @__PURE__ */ import_react3.default.createElement("h3", { className: "text-base font-black uppercase text-slate-700 mb-4 border-b pb-2" }, "1. Kody QR do naklejenia w kabinach Maszyn"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4" }, machines.map((m) => /* @__PURE__ */ import_react3.default.createElement(
      "div",
      {
        key: m.id,
        className: "border-2 border-slate-800 rounded-2xl p-4 flex flex-col items-center text-center bg-slate-50"
      },
      /* @__PURE__ */ import_react3.default.createElement(
        "img",
        {
          src: qrImageSrc(m.qrCode, 5),
          alt: m.qrCode,
          className: "w-36 h-36 mb-3 border border-slate-300 bg-white p-1.5 rounded-xl"
        }
      ),
      /* @__PURE__ */ import_react3.default.createElement("div", { className: "font-black text-sm text-slate-900" }, m.name),
      /* @__PURE__ */ import_react3.default.createElement("div", { className: "font-mono text-xs font-bold text-amber-700 mt-1 bg-amber-100 px-2 py-0.5 rounded" }, m.qrCode)
    )))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-white border border-slate-200 rounded-2xl p-5 shadow-sm" }, /* @__PURE__ */ import_react3.default.createElement("h3", { className: "text-base font-black uppercase text-slate-700 mb-4 border-b pb-2" }, "2. Identyfikatory QR Operator\xF3w (Model: Imi\u0119.Nazwisko#Has\u0142o)"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-xs text-slate-500 -mt-2 mb-4 print:hidden" }, "PIN-y s\u0105 przechowywane w bazie w formie zaszyfrowanej. Aby wydrukowa\u0107 identyfikator, kliknij kart\u0119 operatora i podaj jego PIN."), /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" }, operators.map((op) => {
      const payload = qrPayloads[op.id] || "";
      return /* @__PURE__ */ import_react3.default.createElement(
        "div",
        {
          key: op.id,
          className: "border border-slate-300 rounded-2xl p-3.5 flex flex-col items-center text-center"
        },
        payload ? /* @__PURE__ */ import_react3.default.createElement(
          "img",
          {
            src: qrImageSrc(payload, 4),
            alt: "QR " + op.name,
            className: "w-32 h-32 mb-2.5 border border-slate-200 p-1 rounded-xl"
          }
        ) : /* @__PURE__ */ import_react3.default.createElement(
          "button",
          {
            type: "button",
            onClick: () => handleGenerateOperatorQr(op),
            className: "w-32 h-32 mb-2.5 border-2 border-dashed border-slate-300 rounded-xl text-xs font-bold text-slate-500 hover:border-amber-500 hover:text-amber-700 bg-white p-2 print:hidden"
          },
          "Generuj QR (podaj PIN)"
        ),
        /* @__PURE__ */ import_react3.default.createElement("div", { className: "font-black text-xs sm:text-sm text-slate-900" }, op.lp, ". ", op.name),
        /* @__PURE__ */ import_react3.default.createElement("div", { className: "font-mono text-[11px] text-slate-500 mt-0.5 break-all" }, formatOperatorQrPayload(op))
      );
    }))))));
  }
  return __toCommonJS(stdin_exports);
})();
