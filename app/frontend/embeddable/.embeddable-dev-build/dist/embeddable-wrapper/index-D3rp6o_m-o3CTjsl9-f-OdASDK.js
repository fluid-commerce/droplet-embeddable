import { W as Ws, a as Se } from './BubbleMapChart-DoY9i-C0-IXyn4XOg.js';
import './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import './embeddable-component-BD9bezsm.js';
import './index-BV21PmyC.js';
import './index.esm-CVE60fla-BtsXn2z1.js';
import './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';

var k = { exports: {} }, Z = k.exports, b;
function E() {
  return b || (b = 1, (function(h, l) {
    (function(d, p) {
      p(l);
    })(Z, function(d) {
      var p = L.MarkerClusterGroup = L.FeatureGroup.extend({
        options: {
          maxClusterRadius: 80,
          //A cluster will cover at most this many pixels from its center
          iconCreateFunction: null,
          clusterPane: L.Marker.prototype.options.pane,
          spiderfyOnEveryZoom: false,
          spiderfyOnMaxZoom: true,
          showCoverageOnHover: true,
          zoomToBoundsOnClick: true,
          singleMarkerMode: false,
          disableClusteringAtZoom: null,
          // Setting this to false prevents the removal of any clusters outside of the viewpoint, which
          // is the default behaviour for performance reasons.
          removeOutsideVisibleBounds: true,
          // Set to false to disable all animations (zoom and spiderfy).
          // If false, option animateAddingMarkers below has no effect.
          // If L.DomUtil.TRANSITION is falsy, this option has no effect.
          animate: true,
          //Whether to animate adding markers after adding the MarkerClusterGroup to the map
          // If you are adding individual markers set to true, if adding bulk markers leave false for massive performance gains.
          animateAddingMarkers: false,
          // Make it possible to provide custom function to calculate spiderfy shape positions
          spiderfyShapePositions: null,
          //Increase to increase the distance away that spiderfied markers appear from the center
          spiderfyDistanceMultiplier: 1,
          // Make it possible to specify a polyline options on a spider leg
          spiderLegPolylineOptions: { weight: 1.5, color: "#222", opacity: 0.5 },
          // When bulk adding layers, adds markers in chunks. Means addLayers may not add all the layers in the call, others will be loaded during setTimeouts
          chunkedLoading: false,
          chunkInterval: 200,
          // process markers for a maximum of ~ n milliseconds (then trigger the chunkProgress callback)
          chunkDelay: 50,
          // at the end of each interval, give n milliseconds back to system/browser
          chunkProgress: null,
          // progress callback: function(processed, total, elapsed) (e.g. for a progress indicator)
          //Options to pass to the L.Polygon constructor
          polygonOptions: {}
        },
        initialize: function(t) {
          L.Util.setOptions(this, t), this.options.iconCreateFunction || (this.options.iconCreateFunction = this._defaultIconCreateFunction), this._featureGroup = L.featureGroup(), this._featureGroup.addEventParent(this), this._nonPointGroup = L.featureGroup(), this._nonPointGroup.addEventParent(this), this._inZoomAnimation = 0, this._needsClustering = [], this._needsRemoving = [], this._currentShownBounds = null, this._queue = [], this._childMarkerEventHandlers = {
            dragstart: this._childMarkerDragStart,
            move: this._childMarkerMoved,
            dragend: this._childMarkerDragEnd
          };
          var e = L.DomUtil.TRANSITION && this.options.animate;
          L.extend(this, e ? this._withAnimation : this._noAnimation), this._markerCluster = e ? L.MarkerCluster : L.MarkerClusterNonAnimated;
        },
        addLayer: function(t) {
          if (t instanceof L.LayerGroup)
            return this.addLayers([t]);
          if (!t.getLatLng)
            return this._nonPointGroup.addLayer(t), this.fire("layeradd", { layer: t }), this;
          if (!this._map)
            return this._needsClustering.push(t), this.fire("layeradd", { layer: t }), this;
          if (this.hasLayer(t))
            return this;
          this._unspiderfy && this._unspiderfy(), this._addLayer(t, this._maxZoom), this.fire("layeradd", { layer: t }), this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons();
          var e = t, i = this._zoom;
          if (t.__parent)
            for (; e.__parent._zoom >= i; )
              e = e.__parent;
          return this._currentShownBounds.contains(e.getLatLng()) && (this.options.animateAddingMarkers ? this._animationAddLayer(t, e) : this._animationAddLayerNonAnimated(t, e)), this;
        },
        removeLayer: function(t) {
          return t instanceof L.LayerGroup ? this.removeLayers([t]) : t.getLatLng ? this._map ? t.__parent ? (this._unspiderfy && (this._unspiderfy(), this._unspiderfyLayer(t)), this._removeLayer(t, true), this.fire("layerremove", { layer: t }), this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), t.off(this._childMarkerEventHandlers, this), this._featureGroup.hasLayer(t) && (this._featureGroup.removeLayer(t), t.clusterShow && t.clusterShow()), this) : this : (!this._arraySplice(this._needsClustering, t) && this.hasLayer(t) && this._needsRemoving.push({ layer: t, latlng: t._latlng }), this.fire("layerremove", { layer: t }), this) : (this._nonPointGroup.removeLayer(t), this.fire("layerremove", { layer: t }), this);
        },
        //Takes an array of markers and adds them in bulk
        addLayers: function(t, e) {
          if (!L.Util.isArray(t))
            return this.addLayer(t);
          var i = this._featureGroup, n = this._nonPointGroup, r = this.options.chunkedLoading, o = this.options.chunkInterval, s = this.options.chunkProgress, u = t.length, a = 0, _ = true, f;
          if (this._map) {
            var g = (/* @__PURE__ */ new Date()).getTime(), c = L.bind(function() {
              var y = (/* @__PURE__ */ new Date()).getTime();
              for (this._map && this._unspiderfy && this._unspiderfy(); a < u; a++) {
                if (r && a % 200 === 0) {
                  var M = (/* @__PURE__ */ new Date()).getTime() - y;
                  if (M > o)
                    break;
                }
                if (f = t[a], f instanceof L.LayerGroup) {
                  _ && (t = t.slice(), _ = false), this._extractNonGroupLayers(f, t), u = t.length;
                  continue;
                }
                if (!f.getLatLng) {
                  n.addLayer(f), e || this.fire("layeradd", { layer: f });
                  continue;
                }
                if (!this.hasLayer(f) && (this._addLayer(f, this._maxZoom), e || this.fire("layeradd", { layer: f }), f.__parent && f.__parent.getChildCount() === 2)) {
                  var C = f.__parent.getAllChildMarkers(), I = C[0] === f ? C[1] : C[0];
                  i.removeLayer(I);
                }
              }
              s && s(a, u, (/* @__PURE__ */ new Date()).getTime() - g), a === u ? (this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds)) : setTimeout(c, this.options.chunkDelay);
            }, this);
            c();
          } else
            for (var m = this._needsClustering; a < u; a++) {
              if (f = t[a], f instanceof L.LayerGroup) {
                _ && (t = t.slice(), _ = false), this._extractNonGroupLayers(f, t), u = t.length;
                continue;
              }
              if (!f.getLatLng) {
                n.addLayer(f);
                continue;
              }
              this.hasLayer(f) || m.push(f);
            }
          return this;
        },
        //Takes an array of markers and removes them in bulk
        removeLayers: function(t) {
          var e, i, n = t.length, r = this._featureGroup, o = this._nonPointGroup, s = true;
          if (!this._map) {
            for (e = 0; e < n; e++) {
              if (i = t[e], i instanceof L.LayerGroup) {
                s && (t = t.slice(), s = false), this._extractNonGroupLayers(i, t), n = t.length;
                continue;
              }
              this._arraySplice(this._needsClustering, i), o.removeLayer(i), this.hasLayer(i) && this._needsRemoving.push({ layer: i, latlng: i._latlng }), this.fire("layerremove", { layer: i });
            }
            return this;
          }
          if (this._unspiderfy) {
            this._unspiderfy();
            var u = t.slice(), a = n;
            for (e = 0; e < a; e++) {
              if (i = u[e], i instanceof L.LayerGroup) {
                this._extractNonGroupLayers(i, u), a = u.length;
                continue;
              }
              this._unspiderfyLayer(i);
            }
          }
          for (e = 0; e < n; e++) {
            if (i = t[e], i instanceof L.LayerGroup) {
              s && (t = t.slice(), s = false), this._extractNonGroupLayers(i, t), n = t.length;
              continue;
            }
            if (!i.__parent) {
              o.removeLayer(i), this.fire("layerremove", { layer: i });
              continue;
            }
            this._removeLayer(i, true, true), this.fire("layerremove", { layer: i }), r.hasLayer(i) && (r.removeLayer(i), i.clusterShow && i.clusterShow());
          }
          return this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds), this;
        },
        //Removes all layers from the MarkerClusterGroup
        clearLayers: function() {
          return this._map || (this._needsClustering = [], this._needsRemoving = [], delete this._gridClusters, delete this._gridUnclustered), this._noanimationUnspiderfy && this._noanimationUnspiderfy(), this._featureGroup.clearLayers(), this._nonPointGroup.clearLayers(), this.eachLayer(function(t) {
            t.off(this._childMarkerEventHandlers, this), delete t.__parent;
          }, this), this._map && this._generateInitialClusters(), this;
        },
        //Override FeatureGroup.getBounds as it doesn't work
        getBounds: function() {
          var t = new L.LatLngBounds();
          this._topClusterLevel && t.extend(this._topClusterLevel._bounds);
          for (var e = this._needsClustering.length - 1; e >= 0; e--)
            t.extend(this._needsClustering[e].getLatLng());
          return t.extend(this._nonPointGroup.getBounds()), t;
        },
        //Overrides LayerGroup.eachLayer
        eachLayer: function(t, e) {
          var i = this._needsClustering.slice(), n = this._needsRemoving, r, o, s;
          for (this._topClusterLevel && this._topClusterLevel.getAllChildMarkers(i), o = i.length - 1; o >= 0; o--) {
            for (r = true, s = n.length - 1; s >= 0; s--)
              if (n[s].layer === i[o]) {
                r = false;
                break;
              }
            r && t.call(e, i[o]);
          }
          this._nonPointGroup.eachLayer(t, e);
        },
        //Overrides LayerGroup.getLayers
        getLayers: function() {
          var t = [];
          return this.eachLayer(function(e) {
            t.push(e);
          }), t;
        },
        //Overrides LayerGroup.getLayer, WARNING: Really bad performance
        getLayer: function(t) {
          var e = null;
          return t = parseInt(t, 10), this.eachLayer(function(i) {
            L.stamp(i) === t && (e = i);
          }), e;
        },
        //Returns true if the given layer is in this MarkerClusterGroup
        hasLayer: function(t) {
          if (!t)
            return false;
          var e, i = this._needsClustering;
          for (e = i.length - 1; e >= 0; e--)
            if (i[e] === t)
              return true;
          for (i = this._needsRemoving, e = i.length - 1; e >= 0; e--)
            if (i[e].layer === t)
              return false;
          return !!(t.__parent && t.__parent._group === this) || this._nonPointGroup.hasLayer(t);
        },
        //Zoom down to show the given layer (spiderfying if necessary) then calls the callback
        zoomToShowLayer: function(t, e) {
          var i = this._map;
          typeof e != "function" && (e = function() {
          });
          var n = function() {
            (i.hasLayer(t) || i.hasLayer(t.__parent)) && !this._inZoomAnimation && (this._map.off("moveend", n, this), this.off("animationend", n, this), i.hasLayer(t) ? e() : t.__parent._icon && (this.once("spiderfied", e, this), t.__parent.spiderfy()));
          };
          t._icon && this._map.getBounds().contains(t.getLatLng()) ? e() : t.__parent._zoom < Math.round(this._map._zoom) ? (this._map.on("moveend", n, this), this._map.panTo(t.getLatLng())) : (this._map.on("moveend", n, this), this.on("animationend", n, this), t.__parent.zoomToBounds());
        },
        //Overrides FeatureGroup.onAdd
        onAdd: function(t) {
          this._map = t;
          var e, i, n;
          if (!isFinite(this._map.getMaxZoom()))
            throw "Map has no maxZoom specified";
          for (this._featureGroup.addTo(t), this._nonPointGroup.addTo(t), this._gridClusters || this._generateInitialClusters(), this._maxLat = t.options.crs.projection.MAX_LATITUDE, e = 0, i = this._needsRemoving.length; e < i; e++)
            n = this._needsRemoving[e], n.newlatlng = n.layer._latlng, n.layer._latlng = n.latlng;
          for (e = 0, i = this._needsRemoving.length; e < i; e++)
            n = this._needsRemoving[e], this._removeLayer(n.layer, true), n.layer._latlng = n.newlatlng;
          this._needsRemoving = [], this._zoom = Math.round(this._map._zoom), this._currentShownBounds = this._getExpandedVisibleBounds(), this._map.on("zoomend", this._zoomEnd, this), this._map.on("moveend", this._moveEnd, this), this._spiderfierOnAdd && this._spiderfierOnAdd(), this._bindEvents(), i = this._needsClustering, this._needsClustering = [], this.addLayers(i, true);
        },
        //Overrides FeatureGroup.onRemove
        onRemove: function(t) {
          t.off("zoomend", this._zoomEnd, this), t.off("moveend", this._moveEnd, this), this._unbindEvents(), this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", ""), this._spiderfierOnRemove && this._spiderfierOnRemove(), delete this._maxLat, this._hideCoverage(), this._featureGroup.remove(), this._nonPointGroup.remove(), this._featureGroup.clearLayers(), this._map = null;
        },
        getVisibleParent: function(t) {
          for (var e = t; e && !e._icon; )
            e = e.__parent;
          return e || null;
        },
        //Remove the given object from the given array
        _arraySplice: function(t, e) {
          for (var i = t.length - 1; i >= 0; i--)
            if (t[i] === e)
              return t.splice(i, 1), true;
        },
        /**
         * Removes a marker from all _gridUnclustered zoom levels, starting at the supplied zoom.
         * @param marker to be removed from _gridUnclustered.
         * @param z integer bottom start zoom level (included)
         * @private
         */
        _removeFromGridUnclustered: function(t, e) {
          for (var i = this._map, n = this._gridUnclustered, r = Math.floor(this._map.getMinZoom()); e >= r && n[e].removeObject(t, i.project(t.getLatLng(), e)); e--)
            ;
        },
        _childMarkerDragStart: function(t) {
          t.target.__dragStart = t.target._latlng;
        },
        _childMarkerMoved: function(t) {
          if (!this._ignoreMove && !t.target.__dragStart) {
            var e = t.target._popup && t.target._popup.isOpen();
            this._moveChild(t.target, t.oldLatLng, t.latlng), e && t.target.openPopup();
          }
        },
        _moveChild: function(t, e, i) {
          t._latlng = e, this.removeLayer(t), t._latlng = i, this.addLayer(t);
        },
        _childMarkerDragEnd: function(t) {
          var e = t.target.__dragStart;
          delete t.target.__dragStart, e && this._moveChild(t.target, e, t.target._latlng);
        },
        //Internal function for removing a marker from everything.
        //dontUpdateMap: set to true if you will handle updating the map manually (for bulk functions)
        _removeLayer: function(t, e, i) {
          var n = this._gridClusters, r = this._gridUnclustered, o = this._featureGroup, s = this._map, u = Math.floor(this._map.getMinZoom());
          e && this._removeFromGridUnclustered(t, this._maxZoom);
          var a = t.__parent, _ = a._markers, f;
          for (this._arraySplice(_, t); a && (a._childCount--, a._boundsNeedUpdate = true, !(a._zoom < u)); )
            e && a._childCount <= 1 ? (f = a._markers[0] === t ? a._markers[1] : a._markers[0], n[a._zoom].removeObject(a, s.project(a._cLatLng, a._zoom)), r[a._zoom].addObject(f, s.project(f.getLatLng(), a._zoom)), this._arraySplice(a.__parent._childClusters, a), a.__parent._markers.push(f), f.__parent = a.__parent, a._icon && (o.removeLayer(a), i || o.addLayer(f))) : a._iconNeedsUpdate = true, a = a.__parent;
          delete t.__parent;
        },
        _isOrIsParent: function(t, e) {
          for (; e; ) {
            if (t === e)
              return true;
            e = e.parentNode;
          }
          return false;
        },
        //Override L.Evented.fire
        fire: function(t, e, i) {
          if (e && e.layer instanceof L.MarkerCluster) {
            if (e.originalEvent && this._isOrIsParent(e.layer._icon, e.originalEvent.relatedTarget))
              return;
            t = "cluster" + t;
          }
          L.FeatureGroup.prototype.fire.call(this, t, e, i);
        },
        //Override L.Evented.listens
        listens: function(t, e) {
          return L.FeatureGroup.prototype.listens.call(this, t, e) || L.FeatureGroup.prototype.listens.call(this, "cluster" + t, e);
        },
        //Default functionality
        _defaultIconCreateFunction: function(t) {
          var e = t.getChildCount(), i = " marker-cluster-";
          return e < 10 ? i += "small" : e < 100 ? i += "medium" : i += "large", new L.DivIcon({ html: "<div><span>" + e + "</span></div>", className: "marker-cluster" + i, iconSize: new L.Point(40, 40) });
        },
        _bindEvents: function() {
          var t = this._map, e = this.options.spiderfyOnMaxZoom, i = this.options.showCoverageOnHover, n = this.options.zoomToBoundsOnClick, r = this.options.spiderfyOnEveryZoom;
          (e || n || r) && this.on("clusterclick clusterkeypress", this._zoomOrSpiderfy, this), i && (this.on("clustermouseover", this._showCoverage, this), this.on("clustermouseout", this._hideCoverage, this), t.on("zoomend", this._hideCoverage, this));
        },
        _zoomOrSpiderfy: function(t) {
          var e = t.layer, i = e;
          if (!(t.type === "clusterkeypress" && t.originalEvent && t.originalEvent.keyCode !== 13)) {
            for (; i._childClusters.length === 1; )
              i = i._childClusters[0];
            i._zoom === this._maxZoom && i._childCount === e._childCount && this.options.spiderfyOnMaxZoom ? e.spiderfy() : this.options.zoomToBoundsOnClick && e.zoomToBounds(), this.options.spiderfyOnEveryZoom && e.spiderfy(), t.originalEvent && t.originalEvent.keyCode === 13 && this._map._container.focus();
          }
        },
        _showCoverage: function(t) {
          var e = this._map;
          this._inZoomAnimation || (this._shownPolygon && e.removeLayer(this._shownPolygon), t.layer.getChildCount() > 2 && t.layer !== this._spiderfied && (this._shownPolygon = new L.Polygon(t.layer.getConvexHull(), this.options.polygonOptions), e.addLayer(this._shownPolygon)));
        },
        _hideCoverage: function() {
          this._shownPolygon && (this._map.removeLayer(this._shownPolygon), this._shownPolygon = null);
        },
        _unbindEvents: function() {
          var t = this.options.spiderfyOnMaxZoom, e = this.options.showCoverageOnHover, i = this.options.zoomToBoundsOnClick, n = this.options.spiderfyOnEveryZoom, r = this._map;
          (t || i || n) && this.off("clusterclick clusterkeypress", this._zoomOrSpiderfy, this), e && (this.off("clustermouseover", this._showCoverage, this), this.off("clustermouseout", this._hideCoverage, this), r.off("zoomend", this._hideCoverage, this));
        },
        _zoomEnd: function() {
          this._map && (this._mergeSplitClusters(), this._zoom = Math.round(this._map._zoom), this._currentShownBounds = this._getExpandedVisibleBounds());
        },
        _moveEnd: function() {
          if (!this._inZoomAnimation) {
            var t = this._getExpandedVisibleBounds();
            this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, t), this._topClusterLevel._recursivelyAddChildrenToMap(null, Math.round(this._map._zoom), t), this._currentShownBounds = t;
          }
        },
        _generateInitialClusters: function() {
          var t = Math.ceil(this._map.getMaxZoom()), e = Math.floor(this._map.getMinZoom()), i = this.options.maxClusterRadius, n = i;
          typeof i != "function" && (n = function() {
            return i;
          }), this.options.disableClusteringAtZoom !== null && (t = this.options.disableClusteringAtZoom - 1), this._maxZoom = t, this._gridClusters = {}, this._gridUnclustered = {};
          for (var r = t; r >= e; r--)
            this._gridClusters[r] = new L.DistanceGrid(n(r)), this._gridUnclustered[r] = new L.DistanceGrid(n(r));
          this._topClusterLevel = new this._markerCluster(this, e - 1);
        },
        //Zoom: Zoom to start adding at (Pass this._maxZoom to start at the bottom)
        _addLayer: function(t, e) {
          var i = this._gridClusters, n = this._gridUnclustered, r = Math.floor(this._map.getMinZoom()), o, s;
          for (this.options.singleMarkerMode && this._overrideMarkerIcon(t), t.on(this._childMarkerEventHandlers, this); e >= r; e--) {
            o = this._map.project(t.getLatLng(), e);
            var u = i[e].getNearObject(o);
            if (u) {
              u._addChild(t), t.__parent = u;
              return;
            }
            if (u = n[e].getNearObject(o), u) {
              var a = u.__parent;
              a && this._removeLayer(u, false);
              var _ = new this._markerCluster(this, e, u, t);
              i[e].addObject(_, this._map.project(_._cLatLng, e)), u.__parent = _, t.__parent = _;
              var f = _;
              for (s = e - 1; s > a._zoom; s--)
                f = new this._markerCluster(this, s, f), i[s].addObject(f, this._map.project(u.getLatLng(), s));
              a._addChild(f), this._removeFromGridUnclustered(u, e);
              return;
            }
            n[e].addObject(t, o);
          }
          this._topClusterLevel._addChild(t), t.__parent = this._topClusterLevel;
        },
        /**
         * Refreshes the icon of all "dirty" visible clusters.
         * Non-visible "dirty" clusters will be updated when they are added to the map.
         * @private
         */
        _refreshClustersIcons: function() {
          this._featureGroup.eachLayer(function(t) {
            t instanceof L.MarkerCluster && t._iconNeedsUpdate && t._updateIcon();
          });
        },
        //Enqueue code to fire after the marker expand/contract has happened
        _enqueue: function(t) {
          this._queue.push(t), this._queueTimeout || (this._queueTimeout = setTimeout(L.bind(this._processQueue, this), 300));
        },
        _processQueue: function() {
          for (var t = 0; t < this._queue.length; t++)
            this._queue[t].call(this);
          this._queue.length = 0, clearTimeout(this._queueTimeout), this._queueTimeout = null;
        },
        //Merge and split any existing clusters that are too big or small
        _mergeSplitClusters: function() {
          var t = Math.round(this._map._zoom);
          this._processQueue(), this._zoom < t && this._currentShownBounds.intersects(this._getExpandedVisibleBounds()) ? (this._animationStart(), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, this._getExpandedVisibleBounds()), this._animationZoomIn(this._zoom, t)) : this._zoom > t ? (this._animationStart(), this._animationZoomOut(this._zoom, t)) : this._moveEnd();
        },
        //Gets the maps visible bounds expanded in each direction by the size of the screen (so the user cannot see an area we do not cover in one pan)
        _getExpandedVisibleBounds: function() {
          if (this.options.removeOutsideVisibleBounds) {
            if (L.Browser.mobile)
              return this._checkBoundsMaxLat(this._map.getBounds());
          } else return this._mapBoundsInfinite;
          return this._checkBoundsMaxLat(this._map.getBounds().pad(1));
        },
        /**
         * Expands the latitude to Infinity (or -Infinity) if the input bounds reach the map projection maximum defined latitude
         * (in the case of Web/Spherical Mercator, it is 85.0511287798 / see https://en.wikipedia.org/wiki/Web_Mercator#Formulas).
         * Otherwise, the removeOutsideVisibleBounds option will remove markers beyond that limit, whereas the same markers without
         * this option (or outside MCG) will have their position floored (ceiled) by the projection and rendered at that limit,
         * making the user think that MCG "eats" them and never displays them again.
         * @param bounds L.LatLngBounds
         * @returns {L.LatLngBounds}
         * @private
         */
        _checkBoundsMaxLat: function(t) {
          var e = this._maxLat;
          return e !== void 0 && (t.getNorth() >= e && (t._northEast.lat = 1 / 0), t.getSouth() <= -e && (t._southWest.lat = -1 / 0)), t;
        },
        //Shared animation code
        _animationAddLayerNonAnimated: function(t, e) {
          if (e === t)
            this._featureGroup.addLayer(t);
          else if (e._childCount === 2) {
            e._addToMap();
            var i = e.getAllChildMarkers();
            this._featureGroup.removeLayer(i[0]), this._featureGroup.removeLayer(i[1]);
          } else
            e._updateIcon();
        },
        /**
         * Extracts individual (i.e. non-group) layers from a Layer Group.
         * @param group to extract layers from.
         * @param output {Array} in which to store the extracted layers.
         * @returns {*|Array}
         * @private
         */
        _extractNonGroupLayers: function(t, e) {
          var i = t.getLayers(), n = 0, r;
          for (e = e || []; n < i.length; n++) {
            if (r = i[n], r instanceof L.LayerGroup) {
              this._extractNonGroupLayers(r, e);
              continue;
            }
            e.push(r);
          }
          return e;
        },
        /**
         * Implements the singleMarkerMode option.
         * @param layer Marker to re-style using the Clusters iconCreateFunction.
         * @returns {L.Icon} The newly created icon.
         * @private
         */
        _overrideMarkerIcon: function(t) {
          var e = t.options.icon = this.options.iconCreateFunction({
            getChildCount: function() {
              return 1;
            },
            getAllChildMarkers: function() {
              return [t];
            }
          });
          return e;
        }
      });
      L.MarkerClusterGroup.include({
        _mapBoundsInfinite: new L.LatLngBounds(new L.LatLng(-1 / 0, -1 / 0), new L.LatLng(1 / 0, 1 / 0))
      }), L.MarkerClusterGroup.include({
        _noAnimation: {
          //Non Animated versions of everything
          _animationStart: function() {
          },
          _animationZoomIn: function(t, e) {
            this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), t), this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()), this.fire("animationend");
          },
          _animationZoomOut: function(t, e) {
            this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), t), this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()), this.fire("animationend");
          },
          _animationAddLayer: function(t, e) {
            this._animationAddLayerNonAnimated(t, e);
          }
        },
        _withAnimation: {
          //Animated versions here
          _animationStart: function() {
            this._map._mapPane.className += " leaflet-cluster-anim", this._inZoomAnimation++;
          },
          _animationZoomIn: function(t, e) {
            var i = this._getExpandedVisibleBounds(), n = this._featureGroup, r = Math.floor(this._map.getMinZoom()), o;
            this._ignoreMove = true, this._topClusterLevel._recursively(i, t, r, function(s) {
              var u = s._latlng, a = s._markers, _;
              for (i.contains(u) || (u = null), s._isSingleParent() && t + 1 === e ? (n.removeLayer(s), s._recursivelyAddChildrenToMap(null, e, i)) : (s.clusterHide(), s._recursivelyAddChildrenToMap(u, e, i)), o = a.length - 1; o >= 0; o--)
                _ = a[o], i.contains(_._latlng) || n.removeLayer(_);
            }), this._forceLayout(), this._topClusterLevel._recursivelyBecomeVisible(i, e), n.eachLayer(function(s) {
              !(s instanceof L.MarkerCluster) && s._icon && s.clusterShow();
            }), this._topClusterLevel._recursively(i, t, e, function(s) {
              s._recursivelyRestoreChildPositions(e);
            }), this._ignoreMove = false, this._enqueue(function() {
              this._topClusterLevel._recursively(i, t, r, function(s) {
                n.removeLayer(s), s.clusterShow();
              }), this._animationEnd();
            });
          },
          _animationZoomOut: function(t, e) {
            this._animationZoomOutSingle(this._topClusterLevel, t - 1, e), this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), t, this._getExpandedVisibleBounds());
          },
          _animationAddLayer: function(t, e) {
            var i = this, n = this._featureGroup;
            n.addLayer(t), e !== t && (e._childCount > 2 ? (e._updateIcon(), this._forceLayout(), this._animationStart(), t._setPos(this._map.latLngToLayerPoint(e.getLatLng())), t.clusterHide(), this._enqueue(function() {
              n.removeLayer(t), t.clusterShow(), i._animationEnd();
            })) : (this._forceLayout(), i._animationStart(), i._animationZoomOutSingle(e, this._map.getMaxZoom(), this._zoom)));
          }
        },
        // Private methods for animated versions.
        _animationZoomOutSingle: function(t, e, i) {
          var n = this._getExpandedVisibleBounds(), r = Math.floor(this._map.getMinZoom());
          t._recursivelyAnimateChildrenInAndAddSelfToMap(n, r, e + 1, i);
          var o = this;
          this._forceLayout(), t._recursivelyBecomeVisible(n, i), this._enqueue(function() {
            if (t._childCount === 1) {
              var s = t._markers[0];
              this._ignoreMove = true, s.setLatLng(s.getLatLng()), this._ignoreMove = false, s.clusterShow && s.clusterShow();
            } else
              t._recursively(n, i, r, function(u) {
                u._recursivelyRemoveChildrenFromMap(n, r, e + 1);
              });
            o._animationEnd();
          });
        },
        _animationEnd: function() {
          this._map && (this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", "")), this._inZoomAnimation--, this.fire("animationend");
        },
        //Force a browser layout of stuff in the map
        // Should apply the current opacity and location to all elements so we can update them again for an animation
        _forceLayout: function() {
          L.Util.falseFn(document.body.offsetWidth);
        }
      }), L.markerClusterGroup = function(t) {
        return new L.MarkerClusterGroup(t);
      };
      var v = L.MarkerCluster = L.Marker.extend({
        options: L.Icon.prototype.options,
        initialize: function(t, e, i, n) {
          L.Marker.prototype.initialize.call(
            this,
            i ? i._cLatLng || i.getLatLng() : new L.LatLng(0, 0),
            { icon: this, pane: t.options.clusterPane }
          ), this._group = t, this._zoom = e, this._markers = [], this._childClusters = [], this._childCount = 0, this._iconNeedsUpdate = true, this._boundsNeedUpdate = true, this._bounds = new L.LatLngBounds(), i && this._addChild(i), n && this._addChild(n);
        },
        //Recursively retrieve all child markers of this cluster
        getAllChildMarkers: function(t, e) {
          t = t || [];
          for (var i = this._childClusters.length - 1; i >= 0; i--)
            this._childClusters[i].getAllChildMarkers(t, e);
          for (var n = this._markers.length - 1; n >= 0; n--)
            e && this._markers[n].__dragStart || t.push(this._markers[n]);
          return t;
        },
        //Returns the count of how many child markers we have
        getChildCount: function() {
          return this._childCount;
        },
        //Zoom to the minimum of showing all of the child markers, or the extents of this cluster
        zoomToBounds: function(t) {
          for (var e = this._childClusters.slice(), i = this._group._map, n = i.getBoundsZoom(this._bounds), r = this._zoom + 1, o = i.getZoom(), s; e.length > 0 && n > r; ) {
            r++;
            var u = [];
            for (s = 0; s < e.length; s++)
              u = u.concat(e[s]._childClusters);
            e = u;
          }
          n > r ? this._group._map.setView(this._latlng, r) : n <= o ? this._group._map.setView(this._latlng, o + 1) : this._group._map.fitBounds(this._bounds, t);
        },
        getBounds: function() {
          var t = new L.LatLngBounds();
          return t.extend(this._bounds), t;
        },
        _updateIcon: function() {
          this._iconNeedsUpdate = true, this._icon && this.setIcon(this);
        },
        //Cludge for Icon, we pretend to be an icon for performance
        createIcon: function() {
          return this._iconNeedsUpdate && (this._iconObj = this._group.options.iconCreateFunction(this), this._iconNeedsUpdate = false), this._iconObj.createIcon();
        },
        createShadow: function() {
          return this._iconObj.createShadow();
        },
        _addChild: function(t, e) {
          this._iconNeedsUpdate = true, this._boundsNeedUpdate = true, this._setClusterCenter(t), t instanceof L.MarkerCluster ? (e || (this._childClusters.push(t), t.__parent = this), this._childCount += t._childCount) : (e || this._markers.push(t), this._childCount++), this.__parent && this.__parent._addChild(t, true);
        },
        /**
         * Makes sure the cluster center is set. If not, uses the child center if it is a cluster, or the marker position.
         * @param child L.MarkerCluster|L.Marker that will be used as cluster center if not defined yet.
         * @private
         */
        _setClusterCenter: function(t) {
          this._cLatLng || (this._cLatLng = t._cLatLng || t._latlng);
        },
        /**
         * Assigns impossible bounding values so that the next extend entirely determines the new bounds.
         * This method avoids having to trash the previous L.LatLngBounds object and to create a new one, which is much slower for this class.
         * As long as the bounds are not extended, most other methods would probably fail, as they would with bounds initialized but not extended.
         * @private
         */
        _resetBounds: function() {
          var t = this._bounds;
          t._southWest && (t._southWest.lat = 1 / 0, t._southWest.lng = 1 / 0), t._northEast && (t._northEast.lat = -1 / 0, t._northEast.lng = -1 / 0);
        },
        _recalculateBounds: function() {
          var t = this._markers, e = this._childClusters, i = 0, n = 0, r = this._childCount, o, s, u, a;
          if (r !== 0) {
            for (this._resetBounds(), o = 0; o < t.length; o++)
              u = t[o]._latlng, this._bounds.extend(u), i += u.lat, n += u.lng;
            for (o = 0; o < e.length; o++)
              s = e[o], s._boundsNeedUpdate && s._recalculateBounds(), this._bounds.extend(s._bounds), u = s._wLatLng, a = s._childCount, i += u.lat * a, n += u.lng * a;
            this._latlng = this._wLatLng = new L.LatLng(i / r, n / r), this._boundsNeedUpdate = false;
          }
        },
        //Set our markers position as given and add it to the map
        _addToMap: function(t) {
          t && (this._backupLatlng = this._latlng, this.setLatLng(t)), this._group._featureGroup.addLayer(this);
        },
        _recursivelyAnimateChildrenIn: function(t, e, i) {
          this._recursively(
            t,
            this._group._map.getMinZoom(),
            i - 1,
            function(n) {
              var r = n._markers, o, s;
              for (o = r.length - 1; o >= 0; o--)
                s = r[o], s._icon && (s._setPos(e), s.clusterHide());
            },
            function(n) {
              var r = n._childClusters, o, s;
              for (o = r.length - 1; o >= 0; o--)
                s = r[o], s._icon && (s._setPos(e), s.clusterHide());
            }
          );
        },
        _recursivelyAnimateChildrenInAndAddSelfToMap: function(t, e, i, n) {
          this._recursively(
            t,
            n,
            e,
            function(r) {
              r._recursivelyAnimateChildrenIn(t, r._group._map.latLngToLayerPoint(r.getLatLng()).round(), i), r._isSingleParent() && i - 1 === n ? (r.clusterShow(), r._recursivelyRemoveChildrenFromMap(t, e, i)) : r.clusterHide(), r._addToMap();
            }
          );
        },
        _recursivelyBecomeVisible: function(t, e) {
          this._recursively(t, this._group._map.getMinZoom(), e, null, function(i) {
            i.clusterShow();
          });
        },
        _recursivelyAddChildrenToMap: function(t, e, i) {
          this._recursively(
            i,
            this._group._map.getMinZoom() - 1,
            e,
            function(n) {
              if (e !== n._zoom)
                for (var r = n._markers.length - 1; r >= 0; r--) {
                  var o = n._markers[r];
                  i.contains(o._latlng) && (t && (o._backupLatlng = o.getLatLng(), o.setLatLng(t), o.clusterHide && o.clusterHide()), n._group._featureGroup.addLayer(o));
                }
            },
            function(n) {
              n._addToMap(t);
            }
          );
        },
        _recursivelyRestoreChildPositions: function(t) {
          for (var e = this._markers.length - 1; e >= 0; e--) {
            var i = this._markers[e];
            i._backupLatlng && (i.setLatLng(i._backupLatlng), delete i._backupLatlng);
          }
          if (t - 1 === this._zoom)
            for (var n = this._childClusters.length - 1; n >= 0; n--)
              this._childClusters[n]._restorePosition();
          else
            for (var r = this._childClusters.length - 1; r >= 0; r--)
              this._childClusters[r]._recursivelyRestoreChildPositions(t);
        },
        _restorePosition: function() {
          this._backupLatlng && (this.setLatLng(this._backupLatlng), delete this._backupLatlng);
        },
        //exceptBounds: If set, don't remove any markers/clusters in it
        _recursivelyRemoveChildrenFromMap: function(t, e, i, n) {
          var r, o;
          this._recursively(
            t,
            e - 1,
            i - 1,
            function(s) {
              for (o = s._markers.length - 1; o >= 0; o--)
                r = s._markers[o], (!n || !n.contains(r._latlng)) && (s._group._featureGroup.removeLayer(r), r.clusterShow && r.clusterShow());
            },
            function(s) {
              for (o = s._childClusters.length - 1; o >= 0; o--)
                r = s._childClusters[o], (!n || !n.contains(r._latlng)) && (s._group._featureGroup.removeLayer(r), r.clusterShow && r.clusterShow());
            }
          );
        },
        //Run the given functions recursively to this and child clusters
        // boundsToApplyTo: a L.LatLngBounds representing the bounds of what clusters to recurse in to
        // zoomLevelToStart: zoom level to start running functions (inclusive)
        // zoomLevelToStop: zoom level to stop running functions (inclusive)
        // runAtEveryLevel: function that takes an L.MarkerCluster as an argument that should be applied on every level
        // runAtBottomLevel: function that takes an L.MarkerCluster as an argument that should be applied at only the bottom level
        _recursively: function(t, e, i, n, r) {
          var o = this._childClusters, s = this._zoom, u, a;
          if (e <= s && (n && n(this), r && s === i && r(this)), s < e || s < i)
            for (u = o.length - 1; u >= 0; u--)
              a = o[u], a._boundsNeedUpdate && a._recalculateBounds(), t.intersects(a._bounds) && a._recursively(t, e, i, n, r);
        },
        //Returns true if we are the parent of only one cluster and that cluster is the same as us
        _isSingleParent: function() {
          return this._childClusters.length > 0 && this._childClusters[0]._childCount === this._childCount;
        }
      });
      L.Marker.include({
        clusterHide: function() {
          var t = this.options.opacity;
          return this.setOpacity(0), this.options.opacity = t, this;
        },
        clusterShow: function() {
          return this.setOpacity(this.options.opacity);
        }
      }), L.DistanceGrid = function(t) {
        this._cellSize = t, this._sqCellSize = t * t, this._grid = {}, this._objectPoint = {};
      }, L.DistanceGrid.prototype = {
        addObject: function(t, e) {
          var i = this._getCoord(e.x), n = this._getCoord(e.y), r = this._grid, o = r[n] = r[n] || {}, s = o[i] = o[i] || [], u = L.Util.stamp(t);
          this._objectPoint[u] = e, s.push(t);
        },
        updateObject: function(t, e) {
          this.removeObject(t), this.addObject(t, e);
        },
        //Returns true if the object was found
        removeObject: function(t, e) {
          var i = this._getCoord(e.x), n = this._getCoord(e.y), r = this._grid, o = r[n] = r[n] || {}, s = o[i] = o[i] || [], u, a;
          for (delete this._objectPoint[L.Util.stamp(t)], u = 0, a = s.length; u < a; u++)
            if (s[u] === t)
              return s.splice(u, 1), a === 1 && delete o[i], true;
        },
        eachObject: function(t, e) {
          var i, n, r, o, s, u, a, _ = this._grid;
          for (i in _) {
            s = _[i];
            for (n in s)
              for (u = s[n], r = 0, o = u.length; r < o; r++)
                a = t.call(e, u[r]), a && (r--, o--);
          }
        },
        getNearObject: function(t) {
          var e = this._getCoord(t.x), i = this._getCoord(t.y), n, r, o, s, u, a, _, f, g = this._objectPoint, c = this._sqCellSize, m = null;
          for (n = i - 1; n <= i + 1; n++)
            if (s = this._grid[n], s) {
              for (r = e - 1; r <= e + 1; r++)
                if (u = s[r], u)
                  for (o = 0, a = u.length; o < a; o++)
                    _ = u[o], f = this._sqDist(g[L.Util.stamp(_)], t), (f < c || f <= c && m === null) && (c = f, m = _);
            }
          return m;
        },
        _getCoord: function(t) {
          var e = Math.floor(t / this._cellSize);
          return isFinite(e) ? e : t;
        },
        _sqDist: function(t, e) {
          var i = e.x - t.x, n = e.y - t.y;
          return i * i + n * n;
        }
      }, (function() {
        L.QuickHull = {
          /*
           * @param {Object} cpt a point to be measured from the baseline
           * @param {Array} bl the baseline, as represented by a two-element
           *   array of latlng objects.
           * @returns {Number} an approximate distance measure
           */
          getDistant: function(t, e) {
            var i = e[1].lat - e[0].lat, n = e[0].lng - e[1].lng;
            return n * (t.lat - e[0].lat) + i * (t.lng - e[0].lng);
          },
          /*
           * @param {Array} baseLine a two-element array of latlng objects
           *   representing the baseline to project from
           * @param {Array} latLngs an array of latlng objects
           * @returns {Object} the maximum point and all new points to stay
           *   in consideration for the hull.
           */
          findMostDistantPointFromBaseLine: function(t, e) {
            var i = 0, n = null, r = [], o, s, u;
            for (o = e.length - 1; o >= 0; o--) {
              if (s = e[o], u = this.getDistant(s, t), u > 0)
                r.push(s);
              else
                continue;
              u > i && (i = u, n = s);
            }
            return { maxPoint: n, newPoints: r };
          },
          /*
           * Given a baseline, compute the convex hull of latLngs as an array
           * of latLngs.
           *
           * @param {Array} latLngs
           * @returns {Array}
           */
          buildConvexHull: function(t, e) {
            var i = [], n = this.findMostDistantPointFromBaseLine(t, e);
            return n.maxPoint ? (i = i.concat(
              this.buildConvexHull([t[0], n.maxPoint], n.newPoints)
            ), i = i.concat(
              this.buildConvexHull([n.maxPoint, t[1]], n.newPoints)
            ), i) : [t[0]];
          },
          /*
           * Given an array of latlngs, compute a convex hull as an array
           * of latlngs
           *
           * @param {Array} latLngs
           * @returns {Array}
           */
          getConvexHull: function(t) {
            var e = false, i = false, n = false, r = false, o = null, s = null, u = null, a = null, _ = null, f = null, g;
            for (g = t.length - 1; g >= 0; g--) {
              var c = t[g];
              (e === false || c.lat > e) && (o = c, e = c.lat), (i === false || c.lat < i) && (s = c, i = c.lat), (n === false || c.lng > n) && (u = c, n = c.lng), (r === false || c.lng < r) && (a = c, r = c.lng);
            }
            i !== e ? (f = s, _ = o) : (f = a, _ = u);
            var m = [].concat(
              this.buildConvexHull([f, _], t),
              this.buildConvexHull([_, f], t)
            );
            return m;
          }
        };
      })(), L.MarkerCluster.include({
        getConvexHull: function() {
          var t = this.getAllChildMarkers(), e = [], i, n;
          for (n = t.length - 1; n >= 0; n--)
            i = t[n].getLatLng(), e.push(i);
          return L.QuickHull.getConvexHull(e);
        }
      }), L.MarkerCluster.include({
        _2PI: Math.PI * 2,
        _circleFootSeparation: 25,
        //related to circumference of circle
        _circleStartAngle: 0,
        _spiralFootSeparation: 28,
        //related to size of spiral (experiment!)
        _spiralLengthStart: 11,
        _spiralLengthFactor: 5,
        _circleSpiralSwitchover: 9,
        //show spiral instead of circle from this marker count upwards.
        // 0 -> always spiral; Infinity -> always circle
        spiderfy: function() {
          if (!(this._group._spiderfied === this || this._group._inZoomAnimation)) {
            var t = this.getAllChildMarkers(null, true), e = this._group, i = e._map, n = i.latLngToLayerPoint(this._latlng), r;
            this._group._unspiderfy(), this._group._spiderfied = this, this._group.options.spiderfyShapePositions ? r = this._group.options.spiderfyShapePositions(t.length, n) : t.length >= this._circleSpiralSwitchover ? r = this._generatePointsSpiral(t.length, n) : (n.y += 10, r = this._generatePointsCircle(t.length, n)), this._animationSpiderfy(t, r);
          }
        },
        unspiderfy: function(t) {
          this._group._inZoomAnimation || (this._animationUnspiderfy(t), this._group._spiderfied = null);
        },
        _generatePointsCircle: function(t, e) {
          var i = this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + t), n = i / this._2PI, r = this._2PI / t, o = [], s, u;
          for (n = Math.max(n, 35), o.length = t, s = 0; s < t; s++)
            u = this._circleStartAngle + s * r, o[s] = new L.Point(e.x + n * Math.cos(u), e.y + n * Math.sin(u))._round();
          return o;
        },
        _generatePointsSpiral: function(t, e) {
          var i = this._group.options.spiderfyDistanceMultiplier, n = i * this._spiralLengthStart, r = i * this._spiralFootSeparation, o = i * this._spiralLengthFactor * this._2PI, s = 0, u = [], a;
          for (u.length = t, a = t; a >= 0; a--)
            a < t && (u[a] = new L.Point(e.x + n * Math.cos(s), e.y + n * Math.sin(s))._round()), s += r / n + a * 5e-4, n += o / s;
          return u;
        },
        _noanimationUnspiderfy: function() {
          var t = this._group, e = t._map, i = t._featureGroup, n = this.getAllChildMarkers(null, true), r, o;
          for (t._ignoreMove = true, this.setOpacity(1), o = n.length - 1; o >= 0; o--)
            r = n[o], i.removeLayer(r), r._preSpiderfyLatlng && (r.setLatLng(r._preSpiderfyLatlng), delete r._preSpiderfyLatlng), r.setZIndexOffset && r.setZIndexOffset(0), r._spiderLeg && (e.removeLayer(r._spiderLeg), delete r._spiderLeg);
          t.fire("unspiderfied", {
            cluster: this,
            markers: n
          }), t._ignoreMove = false, t._spiderfied = null;
        }
      }), L.MarkerClusterNonAnimated = L.MarkerCluster.extend({
        _animationSpiderfy: function(t, e) {
          var i = this._group, n = i._map, r = i._featureGroup, o = this._group.options.spiderLegPolylineOptions, s, u, a, _;
          for (i._ignoreMove = true, s = 0; s < t.length; s++)
            _ = n.layerPointToLatLng(e[s]), u = t[s], a = new L.Polyline([this._latlng, _], o), n.addLayer(a), u._spiderLeg = a, u._preSpiderfyLatlng = u._latlng, u.setLatLng(_), u.setZIndexOffset && u.setZIndexOffset(1e6), r.addLayer(u);
          this.setOpacity(0.3), i._ignoreMove = false, i.fire("spiderfied", {
            cluster: this,
            markers: t
          });
        },
        _animationUnspiderfy: function() {
          this._noanimationUnspiderfy();
        }
      }), L.MarkerCluster.include({
        _animationSpiderfy: function(t, e) {
          var i = this, n = this._group, r = n._map, o = n._featureGroup, s = this._latlng, u = r.latLngToLayerPoint(s), a = L.Path.SVG, _ = L.extend({}, this._group.options.spiderLegPolylineOptions), f = _.opacity, g, c, m, y, M, C;
          for (f === void 0 && (f = L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity), a ? (_.opacity = 0, _.className = (_.className || "") + " leaflet-cluster-spider-leg") : _.opacity = f, n._ignoreMove = true, g = 0; g < t.length; g++)
            c = t[g], C = r.layerPointToLatLng(e[g]), m = new L.Polyline([s, C], _), r.addLayer(m), c._spiderLeg = m, a && (y = m._path, M = y.getTotalLength() + 0.1, y.style.strokeDasharray = M, y.style.strokeDashoffset = M), c.setZIndexOffset && c.setZIndexOffset(1e6), c.clusterHide && c.clusterHide(), o.addLayer(c), c._setPos && c._setPos(u);
          for (n._forceLayout(), n._animationStart(), g = t.length - 1; g >= 0; g--)
            C = r.layerPointToLatLng(e[g]), c = t[g], c._preSpiderfyLatlng = c._latlng, c.setLatLng(C), c.clusterShow && c.clusterShow(), a && (m = c._spiderLeg, y = m._path, y.style.strokeDashoffset = 0, m.setStyle({ opacity: f }));
          this.setOpacity(0.3), n._ignoreMove = false, setTimeout(function() {
            n._animationEnd(), n.fire("spiderfied", {
              cluster: i,
              markers: t
            });
          }, 200);
        },
        _animationUnspiderfy: function(t) {
          var e = this, i = this._group, n = i._map, r = i._featureGroup, o = t ? n._latLngToNewLayerPoint(this._latlng, t.zoom, t.center) : n.latLngToLayerPoint(this._latlng), s = this.getAllChildMarkers(null, true), u = L.Path.SVG, a, _, f, g, c, m;
          for (i._ignoreMove = true, i._animationStart(), this.setOpacity(1), _ = s.length - 1; _ >= 0; _--)
            a = s[_], a._preSpiderfyLatlng && (a.closePopup(), a.setLatLng(a._preSpiderfyLatlng), delete a._preSpiderfyLatlng, m = true, a._setPos && (a._setPos(o), m = false), a.clusterHide && (a.clusterHide(), m = false), m && r.removeLayer(a), u && (f = a._spiderLeg, g = f._path, c = g.getTotalLength() + 0.1, g.style.strokeDashoffset = c, f.setStyle({ opacity: 0 })));
          i._ignoreMove = false, setTimeout(function() {
            var y = 0;
            for (_ = s.length - 1; _ >= 0; _--)
              a = s[_], a._spiderLeg && y++;
            for (_ = s.length - 1; _ >= 0; _--)
              a = s[_], a._spiderLeg && (a.clusterShow && a.clusterShow(), a.setZIndexOffset && a.setZIndexOffset(0), y > 1 && r.removeLayer(a), n.removeLayer(a._spiderLeg), delete a._spiderLeg);
            i._animationEnd(), i.fire("unspiderfied", {
              cluster: e,
              markers: s
            });
          }, 200);
        }
      }), L.MarkerClusterGroup.include({
        //The MarkerCluster currently spiderfied (if any)
        _spiderfied: null,
        unspiderfy: function() {
          this._unspiderfy.apply(this, arguments);
        },
        _spiderfierOnAdd: function() {
          this._map.on("click", this._unspiderfyWrapper, this), this._map.options.zoomAnimation && this._map.on("zoomstart", this._unspiderfyZoomStart, this), this._map.on("zoomend", this._noanimationUnspiderfy, this), L.Browser.touch || this._map.getRenderer(this);
        },
        _spiderfierOnRemove: function() {
          this._map.off("click", this._unspiderfyWrapper, this), this._map.off("zoomstart", this._unspiderfyZoomStart, this), this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._map.off("zoomend", this._noanimationUnspiderfy, this), this._noanimationUnspiderfy();
        },
        //On zoom start we add a zoomanim handler so that we are guaranteed to be last (after markers are animated)
        //This means we can define the animation they do rather than Markers doing an animation to their actual location
        _unspiderfyZoomStart: function() {
          this._map && this._map.on("zoomanim", this._unspiderfyZoomAnim, this);
        },
        _unspiderfyZoomAnim: function(t) {
          L.DomUtil.hasClass(this._map._mapPane, "leaflet-touching") || (this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._unspiderfy(t));
        },
        _unspiderfyWrapper: function() {
          this._unspiderfy();
        },
        _unspiderfy: function(t) {
          this._spiderfied && this._spiderfied.unspiderfy(t);
        },
        _noanimationUnspiderfy: function() {
          this._spiderfied && this._spiderfied._noanimationUnspiderfy();
        },
        //If the given layer is currently being spiderfied then we unspiderfy it so it isn't on the map anymore etc
        _unspiderfyLayer: function(t) {
          t._spiderLeg && (this._featureGroup.removeLayer(t), t.clusterShow && t.clusterShow(), t.setZIndexOffset && t.setZIndexOffset(0), this._map.removeLayer(t._spiderLeg), delete t._spiderLeg);
        }
      }), L.MarkerClusterGroup.include({
        /**
         * Updates the icon of all clusters which are parents of the given marker(s).
         * In singleMarkerMode, also updates the given marker(s) icon.
         * @param layers L.MarkerClusterGroup|L.LayerGroup|Array(L.Marker)|Map(L.Marker)|
         * L.MarkerCluster|L.Marker (optional) list of markers (or single marker) whose parent
         * clusters need to be updated. If not provided, retrieves all child markers of this.
         * @returns {L.MarkerClusterGroup}
         */
        refreshClusters: function(t) {
          return t ? t instanceof L.MarkerClusterGroup ? t = t._topClusterLevel.getAllChildMarkers() : t instanceof L.LayerGroup ? t = t._layers : t instanceof L.MarkerCluster ? t = t.getAllChildMarkers() : t instanceof L.Marker && (t = [t]) : t = this._topClusterLevel.getAllChildMarkers(), this._flagParentsIconsNeedUpdate(t), this._refreshClustersIcons(), this.options.singleMarkerMode && this._refreshSingleMarkerModeMarkers(t), this;
        },
        /**
         * Simply flags all parent clusters of the given markers as having a "dirty" icon.
         * @param layers Array(L.Marker)|Map(L.Marker) list of markers.
         * @private
         */
        _flagParentsIconsNeedUpdate: function(t) {
          var e, i;
          for (e in t)
            for (i = t[e].__parent; i; )
              i._iconNeedsUpdate = true, i = i.__parent;
        },
        /**
         * Re-draws the icon of the supplied markers.
         * To be used in singleMarkerMode only.
         * @param layers Array(L.Marker)|Map(L.Marker) list of markers.
         * @private
         */
        _refreshSingleMarkerModeMarkers: function(t) {
          var e, i;
          for (e in t)
            i = t[e], this.hasLayer(i) && i.setIcon(this._overrideMarkerIcon(i));
        }
      }), L.Marker.include({
        /**
         * Updates the given options in the marker's icon and refreshes the marker.
         * @param options map object of icon options.
         * @param directlyRefreshClusters boolean (optional) true to trigger
         * MCG.refreshClustersOf() right away with this single marker.
         * @returns {L.Marker}
         */
        refreshIconOptions: function(t, e) {
          var i = this.options.icon;
          return L.setOptions(i, t), this.setIcon(i), e && this.__parent && this.__parent._group.refreshClusters(this), this;
        }
      }), d.MarkerClusterGroup = p, d.MarkerCluster = v, Object.defineProperty(d, "__esModule", { value: true });
    });
  })(k, k.exports)), k.exports;
}
E();
function S(h) {
  "@babel/helpers - typeof";
  return S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
    return typeof l;
  } : function(l) {
    return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
  }, S(h);
}
var T = ["children"];
function O(h, l) {
  var d = Object.keys(h);
  if (Object.getOwnPropertySymbols) {
    var p = Object.getOwnPropertySymbols(h);
    l && (p = p.filter(function(v) {
      return Object.getOwnPropertyDescriptor(h, v).enumerable;
    })), d.push.apply(d, p);
  }
  return d;
}
function w(h) {
  for (var l = 1; l < arguments.length; l++) {
    var d = arguments[l] != null ? arguments[l] : {};
    l % 2 ? O(Object(d), true).forEach(function(p) {
      j(h, p, d[p]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(d)) : O(Object(d)).forEach(function(p) {
      Object.defineProperty(h, p, Object.getOwnPropertyDescriptor(d, p));
    });
  }
  return h;
}
function j(h, l, d) {
  return (l = A(l)) in h ? Object.defineProperty(h, l, {
    value: d,
    enumerable: true,
    configurable: true,
    writable: true
  }) : h[l] = d, h;
}
function A(h) {
  var l = U(h, "string");
  return S(l) == "symbol" ? l : l + "";
}
function U(h, l) {
  if (S(h) != "object" || !h) return h;
  var d = h[Symbol.toPrimitive];
  if (d !== void 0) {
    var p = d.call(h, l);
    if (S(p) != "object") return p;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (l === "string" ? String : Number)(h);
}
function x(h, l) {
  return D(h) || H(h, l) || z(h, l) || N();
}
function N() {
  throw new TypeError(
    `Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`
  );
}
function z(h, l) {
  if (h) {
    if (typeof h == "string") return G(h, l);
    var d = {}.toString.call(h).slice(8, -1);
    return d === "Object" && h.constructor && (d = h.constructor.name), d === "Map" || d === "Set" ? Array.from(h) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? G(h, l) : void 0;
  }
}
function G(h, l) {
  (l == null || l > h.length) && (l = h.length);
  for (var d = 0, p = Array(l); d < l; d++) p[d] = h[d];
  return p;
}
function H(h, l) {
  var d = h == null ? null : typeof Symbol < "u" && h[Symbol.iterator] || h["@@iterator"];
  if (d != null) {
    var p, v, t, e, i = [], n = true, r = false;
    try {
      if (t = (d = d.call(h)).next, l !== 0) for (; !(n = (p = t.call(d)).done) && (i.push(p.value), i.length !== l); n = true) ;
    } catch (o) {
      r = true, v = o;
    } finally {
      try {
        if (!n && d.return != null && (e = d.return(), Object(e) !== e))
          return;
      } finally {
        if (r) throw v;
      }
    }
    return i;
  }
}
function D(h) {
  if (Array.isArray(h)) return h;
}
function R(h, l) {
  if (h == null) return {};
  var d, p, v = F(h, l);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(h);
    for (p = 0; p < t.length; p++)
      d = t[p], l.includes(d) || {}.propertyIsEnumerable.call(h, d) && (v[d] = h[d]);
  }
  return v;
}
function F(h, l) {
  if (h == null) return {};
  var d = {};
  for (var p in h)
    if ({}.hasOwnProperty.call(h, p)) {
      if (l.includes(p)) continue;
      d[p] = h[p];
    }
  return d;
}
Se.MarkerClusterGroup.include({
  _flushLayerBuffer: function() {
    this.addLayers(this._layerBuffer), this._layerBuffer = [];
  },
  addLayer: function(l) {
    this._layerBuffer.length === 0 && setTimeout(this._flushLayerBuffer.bind(this), 50), this._layerBuffer.push(l);
  }
});
Se.MarkerClusterGroup.addInitHook(function() {
  this._layerBuffer = [];
});
function V(h, l) {
  h.children;
  var d = R(h, T), p = {}, v = {};
  Object.entries(d).forEach(function(e) {
    var i = x(e, 2), n = i[0], r = i[1];
    return n.startsWith("on") ? v[n] = r : p[n] = r;
  });
  var t = new Se.MarkerClusterGroup(p);
  return Object.entries(v).forEach(function(e) {
    var i = x(e, 2), n = i[0], r = i[1], o = "cluster".concat(n.substring(2).toLowerCase());
    t.on(o, r);
  }), {
    instance: t,
    context: w(
      w({}, l),
      {},
      {
        layerContainer: t
      }
    )
  };
}
var W = Ws(V);

export { W as default };
//# sourceMappingURL=index-D3rp6o_m-o3CTjsl9-f-OdASDK.js.map

//# sourceMappingURL=index-D3rp6o_m-o3CTjsl9-f-OdASDK.js.map