import { n as nt, r as reactExports } from "./embeddable-entry-point-DfzYO-OW.js";
/*!
 * mergician
 * v2.0.2
 * https://jhildenbiddle.github.io/mergician/
 * (c) 2022-2024 John Hildenbiddle
 * MIT license
 */
function countOccurrences(...arrays) {
  const countObj = {};
  arrays.forEach((array) => {
    array.forEach((v) => {
      countObj[v] = v in countObj ? ++countObj[v] : 1;
    });
  });
  return countObj;
}
function getInAll(...arrays) {
  return arrays.reduce(
    (acc, curr) => acc.filter(Set.prototype.has, new Set(curr))
  );
}
function getInMultiple(...arrays) {
  const countObj = countOccurrences(...arrays);
  return Object.keys(countObj).filter((v) => countObj[v] > 1);
}
function getNotInAll(...arrays) {
  const countObj = countOccurrences(...arrays);
  return Object.keys(countObj).filter((v) => countObj[v] < arrays.length);
}
function getNotInMultiple(...arrays) {
  const countObj = countOccurrences(...arrays);
  return Object.keys(countObj).filter((v) => countObj[v] === 1);
}
function getObjectKeys(obj, hoistEnumerable = false) {
  const keys = Object.getOwnPropertyNames(obj);
  if (hoistEnumerable) {
    for (const key in obj) {
      !keys.includes(key) && keys.push(key);
    }
  }
  return keys;
}
function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isPropDescriptor(obj) {
  if (!isObject(obj)) {
    return false;
  }
  const hasFlagKey = ["writable", "enumerable", "configurable"].some(
    (key) => key in obj
  );
  const hasMethod = ["get", "set"].some((key) => typeof obj[key] === "function");
  const hasMethodKeys = ["get", "set"].every((key) => key in obj);
  let isDescriptor = "value" in obj && hasFlagKey || hasMethod && (hasMethodKeys || hasFlagKey);
  if (isDescriptor) {
    const validKeys = [
      "configurable",
      "get",
      "set",
      "enumerable",
      "value",
      "writable"
    ];
    isDescriptor = Object.keys(obj).some((key) => !(key in validKeys));
  }
  return isDescriptor;
}
/**
 * @typedef {Object} MergicianOptions
 * @property {string[]} [onlyKeys] - Exclusive array of keys to be merged
 * (others are skipped)
 * @property {string[]} [skipKeys] - Array of keys to skip (others are
 * merged)
 * @property {boolean} [onlyCommonKeys=false] - Merge only keys found
 * in multiple objects (ignore single occurrence keys)
 * @property {boolean} [onlyUniversalKeys=false] - Merge only keys
 * found in all objects
 * @property {boolean} [skipCommonKeys=false] - Skip keys found in
 * multiple objects (merge only single occurrence keys)
 * @property {boolean} [skipUniversalKeys=false] - Skip keys found in
 * all objects (merge only common keys)
 * @property {boolean} [invokeGetters=false] - Invoke "getter" methods
 * and merge returned values
 * @property {boolean} [skipSetters=false] - Skip "setter" methods
 * during merge
 * @property {boolean} [appendArrays=false] - Merge array values at
 * the end of existing arrays
 * @property {boolean} [prependArrays=false] - Merge array values at
 * the beginning of existing arrays
 * @property {boolean} [dedupArrays=false] - Remove duplicate array
 * values in new merged object
 * @property {boolean|function} [sortArrays=false] - Sort array values
 * in new merged object
 * @property {boolean} [hoistEnumerable=false] - Merge enumerable
 * prototype properties as direct properties of merged object
 * @property {boolean} [hoistProto=false] - Merge custom prototype
 * properties as direct properties of merged object
 * @property {boolean} [skipProto=false] - Skip merging of custom
 * prototype properties
 * @property {filterCallback} [filter] - Callback used to conditionally merge
 * or skip a property. Return a "truthy" value to merge or a "falsy" value to
 * skip. Return no value to proceed according to other option values.
 * @property {beforeEachCallback} [beforeEach] - Callback used for
 * inspecting/modifying properties before merge. Return value is used as value
 * to merge.
 * @property {afterEachCallback} [afterEach] - Callback used for
 * inspecting/modifying properties after merge. Return value is used as merged
 * value.
 * @property {onCircularCallback} [onCircular] - Callback used for handling
 * circular object references during merge
 * @preserve
 */
/**
 * @callback filterCallback
 * @param {callbackData} callbackData
 * @preserve
 */
/**
 * @callback beforeEachCallback
 * @param {callbackData} callbackData
 * @preserve
 */
/**
 * @callback afterEachCallback
 * @param {afterEachCallbackData} callbackData
 * @preserve
 */
/**
 * @callback onCircularCallback
 * @param {callbackData} callbackData
 * @preserve
 */
/**
 * @typedef {Object} callbackData
 * @property {number} depth - Nesting level of the key being processed
 * @property {string} key - Object key being processed
 * @property {object} srcObj - Object containing the source value
 * @property {any} srcVal - Source object’s property value
 * @property {object} targetObj - New merged object
 * @property {any} targetVal - New merged object’s current property value
 * @preserve
 */
/**
 * @typedef {Object} afterEachCallbackData
 * @property {number} depth - Nesting level of the key being processed
 * @property {string} key - Object key being processed
 * @property {any} mergeVal - New merged value
 * @property {object} srcObj - Object containing the source value
 * @property {object} targetObj - New merged object
 * @preserve
 */
var defaults = {
  // Keys
  onlyKeys: [],
  skipKeys: [],
  onlyCommonKeys: false,
  onlyUniversalKeys: false,
  skipCommonKeys: false,
  skipUniversalKeys: false,
  // Values
  invokeGetters: false,
  skipSetters: false,
  // Arrays
  appendArrays: false,
  prependArrays: false,
  dedupArrays: false,
  sortArrays: false,
  // Prototype
  hoistEnumerable: false,
  hoistProto: false,
  skipProto: false,
  // Callbacks
  filter: Function.prototype,
  beforeEach: Function.prototype,
  afterEach: Function.prototype,
  onCircular: Function.prototype
};
/**
 * @description Deep (recursive) object merging with support for descriptor
 * values, accessor functions, custom prototypes, and advanced options for
 * customizing the merge process.
 *
 * @example
 * // Custom merge options
 * const mergedObj = mergician({
 *   // Options
 * })(obj1, obj2, obj3);
 *
 * // Custom merge function
 * const customMerge = mergician({
 *   // Options
 * });
 * const customMergeObj = customMerge(obj1, obj2, obj3);
 *
 * @overload
 * @param {MergicianOptions} options
 * @returns {function} New merge function with options set as defaults
 * @preserve
 */
/**
 * @description Deep (recursive) object merging with support for descriptor
 * values, accessor functions, custom prototypes, and advanced options for
 * customizing the merge process.
 *
 * @example
 * // Clone with default options
 * const clonedObj = mergician({}, obj1);
 *
 * // Merge with default options
 * const mergedObj = mergician(obj1, obj2, obj3);
 *
 * @overload
 * @param {...object} objects
 * @returns {object} New merged object
 * @preserve
 */
/**
 * @description Deep (recursive) object merging with support for descriptor
 * values, accessor functions, custom prototypes, and advanced options for
 * customizing the merge process.
 *
 * @example
 * // Clone with default options
 * const clonedObj = mergician({}, obj1);
 *
 * // Merge with default options
 * const mergedObj = mergician(obj1, obj2, obj3);
 *
 * @example
 * // Custom merge options
 * const mergedObj = mergician({
 *   // Options
 * })(obj1, obj2, obj3);
 *
 * // Custom merge function
 * const customMerge = mergician({
 *   // Options
 * });
 * const customMergeObj = customMerge(obj1, obj2, obj3);
 *
 * @param {MergicianOptions} optionsOrObject
 * @param {...object} [objects]
 * @returns {function|object} New merge function with options set as defaults
 * (single argument) or new merged object (multiple arguments)
 * @preserve
 */
