import { W as Ws, a as Se } from "./BubbleMapChart-DoY9i-C0.js";
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
export {
  W as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtRDNycDZvX20tbzNDVGpzbDkuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcmNhcmxzb24vZmx1aWQvZHJvcGxldC1lbWJlZGRhYmxlL2FwcC9mcm9udGVuZC9lbWJlZGRhYmxlL25vZGVfbW9kdWxlcy9AZW1iZWRkYWJsZS5jb20vdmFuaWxsYS1jb21wb25lbnRzL2Rpc3QvaW5kZXgtRDNycDZvX20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZiBhcyBCLCBnIGFzIFAgfSBmcm9tIFwiLi9CdWJibGVNYXBDaGFydC5lbWItQjBRdXZ3bVUuanNcIjtcbnZhciBrID0geyBleHBvcnRzOiB7fSB9LCBaID0gay5leHBvcnRzLCBiO1xuZnVuY3Rpb24gRSgpIHtcbiAgcmV0dXJuIGIgfHwgKGIgPSAxLCBmdW5jdGlvbihoLCBsKSB7XG4gICAgKGZ1bmN0aW9uKGQsIHApIHtcbiAgICAgIHAobCk7XG4gICAgfSkoWiwgZnVuY3Rpb24oZCkge1xuICAgICAgdmFyIHAgPSBMLk1hcmtlckNsdXN0ZXJHcm91cCA9IEwuRmVhdHVyZUdyb3VwLmV4dGVuZCh7XG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBtYXhDbHVzdGVyUmFkaXVzOiA4MCxcbiAgICAgICAgICAvL0EgY2x1c3RlciB3aWxsIGNvdmVyIGF0IG1vc3QgdGhpcyBtYW55IHBpeGVscyBmcm9tIGl0cyBjZW50ZXJcbiAgICAgICAgICBpY29uQ3JlYXRlRnVuY3Rpb246IG51bGwsXG4gICAgICAgICAgY2x1c3RlclBhbmU6IEwuTWFya2VyLnByb3RvdHlwZS5vcHRpb25zLnBhbmUsXG4gICAgICAgICAgc3BpZGVyZnlPbkV2ZXJ5Wm9vbTogITEsXG4gICAgICAgICAgc3BpZGVyZnlPbk1heFpvb206ICEwLFxuICAgICAgICAgIHNob3dDb3ZlcmFnZU9uSG92ZXI6ICEwLFxuICAgICAgICAgIHpvb21Ub0JvdW5kc09uQ2xpY2s6ICEwLFxuICAgICAgICAgIHNpbmdsZU1hcmtlck1vZGU6ICExLFxuICAgICAgICAgIGRpc2FibGVDbHVzdGVyaW5nQXRab29tOiBudWxsLFxuICAgICAgICAgIC8vIFNldHRpbmcgdGhpcyB0byBmYWxzZSBwcmV2ZW50cyB0aGUgcmVtb3ZhbCBvZiBhbnkgY2x1c3RlcnMgb3V0c2lkZSBvZiB0aGUgdmlld3BvaW50LCB3aGljaFxuICAgICAgICAgIC8vIGlzIHRoZSBkZWZhdWx0IGJlaGF2aW91ciBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAgICAgICAgICByZW1vdmVPdXRzaWRlVmlzaWJsZUJvdW5kczogITAsXG4gICAgICAgICAgLy8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgYWxsIGFuaW1hdGlvbnMgKHpvb20gYW5kIHNwaWRlcmZ5KS5cbiAgICAgICAgICAvLyBJZiBmYWxzZSwgb3B0aW9uIGFuaW1hdGVBZGRpbmdNYXJrZXJzIGJlbG93IGhhcyBubyBlZmZlY3QuXG4gICAgICAgICAgLy8gSWYgTC5Eb21VdGlsLlRSQU5TSVRJT04gaXMgZmFsc3ksIHRoaXMgb3B0aW9uIGhhcyBubyBlZmZlY3QuXG4gICAgICAgICAgYW5pbWF0ZTogITAsXG4gICAgICAgICAgLy9XaGV0aGVyIHRvIGFuaW1hdGUgYWRkaW5nIG1hcmtlcnMgYWZ0ZXIgYWRkaW5nIHRoZSBNYXJrZXJDbHVzdGVyR3JvdXAgdG8gdGhlIG1hcFxuICAgICAgICAgIC8vIElmIHlvdSBhcmUgYWRkaW5nIGluZGl2aWR1YWwgbWFya2VycyBzZXQgdG8gdHJ1ZSwgaWYgYWRkaW5nIGJ1bGsgbWFya2VycyBsZWF2ZSBmYWxzZSBmb3IgbWFzc2l2ZSBwZXJmb3JtYW5jZSBnYWlucy5cbiAgICAgICAgICBhbmltYXRlQWRkaW5nTWFya2VyczogITEsXG4gICAgICAgICAgLy8gTWFrZSBpdCBwb3NzaWJsZSB0byBwcm92aWRlIGN1c3RvbSBmdW5jdGlvbiB0byBjYWxjdWxhdGUgc3BpZGVyZnkgc2hhcGUgcG9zaXRpb25zXG4gICAgICAgICAgc3BpZGVyZnlTaGFwZVBvc2l0aW9uczogbnVsbCxcbiAgICAgICAgICAvL0luY3JlYXNlIHRvIGluY3JlYXNlIHRoZSBkaXN0YW5jZSBhd2F5IHRoYXQgc3BpZGVyZmllZCBtYXJrZXJzIGFwcGVhciBmcm9tIHRoZSBjZW50ZXJcbiAgICAgICAgICBzcGlkZXJmeURpc3RhbmNlTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAvLyBNYWtlIGl0IHBvc3NpYmxlIHRvIHNwZWNpZnkgYSBwb2x5bGluZSBvcHRpb25zIG9uIGEgc3BpZGVyIGxlZ1xuICAgICAgICAgIHNwaWRlckxlZ1BvbHlsaW5lT3B0aW9uczogeyB3ZWlnaHQ6IDEuNSwgY29sb3I6IFwiIzIyMlwiLCBvcGFjaXR5OiAwLjUgfSxcbiAgICAgICAgICAvLyBXaGVuIGJ1bGsgYWRkaW5nIGxheWVycywgYWRkcyBtYXJrZXJzIGluIGNodW5rcy4gTWVhbnMgYWRkTGF5ZXJzIG1heSBub3QgYWRkIGFsbCB0aGUgbGF5ZXJzIGluIHRoZSBjYWxsLCBvdGhlcnMgd2lsbCBiZSBsb2FkZWQgZHVyaW5nIHNldFRpbWVvdXRzXG4gICAgICAgICAgY2h1bmtlZExvYWRpbmc6ICExLFxuICAgICAgICAgIGNodW5rSW50ZXJ2YWw6IDIwMCxcbiAgICAgICAgICAvLyBwcm9jZXNzIG1hcmtlcnMgZm9yIGEgbWF4aW11bSBvZiB+IG4gbWlsbGlzZWNvbmRzICh0aGVuIHRyaWdnZXIgdGhlIGNodW5rUHJvZ3Jlc3MgY2FsbGJhY2spXG4gICAgICAgICAgY2h1bmtEZWxheTogNTAsXG4gICAgICAgICAgLy8gYXQgdGhlIGVuZCBvZiBlYWNoIGludGVydmFsLCBnaXZlIG4gbWlsbGlzZWNvbmRzIGJhY2sgdG8gc3lzdGVtL2Jyb3dzZXJcbiAgICAgICAgICBjaHVua1Byb2dyZXNzOiBudWxsLFxuICAgICAgICAgIC8vIHByb2dyZXNzIGNhbGxiYWNrOiBmdW5jdGlvbihwcm9jZXNzZWQsIHRvdGFsLCBlbGFwc2VkKSAoZS5nLiBmb3IgYSBwcm9ncmVzcyBpbmRpY2F0b3IpXG4gICAgICAgICAgLy9PcHRpb25zIHRvIHBhc3MgdG8gdGhlIEwuUG9seWdvbiBjb25zdHJ1Y3RvclxuICAgICAgICAgIHBvbHlnb25PcHRpb25zOiB7fVxuICAgICAgICB9LFxuICAgICAgICBpbml0aWFsaXplOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgTC5VdGlsLnNldE9wdGlvbnModGhpcywgdCksIHRoaXMub3B0aW9ucy5pY29uQ3JlYXRlRnVuY3Rpb24gfHwgKHRoaXMub3B0aW9ucy5pY29uQ3JlYXRlRnVuY3Rpb24gPSB0aGlzLl9kZWZhdWx0SWNvbkNyZWF0ZUZ1bmN0aW9uKSwgdGhpcy5fZmVhdHVyZUdyb3VwID0gTC5mZWF0dXJlR3JvdXAoKSwgdGhpcy5fZmVhdHVyZUdyb3VwLmFkZEV2ZW50UGFyZW50KHRoaXMpLCB0aGlzLl9ub25Qb2ludEdyb3VwID0gTC5mZWF0dXJlR3JvdXAoKSwgdGhpcy5fbm9uUG9pbnRHcm91cC5hZGRFdmVudFBhcmVudCh0aGlzKSwgdGhpcy5faW5ab29tQW5pbWF0aW9uID0gMCwgdGhpcy5fbmVlZHNDbHVzdGVyaW5nID0gW10sIHRoaXMuX25lZWRzUmVtb3ZpbmcgPSBbXSwgdGhpcy5fY3VycmVudFNob3duQm91bmRzID0gbnVsbCwgdGhpcy5fcXVldWUgPSBbXSwgdGhpcy5fY2hpbGRNYXJrZXJFdmVudEhhbmRsZXJzID0ge1xuICAgICAgICAgICAgZHJhZ3N0YXJ0OiB0aGlzLl9jaGlsZE1hcmtlckRyYWdTdGFydCxcbiAgICAgICAgICAgIG1vdmU6IHRoaXMuX2NoaWxkTWFya2VyTW92ZWQsXG4gICAgICAgICAgICBkcmFnZW5kOiB0aGlzLl9jaGlsZE1hcmtlckRyYWdFbmRcbiAgICAgICAgICB9O1xuICAgICAgICAgIHZhciBlID0gTC5Eb21VdGlsLlRSQU5TSVRJT04gJiYgdGhpcy5vcHRpb25zLmFuaW1hdGU7XG4gICAgICAgICAgTC5leHRlbmQodGhpcywgZSA/IHRoaXMuX3dpdGhBbmltYXRpb24gOiB0aGlzLl9ub0FuaW1hdGlvbiksIHRoaXMuX21hcmtlckNsdXN0ZXIgPSBlID8gTC5NYXJrZXJDbHVzdGVyIDogTC5NYXJrZXJDbHVzdGVyTm9uQW5pbWF0ZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZExheWVyOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBMLkxheWVyR3JvdXApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRMYXllcnMoW3RdKTtcbiAgICAgICAgICBpZiAoIXQuZ2V0TGF0TG5nKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25vblBvaW50R3JvdXAuYWRkTGF5ZXIodCksIHRoaXMuZmlyZShcImxheWVyYWRkXCIsIHsgbGF5ZXI6IHQgfSksIHRoaXM7XG4gICAgICAgICAgaWYgKCF0aGlzLl9tYXApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmVlZHNDbHVzdGVyaW5nLnB1c2godCksIHRoaXMuZmlyZShcImxheWVyYWRkXCIsIHsgbGF5ZXI6IHQgfSksIHRoaXM7XG4gICAgICAgICAgaWYgKHRoaXMuaGFzTGF5ZXIodCkpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB0aGlzLl91bnNwaWRlcmZ5ICYmIHRoaXMuX3Vuc3BpZGVyZnkoKSwgdGhpcy5fYWRkTGF5ZXIodCwgdGhpcy5fbWF4Wm9vbSksIHRoaXMuZmlyZShcImxheWVyYWRkXCIsIHsgbGF5ZXI6IHQgfSksIHRoaXMuX3RvcENsdXN0ZXJMZXZlbC5fcmVjYWxjdWxhdGVCb3VuZHMoKSwgdGhpcy5fcmVmcmVzaENsdXN0ZXJzSWNvbnMoKTtcbiAgICAgICAgICB2YXIgZSA9IHQsIGkgPSB0aGlzLl96b29tO1xuICAgICAgICAgIGlmICh0Ll9fcGFyZW50KVxuICAgICAgICAgICAgZm9yICg7IGUuX19wYXJlbnQuX3pvb20gPj0gaTsgKVxuICAgICAgICAgICAgICBlID0gZS5fX3BhcmVudDtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFNob3duQm91bmRzLmNvbnRhaW5zKGUuZ2V0TGF0TG5nKCkpICYmICh0aGlzLm9wdGlvbnMuYW5pbWF0ZUFkZGluZ01hcmtlcnMgPyB0aGlzLl9hbmltYXRpb25BZGRMYXllcih0LCBlKSA6IHRoaXMuX2FuaW1hdGlvbkFkZExheWVyTm9uQW5pbWF0ZWQodCwgZSkpLCB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVMYXllcjogZnVuY3Rpb24odCkge1xuICAgICAgICAgIHJldHVybiB0IGluc3RhbmNlb2YgTC5MYXllckdyb3VwID8gdGhpcy5yZW1vdmVMYXllcnMoW3RdKSA6IHQuZ2V0TGF0TG5nID8gdGhpcy5fbWFwID8gdC5fX3BhcmVudCA/ICh0aGlzLl91bnNwaWRlcmZ5ICYmICh0aGlzLl91bnNwaWRlcmZ5KCksIHRoaXMuX3Vuc3BpZGVyZnlMYXllcih0KSksIHRoaXMuX3JlbW92ZUxheWVyKHQsICEwKSwgdGhpcy5maXJlKFwibGF5ZXJyZW1vdmVcIiwgeyBsYXllcjogdCB9KSwgdGhpcy5fdG9wQ2x1c3RlckxldmVsLl9yZWNhbGN1bGF0ZUJvdW5kcygpLCB0aGlzLl9yZWZyZXNoQ2x1c3RlcnNJY29ucygpLCB0Lm9mZih0aGlzLl9jaGlsZE1hcmtlckV2ZW50SGFuZGxlcnMsIHRoaXMpLCB0aGlzLl9mZWF0dXJlR3JvdXAuaGFzTGF5ZXIodCkgJiYgKHRoaXMuX2ZlYXR1cmVHcm91cC5yZW1vdmVMYXllcih0KSwgdC5jbHVzdGVyU2hvdyAmJiB0LmNsdXN0ZXJTaG93KCkpLCB0aGlzKSA6IHRoaXMgOiAoIXRoaXMuX2FycmF5U3BsaWNlKHRoaXMuX25lZWRzQ2x1c3RlcmluZywgdCkgJiYgdGhpcy5oYXNMYXllcih0KSAmJiB0aGlzLl9uZWVkc1JlbW92aW5nLnB1c2goeyBsYXllcjogdCwgbGF0bG5nOiB0Ll9sYXRsbmcgfSksIHRoaXMuZmlyZShcImxheWVycmVtb3ZlXCIsIHsgbGF5ZXI6IHQgfSksIHRoaXMpIDogKHRoaXMuX25vblBvaW50R3JvdXAucmVtb3ZlTGF5ZXIodCksIHRoaXMuZmlyZShcImxheWVycmVtb3ZlXCIsIHsgbGF5ZXI6IHQgfSksIHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICAvL1Rha2VzIGFuIGFycmF5IG9mIG1hcmtlcnMgYW5kIGFkZHMgdGhlbSBpbiBidWxrXG4gICAgICAgIGFkZExheWVyczogZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgIGlmICghTC5VdGlsLmlzQXJyYXkodCkpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRMYXllcih0KTtcbiAgICAgICAgICB2YXIgaSA9IHRoaXMuX2ZlYXR1cmVHcm91cCwgbiA9IHRoaXMuX25vblBvaW50R3JvdXAsIHIgPSB0aGlzLm9wdGlvbnMuY2h1bmtlZExvYWRpbmcsIG8gPSB0aGlzLm9wdGlvbnMuY2h1bmtJbnRlcnZhbCwgcyA9IHRoaXMub3B0aW9ucy5jaHVua1Byb2dyZXNzLCB1ID0gdC5sZW5ndGgsIGEgPSAwLCBfID0gITAsIGY7XG4gICAgICAgICAgaWYgKHRoaXMuX21hcCkge1xuICAgICAgICAgICAgdmFyIGcgPSAoLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCkpLmdldFRpbWUoKSwgYyA9IEwuYmluZChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIHkgPSAoLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgZm9yICh0aGlzLl9tYXAgJiYgdGhpcy5fdW5zcGlkZXJmeSAmJiB0aGlzLl91bnNwaWRlcmZ5KCk7IGEgPCB1OyBhKyspIHtcbiAgICAgICAgICAgICAgICBpZiAociAmJiBhICUgMjAwID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgTSA9ICgvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKSkuZ2V0VGltZSgpIC0geTtcbiAgICAgICAgICAgICAgICAgIGlmIChNID4gbylcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmID0gdFthXSwgZiBpbnN0YW5jZW9mIEwuTGF5ZXJHcm91cCkge1xuICAgICAgICAgICAgICAgICAgXyAmJiAodCA9IHQuc2xpY2UoKSwgXyA9ICExKSwgdGhpcy5fZXh0cmFjdE5vbkdyb3VwTGF5ZXJzKGYsIHQpLCB1ID0gdC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFmLmdldExhdExuZykge1xuICAgICAgICAgICAgICAgICAgbi5hZGRMYXllcihmKSwgZSB8fCB0aGlzLmZpcmUoXCJsYXllcmFkZFwiLCB7IGxheWVyOiBmIH0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5oYXNMYXllcihmKSAmJiAodGhpcy5fYWRkTGF5ZXIoZiwgdGhpcy5fbWF4Wm9vbSksIGUgfHwgdGhpcy5maXJlKFwibGF5ZXJhZGRcIiwgeyBsYXllcjogZiB9KSwgZi5fX3BhcmVudCAmJiBmLl9fcGFyZW50LmdldENoaWxkQ291bnQoKSA9PT0gMikpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBDID0gZi5fX3BhcmVudC5nZXRBbGxDaGlsZE1hcmtlcnMoKSwgSSA9IENbMF0gPT09IGYgPyBDWzFdIDogQ1swXTtcbiAgICAgICAgICAgICAgICAgIGkucmVtb3ZlTGF5ZXIoSSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHMgJiYgcyhhLCB1LCAoLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIGcpLCBhID09PSB1ID8gKHRoaXMuX3RvcENsdXN0ZXJMZXZlbC5fcmVjYWxjdWxhdGVCb3VuZHMoKSwgdGhpcy5fcmVmcmVzaENsdXN0ZXJzSWNvbnMoKSwgdGhpcy5fdG9wQ2x1c3RlckxldmVsLl9yZWN1cnNpdmVseUFkZENoaWxkcmVuVG9NYXAobnVsbCwgdGhpcy5fem9vbSwgdGhpcy5fY3VycmVudFNob3duQm91bmRzKSkgOiBzZXRUaW1lb3V0KGMsIHRoaXMub3B0aW9ucy5jaHVua0RlbGF5KTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgYygpO1xuICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgZm9yICh2YXIgbSA9IHRoaXMuX25lZWRzQ2x1c3RlcmluZzsgYSA8IHU7IGErKykge1xuICAgICAgICAgICAgICBpZiAoZiA9IHRbYV0sIGYgaW5zdGFuY2VvZiBMLkxheWVyR3JvdXApIHtcbiAgICAgICAgICAgICAgICBfICYmICh0ID0gdC5zbGljZSgpLCBfID0gITEpLCB0aGlzLl9leHRyYWN0Tm9uR3JvdXBMYXllcnMoZiwgdCksIHUgPSB0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIWYuZ2V0TGF0TG5nKSB7XG4gICAgICAgICAgICAgICAgbi5hZGRMYXllcihmKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLmhhc0xheWVyKGYpIHx8IG0ucHVzaChmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgLy9UYWtlcyBhbiBhcnJheSBvZiBtYXJrZXJzIGFuZCByZW1vdmVzIHRoZW0gaW4gYnVsa1xuICAgICAgICByZW1vdmVMYXllcnM6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICB2YXIgZSwgaSwgbiA9IHQubGVuZ3RoLCByID0gdGhpcy5fZmVhdHVyZUdyb3VwLCBvID0gdGhpcy5fbm9uUG9pbnRHcm91cCwgcyA9ICEwO1xuICAgICAgICAgIGlmICghdGhpcy5fbWFwKSB7XG4gICAgICAgICAgICBmb3IgKGUgPSAwOyBlIDwgbjsgZSsrKSB7XG4gICAgICAgICAgICAgIGlmIChpID0gdFtlXSwgaSBpbnN0YW5jZW9mIEwuTGF5ZXJHcm91cCkge1xuICAgICAgICAgICAgICAgIHMgJiYgKHQgPSB0LnNsaWNlKCksIHMgPSAhMSksIHRoaXMuX2V4dHJhY3ROb25Hcm91cExheWVycyhpLCB0KSwgbiA9IHQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuX2FycmF5U3BsaWNlKHRoaXMuX25lZWRzQ2x1c3RlcmluZywgaSksIG8ucmVtb3ZlTGF5ZXIoaSksIHRoaXMuaGFzTGF5ZXIoaSkgJiYgdGhpcy5fbmVlZHNSZW1vdmluZy5wdXNoKHsgbGF5ZXI6IGksIGxhdGxuZzogaS5fbGF0bG5nIH0pLCB0aGlzLmZpcmUoXCJsYXllcnJlbW92ZVwiLCB7IGxheWVyOiBpIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLl91bnNwaWRlcmZ5KSB7XG4gICAgICAgICAgICB0aGlzLl91bnNwaWRlcmZ5KCk7XG4gICAgICAgICAgICB2YXIgdSA9IHQuc2xpY2UoKSwgYSA9IG47XG4gICAgICAgICAgICBmb3IgKGUgPSAwOyBlIDwgYTsgZSsrKSB7XG4gICAgICAgICAgICAgIGlmIChpID0gdVtlXSwgaSBpbnN0YW5jZW9mIEwuTGF5ZXJHcm91cCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2V4dHJhY3ROb25Hcm91cExheWVycyhpLCB1KSwgYSA9IHUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuX3Vuc3BpZGVyZnlMYXllcihpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChlID0gMDsgZSA8IG47IGUrKykge1xuICAgICAgICAgICAgaWYgKGkgPSB0W2VdLCBpIGluc3RhbmNlb2YgTC5MYXllckdyb3VwKSB7XG4gICAgICAgICAgICAgIHMgJiYgKHQgPSB0LnNsaWNlKCksIHMgPSAhMSksIHRoaXMuX2V4dHJhY3ROb25Hcm91cExheWVycyhpLCB0KSwgbiA9IHQubGVuZ3RoO1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaS5fX3BhcmVudCkge1xuICAgICAgICAgICAgICBvLnJlbW92ZUxheWVyKGkpLCB0aGlzLmZpcmUoXCJsYXllcnJlbW92ZVwiLCB7IGxheWVyOiBpIH0pO1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZUxheWVyKGksICEwLCAhMCksIHRoaXMuZmlyZShcImxheWVycmVtb3ZlXCIsIHsgbGF5ZXI6IGkgfSksIHIuaGFzTGF5ZXIoaSkgJiYgKHIucmVtb3ZlTGF5ZXIoaSksIGkuY2x1c3RlclNob3cgJiYgaS5jbHVzdGVyU2hvdygpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3RvcENsdXN0ZXJMZXZlbC5fcmVjYWxjdWxhdGVCb3VuZHMoKSwgdGhpcy5fcmVmcmVzaENsdXN0ZXJzSWNvbnMoKSwgdGhpcy5fdG9wQ2x1c3RlckxldmVsLl9yZWN1cnNpdmVseUFkZENoaWxkcmVuVG9NYXAobnVsbCwgdGhpcy5fem9vbSwgdGhpcy5fY3VycmVudFNob3duQm91bmRzKSwgdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgLy9SZW1vdmVzIGFsbCBsYXllcnMgZnJvbSB0aGUgTWFya2VyQ2x1c3Rlckdyb3VwXG4gICAgICAgIGNsZWFyTGF5ZXJzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fbWFwIHx8ICh0aGlzLl9uZWVkc0NsdXN0ZXJpbmcgPSBbXSwgdGhpcy5fbmVlZHNSZW1vdmluZyA9IFtdLCBkZWxldGUgdGhpcy5fZ3JpZENsdXN0ZXJzLCBkZWxldGUgdGhpcy5fZ3JpZFVuY2x1c3RlcmVkKSwgdGhpcy5fbm9hbmltYXRpb25VbnNwaWRlcmZ5ICYmIHRoaXMuX25vYW5pbWF0aW9uVW5zcGlkZXJmeSgpLCB0aGlzLl9mZWF0dXJlR3JvdXAuY2xlYXJMYXllcnMoKSwgdGhpcy5fbm9uUG9pbnRHcm91cC5jbGVhckxheWVycygpLCB0aGlzLmVhY2hMYXllcihmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICB0Lm9mZih0aGlzLl9jaGlsZE1hcmtlckV2ZW50SGFuZGxlcnMsIHRoaXMpLCBkZWxldGUgdC5fX3BhcmVudDtcbiAgICAgICAgICB9LCB0aGlzKSwgdGhpcy5fbWFwICYmIHRoaXMuX2dlbmVyYXRlSW5pdGlhbENsdXN0ZXJzKCksIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIC8vT3ZlcnJpZGUgRmVhdHVyZUdyb3VwLmdldEJvdW5kcyBhcyBpdCBkb2Vzbid0IHdvcmtcbiAgICAgICAgZ2V0Qm91bmRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdCA9IG5ldyBMLkxhdExuZ0JvdW5kcygpO1xuICAgICAgICAgIHRoaXMuX3RvcENsdXN0ZXJMZXZlbCAmJiB0LmV4dGVuZCh0aGlzLl90b3BDbHVzdGVyTGV2ZWwuX2JvdW5kcyk7XG4gICAgICAgICAgZm9yICh2YXIgZSA9IHRoaXMuX25lZWRzQ2x1c3RlcmluZy5sZW5ndGggLSAxOyBlID49IDA7IGUtLSlcbiAgICAgICAgICAgIHQuZXh0ZW5kKHRoaXMuX25lZWRzQ2x1c3RlcmluZ1tlXS5nZXRMYXRMbmcoKSk7XG4gICAgICAgICAgcmV0dXJuIHQuZXh0ZW5kKHRoaXMuX25vblBvaW50R3JvdXAuZ2V0Qm91bmRzKCkpLCB0O1xuICAgICAgICB9LFxuICAgICAgICAvL092ZXJyaWRlcyBMYXllckdyb3VwLmVhY2hMYXllclxuICAgICAgICBlYWNoTGF5ZXI6IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICB2YXIgaSA9IHRoaXMuX25lZWRzQ2x1c3RlcmluZy5zbGljZSgpLCBuID0gdGhpcy5fbmVlZHNSZW1vdmluZywgciwgbywgcztcbiAgICAgICAgICBmb3IgKHRoaXMuX3RvcENsdXN0ZXJMZXZlbCAmJiB0aGlzLl90b3BDbHVzdGVyTGV2ZWwuZ2V0QWxsQ2hpbGRNYXJrZXJzKGkpLCBvID0gaS5sZW5ndGggLSAxOyBvID49IDA7IG8tLSkge1xuICAgICAgICAgICAgZm9yIChyID0gITAsIHMgPSBuLmxlbmd0aCAtIDE7IHMgPj0gMDsgcy0tKVxuICAgICAgICAgICAgICBpZiAobltzXS5sYXllciA9PT0gaVtvXSkge1xuICAgICAgICAgICAgICAgIHIgPSAhMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgciAmJiB0LmNhbGwoZSwgaVtvXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX25vblBvaW50R3JvdXAuZWFjaExheWVyKHQsIGUpO1xuICAgICAgICB9LFxuICAgICAgICAvL092ZXJyaWRlcyBMYXllckdyb3VwLmdldExheWVyc1xuICAgICAgICBnZXRMYXllcnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB0ID0gW107XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaExheWVyKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHQucHVzaChlKTtcbiAgICAgICAgICB9KSwgdDtcbiAgICAgICAgfSxcbiAgICAgICAgLy9PdmVycmlkZXMgTGF5ZXJHcm91cC5nZXRMYXllciwgV0FSTklORzogUmVhbGx5IGJhZCBwZXJmb3JtYW5jZVxuICAgICAgICBnZXRMYXllcjogZnVuY3Rpb24odCkge1xuICAgICAgICAgIHZhciBlID0gbnVsbDtcbiAgICAgICAgICByZXR1cm4gdCA9IHBhcnNlSW50KHQsIDEwKSwgdGhpcy5lYWNoTGF5ZXIoZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgTC5zdGFtcChpKSA9PT0gdCAmJiAoZSA9IGkpO1xuICAgICAgICAgIH0pLCBlO1xuICAgICAgICB9LFxuICAgICAgICAvL1JldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbGF5ZXIgaXMgaW4gdGhpcyBNYXJrZXJDbHVzdGVyR3JvdXBcbiAgICAgICAgaGFzTGF5ZXI6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICBpZiAoIXQpXG4gICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgdmFyIGUsIGkgPSB0aGlzLl9uZWVkc0NsdXN0ZXJpbmc7XG4gICAgICAgICAgZm9yIChlID0gaS5sZW5ndGggLSAxOyBlID49IDA7IGUtLSlcbiAgICAgICAgICAgIGlmIChpW2VdID09PSB0KVxuICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgZm9yIChpID0gdGhpcy5fbmVlZHNSZW1vdmluZywgZSA9IGkubGVuZ3RoIC0gMTsgZSA+PSAwOyBlLS0pXG4gICAgICAgICAgICBpZiAoaVtlXS5sYXllciA9PT0gdClcbiAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgIHJldHVybiAhISh0Ll9fcGFyZW50ICYmIHQuX19wYXJlbnQuX2dyb3VwID09PSB0aGlzKSB8fCB0aGlzLl9ub25Qb2ludEdyb3VwLmhhc0xheWVyKHQpO1xuICAgICAgICB9LFxuICAgICAgICAvL1pvb20gZG93biB0byBzaG93IHRoZSBnaXZlbiBsYXllciAoc3BpZGVyZnlpbmcgaWYgbmVjZXNzYXJ5KSB0aGVuIGNhbGxzIHRoZSBjYWxsYmFja1xuICAgICAgICB6b29tVG9TaG93TGF5ZXI6IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICB2YXIgaSA9IHRoaXMuX21hcDtcbiAgICAgICAgICB0eXBlb2YgZSAhPSBcImZ1bmN0aW9uXCIgJiYgKGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YXIgbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgKGkuaGFzTGF5ZXIodCkgfHwgaS5oYXNMYXllcih0Ll9fcGFyZW50KSkgJiYgIXRoaXMuX2luWm9vbUFuaW1hdGlvbiAmJiAodGhpcy5fbWFwLm9mZihcIm1vdmVlbmRcIiwgbiwgdGhpcyksIHRoaXMub2ZmKFwiYW5pbWF0aW9uZW5kXCIsIG4sIHRoaXMpLCBpLmhhc0xheWVyKHQpID8gZSgpIDogdC5fX3BhcmVudC5faWNvbiAmJiAodGhpcy5vbmNlKFwic3BpZGVyZmllZFwiLCBlLCB0aGlzKSwgdC5fX3BhcmVudC5zcGlkZXJmeSgpKSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICB0Ll9pY29uICYmIHRoaXMuX21hcC5nZXRCb3VuZHMoKS5jb250YWlucyh0LmdldExhdExuZygpKSA/IGUoKSA6IHQuX19wYXJlbnQuX3pvb20gPCBNYXRoLnJvdW5kKHRoaXMuX21hcC5fem9vbSkgPyAodGhpcy5fbWFwLm9uKFwibW92ZWVuZFwiLCBuLCB0aGlzKSwgdGhpcy5fbWFwLnBhblRvKHQuZ2V0TGF0TG5nKCkpKSA6ICh0aGlzLl9tYXAub24oXCJtb3ZlZW5kXCIsIG4sIHRoaXMpLCB0aGlzLm9uKFwiYW5pbWF0aW9uZW5kXCIsIG4sIHRoaXMpLCB0Ll9fcGFyZW50Lnpvb21Ub0JvdW5kcygpKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy9PdmVycmlkZXMgRmVhdHVyZUdyb3VwLm9uQWRkXG4gICAgICAgIG9uQWRkOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgdGhpcy5fbWFwID0gdDtcbiAgICAgICAgICB2YXIgZSwgaSwgbjtcbiAgICAgICAgICBpZiAoIWlzRmluaXRlKHRoaXMuX21hcC5nZXRNYXhab29tKCkpKVxuICAgICAgICAgICAgdGhyb3cgXCJNYXAgaGFzIG5vIG1heFpvb20gc3BlY2lmaWVkXCI7XG4gICAgICAgICAgZm9yICh0aGlzLl9mZWF0dXJlR3JvdXAuYWRkVG8odCksIHRoaXMuX25vblBvaW50R3JvdXAuYWRkVG8odCksIHRoaXMuX2dyaWRDbHVzdGVycyB8fCB0aGlzLl9nZW5lcmF0ZUluaXRpYWxDbHVzdGVycygpLCB0aGlzLl9tYXhMYXQgPSB0Lm9wdGlvbnMuY3JzLnByb2plY3Rpb24uTUFYX0xBVElUVURFLCBlID0gMCwgaSA9IHRoaXMuX25lZWRzUmVtb3ZpbmcubGVuZ3RoOyBlIDwgaTsgZSsrKVxuICAgICAgICAgICAgbiA9IHRoaXMuX25lZWRzUmVtb3ZpbmdbZV0sIG4ubmV3bGF0bG5nID0gbi5sYXllci5fbGF0bG5nLCBuLmxheWVyLl9sYXRsbmcgPSBuLmxhdGxuZztcbiAgICAgICAgICBmb3IgKGUgPSAwLCBpID0gdGhpcy5fbmVlZHNSZW1vdmluZy5sZW5ndGg7IGUgPCBpOyBlKyspXG4gICAgICAgICAgICBuID0gdGhpcy5fbmVlZHNSZW1vdmluZ1tlXSwgdGhpcy5fcmVtb3ZlTGF5ZXIobi5sYXllciwgITApLCBuLmxheWVyLl9sYXRsbmcgPSBuLm5ld2xhdGxuZztcbiAgICAgICAgICB0aGlzLl9uZWVkc1JlbW92aW5nID0gW10sIHRoaXMuX3pvb20gPSBNYXRoLnJvdW5kKHRoaXMuX21hcC5fem9vbSksIHRoaXMuX2N1cnJlbnRTaG93bkJvdW5kcyA9IHRoaXMuX2dldEV4cGFuZGVkVmlzaWJsZUJvdW5kcygpLCB0aGlzLl9tYXAub24oXCJ6b29tZW5kXCIsIHRoaXMuX3pvb21FbmQsIHRoaXMpLCB0aGlzLl9tYXAub24oXCJtb3ZlZW5kXCIsIHRoaXMuX21vdmVFbmQsIHRoaXMpLCB0aGlzLl9zcGlkZXJmaWVyT25BZGQgJiYgdGhpcy5fc3BpZGVyZmllck9uQWRkKCksIHRoaXMuX2JpbmRFdmVudHMoKSwgaSA9IHRoaXMuX25lZWRzQ2x1c3RlcmluZywgdGhpcy5fbmVlZHNDbHVzdGVyaW5nID0gW10sIHRoaXMuYWRkTGF5ZXJzKGksICEwKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy9PdmVycmlkZXMgRmVhdHVyZUdyb3VwLm9uUmVtb3ZlXG4gICAgICAgIG9uUmVtb3ZlOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgdC5vZmYoXCJ6b29tZW5kXCIsIHRoaXMuX3pvb21FbmQsIHRoaXMpLCB0Lm9mZihcIm1vdmVlbmRcIiwgdGhpcy5fbW92ZUVuZCwgdGhpcyksIHRoaXMuX3VuYmluZEV2ZW50cygpLCB0aGlzLl9tYXAuX21hcFBhbmUuY2xhc3NOYW1lID0gdGhpcy5fbWFwLl9tYXBQYW5lLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGxlYWZsZXQtY2x1c3Rlci1hbmltXCIsIFwiXCIpLCB0aGlzLl9zcGlkZXJmaWVyT25SZW1vdmUgJiYgdGhpcy5fc3BpZGVyZmllck9uUmVtb3ZlKCksIGRlbGV0ZSB0aGlzLl9tYXhMYXQsIHRoaXMuX2hpZGVDb3ZlcmFnZSgpLCB0aGlzLl9mZWF0dXJlR3JvdXAucmVtb3ZlKCksIHRoaXMuX25vblBvaW50R3JvdXAucmVtb3ZlKCksIHRoaXMuX2ZlYXR1cmVHcm91cC5jbGVhckxheWVycygpLCB0aGlzLl9tYXAgPSBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBnZXRWaXNpYmxlUGFyZW50OiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgZm9yICh2YXIgZSA9IHQ7IGUgJiYgIWUuX2ljb247IClcbiAgICAgICAgICAgIGUgPSBlLl9fcGFyZW50O1xuICAgICAgICAgIHJldHVybiBlIHx8IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIC8vUmVtb3ZlIHRoZSBnaXZlbiBvYmplY3QgZnJvbSB0aGUgZ2l2ZW4gYXJyYXlcbiAgICAgICAgX2FycmF5U3BsaWNlOiBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IHQubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXG4gICAgICAgICAgICBpZiAodFtpXSA9PT0gZSlcbiAgICAgICAgICAgICAgcmV0dXJuIHQuc3BsaWNlKGksIDEpLCAhMDtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgYSBtYXJrZXIgZnJvbSBhbGwgX2dyaWRVbmNsdXN0ZXJlZCB6b29tIGxldmVscywgc3RhcnRpbmcgYXQgdGhlIHN1cHBsaWVkIHpvb20uXG4gICAgICAgICAqIEBwYXJhbSBtYXJrZXIgdG8gYmUgcmVtb3ZlZCBmcm9tIF9ncmlkVW5jbHVzdGVyZWQuXG4gICAgICAgICAqIEBwYXJhbSB6IGludGVnZXIgYm90dG9tIHN0YXJ0IHpvb20gbGV2ZWwgKGluY2x1ZGVkKVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3JlbW92ZUZyb21HcmlkVW5jbHVzdGVyZWQ6IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5fbWFwLCBuID0gdGhpcy5fZ3JpZFVuY2x1c3RlcmVkLCByID0gTWF0aC5mbG9vcih0aGlzLl9tYXAuZ2V0TWluWm9vbSgpKTsgZSA+PSByICYmIG5bZV0ucmVtb3ZlT2JqZWN0KHQsIGkucHJvamVjdCh0LmdldExhdExuZygpLCBlKSk7IGUtLSlcbiAgICAgICAgICAgIDtcbiAgICAgICAgfSxcbiAgICAgICAgX2NoaWxkTWFya2VyRHJhZ1N0YXJ0OiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgdC50YXJnZXQuX19kcmFnU3RhcnQgPSB0LnRhcmdldC5fbGF0bG5nO1xuICAgICAgICB9LFxuICAgICAgICBfY2hpbGRNYXJrZXJNb3ZlZDogZnVuY3Rpb24odCkge1xuICAgICAgICAgIGlmICghdGhpcy5faWdub3JlTW92ZSAmJiAhdC50YXJnZXQuX19kcmFnU3RhcnQpIHtcbiAgICAgICAgICAgIHZhciBlID0gdC50YXJnZXQuX3BvcHVwICYmIHQudGFyZ2V0Ll9wb3B1cC5pc09wZW4oKTtcbiAgICAgICAgICAgIHRoaXMuX21vdmVDaGlsZCh0LnRhcmdldCwgdC5vbGRMYXRMbmcsIHQubGF0bG5nKSwgZSAmJiB0LnRhcmdldC5vcGVuUG9wdXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIF9tb3ZlQ2hpbGQ6IGZ1bmN0aW9uKHQsIGUsIGkpIHtcbiAgICAgICAgICB0Ll9sYXRsbmcgPSBlLCB0aGlzLnJlbW92ZUxheWVyKHQpLCB0Ll9sYXRsbmcgPSBpLCB0aGlzLmFkZExheWVyKHQpO1xuICAgICAgICB9LFxuICAgICAgICBfY2hpbGRNYXJrZXJEcmFnRW5kOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgdmFyIGUgPSB0LnRhcmdldC5fX2RyYWdTdGFydDtcbiAgICAgICAgICBkZWxldGUgdC50YXJnZXQuX19kcmFnU3RhcnQsIGUgJiYgdGhpcy5fbW92ZUNoaWxkKHQudGFyZ2V0LCBlLCB0LnRhcmdldC5fbGF0bG5nKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy9JbnRlcm5hbCBmdW5jdGlvbiBmb3IgcmVtb3ZpbmcgYSBtYXJrZXIgZnJvbSBldmVyeXRoaW5nLlxuICAgICAgICAvL2RvbnRVcGRhdGVNYXA6IHNldCB0byB0cnVlIGlmIHlvdSB3aWxsIGhhbmRsZSB1cGRhdGluZyB0aGUgbWFwIG1hbnVhbGx5IChmb3IgYnVsayBmdW5jdGlvbnMpXG4gICAgICAgIF9yZW1vdmVMYXllcjogZnVuY3Rpb24odCwgZSwgaSkge1xuICAgICAgICAgIHZhciBuID0gdGhpcy5fZ3JpZENsdXN0ZXJzLCByID0gdGhpcy5fZ3JpZFVuY2x1c3RlcmVkLCBvID0gdGhpcy5fZmVhdHVyZUdyb3VwLCBzID0gdGhpcy5fbWFwLCB1ID0gTWF0aC5mbG9vcih0aGlzLl9tYXAuZ2V0TWluWm9vbSgpKTtcbiAgICAgICAgICBlICYmIHRoaXMuX3JlbW92ZUZyb21HcmlkVW5jbHVzdGVyZWQodCwgdGhpcy5fbWF4Wm9vbSk7XG4gICAgICAgICAgdmFyIGEgPSB0Ll9fcGFyZW50LCBfID0gYS5fbWFya2VycywgZjtcbiAgICAgICAgICBmb3IgKHRoaXMuX2FycmF5U3BsaWNlKF8sIHQpOyBhICYmIChhLl9jaGlsZENvdW50LS0sIGEuX2JvdW5kc05lZWRVcGRhdGUgPSAhMCwgIShhLl96b29tIDwgdSkpOyApXG4gICAgICAgICAgICBlICYmIGEuX2NoaWxkQ291bnQgPD0gMSA/IChmID0gYS5fbWFya2Vyc1swXSA9PT0gdCA/IGEuX21hcmtlcnNbMV0gOiBhLl9tYXJrZXJzWzBdLCBuW2EuX3pvb21dLnJlbW92ZU9iamVjdChhLCBzLnByb2plY3QoYS5fY0xhdExuZywgYS5fem9vbSkpLCByW2EuX3pvb21dLmFkZE9iamVjdChmLCBzLnByb2plY3QoZi5nZXRMYXRMbmcoKSwgYS5fem9vbSkpLCB0aGlzLl9hcnJheVNwbGljZShhLl9fcGFyZW50Ll9jaGlsZENsdXN0ZXJzLCBhKSwgYS5fX3BhcmVudC5fbWFya2Vycy5wdXNoKGYpLCBmLl9fcGFyZW50ID0gYS5fX3BhcmVudCwgYS5faWNvbiAmJiAoby5yZW1vdmVMYXllcihhKSwgaSB8fCBvLmFkZExheWVyKGYpKSkgOiBhLl9pY29uTmVlZHNVcGRhdGUgPSAhMCwgYSA9IGEuX19wYXJlbnQ7XG4gICAgICAgICAgZGVsZXRlIHQuX19wYXJlbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIF9pc09ySXNQYXJlbnQ6IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICBmb3IgKDsgZTsgKSB7XG4gICAgICAgICAgICBpZiAodCA9PT0gZSlcbiAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgZSA9IGUucGFyZW50Tm9kZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9LFxuICAgICAgICAvL092ZXJyaWRlIEwuRXZlbnRlZC5maXJlXG4gICAgICAgIGZpcmU6IGZ1bmN0aW9uKHQsIGUsIGkpIHtcbiAgICAgICAgICBpZiAoZSAmJiBlLmxheWVyIGluc3RhbmNlb2YgTC5NYXJrZXJDbHVzdGVyKSB7XG4gICAgICAgICAgICBpZiAoZS5vcmlnaW5hbEV2ZW50ICYmIHRoaXMuX2lzT3JJc1BhcmVudChlLmxheWVyLl9pY29uLCBlLm9yaWdpbmFsRXZlbnQucmVsYXRlZFRhcmdldCkpXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHQgPSBcImNsdXN0ZXJcIiArIHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIEwuRmVhdHVyZUdyb3VwLnByb3RvdHlwZS5maXJlLmNhbGwodGhpcywgdCwgZSwgaSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vT3ZlcnJpZGUgTC5FdmVudGVkLmxpc3RlbnNcbiAgICAgICAgbGlzdGVuczogZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgIHJldHVybiBMLkZlYXR1cmVHcm91cC5wcm90b3R5cGUubGlzdGVucy5jYWxsKHRoaXMsIHQsIGUpIHx8IEwuRmVhdHVyZUdyb3VwLnByb3RvdHlwZS5saXN0ZW5zLmNhbGwodGhpcywgXCJjbHVzdGVyXCIgKyB0LCBlKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy9EZWZhdWx0IGZ1bmN0aW9uYWxpdHlcbiAgICAgICAgX2RlZmF1bHRJY29uQ3JlYXRlRnVuY3Rpb246IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICB2YXIgZSA9IHQuZ2V0Q2hpbGRDb3VudCgpLCBpID0gXCIgbWFya2VyLWNsdXN0ZXItXCI7XG4gICAgICAgICAgcmV0dXJuIGUgPCAxMCA/IGkgKz0gXCJzbWFsbFwiIDogZSA8IDEwMCA/IGkgKz0gXCJtZWRpdW1cIiA6IGkgKz0gXCJsYXJnZVwiLCBuZXcgTC5EaXZJY29uKHsgaHRtbDogXCI8ZGl2PjxzcGFuPlwiICsgZSArIFwiPC9zcGFuPjwvZGl2PlwiLCBjbGFzc05hbWU6IFwibWFya2VyLWNsdXN0ZXJcIiArIGksIGljb25TaXplOiBuZXcgTC5Qb2ludCg0MCwgNDApIH0pO1xuICAgICAgICB9LFxuICAgICAgICBfYmluZEV2ZW50czogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHQgPSB0aGlzLl9tYXAsIGUgPSB0aGlzLm9wdGlvbnMuc3BpZGVyZnlPbk1heFpvb20sIGkgPSB0aGlzLm9wdGlvbnMuc2hvd0NvdmVyYWdlT25Ib3ZlciwgbiA9IHRoaXMub3B0aW9ucy56b29tVG9Cb3VuZHNPbkNsaWNrLCByID0gdGhpcy5vcHRpb25zLnNwaWRlcmZ5T25FdmVyeVpvb207XG4gICAgICAgICAgKGUgfHwgbiB8fCByKSAmJiB0aGlzLm9uKFwiY2x1c3RlcmNsaWNrIGNsdXN0ZXJrZXlwcmVzc1wiLCB0aGlzLl96b29tT3JTcGlkZXJmeSwgdGhpcyksIGkgJiYgKHRoaXMub24oXCJjbHVzdGVybW91c2VvdmVyXCIsIHRoaXMuX3Nob3dDb3ZlcmFnZSwgdGhpcyksIHRoaXMub24oXCJjbHVzdGVybW91c2VvdXRcIiwgdGhpcy5faGlkZUNvdmVyYWdlLCB0aGlzKSwgdC5vbihcInpvb21lbmRcIiwgdGhpcy5faGlkZUNvdmVyYWdlLCB0aGlzKSk7XG4gICAgICAgIH0sXG4gICAgICAgIF96b29tT3JTcGlkZXJmeTogZnVuY3Rpb24odCkge1xuICAgICAgICAgIHZhciBlID0gdC5sYXllciwgaSA9IGU7XG4gICAgICAgICAgaWYgKCEodC50eXBlID09PSBcImNsdXN0ZXJrZXlwcmVzc1wiICYmIHQub3JpZ2luYWxFdmVudCAmJiB0Lm9yaWdpbmFsRXZlbnQua2V5Q29kZSAhPT0gMTMpKSB7XG4gICAgICAgICAgICBmb3IgKDsgaS5fY2hpbGRDbHVzdGVycy5sZW5ndGggPT09IDE7IClcbiAgICAgICAgICAgICAgaSA9IGkuX2NoaWxkQ2x1c3RlcnNbMF07XG4gICAgICAgICAgICBpLl96b29tID09PSB0aGlzLl9tYXhab29tICYmIGkuX2NoaWxkQ291bnQgPT09IGUuX2NoaWxkQ291bnQgJiYgdGhpcy5vcHRpb25zLnNwaWRlcmZ5T25NYXhab29tID8gZS5zcGlkZXJmeSgpIDogdGhpcy5vcHRpb25zLnpvb21Ub0JvdW5kc09uQ2xpY2sgJiYgZS56b29tVG9Cb3VuZHMoKSwgdGhpcy5vcHRpb25zLnNwaWRlcmZ5T25FdmVyeVpvb20gJiYgZS5zcGlkZXJmeSgpLCB0Lm9yaWdpbmFsRXZlbnQgJiYgdC5vcmlnaW5hbEV2ZW50LmtleUNvZGUgPT09IDEzICYmIHRoaXMuX21hcC5fY29udGFpbmVyLmZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBfc2hvd0NvdmVyYWdlOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgdmFyIGUgPSB0aGlzLl9tYXA7XG4gICAgICAgICAgdGhpcy5faW5ab29tQW5pbWF0aW9uIHx8ICh0aGlzLl9zaG93blBvbHlnb24gJiYgZS5yZW1vdmVMYXllcih0aGlzLl9zaG93blBvbHlnb24pLCB0LmxheWVyLmdldENoaWxkQ291bnQoKSA+IDIgJiYgdC5sYXllciAhPT0gdGhpcy5fc3BpZGVyZmllZCAmJiAodGhpcy5fc2hvd25Qb2x5Z29uID0gbmV3IEwuUG9seWdvbih0LmxheWVyLmdldENvbnZleEh1bGwoKSwgdGhpcy5vcHRpb25zLnBvbHlnb25PcHRpb25zKSwgZS5hZGRMYXllcih0aGlzLl9zaG93blBvbHlnb24pKSk7XG4gICAgICAgIH0sXG4gICAgICAgIF9oaWRlQ292ZXJhZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMuX3Nob3duUG9seWdvbiAmJiAodGhpcy5fbWFwLnJlbW92ZUxheWVyKHRoaXMuX3Nob3duUG9seWdvbiksIHRoaXMuX3Nob3duUG9seWdvbiA9IG51bGwpO1xuICAgICAgICB9LFxuICAgICAgICBfdW5iaW5kRXZlbnRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdCA9IHRoaXMub3B0aW9ucy5zcGlkZXJmeU9uTWF4Wm9vbSwgZSA9IHRoaXMub3B0aW9ucy5zaG93Q292ZXJhZ2VPbkhvdmVyLCBpID0gdGhpcy5vcHRpb25zLnpvb21Ub0JvdW5kc09uQ2xpY2ssIG4gPSB0aGlzLm9wdGlvbnMuc3BpZGVyZnlPbkV2ZXJ5Wm9vbSwgciA9IHRoaXMuX21hcDtcbiAgICAgICAgICAodCB8fCBpIHx8IG4pICYmIHRoaXMub2ZmKFwiY2x1c3RlcmNsaWNrIGNsdXN0ZXJrZXlwcmVzc1wiLCB0aGlzLl96b29tT3JTcGlkZXJmeSwgdGhpcyksIGUgJiYgKHRoaXMub2ZmKFwiY2x1c3Rlcm1vdXNlb3ZlclwiLCB0aGlzLl9zaG93Q292ZXJhZ2UsIHRoaXMpLCB0aGlzLm9mZihcImNsdXN0ZXJtb3VzZW91dFwiLCB0aGlzLl9oaWRlQ292ZXJhZ2UsIHRoaXMpLCByLm9mZihcInpvb21lbmRcIiwgdGhpcy5faGlkZUNvdmVyYWdlLCB0aGlzKSk7XG4gICAgICAgIH0sXG4gICAgICAgIF96b29tRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGlzLl9tYXAgJiYgKHRoaXMuX21lcmdlU3BsaXRDbHVzdGVycygpLCB0aGlzLl96b29tID0gTWF0aC5yb3VuZCh0aGlzLl9tYXAuX3pvb20pLCB0aGlzLl9jdXJyZW50U2hvd25Cb3VuZHMgPSB0aGlzLl9nZXRFeHBhbmRlZFZpc2libGVCb3VuZHMoKSk7XG4gICAgICAgIH0sXG4gICAgICAgIF9tb3ZlRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2luWm9vbUFuaW1hdGlvbikge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzLl9nZXRFeHBhbmRlZFZpc2libGVCb3VuZHMoKTtcbiAgICAgICAgICAgIHRoaXMuX3RvcENsdXN0ZXJMZXZlbC5fcmVjdXJzaXZlbHlSZW1vdmVDaGlsZHJlbkZyb21NYXAodGhpcy5fY3VycmVudFNob3duQm91bmRzLCBNYXRoLmZsb29yKHRoaXMuX21hcC5nZXRNaW5ab29tKCkpLCB0aGlzLl96b29tLCB0KSwgdGhpcy5fdG9wQ2x1c3RlckxldmVsLl9yZWN1cnNpdmVseUFkZENoaWxkcmVuVG9NYXAobnVsbCwgTWF0aC5yb3VuZCh0aGlzLl9tYXAuX3pvb20pLCB0KSwgdGhpcy5fY3VycmVudFNob3duQm91bmRzID0gdDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIF9nZW5lcmF0ZUluaXRpYWxDbHVzdGVyczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHQgPSBNYXRoLmNlaWwodGhpcy5fbWFwLmdldE1heFpvb20oKSksIGUgPSBNYXRoLmZsb29yKHRoaXMuX21hcC5nZXRNaW5ab29tKCkpLCBpID0gdGhpcy5vcHRpb25zLm1heENsdXN0ZXJSYWRpdXMsIG4gPSBpO1xuICAgICAgICAgIHR5cGVvZiBpICE9IFwiZnVuY3Rpb25cIiAmJiAobiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgfSksIHRoaXMub3B0aW9ucy5kaXNhYmxlQ2x1c3RlcmluZ0F0Wm9vbSAhPT0gbnVsbCAmJiAodCA9IHRoaXMub3B0aW9ucy5kaXNhYmxlQ2x1c3RlcmluZ0F0Wm9vbSAtIDEpLCB0aGlzLl9tYXhab29tID0gdCwgdGhpcy5fZ3JpZENsdXN0ZXJzID0ge30sIHRoaXMuX2dyaWRVbmNsdXN0ZXJlZCA9IHt9O1xuICAgICAgICAgIGZvciAodmFyIHIgPSB0OyByID49IGU7IHItLSlcbiAgICAgICAgICAgIHRoaXMuX2dyaWRDbHVzdGVyc1tyXSA9IG5ldyBMLkRpc3RhbmNlR3JpZChuKHIpKSwgdGhpcy5fZ3JpZFVuY2x1c3RlcmVkW3JdID0gbmV3IEwuRGlzdGFuY2VHcmlkKG4ocikpO1xuICAgICAgICAgIHRoaXMuX3RvcENsdXN0ZXJMZXZlbCA9IG5ldyB0aGlzLl9tYXJrZXJDbHVzdGVyKHRoaXMsIGUgLSAxKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy9ab29tOiBab29tIHRvIHN0YXJ0IGFkZGluZyBhdCAoUGFzcyB0aGlzLl9tYXhab29tIHRvIHN0YXJ0IGF0IHRoZSBib3R0b20pXG4gICAgICAgIF9hZGRMYXllcjogZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgIHZhciBpID0gdGhpcy5fZ3JpZENsdXN0ZXJzLCBuID0gdGhpcy5fZ3JpZFVuY2x1c3RlcmVkLCByID0gTWF0aC5mbG9vcih0aGlzLl9tYXAuZ2V0TWluWm9vbSgpKSwgbywgcztcbiAgICAgICAgICBmb3IgKHRoaXMub3B0aW9ucy5zaW5nbGVNYXJrZXJNb2RlICYmIHRoaXMuX292ZXJyaWRlTWFya2VySWNvbih0KSwgdC5vbih0aGlzLl9jaGlsZE1hcmtlckV2ZW50SGFuZGxlcnMsIHRoaXMpOyBlID49IHI7IGUtLSkge1xuICAgICAgICAgICAgbyA9IHRoaXMuX21hcC5wcm9qZWN0KHQuZ2V0TGF0TG5nKCksIGUpO1xuICAgICAgICAgICAgdmFyIHUgPSBpW2VdLmdldE5lYXJPYmplY3Qobyk7XG4gICAgICAgICAgICBpZiAodSkge1xuICAgICAgICAgICAgICB1Ll9hZGRDaGlsZCh0KSwgdC5fX3BhcmVudCA9IHU7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1ID0gbltlXS5nZXROZWFyT2JqZWN0KG8pLCB1KSB7XG4gICAgICAgICAgICAgIHZhciBhID0gdS5fX3BhcmVudDtcbiAgICAgICAgICAgICAgYSAmJiB0aGlzLl9yZW1vdmVMYXllcih1LCAhMSk7XG4gICAgICAgICAgICAgIHZhciBfID0gbmV3IHRoaXMuX21hcmtlckNsdXN0ZXIodGhpcywgZSwgdSwgdCk7XG4gICAgICAgICAgICAgIGlbZV0uYWRkT2JqZWN0KF8sIHRoaXMuX21hcC5wcm9qZWN0KF8uX2NMYXRMbmcsIGUpKSwgdS5fX3BhcmVudCA9IF8sIHQuX19wYXJlbnQgPSBfO1xuICAgICAgICAgICAgICB2YXIgZiA9IF87XG4gICAgICAgICAgICAgIGZvciAocyA9IGUgLSAxOyBzID4gYS5fem9vbTsgcy0tKVxuICAgICAgICAgICAgICAgIGYgPSBuZXcgdGhpcy5fbWFya2VyQ2x1c3Rlcih0aGlzLCBzLCBmKSwgaVtzXS5hZGRPYmplY3QoZiwgdGhpcy5fbWFwLnByb2plY3QodS5nZXRMYXRMbmcoKSwgcykpO1xuICAgICAgICAgICAgICBhLl9hZGRDaGlsZChmKSwgdGhpcy5fcmVtb3ZlRnJvbUdyaWRVbmNsdXN0ZXJlZCh1LCBlKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbltlXS5hZGRPYmplY3QodCwgbyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX3RvcENsdXN0ZXJMZXZlbC5fYWRkQ2hpbGQodCksIHQuX19wYXJlbnQgPSB0aGlzLl90b3BDbHVzdGVyTGV2ZWw7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWZyZXNoZXMgdGhlIGljb24gb2YgYWxsIFwiZGlydHlcIiB2aXNpYmxlIGNsdXN0ZXJzLlxuICAgICAgICAgKiBOb24tdmlzaWJsZSBcImRpcnR5XCIgY2x1c3RlcnMgd2lsbCBiZSB1cGRhdGVkIHdoZW4gdGhleSBhcmUgYWRkZWQgdG8gdGhlIG1hcC5cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9yZWZyZXNoQ2x1c3RlcnNJY29uczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5fZmVhdHVyZUdyb3VwLmVhY2hMYXllcihmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICB0IGluc3RhbmNlb2YgTC5NYXJrZXJDbHVzdGVyICYmIHQuX2ljb25OZWVkc1VwZGF0ZSAmJiB0Ll91cGRhdGVJY29uKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vRW5xdWV1ZSBjb2RlIHRvIGZpcmUgYWZ0ZXIgdGhlIG1hcmtlciBleHBhbmQvY29udHJhY3QgaGFzIGhhcHBlbmVkXG4gICAgICAgIF9lbnF1ZXVlOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgdGhpcy5fcXVldWUucHVzaCh0KSwgdGhpcy5fcXVldWVUaW1lb3V0IHx8ICh0aGlzLl9xdWV1ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KEwuYmluZCh0aGlzLl9wcm9jZXNzUXVldWUsIHRoaXMpLCAzMDApKTtcbiAgICAgICAgfSxcbiAgICAgICAgX3Byb2Nlc3NRdWV1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCB0aGlzLl9xdWV1ZS5sZW5ndGg7IHQrKylcbiAgICAgICAgICAgIHRoaXMuX3F1ZXVlW3RdLmNhbGwodGhpcyk7XG4gICAgICAgICAgdGhpcy5fcXVldWUubGVuZ3RoID0gMCwgY2xlYXJUaW1lb3V0KHRoaXMuX3F1ZXVlVGltZW91dCksIHRoaXMuX3F1ZXVlVGltZW91dCA9IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIC8vTWVyZ2UgYW5kIHNwbGl0IGFueSBleGlzdGluZyBjbHVzdGVycyB0aGF0IGFyZSB0b28gYmlnIG9yIHNtYWxsXG4gICAgICAgIF9tZXJnZVNwbGl0Q2x1c3RlcnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB0ID0gTWF0aC5yb3VuZCh0aGlzLl9tYXAuX3pvb20pO1xuICAgICAgICAgIHRoaXMuX3Byb2Nlc3NRdWV1ZSgpLCB0aGlzLl96b29tIDwgdCAmJiB0aGlzLl9jdXJyZW50U2hvd25Cb3VuZHMuaW50ZXJzZWN0cyh0aGlzLl9nZXRFeHBhbmRlZFZpc2libGVCb3VuZHMoKSkgPyAodGhpcy5fYW5pbWF0aW9uU3RhcnQoKSwgdGhpcy5fdG9wQ2x1c3RlckxldmVsLl9yZWN1cnNpdmVseVJlbW92ZUNoaWxkcmVuRnJvbU1hcCh0aGlzLl9jdXJyZW50U2hvd25Cb3VuZHMsIE1hdGguZmxvb3IodGhpcy5fbWFwLmdldE1pblpvb20oKSksIHRoaXMuX3pvb20sIHRoaXMuX2dldEV4cGFuZGVkVmlzaWJsZUJvdW5kcygpKSwgdGhpcy5fYW5pbWF0aW9uWm9vbUluKHRoaXMuX3pvb20sIHQpKSA6IHRoaXMuX3pvb20gPiB0ID8gKHRoaXMuX2FuaW1hdGlvblN0YXJ0KCksIHRoaXMuX2FuaW1hdGlvblpvb21PdXQodGhpcy5fem9vbSwgdCkpIDogdGhpcy5fbW92ZUVuZCgpO1xuICAgICAgICB9LFxuICAgICAgICAvL0dldHMgdGhlIG1hcHMgdmlzaWJsZSBib3VuZHMgZXhwYW5kZWQgaW4gZWFjaCBkaXJlY3Rpb24gYnkgdGhlIHNpemUgb2YgdGhlIHNjcmVlbiAoc28gdGhlIHVzZXIgY2Fubm90IHNlZSBhbiBhcmVhIHdlIGRvIG5vdCBjb3ZlciBpbiBvbmUgcGFuKVxuICAgICAgICBfZ2V0RXhwYW5kZWRWaXNpYmxlQm91bmRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92ZU91dHNpZGVWaXNpYmxlQm91bmRzKSB7XG4gICAgICAgICAgICBpZiAoTC5Ccm93c2VyLm1vYmlsZSlcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrQm91bmRzTWF4TGF0KHRoaXMuX21hcC5nZXRCb3VuZHMoKSk7XG4gICAgICAgICAgfSBlbHNlIHJldHVybiB0aGlzLl9tYXBCb3VuZHNJbmZpbml0ZTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tCb3VuZHNNYXhMYXQodGhpcy5fbWFwLmdldEJvdW5kcygpLnBhZCgxKSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeHBhbmRzIHRoZSBsYXRpdHVkZSB0byBJbmZpbml0eSAob3IgLUluZmluaXR5KSBpZiB0aGUgaW5wdXQgYm91bmRzIHJlYWNoIHRoZSBtYXAgcHJvamVjdGlvbiBtYXhpbXVtIGRlZmluZWQgbGF0aXR1ZGVcbiAgICAgICAgICogKGluIHRoZSBjYXNlIG9mIFdlYi9TcGhlcmljYWwgTWVyY2F0b3IsIGl0IGlzIDg1LjA1MTEyODc3OTggLyBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2ViX01lcmNhdG9yI0Zvcm11bGFzKS5cbiAgICAgICAgICogT3RoZXJ3aXNlLCB0aGUgcmVtb3ZlT3V0c2lkZVZpc2libGVCb3VuZHMgb3B0aW9uIHdpbGwgcmVtb3ZlIG1hcmtlcnMgYmV5b25kIHRoYXQgbGltaXQsIHdoZXJlYXMgdGhlIHNhbWUgbWFya2VycyB3aXRob3V0XG4gICAgICAgICAqIHRoaXMgb3B0aW9uIChvciBvdXRzaWRlIE1DRykgd2lsbCBoYXZlIHRoZWlyIHBvc2l0aW9uIGZsb29yZWQgKGNlaWxlZCkgYnkgdGhlIHByb2plY3Rpb24gYW5kIHJlbmRlcmVkIGF0IHRoYXQgbGltaXQsXG4gICAgICAgICAqIG1ha2luZyB0aGUgdXNlciB0aGluayB0aGF0IE1DRyBcImVhdHNcIiB0aGVtIGFuZCBuZXZlciBkaXNwbGF5cyB0aGVtIGFnYWluLlxuICAgICAgICAgKiBAcGFyYW0gYm91bmRzIEwuTGF0TG5nQm91bmRzXG4gICAgICAgICAqIEByZXR1cm5zIHtMLkxhdExuZ0JvdW5kc31cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9jaGVja0JvdW5kc01heExhdDogZnVuY3Rpb24odCkge1xuICAgICAgICAgIHZhciBlID0gdGhpcy5fbWF4TGF0O1xuICAgICAgICAgIHJldHVybiBlICE9PSB2b2lkIDAgJiYgKHQuZ2V0Tm9ydGgoKSA+PSBlICYmICh0Ll9ub3J0aEVhc3QubGF0ID0gMSAvIDApLCB0LmdldFNvdXRoKCkgPD0gLWUgJiYgKHQuX3NvdXRoV2VzdC5sYXQgPSAtMSAvIDApKSwgdDtcbiAgICAgICAgfSxcbiAgICAgICAgLy9TaGFyZWQgYW5pbWF0aW9uIGNvZGVcbiAgICAgICAgX2FuaW1hdGlvbkFkZExheWVyTm9uQW5pbWF0ZWQ6IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICBpZiAoZSA9PT0gdClcbiAgICAgICAgICAgIHRoaXMuX2ZlYXR1cmVHcm91cC5hZGRMYXllcih0KTtcbiAgICAgICAgICBlbHNlIGlmIChlLl9jaGlsZENvdW50ID09PSAyKSB7XG4gICAgICAgICAgICBlLl9hZGRUb01hcCgpO1xuICAgICAgICAgICAgdmFyIGkgPSBlLmdldEFsbENoaWxkTWFya2VycygpO1xuICAgICAgICAgICAgdGhpcy5fZmVhdHVyZUdyb3VwLnJlbW92ZUxheWVyKGlbMF0pLCB0aGlzLl9mZWF0dXJlR3JvdXAucmVtb3ZlTGF5ZXIoaVsxXSk7XG4gICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBlLl91cGRhdGVJY29uKCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeHRyYWN0cyBpbmRpdmlkdWFsIChpLmUuIG5vbi1ncm91cCkgbGF5ZXJzIGZyb20gYSBMYXllciBHcm91cC5cbiAgICAgICAgICogQHBhcmFtIGdyb3VwIHRvIGV4dHJhY3QgbGF5ZXJzIGZyb20uXG4gICAgICAgICAqIEBwYXJhbSBvdXRwdXQge0FycmF5fSBpbiB3aGljaCB0byBzdG9yZSB0aGUgZXh0cmFjdGVkIGxheWVycy5cbiAgICAgICAgICogQHJldHVybnMgeyp8QXJyYXl9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfZXh0cmFjdE5vbkdyb3VwTGF5ZXJzOiBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgdmFyIGkgPSB0LmdldExheWVycygpLCBuID0gMCwgcjtcbiAgICAgICAgICBmb3IgKGUgPSBlIHx8IFtdOyBuIDwgaS5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgaWYgKHIgPSBpW25dLCByIGluc3RhbmNlb2YgTC5MYXllckdyb3VwKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2V4dHJhY3ROb25Hcm91cExheWVycyhyLCBlKTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnB1c2gocik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogSW1wbGVtZW50cyB0aGUgc2luZ2xlTWFya2VyTW9kZSBvcHRpb24uXG4gICAgICAgICAqIEBwYXJhbSBsYXllciBNYXJrZXIgdG8gcmUtc3R5bGUgdXNpbmcgdGhlIENsdXN0ZXJzIGljb25DcmVhdGVGdW5jdGlvbi5cbiAgICAgICAgICogQHJldHVybnMge0wuSWNvbn0gVGhlIG5ld2x5IGNyZWF0ZWQgaWNvbi5cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9vdmVycmlkZU1hcmtlckljb246IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICB2YXIgZSA9IHQub3B0aW9ucy5pY29uID0gdGhpcy5vcHRpb25zLmljb25DcmVhdGVGdW5jdGlvbih7XG4gICAgICAgICAgICBnZXRDaGlsZENvdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0QWxsQ2hpbGRNYXJrZXJzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFt0XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBMLk1hcmtlckNsdXN0ZXJHcm91cC5pbmNsdWRlKHtcbiAgICAgICAgX21hcEJvdW5kc0luZmluaXRlOiBuZXcgTC5MYXRMbmdCb3VuZHMobmV3IEwuTGF0TG5nKC0xIC8gMCwgLTEgLyAwKSwgbmV3IEwuTGF0TG5nKDEgLyAwLCAxIC8gMCkpXG4gICAgICB9KSwgTC5NYXJrZXJDbHVzdGVyR3JvdXAuaW5jbHVkZSh7XG4gICAgICAgIF9ub0FuaW1hdGlvbjoge1xuICAgICAgICAgIC8vTm9uIEFuaW1hdGVkIHZlcnNpb25zIG9mIGV2ZXJ5dGhpbmdcbiAgICAgICAgICBfYW5pbWF0aW9uU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIH0sXG4gICAgICAgICAgX2FuaW1hdGlvblpvb21JbjogZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgICAgdGhpcy5fdG9wQ2x1c3RlckxldmVsLl9yZWN1cnNpdmVseVJlbW92ZUNoaWxkcmVuRnJvbU1hcCh0aGlzLl9jdXJyZW50U2hvd25Cb3VuZHMsIE1hdGguZmxvb3IodGhpcy5fbWFwLmdldE1pblpvb20oKSksIHQpLCB0aGlzLl90b3BDbHVzdGVyTGV2ZWwuX3JlY3Vyc2l2ZWx5QWRkQ2hpbGRyZW5Ub01hcChudWxsLCBlLCB0aGlzLl9nZXRFeHBhbmRlZFZpc2libGVCb3VuZHMoKSksIHRoaXMuZmlyZShcImFuaW1hdGlvbmVuZFwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9hbmltYXRpb25ab29tT3V0OiBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgICB0aGlzLl90b3BDbHVzdGVyTGV2ZWwuX3JlY3Vyc2l2ZWx5UmVtb3ZlQ2hpbGRyZW5Gcm9tTWFwKHRoaXMuX2N1cnJlbnRTaG93bkJvdW5kcywgTWF0aC5mbG9vcih0aGlzLl9tYXAuZ2V0TWluWm9vbSgpKSwgdCksIHRoaXMuX3RvcENsdXN0ZXJMZXZlbC5fcmVjdXJzaXZlbHlBZGRDaGlsZHJlblRvTWFwKG51bGwsIGUsIHRoaXMuX2dldEV4cGFuZGVkVmlzaWJsZUJvdW5kcygpKSwgdGhpcy5maXJlKFwiYW5pbWF0aW9uZW5kXCIpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgX2FuaW1hdGlvbkFkZExheWVyOiBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgICB0aGlzLl9hbmltYXRpb25BZGRMYXllck5vbkFuaW1hdGVkKHQsIGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgX3dpdGhBbmltYXRpb246IHtcbiAgICAgICAgICAvL0FuaW1hdGVkIHZlcnNpb25zIGhlcmVcbiAgICAgICAgICBfYW5pbWF0aW9uU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5fbWFwLl9tYXBQYW5lLmNsYXNzTmFtZSArPSBcIiBsZWFmbGV0LWNsdXN0ZXItYW5pbVwiLCB0aGlzLl9pblpvb21BbmltYXRpb24rKztcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9hbmltYXRpb25ab29tSW46IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5fZ2V0RXhwYW5kZWRWaXNpYmxlQm91bmRzKCksIG4gPSB0aGlzLl9mZWF0dXJlR3JvdXAsIHIgPSBNYXRoLmZsb29yKHRoaXMuX21hcC5nZXRNaW5ab29tKCkpLCBvO1xuICAgICAgICAgICAgdGhpcy5faWdub3JlTW92ZSA9ICEwLCB0aGlzLl90b3BDbHVzdGVyTGV2ZWwuX3JlY3Vyc2l2ZWx5KGksIHQsIHIsIGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgICAgdmFyIHUgPSBzLl9sYXRsbmcsIGEgPSBzLl9tYXJrZXJzLCBfO1xuICAgICAgICAgICAgICBmb3IgKGkuY29udGFpbnModSkgfHwgKHUgPSBudWxsKSwgcy5faXNTaW5nbGVQYXJlbnQoKSAmJiB0ICsgMSA9PT0gZSA/IChuLnJlbW92ZUxheWVyKHMpLCBzLl9yZWN1cnNpdmVseUFkZENoaWxkcmVuVG9NYXAobnVsbCwgZSwgaSkpIDogKHMuY2x1c3RlckhpZGUoKSwgcy5fcmVjdXJzaXZlbHlBZGRDaGlsZHJlblRvTWFwKHUsIGUsIGkpKSwgbyA9IGEubGVuZ3RoIC0gMTsgbyA+PSAwOyBvLS0pXG4gICAgICAgICAgICAgICAgXyA9IGFbb10sIGkuY29udGFpbnMoXy5fbGF0bG5nKSB8fCBuLnJlbW92ZUxheWVyKF8pO1xuICAgICAgICAgICAgfSksIHRoaXMuX2ZvcmNlTGF5b3V0KCksIHRoaXMuX3RvcENsdXN0ZXJMZXZlbC5fcmVjdXJzaXZlbHlCZWNvbWVWaXNpYmxlKGksIGUpLCBuLmVhY2hMYXllcihmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgICEocyBpbnN0YW5jZW9mIEwuTWFya2VyQ2x1c3RlcikgJiYgcy5faWNvbiAmJiBzLmNsdXN0ZXJTaG93KCk7XG4gICAgICAgICAgICB9KSwgdGhpcy5fdG9wQ2x1c3RlckxldmVsLl9yZWN1cnNpdmVseShpLCB0LCBlLCBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgIHMuX3JlY3Vyc2l2ZWx5UmVzdG9yZUNoaWxkUG9zaXRpb25zKGUpO1xuICAgICAgICAgICAgfSksIHRoaXMuX2lnbm9yZU1vdmUgPSAhMSwgdGhpcy5fZW5xdWV1ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdGhpcy5fdG9wQ2x1c3RlckxldmVsLl9yZWN1cnNpdmVseShpLCB0LCByLCBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgICAgbi5yZW1vdmVMYXllcihzKSwgcy5jbHVzdGVyU2hvdygpO1xuICAgICAgICAgICAgICB9KSwgdGhpcy5fYW5pbWF0aW9uRW5kKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9hbmltYXRpb25ab29tT3V0OiBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgICB0aGlzLl9hbmltYXRpb25ab29tT3V0U2luZ2xlKHRoaXMuX3RvcENsdXN0ZXJMZXZlbCwgdCAtIDEsIGUpLCB0aGlzLl90b3BDbHVzdGVyTGV2ZWwuX3JlY3Vyc2l2ZWx5QWRkQ2hpbGRyZW5Ub01hcChudWxsLCBlLCB0aGlzLl9nZXRFeHBhbmRlZFZpc2libGVCb3VuZHMoKSksIHRoaXMuX3RvcENsdXN0ZXJMZXZlbC5fcmVjdXJzaXZlbHlSZW1vdmVDaGlsZHJlbkZyb21NYXAodGhpcy5fY3VycmVudFNob3duQm91bmRzLCBNYXRoLmZsb29yKHRoaXMuX21hcC5nZXRNaW5ab29tKCkpLCB0LCB0aGlzLl9nZXRFeHBhbmRlZFZpc2libGVCb3VuZHMoKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBfYW5pbWF0aW9uQWRkTGF5ZXI6IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICAgIHZhciBpID0gdGhpcywgbiA9IHRoaXMuX2ZlYXR1cmVHcm91cDtcbiAgICAgICAgICAgIG4uYWRkTGF5ZXIodCksIGUgIT09IHQgJiYgKGUuX2NoaWxkQ291bnQgPiAyID8gKGUuX3VwZGF0ZUljb24oKSwgdGhpcy5fZm9yY2VMYXlvdXQoKSwgdGhpcy5fYW5pbWF0aW9uU3RhcnQoKSwgdC5fc2V0UG9zKHRoaXMuX21hcC5sYXRMbmdUb0xheWVyUG9pbnQoZS5nZXRMYXRMbmcoKSkpLCB0LmNsdXN0ZXJIaWRlKCksIHRoaXMuX2VucXVldWUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIG4ucmVtb3ZlTGF5ZXIodCksIHQuY2x1c3RlclNob3coKSwgaS5fYW5pbWF0aW9uRW5kKCk7XG4gICAgICAgICAgICB9KSkgOiAodGhpcy5fZm9yY2VMYXlvdXQoKSwgaS5fYW5pbWF0aW9uU3RhcnQoKSwgaS5fYW5pbWF0aW9uWm9vbU91dFNpbmdsZShlLCB0aGlzLl9tYXAuZ2V0TWF4Wm9vbSgpLCB0aGlzLl96b29tKSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gUHJpdmF0ZSBtZXRob2RzIGZvciBhbmltYXRlZCB2ZXJzaW9ucy5cbiAgICAgICAgX2FuaW1hdGlvblpvb21PdXRTaW5nbGU6IGZ1bmN0aW9uKHQsIGUsIGkpIHtcbiAgICAgICAgICB2YXIgbiA9IHRoaXMuX2dldEV4cGFuZGVkVmlzaWJsZUJvdW5kcygpLCByID0gTWF0aC5mbG9vcih0aGlzLl9tYXAuZ2V0TWluWm9vbSgpKTtcbiAgICAgICAgICB0Ll9yZWN1cnNpdmVseUFuaW1hdGVDaGlsZHJlbkluQW5kQWRkU2VsZlRvTWFwKG4sIHIsIGUgKyAxLCBpKTtcbiAgICAgICAgICB2YXIgbyA9IHRoaXM7XG4gICAgICAgICAgdGhpcy5fZm9yY2VMYXlvdXQoKSwgdC5fcmVjdXJzaXZlbHlCZWNvbWVWaXNpYmxlKG4sIGkpLCB0aGlzLl9lbnF1ZXVlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHQuX2NoaWxkQ291bnQgPT09IDEpIHtcbiAgICAgICAgICAgICAgdmFyIHMgPSB0Ll9tYXJrZXJzWzBdO1xuICAgICAgICAgICAgICB0aGlzLl9pZ25vcmVNb3ZlID0gITAsIHMuc2V0TGF0TG5nKHMuZ2V0TGF0TG5nKCkpLCB0aGlzLl9pZ25vcmVNb3ZlID0gITEsIHMuY2x1c3RlclNob3cgJiYgcy5jbHVzdGVyU2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgIHQuX3JlY3Vyc2l2ZWx5KG4sIGksIHIsIGZ1bmN0aW9uKHUpIHtcbiAgICAgICAgICAgICAgICB1Ll9yZWN1cnNpdmVseVJlbW92ZUNoaWxkcmVuRnJvbU1hcChuLCByLCBlICsgMSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgby5fYW5pbWF0aW9uRW5kKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIF9hbmltYXRpb25FbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMuX21hcCAmJiAodGhpcy5fbWFwLl9tYXBQYW5lLmNsYXNzTmFtZSA9IHRoaXMuX21hcC5fbWFwUGFuZS5jbGFzc05hbWUucmVwbGFjZShcIiBsZWFmbGV0LWNsdXN0ZXItYW5pbVwiLCBcIlwiKSksIHRoaXMuX2luWm9vbUFuaW1hdGlvbi0tLCB0aGlzLmZpcmUoXCJhbmltYXRpb25lbmRcIik7XG4gICAgICAgIH0sXG4gICAgICAgIC8vRm9yY2UgYSBicm93c2VyIGxheW91dCBvZiBzdHVmZiBpbiB0aGUgbWFwXG4gICAgICAgIC8vIFNob3VsZCBhcHBseSB0aGUgY3VycmVudCBvcGFjaXR5IGFuZCBsb2NhdGlvbiB0byBhbGwgZWxlbWVudHMgc28gd2UgY2FuIHVwZGF0ZSB0aGVtIGFnYWluIGZvciBhbiBhbmltYXRpb25cbiAgICAgICAgX2ZvcmNlTGF5b3V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBMLlV0aWwuZmFsc2VGbihkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgfSksIEwubWFya2VyQ2x1c3Rlckdyb3VwID0gZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gbmV3IEwuTWFya2VyQ2x1c3Rlckdyb3VwKHQpO1xuICAgICAgfTtcbiAgICAgIHZhciB2ID0gTC5NYXJrZXJDbHVzdGVyID0gTC5NYXJrZXIuZXh0ZW5kKHtcbiAgICAgICAgb3B0aW9uczogTC5JY29uLnByb3RvdHlwZS5vcHRpb25zLFxuICAgICAgICBpbml0aWFsaXplOiBmdW5jdGlvbih0LCBlLCBpLCBuKSB7XG4gICAgICAgICAgTC5NYXJrZXIucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICBpID8gaS5fY0xhdExuZyB8fCBpLmdldExhdExuZygpIDogbmV3IEwuTGF0TG5nKDAsIDApLFxuICAgICAgICAgICAgeyBpY29uOiB0aGlzLCBwYW5lOiB0Lm9wdGlvbnMuY2x1c3RlclBhbmUgfVxuICAgICAgICAgICksIHRoaXMuX2dyb3VwID0gdCwgdGhpcy5fem9vbSA9IGUsIHRoaXMuX21hcmtlcnMgPSBbXSwgdGhpcy5fY2hpbGRDbHVzdGVycyA9IFtdLCB0aGlzLl9jaGlsZENvdW50ID0gMCwgdGhpcy5faWNvbk5lZWRzVXBkYXRlID0gITAsIHRoaXMuX2JvdW5kc05lZWRVcGRhdGUgPSAhMCwgdGhpcy5fYm91bmRzID0gbmV3IEwuTGF0TG5nQm91bmRzKCksIGkgJiYgdGhpcy5fYWRkQ2hpbGQoaSksIG4gJiYgdGhpcy5fYWRkQ2hpbGQobik7XG4gICAgICAgIH0sXG4gICAgICAgIC8vUmVjdXJzaXZlbHkgcmV0cmlldmUgYWxsIGNoaWxkIG1hcmtlcnMgb2YgdGhpcyBjbHVzdGVyXG4gICAgICAgIGdldEFsbENoaWxkTWFya2VyczogZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgIHQgPSB0IHx8IFtdO1xuICAgICAgICAgIGZvciAodmFyIGkgPSB0aGlzLl9jaGlsZENsdXN0ZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxuICAgICAgICAgICAgdGhpcy5fY2hpbGRDbHVzdGVyc1tpXS5nZXRBbGxDaGlsZE1hcmtlcnModCwgZSk7XG4gICAgICAgICAgZm9yICh2YXIgbiA9IHRoaXMuX21hcmtlcnMubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pXG4gICAgICAgICAgICBlICYmIHRoaXMuX21hcmtlcnNbbl0uX19kcmFnU3RhcnQgfHwgdC5wdXNoKHRoaXMuX21hcmtlcnNbbl0pO1xuICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICB9LFxuICAgICAgICAvL1JldHVybnMgdGhlIGNvdW50IG9mIGhvdyBtYW55IGNoaWxkIG1hcmtlcnMgd2UgaGF2ZVxuICAgICAgICBnZXRDaGlsZENvdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRDb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgLy9ab29tIHRvIHRoZSBtaW5pbXVtIG9mIHNob3dpbmcgYWxsIG9mIHRoZSBjaGlsZCBtYXJrZXJzLCBvciB0aGUgZXh0ZW50cyBvZiB0aGlzIGNsdXN0ZXJcbiAgICAgICAgem9vbVRvQm91bmRzOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgZm9yICh2YXIgZSA9IHRoaXMuX2NoaWxkQ2x1c3RlcnMuc2xpY2UoKSwgaSA9IHRoaXMuX2dyb3VwLl9tYXAsIG4gPSBpLmdldEJvdW5kc1pvb20odGhpcy5fYm91bmRzKSwgciA9IHRoaXMuX3pvb20gKyAxLCBvID0gaS5nZXRab29tKCksIHM7IGUubGVuZ3RoID4gMCAmJiBuID4gcjsgKSB7XG4gICAgICAgICAgICByKys7XG4gICAgICAgICAgICB2YXIgdSA9IFtdO1xuICAgICAgICAgICAgZm9yIChzID0gMDsgcyA8IGUubGVuZ3RoOyBzKyspXG4gICAgICAgICAgICAgIHUgPSB1LmNvbmNhdChlW3NdLl9jaGlsZENsdXN0ZXJzKTtcbiAgICAgICAgICAgIGUgPSB1O1xuICAgICAgICAgIH1cbiAgICAgICAgICBuID4gciA/IHRoaXMuX2dyb3VwLl9tYXAuc2V0Vmlldyh0aGlzLl9sYXRsbmcsIHIpIDogbiA8PSBvID8gdGhpcy5fZ3JvdXAuX21hcC5zZXRWaWV3KHRoaXMuX2xhdGxuZywgbyArIDEpIDogdGhpcy5fZ3JvdXAuX21hcC5maXRCb3VuZHModGhpcy5fYm91bmRzLCB0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Qm91bmRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdCA9IG5ldyBMLkxhdExuZ0JvdW5kcygpO1xuICAgICAgICAgIHJldHVybiB0LmV4dGVuZCh0aGlzLl9ib3VuZHMpLCB0O1xuICAgICAgICB9LFxuICAgICAgICBfdXBkYXRlSWNvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5faWNvbk5lZWRzVXBkYXRlID0gITAsIHRoaXMuX2ljb24gJiYgdGhpcy5zZXRJY29uKHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICAvL0NsdWRnZSBmb3IgSWNvbiwgd2UgcHJldGVuZCB0byBiZSBhbiBpY29uIGZvciBwZXJmb3JtYW5jZVxuICAgICAgICBjcmVhdGVJY29uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5faWNvbk5lZWRzVXBkYXRlICYmICh0aGlzLl9pY29uT2JqID0gdGhpcy5fZ3JvdXAub3B0aW9ucy5pY29uQ3JlYXRlRnVuY3Rpb24odGhpcyksIHRoaXMuX2ljb25OZWVkc1VwZGF0ZSA9ICExKSwgdGhpcy5faWNvbk9iai5jcmVhdGVJY29uKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZVNoYWRvdzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2ljb25PYmouY3JlYXRlU2hhZG93KCk7XG4gICAgICAgIH0sXG4gICAgICAgIF9hZGRDaGlsZDogZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgIHRoaXMuX2ljb25OZWVkc1VwZGF0ZSA9ICEwLCB0aGlzLl9ib3VuZHNOZWVkVXBkYXRlID0gITAsIHRoaXMuX3NldENsdXN0ZXJDZW50ZXIodCksIHQgaW5zdGFuY2VvZiBMLk1hcmtlckNsdXN0ZXIgPyAoZSB8fCAodGhpcy5fY2hpbGRDbHVzdGVycy5wdXNoKHQpLCB0Ll9fcGFyZW50ID0gdGhpcyksIHRoaXMuX2NoaWxkQ291bnQgKz0gdC5fY2hpbGRDb3VudCkgOiAoZSB8fCB0aGlzLl9tYXJrZXJzLnB1c2godCksIHRoaXMuX2NoaWxkQ291bnQrKyksIHRoaXMuX19wYXJlbnQgJiYgdGhpcy5fX3BhcmVudC5fYWRkQ2hpbGQodCwgITApO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogTWFrZXMgc3VyZSB0aGUgY2x1c3RlciBjZW50ZXIgaXMgc2V0LiBJZiBub3QsIHVzZXMgdGhlIGNoaWxkIGNlbnRlciBpZiBpdCBpcyBhIGNsdXN0ZXIsIG9yIHRoZSBtYXJrZXIgcG9zaXRpb24uXG4gICAgICAgICAqIEBwYXJhbSBjaGlsZCBMLk1hcmtlckNsdXN0ZXJ8TC5NYXJrZXIgdGhhdCB3aWxsIGJlIHVzZWQgYXMgY2x1c3RlciBjZW50ZXIgaWYgbm90IGRlZmluZWQgeWV0LlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3NldENsdXN0ZXJDZW50ZXI6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICB0aGlzLl9jTGF0TG5nIHx8ICh0aGlzLl9jTGF0TG5nID0gdC5fY0xhdExuZyB8fCB0Ll9sYXRsbmcpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQXNzaWducyBpbXBvc3NpYmxlIGJvdW5kaW5nIHZhbHVlcyBzbyB0aGF0IHRoZSBuZXh0IGV4dGVuZCBlbnRpcmVseSBkZXRlcm1pbmVzIHRoZSBuZXcgYm91bmRzLlxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBhdm9pZHMgaGF2aW5nIHRvIHRyYXNoIHRoZSBwcmV2aW91cyBMLkxhdExuZ0JvdW5kcyBvYmplY3QgYW5kIHRvIGNyZWF0ZSBhIG5ldyBvbmUsIHdoaWNoIGlzIG11Y2ggc2xvd2VyIGZvciB0aGlzIGNsYXNzLlxuICAgICAgICAgKiBBcyBsb25nIGFzIHRoZSBib3VuZHMgYXJlIG5vdCBleHRlbmRlZCwgbW9zdCBvdGhlciBtZXRob2RzIHdvdWxkIHByb2JhYmx5IGZhaWwsIGFzIHRoZXkgd291bGQgd2l0aCBib3VuZHMgaW5pdGlhbGl6ZWQgYnV0IG5vdCBleHRlbmRlZC5cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9yZXNldEJvdW5kczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHQgPSB0aGlzLl9ib3VuZHM7XG4gICAgICAgICAgdC5fc291dGhXZXN0ICYmICh0Ll9zb3V0aFdlc3QubGF0ID0gMSAvIDAsIHQuX3NvdXRoV2VzdC5sbmcgPSAxIC8gMCksIHQuX25vcnRoRWFzdCAmJiAodC5fbm9ydGhFYXN0LmxhdCA9IC0xIC8gMCwgdC5fbm9ydGhFYXN0LmxuZyA9IC0xIC8gMCk7XG4gICAgICAgIH0sXG4gICAgICAgIF9yZWNhbGN1bGF0ZUJvdW5kczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHQgPSB0aGlzLl9tYXJrZXJzLCBlID0gdGhpcy5fY2hpbGRDbHVzdGVycywgaSA9IDAsIG4gPSAwLCByID0gdGhpcy5fY2hpbGRDb3VudCwgbywgcywgdSwgYTtcbiAgICAgICAgICBpZiAociAhPT0gMCkge1xuICAgICAgICAgICAgZm9yICh0aGlzLl9yZXNldEJvdW5kcygpLCBvID0gMDsgbyA8IHQubGVuZ3RoOyBvKyspXG4gICAgICAgICAgICAgIHUgPSB0W29dLl9sYXRsbmcsIHRoaXMuX2JvdW5kcy5leHRlbmQodSksIGkgKz0gdS5sYXQsIG4gKz0gdS5sbmc7XG4gICAgICAgICAgICBmb3IgKG8gPSAwOyBvIDwgZS5sZW5ndGg7IG8rKylcbiAgICAgICAgICAgICAgcyA9IGVbb10sIHMuX2JvdW5kc05lZWRVcGRhdGUgJiYgcy5fcmVjYWxjdWxhdGVCb3VuZHMoKSwgdGhpcy5fYm91bmRzLmV4dGVuZChzLl9ib3VuZHMpLCB1ID0gcy5fd0xhdExuZywgYSA9IHMuX2NoaWxkQ291bnQsIGkgKz0gdS5sYXQgKiBhLCBuICs9IHUubG5nICogYTtcbiAgICAgICAgICAgIHRoaXMuX2xhdGxuZyA9IHRoaXMuX3dMYXRMbmcgPSBuZXcgTC5MYXRMbmcoaSAvIHIsIG4gLyByKSwgdGhpcy5fYm91bmRzTmVlZFVwZGF0ZSA9ICExO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy9TZXQgb3VyIG1hcmtlcnMgcG9zaXRpb24gYXMgZ2l2ZW4gYW5kIGFkZCBpdCB0byB0aGUgbWFwXG4gICAgICAgIF9hZGRUb01hcDogZnVuY3Rpb24odCkge1xuICAgICAgICAgIHQgJiYgKHRoaXMuX2JhY2t1cExhdGxuZyA9IHRoaXMuX2xhdGxuZywgdGhpcy5zZXRMYXRMbmcodCkpLCB0aGlzLl9ncm91cC5fZmVhdHVyZUdyb3VwLmFkZExheWVyKHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICBfcmVjdXJzaXZlbHlBbmltYXRlQ2hpbGRyZW5JbjogZnVuY3Rpb24odCwgZSwgaSkge1xuICAgICAgICAgIHRoaXMuX3JlY3Vyc2l2ZWx5KFxuICAgICAgICAgICAgdCxcbiAgICAgICAgICAgIHRoaXMuX2dyb3VwLl9tYXAuZ2V0TWluWm9vbSgpLFxuICAgICAgICAgICAgaSAtIDEsXG4gICAgICAgICAgICBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgIHZhciByID0gbi5fbWFya2VycywgbywgcztcbiAgICAgICAgICAgICAgZm9yIChvID0gci5sZW5ndGggLSAxOyBvID49IDA7IG8tLSlcbiAgICAgICAgICAgICAgICBzID0gcltvXSwgcy5faWNvbiAmJiAocy5fc2V0UG9zKGUpLCBzLmNsdXN0ZXJIaWRlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgdmFyIHIgPSBuLl9jaGlsZENsdXN0ZXJzLCBvLCBzO1xuICAgICAgICAgICAgICBmb3IgKG8gPSByLmxlbmd0aCAtIDE7IG8gPj0gMDsgby0tKVxuICAgICAgICAgICAgICAgIHMgPSByW29dLCBzLl9pY29uICYmIChzLl9zZXRQb3MoZSksIHMuY2x1c3RlckhpZGUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICAgX3JlY3Vyc2l2ZWx5QW5pbWF0ZUNoaWxkcmVuSW5BbmRBZGRTZWxmVG9NYXA6IGZ1bmN0aW9uKHQsIGUsIGksIG4pIHtcbiAgICAgICAgICB0aGlzLl9yZWN1cnNpdmVseShcbiAgICAgICAgICAgIHQsXG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgZSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICAgICAgci5fcmVjdXJzaXZlbHlBbmltYXRlQ2hpbGRyZW5Jbih0LCByLl9ncm91cC5fbWFwLmxhdExuZ1RvTGF5ZXJQb2ludChyLmdldExhdExuZygpKS5yb3VuZCgpLCBpKSwgci5faXNTaW5nbGVQYXJlbnQoKSAmJiBpIC0gMSA9PT0gbiA/IChyLmNsdXN0ZXJTaG93KCksIHIuX3JlY3Vyc2l2ZWx5UmVtb3ZlQ2hpbGRyZW5Gcm9tTWFwKHQsIGUsIGkpKSA6IHIuY2x1c3RlckhpZGUoKSwgci5fYWRkVG9NYXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICBfcmVjdXJzaXZlbHlCZWNvbWVWaXNpYmxlOiBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgdGhpcy5fcmVjdXJzaXZlbHkodCwgdGhpcy5fZ3JvdXAuX21hcC5nZXRNaW5ab29tKCksIGUsIG51bGwsIGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgIGkuY2x1c3RlclNob3coKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgX3JlY3Vyc2l2ZWx5QWRkQ2hpbGRyZW5Ub01hcDogZnVuY3Rpb24odCwgZSwgaSkge1xuICAgICAgICAgIHRoaXMuX3JlY3Vyc2l2ZWx5KFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHRoaXMuX2dyb3VwLl9tYXAuZ2V0TWluWm9vbSgpIC0gMSxcbiAgICAgICAgICAgIGUsXG4gICAgICAgICAgICBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgIGlmIChlICE9PSBuLl96b29tKVxuICAgICAgICAgICAgICAgIGZvciAodmFyIHIgPSBuLl9tYXJrZXJzLmxlbmd0aCAtIDE7IHIgPj0gMDsgci0tKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgbyA9IG4uX21hcmtlcnNbcl07XG4gICAgICAgICAgICAgICAgICBpLmNvbnRhaW5zKG8uX2xhdGxuZykgJiYgKHQgJiYgKG8uX2JhY2t1cExhdGxuZyA9IG8uZ2V0TGF0TG5nKCksIG8uc2V0TGF0TG5nKHQpLCBvLmNsdXN0ZXJIaWRlICYmIG8uY2x1c3RlckhpZGUoKSksIG4uX2dyb3VwLl9mZWF0dXJlR3JvdXAuYWRkTGF5ZXIobykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgIG4uX2FkZFRvTWFwKHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIF9yZWN1cnNpdmVseVJlc3RvcmVDaGlsZFBvc2l0aW9uczogZnVuY3Rpb24odCkge1xuICAgICAgICAgIGZvciAodmFyIGUgPSB0aGlzLl9tYXJrZXJzLmxlbmd0aCAtIDE7IGUgPj0gMDsgZS0tKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHRoaXMuX21hcmtlcnNbZV07XG4gICAgICAgICAgICBpLl9iYWNrdXBMYXRsbmcgJiYgKGkuc2V0TGF0TG5nKGkuX2JhY2t1cExhdGxuZyksIGRlbGV0ZSBpLl9iYWNrdXBMYXRsbmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodCAtIDEgPT09IHRoaXMuX3pvb20pXG4gICAgICAgICAgICBmb3IgKHZhciBuID0gdGhpcy5fY2hpbGRDbHVzdGVycy5sZW5ndGggLSAxOyBuID49IDA7IG4tLSlcbiAgICAgICAgICAgICAgdGhpcy5fY2hpbGRDbHVzdGVyc1tuXS5fcmVzdG9yZVBvc2l0aW9uKCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZm9yICh2YXIgciA9IHRoaXMuX2NoaWxkQ2x1c3RlcnMubGVuZ3RoIC0gMTsgciA+PSAwOyByLS0pXG4gICAgICAgICAgICAgIHRoaXMuX2NoaWxkQ2x1c3RlcnNbcl0uX3JlY3Vyc2l2ZWx5UmVzdG9yZUNoaWxkUG9zaXRpb25zKHQpO1xuICAgICAgICB9LFxuICAgICAgICBfcmVzdG9yZVBvc2l0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGlzLl9iYWNrdXBMYXRsbmcgJiYgKHRoaXMuc2V0TGF0TG5nKHRoaXMuX2JhY2t1cExhdGxuZyksIGRlbGV0ZSB0aGlzLl9iYWNrdXBMYXRsbmcpO1xuICAgICAgICB9LFxuICAgICAgICAvL2V4Y2VwdEJvdW5kczogSWYgc2V0LCBkb24ndCByZW1vdmUgYW55IG1hcmtlcnMvY2x1c3RlcnMgaW4gaXRcbiAgICAgICAgX3JlY3Vyc2l2ZWx5UmVtb3ZlQ2hpbGRyZW5Gcm9tTWFwOiBmdW5jdGlvbih0LCBlLCBpLCBuKSB7XG4gICAgICAgICAgdmFyIHIsIG87XG4gICAgICAgICAgdGhpcy5fcmVjdXJzaXZlbHkoXG4gICAgICAgICAgICB0LFxuICAgICAgICAgICAgZSAtIDEsXG4gICAgICAgICAgICBpIC0gMSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgICAgZm9yIChvID0gcy5fbWFya2Vycy5sZW5ndGggLSAxOyBvID49IDA7IG8tLSlcbiAgICAgICAgICAgICAgICByID0gcy5fbWFya2Vyc1tvXSwgKCFuIHx8ICFuLmNvbnRhaW5zKHIuX2xhdGxuZykpICYmIChzLl9ncm91cC5fZmVhdHVyZUdyb3VwLnJlbW92ZUxheWVyKHIpLCByLmNsdXN0ZXJTaG93ICYmIHIuY2x1c3RlclNob3coKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgICBmb3IgKG8gPSBzLl9jaGlsZENsdXN0ZXJzLmxlbmd0aCAtIDE7IG8gPj0gMDsgby0tKVxuICAgICAgICAgICAgICAgIHIgPSBzLl9jaGlsZENsdXN0ZXJzW29dLCAoIW4gfHwgIW4uY29udGFpbnMoci5fbGF0bG5nKSkgJiYgKHMuX2dyb3VwLl9mZWF0dXJlR3JvdXAucmVtb3ZlTGF5ZXIociksIHIuY2x1c3RlclNob3cgJiYgci5jbHVzdGVyU2hvdygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICAvL1J1biB0aGUgZ2l2ZW4gZnVuY3Rpb25zIHJlY3Vyc2l2ZWx5IHRvIHRoaXMgYW5kIGNoaWxkIGNsdXN0ZXJzXG4gICAgICAgIC8vIGJvdW5kc1RvQXBwbHlUbzogYSBMLkxhdExuZ0JvdW5kcyByZXByZXNlbnRpbmcgdGhlIGJvdW5kcyBvZiB3aGF0IGNsdXN0ZXJzIHRvIHJlY3Vyc2UgaW4gdG9cbiAgICAgICAgLy8gem9vbUxldmVsVG9TdGFydDogem9vbSBsZXZlbCB0byBzdGFydCBydW5uaW5nIGZ1bmN0aW9ucyAoaW5jbHVzaXZlKVxuICAgICAgICAvLyB6b29tTGV2ZWxUb1N0b3A6IHpvb20gbGV2ZWwgdG8gc3RvcCBydW5uaW5nIGZ1bmN0aW9ucyAoaW5jbHVzaXZlKVxuICAgICAgICAvLyBydW5BdEV2ZXJ5TGV2ZWw6IGZ1bmN0aW9uIHRoYXQgdGFrZXMgYW4gTC5NYXJrZXJDbHVzdGVyIGFzIGFuIGFyZ3VtZW50IHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQgb24gZXZlcnkgbGV2ZWxcbiAgICAgICAgLy8gcnVuQXRCb3R0b21MZXZlbDogZnVuY3Rpb24gdGhhdCB0YWtlcyBhbiBMLk1hcmtlckNsdXN0ZXIgYXMgYW4gYXJndW1lbnQgdGhhdCBzaG91bGQgYmUgYXBwbGllZCBhdCBvbmx5IHRoZSBib3R0b20gbGV2ZWxcbiAgICAgICAgX3JlY3Vyc2l2ZWx5OiBmdW5jdGlvbih0LCBlLCBpLCBuLCByKSB7XG4gICAgICAgICAgdmFyIG8gPSB0aGlzLl9jaGlsZENsdXN0ZXJzLCBzID0gdGhpcy5fem9vbSwgdSwgYTtcbiAgICAgICAgICBpZiAoZSA8PSBzICYmIChuICYmIG4odGhpcyksIHIgJiYgcyA9PT0gaSAmJiByKHRoaXMpKSwgcyA8IGUgfHwgcyA8IGkpXG4gICAgICAgICAgICBmb3IgKHUgPSBvLmxlbmd0aCAtIDE7IHUgPj0gMDsgdS0tKVxuICAgICAgICAgICAgICBhID0gb1t1XSwgYS5fYm91bmRzTmVlZFVwZGF0ZSAmJiBhLl9yZWNhbGN1bGF0ZUJvdW5kcygpLCB0LmludGVyc2VjdHMoYS5fYm91bmRzKSAmJiBhLl9yZWN1cnNpdmVseSh0LCBlLCBpLCBuLCByKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy9SZXR1cm5zIHRydWUgaWYgd2UgYXJlIHRoZSBwYXJlbnQgb2Ygb25seSBvbmUgY2x1c3RlciBhbmQgdGhhdCBjbHVzdGVyIGlzIHRoZSBzYW1lIGFzIHVzXG4gICAgICAgIF9pc1NpbmdsZVBhcmVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkQ2x1c3RlcnMubGVuZ3RoID4gMCAmJiB0aGlzLl9jaGlsZENsdXN0ZXJzWzBdLl9jaGlsZENvdW50ID09PSB0aGlzLl9jaGlsZENvdW50O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIEwuTWFya2VyLmluY2x1ZGUoe1xuICAgICAgICBjbHVzdGVySGlkZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHQgPSB0aGlzLm9wdGlvbnMub3BhY2l0eTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXRPcGFjaXR5KDApLCB0aGlzLm9wdGlvbnMub3BhY2l0eSA9IHQsIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIGNsdXN0ZXJTaG93OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXRPcGFjaXR5KHRoaXMub3B0aW9ucy5vcGFjaXR5KTtcbiAgICAgICAgfVxuICAgICAgfSksIEwuRGlzdGFuY2VHcmlkID0gZnVuY3Rpb24odCkge1xuICAgICAgICB0aGlzLl9jZWxsU2l6ZSA9IHQsIHRoaXMuX3NxQ2VsbFNpemUgPSB0ICogdCwgdGhpcy5fZ3JpZCA9IHt9LCB0aGlzLl9vYmplY3RQb2ludCA9IHt9O1xuICAgICAgfSwgTC5EaXN0YW5jZUdyaWQucHJvdG90eXBlID0ge1xuICAgICAgICBhZGRPYmplY3Q6IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICB2YXIgaSA9IHRoaXMuX2dldENvb3JkKGUueCksIG4gPSB0aGlzLl9nZXRDb29yZChlLnkpLCByID0gdGhpcy5fZ3JpZCwgbyA9IHJbbl0gPSByW25dIHx8IHt9LCBzID0gb1tpXSA9IG9baV0gfHwgW10sIHUgPSBMLlV0aWwuc3RhbXAodCk7XG4gICAgICAgICAgdGhpcy5fb2JqZWN0UG9pbnRbdV0gPSBlLCBzLnB1c2godCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZU9iamVjdDogZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlT2JqZWN0KHQpLCB0aGlzLmFkZE9iamVjdCh0LCBlKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy9SZXR1cm5zIHRydWUgaWYgdGhlIG9iamVjdCB3YXMgZm91bmRcbiAgICAgICAgcmVtb3ZlT2JqZWN0OiBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgdmFyIGkgPSB0aGlzLl9nZXRDb29yZChlLngpLCBuID0gdGhpcy5fZ2V0Q29vcmQoZS55KSwgciA9IHRoaXMuX2dyaWQsIG8gPSByW25dID0gcltuXSB8fCB7fSwgcyA9IG9baV0gPSBvW2ldIHx8IFtdLCB1LCBhO1xuICAgICAgICAgIGZvciAoZGVsZXRlIHRoaXMuX29iamVjdFBvaW50W0wuVXRpbC5zdGFtcCh0KV0sIHUgPSAwLCBhID0gcy5sZW5ndGg7IHUgPCBhOyB1KyspXG4gICAgICAgICAgICBpZiAoc1t1XSA9PT0gdClcbiAgICAgICAgICAgICAgcmV0dXJuIHMuc3BsaWNlKHUsIDEpLCBhID09PSAxICYmIGRlbGV0ZSBvW2ldLCAhMDtcbiAgICAgICAgfSxcbiAgICAgICAgZWFjaE9iamVjdDogZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgIHZhciBpLCBuLCByLCBvLCBzLCB1LCBhLCBfID0gdGhpcy5fZ3JpZDtcbiAgICAgICAgICBmb3IgKGkgaW4gXykge1xuICAgICAgICAgICAgcyA9IF9baV07XG4gICAgICAgICAgICBmb3IgKG4gaW4gcylcbiAgICAgICAgICAgICAgZm9yICh1ID0gc1tuXSwgciA9IDAsIG8gPSB1Lmxlbmd0aDsgciA8IG87IHIrKylcbiAgICAgICAgICAgICAgICBhID0gdC5jYWxsKGUsIHVbcl0pLCBhICYmIChyLS0sIG8tLSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZXROZWFyT2JqZWN0OiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgdmFyIGUgPSB0aGlzLl9nZXRDb29yZCh0LngpLCBpID0gdGhpcy5fZ2V0Q29vcmQodC55KSwgbiwgciwgbywgcywgdSwgYSwgXywgZiwgZyA9IHRoaXMuX29iamVjdFBvaW50LCBjID0gdGhpcy5fc3FDZWxsU2l6ZSwgbSA9IG51bGw7XG4gICAgICAgICAgZm9yIChuID0gaSAtIDE7IG4gPD0gaSArIDE7IG4rKylcbiAgICAgICAgICAgIGlmIChzID0gdGhpcy5fZ3JpZFtuXSwgcykge1xuICAgICAgICAgICAgICBmb3IgKHIgPSBlIC0gMTsgciA8PSBlICsgMTsgcisrKVxuICAgICAgICAgICAgICAgIGlmICh1ID0gc1tyXSwgdSlcbiAgICAgICAgICAgICAgICAgIGZvciAobyA9IDAsIGEgPSB1Lmxlbmd0aDsgbyA8IGE7IG8rKylcbiAgICAgICAgICAgICAgICAgICAgXyA9IHVbb10sIGYgPSB0aGlzLl9zcURpc3QoZ1tMLlV0aWwuc3RhbXAoXyldLCB0KSwgKGYgPCBjIHx8IGYgPD0gYyAmJiBtID09PSBudWxsKSAmJiAoYyA9IGYsIG0gPSBfKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfSxcbiAgICAgICAgX2dldENvb3JkOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgdmFyIGUgPSBNYXRoLmZsb29yKHQgLyB0aGlzLl9jZWxsU2l6ZSk7XG4gICAgICAgICAgcmV0dXJuIGlzRmluaXRlKGUpID8gZSA6IHQ7XG4gICAgICAgIH0sXG4gICAgICAgIF9zcURpc3Q6IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICB2YXIgaSA9IGUueCAtIHQueCwgbiA9IGUueSAtIHQueTtcbiAgICAgICAgICByZXR1cm4gaSAqIGkgKyBuICogbjtcbiAgICAgICAgfVxuICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIEwuUXVpY2tIdWxsID0ge1xuICAgICAgICAgIC8qXG4gICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNwdCBhIHBvaW50IHRvIGJlIG1lYXN1cmVkIGZyb20gdGhlIGJhc2VsaW5lXG4gICAgICAgICAgICogQHBhcmFtIHtBcnJheX0gYmwgdGhlIGJhc2VsaW5lLCBhcyByZXByZXNlbnRlZCBieSBhIHR3by1lbGVtZW50XG4gICAgICAgICAgICogICBhcnJheSBvZiBsYXRsbmcgb2JqZWN0cy5cbiAgICAgICAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSBhbiBhcHByb3hpbWF0ZSBkaXN0YW5jZSBtZWFzdXJlXG4gICAgICAgICAgICovXG4gICAgICAgICAgZ2V0RGlzdGFudDogZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgICAgdmFyIGkgPSBlWzFdLmxhdCAtIGVbMF0ubGF0LCBuID0gZVswXS5sbmcgLSBlWzFdLmxuZztcbiAgICAgICAgICAgIHJldHVybiBuICogKHQubGF0IC0gZVswXS5sYXQpICsgaSAqICh0LmxuZyAtIGVbMF0ubG5nKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8qXG4gICAgICAgICAgICogQHBhcmFtIHtBcnJheX0gYmFzZUxpbmUgYSB0d28tZWxlbWVudCBhcnJheSBvZiBsYXRsbmcgb2JqZWN0c1xuICAgICAgICAgICAqICAgcmVwcmVzZW50aW5nIHRoZSBiYXNlbGluZSB0byBwcm9qZWN0IGZyb21cbiAgICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBsYXRMbmdzIGFuIGFycmF5IG9mIGxhdGxuZyBvYmplY3RzXG4gICAgICAgICAgICogQHJldHVybnMge09iamVjdH0gdGhlIG1heGltdW0gcG9pbnQgYW5kIGFsbCBuZXcgcG9pbnRzIHRvIHN0YXlcbiAgICAgICAgICAgKiAgIGluIGNvbnNpZGVyYXRpb24gZm9yIHRoZSBodWxsLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGZpbmRNb3N0RGlzdGFudFBvaW50RnJvbUJhc2VMaW5lOiBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgICB2YXIgaSA9IDAsIG4gPSBudWxsLCByID0gW10sIG8sIHMsIHU7XG4gICAgICAgICAgICBmb3IgKG8gPSBlLmxlbmd0aCAtIDE7IG8gPj0gMDsgby0tKSB7XG4gICAgICAgICAgICAgIGlmIChzID0gZVtvXSwgdSA9IHRoaXMuZ2V0RGlzdGFudChzLCB0KSwgdSA+IDApXG4gICAgICAgICAgICAgICAgci5wdXNoKHMpO1xuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIHUgPiBpICYmIChpID0gdSwgbiA9IHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgbWF4UG9pbnQ6IG4sIG5ld1BvaW50czogciB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLypcbiAgICAgICAgICAgKiBHaXZlbiBhIGJhc2VsaW5lLCBjb21wdXRlIHRoZSBjb252ZXggaHVsbCBvZiBsYXRMbmdzIGFzIGFuIGFycmF5XG4gICAgICAgICAgICogb2YgbGF0TG5ncy5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGxhdExuZ3NcbiAgICAgICAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICAgICAgICovXG4gICAgICAgICAgYnVpbGRDb252ZXhIdWxsOiBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgICB2YXIgaSA9IFtdLCBuID0gdGhpcy5maW5kTW9zdERpc3RhbnRQb2ludEZyb21CYXNlTGluZSh0LCBlKTtcbiAgICAgICAgICAgIHJldHVybiBuLm1heFBvaW50ID8gKGkgPSBpLmNvbmNhdChcbiAgICAgICAgICAgICAgdGhpcy5idWlsZENvbnZleEh1bGwoW3RbMF0sIG4ubWF4UG9pbnRdLCBuLm5ld1BvaW50cylcbiAgICAgICAgICAgICksIGkgPSBpLmNvbmNhdChcbiAgICAgICAgICAgICAgdGhpcy5idWlsZENvbnZleEh1bGwoW24ubWF4UG9pbnQsIHRbMV1dLCBuLm5ld1BvaW50cylcbiAgICAgICAgICAgICksIGkpIDogW3RbMF1dO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLypcbiAgICAgICAgICAgKiBHaXZlbiBhbiBhcnJheSBvZiBsYXRsbmdzLCBjb21wdXRlIGEgY29udmV4IGh1bGwgYXMgYW4gYXJyYXlcbiAgICAgICAgICAgKiBvZiBsYXRsbmdzXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBsYXRMbmdzXG4gICAgICAgICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAgICAgICAqL1xuICAgICAgICAgIGdldENvbnZleEh1bGw6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgIHZhciBlID0gITEsIGkgPSAhMSwgbiA9ICExLCByID0gITEsIG8gPSBudWxsLCBzID0gbnVsbCwgdSA9IG51bGwsIGEgPSBudWxsLCBfID0gbnVsbCwgZiA9IG51bGwsIGc7XG4gICAgICAgICAgICBmb3IgKGcgPSB0Lmxlbmd0aCAtIDE7IGcgPj0gMDsgZy0tKSB7XG4gICAgICAgICAgICAgIHZhciBjID0gdFtnXTtcbiAgICAgICAgICAgICAgKGUgPT09ICExIHx8IGMubGF0ID4gZSkgJiYgKG8gPSBjLCBlID0gYy5sYXQpLCAoaSA9PT0gITEgfHwgYy5sYXQgPCBpKSAmJiAocyA9IGMsIGkgPSBjLmxhdCksIChuID09PSAhMSB8fCBjLmxuZyA+IG4pICYmICh1ID0gYywgbiA9IGMubG5nKSwgKHIgPT09ICExIHx8IGMubG5nIDwgcikgJiYgKGEgPSBjLCByID0gYy5sbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSAhPT0gZSA/IChmID0gcywgXyA9IG8pIDogKGYgPSBhLCBfID0gdSk7XG4gICAgICAgICAgICB2YXIgbSA9IFtdLmNvbmNhdChcbiAgICAgICAgICAgICAgdGhpcy5idWlsZENvbnZleEh1bGwoW2YsIF9dLCB0KSxcbiAgICAgICAgICAgICAgdGhpcy5idWlsZENvbnZleEh1bGwoW18sIGZdLCB0KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0oKSwgTC5NYXJrZXJDbHVzdGVyLmluY2x1ZGUoe1xuICAgICAgICBnZXRDb252ZXhIdWxsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdCA9IHRoaXMuZ2V0QWxsQ2hpbGRNYXJrZXJzKCksIGUgPSBbXSwgaSwgbjtcbiAgICAgICAgICBmb3IgKG4gPSB0Lmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKVxuICAgICAgICAgICAgaSA9IHRbbl0uZ2V0TGF0TG5nKCksIGUucHVzaChpKTtcbiAgICAgICAgICByZXR1cm4gTC5RdWlja0h1bGwuZ2V0Q29udmV4SHVsbChlKTtcbiAgICAgICAgfVxuICAgICAgfSksIEwuTWFya2VyQ2x1c3Rlci5pbmNsdWRlKHtcbiAgICAgICAgXzJQSTogTWF0aC5QSSAqIDIsXG4gICAgICAgIF9jaXJjbGVGb290U2VwYXJhdGlvbjogMjUsXG4gICAgICAgIC8vcmVsYXRlZCB0byBjaXJjdW1mZXJlbmNlIG9mIGNpcmNsZVxuICAgICAgICBfY2lyY2xlU3RhcnRBbmdsZTogMCxcbiAgICAgICAgX3NwaXJhbEZvb3RTZXBhcmF0aW9uOiAyOCxcbiAgICAgICAgLy9yZWxhdGVkIHRvIHNpemUgb2Ygc3BpcmFsIChleHBlcmltZW50ISlcbiAgICAgICAgX3NwaXJhbExlbmd0aFN0YXJ0OiAxMSxcbiAgICAgICAgX3NwaXJhbExlbmd0aEZhY3RvcjogNSxcbiAgICAgICAgX2NpcmNsZVNwaXJhbFN3aXRjaG92ZXI6IDksXG4gICAgICAgIC8vc2hvdyBzcGlyYWwgaW5zdGVhZCBvZiBjaXJjbGUgZnJvbSB0aGlzIG1hcmtlciBjb3VudCB1cHdhcmRzLlxuICAgICAgICAvLyAwIC0+IGFsd2F5cyBzcGlyYWw7IEluZmluaXR5IC0+IGFsd2F5cyBjaXJjbGVcbiAgICAgICAgc3BpZGVyZnk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICghKHRoaXMuX2dyb3VwLl9zcGlkZXJmaWVkID09PSB0aGlzIHx8IHRoaXMuX2dyb3VwLl9pblpvb21BbmltYXRpb24pKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHRoaXMuZ2V0QWxsQ2hpbGRNYXJrZXJzKG51bGwsICEwKSwgZSA9IHRoaXMuX2dyb3VwLCBpID0gZS5fbWFwLCBuID0gaS5sYXRMbmdUb0xheWVyUG9pbnQodGhpcy5fbGF0bG5nKSwgcjtcbiAgICAgICAgICAgIHRoaXMuX2dyb3VwLl91bnNwaWRlcmZ5KCksIHRoaXMuX2dyb3VwLl9zcGlkZXJmaWVkID0gdGhpcywgdGhpcy5fZ3JvdXAub3B0aW9ucy5zcGlkZXJmeVNoYXBlUG9zaXRpb25zID8gciA9IHRoaXMuX2dyb3VwLm9wdGlvbnMuc3BpZGVyZnlTaGFwZVBvc2l0aW9ucyh0Lmxlbmd0aCwgbikgOiB0Lmxlbmd0aCA+PSB0aGlzLl9jaXJjbGVTcGlyYWxTd2l0Y2hvdmVyID8gciA9IHRoaXMuX2dlbmVyYXRlUG9pbnRzU3BpcmFsKHQubGVuZ3RoLCBuKSA6IChuLnkgKz0gMTAsIHIgPSB0aGlzLl9nZW5lcmF0ZVBvaW50c0NpcmNsZSh0Lmxlbmd0aCwgbikpLCB0aGlzLl9hbmltYXRpb25TcGlkZXJmeSh0LCByKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHVuc3BpZGVyZnk6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICB0aGlzLl9ncm91cC5faW5ab29tQW5pbWF0aW9uIHx8ICh0aGlzLl9hbmltYXRpb25VbnNwaWRlcmZ5KHQpLCB0aGlzLl9ncm91cC5fc3BpZGVyZmllZCA9IG51bGwpO1xuICAgICAgICB9LFxuICAgICAgICBfZ2VuZXJhdGVQb2ludHNDaXJjbGU6IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICB2YXIgaSA9IHRoaXMuX2dyb3VwLm9wdGlvbnMuc3BpZGVyZnlEaXN0YW5jZU11bHRpcGxpZXIgKiB0aGlzLl9jaXJjbGVGb290U2VwYXJhdGlvbiAqICgyICsgdCksIG4gPSBpIC8gdGhpcy5fMlBJLCByID0gdGhpcy5fMlBJIC8gdCwgbyA9IFtdLCBzLCB1O1xuICAgICAgICAgIGZvciAobiA9IE1hdGgubWF4KG4sIDM1KSwgby5sZW5ndGggPSB0LCBzID0gMDsgcyA8IHQ7IHMrKylcbiAgICAgICAgICAgIHUgPSB0aGlzLl9jaXJjbGVTdGFydEFuZ2xlICsgcyAqIHIsIG9bc10gPSBuZXcgTC5Qb2ludChlLnggKyBuICogTWF0aC5jb3ModSksIGUueSArIG4gKiBNYXRoLnNpbih1KSkuX3JvdW5kKCk7XG4gICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH0sXG4gICAgICAgIF9nZW5lcmF0ZVBvaW50c1NwaXJhbDogZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgIHZhciBpID0gdGhpcy5fZ3JvdXAub3B0aW9ucy5zcGlkZXJmeURpc3RhbmNlTXVsdGlwbGllciwgbiA9IGkgKiB0aGlzLl9zcGlyYWxMZW5ndGhTdGFydCwgciA9IGkgKiB0aGlzLl9zcGlyYWxGb290U2VwYXJhdGlvbiwgbyA9IGkgKiB0aGlzLl9zcGlyYWxMZW5ndGhGYWN0b3IgKiB0aGlzLl8yUEksIHMgPSAwLCB1ID0gW10sIGE7XG4gICAgICAgICAgZm9yICh1Lmxlbmd0aCA9IHQsIGEgPSB0OyBhID49IDA7IGEtLSlcbiAgICAgICAgICAgIGEgPCB0ICYmICh1W2FdID0gbmV3IEwuUG9pbnQoZS54ICsgbiAqIE1hdGguY29zKHMpLCBlLnkgKyBuICogTWF0aC5zaW4ocykpLl9yb3VuZCgpKSwgcyArPSByIC8gbiArIGEgKiA1ZS00LCBuICs9IG8gLyBzO1xuICAgICAgICAgIHJldHVybiB1O1xuICAgICAgICB9LFxuICAgICAgICBfbm9hbmltYXRpb25VbnNwaWRlcmZ5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdCA9IHRoaXMuX2dyb3VwLCBlID0gdC5fbWFwLCBpID0gdC5fZmVhdHVyZUdyb3VwLCBuID0gdGhpcy5nZXRBbGxDaGlsZE1hcmtlcnMobnVsbCwgITApLCByLCBvO1xuICAgICAgICAgIGZvciAodC5faWdub3JlTW92ZSA9ICEwLCB0aGlzLnNldE9wYWNpdHkoMSksIG8gPSBuLmxlbmd0aCAtIDE7IG8gPj0gMDsgby0tKVxuICAgICAgICAgICAgciA9IG5bb10sIGkucmVtb3ZlTGF5ZXIociksIHIuX3ByZVNwaWRlcmZ5TGF0bG5nICYmIChyLnNldExhdExuZyhyLl9wcmVTcGlkZXJmeUxhdGxuZyksIGRlbGV0ZSByLl9wcmVTcGlkZXJmeUxhdGxuZyksIHIuc2V0WkluZGV4T2Zmc2V0ICYmIHIuc2V0WkluZGV4T2Zmc2V0KDApLCByLl9zcGlkZXJMZWcgJiYgKGUucmVtb3ZlTGF5ZXIoci5fc3BpZGVyTGVnKSwgZGVsZXRlIHIuX3NwaWRlckxlZyk7XG4gICAgICAgICAgdC5maXJlKFwidW5zcGlkZXJmaWVkXCIsIHtcbiAgICAgICAgICAgIGNsdXN0ZXI6IHRoaXMsXG4gICAgICAgICAgICBtYXJrZXJzOiBuXG4gICAgICAgICAgfSksIHQuX2lnbm9yZU1vdmUgPSAhMSwgdC5fc3BpZGVyZmllZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0pLCBMLk1hcmtlckNsdXN0ZXJOb25BbmltYXRlZCA9IEwuTWFya2VyQ2x1c3Rlci5leHRlbmQoe1xuICAgICAgICBfYW5pbWF0aW9uU3BpZGVyZnk6IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICB2YXIgaSA9IHRoaXMuX2dyb3VwLCBuID0gaS5fbWFwLCByID0gaS5fZmVhdHVyZUdyb3VwLCBvID0gdGhpcy5fZ3JvdXAub3B0aW9ucy5zcGlkZXJMZWdQb2x5bGluZU9wdGlvbnMsIHMsIHUsIGEsIF87XG4gICAgICAgICAgZm9yIChpLl9pZ25vcmVNb3ZlID0gITAsIHMgPSAwOyBzIDwgdC5sZW5ndGg7IHMrKylcbiAgICAgICAgICAgIF8gPSBuLmxheWVyUG9pbnRUb0xhdExuZyhlW3NdKSwgdSA9IHRbc10sIGEgPSBuZXcgTC5Qb2x5bGluZShbdGhpcy5fbGF0bG5nLCBfXSwgbyksIG4uYWRkTGF5ZXIoYSksIHUuX3NwaWRlckxlZyA9IGEsIHUuX3ByZVNwaWRlcmZ5TGF0bG5nID0gdS5fbGF0bG5nLCB1LnNldExhdExuZyhfKSwgdS5zZXRaSW5kZXhPZmZzZXQgJiYgdS5zZXRaSW5kZXhPZmZzZXQoMWU2KSwgci5hZGRMYXllcih1KTtcbiAgICAgICAgICB0aGlzLnNldE9wYWNpdHkoMC4zKSwgaS5faWdub3JlTW92ZSA9ICExLCBpLmZpcmUoXCJzcGlkZXJmaWVkXCIsIHtcbiAgICAgICAgICAgIGNsdXN0ZXI6IHRoaXMsXG4gICAgICAgICAgICBtYXJrZXJzOiB0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIF9hbmltYXRpb25VbnNwaWRlcmZ5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGlzLl9ub2FuaW1hdGlvblVuc3BpZGVyZnkoKTtcbiAgICAgICAgfVxuICAgICAgfSksIEwuTWFya2VyQ2x1c3Rlci5pbmNsdWRlKHtcbiAgICAgICAgX2FuaW1hdGlvblNwaWRlcmZ5OiBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgdmFyIGkgPSB0aGlzLCBuID0gdGhpcy5fZ3JvdXAsIHIgPSBuLl9tYXAsIG8gPSBuLl9mZWF0dXJlR3JvdXAsIHMgPSB0aGlzLl9sYXRsbmcsIHUgPSByLmxhdExuZ1RvTGF5ZXJQb2ludChzKSwgYSA9IEwuUGF0aC5TVkcsIF8gPSBMLmV4dGVuZCh7fSwgdGhpcy5fZ3JvdXAub3B0aW9ucy5zcGlkZXJMZWdQb2x5bGluZU9wdGlvbnMpLCBmID0gXy5vcGFjaXR5LCBnLCBjLCBtLCB5LCBNLCBDO1xuICAgICAgICAgIGZvciAoZiA9PT0gdm9pZCAwICYmIChmID0gTC5NYXJrZXJDbHVzdGVyR3JvdXAucHJvdG90eXBlLm9wdGlvbnMuc3BpZGVyTGVnUG9seWxpbmVPcHRpb25zLm9wYWNpdHkpLCBhID8gKF8ub3BhY2l0eSA9IDAsIF8uY2xhc3NOYW1lID0gKF8uY2xhc3NOYW1lIHx8IFwiXCIpICsgXCIgbGVhZmxldC1jbHVzdGVyLXNwaWRlci1sZWdcIikgOiBfLm9wYWNpdHkgPSBmLCBuLl9pZ25vcmVNb3ZlID0gITAsIGcgPSAwOyBnIDwgdC5sZW5ndGg7IGcrKylcbiAgICAgICAgICAgIGMgPSB0W2ddLCBDID0gci5sYXllclBvaW50VG9MYXRMbmcoZVtnXSksIG0gPSBuZXcgTC5Qb2x5bGluZShbcywgQ10sIF8pLCByLmFkZExheWVyKG0pLCBjLl9zcGlkZXJMZWcgPSBtLCBhICYmICh5ID0gbS5fcGF0aCwgTSA9IHkuZ2V0VG90YWxMZW5ndGgoKSArIDAuMSwgeS5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBNLCB5LnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBNKSwgYy5zZXRaSW5kZXhPZmZzZXQgJiYgYy5zZXRaSW5kZXhPZmZzZXQoMWU2KSwgYy5jbHVzdGVySGlkZSAmJiBjLmNsdXN0ZXJIaWRlKCksIG8uYWRkTGF5ZXIoYyksIGMuX3NldFBvcyAmJiBjLl9zZXRQb3ModSk7XG4gICAgICAgICAgZm9yIChuLl9mb3JjZUxheW91dCgpLCBuLl9hbmltYXRpb25TdGFydCgpLCBnID0gdC5sZW5ndGggLSAxOyBnID49IDA7IGctLSlcbiAgICAgICAgICAgIEMgPSByLmxheWVyUG9pbnRUb0xhdExuZyhlW2ddKSwgYyA9IHRbZ10sIGMuX3ByZVNwaWRlcmZ5TGF0bG5nID0gYy5fbGF0bG5nLCBjLnNldExhdExuZyhDKSwgYy5jbHVzdGVyU2hvdyAmJiBjLmNsdXN0ZXJTaG93KCksIGEgJiYgKG0gPSBjLl9zcGlkZXJMZWcsIHkgPSBtLl9wYXRoLCB5LnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSAwLCBtLnNldFN0eWxlKHsgb3BhY2l0eTogZiB9KSk7XG4gICAgICAgICAgdGhpcy5zZXRPcGFjaXR5KDAuMyksIG4uX2lnbm9yZU1vdmUgPSAhMSwgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG4uX2FuaW1hdGlvbkVuZCgpLCBuLmZpcmUoXCJzcGlkZXJmaWVkXCIsIHtcbiAgICAgICAgICAgICAgY2x1c3RlcjogaSxcbiAgICAgICAgICAgICAgbWFya2VyczogdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgX2FuaW1hdGlvblVuc3BpZGVyZnk6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICB2YXIgZSA9IHRoaXMsIGkgPSB0aGlzLl9ncm91cCwgbiA9IGkuX21hcCwgciA9IGkuX2ZlYXR1cmVHcm91cCwgbyA9IHQgPyBuLl9sYXRMbmdUb05ld0xheWVyUG9pbnQodGhpcy5fbGF0bG5nLCB0Lnpvb20sIHQuY2VudGVyKSA6IG4ubGF0TG5nVG9MYXllclBvaW50KHRoaXMuX2xhdGxuZyksIHMgPSB0aGlzLmdldEFsbENoaWxkTWFya2VycyhudWxsLCAhMCksIHUgPSBMLlBhdGguU1ZHLCBhLCBfLCBmLCBnLCBjLCBtO1xuICAgICAgICAgIGZvciAoaS5faWdub3JlTW92ZSA9ICEwLCBpLl9hbmltYXRpb25TdGFydCgpLCB0aGlzLnNldE9wYWNpdHkoMSksIF8gPSBzLmxlbmd0aCAtIDE7IF8gPj0gMDsgXy0tKVxuICAgICAgICAgICAgYSA9IHNbX10sIGEuX3ByZVNwaWRlcmZ5TGF0bG5nICYmIChhLmNsb3NlUG9wdXAoKSwgYS5zZXRMYXRMbmcoYS5fcHJlU3BpZGVyZnlMYXRsbmcpLCBkZWxldGUgYS5fcHJlU3BpZGVyZnlMYXRsbmcsIG0gPSAhMCwgYS5fc2V0UG9zICYmIChhLl9zZXRQb3MobyksIG0gPSAhMSksIGEuY2x1c3RlckhpZGUgJiYgKGEuY2x1c3RlckhpZGUoKSwgbSA9ICExKSwgbSAmJiByLnJlbW92ZUxheWVyKGEpLCB1ICYmIChmID0gYS5fc3BpZGVyTGVnLCBnID0gZi5fcGF0aCwgYyA9IGcuZ2V0VG90YWxMZW5ndGgoKSArIDAuMSwgZy5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gYywgZi5zZXRTdHlsZSh7IG9wYWNpdHk6IDAgfSkpKTtcbiAgICAgICAgICBpLl9pZ25vcmVNb3ZlID0gITEsIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgeSA9IDA7XG4gICAgICAgICAgICBmb3IgKF8gPSBzLmxlbmd0aCAtIDE7IF8gPj0gMDsgXy0tKVxuICAgICAgICAgICAgICBhID0gc1tfXSwgYS5fc3BpZGVyTGVnICYmIHkrKztcbiAgICAgICAgICAgIGZvciAoXyA9IHMubGVuZ3RoIC0gMTsgXyA+PSAwOyBfLS0pXG4gICAgICAgICAgICAgIGEgPSBzW19dLCBhLl9zcGlkZXJMZWcgJiYgKGEuY2x1c3RlclNob3cgJiYgYS5jbHVzdGVyU2hvdygpLCBhLnNldFpJbmRleE9mZnNldCAmJiBhLnNldFpJbmRleE9mZnNldCgwKSwgeSA+IDEgJiYgci5yZW1vdmVMYXllcihhKSwgbi5yZW1vdmVMYXllcihhLl9zcGlkZXJMZWcpLCBkZWxldGUgYS5fc3BpZGVyTGVnKTtcbiAgICAgICAgICAgIGkuX2FuaW1hdGlvbkVuZCgpLCBpLmZpcmUoXCJ1bnNwaWRlcmZpZWRcIiwge1xuICAgICAgICAgICAgICBjbHVzdGVyOiBlLFxuICAgICAgICAgICAgICBtYXJrZXJzOiBzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9XG4gICAgICB9KSwgTC5NYXJrZXJDbHVzdGVyR3JvdXAuaW5jbHVkZSh7XG4gICAgICAgIC8vVGhlIE1hcmtlckNsdXN0ZXIgY3VycmVudGx5IHNwaWRlcmZpZWQgKGlmIGFueSlcbiAgICAgICAgX3NwaWRlcmZpZWQ6IG51bGwsXG4gICAgICAgIHVuc3BpZGVyZnk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMuX3Vuc3BpZGVyZnkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgX3NwaWRlcmZpZXJPbkFkZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5fbWFwLm9uKFwiY2xpY2tcIiwgdGhpcy5fdW5zcGlkZXJmeVdyYXBwZXIsIHRoaXMpLCB0aGlzLl9tYXAub3B0aW9ucy56b29tQW5pbWF0aW9uICYmIHRoaXMuX21hcC5vbihcInpvb21zdGFydFwiLCB0aGlzLl91bnNwaWRlcmZ5Wm9vbVN0YXJ0LCB0aGlzKSwgdGhpcy5fbWFwLm9uKFwiem9vbWVuZFwiLCB0aGlzLl9ub2FuaW1hdGlvblVuc3BpZGVyZnksIHRoaXMpLCBMLkJyb3dzZXIudG91Y2ggfHwgdGhpcy5fbWFwLmdldFJlbmRlcmVyKHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICBfc3BpZGVyZmllck9uUmVtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGlzLl9tYXAub2ZmKFwiY2xpY2tcIiwgdGhpcy5fdW5zcGlkZXJmeVdyYXBwZXIsIHRoaXMpLCB0aGlzLl9tYXAub2ZmKFwiem9vbXN0YXJ0XCIsIHRoaXMuX3Vuc3BpZGVyZnlab29tU3RhcnQsIHRoaXMpLCB0aGlzLl9tYXAub2ZmKFwiem9vbWFuaW1cIiwgdGhpcy5fdW5zcGlkZXJmeVpvb21BbmltLCB0aGlzKSwgdGhpcy5fbWFwLm9mZihcInpvb21lbmRcIiwgdGhpcy5fbm9hbmltYXRpb25VbnNwaWRlcmZ5LCB0aGlzKSwgdGhpcy5fbm9hbmltYXRpb25VbnNwaWRlcmZ5KCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vT24gem9vbSBzdGFydCB3ZSBhZGQgYSB6b29tYW5pbSBoYW5kbGVyIHNvIHRoYXQgd2UgYXJlIGd1YXJhbnRlZWQgdG8gYmUgbGFzdCAoYWZ0ZXIgbWFya2VycyBhcmUgYW5pbWF0ZWQpXG4gICAgICAgIC8vVGhpcyBtZWFucyB3ZSBjYW4gZGVmaW5lIHRoZSBhbmltYXRpb24gdGhleSBkbyByYXRoZXIgdGhhbiBNYXJrZXJzIGRvaW5nIGFuIGFuaW1hdGlvbiB0byB0aGVpciBhY3R1YWwgbG9jYXRpb25cbiAgICAgICAgX3Vuc3BpZGVyZnlab29tU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMuX21hcCAmJiB0aGlzLl9tYXAub24oXCJ6b29tYW5pbVwiLCB0aGlzLl91bnNwaWRlcmZ5Wm9vbUFuaW0sIHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICBfdW5zcGlkZXJmeVpvb21BbmltOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgTC5Eb21VdGlsLmhhc0NsYXNzKHRoaXMuX21hcC5fbWFwUGFuZSwgXCJsZWFmbGV0LXRvdWNoaW5nXCIpIHx8ICh0aGlzLl9tYXAub2ZmKFwiem9vbWFuaW1cIiwgdGhpcy5fdW5zcGlkZXJmeVpvb21BbmltLCB0aGlzKSwgdGhpcy5fdW5zcGlkZXJmeSh0KSk7XG4gICAgICAgIH0sXG4gICAgICAgIF91bnNwaWRlcmZ5V3JhcHBlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5fdW5zcGlkZXJmeSgpO1xuICAgICAgICB9LFxuICAgICAgICBfdW5zcGlkZXJmeTogZnVuY3Rpb24odCkge1xuICAgICAgICAgIHRoaXMuX3NwaWRlcmZpZWQgJiYgdGhpcy5fc3BpZGVyZmllZC51bnNwaWRlcmZ5KHQpO1xuICAgICAgICB9LFxuICAgICAgICBfbm9hbmltYXRpb25VbnNwaWRlcmZ5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGlzLl9zcGlkZXJmaWVkICYmIHRoaXMuX3NwaWRlcmZpZWQuX25vYW5pbWF0aW9uVW5zcGlkZXJmeSgpO1xuICAgICAgICB9LFxuICAgICAgICAvL0lmIHRoZSBnaXZlbiBsYXllciBpcyBjdXJyZW50bHkgYmVpbmcgc3BpZGVyZmllZCB0aGVuIHdlIHVuc3BpZGVyZnkgaXQgc28gaXQgaXNuJ3Qgb24gdGhlIG1hcCBhbnltb3JlIGV0Y1xuICAgICAgICBfdW5zcGlkZXJmeUxheWVyOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgdC5fc3BpZGVyTGVnICYmICh0aGlzLl9mZWF0dXJlR3JvdXAucmVtb3ZlTGF5ZXIodCksIHQuY2x1c3RlclNob3cgJiYgdC5jbHVzdGVyU2hvdygpLCB0LnNldFpJbmRleE9mZnNldCAmJiB0LnNldFpJbmRleE9mZnNldCgwKSwgdGhpcy5fbWFwLnJlbW92ZUxheWVyKHQuX3NwaWRlckxlZyksIGRlbGV0ZSB0Ll9zcGlkZXJMZWcpO1xuICAgICAgICB9XG4gICAgICB9KSwgTC5NYXJrZXJDbHVzdGVyR3JvdXAuaW5jbHVkZSh7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGVzIHRoZSBpY29uIG9mIGFsbCBjbHVzdGVycyB3aGljaCBhcmUgcGFyZW50cyBvZiB0aGUgZ2l2ZW4gbWFya2VyKHMpLlxuICAgICAgICAgKiBJbiBzaW5nbGVNYXJrZXJNb2RlLCBhbHNvIHVwZGF0ZXMgdGhlIGdpdmVuIG1hcmtlcihzKSBpY29uLlxuICAgICAgICAgKiBAcGFyYW0gbGF5ZXJzIEwuTWFya2VyQ2x1c3Rlckdyb3VwfEwuTGF5ZXJHcm91cHxBcnJheShMLk1hcmtlcil8TWFwKEwuTWFya2VyKXxcbiAgICAgICAgICogTC5NYXJrZXJDbHVzdGVyfEwuTWFya2VyIChvcHRpb25hbCkgbGlzdCBvZiBtYXJrZXJzIChvciBzaW5nbGUgbWFya2VyKSB3aG9zZSBwYXJlbnRcbiAgICAgICAgICogY2x1c3RlcnMgbmVlZCB0byBiZSB1cGRhdGVkLiBJZiBub3QgcHJvdmlkZWQsIHJldHJpZXZlcyBhbGwgY2hpbGQgbWFya2VycyBvZiB0aGlzLlxuICAgICAgICAgKiBAcmV0dXJucyB7TC5NYXJrZXJDbHVzdGVyR3JvdXB9XG4gICAgICAgICAqL1xuICAgICAgICByZWZyZXNoQ2x1c3RlcnM6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICByZXR1cm4gdCA/IHQgaW5zdGFuY2VvZiBMLk1hcmtlckNsdXN0ZXJHcm91cCA/IHQgPSB0Ll90b3BDbHVzdGVyTGV2ZWwuZ2V0QWxsQ2hpbGRNYXJrZXJzKCkgOiB0IGluc3RhbmNlb2YgTC5MYXllckdyb3VwID8gdCA9IHQuX2xheWVycyA6IHQgaW5zdGFuY2VvZiBMLk1hcmtlckNsdXN0ZXIgPyB0ID0gdC5nZXRBbGxDaGlsZE1hcmtlcnMoKSA6IHQgaW5zdGFuY2VvZiBMLk1hcmtlciAmJiAodCA9IFt0XSkgOiB0ID0gdGhpcy5fdG9wQ2x1c3RlckxldmVsLmdldEFsbENoaWxkTWFya2VycygpLCB0aGlzLl9mbGFnUGFyZW50c0ljb25zTmVlZFVwZGF0ZSh0KSwgdGhpcy5fcmVmcmVzaENsdXN0ZXJzSWNvbnMoKSwgdGhpcy5vcHRpb25zLnNpbmdsZU1hcmtlck1vZGUgJiYgdGhpcy5fcmVmcmVzaFNpbmdsZU1hcmtlck1vZGVNYXJrZXJzKHQpLCB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogU2ltcGx5IGZsYWdzIGFsbCBwYXJlbnQgY2x1c3RlcnMgb2YgdGhlIGdpdmVuIG1hcmtlcnMgYXMgaGF2aW5nIGEgXCJkaXJ0eVwiIGljb24uXG4gICAgICAgICAqIEBwYXJhbSBsYXllcnMgQXJyYXkoTC5NYXJrZXIpfE1hcChMLk1hcmtlcikgbGlzdCBvZiBtYXJrZXJzLlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX2ZsYWdQYXJlbnRzSWNvbnNOZWVkVXBkYXRlOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgdmFyIGUsIGk7XG4gICAgICAgICAgZm9yIChlIGluIHQpXG4gICAgICAgICAgICBmb3IgKGkgPSB0W2VdLl9fcGFyZW50OyBpOyApXG4gICAgICAgICAgICAgIGkuX2ljb25OZWVkc1VwZGF0ZSA9ICEwLCBpID0gaS5fX3BhcmVudDtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlLWRyYXdzIHRoZSBpY29uIG9mIHRoZSBzdXBwbGllZCBtYXJrZXJzLlxuICAgICAgICAgKiBUbyBiZSB1c2VkIGluIHNpbmdsZU1hcmtlck1vZGUgb25seS5cbiAgICAgICAgICogQHBhcmFtIGxheWVycyBBcnJheShMLk1hcmtlcil8TWFwKEwuTWFya2VyKSBsaXN0IG9mIG1hcmtlcnMuXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfcmVmcmVzaFNpbmdsZU1hcmtlck1vZGVNYXJrZXJzOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgdmFyIGUsIGk7XG4gICAgICAgICAgZm9yIChlIGluIHQpXG4gICAgICAgICAgICBpID0gdFtlXSwgdGhpcy5oYXNMYXllcihpKSAmJiBpLnNldEljb24odGhpcy5fb3ZlcnJpZGVNYXJrZXJJY29uKGkpKTtcbiAgICAgICAgfVxuICAgICAgfSksIEwuTWFya2VyLmluY2x1ZGUoe1xuICAgICAgICAvKipcbiAgICAgICAgICogVXBkYXRlcyB0aGUgZ2l2ZW4gb3B0aW9ucyBpbiB0aGUgbWFya2VyJ3MgaWNvbiBhbmQgcmVmcmVzaGVzIHRoZSBtYXJrZXIuXG4gICAgICAgICAqIEBwYXJhbSBvcHRpb25zIG1hcCBvYmplY3Qgb2YgaWNvbiBvcHRpb25zLlxuICAgICAgICAgKiBAcGFyYW0gZGlyZWN0bHlSZWZyZXNoQ2x1c3RlcnMgYm9vbGVhbiAob3B0aW9uYWwpIHRydWUgdG8gdHJpZ2dlclxuICAgICAgICAgKiBNQ0cucmVmcmVzaENsdXN0ZXJzT2YoKSByaWdodCBhd2F5IHdpdGggdGhpcyBzaW5nbGUgbWFya2VyLlxuICAgICAgICAgKiBAcmV0dXJucyB7TC5NYXJrZXJ9XG4gICAgICAgICAqL1xuICAgICAgICByZWZyZXNoSWNvbk9wdGlvbnM6IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICB2YXIgaSA9IHRoaXMub3B0aW9ucy5pY29uO1xuICAgICAgICAgIHJldHVybiBMLnNldE9wdGlvbnMoaSwgdCksIHRoaXMuc2V0SWNvbihpKSwgZSAmJiB0aGlzLl9fcGFyZW50ICYmIHRoaXMuX19wYXJlbnQuX2dyb3VwLnJlZnJlc2hDbHVzdGVycyh0aGlzKSwgdGhpcztcbiAgICAgICAgfVxuICAgICAgfSksIGQuTWFya2VyQ2x1c3Rlckdyb3VwID0gcCwgZC5NYXJrZXJDbHVzdGVyID0gdiwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGQsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiAhMCB9KTtcbiAgICB9KTtcbiAgfShrLCBrLmV4cG9ydHMpKSwgay5leHBvcnRzO1xufVxuRSgpO1xuZnVuY3Rpb24gUyhoKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcbiAgcmV0dXJuIFMgPSB0eXBlb2YgU3ltYm9sID09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09IFwic3ltYm9sXCIgPyBmdW5jdGlvbihsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBsO1xuICB9IDogZnVuY3Rpb24obCkge1xuICAgIHJldHVybiBsICYmIHR5cGVvZiBTeW1ib2wgPT0gXCJmdW5jdGlvblwiICYmIGwuY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBsICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBsO1xuICB9LCBTKGgpO1xufVxudmFyIFQgPSBbXCJjaGlsZHJlblwiXTtcbmZ1bmN0aW9uIE8oaCwgbCkge1xuICB2YXIgZCA9IE9iamVjdC5rZXlzKGgpO1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhoKTtcbiAgICBsICYmIChwID0gcC5maWx0ZXIoZnVuY3Rpb24odikge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaCwgdikuZW51bWVyYWJsZTtcbiAgICB9KSksIGQucHVzaC5hcHBseShkLCBwKTtcbiAgfVxuICByZXR1cm4gZDtcbn1cbmZ1bmN0aW9uIHcoaCkge1xuICBmb3IgKHZhciBsID0gMTsgbCA8IGFyZ3VtZW50cy5sZW5ndGg7IGwrKykge1xuICAgIHZhciBkID0gYXJndW1lbnRzW2xdICE9IG51bGwgPyBhcmd1bWVudHNbbF0gOiB7fTtcbiAgICBsICUgMiA/IE8oT2JqZWN0KGQpLCAhMCkuZm9yRWFjaChmdW5jdGlvbihwKSB7XG4gICAgICBqKGgsIHAsIGRbcF0pO1xuICAgIH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhoLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhkKSkgOiBPKE9iamVjdChkKSkuZm9yRWFjaChmdW5jdGlvbihwKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaCwgcCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkLCBwKSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGg7XG59XG5mdW5jdGlvbiBqKGgsIGwsIGQpIHtcbiAgcmV0dXJuIChsID0gQShsKSkgaW4gaCA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShoLCBsLCB7XG4gICAgdmFsdWU6IGQsXG4gICAgZW51bWVyYWJsZTogITAsXG4gICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICB3cml0YWJsZTogITBcbiAgfSkgOiBoW2xdID0gZCwgaDtcbn1cbmZ1bmN0aW9uIEEoaCkge1xuICB2YXIgbCA9IFUoaCwgXCJzdHJpbmdcIik7XG4gIHJldHVybiBTKGwpID09IFwic3ltYm9sXCIgPyBsIDogbCArIFwiXCI7XG59XG5mdW5jdGlvbiBVKGgsIGwpIHtcbiAgaWYgKFMoaCkgIT0gXCJvYmplY3RcIiB8fCAhaCkgcmV0dXJuIGg7XG4gIHZhciBkID0gaFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAoZCAhPT0gdm9pZCAwKSB7XG4gICAgdmFyIHAgPSBkLmNhbGwoaCwgbCk7XG4gICAgaWYgKFMocCkgIT0gXCJvYmplY3RcIikgcmV0dXJuIHA7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAobCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaCk7XG59XG5mdW5jdGlvbiB4KGgsIGwpIHtcbiAgcmV0dXJuIEQoaCkgfHwgSChoLCBsKSB8fCB6KGgsIGwpIHx8IE4oKTtcbn1cbmZ1bmN0aW9uIE4oKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgYEludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuYFxuICApO1xufVxuZnVuY3Rpb24geihoLCBsKSB7XG4gIGlmIChoKSB7XG4gICAgaWYgKHR5cGVvZiBoID09IFwic3RyaW5nXCIpIHJldHVybiBHKGgsIGwpO1xuICAgIHZhciBkID0ge30udG9TdHJpbmcuY2FsbChoKS5zbGljZSg4LCAtMSk7XG4gICAgcmV0dXJuIGQgPT09IFwiT2JqZWN0XCIgJiYgaC5jb25zdHJ1Y3RvciAmJiAoZCA9IGguY29uc3RydWN0b3IubmFtZSksIGQgPT09IFwiTWFwXCIgfHwgZCA9PT0gXCJTZXRcIiA/IEFycmF5LmZyb20oaCkgOiBkID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KGQpID8gRyhoLCBsKSA6IHZvaWQgMDtcbiAgfVxufVxuZnVuY3Rpb24gRyhoLCBsKSB7XG4gIChsID09IG51bGwgfHwgbCA+IGgubGVuZ3RoKSAmJiAobCA9IGgubGVuZ3RoKTtcbiAgZm9yICh2YXIgZCA9IDAsIHAgPSBBcnJheShsKTsgZCA8IGw7IGQrKykgcFtkXSA9IGhbZF07XG4gIHJldHVybiBwO1xufVxuZnVuY3Rpb24gSChoLCBsKSB7XG4gIHZhciBkID0gaCA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgPCBcInVcIiAmJiBoW1N5bWJvbC5pdGVyYXRvcl0gfHwgaFtcIkBAaXRlcmF0b3JcIl07XG4gIGlmIChkICE9IG51bGwpIHtcbiAgICB2YXIgcCwgdiwgdCwgZSwgaSA9IFtdLCBuID0gITAsIHIgPSAhMTtcbiAgICB0cnkge1xuICAgICAgaWYgKHQgPSAoZCA9IGQuY2FsbChoKSkubmV4dCwgbCAhPT0gMCkgZm9yICg7ICEobiA9IChwID0gdC5jYWxsKGQpKS5kb25lKSAmJiAoaS5wdXNoKHAudmFsdWUpLCBpLmxlbmd0aCAhPT0gbCk7IG4gPSAhMCkgO1xuICAgIH0gY2F0Y2ggKG8pIHtcbiAgICAgIHIgPSAhMCwgdiA9IG87XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghbiAmJiBkLnJldHVybiAhPSBudWxsICYmIChlID0gZC5yZXR1cm4oKSwgT2JqZWN0KGUpICE9PSBlKSlcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAocikgdGhyb3cgdjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGk7XG4gIH1cbn1cbmZ1bmN0aW9uIEQoaCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShoKSkgcmV0dXJuIGg7XG59XG5mdW5jdGlvbiBSKGgsIGwpIHtcbiAgaWYgKGggPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgZCwgcCwgdiA9IEYoaCwgbCk7XG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGgpO1xuICAgIGZvciAocCA9IDA7IHAgPCB0Lmxlbmd0aDsgcCsrKVxuICAgICAgZCA9IHRbcF0sIGwuaW5jbHVkZXMoZCkgfHwge30ucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChoLCBkKSAmJiAodltkXSA9IGhbZF0pO1xuICB9XG4gIHJldHVybiB2O1xufVxuZnVuY3Rpb24gRihoLCBsKSB7XG4gIGlmIChoID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIGQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBoKVxuICAgIGlmICh7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGgsIHApKSB7XG4gICAgICBpZiAobC5pbmNsdWRlcyhwKSkgY29udGludWU7XG4gICAgICBkW3BdID0gaFtwXTtcbiAgICB9XG4gIHJldHVybiBkO1xufVxuUC5NYXJrZXJDbHVzdGVyR3JvdXAuaW5jbHVkZSh7XG4gIF9mbHVzaExheWVyQnVmZmVyOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFkZExheWVycyh0aGlzLl9sYXllckJ1ZmZlciksIHRoaXMuX2xheWVyQnVmZmVyID0gW107XG4gIH0sXG4gIGFkZExheWVyOiBmdW5jdGlvbihsKSB7XG4gICAgdGhpcy5fbGF5ZXJCdWZmZXIubGVuZ3RoID09PSAwICYmIHNldFRpbWVvdXQodGhpcy5fZmx1c2hMYXllckJ1ZmZlci5iaW5kKHRoaXMpLCA1MCksIHRoaXMuX2xheWVyQnVmZmVyLnB1c2gobCk7XG4gIH1cbn0pO1xuUC5NYXJrZXJDbHVzdGVyR3JvdXAuYWRkSW5pdEhvb2soZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2xheWVyQnVmZmVyID0gW107XG59KTtcbmZ1bmN0aW9uIFYoaCwgbCkge1xuICBoLmNoaWxkcmVuO1xuICB2YXIgZCA9IFIoaCwgVCksIHAgPSB7fSwgdiA9IHt9O1xuICBPYmplY3QuZW50cmllcyhkKS5mb3JFYWNoKGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgaSA9IHgoZSwgMiksIG4gPSBpWzBdLCByID0gaVsxXTtcbiAgICByZXR1cm4gbi5zdGFydHNXaXRoKFwib25cIikgPyB2W25dID0gciA6IHBbbl0gPSByO1xuICB9KTtcbiAgdmFyIHQgPSBuZXcgUC5NYXJrZXJDbHVzdGVyR3JvdXAocCk7XG4gIHJldHVybiBPYmplY3QuZW50cmllcyh2KS5mb3JFYWNoKGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgaSA9IHgoZSwgMiksIG4gPSBpWzBdLCByID0gaVsxXSwgbyA9IFwiY2x1c3RlclwiLmNvbmNhdChuLnN1YnN0cmluZygyKS50b0xvd2VyQ2FzZSgpKTtcbiAgICB0Lm9uKG8sIHIpO1xuICB9KSwge1xuICAgIGluc3RhbmNlOiB0LFxuICAgIGNvbnRleHQ6IHcoXG4gICAgICB3KHt9LCBsKSxcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICBsYXllckNvbnRhaW5lcjogdFxuICAgICAgfVxuICAgIClcbiAgfTtcbn1cbnZhciBXID0gQihWKTtcbmV4cG9ydCB7XG4gIFcgYXMgZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LUQzcnA2b19tLmpzLm1hcFxuIl0sIm5hbWVzIjpbIlAiLCJCIl0sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSSxJQUFJLEVBQUUsU0FBUyxDQUFBLEVBQUUsR0FBSSxJQUFJLEVBQUUsU0FBUztBQUN4QyxTQUFTLElBQUk7QUFDWCxTQUFPLE1BQU0sSUFBSSxJQUFHLFNBQVMsR0FBRyxHQUFHO0FBQ2pDLEtBQUMsU0FBUyxHQUFHLEdBQUc7QUFDZCxRQUFFLENBQUM7QUFBQSxJQUNMLEdBQUcsR0FBRyxTQUFTLEdBQUc7QUFDaEIsVUFBSSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsYUFBYSxPQUFPO0FBQUEsUUFDbkQsU0FBUztBQUFBLFVBQ1Asa0JBQWtC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
