import { F as Fs, V as Vs, O as On, D as Ds, w as ws, b as bs, H as Hs, g as gi } from './BubbleMapChart-DoY9i-C0-IXyn4XOg.js';
export { k as Tooltip, S as useMap } from './BubbleMapChart-DoY9i-C0-IXyn4XOg.js';
import { r as reactExports, n as nt } from './embeddable-component-BD9bezsm.js';
import './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import './index.esm-CVE60fla-BtsXn2z1.js';
import './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';
import './index-BV21PmyC.js';

function B(l, t, e) {
  const { opacity: n, zIndex: a } = t;
  n != null && n !== e.opacity && l.setOpacity(n), a != null && a !== e.zIndex && l.setZIndex(a);
}
function c() {
  return c = Object.assign || function(l) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (l[n] = e[n]);
    }
    return l;
  }, c.apply(this, arguments);
}
function G({ bounds: l, boundsOptions: t, center: e, children: n, className: a, id: m, placeholder: x, style: L, whenReady: o, zoom: r, ...O }, C) {
  const [I] = reactExports.useState({
    className: a,
    id: m,
    style: L
  }), [i, b] = reactExports.useState(null);
  reactExports.useImperativeHandle(C, () => (i == null ? void 0 : i.map) ?? null, [
    i
  ]);
  const w = reactExports.useCallback((s) => {
    if (s !== null && i === null) {
      const f = new On.Map(s, O);
      e != null && r != null ? f.setView(e, r) : l != null && f.fitBounds(l, t), o != null && f.whenReady(o), b(Ds(f));
    }
  }, []);
  reactExports.useEffect(() => () => {
    i == null || i.map.remove();
  }, [
    i
  ]);
  const M = i ? /* @__PURE__ */ nt.createElement(ws, {
    value: i
  }, n) : x ?? null;
  return /* @__PURE__ */ nt.createElement("div", c({}, I, {
    ref: w
  }), M);
}
const V = /* @__PURE__ */ reactExports.forwardRef(G), _ = Fs(function({ position: t, ...e }, n) {
  const a = new On.Marker(t, e);
  return bs(a, Hs(n, {
    overlayContainer: a
  }));
}, function(t, e, n) {
  e.position !== n.position && t.setLatLng(e.position), e.icon != null && e.icon !== n.icon && t.setIcon(e.icon), e.zIndexOffset != null && e.zIndexOffset !== n.zIndexOffset && t.setZIndexOffset(e.zIndexOffset), e.opacity != null && e.opacity !== n.opacity && t.setOpacity(e.opacity), t.dragging != null && e.draggable !== n.draggable && (e.draggable === true ? t.dragging.enable() : t.dragging.disable());
}), q = Vs(function({ url: t, ...e }, n) {
  const a = new On.TileLayer(t, gi(e, n));
  return bs(a, n);
}, function(t, e, n) {
  B(t, e, n);
  const { url: a } = e;
  a != null && a !== n.url && t.setUrl(a);
});

export { V as MapContainer, _ as Marker, q as TileLayer };
//# sourceMappingURL=index-DyUIdp01-DJNOpuWG-1YrDbLbc.js.map
//# sourceMappingURL=index-DyUIdp01-DJNOpuWG-1YrDbLbc.js.map