function mergician(optionsOrObject, ...objects) {
  const options = arguments.length === 1 ? arguments[0] : {};
  const settings = { ...defaults, ...options };
  const dedupArrayMap = /* @__PURE__ */ new Map();
  const sortArrayMap = /* @__PURE__ */ new Map();
  const sortArrayFn = typeof settings.sortArrays === "function" ? settings.sortArrays : void 0;
  const circularRefs = /* @__PURE__ */ new WeakMap();
  let mergeDepth = 0;
  function _getObjectKeys(obj) {
    return getObjectKeys(obj, settings.hoistEnumerable);
  }
  function _mergician(...objects2) {
    let mergeKeyList;
    if (objects2.length > 1) {
      if (settings.onlyCommonKeys) {
        mergeKeyList = getInMultiple(
          ...objects2.map((obj) => _getObjectKeys(obj))
        );
      } else if (settings.onlyUniversalKeys) {
        mergeKeyList = getInAll(...objects2.map((obj) => _getObjectKeys(obj)));
      } else if (settings.skipCommonKeys) {
        mergeKeyList = getNotInMultiple(
          ...objects2.map((obj) => _getObjectKeys(obj))
        );
      } else if (settings.skipUniversalKeys) {
        mergeKeyList = getNotInAll(...objects2.map((obj) => _getObjectKeys(obj)));
      }
    }
    if (!mergeKeyList && settings.onlyKeys.length) {
      mergeKeyList = settings.onlyKeys;
    }
    if (mergeKeyList && mergeKeyList !== settings.onlyKeys && settings.onlyKeys.length) {
      mergeKeyList = mergeKeyList.filter(
        (key) => settings.onlyKeys.includes(key)
      );
    }
    const newObjProps = objects2.reduce((targetObj, srcObj) => {
      circularRefs.set(srcObj, targetObj);
      let keys = mergeKeyList || _getObjectKeys(srcObj);
      if (settings.skipKeys.length) {
        keys = keys.filter((key) => settings.skipKeys.indexOf(key) === -1);
      }
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const targetVal = targetObj[key];
        const mergeDescriptor = {
          configurable: true,
          enumerable: true
        };
        if (key in srcObj === false) {
          continue;
        }
        let isReturnVal = false;
        let mergeVal = srcObj[key];
        const srcDescriptor = Object.getOwnPropertyDescriptor(srcObj, key);
        const isSetterOnly = srcDescriptor && typeof srcDescriptor.set === "function" && typeof srcDescriptor.get !== "function";
        if (isSetterOnly) {
          if (!settings.skipSetters) {
            Object.defineProperty(targetObj, key, srcDescriptor);
          }
          continue;
        }
        if (settings.filter !== defaults.filter) {
          const returnVal = settings.filter({
            depth: mergeDepth,
            key,
            srcObj,
            srcVal: mergeVal,
            targetObj,
            targetVal
          });
          if (returnVal !== void 0 && !returnVal) {
            continue;
          }
        }
        if (settings.beforeEach !== defaults.beforeEach) {
          const returnVal = settings.beforeEach({
            depth: mergeDepth,
            key,
            srcObj,
            srcVal: mergeVal,
            targetObj,
            targetVal
          });
          if (returnVal !== void 0) {
            isReturnVal = true;
            mergeVal = returnVal;
          }
        }
        if (typeof mergeVal === "object" && mergeVal !== null) {
          if (circularRefs.has(srcObj[key])) {
            const returnVal = settings.onCircular({
              depth: mergeDepth,
              key,
              srcObj,
              srcVal: srcObj[key],
              targetObj,
              targetVal
            });
            if (returnVal === void 0) {
              mergeVal = circularRefs.get(srcObj[key]);
              targetObj[key] = mergeVal;
              continue;
            }
            isReturnVal = true;
            mergeVal = returnVal;
          }
        }
        if (Array.isArray(mergeVal)) {
          mergeVal = [...mergeVal];
          if (Array.isArray(targetVal)) {
            if (settings.appendArrays) {
              mergeVal = [...targetVal, ...mergeVal];
            } else if (settings.prependArrays) {
              mergeVal = [...mergeVal, ...targetVal];
            }
          }
          if (settings.dedupArrays) {
            if (settings.afterEach !== defaults.afterEach) {
              mergeVal = [...new Set(mergeVal)];
            } else {
              const keyArray = dedupArrayMap.get(targetObj);
              if (keyArray && !keyArray.includes(key)) {
                keyArray.push(key);
              } else {
                dedupArrayMap.set(targetObj, [key]);
              }
            }
          }
          if (settings.sortArrays) {
            if (settings.afterEach !== defaults.afterEach) {
              mergeVal = mergeVal.sort(sortArrayFn);
            } else {
              const keyArray = sortArrayMap.get(targetObj);
              if (keyArray && !keyArray.includes(key)) {
                keyArray.push(key);
              } else {
                sortArrayMap.set(targetObj, [key]);
              }
            }
          }
        } else if (mergeVal instanceof Date) {
          mergeVal = new Date(mergeVal);
        } else if (isObject(mergeVal) && (!isReturnVal || !isPropDescriptor(mergeVal))) {
          mergeDepth++;
          if (isObject(targetVal)) {
            mergeVal = _mergician(targetVal, mergeVal);
          } else {
            mergeVal = _mergician(mergeVal);
          }
          mergeDepth--;
        }
        if (settings.afterEach !== defaults.afterEach) {
          const returnVal = settings.afterEach({
            depth: mergeDepth,
            key,
            mergeVal,
            srcObj,
            targetObj
          });
          if (returnVal !== void 0) {
            isReturnVal = true;
            mergeVal = returnVal;
          }
        }
        if (isReturnVal) {
          const returnDescriptor = isPropDescriptor(mergeVal) ? mergeVal : {
            configurable: true,
            enumerable: true,
            value: mergeVal,
            writable: true
          };
          Object.defineProperty(targetObj, key, returnDescriptor);
          continue;
        }
        if (srcDescriptor) {
          const { configurable, enumerable, get, set, writable } = srcDescriptor;
          Object.assign(mergeDescriptor, {
            configurable,
            enumerable
          });
          if (typeof get === "function") {
            if (settings.invokeGetters) {
              mergeDescriptor.value = mergeVal;
            } else {
              mergeDescriptor.get = get;
            }
          }
          if (!settings.skipSetters && typeof set === "function" && !Object.hasOwnProperty.call(mergeDescriptor, "value")) {
            mergeDescriptor.set = set;
          }
          if (!mergeDescriptor.get && !mergeDescriptor.set) {
            mergeDescriptor.writable = Boolean(writable);
          }
        }
        if (!mergeDescriptor.get && !mergeDescriptor.set && !("value" in mergeDescriptor)) {
          mergeDescriptor.value = mergeVal;
          mergeDescriptor.writable = srcDescriptor && "writable" in srcDescriptor ? srcDescriptor.writable : true;
        }
        Object.defineProperty(targetObj, key, mergeDescriptor);
      }
      return targetObj;
    }, {});
    for (const [obj, keyArray] of dedupArrayMap.entries()) {
      for (const key of keyArray) {
        const propDescriptor = Object.getOwnPropertyDescriptor(obj, key);
        const { configurable, enumerable, writable } = propDescriptor;
        Object.defineProperty(obj, key, {
          configurable,
          enumerable,
          value: [...new Set(obj[key])],
          writable: writable !== void 0 ? writable : true
        });
      }
    }
    for (const [obj, keyArray] of sortArrayMap.entries()) {
      for (const key of keyArray) {
        obj[key].sort(sortArrayFn);
      }
    }
    let newObj = newObjProps;
    if (!settings.skipProto) {
      const customProtos = objects2.reduce((protosArr, obj) => {
        const proto = Object.getPrototypeOf(obj);
        if (proto && proto !== Object.prototype) {
          protosArr.push(proto);
        }
        return protosArr;
      }, []);
      if (customProtos.length) {
        const newObjProto = _mergician(...customProtos);
        if (settings.hoistProto) {
          newObj = _mergician(newObjProto, newObjProps);
        } else {
          newObj = Object.create(
            newObjProto,
            Object.getOwnPropertyDescriptors(newObjProps)
          );
        }
      }
    }
    return newObj;
  }
  if (arguments.length === 1) {
    return function(...objects2) {
      if (arguments.length === 1) {
        return mergician({ ...settings, ...objects2[0] });
      } else {
        return _mergician(...objects2);
      }
    };
  } else {
    return _mergician(...arguments);
  }
}
const DEFAULT_LOCALE = "en-US";
const normalizeEntities = (entities, { mapFn = (x) => x, filterFn = Boolean }) => {
  if (!entities)
    return void 0;
  const filtered = entities.filter(filterFn);
  if (filtered.length === 0)
    return void 0;
  return filtered.map(mapFn);
};
const getName = (x) => x.name;
const checkTimeDimension = (timeDimension) => Boolean(timeDimension && timeDimension.dimension && (timeDimension.granularity || timeDimension.dateRange));
const validateOrderBy = (orderByParam, dimensions, measures, timeDimensions) => {
  const unknownDimensionsOrMeasures = [];
  const dimensionAndMeasureNames = [
    ...[...measures, ...dimensions].filter(Boolean).map((x) => x.name),
    ...timeDimensions.filter(Boolean).map((x) => x.dimension).filter(Boolean)
  ];
  for (const orderBy of orderByParam) {
    const { name } = orderBy.property;
    if (dimensionAndMeasureNames.includes(name))
      continue;
    unknownDimensionsOrMeasures.push(name);
  }
  return unknownDimensionsOrMeasures;
};
const createBuiltInType = (name, typeConfig = {}) => ({
  __embeddableType: "built-in",
  toString: () => name,
  typeConfig: {
    label: name,
    optionLabel: () => name,
    ...typeConfig
  }
});
const validateFilter = (filter) => {
  if (!filter.property)
    return "filter property must be set";
  if (!filter.operator)
    return "filter operator must be set";
};
const convertFilterValue = (value) => {
  if (value == null || typeof value === "string" || typeof value === "boolean" || typeof value === "number" || value instanceof Date || Array.isArray(value)) {
    return value;
  }
  if (value == null ? void 0 : value.relativeTimeString)
    return value == null ? void 0 : value.relativeTimeString;
  if (Object.hasOwn(value, "date"))
    return value == null ? void 0 : value.date;
  if (Object.hasOwn(value, "from") || Object.hasOwn(value, "to")) {
    const timeRange = value;
    return [timeRange == null ? void 0 : timeRange.from, timeRange == null ? void 0 : timeRange.to].filter(Boolean);
  }
};
function deduplicateEntitiesByName(entities) {
  if (!entities || entities.length === 0)
    return [];
  const seen = /* @__PURE__ */ new Set();
  return entities.filter((entity) => {
    if (seen.has(entity.name)) {
      return false;
    }
    seen.add(entity.name);
    return true;
  });
}
const DIMENSION_TYPE = "dimension";
const MEASURE_TYPE = "measure";
const deepFlattenSelect = (input) => {
  if (Array.isArray(input)) {
    return input.flatMap(deepFlattenSelect);
  }
  return [input];
};
const processSelectParam = (selectParam) => {
  var _a;
  const result = {
    dimensions: [],
    measures: [],
    timeDimensions: []
  };
  if (!selectParam) {
    return result;
  }
  const flat = deepFlattenSelect(selectParam).filter(Boolean);
  if (!flat.length) {
    result.error = "select must not be empty";
    return result;
  }
  for (const ent of flat) {
    const isValidEntity = typeof ent === "object" && (isDimensionOrMeasure(ent) || isTimeDimension(ent));
    if (!isValidEntity) {
      result.error = "select must only contain Dimension, Measure or TimeDimension objects";
      return result;
    }
    if (isTimeDimension(ent)) {
      result.timeDimensions.push(ent);
    } else if (isDimension(ent)) {
      const dimension = ent;
      const granularity = (_a = dimension.inputs) == null ? void 0 : _a.granularity;
      if (dimension.nativeType === "time" && granularity) {
        result.timeDimensions.push({
          dimension: dimension.name,
          granularity,
          title: dimension.title
        });
      } else {
        result.dimensions.push(dimension);
      }
    } else if (isMeasure(ent)) {
      result.measures.push(ent);
    } else {
      const type = "__type__" in ent ? ent.__type__ : typeof ent;
      result.error = `Unknown __type__ in select: ${type}`;
      return result;
    }
  }
  return result;
};
function validateLegacyFields(request) {
  var _a, _b;
  if (((_a = request.measures) == null ? void 0 : _a.length) > 0 && request.measures.some((m) => (m == null ? void 0 : m.__type__) !== MEASURE_TYPE)) {
    return "Unexpected type passed to `measures` in loadData function.  Expected an array of type Measure.";
  }
  if (((_b = request.dimensions) == null ? void 0 : _b.length) > 0 && request.dimensions.some((m) => (m == null ? void 0 : m.__type__) !== DIMENSION_TYPE)) {
    return "Unexpected type passed to `dimensions` in loadData function.  Expected an array of type Dimension.";
  }
  return null;
}
function processApiSelection(request) {
  const result = {
    dimensions: [],
    measures: [],
    timeDimensions: [],
    usingSelect: false
  };
  if (request.select) {
    result.usingSelect = true;
    const selectResult = processSelectParam(request.select);
    if (selectResult.error) {
      result.error = selectResult.error;
      return result;
    }
    result.dimensions = selectResult.dimensions;
    result.measures = selectResult.measures;
    result.timeDimensions = selectResult.timeDimensions;
  } else {
    const legacyError = validateLegacyFields(request);
    if (legacyError) {
      result.error = legacyError;
      return result;
    }
    result.dimensions = normalizeEntities(request.dimensions, { mapFn: (x) => x }) ?? [];
    result.measures = normalizeEntities(request.measures, { mapFn: (x) => x }) ?? [];
    result.timeDimensions = normalizeEntities(request.timeDimensions, { filterFn: Boolean }) ?? [];
  }
  result.dimensions = deduplicateEntitiesByName(result.dimensions);
  result.measures = deduplicateEntitiesByName(result.measures);
  return result;
}
function validateOrderByLogic(orderBy, dimensions, measures, timeDimensions) {
  const unknownDimensionsOrMeasures = validateOrderBy(orderBy ?? [], dimensions, measures, timeDimensions);
  if (unknownDimensionsOrMeasures.length > 0) {
    return `Cannot order by ${unknownDimensionsOrMeasures.join(", ")} as no such ${unknownDimensionsOrMeasures.length === 1 ? "property" : "properties"} has been loaded.`;
  }
  return null;
}
function validateFiltersLogic(filters) {
  if (filters) {
    const errors = filters.map((f, index) => ({
      index,
      message: validateFilter(f)
    })).filter((e) => !!e.message);
    if (errors.length) {
      return errors.map((e) => `filter[${e.index}] is not valid: ${e.message}`).join("\n");
    }
  }
  return null;
}
function buildQueryObject(request, dimensions, measures, timeDimensions, order) {
  var _a;
  return {
    inputName: request.from.inputName,
    datasetId: request.from.datasetId,
    embeddableId: request.from.embeddableId,
    dimensions: normalizeEntities(dimensions, { mapFn: getName }) ?? [],
    measures: normalizeEntities(measures, { mapFn: getName }) ?? [],
    order,
    timeDimensions: normalizeEntities(timeDimensions, { filterFn: checkTimeDimension }) ?? [],
    offset: request.offset,
    limit: request.limit,
    variableValues: request.from.variableValues,
    filters: (_a = request.filters) == null ? void 0 : _a.map((f) => ({
      member: f.property.name,
      operator: f.operator,
      values: convertFilterValue(f.value)
    }))
  };
}
const LOAD_DATA_EVENT = "embeddable-event:load-data";
const FilterOperator = {
  equals: "equals",
  notEquals: "notEquals",
  contains: "contains",
  notContains: "notContains",
  startsWith: "startsWith",
  endsWith: "endsWith",
  gt: "gt",
  gte: "gte",
  lt: "lt",
  lte: "lte",
  notNull: "set",
  isNull: "notSet",
  inDateRange: "inDateRange",
  notInDateRange: "notInDateRange",
  beforeDate: "beforeDate",
  afterDate: "afterDate",
  measureFilter: "measureFilter"
};
const isLoadDataParams = (ldp) => typeof ldp === "object" && ldp && "requestParams" in ldp && "dataLoader" in ldp;
const executeDataRequest = (triggerElement, request, componentId, propertyName) => {
  if (!request.from)
    return "No dataset selected";
  if (request.select && (request.dimensions || request.measures || request.timeDimensions)) {
    return "loadData expects you to use either dimensions, timeDimensions and measures, or select. You cannot use both together.";
  }
  const apiResult = processApiSelection(request);
  if (apiResult.error) {
    return apiResult.error;
  }
  const { dimensions, measures, timeDimensions } = apiResult;
  const dimensionsOrMeasuresDefined = dimensions.length || measures.length || timeDimensions.length;
  if (!dimensionsOrMeasuresDefined) {
    return "At least a dimension or a measure should be selected.";
  }
  const orderByError = validateOrderByLogic(request.orderBy, dimensions, measures, timeDimensions);
  if (orderByError) {
    return orderByError;
  }
  const filterError = validateFiltersLogic(request.filters);
  if (filterError) {
    return filterError;
  }
  const order = normalizeEntities(request.orderBy, {
    mapFn: (o) => [o.property.name, o.direction]
  });
  const query = buildQueryObject(request, dimensions, measures, timeDimensions, order);
  triggerElement.dispatchEvent(new CustomEvent(LOAD_DATA_EVENT, {
    bubbles: true,
    composed: true,
    detail: {
      query,
      componentId,
      propertyName
    }
  }));
};
const loadData = (requestParams) => ({
  requestParams,
  dataLoader: executeDataRequest
});
const isDimension = (dimensionOrMeasure) => (dimensionOrMeasure == null ? void 0 : dimensionOrMeasure.__type__) === DIMENSION_TYPE;
const isMeasure = (dimensionOrMeasure) => (dimensionOrMeasure == null ? void 0 : dimensionOrMeasure.__type__) === MEASURE_TYPE;
const isTimeDimension = (dimensionOrMeasure) => "dimension" in (dimensionOrMeasure ?? {}) && !("__type__" in dimensionOrMeasure);
const isDimensionOrMeasure = (dimensionOrMeasure) => isDimension(dimensionOrMeasure) || isMeasure(dimensionOrMeasure);
const getOperationObject = (operation, value) => ({
  operation,
  value: value ?? null,
  __embeddableVariableMeta: true
});
const Value = {
  noFilter: () => getOperationObject("NO_FILTER"),
  of: (value) => getOperationObject("VALUE", value)
};
const UPDATE_VALUE_EVENT = "embeddable:value:changed";
const setValue = (triggerElement, value, componentId, eventName) => {
  const event = new CustomEvent(UPDATE_VALUE_EVENT, {
    bubbles: true,
    composed: true,
    detail: {
      componentId,
      value,
      eventName
    }
  });
  triggerElement.dispatchEvent(event);
};
const getBundleHash$1 = () => globalThis.__EMBEDDABLE_BUNDLE_HASH__ ?? null;
const defineType = (typeName, typeConfig) => {
  if (ALL_NATIVE_TYPES.includes(typeName)) {
    throw new Error(`Type ${typeName} is part of the nativeTypes and cannot be defined`, { cause: "sdk" });
  }
  const type = {
    __embeddableType: "custom",
    toString: () => typeName,
    typeConfig
  };
  const bundleHash = getBundleHash$1();
  globalThis.__EMBEDDABLE__ = globalThis.__EMBEDDABLE__ || {};
  const embeddable = bundleHash ? globalThis.__EMBEDDABLE__[bundleHash] = globalThis.__EMBEDDABLE__[bundleHash] || {} : globalThis.__EMBEDDABLE__;
  embeddable.types = embeddable.types || {};
  embeddable.types = {
    ...embeddable.types,
    [typeName]: {
      name: typeName,
      ...typeConfig
    }
  };
  return type;
};
const STRING = "string";
const NUMBER = "number";
const BOOLEAN = "boolean";
const TIME = "time";
const TIME_RANGE = "timeRange";
const GRANULARITY = "granularity";
const DATASET = "dataset";
const MEASURE = "measure";
const DIMENSION = "dimension";
const DIMENSION_OR_MEASURE = "dimensionOrMeasure";
const DEFAULT_NATIVE_TYPES = [
  STRING,
  NUMBER,
  BOOLEAN,
  TIME,
  TIME_RANGE,
  GRANULARITY
];
const ALL_NATIVE_TYPES = [
  ...DEFAULT_NATIVE_TYPES,
  DATASET,
  MEASURE,
  DIMENSION,
  DIMENSION_OR_MEASURE
];
const MEASURE_TYPE_STRING = "string";
const MEASURE_TYPE_TIME = "time";
const MEASURE_TYPE_BOOLEAN = "boolean";
const MEASURE_TYPE_NUMBER = "number";
const MEASURE_TYPE_COUNT = "count";
const MEASURE_TYPE_COUNT_DISTINCT = "count_distinct";
const MEASURE_TYPE_COUNT_DISTINCT_APPROX = "count_distinct_approx";
const MEASURE_TYPE_SUM = "sum";
const MEASURE_TYPE_AVG = "avg";
const MEASURE_TYPE_MIN = "min";
const MEASURE_TYPE_MAX = "max";
const MEASURE_TYPES = [
  MEASURE_TYPE_STRING,
  MEASURE_TYPE_TIME,
  MEASURE_TYPE_BOOLEAN,
  MEASURE_TYPE_NUMBER,
  MEASURE_TYPE_COUNT,
  MEASURE_TYPE_COUNT_DISTINCT,
  MEASURE_TYPE_COUNT_DISTINCT_APPROX,
  MEASURE_TYPE_SUM,
  MEASURE_TYPE_AVG,
  MEASURE_TYPE_MIN,
  MEASURE_TYPE_MAX
];
const DIMENSION_TYPE_STRING = "string";
const DIMENSION_TYPE_NUMBER = "number";
const DIMENSION_TYPE_BOOLEAN = "boolean";
const DIMENSION_TYPE_GEO = "geo";
const DIMENSION_TYPE_TIME = "time";
const DIMENSION_TYPES = [
  DIMENSION_TYPE_STRING,
  DIMENSION_TYPE_NUMBER,
  DIMENSION_TYPE_BOOLEAN,
  DIMENSION_TYPE_GEO,
  DIMENSION_TYPE_TIME
];
const DIMENSION_OR_MEASURE_TYPES = [
  ...DIMENSION_TYPES,
  ...MEASURE_TYPES
];
const getBundleHash = () => globalThis.__EMBEDDABLE_BUNDLE_HASH__ ?? null;
const defineOption = (type, option) => {
  var _a, _b, _c, _d;
  const bundleHash = getBundleHash();
  globalThis.__EMBEDDABLE__ ?? (globalThis.__EMBEDDABLE__ = {});
  const embeddable = bundleHash ? (_a = globalThis.__EMBEDDABLE__)[bundleHash] ?? (_a[bundleHash] = {}) : globalThis.__EMBEDDABLE__;
  if (typeof type === "string") {
    embeddable.nativeTypes = embeddable.nativeTypes || {};
    embeddable.nativeTypes[type] = embeddable.nativeTypes[type] || {};
    (_b = embeddable.nativeTypes[type]).options ?? (_b.options = []);
    embeddable.nativeTypes[type].options.push(option);
  } else {
    const typeName = type.toString();
    if (!((_c = embeddable == null ? void 0 : embeddable.types) == null ? void 0 : _c[typeName]))
      return;
    (_d = embeddable.types[typeName]).options ?? (_d.options = []);
    embeddable.types[typeName].options.push(option);
  }
};
const StringType = createBuiltInType("string", {
  transform: (value) => value,
  optionLabel: (value) => Array.isArray(value) ? `[${value.map((v) => `"${v}"`).join(",")}]` : `"${value}"`
});
const NumberType = createBuiltInType("number", {
  transform: (value) => Array.isArray(value) ? value : value ? Number(value) : value,
  optionLabel: (value) => Array.isArray(value) ? `[${value.join(",")}]` : (value == null ? void 0 : value.toLocaleString(DEFAULT_LOCALE)) ?? ""
});
const BooleanType = createBuiltInType("boolean", {
  transform: (value) => value === "true" || value === true,
  optionLabel: (value) => value ? "true" : "false"
});
const TimeType = createBuiltInType("time", {
  transform: (value) => {
    const date = (value == null ? void 0 : value.date) ? new Date(value.date) : void 0;
    const isValid = date && date.toString() !== "Invalid Date";
    return {
      date: isValid ? date : void 0,
      relativeTimeString: value == null ? void 0 : value.relativeTimeString
    };
  },
  optionLabel: (value) => {
    var _a;
    if (!value)
      return "";
    if (value == null ? void 0 : value.date) {
      return ((_a = value.date) == null ? void 0 : _a.toLocaleDateString(DEFAULT_LOCALE)) ?? value.date.toLocaleString();
    }
    return value.relativeTimeString;
  }
});
const TimeRangeType = createBuiltInType("timeRange", {
  transform: (value) => {
    if (!value)
      return void 0;
    const [from, to] = [value == null ? void 0 : value.from, value == null ? void 0 : value.to];
    const fromDate = new Date(from);
    const toDate = new Date(to);
    return {
      from: fromDate.toString() !== "Invalid Date" ? fromDate : void 0,
      to: toDate.toString() !== "Invalid Date" ? toDate : void 0,
      relativeTimeString: value == null ? void 0 : value.relativeTimeString
    };
  },
  optionLabel: (value) => {
    var _a, _b, _c, _d;
    if (!value)
      return "";
    if ((value == null ? void 0 : value.from) && (value == null ? void 0 : value.to)) {
      return `${((_a = value.from) == null ? void 0 : _a.toLocaleDateString(DEFAULT_LOCALE)) ?? ((_b = value.from) == null ? void 0 : _b.toLocaleString())},${((_c = value.to) == null ? void 0 : _c.toLocaleDateString(DEFAULT_LOCALE)) ?? ((_d = value.to) == null ? void 0 : _d.toLocaleString())}`;
    }
    return value == null ? void 0 : value.relativeTimeString;
  }
});
const GranularityType = createBuiltInType("granularity", {
  transform: (value) => value,
  optionLabel: (value) => value
});
const DatasetType = createBuiltInType("dataset");
const MeasureType = createBuiltInType("measure");
const DimensionType = createBuiltInType("dimension");
const DimensionOrMeasureType = createBuiltInType("dimensionOrMeasure");
var nativeTypes = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BooleanType,
  DatasetType,
  DimensionOrMeasureType,
  DimensionType,
  GranularityType,
  MeasureType,
  NumberType,
  StringType,
  TimeRangeType,
  TimeType
});
const defineTheme = (parentTheme, childTheme) => {
  return mergician(parentTheme, childTheme);
};
const EmbeddableStateContext = nt.createContext({});
const useEmbeddableState = (initialState = {}) => {
  const ctx = nt.useContext(EmbeddableStateContext);
  nt.useEffect(() => {
    if (Array.isArray(ctx) && typeof ctx[1] === "function") {
      ctx[1](initialState);
    }
  }, [JSON.stringify(initialState)]);
  return ctx;
};
const EmbeddableThemeContext = nt.createContext({});
const useTheme = () => {
  return nt.useContext(EmbeddableThemeContext);
};
function cleanInputsWithGranularity(obj) {
  if (!obj || !("inputs" in obj))
    return obj;
  const { inputs, ...rest } = obj;
  if (typeof inputs === "object" && "granularity" in inputs) {
    return { ...rest, inputs: { granularity: inputs.granularity } };
  }
  return rest;
}
const cleanupRequestParams = (requestParams) => {
  return {
    ...requestParams,
    dimensions: Array.isArray(requestParams.dimensions) ? requestParams.dimensions.map(cleanInputsWithGranularity) : requestParams.dimensions,
    measures: Array.isArray(requestParams.measures) ? requestParams.measures.map(cleanInputsWithGranularity) : requestParams.measures,
    select: Array.isArray(requestParams.select) ? requestParams.select.map((item) => Array.isArray(item) ? item.map(cleanInputsWithGranularity) : cleanInputsWithGranularity(item)) : requestParams.select,
    orderBy: Array.isArray(requestParams.orderBy) ? requestParams.orderBy.map((item) => ({
      ...item,
      property: cleanInputsWithGranularity(item.property)
    })) : requestParams.orderBy,
    filters: Array.isArray(requestParams.filters) ? requestParams.filters.map((filter) => ({
      ...filter,
      property: cleanInputsWithGranularity(filter.property)
    })) : requestParams.filters
  };
};
const UPDATE_CLIENT_CONTEXT_EVENT_NAME = "embeddable-event:update-client-context";
const UPDATE_PROPS_EVENT_NAME = "embeddable-event:update-props";
const RELOAD_DATASET_EVENT_NAME = "embeddable-event:reload-dataset";
const LOAD_DATA_RESULT_EVENT_NAME = "embeddable-event:load-data-result";
const UPDATE_THEME_EVENT_NAME = "embeddable-event:update-theme";
const ReducerActionTypes = {
  loading: "loading",
  error: "error",
  data: "data"
};
const reducer = (state, action) => {
  var _a;
  switch (action.type) {
    case ReducerActionTypes.loading: {
      return {
        ...state,
        [action.inputName]: {
          data: (_a = state[action.inputName]) == null ? void 0 : _a.data,
          isLoading: true
        }
      };
    }
    case ReducerActionTypes.data: {
      return {
        ...state,
        [action.inputName]: { isLoading: false, data: action.payload }
      };
    }
    case ReducerActionTypes.error: {
      return {
        ...state,
        [action.inputName]: {
          isLoading: false,
          error: action.payload.message || action.payload
        }
      };
    }
  }
  return state;
};
const createInitialLoadersState = (dataLoaders) => Object.keys(dataLoaders).reduce((loaderState, loaderKey) => ({
  ...loaderState,
  [loaderKey]: { isLoading: true }
}), {});
const deserializeProps = (props, meta) => Object.fromEntries(Object.entries(props).map(([propName, propValue]) => {
  var _a, _b, _c, _d, _e;
  const inputPropConfig = (_a = meta.inputs) == null ? void 0 : _a.find((config) => config.name === propName);
  const deserialize = typeof (inputPropConfig == null ? void 0 : inputPropConfig.type) === "string" ? (_c = (_b = Object.values(nativeTypes).find((type) => type.toString() === (inputPropConfig == null ? void 0 : inputPropConfig.type))) == null ? void 0 : _b.typeConfig) == null ? void 0 : _c.transform : (_e = (_d = inputPropConfig == null ? void 0 : inputPropConfig.type) == null ? void 0 : _d.typeConfig) == null ? void 0 : _e.transform;
  return [propName, (deserialize == null ? void 0 : deserialize(propValue)) ?? propValue];
}));
const getInputValuesFromMeta = (meta) => {
  let inputValues = {};
  (meta.inputs || []).forEach((input) => {
    inputValues = {
      ...inputValues,
      [input.name]: input.defaultValue ?? null
    };
  });
  return inputValues;
};
function defineComponent(InnerComponent, meta, config = {}) {
  function EmbeddableWrapper({ propsUpdateListener, clientContext, embeddableTheme, ...props }) {
    const [propsProxy, setPropsProxy] = reactExports.useState(props);
    const [clientContextProxy, setClientContextProxy] = reactExports.useState(clientContext);
    const embeddableState = reactExports.useState();
    const [calculatedOverridableProps, setCalculatedOverridableProps] = reactExports.useState(embeddableTheme ?? {});
    const { componentId } = props;
    const loadDataResultEventName = `${LOAD_DATA_RESULT_EVENT_NAME}:${componentId}`;
    const propsUpdateEventHandler = ({ detail }) => setPropsProxy(detail);
    const clientContextUpdateEventHandler = ({ detail }) => setClientContextProxy(detail);
    const themeUpdateEventHandler = ({ detail }) => setCalculatedOverridableProps(detail);
    reactExports.useEffect(() => {
      const notifyDevtoolListener = ({ detail }) => {
        var _a;
        (_a = window.__EMBEDDABLE_DEVTOOLS__) == null ? void 0 : _a.notifyPropsUpdated(componentId, meta, propsProxy, detail);
      };
      propsUpdateListener.addEventListener(UPDATE_PROPS_EVENT_NAME, notifyDevtoolListener);
      return () => propsUpdateListener.removeEventListener(UPDATE_PROPS_EVENT_NAME, notifyDevtoolListener);
    }, [propsProxy]);
    reactExports.useEffect(() => {
      propsUpdateListener.addEventListener(UPDATE_CLIENT_CONTEXT_EVENT_NAME, clientContextUpdateEventHandler);
      propsUpdateListener.addEventListener(UPDATE_PROPS_EVENT_NAME, propsUpdateEventHandler);
      propsUpdateListener.addEventListener(UPDATE_THEME_EVENT_NAME, themeUpdateEventHandler);
      const updatePropsEvent = new CustomEvent("embeddable-event:update-props-listen", {
        detail: { componentId }
      });
      window.dispatchEvent(updatePropsEvent);
      const updateClientContextEvent = new CustomEvent("embeddable-event:update-client-context-listen", {
        detail: { componentId }
      });
      window.dispatchEvent(updateClientContextEvent);
      return () => {
        propsUpdateListener.removeEventListener(UPDATE_CLIENT_CONTEXT_EVENT_NAME, clientContextUpdateEventHandler);
        propsUpdateListener.removeEventListener(UPDATE_PROPS_EVENT_NAME, propsUpdateEventHandler);
      };
    }, []);
    const { extendedProps, dataLoaders } = reactExports.useMemo(() => {
      var _a;
      return Object.entries({
        ...getInputValuesFromMeta(meta),
        ...(_a = config == null ? void 0 : config.props) == null ? void 0 : _a.call(config, deserializeProps(propsProxy, meta), embeddableState, clientContextProxy)
      }).reduce((acc, [key, value]) => {
        if (isLoadDataParams(value)) {
          acc.dataLoaders[key] = value;
        } else {
          acc.extendedProps[key] = value;
        }
        return acc;
      }, { extendedProps: {}, dataLoaders: {} });
    }, [propsProxy, config == null ? void 0 : config.props, embeddableState[0], clientContextProxy]);
    const [loadersState, dispatch] = reactExports.useReducer(reducer, dataLoaders, createInitialLoadersState);
    const handleDataLoaded = (inputName, data) => dispatch({ type: ReducerActionTypes.data, inputName, payload: data });
    const handleError = (inputName, error) => dispatch({ type: ReducerActionTypes.error, inputName, payload: error });
    const reloadDataset = (inputName, params) => {
      dispatch({ type: ReducerActionTypes.loading, inputName });
      const error = params.dataLoader(propsUpdateListener, params.requestParams, componentId, inputName);
      if (error)
        handleError(inputName, error);
    };
    const handleLoadDataResult = (ev) => {
      var _a;
      (_a = window.__EMBEDDABLE_DEVTOOLS__) == null ? void 0 : _a.notifyDataLoaded(componentId, meta, ev.detail);
      if (ev.detail.isSuccess) {
        handleDataLoaded(ev.detail.propertyName, ev.detail.data);
      } else {
        handleError(ev.detail.propertyName, ev.detail.error);
      }
    };
    const variableChangedEventHandler = ({ detail }) => {
      var _a;
      const dataLoadersEntries = Object.entries(dataLoaders).filter(([_, params]) => params.requestParams.from.datasetId === detail.datasetId);
      (_a = window.__EMBEDDABLE_DEVTOOLS__) == null ? void 0 : _a.notifyVariableUpdated(componentId, meta, detail, Object.fromEntries(dataLoadersEntries));
      dataLoadersEntries.forEach(([inputName, params]) => reloadDataset(inputName, params));
    };
    reactExports.useEffect(() => {
      Object.entries(dataLoaders).forEach(([inputName, params]) => reloadDataset(inputName, params));
      window.addEventListener(RELOAD_DATASET_EVENT_NAME, variableChangedEventHandler);
      propsUpdateListener.addEventListener(loadDataResultEventName, handleLoadDataResult);
      return () => {
        window.removeEventListener(RELOAD_DATASET_EVENT_NAME, variableChangedEventHandler);
        propsUpdateListener.removeEventListener(loadDataResultEventName, handleLoadDataResult);
      };
    }, [
      JSON.stringify(Object.values(dataLoaders).map((loader) => cleanupRequestParams(loader.requestParams)))
    ]);
    const createEvent = (value, eventName) => setValue(propsUpdateListener, value, componentId, eventName);
    const events = config == null ? void 0 : config.events;
    const eventProps = {};
    if (events) {
      for (const event in events) {
        if (events.hasOwnProperty(event)) {
          let eventFunction = events[event];
          eventProps[event] = (value) => createEvent(eventFunction(value), event);
        }
      }
    }
    return reactExports.createElement(
      EmbeddableStateContext.Provider,
      { value: embeddableState },
      reactExports.createElement(
        EmbeddableThemeContext.Provider,
        { value: calculatedOverridableProps },
        reactExports.createElement(InnerComponent, { ...extendedProps, ...eventProps, ...loadersState })
      )
    );
  }
  EmbeddableWrapper.displayName = `embedded(${InnerComponent.displayName ?? meta.name})`;
  return EmbeddableWrapper;
}
const isOperation = (value) => (value == null ? void 0 : value.operation) && (value == null ? void 0 : value.__embeddableVariableMeta);
function defineEditor(InnerComponent, meta, config) {
  function EmbeddableWrapper(props) {
    var _a;
    const { componentId, initialValue, propsUpdateListener } = props;
    const { type: { typeConfig: { transform } } } = meta;
    const [componentState, setComponentState] = reactExports.useState(initialValue);
    const setter = (value) => {
      setComponentState(isOperation(value) ? value.value : value);
      setValue(propsUpdateListener, value, componentId);
    };
    return reactExports.createElement(InnerComponent, { ...config.inputs((transform == null ? void 0 : transform(componentState)) || componentState, setter, meta.config), ...((_a = config.mapProps) == null ? void 0 : _a.call(config, props)) ?? {} });
  }
  EmbeddableWrapper.displayName = `embedded(${InnerComponent.displayName ?? meta.name})`;
  return EmbeddableWrapper;
}
export {
  Value as V,
  useEmbeddableState as a,
  defineComponent as d,
  loadData as l,
  useTheme as u
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZXNtLUNWRTYwZmxhLmpzIiwic291cmNlcyI6WyIvVXNlcnMvY2hyaXN0b3BoZXJjYXJsc29uL2ZsdWlkL2Ryb3BsZXQtZW1iZWRkYWJsZS9hcHAvZnJvbnRlbmQvZW1iZWRkYWJsZS9ub2RlX21vZHVsZXMvbWVyZ2ljaWFuL2Rpc3QvbWVyZ2ljaWFuLmVzbS5qcyIsIi9Vc2Vycy9jaHJpc3RvcGhlcmNhcmxzb24vZmx1aWQvZHJvcGxldC1lbWJlZGRhYmxlL2FwcC9mcm9udGVuZC9lbWJlZGRhYmxlL25vZGVfbW9kdWxlcy9AZW1iZWRkYWJsZS5jb20vY29yZS9saWIvaW5kZXguZXNtLmpzIiwiL1VzZXJzL2NocmlzdG9waGVyY2FybHNvbi9mbHVpZC9kcm9wbGV0LWVtYmVkZGFibGUvYXBwL2Zyb250ZW5kL2VtYmVkZGFibGUvbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZWFjdC9saWIvaW5kZXguZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogbWVyZ2ljaWFuXG4gKiB2Mi4wLjJcbiAqIGh0dHBzOi8vamhpbGRlbmJpZGRsZS5naXRodWIuaW8vbWVyZ2ljaWFuL1xuICogKGMpIDIwMjItMjAyNCBKb2huIEhpbGRlbmJpZGRsZVxuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vLyBzcmMvdXRpbC5qc1xuZnVuY3Rpb24gY291bnRPY2N1cnJlbmNlcyguLi5hcnJheXMpIHtcbiAgY29uc3QgY291bnRPYmogPSB7fTtcbiAgYXJyYXlzLmZvckVhY2goKGFycmF5KSA9PiB7XG4gICAgYXJyYXkuZm9yRWFjaCgodikgPT4ge1xuICAgICAgY291bnRPYmpbdl0gPSB2IGluIGNvdW50T2JqID8gKytjb3VudE9ialt2XSA6IDE7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gY291bnRPYmo7XG59XG5mdW5jdGlvbiBnZXRJbkFsbCguLi5hcnJheXMpIHtcbiAgcmV0dXJuIGFycmF5cy5yZWR1Y2UoXG4gICAgKGFjYywgY3VycikgPT4gYWNjLmZpbHRlcihTZXQucHJvdG90eXBlLmhhcywgbmV3IFNldChjdXJyKSlcbiAgKTtcbn1cbmZ1bmN0aW9uIGdldEluTXVsdGlwbGUoLi4uYXJyYXlzKSB7XG4gIGNvbnN0IGNvdW50T2JqID0gY291bnRPY2N1cnJlbmNlcyguLi5hcnJheXMpO1xuICByZXR1cm4gT2JqZWN0LmtleXMoY291bnRPYmopLmZpbHRlcigodikgPT4gY291bnRPYmpbdl0gPiAxKTtcbn1cbmZ1bmN0aW9uIGdldE5vdEluQWxsKC4uLmFycmF5cykge1xuICBjb25zdCBjb3VudE9iaiA9IGNvdW50T2NjdXJyZW5jZXMoLi4uYXJyYXlzKTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNvdW50T2JqKS5maWx0ZXIoKHYpID0+IGNvdW50T2JqW3ZdIDwgYXJyYXlzLmxlbmd0aCk7XG59XG5mdW5jdGlvbiBnZXROb3RJbk11bHRpcGxlKC4uLmFycmF5cykge1xuICBjb25zdCBjb3VudE9iaiA9IGNvdW50T2NjdXJyZW5jZXMoLi4uYXJyYXlzKTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNvdW50T2JqKS5maWx0ZXIoKHYpID0+IGNvdW50T2JqW3ZdID09PSAxKTtcbn1cbmZ1bmN0aW9uIGdldE9iamVjdEtleXMob2JqLCBob2lzdEVudW1lcmFibGUgPSBmYWxzZSkge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTtcbiAgaWYgKGhvaXN0RW51bWVyYWJsZSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgIWtleXMuaW5jbHVkZXMoa2V5KSAmJiBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59XG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGlzUHJvcERlc2NyaXB0b3Iob2JqKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBoYXNGbGFnS2V5ID0gW1wid3JpdGFibGVcIiwgXCJlbnVtZXJhYmxlXCIsIFwiY29uZmlndXJhYmxlXCJdLnNvbWUoXG4gICAgKGtleSkgPT4ga2V5IGluIG9ialxuICApO1xuICBjb25zdCBoYXNNZXRob2QgPSBbXCJnZXRcIiwgXCJzZXRcIl0uc29tZSgoa2V5KSA9PiB0eXBlb2Ygb2JqW2tleV0gPT09IFwiZnVuY3Rpb25cIik7XG4gIGNvbnN0IGhhc01ldGhvZEtleXMgPSBbXCJnZXRcIiwgXCJzZXRcIl0uZXZlcnkoKGtleSkgPT4ga2V5IGluIG9iaik7XG4gIGxldCBpc0Rlc2NyaXB0b3IgPSBcInZhbHVlXCIgaW4gb2JqICYmIGhhc0ZsYWdLZXkgfHwgaGFzTWV0aG9kICYmIChoYXNNZXRob2RLZXlzIHx8IGhhc0ZsYWdLZXkpO1xuICBpZiAoaXNEZXNjcmlwdG9yKSB7XG4gICAgY29uc3QgdmFsaWRLZXlzID0gW1xuICAgICAgXCJjb25maWd1cmFibGVcIixcbiAgICAgIFwiZ2V0XCIsXG4gICAgICBcInNldFwiLFxuICAgICAgXCJlbnVtZXJhYmxlXCIsXG4gICAgICBcInZhbHVlXCIsXG4gICAgICBcIndyaXRhYmxlXCJcbiAgICBdO1xuICAgIGlzRGVzY3JpcHRvciA9IE9iamVjdC5rZXlzKG9iaikuc29tZSgoa2V5KSA9PiAhKGtleSBpbiB2YWxpZEtleXMpKTtcbiAgfVxuICByZXR1cm4gaXNEZXNjcmlwdG9yO1xufVxuXG4vLyBzcmMvaW5kZXguanNcbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gTWVyZ2ljaWFuT3B0aW9uc1xuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gW29ubHlLZXlzXSAtIEV4Y2x1c2l2ZSBhcnJheSBvZiBrZXlzIHRvIGJlIG1lcmdlZFxuICogKG90aGVycyBhcmUgc2tpcHBlZClcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IFtza2lwS2V5c10gLSBBcnJheSBvZiBrZXlzIHRvIHNraXAgKG90aGVycyBhcmVcbiAqIG1lcmdlZClcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW29ubHlDb21tb25LZXlzPWZhbHNlXSAtIE1lcmdlIG9ubHkga2V5cyBmb3VuZFxuICogaW4gbXVsdGlwbGUgb2JqZWN0cyAoaWdub3JlIHNpbmdsZSBvY2N1cnJlbmNlIGtleXMpXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtvbmx5VW5pdmVyc2FsS2V5cz1mYWxzZV0gLSBNZXJnZSBvbmx5IGtleXNcbiAqIGZvdW5kIGluIGFsbCBvYmplY3RzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtza2lwQ29tbW9uS2V5cz1mYWxzZV0gLSBTa2lwIGtleXMgZm91bmQgaW5cbiAqIG11bHRpcGxlIG9iamVjdHMgKG1lcmdlIG9ubHkgc2luZ2xlIG9jY3VycmVuY2Uga2V5cylcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3NraXBVbml2ZXJzYWxLZXlzPWZhbHNlXSAtIFNraXAga2V5cyBmb3VuZCBpblxuICogYWxsIG9iamVjdHMgKG1lcmdlIG9ubHkgY29tbW9uIGtleXMpXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtpbnZva2VHZXR0ZXJzPWZhbHNlXSAtIEludm9rZSBcImdldHRlclwiIG1ldGhvZHNcbiAqIGFuZCBtZXJnZSByZXR1cm5lZCB2YWx1ZXNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3NraXBTZXR0ZXJzPWZhbHNlXSAtIFNraXAgXCJzZXR0ZXJcIiBtZXRob2RzXG4gKiBkdXJpbmcgbWVyZ2VcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2FwcGVuZEFycmF5cz1mYWxzZV0gLSBNZXJnZSBhcnJheSB2YWx1ZXMgYXRcbiAqIHRoZSBlbmQgb2YgZXhpc3RpbmcgYXJyYXlzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtwcmVwZW5kQXJyYXlzPWZhbHNlXSAtIE1lcmdlIGFycmF5IHZhbHVlcyBhdFxuICogdGhlIGJlZ2lubmluZyBvZiBleGlzdGluZyBhcnJheXNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2RlZHVwQXJyYXlzPWZhbHNlXSAtIFJlbW92ZSBkdXBsaWNhdGUgYXJyYXlcbiAqIHZhbHVlcyBpbiBuZXcgbWVyZ2VkIG9iamVjdFxuICogQHByb3BlcnR5IHtib29sZWFufGZ1bmN0aW9ufSBbc29ydEFycmF5cz1mYWxzZV0gLSBTb3J0IGFycmF5IHZhbHVlc1xuICogaW4gbmV3IG1lcmdlZCBvYmplY3RcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2hvaXN0RW51bWVyYWJsZT1mYWxzZV0gLSBNZXJnZSBlbnVtZXJhYmxlXG4gKiBwcm90b3R5cGUgcHJvcGVydGllcyBhcyBkaXJlY3QgcHJvcGVydGllcyBvZiBtZXJnZWQgb2JqZWN0XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtob2lzdFByb3RvPWZhbHNlXSAtIE1lcmdlIGN1c3RvbSBwcm90b3R5cGVcbiAqIHByb3BlcnRpZXMgYXMgZGlyZWN0IHByb3BlcnRpZXMgb2YgbWVyZ2VkIG9iamVjdFxuICogQHByb3BlcnR5IHtib29sZWFufSBbc2tpcFByb3RvPWZhbHNlXSAtIFNraXAgbWVyZ2luZyBvZiBjdXN0b21cbiAqIHByb3RvdHlwZSBwcm9wZXJ0aWVzXG4gKiBAcHJvcGVydHkge2ZpbHRlckNhbGxiYWNrfSBbZmlsdGVyXSAtIENhbGxiYWNrIHVzZWQgdG8gY29uZGl0aW9uYWxseSBtZXJnZVxuICogb3Igc2tpcCBhIHByb3BlcnR5LiBSZXR1cm4gYSBcInRydXRoeVwiIHZhbHVlIHRvIG1lcmdlIG9yIGEgXCJmYWxzeVwiIHZhbHVlIHRvXG4gKiBza2lwLiBSZXR1cm4gbm8gdmFsdWUgdG8gcHJvY2VlZCBhY2NvcmRpbmcgdG8gb3RoZXIgb3B0aW9uIHZhbHVlcy5cbiAqIEBwcm9wZXJ0eSB7YmVmb3JlRWFjaENhbGxiYWNrfSBbYmVmb3JlRWFjaF0gLSBDYWxsYmFjayB1c2VkIGZvclxuICogaW5zcGVjdGluZy9tb2RpZnlpbmcgcHJvcGVydGllcyBiZWZvcmUgbWVyZ2UuIFJldHVybiB2YWx1ZSBpcyB1c2VkIGFzIHZhbHVlXG4gKiB0byBtZXJnZS5cbiAqIEBwcm9wZXJ0eSB7YWZ0ZXJFYWNoQ2FsbGJhY2t9IFthZnRlckVhY2hdIC0gQ2FsbGJhY2sgdXNlZCBmb3JcbiAqIGluc3BlY3RpbmcvbW9kaWZ5aW5nIHByb3BlcnRpZXMgYWZ0ZXIgbWVyZ2UuIFJldHVybiB2YWx1ZSBpcyB1c2VkIGFzIG1lcmdlZFxuICogdmFsdWUuXG4gKiBAcHJvcGVydHkge29uQ2lyY3VsYXJDYWxsYmFja30gW29uQ2lyY3VsYXJdIC0gQ2FsbGJhY2sgdXNlZCBmb3IgaGFuZGxpbmdcbiAqIGNpcmN1bGFyIG9iamVjdCByZWZlcmVuY2VzIGR1cmluZyBtZXJnZVxuICogQHByZXNlcnZlXG4gKi9cbi8qKlxuICogQGNhbGxiYWNrIGZpbHRlckNhbGxiYWNrXG4gKiBAcGFyYW0ge2NhbGxiYWNrRGF0YX0gY2FsbGJhY2tEYXRhXG4gKiBAcHJlc2VydmVcbiAqL1xuLyoqXG4gKiBAY2FsbGJhY2sgYmVmb3JlRWFjaENhbGxiYWNrXG4gKiBAcGFyYW0ge2NhbGxiYWNrRGF0YX0gY2FsbGJhY2tEYXRhXG4gKiBAcHJlc2VydmVcbiAqL1xuLyoqXG4gKiBAY2FsbGJhY2sgYWZ0ZXJFYWNoQ2FsbGJhY2tcbiAqIEBwYXJhbSB7YWZ0ZXJFYWNoQ2FsbGJhY2tEYXRhfSBjYWxsYmFja0RhdGFcbiAqIEBwcmVzZXJ2ZVxuICovXG4vKipcbiAqIEBjYWxsYmFjayBvbkNpcmN1bGFyQ2FsbGJhY2tcbiAqIEBwYXJhbSB7Y2FsbGJhY2tEYXRhfSBjYWxsYmFja0RhdGFcbiAqIEBwcmVzZXJ2ZVxuICovXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IGNhbGxiYWNrRGF0YVxuICogQHByb3BlcnR5IHtudW1iZXJ9IGRlcHRoIC0gTmVzdGluZyBsZXZlbCBvZiB0aGUga2V5IGJlaW5nIHByb2Nlc3NlZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IGtleSAtIE9iamVjdCBrZXkgYmVpbmcgcHJvY2Vzc2VkXG4gKiBAcHJvcGVydHkge29iamVjdH0gc3JjT2JqIC0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIHNvdXJjZSB2YWx1ZVxuICogQHByb3BlcnR5IHthbnl9IHNyY1ZhbCAtIFNvdXJjZSBvYmplY3TigJlzIHByb3BlcnR5IHZhbHVlXG4gKiBAcHJvcGVydHkge29iamVjdH0gdGFyZ2V0T2JqIC0gTmV3IG1lcmdlZCBvYmplY3RcbiAqIEBwcm9wZXJ0eSB7YW55fSB0YXJnZXRWYWwgLSBOZXcgbWVyZ2VkIG9iamVjdOKAmXMgY3VycmVudCBwcm9wZXJ0eSB2YWx1ZVxuICogQHByZXNlcnZlXG4gKi9cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gYWZ0ZXJFYWNoQ2FsbGJhY2tEYXRhXG4gKiBAcHJvcGVydHkge251bWJlcn0gZGVwdGggLSBOZXN0aW5nIGxldmVsIG9mIHRoZSBrZXkgYmVpbmcgcHJvY2Vzc2VkXG4gKiBAcHJvcGVydHkge3N0cmluZ30ga2V5IC0gT2JqZWN0IGtleSBiZWluZyBwcm9jZXNzZWRcbiAqIEBwcm9wZXJ0eSB7YW55fSBtZXJnZVZhbCAtIE5ldyBtZXJnZWQgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBzcmNPYmogLSBPYmplY3QgY29udGFpbmluZyB0aGUgc291cmNlIHZhbHVlXG4gKiBAcHJvcGVydHkge29iamVjdH0gdGFyZ2V0T2JqIC0gTmV3IG1lcmdlZCBvYmplY3RcbiAqIEBwcmVzZXJ2ZVxuICovXG52YXIgZGVmYXVsdHMgPSB7XG4gIC8vIEtleXNcbiAgb25seUtleXM6IFtdLFxuICBza2lwS2V5czogW10sXG4gIG9ubHlDb21tb25LZXlzOiBmYWxzZSxcbiAgb25seVVuaXZlcnNhbEtleXM6IGZhbHNlLFxuICBza2lwQ29tbW9uS2V5czogZmFsc2UsXG4gIHNraXBVbml2ZXJzYWxLZXlzOiBmYWxzZSxcbiAgLy8gVmFsdWVzXG4gIGludm9rZUdldHRlcnM6IGZhbHNlLFxuICBza2lwU2V0dGVyczogZmFsc2UsXG4gIC8vIEFycmF5c1xuICBhcHBlbmRBcnJheXM6IGZhbHNlLFxuICBwcmVwZW5kQXJyYXlzOiBmYWxzZSxcbiAgZGVkdXBBcnJheXM6IGZhbHNlLFxuICBzb3J0QXJyYXlzOiBmYWxzZSxcbiAgLy8gUHJvdG90eXBlXG4gIGhvaXN0RW51bWVyYWJsZTogZmFsc2UsXG4gIGhvaXN0UHJvdG86IGZhbHNlLFxuICBza2lwUHJvdG86IGZhbHNlLFxuICAvLyBDYWxsYmFja3NcbiAgZmlsdGVyOiBGdW5jdGlvbi5wcm90b3R5cGUsXG4gIGJlZm9yZUVhY2g6IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgYWZ0ZXJFYWNoOiBGdW5jdGlvbi5wcm90b3R5cGUsXG4gIG9uQ2lyY3VsYXI6IEZ1bmN0aW9uLnByb3RvdHlwZVxufTtcbi8qKlxuICogQGRlc2NyaXB0aW9uIERlZXAgKHJlY3Vyc2l2ZSkgb2JqZWN0IG1lcmdpbmcgd2l0aCBzdXBwb3J0IGZvciBkZXNjcmlwdG9yXG4gKiB2YWx1ZXMsIGFjY2Vzc29yIGZ1bmN0aW9ucywgY3VzdG9tIHByb3RvdHlwZXMsIGFuZCBhZHZhbmNlZCBvcHRpb25zIGZvclxuICogY3VzdG9taXppbmcgdGhlIG1lcmdlIHByb2Nlc3MuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEN1c3RvbSBtZXJnZSBvcHRpb25zXG4gKiBjb25zdCBtZXJnZWRPYmogPSBtZXJnaWNpYW4oe1xuICogICAvLyBPcHRpb25zXG4gKiB9KShvYmoxLCBvYmoyLCBvYmozKTtcbiAqXG4gKiAvLyBDdXN0b20gbWVyZ2UgZnVuY3Rpb25cbiAqIGNvbnN0IGN1c3RvbU1lcmdlID0gbWVyZ2ljaWFuKHtcbiAqICAgLy8gT3B0aW9uc1xuICogfSk7XG4gKiBjb25zdCBjdXN0b21NZXJnZU9iaiA9IGN1c3RvbU1lcmdlKG9iajEsIG9iajIsIG9iajMpO1xuICpcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtIHtNZXJnaWNpYW5PcHRpb25zfSBvcHRpb25zXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IE5ldyBtZXJnZSBmdW5jdGlvbiB3aXRoIG9wdGlvbnMgc2V0IGFzIGRlZmF1bHRzXG4gKiBAcHJlc2VydmVcbiAqL1xuLyoqXG4gKiBAZGVzY3JpcHRpb24gRGVlcCAocmVjdXJzaXZlKSBvYmplY3QgbWVyZ2luZyB3aXRoIHN1cHBvcnQgZm9yIGRlc2NyaXB0b3JcbiAqIHZhbHVlcywgYWNjZXNzb3IgZnVuY3Rpb25zLCBjdXN0b20gcHJvdG90eXBlcywgYW5kIGFkdmFuY2VkIG9wdGlvbnMgZm9yXG4gKiBjdXN0b21pemluZyB0aGUgbWVyZ2UgcHJvY2Vzcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgd2l0aCBkZWZhdWx0IG9wdGlvbnNcbiAqIGNvbnN0IGNsb25lZE9iaiA9IG1lcmdpY2lhbih7fSwgb2JqMSk7XG4gKlxuICogLy8gTWVyZ2Ugd2l0aCBkZWZhdWx0IG9wdGlvbnNcbiAqIGNvbnN0IG1lcmdlZE9iaiA9IG1lcmdpY2lhbihvYmoxLCBvYmoyLCBvYmozKTtcbiAqXG4gKiBAb3ZlcmxvYWRcbiAqIEBwYXJhbSB7Li4ub2JqZWN0fSBvYmplY3RzXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBOZXcgbWVyZ2VkIG9iamVjdFxuICogQHByZXNlcnZlXG4gKi9cbi8qKlxuICogQGRlc2NyaXB0aW9uIERlZXAgKHJlY3Vyc2l2ZSkgb2JqZWN0IG1lcmdpbmcgd2l0aCBzdXBwb3J0IGZvciBkZXNjcmlwdG9yXG4gKiB2YWx1ZXMsIGFjY2Vzc29yIGZ1bmN0aW9ucywgY3VzdG9tIHByb3RvdHlwZXMsIGFuZCBhZHZhbmNlZCBvcHRpb25zIGZvclxuICogY3VzdG9taXppbmcgdGhlIG1lcmdlIHByb2Nlc3MuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHdpdGggZGVmYXVsdCBvcHRpb25zXG4gKiBjb25zdCBjbG9uZWRPYmogPSBtZXJnaWNpYW4oe30sIG9iajEpO1xuICpcbiAqIC8vIE1lcmdlIHdpdGggZGVmYXVsdCBvcHRpb25zXG4gKiBjb25zdCBtZXJnZWRPYmogPSBtZXJnaWNpYW4ob2JqMSwgb2JqMiwgb2JqMyk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEN1c3RvbSBtZXJnZSBvcHRpb25zXG4gKiBjb25zdCBtZXJnZWRPYmogPSBtZXJnaWNpYW4oe1xuICogICAvLyBPcHRpb25zXG4gKiB9KShvYmoxLCBvYmoyLCBvYmozKTtcbiAqXG4gKiAvLyBDdXN0b20gbWVyZ2UgZnVuY3Rpb25cbiAqIGNvbnN0IGN1c3RvbU1lcmdlID0gbWVyZ2ljaWFuKHtcbiAqICAgLy8gT3B0aW9uc1xuICogfSk7XG4gKiBjb25zdCBjdXN0b21NZXJnZU9iaiA9IGN1c3RvbU1lcmdlKG9iajEsIG9iajIsIG9iajMpO1xuICpcbiAqIEBwYXJhbSB7TWVyZ2ljaWFuT3B0aW9uc30gb3B0aW9uc09yT2JqZWN0XG4gKiBAcGFyYW0gey4uLm9iamVjdH0gW29iamVjdHNdXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb258b2JqZWN0fSBOZXcgbWVyZ2UgZnVuY3Rpb24gd2l0aCBvcHRpb25zIHNldCBhcyBkZWZhdWx0c1xuICogKHNpbmdsZSBhcmd1bWVudCkgb3IgbmV3IG1lcmdlZCBvYmplY3QgKG11bHRpcGxlIGFyZ3VtZW50cylcbiAqIEBwcmVzZXJ2ZVxuICovXG5mdW5jdGlvbiBtZXJnaWNpYW4ob3B0aW9uc09yT2JqZWN0LCAuLi5vYmplY3RzKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gYXJndW1lbnRzWzBdIDoge307XG4gIGNvbnN0IHNldHRpbmdzID0geyAuLi5kZWZhdWx0cywgLi4ub3B0aW9ucyB9O1xuICBjb25zdCBkZWR1cEFycmF5TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgY29uc3Qgc29ydEFycmF5TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgY29uc3Qgc29ydEFycmF5Rm4gPSB0eXBlb2Ygc2V0dGluZ3Muc29ydEFycmF5cyA9PT0gXCJmdW5jdGlvblwiID8gc2V0dGluZ3Muc29ydEFycmF5cyA6IHZvaWQgMDtcbiAgY29uc3QgY2lyY3VsYXJSZWZzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG4gIGxldCBtZXJnZURlcHRoID0gMDtcbiAgZnVuY3Rpb24gX2dldE9iamVjdEtleXMob2JqKSB7XG4gICAgcmV0dXJuIGdldE9iamVjdEtleXMob2JqLCBzZXR0aW5ncy5ob2lzdEVudW1lcmFibGUpO1xuICB9XG4gIGZ1bmN0aW9uIF9tZXJnaWNpYW4oLi4ub2JqZWN0czIpIHtcbiAgICBsZXQgbWVyZ2VLZXlMaXN0O1xuICAgIGlmIChvYmplY3RzMi5sZW5ndGggPiAxKSB7XG4gICAgICBpZiAoc2V0dGluZ3Mub25seUNvbW1vbktleXMpIHtcbiAgICAgICAgbWVyZ2VLZXlMaXN0ID0gZ2V0SW5NdWx0aXBsZShcbiAgICAgICAgICAuLi5vYmplY3RzMi5tYXAoKG9iaikgPT4gX2dldE9iamVjdEtleXMob2JqKSlcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGluZ3Mub25seVVuaXZlcnNhbEtleXMpIHtcbiAgICAgICAgbWVyZ2VLZXlMaXN0ID0gZ2V0SW5BbGwoLi4ub2JqZWN0czIubWFwKChvYmopID0+IF9nZXRPYmplY3RLZXlzKG9iaikpKTtcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGluZ3Muc2tpcENvbW1vbktleXMpIHtcbiAgICAgICAgbWVyZ2VLZXlMaXN0ID0gZ2V0Tm90SW5NdWx0aXBsZShcbiAgICAgICAgICAuLi5vYmplY3RzMi5tYXAoKG9iaikgPT4gX2dldE9iamVjdEtleXMob2JqKSlcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGluZ3Muc2tpcFVuaXZlcnNhbEtleXMpIHtcbiAgICAgICAgbWVyZ2VLZXlMaXN0ID0gZ2V0Tm90SW5BbGwoLi4ub2JqZWN0czIubWFwKChvYmopID0+IF9nZXRPYmplY3RLZXlzKG9iaikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFtZXJnZUtleUxpc3QgJiYgc2V0dGluZ3Mub25seUtleXMubGVuZ3RoKSB7XG4gICAgICBtZXJnZUtleUxpc3QgPSBzZXR0aW5ncy5vbmx5S2V5cztcbiAgICB9XG4gICAgaWYgKG1lcmdlS2V5TGlzdCAmJiBtZXJnZUtleUxpc3QgIT09IHNldHRpbmdzLm9ubHlLZXlzICYmIHNldHRpbmdzLm9ubHlLZXlzLmxlbmd0aCkge1xuICAgICAgbWVyZ2VLZXlMaXN0ID0gbWVyZ2VLZXlMaXN0LmZpbHRlcihcbiAgICAgICAgKGtleSkgPT4gc2V0dGluZ3Mub25seUtleXMuaW5jbHVkZXMoa2V5KVxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgbmV3T2JqUHJvcHMgPSBvYmplY3RzMi5yZWR1Y2UoKHRhcmdldE9iaiwgc3JjT2JqKSA9PiB7XG4gICAgICBjaXJjdWxhclJlZnMuc2V0KHNyY09iaiwgdGFyZ2V0T2JqKTtcbiAgICAgIGxldCBrZXlzID0gbWVyZ2VLZXlMaXN0IHx8IF9nZXRPYmplY3RLZXlzKHNyY09iaik7XG4gICAgICBpZiAoc2V0dGluZ3Muc2tpcEtleXMubGVuZ3RoKSB7XG4gICAgICAgIGtleXMgPSBrZXlzLmZpbHRlcigoa2V5KSA9PiBzZXR0aW5ncy5za2lwS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBjb25zdCB0YXJnZXRWYWwgPSB0YXJnZXRPYmpba2V5XTtcbiAgICAgICAgY29uc3QgbWVyZ2VEZXNjcmlwdG9yID0ge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGlmIChrZXkgaW4gc3JjT2JqID09PSBmYWxzZSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpc1JldHVyblZhbCA9IGZhbHNlO1xuICAgICAgICBsZXQgbWVyZ2VWYWwgPSBzcmNPYmpba2V5XTtcbiAgICAgICAgY29uc3Qgc3JjRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc3JjT2JqLCBrZXkpO1xuICAgICAgICBjb25zdCBpc1NldHRlck9ubHkgPSBzcmNEZXNjcmlwdG9yICYmIHR5cGVvZiBzcmNEZXNjcmlwdG9yLnNldCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBzcmNEZXNjcmlwdG9yLmdldCAhPT0gXCJmdW5jdGlvblwiO1xuICAgICAgICBpZiAoaXNTZXR0ZXJPbmx5KSB7XG4gICAgICAgICAgaWYgKCFzZXR0aW5ncy5za2lwU2V0dGVycykge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldE9iaiwga2V5LCBzcmNEZXNjcmlwdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNldHRpbmdzLmZpbHRlciAhPT0gZGVmYXVsdHMuZmlsdGVyKSB7XG4gICAgICAgICAgY29uc3QgcmV0dXJuVmFsID0gc2V0dGluZ3MuZmlsdGVyKHtcbiAgICAgICAgICAgIGRlcHRoOiBtZXJnZURlcHRoLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgc3JjT2JqLFxuICAgICAgICAgICAgc3JjVmFsOiBtZXJnZVZhbCxcbiAgICAgICAgICAgIHRhcmdldE9iaixcbiAgICAgICAgICAgIHRhcmdldFZhbFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChyZXR1cm5WYWwgIT09IHZvaWQgMCAmJiAhcmV0dXJuVmFsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNldHRpbmdzLmJlZm9yZUVhY2ggIT09IGRlZmF1bHRzLmJlZm9yZUVhY2gpIHtcbiAgICAgICAgICBjb25zdCByZXR1cm5WYWwgPSBzZXR0aW5ncy5iZWZvcmVFYWNoKHtcbiAgICAgICAgICAgIGRlcHRoOiBtZXJnZURlcHRoLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgc3JjT2JqLFxuICAgICAgICAgICAgc3JjVmFsOiBtZXJnZVZhbCxcbiAgICAgICAgICAgIHRhcmdldE9iaixcbiAgICAgICAgICAgIHRhcmdldFZhbFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChyZXR1cm5WYWwgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgaXNSZXR1cm5WYWwgPSB0cnVlO1xuICAgICAgICAgICAgbWVyZ2VWYWwgPSByZXR1cm5WYWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbWVyZ2VWYWwgPT09IFwib2JqZWN0XCIgJiYgbWVyZ2VWYWwgIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAoY2lyY3VsYXJSZWZzLmhhcyhzcmNPYmpba2V5XSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHJldHVyblZhbCA9IHNldHRpbmdzLm9uQ2lyY3VsYXIoe1xuICAgICAgICAgICAgICBkZXB0aDogbWVyZ2VEZXB0aCxcbiAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICBzcmNPYmosXG4gICAgICAgICAgICAgIHNyY1ZhbDogc3JjT2JqW2tleV0sXG4gICAgICAgICAgICAgIHRhcmdldE9iaixcbiAgICAgICAgICAgICAgdGFyZ2V0VmFsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChyZXR1cm5WYWwgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICBtZXJnZVZhbCA9IGNpcmN1bGFyUmVmcy5nZXQoc3JjT2JqW2tleV0pO1xuICAgICAgICAgICAgICB0YXJnZXRPYmpba2V5XSA9IG1lcmdlVmFsO1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzUmV0dXJuVmFsID0gdHJ1ZTtcbiAgICAgICAgICAgIG1lcmdlVmFsID0gcmV0dXJuVmFsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtZXJnZVZhbCkpIHtcbiAgICAgICAgICBtZXJnZVZhbCA9IFsuLi5tZXJnZVZhbF07XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0VmFsKSkge1xuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmFwcGVuZEFycmF5cykge1xuICAgICAgICAgICAgICBtZXJnZVZhbCA9IFsuLi50YXJnZXRWYWwsIC4uLm1lcmdlVmFsXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2V0dGluZ3MucHJlcGVuZEFycmF5cykge1xuICAgICAgICAgICAgICBtZXJnZVZhbCA9IFsuLi5tZXJnZVZhbCwgLi4udGFyZ2V0VmFsXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNldHRpbmdzLmRlZHVwQXJyYXlzKSB7XG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MuYWZ0ZXJFYWNoICE9PSBkZWZhdWx0cy5hZnRlckVhY2gpIHtcbiAgICAgICAgICAgICAgbWVyZ2VWYWwgPSBbLi4ubmV3IFNldChtZXJnZVZhbCldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3Qga2V5QXJyYXkgPSBkZWR1cEFycmF5TWFwLmdldCh0YXJnZXRPYmopO1xuICAgICAgICAgICAgICBpZiAoa2V5QXJyYXkgJiYgIWtleUFycmF5LmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICBrZXlBcnJheS5wdXNoKGtleSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVkdXBBcnJheU1hcC5zZXQodGFyZ2V0T2JqLCBba2V5XSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNldHRpbmdzLnNvcnRBcnJheXMpIHtcbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5hZnRlckVhY2ggIT09IGRlZmF1bHRzLmFmdGVyRWFjaCkge1xuICAgICAgICAgICAgICBtZXJnZVZhbCA9IG1lcmdlVmFsLnNvcnQoc29ydEFycmF5Rm4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3Qga2V5QXJyYXkgPSBzb3J0QXJyYXlNYXAuZ2V0KHRhcmdldE9iaik7XG4gICAgICAgICAgICAgIGlmIChrZXlBcnJheSAmJiAha2V5QXJyYXkuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIGtleUFycmF5LnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzb3J0QXJyYXlNYXAuc2V0KHRhcmdldE9iaiwgW2tleV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG1lcmdlVmFsIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgIG1lcmdlVmFsID0gbmV3IERhdGUobWVyZ2VWYWwpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KG1lcmdlVmFsKSAmJiAoIWlzUmV0dXJuVmFsIHx8ICFpc1Byb3BEZXNjcmlwdG9yKG1lcmdlVmFsKSkpIHtcbiAgICAgICAgICBtZXJnZURlcHRoKys7XG4gICAgICAgICAgaWYgKGlzT2JqZWN0KHRhcmdldFZhbCkpIHtcbiAgICAgICAgICAgIG1lcmdlVmFsID0gX21lcmdpY2lhbih0YXJnZXRWYWwsIG1lcmdlVmFsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVyZ2VWYWwgPSBfbWVyZ2ljaWFuKG1lcmdlVmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWVyZ2VEZXB0aC0tO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXR0aW5ncy5hZnRlckVhY2ggIT09IGRlZmF1bHRzLmFmdGVyRWFjaCkge1xuICAgICAgICAgIGNvbnN0IHJldHVyblZhbCA9IHNldHRpbmdzLmFmdGVyRWFjaCh7XG4gICAgICAgICAgICBkZXB0aDogbWVyZ2VEZXB0aCxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIG1lcmdlVmFsLFxuICAgICAgICAgICAgc3JjT2JqLFxuICAgICAgICAgICAgdGFyZ2V0T2JqXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHJldHVyblZhbCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBpc1JldHVyblZhbCA9IHRydWU7XG4gICAgICAgICAgICBtZXJnZVZhbCA9IHJldHVyblZhbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUmV0dXJuVmFsKSB7XG4gICAgICAgICAgY29uc3QgcmV0dXJuRGVzY3JpcHRvciA9IGlzUHJvcERlc2NyaXB0b3IobWVyZ2VWYWwpID8gbWVyZ2VWYWwgOiB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IG1lcmdlVmFsLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXRPYmosIGtleSwgcmV0dXJuRGVzY3JpcHRvcik7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNyY0Rlc2NyaXB0b3IpIHtcbiAgICAgICAgICBjb25zdCB7IGNvbmZpZ3VyYWJsZSwgZW51bWVyYWJsZSwgZ2V0LCBzZXQsIHdyaXRhYmxlIH0gPSBzcmNEZXNjcmlwdG9yO1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24obWVyZ2VEZXNjcmlwdG9yLCB7XG4gICAgICAgICAgICBjb25maWd1cmFibGUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBnZXQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmludm9rZUdldHRlcnMpIHtcbiAgICAgICAgICAgICAgbWVyZ2VEZXNjcmlwdG9yLnZhbHVlID0gbWVyZ2VWYWw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtZXJnZURlc2NyaXB0b3IuZ2V0ID0gZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXNldHRpbmdzLnNraXBTZXR0ZXJzICYmIHR5cGVvZiBzZXQgPT09IFwiZnVuY3Rpb25cIiAmJiAhT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobWVyZ2VEZXNjcmlwdG9yLCBcInZhbHVlXCIpKSB7XG4gICAgICAgICAgICBtZXJnZURlc2NyaXB0b3Iuc2V0ID0gc2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIW1lcmdlRGVzY3JpcHRvci5nZXQgJiYgIW1lcmdlRGVzY3JpcHRvci5zZXQpIHtcbiAgICAgICAgICAgIG1lcmdlRGVzY3JpcHRvci53cml0YWJsZSA9IEJvb2xlYW4od3JpdGFibGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1lcmdlRGVzY3JpcHRvci5nZXQgJiYgIW1lcmdlRGVzY3JpcHRvci5zZXQgJiYgIShcInZhbHVlXCIgaW4gbWVyZ2VEZXNjcmlwdG9yKSkge1xuICAgICAgICAgIG1lcmdlRGVzY3JpcHRvci52YWx1ZSA9IG1lcmdlVmFsO1xuICAgICAgICAgIG1lcmdlRGVzY3JpcHRvci53cml0YWJsZSA9IHNyY0Rlc2NyaXB0b3IgJiYgXCJ3cml0YWJsZVwiIGluIHNyY0Rlc2NyaXB0b3IgPyBzcmNEZXNjcmlwdG9yLndyaXRhYmxlIDogdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0T2JqLCBrZXksIG1lcmdlRGVzY3JpcHRvcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0T2JqO1xuICAgIH0sIHt9KTtcbiAgICBmb3IgKGNvbnN0IFtvYmosIGtleUFycmF5XSBvZiBkZWR1cEFycmF5TWFwLmVudHJpZXMoKSkge1xuICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5QXJyYXkpIHtcbiAgICAgICAgY29uc3QgcHJvcERlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcbiAgICAgICAgY29uc3QgeyBjb25maWd1cmFibGUsIGVudW1lcmFibGUsIHdyaXRhYmxlIH0gPSBwcm9wRGVzY3JpcHRvcjtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgY29uZmlndXJhYmxlLFxuICAgICAgICAgIGVudW1lcmFibGUsXG4gICAgICAgICAgdmFsdWU6IFsuLi5uZXcgU2V0KG9ialtrZXldKV0sXG4gICAgICAgICAgd3JpdGFibGU6IHdyaXRhYmxlICE9PSB2b2lkIDAgPyB3cml0YWJsZSA6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgW29iaiwga2V5QXJyYXldIG9mIHNvcnRBcnJheU1hcC5lbnRyaWVzKCkpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleUFycmF5KSB7XG4gICAgICAgIG9ialtrZXldLnNvcnQoc29ydEFycmF5Rm4pO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgbmV3T2JqID0gbmV3T2JqUHJvcHM7XG4gICAgaWYgKCFzZXR0aW5ncy5za2lwUHJvdG8pIHtcbiAgICAgIGNvbnN0IGN1c3RvbVByb3RvcyA9IG9iamVjdHMyLnJlZHVjZSgocHJvdG9zQXJyLCBvYmopID0+IHtcbiAgICAgICAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcbiAgICAgICAgaWYgKHByb3RvICYmIHByb3RvICE9PSBPYmplY3QucHJvdG90eXBlKSB7XG4gICAgICAgICAgcHJvdG9zQXJyLnB1c2gocHJvdG8pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm90b3NBcnI7XG4gICAgICB9LCBbXSk7XG4gICAgICBpZiAoY3VzdG9tUHJvdG9zLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBuZXdPYmpQcm90byA9IF9tZXJnaWNpYW4oLi4uY3VzdG9tUHJvdG9zKTtcbiAgICAgICAgaWYgKHNldHRpbmdzLmhvaXN0UHJvdG8pIHtcbiAgICAgICAgICBuZXdPYmogPSBfbWVyZ2ljaWFuKG5ld09ialByb3RvLCBuZXdPYmpQcm9wcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3T2JqID0gT2JqZWN0LmNyZWF0ZShcbiAgICAgICAgICAgIG5ld09ialByb3RvLFxuICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobmV3T2JqUHJvcHMpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3T2JqO1xuICB9XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLm9iamVjdHMyKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gbWVyZ2ljaWFuKHsgLi4uc2V0dGluZ3MsIC4uLm9iamVjdHMyWzBdIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIF9tZXJnaWNpYW4oLi4ub2JqZWN0czIpO1xuICAgICAgfVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIF9tZXJnaWNpYW4oLi4uYXJndW1lbnRzKTtcbiAgfVxufVxuZXhwb3J0IHtcbiAgbWVyZ2ljaWFuXG59O1xuIiwiaW1wb3J0IHsgbWVyZ2ljaWFuIH0gZnJvbSAnbWVyZ2ljaWFuJztcblxuY29uc3QgREVGQVVMVF9MT0NBTEUgPSBcImVuLVVTXCI7XG5jb25zdCBub3JtYWxpemVFbnRpdGllcyA9IChlbnRpdGllcywgeyBtYXBGbiA9ICh4KSA9PiB4LCBmaWx0ZXJGbiA9IEJvb2xlYW4sIH0pID0+IHtcbiAgICBpZiAoIWVudGl0aWVzKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGZpbHRlcmVkID0gZW50aXRpZXMuZmlsdGVyKGZpbHRlckZuKTtcbiAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID09PSAwKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiBmaWx0ZXJlZC5tYXAobWFwRm4pO1xufTtcbmNvbnN0IGdldE5hbWUgPSAoeCkgPT4geC5uYW1lO1xuY29uc3QgY2hlY2tUaW1lRGltZW5zaW9uID0gKHRpbWVEaW1lbnNpb24pID0+IEJvb2xlYW4odGltZURpbWVuc2lvbiAmJlxuICAgIHRpbWVEaW1lbnNpb24uZGltZW5zaW9uICYmXG4gICAgKHRpbWVEaW1lbnNpb24uZ3JhbnVsYXJpdHkgfHwgdGltZURpbWVuc2lvbi5kYXRlUmFuZ2UpKTtcbmNvbnN0IHZhbGlkYXRlT3JkZXJCeSA9IChvcmRlckJ5UGFyYW0sIGRpbWVuc2lvbnMsIG1lYXN1cmVzLCB0aW1lRGltZW5zaW9ucykgPT4ge1xuICAgIGNvbnN0IHVua25vd25EaW1lbnNpb25zT3JNZWFzdXJlcyA9IFtdO1xuICAgIGNvbnN0IGRpbWVuc2lvbkFuZE1lYXN1cmVOYW1lcyA9IFtcbiAgICAgICAgLi4uWy4uLm1lYXN1cmVzLCAuLi5kaW1lbnNpb25zXS5maWx0ZXIoQm9vbGVhbikubWFwKCh4KSA9PiB4Lm5hbWUpLFxuICAgICAgICAuLi50aW1lRGltZW5zaW9uc1xuICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAgICAgLm1hcCgoeCkgPT4geC5kaW1lbnNpb24pXG4gICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pLFxuICAgIF07XG4gICAgZm9yIChjb25zdCBvcmRlckJ5IG9mIG9yZGVyQnlQYXJhbSkge1xuICAgICAgICBjb25zdCB7IG5hbWUgfSA9IG9yZGVyQnkucHJvcGVydHk7XG4gICAgICAgIGlmIChkaW1lbnNpb25BbmRNZWFzdXJlTmFtZXMuaW5jbHVkZXMobmFtZSkpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgdW5rbm93bkRpbWVuc2lvbnNPck1lYXN1cmVzLnB1c2gobmFtZSk7XG4gICAgfVxuICAgIHJldHVybiB1bmtub3duRGltZW5zaW9uc09yTWVhc3VyZXM7XG59O1xuY29uc3QgY3JlYXRlQnVpbHRJblR5cGUgPSAobmFtZSwgdHlwZUNvbmZpZyA9IHt9KSA9PiAoe1xuICAgIF9fZW1iZWRkYWJsZVR5cGU6IFwiYnVpbHQtaW5cIixcbiAgICB0b1N0cmluZzogKCkgPT4gbmFtZSxcbiAgICB0eXBlQ29uZmlnOiB7XG4gICAgICAgIGxhYmVsOiBuYW1lLFxuICAgICAgICBvcHRpb25MYWJlbDogKCkgPT4gbmFtZSxcbiAgICAgICAgLi4udHlwZUNvbmZpZyxcbiAgICB9LFxufSk7XG5jb25zdCB2YWxpZGF0ZUZpbHRlciA9IChmaWx0ZXIpID0+IHtcbiAgICBpZiAoIWZpbHRlci5wcm9wZXJ0eSlcbiAgICAgICAgcmV0dXJuIFwiZmlsdGVyIHByb3BlcnR5IG11c3QgYmUgc2V0XCI7XG4gICAgaWYgKCFmaWx0ZXIub3BlcmF0b3IpXG4gICAgICAgIHJldHVybiBcImZpbHRlciBvcGVyYXRvciBtdXN0IGJlIHNldFwiO1xufTtcbmNvbnN0IGNvbnZlcnRGaWx0ZXJWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuICAgIC8vIG5vIG5lZWQgdG8gY29udmVydCB0aGVzZSB2YWx1ZXNcbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fFxuICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIiB8fFxuICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgICAgIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgLy8gdGltZSBvciB0aW1lUmFuZ2UgbXVzdCBiZSBjb252ZXJ0ZWRcbiAgICBpZiAodmFsdWU/LnJlbGF0aXZlVGltZVN0cmluZylcbiAgICAgICAgcmV0dXJuIHZhbHVlPy5yZWxhdGl2ZVRpbWVTdHJpbmc7XG4gICAgaWYgKE9iamVjdC5oYXNPd24odmFsdWUsIFwiZGF0ZVwiKSlcbiAgICAgICAgcmV0dXJuIHZhbHVlPy5kYXRlO1xuICAgIGlmIChPYmplY3QuaGFzT3duKHZhbHVlLCBcImZyb21cIikgfHwgT2JqZWN0Lmhhc093bih2YWx1ZSwgXCJ0b1wiKSkge1xuICAgICAgICBjb25zdCB0aW1lUmFuZ2UgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIFt0aW1lUmFuZ2U/LmZyb20sIHRpbWVSYW5nZT8udG9dLmZpbHRlcihCb29sZWFuKTtcbiAgICB9XG59O1xuZnVuY3Rpb24gZGVkdXBsaWNhdGVFbnRpdGllc0J5TmFtZShlbnRpdGllcykge1xuICAgIGlmICghZW50aXRpZXMgfHwgZW50aXRpZXMubGVuZ3RoID09PSAwKVxuICAgICAgICByZXR1cm4gW107XG4gICAgY29uc3Qgc2VlbiA9IG5ldyBTZXQoKTtcbiAgICByZXR1cm4gZW50aXRpZXMuZmlsdGVyKChlbnRpdHkpID0+IHtcbiAgICAgICAgaWYgKHNlZW4uaGFzKGVudGl0eS5uYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHNlZW4uYWRkKGVudGl0eS5uYW1lKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG59XG5cbmNvbnN0IERJTUVOU0lPTl9UWVBFID0gXCJkaW1lbnNpb25cIjtcbmNvbnN0IE1FQVNVUkVfVFlQRSA9IFwibWVhc3VyZVwiO1xuY29uc3QgZGVlcEZsYXR0ZW5TZWxlY3QgPSAoaW5wdXQpID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0LmZsYXRNYXAoZGVlcEZsYXR0ZW5TZWxlY3QpO1xuICAgIH1cbiAgICByZXR1cm4gW2lucHV0XTtcbn07XG5jb25zdCBwcm9jZXNzU2VsZWN0UGFyYW0gPSAoc2VsZWN0UGFyYW0pID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIGRpbWVuc2lvbnM6IFtdLFxuICAgICAgICBtZWFzdXJlczogW10sXG4gICAgICAgIHRpbWVEaW1lbnNpb25zOiBbXSxcbiAgICB9O1xuICAgIGlmICghc2VsZWN0UGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgY29uc3QgZmxhdCA9IGRlZXBGbGF0dGVuU2VsZWN0KHNlbGVjdFBhcmFtKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgaWYgKCFmbGF0Lmxlbmd0aCkge1xuICAgICAgICByZXN1bHQuZXJyb3IgPSBcInNlbGVjdCBtdXN0IG5vdCBiZSBlbXB0eVwiO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGVudCBvZiBmbGF0KSB7XG4gICAgICAgIGNvbnN0IGlzVmFsaWRFbnRpdHkgPSB0eXBlb2YgZW50ID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICAoaXNEaW1lbnNpb25Pck1lYXN1cmUoZW50KSB8fCBpc1RpbWVEaW1lbnNpb24oZW50KSk7XG4gICAgICAgIGlmICghaXNWYWxpZEVudGl0eSkge1xuICAgICAgICAgICAgcmVzdWx0LmVycm9yID1cbiAgICAgICAgICAgICAgICBcInNlbGVjdCBtdXN0IG9ubHkgY29udGFpbiBEaW1lbnNpb24sIE1lYXN1cmUgb3IgVGltZURpbWVuc2lvbiBvYmplY3RzXCI7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1RpbWVEaW1lbnNpb24oZW50KSkge1xuICAgICAgICAgICAgcmVzdWx0LnRpbWVEaW1lbnNpb25zLnB1c2goZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0RpbWVuc2lvbihlbnQpKSB7XG4gICAgICAgICAgICBjb25zdCBkaW1lbnNpb24gPSBlbnQ7XG4gICAgICAgICAgICBjb25zdCBncmFudWxhcml0eSA9IGRpbWVuc2lvbi5pbnB1dHM/LmdyYW51bGFyaXR5O1xuICAgICAgICAgICAgaWYgKGRpbWVuc2lvbi5uYXRpdmVUeXBlID09PSBcInRpbWVcIiAmJiBncmFudWxhcml0eSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC50aW1lRGltZW5zaW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uOiBkaW1lbnNpb24ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZ3JhbnVsYXJpdHksXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkaW1lbnNpb24udGl0bGUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZGltZW5zaW9ucy5wdXNoKGRpbWVuc2lvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNNZWFzdXJlKGVudCkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5tZWFzdXJlcy5wdXNoKGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gXCJfX3R5cGVfX1wiIGluIGVudCA/IGVudC5fX3R5cGVfXyA6IHR5cGVvZiBlbnQ7XG4gICAgICAgICAgICByZXN1bHQuZXJyb3IgPSBgVW5rbm93biBfX3R5cGVfXyBpbiBzZWxlY3Q6ICR7dHlwZX1gO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbmZ1bmN0aW9uIHZhbGlkYXRlTGVnYWN5RmllbGRzKHJlcXVlc3QpIHtcbiAgICBpZiAocmVxdWVzdC5tZWFzdXJlcz8ubGVuZ3RoID4gMCAmJlxuICAgICAgICByZXF1ZXN0Lm1lYXN1cmVzLnNvbWUoKG0pID0+IG0/Ll9fdHlwZV9fICE9PSBNRUFTVVJFX1RZUEUpKSB7XG4gICAgICAgIHJldHVybiBcIlVuZXhwZWN0ZWQgdHlwZSBwYXNzZWQgdG8gYG1lYXN1cmVzYCBpbiBsb2FkRGF0YSBmdW5jdGlvbi4gIEV4cGVjdGVkIGFuIGFycmF5IG9mIHR5cGUgTWVhc3VyZS5cIjtcbiAgICB9XG4gICAgaWYgKHJlcXVlc3QuZGltZW5zaW9ucz8ubGVuZ3RoID4gMCAmJlxuICAgICAgICByZXF1ZXN0LmRpbWVuc2lvbnMuc29tZSgobSkgPT4gbT8uX190eXBlX18gIT09IERJTUVOU0lPTl9UWVBFKSkge1xuICAgICAgICByZXR1cm4gXCJVbmV4cGVjdGVkIHR5cGUgcGFzc2VkIHRvIGBkaW1lbnNpb25zYCBpbiBsb2FkRGF0YSBmdW5jdGlvbi4gIEV4cGVjdGVkIGFuIGFycmF5IG9mIHR5cGUgRGltZW5zaW9uLlwiO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHByb2Nlc3NBcGlTZWxlY3Rpb24ocmVxdWVzdCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgZGltZW5zaW9uczogW10sXG4gICAgICAgIG1lYXN1cmVzOiBbXSxcbiAgICAgICAgdGltZURpbWVuc2lvbnM6IFtdLFxuICAgICAgICB1c2luZ1NlbGVjdDogZmFsc2UsXG4gICAgfTtcbiAgICBpZiAocmVxdWVzdC5zZWxlY3QpIHtcbiAgICAgICAgcmVzdWx0LnVzaW5nU2VsZWN0ID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgc2VsZWN0UmVzdWx0ID0gcHJvY2Vzc1NlbGVjdFBhcmFtKHJlcXVlc3Quc2VsZWN0KTtcbiAgICAgICAgaWYgKHNlbGVjdFJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgcmVzdWx0LmVycm9yID0gc2VsZWN0UmVzdWx0LmVycm9yO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZGltZW5zaW9ucyA9IHNlbGVjdFJlc3VsdC5kaW1lbnNpb25zO1xuICAgICAgICByZXN1bHQubWVhc3VyZXMgPSBzZWxlY3RSZXN1bHQubWVhc3VyZXM7XG4gICAgICAgIHJlc3VsdC50aW1lRGltZW5zaW9ucyA9IHNlbGVjdFJlc3VsdC50aW1lRGltZW5zaW9ucztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGxlZ2FjeUVycm9yID0gdmFsaWRhdGVMZWdhY3lGaWVsZHMocmVxdWVzdCk7XG4gICAgICAgIGlmIChsZWdhY3lFcnJvcikge1xuICAgICAgICAgICAgcmVzdWx0LmVycm9yID0gbGVnYWN5RXJyb3I7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5kaW1lbnNpb25zID1cbiAgICAgICAgICAgIG5vcm1hbGl6ZUVudGl0aWVzKHJlcXVlc3QuZGltZW5zaW9ucywgeyBtYXBGbjogKHgpID0+IHggfSkgPz8gW107XG4gICAgICAgIHJlc3VsdC5tZWFzdXJlcyA9XG4gICAgICAgICAgICBub3JtYWxpemVFbnRpdGllcyhyZXF1ZXN0Lm1lYXN1cmVzLCB7IG1hcEZuOiAoeCkgPT4geCB9KSA/PyBbXTtcbiAgICAgICAgcmVzdWx0LnRpbWVEaW1lbnNpb25zID1cbiAgICAgICAgICAgIG5vcm1hbGl6ZUVudGl0aWVzKHJlcXVlc3QudGltZURpbWVuc2lvbnMsIHsgZmlsdGVyRm46IEJvb2xlYW4gfSkgPz8gW107XG4gICAgfVxuICAgIHJlc3VsdC5kaW1lbnNpb25zID0gZGVkdXBsaWNhdGVFbnRpdGllc0J5TmFtZShyZXN1bHQuZGltZW5zaW9ucyk7XG4gICAgcmVzdWx0Lm1lYXN1cmVzID0gZGVkdXBsaWNhdGVFbnRpdGllc0J5TmFtZShyZXN1bHQubWVhc3VyZXMpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZU9yZGVyQnlMb2dpYyhvcmRlckJ5LCBkaW1lbnNpb25zLCBtZWFzdXJlcywgdGltZURpbWVuc2lvbnMpIHtcbiAgICBjb25zdCB1bmtub3duRGltZW5zaW9uc09yTWVhc3VyZXMgPSB2YWxpZGF0ZU9yZGVyQnkob3JkZXJCeSA/PyBbXSwgZGltZW5zaW9ucywgbWVhc3VyZXMsIHRpbWVEaW1lbnNpb25zKTtcbiAgICBpZiAodW5rbm93bkRpbWVuc2lvbnNPck1lYXN1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIGBDYW5ub3Qgb3JkZXIgYnkgJHt1bmtub3duRGltZW5zaW9uc09yTWVhc3VyZXMuam9pbihcIiwgXCIpfSBhcyBubyBzdWNoICR7dW5rbm93bkRpbWVuc2lvbnNPck1lYXN1cmVzLmxlbmd0aCA9PT0gMSA/IFwicHJvcGVydHlcIiA6IFwicHJvcGVydGllc1wifSBoYXMgYmVlbiBsb2FkZWQuYDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZUZpbHRlcnNMb2dpYyhmaWx0ZXJzKSB7XG4gICAgaWYgKGZpbHRlcnMpIHtcbiAgICAgICAgY29uc3QgZXJyb3JzID0gZmlsdGVyc1xuICAgICAgICAgICAgLm1hcCgoZiwgaW5kZXgpID0+ICh7XG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IHZhbGlkYXRlRmlsdGVyKGYpLFxuICAgICAgICB9KSlcbiAgICAgICAgICAgIC5maWx0ZXIoKGUpID0+ICEhZS5tZXNzYWdlKTtcbiAgICAgICAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcnNcbiAgICAgICAgICAgICAgICAubWFwKChlKSA9PiBgZmlsdGVyWyR7ZS5pbmRleH1dIGlzIG5vdCB2YWxpZDogJHtlLm1lc3NhZ2V9YClcbiAgICAgICAgICAgICAgICAuam9pbihcIlxcblwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIGJ1aWxkUXVlcnlPYmplY3QocmVxdWVzdCwgZGltZW5zaW9ucywgbWVhc3VyZXMsIHRpbWVEaW1lbnNpb25zLCBvcmRlcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlucHV0TmFtZTogcmVxdWVzdC5mcm9tLmlucHV0TmFtZSxcbiAgICAgICAgZGF0YXNldElkOiByZXF1ZXN0LmZyb20uZGF0YXNldElkLFxuICAgICAgICBlbWJlZGRhYmxlSWQ6IHJlcXVlc3QuZnJvbS5lbWJlZGRhYmxlSWQsXG4gICAgICAgIGRpbWVuc2lvbnM6IG5vcm1hbGl6ZUVudGl0aWVzKGRpbWVuc2lvbnMsIHsgbWFwRm46IGdldE5hbWUgfSkgPz8gW10sXG4gICAgICAgIG1lYXN1cmVzOiBub3JtYWxpemVFbnRpdGllcyhtZWFzdXJlcywgeyBtYXBGbjogZ2V0TmFtZSB9KSA/PyBbXSxcbiAgICAgICAgb3JkZXIsXG4gICAgICAgIHRpbWVEaW1lbnNpb25zOiBub3JtYWxpemVFbnRpdGllcyh0aW1lRGltZW5zaW9ucywgeyBmaWx0ZXJGbjogY2hlY2tUaW1lRGltZW5zaW9uIH0pID8/IFtdLFxuICAgICAgICBvZmZzZXQ6IHJlcXVlc3Qub2Zmc2V0LFxuICAgICAgICBsaW1pdDogcmVxdWVzdC5saW1pdCxcbiAgICAgICAgdmFyaWFibGVWYWx1ZXM6IHJlcXVlc3QuZnJvbS52YXJpYWJsZVZhbHVlcyxcbiAgICAgICAgZmlsdGVyczogcmVxdWVzdC5maWx0ZXJzPy5tYXAoKGYpID0+ICh7XG4gICAgICAgICAgICBtZW1iZXI6IGYucHJvcGVydHkubmFtZSxcbiAgICAgICAgICAgIG9wZXJhdG9yOiBmLm9wZXJhdG9yLFxuICAgICAgICAgICAgdmFsdWVzOiBjb252ZXJ0RmlsdGVyVmFsdWUoZi52YWx1ZSksXG4gICAgICAgIH0pKSxcbiAgICB9O1xufVxuXG5jb25zdCBMT0FEX0RBVEFfRVZFTlQgPSBcImVtYmVkZGFibGUtZXZlbnQ6bG9hZC1kYXRhXCI7XG5jb25zdCBGaWx0ZXJPcGVyYXRvciA9IHtcbiAgICBlcXVhbHM6IFwiZXF1YWxzXCIsXG4gICAgbm90RXF1YWxzOiBcIm5vdEVxdWFsc1wiLFxuICAgIGNvbnRhaW5zOiBcImNvbnRhaW5zXCIsXG4gICAgbm90Q29udGFpbnM6IFwibm90Q29udGFpbnNcIixcbiAgICBzdGFydHNXaXRoOiBcInN0YXJ0c1dpdGhcIixcbiAgICBlbmRzV2l0aDogXCJlbmRzV2l0aFwiLFxuICAgIGd0OiBcImd0XCIsXG4gICAgZ3RlOiBcImd0ZVwiLFxuICAgIGx0OiBcImx0XCIsXG4gICAgbHRlOiBcImx0ZVwiLFxuICAgIG5vdE51bGw6IFwic2V0XCIsXG4gICAgaXNOdWxsOiBcIm5vdFNldFwiLFxuICAgIGluRGF0ZVJhbmdlOiBcImluRGF0ZVJhbmdlXCIsXG4gICAgbm90SW5EYXRlUmFuZ2U6IFwibm90SW5EYXRlUmFuZ2VcIixcbiAgICBiZWZvcmVEYXRlOiBcImJlZm9yZURhdGVcIixcbiAgICBhZnRlckRhdGU6IFwiYWZ0ZXJEYXRlXCIsXG4gICAgbWVhc3VyZUZpbHRlcjogXCJtZWFzdXJlRmlsdGVyXCIsXG59O1xuY29uc3QgaXNMb2FkRGF0YVBhcmFtcyA9IChsZHApID0+IHR5cGVvZiBsZHAgPT09IFwib2JqZWN0XCIgJiZcbiAgICBsZHAgJiZcbiAgICBcInJlcXVlc3RQYXJhbXNcIiBpbiBsZHAgJiZcbiAgICBcImRhdGFMb2FkZXJcIiBpbiBsZHA7XG5jb25zdCBleGVjdXRlRGF0YVJlcXVlc3QgPSAodHJpZ2dlckVsZW1lbnQsIHJlcXVlc3QsIGNvbXBvbmVudElkLCBwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICBpZiAoIXJlcXVlc3QuZnJvbSlcbiAgICAgICAgcmV0dXJuIFwiTm8gZGF0YXNldCBzZWxlY3RlZFwiO1xuICAgIC8vIE11dHVhbGx5IGV4Y2x1c2l2ZSBBUEkgY2hlY2tcbiAgICBpZiAocmVxdWVzdC5zZWxlY3QgJiZcbiAgICAgICAgKHJlcXVlc3QuZGltZW5zaW9ucyB8fCByZXF1ZXN0Lm1lYXN1cmVzIHx8IHJlcXVlc3QudGltZURpbWVuc2lvbnMpKSB7XG4gICAgICAgIHJldHVybiBcImxvYWREYXRhIGV4cGVjdHMgeW91IHRvIHVzZSBlaXRoZXIgZGltZW5zaW9ucywgdGltZURpbWVuc2lvbnMgYW5kIG1lYXN1cmVzLCBvciBzZWxlY3QuIFlvdSBjYW5ub3QgdXNlIGJvdGggdG9nZXRoZXIuXCI7XG4gICAgfVxuICAgIC8vIFByb2Nlc3Mgc2VsZWN0IG9yIGxlZ2FjeSBmaWVsZHNcbiAgICBjb25zdCBhcGlSZXN1bHQgPSBwcm9jZXNzQXBpU2VsZWN0aW9uKHJlcXVlc3QpO1xuICAgIGlmIChhcGlSZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGFwaVJlc3VsdC5lcnJvcjtcbiAgICB9XG4gICAgY29uc3QgeyBkaW1lbnNpb25zLCBtZWFzdXJlcywgdGltZURpbWVuc2lvbnMgfSA9IGFwaVJlc3VsdDtcbiAgICAvLyBWYWxpZGF0ZSByZXF1aXJlZCBmaWVsZHNcbiAgICBjb25zdCBkaW1lbnNpb25zT3JNZWFzdXJlc0RlZmluZWQgPSBkaW1lbnNpb25zLmxlbmd0aCB8fCBtZWFzdXJlcy5sZW5ndGggfHwgdGltZURpbWVuc2lvbnMubGVuZ3RoO1xuICAgIGlmICghZGltZW5zaW9uc09yTWVhc3VyZXNEZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBcIkF0IGxlYXN0IGEgZGltZW5zaW9uIG9yIGEgbWVhc3VyZSBzaG91bGQgYmUgc2VsZWN0ZWQuXCI7XG4gICAgfVxuICAgIC8vIE9yZGVyIEJ5IFZhbGlkYXRpb25cbiAgICBjb25zdCBvcmRlckJ5RXJyb3IgPSB2YWxpZGF0ZU9yZGVyQnlMb2dpYyhyZXF1ZXN0Lm9yZGVyQnksIGRpbWVuc2lvbnMsIG1lYXN1cmVzLCB0aW1lRGltZW5zaW9ucyk7XG4gICAgaWYgKG9yZGVyQnlFcnJvcikge1xuICAgICAgICByZXR1cm4gb3JkZXJCeUVycm9yO1xuICAgIH1cbiAgICAvLyBGaWx0ZXIgVmFsaWRhdGlvblxuICAgIGNvbnN0IGZpbHRlckVycm9yID0gdmFsaWRhdGVGaWx0ZXJzTG9naWMocmVxdWVzdC5maWx0ZXJzKTtcbiAgICBpZiAoZmlsdGVyRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGZpbHRlckVycm9yO1xuICAgIH1cbiAgICAvLyBQcmVwYXJlIE9yZGVyQnkgZm9yIHF1ZXJ5XG4gICAgY29uc3Qgb3JkZXIgPSBub3JtYWxpemVFbnRpdGllcyhyZXF1ZXN0Lm9yZGVyQnksIHtcbiAgICAgICAgbWFwRm46IChvKSA9PiBbby5wcm9wZXJ0eS5uYW1lLCBvLmRpcmVjdGlvbl0sXG4gICAgfSk7XG4gICAgLy8gQnVpbGQgUXVlcnkgT2JqZWN0XG4gICAgY29uc3QgcXVlcnkgPSBidWlsZFF1ZXJ5T2JqZWN0KHJlcXVlc3QsIGRpbWVuc2lvbnMsIG1lYXN1cmVzLCB0aW1lRGltZW5zaW9ucywgb3JkZXIpO1xuICAgIC8vIERpc3BhdGNoIEV2ZW50XG4gICAgdHJpZ2dlckVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoTE9BRF9EQVRBX0VWRU5ULCB7XG4gICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgIGNvbXBvc2VkOiB0cnVlLFxuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgY29tcG9uZW50SWQsXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgIH0sXG4gICAgfSkpO1xufTtcbmNvbnN0IGxvYWREYXRhID0gKHJlcXVlc3RQYXJhbXMpID0+ICh7XG4gICAgcmVxdWVzdFBhcmFtcyxcbiAgICBkYXRhTG9hZGVyOiBleGVjdXRlRGF0YVJlcXVlc3QsXG59KTtcbmNvbnN0IGlzRGltZW5zaW9uID0gKGRpbWVuc2lvbk9yTWVhc3VyZSkgPT4gZGltZW5zaW9uT3JNZWFzdXJlPy5fX3R5cGVfXyA9PT0gRElNRU5TSU9OX1RZUEU7XG5jb25zdCBpc01lYXN1cmUgPSAoZGltZW5zaW9uT3JNZWFzdXJlKSA9PiBkaW1lbnNpb25Pck1lYXN1cmU/Ll9fdHlwZV9fID09PSBNRUFTVVJFX1RZUEU7XG5jb25zdCBpc1RpbWVEaW1lbnNpb24gPSAoZGltZW5zaW9uT3JNZWFzdXJlKSA9PiBcImRpbWVuc2lvblwiIGluIChkaW1lbnNpb25Pck1lYXN1cmUgPz8ge30pICYmXG4gICAgIShcIl9fdHlwZV9fXCIgaW4gZGltZW5zaW9uT3JNZWFzdXJlKTtcbmNvbnN0IGlzRGltZW5zaW9uT3JNZWFzdXJlID0gKGRpbWVuc2lvbk9yTWVhc3VyZSkgPT4gaXNEaW1lbnNpb24oZGltZW5zaW9uT3JNZWFzdXJlKSB8fCBpc01lYXN1cmUoZGltZW5zaW9uT3JNZWFzdXJlKTtcblxuY29uc3QgZ2V0T3BlcmF0aW9uT2JqZWN0ID0gKG9wZXJhdGlvbiwgdmFsdWUpID0+ICh7XG4gICAgb3BlcmF0aW9uLFxuICAgIHZhbHVlOiB2YWx1ZSA/PyBudWxsLFxuICAgIF9fZW1iZWRkYWJsZVZhcmlhYmxlTWV0YTogdHJ1ZSxcbn0pO1xuY29uc3QgVmFsdWUgPSB7XG4gICAgbm9GaWx0ZXI6ICgpID0+IGdldE9wZXJhdGlvbk9iamVjdChcIk5PX0ZJTFRFUlwiKSxcbiAgICBvZjogKHZhbHVlKSA9PiBnZXRPcGVyYXRpb25PYmplY3QoXCJWQUxVRVwiLCB2YWx1ZSksXG59O1xuXG5jb25zdCBVUERBVEVfVkFMVUVfRVZFTlQgPSBcImVtYmVkZGFibGU6dmFsdWU6Y2hhbmdlZFwiO1xuY29uc3Qgc2V0VmFsdWUgPSAodHJpZ2dlckVsZW1lbnQsIHZhbHVlLCBjb21wb25lbnRJZCwgZXZlbnROYW1lKSA9PiB7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoVVBEQVRFX1ZBTFVFX0VWRU5ULCB7XG4gICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgIGNvbXBvc2VkOiB0cnVlLFxuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIGNvbXBvbmVudElkLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBldmVudE5hbWUsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgdHJpZ2dlckVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59O1xuXG4vLyBIZWxwZXIgdG8gZ2V0IHRoZSBidW5kbGVIYXNoIGZyb20gd2luZG93IGlmIGF2YWlsYWJsZVxuY29uc3QgZ2V0QnVuZGxlSGFzaCQxID0gKCkgPT4gZ2xvYmFsVGhpcy5fX0VNQkVEREFCTEVfQlVORExFX0hBU0hfXyA/PyBudWxsO1xuY29uc3QgZGVmaW5lVHlwZSA9ICh0eXBlTmFtZSwgdHlwZUNvbmZpZykgPT4ge1xuICAgIGlmIChBTExfTkFUSVZFX1RZUEVTLmluY2x1ZGVzKHR5cGVOYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFR5cGUgJHt0eXBlTmFtZX0gaXMgcGFydCBvZiB0aGUgbmF0aXZlVHlwZXMgYW5kIGNhbm5vdCBiZSBkZWZpbmVkYCwgeyBjYXVzZTogXCJzZGtcIiB9KTtcbiAgICB9XG4gICAgY29uc3QgdHlwZSA9IHtcbiAgICAgICAgX19lbWJlZGRhYmxlVHlwZTogXCJjdXN0b21cIixcbiAgICAgICAgdG9TdHJpbmc6ICgpID0+IHR5cGVOYW1lLFxuICAgICAgICB0eXBlQ29uZmlnLFxuICAgIH07XG4gICAgLy8gR2V0IHRoZSBidW5kbGVIYXNoIGZyb20gc3RvcmVkIHZhbHVlIG9yIHdpbmRvd1xuICAgIGNvbnN0IGJ1bmRsZUhhc2ggPSBnZXRCdW5kbGVIYXNoJDEoKTtcbiAgICBnbG9iYWxUaGlzLl9fRU1CRUREQUJMRV9fID0gZ2xvYmFsVGhpcy5fX0VNQkVEREFCTEVfXyB8fCB7fTtcbiAgICBjb25zdCBlbWJlZGRhYmxlID0gYnVuZGxlSGFzaFxuICAgICAgICA/IChnbG9iYWxUaGlzLl9fRU1CRUREQUJMRV9fW2J1bmRsZUhhc2hdID1cbiAgICAgICAgICAgIGdsb2JhbFRoaXMuX19FTUJFRERBQkxFX19bYnVuZGxlSGFzaF0gfHwge30pXG4gICAgICAgIDogZ2xvYmFsVGhpcy5fX0VNQkVEREFCTEVfXztcbiAgICBlbWJlZGRhYmxlLnR5cGVzID0gZW1iZWRkYWJsZS50eXBlcyB8fCB7fTtcbiAgICAvLyBQcmVzZXJ2ZSBleGlzdGluZyB0eXBlcyBieSBtZXJnaW5nIHdpdGggbmV3IHR5cGVcbiAgICBlbWJlZGRhYmxlLnR5cGVzID0ge1xuICAgICAgICAuLi5lbWJlZGRhYmxlLnR5cGVzLFxuICAgICAgICBbdHlwZU5hbWVdOiB7XG4gICAgICAgICAgICBuYW1lOiB0eXBlTmFtZSxcbiAgICAgICAgICAgIC4uLnR5cGVDb25maWcsXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gdHlwZTtcbn07XG5jb25zdCBTVFJJTkcgPSBcInN0cmluZ1wiO1xuY29uc3QgTlVNQkVSID0gXCJudW1iZXJcIjtcbmNvbnN0IEJPT0xFQU4gPSBcImJvb2xlYW5cIjtcbmNvbnN0IFRJTUUgPSBcInRpbWVcIjtcbmNvbnN0IFRJTUVfUkFOR0UgPSBcInRpbWVSYW5nZVwiO1xuY29uc3QgR1JBTlVMQVJJVFkgPSBcImdyYW51bGFyaXR5XCI7XG5jb25zdCBEQVRBU0VUID0gXCJkYXRhc2V0XCI7XG5jb25zdCBNRUFTVVJFID0gXCJtZWFzdXJlXCI7XG5jb25zdCBESU1FTlNJT04gPSBcImRpbWVuc2lvblwiO1xuY29uc3QgRElNRU5TSU9OX09SX01FQVNVUkUgPSBcImRpbWVuc2lvbk9yTWVhc3VyZVwiO1xuY29uc3QgREVGQVVMVF9OQVRJVkVfVFlQRVMgPSBbXG4gICAgU1RSSU5HLFxuICAgIE5VTUJFUixcbiAgICBCT09MRUFOLFxuICAgIFRJTUUsXG4gICAgVElNRV9SQU5HRSxcbiAgICBHUkFOVUxBUklUWSxcbl07XG5jb25zdCBBTExfTkFUSVZFX1RZUEVTID0gW1xuICAgIC4uLkRFRkFVTFRfTkFUSVZFX1RZUEVTLFxuICAgIERBVEFTRVQsXG4gICAgTUVBU1VSRSxcbiAgICBESU1FTlNJT04sXG4gICAgRElNRU5TSU9OX09SX01FQVNVUkUsXG5dO1xuY29uc3QgTUVBU1VSRV9UWVBFX1NUUklORyA9IFwic3RyaW5nXCI7XG5jb25zdCBNRUFTVVJFX1RZUEVfVElNRSA9IFwidGltZVwiO1xuY29uc3QgTUVBU1VSRV9UWVBFX0JPT0xFQU4gPSBcImJvb2xlYW5cIjtcbmNvbnN0IE1FQVNVUkVfVFlQRV9OVU1CRVIgPSBcIm51bWJlclwiO1xuY29uc3QgTUVBU1VSRV9UWVBFX0NPVU5UID0gXCJjb3VudFwiO1xuY29uc3QgTUVBU1VSRV9UWVBFX0NPVU5UX0RJU1RJTkNUID0gXCJjb3VudF9kaXN0aW5jdFwiO1xuY29uc3QgTUVBU1VSRV9UWVBFX0NPVU5UX0RJU1RJTkNUX0FQUFJPWCA9IFwiY291bnRfZGlzdGluY3RfYXBwcm94XCI7XG5jb25zdCBNRUFTVVJFX1RZUEVfU1VNID0gXCJzdW1cIjtcbmNvbnN0IE1FQVNVUkVfVFlQRV9BVkcgPSBcImF2Z1wiO1xuY29uc3QgTUVBU1VSRV9UWVBFX01JTiA9IFwibWluXCI7XG5jb25zdCBNRUFTVVJFX1RZUEVfTUFYID0gXCJtYXhcIjtcbmNvbnN0IE1FQVNVUkVfVFlQRVMgPSBbXG4gICAgTUVBU1VSRV9UWVBFX1NUUklORyxcbiAgICBNRUFTVVJFX1RZUEVfVElNRSxcbiAgICBNRUFTVVJFX1RZUEVfQk9PTEVBTixcbiAgICBNRUFTVVJFX1RZUEVfTlVNQkVSLFxuICAgIE1FQVNVUkVfVFlQRV9DT1VOVCxcbiAgICBNRUFTVVJFX1RZUEVfQ09VTlRfRElTVElOQ1QsXG4gICAgTUVBU1VSRV9UWVBFX0NPVU5UX0RJU1RJTkNUX0FQUFJPWCxcbiAgICBNRUFTVVJFX1RZUEVfU1VNLFxuICAgIE1FQVNVUkVfVFlQRV9BVkcsXG4gICAgTUVBU1VSRV9UWVBFX01JTixcbiAgICBNRUFTVVJFX1RZUEVfTUFYLFxuXTtcbmNvbnN0IERJTUVOU0lPTl9UWVBFX1NUUklORyA9IFwic3RyaW5nXCI7XG5jb25zdCBESU1FTlNJT05fVFlQRV9OVU1CRVIgPSBcIm51bWJlclwiO1xuY29uc3QgRElNRU5TSU9OX1RZUEVfQk9PTEVBTiA9IFwiYm9vbGVhblwiO1xuY29uc3QgRElNRU5TSU9OX1RZUEVfR0VPID0gXCJnZW9cIjtcbmNvbnN0IERJTUVOU0lPTl9UWVBFX1RJTUUgPSBcInRpbWVcIjtcbmNvbnN0IERJTUVOU0lPTl9UWVBFUyA9IFtcbiAgICBESU1FTlNJT05fVFlQRV9TVFJJTkcsXG4gICAgRElNRU5TSU9OX1RZUEVfTlVNQkVSLFxuICAgIERJTUVOU0lPTl9UWVBFX0JPT0xFQU4sXG4gICAgRElNRU5TSU9OX1RZUEVfR0VPLFxuICAgIERJTUVOU0lPTl9UWVBFX1RJTUUsXG5dO1xuY29uc3QgRElNRU5TSU9OX09SX01FQVNVUkVfVFlQRVMgPSBbXG4gICAgLi4uRElNRU5TSU9OX1RZUEVTLFxuICAgIC4uLk1FQVNVUkVfVFlQRVMsXG5dO1xuXG4vLyBIZWxwZXIgdG8gZ2V0IHRoZSBidW5kbGVIYXNoIGZyb20gd2luZG93IGlmIGF2YWlsYWJsZVxuLy8gQ2hlY2sgaWYgd2UgaGF2ZSBhIGJ1bmRsZUhhc2ggaW4gdGhlIHdpbmRvd1xuY29uc3QgZ2V0QnVuZGxlSGFzaCA9ICgpID0+IGdsb2JhbFRoaXMuX19FTUJFRERBQkxFX0JVTkRMRV9IQVNIX18gPz8gbnVsbDtcbmNvbnN0IGRlZmluZU9wdGlvbiA9ICh0eXBlLCBvcHRpb24pID0+IHtcbiAgICAvLyBHZXQgdGhlIGJ1bmRsZUhhc2ggZnJvbSBzdG9yZWQgdmFsdWUgb3Igd2luZG93XG4gICAgY29uc3QgYnVuZGxlSGFzaCA9IGdldEJ1bmRsZUhhc2goKTtcbiAgICBnbG9iYWxUaGlzLl9fRU1CRUREQUJMRV9fID8/PSB7fTtcbiAgICBjb25zdCBlbWJlZGRhYmxlID0gYnVuZGxlSGFzaFxuICAgICAgICA/IChnbG9iYWxUaGlzLl9fRU1CRUREQUJMRV9fW2J1bmRsZUhhc2hdID8/PSB7fSlcbiAgICAgICAgOiBnbG9iYWxUaGlzLl9fRU1CRUREQUJMRV9fO1xuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAvLyBIYW5kbGUgbmF0aXZlIHR5cGVzXG4gICAgICAgIGVtYmVkZGFibGUubmF0aXZlVHlwZXMgPSBlbWJlZGRhYmxlLm5hdGl2ZVR5cGVzIHx8IHt9O1xuICAgICAgICBlbWJlZGRhYmxlLm5hdGl2ZVR5cGVzW3R5cGVdID0gZW1iZWRkYWJsZS5uYXRpdmVUeXBlc1t0eXBlXSB8fCB7fTtcbiAgICAgICAgZW1iZWRkYWJsZS5uYXRpdmVUeXBlc1t0eXBlXS5vcHRpb25zID8/PSBbXTtcbiAgICAgICAgZW1iZWRkYWJsZS5uYXRpdmVUeXBlc1t0eXBlXS5vcHRpb25zLnB1c2gob3B0aW9uKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIEhhbmRsZSBjdXN0b20gdHlwZXNcbiAgICAgICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmICghZW1iZWRkYWJsZT8udHlwZXM/Llt0eXBlTmFtZV0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGVtYmVkZGFibGUudHlwZXNbdHlwZU5hbWVdLm9wdGlvbnMgPz89IFtdO1xuICAgICAgICBlbWJlZGRhYmxlLnR5cGVzW3R5cGVOYW1lXS5vcHRpb25zLnB1c2gob3B0aW9uKTtcbiAgICB9XG59O1xuXG5jb25zdCBTdHJpbmdUeXBlID0gY3JlYXRlQnVpbHRJblR5cGUoXCJzdHJpbmdcIiwge1xuICAgIHRyYW5zZm9ybTogKHZhbHVlKSA9PiB2YWx1ZSxcbiAgICBvcHRpb25MYWJlbDogKHZhbHVlKSA9PiBBcnJheS5pc0FycmF5KHZhbHVlKVxuICAgICAgICA/IGBbJHt2YWx1ZS5tYXAoKHYpID0+IGBcIiR7dn1cImApLmpvaW4oXCIsXCIpfV1gXG4gICAgICAgIDogYFwiJHt2YWx1ZX1cImAsXG59KTtcbmNvbnN0IE51bWJlclR5cGUgPSBjcmVhdGVCdWlsdEluVHlwZShcIm51bWJlclwiLCB7XG4gICAgdHJhbnNmb3JtOiAodmFsdWUpID0+IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiB2YWx1ZSA/IE51bWJlcih2YWx1ZSkgOiB2YWx1ZSxcbiAgICBvcHRpb25MYWJlbDogKHZhbHVlKSA9PiBBcnJheS5pc0FycmF5KHZhbHVlKVxuICAgICAgICA/IGBbJHt2YWx1ZS5qb2luKFwiLFwiKX1dYFxuICAgICAgICA6ICh2YWx1ZT8udG9Mb2NhbGVTdHJpbmcoREVGQVVMVF9MT0NBTEUpID8/IFwiXCIpLFxufSk7XG5jb25zdCBCb29sZWFuVHlwZSA9IGNyZWF0ZUJ1aWx0SW5UeXBlKFwiYm9vbGVhblwiLCB7XG4gICAgdHJhbnNmb3JtOiAodmFsdWUpID0+IHZhbHVlID09PSBcInRydWVcIiB8fCB2YWx1ZSA9PT0gdHJ1ZSxcbiAgICBvcHRpb25MYWJlbDogKHZhbHVlKSA9PiAodmFsdWUgPyBcInRydWVcIiA6IFwiZmFsc2VcIiksXG59KTtcbmNvbnN0IFRpbWVUeXBlID0gY3JlYXRlQnVpbHRJblR5cGUoXCJ0aW1lXCIsIHtcbiAgICB0cmFuc2Zvcm06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBkYXRlID0gdmFsdWU/LmRhdGUgPyBuZXcgRGF0ZSh2YWx1ZS5kYXRlKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGRhdGUgJiYgZGF0ZS50b1N0cmluZygpICE9PSBcIkludmFsaWQgRGF0ZVwiO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0ZTogaXNWYWxpZCA/IGRhdGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICByZWxhdGl2ZVRpbWVTdHJpbmc6IHZhbHVlPy5yZWxhdGl2ZVRpbWVTdHJpbmcsXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBvcHRpb25MYWJlbDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgaWYgKHZhbHVlPy5kYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gKHZhbHVlLmRhdGU/LnRvTG9jYWxlRGF0ZVN0cmluZyhERUZBVUxUX0xPQ0FMRSkgPz9cbiAgICAgICAgICAgICAgICB2YWx1ZS5kYXRlLnRvTG9jYWxlU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZWxhdGl2ZVRpbWVTdHJpbmc7XG4gICAgfSxcbn0pO1xuY29uc3QgVGltZVJhbmdlVHlwZSA9IGNyZWF0ZUJ1aWx0SW5UeXBlKFwidGltZVJhbmdlXCIsIHtcbiAgICB0cmFuc2Zvcm06ICh2YWx1ZSkgPT4ge1xuICAgICAgICAvLyBSZXR1cm4gdW5kZWZpbmVkIGluc3RlYWQgb2YgYSBudWxsIHBvcHVsYXRlZCBvYmplY3RcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IFtmcm9tLCB0b10gPSBbdmFsdWU/LmZyb20sIHZhbHVlPy50b107XG4gICAgICAgIGNvbnN0IGZyb21EYXRlID0gbmV3IERhdGUoZnJvbSk7XG4gICAgICAgIGNvbnN0IHRvRGF0ZSA9IG5ldyBEYXRlKHRvKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZyb206IGZyb21EYXRlLnRvU3RyaW5nKCkgIT09IFwiSW52YWxpZCBEYXRlXCIgPyBmcm9tRGF0ZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHRvOiB0b0RhdGUudG9TdHJpbmcoKSAhPT0gXCJJbnZhbGlkIERhdGVcIiA/IHRvRGF0ZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJlbGF0aXZlVGltZVN0cmluZzogdmFsdWU/LnJlbGF0aXZlVGltZVN0cmluZyxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG9wdGlvbkxhYmVsOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICBpZiAodmFsdWU/LmZyb20gJiYgdmFsdWU/LnRvKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dmFsdWUuZnJvbT8udG9Mb2NhbGVEYXRlU3RyaW5nKERFRkFVTFRfTE9DQUxFKSA/P1xuICAgICAgICAgICAgICAgIHZhbHVlLmZyb20/LnRvTG9jYWxlU3RyaW5nKCl9LCR7dmFsdWUudG8/LnRvTG9jYWxlRGF0ZVN0cmluZyhERUZBVUxUX0xPQ0FMRSkgPz9cbiAgICAgICAgICAgICAgICB2YWx1ZS50bz8udG9Mb2NhbGVTdHJpbmcoKX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZT8ucmVsYXRpdmVUaW1lU3RyaW5nO1xuICAgIH0sXG59KTtcbmNvbnN0IEdyYW51bGFyaXR5VHlwZSA9IGNyZWF0ZUJ1aWx0SW5UeXBlKFwiZ3JhbnVsYXJpdHlcIiwge1xuICAgIHRyYW5zZm9ybTogKHZhbHVlKSA9PiB2YWx1ZSxcbiAgICBvcHRpb25MYWJlbDogKHZhbHVlKSA9PiB2YWx1ZSxcbn0pO1xuY29uc3QgRGF0YXNldFR5cGUgPSBjcmVhdGVCdWlsdEluVHlwZShcImRhdGFzZXRcIik7XG5jb25zdCBNZWFzdXJlVHlwZSA9IGNyZWF0ZUJ1aWx0SW5UeXBlKFwibWVhc3VyZVwiKTtcbmNvbnN0IERpbWVuc2lvblR5cGUgPSBjcmVhdGVCdWlsdEluVHlwZShcImRpbWVuc2lvblwiKTtcbmNvbnN0IERpbWVuc2lvbk9yTWVhc3VyZVR5cGUgPSBjcmVhdGVCdWlsdEluVHlwZShcImRpbWVuc2lvbk9yTWVhc3VyZVwiKTtcblxudmFyIG5hdGl2ZVR5cGVzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBCb29sZWFuVHlwZTogQm9vbGVhblR5cGUsXG4gICAgRGF0YXNldFR5cGU6IERhdGFzZXRUeXBlLFxuICAgIERpbWVuc2lvbk9yTWVhc3VyZVR5cGU6IERpbWVuc2lvbk9yTWVhc3VyZVR5cGUsXG4gICAgRGltZW5zaW9uVHlwZTogRGltZW5zaW9uVHlwZSxcbiAgICBHcmFudWxhcml0eVR5cGU6IEdyYW51bGFyaXR5VHlwZSxcbiAgICBNZWFzdXJlVHlwZTogTWVhc3VyZVR5cGUsXG4gICAgTnVtYmVyVHlwZTogTnVtYmVyVHlwZSxcbiAgICBTdHJpbmdUeXBlOiBTdHJpbmdUeXBlLFxuICAgIFRpbWVSYW5nZVR5cGU6IFRpbWVSYW5nZVR5cGUsXG4gICAgVGltZVR5cGU6IFRpbWVUeXBlXG59KTtcblxuY29uc3QgZGVmaW5lVGhlbWUgPSAocGFyZW50VGhlbWUsIGNoaWxkVGhlbWUpID0+IHtcbiAgICByZXR1cm4gbWVyZ2ljaWFuKHBhcmVudFRoZW1lLCBjaGlsZFRoZW1lKTtcbn07XG5cbmV4cG9ydCB7IEFMTF9OQVRJVkVfVFlQRVMsIERFRkFVTFRfTkFUSVZFX1RZUEVTLCBESU1FTlNJT05fT1JfTUVBU1VSRV9UWVBFUywgRElNRU5TSU9OX1RZUEVTLCBGaWx0ZXJPcGVyYXRvciwgTUVBU1VSRV9UWVBFUywgVmFsdWUsIGRlZmluZU9wdGlvbiwgZGVmaW5lVGhlbWUsIGRlZmluZVR5cGUsIGlzRGltZW5zaW9uLCBpc0RpbWVuc2lvbk9yTWVhc3VyZSwgaXNMb2FkRGF0YVBhcmFtcywgaXNNZWFzdXJlLCBpc1RpbWVEaW1lbnNpb24sIGxvYWREYXRhLCBuYXRpdmVUeXBlcywgc2V0VmFsdWUgfTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdF9fZGVmYXVsdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc0xvYWREYXRhUGFyYW1zLCBuYXRpdmVUeXBlcywgc2V0VmFsdWUgfSBmcm9tICdAZW1iZWRkYWJsZS5jb20vY29yZSc7XG5cbmNvbnN0IEVtYmVkZGFibGVTdGF0ZUNvbnRleHQgPSBSZWFjdF9fZGVmYXVsdC5jcmVhdGVDb250ZXh0KHt9KTtcbmNvbnN0IHVzZUVtYmVkZGFibGVTdGF0ZSA9IChpbml0aWFsU3RhdGUgPSB7fSkgPT4ge1xuICAgIGNvbnN0IGN0eCA9IFJlYWN0X19kZWZhdWx0LnVzZUNvbnRleHQoRW1iZWRkYWJsZVN0YXRlQ29udGV4dCk7XG4gICAgUmVhY3RfX2RlZmF1bHQudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gT25seSBjYWxsIHNldHRlciBpZiBpdCBleGlzdHMgKHdoZW4gdGhlcmUncyBhIHByb3ZpZGVyKVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjdHgpICYmIHR5cGVvZiBjdHhbMV0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgY3R4WzFdKGluaXRpYWxTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbSlNPTi5zdHJpbmdpZnkoaW5pdGlhbFN0YXRlKV0pO1xuICAgIHJldHVybiBjdHg7XG59O1xuXG5jb25zdCBFbWJlZGRhYmxlVGhlbWVDb250ZXh0ID0gUmVhY3RfX2RlZmF1bHQuY3JlYXRlQ29udGV4dCh7fSk7XG5jb25zdCB1c2VUaGVtZSA9ICgpID0+IHtcbiAgICByZXR1cm4gUmVhY3RfX2RlZmF1bHQudXNlQ29udGV4dChFbWJlZGRhYmxlVGhlbWVDb250ZXh0KTtcbn07XG5cbi8qKlxuICogQ2xlYW5zIHVwIHRoZSBpbnB1dHMgb2YgYW4gb2JqZWN0LCByZW1vdmluZyBhbGwgc3ViIGlucHV0cyBleGNlcHQgZm9yIGdyYW51bGFyaXR5LlxuICogQHBhcmFtIG9ialxuICovXG5mdW5jdGlvbiBjbGVhbklucHV0c1dpdGhHcmFudWxhcml0eShvYmopIHtcbiAgICBpZiAoIW9iaiB8fCAhKFwiaW5wdXRzXCIgaW4gb2JqKSlcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICBjb25zdCB7IGlucHV0cywgLi4ucmVzdCB9ID0gb2JqO1xuICAgIGlmICh0eXBlb2YgaW5wdXRzID09PSBcIm9iamVjdFwiICYmIFwiZ3JhbnVsYXJpdHlcIiBpbiBpbnB1dHMpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4ucmVzdCwgaW5wdXRzOiB7IGdyYW51bGFyaXR5OiBpbnB1dHMuZ3JhbnVsYXJpdHkgfSB9O1xuICAgIH1cbiAgICByZXR1cm4gcmVzdDtcbn1cbi8qKlxuICogQ2xlYW5zIHVwIHRoZSByZXF1ZXN0IHBhcmFtZXRlcnMgYnkgcmVtb3ZpbmcgYWxsIHN1YiBpbnB1dHMgZXhjZXB0IGZvciBncmFudWxhcml0eS5cbiAqIEBwYXJhbSByZXF1ZXN0UGFyYW1zXG4gKi9cbmNvbnN0IGNsZWFudXBSZXF1ZXN0UGFyYW1zID0gKHJlcXVlc3RQYXJhbXMpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5yZXF1ZXN0UGFyYW1zLFxuICAgICAgICBkaW1lbnNpb25zOiBBcnJheS5pc0FycmF5KHJlcXVlc3RQYXJhbXMuZGltZW5zaW9ucylcbiAgICAgICAgICAgID8gcmVxdWVzdFBhcmFtcy5kaW1lbnNpb25zLm1hcChjbGVhbklucHV0c1dpdGhHcmFudWxhcml0eSlcbiAgICAgICAgICAgIDogcmVxdWVzdFBhcmFtcy5kaW1lbnNpb25zLFxuICAgICAgICBtZWFzdXJlczogQXJyYXkuaXNBcnJheShyZXF1ZXN0UGFyYW1zLm1lYXN1cmVzKVxuICAgICAgICAgICAgPyByZXF1ZXN0UGFyYW1zLm1lYXN1cmVzLm1hcChjbGVhbklucHV0c1dpdGhHcmFudWxhcml0eSlcbiAgICAgICAgICAgIDogcmVxdWVzdFBhcmFtcy5tZWFzdXJlcyxcbiAgICAgICAgc2VsZWN0OiBBcnJheS5pc0FycmF5KHJlcXVlc3RQYXJhbXMuc2VsZWN0KVxuICAgICAgICAgICAgPyByZXF1ZXN0UGFyYW1zLnNlbGVjdC5tYXAoKGl0ZW0pID0+IEFycmF5LmlzQXJyYXkoaXRlbSlcbiAgICAgICAgICAgICAgICA/IGl0ZW0ubWFwKGNsZWFuSW5wdXRzV2l0aEdyYW51bGFyaXR5KVxuICAgICAgICAgICAgICAgIDogY2xlYW5JbnB1dHNXaXRoR3JhbnVsYXJpdHkoaXRlbSkpXG4gICAgICAgICAgICA6IHJlcXVlc3RQYXJhbXMuc2VsZWN0LFxuICAgICAgICBvcmRlckJ5OiBBcnJheS5pc0FycmF5KHJlcXVlc3RQYXJhbXMub3JkZXJCeSlcbiAgICAgICAgICAgID8gcmVxdWVzdFBhcmFtcy5vcmRlckJ5Lm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5OiBjbGVhbklucHV0c1dpdGhHcmFudWxhcml0eShpdGVtLnByb3BlcnR5KSxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgOiByZXF1ZXN0UGFyYW1zLm9yZGVyQnksXG4gICAgICAgIGZpbHRlcnM6IEFycmF5LmlzQXJyYXkocmVxdWVzdFBhcmFtcy5maWx0ZXJzKVxuICAgICAgICAgICAgPyByZXF1ZXN0UGFyYW1zLmZpbHRlcnMubWFwKChmaWx0ZXIpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4uZmlsdGVyLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5OiBjbGVhbklucHV0c1dpdGhHcmFudWxhcml0eShmaWx0ZXIucHJvcGVydHkpLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICA6IHJlcXVlc3RQYXJhbXMuZmlsdGVycyxcbiAgICB9O1xufTtcblxuY29uc3QgVVBEQVRFX0NMSUVOVF9DT05URVhUX0VWRU5UX05BTUUgPSBcImVtYmVkZGFibGUtZXZlbnQ6dXBkYXRlLWNsaWVudC1jb250ZXh0XCI7XG5jb25zdCBVUERBVEVfUFJPUFNfRVZFTlRfTkFNRSA9IFwiZW1iZWRkYWJsZS1ldmVudDp1cGRhdGUtcHJvcHNcIjtcbmNvbnN0IFJFTE9BRF9EQVRBU0VUX0VWRU5UX05BTUUgPSBcImVtYmVkZGFibGUtZXZlbnQ6cmVsb2FkLWRhdGFzZXRcIjtcbmNvbnN0IExPQURfREFUQV9SRVNVTFRfRVZFTlRfTkFNRSA9IFwiZW1iZWRkYWJsZS1ldmVudDpsb2FkLWRhdGEtcmVzdWx0XCI7XG5jb25zdCBVUERBVEVfVEhFTUVfRVZFTlRfTkFNRSA9IFwiZW1iZWRkYWJsZS1ldmVudDp1cGRhdGUtdGhlbWVcIjtcbmNvbnN0IFJlZHVjZXJBY3Rpb25UeXBlcyA9IHtcbiAgICBsb2FkaW5nOiBcImxvYWRpbmdcIixcbiAgICBlcnJvcjogXCJlcnJvclwiLFxuICAgIGRhdGE6IFwiZGF0YVwiLFxufTtcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBSZWR1Y2VyQWN0aW9uVHlwZXMubG9hZGluZzoge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBbYWN0aW9uLmlucHV0TmFtZV06IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogc3RhdGVbYWN0aW9uLmlucHV0TmFtZV0/LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFJlZHVjZXJBY3Rpb25UeXBlcy5kYXRhOiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIFthY3Rpb24uaW5wdXROYW1lXTogeyBpc0xvYWRpbmc6IGZhbHNlLCBkYXRhOiBhY3Rpb24ucGF5bG9hZCB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFJlZHVjZXJBY3Rpb25UeXBlcy5lcnJvcjoge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBbYWN0aW9uLmlucHV0TmFtZV06IHtcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkLm1lc3NhZ2UgfHwgYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xufTtcbmNvbnN0IGNyZWF0ZUluaXRpYWxMb2FkZXJzU3RhdGUgPSAoZGF0YUxvYWRlcnMpID0+IE9iamVjdC5rZXlzKGRhdGFMb2FkZXJzKS5yZWR1Y2UoKGxvYWRlclN0YXRlLCBsb2FkZXJLZXkpID0+ICh7XG4gICAgLi4ubG9hZGVyU3RhdGUsXG4gICAgW2xvYWRlcktleV06IHsgaXNMb2FkaW5nOiB0cnVlIH0sXG59KSwge30pO1xuY29uc3QgZGVzZXJpYWxpemVQcm9wcyA9IChwcm9wcywgbWV0YSkgPT4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKHByb3BzKS5tYXAoKFtwcm9wTmFtZSwgcHJvcFZhbHVlXSkgPT4ge1xuICAgIGNvbnN0IGlucHV0UHJvcENvbmZpZyA9IG1ldGEuaW5wdXRzPy5maW5kKChjb25maWcpID0+IGNvbmZpZy5uYW1lID09PSBwcm9wTmFtZSk7XG4gICAgY29uc3QgZGVzZXJpYWxpemUgPSB0eXBlb2YgaW5wdXRQcm9wQ29uZmlnPy50eXBlID09PSBcInN0cmluZ1wiXG4gICAgICAgID8gT2JqZWN0LnZhbHVlcyhuYXRpdmVUeXBlcykuZmluZCgodHlwZSkgPT4gdHlwZS50b1N0cmluZygpID09PSBpbnB1dFByb3BDb25maWc/LnR5cGUpPy50eXBlQ29uZmlnPy50cmFuc2Zvcm1cbiAgICAgICAgOiBpbnB1dFByb3BDb25maWc/LnR5cGU/LnR5cGVDb25maWc/LnRyYW5zZm9ybTtcbiAgICByZXR1cm4gW3Byb3BOYW1lLCBkZXNlcmlhbGl6ZT8uKHByb3BWYWx1ZSkgPz8gcHJvcFZhbHVlXTtcbn0pKTtcbmNvbnN0IGdldElucHV0VmFsdWVzRnJvbU1ldGEgPSAobWV0YSkgPT4ge1xuICAgIGxldCBpbnB1dFZhbHVlcyA9IHt9O1xuICAgIChtZXRhLmlucHV0cyB8fCBbXSkuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgaW5wdXRWYWx1ZXMgPSB7XG4gICAgICAgICAgICAuLi5pbnB1dFZhbHVlcyxcbiAgICAgICAgICAgIFtpbnB1dC5uYW1lXTogaW5wdXQuZGVmYXVsdFZhbHVlID8/IG51bGwsXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGlucHV0VmFsdWVzO1xufTtcbmZ1bmN0aW9uIGRlZmluZUNvbXBvbmVudChJbm5lckNvbXBvbmVudCwgbWV0YSwgY29uZmlnID0ge30pIHtcbiAgICBmdW5jdGlvbiBFbWJlZGRhYmxlV3JhcHBlcih7IHByb3BzVXBkYXRlTGlzdGVuZXIsIGNsaWVudENvbnRleHQsIGVtYmVkZGFibGVUaGVtZSwgLi4ucHJvcHMgfSkge1xuICAgICAgICBjb25zdCBbcHJvcHNQcm94eSwgc2V0UHJvcHNQcm94eV0gPSBSZWFjdC51c2VTdGF0ZShwcm9wcyk7XG4gICAgICAgIGNvbnN0IFtjbGllbnRDb250ZXh0UHJveHksIHNldENsaWVudENvbnRleHRQcm94eV0gPSBSZWFjdC51c2VTdGF0ZShjbGllbnRDb250ZXh0KTtcbiAgICAgICAgY29uc3QgZW1iZWRkYWJsZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoKTtcbiAgICAgICAgY29uc3QgW2NhbGN1bGF0ZWRPdmVycmlkYWJsZVByb3BzLCBzZXRDYWxjdWxhdGVkT3ZlcnJpZGFibGVQcm9wc10gPSBSZWFjdC51c2VTdGF0ZShlbWJlZGRhYmxlVGhlbWUgPz8ge30pO1xuICAgICAgICBjb25zdCB7IGNvbXBvbmVudElkIH0gPSBwcm9wcztcbiAgICAgICAgY29uc3QgbG9hZERhdGFSZXN1bHRFdmVudE5hbWUgPSBgJHtMT0FEX0RBVEFfUkVTVUxUX0VWRU5UX05BTUV9OiR7Y29tcG9uZW50SWR9YDtcbiAgICAgICAgY29uc3QgcHJvcHNVcGRhdGVFdmVudEhhbmRsZXIgPSAoeyBkZXRhaWwsIH0pID0+IHNldFByb3BzUHJveHkoZGV0YWlsKTtcbiAgICAgICAgY29uc3QgY2xpZW50Q29udGV4dFVwZGF0ZUV2ZW50SGFuZGxlciA9ICh7IGRldGFpbCwgfSkgPT4gc2V0Q2xpZW50Q29udGV4dFByb3h5KGRldGFpbCk7XG4gICAgICAgIGNvbnN0IHRoZW1lVXBkYXRlRXZlbnRIYW5kbGVyID0gKHsgZGV0YWlsLCB9KSA9PiBzZXRDYWxjdWxhdGVkT3ZlcnJpZGFibGVQcm9wcyhkZXRhaWwpO1xuICAgICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm90aWZ5RGV2dG9vbExpc3RlbmVyID0gKHsgZGV0YWlsLCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93Ll9fRU1CRUREQUJMRV9ERVZUT09MU19fPy5ub3RpZnlQcm9wc1VwZGF0ZWQoY29tcG9uZW50SWQsIG1ldGEsIHByb3BzUHJveHksIGRldGFpbCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcHJvcHNVcGRhdGVMaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyKFVQREFURV9QUk9QU19FVkVOVF9OQU1FLCBub3RpZnlEZXZ0b29sTGlzdGVuZXIpO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHByb3BzVXBkYXRlTGlzdGVuZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihVUERBVEVfUFJPUFNfRVZFTlRfTkFNRSwgbm90aWZ5RGV2dG9vbExpc3RlbmVyKTtcbiAgICAgICAgfSwgW3Byb3BzUHJveHldKTtcbiAgICAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIHByb3BzVXBkYXRlTGlzdGVuZXIuYWRkRXZlbnRMaXN0ZW5lcihVUERBVEVfQ0xJRU5UX0NPTlRFWFRfRVZFTlRfTkFNRSwgY2xpZW50Q29udGV4dFVwZGF0ZUV2ZW50SGFuZGxlcik7XG4gICAgICAgICAgICBwcm9wc1VwZGF0ZUxpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoVVBEQVRFX1BST1BTX0VWRU5UX05BTUUsIHByb3BzVXBkYXRlRXZlbnRIYW5kbGVyKTtcbiAgICAgICAgICAgIHByb3BzVXBkYXRlTGlzdGVuZXIuYWRkRXZlbnRMaXN0ZW5lcihVUERBVEVfVEhFTUVfRVZFTlRfTkFNRSwgdGhlbWVVcGRhdGVFdmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlUHJvcHNFdmVudCA9IG5ldyBDdXN0b21FdmVudChcImVtYmVkZGFibGUtZXZlbnQ6dXBkYXRlLXByb3BzLWxpc3RlblwiLCB7XG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7IGNvbXBvbmVudElkIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KHVwZGF0ZVByb3BzRXZlbnQpO1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlQ2xpZW50Q29udGV4dEV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwiZW1iZWRkYWJsZS1ldmVudDp1cGRhdGUtY2xpZW50LWNvbnRleHQtbGlzdGVuXCIsIHtcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHsgY29tcG9uZW50SWQgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQodXBkYXRlQ2xpZW50Q29udGV4dEV2ZW50KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvcHNVcGRhdGVMaXN0ZW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFVQREFURV9DTElFTlRfQ09OVEVYVF9FVkVOVF9OQU1FLCBjbGllbnRDb250ZXh0VXBkYXRlRXZlbnRIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBwcm9wc1VwZGF0ZUxpc3RlbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoVVBEQVRFX1BST1BTX0VWRU5UX05BTUUsIHByb3BzVXBkYXRlRXZlbnRIYW5kbGVyKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIFtdKTtcbiAgICAgICAgY29uc3QgeyBleHRlbmRlZFByb3BzLCBkYXRhTG9hZGVycyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiBPYmplY3QuZW50cmllcyh7XG4gICAgICAgICAgICAuLi5nZXRJbnB1dFZhbHVlc0Zyb21NZXRhKG1ldGEpLFxuICAgICAgICAgICAgLi4uY29uZmlnPy5wcm9wcz8uKGRlc2VyaWFsaXplUHJvcHMocHJvcHNQcm94eSwgbWV0YSksIGVtYmVkZGFibGVTdGF0ZSwgY2xpZW50Q29udGV4dFByb3h5KSxcbiAgICAgICAgfSkucmVkdWNlKChhY2MsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzTG9hZERhdGFQYXJhbXModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgYWNjLmRhdGFMb2FkZXJzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjYy5leHRlbmRlZFByb3BzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIHsgZXh0ZW5kZWRQcm9wczoge30sIGRhdGFMb2FkZXJzOiB7fSB9KSwgW3Byb3BzUHJveHksIGNvbmZpZz8ucHJvcHMsIGVtYmVkZGFibGVTdGF0ZVswXSwgY2xpZW50Q29udGV4dFByb3h5XSk7XG4gICAgICAgIGNvbnN0IFtsb2FkZXJzU3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIocmVkdWNlciwgZGF0YUxvYWRlcnMsIGNyZWF0ZUluaXRpYWxMb2FkZXJzU3RhdGUpO1xuICAgICAgICBjb25zdCBoYW5kbGVEYXRhTG9hZGVkID0gKGlucHV0TmFtZSwgZGF0YSkgPT4gZGlzcGF0Y2goeyB0eXBlOiBSZWR1Y2VyQWN0aW9uVHlwZXMuZGF0YSwgaW5wdXROYW1lLCBwYXlsb2FkOiBkYXRhIH0pO1xuICAgICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChpbnB1dE5hbWUsIGVycm9yKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFJlZHVjZXJBY3Rpb25UeXBlcy5lcnJvciwgaW5wdXROYW1lLCBwYXlsb2FkOiBlcnJvciB9KTtcbiAgICAgICAgY29uc3QgcmVsb2FkRGF0YXNldCA9IChpbnB1dE5hbWUsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBSZWR1Y2VyQWN0aW9uVHlwZXMubG9hZGluZywgaW5wdXROYW1lIH0pO1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBwYXJhbXMuZGF0YUxvYWRlcihwcm9wc1VwZGF0ZUxpc3RlbmVyLCBwYXJhbXMucmVxdWVzdFBhcmFtcywgY29tcG9uZW50SWQsIGlucHV0TmFtZSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpXG4gICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IoaW5wdXROYW1lLCBlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhbmRsZUxvYWREYXRhUmVzdWx0ID0gKGV2KSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuX19FTUJFRERBQkxFX0RFVlRPT0xTX18/Lm5vdGlmeURhdGFMb2FkZWQoY29tcG9uZW50SWQsIG1ldGEsIGV2LmRldGFpbCk7XG4gICAgICAgICAgICBpZiAoZXYuZGV0YWlsLmlzU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGhhbmRsZURhdGFMb2FkZWQoZXYuZGV0YWlsLnByb3BlcnR5TmFtZSwgZXYuZGV0YWlsLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IoZXYuZGV0YWlsLnByb3BlcnR5TmFtZSwgZXYuZGV0YWlsLmVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdmFyaWFibGVDaGFuZ2VkRXZlbnRIYW5kbGVyID0gKHsgZGV0YWlsLCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhTG9hZGVyc0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhkYXRhTG9hZGVycykuZmlsdGVyKChbXywgcGFyYW1zXSkgPT4gcGFyYW1zLnJlcXVlc3RQYXJhbXMuZnJvbS5kYXRhc2V0SWQgPT09IGRldGFpbC5kYXRhc2V0SWQpO1xuICAgICAgICAgICAgd2luZG93Ll9fRU1CRUREQUJMRV9ERVZUT09MU19fPy5ub3RpZnlWYXJpYWJsZVVwZGF0ZWQoY29tcG9uZW50SWQsIG1ldGEsIGRldGFpbCwgT2JqZWN0LmZyb21FbnRyaWVzKGRhdGFMb2FkZXJzRW50cmllcykpO1xuICAgICAgICAgICAgZGF0YUxvYWRlcnNFbnRyaWVzLmZvckVhY2goKFtpbnB1dE5hbWUsIHBhcmFtc10pID0+IHJlbG9hZERhdGFzZXQoaW5wdXROYW1lLCBwYXJhbXMpKTtcbiAgICAgICAgfTtcbiAgICAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRhdGFMb2FkZXJzKS5mb3JFYWNoKChbaW5wdXROYW1lLCBwYXJhbXNdKSA9PiByZWxvYWREYXRhc2V0KGlucHV0TmFtZSwgcGFyYW1zKSk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihSRUxPQURfREFUQVNFVF9FVkVOVF9OQU1FLCB2YXJpYWJsZUNoYW5nZWRFdmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgcHJvcHNVcGRhdGVMaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyKGxvYWREYXRhUmVzdWx0RXZlbnROYW1lLCBoYW5kbGVMb2FkRGF0YVJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFJFTE9BRF9EQVRBU0VUX0VWRU5UX05BTUUsIHZhcmlhYmxlQ2hhbmdlZEV2ZW50SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgcHJvcHNVcGRhdGVMaXN0ZW5lci5yZW1vdmVFdmVudExpc3RlbmVyKGxvYWREYXRhUmVzdWx0RXZlbnROYW1lLCBoYW5kbGVMb2FkRGF0YVJlc3VsdCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCBbXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShPYmplY3QudmFsdWVzKGRhdGFMb2FkZXJzKS5tYXAoKGxvYWRlcikgPT4gY2xlYW51cFJlcXVlc3RQYXJhbXMobG9hZGVyLnJlcXVlc3RQYXJhbXMpKSksXG4gICAgICAgIF0pO1xuICAgICAgICBjb25zdCBjcmVhdGVFdmVudCA9ICh2YWx1ZSwgZXZlbnROYW1lKSA9PiBzZXRWYWx1ZShwcm9wc1VwZGF0ZUxpc3RlbmVyLCB2YWx1ZSwgY29tcG9uZW50SWQsIGV2ZW50TmFtZSk7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IGNvbmZpZz8uZXZlbnRzO1xuICAgICAgICBjb25zdCBldmVudFByb3BzID0ge307XG4gICAgICAgIGlmIChldmVudHMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZXZlbnQgaW4gZXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50cy5oYXNPd25Qcm9wZXJ0eShldmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV2ZW50RnVuY3Rpb24gPSBldmVudHNbZXZlbnRdO1xuICAgICAgICAgICAgICAgICAgICBldmVudFByb3BzW2V2ZW50XSA9ICh2YWx1ZSkgPT4gY3JlYXRlRXZlbnQoZXZlbnRGdW5jdGlvbih2YWx1ZSksIGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEVtYmVkZGFibGVTdGF0ZUNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IGVtYmVkZGFibGVTdGF0ZSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChFbWJlZGRhYmxlVGhlbWVDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjYWxjdWxhdGVkT3ZlcnJpZGFibGVQcm9wcyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5uZXJDb21wb25lbnQsIHsgLi4uZXh0ZW5kZWRQcm9wcywgLi4uZXZlbnRQcm9wcywgLi4ubG9hZGVyc1N0YXRlIH0pKSkpO1xuICAgIH1cbiAgICBFbWJlZGRhYmxlV3JhcHBlci5kaXNwbGF5TmFtZSA9IGBlbWJlZGRlZCgke0lubmVyQ29tcG9uZW50LmRpc3BsYXlOYW1lID8/IG1ldGEubmFtZX0pYDtcbiAgICByZXR1cm4gRW1iZWRkYWJsZVdyYXBwZXI7XG59XG5cbmNvbnN0IGlzT3BlcmF0aW9uID0gKHZhbHVlKSA9PiB2YWx1ZT8ub3BlcmF0aW9uICYmIHZhbHVlPy5fX2VtYmVkZGFibGVWYXJpYWJsZU1ldGE7XG5mdW5jdGlvbiBkZWZpbmVFZGl0b3IoSW5uZXJDb21wb25lbnQsIG1ldGEsIGNvbmZpZykge1xuICAgIGZ1bmN0aW9uIEVtYmVkZGFibGVXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgY29tcG9uZW50SWQsIGluaXRpYWxWYWx1ZSwgcHJvcHNVcGRhdGVMaXN0ZW5lciB9ID0gcHJvcHM7XG4gICAgICAgIGNvbnN0IHsgdHlwZTogeyB0eXBlQ29uZmlnOiB7IHRyYW5zZm9ybSB9LCB9LCB9ID0gbWV0YTtcbiAgICAgICAgY29uc3QgW2NvbXBvbmVudFN0YXRlLCBzZXRDb21wb25lbnRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xuICAgICAgICBjb25zdCBzZXR0ZXIgPSAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHNldENvbXBvbmVudFN0YXRlKGlzT3BlcmF0aW9uKHZhbHVlKSA/IHZhbHVlLnZhbHVlIDogdmFsdWUpO1xuICAgICAgICAgICAgc2V0VmFsdWUocHJvcHNVcGRhdGVMaXN0ZW5lciwgdmFsdWUsIGNvbXBvbmVudElkKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KElubmVyQ29tcG9uZW50LCB7IC4uLmNvbmZpZy5pbnB1dHModHJhbnNmb3JtPy4oY29tcG9uZW50U3RhdGUpIHx8IGNvbXBvbmVudFN0YXRlLCBzZXR0ZXIsIG1ldGEuY29uZmlnKSwgLi4uKGNvbmZpZy5tYXBQcm9wcz8uKHByb3BzKSA/PyB7fSkgfSkpO1xuICAgIH1cbiAgICBFbWJlZGRhYmxlV3JhcHBlci5kaXNwbGF5TmFtZSA9IGBlbWJlZGRlZCgke0lubmVyQ29tcG9uZW50LmRpc3BsYXlOYW1lID8/IG1ldGEubmFtZX0pYDtcbiAgICByZXR1cm4gRW1iZWRkYWJsZVdyYXBwZXI7XG59XG5cbmV4cG9ydCB7IEVtYmVkZGFibGVUaGVtZUNvbnRleHQsIGRlZmluZUNvbXBvbmVudCwgZGVmaW5lRWRpdG9yLCB1c2VFbWJlZGRhYmxlU3RhdGUsIHVzZVRoZW1lIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iXSwibmFtZXMiOlsiUmVhY3RfX2RlZmF1bHQiLCJSZWFjdC51c2VTdGF0ZSIsIlJlYWN0LnVzZUVmZmVjdCIsIlJlYWN0LnVzZU1lbW8iLCJSZWFjdC51c2VSZWR1Y2VyIiwiUmVhY3Qu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
