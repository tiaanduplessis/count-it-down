export default function(e,t){void 0===t&&(t=function(){});var n=e instanceof Date?e.getTime():new Date(e).getTime(),o=window.requestIdleCallback||function(e){return setTimeout(e,0)};return window.setInterval(function(){return o(function(){var e=(new Date).getTime(),o=n-e;t({days:Math.floor(o/864e5),hours:Math.floor(o%864e5/36e5),minutes:Math.floor(o%36e5/6e4),seconds:Math.floor(o%6e4/1e3)})})},1e3)};
//# sourceMappingURL=count-it-down.m.js.map
